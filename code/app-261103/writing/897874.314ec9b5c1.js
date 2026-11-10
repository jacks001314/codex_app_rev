export const __rspack_esm_ids = [897874]
export const __webpack_modules__ = {
  WkIp(e, t, o) {
    var n = o("bHM9"),
      i = o("Hpb6"),
      a = o("HLFh"),
      r = o("XAqm"),
      s = o("ahCC"),
      l = o("qigS")
    let d = new Set(["start", "end", "isDarkMode"]),
      c = new Set(["startend", "generate_suggestion"])
    function u(e) {
      let t = Object.fromEntries(Object.entries(e.attrs).filter(([e, t]) => null != t && !d.has(e)))
      return (
        e.type.name === n.Wm.ORDERED_LIST && ((t.startingNumber ??= t.order), delete t.order),
        e.type.name === n.Wm.CODE_BLOCK && ((t.lang ||= t.language), delete t.language),
        t
      )
    }
    function h(e) {
      let t = Object.values(n.Rg).find((t) => t === e.type.name)
      if (null == t) throw Error(`Unsupported collaborative document mark: ${e.type.name}`)
      let o = Object.fromEntries(Object.entries(e.attrs).filter(([, e]) => null != e))
      return { type: t, ...(0 === Object.keys(o).length ? {} : { attrs: o }) }
    }
    function g(e) {
      let t = Object.values(n.Wm).find((t) => t === e.type.name)
      if (null == t) throw Error(`Unsupported collaborative document node: ${e.type.name}`)
      let o = u(e),
        i = []
      e.forEach((e) => {
        i.push(g(e))
      })
      let a = e.type.name === l.M ? [] : e.marks.filter((e) => !c.has(e.type.name)).map(h)
      if (!e.isText && a.length > 0) throw Error("Collaborative document marks require text nodes")
      return {
        type: t,
        ...(0 === Object.keys(o).length ? {} : { attrs: o }),
        ...(0 === i.length ? {} : { content: i }),
        ...(0 === a.length ? {} : { marks: a }),
        ...(e.isText ? { text: e.text ?? "" } : {}),
      }
    }
    function f(e) {
      let t = []
      return (
        e.content.forEach((e) => {
          t.push(g(e))
        }),
        { content: t, openStart: e.openStart, openEnd: e.openEnd }
      )
    }
    function m(e, t) {
      return { anchor: { position: e, affinity: n.wL.FORWARD }, head: { position: t, affinity: n.wL.FORWARD } }
    }
    o.d(
      t,
      {},
      {
        l: g,
        y: function (e, t, o) {
          let g = e,
            p = []
          for (let e of o) {
            let t = e.apply(g)
            if (null == t.doc) throw Error("Collaborative document steps could not be replayed")
            ;(p.push(
              ...(function e(t, o, g) {
                if (t instanceof s.f) return t.replacements(o).flatMap((t) => e(t, o, g))
                if (t instanceof r.Q) return t.changes.toReversed().flatMap((t) => e(t, o, g))
                if (t instanceof a.Ln)
                  return [
                    {
                      kind: n.HQ.REPLACE_RANGE,
                      replaceRange: {
                        range: m(t.from, t.to),
                        replacement: { kind: n.Eo.SLICE, slice: f(t.slice) },
                        structure: !0 === t.toJSON().structure,
                      },
                    },
                  ]
                if (t instanceof a.Wg)
                  return [
                    {
                      kind: n.HQ.REPLACE_AROUND,
                      replaceAround: {
                        range: m(t.from, t.to),
                        gap: m(t.gapFrom, t.gapTo),
                        slice: f(t.slice),
                        insert: t.insert,
                        structure: !0 === t.toJSON().structure,
                      },
                    },
                  ]
                if (t instanceof a.XE || t instanceof a.Ys) {
                  if (c.has(t.mark.type.name)) return []
                  let e = h(t.mark),
                    r = []
                  return (
                    o.nodesBetween(t.from, t.to, (o, s, d) => {
                      if (!o.isInline) return
                      let c = t instanceof a.Ys && t.mark.isInSet(o.marks),
                        u =
                          t instanceof a.XE &&
                          o.isAtom &&
                          d?.type.allowsMarkType(t.mark.type) === !0 &&
                          !i.CU.sameSet(o.marks, t.mark.addToSet(o.marks))
                      if (u || c) {
                        if (!o.isText) {
                          if (o.type.name === l.M) return
                          throw Error("Collaborative document marks require text nodes")
                        }
                        r.push({
                          kind: n.HQ.SET_MARK,
                          setMark: {
                            range: m(Math.max(t.from, s), Math.min(t.to, s + o.nodeSize)),
                            mark: e,
                            enabled: u,
                          },
                        })
                      }
                    }),
                    r
                  )
                }
                if (t instanceof a.q4) {
                  if (d.has(t.attr)) return []
                  let e = g.nodeAt(t.pos)
                  if (null == e || e.isText) throw Error("Unsupported collaborative document attribute change")
                  return [{ kind: n.HQ.SET_NODE_ATTRIBUTES, setNodeAttributes: { position: t.pos, attrs: u(e) } }]
                }
                if (
                  (t instanceof a.eY && d.has(t.attr)) ||
                  ((t instanceof a.pd || t instanceof a.Wj) && c.has(t.mark.type.name))
                )
                  return []
                throw Error("Unsupported collaborative document step")
              })(e, g, t.doc),
            ),
              (g = t.doc))
          }
          if (!g.eq(t)) throw Error("Collaborative document steps do not match the editor")
          return (
            t.descendants((e) => {
              if (e.type.name === l.M && e.marks.some((e) => !c.has(e.type.name)))
                throw Error("Collaborative document images cannot have marks")
            }),
            p
          )
        },
      },
    )
  },
  S2kx(e, t, o) {
    var n = o("bHM9"),
      i = o("Hpb6"),
      a = o("f6KK"),
      r = o("WkIp")
    let s = new a.hs("writing-block-collaborative-sync"),
      l = new WeakMap(),
      d = 0
    function c(e) {
      let t = l.get(e)
      return (
        (null == t || t.editor !== e.editor) &&
          ((t = { editor: e.editor, undo: [], redo: [], pending: void 0 }), l.set(e, t)),
        t
      )
    }
    function u(e, t) {
      let o = e.snapshot().revision,
        i = e.createAnchor({ baseRevision: o, point: { position: t.selection.anchor, affinity: n.wL.FORWARD } }).anchor,
        a = e.createAnchor({ baseRevision: o, point: { position: t.selection.head, affinity: n.wL.FORWARD } }).anchor
      return null == i || null == a ? void 0 : { anchor: i, head: a }
    }
    function h(e, t) {
      let o = e.editor.snapshot().document
      return null == o ? null : t.nodeFromJSON(o.ast)
    }
    function g(e, t) {
      let o = c(e),
        i = t ? o.redo : o.undo,
        a = t ? o.undo : o.redo,
        r = i.at(-1)
      o.pending = t ? r?.after : r?.before
      let s = { baseRevision: e.editor.snapshot().revision, editId: `web-${t ? "redo" : "undo"}:${++d}` },
        l = t ? e.editor.redo(s) : e.editor.undo(s)
      return ((o.pending = void 0), l.status === n.H8.APPLIED && (null != r && (i.pop(), a.push(r)), !0))
    }
    o.d(
      t,
      {},
      {
        Sc: g,
        Z7: function (
          e,
          t,
          o,
          i,
          a,
          { editId: s = `editor-edit:${++d}`, addToHistory: l = !0, onConversionError: h } = {},
        ) {
          let g
          try {
            g = (0, r.y)(t.doc, o.doc, i)
          } catch (e) {
            return (h?.(e instanceof Error ? e.name : typeof e), !1)
          }
          if (0 === g.length) return !0
          let f = e.editor,
            m = l ? u(f, t) : void 0,
            p = { baseRevision: f.snapshot().revision, editId: s, undoGroup: a, addToHistory: l, operations: g },
            b = f.applyLocalEdits(p)
          if (l && b.status === n.H8.APPLIED) {
            let t = u(f, o),
              n = c(e),
              i = n.undo.at(-1)
            ;(i?.undoGroup === a ? (i.after = t) : n.undo.push({ undoGroup: a, before: m, after: t }),
              (n.redo.length = 0))
          }
          return b.status !== n.H8.REJECTED
        },
        k5: s,
        p7: h,
        tI: function (e, t) {
          return (o, n) => (null == n ? e.editor.snapshot().history[t ? "canRedo" : "canUndo"] : g(e, t))
        },
        vT: function (e, t) {
          return new a.k_({
            key: s,
            filterTransaction: (t) =>
              !t.docChanged || t.getMeta(s)?.isChangeOrigin === !0 || e.editor.snapshot().status === n.Cz.EDITABLE,
            view: (o) => ({
              destroy: e.subscribeToEditorChanges((r) => {
                if (
                  (r.origin === n.cM.LOCAL && r.editId?.startsWith(`${t}:`)) ||
                  0 === r.patches.length ||
                  o.isDestroyed
                )
                  return
                let l = o.state.tr
                try {
                  for (let e of r.patches)
                    l.replace(
                      e.from,
                      e.to,
                      (function (e, t) {
                        return new i.Ji(i.FK.fromArray(e.content.map((e) => t.nodeFromJSON(e))), e.openStart, e.openEnd)
                      })(e.slice, o.state.schema),
                    )
                } catch {
                  let t = h(e, o.state.schema)
                  if (null == t) return
                  l.replaceWith(0, l.doc.content.size, t.content)
                }
                if (l.docChanged) {
                  if (r.origin === n.cM.HISTORY) {
                    let t = c(e).pending
                    if (null != t) {
                      let o = e.editor.resolveSelection(t).selection
                      if (null != o) {
                        let e = l.doc.content.size,
                          t = Math.min(Math.max(o.anchor.position, 0), e),
                          n = Math.min(Math.max(o.head.position, 0), e)
                        l.setSelection(a.U3.between(l.doc.resolve(t), l.doc.resolve(n), t <= n ? 1 : -1))
                      }
                    }
                  }
                  ;(l.setMeta("addToHistory", !1),
                    l.setMeta(s, { isChangeOrigin: !0, isUndoRedoOperation: r.origin === n.cM.HISTORY }),
                    o.dispatch(l))
                }
              }),
            }),
          })
        },
      },
    )
  },
  s6ST(e, t, o) {
    o.d(t, { W: () => T })
    var n = o("ABep"),
      i = o("QosV"),
      a = o("Vsx4"),
      r = o("q1q2"),
      s = o("tILS"),
      l = o("Ks4B")
    let d = (0, o("nkTT").a)({
      name: "text-bold-sm-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 4.740234, y: 3.859375, width: 6.520508, height: 8.28125 },
        visualBounds: { x: 4.740234, y: 3.859375, width: 6.520508, height: 8.28125 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 4.740234, y: 3.859375, width: 6.520508, height: 8.28125 },
        center: { x: 8.000488, y: 8 },
        insets: { top: 3.859375, right: 4.739258, bottom: 3.859375, left: 4.740234 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.000488, y: 8 }, foreground: { x: 8.000488, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.34961 3.85938C9.13365 3.85944 9.76011 4.06005 10.1885 4.4082C10.6145 4.75447 10.8534 5.25393 10.8535 5.875C10.8535 6.75237 10.1941 7.56721 9.33789 7.69531L9.25293 7.70801V7.79785L9.3457 7.80469C10.457 7.88936 11.2607 8.74906 11.2607 9.81348C11.2606 10.5323 10.9902 11.1102 10.5059 11.5098C10.0193 11.911 9.30718 12.1406 8.41406 12.1406H5.53223C5.27226 12.1406 5.07799 12.0615 4.94824 11.9268C4.81803 11.7915 4.74023 11.587 4.74023 11.3115V4.68262C4.74023 4.41032 4.81801 4.20688 4.94824 4.07227C5.07803 3.93825 5.2724 3.8594 5.53223 3.85938H8.34961ZM6.32422 11.0176H7.95996C8.48546 11.0175 8.90672 10.9069 9.19824 10.6777C9.49371 10.4453 9.64258 10.1022 9.64258 9.67188C9.64255 9.24862 9.48767 8.91298 9.18457 8.68652C8.88584 8.46356 8.45463 8.35547 7.91797 8.35547H6.32422V11.0176ZM6.32422 7.38574H7.70508C8.19328 7.38574 8.59198 7.27919 8.87012 7.06738C9.15188 6.85272 9.2998 6.53787 9.2998 6.15137C9.29973 5.78557 9.16997 5.4881 8.91992 5.28418C8.67247 5.08262 8.31892 4.98243 7.88867 4.98242H6.32422V7.38574Z" fill="currentColor"/>',
    })
    var c = o("S2kx"),
      u = o("dZHD"),
      h = o("f6KK"),
      g = o("zd8w"),
      f = o("v7qY"),
      m = o("Wf1j"),
      p = o("oyxz"),
      b = o("wD9O"),
      x = o("ygO2"),
      k = o("bqtn"),
      w = o("jqmc"),
      v = o("HOLv"),
      E = o("GO7r"),
      A = o("Sob7"),
      y = o("uuN8"),
      C = o("Ot7V"),
      M = o("aepO")
    function S(e) {
      let t,
        o,
        a,
        r,
        s,
        l,
        d,
        c,
        u,
        h,
        g,
        f,
        b,
        k,
        w,
        S,
        T = (0, i.c)(50),
        { editorView: R, link: D, onEdit: I } = e,
        O = (0, m.A)()
      ;(T[0] !== R.state.doc || T[1] !== D.from || T[2] !== D.to
        ? ((t = R.state.doc.textBetween(D.from, D.to)),
          (T[0] = R.state.doc),
          (T[1] = D.from),
          (T[2] = D.to),
          (T[3] = t))
        : (t = T[3]),
        T[4] !== R.state.doc || T[5] !== D.from || T[6] !== D.href || T[7] !== D.to || T[8] !== t
          ? ((o = t === D.href),
            R.state.doc.nodesBetween(D.from, D.to, (e) => {
              o = o || e.marks.some(L)
            }),
            (T[4] = R.state.doc),
            (T[5] = D.from),
            (T[6] = D.href),
            (T[7] = D.to),
            (T[8] = t),
            (T[9] = o))
          : (o = T[9]),
        T[10] !== D.href
          ? ((a = D.href.length > 34 ? `${D.href.slice(0, 34)}…` : D.href), (T[10] = D.href), (T[11] = a))
          : (a = T[11]))
      let B = a
      return (
        T[12] !== R ||
        T[13] !== O ||
        T[14] !== o ||
        T[15] !== D.from ||
        T[16] !== D.href ||
        T[17] !== D.to ||
        T[18] !== B ||
        T[19] !== I
          ? ((r =
              !o &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("span", {
                    className: "max-w-56 truncate px-2 text-xs text-secondary select-none",
                    title: D.href,
                    children: B,
                  }),
                  (0, n.jsx)(x.$, {
                    color: "ghostActive",
                    size: "toolbar",
                    "aria-label": O.formatMessage({
                      id: "codex.writingBlock.format.editExistingLink",
                      defaultMessage: "Edit link",
                      description:
                        "Accessible name for the floating writing-block toolbar button that edits the hyperlink at the current text cursor in Codex Apps.",
                    }),
                    uniform: !0,
                    onClick: I,
                    children: (0, n.jsx)(E.Npl, {}),
                  }),
                  (0, n.jsx)(x.$, {
                    color: "ghostActive",
                    size: "toolbar",
                    "aria-label": O.formatMessage({
                      id: "codex.writingBlock.format.removeLink",
                      defaultMessage: "Remove link",
                      description:
                        "Accessible name for the floating writing-block toolbar button that removes hyperlink formatting from the text at the current cursor in Codex Apps.",
                    }),
                    uniform: !0,
                    onClick: () => {
                      let e = R.state.schema.marks.link
                      null != e && (R.dispatch(R.state.tr.removeMark(D.from, D.to, e)), R.focus())
                    },
                    children: (0, n.jsx)(v.I, { asset: A.P }),
                  }),
                  (0, n.jsx)("div", { "aria-hidden": !0, className: "mx-1 h-3 w-px shrink-0 bg-border" }),
                ],
              })),
            (T[12] = R),
            (T[13] = O),
            (T[14] = o),
            (T[15] = D.from),
            (T[16] = D.href),
            (T[17] = D.to),
            (T[18] = B),
            (T[19] = I),
            (T[20] = r))
          : (r = T[20]),
        T[21] !== D.from || T[22] !== D.href || T[23] !== D.to
          ? ((s = JSON.stringify([D.href, D.from, D.to])),
            (T[21] = D.from),
            (T[22] = D.href),
            (T[23] = D.to),
            (T[24] = s))
          : (s = T[24]),
        T[25] !== O
          ? ((l = O.formatMessage({
              id: "codex.writingBlock.format.copyLink",
              defaultMessage: "Copy link",
              description:
                "Accessible name for the floating writing-block toolbar button that copies the URL of the hyperlink at the current text cursor in Codex Apps.",
            })),
            (T[25] = O),
            (T[26] = l))
          : (l = T[26]),
        T[27] !== O
          ? ((d = O.formatMessage({
              id: "codex.writingBlock.format.copyLinkLabel",
              defaultMessage: "Copy",
              description: "Label for the floating writing-block toolbar button that copies the selected link URL",
            })),
            (T[27] = O),
            (T[28] = d))
          : (d = T[28]),
        T[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = { copy: (0, n.jsx)(E.R3B, {}), copied: (0, n.jsx)(E.ALZ, {}) }), (T[29] = c))
          : (c = T[29]),
        T[30] !== D.href ? ((u = (e) => (0, M.E)(D.href, e)), (T[30] = D.href), (T[31] = u)) : (u = T[31]),
        T[32] !== s || T[33] !== l || T[34] !== d || T[35] !== u
          ? ((h = (0, n.jsx)(y.i, { ariaLabel: l, buttonText: d, icons: c, onCopy: u, renderButton: _ }, s)),
            (T[32] = s),
            (T[33] = l),
            (T[34] = d),
            (T[35] = u),
            (T[36] = h))
          : (h = T[36]),
        T[37] !== O
          ? ((g = O.formatMessage({
              id: "codex.writingBlock.format.openLink",
              defaultMessage: "Open link",
              description:
                "Accessible name for the floating writing-block toolbar button that safely opens the hyperlink at the current text cursor in Codex Apps.",
            })),
            (T[37] = O),
            (T[38] = g))
          : (g = T[38]),
        T[39] !== D.href
          ? ((f = (e) => {
              ;(0, C.PQ)({ event: e, href: D.href, initiator: "open_in_browser_bridge" })
            }),
            (T[39] = D.href),
            (T[40] = f))
          : (f = T[40]),
        T[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, n.jsx)(E.GRR, {})),
            (k = (0, n.jsx)(p.A, {
              id: "codex.writingBlock.format.openLinkLabel",
              defaultMessage: "Open",
              description: "Label for the floating writing-block toolbar button that opens the selected link URL",
            })),
            (T[41] = b),
            (T[42] = k))
          : ((b = T[41]), (k = T[42])),
        T[43] !== g || T[44] !== f
          ? ((w = (0, n.jsxs)(x.$, {
              color: "ghostActive",
              size: "toolbar",
              "aria-label": g,
              onClick: f,
              children: [b, k],
            })),
            (T[43] = g),
            (T[44] = f),
            (T[45] = w))
          : (w = T[45]),
        T[46] !== w || T[47] !== r || T[48] !== h
          ? ((S = (0, n.jsxs)(n.Fragment, { children: [r, h, w] })), (T[46] = w), (T[47] = r), (T[48] = h), (T[49] = S))
          : (S = T[49]),
        S
      )
    }
    function _(e) {
      return (0, n.jsx)(x.$, { ...e, color: "ghostActive", size: "toolbar" })
    }
    function L(e) {
      return "link" === e.type.name && !0 === e.attrs.isAutolink
    }
    function T(e) {
      let t,
        o,
        d,
        v,
        A,
        y,
        C,
        M,
        _,
        L,
        T,
        I,
        O,
        B,
        N,
        j,
        P,
        H,
        U,
        z,
        W,
        Y,
        K = (0, i.c)(89),
        {
          editable: Q,
          editorView: F,
          isEditSelectionLoading: V,
          isOpenLinkModifierPressed: q,
          onAskForChanges: G,
          onCancelEditSelection: $,
          onEditSelection: J,
          onEditSelectionOpenChange: X,
          proseMirrorStore: Z,
          trailingActions: ee,
        } = e,
        et = void 0 === Q || Q,
        eo = void 0 !== V && V,
        en = (0, m.A)(),
        ei = (0, b.dz)(),
        [ea, er] = (0, g.useState)("actions"),
        [es, el] = (0, g.useState)(""),
        [ed, ec] = (0, g.useState)(null),
        [eu, eh] = (0, g.useState)(!0)
      K[0] !== F.isDestroyed || K[1] !== F.state
        ? ((t = () => (F.isDestroyed ? null : F.state.selection)), (K[0] = F.isDestroyed), (K[1] = F.state), (K[2] = t))
        : (t = K[2])
      let eg = t,
        ef = (0, g.useSyncExternalStore)(Z.subscribe, eg, eg)
      K[3] !== ef ? ((o = (0, u.Bp)(ef)), (K[3] = ef), (K[4] = o)) : (o = K[4])
      let em = o,
        ep = ed?.from ?? em?.from ?? ef?.from,
        eb = ed?.to ?? em?.to ?? ef?.to
      K[5] !== F.state || K[6] !== ef
        ? ((d = ef instanceof h.nh && "writing_block_image" === ef.node.type.name && null != c.k5.get(F.state)),
          (K[5] = F.state),
          (K[6] = ef),
          (K[7] = d))
        : (d = K[7])
      let ex = d,
        ek = eu && !ex && !F.isDestroyed && null != ep && null != eb && ep !== eb
      K[8] !== F || K[9] !== ep || K[10] !== eb
        ? ((v = {
            contextElement: F.dom,
            getBoundingClientRect() {
              if (null != ep && null != eb && !F.isDestroyed)
                try {
                  let e = F.coordsAtPos(ep),
                    t = F.coordsAtPos(eb),
                    o = Math.min(e.left, t.left),
                    n = Math.max(e.right, t.right),
                    i = Math.min(e.top, t.top),
                    a = Math.max(e.bottom, t.bottom)
                  return DOMRect.fromRect({ height: a - i, width: n - o, x: o, y: i })
                } catch {}
              return F.dom.getBoundingClientRect()
            },
          }),
          (K[8] = F),
          (K[9] = ep),
          (K[10] = eb),
          (K[11] = v))
        : (v = K[11])
      let ew = v
      ;(K[12] !== ew ? ((A = { reference: ew }), (K[12] = ew), (K[13] = A)) : (A = K[13]),
        K[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = [
              (0, r.cY)(8),
              (0, r.UU)({ padding: 8 }),
              (0, r.BN)({ padding: 8 }),
              (0, r.Ej)({
                padding: 8,
                apply(e) {
                  let { availableWidth: t, elements: o } = e
                  o.floating.style.maxWidth = `${t}px`
                },
              }),
            ]),
            (K[14] = y))
          : (y = K[14]),
        K[15] !== ek || K[16] !== A
          ? ((C = { elements: A, middleware: y, open: ek, placement: "top", whileElementsMounted: s.ll }),
            (K[15] = ek),
            (K[16] = A),
            (K[17] = C))
          : (C = K[17]))
      let { floatingStyles: ev, refs: eE } = (0, r.we)(C),
        { floating: eA, setFloating: ey } = eE
      K[18] !== F || K[19] !== ea || K[20] !== X
        ? ((M = (e) => {
            ;("edit" === ea && X?.(!1),
              ec(null),
              el(""),
              er("actions"),
              (void 0 === e || e) && !F.isDestroyed && F.focus())
          }),
          (K[18] = F),
          (K[19] = ea),
          (K[20] = X),
          (K[21] = M))
        : (M = K[21])
      let eC = M
      K[22] !== eC || K[23] !== ea || K[24] !== $
        ? ((_ = (e) => {
            ;("edit" === ea && $?.(), eC(e))
          }),
          (K[22] = eC),
          (K[23] = ea),
          (K[24] = $),
          (K[25] = _))
        : (_ = K[25])
      let eM = _
      K[26] !== eM || K[27] !== F.dom || K[28] !== eA
        ? ((L = (e) => {
            ;(e instanceof Node &&
              (F.dom.contains(e) ||
                eA.current?.contains(e) ||
                (e instanceof Element && null != e.closest('[role="menu"]')))) ||
              (eM(!1), eh(!1))
          }),
          (K[26] = eM),
          (K[27] = F.dom),
          (K[28] = eA),
          (K[29] = L))
        : (L = K[29])
      let eS = L
      K[30] !== eS
        ? ((T = (e) => {
            eS(e.relatedTarget)
          }),
          (K[30] = eS),
          (K[31] = T))
        : (T = K[31])
      let e_ = (0, g.useEffectEvent)(T)
      K[32] !== eM || K[33] !== eA || K[34] !== ea
        ? ((I = (e) => {
            "actions" === ea ||
              !(e.target instanceof Node) ||
              eA.current?.contains(e.target) ||
              (e.target instanceof Element && null != e.target.closest('[role="menu"]')) ||
              eM(!1)
          }),
          (K[32] = eM),
          (K[33] = eA),
          (K[34] = ea),
          (K[35] = I))
        : (I = K[35])
      let eL = (0, g.useEffectEvent)(I)
      if (
        (K[36] !== F.dom || K[37] !== e_ || K[38] !== eL
          ? ((O = () => {
              let e = (e) => {
                  e_(e)
                },
                t = (e) => {
                  eL(e)
                },
                o = () => eh(!0),
                n = F.dom.ownerDocument
              return (
                F.dom.addEventListener("focusout", e),
                F.dom.addEventListener("focusin", o),
                n.addEventListener("pointerdown", t),
                () => {
                  ;(F.dom.removeEventListener("focusout", e),
                    F.dom.removeEventListener("focusin", o),
                    n.removeEventListener("pointerdown", t))
                }
              )
            }),
            (K[36] = F.dom),
            (K[37] = e_),
            (K[38] = eL),
            (K[39] = O))
          : (O = K[39]),
        K[40] !== F ? ((B = [F]), (K[40] = F), (K[41] = B)) : (B = K[41]),
        (0, g.useEffect)(O, B),
        !ek || null == ep || null == eb || ("actions" === ea && null != em && void 0 !== q && q))
      )
        return null
      K[42] !== em?.href || K[43] !== ep || K[44] !== X || K[45] !== eb
        ? ((N = (e) => {
            ;(ec({ from: ep, to: eb }), el("link" === e ? (em?.href ?? "") : ""), er(e), "edit" === e && X?.(!0))
          }),
          (K[42] = em?.href),
          (K[43] = ep),
          (K[44] = X),
          (K[45] = eb),
          (K[46] = N))
        : (N = K[46])
      let eT = N,
        eR = "link" === ea
      if (eR) {
        let e
        ;(K[47] !== en
          ? ((e = en.formatMessage({
              id: "codex.writingBlock.format.saveLink",
              defaultMessage: "Save link",
              description:
                "Accessible name for the button that adds a hyperlink to selected text in a Codex Apps writing block.",
            })),
            (K[47] = en),
            (K[48] = e))
          : (e = K[48]),
          (j = e))
      } else if (eo) {
        let e
        ;(K[49] !== en
          ? ((e = en.formatMessage({
              id: "codex.writingBlock.format.cancelEdit",
              defaultMessage: "Cancel",
              description:
                "Accessible name for the stop button in the selected-text AI edit composer of a Codex Apps writing block. It cancels the pending request and leaves the instruction available to retry.",
            })),
            (K[49] = en),
            (K[50] = e))
          : (e = K[50]),
          (j = e))
      } else {
        let e
        ;(K[51] !== en
          ? ((e = en.formatMessage({
              id: "codex.writingBlock.format.submitEdit",
              defaultMessage: "Submit edit instruction",
              description:
                "Accessible name for the button that submits an AI edit instruction for selected text in a Codex Apps writing block.",
            })),
            (K[51] = en),
            (K[52] = e))
          : (e = K[52]),
          (j = e))
      }
      K[53] !== eS ? ((P = (e) => eS(e.relatedTarget)), (K[53] = eS), (K[54] = P)) : (P = K[54])
      let eD = 1 !== ei ? ei : void 0
      return (
        K[55] !== eD ? ((H = { zoom: eD }), (K[55] = eD), (K[56] = H)) : (H = K[56]),
        K[57] !== em ||
        K[58] !== eC ||
        K[59] !== eM ||
        K[60] !== et ||
        K[61] !== F ||
        K[62] !== ep ||
        K[63] !== en ||
        K[64] !== eo ||
        K[65] !== eR ||
        K[66] !== ea ||
        K[67] !== G ||
        K[68] !== $ ||
        K[69] !== J ||
        K[70] !== X ||
        K[71] !== eT ||
        K[72] !== ef?.ranges ||
        K[73] !== j ||
        K[74] !== eb ||
        K[75] !== ee ||
        K[76] !== es
          ? ((U =
              "actions" !== ea && et
                ? (0, n.jsxs)("form", {
                    "aria-busy": !eR && eo,
                    className:
                      "pointer-events-auto flex w-96 max-w-full items-center gap-1.5 rounded-full border border-default bg-surface p-1 ps-3.5 font-sans shadow-lg",
                    onKeyDown: (e) => {
                      ;(e.stopPropagation(),
                        "Escape" !== e.key || e.nativeEvent.isComposing || (e.preventDefault(), eM(!0)))
                    },
                    onSubmit: (e) => {
                      e.preventDefault()
                      let t = es.trim()
                      if (!t || (!eR && eo)) return
                      if (!eR) {
                        ;(X?.(!0),
                          J?.(t, { from: ep, to: eb }).then((e) => {
                            e && !F.isDestroyed && eC()
                          }))
                        return
                      }
                      let o = (0, a.xz)(t),
                        n = F.state.schema.marks.link
                      null != o &&
                        null != n &&
                        (F.dispatch(
                          F.state.tr
                            .setSelection(h.U3.create(F.state.doc, ep, eb))
                            .removeMark(ep, eb, n)
                            .addMark(ep, eb, n.create({ href: o })),
                        ),
                        eC())
                    },
                    children: [
                      (0, n.jsx)("input", {
                        "aria-label": eR
                          ? en.formatMessage({
                              id: "codex.writingBlock.format.linkInput",
                              defaultMessage: "Link URL",
                              description:
                                "Accessible name for the URL input shown when adding a hyperlink to selected text in a Codex Apps writing block.",
                            })
                          : en.formatMessage({
                              id: "codex.writingBlock.format.editInput",
                              defaultMessage: "Edit instruction",
                              description:
                                "Accessible name for the AI edit instruction input shown when editing selected text in a Codex Apps writing block.",
                            }),
                        autoComplete: "off",
                        autoFocus: !0,
                        className:
                          "min-w-0 flex-1 bg-transparent text-sm text-default outline-none placeholder:text-codex-description",
                        name: eR ? "writing-block-link" : "writing-block-edit",
                        placeholder: eR
                          ? en.formatMessage({
                              id: "codex.writingBlock.format.linkPlaceholder",
                              defaultMessage: "Paste a link…",
                              description:
                                "Placeholder in the URL input shown when adding a hyperlink to selected text in a Codex Apps writing block.",
                            })
                          : en.formatMessage({
                              id: "codex.writingBlock.format.editPlaceholder",
                              defaultMessage: "Describe the edit…",
                              description:
                                "Placeholder in the AI edit instruction input shown when editing selected text in a Codex Apps writing block.",
                            }),
                        required: !0,
                        readOnly: !eR && eo,
                        value: es,
                        onChange: (e) => el(e.target.value),
                      }),
                      (0, n.jsx)(x.$, {
                        "aria-label": j,
                        color: "primary",
                        disabled: !eo && 0 === es.trim().length,
                        onClick:
                          !eR && eo
                            ? (e) => {
                                ;(e.preventDefault(), $?.())
                              }
                            : void 0,
                        size: "composerSm",
                        type: !eR && eo ? "button" : "submit",
                        uniform: !0,
                        children: !eR && eo ? (0, n.jsx)(E.Gmf, {}) : (0, n.jsx)(E.npO, {}),
                      }),
                    ],
                  })
                : (0, n.jsxs)(w.iU, {
                    variant: et ? "formatting" : "segmented",
                    children: [
                      !et && ee,
                      et && null != em && (0, n.jsx)(S, { editorView: F, link: em, onEdit: () => eT("link") }),
                      et &&
                        null == em &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            null != G &&
                              (0, n.jsx)(x.$, {
                                color: "ghostActive",
                                size: "formatToolbar",
                                onClick: () => {
                                  ;(F.dispatch(F.state.tr.setSelection(h.U3.create(F.state.doc, ep, eb))), G(F))
                                },
                                children: (0, n.jsx)(p.A, {
                                  id: "codex.writingBlock.format.askForChanges",
                                  defaultMessage: "Ask for changes",
                                  description:
                                    "Button in the floating writing-block toolbar that quotes the selected draft text in the chat composer so the user can request a revision.",
                                }),
                              }),
                            null == G &&
                              null != J &&
                              (0, n.jsx)(x.$, {
                                color: "ghostActive",
                                size: "formatToolbar",
                                onClick: () => eT("edit"),
                                children: (0, n.jsx)(p.A, {
                                  id: "codex.writingBlock.format.askForSelectionEdit",
                                  defaultMessage: "Ask for changes",
                                  description:
                                    "Button in the floating Codex Apps writing-block toolbar that opens an AI edit composer for the currently selected text.",
                                }),
                              }),
                            (null != G || null != J) &&
                              (0, n.jsx)("div", { "aria-hidden": !0, className: "mx-1 h-3 w-px shrink-0 bg-border" }),
                            (0, n.jsx)(u.uL, {
                              actions: ["link", "bold", "italic"],
                              editorView: F,
                              labels: {
                                bold: en.formatMessage({
                                  id: "codex.writingBlock.format.bold",
                                  defaultMessage: "Bold",
                                  description:
                                    "Accessible name for the floating writing-block toolbar button that toggles bold formatting on selected text in Codex Apps.",
                                }),
                                code: en.formatMessage({
                                  id: "codex.writingBlock.format.code",
                                  defaultMessage: "Code",
                                  description:
                                    "Accessible name for the floating writing-block toolbar button that toggles inline code formatting on selected text in Codex Apps.",
                                }),
                                italic: en.formatMessage({
                                  id: "codex.writingBlock.format.italic",
                                  defaultMessage: "Italic",
                                  description:
                                    "Accessible name for the floating writing-block toolbar button that toggles italic formatting on selected text in Codex Apps.",
                                }),
                                link: en.formatMessage({
                                  id: "codex.writingBlock.format.link",
                                  defaultMessage: "Link",
                                  description:
                                    "Accessible name for the floating writing-block toolbar button that adds or removes a hyperlink on selected text in Codex Apps.",
                                }),
                              },
                              onEditLink: () => eT("link"),
                              ranges: ef?.ranges,
                              renderAction: D,
                              trailingActions: (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)(u.ji, {
                                    editorView: F,
                                    labels: {
                                      checklist: en.formatMessage({
                                        id: "codex.writingBlock.format.textStyle.checklist",
                                        defaultMessage: "Checklist",
                                        description:
                                          "Writing-block formatting-menu option in Codex Apps that converts the selected text into an unchecked checklist.",
                                      }),
                                      heading1: en.formatMessage({
                                        id: "codex.writingBlock.format.textStyle.heading1",
                                        defaultMessage: "Heading 1",
                                        description:
                                          "Writing-block formatting-menu option in Codex Apps that converts the selected text into a level-one heading.",
                                      }),
                                      heading2: en.formatMessage({
                                        id: "codex.writingBlock.format.textStyle.heading2",
                                        defaultMessage: "Heading 2",
                                        description:
                                          "Writing-block formatting-menu option in Codex Apps that converts the selected text into a level-two heading.",
                                      }),
                                      heading3: en.formatMessage({
                                        id: "codex.writingBlock.format.textStyle.heading3",
                                        defaultMessage: "Heading 3",
                                        description:
                                          "Writing-block formatting-menu option in Codex Apps that converts the selected text into a level-three heading.",
                                      }),
                                      orderedList: en.formatMessage({
                                        id: "codex.writingBlock.format.textStyle.numberedList",
                                        defaultMessage: "Numbered list",
                                        description:
                                          "Writing-block formatting-menu option in Codex Apps that converts the selected text into a numbered list.",
                                      }),
                                      paragraph: en.formatMessage({
                                        id: "codex.writingBlock.format.textStyle.text",
                                        defaultMessage: "Text",
                                        description:
                                          "Writing-block formatting-menu option in Codex Apps that converts the selected text into an ordinary paragraph.",
                                      }),
                                      unorderedList: en.formatMessage({
                                        id: "codex.writingBlock.format.textStyle.bulletedList",
                                        defaultMessage: "Bulleted list",
                                        description:
                                          "Writing-block formatting-menu option in Codex Apps that converts the selected text into a bulleted list.",
                                      }),
                                    },
                                    renderMenu: (e) => {
                                      let { activeStyle: t, options: o } = e
                                      return (0, n.jsx)(k.Ab, {
                                        align: "start",
                                        contentWidth: "menuBounded",
                                        onOpenChange: (e) => {
                                          ec(e ? { from: ep, to: eb } : null)
                                        },
                                        triggerButton: (0, n.jsxs)(x.$, {
                                          "aria-label": en.formatMessage({
                                            id: "codex.writingBlock.format.textStyles",
                                            defaultMessage: "Text styles",
                                            description:
                                              "Accessible name for the floating writing-block formatting menu in Codex Apps that offers paragraph, heading, list, and checklist styles.",
                                          }),
                                          color: "ghostActive",
                                          size: "formatToolbar",
                                          onMouseDown: R,
                                          children: [o.find((e) => e.style === t)?.label, (0, n.jsx)(E.IIN, {})],
                                        }),
                                        children: o.map((e) => {
                                          let { isActive: t, label: o, onSelect: i, style: a } = e
                                          return (0, n.jsx)(
                                            k.ms.Item,
                                            {
                                              "aria-checked": t,
                                              rightIconAsset: t ? l.G : void 0,
                                              role: "menuitemradio",
                                              onSelect: () => {
                                                ;(F.dispatch(F.state.tr.setSelection(h.U3.create(F.state.doc, ep, eb))),
                                                  i())
                                              },
                                              children: o,
                                            },
                                            a,
                                          )
                                        }),
                                      })
                                    },
                                  }),
                                  ee,
                                ],
                              }),
                            }),
                          ],
                        }),
                    ],
                  })),
            (K[57] = em),
            (K[58] = eC),
            (K[59] = eM),
            (K[60] = et),
            (K[61] = F),
            (K[62] = ep),
            (K[63] = en),
            (K[64] = eo),
            (K[65] = eR),
            (K[66] = ea),
            (K[67] = G),
            (K[68] = $),
            (K[69] = J),
            (K[70] = X),
            (K[71] = eT),
            (K[72] = ef?.ranges),
            (K[73] = j),
            (K[74] = eb),
            (K[75] = ee),
            (K[76] = es),
            (K[77] = U))
          : (U = K[77]),
        K[78] !== H || K[79] !== U
          ? ((z = (0, n.jsx)("div", { style: H, children: U })), (K[78] = H), (K[79] = U), (K[80] = z))
          : (z = K[80]),
        K[81] !== ev || K[82] !== ey || K[83] !== P || K[84] !== z
          ? ((W = (0, n.jsx)("div", { ref: ey, className: "z-50", style: ev, onBlur: P, children: z })),
            (K[81] = ev),
            (K[82] = ey),
            (K[83] = P),
            (K[84] = z),
            (K[85] = W))
          : (W = K[85]),
        K[86] !== F.dom.ownerDocument.body || K[87] !== W
          ? ((Y = (0, f.createPortal)(W, F.dom.ownerDocument.body)),
            (K[86] = F.dom.ownerDocument.body),
            (K[87] = W),
            (K[88] = Y))
          : (Y = K[88]),
        Y
      )
    }
    function R(e) {
      return e.preventDefault()
    }
    function D(e) {
      let { action: t, isActive: o, label: i, onClick: a } = e
      return (0, n.jsxs)(x.$, {
        "aria-label": i,
        "aria-pressed": o,
        color: o ? "accentSubtle" : "ghostActive",
        size: "formatToolbarIcon",
        onClick: a,
        children: [
          "link" === t && (0, n.jsx)(E.ibM, {}),
          "bold" === t && (0, n.jsx)(v.I, { asset: d }),
          "italic" === t && (0, n.jsx)(E.rDm, {}),
        ],
      })
    }
  },
  KL0B(e, t, o) {
    o.d(t, { Y: () => w })
    var n = o("ABep"),
      i = o("QosV"),
      a = o("q1q2"),
      r = o("tILS"),
      s = o("jAmA"),
      l = o("on57"),
      d = o("zd8w"),
      c = o("hMk6"),
      u = o("LpCf")
    function h(e) {
      let t,
        o,
        a,
        r,
        h,
        p,
        b,
        x,
        k,
        w,
        v,
        E,
        A,
        y,
        C,
        M = (0, i.c)(70),
        {
          dispatch: S,
          labels: _,
          state: L,
          classNames: T,
          disabledOptionIds: R,
          floatingRef: D,
          style: I,
          unstyled: O,
        } = e,
        B = void 0 !== O && O,
        N = (0, d.useRef)(null)
      M[0] !== L ? ((t = (0, s.D5)(L)), (M[0] = L), (M[1] = t)) : (t = M[1])
      let j = t
      ;(L?.visibleOptionIds,
        M[2] !== L?.visibleOptionIds
          ? ((o = L?.visibleOptionIds ?? []), (M[2] = L?.visibleOptionIds), (M[3] = o))
          : (o = M[3]))
      let P = o,
        H = L?.highlightedOptionId ?? null
      M[4] !== R ? ((a = new Set(R)), (M[4] = R), (M[5] = a)) : (a = M[5])
      let U = a
      M[6] === Symbol.for("react.memo_cache_sentinel") ? ((r = new Map((0, c.Lc)().map(m))), (M[6] = r)) : (r = M[6])
      let z = r
      M[7] !== H ? ((h = null == H ? null : z.get(H)), (M[7] = H), (M[8] = h)) : (h = M[8])
      let W = h
      M[9] !== U || M[10] !== W?.disabled || M[11] !== H || M[12] !== P
        ? ((p =
            null == H || W?.disabled === !0 || U.has(H)
              ? (P.find((e) => {
                  let t = z.get(e)
                  return t?.disabled !== !0 && !U.has(e)
                }) ?? null)
              : H),
          (M[9] = U),
          (M[10] = W?.disabled),
          (M[11] = H),
          (M[12] = P),
          (M[13] = p))
        : (p = M[13])
      let Y = p
      if (M[14] !== P) {
        let e
        ;(M[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (e) => {
              let t = z.get(e)
              return null == t ? [] : [t]
            }),
            (M[16] = e))
          : (e = M[16]),
          (b = P.flatMap(e)),
          (M[14] = P),
          (M[15] = b))
      } else b = M[15]
      let K = b
      M[17] !== S
        ? ((x = () => {
            S({ type: "close" })
          }),
          (M[17] = S),
          (M[18] = x))
        : (x = M[18])
      let Q = x
      M[19] !== S
        ? ((k = (e) => {
            S({ type: "highlight", commandId: e })
          }),
          (M[19] = S),
          (M[20] = k))
        : (k = M[20])
      let F = k
      M[21] !== S
        ? ((w = (e) => {
            S({ type: "execute", commandId: e })
          }),
          (M[21] = S),
          (M[22] = w))
        : (w = M[22])
      let V = w
      if (
        (M[23] !== Q || M[24] !== j || M[25] !== K.length
          ? ((v = () => {
              j && 0 === K.length && Q()
            }),
            (E = [Q, j, K.length]),
            (M[23] = Q),
            (M[24] = j),
            (M[25] = K.length),
            (M[26] = v),
            (M[27] = E))
          : ((v = M[26]), (E = M[27])),
        (0, d.useEffect)(v, E),
        M[28] !== Q ||
        M[29] !== U ||
        M[30] !== S ||
        M[31] !== V ||
        M[32] !== F ||
        M[33] !== Y ||
        M[34] !== j ||
        M[35] !== P
          ? ((A = () => {
              if (!j) return
              let e = N.current?.ownerDocument,
                t = e?.defaultView,
                o = t?.Node
              if (null == e || null == t || null == o) return
              let n = (e) => {
                  if (e.isComposing || 229 === e.keyCode) return
                  if ("Escape" === e.key) {
                    ;(e.preventDefault(), e.stopPropagation(), Q())
                    return
                  }
                  if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
                    ;(e.preventDefault(), e.stopPropagation())
                    let t = N.current
                    if (null != t && e.target instanceof o && t.contains(e.target)) {
                      let o = Array.from(t.querySelectorAll('button[role="menuitem"]:not(:disabled)')),
                        n = o.findIndex((t) => t.contains(e.target))
                      if (o.length > 0) {
                        let t = "ArrowUp" === e.key ? -1 : 1,
                          i = n >= 0 ? (n + t + o.length) % o.length : "ArrowUp" === e.key ? o.length - 1 : 0
                        o[i]?.focus()
                        return
                      }
                    }
                    let n = P.filter((e) => {
                      let t = z.get(e)
                      return t?.disabled !== !0 && !U.has(e)
                    })
                    if (n.length !== P.length) {
                      if (0 === n.length) return
                      let t = null == Y ? -1 : n.indexOf(Y),
                        o = "ArrowUp" === e.key ? -1 : 1,
                        i = t >= 0 ? (t + o + n.length) % n.length : "ArrowUp" === e.key ? n.length - 1 : 0
                      F(n[i])
                      return
                    }
                    S({ type: "navigate", direction: "ArrowUp" === e.key ? "previous" : "next" })
                    return
                  }
                  if ("Enter" !== e.key) return
                  let t = N.current
                  ;(null != t && e.target instanceof o && t.contains(e.target)) ||
                    (e.preventDefault(), e.stopPropagation(), null != Y && V(Y))
                },
                i = (e) => {
                  let t = N.current
                  null != t && e.target instanceof o && (t.contains(e.target) || Q())
                },
                a = (e) => {
                  let t = N.current
                  ;(null != t && e.target instanceof o && t.contains(e.target)) || Q()
                }
              return (
                e.addEventListener("keydown", n, !0),
                e.addEventListener("pointerdown", i, !0),
                e.addEventListener("focusin", a, !0),
                t.addEventListener("blur", Q),
                () => {
                  ;(e.removeEventListener("keydown", n, !0),
                    e.removeEventListener("pointerdown", i, !0),
                    e.removeEventListener("focusin", a, !0),
                    t.removeEventListener("blur", Q))
                }
              )
            }),
            (y = [Q, U, S, V, F, Y, j, z, P]),
            (M[28] = Q),
            (M[29] = U),
            (M[30] = S),
            (M[31] = V),
            (M[32] = F),
            (M[33] = Y),
            (M[34] = j),
            (M[35] = P),
            (M[36] = A),
            (M[37] = y))
          : ((A = M[36]), (y = M[37])),
        (0, d.useEffect)(A, y),
        !j)
      )
        return null
      if (
        M[38] !== T?.disabledItem ||
        M[39] !== T?.highlightedItem ||
        M[40] !== T?.item ||
        M[41] !== T?.menu ||
        M[42] !== T?.separator ||
        M[43] !== U ||
        M[44] !== V ||
        M[45] !== D ||
        M[46] !== F ||
        M[47] !== Y ||
        M[48] !== _ ||
        M[49] !== I ||
        M[50] !== B ||
        M[51] !== K
      ) {
        let e,
          t,
          o,
          i,
          a = K.find(f) ?? null,
          r = K.filter(g)
        M[53] !== T?.disabledItem ||
        M[54] !== T?.highlightedItem ||
        M[55] !== T?.item ||
        M[56] !== U ||
        M[57] !== V ||
        M[58] !== F ||
        M[59] !== Y ||
        M[60] !== _ ||
        M[61] !== B
          ? ((e = (e) => {
              let t = e.disabled || U.has(e.id),
                o = e.id === Y,
                i = () => {
                  t || (F(e.id), V(e.id))
                }
              return (0, n.jsx)(
                "button",
                {
                  "aria-disabled": t ? "true" : void 0,
                  className: (0, l.A)(
                    !B &&
                      "rounded-[calc(var(--oai-wb-spacing)*2.5)] border-0 px-[calc(var(--oai-wb-spacing)*2.5)] py-[calc(var(--oai-wb-spacing)*1.5)] text-start [color:inherit] [font-family:inherit] [font-stretch:inherit] [font-style:inherit] [font-variant:inherit] [line-height:inherit] [font-size:var(--oai-wb-font-size)] focus-visible:[background:var(--oai-wb-surface-secondary)] focus-visible:[outline:none]",
                    !B &&
                      (o ? "[background:var(--oai-wb-surface-secondary)] [outline:none]" : "[background:transparent]"),
                    !B && !t && "hover:[background:var(--oai-wb-surface-secondary)] hover:[outline:none]",
                    !B && t && "cursor-not-allowed opacity-50",
                    T?.item,
                    t ? T?.disabledItem : void 0,
                    o ? T?.highlightedItem : void 0,
                  ),
                  "data-highlighted": o ? "true" : void 0,
                  disabled: t,
                  onClick: i,
                  onFocus: () => F(e.id),
                  onMouseEnter: () => F(e.id),
                  onPointerDown: (e) => {
                    ;(e.preventDefault(), e.stopPropagation(), i())
                  },
                  role: "menuitem",
                  type: "button",
                  children: _[e.id],
                },
                e.id,
              )
            }),
            (M[53] = T?.disabledItem),
            (M[54] = T?.highlightedItem),
            (M[55] = T?.item),
            (M[56] = U),
            (M[57] = V),
            (M[58] = F),
            (M[59] = Y),
            (M[60] = _),
            (M[61] = B),
            (M[62] = e))
          : (e = M[62])
        let s = e,
          d = _.menu,
          c =
            !B &&
            "absolute z-[var(--wb-menu-z-index,70)] flex w-max min-w-[10rem] flex-col gap-[var(--oai-wb-spacing)] rounded-[calc(var(--oai-wb-spacing)*4)] p-[calc(var(--oai-wb-spacing)*1.5)] [background:var(--oai-wb-surface-primary)] [border:1px_solid_var(--oai-wb-divider)] [color:var(--oai-wb-text-primary)] [box-shadow:var(--oai-wb-shadow-lg)]",
          h = T?.menu
        ;(M[63] !== c || M[64] !== h ? ((t = (0, l.A)(c, h)), (M[63] = c), (M[64] = h), (M[65] = t)) : (t = M[65]),
          M[66] !== D
            ? ((o = (e) => {
                ;((N.current = e), D?.(e))
              }),
              (M[66] = D),
              (M[67] = o))
            : (o = M[67]),
          M[68] !== I ? ((i = { ...u.w, ...I }), (M[68] = I), (M[69] = i)) : (i = M[69]),
          (C = (0, n.jsxs)("div", {
            "aria-label": d,
            className: t,
            ref: o,
            role: "menu",
            style: i,
            tabIndex: -1,
            children: [
              null == a ? null : s(a),
              null != a && r.length > 0
                ? (0, n.jsx)("div", {
                    "aria-hidden": !0,
                    className: (0, l.A)(!B && "w-full [border-top:1px_solid_var(--oai-wb-divider)]", T?.separator),
                    role: "separator",
                  })
                : null,
              r.map(s),
            ],
          })),
          (M[38] = T?.disabledItem),
          (M[39] = T?.highlightedItem),
          (M[40] = T?.item),
          (M[41] = T?.menu),
          (M[42] = T?.separator),
          (M[43] = U),
          (M[44] = V),
          (M[45] = D),
          (M[46] = F),
          (M[47] = Y),
          (M[48] = _),
          (M[49] = I),
          (M[50] = B),
          (M[51] = K),
          (M[52] = C))
      } else C = M[52]
      return C
    }
    function g(e) {
      return "generate" !== e.id
    }
    function f(e) {
      return "generate" === e.id
    }
    function m(e) {
      return [e.id, e]
    }
    var p = o("v7qY"),
      b = o("Wf1j"),
      x = o("wD9O"),
      k = o("Lhpx")
    function w(e) {
      let t,
        o,
        l,
        d,
        c,
        u,
        g,
        f,
        m,
        w,
        E,
        A,
        y,
        C,
        M,
        S,
        _,
        L,
        T,
        R,
        D,
        I,
        O,
        B,
        N,
        j,
        P = (0, i.c)(74),
        { editorView: H, state: U, onExecute: z } = e,
        W = (0, b.A)(),
        Y = (0, x.dz)(),
        K = U?.anchorPos,
        Q = !H.isDestroyed && U?.anchorPos != null && null != U.triggerPos,
        F = H.dom.ownerDocument
      P[0] !== K || P[1] !== H
        ? ((t = {
            contextElement: H.dom,
            getBoundingClientRect() {
              if (null != K && !H.isDestroyed)
                try {
                  let { bottom: e, left: t } = H.coordsAtPos(K)
                  return v(t, e)
                } catch {}
              let e = H.dom.getBoundingClientRect()
              return v(e.left, e.bottom)
            },
          }),
          (P[0] = K),
          (P[1] = H),
          (P[2] = t))
        : (t = P[2])
      let V = t
      ;(P[3] !== V ? ((o = { reference: V }), (P[3] = V), (P[4] = o)) : (o = P[4]),
        P[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = [(0, a.cY)(8), (0, a.UU)({ padding: 8 }), (0, a.BN)({ padding: 8 })]), (P[5] = l))
          : (l = P[5]),
        P[6] !== Q || P[7] !== o
          ? ((d = { elements: o, middleware: l, open: Q, placement: "bottom-start", whileElementsMounted: r.ll }),
            (P[6] = Q),
            (P[7] = o),
            (P[8] = d))
          : (d = P[8]))
      let { floatingStyles: q, refs: G } = (0, a.we)(d),
        { setFloating: $ } = G
      if (!Q) return null
      ;(P[9] !== W
        ? ((c = W.formatMessage({
            id: "codex.writingBlock.slashMenu.option.checklist.label",
            defaultMessage: "Checklist",
            description:
              "Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it creates a checkbox task-list item; sibling options create text, headings, and ordinary lists.",
          })),
          (P[9] = W),
          (P[10] = c))
        : (c = P[10]),
        P[11] !== W
          ? ((u = W.formatMessage({
              id: "codex.writingBlock.slashMenu.option.columnDelete.label",
              defaultMessage: "Delete column",
              description:
                "Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it deletes the current table column; sibling options add a column to the left or right when table commands are available.",
            })),
            (P[11] = W),
            (P[12] = u))
          : (u = P[12]),
        P[13] !== W
          ? ((g = W.formatMessage({
              id: "codex.writingBlock.slashMenu.option.columnLeft.label",
              defaultMessage: "Add column left",
              description:
                "Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it inserts a table column to the left of the current column when table commands are available.",
            })),
            (P[13] = W),
            (P[14] = g))
          : (g = P[14]),
        P[15] !== W
          ? ((f = W.formatMessage({
              id: "codex.writingBlock.slashMenu.option.columnRight.label",
              defaultMessage: "Add column right",
              description:
                "Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it inserts a table column to the right of the current column when table commands are available.",
            })),
            (P[15] = W),
            (P[16] = f))
          : (f = P[16]),
        P[17] !== W
          ? ((m = W.formatMessage({
              id: "codex.writingBlock.slashMenu.option.divider.label",
              defaultMessage: "Divider",
              description:
                "Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it inserts a horizontal divider; sibling options insert text blocks, lists, or tables.",
            })),
            (P[17] = W),
            (P[18] = m))
          : (m = P[18]),
        P[19] !== W
          ? ((w = W.formatMessage({
              id: "codex.writingBlock.slashMenu.option.emoji.label",
              defaultMessage: "Emoji",
              description:
                "Short option label in the Codex Apps writing block slash menu. Selecting it opens a searchable emoji picker and inserts the chosen emoji at the text cursor. Sibling options insert text blocks, lists, and tables.",
            })),
            (P[19] = W),
            (P[20] = w))
          : (w = P[20]),
        P[21] !== W
          ? ((E = W.formatMessage({
              id: "codex.writingBlock.slashMenu.option.generate.label",
              defaultMessage: "Generate text",
              description:
                "Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it starts AI text generation for the current writing block when that action is available.",
            })),
            (P[21] = W),
            (P[22] = E))
          : (E = P[22]),
        P[23] !== W
          ? ((A = W.formatMessage({
              id: "codex.writingBlock.slashMenu.option.heading1.label",
              defaultMessage: "Heading 1",
              description:
                "Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it converts the active text block to a level-one heading; Heading 2 and Heading 3 are sibling options.",
            })),
            (P[23] = W),
            (P[24] = A))
          : (A = P[24]),
        P[25] !== W
          ? ((y = W.formatMessage({
              id: "codex.writingBlock.slashMenu.option.heading2.label",
              defaultMessage: "Heading 2",
              description:
                "Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it converts the active text block to a level-two heading; Heading 1 and Heading 3 are sibling options.",
            })),
            (P[25] = W),
            (P[26] = y))
          : (y = P[26]),
        P[27] !== W
          ? ((C = W.formatMessage({
              id: "codex.writingBlock.slashMenu.option.heading3.label",
              defaultMessage: "Heading 3",
              description:
                "Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it converts the active text block to a level-three heading; Heading 1 and Heading 2 are sibling options.",
            })),
            (P[27] = W),
            (P[28] = C))
          : (C = P[28]),
        P[29] !== W
          ? ((M = W.formatMessage({
              id: "codex.writingBlock.slashMenu.menu.ariaLabel",
              defaultMessage: "Insert options",
              description:
                "Accessible label for the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. After the user types a slash, the menu offers commands that change the current block type or insert document elements.",
            })),
            (P[29] = W),
            (P[30] = M))
          : (M = P[30]),
        P[31] !== W
          ? ((S = W.formatMessage({
              id: "codex.writingBlock.slashMenu.option.orderedList.label",
              defaultMessage: "Numbered list",
              description:
                "Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it converts the active text block to a numbered list; Bulleted list and Checklist are sibling options.",
            })),
            (P[31] = W),
            (P[32] = S))
          : (S = P[32]),
        P[33] !== W
          ? ((_ = W.formatMessage({
              id: "codex.writingBlock.slashMenu.option.paragraph.label",
              defaultMessage: "Text",
              description:
                "Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it converts the active block to normal paragraph text; heading and list formats are sibling options.",
            })),
            (P[33] = W),
            (P[34] = _))
          : (_ = P[34]),
        P[35] !== W
          ? ((L = W.formatMessage({
              id: "codex.writingBlock.slashMenu.option.table.label",
              defaultMessage: "Table",
              description:
                "Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it inserts a table when table commands are available; sibling options insert text blocks, lists, or a divider.",
            })),
            (P[35] = W),
            (P[36] = L))
          : (L = P[36]),
        P[37] !== W
          ? ((T = W.formatMessage({
              id: "codex.writingBlock.slashMenu.option.unorderedList.label",
              defaultMessage: "Bulleted list",
              description:
                "Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it converts the active text block to a bulleted list; Numbered list and Checklist are sibling options.",
            })),
            (P[37] = W),
            (P[38] = T))
          : (T = P[38]),
        P[39] !== m ||
        P[40] !== w ||
        P[41] !== E ||
        P[42] !== A ||
        P[43] !== y ||
        P[44] !== C ||
        P[45] !== M ||
        P[46] !== S ||
        P[47] !== _ ||
        P[48] !== L ||
        P[49] !== T ||
        P[50] !== c ||
        P[51] !== u ||
        P[52] !== g ||
        P[53] !== f
          ? ((R = {
              checklist: c,
              columnDelete: u,
              columnLeft: g,
              columnRight: f,
              divider: m,
              emoji: w,
              generate: E,
              heading1: A,
              heading2: y,
              heading3: C,
              menu: M,
              orderedList: S,
              paragraph: _,
              table: L,
              unorderedList: T,
            }),
            (P[39] = m),
            (P[40] = w),
            (P[41] = E),
            (P[42] = A),
            (P[43] = y),
            (P[44] = C),
            (P[45] = M),
            (P[46] = S),
            (P[47] = _),
            (P[48] = L),
            (P[49] = T),
            (P[50] = c),
            (P[51] = u),
            (P[52] = g),
            (P[53] = f),
            (P[54] = R))
          : (R = P[54]))
      let J = R
      P[55] !== H || P[56] !== z || P[57] !== U
        ? ((D = (e) => {
            "execute" === e.type ? z(e.commandId, U.query) : H.dispatch(H.state.tr.setMeta(s.FY, e))
          }),
          (P[55] = H),
          (P[56] = z),
          (P[57] = U),
          (P[58] = D))
        : (D = P[58])
      let X = D
      P[59] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = {
            disabledItem: "cursor-default opacity-50",
            item: "no-drag cursor-interaction rounded-lg border-0 bg-transparent px-[var(--padding-row-x)] py-[var(--padding-row-y)] text-start text-sm text-default outline-hidden data-[highlighted]:bg-primary-ghost-hover",
            menu: `z-50 m-px flex w-fit min-w-40 flex-col overflow-y-auto px-1 py-1 select-none ${(0, k.MX)("menu")}`,
            separator: "mx-[var(--padding-row-x)] my-1 h-px bg-border",
          }),
          (P[59] = I))
        : (I = P[59])
      let Z = 1 !== Y ? Y : void 0
      return (
        P[60] !== Z ? ((O = { position: "static", zoom: Z }), (P[60] = Z), (P[61] = O)) : (O = P[61]),
        P[62] !== X || P[63] !== J || P[64] !== U || P[65] !== O
          ? ((B = (0, n.jsx)(h, { classNames: I, dispatch: X, labels: J, state: U, style: O, unstyled: !0 })),
            (P[62] = X),
            (P[63] = J),
            (P[64] = U),
            (P[65] = O),
            (P[66] = B))
          : (B = P[66]),
        P[67] !== q || P[68] !== $ || P[69] !== B
          ? ((N = (0, n.jsx)("div", { ref: $, className: "z-50", style: q, children: B })),
            (P[67] = q),
            (P[68] = $),
            (P[69] = B),
            (P[70] = N))
          : (N = P[70]),
        P[71] !== F.body || P[72] !== N
          ? ((j = (0, p.createPortal)(N, F.body)), (P[71] = F.body), (P[72] = N), (P[73] = j))
          : (j = P[73]),
        j
      )
    }
    function v(e, t) {
      return { bottom: t, height: 0, left: e, right: e, top: t, width: 0, x: e, y: t, toJSON: () => ({}) }
    }
  },
  JIxO(e, t, o) {
    o.d(t, { $f: () => p, $7: () => g, JT: () => m })
    var n = o("ABep"),
      i = o("QosV"),
      a = o("on57"),
      r = o("zd8w"),
      s = o("LpCf")
    let l = (0, r.forwardRef)(function (e, t) {
        let o,
          r,
          l,
          d,
          c,
          u,
          h,
          g,
          f,
          m,
          p,
          b,
          x,
          k,
          w,
          v,
          E,
          A,
          y,
          C,
          M,
          S,
          _,
          L,
          T,
          R,
          D = (0, i.c)(53)
        return (
          D[0] !== e
            ? (({
                className: u,
                backgroundProps: o,
                backgroundStyle: r,
                borderProps: l,
                borderStyle: d,
                children: c,
                style: g,
                ...h
              } = e),
              (D[0] = e),
              (D[1] = o),
              (D[2] = r),
              (D[3] = l),
              (D[4] = d),
              (D[5] = c),
              (D[6] = u),
              (D[7] = h),
              (D[8] = g))
            : ((o = D[1]), (r = D[2]), (l = D[3]), (d = D[4]), (c = D[5]), (u = D[6]), (h = D[7]), (g = D[8])),
          D[9] !== o ? ((f = o ?? {}), (D[9] = o), (D[10] = f)) : (f = D[10]),
          D[11] !== f
            ? (({ className: m, style: p, ...b } = f), (D[11] = f), (D[12] = m), (D[13] = p), (D[14] = b))
            : ((m = D[12]), (p = D[13]), (b = D[14])),
          D[15] !== l ? ((x = l ?? {}), (D[15] = l), (D[16] = x)) : (x = D[16]),
          D[17] !== x
            ? (({ className: k, style: w, ...v } = x), (D[17] = x), (D[18] = k), (D[19] = w), (D[20] = v))
            : ((k = D[18]), (w = D[19]), (v = D[20])),
          D[21] !== u
            ? ((E = (0, a.A)(
                "group/writing-block-surface relative isolate w-full min-w-0 overflow-clip rounded-[var(--oai-wb-radius)] [box-shadow:var(--oai-wb-shadow)] [color:var(--oai-wb-text-primary)] [contain:inline-size] [font-family:var(--oai-wb-font-sans)]",
                u,
              )),
              (D[21] = u),
              (D[22] = E))
            : (E = D[22]),
          D[23] !== g ? ((A = { ...s.w, ...g }), (D[23] = g), (D[24] = A)) : (A = D[24]),
          D[25] !== m
            ? ((y = (0, a.A)(
                "pointer-events-none absolute inset-0 rounded-[inherit]",
                "z-[-1] [background:var(--oai-wb-surface-primary)]",
                m,
              )),
              (D[25] = m),
              (D[26] = y))
            : (y = D[26]),
          D[27] !== p || D[28] !== r ? ((C = { ...p, ...r }), (D[27] = p), (D[28] = r), (D[29] = C)) : (C = D[29]),
          D[30] !== b || D[31] !== y || D[32] !== C
            ? ((M = (0, n.jsx)("div", { ...b, "aria-hidden": !0, className: y, style: C })),
              (D[30] = b),
              (D[31] = y),
              (D[32] = C),
              (D[33] = M))
            : (M = D[33]),
          D[34] !== c
            ? ((S = (0, n.jsx)("div", { className: "relative z-[1]", children: c })), (D[34] = c), (D[35] = S))
            : (S = D[35]),
          D[36] !== k
            ? ((_ = (0, a.A)(
                "pointer-events-none absolute inset-0 rounded-[inherit]",
                "z-[2] [box-shadow:inset_0_0_0_1px_var(--oai-wb-border)] group-hover/writing-block-surface:[box-shadow:inset_0_0_0_1px_var(--oai-wb-border-hover)]",
                k,
              )),
              (D[36] = k),
              (D[37] = _))
            : (_ = D[37]),
          D[38] !== w || D[39] !== d ? ((L = { ...w, ...d }), (D[38] = w), (D[39] = d), (D[40] = L)) : (L = D[40]),
          D[41] !== v || D[42] !== L || D[43] !== _
            ? ((T = (0, n.jsx)("div", { ...v, "aria-hidden": !0, className: _, style: L })),
              (D[41] = v),
              (D[42] = L),
              (D[43] = _),
              (D[44] = T))
            : (T = D[44]),
          D[45] !== h || D[46] !== t || D[47] !== T || D[48] !== E || D[49] !== A || D[50] !== M || D[51] !== S
            ? ((R = (0, n.jsxs)("div", {
                className: E,
                "data-oai-writing-block-surface": "",
                ref: t,
                style: A,
                ...h,
                children: [M, S, T],
              })),
              (D[45] = h),
              (D[46] = t),
              (D[47] = T),
              (D[48] = E),
              (D[49] = A),
              (D[50] = M),
              (D[51] = S),
              (D[52] = R))
            : (R = D[52]),
          R
        )
      }),
      d = (0, r.forwardRef)(function (e, t) {
        let o,
          r,
          l,
          d,
          c,
          u,
          h,
          g,
          f,
          m,
          p,
          b,
          x,
          k,
          w = (0, i.c)(29)
        return (
          w[0] !== e
            ? (({ className: r, actions: o, inlineContent: l, leadingContent: d, title: h, style: u, ...c } = e),
              (w[0] = e),
              (w[1] = o),
              (w[2] = r),
              (w[3] = l),
              (w[4] = d),
              (w[5] = c),
              (w[6] = u),
              (w[7] = h))
            : ((o = w[1]), (r = w[2]), (l = w[3]), (d = w[4]), (c = w[5]), (u = w[6]), (h = w[7])),
          w[8] !== r
            ? ((g = (0, a.A)(
                "flex min-w-0 select-none items-center gap-[calc(var(--oai-wb-spacing)*2)] px-[calc(var(--oai-wb-spacing)*4)] py-[calc(var(--oai-wb-spacing)*2.5)]",
                r,
              )),
              (w[8] = r),
              (w[9] = g))
            : (g = w[9]),
          w[10] !== u ? ((f = { ...s.w, ...u }), (w[10] = u), (w[11] = f)) : (f = w[11]),
          w[12] !== d || w[13] !== h
            ? ((m =
                d ??
                (0, n.jsx)("div", {
                  className:
                    "min-w-0 flex-[0_1_auto] overflow-hidden text-ellipsis whitespace-nowrap [color:var(--oai-wb-text-secondary)] [font-size:var(--oai-wb-font-size)] font-medium",
                  children: h,
                })),
              (w[12] = d),
              (w[13] = h),
              (w[14] = m))
            : (m = w[14]),
          w[15] !== l
            ? ((p = null == l ? null : (0, n.jsx)("div", { className: "min-w-0 flex-[1_1_auto]", children: l })),
              (w[15] = l),
              (w[16] = p))
            : (p = w[16]),
          w[17] !== m || w[18] !== p
            ? ((b = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-[1_1_auto] items-center gap-[calc(var(--oai-wb-spacing)*2)]",
                children: [m, p],
              })),
              (w[17] = m),
              (w[18] = p),
              (w[19] = b))
            : (b = w[19]),
          w[20] !== o
            ? ((x =
                null == o
                  ? null
                  : (0, n.jsx)("div", {
                      className: "flex flex-[0_0_auto] items-center gap-[var(--oai-wb-spacing)]",
                      children: o,
                    })),
              (w[20] = o),
              (w[21] = x))
            : (x = w[21]),
          w[22] !== c || w[23] !== t || w[24] !== g || w[25] !== f || w[26] !== b || w[27] !== x
            ? ((k = (0, n.jsxs)("header", { className: g, ref: t, style: f, ...c, children: [b, x] })),
              (w[22] = c),
              (w[23] = t),
              (w[24] = g),
              (w[25] = f),
              (w[26] = b),
              (w[27] = x),
              (w[28] = k))
            : (k = w[28]),
          k
        )
      }),
      c = (0, r.forwardRef)(function (e, t) {
        let o,
          a,
          r,
          s,
          c,
          u,
          h,
          g,
          f,
          m,
          p = (0, i.c)(21)
        return (
          p[0] !== e
            ? (({
                className: r,
                actions: o,
                children: a,
                headerClassName: s,
                inlineContent: c,
                leadingContent: u,
                title: g,
                ...h
              } = e),
              (p[0] = e),
              (p[1] = o),
              (p[2] = a),
              (p[3] = r),
              (p[4] = s),
              (p[5] = c),
              (p[6] = u),
              (p[7] = h),
              (p[8] = g))
            : ((o = p[1]), (a = p[2]), (r = p[3]), (s = p[4]), (c = p[5]), (u = p[6]), (h = p[7]), (g = p[8])),
          p[9] !== o || p[10] !== s || p[11] !== c || p[12] !== u || p[13] !== g
            ? ((f = (0, n.jsx)(d, { actions: o, className: s, inlineContent: c, leadingContent: u, title: g })),
              (p[9] = o),
              (p[10] = s),
              (p[11] = c),
              (p[12] = u),
              (p[13] = g),
              (p[14] = f))
            : (f = p[14]),
          p[15] !== a || p[16] !== r || p[17] !== h || p[18] !== t || p[19] !== f
            ? ((m = (0, n.jsxs)(l, { className: r, ref: t, ...h, children: [f, a] })),
              (p[15] = a),
              (p[16] = r),
              (p[17] = h),
              (p[18] = t),
              (p[19] = f),
              (p[20] = m))
            : (m = p[20]),
          m
        )
      })
    var u = "editorControls-fA0_fZ"
    let h =
      "[--wb-surface-primary:color-mix(in_srgb,var(--color-surface-elevated-secondary)_86%,var(--color-surface))] [--wb-accent:var(--codex-base-accent,var(--color-text-info,var(--color-text)))] [--wb-interactive-background:var(--color-background-primary-ghost-hover)] [--wb-on-accent:var(--color-text-info-solid,var(--color-text-inverse,#fff))] [--wb-selection:var(--color-background-text-selection)] [--wb-font-size:var(--codex-chat-font-size,0.875rem)]"
    function g(e) {
      let t,
        o,
        r,
        s,
        l,
        d,
        g,
        m,
        p,
        b,
        x,
        k,
        w,
        v = (0, i.c)(27)
      if (v[0] !== e) {
        let {
          actions: n,
          className: i,
          headerActions: a,
          headerClassName: c,
          inlineContent: u,
          inlineControlsAppearance: h,
          leadingContent: f,
          status: p,
          viewerCopyMenuItem: b,
          viewerDownloadControl: x,
          viewerEditingControls: k,
          viewerMenuItems: w,
          viewerVersionHistoryMenuItem: E,
          viewerPrimaryAction: A,
          viewerTitleControl: y,
          ...C
        } = e
        ;((t = n),
          (o = i),
          (r = a),
          (s = c),
          (l = u),
          (d = f),
          (m = p),
          (g = C),
          (v[0] = e),
          (v[1] = t),
          (v[2] = o),
          (v[3] = r),
          (v[4] = s),
          (v[5] = l),
          (v[6] = d),
          (v[7] = g),
          (v[8] = m))
      } else ((t = v[1]), (o = v[2]), (r = v[3]), (s = v[4]), (l = v[5]), (d = v[6]), (g = v[7]), (m = v[8]))
      ;(v[9] !== t || v[10] !== r ? ((p = t ?? r?.map(f)), (v[9] = t), (v[10] = r), (v[11] = p)) : (p = v[11]),
        v[12] !== o
          ? ((b = (0, a.A)(
              "frame-aD2tvA",
              u,
              "z-10 clear-both my-4 in-data-[avatar-overlay-orbit-transcript]:my-0 in-data-[avatar-overlay-orbit-transcript]:overflow-y-auto in-data-[avatar-overlay-orbit-transcript]:overscroll-contain in-data-[avatar-overlay-orbit-transcript]:scrollbar-none",
              h,
              o,
            )),
            (v[12] = o),
            (v[13] = b))
          : (b = v[13]))
      let E = null == d && "ps-5"
      return (
        v[14] !== s || v[15] !== E
          ? ((x = (0, a.A)("header-rXCNwJ", "sticky z-10 pe-2 pt-2 pb-2 [--wb-font-size:var(--text-sm)]", E, s)),
            (v[14] = s),
            (v[15] = E),
            (v[16] = x))
          : (x = v[16]),
        v[17] !== l || v[18] !== m
          ? ((k = null == m ? l : (0, n.jsxs)(n.Fragment, { children: [m, l] })), (v[17] = l), (v[18] = m), (v[19] = k))
          : (k = v[19]),
        v[20] !== d || v[21] !== g || v[22] !== p || v[23] !== b || v[24] !== x || v[25] !== k
          ? ((w = (0, n.jsx)(c, {
              actions: p,
              className: b,
              headerClassName: x,
              inlineContent: k,
              leadingContent: d,
              ...g,
            })),
            (v[20] = d),
            (v[21] = g),
            (v[22] = p),
            (v[23] = b),
            (v[24] = x),
            (v[25] = k),
            (v[26] = w))
          : (w = v[26]),
        w
      )
    }
    function f(e) {
      let { id: t, content: o } = e
      return (0, n.jsx)(r.Fragment, { children: o }, t)
    }
    function m(e) {
      let t,
        o,
        r,
        s,
        d = (0, i.c)(8)
      return (
        d[0] !== e ? (({ className: t, ...o } = e), (d[0] = e), (d[1] = t), (d[2] = o)) : ((t = d[1]), (o = d[2])),
        d[3] !== t ? ((r = (0, a.A)(u, h, t)), (d[3] = t), (d[4] = r)) : (r = d[4]),
        d[5] !== o || d[6] !== r
          ? ((s = (0, n.jsx)(l, { className: r, ...o })), (d[5] = o), (d[6] = r), (d[7] = s))
          : (s = d[7]),
        s
      )
    }
    function p(e) {
      let t,
        o,
        r,
        s,
        l = (0, i.c)(8)
      return (
        l[0] !== e ? (({ className: t, ...o } = e), (l[0] = e), (l[1] = t), (l[2] = o)) : ((t = l[1]), (o = l[2])),
        l[3] !== t ? ((r = (0, a.A)("editorRegion-y_pd0L", u, h, t)), (l[3] = t), (l[4] = r)) : (r = l[4]),
        l[5] !== o || l[6] !== r
          ? ((s = (0, n.jsx)("div", { className: r, ...o })), (l[5] = o), (l[6] = r), (l[7] = s))
          : (s = l[7]),
        s
      )
    }
  },
  bHM9(e, t, o) {
    var n,
      i,
      a,
      r,
      s,
      l,
      d,
      c,
      u,
      h,
      g =
        (((n = g || {}).DOC = "doc"),
        (n.PARAGRAPH = "paragraph"),
        (n.HEADING = "heading"),
        (n.BLOCKQUOTE = "blockquote"),
        (n.LIST = "list"),
        (n.BULLET_LIST = "bullet_list"),
        (n.ORDERED_LIST = "ordered_list"),
        (n.REGULAR_LIST_ITEM = "regular_list_item"),
        (n.LIST_ITEM = "list_item"),
        (n.TASK_LIST_ITEM = "task_list_item"),
        (n.CODE_BLOCK = "code_block"),
        (n.HORIZONTAL_RULE = "horizontal_rule"),
        (n.HARD_BREAK = "hard_break"),
        (n.WRITING_BLOCK_IMAGE = "writing_block_image"),
        (n.TABLE = "table"),
        (n.TABLE_ROW = "table_row"),
        (n.TABLE_CELL = "table_cell"),
        (n.TEXT = "text"),
        n),
      f =
        (((i = f || {}).STRONG = "strong"),
        (i.BOLD = "bold"),
        (i.EM = "em"),
        (i.ITALIC = "italic"),
        (i.CODE = "code"),
        (i.STRIKETHROUGH = "strikethrough"),
        (i.LINK = "link"),
        i),
      m =
        (((a = m || {})[(a.MONDAY = 0)] = "MONDAY"),
        (a[(a.TUESDAY = 1)] = "TUESDAY"),
        (a[(a.WEDNESDAY = 2)] = "WEDNESDAY"),
        (a[(a.THURSDAY = 3)] = "THURSDAY"),
        (a[(a.FRIDAY = 4)] = "FRIDAY"),
        (a[(a.SATURDAY = 5)] = "SATURDAY"),
        (a[(a.SUNDAY = 6)] = "SUNDAY"),
        a),
      p = (((r = p || {})[(r.BACKWARD = 0)] = "BACKWARD"), (r[(r.FORWARD = 1)] = "FORWARD"), r),
      b =
        (((s = b || {})[(s.TEXT = 0)] = "TEXT"),
        (s[(s.SLICE = 1)] = "SLICE"),
        (s[(s.PARAGRAPH_BREAK = 2)] = "PARAGRAPH_BREAK"),
        (s[(s.LINE_BREAK = 3)] = "LINE_BREAK"),
        (s[(s.EMPTY = 4)] = "EMPTY"),
        s),
      x =
        (((l = x || {})[(l.REPLACE_RANGE = 0)] = "REPLACE_RANGE"),
        (l[(l.SET_MARK = 1)] = "SET_MARK"),
        (l[(l.SET_BLOCK_TYPE = 2)] = "SET_BLOCK_TYPE"),
        (l[(l.SET_LIST = 3)] = "SET_LIST"),
        (l[(l.INDENT = 4)] = "INDENT"),
        (l[(l.SET_CHECKED = 5)] = "SET_CHECKED"),
        (l[(l.SET_NODE_ATTRIBUTES = 6)] = "SET_NODE_ATTRIBUTES"),
        (l[(l.INSERT_SLICE = 7)] = "INSERT_SLICE"),
        (l[(l.REMOVE_NODE = 8)] = "REMOVE_NODE"),
        (l[(l.REPLACE_AROUND = 9)] = "REPLACE_AROUND"),
        (l[(l.PASTE = 10)] = "PASTE"),
        (l[(l.INPUT = 11)] = "INPUT"),
        (l[(l.SET_DOCUMENT_THEME = 12)] = "SET_DOCUMENT_THEME"),
        (l[(l.UPSERT_LIVE_NOTE = 13)] = "UPSERT_LIVE_NOTE"),
        (l[(l.REMOVE_LIVE_NOTE = 14)] = "REMOVE_LIVE_NOTE"),
        l),
      k =
        (((d = k || {})[(d.APPLIED = 0)] = "APPLIED"),
        (d[(d.NO_CHANGE = 1)] = "NO_CHANGE"),
        (d[(d.REJECTED = 2)] = "REJECTED"),
        d),
      w = (((c = w || {})[(c.EDITABLE = 0)] = "EDITABLE"), (c[(c.UNSUPPORTED_SCHEMA = 1)] = "UNSUPPORTED_SCHEMA"), c),
      v =
        (((u = v || {})[(u.LOCAL = 0)] = "LOCAL"), (u[(u.REMOTE = 1)] = "REMOTE"), (u[(u.HISTORY = 2)] = "HISTORY"), u),
      E = (((h = E || {})[(h.EMPTY = 0)] = "EMPTY"), (h[(h.UPDATE = 1)] = "UPDATE"), h)
    o.d(t, {}, { Cz: w, Eo: b, H8: k, HQ: x, RJ: E, Rg: f, Wm: g, cM: v, fp: m, wL: p })
  },
}
//# sourceMappingURL=897874.314ec9b5c1.js.map
