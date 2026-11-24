export const __rspack_esm_ids = [585811]
export const __webpack_modules__ = {
  ZJ6t(e, t, s) {
    s.d(t, { ClaudeImportDialog: () => G })
    var a = s("ABep"),
      n = s("QosV"),
      o = s("qmMi"),
      l = s("zd8w"),
      r = s("oyxz"),
      i = s("QdUF"),
      c = s("JNtf"),
      d = s("mUDD"),
      u = s("OWtl"),
      m = s("DBCl"),
      p = s("Kwur"),
      f = s("QmkR"),
      h = s("ASxG")
    let x = h._H3({ uuid: h.YjP(), name: h.YjP(), chat_messages: h.YOg(h.L5J()) }),
      j = h.Ikc({
        data_files: h.YOg(
          h.Ikc({ category: h.YjP(), export_url: h.L5J().optional(), filename: h.YjP().nullable().catch(null) }),
        ),
      })
    var g = s("slpy"),
      v = s("Wf1j"),
      y = s("Sm6l"),
      b = s("Ot7V"),
      I = s("bVeK"),
      _ = s("AWNZ")
    function S(e) {
      let t,
        s,
        o,
        i,
        c,
        d = (0, n.c)(19),
        { busy: u, errorId: m, onChange: p, size: f, children: h } = e,
        x = (0, l.useId)(),
        j = (0, l.useRef)(null)
      d[0] !== u || d[1] !== x || d[2] !== p
        ? ((t = (0, a.jsx)("input", {
            ref: j,
            className: "hidden",
            type: "file",
            "aria-labelledby": x,
            accept: ".json,application/json",
            disabled: u,
            onChange: p,
          })),
          (d[0] = u),
          (d[1] = x),
          (d[2] = p),
          (d[3] = t))
        : (t = d[3])
      let g = "large" === f ? "w-full justify-center" : void 0
      return (
        d[4] === Symbol.for("react.memo_cache_sentinel") ? ((s = () => j.current?.click()), (d[4] = s)) : (s = d[4]),
        d[5] !== u || d[6] !== h || d[7] !== f
          ? ((o =
              u && "large" === f
                ? (0, a.jsx)("span", {
                    role: "status",
                    children: (0, a.jsx)(r.A, {
                      id: "conversationImport.reading",
                      defaultMessage: "Discovering conversations\u2026",
                    }),
                  })
                : h),
            (d[5] = u),
            (d[6] = h),
            (d[7] = f),
            (d[8] = o))
          : (o = d[8]),
        d[9] !== u || d[10] !== x || d[11] !== m || d[12] !== f || d[13] !== g || d[14] !== o
          ? ((i = (0, a.jsx)(y.$, {
              id: x,
              className: g,
              type: "button",
              size: f,
              loading: u,
              "aria-describedby": m,
              onClick: s,
              children: o,
            })),
            (d[9] = u),
            (d[10] = x),
            (d[11] = m),
            (d[12] = f),
            (d[13] = g),
            (d[14] = o),
            (d[15] = i))
          : (i = d[15]),
        d[16] !== t || d[17] !== i
          ? ((c = (0, a.jsxs)(a.Fragment, { children: [t, i] })), (d[16] = t), (d[17] = i), (d[18] = c))
          : (c = d[18]),
        c
      )
    }
    function A(e) {
      let t,
        s,
        o = (0, n.c)(5),
        { id: l, fileType: i } = e
      return (
        o[0] !== i
          ? ((t =
              "manifest" === i
                ? (0, a.jsx)(r.A, {
                    id: "conversationImport.claude.invalidManifest",
                    defaultMessage: "Could not read this export. Make sure you selected a valid manifest JSON file.",
                  })
                : (0, a.jsx)(r.A, {
                    id: "conversationImport.claude.invalidExport",
                    defaultMessage:
                      "Could not read this export. Make sure you selected a valid <code>conversations.json</code> file.",
                    values: { code: M },
                  })),
            (o[0] = i),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== l || o[3] !== t
          ? ((s = (0, a.jsx)("p", { id: l, role: "alert", className: "text-sm text-danger", children: t })),
            (o[2] = l),
            (o[3] = t),
            (o[4] = s))
          : (s = o[4]),
        s
      )
    }
    function M(e) {
      return (0, a.jsx)("code", { children: e }, "filename")
    }
    function N(e) {
      let t,
        s,
        o = (0, n.c)(5),
        { title: l, subtitle: r } = e
      return (
        o[0] !== l
          ? ((t = (0, a.jsx)(c.L3, {
              asChild: !0,
              children: (0, a.jsx)("h2", { ref: w, className: "outline-none", tabIndex: -1, children: l }),
            })),
            (o[0] = l),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== r || o[3] !== t
          ? ((s = (0, a.jsx)(d.OO, { className: "shrink-0", children: (0, a.jsx)(d.c7, { title: t, subtitle: r }) })),
            (o[2] = r),
            (o[3] = t),
            (o[4] = s))
          : (s = o[4]),
        s
      )
    }
    function w(e) {
      e?.focus()
    }
    function C(e) {
      let t,
        s,
        o,
        i,
        c,
        u,
        m,
        p,
        f,
        h,
        x,
        j,
        M,
        w,
        C,
        O,
        T,
        P,
        U,
        $,
        B = (0, n.c)(46),
        { manifest: D, busy: E, fileError: R, onChange: F, onBack: H } = e,
        Y = (0, v.A)(),
        J = (0, l.useId)(),
        q = D?.filename
      ;(B[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, a.jsx)(N, {
            subtitle: null,
            title: (0, a.jsx)(r.A, {
              id: "conversationImport.claude.prepareExport",
              defaultMessage: "Prepare your conversations",
            }),
          })),
          (B[0] = t))
        : (t = B[0]),
        B[1] !== D
          ? ((s = (0, a.jsx)(_.ic, {
              inset: !1,
              controlSizing: "content",
              label: D
                ? (0, a.jsx)(r.A, {
                    id: "conversationImport.claude.downloadStep",
                    defaultMessage: "1. Download your conversations",
                  })
                : (0, a.jsx)(r.A, {
                    id: "conversationImport.claude.downloadedStep",
                    defaultMessage: "1. Conversations downloaded",
                  }),
              control: D
                ? (0, a.jsx)(y.z, {
                    href: D.conversationsUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    referrerPolicy: "no-referrer",
                    color: "secondary",
                    size: "medium",
                    onClick: (e) =>
                      (0, b.PQ)({
                        event: e,
                        href: D.conversationsUrl,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser",
                      }),
                    children: (0, a.jsx)(r.A, { id: "conversationImport.claude.download", defaultMessage: "Download" }),
                  })
                : (0, a.jsx)(I.JwD, {}),
            })),
            (B[1] = D),
            (B[2] = s))
          : (s = B[2]),
        B[3] !== D?.hasMultipleConversationBatches
          ? ((o = D?.hasMultipleConversationBatches
              ? (0, a.jsxs)("p", {
                  className: "flex items-center gap-2 text-sm text-warning select-none",
                  role: "alert",
                  children: [
                    (0, a.jsx)(I.Ko7, {}),
                    (0, a.jsx)(r.A, {
                      id: "conversationImport.claude.multipleBatchesWarning",
                      defaultMessage:
                        "Your export has multiple batches of conversations. Only the first batch will be imported.",
                    }),
                  ],
                })
              : null),
            (B[3] = D?.hasMultipleConversationBatches),
            (B[4] = o))
          : (o = B[4]),
        B[5] !== s || B[6] !== o
          ? ((i = (0, a.jsxs)("li", { children: [s, o] })), (B[5] = s), (B[6] = o), (B[7] = i))
          : (i = B[7]),
        B[8] !== q
          ? ((c = q
              ? (0, a.jsx)(r.A, {
                  id: "conversationImport.claude.unzipNamedArchiveStep",
                  defaultMessage: "2. Unzip <code>{filename}</code>",
                  values: { filename: q, code: z },
                })
              : (0, a.jsx)(r.A, {
                  id: "conversationImport.claude.unzipArchiveStep",
                  defaultMessage: "2. Unzip your conversations ZIP file",
                })),
            (B[8] = q),
            (B[9] = c))
          : (c = B[9]),
        B[10] !== q
          ? ((u = q
              ? (0, a.jsx)(r.A, {
                  id: "conversationImport.claude.unzipNamedArchiveHelp",
                  defaultMessage:
                    "Double click the downloaded {filename} file to unzip it. You should see conversations.json.",
                  values: { filename: q },
                })
              : (0, a.jsx)(r.A, {
                  id: "conversationImport.claude.unzipArchiveHelp",
                  defaultMessage:
                    "Double click the downloaded ZIP file to unzip it. You should see conversations.json.",
                })),
            (B[10] = q),
            (B[11] = u))
          : (u = B[11]),
        B[12] !== Y
          ? ((m = Y.formatMessage({
              id: "conversationImport.claude.extractHelpLabel",
              defaultMessage: "How to unzip your conversations",
            })),
            (B[12] = Y),
            (B[13] = m))
          : (m = B[13]),
        B[14] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, a.jsx)(I.QSk, {})), (B[14] = p)) : (p = B[14]),
        B[15] !== m
          ? ((f = (0, a.jsx)(y.$, {
              type: "button",
              color: "ghost",
              size: "medium",
              uniform: !0,
              "aria-label": m,
              children: p,
            })),
            (B[15] = m),
            (B[16] = f))
          : (f = B[16]),
        B[17] !== u || B[18] !== f
          ? ((h = (0, a.jsx)(g.m, { content: u, children: f })), (B[17] = u), (B[18] = f), (B[19] = h))
          : (h = B[19]),
        B[20] !== h || B[21] !== c
          ? ((x = (0, a.jsx)("li", {
              children: (0, a.jsx)(_.ic, { inset: !1, controlSizing: "content", label: c, control: h }),
            })),
            (B[20] = h),
            (B[21] = c),
            (B[22] = x))
          : (x = B[22]),
        B[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, a.jsx)(r.A, {
              id: "conversationImport.claude.uploadStep",
              defaultMessage: "3. Upload extracted <code>conversations.json</code>",
              values: { code: k },
            })),
            (B[23] = j))
          : (j = B[23]))
      let G = R ? J : void 0
      return (
        B[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, a.jsx)(r.A, { id: "conversationImport.claude.upload", defaultMessage: "Upload" })), (B[24] = M))
          : (M = B[24]),
        B[25] !== E || B[26] !== F || B[27] !== G
          ? ((w = (0, a.jsx)(_.ic, {
              inset: !1,
              controlSizing: "content",
              label: j,
              control: (0, a.jsx)(S, { busy: E, errorId: G, onChange: F, size: "medium", children: M }),
            })),
            (B[25] = E),
            (B[26] = F),
            (B[27] = G),
            (B[28] = w))
          : (w = B[28]),
        B[29] !== R || B[30] !== J
          ? ((C = R ? (0, a.jsx)(A, { id: J, fileType: "conversations" }) : null),
            (B[29] = R),
            (B[30] = J),
            (B[31] = C))
          : (C = B[31]),
        B[32] !== w || B[33] !== C
          ? ((O = (0, a.jsxs)("li", { children: [w, C] })), (B[32] = w), (B[33] = C), (B[34] = O))
          : (O = B[34]),
        B[35] !== x || B[36] !== O || B[37] !== i
          ? ((T = (0, a.jsx)(d.OO, {
              className: "min-h-0 overflow-y-auto",
              children: (0, a.jsxs)("ol", { className: "flex flex-col gap-3", children: [i, x, O] }),
            })),
            (B[35] = x),
            (B[36] = O),
            (B[37] = i),
            (B[38] = T))
          : (T = B[38]),
        B[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, a.jsx)(r.A, { id: "conversationImport.back", defaultMessage: "Back" })), (B[39] = P))
          : (P = B[39]),
        B[40] !== E || B[41] !== H
          ? ((U = (0, a.jsx)(d.Es, {
              children: (0, a.jsx)(y.$, { type: "button", color: "secondary", disabled: E, onClick: H, children: P }),
            })),
            (B[40] = E),
            (B[41] = H),
            (B[42] = U))
          : (U = B[42]),
        B[43] !== T || B[44] !== U
          ? (($ = (0, a.jsxs)(a.Fragment, { children: [t, T, U] })), (B[43] = T), (B[44] = U), (B[45] = $))
          : ($ = B[45]),
        $
      )
    }
    function k(e) {
      return (0, a.jsx)("code", { children: e }, "filename")
    }
    function z(e) {
      return (0, a.jsx)("code", { children: e }, "filename")
    }
    var O = s("Sezd")
    function T(e) {
      let t,
        s,
        o,
        i,
        c,
        d,
        u,
        m,
        p,
        f,
        h,
        x,
        j,
        g,
        b = (0, n.c)(37),
        { conversations: I, selected: _, onSelectionChange: S } = e,
        A = (0, v.A)(),
        [M, N] = (0, l.useState)(0),
        w = Math.ceil(I.length / 100)
      if (
        (b[0] !== I || b[1] !== S
          ? ((t = () => S(new Set(I.flatMap(P)))), (b[0] = I), (b[1] = S), (b[2] = t))
          : (t = b[2]),
        b[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(r.A, { id: "conversationImport.claude.selectAll", defaultMessage: "Select all" })),
            (b[3] = s))
          : (s = b[3]),
        b[4] !== t
          ? ((o = (0, a.jsx)(y.$, { type: "button", color: "secondary", onClick: t, children: s })),
            (b[4] = t),
            (b[5] = o))
          : (o = b[5]),
        b[6] !== S ? ((i = () => S(new Set())), (b[6] = S), (b[7] = i)) : (i = b[7]),
        b[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(r.A, { id: "conversationImport.claude.clear", defaultMessage: "Clear selection" })),
            (b[8] = c))
          : (c = b[8]),
        b[9] !== i
          ? ((d = (0, a.jsx)(y.$, { type: "button", color: "secondary", onClick: i, children: c })),
            (b[9] = i),
            (b[10] = d))
          : (d = b[10]),
        b[11] !== o || b[12] !== d
          ? ((u = (0, a.jsxs)("div", { className: "flex shrink-0 flex-wrap gap-3 select-none", children: [o, d] })),
            (b[11] = o),
            (b[12] = d),
            (b[13] = u))
          : (u = b[13]),
        b[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)("th", {
              className: "p-2 text-start",
              children: (0, a.jsx)(r.A, { id: "conversationImport.claude.import", defaultMessage: "Import" }),
            })),
            (b[14] = m))
          : (m = b[14]),
        b[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)("th", {
              className: "p-2 text-start",
              children: (0, a.jsx)(r.A, { id: "conversationImport.claude.sourceTitle", defaultMessage: "Title" }),
            })),
            (b[15] = p))
          : (p = b[15]),
        b[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsx)("thead", {
              className: "sticky top-0 z-10 bg-surface text-secondary dark:bg-surface-tertiary",
              children: (0, a.jsxs)("tr", {
                children: [
                  m,
                  p,
                  (0, a.jsx)("th", {
                    className: "p-2 text-start",
                    children: (0, a.jsx)(r.A, {
                      id: "conversationImport.claude.sourceMessages",
                      defaultMessage: "Messages",
                    }),
                  }),
                ],
              }),
            })),
            (b[16] = f))
          : (f = b[16]),
        b[17] !== I || b[18] !== A || b[19] !== S || b[20] !== M || b[21] !== _)
      ) {
        let e
        ;(b[23] !== A || b[24] !== S || b[25] !== M || b[26] !== _
          ? ((e = (e, t) => {
              let s = 100 * M + t
              return (0, a.jsxs)(
                "tr",
                {
                  className: "border-t border-default",
                  children: [
                    (0, a.jsx)("td", {
                      className: "p-2",
                      children: (0, a.jsx)("div", {
                        className: "relative",
                        children: (0, a.jsx)(O.S, {
                          "aria-label": A.formatMessage(
                            { id: "conversationImport.claude.select", defaultMessage: "Import {title}" },
                            { title: e.title },
                          ),
                          checked: _.has(s),
                          disabled: 0 === e.messageCount,
                          onCheckedChange: (e) => {
                            let t = new Set(_)
                            ;(e ? t.add(s) : t.delete(s), S(t))
                          },
                        }),
                      }),
                    }),
                    (0, a.jsx)("td", {
                      className: "p-2",
                      children:
                        e.title ||
                        (0, a.jsx)(r.A, { id: "conversationImport.claude.untitled", defaultMessage: "Untitled" }),
                    }),
                    (0, a.jsx)("td", { className: "p-2", children: e.messageCount }),
                  ],
                },
                s,
              )
            }),
            (b[23] = A),
            (b[24] = S),
            (b[25] = M),
            (b[26] = _),
            (b[27] = e))
          : (e = b[27]),
          (h = I.slice(100 * M, (M + 1) * 100).map(e)),
          (b[17] = I),
          (b[18] = A),
          (b[19] = S),
          (b[20] = M),
          (b[21] = _),
          (b[22] = h))
      } else h = b[22]
      return (
        b[28] !== h
          ? ((x = (0, a.jsx)("div", {
              className: "min-h-0 overflow-y-auto",
              children: (0, a.jsxs)("table", {
                className: "w-full text-start",
                children: [f, (0, a.jsx)("tbody", { children: h })],
              }),
            })),
            (b[28] = h),
            (b[29] = x))
          : (x = b[29]),
        b[30] !== M || b[31] !== w
          ? ((j =
              w > 1
                ? (0, a.jsxs)("div", {
                    className: "flex shrink-0 items-center justify-between gap-3 select-none",
                    children: [
                      (0, a.jsx)(y.$, {
                        type: "button",
                        color: "secondary",
                        size: "toolbar",
                        disabled: 0 === M,
                        onClick: () => N(M - 1),
                        children: (0, a.jsx)(r.A, {
                          id: "conversationImport.claude.previous",
                          defaultMessage: "Previous",
                        }),
                      }),
                      (0, a.jsx)("span", {
                        className: "text-sm text-secondary",
                        children: (0, a.jsx)(r.A, {
                          id: "conversationImport.claude.page",
                          defaultMessage: "Page {page} of {pages}",
                          values: { page: M + 1, pages: w },
                        }),
                      }),
                      (0, a.jsx)(y.$, {
                        type: "button",
                        color: "secondary",
                        size: "toolbar",
                        disabled: M + 1 === w,
                        onClick: () => N(M + 1),
                        children: (0, a.jsx)(r.A, { id: "conversationImport.claude.next", defaultMessage: "Next" }),
                      }),
                    ],
                  })
                : null),
            (b[30] = M),
            (b[31] = w),
            (b[32] = j))
          : (j = b[32]),
        b[33] !== x || b[34] !== j || b[35] !== u
          ? ((g = (0, a.jsxs)("div", { className: "flex min-h-0 flex-col gap-3", children: [u, x, j] })),
            (b[33] = x),
            (b[34] = j),
            (b[35] = u),
            (b[36] = g))
          : (g = b[36]),
        g
      )
    }
    function P(e, t) {
      return e.messageCount > 0 ? [t] : []
    }
    function U(e) {
      let t,
        s,
        o,
        l,
        i,
        c,
        u,
        m,
        p,
        f,
        h = (0, n.c)(23),
        { conversations: x, selected: j, onSelectionChange: g, onBack: v } = e
      ;(h[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, a.jsx)(r.A, { id: "conversationImport.selectTitle", defaultMessage: "Select conversations" })),
          (h[0] = t))
        : (t = h[0]),
        h[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(N, {
              title: t,
              subtitle: (0, a.jsx)(r.A, {
                id: "conversationImport.step",
                defaultMessage: "Step {step} of 2",
                values: { step: 2 },
              }),
            })),
            (h[1] = s))
          : (s = h[1]),
        h[2] !== x.length
          ? ((o = (0, a.jsx)(d.OO, {
              className: "shrink-0",
              children: (0, a.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, a.jsx)(r.A, {
                  id: "conversationImport.foundCount",
                  defaultMessage: "Found {count, plural, one {# conversation} other {# conversations}}",
                  values: { count: x.length },
                }),
              }),
            })),
            (h[2] = x.length),
            (h[3] = o))
          : (o = h[3]),
        h[4] !== x || h[5] !== g || h[6] !== j
          ? ((l = (0, a.jsx)(d.OO, {
              className: "min-h-0",
              children: (0, a.jsx)(T, { conversations: x, selected: j, onSelectionChange: g }),
            })),
            (h[4] = x),
            (h[5] = g),
            (h[6] = j),
            (h[7] = l))
          : (l = h[7]),
        h[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(r.A, { id: "conversationImport.back", defaultMessage: "Back" })), (h[8] = i))
          : (i = h[8]),
        h[9] !== v
          ? ((c = (0, a.jsx)(y.$, { type: "button", color: "secondary", onClick: v, children: i })),
            (h[9] = v),
            (h[10] = c))
          : (c = h[10]))
      let b = 0 === j.size
      return (
        h[11] !== j.size
          ? ((u = (0, a.jsx)(r.A, {
              id: "conversationImport.claude.submit",
              defaultMessage: "Import selected ({count})",
              values: { count: j.size },
            })),
            (h[11] = j.size),
            (h[12] = u))
          : (u = h[12]),
        h[13] !== b || h[14] !== u
          ? ((m = (0, a.jsx)(y.$, { type: "submit", disabled: b, children: u })), (h[13] = b), (h[14] = u), (h[15] = m))
          : (m = h[15]),
        h[16] !== c || h[17] !== m
          ? ((p = (0, a.jsxs)(d.Es, { className: "shrink-0", children: [c, m] })),
            (h[16] = c),
            (h[17] = m),
            (h[18] = p))
          : (p = h[18]),
        h[19] !== p || h[20] !== o || h[21] !== l
          ? ((f = (0, a.jsxs)(a.Fragment, { children: [s, o, l, p] })),
            (h[19] = p),
            (h[20] = o),
            (h[21] = l),
            (h[22] = f))
          : (f = h[22]),
        f
      )
    }
    var $ = s("bqtn"),
      B = s("ZtSy")
    function D(e) {
      let t,
        s,
        o,
        i,
        c,
        u,
        m,
        p,
        f,
        h,
        x,
        j,
        g,
        b,
        M,
        w,
        C,
        k,
        z = (0, n.c)(38),
        { source: O, onSourceChange: T, busy: P, fileError: U, onChange: D, onAlreadyDownloaded: R } = e,
        F = (0, v.A)(),
        H = (0, l.useId)(),
        Y = (0, l.useId)()
      ;(z[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, a.jsx)(r.A, { id: "conversationImport.title", defaultMessage: "Import conversations" })),
          (z[0] = t))
        : (t = z[0]),
        z[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(N, {
              title: t,
              subtitle: (0, a.jsx)(r.A, {
                id: "conversationImport.step",
                defaultMessage: "Step {step} of 2",
                values: { step: 1 },
              }),
            })),
            (z[1] = s))
          : (s = z[1]),
        z[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(r.A, { id: "conversationImport.source", defaultMessage: "Import from" })), (z[2] = o))
          : (o = z[2]),
        z[3] !== P || z[4] !== T || z[5] !== O || z[6] !== H
          ? ((i = (0, a.jsx)("div", {
              className: "border-b border-default",
              children: (0, a.jsx)(_.ic, {
                inset: !1,
                controlSizing: "content",
                label: o,
                control: (e) =>
                  (0, a.jsx)($.Ab, {
                    align: "end",
                    disabled: P,
                    triggerButton: (0, a.jsxs)(y.$, {
                      ...e,
                      "aria-labelledby": `${e["aria-labelledby"]} ${H}`,
                      type: "button",
                      color: "secondary",
                      size: "medium",
                      disabled: P,
                      children: [
                        (0, a.jsx)("span", {
                          id: H,
                          children: (0, a.jsx)(r.A, {
                            id: "conversationImport.claude.sourceName",
                            defaultMessage: "Claude",
                          }),
                        }),
                        (0, a.jsx)(I.Aq_, {}),
                      ],
                    }),
                    children: (0, a.jsx)($.ms.RadioGroup, {
                      value: O,
                      onValueChange: T,
                      children: (0, a.jsx)($.ms.RadioItem, {
                        value: "claude",
                        children: (0, a.jsx)(r.A, {
                          id: "conversationImport.claude.sourceName",
                          defaultMessage: "Claude",
                        }),
                      }),
                    }),
                  }),
              }),
            })),
            (z[3] = P),
            (z[4] = T),
            (z[5] = O),
            (z[6] = H),
            (z[7] = i))
          : (i = z[7]),
        z[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)("p", {
              children: (0, a.jsx)(r.A, {
                id: "conversationImport.claude.manifestInstructions",
                defaultMessage: "<help>Export your data from Claude</help>, then upload the manifest JSON file",
                values: { help: E },
              }),
            })),
            (z[8] = c))
          : (c = z[8]),
        z[9] !== F
          ? ((u = F.formatMessage({
              id: "conversationImport.claude.exportHelp",
              defaultMessage: "How to export your Claude data",
            })),
            (z[9] = F),
            (z[10] = u))
          : (u = z[10]),
        z[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(r.A, {
              id: "conversationImport.claude.exportHelp",
              defaultMessage: "How to export your Claude data",
            })),
            (p = (0, a.jsx)(I.QSk, {})),
            (z[11] = m),
            (z[12] = p))
          : ((m = z[11]), (p = z[12])),
        z[13] !== u
          ? ((f = (0, a.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                c,
                (0, a.jsx)(B.G, {
                  href: "https://support.claude.com/en/articles/9450526-export-your-claude-data",
                  openTarget: "external-browser",
                  initiator: "open_in_browser_bridge",
                  "aria-label": u,
                  tooltipContent: m,
                  children: p,
                }),
              ],
            })),
            (z[13] = u),
            (z[14] = f))
          : (f = z[14]),
        z[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, a.jsx)(r.A, {
                id: "conversationImport.claude.exclusions",
                defaultMessage: "Files, artifacts, and projects are not imported",
              }),
            })),
            (z[15] = h))
          : (h = z[15]),
        z[16] !== f
          ? ((x = (0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [f, h] })), (z[16] = f), (z[17] = x))
          : (x = z[17]))
      let J = U ? Y : void 0
      return (
        z[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, a.jsx)(r.A, {
              id: "conversationImport.claude.uploadManifest",
              defaultMessage: "Upload manifest",
            })),
            (z[18] = j))
          : (j = z[18]),
        z[19] !== P || z[20] !== D || z[21] !== J
          ? ((g = (0, a.jsx)(S, { busy: P, errorId: J, onChange: D, size: "large", children: j })),
            (z[19] = P),
            (z[20] = D),
            (z[21] = J),
            (z[22] = g))
          : (g = z[22]),
        z[23] !== U || z[24] !== Y
          ? ((b = U ? (0, a.jsx)(A, { id: Y, fileType: "manifest" }) : null), (z[23] = U), (z[24] = Y), (z[25] = b))
          : (b = z[25]),
        z[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, a.jsx)(r.A, {
              id: "conversationImport.claude.alreadyDownloaded",
              defaultMessage: "I already downloaded my data",
            })),
            (z[26] = M))
          : (M = z[26]),
        z[27] !== P || z[28] !== R
          ? ((w = (0, a.jsx)(y.$, {
              className: "w-full justify-center",
              type: "button",
              color: "secondary",
              size: "large",
              disabled: P,
              onClick: R,
              children: M,
            })),
            (z[27] = P),
            (z[28] = R),
            (z[29] = w))
          : (w = z[29]),
        z[30] !== g || z[31] !== b || z[32] !== w
          ? ((C = (0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [g, b, w] })),
            (z[30] = g),
            (z[31] = b),
            (z[32] = w),
            (z[33] = C))
          : (C = z[33]),
        z[34] !== x || z[35] !== C || z[36] !== i
          ? ((k = (0, a.jsxs)(a.Fragment, {
              children: [
                s,
                (0, a.jsx)(d.OO, {
                  className: "min-h-0 overflow-y-auto",
                  children: (0, a.jsxs)("div", { className: "flex flex-col gap-4", children: [i, x, C] }),
                }),
              ],
            })),
            (z[34] = x),
            (z[35] = C),
            (z[36] = i),
            (z[37] = k))
          : (k = z[37]),
        k
      )
    }
    function E(e) {
      return (0, a.jsx)(
        B.G,
        {
          appearance: "secondary",
          href: "https://claude.ai/settings/data-privacy-controls",
          openTarget: "external-browser",
          initiator: "open_in_browser_bridge",
          children: e,
        },
        "export-help",
      )
    }
    var R = s("RNul")
    function F(e) {
      let t,
        s,
        o = (0, n.c)(4),
        { attempts: l } = e
      return (
        o[0] !== l ? ((t = l.map(H)), (o[0] = l), (o[1] = t)) : (t = o[1]),
        o[2] !== t
          ? ((s = (0, a.jsx)("ul", { className: "flex flex-col", children: t })), (o[2] = t), (o[3] = s))
          : (s = o[3]),
        s
      )
    }
    function H(e, t) {
      return (0, a.jsx)("li", { children: (0, a.jsx)(Y, { attempt: e }) }, t)
    }
    function Y(e) {
      let t,
        s,
        o,
        i,
        c,
        d,
        u,
        m,
        p,
        f,
        h,
        x,
        j,
        g,
        b = (0, n.c)(46),
        { attempt: _ } = e,
        S = (0, v.A)(),
        A = (0, l.useId)(),
        M = "finished" === _.status ? _.result : null
      b[0] !== _.sourceTitle || b[1] !== S || b[2] !== M?.title
        ? ((t =
            M?.title ||
            _.sourceTitle ||
            S.formatMessage({ id: "conversationImport.claude.untitled", defaultMessage: "Untitled" })),
          (b[0] = _.sourceTitle),
          (b[1] = S),
          (b[2] = M?.title),
          (b[3] = t))
        : (t = b[3])
      let N = t
      ;(b[4] !== _.status || b[5] !== N
        ? ((s =
            "importing" === _.status
              ? (0, a.jsxs)("span", {
                  role: "status",
                  children: [
                    (0, a.jsx)(R.y, {}),
                    (0, a.jsx)("span", {
                      className: "sr-only",
                      children: (0, a.jsx)(r.A, {
                        id: "conversationImport.uploadingConversation",
                        defaultMessage: "Importing {title}",
                        values: { title: N },
                      }),
                    }),
                  ],
                })
              : null),
          (b[4] = _.status),
          (b[5] = N),
          (b[6] = s))
        : (s = b[6]),
        b[7] !== M?.status
          ? ((o = M?.status === "success" ? (0, a.jsx)(I.jFs, {}) : null), (b[7] = M?.status), (b[8] = o))
          : (o = b[8]),
        b[9] !== _.status
          ? ((i = "failed" === _.status ? (0, a.jsx)(I.pgK, {}) : null), (b[9] = _.status), (b[10] = i))
          : (i = b[10]),
        b[11] !== s || b[12] !== o || b[13] !== i
          ? ((c = (0, a.jsxs)("span", {
              className: "flex size-5 shrink-0 items-center justify-center",
              children: [s, o, i],
            })),
            (b[11] = s),
            (b[12] = o),
            (b[13] = i),
            (b[14] = c))
          : (c = b[14]),
        b[15] !== N
          ? ((d = (0, a.jsx)("span", { className: "min-w-0 flex-1 truncate text-start", children: N })),
            (b[15] = N),
            (b[16] = d))
          : (d = b[16]),
        b[17] !== M || b[18] !== A
          ? ((u =
              M?.status !== "success" || M.already_imported
                ? null
                : (0, a.jsx)("span", {
                    id: A,
                    className: "sr-only",
                    children: (0, a.jsx)(r.A, { id: "conversationImport.imported", defaultMessage: "Imported" }),
                  })),
            (b[17] = M),
            (b[18] = A),
            (b[19] = u))
          : (u = b[19]),
        b[20] !== _.status
          ? ((m =
              "failed" === _.status
                ? (0, a.jsx)("span", {
                    role: "alert",
                    className: "sr-only",
                    children: (0, a.jsx)(r.A, { id: "conversationImport.claude.failed", defaultMessage: "Failed" }),
                  })
                : null),
            (b[20] = _.status),
            (b[21] = m))
          : (m = b[21]),
        b[22] !== M?.already_imported || b[23] !== A
          ? ((p = M?.already_imported
              ? (0, a.jsx)("span", {
                  id: A,
                  className: "shrink-0 text-sm",
                  children: (0, a.jsx)(r.A, {
                    id: "conversationImport.alreadyImported",
                    defaultMessage: "Already imported",
                  }),
                })
              : null),
            (b[22] = M?.already_imported),
            (b[23] = A),
            (b[24] = p))
          : (p = b[24]),
        b[25] !== _.status
          ? ((f =
              "queued" === _.status
                ? (0, a.jsx)("span", {
                    className: "sr-only",
                    children: (0, a.jsx)(r.A, { id: "conversationImport.waiting", defaultMessage: "Waiting" }),
                  })
                : null),
            (b[25] = _.status),
            (b[26] = f))
          : (f = b[26]),
        b[27] !== _.status
          ? ((h =
              "stopped" === _.status
                ? (0, a.jsx)("span", {
                    className: "shrink-0 text-sm",
                    children: (0, a.jsx)(r.A, { id: "conversationImport.notImported", defaultMessage: "Not imported" }),
                  })
                : null),
            (b[27] = _.status),
            (b[28] = h))
          : (h = b[28]),
        b[29] !== M?.status
          ? ((x =
              M?.status === "skipped"
                ? (0, a.jsx)("span", {
                    className: "shrink-0 text-sm",
                    children: (0, a.jsx)(r.A, {
                      id: "conversationImport.claude.skipped",
                      defaultMessage: "Skipped: no supported messages",
                    }),
                  })
                : null),
            (b[29] = M?.status),
            (b[30] = x))
          : (x = b[30]),
        b[31] !== f ||
        b[32] !== h ||
        b[33] !== x ||
        b[34] !== c ||
        b[35] !== d ||
        b[36] !== u ||
        b[37] !== m ||
        b[38] !== p
          ? ((j = (0, a.jsxs)(a.Fragment, { children: [c, d, u, m, p, f, h, x] })),
            (b[31] = f),
            (b[32] = h),
            (b[33] = x),
            (b[34] = c),
            (b[35] = d),
            (b[36] = u),
            (b[37] = m),
            (b[38] = p),
            (b[39] = j))
          : (j = b[39]))
      let w = j
      return (
        b[40] !== _.status || b[41] !== w || b[42] !== M || b[43] !== A || b[44] !== N
          ? ((g = M?.conversation_id
              ? (0, a.jsx)(y.z, {
                  className: "w-full justify-start",
                  color: "ghostActive",
                  size: "large",
                  to: `/c/${encodeURIComponent(M.conversation_id)}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  title: N,
                  "aria-label": N,
                  "aria-describedby": A,
                  children: w,
                })
              : (0, a.jsx)(y.$, {
                  className: "w-full justify-start",
                  type: "button",
                  size: "large",
                  color: "failed" === _.status ? "ghostActive" : "ghostSecondary",
                  disabled: !0,
                  disabledAppearance: "unchanged",
                  title: N,
                  children: w,
                })),
            (b[40] = _.status),
            (b[41] = w),
            (b[42] = M),
            (b[43] = A),
            (b[44] = N),
            (b[45] = g))
          : (g = b[45]),
        g
      )
    }
    function J(e) {
      let t,
        s,
        o,
        l,
        i,
        c,
        u,
        m,
        p = (0, n.c)(19),
        { attempts: f, busy: h, error: x, onClose: j } = e
      p[0] !== f ? ((t = f.filter(q)), (p[0] = f), (p[1] = t)) : (t = p[1])
      let g = t.length
      return (
        p[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(r.A, { id: "conversationImport.statusTitle", defaultMessage: "Import status" })),
            (p[2] = s))
          : (s = p[2]),
        p[3] !== f.length || p[4] !== g
          ? ((o = (0, a.jsx)(N, {
              title: s,
              subtitle: (0, a.jsx)("span", {
                role: "status",
                children: (0, a.jsx)(r.A, {
                  id: "conversationImport.importedCount",
                  defaultMessage: "{imported} of {total} imported",
                  values: { imported: g, total: f.length },
                }),
              }),
            })),
            (p[3] = f.length),
            (p[4] = g),
            (p[5] = o))
          : (o = p[5]),
        p[6] !== x
          ? ((l = x
              ? (0, a.jsx)(d.OO, {
                  className: "shrink-0",
                  children: (0, a.jsx)("p", { role: "alert", className: "text-sm text-danger", children: x }),
                })
              : null),
            (p[6] = x),
            (p[7] = l))
          : (l = p[7]),
        p[8] !== f
          ? ((i = (0, a.jsx)(d.OO, { className: "min-h-0 overflow-y-auto", children: (0, a.jsx)(F, { attempts: f }) })),
            (p[8] = f),
            (p[9] = i))
          : (i = p[9]),
        p[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(r.A, { id: "conversationImport.done", defaultMessage: "Done" })), (p[10] = c))
          : (c = p[10]),
        p[11] !== h || p[12] !== j
          ? ((u = (0, a.jsx)(d.Es, {
              className: "shrink-0",
              children: (0, a.jsx)(y.$, { type: "button", disabled: h, onClick: j, children: c }),
            })),
            (p[11] = h),
            (p[12] = j),
            (p[13] = u))
          : (u = p[13]),
        p[14] !== o || p[15] !== l || p[16] !== i || p[17] !== u
          ? ((m = (0, a.jsxs)(a.Fragment, { children: [o, l, i, u] })),
            (p[14] = o),
            (p[15] = l),
            (p[16] = i),
            (p[17] = u),
            (p[18] = m))
          : (m = p[18]),
        m
      )
    }
    function q(e) {
      return "finished" === e.status && "success" === e.result.status
    }
    function G(e) {
      let t,
        s,
        g,
        v,
        y,
        b,
        I,
        _,
        S,
        A,
        M,
        N,
        w,
        k,
        z,
        O = (0, n.c)(49),
        { onClose: T } = e,
        P = (0, o.gh)(u.u),
        [$] = (0, l.useState)(L),
        [B, E] = (0, l.useState)("source"),
        [R, F] = (0, l.useState)(null),
        [H, Y] = (0, l.useState)("claude")
      O[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (O[0] = t)) : (t = O[0])
      let [q, G] = (0, l.useState)(t)
      O[1] === Symbol.for("react.memo_cache_sentinel") ? ((s = new Set()), (O[1] = s)) : (s = O[1])
      let [Z, V] = (0, l.useState)(s),
        [X, ee] = (0, l.useState)(!1),
        [et, es] = (0, l.useState)(null),
        [ea, en] = (0, l.useState)(!1)
      O[2] === Symbol.for("react.memo_cache_sentinel") ? ((g = []), (O[2] = g)) : (g = O[2])
      let [eo, el] = (0, l.useState)(g),
        er = (0, l.useRef)(!1),
        ei = (0, l.useRef)(null)
      ;(O[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = () => () => {
            ei.current?.abort()
          }),
          (y = []),
          (O[3] = v),
          (O[4] = y))
        : ((v = O[3]), (y = O[4])),
        (0, l.useEffect)(v, y),
        O[5] !== B
          ? ((b = async function (e) {
              let t = e.target.files?.[0]
              if (((e.target.value = ""), t && !er.current)) {
                ;((er.current = !0), en(!0), es(null), G([]), V(new Set()), ee(!1), el([]))
                try {
                  let e = await (async function (e) {
                    let t = await e.text()
                    return (
                      await new Promise((e) => setTimeout(e, 0)),
                      (function (e) {
                        let t
                        try {
                          t = JSON.parse(e)
                        } catch {
                          throw Error("This file is not valid JSON.")
                        }
                        let s = j.safeParse(t)
                        if (s.success) {
                          let e = s.data.data_files.filter(({ category: e }) => "conversations" === e),
                            t = e[0],
                            a = h.OZ5({ protocol: /^https$/ }).safeParse(t?.export_url)
                          if (!a.success) throw Error("Expected an HTTPS conversations download in the manifest.")
                          return {
                            type: "manifest",
                            conversationsUrl: a.data,
                            filename: t?.filename || null,
                            hasMultipleConversationBatches: e.length > 1,
                          }
                        }
                        let a = h.YOg(x).safeParse(t)
                        if (!a.success) throw Error("Expected the conversation array from conversations.json.")
                        return {
                          type: "conversations",
                          conversations: a.data.map((e) => ({
                            source: e,
                            title: e.name,
                            messageCount: e.chat_messages.length,
                          })),
                        }
                      })(t)
                    )
                  })(t)
                  if ("manifest" === e.type) "source" === B ? (F(e), E("prepare")) : ee(!0)
                  else {
                    let t = e.conversations
                    ;(G(t), V(new Set(t.flatMap(K))), E("selection"))
                  }
                } catch {
                  ee(!0)
                }
                ;((er.current = !1), en(!1))
              }
            }),
            (O[5] = B),
            (O[6] = b))
          : (b = O[6]))
      let ec = b
      O[7] !== q || O[8] !== P || O[9] !== Z || O[10] !== H || O[11] !== $ || O[12] !== B
        ? ((I = async function () {
            if ("selection" !== B || er.current || 0 === Z.size) return
            er.current = !0
            let e = new AbortController()
            ;((ei.current = e), en(!0), es(null))
            let t = q.filter((e, t) => Z.has(t))
            ;(el(t.map(W)), E("status"))
            try {
              let s = await (async function ({
                scope: e,
                source: t,
                conversations: s,
                signal: a,
                getCurrentAccount: n,
                onAttempt: o,
              }) {
                for (let [l, { source: r, title: i }] of s.entries()) {
                  if (a.aborted) break
                  let s = n()
                  if (null == s) return "accountChanged"
                  o(l, { sourceTitle: i, status: "importing" })
                  try {
                    let n = await p.Request.safePost("/data-import/conversation", {
                      signal: a,
                      requestBody: { source: t, conversation: r },
                      additionalHeaders: { [m.zBc]: s.accountId },
                      ...(null == s.userId ? {} : { expectedIdentity: { accountId: s.accountId, userId: s.userId } }),
                    })
                    ;("success" === n.status && (0, f.g6)(e), o(l, { sourceTitle: i, status: "finished", result: n }))
                  } catch {
                    if (a.aborted) break
                    o(l, { sourceTitle: i, status: "failed" })
                  }
                }
                return "finished"
              })({
                scope: P,
                source: H,
                conversations: t,
                signal: e.signal,
                getCurrentAccount: () => {
                  let e = (0, i.getBrowserChatGptAuthSnapshot)()
                  return null != $.userId &&
                    null != $.accountId &&
                    e?.userId === $.userId &&
                    e.accountId === $.accountId &&
                    e.accountUserId === $.accountUserId
                    ? { accountId: $.accountId }
                    : null
                },
                onAttempt: (e, t) => {
                  el((s) => s.map((s, a) => (a === e ? t : s)))
                },
              })
              "accountChanged" === s &&
                es(
                  (0, a.jsx)(r.A, {
                    id: "conversationImport.claude.accountChanged",
                    defaultMessage:
                      "The selected account changed. Remaining imports were stopped. Reopen this tool to import into the new account.",
                  }),
                )
            } catch {
              es(
                (0, a.jsx)(r.A, {
                  id: "conversationImport.claude.stopped",
                  defaultMessage: "Import stopped unexpectedly. Check the sidebar before retrying.",
                }),
              )
            }
            ;((ei.current = null), (er.current = !1), en(!1), el(Q))
          }),
          (O[7] = q),
          (O[8] = P),
          (O[9] = Z),
          (O[10] = H),
          (O[11] = $),
          (O[12] = B),
          (O[13] = I))
        : (I = O[13])
      let ed = I
      return (
        O[14] !== T
          ? ((_ = (e) => {
              e || er.current || T()
            }),
            (O[14] = T),
            (O[15] = _))
          : (_ = O[15]),
        O[16] !== ed
          ? ((S = (e) => {
              ;(e.preventDefault(), ed())
            }),
            (O[16] = ed),
            (O[17] = S))
          : (S = O[17]),
        O[18] !== ea || O[19] !== X || O[20] !== ec || O[21] !== H || O[22] !== B
          ? ((A =
              "source" === B
                ? (0, a.jsx)(D, {
                    source: H,
                    onSourceChange: Y,
                    onAlreadyDownloaded: () => {
                      ;(F(null), ee(!1), E("prepare"))
                    },
                    busy: ea,
                    fileError: X,
                    onChange: (e) => {
                      ec(e)
                    },
                  })
                : null),
            (O[18] = ea),
            (O[19] = X),
            (O[20] = ec),
            (O[21] = H),
            (O[22] = B),
            (O[23] = A))
          : (A = O[23]),
        O[24] !== ea || O[25] !== X || O[26] !== ec || O[27] !== R || O[28] !== B
          ? ((M =
              "prepare" === B
                ? (0, a.jsx)(C, {
                    manifest: R,
                    busy: ea,
                    fileError: X,
                    onChange: (e) => {
                      ec(e)
                    },
                    onBack: () => {
                      ;(ee(!1), F(null), E("source"))
                    },
                  })
                : null),
            (O[24] = ea),
            (O[25] = X),
            (O[26] = ec),
            (O[27] = R),
            (O[28] = B),
            (O[29] = M))
          : (M = O[29]),
        O[30] !== q || O[31] !== Z || O[32] !== B
          ? ((N =
              "selection" === B
                ? (0, a.jsx)(U, { conversations: q, selected: Z, onSelectionChange: V, onBack: () => E("prepare") })
                : null),
            (O[30] = q),
            (O[31] = Z),
            (O[32] = B),
            (O[33] = N))
          : (N = O[33]),
        O[34] !== eo || O[35] !== ea || O[36] !== et || O[37] !== T || O[38] !== B
          ? ((w = "status" === B ? (0, a.jsx)(J, { attempts: eo, busy: ea, error: et, onClose: T }) : null),
            (O[34] = eo),
            (O[35] = ea),
            (O[36] = et),
            (O[37] = T),
            (O[38] = B),
            (O[39] = w))
          : (w = O[39]),
        O[40] !== A || O[41] !== M || O[42] !== N || O[43] !== w || O[44] !== S
          ? ((k = (0, a.jsxs)(d.R4, {
              as: "form",
              size: "scrollable",
              "data-dd-privacy": "hidden",
              "data-sr-block": "true",
              onSubmit: S,
              children: [A, M, N, w],
            })),
            (O[40] = A),
            (O[41] = M),
            (O[42] = N),
            (O[43] = w),
            (O[44] = S),
            (O[45] = k))
          : (k = O[45]),
        O[46] !== k || O[47] !== _
          ? ((z = (0, a.jsx)(c.lG, { open: !0, size: "wide", variant: "chatgpt", onOpenChange: _, children: k })),
            (O[46] = k),
            (O[47] = _),
            (O[48] = z))
          : (z = O[48]),
        z
      )
    }
    function Q(e) {
      return e.map(Z)
    }
    function Z(e) {
      return "queued" === e.status || "importing" === e.status ? { sourceTitle: e.sourceTitle, status: "stopped" } : e
    }
    function W(e) {
      return { sourceTitle: e.title, status: "queued" }
    }
    function K(e, t) {
      return e.messageCount > 0 ? [t] : []
    }
    function L() {
      let e = (0, i.getBrowserChatGptAuthSnapshot)()
      return { userId: e?.userId, accountId: e?.accountId, accountUserId: e?.accountUserId }
    }
  },
}
//# sourceMappingURL=585811.122d1bdfd7.js.map
