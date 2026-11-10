export const __rspack_esm_ids = [473177]
export const __webpack_modules__ = {
  mdQE(e, t) {
    t.A = {
      InlineCodePane: "InlineCodePane-EYx4bd",
      inlineCodePane: "InlineCodePane-EYx4bd",
      ViewerContent: "ViewerContent-Cg8AgN",
      viewerContent: "ViewerContent-Cg8AgN",
      Comment: "Comment-dh5VVn",
      comment: "Comment-dh5VVn",
      Viewer: "Viewer-ALA646",
      viewer: "Viewer-ALA646",
      Scrollport: "Scrollport-kY3Nlm",
      scrollport: "Scrollport-kY3Nlm",
    }
  },
  CuLE(e, t, r) {
    var i =
      Number.isNaN ||
      function (e) {
        return "number" == typeof e && e != e
      }
    function l(e, t) {
      if (e.length !== t.length) return !1
      for (var r, l, n = 0; n < e.length; n++) if (!((r = e[n]) === (l = t[n]) || (i(r) && i(l))) && 1) return !1
      return !0
    }
    r.d(
      t,
      {},
      {
        A: function (e, t) {
          void 0 === t && (t = l)
          var r = null
          function i() {
            for (var i = [], l = 0; l < arguments.length; l++) i[l] = arguments[l]
            if (r && r.lastThis === this && t(i, r.lastArgs)) return r.lastResult
            var n = e.apply(this, i)
            return ((r = { lastResult: n, lastArgs: i, lastThis: this }), n)
          }
          return (
            (i.clear = function () {
              r = null
            }),
            i
          )
        },
      },
    )
  },
  aoV0(e, t, r) {
    r.d(t, { a: () => y, t: () => w })
    var i = r("ABep"),
      l = r("on57"),
      n = r("NKwT"),
      s = r("zd8w"),
      a = r("Cmnu"),
      o = r("pZwg"),
      d = r("BAKu"),
      c = r("We8q"),
      u = r("fZ4G"),
      p = r("EYJV"),
      h = r("DL3o")
    let f = (0, s.createContext)(null),
      m = () => {
        let e = (0, s.use)(f)
        if (!e) throw Error("Modal components or hooks must be wrapped in <Modal />")
        return e
      }
    var g = r("v7qY")
    let b = () => {
        let { setOpen: e } = m()
        return (0, s.useCallback)(() => e(!1), [e])
      },
      w = ({ onRequestClose: e } = {}) => {
        let t,
          r = (() => {
            let { setShake: e } = m()
            return (0, s.useCallback)(() => {
              ;((0, g.flushSync)(() => {
                e(!1)
              }),
                (0, u.yQ)(() => e(!0)))
            }, [e])
          })(),
          i = b()
        return (
          (t = m()),
          (0, s.useEffect)(() => {
            if (e)
              return (
                t.checkAllowClose.current.add(e),
                () => {
                  t.checkAllowClose.current.delete(e)
                }
              )
          }, [e, t.checkAllowClose]),
          { close: i, shake: r }
        )
      },
      y = ({ open: e, defaultOpen: t = !1, onOpenChange: r, children: l }) => {
        let [a, o] = (0, s.useState)(t),
          [d, u] = (0, s.useState)(!1),
          p = (0, s.useRef)(new Set()),
          h = e ?? a,
          m = (0, c.Y)(r),
          g = (0, s.useCallback)(
            (t) => {
              h !== t && (t || u(!1), m.current?.(t), "boolean" != typeof e && o(t))
            },
            [h, e, m],
          ),
          b = (0, s.useMemo)(() => ({ open: h, setOpen: g, shake: d, setShake: u, checkAllowClose: p }), [h, g, d, u])
        return (0, i.jsx)(f, {
          value: b,
          children: (0, i.jsx)(n.Root, { open: h, onOpenChange: g, modal: !1, children: l }),
        })
      }
    ;((y.Trigger = ({ children: e, ref: t }) => (0, i.jsx)(n.Trigger, { asChild: !0, ref: t, children: e })),
      (y.Content = ({
        children: e,
        className: t,
        portalClassName: r,
        maxWidth: f,
        scroll: g = "inside",
        backdrop: b = o.N.backdropStyle,
        onCloseAutoFocus: w,
        onAfterClose: y,
        animateOnMount: k = !1,
        ...x
      }) => {
        let v = !(0, a.Ub)("(min-width: 48rem)"),
          { open: _, setOpen: j, shake: S, checkAllowClose: A } = m(),
          C = (0, c.Y)({ open: _, onAfterClose: y }),
          [I, M] = (0, s.useState)(null),
          N = (0, p.jS)()
        ;((0, d.r)(_, () => {
          for (let e of A.current) if ("deny" === e()) return
          j(!1)
        }),
          (0, s.useEffect)(() => {
            !I || I?.contains(document.activeElement) || I.focus({ preventScroll: !0 })
          }, [I]))
        let E = (0, s.useCallback)(
          (e) => {
            if (
              ((e) => {
                if (!(e instanceof Element)) return !1
                let t = e.hasAttribute("data-grammarly-shadow-root"),
                  r = "COM-1PASSWORD-BUTTON" === e.tagName,
                  i = null != e.closest("[data-sonner-toast], [data-sonner-toaster]"),
                  l = null != e.closest("[data-puik-ignore-outside-interaction]")
                return t || r || i || l
              })(e.target) ||
              "dismissableLayer.focusOutside" === e.type ||
              "dismissableLayer.blurOutside" === e.type
            )
              return void e.preventDefault()
            for (let t of A.current) if ("deny" === t()) return void e.preventDefault()
          },
          [A],
        )
        return (0, i.jsx)(n.Portal, {
          forceMount: !0,
          container: N,
          children: (0, i.jsx)(h.F, {
            preventInitialTransition: !k,
            enterDuration: 600,
            exitDuration: 300,
            className: (0, l.A)("ModalPortal-SfHSoH", r),
            children:
              _ &&
              (0, i.jsxs)(
                "div",
                {
                  className: "ModalPortalInner-UJ1jZR",
                  "data-backdrop": b,
                  children: [
                    (0, i.jsx)("div", { className: "ModalBackdrop-BHqQZp" }, "overlay"),
                    (0, i.jsx)("div", {
                      className: "ModalContainer-RzHv2l",
                      "data-modal-scroll": v ? "inside" : g,
                      children: (0, i.jsx)("div", {
                        className: "ModalContainerInner-Jq9PqX",
                        children: (0, i.jsx)(n.Content, {
                          forceMount: !0,
                          ...x,
                          ref: M,
                          className: (0, l.A)("Modal-y3c45j", t),
                          style: (0, u.mW)({ "modal-max-width": f }),
                          "data-animate": S ? "shake" : void 0,
                          onCloseAutoFocus: (e) => {
                            ;(w?.(e), C.current.open || C.current.onAfterClose?.())
                          },
                          onOpenAutoFocus: u.iB,
                          onEscapeKeyDown: u.iB,
                          onKeyDown: (e) => {
                            if (I && e.target === I && "Tab" === e.key && e.shiftKey) {
                              ;(e.preventDefault(), e.stopPropagation())
                              let t = (0, u.mr)(I),
                                r = t[t.length - 1]
                              r?.focus()
                            }
                          },
                          onPointerDownOutside: E,
                          onInteractOutside: E,
                          children: e,
                        }),
                      }),
                    }),
                  ],
                },
                "modal",
              ),
          }),
        })
      }),
      (y.Form = ({ children: e, className: t, ...r }) =>
        (0, i.jsx)("form", { className: (0, l.A)("Form-fJjvb5", t), ...r, children: e })),
      (y.Header = ({ children: e }) => (0, i.jsx)("div", { className: "Header-kJ21jW", children: e })),
      (y.Body = ({ children: e, className: t, ...r }) => {
        let n = (0, s.useRef)(null),
          { isScrollable: a, isAtStart: o } = ((e) => {
            let [t, r] = (0, s.useState)(!1),
              [i, l] = (0, s.useState)(!0),
              [n, a] = (0, s.useState)(!1)
            return (
              (0, s.useEffect)(() => {
                let t = e.current
                if (!t) return
                let i = () => {
                  let { scrollHeight: e, clientHeight: i, scrollTop: n } = t
                  ;(r(e > i), l(0 === n), a(n + i >= e))
                }
                ;(i(), t.addEventListener("scroll", i, { passive: !0 }))
                let n = new ResizeObserver(i)
                return (
                  n.observe(t),
                  () => {
                    ;(t.removeEventListener("scroll", i), n.disconnect())
                  }
                )
              }, [e]),
              { isScrollable: t, isAtStart: i, isAtEnd: n }
            )
          })(n)
        return (0, i.jsx)("div", {
          ref: n,
          className: (0, l.A)("Body-Rc9KSO", t),
          "data-scrollable": a,
          "data-scroll-at-top": o,
          ...r,
          children: e,
        })
      }),
      (y.Footer = ({ children: e, className: t, ...r }) =>
        (0, i.jsx)("div", { className: (0, l.A)("Footer-Pa3SZt", t), ...r, children: e })),
      (y.Title = ({ children: e, className: t, ...r }) =>
        (0, i.jsx)(n.Title, { className: (0, l.A)("Title-FU9Iik", t), ...r, children: e })),
      (y.Description = ({ visuallyHidden: e = !1, children: t, className: r }) =>
        (0, i.jsx)(n.Description, {
          className: (0, l.A)("Description-TM02JO", r),
          "data-visually-hidden": e ? "" : void 0,
          children: t,
        })),
      (y.Close = ({ children: e }) => {
        let t = b()
        return "function" == typeof e
          ? (0, i.jsx)(i.Fragment, { children: e({ close: t }) })
          : (0, i.jsx)(n.Close, { asChild: !0, children: e })
      }))
  },
  iFq6(e, t, r) {
    var i = r("zTeN"),
      l = r("OWtl"),
      n = r("nvO1")
    let s = (0, i.i1)(l.u, (e, { get: t }) => t(n.rN, e)),
      a = (0, i.i1)(l.u, (e, { get: t }) => {
        if (t(s, e)) {
          let { data: r, isError: i, isLoading: l } = t(n.IB, e)
          return { data: r?.filter((t) => t.workspace_id === e), isError: i, isLoading: l }
        }
        return null
      })
    r.d(t, {}, { l: a, w: s })
  },
  YIB6(e, t, r) {
    var i = r("D1a9"),
      l = r("g6BY"),
      n = r("mdQE")
    let s = i.cr.define([
      { tag: l._A.comment, class: n.A.Comment },
      { tag: l._A.meta, class: "text-codex-syntax-name" },
      { tag: [l._A.keyword, l._A.definitionKeyword, l._A.modifier, l._A.operator], class: "text-codex-syntax-keyword" },
      { tag: [l._A.heading, l._A.contentSeparator], class: "text-codex-syntax-attribute" },
      { tag: l._A.deleted, class: "text-codex-syntax-error" },
      { tag: [l._A.bool, l._A.null, l._A.atom, l._A.self, l._A.number], class: "text-codex-syntax-literal" },
      { tag: [l._A.string, l._A.regexp, l._A.special(l._A.string)], class: "text-codex-syntax-string" },
      {
        tag: [l._A.standard(l._A.variableName), l._A.standard(l._A.propertyName), l._A.className],
        class: "text-codex-syntax-literal",
      },
      {
        tag: [
          l._A.variableName,
          l._A.special(l._A.variableName),
          l._A.typeName,
          l._A.function(l._A.variableName),
          l._A.definition(l._A.variableName),
        ],
        class: "text-codex-syntax-variable",
      },
      { tag: l._A.attributeName, class: "text-codex-syntax-attribute" },
      {
        tag: [l._A.labelName, l._A.tagName, l._A.definition(l._A.tagName), l._A.angleBracket],
        class: "text-codex-syntax-name",
      },
      { tag: [l._A.link, l._A.url], class: "text-codex-syntax-name underline" },
      { tag: [l._A.invalid, l._A.escape], class: "text-codex-syntax-error underline" },
    ])
    r.d(t, {}, { h: s })
  },
  mgWT(e, t, r) {
    var i = r("D1a9"),
      l = r("CuLE")
    let n = () =>
        r
          .e(798603)
          .then(r.bind(r, "FPNN"))
          .then((e) => c(e.shell)),
      s = {
        bash: n,
        zsh: n,
        swift: () =>
          r
            .e(576272)
            .then(r.bind(r, "pPUJ"))
            .then((e) => c(e.swift)),
        css: () =>
          r
            .e(88385)
            .then(r.bind(r, "jMGu"))
            .then((e) => e.css()),
        html: () =>
          Promise.all([r.e(877652), r.e(490915), r.e(685166)])
            .then(r.bind(r, "jx1G"))
            .then((e) => e.html()),
        javascript: () =>
          Promise.all([r.e(877652), r.e(490915)])
            .then(r.bind(r, "W1q6"))
            .then((e) => e.javascript({ jsx: !0, typescript: !1 })),
        typescript: () =>
          Promise.all([r.e(877652), r.e(490915)])
            .then(r.bind(r, "W1q6"))
            .then((e) => e.javascript({ jsx: !0, typescript: !0 })),
        json: () =>
          r
            .e(681333)
            .then(r.bind(r, "zC4G"))
            .then((e) => e.json()),
        python: () =>
          Promise.all([r.e(65723), r.e(894805)])
            .then(r.bind(r, "csEL"))
            .then((e) => e.python()),
        sql: () =>
          Promise.all([r.e(65723), r.e(788683)])
            .then(r.bind(r, "H8sT"))
            .then((e) => e.sql()),
        go: () =>
          Promise.all([r.e(65723), r.e(863895)])
            .then(r.bind(r, "WMXD"))
            .then((e) => e.go()),
        yaml: () =>
          r
            .e(284994)
            .then(r.bind(r, "S8oS"))
            .then((e) => e.yaml()),
        java: () =>
          Promise.all([r.e(652809), r.e(18272)])
            .then(r.bind(r, "y2nb"))
            .then((e) => e.java()),
        rust: () =>
          Promise.all([r.e(644049), r.e(682360)])
            .then(r.bind(r, "aKEY"))
            .then((e) => e.rust()),
        cpp: () =>
          r
            .e(279069)
            .then(r.bind(r, "ti6D"))
            .then((e) => e.cpp()),
        php: () =>
          Promise.all([r.e(877652), r.e(490915), r.e(968296)])
            .then(r.bind(r, "PzRQ"))
            .then((e) => e.php()),
        xml: () =>
          r
            .e(883815)
            .then(r.bind(r, "R2qw"))
            .then((e) => e.xml()),
        vue: () =>
          Promise.all([r.e(877652), r.e(490915), r.e(470470)])
            .then(r.bind(r, "NvfO"))
            .then((e) => e.vue()),
        ruby: () =>
          r
            .e(348295)
            .then(r.bind(r, "NJ1J"))
            .then((e) => c(e.ruby)),
        haskell: () =>
          r
            .e(776169)
            .then(r.bind(r, "FfQP"))
            .then((e) => c(e.haskell)),
        kotlin: () =>
          r
            .e(777107)
            .then(r.bind(r, "jwCX"))
            .then((e) => c(e.kotlin)),
        csharp: () =>
          r
            .e(777107)
            .then(r.bind(r, "jwCX"))
            .then((e) => c(e.csharp)),
        vb: () =>
          r
            .e(156475)
            .then(r.bind(r, "Kyj0"))
            .then((e) => c(e.vb)),
        c: () =>
          r
            .e(777107)
            .then(r.bind(r, "jwCX"))
            .then((e) => c(e.c)),
        objectivec: () =>
          r
            .e(777107)
            .then(r.bind(r, "jwCX"))
            .then((e) => c(e.objectiveC)),
        r: () =>
          r
            .e(873055)
            .then(r.bind(r, "aYRy"))
            .then((e) => c(e.r)),
        lua: () =>
          r
            .e(585707)
            .then(r.bind(r, "uFDv"))
            .then((e) => c(e.lua)),
        dart: () =>
          r
            .e(777107)
            .then(r.bind(r, "jwCX"))
            .then((e) => c(e.dart)),
        scala: () =>
          r
            .e(777107)
            .then(r.bind(r, "jwCX"))
            .then((e) => c(e.scala)),
        perl: () =>
          r
            .e(427280)
            .then(r.bind(r, "qUgp"))
            .then((e) => c(e.perl)),
        commonlisp: () =>
          r
            .e(878328)
            .then(r.bind(r, "kLa7"))
            .then((e) => c(e.commonLisp)),
        clojure: () =>
          r
            .e(490485)
            .then(r.bind(r, "FXFX"))
            .then((e) => c(e.clojure)),
        ocaml: () =>
          r
            .e(62785)
            .then(r.bind(r, "j11Z"))
            .then((e) => c(e.oCaml)),
        powershell: () =>
          r
            .e(376912)
            .then(r.bind(r, "Cwth"))
            .then((e) => c(e.powerShell)),
        verilog: () =>
          r
            .e(949351)
            .then(r.bind(r, "Jpn8"))
            .then((e) => c(e.verilog)),
        dockerfile: () =>
          r
            .e(973595)
            .then(r.bind(r, "xdPb"))
            .then((e) => c(e.dockerFile)),
      },
      a = (0, l.A)(() =>
        Promise.all([r.e(171815), r.e(999152), r.e(883697)])
          .then(r.bind(r, "agJ3"))
          .catch(() => null),
      ),
      o = new Map(),
      d = new Map()
    function c(e) {
      return new i.Yy(i.Tg.define(e))
    }
    r.d(
      t,
      {},
      {
        AN: function (e) {
          if (o.has(e)) return Promise.resolve(o.get(e) ?? null)
          let t = d.get(e)
          if (null != t) return t
          if (!Object.hasOwn(s, e)) return Promise.resolve(null)
          let r = Promise.resolve(s[e]())
            .then((t) => (o.set(e, t), t))
            .catch(() => null)
            .finally(() => {
              d.delete(e)
            })
          return (d.set(e, r), r)
        },
        M_: function (e) {
          return o.get(e) ?? null
        },
        hl: function (e) {
          return Object.hasOwn(s, e)
        },
        r5: a,
      },
    )
  },
  CtJU(e, t, r) {
    var i = r("ABep"),
      l = r("QosV"),
      n = r("on57")
    r.d(
      t,
      {},
      {
        l: function (e) {
          let t,
            r,
            s,
            a,
            o,
            d = (0, l.c)(17),
            { align: c, children: u, className: p, hideLabelWhenNarrow: h, icon: f, label: m, spacing: g } = e,
            b = void 0 !== h && h,
            w = "relaxed" === (void 0 === g ? "default" : g) ? "py-3 last:pb-0" : "py-row-y",
            y = b ? "grid-cols-[auto_minmax(0,1fr)]" : "grid-cols-1",
            k =
              "start" === (void 0 === c ? "center" : c)
                ? "items-start"
                : b
                  ? "items-center"
                  : "items-start [@container_(min-width:24rem)]:items-center"
          return (
            d[0] !== p || d[1] !== w || d[2] !== y || d[3] !== k
              ? ((t = (0, n.A)(
                  "grid min-h-[var(--height-token-row)] gap-x-3 gap-y-0.5 text-[length:var(--detail-row-font-size,var(--text-base))] leading-5 [@container_(min-width:24rem)]:grid-cols-[var(--detail-property-label-width,120px)_minmax(0,1fr)]",
                  w,
                  y,
                  k,
                  p,
                )),
                (d[0] = p),
                (d[1] = w),
                (d[2] = y),
                (d[3] = k),
                (d[4] = t))
              : (t = d[4]),
            d[5] !== b || d[6] !== m
              ? ((r = b
                  ? (0, i.jsx)("span", { className: "sr-only [@container_(min-width:24rem)]:not-sr-only", children: m })
                  : m),
                (d[5] = b),
                (d[6] = m),
                (d[7] = r))
              : (r = d[7]),
            d[8] !== f || d[9] !== r
              ? ((s = (0, i.jsxs)("dt", {
                  className: "flex min-w-0 items-center gap-2 wrap-anywhere text-codex-description",
                  children: [f, r],
                })),
                (d[8] = f),
                (d[9] = r),
                (d[10] = s))
              : (s = d[10]),
            d[11] !== u
              ? ((a = (0, i.jsx)("dd", {
                  className: "m-0 flex min-w-0 items-center wrap-anywhere text-default",
                  children: u,
                })),
                (d[11] = u),
                (d[12] = a))
              : (a = d[12]),
            d[13] !== a || d[14] !== t || d[15] !== s
              ? ((o = (0, i.jsxs)("div", { className: t, children: [s, a] })),
                (d[13] = a),
                (d[14] = t),
                (d[15] = s),
                (d[16] = o))
              : (o = d[16]),
            o
          )
        },
      },
    )
  },
  hlym(e, t, r) {
    var i = r("hGgS")
    r.d(
      t,
      {},
      {
        k: function (e, t) {
          e.defaultPrevented ||
            !(0, i.eg)(e.nativeEvent, "CmdOrCtrl+S") ||
            (e.target instanceof Node &&
              e.currentTarget.contains(e.target) &&
              (e.preventDefault(), e.stopPropagation(), e.repeat || t()))
        },
      },
    )
  },
  EGS2(e, t, r) {
    var i = r("eFn4"),
      l = r("Ghh3"),
      n = r("Gdjn"),
      s = r("MX6A"),
      a = r("Q8aV"),
      o = r("svjy"),
      d = r("ripK"),
      c = r("j5ZC"),
      u = r("TlTE"),
      p = r("Wjli")
    r.d(
      t,
      {},
      {
        OD: async function (e, t) {
          if (t.id === u.x1) return (0, c.startSkillCreatorChat)(e)
          let r = e.get(p.Jp),
            l = "allowed" === e.get(i.lN).status && (0, u.Dc)(t, "tpp") ? "tpp" : "chat"
          return (
            null != r &&
            !0 === e.get(p.Zf) &&
            null == (0, u.sV)(t, e.get(p.YE)) &&
            !!(0, u.Dc)(t, l) &&
            !!(0, u.eN)(t, e.get(p.Vq)) &&
            (!!(t.enabled || e.query.getData(p.rR, "installed")?.some((e) => e.id === t.id)) ||
              !!(await (0, p.eJ)(e, t, !0))) &&
            e.get(p.Jp)?.accountId === r.accountId &&
            e.get(p.Jp)?.userId === r.userId &&
            ((0, a.startNewConversation)(e, {
              codexAppMode: "tpp" === l ? "work" : "chat",
              prefillChatGptSystemHints: ["reason"],
              prefillPrompt:
                (0, s.xR)(`@${(0, u.Fj)(t)}`, (0, n.z6)(t.id, r)) +
                " " +
                e
                  .get(o.g)
                  .formatMessage(
                    {
                      id: "browserSkills.tryPrompt",
                      defaultMessage:
                        "I just added the “{name}” skill. Let's explore what it does with an example. Make up a realistic user prompt and then use the full Skill end to end.",
                      description: "Prompt prefilled when the user tries a skill in a new conversation",
                    },
                    { name: (0, u.Fj)(t) },
                  ),
            }),
            !0)
          )
        },
        _d: async function (e, t) {
          let r = e.get(p.Jp)
          if (null == r || !0 !== e.get(p.Zf) || !t.sediment_id || t.permissions?.can_export === !1) return
          let i = await l.Request.getResponse("/hazelnuts/{hazelnut_id}/export", {
              additionalHeaders: { "ChatGPT-Account-ID": r.accountId },
              parameters: { path: { hazelnut_id: t.id } },
            }),
            n = await i.blob()
          e.get(p.Jp)?.accountId === r.accountId && e.get(p.Jp)?.userId === r.userId && (0, d.W)(n, `${t.name}.zip`)
        },
        hp: async function (e, t) {
          let r = e.get(p.Jp)
          if (
            null == r ||
            !0 !== e.get(p.Zf) ||
            (t.permissions?.can_delete !== !0 && (null == r.userId || t.creator_id !== r.userId))
          )
            throw Error("Skill deletion is unavailable")
          await l.Request.safeDelete("/hazelnuts/{hazelnut_id}", {
            additionalHeaders: { "ChatGPT-Account-ID": r.accountId },
            parameters: { path: { hazelnut_id: t.id } },
          })
          let i = ["browser-skills", r.accountId, r.userId]
          ;(await e.queryClient.cancelQueries({ queryKey: i }),
            e.queryClient.setQueriesData({ queryKey: [...i, "collection"] }, (e) => e?.filter((e) => e.id !== t.id)),
            e.queryClient.removeQueries({ queryKey: [...i, "detail", t.id] }))
        },
      },
    )
  },
  j5ZC(e, t, r) {
    var i = r("MVHH"),
      l = r("ASxG"),
      n = r("eFn4"),
      s = r("Ghh3"),
      a = r("Gdjn"),
      o = r("MX6A"),
      d = r("Q8aV"),
      c = r("svjy"),
      u = r("yGJW"),
      p = r("eShZ"),
      h = r("TlTE"),
      f = r("Wjli")
    function m(e) {
      if (!(e instanceof p.fk) || 409 !== e.status) return null
      try {
        let { detail: t } = l
          .object({
            detail: l.object({
              code: l.literal("hazelnut_duplicate_name"),
              resolution: l.enum(["UPDATE_EXISTING", "FORCE_CREATE"]).optional(),
              updateable: l.boolean().optional(),
            }),
          })
          .parse(JSON.parse(e.message))
        return t.resolution ?? (t.updateable ? "UPDATE_EXISTING" : null)
      } catch {
        return null
      }
    }
    r.d(
      t,
      {},
      {
        Z: async function (e, t, { applyResolution: r = !1, createdWithChat: l = !1 } = {}) {
          let n = e.get(f.Jp),
            a = l && !r
          if (null == n || !e.get(a ? f.Vq : f.oo)) return { status: "error", reason: "permission" }
          if (!/\.(zip|skill)$/i.test(t.name) && "skill.md" !== t.name.toLowerCase())
            return { status: "error", reason: "type" }
          if (t.size > e.get(f.bi)) return { status: "error", reason: "size" }
          let o = new FormData()
          ;(o.append("file", t),
            a && o.append("created_with_chat", "true"),
            r && (o.append("apply_resolution", "true"), o.append("force_update", "true")))
          try {
            let { hazelnuts: t } = await s.Request.safePost("/hazelnuts/uploads/create", {
              additionalHeaders: { "ChatGPT-Account-ID": n.accountId },
              requestBody: o,
              expectedErrorStatuses: [400, 401, 403, 409, 413, 422],
            })
            if (0 === t.length) return { status: "error", reason: "empty" }
            let r = await Promise.all(
                t.map(async (t) => {
                  if (
                    null != t.permissions ||
                    e.get(f.Jp)?.accountId !== n.accountId ||
                    e.get(f.Jp)?.userId !== n.userId
                  )
                    return t
                  try {
                    return await s.Request.safeGet("/hazelnuts/{hazelnut_id}", {
                      additionalHeaders: { "ChatGPT-Account-ID": n.accountId },
                      expectedErrorStatuses: [401, 403, 404],
                      parameters: { path: { hazelnut_id: t.id }, query: { include_permissions: !0 } },
                    })
                  } catch {
                    return t
                  }
                }),
              ),
              l = ["browser-skills", n.accountId, n.userId]
            for (let t of (await e.queryClient.cancelQueries({ queryKey: l }),
            e.queryClient.setQueriesData({ queryKey: [...l, "collection"] }, (e) =>
              e?.map((e) => r.find((t) => t.id === e.id) ?? e),
            ),
            ["created", "installed"])) {
              let i = r.filter((e) => "created" === t || e.enabled)
              e.queryClient.setQueryData([...l, "collection", t], (e) => [
                ...(e?.filter((e) => !r.some((t) => t.id === e.id)) ?? []),
                ...i,
              ])
            }
            for (let t of r)
              e.queryClient.setQueryData([...l, "detail", t.id], t, null == t.permissions ? { updatedAt: 0 } : void 0)
            if (e.get(f.Jp)?.accountId !== n.accountId || e.get(f.Jp)?.userId !== n.userId)
              return { status: "accountChanged" }
            return ((0, u.yy)(e, i.b7, { hazelnutId: t[0].id }), { status: "complete", skills: r })
          } catch (e) {
            if (e instanceof p.fk) {
              if (401 === e.status || 403 === e.status) return { status: "error", reason: "permission" }
              if (413 === e.status) return { status: "error", reason: "size" }
              if (409 === e.status && !r) {
                let t = m(e)
                if (null != t) return { status: "conflict", resolution: t }
              }
            }
            return { status: "error", reason: "failed" }
          }
        },
        b: m,
        startSkillCreatorChat: async function (e, t, r) {
          let i = e.get(f.Jp)
          if (null == i || !e.get(f.Vq) || r?.() === !1) return !1
          let l = (await e.query.getOrFetch(f.rR, "installed")).find((e) => e.id === h.x1),
            s = "allowed" === e.get(n.lN).status ? "tpp" : "chat"
          if (
            r?.() === !1 ||
            null == l ||
            !(0, h.Dc)(l, s) ||
            null != (0, h.sV)(l, e.get(f.YE)) ||
            !e.get(f.Vq) ||
            e.get(f.Jp)?.accountId !== i.accountId ||
            e.get(f.Jp)?.userId !== i.userId
          )
            return !1
          let u = (0, o.xR)("@skill-creator", (0, a.z6)(l.id, i)),
            p = !1
          return (
            (0, d.startNewConversation)(e, {
              onNavigate: () => {
                p = !0
              },
              codexAppMode: "tpp" === s ? "work" : "chat",
              prefillChatGptSystemHints: ["reason"],
              prefillPrompt:
                null == t
                  ? e
                      .get(c.g)
                      .formatMessage(
                        {
                          id: "browserSkills.createChatPrompt",
                          defaultMessage:
                            "Use {skillCreator} to help me create a skill. Keep it conversational, and start by asking what the skill should do.",
                          description:
                            "Editable prompt prefilled in a new chat after an end user selects Create with chat in the Skills directory. Asks the assistant to help author a skill conversationally, starting with what the skill should do. The skillCreator placeholder is the selected @skill-creator mention; keep it intact. This text is not sent until the user submits it.",
                        },
                        { skillCreator: u },
                      )
                  : e.get(c.g).formatMessage(t, { skillCreator: u }),
            }),
            p
          )
        },
      },
    )
  },
  gGkp(e, t, r) {
    var i = r("ABep"),
      l = r("QosV"),
      n = r("oyxz"),
      s = r("ygO2"),
      a = r("JNtf"),
      o = r("mUDD")
    r.d(
      t,
      {},
      {
        w: function (e) {
          let t,
            r,
            d,
            c,
            u,
            p,
            h,
            f,
            m,
            g,
            b = (0, l.c)(23),
            { resolution: w, disabled: y, onCancel: k, onConfirm: x } = e
          return (
            b[0] !== x
              ? ((t = (e) => {
                  ;(e.preventDefault(), e.stopPropagation(), x())
                }),
                (b[0] = x),
                (b[1] = t))
              : (t = b[1]),
            b[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, i.jsx)(a.L3, {
                  children: (0, i.jsx)(n.A, {
                    id: "browserSkills.duplicateTitle",
                    defaultMessage: "Skill already exists",
                    description:
                      "Title of the shared confirmation dialog for a duplicate name when creating or uploading a skill",
                  }),
                })),
                (b[2] = r))
              : (r = b[2]),
            b[3] !== w
              ? ((d = (0, i.jsx)(o.OO, {
                  children: (0, i.jsx)(o.c7, {
                    title: r,
                    subtitle: (0, i.jsx)(a.rr, {
                      children:
                        "UPDATE_EXISTING" === w
                          ? (0, i.jsx)(n.A, {
                              id: "browserSkills.uploadReplacePrompt",
                              defaultMessage:
                                "A skill with this name already exists. Replace the first skill you own with this name?",
                              description:
                                "Confirmation in the skill-upload dialog after a duplicate-name response. Accepting replaces the first existing skill owned by this user with the uploaded file; make that consequence clear. No placeholders.",
                            })
                          : (0, i.jsx)(n.A, {
                              id: "browserSkills.uploadCreateAnywayPrompt",
                              defaultMessage: "A skill with this name already exists. Create this skill anyway?",
                              description:
                                "Confirmation in the skill-upload dialog after the server permits creating a new skill despite a duplicate name. This creates another skill rather than replacing one. No placeholders.",
                            }),
                    }),
                  }),
                })),
                (b[3] = w),
                (b[4] = d))
              : (d = b[4]),
            b[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = (0, i.jsx)(n.A, {
                  id: "browserSkills.uploadCancel",
                  defaultMessage: "Cancel",
                  description:
                    "Button dismissing a duplicate-name upload in the skill-upload dialog. Leaves the existing skill unchanged. Short action label; no placeholders.",
                })),
                (b[5] = c))
              : (c = b[5]),
            b[6] !== k
              ? ((u = (0, i.jsx)(s.$, { type: "button", color: "outline", onClick: k, children: c })),
                (b[6] = k),
                (b[7] = u))
              : (u = b[7]),
            b[8] !== w
              ? ((p =
                  "UPDATE_EXISTING" === w
                    ? (0, i.jsx)(n.A, {
                        id: "browserSkills.uploadReplace",
                        defaultMessage: "Replace existing",
                        description:
                          "Confirmation button in the skill-upload dialog that replaces the first skill the user owns with the duplicate name. Short action label; no placeholders.",
                      })
                    : (0, i.jsx)(n.A, {
                        id: "browserSkills.uploadCreateAnyway",
                        defaultMessage: "Create anyway",
                        description:
                          "Confirmation button in the skill-upload dialog that creates a skill despite a duplicate name. Short action label; no placeholders.",
                      })),
                (b[8] = w),
                (b[9] = p))
              : (p = b[9]),
            b[10] !== y || b[11] !== p
              ? ((h = (0, i.jsx)(s.$, { type: "submit", color: "primary", disabled: y, children: p })),
                (b[10] = y),
                (b[11] = p),
                (b[12] = h))
              : (h = b[12]),
            b[13] !== u || b[14] !== h
              ? ((f = (0, i.jsx)(o.OO, { children: (0, i.jsxs)(o.Es, { children: [u, h] }) })),
                (b[13] = u),
                (b[14] = h),
                (b[15] = f))
              : (f = b[15]),
            b[16] !== t || b[17] !== d || b[18] !== f
              ? ((m = (0, i.jsxs)(o.R4, { as: "form", size: "viewport", onSubmit: t, children: [d, f] })),
                (b[16] = t),
                (b[17] = d),
                (b[18] = f),
                (b[19] = m))
              : (m = b[19]),
            b[20] !== k || b[21] !== m
              ? ((g = (0, i.jsx)(a.lG, { open: !0, variant: "chatgpt", onOpenChange: k, children: m })),
                (b[20] = k),
                (b[21] = m),
                (b[22] = g))
              : (g = b[22]),
            g
          )
        },
      },
    )
  },
  EOSE(e, t, r) {
    r.d(t, { BrowserSkillEditor: () => el })
    var i = r("ABep"),
      l = r("QosV"),
      n = r("zTeN"),
      s = r("zd8w"),
      a = r("Wf1j"),
      o = r("oyxz"),
      d = r("Qgfj"),
      c = r("HZfM"),
      u = r("tZ5S"),
      p = r("NycP"),
      h = r("ygO2"),
      f = r("CtJU"),
      m = r("GO7r"),
      g = r("RNul"),
      b = r("zLIa"),
      w = r("SGsN"),
      y = r("bWX0"),
      k = r("OWtl"),
      x = r("ZEx5"),
      v = r("WGha"),
      _ = r("EGS2"),
      j = r("j5ZC"),
      S = r("gGkp"),
      A = r("TlTE"),
      C = r("OZHl"),
      I = r("Wjli"),
      M = r("MVHH"),
      N = r("uLW7"),
      E = r("Ghh3"),
      D = r("yGJW"),
      P = r("eShZ"),
      q = r("mv2N")
    let T = (0, n.vU)(k.u, (e, { get: t }) => {
      let r = t(I.Jp)
      return {
        queryKey: ["browser-skills", r?.accountId, r?.userId, "editor", e],
        enabled: null != r && !0 === t(I.Zf),
        staleTime: 0,
        refetchOnMount: !0,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
        queryFn: async ({ signal: t }) => {
          if (null == r) throw Error("Skills account unavailable")
          let i = await E.Request.safeGet("/hazelnuts/{hazelnut_id}", {
              additionalHeaders: { "ChatGPT-Account-ID": r.accountId },
              parameters: { path: { hazelnut_id: e }, query: { include_permissions: !0 } },
              expectedErrorStatuses: [403, 404],
              signal: t,
            }),
            l = Object.keys(i.files).find((e) => "skill.md" === e.toLowerCase())
          if (null == l || i.permissions?.can_read === !1) throw Error("Skill instructions unavailable")
          let { skill: n, bytes: s } = await (0, q.M)(r.accountId, i, l, t),
            a = new TextDecoder()
              .decode(s)
              .replace(/^\uFEFF/, "")
              .replace(/^---\s*\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, ""),
            o = await Promise.all(
              Object.entries(n.files)
                .filter(([e]) => e !== l)
                .map(async ([e, i]) => ({
                  id: e,
                  path: e,
                  source: n.sediment_id
                    ? { kind: "stored", reference: { file_id: n.sediment_id, path: e, range: i } }
                    : {
                        kind: "local",
                        file: new File([(await (0, q.M)(r.accountId, n, e, t)).bytes], e.split("/").at(-1) ?? e),
                      },
                })),
            )
          return { skill: n, draft: { name: n.name, description: n.description, instructions: a, files: o } }
        },
      }
    })
    function z(e) {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(e.name) || e.name.length > 64) return "name"
      if (!e.instructions.trim()) return "instructions"
      if (e.description.length > 500) return "description"
      let t = new Set(["skill.md"])
      for (let { path: r } of e.files) {
        let e = r.split("/")
        if (
          !r.trim() ||
          r !== r.trim() ||
          /[\\:]/.test(r) ||
          Array.from(r).some((e) => 32 > e.charCodeAt(0)) ||
          e.some((e) => !e || "." === e || ".." === e) ||
          t.has(r.toLowerCase())
        )
          return "paths"
        t.add(r.toLowerCase())
      }
      return null
    }
    function R(e) {
      return (
        "text" === e.source.kind ||
        /\.(md|txt|json|yaml|yml|toml|csv|ts|tsx|js|jsx|py|sh|css|html|xml|svg|sql|r)$/i.test(e.path)
      )
    }
    async function L(e, t, r, i) {
      if ("local" === t.source.kind) return t.source.file
      if ("text" === t.source.kind) return new Blob([t.source.content])
      let l = e.get(I.Jp)
      if (null == l || null == r) throw Error("Skill file unavailable")
      let { bytes: n } = await (0, q.M)(l.accountId, r, t.source.reference.path, i)
      return new Blob([n])
    }
    var O = r("bqtn"),
      F = r("V7pv"),
      G = r("ripK"),
      B = r("kcrg")
    function J(e) {
      let t,
        r,
        d,
        c,
        u,
        p,
        f,
        g,
        b,
        w,
        y,
        k,
        x,
        v = (0, l.c)(86),
        { files: _, skill: j, disabled: S, selectedId: A, onChange: C, onSelect: M } = e,
        N = (0, a.A)(),
        E = (0, n.Ul)(I.oo),
        D = (0, s.useRef)(null),
        P = (0, s.useRef)(null),
        [q, T] = (0, s.useState)(!1),
        [z, R] = (0, s.useState)(W),
        [L, G] = (0, s.useState)(null),
        [J, U] = (0, s.useState)(null)
      if (
        v[0] !== E ||
        v[1] !== z ||
        v[2] !== S ||
        v[3] !== L ||
        v[4] !== J ||
        v[5] !== _ ||
        v[6] !== N ||
        v[7] !== C ||
        v[8] !== M ||
        v[9] !== A ||
        v[10] !== j ||
        v[11] !== q
      ) {
        let e, l, n, s, a, k, x, I, W, V, Q, Z, Y, X, ee, et, er
        v[23] !== L ? ((e = (e) => e.id === L), (v[23] = L), (v[24] = e)) : (e = v[24])
        let ei = _.find(e),
          el = (e) => {
            if (S || !ei) return null
            let t = ei.path.split("/").at(-1),
              r = e ? `${e}/${t}` : t
            return !r || _.some((e) => e.path.toLowerCase() === r.toLowerCase()) ? null : r
          },
          en = (e, t) => {
            if (null != L) {
              if ((e.stopPropagation(), null == el(t))) {
                e.dataTransfer.dropEffect = "none"
                return
              }
              ;(e.preventDefault(), (e.dataTransfer.dropEffect = "move"), U(t))
            }
          },
          es = (e, t) => {
            if (null == L) return
            ;(e.preventDefault(), e.stopPropagation())
            let r = el(t)
            ;(null != r &&
              (C(_.map((e) => (e.id === L ? { ...e, path: r } : e))), R((e) => new Set([...e].filter((e) => e !== t)))),
              G(null),
              U(null))
          }
        v[25] !== E || v[26] !== S || v[27] !== _ || v[28] !== C
          ? ((l = (e, t) => {
              if (!e || S || !E) return
              let r = Array.from(e)
              r.some(K)
                ? T(!0)
                : (T(!1),
                  C([
                    ..._,
                    ...r.map((e) => ({
                      id: crypto.randomUUID(),
                      path: t ? e.webkitRelativePath.split("/").slice(1).join("/") : e.name,
                      source: { kind: "local", file: e },
                    })),
                  ]))
            }),
            (v[25] = E),
            (v[26] = S),
            (v[27] = _),
            (v[28] = C),
            (v[29] = l))
          : (l = v[29])
        let ea = l
        ;((b = "flex flex-col gap-3"),
          v[30] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, i.jsx)("h2", {
                className: "text-base font-medium select-none",
                children: (0, i.jsx)(o.A, {
                  id: "browserSkills.editor.files",
                  defaultMessage: "Files",
                  description: "Section heading for supporting files in the browser skill editor",
                }),
              })),
              (v[30] = n))
            : (n = v[30]),
          v[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsx)(m.WgN, {})),
              (a = (0, i.jsx)(o.A, {
                id: "browserSkills.editor.upload",
                defaultMessage: "Upload",
                description: "Button opening supporting-file upload and creation options in the browser skill editor",
              })),
              (v[31] = s),
              (v[32] = a))
            : ((s = v[31]), (a = v[32])),
          v[33] !== S
            ? ((k = (0, i.jsxs)(h.$, {
                type: "button",
                color: "outline",
                size: "dialog",
                disabled: S,
                children: [s, a],
              })),
              (v[33] = S),
              (v[34] = k))
            : (k = v[34]),
          v[35] !== _ || v[36] !== C || v[37] !== M
            ? ((x = () => {
                let e = "untitled.txt",
                  t = 1
                for (; _.some((t) => t.path.toLowerCase() === e);) e = `untitled-${t++}.txt`
                let r = { id: crypto.randomUUID(), path: e, source: { kind: "text", content: "" } }
                ;(C([..._, r]), M(r))
              }),
              (v[35] = _),
              (v[36] = C),
              (v[37] = M),
              (v[38] = x))
            : (x = v[38]),
          v[39] === Symbol.for("react.memo_cache_sentinel")
            ? ((I = (0, i.jsx)(o.A, {
                id: "browserSkills.editor.newFile",
                defaultMessage: "New text file",
                description: "Menu action adding a blank editable supporting file to a browser skill draft",
              })),
              (v[39] = I))
            : (I = v[39]),
          v[40] !== x
            ? ((W = (0, i.jsx)(O.ms.Item, { onSelect: x, children: I })), (v[40] = x), (v[41] = W))
            : (W = v[41]),
          v[42] !== E
            ? ((V = E
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(O.ms.Item, {
                        onSelect: () => D.current?.click(),
                        children: (0, i.jsx)(o.A, {
                          id: "browserSkills.editor.addFiles",
                          defaultMessage: "Upload files",
                          description: "Menu action opening the supporting-file picker in the browser skill editor",
                        }),
                      }),
                      (0, i.jsx)(O.ms.Item, {
                        onSelect: () => P.current?.click(),
                        children: (0, i.jsx)(o.A, {
                          id: "browserSkills.editor.addFolder",
                          defaultMessage: "Upload folder",
                          description: "Menu action opening the folder picker in the browser skill editor",
                        }),
                      }),
                    ],
                  })
                : null),
              (v[42] = E),
              (v[43] = V))
            : (V = v[43]),
          v[44] !== k || v[45] !== W || v[46] !== V
            ? ((w = (0, i.jsxs)("div", {
                className: "flex items-center justify-between gap-2",
                children: [n, (0, i.jsxs)(O.Ab, { align: "end", triggerButton: k, children: [W, V] })],
              })),
              (v[44] = k),
              (v[45] = W),
              (v[46] = V),
              (v[47] = w))
            : (w = v[47]),
          v[48] !== N ? ((Q = N.formatMessage(H.fileInput)), (v[48] = N), (v[49] = Q)) : (Q = v[49]),
          v[50] !== ea
            ? ((Z = (e) => {
                ;(ea(e.target.files, !1), (e.target.value = ""))
              }),
              (v[50] = ea),
              (v[51] = Z))
            : (Z = v[51]),
          v[52] !== Q || v[53] !== Z
            ? ((y = (0, i.jsx)("input", {
                ref: D,
                hidden: !0,
                type: "file",
                multiple: !0,
                "aria-label": Q,
                onChange: Z,
              })),
              (v[52] = Q),
              (v[53] = Z),
              (v[54] = y))
            : (y = v[54]),
          v[55] === Symbol.for("react.memo_cache_sentinel")
            ? ((Y = (e) => {
                ;((P.current = e), e?.setAttribute("webkitdirectory", ""))
              }),
              (v[55] = Y))
            : (Y = v[55]),
          v[56] !== N ? ((X = N.formatMessage(H.folderInput)), (v[56] = N), (v[57] = X)) : (X = v[57]),
          v[58] !== ea
            ? ((ee = (e) => {
                ;(ea(e.target.files, !0), (e.target.value = ""))
              }),
              (v[58] = ea),
              (v[59] = ee))
            : (ee = v[59]),
          v[60] !== X || v[61] !== ee
            ? ((r = (0, i.jsx)("input", {
                ref: Y,
                hidden: !0,
                type: "file",
                multiple: !0,
                "aria-label": X,
                onChange: ee,
              })),
              (v[60] = X),
              (v[61] = ee),
              (v[62] = r))
            : (r = v[62]),
          v[63] !== q
            ? ((d = q
                ? (0, i.jsx)("p", {
                    role: "alert",
                    children: (0, i.jsx)(o.A, {
                      id: "browserSkills.editor.fileTooLarge",
                      defaultMessage: "Choose files no larger than 25 MB each",
                      description:
                        "Validation error after choosing an oversized supporting file in the browser skill editor",
                    }),
                  })
                : null),
              (v[63] = q),
              (v[64] = d))
            : (d = v[64]),
          (t = "flex min-h-0 flex-col"),
          (c = (e) => en(e, "")),
          v[65] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = (e) => {
                ;(e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) || U(null)
              }),
              (v[65] = u))
            : (u = v[65]),
          (p = (e) => es(e, "")),
          v[66] === Symbol.for("react.memo_cache_sentinel")
            ? ((et = (0, i.jsx)(m.Z1A, {})), (v[66] = et))
            : (et = v[66]))
        let eo = null == A || "" === J
        ;(v[67] !== M ? ((er = () => M(null)), (v[67] = M), (v[68] = er)) : (er = v[68]),
          v[69] !== eo || v[70] !== er
            ? ((f = (0, i.jsx)(F.H, { label: "SKILL.md", icon: et, isActive: eo, onPress: er })),
              (v[69] = eo),
              (v[70] = er),
              (v[71] = f))
            : (f = v[71]),
          (g = (0, B.n)(_, z).map((e) =>
            "folder" === e.kind
              ? (0, i.jsx)(
                  F.H,
                  {
                    label: (0, i.jsxs)("span", {
                      className: "flex items-center gap-2",
                      children: [(0, i.jsx)(m.efV, {}), e.name],
                    }),
                    ariaLabel: e.path,
                    ariaExpanded: !z.has(e.path),
                    icon: z.has(e.path) ? (0, i.jsx)(m.uM3, {}) : (0, i.jsx)(m.Aq_, {}),
                    indentLevel: e.depth,
                    isActive: J === e.path,
                    onPress: () =>
                      R((t) => {
                        let r = new Set(t)
                        return (r.has(e.path) ? r.delete(e.path) : r.add(e.path), r)
                      }),
                    onDragOver: (t) => en(t, e.path),
                    onDrop: (t) => es(t, e.path),
                  },
                  `folder:${e.path}`,
                )
              : (0, i.jsx)(
                  $,
                  {
                    file: e.file,
                    depth: e.depth,
                    skill: j,
                    disabled: S,
                    selected: A === e.file.id,
                    onSelect: () => M(e.file),
                    onDragStart: (t) => {
                      ;(G(e.file.id),
                        (t.dataTransfer.effectAllowed = "move"),
                        t.dataTransfer.setData("text/plain", e.file.path))
                    },
                    onDragEnd: () => {
                      ;(G(null), U(null))
                    },
                    onChange: (t) => C(_.map((r) => (r.id === e.file.id ? t : r))),
                    onRemove: () => {
                      ;(A === e.file.id && M(null), C(_.filter((t) => t.id !== e.file.id)))
                    },
                  },
                  e.file.id,
                ),
          )),
          (v[0] = E),
          (v[1] = z),
          (v[2] = S),
          (v[3] = L),
          (v[4] = J),
          (v[5] = _),
          (v[6] = N),
          (v[7] = C),
          (v[8] = M),
          (v[9] = A),
          (v[10] = j),
          (v[11] = q),
          (v[12] = t),
          (v[13] = r),
          (v[14] = d),
          (v[15] = c),
          (v[16] = u),
          (v[17] = p),
          (v[18] = f),
          (v[19] = g),
          (v[20] = b),
          (v[21] = w),
          (v[22] = y))
      } else
        ((t = v[12]),
          (r = v[13]),
          (d = v[14]),
          (c = v[15]),
          (u = v[16]),
          (p = v[17]),
          (f = v[18]),
          (g = v[19]),
          (b = v[20]),
          (w = v[21]),
          (y = v[22]))
      return (
        v[72] !== t || v[73] !== c || v[74] !== u || v[75] !== p || v[76] !== f || v[77] !== g
          ? ((k = (0, i.jsxs)("div", { className: t, onDragOver: c, onDragLeave: u, onDrop: p, children: [f, g] })),
            (v[72] = t),
            (v[73] = c),
            (v[74] = u),
            (v[75] = p),
            (v[76] = f),
            (v[77] = g),
            (v[78] = k))
          : (k = v[78]),
        v[79] !== r || v[80] !== d || v[81] !== k || v[82] !== b || v[83] !== w || v[84] !== y
          ? ((x = (0, i.jsxs)("section", { className: b, children: [w, y, r, d, k] })),
            (v[79] = r),
            (v[80] = d),
            (v[81] = k),
            (v[82] = b),
            (v[83] = w),
            (v[84] = y),
            (v[85] = x))
          : (x = v[85]),
        x
      )
    }
    function K(e) {
      return e.size > 0x1900000
    }
    function W() {
      return new Set()
    }
    function $(e) {
      let t,
        r,
        d,
        c,
        u,
        p,
        f = (0, l.c)(25),
        {
          file: g,
          depth: w,
          skill: y,
          disabled: x,
          selected: v,
          onSelect: _,
          onChange: j,
          onRemove: S,
          onDragStart: A,
          onDragEnd: C,
        } = e,
        M = (0, n.gh)(k.u),
        N = (0, a.A)(),
        [E, D] = (0, s.useState)(!1),
        [P, q] = (0, s.useState)(!1),
        [T, z] = (0, s.useState)(!1),
        R = (0, s.useRef)(null)
      ;(f[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => R.current?.abort()), (r = []), (f[0] = t), (f[1] = r))
        : ((t = f[0]), (r = f[1])),
        (0, s.useEffect)(t, r),
        f[2] !== g || f[3] !== M || f[4] !== y
          ? ((d = () => {
              let e = M.get(I.Jp)
              if (null == e || null != R.current) return
              let t = new AbortController()
              ;((R.current = t),
                q(!0),
                z(!1),
                L(M, g, y, t.signal)
                  .then((r) => {
                    t.signal.aborted ||
                      M.get(I.Jp)?.accountId !== e.accountId ||
                      M.get(I.Jp)?.userId !== e.userId ||
                      (0, G.W)(r, g.path.split("/").at(-1) ?? g.path)
                  })
                  .catch(() => {
                    t.signal.aborted || z(!0)
                  })
                  .finally(() => {
                    ;((R.current = null), q(!1))
                  }))
            }),
            (f[2] = g),
            (f[3] = M),
            (f[4] = y),
            (f[5] = d))
          : (d = f[5]))
      let B = d
      return (
        f[6] !== w ||
        f[7] !== x ||
        f[8] !== B ||
        f[9] !== g ||
        f[10] !== N ||
        f[11] !== j ||
        f[12] !== C ||
        f[13] !== A ||
        f[14] !== S ||
        f[15] !== _ ||
        f[16] !== P ||
        f[17] !== E ||
        f[18] !== v
          ? ((c = E
              ? (0, i.jsx)(b.pd, {
                  autoFocus: !0,
                  value: g.path,
                  disabled: x,
                  "aria-label": N.formatMessage(H.filePath),
                  onChange: (e) => j({ ...g, path: e.target.value }),
                  onBlur: () => D(!1),
                  onKeyDown: (e) => {
                    ;("Enter" === e.key || "Escape" === e.key) && (e.preventDefault(), e.stopPropagation(), D(!1))
                  },
                })
              : (0, i.jsx)(F.H, {
                  label: g.path.split("/").at(-1),
                  ariaLabel: g.path,
                  icon: (0, i.jsx)(m.Z1A, {}),
                  indentLevel: w,
                  isActive: v,
                  onPress: _,
                  draggable: !x,
                  onDragStart: A,
                  onDragEnd: C,
                  actions: (0, i.jsx)("div", {
                    className: "pointer-events-auto",
                    role: "presentation",
                    onClick: Q,
                    onKeyDown: V,
                    onPointerDown: U,
                    children: (0, i.jsxs)(O.Ab, {
                      align: "end",
                      triggerButton: (0, i.jsx)(h.$, {
                        type: "button",
                        color: "ghostActive",
                        size: "iconCircle",
                        disabled: P,
                        "aria-label": N.formatMessage(H.fileActions, { path: g.path }),
                        children: (0, i.jsx)(m.l0Y, {}),
                      }),
                      children: [
                        x
                          ? null
                          : (0, i.jsx)(O.ms.Item, {
                              leftIcon: (0, i.jsx)(m.aRI, {}),
                              onSelect: () => D(!0),
                              children: (0, i.jsx)(o.A, {
                                id: "browserSkills.editor.renameFile",
                                defaultMessage: "Rename",
                                description: "Menu action renaming a supporting file in the browser skill draft",
                              }),
                            }),
                        (0, i.jsx)(O.ms.Item, {
                          leftIcon: (0, i.jsx)(m.EYt, {}),
                          onSelect: B,
                          children: (0, i.jsx)(o.A, {
                            id: "browserSkills.editor.downloadFile",
                            defaultMessage: "Download",
                            description: "Menu action downloading a supporting file from the browser skill editor",
                          }),
                        }),
                        x
                          ? null
                          : (0, i.jsx)(O.ms.Item, {
                              leftIcon: (0, i.jsx)(m.zwW, {}),
                              onSelect: S,
                              children: (0, i.jsx)(o.A, {
                                id: "browserSkills.editor.removeFile",
                                defaultMessage: "Remove",
                                description:
                                  "Menu action removing a supporting file from a skill draft; takes effect only after saving the skill",
                              }),
                            }),
                      ],
                    }),
                  }),
                })),
            (f[6] = w),
            (f[7] = x),
            (f[8] = B),
            (f[9] = g),
            (f[10] = N),
            (f[11] = j),
            (f[12] = C),
            (f[13] = A),
            (f[14] = S),
            (f[15] = _),
            (f[16] = P),
            (f[17] = E),
            (f[18] = v),
            (f[19] = c))
          : (c = f[19]),
        f[20] !== T
          ? ((u = T
              ? (0, i.jsx)("p", {
                  role: "alert",
                  children: (0, i.jsx)(o.A, {
                    id: "browserSkills.editor.readFileFailed",
                    defaultMessage: "Couldn't open this file. Try again.",
                    description: "Error after opening a supporting file fails in the browser skill editor",
                  }),
                })
              : null),
            (f[20] = T),
            (f[21] = u))
          : (u = f[21]),
        f[22] !== c || f[23] !== u
          ? ((p = (0, i.jsxs)(i.Fragment, { children: [c, u] })), (f[22] = c), (f[23] = u), (f[24] = p))
          : (p = f[24]),
        p
      )
    }
    function U(e) {
      return e.stopPropagation()
    }
    function V(e) {
      ;("Enter" === e.key || " " === e.key) && e.stopPropagation()
    }
    function Q(e) {
      return e.stopPropagation()
    }
    let H = (0, d.YK)({
      fileInput: {
        id: "browserSkills.editor.fileInput",
        defaultMessage: "Supporting files",
        description: "Accessible label of the browser skill editor supporting-file picker",
      },
      folderInput: {
        id: "browserSkills.editor.folderInput",
        defaultMessage: "Supporting folder",
        description: "Accessible label of the browser skill editor folder picker",
      },
      filePath: {
        id: "browserSkills.editor.filePath",
        defaultMessage: "File path",
        description: "Accessible label for a relative supporting-file path in the browser skill editor",
      },
      fileActions: {
        id: "browserSkills.editor.fileActions",
        defaultMessage: "Actions for {path}",
        description:
          "Accessible label for a supporting file's menu in the browser skill editor; path is its relative file path",
      },
    })
    var Z = r("JNtf"),
      Y = r("mUDD"),
      X = r("FrrB"),
      ee = r("hlym"),
      et = r("odCE")
    function er(e) {
      let t,
        r,
        n,
        s,
        a,
        d,
        c,
        u,
        p,
        f = (0, l.c)(21),
        { title: g, actions: b, children: w, onClose: y, onSubmit: k } = e
      return (
        f[0] !== k
          ? ((t = (e) => {
              ;(e.preventDefault(), k?.())
            }),
            (r = k ? (e) => (0, ee.k)(e, k) : void 0),
            (f[0] = k),
            (f[1] = t),
            (f[2] = r))
          : ((t = f[1]), (r = f[2])),
        f[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(m.z_d, {})),
            (s = (0, i.jsx)(o.A, {
              id: "browserSkills.editor.back",
              defaultMessage: "Back",
              description:
                "Button returning from the fullscreen browser skill editor to the Skills directory after handling unsaved changes",
            })),
            (f[3] = n),
            (f[4] = s))
          : ((n = f[3]), (s = f[4])),
        f[5] !== y
          ? ((a = (0, i.jsxs)(h.$, {
              type: "button",
              color: "ghostActive",
              size: "dialog",
              onClick: y,
              children: [n, s],
            })),
            (f[5] = y),
            (f[6] = a))
          : (a = f[6]),
        f[7] !== g
          ? ((d = (0, i.jsx)(Z.L3, { className: "sr-only", children: g })), (f[7] = g), (f[8] = d))
          : (d = f[8]),
        f[9] !== b || f[10] !== a || f[11] !== d
          ? ((c = (0, i.jsxs)("header", {
              className:
                "flex items-center justify-between gap-3 border-b border-default bg-surface-secondary px-3 py-3",
              children: [a, d, b],
            })),
            (f[9] = b),
            (f[10] = a),
            (f[11] = d),
            (f[12] = c))
          : (c = f[12]),
        f[13] !== w || f[14] !== t || f[15] !== r || f[16] !== c
          ? ((u = (0, i.jsxs)(Y.R4, {
              className: "bg-surface text-default",
              as: "form",
              size: "full",
              variant: "chatgpt",
              onSubmit: t,
              onKeyDown: r,
              children: [c, w],
            })),
            (f[13] = w),
            (f[14] = t),
            (f[15] = r),
            (f[16] = c),
            (f[17] = u))
          : (u = f[17]),
        f[18] !== y || f[19] !== u
          ? ((p = (0, i.jsx)(Z.lG, {
              open: !0,
              unstyledContent: !0,
              viewportSized: !0,
              showDialogClose: !1,
              contentClassName: "h-full w-full",
              onOpenChange: y,
              children: u,
            })),
            (f[18] = y),
            (f[19] = u),
            (f[20] = p))
          : (p = f[20]),
        p
      )
    }
    function ei(e) {
      let t,
        r,
        n,
        s,
        a,
        d = (0, l.c)(11),
        { failure: c, onClose: u, onRetry: p } = e
      return (
        d[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(o.A, {
              id: "browserSkills.editor.title",
              defaultMessage: "Skill editor",
              description: "Title of the browser skill editor while checking access",
            })),
            (d[0] = t))
          : (t = d[0]),
        d[1] !== c
          ? ((r = c
              ? (0, i.jsx)("p", {
                  role: "alert",
                  children:
                    "access" === c
                      ? (0, i.jsx)(o.A, {
                          id: "browserSkills.editor.accessDenied",
                          defaultMessage: "Skills aren't available for this account",
                          description: "Error when opening the browser skill editor without Skills access",
                        })
                      : (0, i.jsx)(o.A, {
                          id: "browserSkills.editor.loadFailed",
                          defaultMessage: "Couldn't load this skill for editing",
                          description: "Error when the browser skill editor cannot load its metadata or files",
                        }),
                })
              : (0, i.jsx)(et.j, {
                  children: (0, i.jsx)(o.A, {
                    id: "browserSkills.editor.loading",
                    defaultMessage: "Loading skill…",
                    description:
                      "Status shown in the fullscreen browser skill editor while account access or skill contents are loading",
                  }),
                })),
            (d[1] = c),
            (d[2] = r))
          : (r = d[2]),
        d[3] !== p
          ? ((n = p
              ? (0, i.jsx)(h.$, {
                  type: "button",
                  color: "secondary",
                  onClick: p,
                  children: (0, i.jsx)(o.A, {
                    id: "browserSkills.editor.retry",
                    defaultMessage: "Retry",
                    description: "Button retrying a failed browser skill editor load",
                  }),
                })
              : null),
            (d[3] = p),
            (d[4] = n))
          : (n = d[4]),
        d[5] !== r || d[6] !== n
          ? ((s = (0, i.jsx)(X.A, { layout: "page", title: null, description: r, actions: n })),
            (d[5] = r),
            (d[6] = n),
            (d[7] = s))
          : (s = d[7]),
        d[8] !== u || d[9] !== s
          ? ((a = (0, i.jsx)(er, { title: t, onClose: u, children: s })), (d[8] = u), (d[9] = s), (d[10] = a))
          : (a = d[10]),
        a
      )
    }
    function el() {
      let e,
        t,
        r = (0, l.c)(13),
        { skillId: s } = (0, c.g)(),
        a = (0, n.Ul)(I.Jp),
        o = (0, n.Ul)(I.Zf),
        d = (0, c.Zp)()
      r[0] !== d
        ? ((e = () => {
            d("/skills", { state: { initialTab: "skills" } })
          }),
          (r[0] = d),
          (r[1] = e))
        : (e = r[1])
      let u = e
      if (!0 !== o || null == a) {
        let e,
          l = null == o ? void 0 : "access"
        ;(r[2] !== u || r[3] !== l
          ? ((e = (0, i.jsx)(ei, { failure: l, onClose: u })), (r[2] = u), (r[3] = l), (r[4] = e))
          : (e = r[4]),
          (t = e))
      } else if (s) {
        let e,
          l = `${a.accountId}:${a.userId}:${s}`
        ;(r[5] !== u || r[6] !== s || r[7] !== l
          ? ((e = (0, i.jsx)(en, { skillId: s, onClose: u }, l)), (r[5] = u), (r[6] = s), (r[7] = l), (r[8] = e))
          : (e = r[8]),
          (t = e))
      } else {
        let e,
          l,
          n = `${a.accountId}:${a.userId}`
        ;(r[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = { name: "", description: "", instructions: "", files: [] }), (r[9] = e))
          : (e = r[9]),
          r[10] !== u || r[11] !== n
            ? ((l = (0, i.jsx)(es, { initialDraft: e, onClose: u }, n)), (r[10] = u), (r[11] = n), (r[12] = l))
            : (l = r[12]),
          (t = l))
      }
      return t
    }
    function en(e) {
      let t,
        r,
        s = (0, l.c)(11),
        { skillId: a, onClose: o } = e,
        { data: d, isError: c, isFetching: u, refetch: p } = (0, n._U)(T, a)
      if (d && !u && !c) {
        let e
        return (
          s[0] !== d.draft || s[1] !== d.skill || s[2] !== o
            ? ((e = (0, i.jsx)(es, { skill: d.skill, initialDraft: d.draft, onClose: o })),
              (s[0] = d.draft),
              (s[1] = d.skill),
              (s[2] = o),
              (s[3] = e))
            : (e = s[3]),
          e
        )
      }
      let h = c ? "load" : void 0
      return (
        s[4] !== c || s[5] !== p ? ((t = c ? () => void p() : void 0), (s[4] = c), (s[5] = p), (s[6] = t)) : (t = s[6]),
        s[7] !== o || s[8] !== h || s[9] !== t
          ? ((r = (0, i.jsx)(ei, { failure: h, onClose: o, onRetry: t })),
            (s[7] = o),
            (s[8] = h),
            (s[9] = t),
            (s[10] = r))
          : (r = s[10]),
        r
      )
    }
    function es(e) {
      let t,
        r,
        d,
        q,
        O,
        F,
        G,
        B,
        K,
        W,
        $,
        U,
        V,
        Q,
        H,
        Z,
        Y,
        X,
        ee,
        et,
        ei,
        el,
        en,
        es,
        ep,
        eh,
        ef,
        em,
        eg,
        eb,
        ew,
        ey,
        ek,
        ex,
        ev = (0, l.c)(104),
        { skill: e_, initialDraft: ej, onClose: eS } = e,
        eA = (0, n.gh)(k.u),
        eC = (0, a.A)(),
        eI = (0, c.Zp)(),
        eM = (0, n.Ul)(I.Jp),
        eN = (0, n.Ul)(I.Vq),
        eE = (0, s.useContext)(c.hf),
        [eD, eP] = (0, s.useState)(ej),
        [eq, eT] = (0, s.useState)(ej),
        [ez, eR] = (0, s.useState)(!1),
        [eL, eO] = (0, s.useState)(!1),
        [eF, eG] = (0, s.useState)(!1),
        [eB, eJ] = (0, s.useState)(!1),
        [eK, eW] = (0, s.useState)(!1),
        [e$, eU] = (0, s.useState)(null),
        [eV, eQ] = (0, s.useState)(!1),
        eH = (0, s.useId)(),
        [eZ, eY] = (0, s.useState)(null)
      ev[0] !== eZ?.id ? ((t = (e) => e.id === eZ?.id), (ev[0] = eZ?.id), (ev[1] = t)) : (t = ev[1])
      let eX = eq.files.find(t),
        e0 = null != eX && "svg" === (0, y.Zo)(eX.path),
        e1 = (0, s.useRef)(null),
        e2 = (0, s.useRef)(null),
        e4 = (0, s.useRef)(!1)
      ev[2] !== eN || ev[3] !== eM?.userId || ev[4] !== e_
        ? ((r = e_ ? (0, A.wu)(e_, eM?.userId) : eN), (ev[2] = eN), (ev[3] = eM?.userId), (ev[4] = e_), (ev[5] = r))
        : (r = ev[5])
      let e5 = r
      ev[6] !== eq ? ((d = z(eq)), (ev[6] = eq), (ev[7] = d)) : (d = ev[7])
      let e3 = d,
        e7 = eq.description.length > 500,
        e6 = e3 ?? (eK ? "save" : null)
      ev[8] !== eD.description ||
      ev[9] !== eD.files ||
      ev[10] !== eD.instructions ||
      ev[11] !== eD.name ||
      ev[12] !== eq.description ||
      ev[13] !== eq.files ||
      ev[14] !== eq.instructions ||
      ev[15] !== eq.name
        ? ((q =
            eq.name !== eD.name ||
            eq.description !== eD.description ||
            eq.instructions !== eD.instructions ||
            eq.files.length !== eD.files.length ||
            eq.files.some((e, t) => e.path !== eD.files[t].path || e.source !== eD.files[t].source)),
          (ev[8] = eD.description),
          (ev[9] = eD.files),
          (ev[10] = eD.instructions),
          (ev[11] = eD.name),
          (ev[12] = eq.description),
          (ev[13] = eq.files),
          (ev[14] = eq.instructions),
          (ev[15] = eq.name),
          (ev[16] = q))
        : (q = ev[16])
      let e8 = q,
        e9 = e8 || ez
      ev[17] !== eA || ev[18] !== e_
        ? ((O = (e) => {
            if ((e1.current?.abort(), null == e)) return void eY(null)
            if ("text" === e.source.kind || !R(e))
              return void eY({ id: e.id, status: "ready", content: "text" === e.source.kind ? e.source.content : null })
            let t = new AbortController()
            ;((e1.current = t),
              eY({ id: e.id, content: null, status: "loading" }),
              L(eA, e, e_, t.signal)
                .then(ed)
                .then((r) => {
                  t.signal.aborted || eY({ id: e.id, content: r, status: "ready" })
                })
                .catch(() => {
                  t.signal.aborted || eY({ id: e.id, content: null, status: "error" })
                }))
          }),
          (ev[17] = eA),
          (ev[18] = e_),
          (ev[19] = O))
        : (O = ev[19])
      let te = O
      ;(ev[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = () => () => {
            ;(e2.current?.abort(), e1.current?.abort())
          }),
          (G = []),
          (ev[20] = F),
          (ev[21] = G))
        : ((F = ev[20]), (G = ev[21])),
        (0, s.useEffect)(F, G),
        ev[22] !== e9
          ? ((B = () => {
              if (e9)
                return (
                  window.addEventListener("beforeunload", eo),
                  () => window.removeEventListener("beforeunload", eo)
                )
            }),
            (K = [e9]),
            (ev[22] = e9),
            (ev[23] = B),
            (ev[24] = K))
          : ((B = ev[23]), (K = ev[24])),
        (0, s.useEffect)(B, K),
        ev[25] !== e9 || ev[26] !== eS
          ? ((W = () => {
              e9 ? eQ(!0) : eS()
            }),
            (ev[25] = e9),
            (ev[26] = eS),
            (ev[27] = W))
          : (W = ev[27]))
      let tt = W
      ev[28] !== e5 ||
      ev[29] !== eq ||
      ev[30] !== eC ||
      ev[31] !== eI ||
      ev[32] !== eA ||
      ev[33] !== e_ ||
      ev[34] !== e3
        ? (($ = (e) => {
            let t = void 0 !== e && e
            if (!e5 || null != e2.current || (eW(!1), e3)) return
            let r = new AbortController()
            ;((e2.current = r),
              eR(!0),
              eU(null),
              (async function (e, t, r, i, l) {
                let n,
                  s = e.get(I.Jp)
                if (null == s || !0 !== e.get(I.Zf) || (r ? !(0, A.wu)(r, s.userId) : !e.get(I.Vq)) || null != z(t))
                  throw Error("Skill draft cannot be saved")
                let a = {
                    id: r?.id,
                    name: t.name,
                    display_name: r?.display_name,
                    description: t.description,
                    instructions: t.instructions,
                    apply_resolution: i,
                    files: [],
                    file_contents: [],
                  },
                  o = () => e.get(I.Jp)?.accountId === s.accountId && e.get(I.Jp)?.userId === s.userId
                if (t.files.some(({ source: e }) => "local" === e.kind) && !e.get(I.oo))
                  throw Error("Skill upload permission required")
                a.file_contents = t.files.flatMap(({ path: e, source: t }) =>
                  "text" === t.kind ? [{ path: e, content: t.content }] : [],
                )
                let d = await Promise.all(
                  t.files.map(async ({ path: t, source: r }) => {
                    if ((l.throwIfAborted(), !o() || "text" === r.kind)) return null
                    if ("stored" === r.kind) return { ...r.reference, path: t }
                    let { uploads: i } = await E.Request.safePost("/hazelnuts/draft/uploads", {
                        additionalHeaders: { "ChatGPT-Account-ID": s.accountId },
                        requestBody: {
                          files: [{ filename: r.file.name, content_type: r.file.type || "application/octet-stream" }],
                        },
                        signal: l,
                      }),
                      n = i[0]
                    if (null == n) throw Error("Skill upload unavailable")
                    return o() &&
                      (await (0, N.uploadChatGptFileBytes)(e, {
                        file: r.file,
                        fileId: n.file_id,
                        fileName: r.file.name,
                        contentType: r.file.type || "application/octet-stream",
                        uploadUrl: n.upload_url,
                        signal: l,
                      }),
                      o())
                      ? (await E.Request.safePost("/hazelnuts/uploads/finish", {
                          additionalHeaders: { "ChatGPT-Account-ID": s.accountId },
                          requestBody: { file_id: n.file_id },
                          signal: l,
                        }),
                        { file_id: n.file_id, path: t })
                      : null
                  }),
                )
                if (((a.files = d.filter((e) => null != e)), l.throwIfAborted(), !o())) return null
                try {
                  n = await E.Request.safePost("/hazelnuts/draft", {
                    additionalHeaders: { "ChatGPT-Account-ID": s.accountId },
                    requestBody: a,
                    expectedErrorStatuses: [400, 401, 403, 404, 409, 413, 422],
                    signal: l,
                  })
                } catch (c) {
                  if (
                    !(c instanceof P.fk) ||
                    404 !== c.status ||
                    !r?.sediment_id ||
                    !t.files.some(({ source: e }) => "stored" === e.kind && e.reference.file_id === r.sediment_id)
                  )
                    throw c
                  if ((l.throwIfAborted(), !o())) return null
                  let e = await E.Request.safeGet("/hazelnuts/{hazelnut_id}", {
                    additionalHeaders: { "ChatGPT-Account-ID": s.accountId },
                    parameters: { path: { hazelnut_id: r.id }, query: { include_permissions: !0 } },
                    expectedErrorStatuses: [403, 404],
                    signal: l,
                  })
                  if ((l.throwIfAborted(), !o())) return null
                  if (
                    !e.sediment_id ||
                    e.sediment_id === r.sediment_id ||
                    e.permissions?.can_read === !1 ||
                    !(0, A.wu)(e, s.userId)
                  )
                    throw c
                  let i = d.map((i, l) => {
                    let { source: n } = t.files[l]
                    if ("stored" !== n.kind || n.reference.file_id !== r.sediment_id) return i
                    let s = e.files[n.reference.path]
                    if (null == s) throw c
                    return { file_id: e.sediment_id, path: t.files[l].path, range: s }
                  })
                  n = await E.Request.safePost("/hazelnuts/draft", {
                    additionalHeaders: { "ChatGPT-Account-ID": s.accountId },
                    requestBody: { ...a, files: i.filter((e) => null != e) },
                    expectedErrorStatuses: [400, 401, 403, 404, 409, 413, 422],
                    signal: l,
                  })
                }
                let c = n.hazelnuts[0]
                if (null == c) throw Error("Skill save returned no skill")
                let u = { ...c, permissions: c.permissions ?? r?.permissions },
                  p = ["browser-skills", s.accountId, s.userId]
                for (let t of (await e.queryClient.cancelQueries({ queryKey: p }),
                e.queryClient.setQueriesData({ queryKey: [...p, "collection"] }, (e) =>
                  e?.map((e) => (e.id === u.id ? u : e)),
                ),
                ["created", "installed"]))
                  ("created" === t ? u.creator_id === s.userId : u.enabled) &&
                    e.queryClient.setQueryData([...p, "collection", t], (e) => [
                      ...(e?.filter((e) => e.id !== u.id) ?? []),
                      u,
                    ])
                return (e.queryClient.setQueryData([...p, "detail", u.id], u),
                await e.queryClient.invalidateQueries({ queryKey: [...p, "editor", u.id], refetchType: "none" }),
                o())
                  ? ((0, D.yy)(e, r ? M.Qz : M.kI, { hazelnutId: u.id }), u)
                  : null
              })(eA, eq, e_, t, r.signal)
                .then((e) => {
                  if (null == e || r.signal.aborted) return
                  let t = {
                    ...eq,
                    name: e.name,
                    description: e.description,
                    files: eq.files.map((t) =>
                      "text" !== t.source.kind && e.sediment_id && e.files[t.path]
                        ? {
                            ...t,
                            source: {
                              kind: "stored",
                              reference: { file_id: e.sediment_id, path: t.path, range: e.files[t.path] },
                            },
                          }
                        : t,
                    ),
                  }
                  ;(eT(t),
                    eP(t),
                    eA.query.setData(T, e.id, { skill: e, draft: t }),
                    eA
                      .get(w.Id)
                      .success(
                        eC.formatMessage({
                          id: "browserSkills.editor.saved",
                          defaultMessage: "Skill saved",
                          description: "Success toast after creating or saving a skill in the browser editor",
                        }),
                      ),
                    e.id !== e_?.id &&
                      ((e4.current = !0),
                      eI(`/skills/editor/${encodeURIComponent(e.id)}`, {
                        replace: !0,
                        state: { initialTab: "skills" },
                      })))
                })
                .catch((e) => {
                  if (r.signal.aborted) return
                  let i = t ? null : (0, j.b)(e)
                  i ? eU(i) : eW(!0)
                })
                .finally(() => {
                  ;((e2.current = null), eR(!1))
                }))
          }),
          (ev[28] = e5),
          (ev[29] = eq),
          (ev[30] = eC),
          (ev[31] = eI),
          (ev[32] = eA),
          (ev[33] = e_),
          (ev[34] = e3),
          (ev[35] = $))
        : ($ = ev[35])
      let tr = $,
        ti = eq.instructions
      ;(eX && (ti = "text" === eX.source.kind ? eX.source.content : (eZ?.content ?? "")),
        ev[36] !== eS
          ? ((U = () => {
              ;((e4.current = !0), e2.current?.abort(), eS())
            }),
            (ev[36] = eS),
            (ev[37] = U))
          : (U = ev[37]))
      let tl = U
      ;(ev[38] !== e_
        ? ((V = e_
            ? (0, i.jsx)(o.A, {
                id: "browserSkills.editor.editTitle",
                defaultMessage: "Edit skill",
                description: "Title of the fullscreen browser editor for editing an existing skill",
              })
            : (0, i.jsx)(o.A, {
                id: "browserSkills.editor.createTitle",
                defaultMessage: "Create skill",
                description: "Title of the fullscreen browser editor for creating a skill manually",
              })),
          (ev[38] = e_),
          (ev[39] = V))
        : (V = ev[39]),
        ev[40] !== eM?.isWorkspace || ev[41] !== ez || ev[42] !== e_
          ? ((Q =
              e_ && eM?.isWorkspace
                ? (0, i.jsxs)(h.$, {
                    type: "button",
                    color: "outline",
                    size: "dialogAction",
                    disabled: ez,
                    onClick: () => eJ(!0),
                    children: [
                      (0, i.jsx)(m._Ui, {}),
                      (0, i.jsx)(o.A, {
                        id: "browserSkills.share",
                        defaultMessage: "Share",
                        description: "Open sharing controls for this skill",
                      }),
                    ],
                  })
                : null),
            (ev[40] = eM?.isWorkspace),
            (ev[41] = ez),
            (ev[42] = e_),
            (ev[43] = Q))
          : (Q = ev[43]))
      let tn = ez || !e_?.sediment_id || e_.permissions?.can_export === !1
      ;(ev[44] !== eL || ev[45] !== eA || ev[46] !== e_
        ? ((H = () => {
            e_ &&
              !eL &&
              (eO(!0),
              eG(!1),
              (0, _._d)(eA, e_)
                .catch(() => eG(!0))
                .finally(() => eO(!1)))
          }),
          (ev[44] = eL),
          (ev[45] = eA),
          (ev[46] = e_),
          (ev[47] = H))
        : (H = ev[47]),
        ev[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = (0, i.jsx)(m.EYt, {})),
            (Y = (0, i.jsx)(o.A, {
              id: "browserSkills.editor.downloadSkill",
              defaultMessage: "Download skill",
              description:
                "Secondary button in the browser skill editor that downloads the saved skill archive; disabled until the skill has been created",
            })),
            (ev[48] = Z),
            (ev[49] = Y))
          : ((Z = ev[48]), (Y = ev[49])),
        ev[50] !== eL || ev[51] !== tn || ev[52] !== H
          ? ((X = (0, i.jsxs)(h.$, {
              type: "button",
              color: "outline",
              size: "dialogAction",
              loading: eL,
              disabled: tn,
              onClick: H,
              children: [Z, Y],
            })),
            (ev[50] = eL),
            (ev[51] = tn),
            (ev[52] = H),
            (ev[53] = X))
          : (X = ev[53]))
      let ts = !e5 || ez || null != e3 || (null != e_ && !e8)
      ;(ev[54] !== e_
        ? ((ee = e_
            ? (0, i.jsx)(o.A, {
                id: "browserSkills.editor.save",
                defaultMessage: "Save changes",
                description: "Button saving changes to an existing browser skill",
              })
            : (0, i.jsx)(o.A, {
                id: "browserSkills.editor.create",
                defaultMessage: "Create",
                description: "Button saving a new browser skill",
              })),
          (ev[54] = e_),
          (ev[55] = ee))
        : (ee = ev[55]),
        ev[56] !== ez || ev[57] !== ts || ev[58] !== ee
          ? ((et = (0, i.jsx)(h.$, {
              type: "submit",
              color: "primary",
              size: "dialogAction",
              loading: ez,
              disabled: ts,
              children: ee,
            })),
            (ev[56] = ez),
            (ev[57] = ts),
            (ev[58] = ee),
            (ev[59] = et))
          : (et = ev[59]),
        ev[60] !== Q || ev[61] !== X || ev[62] !== et
          ? ((ei = (0, i.jsxs)("div", {
              className: "flex flex-wrap items-center justify-end gap-2",
              children: [Q, X, et],
            })),
            (ev[60] = Q),
            (ev[61] = X),
            (ev[62] = et),
            (ev[63] = ei))
          : (ei = ev[63]),
        ev[64] !== tr ? ((el = () => tr()), (ev[64] = tr), (ev[65] = el)) : (el = ev[65]),
        ev[66] !== eq
          ? ((en = (e) => {
              ;(eT({ ...eq, files: e }), eU(null))
            }),
            (ev[66] = eq),
            (ev[67] = en))
          : (en = ev[67]),
        ev[68] !== e5
          ? ((es = e5
              ? null
              : (0, i.jsx)("p", {
                  role: "alert",
                  children: (0, i.jsx)(o.A, {
                    id: "browserSkills.editor.readOnly",
                    defaultMessage: "You don't have permission to edit this skill",
                    description: "Explanation shown when the browser skill editor is read-only",
                  }),
                })),
            (ev[68] = e5),
            (ev[69] = es))
          : (es = ev[69]))
      let ta =
        null == eX
          ? (0, i.jsx)(x.t, {
              dividers: !1,
              children: (0, i.jsxs)("dl", {
                className: "@container p-4",
                children: [
                  (0, i.jsx)(f.l, {
                    label: (0, i.jsx)("label", {
                      htmlFor: `${eH}-name`,
                      children: (0, i.jsx)(o.A, {
                        id: "browserSkills.editor.name",
                        defaultMessage: "Name",
                        description: "Label for the unique skill name in the browser skill editor",
                      }),
                    }),
                    children: (0, i.jsx)(b.pd, {
                      id: `${eH}-name`,
                      autoFocus: !0,
                      value: eq.name,
                      placeholder: eC.formatMessage({
                        id: "browserSkills.editor.namePlaceholder",
                        defaultMessage: "your-skill-name",
                        description:
                          "Example name shown in the empty Name field of the browser skill editor; use lowercase words separated by hyphens to illustrate the required format",
                      }),
                      maxLength: 64,
                      disabled: !e5 || ez,
                      onChange: (e) => {
                        ;(eT({ ...eq, name: e.target.value }), eU(null))
                      },
                    }),
                  }),
                  (0, i.jsx)(f.l, {
                    label: (0, i.jsx)("label", {
                      htmlFor: `${eH}-description`,
                      children: (0, i.jsx)(o.A, {
                        id: "browserSkills.editor.description",
                        defaultMessage: "Description",
                        description: "Label for the skill description in the browser skill editor",
                      }),
                    }),
                    children: (0, i.jsxs)("div", {
                      className: "flex w-full flex-col gap-2",
                      children: [
                        (0, i.jsx)(b.TM, {
                          id: `${eH}-description`,
                          variant: "settings",
                          autoResize: !0,
                          rows: 1,
                          maxLength: 500,
                          value: eq.description,
                          "aria-invalid": e7,
                          "aria-describedby": `${eH}-description-count${e7 ? ` ${eH}-description-error` : ""}`,
                          placeholder: eC.formatMessage({
                            id: "browserSkills.editor.descriptionPlaceholder",
                            defaultMessage: "Describe what the skill does",
                            description:
                              "Placeholder prompting the author to describe the skill's purpose in the browser skill editor's empty Description field",
                          }),
                          disabled: !e5 || ez,
                          onChange: (e) => eT({ ...eq, description: e.target.value }),
                        }),
                        (0, i.jsx)("p", {
                          id: `${eH}-description-count`,
                          className: "text-xs text-secondary",
                          children: (0, i.jsx)(o.A, {
                            id: "browserSkills.editor.descriptionCharacterCount",
                            defaultMessage: "{count, number} / {limit, number} characters",
                            description:
                              "Current number of characters and maximum allowed characters in the skill description",
                            values: { count: eq.description.length, limit: 500 },
                          }),
                        }),
                        e7
                          ? (0, i.jsx)("p", {
                              id: `${eH}-description-error`,
                              role: "alert",
                              children: (0, i.jsx)(o.A, { ...eu.description, values: { limit: 500 } }),
                            })
                          : null,
                      ],
                    }),
                  }),
                ],
              }),
            })
          : null
      ev[70] === Symbol.for("react.memo_cache_sentinel")
        ? ((ep = (0, i.jsx)("h2", {
            className: "sr-only",
            children: (0, i.jsx)(o.A, {
              id: "browserSkills.editor.instructions",
              defaultMessage: "Instructions",
              description: "Label for the SKILL.md instructions in the browser skill editor",
            }),
          })),
          (ev[70] = ep))
        : (ep = ev[70])
      let to = eX && eZ?.status === "loading" ? (0, i.jsx)(g.y, {}) : null,
        td =
          eX && eZ?.status === "error"
            ? (0, i.jsxs)("div", {
                role: "alert",
                children: [
                  (0, i.jsx)(o.A, {
                    id: "browserSkills.editor.fileLoadFailed",
                    defaultMessage: "Couldn't load this file",
                    description: "Error in the browser skill editor when selecting a supporting file fails",
                  }),
                  (0, i.jsx)(h.$, {
                    type: "button",
                    color: "secondary",
                    onClick: () => te(eX),
                    children: (0, i.jsx)(o.A, {
                      id: "browserSkills.editor.retry",
                      defaultMessage: "Retry",
                      description: "Button retrying a failed browser skill editor load",
                    }),
                  }),
                ],
              })
            : null,
        tc =
          eX && !R(eX)
            ? (0, i.jsx)("p", {
                className: "text-secondary",
                children: (0, i.jsx)(o.A, {
                  id: "browserSkills.editor.downloadToView",
                  defaultMessage: "Use the file menu to download and view this file",
                  description: "Browser skill editor message when a selected binary file cannot be edited as text",
                }),
              })
            : null,
        tu =
          e0 && eZ?.status === "ready"
            ? (0, i.jsx)("div", {
                className: "flex flex-1 items-center justify-center overflow-auto p-3 text-sm",
                children: (0, i.jsx)(
                  p.t,
                  {
                    className: "max-h-96 w-full",
                    alt: eX.path,
                    svgString: ti,
                    onError: () => {
                      eY({ id: eX.id, content: null, status: "error" })
                    },
                  },
                  eX.id,
                ),
              })
            : null,
        tp =
          e0 || (null != eX && (eZ?.status !== "ready" || null == eZ.content))
            ? null
            : (0, i.jsx)("div", {
                className: "min-h-0 flex-1",
                inert: !e5 || ez,
                children: (0, i.jsx)(
                  u.ChatGptCodeBlockEditor,
                  {
                    code: ti,
                    placeholder:
                      null == eX
                        ? eC.formatMessage({
                            id: "browserSkills.editor.instructionsPlaceholder",
                            defaultMessage: "Write skill instructions…",
                            description:
                              "Placeholder in the empty SKILL.md text editor prompting the author to write the instructions ChatGPT should follow when using the skill",
                          })
                        : void 0,
                    language: null == eX ? "markdown" : eX.path.split(".").at(-1),
                    wrapLines: !0,
                    onBlur: ea,
                    onChange: (e) => {
                      e5 &&
                        !ez &&
                        eT(
                          null == eX
                            ? { ...eq, instructions: e }
                            : {
                                ...eq,
                                files: eq.files.map((t) =>
                                  t.id === eX.id ? { ...t, source: { kind: "text", content: e } } : t,
                                ),
                              },
                        )
                    },
                  },
                  eX?.id ?? "SKILL.md",
                ),
              })
      return (
        ev[71] !== ep || ev[72] !== to || ev[73] !== td || ev[74] !== tc || ev[75] !== tu || ev[76] !== tp
          ? ((eh = (0, i.jsxs)("section", {
              className: "flex min-h-0 flex-1 flex-col gap-2",
              children: [ep, to, td, tc, tu, tp],
            })),
            (ev[71] = ep),
            (ev[72] = to),
            (ev[73] = td),
            (ev[74] = tc),
            (ev[75] = tu),
            (ev[76] = tp),
            (ev[77] = eh))
          : (eh = ev[77]),
        ev[78] !== e6 || ev[79] !== eX
          ? ((ef =
              e6 && ("description" !== e6 || null != eX)
                ? (0, i.jsx)("p", { role: "alert", children: (0, i.jsx)(o.A, { ...eu[e6], values: { limit: 500 } }) })
                : null),
            (ev[78] = e6),
            (ev[79] = eX),
            (ev[80] = ef))
          : (ef = ev[80]),
        ev[81] !== eF
          ? ((em = eF
              ? (0, i.jsx)("p", {
                  role: "alert",
                  children: (0, i.jsx)(o.A, {
                    id: "browserSkills.editor.downloadFailed",
                    defaultMessage: "Couldn't download this skill. Try again.",
                    description:
                      "Error after the browser skill editor fails to download the saved skill archive; the author can retry using Download skill",
                  }),
                })
              : null),
            (ev[81] = eF),
            (ev[82] = em))
          : (em = ev[82]),
        ev[83] !== es || ev[84] !== ta || ev[85] !== eh || ev[86] !== ef || ev[87] !== em
          ? ((eg = (0, i.jsxs)("main", {
              className: "flex min-w-0 flex-1 flex-col gap-4 p-5 md:overflow-y-auto",
              children: [es, ta, eh, ef, em],
            })),
            (ev[83] = es),
            (ev[84] = ta),
            (ev[85] = eh),
            (ev[86] = ef),
            (ev[87] = em),
            (ev[88] = eg))
          : (eg = ev[88]),
        ev[89] !== eB || ev[90] !== e_
          ? ((eb = eB && e_ ? (0, i.jsx)(C.V, { skill: e_, onClose: () => eJ(!1) }) : null),
            (ev[89] = eB),
            (ev[90] = e_),
            (ev[91] = eb))
          : (eb = ev[91]),
        ev[92] !== e5 || ev[93] !== e$ || ev[94] !== tr || ev[95] !== ez
          ? ((ew = e$
              ? (0, i.jsx)(S.w, {
                  resolution: e$,
                  disabled: ez || !e5,
                  onCancel: () => eU(null),
                  onConfirm: () => tr(!0),
                })
              : null),
            (ev[92] = e5),
            (ev[93] = e$),
            (ev[94] = tr),
            (ev[95] = ez),
            (ev[96] = ew))
          : (ew = ev[96]),
        ev[97] === Symbol.for("react.memo_cache_sentinel") ? ((ey = () => eQ(!1)), (ev[97] = ey)) : (ey = ev[97]),
        ev[98] !== eV || ev[99] !== tl
          ? ((ek = (0, i.jsx)(v.D, { open: eV, onCancel: ey, onConfirm: tl })),
            (ev[98] = eV),
            (ev[99] = tl),
            (ev[100] = ek))
          : (ek = ev[100]),
        ev[101] !== eE || ev[102] !== e9
          ? ((ex = eE
              ? (0, i.jsx)(ec, { shouldBlock: () => !e4.current && e9, onDiscard: () => e2.current?.abort() })
              : null),
            (ev[101] = eE),
            (ev[102] = e9),
            (ev[103] = ex))
          : (ex = ev[103]),
        (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(er, {
              title: V,
              actions: ei,
              onClose: tt,
              onSubmit: el,
              children: (0, i.jsxs)("div", {
                className: "flex min-h-0 flex-1 flex-col overflow-y-auto md:flex-row md:overflow-hidden",
                children: [
                  (0, i.jsx)("aside", {
                    className:
                      "w-full shrink-0 border-e border-default bg-surface-secondary p-5 md:w-80 md:overflow-y-auto",
                    children: (0, i.jsx)(J, {
                      selectedId: eX?.id ?? null,
                      onSelect: te,
                      files: eq.files,
                      skill: e_,
                      disabled: !e5 || ez,
                      onChange: en,
                    }),
                  }),
                  eg,
                ],
              }),
            }),
            eb,
            ew,
            ek,
            ex,
          ],
        })
      )
    }
    function ea() {}
    function eo(e) {
      e.preventDefault()
    }
    function ed(e) {
      return e.text()
    }
    function ec(e) {
      let t,
        r = (0, l.c)(3),
        { shouldBlock: n, onDiscard: s } = e,
        a = (0, c.KP)(n)
      return (
        r[0] !== a || r[1] !== s
          ? ((t =
              "blocked" === a.state
                ? (0, i.jsx)(v.D, {
                    open: !0,
                    onCancel: () => a.reset(),
                    onConfirm: () => {
                      ;(s(), a.proceed())
                    },
                  })
                : null),
            (r[0] = a),
            (r[1] = s),
            (r[2] = t))
          : (t = r[2]),
        t
      )
    }
    let eu = (0, d.YK)({
      name: {
        id: "browserSkills.editor.invalidName",
        defaultMessage: "Use up to 64 lowercase letters, numbers, and single hyphens between words",
        description: "Skill-name validation error in the browser skill editor",
      },
      instructions: {
        id: "browserSkills.editor.missingInstructions",
        defaultMessage: "Add instructions before saving",
        description: "Validation error for empty instructions in the browser skill editor",
      },
      description: {
        id: "browserSkills.editor.descriptionLimit",
        defaultMessage: "Description must be {limit, number} characters or fewer",
        description: "Description-length validation error in the browser skill editor",
      },
      paths: {
        id: "browserSkills.editor.invalidPaths",
        defaultMessage: "Give each file a unique relative path. SKILL.md is reserved for instructions.",
        description:
          "Validation error for duplicate, absolute, or unsafe file paths in a browser skill draft; preserve SKILL.md",
      },
      save: {
        id: "browserSkills.editor.saveFailed",
        defaultMessage: "Couldn't save this skill. Your edits are still here; try again.",
        description: "Error after a browser skill save fails; assures the user that the draft remains available",
      },
    })
  },
  kcrg(e, t, r) {
    r.d(
      t,
      {},
      {
        n: function (e, t) {
          let r = new Map([["", []]])
          for (let t of e) {
            let e = t.path.split("/"),
              i = ""
            for (let t = 0; t < e.length - 1; t++) {
              let l = e[t],
                n = i ? `${i}/${l}` : l
              ;(r.has(n) || (r.set(n, []), r.get(i)?.push({ kind: "folder", path: n, name: l, depth: t })), (i = n))
            }
            r.get(i)?.push({ kind: "file", file: t, depth: e.length - 1 })
          }
          let i = [],
            l = (e) => {
              let n = r.get(e)
              for (let e of (n?.sort((e, t) => {
                if (e.kind !== t.kind) return "folder" === e.kind ? -1 : 1
                let r = "folder" === e.kind ? e.name : e.file.path,
                  i = "folder" === t.kind ? t.name : t.file.path
                return r.localeCompare(i, void 0, { numeric: !0, sensitivity: "base" })
              }),
              n ?? []))
                (i.push(e), "folder" !== e.kind || t.has(e.path) || l(e.path))
            }
          return (l(""), i)
        },
      },
    )
  },
  mv2N(e, t, r) {
    var i = r("zTeN"),
      l = r("Ghh3"),
      n = r("OWtl"),
      s = r("eShZ"),
      a = r("GDNt"),
      o = r("Wjli")
    let d = (0, i.vU)(n.u, ({ skill: e, path: t }, { get: r }) => {
      let i = r(o.Jp)
      return {
        queryKey: ["browser-skills", i?.accountId, i?.userId, "file", e.id, e.sediment_id, e.check_sum_hash, t],
        enabled: null != i && !0 === r(o.Zf) && e.permissions?.can_read !== !1,
        staleTime: 3e5,
        queryFn: async ({ signal: r }) => {
          if (null == i) throw Error("Skills account unavailable")
          let { bytes: l } = await c(i.accountId, e, t, r)
          return new TextDecoder().decode(l)
        },
      }
    })
    async function c(e, t, r, i) {
      try {
        return { skill: t, bytes: await u(e, t, r, i) }
      } catch (a) {
        if (!t.sediment_id || !(a instanceof s.fk) || 404 !== a.status) throw a
        i?.throwIfAborted()
        let n = await l.Request.safeGet("/hazelnuts/{hazelnut_id}", {
          additionalHeaders: { "ChatGPT-Account-ID": e },
          expectedErrorStatuses: [403, 404],
          parameters: { path: { hazelnut_id: t.id }, query: { include_permissions: !0 } },
          signal: i,
        })
        if (!n.sediment_id || n.sediment_id === t.sediment_id || n.permissions?.can_read === !1 || null == n.files[r])
          throw a
        return { skill: n, bytes: await u(e, n, r, i) }
      }
    }
    async function u(e, t, r, i) {
      if (!t.sediment_id)
        return (
          await a._n
            .getInstance()
            .fetch(`/hazelnuts/${encodeURIComponent(t.id)}/files/download`, {
              method: "POST",
              headers: { ...(0, l.Zj)(), "ChatGPT-Account-ID": e, "Content-Type": "application/json" },
              body: JSON.stringify({ path: r }),
              signal: i,
            })
        ).arrayBuffer()
      let n = t.files[r]
      if (null == n) throw Error("Skill file is missing")
      if (0 === n.length) return new ArrayBuffer(0)
      let { download_url: s } = await l.Request.safePost("/hazelnuts/{hazelnut_id}/files/get_download_link", {
        additionalHeaders: { "ChatGPT-Account-ID": e },
        parameters: { path: { hazelnut_id: t.id } },
        requestBody: { file_id: t.sediment_id },
        expectedErrorStatuses: [403, 404],
        signal: i,
      })
      if (!s) throw Error("Skill download URL is missing")
      let o = await a._n
          .getInstance()
          .fetch(s, { headers: { Range: `bytes=${n.start}-${n.start + n.length - 1}` }, signal: i }),
        d = await o.arrayBuffer()
      if (206 === o.status) {
        let e = o.headers.get("Content-Range")
        if (null != e) {
          let t = /^bytes (\d+)-(\d+)\/(?:\d+|\*)$/iu.exec(e)
          if (null == t || Number(t[1]) !== n.start || Number(t[2]) !== n.start + n.length - 1)
            throw Error("Mismatched skill file range")
        }
      } else if (200 === o.status) d = d.slice(n.start, n.start + n.length)
      else throw Error("Unexpected skill file response")
      if (d.byteLength !== n.length) throw Error("Incomplete skill file")
      return d
    }
    r.d(t, {}, { A: d, M: c })
  },
  TlTE(e, t, r) {
    let i = "system_699a14cbc6e4819181b9a89478de1733"
    r.d(
      t,
      {},
      {
        Dc: function (e, t) {
          return !e.surfaces?.length || e.surfaces.includes(t)
        },
        Fj: function (e) {
          return e.display_name?.trim() || e.name
        },
        eN: function (e, t) {
          return e.id !== i || t
        },
        sV: function (e, t) {
          if (!(Date.parse(e.updated_at) > Date.parse(t.enabledFrom)) || "approved" === e.safety_check_status)
            return null
          let r = e.safety_scan?.risk_score
          return null == r || Number.isNaN(r)
            ? null
            : r >= t.blockedScore
              ? "blocked"
              : r >= t.warningScore
                ? "needsReview"
                : null
        },
        wu: function (e, t) {
          return (
            !e.id.startsWith("system_") && (e.permissions?.can_write ?? (null != e.creator_id && e.creator_id === t))
          )
        },
        x1: i,
      },
    )
  },
  OZHl(e, t, r) {
    var i = r("ABep"),
      l = r("QosV"),
      n = r("zTeN"),
      s = r("zd8w"),
      a = r("Wf1j"),
      o = r("oyxz"),
      d = r("iFq6"),
      c = r("Ghh3"),
      u = r("OAko"),
      p = r("ygO2"),
      h = r("mUDD"),
      f = r("GO7r"),
      m = r("RNul"),
      g = r("AOG7"),
      b = r("OWtl"),
      w = r("Q81u"),
      y = r("iJG7"),
      k = r("Nt4a"),
      x = r("ENs9"),
      v = r("wuZu"),
      _ = r("FGv0"),
      j = r("TlTE"),
      S = r("Wjli")
    function A(e) {
      return !e.success
    }
    function C(e) {
      return e.target
    }
    function I(e) {
      return { id: `group:${e.id}`, label: e.name, target: { principal_type: "group", principal_id: e.id } }
    }
    function M(e) {
      return { id: `group:${e.id}`, label: e.name, target: { principal_type: "group", principal_id: e.id } }
    }
    function N(e) {
      return {
        id: `user:${e.account_user_id}`,
        colorKey: e.account_user_id,
        label: e.name || e.email || e.account_user_id,
        secondaryLabel: e.email ?? void 0,
        target: { principal_type: "user", principal_id: e.account_user_id },
      }
    }
    r.d(
      t,
      {},
      {
        V: function (e) {
          let t,
            r,
            E,
            D,
            P,
            q,
            T,
            z,
            R,
            L,
            O,
            F,
            G,
            B,
            J,
            K,
            W,
            $ = (0, l.c)(87),
            { skill: U, onClose: V } = e,
            Q = (0, n.gh)(b.u),
            H = (0, a.A)(),
            Z = (0, n.Ul)(S.Jp),
            Y = (0, n.Ul)(S.R),
            { data: X } = (0, u.YL)(),
            { data: ee, isError: et, refetch: er } = (0, n._U)(S.WT, U.id),
            { data: ei } = (0, n._U)(S.n1, U.id)
          $[0] !== ee?.principals || $[1] !== U.creator_id || $[2] !== U.creator_name || $[3] !== ei?.creator_name
            ? ((t =
                ee?.principals.find((e) => "user" === e.principal_type && e.principal_id === U.creator_id)?.name ||
                ei?.creator_name ||
                U.creator_name),
              ($[0] = ee?.principals),
              ($[1] = U.creator_id),
              ($[2] = U.creator_name),
              ($[3] = ei?.creator_name),
              ($[4] = t))
            : (t = $[4])
          let el = t,
            [en, es] = (0, s.useState)("")
          $[5] === Symbol.for("react.memo_cache_sentinel") ? ((r = []), ($[5] = r)) : (r = $[5])
          let [ea, eo] = (0, s.useState)(r),
            [ed, ec] = (0, s.useState)(!1),
            [eu, ep] = (0, s.useState)(!1),
            [eh, ef] = (0, s.useState)(!1),
            [em, eg] = (0, s.useState)(null),
            eb = ee?.workspace_access_state ?? "restricted",
            ew = Y.individuals && U.permissions?.can_share === !0,
            ey = Y.workspace && U.permissions?.can_share_workspace === !0,
            ek = Y.enableWorkspace && U.permissions?.can_enable_share === !0,
            ex = ew && "restricted" === eb ? en : "",
            { data: ev, isError: e_ } = (0, g.Nv)(ex),
            { data: ej, isError: eS } = (0, g.Nc)(ex),
            { data: eA, isError: eC } =
              (0, n._U)(d.l, Z?.accountId ?? "", { enabled: ew && "restricted" === eb }) ?? {},
            eI = X?.id === Z?.accountId ? X?.name : void 0,
            eM =
              null == ev && null == ej && null == eA
                ? void 0
                : [
                    ...(ev?.map(N) ?? []),
                    ...(ej?.map(M) ?? []),
                    ...(ew && "restricted" === eb && !eC
                      ? (eA ?? [])
                          .filter(
                            (e) =>
                              !ej?.some((t) => t.id === e.id) &&
                              e.name.toLocaleLowerCase().includes(ex.trim().toLocaleLowerCase()),
                          )
                          .map(I)
                      : []),
                  ].filter(
                    (e) =>
                      !ea.some((t) => t.id === e.id) &&
                      ("user" !== e.target.principal_type || e.target.principal_id !== U.creator_id) &&
                      !ee?.principals.some(
                        (t) => t.principal_type === e.target.principal_type && t.principal_id === e.target.principal_id,
                      ),
                  )
          $[6] !== Z || $[7] !== ed || $[8] !== Q
            ? ((E = async (e) => {
                if (
                  !ed &&
                  null != Z &&
                  !0 === Q.get(S.Zf) &&
                  Q.get(S.Jp)?.accountId === Z.accountId &&
                  Q.get(S.Jp)?.userId === Z.userId
                ) {
                  ;(ec(!0), ep(!1))
                  try {
                    await e()
                  } catch {
                    ep(!0)
                  }
                  ec(!1)
                }
              }),
              ($[6] = Z),
              ($[7] = ed),
              ($[8] = Q),
              ($[9] = E))
            : (E = $[9])
          let eN = E,
            eE = Z?.accountId ?? ""
          $[10] !== eE ? ((D = { "ChatGPT-Account-ID": eE }), ($[10] = eE), ($[11] = D)) : (D = $[11])
          let eD = D
          $[12] !== U.id ? ((P = { hazelnut_id: U.id }), ($[12] = U.id), ($[13] = P)) : (P = $[13])
          let eP = P
          $[14] !== eb || $[15] !== ew || $[16] !== eD || $[17] !== eP || $[18] !== er || $[19] !== eN || $[20] !== ea
            ? ((q = () => {
                ew &&
                  "restricted" === eb &&
                  0 !== ea.length &&
                  eN(async () => {
                    let e = await c.Request.safePost("/hazelnuts/{hazelnut_id}/share", {
                      additionalHeaders: eD,
                      parameters: { path: eP },
                      requestBody: { targets: ea.map(C) },
                    })
                    await er()
                    let t = e.attempts.filter(A)
                    if (
                      (eo(
                        ea.filter((e) =>
                          t.some(
                            (t) =>
                              t.principal_type === e.target.principal_type && t.principal_id === e.target.principal_id,
                          ),
                        ),
                      ),
                      t.length > 0)
                    )
                      throw Error("Some skill invitations failed")
                  })
              }),
              ($[14] = eb),
              ($[15] = ew),
              ($[16] = eD),
              ($[17] = eP),
              ($[18] = er),
              ($[19] = eN),
              ($[20] = ea),
              ($[21] = q))
            : (q = $[21])
          let eq = q
          $[22] !== eI
            ? ((T = (e) =>
                "restricted" === e
                  ? (0, i.jsx)(o.A, {
                      id: "browserSkills.sharing.invited",
                      defaultMessage: "Only those invited",
                      description: "Skill sharing access option limiting access to invited people or groups",
                    })
                  : "enabled" === e
                    ? eI
                      ? (0, i.jsx)(o.A, {
                          id: "browserSkills.sharing.enabled",
                          defaultMessage: "Installed for everyone at {workspaceName}",
                          description:
                            "Skill sharing scope that installs the skill for all workspace members; workspaceName is the active workspace display name",
                          values: { workspaceName: eI },
                        })
                      : (0, i.jsx)(o.A, {
                          id: "browserSkills.sharing.enabledFallback",
                          defaultMessage: "Installed for everyone in your workspace",
                          description:
                            "Skill sharing scope that installs the skill for all members when the workspace name is unavailable",
                        })
                    : eI
                      ? (0, i.jsx)(o.A, {
                          id: "browserSkills.sharing.workspace",
                          defaultMessage: "Anyone at {workspaceName}",
                          description:
                            "Skill sharing option making the skill discoverable by all members; workspaceName is the active workspace display name",
                          values: { workspaceName: eI },
                        })
                      : (0, i.jsx)(o.A, {
                          id: "browserSkills.sharing.workspaceFallback",
                          defaultMessage: "Anyone in your workspace",
                          description:
                            "Skill sharing option making the skill discoverable by all members when the workspace name is unavailable",
                        })),
              ($[22] = eI),
              ($[23] = T))
            : (T = $[23])
          let eT = T
          return (
            $[24] !== U ? ((z = (0, j.Fj)(U)), ($[24] = U), ($[25] = z)) : (z = $[25]),
            $[26] !== z
              ? ((R = (0, i.jsx)(o.A, {
                  id: "browserSkills.sharing.namedSkillTitle",
                  defaultMessage: "Share {name}",
                  description:
                    "Title of the dialog for managing who can access a skill; name is the skill's display name",
                  values: { name: z },
                })),
                ($[26] = z),
                ($[27] = R))
              : (R = $[27]),
            $[28] === Symbol.for("react.memo_cache_sentinel")
              ? ((L = (0, i.jsx)(o.A, {
                  id: "browserSkills.sharing.cancel",
                  defaultMessage: "Cancel",
                  description: "Close the skill sharing dialog without sending selected invitations",
                })),
                ($[28] = L))
              : (L = $[28]),
            $[29] !== V || $[30] !== ed
              ? ((O = (0, i.jsx)(
                  p.$,
                  { type: "button", color: "secondary", size: "detailAction", disabled: ed, onClick: V, children: L },
                  "cancel",
                )),
                ($[29] = V),
                ($[30] = ed),
                ($[31] = O))
              : (O = $[31]),
            $[32] !== eb ||
            $[33] !== ew ||
            $[34] !== eh ||
            $[35] !== ee ||
            $[36] !== et ||
            $[37] !== ed ||
            $[38] !== eN ||
            $[39] !== ea.length ||
            $[40] !== U.id
              ? ((F =
                  ea.length > 0
                    ? (0, i.jsx)(
                        p.$,
                        {
                          type: "submit",
                          color: "primary",
                          size: "detailAction",
                          loading: ed,
                          disabled: !ew || "restricted" !== eb || null == ee || et,
                          children: (0, i.jsx)(o.A, {
                            id: "browserSkills.sharing.invite",
                            defaultMessage: "Invite",
                            description: "Submit the selected people and groups for skill sharing",
                          }),
                        },
                        "invite",
                      )
                    : (0, i.jsxs)(
                        p.$,
                        {
                          type: "button",
                          color: "primary",
                          size: "detailAction",
                          disabled: ed,
                          onClick: () =>
                            void eN(async () => {
                              let e = new URL("/skills", window.location.origin)
                              if ((e.searchParams.set("skill_id", U.id), !(await (0, _.y2)(e.toString()))))
                                throw Error("Could not copy skill link")
                              ef(!0)
                            }),
                          children: [
                            (0, i.jsx)(f.DIB, {}),
                            eh
                              ? (0, i.jsx)(o.A, {
                                  id: "browserSkills.sharing.copied",
                                  defaultMessage: "Link copied",
                                  description: "Skill share link copied confirmation",
                                })
                              : (0, i.jsx)(o.A, {
                                  id: "browserSkills.sharing.copy",
                                  defaultMessage: "Copy link",
                                  description: "Copy a link to the skill without changing its access permissions",
                                }),
                          ],
                        },
                        "copy-link",
                      )),
                ($[32] = eb),
                ($[33] = ew),
                ($[34] = eh),
                ($[35] = ee),
                ($[36] = et),
                ($[37] = ed),
                ($[38] = eN),
                ($[39] = ea.length),
                ($[40] = U.id),
                ($[41] = F))
              : (F = $[41]),
            $[42] !== O || $[43] !== F ? ((G = [O, F]), ($[42] = O), ($[43] = F), ($[44] = G)) : (G = $[44]),
            $[45] !== eu || $[46] !== et || $[47] !== er
              ? ((B =
                  eu || et
                    ? (0, i.jsxs)(h.OO, {
                        children: [
                          (0, i.jsx)("p", {
                            role: "alert",
                            children: (0, i.jsx)(o.A, {
                              id: "browserSkills.sharing.error",
                              defaultMessage: "Couldn't update or load sharing. Please try again.",
                              description: "Skill sharing failed to load or save; the user can retry",
                            }),
                          }),
                          et
                            ? (0, i.jsx)(p.$, {
                                onClick: () => void er(),
                                children: (0, i.jsx)(o.A, {
                                  id: "browserSkills.retry",
                                  defaultMessage: "Retry",
                                  description: "Retry a failed skills request",
                                }),
                              })
                            : null,
                        ],
                      })
                    : null),
                ($[45] = eu),
                ($[46] = et),
                ($[47] = er),
                ($[48] = B))
              : (B = $[48]),
            $[49] !== ee || $[50] !== et
              ? ((J = null != ee || et ? null : (0, i.jsx)(h.OO, { children: (0, i.jsx)(m.y, {}) })),
                ($[49] = ee),
                ($[50] = et),
                ($[51] = J))
              : (J = $[51]),
            $[52] !== eb ||
            $[53] !== ek ||
            $[54] !== ew ||
            $[55] !== ey ||
            $[56] !== el ||
            $[57] !== ee ||
            $[58] !== eS ||
            $[59] !== eD ||
            $[60] !== Z?.accountId ||
            $[61] !== Z?.userId ||
            $[62] !== H ||
            $[63] !== et ||
            $[64] !== eM ||
            $[65] !== eP ||
            $[66] !== ed ||
            $[67] !== em ||
            $[68] !== en ||
            $[69] !== er ||
            $[70] !== eT ||
            $[71] !== eN ||
            $[72] !== Q ||
            $[73] !== ea ||
            $[74] !== U.creator_id ||
            $[75] !== eC ||
            $[76] !== e_
              ? ((K =
                  null == ee || et
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(h.OO, {
                            children: (0, i.jsx)(x.X, {
                              ariaLabel: H.formatMessage({
                                id: "browserSkills.sharing.people",
                                defaultMessage: "Add people or groups",
                                description: "Accessible label and placeholder for skill sharing recipient search",
                              }),
                              placeholder: H.formatMessage({
                                id: "browserSkills.sharing.people",
                                defaultMessage: "Add people or groups",
                                description: "Accessible label and placeholder for skill sharing recipient search",
                              }),
                              emptyMessage: (0, i.jsx)(o.A, {
                                id: "browserSkills.sharing.noMatches",
                                defaultMessage: "No people or groups found",
                                description: "No skill sharing recipients matched the search",
                              }),
                              disabled: !ew || ed || "restricted" !== eb,
                              query: en,
                              options: eM,
                              searchFailed: e_ || eS || eC,
                              selectedOptions: ea,
                              portalContainer: em,
                              onQueryChange: es,
                              onSelectOption: (e) => eo([...ea, e]),
                              onRemoveOption: (e) => eo(ea.filter((t) => t.id !== e.id)),
                              getRemoveLabel: (e) =>
                                H.formatMessage(
                                  {
                                    id: "browserSkills.sharing.removeRecipient",
                                    defaultMessage: "Remove {name}",
                                    description:
                                      "Accessible label to remove a selected skill sharing recipient before inviting them",
                                  },
                                  { name: e.label },
                                ),
                            }),
                          }),
                          (0, i.jsxs)(y.p, {
                            children: [
                              (0, i.jsx)(w.d, {
                                disabled: ed || (!ey && !ek),
                                value: eb,
                                renderLabel: eT,
                                options: [
                                  {
                                    value: "restricted",
                                    icon: (0, i.jsx)(f.$Rp, {}),
                                    disabled: !ey && "restricted" !== eb,
                                  },
                                  { value: "discoverable", icon: (0, i.jsx)(f.MEe, {}), disabled: !ey },
                                  { value: "enabled", icon: (0, i.jsx)(f.TlE, {}), hidden: !ek },
                                ],
                                onChange: (e) => {
                                  ;("enabled" !== e || ek) &&
                                    ("enabled" === e || ey) &&
                                    eN(async () => {
                                      ;(await c.Request.safePost("/hazelnuts/{hazelnut_id}/workspace-access", {
                                        additionalHeaders: eD,
                                        parameters: { path: eP },
                                        requestBody: { state: e },
                                      }),
                                        "restricted" !== e && eo([]),
                                        await Promise.all([
                                          er(),
                                          Q.queryClient.invalidateQueries({
                                            queryKey: ["browser-skills", Z?.accountId, Z?.userId, "collection"],
                                          }),
                                        ]))
                                    })
                                },
                              }),
                              ew || ey || ek
                                ? null
                                : (0, i.jsx)("p", {
                                    className: "text-sm text-codex-description",
                                    children: (0, i.jsx)(o.A, {
                                      id: "browserSkills.sharing.disabled",
                                      defaultMessage: "Sharing is disabled by workspace settings",
                                      description: "Explains why the skill sharing controls are read only",
                                    }),
                                  }),
                              (0, i.jsx)(v.h, {
                                colorKey: U.creator_id,
                                label: el || U.creator_id,
                                secondaryLabel: (0, i.jsx)(o.A, {
                                  id: "browserSkills.sharing.owner",
                                  defaultMessage: "Owner",
                                  description: "Skill owner role in sharing access list",
                                }),
                                trailingContent: null,
                              }),
                              ee.principals
                                .filter(
                                  (e) =>
                                    ("user" === e.principal_type || "group" === e.principal_type) &&
                                    ("user" !== e.principal_type || e.principal_id !== U.creator_id),
                                )
                                .map((e) =>
                                  (0, i.jsx)(
                                    v.h,
                                    {
                                      colorKey: "user" === e.principal_type ? e.principal_id : void 0,
                                      label: e.name,
                                      trailingContent: ew
                                        ? (0, i.jsx)(p.$, {
                                            color: "ghost",
                                            disabled: ed,
                                            onClick: () => {
                                              let t = e.principal_type
                                              ;("user" === t || "group" === t) &&
                                                eN(async () => {
                                                  if (
                                                    !(
                                                      await c.Request.safeDelete("/hazelnuts/{hazelnut_id}/share", {
                                                        additionalHeaders: eD,
                                                        parameters: { path: eP },
                                                        requestBody: {
                                                          principal_type: t,
                                                          principal_id: e.principal_id,
                                                        },
                                                      })
                                                    ).success
                                                  )
                                                    throw Error("Could not remove skill access")
                                                  await er()
                                                })
                                            },
                                            children: (0, i.jsx)(o.A, {
                                              id: "browserSkills.sharing.remove",
                                              defaultMessage: "Remove",
                                              description: "Remove an existing person's or group's access to the skill",
                                            }),
                                          })
                                        : null,
                                    },
                                    `${e.principal_type}:${e.principal_id}`,
                                  ),
                                ),
                            ],
                          }),
                        ],
                      })),
                ($[52] = eb),
                ($[53] = ek),
                ($[54] = ew),
                ($[55] = ey),
                ($[56] = el),
                ($[57] = ee),
                ($[58] = eS),
                ($[59] = eD),
                ($[60] = Z?.accountId),
                ($[61] = Z?.userId),
                ($[62] = H),
                ($[63] = et),
                ($[64] = eM),
                ($[65] = eP),
                ($[66] = ed),
                ($[67] = em),
                ($[68] = en),
                ($[69] = er),
                ($[70] = eT),
                ($[71] = eN),
                ($[72] = Q),
                ($[73] = ea),
                ($[74] = U.creator_id),
                ($[75] = eC),
                ($[76] = e_),
                ($[77] = K))
              : (K = $[77]),
            $[78] !== eq ||
            $[79] !== V ||
            $[80] !== ed ||
            $[81] !== R ||
            $[82] !== G ||
            $[83] !== B ||
            $[84] !== J ||
            $[85] !== K
              ? ((W = (0, i.jsxs)(k.I, {
                  title: R,
                  onClose: V,
                  onPortalContainerChange: eg,
                  isDismissalDisabled: ed,
                  onSubmit: eq,
                  footer: G,
                  children: [B, J, K],
                })),
                ($[78] = eq),
                ($[79] = V),
                ($[80] = ed),
                ($[81] = R),
                ($[82] = G),
                ($[83] = B),
                ($[84] = J),
                ($[85] = K),
                ($[86] = W))
              : (W = $[86]),
            W
          )
        },
      },
    )
  },
  Wjli(e, t, r) {
    var i = r("zTeN"),
      l = r("ASxG"),
      n = r("OiCI"),
      s = r("SPnB"),
      a = r("eFn4"),
      o = r("Ghh3"),
      d = r("OWtl"),
      c = r("OMIV"),
      u = r("TlTE")
    let p = (0, i.un)(d.u, ({ get: e }) => (e(c.RS) ? null : (e(c.M9)?.getDynamicConfig("3553340571") ?? null))),
      h = (0, i.un)(d.u, ({ get: e }) => {
        let t = e(c.RS) ? null : e(c.M9)?.getDynamicConfig("73506792"),
          r = l.number().int().positive().safeParse(t?.get("max_skill_upload_bytes"))
        return r.success ? r.data : 0x1900000
      }),
      f = (0, i.un)(d.u, ({ get: e }) => {
        let t = e(s.PO),
          r = e(n.tT)
        return t.authLoading ||
          t.accountLoading ||
          "chatgpt" !== t.authMethod ||
          null == r ||
          t.accountId !== r ||
          t.authenticatedAccountId !== r
          ? null
          : { accountId: r, userId: t.userId, isWorkspace: "workspace" === t.accountStructure }
      }),
      m = (0, i.un)(d.u, ({ get: e }) => {
        let t = e(p),
          r = e(f)
        if (null == t || null == r) return null
        if (!t.get("enable_api", !1)) return !1
        if (!r.isWorkspace) return !0
        let i = e(c.JW, "1355972088")
        if (i && !t.get("skills_rbac_enabled", !1)) return !0
        let { data: l, isLoading: n, isError: s } = e(a.Jk, r.accountId)
        return n
          ? null
          : i
            ? !s && null != l && l.permissions?.includes("chatgpt.workspace.skills.access") === !0
            : (l?.beta_settings.skills ?? !0)
      }),
      g = (0, i.un)(d.u, ({ get: e }) => {
        let t = e(p),
          r = l.union([l.number(), l.string()]).transform(Number).pipe(l.number())
        return {
          enabledFrom: t?.get("enable_safety_filter_date", "") ?? "",
          warningScore: r.catch(2).parse(t?.get("hazelnut_min_warning_safety_score")),
          blockedScore: r.catch(5).parse(t?.get("hazelnut_min_blocked_safety_score")),
        }
      }),
      b = (0, i.un)(d.u, ({ get: e }) => {
        if (!0 !== e(m)) return !1
        let t = e(f),
          r = e(p)
        return (
          !(t?.isWorkspace && e(c.JW, "1355972088") && r?.get("skills_rbac_enabled", !1) && e(c.JW, "2711242789")) ||
          e(a.Jk, t.accountId).data?.permissions?.includes("chatgpt.workspace.skills.create") === !0
        )
      }),
      w = (0, i.un)(d.u, ({ get: e }) => {
        if (!0 !== e(m)) return !1
        let t = e(f),
          r = e(p)
        return (
          !(
            t?.isWorkspace &&
            r?.get("enable_additional_rbac_permissions", !1) &&
            e(c.JW, "1355972088") &&
            r.get("skills_rbac_enabled", !1)
          ) || e(a.Jk, t.accountId).data?.permissions?.includes("chatgpt.workspace.skills.upload") === !0
        )
      }),
      y = (0, i.un)(d.u, ({ get: e }) => e(f)?.isWorkspace === !0 && e(p)?.get("skills_rbac_enabled", !1) === !0),
      k = (0, i.vU)(d.u, (e, { get: t }) => {
        let r = t(f),
          i = "workspace-shared" === e || "shared-personal" === e
        return {
          queryKey: ["browser-skills", r?.accountId, r?.userId, "collection", e],
          enabled: !0 === t(m) && null != r && (!i || r.isWorkspace) && ("shared-personal" !== e || t(y)),
          staleTime: 3e5,
          queryFn: async () => {
            if (null == r) throw Error("Skills account unavailable")
            return (
              await o.Request.safeGet("/hazelnuts", {
                additionalHeaders: { "ChatGPT-Account-ID": r.accountId },
                parameters: { query: { scope: e, include_permissions: "workspace-shared" !== e } },
              })
            ).hazelnuts
          },
        }
      }),
      x = (0, i.i1)(d.u, (e, { get: t }) => {
        if (!t(b)) return null
        let r = t(k, "installed"),
          i = r.data?.find(({ id: e }) => e === u.x1)
        return r.isSuccess &&
          null != i &&
          i.enabled &&
          (0, u.Dc)(i, "work" === e ? "tpp" : "chat") &&
          null == (0, u.sV)(i, t(g))
          ? i
          : null
      }),
      v = (0, i.i1)(d.u, (e, { get: t }) => {
        let r = t(x, e)
        return null == r || t(k, "installed").isFetching ? null : r
      }),
      _ = (0, i.vU)(d.u, (e, { get: t }) => {
        let r = t(f)
        return {
          queryKey: ["browser-skills", r?.accountId, r?.userId, "detail", e],
          enabled: !0 === t(m) && null != r,
          staleTime: 3e5,
          refetchOnMount: !0,
          queryFn: () => {
            if (null == r) throw Error("Skills account unavailable")
            return o.Request.safeGet("/hazelnuts/{hazelnut_id}", {
              additionalHeaders: { "ChatGPT-Account-ID": r.accountId },
              expectedErrorStatuses: [403, 404],
              parameters: { path: { hazelnut_id: e }, query: { include_permissions: !0 } },
            })
          },
        }
      }),
      j = (0, i.un)(d.u, ({ get: e }) => {
        let t = e(f),
          r = e(p),
          i = e(c.JW, "1355972088"),
          l = t?.isWorkspace ? e(a.Jk, t.accountId).data?.permissions : void 0,
          n = !i || l?.includes("chatgpt.workspace.skills.share") === !0,
          s =
            n &&
            (!i ||
              !r?.get("enable_additional_rbac_permissions", !1) ||
              l?.includes("chatgpt.workspace.skills.share_workspace") === !0)
        return {
          individuals: t?.isWorkspace === !0 && r?.get("skills_rbac_enabled", !1) === !0 && n,
          workspace: t?.isWorkspace === !0 && s,
          enableWorkspace:
            t?.isWorkspace === !0 && s && (!i || l?.includes("chatgpt.workspace.skills.access_share") === !0),
        }
      }),
      S = (0, i.un)(d.u, ({ get: e }) => {
        let t = e(m)
        if (!0 !== t) return t
        let r = e(f)
        return (
          !!r?.isWorkspace && (e(c.JW, "1355972088") && e(a.Jk, r.accountId).isPending ? null : e(b) && e(j).workspace)
        )
      }),
      A = (0, i.vU)(d.u, (e, { get: t }) => {
        let r = t(f)
        return {
          queryKey: ["browser-skills", r?.accountId, r?.userId, "shares", e],
          enabled: r?.isWorkspace === !0 && !0 === t(m),
          staleTime: 6e4,
          queryFn: () => {
            if (null == r) throw Error("Skills account unavailable")
            return o.Request.safeGet("/hazelnuts/{hazelnut_id}/share", {
              additionalHeaders: { "ChatGPT-Account-ID": r.accountId },
              parameters: { path: { hazelnut_id: e } },
            })
          },
        }
      })
    r.d(
      t,
      {},
      {
        F_: S,
        Jp: f,
        PB: v,
        R: j,
        Vq: b,
        WT: A,
        YE: g,
        Zf: m,
        bi: h,
        eJ: async function (e, t, r) {
          let i = e.get(f)
          if (null == i || !0 !== e.get(m) || (!r && t.id.startsWith("system_"))) return !1
          let l = r && null == t.permissions ? await e.query.getOrFetch(_, t.id) : t
          await o.Request.safePost("/hazelnuts/{hazelnut_id}/status", {
            additionalHeaders: { "ChatGPT-Account-ID": i.accountId },
            parameters: { path: { hazelnut_id: t.id } },
            requestBody: { enabled: r },
          })
          let n = ["browser-skills", i.accountId, i.userId]
          return (
            await e.queryClient.cancelQueries({ queryKey: n }),
            e.queryClient.setQueriesData({ queryKey: [...n, "collection"] }, (e) =>
              e?.map((e) => (e.id === t.id ? { ...e, enabled: r } : e)),
            ),
            e.queryClient.setQueryData([...n, "collection", "installed"], (e) =>
              r ? [...(e?.filter((e) => e.id !== t.id) ?? []), { ...l, enabled: r }] : e?.filter((e) => e.id !== t.id),
            ),
            e.queryClient.setQueryData([...n, "detail", t.id], (e) => (null == e ? void 0 : { ...e, enabled: r })),
            e.get(f)?.accountId === i.accountId && e.get(f)?.userId === i.userId
          )
        },
        h9: y,
        hx: async function (e, t) {
          let r = e.get(f)
          if (null == r || !0 !== e.get(m)) return
          let i = await o.Request.safePatch("/hazelnuts/{hazelnut_id}", {
              additionalHeaders: { "ChatGPT-Account-ID": r.accountId },
              parameters: { path: { hazelnut_id: t.id } },
              requestBody: { safety_check_status: "approved" },
            }),
            l = ["browser-skills", r.accountId, r.userId]
          ;(await e.queryClient.cancelQueries({ queryKey: l }),
            e.queryClient.setQueriesData({ queryKey: [...l, "collection"] }, (e) =>
              e?.map((e) => (e.id === t.id ? i : e)),
            ),
            e.queryClient.setQueryData([...l, "detail", t.id], i))
        },
        n1: _,
        oo: w,
        rR: k,
        sy: x,
      },
    )
  },
  odCE(e, t, r) {
    var i = r("ABep"),
      l = r("QosV"),
      n = r("oyxz"),
      s = r("RNul")
    r.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            r,
            a,
            o = (0, l.c)(5),
            { children: d } = e
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, i.jsx)(s.y, { className: "icon-xs shrink-0 text-secondary" })), (o[0] = t))
              : (t = o[0]),
            o[1] !== d
              ? ((r =
                  void 0 === d
                    ? (0, i.jsx)(n.A, {
                        id: "settings.panel.loading",
                        defaultMessage: "Loading settings…",
                        description: "Loading state shown while settings load",
                      })
                    : d),
                (o[1] = d),
                (o[2] = r))
              : (r = o[2]),
            o[3] !== r
              ? ((a = (0, i.jsxs)("div", {
                  className: "flex items-center gap-2 py-2 text-sm text-secondary",
                  role: "status",
                  children: [t, (0, i.jsx)("span", { className: "text-balance", children: r })],
                })),
                (o[3] = r),
                (o[4] = a))
              : (a = o[4]),
            a
          )
        },
      },
    )
  },
  bZug(e, t, r) {
    r.d(
      t,
      {},
      {
        r: "flex flex-col [&>*:not(:last-child)]:relative [&>*:not(:last-child)]:after:pointer-events-none [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:inset-x-4 [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-px [&>*:not(:last-child)]:after:bg-border [&>*:not(:last-child)]:after:content-['']",
        s: "flex flex-col [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border",
      },
    )
  },
  ZEx5(e, t, r) {
    r.d(t, { t: () => a })
    var i = r("ABep"),
      l = r("QosV"),
      n = r("on57"),
      s = r("bZug")
    function a(e) {
      let t,
        r,
        a,
        o = (0, l.c)(23),
        { children: d, className: c, contentOverflow: u, dividers: p, variant: h, decoration: f } = e,
        m = void 0 === h ? "default" : h,
        g = "flat" === m || "rows" === m ? s.s : s.r,
        b = void 0 === p || p ? g : "flex flex-col",
        w = "recommendation" === m && "rounded-[20px]",
        y = "recommendation" !== m && "flat" !== m && "rows" !== m && "outlinedLarge" !== m && "rounded-2xl",
        k = "outlinedLarge" === m && "rounded-[30px] border border-default bg-transparent",
        x = "daybreak" === f && "daybreak-VsXdEH",
        v = "visible" === (void 0 === u ? "hidden" : u) ? "overflow-visible" : "overflow-hidden",
        _ =
          "default" === m &&
          "border border-default group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border",
        j = "metered" === m && "ring-1 ring-inset ring-border-subtle",
        S = "secondary" === m && "bg-surface-secondary/92",
        A = "muted" === m && "bg-(--color-background-primary-soft-alpha)/50 dark:bg-primary-soft-alpha",
        C =
          "form" === m &&
          "border border-subtle bg-surface dark:bg-surface-secondary/92 group-data-[density=form]/settings:border-default group-data-[density=form]/settings:bg-transparent dark:group-data-[density=form]/settings:bg-transparent group-data-[density=form]/settings:[&>*:not(:last-child)]:after:inset-x-5 group-data-[density=form]/settings:[&>*:not(:last-child)]:after:h-px group-data-[density=form]/settings:[&>*:not(:last-child)]:after:bg-border-subtle",
        I = "outlined" === m && "border border-subtle bg-transparent",
        M =
          "flat" === m &&
          "relative bg-transparent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']",
        N = "input" === m && "border border-primary-outline bg-primary-soft",
        E = "recommendation" === m && "border border-default bg-secondary-soft dark:bg-transparent"
      return (
        o[0] !== c ||
        o[1] !== _ ||
        o[2] !== j ||
        o[3] !== S ||
        o[4] !== A ||
        o[5] !== C ||
        o[6] !== I ||
        o[7] !== M ||
        o[8] !== N ||
        o[9] !== E ||
        o[10] !== b ||
        o[11] !== w ||
        o[12] !== y ||
        o[13] !== k ||
        o[14] !== x ||
        o[15] !== v
          ? ((t = (0, n.A)(b, w, y, k, x, v, _, j, S, A, C, I, M, N, E, c)),
            (o[0] = c),
            (o[1] = _),
            (o[2] = j),
            (o[3] = S),
            (o[4] = A),
            (o[5] = C),
            (o[6] = I),
            (o[7] = M),
            (o[8] = N),
            (o[9] = E),
            (o[10] = b),
            (o[11] = w),
            (o[12] = y),
            (o[13] = k),
            (o[14] = x),
            (o[15] = v),
            (o[16] = t))
          : (t = o[16]),
        o[17] !== m
          ? ((r =
              "default" === m || "metered" === m
                ? { backgroundColor: "var(--color-background-panel, var(--color-background-primary-soft-alpha))" }
                : void 0),
            (o[17] = m),
            (o[18] = r))
          : (r = o[18]),
        o[19] !== d || o[20] !== t || o[21] !== r
          ? ((a = (0, i.jsx)("div", { className: t, style: r, children: d })),
            (o[19] = d),
            (o[20] = t),
            (o[21] = r),
            (o[22] = a))
          : (a = o[22]),
        a
      )
    }
  },
  CsDP(e, t, r) {
    var i = r("ABep"),
      l = r("QosV"),
      n = r("aoV0"),
      s = r("on57"),
      a = r("mUDD"),
      o = r("v0Gf")
    r.d(
      t,
      {},
      {
        c: function (e) {
          let t,
            r,
            d,
            c,
            u,
            p,
            h,
            f = (0, l.c)(32),
            {
              children: m,
              header: g,
              headerContent: b,
              footer: w,
              collapseEmptyContent: y,
              reserveSuggestionsSpace: k,
              variant: x,
              onSubmit: v,
            } = e,
            _ = void 0 !== k && k,
            j = void 0 === x ? "default" : x,
            S = void 0 !== y && y && null == m
          f[0] !== w || f[1] !== _
            ? ((t = _
                ? (0, i.jsx)("div", { "data-share-dialog-suggestions-space": !0, hidden: null == w, "aria-hidden": !0 })
                : null),
              (f[0] = w),
              (f[1] = _),
              (f[2] = t))
            : (t = f[2])
          let A = t
          f[3] !== m || f[4] !== g || f[5] !== b || f[6] !== S || f[7] !== A || f[8] !== j
            ? ((r = (0, i.jsx)(i.Fragment, {
                children:
                  "compact" === j
                    ? (0, i.jsxs)(o.Q, {
                        className: "relative -mx-5 -mt-2 flex min-h-0 flex-col",
                        fade: "divider",
                        scrollClassName: "min-h-0 overflow-y-auto overscroll-contain px-5 pt-2 pb-5",
                        children: [
                          g,
                          null != b && (0, i.jsx)("div", { className: "pt-5", children: b }),
                          null != m && (0, i.jsx)("div", { className: "pt-5", children: m }),
                          A,
                        ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsxs)("div", {
                            className: (0, s.A)(
                              "min-h-0 overflow-y-auto overscroll-contain",
                              "default" === j && "-mt-2 pt-2",
                            ),
                            children: [
                              (0, i.jsx)("div", {
                                className: (0, s.A)("sectioned" === j && "ps-6 pe-4 pt-4"),
                                children: g,
                              }),
                              null != b && (0, i.jsx)("div", { className: "px-6 pt-4 empty:hidden", children: b }),
                              S && A,
                            ],
                          }),
                          S
                            ? null
                            : (0, i.jsx)(o.Q, {
                                className: (0, s.A)(
                                  "relative flex flex-col",
                                  "default" === j && "-mx-5 min-h-24",
                                  "sectioned" === j && "min-h-0",
                                ),
                                fade: "divider",
                                scrollClassName: (0, s.A)(
                                  "min-h-0 overflow-y-auto overscroll-contain",
                                  "sectioned" === j && "px-6",
                                  "default" === j && "px-5",
                                ),
                                children: (0, i.jsxs)("div", {
                                  className: (0, s.A)(
                                    "sectioned" === j && (0, s.A)("pb-6", null == b ? "pt-4" : "pt-6"),
                                    "default" === j && "py-5",
                                  ),
                                  children: [m, A],
                                }),
                              }),
                        ],
                      }),
              })),
              (f[3] = m),
              (f[4] = g),
              (f[5] = b),
              (f[6] = S),
              (f[7] = A),
              (f[8] = j),
              (f[9] = r))
            : (r = f[9])
          let C = r,
            I = (_ || "compact" === j) && "grid-rows-[minmax(0,1fr)_auto]",
            M =
              !_ &&
              "compact" !== j &&
              (S ? "grid-rows-[minmax(0,max-content)_auto]" : "grid-rows-[minmax(0,max-content)_1fr_auto]")
          f[10] !== I || f[11] !== M
            ? ((d = (0, s.A)("grid grid-cols-1", I, M)), (f[10] = I), (f[11] = M), (f[12] = d))
            : (d = f[12])
          let N = null == v ? "div" : "form",
            E = "sectioned" === j ? "chatgpt" : "default"
          return (
            f[13] !== C || f[14] !== S || f[15] !== _ || f[16] !== j
              ? ((c = _
                  ? (0, i.jsx)("div", {
                      "data-share-dialog-content": !0,
                      className: (0, s.A)(
                        "min-h-0",
                        "compact" === j ? "flex flex-col" : "grid grid-cols-1",
                        "compact" !== j && !S && "grid-rows-[minmax(0,max-content)_1fr]",
                      ),
                      children: C,
                    })
                  : C),
                (f[13] = C),
                (f[14] = S),
                (f[15] = _),
                (f[16] = j),
                (f[17] = c))
              : (c = f[17]),
            f[18] !== w || f[19] !== j
              ? ((u =
                  "sectioned" === j && null != w && (0, i.jsx)(n.a.Footer, { className: "flex-wrap", children: w })),
                (f[18] = w),
                (f[19] = j),
                (f[20] = u))
              : (u = f[20]),
            f[21] !== w || f[22] !== j
              ? ((p =
                  "sectioned" !== j &&
                  (0, i.jsx)(a.Es, { className: "shrink-0 flex-wrap", expandSingleButton: !1, children: w })),
                (f[21] = w),
                (f[22] = j),
                (f[23] = p))
              : (p = f[23]),
            f[24] !== v || f[25] !== E || f[26] !== c || f[27] !== u || f[28] !== p || f[29] !== d || f[30] !== N
              ? ((h = (0, i.jsxs)(a.R4, {
                  className: d,
                  as: N,
                  size: "scrollable",
                  variant: E,
                  onSubmit: v,
                  children: [c, u, p],
                })),
                (f[24] = v),
                (f[25] = E),
                (f[26] = c),
                (f[27] = u),
                (f[28] = p),
                (f[29] = d),
                (f[30] = N),
                (f[31] = h))
              : (h = f[31]),
            h
          )
        },
      },
    )
  },
  FGv0(e, t, r) {
    var i = r("GaA7"),
      l = r("WFY2")
    let n = "text/plain"
    async function s(e) {
      try {
        return (await i.appServices.clipboard.writeText(e), !0)
      } catch (e) {
        l.v.warning("chatgpt_conversation_share_clipboard_write_failed", {
          safe: { method: "host" },
          sensitive: { error: e },
        })
      }
      let t = window.navigator.clipboard
      if (null == t) return !1
      let r = globalThis.ClipboardItem
      if (null != r && "function" == typeof t.write) {
        let i = new Blob([e], { type: n })
        try {
          return (await t.write([new r({ [n]: i })]), !0)
        } catch (e) {
          l.v.warning("chatgpt_conversation_share_clipboard_write_failed", {
            safe: { method: "clipboard-item" },
            sensitive: { error: e },
          })
        }
      }
      if ("function" != typeof t.writeText) return !1
      try {
        return (await t.writeText(e), !0)
      } catch (e) {
        return (
          l.v.warning("chatgpt_conversation_share_clipboard_write_failed", {
            safe: { method: "write-text" },
            sensitive: { error: e },
          }),
          !1
        )
      }
    }
    r.d(
      t,
      {},
      {
        Xm: async function (e, t) {
          let r = await e
          return (t?.throwIfAborted(), s(r))
        },
        y2: s,
      },
    )
  },
  Rxyo(e, t, r) {
    var i = r("zTeN"),
      l = r("CWeU"),
      n = r("OWtl"),
      s = r("Qg7S"),
      a = r("OMIV")
    let o = c(!0),
      d = c(!1)
    function c(e) {
      return (0, i.SZ)(
        n.u,
        () => !1,
        ({ get: t, set: r }) => {
          let i = t(a.M9),
            n = t(a.RS),
            o = t(l.PO),
            d = () => {
              let t = i?.getContext().user
              r(
                !n &&
                  !o.authLoading &&
                  "chatgpt" === o.authMethod &&
                  !0 === o.hasChatGptToken &&
                  null != o.authenticatedAccountId &&
                  null != o.authenticatedUserId &&
                  t?.userID === o.authenticatedUserId &&
                  t.custom?.account_id === o.authenticatedAccountId &&
                  i?.loadingStatus === "Ready" &&
                  (0, s.z)(i) &&
                  !0 === i.getExperiment("2727645498", { disableExposureLog: e }).get("enabled", !1),
              )
            }
          return (
            d(),
            i?.on("values_updated", d),
            () => {
              i?.off("values_updated", d)
            }
          )
        },
      )
    }
    r.d(t, {}, { A: d, y: o })
  },
  v7NL(e, t, r) {
    var i = r("QosV"),
      l = r("zd8w"),
      n = r("jDEJ"),
      s = r("bIvi")
    function a(e) {
      ;("function" == typeof e.preventDefault && e.preventDefault(),
        "function" == typeof e.stopPropagation && e.stopPropagation())
    }
    r.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            r,
            o,
            d,
            c,
            u,
            p,
            h,
            f,
            m,
            g,
            b,
            w,
            y,
            k,
            x,
            v,
            _,
            j = (0, i.c)(72),
            {
              items: S,
              isActive: A,
              getItemKey: C,
              onSelect: I,
              onHighlight: M,
              onEscape: N,
              autoHighlightFirst: E,
              clearHighlightOnMouseLeave: D,
              captureWindowKeydown: P,
              keyboardEventTarget: q,
              keyboardVariant: T,
              selectOnSpace: z,
              preserveHighlightOnItemsChange: R,
              numberShortcutCount: L,
              selectOnTab: O,
              requireKeyboardNavigationForSelection: F,
              shouldHandleKeyDown: G,
              highlightResetKey: B,
            } = e,
            J = void 0 === E || E,
            K = void 0 !== D && D,
            W = void 0 !== P && P,
            $ = void 0 === T ? "default" : T,
            U = void 0 !== R && R,
            V = void 0 === L ? 0 : L,
            Q = void 0 !== O && O,
            H = void 0 !== F && F
          j[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, n.Z)()), (j[0] = t)) : (t = j[0])
          let Z = t,
            Y = (0, l.useRef)(null),
            X = (0, l.useRef)(null),
            ee = (0, l.useRef)(!1),
            et = (0, l.useRef)(!1),
            er = (0, l.useRef)(null),
            ei = null == S ? 0 : S.length,
            [el, en] = (0, l.useState)(J && ei > 0 ? 0 : -1),
            es = A && el >= 0 && el < ei ? (S?.[el] ?? null) : null
          j[1] !== C || j[2] !== es
            ? ((r = null == es ? null : (C?.(es) ?? es)), (j[1] = C), (j[2] = es), (j[3] = r))
            : (r = j[3])
          let ea = r
          j[4] !== S || j[5] !== M
            ? ((o = (e) => {
                M?.(S?.[e] ?? null, e)
              }),
              (j[4] = S),
              (j[5] = M),
              (j[6] = o))
            : (o = j[6])
          let eo = (0, l.useEffectEvent)(o)
          ;(j[7] !== J ||
          j[8] !== C ||
          j[9] !== B ||
          j[10] !== el ||
          j[11] !== A ||
          j[12] !== S ||
          j[13] !== ei ||
          j[14] !== U
            ? ((d = () => {
                let e = er.current?.items,
                  t = null != er.current && er.current.highlightResetKey !== B
                ;(!A || t) && (et.current = !1)
                let r = !0 === U || ("user" === U && et.current),
                  i =
                    null == B || "user" === U
                      ? null != e && (t || null == S || e.length !== ei || e.some((e, t) => e !== S[t]))
                      : null != er.current && er.current.highlightResetKey !== B
                if (((er.current = { items: S, highlightResetKey: B }), !A || 0 === ei)) {
                  ;((ee.current = !1), -1 !== el && en(-1))
                  return
                }
                if (el >= 0 && el < ei && ((r && null == C) || !i)) return
                let l = e?.[el],
                  n = r && null != C && null != l ? (S?.findIndex((e) => C(e) === C(l)) ?? -1) : -1,
                  s = J ? 0 : -1
                ;(n >= 0 ? (s = n) : i && (ee.current = !1), el !== s && en(s))
              }),
              (c = [J, C, B, el, A, S, ei, U]),
              (j[7] = J),
              (j[8] = C),
              (j[9] = B),
              (j[10] = el),
              (j[11] = A),
              (j[12] = S),
              (j[13] = ei),
              (j[14] = U),
              (j[15] = d),
              (j[16] = c))
            : ((d = j[15]), (c = j[16])),
            (0, l.useEffect)(d, c),
            j[17] !== el || j[18] !== ea || j[19] !== eo
              ? ((u = () => {
                  null == ea ? eo(-1) : eo(el)
                }),
                (j[17] = el),
                (j[18] = ea),
                (j[19] = eo),
                (j[20] = u))
              : (u = j[20]),
            j[21] !== el || j[22] !== ea ? ((p = [el, ea]), (j[21] = el), (j[22] = ea), (j[23] = p)) : (p = j[23]),
            (0, l.useEffect)(u, p),
            j[24] !== el || j[25] !== A || j[26] !== ei
              ? ((h = () => {
                  let e = X.current === el
                  if (((X.current = null), !A || e || el < 0 || el >= ei)) return
                  let t = Y.current
                  if (!t) return
                  let r = t.querySelectorAll('[data-list-navigation-item="true"]').item(el)
                  r?.scrollIntoView({ block: "nearest" })
                }),
                (f = [el, A, ei]),
                (j[24] = el),
                (j[25] = A),
                (j[26] = ei),
                (j[27] = h),
                (j[28] = f))
              : ((h = j[27]), (f = j[28])),
            (0, l.useEffect)(h, f),
            j[29] !== S || j[30] !== ei || j[31] !== I
              ? ((m = (e) => {
                  let t = null != S && e >= 0 && e < ei ? S[e] : void 0
                  t && ((ee.current = !1), en(e), I(t, e))
                }),
                (j[29] = S),
                (j[30] = ei),
                (j[31] = I),
                (j[32] = m))
              : (m = j[32]))
          let ed = (0, s.K)(m)
          j[33] !== el || j[34] !== A || j[35] !== ei
            ? ((g = (e) => {
                ;((ee.current = !1),
                  A && e >= 0 && e < ei && (et.current = !0),
                  A && e >= 0 && e < ei && e !== el && ((X.current = e), en(e)))
              }),
              (j[33] = el),
              (j[34] = A),
              (j[35] = ei),
              (j[36] = g))
            : (g = j[36])
          let ec = (0, s.K)(g)
          j[37] !== ei
            ? ((b = (e) => {
                ;((ee.current = !0),
                  (et.current = !0),
                  (X.current = null),
                  en((t) => {
                    if (0 === ei) return -1
                    if (t < 0) return e >= 0 ? 0 : ei - 1
                    if (ei <= 0) return -1
                    let r = (t + e) % ei
                    return r < 0 ? r + ei : r
                  }))
              }),
              (j[37] = ei),
              (j[38] = b))
            : (b = j[38])
          let eu = b
          j[39] !== J ||
          j[40] !== el ||
          j[41] !== es ||
          j[42] !== A ||
          j[43] !== ei ||
          j[44] !== $ ||
          j[45] !== eu ||
          j[46] !== V ||
          j[47] !== N ||
          j[48] !== H ||
          j[49] !== ed ||
          j[50] !== z ||
          j[51] !== Q ||
          j[52] !== G
            ? ((w = (e) => {
                if (!A) return !1
                let t = "nativeEvent" in e ? e.nativeEvent : e
                if (G?.(t) === !1 || t.isComposing || 229 === t.keyCode) return !1
                let { key: r } = e
                if (0 === ei) return "Escape" === r && !!N && (N(), a(e), !0)
                if ("ArrowDown" === r || (Z && e.ctrlKey && "n" === r)) return (eu(1), a(e), !0)
                if ("ArrowUp" === r || (Z && e.ctrlKey && "p" === r)) return (eu(-1), a(e), !0)
                if (V > 0 && !e.ctrlKey && !e.metaKey && !e.altKey && /^[1-3]$/.test(r) && Number(r) <= Math.min(V, ei))
                  return (ed(Number(r) - 1), a(e), !0)
                if (
                  !e.altKey &&
                  !e.ctrlKey &&
                  !e.metaKey &&
                  !e.shiftKey &&
                  ("Enter" === r ||
                    ((Q || "chatgpt" === $) && "Tab" === r) ||
                    ("chatgpt" === $ && " " === r && null != es && z?.(es)))
                ) {
                  if (H && !ee.current) return !1
                  let t = el >= 0 ? el : J ? 0 : -1
                  return t >= 0 && t < ei && (ed(t), a(e), !0)
                }
                return "Escape" === r
                  ? !!N && (N(), a(e), !0)
                  : (!H ||
                      (1 !== r.length && "Backspace" !== r && "Delete" !== r) ||
                      e.metaKey ||
                      e.ctrlKey ||
                      e.altKey ||
                      ((ee.current = !1), en(-1)),
                    !1)
              }),
              (j[39] = J),
              (j[40] = el),
              (j[41] = es),
              (j[42] = A),
              (j[43] = ei),
              (j[44] = $),
              (j[45] = eu),
              (j[46] = V),
              (j[47] = N),
              (j[48] = H),
              (j[49] = ed),
              (j[50] = z),
              (j[51] = Q),
              (j[52] = G),
              (j[53] = w))
            : (w = j[53])
          let ep = w
          ;(j[54] !== W || j[55] !== ep || j[56] !== A || j[57] !== q || j[58] !== H
            ? ((y = () => {
                if (!W || !A) return
                let e = (e) => {
                    ep(e)
                  },
                  t = () => {
                    ;((ee.current = !1), en(-1))
                  },
                  r = q ?? window
                return (
                  r.addEventListener("keydown", e, !0),
                  H &&
                    (r.addEventListener("beforeinput", t, !0),
                    r.addEventListener("compositionstart", t, !0),
                    r.addEventListener("paste", t, !0)),
                  () => {
                    ;(r.removeEventListener("keydown", e, !0),
                      r.removeEventListener("beforeinput", t, !0),
                      r.removeEventListener("compositionstart", t, !0),
                      r.removeEventListener("paste", t, !0))
                  }
                )
              }),
              (k = [W, ep, A, q, H]),
              (j[54] = W),
              (j[55] = ep),
              (j[56] = A),
              (j[57] = q),
              (j[58] = H),
              (j[59] = y),
              (j[60] = k))
            : ((y = j[59]), (k = j[60])),
            (0, l.useEffect)(y, k),
            j[61] !== ep
              ? ((x = (e) => {
                  let t = void 0 === e ? {} : e
                  return {
                    onKeyDown: (e) => {
                      ep(e) || t.onKeyDown?.(e)
                    },
                  }
                }),
                (j[61] = ep),
                (j[62] = x))
              : (x = j[62]))
          let eh = x
          j[63] !== K || j[64] !== ec || j[65] !== ed
            ? ((v = (e, t) => {
                let r = void 0 === t ? {} : t
                return {
                  onClick: (t) => {
                    ;(ed(e), r.onClick?.(t))
                  },
                  onMouseMove: (t) => {
                    ;(ec(e), r.onMouseMove?.(t))
                  },
                  onMouseLeave: () => {
                    K && ((ee.current = !1), en(-1))
                  },
                  "data-list-navigation-item": "true",
                }
              }),
              (j[63] = K),
              (j[64] = ec),
              (j[65] = ed),
              (j[66] = v))
            : (v = j[66])
          let ef = v
          return (
            j[67] !== eh || j[68] !== ef || j[69] !== ep || j[70] !== el
              ? ((_ = {
                  highlightedIndex: el,
                  setHighlightedIndex: en,
                  listRef: Y,
                  handleKeyDown: ep,
                  getInputProps: eh,
                  getItemProps: ef,
                }),
                (j[67] = eh),
                (j[68] = ef),
                (j[69] = ep),
                (j[70] = el),
                (j[71] = _))
              : (_ = j[71]),
            _
          )
        },
      },
    )
  },
  WGha(e, t, r) {
    var i = r("ABep"),
      l = r("QosV"),
      n = r("oyxz"),
      s = r("ygO2"),
      a = r("JNtf"),
      o = r("mUDD")
    r.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            r,
            d,
            c,
            u,
            p,
            h,
            f,
            m,
            g,
            b = (0, l.c)(18),
            { onCancel: w, onConfirm: y, open: k } = e
          return k
            ? (b[0] !== w
                ? ((t = (e) => {
                    e || w()
                  }),
                  (b[0] = w),
                  (b[1] = t))
                : (t = b[1]),
              b[2] !== y
                ? ((r = (e) => {
                    ;(e.preventDefault(), y())
                  }),
                  (b[2] = y),
                  (b[3] = r))
                : (r = b[3]),
              b[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((d = (0, i.jsx)(a.L3, {
                    children: (0, i.jsx)(n.A, {
                      id: "codex.writingBlock.confirmCloseTitle",
                      defaultMessage: "Close editor?",
                      description:
                        "Title of the confirmation dialog when leaving an expanded writing block with pending AI edits.",
                    }),
                  })),
                  (b[4] = d))
                : (d = b[4]),
              b[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((c = (0, i.jsx)(o.OO, {
                    children: (0, i.jsx)(o.c7, {
                      title: d,
                      subtitle: (0, i.jsx)(a.rr, {
                        children: (0, i.jsx)(n.A, {
                          id: "codex.writingBlock.confirmClosePendingEdits",
                          defaultMessage: "You have pending edits - are you sure you want to close?",
                          description:
                            "Confirmation before closing or replacing an expanded writing block with an in-progress or unresolved AI edit, matching ChatGPT.",
                        }),
                      }),
                    }),
                  })),
                  (b[5] = c))
                : (c = b[5]),
              b[6] === Symbol.for("react.memo_cache_sentinel")
                ? ((u = (0, i.jsx)(n.A, {
                    id: "codex.writingBlock.confirmCloseCancel",
                    defaultMessage: "Cancel",
                    description: "Cancel leaving an expanded writing block with pending AI edits.",
                  })),
                  (b[6] = u))
                : (u = b[6]),
              b[7] !== w
                ? ((p = (0, i.jsx)(s.$, { color: "outline", onClick: w, type: "button", children: u })),
                  (b[7] = w),
                  (b[8] = p))
                : (p = b[8]),
              b[9] === Symbol.for("react.memo_cache_sentinel")
                ? ((h = (0, i.jsx)(s.$, {
                    color: "primary",
                    type: "submit",
                    children: (0, i.jsx)(n.A, {
                      id: "codex.writingBlock.confirmCloseConfirm",
                      defaultMessage: "Close",
                      description: "Confirm leaving an expanded writing block with pending AI edits.",
                    }),
                  })),
                  (b[9] = h))
                : (h = b[9]),
              b[10] !== p
                ? ((f = (0, i.jsx)(o.OO, { children: (0, i.jsxs)(o.Es, { children: [p, h] }) })),
                  (b[10] = p),
                  (b[11] = f))
                : (f = b[11]),
              b[12] !== r || b[13] !== f
                ? ((m = (0, i.jsxs)(o.R4, { as: "form", onSubmit: r, children: [c, f] })),
                  (b[12] = r),
                  (b[13] = f),
                  (b[14] = m))
                : (m = b[14]),
              b[15] !== t || b[16] !== m
                ? ((g = (0, i.jsx)(a.lG, { open: !0, onOpenChange: t, size: "compact", children: m })),
                  (b[15] = t),
                  (b[16] = m),
                  (b[17] = g))
                : (g = b[17]),
              g)
            : null
        },
      },
    )
  },
}
//# sourceMappingURL=473177.a69adbc5b9.js.map
