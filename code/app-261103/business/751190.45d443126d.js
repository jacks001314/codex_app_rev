export const __rspack_esm_ids = [751190]
export const __webpack_modules__ = {
  OXR4(e, t, s) {
    var a = s("ABep"),
      n = s("QosV"),
      i = s("on57"),
      r = s("cdAR"),
      l = s("aBXq")
    s.d(
      t,
      {},
      {
        J: function (e) {
          let t,
            s,
            o,
            d,
            c,
            u,
            m,
            h,
            p = (0, n.c)(29),
            {
              actions: f,
              children: g,
              collapsible: x,
              defaultOpen: y,
              disableContentInlineInset: b,
              count: S,
              id: v,
              onOpenChange: j,
              showDivider: _,
              title: w,
            } = e,
            A = void 0 === y || y,
            M = void 0 === _ || _
          p[0] !== f || p[1] !== x
            ? ((t =
                null == f
                  ? null
                  : (0, a.jsx)("span", {
                      className: "flex items-center gap-2",
                      role: "presentation",
                      onClick: (e) => {
                        x && (e.preventDefault(), e.stopPropagation())
                      },
                      onKeyDown: (e) => {
                        x && e.stopPropagation()
                      },
                      children: f,
                    })),
              (p[0] = f),
              (p[1] = x),
              (p[2] = t))
            : (t = p[2])
          let N = t
          ;(p[3] !== x
            ? ((s = x
                ? (0, a.jsx)(r.A, {
                    className:
                      "icon-2xs -rotate-90 transition-transform group-open/section:rotate-0 motion-reduce:transition-none",
                  })
                : null),
              (p[3] = x),
              (p[4] = s))
            : (s = p[4]),
            p[5] !== s || p[6] !== w
              ? ((o = (0, a.jsxs)(a.Fragment, { children: [w, s] })), (p[5] = s), (p[6] = w), (p[7] = o))
              : (o = p[7]))
          let T = o,
            k = x ? "details" : "section"
          p[8] !== x || p[9] !== A || p[10] !== j
            ? ((d = x
                ? {
                    open: A,
                    onToggle: (e) => {
                      j?.(e.currentTarget.open)
                    },
                  }
                : {}),
              (p[8] = x),
              (p[9] = A),
              (p[10] = j),
              (p[11] = d))
            : (d = p[11])
          let R = d,
            P = x ? "summary" : "div"
          p[12] !== N || p[13] !== S || p[14] !== T || p[15] !== M || p[16] !== P
            ? ((c = (0, a.jsx)(l.u, { action: N, as: P, count: S, showDivider: M, title: T })),
              (p[12] = N),
              (p[13] = S),
              (p[14] = T),
              (p[15] = M),
              (p[16] = P),
              (p[17] = c))
            : (c = p[17])
          let F = !(void 0 !== b && b) && "px-[var(--detail-page-inline-inset,0px)]"
          return (
            p[18] !== F ? ((u = (0, i.A)("flex flex-col gap-1", F)), (p[18] = F), (p[19] = u)) : (u = p[19]),
            p[20] !== g || p[21] !== u
              ? ((m = (0, a.jsx)("div", { className: u, children: g })), (p[20] = g), (p[21] = u), (p[22] = m))
              : (m = p[22]),
            p[23] !== k || p[24] !== v || p[25] !== R || p[26] !== m || p[27] !== c
              ? ((h = (0, a.jsxs)(k, {
                  ...R,
                  id: v,
                  className:
                    "group/section flex flex-col gap-4 [--sectioned-page-leading-inset:var(--detail-page-inline-inset,0px)]",
                  children: [c, m],
                })),
                (p[23] = k),
                (p[24] = v),
                (p[25] = R),
                (p[26] = m),
                (p[27] = c),
                (p[28] = h))
              : (h = p[28]),
            h
          )
        },
      },
    )
  },
  aBXq(e, t, s) {
    var a = s("ABep"),
      n = s("QosV"),
      i = s("on57")
    s.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            s,
            r,
            l,
            o,
            d,
            c,
            u = (0, n.c)(24),
            { action: m, as: h, count: p, size: f, showDivider: g, sticky: x, title: y } = e,
            b = void 0 === h ? "div" : h,
            S = void 0 === f ? "default" : f,
            v = "summary" === b && "cursor-interaction list-none marker:hidden",
            j =
              x &&
              "relative sticky top-0 z-10 bg-surface after:pointer-events-none after:absolute after:-inset-x-3 after:top-full after:h-2 after:bg-surface after:content-['']",
            _ = (void 0 === g || g) && "border-b border-subtle"
          u[0] !== v || u[1] !== j || u[2] !== _
            ? ((t = (0, i.A)(
                "flex items-center justify-between gap-3 pe-0.5 pb-2 text-default [padding-inline-start:var(--sectioned-page-leading-inset,0.5rem)]",
                v,
                j,
                _,
              )),
              (u[0] = v),
              (u[1] = j),
              (u[2] = _),
              (u[3] = t))
            : (t = u[3])
          let w = t
          ;(u[4] !== p || u[5] !== S
            ? ((s =
                null == p
                  ? null
                  : (0, a.jsx)("span", {
                      className: (0, i.A)("text-tertiary", "compact" === S && "text-sm"),
                      children: p,
                    })),
              (u[4] = p),
              (u[5] = S),
              (u[6] = s))
            : (s = u[6]),
            u[7] !== s || u[8] !== y
              ? ((r = (0, a.jsxs)(a.Fragment, { children: [y, s] })), (u[7] = s), (u[8] = y), (u[9] = r))
              : (r = u[9]))
          let A = r,
            M = "summary" === b ? "span" : "h2",
            N = "summary" === b ? "span" : "div",
            T = "compact" === S ? "text-base" : "text-lg"
          return (
            u[10] !== T
              ? ((l = (0, i.A)("flex min-h-7 items-center gap-1.5 leading-6 font-medium", T)), (u[10] = T), (u[11] = l))
              : (l = u[11]),
            u[12] !== M || u[13] !== A || u[14] !== l
              ? ((o = (0, a.jsx)(M, { className: l, children: A })), (u[12] = M), (u[13] = A), (u[14] = l), (u[15] = o))
              : (o = u[15]),
            u[16] !== N || u[17] !== m
              ? ((d = null == m ? null : (0, a.jsx)(N, { className: "shrink-0", children: m })),
                (u[16] = N),
                (u[17] = m),
                (u[18] = d))
              : (d = u[18]),
            u[19] !== b || u[20] !== w || u[21] !== o || u[22] !== d
              ? ((c = (0, a.jsxs)(b, { className: w, "data-slot": "section-header", children: [o, d] })),
                (u[19] = b),
                (u[20] = w),
                (u[21] = o),
                (u[22] = d),
                (u[23] = c))
              : (c = u[23]),
            c
          )
        },
      },
    )
  },
  EShr(e, t, s) {
    var a = s("ABep"),
      n = s("QosV"),
      i = s("slpy"),
      r = s("on57"),
      l = s("zd8w"),
      o = s("ygO2")
    function d(e) {
      let t = e.deltaX || e.deltaY
      0 !== t && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t)
    }
    s.d(
      t,
      {},
      {
        T: function (e) {
          let t,
            s,
            c,
            u,
            m = (0, n.c)(13),
            {
              options: h,
              selectedId: p,
              onHover: f,
              onSelect: g,
              size: x,
              className: y,
              buttonClassName: b,
              fullWidth: S,
              wrapLabels: v,
              uniform: j,
              selectedColor: _,
              unselectedColor: w,
              focusRing: A,
              variant: M,
              ariaLabel: N,
              ariaLabelledBy: T,
            } = e,
            k = void 0 === h ? [] : h,
            R = void 0 !== S && S,
            P = void 0 !== v && v,
            F = void 0 === M ? "default" : M,
            C = (0, l.useRef)(null)
          m[0] !== p ? ((t = (e) => e.id === p), (m[0] = p), (m[1] = t)) : (t = m[1])
          let I = k.findIndex(t),
            U =
              -1 === I
                ? void 0
                : {
                    "--segmented-form-indicator-width": `${100 / k.length}%`,
                    "--segmented-form-indicator-offset": `${100 * I}%`,
                  },
            q = x ?? "default",
            E = "default",
            L = void 0 === _ ? "segmentedSelected" : _,
            D = void 0 === w ? "ghost" : w
          "inset" === F
            ? ((q = x ?? "compact"), (E = "large"), (L = "segmentedInsetSelected"))
            : "field" === F
              ? ((q = "fieldSegment"), (L = "segmentedInsetSelected"))
              : "form" === F
                ? ((q = x ?? "recoveryAction"),
                  (E = "full"),
                  (L = "segmentedFormSelected"),
                  (D = "segmentedFormUnselected"))
                : "pricing" === F
                  ? ((q = "dialog"), (E = "extraLarge"))
                  : "filter" === F
                    ? ((q = "compact"), (E = "full"), (L = "secondary"), (D = "ghostTertiary"))
                    : "viewer" === F && ((q = "inline"), (E = "full"), (D = "ghostActive"))
          let z = j ?? ("icon" === q && k.length > 2)
          ;(m[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = () => {
                let e = C.current
                if (null == e) return
                let t = () => {
                  let t = e.querySelector('button[aria-pressed="true"], a[aria-current="page"]')
                  if (null == t) return
                  let s = t.offsetLeft,
                    a = s + t.offsetWidth,
                    n = e.scrollLeft,
                    i = n + e.clientWidth
                  s < n ? (e.scrollLeft = s) : a > i && (e.scrollLeft = a - e.clientWidth)
                }
                if ("u" < typeof ResizeObserver) return void t()
                let s = new ResizeObserver(t)
                for (let t of (s.observe(e), e.querySelectorAll("button, a"))) s.observe(t)
                return () => {
                  s.disconnect()
                }
              }),
              (m[2] = s))
            : (s = m[2]),
            (0, l.useLayoutEffect)(s, [k, p]))
          let O = (0, r.A)(
              "relative min-w-0 max-w-full items-center",
              "mode" === F
                ? [
                    R ? "grid w-full" : "inline-grid",
                    "isolate h-9 auto-cols-fr grid-flow-col gap-0 rounded-full select-none",
                  ]
                : [
                    R ? "flex w-full" : "inline-flex",
                    "hide-scrollbar overflow-x-auto overflow-y-hidden",
                    "field" === F || "form" === F ? "gap-0" : "gap-0.5",
                  ],
              "inset" === F && "rounded-[10px] bg-(--segmented-control-background) p-0.5",
              "field" === F && "h-8 rounded-lg bg-secondary-soft dark:bg-text/5",
              "form" === F && [
                "isolate rounded-full bg-background-segmented-form-track dark:inset-shadow-sm dark:inset-ring-1 dark:inset-ring-border-subtle",
                "compact" === q ? "p-0.5" : "p-1",
              ],
              "pricing" === F && "rounded-[20px] bg-surface-secondary p-1",
              "viewer" === F && "h-full p-0.5",
              y,
            ),
            H =
              "form" === F && -1 !== I
                ? (0, a.jsx)("span", {
                    "aria-hidden": !0,
                    className: (0, r.A)(
                      "pointer-events-none absolute z-10 flex forced-colors:hidden",
                      "compact" === q ? "inset-0.5" : "inset-1",
                    ),
                    style: U,
                    children: (0, a.jsx)("span", {
                      className:
                        "h-full w-(--segmented-form-indicator-width) rounded-full bg-background-segmented-form-selected shadow-md motion-safe:transition-transform motion-safe:duration-basic motion-safe:ease-in-out ltr:translate-x-(--segmented-form-indicator-offset) rtl:-translate-x-(--segmented-form-indicator-offset) dark:shadow-lg-stronger dark:inset-shadow-2xs dark:inset-shadow-border",
                    }),
                  })
                : null
          m[3] !== F
            ? ((c =
                "mode" === F
                  ? (0, a.jsx)("span", {
                      "aria-hidden": !0,
                      className:
                        "pointer-events-none absolute inset-x-px top-1/2 z-0 h-8.5 -translate-y-1/2 rounded-full bg-background-mode-toggle-track",
                    })
                  : null),
              (m[3] = F),
              (m[4] = c))
            : (c = m[4])
          let B = k.map((e) => {
            let t = e.id === p,
              s = e.disabled ?? !1,
              { id: n, label: l, ariaLabel: d, tooltipContent: c, disabled: u, ...m } = e,
              h = {
                unstyled: "mode" === F,
                color: t ? L : D,
                focusRing: A ?? ("inset" === F || "field" === F ? "default" : "inset"),
                size: q,
                radius: E,
                onPointerEnter: null == f || s ? void 0 : () => f(n),
                uniform: z,
                "aria-label": d,
                disabled: s,
                className: (0, r.A)(
                  R ? "flex-1 justify-center" : "shrink-0",
                  P && "self-stretch py-2",
                  "form" === F &&
                    "relative min-w-0 flex-1 basis-0 focus-visible:z-20 motion-safe:transition-colors motion-safe:duration-basic",
                  "mode" === F && [
                    "relative z-10 h-full min-w-0 justify-center rounded-full border px-10 text-sm font-medium @max-lg/home-mode-toggle:px-2.5",
                    t
                      ? "border-mode-toggle-selected bg-background-mode-toggle-selected text-mode-toggle-primary shadow-mode-toggle-selected"
                      : "border-transparent text-mode-toggle-inactive hover:text-mode-toggle-primary focus-visible:text-mode-toggle-primary",
                  ],
                  "viewer" === F && "h-full px-2.5",
                  b,
                ),
                children:
                  "form" === F || P
                    ? (0, a.jsx)("span", {
                        className: (0, r.A)(
                          "form" === F && "relative z-20",
                          P && "min-w-0 wrap-anywhere whitespace-normal",
                        ),
                        children: l,
                      })
                    : l,
              },
              x =
                null != m.to
                  ? (0, a.jsx)(o.z, { ...m, ...h, "aria-current": t ? "page" : void 0 }, n)
                  : (0, a.jsx)(o.$, { ...h, onClick: () => g?.(n), "aria-pressed": t }, n)
            return c ? (0, a.jsx)(i.m, { content: c, children: x }, n) : x
          })
          return (
            m[5] !== N || m[6] !== T || m[7] !== d || m[8] !== H || m[9] !== c || m[10] !== B || m[11] !== O
              ? ((u = (0, a.jsxs)("div", {
                  ref: C,
                  className: O,
                  role: "group",
                  "aria-label": N,
                  "aria-labelledby": T,
                  onWheel: d,
                  children: [H, c, B],
                })),
                (m[5] = N),
                (m[6] = T),
                (m[7] = d),
                (m[8] = H),
                (m[9] = c),
                (m[10] = B),
                (m[11] = O),
                (m[12] = u))
              : (u = m[12]),
            u
          )
        },
      },
    )
  },
  jqO9(e, t, s) {
    var a = s("ABep"),
      n = s("QosV"),
      i = s("oyxz"),
      r = s("G8V1"),
      l = s("ygO2"),
      o = s("ZtSy")
    s.d(
      t,
      {},
      {
        MerchantAgreementForm: function (e) {
          let t,
            s,
            d,
            c,
            u,
            m,
            h,
            p,
            f,
            g = (0, n.c)(21),
            { openTarget: x, submitting: y, onSubmit: b, onBack: S } = e
          return (
            g[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = {}), (g[0] = t)) : (t = g[0]),
            g[1] !== x
              ? ((s = (0, a.jsx)("p", {
                  id: "merchant-acceptance-notice",
                  children: (0, a.jsx)(i.A, {
                    id: "merchantSettings.agreement.nextAcceptanceWithCommercePoliciesStatement",
                    defaultMessage:
                      "By clicking Next, you electronically accept the <terms>OpenAI Merchant Feed Terms of Service</terms> and <policies>OpenAI Commerce Policies</policies> on behalf of your organization, represent that you have the authority to bind your organization to those terms, and agree that this acceptance is legally binding.",
                    description:
                      "First paragraph on the merchant agreement form, shared by merchant settings and Business Profile product setup. There is no checkbox. The accepting representative asserts authority to bind their organization. The terms and policies tags link to the Merchant Feed Terms and Commerce Policies, respectively. Next is the button label.",
                    values: {
                      terms: (e) =>
                        (0, a.jsx)(o.G, {
                          className: "font-semibold",
                          href: "https://openai.com/policies/merchant-feed-terms-of-service/",
                          initiator: "open_in_browser_bridge",
                          openTarget: x,
                          underline: "always",
                          children: e,
                        }),
                      policies: (e) =>
                        (0, a.jsx)(o.G, {
                          className: "font-semibold",
                          href: "https://openai.com/policies/commerce-policies/",
                          initiator: "open_in_browser_bridge",
                          openTarget: x,
                          underline: "always",
                          children: e,
                        }),
                    },
                  }),
                })),
                (g[1] = x),
                (g[2] = s))
              : (s = g[2]),
            g[3] !== x
              ? ((d = (0, a.jsx)("p", {
                  children: (0, a.jsx)(i.A, {
                    id: "merchantSettings.agreement.privacyStatement",
                    defaultMessage:
                      "You further acknowledge OpenAI’s <privacy>Privacy Policy</privacy> and consent to receive OpenAI Merchant Program updates. You may unsubscribe at any time.",
                    description:
                      "Privacy and program-update notice on the merchant settings agreement form before Next. The privacy tag links to OpenAI's Privacy Policy. OpenAI Merchant Program is the program name.",
                    values: {
                      privacy: (e) =>
                        (0, a.jsx)(o.G, {
                          className: "font-semibold",
                          href: "https://openai.com/policies/privacy-policy/",
                          initiator: "open_in_browser_bridge",
                          openTarget: x,
                          underline: "always",
                          children: e,
                        }),
                    },
                  }),
                })),
                (g[3] = x),
                (g[4] = d))
              : (d = g[4]),
            g[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = (0, a.jsx)(i.A, {
                  id: "merchantSettings.agreement.back",
                  defaultMessage: "Back",
                  description:
                    "Secondary button below the merchant agreement form. Returns the merchant representative to ChatGPT without submitting an agreement acceptance. Short button label.",
                })),
                (g[5] = c))
              : (c = g[5]),
            g[6] !== S
              ? ((u = (0, a.jsx)(l.$, {
                  type: "button",
                  color: "secondary",
                  size: "large",
                  radius: "full",
                  onClick: S,
                  children: c,
                })),
                (g[6] = S),
                (g[7] = u))
              : (u = g[7]),
            g[8] !== y
              ? ((m = y
                  ? (0, a.jsx)(i.A, {
                      id: "merchantSettings.agreement.submitting",
                      defaultMessage: "Submitting…",
                      description:
                        "Pending button label while merchant settings saves the representative's acceptance of the terms. The button cannot be clicked again while this request is in progress.",
                    })
                  : (0, a.jsx)(i.A, {
                      id: "merchantSettings.agreement.next",
                      defaultMessage: "Next",
                      description:
                        "Primary button on the merchant agreement form. Clicking it accepts the Merchant Feed Terms and Commerce Policies on behalf of the representative's organization and opens feed setup after the backend confirms the acceptance. Short label referenced by the legal notice immediately above.",
                    })),
                (g[8] = y),
                (g[9] = m))
              : (m = g[9]),
            g[10] !== y || g[11] !== m
              ? ((h = (0, a.jsx)(l.$, {
                  type: "submit",
                  color: "primary",
                  size: "large",
                  radius: "full",
                  disabled: y,
                  "aria-describedby": "merchant-acceptance-notice",
                  children: m,
                })),
                (g[10] = y),
                (g[11] = m),
                (g[12] = h))
              : (h = g[12]),
            g[13] !== u || g[14] !== h
              ? ((p = (0, a.jsxs)("div", { className: "flex gap-4", children: [u, h] })),
                (g[13] = u),
                (g[14] = h),
                (g[15] = p))
              : (p = g[15]),
            g[16] !== b || g[17] !== s || g[18] !== d || g[19] !== p
              ? ((f = (0, a.jsx)(r.A, {
                  locale: "en-US",
                  defaultLocale: "en-US",
                  messages: t,
                  children: (0, a.jsxs)("form", {
                    onSubmit: b,
                    className: "flex flex-col gap-8 text-base leading-relaxed text-default",
                    lang: "en-US",
                    children: [s, d, p],
                  }),
                })),
                (g[16] = b),
                (g[17] = s),
                (g[18] = d),
                (g[19] = p),
                (g[20] = f))
              : (f = g[20]),
            f
          )
        },
      },
    )
  },
  BJuv(e, t, s) {
    s.d(t, { MerchantSettingsPage: () => eK })
    var a = s("ABep"),
      n = s("QosV"),
      i = s("irkb"),
      r = s("T0Rc"),
      l = s("xSOA"),
      o = s("zTeN"),
      d = s("zd8w"),
      c = s("Wf1j"),
      u = s("oyxz"),
      m = s("HZfM"),
      h = s("kcry"),
      p = s("EOo5"),
      f = s("Ghh3"),
      g = s("w5lF"),
      x = s("zKCW"),
      y = s("ygO2"),
      b = s("ZtSy"),
      S = s("GO7r"),
      v = s("BrP7"),
      j = s("zLIa"),
      _ = s("OMIV"),
      w = s("eShZ"),
      A = s("XHnB"),
      M = s("RNul"),
      N = s("jqO9")
    let T = new Map()
    function k(e, t, s) {
      if (null == e.accountId || null == e.userId) return
      let { accountId: a, userId: n, feedId: i } = e,
        r = JSON.stringify([a, n, i, t]),
        l = async () => {
          await f.Request.safePost("/shopping/onboarding/observations", {
            expectedIdentity: { accountId: a, userId: n },
            requestBody: {
              operation: t,
              outcome: null == s ? "succeeded" : "failed",
              ...(null == s ? {} : { reason: s }),
              ...(i ? { feed_id: i } : {}),
            },
            retry: "never",
            isExpectedError: () => !0,
            signal: AbortSignal.timeout(5e3),
          }).catch(() => {})
        },
        o = T.get(r),
        d = null == o ? l() : o.then(l)
      ;(T.set(r, d),
        d.finally(() => {
          T.get(r) === d && T.delete(r)
        }))
    }
    function R(e, t, s) {
      s instanceof w.fk && "network" === s.errorKind && null == s.responseStatus && k(e, t, "network")
    }
    function P(e, t, s) {
      return (a) => {
        throw (s.aborted || R(e, t, a), a)
      }
    }
    function F(e) {
      let t,
        s,
        i,
        o,
        c,
        h,
        p,
        g,
        x,
        b,
        S,
        v,
        j,
        _,
        w = (0, n.c)(50),
        { accountId: A, userId: T, children: R } = e,
        F = (0, m.Zp)(),
        I = (0, d.useRef)(null)
      ;(w[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => I.current?.abort()), (s = []), (w[0] = t), (w[1] = s))
        : ((t = w[0]), (s = w[1])),
        (0, d.useEffect)(t, s),
        w[2] !== A || w[3] !== T
          ? ((i = ["merchant-agreement", T, A]), (w[2] = A), (w[3] = T), (w[4] = i))
          : (i = w[4]))
      let U = null != T && null != A
      ;(w[5] !== A || w[6] !== T
        ? ((o = async (e) => {
            let { signal: t } = e
            if (null == A || null == T) throw Error("Merchant identity unavailable")
            let s = await f.Request.safeGet("/shopping/merchant-agreement/status", {
              expectedIdentity: { accountId: A, userId: T },
              signal: t,
              retry: !1,
              expectedErrorStatuses: [403, 503],
            }).catch(P({ accountId: A, userId: T }, "agreement_status", t))
            if (
              s.user_id !== T ||
              (s.account_id ?? s.workspace_id) !== A ||
              (null != s.workspace_id && s.workspace_id !== A)
            )
              throw Error("Merchant access identity changed")
            return (
              t.aborted ||
                "agreement_required" !== s.access ||
                k({ accountId: A, userId: T }, "agreement_version", C(s) ? null : "agreement_version"),
              s
            )
          }),
          (w[5] = A),
          (w[6] = T),
          (w[7] = o))
        : (o = w[7]),
        w[8] !== i || w[9] !== U || w[10] !== o
          ? ((c = {
              queryKey: i,
              enabled: U,
              queryFn: o,
              staleTime: 0,
              gcTime: 0,
              retry: !1,
              refetchOnWindowFocus: "always",
            }),
            (w[8] = i),
            (w[9] = U),
            (w[10] = o),
            (w[11] = c))
          : (c = w[11]))
      let { data: q, isPending: E, isError: L, refetch: D } = (0, r.I)(c)
      w[12] !== A || w[13] !== q
        ? ((h = q?.access === "agreement_required" && (q.account_id ?? q.workspace_id) === A && C(q)),
          (w[12] = A),
          (w[13] = q),
          (w[14] = h))
        : (h = w[14])
      let z = h
      w[15] !== A || w[16] !== z || w[17] !== D || w[18] !== T
        ? ((p = {
            mutationFn: async () => {
              if (null == A || null == T || !z || I.current) return
              let e = new AbortController()
              return (
                (I.current = e),
                f.Request.safePost("/shopping/merchant-agreement/domain/accept", {
                  expectedIdentity: { accountId: A, userId: T },
                  signal: e.signal,
                  retry: "never",
                  expectedErrorStatuses: [403, 409, 422, 503],
                  requestBody: {
                    agreement_version: "2026-06-15",
                    consent_version: "2026-10-14-commerce-policies",
                    accepted_terms: !0,
                  },
                })
                  .catch(P({ accountId: A, userId: T }, "agreement_accept", e.signal))
                  .then(async (t) => {
                    if (
                      (e.signal.throwIfAborted(),
                      (t.account_id ?? t.workspace_id) !== A ||
                        (null != t.workspace_id && t.workspace_id !== A) ||
                        t.user_id !== T)
                    )
                      throw Error("Merchant acceptance identity changed")
                    await D()
                  })
                  .finally(() => {
                    I.current === e && (I.current = null)
                  })
              )
            },
            retry: !1,
            gcTime: 0,
          }),
          (w[15] = A),
          (w[16] = z),
          (w[17] = D),
          (w[18] = T),
          (w[19] = p))
        : (p = w[19])
      let { mutate: O, isPending: H, isError: B } = (0, l.n)(p)
      if (E) {
        let e
        return (
          w[20] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(M.y, {})), (w[20] = e)) : (e = w[20]),
          e
        )
      }
      if (!L && q?.access === "allowed") {
        let e
        return (
          w[21] !== R ? ((e = (0, a.jsx)(a.Fragment, { children: R })), (w[21] = R), (w[22] = e)) : (e = w[22]),
          e
        )
      }
      return (
        w[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, a.jsx)("h1", {
              className: "text-2xl font-semibold",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.agreement.title",
                defaultMessage: "Set up merchant access",
                description:
                  "Title on merchant settings before a representative accepts the terms for the selected workspace",
              }),
            })),
            (w[23] = g))
          : (g = w[23]),
        w[24] !== L || w[25] !== B
          ? ((x =
              (L || B) &&
              (0, a.jsx)("p", {
                role: "alert",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.agreement.error",
                  defaultMessage: "We couldn’t complete that request. Please try again.",
                  description:
                    "Error on merchant settings when checking workspace access or recording agreement acceptance fails. The user can retry without creating a duplicate acceptance.",
                }),
              })),
            (w[24] = L),
            (w[25] = B),
            (w[26] = x))
          : (x = w[26]),
        w[27] !== q?.access || w[28] !== L
          ? ((b =
              !L &&
              q?.access === "denied" &&
              (0, a.jsx)("p", {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.agreement.accountDenied",
                  defaultMessage: "Merchant settings aren’t available for this account",
                  description:
                    "Message on merchant settings when the current user or workspace does not qualify for merchant self-serve access. No agreement can be submitted.",
                }),
              })),
            (w[27] = q?.access),
            (w[28] = L),
            (w[29] = b))
          : (b = w[29]),
        w[30] !== z || w[31] !== q?.access || w[32] !== L
          ? ((S =
              !L &&
              q?.access === "agreement_required" &&
              !z &&
              (0, a.jsx)("p", {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.agreement.unavailable",
                  defaultMessage: "Agreement acceptance isn’t available right now. Please refresh or contact support.",
                  description:
                    "Message on merchant settings when acceptance is disabled or newer consent wording is required before the representative can accept",
                }),
              })),
            (w[30] = z),
            (w[31] = q?.access),
            (w[32] = L),
            (w[33] = S))
          : (S = w[33]),
        w[34] !== z || w[35] !== L || w[36] !== O || w[37] !== F || w[38] !== H
          ? ((v =
              !L &&
              z &&
              (0, a.jsx)(N.MerchantAgreementForm, {
                submitting: H,
                onSubmit: (e) => {
                  ;(e.preventDefault(), H || I.current || O())
                },
                onBack: () => void F("/"),
              })),
            (w[34] = z),
            (w[35] = L),
            (w[36] = O),
            (w[37] = F),
            (w[38] = H),
            (w[39] = v))
          : (v = w[39]),
        w[40] !== z || w[41] !== L || w[42] !== D
          ? ((j =
              (L || !z) &&
              (0, a.jsx)(y.$, {
                className: "self-start",
                color: "secondary",
                onClick: () => void D(),
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.agreement.refresh",
                  defaultMessage: "Refresh status",
                  description:
                    "Button on merchant settings to retry loading access or check whether another workspace member has accepted the merchant agreement",
                }),
              })),
            (w[40] = z),
            (w[41] = L),
            (w[42] = D),
            (w[43] = j))
          : (j = w[43]),
        w[44] !== x || w[45] !== b || w[46] !== S || w[47] !== v || w[48] !== j
          ? ((_ = (0, a.jsx)("main", {
              className: "h-full overflow-y-auto bg-surface px-6 py-8 text-default",
              children: (0, a.jsxs)("div", {
                className: "mx-auto flex min-h-full w-full max-w-3xl flex-col justify-center gap-8",
                children: [g, x, b, S, v, j],
              }),
            })),
            (w[44] = x),
            (w[45] = b),
            (w[46] = S),
            (w[47] = v),
            (w[48] = j),
            (w[49] = _))
          : (_ = w[49]),
        _
      )
    }
    function C(e) {
      return "2026-06-15" === e.agreement_version && "2026-10-14-commerce-policies" === e.consent_version
    }
    var I = s("on57")
    function U(e) {
      let t,
        s,
        i,
        r,
        l = (0, n.c)(8)
      return (
        l[0] !== e ? (({ className: t, ...s } = e), (l[0] = e), (l[1] = t), (l[2] = s)) : ((t = l[1]), (s = l[2])),
        l[3] !== t
          ? ((i = (0, I.A)("bg-black! text-white! disabled:opacity-100! aria-disabled:opacity-100!", t)),
            (l[3] = t),
            (l[4] = i))
          : (i = l[4]),
        l[5] !== s || l[6] !== i
          ? ((r = (0, a.jsx)(y.$, { ...s, className: i, color: "primary" })), (l[5] = s), (l[6] = i), (l[7] = r))
          : (r = l[7]),
        r
      )
    }
    var q = s("D7Ms"),
      E = s("BSnr"),
      L = s("Qgfj"),
      D = s("JNtf"),
      z = s("mUDD")
    function O(e) {
      let t,
        s = (0, n.c)(3),
        { field: i, reason: r } = e,
        l = r ?? "unknown"
      return (
        s[0] !== i || s[1] !== l
          ? ((t = (0, a.jsx)(u.A, {
              id: "merchantSettings.issueReasons.reason",
              defaultMessage:
                "{field}: {reason, select, unverified_product_domain {The product domain was not verified for this profile. Verify the domain and upload again} product_domain_outside_profile {The product domain is outside this profile's allowed domains. Use a product URL belonging to this profile} invalid_landing_page_url {The landing page URL is invalid. Use an HTTP or HTTPS URL without credentials or invalid characters} invalid_url {The URL is invalid. Enter a complete HTTP or HTTPS URL} unsupported_image_url {The image URL is invalid or unsupported. Enter a complete supported image URL} missing {A required value is missing. Fill in this field} none {This field cannot be empty. Supply a value} type {The value has the wrong data type. Match this field's type in the feed specification} unsupported_value {This value is not supported. Use one of the allowed values in the feed specification} invalid_country {Use a supported two-letter country code, such as CA or GB} invalid_country_list {Use a JSON array or comma-separated list of supported two-letter country codes} invalid_condition {The product condition is invalid. Use new, refurbished, or used} invalid_price {The price must include an amount and currency, such as 12.99 USD} invalid_availability {Use a supported availability, such as in_stock or out_of_stock} invalid_bool {Use true or false for this field} expected_price_with_currency {The price must include an amount and currency, such as 12.99 USD} expected_google_iso_8601 {Use an ISO 8601 date and time with a timezone, such as 2026-10-06T12:00:00Z} invalid_amount {The price amount is invalid. Enter a finite number} non_positive_amount {The price amount must be positive} currency_mismatch {The sale price currency must match the regular price currency} must_be_less_than_price {The sale price must be lower than the regular price} conflicting_alias {Multiple columns provide conflicting values for this field. Keep one consistent value} userinfo_not_allowed {The URL contains credentials. Remove the username and password} unknown {A specific cause was not recorded. Share the available feed details with OpenAI support so they can investigate} other {Review the field requirements. If the value is already valid, share the available feed details with OpenAI support so they can investigate}}",
              description:
                "Plain-text explanation and next step for a saved feed field validation reason, used in merchant validation results and issue details. Calmly explain the saved validation failure and the corrective action. Text may wrap; do not add HTML or Markdown. {field} is an untranslated canonical feed column name, such as url or price. {reason} is a non-displayed machine code selecting the explanation; preserve placeholder names and select keys. Missing reasons select unknown; unrecognized codes select other. These fallbacks do not identify a specific cause, and saved examples may not cover every rejected row. Keep protocol names and literal feed values unchanged.",
              values: { field: i, reason: l },
            })),
            (s[0] = i),
            (s[1] = l),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    function H(e) {
      let t,
        s,
        i,
        l,
        o,
        d,
        c,
        m,
        h,
        g,
        b = (0, n.c)(43),
        { feedId: S, uploadId: v, code: j, onAccessDenied: _ } = e,
        A = void 0 === j ? "invalid_value" : j,
        { userId: M, accountId: N } = (0, p.As)()
      ;(b[0] !== N || b[1] !== A || b[2] !== S || b[3] !== v || b[4] !== M
        ? ((t = ["merchant-issue-reasons", M, N, S, v, A]),
          (b[0] = N),
          (b[1] = A),
          (b[2] = S),
          (b[3] = v),
          (b[4] = M),
          (b[5] = t))
        : (t = b[5]),
        b[6] !== A || b[7] !== S || b[8] !== _ || b[9] !== v
          ? ((s = async (e) => {
              let { signal: t } = e
              try {
                return await f.Request.safeGet("/shopping/feeds/{feed_id}/uploads/{upload_id}/diagnostics", {
                  parameters: { path: { feed_id: S, upload_id: v }, query: { code: A } },
                  signal: t,
                  expectedErrorStatuses: [400, 401, 403, 404, 409, 410, 429, 503],
                })
              } catch (e) {
                throw (e instanceof w.fk && [401, 403].includes(e.status) && _?.(), e)
              }
            }),
            (b[6] = A),
            (b[7] = S),
            (b[8] = _),
            (b[9] = v),
            (b[10] = s))
          : (s = b[10]),
        b[11] !== t || b[12] !== s
          ? ((i = { queryKey: t, queryFn: s, staleTime: 0, gcTime: 0, retry: !1 }),
            (b[11] = t),
            (b[12] = s),
            (b[13] = i))
          : (i = b[13]))
      let { data: T, isFetching: k, isError: R, error: P, refetch: F } = (0, r.I)(i)
      if (k) {
        let e
        return (
          b[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("p", {
                role: "status",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.issueReasons.loading",
                  defaultMessage: "Loading specific error reasons…",
                  description: "Loading saved validation reasons for an expanded feed issue",
                }),
              })),
              (b[14] = e))
            : (e = b[14]),
          e
        )
      }
      if (R) {
        let e,
          t,
          s,
          n,
          i,
          r,
          l = P instanceof w.fk && [404, 409, 410].includes(P.status)
        if (P instanceof w.fk && [401, 403].includes(P.status)) {
          let t
          ;(b[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.accessDenied",
                defaultMessage:
                  "You no longer have access to these saved reasons. Check the selected account or ask an administrator for access",
                description:
                  "Saved feed diagnostic request was denied; do not show previously cached examples or expose backend error text.",
              })),
              (b[15] = t))
            : (t = b[15]),
            (e = t))
        } else if (l) {
          let t
          ;(b[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.evidenceUnavailable",
                defaultMessage:
                  "Saved reasons are unavailable for this upload. Share the Feed ID and Upload ID with OpenAI support so they can investigate",
                description:
                  "Exact upload evidence was missing or could not be resolved. This does not mean there were no rejected rows or that a different upload should be shown.",
              })),
              (b[16] = t))
            : (t = b[16]),
            (e = t))
        } else {
          let t
          ;(b[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.error",
                defaultMessage: "Specific error reasons could not be loaded",
                description:
                  "Request failure while loading feed validation reasons; this is distinct from an upload validation failure",
              })),
              (b[17] = t))
            : (t = b[17]),
            (e = t))
        }
        return (
          b[18] !== e
            ? ((t = (0, a.jsx)(x.l, { variant: "callout", type: "caution", role: "alert", content: e })),
              (b[18] = e),
              (b[19] = t))
            : (t = b[19]),
          b[20] !== F ? ((s = () => void F()), (b[20] = F), (b[21] = s)) : (s = b[21]),
          b[22] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.retry",
                defaultMessage: "Retry",
                description: "Retry loading the saved reasons for a feed issue",
              })),
              (b[22] = n))
            : (n = b[22]),
          b[23] !== s
            ? ((i = (0, a.jsx)(y.$, { color: "ghost", size: "compact", onClick: s, children: n })),
              (b[23] = s),
              (b[24] = i))
            : (i = b[24]),
          b[25] !== t || b[26] !== i
            ? ((r = (0, a.jsxs)("div", { className: "flex flex-col gap-3", children: [t, i] })),
              (b[25] = t),
              (b[26] = i),
              (b[27] = r))
            : (r = b[27]),
          r
        )
      }
      if (null == T) return null
      b[28] !== T.examples ? ((l = T.examples ?? []), (b[28] = T.examples), (b[29] = l)) : (l = b[29])
      let C = l
      return (
        b[30] !== A
          ? ((o = (0, a.jsx)("h3", {
              className: "font-medium",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.examplesByCode",
                defaultMessage:
                  "{code, select, missing_required_column {Missing column examples} other {Rejected value examples}}",
                description:
                  "Heading above saved examples for one diagnostic category in the merchant feed error drawer. Code is an untranslated diagnostic identifier; examples are a bounded sample, not every rejected row.",
                values: { code: A },
              }),
            })),
            (b[30] = A),
            (b[31] = o))
          : (o = b[31]),
        b[32] !== C
          ? ((d =
              0 === C.length
                ? (0, a.jsx)("p", {
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.issueReasons.unavailable",
                      defaultMessage: "Specific reasons were not saved or are no longer available for this upload",
                      description:
                        "No saved rejected-row examples are available; this does not mean the upload had no errors",
                    }),
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      C.map(B),
                      (0, a.jsx)("p", {
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.issueReasons.sampleLimit",
                          defaultMessage:
                            "Reasons come from up to 5 saved examples per field and may not cover every rejected row",
                          description:
                            "Discloses that the displayed feed validation reasons are sampled, not exhaustive",
                        }),
                      }),
                    ],
                  })),
            (b[32] = C),
            (b[33] = d))
          : (d = b[33]),
        b[34] !== F ? ((c = () => void F()), (b[34] = F), (b[35] = c)) : (c = b[35]),
        b[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(u.A, {
              id: "merchantSettings.issueReasons.refresh",
              defaultMessage: "Refresh examples",
              description:
                "Reload the saved examples for this exact upload and diagnostic category without submitting the feed again.",
            })),
            (b[36] = m))
          : (m = b[36]),
        b[37] !== c
          ? ((h = (0, a.jsx)(y.$, { color: "ghost", size: "compact", onClick: c, children: m })),
            (b[37] = c),
            (b[38] = h))
          : (h = b[38]),
        b[39] !== h || b[40] !== o || b[41] !== d
          ? ((g = (0, a.jsxs)("div", { className: "flex flex-col gap-3 text-sm select-text", children: [o, d, h] })),
            (b[39] = h),
            (b[40] = o),
            (b[41] = d),
            (b[42] = g))
          : (g = b[42]),
        g
      )
    }
    function B(e, t) {
      return (0, a.jsxs)(
        "div",
        {
          className: "flex flex-col gap-3",
          children: [
            (0, a.jsx)("p", {
              className: "text-xs",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.position",
                defaultMessage: "{file} · Record {row, number}",
                description:
                  "Saved example's location in the merchant feed error drawer. File is the processing filename; row is its one-based logical record position, not necessarily a physical text line.",
                values: { file: e.source_file, row: e.row_number },
              }),
            }),
            null != e.product_id &&
              (0, a.jsx)("p", {
                className: "text-sm break-all select-text",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.issueReasons.productId",
                  defaultMessage: "Product ID: {id}",
                  description:
                    "Saved product identifier for a rejected record in merchant feed error details. Id is merchant-provided plain text, not a link.",
                  values: { id: e.product_id },
                }),
              }),
            (0, a.jsx)("div", {
              className: "text-sm break-all whitespace-pre-wrap select-text",
              children: (0, a.jsx)(V, { example: e }),
            }),
            e.value_truncated &&
              (0, a.jsx)("p", {
                className: "text-xs",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.issueReasons.truncatedValue",
                  defaultMessage: "This long value has been shortened",
                  description:
                    "Notice below a saved rejected product value in merchant error details when the backend marked it as truncated.",
                }),
              }),
            (0, a.jsx)("p", { children: (0, a.jsx)(O, { field: e.field, reason: e.reason }) }),
          ],
        },
        t,
      )
    }
    function V(e) {
      let t,
        s,
        i = (0, n.c)(6),
        { example: r } = e
      if (r.value_redacted) {
        let e
        return (
          i[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.redactedValue",
                defaultMessage: "Value hidden because the URL contains credentials",
                description:
                  "Explains why a rejected product value is hidden in merchant feed error details. The server marked it as containing credentials; do not reveal the value.",
              })),
              (i[0] = e))
            : (e = i[0]),
          e
        )
      }
      if (null == r.failed_value) {
        let e
        return (
          i[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.valueUnavailable",
                defaultMessage: "Value not available",
                description:
                  "A rejected value was not recorded as a displayable scalar. This does not establish that the source contained a literal null or an empty field.",
              })),
              (i[1] = e))
            : (e = i[1]),
          e
        )
      }
      return (
        i[2] !== r.failed_value
          ? ((t = JSON.stringify(r.failed_value)), (i[2] = r.failed_value), (i[3] = t))
          : (t = i[3]),
        i[4] !== t
          ? ((s = (0, a.jsx)(u.A, {
              id: "merchantSettings.issueReasons.rejectedValue",
              defaultMessage: "Rejected value: {value}",
              description:
                "Saved rejected product value in merchant feed error details. Value is JSON-quoted plain text so empty strings and whitespace remain visible; never render it as HTML or a link.",
              values: { value: t },
            })),
            (i[4] = t),
            (i[5] = s))
          : (s = i[5]),
        s
      )
    }
    function $(e) {
      let t,
        s = (0, n.c)(2),
        { code: i } = e,
        r = i ?? "unclassified"
      return (
        s[0] !== r
          ? ((t = (0, a.jsx)(u.A, {
              id: "merchantSettings.issueDetails.issueTitle",
              defaultMessage:
                "{code, select, missing_required_column {Missing required column} invalid_value {Invalid value} invalid_gzip {Invalid gzip file} unsupported_file_type {Unsupported file type} invalid_sftp_directory_layout {SFTP directory layout} other {Unclassified issue}}",
              description:
                "Short issue type shown in merchant Feed activity's Issues list and error details. Code is an untranslated diagnostic identifier that selects the human-readable label; other means the run has no recognized structured diagnostic.",
              values: { code: r },
            })),
            (s[0] = r),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function K(e) {
      let t,
        s,
        i,
        r,
        l,
        o,
        d,
        c,
        m,
        h,
        p,
        f,
        g,
        y,
        S,
        v,
        j,
        _,
        w,
        A,
        M,
        N,
        T,
        k,
        R,
        P,
        F,
        C,
        I,
        U,
        q,
        E,
        O,
        B,
        V,
        $ = (0, n.c)(74),
        { feedId: K, upload: Q, onClose: Y, onRestoreFocus: ee, onAccessDenied: et } = e
      ;($[0] !== Y
        ? ((t = (e) => {
            e || Y()
          }),
          ($[0] = Y),
          ($[1] = t))
        : (t = $[1]),
        $[2] !== ee
          ? ((s = {
              onCloseAutoFocus: (e) => {
                ;(e.preventDefault(), ee())
              },
            }),
            ($[2] = ee),
            ($[3] = s))
          : (s = $[3]),
        $[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(D.L3, {
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.title",
                defaultMessage: "Error details",
                description:
                  "Title of the right-side drawer opened from a merchant feed's Issues list. It shows diagnostics for the selected upload only.",
              }),
            })),
            ($[4] = i))
          : (i = $[4]),
        $[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(z.c7, {
              titleSize: "base",
              title: i,
              subtitle: (0, a.jsx)(D.rr, {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.issueDetails.description",
                  defaultMessage:
                    "Review what was recorded for this upload and the next steps supported by that evidence",
                  description:
                    "Introductory guidance for the selected upload; do not assume every failure requires a merchant source-file change.",
                }),
              }),
            })),
            ($[5] = r))
          : (r = $[5]))
      let es = "failed" === Q.status ? "error" : "caution"
      return (
        $[6] !== Q.status ? ((l = (0, a.jsx)(Z, { status: Q.status })), ($[6] = Q.status), ($[7] = l)) : (l = $[7]),
        $[8] !== Q.status
          ? ((o = (0, a.jsx)(u.A, {
              id: "merchantSettings.issueDetails.statusSummary",
              defaultMessage:
                "{status, select, failed {This upload did not complete successfully. Review the recorded issues below to identify the next step} completed_with_errors {Processing finished with errors. Use the recorded counts and saved examples to identify affected products} other {Use the recorded issues and examples below to identify the next step}}",
              description:
                "Explains whole-upload failure versus processing that completed with errors. Counts and saved examples, rather than status alone, establish the affected products. Status is an untranslated machine identifier.",
              values: { status: Q.status },
            })),
            ($[8] = Q.status),
            ($[9] = o))
          : (o = $[9]),
        $[10] !== es || $[11] !== l || $[12] !== o
          ? ((d = (0, a.jsx)(x.l, { variant: "callout", type: es, title: l, content: o })),
            ($[10] = es),
            ($[11] = l),
            ($[12] = o),
            ($[13] = d))
          : (d = $[13]),
        $[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)("dt", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.accepted",
                defaultMessage: "Accepted rows",
                description:
                  "Label for the selected upload's recorded accepted-row count; unavailable is distinct from zero.",
              }),
            })),
            ($[14] = c))
          : (c = $[14]),
        $[15] !== Q.rows_accepted
          ? ((m = (0, a.jsx)("dd", { children: (0, a.jsx)(X, { value: Q.rows_accepted }) })),
            ($[15] = Q.rows_accepted),
            ($[16] = m))
          : (m = $[16]),
        $[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)("dt", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.rejectedCount",
                defaultMessage: "Rejected rows",
                description:
                  "Label for the selected upload's recorded rejected-row total. Field counts can overlap and must not be added together.",
              }),
            })),
            ($[17] = h))
          : (h = $[17]),
        $[18] !== Q.rows_rejected
          ? ((p = (0, a.jsx)("dd", { children: (0, a.jsx)(X, { value: Q.rows_rejected }) })),
            ($[18] = Q.rows_rejected),
            ($[19] = p))
          : (p = $[19]),
        $[20] !== m || $[21] !== p
          ? ((f = (0, a.jsxs)("dl", { className: "grid grid-cols-2 gap-3 text-sm", children: [c, m, h, p] })),
            ($[20] = m),
            ($[21] = p),
            ($[22] = f))
          : (f = $[22]),
        $[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, a.jsx)("h3", {
              className: "text-sm font-medium",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.fields",
                defaultMessage: "Recorded issues",
                description:
                  "Heading above saved field-level and upload-level diagnostics in the merchant feed error drawer.",
              }),
            })),
            ($[23] = g))
          : (g = $[23]),
        $[24] !== Q.diagnostics
          ? ((y = (0, a.jsxs)("section", {
              className: "flex flex-col gap-3",
              children: [
                g,
                Q.diagnostics?.length
                  ? (0, a.jsx)("dl", { className: "text-sm", children: Q.diagnostics.map(W) })
                  : (0, a.jsx)("p", {
                      className: "text-sm text-secondary",
                      children: (0, a.jsx)(u.A, {
                        id: "merchantSettings.issueDetails.noDiagnostics",
                        defaultMessage: "No structured issue details were recorded for this run",
                        description:
                          "Fallback in the merchant feed error drawer when an upload failed without saved structured diagnostics. This does not mean there were no errors.",
                      }),
                    }),
              ],
            })),
            (S =
              null != Q.diagnostics &&
              Q.diagnostics.length > 1 &&
              (0, a.jsx)("p", {
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.issueDetails.overlappingCounts",
                  defaultMessage: "A row can have more than one issue, so these counts may overlap",
                  description:
                    "Per-diagnostic counts are not additive; the rejected-row total is reported separately when available.",
                }),
              })),
            ($[24] = Q.diagnostics),
            ($[25] = y),
            ($[26] = S))
          : ((y = $[25]), (S = $[26])),
        $[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, a.jsx)("h3", {
              className: "text-sm font-medium",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.fix",
                defaultMessage: "Next steps",
                description:
                  "Heading above evidence-based corrective steps or OpenAI investigation guidance; the cause may be unknown.",
              }),
            })),
            ($[27] = v))
          : (v = $[27]),
        $[28] !== Q.diagnostics
          ? ((j = new Set(Q.diagnostics?.length ? Q.diagnostics.map(J) : ["unclassified"])),
            ($[28] = Q.diagnostics),
            ($[29] = j))
          : (j = $[29]),
        $[30] !== j ? ((_ = [...j].map(G)), ($[30] = j), ($[31] = _)) : (_ = $[31]),
        $[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, a.jsx)(b.G, {
              href: "https://developers.openai.com/commerce/specs/file-upload/products",
              initiator: "open_in_browser_bridge",
              underline: "always",
              openTarget: "external-browser",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.feedFormats.specifications",
                defaultMessage: "Feed specifications",
                description:
                  "Link in the Product feed settings help panel to the product feed schema, required fields and examples. Keep this label concise.",
              }),
            })),
            ($[32] = w))
          : (w = $[32]),
        $[33] !== _
          ? ((A = (0, a.jsxs)("section", {
              className: "flex flex-col gap-3 border-t border-subtle pt-6",
              children: [v, _, w],
            })),
            ($[33] = _),
            ($[34] = A))
          : (A = $[34]),
        $[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = ["missing_required_column", "invalid_value"]), ($[35] = M))
          : (M = $[35]),
        $[36] !== K || $[37] !== et || $[38] !== Q.diagnostics || $[39] !== Q.upload_id
          ? ((N = M.map((e) =>
              Q.diagnostics?.some((t) => t.code === e)
                ? (0, a.jsx)(H, { feedId: K, uploadId: Q.upload_id, code: e, onAccessDenied: et }, e)
                : null,
            )),
            ($[36] = K),
            ($[37] = et),
            ($[38] = Q.diagnostics),
            ($[39] = Q.upload_id),
            ($[40] = N))
          : (N = $[40]),
        $[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, a.jsx)("h3", {
              className: "text-sm font-medium",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.upload",
                defaultMessage: "Upload details",
                description:
                  "Heading above the selected upload's identifiers, source, and timestamps in merchant error details.",
              }),
            })),
            ($[41] = T))
          : (T = $[41]),
        $[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, a.jsx)("dt", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.feed",
                defaultMessage: "Feed ID",
                description:
                  "Label for the selected merchant's product feed identifier in the error drawer; its value is copyable.",
              }),
            })),
            ($[42] = k))
          : (k = $[42]),
        $[43] !== K
          ? ((R = (0, a.jsx)("dd", { className: "break-all select-text", children: K })), ($[43] = K), ($[44] = R))
          : (R = $[44]),
        $[45] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, a.jsx)("dt", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.run",
                defaultMessage: "Upload ID",
                description:
                  "Label for the exact upload identifier being inspected in the merchant error drawer; it can be shared with support.",
              }),
            })),
            ($[45] = P))
          : (P = $[45]),
        $[46] !== Q.upload_id
          ? ((F = (0, a.jsx)("dd", { className: "break-all select-text", children: Q.upload_id })),
            ($[46] = Q.upload_id),
            ($[47] = F))
          : (F = $[47]),
        $[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, a.jsx)("dt", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueList.source",
                defaultMessage: "Source",
                description: "Label for how the merchant's product feed upload arrived.",
              }),
            })),
            ($[48] = C))
          : (C = $[48]),
        $[49] !== Q.source
          ? ((I = (0, a.jsx)("dd", {
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueList.sourceName",
                defaultMessage:
                  "{source, select, file_upload {File upload} hosted_url {Hosted URL} sftp {SFTP} other {Unknown source}}",
                description:
                  "Recorded upload method. Source is an untranslated identifier; other means unavailable. Preserve SFTP.",
                values: { source: Q.source },
              }),
            })),
            ($[49] = Q.source),
            ($[50] = I))
          : (I = $[50]),
        $[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = (0, a.jsx)("dt", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.uploaded",
                defaultMessage: "Uploaded",
                description: "Label for when the selected product feed upload began, in the merchant error drawer.",
              }),
            })),
            ($[51] = U))
          : (U = $[51]),
        $[52] !== Q.uploaded_at
          ? ((q = (0, a.jsx)("dd", {
              children: (0, a.jsx)(L.XU, { value: Q.uploaded_at, dateStyle: "medium", timeStyle: "short" }),
            })),
            ($[52] = Q.uploaded_at),
            ($[53] = q))
          : (q = $[53]),
        $[54] !== Q.completed_at
          ? ((E =
              null != Q.completed_at &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("dt", {
                    className: "text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.issueDetails.completed",
                      defaultMessage: "Processing ended",
                      description:
                        "Label for when processing of the selected upload ended, including failed uploads, in merchant error details.",
                    }),
                  }),
                  (0, a.jsx)("dd", {
                    children: (0, a.jsx)(L.XU, { value: Q.completed_at, dateStyle: "medium", timeStyle: "short" }),
                  }),
                ],
              })),
            ($[54] = Q.completed_at),
            ($[55] = E))
          : (E = $[55]),
        $[56] !== R || $[57] !== F || $[58] !== I || $[59] !== q || $[60] !== E
          ? ((O = (0, a.jsxs)("section", {
              className: "flex flex-col gap-3 border-t border-subtle pt-6",
              children: [
                T,
                (0, a.jsxs)("dl", {
                  className: "grid grid-cols-2 gap-3 text-sm",
                  children: [k, R, P, F, C, I, U, q, E],
                }),
              ],
            })),
            ($[56] = R),
            ($[57] = F),
            ($[58] = I),
            ($[59] = q),
            ($[60] = E),
            ($[61] = O))
          : (O = $[61]),
        $[62] !== f || $[63] !== y || $[64] !== S || $[65] !== A || $[66] !== N || $[67] !== O || $[68] !== d
          ? ((B = (0, a.jsx)(z.R4, {
              size: "viewport",
              children: (0, a.jsxs)("div", { className: "flex flex-col gap-6", children: [r, d, f, y, S, A, N, O] }),
            })),
            ($[62] = f),
            ($[63] = y),
            ($[64] = S),
            ($[65] = A),
            ($[66] = N),
            ($[67] = O),
            ($[68] = d),
            ($[69] = B))
          : (B = $[69]),
        $[70] !== t || $[71] !== s || $[72] !== B
          ? ((V = (0, a.jsx)(D.lG, {
              open: !0,
              onOpenChange: t,
              contentProps: s,
              variant: "chatgpt",
              size: "feature",
              contentPosition: "anchored",
              contentClassName: "inset-y-4 right-4 flex flex-col",
              children: B,
            })),
            ($[70] = t),
            ($[71] = s),
            ($[72] = B),
            ($[73] = V))
          : (V = $[73]),
        V
      )
    }
    function G(e) {
      return (0, a.jsx)(
        "p",
        {
          className: "text-sm text-secondary",
          children: (0, a.jsx)(u.A, {
            id: "merchantSettings.issueDetails.fixDescription",
            defaultMessage:
              "{code, select, missing_required_column {Check the recorded field names and add the missing required columns before uploading again. If the columns are already present, share the Feed ID and Upload ID with OpenAI support} invalid_value {Review the saved reason for each rejected value before changing the feed. If the reason is unavailable or the value already meets the requirements, share the Feed ID and Upload ID with OpenAI support} invalid_gzip {Recreate the gzip file and verify that it decompresses, then upload it again} unsupported_file_type {Convert the feed to a supported file format, then upload it again} invalid_sftp_directory_layout {Upload the feed files directly to the SFTP root instead of a subfolder} other {These diagnostics do not identify a specific cause, so a source-file change cannot be recommended yet. Share the Feed ID and Upload ID below with OpenAI support so they can investigate}}",
            description:
              "Evidence-based next step for a saved feed diagnostic. Code selects an instruction. Unknown causes require investigation, not an assumed source-file fix; OpenAI support can investigate with the displayed identifiers. Preserve gzip, SFTP, Feed ID, and Upload ID.",
            values: { code: e },
          }),
        },
        e,
      )
    }
    function J(e) {
      return e.code
    }
    function W(e, t) {
      return (0, a.jsxs)(
        "div",
        {
          className: "flex items-start justify-between gap-4 border-b border-subtle py-3",
          children: [
            (0, a.jsxs)("dt", {
              className: "break-all select-text",
              children: [
                (0, a.jsx)($, { code: e.code }),
                e.field
                  ? (0, a.jsx)("p", { className: "text-xs text-secondary", children: e.field })
                  : (0, a.jsx)("p", {
                      className: "text-xs text-secondary",
                      children: (0, a.jsx)(u.A, {
                        id: "merchantSettings.issueDetails.noField",
                        defaultMessage: "No field recorded",
                        description:
                          "No specific field was recorded with this diagnostic; this does not mean all fields are affected.",
                      }),
                    }),
              ],
            }),
            (0, a.jsx)("dd", {
              className: "shrink-0 text-secondary",
              children:
                null == e.rows_affected
                  ? (0, a.jsx)(X, { value: e.rows_affected })
                  : (0, a.jsx)(u.A, {
                      id: "merchantSettings.issueDetails.affectedRows",
                      defaultMessage: "{count, plural, one {# row} other {# rows}}",
                      description:
                        "Recorded number of rows affected by one field diagnostic in merchant error details. Count is a nonnegative integer; field counts can overlap.",
                      values: { count: e.rows_affected },
                    }),
            }),
          ],
        },
        t,
      )
    }
    function Z(e) {
      let t,
        s = (0, n.c)(2),
        { status: i } = e
      return (
        s[0] !== i
          ? ((t = (0, a.jsx)(u.A, {
              id: "merchantSettings.issueDetails.status",
              defaultMessage:
                "{status, select, failed {Upload failed} completed_with_errors {Completed with errors} other {Status unavailable}}",
              description:
                "Recorded status for an upload in the Issues list or drawer. Distinguish an upload that failed from processing that completed with errors; other is an unexpected or unavailable status.",
              values: { status: i },
            })),
            (s[0] = i),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function X(e) {
      let t,
        s = (0, n.c)(2),
        { value: i } = e
      return (
        s[0] !== i
          ? ((t =
              null == i
                ? (0, a.jsx)(u.A, {
                    id: "merchantSettings.issueDetails.countNotRecorded",
                    defaultMessage: "Not recorded",
                    description: "A row count was not recorded; do not interpret it as zero.",
                  })
                : (0, a.jsx)(L.Gr, { value: i })),
            (s[0] = i),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function Q(e) {
      let t,
        s,
        i,
        r,
        l,
        o,
        d,
        m,
        h,
        p,
        f,
        g = (0, n.c)(31),
        { page: x, total: b, onPageChange: S } = e,
        v = (0, c.A)(),
        j = Math.ceil(b / 10)
      if (j <= 1) return null
      g[0] !== v
        ? ((t = v.formatMessage({
            id: "merchantSettings.activity.pagination.label",
            defaultMessage: "Feed activity pagination",
            description:
              "Accessible name for the pagination controls below Recent runs or Issues in merchant feed settings. Merchants use these controls to browse ten records at a time.",
          })),
          (g[0] = v),
          (g[1] = t))
        : (t = g[1])
      let _ = 10 * x + 1,
        w = Math.min((x + 1) * 10, b)
      g[2] !== _ || g[3] !== w || g[4] !== b
        ? ((s = (0, a.jsx)("span", {
            "aria-live": "polite",
            children: (0, a.jsx)(u.A, {
              id: "merchantSettings.activity.pagination.range",
              defaultMessage: "Showing {start, number}–{end, number} of {total, number}",
              description:
                "Result range below Recent runs or Issues in merchant feed settings. The start and end placeholders are the first and last visible one-based record positions; total is the number of loaded records matching the filters, not all retained history.",
              values: { start: _, end: w, total: b },
            }),
          })),
          (g[2] = _),
          (g[3] = w),
          (g[4] = b),
          (g[5] = s))
        : (s = g[5])
      let A = 0 === x
      ;(g[6] !== S || g[7] !== x ? ((i = () => S(x - 1)), (g[6] = S), (g[7] = x), (g[8] = i)) : (i = g[8]),
        g[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(u.A, {
              id: "merchantSettings.activity.pagination.previous",
              defaultMessage: "Previous",
              description:
                "Button below Recent runs or Issues in merchant feed settings that shows the previous page of up to ten records. Disabled on the first page.",
            })),
            (g[9] = r))
          : (r = g[9]),
        g[10] !== A || g[11] !== i
          ? ((l = (0, a.jsx)(y.$, {
              type: "button",
              color: "outlineCard",
              size: "actionSm",
              disabled: A,
              onClick: i,
              children: r,
            })),
            (g[10] = A),
            (g[11] = i),
            (g[12] = l))
          : (l = g[12]))
      let M = x + 1
      g[13] !== j || g[14] !== M
        ? ((o = (0, a.jsx)(u.A, {
            id: "merchantSettings.activity.pagination.page",
            defaultMessage: "Page {page, number} of {count, number}",
            description:
              "Current page indicator between Previous and Next in merchant Feed activity. Page is the current one-based page number; count is the total number of pages for the loaded, filtered records.",
            values: { page: M, count: j },
          })),
          (g[13] = j),
          (g[14] = M),
          (g[15] = o))
        : (o = g[15])
      let N = x + 1 >= j
      return (
        g[16] !== S || g[17] !== x ? ((d = () => S(x + 1)), (g[16] = S), (g[17] = x), (g[18] = d)) : (d = g[18]),
        g[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(u.A, {
              id: "merchantSettings.activity.pagination.next",
              defaultMessage: "Next",
              description:
                "Button below Recent runs or Issues in merchant feed settings that shows the next page of up to ten records. Disabled on the last page.",
            })),
            (g[19] = m))
          : (m = g[19]),
        g[20] !== N || g[21] !== d
          ? ((h = (0, a.jsx)(y.$, {
              type: "button",
              color: "outlineCard",
              size: "actionSm",
              disabled: N,
              onClick: d,
              children: m,
            })),
            (g[20] = N),
            (g[21] = d),
            (g[22] = h))
          : (h = g[22]),
        g[23] !== o || g[24] !== h || g[25] !== l
          ? ((p = (0, a.jsxs)("div", { className: "flex items-center gap-3", children: [l, o, h] })),
            (g[23] = o),
            (g[24] = h),
            (g[25] = l),
            (g[26] = p))
          : (p = g[26]),
        g[27] !== t || g[28] !== p || g[29] !== s
          ? ((f = (0, a.jsxs)("nav", {
              className: "flex flex-wrap items-center justify-between gap-3 text-xs",
              "aria-label": t,
              children: [s, p],
            })),
            (g[27] = t),
            (g[28] = p),
            (g[29] = s),
            (g[30] = f))
          : (f = g[30]),
        f
      )
    }
    var Y = s("bqtn")
    function ee(e) {
      let t,
        s,
        i,
        r,
        l,
        o,
        d,
        c,
        u,
        m,
        h = (0, n.c)(32),
        { label: p, value: f, options: g, onChange: x, disabled: b, showLabel: v, size: j } = e,
        _ = void 0 !== v && v,
        w = void 0 === j ? "compact" : j,
        A = "field" === w ? "gap-1.5" : "gap-1"
      ;(h[0] !== A ? ((t = (0, I.A)("flex min-w-0 flex-col", A)), (h[0] = A), (h[1] = t)) : (t = h[1]),
        h[2] !== p || h[3] !== _ || h[4] !== w
          ? ((s =
              _ &&
              (0, a.jsx)("span", {
                className: (0, I.A)("font-medium", "field" === w ? "text-sm text-secondary" : "text-xs"),
                children: p,
              })),
            (h[2] = p),
            (h[3] = _),
            (h[4] = w),
            (h[5] = s))
          : (s = h[5]))
      let M = "field" === w ? "inputControl" : "settingsSelect"
      ;(h[6] !== g || h[7] !== f
        ? ((i = g.find((e) => e.value === f)?.label), (h[6] = g), (h[7] = f), (h[8] = i))
        : (i = h[8]),
        h[9] !== i
          ? ((r = (0, a.jsx)("span", { className: "truncate", children: i })), (h[9] = i), (h[10] = r))
          : (r = h[10]),
        h[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(S.Aq_, { className: "text-tertiary" })), (h[11] = l))
          : (l = h[11]),
        h[12] !== b || h[13] !== p || h[14] !== M || h[15] !== r
          ? ((o = (0, a.jsxs)(y.$, {
              className: "w-full min-w-0 justify-between",
              "aria-label": p,
              color: "outlineCard",
              size: M,
              radius: "small",
              disabled: b,
              children: [r, l],
            })),
            (h[12] = b),
            (h[13] = p),
            (h[14] = M),
            (h[15] = r),
            (h[16] = o))
          : (o = h[16]))
      let N = String(f)
      if (h[17] !== x || h[18] !== g) {
        let e
        ;(h[20] !== x
          ? ((e = (e) =>
              (0, a.jsx)(
                Y.ms.RadioItem,
                { value: String(e.value), onSelect: () => x(e.value), children: e.label },
                String(e.value),
              )),
            (h[20] = x),
            (h[21] = e))
          : (e = h[21]),
          (d = g.map(e)),
          (h[17] = x),
          (h[18] = g),
          (h[19] = d))
      } else d = h[19]
      return (
        h[22] !== N || h[23] !== d
          ? ((c = (0, a.jsx)(Y.ms.RadioGroup, { value: N, children: d })), (h[22] = N), (h[23] = d), (h[24] = c))
          : (c = h[24]),
        h[25] !== o || h[26] !== c
          ? ((u = (0, a.jsx)(Y.Ab, { contentWidth: "menuWide", triggerButton: o, children: c })),
            (h[25] = o),
            (h[26] = c),
            (h[27] = u))
          : (u = h[27]),
        h[28] !== u || h[29] !== t || h[30] !== s
          ? ((m = (0, a.jsxs)("div", { className: t, children: [s, u] })),
            (h[28] = u),
            (h[29] = t),
            (h[30] = s),
            (h[31] = m))
          : (m = h[31]),
        m
      )
    }
    function et(e) {
      let t,
        s,
        l,
        o,
        m,
        h,
        g,
        b,
        v,
        j,
        _,
        A,
        M,
        N,
        T,
        k,
        R,
        P,
        F,
        C,
        I,
        L,
        D = (0, n.c)(128),
        { feedId: z } = e,
        O = (0, c.A)(),
        H = (0, i.jE)(),
        B = (0, d.useRef)(null),
        [V, G] = (0, d.useState)(0),
        { userId: J, accountId: W } = (0, p.As)()
      D[0] !== W || D[1] !== z || D[2] !== J
        ? ((t = JSON.stringify([J, W, z])), (D[0] = W), (D[1] = z), (D[2] = J), (D[3] = t))
        : (t = D[3])
      let X = t,
        [Y, et] = (0, d.useState)(null),
        [ei, er] = (0, d.useState)(null),
        [el, eo] = (0, d.useState)(7),
        [ed, ec] = (0, d.useState)("all"),
        [eu, em] = (0, d.useState)("newest")
      D[4] !== W || D[5] !== X || D[6] !== z || D[7] !== H || D[8] !== J
        ? ((s = function () {
            ;(et(X),
              er(null),
              H.removeQueries({ queryKey: ["merchant-issues", J, W, z] }),
              H.removeQueries({ queryKey: ["merchant-issue-reasons", J, W, z] }))
          }),
          (D[4] = W),
          (D[5] = X),
          (D[6] = z),
          (D[7] = H),
          (D[8] = J),
          (D[9] = s))
        : (s = D[9])
      let eh = s
      ;(D[10] !== W || D[11] !== el || D[12] !== z || D[13] !== J
        ? ((l = ["merchant-issues", J, W, z, el]), (D[10] = W), (D[11] = el), (D[12] = z), (D[13] = J), (D[14] = l))
        : (l = D[14]),
        D[15] !== X || D[16] !== el || D[17] !== z || D[18] !== eh
          ? ((o =
              null == z
                ? q.hT
                : async (e) => {
                    let { signal: t } = e
                    try {
                      let e = await f.Request.safeGet("/shopping/feeds/{feed_id}/uploads", {
                        parameters: { path: { feed_id: z }, query: { lookback_days: el ?? void 0, errors_only: !0 } },
                        signal: AbortSignal.any([t, AbortSignal.timeout(45e3)]),
                        expectedErrorStatuses: [400, 401, 403, 404, 429, 503],
                      })
                      return (t.throwIfAborted(), et((e) => (e === X ? null : e)), e)
                    } catch (e) {
                      throw (e instanceof w.fk && [401, 403].includes(e.status) && eh(), e)
                    }
                  }),
            (D[15] = X),
            (D[16] = el),
            (D[17] = z),
            (D[18] = eh),
            (D[19] = o))
          : (o = D[19]))
      let ep = null != z && Y !== X
      D[20] !== l || D[21] !== o || D[22] !== ep
        ? ((m = { queryKey: l, queryFn: o, enabled: ep, retry: !1, staleTime: 3e4 }),
          (D[20] = l),
          (D[21] = o),
          (D[22] = ep),
          (D[23] = m))
        : (m = D[23])
      let { data: ef, isPending: eg, isFetching: ex, isError: ey, error: eb, refetch: eS } = (0, r.I)(m)
      D[24] !== X || D[25] !== Y || D[26] !== eb
        ? ((h = Y === X || (eb instanceof w.fk && [401, 403].includes(eb.status))),
          (D[24] = X),
          (D[25] = Y),
          (D[26] = eb),
          (D[27] = h))
        : (h = D[27])
      let ev = h
      ;(ev && null != ei && er(null),
        D[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, a.jsx)(u.A, {
              id: "merchantSettings.refreshIssues",
              defaultMessage: "Refresh",
              description: "Reloads upload errors",
            })),
            (D[28] = g))
          : (g = D[28]))
      let ej = g
      if (
        D[29] !== ev ||
        D[30] !== ef?.truncated ||
        D[31] !== ef?.uploads ||
        D[32] !== el ||
        D[33] !== ei ||
        D[34] !== z ||
        D[35] !== O ||
        D[36] !== ey ||
        D[37] !== ex ||
        D[38] !== eg ||
        D[39] !== ed ||
        D[40] !== eu ||
        D[41] !== V ||
        D[42] !== eS
      ) {
        let e,
          t,
          s,
          n,
          i,
          r,
          l,
          o,
          d,
          c,
          m,
          h,
          p,
          f,
          g,
          w,
          C,
          I,
          q,
          L,
          H,
          K,
          J,
          W = ev
            ? void 0
            : ef?.uploads
                .filter(
                  (e) =>
                    ("failed" === e.status || "completed_with_errors" === e.status) &&
                    ("all" === ed ||
                      ("unclassified" === ed ? !e.diagnostics?.length : e.diagnostics?.some((e) => e.code === ed))),
                )
                .sort((e, t) => (Date.parse(e.uploaded_at) - Date.parse(t.uploaded_at)) * ("oldest" === eu ? 1 : -1)),
          X = Math.min(V, Math.max(1, Math.ceil((W?.length ?? 0) / 10)) - 1)
        null == W || ey || V === X || G(X)
        let Y = W?.slice(10 * X, (X + 1) * 10)
        ;((j = Y?.find((e) => e.upload_id === ei)),
          (v = E.X),
          (b = E.X.Content),
          (F = "gap-4"),
          D[55] !== O
            ? ((e = O.formatMessage({
                id: "merchantSettings.issueRange",
                defaultMessage: "Time range",
                description: "Lookback period for feed errors",
              })),
              (D[55] = O),
              (D[56] = e))
            : (e = D[56]),
          D[57] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (e) => {
                ;(eo(e), G(0), er(null))
              }),
              (s = [1, 3, 7, 30, 90]),
              (D[57] = t),
              (D[58] = s))
            : ((t = D[57]), (s = D[58])),
          D[59] === Symbol.for("react.memo_cache_sentinel") ? ((n = s.map(en)), (D[59] = n)) : (n = D[59]),
          D[60] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = [
                ...n,
                {
                  value: null,
                  label: (0, a.jsx)(u.A, {
                    id: "merchantSettings.recordedHistoryAllTime",
                    defaultMessage: "All time (recorded uploads)",
                    description:
                      "Time-range option in merchant Feed activity's Issues view. Includes recorded uploads without a date cutoff; available history can still be incomplete. Short option label.",
                  }),
                },
              ]),
              (D[60] = i))
            : (i = D[60]),
          D[61] !== el || D[62] !== e
            ? ((r = (0, a.jsx)(ee, { size: "field", showLabel: !0, label: e, value: el, onChange: t, options: i })),
              (D[61] = el),
              (D[62] = e),
              (D[63] = r))
            : (r = D[63]),
          D[64] !== O
            ? ((l = O.formatMessage({
                id: "merchantSettings.issueType",
                defaultMessage: "Issue type",
                description: "Filters upload history by diagnostic type",
              })),
              (D[64] = O),
              (D[65] = l))
            : (l = D[65]),
          D[66] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (e) => {
                ;(ec(e), G(0), er(null))
              }),
              (D[66] = o))
            : (o = D[66]),
          D[67] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = {
                value: "all",
                label: (0, a.jsx)(u.A, {
                  id: "merchantSettings.allIssues",
                  defaultMessage: "All issue types",
                  description: "Do not filter upload diagnostic types",
                }),
              }),
              (D[67] = d))
            : (d = D[67]),
          D[68] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = {
                value: "missing_required_column",
                label: (0, a.jsx)(u.A, {
                  id: "merchantSettings.missingColumn",
                  defaultMessage: "Missing required column",
                  description: "Feed is missing a required column",
                }),
              }),
              (D[68] = c))
            : (c = D[68]),
          D[69] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = {
                value: "invalid_value",
                label: (0, a.jsx)(u.A, {
                  id: "merchantSettings.invalidValue",
                  defaultMessage: "Invalid value",
                  description: "Feed contains invalid field values",
                }),
              }),
              (D[69] = m))
            : (m = D[69]),
          D[70] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = {
                value: "invalid_gzip",
                label: (0, a.jsx)(u.A, {
                  id: "merchantSettings.invalidGzip",
                  defaultMessage: "Invalid gzip file",
                  description: "Upload could not be decompressed as gzip",
                }),
              }),
              (D[70] = h))
            : (h = D[70]),
          D[71] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = {
                value: "unsupported_file_type",
                label: (0, a.jsx)(u.A, {
                  id: "merchantSettings.unsupportedType",
                  defaultMessage: "Unsupported file type",
                  description: "Upload uses an unsupported file format",
                }),
              }),
              (D[71] = p))
            : (p = D[71]),
          D[72] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = {
                value: "invalid_sftp_directory_layout",
                label: (0, a.jsx)(u.A, {
                  id: "merchantSettings.invalidLayout",
                  defaultMessage: "SFTP directory layout",
                  description: "Uploaded files are in unsupported SFTP subdirectories",
                }),
              }),
              (D[72] = f))
            : (f = D[72]),
          D[73] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = [
                d,
                c,
                m,
                h,
                p,
                f,
                {
                  value: "unclassified",
                  label: (0, a.jsx)(u.A, {
                    id: "merchantSettings.unclassified",
                    defaultMessage: "Unclassified",
                    description: "Failed upload with no structured diagnostics",
                  }),
                },
              ]),
              (D[73] = g))
            : (g = D[73]),
          D[74] !== ed || D[75] !== l
            ? ((w = (0, a.jsx)(ee, { size: "field", showLabel: !0, label: l, value: ed, onChange: o, options: g })),
              (D[74] = ed),
              (D[75] = l),
              (D[76] = w))
            : (w = D[76]),
          D[77] !== O
            ? ((C = O.formatMessage({
                id: "merchantSettings.issueOrder",
                defaultMessage: "Sort by",
                description: "Sort order of feed upload errors",
              })),
              (D[77] = O),
              (D[78] = C))
            : (C = D[78]),
          D[79] === Symbol.for("react.memo_cache_sentinel")
            ? ((I = (e) => {
                ;(em(e), G(0), er(null))
              }),
              (D[79] = I))
            : (I = D[79]),
          D[80] === Symbol.for("react.memo_cache_sentinel")
            ? ((q = {
                value: "newest",
                label: (0, a.jsx)(u.A, {
                  id: "merchantSettings.latestFirst",
                  defaultMessage: "Most recent",
                  description: "Sort uploads newest first",
                }),
              }),
              (D[80] = q))
            : (q = D[80]),
          D[81] === Symbol.for("react.memo_cache_sentinel")
            ? ((L = [
                q,
                {
                  value: "oldest",
                  label: (0, a.jsx)(u.A, {
                    id: "merchantSettings.earliestFirst",
                    defaultMessage: "Oldest",
                    description: "Sort uploads oldest first",
                  }),
                },
              ]),
              (D[81] = L))
            : (L = D[81]),
          D[82] !== eu || D[83] !== C
            ? ((H = (0, a.jsx)(ee, { size: "field", showLabel: !0, label: C, value: eu, onChange: I, options: L })),
              (D[82] = eu),
              (D[83] = C),
              (D[84] = H))
            : (H = D[84]))
        let et = null == z || ex
        ;(D[85] !== eS ? ((K = () => void eS()), (D[85] = eS), (D[86] = K)) : (K = D[86]),
          D[87] !== ex || D[88] !== et || D[89] !== K
            ? ((J = (0, a.jsx)(U, {
                className: "self-end justify-self-end",
                size: "dialog",
                disabled: et,
                loading: ex,
                sizingLabels: ej,
                onClick: K,
                children: ej,
              })),
              (D[87] = ex),
              (D[88] = et),
              (D[89] = K),
              (D[90] = J))
            : (J = D[90]),
          D[91] !== r || D[92] !== w || D[93] !== H || D[94] !== J
            ? ((_ = (0, a.jsxs)("div", {
                className: "grid grid-cols-1 items-end gap-3 sm:grid-cols-2 xl:grid-cols-[1fr_1.3fr_1fr_auto]",
                children: [r, w, H, J],
              })),
              (D[91] = r),
              (D[92] = w),
              (D[93] = H),
              (D[94] = J),
              (D[95] = _))
            : (_ = D[95]),
          D[96] === Symbol.for("react.memo_cache_sentinel")
            ? ((A = (0, a.jsx)("p", {
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.recordedIssueScope",
                  defaultMessage:
                    "Showing issues from recorded uploads in the selected time range. Earlier uploads may not be included.",
                  description:
                    "Scope notice below the filters in merchant Feed activity's Issues view. Only available recorded uploads are checked; the results do not establish that every upload was checked. No placeholders.",
                }),
              })),
              (D[96] = A))
            : (A = D[96]),
          D[97] !== z
            ? ((M =
                null == z &&
                (0, a.jsx)("p", {
                  className:
                    "rounded-lg bg-(--color-background-secondary-soft)/60 p-4 text-sm text-secondary dark:bg-(--color-background-secondary-soft)/30",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.selectForIssues",
                    defaultMessage: "Select a merchant above to check for issues.",
                    description: "No merchant selected for issue history",
                  }),
                })),
              (D[97] = z),
              (D[98] = M))
            : (M = D[98]),
          D[99] !== ev || D[100] !== z || D[101] !== eg
            ? ((N =
                null != z &&
                !ev &&
                eg &&
                (0, a.jsx)("p", {
                  role: "status",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.issuesLoading",
                    defaultMessage: "Loading feed issues…",
                    description: "Upload history loading",
                  }),
                })),
              (D[99] = ev),
              (D[100] = z),
              (D[101] = eg),
              (D[102] = N))
            : (N = D[102]),
          D[103] !== ev || D[104] !== ey
            ? ((T = ev
                ? (0, a.jsx)(x.l, {
                    variant: "callout",
                    type: "caution",
                    role: "alert",
                    content: (0, a.jsx)(u.A, {
                      id: "merchantSettings.issuesAccessDenied",
                      defaultMessage:
                        "You no longer have access to this merchant's issues. Check the selected account or ask an administrator for access",
                      description:
                        "Upload history or diagnostic access was denied. Hide previously loaded issue rows and details until a successful fresh read.",
                    }),
                  })
                : ey &&
                  (0, a.jsx)(x.l, {
                    variant: "callout",
                    type: "caution",
                    role: "alert",
                    content: (0, a.jsx)(u.A, {
                      id: "merchantSettings.issuesStatusUnavailable",
                      defaultMessage: "Status unavailable. Feed issues could not be loaded. Try refreshing.",
                      description: "Upload error history request failed",
                    }),
                  })),
              (D[103] = ev),
              (D[104] = ey),
              (D[105] = T))
            : (T = D[105]),
          D[106] !== ev || D[107] !== ef?.truncated
            ? ((k =
                !ev &&
                ef?.truncated &&
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.partialIssueHistory",
                    defaultMessage: "Some upload history could not be checked. Results may be incomplete.",
                    description:
                      "Warning in merchant Feed activity's Issues view when history reads were limited or some history was unavailable. Returned issues remain visible; missing history may contain additional issues. No placeholders.",
                  }),
                })),
              (D[106] = ev),
              (D[107] = ef?.truncated),
              (D[108] = k))
            : (k = D[108]),
          (R =
            !ey &&
            W?.length === 0 &&
            (0, a.jsx)("p", {
              children: ef?.truncated
                ? (0, a.jsx)(u.A, {
                    id: "merchantSettings.noIssuesInPartialHistory",
                    defaultMessage: "No issues found in the loaded upload history. Additional issues may exist.",
                    description:
                      "Empty state in merchant Feed activity's Issues view when a partial history read found no issues matching the filters. Missing history may contain issues; this does not establish that the merchant has no feed issues. No placeholders.",
                  })
                : (0, a.jsx)(u.A, {
                    id: "merchantSettings.noRecordedIssues",
                    defaultMessage: "No matching issues in the loaded upload history",
                    description:
                      "Empty state after a successful read in merchant Feed activity's Issues view. No failed uploads in the loaded history match the filters; this makes no claim about uploads outside that history. No placeholders.",
                  }),
            })),
          (P =
            null != Y &&
            Y.length > 0 &&
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("table", {
                  className: "w-full text-start text-sm",
                  children: [
                    (0, a.jsx)("thead", {
                      children: (0, a.jsxs)("tr", {
                        className: "text-xs text-secondary",
                        children: [
                          (0, a.jsx)("th", {
                            className: "py-3 font-normal",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.issueList.issue",
                              defaultMessage: "Issue",
                              description:
                                "Column heading for the diagnostic type in the merchant Feed activity Issues list.",
                            }),
                          }),
                          (0, a.jsx)("th", {
                            className: "py-3 font-normal",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.issueList.source",
                              defaultMessage: "Source",
                              description:
                                "Column heading for how a merchant's product feed upload arrived, such as File upload, Hosted URL, or SFTP.",
                            }),
                          }),
                          (0, a.jsx)("th", {
                            className: "py-3 font-normal",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.issueList.time",
                              defaultMessage: "Time",
                              description:
                                "Column heading for when the upload with an issue began in the merchant Feed activity Issues list.",
                            }),
                          }),
                          (0, a.jsx)("th", {
                            children: (0, a.jsx)("span", {
                              className: "sr-only",
                              children: (0, a.jsx)(u.A, {
                                id: "merchantSettings.issueList.details",
                                defaultMessage: "Details",
                                description:
                                  "Accessible column heading for buttons that open merchant feed error details.",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("tbody", {
                      children: Y.map((e) =>
                        (0, a.jsxs)(
                          "tr",
                          {
                            className: "border-t border-subtle",
                            children: [
                              (0, a.jsxs)("td", {
                                className: "py-4 pe-4",
                                children: [
                                  (0, a.jsx)("button", {
                                    type: "button",
                                    className: "cursor-interaction text-start text-default hover:underline",
                                    onClick: (t) => {
                                      ;((B.current = t.currentTarget), er(e.upload_id))
                                    },
                                    children: (0, a.jsx)("span", {
                                      className: "flex flex-col gap-1",
                                      children: e.diagnostics?.length
                                        ? [...new Set(e.diagnostics.map(ea))].map(es)
                                        : (0, a.jsx)($, { code: void 0 }),
                                    }),
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-xs text-secondary",
                                    children: (0, a.jsx)(Z, { status: e.status }),
                                  }),
                                ],
                              }),
                              (0, a.jsx)("td", {
                                className: "py-4 pe-4 text-secondary",
                                children: (0, a.jsx)(u.A, {
                                  id: "merchantSettings.issueList.sourceName",
                                  defaultMessage:
                                    "{source, select, file_upload {File upload} hosted_url {Hosted URL} sftp {SFTP} other {Unknown source}}",
                                  description:
                                    "Upload method in the merchant Issues list. Source is an untranslated method identifier; preserve SFTP. Other is used when the source is unavailable.",
                                  values: { source: e.source },
                                }),
                              }),
                              (0, a.jsx)("td", {
                                className: "py-4 text-xs text-secondary",
                                children: O.formatDate(e.uploaded_at, { dateStyle: "medium", timeStyle: "short" }),
                              }),
                              (0, a.jsx)("td", {
                                className: "py-4 text-end",
                                children: (0, a.jsx)(y.$, {
                                  type: "button",
                                  color: "ghost",
                                  size: "compact",
                                  uniform: !0,
                                  "aria-label": O.formatMessage({
                                    id: "merchantSettings.issueList.viewDetails",
                                    defaultMessage: "View error details",
                                    description:
                                      "Accessible label for the button on each row of the merchant Issues list. Opens a right-side drawer containing that exact upload's diagnostics.",
                                  }),
                                  onClick: (t) => {
                                    ;((B.current = t.currentTarget), er(e.upload_id))
                                  },
                                  children: (0, a.jsx)(S.j1b, {}),
                                }),
                              }),
                            ],
                          },
                          e.upload_id,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, a.jsx)(Q, {
                  page: X,
                  total: W?.length ?? 0,
                  onPageChange: (e) => {
                    ;(G(e), er(null))
                  },
                }),
              ],
            })),
          (D[29] = ev),
          (D[30] = ef?.truncated),
          (D[31] = ef?.uploads),
          (D[32] = el),
          (D[33] = ei),
          (D[34] = z),
          (D[35] = O),
          (D[36] = ey),
          (D[37] = ex),
          (D[38] = eg),
          (D[39] = ed),
          (D[40] = eu),
          (D[41] = V),
          (D[42] = eS),
          (D[43] = b),
          (D[44] = v),
          (D[45] = j),
          (D[46] = _),
          (D[47] = A),
          (D[48] = M),
          (D[49] = N),
          (D[50] = T),
          (D[51] = k),
          (D[52] = R),
          (D[53] = P),
          (D[54] = F))
      } else
        ((b = D[43]),
          (v = D[44]),
          (j = D[45]),
          (_ = D[46]),
          (A = D[47]),
          (M = D[48]),
          (N = D[49]),
          (T = D[50]),
          (k = D[51]),
          (R = D[52]),
          (P = D[53]),
          (F = D[54]))
      return (
        D[109] !== z || D[110] !== eh || D[111] !== j
          ? ((C =
              null != j &&
              null != z &&
              (0, a.jsx)(
                K,
                {
                  feedId: z,
                  upload: j,
                  onClose: () => er(null),
                  onRestoreFocus: () => B.current?.focus(),
                  onAccessDenied: eh,
                },
                j.upload_id,
              )),
            (D[109] = z),
            (D[110] = eh),
            (D[111] = j),
            (D[112] = C))
          : (C = D[112]),
        D[113] !== b ||
        D[114] !== _ ||
        D[115] !== A ||
        D[116] !== M ||
        D[117] !== N ||
        D[118] !== T ||
        D[119] !== k ||
        D[120] !== R ||
        D[121] !== P ||
        D[122] !== C ||
        D[123] !== F
          ? ((I = (0, a.jsxs)(b, { className: F, children: [_, A, M, N, T, k, R, P, C] })),
            (D[113] = b),
            (D[114] = _),
            (D[115] = A),
            (D[116] = M),
            (D[117] = N),
            (D[118] = T),
            (D[119] = k),
            (D[120] = R),
            (D[121] = P),
            (D[122] = C),
            (D[123] = F),
            (D[124] = I))
          : (I = D[124]),
        D[125] !== v || D[126] !== I
          ? ((L = (0, a.jsx)(v, { children: I })), (D[125] = v), (D[126] = I), (D[127] = L))
          : (L = D[127]),
        L
      )
    }
    function es(e) {
      return (0, a.jsx)($, { code: e }, e)
    }
    function ea(e) {
      return e.code
    }
    function en(e) {
      return {
        value: e,
        label:
          90 === e
            ? (0, a.jsx)(u.A, {
                id: "merchantSettings.threeMonths",
                defaultMessage: "3 months",
                description: "Merchant feed issue history lookback option for the past 90 days",
              })
            : (0, a.jsx)(u.A, {
                id: "merchantSettings.lastDays",
                defaultMessage: "{days, plural, one {# day} other {# days}}",
                description: "Upload history lookback period",
                values: { days: e },
              }),
      }
    }
    var ei = s("KIKs")
    function er(e) {
      let t = e.trim()
      if (!/^\d{4}-\d{2}-\d{2}T/.test(t)) return t
      let s = Date.parse(t)
      return Number.isNaN(s) ? t : new Date(s).toISOString().replace(/[-:.]/g, "")
    }
    function el(e) {
      if (!e) return null
      let t = Date.parse(
        e.replace(
          /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(\d{3,6})Z$/,
          (e, t, s, a, n, i, r, l) => `${t}-${s}-${a}T${n}:${i}:${r}.${l.slice(0, 3)}Z`,
        ),
      )
      return Number.isFinite(t) ? t : null
    }
    function eo(e) {
      let t,
        s,
        i,
        l,
        o,
        m,
        h,
        g,
        x,
        b,
        S,
        v,
        j,
        _,
        w,
        A,
        M,
        N,
        T,
        k,
        R,
        P,
        F,
        C,
        I = (0, n.c)(79),
        { feedId: L } = e,
        D = (0, c.A)(),
        { userId: z, accountId: O } = (0, p.As)(),
        [H, B] = (0, d.useState)(null),
        [V, $] = (0, d.useState)("all"),
        [K, G] = (0, d.useState)(0)
      ;(I[0] !== O || I[1] !== L || I[2] !== z
        ? ((t = ["merchant-runs", z, O, L]), (I[0] = O), (I[1] = L), (I[2] = z), (I[3] = t))
        : (t = I[3]),
        I[4] !== L
          ? ((s =
              null == L
                ? q.hT
                : (e) => {
                    let { signal: t } = e
                    return f.Request.safeGet("/shopping/feeds/{feed_id}/runs", {
                      parameters: { path: { feed_id: L } },
                      signal: AbortSignal.any([t, AbortSignal.timeout(45e3)]),
                    })
                  }),
            (I[4] = L),
            (I[5] = s))
          : (s = I[5]),
        I[6] !== t || I[7] !== s
          ? ((i = { queryKey: t, queryFn: s, retry: !1, staleTime: 1e4, refetchInterval: 15e3 }),
            (I[6] = t),
            (I[7] = s),
            (I[8] = i))
          : (i = I[8]))
      let { data: J, isPending: W, isFetching: Z, isError: X, refetch: Y } = (0, r.I)(i)
      ;(I[9] !== O || I[10] !== L || I[11] !== z
        ? ((l = ["merchant-run-history", z, O, L]), (I[9] = O), (I[10] = L), (I[11] = z), (I[12] = l))
        : (l = I[12]),
        I[13] !== L
          ? ((o =
              null == L
                ? q.hT
                : (e) => {
                    let { signal: t } = e
                    return f.Request.safeGet("/shopping/feeds/{feed_id}/uploads", {
                      parameters: { path: { feed_id: L }, query: { lookback_days: 90, errors_only: !1 } },
                      signal: AbortSignal.any([t, AbortSignal.timeout(45e3)]),
                    })
                  }),
            (I[13] = L),
            (I[14] = o))
          : (o = I[14]),
        I[15] !== l || I[16] !== o
          ? ((m = { queryKey: l, queryFn: o, retry: !1, staleTime: 3e4 }), (I[15] = l), (I[16] = o), (I[17] = m))
          : (m = I[17]))
      let { data: et, isPending: es, isFetching: ea, isError: en, refetch: ei } = (0, r.I)(m)
      if (
        I[18] !== J ||
        I[19] !== L ||
        I[20] !== D ||
        I[21] !== X ||
        I[22] !== K ||
        I[23] !== et?.truncated ||
        I[24] !== et?.uploads ||
        I[25] !== H ||
        I[26] !== V
      ) {
        ;((g =
          null == J
            ? void 0
            : [
                ...new Map(
                  [
                    ...(et?.uploads.map((e) => {
                      var t, s, a
                      let n, i, r
                      return (
                        (t = e),
                        (s = L ?? ""),
                        (a = J.merchant_name),
                        (i = -1 === (n = t.upload_id.indexOf("_")) ? "unknown" : t.upload_id.slice(0, n)),
                        (r = t.upload_id.slice(n + 1)),
                        {
                          merchant_name: a,
                          feed_id: s,
                          feed_type: i,
                          feed_key: `${s}/${i}/${r}`,
                          run_id: r,
                          timestamp: t.uploaded_at,
                          source: t.source,
                          status: "scanning" === t.status ? "received" : t.status,
                          started_at: t.uploaded_at,
                          completed_at: t.completed_at,
                          updated_at: t.completed_at ?? t.uploaded_at,
                          dimensions: { file_count: null, failed_file_count: null },
                          metrics: {
                            records_succeeded: t.rows_accepted ?? null,
                            records_failed: t.rows_rejected ?? null,
                          },
                        }
                      )
                    }) ?? []),
                    ...J.runs,
                  ].map(em),
                ).values(),
              ]
                .toSorted(eu)
                .slice(0, 100)),
          (h = !!(J?.truncated || et?.truncated)))
        let e = g?.filter((e) => "all" === V || (e.source ?? "unknown") === V),
          t = Math.min(K, Math.max(1, Math.ceil((e?.length ?? 0) / 10)) - 1)
        null == e || X || K === t || G(t)
        let s = e?.slice(10 * t, (t + 1) * 10),
          n = s?.find((e) => e.feed_key === H),
          i = g?.find(ec),
          r = n?.feed_type === "snapshot" || n?.feed_type === "incremental" ? n.feed_type : null
        ;((x =
          null != g &&
          g.length > 0 &&
          (0, a.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [
              (0, a.jsx)("h3", {
                className: "sr-only",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.runsHeading",
                  defaultMessage: "Runs",
                  description: "Recent feed ingestion history heading",
                }),
              }),
              (0, a.jsx)(ee, {
                label: D.formatMessage({
                  id: "merchantSettings.sourceFilter",
                  defaultMessage: "Filter by source",
                  description: "Accessible label for filtering a merchant's ingestion history by upload source",
                }),
                value: V,
                onChange: (e) => {
                  ;($(e), G(0), B(null))
                },
                options: ["all", "file_upload", "hosted_url", "sftp", "unknown"].map(ed),
              }),
              e?.length === 0 &&
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.noLoadedSourceRuns",
                    defaultMessage: "No loaded runs for this source",
                    description:
                      "Empty state in merchant Recent runs when none of the loaded records match the selected upload source. Other history may contain runs. No placeholders.",
                  }),
                }),
              (0, a.jsx)("ol", {
                className: "flex flex-col gap-3",
                children: s?.map((e) => {
                  let t = el(e.timestamp)
                  return (0, a.jsxs)(
                    "li",
                    {
                      className:
                        "flex flex-wrap items-center justify-between gap-3 border-t border-subtle pt-3 text-sm",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex min-w-0 flex-col gap-1",
                          children: [
                            (0, a.jsx)("p", {
                              className: "font-medium",
                              children: (0, a.jsx)(u.A, { ...ep[e.status] }),
                            }),
                            (0, a.jsx)("p", {
                              className: "text-xs text-secondary",
                              children: (0, a.jsx)(u.A, { ...ep[e.source ?? "unknown"] }),
                            }),
                            (0, a.jsx)("p", {
                              className: "text-xs text-secondary",
                              children:
                                null == t
                                  ? (0, a.jsx)(u.A, { ...ep.unavailable })
                                  : D.formatDate(t, { dateStyle: "medium", timeStyle: "short" }),
                            }),
                          ],
                        }),
                        (0, a.jsx)(y.$, {
                          color: "ghostActive",
                          size: "actionSm",
                          "aria-expanded": e.feed_key === H,
                          onClick: () => B(e.feed_key === H ? null : e.feed_key),
                          children:
                            e.feed_key === H
                              ? (0, a.jsx)(u.A, {
                                  id: "merchantSettings.hideRunDetails",
                                  defaultMessage: "Hide details",
                                  description:
                                    "Button on the expanded run in merchant Recent runs. Collapses that run's processing details and returns to the list.",
                                })
                              : (0, a.jsx)(u.A, {
                                  id: "merchantSettings.viewRunDetails",
                                  defaultMessage: "View details",
                                  description:
                                    "Button on a run in merchant Recent runs. Expands this run's status, timing, and processing metrics immediately below its row.",
                                }),
                        }),
                        e.feed_key === H &&
                          (0, a.jsx)("div", {
                            className: "w-full rounded-lg bg-surface-secondary",
                            children:
                              n && (0, a.jsx)(eh, { run: n, feedType: r, lastSuccessAt: i?.completed_at }, n.feed_key),
                          }),
                      ],
                    },
                    e.feed_key,
                  )
                }),
              }),
              (0, a.jsx)(Q, {
                page: t,
                total: e?.length ?? 0,
                onPageChange: (e) => {
                  ;(G(e), B(null))
                },
              }),
            ],
          })),
          (I[18] = J),
          (I[19] = L),
          (I[20] = D),
          (I[21] = X),
          (I[22] = K),
          (I[23] = et?.truncated),
          (I[24] = et?.uploads),
          (I[25] = H),
          (I[26] = V),
          (I[27] = h),
          (I[28] = g),
          (I[29] = x))
      } else ((h = I[27]), (g = I[28]), (x = I[29]))
      I[30] !== x ? ((b = (0, a.jsx)(a.Fragment, { children: x })), (I[30] = x), (I[31] = b)) : (b = I[31])
      let er = b
      I[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = (0, a.jsx)("h3", {
            className: "sr-only",
            children: (0, a.jsx)(u.A, {
              id: "merchantSettings.runs",
              defaultMessage: "Ingestion metrics",
              description: "Merchant feed processing runs and their outcomes",
            }),
          })),
          (I[32] = S))
        : (S = I[32])
      let eo = null == L || Z || ea,
        ef = Z || ea
      return (
        I[33] !== Y || I[34] !== ei
          ? ((v = () => {
              ;(Y(), ei())
            }),
            (I[33] = Y),
            (I[34] = ei),
            (I[35] = v))
          : (v = I[35]),
        I[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, a.jsx)(u.A, {
              id: "merchantSettings.refresh",
              defaultMessage: "Refresh runs",
              description: "Refreshes merchant feed run history",
            })),
            (I[36] = j))
          : (j = I[36]),
        I[37] !== eo || I[38] !== ef || I[39] !== v
          ? ((_ = (0, a.jsxs)("div", {
              className: "mb-4 flex justify-end",
              children: [S, (0, a.jsx)(U, { size: "dialog", disabled: eo, loading: ef, onClick: v, children: j })],
            })),
            (I[37] = eo),
            (I[38] = ef),
            (I[39] = v),
            (I[40] = _))
          : (_ = I[40]),
        I[41] !== L
          ? ((w =
              null == L &&
              (0, a.jsx)("p", {
                className:
                  "rounded-lg border border-subtle bg-(--color-background-secondary-soft)/60 p-4 text-sm text-secondary dark:bg-(--color-background-secondary-soft)/30",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.selectMerchantForRuns",
                  defaultMessage: "Select a merchant above to view runs",
                  description: "No merchant selected for run history",
                }),
              })),
            (I[41] = L),
            (I[42] = w))
          : (w = I[42]),
        I[43] !== L || I[44] !== W
          ? ((A =
              null != L &&
              W &&
              (0, a.jsx)("p", {
                role: "status",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.runsLoading",
                  defaultMessage: "Loading ingestion runs…",
                  description: "Feed run history loading status",
                }),
              })),
            (I[43] = L),
            (I[44] = W),
            (I[45] = A))
          : (A = I[45]),
        I[46] !== X
          ? ((M =
              X &&
              (0, a.jsx)("p", {
                role: "alert",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.runsStatusUnavailable",
                  defaultMessage: "Status unavailable. Runs could not be loaded. Try refreshing.",
                  description: "Failure loading feed run history; refresh retries the request",
                }),
              })),
            (I[46] = X),
            (I[47] = M))
          : (M = I[47]),
        I[48] !== en || I[49] !== es || I[50] !== X || I[51] !== h || I[52] !== g?.length
          ? ((N =
              !X &&
              !es &&
              !en &&
              g?.length === 0 &&
              (0, a.jsx)("p", {
                className:
                  "rounded-lg border border-subtle bg-(--color-background-secondary-soft)/60 p-4 text-sm text-secondary dark:bg-(--color-background-secondary-soft)/30",
                children: h
                  ? (0, a.jsx)(u.A, {
                      id: "merchantSettings.noRunsInPartialHistory",
                      defaultMessage: "No runs found in the loaded history. Additional runs may exist.",
                      description:
                        "Empty state in merchant Recent runs after a partial history read. Unavailable history may contain runs, so this does not establish that the merchant has never submitted a feed. No placeholders.",
                    })
                  : (0, a.jsx)(u.A, {
                      id: "merchantSettings.noRecordedRuns",
                      defaultMessage: "No runs found in the loaded history",
                      description:
                        "Empty state in merchant Recent runs after a successful history read. This describes only the loaded records and makes no claim about earlier or unavailable uploads. No placeholders.",
                    }),
              })),
            (I[48] = en),
            (I[49] = es),
            (I[50] = X),
            (I[51] = h),
            (I[52] = g?.length),
            (I[53] = N))
          : (N = I[53]),
        I[54] !== L || I[55] !== es || I[56] !== W
          ? ((T =
              null != L &&
              es &&
              !W &&
              (0, a.jsx)("p", {
                role: "status",
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.history.loading",
                  defaultMessage: "Loading more run history…",
                  description:
                    "Status below Recent runs in merchant settings while the bounded upload history loads. The latest live runs may already be visible.",
                }),
              })),
            (I[54] = L),
            (I[55] = es),
            (I[56] = W),
            (I[57] = T))
          : (T = I[57]),
        I[58] !== L || I[59] !== en
          ? ((k =
              null != L &&
              en &&
              (0, a.jsx)("p", {
                role: "alert",
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.history.error",
                  defaultMessage: "Older run history could not be loaded. Refresh to try again.",
                  description:
                    "Request failure below Recent runs in merchant settings. The latest live runs remain visible, but pagination cannot include unavailable older history.",
                }),
              })),
            (I[58] = L),
            (I[59] = en),
            (I[60] = k))
          : (k = I[60]),
        I[61] !== en || I[62] !== es
          ? ((R =
              !es &&
              !en &&
              (0, a.jsx)("p", {
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.history.recordedScope",
                  defaultMessage: "Up to 100 recorded runs, including uploads from the past 90 days",
                  description:
                    "Scope notice in merchant Recent runs. The list combines available recent runs and recorded uploads from the past 90 days, capped at 100 records. It does not establish that every upload was checked. No placeholders.",
                }),
              })),
            (I[61] = en),
            (I[62] = es),
            (I[63] = R))
          : (R = I[63]),
        I[64] !== h
          ? ((P =
              h &&
              (0, a.jsx)("p", {
                role: "status",
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.history.partial",
                  defaultMessage: "Some run history could not be checked. Results may be incomplete.",
                  description:
                    "Warning in merchant Recent runs when recent-run or upload-history reads were limited or some history was unavailable. Returned records remain visible; missing history may contain additional runs. No placeholders.",
                }),
              })),
            (I[64] = h),
            (I[65] = P))
          : (P = I[65]),
        I[66] !== er ||
        I[67] !== w ||
        I[68] !== A ||
        I[69] !== M ||
        I[70] !== N ||
        I[71] !== T ||
        I[72] !== k ||
        I[73] !== R ||
        I[74] !== P
          ? ((F = (0, a.jsxs)(E.X.Content, { children: [w, A, M, N, T, k, R, P, er] })),
            (I[66] = er),
            (I[67] = w),
            (I[68] = A),
            (I[69] = M),
            (I[70] = N),
            (I[71] = T),
            (I[72] = k),
            (I[73] = R),
            (I[74] = P),
            (I[75] = F))
          : (F = I[75]),
        I[76] !== _ || I[77] !== F
          ? ((C = (0, a.jsxs)(E.X, { children: [_, F] })), (I[76] = _), (I[77] = F), (I[78] = C))
          : (C = I[78]),
        C
      )
    }
    function ed(e) {
      return { value: e, label: (0, a.jsx)(u.A, { ...ep[e] }) }
    }
    function ec(e) {
      return ("completed" === e.status || "completed_with_errors" === e.status) && e.completed_at
    }
    function eu(e, t) {
      return (el(t.timestamp) ?? 0) - (el(e.timestamp) ?? 0)
    }
    function em(e) {
      return [e.feed_key, e]
    }
    function eh(e) {
      let t,
        s,
        i,
        l,
        o,
        d,
        m,
        h,
        g,
        x,
        y,
        b,
        S,
        v,
        j,
        _,
        w,
        A,
        M,
        N,
        T,
        k,
        R,
        P,
        F,
        C,
        I,
        E,
        L,
        D,
        z,
        O,
        H,
        B = (0, n.c)(115),
        { run: V, feedType: $, lastSuccessAt: K } = e,
        G = (0, c.A)(),
        J = (0, ei.wv)(),
        { userId: W, accountId: Z } = (0, p.As)()
      if (B[0] !== Z || B[1] !== $ || B[2] !== V.feed_id || B[3] !== V.feed_type || B[4] !== V.run_id || B[5] !== W) {
        let e = er(V.run_id)
        ;((i = r.I),
          B[9] !== Z || B[10] !== V.feed_id || B[11] !== V.feed_type || B[12] !== V.run_id || B[13] !== W
            ? ((t = ["merchant-run-status", W, Z, V.feed_id, V.run_id, V.feed_type]),
              (B[9] = Z),
              (B[10] = V.feed_id),
              (B[11] = V.feed_type),
              (B[12] = V.run_id),
              (B[13] = W),
              (B[14] = t))
            : (t = B[14]),
          (s =
            null != $ && /^\d{8}T\d{9}Z$/.test(e)
              ? (t) => {
                  let { signal: s } = t
                  return f.Request.safeGet("/shopping/feeds/{feed_id}/runs/{run_id}", {
                    parameters: { path: { feed_id: V.feed_id, run_id: e }, query: { feed_type: $ } },
                    signal: s,
                  })
                }
              : q.hT),
          (B[0] = Z),
          (B[1] = $),
          (B[2] = V.feed_id),
          (B[3] = V.feed_type),
          (B[4] = V.run_id),
          (B[5] = W),
          (B[6] = t),
          (B[7] = s),
          (B[8] = i))
      } else ((t = B[6]), (s = B[7]), (i = B[8]))
      ;(B[15] !== V.status
        ? ((l = (e) => {
            let t = e.state.data?.status ?? V.status
            return ("received" === t || "processing" === t) && 15e3
          }),
          (B[15] = V.status),
          (B[16] = l))
        : (l = B[16]),
        B[17] !== t || B[18] !== s || B[19] !== l
          ? ((o = { queryKey: t, queryFn: s, staleTime: 1e4, refetchInterval: l }),
            (B[17] = t),
            (B[18] = s),
            (B[19] = l),
            (B[20] = o))
          : (o = B[20]))
      let { data: X, isError: Q, refetch: Y } = i(o),
        ee = X?.metrics ?? V.metrics,
        et = X?.status_phase ?? V.status_phase ?? "unknown"
      if (
        B[21] !== G ||
        B[22] !== K ||
        B[23] !== J ||
        B[24] !== et ||
        B[25] !== Y ||
        B[26] !== V.completed_at ||
        B[27] !== V.source ||
        B[28] !== V.started_at ||
        B[29] !== V.status ||
        B[30] !== V.timestamp ||
        B[31] !== X?.completed_at ||
        B[32] !== X?.status ||
        B[33] !== Q
      ) {
        S = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            t,
            s,
            n,
            i = el(V.started_at ?? V.timestamp),
            r = el(X?.completed_at ?? V.completed_at),
            l = el(K)
          if (
            ((m = null != i && null != r && r >= i ? r - i : null),
            (d = null != l && J.getTime() >= l ? J.getTime() - l : null),
            Q)
          ) {
            let e, t, s, n
            ;(B[46] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(u.A, {
                  id: "merchantSettings.runStatusUnavailable",
                  defaultMessage: "Status unavailable",
                  description: "Latest run status request failed",
                })),
                (B[46] = e))
              : (e = B[46]),
              B[47] !== Y ? ((t = () => void Y()), (B[47] = Y), (B[48] = t)) : (t = B[48]),
              B[49] === Symbol.for("react.memo_cache_sentinel")
                ? ((s = (0, a.jsx)(u.A, {
                    id: "merchantSettings.retryRunStatus",
                    defaultMessage: "Try again",
                    description: "Retries the failed status refresh",
                  })),
                  (B[49] = s))
                : (s = B[49]),
              B[50] !== t
                ? ((n = (0, a.jsxs)("div", {
                    role: "alert",
                    children: [e, (0, a.jsx)(U, { onClick: t, children: s })],
                  })),
                  (B[50] = t),
                  (B[51] = n))
                : (n = B[51]),
              (S = n))
            break e
          }
          ;((b = "flex flex-col gap-3"),
            (x = "rounded-lg border border-subtle p-4"),
            B[52] === Symbol.for("react.memo_cache_sentinel")
              ? ((y = (0, a.jsx)("h3", {
                  className: "text-sm font-semibold",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.identityTiming",
                    defaultMessage: "Run identity & timing",
                    description: "Feed run identity and timing metrics heading",
                  }),
                })),
                (B[52] = y))
              : (y = B[52]),
            (v = "mt-3 grid gap-3 text-sm sm:grid-cols-2"),
            B[53] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)("dt", {
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.status",
                    defaultMessage: "Status",
                    description: "Current ingestion run status",
                  }),
                })),
                (B[53] = e))
              : (e = B[53]))
          let o = ep[X?.status ?? V.status]
          ;(B[54] !== o
            ? ((j = (0, a.jsxs)("div", { children: [e, (0, a.jsx)("dd", { children: (0, a.jsx)(u.A, { ...o }) })] })),
              (B[54] = o),
              (B[55] = j))
            : (j = B[55]),
            B[56] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)("dt", {
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.phase",
                    defaultMessage: "Phase",
                    description: "Current ingestion processing phase",
                  }),
                })),
                (B[56] = t))
              : (t = B[56]))
          let c = ep["unknown" === et ? "unavailable" : et]
          ;(B[57] !== c
            ? ((_ = (0, a.jsxs)("div", { children: [t, (0, a.jsx)("dd", { children: (0, a.jsx)(u.A, { ...c }) })] })),
              (B[57] = c),
              (B[58] = _))
            : (_ = B[58]),
            B[59] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, a.jsx)("dt", {
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.source",
                    defaultMessage: "Source",
                    description: "How the feed was submitted",
                  }),
                })),
                (B[59] = s))
              : (s = B[59]))
          let p = ep[V.source ?? "unknown"]
          ;(B[60] !== p
            ? ((w = (0, a.jsxs)("div", { children: [s, (0, a.jsx)("dd", { children: (0, a.jsx)(u.A, { ...p }) })] })),
              (B[60] = p),
              (B[61] = w))
            : (w = B[61]),
            B[62] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, a.jsx)("dt", {
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.started",
                    defaultMessage: "Started",
                    description: "When the ingestion run began",
                  }),
                })),
                (B[62] = n))
              : (n = B[62]))
          let f =
            null == i
              ? (0, a.jsx)(u.A, { ...ep.unavailable })
              : G.formatDate(i, { dateStyle: "medium", timeStyle: "short" })
          ;(B[63] !== f
            ? ((h = (0, a.jsxs)("div", { children: [n, (0, a.jsx)("dd", { children: f })] })), (B[63] = f), (B[64] = h))
            : (h = B[64]),
            (g =
              null != r &&
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)("dt", {
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.completed",
                      defaultMessage: "Completed",
                      description: "When the ingestion run completed",
                    }),
                  }),
                  (0, a.jsx)("dd", { children: G.formatDate(r, { dateStyle: "medium", timeStyle: "short" }) }),
                ],
              })))
        }
        ;((B[21] = G),
          (B[22] = K),
          (B[23] = J),
          (B[24] = et),
          (B[25] = Y),
          (B[26] = V.completed_at),
          (B[27] = V.source),
          (B[28] = V.started_at),
          (B[29] = V.status),
          (B[30] = V.timestamp),
          (B[31] = X?.completed_at),
          (B[32] = X?.status),
          (B[33] = Q),
          (B[34] = d),
          (B[35] = m),
          (B[36] = h),
          (B[37] = g),
          (B[38] = x),
          (B[39] = y),
          (B[40] = b),
          (B[41] = S),
          (B[42] = v),
          (B[43] = j),
          (B[44] = _),
          (B[45] = w))
      } else
        ((d = B[34]),
          (m = B[35]),
          (h = B[36]),
          (g = B[37]),
          (x = B[38]),
          (y = B[39]),
          (b = B[40]),
          (S = B[41]),
          (v = B[42]),
          (j = B[43]),
          (_ = B[44]),
          (w = B[45]))
      if (S !== Symbol.for("react.early_return_sentinel")) return S
      ;(B[65] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = (0, a.jsx)("dt", {
            children: (0, a.jsx)(u.A, {
              id: "merchantSettings.latency",
              defaultMessage: "End-to-end latency",
              description: "Elapsed time between the selected merchant ingestion run starting and completing",
            }),
          })),
          (B[65] = A))
        : (A = B[65]),
        B[66] !== G || B[67] !== m
          ? ((M =
              null == m
                ? (0, a.jsx)(u.A, { ...ep.unavailable })
                : G.formatNumber(m / 1e3, { style: "unit", unit: "second", maximumFractionDigits: 1 })),
            (B[66] = G),
            (B[67] = m),
            (B[68] = M))
          : (M = B[68]),
        B[69] !== M
          ? ((N = (0, a.jsxs)("div", { children: [A, (0, a.jsx)("dd", { children: M })] })), (B[69] = M), (B[70] = N))
          : (N = B[70]),
        B[71] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, a.jsx)("dt", {
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.freshness",
                defaultMessage: "Freshness since last success",
                description:
                  "Time since the most recent completed or completed-with-errors ingestion for this merchant, across all sources",
              }),
            })),
            (B[71] = T))
          : (T = B[71]),
        B[72] !== d || B[73] !== G
          ? ((k =
              null == d
                ? (0, a.jsx)(u.A, { ...ep.unavailable })
                : G.formatNumber(d / 1e3, { style: "unit", unit: "second", maximumFractionDigits: 0 })),
            (B[72] = d),
            (B[73] = G),
            (B[74] = k))
          : (k = B[74]),
        B[75] !== k
          ? ((R = (0, a.jsxs)("div", { children: [T, (0, a.jsx)("dd", { children: k })] })), (B[75] = k), (B[76] = R))
          : (R = B[76]),
        B[77] !== h ||
        B[78] !== g ||
        B[79] !== N ||
        B[80] !== R ||
        B[81] !== v ||
        B[82] !== j ||
        B[83] !== _ ||
        B[84] !== w
          ? ((P = (0, a.jsxs)("dl", { className: v, children: [j, _, w, h, g, N, R] })),
            (B[77] = h),
            (B[78] = g),
            (B[79] = N),
            (B[80] = R),
            (B[81] = v),
            (B[82] = j),
            (B[83] = _),
            (B[84] = w),
            (B[85] = P))
          : (P = B[85]),
        B[86] !== x || B[87] !== y || B[88] !== P
          ? ((F = (0, a.jsxs)("div", { className: x, children: [y, P] })),
            (B[86] = x),
            (B[87] = y),
            (B[88] = P),
            (B[89] = F))
          : (F = B[89]))
      let es = X?.status_message ?? V.status_message ?? V.message ?? V.detail
      return (
        B[90] !== es
          ? ((C = (0, a.jsx)("p", { className: "text-sm text-secondary", children: es })), (B[90] = es), (B[91] = C))
          : (C = B[91]),
        B[92] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, a.jsx)("summary", {
              className: "cursor-interaction text-sm font-semibold",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.runIdentifiers",
                defaultMessage: "Identifiers",
                description: "Expands feed identifiers and processing details",
              }),
            })),
            (B[92] = I))
          : (I = B[92]),
        B[93] !== V.detail ||
        B[94] !== V.dimensions ||
        B[95] !== V.feed_id ||
        B[96] !== V.feed_key ||
        B[97] !== V.run_id ||
        B[98] !== V.temporal ||
        B[99] !== X?.detail ||
        B[100] !== X?.temporal
          ? ((E = JSON.stringify(
              {
                feed_id: V.feed_id,
                run_id: V.run_id,
                feed_key: V.feed_key,
                dimensions: V.dimensions,
                temporal: X?.temporal ?? V.temporal,
                detail: X?.detail ?? V.detail,
              },
              null,
              2,
            )),
            (B[93] = V.detail),
            (B[94] = V.dimensions),
            (B[95] = V.feed_id),
            (B[96] = V.feed_key),
            (B[97] = V.run_id),
            (B[98] = V.temporal),
            (B[99] = X?.detail),
            (B[100] = X?.temporal),
            (B[101] = E))
          : (E = B[101]),
        B[102] !== E
          ? ((L = (0, a.jsxs)("details", {
              className: "rounded-lg border border-subtle p-4",
              children: [I, (0, a.jsx)("pre", { className: "overflow-x-auto text-sm", children: E })],
            })),
            (B[102] = E),
            (B[103] = L))
          : (L = B[103]),
        B[104] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, a.jsx)("h3", {
              className: "text-sm font-semibold",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.volumeOutcome",
                defaultMessage: "Volume & outcome",
                description: "Feed record processing metrics heading",
              }),
            })),
            (B[104] = D))
          : (D = B[104]),
        B[105] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = [
              "records_received",
              "records_processed",
              "records_succeeded",
              "records_failed",
              "error_rate",
              "retry_count",
            ]),
            (B[105] = z))
          : (z = B[105]),
        B[106] !== G || B[107] !== ee
          ? ((O = (0, a.jsxs)("div", {
              className: "rounded-lg border border-subtle p-4",
              children: [
                D,
                (0, a.jsx)("dl", {
                  className: "mt-3 grid gap-3 text-sm sm:grid-cols-2",
                  children: z.map((e) => {
                    let t = ep[e],
                      s = ee?.[e]
                    if ("error_rate" === e && null == s) {
                      let e = ee?.records_processed ?? ee?.records_received
                      s = e && e > 0 && ee?.records_failed != null ? ee.records_failed / e : null
                    }
                    return (0, a.jsxs)(
                      "div",
                      {
                        children: [
                          (0, a.jsx)("dt", { children: (0, a.jsx)(u.A, { ...t }) }),
                          (0, a.jsx)("dd", {
                            children:
                              null != s && Number.isFinite(s)
                                ? G.formatNumber(
                                    s,
                                    "error_rate" === e ? { style: "percent", maximumFractionDigits: 1 } : void 0,
                                  )
                                : (0, a.jsx)(u.A, {
                                    id: "merchantSettings.unavailable",
                                    defaultMessage: "Unavailable",
                                    description: "An ingestion metric is not available",
                                  }),
                          }),
                        ],
                      },
                      e,
                    )
                  }),
                }),
              ],
            })),
            (B[106] = G),
            (B[107] = ee),
            (B[108] = O))
          : (O = B[108]),
        B[109] !== b || B[110] !== F || B[111] !== C || B[112] !== L || B[113] !== O
          ? ((H = (0, a.jsxs)("div", { className: b, children: [F, C, L, O] })),
            (B[109] = b),
            (B[110] = F),
            (B[111] = C),
            (B[112] = L),
            (B[113] = O),
            (B[114] = H))
          : (H = B[114]),
        H
      )
    }
    let ep = (0, L.YK)({
      received: {
        id: "merchantSettings.runReceived",
        defaultMessage: "Received",
        description: "Feed run status when a submission has been received but processing has not started",
      },
      processing: {
        id: "merchantSettings.runProcessing",
        defaultMessage: "Processing",
        description: "Feed run status or phase while products are being processed",
      },
      completed: {
        id: "merchantSettings.runCompleted",
        defaultMessage: "Completed",
        description: "Feed run status after processing completed successfully",
      },
      completed_with_errors: {
        id: "merchantSettings.runCompletedWithErrors",
        defaultMessage: "Completed with errors",
        description: "Feed run status when processing finished but some records failed",
      },
      skipped: {
        id: "merchantSettings.runSkipped",
        defaultMessage: "Skipped",
        description: "Feed run status when the submission was skipped",
      },
      failed: {
        id: "merchantSettings.runFailed",
        defaultMessage: "Failed",
        description: "Feed run status when ingestion or processing failed",
      },
      ingesting: {
        id: "merchantSettings.runIngesting",
        defaultMessage: "Ingesting",
        description: "Feed run phase while the submitted feed is being ingested",
      },
      ingestion_error: {
        id: "merchantSettings.runIngestionError",
        defaultMessage: "Ingestion error",
        description: "Feed run phase indicating an error ingesting the submitted feed",
      },
      processing_error: {
        id: "merchantSettings.runProcessingError",
        defaultMessage: "Processing error",
        description: "Feed run phase indicating an error processing the ingested products",
      },
      success: {
        id: "merchantSettings.runSuccess",
        defaultMessage: "Success",
        description: "Feed run phase after ingestion and processing finish successfully",
      },
      records_received: {
        id: "merchantSettings.receivedRows",
        defaultMessage: "Records received",
        description: "Number of feed records received",
      },
      records_processed: {
        id: "merchantSettings.processedRows",
        defaultMessage: "Records processed",
        description: "Number of feed records processed",
      },
      records_succeeded: {
        id: "merchantSettings.succeededRows",
        defaultMessage: "Records succeeded",
        description: "Number of successfully processed feed records",
      },
      records_failed: {
        id: "merchantSettings.failedRows",
        defaultMessage: "Records failed",
        description: "Number of feed records that failed processing",
      },
      error_rate: {
        id: "merchantSettings.errorRate",
        defaultMessage: "Error rate",
        description: "Fraction of feed records that failed processing",
      },
      retry_count: {
        id: "merchantSettings.retryCount",
        defaultMessage: "Retry count",
        description: "Number of ingestion retries",
      },
      all: {
        id: "merchantSettings.allSources",
        defaultMessage: "All sources",
        description: "Ingestion history filter showing every submission source",
      },
      file_upload: {
        id: "merchantSettings.fileSource",
        defaultMessage: "Uploaded file",
        description: "Ingestion history source for files uploaded through merchant settings",
      },
      hosted_url: {
        id: "merchantSettings.urlSource",
        defaultMessage: "Hosted URL",
        description: "Ingestion history source for feeds fetched from a hosted URL",
      },
      sftp: {
        id: "merchantSettings.sftpSource",
        defaultMessage: "SFTP",
        description: "Ingestion history source for feeds uploaded over SFTP",
      },
      unknown: {
        id: "merchantSettings.unknownSource",
        defaultMessage: "Unknown source",
        description: "Ingestion history source when the server does not provide one",
      },
      unavailable: {
        id: "merchantSettings.unavailable",
        defaultMessage: "Unavailable",
        description: "An ingestion metric is not available",
      },
    })
    var ef = s("uuN8"),
      eg = s("EShr"),
      ex = s("aepO")
    function ey(e) {
      let t,
        s,
        i,
        r,
        l,
        o,
        d = (0, n.c)(18),
        { title: c, description: u, children: m, compact: h, activity: p } = e,
        f = void 0 !== h && h,
        g = void 0 !== p && p,
        x = null == u && "mb-6",
        y = null != u && (f ? "mb-3" : "mb-4")
      ;(d[0] !== x || d[1] !== y ? ((t = (0, I.A)(x, y)), (d[0] = x), (d[1] = y), (d[2] = t)) : (t = d[2]),
        d[3] !== c
          ? ((s = (0, a.jsx)("h2", { className: "text-lg font-semibold", children: c })), (d[3] = c), (d[4] = s))
          : (s = d[4]),
        d[5] !== g || d[6] !== u
          ? ((i =
              null != u &&
              (0, a.jsx)("p", {
                className: g ? "mt-1 text-sm text-secondary" : "mt-2 text-sm text-secondary",
                children: u,
              })),
            (d[5] = g),
            (d[6] = u),
            (d[7] = i))
          : (i = d[7]),
        d[8] !== t || d[9] !== s || d[10] !== i
          ? ((r = (0, a.jsxs)("div", { className: t, children: [s, i] })),
            (d[8] = t),
            (d[9] = s),
            (d[10] = i),
            (d[11] = r))
          : (r = d[11]))
      let b = f ? "flex flex-col gap-3" : "flex flex-col gap-4"
      return (
        d[12] !== m || d[13] !== b
          ? ((l = (0, a.jsx)("div", { className: b, children: m })), (d[12] = m), (d[13] = b), (d[14] = l))
          : (l = d[14]),
        d[15] !== l || d[16] !== r
          ? ((o = (0, a.jsxs)("section", {
              className: "min-w-0 rounded-lg border border-subtle bg-surface-card p-5 shadow-sm",
              children: [r, l],
            })),
            (d[15] = l),
            (d[16] = r),
            (d[17] = o))
          : (o = d[17]),
        o
      )
    }
    function eb(e) {
      let t,
        s,
        i,
        r = (0, n.c)(5),
        { feedId: l, configured: o } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(u.A, {
              id: "merchantSettings.sftp",
              defaultMessage: "SFTP",
              description: "Merchant SFTP section heading",
            })),
            (s = (0, a.jsx)(u.A, {
              id: "merchantSettings.sftpDescription",
              defaultMessage:
                "Use SFTP for large feeds or multiple files. Connection details appear once access is enabled.",
              description:
                "Description below the SFTP heading in Product feed settings for merchants uploading large feeds or splitting a feed across multiple files. Connection details become available after SFTP access is enabled. Keep SFTP literal.",
            })),
            (r[0] = t),
            (r[1] = s))
          : ((t = r[0]), (s = r[1])),
        r[2] !== o || r[3] !== l
          ? ((i = (0, a.jsx)(ey, {
              compact: !0,
              title: t,
              description: s,
              children: (0, a.jsx)(eS, { feedId: l, configured: o }),
            })),
            (r[2] = o),
            (r[3] = l),
            (r[4] = i))
          : (i = r[4]),
        i
      )
    }
    function eS(e) {
      let t,
        s,
        i,
        o,
        m,
        h,
        g,
        x,
        y,
        b,
        v,
        _,
        A,
        M,
        N,
        T,
        k,
        F,
        C,
        I,
        E,
        L,
        D,
        z,
        O,
        H = (0, n.c)(88),
        { feedId: B, configured: V } = e,
        $ = (0, c.A)(),
        { accountId: K, userId: G } = (0, p.As)()
      H[0] !== K || H[1] !== B || H[2] !== G
        ? ((t = { accountId: K, userId: G, feedId: B }), (H[0] = K), (H[1] = B), (H[2] = G), (H[3] = t))
        : (t = H[3])
      let J = t,
        [W, Z] = (0, d.useState)(!1),
        [X, Q] = (0, d.useState)(""),
        [Y, ee] = (0, d.useState)(null),
        [et, es] = (0, d.useState)("idle")
      ;(H[4] !== K || H[5] !== B || H[6] !== G
        ? ((s = ["merchant-sftp", G, K, B]), (H[4] = K), (H[5] = B), (H[6] = G), (H[7] = s))
        : (s = H[7]),
        H[8] !== B || H[9] !== J
          ? ((i =
              null == B
                ? q.hT
                : (e) => {
                    let { signal: t } = e
                    return f.Request.safeGet("/shopping/feeds/{feed_id}/sftp-access", {
                      parameters: { path: { feed_id: B } },
                      signal: t,
                      expectedErrorStatuses: [403],
                    }).catch(P(J, "sftp_details", t))
                  }),
            (H[8] = B),
            (H[9] = J),
            (H[10] = i))
          : (i = H[10]),
        H[11] !== V || H[12] !== s || H[13] !== i
          ? ((o = { queryKey: s, queryFn: i, enabled: V, staleTime: 3e4, gcTime: 0, retry: !1 }),
            (H[11] = V),
            (H[12] = s),
            (H[13] = i),
            (H[14] = o))
          : (o = H[14]))
      let { data: ea, isFetching: en, error: ei, refetch: er } = (0, r.I)(o)
      H[15] !== B
        ? ((m = {
            mutationFn: () => {
              if (null == B) throw Error("No merchant selected")
              return f.Request.safePost("/shopping/feeds/{feed_id}/sftp-access/password-reset", {
                parameters: { path: { feed_id: B } },
              })
            },
            gcTime: 0,
          }),
          (H[15] = B),
          (H[16] = m))
        : (m = H[16])
      let el = (0, l.n)(m)
      H[17] !== B || H[18] !== X
        ? ((h = {
            mutationFn: () => {
              if (null == B) throw Error("No merchant selected")
              return f.Request.safePost("/shopping/feeds/{feed_id}/sftp-access/ssh-key", {
                parameters: { path: { feed_id: B } },
                requestBody: { ssh_public_key: X.trim() },
              })
            },
          }),
          (H[17] = B),
          (H[18] = X),
          (H[19] = h))
        : (h = H[19])
      let eo = (0, l.n)(h),
        ed = el.error ?? eo.error ?? ei,
        ec = ed instanceof w.fk && 403 === ed.status
      H[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = async function (e) {
            let t = await (0, ex.E)(e)
            return (es(t ? "copied" : "failed"), t)
          }),
          (H[20] = g))
        : (g = H[20])
      let eu = g
      ;(H[21] !== ea ||
      H[22] !== ec ||
      H[23] !== ei ||
      H[24] !== B ||
      H[25] !== $ ||
      H[26] !== en ||
      H[27] !== er ||
      H[28] !== ed
        ? ((x =
            (en || null != ed || null != ea || null == B) &&
            (0, a.jsxs)("div", {
              className: "rounded-lg border border-subtle px-4 py-2 text-sm",
              children: [
                null == B &&
                  (0, a.jsx)("p", {
                    className: "py-3 text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.sftpSelection",
                      defaultMessage: "Select a merchant above to load SFTP details.",
                      description: "No merchant selected for SFTP",
                    }),
                  }),
                null != B &&
                  en &&
                  (0, a.jsx)("p", {
                    className: "py-3 text-secondary",
                    role: "status",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.sftpLoading",
                      defaultMessage: "Loading SFTP details…",
                      description: "SFTP details loading status",
                    }),
                  }),
                null != ed &&
                  (0, a.jsxs)("div", {
                    role: "alert",
                    children: [
                      ec
                        ? (0, a.jsx)(u.A, {
                            id: "merchantSettings.sftpDenied",
                            defaultMessage: "A workspace owner or admin must manage SFTP access",
                            description: "Explains why a non-admin cannot see or change SFTP credentials",
                          })
                        : (0, a.jsx)(u.A, {
                            id: "merchantSettings.sftpUnavailable",
                            defaultMessage:
                              "SFTP is currently unavailable. Your merchant is saved, and you can still upload files or use a hosted URL. Try again later.",
                            description:
                              "Error in the SFTP section of Merchant Settings when setup or loading connection details fails. Reassures merchants that their saved merchant and other upload methods are unaffected, and suggests retrying SFTP later. Plain text with no placeholders.",
                          }),
                      !ec &&
                        null != ei &&
                        (0, a.jsx)(U, {
                          onClick: () => void er(),
                          children: (0, a.jsx)(u.A, {
                            id: "merchantSettings.retrySftpDetails",
                            defaultMessage: "Try again",
                            description: "Retries loading SFTP details",
                          }),
                        }),
                    ],
                  }),
                null != ea &&
                  null == ei &&
                  (0, a.jsx)("dl", {
                    className: "divide-y divide-border-subtle",
                    children: ["host", "username", "root_path", "port"].map((e) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          className: "flex items-center justify-between gap-4 py-3",
                          children: [
                            (0, a.jsx)("dt", { className: "text-secondary", children: (0, a.jsx)(u.A, { ...ej[e] }) }),
                            (0, a.jsxs)("dd", {
                              className: "flex min-w-0 items-center gap-3",
                              children: [
                                (0, a.jsx)("span", { className: "font-medium break-all select-text", children: ea[e] }),
                                "port" !== e &&
                                  (0, a.jsx)(ef.i, {
                                    iconOnly: !0,
                                    showTooltip: !1,
                                    ariaLabel: $.formatMessage({
                                      id: "merchantSettings.copy",
                                      defaultMessage: "Copy",
                                      description: "Copies the adjacent SFTP connection value",
                                    }),
                                    onCopy: () => eu(ea[e]),
                                    icons: { copy: (0, a.jsx)(S.yDG, {}), copied: (0, a.jsx)(S.ALZ, {}) },
                                    renderButton: ev,
                                  }),
                              ],
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
              ],
            })),
          (H[21] = ea),
          (H[22] = ec),
          (H[23] = ei),
          (H[24] = B),
          (H[25] = $),
          (H[26] = en),
          (H[27] = er),
          (H[28] = ed),
          (H[29] = x))
        : (x = H[29]),
        H[30] !== ea || H[31] !== ei
          ? ((y =
              null != ea &&
              null == ei &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.sftpIsolation",
                      defaultMessage:
                        "Access is scoped to your dedicated SFTP container. You can only read or write files within it.",
                      description: "SFTP directory isolation guidance",
                    }),
                  }),
                  (0, a.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.sftpGuidance",
                      defaultMessage: "Upload files to your SFTP root folder, without subfolders",
                      description:
                        "Short instruction in the SFTP section of Product feed settings. Merchants must place files directly in the root of their assigned SFTP storage, not in nested folders. Keep SFTP literal.",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col gap-2 rounded-lg border border-subtle bg-(--color-background-secondary-soft)/40 px-3 py-2 text-xs",
                    children: [
                      (0, a.jsx)("h3", {
                        className: "font-semibold",
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.sftpSteps",
                          defaultMessage: "Connect in three steps",
                          description: "SFTP connection instructions heading",
                        }),
                      }),
                      (0, a.jsxs)("ol", {
                        className: "flex list-decimal flex-col gap-1 ps-4 text-secondary",
                        children: [
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.sftpStep1",
                              defaultMessage: "Copy the host, username, and root path shown here",
                              description: "First SFTP setup step",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.sftpStep2",
                              defaultMessage: "Generate a password here, then save it in your SFTP client",
                              description: "Second SFTP setup step",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.sftpStep3",
                              defaultMessage: "Connect and upload to the root path using a flat folder structure",
                              description: "Third SFTP setup step",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })),
            (H[30] = ea),
            (H[31] = ei),
            (H[32] = y))
          : (y = H[32]),
        H[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, a.jsx)("h4", {
              className: "text-sm font-medium",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.authentication",
                defaultMessage: "SFTP login method",
                description: "SFTP login method selection in Merchant Settings",
              }),
            })),
            (H[33] = b))
          : (b = H[33]),
        H[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, a.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.authenticationHelp",
                defaultMessage: "Choose how this merchant will authenticate when uploading feed files",
                description: "Explains the authentication choice in the SFTP setup section",
              }),
            })),
            (H[34] = v))
          : (v = H[34]))
      let em = W ? "ssh" : "password"
      ;(H[35] === Symbol.for("react.memo_cache_sentinel") ? ((_ = (e) => Z("ssh" === e)), (H[35] = _)) : (_ = H[35]),
        H[36] !== $
          ? ((A = $.formatMessage({
              id: "merchantSettings.authenticationChoice",
              defaultMessage: "SFTP login method",
              description: "SFTP authentication method choice",
            })),
            (H[36] = $),
            (H[37] = A))
          : (A = H[37]))
      let eh = el.isPending || eo.isPending
      ;(H[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = (0, a.jsx)(u.A, {
            id: "merchantSettings.passwordMethod",
            defaultMessage: "Username/password",
            description: "Password authentication choice",
          })),
          (H[38] = M))
        : (M = H[38]),
        H[39] !== eh ? ((N = { id: "password", disabled: eh, label: M }), (H[39] = eh), (H[40] = N)) : (N = H[40]))
      let ep = el.isPending || eo.isPending
      return (
        H[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, a.jsx)(u.A, {
              id: "merchantSettings.sshMethod",
              defaultMessage: "SSH key",
              description: "SSH authentication choice",
            })),
            (H[41] = T))
          : (T = H[41]),
        H[42] !== ep ? ((k = { id: "ssh", disabled: ep, label: T }), (H[42] = ep), (H[43] = k)) : (k = H[43]),
        H[44] !== N || H[45] !== k ? ((F = [N, k]), (H[44] = N), (H[45] = k), (H[46] = F)) : (F = H[46]),
        H[47] !== em || H[48] !== A || H[49] !== F
          ? ((C = (0, a.jsxs)("div", {
              className: "flex flex-col gap-2",
              children: [
                b,
                v,
                (0, a.jsx)(eg.T, {
                  size: "dialog",
                  selectedColor: "primary",
                  unselectedColor: "ghostActive",
                  selectedId: em,
                  onSelect: _,
                  ariaLabel: A,
                  options: F,
                }),
              ],
            })),
            (H[47] = em),
            (H[48] = A),
            (H[49] = F),
            (H[50] = C))
          : (C = H[50]),
        H[51] !== ec ||
        H[52] !== B ||
        H[53] !== $ ||
        H[54] !== en ||
        H[55] !== Y ||
        H[56] !== er ||
        H[57] !== el ||
        H[58] !== J ||
        H[59] !== W ||
        H[60] !== eo
          ? ((I =
              !W &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.sftpPasswordNote",
                      defaultMessage: "Passwords are shown once when generated. Copy them immediately.",
                      description: "SFTP password visibility guidance",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "mt-1 flex flex-col items-start gap-4 border-t border-subtle pt-4",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [
                          (0, a.jsx)("h3", {
                            className: "text-sm font-semibold",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.passwordTitle",
                              defaultMessage: "Generate password",
                              description: "Password generation heading",
                            }),
                          }),
                          (0, a.jsx)("p", {
                            className: "text-xs text-secondary",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.passwordDescription",
                              defaultMessage: "Generate a password for SFTP access. You will only see it once.",
                              description: "Effect of switching SFTP to password authentication",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)(U, {
                        size: "dialog",
                        loading: el.isPending,
                        disabled: null == B || en || ec || eo.isPending,
                        onClick: () => {
                          ;(ee(null),
                            es("idle"),
                            eo.reset(),
                            el.mutate(void 0, {
                              onError: (e) => R(J, "sftp_password", e),
                              onSuccess: (e) => {
                                ;(ee(e.password), er())
                              },
                            }))
                        },
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.resetPassword",
                          defaultMessage: "Generate password",
                          description: "Replaces the current SFTP password and displays the new one once",
                        }),
                      }),
                      null != Y &&
                        (0, a.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, a.jsx)("code", { className: "break-all select-text", children: Y }),
                            (0, a.jsx)(ef.i, {
                              variant: "secondaryAction",
                              ariaLabel: $.formatMessage(ej.copyPassword),
                              buttonText: $.formatMessage(ej.copyPassword),
                              onCopy: () => eu(Y),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              })),
            (H[51] = ec),
            (H[52] = B),
            (H[53] = $),
            (H[54] = en),
            (H[55] = Y),
            (H[56] = er),
            (H[57] = el),
            (H[58] = J),
            (H[59] = W),
            (H[60] = eo),
            (H[61] = I))
          : (I = H[61]),
        H[62] !== ec ||
        H[63] !== B ||
        H[64] !== $ ||
        H[65] !== en ||
        H[66] !== X ||
        H[67] !== er ||
        H[68] !== el ||
        H[69] !== J ||
        H[70] !== W ||
        H[71] !== eo
          ? ((E =
              W &&
              (0, a.jsxs)("form", {
                className: "mt-1 flex flex-col items-start gap-3 border-t border-subtle pt-4",
                onSubmit: (e) => {
                  ;(e.preventDefault(),
                    el.reset(),
                    eo.mutate(void 0, {
                      onError: (e) => R(J, "sftp_ssh_key", e),
                      onSuccess: () => {
                        ;(ee(null), Q(""), er())
                      },
                    }))
                },
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex flex-col gap-1",
                    children: [
                      (0, a.jsx)("h3", {
                        className: "text-sm font-semibold",
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.sshKeysTitle",
                          defaultMessage: "Set SSH public keys",
                          description:
                            "Heading in merchant SFTP settings for replacing the public keys allowed to authenticate",
                        }),
                      }),
                      (0, a.jsx)("p", {
                        className: "text-xs text-secondary",
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.sshKeysReplacementDescription",
                          defaultMessage:
                            "Paste up to 10 OpenSSH public keys, one per line. Saving replaces all existing keys and disables password authentication. Include every key that should retain access.",
                          description:
                            "Merchant SFTP settings warning that saving up to ten newline-separated public keys replaces every existing key and disables password authentication",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("label", {
                    className: "flex w-full flex-col gap-1 text-sm font-medium",
                    children: [
                      (0, a.jsx)(u.A, {
                        id: "merchantSettings.sshKeys",
                        defaultMessage: "SSH public keys",
                        description:
                          "Label for the merchant SFTP authentication textarea accepting up to ten OpenSSH public keys, one per line",
                      }),
                      (0, a.jsx)(j.TM, {
                        variant: "code",
                        name: "sftp-public-key",
                        disabled: null == B || en || ec || eo.isPending || el.isPending,
                        placeholder: $.formatMessage({
                          id: "merchantSettings.sshKeyPlaceholder",
                          defaultMessage: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQ...",
                          description:
                            "Example OpenSSH public key in the empty SSH key input; preserve the ssh-rsa key type and the example base64 prefix",
                        }),
                        value: X,
                        required: !0,
                        onChange: (e) => {
                          ;(Q(e.target.value), eo.reset())
                        },
                      }),
                      (0, a.jsx)("p", {
                        className: "mt-1.5 text-xs font-normal text-secondary",
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.sshKeysHelp",
                          defaultMessage:
                            "Paste up to 10 public keys, one per line. Keep the matching private keys in your SFTP clients.",
                          description:
                            "Instructions below the merchant SFTP public keys textarea; only public keys are submitted, and private keys remain in the merchant's SFTP clients",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(U, {
                    type: "submit",
                    size: "dialog",
                    loading: eo.isPending,
                    disabled: null == B || en || ec || !X.trim() || el.isPending,
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.replaceKeys",
                      defaultMessage: "Replace SSH keys",
                      description:
                        "Button in merchant SFTP settings that replaces all authorized public keys with the submitted keys and disables password authentication",
                    }),
                  }),
                ],
              })),
            (H[62] = ec),
            (H[63] = B),
            (H[64] = $),
            (H[65] = en),
            (H[66] = X),
            (H[67] = er),
            (H[68] = el),
            (H[69] = J),
            (H[70] = W),
            (H[71] = eo),
            (H[72] = E))
          : (E = H[72]),
        H[73] !== eo.isSuccess
          ? ((L =
              eo.isSuccess &&
              (0, a.jsx)("p", {
                role: "status",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.keysSaved",
                  defaultMessage: "SSH public keys saved",
                  description:
                    "Confirmation in merchant SFTP settings after the submitted public keys have replaced the previously authorized keys",
                }),
              })),
            (H[73] = eo.isSuccess),
            (H[74] = L))
          : (L = H[74]),
        H[75] !== et
          ? ((D =
              "copied" === et &&
              (0, a.jsx)("p", {
                role: "status",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.copied",
                  defaultMessage: "Copied",
                  description: "Clipboard copy succeeded",
                }),
              })),
            (H[75] = et),
            (H[76] = D))
          : (D = H[76]),
        H[77] !== et
          ? ((z =
              "failed" === et &&
              (0, a.jsx)("p", {
                role: "alert",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.copyError",
                  defaultMessage: "Couldn’t copy. Select and copy the value manually.",
                  description: "Clipboard access failed",
                }),
              })),
            (H[77] = et),
            (H[78] = z))
          : (z = H[78]),
        H[79] !== C ||
        H[80] !== I ||
        H[81] !== E ||
        H[82] !== L ||
        H[83] !== D ||
        H[84] !== z ||
        H[85] !== x ||
        H[86] !== y
          ? ((O = (0, a.jsxs)(a.Fragment, { children: [x, y, C, I, E, L, D, z] })),
            (H[79] = C),
            (H[80] = I),
            (H[81] = E),
            (H[82] = L),
            (H[83] = D),
            (H[84] = z),
            (H[85] = x),
            (H[86] = y),
            (H[87] = O))
          : (O = H[87]),
        O
      )
    }
    function ev(e) {
      return (0, a.jsx)(y.$, { ...e, color: "ghostActive", size: "iconCircleSm" })
    }
    let ej = (0, L.YK)({
      copyPassword: {
        id: "merchantSettings.copyPassword",
        defaultMessage: "Copy password",
        description: "Copies the newly generated SFTP password",
      },
      host: { id: "merchantSettings.host", defaultMessage: "Host", description: "SFTP server hostname" },
      username: { id: "merchantSettings.username", defaultMessage: "Username", description: "SFTP login username" },
      root_path: { id: "merchantSettings.root", defaultMessage: "Upload path", description: "SFTP upload directory" },
      port: { id: "merchantSettings.port", defaultMessage: "Port", description: "SFTP connection port" },
    })
    var e_ = s("vn1h"),
      ew = s("Xpvt"),
      eA = s("OXR4"),
      eM = s("ASxG"),
      eN = s("TUql")
    let eT = eM.record(eM.string(), eM.unknown())
    class ek extends Error {
      lineNumber
      constructor(e) {
        ;(super("Invalid JSONL record"), (this.lineNumber = e))
      }
    }
    class eR extends Error {
      constructor() {
        super("The file does not have a gzip header.")
      }
    }
    function eP(e, t) {
      try {
        return eT.parse(JSON.parse(e))
      } catch {
        throw new ek(t)
      }
    }
    function eF(e) {
      return e.length >= 2 && 31 === e[0] && 139 === e[1]
    }
    function eC(e) {
      return new TextDecoder("utf-8").decode(e)
    }
    function eI(e) {
      let t = [],
        s = new Set()
      return (
        e.forEach((e, a) => {
          let n = e.trim() || `column_${a}`,
            i = n,
            r = 1
          for (; s.has(i);) ((i = `${n}_${r}`), (r += 1))
          ;(s.add(i), t.push(i))
        }),
        t
      )
    }
    function eU(e, t, s, a, n) {
      if (a <= t) return void e.push(s)
      let i = Math.floor(n() * a)
      i < t && (e[i] = s)
    }
    async function eq(e) {
      if ("function" == typeof e.arrayBuffer) return new Uint8Array(await e.arrayBuffer())
      if ("u" > typeof FileReader)
        return new Promise((t, s) => {
          let a = new FileReader()
          ;((a.onerror = () => {
            s(Error("Unable to read the selected file."))
          }),
            (a.onload = () => {
              let { result: e } = a
              e instanceof ArrayBuffer
                ? t(new Uint8Array(e))
                : "string" == typeof e
                  ? t(new TextEncoder().encode(e))
                  : s(Error("Unable to read the selected file."))
            }),
            a.readAsArrayBuffer(e))
        })
      if ("function" == typeof e.text) {
        let t = await e.text()
        return new TextEncoder().encode(t)
      }
      throw Error("Unable to read the selected file in this browser.")
    }
    let eE = eM.object({
      field: eM.string().optional(),
      issue: eM.string().optional(),
      loc: eM.union([eM.string(), eM.array(eM.union([eM.string(), eM.number()]))]).optional(),
      type: eM.string().optional(),
    })
    function eL(e) {
      let t,
        s,
        i,
        r,
        l,
        o,
        d,
        c,
        m,
        h,
        p,
        f = (0, n.c)(28),
        { report: g } = e,
        y = 0 === g.sampled_count,
        S = g.invalid_count > 0,
        v = "valid"
      ;(S ? (v = "invalid") : y && (v = "empty"),
        f[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = { invalid: "error", empty: "caution", valid: "success" }), (f[0] = t))
          : (t = f[0]))
      let j = t[v],
        _ = S || y ? "alert" : "status"
      return (
        f[1] !== v
          ? ((s = (0, a.jsx)(u.A, {
              id: "merchantSettings.validationReport.status",
              defaultMessage:
                "{state, select, invalid {Submission blocked by sample errors} empty {No rows were checked} other {No errors found in the sample}}",
              description:
                "Result of merchant feed sample validation. Invalid samples block submission; empty means validation has no evidence, not a passing feed. A clean sample does not mean ingestion succeeded.",
              values: { state: v },
            })),
            (f[1] = v),
            (f[2] = s))
          : (s = f[2]),
        f[3] !== g.invalid_count || f[4] !== g.sampled_count || f[5] !== g.valid_count
          ? ((i = (0, a.jsx)("p", {
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.validationSummary",
                defaultMessage: "Sampled {sampled} rows: {valid} valid, {invalid} invalid",
                description: "Sample validation counts, not totals for the entire feed",
                values: { sampled: g.sampled_count, valid: g.valid_count, invalid: g.invalid_count },
              }),
            })),
            (f[3] = g.invalid_count),
            (f[4] = g.sampled_count),
            (f[5] = g.valid_count),
            (f[6] = i))
          : (i = f[6]),
        f[7] !== y || f[8] !== S
          ? ((r =
              (S || y) &&
              (0, a.jsx)("p", {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.validationReport.nextStep",
                  defaultMessage:
                    "{empty, select, yes {Check that the feed contains product records, then validate again before submitting} other {Correct the affected fields in your feed, then validate again before submitting}}",
                  description:
                    "Next action after merchant feed sample validation blocks submission. Empty means no product rows were checked; otherwise the sample contains invalid rows.",
                  values: { empty: y ? "yes" : "no" },
                }),
              })),
            (f[7] = y),
            (f[8] = S),
            (f[9] = r))
          : (r = f[9]),
        f[10] !== i || f[11] !== r
          ? ((l = (0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [i, r] })),
            (f[10] = i),
            (f[11] = r),
            (f[12] = l))
          : (l = f[12]),
        f[13] !== j || f[14] !== _ || f[15] !== s || f[16] !== l
          ? ((o = (0, a.jsx)(x.l, { variant: "callout", layout: "vertical", type: j, role: _, title: s, content: l })),
            (f[13] = j),
            (f[14] = _),
            (f[15] = s),
            (f[16] = l),
            (f[17] = o))
          : (o = f[17]),
        f[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)("p", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.validationReport.scope",
                defaultMessage:
                  "This checks a sample, not the entire feed. It does not confirm country eligibility, domain access, processing, or publication. A passing sample does not mean products are live.",
                description:
                  "Limits of merchant feed preflight validation. It checks parser rules on sampled rows but not runtime eligibility, access, or publication. Do not imply full-file validation or recovery.",
              }),
            })),
            (f[18] = d))
          : (d = f[18]),
        f[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(b.G, {
              href: "https://developers.openai.com/commerce/specs/file-upload/products",
              initiator: "open_in_browser_bridge",
              underline: "always",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.feedFormats.specifications",
                defaultMessage: "Feed specifications",
                description:
                  "Link in the Product feed settings help panel to the product feed schema, required fields and examples. Keep this label concise.",
              }),
            })),
            (f[19] = c))
          : (c = f[19]),
        f[20] !== g.error_counts
          ? ((m =
              Object.keys(g.error_counts).length > 0 &&
              (0, a.jsx)("ul", { className: "flex flex-col gap-1", children: Object.entries(g.error_counts).map(eO) })),
            (f[20] = g.error_counts),
            (f[21] = m))
          : (m = f[21]),
        f[22] !== g.error_samples
          ? ((h =
              g.error_samples.length > 0 &&
              (0, a.jsxs)(eA.J, {
                collapsible: !0,
                title: (0, a.jsx)(u.A, {
                  id: "merchantSettings.validationReport.examples",
                  defaultMessage: "Affected samples and next steps",
                  description: "Expandable list of saved errors from sampled merchant feed records",
                }),
                children: [
                  (0, a.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.validationReport.sampleNumbers",
                      defaultMessage:
                        "Sample numbers are not source line numbers. Examples may not cover every error in the feed.",
                      description:
                        "Sample validation uses randomly selected records, so sample indexes cannot identify physical source lines and examples are not exhaustive",
                    }),
                  }),
                  (0, a.jsx)("ul", { className: "flex flex-col gap-3", children: g.error_samples.map(eD) }),
                ],
              })),
            (f[22] = g.error_samples),
            (f[23] = h))
          : (h = f[23]),
        f[24] !== m || f[25] !== h || f[26] !== o
          ? ((p = (0, a.jsxs)("section", {
              className: "flex min-w-0 flex-col gap-4 text-sm select-text",
              children: [o, d, c, m, h],
            })),
            (f[24] = m),
            (f[25] = h),
            (f[26] = o),
            (f[27] = p))
          : (p = f[27]),
        p
      )
    }
    function eD(e, t) {
      return (0, a.jsxs)(
        "li",
        {
          className: "flex flex-col gap-2 border-b border-subtle py-3",
          children: [
            (0, a.jsx)("p", {
              className: "font-medium break-words",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.validationSample",
                defaultMessage: "Sample {number}: {message}",
                description:
                  "A merchant feed validation error. The number is the one-based position in the sample, not the source line number, and message is the backend explanation.",
                values: { number: e.row_index + 1, message: e.message },
              }),
            }),
            e.details?.map(ez),
          ],
        },
        `${e.row_index}:${t}`,
      )
    }
    function ez(e, t) {
      let s = eE.safeParse(e)
      if (!s.success) return null
      let { field: n, loc: i, issue: r, type: l } = s.data,
        o = n ?? (Array.isArray(i) ? i.join(".") : i)
      return o ? (0, a.jsx)("p", { children: (0, a.jsx)(O, { field: o, reason: r ?? l ?? null }) }, t) : null
    }
    function eO(e) {
      let [t, s] = e
      return (0, a.jsx)(
        "li",
        {
          children: (0, a.jsx)(u.A, {
            id: "merchantSettings.validationReport.categoryCount",
            defaultMessage:
              "{type, select, input_schema_mismatch {Input field errors} parse_error {Values could not be parsed} output_validation_error {Product requirements not met} other {Validation errors}}: {count, number}",
            description:
              "Human-readable error category and affected sampled row count in a merchant validation report. Type is an untranslated parser error code; count is not a full-feed total.",
            values: { type: t, count: s },
          }),
        },
        t,
      )
    }
    function eH(e) {
      let t,
        s,
        i,
        r,
        l,
        o,
        d,
        c = (0, n.c)(19),
        { error: m, source: h } = e,
        p = m instanceof w.fk ? m.status : null
      c[0] !== m
        ? ((t = (function (e) {
            if (!(e instanceof w.fk) || 400 !== e.status) return null
            try {
              return eM.object({ detail: eM.string() }).safeParse(JSON.parse(e.message)).data?.detail ?? null
            } catch {
              return null
            }
          })(m)),
          (c[0] = m),
          (c[1] = t))
        : (t = c[1])
      let f = t
      if (m instanceof eR) {
        let e
        ;(c[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(u.A, {
              id: "merchantSettings.validationReport.invalidGzip",
              defaultMessage:
                "This file is not gzip-compressed. Compress the CSV or JSONL file with gzip, then select it and validate again. Renaming a file to .gz does not compress it.",
              description:
                "The selected merchant feed file has a gzip filename but no gzip header. The merchant must actually compress the file; the check does not establish full archive integrity. Preserve CSV, JSONL, gzip, and .gz.",
            })),
            (c[2] = e))
          : (e = c[2]),
          (s = e))
      } else if (m instanceof ek) {
        let e
        ;(c[3] !== m.lineNumber
          ? ((e = (0, a.jsx)(u.A, {
              id: "merchantSettings.validationInvalidJsonlRecord",
              defaultMessage: "Invalid JSONL record on line {line}. Use one JSON object per line.",
              description:
                "Error in the merchant feed validation report. The line placeholder is the one-based source line containing malformed JSON or a value that is not a JSON object.",
              values: { line: m.lineNumber },
            })),
            (c[3] = m.lineNumber),
            (c[4] = e))
          : (e = c[4]),
          (s = e))
      } else if (null != f) s = f
      else if (null == p && "file" === h) {
        let e
        ;(c[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(u.A, {
              id: "merchantSettings.validationReport.fileUnavailable",
              defaultMessage:
                "The file could not be read or validated. Check that it decompresses and contains product records, then retry.",
              description:
                "Local file sampling or validation did not complete. Do not claim the feed passed or diagnose a service outage; the merchant can check the file and retry.",
            })),
            (c[5] = e))
          : (e = c[5]),
          (s = e))
      } else if ("file" === h && (413 === p || 502 === p || 504 === p)) {
        let e
        ;(c[6] !== p
          ? ((e = (0, a.jsx)(u.A, {
              id: "merchantSettings.validationReport.fileRequestAction",
              defaultMessage:
                "{status, select, 413 {The validation sample exceeds the request size limit. Check record sizes against the feed specifications, then try again.} 504 {Validation timed out. Retry; if it keeps failing, contact OpenAI support with your feed ID.} other {The validation service could not complete the request. Retry; if it keeps failing, contact OpenAI support with your feed ID.}}",
              description:
                "Next step after a failed API request to validate a sample from a local file. Status is the HTTP response code. Do not describe these as hosted URL failures or tell the merchant to switch to manual upload, which they are already using. Service failures do not prove the file is invalid.",
              values: { status: p },
            })),
            (c[6] = p),
            (c[7] = e))
          : (e = c[7]),
          (s = e))
      } else {
        let e,
          t = p ?? "unknown"
        ;(c[8] !== t
          ? ((e = (0, a.jsx)(u.A, {
              id: "merchantSettings.validationReport.requestAction",
              defaultMessage:
                "{status, select, 400 {Check the source format and request settings, then retry validation} 401 {Sign in again, then retry validation} 403 {This account does not have access to validate this merchant feed. Ask a workspace administrator to check your access.} 413 {This feed exceeds the hosted validation size limit. Download the feed and validate it using Manual upload.} 429 {Too many validation requests. Wait a moment, then try again.} 502 {The hosted feed could not be fetched or validated. Check that the URL and HTTP headers allow access, then retry.} 504 {Validation timed out. Retry, or download the feed and validate it using Manual upload.} other {Validation is unavailable or was interrupted. Retry; if it keeps failing, contact OpenAI support with your feed ID.}}",
              description:
                "Next step after a failed merchant feed validation request. Status is the HTTP response code, not a feed issue code. A 502 can reflect hosted-source access or a service error; do not claim which. Unknown failures do not prove the merchant data is wrong.",
              values: { status: t },
            })),
            (c[8] = t),
            (c[9] = e))
          : (e = c[9]),
          (s = e))
      }
      let g = m instanceof eR || m instanceof ek || 400 === p ? "error" : "caution"
      return (
        c[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(u.A, {
              id: "merchantSettings.validationReport.incomplete",
              defaultMessage: "Validation could not complete",
              description:
                "Merchant feed preflight did not produce a complete sample report; do not interpret this as a valid feed or a confirmed product data failure",
            })),
            (c[10] = i))
          : (i = c[10]),
        c[11] !== s ? ((r = (0, a.jsx)("p", { children: s })), (c[11] = s), (c[12] = r)) : (r = c[12]),
        c[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)("p", {
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.validationReport.retryBeforeSubmit",
                defaultMessage: "Validate again before submitting; no passing result is available",
                description:
                  "Submission is disabled after an unsuccessful validation attempt; the merchant can correct the source or retry validation",
              }),
            })),
            (c[13] = l))
          : (l = c[13]),
        c[14] !== r
          ? ((o = (0, a.jsxs)("div", { className: "flex flex-col gap-2 select-text", children: [r, l] })),
            (c[14] = r),
            (c[15] = o))
          : (o = c[15]),
        c[16] !== g || c[17] !== o
          ? ((d = (0, a.jsx)(x.l, {
              variant: "callout",
              type: g,
              layout: "vertical",
              role: "alert",
              title: i,
              content: o,
            })),
            (c[16] = g),
            (c[17] = o),
            (c[18] = d))
          : (d = c[18]),
        d
      )
    }
    function eB(e) {
      let t,
        r,
        o,
        m,
        h,
        g,
        x,
        b,
        S,
        v,
        _,
        w,
        A,
        M,
        N,
        T,
        R,
        F = (0, n.c)(154),
        { feedId: C } = e,
        I = (0, c.A)(),
        { accountId: U, userId: q } = (0, p.As)(),
        E = (0, i.jE)()
      F[0] !== U || F[1] !== C || F[2] !== q
        ? ((t = { accountId: U, userId: q, feedId: C }), (F[0] = U), (F[1] = C), (F[2] = q), (F[3] = t))
        : (t = F[3])
      let L = t,
        D = (0, d.useRef)(!1),
        [z, O] = (0, d.useState)(null),
        [H, B] = (0, d.useState)(""),
        [V, $] = (0, d.useState)("once")
      F[4] === Symbol.for("react.memo_cache_sentinel") ? ((r = []), (F[4] = r)) : (r = F[4])
      let [K, G] = (0, d.useState)(r),
        [J, W] = (0, d.useState)(!1),
        [Z, X] = (0, d.useState)(!1),
        Q = (0, d.useRef)(null),
        Y = (0, d.useRef)(null)
      ;(F[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = () => () => Y.current?.abort()), (m = []), (F[5] = o), (F[6] = m))
        : ((o = F[5]), (m = F[6])),
        (0, d.useEffect)(o, m),
        F[7] !== H
          ? ((g = H.trim()),
            (h = URL.canParse(g) && "https:" === new URL(g).protocol),
            (F[7] = H),
            (F[8] = h),
            (F[9] = g))
          : ((h = F[8]), (g = F[9])))
      let ee = h
      F[10] !== K ? ((x = Object.fromEntries(K.filter(e$).map(eV))), (F[10] = K), (F[11] = x)) : (x = F[11])
      let et = x
      F[12] !== C || F[13] !== z || F[14] !== et || F[15] !== L || F[16] !== g
        ? ((b = {
            mutationFn: async () => {
              if (null == C) throw Error("No merchant selected")
              Y.current = new AbortController()
              let e = Y.current.signal,
                t =
                  null == z
                    ? null
                    : await (async function (e, t = 100, a = Math.random, n) {
                        let i
                        n?.throwIfAborted()
                        let r = await eq(e.slice(0, 2))
                        if ((n?.throwIfAborted(), !eF(r))) throw new eR()
                        let l = e.name.toLowerCase().endsWith(".jsonl.gz") ? "jsonl" : "csv"
                        try {
                          n?.throwIfAborted()
                          let s = await (async function (e, t) {
                            if ("function" != typeof e.stream)
                              throw Error("Streaming is not supported in this browser.")
                            let s = e.stream()
                            return (
                              (await (async function (e) {
                                let t = e.slice(0, 2)
                                return eF(new Uint8Array(await t.arrayBuffer()))
                              })(e)) && (s = s.pipeThrough(new DecompressionStream("gzip"), { signal: t })),
                              s.pipeThrough(new TextDecoderStream(), { signal: t })
                            )
                          })(e, n)
                          i =
                            "jsonl" === l
                              ? await (async function (e, t, s) {
                                  let a = e.getReader(),
                                    n = [],
                                    i = "",
                                    r = 0,
                                    l = 0
                                  try {
                                    for (; r < 1e3;) {
                                      let { value: e, done: o } = await a.read()
                                      if (o) break
                                      let d = (i += e).split(/\r?\n/)
                                      for (let e of ((i = d.pop() ?? ""), d)) {
                                        if (((l += 1), !e.trim())) continue
                                        let a = eP(e, l)
                                        if (((r += 1), eU(n, t, a, r, s), r >= 1e3)) break
                                      }
                                    }
                                    if (i.trim() && r < 1e3) {
                                      let e = eP(i, l + 1)
                                      ;((r += 1), eU(n, t, e, r, s))
                                    }
                                  } finally {
                                    await a.cancel()
                                  }
                                  if (0 === n.length)
                                    throw Error("Unable to parse any JSONL records from the selected file.")
                                  return n
                                })(s, t, a)
                              : await (async function (e, t, s) {
                                  let a = e.getReader(),
                                    n = [],
                                    i = 0,
                                    r = 0,
                                    l = null,
                                    o = [],
                                    d = "",
                                    c = !1,
                                    u = !1,
                                    m = !1,
                                    h = () => {
                                      let e = [...o, d]
                                      if (((o = []), (d = ""), e.every((e) => "" === e))) return
                                      if (!l) {
                                        l = eI(e)
                                        return
                                      }
                                      let a = {}
                                      ;(l.forEach((t, s) => {
                                        a[t] = e[s] ?? ""
                                      }),
                                        (i += 1),
                                        (r += 1),
                                        eU(n, t, a, i, s))
                                    },
                                    p = (e) => {
                                      for (let t = 0; t < e.length; t += 1) {
                                        let s = e[t]
                                        if (u) {
                                          if (((u = !1), '"' === s)) {
                                            d += '"'
                                            continue
                                          }
                                          c = !1
                                        }
                                        if (!m || ((m = !1), "\n" !== s)) {
                                          if (c) {
                                            if ('"' === s) {
                                              u = !0
                                              continue
                                            }
                                            d += s
                                            continue
                                          }
                                          if ('"' === s) {
                                            c = !0
                                            continue
                                          }
                                          if ("," === s) {
                                            ;(o.push(d), (d = ""))
                                            continue
                                          }
                                          if ("\n" === s || "\r" === s) {
                                            if (
                                              ("\r" === s && "\n" === e[t + 1]
                                                ? (t += 1)
                                                : "\r" === s && t === e.length - 1 && (m = !0),
                                              h(),
                                              r >= 1e3)
                                            )
                                              return
                                            continue
                                          }
                                          d += s
                                        }
                                      }
                                    }
                                  for (;;) {
                                    let { value: e, done: t } = await a.read()
                                    if (t) break
                                    if ((p(e), r >= 1e3)) {
                                      await a.cancel()
                                      break
                                    }
                                  }
                                  if ((r < 1e3 && (d || o.length > 0) && h(), !l || 0 === n.length))
                                    throw Error("Unable to parse any CSV records from the selected file.")
                                  return n
                                })(s, t, a)
                        } catch (o) {
                          if (o instanceof ek) throw o
                          n?.throwIfAborted()
                          let r = await (async function (e) {
                            let t = await eq(e)
                            return eF(t) ? eC((0, eN.Aq)(t)) : eC(t)
                          })(e)
                          ;(n?.throwIfAborted(),
                            (i = (function (e, t, s) {
                              if (e.length <= t) return e.slice()
                              let a = e.slice(0, t)
                              for (let n = t; n < e.length; n += 1) {
                                let i = Math.floor(s() * (n + 1))
                                i < t && (a[i] = e[n])
                              }
                              return a
                            })(
                              "jsonl" === l
                                ? (function (e) {
                                    let t = []
                                    for (let [s, a] of e.split(/\r?\n/).entries())
                                      if (a.trim() && (t.push(eP(a, s + 1)), t.length >= 1e3)) break
                                    if (0 === t.length)
                                      throw Error("Unable to parse any JSONL records from the selected file.")
                                    return t
                                  })(r)
                                : await (async function (e) {
                                    let { parse: t } = await s.e(749940).then(s.bind(s, "otI6")),
                                      a = t(e, {
                                        columns: eI,
                                        skip_empty_lines: !0,
                                        relax_column_count: !0,
                                        bom: !0,
                                        trim: !0,
                                      })
                                    if (!Array.isArray(a) || 0 === a.length)
                                      throw Error("Unable to parse any CSV records from the selected file.")
                                    return eM.array(eT).parse(a)
                                  })(r),
                              t,
                              a,
                            )))
                        }
                        return { sampleRows: i, fileFormatHint: l }
                      })(z, void 0, void 0, e).catch((t) => {
                        throw (
                          e.aborted || k(L, "file_validate", t instanceof ek ? "invalid_jsonl" : "invalid_input"),
                          t
                        )
                      })
              return (
                e.throwIfAborted(),
                f.Request.safePost("/shopping/feeds/{feed_id}/validate", {
                  parameters: { path: { feed_id: C } },
                  signal: e,
                  requestBody: {
                    source: null == z ? "hosted_url" : "file_upload",
                    source_url: null == z ? g : void 0,
                    file_name: z?.name,
                    sample_rows: t?.sampleRows,
                    file_format_hint: t?.fileFormatHint,
                    sample_limit: 100,
                    headers: null == z ? et : void 0,
                  },
                }).catch(P(L, null == z ? "hosted_validate" : "file_validate", e))
              )
            },
            gcTime: 0,
          }),
          (F[12] = C),
          (F[13] = z),
          (F[14] = et),
          (F[15] = L),
          (F[16] = g),
          (F[17] = b))
        : (b = F[17])
      let es = (0, l.n)(b)
      F[18] !== U ||
      F[19] !== J ||
      F[20] !== C ||
      F[21] !== z ||
      F[22] !== V ||
      F[23] !== E ||
      F[24] !== et ||
      F[25] !== L ||
      F[26] !== g ||
      F[27] !== q
        ? ((S = {
            mutationFn: async () => {
              if (null == C) throw Error("No merchant selected")
              Y.current = new AbortController()
              let e = Y.current.signal
              if (null == z && "once" !== V)
                return (
                  await f.Request.safePost("/shopping/feeds/{feed_id}/schedule", {
                    parameters: { path: { feed_id: C } },
                    requestBody: { frequency: V, feed_type: "snapshot", source_url: g, headers: et, enabled: !0 },
                    signal: e,
                  }).catch(P(L, "hosted_schedule", e)),
                  "scheduled"
                )
              let t = await f.Request.safePost("/shopping/feeds/{feed_id}/runs", {
                parameters: { path: { feed_id: C } },
                requestBody: {
                  source: null == z ? "hosted_url" : "file_upload",
                  feed_type: "snapshot",
                  file_name: z?.name,
                  source_url: null == z ? g : void 0,
                  headers: null == z ? et : void 0,
                  require_supported_filename: null != z || !J,
                },
                signal: e,
              }).catch(P(L, null == z ? "hosted_run_create" : "file_run_create", e))
              if ((e.throwIfAborted(), null != z)) {
                if (!t.upload_url)
                  throw (k(L, "file_transfer", "service_unavailable"), Error("Missing feed upload URL"))
                let s = z.size >= 0x40000000 ? 0x2000000 : 8388608
                try {
                  await new e_.wG(t.upload_url).uploadData(z, {
                    blockSize: s,
                    maxSingleShotSize: s,
                    concurrency: 4,
                    abortSignal: e,
                    blobHTTPHeaders: z.type ? { blobContentType: z.type } : void 0,
                  })
                } catch (t) {
                  throw (
                    e.aborted ||
                      (t instanceof Error && "AbortError" === t.name) ||
                      k(
                        L,
                        "file_transfer",
                        (function (e) {
                          if ("object" != typeof e || null == e) return "request_failed"
                          if ("statusCode" in e && "number" == typeof e.statusCode && e.statusCode >= 100) {
                            let t = e.statusCode
                            return 401 === t || 403 === t
                              ? "access_denied"
                              : 429 === t
                                ? "rate_limited"
                                : t >= 500 && t < 600
                                  ? "service_unavailable"
                                  : "request_failed"
                          }
                          return "code" in e &&
                            "string" == typeof e.code &&
                            [
                              "REQUEST_SEND_ERROR",
                              "ECONNRESET",
                              "ECONNREFUSED",
                              "ENETUNREACH",
                              "ENOTFOUND",
                              "ETIMEDOUT",
                              "EAI_AGAIN",
                              "EHOSTUNREACH",
                            ].includes(e.code)
                            ? "network"
                            : "request_failed"
                        })(t),
                      ),
                    t
                  )
                }
                ;(e.throwIfAborted(), k(L, "file_transfer", null))
              }
              return (
                e.throwIfAborted(),
                await f.Request.safePost("/shopping/feeds/{feed_id}/runs/{run_id}/submit", {
                  parameters: { path: { feed_id: C, run_id: er(t.run_id) }, query: { feed_type: "snapshot" } },
                  signal: e,
                }).catch(P(L, "feed_submit", e)),
                await E.invalidateQueries({ queryKey: ["merchant-runs", q, U, C] }),
                "submitted"
              )
            },
            gcTime: 0,
          }),
          (F[18] = U),
          (F[19] = J),
          (F[20] = C),
          (F[21] = z),
          (F[22] = V),
          (F[23] = E),
          (F[24] = et),
          (F[25] = L),
          (F[26] = g),
          (F[27] = q),
          (F[28] = S))
        : (S = F[28])
      let ea = (0, l.n)(S),
        en = ea.isPending || es.isPending,
        ei = es.isError || (null != es.data && (es.data.invalid_count > 0 || 0 === es.data.sampled_count))
      if (
        F[29] !== J ||
        F[30] !== en ||
        F[31] !== C ||
        F[32] !== z ||
        F[33] !== Z ||
        F[34] !== V ||
        F[35] !== K ||
        F[36] !== I ||
        F[37] !== L ||
        F[38] !== ea ||
        F[39] !== g ||
        F[40] !== H ||
        F[41] !== ee ||
        F[42] !== es ||
        F[43] !== ei
      ) {
        let e,
          t,
          s,
          n,
          i,
          r,
          l,
          o,
          d,
          c,
          m,
          h,
          p,
          f,
          x,
          b,
          S,
          T,
          R,
          P,
          U,
          q,
          E,
          et,
          er,
          el,
          eo,
          ed,
          ec,
          eu,
          em,
          eh,
          ep,
          ef,
          ex,
          eb,
          eS,
          ev,
          ej,
          e_ = function (e) {
            let t = "file" === e ? null != z : null == z,
              s = "file" === e ? null != z : ee
            return (0, a.jsxs)("div", {
              className: "flex flex-col gap-4",
              role: "group",
              "aria-label":
                "file" === e
                  ? I.formatMessage({
                      id: "merchantSettings.submitTitle",
                      defaultMessage: "Manual upload",
                      description: "Section for manually submitting a feed",
                    })
                  : I.formatMessage({
                      id: "merchantSettings.hostedUrlTitle",
                      defaultMessage: "Hosted URL",
                      description:
                        "Heading above the hosted product feed URL input and scheduling options on the merchant settings page",
                    }),
              children: [
                null == C &&
                  (0, a.jsx)("p", {
                    className: "text-sm text-caution select-none",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.selectBeforeSubmit",
                      defaultMessage: "Select a merchant above before validating or submitting a feed",
                      description:
                        "Explains why the feed validation and submission buttons are disabled when no merchant is selected",
                    }),
                  }),
                (0, a.jsxs)("div", {
                  className: "flex flex-wrap gap-3",
                  children: [
                    (0, a.jsx)(y.$, {
                      color: "primary",
                      size: "dialog",
                      loading: t && ea.isPending,
                      disabled: null == C || !t || !s || en || ei,
                      onClick: () => ea.mutate(),
                      children: (0, a.jsx)(u.A, {
                        id: "merchantSettings.submit",
                        defaultMessage: "Submit feed",
                        description: "Uploads and submits a feed or creates its hosted URL schedule",
                      }),
                    }),
                    (0, a.jsx)(y.$, {
                      color: "outlineCard",
                      size: "dialog",
                      loading: t && es.isPending,
                      disabled: null == C || !t || !s || en,
                      onClick: () => es.mutate(),
                      children: (0, a.jsx)(u.A, {
                        id: "merchantSettings.validate",
                        defaultMessage: "Validate",
                        description: "Samples and validates the selected feed without submitting it",
                      }),
                    }),
                    t &&
                      en &&
                      (0, a.jsx)(y.$, {
                        color: "outlineCard",
                        size: "actionSm",
                        onClick: () => Y.current?.abort(),
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.cancel",
                          defaultMessage: "Cancel",
                          description: "Cancels the in-flight feed submission request",
                        }),
                      }),
                  ],
                }),
                t &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      ea.isSuccess &&
                        (0, a.jsx)("p", {
                          role: "status",
                          children:
                            "scheduled" === ea.data
                              ? (0, a.jsx)(u.A, {
                                  id: "merchantSettings.scheduled",
                                  defaultMessage: "Feed schedule saved",
                                  description: "Hosted feed schedule was saved successfully",
                                })
                              : (0, a.jsx)(u.A, {
                                  id: "merchantSettings.submitted",
                                  defaultMessage: "Submission received. Processing will begin shortly.",
                                  description: "Feed was submitted successfully; ingestion is asynchronous",
                                }),
                        }),
                      ea.isError &&
                        (0, a.jsx)("p", {
                          className: "text-danger",
                          role: "alert",
                          children: (0, a.jsx)(u.A, {
                            id: "merchantSettings.submissionError",
                            defaultMessage: "The feed request did not complete. Check your input and try again.",
                            description: "Validation, upload, submission or schedule request failed or was canceled",
                          }),
                        }),
                      es.isError && (0, a.jsx)(eH, { error: es.error, source: e }),
                      es.data && (0, a.jsx)(eL, { report: es.data }),
                    ],
                  }),
              ],
            })
          }
        ;((A = "flex min-w-0 flex-col gap-5"),
          F[50] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(u.A, {
                id: "merchantSettings.submitTitle",
                defaultMessage: "Manual upload",
                description: "Section for manually submitting a feed",
              })),
              (F[50] = e))
            : (e = F[50]),
          F[51] !== ea || F[52] !== es
            ? ((t = () => {
                ;(es.reset(), ea.reset())
              }),
              (F[51] = ea),
              (F[52] = es),
              (F[53] = t))
            : (t = F[53]),
          F[54] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsx)(u.A, {
                id: "merchantSettings.file",
                defaultMessage: "Upload a file",
                description: "Compressed CSV or JSONL product feed file input",
              })),
              (F[54] = s))
            : (s = F[54]),
          F[55] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsxs)("span", {
                className: "flex flex-col gap-1",
                children: [
                  s,
                  (0, a.jsx)("span", {
                    className: "text-xs font-normal text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.fileHelp",
                      defaultMessage: "Upload a compressed feed file from your device.",
                      description: "File upload instructions",
                    }),
                  }),
                ],
              })),
              (F[55] = n))
            : (n = F[55]),
          F[56] !== I
            ? ((i = I.formatMessage({
                id: "merchantSettings.file",
                defaultMessage: "Upload a file",
                description: "Compressed CSV or JSONL product feed file input",
              })),
              (F[56] = I),
              (F[57] = i))
            : (i = F[57]),
          F[58] !== L
            ? ((r = (e) => {
                let t = e.target.files?.[0] ?? null,
                  s = null != t && t.size > 0x200000000 ? "file_too_large" : null,
                  a = null == t || /\.(csv|jsonl)\.gz$/i.test(t.name) ? s : "unsupported_file_type",
                  n = null != a
                ;(null != t && k(L, "file_select", a),
                  X(n),
                  O(n ? null : t),
                  n ? (e.target.value = "") : null != t && B(""))
              }),
              (F[58] = L),
              (F[59] = r))
            : (r = F[59]),
          F[60] !== i || F[61] !== r
            ? ((l = (0, a.jsxs)("label", {
                className: "flex flex-col gap-6 text-sm font-semibold",
                children: [
                  n,
                  (0, a.jsx)("input", {
                    ref: Q,
                    className:
                      "w-full rounded-md border border-subtle bg-surface-card px-3 py-2 text-sm font-normal file:me-4 file:rounded-md file:border-0 file:bg-secondary-soft file:px-3 file:py-2 file:text-sm file:font-medium file:text-default",
                    name: "feed-file",
                    "aria-label": i,
                    type: "file",
                    accept: ".csv.gz,.jsonl.gz",
                    onChange: r,
                  }),
                ],
              })),
              (F[60] = i),
              (F[61] = r),
              (F[62] = l))
            : (l = F[62]),
          F[63] !== Z
            ? ((o =
                Z &&
                (0, a.jsx)("p", {
                  className: "text-danger",
                  role: "alert",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.fileError",
                    defaultMessage: "Choose a supported compressed feed file no larger than 8 GB",
                    description: "Invalid file format or size",
                  }),
                })),
              (F[63] = Z),
              (F[64] = o))
            : (o = F[64]),
          F[65] !== en || F[66] !== t || F[67] !== l || F[68] !== o
            ? ((d = (0, a.jsxs)("fieldset", {
                disabled: en,
                className: "flex flex-col gap-4",
                onChange: t,
                children: [l, o],
              })),
              (F[65] = en),
              (F[66] = t),
              (F[67] = l),
              (F[68] = o),
              (F[69] = d))
            : (d = F[69]),
          (M = (0, a.jsxs)(ey, { title: e, children: [d, e_("file")] })),
          (v = ey),
          F[70] === Symbol.for("react.memo_cache_sentinel")
            ? ((N = (0, a.jsx)(u.A, {
                id: "merchantSettings.hostedUrlTitle",
                defaultMessage: "Hosted URL",
                description:
                  "Heading above the hosted product feed URL input and scheduling options on the merchant settings page",
              })),
              (F[70] = N))
            : (N = F[70]),
          F[71] !== ea || F[72] !== es
            ? ((c = () => {
                ;(es.reset(), ea.reset())
              }),
              (F[71] = ea),
              (F[72] = es),
              (F[73] = c))
            : (c = F[73]),
          F[74] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = (0, a.jsx)(u.A, {
                id: "merchantSettings.url",
                defaultMessage: "Provide a hosted URL",
                description: "HTTPS URL from which to fetch the merchant feed",
              })),
              (F[74] = m))
            : (m = F[74]),
          F[75] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = (0, a.jsxs)("span", {
                className: "flex flex-col gap-1",
                children: [
                  m,
                  (0, a.jsx)("span", {
                    className: "text-xs font-normal text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.urlHelp",
                      defaultMessage: "Use this if your feed is already hosted online.",
                      description: "Hosted URL instructions",
                    }),
                  }),
                ],
              })),
              (F[75] = h))
            : (h = F[75]),
          F[76] !== I
            ? ((p = I.formatMessage({
                id: "merchantSettings.hostedUrlLabel",
                defaultMessage: "Hosted URL",
                description: "Hosted feed URL input label",
              })),
              (F[76] = I),
              (F[77] = p))
            : (p = F[77]),
          F[78] !== I
            ? ((f = I.formatMessage({
                id: "merchantSettings.urlPlaceholder",
                defaultMessage: "https://example.com/catalog.jsonl.gz",
                description:
                  "Example HTTPS product feed URL shown in the empty hosted URL input; preserve the HTTPS scheme and .jsonl.gz file extension",
              })),
              (F[78] = I),
              (F[79] = f))
            : (f = F[79]),
          F[80] !== L || F[81] !== g || F[82] !== ee
            ? ((x = () => {
                ;(D.current && g && k(L, "hosted_url", ee ? null : "invalid_url"), (D.current = !1))
              }),
              (F[80] = L),
              (F[81] = g),
              (F[82] = ee),
              (F[83] = x))
            : (x = F[83]),
          F[84] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = (e) => {
                ;((D.current = !0), B(e.target.value), O(null), Q.current && (Q.current.value = ""), X(!1))
              }),
              (F[84] = b))
            : (b = F[84]),
          F[85] !== p || F[86] !== f || F[87] !== x || F[88] !== H
            ? ((S = (0, a.jsxs)("label", {
                className: "flex flex-col gap-6 text-sm font-semibold",
                children: [
                  h,
                  (0, a.jsx)(j.pd, {
                    variant: "default",
                    name: "feed-url",
                    "aria-label": p,
                    placeholder: f,
                    type: "url",
                    value: H,
                    onBlur: x,
                    onChange: b,
                  }),
                ],
              })),
              (F[85] = p),
              (F[86] = f),
              (F[87] = x),
              (F[88] = H),
              (F[89] = S))
            : (S = F[89]),
          F[90] !== g || F[91] !== ee
            ? ((T =
                g &&
                !ee &&
                (0, a.jsx)("p", {
                  className: "text-danger",
                  role: "alert",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.https",
                    defaultMessage: "Hosted URL must use HTTPS",
                    description: "Rejects an invalid or non-HTTPS hosted feed URL",
                  }),
                })),
              (F[90] = g),
              (F[91] = ee),
              (F[92] = T))
            : (T = F[92]),
          F[93] === Symbol.for("react.memo_cache_sentinel")
            ? ((R = (0, a.jsx)("h4", {
                className: "text-xs font-semibold uppercase",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.frequency",
                  defaultMessage: "Run frequency",
                  description: "Frequency for fetching a hosted product feed",
                }),
              })),
              (F[93] = R))
            : (R = F[93]),
          F[94] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = (0, a.jsx)("p", {
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.frequencyHelp",
                  defaultMessage: "Choose whether this hosted URL should run once or on a recurring schedule.",
                  description: "Hosted URL scheduling instructions",
                }),
              })),
              (F[94] = P))
            : (P = F[94]),
          F[95] !== I
            ? ((U = I.formatMessage({
                id: "merchantSettings.frequency",
                defaultMessage: "Run frequency",
                description: "Frequency for fetching a hosted product feed",
              })),
              (F[95] = I),
              (F[96] = U))
            : (U = F[96]),
          F[97] !== ea
            ? ((q = (e) => {
                ;($(e), ea.reset())
              }),
              (F[97] = ea),
              (F[98] = q))
            : (q = F[98]))
        let eM = en || null != z
        ;(F[99] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, a.jsx)(u.A, {
              id: "merchantSettings.once",
              defaultMessage: "Once",
              description: "Submit the hosted feed immediately once",
            })),
            (F[99] = E))
          : (E = F[99]),
          F[100] !== eM ? ((et = { id: "once", disabled: eM, label: E }), (F[100] = eM), (F[101] = et)) : (et = F[101]))
        let eN = en || null != z
        ;(F[102] === Symbol.for("react.memo_cache_sentinel")
          ? ((er = (0, a.jsx)(u.A, {
              id: "merchantSettings.hourly",
              defaultMessage: "Hourly",
              description: "Schedule an hourly hosted feed fetch",
            })),
            (F[102] = er))
          : (er = F[102]),
          F[103] !== eN
            ? ((el = { id: "hourly", disabled: eN, label: er }), (F[103] = eN), (F[104] = el))
            : (el = F[104]))
        let eT = en || null != z
        ;(F[105] === Symbol.for("react.memo_cache_sentinel")
          ? ((eo = (0, a.jsx)(u.A, {
              id: "merchantSettings.daily",
              defaultMessage: "Daily",
              description: "Schedule a daily hosted feed fetch",
            })),
            (F[105] = eo))
          : (eo = F[105]),
          F[106] !== eT
            ? ((ed = { id: "daily", disabled: eT, label: eo }), (F[106] = eT), (F[107] = ed))
            : (ed = F[107]),
          F[108] !== et || F[109] !== el || F[110] !== ed
            ? ((ec = [et, el, ed]), (F[108] = et), (F[109] = el), (F[110] = ed), (F[111] = ec))
            : (ec = F[111]),
          F[112] !== V || F[113] !== U || F[114] !== q || F[115] !== ec
            ? ((eu = (0, a.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  R,
                  P,
                  (0, a.jsx)(eg.T, {
                    className: "gap-2",
                    size: "actionSm",
                    selectedColor: "segmentedSelected",
                    unselectedColor: "outlineCard",
                    ariaLabel: U,
                    selectedId: V,
                    onSelect: q,
                    options: ec,
                  }),
                ],
              })),
              (F[112] = V),
              (F[113] = U),
              (F[114] = q),
              (F[115] = ec),
              (F[116] = eu))
            : (eu = F[116]),
          F[117] === Symbol.for("react.memo_cache_sentinel")
            ? ((em = (0, a.jsx)(u.A, {
                id: "merchantSettings.httpHeadersTitle",
                defaultMessage: "Advanced: HTTP headers (optional)",
                description:
                  "Expandable section in merchant feed settings for optional HTTP headers required by the server hosting the feed",
              })),
              (F[117] = em))
            : (em = F[117]),
          F[118] === Symbol.for("react.memo_cache_sentinel")
            ? ((eh = (0, a.jsx)("p", {
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.httpHeadersHelp",
                  defaultMessage:
                    "Leave this blank for a public feed URL. If your feed provider requires headers for access, enter them here, for example Authorization: Bearer YOUR_TOKEN. These are HTTP request headers, not column names in your feed.",
                  description:
                    "Merchant feed settings help for optional authentication headers. Authorization: Bearer YOUR_TOKEN is an example, not a real credential; preserve that example literally.",
                }),
              })),
              (F[118] = eh))
            : (eh = F[118]),
          F[119] !== K
            ? ((ep = () => G([...K, { id: crypto.randomUUID(), name: "", value: "" }])), (F[119] = K), (F[120] = ep))
            : (ep = F[120]),
          F[121] === Symbol.for("react.memo_cache_sentinel")
            ? ((ef = (0, a.jsx)(u.A, {
                id: "merchantSettings.addHeader",
                defaultMessage: "Add header",
                description: "Adds an optional HTTP header for fetching a hosted feed",
              })),
              (F[121] = ef))
            : (ef = F[121]),
          F[122] !== ep
            ? ((ex = (0, a.jsx)("div", {
                children: (0, a.jsx)(y.$, { color: "outlineCard", size: "actionSm", onClick: ep, children: ef }),
              })),
              (F[122] = ep),
              (F[123] = ex))
            : (ex = F[123]),
          F[124] !== K || F[125] !== ea || F[126] !== es
            ? ((eb = K.map((e) =>
                (0, a.jsxs)(
                  "div",
                  {
                    className: "flex items-end gap-2",
                    children: [
                      (0, a.jsxs)("label", {
                        children: [
                          (0, a.jsx)(u.A, {
                            id: "merchantSettings.header",
                            defaultMessage: "Header",
                            description: "HTTP header name for fetching a hosted feed",
                          }),
                          (0, a.jsx)(j.pd, {
                            variant: "default",
                            name: `header-${e.id}`,
                            value: e.name,
                            onChange: (t) => G(K.map((s) => (s.id === e.id ? { ...s, name: t.target.value } : s))),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("label", {
                        children: [
                          (0, a.jsx)(u.A, {
                            id: "merchantSettings.headerValue",
                            defaultMessage: "Value",
                            description: "HTTP header value, potentially a secret, for fetching a hosted feed",
                          }),
                          (0, a.jsx)(j.pd, {
                            variant: "default",
                            name: `value-${e.id}`,
                            type: "password",
                            autoComplete: "off",
                            value: e.value,
                            onChange: (t) => G(K.map((s) => (s.id === e.id ? { ...s, value: t.target.value } : s))),
                          }),
                        ],
                      }),
                      (0, a.jsx)(y.$, {
                        color: "outlineCard",
                        size: "actionSm",
                        onClick: () => {
                          ;(G(K.filter((t) => t.id !== e.id)), es.reset(), ea.reset())
                        },
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.remove",
                          defaultMessage: "Remove",
                          description: "Removes a hosted feed HTTP header",
                        }),
                      }),
                    ],
                  },
                  e.id,
                ),
              )),
              (F[124] = K),
              (F[125] = ea),
              (F[126] = es),
              (F[127] = eb))
            : (eb = F[127]),
          F[128] !== ex || F[129] !== eb
            ? ((eS = (0, a.jsxs)(eA.J, {
                collapsible: !0,
                defaultOpen: !1,
                showDivider: !1,
                title: em,
                children: [eh, ex, eb],
              })),
              (F[128] = ex),
              (F[129] = eb),
              (F[130] = eS))
            : (eS = F[130]),
          F[131] !== J || F[132] !== en || F[133] !== V
            ? ((ev =
                "once" === V &&
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-1",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "relative flex items-center gap-2 text-sm",
                      children: [
                        (0, a.jsx)(ew.S, {
                          id: "allow-without-filename",
                          checked: J,
                          onCheckedChange: W,
                          disabled: en,
                        }),
                        (0, a.jsx)("label", {
                          htmlFor: "allow-without-filename",
                          children: (0, a.jsx)(u.A, {
                            id: "merchantSettings.allowFilename",
                            defaultMessage: "Allow URL without supported filename",
                            description:
                              "Allows hosted URLs whose path does not end in a supported compressed feed extension",
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className: "text-xs text-secondary",
                      children: (0, a.jsx)(u.A, {
                        id: "merchantSettings.allowFilenameHelp",
                        defaultMessage:
                          "Only applies to one-time runs and allows URLs without a supported file extension.",
                        description: "Explains when to allow a URL without a supported filename",
                      }),
                    }),
                  ],
                })),
              (F[131] = J),
              (F[132] = en),
              (F[133] = V),
              (F[134] = ev))
            : (ev = F[134]),
          F[135] !== eu || F[136] !== eS || F[137] !== ev
            ? ((ej = (0, a.jsxs)("div", { className: "flex flex-col gap-3", children: [eu, eS, ev] })),
              (F[135] = eu),
              (F[136] = eS),
              (F[137] = ev),
              (F[138] = ej))
            : (ej = F[138]),
          F[139] !== en || F[140] !== c || F[141] !== S || F[142] !== T || F[143] !== ej
            ? ((_ = (0, a.jsxs)("fieldset", {
                disabled: en,
                className: "flex flex-col gap-4",
                onChange: c,
                children: [S, T, ej],
              })),
              (F[139] = en),
              (F[140] = c),
              (F[141] = S),
              (F[142] = T),
              (F[143] = ej),
              (F[144] = _))
            : (_ = F[144]),
          (w = e_("hosted_url")),
          (F[29] = J),
          (F[30] = en),
          (F[31] = C),
          (F[32] = z),
          (F[33] = Z),
          (F[34] = V),
          (F[35] = K),
          (F[36] = I),
          (F[37] = L),
          (F[38] = ea),
          (F[39] = g),
          (F[40] = H),
          (F[41] = ee),
          (F[42] = es),
          (F[43] = ei),
          (F[44] = v),
          (F[45] = _),
          (F[46] = w),
          (F[47] = A),
          (F[48] = M),
          (F[49] = N))
      } else ((v = F[44]), (_ = F[45]), (w = F[46]), (A = F[47]), (M = F[48]), (N = F[49]))
      return (
        F[145] !== v || F[146] !== _ || F[147] !== w || F[148] !== N
          ? ((T = (0, a.jsxs)(v, { title: N, children: [_, w] })),
            (F[145] = v),
            (F[146] = _),
            (F[147] = w),
            (F[148] = N),
            (F[149] = T))
          : (T = F[149]),
        F[150] !== A || F[151] !== M || F[152] !== T
          ? ((R = (0, a.jsxs)("div", { className: A, children: [M, T] })),
            (F[150] = A),
            (F[151] = M),
            (F[152] = T),
            (F[153] = R))
          : (R = F[153]),
        R
      )
    }
    function eV(e) {
      return [e.name.trim(), e.value]
    }
    function e$(e) {
      return e.name.trim()
    }
    function eK() {
      let e,
        t,
        s = (0, n.c)(12),
        { accountId: i, userId: r } = (0, p.As)()
      if ((0, o._U)(_.JW, A.p)) {
        let e,
          t = `${r}:${i}`
        return (
          s[0] !== i || s[1] !== t || s[2] !== r
            ? ((e = (0, a.jsx)(eG, { accountId: i, userId: r }, t)), (s[0] = i), (s[1] = t), (s[2] = r), (s[3] = e))
            : (e = s[3]),
          e
        )
      }
      let l = `${r}:${i}`
      return (
        s[4] !== i || s[5] !== r
          ? ((e = (0, a.jsx)(eG, { accountId: i, userId: r })), (s[4] = i), (s[5] = r), (s[6] = e))
          : (e = s[6]),
        s[7] !== i || s[8] !== l || s[9] !== e || s[10] !== r
          ? ((t = (0, a.jsx)(F, { accountId: i, userId: r, children: e }, l)),
            (s[7] = i),
            (s[8] = l),
            (s[9] = e),
            (s[10] = r),
            (s[11] = t))
          : (t = s[11]),
        t
      )
    }
    function eG(e) {
      let t,
        s,
        l,
        o,
        h,
        p,
        f,
        g,
        _,
        A,
        M,
        N,
        T,
        k,
        P,
        F,
        C,
        I,
        q,
        E,
        L,
        D,
        z,
        O,
        H,
        B,
        V,
        $,
        K,
        G,
        J,
        W,
        Z,
        X,
        Q,
        Y,
        es,
        ea = (0, n.c)(127),
        { accountId: en, userId: ei } = e,
        er = (0, c.A)(),
        [el, ed] = (0, d.useState)("runs")
      ea[0] !== er
        ? ((t = er.formatMessage({
            id: "merchantSettings.recentRunsTab",
            defaultMessage: "Recent runs",
            description:
              "Tab and associated panel label in merchant Feed activity showing recent ingestion runs. Each row can expand to show its own processing details.",
          })),
          (ea[0] = er),
          (ea[1] = t))
        : (t = ea[1])
      let ec = t
      ea[2] !== er
        ? ((s = er.formatMessage({
            id: "merchantSettings.issuesTab",
            defaultMessage: "Issues",
            description: "Tab for feed issues",
          })),
          (ea[2] = er),
          (ea[3] = s))
        : (s = ea[3])
      let eu = s,
        [em, eh] = (0, m.ok)(),
        [ep, ef] = (0, d.useState)(""),
        [eg, ex] = (0, d.useState)("newest"),
        [eS, ev] = (0, d.useState)(0),
        [ej, e_] = (0, d.useState)(!1),
        ew = (0, i.jE)()
      ea[4] !== en || ea[5] !== ei
        ? ((l = ["merchant-feeds", ei, en]), (ea[4] = en), (ea[5] = ei), (ea[6] = l))
        : (l = ea[6])
      let eA = l
      ea[7] !== eA ? ((o = { queryKey: eA, queryFn: eX, staleTime: 3e4 }), (ea[7] = eA), (ea[8] = o)) : (o = ea[8])
      let {
          data: eM,
          isPending: eN,
          isError: eT,
          error: ek,
          errorUpdatedAt: eR,
          isFetchedAfterMount: eP,
          refetch: eF,
        } = (0, r.I)(o),
        eC = (0, d.useRef)(0)
      ;(ea[9] !== en || ea[10] !== ek || ea[11] !== eR || ea[12] !== eT || ea[13] !== eP || ea[14] !== ei
        ? ((h = () => {
            eT && eP && eR !== eC.current && ((eC.current = eR), R({ accountId: en, userId: ei }, "merchant_list", ek))
          }),
          (p = [en, ei, ek, eR, eT, eP]),
          (ea[9] = en),
          (ea[10] = ek),
          (ea[11] = eR),
          (ea[12] = eT),
          (ea[13] = eP),
          (ea[14] = ei),
          (ea[15] = h),
          (ea[16] = p))
        : ((h = ea[15]), (p = ea[16])),
        (0, d.useEffect)(h, p),
        ea[17] !== eM?.feeds || ea[18] !== em
          ? ((f = eM?.feeds.find((e) => e.feed_id === em.get("feed_id"))),
            (ea[17] = eM?.feeds),
            (ea[18] = em),
            (ea[19] = f))
          : (f = ea[19]))
      let eI = f
      if (
        ea[20] !== eM ||
        ea[21] !== ek ||
        ea[22] !== er ||
        ea[23] !== eT ||
        ea[24] !== eN ||
        ea[25] !== eS ||
        ea[26] !== eF ||
        ea[27] !== ep ||
        ea[28] !== eI?.feed_id ||
        ea[29] !== eh ||
        ea[30] !== eg
      ) {
        let e,
          t,
          s,
          n,
          i,
          r,
          l,
          o,
          d = eM?.feeds
            .filter((e) =>
              [e.merchant_name, e.merchant_slug, e.feed_id].some((e) =>
                e.toLowerCase().includes(ep.trim().toLowerCase()),
              ),
            )
            .sort((e, t) =>
              "name" === eg || "name-desc" === eg
                ? e.merchant_name.localeCompare(t.merchant_name) * ("name" === eg ? 1 : -1)
                : "id" === eg || "id-desc" === eg
                  ? e.feed_id.localeCompare(t.feed_id) * ("id" === eg ? 1 : -1)
                  : (Date.parse(e.created_at) - Date.parse(t.created_at)) * ("oldest" === eg ? 1 : -1),
            ),
          c = Math.max(1, Math.ceil((d?.length ?? 0) / 10)),
          m = Math.min(eS, c - 1)
        ;(ea[42] !== eh
          ? ((e = function (e) {
              eh((t) => {
                let s = new URLSearchParams(t)
                return (null == e ? s.delete("feed_id") : s.set("feed_id", e), s)
              })
            }),
            (ea[42] = eh),
            (ea[43] = e))
          : (e = ea[43]),
          (_ = e),
          (F = "h-full overflow-y-auto bg-surface px-6 py-8 text-default"),
          (T = "mx-auto flex w-full max-w-5xl flex-col gap-5"),
          ea[44] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)("h1", {
                className: "text-2xl font-semibold select-none",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.title",
                  defaultMessage: "Product feed",
                  description: "Page title for merchant product feed settings",
                }),
              })),
              (ea[44] = t))
            : (t = ea[44]),
          ea[45] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = (0, a.jsxs)("header", {
                className: "flex flex-col gap-2",
                children: [
                  t,
                  (0, a.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.feedSubmissionSubtitle",
                      defaultMessage: "Submit a product feed to keep your catalog up to date",
                      description:
                        "Short subtitle at the top of Merchant settings, inviting merchants to submit product feeds to update their catalogs. Compression requirements depend on the upload method and file format.",
                    }),
                  }),
                ],
              })),
              (ea[45] = k))
            : (k = ea[45]),
          ea[46] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsx)(u.A, {
                id: "merchantSettings.feedFormats.title",
                defaultMessage: "Supported formats",
                description:
                  "Heading above the upload-method format guidance in Product feed settings. Helps merchants choose a supported feed file format. Short heading.",
              })),
              (ea[46] = s))
            : (s = ea[46]),
          ea[47] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)("li", {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.feedFormats.manual",
                  defaultMessage: "<method>Manual upload</method>: .jsonl.gz or .csv.gz",
                  description:
                    "Format row in the Product feed settings help panel for merchants uploading a file manually. The method tag emphasizes the upload method. Keep the two supported file extensions literal.",
                  values: { method: eZ },
                }),
              })),
              (ea[47] = n))
            : (n = ea[47]),
          ea[48] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, a.jsx)("li", {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.feedFormats.hosted",
                  defaultMessage: "<method>Hosted URL</method>: gzipped JSONL; CSV, TSV or Parquet (gzip optional)",
                  description:
                    "Format row in the Product feed settings help panel for merchants providing a hosted URL. JSONL requires gzip; CSV, TSV and Parquet can be uncompressed or gzip-compressed. The method tag emphasizes the upload method. Keep JSONL, CSV, TSV, Parquet and gzip literal.",
                  values: { method: eW },
                }),
              })),
              (ea[48] = i))
            : (i = ea[48]),
          ea[49] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, a.jsxs)("ul", {
                className: "flex flex-col gap-1",
                children: [
                  n,
                  i,
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.feedFormats.sftp",
                      defaultMessage: "<method>SFTP</method>: gzipped JSONL; CSV or TSV (gzip optional); Parquet",
                      description:
                        "Format row in the Product feed settings help panel for merchants sending files over SFTP. JSONL requires gzip; CSV and TSV can be uncompressed or gzip-compressed; externally gzip-compressed Parquet is not supported. The method tag emphasizes the upload method. Keep SFTP, JSONL, CSV, TSV, Parquet and gzip literal.",
                      values: { method: eJ },
                    }),
                  }),
                ],
              })),
              (ea[49] = r))
            : (r = ea[49]),
          ea[50] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [
                  (0, a.jsx)("p", {
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.feedFormats.parquet",
                      defaultMessage: "Parquet with internal ZSTD compression keeps the .parquet extension",
                      description:
                        "File naming note in the Product feed settings help panel for merchants preparing Parquet feeds. ZSTD compression inside a Parquet file does not change its filename extension. Keep Parquet, ZSTD and .parquet literal.",
                    }),
                  }),
                  (0, a.jsx)("p", {
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.feedFormats.sftpSize",
                      defaultMessage:
                        "For SFTP, we recommend splitting large feeds into files of up to 500,000 records and under 500 MB each",
                      description:
                        "Size recommendation in the Product feed settings help panel for merchants splitting large SFTP feeds. These are approximate per-file recommendations, not enforced limits. Keep SFTP and MB literal.",
                    }),
                  }),
                ],
              })),
              (ea[50] = l))
            : (l = ea[50]),
          ea[51] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (0, a.jsx)(b.G, {
                href: "https://developers.openai.com/commerce/specs/file-upload/products",
                initiator: "open_in_browser_bridge",
                underline: "always",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.feedFormats.specifications",
                  defaultMessage: "Feed specifications",
                  description:
                    "Link in the Product feed settings help panel to the product feed schema, required fields and examples. Keep this label concise.",
                }),
              })),
              (ea[51] = o))
            : (o = ea[51]),
          ea[52] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = (0, a.jsx)(x.l, {
                variant: "callout",
                layout: "vertical",
                title: s,
                content: (0, a.jsxs)("div", {
                  className: "flex flex-col gap-3",
                  children: [
                    r,
                    l,
                    (0, a.jsxs)("div", {
                      className: "flex flex-wrap gap-3",
                      children: [
                        o,
                        (0, a.jsx)(b.G, {
                          href: "https://developers.openai.com/commerce/specs/file-upload/overview",
                          initiator: "open_in_browser_bridge",
                          underline: "always",
                          children: (0, a.jsx)(u.A, {
                            id: "merchantSettings.feedFormats.uploadGuide",
                            defaultMessage: "Upload guide",
                            description:
                              "Link in the Product feed settings help panel to the file delivery, naming and update instructions. Keep this label concise.",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              })),
              (ea[52] = P))
            : (P = ea[52]),
          (g = ey),
          ea[53] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = (0, a.jsx)(u.A, {
                id: "merchantSettings.merchants",
                defaultMessage: "Merchants",
                description: "Merchant list section heading",
              })),
              (I = (0, a.jsx)(u.A, {
                id: "merchantSettings.merchantsDescription",
                defaultMessage: "Add a merchant, then select it to configure SFTP access and feed uploads below.",
                description: "Instructions for choosing a merchant",
              })),
              (ea[53] = C),
              (ea[54] = I))
            : ((C = ea[53]), (I = ea[54])),
          ea[55] !== eN
            ? ((A =
                eN &&
                (0, a.jsx)("p", {
                  role: "status",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.loading",
                    defaultMessage: "Loading merchants…",
                    description: "Merchant list loading status",
                  }),
                })),
              (ea[55] = eN),
              (ea[56] = A))
            : (A = ea[56]),
          ea[57] !== ek || ea[58] !== eT || ea[59] !== eF
            ? ((M =
                eT &&
                (0, a.jsxs)("div", {
                  className: "flex flex-col items-start gap-3 text-sm text-danger",
                  role: "alert",
                  children: [
                    ek instanceof w.fk && 403 === ek.status
                      ? (0, a.jsx)(u.A, {
                          id: "merchantSettings.workspaceAccessError",
                          defaultMessage:
                            "Merchant settings are unavailable in this workspace. Switch to an eligible workspace using your profile menu, then try again.",
                          description:
                            "Shown when the merchant list API denies workspace access; directs the user to the existing workspace switcher without changing eligibility",
                        })
                      : (0, a.jsx)(u.A, {
                          id: "merchantSettings.loadError",
                          defaultMessage: "Couldn’t load merchants",
                          description: "Error loading the merchant list",
                        }),
                    (0, a.jsx)(y.$, {
                      color: "outlineCard",
                      size: "actionSm",
                      onClick: () => void eF(),
                      children: (0, a.jsx)(u.A, {
                        id: "merchantSettings.retry",
                        defaultMessage: "Try again",
                        description: "Retries a failed merchant request",
                      }),
                    }),
                  ],
                })),
              (ea[57] = ek),
              (ea[58] = eT),
              (ea[59] = eF),
              (ea[60] = M))
            : (M = ea[60]),
          (N =
            !eN &&
            !eT &&
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        (0, a.jsx)("h3", {
                          className: "text-sm font-medium",
                          children: (0, a.jsx)(u.A, {
                            id: "merchantSettings.saved",
                            defaultMessage: "Saved merchants",
                            description: "Saved merchant list heading",
                          }),
                        }),
                        null != d &&
                          d.length > 0 &&
                          (0, a.jsx)("p", {
                            className: "mt-1 text-xs text-secondary",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.resultRange",
                              defaultMessage:
                                "Showing {first}-{last} of {count, plural, one {# merchant} other {# merchants}}",
                              description: "Visible range of filtered merchants",
                              values: { first: 10 * m + 1, last: Math.min((m + 1) * 10, d.length), count: d.length },
                            }),
                          }),
                      ],
                    }),
                    null != eM &&
                      eM.feeds.length > 0 &&
                      (0, a.jsxs)("div", {
                        className: "grid min-w-0 gap-2 sm:w-2/3 sm:grid-cols-[minmax(0,1fr)_12rem]",
                        children: [
                          (0, a.jsxs)("label", {
                            className: "flex min-w-0 flex-col gap-1",
                            children: [
                              (0, a.jsx)("span", {
                                className: "text-xs font-medium",
                                children: (0, a.jsx)(u.A, {
                                  id: "merchantSettings.searchLabel",
                                  defaultMessage: "Search merchants",
                                  description: "Merchant search label",
                                }),
                              }),
                              (0, a.jsx)(j.pd, {
                                variant: "default",
                                leadingControl: (0, a.jsx)(S.QmT, { className: "text-tertiary" }),
                                type: "search",
                                name: "merchant-search",
                                value: ep,
                                onChange: (e) => {
                                  ;(ef(e.target.value), ev(0))
                                },
                                placeholder: er.formatMessage({
                                  id: "merchantSettings.search",
                                  defaultMessage: "Search by merchant or feed ID",
                                  description: "Search field for saved merchants",
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [
                              (0, a.jsx)("span", {
                                className: "text-xs font-medium",
                                children: (0, a.jsx)(u.A, {
                                  id: "merchantSettings.sort",
                                  defaultMessage: "Sort",
                                  description: "Sort order for saved merchants",
                                }),
                              }),
                              (0, a.jsx)(ee, {
                                label: er.formatMessage({
                                  id: "merchantSettings.sort",
                                  defaultMessage: "Sort",
                                  description: "Sort order for saved merchants",
                                }),
                                value: eg,
                                onChange: (e) => {
                                  ;(ex(e), ev(0))
                                },
                                options: [
                                  {
                                    value: "newest",
                                    label: (0, a.jsx)(u.A, {
                                      id: "merchantSettings.newest",
                                      defaultMessage: "Newest created",
                                      description: "Sort newest merchants first",
                                    }),
                                  },
                                  {
                                    value: "oldest",
                                    label: (0, a.jsx)(u.A, {
                                      id: "merchantSettings.oldest",
                                      defaultMessage: "Oldest created",
                                      description: "Sort oldest merchants first",
                                    }),
                                  },
                                  {
                                    value: "name",
                                    label: (0, a.jsx)(u.A, {
                                      id: "merchantSettings.nameAsc",
                                      defaultMessage: "Merchant A–Z",
                                      description: "Sort merchants by name ascending",
                                    }),
                                  },
                                  {
                                    value: "name-desc",
                                    label: (0, a.jsx)(u.A, {
                                      id: "merchantSettings.nameDesc",
                                      defaultMessage: "Merchant Z–A",
                                      description: "Sort merchants by name descending",
                                    }),
                                  },
                                  {
                                    value: "id",
                                    label: (0, a.jsx)(u.A, {
                                      id: "merchantSettings.idAsc",
                                      defaultMessage: "Feed ID A–Z",
                                      description: "Sort feed IDs ascending",
                                    }),
                                  },
                                  {
                                    value: "id-desc",
                                    label: (0, a.jsx)(u.A, {
                                      id: "merchantSettings.idDesc",
                                      defaultMessage: "Feed ID Z–A",
                                      description: "Sort feed IDs descending",
                                    }),
                                  },
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
                d?.length === 0 &&
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col gap-1 rounded-md border border-subtle bg-(--color-background-secondary-soft)/40 px-3 py-3 text-sm",
                    children: [
                      (0, a.jsx)("p", {
                        className: "font-medium",
                        children:
                          eM?.feeds.length === 0
                            ? (0, a.jsx)(u.A, {
                                id: "merchantSettings.noMerchants",
                                defaultMessage: "No merchants yet",
                                description: "Empty merchant list heading",
                              })
                            : (0, a.jsx)(u.A, {
                                id: "merchantSettings.noSearchResults",
                                defaultMessage: "No merchants match your search",
                                description: "No saved merchants match the search",
                              }),
                      }),
                      (0, a.jsx)("p", {
                        className: "text-xs text-secondary",
                        children:
                          eM?.feeds.length === 0
                            ? (0, a.jsx)(u.A, {
                                id: "merchantSettings.noMerchantsHelpWithoutSftp",
                                defaultMessage:
                                  "Add your first merchant to start uploading feeds. You can set up SFTP separately if needed.",
                                description: "Explains how to create the first merchant",
                              })
                            : (0, a.jsx)(u.A, {
                                id: "merchantSettings.noSearchResultsHelp",
                                defaultMessage: "Try a merchant name or feed ID",
                                description: "Suggestion when merchant search returns no results",
                              }),
                      }),
                    ],
                  }),
                null != d &&
                  d.length > 0 &&
                  (0, a.jsxs)("div", {
                    className: "overflow-hidden rounded-lg border border-subtle",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "hidden grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)_10rem_auto] gap-3 bg-(--color-background-secondary-soft)/40 px-3 py-2 text-xs font-medium text-secondary sm:grid",
                        children: [
                          (0, a.jsx)("span", {
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.merchantColumn",
                              defaultMessage: "Merchant",
                              description: "Merchant table name column",
                            }),
                          }),
                          (0, a.jsx)("span", {
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.feedColumn",
                              defaultMessage: "Feed ID",
                              description: "Merchant table feed identifier column",
                            }),
                          }),
                          (0, a.jsx)("span", {
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.createdColumn",
                              defaultMessage: "Created",
                              description: "Merchant table creation date column",
                            }),
                          }),
                          (0, a.jsx)("span", {
                            className: "text-end",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.actionColumn",
                              defaultMessage: "Action",
                              description: "Merchant table action column",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("ul", {
                        className: "divide-y divide-border-subtle",
                        children: d
                          ?.slice(10 * m, (m + 1) * 10)
                          .map((e) =>
                            (0, a.jsxs)(
                              "li",
                              {
                                className:
                                  "grid gap-3 px-3 py-3 text-sm sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)_10rem_auto] sm:items-center",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "min-w-0",
                                    children: (0, a.jsx)("p", {
                                      className: "truncate font-medium",
                                      children: e.merchant_name,
                                    }),
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "font-mono text-xs break-all text-secondary",
                                    children: e.feed_id,
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-xs text-secondary",
                                    children: er.formatDate(e.created_at, { dateStyle: "medium", timeStyle: "short" }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "flex sm:justify-end",
                                    children: (0, a.jsx)(y.$, {
                                      size: "actionSm",
                                      color: "ghostActive",
                                      "aria-pressed": eI?.feed_id === e.feed_id,
                                      onClick: () => _(eI?.feed_id === e.feed_id ? null : e.feed_id),
                                      children:
                                        eI?.feed_id === e.feed_id
                                          ? (0, a.jsx)(u.A, {
                                              id: "merchantSettings.selected",
                                              defaultMessage: "Selected",
                                              description: "Selected merchant; click to clear selection",
                                            })
                                          : (0, a.jsx)(u.A, {
                                              id: "merchantSettings.select",
                                              defaultMessage: "Select",
                                              description: "Selects a merchant to manage its feed",
                                            }),
                                    }),
                                  }),
                                ],
                              },
                              e.feed_id,
                            ),
                          ),
                      }),
                    ],
                  }),
                c > 1 &&
                  (0, a.jsxs)("div", {
                    className: "flex flex-wrap items-center justify-end gap-3 text-xs",
                    children: [
                      (0, a.jsx)(y.$, {
                        color: "outlineCard",
                        size: "actionSm",
                        disabled: 0 === m,
                        onClick: () => ev(m - 1),
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.previous",
                          defaultMessage: "Previous",
                          description: "Previous merchant results page",
                        }),
                      }),
                      (0, a.jsx)(u.A, {
                        id: "merchantSettings.page",
                        defaultMessage: "Page {page} of {count}",
                        description: "Merchant pagination status",
                        values: { page: m + 1, count: c },
                      }),
                      (0, a.jsx)(y.$, {
                        color: "outlineCard",
                        size: "actionSm",
                        disabled: m + 1 >= c,
                        onClick: () => ev(m + 1),
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.next",
                          defaultMessage: "Next",
                          description: "Next merchant results page",
                        }),
                      }),
                    ],
                  }),
              ],
            })),
          (ea[20] = eM),
          (ea[21] = ek),
          (ea[22] = er),
          (ea[23] = eT),
          (ea[24] = eN),
          (ea[25] = eS),
          (ea[26] = eF),
          (ea[27] = ep),
          (ea[28] = eI?.feed_id),
          (ea[29] = eh),
          (ea[30] = eg),
          (ea[31] = g),
          (ea[32] = _),
          (ea[33] = A),
          (ea[34] = M),
          (ea[35] = N),
          (ea[36] = T),
          (ea[37] = k),
          (ea[38] = P),
          (ea[39] = F),
          (ea[40] = C),
          (ea[41] = I))
      } else
        ((g = ea[31]),
          (_ = ea[32]),
          (A = ea[33]),
          (M = ea[34]),
          (N = ea[35]),
          (T = ea[36]),
          (k = ea[37]),
          (P = ea[38]),
          (F = ea[39]),
          (C = ea[40]),
          (I = ea[41]))
      ;(ea[61] !== ej || ea[62] !== eA || ea[63] !== ew || ea[64] !== _
        ? ((q =
            ej &&
            (0, a.jsx)(eQ, {
              onClose: () => e_(!1),
              onCreated: async (e) => {
                ;(ew.setQueryData(eA, (t) => ({ feeds: [...(t?.feeds ?? []), e] })),
                  _(e.feed_id),
                  e_(!1),
                  await ew.invalidateQueries({ queryKey: eA }))
              },
            })),
          (ea[61] = ej),
          (ea[62] = eA),
          (ea[63] = ew),
          (ea[64] = _),
          (ea[65] = q))
        : (q = ea[65]),
        ea[66] !== ej
          ? ((E =
              !ej &&
              (0, a.jsx)("div", {
                children: (0, a.jsx)(U, {
                  size: "dialog",
                  onClick: () => e_(!0),
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.add",
                    defaultMessage: "Add merchant",
                    description: "Opens the merchant creation form",
                  }),
                }),
              })),
            (ea[66] = ej),
            (ea[67] = E))
          : (E = ea[67]),
        ea[68] !== g ||
        ea[69] !== A ||
        ea[70] !== M ||
        ea[71] !== N ||
        ea[72] !== q ||
        ea[73] !== E ||
        ea[74] !== C ||
        ea[75] !== I
          ? ((L = (0, a.jsxs)(g, { title: C, description: I, children: [A, M, N, q, E] })),
            (ea[68] = g),
            (ea[69] = A),
            (ea[70] = M),
            (ea[71] = N),
            (ea[72] = q),
            (ea[73] = E),
            (ea[74] = C),
            (ea[75] = I),
            (ea[76] = L))
          : (L = ea[76]),
        ea[77] !== eT || ea[78] !== eN || ea[79] !== em || ea[80] !== eI
          ? ((D =
              !eN &&
              !eT &&
              em.has("feed_id") &&
              !eI &&
              (0, a.jsx)("p", {
                role: "alert",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.unavailableMerchant",
                  defaultMessage:
                    "This merchant is unavailable in the current workspace. Select a merchant from the list.",
                  description: "A bookmarked feed is not in the current workspace's merchant list",
                }),
              })),
            (ea[77] = eT),
            (ea[78] = eN),
            (ea[79] = em),
            (ea[80] = eI),
            (ea[81] = D))
          : (D = ea[81]))
      let eU = eI?.feed_id ?? "unselected",
        eq = eI?.feed_id ?? null,
        eE = eI?.sftp_created_at != null
      ea[82] !== eq || ea[83] !== eE
        ? ((z = (0, a.jsx)(eb, { feedId: eq, configured: eE })), (ea[82] = eq), (ea[83] = eE), (ea[84] = z))
        : (z = ea[84])
      let eL = eI?.feed_id ?? null
      ;(ea[85] !== eL ? ((O = (0, a.jsx)(eB, { feedId: eL })), (ea[85] = eL), (ea[86] = O)) : (O = ea[86]),
        ea[87] !== eU || ea[88] !== z || ea[89] !== O
          ? ((H = (0, a.jsxs)(
              "div",
              {
                className: "grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start",
                children: [z, O],
              },
              eU,
            )),
            (ea[87] = eU),
            (ea[88] = z),
            (ea[89] = O),
            (ea[90] = H))
          : (H = ea[90]),
        ea[91] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, a.jsx)(u.A, {
              id: "merchantSettings.activity",
              defaultMessage: "Feed activity",
              description: "Feed processing and issues section heading",
            })),
            (V = (0, a.jsx)(u.A, {
              id: "merchantSettings.activityDescription",
              defaultMessage: "Track processing progress, review results, and resolve feed issues.",
              description: "Description of feed activity",
            })),
            (ea[91] = B),
            (ea[92] = V))
          : ((B = ea[91]), (V = ea[92])),
        ea[93] !== er
          ? (($ = er.formatMessage({
              id: "merchantSettings.activityNavigation",
              defaultMessage: "Feed activity",
              description: "Feed activity navigation",
            })),
            (ea[93] = er),
            (ea[94] = $))
          : ($ = ea[94]),
        ea[95] !== ec
          ? ((K = { key: "runs", name: ec, panelId: "merchant-feed-runs-panel" }), (ea[95] = ec), (ea[96] = K))
          : (K = ea[96]),
        ea[97] !== eu
          ? ((G = { key: "issues", name: eu, panelId: "merchant-feed-issues-panel" }), (ea[97] = eu), (ea[98] = G))
          : (G = ea[98]),
        ea[99] !== K || ea[100] !== G ? ((J = [K, G]), (ea[99] = K), (ea[100] = G), (ea[101] = J)) : (J = ea[101]),
        ea[102] !== el || ea[103] !== $ || ea[104] !== J
          ? ((W = (0, a.jsx)(v.t, { variant: "browse", ariaLabel: $, tabs: J, selectedKey: el, onSelect: ed })),
            (ea[102] = el),
            (ea[103] = $),
            (ea[104] = J),
            (ea[105] = W))
          : (W = ea[105]))
      let eD = "runs" === el ? "merchant-feed-runs-panel" : "merchant-feed-issues-panel",
        ez = "runs" === el ? "merchant-feed-runs-panel-tab" : "merchant-feed-issues-panel-tab"
      return (
        ea[106] !== el || ea[107] !== eI?.feed_id
          ? ((Z =
              "runs" === el
                ? (0, a.jsx)(eo, { feedId: eI?.feed_id ?? null }, eI?.feed_id ?? "unselected")
                : (0, a.jsx)(et, { feedId: eI?.feed_id ?? null }, eI?.feed_id ?? "unselected")),
            (ea[106] = el),
            (ea[107] = eI?.feed_id),
            (ea[108] = Z))
          : (Z = ea[108]),
        ea[109] !== eD || ea[110] !== ez || ea[111] !== Z
          ? ((X = (0, a.jsx)("div", {
              id: eD,
              role: "tabpanel",
              "aria-labelledby": ez,
              className: "pt-4",
              children: Z,
            })),
            (ea[109] = eD),
            (ea[110] = ez),
            (ea[111] = Z),
            (ea[112] = X))
          : (X = ea[112]),
        ea[113] !== W || ea[114] !== X
          ? ((Q = (0, a.jsxs)(ey, { activity: !0, title: B, description: V, children: [W, X] })),
            (ea[113] = W),
            (ea[114] = X),
            (ea[115] = Q))
          : (Q = ea[115]),
        ea[116] !== T ||
        ea[117] !== k ||
        ea[118] !== P ||
        ea[119] !== L ||
        ea[120] !== D ||
        ea[121] !== H ||
        ea[122] !== Q
          ? ((Y = (0, a.jsxs)("div", { className: T, children: [k, P, L, D, H, Q] })),
            (ea[116] = T),
            (ea[117] = k),
            (ea[118] = P),
            (ea[119] = L),
            (ea[120] = D),
            (ea[121] = H),
            (ea[122] = Q),
            (ea[123] = Y))
          : (Y = ea[123]),
        ea[124] !== F || ea[125] !== Y
          ? ((es = (0, a.jsx)("div", { className: F, children: Y })), (ea[124] = F), (ea[125] = Y), (ea[126] = es))
          : (es = ea[126]),
        es
      )
    }
    function eJ(e) {
      return (0, a.jsx)("strong", { className: "font-medium", children: e }, "method")
    }
    function eW(e) {
      return (0, a.jsx)("strong", { className: "font-medium", children: e }, "method")
    }
    function eZ(e) {
      return (0, a.jsx)("strong", { className: "font-medium", children: e }, "method")
    }
    function eX(e) {
      let { signal: t } = e
      return f.Request.safeGet("/shopping/feeds", { signal: t, expectedErrorStatuses: [403] })
    }
    function eQ(e) {
      let t,
        s,
        i,
        r,
        o,
        m,
        h,
        x,
        b,
        S,
        v,
        _,
        A,
        M,
        N,
        T,
        P,
        F,
        C,
        I,
        q,
        E,
        L,
        D,
        z,
        O,
        H,
        B,
        V,
        $,
        K,
        G,
        J,
        W = (0, n.c)(84),
        { onCreated: Z, onClose: X } = e,
        Q = (0, c.A)(),
        { accountId: Y, userId: ee } = (0, p.As)(),
        et = (0, d.useRef)(!1),
        [es, ea] = (0, d.useState)(""),
        [en, ei] = (0, d.useState)("US"),
        [er, el] = (0, d.useState)(""),
        eo = en.split(/[\s,]+/).filter(Boolean),
        ed = eo.filter(e2),
        ec = ed.length > 0 ? "country_invalid" : null,
        eu = 0 === eo.length ? "country_required" : ec,
        em = null != eu
      W[0] !== em || W[1] !== es ? ((t = "" !== es.trim() && !em), (W[0] = em), (W[1] = es), (W[2] = t)) : (t = W[2])
      let eh = t,
        {
          mutate: ep,
          isPending: ef,
          isError: eg,
          error: ex,
          reset: ey,
        } = (0, l.n)({
          mutationFn: () =>
            f.Request.safePost("/shopping/feeds", {
              requestBody: {
                merchant_name: es.trim(),
                supported_countries: eo.map(e1),
                supported_currencies: er
                  .split(/[\s,]+/)
                  .filter(Boolean)
                  .map(e0),
              },
            }),
        })
      ;(W[3] !== ey ? ((s = () => ey()), (W[3] = ey), (W[4] = s)) : (s = W[4]),
        W[5] !== Y || W[6] !== eh || W[7] !== ep || W[8] !== Z || W[9] !== ee
          ? ((i = (e) => {
              ;(e.preventDefault(),
                eh &&
                  ep(void 0, {
                    onSuccess: (e) => void Z(e),
                    onError: (e) => R({ accountId: Y, userId: ee }, "merchant_create", e),
                  }))
            }),
            (W[5] = Y),
            (W[6] = eh),
            (W[7] = ep),
            (W[8] = Z),
            (W[9] = ee),
            (W[10] = i))
          : (i = W[10]),
        W[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)("h3", {
              className: "text-sm font-medium",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.newMerchant",
                defaultMessage: "Add merchant",
                description: "New merchant form heading",
              }),
            })),
            (W[11] = r))
          : (r = W[11]),
        W[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(u.A, {
              id: "merchantSettings.hideAdd",
              defaultMessage: "Hide",
              description: "Closes the merchant creation form",
            })),
            (W[12] = o))
          : (o = W[12]),
        W[13] !== ef || W[14] !== X
          ? ((m = (0, a.jsxs)("div", {
              className: "flex items-center justify-between gap-3",
              children: [
                r,
                (0, a.jsx)(y.$, { color: "ghostActive", size: "actionSm", disabled: ef, onClick: X, children: o }),
              ],
            })),
            (W[13] = ef),
            (W[14] = X),
            (W[15] = m))
          : (m = W[15]),
        W[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)(u.A, {
              id: "merchantSettings.requiredName",
              defaultMessage: "Merchant name *",
              description: "Name input for a new merchant; the asterisk indicates a required field",
            })),
            (W[16] = h))
          : (h = W[16]),
        W[17] !== Q
          ? ((x = Q.formatMessage({
              id: "merchantSettings.namePlaceholder",
              defaultMessage: "Acme Hardware",
              description: "Example merchant name",
            })),
            (W[17] = Q),
            (W[18] = x))
          : (x = W[18]),
        W[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (e) => ea(e.target.value)), (W[19] = b))
          : (b = W[19]),
        W[20] !== es || W[21] !== x
          ? ((S = (0, a.jsxs)("label", {
              className: "flex flex-col gap-3 text-sm font-medium",
              children: [
                h,
                (0, a.jsx)(j.pd, {
                  variant: "default",
                  name: "merchant-name",
                  placeholder: x,
                  required: !0,
                  value: es,
                  onChange: b,
                }),
              ],
            })),
            (W[20] = es),
            (W[21] = x),
            (W[22] = S))
          : (S = W[22]),
        W[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, a.jsx)("h4", {
              className: "text-sm font-semibold",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.feedTargets",
                defaultMessage: "Feed targets",
                description: "Supported markets section heading for a merchant product feed",
              }),
            })),
            (W[23] = v))
          : (v = W[23]),
        W[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, a.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.feedMarketsHelp",
                defaultMessage: "Set the countries and currencies this feed can publish",
                description:
                  "Helper text in the merchant creation form explaining the target countries and supported currencies for a merchant product feed",
              }),
            })),
            (W[24] = _))
          : (_ = W[24]),
        W[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, a.jsx)(u.A, {
              id: "merchantSettings.countries",
              defaultMessage: "Target countries",
              description: "Comma-separated country codes for a feed",
            })),
            (W[25] = A))
          : (A = W[25]),
        W[26] !== Q
          ? ((M = Q.formatMessage({
              id: "merchantSettings.countriesPlaceholder",
              defaultMessage: "US, CA, MX",
              description: "Example target country codes",
            })),
            (W[26] = Q),
            (W[27] = M))
          : (M = W[27]),
        W[28] !== Y || W[29] !== eu || W[30] !== ee
          ? ((N = () => {
              et.current && (k({ accountId: Y, userId: ee }, "merchant_country", eu), (et.current = !1))
            }),
            (W[28] = Y),
            (W[29] = eu),
            (W[30] = ee),
            (W[31] = N))
          : (N = W[31]),
        W[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (e) => {
              ;((et.current = !0), ei(e.target.value))
            }),
            (W[32] = T))
          : (T = W[32]),
        W[33] !== en || W[34] !== em || W[35] !== M || W[36] !== N
          ? ((P = (0, a.jsx)(j.pd, {
              variant: "default",
              name: "countries",
              "aria-invalid": em,
              "aria-describedby": "merchant-country-help",
              placeholder: M,
              required: !0,
              value: en,
              onBlur: N,
              onChange: T,
            })),
            (W[33] = en),
            (W[34] = em),
            (W[35] = M),
            (W[36] = N),
            (W[37] = P))
          : (P = W[37]))
      let eb = em ? "text-xs font-normal text-danger" : "text-xs font-normal text-secondary",
        eS =
          0 === eo.length &&
          (0, a.jsx)(u.A, {
            id: "merchantSettings.countriesRequired",
            defaultMessage: "Enter at least one target country.",
            description: "Validation error shown when the target country list for a merchant product feed is empty.",
          }),
        ev =
          ed.length > 0 &&
          (0, a.jsx)(u.A, {
            id: "merchantSettings.countriesInvalid",
            defaultMessage:
              "Check {codes}. Enter a two-letter ISO country code for each market.{includesUK, select, yes { Use GB for the United Kingdom.} other {}}",
            description:
              "Error under the target countries field for a merchant feed. The codes placeholder lists invalid entries. Keep the literal ISO country code GB when suggesting a replacement for UK.",
            values: { codes: Q.formatList(ed), includesUK: ed.some(eY) ? "yes" : "no" },
          })
      ;(W[38] !== em
        ? ((F =
            !em &&
            (0, a.jsx)(u.A, {
              id: "merchantSettings.countriesHelp",
              defaultMessage: "Use comma-separated two-letter country codes",
              description: "Target country input format",
            })),
          (W[38] = em),
          (W[39] = F))
        : (F = W[39]),
        W[40] !== eb || W[41] !== eS || W[42] !== ev || W[43] !== F
          ? ((C = (0, a.jsxs)("span", { id: "merchant-country-help", className: eb, children: [eS, ev, F] })),
            (W[40] = eb),
            (W[41] = eS),
            (W[42] = ev),
            (W[43] = F),
            (W[44] = C))
          : (C = W[44]),
        W[45] !== A || W[46] !== P || W[47] !== C
          ? ((I = (0, a.jsxs)("label", { className: "flex flex-col gap-1 text-sm font-medium", children: [A, P, C] })),
            (W[45] = A),
            (W[46] = P),
            (W[47] = C),
            (W[48] = I))
          : (I = W[48]),
        W[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = (0, a.jsx)(u.A, {
              id: "merchantSettings.currencies",
              defaultMessage: "Supported currencies",
              description: "Optional comma-separated currency codes for a feed",
            })),
            (W[49] = q))
          : (q = W[49]),
        W[50] !== Q
          ? ((E = Q.formatMessage({
              id: "merchantSettings.currenciesPlaceholder",
              defaultMessage: "USD, CAD, MXN",
              description: "Example supported currency codes",
            })),
            (W[50] = Q),
            (W[51] = E))
          : (E = W[51]),
        W[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (e) => el(e.target.value)), (W[52] = L))
          : (L = W[52]),
        W[53] !== er || W[54] !== E
          ? ((D = (0, a.jsx)(j.pd, { variant: "default", name: "currencies", placeholder: E, value: er, onChange: L })),
            (W[53] = er),
            (W[54] = E),
            (W[55] = D))
          : (D = W[55]),
        W[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = (0, a.jsx)("span", {
              className: "text-xs font-normal text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.currenciesHelp",
                defaultMessage: "Use comma-separated three-letter currency codes",
                description: "Supported currency input format",
              }),
            })),
            (W[56] = z))
          : (z = W[56]),
        W[57] !== D
          ? ((O = (0, a.jsxs)("label", { className: "flex flex-col gap-1 text-sm font-medium", children: [q, D, z] })),
            (W[57] = D),
            (W[58] = O))
          : (O = W[58]),
        W[59] !== I || W[60] !== O
          ? ((H = (0, a.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [I, O] })),
            (W[59] = I),
            (W[60] = O),
            (W[61] = H))
          : (H = W[61]),
        W[62] !== v || W[63] !== _ || W[64] !== H
          ? ((B = (0, a.jsxs)("div", {
              className: "flex flex-col gap-3 border-t border-subtle pt-4",
              children: [v, _, H],
            })),
            (W[62] = v),
            (W[63] = _),
            (W[64] = H),
            (W[65] = B))
          : (B = W[65]),
        W[66] !== ex || W[67] !== eg
          ? ((V =
              eg &&
              (0, a.jsx)("p", {
                role: "alert",
                children:
                  ex instanceof w.fk &&
                  ex.diagnosticError instanceof g.rX &&
                  "merchant_workspace_analytics_viewer" === ex.diagnosticError.code
                    ? (0, a.jsx)(u.A, {
                        id: "merchantSettings.workspaceAnalyticsViewer",
                        defaultMessage:
                          "To add a merchant, your role in the selected workspace must be standard-user, account-admin, or account-owner. The analytics-viewer role cannot add merchants. Ask a workspace owner or admin to check your role.",
                        description:
                          "Error in the Add merchant form when the selected workspace has a verified analytics-viewer membership. Explain the roles required to add a merchant and ask an owner or admin for help. Keep the role identifiers untranslated.",
                      })
                    : (0, a.jsx)(u.A, {
                        id: "merchantSettings.createError",
                        defaultMessage: "Couldn’t add the merchant. Check the details and try again.",
                        description: "Merchant creation failed; the form remains editable for retry",
                      }),
              })),
            (W[66] = ex),
            (W[67] = eg),
            (W[68] = V))
          : (V = W[68]))
      let ej = !eh
      return (
        W[69] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = (0, a.jsx)(u.A, {
              id: "merchantSettings.createMerchant",
              defaultMessage: "Add merchant",
              description: "Saves a merchant; SFTP can be set up separately after saving",
            })),
            (W[69] = $))
          : ($ = W[69]),
        W[70] !== ef || W[71] !== ej
          ? ((K = (0, a.jsx)(U, {
              className: "self-start",
              type: "submit",
              size: "dialog",
              loading: ef,
              disabled: ej,
              children: $,
            })),
            (W[70] = ef),
            (W[71] = ej),
            (W[72] = K))
          : (K = W[72]),
        W[73] !== ef || W[74] !== S || W[75] !== B || W[76] !== V || W[77] !== K
          ? ((G = (0, a.jsxs)("fieldset", {
              className: "flex min-w-0 flex-col gap-3",
              disabled: ef,
              children: [S, B, V, K],
            })),
            (W[73] = ef),
            (W[74] = S),
            (W[75] = B),
            (W[76] = V),
            (W[77] = K),
            (W[78] = G))
          : (G = W[78]),
        W[79] !== s || W[80] !== i || W[81] !== G || W[82] !== m
          ? ((J = (0, a.jsxs)("form", {
              className: "flex flex-col gap-3 rounded-md border border-subtle p-3",
              onChange: s,
              onSubmit: i,
              children: [m, G],
            })),
            (W[79] = s),
            (W[80] = i),
            (W[81] = G),
            (W[82] = m),
            (W[83] = J))
          : (J = W[83]),
        J
      )
    }
    function eY(e) {
      return "UK" === e.toUpperCase()
    }
    function e0(e) {
      return e.toUpperCase()
    }
    function e1(e) {
      return e.toUpperCase()
    }
    function e2(e) {
      return !/^[a-zA-Z]{2}$/.test(e) || !(0, h.Ay)(e)
    }
  },
}
//# sourceMappingURL=751190.45d443126d.js.map
