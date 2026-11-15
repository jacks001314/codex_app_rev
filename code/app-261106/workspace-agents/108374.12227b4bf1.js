export const __rspack_esm_ids = [108374]
export const __webpack_modules__ = {
  OoKQ(e, t, n) {
    var i = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, i.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none",
          viewBox: "0 0 24 24",
          ...e,
          children: [
            (0, i.jsx)("path", {
              fill: "#2E9EFF",
              d: "M22 9v4H2V7c0-2.35 1.65-4 4-4h2.637c2.988 0 2.75 2 4.613 2H18c2.35 0 4 1.65 4 4Z",
            }),
            (0, i.jsx)("path", {
              fill: "#68C4FF",
              d: "M18 21c2.35 0 4-1.65 4-4v-5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v5c0 2.35 1.65 4 4 4h12Z",
            }),
          ],
        })))
  },
  pLgM(e, t, n) {
    n.d(t, { lR: () => g, H6: () => u, nr: () => m, Jx: () => y, h3: () => f, BJ: () => p })
    var i = n("jkY1"),
      l = n("Hpb6"),
      r = n("f6KK"),
      a = n("Ah6R"),
      o = n("en1Z"),
      s = n("WI1e"),
      c = n("GTmQ")
    let d = "application/x-openai-rich-text"
    function u(e = s.B) {
      let t = !1,
        n = !1
      return {
        handleKeyEvent: (e) => ((t = e.shiftKey && "Insert" !== e.key), !1),
        handleMouseDown: (e) => ((t = e.shiftKey), !1),
        transformPastedText: (e, t) => ((n = t), e),
        transformPastedHTML: (e) => ((n = !1), e),
        consume: (i) => {
          let l = t || e(i) || (n && !i.state.selection.$from.parent.type.spec.code)
          return ((n = !1), l)
        },
      }
    }
    function m({
      schemaFamily: e,
      isCodeSelection: t,
      getCopyContent: n,
      createCutTransaction: i = (e) => e.state.tr.deleteSelection(),
      dispatchCut: a = (e, t) => e.dispatch(t),
      getReference: s,
      getSelectionContent: f,
      handlePaste: p,
      onCopy: g,
    }) {
      let w = u(t),
        x = (t, r) => {
          let u = r.clipboardData,
            m = "cut" === r.type,
            p = n?.(t)
          if (r.defaultPrevented || null == u || (t.state.selection.empty && null == p) || (m && !t.editable)) return !1
          let y = null == p ? h(t, f?.(t)) : { ...p.content, slice: k(p.content.slice) },
            w = (function (e, t, n) {
              let i = { version: 1, schemaFamily: t, insertion: e.insertion, slice: e.slice.toJSON(), reference: n },
                l = Symbol(),
                r = 5242880,
                a = !0,
                o = (e) => {
                  if (e.length > r) throw l
                  r -= JSON.stringify(e).length
                }
              try {
                let e = JSON.stringify(i, function (e, t) {
                  let n = void 0 === t || "function" == typeof t || "symbol" == typeof t
                  if (
                    (a || Array.isArray(this) || n || o(e),
                    (a = !1),
                    "string" == typeof t
                      ? o(t)
                      : null === t || "number" == typeof t || "boolean" == typeof t
                        ? (r -= JSON.stringify(t).length)
                        : "object" == typeof t
                          ? (r -= 1)
                          : n && Array.isArray(this) && (r -= 4),
                    r < 0)
                  )
                    throw l
                  return t
                })
                return void 0 !== e && e.length <= 5242880 ? e : void 0
              } catch (e) {
                if (e === l) return
                throw e
              }
            })(y, e, s?.(t)),
            { dom: x, text: b } = t.serializeForClipboard(y.slice)
          x.firstElementChild?.setAttribute("data-openai-rich-text-insertion", y.insertion)
          try {
            ;(u.clearData(), u.setData("text/html", x.innerHTML), u.setData("text/plain", p?.text ?? b))
          } catch {
            return !1
          }
          if (void 0 !== w)
            try {
              u.setData(d, w)
            } catch {}
          if ("blocks" === y.insertion) {
            let e = (function (e, t) {
              let n = t.dom.ownerDocument,
                i = n.createElement("div"),
                r = t.someProp("clipboardSerializer") ?? l.ZF.fromSchema(t.state.schema)
              i.append(r.serializeFragment((0, o.D)(e.content, e.openStart, e.openEnd), { document: n }))
              let a = [],
                s = !0,
                c = (e, t = {}) => {
                  if (3 === e.nodeType) {
                    ;(e.textContent?.includes("\n") && (s = !1),
                      e.textContent && a.push({ insert: e.textContent, attributes: t }))
                    return
                  }
                  let i = n.defaultView?.Element
                  if (null == i || !(e instanceof i)) return
                  let l = { ...t }
                  switch (e.tagName) {
                    case "STRONG":
                    case "B":
                      l.bold = !0
                      break
                    case "EM":
                    case "I":
                      l.italic = !0
                      break
                    case "U":
                      l.underline = !0
                      break
                    case "S":
                    case "DEL":
                      l.strike = !0
                      break
                    case "CODE":
                      l.code = !0
                      break
                    case "A":
                      l.link = e.getAttribute("href") ?? ""
                      break
                    case "BR":
                      s = !1
                      return
                    case "SPAN":
                      break
                    default:
                      s = !1
                  }
                  e.childNodes.forEach((e) => c(e, l))
                },
                d = (e, t = {}, n = 0) => {
                  if ("UL" === e.tagName || "OL" === e.tagName) {
                    for (let t of ("OL" === e.tagName && 1 !== Number(e.getAttribute("start") ?? 1) && (s = !1),
                    e.children)) {
                      if ("LI" !== t.tagName || t.hasAttribute("data-task-list-item")) {
                        s = !1
                        continue
                      }
                      let i = { list: "OL" === e.tagName ? "ordered" : "bullet", indent: Math.min(n, 4) }
                      for (let e of (1 !== t.querySelectorAll(":scope > p").length && (s = !1), t.children))
                        d(e, i, n + 1)
                    }
                    return
                  }
                  let i = /^H[1-6]$/.test(e.tagName)
                  if ("P" !== e.tagName && !i) {
                    s = !1
                    return
                  }
                  ;(e.childNodes.forEach((e) => c(e, i ? { bold: !0 } : {})), a.push({ insert: "\n", attributes: t }))
                }
              if (Array.from(i.childNodes).some((e) => 3 === e.nodeType)) return null
              for (let e of i.children) (a.length > 0 && a.push({ insert: "\n" }), d(e))
              return s && a.length > 0 ? JSON.stringify({ ops: a }) : null
            })(y.slice, t)
            if (null != e && e.length <= 5242880)
              try {
                u.setData("slack/texty", e)
              } catch {}
          }
          return (
            m || g?.(t, u),
            r.preventDefault(),
            m && a(t, (0, c._B)(i(t).scrollIntoView().setMeta("uiEvent", "cut")), u),
            !0
          )
        }
      return new r.k_({
        props: {
          handleDOMEvents: {
            copy: x,
            cut: x,
            keydown: (e, t) => w.handleKeyEvent(t),
            keyup: (e, t) => w.handleKeyEvent(t),
            mousedown: (e, t) => w.handleMouseDown(t),
          },
          transformCopied: k,
          transformPasted: k,
          transformPastedText: w.transformPastedText,
          transformPastedHTML: w.transformPastedHTML,
          handlePaste(t, n, i) {
            let r = w.consume(t)
            if (n.defaultPrevented || (r && n.clipboardData?.getData("text/plain") === "")) return !0
            let a = r ? null : y(n.clipboardData, e, t.state.schema),
              o = /data-openai-rich-text-insertion=["'](inline|blocks)["']/u.exec(
                n.clipboardData?.getData("text/html") ?? "",
              )?.[1],
              s = i
            if ("inline" === o) {
              let e = i.content
              for (; 1 === e.childCount && !e.firstChild.isInline;) e = e.firstChild.content
              e.content.every((e) => e.isInline) && (s = new l.Ji(e, 0, 0))
            }
            return p(
              t,
              n,
              null == a
                ? { kind: "standard", slice: s, plain: r, insertion: "inline" === o || "blocks" === o ? o : void 0 }
                : { kind: "internal", content: a },
            )
          },
        },
      })
    }
    function f(e) {
      let t = x(w(e))?.reference
      return b(t) && "string" == typeof t.uri && "string" == typeof t.label ? { uri: t.uri, label: t.label } : null
    }
    function p(e, t, n) {
      let { slice: i, insertion: r } = h(e, n)
      if ("inline" === r && (0, s.B)(e)) return (0, a.Q2)(i)
      let c =
        "inline" === r
          ? l.FK.from(e.state.schema.nodes.paragraph.create(null, i.content))
          : (0, o.D)(i.content, i.openStart, i.openEnd)
      return t.serialize(e.state.doc.copy(c)).replace(/\n$/, "")
    }
    function h(e, t) {
      if (null != t) return { slice: k(t), insertion: "blocks" }
      let { doc: n, selection: i } = e.state,
        { $from: l, $to: r, from: a, to: o } = i,
        s = null
      for (let e = l.depth; e > 0; e -= 1) {
        let t = l.node(e).type,
          n = t.spec.tableRole
        if (
          ("cell" === n || "header_cell" === n || "callout" === t.name) &&
          r.depth >= e &&
          l.before(e) === r.before(e)
        ) {
          s = e
          break
        }
      }
      let c =
          l.sameParent(r) &&
          l.parent.isTextblock &&
          ("cell" === l.parent.type.spec.tableRole ||
            "header_cell" === l.parent.type.spec.tableRole ||
            (null != s && l.depth === s + 1 && "paragraph" === l.parent.type.name) ||
            l.parentOffset > 0 ||
            r.parentOffset < r.parent.content.size),
        d = null == s ? n : l.node(s),
        u = null == s ? 0 : l.start(s)
      return {
        slice: k(c ? n.slice(a, o) : g(d.slice(a - u, o - u, !0), d.resolve(a - u))),
        insertion: c ? "inline" : "blocks",
      }
    }
    function g(e, t) {
      let n = (i, l) => {
        let r = i.firstChild
        if (null == r || l > e.openStart) return i
        let a = n(r.content, l + 1),
          o = r.attrs
        for (let [e, n] of Object.entries(r.type.spec.attrs ?? {}))
          "function" == typeof n.clipboard && (o = { ...o, [e]: n.clipboard(r, t.index(l)) })
        return i.replaceChild(0, r.type.create(o, a, r.marks))
      }
      return new l.Ji(n(e.content, 1), e.openStart, e.openEnd)
    }
    function y(e, t, n) {
      try {
        let i = x(w(e))
        if (null == i || i.schemaFamily !== t || ("inline" !== i.insertion && "blocks" !== i.insertion) || !b(i.slice))
          return null
        for (let e of [i.slice.openStart, i.slice.openEnd])
          if (void 0 !== e && ("number" != typeof e || !Number.isInteger(e) || e < 0)) return null
        let { insertion: r } = i,
          a = k(l.Ji.fromJSON(n, i.slice)),
          o = l.Ji.maxOpen(a.content)
        if (
          0 === a.content.size ||
          a.openStart > o.openStart ||
          a.openEnd > o.openEnd ||
          ("inline" === r && (0 !== a.openStart || 0 !== a.openEnd || a.content.content.some((e) => !e.isInline)))
        )
          return null
        return (
          (function e(t, n, i) {
            t.forEach((r, a, o) => {
              let s = 0 === o ? n : 0,
                c = o === t.childCount - 1 ? i : 0
              if (0 === s && 0 === c) return void r.check()
              let d = s > 0 ? r.type.contentMatch.fillBefore(r.content) : l.FK.empty,
                u = null == d ? null : r.type.contentMatch.matchFragment(d.append(r.content))
              if (
                null == u ||
                r.content.content.some((e) => !r.type.allowsMarks(e.marks)) ||
                (0 === c ? !u.validEnd : null == u.fillBefore(l.FK.empty, !0))
              )
                throw RangeError("Invalid clipboard content")
              e(r.content, Math.max(0, s - 1), Math.max(0, c - 1))
            })
          })(a.content, a.openStart, a.openEnd),
          { slice: a, insertion: r }
        )
      } catch {
        return null
      }
    }
    function w(e) {
      let t = e?.getData(d)
      if (t) return t
      let n = e?.getData("text/html") ?? ""
      return n.includes("data-openai-rich-text")
        ? (new DOMParser()
            .parseFromString(n, "text/html")
            .querySelector("[data-openai-rich-text]")
            ?.getAttribute("data-openai-rich-text") ?? "")
        : ""
    }
    function x(e) {
      if ("" === e || e.length > 5242880) return null
      try {
        let t = JSON.parse(e)
        return b(t) && 1 === t.version ? t : null
      } catch {
        return null
      }
    }
    function b(e) {
      return null != e && "object" == typeof e && !Array.isArray(e)
    }
    function k(e) {
      let t = (e) =>
        l.FK.fromArray(
          e.content.map((e) => {
            let n = ("hard_break" === e.type.name ? e.marks.filter(i.F) : e.marks).map((e) =>
              e.type.create(v(e.type.spec.attrs, e.attrs)),
            )
            return e.isText ? e.mark(n) : e.type.create(v(e.type.spec.attrs, e.attrs), t(e.content), n)
          }),
        )
      return new l.Ji(t(e.content), e.openStart, e.openEnd)
    }
    function v(e, t) {
      let n = t
      for (let [t, i] of Object.entries(e ?? {})) !1 === i.clipboard && (n = { ...n, [t]: i.default })
      return n
    }
  },
  cQcx(e, t, n) {
    function i({ anchorElement: e, portalRoot: t }) {
      return "body" === t ? document.body : (e.closest(".codex-dialog") ?? document.body)
    }
    function l(e) {
      let t = { height: window.innerHeight, left: 0, top: 0, width: window.innerWidth }
      if (null != e && (0 !== e.offsetTop || 0 !== e.offsetLeft)) {
        let n = document.documentElement.getBoundingClientRect()
        ;((t.left = n.left + e.pageLeft - e.offsetLeft), (t.top = n.top + e.pageTop - e.offsetTop))
      }
      return t
    }
    function r(e, t, n) {
      return Math.max(("top" === n ? e : t - e) - 12, 0)
    }
    function a(e, t, n) {
      return n < t ? t : Math.min(Math.max(e, t), n)
    }
    n.d(
      t,
      {},
      {
        Q: i,
        S: function ({
          anchorRef: e,
          anchorPos: t,
          composerController: n,
          elementAnchor: o,
          gap: s = 8,
          flip: c = !1,
          minHeight: d = 160,
          minWidth: u,
          placement: m,
          portalRoot: f,
          windowZoom: p,
        }) {
          var h
          if ("u" < typeof document) return null
          if (null != n && null != t)
            return (function ({
              anchorPos: e,
              composerController: t,
              gap: n,
              placement: o,
              portalRoot: s,
              windowZoom: c,
            }) {
              var d
              let u = i({ anchorElement: t.view.dom, portalRoot: s }),
                m = (d = c) > 0 ? d : 1,
                f = u === document.body ? l(null) : u.getBoundingClientRect(),
                p = t.view.coordsAtPos(e)
              if (p.bottom <= f.top || p.top >= f.top + f.height) return null
              let h = f.width / m,
                g = Math.min(360, Math.max(h - 24, 0)),
                y = a((p.left - f.left) / m, 12, h - g - 12),
                w = (("top" === o ? p.top : p.bottom) - f.top) / m + ("top" === o ? -n : n)
              return {
                availableHeight: r(w, f.height / m, o),
                portalContainer: u,
                left: y,
                top: w,
                width: g,
                fixedPosition: u === document.body,
                renderAbove: "top" === o,
              }
            })({ anchorPos: t, composerController: n, gap: s, placement: m, portalRoot: f, windowZoom: p })
          let g = null == o ? e?.current : o.element
          if (null == g || (null != o && null == o.inlineBounds)) return null
          let y = i({ anchorElement: g, portalRoot: f }),
            w = (h = p) > 0 ? h : 1,
            x = g.getBoundingClientRect(),
            b = o?.inlineBounds?.getBoundingClientRect() ?? x,
            k = c && y === document.body,
            v = k ? window.visualViewport : null,
            _ = y === document.body ? l(v) : y.getBoundingClientRect(),
            A = (x.top - _.top) / w - s,
            j = (x.bottom - _.top) / w + s,
            S = Math.max(k && null != o ? 46 : 0, (v?.offsetTop ?? 0) / w),
            I = (null == v ? _.height : v.offsetTop + v.height) / w,
            M = Math.max(A - S - 12, 0),
            N = r(j, I, "bottom"),
            C = m
          if (c) {
            let e = "top" === m ? M : N,
              t = "top" === m ? N : M
            e < d && t > e && (C = "top" === m ? "bottom" : "top")
          }
          let T = "top" === C,
            E = b.width / w,
            P = (b.left - _.left) / w
          if (null != u) {
            let e = _.width / w
            ;((E = Math.min(Math.max(E, u), Math.max(e - 24, 0))), (P = a(P, 12, e - E - 12)))
          }
          return {
            availableHeight: T ? M : N,
            portalContainer: y,
            left: P,
            top: T ? A : j,
            width: E,
            fixedPosition: y === document.body,
            renderAbove: T,
          }
        },
      },
    )
  },
  b8aL(e, t, n) {
    var i = n("ABep"),
      l = n("QosV"),
      r = n("zd8w"),
      a = n("v7qY"),
      o = n("TxRk")
    let s = (0, r.memo)(function (e) {
      let t,
        n,
        s = (0, l.c)(7),
        { registry: c, allowRemoteImages: d } = e,
        u = void 0 === d || d,
        m = (0, r.useSyncExternalStore)(c.subscribe, c.getSnapshot, c.getSnapshot)
      if (s[0] !== u || s[1] !== m) {
        let e
        ;(s[3] !== u
          ? ((e = (e) => {
              let { container: t, icon: n, iconWhenRemoteImagesBlocked: l, iconSizing: r, id: s } = e
              return (0, a.createPortal)((0, i.jsx)(o.OQ, { icon: u ? n : (l ?? n), iconSizing: r }), t, s)
            }),
            (s[3] = u),
            (s[4] = e))
          : (e = s[4]),
          (t = m.map(e)),
          (s[0] = u),
          (s[1] = m),
          (s[2] = t))
      } else t = s[2]
      return (s[5] !== t ? ((n = (0, i.jsx)(i.Fragment, { children: t })), (s[5] = t), (s[6] = n)) : (n = s[6]), n)
    })
    n.d(t, {}, { a: s })
  },
  GjFs(e, t, n) {
    n.d(t, { k: () => o })
    var i = n("Hpb6"),
      l = n("f6KK"),
      r = n("HRo6")
    let a = "data-inline-mention-selected"
    class o {
      entries = new Map()
      listeners = new Set()
      snapshot = []
      nextId = 0
      changed = !1
      getSnapshot = () => this.snapshot
      subscribe = (e) => (this.listeners.add(e), () => this.listeners.delete(e))
      createPlugin(e, { excludedNodeNames: t = [] } = {}) {
        let n = {},
          i = {}
        for (let { name: i, spec: l } of Object.values(e.nodes)) {
          let e = l.toDOM
          !0 !== l.inlineMention ||
            null == e ||
            t.includes(i) ||
            (n[i] = (t, n) => this.createView(n.dom.ownerDocument, e(t)))
        }
        for (let { name: t, spec: n } of Object.values(e.marks)) {
          let e = n.toDOM
          !0 === n.inlineMention && null != e && (i[t] = (t, n, i) => this.createView(n.dom.ownerDocument, e(t, i)))
        }
        return new l.k_({
          props: { nodeViews: n, markViews: i },
          view: (e) => {
            let t = new Set(),
              n = (e, n) => {
                let i = this.changed
                if ((this.publish(), !i && n?.doc === e.state.doc && n.selection.eq(e.state.selection))) return
                let r = new Set(),
                  o = new Set(),
                  c = e.dom.ownerDocument.getSelection(),
                  d = c?.rangeCount ? c.getRangeAt(0) : null
                if (
                  null != d &&
                  !d.collapsed &&
                  d.intersectsNode(e.dom) &&
                  (e.state.selection instanceof l.U3 || e.state.selection instanceof l.i5)
                ) {
                  let n = e.dom.ownerDocument.defaultView?.HTMLElement ?? HTMLElement
                  for (let { mention: i, icon: l } of this.entriesInRange(d, e.dom)) {
                    if (!(i instanceof n) || !e.dom.contains(i)) continue
                    let a = l?.container,
                      c = s(d, i) ? i : a
                    null != c &&
                      s(d, c) &&
                      (r.add(c),
                      c !== i ||
                        t.has(i) ||
                        "inline-flow" !== i.dataset.layout ||
                        "pill" === i.dataset.appearance ||
                        o.add(i))
                  }
                }
                let u = (function (e, t) {
                  let n = new Map()
                  if (0 === t.size) return n
                  let i = new Map(),
                    l = e.createElement("div")
                  l.style.cssText = "position:fixed;visibility:hidden;pointer-events:none;inset:0 auto auto 0"
                  let r = e.body.currentCSSZoom || 1
                  for (let n of t) {
                    let t = getComputedStyle(n),
                      a = (n.currentCSSZoom || 1) / r,
                      o = {
                        fontFamily: t.fontFamily,
                        fontSize: t.fontSize,
                        fontStyle: t.fontStyle,
                        fontWeight: t.fontWeight,
                        fontStretch: t.fontStretch,
                        fontVariant: t.fontVariant,
                        lineHeight: t.lineHeight,
                        fontFeatureSettings: t.fontFeatureSettings,
                        fontVariationSettings: t.fontVariationSettings,
                      },
                      s = JSON.stringify([o, a]),
                      c = i.get(s)
                    if (null != c) {
                      c.mentions.push(n)
                      continue
                    }
                    let d = e.createElement("span")
                    ;((d.style.display = "inline-block"),
                      Object.assign(d.style, o),
                      (d.style.zoom = String(a)),
                      (d.textContent = "M"),
                      l.append(d),
                      i.set(s, { element: d, mentions: [n] }))
                  }
                  e.body.append(l)
                  try {
                    for (let { element: t, mentions: l } of i.values()) {
                      let i = t.getBoundingClientRect(),
                        r = e.createRange()
                      r.selectNodeContents(t)
                      let a = r.getBoundingClientRect(),
                        o = t.currentCSSZoom || 1,
                        s = { top: (a.top - i.top) / o, bottom: (i.bottom - a.bottom) / o }
                      for (let e of l) n.set(e, s)
                    }
                  } finally {
                    l.remove()
                  }
                  return n
                })(e.dom.ownerDocument, o)
                for (let e of t)
                  r.has(e) || (e.removeAttribute(a), e.style.removeProperty("--inline-mention-selection-padding"))
                for (let e of r)
                  if (!t.has(e)) {
                    let t = u.get(e)
                    ;(null != t &&
                      e.style.setProperty("--inline-mention-selection-padding", `${t.top}px ${t.bottom}px`),
                      e.setAttribute(a, ""))
                  }
                t = r
              },
              i = () => n(e)
            return (
              e.dom.ownerDocument.addEventListener("selectionchange", i),
              n(e),
              {
                update: n,
                destroy: () => {
                  for (let n of (e.dom.ownerDocument.removeEventListener("selectionchange", i), t))
                    (n.removeAttribute(a), n.style.removeProperty("--inline-mention-selection-padding"))
                  queueMicrotask(this.publish)
                },
              }
            )
          },
        })
      }
      register(e, t = e) {
        let n = (0, r.V)(t)
        return (
          this.entries.set(e, { mention: t, icon: null == n ? void 0 : { id: this.nextId++, ...n } }),
          (this.changed = !0),
          n?.container
        )
      }
      unregister(e) {
        this.changed = this.entries.delete(e) || this.changed
      }
      *entriesInRange(e, t) {
        if (0 === this.entries.size) return
        let n = t.contains(e.startContainer),
          i = n ? e.startContainer : t
        for (let e = i; e !== t && null != e; e = e.parentNode) {
          let t = this.entries.get(e)
          null != t && (yield t)
        }
        let l = t.ownerDocument.createTreeWalker(t)
        l.currentNode = i
        let r = i.childNodes[n ? e.startOffset : 0]
        if (null != r) l.currentNode = r
        else for (; null == l.nextSibling();) if (null == l.parentNode()) return
        for (let t = l.currentNode; null != t && 1 !== e.comparePoint(t, 0); t = l.nextNode()) {
          let e = this.entries.get(t)
          null != e && (yield e)
        }
      }
      createView(e, t) {
        let { dom: n, contentDOM: l } = i.ZF.renderSpec(e, t),
          o = this.register(n),
          s = (0, r.V)(n)?.textElement
        return {
          dom: n,
          contentDOM: l,
          ignoreMutation: (e) =>
            "selection" !== e.type &&
            (o?.contains(e.target) === !0 ||
              s?.contains(e.target) === !0 ||
              ("attributes" === e.type && e.target === n && ("style" === e.attributeName || e.attributeName === a))),
          destroy: () => this.unregister(n),
        }
      }
      publish = () => {
        this.changed &&
          ((this.changed = !1),
          (this.snapshot = [...this.entries.values()].flatMap(({ icon: e }) => (null == e ? [] : [e]))),
          this.listeners.forEach((e) => e()))
      }
    }
    function s(e, t) {
      let n = t,
        i = t
      for (; null != n.firstChild;) n = n.firstChild
      for (; null != i.lastChild;) i = i.lastChild
      return 0 === e.comparePoint(n, 0) && 0 === e.comparePoint(i, i.nodeValue?.length ?? i.childNodes.length)
    }
  },
  yGN9(e, t, n) {
    n.d(t, { i: () => o })
    var i = n("ABep"),
      l = n("QosV"),
      r = n("on57"),
      a = n("zkPp")
    function o(e) {
      let t,
        n,
        o,
        s,
        c,
        d,
        u,
        m,
        f,
        p,
        h,
        g,
        y,
        w,
        x,
        b = (0, l.c)(31)
      return (
        b[0] !== e
          ? (({ icon: n, title: d, titleAdornment: u, secondLine: c, rightText: s, className: t, ...o } = e),
            (b[0] = e),
            (b[1] = t),
            (b[2] = n),
            (b[3] = o),
            (b[4] = s),
            (b[5] = c),
            (b[6] = d),
            (b[7] = u))
          : ((t = b[1]), (n = b[2]), (o = b[3]), (s = b[4]), (c = b[5]), (d = b[6]), (u = b[7])),
        b[8] !== t ? ((m = (0, r.A)("row-W0bZIl", t)), (b[8] = t), (b[9] = m)) : (m = b[9]),
        b[10] !== d
          ? ((f = (0, i.jsx)("span", { className: "truncate", children: d })), (b[10] = d), (b[11] = f))
          : (f = b[11]),
        b[12] !== f || b[13] !== u
          ? ((p = (0, i.jsxs)("div", { className: "flex min-w-0 items-center gap-2 text-default", children: [f, u] })),
            (b[12] = f),
            (b[13] = u),
            (b[14] = p))
          : (p = b[14]),
        b[15] !== c
          ? ((h = (0, i.jsx)("div", { className: "truncate text-secondary", children: c })), (b[15] = c), (b[16] = h))
          : (h = b[16]),
        b[17] !== p || b[18] !== h
          ? ((g = (0, i.jsxs)("div", {
              className: "min-w-0 flex-1 text-sm leading-4.5 font-normal",
              children: [p, h],
            })),
            (b[17] = p),
            (b[18] = h),
            (b[19] = g))
          : (g = b[19]),
        b[20] !== s
          ? ((y =
              null == s
                ? null
                : (0, i.jsx)("div", { className: "shrink-0 text-sm leading-4.5 text-tertiary", children: s })),
            (b[20] = s),
            (b[21] = y))
          : (y = b[21]),
        b[22] !== n || b[23] !== g || b[24] !== y
          ? ((w = (0, i.jsxs)("div", { className: "flex min-w-0 items-center gap-4", children: [n, g, y] })),
            (b[22] = n),
            (b[23] = g),
            (b[24] = y),
            (b[25] = w))
          : (w = b[25]),
        b[26] !== o || b[27] !== m || b[28] !== w || b[29] !== d
          ? ((x = (0, i.jsx)(a.fy, { ...o, title: d, className: m, children: w })),
            (b[26] = o),
            (b[27] = m),
            (b[28] = w),
            (b[29] = d),
            (b[30] = x))
          : (x = b[30]),
        x
      )
    }
  },
  QqC7(e, t, n) {
    n.d(t, { WorkspaceAgentResourceDialog: () => en })
    var i = n("ABep"),
      l = n("QosV"),
      r = n("zd8w"),
      a = n("oyxz"),
      o = n("Wf1j"),
      s = n("HZfM"),
      c = n("Sm6l"),
      d = n("JNtf"),
      u = n("mUDD"),
      m = n("bVeK"),
      f = n("G92V"),
      p = n("UOpS"),
      h = n("mmGY"),
      g = n("xkHF"),
      y = n("Qgfj"),
      w = n("zKCW")
    function x(e) {
      let t,
        n,
        r,
        a,
        o = (0, l.c)(9),
        { children: s, illustration: c } = e
      ;(o[0] !== s
        ? ((t = (0, i.jsx)("div", { className: "content-Yc49wo", children: s })), (o[0] = s), (o[1] = t))
        : (t = o[1]),
        o[2] !== c
          ? ((n = (0, i.jsx)("div", { className: "illustration-kbOC4Y", children: c })), (o[2] = c), (o[3] = n))
          : (n = o[3]),
        o[4] !== t || o[5] !== n
          ? ((r = (0, i.jsxs)("div", { className: "panel-TwtK3e", children: [t, n] })),
            (o[4] = t),
            (o[5] = n),
            (o[6] = r))
          : (r = o[6]))
      let d = r
      return (
        o[7] !== d
          ? ((a = (0, i.jsx)("div", {
              className: "container-BXiY6l",
              children: (0, i.jsx)("div", {
                className: "overflow-hidden rounded-xl border border-default",
                children: d,
              }),
            })),
            (o[7] = d),
            (o[8] = a))
          : (a = o[8]),
        a
      )
    }
    function b(e) {
      let t,
        n,
        r,
        a = (0, l.c)(7),
        { header: o, children: s } = e
      return (
        a[0] !== o
          ? ((t = (0, i.jsx)("div", {
              className: "flex h-6 shrink-0 items-center justify-center gap-1 bg-surface-tertiary text-xs",
              children: o,
            })),
            (a[0] = o),
            (a[1] = t))
          : (t = a[1]),
        a[2] !== s
          ? ((n = (0, i.jsx)("div", { className: "fileGrid-DUiECk", children: s })), (a[2] = s), (a[3] = n))
          : (n = a[3]),
        a[4] !== t || a[5] !== n
          ? ((r = (0, i.jsxs)("div", {
              className:
                "flex size-75 shrink-0 flex-col overflow-hidden rounded-xl border border-default bg-surface select-none",
              "aria-hidden": !0,
              inert: !0,
              children: [t, n],
            })),
            (a[4] = t),
            (a[5] = n),
            (a[6] = r))
          : (r = a[6]),
        r
      )
    }
    function k(e) {
      let t,
        n = (0, l.c)(2),
        { children: r } = e
      return (
        n[0] !== r
          ? ((t = (0, i.jsx)("span", { className: "suggestionLabel-yAfz7Q", children: r })), (n[0] = r), (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    var v = n("wNdV")
    function _() {
      let e,
        t,
        n = (0, l.c)(2)
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(m.efV, { className: "text-purple" }),
                (0, i.jsx)(a.A, {
                  id: "workspaceAgents.builder.memory.illustrationTitle",
                  defaultMessage: "Memory",
                  description: "Title on a decorative file window illustrating the agent's memory storage",
                }),
              ],
            })),
            (n[0] = e))
          : (e = n[0]),
        n[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsxs)(b, {
              header: e,
              children: [
                (0, i.jsx)("div", {
                  className: "flex size-10 items-center justify-center text-blue",
                  children: (0, i.jsx)(m.YXT, {}),
                }),
                [
                  "notes.docx",
                  "reference.pdf",
                  "analysis.ipynb",
                  "preferences.docx",
                  "plan.xlsx",
                  "data.csv",
                  "summary.docx",
                  "image.png",
                ].map(A),
              ],
            })),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function A(e) {
      return (0, i.jsx)(
        "div",
        {
          className: "flex size-10 items-center justify-center",
          children: (0, i.jsx)(v.B, { fileName: e, mimeType: void 0, size: 32 }),
        },
        e,
      )
    }
    function j(e) {
      let t,
        n,
        d,
        u,
        f,
        p,
        h,
        g,
        y = (0, l.c)(15),
        { canEdit: b, onSuggestion: v } = e,
        A = (0, o.A)(),
        [j] = (0, s.ok)(),
        [M, N] = (0, r.useState)(!1),
        [C, T] = (0, r.useState)(!1)
      if (j.has("memory_channel") || j.has("memory_node")) return null
      ;(y[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { label: I.userPreferencesCta, prompt: I.userPreferencesPrompt, icon: (0, i.jsx)(m.o_G, {}) }),
          (y[0] = t))
        : (t = y[0]),
        y[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = { label: I.todoListCta, prompt: I.todoListPrompt, icon: (0, i.jsx)(m.gL9, {}) }), (y[1] = n))
          : (n = y[1]),
        y[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = [t, n, { label: I.suggestUsesCta, prompt: I.suggestUsesPrompt, icon: (0, i.jsx)(m.cTP, {}) }]),
            (y[2] = d))
          : (d = y[2]))
      let E = d
      return (
        y[3] === Symbol.for("react.memo_cache_sentinel") ? ((u = (0, i.jsx)(_, {})), (y[3] = u)) : (u = y[3]),
        y[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, i.jsx)("div", {
              className: "text-sm text-default",
              children: (0, i.jsx)(a.A, { ...I.memoryDescription, values: { bold: S } }),
            })),
            (y[4] = f))
          : (f = y[4]),
        y[5] !== b || y[6] !== A || y[7] !== v || y[8] !== M
          ? ((p =
              null != v
                ? (0, i.jsx)("div", {
                    className: "flex flex-col items-start",
                    children: E.map((e) => {
                      let { label: t, prompt: n, icon: l } = e
                      return (0, i.jsxs)(
                        c.$,
                        {
                          color: "ghost",
                          size: "toolbar",
                          radius: "large",
                          className: "suggestion-sbqkxr",
                          disabled: !b || M,
                          onClick: () => {
                            ;(N(!0),
                              T(!1),
                              v(A.formatMessage(n))
                                .catch(() => T(!0))
                                .finally(() => N(!1)))
                          },
                          children: [l, (0, i.jsx)(k, { children: (0, i.jsx)(a.A, { ...t }) })],
                        },
                        t.id,
                      )
                    }),
                  })
                : null),
            (y[5] = b),
            (y[6] = A),
            (y[7] = v),
            (y[8] = M),
            (y[9] = p))
          : (p = y[9]),
        y[10] !== C
          ? ((h = C ? (0, i.jsx)(w.l, { type: "error", content: (0, i.jsx)(a.A, { ...I.sendPromptFailed }) }) : null),
            (y[10] = C),
            (y[11] = h))
          : (h = y[11]),
        y[12] !== p || y[13] !== h
          ? ((g = (0, i.jsx)(x, {
              illustration: u,
              children: (0, i.jsxs)("div", { className: "flex flex-col gap-3", children: [f, p, h] }),
            })),
            (y[12] = p),
            (y[13] = h),
            (y[14] = g))
          : (g = y[14]),
        g
      )
    }
    function S(e) {
      return (0, i.jsx)("strong", { children: e })
    }
    let I = (0, y.YK)({
      memoryDescription: {
        id: "workspaceAgents.builder.memoryOverview.memoryDescription",
        defaultMessage:
          "<bold>File-based memory</bold> lets your agent keep track of useful information over time, like preferences, notes, and ongoing work. Give your agents instructions on when to write and read from memory.",
        description: 'Intro text in the Memory tool banner; bold only highlights "File-based memory".',
      },
      userPreferencesCta: {
        id: "workspaceAgents.builder.memoryOverview.userPreferencesCta",
        defaultMessage: "Use memory to track user preferences",
        description: "Button label for configuring memory to track end-user preferences.",
      },
      todoListCta: {
        id: "workspaceAgents.builder.memoryOverview.todoListCta",
        defaultMessage: "Use memory to keep a todo list",
        description: "Button label for configuring memory to track ongoing todos.",
      },
      suggestUsesCta: {
        id: "workspaceAgents.builder.memoryOverview.suggestUsesCta",
        defaultMessage: "Suggest other ways to use memory",
        description: "Button label asking for suggestions on file-based memory use.",
      },
      userPreferencesPrompt: {
        id: "workspaceAgents.builder.memoryOverview.userPreferencesPrompt",
        defaultMessage: "Add instructions to keep track of user preferences in memory with a user-preferences.md file.",
        description:
          "Chat sidebar prompt submitted when the user wants their agent to track user preferences in memory.",
      },
      todoListPrompt: {
        id: "workspaceAgents.builder.memoryOverview.todoListPrompt",
        defaultMessage: "Add instructions to track ongoing todos in memory with a todos.md file.",
        description:
          "Chat sidebar prompt submitted when the user wants their agent to keep an ongoing todo list in memory.",
      },
      suggestUsesPrompt: {
        id: "workspaceAgents.builder.memoryOverview.suggestUsesPrompt",
        defaultMessage: "Suggest ways I could utilize memory with this agent.",
        description:
          "Chat sidebar prompt submitted when the user wants their agent to suggest useful ways to use memory.",
      },
      sendPromptFailed: {
        id: "workspaceAgents.builder.memoryOverview.sendPromptFailed",
        defaultMessage: "Couldn't send that prompt. Try again.",
        description: "Toast shown when a Memory banner suggestion prompt cannot be sent.",
      },
    })
    var M = n("zTeN"),
      N = n("SPnB"),
      C = n("vldH"),
      T = n("Ghh3"),
      E = n("WLtw"),
      P = n("bqtn"),
      L = n("RNul"),
      D = n("BrP7"),
      O = n("zLIa"),
      R = n("avF5"),
      U = n("OWtl"),
      $ = n("BSnr"),
      B = n("AWNZ"),
      F = n("ZEx5"),
      W = n("LNWO"),
      z = n("uTO0"),
      G = n("R4Ep"),
      H = n("hjFz"),
      K = n("N9b5"),
      V = n("gkxU"),
      q = n("HKP9"),
      J = n("uK9o"),
      Q = n("YchO")
    let Z = ["skill_name", "display_name", "short_description", "skill_description", "default_prompt", "instructions"]
    function Y(e) {
      let t,
        n,
        s,
        d,
        u,
        m,
        f,
        p = (0, l.c)(57),
        { agentId: h, skill: y, versionId: w, canEdit: x, onChanged: b, onNavigate: k } = e,
        v = (0, M.gh)(U.u),
        [_, A] = (0, r.useState)(!1),
        [j, S] = (0, r.useState)(!1),
        I = (0, o.A)(),
        P = (0, r.useId)(),
        [L, O] = (0, r.useState)("overview"),
        R = "chatgpt_skill_id" in y
      p[0] !== h || p[1] !== _ || p[2] !== v || p[3] !== R || p[4] !== y.id || p[5] !== y.name || p[6] !== w
        ? ((t = async function () {
            let e = v.get(N.chatGptAuthenticatedAccountId$),
              t = v.get(N.o8)
            if (null == e || null == t || _ || R || null != w) return
            let n = new AbortController(),
              i = v.watch((i) => {
                ;(i.get(N.chatGptAuthenticatedAccountId$) !== e || i.get(N.o8) !== t) && n.abort()
              })
            ;(A(!0),
              S(!1),
              (0, z.u)(v, {
                actionType: "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILL_DOWNLOAD",
                actionResult: "CHATGPT_AGENT_BUILDER_ACTION_RESULT_STARTED",
                source: "CHATGPT_AGENT_BUILDER_SOURCE_SKILL_DETAIL",
                agentId: h,
                skill: { skillId: y.id },
              }),
              await (async () => {
                try {
                  let i = await T.Request.safeGet("/hermes/agent/{agent_id}/skills/{skill_id}/download-url", {
                    parameters: { path: { agent_id: h, skill_id: y.id }, query: { download: "true" } },
                    expectedIdentity: { accountId: e, userId: t },
                    signal: n.signal,
                  })
                  if (v.get(N.chatGptAuthenticatedAccountId$) !== e || v.get(N.o8) !== t) return
                  let l = (0, E.Az)(i.download_url)
                  if (null == l) return void S(!0)
                  await (0, C.Me)({
                    conversationId: null,
                    signal: n.signal,
                    fileName: i.file_name ?? `${y.name || y.id}.zip`,
                    target: {
                      type: "download-url",
                      downloadUrl: (0, T.CP)(l) ?? l,
                      requestHeaders: i.needs_auth_token ? (0, T.Zj)() : void 0,
                    },
                  })
                } catch {
                  n.signal.aborted || S(!0)
                }
              })().finally(() => {
                ;(i(), A(!1))
              }))
          }),
          (p[0] = h),
          (p[1] = _),
          (p[2] = v),
          (p[3] = R),
          (p[4] = y.id),
          (p[5] = y.name),
          (p[6] = w),
          (p[7] = t))
        : (t = p[7])
      let $ = t
      if ("files" !== L || R)
        if (null != w) {
          let e, t, l, r
          ;(p[16] !== y.description || p[17] !== y.name
            ? ((e = (0, i.jsx)(B.ic, { label: y.name, description: y.description, control: null })),
              (p[16] = y.description),
              (p[17] = y.name),
              (p[18] = e))
            : (e = p[18]),
            p[19] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, i.jsx)(a.A, {
                  id: "workspaceAgents.resources.historicalSkill",
                  defaultMessage: "Published skill snapshot",
                  description: "Label for a skill inspected from an older agent publication",
                })),
                (p[19] = t))
              : (t = p[19]),
            p[20] !== R
              ? ((l = (0, i.jsx)(B.ic, {
                  label: t,
                  description: R
                    ? (0, i.jsx)(a.A, {
                        id: "workspaceAgents.resources.historicalSharedSkill",
                        defaultMessage: "This version uses a shared workspace skill",
                        description:
                          "Explains that an older agent version references a skill managed separately in the workspace",
                      })
                    : (0, i.jsx)(a.A, {
                        id: "workspaceAgents.resources.historicalSkillFiles",
                        defaultMessage: "Open Files to inspect the instructions and files saved with this version",
                        description:
                          "Explains how to inspect historical skill content without showing the current draft settings",
                      }),
                  control: null,
                })),
                (p[20] = R),
                (p[21] = l))
              : (l = p[21]),
            p[22] !== e || p[23] !== l
              ? ((r = (0, i.jsxs)(F.t, { children: [e, l] })), (p[22] = e), (p[23] = l), (p[24] = r))
              : (r = p[24]),
            (n = r))
        } else {
          let e,
            t = x && !R
          ;(p[25] !== h || p[26] !== b || p[27] !== y || p[28] !== t
            ? ((e = (0, i.jsx)(X, { agentId: h, skill: y, canEdit: t, onChanged: b })),
              (p[25] = h),
              (p[26] = b),
              (p[27] = y),
              (p[28] = t),
              (p[29] = e))
            : (e = p[29]),
            (n = e))
        }
      else {
        let e, t
        p[8] !== h || p[9] !== y.id || p[10] !== w
          ? ((e = { agentId: h, skillId: y.id, versionId: w }), (p[8] = h), (p[9] = y.id), (p[10] = w), (p[11] = e))
          : (e = p[11])
        let l = !x
        ;(p[12] !== b || p[13] !== e || p[14] !== l
          ? ((t = (0, i.jsx)(g.WorkspaceAgentFiles, { location: e, readOnly: l, onChanged: b })),
            (p[12] = b),
            (p[13] = e),
            (p[14] = l),
            (p[15] = t))
          : (t = p[15]),
          (n = t))
      }
      ;(p[30] !== $ || p[31] !== _ || p[32] !== R || p[33] !== w
        ? ((s =
            R || null != w
              ? null
              : (0, i.jsx)(c.$, {
                  type: "button",
                  color: "secondary",
                  size: "toolbar",
                  loading: _,
                  onClick: () => void $(),
                  children: (0, i.jsx)(a.A, {
                    id: "workspaceAgents.resources.downloadSkill",
                    defaultMessage: "Download skill",
                    description: "Button that downloads the current uploaded skill as a ZIP archive",
                  }),
                })),
          (p[30] = $),
          (p[31] = _),
          (p[32] = R),
          (p[33] = w),
          (p[34] = s))
        : (s = p[34]),
        p[35] !== j
          ? ((d = j
              ? (0, i.jsx)(G.p, {
                  children: (0, i.jsx)(a.A, {
                    id: "workspaceAgents.resources.skillDownloadFailed",
                    defaultMessage: "Could not download this skill",
                    description: "Error when the uploaded agent skill archive could not be downloaded",
                  }),
                })
              : null),
            (p[35] = j),
            (p[36] = d))
          : (d = p[36]),
        p[37] !== h ||
        p[38] !== I ||
        p[39] !== k ||
        p[40] !== P ||
        p[41] !== v ||
        p[42] !== R ||
        p[43] !== y.chatgpt_skill_id ||
        p[44] !== y.id ||
        p[45] !== L
          ? ((u = R
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("p", {
                      children: (0, i.jsx)(a.A, {
                        id: "workspaceAgents.resources.sharedSkill",
                        defaultMessage: "This skill is managed in the skill editor",
                        description: "Explains why a shared workspace skill cannot be edited from one agent",
                      }),
                    }),
                    (0, i.jsx)(c.z, {
                      to: `/skills/editor/${encodeURIComponent(y.chatgpt_skill_id)}`,
                      color: "secondary",
                      size: "toolbar",
                      onClick: k,
                      children: (0, i.jsx)(a.A, {
                        id: "workspaceAgents.resources.openSkill",
                        defaultMessage: "Open skill editor",
                        description: "Link to the shared workspace skill's own editor",
                      }),
                    }),
                  ],
                })
              : (0, i.jsx)(D.t, {
                  selectedKey: L,
                  onSelect: (e) => {
                    ;((0, z.u)(v, {
                      actionType: "CHATGPT_AGENT_BUILDER_ACTION_TYPE_SKILL_VIEW_MODE_CHANGE",
                      source: "CHATGPT_AGENT_BUILDER_SOURCE_SKILL_DETAIL",
                      agentId: h,
                      skill: {
                        skillId: y.id,
                        skillViewMode:
                          "files" === e
                            ? "CHATGPT_AGENT_BUILDER_SKILL_VIEW_MODE_FILES"
                            : "CHATGPT_AGENT_BUILDER_SKILL_VIEW_MODE_OVERVIEW",
                      },
                    }),
                      O(e))
                  },
                  variant: "toolbar",
                  ariaLabel: I.formatMessage({
                    id: "workspaceAgents.resources.skillViews",
                    defaultMessage: "Skill view",
                    description: "Accessible label for switching between a skill's settings and files",
                  }),
                  tabs: [
                    {
                      key: "overview",
                      panelId: `${P}-overview`,
                      name: (0, i.jsx)(a.A, {
                        id: "workspaceAgents.resources.skillOverview",
                        defaultMessage: "Overview",
                        description: "Tab that shows a workspace agent skill's settings",
                      }),
                    },
                    {
                      key: "files",
                      panelId: `${P}-files`,
                      name: (0, i.jsx)(a.A, {
                        id: "workspaceAgents.resources.skillFiles",
                        defaultMessage: "Files",
                        description: "Tab that shows files included in a workspace agent skill",
                      }),
                    },
                  ],
                })),
            (p[37] = h),
            (p[38] = I),
            (p[39] = k),
            (p[40] = P),
            (p[41] = v),
            (p[42] = R),
            (p[43] = y.chatgpt_skill_id),
            (p[44] = y.id),
            (p[45] = L),
            (p[46] = u))
          : (u = p[46]))
      let W = `${P}-${L}`,
        H = R ? void 0 : "tabpanel",
        K = R ? void 0 : `${P}-${L}-tab`
      return (
        p[47] !== n || p[48] !== W || p[49] !== H || p[50] !== K
          ? ((m = (0, i.jsx)("div", { id: W, role: H, "aria-labelledby": K, children: n })),
            (p[47] = n),
            (p[48] = W),
            (p[49] = H),
            (p[50] = K),
            (p[51] = m))
          : (m = p[51]),
        p[52] !== s || p[53] !== d || p[54] !== u || p[55] !== m
          ? ((f = (0, i.jsxs)("div", { className: "flex min-h-0 flex-col gap-4", children: [s, d, u, m] })),
            (p[52] = s),
            (p[53] = d),
            (p[54] = u),
            (p[55] = m),
            (p[56] = f))
          : (f = p[56]),
        f
      )
    }
    function X(e) {
      let t,
        n,
        r = (0, l.c)(10),
        { agentId: a, skill: o, canEdit: s, onChanged: c } = e,
        d = (0, M.Ul)(N.chatGptAuthenticatedAccountId$),
        u = (0, M.Ul)(N.o8)
      if (null == d || null == u) return null
      let m = `${d}:${u}:${a}:${o.id}`
      return (
        r[0] !== d || r[1] !== u ? ((t = { accountId: d, userId: u }), (r[0] = d), (r[1] = u), (r[2] = t)) : (t = r[2]),
        r[3] !== a || r[4] !== s || r[5] !== c || r[6] !== o.id || r[7] !== m || r[8] !== t
          ? ((n = (0, i.jsx)(ee, { identity: t, agentId: a, skillId: o.id, canEdit: s, onChanged: c }, m)),
            (r[3] = a),
            (r[4] = s),
            (r[5] = c),
            (r[6] = o.id),
            (r[7] = m),
            (r[8] = t),
            (r[9] = n))
          : (n = r[9]),
        n
      )
    }
    function ee(e) {
      let t,
        n,
        s,
        d,
        u,
        m,
        f,
        p,
        h,
        g,
        y,
        w,
        x,
        b,
        k = (0, l.c)(65),
        { identity: v, agentId: _, skillId: A, canEdit: j, onChanged: S } = e,
        I = (0, M.gh)(U.u),
        C = (0, r.useId)(),
        E = (0, o.A)(),
        [D, z] = (0, r.useState)(!1)
      k[0] !== _ || k[1] !== v ? ((t = { ...v, agentId: _ }), (k[0] = _), (k[1] = v), (k[2] = t)) : (t = k[2])
      let Y = (0, M.uO)(J.v, t),
        X = (0, M.Ul)(Y.drafts$)
      k[3] !== _ || k[4] !== v
        ? ((n = { ...v, agentId: _, builder: null }), (k[3] = _), (k[4] = v), (k[5] = n))
        : (n = k[5])
      let ee = (0, M.uO)(V.tg, n),
        en = (0, M.Ul)(ee.fields$)
      k[6] !== _ || k[7] !== A ? ((s = { agentId: _, skillId: A }), (k[6] = _), (k[7] = A), (k[8] = s)) : (s = k[8])
      let { data: ei, error: el, isPending: er, refetch: ea } = (0, M._U)(Q.J, s)
      k[9] !== _ || k[10] !== j || k[11] !== ei?.icon?.color || k[12] !== v || k[13] !== S || k[14] !== I || k[15] !== A
        ? ((d = async function (e, t, n) {
            let i = () => {
              if (
                (n.throwIfAborted(),
                !j ||
                  I.get(N.chatGptAuthenticatedAccountId$) !== v.accountId ||
                  I.get(N.o8) !== v.userId ||
                  !0 !== I.get(W.iX))
              )
                throw Error("Skill access changed")
            }
            i()
            let l = await T.Request.safeGet("/hermes/agent/{agent_id}/builder-view", {
              parameters: { path: { agent_id: _ } },
              signal: n,
              expectedIdentity: v,
            })
            if ((i(), !["hermes_admin", "hermes_write"].includes(l.agent.viewer_capability)))
              throw Error("This agent is no longer editable")
            let r = {
                [e]: "icon" === e ? { name: t, color: ei?.icon?.color ?? "" } : t,
                expected_draft_version_id: l.draft_version.id,
                expected_draft_revision: l.draft_revision,
              },
              a = await T.Request.safePost("/hermes/agent/{agent_id}/skills/{skill_id}/definition", {
                parameters: { path: { agent_id: _, skill_id: A } },
                requestBody: r,
                signal: n,
                expectedIdentity: v,
              })
            ;(i(), I.query.setData(Q.J, { agentId: _, skillId: A }, a))
            try {
              ;(await Promise.all([
                I.queryClient.invalidateQueries({
                  queryKey: ["workspace-agent", "files", v.accountId, v.userId, _, A],
                }),
                S(),
              ]),
                z(!1))
            } catch {
              z(!0)
            }
          }),
          (k[9] = _),
          (k[10] = j),
          (k[11] = ei?.icon?.color),
          (k[12] = v),
          (k[13] = S),
          (k[14] = I),
          (k[15] = A),
          (k[16] = d))
        : (d = k[16])
      let eo = d
      if (er) {
        let e
        return (
          k[17] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(L.y, {})), (k[17] = e)) : (e = k[17]),
          e
        )
      }
      if (null != el || null == ei) {
        let e
        return (
          k[18] !== ea ? ((e = (0, i.jsx)(G.p, { onRetry: () => void ea() })), (k[18] = ea), (k[19] = e)) : (e = k[19]),
          e
        )
      }
      k[20] !== X || k[21] !== A ? ((u = X.get(`skill:${A}:icon`)), (k[20] = X), (k[21] = A), (k[22] = u)) : (u = k[22])
      let es = u,
        ec = es?.content ?? ei.icon?.name ?? "default"
      return (
        k[23] !== j || k[24] !== Y
          ? ((m = (e) => {
              ;(e.preventDefault(), j && Y.flushAll())
            }),
            (k[23] = j),
            (k[24] = Y),
            (k[25] = m))
          : (m = k[25]),
        k[26] !== S || k[27] !== D
          ? ((f = D
              ? (0, i.jsx)(G.p, {
                  onRetry: () =>
                    void S()
                      .then(() => z(!1))
                      .catch(() => z(!0)),
                  children: (0, i.jsx)(a.A, {
                    id: "workspaceAgents.resources.skillRefreshFailed",
                    defaultMessage: "Your changes were saved, but the latest agent draft could not be loaded",
                    description:
                      "Error when a skill was saved but the agent draft could not be refreshed; retry reloads the draft without repeating the write",
                  }),
                })
              : null),
            (k[26] = S),
            (k[27] = D),
            (k[28] = f))
          : (f = k[28]),
        k[29] !== j || k[30] !== ei || k[31] !== ec || k[32] !== E || k[33] !== Y || k[34] !== eo || k[35] !== A
          ? ((p = j
              ? (0, i.jsx)(P.Ab, {
                  contentWidth: "menuWide",
                  triggerButton: (0, i.jsxs)(c.$, {
                    type: "button",
                    color: "secondary",
                    size: "toolbar",
                    children: [
                      (0, i.jsx)(H.v, { name: ec }),
                      (0, i.jsx)(a.A, {
                        id: "workspaceAgents.resources.skillIcon",
                        defaultMessage: "Skill icon",
                        description: "Button that opens the icon picker for an uploaded agent skill",
                      }),
                    ],
                  }),
                  children: (0, i.jsx)(R.f, {
                    variant: "icon",
                    selectedId: ec,
                    options: [
                      {
                        id: "default",
                        label: E.formatMessage({
                          id: "workspaceAgents.skillIcon.default",
                          defaultMessage: "Default",
                          description: "Name of the default cube icon in the workspace agent skill icon picker",
                        }),
                        icon: (0, i.jsx)(H.v, {}),
                      },
                      ...Array.from(K.c, (e) => {
                        let [t, n] = e
                        return { id: t, label: E.formatMessage(n.label), icon: (0, i.jsx)(H.v, { name: t }) }
                      }),
                    ],
                    onChange: (e) =>
                      Y.request(`skill:${A}:icon`, e, ei.icon?.name ?? "default", A, (e, t) => eo("icon", e, t)),
                  }),
                })
              : null),
            (k[29] = j),
            (k[30] = ei),
            (k[31] = ec),
            (k[32] = E),
            (k[33] = Y),
            (k[34] = eo),
            (k[35] = A),
            (k[36] = p))
          : (p = k[36]),
        k[37] !== es?.status || k[38] !== Y || k[39] !== A
          ? ((h =
              es?.status === "failed"
                ? (0, i.jsx)(G.p, {
                    onRetry: () => void Y.flush(`skill:${A}:icon`),
                    children: (0, i.jsx)(a.A, {
                      id: "workspaceAgents.resources.skillIconSaveFailed",
                      defaultMessage: "Could not save the skill icon",
                      description: "Error when the selected icon for an uploaded agent skill could not be saved",
                    }),
                  })
                : null),
            (k[37] = es?.status),
            (k[38] = Y),
            (k[39] = A),
            (k[40] = h))
          : (h = k[40]),
        k[41] !== _ ||
        k[42] !== en ||
        k[43] !== j ||
        k[44] !== ei ||
        k[45] !== X ||
        k[46] !== C ||
        k[47] !== v ||
        k[48] !== Y ||
        k[49] !== eo ||
        k[50] !== A
          ? ((g = Z.map((e) => {
              let t,
                n = `skill:${A}:definition:${e}`,
                l = X.get(n),
                r = !j || "default_prompt" === e,
                o = l?.content ?? ei[e] ?? "",
                s = (t) => Y.request(n, t, ei[e] ?? "", A, (t, n) => eo(e, t, n))
              return (
                (t =
                  "default_prompt" === e
                    ? (0, i.jsx)("p", { className: "pt-1 text-sm wrap-break-word whitespace-pre-wrap", children: o })
                    : "instructions" === e
                      ? (0, i.jsx)(q.U, {
                          id: `${C}-${e}`,
                          accountId: v.accountId,
                          agentId: _,
                          fields: en,
                          disabled: r,
                          onChange: s,
                          skillInstructions: {
                            value: o,
                            onBlur: () => {
                              r || Y.flush(n)
                            },
                          },
                        })
                      : "skill_description" === e
                        ? (0, i.jsx)(O.TM, {
                            id: `${C}-${e}`,
                            variant: "plain",
                            rows: 5,
                            value: o,
                            readOnly: r,
                            onChange: (e) => s(e.target.value),
                            onBlur: () => {
                              r || Y.flush(n)
                            },
                          })
                        : (0, i.jsx)(O.pd, {
                            id: `${C}-${e}`,
                            variant: "plain",
                            value: o,
                            readOnly: r,
                            onChange: (e) => s(e.target.value),
                            onBlur: () => {
                              r || Y.flush(n)
                            },
                          })),
                (0, i.jsx)(
                  B.ic,
                  {
                    variant: "instructions" === e ? "stacked" : "default",
                    layout: "instructions" === e ? "default" : "split",
                    verticalAlignment: "start",
                    controlSizing: "grow",
                    label:
                      "default_prompt" === e
                        ? (0, i.jsx)(a.A, { ...et[e] })
                        : (0, i.jsx)("label", { htmlFor: `${C}-${e}`, children: (0, i.jsx)(a.A, { ...et[e] }) }),
                    control: (0, i.jsxs)("div", {
                      className: "w-full min-w-0",
                      children: [
                        t,
                        l?.status === "failed"
                          ? (0, i.jsx)(G.p, {
                              onRetry: () => void Y.flush(n),
                              children: (0, i.jsx)(a.A, {
                                id: "workspaceAgents.resources.skillSaveFailed",
                                defaultMessage: "Could not save this change. Your edits are still here.",
                                description:
                                  "Error when a skill setting could not be saved; the pending value is retained for retry",
                              }),
                            })
                          : null,
                      ],
                    }),
                  },
                  e,
                )
              )
            })),
            (k[41] = _),
            (k[42] = en),
            (k[43] = j),
            (k[44] = ei),
            (k[45] = X),
            (k[46] = C),
            (k[47] = v),
            (k[48] = Y),
            (k[49] = eo),
            (k[50] = A),
            (k[51] = g))
          : (g = k[51]),
        k[52] !== g ? ((y = (0, i.jsx)(F.t, { variant: "flat", children: g })), (k[52] = g), (k[53] = y)) : (y = k[53]),
        k[54] !== j
          ? ((w = j
              ? (0, i.jsx)(c.$, {
                  type: "submit",
                  color: "primary",
                  size: "toolbar",
                  children: (0, i.jsx)(a.A, {
                    id: "workspaceAgents.resources.saveSkill",
                    defaultMessage: "Save changes",
                    description: "Button that saves pending settings for a workspace agent skill",
                  }),
                })
              : null),
            (k[54] = j),
            (k[55] = w))
          : (w = k[55]),
        k[56] !== y || k[57] !== w || k[58] !== f || k[59] !== p || k[60] !== h
          ? ((x = (0, i.jsxs)($.X, { children: [f, p, h, y, w] })),
            (k[56] = y),
            (k[57] = w),
            (k[58] = f),
            (k[59] = p),
            (k[60] = h),
            (k[61] = x))
          : (x = k[61]),
        k[62] !== x || k[63] !== m
          ? ((b = (0, i.jsx)("form", { onSubmit: m, children: x })), (k[62] = x), (k[63] = m), (k[64] = b))
          : (b = k[64]),
        b
      )
    }
    let et = (0, y.YK)({
      skill_name: {
        id: "workspaceAgents.resources.skillName",
        defaultMessage: "Name",
        description: "Label for the internal name in a workspace agent skill's definition",
      },
      display_name: {
        id: "workspaceAgents.resources.skillDisplayName",
        defaultMessage: "Display name",
        description: "Label for the name shown to people who use a workspace agent skill",
      },
      skill_description: {
        id: "workspaceAgents.resources.skillDescription",
        defaultMessage: "Description",
        description: "Label for the description of a workspace agent skill's purpose",
      },
      short_description: {
        id: "workspaceAgents.resources.skillShortDescription",
        defaultMessage: "Short description",
        description: "Label for a compact description of a workspace agent skill",
      },
      default_prompt: {
        id: "workspaceAgents.resources.skillDefaultPrompt",
        defaultMessage: "Default prompt",
        description: "Label for the saved default prompt of a workspace agent skill",
      },
      instructions: {
        id: "workspaceAgents.resources.skillInstructions",
        defaultMessage: "Instructions",
        description: "Label for the instructions in a workspace agent skill's definition",
      },
    })
    function en(e) {
      let t,
        n,
        r,
        o,
        c,
        h,
        y,
        w = (0, l.c)(52),
        {
          agentId: x,
          presentation: b,
          resource: k,
          canEdit: v,
          onChanged: _,
          onClose: A,
          onNavigate: S,
          onMemorySuggestion: I,
          onRemoveMemory: M,
        } = e,
        N = void 0 === b ? "dialog" : b,
        [C] = (0, s.ok)()
      switch (k.type) {
        case "files": {
          let e, l, r
          ;(w[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(a.A, {
                id: "workspaceAgents.resources.filesTitle",
                defaultMessage: "Reference files",
                description: "Title of the dialog for files available to an agent",
              })),
              (w[0] = e))
            : (e = w[0]),
            (t = e),
            w[1] !== x || w[2] !== k.versionId
              ? ((l = { agentId: x, skillId: null, versionId: k.versionId }),
                (w[1] = x),
                (w[2] = k.versionId),
                (w[3] = l))
              : (l = w[3]))
          let o = !v,
            s = "inline" === N ? A : void 0
          ;(w[4] !== _ || w[5] !== l || w[6] !== o || w[7] !== s
            ? ((r = (0, i.jsx)(g.WorkspaceAgentFiles, { location: l, readOnly: o, onChanged: _, onBack: s })),
              (w[4] = _),
              (w[5] = l),
              (w[6] = o),
              (w[7] = s),
              (w[8] = r))
            : (r = w[8]),
            (n = r))
          break
        }
        case "skill": {
          let e
          t = k.skill.name
          let l = v && null == k.versionId
          ;(w[9] !== x || w[10] !== _ || w[11] !== S || w[12] !== k.skill || w[13] !== k.versionId || w[14] !== l
            ? ((e = (0, i.jsx)(Y, {
                agentId: x,
                skill: k.skill,
                versionId: k.versionId,
                canEdit: l,
                onChanged: _,
                onNavigate: S,
              })),
              (w[9] = x),
              (w[10] = _),
              (w[11] = S),
              (w[12] = k.skill),
              (w[13] = k.versionId),
              (w[14] = l),
              (w[15] = e))
            : (e = w[15]),
            (n = e))
          break
        }
        case "memory": {
          let e, l, r, o
          ;(w[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(a.A, {
                id: "workspaceAgents.resources.memoryTitle",
                defaultMessage: "Memory",
                description: "Title of the dialog for persistent files saved by an agent",
              })),
              (w[16] = e))
            : (e = w[16]),
            (t = e),
            w[17] !== v || w[18] !== I
              ? ((l = (0, i.jsx)(j, { canEdit: v, onSuggestion: I })), (w[17] = v), (w[18] = I), (w[19] = l))
              : (l = w[19]),
            w[20] !== x || w[21] !== k.version
              ? ((r = (0, i.jsx)(f.WorkspaceAgentMemory, { agentId: x, version: k.version, canViewConfig: !0 })),
                (w[20] = x),
                (w[21] = k.version),
                (w[22] = r))
              : (r = w[22]),
            w[23] !== l || w[24] !== r
              ? ((o = (0, i.jsxs)(i.Fragment, { children: [l, r] })), (w[23] = l), (w[24] = r), (w[25] = o))
              : (o = w[25]),
            (n = o))
        }
      }
      if ("inline" === N) {
        let e
        if ("files" === k.type) return n
        if ("memory" === k.type) {
          let e, l, r
          return (
            w[26] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(m.YXT, { className: "size-11 text-purple" })), (w[26] = e))
              : (e = w[26]),
            w[27] !== v || w[28] !== M || w[29] !== C
              ? ((l =
                  !v || null == M || C.has("memory_channel") || C.has("memory_node")
                    ? null
                    : (0, i.jsx)(ei, { onRemove: M })),
                (w[27] = v),
                (w[28] = M),
                (w[29] = C),
                (w[30] = l))
              : (l = w[30]),
            w[31] !== n || w[32] !== A || w[33] !== l || w[34] !== t
              ? ((r = (0, i.jsx)(p.O, { title: t, asset: e, onBack: A, spacing: "memory", actions: l, children: n })),
                (w[31] = n),
                (w[32] = A),
                (w[33] = l),
                (w[34] = t),
                (w[35] = r))
              : (r = w[35]),
            r
          )
        }
        return (
          w[36] !== n || w[37] !== A || w[38] !== t
            ? ((e = (0, i.jsx)(p.o, { title: t, onBack: A, children: n })),
              (w[36] = n),
              (w[37] = A),
              (w[38] = t),
              (w[39] = e))
            : (e = w[39]),
          e
        )
      }
      return (
        w[40] !== A
          ? ((r = (e) => {
              e || A()
            }),
            (w[40] = A),
            (w[41] = r))
          : (r = w[41]),
        w[42] !== t
          ? ((o = (0, i.jsx)(u.c7, { title: (0, i.jsx)(d.L3, { children: t }) })), (w[42] = t), (w[43] = o))
          : (o = w[43]),
        w[44] !== n ? ((c = (0, i.jsx)(u.OO, { children: n })), (w[44] = n), (w[45] = c)) : (c = w[45]),
        w[46] !== o || w[47] !== c
          ? ((h = (0, i.jsxs)(u.R4, { size: "viewport", children: [o, c] })), (w[46] = o), (w[47] = c), (w[48] = h))
          : (h = w[48]),
        w[49] !== r || w[50] !== h
          ? ((y = (0, i.jsx)(d.lG, { open: !0, size: "wide", onOpenChange: r, children: h })),
            (w[49] = r),
            (w[50] = h),
            (w[51] = y))
          : (y = w[51]),
        y
      )
    }
    function ei(e) {
      let t,
        n,
        s,
        f,
        p,
        g,
        y,
        w,
        x,
        b,
        k,
        v = (0, l.c)(18),
        { onRemove: _ } = e,
        A = (0, o.A)(),
        [j, S] = (0, r.useState)(!1)
      return (
        v[0] !== A
          ? ((t = A.formatMessage({
              id: "workspaceAgents.builder.removeMemoryTool",
              defaultMessage: "Remove tool",
              description:
                "Accessible label for the button that opens confirmation before removing the Memory tool from an agent",
            })),
            (v[0] = A),
            (v[1] = t))
          : (t = v[1]),
        v[2] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, i.jsx)(m.zwW, {})), (v[2] = n)) : (n = v[2]),
        v[3] !== t
          ? ((s = (0, i.jsx)(c.$, {
              color: "dangerOutline",
              size: "iconCircleLg",
              radius: "full",
              "aria-label": t,
              children: n,
            })),
            (v[3] = t),
            (v[4] = s))
          : (s = v[4]),
        v[5] !== _
          ? ((f = (e) => {
              ;(e.preventDefault(), _(), S(!1))
            }),
            (v[5] = _),
            (v[6] = f))
          : (f = v[6]),
        v[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsx)(h.y, { kind: "memory", size: "large" })), (v[7] = p))
          : (p = v[7]),
        v[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsxs)(u.OO, {
              children: [
                p,
                (0, i.jsx)(u.c7, {
                  variant: "chatgptConfirmation",
                  title: (0, i.jsx)(d.L3, {
                    children: (0, i.jsx)(a.A, {
                      id: "workspaceAgents.builder.removeMemoryConfirm",
                      defaultMessage: "Turn off memory and delete existing agent memories?",
                      description:
                        "Confirmation heading warning that removing the Memory tool turns off memory and deletes the agent's existing memories",
                    }),
                  }),
                }),
              ],
            })),
            (v[8] = g))
          : (g = v[8]),
        v[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, i.jsx)(d.rr, {
              className: "sr-only",
              children: (0, i.jsx)(a.A, {
                id: "workspaceAgents.builder.removeMemoryDescription",
                defaultMessage: "Confirm removing Memory from your agent",
                description: "Accessible description of the Memory removal confirmation",
              }),
            })),
            (v[9] = y))
          : (y = v[9]),
        v[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, i.jsx)(c.$, {
              type: "button",
              color: "outlineGhost",
              radius: "full",
              onClick: () => S(!1),
              children: (0, i.jsx)(a.A, {
                id: "workspaceAgents.builder.removeMemoryCancel",
                defaultMessage: "Cancel",
                description: "Dismisses confirmation without removing the Memory tool",
              }),
            })),
            (v[10] = w))
          : (w = v[10]),
        v[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, i.jsx)(u.OO, {
              children: (0, i.jsxs)(u.Es, {
                variant: "chatgptConfirmation",
                children: [
                  w,
                  (0, i.jsx)(c.$, {
                    type: "submit",
                    color: "dangerSolid",
                    radius: "full",
                    children: (0, i.jsx)(a.A, {
                      id: "workspaceAgents.builder.removeMemoryDelete",
                      defaultMessage: "Delete",
                      description: "Confirms turning off the Memory tool and deleting the agent's existing memories",
                    }),
                  }),
                ],
              }),
            })),
            (v[11] = x))
          : (x = v[11]),
        v[12] !== f
          ? ((b = (0, i.jsxs)(u.R4, { as: "form", variant: "chatgptConfirmation", onSubmit: f, children: [g, y, x] })),
            (v[12] = f),
            (v[13] = b))
          : (b = v[13]),
        v[14] !== j || v[15] !== b || v[16] !== s
          ? ((k = (0, i.jsx)(d.lG, {
              open: j,
              onOpenChange: S,
              variant: "chatgptConfirmation",
              backdrop: "modal",
              showDialogClose: !1,
              triggerContent: s,
              children: b,
            })),
            (v[14] = j),
            (v[15] = b),
            (v[16] = s),
            (v[17] = k))
          : (k = v[17]),
        k
      )
    }
  },
  G92V(e, t, n) {
    n.d(t, { WorkspaceAgentMemory: () => H })
    var i = n("ABep"),
      l = n("QosV"),
      r = n("yvno"),
      a = n("zTeN"),
      o = n("DBCl"),
      s = n("zd8w"),
      c = n("oyxz"),
      d = n("Wf1j"),
      u = n("HZfM"),
      m = n("Sm6l"),
      f = n("la9L"),
      p = n("FkTw"),
      h = n("bVeK"),
      g = n("evwP"),
      y = n("Bbed"),
      w = n("RNul"),
      x = n("SGsN"),
      b = n("UtcH"),
      k = n("OoKQ"),
      v = n("p4XX"),
      _ = n("HWQc"),
      A = n("xqnZ"),
      j = n("OWtl"),
      S = n("soaw"),
      I = n("yGN9"),
      M = n("R4Ep"),
      N = n("qQGj"),
      C = n("SPnB"),
      T = n("vldH"),
      E = n("Ghh3"),
      P = n("WLtw"),
      L = n("smHt"),
      D = n("yI91"),
      O = n("ripK"),
      R = n("rvFo"),
      U = n("GDNt"),
      $ = n("LNWO")
    let B = (0, a.vU)(j.u, ({ agentId: e, channel: t }, { get: n, scope: i }) => {
        let l = n(C.chatGptAuthenticatedAccountId$),
          r = n(C.o8),
          a = n(C.PO).accountUserId ?? null
        return {
          enabled: null != l && null != r && !0 === n($.XL),
          queryKey: ["workspace-agent", "memory", l, r, e, a, t],
          queryFn: async ({ signal: n }) => {
            let o = z(i, l, r, a),
              s = await E.Request.safeGet("/hermes/agent/{agent_id}/persistent-folder/tree", {
                parameters: {
                  path: { agent_id: e },
                  query: {
                    channel_binding_type: t.type,
                    channel_binding_link_id: "slack" === t.type ? t.linkId : void 0,
                    channel_binding_channel_id: "slack" === t.type ? t.channelId : void 0,
                  },
                },
                expectedIdentity: { accountId: o.accountId, userId: o.userId },
                signal: n,
              })
            return (z(i, l, r, a), s)
          },
          retry: !1,
          staleTime: R.D.ONE_MINUTE,
        }
      }),
      F = (0, a.vU)(
        j.u,
        ({ agentId: e, fileId: t, fileName: n, mimeType: i, sizeBytes: l, updatedAt: r }, { get: a, scope: o }) => {
          let s = a(C.chatGptAuthenticatedAccountId$),
            c = a(C.o8),
            d = a(C.PO).accountUserId ?? null
          return {
            enabled: null != s && null != c && null != t && !0 === a($.XL),
            queryKey: ["workspace-agent", "memory-file", s, c, e, d, t, r, n, i, l],
            queryFn: ({ signal: r }) => {
              if (null == t) throw Error("Missing memory file ID")
              return (async function (e, t, n, i, l, r, a, o) {
                var s, c
                let d,
                  u,
                  m = { accountId: t.accountId, userId: t.userId },
                  f = { path: { agent_id: n, file_id: i } },
                  p = await E.Request.safeGet(
                    "/hermes/agent/{agent_id}/persistent-folder/files/{file_id}/download_url",
                    { parameters: f, expectedIdentity: m, signal: o },
                  )
                ;(z(e, t.accountId, t.userId, t.accountUserId), o.throwIfAborted())
                let h = (function (e, t) {
                  let n = e?.split(";", 1)[0].trim().toLowerCase()
                  if ("application/pdf" === n || /\.pdf$/i.test(t ?? ""))
                    return { kind: "pdf", mimeType: "application/pdf" }
                  if (
                    null != n &&
                    /^image\/(?:png|jpe?g|gif|webp|avif|bmp|x-icon|vnd\.microsoft\.icon|svg\+xml)$/.test(n)
                  )
                    return { kind: "image", mimeType: "image/jpg" === n ? "image/jpeg" : n }
                  let i = t?.match(/\.(png|jpe?g|gif|webp|avif|bmp|ico|svg)$/i)?.[1]?.toLowerCase()
                  switch (i) {
                    case void 0:
                      return null
                    case "jpg":
                      return { kind: "image", mimeType: "image/jpeg" }
                    case "ico":
                      return { kind: "image", mimeType: "image/x-icon" }
                    case "svg":
                      return { kind: "image", mimeType: "image/svg+xml" }
                    default:
                      return { kind: "image", mimeType: `image/${i}` }
                  }
                })(p.mime_type ?? r, p.file_name ?? l)
                if (
                  null == h &&
                  ((s = p.mime_type ?? r),
                  (c = p.file_name ?? l),
                  (d = s?.split(";", 1)[0].trim().toLowerCase()),
                  !(
                    d?.startsWith("text/") ||
                    "application/json" === d ||
                    d?.endsWith("+json") ||
                    "application/xml" === d ||
                    d?.endsWith("+xml") ||
                    "application/javascript" === d ||
                    "application/x-yaml" === d ||
                    ((null == d || "application/octet-stream" === d) &&
                      /\.(?:css|csv|html?|js|json|jsx|log|md|mdx|py|text|toml|ts|tsx|txt|xml|ya?ml)$/i.test(c ?? ""))
                  ))
                )
                  return { kind: "unsupported", reason: "binary" }
                let g = 1e5
                null != h && (g = "pdf" === h.kind ? L.dC : L.RP)
                let y = p.size_bytes ?? a
                if (null != y && y > g) return { kind: "unsupported", reason: "too-large" }
                if (!0 === p.needs_auth_token)
                  u = await E.Request.getResponse(
                    "/hermes/agent/{agent_id}/persistent-folder/files/{file_id}/download_raw",
                    { parameters: f, expectedIdentity: m, signal: o },
                  )
                else {
                  let e = (0, P.Az)(p.download_url)
                  if (null == e) throw Error("Workspace Agent memory file download URL is unsafe")
                  u = await U._n.getInstance().fetch((0, E.CP)(e) ?? e, { signal: o })
                }
                try {
                  ;(z(e, t.accountId, t.userId, t.accountUserId), o.throwIfAborted())
                } catch (e) {
                  throw (await u.body?.cancel().catch(() => {}), e)
                }
                if (!u.ok) throw (await u.body?.cancel(), Error("Memory file download failed"))
                let w = Number(u.headers.get("Content-Length"))
                if (Number.isFinite(w) && w > g)
                  return (await u.body?.cancel(), { kind: "unsupported", reason: "too-large" })
                if (null != h) {
                  let n = await (async function (e, t, n) {
                    let i = e.body?.getReader()
                    if (null == i) return new Uint8Array()
                    let l = [],
                      r = 0,
                      a = () => {
                        i.cancel().catch(() => {})
                      }
                    t.addEventListener("abort", a, { once: !0 })
                    try {
                      for (;;) {
                        t.throwIfAborted()
                        let { done: e, value: a } = await i.read()
                        if ((t.throwIfAborted(), e)) {
                          let e = new Uint8Array(r),
                            t = 0
                          for (let n of l) (e.set(n, t), (t += n.byteLength))
                          return e
                        }
                        if ((r += a.byteLength) > n) return null
                        l.push(new Uint8Array(a))
                      }
                    } finally {
                      ;(t.removeEventListener("abort", a), await i.cancel().catch(() => {}), i.releaseLock())
                    }
                  })(u, o, g)
                  return (
                    z(e, t.accountId, t.userId, t.accountUserId),
                    null == n
                      ? { kind: "unsupported", reason: "too-large" }
                      : { kind: h.kind, dataUrl: `data:${h.mimeType};base64,${(0, D.i)(n)}` }
                  )
                }
                let x = await (async function (e, t) {
                  let n = e.body?.getReader()
                  if (null == n) return { kind: "text", content: "", truncated: !1 }
                  let i = new TextDecoder(),
                    l = 0,
                    r = "",
                    a = () => {
                      n.cancel().catch(() => {})
                    }
                  t.addEventListener("abort", a, { once: !0 })
                  try {
                    for (;;) {
                      t.throwIfAborted()
                      let e = await n.read()
                      if ((t.throwIfAborted(), e.done)) return { kind: "text", content: r + i.decode(), truncated: !1 }
                      let a = 1e5 - l
                      if (e.value.byteLength > a)
                        return (
                          (r += i.decode(e.value.subarray(0, a), { stream: !0 })),
                          { kind: "text", content: r + i.decode(), truncated: !0 }
                        )
                      ;((l += e.value.byteLength), (r += i.decode(e.value, { stream: !0 })))
                    }
                  } finally {
                    ;(t.removeEventListener("abort", a), await n.cancel().catch(() => {}), n.releaseLock())
                  }
                })(u, o)
                return (z(e, t.accountId, t.userId, t.accountUserId), x)
              })(o, z(o, s, c, d), e, t, n, i, l, r)
            },
            gcTime: 0,
            retry: !1,
            staleTime: R.D.ONE_MINUTE,
          }
        },
      )
    function W(e, t, n, i) {
      return null == t ||
        null == n ||
        e.get(C.chatGptAuthenticatedAccountId$) !== t ||
        e.get(C.o8) !== n ||
        (e.get(C.PO).accountUserId ?? null) !== i ||
        !0 !== e.get($.XL)
        ? null
        : { accountId: t, userId: n, accountUserId: i }
    }
    function z(e, t, n, i) {
      let l = W(e, t, n, i)
      if (null == l) throw new DOMException("Workspace Agent memory identity changed", "AbortError")
      return l
    }
    let G = (0, y._)(
      async () =>
        (
          await Promise.all([
            n.e(923712),
            n.e(726441),
            n.e(202026),
            n.e(837359),
            n.e(922213),
            n.e(468632),
            n.e(360409),
            n.e(733423),
            n.e(171241),
            n.e(748378),
            n.e(339467),
            n.e(500164),
            n.e(824800),
          ]).then(n.bind(n, "vYbu"))
        ).PdfPreviewPanel,
      { fallback: (0, i.jsx)(w.y, {}) },
    )
    function H(e) {
      let t,
        n = (0, l.c)(2)
      return (
        n[0] !== e
          ? ((t = e.canViewConfig
              ? (0, i.jsx)(K, { ...e })
              : (0, i.jsx)(J, { ...e, channels: [{ type: "chatgpt" }], channelStatus: null })),
            (n[0] = e),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function K(e) {
      var t, n
      let r,
        o,
        s,
        d,
        f,
        p = (0, l.c)(23),
        [h, y] = (0, u.ok)(),
        { data: x, error: b, isPending: k, refetch: v } = (0, a._U)(N.k, e.agentId)
      p[0] !== b || p[1] !== x ? ((s = null == b && x?.some(q) === !0), (p[0] = b), (p[1] = x), (p[2] = s)) : (s = p[2])
      let _ = s,
        A = null
      if (null != b) {
        let e
        ;(p[3] !== v ? ((e = (0, i.jsx)(M.p, { onRetry: () => void v() })), (p[3] = v), (p[4] = e)) : (e = p[4]),
          (A = e))
      } else if (k || null == x) {
        let e
        ;(p[5] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(w.y, {})), (p[5] = e)) : (e = p[5]),
          (A = e))
      }
      if ("api" === h.get("memory_channel") && !_) {
        let e, t, n, l, r
        return (
          p[6] !== y ? ((e = () => y(V, { preventScrollReset: !0 })), (p[6] = y), (p[7] = e)) : (e = p[7]),
          p[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(c.A, {
                id: "workspaceAgents.detail.memory.backToFolders",
                defaultMessage: "Back to memory folders",
                description:
                  "Button returning from a memory file or directory to the list of ChatGPT, API, and Slack memory folders",
              })),
              (p[8] = t))
            : (t = p[8]),
          p[9] !== e
            ? ((n = (0, i.jsx)(m.$, { color: "ghost", size: "toolbar", onClick: e, children: t })),
              (p[9] = e),
              (p[10] = n))
            : (n = p[10]),
          p[11] !== A
            ? ((l =
                A ??
                (0, i.jsx)(g.W, {
                  align: "start",
                  children: (0, i.jsx)(c.A, {
                    id: "workspaceAgents.detail.memory.apiUnavailable",
                    defaultMessage: "This API memory folder is not available",
                    description: "Shown when the requested API memory channel has no materialized API trigger",
                  }),
                })),
              (p[11] = A),
              (p[12] = l))
            : (l = p[12]),
          p[13] !== n || p[14] !== l
            ? ((r = (0, i.jsxs)("div", { className: "flex flex-col items-start gap-4", children: [n, l] })),
              (p[13] = n),
              (p[14] = l),
              (p[15] = r))
            : (r = p[15]),
          r
        )
      }
      return (
        p[16] !== _ || p[17] !== e.version
          ? ((t = e.version),
            (n = _),
            (r = t.config?.deployments),
            (o = (r?.slack ?? []).flatMap((e) => {
              let t = e.slack_trigger.params,
                n = t?.channel_id,
                i = t?.channel_name,
                l = e.slack_trigger.link.id
              return !0 === e.pending_deletion ||
                !1 === e.slack_trigger.enabled ||
                "string" != typeof n ||
                0 === n.length ||
                0 === l.length
                ? []
                : [{ type: "slack", channelId: n, channelName: "string" == typeof i ? i : null, linkId: l }]
            })),
            (d = [{ type: "chatgpt" }, ...(n ? [{ type: "api" }] : []), ...o]),
            (p[16] = _),
            (p[17] = e.version),
            (p[18] = d))
          : (d = p[18]),
        p[19] !== A || p[20] !== e || p[21] !== d
          ? ((f = (0, i.jsx)(J, { ...e, channels: d, channelStatus: A })),
            (p[19] = A),
            (p[20] = e),
            (p[21] = d),
            (p[22] = f))
          : (f = p[22]),
        f
      )
    }
    function V(e) {
      let t = new URLSearchParams(e)
      return (t.delete("memory_channel"), t.delete("memory_node"), t)
    }
    function q(e) {
      return "API" === e.trigger.type
    }
    function J(e) {
      let t,
        n,
        r,
        o,
        s,
        d,
        m,
        f,
        y,
        x,
        v,
        _,
        A = (0, l.c)(55),
        { agentId: j, canViewConfig: S, version: N, overviewNavigation: C, channels: T, channelStatus: E } = e,
        [P, L] = (0, u.ok)()
      A[0] !== S || A[1] !== T || A[2] !== P
        ? ((t = (S ? T.find((e) => ea(e) === P.get("memory_channel")) : void 0) ?? T[0]),
          (A[0] = S),
          (A[1] = T),
          (A[2] = P),
          (A[3] = t))
        : (t = A[3])
      let D = t,
        O = P.get("memory_node")
      A[4] !== j || A[5] !== D ? ((n = { agentId: j, channel: D }), (A[4] = j), (A[5] = D), (A[6] = n)) : (n = A[6])
      let { data: R, error: U, isFetching: $, isPending: F, refetch: W } = (0, a._U)(B, n)
      A[7] !== R || A[8] !== U
        ? ((r = null == U ? R?.nodes.find((e) => e.id === R.root_node_id) : void 0), (A[7] = R), (A[8] = U), (A[9] = r))
        : (r = A[9])
      let z = r,
        G =
          null == U && null != R && null != O
            ? (function e(t, n) {
                for (let i of t) {
                  if (i.name.startsWith("._")) continue
                  if (i.id === n) return [i]
                  let t = null == i.children ? void 0 : e(i.children, n)
                  if (null != t) return [i, ...t]
                }
              })(R.nodes, O)
            : void 0,
        H = G?.at(-1) ?? z,
        K = H?.kind === "folder" ? H.children : R?.nodes,
        V = K?.filter(Y).toSorted(Z)
      A[10] !== z?.id || A[11] !== L
        ? ((o = (e) => {
            L(
              (t) => {
                let n = new URLSearchParams(t)
                return (null == e || e === z?.id ? n.delete("memory_node") : n.set("memory_node", e), n)
              },
              { preventScrollReset: !0 },
            )
          }),
          (A[10] = z?.id),
          (A[11] = L),
          (A[12] = o))
        : (o = A[12])
      let q = o,
        J = G?.filter((e) => e.id !== z?.id) ?? []
      A[13] !== L
        ? ((s = () => {
            L(Q, { preventScrollReset: !0 })
          }),
          (A[13] = L),
          (A[14] = s))
        : (s = A[14])
      let et = s
      A[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = (0, i.jsx)(c.A, {
            id: "workspaceAgents.detail.memory.root",
            defaultMessage: "Memory",
            description: "Breadcrumb that returns to the top level of an agent's memory",
          })),
          (A[15] = d))
        : (d = A[15])
      let ei = d
      A[16] !== q
        ? ((m = (e) => ({ id: e.id, label: e.name, onClick: () => q(e.id) })), (A[16] = q), (A[17] = m))
        : (m = A[17])
      let er = [
        ...(S ? [{ id: "memory-folders", label: ei, onClick: et }] : []),
        ...(null == O
          ? []
          : [{ id: "memory-root", label: S ? (0, i.jsx)(el, { channel: D }) : ei, onClick: () => q(null) }]),
        ...J.slice(0, -1).map(m),
      ]
      if (F && null == R) {
        let e
        ;(A[18] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(w.y, {})), (A[18] = e)) : (e = A[18]),
          (f = e))
      } else if (null != U) {
        let e, t, n
        ;(A[19] !== W ? ((e = () => void W()), (A[19] = W), (A[20] = e)) : (e = A[20]),
          A[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(c.A, {
                id: "workspaceAgents.detail.memory.readError",
                defaultMessage: "Could not load memory files",
                description: "Error shown when a Workspace Agent memory file list cannot load",
              })),
              (A[21] = t))
            : (t = A[21]),
          A[22] !== $ || A[23] !== e
            ? ((n = (0, i.jsx)(M.p, { loading: $, onRetry: e, children: t })), (A[22] = $), (A[23] = e), (A[24] = n))
            : (n = A[24]),
          (f = n))
      } else if (null != O && null == G) {
        let e
        ;(A[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(g.W, {
              align: "start",
              children: (0, i.jsx)(c.A, {
                id: "workspaceAgents.detail.memory.missingNode",
                defaultMessage: "This file or folder is no longer available",
                description: "Message when a saved memory location no longer exists in the agent's current memory tree",
              }),
            })),
            (A[25] = e))
          : (e = A[25]),
          (f = e))
      } else if (H?.kind === "file") f = (0, i.jsx)(ee, { agentId: j, node: H }, H.id)
      else if (null != V && V.length > 0)
        f = (0, i.jsx)("div", {
          className: "flex flex-col",
          children: V.map((e, t) =>
            (0, i.jsx)(
              I.i,
              {
                showDivider: t < V.length - 1,
                icon: (0, i.jsx)(X, { node: e }),
                isSelected: !1,
                title: (0, i.jsx)("span", { className: "font-medium", children: e.name }),
                onSelect: () => q(e.id),
              },
              e.id,
            ),
          ),
        })
      else if (null != O) {
        let e
        ;(A[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(g.W, {
              align: "start",
              children: (0, i.jsx)(c.A, {
                id: "workspaceAgents.detail.memory.emptyFolder",
                defaultMessage: "This folder is empty",
                description:
                  "Message shown inside an empty folder in an agent's memory, after the user opened that folder",
              }),
            })),
            (A[26] = e))
          : (e = A[26]),
          (f = e))
      } else {
        let e
        ;(A[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(p.i, {
              icon: (0, i.jsx)(h.nex, {}),
              title: (0, i.jsx)(c.A, {
                id: "workspaceAgents.detail.memory.emptyTitle",
                defaultMessage: "No memory yet",
                description: "Title shown when a Workspace Agent has no saved memory",
              }),
              description: (0, i.jsx)(c.A, {
                id: "workspaceAgents.detail.memory.emptyDescription",
                defaultMessage: "When this agent saves notes and files, they will show up here",
                description: "Description shown when a Workspace Agent has no saved memory",
              }),
            })),
            (A[27] = e))
          : (e = A[27]),
          (f = e))
      }
      let eo = null
      if (
        ((S || null != O) &&
          (eo = (0, i.jsx)(b.V, {
            ancestors: er,
            current: null == O ? (0, i.jsx)(el, { channel: D }) : J.at(-1)?.name,
          })),
        S && !P.has("memory_channel") && null == O)
      ) {
        let e, t, n
        if (A[28] !== T || A[29] !== L || A[30] !== N) {
          let t
          ;(A[32] !== T.length || A[33] !== L || A[34] !== N
            ? ((t = (e, t) =>
                (0, i.jsx)(
                  I.i,
                  {
                    showDivider: t < T.length - 1,
                    icon: (0, i.jsx)(k.A, { className: "size-9 shrink-0" }),
                    isSelected: !1,
                    title: (0, i.jsx)("span", { className: "font-medium", children: (0, i.jsx)(el, { channel: e }) }),
                    secondLine: (0, i.jsx)("span", {
                      className: "text-tertiary",
                      children:
                        "slack" === e.type
                          ? (0, i.jsx)(c.A, {
                              id: "workspaceAgents.detail.memory.namedSlackFolder",
                              defaultMessage: "Saved from conversations in {channelTitle}",
                              values: { channelTitle: (0, i.jsx)(el, { channel: e }) },
                              description:
                                "Description of a folder containing memory shared by conversations in the named Slack channel",
                            })
                          : (0, i.jsx)(c.A, {
                              id: "workspaceAgents.detail.memory.privateFolderByChannel",
                              defaultMessage:
                                "Private • Saved from your conversations with {agentName} {channel, select, api {from the API} other {in ChatGPT}}",
                              description:
                                "Description of the user's private ChatGPT or API memory folder. agentName is the agent's display name.",
                              values: { agentName: N.name, channel: e.type },
                            }),
                    }),
                    onSelect: () =>
                      L(
                        (t) => {
                          let n = new URLSearchParams(t)
                          return (n.set("memory_channel", ea(e)), n.delete("memory_node"), n)
                        },
                        { preventScrollReset: !0 },
                      ),
                  },
                  ea(e),
                )),
              (A[32] = T.length),
              (A[33] = L),
              (A[34] = N),
              (A[35] = t))
            : (t = A[35]),
            (e = T.map(t)),
            (A[28] = T),
            (A[29] = L),
            (A[30] = N),
            (A[31] = e))
        } else e = A[31]
        return (
          A[36] !== E || A[37] !== e
            ? ((t = (0, i.jsxs)("div", { className: "flex flex-col", children: [E, e] })),
              (A[36] = E),
              (A[37] = e),
              (A[38] = t))
            : (t = A[38]),
          A[39] !== C || A[40] !== t
            ? ((n = (0, i.jsxs)(i.Fragment, { children: [C, t] })), (A[39] = C), (A[40] = t), (A[41] = n))
            : (n = A[41]),
          n
        )
      }
      let es = S || null != O ? null : C
      return (
        A[42] !== j || A[43] !== U || A[44] !== H
          ? ((y =
              null == U && H?.kind === "file" && null != H.file_id
                ? (0, i.jsx)(en, { agentId: j, node: H }, H.id)
                : null),
            (A[42] = j),
            (A[43] = U),
            (A[44] = H),
            (A[45] = y))
          : (y = A[45]),
        A[46] !== y || A[47] !== eo
          ? ((x = (0, i.jsxs)("div", {
              className: "flex min-w-0 items-center justify-between gap-3",
              children: [eo, y],
            })),
            (A[46] = y),
            (A[47] = eo),
            (A[48] = x))
          : (x = A[48]),
        A[49] !== f || A[50] !== x
          ? ((v = (0, i.jsxs)("div", { className: "flex min-h-0 flex-col gap-4", children: [x, f] })),
            (A[49] = f),
            (A[50] = x),
            (A[51] = v))
          : (v = A[51]),
        A[52] !== v || A[53] !== es
          ? ((_ = (0, i.jsxs)(i.Fragment, { children: [es, v] })), (A[52] = v), (A[53] = es), (A[54] = _))
          : (_ = A[54]),
        _
      )
    }
    function Q(e) {
      let t = new URLSearchParams(e)
      return (t.delete("memory_channel"), t.delete("memory_node"), t)
    }
    function Z(e, t) {
      return Number("folder" === t.kind) - Number("folder" === e.kind) || e.name.localeCompare(t.name)
    }
    function Y(e) {
      return !e.name.startsWith("._")
    }
    function X(e) {
      let t,
        n,
        a,
        o = (0, l.c)(9),
        { node: s } = e
      if ("folder" === s.kind) {
        let e
        return (
          o[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(k.A, { className: "size-9 shrink-0", "aria-hidden": !0 })), (o[0] = e))
            : (e = o[0]),
          e
        )
      }
      if (o[1] !== s.mime_type || o[2] !== s.name) {
        let e = (0, r.Ze)({ fileName: s.name, mimeType: s.mime_type ?? void 0 })
        ;((t = (0, r._B)(e.iconKey)), (o[1] = s.mime_type), (o[2] = s.name), (o[3] = t))
      } else t = o[3]
      let { Icon: c, brandColor: d } = t
      return (
        o[4] !== d ? ((n = { color: d }), (o[4] = d), (o[5] = n)) : (n = o[5]),
        o[6] !== c || o[7] !== n
          ? ((a = (0, i.jsx)(c, { className: "size-9 shrink-0", style: n, "aria-hidden": !0 })),
            (o[6] = c),
            (o[7] = n),
            (o[8] = a))
          : (a = o[8]),
        a
      )
    }
    function ee(e) {
      let t,
        n,
        r,
        o,
        s = (0, l.c)(30),
        { agentId: d, node: u } = e,
        m = (0, a.gh)(j.u),
        p = (0, a.Ul)(v.S),
        h = u.file_id,
        y = u.mime_type ?? null,
        x = u.size_bytes ?? null
      s[0] !== d || s[1] !== h || s[2] !== u.name || s[3] !== u.updated_at || s[4] !== y || s[5] !== x
        ? ((t = { agentId: d, fileId: h, fileName: u.name, mimeType: y, sizeBytes: x, updatedAt: u.updated_at }),
          (s[0] = d),
          (s[1] = h),
          (s[2] = u.name),
          (s[3] = u.updated_at),
          (s[4] = y),
          (s[5] = x),
          (s[6] = t))
        : (t = s[6])
      let { data: b, error: k, isPending: A, refetch: S } = (0, a._U)(F, t)
      if (null == h) {
        let e
        return (
          s[7] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(er, {})), (s[7] = e)) : (e = s[7]),
          e
        )
      }
      if (A) {
        let e
        return (
          s[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)("div", {
                className: "flex h-full items-center justify-center",
                children: (0, i.jsx)(w.y, {}),
              })),
              (s[8] = e))
            : (e = s[8]),
          e
        )
      }
      if (null != k || null == b) {
        let e
        return (
          s[9] !== S ? ((e = (0, i.jsx)(er, { onRetry: () => void S() })), (s[9] = S), (s[10] = e)) : (e = s[10]),
          e
        )
      }
      if ("unsupported" === b.kind) {
        let e
        return (
          s[11] !== b.reason
            ? ((e = (0, i.jsx)(g.W, {
                align: "start",
                children:
                  "too-large" === b.reason
                    ? (0, i.jsx)(c.A, {
                        id: "workspaceAgents.detail.memory.fileTooLarge",
                        defaultMessage: "This file is too large to preview",
                        description: "State shown when a Workspace Agent memory file exceeds the preview size limit",
                      })
                    : (0, i.jsx)(c.A, {
                        id: "workspaceAgents.detail.memory.fileUnsupported",
                        defaultMessage: "This file type can't be previewed",
                        description:
                          "State shown when a Workspace Agent memory file has a type that the preview does not support",
                      }),
              })),
              (s[11] = b.reason),
              (s[12] = e))
            : (e = s[12]),
          e
        )
      }
      if ("image" === b.kind || "pdf" === b.kind) {
        let e
        return (
          s[13] !== d || s[14] !== b.dataUrl || s[15] !== b.kind || s[16] !== u
            ? ((e = (0, i.jsx)(et, { kind: b.kind, dataUrl: b.dataUrl, agentId: d, node: u }, u.updated_at)),
              (s[13] = d),
              (s[14] = b.dataUrl),
              (s[15] = b.kind),
              (s[16] = u),
              (s[17] = e))
            : (e = s[17]),
          e
        )
      }
      if (0 === b.content.length) {
        let e
        return (
          s[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(g.W, {
                align: "start",
                children: (0, i.jsx)(c.A, {
                  id: "workspaceAgents.detail.memory.fileEmpty",
                  defaultMessage: "This file is empty",
                  description: "Empty state for a file in Workspace Agent memory",
                }),
              })),
              (s[18] = e))
            : (e = s[18]),
          e
        )
      }
      return (
        s[19] !== b.truncated
          ? ((n = b.truncated
              ? (0, i.jsx)("div", {
                  className: "pb-3 text-xs text-tertiary",
                  children: (0, i.jsx)(c.A, {
                    id: "workspaceAgents.detail.memory.fileTruncated",
                    defaultMessage: "This preview is truncated",
                    description: "State shown when a Workspace Agent memory file preview reaches its size limit",
                  }),
                })
              : null),
            (s[19] = b.truncated),
            (s[20] = n))
          : (n = s[20]),
        s[21] !== b.content || s[22] !== u.mime_type || s[23] !== u.name || s[24] !== m || s[25] !== p
          ? ((r =
              "text/markdown" === u.mime_type || u.name.toLowerCase().endsWith(".md")
                ? (0, i.jsx)(_.ND, {
                    background: "normal",
                    overflow: "auto",
                    children: (0, i.jsx)(_.T, { markdown: b.content }),
                  })
                : (0, i.jsx)(f.CodeSnippet, {
                    content: b.content,
                    language: "text",
                    shouldWrapCode: p,
                    onToggleWrapCode: () => m.set(v.S, !p),
                  })),
            (s[21] = b.content),
            (s[22] = u.mime_type),
            (s[23] = u.name),
            (s[24] = m),
            (s[25] = p),
            (s[26] = r))
          : (r = s[26]),
        s[27] !== n || s[28] !== r
          ? ((o = (0, i.jsxs)(i.Fragment, { children: [n, r] })), (s[27] = n), (s[28] = r), (s[29] = o))
          : (o = s[29]),
        o
      )
    }
    function et(e) {
      let t,
        n,
        r = (0, l.c)(10),
        { kind: a, dataUrl: c, agentId: d, node: u } = e,
        [m, f] = (0, s.useState)(!1)
      if (m) {
        let e
        return (
          r[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(er, { onRetry: () => f(!1) })), (r[0] = e))
            : (e = r[0]),
          e
        )
      }
      if ("image" === a) {
        let e, t
        return (
          r[1] === Symbol.for("react.memo_cache_sentinel") ? ((e = () => f(!0)), (r[1] = e)) : (e = r[1]),
          r[2] !== c || r[3] !== u.name
            ? ((t = (0, i.jsx)("img", {
                alt: u.name,
                className: "h-auto max-w-full object-contain",
                decoding: "async",
                src: c,
                onError: e,
              })),
              (r[2] = c),
              (r[3] = u.name),
              (r[4] = t))
            : (t = r[4]),
          t
        )
      }
      let p = `${d}/${u.id}`
      return (
        r[5] === Symbol.for("react.memo_cache_sentinel") ? ((t = () => f(!0)), (r[5] = t)) : (t = r[5]),
        r[6] !== c || r[7] !== u.name || r[8] !== p
          ? ((n = (0, i.jsx)("div", {
              className: "h-96 overflow-hidden rounded-md",
              children: (0, i.jsx)(G, {
                annotationBatchingEnabled: !1,
                annotationsEnabled: !1,
                chromeMode: "standalone",
                headerPlacement: "inline",
                fileDataUrl: c,
                hostId: o.iwv,
                path: p,
                title: u.name,
                onError: t,
              }),
            })),
            (r[6] = c),
            (r[7] = u.name),
            (r[8] = p),
            (r[9] = n))
          : (n = r[9]),
        n
      )
    }
    function en(e) {
      let t,
        n,
        r,
        o,
        c,
        u = (0, l.c)(17),
        { agentId: f, node: p } = e,
        g = (0, a.gh)(j.u),
        y = (0, d.A)(),
        w = (0, S.a)(),
        [b, k] = (0, s.useState)(!1),
        [v] = (0, s.useState)(ei)
      return (
        u[0] !== v ? ((t = () => v.abort()), (u[0] = v), (u[1] = t)) : (t = u[1]),
        (0, A.fP)(t, v),
        u[2] !== y || u[3] !== p.name
          ? ((n = y.formatMessage(
              {
                id: "workspaceAgents.detail.memory.download",
                defaultMessage: "Download {fileName}",
                description:
                  "Accessible label for downloading the open memory file. fileName is the full file name, including its extension.",
              },
              { fileName: p.name },
            )),
            (u[2] = y),
            (u[3] = p.name),
            (u[4] = n))
          : (n = u[4]),
        u[5] !== f || u[6] !== y || u[7] !== w || u[8] !== v.signal || u[9] !== p || u[10] !== g
          ? ((r = () => {
              ;(k(!0),
                (async function (e, t, n, i) {
                  let l = e.get(C.chatGptAuthenticatedAccountId$),
                    r = e.get(C.o8),
                    a = e.get(C.PO).accountUserId ?? null,
                    o = W(e, l, r, a)
                  if (null == o || null == n.file_id) return "abandoned"
                  let s = new AbortController(),
                    c = AbortSignal.any([i, s.signal]),
                    d = e.watch((e) => {
                      null == W(e, l, r, a) && s.abort()
                    })
                  try {
                    let i = { accountId: o.accountId, userId: o.userId },
                      s = { path: { agent_id: t, file_id: n.file_id } },
                      d = await E.Request.safeGet(
                        "/hermes/agent/{agent_id}/persistent-folder/files/{file_id}/download_url",
                        { parameters: s, expectedIdentity: i, signal: c },
                      )
                    if (null == W(e, l, r, a)) return "abandoned"
                    if (!0 === d.needs_auth_token) {
                      let t = await E.Request.getResponse(
                        "/hermes/agent/{agent_id}/persistent-folder/files/{file_id}/download_raw",
                        { parameters: s, expectedIdentity: i, signal: c },
                      )
                      if (!t.ok) return (await t.body?.cancel(), c.throwIfAborted(), "failed")
                      let o = await t.blob()
                      if (c.aborted || null == W(e, l, r, a)) return "abandoned"
                      return ((0, O.W)(o, n.name), "downloaded")
                    }
                    let u = (0, P.Az)(d.download_url)
                    if (null == u) return "failed"
                    let m = await (0, T.fetchChatGptFileBlob)({
                      conversationId: null,
                      downloadIntent: !0,
                      signal: c,
                      target: { type: "download-url", downloadUrl: (0, E.CP)(u) ?? u },
                    })
                    if (c.aborted || null == W(e, l, r, a)) return "abandoned"
                    return ((0, O.W)(m, n.name), "downloaded")
                  } catch {
                    return c.aborted || null == W(e, l, r, a) ? "abandoned" : "failed"
                  } finally {
                    d()
                  }
                })(g, f, p, v.signal)
                  .then((e) => {
                    "failed" === e &&
                      w() &&
                      g
                        .get(x.Id)
                        .danger(
                          y.formatMessage({
                            id: "workspaceAgents.detail.memory.downloadError",
                            defaultMessage: "Could not download this file",
                            description: "Error after downloading the open agent memory file fails",
                          }),
                          { errorAnalytics: { toastId: "workspaceAgents.detail.memory.downloadError" } },
                        )
                  })
                  .finally(() => {
                    w() && k(!1)
                  }))
            }),
            (u[5] = f),
            (u[6] = y),
            (u[7] = w),
            (u[8] = v.signal),
            (u[9] = p),
            (u[10] = g),
            (u[11] = r))
          : (r = u[11]),
        u[12] === Symbol.for("react.memo_cache_sentinel") ? ((o = (0, i.jsx)(h.vHO, {})), (u[12] = o)) : (o = u[12]),
        u[13] !== b || u[14] !== n || u[15] !== r
          ? ((c = (0, i.jsx)(m.$, {
              color: "ghostSecondary",
              size: "toolbar",
              loading: b,
              disabled: b,
              "aria-label": n,
              onClick: r,
              children: o,
            })),
            (u[13] = b),
            (u[14] = n),
            (u[15] = r),
            (u[16] = c))
          : (c = u[16]),
        c
      )
    }
    function ei() {
      return new AbortController()
    }
    function el(e) {
      let t = (0, l.c)(4),
        { channel: n } = e
      switch (n.type) {
        case "chatgpt": {
          let e
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(c.A, {
                  id: "workspaceAgents.detail.memory.chatGpt",
                  defaultMessage: "ChatGPT",
                  description: "Name of the private ChatGPT memory channel for a Workspace Agent",
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        }
        case "api": {
          let e
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(c.A, {
                  id: "workspaceAgents.detail.memory.api",
                  defaultMessage: "API",
                  description: "Name of the API memory channel for a Workspace Agent",
                })),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        }
        case "slack": {
          let e,
            l = (n.channelName ?? n.channelId).startsWith("#")
              ? (n.channelName ?? n.channelId)
              : `#${n.channelName ?? n.channelId}`
          return (t[2] !== l ? ((e = (0, i.jsx)(i.Fragment, { children: l })), (t[2] = l), (t[3] = e)) : (e = t[3]), e)
        }
      }
    }
    function er(e) {
      let t,
        n,
        r = (0, l.c)(3),
        { onRetry: a } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(c.A, {
              id: "workspaceAgents.detail.memory.fileError",
              defaultMessage: "Could not read this memory file",
              description: "Error shown when a Workspace Agent memory file cannot load",
            })),
            (r[0] = t))
          : (t = r[0]),
        r[1] !== a ? ((n = (0, i.jsx)(M.p, { onRetry: a, children: t })), (r[1] = a), (r[2] = n)) : (n = r[2]),
        n
      )
    }
    function ea(e) {
      switch (e.type) {
        case "chatgpt":
        case "api":
          return e.type
        case "slack":
          return `${e.type}:${e.linkId}:${e.channelId}`
      }
    }
  },
}
//# sourceMappingURL=108374.12227b4bf1.js.map
