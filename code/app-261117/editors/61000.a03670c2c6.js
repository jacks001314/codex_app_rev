export const __rspack_esm_ids = [61e3]
export const __webpack_modules__ = {
  NvrT(e, t, n) {
    n.d(t, { R: () => C, Z: () => k })
    var i = n("ABep"),
      a = n("QosV"),
      l = n("on57"),
      s = n("qmMi"),
      r = n("zd8w"),
      o = n("Wf1j"),
      c = n("Vc45"),
      d = n("OWtl"),
      u = n("j9wQ"),
      f = n("Hjmv")
    let m = (0, n("Bbed")._)(async () => (await n.e(270393).then(n.bind(n, "VfBj"))).FileInfoPanel)
    var p = n("oyxz"),
      h = n("Qgfj"),
      x = n("SPnB"),
      g = n("LhhH"),
      v = n("Sm6l"),
      y = n("RNul"),
      b = n("ibLK"),
      w = n("lOWF")
    function j(e) {
      let t,
        n,
        l,
        r,
        f,
        m,
        h,
        x,
        g,
        w = (0, a.c)(40),
        { history: j } = e,
        k = (0, s.gh)(d.u),
        C = (0, o.A)(),
        A = (0, b.U)("(max-width: 767px)"),
        F = j.versions
      if (w[0] !== j || w[1] !== C || w[2] !== A || w[3] !== k || w[4] !== F) {
        let e,
          a,
          s =
            null == F
              ? []
              : (function (e) {
                  let t = []
                  for (let n of e) {
                    let e = new Date(n.version_created_at ?? n.file_upload_time)
                    e.setHours(0, 0, 0, 0)
                    let i = t.at(-1)
                    i?.dayStart === e.getTime() ? i.versions.push(n) : t.push({ dayStart: e.getTime(), versions: [n] })
                  }
                  return t
                })(F),
          o = j.isRestoring
        ;(w[10] !== C
          ? ((e = C.formatMessage({
              id: "chatgptFilePreview.versionHistory.close",
              defaultMessage: "Close version history",
            })),
            (w[10] = C),
            (w[11] = e))
          : (e = w[11]),
          w[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, i.jsx)(p.A, {
                id: "chatgptFilePreview.versionHistory.title",
                defaultMessage: "Version history",
              })),
              (w[12] = a))
            : (a = w[12]),
          w[13] !== j.close || w[14] !== j.isRestoring || w[15] !== e
            ? ((f = (0, i.jsx)(u.xx, { closeDisabled: o, closeLabel: e, title: a, onClose: j.close })),
              (w[13] = j.close),
              (w[14] = j.isRestoring),
              (w[15] = e),
              (w[16] = f))
            : (f = w[16]),
          (t = "min-h-0 flex-1 overflow-y-auto px-3 py-4"),
          w[17] !== j.isPending
            ? ((n = j.isPending
                ? (0, i.jsxs)("div", {
                    className: "flex h-20 items-center justify-center",
                    role: "status",
                    children: [
                      (0, i.jsx)(y.y, {}),
                      (0, i.jsx)("span", {
                        className: "sr-only",
                        children: (0, i.jsx)(p.A, {
                          id: "chatgptFilePreview.versionHistory.loading",
                          defaultMessage: "Loading version history\u2026",
                        }),
                      }),
                    ],
                  })
                : null),
              (w[17] = j.isPending),
              (w[18] = n))
            : (n = w[18]),
          w[19] !== F?.length
            ? ((l =
                F?.length === 0
                  ? (0, i.jsx)("p", {
                      className: "text-sm text-tertiary",
                      children: (0, i.jsx)(p.A, {
                        id: "chatgptFilePreview.versionHistory.empty",
                        defaultMessage: "No saved versions",
                      }),
                    })
                  : null),
              (w[19] = F?.length),
              (w[20] = l))
            : (l = w[20]),
          (r =
            s.length > 0
              ? (0, i.jsx)("div", {
                  className: "flex flex-col gap-6",
                  children: s.map((e) =>
                    (0, i.jsxs)(
                      "section",
                      {
                        children: [
                          (0, i.jsx)("h3", {
                            className: "mb-3 px-1 text-sm font-medium text-tertiary",
                            children: (0, i.jsx)(P, { dayStart: e.dayStart }),
                          }),
                          (0, i.jsx)("ol", {
                            children: e.versions.map((t, n) =>
                              (0, i.jsx)(
                                N,
                                {
                                  isLast: n === e.versions.length - 1,
                                  isRestoring: j.isRestoring,
                                  isSelected: t === j.selectedVersion,
                                  version: t,
                                  onSelect: () => {
                                    ;(j.select(t), A && k.set(c.y$, j.ownerId, _))
                                  },
                                },
                                t.version_number,
                              ),
                            ),
                          }),
                        ],
                      },
                      e.dayStart,
                    ),
                  ),
                })
              : null),
          (w[0] = j),
          (w[1] = C),
          (w[2] = A),
          (w[3] = k),
          (w[4] = F),
          (w[5] = t),
          (w[6] = n),
          (w[7] = l),
          (w[8] = r),
          (w[9] = f))
      } else ((t = w[5]), (n = w[6]), (l = w[7]), (r = w[8]), (f = w[9]))
      return (
        w[21] !== j.isError || w[22] !== j.isFetching || w[23] !== j.refetch
          ? ((m = j.isError
              ? (0, i.jsxs)("div", {
                  className: "flex items-center justify-between gap-3 py-2 text-sm text-tertiary",
                  children: [
                    (0, i.jsx)(p.A, {
                      id: "chatgptFilePreview.versionHistory.loadFailed",
                      defaultMessage: "Couldn\u2019t load version history",
                    }),
                    (0, i.jsx)(v.$, {
                      color: "secondary",
                      size: "compact",
                      loading: j.isFetching,
                      onClick: j.refetch,
                      children: (0, i.jsx)(p.A, {
                        id: "chatgptFilePreview.versionHistory.retry",
                        defaultMessage: "Retry",
                      }),
                    }),
                  ],
                })
              : null),
            (w[21] = j.isError),
            (w[22] = j.isFetching),
            (w[23] = j.refetch),
            (w[24] = m))
          : (m = w[24]),
        w[25] !== j.fetchNextPage || w[26] !== j.hasNextPage || w[27] !== j.isError || w[28] !== j.isFetchingNextPage
          ? ((h =
              !j.isError && j.hasNextPage
                ? (0, i.jsx)(v.$, {
                    color: "secondary",
                    loading: j.isFetchingNextPage,
                    size: "compact",
                    onClick: j.fetchNextPage,
                    children: (0, i.jsx)(p.A, {
                      id: "chatgptFilePreview.versionHistory.showMore",
                      defaultMessage: "Show more",
                    }),
                  })
                : null),
            (w[25] = j.fetchNextPage),
            (w[26] = j.hasNextPage),
            (w[27] = j.isError),
            (w[28] = j.isFetchingNextPage),
            (w[29] = h))
          : (h = w[29]),
        w[30] !== t || w[31] !== n || w[32] !== l || w[33] !== r || w[34] !== m || w[35] !== h
          ? ((x = (0, i.jsxs)("div", { className: t, children: [n, l, r, m, h] })),
            (w[30] = t),
            (w[31] = n),
            (w[32] = l),
            (w[33] = r),
            (w[34] = m),
            (w[35] = h),
            (w[36] = x))
          : (x = w[36]),
        w[37] !== f || w[38] !== x
          ? ((g = (0, i.jsxs)(i.Fragment, { children: [f, x] })), (w[37] = f), (w[38] = x), (w[39] = g))
          : (g = w[39]),
        g
      )
    }
    function _() {
      return { accessory: "version-history", phase: "preview" }
    }
    function N(e) {
      let t,
        n,
        c,
        d,
        u,
        f,
        m,
        v,
        y,
        b,
        j,
        _,
        N,
        P,
        k = (0, a.c)(47),
        { isLast: C, isRestoring: A, isSelected: F, version: I, onSelect: M } = e,
        S = (0, o.A)(),
        H = (0, s.Ul)(x.Kw),
        R = (0, r.useId)(),
        T = I.version_provenance?.action ?? (0 === I.version_number ? "create" : "edit"),
        $ = I.version_provenance?.actor === "agent",
        E = I.version_provenance?.actor_id?.trim(),
        B = !$ && null != E && null != H && E !== H
      if ($) {
        let e
        ;(k[0] !== S
          ? ((e = S.formatMessage({ id: "chatgptFilePreview.versionHistory.chatgpt", defaultMessage: "ChatGPT" })),
            (k[0] = S),
            (k[1] = e))
          : (e = k[1]),
          (t = e))
      } else if (B) {
        let e
        ;(k[2] !== S
          ? ((e = S.formatMessage({
              id: "chatgptFilePreview.versionHistory.collaborator",
              defaultMessage: "Collaborator",
            })),
            (k[2] = S),
            (k[3] = e))
          : (e = k[3]),
          (t = e))
      }
      k[4] !== I.version_provenance?.reason
        ? ((n = I.version_provenance?.reason?.trim()), (k[4] = I.version_provenance?.reason), (k[5] = n))
        : (n = k[5])
      let L = n,
        D = I.version_created_at ?? I.file_upload_time
      if (I.is_current) {
        let e
        ;(k[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(p.A, {
              id: "chatgptFilePreview.versionHistory.currentVersion",
              defaultMessage: "Current version",
            })),
            (k[6] = e))
          : (e = k[6]),
          (c = e))
      } else if (L) c = L
      else {
        let e
        ;(k[7] !== T
          ? ((e = (0, i.jsx)(p.A, {
              id: "chatgptFilePreview.versionHistory.versionKind",
              defaultMessage: "{action, select, create {Created} restore {Restored} other {Edited}}",
              values: { action: T },
            })),
            (k[7] = T),
            (k[8] = e))
          : (e = k[8]),
          (c = e))
      }
      k[9] !== C
        ? ((d = C
            ? null
            : (0, i.jsx)("span", {
                "aria-hidden": "true",
                className: "pointer-events-none absolute start-1 top-6 -bottom-2 flex w-1.5 justify-center",
                children: (0, i.jsx)("span", { className: "w-px bg-border" }),
              })),
          (k[9] = C),
          (k[10] = d))
        : (d = k[10])
      let z = I.is_current ? "bg-text" : "bg-text-tertiary"
      ;(k[11] !== z
        ? ((u = (0, l.A)("pointer-events-none absolute start-1 top-3.5 size-1.5 rounded-full", z)),
          (k[11] = z),
          (k[12] = u))
        : (u = k[12]),
        k[13] !== u
          ? ((f = (0, i.jsx)("span", { "aria-hidden": "true", className: u })), (k[13] = u), (k[14] = f))
          : (f = k[14]))
      let O = F ? "page" : void 0,
        U = null == t ? `${R}-time ${R}-description` : `${R}-time ${R}-description ${R}-actor`
      k[15] !== S || k[16] !== I.version_number
        ? ((m = S.formatMessage(
            { id: "chatgptFilePreview.versionHistory.version", defaultMessage: "Version {version}" },
            { version: I.version_number },
          )),
          (k[15] = S),
          (k[16] = I.version_number),
          (k[17] = m))
        : (m = k[17])
      let Q = F ? "bg-primary-soft-active" : "hover:bg-secondary-ghost-hover focus-within:bg-secondary-ghost-hover"
      k[18] !== Q
        ? ((v = (0, l.A)(
            "w-full cursor-interaction rounded-xl p-2 text-start transition-colors focus-visible:outline-2 focus-visible:outline-ring disabled:cursor-default",
            Q,
          )),
          (k[18] = Q),
          (k[19] = v))
        : (v = k[19])
      let V = `${R}-time`
      ;(k[20] !== D
        ? ((y = (0, i.jsx)(h.XU, { value: D, hour: "numeric", minute: "2-digit" })), (k[20] = D), (k[21] = y))
        : (y = k[21]),
        k[22] !== V || k[23] !== y || k[24] !== D
          ? ((b = (0, i.jsx)("time", {
              id: V,
              className: "block text-sm leading-5 text-tertiary",
              dateTime: D,
              children: y,
            })),
            (k[22] = V),
            (k[23] = y),
            (k[24] = D),
            (k[25] = b))
          : (b = k[25]))
      let W = `${R}-description`
      return (
        k[26] !== W || k[27] !== c
          ? ((j = (0, i.jsx)("span", { id: W, className: "mt-1 block text-sm leading-5 text-default", children: c })),
            (k[26] = W),
            (k[27] = c),
            (k[28] = j))
          : (j = k[28]),
        k[29] !== t || k[30] !== R || k[31] !== $
          ? ((_ =
              null == t
                ? null
                : (0, i.jsxs)("span", {
                    id: `${R}-actor`,
                    className: "mt-1 flex items-center gap-1.5 text-xs leading-4 text-tertiary",
                    children: [
                      $
                        ? (0, i.jsx)(w.A, { "aria-hidden": !0, className: "size-3.5 shrink-0" })
                        : (0, i.jsx)(g.e, { alt: "", colorKey: t, name: t, size: "inline", src: null }),
                      (0, i.jsx)("span", { className: "truncate", children: t }),
                    ],
                  })),
            (k[29] = t),
            (k[30] = R),
            (k[31] = $),
            (k[32] = _))
          : (_ = k[32]),
        k[33] !== A ||
        k[34] !== M ||
        k[35] !== v ||
        k[36] !== b ||
        k[37] !== j ||
        k[38] !== _ ||
        k[39] !== O ||
        k[40] !== U ||
        k[41] !== m
          ? ((N = (0, i.jsxs)("button", {
              type: "button",
              "aria-current": O,
              "aria-describedby": U,
              "aria-label": m,
              className: v,
              disabled: A,
              onClick: M,
              children: [b, j, _],
            })),
            (k[33] = A),
            (k[34] = M),
            (k[35] = v),
            (k[36] = b),
            (k[37] = j),
            (k[38] = _),
            (k[39] = O),
            (k[40] = U),
            (k[41] = m),
            (k[42] = N))
          : (N = k[42]),
        k[43] !== N || k[44] !== d || k[45] !== f
          ? ((P = (0, i.jsxs)("li", { className: "relative ps-5 pb-5 last:pb-0", children: [d, f, N] })),
            (k[43] = N),
            (k[44] = d),
            (k[45] = f),
            (k[46] = P))
          : (P = k[46]),
        P
      )
    }
    function P(e) {
      let t,
        n,
        l,
        s,
        r,
        o,
        c,
        d = (0, a.c)(15),
        { dayStart: u } = e
      if (d[0] !== u) {
        o = Symbol.for("react.early_return_sentinel")
        e: {
          let e = new Date()
          e.setHours(0, 0, 0, 0)
          let a = new Date(e)
          if ((a.setDate(a.getDate() - 1), u === e.getTime())) {
            let e
            ;(d[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(p.A, { id: "chatgptFilePreview.versionHistory.today", defaultMessage: "Today" })),
                (d[7] = e))
              : (e = d[7]),
              (o = e))
            break e
          }
          if (u === a.getTime()) {
            let e
            ;(d[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(p.A, {
                  id: "chatgptFilePreview.versionHistory.yesterday",
                  defaultMessage: "Yesterday",
                })),
                (d[8] = e))
              : (e = d[8]),
              (o = e))
            break e
          }
          ;((t = h.XU),
            (n = u),
            (l = "short"),
            (s = "numeric"),
            (r = new Date(u).getFullYear() === e.getFullYear() ? void 0 : "numeric"))
        }
        ;((d[0] = u), (d[1] = t), (d[2] = n), (d[3] = l), (d[4] = s), (d[5] = r), (d[6] = o))
      } else ((t = d[1]), (n = d[2]), (l = d[3]), (s = d[4]), (r = d[5]), (o = d[6]))
      return o !== Symbol.for("react.early_return_sentinel")
        ? o
        : (d[9] !== t || d[10] !== n || d[11] !== l || d[12] !== s || d[13] !== r
            ? ((c = (0, i.jsx)(t, { value: n, month: l, day: s, year: r })),
              (d[9] = t),
              (d[10] = n),
              (d[11] = l),
              (d[12] = s),
              (d[13] = r),
              (d[14] = c))
            : (c = d[14]),
          c)
    }
    function k(e) {
      let t,
        n,
        l = (0, a.c)(15),
        {
          accountId: s,
          comments: r,
          contentOverflow: o,
          fileInfoSource: c,
          layout: d,
          ownerId: u,
          renderLayout: m,
          userId: p,
          versionHistory: h,
        } = e,
        x = "overlay" === d.headerPlacement
      return (
        l[0] !== s ||
        l[1] !== r ||
        l[2] !== o ||
        l[3] !== c ||
        l[4] !== d.content ||
        l[5] !== d.panels ||
        l[6] !== u ||
        l[7] !== x ||
        l[8] !== p ||
        l[9] !== h
          ? ((t = (0, i.jsx)(C, {
              accountId: s,
              comments: r,
              contentOverflow: o,
              fileInfoSource: c,
              ownerId: u,
              panelClearsHeader: x,
              panels: d.panels,
              userId: p,
              versionHistory: h,
              children: d.content,
            })),
            (l[0] = s),
            (l[1] = r),
            (l[2] = o),
            (l[3] = c),
            (l[4] = d.content),
            (l[5] = d.panels),
            (l[6] = u),
            (l[7] = x),
            (l[8] = p),
            (l[9] = h),
            (l[10] = t))
          : (t = l[10]),
        l[11] !== d || l[12] !== m || l[13] !== t
          ? ((n = (0, i.jsx)(f.t, { ...d, content: t, renderLayout: m })),
            (l[11] = d),
            (l[12] = m),
            (l[13] = t),
            (l[14] = n))
          : (n = l[14]),
        n
      )
    }
    function C(e) {
      let t,
        n = (0, a.c)(18),
        {
          accountId: l,
          children: s,
          comments: r,
          contentOverflow: o,
          fileInfoSource: c,
          ownerId: d,
          panelClearsHeader: u,
          panels: f,
          userId: m,
          versionHistory: p,
        } = e
      if (null == d) {
        let e, t
        return (
          n[0] !== f
            ? ((e = null != f && f.length > 0 ? (0, i.jsx)(M, { panels: f }) : null), (n[0] = f), (n[1] = e))
            : (e = n[1]),
          n[2] !== s || n[3] !== o || n[4] !== u || n[5] !== e
            ? ((t = (0, i.jsx)(I, { contentOverflow: o, panelClearsHeader: u, panel: e, children: s })),
              (n[2] = s),
              (n[3] = o),
              (n[4] = u),
              (n[5] = e),
              (n[6] = t))
            : (t = n[6]),
          t
        )
      }
      return (
        n[7] !== l ||
        n[8] !== s ||
        n[9] !== r ||
        n[10] !== o ||
        n[11] !== c ||
        n[12] !== d ||
        n[13] !== u ||
        n[14] !== f ||
        n[15] !== m ||
        n[16] !== p
          ? ((t = (0, i.jsx)(A, {
              accountId: l,
              comments: r,
              contentOverflow: o,
              fileInfoSource: c,
              ownerId: d,
              panelClearsHeader: u,
              panels: f,
              userId: m,
              versionHistory: p,
              children: s,
            })),
            (n[7] = l),
            (n[8] = s),
            (n[9] = r),
            (n[10] = o),
            (n[11] = c),
            (n[12] = d),
            (n[13] = u),
            (n[14] = f),
            (n[15] = m),
            (n[16] = p),
            (n[17] = t))
          : (t = n[17]),
        t
      )
    }
    function A(e) {
      let t,
        n,
        r,
        u,
        f,
        p,
        h,
        x,
        g = (0, a.c)(37),
        {
          accountId: v,
          children: y,
          comments: b,
          contentOverflow: w,
          fileInfoSource: _,
          ownerId: N,
          panelClearsHeader: P,
          panels: k,
          userId: C,
          versionHistory: A,
        } = e,
        S = (0, s.gh)(d.u),
        H = (0, s._U)(c.y$, N),
        R = (0, o.A)(),
        T = (0, s._U)(c.IB, N),
        $ = A ?? T,
        E = H?.accessory
      ;(g[0] !== N || g[1] !== S
        ? ((t = () => (0, c.J)(S, N, "file-info")), (g[0] = N), (g[1] = S), (g[2] = t))
        : (t = g[2]),
        g[3] !== E || g[4] !== v || g[5] !== _ || g[6] !== $ || g[7] !== t || g[8] !== C
          ? ((n = (function ({
              accountId: e,
              accessory: t,
              fileInfoSource: n,
              userId: a,
              versionHistory: l,
              onCloseFileInfo: s,
            }) {
              return "file-info" === t && null != n
                ? (0, i.jsx)(m, { accountId: e, source: n, userId: a, onClose: s })
                : "version-history" === t && null != l
                  ? (0, i.jsx)(j, { history: l })
                  : null
            })({ accountId: v, accessory: E, fileInfoSource: _, userId: C, versionHistory: $, onCloseFileInfo: t })),
            (g[3] = E),
            (g[4] = v),
            (g[5] = _),
            (g[6] = $),
            (g[7] = t),
            (g[8] = C),
            (g[9] = n))
          : (n = g[9]))
      let B = n,
        L = "comments" === E ? null != b : null != B,
        D = "version-history" === E && $?.isRestoring
      if (g[10] !== E || g[11] !== R)
        ((r =
          "file-info" === E
            ? R.formatMessage({ id: "chatgptFilePreview.fileInfo.title", defaultMessage: "File info" })
            : "version-history" === E
              ? R.formatMessage({ id: "chatgptFilePreview.versionHistory.title", defaultMessage: "Version history" })
              : R.formatMessage({ id: "artifactComments.heading", defaultMessage: "Comments" })),
          (g[10] = E),
          (g[11] = R),
          (g[12] = r))
      else r = g[12]
      g[13] !== E || g[14] !== N || g[15] !== S
        ? ((u = () => {
            null != E && (0, c.zg)(S, N, E)
          }),
          (g[13] = E),
          (g[14] = N),
          (g[15] = S),
          (g[16] = u))
        : (u = g[16])
      let z = L && H?.phase === "open"
      g[17] !== b || g[18] !== k
        ? ((f = null == b ? k : k?.filter(F)), (g[17] = b), (g[18] = k), (g[19] = f))
        : (f = g[19])
      let O = "file-info" === E || "version-history" === E || ("comments" === E && null != b)
      g[20] !== E || g[21] !== b
        ? ((p =
            null != b &&
            (0, i.jsx)("div", {
              className: (0, l.A)("flex min-h-0 flex-1 flex-col", "comments" !== E && "hidden"),
              children: b,
            })),
          (g[20] = E),
          (g[21] = b),
          (g[22] = p))
        : (p = g[22])
      let U = "comments" === E || H?.phase !== "open" ? null : B
      return (
        g[23] !== U ||
        g[24] !== D ||
        g[25] !== r ||
        g[26] !== u ||
        g[27] !== z ||
        g[28] !== f ||
        g[29] !== O ||
        g[30] !== p
          ? ((h = (0, i.jsxs)(M, {
              busy: D,
              label: r,
              onExitComplete: u,
              open: z,
              panels: f,
              hideEditorPanels: O,
              children: [p, U],
            })),
            (g[23] = U),
            (g[24] = D),
            (g[25] = r),
            (g[26] = u),
            (g[27] = z),
            (g[28] = f),
            (g[29] = O),
            (g[30] = p),
            (g[31] = h))
          : (h = g[31]),
        g[32] !== y || g[33] !== w || g[34] !== P || g[35] !== h
          ? ((x = (0, i.jsx)(I, { contentOverflow: w, panelClearsHeader: P, panel: h, children: y })),
            (g[32] = y),
            (g[33] = w),
            (g[34] = P),
            (g[35] = h),
            (g[36] = x))
          : (x = g[36]),
        x
      )
    }
    function F(e) {
      return "comments" !== e.id
    }
    function I(e) {
      let t,
        n,
        s,
        r,
        o,
        c,
        d = (0, a.c)(17),
        { children: u, contentOverflow: f, panel: m, panelClearsHeader: p } = e,
        h = void 0 === f ? "hidden" : f,
        x = "hidden" === h && "overflow-hidden"
      d[0] !== x
        ? ((t = (0, l.A)("relative flex h-full min-h-0 min-w-0 flex-1", x)), (d[0] = x), (d[1] = t))
        : (t = d[1])
      let g = "hidden" === h && "overflow-hidden"
      ;(d[2] !== g
        ? ((n = (0, l.A)("flex h-full min-h-0 min-w-0 flex-1 flex-col", g)), (d[2] = g), (d[3] = n))
        : (n = d[3]),
        d[4] !== u || d[5] !== n
          ? ((s = (0, i.jsx)("div", { className: n, children: u })), (d[4] = u), (d[5] = n), (d[6] = s))
          : (s = d[6]))
      let v = "visible" === h && "start-0 justify-items-end overflow-hidden",
        y = void 0 !== p && p && "pt-13"
      return (
        d[7] !== v || d[8] !== y
          ? ((r = (0, l.A)("pointer-events-none absolute inset-y-0 end-0 grid min-h-0 max-w-full min-w-0", v, y)),
            (d[7] = v),
            (d[8] = y),
            (d[9] = r))
          : (r = d[9]),
        d[10] !== m || d[11] !== r
          ? ((o = (0, i.jsx)("div", { className: r, children: m })), (d[10] = m), (d[11] = r), (d[12] = o))
          : (o = d[12]),
        d[13] !== o || d[14] !== t || d[15] !== s
          ? ((c = (0, i.jsxs)("div", { className: t, children: [s, o] })),
            (d[13] = o),
            (d[14] = t),
            (d[15] = s),
            (d[16] = c))
          : (c = d[16]),
        c
      )
    }
    function M(e) {
      let t,
        n,
        s,
        o,
        c,
        d = (0, a.c)(20),
        { busy: f, children: m, hideEditorPanels: p, label: h, onExitComplete: x, open: g, panels: v } = e,
        y = void 0 !== p && p,
        b = void 0 !== g && g
      d[0] !== y || d[1] !== v ? ((t = y ? void 0 : v?.find(S)), (d[0] = y), (d[1] = v), (d[2] = t)) : (t = d[2])
      let w = t,
        [j, _] = (0, r.useState)(null),
        N = w?.id ?? (b ? null : j)
      ;(N !== j && _(N),
        d[3] !== h || d[4] !== v || d[5] !== N
          ? ((n = null == N ? h : v?.find((e) => e.id === N)?.title), (d[3] = h), (d[4] = v), (d[5] = N), (d[6] = n))
          : (n = d[6]))
      let P = n,
        k = null == N ? f : void 0,
        C = "string" == typeof P ? P : void 0,
        A = b || null != w
      return (
        d[7] !== m || d[8] !== N
          ? ((s =
              null != m &&
              (0, i.jsx)("div", {
                className: (0, l.A)("flex min-h-0 flex-1 flex-col", null != N && "hidden"),
                "aria-hidden": null != N,
                inert: null != N,
                children: m,
              })),
            (d[7] = m),
            (d[8] = N),
            (d[9] = s))
          : (s = d[9]),
        d[10] !== v || d[11] !== N
          ? ((o = v?.map((e) =>
              (0, i.jsx)(
                "div",
                {
                  className: (0, l.A)("flex min-h-0 flex-1 flex-col", e.id !== N && "hidden"),
                  "aria-hidden": e.id !== N,
                  inert: e.id !== N,
                  children: e.content,
                },
                e.id,
              ),
            )),
            (d[10] = v),
            (d[11] = N),
            (d[12] = o))
          : (o = d[12]),
        d[13] !== x || d[14] !== k || d[15] !== C || d[16] !== A || d[17] !== s || d[18] !== o
          ? ((c = (0, i.jsxs)(u.Io, {
              busy: k,
              className: "pointer-events-auto",
              label: C,
              onExitComplete: x,
              open: A,
              preserveContent: !0,
              size: "compact",
              children: [s, o],
            })),
            (d[13] = x),
            (d[14] = k),
            (d[15] = C),
            (d[16] = A),
            (d[17] = s),
            (d[18] = o),
            (d[19] = c))
          : (c = d[19]),
        c
      )
    }
    function S(e) {
      return e.open
    }
  },
  DIdv(e, t, n) {
    var i = n("w7Qu"),
      a = n("bWX0")
    let l = /^external-gdrive:file:([A-Za-z0-9_-]+)$/u,
      s = new Map([
        ["application/vnd.google-apps.document", "document"],
        ["application/vnd.google-apps.presentation", "presentation"],
        ["application/vnd.google-apps.spreadsheet", "spreadsheets"],
        ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "presentation"],
        ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "spreadsheets"],
        ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "document"],
      ]),
      r = new Set([
        "c",
        "conf",
        "cpp",
        "css",
        "go",
        "h",
        "hpp",
        "java",
        "js",
        "json",
        "jsonl",
        "jsx",
        "log",
        "py",
        "rb",
        "rs",
        "sh",
        "ts",
        "tsx",
        "txt",
        "xml",
        "yaml",
        "yml",
      ]),
      o = new Set([
        "application/javascript",
        "application/json",
        "application/ld+json",
        "application/x-javascript",
        "application/x-ndjson",
        "application/xml",
        "application/yaml",
        "application/yml",
        "text/javascript",
      ]),
      c = new Map([
        ["application/x-ipynb+json", "ipynb"],
        ["application/vnd.ms-excel.sheet.macroenabled.12", "xlsx"],
        ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "pptx"],
        ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "xlsx"],
        ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "docx"],
        ["text/csv", "csv"],
        ["text/tab-separated-values", "tsv"],
      ])
    function d(e) {
      let t = u(e)
      if (null != t) {
        let e = c.get(t)
        if (null != e) return e
      }
      let n = (null == e.file_extension ? null : (0, i.Yg)(`file.${e.file_extension}`)) ?? (0, i.Yg)(e.file_name)
      switch (n) {
        case "csv":
        case "docx":
        case "ipynb":
        case "pptx":
        case "tsv":
        case "xlsx":
          return n
        case "pdf":
        case "tex":
        case null:
          return null
      }
    }
    function u(e) {
      return e.mime_type?.split(";")[0]?.trim().toLowerCase() || null
    }
    n.d(
      t,
      {},
      {
        CR: function (e, { canStreamVideo: t = !1 } = {}) {
          var n, i, l, s
          let c, f, m
          if ("deep_research_report" === e.library_artifact_type) return "deep-research"
          let p = e.file_extension ? `${e.file_name}.${e.file_extension}` : e.file_name
          if (t && ("video" === e.library_file_category || u(e)?.startsWith("video/") || /\.(?:mp4|webm)$/iu.test(p)))
            return "video"
          if (((c = u((n = e))), "image" === n.library_file_category || c?.startsWith("image/") === !0)) return "image"
          if (
            ((f = u((i = e))), "pdf" === i.library_file_category || "application/pdf" === f || (0, a.ZH)(i.file_name))
          )
            return "pdf"
          if (null != d(e)) return "artifact"
          if ((0, a.e$)(p) || "text/markdown" === u(e)) return "markdown"
          let h = (0, a.Zo)(p)
          return "html" === h || "htm" === h || "text/html" === u(e)
            ? "html"
            : ((l = e),
                (s = h),
                (m = u(l)),
                "text" === l.library_file_category ||
                  m?.startsWith("text/") === !0 ||
                  (null != m && o.has(m)) ||
                  (null != s && r.has(s)))
              ? "text"
              : "unsupported"
        },
        FE: d,
        gv: function ({ fileId: e, mimeType: t, sourceUrl: n }) {
          let i = l.exec(e)?.[1],
            a = t?.split(";")[0]?.trim().toLowerCase(),
            r = null == a ? void 0 : s.get(a)
          if (null == i || null == r) return null
          let o = `https://docs.google.com/${r}/d/${i}/preview`
          if (null == n) return o
          if (!URL.canParse(n)) return null
          let c = new URL(n),
            d = c.searchParams.get("resourcekey")
          return null == d
            ? o
            : "https://docs.google.com" !== c.origin && "https://drive.google.com" !== c.origin
              ? null
              : `${o}?${new URLSearchParams({ resourcekey: d })}`
        },
      },
    )
  },
  HWQc(e, t, n) {
    var i = n("ABep"),
      a = n("QosV"),
      l = n("qTvt"),
      s = n("on57"),
      r = n("zd8w"),
      o = n("oyxz"),
      c = n("UxN3"),
      d = n("GCsp"),
      u = n("tKUf"),
      f = n("r4En")
    function m(e) {
      let t,
        n,
        u,
        f,
        m,
        x = (0, a.c)(13),
        { entries: g } = e,
        [v, y] = (0, r.useState)(!1),
        b = g.length > 8
      x[0] !== g || x[1] !== v || x[2] !== b
        ? ((t = b && !v ? g.slice(0, 8) : g), (x[0] = g), (x[1] = v), (x[2] = b), (x[3] = t))
        : (t = x[3])
      let w = t
      return (
        x[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)("div", {
              className: "mb-2 font-medium text-secondary",
              children: (0, i.jsx)(o.A, { id: "markdown.metadata.title", defaultMessage: "Metadata" }),
            })),
            (x[4] = n))
          : (n = x[4]),
        x[5] !== w ? ((u = (0, i.jsx)(h, { entries: w })), (x[5] = w), (x[6] = u)) : (u = x[6]),
        x[7] !== v || x[8] !== b
          ? ((f = b
              ? (0, i.jsxs)("button", {
                  type: "button",
                  "aria-expanded": v,
                  className:
                    "mt-1.5 inline-flex cursor-interaction items-center gap-1 text-secondary hover:text-default",
                  onClick: () => {
                    y(p)
                  },
                  children: [
                    (0, i.jsx)("span", {
                      children: v
                        ? (0, i.jsx)(o.A, { id: "markdown.metadata.showLess", defaultMessage: "Show less" })
                        : (0, i.jsx)(o.A, { id: "markdown.metadata.showMore", defaultMessage: "Show more" }),
                    }),
                    (0, i.jsx)(c.bF, {
                      className: (0, s.A)("transition-transform", v ? "rotate-180" : "rotate-0"),
                      "aria-hidden": !1,
                      asset16: l.K,
                      legacyIcon: d.A,
                      legacyClassName: "icon-2xs",
                    }),
                  ],
                })
              : null),
            (x[7] = v),
            (x[8] = b),
            (x[9] = f))
          : (f = x[9]),
        x[10] !== u || x[11] !== f
          ? ((m = (0, i.jsxs)("div", {
              className: "mb-3 rounded-md border border-border/60 bg-text/5 px-3 py-2 text-xs",
              children: [n, u, f],
            })),
            (x[10] = u),
            (x[11] = f),
            (x[12] = m))
          : (m = x[12]),
        m
      )
    }
    function p(e) {
      return !e
    }
    function h(e) {
      let t,
        n,
        l,
        r = (0, a.c)(7),
        { className: o, entries: c } = e
      return (
        r[0] !== o
          ? ((t = (0, s.A)("grid grid-cols-[minmax(0,8rem)_minmax(0,1fr)] gap-x-3 gap-y-1.5", o)),
            (r[0] = o),
            (r[1] = t))
          : (t = r[1]),
        r[2] !== c ? ((n = c.map(x)), (r[2] = c), (r[3] = n)) : (n = r[3]),
        r[4] !== t || r[5] !== n
          ? ((l = (0, i.jsx)("dl", { className: t, children: n })), (r[4] = t), (r[5] = n), (r[6] = l))
          : (l = r[6]),
        l
      )
    }
    function x(e, t) {
      return (0, i.jsxs)(
        "div",
        {
          className: "contents",
          children: [
            (0, i.jsx)("dt", { className: "truncate font-mono text-secondary", title: e.key, children: e.key }),
            (0, i.jsx)("dd", { className: "min-w-0 text-default", children: (0, i.jsx)(g, { value: e.value }) }),
          ],
        },
        `${e.key}-${t}`,
      )
    }
    function g(e) {
      let t,
        n = (0, a.c)(6),
        { value: l } = e
      if (Array.isArray(l)) {
        let e, t
        return (
          n[0] !== l ? ((e = l.map(v)), (n[0] = l), (n[1] = e)) : (e = n[1]),
          n[2] !== e
            ? ((t = (0, i.jsx)("span", { className: "flex min-w-0 flex-wrap gap-1", children: e })),
              (n[2] = e),
              (n[3] = t))
            : (t = n[3]),
          t
        )
      }
      let s = 0 === l.length ? '""' : l
      return (
        n[4] !== s
          ? ((t = (0, i.jsx)("span", { className: "font-mono break-words", children: s })), (n[4] = s), (n[5] = t))
          : (t = n[5]),
        t
      )
    }
    function v(e, t) {
      return (0, i.jsx)(
        "span",
        {
          className: "max-w-full rounded-sm bg-text/10 px-1.5 py-0.5 font-mono break-words",
          children: 0 === e.length ? '""' : e,
        },
        `${e}-${t}`,
      )
    }
    n.d(
      t,
      {},
      {
        EQ: m,
        ND: function (e) {
          let t,
            n,
            l = (0, a.c)(7),
            { background: r, className: o, children: c, overflow: d } = e,
            u = "normal" === (void 0 === r ? "subtle" : r) ? "bg-surface" : "bg-text/5",
            f = "auto" === (void 0 === d ? "clip" : d) ? "overflow-auto" : "overflow-clip"
          return (
            l[0] !== o || l[1] !== u || l[2] !== f
              ? ((t = (0, s.A)("relative rounded-lg", u, f, o)), (l[0] = o), (l[1] = u), (l[2] = f), (l[3] = t))
              : (t = l[3]),
            l[4] !== c || l[5] !== t
              ? ((n = (0, i.jsx)("div", { className: t, children: c })), (l[4] = c), (l[5] = t), (l[6] = n))
              : (n = l[6]),
            n
          )
        },
        T: function (e) {
          let t,
            n,
            l,
            s,
            r = (0, a.c)(15),
            {
              enableMetadataPreview: o,
              markdown: c,
              conversationId: d,
              cwd: p,
              hideCodeBlocks: h,
              hostId: x,
              isStreaming: g,
            } = e,
            v = void 0 !== o && o,
            y = void 0 === d ? null : d,
            b = void 0 === p ? null : p,
            w = void 0 !== g && g
          r[0] !== v || r[1] !== c ? ((t = v ? (0, u.x)(c) : null), (r[0] = v), (r[1] = c), (r[2] = t)) : (t = r[2])
          let j = t,
            _ = j?.body ?? c
          return (
            r[3] !== j
              ? ((n = null != j && j.entries.length > 0 ? (0, i.jsx)(m, { entries: j.entries }) : null),
                (r[3] = j),
                (r[4] = n))
              : (n = r[4]),
            r[5] !== y || r[6] !== b || r[7] !== h || r[8] !== x || r[9] !== w || r[10] !== _
              ? ((l = (0, i.jsx)(f.K, {
                  className: "text-size-chat",
                  conversationId: y,
                  hideCodeBlocks: h,
                  hostId: x,
                  isStreaming: w,
                  cwd: b,
                  children: _,
                })),
                (r[5] = y),
                (r[6] = b),
                (r[7] = h),
                (r[8] = x),
                (r[9] = w),
                (r[10] = _),
                (r[11] = l))
              : (l = r[11]),
            r[12] !== n || r[13] !== l
              ? ((s = (0, i.jsxs)("div", { className: "px-4 py-3", children: [n, l] })),
                (r[12] = n),
                (r[13] = l),
                (r[14] = s))
              : (s = r[14]),
            s
          )
        },
      },
    )
  },
  d9nc(e, t, n) {
    n.d(t, { PageFilePreviewContent: () => W })
    var i = n("ABep"),
      a = n("QosV"),
      l = n("irkb"),
      s = n("T0Rc"),
      r = n("qmMi"),
      o = n("zd8w"),
      c = n("oyxz"),
      d = n("UEaw"),
      u = n("Sm6l"),
      f = n("uXTt"),
      m = n("Ot7V"),
      p = n("evwP"),
      h = n("FrrB"),
      x = n("HWQc"),
      g = n("mNPx"),
      v = n("NraH"),
      y = n("Jnts"),
      b = n("tZri"),
      w = n("p69S"),
      j = n("dJBt"),
      _ = n("yGJW"),
      N = n("OWtl"),
      P = n("yI91"),
      k = n("Hjmv"),
      C = n("GDNt"),
      A = n("NvrT"),
      F = n("ZOIm"),
      I = n("j9wQ")
    let M = (0, o.lazy)(async () => {
        let { WorkbookPanel: e } = await Promise.all([
          n.e(779181),
          n.e(88560),
          n.e(903419),
          n.e(715322),
          n.e(782818),
          n.e(280672),
          n.e(554519),
          n.e(122799),
        ]).then(n.bind(n, "fGGR"))
        return { default: e }
      }),
      S = (0, o.lazy)(async () => {
        let { DocxPreviewPanel: e } = await Promise.all([n.e(77118), n.e(179607), n.e(260624)]).then(n.bind(n, "kp5O"))
        return { default: e }
      }),
      H = (0, o.lazy)(async () => {
        let { PresentationPanel: e } = await Promise.all([
          n.e(779181),
          n.e(295103),
          n.e(88560),
          n.e(903419),
          n.e(687541),
          n.e(782818),
          n.e(692737),
          n.e(267664),
          n.e(912900),
        ]).then(n.bind(n, "eq9N"))
        return { default: e }
      }),
      R = (0, o.lazy)(async () => {
        let { NotebookPreviewPanel: e } = await n.e(705356).then(n.bind(n, "sfBD"))
        return { default: e }
      }),
      T = (0, o.lazy)(async () => {
        let { PdfPreviewPanel: e } = await Promise.all([n.e(135668), n.e(179607), n.e(521245)]).then(n.bind(n, "niiV"))
        return { default: e }
      })
    function $(e) {
      let t,
        n,
        l,
        s,
        c,
        u,
        f,
        m,
        p = (0, a.c)(99),
        {
          action: h,
          bytes: x,
          errorContent: v,
          fallback: y,
          header: b,
          headerRightContent: w,
          importKind: N,
          onHyperlinkClick: C,
          onReady: $,
          onRefresh: E,
          path: B,
          renderLayout: L,
          title: D,
        } = e,
        z = (0, r.Ul)(_.YV),
        [O, U] = (0, o.useState)(!1),
        [Q, V] = (0, o.useState)(!1)
      if (O && null != y) {
        let e
        return (p[0] !== y ? ((e = (0, i.jsx)(i.Fragment, { children: y })), (p[0] = y), (p[1] = e)) : (e = p[1]), e)
      }
      if (O) {
        let e, t, n, a
        return (
          p[2] !== h
            ? ((e = (0, i.jsx)(j.X, { onPaint: () => h?.finish("failure") })), (p[2] = h), (p[3] = e))
            : (e = p[3]),
          p[4] !== v
            ? ((t = (0, i.jsx)("div", { className: "min-h-0 flex-1", children: v })), (p[4] = v), (p[5] = t))
            : (t = p[5]),
          p[6] !== b || p[7] !== L || p[8] !== t
            ? ((n = (0, i.jsx)(k.t, { header: b, content: t, renderLayout: L })),
              (p[6] = b),
              (p[7] = L),
              (p[8] = t),
              (p[9] = n))
            : (n = p[9]),
          p[10] !== e || p[11] !== n
            ? ((a = (0, i.jsxs)("section", {
                className: "flex h-full min-h-0 flex-col bg-surface-secondary",
                children: [e, n],
              })),
              (p[10] = e),
              (p[11] = n),
              (p[12] = a))
            : (a = p[12]),
          a
        )
      }
      p[13] !== D ? ((t = (0, i.jsx)(I.Bx, { title: D })), (p[13] = D), (p[14] = t)) : (t = p[14])
      let W = t
      p[15] !== L
        ? ((n = (e) => (0, i.jsx)(A.Z, { layout: e, renderLayout: L })), (p[15] = L), (p[16] = n))
        : (n = p[16])
      let q = n
      p[17] !== Q || p[18] !== D
        ? ((l = (e) =>
            Q
              ? (0, i.jsx)(F.dl, {
                  actions: null,
                  controls: { ...e, annotationControl: null, commentsControl: null },
                  title: D,
                })
              : null),
          (p[17] = Q),
          (p[18] = D),
          (p[19] = l))
        : (l = p[19])
      let K = l
      switch (N) {
        case "csv":
        case "tsv":
        case "xlsx": {
          let e, t, n, a
          ;(p[20] !== C
            ? ((e = (e) => {
                let { url: t } = e
                return C(t)
              }),
              (p[20] = C),
              (p[21] = e))
            : (e = p[21]),
            p[22] !== z
              ? ((t = (e) => {
                  ;((0, g.ZD)(z, "pages.file.preview.workbook-import", e), U(!0))
                }),
                (p[22] = z),
                (p[23] = t))
              : (t = p[23]),
            p[24] !== $
              ? ((n = () => {
                  ;(V(!0), $?.())
                }),
                (p[24] = $),
                (p[25] = n))
              : (n = p[25]),
            p[26] !== x ||
            p[27] !== w ||
            p[28] !== N ||
            p[29] !== q ||
            p[30] !== K ||
            p[31] !== e ||
            p[32] !== t ||
            p[33] !== n ||
            p[34] !== D
              ? ((a = (0, i.jsx)(M, {
                  className: "h-full min-h-0",
                  headerRightContent: w,
                  initialSourceBytes: x,
                  initialSourceFormat: N,
                  isEditing: !1,
                  onHyperlinkClick: e,
                  onImportError: t,
                  onImportReady: n,
                  renderHeader: K,
                  renderLayout: q,
                  title: D,
                })),
                (p[26] = x),
                (p[27] = w),
                (p[28] = N),
                (p[29] = q),
                (p[30] = K),
                (p[31] = e),
                (p[32] = t),
                (p[33] = n),
                (p[34] = D),
                (p[35] = a))
              : (a = p[35]),
            (s = a))
          break
        }
        case "docx": {
          let e, t
          ;(p[36] === Symbol.for("react.memo_cache_sentinel") ? ((e = () => U(!0)), (p[36] = e)) : (e = p[36]),
            p[37] !== x ||
            p[38] !== b ||
            p[39] !== w ||
            p[40] !== W ||
            p[41] !== $ ||
            p[42] !== B ||
            p[43] !== L ||
            p[44] !== D
              ? ((t = (0, i.jsx)(S, {
                  annotationBatchingEnabled: !1,
                  bytes: x,
                  chromeMode: "standalone",
                  disableAnnotations: !0,
                  disableFileActions: !0,
                  fallbackHeader: b,
                  headerPlacement: "inline",
                  headerRightContent: w,
                  headerTitleContent: W,
                  hostId: "pages",
                  onImportError: e,
                  onReady: $,
                  path: B,
                  renderLayout: L,
                  title: D,
                })),
                (p[37] = x),
                (p[38] = b),
                (p[39] = w),
                (p[40] = W),
                (p[41] = $),
                (p[42] = B),
                (p[43] = L),
                (p[44] = D),
                (p[45] = t))
              : (t = p[45]),
            (s = t))
          break
        }
        case "pptx": {
          let e, t, n, a
          ;(p[46] !== z
            ? ((e = (e) => {
                ;((0, g.ZD)(z, "pages.file.preview.presentation-import", e), U(!0))
              }),
              (p[46] = z),
              (p[47] = e))
            : (e = p[47]),
            p[48] !== $
              ? ((t = () => {
                  ;(V(!0), $?.())
                }),
                (p[48] = $),
                (p[49] = t))
              : (t = p[49]),
            p[50] !== C
              ? ((n = (e) => {
                  let { url: t } = e
                  return C(t)
                }),
                (p[50] = C),
                (p[51] = n))
              : (n = p[51]),
            p[52] !== x ||
            p[53] !== w ||
            p[54] !== q ||
            p[55] !== K ||
            p[56] !== e ||
            p[57] !== t ||
            p[58] !== n ||
            p[59] !== D
              ? ((a = (0, i.jsx)(H, {
                  annotationsEnabled: !1,
                  className: "h-full min-h-0",
                  enablePageNavigation: !1,
                  headerRightContent: w,
                  initialSourceBytes: x,
                  initialSourceFormat: "pptx",
                  isEditing: !1,
                  onImportError: e,
                  onImportReady: t,
                  onHyperlinkClick: n,
                  renderHeader: K,
                  renderLayout: q,
                  title: D,
                })),
                (p[52] = x),
                (p[53] = w),
                (p[54] = q),
                (p[55] = K),
                (p[56] = e),
                (p[57] = t),
                (p[58] = n),
                (p[59] = D),
                (p[60] = a))
              : (a = p[60]),
            (s = a))
          break
        }
        case "pdf": {
          let e, t, n
          p[61] !== x ? ((e = (0, P.i)(x)), (p[61] = x), (p[62] = e)) : (e = p[62])
          let a = `data:application/pdf;base64,${e}`
          ;(p[63] !== y ? ((t = null == y ? void 0 : () => U(!0)), (p[63] = y), (p[64] = t)) : (t = p[64]),
            p[65] !== b ||
            p[66] !== w ||
            p[67] !== W ||
            p[68] !== $ ||
            p[69] !== E ||
            p[70] !== B ||
            p[71] !== L ||
            p[72] !== a ||
            p[73] !== t ||
            p[74] !== D
              ? ((n = (0, i.jsx)(T, {
                  annotationBatchingEnabled: !1,
                  annotationsEnabled: !1,
                  chromeMode: "standalone",
                  fallbackHeader: b,
                  headerPlacement: "inline",
                  fileDataUrl: a,
                  headerRightContent: w,
                  headerTitleContent: W,
                  hostId: "pages",
                  onRefresh: E,
                  onReady: $,
                  onError: t,
                  path: B,
                  renderLayout: L,
                  title: D,
                })),
                (p[65] = b),
                (p[66] = w),
                (p[67] = W),
                (p[68] = $),
                (p[69] = E),
                (p[70] = B),
                (p[71] = L),
                (p[72] = a),
                (p[73] = t),
                (p[74] = D),
                (p[75] = n))
              : (n = p[75]),
            (s = n))
          break
        }
        case "ipynb": {
          let e, t
          ;(p[76] !== x ? ((e = (0, P.i)(x)), (p[76] = x), (p[77] = e)) : (e = p[77]),
            p[78] !== y ||
            p[79] !== b ||
            p[80] !== w ||
            p[81] !== $ ||
            p[82] !== B ||
            p[83] !== L ||
            p[84] !== e ||
            p[85] !== D
              ? ((t = (0, i.jsx)(R, {
                  contentsBase64: e,
                  errorContent: y,
                  header: b,
                  headerRightContent: w,
                  hostId: "pages",
                  onReady: $,
                  path: B,
                  renderLayout: L,
                  title: D,
                })),
                (p[78] = y),
                (p[79] = b),
                (p[80] = w),
                (p[81] = $),
                (p[82] = B),
                (p[83] = L),
                (p[84] = e),
                (p[85] = D),
                (p[86] = t))
              : (t = p[86]),
            (s = t))
        }
      }
      return (
        p[87] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, i.jsx)("div", { className: "min-h-0 flex-1", children: (0, d.f)("loading") })), (p[87] = c))
          : (c = p[87]),
        p[88] !== b || p[89] !== L
          ? ((u = (0, i.jsx)("section", {
              className: "flex h-full min-h-0 flex-col bg-surface-secondary",
              children: (0, i.jsx)(k.t, { header: b, content: c, renderLayout: L }),
            })),
            (p[88] = b),
            (p[89] = L),
            (p[90] = u))
          : (u = p[90]),
        p[91] !== h || p[92] !== N || p[93] !== Q
          ? ((f =
              (Q || "pdf" === N || "docx" === N || "ipynb" === N) &&
              (0, i.jsx)(j.X, {
                onPaint: () => {
                  Q ? h?.milestone("preview_rendered") : h?.finish("excluded")
                },
              })),
            (p[91] = h),
            (p[92] = N),
            (p[93] = Q),
            (p[94] = f))
          : (f = p[94]),
        p[95] !== s || p[96] !== u || p[97] !== f
          ? ((m = (0, i.jsxs)(o.Suspense, { fallback: u, children: [f, s] })),
            (p[95] = s),
            (p[96] = u),
            (p[97] = f),
            (p[98] = m))
          : (m = p[98]),
        m
      )
    }
    var E = n("qOyl"),
      B = n("DBCl"),
      L = n("w7Qu"),
      D = n("Kwur"),
      z = n("bWX0"),
      O = n("smHt"),
      U = n("DIdv"),
      Q = n("CwT5")
    function V(e, t) {
      let n = { file_name: e, library_file_category: "other", mime_type: t },
        i = (0, L.Yg)(e),
        a = (0, U.CR)(n)
      null != i ? (a = "artifact") : "none" !== (0, z.$A)(e) && (a = "image")
      let l = i ?? (0, U.FE)(n)
      "pdf" === a ? (l = "pdf") : "image" === a && (l = null)
      let s = null != l && "tex" !== l,
        r = !!s || "tex" === l || "unsupported" !== a
      return { previewKind: a, importKind: l, isArtifact: s, canPreview: r, maxBytes: s || "image" === a ? O.dC : O.RP }
    }
    function W(e) {
      let t,
        n,
        A,
        F,
        I,
        M,
        S,
        H,
        R,
        T,
        L,
        z,
        O,
        U,
        W,
        X,
        Z,
        Y,
        G,
        J,
        ee,
        et,
        en,
        ei,
        ea,
        el,
        es,
        er,
        eo = (0, a.c)(154),
        {
          session: ec,
          visible: ed,
          action: eu,
          accountId: ef,
          canRead: em,
          canReadNow: ep,
          fileId: eh,
          fileName: ex,
          fallback: eg,
          header: ev,
          headerRightContent: ey,
          mimeType: eb,
          openTarget: ew,
          onReady: ej,
          pageId: e_,
          renderLayout: eN,
          viewOnly: eP,
        } = e,
        ek = void 0 !== eP && eP,
        eC = (0, r.gh)(N.u),
        eA = (0, l.jE)(),
        eF = (0, o.useRef)(!1),
        eI = null != ef && em
      ;(eo[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = /^fde[123]_/u), (eo[0] = t)) : (t = eo[0]),
        eo[1] !== eh ? ((n = t.test(eh)), (eo[1] = eh), (eo[2] = n)) : (n = eo[2]))
      let eM = n
      ;(eo[3] !== e_ || eo[4] !== eC
        ? ((A = () => (0, w._)(eC, e_)), (eo[3] = e_), (eo[4] = eC), (eo[5] = A))
        : (A = eo[5]),
        eo[6] !== ef || eo[7] !== ep || eo[8] !== eh || eo[9] !== e_ || eo[10] !== eI || eo[11] !== eC || eo[12] !== A
          ? ((F = (0, b.A)({
              scope: eC,
              accountId: ef,
              canRead: eI,
              canReadNow: ep,
              fileId: eh,
              getLoadedPageMetadata: A,
              pageId: e_,
            })),
            (eo[6] = ef),
            (eo[7] = ep),
            (eo[8] = eh),
            (eo[9] = e_),
            (eo[10] = eI),
            (eo[11] = eC),
            (eo[12] = A),
            (eo[13] = F))
          : (F = eo[13]))
      let eS = F,
        eH = !eM && eS.enabled
      eo[14] !== eS || eo[15] !== eH
        ? ((I = { ...eS, staleTime: eS.staleTime, enabled: eH }), (eo[14] = eS), (eo[15] = eH), (eo[16] = I))
        : (I = eo[16])
      let { data: eR, isLoading: eT, isPaused: e$ } = (0, s.I)(I),
        eE = !eM && (eT || e$),
        eB = eR?.fileName ?? ex,
        eL = eR?.mimeType ?? eb
      eo[17] !== eB || eo[18] !== eL ? ((M = V(eB, eL)), (eo[17] = eB), (eo[18] = eL), (eo[19] = M)) : (M = eo[19])
      let eD = M
      eo[20] !== ef || eo[21] !== eh || eo[22] !== e_
        ? ((S = (0, E.T)({ accountId: ef, pageId: e_, fileId: eh })),
          (eo[20] = ef),
          (eo[21] = eh),
          (eo[22] = e_),
          (eo[23] = S))
        : (S = eo[23])
      let ez = S,
        eO = eI && (eM || (eD.canPreview && !eE))
      ;(eo[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = { pageFilePreview: !0 }), (eo[24] = H))
        : (H = eo[24]),
        eo[25] !== eu ||
        eo[26] !== ep ||
        eo[27] !== eh ||
        eo[28] !== eR ||
        eo[29] !== eS ||
        eo[30] !== ex ||
        eo[31] !== eb ||
        eo[32] !== eM ||
        eo[33] !== e_ ||
        eo[34] !== eA ||
        eo[35] !== ez ||
        eo[36] !== eC
          ? ((R = async (e) => {
              let { signal: t } = e
              try {
                let e = () => {
                    if ((t.throwIfAborted(), !ep())) throw Error("The Page file is no longer readable.")
                  },
                  n = eA.getQueryData(ez),
                  i = eF.current
                if (((eF.current = !1), !i && n?.status === "ready" && n.isComplete)) {
                  let i = eM ? await eA.fetchQuery(eS) : null
                  return (
                    await (0, y.getPageFileDownloadRequest)({ beforeRequest: e, fileId: eh, pageId: e_, signal: t }),
                    e(),
                    eu?.milestone("bytes_delivered"),
                    null == i ? n : { ...n, fileInfo: i }
                  )
                }
                let a = eM
                    ? await (async function ({
                        beforeRequest: e,
                        fileId: t,
                        fileName: n,
                        mimeType: i,
                        pageId: a,
                        signal: l,
                      }) {
                        let s = V(n, i).maxBytes
                        for (let n = 0; n < 2; n++) {
                          ;(l.throwIfAborted(), e())
                          let n = await D.Request.getResponse(
                            "/files/library/files/{library_file_id}/content_redirect",
                            {
                              parameters: { path: { library_file_id: t }, query: { page_id: a } },
                              additionalHeaders: { [B.n1Q]: "1", Range: `bytes=0-${s}` },
                              assertRequestCurrent: e,
                              signal: l,
                            },
                          )
                          try {
                            ;(l.throwIfAborted(), e())
                            let t = (0, Q.u)(n.headers.get("content-disposition"))
                            if (null == t) return null
                            let i = { fileName: t, mimeType: n.headers.get("content-type") },
                              a = V(i.fileName, i.mimeType)
                            if (!a.canPreview) return { status: "unavailable", fileInfo: i }
                            let r = /^bytes 0-\d+\/(\d+)$/u.exec(n.headers.get("content-range") ?? "")
                            if (a.maxBytes > s && null != r && Number(r[1]) > s) {
                              s = a.maxBytes
                              continue
                            }
                            if (null != r && Number(r[1]) > a.maxBytes) return { status: "too_large", fileInfo: i }
                            return {
                              ...(await (0, y.lv)({ response: n, maxBytes: a.maxBytes, beforeRequest: e, signal: l })),
                              fileInfo: i,
                            }
                          } finally {
                            n.body?.locked || (await n.body?.cancel())
                          }
                        }
                        return null
                      })({ beforeRequest: e, fileId: eh, fileName: ex, mimeType: eb, pageId: e_, signal: t })
                    : null,
                  l = a?.fileInfo ?? (eM ? await eA.fetchQuery(eS) : eR),
                  s = l?.fileName ?? ex,
                  r = V(s, l?.mimeType ?? eb),
                  o =
                    a ??
                    (r.canPreview
                      ? await (0, y.kd)({
                          beforeRequest: e,
                          fileId: eh,
                          maxBytes: r.maxBytes,
                          pageId: e_,
                          pageMetadata: (0, w._)(eC, e_),
                          signal: t,
                        })
                      : { status: "unavailable" })
                if ("ready" !== o.status) return { ...o, fileInfo: l ?? void 0 }
                let c = new Uint8Array(await o.blob.arrayBuffer())
                return (
                  e(),
                  eu?.milestone("bytes_delivered"),
                  { status: "ready", bytes: c, isComplete: o.isComplete, mimeType: o.blob.type, fileInfo: l ?? void 0 }
                )
              } catch (e) {
                throw (
                  !t.aborted &&
                    ep() &&
                    eA.getQueryState(eS.queryKey)?.error !== e &&
                    !(e instanceof C.fk && [401, 403, 404].includes(e.status)) &&
                    !(e instanceof Error && "The Page is not readable." === e.message) &&
                    (0, g.ZD)(eC.get(_.YV), "pages.file.preview.load", e),
                  e
                )
              }
            }),
            (eo[25] = eu),
            (eo[26] = ep),
            (eo[27] = eh),
            (eo[28] = eR),
            (eo[29] = eS),
            (eo[30] = ex),
            (eo[31] = eb),
            (eo[32] = eM),
            (eo[33] = e_),
            (eo[34] = eA),
            (eo[35] = ez),
            (eo[36] = eC),
            (eo[37] = R))
          : (R = eo[37]),
        eo[38] !== ez || eo[39] !== eO || eo[40] !== R
          ? ((T = {
              enabled: eO,
              gcTime: E.t7,
              meta: H,
              queryKey: ez,
              queryFn: R,
              refetchOnReconnect: !1,
              refetchOnWindowFocus: !1,
              retry: !1,
              staleTime: 0,
            }),
            (eo[38] = ez),
            (eo[39] = eO),
            (eo[40] = R),
            (eo[41] = T))
          : (T = eo[41]))
      let {
          data: eU,
          dataUpdatedAt: eQ,
          error: eV,
          isError: eW,
          isFetching: eq,
          isPaused: eK,
          refetch: eX,
        } = (0, s.I)(T),
        eZ = eM ? eU?.fileInfo : eR,
        eY = eZ?.fileName ?? ex,
        eG = eZ?.mimeType ?? eb
      eo[42] !== eG || eo[43] !== eY ? ((L = V(eY, eG)), (eo[42] = eG), (eo[43] = eY), (eo[44] = L)) : (L = eo[44])
      let { previewKind: eJ, importKind: e1, isArtifact: e0, canPreview: e2 } = L
      if (!eI) return null
      if (null != eg && ((!e2 && !eE) || eW || eU?.status === "unavailable" || eU?.status === "too_large")) {
        let e
        return (
          eo[45] !== eg ? ((e = (0, i.jsx)(i.Fragment, { children: eg })), (eo[45] = eg), (eo[46] = e)) : (e = eo[46]),
          e
        )
      }
      ;(eo[47] !== eV || eo[48] !== e_ || eo[49] !== ec || eo[50] !== ed
        ? ((z = (0, i.jsx)(v.It, {
            pageId: e_,
            session: ec,
            visible: ed,
            operation: "pages.file.preview.load",
            error: eV,
            kind: "load",
            recoveryUi: "notice",
          })),
          (eo[47] = eV),
          (eo[48] = e_),
          (eo[49] = ec),
          (eo[50] = ed),
          (eo[51] = z))
        : (z = eo[51]),
        eo[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, i.jsx)(c.A, {
              id: "codex.space.page.file.preview.failed",
              defaultMessage: "Couldn\u2019t load this preview",
            })),
            (eo[52] = O))
          : (O = eo[52]),
        eo[53] !== z ? ((U = (0, i.jsxs)(i.Fragment, { children: [z, O] })), (eo[53] = z), (eo[54] = U)) : (U = eo[54]),
        eo[55] !== ek
          ? ((W = ek
              ? (0, i.jsx)(c.A, {
                  id: "codex.space.page.file.preview.viewOnlyFailedDescription",
                  defaultMessage: "Try loading the preview again",
                })
              : (0, i.jsx)(c.A, {
                  id: "codex.space.page.file.preview.failedDescription",
                  defaultMessage: "Try again, or download the file to open it",
                })),
            (eo[55] = ek),
            (eo[56] = W))
          : (W = eo[56]),
        eo[57] !== eX
          ? ((X = () => {
              ;((eF.current = !0), eX())
            }),
            (eo[57] = eX),
            (eo[58] = X))
          : (X = eo[58]),
        eo[59] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = (0, i.jsx)(c.A, { id: "codex.space.page.file.preview.retry", defaultMessage: "Retry preview" })),
            (eo[59] = Z))
          : (Z = eo[59]),
        eo[60] !== eq || eo[61] !== X
          ? ((Y = (0, i.jsx)(u.$, { color: "secondary", disabled: eq, onClick: X, children: Z })),
            (eo[60] = eq),
            (eo[61] = X),
            (eo[62] = Y))
          : (Y = eo[62]),
        eo[63] !== U || eo[64] !== W || eo[65] !== Y
          ? ((G = (0, i.jsx)(h.A, { className: "h-full", title: U, description: W, actions: Y })),
            (eo[63] = U),
            (eo[64] = W),
            (eo[65] = Y),
            (eo[66] = G))
          : (G = eo[66]))
      let e3 = G,
        e4 = e2 && !eE && !eq && !eK && !eW && eU?.status === "ready" && e0
      if (eE || ((eq || eK) && (eM || eU?.status === "ready"))) {
        let e
        ;(eo[67] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(i.Fragment, { children: (0, d.f)("loading") })), (eo[67] = e))
          : (e = eo[67]),
          (J = e))
      } else if (e2 && eU?.status !== "unavailable")
        if (eW) J = e3
        else if (eU?.status === "too_large") {
          let e, t, n
          ;(eo[73] !== e_ || eo[74] !== ec || eo[75] !== ed
            ? ((e = (0, i.jsx)(v.It, {
                pageId: e_,
                session: ec,
                visible: ed,
                operation: "pages.file.preview.load",
                kind: "unsupported",
                recoveryUi: "notice",
              })),
              (eo[73] = e_),
              (eo[74] = ec),
              (eo[75] = ed),
              (eo[76] = e))
            : (e = eo[76]),
            eo[77] !== ek
              ? ((t = ek
                  ? (0, i.jsx)(c.A, {
                      id: "codex.space.page.file.preview.viewOnlyTooLarge",
                      defaultMessage: "This file is too large to preview",
                    })
                  : (0, i.jsx)(c.A, {
                      id: "codex.space.page.file.preview.tooLarge",
                      defaultMessage: "This file is too large to preview. Download it to open the full file",
                    })),
                (eo[77] = ek),
                (eo[78] = t))
              : (t = eo[78]),
            eo[79] !== e || eo[80] !== t
              ? ((n = (0, i.jsxs)(p.W, { className: "h-full", children: [e, t] })),
                (eo[79] = e),
                (eo[80] = t),
                (eo[81] = n))
              : (n = eo[81]),
            (J = n))
        } else if (null == eU) {
          let e
          ;(eo[82] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(i.Fragment, { children: (0, d.f)("loading") })), (eo[82] = e))
            : (e = eo[82]),
            (J = e))
        } else if (null != e1 && "tex" !== e1) {
          let e, t, n
          ;(eo[83] !== ew
            ? ((e = (e) => {
                ;/^https?:\/\//i.test(e) && (0, m.E0)({ href: e, initiator: "markdown_link_click", openTarget: ew })
              }),
              (eo[83] = ew),
              (eo[84] = e))
            : (e = eo[84]),
            eo[85] !== eX
              ? ((t = async () => ((eF.current = !0), !(await eX()).isError)), (eo[85] = eX), (eo[86] = t))
              : (t = eo[86]))
          let a = `page-file://${e_}/${eh}/${eY}`
          ;(eo[87] !== eu ||
          eo[88] !== eU.bytes ||
          eo[89] !== e3 ||
          eo[90] !== eg ||
          eo[91] !== ev ||
          eo[92] !== ey ||
          eo[93] !== e1 ||
          eo[94] !== ej ||
          eo[95] !== eN ||
          eo[96] !== e ||
          eo[97] !== t ||
          eo[98] !== a ||
          eo[99] !== eY
            ? ((n = (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)($, {
                      action: eu,
                      bytes: eU.bytes,
                      errorContent: e3,
                      fallback: eg,
                      header: ev,
                      headerRightContent: ey,
                      importKind: e1,
                      onReady: ej,
                      onHyperlinkClick: e,
                      onRefresh: t,
                      path: a,
                      renderLayout: eN,
                      title: eY,
                    }),
                  }),
                  null,
                ],
              })),
              (eo[87] = eu),
              (eo[88] = eU.bytes),
              (eo[89] = e3),
              (eo[90] = eg),
              (eo[91] = ev),
              (eo[92] = ey),
              (eo[93] = e1),
              (eo[94] = ej),
              (eo[95] = eN),
              (eo[96] = e),
              (eo[97] = t),
              (eo[98] = a),
              (eo[99] = eY),
              (eo[100] = n))
            : (n = eo[100]),
            (J = n))
        } else if ("image" === eJ) {
          let e, t
          eo[101] !== eU.bytes ? ((e = (0, P.i)(eU.bytes)), (eo[101] = eU.bytes), (eo[102] = e)) : (e = eo[102])
          let n = `data:${eU.mimeType || eG || "application/octet-stream"};base64,${e}`
          ;(eo[103] !== eu || eo[104] !== e3 || eo[105] !== n || eo[106] !== eY
            ? ((t = (0, i.jsx)(q, { action: eu, errorContent: e3, src: n, title: eY })),
              (eo[103] = eu),
              (eo[104] = e3),
              (eo[105] = n),
              (eo[106] = eY),
              (eo[107] = t))
            : (t = eo[107]),
            (J = t))
        } else if ("markdown" === eJ) {
          let e, t
          ;(eo[108] !== eU.bytes
            ? ((e = new TextDecoder().decode(eU.bytes)), (eo[108] = eU.bytes), (eo[109] = e))
            : (e = eo[109]),
            eo[110] !== e
              ? ((t = (0, i.jsx)("div", {
                  className: "h-full min-h-0 w-full overflow-auto bg-surface text-start",
                  children: (0, i.jsx)(x.T, { enableMetadataPreview: !0, markdown: e }),
                })),
                (eo[110] = e),
                (eo[111] = t))
              : (t = eo[111]),
            (J = t))
        } else {
          let e, t
          ;(eo[112] !== eU.bytes
            ? ((e = new TextDecoder().decode(eU.bytes)), (eo[112] = eU.bytes), (eo[113] = e))
            : (e = eo[113]),
            eo[114] !== e
              ? ((t = (0, i.jsx)("pre", {
                  className:
                    "h-full min-h-0 overflow-auto p-4 font-mono text-sm whitespace-pre-wrap text-default select-text",
                  dir: "ltr",
                  children: e,
                })),
                (eo[114] = e),
                (eo[115] = t))
              : (t = eo[115]),
            (J = t))
        }
      else {
        let e
        ;(eo[68] !== e_ || eo[69] !== ec || eo[70] !== ek || eo[71] !== ed
          ? ((e = (0, i.jsx)(K, { pageId: e_, session: ec, visible: ed, viewOnly: ek })),
            (eo[68] = e_),
            (eo[69] = ec),
            (eo[70] = ek),
            (eo[71] = ed),
            (eo[72] = e))
          : (e = eo[72]),
          (J = e))
      }
      eo[116] !== ew
        ? ((ee = (e) => {
            let t = e.target instanceof Element ? e.target.closest("a[href]")?.getAttribute("href") : null
            null != t &&
              /^https?:\/\//i.test(t) &&
              (0, m.PQ)({ event: e, href: t, initiator: "markdown_link_click", openTarget: ew }) &&
              e.stopPropagation()
          }),
          (eo[116] = ew),
          (eo[117] = ee))
        : (ee = eo[117])
      let e5 = ee
      eo[118] !== eu ||
      eo[119] !== e2 ||
      eo[120] !== eU?.status ||
      eo[121] !== e0 ||
      eo[122] !== eW ||
      eo[123] !== ej ||
      eo[124] !== eJ
        ? ((et = () => {
            eW
              ? eu?.finish("failure")
              : e2 && eU?.status !== "unavailable" && eU?.status !== "too_large"
                ? eU?.status !== "ready" || e0 || "image" === eJ || (eu?.milestone("preview_rendered"), ej?.())
                : eu?.finish("excluded")
          }),
          (eo[118] = eu),
          (eo[119] = e2),
          (eo[120] = eU?.status),
          (eo[121] = e0),
          (eo[122] = eW),
          (eo[123] = ej),
          (eo[124] = eJ),
          (eo[125] = et))
        : (et = eo[125])
      let e6 = et
      ;(eo[126] !== eu || eo[127] !== e3 || eo[128] !== eg || eo[129] !== ev || eo[130] !== eN
        ? ((en =
            eg ??
            (0, i.jsxs)("div", {
              className: "flex h-full min-h-0 flex-col",
              children: [
                (0, i.jsx)(j.X, { onPaint: () => eu?.finish("failure") }),
                (0, i.jsx)(k.t, {
                  header: ev,
                  content: (0, i.jsx)("div", { className: "min-h-0 flex-1", children: e3 }),
                  renderLayout: eN,
                }),
              ],
            })),
          (eo[126] = eu),
          (eo[127] = e3),
          (eo[128] = eg),
          (eo[129] = ev),
          (eo[130] = eN),
          (eo[131] = en))
        : (en = eo[131]),
        eo[132] !== eQ || eo[133] !== e6 || eo[134] !== eW || eo[135] !== eq || eo[136] !== eK || eo[137] !== eE
          ? ((ei = !eE && !eq && !eK && (0, i.jsx)(j.X, { onPaint: e6 }, `${eQ}:${eW}`)),
            (eo[132] = eQ),
            (eo[133] = e6),
            (eo[134] = eW),
            (eo[135] = eq),
            (eo[136] = eK),
            (eo[137] = eE),
            (eo[138] = ei))
          : (ei = eo[138]))
      let e7 = e4 ? null : ev
      eo[139] !== J
        ? ((ea = (0, i.jsx)("div", { className: "min-h-0 flex-1", children: J })), (eo[139] = J), (eo[140] = ea))
        : (ea = eo[140])
      let e8 = e4 ? void 0 : eN
      return (
        eo[141] !== e7 || eo[142] !== ea || eo[143] !== e8
          ? ((el = (0, i.jsx)(k.t, { header: e7, content: ea, renderLayout: e8 })),
            (eo[141] = e7),
            (eo[142] = ea),
            (eo[143] = e8),
            (eo[144] = el))
          : (el = eo[144]),
        eo[145] !== eQ || eo[146] !== e5 || eo[147] !== ei || eo[148] !== el
          ? ((es = (0, i.jsxs)(
              "div",
              {
                className: "flex h-full min-h-0 flex-col",
                onClickCapture: e5,
                onAuxClickCapture: e5,
                children: [ei, el],
              },
              eQ,
            )),
            (eo[145] = eQ),
            (eo[146] = e5),
            (eo[147] = ei),
            (eo[148] = el),
            (eo[149] = es))
          : (es = eo[149]),
        eo[150] !== eQ || eo[151] !== en || eo[152] !== es
          ? ((er = (0, i.jsx)(f.t, { name: "PageFilePreview", fallback: en, resetKey: eQ, children: es })),
            (eo[150] = eQ),
            (eo[151] = en),
            (eo[152] = es),
            (eo[153] = er))
          : (er = eo[153]),
        er
      )
    }
    function q(e) {
      let t,
        n = (0, a.c)(7),
        { action: l, errorContent: s, src: r, title: c } = e,
        [d, u] = (0, o.useState)(!1),
        [f, m] = (0, o.useState)(!1)
      return (
        n[0] !== l || n[1] !== s || n[2] !== d || n[3] !== f || n[4] !== r || n[5] !== c
          ? ((t = d
              ? s
              : (0, i.jsxs)("div", {
                  className: "flex h-full min-h-0 items-center justify-center overflow-auto p-4",
                  children: [
                    f && (0, i.jsx)(j.X, { onPaint: () => l?.milestone("preview_rendered") }),
                    (0, i.jsx)("img", {
                      alt: c,
                      className: "max-h-full max-w-full object-contain",
                      onError: () => {
                        ;(l?.finish("failure"), u(!0))
                      },
                      onLoad: () => m(!0),
                      src: r,
                    }),
                  ],
                })),
            (n[0] = l),
            (n[1] = s),
            (n[2] = d),
            (n[3] = f),
            (n[4] = r),
            (n[5] = c),
            (n[6] = t))
          : (t = n[6]),
        t
      )
    }
    function K(e) {
      let t,
        n,
        l,
        s = (0, a.c)(9),
        { pageId: r, session: o, visible: d, viewOnly: u } = e
      return (
        s[0] !== r || s[1] !== o || s[2] !== d
          ? ((t = (0, i.jsx)(v.It, {
              pageId: r,
              session: o,
              visible: d,
              operation: "pages.file.preview.load",
              kind: "unsupported",
              recoveryUi: "notice",
            })),
            (s[0] = r),
            (s[1] = o),
            (s[2] = d),
            (s[3] = t))
          : (t = s[3]),
        s[4] !== u
          ? ((n = u
              ? (0, i.jsx)(c.A, {
                  id: "codex.space.page.file.preview.viewOnlyUnavailable",
                  defaultMessage: "Preview isn\u2019t available for this file",
                })
              : (0, i.jsx)(c.A, {
                  id: "codex.space.page.file.preview.unavailable",
                  defaultMessage: "Preview isn\u2019t available for this file. Download it to open it",
                })),
            (s[4] = u),
            (s[5] = n))
          : (n = s[5]),
        s[6] !== t || s[7] !== n
          ? ((l = (0, i.jsxs)(p.W, { className: "h-full", children: [t, n] })), (s[6] = t), (s[7] = n), (s[8] = l))
          : (l = s[8]),
        l
      )
    }
  },
  Hjmv(e, t, n) {
    var i = n("ABep"),
      a = n("QosV")
    n.d(
      t,
      {},
      {
        t: function (e) {
          let t,
            n = (0, a.c)(6),
            { header: l, headerPlacement: s, content: r, panels: o, renderLayout: c } = e
          return (
            n[0] !== r || n[1] !== l || n[2] !== s || n[3] !== o || n[4] !== c
              ? ((t =
                  null == c
                    ? (0, i.jsxs)(i.Fragment, { children: [l, r] })
                    : c({ header: l, headerPlacement: s, content: r, panels: o })),
                (n[0] = r),
                (n[1] = l),
                (n[2] = s),
                (n[3] = o),
                (n[4] = c),
                (n[5] = t))
              : (t = n[5]),
            t
          )
        },
      },
    )
  },
}
//# sourceMappingURL=61000.a03670c2c6.js.map
