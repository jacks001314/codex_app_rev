export const __rspack_esm_ids = [10633]
export const __webpack_modules__ = {
  eRxB() {},
  T0kF(e, t, a) {
    var n = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, n.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M16.0013 5.00024C16.0013 4.44715 15.5534 3.99847 15.0003 3.99829H5.00031C4.4471 3.99829 3.99835 4.44704 3.99835 5.00024V5.97583C3.99835 6.24147 4.10349 6.49697 4.29132 6.68481L7.48175 9.87524L7.63702 10.0461C7.97691 10.461 8.16534 10.9826 8.16534 11.5237V15.1663C8.16534 15.3015 8.24656 15.4238 8.3714 15.4758L11.3714 16.7258C11.592 16.8176 11.8353 16.6553 11.8353 16.4163V11.5237C11.8353 10.9054 12.0808 10.3125 12.5179 9.87524L15.7083 6.68481L15.7747 6.6106C15.9206 6.43239 16.0013 6.20818 16.0013 5.97583V5.00024ZM17.3314 5.97583C17.3314 6.51694 17.144 7.03943 16.804 7.45435L16.6487 7.62524L13.4583 10.8157C13.2706 11.0035 13.1653 11.2581 13.1653 11.5237V16.4163C13.1653 17.6044 11.9564 18.4103 10.8597 17.9534L7.85968 16.7034C7.23925 16.4448 6.83527 15.8384 6.83527 15.1663V11.5237C6.83527 11.258 6.72917 11.0035 6.54132 10.8157L3.35089 7.62524C2.91364 7.18798 2.66827 6.59421 2.66827 5.97583V5.00024C2.66827 3.7125 3.71256 2.66821 5.00031 2.66821H15.0003C16.2879 2.66839 17.3314 3.71261 17.3314 5.00024V5.97583Z",
            fill: "currentColor",
          }),
        })))
  },
  gZbc(e, t, a) {
    var n = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, n.jsxs)("svg", {
          width: 21,
          height: 21,
          viewBox: "0 0 21 21",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, n.jsx)("path", {
              d: "M10.6 9.70459C11.0142 9.70461 11.35 10.0404 11.35 10.4546V13.7876C11.35 14.2018 11.0142 14.5376 10.6 14.5376C10.1858 14.5376 9.84998 14.2018 9.84998 13.7876V10.4546C9.84998 10.0404 10.1858 9.70459 10.6 9.70459Z",
              fill: "currentColor",
            }),
            (0, n.jsx)("path", {
              d: "M10.6 6.2876C11.1292 6.28762 11.558 6.71732 11.558 7.24658C11.5578 7.77569 11.1291 8.20457 10.6 8.20459C10.0708 8.20459 9.64215 7.7757 9.64197 7.24658C9.64197 6.71731 10.0707 6.2876 10.6 6.2876Z",
              fill: "currentColor",
            }),
            (0, n.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10.6 2.53955C14.9713 2.53955 18.515 6.08326 18.515 10.4546C18.515 14.8259 14.9713 18.3696 10.6 18.3696C6.22864 18.3696 2.68494 14.8259 2.68494 10.4546C2.68494 6.08326 6.22864 2.53955 10.6 2.53955ZM10.6 3.86963C6.96318 3.86963 4.01501 6.81779 4.01501 10.4546C4.01501 14.0914 6.96318 17.0396 10.6 17.0396C14.2368 17.0396 17.1849 14.0914 17.1849 10.4546C17.1849 6.81779 14.2368 3.86963 10.6 3.86963Z",
              fill: "currentColor",
            }),
          ],
        })))
  },
  Q2Qp(e, t, a) {
    var n = a("zd8w")
    let l = (0, n.createContext)({ current: null }),
      r = (0, n.createContext)(null)
    a.d(t, {}, { H: r, K: l })
  },
  h8aU(e, t, a) {
    a.d(
      t,
      {},
      {
        et: function (e, t) {
          return null == e || null == t ? null : (e.matches[t] ?? null)
        },
        rG: function (e, t) {
          let { query: a, routeContextId: n, stateDomain: l, result: r } = e
          return 0 === a.length || l !== t || null == r || r.domain !== t || r.contextId !== n ? null : r
        },
        xY: function (e, t, a) {
          let n = [],
            l = 0,
            r = !1
          if (0 === t.length) return { offsets: n, totalMatches: l, isCapped: r }
          let i = e.toLowerCase(),
            s = t.toLowerCase(),
            o = null
          if (i.length !== e.length) {
            o = []
            for (let t = 0; t < e.length; t += 1) for (let a = 0; a < e[t].toLowerCase().length; a += 1) o.push(t)
          }
          let d = 0
          for (let e = i.indexOf(s); -1 !== e; e = i.indexOf(s, d)) {
            let t = e + s.length,
              i = o?.[e] ?? e,
              c = null == o ? t : o[t - 1] + 1
            for (d = t; o?.[d] === c - 1;) d += 1
            ;((l += 1), n.length < a ? n.push({ start: i, end: c }) : (r = !0))
          }
          return { offsets: n, totalMatches: l, isCapped: r }
        },
      },
    )
  },
  zjpG(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      r = a("on57"),
      i = a("oyxz")
    a.d(
      t,
      {},
      {
        a: function (e) {
          let t,
            a,
            s,
            o = (0, l.c)(5),
            { className: d } = e
          return (
            o[0] !== d ? ((t = (0, r.A)("last:hidden", d)), (o[0] = d), (o[1] = t)) : (t = o[1]),
            o[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, n.jsx)(i.A, { id: "codex.ui.bulletSeparator", defaultMessage: "\xb7" })), (o[2] = a))
              : (a = o[2]),
            o[3] !== t
              ? ((s = (0, n.jsx)("span", { "aria-hidden": !0, className: t, children: a })), (o[3] = t), (o[4] = s))
              : (s = o[4]),
            s
          )
        },
      },
    )
  },
  mHZT(e, t, a) {
    a.d(
      t,
      {},
      {
        s: function (e) {
          let t = 0,
            a = 0
          for (let n of e) ((t += n.additions), (a += n.deletions))
          let n = e.length,
            l = t > 0 || a > 0
          return { fileCount: n, linesAdded: t, linesDeleted: a, hasChanges: l }
        },
      },
    )
  },
  e4Ta(e, t, a) {
    a.d(t, { EditorDiffPage: () => X, t: () => Y })
    var n = a("ABep"),
      l = a("QosV"),
      r = a("slpy"),
      i = a("Q3l5"),
      s = a("Tn3E"),
      o = a("HFi9"),
      d = a.n(o),
      c = a("qmMi"),
      u = a("DBCl"),
      f = a("zd8w"),
      m = a("Wf1j"),
      h = a("oyxz"),
      p = a("Ywss"),
      g = a("tl5a"),
      v = a("pwjC"),
      x = a("Sm6l"),
      y = a("HOLv"),
      w = a("EShr"),
      b = a("x8co"),
      C = (e) =>
        (0, n.jsxs)("svg", {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, n.jsx)("rect", {
              x: 3.5,
              y: 4.5,
              width: 17,
              height: 15,
              rx: 3,
              stroke: "currentColor",
              strokeWidth: 2,
            }),
            (0, n.jsx)("path", {
              d: "M6 8C6 7.44772 6.44772 7 7 7H10.25C10.8023 7 11.25 7.44772 11.25 8V16C11.25 16.5523 10.8023 17 10.25 17H7C6.44772 17 6 16.5523 6 16V8Z",
              fill: "#F84E63",
              fillOpacity: 0.5,
            }),
            (0, n.jsx)("path", {
              d: "M12.75 8C12.75 7.44772 13.1977 7 13.75 7H17C17.5523 7 18 7.44772 18 8V16C18 16.5523 17.5523 17 17 17H13.75C13.1977 17 12.75 16.5523 12.75 16V8Z",
              fill: "#36D958",
              fillOpacity: 0.5,
            }),
          ],
        }),
      j = (e) =>
        (0, n.jsxs)("svg", {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, n.jsx)("rect", {
              x: 3.5,
              y: 4.5,
              width: 17,
              height: 15,
              rx: 3,
              stroke: "currentColor",
              strokeWidth: 2,
            }),
            (0, n.jsx)("path", {
              d: "M6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8V10.25C18 10.8023 17.5523 11.25 17 11.25H7C6.44772 11.25 6 10.8023 6 10.25V8Z",
              fill: "#F84E63",
              fillOpacity: 0.5,
            }),
            (0, n.jsx)("path", {
              d: "M6 13.75C6 13.1977 6.44772 12.75 7 12.75H17C17.5523 12.75 18 13.1977 18 13.75V16C18 16.5523 17.5523 17 17 17H7C6.44772 17 6 16.5523 6 16V13.75Z",
              fill: "#36D958",
              fillOpacity: 0.5,
            }),
          ],
        }),
      M = a("kW2F"),
      k = a("K0l0"),
      S = a("QpPI"),
      A = a("QaKP"),
      I = a("GRTq"),
      _ = a("tSEg"),
      P = a("kfGJ"),
      N = a("pSZF"),
      R = a("zdVt"),
      U = a("Fmrr"),
      D = a("mHZT"),
      T = a("NxNN"),
      L = a("EpL9"),
      F = a("XXJV"),
      O = a("bnxy"),
      B = a("T0Rc"),
      E = a("zOE4"),
      G = a("SN64"),
      q = a("oHNx"),
      z = a("Q9a5"),
      V = a("bWX0"),
      $ = a("FbaP")
    function W(e) {
      let t,
        a = (0, l.c)(5),
        { source: r, fallback: i } = e,
        s = (0, $.a)(r)
      if (s.isLoading) {
        let e
        return (
          a[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(E.LoadingPage, {})), (a[0] = e))
            : (e = a[0]),
          e
        )
      }
      return (
        a[1] !== i || a[2] !== s.dataUrl || a[3] !== r
          ? ((t = s.dataUrl?.startsWith("data:image/")
              ? (0, n.jsx)("img", { className: "size-full object-contain", src: s.dataUrl, alt: r.path })
              : i),
            (a[1] = i),
            (a[2] = s.dataUrl),
            (a[3] = r),
            (a[4] = t))
          : (t = a[4]),
        t
      )
    }
    function K(e) {
      let t,
        a,
        r,
        i,
        s,
        o,
        d = (0, l.c)(23),
        { cwd: c, hostConfig: u, path: m, oid: h, line: p, fallback: g } = e
      ;(d[0] !== c || d[1] !== u.id || d[2] !== h
        ? ((t = ["review-blob", u.id, c, h]), (d[0] = c), (d[1] = u.id), (d[2] = h), (d[3] = t))
        : (t = d[3]),
        d[4] !== c || d[5] !== u || d[6] !== h || d[7] !== m
          ? ((a = async () =>
              (await (0, G.m_)({ cwd: c, hostConfig: u, requests: [{ oid: h, path: m, fallbackToDisk: !1 }] }))[0]),
            (d[4] = c),
            (d[5] = u),
            (d[6] = h),
            (d[7] = m),
            (d[8] = a))
          : (a = d[8]),
        d[9] !== t || d[10] !== a
          ? ((r = { queryKey: t, staleTime: 1 / 0, networkMode: "always", queryFn: a }),
            (d[9] = t),
            (d[10] = a),
            (d[11] = r))
          : (r = d[11]))
      let { data: v, isPending: x } = (0, B.I)(r),
        y = (0, f.useRef)(void 0)
      if (x) {
        let e
        return (
          d[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(E.LoadingPage, {})), (d[12] = e))
            : (e = d[12]),
          e
        )
      }
      if (v?.type !== "success") return g
      d[13] !== v.lines ? ((i = v.lines.join("")), (d[13] = v.lines), (d[14] = i)) : (i = d[14])
      let w = h + m
      return (
        d[15] !== p
          ? ((s = (e) => {
              if (null == p || y.current === p) return
              let t = e.shadowRoot?.querySelector(`[data-line="${p}"]`)
              t && (t.scrollIntoView({ block: "center" }), (y.current = p))
            }),
            (d[15] = p),
            (d[16] = s))
          : (s = d[16]),
        d[17] !== p || d[18] !== m || d[19] !== i || d[20] !== w || d[21] !== s
          ? ((o = (0, n.jsx)(z.e, { path: m, contents: i, cacheKey: w, line: p, onPostRender: s })),
            (d[17] = p),
            (d[18] = m),
            (d[19] = i),
            (d[20] = w),
            (d[21] = s),
            (d[22] = o))
          : (o = d[22]),
        o
      )
    }
    let Z = (0, L.v)(
      "review-git-blob",
      function (e) {
        let t,
          a,
          r,
          i,
          s,
          o,
          d,
          c,
          u = (0, l.c)(22)
        ;(u[0] !== e
          ? (({ renderSlots: a, tabState: r, ...t } = e), (u[0] = e), (u[1] = t), (u[2] = a), (u[3] = r))
          : ((t = u[1]), (a = u[2]), (r = u[3])),
          u[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, n.jsx)(h.A, {
                id: "codex.review.blobUnavailable",
                defaultMessage: "This file version can\u2019t be previewed",
              })),
              (u[4] = i))
            : (i = u[4]))
        let f = i
        ;(u[5] !== t.oid ? ((s = { oid: t.oid }), (u[5] = t.oid), (u[6] = s)) : (s = u[6]),
          u[7] !== t.cwd || u[8] !== t.hostConfig.id || u[9] !== t.path || u[10] !== s
            ? ((o = { kind: "git", cwd: t.cwd, hostId: t.hostConfig.id, path: t.path, ref: s }),
              (u[7] = t.cwd),
              (u[8] = t.hostConfig.id),
              (u[9] = t.path),
              (u[10] = s),
              (u[11] = o))
            : (o = u[11]))
        let m = o
        if ((0, V.ZH)(t.path)) {
          let e
          ;(u[12] !== m
            ? ((e = (0, n.jsx)(q._, { imagePreview: { before: null, after: m }, fallback: f, showMissingPreview: !0 })),
              (u[12] = m),
              (u[13] = e))
            : (e = u[13]),
            (d = e))
        } else if ("always" === (0, V.$A)(t.path)) {
          let e
          ;(u[14] !== m ? ((e = (0, n.jsx)(W, { source: m, fallback: f })), (u[14] = m), (u[15] = e)) : (e = u[15]),
            (d = e))
        } else if (t.binary) d = f
        else {
          let e
          ;(u[16] !== t || u[17] !== r.line
            ? ((e = (0, n.jsx)(K, { ...t, line: r.line, fallback: f })), (u[16] = t), (u[17] = r.line), (u[18] = e))
            : (e = u[18]),
            (d = e))
        }
        return (
          u[19] !== d || u[20] !== a
            ? ((c = a({ headerRows: [], content: d })), (u[19] = d), (u[20] = a), (u[21] = c))
            : (c = u[21]),
          c
        )
      },
      { open: Q, defaultState: () => ({ line: void 0 }), isAvailable: () => !0 },
    )
    function Q(e, t, a) {
      let n = "review-git-blob:" + JSON.stringify([t.hostConfig.id, t.cwd, t.path, t.oid]),
        l = (0, F.KE)(e, n) ?? "right",
        r = (0, F.getThreadPanelTabController)(l)
      ;(r.openTab(e, Z, { id: n, title: (0, O.Q0)(t.path), props: t, revealAndFocus: !0 }),
        r.updateTabState(e, n, () => ({ line: a })),
        (0, F.yI)(e, l))
    }
    var H = a("JiBc"),
      J = a("FJTb")
    function X() {
      let e,
        t = (0, l.c)(5),
        a = (function () {
          let e,
            t = (0, l.c)(11),
            a = (0, m.A)(),
            n = (0, p.zy)()
          e: {
            let l,
              r,
              i = n.state
            if (i?.unifiedDiff && i.conversationId)
              try {
                let a,
                  n = i.conversationId ?? null
                ;(t[0] !== i.unifiedDiff || t[1] !== n
                  ? ((a = { diffContent: i.unifiedDiff, conversationId: n }),
                    (t[0] = i.unifiedDiff),
                    (t[1] = n),
                    (t[2] = a))
                  : (a = t[2]),
                  (e = a))
                break e
              } catch {
                let n, l
                ;(t[3] !== a
                  ? ((n = a.formatMessage({
                      id: "codex.diffView.failedToDecodeBase64Diff",
                      defaultMessage: "Couldn\u2019t load this diff",
                    })),
                    (t[3] = a),
                    (t[4] = n))
                  : (n = t[4]),
                  t[5] !== n ? ((l = { error: n }), (t[5] = n), (t[6] = l)) : (l = t[6]),
                  (e = l))
                break e
              }
            ;(t[7] !== a
              ? ((l = a.formatMessage({ id: "codex.diffView.noDiffData", defaultMessage: "No diff available" })),
                (t[7] = a),
                (t[8] = l))
              : (l = t[8]),
              t[9] !== l ? ((r = { error: l }), (t[9] = l), (t[10] = r)) : (r = t[10]),
              (e = r))
          }
          return e
        })()
      if ("error" in a) {
        let e
        return (
          t[0] !== a.error
            ? ((e = (0, n.jsx)("div", { className: "p-4 text-danger", children: a.error })),
              (t[0] = a.error),
              (t[1] = e))
            : (e = t[1]),
          e
        )
      }
      return (
        t[2] !== a.conversationId || t[3] !== a.diffContent
          ? ((e = (0, n.jsx)(Y, { diffContent: a.diffContent, conversationId: a.conversationId })),
            (t[2] = a.conversationId),
            (t[3] = a.diffContent),
            (t[4] = e))
          : (e = t[4]),
        e
      )
    }
    function Y(e) {
      let t,
        a,
        o,
        f,
        v,
        R,
        L,
        F,
        O,
        B,
        E,
        G,
        q,
        z,
        V,
        $,
        W,
        K,
        Z,
        Q,
        X,
        Y,
        er,
        ei,
        eo,
        ed,
        ec,
        eu,
        ef,
        em,
        eh,
        ep,
        eg,
        ev,
        ex,
        ey,
        ew = (0, l.c)(87),
        { diffContent: eb, conversationId: eC, revisionRoot: ej, review: eM } = e,
        ek = (0, c.gh)(_.GD),
        { comments: eS, modelComments: eA, setComments: eI } = (0, J._)(eC)
      ew[0] !== eb ? ((t = (0, H.F)(eb)), (ew[0] = eb), (ew[1] = t)) : (t = ew[1])
      let e_ = t,
        eP = d()(eM?.readonlyComments, en)
      ew[2] !== e_ ? ((a = (0, D.s)(e_)), (ew[2] = e_), (ew[3] = a)) : (a = ew[3])
      let eN = a,
        eR = (0, c.Ul)(T.aS),
        eU = (0, c.Ul)(T.Ev)
      ew[4] !== eC ? ((o = (0, u.JXB)(eC)), (ew[4] = eC), (ew[5] = o)) : (o = ew[5])
      let eD = (0, c._U)(g.Qk, o),
        eT = (0, P.Qz)(eD ?? P.fI),
        eL = eM?.hostConfig ?? eT,
        eF = new Map(eM?.fileObjects.map(ea)),
        eO = (0, m.A)()
      ew[6] !== eC ? ((f = (0, u.JXB)(eC)), (ew[6] = eC), (ew[7] = f)) : (f = ew[7])
      let eB = (0, c._U)(g.JN, f),
        eE = (0, c._U)(g.m8, eC),
        eG = (0, p.zy)(),
        eq = ej ?? (eG.state?.cwd || eB)
      ew[8] !== eq || ew[9] !== eE
        ? ((v = eE ?? (null == eq ? [] : [eq])), (ew[8] = eq), (ew[9] = eE), (ew[10] = v))
        : (v = ew[10])
      let ez = v,
        { fileCount: eV, linesAdded: e$, linesDeleted: eW } = eN
      ew[11] !== e_ || ew[12] !== eV || ew[13] !== e$ || ew[14] !== eW || ew[15] !== eM
        ? ((R = eM
            ? !(0, U.CQ)({ fileCount: eV, totalChangedLines: e$ + eW, totalChangedBytes: e_.reduce(et, 0) })
            : eV <= 25 && e$ + eW <= 2e3),
          (ew[11] = e_),
          (ew[12] = eV),
          (ew[13] = e$),
          (ew[14] = eW),
          (ew[15] = eM),
          (ew[16] = R))
        : (R = ew[16])
      let eK = R,
        eZ = (0, c.Ul)(eM ? I.RO : null),
        eQ = eM?.generatedPaths
      ew[17] !== e_ || ew[18] !== eZ || ew[19] !== eM || ew[20] !== eQ
        ? ((L = new Set(eQ)),
          (F = eM && (0, k.P)(e_, ee, L, L.size > 0 && !0 === eZ)),
          (ew[17] = e_),
          (ew[18] = eZ),
          (ew[19] = eM),
          (ew[20] = eQ),
          (ew[21] = L),
          (ew[22] = F))
        : ((L = ew[21]), (F = ew[22]))
      let eH = F,
        eJ = function (e, t) {
          let a = eF.get(e.metadata.name) ?? eF.get(e.newPath) ?? eF.get(e.oldPath),
            l = a ? { ...e, metadata: { ...e.metadata, prevObjectId: a.before, newObjectId: a.after } } : e,
            r = eM ? el : es
          return (0, n.jsx)(
            r,
            {
              reviewId: eM?.id,
              diff: l,
              hunkSeparators: "line-info",
              viewType: eR,
              richPreviewEnabled: eU,
              stickyHeader: !0,
              diffViewWrap: !1,
              initialOpen: t && eK && "deleted" !== l.metadata.type,
              cwd: null != eq ? (0, u.DIv)(eq) : null,
              workspaceRoot: (0, S.Sj)({ cwd: eq ?? null, path: l.metadata.name, workspaceRoots: ez }),
              hostConfig: eL,
              conversationId: eC,
              enableComments: !0,
              comments: eS,
              modelComments: eA,
              readonlyComments: eM?.readonlyComments && [
                ...(eP[`left:${l.oldPath}`] ?? []).map((e) =>
                  l.oldPath === l.metadata.name ? e : { ...e, position: { ...e.position, path: l.metadata.name } },
                ),
                ...(eP[`right:${l.newPath}`] ?? []),
              ],
              onCommentsChange: eI,
              fullContentNextFallbackToDisk: null == ej,
              committedImageRevision: null == ej ? void 0 : null,
              committedMarkdown:
                null != ej
                  ? { cwd: (0, u.DIv)(ej), hostConfig: eL, oid: l.metadata.newObjectId ?? null, path: l.newPath }
                  : void 0,
            },
            JSON.stringify([eM?.id, l.metadata.name, eM && t]),
          )
        }
      ;(ew[23] !== eV
        ? ((O = (0, n.jsx)("span", {
            className: "text-default",
            children: (0, n.jsx)(h.A, {
              id: "codex.diffView.filesChanged",
              defaultMessage: "{fileCount, plural, one {# file changed} other {# files changed}}",
              values: { fileCount: eV },
            }),
          })),
          (ew[23] = eV),
          (ew[24] = O))
        : (O = ew[24]),
        ew[25] !== e$ || ew[26] !== eW
          ? ((B = (e$ > 0 || eW > 0) && (0, n.jsx)(b.S, { linesAdded: e$, linesRemoved: eW })),
            (ew[25] = e$),
            (ew[26] = eW),
            (ew[27] = B))
          : (B = ew[27]),
        ew[28] !== O || ew[29] !== B
          ? ((E = (0, n.jsxs)("div", { className: "flex items-center gap-2 text-sm", children: [O, B] })),
            (ew[28] = O),
            (ew[29] = B),
            (ew[30] = E))
          : (E = ew[30]),
        ew[31] !== L.size ? ((G = L.size > 0 && (0, n.jsx)(A.q, {})), (ew[31] = L.size), (ew[32] = G)) : (G = ew[32]),
        ew[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = (0, n.jsx)(j, { className: "icon-xs" })), (ew[33] = q))
          : (q = ew[33]),
        ew[34] !== eO
          ? ((z = eO.formatMessage({ id: "codex.diffView.switchToUnified", defaultMessage: "Switch to unified diff" })),
            (ew[34] = eO),
            (ew[35] = z))
          : (z = ew[35]),
        ew[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = (0, n.jsx)(h.A, { id: "codex.diffView.switchToUnified", defaultMessage: "Switch to unified diff" })),
            (ew[36] = V))
          : (V = ew[36]),
        ew[37] !== z
          ? (($ = { id: "unified", label: q, ariaLabel: z, tooltipContent: V }), (ew[37] = z), (ew[38] = $))
          : ($ = ew[38]),
        ew[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((W = (0, n.jsx)(C, { className: "icon-xs" })), (ew[39] = W))
          : (W = ew[39]),
        ew[40] !== eO
          ? ((K = eO.formatMessage({ id: "codex.diffView.switchToSplit", defaultMessage: "Switch to split diff" })),
            (ew[40] = eO),
            (ew[41] = K))
          : (K = ew[41]),
        ew[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = (0, n.jsx)(h.A, { id: "codex.diffView.switchToSplit", defaultMessage: "Switch to split diff" })),
            (ew[42] = Z))
          : (Z = ew[42]),
        ew[43] !== K
          ? ((Q = { id: "split", label: W, ariaLabel: K, tooltipContent: Z }), (ew[43] = K), (ew[44] = Q))
          : (Q = ew[44]),
        ew[45] === Symbol.for("react.memo_cache_sentinel")
          ? ((X = (0, n.jsx)(N.A, { "aria-hidden": "true" })), (ew[45] = X))
          : (X = ew[45]),
        ew[46] !== eO
          ? ((Y = eO.formatMessage({ id: "codex.diffView.auto", defaultMessage: "Auto" })), (ew[46] = eO), (ew[47] = Y))
          : (Y = ew[47]),
        ew[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((er = (0, n.jsx)(h.A, {
              id: "codex.diffView.autoDescription",
              defaultMessage: "Auto: split for additions and removals, inline for narrow panes or one-sided changes",
            })),
            (ew[48] = er))
          : (er = ew[48]),
        ew[49] !== Y
          ? ((ei = { id: "auto", label: X, ariaLabel: Y, tooltipContent: er }), (ew[49] = Y), (ew[50] = ei))
          : (ei = ew[50]),
        ew[51] !== $ || ew[52] !== Q || ew[53] !== ei
          ? ((eo = [$, Q, ei]), (ew[51] = $), (ew[52] = Q), (ew[53] = ei), (ew[54] = eo))
          : (eo = ew[54]),
        ew[55] !== ek ? ((ed = (e) => ek.set(T.aS, e)), (ew[55] = ek), (ew[56] = ed)) : (ed = ew[56]),
        ew[57] !== eR || ew[58] !== eo || ew[59] !== ed
          ? ((ec = (0, n.jsx)(w.T, { options: eo, selectedId: eR, onSelect: ed, size: "toolbar" })),
            (ew[57] = eR),
            (ew[58] = eo),
            (ew[59] = ed),
            (ew[60] = ec))
          : (ec = ew[60]),
        ew[61] === Symbol.for("react.memo_cache_sentinel")
          ? ((eu = (0, n.jsx)(h.A, { id: "codex.diffView.richPreviewToggle", defaultMessage: "Toggle rich preview" })),
            (ew[61] = eu))
          : (eu = ew[61]),
        ew[62] !== eO
          ? ((ef = eO.formatMessage({ id: "codex.diffView.richPreviewToggle", defaultMessage: "Toggle rich preview" })),
            (ew[62] = eO),
            (ew[63] = ef))
          : (ef = ew[63]))
      let eX = eU ? "ghostActive" : "ghost"
      ;(ew[64] !== eU || ew[65] !== ek
        ? ((em = () => ek.set(T.Ev, !eU)), (ew[64] = eU), (ew[65] = ek), (ew[66] = em))
        : (em = ew[66]),
        ew[67] !== eU
          ? ((eh = eU
              ? (0, n.jsx)(y.I, { className: "text-codex-description", "aria-hidden": !1, asset: s.A })
              : (0, n.jsx)(y.I, { className: "text-codex-description", "aria-hidden": !1, asset: i.i })),
            (ew[67] = eU),
            (ew[68] = eh))
          : (eh = ew[68]),
        ew[69] !== eU || ew[70] !== ef || ew[71] !== eX || ew[72] !== em || ew[73] !== eh
          ? ((ep = (0, n.jsx)(r.m, {
              content: eu,
              children: (0, n.jsx)(x.$, {
                "aria-label": ef,
                "aria-pressed": eU,
                color: eX,
                size: "icon",
                onClick: em,
                children: eh,
              }),
            })),
            (ew[69] = eU),
            (ew[70] = ef),
            (ew[71] = eX),
            (ew[72] = em),
            (ew[73] = eh),
            (ew[74] = ep))
          : (ep = ew[74]),
        ew[75] !== G || ew[76] !== ec || ew[77] !== ep
          ? ((eg = (0, n.jsxs)("div", { className: "flex items-center gap-1", children: [G, ec, ep] })),
            (ew[75] = G),
            (ew[76] = ec),
            (ew[77] = ep),
            (ew[78] = eg))
          : (eg = ew[78]),
        ew[79] !== E || ew[80] !== eg
          ? ((ev = (0, n.jsxs)("div", {
              className: "flex items-center justify-between py-2 ps-6 pe-2",
              children: [E, eg],
            })),
            (ew[79] = E),
            (ew[80] = eg),
            (ew[81] = ev))
          : (ev = ew[81]))
      let eY = eH ? (0, n.jsx)(M.x, { list: eH, children: eJ }) : e_.map((e) => eJ(e, !0))
      return (
        ew[82] !== eY
          ? ((ex = (0, n.jsx)("div", {
              className: "flex flex-col gap-1 overflow-y-auto p-[var(--padding-panel)] pt-0",
              children: eY,
            })),
            (ew[82] = eY),
            (ew[83] = ex))
          : (ex = ew[83]),
        ew[84] !== ev || ew[85] !== ex
          ? ((ey = (0, n.jsxs)("div", { className: "flex h-full flex-col", children: [ev, ex] })),
            (ew[84] = ev),
            (ew[85] = ex),
            (ew[86] = ey))
          : (ey = ew[86]),
        ey
      )
    }
    function ee(e) {
      return e.metadata.name
    }
    function et(e, t) {
      return e + (0, U.wn)(t.metadata).changedBytes
    }
    function ea(e) {
      return [e.path, e]
    }
    function en(e) {
      let { position: t } = e
      return `${t.side}:${t.path}`
    }
    function el(e) {
      let t,
        a,
        r,
        i,
        s,
        o,
        d,
        u,
        f,
        m,
        h = (0, l.c)(40),
        p = (0, c.gh)(_.GD),
        { diff: g, cwd: x, hostConfig: y, conversationId: w, reviewId: b } = e,
        C = w ?? null,
        j = g.metadata.name
      ;(h[0] !== g.metadata.prevObjectId || h[1] !== b
        ? ((t = JSON.stringify([b, "left", g.metadata.prevObjectId])),
          (h[0] = g.metadata.prevObjectId),
          (h[1] = b),
          (h[2] = t))
        : (t = h[2]),
        h[3] !== g.metadata.name || h[4] !== C || h[5] !== t
          ? ((a = { conversationId: C, path: j, pullRequestReviewKey: t }),
            (h[3] = g.metadata.name),
            (h[4] = C),
            (h[5] = t),
            (h[6] = a))
          : (a = h[6]))
      let M = a
      ;(h[7] !== g.metadata.newObjectId || h[8] !== b
        ? ((r = JSON.stringify([b, "right", g.metadata.newObjectId])),
          (h[7] = g.metadata.newObjectId),
          (h[8] = b),
          (h[9] = r))
        : (r = h[9]),
        h[10] !== M || h[11] !== r
          ? ((i = { ...M, pullRequestReviewKey: r }), (h[10] = M), (h[11] = r), (h[12] = i))
          : (i = h[12]))
      let k = i,
        S = (0, c._U)(v.OQ, M),
        A = (0, c._U)(v.OQ, k)
      return (
        h[13] !== S || h[14] !== A ? ((s = [...S, ...A]), (h[13] = S), (h[14] = A), (h[15] = s)) : (s = h[15]),
        h[16] !== M || h[17] !== e.readonlyComments || h[18] !== k
          ? ((o = e.readonlyComments?.map((e) => ({
              ...e,
              localPullRequestReviewKey: ("left" === e.position.side ? M : k).pullRequestReviewKey,
            }))),
            (h[16] = M),
            (h[17] = e.readonlyComments),
            (h[18] = k),
            (h[19] = o))
          : (o = h[19]),
        h[20] === Symbol.for("react.memo_cache_sentinel") ? ((d = []), (h[20] = d)) : (d = h[20]),
        h[21] !== M || h[22] !== k || h[23] !== p
          ? ((u = (e) => {
              ;((0, v.vd)(p, M, e.filter(ei)), (0, v.vd)(p, k, e.filter(er)))
            }),
            (h[21] = M),
            (h[22] = k),
            (h[23] = p),
            (h[24] = u))
          : (u = h[24]),
        h[25] !== x ||
        h[26] !== g.isBinary ||
        h[27] !== g.metadata.newObjectId ||
        h[28] !== g.metadata.prevObjectId ||
        h[29] !== g.newPath ||
        h[30] !== g.oldPath ||
        h[31] !== y ||
        h[32] !== p
          ? ((f = (e, t) => {
              let a = "deletions" === e,
                n = a ? g.metadata.prevObjectId : g.metadata.newObjectId
              x &&
                y &&
                n &&
                !/^0+$/.test(n) &&
                Q(p, { cwd: x, hostConfig: y, oid: n, path: a ? g.oldPath : g.newPath, binary: g.isBinary }, t)
            }),
            (h[25] = x),
            (h[26] = g.isBinary),
            (h[27] = g.metadata.newObjectId),
            (h[28] = g.metadata.prevObjectId),
            (h[29] = g.newPath),
            (h[30] = g.oldPath),
            (h[31] = y),
            (h[32] = p),
            (h[33] = f))
          : (f = h[33]),
        h[34] !== e || h[35] !== f || h[36] !== s || h[37] !== o || h[38] !== u
          ? ((m = (0, n.jsx)(es, {
              ...e,
              workspaceRoot: null,
              comments: s,
              readonlyComments: o,
              modelComments: d,
              onCommentsChange: u,
              onOpenRevision: f,
            })),
            (h[34] = e),
            (h[35] = f),
            (h[36] = s),
            (h[37] = o),
            (h[38] = u),
            (h[39] = m))
          : (m = h[39]),
        m
      )
    }
    function er(e) {
      return "right" === e.position.side
    }
    function ei(e) {
      return "left" === e.position.side
    }
    function es(e) {
      let t,
        a,
        r,
        i = (0, l.c)(6)
      i[0] !== e ? (({ initialOpen: t, ...a } = e), (i[0] = e), (i[1] = t), (i[2] = a)) : ((t = i[1]), (a = i[2]))
      let [s, o] = (0, f.useState)(t)
      return (
        i[3] !== s || i[4] !== a
          ? ((r = (0, n.jsx)(R.x, { ...a, open: s, onOpenChange: o })), (i[3] = s), (i[4] = a), (i[5] = r))
          : (r = i[5]),
        r
      )
    }
  },
  Q9a5(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      r = a("N0bB"),
      i = a("eLzw"),
      s = a("uNhY")
    a.d(
      t,
      {},
      {
        e: function (e) {
          let t,
            a,
            o,
            d,
            c,
            u = (0, l.c)(13),
            { path: f, contents: m, cacheKey: h, line: p, onPostRender: g } = e
          return (
            u[0] !== h || u[1] !== m || u[2] !== f
              ? ((t = { name: f, contents: m, cacheKey: h }), (u[0] = h), (u[1] = m), (u[2] = f), (u[3] = t))
              : (t = u[3]),
            u[4] !== p ? ((a = p ? { start: p, end: p } : null), (u[4] = p), (u[5] = a)) : (a = u[5]),
            u[6] === Symbol.for("react.memo_cache_sentinel") ? ((o = (0, s.S)()), (u[6] = o)) : (o = u[6]),
            u[7] !== g
              ? ((d = { preferredHighlighter: o, disableFileHeader: !0, onPostRender: g }), (u[7] = g), (u[8] = d))
              : (d = u[8]),
            u[9] !== t || u[10] !== a || u[11] !== d
              ? ((c = (0, n.jsx)("div", {
                  className: "h-full overflow-auto",
                  children: (0, n.jsx)(i.U, { children: (0, n.jsx)(r.Z, { file: t, selectedLines: a, options: d }) }),
                })),
                (u[9] = t),
                (u[10] = a),
                (u[11] = d),
                (u[12] = c))
              : (c = u[12]),
            c
          )
        },
      },
    )
  },
  ho65(e, t, a) {
    let n = (0, a("x9AG").F)({
      method: "default-branch",
      getParams: (e) => ({ operationSource: e.operationSource, root: e.root }),
      getOptions: (e) => ({
        liveQuery: { method: "default-branch", params: { operationSource: e.operationSource, root: e.root } },
        select: (e) => e.branch,
        staleTime: 1 / 0,
      }),
    }).fromTarget$
    a.d(t, {}, { W: n })
  },
  KDSd(e, t, a) {
    var n = a("QosV"),
      l = a("irkb"),
      r = a("xSOA"),
      i = a("qmMi"),
      s = a("DBCl"),
      o = a("Wf1j"),
      d = a("SGsN"),
      c = a("J43j"),
      u = a("OWtl"),
      f = a("M8aW"),
      m = a("iQgv")
    a.d(
      t,
      {},
      {
        c: function (e) {
          let t,
            a,
            h,
            p,
            g,
            v,
            x,
            y,
            w = (0, n.c)(31),
            { cwd: b, hostConfig: C, onErrorMessage: j, showErrorToast: M } = e,
            k = void 0 !== M && M,
            S = (0, i.gh)(u.u),
            A = (0, l.jE)(),
            I = (0, o.A)()
          w[0] !== C ? ((t = (0, c.W)(C)), (w[0] = C), (w[1] = t)) : (t = w[1])
          let _ = t,
            P = b ?? ""
          ;(w[2] !== _ || w[3] !== P
            ? ((a = ["git", "init-repo", _, P]), (w[2] = _), (w[3] = P), (w[4] = a))
            : (a = w[4]),
            w[5] !== b || w[6] !== C
              ? ((h = async () => {
                  if (null == b) throw Error("Missing git context")
                  await (0, m.V)("git").request({
                    method: "git-init-repo",
                    params: { cwd: (0, s.DIv)(b), hostConfig: C, operationSource: "review_model" },
                  })
                }),
                (w[5] = b),
                (w[6] = C),
                (w[7] = h))
              : (h = w[7]),
            w[8] !== b || w[9] !== _ || w[10] !== I || w[11] !== A || w[12] !== S
              ? ((p = async () => {
                  S.get(d.Id).success(
                    I.formatMessage({
                      id: "codex.review.noDiff.gitInit.success",
                      defaultMessage: "Git repository created",
                    }),
                  )
                  let e = [A.invalidateQueries({ queryKey: (0, f.IF)("git-origins") })]
                  ;(null != b && e.push(A.invalidateQueries({ queryKey: ["git", "metadata", _, b] })),
                    await Promise.all(e))
                }),
                (w[8] = b),
                (w[9] = _),
                (w[10] = I),
                (w[11] = A),
                (w[12] = S),
                (w[13] = p))
              : (p = w[13]),
            w[14] !== I || w[15] !== j || w[16] !== S || w[17] !== k
              ? ((g = (e) => {
                  let t = e instanceof Error ? e.message : String(e)
                  ;(k &&
                    S.get(d.Id).danger(
                      I.formatMessage(
                        { id: "codex.review.noDiff.gitInit.error", defaultMessage: "Git init failed: {message}" },
                        { message: t },
                      ),
                      { errorAnalytics: { toastId: "codex.review.noDiff.gitInit.error" } },
                    ),
                    j?.(t))
                }),
                (w[14] = I),
                (w[15] = j),
                (w[16] = S),
                (w[17] = k),
                (w[18] = g))
              : (g = w[18]),
            w[19] !== a || w[20] !== h || w[21] !== p || w[22] !== g
              ? ((v = { mutationKey: a, mutationFn: h, onSuccess: p, onError: g }),
                (w[19] = a),
                (w[20] = h),
                (w[21] = p),
                (w[22] = g),
                (w[23] = v))
              : (v = w[23]))
          let N = (0, r.n)(v)
          w[24] !== b || w[25] !== N
            ? ((x = async () => {
                if (null != b && !N.isPending)
                  try {
                    await N.mutateAsync()
                  } catch {
                    return
                  }
              }),
              (w[24] = b),
              (w[25] = N),
              (w[26] = x))
            : (x = w[26])
          let R = x,
            U = null != b
          return (
            w[27] !== R || w[28] !== N.isPending || w[29] !== U
              ? ((y = { canCreateGitRepository: U, createGitRepository: R, isCreatingGitRepository: N.isPending }),
                (w[27] = R),
                (w[28] = N.isPending),
                (w[29] = U),
                (w[30] = y))
              : (y = w[30]),
            y
          )
        },
      },
    )
  },
  BNGb(e, t, a) {
    var n = a("QosV"),
      l = a("qmMi"),
      r = a("ho65")
    a.d(
      t,
      {},
      {
        N: function (e, t, a, i) {
          let s,
            o,
            d = (0, n.c)(8),
            c = i?.enabled ?? !0
          d[0] !== e || d[1] !== t
            ? ((s = null == e ? null : { cwd: e, hostConfig: t }), (d[0] = e), (d[1] = t), (d[2] = s))
            : (s = d[2])
          let u = i?.retainRepoWatch
          return (
            d[3] !== a || d[4] !== c || d[5] !== s || d[6] !== u
              ? ((o = { enabled: c, operationSource: a, lookup: s, retainRepoWatch: u }),
                (d[3] = a),
                (d[4] = c),
                (d[5] = s),
                (d[6] = u),
                (d[7] = o))
              : (o = d[7]),
            (0, l._U)(r.W, o)
          )
        },
      },
    )
  },
  Dqa7(e, t, a) {
    a.d(t, { B: () => C })
    var n = a("ABep"),
      l = a("QosV"),
      r = a("slpy"),
      i = a("V4iM")
    let s = (0, a("ESTr").a)({
      name: "compare-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.641113, y: 1.974609, width: 12.717773, height: 12.050781 },
        visualBounds: { x: 1.641113, y: 1.974609, width: 12.717773, height: 12.050781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.641113, y: 1.974609, width: 12.717773, height: 12.050781 },
        center: { x: 7.999999, y: 8 },
        insets: { top: 1.974609, right: 1.641114, bottom: 1.97461, left: 1.641113 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999999, y: 8 }, foreground: { x: 7.999999, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.9624 2.29492C9.16739 2.09011 9.49961 2.09011 9.70459 2.29492C9.90911 2.49993 9.9093 2.83222 9.70459 3.03711L9.26709 3.47461H10.4673C11.7876 3.47512 12.8586 4.54586 12.8589 5.86621V10.0449C13.7225 10.2765 14.3589 11.0635 14.3589 12C14.3589 13.1184 13.4519 14.0254 12.3335 14.0254C11.2151 14.0254 10.3081 13.1184 10.3081 12C10.3081 11.0635 10.9445 10.2765 11.8081 10.0449V5.86621C11.8079 5.12576 11.2077 4.5259 10.4673 4.52539H9.26807L9.70459 4.96191C9.90917 5.16698 9.90947 5.49923 9.70459 5.7041C9.49971 5.90898 9.16746 5.90868 8.9624 5.7041L7.74658 4.48828C7.47687 4.2182 7.47676 3.78076 7.74658 3.51074L8.9624 2.29492ZM12.3335 11.0254C11.795 11.0254 11.3589 11.4615 11.3589 12C11.3589 12.5385 11.795 12.9746 12.3335 12.9746C12.872 12.9746 13.3081 12.5385 13.3081 12C13.3081 11.4615 12.872 11.0254 12.3335 11.0254Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M3.6665 1.97461C4.78488 1.97461 5.69189 2.88162 5.69189 4C5.69189 4.93603 5.05574 5.72106 4.19287 5.95312V10.1338C4.19312 10.8744 4.79307 11.4744 5.53369 11.4746H6.73193L6.29541 11.0381C6.09083 10.833 6.09053 10.5008 6.29541 10.2959C6.50029 10.091 6.83254 10.0913 7.0376 10.2959L8.25342 11.5117C8.52313 11.7818 8.52324 12.2192 8.25342 12.4893L7.0376 13.7051C6.83261 13.9099 6.50039 13.9099 6.29541 13.7051C6.09089 13.5001 6.0907 13.1678 6.29541 12.9629L6.73291 12.5254H5.53369C4.21317 12.5251 3.14234 11.4543 3.14209 10.1338V5.9541C2.27817 5.72274 1.64111 4.93678 1.64111 4C1.64111 2.88162 2.54813 1.97461 3.6665 1.97461ZM3.6665 3.02539C3.12803 3.02539 2.69189 3.46152 2.69189 4C2.69189 4.53848 3.12803 4.97461 3.6665 4.97461C4.20498 4.97461 4.64111 4.53848 4.64111 4C4.64111 3.46152 4.20498 3.02539 3.6665 3.02539Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var o = a("ozeB"),
      d = a("SpZ6")
    a("eRxB")
    var c = a("qhiJ"),
      u = a("Wf1j"),
      f = a("oyxz"),
      m = a("Sezd"),
      h = a("HOLv"),
      p = a("e2yU"),
      g = a("RNul"),
      v = a("x8co"),
      x = a("jDEJ"),
      y = a("mN6P"),
      w = a("nqf5"),
      b = a("cl5m")
    function C(e) {
      let t,
        a,
        r,
        h,
        p,
        g,
        x,
        y,
        C,
        k,
        S,
        A,
        I = (0, l.c)(51),
        {
          defaultToDraft: _,
          isGitLab: P,
          repositoryName: N,
          baseBranch: R,
          headBranch: U,
          branchSummary: D,
          title: T,
          description: L,
          existingPullRequestUrl: F,
          hasOpenPr: O,
          includeLocalChanges: B,
          blockedStep: E,
          newBranch: G,
          isWorkflowPending: q,
          onTitleChange: z,
          onDescriptionChange: V,
          onIncludeLocalChangesChange: $,
          onCreate: W,
          onOpenPullRequest: K,
        } = e,
        Z = void 0 !== P && P,
        Q = void 0 !== q && q,
        H = (0, u.A)()
      I[0] !== E || I[1] !== G?.isSelectionBlocked
        ? ((t = G?.isSelectionBlocked === !0 || null == E ? void 0 : (0, n.jsx)(w.Bl, { blockedStep: E })),
          (I[0] = E),
          (I[1] = G?.isSelectionBlocked),
          (I[2] = t))
        : (t = I[2])
      let J = t,
        X = O && null == F,
        Y = X || Q,
        ee = null != G,
        et = !O && !Y && G?.isSelectionBlocked !== !0 && null == E
      I[3] !== H || I[4] !== Z
        ? ((a = Z
            ? H.formatMessage({
                id: "localConversationPage.createPrModal.gitLabTitle",
                defaultMessage: "Create merge request",
              })
            : H.formatMessage({ id: "localConversationPage.createPrModal.title", defaultMessage: "Create PR" })),
          (I[3] = H),
          (I[4] = Z),
          (I[5] = a))
        : (a = I[5])
      let ea = a,
        en = "create-pr"
      return (
        O ? (en = "open-pr") : void 0 !== _ && _ && (en = "create-draft-pr"),
        I[6] !== N
          ? ((r =
              null != N
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("span", { className: "max-w-[30%] min-w-0 shrink-0 truncate", children: N }),
                      (0, n.jsx)("span", {
                        "aria-hidden": !0,
                        className: "shrink-0",
                        children: (0, n.jsx)(f.A, {
                          id: "localConversationPage.gitActions.repositoryBranchSeparator",
                          defaultMessage: "\xb7",
                        }),
                      }),
                    ],
                  })
                : null),
            (I[6] = N),
            (I[7] = r))
          : (r = I[7]),
        I[8] !== ee || I[9] !== U
          ? ((h = ee
              ? (0, n.jsx)(f.A, { id: "localConversationPage.createPrModal.newBranch", defaultMessage: "New branch" })
              : (U ??
                (0, n.jsx)(f.A, { id: "localConversationPage.createPrModal.missingHeadBranch", defaultMessage: "-" }))),
            (I[8] = ee),
            (I[9] = U),
            (I[10] = h))
          : (h = I[10]),
        I[11] !== h
          ? ((p = (0, n.jsx)("span", { className: "min-w-0 truncate", children: h })), (I[11] = h), (I[12] = p))
          : (p = I[12]),
        I[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, n.jsx)("span", {
              "aria-hidden": !0,
              className: "shrink-0",
              children: (0, n.jsx)(f.A, {
                id: "localConversationPage.createPrModal.branchArrow",
                defaultMessage: "\u2192",
              }),
            })),
            (I[13] = g))
          : (g = I[13]),
        I[14] !== R
          ? ((x =
              R ??
              (0, n.jsx)(f.A, { id: "localConversationPage.createPrModal.missingBaseBranch", defaultMessage: "-" })),
            (I[14] = R),
            (I[15] = x))
          : (x = I[15]),
        I[16] !== x
          ? ((y = (0, n.jsx)("span", { className: "max-w-[30%] min-w-0 shrink-0 truncate", children: x })),
            (I[16] = x),
            (I[17] = y))
          : (y = I[17]),
        I[18] !== y || I[19] !== r || I[20] !== p
          ? ((C = (0, n.jsx)("div", {
              className: "flex h-9 items-center justify-between gap-3 px-3",
              children: (0, n.jsx)("span", {
                className: "flex min-w-0 flex-1 items-center justify-between gap-2 text-codex-description",
                children: (0, n.jsxs)("span", {
                  className: "flex min-w-0 flex-1 items-center gap-1 whitespace-nowrap",
                  children: [r, p, g, y],
                }),
              }),
            })),
            (I[18] = y),
            (I[19] = r),
            (I[20] = p),
            (I[21] = C))
          : (C = I[21]),
        I[22] !== D ||
        I[23] !== ee ||
        I[24] !== L ||
        I[25] !== O ||
        I[26] !== B ||
        I[27] !== H ||
        I[28] !== Y ||
        I[29] !== G ||
        I[30] !== V ||
        I[31] !== $ ||
        I[32] !== z ||
        I[33] !== T
          ? ((k = O
              ? (0, n.jsx)("div", {
                  className: "min-h-32 px-3 py-2 text-codex-description",
                  children: (0, n.jsx)(f.A, {
                    id: "localConversationPage.createPrModal.viewDescription",
                    defaultMessage: "A pull request already exists for this branch",
                  }),
                })
              : (0, n.jsxs)("div", {
                  className: "flex min-h-32 flex-col gap-2 text-codex-description",
                  children: [
                    null != G
                      ? (0, n.jsx)(b.n, {
                          branchAlreadyExists: G.branchAlreadyExists,
                          disabled: Y,
                          placeholder: G.placeholder,
                          value: G.value,
                          onChange: G.onChange,
                        })
                      : null,
                    (0, n.jsx)("input", {
                      autoFocus: !ee,
                      id: "create-pr-title",
                      className:
                        "w-full bg-transparent px-3 pt-2 font-semibold text-default outline-none placeholder:text-codex-description",
                      "aria-label": H.formatMessage({
                        id: "localConversationPage.createPrModal.titleField",
                        defaultMessage: "Title",
                      }),
                      placeholder: H.formatMessage({
                        id: "localConversationPage.createPrModal.titlePlaceholder",
                        defaultMessage: "Title",
                      }),
                      value: T,
                      disabled: Y,
                      onChange: (e) => {
                        z(e.target.value)
                      },
                    }),
                    (0, n.jsx)("textarea", {
                      id: "create-pr-message",
                      rows: 3,
                      className:
                        "min-h-0 w-full flex-1 resize-none bg-transparent px-3 pb-2 text-default outline-none placeholder:text-codex-description",
                      "aria-label": H.formatMessage({
                        id: "localConversationPage.createPrModal.message",
                        defaultMessage: "Message",
                      }),
                      placeholder: H.formatMessage({
                        id: "localConversationPage.createPrModal.messagePlaceholder",
                        defaultMessage: "Description (leave empty to generate)",
                      }),
                      value: L,
                      disabled: Y,
                      onKeyDown: j,
                      onChange: (e) => {
                        V(e.target.value)
                      },
                    }),
                    (0, n.jsxs)("div", {
                      className: "relative flex items-center gap-2 px-3 pt-2 pb-3",
                      children: [
                        (0, n.jsx)(m.S, {
                          id: "create-pr-include-local-changes",
                          checked: B,
                          disabled: Y,
                          onCheckedChange: $,
                        }),
                        (0, n.jsx)("label", {
                          htmlFor: "create-pr-include-local-changes",
                          className: "min-w-0 truncate text-default",
                          children: (0, n.jsx)(f.A, {
                            id: "localConversationPage.createPrModal.includeLocalChanges",
                            defaultMessage: "Commit and push local changes",
                          }),
                        }),
                        null != D
                          ? (0, n.jsx)("span", {
                              className: "ms-auto shrink-0",
                              children: (0, n.jsx)(v.S, {
                                variant: "color",
                                linesAdded: D.totalAdditions,
                                linesRemoved: D.totalDeletions,
                              }),
                            })
                          : null,
                      ],
                    }),
                  ],
                })),
            (I[22] = D),
            (I[23] = ee),
            (I[24] = L),
            (I[25] = O),
            (I[26] = B),
            (I[27] = H),
            (I[28] = Y),
            (I[29] = G),
            (I[30] = V),
            (I[31] = $),
            (I[32] = z),
            (I[33] = T),
            (I[34] = k))
          : (k = I[34]),
        I[35] !== J ||
        I[36] !== et ||
        I[37] !== F ||
        I[38] !== O ||
        I[39] !== Z ||
        I[40] !== X ||
        I[41] !== Q ||
        I[42] !== W ||
        I[43] !== K
          ? ((S = (0, n.jsx)("div", {
              className: "border-t border-default py-1",
              children: (0, n.jsx)(c.uB.List, {
                children: (0, n.jsx)("div", {
                  className: "flex flex-col gap-1",
                  children: O
                    ? (0, n.jsx)(M, {
                        iconAsset: s,
                        disabled: null == F,
                        loading: X,
                        value: "open-pr",
                        onModifiedClick: K,
                        onSelect: K,
                        children: (0, n.jsx)(f.A, {
                          id: "localConversationPage.createPrModal.open",
                          defaultMessage: "Open PR in browser",
                        }),
                      })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(M, {
                            iconAsset: d.Q,
                            disabled: !et,
                            loading: Q,
                            tooltipContent: J,
                            value: "create-draft-pr",
                            onSelect: () => {
                              W(!0)
                            },
                            children: Z
                              ? (0, n.jsx)(f.A, {
                                  id: "localConversationPage.createPrModal.createDraftMergeRequest",
                                  defaultMessage: "Create draft merge request",
                                })
                              : (0, n.jsx)(f.A, {
                                  id: "localConversationPage.createPrModal.createDraft",
                                  defaultMessage: "Create draft PR",
                                }),
                          }),
                          (0, n.jsx)(M, {
                            iconAsset: o.C,
                            disabled: !et,
                            loading: Q,
                            tooltipContent: J,
                            value: "create-pr",
                            onSelect: () => {
                              W(!1)
                            },
                            children: Z
                              ? (0, n.jsx)(f.A, {
                                  id: "localConversationPage.createPrModal.createMergeRequest",
                                  defaultMessage: "Create merge request",
                                })
                              : (0, n.jsx)(f.A, {
                                  id: "localConversationPage.createPrModal.confirm",
                                  defaultMessage: "Create PR",
                                }),
                          }),
                          (0, n.jsx)(M, {
                            iconAsset: i.J,
                            disabled: !et,
                            loading: Q,
                            tooltipContent: J,
                            value: "open-pr-in-browser",
                            onSelect: () => {
                              W(!1, !0)
                            },
                            children: Z
                              ? (0, n.jsx)(f.A, {
                                  id: "localConversationPage.createPrModal.openGitLabInBrowser",
                                  defaultMessage: "Open merge request in browser",
                                })
                              : (0, n.jsx)(f.A, {
                                  id: "localConversationPage.createPrModal.openInBrowser",
                                  defaultMessage: "Open PR in browser",
                                }),
                          }),
                        ],
                      }),
                }),
              }),
            })),
            (I[35] = J),
            (I[36] = et),
            (I[37] = F),
            (I[38] = O),
            (I[39] = Z),
            (I[40] = X),
            (I[41] = Q),
            (I[42] = W),
            (I[43] = K),
            (I[44] = S))
          : (S = I[44]),
        I[45] !== en || I[46] !== ea || I[47] !== C || I[48] !== k || I[49] !== S
          ? ((A = (0, n.jsx)("div", {
              className: "command-menu-dialog contents",
              children: (0, n.jsxs)(c.uB, {
                defaultValue: en,
                "data-codex-shortcut-capture": !0,
                className: "w-[420px] max-w-[92vw]",
                label: ea,
                shouldFilter: !1,
                loop: !0,
                children: [C, k, S],
              }),
            })),
            (I[45] = en),
            (I[46] = ea),
            (I[47] = C),
            (I[48] = k),
            (I[49] = S),
            (I[50] = A))
          : (A = I[50]),
        A
      )
    }
    function j(e) {
      "Enter" !== e.key || e.metaKey || e.ctrlKey || e.stopPropagation()
    }
    function M(e) {
      let t,
        a,
        i,
        s,
        o,
        d,
        u,
        f,
        m = (0, l.c)(22),
        {
          children: v,
          iconAsset: w,
          disabled: b,
          loading: C,
          tooltipContent: j,
          value: M,
          onModifiedClick: k,
          onSelect: S,
        } = e
      ;(m[0] !== k
        ? ((t = (e) => {
            null != k && (0, y.j)(e) && (e.preventDefault(), e.stopPropagation(), k(e))
          }),
          (m[0] = k),
          (m[1] = t))
        : (t = m[1]),
        m[2] !== w || m[3] !== C
          ? ((a = C
              ? (0, n.jsx)(g.y, { className: "icon-xs shrink-0" })
              : (0, n.jsx)(h.I, { "aria-hidden": !1, asset: w, className: "shrink-0" })),
            (m[2] = w),
            (m[3] = C),
            (m[4] = a))
          : (a = m[4]),
        m[5] !== v
          ? ((i = (0, n.jsx)("span", { className: "truncate", children: v })), (m[5] = v), (m[6] = i))
          : (i = m[6]),
        m[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)("span", {
              className:
                "invisible ms-auto flex shrink-0 items-center opacity-80 group-aria-[selected=true]:visible group-data-[selected=true]:visible",
              children: (0, n.jsx)(p.x, { keysLabel: (0, x.X)("CmdOrCtrl+Enter"), variant: "button" }),
            })),
            (m[7] = s))
          : (s = m[7]),
        m[8] !== a || m[9] !== i
          ? ((o = (0, n.jsxs)("span", { className: "flex w-full min-w-0 items-center gap-2", children: [a, i, s] })),
            (m[8] = a),
            (m[9] = i),
            (m[10] = o))
          : (o = m[10]),
        m[11] !== b || m[12] !== S || m[13] !== t || m[14] !== o || m[15] !== M
          ? ((d = (0, n.jsx)(c.uB.Item, {
              className: "group",
              disabled: b,
              value: M,
              onClickCapture: t,
              onSelect: S,
              children: o,
            })),
            (m[11] = b),
            (m[12] = S),
            (m[13] = t),
            (m[14] = o),
            (m[15] = M),
            (m[16] = d))
          : (d = m[16]))
      let A = d
      return b && null != j
        ? (m[17] !== A ? ((u = (0, n.jsx)("div", { children: A })), (m[17] = A), (m[18] = u)) : (u = m[18]),
          m[19] !== u || m[20] !== j
            ? ((f = (0, n.jsx)(r.m, { content: j, children: u })), (m[19] = u), (m[20] = j), (m[21] = f))
            : (f = m[21]),
          f)
        : A
    }
  },
  nzyS(e, t, a) {
    let n = new Set(["~", "^", ":", "?", "*", "[", "]", "\\"])
    a.d(
      t,
      {},
      {
        V: function (e) {
          return Array.from(e)
            .filter((e) => !/\s/u.test(e) && !n.has(e))
            .join("")
        },
      },
    )
  },
  aTgD(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      r = a("oyxz"),
      i = a("af2k")
    a.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            a,
            s = (0, l.c)(4),
            { phase: o } = e
          return (
            s[0] !== o ? ((t = (0, i.gC)(o)), (s[0] = o), (s[1] = t)) : (t = s[1]),
            s[2] !== t ? ((a = (0, n.jsx)(r.A, { ...t })), (s[2] = t), (s[3] = a)) : (a = s[3]),
            a
          )
        },
      },
    )
  },
  h3pg(e, t, a) {
    a.d(t, { u: () => eM })
    var n = a("ABep"),
      l = a("QosV"),
      r = a("qmMi"),
      i = a("ZU27"),
      s = a("gbrq"),
      o = a("nPCK"),
      d = a("kfGJ"),
      c = a("Yc0o"),
      u = a("CgrR"),
      f = a("DBCl"),
      m = a("zd8w"),
      h = a("oyxz"),
      p = a("tl5a"),
      g = a("JNtf"),
      v = a("Ot7V"),
      x = a("SAaD"),
      y = a("P5RK"),
      w = a("BNGb"),
      b = a("OWtl"),
      C = a("RxZZ"),
      j = a("FgRz"),
      M = a("imHa"),
      k = a("GEsy"),
      S = a("TDnS"),
      A = a("sbB4"),
      I = a("RxfH"),
      _ = a("XxsC"),
      P = a("RxJY"),
      N = a("Dqa7")
    function R(e) {
      let t,
        a,
        i,
        s,
        o,
        d,
        c,
        u,
        R,
        U,
        D,
        T,
        L,
        F,
        O,
        B,
        E,
        G,
        q,
        z,
        V,
        $,
        W,
        K,
        Z,
        Q,
        H,
        J = (0, l.c)(108),
        {
          defaultToDraft: X,
          open: Y,
          onOpenChange: ee,
          conversationId: et,
          target: ea,
          codexWorktree: en,
          onRequestReset: el,
        } = e,
        er = void 0 !== X && X,
        ei = void 0 !== en && en,
        es = (0, r.gh)(b.u),
        { cwd: eo, hostConfig: ed } = ea,
        ec = (0, r._U)(j.cZ, et ?? null),
        [eu, ef] = (0, m.useState)(null),
        em = et ?? null
      J[0] !== ei || J[1] !== ea || J[2] !== em
        ? ((a = { ...ea, codexWorktree: ei, conversationId: em }),
          (t = (0, A.Je)(a)),
          (J[0] = ei),
          (J[1] = ea),
          (J[2] = em),
          (J[3] = t),
          (J[4] = a))
        : ((t = J[3]), (a = J[4]))
      let eh = t,
        ep = (0, r._U)(A.Ln, eh),
        eg = (0, r._U)(A.NI, eh),
        ev = (0, r._U)(A.ZX, eh),
        ex = (0, r._U)(I.hd, a),
        ey = (0, r._U)(I.dd, a),
        ew = (0, r._U)(I.bk, a),
        eb = (0, r._U)(I.AA, a),
        eC = (0, C.iK)(f.Ugj.branchPrefix)
      J[5] !== et || J[6] !== ed
        ? ((i = null == et ? null : { hostId: ed.id, threadId: et }), (J[5] = et), (J[6] = ed), (J[7] = i))
        : (i = J[7])
      let ej = (0, r._U)(p.HX, i)
      J[8] !== eC || J[9] !== ej
        ? ((s = (0, P.Z)({ branchPrefix: eC, conversationTitle: ej })), (J[8] = eC), (J[9] = ej), (J[10] = s))
        : (s = J[10])
      let eM = s,
        ek = eu ?? eM
      J[11] !== ek ? ((o = ek.trim()), (J[11] = ek), (J[12] = o)) : (o = J[12])
      let eS = o,
        eA = (0, k.o)(eS, 200)
      ;(J[13] !== eb || J[14] !== eA || J[15] !== Y
        ? ((d = Y && eb && eA.length > 0 && !eA.endsWith("/")), (J[13] = eb), (J[14] = eA), (J[15] = Y), (J[16] = d))
        : (d = J[16]),
        J[17] !== eo || J[18] !== ed
          ? ((c = { cwd: eo, hostConfig: ed }), (J[17] = eo), (J[18] = ed), (J[19] = c))
          : (c = J[19]),
        J[20] !== eA || J[21] !== d || J[22] !== c
          ? ((u = { branch: eA, enabled: d, operationSource: "create_pull_request_modal", lookup: c }),
            (J[20] = eA),
            (J[21] = d),
            (J[22] = c),
            (J[23] = u))
          : (u = J[23]))
      let { data: eI } = (0, r._U)(x.d, u),
        e_ = eA === eS && !0 === eI
      J[24] !== e_ || J[25] !== eb || J[26] !== eS
        ? ((R = eb && (0 === eS.length || eS.endsWith("/") || e_)),
          (J[24] = e_),
          (J[25] = eb),
          (J[26] = eS),
          (J[27] = R))
        : (R = J[27])
      let eP = R
      J[28] !== eo || J[29] !== ed
        ? ((U = { cwd: eo, hostConfig: ed, operationSource: "local_conversation_git_actions" }),
          (J[28] = eo),
          (J[29] = ed),
          (J[30] = U))
        : (U = J[30])
      let eN = (0, r._U)(y.z, U),
        eR = "success" === eN.type ? eN.data : void 0,
        { data: eU } = (0, w.N)(eo, ed, "local_conversation_git_actions")
      J[31] !== et || J[32] !== eb || J[33] !== eo || J[34] !== ed || J[35] !== ev
        ? ((D = { conversationId: et, cwd: eo, hostConfig: ed, createsBranch: eb, includeLocalChanges: ev }),
          (J[31] = et),
          (J[32] = eb),
          (J[33] = eo),
          (J[34] = ed),
          (J[35] = ev),
          (J[36] = D))
        : (D = J[36])
      let { blockedStep: eD, nextStep: eT } = (0, r._U)(S.Uj, D),
        eL = (0, r._U)(A.ri, eh)
      J[37] !== a
        ? ((T = { ...a, operationSource: "local_conversation_git_actions" }), (J[37] = a), (J[38] = T))
        : (T = J[38])
      let eF = (0, r._U)(_.M, T),
        eO = null != eL || eF.isPending
      J[39] !== eo || J[40] !== ed
        ? ((L = { cwd: eo, hostConfig: ed, includeUnstaged: !0 }), (J[39] = eo), (J[40] = ed), (J[41] = L))
        : (L = J[41])
      let eB = (0, r._U)(S.Kr, L),
        eE = eb ? eS : ey || (eR?.branch ?? null)
      J[42] !== eh || J[43] !== es
        ? ((F = () => {
            ;(0, A.H0)(es, eh)
          }),
          (J[42] = eh),
          (J[43] = es),
          (J[44] = F))
        : (F = J[44])
      let eG = F
      J[45] !== eO || J[46] !== el || J[47] !== eG
        ? ((O = () => {
            eO || (eG(), el())
          }),
          (J[45] = eO),
          (J[46] = el),
          (J[47] = eG),
          (J[48] = O))
        : (O = J[48])
      let eq = O
      J[49] !== eO || J[50] !== ee || J[51] !== el || J[52] !== eG
        ? ((B = (e) => {
            if (!e) {
              if (eO) return
              ;(eG(), el())
              return
            }
            ee(e)
          }),
          (J[49] = eO),
          (J[50] = ee),
          (J[51] = el),
          (J[52] = eG),
          (J[53] = B))
        : (B = J[53])
      let ez = B
      J[54] !== eb || J[55] !== ee || J[56] !== el || J[57] !== eG || J[58] !== eT || J[59] !== eS || J[60] !== eF
        ? ((E = (e) => {
            let { isDraft: t, openInBrowser: a } = e
            ee(!1)
            let n = eb
              ? { kind: "create-pr", createPullRequestAsDraft: t, newBranch: eS, nextStep: eT, openInBrowser: a }
              : { kind: "create-pr", createPullRequestAsDraft: t, nextStep: eT, openInBrowser: a }
            eF.mutate(n, {
              onSettled: () => {
                ;(a || eG(), el())
              },
            })
          }),
          (J[54] = eb),
          (J[55] = ee),
          (J[56] = el),
          (J[57] = eG),
          (J[58] = eT),
          (J[59] = eS),
          (J[60] = eF),
          (J[61] = E))
        : (E = J[61])
      let eV = E
      J[62] !== eD || J[63] !== eP || J[64] !== eO || J[65] !== eV
        ? ((G = (e, t) => {
            eO || eP || (null == eD && eV({ isDraft: e, openInBrowser: void 0 !== t && t }))
          }),
          (J[62] = eD),
          (J[63] = eP),
          (J[64] = eO),
          (J[65] = eV),
          (J[66] = G))
        : (G = J[66])
      let e$ = G
      J[67] !== ex || J[68] !== eq
        ? ((q = (e) => {
            ex &&
              (null == e
                ? (0, v.E0)({ href: ex, initiator: "pull_request_link" })
                : (0, v.PQ)({ event: e, href: ex, initiator: "pull_request_link" }),
              eq())
          }),
          (J[67] = ex),
          (J[68] = eq),
          (J[69] = q))
        : (q = J[69])
      let eW = q
      ;(J[70] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = (0, n.jsx)(g.L3, {
            className: "sr-only",
            children: (0, n.jsx)(h.A, { id: "localConversationPage.createPrModal.title", defaultMessage: "Create PR" }),
          })),
          (J[70] = z))
        : (z = J[70]),
        J[71] !== ec || J[72] !== ea.root
          ? ((V = ec ? (0, M.S)(ea.root) : null), (J[71] = ec), (J[72] = ea.root), (J[73] = V))
          : (V = J[73]))
      let eK = eR?.defaultBranch ?? eU ?? null,
        eZ = eE ?? null,
        eQ = ev ? eB.selectionSummary : null
      return (
        J[74] !== e_ || J[75] !== ek || J[76] !== eC || J[77] !== eb || J[78] !== eP
          ? (($ = eb
              ? { branchAlreadyExists: e_, isSelectionBlocked: eP, placeholder: eC?.trim(), value: ek, onChange: ef }
              : void 0),
            (J[74] = e_),
            (J[75] = ek),
            (J[76] = eC),
            (J[77] = eb),
            (J[78] = eP),
            (J[79] = $))
          : ($ = J[79]),
        J[80] !== eh || J[81] !== es
          ? ((W = (e) => {
              es.set(A.Ln, eh, e)
            }),
            (K = (e) => {
              es.set(A.NI, eh, e)
            }),
            (Z = (e) => {
              es.set(A.ZX, eh, e)
            }),
            (J[80] = eh),
            (J[81] = es),
            (J[82] = W),
            (J[83] = K),
            (J[84] = Z))
          : ((W = J[82]), (K = J[83]), (Z = J[84])),
        J[85] !== eD ||
        J[86] !== eg ||
        J[87] !== er ||
        J[88] !== ex ||
        J[89] !== e$ ||
        J[90] !== eW ||
        J[91] !== ew ||
        J[92] !== ev ||
        J[93] !== eO ||
        J[94] !== V ||
        J[95] !== eK ||
        J[96] !== eZ ||
        J[97] !== eQ ||
        J[98] !== $ ||
        J[99] !== W ||
        J[100] !== K ||
        J[101] !== Z ||
        J[102] !== ep
          ? ((Q = (0, n.jsx)(N.B, {
              defaultToDraft: er,
              repositoryName: V,
              baseBranch: eK,
              headBranch: eZ,
              branchSummary: eQ,
              title: ep,
              description: eg,
              existingPullRequestUrl: ex,
              hasOpenPr: ew,
              includeLocalChanges: ev,
              blockedStep: eD,
              newBranch: $,
              isWorkflowPending: eO,
              onTitleChange: W,
              onDescriptionChange: K,
              onIncludeLocalChangesChange: Z,
              onCreate: e$,
              onOpenPullRequest: eW,
            })),
            (J[85] = eD),
            (J[86] = eg),
            (J[87] = er),
            (J[88] = ex),
            (J[89] = e$),
            (J[90] = eW),
            (J[91] = ew),
            (J[92] = ev),
            (J[93] = eO),
            (J[94] = V),
            (J[95] = eK),
            (J[96] = eZ),
            (J[97] = eQ),
            (J[98] = $),
            (J[99] = W),
            (J[100] = K),
            (J[101] = Z),
            (J[102] = ep),
            (J[103] = Q))
          : (Q = J[103]),
        J[104] !== ez || J[105] !== Y || J[106] !== Q
          ? ((H = (0, n.jsxs)(g.lG, {
              open: Y,
              showDialogClose: !1,
              unstyledContent: !0,
              onOpenChange: ez,
              children: [z, Q],
            })),
            (J[104] = ez),
            (J[105] = Y),
            (J[106] = Q),
            (J[107] = H))
          : (H = J[107]),
        H
      )
    }
    var U = a("EFj1"),
      D = a("wgve")
    function T(e) {
      let t,
        a = (0, l.c)(2),
        { deferQueries: r } = e,
        i = void 0 !== r && r
      return (a[0] !== i ? ((t = i ? (0, n.jsx)(F, {}) : (0, n.jsx)(L, {})), (a[0] = i), (a[1] = t)) : (t = a[1]), t)
    }
    function L() {
      let e,
        t,
        a,
        n,
        i,
        s,
        o,
        d,
        c = (0, l.c)(17),
        u = (0, r.gh)(D.N),
        f = (0, r.Ul)(I.wQ),
        m = (0, r.Ul)(I.nT),
        h = (0, r.Ul)(I.wn),
        p = (0, r.Ul)(I.rb),
        g = null == f
      c[0] !== m || c[1] !== u
        ? ((e = () => {
            null == m ? u.set(I.Ab, "commit") : (0, I.Wv)(u)
          }),
          (c[0] = m),
          (c[1] = u),
          (c[2] = e))
        : (e = c[2])
      let v = g && (null == m || null == h)
      ;(c[3] !== v ? ((t = { enabled: v }), (c[3] = v), (c[4] = t)) : (t = c[4]),
        (0, U.K)("git.commit", e, t),
        c[5] !== u ? ((a = () => (0, I.u6)(u)), (c[5] = u), (c[6] = a)) : (a = c[6]))
      let x = g && "enabled" === p
      ;(c[7] !== x ? ((n = { enabled: x }), (c[7] = x), (c[8] = n)) : (n = c[8]),
        (0, U.K)("git.createPullRequest", a, n),
        c[9] !== u ? ((i = () => (0, I.u6)(u, { defaultToDraft: !0 })), (c[9] = u), (c[10] = i)) : (i = c[10]))
      let y = g && "enabled" === p
      ;(c[11] !== y ? ((s = { enabled: y }), (c[11] = y), (c[12] = s)) : (s = c[12]),
        (0, U.K)("git.createDraftPullRequest", i, s),
        c[13] !== u ? ((o = () => (0, I.Ue)(u)), (c[13] = u), (c[14] = o)) : (o = c[14]))
      let w = g && u.value.codexWorktree
      return (
        c[15] !== w ? ((d = { enabled: w }), (c[15] = w), (c[16] = d)) : (d = c[16]),
        (0, U.K)("git.createBranch", o, d),
        null
      )
    }
    function F() {
      let e,
        t,
        a,
        n,
        i,
        s,
        o,
        d,
        c = (0, l.c)(16),
        u = (0, r.gh)(D.N),
        f = null == (0, r.Ul)(I.wQ)
      ;(c[0] !== u
        ? ((e = () => {
            u.set(I.Ab, "commit")
          }),
          (c[0] = u),
          (c[1] = e))
        : (e = c[1]),
        c[2] !== f ? ((t = { enabled: f }), (c[2] = f), (c[3] = t)) : (t = c[3]),
        (0, U.K)("git.commit", e, t),
        c[4] !== u ? ((a = () => (0, I.u6)(u)), (c[4] = u), (c[5] = a)) : (a = c[5]),
        c[6] !== f ? ((n = { enabled: f }), (c[6] = f), (c[7] = n)) : (n = c[7]),
        (0, U.K)("git.createPullRequest", a, n),
        c[8] !== u ? ((i = () => (0, I.u6)(u, { defaultToDraft: !0 })), (c[8] = u), (c[9] = i)) : (i = c[9]),
        c[10] !== f ? ((s = { enabled: f }), (c[10] = f), (c[11] = s)) : (s = c[11]),
        (0, U.K)("git.createDraftPullRequest", i, s),
        c[12] !== u ? ((o = () => (0, I.Ue)(u)), (c[12] = u), (c[13] = o)) : (o = c[13]))
      let m = f && u.value.codexWorktree
      return (
        c[14] !== m ? ((d = { enabled: m }), (c[14] = m), (c[15] = d)) : (d = c[15]),
        (0, U.K)("git.createBranch", o, d),
        null
      )
    }
    var O = a("B5Sl"),
      B = a("Wf1j"),
      E = a("bqtn"),
      G = a("bVeK"),
      q = a("RNul"),
      z = a("NdHc"),
      V = a("a8tI"),
      $ = a("gAOF"),
      W = a("kIfn"),
      K = a("W4GL"),
      Z = a("nqf5"),
      Q = a("iFi7"),
      H = a("aTgD")
    function J(e) {
      let t,
        a,
        i,
        s,
        o,
        d,
        c,
        u,
        f,
        p,
        g,
        v,
        x,
        y,
        w,
        b,
        C,
        j,
        M = (0, l.c)(71),
        { children: k, onOpenChange: _, row: P } = e,
        N = (0, r.gh)(D.N),
        R = (0, B.A)(),
        U = (0, r.Ul)(I.ni),
        T = (0, r.Ul)(I.wQ),
        L = (0, m.useId)(),
        F = `${L}-branches`,
        J = (0, r._U)($.o, L),
        X = (0, r._U)($.o, F)
      M[0] !== L || M[1] !== N
        ? ((t = (e) => {
            N.set($.D, (t) => (e ? L : t === L ? null : t))
          }),
          (M[0] = L),
          (M[1] = N),
          (M[2] = t))
        : (t = M[2])
      let Y = t
      M[3] !== F || M[4] !== N
        ? ((a = (e) => {
            N.set($.D, (t) => (e ? F : t === F ? null : t))
          }),
          (M[3] = F),
          (M[4] = N),
          (M[5] = a))
        : (a = M[5])
      let ee = a,
        [et, ea] = (0, m.useState)(!1),
        en = (0, m.useRef)(null)
      M[6] !== J ? ((i = { enabled: J }), (M[6] = J), (M[7] = i)) : (i = M[7])
      let el = (0, r.Ul)(I.nT, i)
      M[8] !== J ? ((s = { enabled: J }), (M[8] = J), (M[9] = s)) : (s = M[9])
      let er = (0, r._U)(S.vd, U, s)
      M[10] !== J ? ((o = { enabled: J }), (M[10] = J), (M[11] = o)) : (o = M[11])
      let ei = (0, r.Ul)(I.rb, o)
      ;(M[12] !== U.cwd || M[13] !== U.hostConfig
        ? ((d = { cwd: U.cwd, hostConfig: U.hostConfig }), (M[12] = U.cwd), (M[13] = U.hostConfig), (M[14] = d))
        : (d = M[14]),
        M[15] !== J || M[16] !== d
          ? ((c = { enabled: J, lookup: d, operationSource: "local_conversation_git_actions" }),
            (M[15] = J),
            (M[16] = d),
            (M[17] = c))
          : (c = M[17]))
      let { data: es } = (0, r._U)(z.ND, c)
      M[18] !== k || M[19] !== R
        ? ((u =
            null == k
              ? R.formatMessage({ id: "localConversation.gitActions.menu", defaultMessage: "Git actions" })
              : R.formatMessage({ id: "taskAttachment.worktreeActions", defaultMessage: "Worktree actions" })),
          (M[18] = k),
          (M[19] = R),
          (M[20] = u))
        : (u = M[20])
      let eo = u
      M[21] !== eo || M[22] !== T || M[23] !== P
        ? ((f =
            null == P
              ? (0, n.jsx)(K.x.IconButton, {
                  ref: (e) => {
                    en.current = e
                  },
                  color: "ghostTertiary",
                  label: eo,
                  disableTooltip: !0,
                  children: null == T ? (0, n.jsx)(G.l0Y, {}) : (0, n.jsx)(q.y, {}),
                })
              : (0, n.jsx)(W.U, {
                  ref: (e) => {
                    en.current = e
                  },
                  children: P,
                })),
          (M[21] = eo),
          (M[22] = T),
          (M[23] = P),
          (M[24] = f))
        : (f = M[24])
      let ed = f
      ;(M[25] !== _ || M[26] !== Y
        ? ((p = (e) => {
            ;(Y(e), e && ea(!0), _?.(e))
          }),
          (M[25] = _),
          (M[26] = Y),
          (M[27] = p))
        : (p = M[27]),
        M[28] !== L || M[29] !== N
          ? ((g = (e) => {
              let t = N.get($.D)
              null != t && t !== L && e.preventDefault()
            }),
            (M[28] = L),
            (M[29] = N),
            (M[30] = g))
          : (g = M[30]))
      let ec = null != P,
        eu = X ? null : ed
      return (
        M[31] !== es?.branch ||
        M[32] !== es?.isDetached ||
        M[33] !== el ||
        M[34] !== ei ||
        M[35] !== _ ||
        M[36] !== T ||
        M[37] !== er ||
        M[38] !== N ||
        M[39] !== ee ||
        M[40] !== Y
          ? ((v =
              null == T
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(E.ms.Item, {
                        leftIconAsset: O.F,
                        disabled: null != el,
                        tooltipText: null != el ? (0, n.jsx)(Z.Wi, { reason: el }) : void 0,
                        onSelect: () => N.set(I.Ab, "commit"),
                        children: (0, n.jsx)(h.A, {
                          id: "localConversation.gitActions.commit",
                          defaultMessage: "Commit",
                        }),
                      }),
                      (0, n.jsx)(E.ms.Item, {
                        LeftIcon: G.jBK,
                        disabled: null != er,
                        tooltipText: null != er ? (0, n.jsx)(Z.dz, { reason: er }) : void 0,
                        onSelect: () => (0, I.Wv)(N),
                        children: (0, n.jsx)(h.A, { id: "localConversation.gitActions.push", defaultMessage: "Push" }),
                      }),
                      es?.isDetached
                        ? (0, n.jsx)(E.ms.Item, {
                            LeftIcon: G.uH1,
                            onSelect: () => (0, I.Ue)(N),
                            children: (0, n.jsx)(h.A, {
                              id: "localConversation.gitActions.createBranch",
                              defaultMessage: "Create branch",
                            }),
                          })
                        : null,
                      (0, n.jsx)(E.ms.Item, {
                        LeftIcon: G.uH1,
                        disabled: !es?.branch && !es?.isDetached,
                        onSelect: (e) => {
                          ;(e.preventDefault(), Y(!1), ee(!0), _?.(!0))
                        },
                        children: (0, n.jsx)(h.A, {
                          id: "composer.footer.branchSwitch.tooltip",
                          defaultMessage: "Switch branch",
                        }),
                      }),
                      "enabled" === ei
                        ? (0, n.jsx)(E.ms.Item, {
                            LeftIcon: G.ono,
                            onSelect: () => (0, I.u6)(N),
                            children: (0, n.jsx)(h.A, {
                              id: "codex.localConversation.gitSummary.createPullRequest",
                              defaultMessage: "Create pull request",
                            }),
                          })
                        : null,
                    ],
                  })
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(E.ms.Item, { disabled: !0, children: (0, n.jsx)(H.Z, { phase: T.phase }) }),
                      (0, n.jsx)(E.ms.Item, {
                        LeftIcon: G.EjW,
                        onSelect: () => (0, A.wL)((0, A.Je)(N.value.target)),
                        children: (0, n.jsx)(h.A, {
                          id: "localConversation.gitActions.cancelWorkflow",
                          defaultMessage: "Cancel",
                        }),
                      }),
                    ],
                  })),
            (M[31] = es?.branch),
            (M[32] = es?.isDetached),
            (M[33] = el),
            (M[34] = ei),
            (M[35] = _),
            (M[36] = T),
            (M[37] = er),
            (M[38] = N),
            (M[39] = ee),
            (M[40] = Y),
            (M[41] = v))
          : (v = M[41]),
        M[42] !== k || M[43] !== J || M[44] !== p || M[45] !== g || M[46] !== ec || M[47] !== eu || M[48] !== v
          ? ((x = (0, n.jsxs)(E.Ab, {
              getPlacement: V.J,
              open: J,
              onOpenChange: p,
              onCloseAutoFocus: g,
              openOnHover: ec,
              triggerButton: eu,
              children: [v, k],
            })),
            (M[42] = k),
            (M[43] = J),
            (M[44] = p),
            (M[45] = g),
            (M[46] = ec),
            (M[47] = eu),
            (M[48] = v),
            (M[49] = x))
          : (x = M[49]),
        M[50] !== N
          ? ((y = (e) => {
              ;(e.preventDefault(), null == N.get($.D) && en.current?.focus())
            }),
            (M[50] = N),
            (M[51] = y))
          : (y = M[51]),
        M[52] !== _ || M[53] !== ee
          ? ((w = (e) => {
              ;(ee(e), _?.(e))
            }),
            (M[52] = _),
            (M[53] = ee),
            (M[54] = w))
          : (w = M[54]),
        M[55] !== X || M[56] !== ed
          ? ((b = () => (X ? ed : null)), (M[55] = X), (M[56] = ed), (M[57] = b))
          : (b = M[57]),
        M[58] !== X ||
        M[59] !== et ||
        M[60] !== y ||
        M[61] !== w ||
        M[62] !== b ||
        M[63] !== U.conversationId ||
        M[64] !== U.cwd ||
        M[65] !== U.hostConfig ||
        M[66] !== U.root
          ? ((C = (0, n.jsx)(Q.Q, {
              cwd: U.cwd,
              gitRoot: U.root,
              hostConfig: U.hostConfig,
              localConversationId: U.conversationId,
              shouldShow: et,
              renderWhileLoading: !0,
              open: X,
              getPlacement: V.J,
              onCloseAutoFocus: y,
              onOpenChange: w,
              renderControl: b,
            })),
            (M[58] = X),
            (M[59] = et),
            (M[60] = y),
            (M[61] = w),
            (M[62] = b),
            (M[63] = U.conversationId),
            (M[64] = U.cwd),
            (M[65] = U.hostConfig),
            (M[66] = U.root),
            (M[67] = C))
          : (C = M[67]),
        M[68] !== x || M[69] !== C
          ? ((j = (0, n.jsxs)(n.Fragment, { children: [x, C] })), (M[68] = x), (M[69] = C), (M[70] = j))
          : (j = M[70]),
        j
      )
    }
    var X = a("slpy")
    let Y = (0, a("ESTr").a)({
      name: "branch-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 3.5, y: 3, width: 17, height: 18 },
        visualBounds: { x: 3.5, y: 3, width: 17, height: 18 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.5, y: 3, width: 17, height: 18 },
        center: { x: 12, y: 12 },
        insets: { top: 3, right: 3.5, bottom: 3, left: 3.5 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6.5 3C8.15685 3 9.5 4.34315 9.5 6C9.5 7.39752 8.54342 8.56799 7.25 8.90137V11.9023C7.82907 11.4919 8.53604 11.25 9.2998 11.25H14.7002C15.8322 11.2499 16.7499 10.3322 16.75 9.2002V9H18.25V9.2002C18.2499 11.1607 16.6607 12.7499 14.7002 12.75H9.2998C8.16778 12.7501 7.25011 13.6678 7.25 14.7998V15.0977C8.54354 15.431 9.5 16.6024 9.5 18C9.5 19.6569 8.15685 21 6.5 21C4.84315 21 3.5 19.6569 3.5 18C3.5 16.6024 4.45647 15.431 5.75 15.0977V8.90137C4.45658 8.56799 3.5 7.39752 3.5 6C3.5 4.34315 4.84315 3 6.5 3ZM6.5 16.5C5.67157 16.5 5 17.1716 5 18C5 18.8284 5.67157 19.5 6.5 19.5C7.32843 19.5 8 18.8284 8 18C8 17.1716 7.32843 16.5 6.5 16.5ZM6.5 4.5C5.67157 4.5 5 5.17157 5 6C5 6.82843 5.67157 7.5 6.5 7.5C7.32843 7.5 8 6.82843 8 6C8 5.17157 7.32843 4.5 6.5 4.5Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M17.5 3C19.1569 3 20.5 4.34315 20.5 6C20.5 7.65685 19.1569 9 17.5 9C15.8431 9 14.5 7.65685 14.5 6C14.5 4.34315 15.8431 3 17.5 3ZM17.5 4.5C16.6716 4.5 16 5.17157 16 6C16 6.82843 16.6716 7.5 17.5 7.5C18.3284 7.5 19 6.82843 19 6C19 5.17157 18.3284 4.5 17.5 4.5Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var ee = a("TTi7"),
      et = a("Sm6l"),
      ea = a("mUDD"),
      en = a("HOLv"),
      el = a("zLIa"),
      er = a("z7Y6"),
      ei = a("SGsN"),
      es = a("i7fz"),
      eo = a("nuXe"),
      ed = a.n(eo),
      ec = a("koMX"),
      eu = a("OTo8"),
      ef = a("MI1z"),
      em = a("ndjw"),
      eh = a("bnxy")
    function ep(e) {
      return !!e
    }
    function eg(e) {
      return e
    }
    var ev = a("FvDV"),
      ex = a("tlLJ"),
      ey = a("d2Xg")
    let ew = { duration: 7 }
    function eb(e) {
      let t,
        a,
        i,
        s,
        o,
        d,
        c,
        u,
        v,
        y,
        w,
        j,
        M,
        S,
        A,
        I,
        _,
        N,
        R,
        U,
        D,
        T,
        L,
        F,
        O,
        E,
        G,
        q,
        z,
        V = (0, l.c)(82),
        { conversationId: $, target: W, open: K, onOpenChange: Z, onRequestOpenNextAction: Q } = e,
        H = (0, r.gh)(b.u),
        J = (0, B.A)(),
        { cwd: eo, hostConfig: eb } = W,
        [ej, eM] = (0, m.useState)(null),
        [ek, eS] = (0, m.useState)(!1),
        eA = (0, C.iK)(f.Ugj.branchPrefix)
      V[0] !== $ || V[1] !== eb
        ? ((t = null == $ ? null : { hostId: eb.id, threadId: $ }), (V[0] = $), (V[1] = eb), (V[2] = t))
        : (t = V[2])
      let eI = (0, r._U)(p.HX, t)
      V[3] !== eA || V[4] !== eI
        ? ((a = (0, P.Z)({ branchPrefix: eA, conversationTitle: eI })), (V[3] = eA), (V[4] = eI), (V[5] = a))
        : (a = V[5])
      let e_ = a,
        eP = ej ?? e_
      V[6] !== eP
        ? ((i = 0 === (o = eP.trim()).length), (s = o.endsWith("/")), (V[6] = eP), (V[7] = i), (V[8] = s), (V[9] = o))
        : ((i = V[7]), (s = V[8]), (o = V[9]))
      let eN = s,
        eR = (0, k.o)(o, 200)
      V[10] !== eR || V[11] !== ek || V[12] !== K
        ? ((d = K && !ek && eR.length > 0 && !eR.endsWith("/")), (V[10] = eR), (V[11] = ek), (V[12] = K), (V[13] = d))
        : (d = V[13])
      let eU = d
      ;(V[14] !== eo || V[15] !== eb
        ? ((c = { cwd: eo, hostConfig: eb }), (V[14] = eo), (V[15] = eb), (V[16] = c))
        : (c = V[16]),
        V[17] !== eR || V[18] !== eU || V[19] !== c
          ? ((u = { branch: eR, enabled: eU, operationSource: "worktree_branch_setup_modal", lookup: c }),
            (V[17] = eR),
            (V[18] = eU),
            (V[19] = c),
            (V[20] = u))
          : (u = V[20]))
      let { data: eD } = (0, r._U)(x.d, u),
        eT = !ek && eR === o && !0 === eD
      V[21] !== eo || V[22] !== eb
        ? ((v = { conversationCwd: eo, hostConfig: eb }), (V[21] = eo), (V[22] = eb), (V[23] = v))
        : (v = V[23])
      let { targetRoots: eL } = (function (e) {
          let t,
            a,
            n,
            i,
            s,
            o,
            d,
            c,
            u = (0, l.c)(28),
            { conversationCwd: m, hostConfig: h } = e,
            p = m ?? null,
            g = (0, ef.y)(),
            { data: v } = (0, r.Ul)(em.zk),
            x = v?.roots
          u[0] !== x || u[1] !== p
            ? ((t = ed()([p, ...(x?.filter(eg) ?? [])].filter(ep))), (u[0] = x), (u[1] = p), (u[2] = t))
            : (t = u[2])
          let y = t
          u[3] !== y ? ((a = { params: { dirs: y }, source: "apply_worktree" }), (u[3] = y), (u[4] = a)) : (a = u[4])
          let { data: w } = (0, r._U)(ec.gitOriginsQuery$, a),
            b = w?.origins
          u[5] !== p ? ((n = p ? (0, eh.eI)(p) : null), (u[5] = p), (u[6] = n)) : (n = u[6])
          let C = n
          u[7] !== b || u[8] !== C
            ? ((i = b?.find((e) => {
                let { dir: t } = e
                return (0, eh.eI)(t) === C
              })),
              (u[7] = b),
              (u[8] = C),
              (u[9] = i))
            : (i = u[9])
          let j = i
          e: {
            let e, t
            if (!j?.originUrl) {
              s = null
              break e
            }
            u[10] !== p ? ((e = p ? (0, eh.eI)(p) : null), (u[10] = p), (u[11] = e)) : (e = u[11])
            let a = e
            ;(u[12] !== g || u[13] !== b || u[14] !== a || u[15] !== j
              ? ((t =
                  b?.find(
                    (e) => e.originUrl === j.originUrl && (!a || (0, eh.eI)(e.dir) !== a) && !(0, f.n9x)(e.dir, g),
                  ) ?? null),
                (u[12] = g),
                (u[13] = b),
                (u[14] = a),
                (u[15] = j),
                (u[16] = t))
              : (t = u[16]),
              (s = t))
          }
          let M = s,
            k = M?.root ?? null,
            S = M?.dir ?? null,
            A = !!k
          u[17] !== A ? ((o = { enabled: A }), (u[17] = A), (u[18] = o)) : (o = u[18])
          let { data: I } = (0, eu.v)(k, h, "apply_worktree", o)
          t: {
            let e
            if (!S || !k) {
              let e
              ;(u[19] === Symbol.for("react.memo_cache_sentinel") ? ((e = []), (u[19] = e)) : (e = u[19]), (d = e))
              break t
            }
            let t = I ?? "-"
            ;(u[20] !== k || u[21] !== S || u[22] !== t
              ? ((e = [{ workspaceRoot: S, gitRoot: k, label: t }]), (u[20] = k), (u[21] = S), (u[22] = t), (u[23] = e))
              : (e = u[23]),
              (d = e))
          }
          let _ = d
          return (
            u[24] !== S || u[25] !== _ || u[26] !== p
              ? ((c = { targetRoots: _, worktreePath: p, sourceWorkspaceRoot: S }),
                (u[24] = S),
                (u[25] = _),
                (u[26] = p),
                (u[27] = c))
              : (c = u[27]),
            c
          )
        })(v),
        eF = eL[0] ?? null,
        eO = eF?.label ?? null,
        eB = eF?.workspaceRoot ?? null
      V[24] !== W
        ? ((y = { ...W, operationSource: "worktree_branch_setup_modal" }), (V[24] = W), (V[25] = y))
        : (y = V[25])
      let eE = (0, r._U)(ex.D, y),
        eG = ek || eE.isPending,
        eq = null != eO && o === eO
      V[26] !== Z
        ? ((w = (e) => {
            ;(e || eM(null), Z(e))
          }),
          (V[26] = Z),
          (V[27] = w))
        : (w = V[27])
      let ez = w
      V[28] !== eT ||
      V[29] !== $ ||
      V[30] !== eE ||
      V[31] !== eN ||
      V[32] !== eb ||
      V[33] !== J ||
      V[34] !== eq ||
      V[35] !== i ||
      V[36] !== eG ||
      V[37] !== Q ||
      V[38] !== H ||
      V[39] !== W.root ||
      V[40] !== o
        ? ((j = async () => {
            if (eG || i || eN || eT || eq) return
            eS(!0)
            let e = (e) => {
              let { title: t, message: a, execOutput: l } = e
              H.get(ei.Id).custom({
                ...ew,
                content: (e) => {
                  let { close: r } = e
                  return (0, n.jsx)(er.M, { title: t, message: a, execOutput: l, onClose: r })
                },
              })
            }
            await (async () => {
              try {
                let t = await eE.mutateAsync({ branch: o, failIfExists: !0, mode: "synced" })
                switch (t.status) {
                  case "success":
                    break
                  case "create-error":
                    return void e({
                      title: J.formatMessage({
                        id: "localConversation.worktreeBranchSetup.createBranchErrorTitle",
                        defaultMessage: "Failed to set branch",
                      }),
                      message: t.error,
                      execOutput: t.execOutput,
                    })
                  case "checkout-error":
                    return void e({
                      title: J.formatMessage({
                        id: "localConversation.worktreeBranchSetup.checkoutErrorTitle",
                        defaultMessage: "Failed to check out branch",
                      }),
                      message: t.error,
                      execOutput: t.execOutput,
                    })
                }
                ;(null != $ && (0, ee.Z)(H, eb.id, $, t.branch, W.root), Q?.(t.branch))
              } catch (a) {
                let t = a instanceof Error ? a.message : String(a)
                e({
                  title: J.formatMessage({
                    id: "localConversation.worktreeBranchSetup.errorTitle",
                    defaultMessage: "Something went wrong",
                  }),
                  message: t,
                })
              }
            })().finally(() => {
              eS(!1)
            })
          }),
          (V[28] = eT),
          (V[29] = $),
          (V[30] = eE),
          (V[31] = eN),
          (V[32] = eb),
          (V[33] = J),
          (V[34] = eq),
          (V[35] = i),
          (V[36] = eG),
          (V[37] = Q),
          (V[38] = H),
          (V[39] = W.root),
          (V[40] = o),
          (V[41] = j))
        : (j = V[41])
      let eV = j,
        e$ = eG || i || eN || eT || eq
      ;(V[42] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = (0, n.jsx)(en.I, { className: "text-default", "aria-hidden": !1, asset: Y })), (V[42] = M))
        : (M = V[42]),
        V[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, n.jsx)(ea.c7, {
              icon: M,
              title: (0, n.jsx)(g.L3, {
                children: (0, n.jsx)(h.A, {
                  id: "localConversation.worktreeBranchSetup.title",
                  defaultMessage: "Work here",
                }),
              }),
            })),
            (V[43] = S))
          : (S = V[43]),
        V[44] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, n.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                S,
                (0, n.jsx)("p", {
                  className: "text-sm text-codex-description",
                  children: (0, n.jsx)(h.A, {
                    id: "localConversation.worktreeBranchSetup.subtitle",
                    defaultMessage:
                      "Create a branch to commit changes, push, and create a PR from this worktree. <a>Learn more</a>",
                    values: { a: eC },
                  }),
                }),
              ],
            })),
            (V[44] = A))
          : (A = V[44]),
        V[45] === Symbol.for("react.memo_cache_sentinel") ? ((I = (0, n.jsx)(ey.N, {})), (V[45] = I)) : (I = V[45]),
        V[46] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (e) => {
              eM(e.target.value)
            }),
            (V[46] = _))
          : (_ = V[46]),
        V[47] !== eV
          ? ((N = (e) => {
              "Enter" !== e.key || (0, es.X)(e.nativeEvent) || (e.preventDefault(), eV())
            }),
            (V[47] = eV),
            (V[48] = N))
          : (N = V[48]),
        V[49] !== eA || V[50] !== J
          ? ((R =
              eA?.trim() ||
              J.formatMessage({
                id: "localConversation.worktreeBranchSetup.branchPlaceholder.new",
                defaultMessage: "Create a new branch",
              })),
            (V[49] = eA),
            (V[50] = J),
            (V[51] = R))
          : (R = V[51]),
        V[52] !== J
          ? ((U = J.formatMessage({
              id: "localConversation.worktreeBranchSetup.branchAriaLabel",
              defaultMessage: "Branch name",
            })),
            (V[52] = J),
            (V[53] = U))
          : (U = V[53]),
        V[54] !== eP || V[55] !== N || V[56] !== R || V[57] !== U
          ? ((D = (0, n.jsx)(el.pd, {
              autoFocus: !0,
              value: eP,
              onChange: _,
              onKeyDown: N,
              placeholder: R,
              "aria-label": U,
            })),
            (V[54] = eP),
            (V[55] = N),
            (V[56] = R),
            (V[57] = U),
            (V[58] = D))
          : (D = V[58]),
        V[59] !== eT
          ? ((T = eT
              ? (0, n.jsx)("p", {
                  className: "text-xs text-danger",
                  children: (0, n.jsx)(h.A, {
                    id: "localConversation.worktreeBranchSetup.branchExistsError",
                    defaultMessage: "Branch already exists",
                  }),
                })
              : null),
            (V[59] = eT),
            (V[60] = T))
          : (T = V[60]),
        V[61] !== D || V[62] !== T
          ? ((L = (0, n.jsxs)("div", { className: "flex flex-col gap-3", children: [I, D, T] })),
            (V[61] = D),
            (V[62] = T),
            (V[63] = L))
          : (L = V[63]))
      let eW = !eq,
        eK = eB ?? "-"
      return (
        V[64] !== eK
          ? ((F = (0, n.jsx)(h.A, {
              id: "localConversation.worktreeBranchSetup.checkoutDisabled",
              defaultMessage: "This branch is already checked out at {location}",
              values: { location: eK },
            })),
            (V[64] = eK),
            (V[65] = F))
          : (F = V[65]),
        V[66] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, n.jsx)(h.A, {
              id: "localConversation.worktreeBranchSetup.action.create",
              defaultMessage: "Create",
            })),
            (V[66] = O))
          : (O = V[66]),
        V[67] !== e$ || V[68] !== eV || V[69] !== eG
          ? ((E = (0, n.jsx)("span", {
              className: "inline-flex w-full",
              children: (0, n.jsx)(et.$, {
                className: "w-full justify-center",
                color: "primary",
                disabled: e$,
                loading: eG,
                onClick: eV,
                children: O,
              }),
            })),
            (V[67] = e$),
            (V[68] = eV),
            (V[69] = eG),
            (V[70] = E))
          : (E = V[70]),
        V[71] !== eW || V[72] !== F || V[73] !== E
          ? ((G = (0, n.jsx)(ev.m.Footer, { right: (0, n.jsx)(X.m, { disabled: eW, content: F, children: E }) })),
            (V[71] = eW),
            (V[72] = F),
            (V[73] = E),
            (V[74] = G))
          : (G = V[74]),
        V[75] !== L || V[76] !== G
          ? ((q = (0, n.jsxs)(ea.R4, { className: "gap-4", children: [A, L, G] })),
            (V[75] = L),
            (V[76] = G),
            (V[77] = q))
          : (q = V[77]),
        V[78] !== ez || V[79] !== K || V[80] !== q
          ? ((z = (0, n.jsx)(g.lG, { size: "compact", open: K, onOpenChange: ez, children: q })),
            (V[78] = ez),
            (V[79] = K),
            (V[80] = q),
            (V[81] = z))
          : (z = V[81]),
        z
      )
    }
    function eC(e) {
      return (0, n.jsx)("a", {
        className: "underline",
        href: "https://developers.openai.com/codex/app/worktrees#option-1-working-on-the-worktree",
        target: "_blank",
        rel: "noreferrer",
        onClick: ej,
        children: e,
      })
    }
    function ej(e) {
      ;(0, v.PQ)({
        event: e,
        href: e.currentTarget.href,
        initiator: "open_in_browser_bridge",
        openTarget: "external-browser",
      })
    }
    function eM(e) {
      let t,
        a,
        i,
        s,
        c,
        u = (0, l.c)(20),
        {
          conversationId: f,
          target: m,
          codexWorktree: h,
          surface: p,
          onCreatePullRequestActionReady: g,
          deferQueries: v,
          registerCommands: x,
          onMenuOpenChange: y,
          renderActions: w,
          menuItems: b,
          menuRow: C,
        } = e,
        j = void 0 === f ? null : f,
        M = void 0 !== v && v,
        k = void 0 === x || x,
        S = (0, d.Qz)(m.hostId)
      u[0] !== S
        ? ((t = { hostConfig: S, operationSource: "local_conversation_git_actions" }), (u[0] = S), (u[1] = t))
        : (t = u[1])
      let A = !M
      u[2] !== A ? ((a = { enabled: A }), (u[2] = A), (u[3] = a)) : (a = u[3])
      let { data: I } = (0, r._U)(o.j, t, a),
        _ = M || I?.available !== !0
      return (
        u[4] !== h || u[5] !== j || u[6] !== m
          ? ((i = { codexWorktree: h, conversationId: j, target: m }), (u[4] = h), (u[5] = j), (u[6] = m), (u[7] = i))
          : (i = u[7]),
        u[8] !== _ ||
        u[9] !== b ||
        u[10] !== C ||
        u[11] !== g ||
        u[12] !== y ||
        u[13] !== k ||
        u[14] !== w ||
        u[15] !== p
          ? ((s = (0, n.jsx)(ek, {
              deferGitQueries: _,
              surface: p,
              onCreatePullRequestActionReady: g,
              registerCommands: k,
              onMenuOpenChange: y,
              renderActions: w,
              menuItems: b,
              menuRow: C,
            })),
            (u[8] = _),
            (u[9] = b),
            (u[10] = C),
            (u[11] = g),
            (u[12] = y),
            (u[13] = k),
            (u[14] = w),
            (u[15] = p),
            (u[16] = s))
          : (s = u[16]),
        u[17] !== i || u[18] !== s
          ? ((c = (0, n.jsx)(r.Ui, { scope: D.N, value: i, children: s })), (u[17] = i), (u[18] = s), (u[19] = c))
          : (c = u[19]),
        c
      )
    }
    function ek(e) {
      let t,
        a,
        o,
        d,
        f,
        m,
        h,
        p,
        g = (0, l.c)(38),
        {
          deferGitQueries: v,
          surface: x,
          onCreatePullRequestActionReady: y,
          registerCommands: w,
          onMenuOpenChange: b,
          renderActions: C,
          menuItems: j,
          menuRow: M,
        } = e,
        k = (0, r.gh)(D.N),
        S = (0, r.Ul)(I.ni)
      g[0] !== S
        ? (({ codexWorktree: t, conversationId: a, ...o } = S), (g[0] = S), (g[1] = t), (g[2] = a), (g[3] = o))
        : ((t = g[1]), (a = g[2]), (o = g[3]))
      let A = (0, r.Ul)(I.Ab),
        _ = (0, r.Ul)(i.It.activeTab$),
        P = (0, r.Ul)(s.SZ),
        N = "summary-panel" !== x || !(P && _?.tabId === c.m.DIFF),
        U = null
      if ("summary-panel" === x) {
        let e, t
        g[4] !== j || g[5] !== M || g[6] !== b
          ? ((e = (0, n.jsx)(J, { onOpenChange: b, row: M, children: j })),
            (g[4] = j),
            (g[5] = M),
            (g[6] = b),
            (g[7] = e))
          : (e = g[7])
        let a = e
        ;(g[8] !== a || g[9] !== C ? ((t = null == C ? a : C(a)), (g[8] = a), (g[9] = C), (g[10] = t)) : (t = g[10]),
          (U = t))
      }
      return (
        y?.(() => {
          ;(0, I.u6)(k)
        }),
        g[11] !== v || g[12] !== w || g[13] !== N
          ? ((d = w && N ? (0, n.jsx)(T, { deferQueries: v }) : null),
            (g[11] = v),
            (g[12] = w),
            (g[13] = N),
            (g[14] = d))
          : (d = g[14]),
        g[15] !== A || g[16] !== a || g[17] !== k || g[18] !== o
          ? ((f =
              "worktree-branch-setup" === A
                ? (0, n.jsx)(eb, {
                    conversationId: a ?? void 0,
                    target: o,
                    open: !0,
                    onOpenChange: (e) => {
                      k.set(I.Ab, e ? "worktree-branch-setup" : null)
                    },
                    onRequestOpenNextAction: () => {
                      ;(0, I.xh)(k)
                    },
                  })
                : null),
            (g[15] = A),
            (g[16] = a),
            (g[17] = k),
            (g[18] = o),
            (g[19] = f))
          : (f = g[19]),
        g[20] !== A || g[21] !== t || g[22] !== a || g[23] !== k || g[24] !== o
          ? ((m =
              "commit" === A
                ? (0, n.jsx)(u.X, {
                    codexWorktree: t,
                    conversationId: a,
                    enablePushActions: !0,
                    operationSource: "local_conversation_git_actions",
                    open: !0,
                    target: o,
                    onOpenChange: (e) => {
                      k.set(I.Ab, e ? "commit" : null)
                    },
                    onRequestReset: () => {
                      k.set(I.Ab, null)
                    },
                  })
                : null),
            (g[20] = A),
            (g[21] = t),
            (g[22] = a),
            (g[23] = k),
            (g[24] = o),
            (g[25] = m))
          : (m = g[25]),
        g[26] !== A || g[27] !== t || g[28] !== a || g[29] !== k || g[30] !== o
          ? ((h =
              "create-pr" === A || "create-draft-pr" === A
                ? (0, n.jsx)(R, {
                    defaultToDraft: "create-draft-pr" === A,
                    codexWorktree: t,
                    conversationId: a,
                    open: !0,
                    target: o,
                    onOpenChange: (e) => {
                      k.set(I.Ab, e ? A : null)
                    },
                    onRequestReset: () => {
                      k.set(I.Ab, null)
                    },
                  })
                : null),
            (g[26] = A),
            (g[27] = t),
            (g[28] = a),
            (g[29] = k),
            (g[30] = o),
            (g[31] = h))
          : (h = g[31]),
        g[32] !== U || g[33] !== d || g[34] !== f || g[35] !== m || g[36] !== h
          ? ((p = (0, n.jsxs)(n.Fragment, { children: [d, U, f, m, h] })),
            (g[32] = U),
            (g[33] = d),
            (g[34] = f),
            (g[35] = m),
            (g[36] = h),
            (g[37] = p))
          : (p = g[37]),
        p
      )
    }
  },
  FvDV(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      r = a("on57"),
      i = a("K4Cx"),
      s = a("zd8w"),
      o = a("Sm6l"),
      d = a("x8co"),
      c = a("g3QY")
    function u(e) {
      let t,
        a,
        r,
        i,
        s,
        o,
        u,
        f = (0, l.c)(19),
        { file: m, workspaceRoot: h } = e
      if (f[0] !== m.path || f[1] !== h) {
        let e = (0, c.ph)(m.path, h),
          n = e.split("/")
        ;((t = n.pop() ?? e), (a = n.join("/")), (f[0] = m.path), (f[1] = h), (f[2] = t), (f[3] = a))
      } else ((t = f[2]), (a = f[3]))
      let p = a,
        g = m.additions ?? 0,
        v = m.deletions ?? 0,
        x = null != m.additions || null != m.deletions
      return (
        f[4] !== t
          ? ((r = (0, n.jsx)("span", { className: "flex-shrink-0 font-medium text-default", children: t })),
            (f[4] = t),
            (f[5] = r))
          : (r = f[5]),
        f[6] !== p
          ? ((i =
              p.length > 0
                ? (0, n.jsx)("span", { className: "min-w-0 truncate text-codex-description", children: p })
                : null),
            (f[6] = p),
            (f[7] = i))
          : (i = f[7]),
        f[8] !== r || f[9] !== i
          ? ((s = (0, n.jsxs)("div", {
              className: "flex min-w-0 items-baseline gap-2 whitespace-nowrap",
              children: [r, i],
            })),
            (f[8] = r),
            (f[9] = i),
            (f[10] = s))
          : (s = f[10]),
        f[11] !== g || f[12] !== v || f[13] !== x
          ? ((o = x ? (0, n.jsx)(d.S, { variant: "color", linesAdded: g, linesRemoved: v }) : (0, n.jsx)("span", {})),
            (f[11] = g),
            (f[12] = v),
            (f[13] = x),
            (f[14] = o))
          : (o = f[14]),
        f[15] !== m.path || f[16] !== s || f[17] !== o
          ? ((u = (0, n.jsxs)("div", {
              className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6",
              title: m.path,
              children: [s, o],
            })),
            (f[15] = m.path),
            (f[16] = s),
            (f[17] = o),
            (f[18] = u))
          : (u = f[18]),
        u
      )
    }
    a.d(
      t,
      {},
      {
        m: {
          RowContainer: function (e) {
            let t,
              a,
              i = (0, l.c)(5),
              { children: s, className: o } = e
            return (
              i[0] !== o
                ? ((t = (0, r.A)("text-codex-description flex flex-col gap-3", o)), (i[0] = o), (i[1] = t))
                : (t = i[1]),
              i[2] !== s || i[3] !== t
                ? ((a = (0, n.jsx)("div", { className: t, children: s })), (i[2] = s), (i[3] = t), (i[4] = a))
                : (a = i[4]),
              a
            )
          },
          Footer: function (e) {
            let t,
              a = (0, l.c)(6),
              { left: i, right: d, className: c } = e
            if (a[0] !== c || a[1] !== i || a[2] !== d) {
              let e,
                l,
                u,
                f = (e, t) => {
                  if (!s.isValidElement(e)) return e
                  if (e.type === o.$) return null != e.props.size ? e : s.cloneElement(e, { size: t })
                  if (null == e.props.children) return e
                  let a = !1,
                    n = s.Children.map(e.props.children, (e) => {
                      let n = f(e, t)
                      return (n !== e && (a = !0), n)
                    })
                  if (!a) return e
                  let l = n
                  return (n?.length === 1 && ([l] = n), s.cloneElement(e, { children: l }))
                }
              ;(a[4] !== c
                ? ((e = (0, r.A)("flex flex-1 items-center justify-between gap-2", c)), (a[4] = c), (a[5] = e))
                : (e = a[5]),
                (t = (0, n.jsxs)("div", {
                  className: e,
                  children: [
                    (0, n.jsx)(n.Fragment, {
                      children:
                        ((l = f(i, "medium")),
                        (u = f(d, "medium")),
                        (0, n.jsxs)(n.Fragment, { children: [l ?? null, u] })),
                    }),
                    null,
                  ],
                })),
                (a[0] = c),
                (a[1] = i),
                (a[2] = d),
                (a[3] = t))
            } else t = a[3]
            return t
          },
          Row: function (e) {
            let t,
              a,
              i,
              s,
              o,
              d,
              c = (0, l.c)(15),
              { left: u, label: f, right: m, className: h } = e
            return (
              c[0] !== h
                ? ((t = (0, r.A)("grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6", h)),
                  (c[0] = h),
                  (c[1] = t))
                : (t = c[1]),
              c[2] !== u
                ? ((a = (0, n.jsx)("span", {
                    className: "flex h-4 w-4 flex-shrink-0 items-center justify-center",
                    children: u,
                  })),
                  (c[2] = u),
                  (c[3] = a))
                : (a = c[3]),
              c[4] !== f
                ? ((i = (0, n.jsx)("span", { className: "min-w-0", children: f })), (c[4] = f), (c[5] = i))
                : (i = c[5]),
              c[6] !== a || c[7] !== i
                ? ((s = (0, n.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [a, i] })),
                  (c[6] = a),
                  (c[7] = i),
                  (c[8] = s))
                : (s = c[8]),
              c[9] !== m ? ((o = m ?? (0, n.jsx)("span", {})), (c[9] = m), (c[10] = o)) : (o = c[10]),
              c[11] !== t || c[12] !== s || c[13] !== o
                ? ((d = (0, n.jsxs)("div", { className: t, children: [s, o] })),
                  (c[11] = t),
                  (c[12] = s),
                  (c[13] = o),
                  (c[14] = d))
                : (d = c[14]),
              d
            )
          },
          KeyValueRow: function (e) {
            let t,
              a,
              i,
              s,
              o,
              d,
              c = (0, l.c)(16),
              { left: u, label: f, value: m, valueClassName: h, className: p } = e
            return (
              c[0] !== p
                ? ((t = (0, r.A)("grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-6", p)),
                  (c[0] = p),
                  (c[1] = t))
                : (t = c[1]),
              c[2] !== u
                ? ((a = (0, n.jsx)("span", {
                    className: "flex h-4 w-4 flex-shrink-0 items-center justify-center",
                    children: u,
                  })),
                  (c[2] = u),
                  (c[3] = a))
                : (a = c[3]),
              c[4] !== f || c[5] !== a
                ? ((i = (0, n.jsxs)("span", {
                    className: "flex items-center gap-2 whitespace-nowrap",
                    children: [a, f],
                  })),
                  (c[4] = f),
                  (c[5] = a),
                  (c[6] = i))
                : (i = c[6]),
              c[7] !== h ? ((s = (0, r.A)("min-w-0 truncate text-end", h)), (c[7] = h), (c[8] = s)) : (s = c[8]),
              c[9] !== s || c[10] !== m
                ? ((o = (0, n.jsx)("div", { className: s, children: m })), (c[9] = s), (c[10] = m), (c[11] = o))
                : (o = c[11]),
              c[12] !== t || c[13] !== i || c[14] !== o
                ? ((d = (0, n.jsxs)("div", { className: t, children: [i, o] })),
                  (c[12] = t),
                  (c[13] = i),
                  (c[14] = o),
                  (c[15] = d))
                : (d = c[15]),
              d
            )
          },
          IconButton: function (e) {
            let t,
              a,
              i = (0, l.c)(8),
              { children: s, ariaLabel: d, onClick: c, disabled: u, className: f } = e
            return (
              i[0] !== f ? ((t = (0, r.A)("rounded-lg p-2", f)), (i[0] = f), (i[1] = t)) : (t = i[1]),
              i[2] !== d || i[3] !== s || i[4] !== u || i[5] !== c || i[6] !== t
                ? ((a = (0, n.jsx)(o.$, {
                    color: "secondary",
                    size: "icon",
                    "aria-label": d,
                    disabled: u,
                    className: t,
                    onClick: c,
                    children: s,
                  })),
                  (i[2] = d),
                  (i[3] = s),
                  (i[4] = u),
                  (i[5] = c),
                  (i[6] = t),
                  (i[7] = a))
                : (a = i[7]),
              a
            )
          },
          FileRow: u,
          FileSection: function (e) {
            let t,
              a,
              i,
              s,
              o,
              d = (0, l.c)(15),
              { title: c, files: f, workspaceRoot: m, className: h } = e
            if (
              (d[0] !== h ? ((t = (0, r.A)("flex flex-col gap-2", h)), (d[0] = h), (d[1] = t)) : (t = d[1]),
              d[2] !== c
                ? ((a = (0, n.jsx)("div", { className: "text-codex-description", children: c })),
                  (d[2] = c),
                  (d[3] = a))
                : (a = d[3]),
              d[4] !== f || d[5] !== m)
            ) {
              let e
              ;(d[7] !== m
                ? ((e = (e) => (0, n.jsx)(u, { file: e, workspaceRoot: m }, e.path)), (d[7] = m), (d[8] = e))
                : (e = d[8]),
                (i = f.map(e)),
                (d[4] = f),
                (d[5] = m),
                (d[6] = i))
            } else i = d[6]
            return (
              d[9] !== i
                ? ((s = (0, n.jsx)("div", { className: "flex flex-col gap-2", children: i })), (d[9] = i), (d[10] = s))
                : (s = d[10]),
              d[11] !== t || d[12] !== a || d[13] !== s
                ? ((o = (0, n.jsxs)("div", { className: t, children: [a, s] })),
                  (d[11] = t),
                  (d[12] = a),
                  (d[13] = s),
                  (d[14] = o))
                : (o = d[14]),
              o
            )
          },
          Expanded: function (e) {
            let t,
              a,
              s,
              o,
              d,
              c,
              u = (0, l.c)(12),
              { expanded: f, children: m, className: h, scrollClassName: p } = e,
              g = f ? "open" : "collapsed"
            return (
              u[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = { open: { height: "auto", opacity: 1 }, collapsed: { height: 0, opacity: 0 } }), (u[0] = t))
                : (t = u[0]),
              u[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((a = { duration: 0.25, ease: [0.16, 1, 0.3, 1] }),
                  (s = { overflow: "hidden" }),
                  (u[1] = a),
                  (u[2] = s))
                : ((a = u[1]), (s = u[2])),
              u[3] !== p
                ? ((o = (0, r.A)("vertical-scroll-fade-mask max-h-64 overflow-y-auto [--edge-fade-distance:2rem]", p)),
                  (u[3] = p),
                  (u[4] = o))
                : (o = u[4]),
              u[5] !== m || u[6] !== o
                ? ((d = (0, n.jsx)("div", { className: o, children: m })), (u[5] = m), (u[6] = o), (u[7] = d))
                : (d = u[7]),
              u[8] !== h || u[9] !== g || u[10] !== d
                ? ((c = (0, n.jsx)(i.P.div, {
                    initial: !1,
                    animate: g,
                    variants: t,
                    transition: a,
                    style: s,
                    className: h,
                    children: d,
                  })),
                  (u[8] = h),
                  (u[9] = g),
                  (u[10] = d),
                  (u[11] = c))
                : (c = u[11]),
              c
            )
          },
        },
      },
    )
  },
  fOzV(e, t, a) {
    var n = a("SGsN"),
      l = a("nMrN"),
      r = a("svjy"),
      i = a("FGQ3"),
      s = a("XXJV")
    a.d(
      t,
      {},
      {
        f: async function (e, { path: t, ...a }) {
          let o = (0, i.getTextFileEditor)(t),
            d = s.rl
              .map((n) => {
                let l = (0, s.getThreadPanelTabController)(n),
                  r = e
                    .get(l.tabs$)
                    .find(
                      (e) =>
                        "path" in e.props &&
                        e.props.path === t &&
                        "hostId" in e.props &&
                        e.props.hostId === a.hostId &&
                        null != e.onShowSource,
                    )
                return null == r ? null : { controller: l, tab: r }
              })
              .find((e) => null != e),
            c = await (0, l.HR)().catch(() => null)
          if (null == c)
            return void e
              .get(n.Id)
              .danger(
                e
                  .get(r.g)
                  .formatMessage({
                    id: "fileEditor.loadError",
                    defaultMessage: "Could not open file",
                    description: "Error shown inside a file tab when the file cannot be opened",
                  }),
                { errorAnalytics: { toastId: "workspace_file_changes_open_failed" } },
              )
          if (null != d) {
            let { controller: t, tab: a } = d,
              n = e.get(t.tabById$, a.tabId)
            if (
              null == n ||
              n.contentInstance !== a.contentInstance ||
              (null != n.onShowSource && !(await n.onShowSource())) ||
              !t.isCurrentTabInstance(e, n)
            )
              return
          }
          c(e, t, {
            ...a,
            comparisonTarget: a.isDeleted || null != o ? a.comparisonTarget : void 0,
            fileViewer: "default",
          })
        },
      },
    )
  },
  K0l0(e, t, a) {
    a.d(
      t,
      {},
      {
        P: function (e, t, a, n) {
          let l = (e) => a.has(t(e))
          return { entries: n ? e.filter((e) => !l(e)) : e, isGenerated: l, filterGenerated: n }
        },
      },
    )
  },
  kW2F(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      r = a("qmMi"),
      i = a("lm8x"),
      s = a("vzYW")
    a.d(
      t,
      {},
      {
        x: function (e) {
          let t,
            a,
            o = (0, l.c)(7),
            { list: d, children: c } = e,
            u = (0, r.Ul)(i.hv)
          if (0 === d.entries.length && d.filterGenerated) {
            let e
            return (
              o[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(s.V, {})), (o[0] = e)) : (e = o[0]),
              e
            )
          }
          return (
            o[1] !== c || o[2] !== u || o[3] !== d
              ? ((t = d.entries.map((e) => c(e, u && !d.isGenerated(e)))),
                (o[1] = c),
                (o[2] = u),
                (o[3] = d),
                (o[4] = t))
              : (t = o[4]),
            o[5] !== t ? ((a = (0, n.jsx)(n.Fragment, { children: t })), (o[5] = t), (o[6] = a)) : (a = o[6]),
            a
          )
        },
      },
    )
  },
  QaKP(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      r = a("qmMi"),
      i = a("zd8w"),
      s = a("Wf1j"),
      o = a("oyxz"),
      d = a("Sm6l"),
      c = a("bqtn"),
      u = a("T0kF"),
      f = a("OWtl"),
      m = a("w4n3"),
      h = a("GRTq")
    a.d(
      t,
      {},
      {
        q: function () {
          let e,
            t,
            a,
            p,
            g,
            v,
            x,
            y,
            w = (0, l.c)(20),
            b = (0, r.gh)(f.u),
            C = (0, s.A)(),
            j = (0, r.Ul)(h.RO),
            [M, k] = (0, i.useState)(!1)
          w[0] !== C
            ? ((e = C.formatMessage({ id: "codex.review.fileTree.filters", defaultMessage: "Filter changed files" })),
              (w[0] = C),
              (w[1] = e))
            : (e = w[1])
          let S = j ? "secondary" : "ghost"
          return (
            w[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)(u.A, { "aria-hidden": !0, className: "icon-sm" })), (w[2] = t))
              : (t = w[2]),
            w[3] !== j ? ((a = (0, n.jsx)(m.g, { isActive: j, children: t })), (w[3] = j), (w[4] = a)) : (a = w[4]),
            w[5] !== j || w[6] !== e || w[7] !== S || w[8] !== a
              ? ((p = (0, n.jsx)(d.$, {
                  "aria-label": e,
                  "aria-pressed": j,
                  color: S,
                  size: "toolbar",
                  uniform: !0,
                  children: a,
                })),
                (w[5] = j),
                (w[6] = e),
                (w[7] = S),
                (w[8] = a),
                (w[9] = p))
              : (p = w[9]),
            w[10] !== b
              ? ((g = (e) => {
                  ;(b.set(h.RO, !0 === e), k(!1))
                }),
                (w[10] = b),
                (w[11] = g))
              : (g = w[11]),
            w[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = (0, n.jsx)(o.A, {
                  id: "codex.review.fileTree.filterGeneratedFiles",
                  defaultMessage: "Filter generated files",
                })),
                (w[12] = v))
              : (v = w[12]),
            w[13] !== j || w[14] !== g
              ? ((x = (0, n.jsx)(c.ms.CheckboxItem, { checked: j, onCheckedChange: g, children: v })),
                (w[13] = j),
                (w[14] = g),
                (w[15] = x))
              : (x = w[15]),
            w[16] !== M || w[17] !== p || w[18] !== x
              ? ((y = (0, n.jsx)(c.Ab, {
                  align: "end",
                  contentWidth: "menu",
                  onOpenChange: k,
                  open: M,
                  triggerButton: p,
                  children: x,
                })),
                (w[16] = M),
                (w[17] = p),
                (w[18] = x),
                (w[19] = y))
              : (y = w[19]),
            y
          )
        },
      },
    )
  },
  uHE8(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      r = a("qmMi"),
      i = a("Ywss"),
      s = a("Ve8c"),
      o = a("gyrn"),
      d = a("WLgA"),
      c = a("jAnS"),
      u = a("Sd8U"),
      f = a("Dh1c"),
      m = a("tSEg")
    a.d(
      t,
      {},
      {
        A: function (e) {
          let t,
            a,
            h,
            p,
            g,
            v,
            x,
            y = (0, l.c)(24),
            { children: w, pendingRetainedScopes: b } = e,
            C = (0, r.gh)(m.GD),
            j = (0, r.Ul)(f.z),
            M = (0, r.Ul)(o.cz)
          y[0] !== M || y[1] !== C.value.pathname
            ? ((t = null != M && (0, d.vl)(C.value.pathname) === M.projectId),
              (y[0] = M),
              (y[1] = C.value.pathname),
              (y[2] = t))
            : (t = y[2])
          let k = t,
            S = (0, i.zy)()
          y[3] !== S || y[4] !== C.value.pathname || y[5] !== C.value.search
            ? ((a = (0, c.hm)(C.value.pathname, C.value.search ?? "") ? void 0 : S.state),
              (y[3] = S),
              (y[4] = C.value.pathname),
              (y[5] = C.value.search),
              (y[6] = a))
            : (a = y[6])
          let A = a
          if (
            y[7] !== A ||
            y[8] !== k ||
            y[9] !== S ||
            y[10] !== M ||
            y[11] !== b ||
            y[12] !== j ||
            y[13] !== C.value
          ) {
            let e =
              "home" === C.value.routeKind
                ? {
                    homeDraftKey: k ? `locked-project:${M.accountId}:${M.userId}:${M.projectId}` : void 0,
                    cloudThreadPrototype: S.state?.prefillCloudThreadPrototype,
                    initialTeam: S.state?.prefillTeam,
                    focusComposerNonce: S.state?.focusComposerNonce,
                    gptId: A?.chatGptCustomGptHomepage === !0 ? (0, s.Hw)(A)?.id : void 0,
                    localExecution: S.state?.prefillLocalExecution,
                    remoteExecutionHostId: S.state?.prefillRemoteExecutionHostId,
                    executionRootPaths: S.state?.prefillExecutionRootPaths,
                    initialChatGptConversationId:
                      S.state?.initialChatGptBusinessAgentGizmoId == null
                        ? S.state?.initialChatGptConversationId
                        : A?.initialChatGptConversationId,
                    initialChatGptBusinessAgentGizmoId: A?.initialChatGptBusinessAgentGizmoId,
                  }
                : void 0
            ;((h = r.Ui),
              (p = u.PR),
              (g = b),
              (v = j ?? (0, u.CN)(C.value, e, C.value.clientThreadId)),
              (y[7] = A),
              (y[8] = k),
              (y[9] = S),
              (y[10] = M),
              (y[11] = b),
              (y[12] = j),
              (y[13] = C.value),
              (y[14] = h),
              (y[15] = p),
              (y[16] = g),
              (y[17] = v))
          } else ((h = y[14]), (p = y[15]), (g = y[16]), (v = y[17]))
          return (
            y[18] !== h || y[19] !== w || y[20] !== p || y[21] !== g || y[22] !== v
              ? ((x = (0, n.jsx)(h, { scope: p, pendingRetainedScopes: g, value: v, children: w })),
                (y[18] = h),
                (y[19] = w),
                (y[20] = p),
                (y[21] = g),
                (y[22] = v),
                (y[23] = x))
              : (x = y[23]),
            x
          )
        },
      },
    )
  },
  Dh1c(e, t, a) {
    var n = a("qmMi"),
      l = a("DBCl"),
      r = a("Ywss"),
      i = a("Bl6U"),
      s = a("Iu8W"),
      o = a("hEJC"),
      d = a("Sd8U"),
      c = a("tSEg")
    let u = (0, n.un)(c.GD, ({ get: e, scope: t }) => {
      let { pathname: a, persistentWorkspace: n } = t.value
      if (null == n) return null
      let c = (0, o.EB)(a)
      if (!c && null == (0, r.B6)(l.RNG, a)) return null
      let { session: u } = n,
        f = e(s.e, {
          clientThreadId: u.clientThreadId,
          conversationId: u.conversationId,
          hostId: c ? e(i.qX, u.conversationId) : u.hostId,
        })
      return (0, d.p)(null == f ? u.conversationId : null, "main", null, u.clientThreadId)
    })
    a.d(t, {}, { z: u })
  },
  GzOO(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      r = a("hwkA"),
      i = a("on57"),
      s = a("qmMi"),
      o = a("oyxz"),
      d = a("khOd")
    a.d(
      t,
      {},
      {
        l: function (e) {
          let t,
            a,
            r,
            s,
            o,
            d,
            c,
            u,
            f = (0, l.c)(14)
          f[0] !== e
            ? (({ children: t, className: a, alignment: s, variant: o, hasLoadingRows: d, ...r } = e),
              (f[0] = e),
              (f[1] = t),
              (f[2] = a),
              (f[3] = r),
              (f[4] = s),
              (f[5] = o),
              (f[6] = d))
            : ((t = f[1]), (a = f[2]), (r = f[3]), (s = f[4]), (o = f[5]), (d = f[6]))
          let m = void 0 === s ? "edge" : s,
            h = void 0 === o ? "default" : o,
            p =
              "parent-label" === m
                ? "ps-[var(--sidebar-row-label-inset)]"
                : "nested" === m && ("tableRow" === h ? "ps-[40px]" : "px-8")
          return (
            f[7] !== a || f[8] !== p
              ? ((c = (0, i.A)("flex gap-1 py-1", p, a)), (f[7] = a), (f[8] = p), (f[9] = c))
              : (c = f[9]),
            f[10] !== t || f[11] !== r || f[12] !== c
              ? ((u = (0, n.jsxs)(n.Fragment, {
                  children: [
                    null,
                    (0, n.jsx)(n.Fragment, { children: (0, n.jsx)("div", { ...r, className: c, children: t }) }),
                  ],
                })),
                (f[10] = t),
                (f[11] = r),
                (f[12] = c),
                (f[13] = u))
              : (u = f[13]),
            u
          )
        },
        z: function (e) {
          let t,
            a,
            i,
            c,
            u,
            f,
            m,
            h = (0, l.c)(14)
          h[0] !== e
            ? (({ alignment: i, children: t, variant: c, ...a } = e),
              (h[0] = e),
              (h[1] = t),
              (h[2] = a),
              (h[3] = i),
              (h[4] = c))
            : ((t = h[1]), (a = h[2]), (i = h[3]), (c = h[4]))
          let p = void 0 === i ? "edge" : i,
            g = (0, s.Ul)(d.GB),
            v = c ?? (g ? "ghost" : "transparent"),
            x = "edge" !== p ? "start" : void 0
          return (
            h[5] !== t
              ? ((u =
                  void 0 === t ? (0, n.jsx)(o.A, { id: "sidebarElectron.showMore", defaultMessage: "Show more" }) : t),
                (h[5] = t),
                (h[6] = u))
              : (u = h[6]),
            h[7] !== u
              ? ((f = (0, n.jsx)("span", { className: "text-base", children: u })), (h[7] = u), (h[8] = f))
              : (f = h[8]),
            h[9] !== a || h[10] !== v || h[11] !== x || h[12] !== f
              ? ((m = (0, n.jsx)(r.$, {
                  className:
                    "[--button-font-weight:var(--font-weight-normal)] [--color-text-secondary-ghost:var(--color-text-tertiary)]",
                  color: "secondary",
                  variant: v,
                  pill: !1,
                  size: "xs",
                  opticallyAlign: x,
                  type: "button",
                  ...a,
                  children: f,
                })),
                (h[9] = a),
                (h[10] = v),
                (h[11] = x),
                (h[12] = f),
                (h[13] = m))
              : (m = h[13]),
            m
          )
        },
      },
    )
  },
  nUnA(e, t, a) {
    a.d(t, { ReviewThreadSidePanelTab: () => a3 })
    var n = a("ABep"),
      l = a("QosV"),
      r = a("qmMi"),
      i = a("zd8w"),
      s = a("Wf1j"),
      o = a("SGsN"),
      d = a("NxNN"),
      c = a("OWtl"),
      u = a("mbLy")
    let f = (0, r.A4)(
      c.u,
      (e) => !1,
      ({ hostId: e, root: t }, { scope: a, set: n }) => {
        if (null != t) return (0, u.VD)(a.queryClient, { hostId: e, root: t, onChange: n })
      },
      { key: ({ hostId: e, root: t }) => JSON.stringify([e, t]) },
    )
    var m = a("kjQz"),
      h = a("dJBt")
    function p(e) {
      let t,
        a,
        r,
        s,
        o,
        d,
        c = (0, l.c)(13),
        {
          diffTooLarge: u,
          hasPatch: f,
          isLoading: p,
          isPatchLoading: g,
          patchFailed: v,
          repositoryKind: x,
          source: y,
        } = e,
        w = (0, i.useRef)(!1),
        b = (0, i.useRef)(null)
      c[0] !== x || c[1] !== y
        ? ((t = () => ({
            attributes: { telemetryOwner: "desktop_client", definitionVersion: 1, repositoryKind: x, source: y },
            startedAtMs: performance.timeOrigin + performance.now(),
          })),
          (c[0] = x),
          (c[1] = y),
          (c[2] = t))
        : (t = c[2])
      let [C] = (0, i.useState)(t)
      return (c[3] !== C
        ? ((a = () => {
            w.current = !0
            let e =
              b.current ??
              m.y.start("review_open", C.attributes, {
                key: `${C.attributes.repositoryKind}:${C.attributes.source}`,
                startedAtMs: C.startedAtMs,
                traceAttributes: {
                  "review.repository_kind": C.attributes.repositoryKind,
                  "review.source": C.attributes.source,
                },
              })
            return (
              (b.current = e),
              e.mark("review_committed"),
              () => {
                ;((w.current = !1),
                  queueMicrotask(() => {
                    !w.current && e.isRecording() && e.abort("navigation_away")
                  }))
              }
            )
          }),
          (r = [C]),
          (c[3] = C),
          (c[4] = a),
          (c[5] = r))
        : ((a = c[4]), (r = c[5])),
      (0, i.useEffect)(a, r),
      c[6] !== p
        ? ((s = () => {
            p || b.current?.mark("summary_ready")
          }),
          (o = [p]),
          (c[6] = p),
          (c[7] = s),
          (c[8] = o))
        : ((s = c[7]), (o = c[8])),
      (0, i.useEffect)(s, o),
      p || g)
        ? null
        : (c[9] !== u || c[10] !== f || c[11] !== v
            ? ((d = (0, n.jsx)(h.X, {
                onPaint: () => {
                  let e = b.current
                  null != e &&
                    e.isRecording() &&
                    (f && e.mark("first_patch_visible"),
                    e.mark("content_visible"),
                    u ? e.fail("diff_too_large") : v ? e.fail("patch_failed") : e.end())
                },
              })),
              (c[9] = u),
              (c[10] = f),
              (c[11] = v),
              (c[12] = d))
            : (d = c[12]),
          d)
    }
    var g = a("tSEg"),
      v = a("nf3G"),
      x = a("aepO"),
      y = a("lCRE"),
      w = a("mzum"),
      b = a("T0Rc"),
      C = a("D7Ms"),
      j = a("oyxz"),
      M = a("Sm6l"),
      k = a("ZtSy"),
      S = a("e4Ta"),
      A = a("ZiSI"),
      I = a("zOE4"),
      _ = a("bnxy"),
      P = a("rvFo"),
      N = a("on57"),
      R = a("FrrB"),
      U = (e) =>
        (0, n.jsx)("svg", {
          width: 66,
          height: 73,
          viewBox: "0 0 66 73",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M20.4622 0.247806C21.3984 -0.00979114 22.5424 -0.0833059 24.3919 0.107181C26.2731 0.300998 28.6338 0.734691 31.9925 1.35718L50.5852 4.80249C53.6017 5.36157 54.6803 5.57925 55.6038 5.99488L55.929 6.15015C56.6787 6.52555 57.3664 7.00409 57.9681 7.57202C58.6934 8.25736 59.2703 9.14603 60.8177 11.6287L62.7884 14.7898C64.336 17.2728 64.8793 18.1822 65.1751 19.1355C65.455 20.0387 65.5807 20.9906 65.5491 21.9519C65.5479 21.9883 65.5432 22.0246 65.5413 22.0613C65.5596 22.3428 65.5672 22.6264 65.5579 22.9109V22.9119C65.5243 23.9209 65.245 24.9841 64.4183 27.9392L56.0804 57.7429C55.1602 61.0318 54.5093 63.3424 53.8548 65.1169V65.1179C53.2117 66.8608 52.6407 67.8608 51.9915 68.5945L51.9905 68.5955C50.6374 70.1236 48.849 71.2391 46.8811 71.781C45.9363 72.0411 44.7864 72.1129 42.9378 71.9226C41.0562 71.7288 38.6945 71.295 35.3362 70.6726L14.0296 66.7234C10.6714 66.101 8.31217 65.6599 6.51298 65.1716C4.74539 64.6918 3.74685 64.2213 3.03348 63.6541C1.54801 62.4722 0.529247 60.8364 0.122352 58.9822V58.9812C0.00960176 58.4665 -0.0292753 57.8806 0.0227425 57.1306C-0.0250512 56.373 0.0534353 55.4382 0.303016 54.1472C0.657029 52.3165 1.29974 50.004 2.22001 46.7146L11.302 14.2527C12.2224 10.9631 12.8721 8.65292 13.5266 6.87867C14.1702 5.13425 14.7404 4.13988 15.3841 3.41285C16.7292 1.89375 18.5059 0.78636 20.4622 0.247806ZM42.9808 70.9324C43.6743 71.0038 44.2688 71.0384 44.7903 71.0398C44.2691 71.0384 43.675 71.0038 42.9817 70.9324C42.7465 70.9081 42.5034 70.88 42.2522 70.8484L42.9808 70.9324ZM9.73075 64.908C10.9652 65.1573 12.3945 65.4229 14.0735 65.7341L35.3802 69.6824C37.4793 70.0714 39.1889 70.3869 40.635 70.616L39.7347 70.4675C38.4898 70.2571 37.0602 69.9936 35.3811 69.6824L14.0745 65.7341C12.3951 65.4229 10.9652 65.1573 9.73075 64.908ZM24.3411 0.604251C22.523 0.41699 21.4475 0.494741 20.595 0.729251C18.7322 1.24208 17.039 2.29737 15.7581 3.7439C15.1719 4.40597 14.6292 5.33725 13.9964 7.05249C13.3505 8.80345 12.7059 11.0904 11.7835 14.3875L2.70145 46.8494C1.77899 50.1466 1.14345 52.4359 0.794227 54.2419C0.452241 56.0108 0.446252 57.0412 0.622352 57.8445C1.00742 59.5997 1.972 61.1476 3.37821 62.2664C4.02189 62.7782 4.95004 63.227 6.68876 63.699C8.46395 64.1808 10.799 64.618 14.1653 65.2419L35.472 69.1912C38.8383 69.8151 41.176 70.2441 43.0325 70.4353C44.8509 70.6226 45.9261 70.545 46.7786 70.3103C48.6414 69.7974 50.3347 68.7422 51.6155 67.2957C52.2015 66.6336 52.7446 65.7028 53.3772 63.988C54.0232 62.237 54.6677 59.9493 55.5901 56.6521L63.928 26.8484C64.3266 25.4238 64.5906 24.4522 64.764 23.7244L53.3714 21.4041C52.1934 21.1641 51.6039 21.0432 51.2161 20.7195C50.9667 20.5111 50.7735 20.2461 50.6507 19.949C50.3911 19.6602 50.208 19.3084 50.1243 18.9255C50.06 18.6309 50.081 18.3236 50.1536 17.9578C50.2257 17.5945 50.3541 17.1493 50.5188 16.5759L53.5852 5.90015C52.8637 5.73959 51.8946 5.55438 50.4934 5.29468L31.9007 1.84839C28.5347 1.22455 26.1975 0.795542 24.3411 0.604251ZM48.5755 70.1746C48.2997 70.3039 48.0182 70.4211 47.7317 70.5261C48.0182 70.421 48.2997 70.3039 48.5755 70.1746ZM49.0227 69.9539L49.0218 69.9548L49.0227 69.9539ZM50.5677 68.9568C50.4229 69.0691 50.2746 69.1764 50.1243 69.281C50.2746 69.1764 50.4229 69.0691 50.5677 68.9568ZM51.8548 67.7722C51.771 67.8633 51.6848 67.9519 51.5979 68.0398C51.6848 67.9519 51.771 67.8633 51.8548 67.7722ZM0.428016 58.9783C0.944949 60.4218 1.85125 61.691 3.06669 62.658C3.78719 63.2307 4.79047 63.7019 6.55692 64.1814C6.78191 64.2425 7.01573 64.303 7.25907 64.363L6.5579 64.1814C5.23267 63.8217 4.33703 63.4667 3.66825 63.0701C3.55675 63.004 3.45169 62.9366 3.35184 62.8679C3.25212 62.7993 3.15765 62.7295 3.06766 62.658C2.0389 61.8396 1.23176 60.8043 0.694618 59.6306C0.645767 59.5239 0.59834 59.4164 0.553993 59.3074C0.509667 59.1984 0.467769 59.0884 0.428016 58.9773V58.9783ZM54.3792 60.9002C54.1696 61.606 53.9696 62.2451 53.7766 62.8298C54 62.1525 54.2305 61.4017 54.4778 60.5593C54.4441 60.6743 54.4123 60.7886 54.3792 60.9002ZM55.8245 57.6638C55.4675 58.9368 55.1526 60.0532 54.8587 61.0427C55.1526 60.0532 55.4675 58.9367 55.8245 57.6638ZM0.0764534 57.6433C0.0924277 57.7492 0.111172 57.8519 0.133094 57.9519C0.184295 58.1852 0.245507 58.4153 0.315711 58.6414L0.218055 58.2996C0.187644 58.1846 0.159687 58.0687 0.134071 57.9519C0.11215 57.8519 0.0928863 57.7491 0.0764534 57.6433ZM19.6155 45.2244C19.9624 43.9875 21.2673 43.1731 22.5306 43.407L36.8714 46.0652C38.1329 46.3007 38.8774 47.4939 38.5325 48.7302C38.1864 49.9672 36.8795 50.7801 35.6165 50.5476L21.2766 47.8904C20.0128 47.6561 19.2692 46.4622 19.6155 45.2244ZM34.096 22.2293C34.4424 20.9919 35.7486 20.1784 37.012 20.4119C38.2747 20.6469 39.0191 21.8407 38.6731 23.0779L37.3362 27.8572L42.219 28.7625C43.4806 28.9978 44.226 30.1911 43.8811 31.4275C43.5351 32.6645 42.2282 33.4774 40.9651 33.2449L36.0823 32.3406L34.7444 37.1228C34.3978 38.3595 33.0914 39.1732 31.8284 38.9402C30.5656 38.7055 29.8208 37.5113 30.1663 36.2742L31.5052 31.4919L26.6253 30.5877C25.3614 30.3533 24.6169 29.1595 24.9632 27.9216C25.3101 26.6846 26.6158 25.8702 27.8792 26.1043L32.7591 27.0085L34.096 22.2293ZM50.9993 16.7146C50.8323 17.296 50.7099 17.7177 50.6429 18.0554C50.5765 18.39 50.5694 18.6196 50.6126 18.8181C50.6955 19.1975 50.9025 19.5398 51.2005 19.7888C51.3566 19.919 51.5644 20.0181 51.8919 20.114C52.2222 20.2107 52.652 20.299 53.2444 20.4197L64.9554 22.8044C65.0101 22.4792 65.0411 22.2051 65.0501 21.9353C65.0799 21.0284 64.9606 20.1319 64.6975 19.283C64.4254 18.406 63.9256 17.5606 62.3636 15.0544L60.3938 11.8933C58.8317 9.38706 58.2918 8.56584 57.6243 7.93531C56.9781 7.32527 56.226 6.82357 55.3987 6.45093C55.0334 6.28652 54.6399 6.15562 54.0725 6.01441L50.9993 16.7146Z",
            fill: "currentColor",
          }),
        })
    function D() {
      let e,
        t = (0, l.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)("div", {
              className: "flex justify-center",
              children: (0, n.jsx)(U, { "aria-hidden": !0, className: "h-18 w-auto text-tertiary" }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function T(e) {
      let t,
        a,
        r,
        i,
        s,
        o = (0, l.c)(7),
        { className: d } = e
      return (
        o[0] !== d ? ((t = (0, N.A)("h-full", d)), (o[0] = d), (o[1] = t)) : (t = o[1]),
        o[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(D, {})),
            (r = (0, n.jsx)(j.A, {
              id: "codex.review.diffTooLarge.title",
              defaultMessage: "Diff too large to display",
            })),
            (i = (0, n.jsx)(j.A, {
              id: "codex.review.diffTooLarge.description",
              defaultMessage: "Open the file to review changes directly.",
            })),
            (o[2] = a),
            (o[3] = r),
            (o[4] = i))
          : ((a = o[2]), (r = o[3]), (i = o[4])),
        o[5] !== t
          ? ((s = (0, n.jsx)(R.A, { className: t, illustration: a, title: r, description: i })), (o[5] = t), (o[6] = s))
          : (s = o[6]),
        s
      )
    }
    var L = a("F84F"),
      F = a("Wk3P"),
      O = a("SvF6"),
      B = a("LwKg"),
      E = a("aEMM"),
      G = a("D6IH"),
      q = a("Cbfv"),
      z = a("ngfh")
    function V(e) {
      let t,
        a,
        i,
        s,
        o,
        d,
        c,
        u,
        f,
        m,
        h,
        p,
        x,
        y,
        w,
        N,
        R,
        U,
        D = (0, l.c)(96),
        V = (0, r.gh)(g.GD),
        {
          root: $,
          branchRemotes: W,
          url: K,
          attachmentKey: Z,
          selectedRoot: Q,
          hostId: H,
          resolution: J,
          title: X,
          renderSlots: Y,
        } = e,
        ee = (0, r.Ul)(B.Np),
        et = (0, r.Ul)(v.lA)
      D[0] !== et || D[1] !== e ? ((t = (0, G.$)(e, et)), (D[0] = et), (D[1] = e), (D[2] = t)) : (t = D[2])
      let ea = t,
        en = null != $ && null == J
      D[3] !== ea || D[4] !== en
        ? ((a = { ...ea, staleTime: 0, enabled: en }), (D[3] = ea), (D[4] = en), (D[5] = a))
        : (a = D[5])
      let el = (0, b.I)(a),
        { publishedComments: er } = e,
        ei = e.patchFallback?.accountKey,
        es = er?.revisionId
      ;(D[6] !== Z || D[7] !== H || D[8] !== ei || D[9] !== es
        ? ((i = ["attached-pr-comments", H, Z, ei, es]), (D[6] = Z), (D[7] = H), (D[8] = ei), (D[9] = es), (D[10] = i))
        : (i = D[10]),
        D[11] !== er
          ? ((s = er
              ? (e) => {
                  let { signal: t } = e
                  return er.read(t)
                }
              : C.hT),
            (D[11] = er),
            (D[12] = s))
          : (s = D[12]))
      let eo = null != $ && null == J && null != er
      D[13] !== i || D[14] !== s || D[15] !== eo
        ? ((o = { queryKey: i, queryFn: s, enabled: eo, staleTime: P.D.THIRTY_SECONDS, gcTime: 0, retry: !1 }),
          (D[13] = i),
          (D[14] = s),
          (D[15] = eo),
          (D[16] = o))
        : (o = D[16])
      let { data: ed, isError: ec, refetch: eu } = (0, b.I)(o),
        { data: ef, isPending: em, isFetching: eh, refetch: ep } = el,
        eg = !J || null != J.retry
      D[17] !== er || D[18] !== ep || D[19] !== eu || D[20] !== J || D[21] !== V
        ? ((d = () => {
            let e = V.get(q.Y)
            ;(e && "kind" in e && V.get(E.Y, e.attachment).refetch?.({ cancelRefetch: !1 }),
              J ? J.retry?.() : (ep({ cancelRefetch: !1 }), er && eu({ cancelRefetch: !1 })))
          }),
          (D[17] = er),
          (D[18] = ep),
          (D[19] = eu),
          (D[20] = J),
          (D[21] = V),
          (D[22] = d))
        : (d = D[22])
      let ev = d
      if (null != J ? null == J.error : em) {
        let e
        ;(D[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(I.LoadingPage, {})), (D[23] = e))
          : (e = D[23]),
          (c = e))
      } else if (null == J && null != ef && null != $ && "local-thread" === V.value.routeKind) {
        let e,
          t,
          a = Z ?? X,
          l = ec ? void 0 : ed?.comments
        ;(D[24] !== ef.fileObjects || D[25] !== ef.generatedPaths || D[26] !== et || D[27] !== a || D[28] !== l
          ? ((e = {
              id: a,
              hostConfig: et,
              fileObjects: ef.fileObjects,
              readonlyComments: l,
              generatedPaths: ef.generatedPaths,
            }),
            (D[24] = ef.fileObjects),
            (D[25] = ef.generatedPaths),
            (D[26] = et),
            (D[27] = a),
            (D[28] = l),
            (D[29] = e))
          : (e = D[29]),
          D[30] !== ef.unifiedDiff || D[31] !== $ || D[32] !== V.value.conversationId || D[33] !== e
            ? ((t = (0, n.jsx)(S.t, {
                diffContent: ef.unifiedDiff,
                review: e,
                revisionRoot: $,
                conversationId: V.value.conversationId,
              })),
              (D[30] = ef.unifiedDiff),
              (D[31] = $),
              (D[32] = V.value.conversationId),
              (D[33] = e),
              (D[34] = t))
            : (t = D[34]),
          (c = t))
      } else if (null == J && el.error instanceof G.D && "diff-too-large" === el.error.reason.type) {
        let e
        ;(D[35] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(T, {})), (D[35] = e)) : (e = D[35]),
          (c = e))
      } else {
        let e, t, a, l, r, i, s
        ;(D[36] !== W || D[37] !== J?.error
          ? ((e =
              J?.error ??
              (W
                ? (0, n.jsx)(j.A, {
                    id: "codex.review.pullRequests.remoteBranchesUnavailable",
                    defaultMessage: "Git couldn\u2019t compare the current remote branches",
                  })
                : (0, n.jsx)(j.A, {
                    id: "codex.review.pullRequests.historicalCommitsUnavailable",
                    defaultMessage: "Git couldn\u2019t compare the recorded commits for this pull request",
                  }))),
            (D[36] = W),
            (D[37] = J?.error),
            (D[38] = e))
          : (e = D[38]),
          D[39] !== e
            ? ((t = (0, n.jsx)("p", { className: "text-sm text-secondary", children: e })), (D[39] = e), (D[40] = t))
            : (t = D[40]),
          D[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, n.jsx)(j.A, {
                id: "codex.review.pullRequests.loadErrorTitle",
                defaultMessage: "Couldn't load PR",
              })),
              (D[41] = a))
            : (a = D[41]),
          D[42] !== eg || D[43] !== eh || D[44] !== ev
            ? ((l =
                eg &&
                (0, n.jsx)(M.$, {
                  color: "secondary",
                  onClick: ev,
                  disabled: eh,
                  children: (0, n.jsx)(j.A, { id: "codex.review.pullRequests.retryLoad", defaultMessage: "Retry" }),
                })),
              (D[42] = eg),
              (D[43] = eh),
              (D[44] = ev),
              (D[45] = l))
            : (l = D[45]),
          D[46] !== H || D[47] !== K
            ? ((r =
                K &&
                (0, n.jsx)(k.G, {
                  href: K,
                  originHostId: H,
                  initiator: "pull_request_link",
                  openAsWebsite: !0,
                  children: (0, n.jsx)(j.A, {
                    id: "codex.review.openPullRequestProvider",
                    defaultMessage: "Open on provider",
                  }),
                })),
              (D[46] = H),
              (D[47] = K),
              (D[48] = r))
            : (r = D[48]),
          D[49] !== l || D[50] !== r
            ? ((i = (0, n.jsxs)(n.Fragment, { children: [l, r] })), (D[49] = l), (D[50] = r), (D[51] = i))
            : (i = D[51]),
          D[52] !== t || D[53] !== i
            ? ((s = (0, n.jsx)(A.X, { compact: !0, embedded: !0, description: t, title: a, actions: i })),
              (D[52] = t),
              (D[53] = i),
              (D[54] = s))
            : (s = D[54]),
          (c = s))
      }
      ;(D[55] !== ee || D[56] !== Q
        ? ((u = Q && !ee.some((e) => e.root === Q) ? [...ee, { root: Q, name: (0, _.Q0)(Q) }] : ee),
          (D[55] = ee),
          (D[56] = Q),
          (D[57] = u))
        : (u = D[57]),
        D[58] !== V ? ((f = (e) => (0, B.uC)(V, e, "branch")), (D[58] = V), (D[59] = f)) : (f = D[59]),
        D[60] !== V || D[61] !== Q
          ? ((m = (e) => (0, B.uC)(V, Q, e)), (D[60] = V), (D[61] = Q), (D[62] = m))
          : (m = D[62]),
        D[63] !== Q || D[64] !== u || D[65] !== f || D[66] !== m || D[67] !== X
          ? ((h = (0, n.jsx)(F.h, {
              isReviewExpanded: !0,
              reviewSource: "local",
              diffFilter: "branch",
              pullRequestLabel: X,
              repositories: u,
              selectedRepositoryRoot: Q,
              onSelectRepositorySource: f,
              onSelectDiffFilter: m,
              snapshotMetrics: null,
            })),
            (D[63] = Q),
            (D[64] = u),
            (D[65] = f),
            (D[66] = m),
            (D[67] = X),
            (D[68] = h))
          : (h = D[68]),
        D[69] !== ed?.isPartial || D[70] !== ec
          ? ((p =
              (ec || ed?.isPartial) &&
              (0, n.jsx)("span", {
                role: "status",
                children: (0, n.jsx)(j.A, {
                  id: "codex.review.pullRequests.commentsUnavailable",
                  defaultMessage: "Some review comments couldn\u2019t be loaded",
                }),
              })),
            (D[69] = ed?.isPartial),
            (D[70] = ec),
            (D[71] = p))
          : (p = D[71]),
        D[72] !== ef || D[73] !== el.isRefetchError
          ? ((x =
              el.isRefetchError &&
              ef &&
              (0, n.jsx)("span", {
                role: "status",
                children: (0, n.jsx)(j.A, {
                  id: "codex.review.cachedPrDiff",
                  defaultMessage: "Refresh failed \xb7 Showing previous diff",
                }),
              })),
            (D[72] = ef),
            (D[73] = el.isRefetchError),
            (D[74] = x))
          : (x = D[74]),
        D[75] !== H || D[76] !== V.value || D[77] !== X || D[78] !== K
          ? ((y =
              K &&
              (0, n.jsx)(z.H, {
                toolbar: !0,
                title: X,
                url: K,
                hostId: H,
                conversationId: "local-thread" === V.value.routeKind ? V.value.conversationId : void 0,
              })),
            (D[75] = H),
            (D[76] = V.value),
            (D[77] = X),
            (D[78] = K),
            (D[79] = y))
          : (y = D[79]))
      let ex = eh || !eg
      return (
        D[80] !== eh || D[81] !== ev || D[82] !== ex
          ? ((w = (0, n.jsx)(O.gH, { busy: eh, onClick: ev, disabled: ex })),
            (D[80] = eh),
            (D[81] = ev),
            (D[82] = ex),
            (D[83] = w))
          : (w = D[83]),
        D[84] !== p || D[85] !== x || D[86] !== y || D[87] !== w
          ? ((N = (0, n.jsxs)(n.Fragment, { children: [p, x, y, w] })),
            (D[84] = p),
            (D[85] = x),
            (D[86] = y),
            (D[87] = w),
            (D[88] = N))
          : (N = D[88]),
        D[89] !== h || D[90] !== N
          ? ((R = (0, n.jsx)(L.s, { sourceControls: h, actions: N })), (D[89] = h), (D[90] = N), (D[91] = R))
          : (R = D[91]),
        D[92] !== c || D[93] !== Y || D[94] !== R
          ? ((U = Y({
              headerRows: [{ id: "review-controls", divider: !0, height: "content", content: R }],
              content: c,
            })),
            (D[92] = c),
            (D[93] = Y),
            (D[94] = R),
            (D[95] = U))
          : (U = D[95]),
        U
      )
    }
    var $ = a("yXmW"),
      W = a("RNul"),
      K = a("i8Vs"),
      Z = a("xFGS"),
      Q = a("VQDm"),
      H = a("Mvc3"),
      J = a("OMIV"),
      X = a("r4mB")
    function Y(e) {
      let t,
        a,
        i,
        o,
        d,
        c,
        u,
        f = (0, l.c)(42),
        { request: m, entry: h, renderSlots: p } = e,
        g = void 0 === p ? $.E : p,
        v = (0, s.A)(),
        x = (0, r._U)(Q.Ip, m),
        { data: y, error: w, isFetching: b, refetch: C } = (0, r._U)(Q.pullRequestReviewSnapshotQuery$, m)
      ;(f[0] !== m ? ((t = (0, K.gS)(m)), (f[0] = m), (f[1] = t)) : (t = f[1]),
        f[2] !== h.title || f[3] !== m.account.hostId || f[4] !== t
          ? ((a = (0, n.jsx)(z.H, { toolbar: !0, url: t, hostId: m.account.hostId, title: h.title })),
            (f[2] = h.title),
            (f[3] = m.account.hostId),
            (f[4] = t),
            (f[5] = a))
          : (a = f[5]))
      let k = a
      f[6] !== h || f[7] !== m
        ? ((i = (0, n.jsx)(ee, { request: m, entry: h })), (f[6] = h), (f[7] = m), (f[8] = i))
        : (i = f[8])
      let S = i
      if (y?.status !== "success" || "available" !== x) {
        let e, t, a
        f[9] !== x || f[10] !== y || f[11] !== w?.message || f[12] !== v || f[13] !== b || f[14] !== C
          ? ((e =
              b || "loading" === x
                ? (0, n.jsx)("div", {
                    className: "flex h-full items-center justify-center",
                    role: "status",
                    children: (0, n.jsx)(W.y, {}),
                  })
                : (0, n.jsx)(R.A, {
                    className: "h-full",
                    title: v.formatMessage({
                      id: "pullRequestDetail.code.unavailable",
                      defaultMessage: "Changes unavailable",
                    }),
                    description: (0, H.h)(v, x) ?? (y?.status === "error" ? y.error : w?.message),
                    actions:
                      "available" === x
                        ? (0, n.jsx)(M.$, {
                            color: "secondary",
                            onClick: () => void C(),
                            children: (0, n.jsx)(j.A, {
                              id: "pullRequestDetail.code.retry",
                              defaultMessage: "Try again",
                            }),
                          })
                        : void 0,
                  })),
            (f[9] = x),
            (f[10] = y),
            (f[11] = w?.message),
            (f[12] = v),
            (f[13] = b),
            (f[14] = C),
            (f[15] = e))
          : (e = f[15])
        let l = e
        return (
          f[16] !== k || f[17] !== S
            ? ((t = (0, n.jsx)(L.s, { sourceControls: S, actions: k })), (f[16] = k), (f[17] = S), (f[18] = t))
            : (t = f[18]),
          f[19] !== l || f[20] !== g || f[21] !== t
            ? ((a = g({
                headerRows: [{ id: "review-pull-request-toolbar", height: "content", content: t }],
                content: l,
              })),
              (f[19] = l),
              (f[20] = g),
              (f[21] = t),
              (f[22] = a))
            : (a = f[22]),
          a
        )
      }
      let { snapshot: A } = y,
        I = `${A.mergeBaseRevision}:${A.headRevision}`
      return (
        f[23] !== A.headRevision || f[24] !== A.mergeBaseRevision
          ? ((o = { baseRevision: A.mergeBaseRevision, headRevision: A.headRevision }),
            (f[23] = A.headRevision),
            (f[24] = A.mergeBaseRevision),
            (f[25] = o))
          : (o = f[25]),
        f[26] !== m || f[27] !== o
          ? ((d = { ...m, comparison: o }), (f[26] = m), (f[27] = o), (f[28] = d))
          : (d = f[28]),
        f[29] !== C ? ((c = () => void C()), (f[29] = C), (f[30] = c)) : (c = f[30]),
        f[31] !== h.baseBranch ||
        f[32] !== h.headBranch ||
        f[33] !== b ||
        f[34] !== k ||
        f[35] !== g ||
        f[36] !== A.headRevision ||
        f[37] !== S ||
        f[38] !== I ||
        f[39] !== d ||
        f[40] !== c
          ? ((u = (0, n.jsx)(
              Z.C,
              {
                request: d,
                baseBranch: h.baseBranch,
                headBranch: h.headBranch,
                headRevision: A.headRevision,
                sourceControl: S,
                providerLink: k,
                renderSlots: g,
                onRefresh: c,
                isRefreshing: b,
              },
              I,
            )),
            (f[31] = h.baseBranch),
            (f[32] = h.headBranch),
            (f[33] = b),
            (f[34] = k),
            (f[35] = g),
            (f[36] = A.headRevision),
            (f[37] = S),
            (f[38] = I),
            (f[39] = d),
            (f[40] = c),
            (f[41] = u))
          : (u = f[41]),
        u
      )
    }
    function ee(e) {
      let t,
        a,
        i = (0, l.c)(8),
        { request: s, entry: o } = e,
        d = (0, r.gh)(g.GD),
        c = (0, r.Ul)(y.kZ),
        u = (0, r._U)(J.JW, "1689820618"),
        f = (0, r._U)(w.iA, s)
      return (
        i[0] !== d ? ((t = (e) => (0, y.Om)(d, e)), (i[0] = d), (i[1] = t)) : (t = i[1]),
        i[2] !== c || i[3] !== o.title || i[4] !== u || i[5] !== f || i[6] !== t
          ? ((a = (0, n.jsx)(X.D1, {
              source: "local",
              diffFilter: c,
              gitReviewDisabled: !1,
              onSelectDiffFilter: t,
              reviewV2Enabled: u,
              snapshotMetrics: f,
              pullRequestLabel: o.title,
            })),
            (i[2] = c),
            (i[3] = o.title),
            (i[4] = u),
            (i[5] = f),
            (i[6] = t),
            (i[7] = a))
          : (a = i[7]),
        a
      )
    }
    var et = a("IDNd"),
      ea = a("eLzw"),
      en = a("EXsI"),
      el = a("DJRx"),
      er = a("KRYX"),
      ei = a("KDSd")
    function es(e) {
      let t,
        a,
        r,
        i,
        s,
        o,
        d = (0, l.c)(19),
        {
          hasLastTurnDiff: c,
          className: u,
          actions: f,
          emptyTitlePaint: m,
          showGitRepoEmptyState: h,
          gitRepoActions: p,
          gitRepoErrorMessage: g,
        } = e,
        v = void 0 !== h && h
      return (
        d[0] !== u ? ((t = (0, N.A)("h-full", u)), (d[0] = u), (d[1] = t)) : (t = d[1]),
        d[2] === Symbol.for("react.memo_cache_sentinel") ? ((a = (0, n.jsx)(D, {})), (d[2] = a)) : (a = d[2]),
        d[3] !== m || d[4] !== v
          ? ((r = v
              ? (0, n.jsx)(j.A, {
                  id: "codex.review.noDiff.gitRepoRequired.title",
                  defaultMessage: "Create a Git repository",
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [(0, n.jsx)(j.A, { id: "codex.review.noDiff", defaultMessage: "No file changes yet" }), m],
                })),
            (d[3] = m),
            (d[4] = v),
            (d[5] = r))
          : (r = d[5]),
        d[6] !== c || d[7] !== v
          ? ((i = (0, n.jsx)(eo, { hasLastTurnDiff: c, showGitRepoEmptyState: v })), (d[6] = c), (d[7] = v), (d[8] = i))
          : (i = d[8]),
        d[9] !== f || d[10] !== p || d[11] !== g || d[12] !== v
          ? ((s = v ? (0, n.jsx)(ed, { actions: p, errorMessage: g }) : f),
            (d[9] = f),
            (d[10] = p),
            (d[11] = g),
            (d[12] = v),
            (d[13] = s))
          : (s = d[13]),
        d[14] !== t || d[15] !== r || d[16] !== i || d[17] !== s
          ? ((o = (0, n.jsx)(R.A, { className: t, illustration: a, title: r, description: i, actions: s })),
            (d[14] = t),
            (d[15] = r),
            (d[16] = i),
            (d[17] = s),
            (d[18] = o))
          : (o = d[18]),
        o
      )
    }
    function eo(e) {
      let t,
        a = (0, l.c)(6),
        { hasLastTurnDiff: i, showGitRepoEmptyState: s } = e,
        o = (0, r.Ul)(y.kZ)
      if (s) {
        let e
        return (
          a[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(j.A, {
                id: "codex.review.noDiff.gitRepoRequired.description",
                defaultMessage: "Track, review, and undo changes in this project.",
              })),
              (a[0] = e))
            : (e = a[0]),
          e
        )
      }
      let d = "last-turn" === o,
        c = (0, y.cd)(o) ? "uncommitted" : "branch"
      if (!i && d) {
        let e
        return (
          a[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(j.A, {
                id: "codex.review.noDiff.orNoLongerAvailable",
                defaultMessage: "The latest diffs are no longer available.",
              })),
              (a[1] = e))
            : (e = a[1]),
          e
        )
      }
      if (!i || !d) {
        let e
        return (
          a[2] !== d
            ? ((e = d
                ? null
                : (0, n.jsx)(j.A, {
                    id: "codex.review.noDiff.baseDescription",
                    defaultMessage: "Changes in this project will appear here.",
                  })),
              (a[2] = d),
              (a[3] = e))
            : (e = a[3]),
          e
        )
      }
      if ("uncommitted" === c) {
        let e
        return (
          a[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(j.A, {
                id: "codex.review.noDiff.revertedOrCommitted",
                defaultMessage: "The last turn was committed or reverted.",
              })),
              (a[4] = e))
            : (e = a[4]),
          e
        )
      }
      return (
        a[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(j.A, {
              id: "codex.review.noDiff.reverted",
              defaultMessage: "The last turn was reverted.",
            })),
            (a[5] = t))
          : (t = a[5]),
        t
      )
    }
    function ed(e) {
      let t,
        a,
        r = (0, l.c)(5),
        { actions: i, errorMessage: s } = e
      return null == i && null == s
        ? null
        : (r[0] !== s
            ? ((t =
                null != s
                  ? (0, n.jsx)("div", {
                      className: "text-sm break-words text-danger",
                      children: (0, n.jsx)(j.A, {
                        id: "codex.review.noDiff.gitInit.error",
                        defaultMessage: "Git init failed: {message}",
                        values: { message: s },
                      }),
                    })
                  : null),
              (r[0] = s),
              (r[1] = t))
            : (t = r[1]),
          r[2] !== i || r[3] !== t
            ? ((a = (0, n.jsxs)("div", { className: "flex flex-col items-center gap-2", children: [t, i] })),
              (r[2] = i),
              (r[3] = t),
              (r[4] = a))
            : (a = r[4]),
          a)
    }
    function ec(e) {
      let t,
        a,
        s,
        o,
        d = (0, l.c)(21),
        { actions: c, className: u, emptyTitlePaint: f } = e,
        m = (0, r.gh)(g.GD),
        h = (0, r.Ul)(v.Rq),
        p = (0, r.Ul)(v.lA),
        x = "chatgpt-thread" === m.value.routeKind,
        y = (0, r.Ul)(en.a),
        w = (0, r.Ul)(y ? null : B.oq),
        b = (0, r.Ul)(er.Ug),
        [C, k] = (0, i.useState)(null)
      ;(d[0] !== h
        ? ((t = (e) => {
            null != h && k({ cwd: h, message: e })
          }),
          (d[0] = h),
          (d[1] = t))
        : (t = d[1]),
        d[2] !== h || d[3] !== p || d[4] !== t
          ? ((a = { cwd: h, hostConfig: p, onErrorMessage: t }), (d[2] = h), (d[3] = p), (d[4] = t), (d[5] = a))
          : (a = d[5]))
      let { canCreateGitRepository: S, createGitRepository: A, isCreatingGitRepository: I } = (0, ei.c)(a),
        _ = null != h && C?.cwd === h ? C.message : null,
        P = w?.diffText != null
      return (
        d[6] !== S || d[7] !== A || d[8] !== h || d[9] !== I || d[10] !== x || d[11] !== b
          ? ((s =
              b && S && null != h && !x
                ? (0, n.jsx)(M.$, {
                    color: "secondary",
                    size: "toolbar",
                    disabled: I,
                    onClick: () => {
                      ;(k(null), A())
                    },
                    children: I
                      ? (0, n.jsx)(j.A, {
                          id: "codex.review.noDiff.gitInit.creating",
                          defaultMessage: "Creating\u2026",
                        })
                      : (0, n.jsx)(j.A, {
                          id: "codex.review.noDiff.gitInit.createRepository",
                          defaultMessage: "Create git repository",
                        }),
                  })
                : null),
            (d[6] = S),
            (d[7] = A),
            (d[8] = h),
            (d[9] = I),
            (d[10] = x),
            (d[11] = b),
            (d[12] = s))
          : (s = d[12]),
        d[13] !== c || d[14] !== u || d[15] !== f || d[16] !== _ || d[17] !== P || d[18] !== b || d[19] !== s
          ? ((o = (0, n.jsx)(es, {
              className: u,
              actions: c,
              emptyTitlePaint: f,
              hasLastTurnDiff: P,
              showGitRepoEmptyState: b,
              gitRepoErrorMessage: _,
              gitRepoActions: s,
            })),
            (d[13] = c),
            (d[14] = u),
            (d[15] = f),
            (d[16] = _),
            (d[17] = P),
            (d[18] = b),
            (d[19] = s),
            (d[20] = o))
          : (o = d[20]),
        o
      )
    }
    function eu(e) {
      let t,
        a,
        r,
        i,
        s = (0, l.c)(10),
        { actions: o, className: d, stageFilter: c } = e,
        u = "staged" === c
      return (
        s[0] !== d ? ((t = (0, N.A)("h-full", d)), (s[0] = d), (s[1] = t)) : (t = s[1]),
        s[2] !== u
          ? ((a = u
              ? (0, n.jsx)(j.A, {
                  id: "codex.review.stageFilter.empty.staged.title",
                  defaultMessage: "No staged changes",
                })
              : (0, n.jsx)(j.A, {
                  id: "codex.review.stageFilter.empty.unstaged.title",
                  defaultMessage: "No unstaged changes",
                })),
            (r = u
              ? (0, n.jsx)(j.A, {
                  id: "codex.review.stageFilter.empty.staged.description",
                  defaultMessage: "Accept edits to stage them",
                })
              : (0, n.jsx)(j.A, {
                  id: "codex.review.stageFilter.empty.unstaged.description",
                  defaultMessage: "Code changes will appear here",
                })),
            (s[2] = u),
            (s[3] = a),
            (s[4] = r))
          : ((a = s[3]), (r = s[4])),
        s[5] !== o || s[6] !== t || s[7] !== a || s[8] !== r
          ? ((i = (0, n.jsx)(R.A, { className: t, title: a, description: r, actions: o })),
            (s[5] = o),
            (s[6] = t),
            (s[7] = a),
            (s[8] = r),
            (s[9] = i))
          : (i = s[9]),
        i
      )
    }
    var ef = a("QcW8"),
      em = a("gbrq"),
      eh = a("eiFJ"),
      ep = a.n(eh),
      eg = a("ekLq"),
      ev = a("sdjx"),
      ex = a("vzYW"),
      ey = a("bemt"),
      ew = a("lLEA"),
      eb = a("iTJ4"),
      eC = a("NVoJ"),
      ej = a("yWTM"),
      eM = a("slpy"),
      ek = a("DBCl"),
      eS = a("AaT4"),
      eA = a("bVeK"),
      eI = a("SN64"),
      e_ = a("g3QY"),
      eP = a("JiBc"),
      eN = a("XBPR"),
      eR = a("aqTO"),
      eU = a("rEHt"),
      eD = a("bIvi"),
      eT = a("Qgfj"),
      eL = a("nzx4"),
      eF = a("Fmrr"),
      eO = a("GaA7"),
      eB = a("V3rO"),
      eE = a("XXJV"),
      eG = a("Yc0o"),
      eq = a("lCie"),
      ez = a("iQgv"),
      eV = a("UaWr")
    function e$(e, t) {
      if (null == t) return e
      let a = (0, eB.f3)(e, t.clientThreadId)
      return (0, g.YP)(a, t.routeKey)
    }
    var eW = a("YgOT"),
      eK = a("FTvu")
    function eZ(e, t, a) {
      if ("change-deletion" === e.dataset.lineType || null != e.closest("[data-deletions]")) return "previous"
      if (!t) return "snapshot"
      if (void 0 === a) return "loading"
      let n = Number.parseInt(e.dataset.line ?? "", 10) - 1,
        l = a?.[n]
      return null != l && l.replace(/\r?\n$/, "") === (e.textContent ?? "").replace(/\r?\n$/, "") ? null : "stale"
    }
    var eQ = a("Ov3g"),
      eH = a("aeqi")
    let eJ = (0, r.vU)(g.GD, (e) => ({
      queryKey: ["review-language-current-document", e],
      queryFn: async () => {
        let [t] = await (0, ez.V)("git").request({
          method: "cat-file",
          params: {
            cwd: e.cwd,
            hostConfig: e.hostConfig,
            operationSource: "thread_diff",
            maxObjectBytes: eF.YG,
            requests: [{ path: e.gitPath, oid: null, fallbackToDisk: !0 }],
          },
        })
        return t?.type === "success" ? t.lines : null
      },
      staleTime: 5e3,
      retry: !1,
    }))
    function eX(e) {
      let t,
        a,
        i,
        s,
        o,
        d,
        c = (0, l.c)(19),
        u = (0, r.gh)(g.GD)
      if (
        !(0, r._U)(eH.N, e.hostConfig.id).data?.includes((0, eq.c)(e.path)) ||
        eO.appServices?.lsp == null ||
        null == e.cwd
      ) {
        let t
        return (c[0] !== e.children ? ((t = e.children(void 0)), (c[0] = e.children), (c[1] = t)) : (t = c[1]), t)
      }
      let f = u.value.clientThreadId
      ;(c[2] !== u.value ? ((t = (0, g.n1)(u.value)), (c[2] = u.value), (c[3] = t)) : (t = c[3]),
        c[4] !== u.value ? ((a = (0, g.hf)(u.value)), (c[4] = u.value), (c[5] = a)) : (a = c[5]),
        c[6] !== u.value.clientThreadId || c[7] !== t || c[8] !== a
          ? ((i = { clientThreadId: f, conversationId: t, routeKey: a }),
            (c[6] = u.value.clientThreadId),
            (c[7] = t),
            (c[8] = a),
            (c[9] = i))
          : (i = c[9]))
      let m = i
      return (
        c[10] !== e || c[11] !== m
          ? ((s = (t) => (0, n.jsx)(eY, { owner: m, children: e.children(t) })), (c[10] = e), (c[11] = m), (c[12] = s))
          : (s = c[12]),
        c[13] !== e || c[14] !== s
          ? ((o = (0, n.jsx)(e1, { ...e, cwd: e.cwd, children: s })), (c[13] = e), (c[14] = s), (c[15] = o))
          : (o = c[15]),
        c[16] !== e.interactionOwner || c[17] !== o
          ? ((d = (0, n.jsx)(eY, { owner: e.interactionOwner, children: o })),
            (c[16] = e.interactionOwner),
            (c[17] = o),
            (c[18] = d))
          : (d = c[18]),
        d
      )
    }
    function eY(e) {
      let t,
        a,
        i,
        s,
        o,
        d,
        c,
        u,
        f,
        m = (0, l.c)(19),
        { owner: h, children: p } = e,
        v = (0, r.gh)(g.GD)
      if (null == h || (h.clientThreadId === v.value.clientThreadId && h.routeKey === (0, g.hf)(v.value))) return p
      if (m[0] !== h || m[1] !== v) {
        c = Symbol.for("react.early_return_sentinel")
        e: {
          let e = e$(v, h)
          if (null == e) {
            c = null
            break e
          }
          ;((a = r.Ui), (o = eB.l7), (d = e.getOwnValue(eB.l7)), (t = r.Ui), (i = g.GD), (s = e.getOwnValue(g.GD)))
        }
        ;((m[0] = h), (m[1] = v), (m[2] = t), (m[3] = a), (m[4] = i), (m[5] = s), (m[6] = o), (m[7] = d), (m[8] = c))
      } else ((t = m[2]), (a = m[3]), (i = m[4]), (s = m[5]), (o = m[6]), (d = m[7]), (c = m[8]))
      return c !== Symbol.for("react.early_return_sentinel")
        ? c
        : (m[9] !== t || m[10] !== p || m[11] !== i || m[12] !== s
            ? ((u = (0, n.jsx)(t, { scope: i, value: s, children: p })),
              (m[9] = t),
              (m[10] = p),
              (m[11] = i),
              (m[12] = s),
              (m[13] = u))
            : (u = m[13]),
          m[14] !== a || m[15] !== o || m[16] !== d || m[17] !== u
            ? ((f = (0, n.jsx)(a, { scope: o, value: d, children: u })),
              (m[14] = a),
              (m[15] = o),
              (m[16] = d),
              (m[17] = u),
              (m[18] = f))
            : (f = m[18]),
          f)
    }
    function e1(e) {
      let t,
        a,
        s,
        o,
        d,
        c,
        u,
        f,
        m,
        h,
        p,
        v,
        x,
        y,
        w,
        b,
        C,
        j,
        M,
        k = (0, l.c)(64),
        {
          children: S,
          cwd: A,
          diffFilter: I,
          hostConfig: P,
          gitPath: N,
          isDeleted: R,
          open: U,
          path: D,
          snapshotGeneration: T,
          workspaceRoot: L,
        } = e,
        F = (0, r.gh)(g.GD),
        O = (0, i.useRef)(null),
        [B, E] = (0, i.useState)(!1),
        [G, q] = (0, i.useState)(null),
        z = (0, i.useRef)(null),
        V = !R && ("branch" === I || "unstaged" === I || "uncommitted" === I)
      ;(k[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => {
            let e = O.current
            if (null == e) return
            let t = new IntersectionObserver(
              (e) => {
                E(e.some(e3))
              },
              { rootMargin: "300px 0px" },
            )
            return (t.observe(e), () => t.disconnect())
          }),
          (a = []),
          (k[0] = t),
          (k[1] = a))
        : ((t = k[0]), (a = k[1])),
        (0, i.useEffect)(t, a),
        k[2] !== A || k[3] !== N || k[4] !== P || k[5] !== D || k[6] !== T
          ? ((s = { cwd: A, hostConfig: P, gitPath: N, path: D, snapshotGeneration: T }),
            (k[2] = A),
            (k[3] = N),
            (k[4] = P),
            (k[5] = D),
            (k[6] = T),
            (k[7] = s))
          : (s = k[7]))
      let $ = B && U && V
      k[8] !== $ ? ((o = { enabled: $ }), (k[8] = $), (k[9] = o)) : (o = k[9])
      let { data: W, isError: K } = (0, r._U)(eJ, s, o),
        Z = K ? null : W
      k[10] !== Z ? ((d = Z?.join("") ?? ""), (k[10] = Z), (k[11] = d)) : (d = k[11])
      let Q = P.id
      ;(k[12] !== D ? ((c = (0, eq.c)(D)), (k[12] = D), (k[13] = c)) : (c = k[13]),
        k[14] !== A || k[15] !== D ? ((u = (0, _.b0)(A, D)), (k[14] = A), (k[15] = D), (k[16] = u)) : (u = k[16]),
        k[17] !== P.id || k[18] !== d || k[19] !== c || k[20] !== u || k[21] !== L
          ? ((f = { contents: d, hostId: Q, languageId: c, path: u, workspaceRoot: L }),
            (k[17] = P.id),
            (k[18] = d),
            (k[19] = c),
            (k[20] = u),
            (k[21] = L),
            (k[22] = f))
          : (f = k[22]))
      let H = f,
        J = (0, r._U)(eE.My, eG.m.DIFF) ?? void 0
      k[23] !== V || k[24] !== G || k[25] !== Z || k[26] !== U || k[27] !== B
        ? ((m = U && B && G?.isConnected ? eZ(G, V, Z) : null),
          (k[23] = V),
          (k[24] = G),
          (k[25] = Z),
          (k[26] = U),
          (k[27] = B),
          (k[28] = m))
        : (m = k[28])
      let X = m
      k[29] !== V || k[30] !== Z || k[31] !== U || k[32] !== B
        ? ((h = function (e) {
            let t = e.nativeEvent.composedPath().find(e2)
            q(U && B && "touch" !== e.pointerType && 0 === e.buttons && null != t && null != eZ(t, V, Z) ? t : null)
          }),
          (k[29] = V),
          (k[30] = Z),
          (k[31] = U),
          (k[32] = B),
          (k[33] = h))
        : (h = k[33])
      let Y = h
      k[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = () => q(null)), (v = () => q(null)), (x = () => q(null)), (k[34] = p), (k[35] = v), (k[36] = x))
        : ((p = k[34]), (v = k[35]), (x = k[36]))
      let ee = U && B && V && null != Z
      return (
        k[37] !== V || k[38] !== Z
          ? ((y = (e, t) => (null == eZ(t, V, Z) ? (0, eK.G9)(e, t) : null)), (k[37] = V), (k[38] = Z), (k[39] = y))
          : (y = k[39]),
        k[40] !== A || k[41] !== P.id || k[42] !== J || k[43] !== F || k[44] !== L
          ? ((w = (e) =>
              (0, eV.openReviewFileSourceTab)(F, e.path, {
                column: e.range.start.character + 1,
                cwd: A,
                focusLine: !0,
                hostId: P.id,
                line: e.range.start.line + 1,
                resetTabState: !0,
                target: J,
                workspaceRoot: L,
              })),
            (k[40] = A),
            (k[41] = P.id),
            (k[42] = J),
            (k[43] = F),
            (k[44] = L),
            (k[45] = w))
          : (w = k[45]),
        k[46] !== S || k[47] !== V || k[48] !== Z
          ? ((b = (e) =>
              S({
                ...e,
                fileOptions: {
                  ...e.fileOptions,
                  onTokenClick: (e, t) => {
                    if (t.metaKey || t.ctrlKey) {
                      let a = e.tokenElement.closest("[data-line]")
                      if (null != a && null != eZ(a, V, Z)) return void t.preventDefault()
                    }
                  },
                },
                onContextMenu: (t) => {
                  let a = t.nativeEvent.composedPath().find(e0)
                  ;((z.current = null == a ? null : eZ(a, V, Z)), e.onContextMenu(t))
                },
                getContextMenuItems: async () =>
                  null == z.current ? e.getContextMenuItems() : (0, eW.S)(e7[z.current]),
              })),
            (k[46] = S),
            (k[47] = V),
            (k[48] = Z),
            (k[49] = b))
          : (b = k[49]),
        k[50] !== H || k[51] !== J || k[52] !== ee || k[53] !== y || k[54] !== w || k[55] !== b
          ? ((C = (0, n.jsx)(eQ.k, {
              isActive: ee,
              languageFile: H,
              panelId: J,
              getTarget: y,
              onOpenLocation: w,
              children: b,
            })),
            (k[50] = H),
            (k[51] = J),
            (k[52] = ee),
            (k[53] = y),
            (k[54] = w),
            (k[55] = b),
            (k[56] = C))
          : (C = k[56]),
        k[57] !== X || k[58] !== G
          ? ((j = null != G && null != X ? (0, n.jsx)(e5, { line: G, reason: X, onClose: () => q(null) }) : null),
            (k[57] = X),
            (k[58] = G),
            (k[59] = j))
          : (j = k[59]),
        k[60] !== Y || k[61] !== C || k[62] !== j
          ? ((M = (0, n.jsxs)("div", {
              ref: O,
              className: "min-w-0",
              onPointerOver: Y,
              onPointerMove: Y,
              onPointerLeave: p,
              onPointerDown: v,
              onContextMenu: x,
              children: [C, j],
            })),
            (k[60] = Y),
            (k[61] = C),
            (k[62] = j),
            (k[63] = M))
          : (M = k[63]),
        M
      )
    }
    function e0(e) {
      return e instanceof HTMLElement && null != e.dataset.line
    }
    function e2(e) {
      return e instanceof HTMLElement && null != e.dataset.line
    }
    function e3(e) {
      return e.isIntersecting
    }
    function e5(e) {
      let t,
        a,
        r,
        s = (0, l.c)(10),
        { line: o, reason: d, onClose: c } = e,
        [u, f] = (0, i.useState)(null),
        m = (0, i.useEffectEvent)(c)
      return (
        s[0] !== m || s[1] !== o
          ? ((t = () => {
              let e = setTimeout(() => {
                  o.isConnected && f(o)
                }, 400),
                t = () => m(),
                a = new MutationObserver(() => {
                  o.isConnected || m()
                })
              return (
                a.observe(o.getRootNode(), { childList: !0, subtree: !0 }),
                a.observe(o.ownerDocument, { childList: !0, subtree: !0 }),
                o.addEventListener("pointerleave", t),
                window.addEventListener("scroll", t, !0),
                () => {
                  ;(clearTimeout(e),
                    a.disconnect(),
                    o.removeEventListener("pointerleave", t),
                    window.removeEventListener("scroll", t, !0))
                }
              )
            }),
            (s[0] = m),
            (s[1] = o),
            (s[2] = t))
          : (t = s[2]),
        s[3] !== o ? ((a = [o]), (s[3] = o), (s[4] = a)) : (a = s[4]),
        (0, i.useEffect)(t, a),
        s[5] !== o || s[6] !== c || s[7] !== d || s[8] !== u
          ? ((r =
              u === o
                ? (0, n.jsxs)(eL.AM, {
                    open: !0,
                    onOpenChange: c,
                    children: [
                      (0, n.jsx)(eL.dT, { virtualRef: { current: o } }),
                      (0, n.jsx)(eL.hl, {
                        side: "top",
                        size: "content",
                        sideOffset: 4,
                        disablePadding: !0,
                        role: "tooltip",
                        className: "pointer-events-none px-2 py-1 text-xs",
                        onOpenAutoFocus: e6,
                        onCloseAutoFocus: e4,
                        children: (0, n.jsx)("span", {
                          className: "max-w-80",
                          children: (0, n.jsx)(j.A, { ...e7[d] }),
                        }),
                      }),
                    ],
                  })
                : null),
            (s[5] = o),
            (s[6] = c),
            (s[7] = d),
            (s[8] = u),
            (s[9] = r))
          : (r = s[9]),
        r
      )
    }
    function e4(e) {
      return e.preventDefault()
    }
    function e6(e) {
      return e.preventDefault()
    }
    let e7 = (0, eT.YK)({
      previous: {
        id: "review.fileLanguage.unavailable.previous",
        defaultMessage: "Code navigation isn\u2019t available for deleted or previous-version lines",
      },
      snapshot: {
        id: "review.fileLanguage.unavailable.snapshot",
        defaultMessage: "Code navigation isn\u2019t available for this snapshot",
      },
      loading: { id: "review.fileLanguage.unavailable.loading", defaultMessage: "Loading the current file\u2026" },
      stale: {
        id: "review.fileLanguage.unavailable.stale",
        defaultMessage: "Refresh the diff to enable code navigation",
      },
    })
    var e9 = a("fOzV"),
      e8 = a("lm8x"),
      te = a("QpPI"),
      tt = a("V7Ds"),
      ta = a("tSvo"),
      tn = a("iRMi"),
      tl = a("svjy"),
      tr = a("yGJW")
    function ti(e) {
      return e.replace(/\r?\n$/, "")
    }
    function ts(e) {
      let t = e.metadata.prevName ?? e.metadata.name,
        a = e.oldPath ?? e.metadata.prevName ?? e.metadata.name,
        n = e.newPath ?? e.metadata.name,
        l = [`diff --git a/${t} b/${e.metadata.name}`],
        r = e.metadata.prevObjectId,
        i = e.metadata.newObjectId
      if (a === e_.pP) {
        let t = e.metadata.mode ?? "100644"
        l.push(`new file mode ${t}`)
      } else if (n === e_.pP) {
        let t = e.metadata.prevMode ?? e.metadata.mode ?? "100644"
        l.push(`deleted file mode ${t}`)
      }
      return (
        null != r && null != i && l.push(`index ${r}..${i}`),
        l.push(`--- ${a === e_.pP ? "/dev/null" : `a/${a}`}`, `+++ ${n === e_.pP ? "/dev/null" : `b/${n}`}`),
        l
      )
    }
    function to(e, t) {
      if (!t) return e
      let a = e
          .find((e) => e.startsWith("--- "))
          ?.slice(4)
          .split("	")[0],
        n = e
          .find((e) => e.startsWith("+++ "))
          ?.slice(4)
          .split("	")[0]
      if (null == a || null == n || a === e_.pP || n === e_.pP) return e
      let l = n.replace(/^("?)b\//, "$1a/")
      return a === l
        ? e
        : e.map((e) => (e.startsWith("diff --git ") ? `diff --git ${l} ${n}` : e.startsWith("--- ") ? `--- ${l}` : e))
    }
    function td(e, t) {
      let a = [
        ti(
          t.hunkSpecs ??
            `@@ -${t.deletionStart ?? 0},${t.deletionCount ?? 0} +${t.additionStart ?? 0},${t.additionCount ?? 0} @@`,
        ),
      ]
      for (let n of t.hunkContent) {
        if ("context" === n.type) {
          let t = e.metadata.additionLines.slice(n.additionLineIndex, n.additionLineIndex + n.lines)
          a.push(...t.map((e) => ` ${ti(e)}`))
          continue
        }
        let t = e.metadata.deletionLines.slice(n.deletionLineIndex, n.deletionLineIndex + n.deletions),
          l = e.metadata.additionLines.slice(n.additionLineIndex, n.additionLineIndex + n.additions)
        a.push(...t.map((e) => `-${ti(e)}`), ...l.map((e) => `+${ti(e)}`))
      }
      return a
    }
    function tc(e) {
      let t = Array.from(e.matchAll(/^diff --git .*$/gm))
      return 0 === t.length
        ? 0 === e.trim().length
          ? []
          : [e]
        : t.map((a, n) => {
            let l = a.index ?? 0,
              r = n + 1 < t.length ? (t[n + 1]?.index ?? e.length) : e.length
            return e.slice(l, r)
          })
    }
    function tu(e, t) {
      let a = e.indexOf("\n@@ ")
      if (-1 === a || !e.startsWith("diff --git a/")) return !0
      let n = e.lastIndexOf("\n", a - 1),
        l = e.slice(n + 1, a)
      return !!(!l.startsWith("+++ b/") || l.includes("	")) || l.slice(6).trim() === t
    }
    function tf(e, t, a, n) {
      var l, r, i, s
      let d, c
      if ("delete" === a.action) {
        let n = e.get(tl.g),
          l = e.get(o.Id)
        "success" === t
          ? l.success(
              n.formatMessage(
                {
                  id: "codex.review.deleteFile.success",
                  defaultMessage: "Deleted {path}",
                  description: "Toast shown after an untracked file is deleted from the working directory",
                },
                { path: a.path },
              ),
            )
          : l.danger(
              n.formatMessage(
                {
                  id: "codex.review.deleteFile.error",
                  defaultMessage: "Could not delete {path}",
                  description: "Toast shown when an untracked file cannot be deleted from the working directory",
                },
                { path: a.path },
              ),
              { errorAnalytics: { toastId: "codex.review.deleteFile.error" } },
            )
        return
      }
      "revert" === a.action
        ? (function (e, t, a, n) {
            let l = e.get(tl.g),
              r = e.get(o.Id)
            if ("error" === t && "not-git-repo" === n)
              return r.danger(
                l.formatMessage({
                  id: "codex.review.revert.notGitRepo",
                  defaultMessage: "Revert requires a Git repository",
                  description: "Toast shown when revert patch action is attempted outside a Git repository",
                }),
                { errorAnalytics: { toastId: "codex.review.revert.notGitRepo" } },
              )
            let i = (a.hunkIndex ?? 0) + 1
            "success" === t
              ? "section" === a.scope
                ? r.success(
                    l.formatMessage({
                      id: "codex.review.revert.section.success",
                      defaultMessage: "Section reverted",
                      description: "Toast shown when section revert succeeds",
                    }),
                  )
                : "file" === a.scope
                  ? r.success(
                      l.formatMessage(
                        {
                          id: "codex.review.revert.file.success",
                          defaultMessage: "Reverted {path}",
                          description: "Toast shown when file revert succeeds",
                        },
                        { path: a.path },
                      ),
                    )
                  : r.success(
                      l.formatMessage(
                        {
                          id: "codex.review.revert.hunk.success",
                          defaultMessage: "Reverted hunk {hunkNumber} in {path}",
                          description: "Toast shown when hunk revert succeeds",
                        },
                        { hunkNumber: i, path: a.path },
                      ),
                    )
              : "error" === t
                ? "section" === a.scope
                  ? r.danger(
                      l.formatMessage({
                        id: "codex.review.revert.section.error",
                        defaultMessage: "Failed to revert section",
                        description: "Toast shown when section revert fails",
                      }),
                      { errorAnalytics: { toastId: "codex.review.revert.section.error" } },
                    )
                  : "file" === a.scope
                    ? r.danger(
                        l.formatMessage(
                          {
                            id: "codex.review.revert.file.error",
                            defaultMessage: "Failed to revert {path}",
                            description: "Toast shown when file revert fails",
                          },
                          { path: a.path },
                        ),
                        { errorAnalytics: { toastId: "codex.review.revert.file.error" } },
                      )
                    : r.danger(
                        l.formatMessage(
                          {
                            id: "codex.review.revert.hunk.error",
                            defaultMessage: "Failed to revert hunk {hunkNumber} in {path}",
                            description: "Toast shown when hunk revert fails",
                          },
                          { hunkNumber: i, path: a.path },
                        ),
                        { errorAnalytics: { toastId: "codex.review.revert.hunk.error" } },
                      )
                : "section" === a.scope
                  ? r.info(
                      l.formatMessage({
                        id: "codex.review.revert.section.partialSuccess",
                        defaultMessage: "Section partially reverted",
                        description: "Toast shown when section revert partially succeeds",
                      }),
                    )
                  : "file" === a.scope
                    ? r.info(
                        l.formatMessage(
                          {
                            id: "codex.review.revert.file.partialSuccess",
                            defaultMessage: "Partially reverted {path}",
                            description: "Toast shown when file revert partially succeeds",
                          },
                          { path: a.path },
                        ),
                      )
                    : r.info(
                        l.formatMessage(
                          {
                            id: "codex.review.revert.hunk.partialSuccess",
                            defaultMessage: "Partially reverted hunk {hunkNumber} in {path}",
                            description: "Toast shown when hunk revert partially succeeds",
                          },
                          { hunkNumber: i, path: a.path },
                        ),
                      )
          })(e, t, a, n)
        : ((l = e),
          (r = t),
          (i = a.action),
          (s = n),
          (d = l.get(tl.g)),
          (c = l.get(o.Id)),
          "error" === r && "not-git-repo" === s
            ? c.danger(
                d.formatMessage({
                  id: "codex.hunk.patch.notGitRepo",
                  defaultMessage: "This action requires a Git repository",
                  description:
                    "Message displayed when stage/unstage patch action is attempted outside a Git repository",
                }),
                { errorAnalytics: { toastId: "codex.hunk.patch.notGitRepo" } },
              )
            : "success" === r
              ? c.success(
                  "unstage" === i
                    ? d.formatMessage({
                        id: "codex.hunk.patch.revertSuccess",
                        defaultMessage: "Unstaged successfully",
                        description: "Message displayed when hunk is unstaged successfully",
                      })
                    : d.formatMessage({
                        id: "codex.hunk.patch.success",
                        defaultMessage: "Staged successfully",
                        description: "Message displayed when hunk is updated successfully",
                      }),
                )
              : "error" === r
                ? c.danger(
                    "unstage" === i
                      ? d.formatMessage({
                          id: "codex.hunk.patch.revertError",
                          defaultMessage: "Failed to unstage",
                          description: "Message displayed when failed to revert a hunk",
                        })
                      : d.formatMessage({
                          id: "codex.hunk.patch.error",
                          defaultMessage: "Failed to stage",
                          description: "Message displayed when failed to update a hunk",
                        }),
                    { errorAnalytics: { toastId: "reviewPatchToasts.showStageOrUnstageToast" } },
                  )
                : c.info(
                    d.formatMessage({
                      id: "codex.hunk.patch.partialSuccess",
                      defaultMessage: "Partial success",
                      description: "Message displayed when partial success",
                    }),
                  ))
    }
    async function tm({ cwd: e, diff: t, hostConfig: a, refreshPathsFast: n, revert: l, target: r }) {
      let i
      try {
        let n = await (0, ez.V)("git").request({
          method: "apply-patch",
          params: {
            cwd: (0, ek.DIv)(e),
            diff: t,
            atomic: !0,
            hostConfig: a,
            operationSource: "review_patch",
            revert: l,
            target: r,
          },
        })
        return ((i = n), n)
      } finally {
        await (async function ({ diff: e, refreshPathsFast: t, result: a }) {
          let n = new Set([...(a?.appliedPaths ?? []), ...(a?.skippedPaths ?? []), ...(a?.conflictedPaths ?? [])])
          if (0 === n.size)
            for (let t of (function (e) {
              if (0 === e.trim().length) return []
              let t = new Set()
              for (let a of (0, eP.F)(e)) {
                let e = a.metadata.name
                e && "/dev/null" !== e && t.add(e)
                let n = a.metadata.prevName
                n && "/dev/null" !== n && t.add(n)
              }
              return Array.from(t)
            })(e))
              n.add(t)
          n.size > 0 && (await t(Array.from(n)))
        })({ diff: t, refreshPathsFast: n, result: i })
      }
    }
    function th(e, t, a) {
      ;(0, tr.yy)(e, tn.CodexPatchActionResult, { action: t.action, scope: t.scope ?? "hunk", status: a })
    }
    var tp = a("GRTq")
    let tg = (0, r.vP)(g.GD, null),
      tv = (0, r.vP)(g.GD, !1),
      tx = (0, r.vP)(g.GD, !1),
      ty = (0, r.vP)(g.GD, !1)
    function tw(e) {
      ;(e.set(tx, !1), tb(e), e.set(ty, !1))
    }
    function tb(e) {
      e.set(tg, null)
    }
    async function tC(e, t) {
      var a
      !e.get(tv) &&
        ((a = {
          params: t,
          reviewFiles: (function (e, t) {
            if ("section" !== t.scope) return null
            let a = e.get(B.fU).data
            return a?.type === "success" ? a.files : null
          })(e, t),
          revision: (function (e, t) {
            if ("section" === t.scope) return null
            let a = e.get(B.fU).data
            return a?.type !== "success"
              ? null
              : (a.files.find((e) => e.path === t.path || e.previousPath === t.path)?.revision ?? null)
          })(e, t),
        }),
        (e.set(ty, !1), e.set(tg, a), "delete" !== a.params.action && ("revert" !== a.params.action || e.get(tp.JT)))
          ? e.set(tx, !1)
          : e.set(tx, !0),
        e.get(tx) || (await tj(e)))
    }
    async function tj(e) {
      let t = e.get(tg)
      if (null == t) return
      let { params: a, reviewFiles: n, revision: l } = t,
        r = e.get(y.kZ),
        i = e.get(B.l1),
        s = e.get(v.$q),
        d = e.get(er.vL),
        c = e.get(B.YC).data,
        u = null == c || null == i ? null : (0, ta._)({ hostId: s.id, root: c.root, cwd: (0, ek.DIv)(i) }),
        f = e.get(B.fU).data
      if (null == u || ("section" === a.scope ? null == n : null == l) || !tM(f, a, l)) {
        ;(tb(e), tf(e, "error", a), (0, B.FO)(e))
        return
      }
      let m = "section" === a.scope ? null : (0, te.yy)({ gitRoot: u.root, gitPath: a.path })
      ;(tb(e), e.set(tv, !0))
      try {
        let t = null == m ? null : (e.get(B.Yq)?.get(m) ?? null),
          i = null == t || null == m ? null : (e.get(B.sr, (0, B.Rh)(t.changeKind)).data?.get(m) ?? null),
          c = i?.revision === t?.revision && i?.entry?.type === "success" ? i.entry : null,
          h = null == m ? null : e.get(B.Yf, m)
        if (null != m && null == c && null != i && null != h && (h?.isPlaceholderData || h?.data?.type !== "success")) {
          h = await h.refetch({ cancelRefetch: !1 })
          let t = e.get(B.fU).data
          if (!tM(t, a, l) || h.isPlaceholderData || h.data?.type !== "success") {
            ;(tf(e, "error", a), (0, B.FO)(e))
            return
          }
        }
        let p = null == m ? null : e.get(ey.$b, m),
          g = c ?? h?.data ?? null,
          v = "section" === a.scope ? n : f?.type === "success" ? f.files : []
        if (null == v) throw Error("Expected reviewed section files")
        await (async function ({
          scope: e,
          cwd: t,
          diffText: a,
          hostConfig: n,
          params: l,
          reviewFiles: r,
          refreshPathsFast: i,
          selectedFileDiff: s,
          selectedFileDiffText: d,
          stageFilter: c,
        }) {
          if (!t) return
          let u = "section" === l.scope
          if (
            u ||
            "delete" === l.action ||
            ("file" === l.scope &&
              ("stage" === l.action ||
                "unstage" === l.action ||
                ("revert" === l.action && "unstaged" === c) ||
                s?.isBinary))
          ) {
            let a = "delete" === l.action ? { ...l, action: "revert" } : l
            try {
              let i = await (0, ez.V)("git").request({
                method: "apply-review-section-changes",
                params: {
                  action: a.action,
                  cwd: (0, ek.DIv)(t),
                  files: u ? r : r.filter((e) => e.path === l.path),
                  hostConfig: n,
                  operationSource: "review_patch",
                  source: c,
                },
              })
              ;(tf(e, i.status, l, i.errorCode), th(e, a, i.status))
            } catch {
              ;(tf(e, "error", l), th(e, a, "error"))
            }
            return
          }
          let f =
            d ??
            (null != s
              ? (function (e) {
                  if (0 === e.length) return null
                  let t = []
                  for (let a of e) {
                    if (0 === a.metadata.hunks.length && "new" !== a.metadata.type && "deleted" !== a.metadata.type)
                      continue
                    let e = [...ts(a)]
                    for (let t of a.metadata.hunks) e.push(...td(a, t))
                    ;("" !== e[e.length - 1] && e.push(""), t.push(e.join("\n")))
                  }
                  return 0 === t.length ? null : t.join("\n")
                })([s])
              : null) ??
            a
          if (null == f) return
          let m =
            "file" === l.scope
              ? ((function (e, t) {
                  if (!e || 0 === e.trim().length) return null
                  for (let a of tc(e))
                    if (tu(a, t) && (0, eP.F)(a).some((e) => e.metadata.name === t))
                      return a.endsWith("\n")
                        ? a
                        : `${a}
`
                  return null
                })(f, l.path) ??
                (function (e, t) {
                  if (!e || 0 === e.trim().length) return null
                  let a = (0, eP.F)(e).find((e) => e.metadata.name === t)
                  if (!a) return null
                  let n = [...ts(a)]
                  for (let e of a.metadata.hunks) n.push(...td(a, e))
                  return ("" !== n[n.length - 1] && n.push(""), n.join("\n"))
                })(f, l.path))
              : (function (e, t, a, { preserveRename: n = !1 } = {}) {
                  if (!e || 0 === e.trim().length) return null
                  let l = (function (e, t, a, n) {
                    for (let l of tc(e)) {
                      if (!tu(l, t) || null == (0, eP.F)(l).find((e) => e.metadata.name === t)) continue
                      let e = Array.from(l.matchAll(/^@@ .*$/gm)),
                        r = e[a]
                      if (r?.index == null) break
                      let i = e[0]?.index
                      if (null == i) break
                      let s = to(
                          l
                            .slice(0, i)
                            .split("\n")
                            .filter(
                              (e) =>
                                e.startsWith("diff --git ") ||
                                e.startsWith("new file mode ") ||
                                e.startsWith("deleted file mode ") ||
                                e.startsWith("index ") ||
                                e.startsWith("--- ") ||
                                e.startsWith("+++ "),
                            ),
                          n,
                        ).join("\n"),
                        o = `${s}
${l.slice(r.index, e[a + 1]?.index ?? l.length)}`
                      return o.endsWith("\n")
                        ? o
                        : `${o}
`
                    }
                    return null
                  })(e, t, a, n)
                  if (null != l) return l
                  let r = (0, eP.F)(e).find((e) => e.metadata.name === t)
                  if (!r) return null
                  let i = r.metadata.hunks[a]
                  if (!i) return null
                  let s = [...to(ts(r), n), ...td(r, i)]
                  return ("" !== s[s.length - 1] && s.push(""), s.join("\n"))
                })(f, l.path, l.hunkIndex ?? 0, { preserveRename: "unstage" === l.action && "staged" === c })
          if (!m) {
            var h, p
            let t, a, n
            return void ((h = e),
            (p = l.scope),
            (t = h.get(tl.g)),
            (a = h.get(o.Id)),
            (n =
              "section" === p
                ? t.formatMessage({
                    id: "codex.section.patch.missing",
                    defaultMessage: "Unable to build patch for this section.",
                    description: "Message displayed when unable to build patch for a section",
                  })
                : "file" === p
                  ? t.formatMessage({
                      id: "codex.file.patch.missing",
                      defaultMessage: "Unable to build patch for this file.",
                      description: "Message displayed when unable to build patch for a file",
                    })
                  : t.formatMessage({
                      id: "codex.hunk.patch.missing",
                      defaultMessage: "Unable to build patch for this hunk.",
                      description: "Message displayed when unable to build patch for a hunk",
                    })),
            a.danger(n, { errorAnalytics: { toastId: "applyReviewPatch.showMissingPatchToast" } }))
          }
          let g =
            "stage" === l.action
              ? { target: "staged", revert: !1 }
              : "unstage" === l.action
                ? { target: "staged", revert: !0 }
                : "unstaged" === c
                  ? { target: "unstaged", revert: !0 }
                  : { target: "staged-and-unstaged", revert: !0 }
          if ("revert" === l.action && "staged" === c) {
            let a = !1
            try {
              let r = await tm({
                cwd: t,
                diff: m,
                hostConfig: n,
                refreshPathsFast: i,
                revert: g.revert,
                target: "staged",
              })
              if ("success" !== r.status) {
                ;(tf(e, r.status, l, r.errorCode), th(e, l, r.status))
                return
              }
              a = !0
              let s = await tm({
                  cwd: t,
                  diff: m,
                  hostConfig: n,
                  refreshPathsFast: i,
                  revert: g.revert,
                  target: "unstaged",
                }),
                o = "success" === s.status ? "success" : "partial-success"
              ;(tf(e, o, l), th(e, l, o))
              return
            } catch {
              let t = a ? "partial-success" : "error"
              ;(tf(e, t, l), th(e, l, t))
              return
            }
          }
          try {
            let a = await tm({
              cwd: t,
              diff: m,
              hostConfig: n,
              refreshPathsFast: i,
              revert: g.revert,
              target: g.target,
            })
            ;(tf(e, a.status, l, a.errorCode), th(e, l, a.status))
          } catch {
            ;(tf(e, "error", l), th(e, l, "error"))
          }
        })({
          scope: e,
          cwd: u.cwd,
          diffText: d.diffText,
          hostConfig: s,
          params: a,
          reviewFiles: v,
          refreshPathsFast: (t) => (0, er.AQ)(e, t),
          selectedFileDiff: p?.diff ?? null,
          selectedFileDiffText: g?.type === "success" ? g.diff : null,
          stageFilter: "staged" === r ? "staged" : "unstaged",
        })
      } finally {
        e.set(tv, !1)
      }
    }
    function tM(e, t, a) {
      return (
        "section" === t.scope ||
        (null != a &&
          e?.type === "success" &&
          e.files.some(
            (e) =>
              e.revision === a &&
              ("delete" === t.action
                ? e.path === t.path && "untracked" === e.changeKind
                : e.path === t.path || e.previousPath === t.path),
          ))
      )
    }
    let tk = (0, a("Nwp9").Kn)((e) => e, null),
      tS = "src/codex-review-placeholder.ts",
      tA = `diff --git a/${tS} b/${tS}
--- a/${tS}
+++ b/${tS}
@@ -0,0 +0,0 @@
`
    function tI(e) {
      let t,
        a = (0, l.c)(3),
        r = null == e.fileEntry.summary ? tP : t_
      return (
        a[0] !== r || a[1] !== e ? ((t = (0, n.jsx)(r, { ...e })), (a[0] = r), (a[1] = e), (a[2] = t)) : (t = a[2]),
        t
      )
    }
    function t_(e) {
      let t,
        a = (0, l.c)(3),
        i = (0, r._U)(ey.$b, e.path)
      return (
        a[0] !== i || a[1] !== e
          ? ((t = null == i ? null : (0, n.jsx)(tP, { ...e, fileEntry: i })), (a[0] = i), (a[1] = e), (a[2] = t))
          : (t = a[2]),
        t
      )
    }
    let tP = (0, i.memo)(function (e) {
      var t, a
      let o,
        c,
        u,
        f,
        m,
        h,
        p,
        x,
        w,
        b,
        C,
        j,
        k,
        S,
        A,
        I,
        _,
        P,
        N,
        R,
        U,
        D,
        T,
        L,
        F,
        O,
        E,
        G,
        q,
        z,
        V,
        $,
        W,
        K,
        Z,
        Q = (0, l.c)(169)
      Q[0] !== e
        ? (({
            defaultOpen: c,
            diffMode: u,
            diffRefs: f,
            fileEntry: m,
            interactionOwner: h,
            isCappedMode: p,
            onUncommittedFileMounted: x,
            path: w,
            reviewDiffMetrics: b,
            showReviewGitActions: j,
            showPartialWhileLoadingFullContent: C,
            skipFindHighlight: k,
            ...o
          } = e),
          (Q[0] = e),
          (Q[1] = o),
          (Q[2] = c),
          (Q[3] = u),
          (Q[4] = f),
          (Q[5] = m),
          (Q[6] = h),
          (Q[7] = p),
          (Q[8] = x),
          (Q[9] = w),
          (Q[10] = b),
          (Q[11] = C),
          (Q[12] = j),
          (Q[13] = k))
        : ((o = Q[1]),
          (c = Q[2]),
          (u = Q[3]),
          (f = Q[4]),
          (m = Q[5]),
          (h = Q[6]),
          (p = Q[7]),
          (x = Q[8]),
          (w = Q[9]),
          (b = Q[10]),
          (C = Q[11]),
          (j = Q[12]),
          (k = Q[13]))
      let H = (0, r.gh)(g.GD),
        J = (0, s.A)(),
        X = (0, r.Ul)(er.mh),
        Y = (0, r.Ul)(eR.Xi),
        ee = (0, r.Ul)(v.lA),
        et = (0, r.Ul)(v.threadHostId$)
      ;(Q[14] !== X || Q[15] !== m.path
        ? ((S = (0, te.FW)(X, m.path)), (Q[14] = X), (Q[15] = m.path), (Q[16] = S))
        : (S = Q[16]),
        Q[17] !== et || Q[18] !== S
          ? ((A = { hostId: et, path: S }), (Q[17] = et), (Q[18] = S), (Q[19] = A))
          : (A = Q[19]))
      let ea = A,
        en = (0, r._U)(eN.aS, ea),
        { openReadOnlyReviewTab: ei } = (0, r.Ul)(eN.Lp),
        es = (0, r.Ul)(g.Rj),
        eo = "chatgpt-thread" === H.value.routeKind,
        ed = (0, r.Ul)(y.kZ),
        ec = (0, r.Ul)(el.m6),
        eu = (0, r._U)(e8.DI, m.id)
      Q[20] !== ee.id || Q[21] !== w
        ? ((t = ee.id),
          (a = w),
          (I = `review-viewed-file-v1:${JSON.stringify([t, a])}`),
          (Q[20] = ee.id),
          (Q[21] = w),
          (Q[22] = I))
        : (I = Q[22])
      let ef = I,
        em = (0, r._U)(tk, ef),
        eh = (0, r.Ul)(tv),
        ep = (0, r.Ul)(d.ls),
        ev = (0, r.Ul)(tp.H1)
      Q[23] !== H.value ? ((_ = (0, g.n1)(H.value)), (Q[23] = H.value), (Q[24] = _)) : (_ = Q[24])
      let ex = _
      Q[25] !== w || Q[26] !== k
        ? ((P = { path: w, skipFindHighlight: k }), (Q[25] = w), (Q[26] = k), (Q[27] = P))
        : (P = Q[27])
      let ey = (0, eS.M)(P)
      Q[28] !== m.snapshotGeneration || Q[29] !== H
        ? ((N = () => {
            let e = H.get(B.fU).data
            return e?.type === "success" ? e.snapshotGeneration : (m?.snapshotGeneration ?? void 0)
          }),
          (Q[28] = m.snapshotGeneration),
          (Q[29] = H),
          (Q[30] = N))
        : (N = Q[30])
      let ew = (0, eD.K)(N)
      Q[31] !== f.current || Q[32] !== m.id || Q[33] !== m.summary || Q[34] !== x || Q[35] !== H
        ? ((R = (e) => {
            if (e) {
              ;(f.current.set(m.id, e), null != m.summary && x?.(H, f.current))
              return
            }
            f.current.delete(m.id)
          }),
          (Q[31] = f.current),
          (Q[32] = m.id),
          (Q[33] = m.summary),
          (Q[34] = x),
          (Q[35] = H),
          (Q[36] = R))
        : (R = Q[36])
      let eb = R
      ;(Q[37] !== X ||
      Q[38] !== c ||
      Q[39] !== ed ||
      Q[40] !== f.current ||
      Q[41] !== eu ||
      Q[42] !== m.diffLoadStatus ||
      Q[43] !== m.id ||
      Q[44] !== m.snapshotGeneration ||
      Q[45] !== m.summary ||
      Q[46] !== ew ||
      Q[47] !== ee ||
      Q[48] !== ev ||
      Q[49] !== ec ||
      Q[50] !== em
        ? ((U = () => {
            let e = m?.summary,
              t = m?.snapshotGeneration
            if (
              "full" !== ec ||
              !ev ||
              m?.diffLoadStatus !== "loading" ||
              null == t ||
              null == X ||
              null == e ||
              (eu ?? c) === !1 ||
              ("branch" === ed && em === e.revision) ||
              "u" < typeof IntersectionObserver
            )
              return
            let a = f.current.get(m.id)
            if (null == a) return
            let n = new IntersectionObserver(
              (a) => {
                a.some(tN) &&
                  (n.disconnect(),
                  (0, eI.Cz)({
                    hostConfig: ee,
                    nextFallbackToDisk: "branch" === ed || "unstaged" === ed || "uncommitted" === ed,
                    reviewFile: e,
                    snapshotGeneration: ew() ?? t,
                    workspaceRoot: (0, ek.DIv)(X),
                  }))
              },
              { rootMargin: "300px 0px" },
            )
            return (
              n.observe(a),
              () => {
                n.disconnect()
              }
            )
          }),
          (Q[37] = X),
          (Q[38] = c),
          (Q[39] = ed),
          (Q[40] = f.current),
          (Q[41] = eu),
          (Q[42] = m.diffLoadStatus),
          (Q[43] = m.id),
          (Q[44] = m.snapshotGeneration),
          (Q[45] = m.summary),
          (Q[46] = ew),
          (Q[47] = ee),
          (Q[48] = ev),
          (Q[49] = ec),
          (Q[50] = em),
          (Q[51] = U))
        : (U = Q[51]),
        Q[52] !== X ||
        Q[53] !== c ||
        Q[54] !== ed ||
        Q[55] !== f ||
        Q[56] !== eu ||
        Q[57] !== m ||
        Q[58] !== ew ||
        Q[59] !== ee ||
        Q[60] !== ev ||
        Q[61] !== ec ||
        Q[62] !== em
          ? ((D = [X, c, ed, f, eu, m, ew, ee, ev, ec, em]),
            (Q[52] = X),
            (Q[53] = c),
            (Q[54] = ed),
            (Q[55] = f),
            (Q[56] = eu),
            (Q[57] = m),
            (Q[58] = ew),
            (Q[59] = ee),
            (Q[60] = ev),
            (Q[61] = ec),
            (Q[62] = em),
            (Q[63] = D))
          : (D = Q[63]),
        (0, i.useEffect)(U, D))
      let eC = m.diffRevision ?? m.summary?.revision ?? null
      Q[64] !== eC || Q[65] !== em
        ? ((T = null != eC && em === eC), (Q[64] = eC), (Q[65] = em), (Q[66] = T))
        : (T = Q[66])
      let ej = T,
        eT = "branch" === ed && null != eC && (null != m.diffRevision || ej),
        eL = eT && ej
      Q[67] !== J || Q[68] !== eL
        ? ((L = eL
            ? J.formatMessage({ id: "codex.review.fileDiff.markAsUnviewed", defaultMessage: "Mark as unviewed" })
            : J.formatMessage({ id: "codex.review.fileDiff.markAsViewed", defaultMessage: "Mark as viewed" })),
          (Q[67] = J),
          (Q[68] = eL),
          (Q[69] = L))
        : (L = Q[69])
      let eF = L,
        eO = m.summary?.changeKind === "unmerged"
      Q[70] !== ed || Q[71] !== eO || Q[72] !== j
        ? ((F = (0, y.cd)(ed) && !eO && j), (Q[70] = ed), (Q[71] = eO), (Q[72] = j), (Q[73] = F))
        : (F = Q[73])
      let eB = F,
        eE =
          !eo &&
          !eh &&
          m.summary?.changeKind === "untracked" &&
          m.diffRevision === m.summary.revision &&
          m.diff?.isGitlink === !1
      Q[74] !== m || Q[75] !== eO || Q[76] !== J
        ? ((O = eO
            ? (function (e) {
                let t = (0, eP.F)(`diff --git a/${tS} b/${tS}
--- a/${tS}
+++ b/${tS}
@@ -0,0 +1 @@
+${e}
`)[0]
                if (null == t) throw Error("Failed to parse merge conflict placeholder review diff")
                return t
              })(J.formatMessage({ id: "review.fileDiff.mergeConflicts", defaultMessage: "File has merge conflicts" }))
            : (m.diff ??
              (function (e) {
                let t = (0, eP.F)(tA)[0]
                if (null == t) throw Error("Failed to parse placeholder review diff")
                return { ...t, additions: e.summary?.additions ?? 0, deletions: e.summary?.deletions ?? 0 }
              })(m))),
          (Q[74] = m),
          (Q[75] = eO),
          (Q[76] = J),
          (Q[77] = O))
        : (O = Q[77])
      let eG = O,
        eq = eu ?? (c && !eL && "deleted" !== eG.metadata.type),
        ez = !eO && "error" === m.diffLoadStatus
      Q[78] !== X || Q[79] !== w || Q[80] !== Y
        ? ((E = (0, te.Sj)({ cwd: X, path: w, workspaceRoots: Y })), (Q[78] = X), (Q[79] = w), (Q[80] = Y), (Q[81] = E))
        : (E = Q[81])
      let eV = E,
        eW = "deleted" === eG.metadata.type ? (eG.firstDeletionLine ?? 1) : (eG.firstAdditionLine ?? 1)
      Q[82] !== eG.oldPath || Q[83] !== m.diffBaseRevision || Q[84] !== eO
        ? ((G =
            null == m.diffBaseRevision || eO || eG.oldPath === e_.pP
              ? null
              : { path: eG.oldPath, revision: m.diffBaseRevision }),
          (Q[82] = eG.oldPath),
          (Q[83] = m.diffBaseRevision),
          (Q[84] = eO),
          (Q[85] = G))
        : (G = Q[85])
      let eK = G
      Q[86] !== X ||
      Q[87] !== eG.metadata.type ||
      Q[88] !== ed ||
      Q[89] !== m.path ||
      Q[90] !== eW ||
      Q[91] !== et ||
      Q[92] !== h ||
      Q[93] !== H ||
      Q[94] !== ea ||
      Q[95] !== eV ||
      Q[96] !== Y
        ? ((q = function (e) {
            let t = e$(H, h)
            if (!(null == t || t.get(g.Rj))) {
              if (t.get(eN.aS, ea)) {
                let a = { source: ed, baseBranch: H.get(B.Jw), commitSha: H.get(B.Tk) ?? void 0 }
                ;(0, e9.f)(t, {
                  ...ea,
                  comparisonTarget: a,
                  cwd: null == X ? void 0 : (0, ek.DIv)(X),
                  isDeleted: "commit" !== ed && "last-turn" !== ed && "deleted" === eG.metadata.type,
                  line: e,
                  workspaceRoot: eV,
                  workspaceRoots: Y,
                })
                return
              }
              t.get(eN.Lp).openReadOnlyReviewTab?.(t, m.path, {
                ...(null == h
                  ? {}
                  : {
                      cwd: null == X ? void 0 : (0, ek.DIv)(X),
                      environmentId: (0, tt.o)(H, m.path, { hostId: et }),
                      workspaceRoots: Y,
                    }),
                hostId: et,
                line: e ?? eW,
                resetTabState: !0,
              })
            }
          }),
          (Q[86] = X),
          (Q[87] = eG.metadata.type),
          (Q[88] = ed),
          (Q[89] = m.path),
          (Q[90] = eW),
          (Q[91] = et),
          (Q[92] = h),
          (Q[93] = H),
          (Q[94] = ea),
          (Q[95] = eV),
          (Q[96] = Y),
          (Q[97] = q))
        : (q = Q[97])
      let eZ = q
      Q[98] !== en || Q[99] !== J || Q[100] !== es || Q[101] !== eZ || Q[102] !== ei
        ? ((z =
            !es && (en || null != ei)
              ? {
                  ariaLabel: J.formatMessage({ id: "review.fileDiff.openInTab.ariaLabel", defaultMessage: "Open in" }),
                  onClick: eZ,
                  tooltip: J.formatMessage({
                    id: "review.fileDiff.openInTab.tooltip",
                    defaultMessage: "Open file in a tab",
                  }),
                }
              : void 0),
          (Q[98] = en),
          (Q[99] = J),
          (Q[100] = es),
          (Q[101] = eZ),
          (Q[102] = ei),
          (Q[103] = z))
        : (z = Q[103])
      let eQ = z
      Q[104] !== w ? ((V = eg.rW.reviewFile(w)), (Q[104] = w), (Q[105] = V)) : (V = Q[105])
      let eH = k ? "" : void 0
      Q[106] !== X ? (($ = null != X ? (0, ek.DIv)(X) : null), (Q[106] = X), (Q[107] = $)) : ($ = Q[107])
      let eJ = "deleted" === eG.metadata.type,
        eY = eq && null != m.diff && !eG.isBinary && !eO,
        e1 = m.snapshotGeneration ?? void 0
      return (
        Q[108] !== eE ||
        Q[109] !== eT ||
        Q[110] !== o ||
        Q[111] !== ex ||
        Q[112] !== X ||
        Q[113] !== eG ||
        Q[114] !== ed ||
        Q[115] !== u ||
        Q[116] !== f.current ||
        Q[117] !== m.canApplyPatchActions ||
        Q[118] !== m.diff ||
        Q[119] !== m.diffLoadStatus ||
        Q[120] !== m.diffRevision ||
        Q[121] !== m.displayPath ||
        Q[122] !== m.gitPath ||
        Q[123] !== m.id ||
        Q[124] !== m.path ||
        Q[125] !== m.snapshotGeneration ||
        Q[126] !== m.summary ||
        Q[127] !== ew ||
        Q[128] !== ez ||
        Q[129] !== eO ||
        Q[130] !== ep ||
        Q[131] !== ee ||
        Q[132] !== et ||
        Q[133] !== p ||
        Q[134] !== eh ||
        Q[135] !== eo ||
        Q[136] !== eL ||
        Q[137] !== ey ||
        Q[138] !== eq ||
        Q[139] !== eQ ||
        Q[140] !== w ||
        Q[141] !== b ||
        Q[142] !== ec ||
        Q[143] !== eC ||
        Q[144] !== H ||
        Q[145] !== eB ||
        Q[146] !== C ||
        Q[147] !== eK ||
        Q[148] !== ef ||
        Q[149] !== eF ||
        Q[150] !== eV
          ? ((W = (e) =>
              (0, n.jsx)(eU.W, {
                languageFeatures: e,
                ...o,
                allowCommentDrafts: o.enableComments && (null == m.summary || m.diffRevision === m.summary.revision),
                conversationId: ex ?? void 0,
                cwd: null != X ? (0, ek.DIv)(X) : null,
                workspaceRoot: eV,
                displayPathOverride: m.displayPath,
                diff: eG,
                readonlyCommentBase: "uncommitted" === ed ? eK : void 0,
                expandScope: "review",
                committedMarkdown:
                  "commit" === ed
                    ? {
                        cwd: null != X ? (0, ek.DIv)(X) : null,
                        hostConfig: ee,
                        oid: (0, eI.uc)(m.summary?.revision ?? null)?.nextObjectId ?? eG.metadata.newObjectId ?? null,
                        path: m.gitPath,
                      }
                    : void 0,
                fullContentNextFallbackToDisk:
                  "branch" === ed || "unstaged" === ed || "uncommitted" === ed || "last-turn" === ed,
                fullContentIgnoreWhitespace: ep,
                reviewPath: w,
                getFullContentSnapshotGeneration: ew,
                fullContentSnapshotGeneration: m.snapshotGeneration ?? void 0,
                headerEndContent: eT
                  ? (0, n.jsx)(eM.m, {
                      content: eF,
                      children: (0, n.jsx)(M.$, {
                        "aria-label": eF,
                        "aria-pressed": eL,
                        color: "ghostTertiary",
                        size: "iconCircleSm",
                        onClick: () => {
                          H.set(tk, ef, eL ? null : eC)
                        },
                        children: eL ? (0, n.jsx)(eA.GsY, {}) : (0, n.jsx)(eA.X9D, {}),
                      }),
                    })
                  : void 0,
                headerEndContentOpenOnClick: eT ? eL : void 0,
                hostConfig: ee,
                hostId: et,
                hunkActionsVariant: "staged" === ed ? "staged" : "unstaged",
                committedImageRevision: "commit" === ed ? m.diffRevision : void 0,
                openInTab: eQ,
                isLoading: !eO && "loading" === m.diffLoadStatus,
                fileActionsDisabled: !m.canApplyPatchActions || eh,
                loadFullContent:
                  "full" === ec && !eO && null != m.diff && (null == m.summary || null != m.diffRevision) && !eo,
                showPartialWhileLoadingFullContent: C,
                onHunkAction: (e) => tC(H, e),
                onDeleteFile: eE
                  ? () => {
                      tC(H, { action: "delete", path: m.gitPath, scope: "file" })
                    }
                  : void 0,
                onLoadRetry: ez
                  ? () => {
                      ;(0, B.Y_)(H, w)
                    }
                  : void 0,
                onDirectFileToggle: (e) => {
                  e ||
                    p ||
                    requestAnimationFrame(() => {
                      f.current.get(m.id)?.scrollIntoView({ behavior: "auto", block: "nearest" })
                    })
                },
                onOpenChange: (e) => (0, e8.NX)(H, m.id, e),
                onPostRender: ey,
                metrics: b,
                openFilePathOverride: m.path,
                open: eq,
                showFileActions: eB,
                showHunkActions: eB && m.canApplyPatchActions && !eh,
                showLoadError: ez,
                stickyHeader: !p,
                viewType: u,
              })),
            (Q[108] = eE),
            (Q[109] = eT),
            (Q[110] = o),
            (Q[111] = ex),
            (Q[112] = X),
            (Q[113] = eG),
            (Q[114] = ed),
            (Q[115] = u),
            (Q[116] = f.current),
            (Q[117] = m.canApplyPatchActions),
            (Q[118] = m.diff),
            (Q[119] = m.diffLoadStatus),
            (Q[120] = m.diffRevision),
            (Q[121] = m.displayPath),
            (Q[122] = m.gitPath),
            (Q[123] = m.id),
            (Q[124] = m.path),
            (Q[125] = m.snapshotGeneration),
            (Q[126] = m.summary),
            (Q[127] = ew),
            (Q[128] = ez),
            (Q[129] = eO),
            (Q[130] = ep),
            (Q[131] = ee),
            (Q[132] = et),
            (Q[133] = p),
            (Q[134] = eh),
            (Q[135] = eo),
            (Q[136] = eL),
            (Q[137] = ey),
            (Q[138] = eq),
            (Q[139] = eQ),
            (Q[140] = w),
            (Q[141] = b),
            (Q[142] = ec),
            (Q[143] = eC),
            (Q[144] = H),
            (Q[145] = eB),
            (Q[146] = C),
            (Q[147] = eK),
            (Q[148] = ef),
            (Q[149] = eF),
            (Q[150] = eV),
            (Q[151] = W))
          : (W = Q[151]),
        Q[152] !== ed ||
        Q[153] !== m.gitPath ||
        Q[154] !== m.path ||
        Q[155] !== ee ||
        Q[156] !== h ||
        Q[157] !== $ ||
        Q[158] !== eJ ||
        Q[159] !== eY ||
        Q[160] !== e1 ||
        Q[161] !== W ||
        Q[162] !== eV
          ? ((K = (0, n.jsx)(eX, {
              interactionOwner: h,
              cwd: $,
              diffFilter: ed,
              gitPath: m.gitPath,
              hostConfig: ee,
              isDeleted: eJ,
              open: eY,
              path: m.path,
              snapshotGeneration: e1,
              workspaceRoot: eV,
              children: W,
            })),
            (Q[152] = ed),
            (Q[153] = m.gitPath),
            (Q[154] = m.path),
            (Q[155] = ee),
            (Q[156] = h),
            (Q[157] = $),
            (Q[158] = eJ),
            (Q[159] = eY),
            (Q[160] = e1),
            (Q[161] = W),
            (Q[162] = eV),
            (Q[163] = K))
          : (K = Q[163]),
        Q[164] !== eb || Q[165] !== V || Q[166] !== eH || Q[167] !== K
          ? ((Z = (0, n.jsx)("div", { ...V, "data-thread-find-skip": eH, ref: eb, children: K })),
            (Q[164] = eb),
            (Q[165] = V),
            (Q[166] = eH),
            (Q[167] = K),
            (Q[168] = Z))
          : (Z = Q[168]),
        Z
      )
    })
    function tN(e) {
      return e.isIntersecting
    }
    var tR = a("kW2F"),
      tU = a("gSdW"),
      tD = a("h8aU"),
      tT = a("TwSq")
    let tL = (0, r.un)(g.GD, ({ get: e }) => {
        let t = e(ew.lN)
        return !e(B.c2) || e(ey.rN) ? t : t.map((t) => e(ey.$b, t.path) ?? t)
      }),
      tF = (0, r.un)(g.GD, ({ get: e }) => {
        let t = e(tT.Gz)
        return null == t ? null : (0, tU.a)(t.matches)
      }),
      tO = (0, r.un)(g.GD, ({ get: e }) => (0, tD.et)(e(tT.Gz), e(tT.e8)))
    var tB = a("K0l0"),
      tE = a("uNQ5"),
      tG = a("uSwP"),
      tq = a("qYre")
    let tz = (0, r.un)(g.GD, ({ get: e }) => {
      var t, a
      let n,
        l,
        r = e(v.threadHostId$),
        i = e(B.YC).data,
        s = e(ey.J1).map((e) => e.gitPath),
        {
          normalizedGitRoot: o,
          normalizedCwd: d,
          cwdRelativeToGitRoot: c,
        } = ((t = i?.root ?? null),
        (a = e(er.mh)),
        (n = tV(t)),
        {
          normalizedGitRoot: n,
          normalizedCwd: (l = tV(a)),
          cwdRelativeToGitRoot: (function (e, t) {
            if (null == e || null == t) return null
            if (t === e) return ""
            let a = `${e}/`
            return t.startsWith(a) ? t.slice(a.length) : null
          })(n, l),
        }),
        u = null == o ? null : `${o}/.gitattributes`,
        f = c ? `${d}/.gitattributes` : null,
        m = i?.commonDir == null ? null : `${(0, _.Fd)(i.commonDir)}/info/attributes`
      function h(t) {
        let a = t.length ? e(tG.S, { hostId: r, paths: t }) : null
        return { paths: new Set(a?.data?.existingPaths.map((e) => (0, _.Fd)(e))), isLoading: a?.isLoading ?? !1 }
      }
      let p = h([
          ...new Set(
            [
              u,
              f,
              m,
              ...(function (e, t) {
                if (null == e) return []
                let a = new Set()
                for (let e of t) {
                  let t = (0, _.Fd)(e).split("/").filter(Boolean)
                  t.pop()
                  let n = ""
                  for (let e of t) ((n += `${e}/`), a.add(n))
                }
                return Array.from(a, (t) => (0, _.xE)(e, `${t}.gitattributes`))
              })(o, s),
            ].filter((e) => null != e),
          ),
        ]),
        g = c
          ? s.filter((e) => {
              let t = (0, _.Fd)(e)
              return t.includes("/") && null == (0, tq.W)(t, c)
            })
          : [],
        x = h(
          (function ({ ambiguousSlashPaths: e, normalizedCwd: t, normalizedGitRoot: a }) {
            return null == a || null == t
              ? []
              : e.flatMap((e) => {
                  let n = (0, _.Fd)(e)
                  return [(0, _.xE)(a, n), (0, _.xE)(t, n)]
                })
          })({ ambiguousSlashPaths: g, normalizedCwd: d, normalizedGitRoot: o }),
        ),
        y = (function ({ ambiguousSlashPaths: e, normalizedCwd: t, normalizedGitRoot: a, existingCandidatePaths: n }) {
          return null == a || null == t
            ? new Set()
            : new Set(
                e.filter((e) => {
                  let l = (0, _.Fd)(e),
                    r = (0, _.Fd)((0, _.xE)(a, l)),
                    i = (0, _.Fd)((0, _.xE)(t, l))
                  return n.has(i) && !n.has(r)
                }),
              )
        })({ ambiguousSlashPaths: g, normalizedCwd: d, normalizedGitRoot: o, existingCandidatePaths: x.paths }),
        w = [...p.paths].sort((e, t) => (e === m ? -1 : t === m ? 1 : t.length - e.length)),
        b = !p.isLoading && !x.isLoading,
        C = w.flatMap((t) => {
          let a = e(tE.Lp, { hostId: r, path: t })
          a.isLoading && (b = !1)
          let n = a.data?.contents ?? null,
            l = t === m || t === u ? null : (0, tq.W)(t.slice(0, -15), o),
            i = (0, tq.s)(n, { basePath: l })
          if (!i) return []
          let s = t === f ? (0, tq.s)(n) : null
          return [{ attributesPath: t, match: i, matchRelative: s }]
        }),
        j = s.filter((e) => {
          let t = (0, _.Fd)(e)
          for (let { match: e, matchRelative: r } of C) {
            var a, n, l
            let i =
              e(t) ??
              (r &&
              ((a = t),
              (n = c),
              (l = y),
              null != n && "" !== n && (a.includes("/") ? l.has(a) : null == (0, tq.W)(a, n)))
                ? r(t)
                : null)
            if (null != i) return "set" === i
          }
          return !1
        })
      return {
        hasLinguistGeneratedAttributes: C.some(({ attributesPath: e }) => e !== m),
        hasUnhandledAttributesFiles: w.some((e) => e !== u && e !== f),
        isReady: b,
        paths: new Set(j),
      }
    })
    function tV(e) {
      return null == e ? null : (0, _.Fd)(e).replace(/\/+$/, "")
    }
    let t$ = (0, r.un)(g.GD, ({ get: e }) => {
      let { hasLinguistGeneratedAttributes: t, paths: a } = e(tz),
        n = e(tp.RO)
      return { ...(0, tB.P)(e(ew.lN), (e) => e.gitPath, a, n && t), hasLinguistGeneratedAttributes: t }
    })
    function tW(e) {
      let t,
        a,
        i,
        s,
        o,
        d,
        c,
        u = (0, l.c)(33),
        {
          diffRefs: f,
          diffMode: m,
          interactionOwner: h,
          isCappedMode: p,
          onUncommittedFileMounted: v,
          reviewDiffMetrics: x,
          showReviewGitActions: w,
        } = e,
        b = (0, r.gh)(g.GD),
        C = (0, r.Ul)(ew.WV),
        j = (0, r.Ul)(y.kZ),
        M = (0, r.Ul)(tF),
        k = (0, r.Ul)(ey.ix)
      u[0] !== b.value ? ((t = (0, g.n1)(b.value)), (u[0] = b.value), (u[1] = t)) : (t = u[1])
      let S = t,
        A = h?.conversationId ?? void 0
      u[2] !== S ? ((a = S ?? (0, ej.w9)({ entrypoint: "home" })), (u[2] = S), (u[3] = a)) : (a = u[3])
      let I = "last-turn" !== j
      ;(u[4] !== b.value ? ((i = (0, g.Qm)(b.value)), (u[4] = b.value), (u[5] = i)) : (i = u[5]),
        u[6] !== A || u[7] !== a || u[8] !== I || u[9] !== i
          ? ((s = {
              isGitReview: !0,
              attachmentConversationId: A,
              conversationId: a,
              enablePullRequestComments: I,
              localConversationId: i,
            }),
            (u[6] = A),
            (u[7] = a),
            (u[8] = I),
            (u[9] = i),
            (u[10] = s))
          : (s = u[10]))
      let { commentProps: _ } = (0, eC.i)(s),
        P = (0, r.Ul)(t$),
        N = P.entries
      if (p) {
        let e, t
        u[11] !== C || u[12] !== N
          ? ((e = N.find((e) => e.path === C) ?? N[0]), (u[11] = C), (u[12] = N), (u[13] = e))
          : (e = u[13])
        let a = e
        ;(u[14] !== a ? ((t = null == a ? [] : [a]), (u[14] = a), (u[15] = t)) : (t = u[15]), (N = t))
      }
      if (!k) return null
      u[16] !== _ ||
      u[17] !== m ||
      u[18] !== f ||
      u[19] !== h ||
      u[20] !== p ||
      u[21] !== P ||
      u[22] !== M ||
      u[23] !== v ||
      u[24] !== x ||
      u[25] !== w
        ? ((o = function (e, t) {
            return (0, n.jsx)(
              tI,
              {
                ..._,
                defaultOpen: t,
                diffMode: m,
                diffRefs: f,
                interactionOwner: h,
                onUncommittedFileMounted: v,
                fileEntry: e,
                isCappedMode: p,
                path: e.path,
                reviewDiffMetrics: x,
                showReviewGitActions: w,
                showPartialWhileLoadingFullContent: !0,
                skipFindHighlight: null != M && !M.has(e.path),
              },
              `${e.id}:${P.isGenerated(e) ? "collapsed" : "open"}`,
            )
          }),
          (u[16] = _),
          (u[17] = m),
          (u[18] = f),
          (u[19] = h),
          (u[20] = p),
          (u[21] = P),
          (u[22] = M),
          (u[23] = v),
          (u[24] = x),
          (u[25] = w),
          (u[26] = o))
        : (o = u[26])
      let R = o
      return (
        u[27] !== P || u[28] !== N ? ((d = { ...P, entries: N }), (u[27] = P), (u[28] = N), (u[29] = d)) : (d = u[29]),
        u[30] !== R || u[31] !== d
          ? ((c = (0, n.jsx)(tR.x, { list: d, children: R })), (u[30] = R), (u[31] = d), (u[32] = c))
          : (c = u[32]),
        c
      )
    }
    function tK(e) {
      let t,
        a,
        s,
        o,
        d,
        c,
        u,
        f,
        m,
        h = (0, l.c)(29),
        {
          diffMode: p,
          diffRefs: g,
          interactionOwner: v,
          isFileTreeOpen: x,
          isReviewExpanded: y,
          onUncommittedFileMounted: w,
          scrollContainerRef: b,
          setTabState: C,
          tabState: j,
        } = e,
        M = (0, r.Ul)(ew.WV),
        k = (0, r.Ul)(ew.ES),
        S = (0, r.Ul)(ey.rN),
        A = (0, r.Ul)(er.RT),
        I = (0, r.Ul)(er.Jl),
        _ = I && A ? "actions" : void 0,
        P = (0, i.useRef)(null)
      h[0] !== j ? ((t = () => j), (h[0] = j), (h[1] = t)) : (t = h[1])
      let N = (0, i.useEffectEvent)(t)
      ;(h[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = () => () => {
            P.current = null
          }),
          (s = []),
          (h[2] = a),
          (h[3] = s))
        : ((a = h[2]), (s = h[3])),
        (0, i.useLayoutEffect)(a, s),
        h[4] !== k || h[5] !== N || h[6] !== b
          ? ((o = () => {
              let e = b.current
              if (null == e || P.current === e || ((P.current = e), k)) return
              let { scrollTop: t, scrollAnchor: a } = N()
              if ((null != t && (e.scrollTop = t), null == a || null == e.firstElementChild)) return
              let n = () => {
                ;(0, eb.N8)(e, a)
              }
              n()
              let l = new ResizeObserver(n)
              l.observe(e.firstElementChild)
              let r = e.ownerDocument,
                i = () => {
                  ;(l.disconnect(),
                    r.removeEventListener("pointerdown", i, !0),
                    r.removeEventListener("wheel", i, !0),
                    r.removeEventListener("keydown", i, !0))
                }
              return (
                r.addEventListener("pointerdown", i, !0),
                r.addEventListener("wheel", i, !0),
                r.addEventListener("keydown", i, !0),
                i
              )
            }),
            (h[4] = k),
            (h[5] = N),
            (h[6] = b),
            (h[7] = o))
          : (o = h[7]),
        h[8] !== k || h[9] !== b ? ((d = [k, b]), (h[8] = k), (h[9] = b), (h[10] = d)) : (d = h[10]),
        (0, i.useLayoutEffect)(o, d),
        h[11] !== b || h[12] !== C
          ? ((c = () => {
              let e = b.current
              if (null == e) return
              let t = null,
                a = () => {
                  if (null != t) {
                    let a = (0, eb.r2)(e, t)
                    ;(C((e) => ({ ...e, ...a })), (t = null))
                  }
                },
                n = "onscrollend" in e ? null : ep()(a, 100),
                l = () => {
                  ;((t = e.scrollTop), n?.())
                }
              return (
                e.addEventListener("scroll", l, { passive: !0 }),
                e.addEventListener("scrollend", a),
                () => {
                  ;(e.removeEventListener("scroll", l), e.removeEventListener("scrollend", a), n?.cancel(), a())
                }
              )
            }),
            (u = [b, C]),
            (h[11] = b),
            (h[12] = C),
            (h[13] = c),
            (h[14] = u))
          : ((c = h[13]), (u = h[14])),
        (0, i.useLayoutEffect)(c, u))
      let R = `review-diffs-${x ? "open" : "collapsed"}`,
        U = y ? "composer" : _
      return (
        h[15] !== M || h[16] !== p || h[17] !== g || h[18] !== v || h[19] !== S || h[20] !== w || h[21] !== I
          ? ((f = (e) =>
              S && null == M
                ? (0, n.jsx)(ex.V, {})
                : (0, n.jsx)(tW, {
                    diffRefs: g,
                    diffMode: p,
                    interactionOwner: v,
                    onUncommittedFileMounted: w,
                    isCappedMode: S,
                    reviewDiffMetrics: e,
                    showReviewGitActions: I,
                  })),
            (h[15] = M),
            (h[16] = p),
            (h[17] = g),
            (h[18] = v),
            (h[19] = S),
            (h[20] = w),
            (h[21] = I),
            (h[22] = f))
          : (f = h[22]),
        h[23] !== x || h[24] !== b || h[25] !== f || h[26] !== R || h[27] !== U
          ? ((m = (0, n.jsx)(ev.s, {
              id: R,
              ref: b,
              ...eg.rW.reviewScroll,
              "data-thread-find-target": "review",
              bottomInset: U,
              isFileTreeOpen: x,
              children: f,
            })),
            (h[23] = x),
            (h[24] = b),
            (h[25] = f),
            (h[26] = R),
            (h[27] = U),
            (h[28] = m))
          : (m = h[28]),
        m
      )
    }
    var tZ = a("wD9O"),
      tQ = a("QxH2"),
      tH = a("tgV8"),
      tJ = a("QRRc"),
      tX = a("J7wm")
    function tY({ diffRefs: e, path: t, scrollContainerRef: a }) {
      let n = e.current.get(t)
      if (null != n) return n
      let l = a.current
      if (null == l) return null
      for (let e of l.querySelectorAll("[data-review-path]")) if (e.dataset.reviewPath === t) return e
      return null
    }
    function t1({ element: e, scrollContainer: t }) {
      return e.getBoundingClientRect().top - t.getBoundingClientRect().top
    }
    function t0({ diffRefs: e, scrollContainerRef: t }) {
      let a = (0, r.gh)(g.GD),
        l = (0, r.Ul)(er.mh),
        s = (0, r.Ul)(v.lA),
        o = (0, r.Ul)(ew.lN),
        d = (0, r.Ul)(ew.X4).trim().length > 0,
        c = (0, r.Ul)(ey.rN),
        u = (0, r.Ul)(B.yw),
        f = (0, r.Ul)(B.Jw),
        m = (0, r.Ul)(B.Tk),
        h = (0, r.Ul)(B.OX),
        p = (0, tZ.dz)(),
        { hasUnhandledAttributesFiles: x, isReady: y, paths: w } = (0, r.Ul)(tz),
        b = (0, i.useRef)(null),
        C = (0, eD.K)(() => w),
        j = (0, eD.K)((a) => {
          ;(b.current?.(), (b.current = null))
          let n = (function ({ diffRefs: e, location: t, scrollContainerRef: a, windowZoom: n }) {
            if (t?.domain !== "diff") return null
            let l = a.current,
              r = tY({ diffRefs: e, path: t.path, scrollContainerRef: a })
            if (null == l || null == r) return null
            let i = t1({ element: r, scrollContainer: l })
            return () => {
              let l = a.current,
                r = tY({ diffRefs: e, path: t.path, scrollContainerRef: a })
              if (null == l || null == r) return
              let s = t1({ element: r, scrollContainer: l })
              l.scrollTop += (0, tZ.Ud)(s - i, n)
            }
          })({ diffRefs: e, location: a, scrollContainerRef: t, windowZoom: p })
          null != n &&
            (b.current = (function ({ restoreSearchScroll: e }) {
              let t = 0,
                a = null,
                n = !1,
                l = () => {
                  ;((n = !0), null != a && (window.cancelAnimationFrame(a), (a = null)))
                }
              return (
                !(function r() {
                  if (!n) {
                    if ((e(), (t += 1) >= 12)) return void l()
                    a = window.requestAnimationFrame(r)
                  }
                })(),
                l
              )
            })({ restoreSearchScroll: n }))
        }),
        M = `review:${h ?? "unavailable"}`,
        k = (0, i.useMemo)(() => {
          var n, l, r
          return (
            (n = a),
            (l = e),
            (r = t),
            {
              scrollToFile: async (e, t) => {
                t?.signal?.aborted ||
                  ((0, ew.u8)(n, e),
                  await (0, tQ.JA)(),
                  t?.signal?.aborted ||
                    (tY({ diffRefs: l, path: e, scrollContainerRef: r })?.scrollIntoView({
                      behavior: "auto",
                      block: "center",
                    }),
                    await (0, tQ.JA)()))
              },
              scrollToLocation: async (e, t) => {
                if (t?.signal?.aborted || "path" === e.hunkId) return
                let a = tY({ diffRefs: l, path: e.path, scrollContainerRef: r }),
                  n = a?.closest('[data-thread-find-target="review"]')
                if (null == n || null == a) return
                let i = (0, tH.KO)(a, e.lineStart, e.side)
                null != i &&
                  (n.scrollTo({ behavior: "auto", top: Math.max(0, i.top - (n.clientHeight - i.height) / 2) }),
                  await (0, tQ.JA)())
              },
              getFileContainer: (e) => tY({ diffRefs: l, path: e, scrollContainerRef: r }),
            }
          )
        }, [e, t, a]),
        S = (0, i.useMemo)(
          () =>
            (function ({
              contextId: e,
              getFileEntries: t,
              getGeneratedPaths: a,
              preserveScrollBeforeResultClear: n,
              scrollAdapter: l,
            }) {
              let r
              return {
                ...(0, tX.D)({
                  contextId: e,
                  preserveScrollBeforeResultClear: n,
                  scrollAdapter: l,
                  getFiles: () => {
                    let e = a()
                    return t().flatMap(({ diff: t, gitPath: a, path: n }) => {
                      if (null == t || e.has(a)) return []
                      let { cacheKey: l } = t.metadata,
                        i = r?.get(t)
                      if (null != l && i?.cacheKey === l && i.oldPath === t.oldPath && i.newPath === t.newPath)
                        return { path: n, hunks: i.hunks }
                      let s = (0, tJ.c)(t, n)
                      return (
                        null != l
                          ? (r = r ?? new WeakMap()).set(t, {
                              cacheKey: l,
                              oldPath: t.oldPath,
                              newPath: t.newPath,
                              hunks: s.hunks,
                            })
                          : r?.delete(t),
                        s
                      )
                    })
                  },
                }),
                clearCachedData() {
                  r = void 0
                },
              }
            })({
              contextId: M,
              getFileEntries: () => (0 === o.length ? o : a.get(tL)),
              getGeneratedPaths: C,
              scrollAdapter: k,
              preserveScrollBeforeResultClear: j,
            }),
          [M, k, o, C, j, a],
        ),
        A = (0, i.useMemo)(
          () => ({
            ...S,
            search: async function (e, t) {
              let n = a.get(tL)
              if (
                (function ({
                  cwd: e,
                  fileEntries: t,
                  generatedPathsReady: a,
                  hasUnhandledAttributesFiles: n,
                  isCappedMode: l,
                  repositorySource: r,
                  reviewSummarySource: i,
                }) {
                  return (
                    "cloud" === r ||
                    null == i ||
                    null == e ||
                    (!l && a && !n && t.length > 0 && t.every((e) => "loaded" === e.diffLoadStatus))
                  )
                })({
                  cwd: l,
                  fileEntries: n,
                  generatedPathsReady: y,
                  hasUnhandledAttributesFiles: x,
                  isCappedMode: c,
                  repositorySource: u,
                  reviewSummarySource: h,
                }) ||
                null == l ||
                null == h
              )
                return S.search(e, t)
              let r = a.get(er.Vw),
                i = await (0, ez.V)("git").request({
                  method: "review-search",
                  params: {
                    cwd: (0, ek.DIv)(l),
                    hostConfig: s,
                    operationSource: "review_search",
                    includeUntrackedFiles: null == r,
                    paths: d ? n.map((e) => e.gitPath) : void 0,
                    query: e.query,
                    source: h,
                    ...("branch" === h && null != f ? { baseBranch: f } : {}),
                    ...("commit" === h && null != m ? { commitSha: m } : {}),
                  },
                  signal: t?.signal,
                })
              var o = e,
                p = i,
                g = n
              if ("error" === p.type)
                return {
                  domain: "diff",
                  contextId: o.contextId,
                  query: o.query.trim(),
                  matches: [],
                  totalMatches: 0,
                  isCapped: !1,
                }
              let v = new Map(g.map((e) => [e.gitPath, e]))
              return {
                domain: "diff",
                contextId: o.contextId,
                query: p.query,
                matches: p.matches.map((e, t) => {
                  let a = v.get(e.path)?.path ?? e.path
                  return {
                    id: `diff:${a}:${e.hunkId}:${e.start}`,
                    ordinal: t + 1,
                    location: {
                      domain: "diff",
                      contextId: o.contextId,
                      path: a,
                      hunkId: e.hunkId,
                      lineStart: e.lineStart,
                      lineEnd: e.lineEnd,
                      side: e.side,
                      start: e.start,
                      end: e.end,
                    },
                  }
                }),
                totalMatches: p.totalMatches,
                isCapped: p.isCapped,
              }
            },
          }),
          [l, f, y, d, x, s, S, c, u, h, a, m],
        )
      return (
        (0, i.useEffect)(
          () => (
            a.set(tT.YP, A),
            () => {
              a.get(tT.YP) === A && a.set(tT.YP, null)
            }
          ),
          [A, a],
        ),
        (0, i.useEffect)(() => {
          var e
          return (
            (e = b),
            () => {
              ;(e.current?.(), (e.current = null))
            }
          )
        }, []),
        (0, n.jsx)(n.Fragment, {})
      )
    }
    function t2(e) {
      let t,
        a,
        s,
        o,
        d,
        c = (0, l.c)(13),
        { diffMode: u, interactionOwner: f, onUncommittedFileMounted: m, setTabState: h, tabState: p } = e,
        v = (0, r.gh)(g.GD)
      c[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = new Map()), (c[0] = t)) : (t = c[0])
      let x = (0, i.useRef)(t),
        y = (0, i.useRef)(null),
        w = (0, r.Ul)(em.vN),
        b = (0, r.Ul)(ef.kF)
      return (
        c[1] !== v
          ? ((a = () => (0, ew.CE)(v, y)), (s = [v]), (c[1] = v), (c[2] = a), (c[3] = s))
          : ((a = c[2]), (s = c[3])),
        (0, i.useLayoutEffect)(a, s),
        c[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(t0, { diffRefs: x, scrollContainerRef: y })), (c[4] = o))
          : (o = c[4]),
        c[5] !== u || c[6] !== f || c[7] !== w || c[8] !== b || c[9] !== m || c[10] !== h || c[11] !== p
          ? ((d = (0, n.jsxs)(n.Fragment, {
              children: [
                o,
                (0, n.jsx)(tK, {
                  diffMode: u,
                  diffRefs: x,
                  interactionOwner: f,
                  onUncommittedFileMounted: m,
                  isFileTreeOpen: w,
                  isReviewExpanded: b,
                  scrollContainerRef: y,
                  setTabState: h,
                  tabState: p,
                }),
              ],
            })),
            (c[5] = u),
            (c[6] = f),
            (c[7] = w),
            (c[8] = b),
            (c[9] = m),
            (c[10] = h),
            (c[11] = p),
            (c[12] = d))
          : (d = c[12]),
        d
      )
    }
    var t3 = a("bAhY"),
      t5 = a("zPtR"),
      t4 = a("OSkm"),
      t6 = a("RU3e"),
      t7 = a("gbzJ"),
      t9 = a("aXWg"),
      t8 = a("OReh"),
      ae = a("ReGc")
    let at = (0, r.un)(g.GD, ({ get: e, scope: t }) => {
        if (!e(t9.s) || !e(t6.$O) || !e(t6.cU) || "uncommitted" !== e(y.kZ) || !e(B.c2)) return null
        let a = e(B.YC).data,
          n = (0, B.tZ)(t, "uncommitted")
        return null == a || null == n
          ? null
          : {
              repository: JSON.stringify((0, t8.xy)(a.commonDir, a.root, e(v.c7))),
              queryKey: JSON.stringify(n.queryKey),
            }
      }),
      aa = (0, r.un)(g.GD, ({ get: e }) => {
        let t = e(at)
        if (null == t) return null
        let { data: a, isError: n, isPlaceholderData: l } = e(B.fU, { enabled: !1 })
        if (n || (null != a && "success" !== a.type)) return null
        let r = l || a?.source !== "uncommitted" ? null : a
        return null == r || r.trackedFilesOnly || null != r.untrackedFilesOmitted || 0 !== r.files.length
          ? { ...t, summary: r }
          : null
      })
    function an(e, t) {
      try {
        ;(0, tr.yy)(e, t4.CodexPerformanceSpanCompleted, {
          ...("string" == typeof t ? { reason: t } : { ...t, outcome: "files" }),
          spanName: "changes_uncommitted_visibility",
          completedTs: (0, t5.N3)(Date.now()),
          clientPlatform: (0, t7.$M)(),
          appShell: "owl",
          buildNumber: e.get(ae.a).data?.buildNumber ?? void 0,
          samplingRatio: 1,
        })
      } catch {}
    }
    function al(e) {
      let t,
        a,
        n,
        s = (0, l.c)(6),
        { onPaint: o } = e,
        d = (0, r.gh)(g.GD)
      s[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (s[0] = t)) : (t = s[0])
      let c = (0, r.Ul)(aa, t)
      return (
        s[1] !== o || s[2] !== c || s[3] !== d
          ? ((a = () => {
              if (c?.summary?.trackedFilesOnly && !(c.summary.files.length > 0)) return (0, t3.n)(window, () => o(d, c))
            }),
            (n = [o, c, d]),
            (s[1] = o),
            (s[2] = c),
            (s[3] = d),
            (s[4] = a),
            (s[5] = n))
          : ((a = s[4]), (n = s[5])),
        (0, i.useLayoutEffect)(a, n),
        null
      )
    }
    function ar(e) {
      let t,
        a,
        s,
        o,
        d,
        c = (0, l.c)(33),
        { diffMode: u, interactionOwner: f, setTabState: m, tabState: h } = e,
        p = (0, r.gh)(g.GD),
        v = (0, i.useContext)(et.Gc),
        [x] = (0, i.useState)(as),
        w = v ? x : null
      ;(c[0] !== p || c[1] !== w
        ? ((t = () => w?.watch(p)), (a = [p, w]), (c[0] = p), (c[1] = w), (c[2] = t), (c[3] = a))
        : ((t = c[2]), (a = c[3])),
        (0, i.useLayoutEffect)(t, a))
      let b = (0, r.Ul)(y.kZ),
        C = (0, r.Ul)(en.a),
        k = (0, r.Ul)(el.m6),
        S = (0, r.Ul)(er.AT),
        A = (0, r.Ul)(er.pC),
        _ = (0, r.Ul)(er.kV),
        P = (0, r.Ul)(er.z5),
        N = (0, r.Ul)(er.RT),
        U = (0, r.Ul)(er.q9),
        D = (0, r.Ul)(er._c),
        L = (0, r.Ul)(er.Jl),
        F = (0, r.Ul)(er.Vw)
      c[4] !== P || c[5] !== p
        ? ((s = P
            ? (0, n.jsx)(M.$, {
                color: "secondary",
                size: "toolbar",
                onClick: () => (0, y.Om)(p, "branch"),
                children: (0, n.jsx)(j.A, {
                  id: "codex.review.emptyState.viewBranchDiff",
                  defaultMessage: "View branch diff",
                }),
              })
            : null),
          (c[4] = P),
          (c[5] = p),
          (c[6] = s))
        : (s = c[6])
      let O = s
      if (C && "full" !== k && "remote-thread" !== p.value.routeKind) {
        let e
        return (
          c[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(R.A, {
                className: "h-full flex-1",
                title: (0, n.jsx)(j.A, {
                  id: "codex.review.gitDisabled",
                  defaultMessage: "Git-based diffs are disabled",
                }),
              })),
              (c[7] = e))
            : (e = c[7]),
          e
        )
      }
      if (D) {
        let e
        return (
          c[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(I.LoadingPage, {})), (c[8] = e))
            : (e = c[8]),
          e
        )
      }
      if (A) {
        let e
        return (
          c[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(R.A, {
                className: "h-full flex-1",
                title: (0, n.jsx)(j.A, {
                  id: "codex.review.baseBranchRequired.title",
                  defaultMessage: "Choose a base branch",
                }),
                description: (0, n.jsx)(j.A, {
                  id: "codex.review.baseBranchRequired.description",
                  defaultMessage: "Use the branch selector above to compare changes",
                }),
              })),
              (c[9] = e))
            : (e = c[9]),
          e
        )
      }
      if (S) {
        let e, t, a, l, r
        c[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(j.A, { id: "codex.review.loadFailed.title", defaultMessage: "Couldn't load changes" })),
            (t = (0, n.jsx)(j.A, {
              id: "codex.review.loadFailed.description",
              defaultMessage: "Refresh to try loading the changes again",
            })),
            (c[10] = e),
            (c[11] = t))
          : ((e = c[10]), (t = c[11]))
        let i = !_
        return (
          c[12] !== p
            ? ((a = () => {
                ;(0, B.wl)(p).catch(ai)
              }),
              (c[12] = p),
              (c[13] = a))
            : (a = c[13]),
          c[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, n.jsx)(j.A, { id: "codex.review.loadFailed.retry", defaultMessage: "Retry" })), (c[14] = l))
            : (l = c[14]),
          c[15] !== i || c[16] !== a
            ? ((r = (0, n.jsx)(R.A, {
                className: "h-full flex-1",
                title: e,
                description: t,
                actions: (0, n.jsx)(M.$, { color: "secondary", size: "toolbar", disabled: i, onClick: a, children: l }),
              })),
              (c[15] = i),
              (c[16] = a),
              (c[17] = r))
            : (r = c[17]),
          r
        )
      }
      if (U) {
        let e
        return (
          c[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(T, { className: "flex-1" })), (c[18] = e))
            : (e = c[18]),
          e
        )
      }
      if (N || null != F) {
        let e,
          t = w?.fileMounted
        return (
          c[19] !== u || c[20] !== f || c[21] !== m || c[22] !== t || c[23] !== h
            ? ((e = (0, n.jsx)(ea.U, {
                children: (0, n.jsx)(t2, {
                  diffMode: u,
                  interactionOwner: f,
                  onUncommittedFileMounted: t,
                  setTabState: m,
                  tabState: h,
                }),
              })),
              (c[19] = u),
              (c[20] = f),
              (c[21] = m),
              (c[22] = t),
              (c[23] = h),
              (c[24] = e))
            : (e = c[24]),
          e
        )
      }
      if (L) {
        let e,
          t = "staged" === b ? "staged" : "unstaged"
        return (
          c[25] !== O || c[26] !== t
            ? ((e = (0, n.jsx)(eu, { actions: O, stageFilter: t })), (c[25] = O), (c[26] = t), (c[27] = e))
            : (e = c[27]),
          e
        )
      }
      return (
        c[28] !== w
          ? ((o = null == w ? null : (0, n.jsx)(al, { onPaint: w.emptyPainted })), (c[28] = w), (c[29] = o))
          : (o = c[29]),
        c[30] !== O || c[31] !== o
          ? ((d = (0, n.jsx)(ec, { className: "flex-1", actions: O, emptyTitlePaint: o })),
            (c[30] = O),
            (c[31] = o),
            (c[32] = d))
          : (d = c[32]),
        d
      )
    }
    function ai() {}
    function as() {
      let e, t, a, n
      return (
        (e = null),
        (t = null),
        (a = null),
        (n = () => {
          ;((t = null), a?.cancel(), (a = null))
        }),
        {
          watch(a) {
            let l = a.watch(({ get: l }) => {
              let r = l(at)?.repository ?? null
              if (r !== (e?.repository ?? null)) {
                n()
                let t = (e = null == r ? null : { repository: r, falseEmptyLogged: !1 })
                null != t &&
                  queueMicrotask(() => {
                    e === t && an(a, "eligible_view")
                  })
              }
              let i = l(aa, { enabled: !1 })
              null != t && t.queryKey !== i?.queryKey && n()
            })
            return () => {
              ;(l(), (e = null), n())
            }
          },
          emptyPainted(a, n) {
            let l = a.get(aa, { enabled: !1 })
            e?.repository !== n.repository ||
              e.falseEmptyLogged ||
              l !== n ||
              ((e.falseEmptyLogged = !0),
              (t = { queryKey: n.queryKey, time: performance.now(), recoveryCount: a.get(B.Ll) }),
              an(a, "tracked_only_empty"))
          },
          fileMounted(e, n) {
            let l = t
            if (null != l) {
              if (null != a) {
                a.rows = n
                return
              }
              a = {
                rows: n,
                cancel: (0, t3.n)(window, () => {
                  if (t !== l) return
                  let n = a?.rows.size
                  a = null
                  let r = e.get(aa, { enabled: !1 })
                  n &&
                    r?.queryKey === l.queryKey &&
                    r.summary?.files.length &&
                    ((t = null),
                    l.recoveryCount === e.get(B.Ll) &&
                      an(e, { reason: "automatic_files_painted", durationMs: performance.now() - l.time }))
                }),
              }
            }
          },
        }
      )
    }
    var ao = a("MOsl"),
      ad = a("kHmz"),
      ac = a("P6qQ"),
      au = a("QaKP")
    function af() {
      let e,
        t,
        a,
        i,
        s,
        o,
        d,
        c,
        u,
        f,
        m,
        h = (0, l.c)(44),
        p = (0, r.gh)(g.GD),
        x = (0, r.Ul)(ef.kF),
        w = (0, r.Ul)(ey.rN),
        b = (0, r.Ul)(y.kZ),
        C = (0, r.Ul)(w ? null : tO),
        M = (0, r.Ul)(ew.WV),
        k = (0, r.Ul)(ew.X4),
        S = (0, r.Ul)(er.mh),
        A = (0, r.Ul)(v.threadHostId$),
        { entries: I, hasLinguistGeneratedAttributes: _ } = (0, r.Ul)(t$),
        P = "branch" === b && 0 === I.length,
        N = (0, r.Ul)(P ? er._c : null),
        R = (0, r.Ul)(P ? er.RT : null)
      h[0] !== p.value ? ((e = (0, g.n1)(p.value)), (h[0] = p.value), (h[1] = e)) : (e = h[1])
      let U = e,
        D = "local-thread" === p.value.routeKind ? p.value.conversationId : null
      h[2] !== U ? ((t = U ?? (0, ej.w9)({ entrypoint: "home" })), (h[2] = U), (h[3] = t)) : (t = h[3])
      let T = "last-turn" !== b
      h[4] !== D || h[5] !== t || h[6] !== T
        ? ((a = { conversationId: t, enablePullRequestComments: T, localConversationId: D }),
          (h[4] = D),
          (h[5] = t),
          (h[6] = T),
          (h[7] = a))
        : (a = h[7])
      let { commentProps: L } = (0, eC.i)(a)
      e: {
        let e,
          t,
          a = L.readonlyComments,
          n = L.modelComments
        if ((null == a || 0 === a.length) && 0 === n.length) {
          i = void 0
          break e
        }
        ;(h[8] !== a ? ((e = a ?? []), (h[8] = a), (h[9] = e)) : (e = h[9]),
          h[10] !== S || h[11] !== I || h[12] !== n || h[13] !== e
            ? ((t = (0, ac.Xw)({ comments: [...n, ...e], filePaths: I.map(ah), workspaceRoot: S })),
              (h[10] = S),
              (h[11] = I),
              (h[12] = n),
              (h[13] = e),
              (h[14] = t))
            : (t = h[14]),
          (i = t))
      }
      let F = i,
        O = (C?.location.domain === "diff" ? C.location.path : void 0) ?? M
      h[15] !== I || h[16] !== O
        ? ((s = I.some((e) => e.path === O) ? O : I[0]?.path), (h[15] = I), (h[16] = O), (h[17] = s))
        : (s = h[17])
      let B = s
      h[18] !== I || h[19] !== w || h[20] !== p
        ? ((o = (e) => {
            I.some((t) => t.path === e) &&
              requestAnimationFrame(() => {
                ;((0, ew.u8)(p, e), w || (0, ew.xg)(p, e))
              })
          }),
          (h[18] = I),
          (h[19] = w),
          (h[20] = p),
          (h[21] = o))
        : (o = h[21])
      let E = o
      return (
        h[22] !== p ? ((d = (e) => (0, ew.X6)(p, e)), (h[22] = p), (h[23] = d)) : (d = h[23]),
        h[24] !== k || h[25] !== d
          ? ((c = { inputId: "review-changed-files-search", onQueryChange: d, searchQuery: k }),
            (h[24] = k),
            (h[25] = d),
            (h[26] = c))
          : (c = h[26]),
        h[27] !== _ ? ((u = _ ? (0, n.jsx)(au.q, {}) : null), (h[27] = _), (h[28] = u)) : (u = h[28]),
        h[29] !== B ||
        h[30] !== F ||
        h[31] !== S ||
        h[32] !== I ||
        h[33] !== R ||
        h[34] !== A ||
        h[35] !== P ||
        h[36] !== x ||
        h[37] !== E ||
        h[38] !== N
          ? ((f = N
              ? (0, n.jsx)(ao.R, {
                  children: (0, n.jsx)(j.A, {
                    id: "codex.review.fileTree.loading",
                    defaultMessage: "Loading changed files\u2026",
                  }),
                })
              : (!P || R) &&
                (0, n.jsx)(ex.J, {
                  activePath: B,
                  allowSelectingActivePath: !0,
                  commentCountByPath: F,
                  cwd: S,
                  hostId: A,
                  onSelectPath: E,
                  entries: I.map(am),
                  reserveBottomPadding: x,
                })),
            (h[29] = B),
            (h[30] = F),
            (h[31] = S),
            (h[32] = I),
            (h[33] = R),
            (h[34] = A),
            (h[35] = P),
            (h[36] = x),
            (h[37] = E),
            (h[38] = N),
            (h[39] = f))
          : (f = h[39]),
        h[40] !== f || h[41] !== c || h[42] !== u
          ? ((m = (0, n.jsx)("div", {
              className: "h-full min-h-0 w-full",
              children: (0, n.jsx)(ad.b, { search: c, filterActions: u, children: f }),
            })),
            (h[40] = f),
            (h[41] = c),
            (h[42] = u),
            (h[43] = m))
          : (m = h[43]),
        m
      )
    }
    function am(e) {
      let { path: t, displayPath: a, changeKind: n, summary: l, diff: r } = e
      return {
        path: t,
        displayPath: a,
        changeKind: n,
        additions: l?.additions ?? r?.additions ?? null,
        deletions: l?.deletions ?? r?.deletions ?? null,
      }
    }
    function ah(e) {
      return e.path
    }
    var ap = a("U5mJ"),
      ag = a("MM0V")
    function av(e) {
      let t,
        a,
        r,
        i = (0, l.c)(4),
        { onRefresh: s } = e
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)("span", {
              className: "select-none",
              children: (0, n.jsx)(j.A, {
                id: "codex.review.fileWatchLimited.message",
                defaultMessage: "Some files can't be watched for changes. Refresh to update this view.",
              }),
            })),
            (i[0] = t))
          : (t = i[0]),
        i[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(j.A, { id: "codex.review.fileWatchLimited.refresh", defaultMessage: "Refresh" })),
            (i[1] = a))
          : (a = i[1]),
        i[2] !== s
          ? ((r = (0, n.jsx)(ag.l, {
              ariaLive: "polite",
              role: "status",
              density: "compact",
              type: "infoAccent",
              content: t,
              onPrimaryCtaClick: s,
              primaryCtaText: a,
            })),
            (i[2] = s),
            (i[3] = r))
          : (r = i[3]),
        r
      )
    }
    var ax = a("uiKy"),
      ay = a("h3pg"),
      aw = a("WSJD"),
      ab = a("A3UP")
    let aC = ["branch", "uncommitted"]
    function aj() {
      let e,
        t,
        a,
        i,
        c,
        u,
        f,
        m,
        h,
        p,
        w,
        b,
        C,
        j,
        M,
        k,
        S,
        A,
        I,
        _,
        P,
        N,
        R,
        U,
        D,
        T,
        E,
        G,
        q = (0, l.c)(125),
        z = (0, r.gh)(g.GD),
        V = (0, s.A)(),
        $ = (0, r._U)(J.JW, "1689820618"),
        W = (0, r.Ul)(y.kZ),
        K = (0, r.Ul)(B.mI),
        Z = (0, r.Ul)(B.k),
        Q = (0, r.Ul)(B.l1),
        H = "local-thread" === z.value.routeKind ? z.value.conversationId : null,
        X = (0, r.Ul)(el.m6),
        Y = (0, r.Ul)(B.RP),
        ee = (0, r.Ul)(v.lA),
        et = "chatgpt-thread" === z.value.routeKind,
        ea = (0, r.Ul)(B.YC).data,
        en = (0, r.Ul)(B.Np)
      q[0] !== Q || q[1] !== ee || q[2] !== ea || q[3] !== et || q[4] !== X
        ? ((e =
            et || null == Q || ("full" === X && null == ea)
              ? null
              : (0, ta._)({ hostId: ee.id, root: ea?.root ?? (0, ek.PUz)(Q), cwd: (0, ek.DIv)(Q) })),
          (q[0] = Q),
          (q[1] = ee),
          (q[2] = ea),
          (q[3] = et),
          (q[4] = X),
          (q[5] = e))
        : (e = q[5])
      let ei = e,
        es = (0, r.Ul)(d.aS),
        eo = (0, r.Ul)(ef.kF),
        ed = (0, r.Ul)(d.jb),
        ec = (0, r.Ul)(d.MN),
        eu = (0, r.Ul)(d.ls),
        em = (0, r.Ul)(d.Ev),
        eh = (0, r.Ul)(d.S),
        ep = (0, r.Ul)(tp.H1),
        eg = (0, r.Ul)(e8.hv)
      q[6] !== z
        ? ((t = (e) => {
            ;(0, e8.js)(z, e)
          }),
          (q[6] = z),
          (q[7] = t))
        : (t = q[7])
      let ev = (0, eD.K)(t),
        ex = (0, ax.g)(ev, "review")
      q[8] !== ex || q[9] !== eg
        ? ((a = () => {
            ex(!eg)
          }),
          (q[8] = ex),
          (q[9] = eg),
          (q[10] = a))
        : (a = q[10])
      let ey = a,
        ew = (0, r.Ul)(B.Jw),
        eb = (0, r.Ul)(B.Tk),
        eC = (0, r.Ul)(B.OX),
        ej = (0, r.Ul)(er.y9),
        eM = (0, r.Ul)(er.DA),
        eS = (0, r.Ul)(er.kV),
        eA = (0, r.Ul)(er.pC),
        eI = (0, r.Ul)(B.yw),
        e_ = eM && null != eC,
        eP = Z.data ?? null,
        eN = (0, r.Ul)(B.gg),
        eR = K.data ?? null
      q[11] !== eR ? ((i = (0, B.jR)(eR)), (q[11] = eR), (q[12] = i)) : (i = q[12])
      let eU = i,
        eT = (0, r.Ul)(B.sw) ?? eU
      q[13] !== eP || q[14] !== eN.data?.branches || q[15] !== eN.data?.branches.filter
        ? ((c = eN.data?.branches.filter((e) => e !== eP)),
          (q[13] = eP),
          (q[14] = eN.data?.branches),
          (q[15] = eN.data?.branches.filter),
          (q[16] = c))
        : (c = q[16])
      let eL = c,
        eF = $ && "cloud" !== eI && "commit" === W && null != eb
      ;(q[17] !== z
        ? ((u = (e) => {
            z.set(d.aS, e)
          }),
          (q[17] = z),
          (q[18] = u))
        : (u = q[18]),
        q[19] !== z || q[20] !== ed
          ? ((f = () => {
              z.set(d.jb, !ed)
            }),
            (q[19] = z),
            (q[20] = ed),
            (q[21] = f))
          : (f = q[21]),
        q[22] !== eu || q[23] !== z
          ? ((m = () => {
              z.set(d.ls, !eu)
            }),
            (q[22] = eu),
            (q[23] = z),
            (q[24] = m))
          : (m = q[24]),
        q[25] !== ec || q[26] !== z
          ? ((h = () => {
              z.set(d.MN, !ec)
            }),
            (q[25] = ec),
            (q[26] = z),
            (q[27] = h))
          : (h = q[27]),
        q[28] !== em || q[29] !== z
          ? ((p = () => {
              z.set(d.Ev, !em)
            }),
            (q[28] = em),
            (q[29] = z),
            (q[30] = p))
          : (p = q[30]),
        q[31] !== z || q[32] !== eh
          ? ((w = () => {
              z.set(d.S, !eh)
            }),
            (q[31] = z),
            (q[32] = eh),
            (q[33] = w))
          : (w = q[33]),
        q[34] !== ep || q[35] !== z
          ? ((b = () => {
              z.set(tp.H1, !ep)
            }),
            (q[34] = ep),
            (q[35] = z),
            (q[36] = b))
          : (b = q[36]),
        q[37] !== eg ||
        q[38] !== ec ||
        q[39] !== eu ||
        q[40] !== ep ||
        q[41] !== es ||
        q[42] !== em ||
        q[43] !== p ||
        q[44] !== w ||
        q[45] !== b ||
        q[46] !== u ||
        q[47] !== f ||
        q[48] !== m ||
        q[49] !== h ||
        q[50] !== ey ||
        q[51] !== eh ||
        q[52] !== ed
          ? ((C = {
              diffMode: es,
              onSelectDiffMode: u,
              wrap: ed,
              onToggleWrap: f,
              hideWhitespace: eu,
              onToggleHideWhitespace: m,
              hideImports: ec,
              onToggleHideImports: h,
              expanded: eg,
              onToggleExpanded: ey,
              richPreviewEnabled: em,
              onToggleRichPreview: p,
              wordDiffsEnabled: eh,
              onToggleWordDiffs: w,
              loadFullFilesEnabled: ep,
              onToggleLoadFullFiles: b,
            }),
            (q[37] = eg),
            (q[38] = ec),
            (q[39] = eu),
            (q[40] = ep),
            (q[41] = es),
            (q[42] = em),
            (q[43] = p),
            (q[44] = w),
            (q[45] = b),
            (q[46] = u),
            (q[47] = f),
            (q[48] = m),
            (q[49] = h),
            (q[50] = ey),
            (q[51] = eh),
            (q[52] = ed),
            (q[53] = C))
          : (C = q[53]))
      let eO = C
      q[54] !== z
        ? ((j = (e) => {
            ;(0, B.Ho)(z, (0, g.n1)(z.value), e)
          }),
          (q[54] = z),
          (q[55] = j))
        : (j = q[55])
      let eB = j
      q[56] !== eM ||
      q[57] !== Q ||
      q[58] !== ew ||
      q[59] !== ee ||
      q[60] !== V ||
      q[61] !== eC ||
      q[62] !== z ||
      q[63] !== eb
        ? ((M = function () {
            eM &&
              null != Q &&
              null != eC &&
              (async () => {
                let e = await (0, ez.V)("git")
                  .request({
                    method: "review-patch",
                    params: {
                      cwd: (0, ek.DIv)(Q),
                      source: eC,
                      operationSource: "review_model",
                      ...("branch" === eC && null != ew ? { baseBranch: ew } : {}),
                      ...("commit" === eC && null != eb ? { commitSha: eb } : {}),
                      hostConfig: ee,
                    },
                  })
                  .catch(aM)
                if (e?.diff.type !== "success")
                  return void z
                    .get(o.Id)
                    .danger(
                      V.formatMessage({
                        id: "codex.review.copyGitApplyCommand.patchError",
                        defaultMessage: "Couldn\u2019t generate git apply command",
                      }),
                      { errorAnalytics: { toastId: "codex.review.copyGitApplyCommand.patchError" } },
                    )
                let t = ` (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
${e.diff.unifiedDiff} 
EOF
)`
                ;(await (0, x.lW)(t)) &&
                  z
                    .get(o.Id)
                    .success(
                      V.formatMessage({
                        id: "codex.review.copyGitApplyCommand.toast",
                        defaultMessage: "Copied git apply command to the clipboard",
                      }),
                    )
              })()
          }),
          (q[56] = eM),
          (q[57] = Q),
          (q[58] = ew),
          (q[59] = ee),
          (q[60] = V),
          (q[61] = eC),
          (q[62] = z),
          (q[63] = eb),
          (q[64] = M))
        : (M = q[64])
      let eE = M
      q[65] !== z
        ? ((k = () => {
            ;(0, B.wl)(z, { refreshMarkdownPreviews: !0 })
          }),
          (q[65] = z),
          (q[66] = k))
        : (k = q[66])
      let eG = k,
        eq = et ? aC : void 0,
        eV = "cloud" === eI ? void 0 : W,
        e$ = "last-turn-only" === X
      ;(q[67] !== eI || q[68] !== z
        ? ((S = "cloud" === eI ? void 0 : (e) => (0, y.Om)(z, e)), (q[67] = eI), (q[68] = z), (q[69] = S))
        : (S = q[69]),
        q[70] !== eI || q[71] !== z
          ? ((A =
              "cloud" === eI
                ? void 0
                : (e) => {
                    ;(0, B.uC)(z, e)
                  }),
            (q[70] = eI),
            (q[71] = z),
            (q[72] = A))
          : (A = q[72]),
        q[73] !== Q || q[74] !== ea?.root || q[75] !== en
          ? ((I =
              en.find((e) => {
                let { root: t } = e
                return t === Q
              })?.root ?? ea?.root),
            (q[73] = Q),
            (q[74] = ea?.root),
            (q[75] = en),
            (q[76] = I))
          : (I = q[76]),
        q[77] !== eo ||
        q[78] !== en ||
        q[79] !== eI ||
        q[80] !== ej ||
        q[81] !== eq ||
        q[82] !== eV ||
        q[83] !== e$ ||
        q[84] !== S ||
        q[85] !== A ||
        q[86] !== I
          ? ((_ = (0, n.jsx)(F.h, {
              availableDiffFilters: eq,
              snapshotMetrics: ej,
              diffFilter: eV,
              gitReviewDisabled: e$,
              isReviewExpanded: eo,
              onSelectDiffFilter: S,
              onSelectRepositorySource: A,
              repositories: en,
              reviewSource: eI,
              selectedRepositoryRoot: I,
            })),
            (q[77] = eo),
            (q[78] = en),
            (q[79] = eI),
            (q[80] = ej),
            (q[81] = eq),
            (q[82] = eV),
            (q[83] = e$),
            (q[84] = S),
            (q[85] = A),
            (q[86] = I),
            (q[87] = _))
          : (_ = q[87]),
        q[88] !== eN
          ? ((P = () => {
              eN.refetch()
            }),
            (q[88] = eN),
            (q[89] = P))
          : (P = q[89]),
        q[90] !== eL ||
        q[91] !== eP ||
        q[92] !== eU ||
        q[93] !== W ||
        q[94] !== eB ||
        q[95] !== eA ||
        q[96] !== eN.isError ||
        q[97] !== eN.isLoading ||
        q[98] !== eI ||
        q[99] !== P ||
        q[100] !== eT
          ? ((N = (0, n.jsx)(F.q, {
              baseBranchOptions: eL,
              currentBranch: eP,
              defaultTargetBranch: eU,
              diffFilter: W,
              isBaseBranchOptionsError: eN.isError,
              isBaseBranchOptionsLoading: eN.isLoading,
              needsBaseBranch: eA,
              onRefetchBaseBranchOptions: P,
              onSelectBaseBranch: eB,
              reviewSource: eI,
              targetBranch: eT,
            })),
            (q[90] = eL),
            (q[91] = eP),
            (q[92] = eU),
            (q[93] = W),
            (q[94] = eB),
            (q[95] = eA),
            (q[96] = eN.isError),
            (q[97] = eN.isLoading),
            (q[98] = eI),
            (q[99] = P),
            (q[100] = eT),
            (q[101] = N))
          : (N = q[101]))
      let eW = !e_,
        eK = !eS,
        eZ = "full" === X && "cloud" !== eI
      return (
        q[102] !== eE || q[103] !== eG || q[104] !== eO || q[105] !== eW || q[106] !== eK || q[107] !== eZ
          ? ((R = (0, n.jsx)(O.lF, {
              copyGitApplyCommandDisabled: eW,
              diffControls: eO,
              onClickCopyGitApplyCommand: eE,
              onRefreshGitQueries: eG,
              refreshGitQueriesDisabled: eK,
              showCopyGitApplyCommand: !0,
              showRefreshGitQueries: eZ,
            })),
            (q[102] = eE),
            (q[103] = eG),
            (q[104] = eO),
            (q[105] = eW),
            (q[106] = eK),
            (q[107] = eZ),
            (q[108] = R))
          : (R = q[108]),
        q[109] !== H || q[110] !== Y || q[111] !== ei || q[112] !== X
          ? ((U =
              null != ei
                ? (0, n.jsx)(
                    ay.u,
                    {
                      conversationId: H,
                      codexWorktree: Y,
                      deferQueries: "last-turn-only" === X,
                      surface: "review-toolbar",
                      target: ei,
                    },
                    ei.root,
                  )
                : null),
            (q[109] = H),
            (q[110] = Y),
            (q[111] = ei),
            (q[112] = X),
            (q[113] = U))
          : (U = q[113]),
        q[114] !== R || q[115] !== U
          ? ((D = (0, n.jsxs)(n.Fragment, { children: [R, U] })), (q[114] = R), (q[115] = U), (q[116] = D))
          : (D = q[116]),
        q[117] === Symbol.for("react.memo_cache_sentinel") ? ((T = (0, n.jsx)(ak, {})), (q[117] = T)) : (T = q[117]),
        q[118] !== eF ? ((E = eF ? (0, n.jsx)(aw.N, {}) : null), (q[118] = eF), (q[119] = E)) : (E = q[119]),
        q[120] !== _ || q[121] !== N || q[122] !== D || q[123] !== E
          ? ((G = (0, n.jsx)(L.s, {
              sourceControls: _,
              sourceDetails: N,
              actions: D,
              paneControls: T,
              selectedCommitSubject: E,
            })),
            (q[120] = _),
            (q[121] = N),
            (q[122] = D),
            (q[123] = E),
            (q[124] = G))
          : (G = q[124]),
        G
      )
    }
    function aM() {
      return null
    }
    function ak() {
      let e,
        t = (0, l.c)(2),
        { filterGenerated: a } = (0, r.Ul)(t$)
      return (t[0] !== a ? ((e = (0, n.jsx)(ab.B, { hasActiveFilter: a })), (t[0] = a), (t[1] = e)) : (e = t[1]), e)
    }
    var aS = a("yX0s"),
      aA = a("UxN3"),
      aI = a("lCMb"),
      a_ = a("gZbc")
    function aP(e) {
      let t,
        a,
        r,
        i,
        o,
        d,
        c,
        u,
        f = (0, l.c)(18),
        { onNextFile: m, onPreviousFile: h } = e,
        p = (0, s.A)()
      ;(f[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, n.jsx)("span", {
            className: "select-none",
            children: (0, n.jsx)(j.A, {
              id: "codex.review.largeDiff.banner",
              defaultMessage: "This diff is large, showing one file at a time",
            }),
          })),
          (f[0] = t))
        : (t = f[0]),
        f[1] !== p
          ? ((a = p.formatMessage({ id: "codex.review.largeDiff.previousFile", defaultMessage: "Previous file" })),
            (f[1] = p),
            (f[2] = a))
          : (a = f[2]))
      let g = null == h
      ;(f[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, n.jsx)(aA.bF, {
            "aria-hidden": !0,
            className: "rotate-180",
            asset16: aS.q,
            legacyIcon: aI.A,
            legacyClassName: "icon-2xs",
          })),
          (f[3] = r))
        : (r = f[3]),
        f[4] !== h || f[5] !== a || f[6] !== g
          ? ((i = (0, n.jsx)(M.$, {
              "aria-label": a,
              color: "ghostActive",
              disabled: g,
              onClick: h,
              size: "composerSm",
              uniform: !0,
              children: r,
            })),
            (f[4] = h),
            (f[5] = a),
            (f[6] = g),
            (f[7] = i))
          : (i = f[7]),
        f[8] !== p
          ? ((o = p.formatMessage({ id: "codex.review.largeDiff.nextFile", defaultMessage: "Next file" })),
            (f[8] = p),
            (f[9] = o))
          : (o = f[9]))
      let v = null == m
      return (
        f[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)(aA.bF, {
              "aria-hidden": !0,
              asset16: aS.q,
              legacyIcon: aI.A,
              legacyClassName: "icon-2xs",
            })),
            (f[10] = d))
          : (d = f[10]),
        f[11] !== m || f[12] !== o || f[13] !== v
          ? ((c = (0, n.jsx)(M.$, {
              "aria-label": o,
              color: "ghostActive",
              disabled: v,
              onClick: m,
              size: "composerSm",
              uniform: !0,
              children: d,
            })),
            (f[11] = m),
            (f[12] = o),
            (f[13] = v),
            (f[14] = c))
          : (c = f[14]),
        f[15] !== i || f[16] !== c
          ? ((u = (0, n.jsx)(ag.l, {
              Icon: a_.A,
              ariaLive: "polite",
              role: "status",
              type: "infoAccent",
              content: t,
              customCtas: (0, n.jsxs)(n.Fragment, { children: [i, c] }),
            })),
            (f[15] = i),
            (f[16] = c),
            (f[17] = u))
          : (u = f[17]),
        u
      )
    }
    var aN = a("Sezd"),
      aR = a("JNtf"),
      aU = a("mUDD")
    function aD() {
      let e,
        t,
        a,
        i,
        s,
        o,
        d,
        c,
        u,
        f,
        m,
        h,
        p,
        v,
        x = (0, l.c)(36),
        y = (0, r.gh)(g.GD),
        w = (0, r.Ul)(tx),
        b = (0, r.Ul)(w ? tg : null),
        C = b?.params.action === "delete",
        k = (0, r.Ul)(ty)
      return (
        x[0] !== y
          ? ((e = (e) => {
              e || tw(y)
            }),
            (x[0] = y),
            (x[1] = e))
          : (e = x[1]),
        x[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = { "aria-describedby": void 0 }), (x[2] = t))
          : (t = x[2]),
        x[3] !== y
          ? ((a = (e) => {
              ;(e.preventDefault(),
                (async function (e) {
                  e.get(tv) ||
                    (!(function (e) {
                      if (null == e.get(tg)) {
                        ;(e.set(tx, !1), tb(e), e.set(ty, !1))
                        return
                      }
                      ;(e.get(ty) && e.set(tp.JT, !0), e.set(tx, !1), e.set(ty, !1))
                    })(e),
                    null != e.get(tg) && (await tj(e)))
                })(y))
            }),
            (x[3] = y),
            (x[4] = a))
          : (a = x[4]),
        x[5] !== C
          ? ((i = (0, n.jsx)(aR.L3, {
              children: C
                ? (0, n.jsx)(j.A, {
                    id: "codex.review.deleteFile.confirmationTitle",
                    defaultMessage: "Delete untracked file?",
                  })
                : (0, n.jsx)(j.A, { id: "codex.review.revertDialog.title", defaultMessage: "Revert changes?" }),
            })),
            (x[5] = C),
            (x[6] = i))
          : (i = x[6]),
        x[7] !== C || x[8] !== b
          ? ((s = C
              ? (0, n.jsx)(j.A, {
                  id: "codex.review.deleteFile.confirmationMessage",
                  defaultMessage: "This permanently deletes {path} from disk",
                  values: { path: b.params.path },
                })
              : (0, n.jsx)(j.A, {
                  id: "codex.review.revertDialog.message",
                  defaultMessage: "This action removes all of these changes.",
                })),
            (x[7] = C),
            (x[8] = b),
            (x[9] = s))
          : (s = x[9]),
        x[10] !== i || x[11] !== s
          ? ((o = (0, n.jsx)(aU.OO, { children: (0, n.jsx)(aU.c7, { title: i, subtitle: s }) })),
            (x[10] = i),
            (x[11] = s),
            (x[12] = o))
          : (o = x[12]),
        x[13] !== C || x[14] !== k || x[15] !== y
          ? ((d = C
              ? null
              : (0, n.jsx)(aU.OO, {
                  children: (0, n.jsxs)("label", {
                    className: "relative flex items-center gap-2 text-default",
                    children: [
                      (0, n.jsx)(aN.S, {
                        checked: k,
                        onCheckedChange: (e) => {
                          y.set(ty, e)
                        },
                      }),
                      (0, n.jsx)(j.A, { id: "codex.review.revertDialog.skip", defaultMessage: "Don't ask again" }),
                    ],
                  }),
                })),
            (x[13] = C),
            (x[14] = k),
            (x[15] = y),
            (x[16] = d))
          : (d = x[16]),
        x[17] !== y
          ? ((c = () => {
              tw(y)
            }),
            (x[17] = y),
            (x[18] = c))
          : (c = x[18]),
        x[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)(j.A, { id: "codex.review.revertDialog.cancel", defaultMessage: "Cancel" })), (x[19] = u))
          : (u = x[19]),
        x[20] !== c
          ? ((f = (0, n.jsx)(M.$, { color: "ghost", type: "button", onClick: c, children: u })),
            (x[20] = c),
            (x[21] = f))
          : (f = x[21]),
        x[22] !== C
          ? ((m = (0, n.jsx)(M.$, {
              autoFocus: !0,
              color: "danger",
              type: "submit",
              children: C
                ? (0, n.jsx)(j.A, { id: "codex.review.deleteFile.confirm", defaultMessage: "Delete" })
                : (0, n.jsx)(j.A, { id: "codex.review.revertDialog.confirm", defaultMessage: "Confirm" }),
            })),
            (x[22] = C),
            (x[23] = m))
          : (m = x[23]),
        x[24] !== m || x[25] !== f
          ? ((h = (0, n.jsx)(aU.OO, { children: (0, n.jsxs)(aU.Es, { children: [f, m] }) })),
            (x[24] = m),
            (x[25] = f),
            (x[26] = h))
          : (h = x[26]),
        x[27] !== h || x[28] !== a || x[29] !== o || x[30] !== d
          ? ((p = (0, n.jsxs)(aU.R4, { as: "form", onSubmit: a, children: [o, d, h] })),
            (x[27] = h),
            (x[28] = a),
            (x[29] = o),
            (x[30] = d),
            (x[31] = p))
          : (p = x[31]),
        x[32] !== w || x[33] !== e || x[34] !== p
          ? ((v = (0, n.jsx)(aR.lG, { open: w, onOpenChange: e, contentProps: t, children: p })),
            (x[32] = w),
            (x[33] = e),
            (x[34] = p),
            (x[35] = v))
          : (v = x[35]),
        v
      )
    }
    var aT = a("v7qY"),
      aL = a("Q2Qp"),
      aF = a("dN0a")
    function aO(e) {
      let t,
        a,
        r,
        i = (0, l.c)(8),
        { children: s, className: o, style: d } = e
      return (
        i[0] !== o ? ((t = (0, N.A)("pointer-events-none -translate-x-1/2", o)), (i[0] = o), (i[1] = t)) : (t = i[1]),
        i[2] !== s
          ? ((a = (0, n.jsx)("div", {
              className:
                "pointer-events-auto flex items-center justify-center gap-2 rounded-full bg-surface-elevated-secondary px-2 py-1 shadow-lg ring-[0.5px] ring-border",
              children: s,
            })),
            (i[2] = s),
            (i[3] = a))
          : (a = i[3]),
        i[4] !== d || i[5] !== t || i[6] !== a
          ? ((r = (0, n.jsx)("div", { className: t, style: d, children: a })),
            (i[4] = d),
            (i[5] = t),
            (i[6] = a),
            (i[7] = r))
          : (r = i[7]),
        r
      )
    }
    function aB(e) {
      let t,
        a,
        s,
        o = (0, l.c)(8),
        { children: d, expandedActionsPortalTarget: c } = e,
        u = (0, r.Ul)(ef.kF),
        f = (0, i.useContext)(aL.H)
      if (null == d) return null
      if (!u) {
        let e
        return (
          o[0] !== d
            ? ((e = (0, n.jsx)(aO, { className: "absolute bottom-[20px] left-1/2 z-30", children: d })),
              (o[0] = d),
              (o[1] = e))
            : (e = o[1]),
          e
        )
      }
      ;(o[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { bottom: `calc(var(${aF.E1}, 0px) + 8px)` }), (o[2] = t))
        : (t = o[2]),
        o[3] !== d
          ? ((a = (0, n.jsx)(aO, { className: "absolute left-1/2 z-40", style: t, children: d })),
            (o[3] = d),
            (o[4] = a))
          : (a = o[4]))
      let m = c ?? f ?? document.body
      return (
        o[5] !== a || o[6] !== m ? ((s = (0, aT.createPortal)(a, m)), (o[5] = a), (o[6] = m), (o[7] = s)) : (s = o[7]),
        s
      )
    }
    var aE = a("IDFw"),
      aG = a("nDgk"),
      aq = a("ozCc"),
      az = a("UxxA"),
      aV = a("ukmp"),
      a$ = a("mKYu")
    function aW() {
      let e,
        t,
        a,
        i,
        s,
        o,
        d = (0, l.c)(19),
        c = (0, r.gh)(g.GD),
        u = (0, r.Ul)(y.kZ),
        f = (0, r.Ul)(er.RT),
        m = (0, r.Ul)(tv),
        h = (0, r.Ul)(B._8),
        p = (0, r.Ul)(B.fU)
      if (!(0, r.Ul)(er.Jl) || !(0, y.cd)(u) || !f) return null
      let v = "staged" === u,
        x = m || h || p.isFetching || p.isError
      return (
        d[0] !== x || d[1] !== v || d[2] !== c
          ? ((e = v
              ? null
              : (0, n.jsxs)(M.$, {
                  className: "min-w-0 gap-2",
                  color: "ghostTertiary",
                  disabled: x,
                  onClick: (e) => {
                    ;(e.stopPropagation(), tC(c, { action: "revert", path: "", scope: "section" }))
                  },
                  children: [
                    (0, n.jsx)(aA.bF, {
                      "aria-hidden": !1,
                      legacyIcon: a$.A,
                      asset16: aE.K,
                      legacyClassName: "icon-2xs",
                    }),
                    (0, n.jsx)("span", {
                      className: "min-w-0 truncate",
                      children: (0, n.jsx)(j.A, {
                        id: "diff.actionButton.revertSectionLabel",
                        defaultMessage: "Revert all",
                      }),
                    }),
                  ],
                })),
            (d[0] = x),
            (d[1] = v),
            (d[2] = c),
            (d[3] = e))
          : (e = d[3]),
        d[4] !== v || d[5] !== c
          ? ((t = (e) => {
              ;(e.stopPropagation(), tC(c, { action: v ? "unstage" : "stage", path: "", scope: "section" }))
            }),
            (d[4] = v),
            (d[5] = c),
            (d[6] = t))
          : (t = d[6]),
        d[7] !== v
          ? ((a = v
              ? (0, n.jsx)(aA.bF, { "aria-hidden": !1, legacyIcon: az.A, asset16: aG.M, legacyClassName: "icon-2xs" })
              : (0, n.jsx)(aA.bF, { "aria-hidden": !1, legacyIcon: aV.A, asset16: aq.f, legacyClassName: "icon-2xs" })),
            (d[7] = v),
            (d[8] = a))
          : (a = d[8]),
        d[9] !== v
          ? ((i = (0, n.jsx)("span", {
              className: "min-w-0 truncate",
              children: v
                ? (0, n.jsx)(j.A, { id: "diff.actionButton.unstageSectionLabel", defaultMessage: "Unstage all" })
                : (0, n.jsx)(j.A, { id: "diff.actionButton.stageSectionLabel", defaultMessage: "Stage all" }),
            })),
            (d[9] = v),
            (d[10] = i))
          : (i = d[10]),
        d[11] !== x || d[12] !== t || d[13] !== a || d[14] !== i
          ? ((s = (0, n.jsxs)(M.$, {
              className: "min-w-0 gap-2",
              color: "ghostTertiary",
              disabled: x,
              onClick: t,
              children: [a, i],
            })),
            (d[11] = x),
            (d[12] = t),
            (d[13] = a),
            (d[14] = i),
            (d[15] = s))
          : (s = d[15]),
        d[16] !== e || d[17] !== s
          ? ((o = (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [e, s] })),
            (d[16] = e),
            (d[17] = s),
            (d[18] = o))
          : (o = d[18]),
        o
      )
    }
    function aK(e) {
      let t,
        a,
        i = (0, l.c)(3),
        { expandedActionsPortalTarget: s } = e,
        o = (0, r.Ul)(er.RT)
      return (0, r.Ul)(er.Jl) && o
        ? (i[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, n.jsx)(aW, {})), (i[0] = t)) : (t = i[0]),
          i[1] !== s
            ? ((a = (0, n.jsx)(aB, { expandedActionsPortalTarget: s, children: t })), (i[1] = s), (i[2] = a))
            : (a = i[2]),
          a)
        : null
    }
    var aZ = a("ZYH5")
    function aQ(e) {
      let t,
        a,
        r,
        i,
        s,
        o = (0, l.c)(9),
        { count: d, onCopyCleanupCommand: c, onRefresh: u } = e
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)("span", {
              className: "select-none",
              children: (0, n.jsx)(j.A, {
                id: "codex.review.untrackedFilesOmitted.title",
                defaultMessage: "Showing tracked changes only",
              }),
            })),
            (o[0] = t))
          : (t = o[0]),
        o[1] !== d
          ? ((a = (0, n.jsx)("span", {
              className: "select-none",
              children: (0, n.jsx)(j.A, {
                id: "codex.review.untrackedFilesOmitted.content",
                defaultMessage:
                  "The Changes tab skipped {count, number} untracked files to stay responsive. If these files are generated, clean them up and refresh",
                values: { count: d },
              }),
            })),
            (o[1] = d),
            (o[2] = a))
          : (a = o[2]),
        o[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(j.A, {
              id: "codex.review.untrackedFilesOmitted.copyCleanupCommand",
              defaultMessage: "Copy cleanup command",
            })),
            (o[3] = r))
          : (r = o[3]),
        o[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsx)(j.A, { id: "codex.review.untrackedFilesOmitted.refresh", defaultMessage: "Refresh" })),
            (o[4] = i))
          : (i = o[4]),
        o[5] !== c || o[6] !== u || o[7] !== a
          ? ((s = (0, n.jsx)(ag.l, {
              Icon: aZ.A,
              ariaLive: "polite",
              role: "status",
              type: "warning",
              layout: "warningCallout",
              stackOnNarrow: !0,
              title: t,
              content: a,
              onPrimaryCtaClick: c,
              primaryCtaText: r,
              onSecondaryCtaClick: u,
              secondaryCtaText: i,
            })),
            (o[5] = c),
            (o[6] = u),
            (o[7] = a),
            (o[8] = s))
          : (s = o[8]),
        s
      )
    }
    let aH = (0, r.un)(
      g.GD,
      ({ get: e }) => "cloud" !== e(B.yw) && e(f, { hostId: e(v.c7), root: e(B.YC).data?.root ?? null }),
    )
    function aJ(e) {
      let t,
        a,
        i = (0, l.c)(30),
        { expandedActionsPortalTarget: s, interactionOwner: o, renderSlots: c, setTabState: u, tabState: f } = e,
        m = (0, r.Ul)(d.aS),
        h = (0, r.Ul)(w.td)
      if (null != h && "kind" in h) {
        let e
        return (
          i[0] !== h || i[1] !== c
            ? ((e = (0, n.jsx)(V, { ...h, renderSlots: c }, h.attachmentKey)), (i[0] = h), (i[1] = c), (i[2] = e))
            : (e = i[2]),
          e
        )
      }
      if (null != h) {
        let e
        return (
          i[3] !== h.entry || i[4] !== h.request || i[5] !== c
            ? ((e = (0, n.jsx)(Y, { request: h.request, entry: h.entry, renderSlots: c })),
              (i[3] = h.entry),
              (i[4] = h.request),
              (i[5] = c),
              (i[6] = e))
            : (e = i[6]),
          e
        )
      }
      if (
        (i[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsxs)("div", {
              className: "pointer-events-none",
              children: [(0, n.jsx)(aj, {}), (0, n.jsx)(aX, {})],
            })),
            (i[7] = t))
          : (t = i[7]),
        i[8] !== m || i[9] !== s || i[10] !== o || i[11] !== c || i[12] !== u || i[13] !== f)
      ) {
        let e, l, r, d, h, p, g
        ;(i[15] !== m || i[16] !== o || i[17] !== u || i[18] !== f
          ? ((e = (0, n.jsx)(ar, { diffMode: m, interactionOwner: o, setTabState: u, tabState: f })),
            (i[15] = m),
            (i[16] = o),
            (i[17] = u),
            (i[18] = f),
            (i[19] = e))
          : (e = i[19]),
          i[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, n.jsx)(ap.s, { type: "changed-files", children: (0, n.jsx)(af, {}) })), (i[20] = l))
            : (l = i[20]),
          i[21] !== e
            ? ((r = (0, n.jsxs)("div", { className: "flex h-full min-h-0 max-w-full min-w-0", children: [e, l] })),
              (i[21] = e),
              (i[22] = r))
            : (r = i[22]))
        let v = s ?? null
        ;(i[23] !== v
          ? ((d = (0, n.jsx)(aK, { expandedActionsPortalTarget: v })), (i[23] = v), (i[24] = d))
          : (d = i[24]),
          i[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = (0, n.jsx)(aD, {})), (p = (0, n.jsx)(a0, {})), (i[25] = h), (i[26] = p))
            : ((h = i[25]), (p = i[26])),
          i[27] !== r || i[28] !== d
            ? ((g = (0, n.jsxs)("div", {
                className: "relative h-full min-h-0 w-full min-w-0",
                children: [r, d, h, p],
              })),
              (i[27] = r),
              (i[28] = d),
              (i[29] = g))
            : (g = i[29]),
          (a = c({ headerRows: [{ id: "review-controls", divider: !0, height: "content", content: t }], content: g })),
          (i[8] = m),
          (i[9] = s),
          (i[10] = o),
          (i[11] = c),
          (i[12] = u),
          (i[13] = f),
          (i[14] = a))
      } else a = i[14]
      return a
    }
    function aX() {
      let e,
        t,
        a,
        i,
        s = (0, l.c)(12),
        o = (0, r.gh)(g.GD),
        d = (0, r.Ul)(ey.rN),
        c = (0, r.Ul)(er.Vw),
        u = (0, r.Ul)(aH)
      if (!d && null == c && !u) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)("div", {})), (s[0] = e)) : (e = s[0]),
          e
        )
      }
      return (
        s[1] !== u || s[2] !== o
          ? ((e = u
              ? (0, n.jsx)(av, {
                  onRefresh: () => {
                    ;(0, B.wl)(o)
                  },
                })
              : null),
            (s[1] = u),
            (s[2] = o),
            (s[3] = e))
          : (e = s[3]),
        s[4] !== c ? ((t = null != c ? (0, n.jsx)(a1, { count: c.count }) : null), (s[4] = c), (s[5] = t)) : (t = s[5]),
        s[6] !== d ? ((a = d ? (0, n.jsx)(aY, {}) : null), (s[6] = d), (s[7] = a)) : (a = s[7]),
        s[8] !== e || s[9] !== t || s[10] !== a
          ? ((i = (0, n.jsxs)("div", {
              className: "pointer-events-auto flex flex-col gap-2 p-2",
              children: [e, t, a],
            })),
            (s[8] = e),
            (s[9] = t),
            (s[10] = a),
            (s[11] = i))
          : (i = s[11]),
        i
      )
    }
    function aY() {
      let e,
        t,
        a,
        i = (0, l.c)(9),
        s = (0, r.gh)(g.GD),
        { entries: o } = (0, r.Ul)(t$),
        d = (0, r.Ul)(ew.WV),
        c = o.some((e) => {
          let { path: t } = e
          return t === d
        })
          ? d
          : o[0]?.path,
        u = o.findIndex((e) => {
          let { path: t } = e
          return t === c
        }),
        f = o[u - 1]?.path,
        m = o[u + 1]?.path
      return (
        i[0] !== m || i[1] !== s
          ? ((e = null == m ? void 0 : () => (0, ew.u8)(s, m)), (i[0] = m), (i[1] = s), (i[2] = e))
          : (e = i[2]),
        i[3] !== f || i[4] !== s
          ? ((t = null == f ? void 0 : () => (0, ew.u8)(s, f)), (i[3] = f), (i[4] = s), (i[5] = t))
          : (t = i[5]),
        i[6] !== e || i[7] !== t
          ? ((a = (0, n.jsx)(aP, { onNextFile: e, onPreviousFile: t })), (i[6] = e), (i[7] = t), (i[8] = a))
          : (a = i[8]),
        a
      )
    }
    function a1(e) {
      let t,
        a,
        i,
        d = (0, l.c)(9),
        { count: c } = e,
        u = (0, r.gh)(g.GD),
        f = (0, s.A)()
      return (
        d[0] !== f || d[1] !== u
          ? ((t = (e) => {
              ;(0, x.lW)('cd "$(git rev-parse --show-toplevel)" && git clean -d --interactive', e).then((e) => {
                e &&
                  u
                    .get(o.Id)
                    .success(
                      f.formatMessage({
                        id: "codex.review.untrackedFilesOmitted.copyCleanupCommand.toast",
                        defaultMessage: "Copied interactive cleanup command to the clipboard",
                      }),
                    )
              })
            }),
            (d[0] = f),
            (d[1] = u),
            (d[2] = t))
          : (t = d[2]),
        d[3] !== u
          ? ((a = () => {
              ;(0, B.wl)(u)
            }),
            (d[3] = u),
            (d[4] = a))
          : (a = d[4]),
        d[5] !== c || d[6] !== t || d[7] !== a
          ? ((i = (0, n.jsx)(aQ, { count: c, onCopyCleanupCommand: t, onRefresh: a })),
            (d[5] = c),
            (d[6] = t),
            (d[7] = a),
            (d[8] = i))
          : (i = d[8]),
        i
      )
    }
    function a0() {
      let e,
        t,
        a,
        i,
        s = (0, l.c)(16),
        o = (0, r.gh)(g.GD),
        d = (0, r.Ul)(er.q9),
        c = (0, r.Ul)(er._c),
        u = (0, r.Ul)(B.yw),
        f = (0, r.Ul)(y.kZ),
        m = (0, r.Ul)(ey.ix),
        h = (0, r.Ul)(ew.WV),
        v = (0, r.Ul)(ew.lN)
      s[0] !== h || s[1] !== v
        ? ((e =
            v.find((e) => {
              let { path: t } = e
              return t === h
            })?.path ??
            v[0]?.path ??
            null),
          (s[0] = h),
          (s[1] = v),
          (s[2] = e))
        : (e = s[2])
      let x = e,
        w = !c && !d && null != x
      s[3] !== w ? ((t = { enabled: w }), (s[3] = w), (s[4] = t)) : (t = s[4])
      let b = (0, r._U)(ey.$b, x ?? "", t)
      s[5] !== o.value ? ((a = (0, g.n1)(o.value) ?? o.value.pathname), (s[5] = o.value), (s[6] = a)) : (a = s[6])
      let C = `${a}:${u}:${f}`,
        j = null != x,
        M = w && (!m || b?.diffLoadStatus === "loading"),
        k = w && b?.diffLoadStatus === "error"
      return (
        s[7] !== d ||
        s[8] !== c ||
        s[9] !== u ||
        s[10] !== f ||
        s[11] !== C ||
        s[12] !== j ||
        s[13] !== M ||
        s[14] !== k
          ? ((i = (0, n.jsx)(
              p,
              {
                diffTooLarge: d,
                hasPatch: j,
                isLoading: c,
                isPatchLoading: M,
                patchFailed: k,
                repositoryKind: u,
                source: f,
              },
              C,
            )),
            (s[7] = d),
            (s[8] = c),
            (s[9] = u),
            (s[10] = f),
            (s[11] = C),
            (s[12] = j),
            (s[13] = M),
            (s[14] = k),
            (s[15] = i))
          : (i = s[15]),
        i
      )
    }
    var a2 = a("uHE8")
    let a3 = function (e) {
      let t,
        a,
        s,
        o,
        d,
        c = (0, l.c)(18),
        { owner: u, renderSlots: f, setTabState: m, tabState: h } = e,
        p = (0, r.gh)(g.GD),
        [v, x] = (0, i.useState)(null)
      ;(c[0] !== u || c[1] !== p
        ? ((t =
            null == u && null == p.value.persistentWorkspace
              ? void 0
              : {
                  clientThreadId: p.value.clientThreadId,
                  conversationId: (0, g.n1)(p.value),
                  routeKey: (0, g.hf)(p.value),
                }),
          (c[0] = u),
          (c[1] = p),
          (c[2] = t))
        : (t = c[2]),
        c[3] !== v || c[4] !== f || c[5] !== m || c[6] !== t || c[7] !== h
          ? ((a = (0, n.jsx)(aJ, {
              expandedActionsPortalTarget: v,
              interactionOwner: t,
              renderSlots: f,
              setTabState: m,
              tabState: h,
            })),
            (c[3] = v),
            (c[4] = f),
            (c[5] = m),
            (c[6] = t),
            (c[7] = h),
            (c[8] = a))
          : (a = c[8]))
      let y = a
      return (
        c[9] !== v
          ? ((s = (e) => {
              null != e && e !== v && x(e)
            }),
            (c[9] = v),
            (c[10] = s))
          : (s = c[10]),
        c[11] !== u || c[12] !== y || c[13] !== p
          ? ((o =
              null == u && null == p.value.persistentWorkspace
                ? y
                : (0, n.jsx)(r.Ui, {
                    scope: eB.l7,
                    value: u?.thread ?? p.getOwnValue(eB.l7),
                    children: (0, n.jsx)(r.Ui, {
                      scope: g.GD,
                      value: u?.route ?? p.getOwnValue(g.GD),
                      children: (0, n.jsx)(a2.A, { children: y }),
                    }),
                  })),
            (c[11] = u),
            (c[12] = y),
            (c[13] = p),
            (c[14] = o))
          : (o = c[14]),
        c[15] !== s || c[16] !== o
          ? ((d = (0, n.jsx)("div", { ref: s, className: "relative h-full min-h-0", children: o })),
            (c[15] = s),
            (c[16] = o),
            (c[17] = d))
          : (d = c[17]),
        d
      )
    }
  },
  MIZk(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      r = a("slpy"),
      i = a("on57"),
      s = a("zd8w"),
      o = a("oyxz"),
      d = a("Sm6l"),
      c = a("ZtSy"),
      u = a("bVeK"),
      f = a("yf2D")
    let m =
        "group group/summary-panel-item relative isolate flex min-h-token-button-composer w-full min-w-0 items-center data-[multiline=true]:items-start gap-token-button-composer-gap group-data-[summary-row-density=comfortable]/summary-row-density:gap-2 rounded-sm border-0 bg-transparent px-0 py-1 text-start group-data-[summary-panel-variant=dynamic-isle]/summary-panel:min-h-0 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row group-data-[variant=card]/summary-card:min-h-10 group-data-[variant=card]/summary-card:gap-3 group-data-[variant=card]/summary-card:rounded-none group-data-[variant=card]/summary-card:px-3 group-data-[variant=card]/summary-card:py-2 group-data-[variant=card]/summary-card:after:pointer-events-none group-data-[variant=card]/summary-card:after:absolute group-data-[variant=card]/summary-card:after:end-0 group-data-[variant=card]/summary-card:after:start-10 group-data-[variant=card]/summary-card:after:top-full group-data-[variant=card]/summary-card:after:h-px group-data-[variant=card]/summary-card:after:bg-border",
      h =
        "cursor-interaction before:absolute before:inset-y-0 before:-inset-x-2 before:-z-10 before:rounded-sm before:content-[''] hover:before:bg-secondary-ghost-hover group-data-[variant=card]/summary-card:before:inset-x-0 group-data-[variant=card]/summary-card:before:rounded-none",
      p = { background: h, foreground: "cursor-interaction hover:text-default" },
      g =
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
      v =
        "icon-sm flex items-center justify-center browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:size-4 [&_svg]:size-full",
      x = {
        "conversation-summary": "text-text/40",
        critical: "text-chart-red",
        default: "text-default",
        muted: "text-secondary",
        tertiary: "text-tertiary",
      },
      y = {
        intrinsic: null,
        custom:
          "w-[18px] group-data-[summary-row-density=comfortable]/summary-row-density:w-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:w-4",
        glyph:
          "w-[18px] group-data-[summary-row-density=comfortable]/summary-row-density:w-4 browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:w-4",
        preview:
          "icon-sm overflow-hidden rounded-sm browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:size-4 browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:[&>svg]:size-full",
        status:
          "w-[18px] group-data-[summary-row-density=comfortable]/summary-row-density:w-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:w-4",
        thumbnail: null,
      },
      w = {
        intrinsic: null,
        custom: null,
        glyph:
          "icon-sm browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:size-4 [&>*]:size-full [&_svg]:size-full",
        preview: null,
        status: "icon-xs [&>*]:size-full [&_svg]:size-full",
        thumbnail: "relative size-12 overflow-hidden rounded-xl bg-surface-secondary text-default",
      },
      b = { critical: "text-chart-red", default: "text-default", muted: "text-tertiary" },
      C = {
        "action-preview":
          "min-w-token-button-composer justify-end overflow-hidden text-sm group-focus-within/summary-panel-item:w-token-button-composer group-hover/summary-panel-item:w-token-button-composer group-has-[[aria-expanded=true]]/summary-panel-item:w-token-button-composer",
        icon: "icon-xs [&>*]:size-full [&_svg]:size-full",
        "section-status":
          "-me-1 w-5 justify-center empty:hidden group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=default]/summary-panel:me-0",
        text: "text-sm",
        thumbnail: "relative size-10 justify-center overflow-hidden rounded-xl bg-surface-secondary",
      }
    function j(e) {
      let t,
        a,
        r,
        s,
        o,
        d,
        c,
        u,
        f,
        m,
        h = (0, l.c)(22)
      h[0] !== e
        ? (({ children: t, className: a, tone: s, truncate: o, variant: d, visibility: c, ...r } = e),
          (h[0] = e),
          (h[1] = t),
          (h[2] = a),
          (h[3] = r),
          (h[4] = s),
          (h[5] = o),
          (h[6] = d),
          (h[7] = c))
        : ((t = h[1]), (a = h[2]), (r = h[3]), (s = h[4]), (o = h[5]), (d = h[6]), (c = h[7]))
      let p = void 0 !== o && o,
        g = void 0 === d ? "text" : d,
        v = void 0 === c ? "always" : c,
        x = p ? "max-w-1/2 min-w-0 shrink" : "shrink-0",
        y = b[void 0 === s ? "muted" : s],
        w = C[g],
        j =
          "interaction" === v &&
          "opacity-0 group-focus-visible/summary-panel-item:opacity-100 group-focus-within/summary-panel-item:opacity-100 group-hover/summary-panel-item:opacity-100 group-aria-expanded/summary-panel-item:opacity-100",
        M =
          "rest" === v &&
          "group-focus-within/summary-panel-item:opacity-0 group-hover/summary-panel-item:opacity-0 group-has-[[aria-expanded=true]]/summary-panel-item:opacity-0"
      return (
        h[8] !== a || h[9] !== x || h[10] !== y || h[11] !== w || h[12] !== j || h[13] !== M
          ? ((u = (0, i.A)(
              "flex items-center group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row",
              x,
              y,
              w,
              j,
              M,
              a,
            )),
            (h[8] = a),
            (h[9] = x),
            (h[10] = y),
            (h[11] = w),
            (h[12] = j),
            (h[13] = M),
            (h[14] = u))
          : (u = h[14]),
        h[15] !== t || h[16] !== p
          ? ((f = p ? (0, n.jsx)("span", { className: "text-fade-truncate", children: t }) : t),
            (h[15] = t),
            (h[16] = p),
            (h[17] = f))
          : (f = h[17]),
        h[18] !== r || h[19] !== u || h[20] !== f
          ? ((m = (0, n.jsx)("span", {
              ...r,
              className: u,
              "data-slot": "thread-summary-panel-item-meta",
              children: f,
            })),
            (h[18] = r),
            (h[19] = u),
            (h[20] = f),
            (h[21] = m))
          : (m = h[21]),
        m
      )
    }
    function M(e) {
      let t,
        a,
        s,
        o,
        c,
        u,
        f,
        m,
        h,
        p,
        x,
        y,
        w = (0, l.c)(24)
      w[0] !== e
        ? (({
            children: t,
            className: a,
            color: f,
            disableTooltip: s,
            label: o,
            shortcut: u,
            tooltipContent: m,
            ...c
          } = e),
          (w[0] = e),
          (w[1] = t),
          (w[2] = a),
          (w[3] = s),
          (w[4] = o),
          (w[5] = c),
          (w[6] = u),
          (w[7] = f),
          (w[8] = m))
        : ((t = w[1]), (a = w[2]), (s = w[3]), (o = w[4]), (c = w[5]), (u = w[6]), (f = w[7]), (m = w[8]))
      let b = void 0 === f ? "ghost" : f,
        C = void 0 === m ? o : m
      return (
        w[9] !== a ? ((h = (0, i.A)("size-6", g, a)), (w[9] = a), (w[10] = h)) : (h = w[10]),
        w[11] !== t ? ((p = (0, n.jsx)("span", { className: v, children: t })), (w[11] = t), (w[12] = p)) : (p = w[12]),
        w[13] !== b || w[14] !== o || w[15] !== c || w[16] !== h || w[17] !== p
          ? ((x = (0, n.jsx)(d.$, {
              ...c,
              "aria-label": o,
              className: h,
              color: b,
              "data-slot": "thread-summary-panel-icon-button",
              focusRing: "inset",
              size: "icon",
              uniform: !0,
              children: p,
            })),
            (w[13] = b),
            (w[14] = o),
            (w[15] = c),
            (w[16] = h),
            (w[17] = p),
            (w[18] = x))
          : (x = w[18]),
        w[19] !== s || w[20] !== u || w[21] !== x || w[22] !== C
          ? ((y = (0, n.jsx)(r.m, { disabled: s, content: C, shortcut: u, openDelay: 250, children: x })),
            (w[19] = s),
            (w[20] = u),
            (w[21] = x),
            (w[22] = C),
            (w[23] = y))
          : (y = w[23]),
        y
      )
    }
    a.d(
      t,
      {},
      {
        Ck: function (e) {
          let t,
            a,
            r,
            d,
            c,
            f,
            h,
            v,
            y,
            w,
            b,
            C,
            j,
            M,
            k,
            S,
            A = (0, l.c)(36)
          A[0] !== e
            ? (({
                children: t,
                className: a,
                disabled: c,
                interaction: f,
                multiline: h,
                ref: d,
                showChevron: v,
                tone: y,
                type: w,
                unread: b,
                ...r
              } = e),
              (A[0] = e),
              (A[1] = t),
              (A[2] = a),
              (A[3] = r),
              (A[4] = d),
              (A[5] = c),
              (A[6] = f),
              (A[7] = h),
              (A[8] = v),
              (A[9] = y),
              (A[10] = w),
              (A[11] = b))
            : ((t = A[1]),
              (a = A[2]),
              (r = A[3]),
              (d = A[4]),
              (c = A[5]),
              (f = A[6]),
              (h = A[7]),
              (v = A[8]),
              (y = A[9]),
              (w = A[10]),
              (b = A[11]))
          let I = void 0 !== c && c,
            _ = void 0 === f ? "background" : f,
            P = void 0 !== h && h,
            N = void 0 === v || v,
            R = void 0 === y ? "default" : y,
            U = void 0 === w ? "button" : w,
            D = void 0 !== b && b,
            T = (0, s.useId)()
          A[12] !== r || A[13] !== D || A[14] !== T
            ? ((C = D ? [r["aria-describedby"], T].filter(Boolean).join(" ") : r["aria-describedby"]),
              (A[12] = r),
              (A[13] = D),
              (A[14] = T),
              (A[15] = C))
            : (C = A[15])
          let L = C,
            F = !I && p[_],
            O = x[R]
          A[16] !== a || A[17] !== O || A[18] !== F
            ? ((j = (0, i.A)(m, F, g, "disabled:cursor-not-allowed disabled:not-aria-busy:text-tertiary", O, a)),
              (A[16] = a),
              (A[17] = O),
              (A[18] = F),
              (A[19] = j))
            : (j = A[19])
          let B = P || void 0
          return (
            A[20] !== D || A[21] !== T
              ? ((M = D
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("span", {
                          "aria-hidden": !0,
                          className: "h-1.5 w-1.5 shrink-0 rounded-full bg-accent",
                        }),
                        (0, n.jsx)("span", {
                          id: T,
                          className: "sr-only",
                          children: (0, n.jsx)(o.A, { id: "sidebar.navItem.unread", defaultMessage: "Unread updates" }),
                        }),
                      ],
                    })
                  : null),
                (A[20] = D),
                (A[21] = T),
                (A[22] = M))
              : (M = A[22]),
            A[23] !== N
              ? ((k =
                  N &&
                  (0, n.jsx)(u.uM3, {
                    className: "hidden text-tertiary group-data-[variant=card]/summary-card:block",
                  })),
                (A[23] = N),
                (A[24] = k))
              : (k = A[24]),
            A[25] !== t ||
            A[26] !== L ||
            A[27] !== I ||
            A[28] !== r ||
            A[29] !== d ||
            A[30] !== j ||
            A[31] !== B ||
            A[32] !== M ||
            A[33] !== k ||
            A[34] !== U
              ? ((S = (0, n.jsxs)("button", {
                  ...r,
                  "aria-describedby": L,
                  className: j,
                  "data-slot": "thread-summary-panel-item-button",
                  "data-multiline": B,
                  disabled: I,
                  ref: d,
                  type: U,
                  children: [t, M, k],
                })),
                (A[25] = t),
                (A[26] = L),
                (A[27] = I),
                (A[28] = r),
                (A[29] = d),
                (A[30] = j),
                (A[31] = B),
                (A[32] = M),
                (A[33] = k),
                (A[34] = U),
                (A[35] = S))
              : (S = A[35]),
            S
          )
        },
        DZ: function (e) {
          let t,
            a,
            r,
            s,
            o,
            d = (0, l.c)(10)
          return (
            d[0] !== e
              ? (({ children: t, className: a, ...r } = e), (d[0] = e), (d[1] = t), (d[2] = a), (d[3] = r))
              : ((t = d[1]), (a = d[2]), (r = d[3])),
            d[4] !== a ? ((s = (0, i.A)("ms-auto flex items-center gap-0.5", a)), (d[4] = a), (d[5] = s)) : (s = d[5]),
            d[6] !== t || d[7] !== r || d[8] !== s
              ? ((o = (0, n.jsx)("span", {
                  ...r,
                  className: s,
                  "data-slot": "thread-summary-panel-section-actions",
                  children: t,
                })),
                (d[6] = t),
                (d[7] = r),
                (d[8] = s),
                (d[9] = o))
              : (o = d[9]),
            o
          )
        },
        I: function (e) {
          let t,
            a,
            s,
            o,
            d,
            c,
            u,
            f,
            m = (0, l.c)(17)
          return (
            m[0] !== e
              ? (({ children: t, className: a, label: s, ...o } = e),
                (m[0] = e),
                (m[1] = t),
                (m[2] = a),
                (m[3] = s),
                (m[4] = o))
              : ((t = m[1]), (a = m[2]), (s = m[3]), (o = m[4])),
            m[5] !== a
              ? ((d = (0, i.A)(
                  "-me-2 size-token-button-composer flex cursor-interaction items-center justify-center rounded-sm text-tertiary hover:text-default",
                  g,
                  a,
                )),
                (m[5] = a),
                (m[6] = d))
              : (d = m[6]),
            m[7] !== t ? ((c = (0, n.jsx)("span", { className: v, children: t })), (m[7] = t), (m[8] = c)) : (c = m[8]),
            m[9] !== s || m[10] !== o || m[11] !== d || m[12] !== c
              ? ((u = (0, n.jsx)("a", {
                  ...o,
                  "aria-label": s,
                  className: d,
                  "data-slot": "thread-summary-panel-item-action-link",
                  children: c,
                })),
                (m[9] = s),
                (m[10] = o),
                (m[11] = d),
                (m[12] = c),
                (m[13] = u))
              : (u = m[13]),
            m[14] !== s || m[15] !== u
              ? ((f = (0, n.jsx)(r.m, { content: s, openDelay: 250, children: u })),
                (m[14] = s),
                (m[15] = u),
                (m[16] = f))
              : (f = m[16]),
            f
          )
        },
        Je: j,
        MW: M,
        Qw: function (e) {
          let t,
            a,
            r,
            s,
            o,
            d,
            c,
            u,
            m,
            h = (0, l.c)(18)
          h[0] !== e
            ? (({ children: t, className: a, description: r, truncate: o, ...s } = e),
              (h[0] = e),
              (h[1] = t),
              (h[2] = a),
              (h[3] = r),
              (h[4] = s),
              (h[5] = o))
            : ((t = h[1]), (a = h[2]), (r = h[3]), (s = h[4]), (o = h[5]))
          let p = void 0 === o || o
          ;(h[6] !== a
            ? ((d = (0, i.A)(
                "min-w-0 flex-1 text-sm group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row",
                a,
              )),
              (h[6] = a),
              (h[7] = d))
            : (d = h[7]),
            h[8] !== t || h[9] !== p
              ? ((c = p ? (0, n.jsx)(f.E, { animateOnGroupHover: !0, children: t }) : t),
                (h[8] = t),
                (h[9] = p),
                (h[10] = c))
              : (c = h[10]),
            h[11] !== s || h[12] !== d || h[13] !== c
              ? ((u = (0, n.jsx)("span", {
                  ...s,
                  className: d,
                  "data-slot": "thread-summary-panel-item-label",
                  children: c,
                })),
                (h[11] = s),
                (h[12] = d),
                (h[13] = c),
                (h[14] = u))
              : (u = h[14]))
          let g = u
          return (
            h[15] !== r || h[16] !== g
              ? ((m =
                  null == r
                    ? g
                    : (0, n.jsxs)("span", {
                        className:
                          "flex min-w-0 flex-1 flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0",
                        children: [
                          g,
                          (0, n.jsx)(j, {
                            children: (0, n.jsx)("span", { className: "text-fade-truncate", children: r }),
                          }),
                        ],
                      })),
                (h[15] = r),
                (h[16] = g),
                (h[17] = m))
              : (m = h[17]),
            m
          )
        },
        T5: function (e) {
          let t,
            a,
            r,
            s,
            o,
            d,
            c = (0, l.c)(12)
          c[0] !== e
            ? (({ children: t, className: a, type: s, ...r } = e),
              (c[0] = e),
              (c[1] = t),
              (c[2] = a),
              (c[3] = r),
              (c[4] = s))
            : ((t = c[1]), (a = c[2]), (r = c[3]), (s = c[4]))
          let u = void 0 === s ? "button" : s
          return (
            c[5] !== a
              ? ((o = (0, i.A)(
                  "flex size-4 cursor-interaction items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring [&>img]:size-4 [&>svg]:size-4",
                  a,
                )),
                (c[5] = a),
                (c[6] = o))
              : (o = c[6]),
            c[7] !== t || c[8] !== r || c[9] !== o || c[10] !== u
              ? ((d = (0, n.jsx)("button", {
                  ...r,
                  className: o,
                  "data-slot": "thread-summary-panel-item-avatar-button",
                  type: u,
                  children: t,
                })),
                (c[7] = t),
                (c[8] = r),
                (c[9] = o),
                (c[10] = u),
                (c[11] = d))
              : (d = c[11]),
            d
          )
        },
        X6: function (e) {
          let t,
            a,
            r,
            s,
            o,
            d,
            c = (0, l.c)(12)
          return (
            c[0] !== e
              ? (({ children: t, className: a, density: r, ...s } = e),
                (c[0] = e),
                (c[1] = t),
                (c[2] = a),
                (c[3] = r),
                (c[4] = s))
              : ((t = c[1]), (a = c[2]), (r = c[3]), (s = c[4])),
            c[5] !== a
              ? ((o = (0, i.A)(
                  "relative z-10 flex min-w-0 flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0 group-data-[variant=card]/summary-card:mx-0 group-data-[variant=card]/summary-card:gap-0 group-data-[variant=card]/summary-card:px-0",
                  "group/summary-row-density",
                  a,
                )),
                (c[5] = a),
                (c[6] = o))
              : (o = c[6]),
            c[7] !== t || c[8] !== r || c[9] !== s || c[10] !== o
              ? ((d = (0, n.jsx)("div", {
                  ...s,
                  className: o,
                  "data-slot": "thread-summary-panel-item-group",
                  "data-summary-row-density": r,
                  children: t,
                })),
                (c[7] = t),
                (c[8] = r),
                (c[9] = s),
                (c[10] = o),
                (c[11] = d))
              : (d = c[11]),
            d
          )
        },
        _W: function (e) {
          let t,
            a,
            r,
            s,
            o,
            d = (0, l.c)(10)
          return (
            d[0] !== e
              ? (({ children: t, className: a, ...r } = e), (d[0] = e), (d[1] = t), (d[2] = a), (d[3] = r))
              : ((t = d[1]), (a = d[2]), (r = d[3])),
            d[4] !== a
              ? ((s = (0, i.A)(
                  "flex shrink-0 items-center gap-token-button-composer-gap [&_img]:size-4 [&_svg]:size-4",
                  a,
                )),
                (d[4] = a),
                (d[5] = s))
              : (s = d[5]),
            d[6] !== t || d[7] !== r || d[8] !== s
              ? ((o = (0, n.jsx)("span", {
                  ...r,
                  className: s,
                  "data-slot": "thread-summary-panel-item-avatar-group",
                  children: t,
                })),
                (d[6] = t),
                (d[7] = r),
                (d[8] = s),
                (d[9] = o))
              : (o = d[9]),
            o
          )
        },
        s7: function (e) {
          let t,
            a,
            r,
            s,
            o,
            d,
            c,
            f,
            p,
            g,
            v,
            y,
            w = (0, l.c)(26)
          w[0] !== e
            ? (({
                children: t,
                className: a,
                disabled: o,
                interactive: d,
                multiline: c,
                ref: s,
                showChevron: f,
                tone: p,
                ...r
              } = e),
              (w[0] = e),
              (w[1] = t),
              (w[2] = a),
              (w[3] = r),
              (w[4] = s),
              (w[5] = o),
              (w[6] = d),
              (w[7] = c),
              (w[8] = f),
              (w[9] = p))
            : ((t = w[1]),
              (a = w[2]),
              (r = w[3]),
              (s = w[4]),
              (o = w[5]),
              (d = w[6]),
              (c = w[7]),
              (f = w[8]),
              (p = w[9]))
          let b = void 0 !== o && o,
            C = void 0 !== d && d,
            j = void 0 !== c && c,
            M = void 0 === f || f,
            k = b || void 0,
            S = x[void 0 === p ? "default" : p],
            A = !b && C && h,
            I = b && "cursor-not-allowed text-tertiary"
          w[10] !== a || w[11] !== S || w[12] !== A || w[13] !== I
            ? ((g = (0, i.A)(m, S, A, I, a)), (w[10] = a), (w[11] = S), (w[12] = A), (w[13] = I), (w[14] = g))
            : (g = w[14])
          let _ = j || void 0
          return (
            w[15] !== C || w[16] !== M
              ? ((v =
                  C &&
                  M &&
                  (0, n.jsx)(u.uM3, {
                    className: "hidden text-tertiary group-data-[variant=card]/summary-card:block",
                  })),
                (w[15] = C),
                (w[16] = M),
                (w[17] = v))
              : (v = w[17]),
            w[18] !== t || w[19] !== r || w[20] !== s || w[21] !== g || w[22] !== _ || w[23] !== v || w[24] !== k
              ? ((y = (0, n.jsxs)("div", {
                  ...r,
                  "aria-disabled": k,
                  className: g,
                  "data-slot": "thread-summary-panel-item",
                  "data-multiline": _,
                  ref: s,
                  children: [t, v],
                })),
                (w[18] = t),
                (w[19] = r),
                (w[20] = s),
                (w[21] = g),
                (w[22] = _),
                (w[23] = v),
                (w[24] = k),
                (w[25] = y))
              : (y = w[25]),
            y
          )
        },
        sW: function (e) {
          let t,
            a,
            r,
            s,
            o,
            d,
            c,
            u = (0, l.c)(15)
          u[0] !== e
            ? (({ children: t, className: a, variant: s, ...r } = e),
              (u[0] = e),
              (u[1] = t),
              (u[2] = a),
              (u[3] = r),
              (u[4] = s))
            : ((t = u[1]), (a = u[2]), (r = u[3]), (s = u[4]))
          let f = void 0 === s ? "glyph" : s,
            m = w[f],
            h = y[f]
          return (
            u[5] !== a || u[6] !== h
              ? ((o = (0, i.A)(
                  "me-2 flex shrink-0 items-center justify-center group-data-[multiline=true]/summary-panel-item:h-lh group-data-[summary-row-density=comfortable]/summary-row-density:me-0 group-data-[variant=card]/summary-card:me-0 group-data-[variant=card]/summary-card:w-4",
                  h,
                  a,
                )),
                (u[5] = a),
                (u[6] = h),
                (u[7] = o))
              : (o = u[7]),
            u[8] !== t || u[9] !== m
              ? ((d =
                  null == m
                    ? t
                    : (0, n.jsx)("span", {
                        className: (0, i.A)("flex shrink-0 items-center justify-center", m),
                        children: t,
                      })),
                (u[8] = t),
                (u[9] = m),
                (u[10] = d))
              : (d = u[10]),
            u[11] !== r || u[12] !== o || u[13] !== d
              ? ((c = (0, n.jsx)("span", {
                  ...r,
                  className: o,
                  "data-slot": "thread-summary-panel-item-leading",
                  children: d,
                })),
                (u[11] = r),
                (u[12] = o),
                (u[13] = d),
                (u[14] = c))
              : (c = u[14]),
            c
          )
        },
        uj: function (e) {
          let t,
            a = (0, l.c)(2)
          return (
            a[0] !== e ? ((t = (0, n.jsx)(M, { className: "-me-1.5", ...e })), (a[0] = e), (a[1] = t)) : (t = a[1]),
            t
          )
        },
        uq: function (e) {
          let t,
            a,
            r,
            s,
            o,
            d = (0, l.c)(10)
          d[0] !== e
            ? (({ className: t, tone: r, ...a } = e), (d[0] = e), (d[1] = t), (d[2] = a), (d[3] = r))
            : ((t = d[1]), (a = d[2]), (r = d[3]))
          let u = x[void 0 === r ? "default" : r]
          return (
            d[4] !== t || d[5] !== u
              ? ((s = (0, i.A)(m, h, g, u, "no-underline", t)), (d[4] = t), (d[5] = u), (d[6] = s))
              : (s = d[6]),
            d[7] !== a || d[8] !== s
              ? ((o = (0, n.jsx)(c.G, { ...a, className: s, "data-slot": "thread-summary-panel-item-link" })),
                (d[7] = a),
                (d[8] = s),
                (d[9] = o))
              : (o = d[9]),
            o
          )
        },
        ye: function (e) {
          let t,
            a,
            r,
            s,
            o,
            d,
            c = (0, l.c)(12)
          c[0] !== e
            ? (({ children: t, className: a, type: s, ...r } = e),
              (c[0] = e),
              (c[1] = t),
              (c[2] = a),
              (c[3] = r),
              (c[4] = s))
            : ((t = c[1]), (a = c[2]), (r = c[3]), (s = c[4]))
          let u = void 0 === s ? "button" : s
          return (
            c[5] !== a
              ? ((o = (0, i.A)(
                  "flex min-w-0 flex-1 self-stretch cursor-interaction items-center gap-token-button-composer-gap group-data-[summary-row-density=comfortable]/summary-row-density:gap-2 group-data-[variant=card]/summary-card:gap-3 border-0 bg-transparent p-0 text-start text-inherit disabled:cursor-not-allowed after:absolute after:inset-y-0 after:-inset-x-2 after:-z-10 after:content-[''] group-data-[variant=card]/summary-card:after:inset-x-0",
                  g,
                  a,
                )),
                (c[5] = a),
                (c[6] = o))
              : (o = c[6]),
            c[7] !== t || c[8] !== r || c[9] !== o || c[10] !== u
              ? ((d = (0, n.jsx)("button", {
                  ...r,
                  className: o,
                  "data-slot": "thread-summary-panel-item-trigger",
                  type: u,
                  children: t,
                })),
                (c[7] = t),
                (c[8] = r),
                (c[9] = o),
                (c[10] = u),
                (c[11] = d))
              : (d = c[11]),
            d
          )
        },
        zQ: function (e) {
          let t,
            a,
            r,
            s,
            o,
            d,
            c,
            u,
            f,
            m,
            h,
            p,
            g,
            v,
            x = (0, l.c)(30)
          x[0] !== e
            ? (({
                align: c,
                placement: u,
                children: t,
                className: a,
                visibility: f,
                onClick: r,
                onKeyDown: s,
                onPointerDown: o,
                ...d
              } = e),
              (x[0] = e),
              (x[1] = t),
              (x[2] = a),
              (x[3] = r),
              (x[4] = s),
              (x[5] = o),
              (x[6] = d),
              (x[7] = c),
              (x[8] = u),
              (x[9] = f))
            : ((t = x[1]),
              (a = x[2]),
              (r = x[3]),
              (s = x[4]),
              (o = x[5]),
              (d = x[6]),
              (c = x[7]),
              (u = x[8]),
              (f = x[9]))
          let y = void 0 === c ? "content" : c,
            w = void 0 === u ? "inline" : u,
            b = void 0 === f ? "always" : f,
            C = "section-actions" === y && "-me-1.5",
            j = "preview" === y && "me-2 w-15 justify-center",
            M = "overlay" === w && "absolute inset-y-0 end-0 my-auto"
          return (
            x[10] !== a || x[11] !== w || x[12] !== C || x[13] !== j || x[14] !== M || x[15] !== b
              ? ((m = (0, i.A)(
                  "flex h-5 shrink-0 items-center",
                  C,
                  j,
                  M,
                  "interaction" === b && [
                    "pointer-events-none opacity-0 group-focus-within/summary-panel-item:pointer-events-auto group-focus-within/summary-panel-item:opacity-100 group-hover/summary-panel-item:pointer-events-auto group-hover/summary-panel-item:opacity-100 has-[[aria-expanded=true]]:pointer-events-auto has-[[aria-expanded=true]]:opacity-100",
                    "inline" === w && "pointer-coarse:pointer-events-auto pointer-coarse:opacity-100",
                  ],
                  a,
                )),
                (x[10] = a),
                (x[11] = w),
                (x[12] = C),
                (x[13] = j),
                (x[14] = M),
                (x[15] = b),
                (x[16] = m))
              : (m = x[16]),
            x[17] !== r
              ? ((h = (e) => {
                  ;(e.stopPropagation(), r?.(e))
                }),
                (x[17] = r),
                (x[18] = h))
              : (h = x[18]),
            x[19] !== s
              ? ((p = (e) => {
                  ;(e.stopPropagation(), s?.(e))
                }),
                (x[19] = s),
                (x[20] = p))
              : (p = x[20]),
            x[21] !== o
              ? ((g = (e) => {
                  ;(e.stopPropagation(), o?.(e))
                }),
                (x[21] = o),
                (x[22] = g))
              : (g = x[22]),
            x[23] !== t || x[24] !== d || x[25] !== g || x[26] !== m || x[27] !== h || x[28] !== p
              ? ((v = (0, n.jsx)("span", {
                  ...d,
                  className: m,
                  "data-slot": "thread-summary-panel-item-actions",
                  role: "presentation",
                  onClick: h,
                  onKeyDown: p,
                  onPointerDown: g,
                  children: t,
                })),
                (x[23] = t),
                (x[24] = d),
                (x[25] = g),
                (x[26] = m),
                (x[27] = h),
                (x[28] = p),
                (x[29] = v))
              : (v = x[29]),
            v
          )
        },
      },
    )
  },
  a8tI(e, t, a) {
    a.d(
      t,
      {},
      {
        J: (e, t, a) => {
          let n = e.closest("[data-summary-panel-variant]")
          if (null != n && null != a) {
            let l = n.getBoundingClientRect()
            if (l.left >= (a + 8) * t + 6)
              return { align: "start", side: "left", sideOffset: e.getBoundingClientRect().left - l.left + 8 * t }
          }
          return { align: "end", side: "bottom" }
        },
      },
    )
  },
  gAOF(e, t, a) {
    var n = a("qmMi"),
      l = a("tSEg")
    let r = (0, n.vP)(l.GD, () => null),
      i = (0, n.i1)(l.GD, (e, { get: t }) => t(r) === e)
    a.d(t, {}, { D: r, o: i })
  },
  kIfn(e, t, a) {
    var n = a("ABep"),
      l = a("QosV")
    a.d(
      t,
      {},
      {
        U: function (e) {
          let t,
            a,
            r,
            i,
            s,
            o,
            d,
            c,
            u = (0, l.c)(16)
          return (
            u[0] !== e
              ? (({ onClick: t, onFocus: a, onKeyDown: r, ...i } = e),
                (u[0] = e),
                (u[1] = t),
                (u[2] = a),
                (u[3] = r),
                (u[4] = i))
              : ((t = u[1]), (a = u[2]), (r = u[3]), (i = u[4])),
            u[5] !== t
              ? ((s = (e) => {
                  ;(e.preventDefault(), t?.(e))
                }),
                (u[5] = t),
                (u[6] = s))
              : (s = u[6]),
            u[7] !== a
              ? ((o = (e) => {
                  ;(e.target === e.currentTarget && e.currentTarget.querySelector("button, a")?.focus(), a?.(e))
                }),
                (u[7] = a),
                (u[8] = o))
              : (o = u[8]),
            u[9] !== r
              ? ((d = (e) => {
                  e.target !== e.currentTarget && ("Enter" === e.key || " " === e.key) ? e.stopPropagation() : r?.(e)
                }),
                (u[9] = r),
                (u[10] = d))
              : (d = u[10]),
            u[11] !== i || u[12] !== s || u[13] !== o || u[14] !== d
              ? ((c = (0, n.jsx)("div", {
                  ...i,
                  role: "presentation",
                  tabIndex: -1,
                  onClick: s,
                  onFocus: o,
                  onKeyDown: d,
                })),
                (u[11] = i),
                (u[12] = s),
                (u[13] = o),
                (u[14] = d),
                (u[15] = c))
              : (c = u[15]),
            c
          )
        },
      },
    )
  },
  Nwje(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      r = a("on57"),
      i = a("suct"),
      s = a("iodE"),
      o = a("K4Cx"),
      d = a("V9Lw"),
      c = a.n(d),
      u = a("qmMi"),
      f = a("zd8w"),
      m = a("bqtn"),
      h = a("GCsp"),
      p = a("tSEg"),
      g = a("eGPX"),
      v = a("V8uZ"),
      x = a("m5G2"),
      y = a("Nwp9"),
      w = a("MIZk"),
      b = a("ZAU2")
    let C = { height: 0, opacity: 0, marginTop: 0 },
      j = { height: "auto", opacity: 1, marginTop: 2 },
      M = (0, y.Kn)((e) => `thread-summary-panel-section-expanded-${e}`, null),
      k = (0, u.bD)(p.GD, (e) => "pending")
    function S(e) {
      let t,
        a,
        r,
        i,
        d,
        c = (0, l.c)(19),
        { className: u, animateContentResize: m, children: h, collapsible: p, sectionContentClassName: g } = e,
        y = void 0 === p || p,
        w = (0, s.tF)(),
        [b, M] = (0, f.useState)(null),
        k = !w,
        S = !w,
        A = !!y && C
      c[0] !== y ? ((t = y ? j : {}), (c[0] = y), (c[1] = t)) : (t = c[1])
      let I = m ? (b ?? "auto") : "auto"
      c[2] !== t || c[3] !== I ? ((a = { ...t, height: I }), (c[2] = t), (c[3] = I), (c[4] = a)) : (a = c[4])
      let _ = y ? C : void 0
      return (
        c[5] !== m
          ? ((r = m
              ? (e) =>
                  (0, x.J)({
                    axis: "height",
                    target: e,
                    onChange: (e) => {
                      let { height: t } = e
                      return M(t)
                    },
                  })
              : void 0),
            (c[5] = m),
            (c[6] = r))
          : (r = c[6]),
        c[7] !== h || c[8] !== g || c[9] !== r
          ? ((i = (0, n.jsx)("div", { ref: r, className: g, children: h })),
            (c[7] = h),
            (c[8] = g),
            (c[9] = r),
            (c[10] = i))
          : (i = c[10]),
        c[11] !== u || c[12] !== i || c[13] !== k || c[14] !== S || c[15] !== A || c[16] !== a || c[17] !== _
          ? ((d = (0, n.jsx)(o.P.div, {
              className: u,
              "aria-hidden": k,
              inert: S,
              initial: A,
              animate: a,
              exit: _,
              transition: v.X7,
              children: i,
            })),
            (c[11] = u),
            (c[12] = i),
            (c[13] = k),
            (c[14] = S),
            (c[15] = A),
            (c[16] = a),
            (c[17] = _),
            (c[18] = d))
          : (d = c[18]),
        d
      )
    }
    function A(e) {
      let t,
        a,
        i,
        s,
        o,
        d,
        c,
        u = (0, l.c)(35),
        {
          inset: f,
          surface: p,
          mode: g,
          sectionOptions: v,
          after: x,
          children: y,
          isExpanded: w,
          onToggle: b,
          onChange: C,
          shouldUseReducedMotion: j,
          titleSuffix: M,
          collapsedSummary: k,
        } = e,
        S = null != v && v.length > 1,
        A = "accordion" === g ? b : void 0
      u[0] !== y
        ? ((t = (0, n.jsx)("span", { className: "truncate", children: y })), (u[0] = y), (u[1] = t))
        : (t = u[1])
      let I = w ? null : M
      ;(u[2] !== S || u[3] !== w || u[4] !== g || u[5] !== j
        ? ((a =
            ("accordion" === g || S) &&
            (0, n.jsx)(h.A, {
              "aria-hidden": "true",
              className: (0, r.$)(
                "icon-disclosure shrink-0 group-hover/section-toggle:opacity-100 group-focus-visible/section-toggle:opacity-100",
                !j && "transition-transform",
                w ? "opacity-0" : "opacity-100",
                w ? "rotate-0" : "-rotate-90",
              ),
            })),
          (u[2] = S),
          (u[3] = w),
          (u[4] = g),
          (u[5] = j),
          (u[6] = a))
        : (a = u[6]),
        u[7] !== k || u[8] !== w
          ? ((i =
              w || null == k
                ? null
                : (0, n.jsx)("span", { className: "ms-auto flex min-w-0 items-center", children: k })),
            (u[7] = k),
            (u[8] = w),
            (u[9] = i))
          : (i = u[9]),
        u[10] !== w || u[11] !== A || u[12] !== t || u[13] !== I || u[14] !== a || u[15] !== i
          ? ((s = (0, n.jsxs)("button", {
              "aria-expanded": w,
              className:
                "group/section-toggle -ms-[3.5px] inline-flex min-w-0 flex-1 cursor-interaction items-center gap-1 rounded-xl py-0.5 ps-[3.5px] pe-1 text-start focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
              onClick: A,
              type: "button",
              children: [t, I, a, i],
            })),
            (u[10] = w),
            (u[11] = A),
            (u[12] = t),
            (u[13] = I),
            (u[14] = a),
            (u[15] = i),
            (u[16] = s))
          : (s = u[16]))
      let _ = s,
        P = _
      if ("heading" === g) {
        let e
        ;(u[17] !== y
          ? ((e = (0, n.jsx)("h3", { className: "min-w-0 truncate select-none", children: y })),
            (u[17] = y),
            (u[18] = e))
          : (e = u[18]),
          (P = e))
      } else if ("dropdown" === g && S) {
        let e, t
        ;(u[19] !== C || u[20] !== v
          ? ((e = v?.map((e) => (0, n.jsx)(m.tJ, { onSelect: () => C?.(e), children: e }, e))),
            (u[19] = C),
            (u[20] = v),
            (u[21] = e))
          : (e = u[21]),
          u[22] !== e || u[23] !== _
            ? ((t = (0, n.jsx)(m.Ab, { triggerButton: _, children: e })), (u[22] = e), (u[23] = _), (u[24] = t))
            : (t = u[24]),
          (P = t))
      }
      let N =
          "panel" === p
            ? "bg-[var(--app-shell-panel-background,var(--color-surface))] before:bg-[var(--app-shell-panel-background,var(--color-surface))]"
            : "bg-surface-elevated-secondary before:bg-surface-elevated-secondary",
        R =
          f &&
          "ps-5 pe-3.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:ps-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:ps-5"
      return (
        u[25] !== N || u[26] !== R
          ? ((o = (0, r.$)(
              "sticky top-2 z-10 flex h-7 w-full min-w-0 items-center justify-start gap-2 pb-0.5 text-sm font-normal text-secondary before:pointer-events-none before:absolute before:inset-x-0 before:-top-2 before:h-2 before:content-[''] group-data-[summary-panel-variant=dynamic-isle]/summary-panel:h-6 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:h-7 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:pb-0 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row",
              N,
              R,
            )),
            (u[25] = N),
            (u[26] = R),
            (u[27] = o))
          : (o = u[27]),
        u[28] !== x || u[29] !== g
          ? ((d =
              null != x
                ? (0, n.jsx)("div", {
                    className: (0, r.$)("relative flex", "heading" === g ? "min-w-0 flex-1" : "shrink-0"),
                    children: x,
                  })
                : null),
            (u[28] = x),
            (u[29] = g),
            (u[30] = d))
          : (d = u[30]),
        u[31] !== P || u[32] !== d || u[33] !== o
          ? ((c = (0, n.jsxs)("header", { className: o, children: [P, d] })),
            (u[31] = P),
            (u[32] = d),
            (u[33] = o),
            (u[34] = c))
          : (c = u[34]),
        c
      )
    }
    a.d(
      t,
      {},
      {
        q: function (e) {
          let t,
            a,
            s,
            o,
            d,
            m,
            h,
            v,
            x,
            y,
            C,
            j,
            I,
            _,
            P,
            N = (0, l.c)(103),
            {
              autoCollapse: R,
              animateContentResize: U,
              sectionKey: D,
              analyticsControl: T,
              after: L,
              children: F,
              mode: O,
              ref: B,
              sectionOptions: E,
              defaultCollapsed: G,
              inset: q,
              divider: z,
              surface: V,
              spacing: $,
              persistExpansion: W,
              title: K,
              titleSuffix: Z,
              collapsedSummary: Q,
              onChange: H,
            } = e,
            J = void 0 !== U && U,
            X = void 0 === O ? "accordion" : O,
            Y = void 0 !== G && G,
            ee = void 0 === q || q,
            et = void 0 === V ? "elevated" : V,
            ea = void 0 === $ ? "section" : $,
            en = void 0 === W || W,
            el = (0, u.gh)(p.GD),
            { analytics: er } = (0, f.useContext)(b.G),
            ei = (0, u._U)(k, D),
            es = (0, u._U)(M, D),
            [eo, ed] = (0, f.useState)(!Y),
            ec = null != R && "canceled" !== ei,
            eu = (!0 !== R || "collapsed" !== ei) && (en ? (es ?? !Y) : eo),
            ef = (0, u.Ul)(g.x),
            em = ee
              ? "px-5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:px-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:px-5"
              : "px-2"
          N[0] !== em
            ? ((t = (0, r.$)(
                "flex flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0",
                em,
              )),
              (N[0] = em),
              (N[1] = t))
            : (t = N[1])
          let eh = t
          if (
            N[2] !== J ||
            N[3] !== ee ||
            N[4] !== eu ||
            N[5] !== X ||
            N[6] !== en ||
            N[7] !== el ||
            N[8] !== D ||
            N[9] !== ea
          ) {
            let e
            ;((a = (0, r.$)(
              "relative z-0",
              ("headerless" !== X || J) && ("standalone" === ea ? "overflow-clip" : "overflow-hidden"),
              !ee && "-mx-2",
            )),
              N[14] !== en || N[15] !== el || N[16] !== D
                ? ((e = (e) => {
                    en ? el.set(M, D, e) : ed(e)
                  }),
                  (N[14] = en),
                  (N[15] = el),
                  (N[16] = D),
                  (N[17] = e))
                : (e = N[17]),
              (s = e),
              (o = "headerless" === X || "heading" === X || eu || "dropdown" === X),
              (d = (0, r.$)(a, "mt-0.5")),
              (N[2] = J),
              (N[3] = ee),
              (N[4] = eu),
              (N[5] = X),
              (N[6] = en),
              (N[7] = el),
              (N[8] = D),
              (N[9] = ea),
              (N[10] = a),
              (N[11] = s),
              (N[12] = o),
              (N[13] = d))
          } else ((a = N[10]), (s = N[11]), (o = N[12]), (d = N[13]))
          ;(N[18] !== F || N[19] !== eh
            ? ((m = (0, n.jsx)("div", { className: eh, children: F })), (N[18] = F), (N[19] = eh), (N[20] = m))
            : (m = N[20]),
            N[21] !== d || N[22] !== m
              ? ((h = (0, n.jsx)("div", { className: d, children: m })), (N[21] = d), (N[22] = m), (N[23] = h))
              : (h = N[23]))
          let ep = h
          ;(N[24] !== s
            ? ((v = () => ({ collapse: () => s(!1), expand: () => s(!0) })), (N[24] = s), (N[25] = v))
            : (v = N[25]),
            (0, f.useImperativeHandle)(B, v),
            N[26] !== R || N[27] !== ei || N[28] !== ec || N[29] !== el || N[30] !== D
              ? ((x = () => {
                  if (!ec) return
                  if (!R) {
                    "collapsed" === ei && el.set(k, D, "pending")
                    return
                  }
                  if ("pending" !== ei) return
                  let e = window.setTimeout(() => {
                    el.set(k, D, "collapsed")
                  }, 3e4)
                  return () => window.clearTimeout(e)
                }),
                (y = [R, ei, ec, el, D]),
                (N[26] = R),
                (N[27] = ei),
                (N[28] = ec),
                (N[29] = el),
                (N[30] = D),
                (N[31] = x),
                (N[32] = y))
              : ((x = N[31]), (y = N[32])),
            (0, f.useEffect)(x, y),
            N[33] !== J || N[34] !== F || N[35] !== ep || N[36] !== a || N[37] !== eh || N[38] !== o || N[39] !== ef
              ? ((C = ef
                  ? o && ep
                  : (0, n.jsx)(i.N, {
                      initial: !1,
                      children:
                        o &&
                        (0, n.jsx)(
                          S,
                          { className: a, animateContentResize: J, sectionContentClassName: eh, children: F },
                          "content",
                        ),
                    })),
                (N[33] = J),
                (N[34] = F),
                (N[35] = ep),
                (N[36] = a),
                (N[37] = eh),
                (N[38] = o),
                (N[39] = ef),
                (N[40] = C))
              : (C = N[40]))
          let eg = C
          if ("row" === X) {
            let e,
              t,
              a,
              l,
              r = null != F
            ;(N[41] !== F || N[42] !== eu || N[43] !== s || N[44] !== K
              ? ((e =
                  null == F
                    ? K
                    : (0, n.jsx)(w.ye, {
                        "aria-expanded": eu,
                        className: "select-none",
                        onClick: () => s(!eu),
                        children: K,
                      })),
                (N[41] = F),
                (N[42] = eu),
                (N[43] = s),
                (N[44] = K),
                (N[45] = e))
              : (e = N[45]),
              N[46] !== L || N[47] !== eu
                ? ((t = c()(L) ? L({ isExpanded: eu }) : L), (N[46] = L), (N[47] = eu), (N[48] = t))
                : (t = N[48]),
              N[49] !== r || N[50] !== e || N[51] !== t
                ? ((a = (0, n.jsx)("div", {
                    className: "px-5",
                    children: (0, n.jsxs)(w.s7, { interactive: r, children: [e, t] }),
                  })),
                  (N[49] = r),
                  (N[50] = e),
                  (N[51] = t),
                  (N[52] = a))
                : (a = N[52]))
            let i = null == F ? null : eg
            return (
              N[53] !== a || N[54] !== i
                ? ((l = (0, n.jsxs)("section", {
                    className:
                      "flex min-w-0 flex-col group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-4",
                    children: [a, i],
                  })),
                  (N[53] = a),
                  (N[54] = i),
                  (N[55] = l))
                : (l = N[55]),
              l
            )
          }
          if ("card" === X || "plain" === X) {
            let e,
              t,
              a,
              l,
              i,
              s = "card" === X ? "gap-1" : "gap-2"
            ;(N[56] !== s
              ? ((e = (0, r.$)(
                  "flex min-w-0 flex-col group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-4",
                  s,
                )),
                (N[56] = s),
                (N[57] = e))
              : (e = N[57]),
              N[58] !== L || N[59] !== X || N[60] !== K
                ? ((t =
                    null != K || null != L
                      ? (0, n.jsxs)("header", {
                          className: (0, r.$)(
                            "flex min-w-0 items-center justify-between gap-2 text-sm text-secondary select-none group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row",
                            "card" === X && "px-1",
                          ),
                          children: [
                            null != K ? (0, n.jsx)("h3", { className: "truncate", children: K }) : null,
                            c()(L) ? L({ isExpanded: !0 }) : L,
                          ],
                        })
                      : null),
                  (N[58] = L),
                  (N[59] = X),
                  (N[60] = K),
                  (N[61] = t))
                : (t = N[61]))
            let o =
                "card" === X
                  ? "group/summary-card overflow-hidden rounded-2xl border border-default"
                  : "flex min-w-0 flex-col",
              d = "card" === X ? "card" : void 0
            return (
              N[62] !== J || N[63] !== F || N[64] !== ef
                ? ((a =
                    J && !ef
                      ? (0, n.jsx)(S, {
                          className: "overflow-hidden",
                          animateContentResize: !0,
                          collapsible: !1,
                          sectionContentClassName: "",
                          children: F,
                        })
                      : F),
                  (N[62] = J),
                  (N[63] = F),
                  (N[64] = ef),
                  (N[65] = a))
                : (a = N[65]),
              N[66] !== o || N[67] !== d || N[68] !== a
                ? ((l = (0, n.jsx)("div", { className: o, "data-variant": d, children: a })),
                  (N[66] = o),
                  (N[67] = d),
                  (N[68] = a),
                  (N[69] = l))
                : (l = N[69]),
              N[70] !== e || N[71] !== t || N[72] !== l
                ? ((i = (0, n.jsxs)("section", { className: e, children: [t, l] })),
                  (N[70] = e),
                  (N[71] = t),
                  (N[72] = l),
                  (N[73] = i))
                : (i = N[73]),
              i
            )
          }
          let ev =
              "nested" === ea
                ? "pt-3"
                : "pb-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:first:pt-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:first:pt-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:last:pb-4",
            ex =
              (void 0 === z || z) &&
              "after:absolute after:bottom-0 after:h-[0.5px] after:bg-border after:content-[''] last:after:hidden",
            ey = ee
              ? "after:inset-x-5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:after:inset-x-4"
              : "after:inset-x-0",
            ew = "accordion" !== X || eu || "standalone" === ea ? "last:pb-0" : "last:pb-0.5"
          return (
            N[74] !== ev || N[75] !== ex || N[76] !== ey || N[77] !== ew
              ? ((j = (0, r.$)("relative z-0 flex flex-col", ev, ex, ey, ew)),
                (N[74] = ev),
                (N[75] = ex),
                (N[76] = ey),
                (N[77] = ew),
                (N[78] = j))
              : (j = N[78]),
            N[79] !== ec || N[80] !== el || N[81] !== D
              ? ((I = ec
                  ? () => {
                      el.set(k, D, "canceled")
                    }
                  : void 0),
                (N[79] = ec),
                (N[80] = el),
                (N[81] = D),
                (N[82] = I))
              : (I = N[82]),
            N[83] !== L ||
            N[84] !== er ||
            N[85] !== T ||
            N[86] !== Q ||
            N[87] !== ee ||
            N[88] !== eu ||
            N[89] !== X ||
            N[90] !== H ||
            N[91] !== E ||
            N[92] !== s ||
            N[93] !== ef ||
            N[94] !== et ||
            N[95] !== K ||
            N[96] !== Z
              ? ((_ =
                  "headerless" !== X
                    ? (0, n.jsx)(A, {
                        inset: ee,
                        surface: et,
                        after: c()(L) ? L({ isExpanded: eu }) : L,
                        sectionOptions: E,
                        mode: X,
                        isExpanded: eu,
                        onChange: H,
                        onToggle: () => {
                          "dropdown" !== X && (T && (0, b.X)(er, T), s(!eu))
                        },
                        shouldUseReducedMotion: ef,
                        titleSuffix: Z,
                        collapsedSummary: Q,
                        children: K,
                      })
                    : null),
                (N[83] = L),
                (N[84] = er),
                (N[85] = T),
                (N[86] = Q),
                (N[87] = ee),
                (N[88] = eu),
                (N[89] = X),
                (N[90] = H),
                (N[91] = E),
                (N[92] = s),
                (N[93] = ef),
                (N[94] = et),
                (N[95] = K),
                (N[96] = Z),
                (N[97] = _))
              : (_ = N[97]),
            N[98] !== eg || N[99] !== j || N[100] !== I || N[101] !== _
              ? ((P = (0, n.jsxs)("section", { role: "presentation", className: j, onClick: I, children: [_, eg] })),
                (N[98] = eg),
                (N[99] = j),
                (N[100] = I),
                (N[101] = _),
                (N[102] = P))
              : (P = N[102]),
            P
          )
        },
      },
    )
  },
  ZAU2(e, t, a) {
    var n = a("iRMi"),
      l = a("zd8w"),
      r = a("yGJW")
    let i = (0, l.createContext)({ fullWidth: !1, isVisible: !0, isAnimating: !1, placement: "floating" })
    a.d(
      t,
      {},
      {
        G: i,
        X: function (e, t) {
          e &&
            (0, r.yy)(e.scope, n.CodexThreadSummaryPanelInteraction, {
              control: t,
              layout: e.layout,
              routeKind: e.scope.value.routeKind,
            })
        },
      },
    )
  },
  rLuO(e, t, a) {
    let n = (0, a("ESTr").a)({
      name: "circle-grid-2x2-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.974609, y: 1.974609, width: 12.050537, height: 12.048462 },
        visualBounds: { x: 1.974609, y: 1.974609, width: 12.050537, height: 12.048462 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.974609, y: 1.974609, width: 12.050537, height: 12.048462 },
        center: { x: 7.999878, y: 7.99884 },
        insets: { top: 1.974609, right: 1.974854, bottom: 1.976929, left: 1.974609 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999878, y: 7.99884 }, foreground: { x: 7.999878, y: 7.99884 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6.30859 4.66699C6.30859 3.76043 5.57351 3.02557 4.66699 3.02539C3.76032 3.02539 3.02539 3.76032 3.02539 4.66699C3.02557 5.57351 3.76043 6.30859 4.66699 6.30859C5.5734 6.30842 6.30842 5.5734 6.30859 4.66699ZM7.3584 4.66699C7.35822 6.1533 6.1533 7.35822 4.66699 7.3584C3.18053 7.3584 1.97479 6.15341 1.97461 4.66699C1.97461 3.18043 3.18043 1.97461 4.66699 1.97461C6.15341 1.97479 7.3584 3.18053 7.3584 4.66699Z" fill="currentColor"/> <path d="M6.30859 11.3317C6.30859 10.4251 5.57351 9.69024 4.66699 9.69006C3.76032 9.69006 3.02539 10.425 3.02539 11.3317C3.02557 12.2382 3.76043 12.9733 4.66699 12.9733C5.5734 12.9731 6.30842 12.2381 6.30859 11.3317ZM7.3584 11.3317C7.35822 12.818 6.1533 14.0229 4.66699 14.0231C3.18053 14.0231 1.97479 12.8181 1.97461 11.3317C1.97461 9.8451 3.18043 8.63928 4.66699 8.63928C6.15341 8.63946 7.3584 9.84521 7.3584 11.3317Z" fill="currentColor"/> <path d="M12.9753 4.66699C12.9753 3.76043 12.2403 3.02557 11.3337 3.02539C10.4271 3.02539 9.69214 3.76032 9.69214 4.66699C9.69231 5.57351 10.4272 6.30859 11.3337 6.30859C12.2401 6.30842 12.9752 5.5734 12.9753 4.66699ZM14.0251 4.66699C14.025 6.1533 12.82 7.35822 11.3337 7.3584C9.84728 7.3584 8.64153 6.15341 8.64136 4.66699C8.64136 3.18043 9.84717 1.97461 11.3337 1.97461C12.8202 1.97479 14.0251 3.18053 14.0251 4.66699Z" fill="currentColor"/> <path d="M12.9753 11.3317C12.9753 10.4251 12.2403 9.69024 11.3337 9.69006C10.4271 9.69006 9.69214 10.425 9.69214 11.3317C9.69231 12.2382 10.4272 12.9733 11.3337 12.9733C12.2401 12.9731 12.9752 12.2381 12.9753 11.3317ZM14.0251 11.3317C14.025 12.818 12.82 14.0229 11.3337 14.0231C9.84728 14.0231 8.64153 12.8181 8.64136 11.3317C8.64136 9.8451 9.84717 8.63928 11.3337 8.63928C12.8202 8.63946 14.0251 9.84521 14.0251 11.3317Z" fill="currentColor"/>',
    })
    a.d(t, {}, { o: n })
  },
  SpZ6(e, t, a) {
    let n = (0, a("ESTr").a)({
      name: "request-draft-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.307861, y: 1.974609, width: 11.383789, height: 12.050781 },
        visualBounds: { x: 2.307861, y: 1.974609, width: 11.383789, height: 12.050781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.307861, y: 1.974609, width: 11.383789, height: 12.050781 },
        center: { x: 7.999756, y: 8 },
        insets: { top: 1.974609, right: 2.30835, bottom: 1.97461, left: 2.307861 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999756, y: 8 }, foreground: { x: 7.999756, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M4.33325 1.97461C5.45163 1.97461 6.35864 2.88162 6.35864 4C6.35864 4.93645 5.7221 5.72243 4.85864 5.9541V10.0449C5.72223 10.2765 6.35864 11.0635 6.35864 12C6.35864 13.1184 5.45163 14.0254 4.33325 14.0254C3.21488 14.0254 2.30786 13.1184 2.30786 12C2.30786 11.0635 2.94428 10.2765 3.80786 10.0449V5.9541C2.9444 5.72243 2.30786 4.93645 2.30786 4C2.30786 2.88162 3.21488 1.97461 4.33325 1.97461ZM4.33325 11.0254C3.79477 11.0254 3.35864 11.4615 3.35864 12C3.35864 12.5385 3.79477 12.9746 4.33325 12.9746C4.87173 12.9746 5.30786 12.5385 5.30786 12C5.30786 11.4615 4.87173 11.0254 4.33325 11.0254ZM4.33325 3.02539C3.79477 3.02539 3.35864 3.46152 3.35864 4C3.35864 4.53848 3.79477 4.97461 4.33325 4.97461C4.87173 4.97461 5.30786 4.53848 5.30786 4C5.30786 3.46152 4.87173 3.02539 4.33325 3.02539Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M11.6663 9.97461C12.7846 9.97461 13.6917 10.8816 13.6917 12C13.6917 13.1184 12.7846 14.0254 11.6663 14.0254C10.548 14.0253 9.64087 13.1183 9.64087 12C9.64087 10.8817 10.548 9.97474 11.6663 9.97461ZM11.6663 11.0254C11.1279 11.0255 10.6917 11.4616 10.6917 12C10.6917 12.5384 11.1279 12.9745 11.6663 12.9746C12.2047 12.9746 12.6409 12.5385 12.6409 12C12.6409 11.4615 12.2047 11.0254 11.6663 11.0254Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M11.6643 6.45703C12.2491 6.4573 12.7238 6.93178 12.7239 7.5166C12.7239 8.1015 12.2491 8.57591 11.6643 8.57617C11.0793 8.57608 10.6047 8.10161 10.6047 7.5166C10.6048 6.93167 11.0794 6.45712 11.6643 6.45703Z" fill="currentColor"/> <path d="M11.6643 2.94043C12.2491 2.94069 12.7238 3.41518 12.7239 4C12.7236 4.58467 12.249 5.05931 11.6643 5.05957C11.0795 5.05948 10.605 4.58478 10.6047 4C10.6048 3.41507 11.0794 2.94052 11.6643 2.94043Z" fill="currentColor"/>',
    })
    a.d(t, {}, { Q: n })
  },
  lkic(e, t, a) {
    function n(e) {
      let t = [0],
        a = e.indexOf("\r"),
        n = e.indexOf("\n"),
        l = 0,
        r = 0
      for (; -1 !== a || -1 !== n;) {
        let i
        if (
          (-1 !== a && (-1 === n || a < n)
            ? n === a + 1
              ? ((i = n + 1), (a = e.indexOf("\r", i)), (n = e.indexOf("\n", i)))
              : ((i = a + 1), (a = e.indexOf("\r", i)))
            : ((i = n + 1), (n = e.indexOf("\n", i))),
          t.push(i),
          4 == ++r)
        ) {
          if (i - l <= 40) {
            for (let a = i; a < e.length; a++) {
              let n = e.charCodeAt(a)
              ;(10 === n || 13 === n) &&
                (13 === n && a + 1 < e.length && 10 === e.charCodeAt(a + 1) && a++, t.push(a + 1))
            }
            return t
          }
          ;((l = i), (r = 0))
        }
      }
      return t
    }
    a.d(
      t,
      {},
      {
        Cl: function (e) {
          let t = 0
          for (let a = 0; a < e.length; a++) {
            let n = e.charCodeAt(a)
            ;(10 === n || 13 === n) && (13 === n && a + 1 < e.length && 10 === e.charCodeAt(a + 1) && a++, t++)
          }
          return t
        },
        sX: function (e) {
          let t = n(e)
          return Array.from({ length: t.length }, (a, n) => {
            let l = t[n],
              r = t[n + 1] ?? e.length
            return e.slice(l, r)
          })
        },
        sr: n,
      },
    )
  },
  duD4(e, t, a) {
    function n(e, [t, a]) {
      return Math.min(a, Math.max(t, e))
    }
    ;((0, Object.defineProperty)(n, "name", { value: "clamp", configurable: !0 }), a.d(t, {}, { q: n }))
  },
}
//# sourceMappingURL=10633.4e01be213d.js.map
