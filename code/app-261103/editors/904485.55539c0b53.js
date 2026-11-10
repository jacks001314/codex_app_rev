export const __rspack_esm_ids = [904485]
export const __webpack_modules__ = {
  K4Yp(e, t, a) {
    var n = a("ASxG")
    let i = n.object({
        accountId: n.string().min(1),
        userId: n.string().min(1),
        hostId: n.string().min(1),
        threadId: n.string().min(1),
      }),
      l = i.extend({ artifactRef: n.string().min(1) }),
      r = n.object({
        source: l,
        attemptId: n.uuid(),
        title: n.string().min(1),
        documentType: n.enum(["granola_workbook", "granola_presentation"]),
        destination: n.literal("personal_file_drive").optional(),
        initialUpdate: n.string().min(1).optional(),
        imageFileIds: n.record(n.string().min(1), n.string().min(1)).optional(),
        snapshotSha256: n
          .string()
          .regex(/^[a-f0-9]{64}$/)
          .optional(),
        pageId: n.string().min(1).optional(),
        sourceReleased: n.boolean().optional(),
      }),
      s = n.object({ source: l })
    n.array(n.union([r, s]))
    let o = n.object({
      source: i.extend({ path: n.string().min(1) }),
      pageId: n.string().min(1),
      title: n.string().min(1),
      documentType: n.enum(["granola_workbook", "granola_presentation"]),
    })
    a.d(
      t,
      {},
      {
        LG: o,
        Nh: function (e, t) {
          return (
            e.accountId === t.accountId &&
            e.userId === t.userId &&
            e.hostId === t.hostId &&
            e.threadId === t.threadId &&
            e.artifactRef === t.artifactRef
          )
        },
        Qi: i,
      },
    )
  },
  LMkT(e, t, a) {
    var n = a("QosV"),
      i = a("D7Ms"),
      l = a("T0Rc"),
      r = a("zTeN"),
      s = a("G4E3"),
      o = a("SPnB"),
      d = a("TUMj"),
      c = a("K5PF"),
      u = a("e1xH"),
      p = a("qvFq"),
      f = a("tKel"),
      m = a("C8z7"),
      g = a("pyoT"),
      h = a("GaA7"),
      y = a("q77y"),
      b = a("Oj9r"),
      x = a("rvFo"),
      v = a("jv3l"),
      k = a("TJ1J")
    a.d(
      t,
      {},
      {
        a: function (e) {
          let t,
            a,
            I,
            w,
            j,
            S,
            M,
            A,
            P,
            C,
            _,
            T,
            L,
            N = (0, n.c)(73),
            { openSource: B, resource: $, conversationId: R, hostId: G } = e,
            F = (0, r.gh)(b.GD),
            K = (0, d.Rn)(),
            U = (0, r.Ul)(g.spaceAccountId$),
            W = (0, r.Ul)(o.chatGptAuthenticatedUserId$),
            z = (0, r.Ul)(u.pagesEnabled$)
          N[0] !== R || N[1] !== G || N[2] !== K || N[3] !== $
            ? ((t = !!$ && !!R && !K && (0, v.f)(G)), (N[0] = R), (N[1] = G), (N[2] = K), (N[3] = $), (N[4] = t))
            : (t = N[4])
          let D = t
          N[5] !== D || N[6] !== $
            ? ((a = D && $ && !$.artifactRef.startsWith("artifact_external_")), (N[5] = D), (N[6] = $), (N[7] = a))
            : (a = N[7])
          let E = a
          N[8] !== U || N[9] !== E || N[10] !== R || N[11] !== G || N[12] !== W
            ? ((I =
                E && null != U && null != W && null != R ? { accountId: U, userId: W, hostId: G, threadId: R } : null),
              (N[8] = U),
              (N[9] = E),
              (N[10] = R),
              (N[11] = G),
              (N[12] = W),
              (N[13] = I))
            : (I = N[13])
          let O = (0, r._U)(c.h2, I)
          N[14] !== U || N[15] !== R || N[16] !== O || N[17] !== G || N[18] !== $?.artifactRef || N[19] !== W
            ? ((w = O?.find((e) => {
                let { source: t } = e
                return (
                  t.accountId === U &&
                  t.userId === W &&
                  t.hostId === G &&
                  t.threadId === R &&
                  t.artifactRef === $?.artifactRef
                )
              })),
              (N[14] = U),
              (N[15] = R),
              (N[16] = O),
              (N[17] = G),
              (N[18] = $?.artifactRef),
              (N[19] = W),
              (N[20] = w))
            : (w = N[20])
          let q = w,
            H = h.appServices?.artifactSessions,
            Q = $?.artifactRef
          ;(N[21] !== U || N[22] !== R || N[23] !== q || N[24] !== G || N[25] !== Q || N[26] !== W
            ? ((j = ["artifact-session-metadata", G, R, Q, U, W, q]),
              (N[21] = U),
              (N[22] = R),
              (N[23] = q),
              (N[24] = G),
              (N[25] = Q),
              (N[26] = W),
              (N[27] = j))
            : (j = N[27]),
            N[28] !== E || N[29] !== R || N[30] !== $
              ? ((S =
                  $ && !$.pageId && E && H && R
                    ? (e) => {
                        let { signal: t } = e
                        return (0, y.P)(H.getMetadata({ artifactRef: $.artifactRef, threadId: R }), t)
                      }
                    : i.hT),
                (N[28] = E),
                (N[29] = R),
                (N[30] = $),
                (N[31] = S))
              : (S = N[31]),
            N[32] !== j || N[33] !== S
              ? ((M = { queryKey: j, queryFn: S, retry: !1, staleTime: x.D.THIRTY_SECONDS }),
                (N[32] = j),
                (N[33] = S),
                (N[34] = M))
              : (M = N[34]))
          let { data: V } = (0, l.I)(M)
          if (N[35] !== U || N[36] !== V?.handoff?.target?.uri || N[37] !== z || N[38] !== $?.pageId) {
            A = $?.pageId
            let e = V?.handoff?.target?.uri
            if (!A && z && U && e) {
              let t
              N[40] !== e ? ((t = (0, s.I0)(e)), (N[40] = e), (N[41] = t)) : (t = N[41])
              let a = t
              a?.kind === "page" && new URL(e).searchParams.get("account_id") === U && (A = a.id)
            }
            ;((N[35] = U), (N[36] = V?.handoff?.target?.uri), (N[37] = z), (N[38] = $?.pageId), (N[39] = A))
          } else A = N[39]
          N[42] !== A ? ((P = A ? { kind: "page", id: A } : null), (N[42] = A), (N[43] = P)) : (P = N[43])
          let Z = (0, r._U)(f.TR, P)
          if (A) {
            let e
            if (
              (N[44] !== V?.title || N[45] !== Z || N[46] !== $?.title
                ? ((e = Z?.trim() || V?.title?.trim() || $?.title || null),
                  (N[44] = V?.title),
                  (N[45] = Z),
                  (N[46] = $?.title),
                  (N[47] = e))
                : (e = N[47]),
              (C = e),
              z && U)
            ) {
              let e
              ;(N[48] !== U || N[49] !== B || N[50] !== A || N[51] !== F
                ? ((e = (e) => {
                    ;(0, p.openPageArtifactTarget)(F, (0, p.$)(U, A), e, { openSource: B })
                  }),
                  (N[48] = U),
                  (N[49] = B),
                  (N[50] = A),
                  (N[51] = F),
                  (N[52] = e))
                : (e = N[52]),
                (_ = e))
            }
          } else {
            let e
            if (
              (N[53] !== V?.title || N[54] !== $?.title
                ? ((e = V?.title?.trim() || $?.title || null), (N[53] = V?.title), (N[54] = $?.title), (N[55] = e))
                : (e = N[55]),
              (C = e),
              $ && D && R)
            ) {
              let e
              ;(N[56] !== R || N[57] !== G || N[58] !== $ || N[59] !== F
                ? ((e = (e) => {
                    ;(0, k.p)(F, { artifactRef: $.artifactRef, hostId: G, kind: $.kind, threadId: R, title: e })
                  }),
                  (N[56] = R),
                  (N[57] = G),
                  (N[58] = $),
                  (N[59] = F),
                  (N[60] = e))
                : (e = N[60]),
                (_ = e))
            }
          }
          N[61] !== U || N[62] !== A || N[63] !== z || N[64] !== F || N[65] !== W
            ? ((T =
                A && U && z
                  ? (e) => {
                      F.get(g.spaceAccountId$) === U &&
                        F.get(o.chatGptAuthenticatedUserId$) === W &&
                        (0, m.$)(F, A, e, void 0, { prefetchPreview: !1, delayMs: 50 })
                    }
                  : void 0),
              (N[61] = U),
              (N[62] = A),
              (N[63] = z),
              (N[64] = F),
              (N[65] = W),
              (N[66] = T))
            : (T = N[66])
          let Y = T
          return (
            N[67] !== D || N[68] !== _ || N[69] !== Y || N[70] !== A || N[71] !== C
              ? ((L = { title: C, pageId: A, onOpen: _, isAvailable: D, onPreload: Y }),
                (N[67] = D),
                (N[68] = _),
                (N[69] = Y),
                (N[70] = A),
                (N[71] = C),
                (N[72] = L))
              : (L = N[72]),
            L
          )
        },
      },
    )
  },
  YA2q(e, t, a) {
    var n = a("vWTU"),
      i = a("RQgn")
    let l = /^\s*$/
    function r({ decorations: e, segmentText: t, text: a }) {
      if (null == e) return [{ kind: "text", segments: t(a) }]
      let n = [],
        i = 0
      for (let l of e)
        l.index < i ||
          (l.index > i && n.push({ kind: "text", segments: t(a.slice(i, l.index)) }),
          n.push(l),
          (i = l.index + l.content.length))
      return (i < a.length && n.push({ kind: "text", segments: t(a.slice(i)) }), n)
    }
    function s(e, t) {
      if (
        (function (e) {
          for (let t = 0; t < e.length; t += 1) if (e.charCodeAt(t) > 127) return !1
          return !0
        })(e)
      ) {
        var a = e
        let t = [],
          n = 0
        for (; n < a.length;) {
          if (o(a, n)) {
            let e = n
            for (; o(a, n);) n += 1
            t.push(a.slice(e, n))
            continue
          }
          let e = Math.max(t.length - 1, 0)
          ;(null == t[e] && (t[e] = ""), (t[e] += a[n]), (n += 1))
        }
        return t
      }
      if (null == t) {
        let t = Array.from(e.match(/\s*\S+(?:\s+|$)/g) ?? [])
        return t.length > 0 || 0 === e.length ? t : [e]
      }
      let n = []
      for (let { segment: a, isWordLike: i } of t.segment(e)) {
        if (l.test(a) || !i) {
          let e = Math.max(n.length - 1, 0)
          ;(null == n[e] && (n[e] = ""), (n[e] += a))
          continue
        }
        n.push(a)
      }
      return n
    }
    function o(e, t) {
      if (t >= e.length) return !1
      let a = e.charCodeAt(t)
      return (a >= 48 && a <= 57) || (a >= 65 && a <= 90) || (a >= 97 && a <= 122)
    }
    a.d(
      t,
      {},
      {
        Ef: function ({ decorateText: e = !0, segmenter: t, text: a }) {
          let l = (0, i.C)(a)
          return r({ decorations: e ? (0, n.I)(l) : null, segmentText: (e) => s(e, t), text: l })
        },
        SN: r,
        gk: s,
      },
    )
  },
  z7RK(e, t, a) {
    var n = a("ABep"),
      i = a("kfGJ"),
      l = a("vWTU"),
      r = a("CH2b"),
      s = a("YA2q"),
      o = a("RQgn"),
      d = a("FJP4"),
      c = a("Lydu")
    a.d(
      t,
      {},
      {
        Y: function ({
          conversationId: e,
          cwd: t,
          decorateText: a = !0,
          fadeSegmentDelayMs: u = 0,
          fadeSegmentMaxDelayMs: p,
          fadeSegmentKeys: f,
          fadeSegmentStartIndex: m = 0,
          fadeSegmentTimeline: g,
          fadeTextParts: h,
          fadeText: y = !1,
          hostId: b = i.fI,
          keyPrefix: x,
          onFileLinkOpen: v,
          openFileLinksInSidePanel: k = !1,
          segmenter: I = null,
          text: w,
        }) {
          let j = (0, o.C)(w),
            S = null == h && a ? (0, l.I)(j) : null
          if (!y && null == h && null == S) return j
          let M = h ?? (0, s.SN)({ decorations: S, segmentText: (e) => (y ? (0, s.gk)(e, I) : [e]), text: j })
          return y || 1 !== M.length || M[0]?.kind !== "text" || M[0].segments[0] !== j
            ? (function ({
                conversationId: e,
                cwd: t,
                fadeSegmentDelayMs: a,
                fadeSegmentMaxDelayMs: i,
                fadeSegmentKeys: l,
                fadeSegmentStartIndex: s,
                fadeSegmentTimeline: o,
                fadeText: u,
                hostId: p,
                keyPrefix: f,
                onFileLinkOpen: m,
                openFileLinksInSidePanel: g,
                parts: h,
              }) {
                let y = [],
                  b = 0,
                  x = s
                for (let s of h) {
                  if ("text" === s.kind) {
                    ;(y.push(
                      ...(function ({
                        fadeSegmentDelayMs: e,
                        fadeSegmentMaxDelayMs: t,
                        fadeText: a,
                        fadeSegmentStartIndex: i,
                        fadeSegmentTimeline: l,
                        keys: s,
                        segments: o,
                      }) {
                        return a
                          ? o.map((a, o) => {
                              let d = i + o
                              return (0, n.jsx)(
                                "span",
                                {
                                  ...(0, r._)({
                                    className: c.A.FadeIn,
                                    fadeSegmentDelayMs: e,
                                    fadeSegmentMaxDelayMs: t,
                                    segmentIndex: d,
                                    segmentKey: s?.[o],
                                    timeline: l,
                                  }),
                                  children: a,
                                },
                                s?.[o] ?? `fade-${d}`,
                              )
                            })
                          : o
                      })({
                        fadeText: u,
                        fadeSegmentDelayMs: a,
                        fadeSegmentMaxDelayMs: i,
                        fadeSegmentStartIndex: x,
                        fadeSegmentTimeline: o,
                        keys: l?.slice(b, b + s.segments.length),
                        segments: s.segments,
                      }),
                    ),
                      (b += s.segments.length),
                      (x += s.segments.length))
                    continue
                  }
                  let h = s.render({
                    content: s.content,
                    key: u ? void 0 : `${f}-decoration-${s.index}`,
                    renderInlineCode: (a, n) =>
                      (0, d.p)({
                        conversationId: e,
                        content: a,
                        cwd: t ?? null,
                        hostId: p,
                        key: n,
                        onFileLinkOpen: m,
                        openFileLinksInSidePanel: g,
                        precedingText: "",
                      }),
                  })
                  if (!u) {
                    ;(y.push(h), (x += 1))
                    continue
                  }
                  ;(y.push(
                    (0, n.jsx)(
                      "span",
                      {
                        ...(0, r._)({
                          className: c.A.FadeIn,
                          fadeSegmentDelayMs: a,
                          fadeSegmentMaxDelayMs: i,
                          segmentIndex: x,
                          segmentKey: l?.[b],
                          timeline: o,
                        }),
                        children: h,
                      },
                      l?.[b] ?? `fade-${x}`,
                    ),
                  ),
                    (b += 1),
                    (x += 1))
                }
                return y
              })({
                conversationId: e,
                cwd: t,
                fadeSegmentDelayMs: u,
                fadeSegmentMaxDelayMs: p,
                fadeSegmentKeys: f,
                fadeSegmentStartIndex: m,
                fadeSegmentTimeline: g,
                fadeText: y,
                hostId: b,
                keyPrefix: x,
                onFileLinkOpen: v,
                openFileLinksInSidePanel: k,
                parts: M,
              })
            : j
        },
      },
    )
  },
  oSoj(e, t, a) {
    var n = a("ABep"),
      i = a("TH8s"),
      l = a("soyF"),
      r = a("ZObU"),
      s = a("kfGJ")
    a.d(
      t,
      {},
      {
        A: function ({ cwd: e, hostId: t = s.fI, openFileLinksInSidePanel: a = !1, shouldRenderPath: o }) {
          return {
            [l.pS]({ attributes: l, conversationId: s, hostId: d = t, linkComponent: c = "a" }) {
              let u = (0, i.oy)(l)
              if (null == u) return null
              let { path: p, target: f } = u
              return "google-drive" === f.type || "external" === f.type
                ? (0, n.jsx)(c, { href: f.url, children: u.label ?? f.url })
                : "file" === f.type && "source" !== u.purpose && null != p && o?.(p) === !1
                  ? null
                  : (0, n.jsx)(r.u, { citation: u, conversationId: s, cwd: e ?? null, hostId: d, openInSidePanel: a })
            },
          }
        },
      },
    )
  },
  vTw3(e, t, a) {
    var n = a("CZAr")
    function i() {
      return null
    }
    a.d(
      t,
      {},
      {
        y: function () {
          return {
            [n.GZ]: i,
            [n.vd]: i,
            [n.de]: i,
            [n.q9]: i,
            [n.sD]: i,
            [n.I_]: i,
            [n.Dw]: i,
            [n.h5]: i,
            [n.w9]: i,
            [n.vB]: i,
            [n.MK]: i,
            [n.Gw]: i,
          }
        },
      },
    )
  },
  ZObU(e, t, a) {
    a.d(t, { u: () => u, b: () => p })
    var n = a("ABep"),
      i = a("QosV"),
      l = a("Wf1j"),
      r = a("LMkT")
    let s = new Map([
        [".env", "code"],
        [".env.example", "code"],
        [".env.local", "code"],
        [".gitignore", "code"],
        [".npmrc", "code"],
        [".prettierignore", "code"],
        [".prettierrc", "json"],
        ["cargo.lock", "rust"],
        ["cargo.toml", "rust"],
        ["changelog", "document"],
        ["dockerfile", "code"],
        ["license", "document"],
        ["license.md", "document"],
        ["makefile", "code"],
        ["package-lock.json", "json"],
        ["package.json", "json"],
        ["readme", "document"],
        ["readme.md", "document"],
        ["requirements.txt", "python"],
        ["tsconfig.json", "json"],
        ["yarn.lock", "json"],
      ]),
      o = new Map([
        ["adoc", "document"],
        ["asciidoc", "document"],
        ["avif", "image"],
        ["bash", "code"],
        ["bmp", "image"],
        ["c", "c-plus"],
        ["cc", "c-plus"],
        ["cfg", "code"],
        ["conf", "code"],
        ["cpp", "c-plus"],
        ["csv", "spreadsheet"],
        ["css", "code"],
        ["cxx", "c-plus"],
        ["doc", "document"],
        ["docx", "document"],
        ["gif", "image"],
        ["go", "code"],
        ["h", "c-plus"],
        ["har", "json"],
        ["heic", "image"],
        ["heif", "image"],
        ["hh", "c-plus"],
        ["hpp", "c-plus"],
        ["htm", "html"],
        ["html", "html"],
        ["hxx", "c-plus"],
        ["ico", "image"],
        ["ini", "code"],
        ["ipynb", "notebook"],
        ["java", "java"],
        ["jpeg", "image"],
        ["jpg", "image"],
        ["js", "javascript"],
        ["json", "json"],
        ["json5", "json"],
        ["jsonl", "json"],
        ["jsx", "react"],
        ["key", "presentation"],
        ["less", "code"],
        ["lock", "json"],
        ["log", "document"],
        ["m", "c-plus"],
        ["markdown", "document"],
        ["md", "document"],
        ["mdx", "document"],
        ["mjs", "javascript"],
        ["mts", "typescript"],
        ["numbers", "spreadsheet"],
        ["ods", "spreadsheet"],
        ["odt", "document"],
        ["odp", "presentation"],
        ["pages", "document"],
        ["parquet", "spreadsheet"],
        ["pdf", "document"],
        ["php", "php"],
        ["phtml", "php"],
        ["png", "image"],
        ["ppt", "presentation"],
        ["pptx", "presentation"],
        ["ps1", "code"],
        ["psd", "image"],
        ["py", "python"],
        ["pyi", "python"],
        ["rb", "code"],
        ["rs", "rust"],
        ["rst", "document"],
        ["rtf", "document"],
        ["sass", "code"],
        ["scss", "code"],
        ["sh", "code"],
        ["sql", "code"],
        ["svg", "image"],
        ["tex", "document"],
        ["tif", "image"],
        ["tiff", "image"],
        ["toml", "code"],
        ["ts", "typescript"],
        ["tsv", "spreadsheet"],
        ["tsx", "react"],
        ["txt", "document"],
        ["vue", "react"],
        ["webmanifest", "json"],
        ["webp", "image"],
        ["xls", "spreadsheet"],
        ["xlsx", "spreadsheet"],
        ["xhtml", "html"],
        ["xml", "code"],
        ["yaml", "code"],
        ["yml", "code"],
        ["zsh", "code"],
      ])
    var d = a("HFg1"),
      c = a("S1CS")
    function u(e) {
      let t,
        a,
        s,
        o,
        u,
        p,
        g,
        h,
        y = (0, i.c)(39),
        { citation: b, conversationId: x, cwd: v, hostId: k, openInSidePanel: I } = e,
        w = void 0 !== I && I,
        j = (0, l.A)(),
        { path: S, target: M, artifactCitation: A, lineRangeStart: P, lineRangeEnd: C } = b,
        _ = "artifact-session" === M.type ? M : null
      y[0] !== x || y[1] !== k || y[2] !== _
        ? ((t = { openSource: "page_link", resource: _, conversationId: x, hostId: k }),
          (y[0] = x),
          (y[1] = k),
          (y[2] = _),
          (y[3] = t))
        : (t = y[3])
      let { title: T, onOpen: L } = (0, r.a)(t)
      y[4] !== A || y[5] !== j || y[6] !== C || y[7] !== P || y[8] !== S || y[9] !== _ || y[10] !== T
        ? ((s = m(P)),
          (a = m(C)),
          (o = _
            ? { ariaLabel: T ?? _.artifactRef, displayLabel: T ?? _.artifactRef }
            : f({ artifactCitation: A, endLine: a, intl: j, line: s, path: S })),
          (y[4] = A),
          (y[5] = j),
          (y[6] = C),
          (y[7] = P),
          (y[8] = S),
          (y[9] = _),
          (y[10] = T),
          (y[11] = a),
          (y[12] = s),
          (y[13] = o))
        : ((a = y[11]), (s = y[12]), (o = y[13]))
      let { ariaLabel: N, displayLabel: B } = o
      if (_ && !L) {
        let e
        return (y[14] !== B ? ((e = (0, n.jsx)("span", { children: B })), (y[14] = B), (y[15] = e)) : (e = y[15]), e)
      }
      if (_) {
        let e,
          t = d.Q[_.kind][20],
          a = "presentation" === _.kind ? "text-orange" : "text-green"
        ;(y[16] !== t || y[17] !== a
          ? ((e = (0, n.jsx)(t, { className: a })), (y[16] = t), (y[17] = a), (y[18] = e))
          : (e = y[18]),
          (u = e))
      }
      y[19] !== a || y[20] !== s || y[21] !== S
        ? ((p = { path: S, line: s, endLine: a }), (y[19] = a), (y[20] = s), (y[21] = S), (y[22] = p))
        : (p = y[22])
      let $ = A?.target,
        R = _ ? B : S,
        G = !_
      return (
        y[23] !== B || y[24] !== L
          ? ((g = L ? () => L(B) : void 0), (y[23] = B), (y[24] = L), (y[25] = g))
          : (g = y[25]),
        y[26] !== N ||
        y[27] !== x ||
        y[28] !== v ||
        y[29] !== B ||
        y[30] !== k ||
        y[31] !== u ||
        y[32] !== w ||
        y[33] !== p ||
        y[34] !== $ ||
        y[35] !== R ||
        y[36] !== G ||
        y[37] !== g
          ? ((h = (0, n.jsx)(c.Bh, {
              reference: p,
              artifactNavigationTarget: $,
              ariaLabel: N,
              icon: u,
              label: B,
              tooltipText: R,
              conversationId: x,
              cwd: v,
              hostId: k,
              isPreview: !1,
              enableWorkspaceFileActions: G,
              onOpen: g,
              openInSidePanel: w,
            })),
            (y[26] = N),
            (y[27] = x),
            (y[28] = v),
            (y[29] = B),
            (y[30] = k),
            (y[31] = u),
            (y[32] = w),
            (y[33] = p),
            (y[34] = $),
            (y[35] = R),
            (y[36] = G),
            (y[37] = g),
            (y[38] = h))
          : (h = y[38]),
        h
      )
    }
    function p({ artifactCitation: e, intl: t, lineRangeEnd: a, lineRangeStart: n, path: i }) {
      return f({ artifactCitation: e, endLine: m(a), intl: t, line: m(n), path: i }).ariaLabel
    }
    function f({ artifactCitation: e, endLine: t, intl: a, line: n, path: i }) {
      var l, r, d, c, u, p
      let m,
        g = (l = i).split(/[\\/]/).pop() ?? l,
        h = (m = (r = g).lastIndexOf(".")) <= 0 || m === r.length - 1 ? "" : r.slice(m),
        y = (function (e) {
          var t
          let a,
            n = e.split(/[\\/]/).pop()?.toLowerCase() ?? "",
            i = s.get(n)
          if (null != i) return i
          let l = (a = (t = n).lastIndexOf(".")) <= 0 ? "" : t.slice(a + 1)
          return 0 === l.length ? "file" : (o.get(l) ?? "file")
        })(i),
        b =
          0 === h.length
            ? (function (e, t) {
                switch (e) {
                  case "c-plus":
                  case "code":
                  case "html":
                  case "java":
                  case "javascript":
                  case "json":
                  case "notebook":
                  case "php":
                  case "python":
                  case "react":
                  case "rust":
                  case "typescript":
                    return t.formatMessage({
                      id: "markdown.fileCitation.artifactType.code",
                      defaultMessage: "Code",
                      description: "Fallback file type label for a code file citation with no extension",
                    })
                  case "document":
                    return t.formatMessage({
                      id: "markdown.fileCitation.artifactType.document",
                      defaultMessage: "Document",
                      description: "Fallback file type label for a document file citation with no extension",
                    })
                  case "file":
                    return t.formatMessage({
                      id: "markdown.fileCitation.artifactType.file",
                      defaultMessage: "File",
                      description: "Fallback file type label for a file citation with no extension",
                    })
                  case "image":
                    return t.formatMessage({
                      id: "markdown.fileCitation.artifactType.image",
                      defaultMessage: "Image",
                      description: "Fallback file type label for an image file citation with no extension",
                    })
                  case "presentation":
                    return t.formatMessage({
                      id: "markdown.fileCitation.artifactType.presentation",
                      defaultMessage: "Presentation",
                      description: "Fallback file type label for a presentation file citation with no extension",
                    })
                  case "spreadsheet":
                    return t.formatMessage({
                      id: "markdown.fileCitation.artifactType.spreadsheet",
                      defaultMessage: "Spreadsheet",
                      description: "Fallback file type label for a spreadsheet file citation with no extension",
                    })
                }
              })(y, a)
            : null,
        x =
          ((d = a),
          (c = n),
          (u = t),
          (p = (function (e) {
            switch (e) {
              case "c-plus":
              case "code":
              case "html":
              case "java":
              case "javascript":
              case "json":
              case "notebook":
              case "php":
              case "python":
              case "react":
              case "rust":
              case "typescript":
                return !0
              case "document":
              case "file":
              case "image":
              case "presentation":
              case "spreadsheet":
                return !1
            }
          })(y)),
          null == c
            ? null
            : null != u && u !== c
              ? d.formatMessage(
                  {
                    id: "markdown.fileCitation.linesLabel",
                    defaultMessage: "lines {line}-{endLine}",
                    description: "Line range label shown inside a file citation chip",
                  },
                  { endLine: u, line: c },
                )
              : p || 1 !== c
                ? d.formatMessage(
                    {
                      id: "markdown.fileCitation.lineLabel",
                      defaultMessage: "line {line}",
                      description: "Single line label shown inside a file citation chip",
                    },
                    { line: c },
                  )
                : null),
        v =
          (function (e, t, a) {
            var n, i, l, r, s, o
            if (null == t) return null
            switch (t.artifactKind) {
              case "presentation":
                let d
                return (
                  (n = e),
                  (i = t),
                  (l = a),
                  (d =
                    null == i.slideNumber
                      ? null
                      : l.formatMessage(
                          {
                            id: "markdown.fileCitation.presentationSlideNumberLabel",
                            defaultMessage: "slide {slideNumber}",
                            description: "Location label for a presentation file citation targeting a slide number",
                          },
                          { slideNumber: i.slideNumber },
                        )),
                  null == i.objectId || null == n
                    ? d
                    : null == d
                      ? n
                      : l.formatMessage(
                          {
                            id: "markdown.fileCitation.presentationObjectLabel",
                            defaultMessage: "{slideLabel}, {label}",
                            description:
                              "Location label for a presentation file citation targeting a labeled object on a slide",
                          },
                          { label: n, slideLabel: d },
                        )
                )
              case "workbook":
                return (
                  (r = e),
                  (s = t),
                  (o = a),
                  "objectId" in s
                    ? null == r
                      ? null
                      : o.formatMessage(
                          {
                            id: "markdown.fileCitation.workbookObjectLabel",
                            defaultMessage: "{sheet}, {label}",
                            description:
                              "Location label for a spreadsheet file citation targeting a labeled object on a sheet",
                          },
                          { label: r, sheet: s.sheet },
                        )
                    : `${s.sheet}!${s.range}`
                )
              case "document":
                return a.formatMessage(
                  {
                    id: "markdown.fileCitation.documentPageLabel",
                    defaultMessage: "page {pageNumber}",
                    description: "Location label for a document file citation targeting a page",
                  },
                  { pageNumber: t.pageNumber },
                )
            }
          })(e?.label, e?.target, a) ?? x,
        k =
          null == v
            ? null
            : a.formatMessage(
                {
                  id: "markdown.fileCitation.lineLabelDisplay",
                  defaultMessage: "({lineLabel})",
                  description: "Location label shown inside parentheses in a file citation chip",
                },
                { lineLabel: v },
              ),
        I = g
      return (
        null != b && null != k
          ? (I = a.formatMessage(
              {
                id: "markdown.fileCitation.ariaLabelWithTypeAndLine",
                defaultMessage: "{fileName}, {fileTypeLabel} {lineLabel}",
                description: "Accessible label for an extensionless file citation chip with location information",
              },
              { fileName: g, fileTypeLabel: b, lineLabel: k },
            ))
          : null != b
            ? (I = a.formatMessage(
                {
                  id: "markdown.fileCitation.ariaLabelWithType",
                  defaultMessage: "{fileName}, {fileTypeLabel}",
                  description: "Accessible label for an extensionless file citation chip",
                },
                { fileName: g, fileTypeLabel: b },
              ))
            : null != k &&
              (I = a.formatMessage(
                {
                  id: "markdown.fileCitation.ariaLabelWithLine",
                  defaultMessage: "{fileName} {lineLabel}",
                  description: "Accessible label for a file citation chip with location information",
                },
                { fileName: g, lineLabel: k },
              )),
        { ariaLabel: I, displayLabel: null == v ? g : `${g} (${v})` }
      )
    }
    function m(e) {
      if ("number" == typeof e) return Number.isFinite(e) && e > 0 ? e : void 0
      if ("string" != typeof e) return
      let t = Number.parseInt(e, 10)
      return Number.isNaN(t) || t <= 0 ? void 0 : t
    }
  },
  pPxA(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      l = a("hZax"),
      r = a("QxJi"),
      s = a("uXTt"),
      o = a("WFTG"),
      d = a("EXS8"),
      c = a("OU2K"),
      u = a("z7RK"),
      p = a("NzWk"),
      f = a("XpUB")
    function m(e) {
      return (0, n.jsx)(c.s, {
        onRetry: () => {
          ;(0, o.r)(e.error, () => e.resetError())
        },
      })
    }
    function g(e) {
      let t,
        a,
        s,
        o,
        c,
        m,
        g,
        h,
        y,
        b,
        x,
        v,
        k,
        I,
        w,
        j,
        S,
        M,
        A,
        P,
        C,
        _,
        T,
        L,
        N,
        B,
        $,
        R,
        G,
        F,
        K,
        U,
        W,
        z,
        D,
        E,
        O,
        q = (0, i.c)(96)
      q[0] !== e
        ? (({
            allowWideBlocks: M,
            children: t,
            components: a,
            conversationId: A,
            cwd: s,
            directives: o,
            extensions: c,
            externalLinkAppearance: m,
            externalResourcePolicy: P,
            forceCodeBlockWordWrap: C,
            hideCodeBlocks: h,
            getVisualizeTurnTriggerType: g,
            hostId: y,
            pluginMentionPresentation: I,
            isBrowserEnabled: _,
            mediaCacheKey: b,
            onAddSelectedTextToChat: x,
            onFileLinkOpen: v,
            openFileLinksInSidePanel: k,
            repairOrderedLists: j,
            renderCodeBlocksImmediately: T,
            renderCodeBlocksAsWritingBlocks: L,
            renderInlineVisualizations: N,
            renderMath: B,
            textStyle: $,
            turnId: R,
            savedContentResponse: S,
            visualizationSourcePathsByFile: G,
            ...w
          } = e),
          (q[0] = e),
          (q[1] = t),
          (q[2] = a),
          (q[3] = s),
          (q[4] = o),
          (q[5] = c),
          (q[6] = m),
          (q[7] = g),
          (q[8] = h),
          (q[9] = y),
          (q[10] = b),
          (q[11] = x),
          (q[12] = v),
          (q[13] = k),
          (q[14] = I),
          (q[15] = w),
          (q[16] = j),
          (q[17] = S),
          (q[18] = M),
          (q[19] = A),
          (q[20] = P),
          (q[21] = C),
          (q[22] = _),
          (q[23] = T),
          (q[24] = L),
          (q[25] = N),
          (q[26] = B),
          (q[27] = $),
          (q[28] = R),
          (q[29] = G))
        : ((t = q[1]),
          (a = q[2]),
          (s = q[3]),
          (o = q[4]),
          (c = q[5]),
          (m = q[6]),
          (g = q[7]),
          (h = q[8]),
          (y = q[9]),
          (b = q[10]),
          (x = q[11]),
          (v = q[12]),
          (k = q[13]),
          (I = q[14]),
          (w = q[15]),
          (j = q[16]),
          (S = q[17]),
          (M = q[18]),
          (A = q[19]),
          (P = q[20]),
          (C = q[21]),
          (_ = q[22]),
          (T = q[23]),
          (L = q[24]),
          (N = q[25]),
          (B = q[26]),
          ($ = q[27]),
          (R = q[28]),
          (G = q[29]))
      let H = void 0 !== M && M,
        Q = void 0 === A ? null : A,
        V = void 0 === P ? "allow" : P,
        Z = void 0 !== C && C,
        Y = void 0 !== _ && _,
        J = void 0 !== T && T,
        X = void 0 !== L && L,
        ee = void 0 !== N && N,
        et = void 0 === B || B,
        ea = (0, l.Zj)("2957382457")
      if (q[30] !== t || q[31] !== ea || q[32] !== c || q[33] !== ee || q[34] !== et || q[35] !== j) {
        let e = (0, p.x1)(t, ea, ee)
        ;((F = (0, f.o)(e, c, { repairOrderedLists: j, renderMath: et })),
          (q[30] = t),
          (q[31] = ea),
          (q[32] = c),
          (q[33] = ee),
          (q[34] = et),
          (q[35] = j),
          (q[36] = F))
      } else F = q[36]
      let en = F
      ;(q[37] !== Q ||
      q[38] !== s ||
      q[39] !== ea ||
      q[40] !== g ||
      q[41] !== y ||
      q[42] !== b ||
      q[43] !== k ||
      q[44] !== ee ||
      q[45] !== R ||
      q[46] !== G
        ? ((K = (0, p.sh)({
            conversationId: Q,
            cwd: s,
            enableInlineDil: ea,
            getVisualizeTurnTriggerType: g,
            hostId: y,
            mediaCacheKey: b,
            openFileLinksInSidePanel: k,
            renderInlineVisualizations: ee,
            turnId: R,
            visualizationSourcePathsByFile: G,
          })),
          (q[37] = Q),
          (q[38] = s),
          (q[39] = ea),
          (q[40] = g),
          (q[41] = y),
          (q[42] = b),
          (q[43] = k),
          (q[44] = ee),
          (q[45] = R),
          (q[46] = G),
          (q[47] = K))
        : (K = q[47]),
        q[48] !== o || q[49] !== K ? ((U = { ...K, ...o }), (q[48] = o), (q[49] = K), (q[50] = U)) : (U = q[50]))
      let ei = U
      ;(q[51] !== H ||
      q[52] !== Q ||
      q[53] !== s ||
      q[54] !== m ||
      q[55] !== V ||
      q[56] !== Z ||
      q[57] !== h ||
      q[58] !== y ||
      q[59] !== Y ||
      q[60] !== x ||
      q[61] !== v ||
      q[62] !== k ||
      q[63] !== I ||
      q[64] !== X ||
      q[65] !== J ||
      q[66] !== et ||
      q[67] !== S
        ? ((W = (0, p.c8)({
            allowWideBlocks: H,
            conversationId: Q,
            cwd: s,
            externalLinkAppearance: m,
            externalResourcePolicy: V,
            forceCodeBlockWordWrap: Z,
            hideCodeBlocks: h,
            hostId: y,
            pluginMentionPresentation: I,
            isBrowserEnabled: Y,
            onAddSelectedTextToChat: x,
            onFileLinkOpen: v,
            openFileLinksInSidePanel: k,
            renderCodeBlocksImmediately: J,
            renderCodeBlocksAsWritingBlocks: X,
            renderMath: et,
            savedContentResponse: S,
          })),
          (q[51] = H),
          (q[52] = Q),
          (q[53] = s),
          (q[54] = m),
          (q[55] = V),
          (q[56] = Z),
          (q[57] = h),
          (q[58] = y),
          (q[59] = Y),
          (q[60] = x),
          (q[61] = v),
          (q[62] = k),
          (q[63] = I),
          (q[64] = X),
          (q[65] = J),
          (q[66] = et),
          (q[67] = S),
          (q[68] = W))
        : (W = q[68]),
        q[69] !== a || q[70] !== W ? ((z = { ...W, ...a }), (q[69] = a), (q[70] = W), (q[71] = z)) : (z = q[71]))
      let el = z
      ;(q[72] !== Q || q[73] !== s || q[74] !== y || q[75] !== v || q[76] !== k || q[77] !== $?.tone
        ? ((D = () => (e, t, a, i) => {
            let l = (0, u.Y)({
              conversationId: Q,
              cwd: s,
              decorateText: i,
              hostId: y,
              keyPrefix: t,
              onFileLinkOpen: v,
              openFileLinksInSidePanel: k ?? !1,
              text: e,
            })
            return $?.tone === "user-message" ? (0, n.jsx)(r.k, { children: l }, t) : l
          }),
          (q[72] = Q),
          (q[73] = s),
          (q[74] = y),
          (q[75] = v),
          (q[76] = k),
          (q[77] = $?.tone),
          (q[78] = D))
        : (D = q[78]),
        $?.tone,
        q[79] !== D ? ((E = D()), (q[79] = D), (q[80] = E)) : (E = q[80]))
      let er = E
      return (
        q[81] !== H ||
        q[82] !== Q ||
        q[83] !== s ||
        q[84] !== V ||
        q[85] !== Z ||
        q[86] !== h ||
        q[87] !== y ||
        q[88] !== el ||
        q[89] !== ei ||
        q[90] !== b ||
        q[91] !== w ||
        q[92] !== er ||
        q[93] !== $ ||
        q[94] !== en
          ? ((O = (0, n.jsx)(d.T, {
              ...w,
              allowWideBlocks: H,
              components: el,
              conversationId: Q,
              cwd: s,
              directives: ei,
              externalResourcePolicy: V,
              forceCodeBlockWordWrap: Z,
              hideCodeBlocks: h,
              hostId: y,
              mediaCacheKey: b,
              renderText: er,
              textStyle: $,
              tokens: en,
            })),
            (q[81] = H),
            (q[82] = Q),
            (q[83] = s),
            (q[84] = V),
            (q[85] = Z),
            (q[86] = h),
            (q[87] = y),
            (q[88] = el),
            (q[89] = ei),
            (q[90] = b),
            (q[91] = w),
            (q[92] = er),
            (q[93] = $),
            (q[94] = en),
            (q[95] = O))
          : (O = q[95]),
        O
      )
    }
    a.d(
      t,
      {},
      {
        o: function (e) {
          let t,
            a,
            l = (0, i.c)(5)
          return (
            l[0] !== e ? ((t = (0, n.jsx)(g, { ...e })), (l[0] = e), (l[1] = t)) : (t = l[1]),
            l[2] !== e.children || l[3] !== t
              ? ((a = (0, n.jsx)(s.t, { name: "Markdown", resetKey: e.children, fallback: m, children: t })),
                (l[2] = e.children),
                (l[3] = t),
                (l[4] = a))
              : (a = l[4]),
            a
          )
        },
      },
    )
  },
  NzWk(e, t, a) {
    a.d(t, { c8: () => el, sh: () => ei, x1: () => er })
    var n = a("zd8w"),
      i = a("CZAr"),
      l = a("geXJ"),
      r = a("pqpL"),
      s = a("q3n0"),
      o = a("v0rv"),
      d = a("ABep"),
      c = a("QosV"),
      u = a("Rxfy"),
      p = a("DBCl"),
      f = a("rKAs"),
      m = a("ASxG"),
      g = a("WTHg"),
      h = a("zTeN"),
      y = a("Wf1j"),
      b = a("Qgfj"),
      x = a("fOao"),
      v = a("jEN2"),
      k = a("Ot7V"),
      I = a("MI1z"),
      w = a("Oj9r"),
      j = a("kfGJ"),
      S = a("axh8"),
      M = a("hbRe"),
      A = a("bPa2"),
      P = a("bnxy"),
      C = a("rHMn"),
      _ = a("t4J7"),
      T = a("BI6E"),
      L = a("ViUV"),
      N = a("jr5g"),
      B = a("IY5Q"),
      $ = a("Jn3n")
    function R(e) {
      let t,
        a,
        i,
        l,
        r,
        s,
        o,
        u,
        p,
        f,
        m,
        b,
        R,
        K,
        W,
        z = (0, c.c)(51),
        { artifactKind: D, displayName: E, hostId: O, skillDirectory: q, skillName: H } = e,
        Q = void 0 === O ? j.fI : O,
        V = (0, h.gh)(w.GD),
        Z = (0, y.A)(),
        [Y, J] = (0, n.useState)(!1),
        [X, ee] = (0, n.useState)(!1),
        { forceReload: et, skills: ea } = (0, A.a)(void 0, Q),
        en = (0, I.y)(Q),
        { mutateAsync: ei, isPending: el } = (0, $.V)(et)
      if (
        z[0] !== D ||
        z[1] !== en ||
        z[2] !== E ||
        z[3] !== Q ||
        z[4] !== Z ||
        z[5] !== V ||
        z[6] !== q ||
        z[7] !== H ||
        z[8] !== ea
      ) {
        a = (0, P.Al)(q, "SKILL.md")
        let e = (0, C.$c)(q, D),
          n = ea.find((e) => (0, P.Fd)(e.path) === (0, P.Fd)(a)),
          o = (0, M.Gc)({ name: H, path: a }),
          d = ea.find(F),
          { url: c } = (0, S.Oe)({
            size: "large",
            iconLarge: n?.interface?.iconLarge,
            basePath: a,
            renderCustomSvgAsImage: !0,
          })
        ;((s = {
          id: `${Q}:${a}`,
          type: D,
          name: E,
          description: n?.description,
          thumbnail: c ? { uri: c, alt: "" } : void 0,
        }),
          (t = async () => {
            ;((0, v.jf)(Z.formatMessage(U[D], { template: o })), J(!1))
          }),
          (i =
            null == e
              ? void 0
              : async () => {
                  if ((J(!1), (0, _.z)(D))) {
                    let e = await (0, C.Lc)({ hostId: Q, manifestPath: (0, P.Al)(q, "artifact-template.json") })
                    if (e?.galleryKind === D && null != e.sourceUrl)
                      return void (0, k.E0)({ href: e.sourceUrl, initiator: "open_in_browser_bridge", originHostId: Q })
                  }
                  ;(0, x.openArtifactSidePanelTab)(V, e, {
                    artifactTemplateSkill: n,
                    hostId: Q,
                    isPreview: !0,
                    tabId: `artifact-template:${Q}:${e}`,
                    title: E,
                  }) || J(!0)
                }),
          (l = d
            ? () => {
                ;((0, v.jf)(
                  Z.formatMessage(T.ho.editTemplatePrompt, { template: o, templateCreator: (0, C.oo)("local") }),
                ),
                  J(!1))
              }
            : void 0),
          (r = n && (0, C.ok)(n, en) ? () => ee(!0) : void 0),
          (z[0] = D),
          (z[1] = en),
          (z[2] = E),
          (z[3] = Q),
          (z[4] = Z),
          (z[5] = V),
          (z[6] = q),
          (z[7] = H),
          (z[8] = ea),
          (z[9] = t),
          (z[10] = a),
          (z[11] = i),
          (z[12] = l),
          (z[13] = r),
          (z[14] = s))
      } else ((t = z[9]), (a = z[10]), (i = z[11]), (l = z[12]), (r = z[13]), (s = z[14]))
      z[15] !== i || z[16] !== l || z[17] !== r
        ? ((o = { onView: i, onEdit: l, onDelete: r }), (z[15] = i), (z[16] = l), (z[17] = r), (z[18] = o))
        : (o = z[18])
      let er = o
      return (
        z[19] === Symbol.for("react.memo_cache_sentinel") ? ((u = () => J(!0)), (z[19] = u)) : (u = z[19]),
        z[20] !== t ? ((p = { kind: "use", onSelect: t }), (z[20] = t), (z[21] = p)) : (p = z[21]),
        z[22] !== er || z[23] !== el || z[24] !== p || z[25] !== s
          ? ((f = (0, d.jsx)(g.g7, {
              menuModal: !1,
              template: s,
              disabled: el,
              onOpen: u,
              primaryAction: p,
              menu: er,
            })),
            (z[22] = er),
            (z[23] = el),
            (z[24] = p),
            (z[25] = s),
            (z[26] = f))
          : (f = z[26]),
        z[27] !== t || z[28] !== Q || z[29] !== er || z[30] !== el || z[31] !== a || z[32] !== s
          ? ((m = (0, d.jsx)(N.FQ, { template: s, path: a, hostId: Q, onUse: t, callbacks: er, disabled: el })),
            (z[27] = t),
            (z[28] = Q),
            (z[29] = er),
            (z[30] = el),
            (z[31] = a),
            (z[32] = s),
            (z[33] = m))
          : (m = z[33]),
        z[34] !== Y || z[35] !== E || z[36] !== m
          ? ((b = (0, d.jsx)(N.Wn, { open: Y, onOpenChange: J, title: E, children: m })),
            (z[34] = Y),
            (z[35] = E),
            (z[36] = m),
            (z[37] = b))
          : (b = z[37]),
        z[38] !== Q || z[39] !== ei || z[40] !== a
          ? ((R = () => {
              ei({ hostId: Q, skillPath: a }).then((e) => {
                let { success: t } = e
                t && (ee(!1), J(!1))
              }, G)
            }),
            (z[38] = Q),
            (z[39] = ei),
            (z[40] = a),
            (z[41] = R))
          : (R = z[41]),
        z[42] !== X || z[43] !== E || z[44] !== el || z[45] !== R
          ? ((K = (0, d.jsx)(L.b, { open: X, onOpenChange: ee, title: E, deleteDisabled: el, onConfirm: R })),
            (z[42] = X),
            (z[43] = E),
            (z[44] = el),
            (z[45] = R),
            (z[46] = K))
          : (K = z[46]),
        z[47] !== b || z[48] !== K || z[49] !== f
          ? ((W = (0, d.jsxs)(B.u, { children: [f, b, K] })), (z[47] = b), (z[48] = K), (z[49] = f), (z[50] = W))
          : (W = z[50]),
        W
      )
    }
    function G() {}
    function F(e) {
      return e.enabled && ("template-creator" === e.name || e.name.endsWith(":template-creator"))
    }
    let K = (0, b.YK)({
        useDocumentPrompt: {
          id: "artifactTemplate.resultCard.useDocumentPrompt",
          defaultMessage: "Create a document using this {template} about…",
          description: "Composer prompt appended when using a newly created document template",
        },
        usePresentationPrompt: {
          id: "artifactTemplate.resultCard.usePresentationPrompt",
          defaultMessage: "Create a presentation using the {template} template about…",
          description: "Composer prompt appended when using a newly created presentation template",
        },
        useSpreadsheetPrompt: {
          id: "artifactTemplate.resultCard.useSpreadsheetPrompt",
          defaultMessage: "Create a spreadsheet using this {template} about…",
          description: "Composer prompt appended when using a newly created spreadsheet template",
        },
        useSitePrompt: {
          id: "artifactTemplate.resultCard.useSitePrompt",
          defaultMessage: "Create a Site using this {template} about…",
          description: "Composer prompt appended when using a newly created Site template",
        },
        useGoogleDocPrompt: {
          id: "artifactTemplate.resultCard.useGoogleDocPrompt",
          defaultMessage: "Create a Google Doc using this {template} about…",
          description: "Composer prompt appended when using a newly created Google Doc template",
        },
        useGoogleSlidesPrompt: {
          id: "artifactTemplate.resultCard.useGoogleSlidesPrompt",
          defaultMessage: "Create a Google Slides presentation using this {template} about…",
          description: "Composer prompt appended when using a newly created Google Slides template",
        },
        useGoogleSheetPrompt: {
          id: "artifactTemplate.resultCard.useGoogleSheetPrompt",
          defaultMessage: "Create a Google Sheet using this {template} about…",
          description: "Composer prompt appended when using a newly created Google Sheet template",
        },
      }),
      U = {
        document: K.useDocumentPrompt,
        presentation: K.usePresentationPrompt,
        spreadsheet: K.useSpreadsheetPrompt,
        site: K.useSitePrompt,
        "google-docs": K.useGoogleDocPrompt,
        "google-slides": K.useGoogleSlidesPrompt,
        "google-sheets": K.useGoogleSheetPrompt,
      }
    var W = a("TUMj")
    let z = (0, a("Bbed")._)(async () => {
        let { ChatGptFileReference: e } = await Promise.all([
          a.e(82267),
          a.e(104742),
          a.e(788421),
          a.e(904817),
          a.e(991910),
          a.e(261229),
          a.e(399841),
        ]).then(a.bind(a, "GnI8"))
        return e
      }),
      D = m.object({
        artifact_kind: m.enum(u.$h),
        display_name: m.string().trim().min(1),
        skill_directory: m.string().refine(p.cxl),
        skill_name: m.string().startsWith("artifact-template-"),
      })
    function E(e) {
      let t,
        a,
        n = (0, c.c)(16),
        { attributes: i, hostId: l } = e,
        r = (0, W.Rn)(),
        s = i.archive_link
      if (r && "string" == typeof s) {
        let e, t
        if (n[0] !== s || n[1] !== r.contentReferences) {
          let t
          ;(n[3] !== s
            ? ((t = (e, t) =>
                "file" === e.type && (e.matched_text === s || s.startsWith(`:${f.AX}{index="${String(t)}"}`))),
              (n[3] = s),
              (n[4] = t))
            : (t = n[4]),
            (e = r.contentReferences.findIndex(t)),
            (n[0] = s),
            (n[1] = r.contentReferences),
            (n[2] = e))
        } else e = n[2]
        let a = e,
          i = r.contentReferences[a]
        return i
          ? (n[5] !== a || n[6] !== i
              ? ((t = (0, d.jsx)(z, { contentReferenceIndex: a, presentation: "template", reference: i })),
                (n[5] = a),
                (n[6] = i),
                (n[7] = t))
              : (t = n[7]),
            t)
          : null
      }
      n[8] !== i ? ((t = D.safeParse(i)), (n[8] = i), (n[9] = t)) : (t = n[9])
      let o = t
      return o.success
        ? (n[10] !== l ||
          n[11] !== o.data.artifact_kind ||
          n[12] !== o.data.display_name ||
          n[13] !== o.data.skill_directory ||
          n[14] !== o.data.skill_name
            ? ((a = (0, d.jsx)(R, {
                artifactKind: o.data.artifact_kind,
                displayName: o.data.display_name,
                hostId: l,
                skillDirectory: o.data.skill_directory,
                skillName: o.data.skill_name,
              })),
              (n[10] = l),
              (n[11] = o.data.artifact_kind),
              (n[12] = o.data.display_name),
              (n[13] = o.data.skill_directory),
              (n[14] = o.data.skill_name),
              (n[15] = a))
            : (a = n[15]),
          a)
        : null
    }
    var O = a("OXGn"),
      q = a("oSoj"),
      H = a("GlUR"),
      Q = a("NkEl"),
      V = a("UxN3"),
      Z = a("MBM1"),
      Y = a("c3f5"),
      J = a("vTw3"),
      X = a("on57"),
      ee = a("oyxz"),
      et = a("HZfM"),
      ea = a("ygO2")
    function en(e) {
      let t,
        a,
        n,
        i,
        l,
        r,
        s,
        o = (0, c.c)(13),
        { title: u, prompt: p } = e,
        f = (0, et.Zp)()
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, d.jsx)("span", {
              className: "text-sm text-tertiary",
              children: (0, d.jsx)(ee.A, {
                id: "wham.whamProposedTask.title",
                defaultMessage: "Suggested task",
                description: "Label for a card that suggests a follow up Codex task",
              }),
            })),
            (a = (0, X.A)("text-sm font-medium")),
            (o[0] = t),
            (o[1] = a))
          : ((t = o[0]), (a = o[1])),
        o[2] !== u
          ? ((n = (0, d.jsxs)("div", {
              className: "flex flex-1 flex-col",
              children: [t, (0, d.jsx)("span", { className: a, children: u })],
            })),
            (o[2] = u),
            (o[3] = n))
          : (n = o[3]),
        o[4] !== f || o[5] !== p
          ? ((i = () => {
              f("/", { state: { prefillPrompt: p } })
            }),
            (o[4] = f),
            (o[5] = p),
            (o[6] = i))
          : (i = o[6]),
        o[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, d.jsx)(ee.A, {
              id: "wham.whamProposedTask.useSuggestion",
              defaultMessage: "Use suggestion",
              description: "Button to open the Composer with a prefilled prompt from a suggestion",
            })),
            (o[7] = l))
          : (l = o[7]),
        o[8] !== i
          ? ((r = (0, d.jsx)("div", {
              className: "flex items-center gap-2 text-sm",
              children: (0, d.jsx)(ea.$, { color: "outline", onClick: i, children: l }),
            })),
            (o[8] = i),
            (o[9] = r))
          : (r = o[9]),
        o[10] !== n || o[11] !== r
          ? ((s = (0, d.jsxs)("div", {
              className:
                "mt-1 mb-3 flex w-full items-center rounded-xl border border-primary-outline bg-surface-secondary px-3 py-3",
              children: [n, r],
            })),
            (o[10] = n),
            (o[11] = r),
            (o[12] = s))
          : (s = o[12]),
        s
      )
    }
    function ei({
      conversationId: e,
      cwd: t,
      enableInlineDil: a,
      getVisualizeTurnTriggerType: o,
      hostId: c,
      mediaCacheKey: u,
      openFileLinksInSidePanel: p,
      renderInlineVisualizations: f,
      turnId: m,
      visualizationSourcePathsByFile: g,
    }) {
      return {
        [i.cu]: (e) => (0, n.createElement)(E, { ...e, hostId: c }),
        ...(0, q.A)({ cwd: t, hostId: c, openFileLinksInSidePanel: p }),
        ...{
          [i.Vr]: ({ attributes: e, rawText: t }) =>
            (0, d.jsx)(en, { title: (0, Y.B)(e, "title") ?? "", prompt: t ?? "" }),
        },
        [r.DE]: l.Z,
        ...{
          [i.dY]: ({ attributes: e, children: t }) =>
            (0, d.jsxs)("details", {
              ref: (e) => {
                if (null != e)
                  return (0, Q.y)(e, {
                    highlight: "text",
                    reveal: () => {
                      e.open = !0
                    },
                  })
              },
              className: "group my-3 rounded-xl border border-border/30 bg-surface-secondary/15 px-4 py-3",
              open: "true" === (0, Y.B)(e, "open"),
              children: [
                (0, d.jsxs)("summary", {
                  className:
                    "flex cursor-interaction list-none items-center gap-1.5 text-size-chat font-medium text-default marker:hidden [&::-webkit-details-marker]:hidden",
                  children: [
                    (0, d.jsx)(V.bF, {
                      className: "shrink-0 transition-transform group-open:rotate-90",
                      "aria-hidden": !1,
                      asset16: H.q,
                      legacyIcon: Z.A,
                      legacyClassName: "icon-2xs",
                    }),
                    (0, Y.B)(e, "summary"),
                  ],
                }),
                (0, d.jsx)("div", { className: "pt-2", children: t }),
              ],
            }),
        },
        ...(0, J.y)(),
        ...void 0,
        ...(f
          ? (0, s.OS)({
              cacheKey: u,
              getVisualizeTurnTriggerType: o,
              hostId: c,
              sourcePathsByFile: g,
              threadId: e ?? void 0,
              turnId: m,
            })
          : void 0),
      }
    }
    function el({
      allowWideBlocks: e,
      conversationId: t,
      cwd: a,
      externalLinkAppearance: n,
      externalResourcePolicy: i,
      forceCodeBlockWordWrap: l,
      hideCodeBlocks: r,
      hostId: s,
      pluginMentionPresentation: o,
      isBrowserEnabled: d,
      onAddSelectedTextToChat: c,
      onFileLinkOpen: u,
      openFileLinksInSidePanel: p,
      renderCodeBlocksImmediately: f,
      renderCodeBlocksAsWritingBlocks: m,
      renderMath: g,
      savedContentResponse: h,
    }) {
      return {
        a: (0, O.j$)({
          conversationId: t,
          cwd: a,
          externalLinkAppearance: n,
          externalResourcePolicy: i,
          hostId: s,
          pluginMentionPresentation: o,
          isBrowserEnabled: d,
          onFileLinkOpen: u,
          openFileLinksInSidePanel: p ?? !1,
          savedContentResponse: h,
        }),
        code: (0, O.mh)({
          allowWideBlocks: e,
          conversationId: t,
          cwd: a,
          forceCodeBlockWordWrap: l,
          hideCodeBlocks: r,
          hostId: s,
          onAddSelectedTextToChat: c,
          onFileLinkOpen: u,
          openFileLinksInSidePanel: p ?? !1,
          pluginMentionPresentation: o,
          renderCodeBlocksImmediately: f,
          renderCodeBlocksAsWritingBlocks: m,
          renderMath: g,
        }),
      }
    }
    function er(e, t, a = !1) {
      return a ? (0, o.qY)(e) : e
    }
  },
  pn4u(e, t, a) {
    a.d(
      t,
      {},
      {
        Fz: function ({ fadeSegmentDelayMs: e, fadeSegmentMaxDelayMs: t, segmentIndex: a }) {
          return Math.min(a * e, t ?? 1 / 0)
        },
        Zn: function ({ element: e, fadeSegmentDelayMs: t, fadeSegmentMaxDelayMs: a, segmentKey: n, timeline: i }) {
          if (i.segmentKeyByElement.get(e) === n) return
          let l = performance.now(),
            r = i.startAtMsByKey.get(n),
            s = r ?? Math.min(Math.max(i.nextSegmentStartAtMs, l), null == a ? 1 / 0 : l + a),
            o = Math.round(s - l)
          ;(null == r && (i.startAtMsByKey.set(n, s), i.delayMsByKey.set(n, o), (i.nextSegmentStartAtMs = s + t)),
            i.segmentKeyByElement.set(e, n),
            e.style.setProperty("--fade-delay", `${o}ms`))
        },
        dA: function () {
          return {
            delayMsByKey: new Map(),
            startAtMsByKey: new Map(),
            segmentKeyByElement: new WeakMap(),
            nextSegmentStartAtMs: 0,
            settledKeys: new Set(),
          }
        },
      },
    )
  },
  CH2b(e, t, a) {
    var n = a("pn4u")
    a.d(
      t,
      {},
      {
        _: function ({
          className: e,
          fadeSegmentDelayMs: t,
          fadeSegmentMaxDelayMs: a,
          segmentIndex: i,
          segmentKey: l,
          timeline: r,
        }) {
          let s = null != l && r?.settledKeys.has(l)
          return {
            className: s ? void 0 : e,
            onAnimationEnd:
              s || null == l || null == r
                ? void 0
                : (e) => {
                    e.target === e.currentTarget && r.settledKeys.add(l)
                  },
            ref:
              s || null == r || null == l
                ? void 0
                : (e) => {
                    null != e &&
                      (0, n.Zn)({
                        element: e,
                        fadeSegmentDelayMs: t,
                        fadeSegmentMaxDelayMs: a,
                        segmentKey: l,
                        timeline: r,
                      })
                  },
            style:
              t <= 0
                ? void 0
                : {
                    "--fade-delay": `${(null == l ? void 0 : r?.delayMsByKey.get(l)) ?? (0, n.Fz)({ fadeSegmentDelayMs: t, fadeSegmentMaxDelayMs: a, segmentIndex: i })}ms`,
                  },
          }
        },
      },
    )
  },
  K5PF(e, t, a) {
    var n = a("SRbQ"),
      i = a("zTeN"),
      l = a("K4Yp"),
      r = a("G4E3"),
      s = a("SPnB"),
      o = a("svjy"),
      d = a("GaA7"),
      c = a("OWtl"),
      u = a("pyoT"),
      p = a("Ky0Z")
    async function f(e, t) {
      let a = d.appServices?.artifactSessions
      if (null == a) return null
      let i = (0, u.watchSpaceAccount)(e, t.accountId, t.userId)
      try {
        let l = { stack: [], error: void 0, hasError: !1 }
        try {
          i.signal.throwIfAborted()
          let s = (0, n.mS)(l, await a.readHandoff({ artifactRef: t.artifactRef, threadId: t.threadId }), !1)
          i.signal.throwIfAborted()
          let d = s.handoff
          if (d?.target == null) return null
          let c = (0, r.I0)(d.target.uri)
          if (c?.kind !== "page" || new URL(d.target.uri).searchParams.get("account_id") !== t.accountId)
            throw Error("artifact_handoff_account_changed")
          return {
            source: t,
            attemptId: d.attemptId,
            pageId: c.id,
            title:
              s.title ||
              e
                .get(o.g)
                .formatMessage({
                  id: "artifactHandoff.untitledDocument",
                  defaultMessage: "Untitled document",
                  description: "Fallback name for a shared local document without a title",
                }),
            documentType: "presentation" === s.kind ? "granola_presentation" : "granola_workbook",
            targetArtifactRef: d.target.artifactRef,
          }
        } catch (e) {
          ;((l.error = e), (l.hasError = !0))
        } finally {
          ;(0, n.hk)(l)
        }
      } finally {
        i.stop()
      }
    }
    let m = (0, i.vU)(c.u, (e, { get: t, scope: a }) => ({
        queryKey: [
          "artifact-shared-page",
          e,
          t(p.h, null == e ? null : l.Qi.parse(e))?.find((t) => null != e && (0, l.Nh)(t.source, e)),
        ],
        enabled:
          null != e &&
          d.appServices?.artifactSessions != null &&
          e.accountId === t(u.spaceAccountId$) &&
          e.userId === t(s.chatGptAuthenticatedUserId$),
        staleTime: 0,
        retry: !1,
        queryFn: () => (null == e ? Promise.resolve(null) : f(a, e)),
      })),
      g = (0, i.vU)(c.u, (e, { get: t, scope: a }) => {
        let i = t(u.spaceAccountId$),
          l = t(s.chatGptAuthenticatedUserId$),
          r = null == i || null == l ? null : { accountId: i, userId: l, hostId: e.hostId, threadId: e.conversationId }
        return {
          queryKey: ["artifact-shared-pages", e, i, l, t(p.h, r)],
          enabled: null != r && d.appServices?.artifactSessions != null && d.appServices?.artifactPageHandoffs != null,
          staleTime: 0,
          queryFn: async () => {
            let e = { stack: [], error: void 0, hasError: !1 }
            try {
              if (null == r || d.appServices?.artifactPageHandoffs == null) return []
              let t = (0, n.mS)(e, await d.appServices.artifactPageHandoffs.list(r), !1)
              return (await Promise.all(t.map((e) => f(a, e.source).catch(() => null)))).filter((e) => null != e)
            } catch (t) {
              ;((e.error = t), (e.hasError = !0))
            } finally {
              ;(0, n.hk)(e)
            }
          },
        }
      })
    a.d(t, { h2: () => p.h }, { BK: g, V: f, Zj: m })
  },
  Ky0Z(e, t, a) {
    var n = a("zTeN"),
      i = a("SPnB"),
      l = a("GaA7"),
      r = a("OWtl")
    let s = (0, n.A4)(
      r.u,
      (e) => null,
      (e, { set: t }) => {
        if (null == e) return void t([])
        let a = l.appServices?.artifactPageHandoffs
        if (null == a) return void t([])
        let n = !0,
          i = a.subscribe(e, (e) => {
            n && t(e)
          })
        return (
          Promise.resolve(i).catch(() => {
            n && t(null)
          }),
          () => {
            ;((n = !1), i[Symbol.dispose]())
          }
        )
      },
      { autoDispose: !0 },
    )
    a.d(
      t,
      {},
      {
        h: s,
        v: function (e, t, a) {
          let n = e.get(i.chatGptAuthenticatedAccountId$),
            r = e.get(i.chatGptAuthenticatedUserId$)
          if (null == n || null == r || l.appServices?.artifactPageHandoffs == null) return !1
          let o = e.get(s, { accountId: n, userId: r, hostId: t, threadId: a })
          return null == o || o.length > 0
        },
      },
    )
  },
  geXJ(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      l = a("zTeN"),
      r = a("oyxz"),
      s = a("ZtSy"),
      o = a("Bbed"),
      d = a("e1xH"),
      c = a("pyoT"),
      u = a("pqpL")
    let p = (0, o._)(async () => (await Promise.all([a.e(7104), a.e(958816)]).then(a.bind(a, "QOoH"))).InlinePage)
    a.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            a,
            o = (0, i.c)(9),
            { attributes: f } = e,
            m = (0, l.Ul)(d.pagesEnabled$),
            g = (0, l.Ul)(c.spaceAccountId$)
          o[0] !== f ? ((t = (0, u.Hn)(f)), (o[0] = f), (o[1] = t)) : (t = o[1])
          let h = t
          if (null == h) return null
          if (!m || null == g) {
            let e,
              t,
              a = `https://chatgpt.com/space/${h.id}${null == h.blockId ? "" : `#${h.blockId}`}`
            return (
              o[2] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(r.A, {
                    id: "codex.page.inline.open",
                    defaultMessage: "Open page",
                    description: "Fallback link for an inline Page preview when Pages are unavailable",
                  })),
                  (o[2] = e))
                : (e = o[2]),
              o[3] !== a
                ? ((t = (0, n.jsx)(s.G, { initiator: "markdown_link_click", href: a, children: e })),
                  (o[3] = a),
                  (o[4] = t))
                : (t = o[4]),
              t
            )
          }
          let y = `${g}:${h.id}`
          return (
            o[5] !== h.blockId || o[6] !== h.id || o[7] !== y
              ? ((a = (0, n.jsx)(p, { pageId: h.id, blockId: h.blockId }, y)),
                (o[5] = h.blockId),
                (o[6] = h.id),
                (o[7] = y),
                (o[8] = a))
              : (a = o[8]),
            a
          )
        },
      },
    )
  },
  qvFq(e, t, a) {
    var n = a("DBCl"),
      i = a("G4E3"),
      l = a("r9ga"),
      r = a("sLcB"),
      s = a("pyoT")
    a.d(
      t,
      {},
      {
        $: function (e, t) {
          let a = new URL(`/space/${encodeURIComponent(t)}`, new URL(n.WaA).origin)
          return (a.searchParams.set("account_id", e), a.href)
        },
        openPageArtifactTarget: function (e, t, a, n) {
          let o = (0, i.I0)(t)
          if (o?.kind !== "page") return !1
          let d = new URL(t).searchParams.get("account_id")
          return (
            null != d &&
            d === e.get(s.spaceAccountId$) &&
            ((e.value.persistentWorkspace?.key !== "/space" &&
              (0, l.Kk)(e, e.value.pathname) === e.get(s.spacePageId$, o.id)) ||
              (0, r.openSpacePageSidePanelTab)(e, o.id, {
                openSource: n?.openSource,
                title: a,
                target: n?.target,
                revealAndFocus:
                  n?.revealAndFocus === "if-created"
                    ? null == (0, r.getOpenSpacePageTab)(e, d, o.id)
                    : n?.revealAndFocus,
              }).opened)
          )
        },
      },
    )
  },
  q3n0(e, t, a) {
    var n = a("ABep"),
      i = a("Webf"),
      l = a("c3f5"),
      r = a("XpUB"),
      s = a("bnxy"),
      o = a("v0rv"),
      d = a("mJQs"),
      c = a("e71N")
    let u = [`::${o.py}`, `::${o.qO}`],
      p =
        /^::codex-(?:inline-vis|live-vis)\{(?:file|path)="[^"]+"(?:\s+(?:title="[^"]*"|mode="wide"|expandable="(?:true|false)"))*\}\s*$/
    function f(e) {
      return e?.type === "codexDirective" && "name" in e && (e.name === o.py || e.name === o.qO)
    }
    a.d(
      t,
      {},
      {
        OS: function ({
          cacheKey: e,
          getVisualizeTurnTriggerType: t,
          hostId: a,
          sourcePathsByFile: i,
          threadId: r,
          turnId: u,
        }) {
          return {
            [o.py]: {
              renderElement({ attributes: o }) {
                let p = (0, l.B)(o, "path"),
                  f = (0, l.B)(o, "file"),
                  m = p ?? f,
                  g = null == m ? void 0 : i?.[(0, s.Q0)(m)],
                  h = null != g && (null == p || (0, s.y7)(p, g)) ? ((0, d.Yf)(g) ?? void 0) : void 0,
                  y = (0, l.B)(o, "threadId"),
                  b = null != y && (y === r || y === h) ? y : h
                return (0, n.jsx)(c.f, {
                  visualizationSource: "chat_inline",
                  attributes: null != b && b !== r && null == p && null != g ? { ...o, path: g } : o,
                  cacheKey: e,
                  getVisualizeTurnTriggerType: t,
                  hostId: a,
                  sourceThreadId: b,
                  threadId: r,
                  turnId: u,
                })
              },
            },
            [o.qO]: () => null,
          }
        },
        _g: function (e, { isStreaming: t }) {
          let a = e.lastIndexOf("\n") + 1,
            n = e.slice(a).trimStart()
          return n.length > 0 &&
            (u.some((e) => (t && e.startsWith(n)) || (n.startsWith(e) && !p.test(n))) ||
              (t && i.Mm.startsWith(n)) ||
              (n.startsWith(i.Mm) && !n.endsWith("")))
            ? e.slice(0, a)
            : e
        },
        vI: function (e) {
          let t = (0, o.qY)(e)
          if (!u.some((e) => t.includes(e))) return t
          let a = (0, r.o)(t, void 0)
          if (!a.some(f)) return t
          let n = a.filter((e) => !f(e))
          return n
            .filter((e, t) => {
              let a = n[t - 1]
              return (
                "space" !== e.type ||
                (a?.type === "code" && "indented" === a.codeBlockStyle) ||
                (null != a && "space" !== a.type && t < n.length - 1)
              )
            })
            .map((e) => e.raw)
            .join("")
        },
      },
    )
  },
  jvxw(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      l = a("on57"),
      r = a("Wf1j"),
      s = a("DcH0"),
      o = a("Lydu")
    function d(e) {
      let t,
        a,
        l = (0, i.c)(7),
        { animate: o, className: d, style: c } = e,
        u = (0, r.A)()
      return (
        l[0] !== u
          ? ((t = u.formatMessage({
              id: "codex.visualization.loading",
              defaultMessage: "Loading visualization",
              description: "Accessible label for an inline visualization loading placeholder",
            })),
            (l[0] = u),
            (l[1] = t))
          : (t = l[1]),
        l[2] !== o || l[3] !== d || l[4] !== c || l[5] !== t
          ? ((a = (0, n.jsx)(s._, { role: "status", "aria-label": t, className: d, animate: o, style: c })),
            (l[2] = o),
            (l[3] = d),
            (l[4] = c),
            (l[5] = t),
            (l[6] = a))
          : (a = l[6]),
        a
      )
    }
    a.d(
      t,
      {},
      {
        E: function (e) {
          let t,
            a,
            r,
            s,
            c,
            u = (0, i.c)(15),
            { height: p, isWide: f, variant: m } = e,
            g = void 0 === p ? 240 : p,
            h = void 0 !== f && f,
            y = void 0 === m ? "inline" : m,
            b = h && o.A.VisualizationWideBlock
          u[0] !== b ? ((t = (0, l.A)(o.A.VisualizationBlock, b)), (u[0] = b), (u[1] = t)) : (t = u[1])
          let x = h ? "true" : void 0,
            v = h ? "visualization" : void 0,
            k = "inline" === y,
            I = "inline" === y && "rounded-lg border border-subtle"
          return (
            u[2] !== I ? ((a = (0, l.A)("w-full", I)), (u[2] = I), (u[3] = a)) : (a = u[3]),
            u[4] !== g ? ((r = { height: g }), (u[4] = g), (u[5] = r)) : (r = u[5]),
            u[6] !== a || u[7] !== r || u[8] !== k
              ? ((s = (0, n.jsx)(d, { animate: k, className: a, style: r })),
                (u[6] = a),
                (u[7] = r),
                (u[8] = k),
                (u[9] = s))
              : (s = u[9]),
            u[10] !== s || u[11] !== t || u[12] !== x || u[13] !== v
              ? ((c = (0, n.jsx)("div", {
                  className: t,
                  "data-wide-markdown-block": x,
                  "data-wide-markdown-block-kind": v,
                  children: s,
                })),
                (u[10] = s),
                (u[11] = t),
                (u[12] = x),
                (u[13] = v),
                (u[14] = c))
              : (c = u[14]),
            c
          )
        },
        i: d,
      },
    )
  },
  e71N(e, t, a) {
    var n = a("ABep"),
      i = a("N55g"),
      l = a("Bbed"),
      r = a("jvxw")
    let s = (0, l._)(
        async () =>
          (
            await Promise.all([
              a.e(74692),
              a.e(1975),
              a.e(652500),
              a.e(877652),
              a.e(485338),
              a.e(373526),
              a.e(725998),
              a.e(553263),
            ]).then(a.bind(a, "N9Cx"))
          ).VisualizationDirectiveRenderer,
        { fallback: (0, n.jsx)(r.E, {}), errorFallback: (0, n.jsx)(i.D, {}) },
      ),
      o = (0, l._)(
        async () =>
          (
            await Promise.all([
              a.e(74692),
              a.e(1975),
              a.e(652500),
              a.e(877652),
              a.e(485338),
              a.e(373526),
              a.e(725998),
              a.e(553263),
            ]).then(a.bind(a, "N9Cx"))
          ).VisualizationSandbox,
        { fallback: (0, n.jsx)(r.E, {}), errorFallback: (0, n.jsx)(i.D, {}) },
      )
    a.d(t, {}, { C: o, f: s })
  },
}
//# sourceMappingURL=904485.55539c0b53.js.map
