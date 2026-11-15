export const __rspack_esm_ids = [141666]
export const __webpack_modules__ = {
  jyI9(e, t) {
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
      n = r("jyI9")
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
      s = r("Sm6l"),
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
      h = r("Sm6l"),
      f = r("CtJU"),
      m = r("bVeK"),
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
      K = r("kcrg")
    function B(e) {
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
        [B, U] = (0, s.useState)(null)
      if (
        v[0] !== E ||
        v[1] !== z ||
        v[2] !== S ||
        v[3] !== L ||
        v[4] !== B ||
        v[5] !== _ ||
        v[6] !== N ||
        v[7] !== C ||
        v[8] !== M ||
        v[9] !== A ||
        v[10] !== j ||
        v[11] !== q
      ) {
        let e, l, n, s, a, k, x, I, W, V, H, Z, Y, X, ee, et, er
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
              r.some(J)
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
          v[48] !== N ? ((H = N.formatMessage(Q.fileInput)), (v[48] = N), (v[49] = H)) : (H = v[49]),
          v[50] !== ea
            ? ((Z = (e) => {
                ;(ea(e.target.files, !1), (e.target.value = ""))
              }),
              (v[50] = ea),
              (v[51] = Z))
            : (Z = v[51]),
          v[52] !== H || v[53] !== Z
            ? ((y = (0, i.jsx)("input", {
                ref: D,
                hidden: !0,
                type: "file",
                multiple: !0,
                "aria-label": H,
                onChange: Z,
              })),
              (v[52] = H),
              (v[53] = Z),
              (v[54] = y))
            : (y = v[54]),
          v[55] === Symbol.for("react.memo_cache_sentinel")
            ? ((Y = (e) => {
                ;((P.current = e), e?.setAttribute("webkitdirectory", ""))
              }),
              (v[55] = Y))
            : (Y = v[55]),
          v[56] !== N ? ((X = N.formatMessage(Q.folderInput)), (v[56] = N), (v[57] = X)) : (X = v[57]),
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
        let eo = null == A || "" === B
        ;(v[67] !== M ? ((er = () => M(null)), (v[67] = M), (v[68] = er)) : (er = v[68]),
          v[69] !== eo || v[70] !== er
            ? ((f = (0, i.jsx)(F.H, { label: "SKILL.md", icon: et, isActive: eo, onPress: er })),
              (v[69] = eo),
              (v[70] = er),
              (v[71] = f))
            : (f = v[71]),
          (g = (0, K.n)(_, z).map((e) =>
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
                    isActive: B === e.path,
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
          (v[4] = B),
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
    function J(e) {
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
      let K = d
      return (
        f[6] !== w ||
        f[7] !== x ||
        f[8] !== K ||
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
                  "aria-label": N.formatMessage(Q.filePath),
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
                    onClick: H,
                    onKeyDown: V,
                    onPointerDown: U,
                    children: (0, i.jsxs)(O.Ab, {
                      align: "end",
                      triggerButton: (0, i.jsx)(h.$, {
                        type: "button",
                        color: "ghostActive",
                        size: "iconCircle",
                        disabled: P,
                        "aria-label": N.formatMessage(Q.fileActions, { path: g.path }),
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
                          onSelect: K,
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
            (f[8] = K),
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
    function H(e) {
      return e.stopPropagation()
    }
    let Q = (0, d.YK)({
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
        K,
        J,
        W,
        $,
        U,
        V,
        H,
        Q,
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
        ev,
        e_,
        ej,
        eS,
        eA,
        eC,
        eI,
        eM,
        eN,
        eE,
        eD,
        eP = (0, l.c)(160),
        { skill: eq, initialDraft: eT, onClose: ez } = e,
        eR = (0, n.gh)(k.u),
        eL = (0, a.A)(),
        eO = (0, c.Zp)(),
        eF = (0, n.Ul)(I.Jp),
        eG = (0, n.Ul)(I.Vq),
        eK = (0, s.useContext)(c.hf),
        [eB, eJ] = (0, s.useState)(eT),
        [eW, e$] = (0, s.useState)(eT),
        [eU, eV] = (0, s.useState)(!1),
        [eH, eQ] = (0, s.useState)(!1),
        [eZ, eY] = (0, s.useState)(!1),
        [eX, e0] = (0, s.useState)(!1),
        [e1, e2] = (0, s.useState)(!1),
        [e4, e5] = (0, s.useState)(null),
        [e3, e6] = (0, s.useState)(!1),
        e7 = (0, s.useId)(),
        [e8, e9] = (0, s.useState)(null)
      if (eP[0] !== eW.files || eP[1] !== e8?.id) {
        let e
        ;(eP[4] !== e8?.id ? ((e = (e) => e.id === e8?.id), (eP[4] = e8?.id), (eP[5] = e)) : (e = eP[5]),
          (r = null != (t = eW.files.find(e)) && "svg" === (0, y.Zo)(t.path)),
          (eP[0] = eW.files),
          (eP[1] = e8?.id),
          (eP[2] = t),
          (eP[3] = r))
      } else ((t = eP[2]), (r = eP[3]))
      let te = r,
        tt = (0, s.useRef)(null),
        tr = (0, s.useRef)(null),
        ti = (0, s.useRef)(!1)
      eP[6] !== eG || eP[7] !== eF?.userId || eP[8] !== eq
        ? ((d = eq ? (0, A.wu)(eq, eF?.userId) : eG), (eP[6] = eG), (eP[7] = eF?.userId), (eP[8] = eq), (eP[9] = d))
        : (d = eP[9])
      let tl = d
      eP[10] !== eW ? ((q = z(eW)), (eP[10] = eW), (eP[11] = q)) : (q = eP[11])
      let tn = q,
        ts = eW.description.length > 500,
        ta = tn ?? (e1 ? "save" : null)
      eP[12] !== eB.description ||
      eP[13] !== eB.files ||
      eP[14] !== eB.instructions ||
      eP[15] !== eB.name ||
      eP[16] !== eW.description ||
      eP[17] !== eW.files ||
      eP[18] !== eW.instructions ||
      eP[19] !== eW.name
        ? ((O =
            eW.name !== eB.name ||
            eW.description !== eB.description ||
            eW.instructions !== eB.instructions ||
            eW.files.length !== eB.files.length ||
            eW.files.some((e, t) => e.path !== eB.files[t].path || e.source !== eB.files[t].source)),
          (eP[12] = eB.description),
          (eP[13] = eB.files),
          (eP[14] = eB.instructions),
          (eP[15] = eB.name),
          (eP[16] = eW.description),
          (eP[17] = eW.files),
          (eP[18] = eW.instructions),
          (eP[19] = eW.name),
          (eP[20] = O))
        : (O = eP[20])
      let to = O,
        td = to || eU
      eP[21] !== eR || eP[22] !== eq
        ? ((F = (e) => {
            if ((tt.current?.abort(), null == e)) return void e9(null)
            if ("text" === e.source.kind || !R(e))
              return void e9({ id: e.id, status: "ready", content: "text" === e.source.kind ? e.source.content : null })
            let t = new AbortController()
            ;((tt.current = t),
              e9({ id: e.id, content: null, status: "loading" }),
              L(eR, e, eq, t.signal)
                .then(ed)
                .then((r) => {
                  t.signal.aborted || e9({ id: e.id, content: r, status: "ready" })
                })
                .catch(() => {
                  t.signal.aborted || e9({ id: e.id, content: null, status: "error" })
                }))
          }),
          (eP[21] = eR),
          (eP[22] = eq),
          (eP[23] = F))
        : (F = eP[23])
      let tc = F
      ;(eP[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = () => () => {
            ;(tr.current?.abort(), tt.current?.abort())
          }),
          (K = []),
          (eP[24] = G),
          (eP[25] = K))
        : ((G = eP[24]), (K = eP[25])),
        (0, s.useEffect)(G, K),
        eP[26] !== td
          ? ((J = () => {
              if (td)
                return (
                  window.addEventListener("beforeunload", eo),
                  () => window.removeEventListener("beforeunload", eo)
                )
            }),
            (W = [td]),
            (eP[26] = td),
            (eP[27] = J),
            (eP[28] = W))
          : ((J = eP[27]), (W = eP[28])),
        (0, s.useEffect)(J, W),
        eP[29] !== td || eP[30] !== ez
          ? (($ = () => {
              td ? e6(!0) : ez()
            }),
            (eP[29] = td),
            (eP[30] = ez),
            (eP[31] = $))
          : ($ = eP[31]))
      let tu = $
      eP[32] !== tl ||
      eP[33] !== eW ||
      eP[34] !== eL ||
      eP[35] !== eO ||
      eP[36] !== eR ||
      eP[37] !== eq ||
      eP[38] !== tn
        ? ((U = (e) => {
            let t = void 0 !== e && e
            if (!tl || null != tr.current || (e2(!1), tn)) return
            let r = new AbortController()
            ;((tr.current = r),
              eV(!0),
              e5(null),
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
              })(eR, eW, eq, t, r.signal)
                .then((e) => {
                  if (null == e || r.signal.aborted) return
                  let t = {
                    ...eW,
                    name: e.name,
                    description: e.description,
                    files: eW.files.map((t) =>
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
                  ;(e$(t),
                    eJ(t),
                    eR.query.setData(T, e.id, { skill: e, draft: t }),
                    eR
                      .get(w.Id)
                      .success(
                        eL.formatMessage({
                          id: "browserSkills.editor.saved",
                          defaultMessage: "Skill saved",
                          description: "Success toast after creating or saving a skill in the browser editor",
                        }),
                      ),
                    e.id !== eq?.id &&
                      ((ti.current = !0),
                      eO(`/skills/editor/${encodeURIComponent(e.id)}`, {
                        replace: !0,
                        state: { initialTab: "skills" },
                      })))
                })
                .catch((e) => {
                  if (r.signal.aborted) return
                  let i = t ? null : (0, j.b)(e)
                  i ? e5(i) : e2(!0)
                })
                .finally(() => {
                  ;((tr.current = null), eV(!1))
                }))
          }),
          (eP[32] = tl),
          (eP[33] = eW),
          (eP[34] = eL),
          (eP[35] = eO),
          (eP[36] = eR),
          (eP[37] = eq),
          (eP[38] = tn),
          (eP[39] = U))
        : (U = eP[39])
      let tp = U,
        th = eW.instructions
      ;(t && (th = "text" === t.source.kind ? t.source.content : (e8?.content ?? "")),
        eP[40] !== ez
          ? ((V = () => {
              ;((ti.current = !0), tr.current?.abort(), ez())
            }),
            (eP[40] = ez),
            (eP[41] = V))
          : (V = eP[41]))
      let tf = V
      ;(eP[42] !== eq
        ? ((H = eq
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
          (eP[42] = eq),
          (eP[43] = H))
        : (H = eP[43]),
        eP[44] !== eF?.isWorkspace || eP[45] !== eU || eP[46] !== eq
          ? ((Q =
              eq && eF?.isWorkspace
                ? (0, i.jsxs)(h.$, {
                    type: "button",
                    color: "outline",
                    size: "dialogAction",
                    disabled: eU,
                    onClick: () => e0(!0),
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
            (eP[44] = eF?.isWorkspace),
            (eP[45] = eU),
            (eP[46] = eq),
            (eP[47] = Q))
          : (Q = eP[47]))
      let tm = eU || !eq?.sediment_id || eq.permissions?.can_export === !1
      ;(eP[48] !== eH || eP[49] !== eR || eP[50] !== eq
        ? ((Z = () => {
            eq &&
              !eH &&
              (eQ(!0),
              eY(!1),
              (0, _._d)(eR, eq)
                .catch(() => eY(!0))
                .finally(() => eQ(!1)))
          }),
          (eP[48] = eH),
          (eP[49] = eR),
          (eP[50] = eq),
          (eP[51] = Z))
        : (Z = eP[51]),
        eP[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((Y = (0, i.jsx)(m.EYt, {})),
            (X = (0, i.jsx)(o.A, {
              id: "browserSkills.editor.downloadSkill",
              defaultMessage: "Download skill",
              description:
                "Secondary button in the browser skill editor that downloads the saved skill archive; disabled until the skill has been created",
            })),
            (eP[52] = Y),
            (eP[53] = X))
          : ((Y = eP[52]), (X = eP[53])),
        eP[54] !== eH || eP[55] !== tm || eP[56] !== Z
          ? ((ee = (0, i.jsxs)(h.$, {
              type: "button",
              color: "outline",
              size: "dialogAction",
              loading: eH,
              disabled: tm,
              onClick: Z,
              children: [Y, X],
            })),
            (eP[54] = eH),
            (eP[55] = tm),
            (eP[56] = Z),
            (eP[57] = ee))
          : (ee = eP[57]))
      let tg = !tl || eU || null != tn || (null != eq && !to)
      ;(eP[58] !== eq
        ? ((et = eq
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
          (eP[58] = eq),
          (eP[59] = et))
        : (et = eP[59]),
        eP[60] !== eU || eP[61] !== tg || eP[62] !== et
          ? ((ei = (0, i.jsx)(h.$, {
              type: "submit",
              color: "primary",
              size: "dialogAction",
              loading: eU,
              disabled: tg,
              children: et,
            })),
            (eP[60] = eU),
            (eP[61] = tg),
            (eP[62] = et),
            (eP[63] = ei))
          : (ei = eP[63]),
        eP[64] !== Q || eP[65] !== ee || eP[66] !== ei
          ? ((el = (0, i.jsxs)("div", {
              className: "flex flex-wrap items-center justify-end gap-2",
              children: [Q, ee, ei],
            })),
            (eP[64] = Q),
            (eP[65] = ee),
            (eP[66] = ei),
            (eP[67] = el))
          : (el = eP[67]),
        eP[68] !== tp ? ((en = () => tp()), (eP[68] = tp), (eP[69] = en)) : (en = eP[69]))
      let tb = t?.id ?? null,
        tw = !tl || eU
      return (
        eP[70] !== eW
          ? ((es = (e) => {
              ;(e$({ ...eW, files: e }), e5(null))
            }),
            (eP[70] = eW),
            (eP[71] = es))
          : (es = eP[71]),
        eP[72] !== eW.files || eP[73] !== tc || eP[74] !== eq || eP[75] !== tb || eP[76] !== tw || eP[77] !== es
          ? ((ep = (0, i.jsx)("aside", {
              className: "w-full shrink-0 border-e border-default bg-surface-secondary p-5 md:w-80 md:overflow-y-auto",
              children: (0, i.jsx)(B, {
                selectedId: tb,
                onSelect: tc,
                files: eW.files,
                skill: eq,
                disabled: tw,
                onChange: es,
              }),
            })),
            (eP[72] = eW.files),
            (eP[73] = tc),
            (eP[74] = eq),
            (eP[75] = tb),
            (eP[76] = tw),
            (eP[77] = es),
            (eP[78] = ep))
          : (ep = eP[78]),
        eP[79] !== tl
          ? ((eh = tl
              ? null
              : (0, i.jsx)("p", {
                  role: "alert",
                  children: (0, i.jsx)(o.A, {
                    id: "browserSkills.editor.readOnly",
                    defaultMessage: "You don't have permission to edit this skill",
                    description: "Explanation shown when the browser skill editor is read-only",
                  }),
                })),
            (eP[79] = tl),
            (eP[80] = eh))
          : (eh = eP[80]),
        eP[81] !== tl ||
        eP[82] !== ts ||
        eP[83] !== eW ||
        eP[84] !== e7 ||
        eP[85] !== eL ||
        eP[86] !== eU ||
        eP[87] !== t
          ? ((ef =
              null == t
                ? (0, i.jsx)(x.t, {
                    dividers: !1,
                    children: (0, i.jsxs)("dl", {
                      className: "@container p-4",
                      children: [
                        (0, i.jsx)(f.l, {
                          label: (0, i.jsx)("label", {
                            htmlFor: `${e7}-name`,
                            children: (0, i.jsx)(o.A, {
                              id: "browserSkills.editor.name",
                              defaultMessage: "Name",
                              description: "Label for the unique skill name in the browser skill editor",
                            }),
                          }),
                          children: (0, i.jsx)(b.pd, {
                            id: `${e7}-name`,
                            autoFocus: !0,
                            value: eW.name,
                            placeholder: eL.formatMessage({
                              id: "browserSkills.editor.namePlaceholder",
                              defaultMessage: "your-skill-name",
                              description:
                                "Example name shown in the empty Name field of the browser skill editor; use lowercase words separated by hyphens to illustrate the required format",
                            }),
                            maxLength: 64,
                            disabled: !tl || eU,
                            onChange: (e) => {
                              ;(e$({ ...eW, name: e.target.value }), e5(null))
                            },
                          }),
                        }),
                        (0, i.jsx)(f.l, {
                          label: (0, i.jsx)("label", {
                            htmlFor: `${e7}-description`,
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
                                id: `${e7}-description`,
                                variant: "settings",
                                autoResize: !0,
                                rows: 1,
                                maxLength: 500,
                                value: eW.description,
                                "aria-invalid": ts,
                                "aria-describedby": `${e7}-description-count${ts ? ` ${e7}-description-error` : ""}`,
                                placeholder: eL.formatMessage({
                                  id: "browserSkills.editor.descriptionPlaceholder",
                                  defaultMessage: "Describe what the skill does",
                                  description:
                                    "Placeholder prompting the author to describe the skill's purpose in the browser skill editor's empty Description field",
                                }),
                                disabled: !tl || eU,
                                onChange: (e) => e$({ ...eW, description: e.target.value }),
                              }),
                              (0, i.jsx)("p", {
                                id: `${e7}-description-count`,
                                className: "text-xs text-secondary",
                                children: (0, i.jsx)(o.A, {
                                  id: "browserSkills.editor.descriptionCharacterCount",
                                  defaultMessage: "{count, number} / {limit, number} characters",
                                  description:
                                    "Current number of characters and maximum allowed characters in the skill description",
                                  values: { count: eW.description.length, limit: 500 },
                                }),
                              }),
                              ts
                                ? (0, i.jsx)("p", {
                                    id: `${e7}-description-error`,
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
                : null),
            (eP[81] = tl),
            (eP[82] = ts),
            (eP[83] = eW),
            (eP[84] = e7),
            (eP[85] = eL),
            (eP[86] = eU),
            (eP[87] = t),
            (eP[88] = ef))
          : (ef = eP[88]),
        eP[89] === Symbol.for("react.memo_cache_sentinel")
          ? ((em = (0, i.jsx)("h2", {
              className: "sr-only",
              children: (0, i.jsx)(o.A, {
                id: "browserSkills.editor.instructions",
                defaultMessage: "Instructions",
                description: "Label for the SKILL.md instructions in the browser skill editor",
              }),
            })),
            (eP[89] = em))
          : (em = eP[89]),
        eP[90] !== t || eP[91] !== e8?.status
          ? ((eg = t && e8?.status === "loading" ? (0, i.jsx)(g.y, {}) : null),
            (eP[90] = t),
            (eP[91] = e8?.status),
            (eP[92] = eg))
          : (eg = eP[92]),
        eP[93] !== tc || eP[94] !== t || eP[95] !== e8?.status
          ? ((eb =
              t && e8?.status === "error"
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
                        onClick: () => tc(t),
                        children: (0, i.jsx)(o.A, {
                          id: "browserSkills.editor.retry",
                          defaultMessage: "Retry",
                          description: "Button retrying a failed browser skill editor load",
                        }),
                      }),
                    ],
                  })
                : null),
            (eP[93] = tc),
            (eP[94] = t),
            (eP[95] = e8?.status),
            (eP[96] = eb))
          : (eb = eP[96]),
        eP[97] !== t
          ? ((ew =
              t && !R(t)
                ? (0, i.jsx)("p", {
                    className: "text-secondary",
                    children: (0, i.jsx)(o.A, {
                      id: "browserSkills.editor.downloadToView",
                      defaultMessage: "Use the file menu to download and view this file",
                      description: "Browser skill editor message when a selected binary file cannot be edited as text",
                    }),
                  })
                : null),
            (eP[97] = t),
            (eP[98] = ew))
          : (ew = eP[98]),
        eP[99] !== th || eP[100] !== te || eP[101] !== t || eP[102] !== e8?.status
          ? ((ey =
              te && e8?.status === "ready"
                ? (0, i.jsx)("div", {
                    className: "flex flex-1 items-center justify-center overflow-auto p-3 text-sm",
                    children: (0, i.jsx)(
                      p.t,
                      {
                        className: "max-h-96 w-full",
                        alt: t.path,
                        svgString: th,
                        onError: () => {
                          e9({ id: t.id, content: null, status: "error" })
                        },
                      },
                      t.id,
                    ),
                  })
                : null),
            (eP[99] = th),
            (eP[100] = te),
            (eP[101] = t),
            (eP[102] = e8?.status),
            (eP[103] = ey))
          : (ey = eP[103]),
        eP[104] !== tl ||
        eP[105] !== eW ||
        eP[106] !== th ||
        eP[107] !== eL ||
        eP[108] !== te ||
        eP[109] !== eU ||
        eP[110] !== t ||
        eP[111] !== e8
          ? ((ek =
              te || (null != t && (e8?.status !== "ready" || null == e8.content))
                ? null
                : (0, i.jsx)("div", {
                    className: "min-h-0 flex-1",
                    inert: !tl || eU,
                    children: (0, i.jsx)(
                      u.ChatGptCodeBlockEditor,
                      {
                        code: th,
                        placeholder:
                          null == t
                            ? eL.formatMessage({
                                id: "browserSkills.editor.instructionsPlaceholder",
                                defaultMessage: "Write skill instructions…",
                                description:
                                  "Placeholder in the empty SKILL.md text editor prompting the author to write the instructions ChatGPT should follow when using the skill",
                              })
                            : void 0,
                        language: null == t ? "markdown" : t.path.split(".").at(-1),
                        wrapLines: !0,
                        onBlur: ea,
                        onChange: (e) => {
                          tl &&
                            !eU &&
                            e$(
                              null == t
                                ? { ...eW, instructions: e }
                                : {
                                    ...eW,
                                    files: eW.files.map((r) =>
                                      r.id === t.id ? { ...r, source: { kind: "text", content: e } } : r,
                                    ),
                                  },
                            )
                        },
                      },
                      t?.id ?? "SKILL.md",
                    ),
                  })),
            (eP[104] = tl),
            (eP[105] = eW),
            (eP[106] = th),
            (eP[107] = eL),
            (eP[108] = te),
            (eP[109] = eU),
            (eP[110] = t),
            (eP[111] = e8),
            (eP[112] = ek))
          : (ek = eP[112]),
        eP[113] !== eg || eP[114] !== eb || eP[115] !== ew || eP[116] !== ey || eP[117] !== ek
          ? ((ex = (0, i.jsxs)("section", {
              className: "flex min-h-0 flex-1 flex-col gap-2",
              children: [em, eg, eb, ew, ey, ek],
            })),
            (eP[113] = eg),
            (eP[114] = eb),
            (eP[115] = ew),
            (eP[116] = ey),
            (eP[117] = ek),
            (eP[118] = ex))
          : (ex = eP[118]),
        eP[119] !== ta || eP[120] !== t
          ? ((ev =
              ta && ("description" !== ta || null != t)
                ? (0, i.jsx)("p", { role: "alert", children: (0, i.jsx)(o.A, { ...eu[ta], values: { limit: 500 } }) })
                : null),
            (eP[119] = ta),
            (eP[120] = t),
            (eP[121] = ev))
          : (ev = eP[121]),
        eP[122] !== eZ
          ? ((e_ = eZ
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
            (eP[122] = eZ),
            (eP[123] = e_))
          : (e_ = eP[123]),
        eP[124] !== eh || eP[125] !== ef || eP[126] !== ex || eP[127] !== ev || eP[128] !== e_
          ? ((ej = (0, i.jsxs)("main", {
              className: "flex min-w-0 flex-1 flex-col gap-4 p-5 md:overflow-y-auto",
              children: [eh, ef, ex, ev, e_],
            })),
            (eP[124] = eh),
            (eP[125] = ef),
            (eP[126] = ex),
            (eP[127] = ev),
            (eP[128] = e_),
            (eP[129] = ej))
          : (ej = eP[129]),
        eP[130] !== ep || eP[131] !== ej
          ? ((eS = (0, i.jsxs)("div", {
              className: "flex min-h-0 flex-1 flex-col overflow-y-auto md:flex-row md:overflow-hidden",
              children: [ep, ej],
            })),
            (eP[130] = ep),
            (eP[131] = ej),
            (eP[132] = eS))
          : (eS = eP[132]),
        eP[133] !== tu || eP[134] !== H || eP[135] !== el || eP[136] !== en || eP[137] !== eS
          ? ((eA = (0, i.jsx)(er, { title: H, actions: el, onClose: tu, onSubmit: en, children: eS })),
            (eP[133] = tu),
            (eP[134] = H),
            (eP[135] = el),
            (eP[136] = en),
            (eP[137] = eS),
            (eP[138] = eA))
          : (eA = eP[138]),
        eP[139] !== eX || eP[140] !== eq
          ? ((eC = eX && eq ? (0, i.jsx)(C.V, { skill: eq, onClose: () => e0(!1) }) : null),
            (eP[139] = eX),
            (eP[140] = eq),
            (eP[141] = eC))
          : (eC = eP[141]),
        eP[142] !== tl || eP[143] !== e4 || eP[144] !== tp || eP[145] !== eU
          ? ((eI = e4
              ? (0, i.jsx)(S.w, {
                  resolution: e4,
                  disabled: eU || !tl,
                  onCancel: () => e5(null),
                  onConfirm: () => tp(!0),
                })
              : null),
            (eP[142] = tl),
            (eP[143] = e4),
            (eP[144] = tp),
            (eP[145] = eU),
            (eP[146] = eI))
          : (eI = eP[146]),
        eP[147] === Symbol.for("react.memo_cache_sentinel") ? ((eM = () => e6(!1)), (eP[147] = eM)) : (eM = eP[147]),
        eP[148] !== e3 || eP[149] !== tf
          ? ((eN = (0, i.jsx)(v.D, { open: e3, onCancel: eM, onConfirm: tf })),
            (eP[148] = e3),
            (eP[149] = tf),
            (eP[150] = eN))
          : (eN = eP[150]),
        eP[151] !== eK || eP[152] !== td
          ? ((eE = eK
              ? (0, i.jsx)(ec, { shouldBlock: () => !ti.current && td, onDiscard: () => tr.current?.abort() })
              : null),
            (eP[151] = eK),
            (eP[152] = td),
            (eP[153] = eE))
          : (eE = eP[153]),
        eP[154] !== eA || eP[155] !== eC || eP[156] !== eI || eP[157] !== eN || eP[158] !== eE
          ? ((eD = (0, i.jsxs)(i.Fragment, { children: [eA, eC, eI, eN, eE] })),
            (eP[154] = eA),
            (eP[155] = eC),
            (eP[156] = eI),
            (eP[157] = eN),
            (eP[158] = eE),
            (eP[159] = eD))
          : (eD = eP[159]),
        eD
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
      p = r("Sm6l"),
      h = r("mUDD"),
      f = r("bVeK"),
      m = r("RNul"),
      g = r("AOG7"),
      b = r("OWtl"),
      w = r("Q81u"),
      y = r("iJG7"),
      k = r("Djzw"),
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
            K,
            B,
            J,
            W,
            $,
            U = (0, l.c)(99),
            { skill: V, onClose: H } = e,
            Q = (0, n.gh)(b.u),
            Z = (0, a.A)(),
            Y = (0, n.Ul)(S.Jp),
            X = (0, n.Ul)(S.R),
            { data: ee } = (0, u.YL)(),
            { data: et, isError: er, refetch: ei } = (0, n._U)(S.WT, V.id),
            { data: el } = (0, n._U)(S.n1, V.id)
          U[0] !== et?.principals ||
          U[1] !== et?.principals.find ||
          U[2] !== V.creator_id ||
          U[3] !== V.creator_name ||
          U[4] !== el?.creator_name
            ? ((t =
                et?.principals.find((e) => "user" === e.principal_type && e.principal_id === V.creator_id)?.name ||
                el?.creator_name ||
                V.creator_name),
              (U[0] = et?.principals),
              (U[1] = et?.principals.find),
              (U[2] = V.creator_id),
              (U[3] = V.creator_name),
              (U[4] = el?.creator_name),
              (U[5] = t))
            : (t = U[5])
          let en = t,
            [es, ea] = (0, s.useState)("")
          U[6] === Symbol.for("react.memo_cache_sentinel") ? ((r = []), (U[6] = r)) : (r = U[6])
          let [eo, ed] = (0, s.useState)(r),
            [ec, eu] = (0, s.useState)(!1),
            [ep, eh] = (0, s.useState)(!1),
            [ef, em] = (0, s.useState)(!1),
            [eg, eb] = (0, s.useState)(null),
            ew = et?.workspace_access_state ?? "restricted",
            ey = X.individuals && V.permissions?.can_share === !0,
            ek = X.workspace && V.permissions?.can_share_workspace === !0,
            ex = X.enableWorkspace && V.permissions?.can_enable_share === !0,
            ev = ey && "restricted" === ew ? es : "",
            { data: e_, isError: ej } = (0, g.Nv)(ev),
            { data: eS, isError: eA } = (0, g.Nc)(ev),
            { data: eC, isError: eI } =
              (0, n._U)(d.l, Y?.accountId ?? "", { enabled: ey && "restricted" === ew }) ?? {},
            eM = ee?.id === Y?.accountId ? ee?.name : void 0
          U[7] !== ew ||
          U[8] !== ey ||
          U[9] !== et ||
          U[10] !== eS ||
          U[11] !== ev ||
          U[12] !== eo ||
          U[13] !== V.creator_id ||
          U[14] !== eC ||
          U[15] !== eI ||
          U[16] !== e_
            ? ((E =
                null == e_ && null == eS && null == eC
                  ? void 0
                  : [
                      ...(e_?.map(N) ?? []),
                      ...(eS?.map(M) ?? []),
                      ...(ey && "restricted" === ew && !eI
                        ? (eC ?? [])
                            .filter(
                              (e) =>
                                !eS?.some((t) => t.id === e.id) &&
                                e.name.toLocaleLowerCase().includes(ev.trim().toLocaleLowerCase()),
                            )
                            .map(I)
                        : []),
                    ].filter(
                      (e) =>
                        !eo.some((t) => t.id === e.id) &&
                        ("user" !== e.target.principal_type || e.target.principal_id !== V.creator_id) &&
                        !et?.principals.some(
                          (t) =>
                            t.principal_type === e.target.principal_type && t.principal_id === e.target.principal_id,
                        ),
                    )),
              (U[7] = ew),
              (U[8] = ey),
              (U[9] = et),
              (U[10] = eS),
              (U[11] = ev),
              (U[12] = eo),
              (U[13] = V.creator_id),
              (U[14] = eC),
              (U[15] = eI),
              (U[16] = e_),
              (U[17] = E))
            : (E = U[17])
          let eN = E
          U[18] !== Y || U[19] !== ec || U[20] !== Q
            ? ((D = async (e) => {
                if (
                  !ec &&
                  null != Y &&
                  !0 === Q.get(S.Zf) &&
                  Q.get(S.Jp)?.accountId === Y.accountId &&
                  Q.get(S.Jp)?.userId === Y.userId
                ) {
                  ;(eu(!0), eh(!1))
                  try {
                    await e()
                  } catch {
                    eh(!0)
                  }
                  eu(!1)
                }
              }),
              (U[18] = Y),
              (U[19] = ec),
              (U[20] = Q),
              (U[21] = D))
            : (D = U[21])
          let eE = D,
            eD = Y?.accountId ?? ""
          U[22] !== eD ? ((P = { "ChatGPT-Account-ID": eD }), (U[22] = eD), (U[23] = P)) : (P = U[23])
          let eP = P
          U[24] !== V.id ? ((q = { hazelnut_id: V.id }), (U[24] = V.id), (U[25] = q)) : (q = U[25])
          let eq = q
          U[26] !== ew || U[27] !== ey || U[28] !== eP || U[29] !== eq || U[30] !== ei || U[31] !== eE || U[32] !== eo
            ? ((T = () => {
                ey &&
                  "restricted" === ew &&
                  0 !== eo.length &&
                  eE(async () => {
                    let e = await c.Request.safePost("/hazelnuts/{hazelnut_id}/share", {
                      additionalHeaders: eP,
                      parameters: { path: eq },
                      requestBody: { targets: eo.map(C) },
                    })
                    await ei()
                    let t = e.attempts.filter(A)
                    if (
                      (ed(
                        eo.filter((e) =>
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
              (U[26] = ew),
              (U[27] = ey),
              (U[28] = eP),
              (U[29] = eq),
              (U[30] = ei),
              (U[31] = eE),
              (U[32] = eo),
              (U[33] = T))
            : (T = U[33])
          let eT = T
          U[34] !== eM
            ? ((z = (e) =>
                "restricted" === e
                  ? (0, i.jsx)(o.A, {
                      id: "browserSkills.sharing.invited",
                      defaultMessage: "Only those invited",
                      description: "Skill sharing access option limiting access to invited people or groups",
                    })
                  : "enabled" === e
                    ? eM
                      ? (0, i.jsx)(o.A, {
                          id: "browserSkills.sharing.enabled",
                          defaultMessage: "Installed for everyone at {workspaceName}",
                          description:
                            "Skill sharing scope that installs the skill for all workspace members; workspaceName is the active workspace display name",
                          values: { workspaceName: eM },
                        })
                      : (0, i.jsx)(o.A, {
                          id: "browserSkills.sharing.enabledFallback",
                          defaultMessage: "Installed for everyone in your workspace",
                          description:
                            "Skill sharing scope that installs the skill for all members when the workspace name is unavailable",
                        })
                    : eM
                      ? (0, i.jsx)(o.A, {
                          id: "browserSkills.sharing.workspace",
                          defaultMessage: "Anyone at {workspaceName}",
                          description:
                            "Skill sharing option making the skill discoverable by all members; workspaceName is the active workspace display name",
                          values: { workspaceName: eM },
                        })
                      : (0, i.jsx)(o.A, {
                          id: "browserSkills.sharing.workspaceFallback",
                          defaultMessage: "Anyone in your workspace",
                          description:
                            "Skill sharing option making the skill discoverable by all members when the workspace name is unavailable",
                        })),
              (U[34] = eM),
              (U[35] = z))
            : (z = U[35])
          let ez = z
          return (
            U[36] !== V ? ((R = (0, j.Fj)(V)), (U[36] = V), (U[37] = R)) : (R = U[37]),
            U[38] !== R
              ? ((L = (0, i.jsx)(o.A, {
                  id: "browserSkills.sharing.namedSkillTitle",
                  defaultMessage: "Share {name}",
                  description:
                    "Title of the dialog for managing who can access a skill; name is the skill's display name",
                  values: { name: R },
                })),
                (U[38] = R),
                (U[39] = L))
              : (L = U[39]),
            U[40] === Symbol.for("react.memo_cache_sentinel")
              ? ((O = (0, i.jsx)(o.A, {
                  id: "browserSkills.sharing.cancel",
                  defaultMessage: "Cancel",
                  description: "Close the skill sharing dialog without sending selected invitations",
                })),
                (U[40] = O))
              : (O = U[40]),
            U[41] !== H || U[42] !== ec
              ? ((F = (0, i.jsx)(
                  p.$,
                  { type: "button", color: "secondary", size: "detailAction", disabled: ec, onClick: H, children: O },
                  "cancel",
                )),
                (U[41] = H),
                (U[42] = ec),
                (U[43] = F))
              : (F = U[43]),
            U[44] !== ew ||
            U[45] !== ey ||
            U[46] !== ef ||
            U[47] !== et ||
            U[48] !== er ||
            U[49] !== ec ||
            U[50] !== eE ||
            U[51] !== eo.length ||
            U[52] !== V.id
              ? ((G =
                  eo.length > 0
                    ? (0, i.jsx)(
                        p.$,
                        {
                          type: "submit",
                          color: "primary",
                          size: "detailAction",
                          loading: ec,
                          disabled: !ey || "restricted" !== ew || null == et || er,
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
                          disabled: ec,
                          onClick: () =>
                            void eE(async () => {
                              let e = new URL("/skills", window.location.origin)
                              if ((e.searchParams.set("skill_id", V.id), !(await (0, _.y2)(e.toString()))))
                                throw Error("Could not copy skill link")
                              em(!0)
                            }),
                          children: [
                            (0, i.jsx)(f.DIB, {}),
                            ef
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
                (U[44] = ew),
                (U[45] = ey),
                (U[46] = ef),
                (U[47] = et),
                (U[48] = er),
                (U[49] = ec),
                (U[50] = eE),
                (U[51] = eo.length),
                (U[52] = V.id),
                (U[53] = G))
              : (G = U[53]),
            U[54] !== F || U[55] !== G ? ((K = [F, G]), (U[54] = F), (U[55] = G), (U[56] = K)) : (K = U[56]),
            U[57] !== ep || U[58] !== er || U[59] !== ei
              ? ((B =
                  ep || er
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
                          er
                            ? (0, i.jsx)(p.$, {
                                onClick: () => void ei(),
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
                (U[57] = ep),
                (U[58] = er),
                (U[59] = ei),
                (U[60] = B))
              : (B = U[60]),
            U[61] !== et || U[62] !== er
              ? ((J = null != et || er ? null : (0, i.jsx)(h.OO, { children: (0, i.jsx)(m.y, {}) })),
                (U[61] = et),
                (U[62] = er),
                (U[63] = J))
              : (J = U[63]),
            U[64] !== ew ||
            U[65] !== ex ||
            U[66] !== ey ||
            U[67] !== ek ||
            U[68] !== en ||
            U[69] !== et ||
            U[70] !== eA ||
            U[71] !== eP ||
            U[72] !== Y?.accountId ||
            U[73] !== Y?.userId ||
            U[74] !== Z ||
            U[75] !== er ||
            U[76] !== eN ||
            U[77] !== eq ||
            U[78] !== ec ||
            U[79] !== eg ||
            U[80] !== es ||
            U[81] !== ei ||
            U[82] !== ez ||
            U[83] !== eE ||
            U[84] !== Q ||
            U[85] !== eo ||
            U[86] !== V.creator_id ||
            U[87] !== eI ||
            U[88] !== ej
              ? ((W =
                  null == et || er
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(h.OO, {
                            children: (0, i.jsx)(x.X, {
                              ariaLabel: Z.formatMessage({
                                id: "browserSkills.sharing.people",
                                defaultMessage: "Add people or groups",
                                description: "Accessible label and placeholder for skill sharing recipient search",
                              }),
                              placeholder: Z.formatMessage({
                                id: "browserSkills.sharing.people",
                                defaultMessage: "Add people or groups",
                                description: "Accessible label and placeholder for skill sharing recipient search",
                              }),
                              emptyMessage: (0, i.jsx)(o.A, {
                                id: "browserSkills.sharing.noMatches",
                                defaultMessage: "No people or groups found",
                                description: "No skill sharing recipients matched the search",
                              }),
                              disabled: !ey || ec || "restricted" !== ew,
                              query: es,
                              options: eN,
                              searchFailed: ej || eA || eI,
                              selectedOptions: eo,
                              portalContainer: eg,
                              onQueryChange: ea,
                              onSelectOption: (e) => ed([...eo, e]),
                              onRemoveOption: (e) => ed(eo.filter((t) => t.id !== e.id)),
                              getRemoveLabel: (e) =>
                                Z.formatMessage(
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
                                disabled: ec || (!ek && !ex),
                                value: ew,
                                renderLabel: ez,
                                options: [
                                  {
                                    value: "restricted",
                                    icon: (0, i.jsx)(f.$Rp, {}),
                                    disabled: !ek && "restricted" !== ew,
                                  },
                                  { value: "discoverable", icon: (0, i.jsx)(f.MEe, {}), disabled: !ek },
                                  { value: "enabled", icon: (0, i.jsx)(f.TlE, {}), hidden: !ex },
                                ],
                                onChange: (e) => {
                                  ;("enabled" !== e || ex) &&
                                    ("enabled" === e || ek) &&
                                    eE(async () => {
                                      ;(await c.Request.safePost("/hazelnuts/{hazelnut_id}/workspace-access", {
                                        additionalHeaders: eP,
                                        parameters: { path: eq },
                                        requestBody: { state: e },
                                      }),
                                        "restricted" !== e && ed([]),
                                        await Promise.all([
                                          ei(),
                                          Q.queryClient.invalidateQueries({
                                            queryKey: ["browser-skills", Y?.accountId, Y?.userId, "collection"],
                                          }),
                                        ]))
                                    })
                                },
                              }),
                              ey || ek || ex
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
                                colorKey: V.creator_id,
                                label: en || V.creator_id,
                                secondaryLabel: (0, i.jsx)(o.A, {
                                  id: "browserSkills.sharing.owner",
                                  defaultMessage: "Owner",
                                  description: "Skill owner role in sharing access list",
                                }),
                                trailingContent: null,
                              }),
                              et.principals
                                .filter(
                                  (e) =>
                                    ("user" === e.principal_type || "group" === e.principal_type) &&
                                    ("user" !== e.principal_type || e.principal_id !== V.creator_id),
                                )
                                .map((e) =>
                                  (0, i.jsx)(
                                    v.h,
                                    {
                                      colorKey: "user" === e.principal_type ? e.principal_id : void 0,
                                      label: e.name,
                                      trailingContent: ey
                                        ? (0, i.jsx)(p.$, {
                                            color: "ghost",
                                            disabled: ec,
                                            onClick: () => {
                                              let t = e.principal_type
                                              ;("user" === t || "group" === t) &&
                                                eE(async () => {
                                                  if (
                                                    !(
                                                      await c.Request.safeDelete("/hazelnuts/{hazelnut_id}/share", {
                                                        additionalHeaders: eP,
                                                        parameters: { path: eq },
                                                        requestBody: {
                                                          principal_type: t,
                                                          principal_id: e.principal_id,
                                                        },
                                                      })
                                                    ).success
                                                  )
                                                    throw Error("Could not remove skill access")
                                                  await ei()
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
                (U[64] = ew),
                (U[65] = ex),
                (U[66] = ey),
                (U[67] = ek),
                (U[68] = en),
                (U[69] = et),
                (U[70] = eA),
                (U[71] = eP),
                (U[72] = Y?.accountId),
                (U[73] = Y?.userId),
                (U[74] = Z),
                (U[75] = er),
                (U[76] = eN),
                (U[77] = eq),
                (U[78] = ec),
                (U[79] = eg),
                (U[80] = es),
                (U[81] = ei),
                (U[82] = ez),
                (U[83] = eE),
                (U[84] = Q),
                (U[85] = eo),
                (U[86] = V.creator_id),
                (U[87] = eI),
                (U[88] = ej),
                (U[89] = W))
              : (W = U[89]),
            U[90] !== eT ||
            U[91] !== H ||
            U[92] !== ec ||
            U[93] !== L ||
            U[94] !== K ||
            U[95] !== B ||
            U[96] !== J ||
            U[97] !== W
              ? (($ = (0, i.jsxs)(k.I, {
                  title: L,
                  onClose: H,
                  onPortalContainerChange: eb,
                  isDismissalDisabled: ec,
                  onSubmit: eT,
                  footer: K,
                  children: [B, J, W],
                })),
                (U[90] = eT),
                (U[91] = H),
                (U[92] = ec),
                (U[93] = L),
                (U[94] = K),
                (U[95] = B),
                (U[96] = J),
                (U[97] = W),
                (U[98] = $))
              : ($ = U[98]),
            $
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
        A = "muted" === m && "bg-(--color-background-neutral-soft-alpha)/50 dark:bg-background-neutral-soft-alpha",
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
                ? { backgroundColor: "var(--color-background-panel, var(--color-background-neutral-soft-alpha))" }
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
            h = (0, l.c)(28),
            {
              children: f,
              header: m,
              headerContent: g,
              footer: b,
              collapseEmptyContent: w,
              containSuggestions: y,
              variant: k,
              onSubmit: x,
            } = e,
            v = void 0 === k ? "default" : k,
            _ = void 0 !== w && w && null == f,
            j = void 0 !== y && y && null != b
          h[0] !== f || h[1] !== m || h[2] !== g || h[3] !== _ || h[4] !== v
            ? ((t = (0, i.jsx)(i.Fragment, {
                children:
                  "compact" === v
                    ? (0, i.jsxs)(o.Q, {
                        className: "relative -mx-5 -mt-2 flex min-h-0 flex-col",
                        fade: "divider",
                        scrollClassName: "min-h-0 overflow-y-auto overscroll-contain px-5 pt-2 pb-5",
                        children: [
                          m,
                          null != g && (0, i.jsx)("div", { className: "pt-5", children: g }),
                          null != f && (0, i.jsx)("div", { className: "pt-5", children: f }),
                        ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsxs)("div", {
                            className: (0, s.A)(
                              "min-h-0 overflow-y-auto overscroll-contain",
                              "default" === v && "-mt-2 pt-2",
                            ),
                            children: [
                              (0, i.jsx)("div", {
                                className: (0, s.A)("sectioned" === v && "ps-6 pe-4 pt-4"),
                                children: m,
                              }),
                              null != g && (0, i.jsx)("div", { className: "px-6 pt-4 empty:hidden", children: g }),
                            ],
                          }),
                          _
                            ? null
                            : (0, i.jsx)(o.Q, {
                                className: (0, s.A)(
                                  "relative flex flex-col",
                                  "default" === v && "-mx-5 min-h-24",
                                  "sectioned" === v && "min-h-0",
                                ),
                                fade: "divider",
                                scrollClassName: (0, s.A)(
                                  "min-h-0 overflow-y-auto overscroll-contain",
                                  "sectioned" === v && "px-6",
                                  "default" === v && "px-5",
                                ),
                                children: (0, i.jsx)("div", {
                                  className: (0, s.A)(
                                    "sectioned" === v && (0, s.A)("pb-6", null == g ? "pt-4" : "pt-6"),
                                    "default" === v && "py-5",
                                  ),
                                  children: f,
                                }),
                              }),
                        ],
                      }),
              })),
              (h[0] = f),
              (h[1] = m),
              (h[2] = g),
              (h[3] = _),
              (h[4] = v),
              (h[5] = t))
            : (t = h[5])
          let S = t,
            A = (j || "compact" === v) && "grid-rows-[minmax(0,1fr)_auto]",
            C =
              !j &&
              "compact" !== v &&
              (_ ? "grid-rows-[minmax(0,max-content)_auto]" : "grid-rows-[minmax(0,max-content)_1fr_auto]")
          h[6] !== A || h[7] !== C
            ? ((r = (0, s.A)("grid grid-cols-1", A, C)), (h[6] = A), (h[7] = C), (h[8] = r))
            : (r = h[8])
          let I = null == x ? "div" : "form",
            M = "sectioned" === v ? "chatgpt" : "default"
          return (
            h[9] !== S || h[10] !== j || h[11] !== _ || h[12] !== v
              ? ((d = j
                  ? (0, i.jsx)("div", {
                      "data-share-dialog-suggestions-boundary": !0,
                      className: (0, s.A)(
                        "min-h-0",
                        "compact" === v ? "flex flex-col" : "grid grid-cols-1",
                        "compact" !== v && !_ && "grid-rows-[minmax(0,max-content)_1fr]",
                      ),
                      children: S,
                    })
                  : S),
                (h[9] = S),
                (h[10] = j),
                (h[11] = _),
                (h[12] = v),
                (h[13] = d))
              : (d = h[13]),
            h[14] !== b || h[15] !== v
              ? ((c =
                  "sectioned" === v && null != b && (0, i.jsx)(n.a.Footer, { className: "flex-wrap", children: b })),
                (h[14] = b),
                (h[15] = v),
                (h[16] = c))
              : (c = h[16]),
            h[17] !== b || h[18] !== v
              ? ((u =
                  "sectioned" !== v &&
                  (0, i.jsx)(a.Es, { className: "shrink-0 flex-wrap", expandSingleButton: !1, children: b })),
                (h[17] = b),
                (h[18] = v),
                (h[19] = u))
              : (u = h[19]),
            h[20] !== x || h[21] !== d || h[22] !== c || h[23] !== u || h[24] !== r || h[25] !== I || h[26] !== M
              ? ((p = (0, i.jsxs)(a.R4, {
                  className: r,
                  as: I,
                  size: "scrollable",
                  variant: M,
                  onSubmit: x,
                  children: [d, c, u],
                })),
                (h[20] = x),
                (h[21] = d),
                (h[22] = c),
                (h[23] = u),
                (h[24] = r),
                (h[25] = I),
                (h[26] = M),
                (h[27] = p))
              : (p = h[27]),
            p
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
      s = r("jDom")
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
              highlightResetKey: K,
            } = e,
            B = void 0 === E || E,
            J = void 0 !== D && D,
            W = void 0 !== P && P,
            $ = void 0 === T ? "default" : T,
            U = void 0 !== R && R,
            V = void 0 === L ? 0 : L,
            H = void 0 !== O && O,
            Q = void 0 !== F && F
          j[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, n.Z)()), (j[0] = t)) : (t = j[0])
          let Z = t,
            Y = (0, l.useRef)(null),
            X = (0, l.useRef)(null),
            ee = (0, l.useRef)(!1),
            et = (0, l.useRef)(!1),
            er = (0, l.useRef)(null),
            ei = null == S ? 0 : S.length,
            [el, en] = (0, l.useState)(B && ei > 0 ? 0 : -1),
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
          ;(j[7] !== B ||
          j[8] !== C ||
          j[9] !== K ||
          j[10] !== el ||
          j[11] !== A ||
          j[12] !== S ||
          j[13] !== ei ||
          j[14] !== U
            ? ((d = () => {
                let e = er.current?.items,
                  t = null != er.current && er.current.highlightResetKey !== K
                ;(!A || t) && (et.current = !1)
                let r = !0 === U || ("user" === U && et.current),
                  i =
                    null == K || "user" === U
                      ? null != e && (t || null == S || e.length !== ei || e.some((e, t) => e !== S[t]))
                      : null != er.current && er.current.highlightResetKey !== K
                if (((er.current = { items: S, highlightResetKey: K }), !A || 0 === ei)) {
                  ;((ee.current = !1), -1 !== el && en(-1))
                  return
                }
                if (el >= 0 && el < ei && ((r && null == C) || !i)) return
                let l = e?.[el],
                  n = r && null != C && null != l ? (S?.findIndex((e) => C(e) === C(l)) ?? -1) : -1,
                  s = B ? 0 : -1
                ;(n >= 0 ? (s = n) : i && (ee.current = !1), el !== s && en(s))
              }),
              (c = [B, C, K, el, A, S, ei, U]),
              (j[7] = B),
              (j[8] = C),
              (j[9] = K),
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
          j[39] !== B ||
          j[40] !== el ||
          j[41] !== es ||
          j[42] !== A ||
          j[43] !== ei ||
          j[44] !== $ ||
          j[45] !== eu ||
          j[46] !== V ||
          j[47] !== N ||
          j[48] !== Q ||
          j[49] !== ed ||
          j[50] !== z ||
          j[51] !== H ||
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
                    ((H || "chatgpt" === $) && "Tab" === r) ||
                    ("chatgpt" === $ && " " === r && null != es && z?.(es)))
                ) {
                  if (Q && !ee.current) return !1
                  let t = el >= 0 ? el : B ? 0 : -1
                  return t >= 0 && t < ei && (ed(t), a(e), !0)
                }
                return "Escape" === r
                  ? !!N && (N(), a(e), !0)
                  : (!Q ||
                      (1 !== r.length && "Backspace" !== r && "Delete" !== r) ||
                      e.metaKey ||
                      e.ctrlKey ||
                      e.altKey ||
                      ((ee.current = !1), en(-1)),
                    !1)
              }),
              (j[39] = B),
              (j[40] = el),
              (j[41] = es),
              (j[42] = A),
              (j[43] = ei),
              (j[44] = $),
              (j[45] = eu),
              (j[46] = V),
              (j[47] = N),
              (j[48] = Q),
              (j[49] = ed),
              (j[50] = z),
              (j[51] = H),
              (j[52] = G),
              (j[53] = w))
            : (w = j[53])
          let ep = w
          ;(j[54] !== W || j[55] !== ep || j[56] !== A || j[57] !== q || j[58] !== Q
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
                  Q &&
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
              (k = [W, ep, A, q, Q]),
              (j[54] = W),
              (j[55] = ep),
              (j[56] = A),
              (j[57] = q),
              (j[58] = Q),
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
          j[63] !== J || j[64] !== ec || j[65] !== ed
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
                    J && ((ee.current = !1), en(-1))
                  },
                  "data-list-navigation-item": "true",
                }
              }),
              (j[63] = J),
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
      s = r("Sm6l"),
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
//# sourceMappingURL=141666.17761a09b1.js.map
