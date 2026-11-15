export const __rspack_esm_ids = [496004]
export const __webpack_modules__ = {
  pLgM(e, t, n) {
    n.d(t, { lR: () => p, H6: () => _, nr: () => T, Jx: () => E, h3: () => u, BJ: () => C })
    var a = n("jkY1"),
      i = n("Hpb6"),
      s = n("f6KK"),
      r = n("Ah6R"),
      o = n("en1Z"),
      l = n("WI1e"),
      c = n("GTmQ")
    let d = "application/x-openai-rich-text"
    function _(e = l.B) {
      let t = !1,
        n = !1
      return {
        handleKeyEvent: (e) => ((t = e.shiftKey && "Insert" !== e.key), !1),
        handleMouseDown: (e) => ((t = e.shiftKey), !1),
        transformPastedText: (e, t) => ((n = t), e),
        transformPastedHTML: (e) => ((n = !1), e),
        consume: (a) => {
          let i = t || e(a) || (n && !a.state.selection.$from.parent.type.spec.code)
          return ((n = !1), i)
        },
      }
    }
    function T({
      schemaFamily: e,
      isCodeSelection: t,
      getCopyContent: n,
      createCutTransaction: a = (e) => e.state.tr.deleteSelection(),
      dispatchCut: r = (e, t) => e.dispatch(t),
      getReference: l,
      getSelectionContent: u,
      handlePaste: C,
      onCopy: p,
    }) {
      let m = _(t),
        g = (t, s) => {
          let _ = s.clipboardData,
            T = "cut" === s.type,
            C = n?.(t)
          if (s.defaultPrevented || null == _ || (t.state.selection.empty && null == C) || (T && !t.editable)) return !1
          let E = null == C ? A(t, u?.(t)) : { ...C.content, slice: f(C.content.slice) },
            m = (function (e, t, n) {
              let a = { version: 1, schemaFamily: t, insertion: e.insertion, slice: e.slice.toJSON(), reference: n },
                i = Symbol(),
                s = 5242880,
                r = !0,
                o = (e) => {
                  if (e.length > s) throw i
                  s -= JSON.stringify(e).length
                }
              try {
                let e = JSON.stringify(a, function (e, t) {
                  let n = void 0 === t || "function" == typeof t || "symbol" == typeof t
                  if (
                    (r || Array.isArray(this) || n || o(e),
                    (r = !1),
                    "string" == typeof t
                      ? o(t)
                      : null === t || "number" == typeof t || "boolean" == typeof t
                        ? (s -= JSON.stringify(t).length)
                        : "object" == typeof t
                          ? (s -= 1)
                          : n && Array.isArray(this) && (s -= 4),
                    s < 0)
                  )
                    throw i
                  return t
                })
                return void 0 !== e && e.length <= 5242880 ? e : void 0
              } catch (e) {
                if (e === i) return
                throw e
              }
            })(E, e, l?.(t)),
            { dom: g, text: h } = t.serializeForClipboard(E.slice)
          g.firstElementChild?.setAttribute("data-openai-rich-text-insertion", E.insertion)
          try {
            ;(_.clearData(), _.setData("text/html", g.innerHTML), _.setData("text/plain", C?.text ?? h))
          } catch {
            return !1
          }
          if (void 0 !== m)
            try {
              _.setData(d, m)
            } catch {}
          if ("blocks" === E.insertion) {
            let e = (function (e, t) {
              let n = t.dom.ownerDocument,
                a = n.createElement("div"),
                s = t.someProp("clipboardSerializer") ?? i.ZF.fromSchema(t.state.schema)
              a.append(s.serializeFragment((0, o.D)(e.content, e.openStart, e.openEnd), { document: n }))
              let r = [],
                l = !0,
                c = (e, t = {}) => {
                  if (3 === e.nodeType) {
                    ;(e.textContent?.includes("\n") && (l = !1),
                      e.textContent && r.push({ insert: e.textContent, attributes: t }))
                    return
                  }
                  let a = n.defaultView?.Element
                  if (null == a || !(e instanceof a)) return
                  let i = { ...t }
                  switch (e.tagName) {
                    case "STRONG":
                    case "B":
                      i.bold = !0
                      break
                    case "EM":
                    case "I":
                      i.italic = !0
                      break
                    case "U":
                      i.underline = !0
                      break
                    case "S":
                    case "DEL":
                      i.strike = !0
                      break
                    case "CODE":
                      i.code = !0
                      break
                    case "A":
                      i.link = e.getAttribute("href") ?? ""
                      break
                    case "BR":
                      l = !1
                      return
                    case "SPAN":
                      break
                    default:
                      l = !1
                  }
                  e.childNodes.forEach((e) => c(e, i))
                },
                d = (e, t = {}, n = 0) => {
                  if ("UL" === e.tagName || "OL" === e.tagName) {
                    for (let t of ("OL" === e.tagName && 1 !== Number(e.getAttribute("start") ?? 1) && (l = !1),
                    e.children)) {
                      if ("LI" !== t.tagName || t.hasAttribute("data-task-list-item")) {
                        l = !1
                        continue
                      }
                      let a = { list: "OL" === e.tagName ? "ordered" : "bullet", indent: Math.min(n, 4) }
                      for (let e of (1 !== t.querySelectorAll(":scope > p").length && (l = !1), t.children))
                        d(e, a, n + 1)
                    }
                    return
                  }
                  let a = /^H[1-6]$/.test(e.tagName)
                  if ("P" !== e.tagName && !a) {
                    l = !1
                    return
                  }
                  ;(e.childNodes.forEach((e) => c(e, a ? { bold: !0 } : {})), r.push({ insert: "\n", attributes: t }))
                }
              if (Array.from(a.childNodes).some((e) => 3 === e.nodeType)) return null
              for (let e of a.children) (r.length > 0 && r.push({ insert: "\n" }), d(e))
              return l && r.length > 0 ? JSON.stringify({ ops: r }) : null
            })(E.slice, t)
            if (null != e && e.length <= 5242880)
              try {
                _.setData("slack/texty", e)
              } catch {}
          }
          return (
            T || p?.(t, _),
            s.preventDefault(),
            T && r(t, (0, c._B)(a(t).scrollIntoView().setMeta("uiEvent", "cut")), _),
            !0
          )
        }
      return new s.k_({
        props: {
          handleDOMEvents: {
            copy: g,
            cut: g,
            keydown: (e, t) => m.handleKeyEvent(t),
            keyup: (e, t) => m.handleKeyEvent(t),
            mousedown: (e, t) => m.handleMouseDown(t),
          },
          transformCopied: f,
          transformPasted: f,
          transformPastedText: m.transformPastedText,
          transformPastedHTML: m.transformPastedHTML,
          handlePaste(t, n, a) {
            let s = m.consume(t)
            if (n.defaultPrevented || (s && n.clipboardData?.getData("text/plain") === "")) return !0
            let r = s ? null : E(n.clipboardData, e, t.state.schema),
              o = /data-openai-rich-text-insertion=["'](inline|blocks)["']/u.exec(
                n.clipboardData?.getData("text/html") ?? "",
              )?.[1],
              l = a
            if ("inline" === o) {
              let e = a.content
              for (; 1 === e.childCount && !e.firstChild.isInline;) e = e.firstChild.content
              e.content.every((e) => e.isInline) && (l = new i.Ji(e, 0, 0))
            }
            return C(
              t,
              n,
              null == r
                ? { kind: "standard", slice: l, plain: s, insertion: "inline" === o || "blocks" === o ? o : void 0 }
                : { kind: "internal", content: r },
            )
          },
        },
      })
    }
    function u(e) {
      let t = g(m(e))?.reference
      return h(t) && "string" == typeof t.uri && "string" == typeof t.label ? { uri: t.uri, label: t.label } : null
    }
    function C(e, t, n) {
      let { slice: a, insertion: s } = A(e, n)
      if ("inline" === s && (0, l.B)(e)) return (0, r.Q2)(a)
      let c =
        "inline" === s
          ? i.FK.from(e.state.schema.nodes.paragraph.create(null, a.content))
          : (0, o.D)(a.content, a.openStart, a.openEnd)
      return t.serialize(e.state.doc.copy(c)).replace(/\n$/, "")
    }
    function A(e, t) {
      if (null != t) return { slice: f(t), insertion: "blocks" }
      let { doc: n, selection: a } = e.state,
        { $from: i, $to: s, from: r, to: o } = a,
        l = null
      for (let e = i.depth; e > 0; e -= 1) {
        let t = i.node(e).type,
          n = t.spec.tableRole
        if (
          ("cell" === n || "header_cell" === n || "callout" === t.name) &&
          s.depth >= e &&
          i.before(e) === s.before(e)
        ) {
          l = e
          break
        }
      }
      let c =
          i.sameParent(s) &&
          i.parent.isTextblock &&
          ("cell" === i.parent.type.spec.tableRole ||
            "header_cell" === i.parent.type.spec.tableRole ||
            (null != l && i.depth === l + 1 && "paragraph" === i.parent.type.name) ||
            i.parentOffset > 0 ||
            s.parentOffset < s.parent.content.size),
        d = null == l ? n : i.node(l),
        _ = null == l ? 0 : i.start(l)
      return {
        slice: f(c ? n.slice(r, o) : p(d.slice(r - _, o - _, !0), d.resolve(r - _))),
        insertion: c ? "inline" : "blocks",
      }
    }
    function p(e, t) {
      let n = (a, i) => {
        let s = a.firstChild
        if (null == s || i > e.openStart) return a
        let r = n(s.content, i + 1),
          o = s.attrs
        for (let [e, n] of Object.entries(s.type.spec.attrs ?? {}))
          "function" == typeof n.clipboard && (o = { ...o, [e]: n.clipboard(s, t.index(i)) })
        return a.replaceChild(0, s.type.create(o, r, s.marks))
      }
      return new i.Ji(n(e.content, 1), e.openStart, e.openEnd)
    }
    function E(e, t, n) {
      try {
        let a = g(m(e))
        if (null == a || a.schemaFamily !== t || ("inline" !== a.insertion && "blocks" !== a.insertion) || !h(a.slice))
          return null
        for (let e of [a.slice.openStart, a.slice.openEnd])
          if (void 0 !== e && ("number" != typeof e || !Number.isInteger(e) || e < 0)) return null
        let { insertion: s } = a,
          r = f(i.Ji.fromJSON(n, a.slice)),
          o = i.Ji.maxOpen(r.content)
        if (
          0 === r.content.size ||
          r.openStart > o.openStart ||
          r.openEnd > o.openEnd ||
          ("inline" === s && (0 !== r.openStart || 0 !== r.openEnd || r.content.content.some((e) => !e.isInline)))
        )
          return null
        return (
          (function e(t, n, a) {
            t.forEach((s, r, o) => {
              let l = 0 === o ? n : 0,
                c = o === t.childCount - 1 ? a : 0
              if (0 === l && 0 === c) return void s.check()
              let d = l > 0 ? s.type.contentMatch.fillBefore(s.content) : i.FK.empty,
                _ = null == d ? null : s.type.contentMatch.matchFragment(d.append(s.content))
              if (
                null == _ ||
                s.content.content.some((e) => !s.type.allowsMarks(e.marks)) ||
                (0 === c ? !_.validEnd : null == _.fillBefore(i.FK.empty, !0))
              )
                throw RangeError("Invalid clipboard content")
              e(s.content, Math.max(0, l - 1), Math.max(0, c - 1))
            })
          })(r.content, r.openStart, r.openEnd),
          { slice: r, insertion: s }
        )
      } catch {
        return null
      }
    }
    function m(e) {
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
    function g(e) {
      if ("" === e || e.length > 5242880) return null
      try {
        let t = JSON.parse(e)
        return h(t) && 1 === t.version ? t : null
      } catch {
        return null
      }
    }
    function h(e) {
      return null != e && "object" == typeof e && !Array.isArray(e)
    }
    function f(e) {
      let t = (e) =>
        i.FK.fromArray(
          e.content.map((e) => {
            let n = ("hard_break" === e.type.name ? e.marks.filter(a.F) : e.marks).map((e) =>
              e.type.create(I(e.type.spec.attrs, e.attrs)),
            )
            return e.isText ? e.mark(n) : e.type.create(I(e.type.spec.attrs, e.attrs), t(e.content), n)
          }),
        )
      return new i.Ji(t(e.content), e.openStart, e.openEnd)
    }
    function I(e, t) {
      let n = t
      for (let [t, a] of Object.entries(e ?? {})) !1 === a.clipboard && (n = { ...n, [t]: a.default })
      return n
    }
  },
  rUQK(e, t, n) {
    let a = [
      { id: "paragraph", command: "text paragraph normal", messageKey: "text" },
      { id: "heading1", command: "heading1 h1 heading 1", messageKey: "heading1" },
      { id: "heading2", command: "heading2 h2 heading 2", messageKey: "heading2" },
      { id: "heading3", command: "heading3 h3 heading 3", messageKey: "heading3" },
      { id: "orderedList", command: "ordered list numbered", messageKey: "orderedList" },
      { id: "unorderedList", command: "unordered list bulleted", messageKey: "unorderedList" },
    ]
    new Map(a.map((e) => [e.id, e]))
    let i = a.map((e) => e.id)
    n.d(t, {}, { DR: i, MV: () => a })
  },
  vvDI(e, t, n) {
    var a,
      i,
      s =
        (((a = {}).CHATGPT_AGENT_DIRECTORY_SURFACE_UNSPECIFIED = "CHATGPT_AGENT_DIRECTORY_SURFACE_UNSPECIFIED"),
        (a.CHATGPT_AGENT_DIRECTORY_SURFACE_SIDEBAR = "CHATGPT_AGENT_DIRECTORY_SURFACE_SIDEBAR"),
        (a.CHATGPT_AGENT_DIRECTORY_SURFACE_HOME = "CHATGPT_AGENT_DIRECTORY_SURFACE_HOME"),
        (a.CHATGPT_AGENT_DIRECTORY_SURFACE_HERO_CAROUSEL = "CHATGPT_AGENT_DIRECTORY_SURFACE_HERO_CAROUSEL"),
        (a.CHATGPT_AGENT_DIRECTORY_SURFACE_HOME_AGENT_LIST = "CHATGPT_AGENT_DIRECTORY_SURFACE_HOME_AGENT_LIST"),
        (a.CHATGPT_AGENT_DIRECTORY_SURFACE_TEAM_DIRECTORY = "CHATGPT_AGENT_DIRECTORY_SURFACE_TEAM_DIRECTORY"),
        (a.CHATGPT_AGENT_DIRECTORY_SURFACE_TEAM_DIRECTORY_MODAL =
          "CHATGPT_AGENT_DIRECTORY_SURFACE_TEAM_DIRECTORY_MODAL"),
        (a.CHATGPT_AGENT_DIRECTORY_SURFACE_AGENT_DETAIL = "CHATGPT_AGENT_DIRECTORY_SURFACE_AGENT_DETAIL"),
        (a.CHATGPT_AGENT_DIRECTORY_SURFACE_NO_ACCESS_PAGE = "CHATGPT_AGENT_DIRECTORY_SURFACE_NO_ACCESS_PAGE"),
        (a.CHATGPT_AGENT_DIRECTORY_SURFACE_RBAC_NO_ACCESS_PAGE = "CHATGPT_AGENT_DIRECTORY_SURFACE_RBAC_NO_ACCESS_PAGE"),
        (a.UNRECOGNIZED = "UNRECOGNIZED"),
        a),
      r =
        (((i = {}).CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_UNSPECIFIED = "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_UNSPECIFIED"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_BROWSE_AGENTS_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_BROWSE_AGENTS_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_AGENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_AGENT_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_CREATE_AGENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_CREATE_AGENT_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_OVERFLOW_OPEN =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_OVERFLOW_OPEN"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_EDIT_AGENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_EDIT_AGENT_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_UNPIN_AGENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_UNPIN_AGENT_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_OPEN_TEMPLATES_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_OPEN_TEMPLATES_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_CREATE_AGENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_CREATE_AGENT_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_HERO_CTA_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_HERO_CTA_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_HERO_TEMPLATE_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_HERO_TEMPLATE_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_HERO_NEXT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_HERO_NEXT_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_HERO_DISMISS_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_HERO_DISMISS_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_TAB_CLICK = "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_TAB_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_OPEN_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_OPEN_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_OVERFLOW_OPEN =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_OVERFLOW_OPEN"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_EDIT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_EDIT_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_COPY_LINK_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_COPY_LINK_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_PIN_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_PIN_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_UNPIN_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_UNPIN_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_DELETE_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_DELETE_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_AGENT_CARD_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_AGENT_CARD_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_SETUP_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_SETUP_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_ADD_AGENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_ADD_AGENT_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_VIEW_AGENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_VIEW_AGENT_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_CONNECT_APP_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_CONNECT_APP_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_BACK_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_BACK_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_RETRY_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_RETRY_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_BREADCRUMB_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_BREADCRUMB_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_OVERFLOW_OPEN =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_OVERFLOW_OPEN"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_COPY_LINK_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_COPY_LINK_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_PIN_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_PIN_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_UNPIN_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_UNPIN_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_DUPLICATE_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_DUPLICATE_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_DELETE_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_DELETE_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_EDIT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_EDIT_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_VIEW_AGENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_VIEW_AGENT_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_NO_ACCESS_PAGE_VIEW =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_NO_ACCESS_PAGE_VIEW"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_NO_ACCESS_PAGE_PRICING_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_NO_ACCESS_PAGE_PRICING_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_NO_ACCESS_PAGE_VIEW_ANNOUNCEMENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_NO_ACCESS_PAGE_VIEW_ANNOUNCEMENT_CLICK"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_RBAC_NO_ACCESS_PAGE_VIEW =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_RBAC_NO_ACCESS_PAGE_VIEW"),
        (i.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_RBAC_NO_ACCESS_PAGE_VIEW_ANNOUNCEMENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_RBAC_NO_ACCESS_PAGE_VIEW_ANNOUNCEMENT_CLICK"),
        (i.UNRECOGNIZED = "UNRECOGNIZED"),
        i)
    n.d(t, {}, { QS: { $type: "protobuf_analytics_events.v1.ChatgptAgentDirectoryAction" }, TG: s, _v: r })
  },
  cQcx(e, t, n) {
    function a({ anchorElement: e, portalRoot: t }) {
      return "body" === t ? document.body : (e.closest(".codex-dialog") ?? document.body)
    }
    function i(e) {
      let t = { height: window.innerHeight, left: 0, top: 0, width: window.innerWidth }
      if (null != e && (0 !== e.offsetTop || 0 !== e.offsetLeft)) {
        let n = document.documentElement.getBoundingClientRect()
        ;((t.left = n.left + e.pageLeft - e.offsetLeft), (t.top = n.top + e.pageTop - e.offsetTop))
      }
      return t
    }
    function s(e, t, n) {
      return Math.max(("top" === n ? e : t - e) - 12, 0)
    }
    function r(e, t, n) {
      return n < t ? t : Math.min(Math.max(e, t), n)
    }
    n.d(
      t,
      {},
      {
        Q: a,
        S: function ({
          anchorRef: e,
          anchorPos: t,
          composerController: n,
          elementAnchor: o,
          gap: l = 8,
          flip: c = !1,
          minHeight: d = 160,
          minWidth: _,
          placement: T,
          portalRoot: u,
          windowZoom: C,
        }) {
          var A
          if ("u" < typeof document) return null
          if (null != n && null != t)
            return (function ({
              anchorPos: e,
              composerController: t,
              gap: n,
              placement: o,
              portalRoot: l,
              windowZoom: c,
            }) {
              var d
              let _ = a({ anchorElement: t.view.dom, portalRoot: l }),
                T = (d = c) > 0 ? d : 1,
                u = _ === document.body ? i(null) : _.getBoundingClientRect(),
                C = t.view.coordsAtPos(e)
              if (C.bottom <= u.top || C.top >= u.top + u.height) return null
              let A = u.width / T,
                p = Math.min(360, Math.max(A - 24, 0)),
                E = r((C.left - u.left) / T, 12, A - p - 12),
                m = (("top" === o ? C.top : C.bottom) - u.top) / T + ("top" === o ? -n : n)
              return {
                availableHeight: s(m, u.height / T, o),
                portalContainer: _,
                left: E,
                top: m,
                width: p,
                fixedPosition: _ === document.body,
                renderAbove: "top" === o,
              }
            })({ anchorPos: t, composerController: n, gap: l, placement: T, portalRoot: u, windowZoom: C })
          let p = null == o ? e?.current : o.element
          if (null == p || (null != o && null == o.inlineBounds)) return null
          let E = a({ anchorElement: p, portalRoot: u }),
            m = (A = C) > 0 ? A : 1,
            g = p.getBoundingClientRect(),
            h = o?.inlineBounds?.getBoundingClientRect() ?? g,
            f = c && E === document.body,
            I = f ? window.visualViewport : null,
            N = E === document.body ? i(I) : E.getBoundingClientRect(),
            R = (g.top - N.top) / m - l,
            y = (g.bottom - N.top) / m + l,
            O = Math.max(f && null != o ? 46 : 0, (I?.offsetTop ?? 0) / m),
            G = (null == I ? N.height : I.offsetTop + I.height) / m,
            x = Math.max(R - O - 12, 0),
            P = s(y, G, "bottom"),
            b = T
          if (c) {
            let e = "top" === T ? x : P,
              t = "top" === T ? P : x
            e < d && t > e && (b = "top" === T ? "bottom" : "top")
          }
          let D = "top" === b,
            w = h.width / m,
            S = (h.left - N.left) / m
          if (null != _) {
            let e = N.width / m
            ;((w = Math.min(Math.max(w, _), Math.max(e - 24, 0))), (S = r(S, 12, e - w - 12)))
          }
          return {
            availableHeight: D ? x : P,
            portalContainer: E,
            left: S,
            top: D ? R : y,
            width: w,
            fixedPosition: E === document.body,
            renderAbove: D,
          }
        },
      },
    )
  },
  zjpG(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      s = n("on57"),
      r = n("oyxz")
    n.d(
      t,
      {},
      {
        a: function (e) {
          let t,
            n,
            o,
            l = (0, i.c)(5),
            { className: c } = e
          return (
            l[0] !== c ? ((t = (0, s.A)("last:hidden", c)), (l[0] = c), (l[1] = t)) : (t = l[1]),
            l[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, a.jsx)(r.A, {
                  id: "codex.ui.bulletSeparator",
                  defaultMessage: "·",
                  description: "Middle dot separator used between inline items",
                })),
                (l[2] = n))
              : (n = l[2]),
            l[3] !== t
              ? ((o = (0, a.jsx)("span", { "aria-hidden": !0, className: t, children: n })), (l[3] = t), (l[4] = o))
              : (o = l[4]),
            o
          )
        },
      },
    )
  },
  b8aL(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      s = n("zd8w"),
      r = n("v7qY"),
      o = n("TxRk")
    let l = (0, s.memo)(function (e) {
      let t,
        n,
        l = (0, i.c)(7),
        { registry: c, allowRemoteImages: d } = e,
        _ = void 0 === d || d,
        T = (0, s.useSyncExternalStore)(c.subscribe, c.getSnapshot, c.getSnapshot)
      if (l[0] !== _ || l[1] !== T) {
        let e
        ;(l[3] !== _
          ? ((e = (e) => {
              let { container: t, icon: n, iconWhenRemoteImagesBlocked: i, iconSizing: s, id: l } = e
              return (0, r.createPortal)((0, a.jsx)(o.OQ, { icon: _ ? n : (i ?? n), iconSizing: s }), t, l)
            }),
            (l[3] = _),
            (l[4] = e))
          : (e = l[4]),
          (t = T.map(e)),
          (l[0] = _),
          (l[1] = T),
          (l[2] = t))
      } else t = l[2]
      return (l[5] !== t ? ((n = (0, a.jsx)(a.Fragment, { children: t })), (l[5] = t), (l[6] = n)) : (n = l[6]), n)
    })
    n.d(t, {}, { a: l })
  },
  GjFs(e, t, n) {
    n.d(t, { k: () => o })
    var a = n("Hpb6"),
      i = n("f6KK"),
      s = n("HRo6")
    let r = "data-inline-mention-selected"
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
          a = {}
        for (let { name: a, spec: i } of Object.values(e.nodes)) {
          let e = i.toDOM
          !0 !== i.inlineMention ||
            null == e ||
            t.includes(a) ||
            (n[a] = (t, n) => this.createView(n.dom.ownerDocument, e(t)))
        }
        for (let { name: t, spec: n } of Object.values(e.marks)) {
          let e = n.toDOM
          !0 === n.inlineMention && null != e && (a[t] = (t, n, a) => this.createView(n.dom.ownerDocument, e(t, a)))
        }
        return new i.k_({
          props: { nodeViews: n, markViews: a },
          view: (e) => {
            let t = new Set(),
              n = (e, n) => {
                let a = this.changed
                if ((this.publish(), !a && n?.doc === e.state.doc && n.selection.eq(e.state.selection))) return
                let s = new Set(),
                  o = new Set(),
                  c = e.dom.ownerDocument.getSelection(),
                  d = c?.rangeCount ? c.getRangeAt(0) : null
                if (
                  null != d &&
                  !d.collapsed &&
                  d.intersectsNode(e.dom) &&
                  (e.state.selection instanceof i.U3 || e.state.selection instanceof i.i5)
                ) {
                  let n = e.dom.ownerDocument.defaultView?.HTMLElement ?? HTMLElement
                  for (let { mention: a, icon: i } of this.entriesInRange(d, e.dom)) {
                    if (!(a instanceof n) || !e.dom.contains(a)) continue
                    let r = i?.container,
                      c = l(d, a) ? a : r
                    null != c &&
                      l(d, c) &&
                      (s.add(c),
                      c !== a ||
                        t.has(a) ||
                        "inline-flow" !== a.dataset.layout ||
                        "pill" === a.dataset.appearance ||
                        o.add(a))
                  }
                }
                let _ = (function (e, t) {
                  let n = new Map()
                  if (0 === t.size) return n
                  let a = new Map(),
                    i = e.createElement("div")
                  i.style.cssText = "position:fixed;visibility:hidden;pointer-events:none;inset:0 auto auto 0"
                  let s = e.body.currentCSSZoom || 1
                  for (let n of t) {
                    let t = getComputedStyle(n),
                      r = (n.currentCSSZoom || 1) / s,
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
                      l = JSON.stringify([o, r]),
                      c = a.get(l)
                    if (null != c) {
                      c.mentions.push(n)
                      continue
                    }
                    let d = e.createElement("span")
                    ;((d.style.display = "inline-block"),
                      Object.assign(d.style, o),
                      (d.style.zoom = String(r)),
                      (d.textContent = "M"),
                      i.append(d),
                      a.set(l, { element: d, mentions: [n] }))
                  }
                  e.body.append(i)
                  try {
                    for (let { element: t, mentions: i } of a.values()) {
                      let a = t.getBoundingClientRect(),
                        s = e.createRange()
                      s.selectNodeContents(t)
                      let r = s.getBoundingClientRect(),
                        o = t.currentCSSZoom || 1,
                        l = { top: (r.top - a.top) / o, bottom: (a.bottom - r.bottom) / o }
                      for (let e of i) n.set(e, l)
                    }
                  } finally {
                    i.remove()
                  }
                  return n
                })(e.dom.ownerDocument, o)
                for (let e of t)
                  s.has(e) || (e.removeAttribute(r), e.style.removeProperty("--inline-mention-selection-padding"))
                for (let e of s)
                  if (!t.has(e)) {
                    let t = _.get(e)
                    ;(null != t &&
                      e.style.setProperty("--inline-mention-selection-padding", `${t.top}px ${t.bottom}px`),
                      e.setAttribute(r, ""))
                  }
                t = s
              },
              a = () => n(e)
            return (
              e.dom.ownerDocument.addEventListener("selectionchange", a),
              n(e),
              {
                update: n,
                destroy: () => {
                  for (let n of (e.dom.ownerDocument.removeEventListener("selectionchange", a), t))
                    (n.removeAttribute(r), n.style.removeProperty("--inline-mention-selection-padding"))
                  queueMicrotask(this.publish)
                },
              }
            )
          },
        })
      }
      register(e, t = e) {
        let n = (0, s.V)(t)
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
          a = n ? e.startContainer : t
        for (let e = a; e !== t && null != e; e = e.parentNode) {
          let t = this.entries.get(e)
          null != t && (yield t)
        }
        let i = t.ownerDocument.createTreeWalker(t)
        i.currentNode = a
        let s = a.childNodes[n ? e.startOffset : 0]
        if (null != s) i.currentNode = s
        else for (; null == i.nextSibling();) if (null == i.parentNode()) return
        for (let t = i.currentNode; null != t && 1 !== e.comparePoint(t, 0); t = i.nextNode()) {
          let e = this.entries.get(t)
          null != e && (yield e)
        }
      }
      createView(e, t) {
        let { dom: n, contentDOM: i } = a.ZF.renderSpec(e, t),
          o = this.register(n),
          l = (0, s.V)(n)?.textElement
        return {
          dom: n,
          contentDOM: i,
          ignoreMutation: (e) =>
            "selection" !== e.type &&
            (o?.contains(e.target) === !0 ||
              l?.contains(e.target) === !0 ||
              ("attributes" === e.type && e.target === n && ("style" === e.attributeName || e.attributeName === r))),
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
    function l(e, t) {
      let n = t,
        a = t
      for (; null != n.firstChild;) n = n.firstChild
      for (; null != a.lastChild;) a = a.lastChild
      return 0 === e.comparePoint(n, 0) && 0 === e.comparePoint(a, a.nodeValue?.length ?? a.childNodes.length)
    }
  },
  eixg(e, t, n) {
    n.d(t, { k: () => k })
    var a = n("ABep"),
      i = n("QosV"),
      s = n("zTeN"),
      r = n("zd8w"),
      o = n("Wf1j"),
      l = n("oyxz"),
      c = n("SPnB"),
      d = n("bqtn"),
      _ = n("bVeK"),
      T = n("Bbed"),
      u = n("f38C"),
      C = n("SGsN"),
      A = n("OWtl"),
      p = n("akkX"),
      E = n("aepO"),
      m = n("yaAj"),
      g = n("LNWO"),
      h = n("FkNe"),
      f = n("AWV5"),
      I = n("wD9O"),
      N = n("i7gm"),
      R = n("Lhpx"),
      y = n("giDA"),
      O = n("aAWW"),
      G = n("TL6G")
    function x(e) {
      let t,
        n,
        s,
        r = (0, i.c)(6)
      r[0] !== e
        ? (({ persistAcrossLayouts: n, ...t } = e), (r[0] = e), (r[1] = t), (r[2] = n))
        : ((t = r[1]), (n = r[2]))
      let o = void 0 !== n && n
      return (
        r[3] !== o || r[4] !== t
          ? ((s = o ? (0, a.jsx)(P, { ...t }) : (0, a.jsx)(d.Ab, { ...t, align: "end", contentWidth: "xs" })),
            (r[3] = o),
            (r[4] = t),
            (r[5] = s))
          : (s = r[5]),
        s
      )
    }
    function P(e) {
      let t,
        n,
        s,
        o,
        l,
        c,
        _,
        T,
        u,
        C,
        A,
        p = (0, i.c)(27),
        { triggerButton: E, children: m, open: g, onOpenChange: h } = e,
        [N, x] = (0, r.useState)(!1),
        P = g ?? N,
        D = (0, I.dz)(),
        w = (0, r.useContext)(y.J)?.registerOpen
      p[0] !== g || p[1] !== h
        ? ((t = (e) => {
            ;(e && (0, O.e)(), void 0 === g && x(e), h?.(e))
          }),
          (p[0] = g),
          (p[1] = h),
          (p[2] = t))
        : (t = p[2])
      let S = t
      p[3] !== S ? ((n = () => S(!1)), (p[3] = S), (p[4] = n)) : (n = p[4])
      let Y = (0, r.useEffectEvent)(n)
      ;(p[5] !== Y || p[6] !== P
        ? ((s = () => {
            if (P) return G.O1.subscribe("browser-sidebar-web-contents-pointer-down", () => Y())
          }),
          (p[5] = Y),
          (p[6] = P),
          (p[7] = s))
        : (s = p[7]),
        p[8] !== P ? ((o = [P]), (p[8] = P), (p[9] = o)) : (o = p[9]),
        (0, r.useEffect)(s, o),
        p[10] !== P || p[11] !== w
          ? ((l = () => {
              if (P) return w?.()
            }),
            (c = [P, w]),
            (p[10] = P),
            (p[11] = w),
            (p[12] = l),
            (p[13] = c))
          : ((l = p[12]), (c = p[13])),
        (0, r.useLayoutEffect)(l, c),
        p[14] !== E
          ? ((_ = (0, a.jsx)(d.ms.Trigger, { asChild: !0, children: E })), (p[14] = E), (p[15] = _))
          : (_ = p[15]),
        p[16] === Symbol.for("react.memo_cache_sentinel") ? ((T = (0, R.xk)("xs")), (p[16] = T)) : (T = p[16]))
      let L = 1 === D ? void 0 : D
      return (
        p[17] !== L ? ((u = { zoom: L }), (p[17] = L), (p[18] = u)) : (u = p[18]),
        p[19] !== m || p[20] !== u
          ? ((C = (0, a.jsx)(f.ZL, {
              children: (0, a.jsx)(b, {
                children: (0, a.jsx)(d.ms.Content, {
                  size: "inset",
                  align: "end",
                  className: T,
                  style: u,
                  children: m,
                }),
              }),
            })),
            (p[19] = m),
            (p[20] = u),
            (p[21] = C))
          : (C = p[21]),
        p[22] !== S || p[23] !== P || p[24] !== C || p[25] !== _
          ? ((A = (0, a.jsxs)(f.bL, { modal: !1, open: P, onOpenChange: S, children: [_, C] })),
            (p[22] = S),
            (p[23] = P),
            (p[24] = C),
            (p[25] = _),
            (p[26] = A))
          : (A = p[26]),
        A
      )
    }
    function b(e) {
      let t,
        n = (0, i.c)(2),
        { children: s } = e
      return (
        n[0] !== s
          ? ((t = (0, a.jsx)(N.s, { container: document.body, children: s })), (n[0] = s), (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    var D = n("Pagv"),
      w = n("JQ9a"),
      S = n("OXj5"),
      Y = n("tYw1"),
      L = n("V0vU")
    let M = (0, T._)(
      async () => (await Promise.all([n.e(109541), n.e(940268)]).then(n.bind(n, "v6Vy"))).WorkspaceAgentSharingDialog,
      {
        fallback: (e) => (0, a.jsx)(S.S, { onClose: e.onClose, onCloseAutoFocus: e.onCloseAutoFocus }),
        errorFallback: (e) => (0, a.jsx)(S.S, { failed: !0, onClose: e.onClose, onCloseAutoFocus: e.onCloseAutoFocus }),
      },
    )
    function k(e) {
      let t,
        n,
        T,
        f,
        I,
        N,
        R,
        y,
        O,
        G,
        P,
        b = (0, i.c)(57),
        { agent: S, isPublished: L, onDeleted: k, onPinError: v, renderTrigger: j, showSharing: K } = e,
        U = void 0 !== K && K,
        B = (0, s.gh)(A.u),
        F = (0, o.A)(),
        V = (0, r.useRef)(null),
        W = (0, s.Ul)(c.chatGptAuthenticatedAccountId$),
        z = (0, s.Ul)(c.Kw),
        q = (0, s.Ul)(g.lF),
        [Z, $] = (0, r.useState)(null),
        Q = (0, s._U)(Y.VB, S.id),
        [J, X] = (0, r.useState)(!1),
        [ee, et] = (0, r.useState)(null),
        [en, ea] = (0, r.useState)(!1),
        ei = null != j,
        es = null == j ? void 0 : "primary",
        er = null == j ? void 0 : "xl"
      ;(b[0] !== F
        ? ((t = F.formatMessage({
            id: "workspaceAgents.index.moreActions",
            defaultMessage: "More actions",
            description: "Accessible label for an agent row action menu",
          })),
          (b[0] = F),
          (b[1] = t))
        : (t = b[1]),
        b[2] !== es || b[3] !== er || b[4] !== t
          ? ((n = (0, a.jsx)(u.p, { ref: V, color: es, size: er, label: t })),
            (b[2] = es),
            (b[3] = er),
            (b[4] = t),
            (b[5] = n))
          : (n = b[5]),
        b[6] !== S.icon ||
        b[7] !== S.id ||
        b[8] !== S.name ||
        b[9] !== F ||
        b[10] !== Q ||
        b[11] !== L ||
        b[12] !== v ||
        b[13] !== en ||
        b[14] !== B
          ? ((T = L
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(d.ms.Item, {
                      LeftIcon: _.ibM,
                      onSelect: () => {
                        ;(0, E.E)((0, D.nY)(S.id)).then((e) => {
                          e && (0, p.o)(B)
                        })
                      },
                      children: (0, a.jsx)(l.A, {
                        id: "workspaceAgents.index.copyLink",
                        defaultMessage: "Copy link",
                        description: "Action that copies an agent link",
                      }),
                    }),
                    (0, a.jsx)(d.ms.Item, {
                      disabled: null == Q || en,
                      LeftIcon: _.P0k,
                      onSelect: () => {
                        null == Q ||
                          en ||
                          (v?.(!1),
                          ea(!0),
                          (0, Y.HS)(B, { id: S.id, name: S.name, icon: S.icon }, !Q)
                            .catch(() => {
                              null != v
                                ? v(!0)
                                : B.get(C.Id).danger(
                                    F.formatMessage({
                                      id: "workspaceAgents.index.pinFailed",
                                      defaultMessage: "Couldn’t update agent pin",
                                      description: "Error message when an agent pin cannot be updated",
                                    }),
                                    { errorAnalytics: { toastId: "workspaceAgents.index.pinFailed" } },
                                  )
                            })
                            .finally(() => ea(!1)))
                      },
                      children: Q
                        ? (0, a.jsx)(l.A, {
                            id: "workspaceAgents.index.unpin",
                            defaultMessage: "Unpin from sidebar",
                            description: "Action that removes an agent from the sidebar",
                          })
                        : (0, a.jsx)(l.A, {
                            id: "workspaceAgents.index.pin",
                            defaultMessage: "Pin to sidebar",
                            description: "Action that pins an agent to the sidebar",
                          }),
                    }),
                  ],
                })
              : null),
            (b[6] = S.icon),
            (b[7] = S.id),
            (b[8] = S.name),
            (b[9] = F),
            (b[10] = Q),
            (b[11] = L),
            (b[12] = v),
            (b[13] = en),
            (b[14] = B),
            (b[15] = T))
          : (T = b[15]),
        b[16] !== W || b[17] !== z || b[18] !== S.id || b[19] !== L || b[20] !== U
          ? ((f =
              U && L && null != W && null != z
                ? (0, a.jsx)(w.g, {
                    agentId: S.id,
                    page: "CHATGPT_AGENT_BUILDER_PAGE_AGENT_DIRECTORY_DETAIL",
                    onSelect: () => $({ accountId: W, accountUserId: z }),
                  })
                : null),
            (b[16] = W),
            (b[17] = z),
            (b[18] = S.id),
            (b[19] = L),
            (b[20] = U),
            (b[21] = f))
          : (f = b[21]),
        b[22] !== S.id || b[23] !== L || b[24] !== J
          ? ((I = J
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(h.wL, { agentId: S.id, onSelect: () => et("duplicate") }),
                    (0, a.jsx)(H, { showSeparator: L, agentId: S.id, onSelect: () => et("delete") }),
                  ],
                })
              : null),
            (b[22] = S.id),
            (b[23] = L),
            (b[24] = J),
            (b[25] = I))
          : (I = b[25]),
        b[26] !== J || b[27] !== ei || b[28] !== n || b[29] !== T || b[30] !== f || b[31] !== I
          ? ((N = (0, a.jsxs)(x, {
              persistAcrossLayouts: ei,
              open: J,
              onOpenChange: X,
              triggerButton: n,
              children: [T, f, I],
            })),
            (b[26] = J),
            (b[27] = ei),
            (b[28] = n),
            (b[29] = T),
            (b[30] = f),
            (b[31] = I),
            (b[32] = N))
          : (N = b[32]))
      let eo = N
      return (
        b[33] !== j || b[34] !== eo
          ? ((R = null == j ? eo : j(eo)), (b[33] = j), (b[34] = eo), (b[35] = R))
          : (R = b[35]),
        b[36] !== W || b[37] !== z || b[38] !== S.id || b[39] !== q || b[40] !== Z || b[41] !== U
          ? ((y =
              U && !0 === q && Z?.accountId === W && Z?.accountUserId === z && null != Z
                ? (0, a.jsx)(M, {
                    accountId: Z.accountId,
                    accountUserId: Z.accountUserId,
                    agentId: S.id,
                    onClose: () => $(null),
                    onCloseAutoFocus: () => V.current?.focus(),
                  })
                : null),
            (b[36] = W),
            (b[37] = z),
            (b[38] = S.id),
            (b[39] = q),
            (b[40] = Z),
            (b[41] = U),
            (b[42] = y))
          : (y = b[42]),
        b[43] !== S.id || b[44] !== S.name || b[45] !== ee || b[46] !== k
          ? ((O =
              "delete" === ee
                ? (0, a.jsx)(m.W, {
                    agentId: S.id,
                    agentName: S.name,
                    onClose: () => et(null),
                    onCloseAutoFocus: () => V.current?.focus(),
                    onDeleted: k,
                  })
                : null),
            (b[43] = S.id),
            (b[44] = S.name),
            (b[45] = ee),
            (b[46] = k),
            (b[47] = O))
          : (O = b[47]),
        b[48] !== S.id || b[49] !== S.name || b[50] !== ee
          ? ((G =
              "duplicate" === ee
                ? (0, a.jsx)(h.gj, {
                    agentId: S.id,
                    agentName: S.name,
                    onClose: () => et(null),
                    onCloseAutoFocus: () => V.current?.focus(),
                  })
                : null),
            (b[48] = S.id),
            (b[49] = S.name),
            (b[50] = ee),
            (b[51] = G))
          : (G = b[51]),
        b[52] !== R || b[53] !== y || b[54] !== O || b[55] !== G
          ? ((P = (0, a.jsxs)(a.Fragment, { children: [R, y, O, G] })),
            (b[52] = R),
            (b[53] = y),
            (b[54] = O),
            (b[55] = G),
            (b[56] = P))
          : (P = b[56]),
        P
      )
    }
    function H(e) {
      let t,
        n = (0, i.c)(4),
        { agentId: r, onSelect: o, showSeparator: c } = e,
        T = (0, s._U)(L.l, r)
      return (
        n[0] !== T || n[1] !== o || n[2] !== c
          ? ((t = T
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    c ? (0, a.jsx)(d.ms.Separator, {}) : null,
                    (0, a.jsx)(d.ms.Item, {
                      LeftIcon: _.cSG,
                      tone: "danger",
                      onSelect: o,
                      children: (0, a.jsx)(l.A, {
                        id: "workspaceAgents.management.delete",
                        defaultMessage: "Delete",
                        description: "Button that permanently deletes a Workspace Agent",
                      }),
                    }),
                  ],
                })
              : null),
            (n[0] = T),
            (n[1] = o),
            (n[2] = c),
            (n[3] = t))
          : (t = n[3]),
        t
      )
    }
  },
  GXwO(e, t, n) {
    var a = n("ASxG"),
      i = n("Ghh3")
    let s = a.object({ type: a.literal("file"), id: a.string().min(1), name: a.string(), mime_type: a.string() }),
      r = a.discriminatedUnion("type", [s, s.extend({ type: a.literal("image"), preview_url: a.string() })])
    n.d(
      t,
      {},
      {
        X: async function ({ body: e, identity: t, signal: n, additionalHeaders: a, assertCurrent: s }) {
          s()
          let o = await i.Request.safePost("/hermes/pluto/attachments", {
            requestBody: e,
            expectedIdentity: t,
            signal: n,
            additionalHeaders: a,
            assertRequestCurrent: s,
          })
          return (s(), r.parse(o))
        },
        k: r,
      },
    )
  },
  NDAD(e, t, n) {
    var a = n("ASxG"),
      i = n("GXwO")
    let s = a.discriminatedUnion("type", [
        a.object({ type: a.literal("send"), text: a.string(), attachments: a.array(i.k).optional() }),
        a.object({ type: a.literal("compose"), text: a.string() }),
        a.object({ type: a.literal("publish_checklist"), text: a.string(), issues: a.array(a.string()) }),
        a.object({
          type: a.literal("template"),
          text: a.string(),
          templateName: a.string().min(1),
          selections: a.record(a.string(), a.array(a.string())),
        }),
      ]),
      r = a.object({ workspaceAgentAssistant: s.optional() })
    n.d(
      t,
      {},
      {
        GQ: function (e, t, n) {
          return {
            type: "template",
            templateName: e.template_name,
            selections: t,
            text:
              e.default_prompt?.trim() ||
              n.formatMessage(
                {
                  id: "workspaceAgents.templates.startPrompt",
                  defaultMessage: "Start from the {templateName} template and help me customize the agent",
                  description:
                    "Initial message to the agent builder assistant after a user selects a template. templateName is the template's display name.",
                },
                { templateName: e.display_name },
              ),
          }
        },
        H6: r,
        cF: async function (e, t, n) {
          "compose" === t.type
            ? (await e.compose({ text: t.text }), await e.focus())
            : "send" === t.type
              ? await e.send({ text: t.text, ...(null == t.attachments ? {} : { attachments: t.attachments }) })
              : "publish_checklist" === t.type
                ? await e.send({
                    content: [
                      {
                        type: "input_tag",
                        text: "",
                        id: "message_source:publish_checklist",
                        group: n.formatMessage({
                          id: "workspaceAgents.publication.messageSourceGroup",
                          defaultMessage: "Message source",
                          description:
                            "Group label for the tag identifying a missing-field checklist request to the builder assistant",
                        }),
                        data: { type: "message_source", value: "publish_checklist" },
                      },
                      { type: "input_text", text: [t.text, ...t.issues.map((e) => `- ${e}`)].join("\n") },
                    ],
                  })
                : await e.send({
                    content: [
                      {
                        type: "input_tag",
                        text: "",
                        id: `template:${t.templateName}`,
                        group: n.formatMessage({
                          id: "workspaceAgents.templates.tagGroup",
                          defaultMessage: "Templates",
                          description: "Group label for a selected agent template in the builder assistant composer",
                        }),
                        data: {
                          type: "template",
                          template_name: t.templateName,
                          selected_tool_ids_by_category: t.selections,
                        },
                      },
                      { type: "input_text", text: t.text },
                    ],
                  })
        },
      },
    )
  },
  Q3aI(e, t, n) {
    var a = n("DBCl"),
      i = n("BQbE"),
      s = n("FpcZ"),
      r = n("OQWN")
    n.d(
      t,
      {},
      {
        _: async function (e, t, n, o, l) {
          o.throwIfAborted()
          let c = (0, r.ob)(e),
            d = [...new Set(Object.values(n).flat())]
          await Promise.all(
            d.map((t) => {
              let { queryKey: n } = (0, s.mf)({ appId: t, accountId: c.accountId, includeTools: !0, enabled: !0 })
              return e.queryClient.invalidateQueries({ queryKey: n, exact: !0, refetchType: "none" })
            }),
          )
          let _ = new Map(
              (0 === d.length
                ? []
                : await e.queryClient.fetchQuery({
                    ...(0, i.getAppsReadQueryOptions)({
                      scope: e,
                      appIds: d,
                      browserAccountId: c.accountId,
                      hostId: a.iwv,
                      includeTools: !0,
                      queryClient: e.queryClient,
                      supportsAppRead: !0,
                    }),
                    staleTime: 0,
                  })
              ).map((e) => [e.id, e]),
            ),
            T = d.map((e) => {
              let t = (_.get(e)?.toolSummaries ?? []).filter((e) => e.name.length > 0 && e.isEnabled),
                n = [...new Set(t.map((e) => e.name))]
              if (0 === n.length) throw Error("The selected template app has no available actions")
              return {
                connector_identifier: { type: "CONNECTOR_ID", connector_id: e },
                auth: { type: "LINK_PLACEHOLDER", connector_id: e, actions: n, id: `link_placeholder_${e}` },
                allowed_tools: n,
                user_approvals: {
                  always: { tool_names: [...new Set(t.filter((e) => !e.isReadOnly).map((e) => e.name))] },
                  never: { tool_names: [] },
                },
              }
            })
          ;(o.throwIfAborted(), (0, r.qi)(e, c))
          let u = (0, r.NG)()
          return (0, r.Gt)(
            e,
            { ...u, icon: t.icon ?? l ?? u.icon, tools: { ...u.tools, connectors: T } },
            o,
            t.template_name,
          )
        },
      },
    )
  },
  dedS(e, t, n) {
    var a = n("ABep"),
      i = n("oyxz"),
      s = n("JNtf"),
      r = n("mUDD"),
      o = n("Bbed"),
      l = n("RNul")
    let c = (0, o._)(
      async () =>
        (await Promise.all([n.e(342905), n.e(819365), n.e(945852), n.e(393529)]).then(n.bind(n, "KOPZ")))
          .WorkspaceAgentTemplates,
      {
        fallback: ({ onClose: e }) =>
          (0, a.jsx)(s.lG, {
            open: !0,
            onOpenChange: (t) => {
              t || e()
            },
            children: (0, a.jsxs)(r.R4, {
              children: [
                (0, a.jsx)(s.L3, {
                  children: (0, a.jsx)(i.A, {
                    id: "workspaceAgents.templates.loading",
                    defaultMessage: "Loading templates…",
                    description: "Status while agent templates are loading",
                  }),
                }),
                (0, a.jsx)(l.y, {}),
              ],
            }),
          }),
      },
    )
    n.d(t, {}, { I: c })
  },
  meSf(e, t, n) {
    n.d(
      t,
      {},
      {
        a: function (e, t) {
          let n = new URLSearchParams(e.search)
          return (
            n.set("templates", "1"),
            n.delete("template_setup"),
            null == t ? n.delete("template") : n.set("template", t),
            { pathname: e.pathname, search: n.toString() }
          )
        },
        w: function (e) {
          let t = new URLSearchParams(e.search)
          for (let e of ["templates", "template", "template_setup"]) t.delete(e)
          return { pathname: e.pathname, search: t.toString() }
        },
      },
    )
  },
  wobp(e, t, n) {
    n.d(t, { WorkspaceAgentsPage: () => $ })
    var a = n("ABep"),
      i = n("QosV"),
      s = n("slpy"),
      r = n("hHUD"),
      o = n("i5ac"),
      l = n.n(o),
      c = n("zTeN"),
      d = n("zd8w"),
      _ = n("Wf1j"),
      T = n("oyxz"),
      u = n("HZfM"),
      C = n("SPnB"),
      A = n("JIuM"),
      p = n("OAko"),
      E = n("LhhH"),
      m = n("zjpG"),
      g = n("Sm6l"),
      h = n("bqtn"),
      f = n("xs0e"),
      I = n("bVeK"),
      N = n("FrrB"),
      R = n("Bbed"),
      y = n("PkPj"),
      O = n("zkPp"),
      G = n("BrP7"),
      x = (e) =>
        (0, a.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            d: "M16.0012 9.04175V7.33667C16.0012 6.62563 16.0013 6.1323 15.97 5.74878C15.9469 5.46683 15.9091 5.27732 15.8577 5.13355L15.802 5.00366C15.6481 4.70155 15.4137 4.44853 15.1262 4.27222L14.9993 4.20191C14.8413 4.12145 14.6297 4.06462 14.2542 4.03394C13.8707 4.00262 13.3771 4.00171 12.6663 4.00171H7.33325C6.62222 4.00171 6.12888 4.0026 5.74536 4.03394C5.46351 4.05697 5.27388 4.09383 5.13013 4.14526L5.00024 4.20191C4.69799 4.35592 4.44511 4.59005 4.2688 4.87769L4.19849 5.00366C4.11798 5.16167 4.06122 5.37307 4.03052 5.74878C3.99918 6.1323 3.99829 6.62563 3.99829 7.33667V12.6667C3.99829 13.3777 3.99918 13.8711 4.03052 14.2546C4.06122 14.6303 4.11798 14.8418 4.19849 14.9998L4.2688 15.1257C4.44512 15.4134 4.69799 15.6475 5.00024 15.8015L5.13013 15.8572C5.27391 15.9087 5.46332 15.9464 5.74536 15.9695C6.12888 16.0008 6.62221 16.0017 7.33325 16.0017H10.595C11.1459 16.0017 11.4691 15.9943 11.6956 15.9724C11.5803 15.7786 11.487 15.6063 11.4172 15.4392L11.3635 15.2986C10.9573 14.1144 11.2873 12.8022 12.2053 11.9509L12.3186 11.8523C12.5958 11.6268 12.9622 11.4246 13.4709 11.1384L15.9241 9.75855L15.9583 9.82007C15.965 9.78841 15.9747 9.75735 15.9797 9.72534L15.9915 9.62183C16.0006 9.50892 16.0012 9.35336 16.0012 9.04175ZM14.1233 12.2976C13.636 12.5717 13.3907 12.7131 13.2375 12.823L13.1096 12.9255C12.5774 13.419 12.3859 14.1804 12.6213 14.8669L12.6858 15.0183C12.7265 15.1013 12.7848 15.2005 12.8674 15.3367C13.0089 15.1523 13.1785 14.8669 13.4905 14.321L14.8948 11.863L14.1233 12.2976ZM10.0002 9.33472C10.3673 9.33489 10.6652 9.63271 10.6653 9.99976C10.6653 10.3669 10.3674 10.6646 10.0002 10.6648H6.66626C6.29914 10.6646 6.00122 10.3669 6.00122 9.99976C6.00136 9.63271 6.29922 9.33489 6.66626 9.33472H10.0002ZM7.79614 6.00171L7.92993 6.01538C8.23318 6.07722 8.46118 6.34524 8.46118 6.66675C8.46115 6.98824 8.23317 7.25629 7.92993 7.31812L7.79614 7.33179H6.66626C6.29917 7.33161 6.00126 7.03387 6.00122 6.66675C6.00122 6.29959 6.29914 6.00189 6.66626 6.00171H7.79614ZM13.3333 6.00171L13.467 6.01538C13.7702 6.07732 13.9983 6.34532 13.9983 6.66675C13.9983 6.98815 13.7702 7.25619 13.467 7.31812L13.3333 7.33179H10.2961C9.92902 7.33165 9.63115 7.0339 9.6311 6.66675C9.6311 6.29956 9.92899 6.00185 10.2961 6.00171H13.3333ZM17.3313 9.04175C17.3313 9.32336 17.3331 9.53907 17.3167 9.73706L17.2932 9.9314C17.2677 10.0937 17.2293 10.2536 17.179 10.4099L17.1252 10.5652C17.0792 10.6862 17.0235 10.8026 16.9563 10.9294L16.717 11.3562L14.6458 14.9812C14.2984 15.5891 14.0513 16.0335 13.7327 16.3728L13.5911 16.5125C13.3022 16.7742 12.9676 16.9799 12.6047 17.1199L12.4475 17.1755C11.9451 17.3394 11.3951 17.3318 10.595 17.3318H7.33325C6.64416 17.3318 6.0872 17.3324 5.63696 17.2957C5.23632 17.2629 4.87559 17.1977 4.53931 17.0535L4.39673 16.9871C3.87547 16.7215 3.43912 16.3171 3.13501 15.821L3.01294 15.6033C2.82112 15.2267 2.74176 14.8208 2.70435 14.363C2.66756 13.9128 2.66821 13.3558 2.66821 12.6667V7.33667C2.66821 6.64758 2.66756 6.09062 2.70435 5.64038C2.74176 5.18259 2.82113 4.77676 3.01294 4.40015L3.13501 4.1814C3.4391 3.68568 3.87569 3.28184 4.39673 3.01636L4.53931 2.94995C4.8756 2.80571 5.23632 2.74051 5.63696 2.70776C6.0872 2.67098 6.64416 2.67163 7.33325 2.67163H12.6663C13.3553 2.67163 13.9123 2.67099 14.3625 2.70776C14.8206 2.74518 15.227 2.82439 15.6038 3.01636L15.8215 3.13843C16.3174 3.44253 16.7211 3.87903 16.9866 4.40015L17.053 4.54273C17.1973 4.87904 17.2624 5.2397 17.2952 5.64038C17.332 6.09062 17.3313 6.64758 17.3313 7.33667V9.04175Z",
          }),
        }),
      P = n("xqnZ"),
      b = n("OWtl"),
      D = n("khOd"),
      w = n("ZGaK"),
      S = n("GEsy"),
      Y = n("eixg"),
      L = n("LNWO"),
      M = n("NDAD"),
      k = n("dedS"),
      H = n("vvDI"),
      v = n("yGJW"),
      j = n("xm0K")
    function K(e) {
      let t,
        n,
        s,
        r,
        o,
        l,
        _,
        C,
        A,
        p = (0, i.c)(30),
        { agent: E } = e,
        m = (0, c.gh)(b.u),
        g = (0, d.useId)(),
        h = (0, u.Zp)(),
        f = (0, u.zy)()
      return (
        p[0] !== E.id || p[1] !== E.is_pinned || p[2] !== f.pathname || p[3] !== f.search || p[4] !== h || p[5] !== m
          ? ((t = () => {
              ;(0, v.yy)(m, H.QS, {
                actionType: "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_AGENT_CARD_CLICK",
                surface: "CHATGPT_AGENT_DIRECTORY_SURFACE_TEAM_DIRECTORY",
                agentId: E.id,
                isPinned: !0 === E.is_pinned,
              })
              let e = new URLSearchParams(f.search)
              ;(e.set("agent", E.id), h({ pathname: f.pathname, search: e.toString() }))
            }),
            (p[0] = E.id),
            (p[1] = E.is_pinned),
            (p[2] = f.pathname),
            (p[3] = f.search),
            (p[4] = h),
            (p[5] = m),
            (p[6] = t))
          : (t = p[6]),
        p[7] !== E.icon
          ? ((n = (0, a.jsx)(j.WorkspaceAgentGraphic, { icon: E.icon, size: 40 })), (p[7] = E.icon), (p[8] = n))
          : (n = p[8]),
        p[9] !== E.name
          ? ((s =
              E.name.trim() ||
              (0, a.jsx)(T.A, {
                id: "workspaceAgents.index.unnamed",
                defaultMessage: "Unnamed agent",
                description: "Fallback name for a Workspace Agent without a name",
              })),
            (p[9] = E.name),
            (p[10] = s))
          : (s = p[10]),
        p[11] !== s || p[12] !== g
          ? ((r = (0, a.jsx)("span", {
              id: g,
              className: "truncate text-sm leading-5 font-medium text-default",
              children: s,
            })),
            (p[11] = s),
            (p[12] = g),
            (p[13] = r))
          : (r = p[13]),
        p[14] !== E.description || p[15] !== E.tagline
          ? ((o =
              E.tagline.trim() ||
              E.description.trim() ||
              (0, a.jsx)(T.A, {
                id: "workspaceAgents.index.noDescription",
                defaultMessage: "No description",
                description: "Fallback description for an agent directory row",
              })),
            (p[14] = E.description),
            (p[15] = E.tagline),
            (p[16] = o))
          : (o = p[16]),
        p[17] !== o
          ? ((l = (0, a.jsx)("span", { className: "line-clamp-2 text-sm leading-5 text-tertiary", children: o })),
            (p[17] = o),
            (p[18] = l))
          : (l = p[18]),
        p[19] !== r || p[20] !== l
          ? ((_ = (0, a.jsxs)("span", { className: "flex min-w-0 flex-col gap-1", children: [r, l] })),
            (p[19] = r),
            (p[20] = l),
            (p[21] = _))
          : (_ = p[21]),
        p[22] !== E.creator_name
          ? ((C = E.creator_name?.trim()
              ? (0, a.jsx)("span", {
                  className: "mt-auto truncate text-sm leading-5 text-tertiary",
                  children: E.creator_name.trim(),
                })
              : null),
            (p[22] = E.creator_name),
            (p[23] = C))
          : (C = p[23]),
        p[24] !== t || p[25] !== n || p[26] !== _ || p[27] !== C || p[28] !== g
          ? ((A = (0, a.jsxs)("button", {
              className:
                "flex h-full min-h-50 cursor-interaction flex-col gap-2 rounded-xl border-hairline border-default bg-surface p-5 text-start hover:bg-secondary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-inset dark:border-transparent",
              "aria-labelledby": g,
              type: "button",
              onClick: t,
              children: [n, _, C],
            })),
            (p[24] = t),
            (p[25] = n),
            (p[26] = _),
            (p[27] = C),
            (p[28] = g),
            (p[29] = A))
          : (A = p[29]),
        A
      )
    }
    var U = n("Q3aI"),
      B = n("meSf"),
      F = n("ovrt"),
      V = n("Pagv"),
      W = n("Ghh3"),
      z = n("rvFo")
    let q = (0, c.N3)(b.u, (e, { get: t }) => {
        let n = t(C.chatGptAuthenticatedAccountId$),
          a = t(C.o8)
        return {
          enabled: null != n && null != a && !0 === t(L.XL),
          initialPageParam: null,
          queryKey:
            "string" == typeof e ? ["workspace-agents", n, e, a] : ["workspace-agents", "directory", n, e.query, a],
          queryFn: ({ pageParam: t, signal: i }) => {
            if (null == n || null == a) throw Error("Missing workspace identity")
            return "string" == typeof e
              ? W.Request.safeGet("/hermes/agents", {
                  parameters: { query: { cursor: t, limit: 50, list_type: e } },
                  signal: i,
                  expectedIdentity: { accountId: n, userId: a },
                })
              : 0 === e.query.length
                ? W.Request.safeGet("/hermes/workspace-store/agents", {
                    parameters: { query: { cursor: t, limit: 50 } },
                    signal: i,
                    expectedIdentity: { accountId: n, userId: a },
                  })
                : W.Request.safeGet("/hermes/workspace-store/agents/search", {
                    parameters: { query: { cursor: t, limit: 50, query: e.query } },
                    signal: i,
                    expectedIdentity: { accountId: n, userId: a },
                  })
          },
          getNextPageParam: (e) => e.next_cursor ?? void 0,
          refetchOnMount: "used" !== e || "always",
          refetchInterval: "used" === e && z.D.ONE_MINUTE,
          retry: !1,
          staleTime: z.D.ONE_MINUTE,
        }
      }),
      Z = (0, R._)(async () => (await n.e(111761).then(n.bind(n, "r9FN"))).WorkspaceAgentDirectoryDetails)
    function $() {
      let e,
        t,
        n,
        o,
        l,
        m,
        f,
        N,
        R,
        O,
        w,
        Y,
        H,
        v,
        j,
        K,
        F,
        W,
        z,
        q,
        $,
        X,
        ee,
        et,
        en,
        ea,
        ei,
        es,
        er,
        eo,
        el,
        ec,
        ed = (0, i.c)(97),
        e_ = (0, c.gh)(b.u),
        [eT] = (0, d.useState)(Q)
      ;(ed[0] !== eT ? ((e = () => eT.abort()), (ed[0] = eT), (ed[1] = e)) : (e = ed[1]), (0, P.fP)(e, eT))
      let eu = (0, _.A)(),
        eC = (0, u.Zp)(),
        eA = (0, u.zy)(),
        ep = (0, c.Ul)(C.chatGptAuthenticatedAccountId$),
        eE = (0, c.Ul)(C.o8),
        [em, eg] = (0, u.ok)()
      ed[2] !== em ? ((t = em.get("agent")), (ed[2] = em), (ed[3] = t)) : (t = ed[3])
      let eh = t,
        ef = (0, c.Ul)(D.GB),
        eI = (0, c.Ul)(L.iX),
        { data: eN } = (0, p.YL)(),
        eR = (0, A.Dv)(eN?.profile_picture_url)
      if (ed[4] !== eN?.name || ed[5] !== em || ed[6] !== eg) {
        let e, t, a
        n = em.get("q") ?? ""
        let i = em.get("tab")
        ;((f = "recent"),
          "mine" === i ? (f = "owned") : "directory" === i && (f = "directory"),
          ed[13] !== eg
            ? ((e = (e) => {
                eg(
                  (t) => {
                    let n = new URLSearchParams(t),
                      a = e.slice(0, 200)
                    return (0 === a.length ? n.delete("q") : n.set("q", a), n)
                  },
                  { replace: !0 },
                )
              }),
              (ed[13] = eg),
              (ed[14] = e))
            : (e = ed[14]),
          (o = e),
          ed[15] !== eg
            ? ((t = (e) => {
                eg((t) => {
                  let n = new URLSearchParams(t)
                  return (n.set("tab", "owned" === e ? "mine" : e), n)
                })
              }),
              (ed[15] = eg),
              (ed[16] = t))
            : (t = ed[16]),
          (l = t),
          ed[17] !== eN?.name ? ((a = eN?.name?.trim() || null), (ed[17] = eN?.name), (ed[18] = a)) : (a = ed[18]),
          (N = a),
          (m = n.trim().slice(0, 200)),
          (ed[4] = eN?.name),
          (ed[5] = em),
          (ed[6] = eg),
          (ed[7] = n),
          (ed[8] = o),
          (ed[9] = l),
          (ed[10] = m),
          (ed[11] = f),
          (ed[12] = N))
      } else ((n = ed[7]), (o = ed[8]), (l = ed[9]), (m = ed[10]), (f = ed[11]), (N = ed[12]))
      let ey = m,
        eO = (0, S.o)(ey, 300)
      ed[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = (0, a.jsx)(T.A, {
            id: "workspaceAgents.index.pageTitle",
            defaultMessage: "Agents",
            description: "Title of the Agents index page",
          })),
          (ed[19] = R))
        : (R = ed[19])
      let eG = R,
        ex = !ef,
        eP = !1 !== eI
      ed[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = (0, a.jsx)(T.A, {
            id: "workspaceAgents.buildPermissionRequired",
            defaultMessage: "You don’t have permission to build agents",
            description:
              "Tooltip on disabled agent creation or publishing actions when the current workspace does not grant agent-building permission",
          })),
          (ed[20] = O))
        : (O = ed[20])
      let eb = !0 !== eI
      ;(ed[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = (0, a.jsxs)("span", {
            className: "inline-flex items-center",
            children: [
              (0, a.jsx)(T.A, {
                id: "workspaceAgents.index.create",
                defaultMessage: "Create",
                description: "Button that opens the agent creation menu",
              }),
              (0, a.jsx)(I.Aq_, {}),
            ],
          })),
          (ed[21] = w))
        : (w = ed[21]),
        ed[22] !== eb
          ? ((Y = (0, a.jsx)(g.$, { color: "primary", size: "dialog", disabled: eb, children: w })),
            (ed[22] = eb),
            (ed[23] = Y))
          : (Y = ed[23]),
        ed[24] !== eP || ed[25] !== Y
          ? ((H = (0, a.jsx)(s.m, { disabled: eP, content: O, children: Y })),
            (ed[24] = eP),
            (ed[25] = Y),
            (ed[26] = H))
          : (H = ed[26]),
        ed[27] !== eC ? ((v = () => void eC(V.fe)), (ed[27] = eC), (ed[28] = v)) : (v = ed[28]),
        ed[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, a.jsx)(T.A, {
              id: "workspaceAgents.discovery.create",
              defaultMessage: "Create agent",
              description: "Button that opens custom agent creation from the directory introduction",
            })),
            (ed[29] = j))
          : (j = ed[29]),
        ed[30] !== v
          ? ((K = (0, a.jsx)(h.ms.Item, { leftIconAsset: r.a, onSelect: v, children: j })), (ed[30] = v), (ed[31] = K))
          : (K = ed[31]),
        ed[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (0, a.jsx)(x, { "aria-hidden": !0 })), (ed[32] = F))
          : (F = ed[32]),
        ed[33] !== eA || ed[34] !== eC
          ? ((W = () => void eC((0, B.a)(eA))), (ed[33] = eA), (ed[34] = eC), (ed[35] = W))
          : (W = ed[35]),
        ed[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = (0, a.jsx)(T.A, {
              id: "workspaceAgents.discovery.browse",
              defaultMessage: "Browse templates",
              description: "Button that opens agent templates from the directory introduction",
            })),
            (ed[36] = z))
          : (z = ed[36]),
        ed[37] !== W
          ? ((q = (0, a.jsx)(h.ms.Item, { leftIcon: F, onSelect: W, children: z })), (ed[37] = W), (ed[38] = q))
          : (q = ed[38]),
        ed[39] !== H || ed[40] !== K || ed[41] !== q
          ? (($ = (0, a.jsxs)(h.Ab, {
              align: "end",
              contentWidth: "menuWide",
              sideOffset: 8,
              triggerButton: H,
              children: [K, q],
            })),
            (ed[39] = H),
            (ed[40] = K),
            (ed[41] = q),
            (ed[42] = $))
          : ($ = ed[42]),
        ed[43] !== eu
          ? ((X = eu.formatMessage({
              id: "workspaceAgents.index.search.label",
              defaultMessage: "Search agents",
              description: "Accessible label for the Agents search input",
            })),
            (ed[43] = eu),
            (ed[44] = X))
          : (X = ed[44]),
        ed[45] !== eu
          ? ((ee = eu.formatMessage({
              id: "workspaceAgents.index.search.placeholder",
              defaultMessage: "Search agents",
              description: "Placeholder for the Agents search input",
            })),
            (ed[45] = eu),
            (ed[46] = ee))
          : (ee = ed[46]),
        ed[47] !== n || ed[48] !== o || ed[49] !== X || ed[50] !== ee
          ? ((et = {
              variant: "directory",
              id: "workspace-agents-search",
              label: X,
              onSearchQueryChange: o,
              placeholder: ee,
              searchQuery: n,
            }),
            (ed[47] = n),
            (ed[48] = o),
            (ed[49] = X),
            (ed[50] = ee),
            (ed[51] = et))
          : (et = ed[51]),
        ed[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((en = (0, a.jsx)(T.A, {
              id: "workspaceAgents.index.subtitle",
              defaultMessage: "Keep work moving 24/7 with agents",
              description: "Subtitle on the Agents index page",
            })),
            (ed[52] = en))
          : (en = ed[52]))
      let eD = (ey.length, null)
      ed[53] !== eN?.id ||
      ed[54] !== ef ||
      ed[55] !== eu ||
      ed[56] !== ey.length ||
      ed[57] !== l ||
      ed[58] !== f ||
      ed[59] !== N ||
      ed[60] !== eR
        ? ((ea =
            0 === ey.length
              ? (0, a.jsx)(y.uC, {
                  inset: !ef,
                  variant: "directory",
                  children: (0, a.jsx)(G.t, {
                    scrollable: !0,
                    ariaLabel: eu.formatMessage({
                      id: "workspaceAgents.index.views.ariaLabel",
                      defaultMessage: "Agent views",
                      description: "Accessible label for the Agents page tabs",
                    }),
                    onSelect: l,
                    tabs: [
                      {
                        key: "recent",
                        name: (0, a.jsx)(T.A, {
                          id: "workspaceAgents.index.view.recent",
                          defaultMessage: "Recently used",
                          description: "Tab for recently used agents",
                        }),
                      },
                      {
                        key: "owned",
                        name: (0, a.jsx)(T.A, {
                          id: "workspaceAgents.index.view.mine",
                          defaultMessage: "Built by me",
                          description: "Tab for agents built by the current user",
                        }),
                      },
                      {
                        key: "directory",
                        name: (0, a.jsxs)("span", {
                          className: "inline-flex items-center gap-1.5",
                          children: [
                            (0, a.jsx)(E.e, { alt: "", colorKey: eN?.id, name: N, size: "response", src: eR }),
                            null == N
                              ? (0, a.jsx)(T.A, {
                                  id: "workspaceAgents.index.view.teamDirectory",
                                  defaultMessage: "Team directory",
                                  description: "Fallback tab label for the workspace agent directory",
                                })
                              : (0, a.jsx)(T.A, {
                                  id: "workspaceAgents.index.view.workspaceDirectory",
                                  defaultMessage: "{workspaceName} directory",
                                  description: "Tab label for the current workspace agent directory",
                                  values: { workspaceName: N },
                                }),
                          ],
                        }),
                      },
                    ],
                    selectedKey: f,
                    variant: "directory",
                  }),
                })
              : null),
          (ed[53] = eN?.id),
          (ed[54] = ef),
          (ed[55] = eu),
          (ed[56] = ey.length),
          (ed[57] = l),
          (ed[58] = f),
          (ed[59] = N),
          (ed[60] = eR),
          (ed[61] = ea))
        : (ea = ed[61])
      let ew = ey.length > 0 ? "directory" : f
      ed[62] !== o ? ((ei = () => o("")), (ed[62] = o), (ed[63] = ei)) : (ei = ed[63])
      let eS = ey.length > 0 ? eO : ""
      return (
        ed[64] !== ew || ed[65] !== ei || ed[66] !== eS || ed[67] !== N
          ? ((es = (0, a.jsx)(J, { kind: ew, onClearSearch: ei, query: eS, workspaceName: N })),
            (ed[64] = ew),
            (ed[65] = ei),
            (ed[66] = eS),
            (ed[67] = N),
            (ed[68] = es))
          : (es = ed[68]),
        ed[69] !== ef ||
        ed[70] !== $ ||
        ed[71] !== et ||
        ed[72] !== eD ||
        ed[73] !== ea ||
        ed[74] !== es ||
        ed[75] !== ex
          ? ((er = (0, a.jsxs)(y.Ql, {
              animateContentLayout: ex,
              contentWidth: "directory",
              expandSearchWhenWrapped: ef,
              headerAction: $,
              headerPlacement: "inline",
              headerVariant: "default",
              search: et,
              subtitle: en,
              title: eG,
              children: [eD, ea, es],
            })),
            (ed[69] = ef),
            (ed[70] = $),
            (ed[71] = et),
            (ed[72] = eD),
            (ed[73] = ea),
            (ed[74] = es),
            (ed[75] = ex),
            (ed[76] = er))
          : (er = ed[76]),
        ed[77] !== ep ||
        ed[78] !== eu ||
        ed[79] !== eT.signal ||
        ed[80] !== eA ||
        ed[81] !== eC ||
        ed[82] !== em ||
        ed[83] !== e_ ||
        ed[84] !== eE
          ? ((eo =
              (em.has("templates") || em.has("template_setup")) && null != ep && null != eE
                ? (0, a.jsx)(
                    k.I,
                    {
                      accountId: ep,
                      userId: eE,
                      initialTemplateName: em.get("template_setup") ?? em.get("template"),
                      initialSetup: em.has("template_setup"),
                      onClose: () => void eC((0, B.w)(eA), { replace: !0, state: null }),
                      onUse: async (e, t) => {
                        let n = () =>
                          !eT.signal.aborted && e_.get(C.chatGptAuthenticatedAccountId$) === ep && e_.get(C.o8) === eE
                        if (!n()) return
                        let a = await (0, U._)(e_, e, t, eT.signal)
                        if (!n()) return
                        let i = "agent" in a ? a.agent.id : a.agentId
                        await eC(`${(0, V.wI)(i)}?assistant=1`, {
                          state: { workspaceAgentAssistant: (0, M.GQ)(e, t, eu) },
                        })
                      },
                    },
                    `${ep}:${eE}`,
                  )
                : null),
            (ed[77] = ep),
            (ed[78] = eu),
            (ed[79] = eT.signal),
            (ed[80] = eA),
            (ed[81] = eC),
            (ed[82] = em),
            (ed[83] = e_),
            (ed[84] = eE),
            (ed[85] = eo))
          : (eo = ed[85]),
        ed[86] !== ep || ed[87] !== eA || ed[88] !== eC || ed[89] !== em || ed[90] !== eh || ed[91] !== eE
          ? ((el =
              null != eh && null != ep && null != eE
                ? (0, a.jsx)(
                    Z,
                    {
                      agentId: eh,
                      onClose: () => {
                        ;(em.delete("agent"),
                          em.delete("setup"),
                          eC({ pathname: eA.pathname, search: em.toString() }, { replace: !0, state: null }))
                      },
                    },
                    `${ep}:${eE}:${eh}`,
                  )
                : null),
            (ed[86] = ep),
            (ed[87] = eA),
            (ed[88] = eC),
            (ed[89] = em),
            (ed[90] = eh),
            (ed[91] = eE),
            (ed[92] = el))
          : (el = ed[92]),
        ed[93] !== er || ed[94] !== eo || ed[95] !== el
          ? ((ec = (0, a.jsxs)("div", {
              className: "flex h-full min-h-0 flex-col bg-surface text-default",
              children: [er, eo, el],
            })),
            (ed[93] = er),
            (ed[94] = eo),
            (ed[95] = el),
            (ed[96] = ec))
          : (ec = ed[96]),
        ec
      )
    }
    function Q() {
      return new AbortController()
    }
    function J(e) {
      let t,
        n,
        s,
        r,
        o,
        d,
        _ = (0, i.c)(34),
        { kind: u, onClearSearch: C, query: A, workspaceName: p } = e,
        E = "recent" === u ? "used" : "created"
      _[0] !== u || _[1] !== E || _[2] !== A
        ? ((t = "directory" === u ? { query: A } : E), (_[0] = u), (_[1] = E), (_[2] = A), (_[3] = t))
        : (t = _[3])
      let {
        data: m,
        isPending: h,
        isError: f,
        refetch: R,
        fetchNextPage: y,
        hasNextPage: O,
        isFetchingNextPage: G,
      } = (0, c._U)(q, t)
      if (h) {
        let e,
          t = "directory" === u
        return (_[4] !== t ? ((e = (0, a.jsx)(F.M, { directory: t })), (_[4] = t), (_[5] = e)) : (e = _[5]), e)
      }
      if (f) {
        let e,
          t,
          n = A.length > 0
        return (
          _[6] !== R ? ((e = () => void R()), (_[6] = R), (_[7] = e)) : (e = _[7]),
          _[8] !== n || _[9] !== e
            ? ((t = (0, a.jsx)(er, { isSearch: n, onRetry: e })), (_[8] = n), (_[9] = e), (_[10] = t))
            : (t = _[10]),
          t
        )
      }
      if (
        _[11] !== m?.pages ||
        _[12] !== m?.pages.flatMap ||
        _[13] !== u ||
        _[14] !== C ||
        _[15] !== A ||
        _[16] !== p
      ) {
        s = Symbol.for("react.early_return_sentinel")
        e: {
          let e = l()(m?.pages.flatMap(X) ?? [], "id")
          if (0 === e.length) {
            let e
            if ("directory" !== u) {
              let e
              ;(_[19] !== u ? ((e = (0, a.jsx)(ei, { kind: u })), (_[19] = u), (_[20] = e)) : (e = _[20]), (s = e))
              break e
            }
            ;(_[21] !== C || _[22] !== A
              ? ((e =
                  A.length > 0
                    ? (0, a.jsx)(N.A, {
                        layout: "page",
                        illustration: (0, a.jsx)(I.FR7, {}),
                        illustrationSize: "icon",
                        title: (0, a.jsx)(T.A, {
                          id: "workspaceAgents.index.search.empty.title",
                          defaultMessage: "No agents found for “{query}”",
                          description: "Empty state when no Workspace Agents match a directory search",
                          values: { query: A },
                        }),
                        actions: (0, a.jsx)(g.$, {
                          color: "ghost",
                          size: "dialog",
                          onClick: C,
                          children: (0, a.jsx)(T.A, {
                            id: "workspaceAgents.index.search.clear",
                            defaultMessage: "Clear search",
                            description: "Clears the Agents search and returns to the previously selected agent list",
                          }),
                        }),
                      })
                    : (0, a.jsx)(N.A, {
                        layout: "page",
                        title: (0, a.jsx)(T.A, {
                          id: "workspaceAgents.index.directory.empty.title",
                          defaultMessage: "No agents in team directory",
                          description: "Empty-state title for an empty workspace agent directory",
                        }),
                        description: (0, a.jsx)(T.A, {
                          id: "workspaceAgents.index.directory.empty.description",
                          defaultMessage:
                            "List agents in the team directory so anyone from your workspace can use them",
                          description: "Description for an empty workspace agent directory",
                        }),
                      })),
                (_[21] = C),
                (_[22] = A),
                (_[23] = e))
              : (e = _[23]),
              (s = e))
            break e
          }
          n = e.map((t, n) =>
            "directory" === u
              ? (0, a.jsx)(K, { agent: t }, t.id)
              : (0, a.jsx)(ee, { agent: t, kind: u, showDivider: n < e.length - 1, workspaceName: p }, t.id),
          )
        }
        ;((_[11] = m?.pages),
          (_[12] = m?.pages.flatMap),
          (_[13] = u),
          (_[14] = C),
          (_[15] = A),
          (_[16] = p),
          (_[17] = n),
          (_[18] = s))
      } else ((n = _[17]), (s = _[18]))
      if (s !== Symbol.for("react.early_return_sentinel")) return s
      let x = n
      ;(_[24] !== y ? ((r = () => void y()), (_[24] = y), (_[25] = r)) : (r = _[25]),
        _[26] !== O || _[27] !== G || _[28] !== r
          ? ((o = (0, a.jsx)(eo, { hasNextPage: O, isFetchingNextPage: G, onLoadMore: r })),
            (_[26] = O),
            (_[27] = G),
            (_[28] = r),
            (_[29] = o))
          : (o = _[29]))
      let P = o
      return (
        _[30] !== u || _[31] !== P || _[32] !== x
          ? ((d =
              "directory" === u
                ? (0, a.jsxs)(w.d, {
                    className: "flex flex-col gap-4",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "grid grid-cols-1 gap-4 @min-[581px]/skills-grid:grid-cols-2 @2xl/skills-grid:grid-cols-3",
                        children: x,
                      }),
                      P,
                    ],
                  })
                : (0, a.jsxs)("div", { className: "flex flex-col select-none", children: [x, P] })),
            (_[30] = u),
            (_[31] = P),
            (_[32] = x),
            (_[33] = d))
          : (d = _[33]),
        d
      )
    }
    function X(e) {
      return e.items
    }
    function ee(e) {
      let t,
        n,
        s,
        r,
        o,
        l,
        c,
        d,
        C = (0, i.c)(43),
        { agent: A, kind: p, showDivider: E, workspaceName: g } = e,
        h = void 0 === g ? null : g,
        f = (0, _.A)(),
        I = (0, u.Zp)(),
        N = null == A.latest_published_version_id
      C[0] !== A.name || C[1] !== f
        ? ((t =
            A.name.trim() ||
            f.formatMessage({
              id: "workspaceAgents.index.unnamed",
              defaultMessage: "Unnamed agent",
              description: "Fallback name for a Workspace Agent without a name",
            })),
          (C[0] = A.name),
          (C[1] = f),
          (C[2] = t))
        : (t = C[2])
      let R = t
      C[3] !== A.id ? ((n = (0, V.wI)(A.id)), (C[3] = A.id), (C[4] = n)) : (n = C[4])
      let y = n
      if ("owned" === p) {
        let e
        ;(C[5] !== A || C[6] !== h
          ? ((e = (0, a.jsx)(en, { agent: A, workspaceName: h })), (C[5] = A), (C[6] = h), (C[7] = e))
          : (e = C[7]),
          (s = e))
      } else if ("recent" === p) {
        let e
        ;(C[8] !== A ? ((e = (0, a.jsx)(ea, { agent: A })), (C[8] = A), (C[9] = e)) : (e = C[9]), (s = e))
      } else {
        let e, t, n, i, r, o
        ;(C[10] !== A.description || C[11] !== A.tagline
          ? ((e =
              A.tagline.trim() ||
              A.description.trim() ||
              (0, a.jsx)(T.A, {
                id: "workspaceAgents.index.noDescription",
                defaultMessage: "No description",
                description: "Fallback description for an agent directory row",
              })),
            (C[10] = A.description),
            (C[11] = A.tagline),
            (C[12] = e))
          : (e = C[12]),
          C[13] !== e ? ((t = (0, a.jsx)("span", { children: e })), (C[13] = e), (C[14] = t)) : (t = C[14]),
          C[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)(m.a, { className: "mx-1" })), (C[15] = n))
            : (n = C[15]),
          C[16] !== A.creator_name
            ? ((i =
                A.creator_name?.trim() ||
                (0, a.jsx)(T.A, {
                  id: "workspaceAgents.index.unknownAuthor",
                  defaultMessage: "Unknown author",
                  description: "Fallback creator name for an agent directory row",
                })),
              (C[16] = A.creator_name),
              (C[17] = i))
            : (i = C[17]),
          C[18] !== i ? ((r = (0, a.jsx)("span", { children: i })), (C[18] = i), (C[19] = r)) : (r = C[19]),
          C[20] !== t || C[21] !== r
            ? ((o = (0, a.jsxs)(a.Fragment, { children: [t, n, r] })), (C[20] = t), (C[21] = r), (C[22] = o))
            : (o = C[22]),
          (s = o))
      }
      ;(C[23] !== A.icon
        ? ((r = (0, a.jsx)(j.WorkspaceAgentGraphic, { icon: A.icon, size: 40 })), (C[23] = A.icon), (C[24] = r))
        : (r = C[24]),
        C[25] !== A.id || C[26] !== y || C[27] !== N || C[28] !== p || C[29] !== I
          ? ((o = () => {
              "owned" === p && N ? I(y) : I((0, V.OH)(A.id))
            }),
            (C[25] = A.id),
            (C[26] = y),
            (C[27] = N),
            (C[28] = p),
            (C[29] = I),
            (C[30] = o))
          : (o = C[30]))
      let G = "owned" === p
      return (
        C[31] !== A || C[32] !== G
          ? ((l = (0, a.jsx)(et, { agent: A, canEdit: G })), (C[31] = A), (C[32] = G), (C[33] = l))
          : (l = C[33]),
        C[34] !== s
          ? ((c = (0, a.jsx)("span", { className: "block truncate", children: s })), (C[34] = s), (C[35] = c))
          : (c = C[35]),
        C[36] !== R || C[37] !== E || C[38] !== r || C[39] !== o || C[40] !== l || C[41] !== c
          ? ((d = (0, a.jsx)(O.fy, {
              ariaLabel: R,
              showDivider: E,
              compactSecondLine: !0,
              hasInteractiveContent: !0,
              icon: r,
              isSelected: !1,
              onSelect: o,
              rightText: l,
              rightTextPosition: "center",
              secondLine: c,
              title: R,
            })),
            (C[36] = R),
            (C[37] = E),
            (C[38] = r),
            (C[39] = o),
            (C[40] = l),
            (C[41] = c),
            (C[42] = d))
          : (d = C[42]),
        d
      )
    }
    function et(e) {
      let t,
        n,
        s,
        r = (0, i.c)(11),
        { agent: o, canEdit: l } = e,
        c = (0, u.Zp)(),
        d = null != o.latest_published_version_id
      return (
        r[0] !== o.id || r[1] !== l || r[2] !== c
          ? ((t = l
              ? (0, a.jsx)(g.$, {
                  color: "ghost",
                  size: "toolbar",
                  onClick: (e) => {
                    ;(e.stopPropagation(), c((0, V.wI)(o.id)))
                  },
                  children: (0, a.jsx)(T.A, {
                    id: "workspaceAgents.index.edit",
                    defaultMessage: "Edit",
                    description: "Action that opens an agent in the native draft editor",
                  }),
                })
              : null),
            (r[0] = o.id),
            (r[1] = l),
            (r[2] = c),
            (r[3] = t))
          : (t = r[3]),
        r[4] !== o || r[5] !== l || r[6] !== d
          ? ((n = d || l ? (0, a.jsx)(Y.k, { agent: o, isPublished: d }) : null),
            (r[4] = o),
            (r[5] = l),
            (r[6] = d),
            (r[7] = n))
          : (n = r[7]),
        r[8] !== t || r[9] !== n
          ? ((s = (0, a.jsxs)("span", { className: "pointer-events-auto flex items-center gap-1", children: [t, n] })),
            (r[8] = t),
            (r[9] = n),
            (r[10] = s))
          : (s = r[10]),
        s
      )
    }
    function en(e) {
      var t, n
      let s,
        r,
        o,
        l = (0, i.c)(10),
        { agent: c, workspaceName: d } = e
      if (null == c.latest_published_version_id) {
        let e
        return (
          l[0] !== c.updated_at
            ? ((e = (0, a.jsx)(T.A, {
                id: "workspaceAgents.index.draftEdited",
                defaultMessage: "Draft · Edited {time}",
                description: "Status and last edit time for an unpublished agent",
                values: { time: (0, a.jsx)(f.A, { dateString: c.updated_at }) },
              })),
              (l[0] = c.updated_at),
              (l[1] = e))
            : (e = l[1]),
          e
        )
      }
      return (
        l[2] !== c || l[3] !== d
          ? ((t = c),
            (n = d),
            (s = t.store_visible
              ? null == n
                ? (0, a.jsx)(T.A, {
                    id: "workspaceAgents.index.visibility.directoryFallback",
                    defaultMessage: "Published to your workspace’s directory",
                    description: "Visibility label for an agent published to a workspace directory",
                  })
                : (0, a.jsx)(T.A, {
                    id: "workspaceAgents.index.visibility.directory",
                    defaultMessage: "Published to {workspaceName}’s directory",
                    description: "Visibility label for an agent published to the named workspace directory",
                    values: { workspaceName: n },
                  })
              : t.is_public
                ? (0, a.jsx)(T.A, {
                    id: "workspaceAgents.index.visibility.shared",
                    defaultMessage: "Shared with your workspace",
                    description: "Visibility label for an agent shared by link in the workspace",
                  })
                : (0, a.jsx)(T.A, {
                    id: "workspaceAgents.index.visibility.private",
                    defaultMessage: "Private to you",
                    description: "Visibility label for an agent visible only to its owner",
                  })),
            (l[2] = c),
            (l[3] = d),
            (l[4] = s))
          : (s = l[4]),
        l[5] !== c.updated_at
          ? ((r = (0, a.jsx)(f.A, { dateString: c.updated_at })), (l[5] = c.updated_at), (l[6] = r))
          : (r = l[6]),
        l[7] !== s || l[8] !== r
          ? ((o = (0, a.jsx)(T.A, {
              id: "workspaceAgents.index.publishedUpdated",
              defaultMessage: "{visibility} · Updated {time}",
              description: "Visibility and last update time for a published agent",
              values: { visibility: s, time: r },
            })),
            (l[7] = s),
            (l[8] = r),
            (l[9] = o))
          : (o = l[9]),
        o
      )
    }
    function ea(e) {
      let t,
        n,
        s = (0, i.c)(7),
        { agent: r } = e,
        o = r.recent_runs?.items?.[0]
      if (null != r.latest_published_version_id && ("blocked" === r.attention_status || o?.status === "blocked")) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsxs)("span", {
                className: "inline-flex items-center gap-2 whitespace-nowrap",
                children: [
                  (0, a.jsx)("span", { "aria-hidden": !0, className: "size-2 shrink-0 rounded-full bg-blue" }),
                  (0, a.jsx)(T.A, {
                    id: "workspaceAgents.index.needsAttention",
                    defaultMessage: "Needs your attention",
                    description: "Status for a recently used agent with a blocked run",
                  }),
                ],
              })),
              (s[0] = e))
            : (e = s[0]),
          e
        )
      }
      let l = r.last_used_at ?? o?.updated_at
      if (null != l) {
        let e
        return (
          s[1] !== l
            ? ((e = (0, a.jsx)(T.A, {
                id: "workspaceAgents.index.lastUsed",
                defaultMessage: "Used {time}",
                description: "Last used time for an agent",
                values: { time: (0, a.jsx)(f.A, { dateString: l }) },
              })),
              (s[1] = l),
              (s[2] = e))
            : (e = s[2]),
          e
        )
      }
      s[3] !== r.creator_name ? ((t = r.creator_name?.trim()), (s[3] = r.creator_name), (s[4] = t)) : (t = s[4])
      let c = t
      return (
        s[5] !== c
          ? ((n = c
              ? (0, a.jsx)(T.A, {
                  id: "workspaceAgents.index.byCreator",
                  defaultMessage: "By {creatorName}",
                  description: "Creator byline for an agent",
                  values: { creatorName: c },
                })
              : (0, a.jsx)(T.A, {
                  id: "workspaceAgents.index.noRecentActivity",
                  defaultMessage: "Recently used",
                  description: "Fallback status for a recently used agent",
                })),
            (s[5] = c),
            (s[6] = n))
          : (n = s[6]),
        n
      )
    }
    function ei(e) {
      let t,
        n,
        s,
        r,
        o,
        l,
        d,
        C,
        A,
        p = (0, i.c)(30),
        { kind: E } = e,
        m = (0, _.A)(),
        h = (0, u.Zp)(),
        f = (0, u.zy)(),
        I = (0, c.Ul)(L.iX),
        [, R] = (0, u.ok)()
      if ("recent" === E) {
        let e, a
        ;(p[0] !== m
          ? ((e = m.formatMessage({
              id: "workspaceAgents.index.recent.empty.title",
              defaultMessage: "No recently used agents",
              description: "Empty state for the recently used Agents view",
            })),
            (p[0] = m),
            (p[1] = e))
          : (e = p[1]),
          (t = e),
          p[2] !== m
            ? ((a = m.formatMessage({
                id: "workspaceAgents.index.recent.empty.description",
                defaultMessage: "Create an agent or browse agents built by your team",
                description: "Description shown when there are no recently used agents",
              })),
              (p[2] = m),
              (p[3] = a))
            : (a = p[3]),
          (n = a))
      } else {
        let e, a
        ;(p[4] !== m
          ? ((e = m.formatMessage({
              id: "workspaceAgents.index.mine.empty.title",
              defaultMessage: "You haven’t built any agents yet",
              description: "Empty state for the current user's Agents view",
            })),
            (p[4] = m),
            (p[5] = e))
          : (e = p[5]),
          (t = e),
          p[6] !== m
            ? ((a = m.formatMessage({
                id: "workspaceAgents.index.mine.empty.description",
                defaultMessage: "Create agents to run weekly reports, answer Slack questions, and update systems",
                description: "Description shown when the current user has not built any agents",
              })),
              (p[6] = m),
              (p[7] = a))
            : (a = p[7]),
          (n = a))
      }
      let y = !0 !== I
      return (
        p[8] !== h ? ((s = () => void h(V.fe)), (p[8] = h), (p[9] = s)) : (s = p[9]),
        p[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(T.A, {
              id: "workspaceAgents.discovery.create",
              defaultMessage: "Create agent",
              description: "Button that opens custom agent creation from the directory introduction",
            })),
            (p[10] = r))
          : (r = p[10]),
        p[11] !== y || p[12] !== s
          ? ((o = (0, a.jsx)(g.$, { color: "primary", size: "dialog", disabled: y, onClick: s, children: r })),
            (p[11] = y),
            (p[12] = s),
            (p[13] = o))
          : (o = p[13]),
        p[14] !== E || p[15] !== R
          ? ((l =
              "recent" === E
                ? (0, a.jsx)(g.$, {
                    color: "outlineSurface",
                    size: "dialog",
                    onClick: () => R(es),
                    children: (0, a.jsx)(T.A, {
                      id: "workspaceAgents.index.browseDirectory",
                      defaultMessage: "Browse team directory",
                      description: "Button that switches the empty recently used Agents view to the team directory",
                    }),
                  })
                : null),
            (p[14] = E),
            (p[15] = R),
            (p[16] = l))
          : (l = p[16]),
        p[17] !== I || p[18] !== E || p[19] !== f || p[20] !== h
          ? ((d =
              "owned" === E && !0 === I
                ? (0, a.jsx)(g.$, {
                    color: "outlineSurface",
                    size: "dialog",
                    onClick: () => void h((0, B.a)(f)),
                    children: (0, a.jsx)(T.A, {
                      id: "workspaceAgents.discovery.browse",
                      defaultMessage: "Browse templates",
                      description: "Button that opens agent templates from the directory introduction",
                    }),
                  })
                : null),
            (p[17] = I),
            (p[18] = E),
            (p[19] = f),
            (p[20] = h),
            (p[21] = d))
          : (d = p[21]),
        p[22] !== o || p[23] !== l || p[24] !== d
          ? ((C = (0, a.jsxs)(a.Fragment, { children: [o, l, d] })), (p[22] = o), (p[23] = l), (p[24] = d), (p[25] = C))
          : (C = p[25]),
        p[26] !== n || p[27] !== C || p[28] !== t
          ? ((A = (0, a.jsx)(N.A, { layout: "outlined", title: t, description: n, actions: C })),
            (p[26] = n),
            (p[27] = C),
            (p[28] = t),
            (p[29] = A))
          : (A = p[29]),
        A
      )
    }
    function es(e) {
      let t = new URLSearchParams(e)
      return (t.set("tab", "directory"), t)
    }
    function er(e) {
      let t,
        n,
        s,
        r,
        o = (0, i.c)(8),
        { isSearch: l, onRetry: c } = e,
        d = void 0 !== l && l
      return (
        o[0] !== d
          ? ((t = d
              ? (0, a.jsx)(T.A, {
                  id: "workspaceAgents.index.search.error.title",
                  defaultMessage: "Couldn’t search agents",
                  description: "Error shown when agents cannot be searched",
                })
              : (0, a.jsx)(T.A, {
                  id: "workspaceAgents.index.error.title",
                  defaultMessage: "Couldn’t load agents",
                  description: "Error shown when agents cannot be loaded",
                })),
            (o[0] = d),
            (o[1] = t))
          : (t = o[1]),
        o[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(T.A, {
              id: "workspaceAgents.index.error.retry",
              defaultMessage: "Retry",
              description: "Button that retries loading Workspace Agents",
            })),
            (o[2] = n))
          : (n = o[2]),
        o[3] !== c
          ? ((s = (0, a.jsx)(g.$, { color: "secondary", size: "dialog", onClick: c, children: n })),
            (o[3] = c),
            (o[4] = s))
          : (s = o[4]),
        o[5] !== t || o[6] !== s
          ? ((r = (0, a.jsx)(N.A, { layout: "page", title: t, actions: s })), (o[5] = t), (o[6] = s), (o[7] = r))
          : (r = o[7]),
        r
      )
    }
    function eo(e) {
      let t,
        n,
        s = (0, i.c)(6),
        { hasNextPage: r, isFetchingNextPage: o, onLoadMore: l } = e
      return r
        ? (s[0] !== o
            ? ((t = o
                ? (0, a.jsx)(T.A, {
                    id: "workspaceAgents.index.loadingMore",
                    defaultMessage: "Loading more agents",
                    description: "Button label while more Workspace Agents load",
                  })
                : (0, a.jsx)(T.A, {
                    id: "workspaceAgents.index.loadMore",
                    defaultMessage: "Load more",
                    description: "Button that loads more Workspace Agents",
                  })),
              (s[0] = o),
              (s[1] = t))
            : (t = s[1]),
          s[2] !== o || s[3] !== l || s[4] !== t
            ? ((n = (0, a.jsx)(g.$, {
                className: "self-center",
                color: "ghostActive",
                disabled: o,
                size: "dialog",
                onClick: l,
                children: t,
              })),
              (s[2] = o),
              (s[3] = l),
              (s[4] = t),
              (s[5] = n))
            : (n = s[5]),
          n)
        : null
    }
  },
  hHUD(e, t, n) {
    let a = (0, n("iJY0").a)({
      name: "agent-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 0.606693, y: 1.322266, width: 18.78661, height: 17.28418 },
        visualBounds: { x: 0.606693, y: 1.322266, width: 18.78661, height: 17.28418 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.606693, y: 1.322266, width: 18.78661, height: 17.28418 },
        center: { x: 9.999998, y: 9.964356 },
        insets: { top: 1.322266, right: 0.606697, bottom: 1.393554, left: 0.606693 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.999998, y: 9.964356 },
          foreground: { x: 9.999998, y: 9.964356 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M10.9487 13.0196V11.9814C10.9487 11.5579 11.2921 11.2146 11.7155 11.2146C12.1389 11.2146 12.4823 11.5579 12.4823 11.9814V13.0196C12.4822 13.4429 12.1389 13.7863 11.7155 13.7863C11.2921 13.7863 10.9488 13.4429 10.9487 13.0196Z" fill="currentColor"/> <path d="M7.42847 13.0196V11.9814C7.42847 11.5579 7.77184 11.2146 8.19526 11.2146C8.61868 11.2146 8.96205 11.5579 8.96205 11.9814V13.0196C8.96198 13.4429 8.61864 13.7863 8.19526 13.7863C7.77188 13.7863 7.42853 13.4429 7.42847 13.0196Z" fill="currentColor"/> <path d="M16.1606 11.866C16.1443 11.1541 16.0957 10.4419 15.9663 9.67847C15.8417 8.9443 15.2333 8.36699 14.4468 8.24194C12.89 7.99446 11.5833 7.88354 9.99951 7.88354C8.41576 7.88356 7.10906 7.99444 5.55224 8.24194C4.7659 8.36708 4.15834 8.94442 4.03369 9.67847C3.86111 10.6965 3.83161 11.6229 3.83154 12.5798L3.83838 13.2937C3.85475 14.0056 3.90426 14.7177 4.03369 15.4812C4.15834 16.2153 4.7659 16.7926 5.55224 16.9177C7.10907 17.1652 8.41576 17.2761 9.99951 17.2761C11.5833 17.2761 12.89 17.1652 14.4468 16.9177C15.2333 16.7927 15.8417 16.2154 15.9663 15.4812C16.1389 14.4632 16.1684 13.5368 16.1685 12.5798L16.1606 11.866ZM17.4907 13.324C17.4734 14.0766 17.4211 14.8576 17.2778 15.7029C17.0495 17.0499 15.954 18.0248 14.6558 18.2312C13.0346 18.4889 11.6579 18.6062 9.99951 18.6062C8.34133 18.6062 6.96515 18.4889 5.34424 18.2312C4.04597 18.0248 2.95053 17.0499 2.72217 15.7029C2.57887 14.8576 2.52656 14.0766 2.50928 13.324L2.50146 12.5798C2.50154 11.5963 2.53113 10.5837 2.72217 9.45679C2.95053 8.10974 4.04597 7.13487 5.34424 6.92847C6.96515 6.67079 8.34133 6.55348 9.99951 6.55347C11.6579 6.55347 13.0346 6.67074 14.6558 6.92847C15.954 7.13487 17.0495 8.10974 17.2778 9.45679C17.4689 10.5837 17.4985 11.5964 17.4985 12.5798L17.4907 13.324Z" fill="currentColor"/> <path d="M9.33496 6.79886V5.37698C9.33496 5.00971 9.63273 4.71194 10 4.71194C10.3673 4.71194 10.665 5.00971 10.665 5.37698V6.79886C10.6649 7.16601 10.3672 7.4639 10 7.4639C9.63281 7.4639 9.3351 7.16601 9.33496 6.79886Z" fill="currentColor"/> <path d="M10.9189 3.57129C10.9189 3.06373 10.5076 2.65234 10 2.65234C9.49249 2.65243 9.08114 3.06379 9.08105 3.57129C9.08105 4.07886 9.49244 4.49015 10 4.49023C10.5076 4.49023 10.9189 4.07892 10.9189 3.57129ZM12.249 3.57129C12.249 4.81346 11.2422 5.82031 10 5.82031C8.7579 5.82023 7.75098 4.8134 7.75098 3.57129C7.75106 2.32925 8.75796 1.32235 10 1.32227C11.2421 1.32227 12.2489 2.32919 12.249 3.57129Z" fill="currentColor"/> <path d="M18.5794 10.3139C18.9449 10.2784 19.2706 10.5461 19.3063 10.9115C19.4223 12.1053 19.4224 12.784 19.306 13.9397C19.269 14.3048 18.943 14.5708 18.5778 14.5342C18.2124 14.4973 17.9455 14.1714 17.9823 13.806C18.0897 12.7407 18.0896 12.1504 17.9818 11.0407C17.9463 10.6753 18.2141 10.3496 18.5794 10.3139Z" fill="currentColor"/> <path d="M1.42057 10.3139C1.05511 10.2784 0.729369 10.5461 0.693721 10.9115C0.577722 12.1053 0.577548 12.784 0.694015 13.9397C0.730982 14.3048 1.05703 14.5708 1.42222 14.5342C1.78762 14.4973 2.0545 14.1714 2.0177 13.806C1.91034 12.7407 1.91039 12.1504 2.01821 11.0407C2.05372 10.6753 1.78594 10.3496 1.42057 10.3139Z" fill="currentColor"/>',
    })
    n.d(t, {}, { a: a })
  },
}
//# sourceMappingURL=496004.b9edf1ab30.js.map
