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
      b = a("q77y"),
      y = a("Oj9r"),
      x = a("rvFo"),
      k = a("jv3l"),
      v = a("TJ1J")
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
            A,
            M,
            P,
            _,
            C,
            T,
            N,
            L = (0, n.c)(73),
            { openSource: $, resource: B, conversationId: R, hostId: G } = e,
            F = (0, r.gh)(y.GD),
            K = (0, d.Rn)(),
            W = (0, r.Ul)(g.spaceAccountId$),
            U = (0, r.Ul)(o.chatGptAuthenticatedUserId$),
            D = (0, r.Ul)(u.pagesEnabled$)
          L[0] !== R || L[1] !== G || L[2] !== K || L[3] !== B
            ? ((t = !!B && !!R && !K && (0, k.f)(G)), (L[0] = R), (L[1] = G), (L[2] = K), (L[3] = B), (L[4] = t))
            : (t = L[4])
          let z = t
          L[5] !== z || L[6] !== B
            ? ((a = z && B && !B.artifactRef.startsWith("artifact_external_")), (L[5] = z), (L[6] = B), (L[7] = a))
            : (a = L[7])
          let E = a
          L[8] !== W || L[9] !== E || L[10] !== R || L[11] !== G || L[12] !== U
            ? ((I =
                E && null != W && null != U && null != R ? { accountId: W, userId: U, hostId: G, threadId: R } : null),
              (L[8] = W),
              (L[9] = E),
              (L[10] = R),
              (L[11] = G),
              (L[12] = U),
              (L[13] = I))
            : (I = L[13])
          let O = (0, r._U)(c.h2, I)
          L[14] !== W || L[15] !== R || L[16] !== O || L[17] !== G || L[18] !== B?.artifactRef || L[19] !== U
            ? ((w = O?.find((e) => {
                let { source: t } = e
                return (
                  t.accountId === W &&
                  t.userId === U &&
                  t.hostId === G &&
                  t.threadId === R &&
                  t.artifactRef === B?.artifactRef
                )
              })),
              (L[14] = W),
              (L[15] = R),
              (L[16] = O),
              (L[17] = G),
              (L[18] = B?.artifactRef),
              (L[19] = U),
              (L[20] = w))
            : (w = L[20])
          let q = w,
            H = h.appServices?.artifactSessions,
            V = B?.artifactRef
          ;(L[21] !== W || L[22] !== R || L[23] !== q || L[24] !== G || L[25] !== V || L[26] !== U
            ? ((j = ["artifact-session-metadata", G, R, V, W, U, q]),
              (L[21] = W),
              (L[22] = R),
              (L[23] = q),
              (L[24] = G),
              (L[25] = V),
              (L[26] = U),
              (L[27] = j))
            : (j = L[27]),
            L[28] !== E || L[29] !== R || L[30] !== B
              ? ((S =
                  B && !B.pageId && E && H && R
                    ? (e) => {
                        let { signal: t } = e
                        return (0, b.P)(H.getMetadata({ artifactRef: B.artifactRef, threadId: R }), t)
                      }
                    : i.hT),
                (L[28] = E),
                (L[29] = R),
                (L[30] = B),
                (L[31] = S))
              : (S = L[31]),
            L[32] !== j || L[33] !== S
              ? ((A = { queryKey: j, queryFn: S, retry: !1, staleTime: x.D.THIRTY_SECONDS }),
                (L[32] = j),
                (L[33] = S),
                (L[34] = A))
              : (A = L[34]))
          let { data: Q } = (0, l.I)(A)
          if (L[35] !== W || L[36] !== Q?.handoff?.target?.uri || L[37] !== D || L[38] !== B?.pageId) {
            M = B?.pageId
            let e = Q?.handoff?.target?.uri
            if (!M && D && W && e) {
              let t
              L[40] !== e ? ((t = (0, s.I0)(e)), (L[40] = e), (L[41] = t)) : (t = L[41])
              let a = t
              a?.kind === "page" && new URL(e).searchParams.get("account_id") === W && (M = a.id)
            }
            ;((L[35] = W), (L[36] = Q?.handoff?.target?.uri), (L[37] = D), (L[38] = B?.pageId), (L[39] = M))
          } else M = L[39]
          L[42] !== M ? ((P = M ? { kind: "page", id: M } : null), (L[42] = M), (L[43] = P)) : (P = L[43])
          let Z = (0, r._U)(f.TR, P)
          if (M) {
            let e
            if (
              (L[44] !== Q?.title || L[45] !== Z || L[46] !== B?.title
                ? ((e = Z?.trim() || Q?.title?.trim() || B?.title || null),
                  (L[44] = Q?.title),
                  (L[45] = Z),
                  (L[46] = B?.title),
                  (L[47] = e))
                : (e = L[47]),
              (_ = e),
              D && W)
            ) {
              let e
              ;(L[48] !== W || L[49] !== $ || L[50] !== M || L[51] !== F
                ? ((e = (e) => {
                    ;(0, p.openPageArtifactTarget)(F, (0, p.$)(W, M), e, { openSource: $ })
                  }),
                  (L[48] = W),
                  (L[49] = $),
                  (L[50] = M),
                  (L[51] = F),
                  (L[52] = e))
                : (e = L[52]),
                (C = e))
            }
          } else {
            let e
            if (
              (L[53] !== Q?.title || L[54] !== B?.title
                ? ((e = Q?.title?.trim() || B?.title || null), (L[53] = Q?.title), (L[54] = B?.title), (L[55] = e))
                : (e = L[55]),
              (_ = e),
              B && z && R)
            ) {
              let e
              ;(L[56] !== R || L[57] !== G || L[58] !== B || L[59] !== F
                ? ((e = (e) => {
                    ;(0, v.p)(F, { artifactRef: B.artifactRef, hostId: G, kind: B.kind, threadId: R, title: e })
                  }),
                  (L[56] = R),
                  (L[57] = G),
                  (L[58] = B),
                  (L[59] = F),
                  (L[60] = e))
                : (e = L[60]),
                (C = e))
            }
          }
          L[61] !== W || L[62] !== M || L[63] !== D || L[64] !== F || L[65] !== U
            ? ((T =
                M && W && D
                  ? (e) => {
                      F.get(g.spaceAccountId$) === W &&
                        F.get(o.chatGptAuthenticatedUserId$) === U &&
                        (0, m.$)(F, M, e, void 0, { prefetchPreview: !1, delayMs: 50 })
                    }
                  : void 0),
              (L[61] = W),
              (L[62] = M),
              (L[63] = D),
              (L[64] = F),
              (L[65] = U),
              (L[66] = T))
            : (T = L[66])
          let Y = T
          return (
            L[67] !== z || L[68] !== C || L[69] !== Y || L[70] !== M || L[71] !== _
              ? ((N = { title: _, pageId: M, onOpen: C, isAvailable: z, onPreload: Y }),
                (L[67] = z),
                (L[68] = C),
                (L[69] = Y),
                (L[70] = M),
                (L[71] = _),
                (L[72] = N))
              : (N = L[72]),
            N
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
      c = a("NDV0")
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
          fadeText: b = !1,
          hostId: y = i.fI,
          keyPrefix: x,
          onFileLinkOpen: k,
          openFileLinksInSidePanel: v = !1,
          segmenter: I = null,
          text: w,
        }) {
          let j = (0, o.C)(w),
            S = null == h && a ? (0, l.I)(j) : null
          if (!b && null == h && null == S) return j
          let A = h ?? (0, s.SN)({ decorations: S, segmentText: (e) => (b ? (0, s.gk)(e, I) : [e]), text: j })
          return b || 1 !== A.length || A[0]?.kind !== "text" || A[0].segments[0] !== j
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
                let b = [],
                  y = 0,
                  x = s
                for (let s of h) {
                  if ("text" === s.kind) {
                    ;(b.push(
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
                        keys: l?.slice(y, y + s.segments.length),
                        segments: s.segments,
                      }),
                    ),
                      (y += s.segments.length),
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
                    ;(b.push(h), (x += 1))
                    continue
                  }
                  ;(b.push(
                    (0, n.jsx)(
                      "span",
                      {
                        ...(0, r._)({
                          className: c.A.FadeIn,
                          fadeSegmentDelayMs: a,
                          fadeSegmentMaxDelayMs: i,
                          segmentIndex: x,
                          segmentKey: l?.[y],
                          timeline: o,
                        }),
                        children: h,
                      },
                      l?.[y] ?? `fade-${x}`,
                    ),
                  ),
                    (y += 1),
                    (x += 1))
                }
                return b
              })({
                conversationId: e,
                cwd: t,
                fadeSegmentDelayMs: u,
                fadeSegmentMaxDelayMs: p,
                fadeSegmentKeys: f,
                fadeSegmentStartIndex: m,
                fadeSegmentTimeline: g,
                fadeText: b,
                hostId: y,
                keyPrefix: x,
                onFileLinkOpen: k,
                openFileLinksInSidePanel: v,
                parts: A,
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
        b = (0, i.c)(39),
        { citation: y, conversationId: x, cwd: k, hostId: v, openInSidePanel: I } = e,
        w = void 0 !== I && I,
        j = (0, l.A)(),
        { path: S, target: A, artifactCitation: M, lineRangeStart: P, lineRangeEnd: _ } = y,
        C = "artifact-session" === A.type ? A : null
      b[0] !== x || b[1] !== v || b[2] !== C
        ? ((t = { openSource: "page_link", resource: C, conversationId: x, hostId: v }),
          (b[0] = x),
          (b[1] = v),
          (b[2] = C),
          (b[3] = t))
        : (t = b[3])
      let { title: T, onOpen: N } = (0, r.a)(t)
      b[4] !== M || b[5] !== j || b[6] !== _ || b[7] !== P || b[8] !== S || b[9] !== C || b[10] !== T
        ? ((s = m(P)),
          (a = m(_)),
          (o = C
            ? { ariaLabel: T ?? C.artifactRef, displayLabel: T ?? C.artifactRef }
            : f({ artifactCitation: M, endLine: a, intl: j, line: s, path: S })),
          (b[4] = M),
          (b[5] = j),
          (b[6] = _),
          (b[7] = P),
          (b[8] = S),
          (b[9] = C),
          (b[10] = T),
          (b[11] = a),
          (b[12] = s),
          (b[13] = o))
        : ((a = b[11]), (s = b[12]), (o = b[13]))
      let { ariaLabel: L, displayLabel: $ } = o
      if (C && !N) {
        let e
        return (b[14] !== $ ? ((e = (0, n.jsx)("span", { children: $ })), (b[14] = $), (b[15] = e)) : (e = b[15]), e)
      }
      if (C) {
        let e,
          t = d.Q[C.kind][20],
          a = "presentation" === C.kind ? "text-orange" : "text-green"
        ;(b[16] !== t || b[17] !== a
          ? ((e = (0, n.jsx)(t, { className: a })), (b[16] = t), (b[17] = a), (b[18] = e))
          : (e = b[18]),
          (u = e))
      }
      b[19] !== a || b[20] !== s || b[21] !== S
        ? ((p = { path: S, line: s, endLine: a }), (b[19] = a), (b[20] = s), (b[21] = S), (b[22] = p))
        : (p = b[22])
      let B = M?.target,
        R = C ? $ : S,
        G = !C
      return (
        b[23] !== $ || b[24] !== N
          ? ((g = N ? () => N($) : void 0), (b[23] = $), (b[24] = N), (b[25] = g))
          : (g = b[25]),
        b[26] !== L ||
        b[27] !== x ||
        b[28] !== k ||
        b[29] !== $ ||
        b[30] !== v ||
        b[31] !== u ||
        b[32] !== w ||
        b[33] !== p ||
        b[34] !== B ||
        b[35] !== R ||
        b[36] !== G ||
        b[37] !== g
          ? ((h = (0, n.jsx)(c.Bh, {
              reference: p,
              artifactNavigationTarget: B,
              ariaLabel: L,
              icon: u,
              label: $,
              tooltipText: R,
              conversationId: x,
              cwd: k,
              hostId: v,
              isPreview: !1,
              enableWorkspaceFileActions: G,
              onOpen: g,
              openInSidePanel: w,
            })),
            (b[26] = L),
            (b[27] = x),
            (b[28] = k),
            (b[29] = $),
            (b[30] = v),
            (b[31] = u),
            (b[32] = w),
            (b[33] = p),
            (b[34] = B),
            (b[35] = R),
            (b[36] = G),
            (b[37] = g),
            (b[38] = h))
          : (h = b[38]),
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
        b = (function (e) {
          var t
          let a,
            n = e.split(/[\\/]/).pop()?.toLowerCase() ?? "",
            i = s.get(n)
          if (null != i) return i
          let l = (a = (t = n).lastIndexOf(".")) <= 0 ? "" : t.slice(a + 1)
          return 0 === l.length ? "file" : (o.get(l) ?? "file")
        })(i),
        y =
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
              })(b, a)
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
          })(b)),
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
        k =
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
        v =
          null == k
            ? null
            : a.formatMessage(
                {
                  id: "markdown.fileCitation.lineLabelDisplay",
                  defaultMessage: "({lineLabel})",
                  description: "Location label shown inside parentheses in a file citation chip",
                },
                { lineLabel: k },
              ),
        I = g
      return (
        null != y && null != v
          ? (I = a.formatMessage(
              {
                id: "markdown.fileCitation.ariaLabelWithTypeAndLine",
                defaultMessage: "{fileName}, {fileTypeLabel} {lineLabel}",
                description: "Accessible label for an extensionless file citation chip with location information",
              },
              { fileName: g, fileTypeLabel: y, lineLabel: v },
            ))
          : null != y
            ? (I = a.formatMessage(
                {
                  id: "markdown.fileCitation.ariaLabelWithType",
                  defaultMessage: "{fileName}, {fileTypeLabel}",
                  description: "Accessible label for an extensionless file citation chip",
                },
                { fileName: g, fileTypeLabel: y },
              ))
            : null != v &&
              (I = a.formatMessage(
                {
                  id: "markdown.fileCitation.ariaLabelWithLine",
                  defaultMessage: "{fileName} {lineLabel}",
                  description: "Accessible label for a file citation chip with location information",
                },
                { fileName: g, lineLabel: v },
              )),
        { ariaLabel: I, displayLabel: null == k ? g : `${g} (${k})` }
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
        b,
        y,
        x,
        k,
        v,
        I,
        w,
        j,
        S,
        A,
        M,
        P,
        _,
        C,
        T,
        N,
        L,
        $,
        B,
        R,
        G,
        F,
        K,
        W,
        U,
        D,
        z,
        E,
        O = (0, i.c)(94)
      O[0] !== e
        ? (({
            allowWideBlocks: A,
            children: t,
            components: a,
            conversationId: M,
            cwd: s,
            directives: o,
            extensions: c,
            externalLinkAppearance: m,
            externalResourcePolicy: P,
            forceCodeBlockWordWrap: _,
            hideCodeBlocks: h,
            getVisualizeTurnTriggerType: g,
            hostId: b,
            pluginMentionPresentation: I,
            isBrowserEnabled: C,
            mediaCacheKey: y,
            onAddSelectedTextToChat: x,
            onFileLinkOpen: k,
            openFileLinksInSidePanel: v,
            repairOrderedLists: j,
            renderCodeBlocksImmediately: T,
            renderCodeBlocksAsWritingBlocks: N,
            renderInlineVisualizations: L,
            renderMath: $,
            textStyle: B,
            turnId: R,
            savedContentResponse: S,
            ...w
          } = e),
          (O[0] = e),
          (O[1] = t),
          (O[2] = a),
          (O[3] = s),
          (O[4] = o),
          (O[5] = c),
          (O[6] = m),
          (O[7] = g),
          (O[8] = h),
          (O[9] = b),
          (O[10] = y),
          (O[11] = x),
          (O[12] = k),
          (O[13] = v),
          (O[14] = I),
          (O[15] = w),
          (O[16] = j),
          (O[17] = S),
          (O[18] = A),
          (O[19] = M),
          (O[20] = P),
          (O[21] = _),
          (O[22] = C),
          (O[23] = T),
          (O[24] = N),
          (O[25] = L),
          (O[26] = $),
          (O[27] = B),
          (O[28] = R))
        : ((t = O[1]),
          (a = O[2]),
          (s = O[3]),
          (o = O[4]),
          (c = O[5]),
          (m = O[6]),
          (g = O[7]),
          (h = O[8]),
          (b = O[9]),
          (y = O[10]),
          (x = O[11]),
          (k = O[12]),
          (v = O[13]),
          (I = O[14]),
          (w = O[15]),
          (j = O[16]),
          (S = O[17]),
          (A = O[18]),
          (M = O[19]),
          (P = O[20]),
          (_ = O[21]),
          (C = O[22]),
          (T = O[23]),
          (N = O[24]),
          (L = O[25]),
          ($ = O[26]),
          (B = O[27]),
          (R = O[28]))
      let q = void 0 !== A && A,
        H = void 0 === M ? null : M,
        V = void 0 === P ? "allow" : P,
        Q = void 0 !== _ && _,
        Z = void 0 !== C && C,
        Y = void 0 !== T && T,
        J = void 0 !== N && N,
        X = void 0 !== L && L,
        ee = void 0 === $ || $,
        et = (0, l.Zj)("2957382457")
      if (O[29] !== t || O[30] !== et || O[31] !== c || O[32] !== X || O[33] !== ee || O[34] !== j) {
        let e = (0, p.x1)(t, et, X)
        ;((G = (0, f.o)(e, c, { repairOrderedLists: j, renderMath: ee })),
          (O[29] = t),
          (O[30] = et),
          (O[31] = c),
          (O[32] = X),
          (O[33] = ee),
          (O[34] = j),
          (O[35] = G))
      } else G = O[35]
      let ea = G
      ;(O[36] !== H ||
      O[37] !== s ||
      O[38] !== et ||
      O[39] !== g ||
      O[40] !== b ||
      O[41] !== y ||
      O[42] !== v ||
      O[43] !== X ||
      O[44] !== R
        ? ((F = (0, p.sh)({
            conversationId: H,
            cwd: s,
            enableInlineDil: et,
            getVisualizeTurnTriggerType: g,
            hostId: b,
            mediaCacheKey: y,
            openFileLinksInSidePanel: v,
            renderInlineVisualizations: X,
            turnId: R,
          })),
          (O[36] = H),
          (O[37] = s),
          (O[38] = et),
          (O[39] = g),
          (O[40] = b),
          (O[41] = y),
          (O[42] = v),
          (O[43] = X),
          (O[44] = R),
          (O[45] = F))
        : (F = O[45]),
        O[46] !== o || O[47] !== F ? ((K = { ...F, ...o }), (O[46] = o), (O[47] = F), (O[48] = K)) : (K = O[48]))
      let en = K
      ;(O[49] !== q ||
      O[50] !== H ||
      O[51] !== s ||
      O[52] !== m ||
      O[53] !== V ||
      O[54] !== Q ||
      O[55] !== h ||
      O[56] !== b ||
      O[57] !== Z ||
      O[58] !== x ||
      O[59] !== k ||
      O[60] !== v ||
      O[61] !== I ||
      O[62] !== J ||
      O[63] !== Y ||
      O[64] !== ee ||
      O[65] !== S
        ? ((W = (0, p.c8)({
            allowWideBlocks: q,
            conversationId: H,
            cwd: s,
            externalLinkAppearance: m,
            externalResourcePolicy: V,
            forceCodeBlockWordWrap: Q,
            hideCodeBlocks: h,
            hostId: b,
            pluginMentionPresentation: I,
            isBrowserEnabled: Z,
            onAddSelectedTextToChat: x,
            onFileLinkOpen: k,
            openFileLinksInSidePanel: v,
            renderCodeBlocksImmediately: Y,
            renderCodeBlocksAsWritingBlocks: J,
            renderMath: ee,
            savedContentResponse: S,
          })),
          (O[49] = q),
          (O[50] = H),
          (O[51] = s),
          (O[52] = m),
          (O[53] = V),
          (O[54] = Q),
          (O[55] = h),
          (O[56] = b),
          (O[57] = Z),
          (O[58] = x),
          (O[59] = k),
          (O[60] = v),
          (O[61] = I),
          (O[62] = J),
          (O[63] = Y),
          (O[64] = ee),
          (O[65] = S),
          (O[66] = W))
        : (W = O[66]),
        O[67] !== a || O[68] !== W ? ((U = { ...W, ...a }), (O[67] = a), (O[68] = W), (O[69] = U)) : (U = O[69]))
      let ei = U
      ;(O[70] !== H || O[71] !== s || O[72] !== b || O[73] !== k || O[74] !== v || O[75] !== B?.tone
        ? ((D = () => (e, t, a, i) => {
            let l = (0, u.Y)({
              conversationId: H,
              cwd: s,
              decorateText: i,
              hostId: b,
              keyPrefix: t,
              onFileLinkOpen: k,
              openFileLinksInSidePanel: v ?? !1,
              text: e,
            })
            return B?.tone === "user-message" ? (0, n.jsx)(r.k, { children: l }, t) : l
          }),
          (O[70] = H),
          (O[71] = s),
          (O[72] = b),
          (O[73] = k),
          (O[74] = v),
          (O[75] = B?.tone),
          (O[76] = D))
        : (D = O[76]),
        B?.tone,
        O[77] !== D ? ((z = D()), (O[77] = D), (O[78] = z)) : (z = O[78]))
      let el = z
      return (
        O[79] !== q ||
        O[80] !== H ||
        O[81] !== s ||
        O[82] !== V ||
        O[83] !== Q ||
        O[84] !== h ||
        O[85] !== b ||
        O[86] !== ei ||
        O[87] !== en ||
        O[88] !== y ||
        O[89] !== w ||
        O[90] !== el ||
        O[91] !== B ||
        O[92] !== ea
          ? ((E = (0, n.jsx)(d.T, {
              ...w,
              allowWideBlocks: q,
              components: ei,
              conversationId: H,
              cwd: s,
              directives: en,
              externalResourcePolicy: V,
              forceCodeBlockWordWrap: Q,
              hideCodeBlocks: h,
              hostId: b,
              mediaCacheKey: y,
              renderText: el,
              textStyle: B,
              tokens: ea,
            })),
            (O[79] = q),
            (O[80] = H),
            (O[81] = s),
            (O[82] = V),
            (O[83] = Q),
            (O[84] = h),
            (O[85] = b),
            (O[86] = ei),
            (O[87] = en),
            (O[88] = y),
            (O[89] = w),
            (O[90] = el),
            (O[91] = B),
            (O[92] = ea),
            (O[93] = E))
          : (E = O[93]),
        E
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
      b = a("Wf1j"),
      y = a("Qgfj"),
      x = a("fOao"),
      k = a("jEN2"),
      v = a("Ot7V"),
      I = a("MI1z"),
      w = a("Oj9r"),
      j = a("kfGJ"),
      S = a("axh8"),
      A = a("hbRe"),
      M = a("bPa2"),
      P = a("bnxy"),
      _ = a("rHMn"),
      C = a("t4J7"),
      T = a("BI6E"),
      N = a("ViUV"),
      L = a("jr5g"),
      $ = a("IY5Q"),
      B = a("Jn3n")
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
        y,
        R,
        K,
        U,
        D = (0, c.c)(51),
        { artifactKind: z, displayName: E, hostId: O, skillDirectory: q, skillName: H } = e,
        V = void 0 === O ? j.fI : O,
        Q = (0, h.gh)(w.GD),
        Z = (0, b.A)(),
        [Y, J] = (0, n.useState)(!1),
        [X, ee] = (0, n.useState)(!1),
        { forceReload: et, skills: ea } = (0, M.a)(void 0, V),
        en = (0, I.y)(V),
        { mutateAsync: ei, isPending: el } = (0, B.V)(et)
      if (
        D[0] !== z ||
        D[1] !== en ||
        D[2] !== E ||
        D[3] !== V ||
        D[4] !== Z ||
        D[5] !== Q ||
        D[6] !== q ||
        D[7] !== H ||
        D[8] !== ea
      ) {
        a = (0, P.Al)(q, "SKILL.md")
        let e = (0, _.$c)(q, z),
          n = ea.find((e) => (0, P.Fd)(e.path) === (0, P.Fd)(a)),
          o = (0, A.Gc)({ name: H, path: a }),
          d = ea.find(F),
          { url: c } = (0, S.Oe)({
            size: "large",
            iconLarge: n?.interface?.iconLarge,
            basePath: a,
            renderCustomSvgAsImage: !0,
          })
        ;((s = {
          id: `${V}:${a}`,
          type: z,
          name: E,
          description: n?.description,
          thumbnail: c ? { uri: c, alt: "" } : void 0,
        }),
          (t = async () => {
            ;((0, k.jf)(Z.formatMessage(W[z], { template: o })), J(!1))
          }),
          (i =
            null == e
              ? void 0
              : async () => {
                  if ((J(!1), (0, C.z)(z))) {
                    let e = await (0, _.Lc)({ hostId: V, manifestPath: (0, P.Al)(q, "artifact-template.json") })
                    if (e?.galleryKind === z && null != e.sourceUrl)
                      return void (0, v.E0)({ href: e.sourceUrl, initiator: "open_in_browser_bridge", originHostId: V })
                  }
                  ;(0, x.openArtifactSidePanelTab)(Q, e, {
                    artifactTemplateSkill: n,
                    hostId: V,
                    isPreview: !0,
                    tabId: `artifact-template:${V}:${e}`,
                    title: E,
                  }) || J(!0)
                }),
          (l = d
            ? () => {
                ;((0, k.jf)(
                  Z.formatMessage(T.ho.editTemplatePrompt, { template: o, templateCreator: (0, _.oo)("local") }),
                ),
                  J(!1))
              }
            : void 0),
          (r = n && (0, _.ok)(n, en) ? () => ee(!0) : void 0),
          (D[0] = z),
          (D[1] = en),
          (D[2] = E),
          (D[3] = V),
          (D[4] = Z),
          (D[5] = Q),
          (D[6] = q),
          (D[7] = H),
          (D[8] = ea),
          (D[9] = t),
          (D[10] = a),
          (D[11] = i),
          (D[12] = l),
          (D[13] = r),
          (D[14] = s))
      } else ((t = D[9]), (a = D[10]), (i = D[11]), (l = D[12]), (r = D[13]), (s = D[14]))
      D[15] !== i || D[16] !== l || D[17] !== r
        ? ((o = { onView: i, onEdit: l, onDelete: r }), (D[15] = i), (D[16] = l), (D[17] = r), (D[18] = o))
        : (o = D[18])
      let er = o
      return (
        D[19] === Symbol.for("react.memo_cache_sentinel") ? ((u = () => J(!0)), (D[19] = u)) : (u = D[19]),
        D[20] !== t ? ((p = { kind: "use", onSelect: t }), (D[20] = t), (D[21] = p)) : (p = D[21]),
        D[22] !== er || D[23] !== el || D[24] !== p || D[25] !== s
          ? ((f = (0, d.jsx)(g.g7, {
              menuModal: !1,
              template: s,
              disabled: el,
              onOpen: u,
              primaryAction: p,
              menu: er,
            })),
            (D[22] = er),
            (D[23] = el),
            (D[24] = p),
            (D[25] = s),
            (D[26] = f))
          : (f = D[26]),
        D[27] !== t || D[28] !== V || D[29] !== er || D[30] !== el || D[31] !== a || D[32] !== s
          ? ((m = (0, d.jsx)(L.FQ, { template: s, path: a, hostId: V, onUse: t, callbacks: er, disabled: el })),
            (D[27] = t),
            (D[28] = V),
            (D[29] = er),
            (D[30] = el),
            (D[31] = a),
            (D[32] = s),
            (D[33] = m))
          : (m = D[33]),
        D[34] !== Y || D[35] !== E || D[36] !== m
          ? ((y = (0, d.jsx)(L.Wn, { open: Y, onOpenChange: J, title: E, children: m })),
            (D[34] = Y),
            (D[35] = E),
            (D[36] = m),
            (D[37] = y))
          : (y = D[37]),
        D[38] !== V || D[39] !== ei || D[40] !== a
          ? ((R = () => {
              ei({ hostId: V, skillPath: a }).then((e) => {
                let { success: t } = e
                t && (ee(!1), J(!1))
              }, G)
            }),
            (D[38] = V),
            (D[39] = ei),
            (D[40] = a),
            (D[41] = R))
          : (R = D[41]),
        D[42] !== X || D[43] !== E || D[44] !== el || D[45] !== R
          ? ((K = (0, d.jsx)(N.b, { open: X, onOpenChange: ee, title: E, deleteDisabled: el, onConfirm: R })),
            (D[42] = X),
            (D[43] = E),
            (D[44] = el),
            (D[45] = R),
            (D[46] = K))
          : (K = D[46]),
        D[47] !== y || D[48] !== K || D[49] !== f
          ? ((U = (0, d.jsxs)($.u, { children: [f, y, K] })), (D[47] = y), (D[48] = K), (D[49] = f), (D[50] = U))
          : (U = D[50]),
        U
      )
    }
    function G() {}
    function F(e) {
      return e.enabled && ("template-creator" === e.name || e.name.endsWith(":template-creator"))
    }
    let K = (0, y.YK)({
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
      W = {
        document: K.useDocumentPrompt,
        presentation: K.usePresentationPrompt,
        spreadsheet: K.useSpreadsheetPrompt,
        site: K.useSitePrompt,
        "google-docs": K.useGoogleDocPrompt,
        "google-slides": K.useGoogleSlidesPrompt,
        "google-sheets": K.useGoogleSheetPrompt,
      }
    var U = a("TUMj")
    let D = (0, a("Bbed")._)(async () => {
        let { ChatGptFileReference: e } = await Promise.all([
          a.e(82267),
          a.e(434505),
          a.e(788421),
          a.e(904817),
          a.e(343623),
          a.e(943163),
          a.e(211466),
        ]).then(a.bind(a, "GnI8"))
        return e
      }),
      z = m.object({
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
        r = (0, U.Rn)(),
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
              ? ((t = (0, d.jsx)(D, { contentReferenceIndex: a, presentation: "template", reference: i })),
                (n[5] = a),
                (n[6] = i),
                (n[7] = t))
              : (t = n[7]),
            t)
          : null
      }
      n[8] !== i ? ((t = z.safeParse(i)), (n[8] = i), (n[9] = t)) : (t = n[9])
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
      H = a("tb30"),
      V = a("NkEl"),
      Q = a("UxN3"),
      Z = a("Hc2f"),
      Y = a("c3f5"),
      J = a("vTw3"),
      X = a("on57"),
      ee = a("oyxz"),
      et = a("HZfM"),
      ea = a("Sm6l")
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
                  return (0, V.y)(e, {
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
                    (0, d.jsx)(Q.bF, {
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
          ? (0, s.OS)({ cacheKey: u, getVisualizeTurnTriggerType: o, hostId: c, threadId: e ?? void 0, turnId: m })
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
    let p = (0, o._)(async () => (await Promise.all([a.e(218787), a.e(537102)]).then(a.bind(a, "QOoH"))).InlinePage)
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
          let b = `${g}:${h.id}`
          return (
            o[5] !== h.blockId || o[6] !== h.id || o[7] !== b
              ? ((a = (0, n.jsx)(p, { pageId: h.id, blockId: h.blockId }, b)),
                (o[5] = h.blockId),
                (o[6] = h.id),
                (o[7] = b),
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
      r = a("uqg3"),
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
      l = a("XpUB"),
      r = a("v0rv"),
      s = a("e71N")
    let o = [`::${r.py}`, `::${r.qO}`],
      d =
        /^::codex-(?:inline-vis|live-vis)\{(?:file|path)="[^"]+"(?:\s+(?:title="[^"]*"|mode="wide"|expandable="(?:true|false)"))*\}\s*$/
    function c(e) {
      return e?.type === "codexDirective" && "name" in e && (e.name === r.py || e.name === r.qO)
    }
    a.d(
      t,
      {},
      {
        OS: function ({ cacheKey: e, getVisualizeTurnTriggerType: t, hostId: a, threadId: i, turnId: l }) {
          return {
            [r.py]: {
              renderElement: ({ attributes: r }) =>
                (0, n.jsx)(s.f, {
                  visualizationSource: "chat_inline",
                  attributes: r,
                  cacheKey: e,
                  getVisualizeTurnTriggerType: t,
                  hostId: a,
                  threadId: i,
                  turnId: l,
                }),
            },
            [r.qO]: () => null,
          }
        },
        _g: function (e, { isStreaming: t }) {
          let a = e.lastIndexOf("\n") + 1,
            n = e.slice(a).trimStart()
          return n.length > 0 &&
            (o.some((e) => (t && e.startsWith(n)) || (n.startsWith(e) && !d.test(n))) ||
              (t && i.Mm.startsWith(n)) ||
              (n.startsWith(i.Mm) && !n.endsWith("")))
            ? e.slice(0, a)
            : e
        },
        vI: function (e) {
          let t = (0, r.qY)(e)
          if (!o.some((e) => t.includes(e))) return t
          let a = (0, l.o)(t, void 0)
          if (!a.some(c)) return t
          let n = a.filter((e) => !c(e))
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
      o = a("NDV0")
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
            b = void 0 === m ? "inline" : m,
            y = h && o.A.VisualizationWideBlock
          u[0] !== y ? ((t = (0, l.A)(o.A.VisualizationBlock, y)), (u[0] = y), (u[1] = t)) : (t = u[1])
          let x = h ? "true" : void 0,
            k = h ? "visualization" : void 0,
            v = "inline" === b,
            I = "inline" === b && "rounded-lg border border-subtle"
          return (
            u[2] !== I ? ((a = (0, l.A)("w-full", I)), (u[2] = I), (u[3] = a)) : (a = u[3]),
            u[4] !== g ? ((r = { height: g }), (u[4] = g), (u[5] = r)) : (r = u[5]),
            u[6] !== a || u[7] !== r || u[8] !== v
              ? ((s = (0, n.jsx)(d, { animate: v, className: a, style: r })),
                (u[6] = a),
                (u[7] = r),
                (u[8] = v),
                (u[9] = s))
              : (s = u[9]),
            u[10] !== s || u[11] !== t || u[12] !== x || u[13] !== k
              ? ((c = (0, n.jsx)("div", {
                  className: t,
                  "data-wide-markdown-block": x,
                  "data-wide-markdown-block-kind": k,
                  children: s,
                })),
                (u[10] = s),
                (u[11] = t),
                (u[12] = x),
                (u[13] = k),
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
              a.e(198336),
              a.e(340985),
              a.e(652500),
              a.e(877652),
              a.e(558038),
              a.e(566398),
              a.e(620875),
              a.e(423550),
              a.e(875355),
            ]).then(a.bind(a, "wWdX"))
          ).VisualizationDirectiveRenderer,
        { fallback: (0, n.jsx)(r.E, {}), errorFallback: (0, n.jsx)(i.D, {}) },
      ),
      o = (0, l._)(
        async () =>
          (
            await Promise.all([
              a.e(74692),
              a.e(198336),
              a.e(340985),
              a.e(652500),
              a.e(877652),
              a.e(558038),
              a.e(566398),
              a.e(620875),
              a.e(423550),
              a.e(875355),
            ]).then(a.bind(a, "wWdX"))
          ).VisualizationSandbox,
        { fallback: (0, n.jsx)(r.E, {}), errorFallback: (0, n.jsx)(i.D, {}) },
      )
    a.d(t, {}, { C: o, f: s })
  },
}
//# sourceMappingURL=904485.3b0d43ab87.js.map
