export const __rspack_esm_ids = [996976]
export const __webpack_modules__ = {
  TonS(e, t, n) {
    var r = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, r.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, r.jsx)("path", {
            d: "M9.33467 16.6663V4.93978L4.6374 9.63704L4.1667 9.16634L3.69599 8.69661L9.52998 2.86263L9.63447 2.77767C9.8925 2.60753 10.2433 2.63564 10.4704 2.86263L16.3034 8.69661L16.3884 8.80111C16.5588 9.05922 16.5306 9.40982 16.3034 9.63704C16.0762 9.86414 15.7255 9.89242 15.4675 9.722L15.363 9.63704L10.6647 4.9388V16.6663C10.6647 17.0336 10.367 17.3314 9.99971 17.3314C9.63259 17.3312 9.33467 17.0335 9.33467 16.6663ZM4.6374 9.63704C4.3777 9.89674 3.95569 9.89674 3.69599 9.63704C3.43657 9.37744 3.43668 8.95628 3.69599 8.69661L4.6374 9.63704Z",
            fill: "currentColor",
          }),
        })))
  },
  aJad(e, t, n) {
    var r = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, r.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, r.jsx)("path", {
            d: "M4.5 5.75C4.5 5.05964 5.05964 4.5 5.75 4.5H14.25C14.9404 4.5 15.5 5.05964 15.5 5.75V14.25C15.5 14.9404 14.9404 15.5 14.25 15.5H5.75C5.05964 15.5 4.5 14.9404 4.5 14.25V5.75Z",
          }),
        })))
  },
  A5cT(e, t, n) {
    var r = n("Hpb6"),
      i = n("f6KK")
    function o(e, t, n, o, l) {
      let a = (function (e, t, n) {
        let r = e.resolve(t)
        if (r.parent.inlineContent) return t
        let o = i.LN.findFrom(r, n, !0)
        return o ? (n < 0 ? o.to : o.from) : null
      })(e, o, l)
      if (null == a) throw Error("Unable to place selection marker.")
      let d = new r.Ji(r.FK.from(e.type.schema.text(n)), 0, 0),
        u = e.replace(a, a, d),
        s = t.serialize(u).indexOf(n)
      if (-1 === s) throw Error("Failed to locate selection marker in markdown.")
      return s
    }
    n.d(
      t,
      {},
      {
        KU: function ({ view: e, pmu: t, range: n }) {
          let r,
            i,
            { state: l } = e,
            a = l.doc,
            d =
              ((r = null),
              (i = null),
              (a.forEach((e, t) => {
                let o = t + e.nodeSize
                n.from <= o - 1 && n.to >= t + 1 && ((r ??= t), (i = o))
              }),
              null == r || null == i)
                ? { from: 0, to: a.content.size }
                : { from: r, to: i }),
            u = { from: Math.max(0, n.from - d.from), to: Math.max(0, n.to - d.from) },
            s = (function (e, t) {
              let n = e.slice(t.from, t.to),
                r = e.type.create(null, n.content)
              if (!r) throw Error("Failed to build document segment for magic edit selection.")
              return r
            })(a, d),
            c = s.content.size,
            f = t.serialize(s),
            m = u.from <= 0,
            g = u.to >= c,
            h = m ? 0 : o(s, t, "\u27E6MAGICSTART\u27E7", u.from, 1),
            v = g ? f.length : o(s, t, "\u27E6MAGICEND\u27E7", u.to, -1)
          if (h > v) throw Error("Failed to locate selection markers in markdown.")
          return { fullMarkdown: f, startIndex: h, endIndex: v, blockRange: d }
        },
        SY: function (e, t) {
          let n = (e.dom.ownerDocument ?? document).createRange(),
            r = e.domAtPos(t.from),
            i = e.domAtPos(t.to)
          return (n.setStart(r.node, r.offset), n.setEnd(i.node, i.offset), n)
        },
        z1: o,
      },
    )
  },
  J0q6(e, t, n) {
    var r = n("aVTP"),
      i = n("gEwc"),
      o = n("OWqD"),
      l = n("JV89")
    let a = (0, o.l)().use(i.A).freeze()
    n.d(
      t,
      {},
      {
        $0: function (e) {
          return e.replace(/\.md$/i, "")
        },
        EU: function (e) {
          let t,
            n = a.parse(e)
          return (
            (0, l.YR)(n, "heading", (e) => {
              if (e.depth > 3) return
              let n = (0, r.d)(e).trim()
              if ("" !== n) return ((t = n), !1)
            }),
            t
          )
        },
      },
    )
  },
  dlWg(e, t, n) {
    n.d(t, { CodexWritingBlockDirectiveRenderer: () => O })
    var r = n("ABep"),
      i = n("QosV"),
      o = n("BhZP"),
      l = n("Jaao"),
      a = n("yqKZ"),
      d = n("qmMi"),
      u = n("zd8w"),
      s = n("Wf1j"),
      c = n("oyxz"),
      f = n("E8Sp"),
      m = n("SGsN"),
      g = n("geXJ"),
      h = n("pqpL"),
      v = n("OWtl"),
      p = n("tSEg"),
      S = n("hZax"),
      b = n("gWlg"),
      w = n("CeUM"),
      x = n("vNK1"),
      y = n("WS0s"),
      I = n("hnOq"),
      C = n("GO1D"),
      M = n("IQg5"),
      P = n("moQb"),
      j = n("SOEF"),
      _ = n("J0q6"),
      E = n("ASxG"),
      T = n("SPnB"),
      k = n("NRR1"),
      D = n("rpnz"),
      A = n("izli")
    let R = E.Ikc({
        accountId: E.YjP().min(1),
        userId: E.YjP().min(1),
        requestUserId: E.YjP().min(1),
        pageId: E.YjP().min(1),
      }),
      B = (0, d.un)(
        v.u,
        ({ get: e }) => e(A.i, !1) && null != e(k.DO) && null != e(T.chatGptAuthenticatedUserId$) && null != e(k.$M),
      ),
      V = (0, d.i1)(v.u, (e, { get: t }) => {
        let n = R.safeParse(t(b._U, e)?.codex_page)
        if (
          n.success &&
          n.data.accountId === t(k.DO) &&
          n.data.userId === t(T.chatGptAuthenticatedUserId$) &&
          n.data.requestUserId === t(k.$M)
        )
          return n.data.pageId
      }),
      U = (0, d.i1)(v.u, (e, { get: t }) => {
        let n = t(V, e)
        return null == n || (0, D.sD)(n) ? void 0 : n
      })
    var z = n("zTAs")
    function O(e) {
      let t,
        n,
        o = (0, i.c)(8),
        { attributes: l, name: a, rawText: d } = e,
        s = (0, u.useContext)(P.U),
        c = s?.isStreaming ?? !1
      return (
        o[0] !== s
          ? ((t = (e) => {
              if (null == s) return null
              let t = (0, C.He)(e)
              return "slides" === e.variant
                ? (0, r.jsx)(K, { id: t, context: s, directive: e })
                : (0, r.jsx)(L, { id: t, context: s, directive: e })
            }),
            (o[0] = s),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== l || o[3] !== a || o[4] !== d || o[5] !== c || o[6] !== t
          ? ((n = (0, r.jsx)(M.WritingBlockDirectiveRenderer, {
              attributes: l,
              isStreaming: c,
              name: a,
              rawText: d,
              renderPersisted: t,
              testId: "codex-writing-block",
            })),
            (o[2] = l),
            (o[3] = a),
            (o[4] = d),
            (o[5] = c),
            (o[6] = t),
            (o[7] = n))
          : (n = o[7]),
        n
      )
    }
    function K(e) {
      let t,
        n,
        o,
        l = (0, i.c)(10),
        { id: a, context: d, directive: u } = e,
        s = (0, S.Zj)("423161634"),
        c = (0, S.Ou)("2470976080")
      l[0] !== c || l[1] !== s ? ((t = s || c.get("enabled", !1)), (l[0] = c), (l[1] = s), (l[2] = t)) : (t = l[2])
      let f = t
      return (
        l[3] !== u || l[4] !== f
          ? ((n = f ? u : { ...u, variant: "standard" }), (l[3] = u), (l[4] = f), (l[5] = n))
          : (n = l[5]),
        l[6] !== d || l[7] !== a || l[8] !== n
          ? ((o = (0, r.jsx)(L, { id: a, context: d, directive: n })), (l[6] = d), (l[7] = a), (l[8] = n), (l[9] = o))
          : (o = l[9]),
        o
      )
    }
    function L(e) {
      var t, S
      let M,
        P,
        E,
        D,
        A,
        R,
        O,
        K,
        L,
        F,
        $ = (0, i.c)(58),
        { context: H, directive: q, id: G } = e,
        Z = (0, d.gh)(v.u),
        J = (0, d.gh)(p.GD),
        W = (0, s.A)()
      $[0] !== H.conversationId || $[1] !== H.turnId || $[2] !== G
        ? ((M = (0, b.Kr)(H.conversationId, H.turnId, G)),
          ($[0] = H.conversationId),
          ($[1] = H.turnId),
          ($[2] = G),
          ($[3] = M))
        : (M = $[3])
      let Y = M,
        N = (0, d.Ul)(B),
        Q = (0, d._U)(U, Y),
        [X, ee] = (0, u.useState)(!1),
        et = (0, d._U)(b.av, Y),
        en = (0, d._U)(b._U, Y),
        er = (0, d._U)(b.oo, Y),
        ei = (0, d._U)(b.bi, Y),
        eo = (0, d._U)(b.lb, Y),
        el = (0, d._U)(b.Ud, Y),
        ea = (0, d._U)(b.Jt, Y),
        ed = ((t = (0, z.Yn)(q.metadata, H)), null == (S = en) ? t : { ...t, ...S })
      $[4] !== H || $[5] !== q.bodyContent || $[6] !== et
        ? ((P = et ?? (0, z.Io)(q.bodyContent, H)), ($[4] = H), ($[5] = q.bodyContent), ($[6] = et), ($[7] = P))
        : (P = $[7])
      let eu = P,
        [es, ec] = (0, u.useState)(null),
        ef = es?.source === eu ? es.value : eu,
        em = (0, C.IA)({ content: ef, metadata: ed, preserveEmptySections: !H.isStreaming }),
        eg = em?.[0]?.content ?? ef
      $[8] !== Y
        ? ((E = (e) => {
            ;(0, b.Yd)(Y, e)
          }),
          ($[8] = Y),
          ($[9] = E))
        : (E = $[9])
      let eh = (0, x.J)({
          isPersistenceReady: !0,
          isStreaming: H.isStreaming,
          metadata: ed,
          onPersistSelection: E,
          storedActiveToneSectionId: er,
          toneSections: em,
        }),
        ev = (0, I.F7)(eh.displayedToneSections, eh.activeToneSectionId),
        ep = {
          metadata: (0, I.Te)({ ...ed, subject: en?.subject ?? ea ?? ed?.subject ?? q.emailMetadata.subject }, em),
          title: q.title,
        }
      null != ea &&
        en?.subject == null &&
        0 === (0, o.I$)(en).length &&
        (ep.metadata = { ...ep.metadata, ...(0, l.tx)(ep, { isOriginal: !0 }, ea) })
      let eS = (0, l.Wu)(ep, ev),
        eb = `${Y}
${eh.activeToneSectionId ?? ""}`,
        [ew, ex] = (0, u.useState)({ key: eb, value: eS }),
        ey = null == eh.activeToneSectionId || em?.some((e) => e.id === eh.activeToneSectionId) === !0
      ey && (ew.key !== eb || ew.value !== eS) && ex({ key: eb, value: eS })
      let eI = ei ?? q.emailMetadata.bcc,
        eC = eo ?? q.emailMetadata.cc,
        eM = el ?? q.emailMetadata.recipient,
        eP = H.isStreaming && !ey && ew.key === eb ? ew.value : eS
      $[10] !== eI || $[11] !== eC || $[12] !== eM || $[13] !== eP || $[14] !== ed
        ? ((D = { bcc: eI, cc: eC, recipient: eM, subject: eP, writingBlockMetadata: ed }),
          ($[10] = eI),
          ($[11] = eC),
          ($[12] = eM),
          ($[13] = eP),
          ($[14] = ed),
          ($[15] = D))
        : (D = $[15])
      let ej = D
      if (null != Q) {
        let e
        return (
          $[16] !== Q
            ? ((e = (0, r.jsx)(g.Z, { name: h.DE, attributes: { page_id: Q } })), ($[16] = Q), ($[17] = e))
            : (e = $[17]),
          e
        )
      }
      let e_ = !H.isStreaming && !X
      ;($[18] !== Y
        ? ((A = () => {
            ;(0, b.bZ)(Y)
          }),
          ($[18] = Y),
          ($[19] = A))
        : (A = $[19]),
        $[20] !== Y || $[21] !== ec || $[22] !== eu || $[23] !== em
          ? ((R = (e, t) => {
              let n = (0, I.is)({ nextContent: e, toneSectionId: t, toneSections: em }),
                r = null != n.activeToneSectionId && null != n.toneSections ? (0, a.n5)(n.toneSections) : n.content
              ;(ec({ source: eu, value: r }), (0, b.Jd)(Y, r))
            }),
            ($[20] = Y),
            ($[21] = ec),
            ($[22] = eu),
            ($[23] = em),
            ($[24] = R))
          : (R = $[24]),
        $[25] !== Y
          ? ((O = (e, t) => {
              ;(0, b.$V)(Y, e, t)
            }),
            ($[25] = Y),
            ($[26] = O))
          : (O = $[26]))
      let eE = (e) => {
        ;(ev.isOriginal && (0, b.iH)(Y, e), (0, b.nM)(Y, (0, l.tx)(ep, ev, e)))
      }
      return (
        $[27] !== H.conversationId ||
        $[28] !== H.isStreaming ||
        $[29] !== q.title ||
        $[30] !== q.variant ||
        $[31] !== Y ||
        $[32] !== ej ||
        $[33] !== G ||
        $[34] !== W ||
        $[35] !== X ||
        $[36] !== N ||
        $[37] !== J ||
        $[38] !== Z
          ? ((K = (e) =>
              (0, r.jsx)(y.p, {
                conversationId: H.conversationId,
                context: e,
                editorKey: Y,
                emailMetadata: ej,
                enableAiTools: !H.isStreaming,
                isStreaming: H.isStreaming,
                librarySaveControls: N
                  ? {
                      saveToPage: !0,
                      isSaving: X,
                      onSave: H.isStreaming
                        ? void 0
                        : (e) => {
                            if (X || "" === e.trim()) return Promise.resolve(!1)
                            let t = Z.get(f.gM)
                            ee(!0)
                            let r = () => (
                              Z.get(m.Id).danger(
                                W.formatMessage({
                                  id: "codex.writingBlock.page.saveFailed",
                                  defaultMessage: "Couldn\u2019t create Page. Try again",
                                }),
                                { errorAnalytics: { toastId: "codex.writingBlock.page.saveFailed" } },
                              ),
                              !1
                            )
                            return (async function (e, { editKey: t, content: r, title: i }) {
                              if (null != e.get(U, t)) return !0
                              let o = e.get(k.DO),
                                l = e.get(T.chatGptAuthenticatedUserId$),
                                a = e.get(k.$M)
                              if (!e.get(B) || null == o || null == l || null == a || "" === r.trim()) return !1
                              let d = (0, k.hI)(e, o, l, e.get(k.jv), a)
                              try {
                                let { startSpacePageCreation: u, retrySpacePageCreation: s } =
                                    await Promise.resolve().then(n.bind(n, "n8vi")),
                                  { spacePageCreation$: c } = await Promise.resolve().then(n.bind(n, "tv8P"))
                                if ((d.signal.throwIfAborted(), !e.get(B))) return !1
                                if (null != e.get(U, t)) return !0
                                ;(0, b.bZ)(t)
                                let f = { accountId: o, userId: l, requestUserId: a },
                                  m = (n, r) => {
                                    d.signal.throwIfAborted()
                                    let i = e.get(V, t)
                                    return (
                                      i === r || (i === n && ((0, b.nM)(t, { codex_page: { ...f, pageId: r } }), !0))
                                    )
                                  },
                                  g = e.get(V, t),
                                  h = null == g ? void 0 : e.get(c, g),
                                  v = i ?? (0, _.EU)(r) ?? "",
                                  p = (0, j.CyG)(r).map((e) => ({ kind: "markdown", markdown: e }))
                                if (null != g && null != h) {
                                  let { getRetainedPageRealtimeSession: r } = await Promise.resolve().then(
                                      n.bind(n, "kUgk"),
                                    ),
                                    {
                                      readPageDocument: i,
                                      updatePageDocument: o,
                                      updatePageTitle: l,
                                    } = await Promise.resolve().then(n.bind(n, "EU2T"))
                                  if ((d.signal.throwIfAborted(), null != e.get(U, t))) return !0
                                  let a = r(e, g)
                                  if (null == a) throw Error("page_creation_unavailable")
                                  let u = i(a.document)
                                  if (
                                    (u.markdown !== p.map(({ markdown: e }) => e).join("\n\n") || u.title !== v) &&
                                    !a.mutateDocument((e) => {
                                      ;(o(e, p), l(e, v))
                                    })
                                  )
                                    throw Error("page_creation_unavailable")
                                  let c = await s(e, g)
                                  return m(g, c.metadata.page_id)
                                }
                                let S = u(e, {
                                  title: v,
                                  initialDocument: p,
                                  initializePage: async (e, t) => {
                                    if (
                                      (await e.flush({ scope: "current", signal: t }), e.getSnapshot().hasRejectedEdits)
                                    )
                                      throw Error("writing_block_page_save_failed")
                                  },
                                })
                                ;(0, b.nM)(t, { codex_page: { ...f, pageId: S.pageId } })
                                let w = await S.completion
                                return m(S.pageId, w.metadata.page_id)
                              } finally {
                                d.stop()
                              }
                            })(Z, { editKey: Y, content: e, title: q.title })
                              .then(async (e) => {
                                if (!e) return r()
                                let { openSpacePageSidePanelTab: i } = await Promise.resolve().then(n.bind(n, "uqg3")),
                                  o = Z.get(U, Y),
                                  l = Z.get(f.gM)
                                return (null != o && l.pathname === t.pathname && l.search === t.search && i(J, o), !0)
                              })
                              .catch(r)
                              .finally(() => ee(!1))
                          },
                    }
                  : void 0,
                onEmailMetadataChange: (e) => {
                  ;(0, b.nM)(Y, e)
                },
                showMagicEditAction: !H.isStreaming,
                title: q.title,
                variant: q.variant,
                writingBlockId: G,
              })),
            ($[27] = H.conversationId),
            ($[28] = H.isStreaming),
            ($[29] = q.title),
            ($[30] = q.variant),
            ($[31] = Y),
            ($[32] = ej),
            ($[33] = G),
            ($[34] = W),
            ($[35] = X),
            ($[36] = N),
            ($[37] = J),
            ($[38] = Z),
            ($[39] = K))
          : (K = $[39]),
        $[40] !== q.title || $[41] !== q.variant
          ? ((L =
              q.title ??
              ("slides" === q.variant
                ? (0, r.jsx)(c.A, {
                    id: "codex.writingBlock.slides.header.title.fallback",
                    defaultMessage: "Presentation outline",
                  })
                : void 0)),
            ($[40] = q.title),
            ($[41] = q.variant),
            ($[42] = L))
          : (L = $[42]),
        $[43] !== q.variant ||
        $[44] !== eg ||
        $[45] !== Y ||
        $[46] !== ej ||
        $[47] !== A ||
        $[48] !== R ||
        $[49] !== O ||
        $[50] !== eE ||
        $[51] !== K ||
        $[52] !== L ||
        $[53] !== e_ ||
        $[54] !== eh.activeToneSectionId ||
        $[55] !== eh.displayedToneSections ||
        $[56] !== eh.selectToneSection
          ? ((F = (0, r.jsx)(w.i, {
              activeToneSectionId: eh.activeToneSectionId,
              content: eg,
              editorKey: Y,
              emailMetadata: ej,
              isEditable: e_,
              onBlur: A,
              onContentChange: R,
              onRecipientChange: O,
              onSubjectChange: eE,
              onToneSectionSelect: eh.selectToneSection,
              render: K,
              testId: "codex-writing-block",
              title: L,
              toneSections: eh.displayedToneSections,
              variant: q.variant,
            })),
            ($[43] = q.variant),
            ($[44] = eg),
            ($[45] = Y),
            ($[46] = ej),
            ($[47] = A),
            ($[48] = R),
            ($[49] = O),
            ($[50] = eE),
            ($[51] = K),
            ($[52] = L),
            ($[53] = e_),
            ($[54] = eh.activeToneSectionId),
            ($[55] = eh.displayedToneSections),
            ($[56] = eh.selectToneSection),
            ($[57] = F))
          : (F = $[57]),
        F
      )
    }
  },
  izli(e, t, n) {
    var r = n("qmMi"),
      i = n("e1xH"),
      o = n("OWtl"),
      l = n("OMIV"),
      a = n("O666")
    let d = (0, r.i1)(
      o.u,
      (e, { get: t }) =>
        t(i.pagesEnabled$) &&
        t(i._s) &&
        (!e || t(a.H$, { layer: "1915661407", parameter: "enabled" })) &&
        (t(l.JW, "4117608041") || t(a.H$, { layer: "3737772469", parameter: "page_upgrade_enabled" })),
    )
    n.d(t, {}, { i: d })
  },
  vNK1(e, t, n) {
    var r = n("QosV"),
      i = n("BhZP"),
      o = n("zd8w")
    function l(e, t, n, r) {
      return null == n ||
        (e?.index === t &&
          e.section.content === n.content &&
          e.section.id === n.id &&
          e.section.tone === n.tone &&
          e.shouldPersist === r)
        ? e
        : { index: t, section: n, shouldPersist: r, token: e?.token ?? Symbol() }
    }
    function a(e, t) {
      return e?.findIndex((e) => e.id === t) ?? -1
    }
    function d(e, t) {
      return t < 0 ? void 0 : e?.[t]
    }
    n.d(
      t,
      {},
      {
        J: function (e) {
          var t
          let n,
            u,
            s,
            c,
            f,
            m,
            g,
            h,
            v,
            p = (0, r.c)(38),
            {
              isPersistenceReady: S,
              isStreaming: b,
              metadata: w,
              onPersistSelection: x,
              storedActiveToneSectionId: y,
              toneSections: I,
            } = e
          p[0] !== w || p[1] !== y
            ? ((n = y ?? ("string" == typeof (t = w?.[i.e4]) ? t : void 0)), (p[0] = w), (p[1] = y), (p[2] = n))
            : (n = p[2])
          let C = n,
            [M, P] = (0, o.useState)()
          if (p[3] !== C || p[4] !== I) {
            let e = a(I, C)
            ;((u = d(I, e)), (p[3] = C), (p[4] = I), (p[5] = u))
          } else u = p[5]
          let j = u
          p[6] !== S || p[7] !== b || p[8] !== M || p[9] !== C || p[10] !== I
            ? ((s = (function (e, t, n, r, i) {
                let o = e,
                  u = a(t, e?.section.id),
                  s = d(t, u)
                if (e?.shouldPersist === !0)
                  if (e.section.id === n)
                    if (r) return l(e, u, s, !1)
                    else o = void 0
                  else {
                    if (r || null != s) return l(e, u, s, !0)
                    o = void 0
                  }
                if (r && e?.shouldPersist === !1 && null == s) return e
                let c = a(t, n),
                  f = d(t, c)
                if (r) return null != f ? l(o, c, f, !1) : o?.section.id === n ? o : void 0
                let m = t?.[0]
                if (i && null != n && null == f && null != m) return l(void 0, 0, m, !0)
              })(M, I, C, b, S)),
              (p[6] = S),
              (p[7] = b),
              (p[8] = M),
              (p[9] = C),
              (p[10] = I),
              (p[11] = s))
            : (s = p[11])
          let _ = s
          if ((_ !== M && P(_), p[12] !== _?.section.id || p[13] !== I)) {
            let e = a(I, _?.section.id)
            ;((c = d(I, e)), (p[12] = _?.section.id), (p[13] = I), (p[14] = c))
          } else c = p[14]
          let E = c,
            T = null != _ && (b || _.shouldPersist || _.section.id === C) ? _ : void 0,
            k = null == T ? void 0 : E,
            D = b && null != T && null == k ? T : void 0
          p[15] !== D || p[16] !== I
            ? ((f = (function (e, t) {
                if (null == t) return e
                let n = [...(e ?? [])]
                return (n.splice(Math.min(Math.max(t.index, 0), 2, n.length), 0, t.section), n.slice(0, 3))
              })(I, D)),
              (p[15] = D),
              (p[16] = I),
              (p[17] = f))
            : (f = p[17])
          let A = f,
            R = k?.id ?? D?.section.id ?? j?.id ?? A?.[0]?.id,
            B = (0, o.useRef)(void 0),
            V = (0, o.useEffectEvent)(x)
          ;(p[18] !== S || p[19] !== b || p[20] !== E || p[21] !== V || p[22] !== C || p[23] !== _
            ? ((m = () => {
                !b &&
                  S &&
                  _?.shouldPersist === !0 &&
                  _.section.id !== C &&
                  null != E &&
                  B.current !== _.token &&
                  ((B.current = _.token), V(_.section.id))
              }),
              (p[18] = S),
              (p[19] = b),
              (p[20] = E),
              (p[21] = V),
              (p[22] = C),
              (p[23] = _),
              (p[24] = m))
            : (m = p[24]),
            p[25] !== S || p[26] !== b || p[27] !== E || p[28] !== C || p[29] !== _
              ? ((g = [S, b, E, C, _]), (p[25] = S), (p[26] = b), (p[27] = E), (p[28] = C), (p[29] = _), (p[30] = g))
              : (g = p[30]),
            (0, o.useEffect)(m, g),
            p[31] !== R || p[32] !== A
              ? ((h = (e) => {
                  if (e === R) return
                  let t = a(A, e),
                    n = d(A, t)
                  null != n && P({ index: t, section: n, shouldPersist: !0, token: Symbol() })
                }),
                (p[31] = R),
                (p[32] = A),
                (p[33] = h))
              : (h = p[33]))
          let U = h
          return (
            p[34] !== R || p[35] !== A || p[36] !== U
              ? ((v = { activeToneSectionId: R, displayedToneSections: A, selectToneSection: U }),
                (p[34] = R),
                (p[35] = A),
                (p[36] = U),
                (p[37] = v))
              : (v = p[37]),
            v
          )
        },
      },
    )
  },
  hnOq(e, t, n) {
    var r = n("BhZP")
    n.d(
      t,
      {},
      {
        F7: function (e, t) {
          let n = e?.findIndex((e) => e.id === t) ?? -1,
            r = e?.[n]
          return n > 0 && null != r ? { id: r.id, index: n, isOriginal: !1 } : { isOriginal: !0 }
        },
        Te: function (e, t) {
          return null == t || (0, r.I$)(e).length > 0
            ? e
            : { ...e, [r.CY]: t.map((e) => ({ content: e.content, id: e.id, label: e.tone })) }
        },
        is: function ({ nextContent: e, toneSectionId: t, toneSections: n }) {
          if (null == n || 0 === n.length || null == t || !n.some((e) => e.id === t))
            return { activeToneSectionId: void 0, content: e, toneSections: n }
          let r = n.map((n) => (n.id === t ? { ...n, content: e } : n))
          return { activeToneSectionId: t, content: r[0]?.content ?? e, toneSections: r }
        },
      },
    )
  },
  GO1D(e, t, n) {
    var r = n("BhZP"),
      i = n("yqKZ"),
      o = n("RF9q"),
      l = n("c3f5")
    function a({ content: e, metadata: t, preserveEmptySections: n = !1 }) {
      if (t?.[r.uV] === !0) return (0, r.I$)(t).map((e) => ({ content: e.content, id: e.id, tone: e.label }))
      let o = (0, i.b_)({ content: e, metadata: t, preserveEmptySections: n }),
        l = (0, i.b_)({ content: "", metadata: t })
      return null == o || null == l
        ? o
        : o.map((e, t) => {
            let n = l[t]
            return null == n || n.tone !== e.tone || n.id === e.id ? e : { ...e, id: n.id }
          })
    }
    n.d(
      t,
      {},
      {
        He: function (e) {
          return (0, o.oz)(e)
        },
        IA: a,
        Is: function ({ attributes: e, isStreaming: t, rawText: n }) {
          let r = (n ?? "").replace(/^\r?\n/, "").replace(/\r?\n$/, ""),
            i = (0, o.q4)((0, l.B)(e, "metadata")),
            d = a({ content: r, metadata: i, preserveEmptySections: !t })
          return {
            bodyContent: r,
            content: d?.[0]?.content ?? r,
            emailMetadata: {
              bcc: (0, l.B)(e, "bcc"),
              cc: (0, l.B)(e, "cc"),
              recipient: (0, l.B)(e, "recipient"),
              subject: (0, l.B)(e, "subject"),
            },
            id: (0, l.B)(e, "id"),
            metadata: i,
            title: (0, l.B)(e, "title"),
            toneSections: d,
            variant: (0, l.B)(e, "variant"),
          }
        },
      },
    )
  },
  IQg5(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      o = n("zTAs"),
      l = n("CeUM"),
      a = n("GO1D")
    n.d(
      t,
      {},
      {
        WritingBlockDirectiveRenderer: function (e) {
          let t,
            n,
            d,
            u,
            s,
            c,
            f,
            m,
            g,
            h,
            v,
            p,
            S = (0, i.c)(29),
            {
              attributes: b,
              contentReferences: w,
              isStreaming: x,
              rawText: y,
              renderExtension: I,
              renderPersisted: C,
              testId: M,
            } = e
          if (S[0] !== b || S[1] !== w || S[2] !== x || S[3] !== y || S[4] !== I || S[5] !== C || S[6] !== M) {
            v = Symbol.for("react.early_return_sentinel")
            e: {
              n = (0, a.Is)({ attributes: b, isStreaming: x, rawText: y })
              let e = C?.(n)
              if (null != e) {
                v = (0, r.jsx)(r.Fragment, { children: e })
                break e
              }
              ;((t = l.i),
                (d = (0, o.Io)(n.content, { contentReferences: w, isStreaming: x })),
                (u = void 0),
                (s = n.emailMetadata),
                (c = !1),
                (f = I?.(n)),
                (m = M),
                (g = n.title),
                (h =
                  n.toneSections?.map((e) => ({
                    ...e,
                    content: (0, o.Io)(e.content, { contentReferences: w, isStreaming: x }),
                  })) ?? null))
            }
            ;((S[0] = b),
              (S[1] = w),
              (S[2] = x),
              (S[3] = y),
              (S[4] = I),
              (S[5] = C),
              (S[6] = M),
              (S[7] = t),
              (S[8] = n),
              (S[9] = d),
              (S[10] = u),
              (S[11] = s),
              (S[12] = c),
              (S[13] = f),
              (S[14] = m),
              (S[15] = g),
              (S[16] = h),
              (S[17] = v))
          } else
            ((t = S[7]),
              (n = S[8]),
              (d = S[9]),
              (u = S[10]),
              (s = S[11]),
              (c = S[12]),
              (f = S[13]),
              (m = S[14]),
              (g = S[15]),
              (h = S[16]),
              (v = S[17]))
          return v !== Symbol.for("react.early_return_sentinel")
            ? v
            : (S[18] !== t ||
              S[19] !== n.variant ||
              S[20] !== d ||
              S[21] !== u ||
              S[22] !== s ||
              S[23] !== c ||
              S[24] !== f ||
              S[25] !== m ||
              S[26] !== g ||
              S[27] !== h
                ? ((p = (0, r.jsx)(t, {
                    content: d,
                    editorKey: u,
                    emailMetadata: s,
                    isEditable: c,
                    render: f,
                    testId: m,
                    title: g,
                    toneSections: h,
                    variant: n.variant,
                  })),
                  (S[18] = t),
                  (S[19] = n.variant),
                  (S[20] = d),
                  (S[21] = u),
                  (S[22] = s),
                  (S[23] = c),
                  (S[24] = f),
                  (S[25] = m),
                  (S[26] = g),
                  (S[27] = h),
                  (S[28] = p))
                : (p = S[28]),
              p)
        },
      },
    )
  },
  eZRG(e, t, n) {
    let r = (0, n("ESTr").a)({
      name: "clock-arrow-rotate-counterclockwise-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.043457, y: 2.042969, width: 15.913086, height: 15.913086 },
        visualBounds: { x: 2.043457, y: 2.042969, width: 15.913086, height: 15.913086 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.043457, y: 2.042969, width: 15.913086, height: 15.913086 },
        center: { x: 10, y: 9.999512 },
        insets: { top: 2.042969, right: 2.043457, bottom: 2.043945, left: 2.043457 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 9.999512 }, foreground: { x: 10, y: 9.999512 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10.0005 2.04297C14.3947 2.04316 17.9565 5.60577 17.9565 10C17.9564 14.3941 14.3946 17.9559 10.0005 17.9561C6.21315 17.956 3.04491 15.3108 2.24072 11.7676C2.15948 11.4095 2.38374 11.0531 2.7417 10.9717C3.09978 10.8904 3.45622 11.1146 3.5376 11.4727C4.2072 14.4236 6.84766 16.626 10.0005 16.626C13.66 16.6258 16.6263 13.6595 16.6265 10C16.6265 6.34031 13.6601 3.37323 10.0005 3.37305C7.45999 3.37306 5.2526 4.80293 4.14014 6.9043H5.94971C6.31665 6.90455 6.61359 7.20237 6.61377 7.56934C6.61351 7.93622 6.3166 8.23412 5.94971 8.23438H2.7085C2.34139 8.23438 2.04372 7.93638 2.04346 7.56934V3.92383C2.04346 3.55656 2.34123 3.25879 2.7085 3.25879C3.07577 3.25879 3.37354 3.55656 3.37354 3.92383V5.5957C4.79891 3.45538 7.23414 2.04298 10.0005 2.04297Z" fill="currentColor"/> <path d="M10.0005 5.2832C10.3676 5.28343 10.6655 5.58111 10.6655 5.94824V9.99902C10.6655 10.1753 10.5957 10.345 10.4712 10.4697L8.4458 12.4951C8.18617 12.7547 7.76411 12.7546 7.50439 12.4951C7.24493 12.2355 7.24511 11.8144 7.50439 11.5547L9.33545 9.72363V5.94824C9.33545 5.581 9.63325 5.28324 10.0005 5.2832Z" fill="currentColor"/>',
    })
    n.d(t, {}, { t: r })
  },
  duD4(e, t, n) {
    function r(e, [t, n]) {
      return Math.min(n, Math.max(t, e))
    }
    ;((0, Object.defineProperty)(r, "name", { value: "clamp", configurable: !0 }), n.d(t, {}, { q: r }))
  },
  YAOF(e, t, n) {
    n.d(t, { Q6: () => V, bL: () => _, zi: () => F, CC: () => R })
    var r = n("zd8w"),
      i = n("duD4"),
      o = n("kUVq"),
      l = n("lVCP"),
      a = n("zWxU"),
      d = n("Hj0L"),
      u = n("k5JT")
    function s(e) {
      let t = r.useRef({ value: e, previous: e })
      return r.useMemo(
        () => (
          t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)),
          t.current.previous
        ),
        [e],
      )
    }
    ;(0, Object.defineProperty)(s, "name", { value: "usePrevious", configurable: !0 })
    var c = n("Vuge"),
      f = n("Fc3g"),
      m = n("gMOs"),
      g = n("ABep"),
      h = Object.defineProperty,
      v = (e, t) => h(e, "name", { value: t, configurable: !0 }),
      p = ["PageUp", "PageDown"],
      S = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
      b = {
        "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
        "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
      },
      w = "Slider",
      [x, y, I] = (0, m.N)(w),
      [C, M] = (0, a.A)(w, [I]),
      [P, j] = C(w),
      _ = r.forwardRef(
        v(function (e, t) {
          let {
              name: n,
              min: a = 0,
              max: u = 100,
              step: s = 1,
              orientation: c = "horizontal",
              disabled: f = !1,
              minStepsBetweenThumbs: m = 0,
              defaultValue: h = [a],
              value: b,
              onValueChange: w = v(() => {}, "onValueChange"),
              onValueCommit: y = v(() => {}, "onValueCommit"),
              inverted: I = !1,
              form: C,
              ...M
            } = e,
            j = r.useRef(new Set()),
            _ = r.useRef(0),
            E = r.useRef(!1),
            T = "horizontal" === c,
            [A, R] = r.useState(null),
            B = (0, l.s)(t, R),
            [V = [], U] = (0, d.i)({
              prop: b,
              defaultProp: h,
              onChange: v((e) => {
                let t = [...j.current]
                ;(t[_.current]?.focus({ preventScroll: !0, focusVisible: E.current }), (E.current = !1), w(e))
              }, "onChange"),
            }),
            z = r.useRef(V),
            O = r.useRef(V)
          function K(e) {
            let t = Z(V, e)
            $(e, t)
          }
          function L(e) {
            $(e, _.current)
          }
          function F() {
            String(V) !== String(z.current) && y(V)
          }
          function $(e, t, { commit: n } = { commit: !1 }) {
            let r = Q(s),
              o = X(Math.round((e - a) / s) * s + a, r),
              l = (0, i.q)(o, [a, u])
            U((e = []) => {
              let r = H(e, l, t)
              if (!Y(r, m * s)) return e
              {
                _.current = r.indexOf(l)
                let t = String(r) !== String(e)
                return (t && n && y(r), t ? r : e)
              }
            })
          }
          return (
            r.useEffect(() => {
              let e = C ? A?.ownerDocument.getElementById(C) : A?.closest("form")
              if (e instanceof HTMLFormElement) {
                let t = v(() => U(O.current), "reset")
                return (e.addEventListener("reset", t), () => e.removeEventListener("reset", t))
              }
            }, [A, C, U]),
            v(K, "handleSlideStart"),
            v(L, "handleSlideMove"),
            v(F, "handleSlideEnd"),
            v($, "updateValues"),
            (0, g.jsx)(P, {
              scope: e.__scopeSlider,
              name: n,
              disabled: f,
              min: a,
              max: u,
              valueIndexToChangeRef: _,
              thumbs: j.current,
              values: V,
              orientation: c,
              form: C,
              children: (0, g.jsx)(x.Provider, {
                scope: e.__scopeSlider,
                children: (0, g.jsx)(x.Slot, {
                  scope: e.__scopeSlider,
                  children: (0, g.jsx)(T ? k : D, {
                    "aria-disabled": f,
                    "data-disabled": f ? "" : void 0,
                    ...M,
                    ref: B,
                    onPointerDown: (0, o.mK)(M.onPointerDown, () => {
                      f || ((z.current = V), (E.current = !1))
                    }),
                    min: a,
                    max: u,
                    inverted: I,
                    onSlideStart: f ? void 0 : K,
                    onSlideMove: f ? void 0 : L,
                    onSlideEnd: f ? void 0 : F,
                    onHomeKeyDown: () => {
                      f || ((E.current = !0), $(a, 0, { commit: !0 }))
                    },
                    onEndKeyDown: () => {
                      f || ((E.current = !0), $(u, V.length - 1, { commit: !0 }))
                    },
                    onStepKeyDown: ({ event: e, direction: t }) => {
                      if (!f) {
                        E.current = !0
                        let n = p.includes(e.key) || (e.shiftKey && S.includes(e.key)),
                          r = _.current
                        $(ee(V[r], { min: a, step: s, direction: t, multiplier: n ? 10 : 1 }), r, { commit: !0 })
                      }
                    },
                  }),
                }),
              }),
            })
          )
        }, "Slider"),
      ),
      [E, T] = C(w, { startEdge: "left", endEdge: "right", size: "width", direction: 1 }),
      k = r.forwardRef(
        v(function (e, t) {
          let {
              min: n,
              max: i,
              dir: o,
              inverted: a,
              onSlideStart: d,
              onSlideMove: s,
              onSlideEnd: c,
              onStepKeyDown: f,
              ...m
            } = e,
            [h, p] = r.useState(null),
            S = (0, l.s)(t, p),
            w = r.useRef(void 0),
            x = (0, u.useDirection)(o),
            y = "ltr" === x,
            I = (y && !a) || (!y && a)
          function C(e) {
            let t = w.current || h.getBoundingClientRect(),
              r = N([0, t.width], I ? [n, i] : [i, n])
            return ((w.current = t), r(e - t.left))
          }
          return (
            v(C, "getValueFromPointer"),
            (0, g.jsx)(E, {
              scope: e.__scopeSlider,
              startEdge: I ? "left" : "right",
              endEdge: I ? "right" : "left",
              direction: I ? 1 : -1,
              size: "width",
              children: (0, g.jsx)(A, {
                dir: x,
                "data-orientation": "horizontal",
                ...m,
                ref: S,
                style: { ...m.style, "--radix-slider-thumb-transform": "translateX(-50%)" },
                onSlideStart: (e) => {
                  let t = C(e.clientX)
                  d?.(t)
                },
                onSlideMove: (e) => {
                  let t = C(e.clientX)
                  s?.(t)
                },
                onSlideEnd: () => {
                  ;((w.current = void 0), c?.())
                },
                onStepKeyDown: (e) => {
                  let t = b[I ? "from-left" : "from-right"].includes(e.key)
                  f?.({ event: e, direction: t ? -1 : 1 })
                },
              }),
            })
          )
        }, "SliderHorizontal"),
      ),
      D = r.forwardRef(
        v(function (e, t) {
          let {
              min: n,
              max: i,
              inverted: o,
              onSlideStart: a,
              onSlideMove: d,
              onSlideEnd: u,
              onStepKeyDown: s,
              ...c
            } = e,
            f = r.useRef(null),
            m = (0, l.s)(t, f),
            h = r.useRef(void 0),
            p = !o
          function S(e) {
            let t = h.current || f.current.getBoundingClientRect(),
              r = N([0, t.height], p ? [i, n] : [n, i])
            return ((h.current = t), r(e - t.top))
          }
          return (
            v(S, "getValueFromPointer"),
            (0, g.jsx)(E, {
              scope: e.__scopeSlider,
              startEdge: p ? "bottom" : "top",
              endEdge: p ? "top" : "bottom",
              size: "height",
              direction: p ? 1 : -1,
              children: (0, g.jsx)(A, {
                "data-orientation": "vertical",
                ...c,
                ref: m,
                style: { ...c.style, "--radix-slider-thumb-transform": "translateY(50%)" },
                onSlideStart: (e) => {
                  let t = S(e.clientY)
                  a?.(t)
                },
                onSlideMove: (e) => {
                  let t = S(e.clientY)
                  d?.(t)
                },
                onSlideEnd: () => {
                  ;((h.current = void 0), u?.())
                },
                onStepKeyDown: (e) => {
                  let t = b[p ? "from-bottom" : "from-top"].includes(e.key)
                  s?.({ event: e, direction: t ? -1 : 1 })
                },
              }),
            })
          )
        }, "SliderVertical"),
      ),
      A = r.forwardRef(
        v(function (e, t) {
          let {
              __scopeSlider: n,
              onSlideStart: r,
              onSlideMove: i,
              onSlideEnd: l,
              onHomeKeyDown: a,
              onEndKeyDown: d,
              onStepKeyDown: u,
              ...s
            } = e,
            c = j(w, n)
          return (0, g.jsx)(f.sG.span, {
            ...s,
            ref: t,
            onKeyDown: (0, o.mK)(e.onKeyDown, (e) => {
              "Home" === e.key
                ? (a(e), e.preventDefault())
                : "End" === e.key
                  ? (d(e), e.preventDefault())
                  : p.concat(S).includes(e.key) && (u(e), e.preventDefault())
            }),
            onPointerDown: (0, o.mK)(e.onPointerDown, (e) => {
              let t = e.target
              ;(t.setPointerCapture(e.pointerId),
                e.preventDefault(),
                c.thumbs.has(t) ? t.focus({ preventScroll: !0, focusVisible: !1 }) : r(e))
            }),
            onPointerMove: (0, o.mK)(e.onPointerMove, (e) => {
              e.target.hasPointerCapture(e.pointerId) && i(e)
            }),
            onPointerUp: (0, o.mK)(e.onPointerUp, (e) => {
              let t = e.target
              t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), l(e))
            }),
          })
        }, "SliderImpl"),
      ),
      R = r.forwardRef(
        v(function (e, t) {
          let { __scopeSlider: n, ...r } = e,
            i = j("SliderTrack", n)
          return (0, g.jsx)(f.sG.span, {
            "data-disabled": i.disabled ? "" : void 0,
            "data-orientation": i.orientation,
            ...r,
            ref: t,
          })
        }, "SliderTrack"),
      ),
      B = "SliderRange",
      V = r.forwardRef(
        v(function (e, t) {
          let { __scopeSlider: n, ...i } = e,
            o = j(B, n),
            a = T(B, n),
            d = r.useRef(null),
            u = (0, l.s)(t, d),
            s = o.values.length,
            c = o.values.map((e) => q(e, o.min, o.max)),
            m = s > 1 ? Math.min(...c) : 0,
            h = 100 - Math.max(...c)
          return (0, g.jsx)(f.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...i,
            ref: u,
            style: { ...e.style, [a.startEdge]: m + "%", [a.endEdge]: h + "%" },
          })
        }, "SliderRange"),
      ),
      [U, z] = C("SliderThumb")
    function O(e) {
      let { __scopeSlider: t, name: n, children: i, internal_do_not_use_render: o } = e,
        l = j("SliderThumbProvider", t),
        a = y(t),
        [d, u] = r.useState(null),
        s = r.useMemo(() => (d ? a().findIndex((e) => e.ref.current === d) : -1), [a, d]),
        f = (0, c.X)(d),
        m = !d || !!l.form || !!d.closest("form"),
        h = l.values[s],
        v = n ?? (l.name ? l.name + (l.values.length > 1 ? "[]" : "") : void 0),
        p = void 0 === h ? 0 : q(h, l.min, l.max)
      r.useEffect(() => {
        if (d)
          return (
            l.thumbs.add(d),
            () => {
              l.thumbs.delete(d)
            }
          )
      }, [d, l.thumbs])
      let S = {
        value: h,
        name: v,
        form: l.form,
        isFormControl: m,
        index: s,
        thumb: d,
        onThumbChange: u,
        percent: p,
        size: f,
      }
      return (0, g.jsx)(U, { scope: t, ...S, children: et(o) ? o(S) : i })
    }
    v(O, "SliderThumbProvider")
    var K = "SliderThumbTrigger",
      L = r.forwardRef(
        v(function (e, t) {
          let { __scopeSlider: n, ...r } = e,
            i = j(K, n),
            a = T(K, n),
            { index: d, value: u, percent: s, size: c, onThumbChange: m } = z(K, n),
            h = (0, l.s)(t, m),
            v = G(d, i.values.length),
            p = c?.[a.size],
            S = p ? J(p, s, a.direction) : 0
          return (0, g.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${s}% + ${S}px)`,
            },
            children: (0, g.jsx)(x.ItemSlot, {
              scope: n,
              children: (0, g.jsx)(f.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || v,
                "aria-valuemin": i.min,
                "aria-valuenow": u,
                "aria-valuemax": i.max,
                "aria-orientation": i.orientation,
                "data-orientation": i.orientation,
                "data-disabled": i.disabled ? "" : void 0,
                tabIndex: i.disabled ? void 0 : 0,
                ...r,
                ref: h,
                style: void 0 === u ? { display: "none" } : e.style,
                onFocus: (0, o.mK)(e.onFocus, () => {
                  i.valueIndexToChangeRef.current = d
                }),
              }),
            }),
          })
        }, "SliderThumbTrigger"),
      ),
      F = r.forwardRef(
        v(function (e, t) {
          let { __scopeSlider: n, name: r, ...i } = e
          return (0, g.jsx)(O, {
            __scopeSlider: n,
            name: r,
            internal_do_not_use_render: ({ index: e, isFormControl: r }) =>
              (0, g.jsxs)(g.Fragment, {
                children: [
                  (0, g.jsx)(L, { ...i, ref: t, __scopeSlider: n }),
                  r ? (0, g.jsx)($, { __scopeSlider: n }, e) : null,
                ],
              }),
          })
        }, "SliderThumb"),
      ),
      $ = r.forwardRef(
        v(function ({ __scopeSlider: e, ...t }, n) {
          let { value: i, name: o, form: a } = z("SliderBubbleInput", e),
            d = r.useRef(null),
            u = (0, l.s)(d, n),
            c = s(i)
          return (
            r.useEffect(() => {
              let e = d.current
              if (!e) return
              let t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set
              if (c !== i && t) {
                let n = new Event("input", { bubbles: !0 })
                ;(t.call(e, i), e.dispatchEvent(n))
              }
            }, [c, i]),
            (0, g.jsx)(f.sG.input, { style: { display: "none" }, name: o, form: a, ...t, ref: u, defaultValue: i })
          )
        }, "SliderBubbleInput"),
      )
    function H(e = [], t, n) {
      let r = [...e]
      return ((r[n] = t), r.sort((e, t) => e - t))
    }
    function q(e, t, n) {
      return (0, i.q)((100 / (n - t)) * (e - t), [0, 100])
    }
    function G(e, t) {
      return t > 2 ? `Value ${e + 1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
    }
    function Z(e, t) {
      if (1 === e.length) return 0
      let n = e.map((e) => Math.abs(e - t)),
        r = Math.min(...n)
      return n.indexOf(r)
    }
    function J(e, t, n) {
      let r = e / 2,
        i = N([0, 50], [0, r])
      return (r - i(t) * n) * n
    }
    function W(e) {
      return e.slice(0, -1).map((t, n) => e[n + 1] - t)
    }
    function Y(e, t) {
      return !(t > 0) || Math.min(...W(e)) >= t
    }
    function N(e, t) {
      return (n) => {
        if (e[0] === e[1] || t[0] === t[1]) return t[0]
        let r = (t[1] - t[0]) / (e[1] - e[0])
        return t[0] + r * (n - e[0])
      }
    }
    function Q(e) {
      if (!Number.isFinite(e)) return 0
      let t = e.toString()
      if (t.includes("e")) {
        let [e, n] = t.split("e"),
          r = e.split(".")[1] || "",
          i = Number(n)
        return Math.max(0, r.length - i)
      }
      let n = t.split(".")[1]
      return n ? n.length : 0
    }
    function X(e, t) {
      let n = Math.pow(10, t)
      return Math.round(e * n) / n
    }
    function ee(e, { min: t, step: n, direction: r, multiplier: i }) {
      let o,
        l = Q(n),
        a = (e - t) / n,
        d = Math.round(a)
      return ((o = X(d * n + t, l) === X(e, l) ? d + i * r : r > 0 ? Math.ceil(a) : Math.floor(a)), X(o * n + t, l))
    }
    function et(e) {
      return "function" == typeof e
    }
    ;(v(H, "getNextSortedValues"),
      v(q, "convertValueToPercentage"),
      v(G, "getLabel"),
      v(Z, "getClosestValueIndex"),
      v(J, "getThumbInBoundsOffset"),
      v(W, "getStepsBetweenValues"),
      v(Y, "hasMinStepsBetweenValues"),
      v(N, "linearScale"),
      v(Q, "getDecimalCount"),
      v(X, "roundValue"),
      v(ee, "getNextStepValue"),
      v(et, "isFunction"))
  },
}
//# sourceMappingURL=996976.d6a767f3a0.js.map
