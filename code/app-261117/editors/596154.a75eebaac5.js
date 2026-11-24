export const __rspack_esm_ids = [596154]
export const __webpack_modules__ = {
  Q9a5(e, t, n) {
    var r = n("ABep"),
      l = n("QosV"),
      o = n("N0bB"),
      a = n("eLzw"),
      i = n("uNhY")
    n.d(
      t,
      {},
      {
        e: function (e) {
          let t,
            n,
            s,
            u,
            d,
            c = (0, l.c)(13),
            { path: m, contents: f, cacheKey: h, line: p, onPostRender: g } = e
          return (
            c[0] !== h || c[1] !== f || c[2] !== m
              ? ((t = { name: m, contents: f, cacheKey: h }), (c[0] = h), (c[1] = f), (c[2] = m), (c[3] = t))
              : (t = c[3]),
            c[4] !== p ? ((n = p ? { start: p, end: p } : null), (c[4] = p), (c[5] = n)) : (n = c[5]),
            c[6] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, i.S)()), (c[6] = s)) : (s = c[6]),
            c[7] !== g
              ? ((u = { preferredHighlighter: s, disableFileHeader: !0, onPostRender: g }), (c[7] = g), (c[8] = u))
              : (u = c[8]),
            c[9] !== t || c[10] !== n || c[11] !== u
              ? ((d = (0, r.jsx)("div", {
                  className: "h-full overflow-auto",
                  children: (0, r.jsx)(a.U, { children: (0, r.jsx)(o.Z, { file: t, selectedLines: n, options: u }) }),
                })),
                (c[9] = t),
                (c[10] = n),
                (c[11] = u),
                (c[12] = d))
              : (d = c[12]),
            d
          )
        },
      },
    )
  },
  jJxE(e, t, n) {
    n.d(t, { ZipFileViewer: () => U })
    var r = n("ABep"),
      l = n("QosV"),
      o = n("T0Rc"),
      a = n("D7Ms"),
      i = n("qmMi"),
      s = n("Siqm"),
      u = n("fGzQ"),
      d = n("tSEg"),
      c = n("gTKF"),
      m = n("yI91"),
      f = n("rvFo"),
      h = n("MOsl"),
      p = n("OFFK"),
      g = n("zKw6"),
      v = n.n(g),
      x = n("DBCl"),
      w = n("smHt")
    let b = x.PL_
    class y extends Error {
      reason
      constructor(e) {
        ;(super(`ZIP preview: ${e}`), (this.reason = e))
      }
    }
    async function S(e) {
      if (e.byteLength > b) throw new y("too-large")
      let {
          ZipReader: t,
          Uint8ArrayReader: r,
          Uint8ArrayWriter: l,
          ERR_ENCRYPTED_CENTRAL_DIRECTORY: o,
        } = await n.e(123986).then(n.bind(n, "Q651")),
        a = new t(new r(e), { checkCrc32: !0, useWebWorkers: !1, normalizeFilename: (e) => e.replaceAll("\\", "/") }),
        i = new Map(),
        s = 0
      try {
        for await (let e of a.getEntriesGenerator()) {
          if (++s > 1e4 || e.filename.length > 4096) throw new y("too-large")
          let t = e.filename.split("/")
          if (e.filename.startsWith("/") || e.filename.includes("\0") || t.includes("..")) throw new y("invalid")
          if (t.length > 64) throw new y("too-large")
          let n = v().posix.normalize(e.filename).replace(/\/$/u, "")
          if (/^[a-z]:/iu.test(n) || ("." === n && !e.directory)) throw new y("invalid")
          let r = e.directory ? null : e
          for (; "." !== n;) {
            let e = i.get(n)
            if (void 0 !== e) {
              if (null != e || null != r) throw new y("invalid")
              break
            }
            if ((i.set(n, r), i.size > 1e4)) throw new y("too-large")
            ;((n = v().posix.dirname(n)), (r = null))
          }
        }
      } catch (e) {
        if (e instanceof y) throw e
        throw new y(e instanceof Error && e.message === o ? "encrypted" : "invalid")
      }
      return {
        paths: Array.from(i, ([e, t]) => (null == t ? e + "/" : e)),
        async readFile(e, t) {
          t?.throwIfAborted()
          let n = i.get(e)
          if (!n) throw new y("invalid")
          if (n.encrypted) throw new y("encrypted")
          if (n.symlink || (0 !== n.compressionMethod && 8 !== n.compressionMethod)) throw new y("unsupported")
          if (n.uncompressedSize > w.RP) throw new y("too-large")
          try {
            return await n.getData(new l(), { signal: t })
          } catch {
            throw (t?.throwIfAborted(), new y("invalid"))
          }
        },
      }
    }
    var j = n("zd8w"),
      k = n("IDNd"),
      C = n("RU3e"),
      M = n("nAYi"),
      P = n("Bbed"),
      E = n("Q9a5"),
      D = n("bWX0")
    n("aXWg")
    var T = n("mQe5"),
      _ = n("Mqhc"),
      I = n("AG2W"),
      L = n("bnxy")
    let A = (0, P._)(
      async () => (await Promise.all([n.e(881954), n.e(257303)]).then(n.bind(n, "GbAr"))).PdfPreviewPanel,
      { fallback: (0, r.jsx)(h.Q, { kind: "document" }), errorFallback: ({ errorFallback: e }) => e },
    )
    function F(e) {
      let t,
        n,
        o,
        a = (0, l.c)(23),
        { bytes: i, contentKind: s, mimeType: u, path: d, errorFallback: c } = e
      if ("image" === s || "audio" === s || "video" === s) {
        let e
        return (
          a[0] !== i || a[1] !== s || a[2] !== c || a[3] !== u || a[4] !== d
            ? ((e = (0, r.jsx)(N, { bytes: i, contentKind: s, mimeType: u, path: d, errorFallback: c }, d)),
              (a[0] = i),
              (a[1] = s),
              (a[2] = c),
              (a[3] = u),
              (a[4] = d),
              (a[5] = e))
            : (e = a[5]),
          e
        )
      }
      if ("pdf" === s) {
        let e, t, n, l
        ;(a[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(h.Q, { kind: "document" })), (a[6] = e))
          : (e = a[6]),
          a[7] !== i ? ((t = (0, m.i)(i)), (a[7] = i), (a[8] = t)) : (t = a[8]))
        let o = `data:application/pdf;base64,${t}`
        return (
          a[9] !== o ? ((n = { dataUrl: o, isError: !1, isLoading: !1 }), (a[9] = o), (a[10] = n)) : (n = a[10]),
          a[11] !== c || a[12] !== d || a[13] !== n
            ? ((l = (0, r.jsx)("div", {
                className: "h-full overflow-auto bg-surface",
                children: (0, r.jsx)(A, { errorFallback: c, loadingFallback: e, preview: n }, d),
              })),
              (a[11] = c),
              (a[12] = d),
              (a[13] = n),
              (a[14] = l))
            : (l = a[14]),
          l
        )
      }
      if (0 !== i.length && "text" !== s) return c
      if (
        (a[15] !== i
          ? ((t = new TextDecoder().decode(i)),
            (n = i.length <= 131072 && (0, T.Xs)(t, 2001).length <= 2e3),
            (a[15] = i),
            (a[16] = t),
            (a[17] = n))
          : ((t = a[16]), (n = a[17])),
        n)
      ) {
        let e
        return (
          a[18] !== t || a[19] !== d
            ? ((e = (0, D.e$)(d)
                ? (0, r.jsx)("div", {
                    className: "h-full overflow-auto bg-surface",
                    children: (0, r.jsx)(I.S, { markdown: t }),
                  })
                : (0, r.jsx)(E.e, { path: d, contents: t })),
              (a[18] = t),
              (a[19] = d),
              (a[20] = e))
            : (e = a[20]),
          e
        )
      }
      return (
        a[21] !== t
          ? ((o = (0, r.jsx)("pre", {
              className:
                "h-full min-h-0 overflow-auto p-4 font-mono text-sm whitespace-pre-wrap text-default select-text",
              dir: "ltr",
              children: t,
            })),
            (a[21] = t),
            (a[22] = o))
          : (o = a[22]),
        o
      )
    }
    function N(e) {
      let t,
        n,
        o,
        a,
        s,
        u,
        d = (0, l.c)(20),
        { bytes: c, contentKind: f, mimeType: h, path: p, errorFallback: g } = e,
        v = (0, j.useContext)(k.Gc),
        x = (0, i.Ul)(C.PT),
        [w, b] = (0, j.useState)(!1)
      if (!v || !x) return null
      if (w || null == h) return g
      d[0] !== p ? ((t = (0, L.Q0)(p)), (d[0] = p), (d[1] = t)) : (t = d[1])
      let y = t
      d[2] !== c ? ((n = (0, m.i)(c)), (d[2] = c), (d[3] = n)) : (n = d[3])
      let S = `data:${h};base64,${n}`
      return (
        d[4] !== f || d[5] !== y || d[6] !== S
          ? ((o =
              "image" === f &&
              (0, r.jsx)("img", {
                alt: y,
                className: "max-h-full max-w-full object-contain",
                onError: () => b(!0),
                src: S,
              })),
            (d[4] = f),
            (d[5] = y),
            (d[6] = S),
            (d[7] = o))
          : (o = d[7]),
        d[8] !== f || d[9] !== y || d[10] !== S
          ? ((a =
              "audio" === f &&
              (0, r.jsx)(M.Y, { className: "max-w-lg", label: y, onError: () => b(!0), src: S, status: "ready" })),
            (d[8] = f),
            (d[9] = y),
            (d[10] = S),
            (d[11] = a))
          : (a = d[11]),
        d[12] !== f || d[13] !== y || d[14] !== S
          ? ((s =
              "video" === f &&
              (0, r.jsx)(_.MarkdownVideoPlayer, {
                allowWide: !0,
                label: y,
                onError: () => b(!0),
                sizing: "container",
                src: S,
              })),
            (d[12] = f),
            (d[13] = y),
            (d[14] = S),
            (d[15] = s))
          : (s = d[15]),
        d[16] !== o || d[17] !== a || d[18] !== s
          ? ((u = (0, r.jsxs)("div", {
              className: "flex h-full min-h-0 items-center justify-center overflow-auto p-4",
              children: [o, a, s],
            })),
            (d[16] = o),
            (d[17] = a),
            (d[18] = s),
            (d[19] = u))
          : (u = d[19]),
        u
      )
    }
    var R = n("oyxz"),
      V = n("HdSb"),
      z = n("gM8G"),
      B = n("kHmz"),
      K = n("CTmO")
    function H(e) {
      let t,
        n,
        o,
        a,
        i,
        s = (0, l.c)(18),
        { paths: u, selectedPath: d, onSelectMember: c } = e,
        [m, f] = (0, j.useState)("")
      s[0] !== m ? ((t = m.trim()), (s[0] = m), (s[1] = t)) : (t = s[1])
      let h = "" !== t
      s[2] !== h || s[3] !== u || s[4] !== m
        ? ((n = h ? (0, V.F)(u.map(W), m).map(Q) : u), (s[2] = h), (s[3] = u), (s[4] = m), (s[5] = n))
        : (n = s[5])
      let p = n
      return (
        s[6] !== m ? ((o = { searchQuery: m, onQueryChange: f }), (s[6] = m), (s[7] = o)) : (o = s[7]),
        s[8] !== h || s[9] !== p || s[10] !== c || s[11] !== u || s[12] !== m || s[13] !== d
          ? ((a =
              0 === p.length
                ? (0, r.jsx)("div", {
                    className: "px-2 py-2 text-start text-base text-codex-description",
                    children: h
                      ? (0, r.jsx)(R.A, {
                          id: "thread.fileTreePanel.noMatchingFiles",
                          defaultMessage: "No matching files",
                        })
                      : (0, r.jsx)(R.A, {
                          id: "threadSidePanel.workspaceBrowser.empty",
                          defaultMessage: "No files in this folder",
                        }),
                  })
                : (0, r.jsx)(z.BaseFileTree, {
                    cwd: null,
                    contextMenuEnabled: !1,
                    highlightTestFiles: !0,
                    initialExpandedPaths: u.filter((e) => e.endsWith("/") && (h || d?.startsWith(e))).map(O),
                    onSelectionChange: (e) => {
                      let t = e.find((e) => !e.endsWith("/") && u.includes(e))
                      null != t && c(t)
                    },
                    onDoubleClick: (e) => {
                      let t = (0, K.t)(e.nativeEvent)
                      null != t && u.includes(t) && c(t, { isPreview: !1 })
                    },
                    selectedPath: d,
                    revealSelectedPath: !0,
                    paths: p,
                    resetKey: m,
                  })),
            (s[8] = h),
            (s[9] = p),
            (s[10] = c),
            (s[11] = u),
            (s[12] = m),
            (s[13] = d),
            (s[14] = a))
          : (a = s[14]),
        s[15] !== o || s[16] !== a
          ? ((i = (0, r.jsx)(B.b, { search: o, children: a })), (s[15] = o), (s[16] = a), (s[17] = i))
          : (i = s[17]),
        i
      )
    }
    function O(e) {
      return e.slice(0, -1)
    }
    function Q(e) {
      let { displayPath: t } = e
      return t
    }
    function W(e) {
      return { displayPath: e }
    }
    function U(e) {
      let t,
        n,
        g,
        v,
        x,
        w,
        j,
        k,
        C,
        M,
        P,
        E = (0, l.c)(61),
        {
          hostId: D,
          environmentId: T,
          path: _,
          isHosted: I,
          mtimeMs: L,
          sizeBytes: A,
          errorFallback: N,
          memberPath: R,
          onSelectMember: V,
          renderPreview: z,
        } = e,
        B = (0, i.gh)(d.GD)
      E[0] !== B.value ? ((t = (0, d.Qm)(B.value) ?? void 0), (E[0] = B.value), (E[1] = t)) : (t = E[1])
      let K = t
      E[2] !== T || E[3] !== K
        ? ((n = { conversationId: K, environmentId: T }), (E[2] = T), (E[3] = K), (E[4] = n))
        : (n = E[4])
      let O = (0, i._U)(c.threadFileRequestContext$, n)
      E[5] !== O || E[6] !== T || E[7] !== D || E[8] !== _
        ? ((g = { ...O, hostId: D, environmentId: T, path: _, maxBytes: b }),
          (E[5] = O),
          (E[6] = T),
          (E[7] = D),
          (E[8] = _),
          (E[9] = g))
        : (g = E[9])
      let Q = g
      E[10] !== L || E[11] !== Q || E[12] !== A || E[13] !== K
        ? ((v = ["zip-directory", Q, K, L, A]), (E[10] = L), (E[11] = Q), (E[12] = A), (E[13] = K), (E[14] = v))
        : (v = E[14])
      let W = v
      ;(E[15] !== T || E[16] !== I || E[17] !== _ || E[18] !== Q || E[19] !== B || E[20] !== A || E[21] !== K
        ? ((x = async (e) => {
            let { signal: t } = e
            if (null != A && A > b) throw new y("too-large")
            if (I) return S(await (0, p.DI)(B, { environmentId: T, path: _, threadId: K }, b, t))
            let n = await (0, u.H9)(Q, t)
            if (n.tooLarge) throw new y("too-large")
            if (null == n.contentsBase64) throw Error("ZIP contents unavailable")
            return (t.throwIfAborted(), S((0, m.K)(n.contentsBase64)))
          }),
          (E[15] = T),
          (E[16] = I),
          (E[17] = _),
          (E[18] = Q),
          (E[19] = B),
          (E[20] = A),
          (E[21] = K),
          (E[22] = x))
        : (x = E[22]),
        E[23] !== W || E[24] !== x
          ? ((w = { queryKey: W, queryFn: x, gcTime: 0, retry: !1, staleTime: f.D.INFINITE }),
            (E[23] = W),
            (E[24] = x),
            (E[25] = w))
          : (w = E[25]))
      let { data: U, error: $, dataUpdatedAt: q } = (0, o.I)(w)
      ;(E[26] !== q || E[27] !== R || E[28] !== W
        ? ((j = ["zip-member", W, q, R]), (E[26] = q), (E[27] = R), (E[28] = W), (E[29] = j))
        : (j = E[29]),
        E[30] !== U || E[31] !== R
          ? ((k =
              null == U || null == R
                ? a.hT
                : async (e) => {
                    let { signal: t } = e,
                      n = await U.readFile(R, t),
                      r = n.subarray(0, 4096),
                      l = await (0, s.P)(r),
                      o = "image" === l || "audio" === l || "video" === l ? await (0, s.V)(r) : null
                    return { bytes: n, contentKind: l, mimeType: o }
                  }),
            (E[30] = U),
            (E[31] = R),
            (E[32] = k))
          : (k = E[32]),
        E[33] !== j || E[34] !== k
          ? ((C = { queryKey: j, queryFn: k, gcTime: 0, retry: !1, staleTime: f.D.INFINITE }),
            (E[33] = j),
            (E[34] = k),
            (E[35] = C))
          : (C = E[35]))
      let { data: G, error: Y } = (0, o.I)(C),
        Z = R ?? ""
      if (
        (E[36] !== U?.paths ? ((M = U?.paths ?? []), (E[36] = U?.paths), (E[37] = M)) : (M = E[37]),
        E[38] !== U ||
          E[39] !== q ||
          E[40] !== $ ||
          E[41] !== N ||
          E[42] !== G ||
          E[43] !== Y ||
          E[44] !== R ||
          E[45] !== V ||
          E[46] !== z ||
          E[47] !== Z ||
          E[48] !== M)
      ) {
        let e,
          t = { path: Z, paths: M, onSelectFile: V }
        E[50] !== U || E[51] !== R || E[52] !== V
          ? ((e = null == U ? null : (0, r.jsx)(H, { paths: U.paths, selectedPath: R, onSelectMember: V })),
            (E[50] = U),
            (E[51] = R),
            (E[52] = V),
            (E[53] = e))
          : (e = E[53])
        let n = e,
          l = null
        if (null != $ || null != Y) l = N
        else if (null == U || (null != R && null == G)) {
          let e,
            t = null == U ? "document" : "code"
          ;(E[54] !== t ? ((e = (0, r.jsx)(h.Q, { kind: t })), (E[54] = t), (E[55] = e)) : (e = E[55]), (l = e))
        } else if (null != R && null != G) {
          let e,
            t = `${R}:${q}`
          ;(E[56] !== N || E[57] !== G || E[58] !== R || E[59] !== t
            ? ((e = (0, r.jsx)(F, { path: R, ...G, errorFallback: N }, t)),
              (E[56] = N),
              (E[57] = G),
              (E[58] = R),
              (E[59] = t),
              (E[60] = e))
            : (e = E[60]),
            (l = e))
        }
        ;((P = z(l, t, n)),
          (E[38] = U),
          (E[39] = q),
          (E[40] = $),
          (E[41] = N),
          (E[42] = G),
          (E[43] = Y),
          (E[44] = R),
          (E[45] = V),
          (E[46] = z),
          (E[47] = Z),
          (E[48] = M),
          (E[49] = P))
      } else P = E[49]
      return P
    }
  },
  Mqhc(e, t, n) {
    n.d(t, { MarkdownVideoPlayer: () => j })
    var r = n("ABep"),
      l = n("QosV"),
      o = n("slpy"),
      a = n("y5If"),
      i = n("gObc"),
      s = n("zlDi"),
      u = n("YAOF"),
      d = n("on57"),
      c = n("zd8w"),
      m = n("Wf1j"),
      f = n("oyxz"),
      h = n("Sm6l"),
      p = n("bqtn"),
      g = n("HOLv"),
      v = n("bVeK"),
      x = n("nzx4"),
      w = n("aepO"),
      b = n("S7UD"),
      y = n("HgLj"),
      S = n("dCE2")
    function j(e) {
      let t,
        n,
        o,
        u,
        h,
        j,
        E,
        D,
        T,
        _,
        I,
        L,
        A,
        F,
        N,
        R,
        V,
        z,
        B,
        K,
        H,
        O,
        Q,
        W,
        U,
        $,
        q,
        G,
        Y,
        Z,
        X,
        J,
        ee,
        et,
        en,
        er,
        el,
        eo,
        ea,
        ei,
        es,
        eu,
        ed,
        ec,
        em,
        ef,
        eh,
        ep,
        eg,
        ev,
        ex,
        ew,
        eb,
        ey,
        eS,
        ej,
        ek,
        eC,
        eM,
        eP,
        eE,
        eD,
        eT,
        e_,
        eI,
        eL,
        eA,
        eF,
        eN,
        eR,
        eV,
        ez,
        eB,
        eK,
        eH,
        eO,
        eQ,
        eW,
        eU = (0, l.c)(232),
        {
          ref: e$,
          allowWide: eq,
          allowFullscreen: eG,
          autoPlay: eY,
          className: eZ,
          defaultMuted: eX,
          durationHint: eJ,
          height: e1,
          label: e0,
          onDurationChange: e2,
          onError: e3,
          onExpand: e6,
          onLoadedMetadata: e5,
          onLoadedData: e4,
          onPlaying: e9,
          onResize: e7,
          onSaveCopy: e8,
          presentation: te,
          poster: tt,
          preload: tn,
          previewPlaceholder: tr,
          previewLoading: tl,
          sizing: to,
          src: ta,
          sourceUrl: ti,
          title: ts,
          transparentBackground: tu,
          videoStyle: td,
          width: tc,
        } = e,
        tm = void 0 === eG || eG,
        tf = void 0 === eJ ? 0 : eJ,
        th = void 0 === te ? "below" : te,
        tp = void 0 === tn ? "metadata" : tn,
        tg = void 0 !== tu && tu,
        tv = "content" === to ? (ti ?? ta) : void 0
      eU[0] !== tv || eU[1] !== e1 || eU[2] !== tc
        ? ((t = null == tc && null == e1 ? (0, S.I3)(tv) : void 0),
          (eU[0] = tv),
          (eU[1] = e1),
          (eU[2] = tc),
          (eU[3] = t))
        : (t = eU[3])
      let tx = t,
        tw = (0, m.A)(),
        tb = (0, c.useRef)(null),
        ty = (0, c.useRef)(null),
        [tS, tj] = (0, c.useState)(null),
        [tk, tC] = (0, c.useState)(!1),
        [tM, tP] = (0, c.useState)(0),
        [tE, tD] = (0, c.useState)(0),
        [tT, t_] = (0, c.useState)(!1),
        [tI, tL] = (0, c.useState)(1),
        [tA, tF] = (0, c.useState)(void 0 !== eX && eX),
        [tN, tR] = (0, c.useState)(1),
        [tV, tz] = (0, c.useState)(!1),
        [tB, tK] = (0, c.useState)(!1),
        [tH, tO] = (0, c.useState)(!1),
        [tQ, tW] = (0, c.useState)(!1),
        tU = (0, b.ax)(ta) ? ta : void 0,
        t$ = (0, c.useEffectEvent)(e3)
      ;(eU[4] !== tU || eU[5] !== t$
        ? ((n = () => {
            let e = tb.current
            if (null != e && null != tU) return (0, b.Kr)(e, tU, () => t$(e))
          }),
          (eU[4] = tU),
          (eU[5] = t$),
          (eU[6] = n))
        : (n = eU[6]),
        eU[7] !== tU ? ((o = [tU]), (eU[7] = tU), (eU[8] = o)) : (o = eU[8]),
        (0, c.useEffect)(n, o),
        eU[9] !== tS
          ? ((u = () => {
              if (null == tS) return
              let e = tS.ownerDocument,
                t = () => {
                  ;(tC(e.fullscreenElement === tS), e.fullscreenElement === tS && tb.current?.focus())
                }
              return (e.addEventListener("fullscreenchange", t), () => e.removeEventListener("fullscreenchange", t))
            }),
            (h = [tS]),
            (eU[9] = tS),
            (eU[10] = u),
            (eU[11] = h))
          : ((u = eU[10]), (h = eU[11])),
        (0, c.useEffect)(u, h),
        eU[12] !== tQ || eU[13] !== tT || eU[14] !== tS || eU[15] !== th
          ? ((j = () => {
              if (null == tS || "overlay" !== th || !tT || tQ) return
              let e = window.setTimeout(() => tO(!0), 2500),
                t = () => {
                  ;(tO(!1), window.clearTimeout(e), (e = window.setTimeout(() => tO(!0), 2500)))
                }
              return (
                tS.addEventListener("pointermove", t),
                tS.addEventListener("pointerdown", t),
                tS.addEventListener("keydown", t),
                () => {
                  ;(window.clearTimeout(e),
                    tS.removeEventListener("pointermove", t),
                    tS.removeEventListener("pointerdown", t),
                    tS.removeEventListener("keydown", t))
                }
              )
            }),
            (E = [tS, th, tT, tQ]),
            (eU[12] = tQ),
            (eU[13] = tT),
            (eU[14] = tS),
            (eU[15] = th),
            (eU[16] = j),
            (eU[17] = E))
          : ((j = eU[16]), (E = eU[17])),
        (0, c.useEffect)(j, E),
        eU[18] !== tf ? ((D = Number.isFinite(tf) ? Math.max(0, tf) : 0), (eU[18] = tf), (eU[19] = D)) : (D = eU[19]))
      let tq = D
      eU[20] !== tM || eU[21] !== tq || eU[22] !== tE || eU[23] !== tw
        ? ((T = tw.formatMessage(
            { id: "markdown.video.progress", defaultMessage: "{currentTime} / {duration}" },
            { currentTime: P(tM), duration: P(tE || tq) },
          )),
          (eU[20] = tM),
          (eU[21] = tq),
          (eU[22] = tE),
          (eU[23] = tw),
          (eU[24] = T))
        : (T = eU[24])
      let tG = T
      eU[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = () => {
            let e = tb.current
            null != e && (tz(!1), e.paused ? e.play().catch(() => tz(!0)) : e.pause())
          }),
          (eU[25] = _))
        : (_ = eU[25])
      let tY = _
      eU[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = (e) => {
            let t = ty.current
            if (null == t || t.pointerId !== e.pointerId) return
            ty.current = null
            let n = tb.current
            t.wasPlaying && null != n && (tz(!1), n.play().catch(() => tz(!0)))
          }),
          (eU[26] = I))
        : (I = eU[26])
      let tZ = I
      eU[27] !== e6 || eU[28] !== tS
        ? ((L = () => {
            null != e6 && null != tb.current
              ? e6(tb.current)
              : null == tS ||
                (tz(!1),
                (tS.ownerDocument.fullscreenElement === tS
                  ? tS.ownerDocument.exitFullscreen()
                  : tS.requestFullscreen()
                ).catch(() => tz(!0)))
          }),
          (eU[27] = e6),
          (eU[28] = tS),
          (eU[29] = L))
        : (L = eU[29])
      let tX = L
      eU[30] !== tw || eU[31] !== tT
        ? ((A = tT
            ? tw.formatMessage({ id: "markdown.video.pause", defaultMessage: "Pause video" })
            : tw.formatMessage({ id: "markdown.video.play", defaultMessage: "Play video" })),
          (eU[30] = tw),
          (eU[31] = tT),
          (eU[32] = A))
        : (A = eU[32])
      let tJ = A
      eU[33] !== tw || eU[34] !== tk
        ? ((F = tk
            ? tw.formatMessage({ id: "markdown.video.exitFullscreen", defaultMessage: "Exit fullscreen" })
            : tw.formatMessage({ id: "markdown.video.fullscreen", defaultMessage: "Fullscreen" })),
          (eU[33] = tw),
          (eU[34] = tk),
          (eU[35] = F))
        : (F = eU[35])
      let t1 = F
      eU[36] !== tx || eU[37] !== tk
        ? ((N = tx && !tk ? { width: tx.width } : void 0), (eU[36] = tx), (eU[37] = tk), (eU[38] = N))
        : (N = eU[38])
      let t0 = "overlay" === th && "overlay-k_Dc2T",
        t2 = "overlay" === th ? "relative aspect-video rounded-md" : "bg-surface",
        t3 = "overlay" === th && !tg && "bg-media-background",
        t6 = "container" === to ? "size-full" : "my-3 w-fit rounded-md shadow-md",
        t5 =
          "content" === to &&
          (eq
            ? "max-h-[var(--markdown-wide-block-max-height)] max-w-full"
            : "max-h-[min(48vh,32rem)] max-w-[min(100%,44rem)]")
      eU[39] !== eZ || eU[40] !== t0 || eU[41] !== t2 || eU[42] !== t3 || eU[43] !== t6 || eU[44] !== t5
        ? ((R = (0, d.A)("player-W1zENa", t0, "flex min-h-0 min-w-0 flex-col overflow-hidden", t2, t3, t6, t5, eZ)),
          (eU[39] = eZ),
          (eU[40] = t0),
          (eU[41] = t2),
          (eU[42] = t3),
          (eU[43] = t6),
          (eU[44] = t5),
          (eU[45] = R))
        : (R = eU[45])
      let t4 = "overlay" !== th || tg ? void 0 : "dark",
        t9 = tl || void 0,
        t7 = (tT && tH && !tQ && !tV) || void 0
      ;(eU[46] !== tQ || eU[47] !== tX
        ? ((V = (e) => {
            "Escape" !== e.key ||
              tQ ||
              e.currentTarget.ownerDocument.fullscreenElement !== e.currentTarget ||
              (e.preventDefault(), e.stopPropagation(), tX())
          }),
          (eU[46] = tQ),
          (eU[47] = tX),
          (eU[48] = V))
        : (V = eU[48]),
        eU[49] !== e$
          ? ((z = (0, y.P)((e) => {
              if (((tb.current = e), null != e)) {
                let t = e.duration
                tD(Number.isFinite(t) && t > 0 ? t : 0)
              }
            }, e$)),
            (eU[49] = e$),
            (eU[50] = z))
          : (z = eU[50]))
      let t8 = null == tU ? ta : void 0,
        ne = tc ?? tx?.width,
        nt = e1 ?? tx?.height,
        nn = "overlay" === th
      ;(eU[51] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = (e) => {
            ;(" " === e.key || "Enter" === e.key) && (e.preventDefault(), e.repeat || tY())
          }),
          (eU[51] = B))
        : (B = eU[51]),
        eU[52] !== e2
          ? ((K = (e) => {
              let t = e.currentTarget.duration
              ;(tD(Number.isFinite(t) && t > 0 ? t : 0), e2?.(e.currentTarget))
            }),
            (eU[52] = e2),
            (eU[53] = K))
          : (K = eU[53]),
        eU[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = (e) => {
              tP(e.currentTarget.currentTime)
            }),
            (O = () => {
              ;(tO(!1), t_(!0), tz(!1))
            }),
            (eU[54] = H),
            (eU[55] = O))
          : ((H = eU[54]), (O = eU[55])),
        eU[56] !== e9 ? ((Q = (e) => e9?.(e.currentTarget)), (eU[56] = e9), (eU[57] = Q)) : (Q = eU[57]),
        eU[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((W = () => t_(!1)),
            (U = () => t_(!1)),
            ($ = (e) => {
              ;(tL(e.currentTarget.volume), tF(e.currentTarget.muted))
            }),
            (q = (e) => tR(e.currentTarget.playbackRate)),
            (eU[58] = W),
            (eU[59] = U),
            (eU[60] = $),
            (eU[61] = q))
          : ((W = eU[58]), (U = eU[59]), ($ = eU[60]), (q = eU[61])),
        eU[62] !== e3 ? ((G = (e) => e3(e.currentTarget)), (eU[62] = e3), (eU[63] = G)) : (G = eU[63]),
        eU[64] !== e7 ? ((Y = (e) => e7?.(e.currentTarget)), (eU[64] = e7), (eU[65] = Y)) : (Y = eU[65]),
        eU[66] !== tv || eU[67] !== e5
          ? ((Z = (e) => {
              let { currentTarget: t } = e
              ;((0, S.by)(tv, t.videoWidth, t.videoHeight), e5?.(t))
            }),
            (eU[66] = tv),
            (eU[67] = e5),
            (eU[68] = Z))
          : (Z = eU[68]),
        eU[69] !== e4 ? ((X = (e) => e4?.(e.currentTarget)), (eU[69] = e4), (eU[70] = X)) : (X = eU[70]),
        eU[71] !== eY ||
        eU[72] !== e0 ||
        eU[73] !== tA ||
        eU[74] !== tt ||
        eU[75] !== tp ||
        eU[76] !== z ||
        eU[77] !== t8 ||
        eU[78] !== ne ||
        eU[79] !== nt ||
        eU[80] !== nn ||
        eU[81] !== K ||
        eU[82] !== Q ||
        eU[83] !== G ||
        eU[84] !== Y ||
        eU[85] !== Z ||
        eU[86] !== X ||
        eU[87] !== ts ||
        eU[88] !== td
          ? ((J = (0, r.jsx)("video", {
              ref: z,
              className:
                "block min-h-0 w-full flex-1 cursor-interaction object-contain focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
              src: t8,
              title: ts,
              style: td,
              width: ne,
              height: nt,
              "aria-label": e0,
              tabIndex: 0,
              disablePictureInPicture: nn,
              autoPlay: eY,
              muted: tA,
              playsInline: !0,
              poster: tt,
              preload: tp,
              onClick: tY,
              onKeyDown: B,
              onDurationChange: K,
              onTimeUpdate: H,
              onPlay: O,
              onPlaying: Q,
              onPause: W,
              onEnded: U,
              onVolumeChange: $,
              onRateChange: q,
              onError: G,
              onResize: Y,
              onLoadedMetadata: Z,
              onLoadedData: X,
            })),
            (eU[71] = eY),
            (eU[72] = e0),
            (eU[73] = tA),
            (eU[74] = tt),
            (eU[75] = tp),
            (eU[76] = z),
            (eU[77] = t8),
            (eU[78] = ne),
            (eU[79] = nt),
            (eU[80] = nn),
            (eU[81] = K),
            (eU[82] = Q),
            (eU[83] = G),
            (eU[84] = Y),
            (eU[85] = Z),
            (eU[86] = X),
            (eU[87] = ts),
            (eU[88] = td),
            (eU[89] = J))
          : (J = eU[89]),
        eU[90] !== tk || eU[91] !== tT || eU[92] !== tJ || eU[93] !== tS || eU[94] !== th
          ? ((ee =
              "overlay" !== th || tT
                ? null
                : (0, r.jsx)(C, {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    color: "mediaOverlay",
                    portalContainer: tk ? tS : void 0,
                    label: tJ,
                    onClick: tY,
                    children: (0, r.jsx)(g.I, { asset: s.k }),
                  })),
            (eU[90] = tk),
            (eU[91] = tT),
            (eU[92] = tJ),
            (eU[93] = tS),
            (eU[94] = th),
            (eU[95] = ee))
          : (ee = eU[95]))
      let nr = "overlay" === th && tg ? "dark" : void 0,
        nl =
          "overlay" === th
            ? "absolute inset-x-0 bottom-0 bg-media-background/80 text-media-foreground"
            : "border-t border-subtle"
      eU[96] !== nl
        ? ((et = (0, d.A)("controls-aun7ma", "@container/video-controls shrink-0 select-none", nl)),
          (eU[96] = nl),
          (eU[97] = et))
        : (et = eU[97])
      let no = tk ? tS : void 0,
        na = tT ? i.F : s.k
      ;(eU[98] !== na ? ((en = (0, r.jsx)(g.I, { asset: na })), (eU[98] = na), (eU[99] = en)) : (en = eU[99]),
        eU[100] !== tJ || eU[101] !== no || eU[102] !== en
          ? ((er = (0, r.jsx)(C, { portalContainer: no, label: tJ, onClick: tY, children: en })),
            (eU[100] = tJ),
            (eU[101] = no),
            (eU[102] = en),
            (eU[103] = er))
          : (er = eU[103]),
        eU[104] !== tw
          ? ((el = tw.formatMessage({ id: "markdown.video.seek", defaultMessage: "Seek in video" })),
            (eU[104] = tw),
            (eU[105] = el))
          : (el = eU[105]))
      let ni = tE <= 0,
        ns = tE || 1,
        nu = Math.min(tM, tE)
      ;(eU[106] !== nu ? ((eo = [nu]), (eU[106] = nu), (eU[107] = eo)) : (eo = eU[107]),
        eU[108] !== tE || eU[109] !== th
          ? ((ea = (e) => {
              let t = tb.current
              "overlay" === th &&
                tE > 0 &&
                null != t &&
                ("ArrowRight" === e.key || "ArrowLeft" === e.key) &&
                (e.preventDefault(),
                (t.currentTime = Math.max(0, Math.min(tE, t.currentTime + ("ArrowRight" === e.key ? 5 : -5)))),
                tP(t.currentTime))
            }),
            (eU[108] = tE),
            (eU[109] = th),
            (eU[110] = ea))
          : (ea = eU[110]),
        eU[111] !== tE
          ? ((ei = (e) => {
              let t = tb.current
              null == t ||
                tE <= 0 ||
                0 !== e.button ||
                null != ty.current ||
                ((ty.current = { pointerId: e.pointerId, wasPlaying: !t.paused }), t.pause())
            }),
            (eU[111] = tE),
            (eU[112] = ei))
          : (ei = eU[112]),
        eU[113] === Symbol.for("react.memo_cache_sentinel")
          ? ((es = (e) => {
              let [t] = e,
                n = tb.current
              null != n && null != t && ((n.currentTime = t), tP(n.currentTime))
            }),
            (eU[113] = es))
          : (es = eU[113]),
        eU[114] !== tG ||
        eU[115] !== el ||
        eU[116] !== ni ||
        eU[117] !== ns ||
        eU[118] !== eo ||
        eU[119] !== ea ||
        eU[120] !== ei
          ? ((eu = (0, r.jsx)("span", {
              className: "flex min-w-0 flex-1 @max-xs/video-controls:order-first @max-xs/video-controls:basis-full",
              children: (0, r.jsx)(M, {
                label: el,
                valueText: tG,
                disabled: ni,
                min: 0,
                max: ns,
                step: 0.1,
                value: eo,
                onKeyDown: ea,
                onPointerDownCapture: ei,
                onPointerUp: tZ,
                onPointerCancel: tZ,
                onLostPointerCapture: tZ,
                onValueChange: es,
              }),
            })),
            (eU[114] = tG),
            (eU[115] = el),
            (eU[116] = ni),
            (eU[117] = ns),
            (eU[118] = eo),
            (eU[119] = ea),
            (eU[120] = ei),
            (eU[121] = eu))
          : (eu = eU[121]),
        eU[122] !== tG
          ? ((ed = (0, r.jsx)("span", {
              className: "shrink-0 text-xs whitespace-nowrap text-secondary tabular-nums",
              children: tG,
            })),
            (eU[122] = tG),
            (eU[123] = ed))
          : (ed = eU[123]),
        eU[124] === Symbol.for("react.memo_cache_sentinel")
          ? ((ec = (e) => {
              ;(tO(!1), tW(e))
            }),
            (eU[124] = ec))
          : (ec = eU[124]))
      let nd = tk ? tS : void 0
      ;(eU[125] !== tw
        ? ((em = tw.formatMessage({ id: "markdown.video.volume", defaultMessage: "Video volume" })),
          (eU[125] = tw),
          (eU[126] = em))
        : (em = eU[126]),
        eU[127] !== tA || eU[128] !== tI
          ? ((ef = tA || 0 === tI ? (0, r.jsx)(v.sbY, {}) : (0, r.jsx)(v.BOJ, {})),
            (eU[127] = tA),
            (eU[128] = tI),
            (eU[129] = ef))
          : (ef = eU[129]),
        eU[130] !== nd || eU[131] !== em || eU[132] !== ef
          ? ((eh = (0, r.jsx)(x.Wv, {
              asChild: !0,
              children: (0, r.jsx)(C, { portalContainer: nd, label: em, children: ef }),
            })),
            (eU[130] = nd),
            (eU[131] = em),
            (eU[132] = ef),
            (eU[133] = eh))
          : (eh = eU[133]))
      let nc = tk ? tS : void 0
      eU[134] !== tw
        ? ((ep = tw.formatMessage({ id: "markdown.video.volume", defaultMessage: "Video volume" })),
          (eU[134] = tw),
          (eU[135] = ep))
        : (ep = eU[135])
      let nm = tk ? tS : void 0
      ;(eU[136] !== tw
        ? ((eg = tw.formatMessage({ id: "markdown.video.mute", defaultMessage: "Mute video" })),
          (eU[136] = tw),
          (eU[137] = eg))
        : (eg = eU[137]),
        eU[138] === Symbol.for("react.memo_cache_sentinel")
          ? ((ev = () => {
              let e = tb.current
              null != e && (e.muted = !e.muted)
            }),
            (eU[138] = ev))
          : (ev = eU[138]),
        eU[139] !== tA || eU[140] !== tI
          ? ((ex = tA || 0 === tI ? (0, r.jsx)(v.sbY, {}) : (0, r.jsx)(v.BOJ, {})),
            (eU[139] = tA),
            (eU[140] = tI),
            (eU[141] = ex))
          : (ex = eU[141]),
        eU[142] !== tA || eU[143] !== nm || eU[144] !== eg || eU[145] !== ex
          ? ((ew = (0, r.jsx)(C, { portalContainer: nm, label: eg, "aria-pressed": tA, onClick: ev, children: ex })),
            (eU[142] = tA),
            (eU[143] = nm),
            (eU[144] = eg),
            (eU[145] = ex),
            (eU[146] = ew))
          : (ew = eU[146]),
        eU[147] !== tw
          ? ((eb = tw.formatMessage({ id: "markdown.video.volume", defaultMessage: "Video volume" })),
            (eU[147] = tw),
            (eU[148] = eb))
          : (eb = eU[148]),
        eU[149] !== tw || eU[150] !== tA || eU[151] !== tI
          ? ((ey = tw.formatNumber(tA ? 0 : tI, { style: "percent" })),
            (eU[149] = tw),
            (eU[150] = tA),
            (eU[151] = tI),
            (eU[152] = ey))
          : (ey = eU[152]))
      let nf = tA ? 0 : tI
      ;(eU[153] !== nf ? ((eS = [nf]), (eU[153] = nf), (eU[154] = eS)) : (eS = eU[154]),
        eU[155] === Symbol.for("react.memo_cache_sentinel")
          ? ((ej = (e) => {
              let [t] = e,
                n = tb.current
              null != n && null != t && ((n.volume = t), (n.muted = !1))
            }),
            (eU[155] = ej))
          : (ej = eU[155]),
        eU[156] !== eb || eU[157] !== ey || eU[158] !== eS
          ? ((ek = (0, r.jsx)(M, {
              label: eb,
              valueText: ey,
              min: 0,
              max: 1,
              step: 0.01,
              value: eS,
              onValueChange: ej,
            })),
            (eU[156] = eb),
            (eU[157] = ey),
            (eU[158] = eS),
            (eU[159] = ek))
          : (ek = eU[159]),
        eU[160] !== ew || eU[161] !== ek
          ? ((eC = (0, r.jsxs)("span", { className: "flex w-40 items-center gap-2", children: [ew, ek] })),
            (eU[160] = ew),
            (eU[161] = ek),
            (eU[162] = eC))
          : (eC = eU[162]),
        eU[163] !== nc || eU[164] !== ep || eU[165] !== eC
          ? ((eM = (0, r.jsx)(x.hl, {
              align: "end",
              side: "bottom",
              size: "content",
              variant: "menu",
              portalContainer: nc,
              "aria-label": ep,
              children: eC,
            })),
            (eU[163] = nc),
            (eU[164] = ep),
            (eU[165] = eC),
            (eU[166] = eM))
          : (eM = eU[166]),
        eU[167] !== eh || eU[168] !== eM
          ? ((eP = (0, r.jsxs)(x.AM, { onOpenChange: ec, children: [eh, eM] })),
            (eU[167] = eh),
            (eU[168] = eM),
            (eU[169] = eP))
          : (eP = eU[169]))
      let nh = tk ? tS : void 0
      eU[170] === Symbol.for("react.memo_cache_sentinel")
        ? ((eE = (e) => {
            ;(tO(!1), tW(e), e || tK(!1))
          }),
          (eU[170] = eE))
        : (eE = eU[170])
      let np = tk ? tS : void 0
      ;(eU[171] !== tw
        ? ((eD = tw.formatMessage({ id: "markdown.video.options", defaultMessage: "Video options" })),
          (eU[171] = tw),
          (eU[172] = eD))
        : (eD = eU[172]),
        eU[173] === Symbol.for("react.memo_cache_sentinel")
          ? ((eT = (0, r.jsx)(v.l0Y, {})), (eU[173] = eT))
          : (eT = eU[173]),
        eU[174] !== np || eU[175] !== eD
          ? ((e_ = (0, r.jsx)(C, { portalContainer: np, label: eD, children: eT })),
            (eU[174] = np),
            (eU[175] = eD),
            (eU[176] = e_))
          : (e_ = eU[176]),
        eU[177] !== e8
          ? ((eI =
              null != e8
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(p.ms.Item, {
                        onSelect: () => {
                          ;(tz(!1), e8().catch(() => tz(!0)))
                        },
                        children: (0, r.jsx)(f.A, {
                          id: "markdown.video.saveCopy",
                          defaultMessage: "Save video as\u2026",
                        }),
                      }),
                      (0, r.jsx)(p.ms.Separator, {}),
                    ],
                  })
                : null),
            (eU[177] = e8),
            (eU[178] = eI))
          : (eI = eU[178]),
        eU[179] !== tB || eU[180] !== ti
          ? ((eL =
              null != ti
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(p.ms.Item, {
                        onSelect: (e) => {
                          ;(e.preventDefault(), (0, w.lW)(ti).then(tK))
                        },
                        children: tB
                          ? (0, r.jsx)(f.A, { id: "markdown.video.linkCopied", defaultMessage: "Link copied" })
                          : (0, r.jsx)(f.A, { id: "markdown.video.copyLink", defaultMessage: "Copy link" }),
                      }),
                      (0, r.jsx)(p.ms.Separator, {}),
                    ],
                  })
                : null),
            (eU[179] = tB),
            (eU[180] = ti),
            (eU[181] = eL))
          : (eL = eU[181]),
        eU[182] === Symbol.for("react.memo_cache_sentinel")
          ? ((eA = (0, r.jsx)(p.ms.SectionLabel, {
              children: (0, r.jsx)(f.A, { id: "markdown.video.speed", defaultMessage: "Playback speed" }),
            })),
            (eU[182] = eA))
          : (eA = eU[182]))
      let ng = String(tN)
      return (
        eU[183] === Symbol.for("react.memo_cache_sentinel")
          ? ((eF = (e) => {
              let t = tb.current
              null != t && (t.playbackRate = Number(e))
            }),
            (eN = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map(k)),
            (eU[183] = eF),
            (eU[184] = eN))
          : ((eF = eU[183]), (eN = eU[184])),
        eU[185] !== ng
          ? ((eR = (0, r.jsx)(p.ms.RadioGroup, { value: ng, onValueChange: eF, children: eN })),
            (eU[185] = ng),
            (eU[186] = eR))
          : (eR = eU[186]),
        eU[187] !== tS || eU[188] !== th
          ? ((eV =
              "overlay" !== th && tS?.ownerDocument.pictureInPictureEnabled
                ? (0, r.jsx)(p.ms.Item, {
                    onSelect: () => {
                      let e = tb.current
                      null == e ||
                        (tz(!1),
                        (e.ownerDocument.pictureInPictureElement === e
                          ? e.ownerDocument.exitPictureInPicture()
                          : e.requestPictureInPicture()
                        ).catch(() => tz(!0)))
                    },
                    children: (0, r.jsx)(f.A, {
                      id: "markdown.video.pictureInPicture",
                      defaultMessage: "Picture in picture",
                    }),
                  })
                : null),
            (eU[187] = tS),
            (eU[188] = th),
            (eU[189] = eV))
          : (eV = eU[189]),
        eU[190] !== eR || eU[191] !== eV || eU[192] !== nh || eU[193] !== e_ || eU[194] !== eI || eU[195] !== eL
          ? ((ez = (0, r.jsxs)(p.Ab, {
              align: "end",
              portalContainer: nh,
              onOpenChange: eE,
              triggerButton: e_,
              children: [eI, eL, eA, eR, eV],
            })),
            (eU[190] = eR),
            (eU[191] = eV),
            (eU[192] = nh),
            (eU[193] = e_),
            (eU[194] = eI),
            (eU[195] = eL),
            (eU[196] = ez))
          : (ez = eU[196]),
        eU[197] !== tm ||
        eU[198] !== t1 ||
        eU[199] !== tw ||
        eU[200] !== tk ||
        eU[201] !== e6 ||
        eU[202] !== tS ||
        eU[203] !== tX
          ? ((eB =
              null != e6 || (tm && tS?.ownerDocument.fullscreenEnabled)
                ? (0, r.jsx)(C, {
                    portalContainer: tk ? tS : void 0,
                    label:
                      null != e6
                        ? tw.formatMessage({ id: "markdown.video.expand", defaultMessage: "Expand video" })
                        : t1,
                    onClick: tX,
                    children: tk ? (0, r.jsx)(g.I, { asset: a.i }) : (0, r.jsx)(v.Zdv, {}),
                  })
                : null),
            (eU[197] = tm),
            (eU[198] = t1),
            (eU[199] = tw),
            (eU[200] = tk),
            (eU[201] = e6),
            (eU[202] = tS),
            (eU[203] = tX),
            (eU[204] = eB))
          : (eB = eU[204]),
        eU[205] !== ez || eU[206] !== eB || eU[207] !== eP
          ? ((eK = (0, r.jsxs)("span", {
              className: "ms-auto flex shrink-0 items-center gap-1.5",
              children: [eP, ez, eB],
            })),
            (eU[205] = ez),
            (eU[206] = eB),
            (eU[207] = eP),
            (eU[208] = eK))
          : (eK = eU[208]),
        eU[209] !== eK || eU[210] !== er || eU[211] !== eu || eU[212] !== ed
          ? ((eH = (0, r.jsxs)("span", {
              className:
                "flex h-toolbar-pane flex-wrap items-center gap-x-2 px-2 @max-xs/video-controls:h-auto @max-xs/video-controls:py-1",
              children: [er, eu, ed, eK],
            })),
            (eU[209] = eK),
            (eU[210] = er),
            (eU[211] = eu),
            (eU[212] = ed),
            (eU[213] = eH))
          : (eH = eU[213]),
        eU[214] !== tV
          ? ((eO = tV
              ? (0, r.jsx)("span", {
                  role: "status",
                  className: "block px-2 pb-2 text-xs text-secondary",
                  children: (0, r.jsx)(f.A, {
                    id: "markdown.video.actionFailed",
                    defaultMessage: "Could not complete this video action. Try again",
                  }),
                })
              : null),
            (eU[214] = tV),
            (eU[215] = eO))
          : (eO = eU[215]),
        eU[216] !== eH || eU[217] !== eO || eU[218] !== nr || eU[219] !== et
          ? ((eQ = (0, r.jsxs)("span", { "data-theme": nr, className: et, children: [eH, eO] })),
            (eU[216] = eH),
            (eU[217] = eO),
            (eU[218] = nr),
            (eU[219] = et),
            (eU[220] = eQ))
          : (eQ = eU[220]),
        eU[221] !== tr ||
        eU[222] !== eQ ||
        eU[223] !== N ||
        eU[224] !== R ||
        eU[225] !== t4 ||
        eU[226] !== t9 ||
        eU[227] !== t7 ||
        eU[228] !== V ||
        eU[229] !== J ||
        eU[230] !== ee
          ? ((eW = (0, r.jsxs)("span", {
              ref: tj,
              style: N,
              className: R,
              "data-markdown-copy": "exclude",
              "data-theme": t4,
              "aria-busy": t9,
              "data-controls-hidden": t7,
              onKeyDownCapture: V,
              children: [J, tr, ee, eQ],
            })),
            (eU[221] = tr),
            (eU[222] = eQ),
            (eU[223] = N),
            (eU[224] = R),
            (eU[225] = t4),
            (eU[226] = t9),
            (eU[227] = t7),
            (eU[228] = V),
            (eU[229] = J),
            (eU[230] = ee),
            (eU[231] = eW))
          : (eW = eU[231]),
        eW
      )
    }
    function k(e) {
      return (0, r.jsx)(
        p.ms.RadioItem,
        {
          value: String(e),
          children: (0, r.jsx)(f.A, {
            id: "markdown.video.speedValue",
            defaultMessage: "{rate, number}\xd7",
            values: { rate: e },
          }),
        },
        e,
      )
    }
    function C(e) {
      let t,
        n,
        a,
        i,
        s,
        u = (0, l.c)(11)
      return (
        u[0] !== e
          ? (({ label: t, portalContainer: n, ...a } = e), (u[0] = e), (u[1] = t), (u[2] = n), (u[3] = a))
          : ((t = u[1]), (n = u[2]), (a = u[3])),
        u[4] !== t || u[5] !== a
          ? ((i = (0, r.jsx)(h.$, { color: "ghostSecondary", size: "toolbar", uniform: !0, "aria-label": t, ...a })),
            (u[4] = t),
            (u[5] = a),
            (u[6] = i))
          : (i = u[6]),
        u[7] !== t || u[8] !== n || u[9] !== i
          ? ((s = (0, r.jsx)(o.m, { content: t, portalContainer: n, children: i })),
            (u[7] = t),
            (u[8] = n),
            (u[9] = i),
            (u[10] = s))
          : (s = u[10]),
        s
      )
    }
    function M(e) {
      let t,
        n,
        o,
        a,
        i,
        s,
        m,
        f,
        h,
        p,
        g,
        v,
        x,
        w,
        b = (0, l.c)(34)
      b[0] !== e
        ? (({ label: t, min: o, max: a, valueText: i, ...n } = e),
          (b[0] = e),
          (b[1] = t),
          (b[2] = n),
          (b[3] = o),
          (b[4] = a),
          (b[5] = i))
        : ((t = b[1]), (n = b[2]), (o = b[3]), (a = b[4]), (i = b[5]))
      let y = void 0 === o ? 0 : o,
        S = void 0 === a ? 100 : a,
        [j, k] = (0, c.useState)(!1),
        C = (0, c.useRef)(null)
      b[6] !== S || b[7] !== y || b[8] !== n
        ? ((s = (e) => {
            let t = C.current
            if (n.disabled || null == t) return
            let r = e.currentTarget.getBoundingClientRect(),
              l = t.getBoundingClientRect().width
            if (r.width <= l) return
            let o = Math.min(1, Math.max(0, (e.clientX - r.left - l / 2) / (r.width - l)))
            n.onValueChange?.([y + (S - y) * ("rtl" === e.currentTarget.dir ? 1 - o : o)])
          }),
          (b[6] = S),
          (b[7] = y),
          (b[8] = n),
          (b[9] = s))
        : (s = b[9])
      let M = s
      ;(b[10] === Symbol.for("react.memo_cache_sentinel") ? ((m = () => k(!1)), (b[10] = m)) : (m = b[10]),
        b[11] !== n
          ? ((f = (e) => {
              ;(k(!1), n.onKeyDown?.(e))
            }),
            (b[11] = n),
            (b[12] = f))
          : (f = b[12]),
        b[13] !== n.disabled || b[14] !== M
          ? ((h = (e) => {
              ;(e.preventDefault(),
                n.disabled ||
                  0 !== e.button ||
                  (k(!0), C.current?.setPointerCapture(e.pointerId), C.current?.focus({ preventScroll: !0 }), M(e)))
            }),
            (b[13] = n.disabled),
            (b[14] = M),
            (b[15] = h))
          : (h = b[15]),
        b[16] !== M
          ? ((p = (e) => {
              ;(e.preventDefault(), C.current?.hasPointerCapture(e.pointerId) && M(e))
            }),
            (b[16] = M),
            (b[17] = p))
          : (p = b[17]),
        b[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, r.jsx)(u.CC, {
              className: "relative h-0.5 grow rounded-full bg-border",
              children: (0, r.jsx)(u.Q6, { className: "absolute h-full rounded-full bg-text" }),
            })),
            (b[18] = g))
          : (g = b[18]))
      let P = !j && "focus-visible:ring-2 focus-visible:ring-ring"
      return (
        b[19] !== P
          ? ((v = (0, d.A)(
              "block h-4 w-4 cursor-interaction rounded-full border border-default bg-surface-tertiary shadow-md focus:outline-none data-[disabled]:cursor-default",
              P,
            )),
            (b[19] = P),
            (b[20] = v))
          : (v = b[20]),
        b[21] !== t || b[22] !== n.disabled || b[23] !== v || b[24] !== i
          ? ((x = (0, r.jsx)(u.zi, {
              ref: C,
              className: v,
              "aria-label": t,
              "aria-disabled": n.disabled,
              "aria-valuetext": i,
            })),
            (b[21] = t),
            (b[22] = n.disabled),
            (b[23] = v),
            (b[24] = i),
            (b[25] = x))
          : (x = b[25]),
        b[26] !== S || b[27] !== y || b[28] !== n || b[29] !== x || b[30] !== f || b[31] !== h || b[32] !== p
          ? ((w = (0, r.jsxs)(u.bL, {
              className: "relative flex h-6 min-w-0 flex-1 touch-none items-center data-[disabled]:opacity-40",
              min: y,
              max: S,
              onBlur: m,
              ...n,
              onKeyDown: f,
              onPointerDown: h,
              onPointerMove: p,
              children: [g, x],
            })),
            (b[26] = S),
            (b[27] = y),
            (b[28] = n),
            (b[29] = x),
            (b[30] = f),
            (b[31] = h),
            (b[32] = p),
            (b[33] = w))
          : (w = b[33]),
        w
      )
    }
    function P(e) {
      let t = Math.max(0, Math.floor(e))
      return `${Math.floor(t / 60)}:${(t % 60).toString().padStart(2, "0")}`
    }
  },
  AG2W(e, t, n) {
    var r = n("ABep"),
      l = n("QosV"),
      o = n("fDDa"),
      a = n("ZtSy"),
      i = n("tfu1"),
      s = n("NvEJ"),
      u = n("zSQm"),
      d = n("tKUf"),
      c = n("U6mT"),
      m = n("XpUB"),
      f = n("HWQc")
    function h() {
      return {
        ...(0, s.K)({ allowWideBlocks: !1, mediaComponent: p }),
        a: ({ children: e, href: t, title: n }) =>
          null != t && (0, o.q$)(t)
            ? (0, r.jsx)(a.G, { href: t, title: n, initiator: "markdown_link_click", underline: "always", children: e })
            : (0, r.jsx)("span", { title: t, children: e }),
        img: p,
        pre: ({ children: e }) => (0, r.jsx)("pre", { className: "overflow-x-auto", children: e }),
      }
    }
    function p(e) {
      let t,
        n = (0, l.c)(4),
        { alt: o, src: a, title: s } = e
      return (
        n[0] !== o || n[1] !== a || n[2] !== s
          ? ((t =
              null != a && (0, u.N5)(a)
                ? (0, r.jsx)(i.i3, { alt: o, src: a, title: s })
                : (0, r.jsx)("span", { title: a, children: o || a })),
            (n[0] = o),
            (n[1] = a),
            (n[2] = s),
            (n[3] = t))
          : (t = n[3]),
        t
      )
    }
    n.d(
      t,
      {},
      {
        S: function (e) {
          let t,
            n,
            o,
            a,
            i,
            s = (0, l.c)(11),
            { markdown: u } = e
          s[0] !== u ? ((t = (0, d.x)(u)), (s[0] = u), (s[1] = t)) : (t = s[1])
          let p = t
          s[2] !== p
            ? ((n = null != p && p.entries.length > 0 ? (0, r.jsx)(f.EQ, { entries: p.entries }) : null),
              (s[2] = p),
              (s[3] = n))
            : (n = s[3])
          let g = p?.body ?? u
          return (
            s[4] !== g ? ((o = (0, m.o)(g, void 0)), (s[4] = g), (s[5] = o)) : (o = s[5]),
            s[6] !== o
              ? ((a = (0, r.jsx)(c.T, {
                  className: "text-size-chat",
                  externalResourcePolicy: "restricted",
                  getDefaultComponents: h,
                  tokens: o,
                })),
                (s[6] = o),
                (s[7] = a))
              : (a = s[7]),
            s[8] !== n || s[9] !== a
              ? ((i = (0, r.jsxs)("div", { className: "px-4 py-3", children: [n, a] })),
                (s[8] = n),
                (s[9] = a),
                (s[10] = i))
              : (i = s[10]),
            i
          )
        },
      },
    )
  },
  y5If(e, t, n) {
    let r = (0, n("ESTr").a)({
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
    n.d(t, {}, { i: r })
  },
  zlDi(e, t, n) {
    let r = (0, n("ESTr").a)({
      name: "play-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.474609, y: 2.165039, width: 10.258774, height: 11.725586 },
        visualBounds: { x: 3.474609, y: 2.165039, width: 10.258774, height: 11.725586 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.474609, y: 2.165039, width: 10.258774, height: 11.725586 },
        center: { x: 8.603996, y: 8.027832 },
        insets: { top: 2.165039, right: 2.266617, bottom: 2.109375, left: 3.474609 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.603996, y: 8.027832 }, foreground: { x: 8.603996, y: 8.027832 } },
      },
      capabilities: ["icon"],
      body: '<path d="M4.33594 2.33289C4.80057 2.10819 5.39866 2.08949 5.90332 2.39735L12.9395 6.67957L13.0352 6.74207C13.9964 7.41933 13.9651 8.91629 12.9414 9.5409L12.9336 9.54579L5.89648 13.6639L5.89551 13.663C5.39251 13.9659 4.79815 13.9461 4.33594 13.7225C3.86641 13.4954 3.47443 13.0257 3.47461 12.3954V3.66004C3.47443 3.02975 3.8664 2.56008 4.33594 2.33289ZM4.52539 12.3954C4.52535 12.549 4.61423 12.6918 4.79297 12.7782C4.97639 12.8669 5.19331 12.8628 5.35742 12.7626L5.36621 12.7577L12.3945 8.64442C12.7798 8.40935 12.7791 7.81131 12.3936 7.57704L5.3584 3.29383L5.35742 3.29286C5.19331 3.1926 4.97638 3.1895 4.79297 3.27821C4.61448 3.36467 4.52535 3.50652 4.52539 3.66004V12.3954Z" fill="currentColor"/>',
    })
    n.d(t, {}, { k: r })
  },
  duD4(e, t, n) {
    function r(e, [t, n]) {
      return Math.min(n, Math.max(t, e))
    }
    ;((0, Object.defineProperty)(r, "name", { value: "clamp", configurable: !0 }), n.d(t, {}, { q: r }))
  },
  YAOF(e, t, n) {
    n.d(t, { Q6: () => N, bL: () => E, zi: () => H, CC: () => A })
    var r = n("zd8w"),
      l = n("duD4"),
      o = n("kUVq"),
      a = n("lVCP"),
      i = n("zWxU"),
      s = n("Hj0L"),
      u = n("k5JT")
    function d(e) {
      let t = r.useRef({ value: e, previous: e })
      return r.useMemo(
        () => (
          t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)),
          t.current.previous
        ),
        [e],
      )
    }
    ;(0, Object.defineProperty)(d, "name", { value: "usePrevious", configurable: !0 })
    var c = n("Vuge"),
      m = n("Fc3g"),
      f = n("gMOs"),
      h = n("ABep"),
      p = Object.defineProperty,
      g = (e, t) => p(e, "name", { value: t, configurable: !0 }),
      v = ["PageUp", "PageDown"],
      x = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
      w = {
        "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
        "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
      },
      b = "Slider",
      [y, S, j] = (0, f.N)(b),
      [k, C] = (0, i.A)(b, [j]),
      [M, P] = k(b),
      E = r.forwardRef(
        g(function (e, t) {
          let {
              name: n,
              min: i = 0,
              max: u = 100,
              step: d = 1,
              orientation: c = "horizontal",
              disabled: m = !1,
              minStepsBetweenThumbs: f = 0,
              defaultValue: p = [i],
              value: w,
              onValueChange: b = g(() => {}, "onValueChange"),
              onValueCommit: S = g(() => {}, "onValueCommit"),
              inverted: j = !1,
              form: k,
              ...C
            } = e,
            P = r.useRef(new Set()),
            E = r.useRef(0),
            D = r.useRef(!1),
            T = "horizontal" === c,
            [L, A] = r.useState(null),
            F = (0, a.s)(t, A),
            [N = [], R] = (0, s.i)({
              prop: w,
              defaultProp: p,
              onChange: g((e) => {
                let t = [...P.current]
                ;(t[E.current]?.focus({ preventScroll: !0, focusVisible: D.current }), (D.current = !1), b(e))
              }, "onChange"),
            }),
            V = r.useRef(N),
            z = r.useRef(N)
          function B(e) {
            let t = $(N, e)
            O(e, t)
          }
          function K(e) {
            O(e, E.current)
          }
          function H() {
            String(N) !== String(V.current) && S(N)
          }
          function O(e, t, { commit: n } = { commit: !1 }) {
            let r = X(d),
              o = J(Math.round((e - i) / d) * d + i, r),
              a = (0, l.q)(o, [i, u])
            R((e = []) => {
              let r = Q(e, a, t)
              if (!Y(r, f * d)) return e
              {
                E.current = r.indexOf(a)
                let t = String(r) !== String(e)
                return (t && n && S(r), t ? r : e)
              }
            })
          }
          return (
            r.useEffect(() => {
              let e = k ? L?.ownerDocument.getElementById(k) : L?.closest("form")
              if (e instanceof HTMLFormElement) {
                let t = g(() => R(z.current), "reset")
                return (e.addEventListener("reset", t), () => e.removeEventListener("reset", t))
              }
            }, [L, k, R]),
            g(B, "handleSlideStart"),
            g(K, "handleSlideMove"),
            g(H, "handleSlideEnd"),
            g(O, "updateValues"),
            (0, h.jsx)(M, {
              scope: e.__scopeSlider,
              name: n,
              disabled: m,
              min: i,
              max: u,
              valueIndexToChangeRef: E,
              thumbs: P.current,
              values: N,
              orientation: c,
              form: k,
              children: (0, h.jsx)(y.Provider, {
                scope: e.__scopeSlider,
                children: (0, h.jsx)(y.Slot, {
                  scope: e.__scopeSlider,
                  children: (0, h.jsx)(T ? _ : I, {
                    "aria-disabled": m,
                    "data-disabled": m ? "" : void 0,
                    ...C,
                    ref: F,
                    onPointerDown: (0, o.mK)(C.onPointerDown, () => {
                      m || ((V.current = N), (D.current = !1))
                    }),
                    min: i,
                    max: u,
                    inverted: j,
                    onSlideStart: m ? void 0 : B,
                    onSlideMove: m ? void 0 : K,
                    onSlideEnd: m ? void 0 : H,
                    onHomeKeyDown: () => {
                      m || ((D.current = !0), O(i, 0, { commit: !0 }))
                    },
                    onEndKeyDown: () => {
                      m || ((D.current = !0), O(u, N.length - 1, { commit: !0 }))
                    },
                    onStepKeyDown: ({ event: e, direction: t }) => {
                      if (!m) {
                        D.current = !0
                        let n = v.includes(e.key) || (e.shiftKey && x.includes(e.key)),
                          r = E.current
                        O(ee(N[r], { min: i, step: d, direction: t, multiplier: n ? 10 : 1 }), r, { commit: !0 })
                      }
                    },
                  }),
                }),
              }),
            })
          )
        }, "Slider"),
      ),
      [D, T] = k(b, { startEdge: "left", endEdge: "right", size: "width", direction: 1 }),
      _ = r.forwardRef(
        g(function (e, t) {
          let {
              min: n,
              max: l,
              dir: o,
              inverted: i,
              onSlideStart: s,
              onSlideMove: d,
              onSlideEnd: c,
              onStepKeyDown: m,
              ...f
            } = e,
            [p, v] = r.useState(null),
            x = (0, a.s)(t, v),
            b = r.useRef(void 0),
            y = (0, u.useDirection)(o),
            S = "ltr" === y,
            j = (S && !i) || (!S && i)
          function k(e) {
            let t = b.current || p.getBoundingClientRect(),
              r = Z([0, t.width], j ? [n, l] : [l, n])
            return ((b.current = t), r(e - t.left))
          }
          return (
            g(k, "getValueFromPointer"),
            (0, h.jsx)(D, {
              scope: e.__scopeSlider,
              startEdge: j ? "left" : "right",
              endEdge: j ? "right" : "left",
              direction: j ? 1 : -1,
              size: "width",
              children: (0, h.jsx)(L, {
                dir: y,
                "data-orientation": "horizontal",
                ...f,
                ref: x,
                style: { ...f.style, "--radix-slider-thumb-transform": "translateX(-50%)" },
                onSlideStart: (e) => {
                  let t = k(e.clientX)
                  s?.(t)
                },
                onSlideMove: (e) => {
                  let t = k(e.clientX)
                  d?.(t)
                },
                onSlideEnd: () => {
                  ;((b.current = void 0), c?.())
                },
                onStepKeyDown: (e) => {
                  let t = w[j ? "from-left" : "from-right"].includes(e.key)
                  m?.({ event: e, direction: t ? -1 : 1 })
                },
              }),
            })
          )
        }, "SliderHorizontal"),
      ),
      I = r.forwardRef(
        g(function (e, t) {
          let {
              min: n,
              max: l,
              inverted: o,
              onSlideStart: i,
              onSlideMove: s,
              onSlideEnd: u,
              onStepKeyDown: d,
              ...c
            } = e,
            m = r.useRef(null),
            f = (0, a.s)(t, m),
            p = r.useRef(void 0),
            v = !o
          function x(e) {
            let t = p.current || m.current.getBoundingClientRect(),
              r = Z([0, t.height], v ? [l, n] : [n, l])
            return ((p.current = t), r(e - t.top))
          }
          return (
            g(x, "getValueFromPointer"),
            (0, h.jsx)(D, {
              scope: e.__scopeSlider,
              startEdge: v ? "bottom" : "top",
              endEdge: v ? "top" : "bottom",
              size: "height",
              direction: v ? 1 : -1,
              children: (0, h.jsx)(L, {
                "data-orientation": "vertical",
                ...c,
                ref: f,
                style: { ...c.style, "--radix-slider-thumb-transform": "translateY(50%)" },
                onSlideStart: (e) => {
                  let t = x(e.clientY)
                  i?.(t)
                },
                onSlideMove: (e) => {
                  let t = x(e.clientY)
                  s?.(t)
                },
                onSlideEnd: () => {
                  ;((p.current = void 0), u?.())
                },
                onStepKeyDown: (e) => {
                  let t = w[v ? "from-bottom" : "from-top"].includes(e.key)
                  d?.({ event: e, direction: t ? -1 : 1 })
                },
              }),
            })
          )
        }, "SliderVertical"),
      ),
      L = r.forwardRef(
        g(function (e, t) {
          let {
              __scopeSlider: n,
              onSlideStart: r,
              onSlideMove: l,
              onSlideEnd: a,
              onHomeKeyDown: i,
              onEndKeyDown: s,
              onStepKeyDown: u,
              ...d
            } = e,
            c = P(b, n)
          return (0, h.jsx)(m.sG.span, {
            ...d,
            ref: t,
            onKeyDown: (0, o.mK)(e.onKeyDown, (e) => {
              "Home" === e.key
                ? (i(e), e.preventDefault())
                : "End" === e.key
                  ? (s(e), e.preventDefault())
                  : v.concat(x).includes(e.key) && (u(e), e.preventDefault())
            }),
            onPointerDown: (0, o.mK)(e.onPointerDown, (e) => {
              let t = e.target
              ;(t.setPointerCapture(e.pointerId),
                e.preventDefault(),
                c.thumbs.has(t) ? t.focus({ preventScroll: !0, focusVisible: !1 }) : r(e))
            }),
            onPointerMove: (0, o.mK)(e.onPointerMove, (e) => {
              e.target.hasPointerCapture(e.pointerId) && l(e)
            }),
            onPointerUp: (0, o.mK)(e.onPointerUp, (e) => {
              let t = e.target
              t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
            }),
          })
        }, "SliderImpl"),
      ),
      A = r.forwardRef(
        g(function (e, t) {
          let { __scopeSlider: n, ...r } = e,
            l = P("SliderTrack", n)
          return (0, h.jsx)(m.sG.span, {
            "data-disabled": l.disabled ? "" : void 0,
            "data-orientation": l.orientation,
            ...r,
            ref: t,
          })
        }, "SliderTrack"),
      ),
      F = "SliderRange",
      N = r.forwardRef(
        g(function (e, t) {
          let { __scopeSlider: n, ...l } = e,
            o = P(F, n),
            i = T(F, n),
            s = r.useRef(null),
            u = (0, a.s)(t, s),
            d = o.values.length,
            c = o.values.map((e) => W(e, o.min, o.max)),
            f = d > 1 ? Math.min(...c) : 0,
            p = 100 - Math.max(...c)
          return (0, h.jsx)(m.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...l,
            ref: u,
            style: { ...e.style, [i.startEdge]: f + "%", [i.endEdge]: p + "%" },
          })
        }, "SliderRange"),
      ),
      [R, V] = k("SliderThumb")
    function z(e) {
      let { __scopeSlider: t, name: n, children: l, internal_do_not_use_render: o } = e,
        a = P("SliderThumbProvider", t),
        i = S(t),
        [s, u] = r.useState(null),
        d = r.useMemo(() => (s ? i().findIndex((e) => e.ref.current === s) : -1), [i, s]),
        m = (0, c.X)(s),
        f = !s || !!a.form || !!s.closest("form"),
        p = a.values[d],
        g = n ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
        v = void 0 === p ? 0 : W(p, a.min, a.max)
      r.useEffect(() => {
        if (s)
          return (
            a.thumbs.add(s),
            () => {
              a.thumbs.delete(s)
            }
          )
      }, [s, a.thumbs])
      let x = {
        value: p,
        name: g,
        form: a.form,
        isFormControl: f,
        index: d,
        thumb: s,
        onThumbChange: u,
        percent: v,
        size: m,
      }
      return (0, h.jsx)(R, { scope: t, ...x, children: et(o) ? o(x) : l })
    }
    g(z, "SliderThumbProvider")
    var B = "SliderThumbTrigger",
      K = r.forwardRef(
        g(function (e, t) {
          let { __scopeSlider: n, ...r } = e,
            l = P(B, n),
            i = T(B, n),
            { index: s, value: u, percent: d, size: c, onThumbChange: f } = V(B, n),
            p = (0, a.s)(t, f),
            g = U(s, l.values.length),
            v = c?.[i.size],
            x = v ? q(v, d, i.direction) : 0
          return (0, h.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [i.startEdge]: `calc(${d}% + ${x}px)`,
            },
            children: (0, h.jsx)(y.ItemSlot, {
              scope: n,
              children: (0, h.jsx)(m.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || g,
                "aria-valuemin": l.min,
                "aria-valuenow": u,
                "aria-valuemax": l.max,
                "aria-orientation": l.orientation,
                "data-orientation": l.orientation,
                "data-disabled": l.disabled ? "" : void 0,
                tabIndex: l.disabled ? void 0 : 0,
                ...r,
                ref: p,
                style: void 0 === u ? { display: "none" } : e.style,
                onFocus: (0, o.mK)(e.onFocus, () => {
                  l.valueIndexToChangeRef.current = s
                }),
              }),
            }),
          })
        }, "SliderThumbTrigger"),
      ),
      H = r.forwardRef(
        g(function (e, t) {
          let { __scopeSlider: n, name: r, ...l } = e
          return (0, h.jsx)(z, {
            __scopeSlider: n,
            name: r,
            internal_do_not_use_render: ({ index: e, isFormControl: r }) =>
              (0, h.jsxs)(h.Fragment, {
                children: [
                  (0, h.jsx)(K, { ...l, ref: t, __scopeSlider: n }),
                  r ? (0, h.jsx)(O, { __scopeSlider: n }, e) : null,
                ],
              }),
          })
        }, "SliderThumb"),
      ),
      O = r.forwardRef(
        g(function ({ __scopeSlider: e, ...t }, n) {
          let { value: l, name: o, form: i } = V("SliderBubbleInput", e),
            s = r.useRef(null),
            u = (0, a.s)(s, n),
            c = d(l)
          return (
            r.useEffect(() => {
              let e = s.current
              if (!e) return
              let t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set
              if (c !== l && t) {
                let n = new Event("input", { bubbles: !0 })
                ;(t.call(e, l), e.dispatchEvent(n))
              }
            }, [c, l]),
            (0, h.jsx)(m.sG.input, { style: { display: "none" }, name: o, form: i, ...t, ref: u, defaultValue: l })
          )
        }, "SliderBubbleInput"),
      )
    function Q(e = [], t, n) {
      let r = [...e]
      return ((r[n] = t), r.sort((e, t) => e - t))
    }
    function W(e, t, n) {
      return (0, l.q)((100 / (n - t)) * (e - t), [0, 100])
    }
    function U(e, t) {
      return t > 2 ? `Value ${e + 1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
    }
    function $(e, t) {
      if (1 === e.length) return 0
      let n = e.map((e) => Math.abs(e - t)),
        r = Math.min(...n)
      return n.indexOf(r)
    }
    function q(e, t, n) {
      let r = e / 2,
        l = Z([0, 50], [0, r])
      return (r - l(t) * n) * n
    }
    function G(e) {
      return e.slice(0, -1).map((t, n) => e[n + 1] - t)
    }
    function Y(e, t) {
      return !(t > 0) || Math.min(...G(e)) >= t
    }
    function Z(e, t) {
      return (n) => {
        if (e[0] === e[1] || t[0] === t[1]) return t[0]
        let r = (t[1] - t[0]) / (e[1] - e[0])
        return t[0] + r * (n - e[0])
      }
    }
    function X(e) {
      if (!Number.isFinite(e)) return 0
      let t = e.toString()
      if (t.includes("e")) {
        let [e, n] = t.split("e"),
          r = e.split(".")[1] || "",
          l = Number(n)
        return Math.max(0, r.length - l)
      }
      let n = t.split(".")[1]
      return n ? n.length : 0
    }
    function J(e, t) {
      let n = Math.pow(10, t)
      return Math.round(e * n) / n
    }
    function ee(e, { min: t, step: n, direction: r, multiplier: l }) {
      let o,
        a = X(n),
        i = (e - t) / n,
        s = Math.round(i)
      return ((o = J(s * n + t, a) === J(e, a) ? s + l * r : r > 0 ? Math.ceil(i) : Math.floor(i)), J(o * n + t, a))
    }
    function et(e) {
      return "function" == typeof e
    }
    ;(g(Q, "getNextSortedValues"),
      g(W, "convertValueToPercentage"),
      g(U, "getLabel"),
      g($, "getClosestValueIndex"),
      g(q, "getThumbInBoundsOffset"),
      g(G, "getStepsBetweenValues"),
      g(Y, "hasMinStepsBetweenValues"),
      g(Z, "linearScale"),
      g(X, "getDecimalCount"),
      g(J, "roundValue"),
      g(ee, "getNextStepValue"),
      g(et, "isFunction"))
  },
}
//# sourceMappingURL=596154.a75eebaac5.js.map
