export const __rspack_esm_ids = [500617]
export const __webpack_modules__ = {
  zVr5(e, t, l) {
    var a = l("wCYo"),
      n = l("D015"),
      r = l("yGJW")
    function s(e, t) {
      let l = t.items?.findIndex((t) => t.id === e.id)
      return {
        promptId: e.id,
        promptGroupId: t.id,
        promptGroupPresentation: (function (e) {
          switch (e) {
            case "image_card":
              return "CHATGPT_IMAGE_PROMPT_GROUP_PRESENTATION_TYPE_IMAGE_CARD"
            case "portrait":
              return "CHATGPT_IMAGE_PROMPT_GROUP_PRESENTATION_TYPE_PORTRAIT"
            case "text_pill":
              return "CHATGPT_IMAGE_PROMPT_GROUP_PRESENTATION_TYPE_TEXT_PILL"
            case "icon_pill":
              return "CHATGPT_IMAGE_PROMPT_GROUP_PRESENTATION_TYPE_ICON_PILL"
          }
        })(t.presentation),
        position: null != l && l >= 0 ? l : void 0,
      }
    }
    l.d(
      t,
      {},
      {
        S: function (e, t, l, i, o, c) {
          ;(0, r.yy)(e, a.Zo, {
            ...s(t, l),
            imageSendUuid: i,
            aspectRatio: c?.aspectRatio,
            imageUploadCount: (0, n.At)(c?.imageUploadCount),
            referenceImageCount: (0, n.At)(c?.referenceImageCount),
            promptPresentation: c?.promptPresentation,
            surface:
              "images" === o
                ? "CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_IMAGES"
                : "CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_CHATGPT_HOME",
          })
        },
        c: function (e, t, l, n, i) {
          ;(0, r.yy)(e, "impression" === t ? a.gA : a.YY, {
            ...s(l, n),
            ...("selected" === t ? { sectionId: l.section || "trending" } : {}),
            surface:
              "home" === i
                ? "CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_CHATGPT_HOME"
                : "CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_IMAGES",
          })
        },
      },
    )
  },
  ROi8(e, t, l) {
    var a = l("qmMi"),
      n = l("SPnB"),
      r = l("OWtl"),
      s = l("Kwur")
    let i = (0, a.vU)(r.u, (e, { get: t }) => {
      let l = t(n.chatGptAuthenticatedAccountId$),
        a = t(n.chatGptAuthenticatedUserId$)
      return {
        enabled: null != l && null != a,
        queryKey: ["chatgpt-images", "recent-uploads", l, a, e],
        staleTime: 12e4,
        queryFn: ({ signal: t }) =>
          s.Request.safeGet("/my/recent/uploaded_images", {
            additionalHeaders: null == l ? void 0 : { "ChatGPT-Account-ID": l },
            parameters: { query: { limit: 25, images_app_only: e } },
            signal: t,
          }),
      }
    })
    l.d(
      t,
      {},
      {
        U: i,
        W: function (e, t) {
          return {
            id: e.file_id,
            imageReference: !0,
            imageTemplateSource: "recent_upload",
            mimeType: null,
            name: t,
            source: "library",
          }
        },
      },
    )
  },
  IxWh(e, t, l) {
    var a = l("Vzyk"),
      n = l.n(a)
    function r(e, t = "ltr") {
      let l = Math.max(0, e.scrollWidth - e.clientWidth)
      if ("rtl" === t) return { maximum: 0, minimum: -l }
      let a = e.firstElementChild,
        n = Math.min(l, a instanceof HTMLElement ? Math.max(0, s(e, a, t)) : 0)
      return { maximum: l, minimum: n }
    }
    function s(e, t, l) {
      return "rtl" === l
        ? t.offsetLeft - e.offsetLeft + t.offsetWidth - e.clientWidth + i(e, l)
        : t.offsetLeft - e.offsetLeft - i(e, l)
    }
    function i(e, t) {
      let l = Number.parseFloat(
        "rtl" === t ? getComputedStyle(e).scrollPaddingRight : getComputedStyle(e).scrollPaddingLeft,
      )
      return Number.isNaN(l) ? 0 : l
    }
    l.d(
      t,
      {},
      {
        b: r,
        z: function (e, t, l = "ltr") {
          let { maximum: a, minimum: o } = r(e, l),
            c = "rtl" === l ? -t : t,
            d = n()(e.scrollLeft + c * (e.clientWidth - i(e, l)), o, a),
            u = e.children
          for (let r = 1 === t ? 0 : u.length - 1; r >= 0 && r < u.length; r += t) {
            let t = u.item(r)
            if (!(t instanceof HTMLElement)) continue
            let i = n()(s(e, t, l), o, a)
            if ((1 === c && i >= d - 1) || (-1 === c && i <= d + 1)) return i
          }
          return 1 === c ? a : o
        },
      },
    )
  },
  okCa(e, t, l) {
    var a = l("ABep"),
      n = l("QosV"),
      r = l("on57"),
      s = l("zd8w"),
      i = l("Wf1j"),
      o = l("YwPh"),
      c = l("BrXf"),
      d = l("bVeK"),
      u = l("UxN3")
    l.d(
      t,
      {},
      {
        s: function (e) {
          let t,
            l,
            m,
            p,
            f,
            g,
            h,
            x,
            v,
            b = (0, n.c)(70),
            {
              id: y,
              inputRef: j,
              className: w,
              "aria-activedescendant": A,
              "aria-autocomplete": _,
              "aria-controls": N,
              "aria-expanded": S,
              autoFocus: C,
              clearLabel: k,
              disabled: T,
              inputKey: P,
              inputRole: I,
              isClearable: E,
              label: R,
              maxLength: M,
              onFocus: L,
              onKeyDown: O,
              onSearchQueryChange: G,
              placeholder: $,
              readOnly: z,
              searchQuery: U,
              toolbarIconTone: W,
              trailingControl: B,
              variant: H,
            } = e,
            F = void 0 === E || E,
            q = void 0 === W ? "secondary" : W,
            Y = void 0 === H ? "default" : H,
            D = (0, i.A)(),
            V = (0, s.useRef)(null),
            K = j ?? V,
            Q =
              "settings-dialog" === Y ||
              "catalog-compact" === Y ||
              "toolbar" === Y ||
              "toolbar-action" === Y ||
              "toolbar-compact" === Y ||
              "directory" === Y,
            X =
              ("default" === Y || "settings" === Y) &&
              "h-page-search gap-2 border border-primary-outline bg-page-search px-2.5",
            J = "default" === Y && "rounded-full",
            Z = "settings" === Y && "rounded-button-toolbar",
            ee = Q && "gap-2 border border-primary-outline text-sm leading-5",
            et = Q && "catalog-compact" !== Y && "rounded-full px-3",
            el = "catalog-compact" === Y && "h-9 rounded-xl px-2",
            ea = Q && "directory" !== Y && "bg-transparent",
            en = "directory" === Y && "h-9 bg-white dark:bg-(--gray-200)",
            er = "toolbar" === Y && "h-9",
            es = "settings-dialog" === Y && "h-10",
            ei = "toolbar-action" === Y && "h-token-button-composer",
            eo = "toolbar-compact" === Y && "h-8 browser:h-9",
            ec =
              "sidebar" === Y &&
              "sidebar-item h-[var(--height-token-row)] bg-background-secondary-soft-alpha pe-[var(--padding-row-cell-x,var(--padding-row-x))]",
            ed = "sidebar-header" === Y && "h-9 shrink-0 gap-2 rounded-full bg-background-secondary-soft-alpha px-3",
            eu = "catalog" === Y && "h-14 gap-3 rounded-xl border border-primary-outline bg-surface px-5",
            em =
              "catalog-filter" === Y && "h-12 gap-3 rounded-xl border border-primary-outline bg-surface-secondary px-4",
            ep =
              "discovery" === Y &&
              "h-12.5 gap-2 rounded-full border border-primary-outline bg-surface-card px-3 text-sm leading-5"
          b[0] !== w ||
          b[1] !== ea ||
          b[2] !== en ||
          b[3] !== er ||
          b[4] !== es ||
          b[5] !== ei ||
          b[6] !== eo ||
          b[7] !== ec ||
          b[8] !== ed ||
          b[9] !== eu ||
          b[10] !== em ||
          b[11] !== ep ||
          b[12] !== X ||
          b[13] !== J ||
          b[14] !== Z ||
          b[15] !== ee ||
          b[16] !== et ||
          b[17] !== el
            ? ((t = (0, r.A)(
                "no-drag flex items-center py-0 text-base leading-[18px]",
                X,
                J,
                Z,
                ee,
                et,
                el,
                ea,
                en,
                er,
                es,
                ei,
                eo,
                ec,
                ed,
                eu,
                em,
                ep,
                w,
              )),
              (b[0] = w),
              (b[1] = ea),
              (b[2] = en),
              (b[3] = er),
              (b[4] = es),
              (b[5] = ei),
              (b[6] = eo),
              (b[7] = ec),
              (b[8] = ed),
              (b[9] = eu),
              (b[10] = em),
              (b[11] = ep),
              (b[12] = X),
              (b[13] = J),
              (b[14] = Z),
              (b[15] = ee),
              (b[16] = et),
              (b[17] = el),
              (b[18] = t))
            : (t = b[18])
          let ef = "sidebar-header" === Y || void 0
          ;(b[19] !== Q || b[20] !== q || b[21] !== Y
            ? ((l =
                "sidebar" === Y
                  ? (0, a.jsx)(c.B, { icon: (0, a.jsx)(o.A, { className: "icon-sm text-secondary" }) })
                  : (0, a.jsxs)("span", {
                      className: "flex shrink-0 items-center justify-center",
                      children: [
                        Q &&
                          (0, a.jsx)(u.b5, {
                            icon: { 16: d.QmT, 20: d.zcw },
                            className: "tertiary" === q ? "text-tertiary" : "text-secondary",
                          }),
                        "discovery" === Y && (0, a.jsx)(d.zcw, {}),
                        !Q &&
                          "discovery" !== Y &&
                          ("sidebar-header" === Y
                            ? (0, a.jsx)(d.QmT, { className: "text-secondary" })
                            : (0, a.jsx)(o.A, { className: "icon-sm text-secondary" })),
                      ],
                    })),
              (b[19] = Q),
              (b[20] = q),
              (b[21] = Y),
              (b[22] = l))
            : (l = b[22]),
            b[23] !== y || b[24] !== R
              ? ((m = (0, a.jsx)("label", { className: "sr-only", htmlFor: y, children: R })),
                (b[23] = y),
                (b[24] = R),
                (b[25] = m))
              : (m = b[25]))
          let eg = "discovery" === Y ? "placeholder:text-default" : "placeholder:text-tertiary",
            eh = Q || "discovery" === Y ? "text-sm leading-5" : "text-base leading-[18px]",
            ex = "discovery" === Y && "tracking-[-0.15px] max-md:text-base"
          return (
            b[26] !== eg || b[27] !== eh || b[28] !== ex
              ? ((p = (0, r.A)(
                  "min-w-0 flex-1 bg-transparent text-default outline-none select-text [&::placeholder]:select-none",
                  eg,
                  eh,
                  ex,
                )),
                (b[26] = eg),
                (b[27] = eh),
                (b[28] = ex),
                (b[29] = p))
              : (p = b[29]),
            b[30] !== G
              ? ((f = (e) => {
                  G(e.target.value)
                }),
                (b[30] = G),
                (b[31] = f))
              : (f = b[31]),
            b[32] !== A ||
            b[33] !== _ ||
            b[34] !== N ||
            b[35] !== S ||
            b[36] !== C ||
            b[37] !== T ||
            b[38] !== y ||
            b[39] !== P ||
            b[40] !== I ||
            b[41] !== M ||
            b[42] !== L ||
            b[43] !== O ||
            b[44] !== $ ||
            b[45] !== z ||
            b[46] !== K ||
            b[47] !== U ||
            b[48] !== p ||
            b[49] !== f
              ? ((g = (0, a.jsx)(
                  "input",
                  {
                    "aria-activedescendant": A,
                    "aria-autocomplete": _,
                    "aria-controls": N,
                    "aria-expanded": S,
                    autoFocus: C,
                    id: y,
                    ref: K,
                    className: p,
                    autoComplete: "off",
                    disabled: T,
                    maxLength: M,
                    readOnly: z,
                    role: I,
                    type: "text",
                    value: U,
                    onChange: f,
                    onFocus: L,
                    onKeyDown: O,
                    placeholder: $,
                  },
                  P,
                )),
                (b[32] = A),
                (b[33] = _),
                (b[34] = N),
                (b[35] = S),
                (b[36] = C),
                (b[37] = T),
                (b[38] = y),
                (b[39] = P),
                (b[40] = I),
                (b[41] = M),
                (b[42] = L),
                (b[43] = O),
                (b[44] = $),
                (b[45] = z),
                (b[46] = K),
                (b[47] = U),
                (b[48] = p),
                (b[49] = f),
                (b[50] = g))
              : (g = b[50]),
            b[51] !== k ||
            b[52] !== T ||
            b[53] !== D ||
            b[54] !== F ||
            b[55] !== G ||
            b[56] !== K ||
            b[57] !== U ||
            b[58] !== Y
              ? ((h =
                  F && U.length > 0
                    ? (0, a.jsx)("button", {
                        disabled: T,
                        "aria-label":
                          k ?? D.formatMessage({ id: "skills.pageSearchInput.clear", defaultMessage: "Clear search" }),
                        className: (0, r.A)(
                          "flex shrink-0 cursor-interaction items-center justify-center text-secondary hover:text-default",
                          "sidebar" === Y && "size-6",
                        ),
                        type: "button",
                        onClick: () => {
                          ;(K.current?.focus(), G(""))
                        },
                        children: (0, a.jsx)(d.YwO, {}),
                      })
                    : null),
                (b[51] = k),
                (b[52] = T),
                (b[53] = D),
                (b[54] = F),
                (b[55] = G),
                (b[56] = K),
                (b[57] = U),
                (b[58] = Y),
                (b[59] = h))
              : (h = b[59]),
            b[60] !== B
              ? ((x = null == B ? null : (0, a.jsx)("div", { className: "flex shrink-0 items-center", children: B })),
                (b[60] = B),
                (b[61] = x))
              : (x = b[61]),
            b[62] !== t || b[63] !== ef || b[64] !== l || b[65] !== m || b[66] !== g || b[67] !== h || b[68] !== x
              ? ((v = (0, a.jsxs)("div", {
                  className: t,
                  "data-sidebar-header-search": ef,
                  children: [l, m, g, h, x],
                })),
                (b[62] = t),
                (b[63] = ef),
                (b[64] = l),
                (b[65] = m),
                (b[66] = g),
                (b[67] = h),
                (b[68] = x),
                (b[69] = v))
              : (v = b[69]),
            v
          )
        },
      },
    )
  },
  PkPj(e, t, l) {
    var a = l("ABep"),
      n = l("QosV"),
      r = l("on57"),
      s = l("IjbW"),
      i = l("SOml"),
      o = l("suct"),
      c = l("K4Cx"),
      d = l("qmMi"),
      u = l("zd8w"),
      m = l("wD9O"),
      p = l("khOd"),
      f = l("HgLj"),
      g = l("va0r"),
      h = l("I7bK"),
      x = l("MeAu"),
      v = l("okCa"),
      b = l("DiyT")
    let y = {
      directory: { inset: "pt-24", title: "text-[28px] leading-9 font-semibold" },
      default: { inset: "pt-panel", title: "heading-xl" },
      inset: { inset: "pt-panel", title: "heading-xl" },
      hero: { inset: "pt-4", title: "text-3xl font-bold md:text-5xl" },
      catalog: { inset: "pt-4", title: "heading-xl font-semibold" },
      compact: { inset: "pt-6", title: "heading-lg" },
      profile: { inset: "pt-13", title: "text-heading-app leading-8.5 font-normal tracking-[0.39px]" },
      profileManager: {
        inset: "pt-[var(--business-manager-heading-inset,68px)]",
        title:
          "text-[22px] leading-7 font-semibold @lg/manager:text-heading-app @lg/manager:leading-8.5 @lg/manager:font-normal",
      },
    }
    function j() {
      return document.activeElement
    }
    function w(e, t, l) {
      let a = t.getBoundingClientRect().top - e.getBoundingClientRect().top,
        n = (0, m.Ud)(Math.max(0, -a), l)
      return (t.style.setProperty("--header-background-top-inset", `${n}px`), a)
    }
    function A(e) {
      let t,
        l,
        s = (0, n.c)(7),
        { children: i, inset: o, wrap: c, variant: d } = e,
        u = "directory" === (void 0 === d ? "default" : d) ? "pb-4" : "pb-2",
        m = void 0 !== c && c && "flex-wrap",
        p = (void 0 === o || o) && "px-3"
      return (
        s[0] !== u || s[1] !== m || s[2] !== p
          ? ((t = (0, r.A)("flex items-center justify-between gap-4", u, m, p)),
            (s[0] = u),
            (s[1] = m),
            (s[2] = p),
            (s[3] = t))
          : (t = s[3]),
        s[4] !== i || s[5] !== t
          ? ((l = (0, a.jsx)("div", { className: t, children: i })), (s[4] = i), (s[5] = t), (s[6] = l))
          : (l = s[6]),
        l
      )
    }
    l.d(
      t,
      { J1: () => b.J1 },
      {
        Ql: function (e) {
          let t,
            l,
            _,
            N,
            S,
            C,
            k,
            T,
            P,
            I,
            E,
            R,
            M,
            L,
            O,
            G,
            $,
            z,
            U,
            W,
            B,
            H,
            F,
            q,
            Y,
            D,
            V,
            K,
            Q,
            X,
            J,
            Z,
            ee,
            et,
            el,
            ea = (0, n.c)(226),
            {
              animateContentLayout: en,
              collapseHeaderOnScroll: er,
              expandSearchWhenWrapped: es,
              banner: ei,
              bannerAfterHeader: eo,
              bannerPlacement: ec,
              children: ed,
              contentClassName: eu,
              contentInset: em,
              contentWidth: ep,
              controls: ef,
              headerAction: eg,
              headerFade: eh,
              headerPlacement: ex,
              headerVariant: ev,
              horizontalPaddingClassName: eb,
              reserveSelectionGutter: ey,
              balanceScrollbarGutter: ej,
              navigation: ew,
              pageActions: eA,
              scrollContainerRef: e_,
              search: eN,
              searchContent: eS,
              searchPlacement: eC,
              searchToolbar: ek,
              stickyControls: eT,
              subtitle: eP,
              title: eI,
              titleRef: eE,
              toolbarActions: eR,
              toolbarInset: eM,
              wrapActionsAtNarrowWidth: eL,
            } = e,
            eO = void 0 !== es && es,
            eG = void 0 !== eo && eo,
            e$ = void 0 === em || em,
            ez = void 0 === ep ? "default" : ep,
            eU = void 0 === eh ? "always" : eh,
            eW = void 0 === ex ? "page" : ex,
            eB = void 0 === ev ? "default" : ev,
            eH = void 0 !== ey && ey,
            eF = void 0 !== ej && ej,
            eq = void 0 === eC ? "sticky" : eC,
            eY = void 0 === eM || eM,
            eD = (0, d.Ul)(p.GB),
            eV = (0, m.dz)(),
            eK = "profileManager" === eB,
            eQ = "px-panel"
          ;("profile" === ez
            ? (eQ = eK ? "px-4 @lg/manager:px-16" : "px-5 sm:px-16")
            : "directory" === ez && (eQ = "px-4 md:px-panel"),
            ea[0] !== ez || ea[1] !== eQ || ea[2] !== eB || ea[3] !== eb || ea[4] !== eH
              ? ((t = eH
                  ? "px-18"
                  : (eb ??
                    (0, r.A)(
                      eQ,
                      ("medium" === ez || "extraWide" === ez) && "compact" === eB ? "px-6 lg:px-12" : void 0,
                    ))),
                (ea[0] = ez),
                (ea[1] = eQ),
                (ea[2] = eB),
                (ea[3] = eb),
                (ea[4] = eH),
                (ea[5] = t))
              : (t = ea[5]))
          let eX = (0, r.A)(
              t,
              eD &&
                (eH
                  ? "[[data-app-shell-compact-page-gutter=true]_&]:px-14"
                  : null == eb && "profile" !== ez && "[[data-app-shell-compact-page-gutter=true]_&]:px-7.5"),
            ),
            [eJ] = (0, u.useState)(j),
            [eZ, e0] = (0, u.useState)(!1),
            [e1, e2] = (0, u.useState)(!1),
            e3 = (0, u.useRef)(null),
            e5 = (0, u.useRef)(null),
            e4 = (0, u.useRef)(null),
            [e6, e9] = (0, u.useState)(!1),
            [e7, e8] = (0, u.useState)(),
            te = (0, u.useRef)(null),
            tt = (0, u.useRef)(null)
          ea[6] !== e_ ? ((l = (0, f.P)(e3, e_)), (ea[6] = e_), (ea[7] = l)) : (l = ea[7])
          let tl = l,
            ta = (0, u.useRef)(null),
            tn = (0, u.useRef)(null),
            [tr, ts] = (0, u.useState)(),
            ti = document.activeElement,
            to = "none" !== eW,
            tc = "toolbar" === eW,
            td = "scroll" === eW && e1,
            tu = tc || td,
            tm = y[eB],
            tp = "directory" === eB,
            tf = "compact" === eB,
            tg = "profile" === eB || eK,
            th = !tc && null == eR && (to || !tg),
            tx = th ? "when-present" : "default"
          ea[8] !== th || ea[9] !== eW || ea[10] !== eZ || ea[11] !== td || ea[12] !== tx
            ? ((_ = { contentInset: tx }),
              th && td && ((_.contentInset = "none"), (_.background = "content")),
              "inline" === eW &&
                ((_.background = "header"), (_.divider = eZ ? "header" : void 0), (_.hideContentFade = !0)),
              (ea[8] = th),
              (ea[9] = eW),
              (ea[10] = eZ),
              (ea[11] = td),
              (ea[12] = tx),
              (ea[13] = _))
            : (_ = ea[13])
          let tv = null != eN || null != eS,
            tb = "sticky" === eW,
            ty = tb && void 0 !== er && er,
            tj = null != ew || null != eA,
            tw = null != eT || (tb && (tj || null != ef)),
            tA = tb || "inline" === eW,
            t_ = "bottom-on-scroll" === eq && tv && !tA,
            tN = eD && !tg && !tp && "browser:max-md:text-lg browser:max-md:font-medium",
            tS = {
              directory: "max-w-[calc(768px+var(--padding-panel)*2)]",
              extraWide: "max-w-[1440px]",
              wide: "max-w-5xl",
              medium: "max-w-[960px]",
              default: "max-w-[var(--thread-content-max-width)]",
              profile: eK ? "max-w-[1144px]" : "max-w-4xl",
            }[ez],
            tC = !tb && ((!tc && null != ew) || null != eA),
            tk = (0, s.I)()
          ea[14] !== tk ? ((N = tk ? { duration: 0 } : h.m9), (ea[14] = tk), (ea[15] = N)) : (N = ea[15])
          let tT = N,
            tP = eN?.autoFocus ?? (null == ti || ti === document.body || ti === document.documentElement || ti === eJ)
          ea[16] !== eN || ea[17] !== eS || ea[18] !== tP
            ? ((S =
                eS ??
                (null == eN
                  ? null
                  : (0, a.jsx)(v.s, { ...eN, autoFocus: tP, className: (0, r.A)("min-w-0 flex-1", eN.className) }))),
              (ea[16] = eN),
              (ea[17] = eS),
              (ea[18] = tP),
              (ea[19] = S))
            : (S = ea[19])
          let tI = S
          ;(ea[20] !== t_
            ? ((C = () => {
                let e = e3.current,
                  t = e5.current,
                  l = e4.current
                if (!t_ || null == e || null == t || null == l) return
                let a = new IntersectionObserver(
                    (e) => {
                      let [t] = e
                      e9(!t.isIntersecting && t.boundingClientRect.bottom <= (t.rootBounds?.top ?? 0))
                    },
                    { root: e },
                  ),
                  n = new ResizeObserver((e) => {
                    let [t] = e,
                      a = t.borderBoxSize?.[0]?.blockSize ?? l.offsetHeight
                    a && e8(a)
                  })
                return (
                  a.observe(t),
                  n.observe(l, { box: "border-box" }),
                  () => {
                    ;(a.disconnect(), n.disconnect())
                  }
                )
              }),
              (k = [t_]),
              (ea[20] = t_),
              (ea[21] = C),
              (ea[22] = k))
            : ((C = ea[21]), (k = ea[22])),
            (0, u.useLayoutEffect)(C, k),
            ea[23] !== t_ || ea[24] !== tk
              ? ((T = () => {
                  let e = e4.current
                  if (!t_ || null == e) return
                  let t = (0, i.i)(
                    e,
                    { opacity: [0, 1], y: [24, 0] },
                    { type: "tween", ease: "easeInOut", duration: 0.25 * !tk },
                  )
                  return () => t.stop()
                }),
                (ea[23] = t_),
                (ea[24] = tk),
                (ea[25] = T))
              : (T = ea[25]),
            ea[26] !== t_ || ea[27] !== e6 || ea[28] !== tk
              ? ((P = [t_, e6, tk]), (ea[26] = t_), (ea[27] = e6), (ea[28] = tk), (ea[29] = P))
              : (P = ea[29]),
            (0, u.useLayoutEffect)(T, P),
            ea[30] !== tb || ea[31] !== eD || ea[32] !== eV
              ? ((I = () => {
                  let e = e3.current,
                    t = te.current
                  if (!eD || !tb || null == e || null == t) return
                  let l = new ResizeObserver(() => {
                    w(e, t, eV)
                  })
                  return (
                    l.observe(e),
                    l.observe(t),
                    () => {
                      ;(l.disconnect(), t.style.removeProperty("--header-background-top-inset"))
                    }
                  )
                }),
                (E = [eD, tb, eV]),
                (ea[30] = tb),
                (ea[31] = eD),
                (ea[32] = eV),
                (ea[33] = I),
                (ea[34] = E))
              : ((I = ea[33]), (E = ea[34])),
            (0, u.useLayoutEffect)(I, E),
            ea[35] !== eW
              ? ((R = () => {
                  let e = ta.current,
                    t = e3.current
                  if ("scroll" !== eW || null == e || null == t) return
                  let l = new IntersectionObserver(
                    (e) => {
                      let [t] = e
                      e2(!t.isIntersecting && t.boundingClientRect.bottom <= (t.rootBounds?.top ?? 0))
                    },
                    { root: t, threshold: 0 },
                  )
                  return (l.observe(e), () => l.disconnect())
                }),
                (M = [eW]),
                (ea[35] = eW),
                (ea[36] = R),
                (ea[37] = M))
              : ((R = ea[36]), (M = ea[37])),
            (0, u.useLayoutEffect)(R, M),
            ea[38] !== eW || ea[39] !== td
              ? ((L = () => {
                  let e = tn.current
                  if ("scroll" !== eW || td || null == e) return
                  let t = new ResizeObserver(() => {
                    ts({ width: e.offsetWidth, height: e.offsetHeight })
                  })
                  return (t.observe(e), () => t.disconnect())
                }),
                (O = [eW, td]),
                (ea[38] = eW),
                (ea[39] = td),
                (ea[40] = L),
                (ea[41] = O))
              : ((L = ea[40]), (O = ea[41])),
            (0, u.useLayoutEffect)(L, O))
          let tE =
              null == ei
                ? null
                : (0, a.jsx)("div", {
                    className: (0, r.A)(
                      "w-full empty:hidden",
                      "inset" === (void 0 === ec ? "inset" : ec) && ["mx-auto pt-panel", tS, eX],
                    ),
                    children: ei,
                  }),
            tR = eD ? void 0 : eT
          if (tb) {
            let e
            ;(ea[42] !== ef || ea[43] !== tw || ea[44] !== tj || ea[45] !== ew || ea[46] !== eA || ea[47] !== eT
              ? ((e = tw
                  ? (0, a.jsxs)("div", {
                      className: "flex w-full min-w-0 flex-col",
                      children: [
                        tj
                          ? (0, a.jsxs)(A, {
                              inset: !1,
                              wrap: !0,
                              children: [
                                ew,
                                null == eA ? null : (0, a.jsx)("div", { className: "ms-auto", children: eA }),
                              ],
                            })
                          : null,
                        eT,
                        ef,
                      ],
                    })
                  : null),
                (ea[42] = ef),
                (ea[43] = tw),
                (ea[44] = tj),
                (ea[45] = ew),
                (ea[46] = eA),
                (ea[47] = eT),
                (ea[48] = e))
              : (e = ea[48]),
              (tR = e))
          }
          ea[49] !== to ||
          ea[50] !== eg ||
          ea[51] !== eB ||
          ea[52] !== tg ||
          ea[53] !== tc ||
          ea[54] !== ew ||
          ea[55] !== td ||
          ea[56] !== tu ||
          ea[57] !== tN ||
          ea[58] !== eI ||
          ea[59] !== eE ||
          ea[60] !== eR ||
          ea[61] !== eY ||
          ea[62] !== tT
            ? ((G =
                to && (tu || null != eR)
                  ? (0, a.jsx)(g.FL, {
                      divider: !tg,
                      children: (0, a.jsxs)(x.oE, {
                        inset: eY,
                        children: [
                          (0, a.jsx)(o.N, {
                            initial: !1,
                            children: tu
                              ? (0, a.jsx)(
                                  c.P.div,
                                  {
                                    animate: { opacity: 1, transform: "translateY(0)" },
                                    className: "min-w-0 flex-1 overflow-hidden",
                                    exit: { opacity: 0, transform: "translateY(4px)" },
                                    initial: { opacity: 0, transform: "translateY(4px)" },
                                    transition: tT,
                                    children:
                                      tc && null != ew
                                        ? (0, a.jsxs)(a.Fragment, {
                                            children: [
                                              (0, a.jsx)("h1", { ref: eE, className: "sr-only", children: eI }),
                                              ew,
                                            ],
                                          })
                                        : (0, a.jsx)("h1", {
                                            ref: eE,
                                            className: (0, r.A)(
                                              "min-w-0 truncate text-base text-default electron:font-medium",
                                              tN,
                                              "inset" === eB ? "px-2" : null,
                                            ),
                                            children: eI,
                                          }),
                                  },
                                  "toolbar-heading",
                                )
                              : null,
                          }),
                          null != eR || td
                            ? (0, a.jsxs)("div", {
                                className: "ms-auto flex min-w-0 items-center justify-end gap-2",
                                children: [td ? eg : null, eR],
                              })
                            : null,
                        ],
                      }),
                    })
                  : null),
              (ea[49] = to),
              (ea[50] = eg),
              (ea[51] = eB),
              (ea[52] = tg),
              (ea[53] = tc),
              (ea[54] = ew),
              (ea[55] = td),
              (ea[56] = tu),
              (ea[57] = tN),
              (ea[58] = eI),
              (ea[59] = eE),
              (ea[60] = eR),
              (ea[61] = eY),
              (ea[62] = tT),
              (ea[63] = G))
            : (G = ea[63])
          let tM = t_ || !to ? "relative flex h-full min-h-0 flex-1 flex-col" : "contents",
            tL = !to && !eD && "max-md:pt-[var(--height-toolbar)]",
            tO = !to && eD && "browser:max-md:pt-[var(--height-toolbar)]",
            tG = !to && "profile" === ez && "bg-surface-card"
          ea[64] !== tM || ea[65] !== tL || ea[66] !== tO || ea[67] !== tG
            ? (($ = (0, r.A)(tM, tL, tO, tG)), (ea[64] = tM), (ea[65] = tL), (ea[66] = tO), (ea[67] = tG), (ea[68] = $))
            : ($ = ea[68])
          let t$ = eD || void 0,
            tz = eK && "@container/manager",
            tU = "profile" === ez && "bg-surface-card",
            tW =
              tp &&
              "bg-surface [--color-text:var(--gray-1000)] [--color-surface:light-dark(var(--gray-25),var(--black))]",
            tB = !eF && "[scrollbar-gutter:stable]",
            tH = eF && (tg ? "sm:[scrollbar-gutter:stable_both-edges]" : "md:[scrollbar-gutter:stable_both-edges]"),
            tF = !t_ && "relative",
            tq = td && "vertical-scroll-fade-mask-top"
          ea[69] !== tz ||
          ea[70] !== tU ||
          ea[71] !== tW ||
          ea[72] !== tB ||
          ea[73] !== tH ||
          ea[74] !== tF ||
          ea[75] !== tq
            ? ((z = (0, r.A)("h-full min-h-0 flex-1 overflow-x-hidden overflow-y-auto", tz, tU, tW, tB, tH, tF, tq)),
              (ea[69] = tz),
              (ea[70] = tU),
              (ea[71] = tW),
              (ea[72] = tB),
              (ea[73] = tH),
              (ea[74] = tF),
              (ea[75] = tq),
              (ea[76] = z))
            : (z = ea[76])
          let tY = (!tc && null == eR && (!!to || !tg)) || void 0
          ea[77] !== tA ||
          ea[78] !== tv ||
          ea[79] !== tb ||
          ea[80] !== eU ||
          ea[81] !== eq ||
          ea[82] !== e0 ||
          ea[83] !== ty ||
          ea[84] !== eD ||
          ea[85] !== eT ||
          ea[86] !== eV
            ? ((U =
                tA || ("when-scrolled" === eU && "sticky" === eq && (tv || null != eT))
                  ? (e) => {
                      let t = te.current,
                        l = tt.current
                      if (ty && !eD && null != t && null != l) {
                        let e = t.getBoundingClientRect()
                        t.style.setProperty(
                          "--header-scroll-overlap",
                          `${Math.max(0, ((e.bottom - l.getBoundingClientRect().top) * t.offsetHeight) / e.height + parseFloat(getComputedStyle(t).marginBottom))}px`,
                        )
                      }
                      if (eD && tb && null != t) {
                        let l = w(e.currentTarget, t, eV)
                        e0(e.currentTarget.scrollTop > 0 && l <= parseFloat(getComputedStyle(t).top))
                      } else e0(e.currentTarget.scrollTop > 0)
                    }
                  : void 0),
              (ea[77] = tA),
              (ea[78] = tv),
              (ea[79] = tb),
              (ea[80] = eU),
              (ea[81] = eq),
              (ea[82] = e0),
              (ea[83] = ty),
              (ea[84] = eD),
              (ea[85] = eT),
              (ea[86] = eV),
              (ea[87] = U))
            : (U = ea[87])
          let tD = !to && "h-full"
          ;(ea[88] !== tD
            ? ((W = (0, r.A)("flex min-h-full w-full flex-col", tD)), (ea[88] = tD), (ea[89] = W))
            : (W = ea[89]),
            ea[90] !== t_ || ea[91] !== e7
              ? ((B = t_ ? { paddingBottom: e7 } : void 0), (ea[90] = t_), (ea[91] = e7), (ea[92] = B))
              : (B = ea[92]))
          let tV = eG && tA ? null : tE
          ;(ea[93] !== tR ||
          ea[94] !== eX ||
          ea[95] !== eO ||
          ea[96] !== tA ||
          ea[97] !== tv ||
          ea[98] !== tb ||
          ea[99] !== eg ||
          ea[100] !== tm ||
          ea[101] !== tp ||
          ea[102] !== eZ ||
          ea[103] !== tI ||
          ea[104] !== ek ||
          ea[105] !== ty ||
          ea[106] !== eD ||
          ea[107] !== tN ||
          ea[108] !== eP ||
          ea[109] !== eI ||
          ea[110] !== eE ||
          ea[111] !== tS ||
          ea[112] !== eL
            ? ((H = tA
                ? (0, a.jsx)(b.gX, {
                    ref: te,
                    className: tS,
                    horizontalPaddingClassName: eX,
                    presentation: tp ? "directory" : "default",
                    collapseOnScroll: ty,
                    expandSearchWhenWrapped: eO,
                    wrapActionsAtNarrowWidth: eL,
                    showDivider: tb && eZ,
                    sticky: tb,
                    title:
                      null == eI
                        ? null
                        : (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)("h1", {
                                ref: eE,
                                className: (0, r.A)(
                                  "flex min-h-9 items-center text-default",
                                  eD && "browser:max-md:min-h-0",
                                  tN,
                                  tm.title,
                                ),
                                children: eI,
                              }),
                              null != eP && (!eD || tp || tb)
                                ? (0, a.jsx)("div", {
                                    className: (0, r.A)(
                                      "text-base leading-6 text-secondary",
                                      ty && "max-w-lg",
                                      eD && !tp && "browser:max-md:hidden",
                                    ),
                                    children: eP,
                                  })
                                : null,
                            ],
                          }),
                    actions: tv ? (0, a.jsx)(b.Tz, { search: tI, controls: ek, actions: eg }) : eg,
                    navigation: tR,
                  })
                : null),
              (ea[93] = tR),
              (ea[94] = eX),
              (ea[95] = eO),
              (ea[96] = tA),
              (ea[97] = tv),
              (ea[98] = tb),
              (ea[99] = eg),
              (ea[100] = tm),
              (ea[101] = tp),
              (ea[102] = eZ),
              (ea[103] = tI),
              (ea[104] = ek),
              (ea[105] = ty),
              (ea[106] = eD),
              (ea[107] = tN),
              (ea[108] = eP),
              (ea[109] = eI),
              (ea[110] = eE),
              (ea[111] = tS),
              (ea[112] = eL),
              (ea[113] = H))
            : (H = ea[113]),
            ea[114] !== eX ||
            ea[115] !== tA ||
            ea[116] !== tb ||
            ea[117] !== tp ||
            ea[118] !== eD ||
            ea[119] !== eP ||
            ea[120] !== tS ||
            ea[121] !== eL
              ? ((F =
                  tA && eD && !tp && !tb && null != eP
                    ? (0, a.jsx)("div", {
                        className: eL ? "@container/searchable-header" : "contents",
                        children: (0, a.jsx)("div", {
                          className: (0, r.A)(
                            "mx-auto w-full text-base leading-6 text-secondary browser:max-md:hidden",
                            eL && "in-data-[codex-window-type=electron]:@max-3xl/searchable-header:hidden",
                            tS,
                            eX,
                          ),
                          children: (0, a.jsx)("div", { className: "max-w-lg -translate-y-1.5", children: eP }),
                        }),
                      })
                    : null),
                (ea[114] = eX),
                (ea[115] = tA),
                (ea[116] = tb),
                (ea[117] = tp),
                (ea[118] = eD),
                (ea[119] = eP),
                (ea[120] = tS),
                (ea[121] = eL),
                (ea[122] = F))
              : (F = ea[122]),
            ea[123] !== eX || ea[124] !== tA || ea[125] !== tb || ea[126] !== eD || ea[127] !== eT || ea[128] !== tS
              ? ((q =
                  tA && !tb && eD && null != eT
                    ? (0, a.jsx)("div", {
                        className: (0, r.A)("mx-auto flex min-h-15 w-full min-w-0 items-center", tS, eX),
                        children: eT,
                      })
                    : null),
                (ea[123] = eX),
                (ea[124] = tA),
                (ea[125] = tb),
                (ea[126] = eD),
                (ea[127] = eT),
                (ea[128] = tS),
                (ea[129] = q))
              : (q = ea[129]))
          let tK = eG && tA ? tE : null
          ;(ea[130] !== eX ||
          ea[131] !== tA ||
          ea[132] !== to ||
          ea[133] !== tv ||
          ea[134] !== eg ||
          ea[135] !== tr ||
          ea[136] !== tm ||
          ea[137] !== eB ||
          ea[138] !== tf ||
          ea[139] !== tg ||
          ea[140] !== eK ||
          ea[141] !== tc ||
          ea[142] !== td ||
          ea[143] !== eD ||
          ea[144] !== tN ||
          ea[145] !== eP ||
          ea[146] !== eI ||
          ea[147] !== eE ||
          ea[148] !== tT ||
          ea[149] !== tS
            ? ((Y =
                !to || tc || tA
                  ? null
                  : (0, a.jsx)(
                      c.P.div,
                      {
                        ref: ta,
                        "aria-hidden": td || void 0,
                        inert: td,
                        animate: { opacity: 1, transform: "translateY(0)" },
                        exit: { opacity: 0, transform: "translateY(-4px)" },
                        initial: { opacity: 0, transform: "translateY(-4px)" },
                        transition: tT,
                        children: (0, a.jsx)("div", {
                          className: (0, r.A)(
                            "mx-auto w-full",
                            tS,
                            tm.inset,
                            !tv && eK && "pb-8",
                            !tv && !eK && (tf || tg ? "pb-6" : "pb-4"),
                            eX,
                          ),
                          children: (0, a.jsxs)("div", {
                            className: (0, r.A)(
                              "flex justify-between",
                              "profile" === eB ? "gap-2 px-1" : "gap-4",
                              tf && "flex-wrap items-center",
                              tg && "items-center",
                              !tf && !tg && "items-start",
                              "hero" === eB && "justify-center text-center",
                              "inset" === eB ? "px-2" : null,
                            ),
                            children: [
                              (0, a.jsxs)("div", {
                                className: (0, r.A)(
                                  "flex min-w-0 flex-col",
                                  "inset" === eB || "hero" === eB ? "gap-2" : !eK && "gap-1",
                                ),
                                children: [
                                  (0, a.jsx)("h1", {
                                    ref: td ? void 0 : eE,
                                    className: (0, r.A)("text-default", tN, tm.title),
                                    children: eI,
                                  }),
                                  null == eP
                                    ? null
                                    : (0, a.jsx)("div", {
                                        className: (0, r.A)(
                                          "text-secondary",
                                          eK
                                            ? "text-[17px] leading-[22px] @lg/manager:text-[16px] @lg/manager:leading-6.5"
                                            : ["text-base", tg ? "leading-6.5" : "leading-6"],
                                          "profile" === eB && "tracking-[-0.32px] sm:truncate",
                                          eK && "tracking-[-0.4px]",
                                          eD && !tg && "browser:max-md:hidden",
                                        ),
                                        children: eP,
                                      }),
                                ],
                              }),
                              null == eg
                                ? null
                                : (0, a.jsx)("div", {
                                    ref: tn,
                                    className: (0, r.A)("min-w-0", tf ? "max-w-full" : "shrink-0"),
                                    style: td ? tr : void 0,
                                    children: td ? null : eg,
                                  }),
                            ],
                          }),
                        }),
                      },
                      "page-heading",
                    )),
              (ea[130] = eX),
              (ea[131] = tA),
              (ea[132] = to),
              (ea[133] = tv),
              (ea[134] = eg),
              (ea[135] = tr),
              (ea[136] = tm),
              (ea[137] = eB),
              (ea[138] = tf),
              (ea[139] = tg),
              (ea[140] = eK),
              (ea[141] = tc),
              (ea[142] = td),
              (ea[143] = eD),
              (ea[144] = tN),
              (ea[145] = eP),
              (ea[146] = eI),
              (ea[147] = eE),
              (ea[148] = tT),
              (ea[149] = tS),
              (ea[150] = Y))
            : (Y = ea[150]),
            ea[151] !== Y
              ? ((D = (0, a.jsx)(o.N, { initial: !1, mode: "popLayout", children: Y })), (ea[151] = Y), (ea[152] = D))
              : (D = ea[152]),
            ea[153] !== eX ||
            ea[154] !== t_ ||
            ea[155] !== tA ||
            ea[156] !== tv ||
            ea[157] !== eU ||
            ea[158] !== eB ||
            ea[159] !== eZ ||
            ea[160] !== e6 ||
            ea[161] !== e7 ||
            ea[162] !== tI ||
            ea[163] !== eq ||
            ea[164] !== ek ||
            ea[165] !== eT ||
            ea[166] !== tS
              ? ((V =
                  !tv || tA
                    ? null
                    : (0, a.jsx)("div", {
                        ref: e5,
                        className: t_ ? void 0 : "contents",
                        style: t_ ? { height: e7 } : void 0,
                        children: (0, a.jsx)("div", {
                          ref: e4,
                          className: (0, r.A)(!t_ && "contents", t_ && e6 && "absolute inset-x-0 bottom-0 z-30"),
                          children: (0, a.jsxs)(b.J1, {
                            className: "top-0",
                            showScrollFade: "always" === eU || eZ,
                            sticky: "sticky" === eq,
                            children: [
                              (0, a.jsxs)("div", {
                                className: (0, r.A)(
                                  "mx-auto flex w-full items-center gap-2 pb-2",
                                  tS,
                                  "hero" === eB && "pt-6",
                                  "catalog" === eB && "pt-4",
                                  "hero" !== eB && "catalog" !== eB && "pt-panel",
                                  eX,
                                ),
                                children: [tI, ek],
                              }),
                              null == eT
                                ? null
                                : (0, a.jsx)("div", {
                                    className: (0, r.A)("mx-auto w-full", tS, "hero" === eB && "pt-12", eX),
                                    children: eT,
                                  }),
                            ],
                          }),
                        }),
                      })),
                (ea[153] = eX),
                (ea[154] = t_),
                (ea[155] = tA),
                (ea[156] = tv),
                (ea[157] = eU),
                (ea[158] = eB),
                (ea[159] = eZ),
                (ea[160] = e6),
                (ea[161] = e7),
                (ea[162] = tI),
                (ea[163] = eq),
                (ea[164] = ek),
                (ea[165] = eT),
                (ea[166] = tS),
                (ea[167] = V))
              : (V = ea[167]),
            ea[168] !== eX ||
            ea[169] !== tA ||
            ea[170] !== tv ||
            ea[171] !== eU ||
            ea[172] !== tf ||
            ea[173] !== eZ ||
            ea[174] !== eq ||
            ea[175] !== eT ||
            ea[176] !== tS
              ? ((K =
                  tv || null == eT || tA
                    ? null
                    : (0, a.jsx)(b.J1, {
                        className: "top-0",
                        showScrollFade: "always" === eU || eZ,
                        sticky: "sticky" === eq,
                        children: (0, a.jsx)("div", {
                          className: (0, r.A)("mx-auto w-full", !tf && "py-2", tS, eX),
                          children: eT,
                        }),
                      })),
                (ea[168] = eX),
                (ea[169] = tA),
                (ea[170] = tv),
                (ea[171] = eU),
                (ea[172] = tf),
                (ea[173] = eZ),
                (ea[174] = eq),
                (ea[175] = eT),
                (ea[176] = tS),
                (ea[177] = K))
              : (K = ea[177]))
          let tQ = !!(void 0 === en || en) && "position",
            tX = eK && "pb-16",
            tJ = "profile" === eB && "pb-23",
            tZ = !tg && (eD && tf ? "pb-4" : "pb-panel"),
            t0 = e$ && tf && !tA && "pt-3.5",
            t1 = e$ && !tf && !tv && !tw && "pt-panel",
            t2 = e$ && !tf && (tv || tw) && (tp ? "pt-3 md:pt-5" : "pt-5")
          ;(ea[178] !== eu ||
          ea[179] !== eX ||
          ea[180] !== tX ||
          ea[181] !== tJ ||
          ea[182] !== tZ ||
          ea[183] !== t0 ||
          ea[184] !== t1 ||
          ea[185] !== t2 ||
          ea[186] !== tS
            ? ((Q = (0, r.A)("mx-auto flex min-h-0 w-full flex-1 flex-col", tX, tJ, tZ, tS, t0, t1, t2, eu, eX)),
              (ea[178] = eu),
              (ea[179] = eX),
              (ea[180] = tX),
              (ea[181] = tJ),
              (ea[182] = tZ),
              (ea[183] = t0),
              (ea[184] = t1),
              (ea[185] = t2),
              (ea[186] = tS),
              (ea[187] = Q))
            : (Q = ea[187]),
            ea[188] !== tC || ea[189] !== tc || ea[190] !== ew || ea[191] !== eA
              ? ((X = tC
                  ? (0, a.jsxs)(A, {
                      children: [
                        tc ? null : ew,
                        null == eA ? null : (0, a.jsx)("div", { className: "ms-auto", children: eA }),
                      ],
                    })
                  : null),
                (ea[188] = tC),
                (ea[189] = tc),
                (ea[190] = ew),
                (ea[191] = eA),
                (ea[192] = X))
              : (X = ea[192]))
          let t3 = tb ? null : ef
          return (
            ea[193] !== ed || ea[194] !== tQ || ea[195] !== Q || ea[196] !== X || ea[197] !== t3 || ea[198] !== tT
              ? ((J = (0, a.jsxs)(c.P.div, {
                  ref: tt,
                  layout: tQ,
                  className: Q,
                  transition: tT,
                  children: [X, t3, ed],
                })),
                (ea[193] = ed),
                (ea[194] = tQ),
                (ea[195] = Q),
                (ea[196] = X),
                (ea[197] = t3),
                (ea[198] = tT),
                (ea[199] = J))
              : (J = ea[199]),
            ea[200] !== W ||
            ea[201] !== B ||
            ea[202] !== tV ||
            ea[203] !== H ||
            ea[204] !== F ||
            ea[205] !== q ||
            ea[206] !== tK ||
            ea[207] !== D ||
            ea[208] !== V ||
            ea[209] !== K ||
            ea[210] !== J
              ? ((Z = (0, a.jsxs)("div", { className: W, style: B, children: [tV, H, F, q, tK, D, V, K, J] })),
                (ea[200] = W),
                (ea[201] = B),
                (ea[202] = tV),
                (ea[203] = H),
                (ea[204] = F),
                (ea[205] = q),
                (ea[206] = tK),
                (ea[207] = D),
                (ea[208] = V),
                (ea[209] = K),
                (ea[210] = J),
                (ea[211] = Z))
              : (Z = ea[211]),
            ea[212] !== tl || ea[213] !== t$ || ea[214] !== z || ea[215] !== tY || ea[216] !== U || ea[217] !== Z
              ? ((ee = (0, a.jsx)("div", {
                  ref: tl,
                  "data-new-slate-layout": t$,
                  className: z,
                  "data-app-shell-inline-page-header": tY,
                  onScroll: U,
                  children: Z,
                })),
                (ea[212] = tl),
                (ea[213] = t$),
                (ea[214] = z),
                (ea[215] = tY),
                (ea[216] = U),
                (ea[217] = Z),
                (ea[218] = ee))
              : (ee = ea[218]),
            ea[219] !== $ || ea[220] !== ee
              ? ((et = (0, a.jsx)("div", { className: $, children: ee })),
                (ea[219] = $),
                (ea[220] = ee),
                (ea[221] = et))
              : (et = ea[221]),
            ea[222] !== _ || ea[223] !== G || ea[224] !== et
              ? ((el = (0, a.jsxs)(g.bn, { ..._, children: [G, et] })),
                (ea[222] = _),
                (ea[223] = G),
                (ea[224] = et),
                (ea[225] = el))
              : (el = ea[225]),
            el
          )
        },
        uC: A,
      },
    )
  },
  DiyT(e, t, l) {
    l.d(t, { J1: () => x, gX: () => f, Tz: () => h })
    var a = l("ABep"),
      n = l("QosV"),
      r = l("on57"),
      s = l("W5pg"),
      i = l("K4Cx"),
      o = l("zd8w"),
      c = l("I7bK"),
      d = l("HgLj"),
      u = "title-x3JvHx",
      m = "titleContent-nEpGod",
      p = "toolbar-wpnXAF"
    function f(e) {
      let t,
        l,
        s,
        i,
        c,
        f,
        h,
        x,
        v,
        b,
        y,
        j,
        w = (0, n.c)(35),
        {
          ref: A,
          className: _,
          horizontalPaddingClassName: N,
          collapseOnScroll: S,
          presentation: C,
          expandSearchWhenWrapped: k,
          showDivider: T,
          sticky: P,
          wrapActionsAtNarrowWidth: I,
          title: E,
          actions: R,
          navigation: M,
        } = e,
        L = void 0 === N ? "px-panel" : N,
        O = void 0 !== S && S,
        G = (0, o.useRef)(null)
      w[0] !== A ? ((t = (0, d.P)(G, A)), (w[0] = A), (w[1] = t)) : (t = w[1])
      let $ = t,
        z = (0, o.useRef)(null)
      ;(w[2] !== O
        ? ((l = () => {
            let e = G.current,
              t = z.current
            if (!e || !t) return
            let l = new ResizeObserver(() => {
                let l = t.offsetLeft + parseFloat(getComputedStyle(t).paddingInlineStart)
                e.style.setProperty("--header-content-start", `${l}px`)
                let a = t.querySelector(`.${p}`)
                if (!O || null == a) return void e.removeAttribute("data-collapsible")
                let n = t.querySelector(`.${m}`)
                if (null == n) return
                let r = n.parentElement
                ;(e.style.setProperty(
                  "--header-collapse-offset",
                  `${(r?.offsetHeight ?? 0) + parseFloat(getComputedStyle(e).paddingTop)}px`,
                ),
                  e.toggleAttribute("data-collapsible", !0))
              }),
              a = () => {
                for (let a of (l.disconnect(), [e, t, ...t.querySelectorAll(`.${u}`)])) l.observe(a)
              },
              n = new MutationObserver(a)
            return (
              n.observe(t, { childList: !0, characterData: !0, subtree: !0 }),
              a(),
              () => {
                ;(l.disconnect(), n.disconnect())
              }
            )
          }),
          (s = [O]),
          (w[2] = O),
          (w[3] = l),
          (w[4] = s))
        : ((l = w[3]), (s = w[4])),
        (0, o.useLayoutEffect)(l, s))
      let U = O || void 0,
        W = (void 0 !== k && k) || void 0,
        B = T || void 0,
        H = void 0 === P || P || void 0,
        F = I || void 0,
        q = "directory" === (void 0 === C ? "default" : C) && "directoryShell-WYPHEM",
        Y = T ? "border-subtle" : "border-transparent"
      ;(w[5] !== q || w[6] !== Y
        ? ((i = (0, r.A)(
            "shell-yWQKe6",
            "not-in-data-settings-panel:[--spacing-token-button-composer:--spacing(8)] browser:not-in-data-settings-panel:[--spacing-token-button-composer:--spacing(9)]",
            q,
            Y,
          )),
          (w[5] = q),
          (w[6] = Y),
          (w[7] = i))
        : (i = w[7]),
        w[8] !== W || w[9] !== B || w[10] !== H || w[11] !== F || w[12] !== i || w[13] !== U
          ? ((c = {
              "data-scroll-collapse": U,
              "data-expand-search": W,
              "data-scrolled": B,
              "data-sticky": H,
              "data-wrap-actions": F,
              className: i,
            }),
            (w[8] = W),
            (w[9] = B),
            (w[10] = H),
            (w[11] = F),
            (w[12] = i),
            (w[13] = U),
            (w[14] = c))
          : (c = w[14]))
      let D = c
      ;(w[15] !== _ || w[16] !== L
        ? ((f = (0, r.A)("content-ymUHGU", "mx-auto w-full", L, _)), (w[15] = _), (w[16] = L), (w[17] = f))
        : (f = w[17]),
        w[18] !== E
          ? ((h =
              null == E
                ? null
                : (0, a.jsx)("div", { className: u, children: (0, a.jsx)("div", { className: m, children: E }) })),
            (w[18] = E),
            (w[19] = h))
          : (h = w[19]),
        w[20] !== R
          ? ((x = (0, a.jsx)("div", { className: "actions-hHaS5d", children: R })), (w[20] = R), (w[21] = x))
          : (x = w[21]),
        w[22] !== h || w[23] !== x
          ? ((v = (0, a.jsxs)("div", { className: "headerRow-4OaZM9", children: [h, x] })),
            (w[22] = h),
            (w[23] = x),
            (w[24] = v))
          : (v = w[24]),
        w[25] !== M
          ? ((b = (0, a.jsx)("div", { className: "navigation-AqGYXP", children: M })), (w[25] = M), (w[26] = b))
          : (b = w[26]),
        w[27] !== f || w[28] !== v || w[29] !== b
          ? ((y = (0, a.jsxs)("div", { ref: z, className: f, children: [v, b] })),
            (w[27] = f),
            (w[28] = v),
            (w[29] = b),
            (w[30] = y))
          : (y = w[30]))
      let V = y
      return (
        w[31] !== V || w[32] !== D || w[33] !== $
          ? ((j = (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(a.Fragment, { children: (0, a.jsx)(g, { ref: $, ...D, children: V }) }), null],
            })),
            (w[31] = V),
            (w[32] = D),
            (w[33] = $),
            (w[34] = j))
          : (j = w[34]),
        j
      )
    }
    function g(e) {
      let t,
        l,
        r,
        d = (0, n.c)(8),
        u = (0, o.useContext)(c.f$)
      d[0] !== u?.titleBarLeftInset || d[1] !== u?.titleBarLeftInset.get
        ? ((t = () => `${u?.titleBarLeftInset.get() ?? 0}px`),
          (d[0] = u?.titleBarLeftInset),
          (d[1] = u?.titleBarLeftInset.get),
          (d[2] = t))
        : (t = d[2])
      let m = (0, s.G)(t)
      d[3] !== m ? ((l = { "--app-shell-titlebar-left-inset": m }), (d[3] = m), (d[4] = l)) : (l = d[4])
      let p = l
      return (
        d[5] !== e || d[6] !== p
          ? ((r = (0, a.jsx)(i.P.div, { ...e, style: p })), (d[5] = e), (d[6] = p), (d[7] = r))
          : (r = d[7]),
        r
      )
    }
    function h(e) {
      let t,
        l,
        r,
        s,
        i,
        o = (0, n.c)(14),
        { filterTags: c, controls: d, search: u, actions: m, fixedSearchWidth: f } = e
      return (
        o[0] !== c
          ? ((t = (0, a.jsx)("div", {
              className: "filterTags-NLxoNh",
              children: (0, a.jsx)("div", { className: "filterTagsContent-VSk9tY", children: c }),
            })),
            (o[0] = c),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== d
          ? ((l = (0, a.jsx)("div", { className: "viewControls-ty6WO3", children: d })), (o[2] = d), (o[3] = l))
          : (l = o[3]),
        o[4] !== f || o[5] !== u
          ? ((r =
              null != u &&
              (0, a.jsx)("div", { className: "search-gLCdCn", "data-fixed-width": f || void 0, children: u })),
            (o[4] = f),
            (o[5] = u),
            (o[6] = r))
          : (r = o[6]),
        o[7] !== m
          ? ((s = (0, a.jsx)("div", { className: "pageActions-Q2Fd0B", children: m })), (o[7] = m), (o[8] = s))
          : (s = o[8]),
        o[9] !== t || o[10] !== l || o[11] !== r || o[12] !== s
          ? ((i = (0, a.jsxs)("div", { className: p, children: [t, l, r, s] })),
            (o[9] = t),
            (o[10] = l),
            (o[11] = r),
            (o[12] = s),
            (o[13] = i))
          : (i = o[13]),
        i
      )
    }
    function x(e) {
      let t,
        l,
        s = (0, n.c)(8),
        { children: i, className: o, fadeSize: c, showScrollFade: d, sticky: u } = e,
        m = void 0 === u || u,
        p =
          m &&
          "sticky z-30 after:pointer-events-none after:absolute after:top-full after:right-0 after:left-0 after:bg-linear-to-b after:from-surface after:to-transparent after:content-['']",
        f = m && ("compact" === (void 0 === c ? "default" : c) ? "after:h-2" : "after:h-8"),
        g = m && !(void 0 === d || d) && "after:hidden"
      return (
        s[0] !== o || s[1] !== p || s[2] !== f || s[3] !== g
          ? ((t = (0, r.A)("bg-surface", p, f, g, o)), (s[0] = o), (s[1] = p), (s[2] = f), (s[3] = g), (s[4] = t))
          : (t = s[4]),
        s[5] !== i || s[6] !== t
          ? ((l = (0, a.jsx)("div", { className: t, children: i })), (s[5] = i), (s[6] = t), (s[7] = l))
          : (l = s[7]),
        l
      )
    }
  },
  JEWd(e, t, l) {
    var a = l("ABep"),
      n = l("QosV"),
      r = l("yX0s"),
      s = l("gT86"),
      i = l("on57"),
      o = l("zd8w"),
      c = l("Sm6l"),
      d = l("IxWh"),
      u = l("HOLv"),
      m = l("bIvi")
    let p = {
      form: { color: "secondarySurface", size: "actionSm" },
      gallery: { color: "outlineSurface", size: "dialog" },
      compact: { color: "ghost", size: "compact" },
    }
    l.d(
      t,
      {},
      {
        i: function (e) {
          let t,
            l,
            f,
            g,
            h,
            x,
            v,
            b,
            y,
            j,
            w,
            A = (0, n.c)(38),
            {
              ariaInvalid: _,
              ariaLabel: N,
              backLabel: S,
              children: C,
              forwardLabel: k,
              header: T,
              layout: P,
              role: I,
              shouldUseReducedMotion: E,
            } = e,
            R = void 0 === P ? "form" : P,
            M = void 0 === I ? "group" : I
          A[0] !== C ? ((t = o.Children.count(C)), (A[0] = C), (A[1] = t)) : (t = A[1])
          let L = t,
            O = (0, o.useRef)(null),
            [G, $] = (0, o.useState)("ltr"),
            [z, U] = (0, o.useState)(!1),
            [W, B] = (0, o.useState)(!1)
          A[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (e) => {
                let t = "rtl" === getComputedStyle(e).direction ? "rtl" : "ltr"
                $(t)
                let { maximum: l, minimum: a } = (0, d.b)(e, t)
                "rtl" === t
                  ? (U(e.scrollLeft < l - 1), B(e.scrollLeft > a + 1))
                  : (U(e.scrollLeft > a + 1), B(e.scrollLeft < l - 1))
              }),
              (A[2] = l))
            : (l = A[2])
          let H = (0, m.K)(l),
            F = (e) => {
              if (((O.current = e), null == e || 0 === L || (H(e), "u" < typeof ResizeObserver))) return
              let t = () => H(e),
                l = new ResizeObserver(t),
                a = new MutationObserver(t)
              return (
                a.observe(e, { childList: !0 }),
                l.observe(e),
                null != e.firstElementChild && l.observe(e.firstElementChild),
                null != e.lastElementChild && l.observe(e.lastElementChild),
                () => {
                  ;(l.disconnect(), a.disconnect(), (O.current = null))
                }
              )
            },
            q = "form" === R && "pointer-events-none absolute inset-x-0 top-1 z-10 h-34 justify-between px-3",
            Y = "gallery" === R && "gap-2"
          A[3] !== q || A[4] !== Y
            ? ((f = (0, i.A)("flex items-center", q, Y)), (A[3] = q), (A[4] = Y), (A[5] = f))
            : (f = A[5])
          let D = [-1, 1].map((e) => {
            let t = -1 === e ? z : W,
              l = -1 === e ? S : k
            return (0, a.jsx)(
              c.$,
              {
                className: (0, i.A)("pointer-events-auto", "form" === R && !t && "invisible"),
                "aria-label": l,
                ...p[R],
                disabled: !t,
                onClick: () => {
                  let t
                  null != (t = O.current) &&
                    t.scrollTo({
                      left: (0, d.z)(t, e, "rtl" === getComputedStyle(t).direction ? "rtl" : "ltr"),
                      behavior: E ? "instant" : "smooth",
                    })
                },
                radius: "compact" === R ? void 0 : "full",
                title: l,
                uniform: !0,
                children: (0, a.jsx)(u.I, {
                  className: e === ("rtl" === G ? 1 : -1) ? "rotate-180" : void 0,
                  asset: "gallery" === R ? r.q : s.u,
                }),
              },
              e,
            )
          })
          A[6] !== f || A[7] !== D
            ? ((g = (0, a.jsx)("div", { className: f, children: D })), (A[6] = f), (A[7] = D), (A[8] = g))
            : (g = A[8])
          let V = g,
            K = "gallery" === R && "gap-4",
            Q = "compact" === R && "gap-2",
            X = "form" === R && "gap-1.5"
          ;(A[9] !== K || A[10] !== Q || A[11] !== X
            ? ((h = (0, i.A)("flex min-w-0 flex-col", K, Q, X)), (A[9] = K), (A[10] = Q), (A[11] = X), (A[12] = h))
            : (h = A[12]),
            A[13] !== T || A[14] !== R || A[15] !== V
              ? ((x =
                  null != T || "form" !== R
                    ? (0, a.jsxs)("div", {
                        className: (0, i.A)(
                          "flex min-w-0 items-center",
                          "form" === R && "gap-1 px-4 py-1.5",
                          "compact" === R && "gap-3",
                          "gallery" === R && "min-h-9 gap-3",
                        ),
                        children: [
                          (0, a.jsx)("div", { className: "min-w-0 flex-1", children: T }),
                          "form" !== R ? V : null,
                        ],
                      })
                    : null),
                (A[13] = T),
                (A[14] = R),
                (A[15] = V),
                (A[16] = x))
              : (x = A[16]))
          let J = "form" === R ? "snap-x snap-mandatory scroll-px-4 gap-4 px-4 py-1" : "-my-1.5 py-1.5",
            Z = "gallery" === R && "gap-3",
            ee = "compact" === R && "gap-2"
          A[17] !== J || A[18] !== Z || A[19] !== ee
            ? ((v = (0, i.A)("hide-scrollbar flex overflow-x-auto overscroll-x-contain", J, Z, ee)),
              (A[17] = J),
              (A[18] = Z),
              (A[19] = ee),
              (A[20] = v))
            : (v = A[20])
          let et = _ || void 0
          ;(A[21] !== H ? ((b = (e) => H(e.currentTarget)), (A[21] = H), (A[22] = b)) : (b = A[22]),
            A[23] !== N || A[24] !== C || A[25] !== M || A[26] !== F || A[27] !== v || A[28] !== et || A[29] !== b
              ? ((y = (0, a.jsx)("div", {
                  ref: F,
                  className: v,
                  "data-horizontal-scroll": !0,
                  role: M,
                  "aria-invalid": et,
                  "aria-label": N,
                  onScroll: b,
                  children: C,
                })),
                (A[23] = N),
                (A[24] = C),
                (A[25] = M),
                (A[26] = F),
                (A[27] = v),
                (A[28] = et),
                (A[29] = b),
                (A[30] = y))
              : (y = A[30]))
          let el = "form" === R ? V : null
          return (
            A[31] !== y || A[32] !== el
              ? ((j = (0, a.jsxs)("div", { className: "relative min-w-0", children: [y, el] })),
                (A[31] = y),
                (A[32] = el),
                (A[33] = j))
              : (j = A[33]),
            A[34] !== h || A[35] !== x || A[36] !== j
              ? ((w = (0, a.jsxs)("div", { className: h, children: [x, j] })),
                (A[34] = h),
                (A[35] = x),
                (A[36] = j),
                (A[37] = w))
              : (w = A[37]),
            w
          )
        },
      },
    )
  },
  pwVX(e, t, l) {
    l.r(t)
    var a = l("qmMi"),
      n = l("ASxG"),
      r = l("SPnB"),
      s = l("Kwur"),
      i = l("OWtl"),
      o = l("JYRT")
    let c = {
        staleTime: 3e5,
        refetchInterval: 3e5,
        refetchOnMount: "always",
        refetchOnWindowFocus: "always",
        refetchOnReconnect: "always",
      },
      d = (0, a.RD)(i.u, ({ get: e }) => {
        let t = e(r.chatGptAuthenticatedAccountId$),
          l = e(r.chatGptAuthenticatedUserId$)
        return {
          ...c,
          enabled: null != t && null != l,
          queryKey: ["chatgpt-images", "catalog", t, l],
          queryFn: ({ signal: e }) =>
            s.Request.safeGet("/images/init", {
              additionalHeaders: null == t ? void 0 : { "ChatGPT-Account-ID": t },
              signal: e,
            }),
        }
      }),
      u = (0, a.RD)(i.u, ({ get: e }) => {
        let t = e(r.chatGptAuthenticatedAccountId$),
          l = e(r.chatGptAuthenticatedUserId$)
        return {
          ...c,
          enabled: null != t && null != l,
          queryKey: ["chatgpt-images", "styles", t, l],
          queryFn: ({ signal: e }) =>
            s.Request.safeGet("/images/styles", {
              additionalHeaders: null == t ? void 0 : { "ChatGPT-Account-ID": t },
              parameters: { query: { include_image_suggestions: !0 } },
              signal: e,
            }),
        }
      }),
      m = (0, a.un)(i.u, ({ get: e }) => {
        let t = e(d),
          l = e(u)
        if (t.isPending || l.isPending) return
        let a = t.data?.groups
        if (t.isSuccess && null == a) return []
        let n = l.data?.image_suggestions
        if (null == a || null == n || 0 === n.length) return a
        let r = new Set(l.data?.styles?.map((e) => e.id)),
          s = a.find((e) => (null == e.kind || "prompt_collection" === e.kind) && e.items?.some((e) => r.has(e.id)))
        return a.map((e) => (e === s ? { ...e, items: n } : e))
      }),
      p = (0, a.un)(i.u, ({ get: e }) => {
        let t = e(o.X, "3939855767"),
          l = n.YOg(n.YjP()).safeParse(t?.value.section_order)
        return l.success ? l.data : void 0
      })
    l.d(
      t,
      {},
      {
        getCreateImageTemplates: function (e, t) {
          let l = [],
            a = t?.length
              ? [{ id: "image_suggestions", title: "", presentation: "image_card", action: {}, items: t }]
              : (e ?? void 0),
            n = new Set()
          for (let e of a ?? [])
            if (null == e.kind || "prompt_collection" === e.kind)
              for (let t of e.items ?? []) {
                if ("Templates" !== t.section || !t.prompt_text.trim() || n.has(t.id)) continue
                n.add(t.id)
                let a = t.image_url || t.image_variant_urls?.[0] || t.image_variants?.[0]
                l.push({ item: t, group: e, thumbnail: a ?? void 0 })
              }
          return l
        },
        imagesCatalogQuery$: d,
        imagesPromptGroups$: m,
        imagesSectionOrder$: p,
        imagesStylesQuery$: u,
      },
    )
  },
  IvMu(e, t, l) {
    var a = l("ABep"),
      n = l("QosV"),
      r = l("zd8w")
    function s(e) {
      let { id: t, content: l } = e
      return (0, a.jsx)("div", { className: "min-w-0", children: l }, t)
    }
    function i(e) {
      return e.offsetHeight
    }
    function o(e) {
      let { id: t } = e
      return t
    }
    l.d(
      t,
      {},
      {
        S: function (e) {
          let t,
            l,
            c,
            d,
            u,
            m = (0, n.c)(9),
            { items: p } = e,
            f = (0, r.useRef)(null)
          m[0] !== p ? ((t = JSON.stringify(p.map(o))), (m[0] = p), (m[1] = t)) : (t = m[1])
          let g = t
          return (
            m[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = () => {
                  let e,
                    t = f.current
                  if (null == t) return
                  let l = t.clientWidth,
                    a = () => {
                      if (((e = void 0), 0 === t.clientWidth)) return
                      let l = getComputedStyle(t),
                        a = Number(l.getPropertyValue("--masonry-columns")) || 1,
                        n = parseFloat(l.rowGap) || 0,
                        r = Array.from(t.querySelectorAll(":scope > div")),
                        s = r.map(i),
                        o = Array(a).fill(0),
                        c = s.map((e) => {
                          let t = o.indexOf(Math.min(...o)),
                            l = o[t]
                          return ((o[t] = o[t] + (e + n)), { column: t, top: l })
                        })
                      ;((t.style.height = `${Math.max(0, ...o) - (r.length > 0 ? n : 0)}px`),
                        r.forEach((e, t) => {
                          ;((e.style.gridColumn = `${c[t].column + 1}`),
                            (e.style.gridRow = "1"),
                            (e.style.transform = `translateY(${c[t].top}px)`))
                        }))
                    },
                    n = new ResizeObserver((n) => {
                      n.some((e) => {
                        if (e.target !== t) return !0
                        let a = e.contentRect.width
                        return a !== l && ((l = a), !0)
                      }) &&
                        null == e &&
                        (e = requestAnimationFrame(a))
                    })
                  for (let e of (n.observe(t), t.children)) n.observe(e)
                  return (
                    a(),
                    () => {
                      ;(n.disconnect(), null != e && cancelAnimationFrame(e))
                    }
                  )
                }),
                (m[2] = l))
              : (l = m[2]),
            m[3] !== g ? ((c = [g]), (m[3] = g), (m[4] = c)) : (c = m[4]),
            (0, r.useLayoutEffect)(l, c),
            m[5] !== p ? ((d = p.map(s)), (m[5] = p), (m[6] = d)) : (d = m[6]),
            m[7] !== d
              ? ((u = (0, a.jsx)("div", {
                  className: "@container",
                  children: (0, a.jsx)("div", {
                    ref: f,
                    className:
                      "relative grid grid-cols-[repeat(var(--masonry-columns),minmax(0,1fr))] items-start gap-3 [--masonry-columns:2] @2xl:[--masonry-columns:3] @5xl:[--masonry-columns:4] @7xl:[--masonry-columns:5]",
                    children: d,
                  }),
                })),
                (m[7] = d),
                (m[8] = u))
              : (u = m[8]),
            u
          )
        },
      },
    )
  },
  X3dz(e, t, l) {
    var a = l("kQNh"),
      n = l.n(a),
      r = l("DAFh"),
      s = l("EULo")
    l.d(
      t,
      {},
      {
        D: function (e, t, l, a = "prepend") {
          if ("" === e.trim()) return t
          let i = l ? e.match(RegExp(n()(l), "i")) : null
          if (i?.index != null) return `${e.slice(0, i.index)}${t}${e.slice(i.index + i[0].length)}`
          if ("append" === a)
            return `${e}

${t}`
          let o = 0
          for (let t of (0, s.C4)(e)) {
            if ((0 === o ? 0 !== t.start : !/^[ \t]*$/.test(e.slice(o, t.start))) || null == (0, r.NU)(t.path)) break
            o = t.end
          }
          if (0 === o)
            return `${t}

${e}`
          let c = e.slice(o).replace(/^[ \t]+/, "")
          return `${e.slice(0, o)} ${t}${
            /^(?:\s|&#x20;)*$/.test(c)
              ? ""
              : `

${c}`
          }`
        },
        S: function (e, t = []) {
          return [
            ...new Set(
              e.flatMap((e) =>
                null == e.kind || "prompt_collection" === e.kind ? (e.items?.map((e) => e.section || "") ?? []) : [],
              ),
            ),
          ].sort((e, l) => {
            let a = t.indexOf(e || "trending"),
              n = t.indexOf(l || "trending")
            return (-1 === a ? t.length : a) - (-1 === n ? t.length : n)
          })
        },
      },
    )
  },
  gkw0(e, t, l) {
    l.d(t, { Ru: () => I, z1: () => G })
    var a = l("ABep"),
      n = l("QosV"),
      r = l("wCYo")
    let s = (0, l("ESTr").a)({
      name: "arrow-right-up-trending-regular-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.25, y: 3.916504, width: 13.5, height: 8.166992 },
        visualBounds: { x: 1.25, y: 3.916504, width: 13.5, height: 8.166992 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.25, y: 3.916504, width: 13.5, height: 8.166992 },
        center: { x: 8, y: 8 },
        insets: { top: 3.916504, right: 1.25, bottom: 3.916504, left: 1.25 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 }, foreground: { x: 8, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M13.9003 3.9165C14.3694 3.91671 14.7497 4.29698 14.7499 4.76611V8.6665C14.7499 9.08072 14.4141 9.4165 13.9999 9.4165C13.5857 9.4165 13.2499 9.08072 13.2499 8.6665V6.47705L8.95793 10.77C8.6131 11.1146 8.05383 11.1144 7.70891 10.77L5.66594 8.72705L2.5302 11.8638C2.23733 12.1566 1.76254 12.1566 1.46965 11.8638C1.17677 11.5709 1.1768 11.0961 1.46965 10.8032L5.04192 7.23096L5.1093 7.17041C5.43325 6.9062 5.9007 6.90599 6.22453 7.17041L6.29094 7.23096L8.33293 9.27197L12.1894 5.4165H9.99992C9.58571 5.4165 9.24992 5.08072 9.24992 4.6665C9.24992 4.25229 9.58571 3.9165 9.99992 3.9165H13.9003Z" fill="currentColor"/>',
    })
    var i = l("on57"),
      o = l("qmMi"),
      c = l("zd8w"),
      d = l("Wf1j"),
      u = l("oyxz"),
      m = l("SPnB"),
      p = l("zVr5"),
      f = l("Sm6l"),
      g = l("HOLv"),
      h = l("bVeK"),
      x = l("FrrB"),
      v = l("DcH0"),
      b = l("BrP7"),
      y = l("yGJW"),
      j = l("OWtl"),
      w = l("bqtn"),
      A = l("PkPj")
    function _(e) {
      let t,
        l,
        r,
        s,
        o,
        d,
        m,
        p,
        g,
        x,
        v,
        y,
        j,
        _,
        N,
        S,
        C,
        k,
        T,
        P,
        I,
        E,
        R,
        M = (0, n.c)(65),
        { hidden: L, search: O, scrollContainerRef: G, trailingAction: $, ...z } = e,
        U = void 0 !== L && L,
        W = (0, c.useRef)(null),
        B = (0, c.useRef)(null),
        H = (0, c.useRef)(null),
        F = (0, c.useRef)(!1),
        [q, Y] = (0, c.useState)(!1),
        [D, V] = (0, c.useState)(!1),
        K = !U && (q || D),
        Q = (0, c.useId)(),
        X = (0, c.useId)(),
        J = z.tabs.find((e) => e.key === z.selectedKey)
      ;(M[0] !== U || M[1] !== G || M[2] !== Y
        ? ((t = () => {
            let e = G?.current,
              t = W.current
            if (U || null == e || null == t) return
            let l = new IntersectionObserver(
              (e) => {
                let [t] = e
                if (null == t) return
                let l = !t.isIntersecting && t.boundingClientRect.top < (t.rootBounds?.top ?? 0)
                ;(((l && B.current?.contains(document.activeElement)) ||
                  (!l && H.current === document.activeElement)) &&
                  (F.current = !0),
                  Y(l))
              },
              { root: e },
            )
            return (l.observe(t), () => l.disconnect())
          }),
          (M[0] = U),
          (M[1] = G),
          (M[2] = Y),
          (M[3] = t))
        : (t = M[3]),
        M[4] !== U || M[5] !== G ? ((l = [U, G]), (M[4] = U), (M[5] = G), (M[6] = l)) : (l = M[6]),
        (0, c.useEffect)(t, l),
        M[7] !== K
          ? ((r = () => {
              F.current &&
                ((F.current = !1),
                K
                  ? H.current?.focus({ preventScroll: !0 })
                  : B.current?.querySelector('[role="tab"][aria-selected="true"]')?.focus({ preventScroll: !0 }))
            }),
            (s = [K]),
            (M[7] = K),
            (M[8] = r),
            (M[9] = s))
          : ((r = M[8]), (s = M[9])),
        (0, c.useLayoutEffect)(r, s),
        M[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = function () {
              B.current?.querySelector('[role="tab"][aria-selected="true"]')?.focus({ preventScroll: !0 })
            }),
            (M[10] = o))
          : (o = M[10]))
      let Z = o
      M[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = (0, a.jsx)("span", {
            ref: W,
            className: "pointer-events-none absolute start-0 top-0 h-px w-px",
            "aria-hidden": !0,
          })),
          (M[11] = d))
        : (d = M[11])
      let ee = null == $ ? O : null,
        et = K ? "opacity-0" : "pointer-events-auto opacity-100"
      ;(M[12] !== et
        ? ((m = (0, i.A)("transition-opacity duration-moderate ease-basic motion-reduce:transition-none", et)),
          (M[12] = et),
          (M[13] = m))
        : (m = M[13]),
        M[14] !== z ? ((p = (0, a.jsx)(b.t, { ...z })), (M[14] = z), (M[15] = p)) : (p = M[15]),
        M[16] !== K || M[17] !== m || M[18] !== p
          ? ((g = (0, a.jsx)("div", { ref: B, className: m, inert: K, "aria-hidden": K, children: p })),
            (M[16] = K),
            (M[17] = m),
            (M[18] = p),
            (M[19] = g))
          : (g = M[19]))
      let el = K ? "pointer-events-auto opacity-100" : "opacity-0"
      M[20] !== el
        ? ((x = (0, i.A)(
            "absolute inset-y-0 start-0 max-w-full transition-opacity duration-moderate ease-basic motion-reduce:transition-none",
            el,
          )),
          (M[20] = el),
          (M[21] = x))
        : (x = M[21])
      let ea = !K,
        en = !K
      M[22] !== q
        ? ((v = (e) => {
            q || (e.preventDefault(), Z())
          }),
          (M[22] = q),
          (M[23] = v))
        : (v = M[23])
      let er = `${Q} ${X}`
      ;(M[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = (0, a.jsx)(u.A, { id: "imagesApp.promptSections.compact.label", defaultMessage: "Image category" })),
          (M[24] = y))
        : (y = M[24]),
        M[25] !== Q
          ? ((j = (0, a.jsx)("span", { id: Q, className: "sr-only", children: y })), (M[25] = Q), (M[26] = j))
          : (j = M[26]))
      let es = J?.ariaLabel ?? J?.name
      ;(M[27] !== X || M[28] !== es
        ? ((_ = (0, a.jsx)("span", { id: X, className: "truncate", children: es })),
          (M[27] = X),
          (M[28] = es),
          (M[29] = _))
        : (_ = M[29]),
        M[30] === Symbol.for("react.memo_cache_sentinel") ? ((N = (0, a.jsx)(h.Aq_, {})), (M[30] = N)) : (N = M[30]),
        M[31] !== er || M[32] !== j || M[33] !== _
          ? ((S = (0, a.jsxs)(f.$, {
              ref: H,
              className: "max-w-full",
              allowShrink: !0,
              color: "secondarySurface",
              size: "dialogAction",
              radius: "full",
              "aria-labelledby": er,
              children: [j, _, N],
            })),
            (M[31] = er),
            (M[32] = j),
            (M[33] = _),
            (M[34] = S))
          : (S = M[34]))
      let ei = z.selectedKey,
        eo = z.onSelect,
        ec = z.ariaLabel,
        ed = z.ariaLabelledBy
      ;(M[35] !== z
        ? ((C = z.tabs.map((e) =>
            (0, a.jsx)(
              w.ms.RadioItem,
              { value: e.key, "aria-label": e.ariaLabel, onSelect: () => z.onTabClick?.(e.key), children: e.name },
              e.key,
            ),
          )),
          (M[35] = z),
          (M[36] = C))
        : (C = M[36]),
        M[37] !== z.ariaLabel ||
        M[38] !== z.ariaLabelledBy ||
        M[39] !== z.onSelect ||
        M[40] !== z.selectedKey ||
        M[41] !== C
          ? ((k = (0, a.jsx)(w.ms.RadioGroup, {
              value: ei,
              onValueChange: eo,
              "aria-label": ec,
              "aria-labelledby": ed,
              children: C,
            })),
            (M[37] = z.ariaLabel),
            (M[38] = z.ariaLabelledBy),
            (M[39] = z.onSelect),
            (M[40] = z.selectedKey),
            (M[41] = C),
            (M[42] = k))
          : (k = M[42]),
        M[43] !== D || M[44] !== V || M[45] !== v || M[46] !== S || M[47] !== k
          ? ((T = (0, a.jsx)(w.Ab, {
              align: "start",
              open: D,
              onOpenChange: V,
              onCloseAutoFocus: v,
              triggerButton: S,
              children: k,
            })),
            (M[43] = D),
            (M[44] = V),
            (M[45] = v),
            (M[46] = S),
            (M[47] = k),
            (M[48] = T))
          : (T = M[48]),
        M[49] !== x || M[50] !== ea || M[51] !== en || M[52] !== T
          ? ((P = (0, a.jsx)("div", { className: x, inert: ea, "aria-hidden": en, children: T })),
            (M[49] = x),
            (M[50] = ea),
            (M[51] = en),
            (M[52] = T),
            (M[53] = P))
          : (P = M[53]),
        M[54] !== g || M[55] !== P
          ? ((I = (0, a.jsxs)("div", { className: "relative min-w-0 flex-1", children: [g, P] })),
            (M[54] = g),
            (M[55] = P),
            (M[56] = I))
          : (I = M[56]))
      let eu = null != $ ? O : null
      return (
        M[57] !== O || M[58] !== $
          ? ((E = null != $ ? (0, a.jsx)("div", { className: null != O ? "-ms-2" : void 0, children: $ }) : null),
            (M[57] = O),
            (M[58] = $),
            (M[59] = E))
          : (E = M[59]),
        M[60] !== I || M[61] !== eu || M[62] !== E || M[63] !== ee
          ? ((R = (0, a.jsxs)(a.Fragment, {
              children: [
                d,
                (0, a.jsx)("div", {
                  className: "pointer-events-none sticky top-4 z-20 min-w-0 select-none max-md:top-toolbar",
                  children: (0, a.jsxs)(A.uC, { inset: !1, children: [ee, I, eu, E] }),
                }),
              ],
            })),
            (M[60] = I),
            (M[61] = eu),
            (M[62] = E),
            (M[63] = ee),
            (M[64] = R))
          : (R = M[64]),
        R
      )
    }
    var N = l("pwVX"),
      S = l("IvMu"),
      C = l("X3dz"),
      k = l("okCa")
    function T(e) {
      let t,
        l,
        r,
        s,
        o,
        u = (0, n.c)(17),
        { value: m, onChange: p } = e,
        g = (0, d.A)(),
        x = (0, c.useId)(),
        v = (0, c.useRef)(!1),
        b = null != m
      u[0] !== g
        ? ((t = g.formatMessage({ id: "images.discover.search", defaultMessage: "Search contents" })),
          (u[0] = g),
          (u[1] = t))
        : (t = u[1])
      let y = t
      u[2] !== p
        ? ((l = function () {
            ;((v.current = !0), p(null))
          }),
          (u[2] = p),
          (u[3] = l))
        : (l = u[3])
      let j = l,
        w = b ? "w-72 max-w-1/2 overflow-hidden" : "w-9 shrink-0"
      return (
        u[4] !== w
          ? ((r = (0, i.A)(
              "pointer-events-auto min-w-0 transition-[width] duration-moderate ease-basic motion-reduce:transition-none",
              w,
            )),
            (u[4] = w),
            (u[5] = r))
          : (r = u[5]),
        u[6] !== j || u[7] !== x || u[8] !== g || u[9] !== y || u[10] !== p || u[11] !== b || u[12] !== m
          ? ((s = b
              ? (0, a.jsx)(k.s, {
                  id: x,
                  autoFocus: !0,
                  inputRole: "searchbox",
                  label: y,
                  placeholder: y,
                  searchQuery: m,
                  onSearchQueryChange: p,
                  isClearable: !1,
                  onKeyDown: (e) => {
                    "Escape" !== e.key || e.nativeEvent.isComposing || (e.preventDefault(), e.stopPropagation(), j())
                  },
                  trailingControl: (0, a.jsx)(f.$, {
                    color: "ghostSecondary",
                    size: "iconCircleSm",
                    radius: "full",
                    "aria-label": g.formatMessage({
                      id: "images.discover.closeSearch",
                      defaultMessage: "Close content search",
                    }),
                    onClick: j,
                    children: (0, a.jsx)(h.Gmf, {}),
                  }),
                })
              : (0, a.jsx)(f.$, {
                  ref: (e) => {
                    e && v.current && (e.focus({ preventScroll: !0 }), (v.current = !1))
                  },
                  color: "secondarySurface",
                  size: "iconCircleLg",
                  radius: "full",
                  "aria-label": y,
                  "aria-expanded": !1,
                  onClick: () => p(""),
                  children: (0, a.jsx)(h.zcw, {}),
                })),
            (u[6] = j),
            (u[7] = x),
            (u[8] = g),
            (u[9] = y),
            (u[10] = p),
            (u[11] = b),
            (u[12] = m),
            (u[13] = s))
          : (s = u[13]),
        u[14] !== r || u[15] !== s
          ? ((o = (0, a.jsx)("div", { className: r, children: s })), (u[14] = r), (u[15] = s), (u[16] = o))
          : (o = u[16]),
        o
      )
    }
    let P = ["aspect-[4/5]", "aspect-square", "aspect-[4/3]", "aspect-square", "aspect-[4/5]"]
    function I(e) {
      let t,
        l,
        r,
        s = (0, n.c)(26),
        {
          createAction: i,
          disabled: c,
          excludedPromptId: d,
          hidden: u,
          myImages: p,
          navigation: f,
          novaEnabled: g,
          onBeforeSelectPrompt: h,
          onSelectPrompt: x,
          onSelectDiscovery: v,
          scrollContainerRef: b,
          surface: y,
          trackImpressions: j,
          uploadCard: w,
        } = e,
        A = void 0 !== g && g,
        _ = null != (0, o.Ul)(m.chatGptAuthenticatedUserId$),
        S = (0, o.Ul)(N.imagesPromptGroups$),
        C = (0, o.Ul)(N.imagesSectionOrder$),
        { isError: k, refetch: T } = (0, o.Ul)(N.imagesCatalogQuery$),
        { isError: P, refetch: I } = (0, o.Ul)(N.imagesStylesQuery$),
        { data: R } = (0, o.Ul)(null) ?? {},
        M
      s[0] !== d || s[1] !== S || s[2] !== _
        ? ((t = S?.flatMap((e) => {
            let t = e.items?.filter(
              (t) => t.id !== d && (_ || (t.action ?? e.action).input_requirements?.source !== "sketch"),
            )
            return t?.length === 0 ? [] : [{ ...e, items: t }]
          })),
          (s[0] = d),
          (s[1] = S),
          (s[2] = _),
          (s[3] = t))
        : (t = s[3])
      let L = k || P
      return (
        s[4] !== T || s[5] !== I
          ? ((l = () => {
              Promise.all([T(), I()])
            }),
            (s[4] = T),
            (s[5] = I),
            (s[6] = l))
          : (l = s[6]),
        s[7] !== R ||
        s[8] !== i ||
        s[9] !== c ||
        s[10] !== u ||
        s[11] !== p ||
        s[12] !== f ||
        s[13] !== A ||
        s[14] !== h ||
        s[15] !== x ||
        s[16] !== b ||
        s[17] !== C ||
        s[18] !== y ||
        s[19] !== M ||
        s[20] !== t ||
        s[21] !== L ||
        s[22] !== l ||
        s[23] !== j ||
        s[24] !== w
          ? ((r = (0, a.jsx)(E, {
              categories: R,
              createAction: i,
              disabled: c,
              discovery: M,
              groups: t,
              hidden: u,
              myImages: p,
              navigation: f,
              novaEnabled: A,
              scrollContainerRef: b,
              isError: L,
              sectionOrder: C,
              surface: y,
              trackImpressions: j,
              uploadCard: w,
              onRetry: l,
              onBeforeSelectPrompt: h,
              onSelectPrompt: x,
            })),
            (s[7] = R),
            (s[8] = i),
            (s[9] = c),
            (s[10] = u),
            (s[11] = p),
            (s[12] = f),
            (s[13] = A),
            (s[14] = h),
            (s[15] = x),
            (s[16] = b),
            (s[17] = C),
            (s[18] = y),
            (s[19] = M),
            (s[20] = t),
            (s[21] = L),
            (s[22] = l),
            (s[23] = j),
            (s[24] = w),
            (s[25] = r))
          : (r = s[25]),
        r
      )
    }
    function E(e) {
      let t,
        l,
        s,
        m,
        p,
        g,
        h,
        w,
        A,
        N,
        k,
        P,
        I,
        E,
        $,
        z,
        U,
        W = (0, n.c)(73),
        {
          categories: B,
          createAction: H,
          disabled: F,
          discovery: q,
          groups: Y,
          hidden: D,
          isError: V,
          myImages: K,
          navigation: Q,
          novaEnabled: X,
          onBeforeSelectPrompt: J,
          onRetry: Z,
          onSelectPrompt: ee,
          sectionOrder: et,
          scrollContainerRef: el,
          surface: ea,
          trackImpressions: en,
          uploadCard: er,
        } = e,
        es = void 0 !== X && X,
        ei = (0, o.gh)(j.u),
        eo = (0, d.A)(),
        ec = (0, c.useId)()
      W[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { search: null }), (W[0] = t)) : (t = W[0])
      let [ed, eu] = (0, c.useState)(t),
        { section: em, search: ep } = Q?.value ?? ed,
        ef = Q?.onChange ?? eu
      W[1] !== Q || W[2] !== el
        ? ((l = () => {
            Q?.value.section === "my_images" && null == Q.value.search && el?.current?.scrollTo({ top: 0 })
          }),
          (W[1] = Q),
          (W[2] = el),
          (W[3] = l))
        : (l = W[3])
      let eg = Q?.value
      if (
        (W[4] !== el || W[5] !== eg ? ((s = [eg, el]), (W[4] = el), (W[5] = eg), (W[6] = s)) : (s = W[6]),
        (0, c.useEffect)(l, s),
        W[7] !== B ||
          W[8] !== H ||
          W[9] !== F ||
          W[10] !== q ||
          W[11] !== Y ||
          W[12] !== D ||
          W[13] !== eo ||
          W[14] !== V ||
          W[15] !== K ||
          W[16] !== es ||
          W[17] !== J ||
          W[18] !== Z ||
          W[19] !== ee ||
          W[20] !== ec ||
          W[21] !== ei ||
          W[22] !== el ||
          W[23] !== ep ||
          W[24] !== et ||
          W[25] !== em ||
          W[26] !== ef ||
          W[27] !== ea ||
          W[28] !== en ||
          W[29] !== er)
      ) {
        let e,
          t,
          l = null != q ? (ep?.trim() ?? "") : "",
          n = "" !== l,
          s = "home" === ea ? "grid-cols-4" : "grid-cols-5"
        W[42] !== s ? ((e = (0, i.A)("grid gap-2", s)), (W[42] = s), (W[43] = e)) : (e = W[43])
        let o = e,
          c = null == Y ? [] : (0, C.S)(Y, et),
          d = !n && null != K && "my_images" === em,
          j,
          z = null != j,
          U = null == Y && !V,
          Q = null != Y || null != K,
          X = null != em && c.includes(em) ? em : (c[0] ?? "")
        ;(d && (X = "my_images"), null == j || n || (X = `category:${j.category_id}`))
        let ed = z ? q?.(l, j?.category_id) : K,
          eu = es && "images" === ea && ("" === X || "Templates" === X || z),
          eg = c.some(O),
          eh = es && "images" === ea ? _ : b.t
        W[44] !== K || W[45] !== es || W[46] !== ec || W[47] !== d
          ? ((t =
              null == K
                ? []
                : [
                    {
                      key: "my_images",
                      panelId: d ? ec : void 0,
                      name: es
                        ? (0, a.jsx)(u.A, { id: "imagesApp.yourImages.tab", defaultMessage: "Your images" })
                        : (0, a.jsx)(u.A, { id: "imagesApp.myImages.tab", defaultMessage: "My images" }),
                    },
                  ]),
            (W[44] = K),
            (W[45] = es),
            (W[46] = ec),
            (W[47] = d),
            (W[48] = t))
          : (t = W[48])
        let ex = t,
          ev = Y?.flatMap((e) => {
            if ((null != e.kind && "prompt_collection" !== e.kind) || null == e.items) return []
            let t = e.items.filter((e) => !eg || (e.section || "") === X)
            return 0 === t.length ? [] : [{ ...e, items: t }]
          }),
          eb = es && "images" === ea && "relative",
          ey = eu ? "gap-7" : "gap-4"
        ;(W[49] !== eb || W[50] !== ey
          ? ((h = (0, i.A)("flex min-w-0 flex-col", eb, ey)), (W[49] = eb), (W[50] = ey), (W[51] = h))
          : (h = W[51]),
          (w = D),
          W[52] !== H || W[53] !== Q
            ? ((A = Q || null != H ? null : (0, a.jsx)("div", { className: "h-9", "aria-hidden": !0 })),
              (W[52] = H),
              (W[53] = Q),
              (W[54] = A))
            : (A = W[54]),
          W[55] !== H || W[56] !== Q
            ? ((N = Q || null == H ? null : (0, a.jsx)("div", { className: "flex min-h-9 justify-end", children: H })),
              (W[55] = H),
              (W[56] = Q),
              (W[57] = N))
            : (N = W[57]),
          (k = Q
            ? (0, a.jsx)(eh, {
                trailingAction: H,
                search:
                  null != q
                    ? (0, a.jsx)(T, {
                        value: ep,
                        onChange: (e) => {
                          ;(ef({ section: em, search: e }),
                            (e?.trim() ?? "") !== l && el?.current?.scrollTo({ top: 0 }))
                        },
                      })
                    : void 0,
                scrollContainerRef: el,
                ariaLabel: eo.formatMessage({
                  id: "imagesApp.promptSections.tabs.ariaLabel",
                  defaultMessage: "Image prompt categories",
                }),
                variant: "browse",
                scrollable: !0,
                selectedKey: X,
                onSelect: (e) => {
                  if (e === X && !n) {
                    null != ep && ef({ section: em, search: null })
                    return
                  }
                  ;(ef({ section: U && "" === e ? null : e, search: null }),
                    (U && "" === e) ||
                      (0, y.yy)(ei, r.VX, {
                        sectionId: e || "trending",
                        surface:
                          "home" === ea
                            ? "CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_CHATGPT_HOME"
                            : "CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_IMAGES",
                      }))
                },
                tabs: [
                  ...(0 === c.length ? [""] : c).map((e) => {
                    let t = e === X ? ec : void 0
                    return U
                      ? {
                          key: e,
                          panelId: t,
                          ariaLabel: eo.formatMessage({
                            id: "imagesApp.promptSections.loading.ariaLabel",
                            defaultMessage: "Loading image categories",
                          }),
                          name: (0, a.jsx)(v._, { className: "h-4 w-20 rounded-full", "aria-hidden": !0 }),
                        }
                      : {
                          key: e,
                          panelId: t,
                          name:
                            "Templates" === e
                              ? (0, a.jsx)(u.A, {
                                  id: "imagesApp.promptSections.tab.templates",
                                  defaultMessage: "Templates",
                                })
                              : e ||
                                (0, a.jsx)(u.A, {
                                  id: "imagesApp.promptSections.tab.trending",
                                  defaultMessage: "Trending",
                                }),
                        }
                  }),
                  ...ex,
                ],
              })
            : null),
          (P = ec),
          (I = "flex min-w-0 flex-col gap-8"),
          (E = Q ? "tabpanel" : void 0),
          ($ = Q ? `${ec}-tab` : void 0),
          (m = !z && !d && null == Y && !V),
          (p = Q ? 0 : void 0),
          (g =
            z || d
              ? ed
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    V
                      ? (0, a.jsxs)("div", {
                          role: "alert",
                          className: "flex flex-wrap items-center gap-2 text-sm text-secondary",
                          children: [
                            (0, a.jsx)(u.A, {
                              id: "images.catalog.loadError",
                              defaultMessage: "Some image prompts couldn't be loaded",
                            }),
                            (0, a.jsx)(f.$, {
                              color: "secondary",
                              onClick: Z,
                              children: (0, a.jsx)(u.A, { id: "images.catalog.retry", defaultMessage: "Retry" }),
                            }),
                          ],
                        })
                      : null,
                    null == Y && !V && eu
                      ? (0, a.jsx)("div", {
                          "aria-hidden": !0,
                          children: (0, a.jsx)(S.S, { items: Array.from({ length: 15 }, L) }),
                        })
                      : null,
                    null != Y || V || eu
                      ? null
                      : (0, a.jsx)("div", {
                          className: o,
                          "aria-hidden": !0,
                          children: Array.from({ length: "home" === ea ? 12 : 15 }, M),
                        }),
                    ev?.length !== 0 || V
                      ? null
                      : (0, a.jsx)(x.A, {
                          title: (0, a.jsx)(u.A, {
                            id: "images.catalog.empty",
                            defaultMessage: "Start with your own idea",
                          }),
                          description: (0, a.jsx)(u.A, {
                            id: "images.catalog.emptyDescription",
                            defaultMessage: "Describe the image you want to create",
                          }),
                        }),
                    ev?.map((e, t) => {
                      let l = "image_card" === e.presentation || "portrait" === e.presentation,
                        n = e.items.map((t, n) => ({
                          id: t.id,
                          content: (0, a.jsx)(
                            G,
                            {
                              disabled: F,
                              item: t,
                              group: e,
                              showHoverTitle: eu && l,
                              preserveAspectRatio: eu && l,
                              masonryCropIndex: eu && l ? n : void 0,
                              visible: !D,
                              surface: ea,
                              trackImpressions: en,
                              onBeforeSelect: J,
                              onSelect: (l) => ee(t, e, l),
                            },
                            t.id,
                          ),
                        }))
                      return (0, a.jsxs)(
                        "section",
                        {
                          className: "flex min-w-0 flex-col gap-4",
                          "aria-label": e.title,
                          children: [
                            t > 0 && e.title
                              ? (0, a.jsx)("h2", {
                                  className: "text-base font-medium text-default select-none",
                                  children: e.title,
                                })
                              : null,
                            0 !== t || null == er || l ? null : (0, a.jsx)("div", { className: o, children: er }),
                            eu && l
                              ? (0, a.jsx)(S.S, { items: n })
                              : (0, a.jsxs)("div", {
                                  className: (0, i.A)(
                                    "text_pill" === e.presentation && "flex flex-col items-start gap-2",
                                    "icon_pill" === e.presentation && "grid grid-cols-2 gap-4",
                                    l && o,
                                  ),
                                  children: [0 === t && l ? er : null, n.map(R)],
                                }),
                          ],
                        },
                        e.id,
                      )
                    }),
                  ],
                })),
          (W[7] = B),
          (W[8] = H),
          (W[9] = F),
          (W[10] = q),
          (W[11] = Y),
          (W[12] = D),
          (W[13] = eo),
          (W[14] = V),
          (W[15] = K),
          (W[16] = es),
          (W[17] = J),
          (W[18] = Z),
          (W[19] = ee),
          (W[20] = ec),
          (W[21] = ei),
          (W[22] = el),
          (W[23] = ep),
          (W[24] = et),
          (W[25] = em),
          (W[26] = ef),
          (W[27] = ea),
          (W[28] = en),
          (W[29] = er),
          (W[30] = m),
          (W[31] = p),
          (W[32] = g),
          (W[33] = h),
          (W[34] = w),
          (W[35] = A),
          (W[36] = N),
          (W[37] = k),
          (W[38] = P),
          (W[39] = I),
          (W[40] = E),
          (W[41] = $))
      } else
        ((m = W[30]),
          (p = W[31]),
          (g = W[32]),
          (h = W[33]),
          (w = W[34]),
          (A = W[35]),
          (N = W[36]),
          (k = W[37]),
          (P = W[38]),
          (I = W[39]),
          (E = W[40]),
          ($ = W[41]))
      return (
        W[58] !== m || W[59] !== p || W[60] !== g || W[61] !== P || W[62] !== I || W[63] !== E || W[64] !== $
          ? ((z = (0, a.jsx)("div", {
              id: P,
              className: I,
              role: E,
              "aria-labelledby": $,
              "aria-busy": m,
              tabIndex: p,
              children: g,
            })),
            (W[58] = m),
            (W[59] = p),
            (W[60] = g),
            (W[61] = P),
            (W[62] = I),
            (W[63] = E),
            (W[64] = $),
            (W[65] = z))
          : (z = W[65]),
        W[66] !== h || W[67] !== w || W[68] !== A || W[69] !== N || W[70] !== k || W[71] !== z
          ? ((U = (0, a.jsxs)("div", { className: h, hidden: w, children: [A, N, k, z] })),
            (W[66] = h),
            (W[67] = w),
            (W[68] = A),
            (W[69] = N),
            (W[70] = k),
            (W[71] = z),
            (W[72] = U))
          : (U = W[72]),
        U
      )
    }
    function R(e) {
      let { content: t } = e
      return t
    }
    function M(e, t) {
      return (0, a.jsx)(v._, { className: "aspect-[4/5] rounded-2xl" }, t)
    }
    function L(e, t) {
      return { id: String(t), content: (0, a.jsx)(v._, { className: (0, i.A)("rounded-2xl", P[t % P.length]) }) }
    }
    function O(e) {
      return !!e
    }
    function G(e) {
      let t,
        l,
        r,
        d,
        u,
        m,
        h,
        x,
        v,
        b,
        y,
        w,
        A,
        _,
        N = (0, n.c)(71),
        {
          disabled: S,
          item: C,
          group: k,
          masonryCropIndex: T,
          onBeforeSelect: I,
          onSelect: E,
          presentation: R,
          preserveAspectRatio: M,
          showHoverTitle: L,
          surface: O,
          trackImpressions: G,
          visible: W,
        } = e,
        B = void 0 !== M && M,
        H = void 0 !== L && L,
        F = void 0 === O ? "images" : O,
        q = (0, o.gh)(j.u),
        Y = (0, c.useRef)(null),
        D = R ?? k.presentation,
        V = null != T ? P[T % P.length] : void 0,
        K = (0, c.useRef)(!1)
      N[0] !== k || N[1] !== C || N[2] !== q || N[3] !== F || N[4] !== G
        ? ((t = () => {
            ;(G ?? "home" === F) && !K.current && ((K.current = !0), (0, p.c)(q, "impression", C, k, F))
          }),
          (N[0] = k),
          (N[1] = C),
          (N[2] = q),
          (N[3] = F),
          (N[4] = G),
          (N[5] = t))
        : (t = N[5])
      let Q = (0, c.useEffectEvent)(t)
      ;(N[6] !== Q || N[7] !== W
        ? ((l = () => {
            W && Q()
          }),
          (N[6] = Q),
          (N[7] = W),
          (N[8] = l))
        : (l = N[8]),
        N[9] !== F || N[10] !== G || N[11] !== W
          ? ((r = [F, G, W]), (N[9] = F), (N[10] = G), (N[11] = W), (N[12] = r))
          : (r = N[12]),
        (0, c.useEffect)(l, r),
        N[13] !== k || N[14] !== C || N[15] !== I || N[16] !== E || N[17] !== q || N[18] !== F
          ? ((d = () => {
              I?.() !== !1 && ((0, p.c)(q, "selected", C, k, F), E(Y.current))
            }),
            (N[13] = k),
            (N[14] = C),
            (N[15] = I),
            (N[16] = E),
            (N[17] = q),
            (N[18] = F),
            (N[19] = d))
          : (d = N[19]))
      let X = d
      ;(N[20] !== C.image_alt || N[21] !== C.title
        ? ((u = new Set([C.title, C.image_alt].filter(z))), (N[20] = C.image_alt), (N[21] = C.title), (N[22] = u))
        : (u = N[22]),
        N[23] !== u ? ((m = [...u]), (N[23] = u), (N[24] = m)) : (m = N[24]))
      let J = m.join(", ")
      ;(N[25] !== C.image_variant_urls
        ? ((h = C.image_variant_urls ?? []), (N[25] = C.image_variant_urls), (N[26] = h))
        : (h = N[26]),
        N[27] !== C.image_variants
          ? ((x = C.image_variants ?? []), (N[27] = C.image_variants), (N[28] = x))
          : (x = N[28]),
        N[29] !== C.image_url || N[30] !== h || N[31] !== x
          ? ((v = [C.image_url, ...h, ...x].find($)), (N[29] = C.image_url), (N[30] = h), (N[31] = x), (N[32] = v))
          : (v = N[32]))
      let Z = v
      if ("text_pill" === D) {
        let e, t
        return (
          N[33] !== C.title
            ? ((e = (0, a.jsx)("span", { className: "truncate", children: C.title })), (N[33] = C.title), (N[34] = e))
            : (e = N[34]),
          N[35] !== S || N[36] !== X || N[37] !== J || N[38] !== e
            ? ((t = (0, a.jsx)(f.$, {
                className: "max-w-full",
                color: "secondary",
                radius: "full",
                size: "medium",
                allowShrink: !0,
                "aria-label": J,
                disabled: S,
                onClick: X,
                children: e,
              })),
              (N[35] = S),
              (N[36] = X),
              (N[37] = J),
              (N[38] = e),
              (N[39] = t))
            : (t = N[39]),
          t
        )
      }
      if ("icon_pill" === D) {
        let e, t, l
        return (
          N[40] !== Z
            ? ((e = (0, a.jsx)("div", {
                className: "size-12 shrink-0 overflow-hidden rounded-xl bg-surface-secondary",
                children: (0, a.jsx)(U, { ref: Y, src: Z }, Z),
              })),
              (N[40] = Z),
              (N[41] = e))
            : (e = N[41]),
          N[42] !== C.title
            ? ((t = (0, a.jsx)("span", {
                className: "line-clamp-2 text-sm text-secondary group-hover/use:text-default",
                children: C.title,
              })),
              (N[42] = C.title),
              (N[43] = t))
            : (t = N[43]),
          N[44] !== S || N[45] !== X || N[46] !== J || N[47] !== e || N[48] !== t
            ? ((l = (0, a.jsxs)("button", {
                type: "button",
                className:
                  "group/use flex w-full cursor-interaction items-center gap-3 rounded-xl text-start outline-none select-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring",
                "aria-label": J,
                disabled: S,
                onClick: X,
                children: [e, t],
              })),
              (N[44] = S),
              (N[45] = X),
              (N[46] = J),
              (N[47] = e),
              (N[48] = t),
              (N[49] = l))
            : (l = N[49]),
          l
        )
      }
      let ee = V ?? (!B && "aspect-[4/5]")
      N[50] !== ee
        ? ((b = (0, i.A)(
            "group/use relative flex w-full cursor-interaction flex-col overflow-hidden rounded-2xl bg-surface-secondary text-start outline-none select-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring",
            ee,
          )),
          (N[50] = ee),
          (N[51] = b))
        : (b = N[51])
      let et = B && null == V
      ;(N[52] !== Z || N[53] !== et
        ? ((y = (0, a.jsx)(U, { ref: Y, src: Z, preserveAspectRatio: et }, Z)), (N[52] = Z), (N[53] = et), (N[54] = y))
        : (y = N[54]),
        N[55] !== C.section || N[56] !== C.title || N[57] !== H
          ? ((w = H
              ? null
              : (0, a.jsx)("div", {
                  className: (0, i.A)(
                    "pointer-events-none absolute inset-x-0 bottom-0 flex min-h-14 items-end bg-linear-to-t to-transparent px-3 pt-8 pb-3 text-media-foreground",
                    C.section
                      ? "from-media-background/20 via-media-background/10"
                      : "from-media-background/80 via-media-background/30",
                  ),
                  children: (0, a.jsx)("span", {
                    className:
                      "line-clamp-2 w-full text-start text-sm leading-5 font-medium wrap-break-word [text-box-trim:trim-both]",
                    children: C.title,
                  }),
                })),
            (N[55] = C.section),
            (N[56] = C.title),
            (N[57] = H),
            (N[58] = w))
          : (w = N[58]),
        N[59] !== S || N[60] !== X || N[61] !== J || N[62] !== b || N[63] !== y || N[64] !== w
          ? ((A = (0, a.jsxs)("button", {
              type: "button",
              className: b,
              "aria-label": J,
              disabled: S,
              onClick: X,
              children: [y, w],
            })),
            (N[59] = S),
            (N[60] = X),
            (N[61] = J),
            (N[62] = b),
            (N[63] = y),
            (N[64] = w),
            (N[65] = A))
          : (A = N[65]))
      let el = A
      return (
        N[66] !== el || N[67] !== C.section || N[68] !== C.title || N[69] !== H
          ? ((_ = H
              ? (0, a.jsxs)("div", {
                  className: "group/use relative",
                  children: [
                    el,
                    (0, a.jsx)("div", {
                      "aria-hidden": !0,
                      className:
                        "pointer-events-none absolute inset-0 rounded-2xl bg-media-background/20 opacity-0 group-focus-within/use:opacity-100 group-hover/use:opacity-100",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-1.5 p-4 text-media-foreground group-focus-within/use:opacity-100 group-hover/use:opacity-100 [@media(hover:hover)]:opacity-0",
                      children: [
                        C.section ? null : (0, a.jsx)(g.I, { asset: s, className: "shrink-0" }),
                        (0, a.jsx)("span", {
                          className: "line-clamp-2 min-w-0 text-sm leading-5 font-medium wrap-break-word select-none",
                          children: C.title,
                        }),
                      ],
                    }),
                  ],
                })
              : el),
            (N[66] = el),
            (N[67] = C.section),
            (N[68] = C.title),
            (N[69] = H),
            (N[70] = _))
          : (_ = N[70]),
        _
      )
    }
    function $(e) {
      return e?.trim()
    }
    function z(e) {
      return !!e
    }
    function U(e) {
      let t,
        l = (0, n.c)(5),
        { ref: r, preserveAspectRatio: s, src: o } = e,
        d = void 0 !== s && s,
        [u, m] = (0, c.useState)(!1)
      return (
        l[0] !== u || l[1] !== d || l[2] !== r || l[3] !== o
          ? ((t =
              o && !u
                ? (0, a.jsx)("img", {
                    ref: r,
                    className: d ? "aspect-[auto_4/3] h-auto w-full object-contain" : "h-full w-full object-cover",
                    src: o,
                    alt: "",
                    loading: "lazy",
                    draggable: !1,
                    onError: () => m(!0),
                  })
                : (0, a.jsx)("div", {
                    className: (0, i.A)(
                      "flex w-full items-center justify-center text-tertiary",
                      d ? "aspect-[4/3]" : "h-full",
                    ),
                    children: (0, a.jsx)(h.pYT, {}),
                  })),
            (l[0] = u),
            (l[1] = d),
            (l[2] = r),
            (l[3] = o),
            (l[4] = t))
          : (t = l[4]),
        t
      )
    }
  },
  jpR2(e, t, l) {
    var a = l("ABep"),
      n = l("QosV"),
      r = l("on57"),
      s = l("oyxz"),
      i = l("bVeK")
    l.d(
      t,
      {},
      {
        U: function (e) {
          let t,
            l,
            o,
            c,
            d = (0, n.c)(8),
            { disabled: u, layout: m, onUpload: p } = e,
            f = "carousel" === m ? "w-[calc((100%-3rem)/5)] min-w-32 shrink-0 snap-start" : "w-full"
          return (
            d[0] !== f
              ? ((t = (0, r.A)(
                  "relative flex aspect-[4/5] cursor-interaction items-center justify-center rounded-3xl bg-secondary-ghost-hover text-secondary outline-none select-none focus-visible:outline-2 focus-visible:outline-ring enabled:hover:bg-background-secondary-ghost-focus disabled:cursor-default disabled:opacity-40",
                  f,
                )),
                (d[0] = f),
                (d[1] = t))
              : (t = d[1]),
            d[2] === Symbol.for("react.memo_cache_sentinel") ? ((l = (0, a.jsx)(i.ONy, {})), (d[2] = l)) : (l = d[2]),
            d[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((o = (0, a.jsx)("span", {
                  className: "absolute inset-x-0 bottom-0 p-3 text-start text-sm leading-5",
                  children: (0, a.jsx)(s.A, { id: "images.reference.upload", defaultMessage: "Upload a photo" }),
                })),
                (d[3] = o))
              : (o = d[3]),
            d[4] !== u || d[5] !== p || d[6] !== t
              ? ((c = (0, a.jsxs)("button", {
                  type: "button",
                  className: t,
                  disabled: u,
                  onClick: p,
                  children: [l, o],
                })),
                (d[4] = u),
                (d[5] = p),
                (d[6] = t),
                (d[7] = c))
              : (c = d[7]),
            c
          )
        },
      },
    )
  },
  Bvpc(e, t, l) {
    var a = l("ABep"),
      n = l("QosV"),
      r = l("on57"),
      s = l("mEbU"),
      i = l("qmMi"),
      o = l("zd8w"),
      c = l("Wf1j"),
      d = l("oyxz"),
      u = l("SPnB"),
      m = l("Ow2S"),
      p = l("WLtw"),
      f = l("ROi8"),
      g = l("Sm6l"),
      h = l("bVeK"),
      x = l("DcH0"),
      v = l("JEWd"),
      b = l("OWtl"),
      y = l("eGPX"),
      j = l("zHp1"),
      w = l("jpR2")
    function A(e) {
      let t,
        l,
        r,
        c,
        d,
        m,
        f,
        g = (0, n.c)(17),
        { image: v } = e,
        b = (0, i.Ul)(u.chatGptAuthenticatedAccountId$),
        y = (0, i.Ul)(u.chatGptAuthenticatedUserId$),
        w = (0, o.useRef)(null)
      g[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { once: !0 }), (g[0] = t)) : (t = g[0])
      let A = (0, s.W)(w, t),
        _ = b ?? "unscoped",
        N = y ?? "unscoped"
      ;(g[1] !== _ || g[2] !== N
        ? ((l = ["chatgpt-images-recent-upload", _, N]), (g[1] = _), (g[2] = N), (g[3] = l))
        : (l = g[3]),
        g[4] !== v.download_url
          ? ((r = async () => ({ kind: "available", ...(0, p.LX)({ download_url: v.download_url }) })),
            (g[4] = v.download_url),
            (g[5] = r))
          : (r = g[5]),
        g[6] !== l || g[7] !== r
          ? ((c = { cacheKey: l, resolveAsset: r }), (g[6] = l), (g[7] = r), (g[8] = c))
          : (c = g[8]),
        g[9] !== A ? ((d = { enabled: A }), (g[9] = A), (g[10] = d)) : (d = g[10]))
      let { src: S, isError: C } = (0, j.vM)(v.file_id, c, d)
      g[11] !== C
        ? ((m = C ? (0, a.jsx)(h.pYT, {}) : (0, a.jsx)(x._, { className: "size-full" })), (g[11] = C), (g[12] = m))
        : (m = g[12])
      let k = m
      if (null != S) {
        let e
        ;(g[13] !== S
          ? ((e = (0, a.jsx)("img", {
              className: "absolute inset-0 size-full object-cover",
              src: S,
              alt: "",
              loading: "lazy",
            })),
            (g[13] = S),
            (g[14] = e))
          : (e = g[14]),
          (k = e))
      }
      return (
        g[15] !== k
          ? ((f = (0, a.jsx)("div", { ref: w, className: "flex size-full items-center justify-center", children: k })),
            (g[15] = k),
            (g[16] = f))
          : (f = g[16]),
        f
      )
    }
    l.d(
      t,
      {},
      {
        $: A,
        h: function (e) {
          let t,
            l,
            s,
            o,
            p,
            j,
            _ = (0, n.c)(37),
            {
              conversationId: N,
              disabled: S,
              uploadDisabled: C,
              layout: k,
              signal: T,
              onBack: P,
              onUpload: I,
              onRecentImageSelected: E,
            } = e,
            R = void 0 === k ? "carousel" : k,
            M = (0, i.gh)(b.u),
            L = (0, c.A)(),
            O = (0, i.Ul)(u.chatGptAuthenticatedAccountId$),
            G = (0, i.Ul)(u.chatGptAuthenticatedUserId$),
            $ = (0, i.Ul)(y.x),
            { data: z, isPending: U, isError: W, refetch: B } = (0, i._U)(f.U, !0),
            H = (0, i._U)(m.sk, N)
          _[0] !== O ||
          _[1] !== N ||
          _[2] !== S ||
          _[3] !== L ||
          _[4] !== R ||
          _[5] !== E ||
          _[6] !== M ||
          _[7] !== T?.aborted ||
          _[8] !== G
            ? ((t = (e, t) => {
                let l = `image-reference:${e.file_id}:`,
                  a = `${l}${crypto.randomUUID()}`,
                  n = M.get(m.sk, N)
                if (
                  S ||
                  T?.aborted ||
                  null == O ||
                  null == G ||
                  O !== M.get(u.chatGptAuthenticatedAccountId$) ||
                  G !== M.get(u.chatGptAuthenticatedUserId$)
                )
                  return
                let r = n.find((t) => "ready" === t.status && t.id === e.file_id)
                if ("recents" === R && null != r) return void E(r.uploadId)
                if (
                  n.some(
                    (t) =>
                      ("ready" === t.status && t.id === e.file_id) ||
                      (t.uploadId.startsWith(l) && "uploading" === t.status),
                  )
                )
                  return
                let s = L.formatMessage(
                  { id: "images.reference.photoName", defaultMessage: "Photo {position}" },
                  { position: t + 1 },
                )
                ;(M.set(m.sk, N, (t) => [
                  ...t.filter((e) => !e.uploadId.startsWith(l)),
                  { ...(0, f.W)(e, s), uploadId: a, status: "ready" },
                ]),
                  E(a))
              }),
              (_[0] = O),
              (_[1] = N),
              (_[2] = S),
              (_[3] = L),
              (_[4] = R),
              (_[5] = E),
              (_[6] = M),
              (_[7] = T?.aborted),
              (_[8] = G),
              (_[9] = t))
            : (t = _[9])
          let F = t
          if ("recents" === R && !U && !W && z?.items.length === 0) return null
          _[10] !== z ||
          _[11] !== S ||
          _[12] !== L ||
          _[13] !== U ||
          _[14] !== R ||
          _[15] !== F ||
          _[16] !== $ ||
          _[17] !== H
            ? ((l = U
                ? Array.from({ length: 4 }, (e, t) =>
                    (0, a.jsx)(
                      x._,
                      {
                        className: (0, r.A)(
                          "recents" === R
                            ? "aspect-square w-18 min-w-0 rounded-xl"
                            : "aspect-[4/5] w-[calc((100%-3rem)/5)] min-w-32 shrink-0 rounded-2xl",
                          "recents" === R && 3 === t && "hidden sm:block",
                        ),
                      },
                      t,
                    ),
                  )
                : ("recents" === R ? z?.items.slice(0, 4) : z?.items)?.map((e, t) => {
                    let l = H.find(
                        (t) =>
                          t.uploadId.startsWith(`image-reference:${e.file_id}:`) ||
                          ("ready" === t.status && t.id === e.file_id),
                      ),
                      n = L.formatMessage(
                        {
                          id: "imagegen.composer.suggestions.upload.aria_label",
                          defaultMessage: "Recent upload {index}",
                        },
                        { index: t + 1 },
                      )
                    return (0, a.jsxs)(
                      "div",
                      {
                        className: (0, r.A)(
                          "flex-col gap-1",
                          "recents" === R ? "w-18 min-w-0" : "w-[calc((100%-3rem)/5)] min-w-32 shrink-0 snap-start",
                          "recents" === R && 3 === t ? "hidden sm:flex" : "flex",
                        ),
                        children: [
                          (0, a.jsx)("button", {
                            type: "button",
                            className: (0, r.A)(
                              "relative flex cursor-interaction items-center justify-center overflow-hidden bg-surface-secondary text-tertiary outline-none focus-visible:outline-2 focus-visible:outline-ring disabled:cursor-default",
                              "recents" === R ? "aspect-square w-full rounded-xl" : "aspect-[4/5] w-full rounded-2xl",
                              "recents" === R &&
                                !$ &&
                                "transition-transform duration-basic ease-enter-snappy enabled:hover:scale-105 enabled:active:scale-95",
                            ),
                            "aria-label": n,
                            disabled:
                              S || (null != l && "error" !== l.status && ("recents" !== R || "ready" !== l.status)),
                            onClick: () => F(e, t),
                            children: (0, a.jsx)(A, { image: e }),
                          }),
                          l?.status === "error"
                            ? (0, a.jsx)("span", {
                                role: "alert",
                                className: "text-xs text-secondary",
                                children: (0, a.jsx)(d.A, {
                                  id: "images.reference.photoError",
                                  defaultMessage: "Couldn't attach photo",
                                }),
                              })
                            : null,
                        ],
                      },
                      e.file_id,
                    )
                  })),
              (_[10] = z),
              (_[11] = S),
              (_[12] = L),
              (_[13] = U),
              (_[14] = R),
              (_[15] = F),
              (_[16] = $),
              (_[17] = H),
              (_[18] = l))
            : (l = _[18])
          let q = l,
            Y = "recents" === R && "mt-5"
          return (
            _[19] !== Y ? ((s = (0, r.A)("flex min-w-0 flex-col gap-3", Y)), (_[19] = Y), (_[20] = s)) : (s = _[20]),
            _[21] !== W || _[22] !== B
              ? ((o = W
                  ? (0, a.jsxs)("div", {
                      role: "alert",
                      className: "flex flex-wrap items-center gap-2 text-sm text-secondary",
                      children: [
                        (0, a.jsx)(d.A, {
                          id: "images.reference.loadError",
                          defaultMessage: "Recent photos couldn't be loaded",
                        }),
                        (0, a.jsx)(g.$, {
                          color: "ghostSecondary",
                          onClick: () => void B(),
                          children: (0, a.jsx)(d.A, { id: "images.reference.retry", defaultMessage: "Retry" }),
                        }),
                      ],
                    })
                  : null),
                (_[21] = W),
                (_[22] = B),
                (_[23] = o))
              : (o = _[23]),
            _[24] !== S ||
            _[25] !== L ||
            _[26] !== R ||
            _[27] !== P ||
            _[28] !== I ||
            _[29] !== q ||
            _[30] !== $ ||
            _[31] !== C
              ? ((p =
                  "recents" === R
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("h2", {
                            className: "box-trim-0.5 text-base leading-relaxed font-medium text-tertiary select-none",
                            children: (0, a.jsx)(d.A, { id: "images.reference.recents", defaultMessage: "Recents" }),
                          }),
                          (0, a.jsx)("div", { className: "flex gap-2", children: q }),
                        ],
                      })
                    : (0, a.jsxs)(v.i, {
                        layout: "gallery",
                        ariaLabel: L.formatMessage({
                          id: "images.reference.photos",
                          defaultMessage: "Reference photos",
                        }),
                        backLabel: L.formatMessage({
                          id: "images.reference.previous",
                          defaultMessage: "Previous photos",
                        }),
                        forwardLabel: L.formatMessage({ id: "images.reference.next", defaultMessage: "Next photos" }),
                        shouldUseReducedMotion: $,
                        header: (0, a.jsxs)("div", {
                          className: "flex items-center gap-3 select-none",
                          children: [
                            null != P
                              ? (0, a.jsx)(g.$, {
                                  color: "outlineSurface",
                                  size: "dialog",
                                  radius: "full",
                                  uniform: !0,
                                  "aria-label": L.formatMessage({
                                    id: "images.reference.back",
                                    defaultMessage: "Back to suggestions",
                                  }),
                                  onClick: P,
                                  children: (0, a.jsx)(h.mSV, {}),
                                })
                              : null,
                            (0, a.jsx)("h2", {
                              className: "text-base font-medium text-default",
                              children: (0, a.jsx)(d.A, {
                                id: "images.reference.attach",
                                defaultMessage: "Attach a photo",
                              }),
                            }),
                          ],
                        }),
                        children: [(0, a.jsx)(w.U, { disabled: S || C, layout: "carousel", onUpload: I }), q],
                      })),
                (_[24] = S),
                (_[25] = L),
                (_[26] = R),
                (_[27] = P),
                (_[28] = I),
                (_[29] = q),
                (_[30] = $),
                (_[31] = C),
                (_[32] = p))
              : (p = _[32]),
            _[33] !== s || _[34] !== o || _[35] !== p
              ? ((j = (0, a.jsxs)("section", { className: s, children: [o, p] })),
                (_[33] = s),
                (_[34] = o),
                (_[35] = p),
                (_[36] = j))
              : (j = _[36]),
            j
          )
        },
      },
    )
  },
  dQD8(e, t, l) {
    var a = l("DNn3")
    let n = { some: 0, all: 1 }
    l.d(
      t,
      {},
      {
        l: function (e, t, { root: l, margin: r, amount: s = "some" } = {}) {
          let i = (0, a.K)(e),
            o = new WeakMap(),
            c = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  let l = o.get(e.target)
                  if (!!l !== e.isIntersecting)
                    if (e.isIntersecting) {
                      let l = t(e.target, e)
                      "function" == typeof l ? o.set(e.target, l) : c.unobserve(e.target)
                    } else "function" == typeof l && (l(e), o.delete(e.target))
                })
              },
              { root: l, rootMargin: r, threshold: "number" == typeof s ? s : n[s] },
            )
          return (i.forEach((e) => c.observe(e)), () => c.disconnect())
        },
      },
    )
  },
  mEbU(e, t, l) {
    var a = l("zd8w"),
      n = l("dQD8")
    l.d(
      t,
      {},
      {
        W: function (e, { root: t, margin: l, amount: r, once: s = !1, initial: i = !1 } = {}) {
          let [o, c] = (0, a.useState)(i)
          return (
            (0, a.useEffect)(() => {
              if (!e.current || (s && o)) return
              let a = { root: (t && t.current) || void 0, margin: l, amount: r }
              return (0, n.l)(e.current, () => (c(!0), s ? void 0 : () => c(!1)), a)
            }, [t, e, l, s, r]),
            o
          )
        },
      },
    )
  },
}
//# sourceMappingURL=500617.e5260bbb0f.js.map
