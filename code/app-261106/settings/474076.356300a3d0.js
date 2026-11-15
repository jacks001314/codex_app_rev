export const __rspack_esm_ids = [474076]
export const __webpack_modules__ = {
  Sfgm(e, t, s) {
    var i = s("QosV"),
      r = s("zTeN"),
      n = s("zd8w"),
      o = s("Ietk"),
      a = s("OAko"),
      l = s("OWtl"),
      c = s("hZax"),
      d = s("WFY2"),
      u = s("Nwp9"),
      p = s("vw1R"),
      g = s("GDNt"),
      f = s("eFn4"),
      m = s("EOo5"),
      h = s("YitN")
    let v = (0, u.m3)("codexCloudAccess", null),
      y = (0, r.vP)(l.u, () => null),
      b = (0, r.i1)(l.u, (e, { get: t }) => {
        if ("chatgpt" !== e) return "disabled"
        let s = t(y) ?? "loading"
        return "loading" === s || "error" === s ? (t(v) ?? s) : s
      })
    function w(e) {
      let t,
        s,
        d,
        u,
        b,
        w,
        j,
        C,
        A,
        M,
        k = (0, i.c)(41)
      k[0] !== e ? ((t = void 0 === e ? {} : e), (k[0] = e), (k[1] = t)) : (t = k[1])
      let { enabled: T, checkEnvironmentSetup: S } = t,
        N = void 0 === T || T,
        R = void 0 === S || S,
        P = (0, r.gh)(l.u),
        { authMethod: I } = (0, m.As)()
      k[2] !== N ? ((s = { enabled: N }), (k[2] = N), (k[3] = s)) : (s = k[3])
      let { data: G, isLoading: E, isError: q, isFetching: L, refetch: z } = (0, h.U)(s),
        F = G?.plan ?? void 0
      k[4] !== F ? ((d = (0, p.o)(F)), (k[4] = F), (k[5] = d)) : (d = k[5])
      let W = d,
        U = (0, r.Ul)(o.j8),
        $ = "error" === U,
        O = N && !!G?.accountId && W && "chatgpt" === I
      k[6] !== O ? ((u = { enabled: O }), (k[6] = O), (k[7] = u)) : (u = k[7])
      let { data: Z, isLoading: D, isError: B, isFetching: V, refetch: K } = (0, r._U)(f.Jk, G?.accountId ?? "", u),
        Q = N && R
      k[8] !== Q ? ((b = { enabled: Q }), (k[8] = Q), (k[9] = b)) : (b = k[9])
      let { data: H, isLoading: Y, error: X, isFetching: J, refetch: ee } = (0, a.sw)(b),
        et = (0, c.Zj)("1907601843"),
        es = (N && "loading" === U) || E || D || (R && Y),
        ei = X instanceof g.fk && 404 === X.status,
        er = (N && $) || q || (W && B) || (R && !!X && !ei),
        en = R && (et ? ei : H?.length === 0 || ei),
        eo = !W || (Z?.beta_settings?.wham_access ?? !1)
      k[10] !== I || k[11] !== er || k[12] !== eo || k[13] !== es || k[14] !== en || k[15] !== F
        ? ((w = _(F, I, { isLoading: es, hasErrors: er, needsOnboarding: en, hasWorkspaceEnabledCodex: eo })),
          (k[10] = I),
          (k[11] = er),
          (k[12] = eo),
          (k[13] = es),
          (k[14] = en),
          (k[15] = F),
          (k[16] = w))
        : (w = k[16])
      let ea = w
      ;(k[17] !== ea || k[18] !== R || k[19] !== N || k[20] !== P
        ? ((j = () => {
            N && R && (P.set(y, ea), "loading" !== ea && "error" !== ea && P.set(v, ea))
          }),
          (C = [ea, R, N, P]),
          (k[17] = ea),
          (k[18] = R),
          (k[19] = N),
          (k[20] = P),
          (k[21] = j),
          (k[22] = C))
        : ((j = k[21]), (C = k[22])),
        (0, n.useEffect)(j, C))
      let el = G?.accountId,
        ec = "error" === ea && (L || V || (R && J))
      return (
        k[23] !== G ||
        k[24] !== q ||
        k[25] !== R ||
        k[26] !== W ||
        k[27] !== X ||
        k[28] !== ei ||
        k[29] !== z ||
        k[30] !== ee ||
        k[31] !== K ||
        k[32] !== P ||
        k[33] !== $ ||
        k[34] !== B
          ? ((A = async () => {
              if ($)
                try {
                  await (0, o.SG)(P)
                } catch {
                  return
                }
              await Promise.allSettled([
                q ? z() : void 0,
                W && B && G?.accountId != null
                  ? (0, o.ym)(G.accountId)
                      .catch(x)
                      .then(() => K())
                  : void 0,
                R && X && !ei ? ee() : void 0,
              ])
            }),
            (k[23] = G),
            (k[24] = q),
            (k[25] = R),
            (k[26] = W),
            (k[27] = X),
            (k[28] = ei),
            (k[29] = z),
            (k[30] = ee),
            (k[31] = K),
            (k[32] = P),
            (k[33] = $),
            (k[34] = B),
            (k[35] = A))
          : (A = k[35]),
        k[36] !== ea || k[37] !== el || k[38] !== ec || k[39] !== A
          ? ((M = { access: ea, accountId: el, isRetrying: ec, retry: A }),
            (k[36] = ea),
            (k[37] = el),
            (k[38] = ec),
            (k[39] = A),
            (k[40] = M))
          : (M = k[40]),
        M
      )
    }
    function x() {}
    function _(
      e,
      t,
      { isLoading: s, hasErrors: i, needsOnboarding: r, hasWorkspaceEnabledCodex: n, hasLoggedDisabledRef: o },
    ) {
      let a = (0, p.o)(e),
        l = (e) => {
          o && !o.current && (d.v.info(e), (o.current = !0))
        }
      return "chatgpt" !== t
        ? (l("Codex Cloud access disabled because user is not logged in via ChatGPT."), "disabled")
        : s
          ? "loading"
          : i
            ? "error"
            : a && !n
              ? (l("Codex Cloud access disabled because workspace has not enabled Codex."), "disabled")
              : r
                ? "enabled_needs_setup"
                : "enabled"
    }
    s.d(
      t,
      {},
      {
        P4: _,
        d_: w,
        ie: function () {
          return (w(), null)
        },
        tr: b,
      },
    )
  },
  u4OP(e, t, s) {
    s.d(t, { ReviewUpsellSetup: () => ev })
    var i = s("ABep"),
      r = s("QosV"),
      n = s("iJY0")
    let o = (0, n.a)({
      name: "chevron-right-md-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 9.25, y: 5.25, width: 7.292725, height: 13.5 },
        visualBounds: { x: 9.25, y: 5.25, width: 7.292725, height: 13.5 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 9.25, y: 5.25, width: 7.292725, height: 13.5 },
        center: { x: 12.896363, y: 12 },
        insets: { top: 5.25, right: 7.457275, bottom: 5.25, left: 9.25 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12.896363, y: 12 }, foreground: { x: 12.896363, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M9.46967 17.4697C9.17678 17.7626 9.17678 18.2373 9.46967 18.5302C9.76256 18.8231 10.2373 18.8231 10.5302 18.5302L16.1767 12.8837C16.6648 12.3956 16.6648 11.6043 16.1767 11.1162L10.5302 5.46967C10.2373 5.17678 9.76256 5.17678 9.46967 5.46967C9.17678 5.76256 9.17678 6.23732 9.46967 6.53022L14.9394 11.9999L9.46967 17.4697Z" fill="currentColor"/>',
    })
    var a = s("zTeN"),
      l = s("tUUe"),
      c = s("zd8w"),
      d = s("oyxz"),
      u = s("HZfM"),
      p = s("Rvvc"),
      g = s("SPnB"),
      f = s("HOLv"),
      m = s("Sptq"),
      h = s("uMwG"),
      v = s("Vujf"),
      y = s("ElQ7"),
      b = s("Sm6l"),
      w = s("JNtf"),
      x = s("mUDD"),
      _ = s("SGsN"),
      j = s("F0xz"),
      C = s("OWtl"),
      A = s("u5Xi"),
      M = s("AWNZ"),
      k = s("ZEx5"),
      T = s("SAl8"),
      S = s("Nwp9")
    let N = (0, a.T1)(C.u, (e) => (0, S.m3)(`review-upsell-dismissed:${e}`, { code: !1, security: !1 })),
      R = (0, n.a)({
        name: "agent-regular-32",
        canvas: {
          width: 32,
          height: 32,
          viewBox: "0 0 32 32",
          frame: { x: 0, y: 0, width: 32, height: 32 },
          inkBounds: { x: 0.785686, y: 2.044922, width: 30.428631, height: 27.910156 },
          visualBounds: { x: 0.785686, y: 2.044922, width: 30.428631, height: 27.910156 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 0.785686, y: 2.044922, width: 30.428631, height: 27.910156 },
          center: { x: 16.000002, y: 16 },
          insets: { top: 2.044922, right: 0.785683, bottom: 2.044922, left: 0.785686 },
          anchors: { frame: { x: 16, y: 16 }, ink: { x: 16.000002, y: 16 }, foreground: { x: 16.000002, y: 16 } },
        },
        capabilities: ["icon"],
        body: '<path d="M17.1445 21.0837V18.917C17.1445 18.0334 17.8611 17.3168 18.7448 17.3168C19.6284 17.3168 20.3451 18.0334 20.3451 18.917V21.0837C20.3449 21.9672 19.6284 22.684 18.7448 22.684C17.8612 22.684 17.1447 21.9672 17.1445 21.0837Z" fill="currentColor"/> <path d="M11.512 21.0837V18.917C11.512 18.0334 12.2286 17.3168 13.1122 17.3168C13.9959 17.3168 14.7125 18.0334 14.7125 18.917V21.0837C14.7124 21.9672 13.9958 22.684 13.1122 22.684C12.2287 22.684 11.5121 21.9672 11.512 21.0837Z" fill="currentColor"/> <path d="M25.6719 18.9897C25.6458 17.8563 25.5675 16.7272 25.3623 15.517C25.1776 14.4277 24.273 13.5593 23.0859 13.3705C20.604 12.976 18.5237 12.7993 16 12.7993C13.4762 12.7993 11.3952 12.9759 8.91309 13.3705C7.7261 13.5593 6.82137 14.4278 6.63672 15.517C6.3632 17.1305 6.31652 18.6 6.31641 20.1274L6.32813 21.2651C6.35418 22.3984 6.43157 23.5276 6.63672 24.7377C6.82137 25.827 7.7261 26.6954 8.91309 26.8842C11.3952 27.2788 13.4762 27.4555 16 27.4555C18.5237 27.4555 20.604 27.2788 23.0859 26.8842C24.273 26.6955 25.1776 25.827 25.3623 24.7377C25.6358 23.1242 25.6825 21.6548 25.6826 20.1274L25.6719 18.9897ZM28.1709 21.3227C28.1431 22.5325 28.0584 23.7918 27.8272 25.1557C27.4472 27.3966 25.6273 29.0113 23.4785 29.353C20.8757 29.7668 18.6639 29.9555 16 29.9555C13.336 29.9555 11.1235 29.7668 8.52051 29.353C6.37186 29.0112 4.55177 27.3966 4.17188 25.1557C3.94065 23.7918 3.85691 22.5325 3.8291 21.3227L3.81641 20.1274C3.81653 18.55 3.86359 16.9175 4.17188 15.0991C4.55177 12.8582 6.37186 11.2435 8.52051 10.9018C11.1235 10.488 13.336 10.2993 16 10.2993C18.6639 10.2993 20.8757 10.488 23.4785 10.9018C25.6273 11.2434 27.4472 12.8581 27.8272 15.0991C28.1354 16.9175 28.1825 18.55 28.1826 20.1274L28.1709 21.3227Z" fill="currentColor"/> <path d="M14.75 10.8773V8.60284C14.75 7.91249 15.3096 7.35284 16 7.35284C16.6904 7.35284 17.25 7.91249 17.25 8.60284V10.8773C17.25 11.5676 16.6904 12.1273 16 12.1273C15.3096 12.1273 14.75 11.5676 14.75 10.8773Z" fill="currentColor"/> <path d="M17.2459 5.79004C17.2457 5.10236 16.6875 4.54492 15.9998 4.54492C15.3122 4.54506 14.7548 5.10244 14.7546 5.79004C14.7546 6.47775 15.3121 7.036 15.9998 7.03613C16.6876 7.03613 17.2459 6.47784 17.2459 5.79004ZM19.7459 5.79004C19.7459 7.85855 18.0683 9.53613 15.9998 9.53613C13.9314 9.536 12.2546 7.85847 12.2546 5.79004C12.2548 3.72173 13.9314 2.04506 15.9998 2.04492C18.0682 2.04492 19.7457 3.72164 19.7459 5.79004Z" fill="currentColor"/> <path d="M29.709 16.3178C30.3961 16.251 31.0075 16.7537 31.0743 17.4408C31.261 19.3625 31.2612 20.4601 31.0736 22.3216C31.0042 23.0083 30.3914 23.5085 29.7047 23.4392C29.018 23.3699 28.5178 22.7571 28.5871 22.0703C28.7576 20.3785 28.7573 19.446 28.5859 17.682C28.5193 16.9952 29.0222 16.3848 29.709 16.3178Z" fill="currentColor"/> <path d="M2.291 16.3178C1.60388 16.251 0.992515 16.7537 0.925748 17.4408C0.739035 19.3625 0.738757 20.4601 0.926367 22.3216C0.995809 23.0083 1.60859 23.5085 2.29532 23.4392C2.98201 23.3699 3.48216 22.7571 3.41294 22.0703C3.24245 20.3785 3.24269 19.446 3.41409 17.682C3.48066 16.9952 2.97777 16.3848 2.291 16.3178Z" fill="currentColor"/>',
      })
    var P = s("VLvf"),
      I = "surface-XpHgLD",
      G = "title-O_xZAr",
      E = "description-MPxg3x"
    function q(e) {
      let t,
        s,
        n,
        o,
        a = (0, r.c)(11),
        { kind: l } = e
      return (
        a[0] !== l
          ? ((t = (0, i.jsx)("div", {
              className: "icon-MHF9tU",
              children: "security" === l ? (0, i.jsx)(f.I, { asset: P.q }) : (0, i.jsx)(f.I, { asset: R }),
            })),
            (a[0] = l),
            (a[1] = t))
          : (t = a[1]),
        a[2] !== l
          ? ((s = (0, i.jsx)("div", {
              className: G,
              children: (0, i.jsx)(w.L3, {
                className: "text-heading-lg leading-7 font-semibold",
                children: (0, i.jsx)(d.A, {
                  id: "codeReview.setup.dialog.title",
                  defaultMessage: "{kind, select, code {Review agent} other {Security review}}",
                  description: "Title of automatic code review or security review setup, retained after submission.",
                  values: { kind: l },
                }),
              }),
            })),
            (a[2] = l),
            (a[3] = s))
          : (s = a[3]),
        a[4] !== l
          ? ((n = (0, i.jsx)("div", {
              className: E,
              children: (0, i.jsx)(w.rr, {
                children: (0, i.jsx)(d.A, {
                  id: "codeReview.setup.dialog.description",
                  defaultMessage:
                    "{kind, select, code {Scan PRs for bugs and vulnerabilities} other {Scan PRs for security vulnerabilities}}",
                  description: "Description of the automatic review setup dialog. PR means pull request.",
                  values: { kind: l },
                }),
              }),
            })),
            (a[4] = l),
            (a[5] = n))
          : (n = a[5]),
        a[6] !== l || a[7] !== t || a[8] !== s || a[9] !== n
          ? ((o = (0, i.jsxs)("div", {
              className: I,
              "data-variant": "header",
              "data-artwork": l,
              children: [t, s, n],
            })),
            (a[6] = l),
            (a[7] = t),
            (a[8] = s),
            (a[9] = n),
            (a[10] = o))
          : (o = a[10]),
        o
      )
    }
    var L = s("ZaUy"),
      z = s("on57"),
      F = s("Wf1j"),
      W = s("djbx"),
      U = s("wZQ4"),
      $ = s("evwP"),
      O = s("okCa"),
      Z = s("RNul"),
      D = s("GEsy")
    function B(e, t) {
      return (
        "never_review" !== e.global_review_preference &&
        ("review_everyone" === e.global_review_preference ||
          "team" === e.review_preference ||
          (null == t ? null : "always" === t))
      )
    }
    function V(e, t, s, i) {
      if ("repository_admin_required" === e.edit_blocked_reason) return "admin"
      if ("repository_write_access_required" === e.edit_blocked_reason) return "write"
      if (null !== e.edit_blocked_reason || e.repository.archived) return "unavailable"
      if (e.funding_authorization_required) return "funding"
      let r = B(e, t?.code_review_preference)
      if ("code" === s && !i) return null == r ? "preferences" : r ? "enabled" : null
      if (null == e.security_review) return "unavailable"
      let n = B(e.security_review, null == t ? void 0 : (t.security_review?.preference ?? "repo_default"))
      return null == n || ("code" === s && null == r)
        ? "preferences"
        : "code" === s
          ? r && n
            ? "enabled"
            : null
          : n
            ? "enabled"
            : null == r
              ? "preferences"
              : r
                ? null
                : "code_required"
    }
    function K(e, t) {
      return "all" === t
        ? "review_everyone" === e.global_review_preference
        : "review_if_enabled" === e.global_review_preference && "team" === e.review_preference
    }
    function Q(e) {
      let t,
        s = (0, r.c)(3),
        { completed: n, total: o } = e
      return (
        s[0] !== n || s[1] !== o
          ? ((t = (0, i.jsx)(d.A, {
              id: "codeReview.setup.repositoryProgress",
              defaultMessage:
                "{completed, number} of {total, plural, one {# repository processed} other {# repositories processed}}",
              description:
                "Live progress in the automatic review setup dialog, including retries. completed counts repository requests that finished, whether successful or failed; total counts repositories in this attempt. Keep this status short.",
              values: { completed: n, total: o },
            })),
            (s[0] = n),
            (s[1] = o),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    function H(e) {
      let t,
        s,
        n,
        o,
        l,
        u,
        p,
        g,
        m,
        y,
        w,
        _,
        j,
        C,
        A,
        M,
        T,
        S,
        N,
        R,
        P,
        I,
        G = (0, r.c)(110),
        {
          provider: E,
          connectorId: q,
          kind: B,
          selected: K,
          disabled: H,
          progress: ee,
          onChange: et,
          requireSecurity: es,
        } = e,
        ei = void 0 !== es && es,
        er = (0, F.A)(),
        { data: en, isPending: eo } = (0, h.wJ)(),
        ea = (0, c.useId)(),
        [el, ec] = (0, c.useState)(""),
        ed = (0, D.o)(el, 200),
        eu = (0, c.useRef)(null)
      G[0] !== q || G[1] !== ed || G[2] !== E
        ? ((t = { provider: E, connectorId: q, search: ed }), (G[0] = q), (G[1] = ed), (G[2] = E), (G[3] = t))
        : (t = G[3])
      let {
        data: ep,
        isLoading: eg,
        isFetching: ef,
        isError: em,
        isFetchNextPageError: eh,
        isFetchingNextPage: ev,
        hasNextPage: ey,
        fetchNextPage: eb,
        refetch: ew,
      } = (0, a._U)(v.jm, t)
      if (
        G[4] !== ep?.pages ||
        G[5] !== ep?.pages.flatMap ||
        G[6] !== ed ||
        G[7] !== H ||
        G[8] !== ea ||
        G[9] !== er ||
        G[10] !== B ||
        G[11] !== et ||
        G[12] !== en ||
        G[13] !== eo ||
        G[14] !== ee ||
        G[15] !== ei ||
        G[16] !== el ||
        G[17] !== K
      ) {
        let e,
          t,
          r,
          a,
          c,
          h,
          v,
          b,
          C,
          A = ep?.pages.flatMap(J) ?? []
        if (((l = A), 0 === ed.trim().length)) {
          let e = new Set(A.map(X))
          l = [...K.filter((t) => !e.has(t.repository.id)), ...A]
        }
        G[30] !== K.length
          ? ((e = (0, i.jsx)(d.A, {
              id: "codeReview.setup.selectedRepositoryCount",
              defaultMessage: "{count, plural, one {# repository selected} other {# repositories selected}}",
              description: "Number of repositories selected for review setup, shown beside the repository heading.",
              values: { count: K.length },
            })),
            (G[30] = K.length),
            (G[31] = e))
          : (e = G[31])
        let M = e
        ;((o = x.RW),
          G[32] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)("span", {
                className: "text-base",
                children: (0, i.jsx)(d.A, {
                  id: "codeReview.setup.repositories",
                  defaultMessage: "Review repositories",
                  description: "Heading above the searchable repository checklist for automatic review setup.",
                }),
              })),
              (G[32] = t))
            : (t = G[32]),
          G[33] !== M
            ? ((r = (0, i.jsx)("span", {
                className: "invisible col-start-1 row-start-1",
                "aria-hidden": !0,
                children: M,
              })),
              (G[33] = M),
              (G[34] = r))
            : (r = G[34]),
          G[35] !== K.length
            ? ((a = (0, i.jsx)("span", {
                className: "invisible col-start-1 row-start-1",
                "aria-hidden": !0,
                children: (0, i.jsx)(Q, { completed: K.length, total: K.length }),
              })),
              (G[35] = K.length),
              (G[36] = a))
            : (a = G[36]),
          G[37] !== ee || G[38] !== M
            ? ((c = (0, i.jsx)("span", {
                className: "col-start-1 row-start-1",
                role: "status",
                children: null != ee ? (0, i.jsx)(Q, { ...ee }) : M,
              })),
              (G[37] = ee),
              (G[38] = M),
              (G[39] = c))
            : (c = G[39]),
          G[40] !== r || G[41] !== a || G[42] !== c
            ? ((u = (0, i.jsxs)("div", {
                className: "flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 select-none",
                children: [
                  t,
                  (0, i.jsxs)("div", {
                    className: "grid max-w-full text-end text-sm text-secondary tabular-nums",
                    children: [r, a, c],
                  }),
                ],
              })),
              (G[40] = r),
              (G[41] = a),
              (G[42] = c),
              (G[43] = u))
            : (u = G[43]),
          (n = k.t),
          (_ = "outlined"),
          (j = !1),
          (s = x.RW),
          (y = "p-3"),
          G[44] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = (e) => {
                ;(ec(e), eu.current?.scrollTo({ top: 0 }))
              }),
              (G[44] = h))
            : (h = G[44]),
          G[45] !== er
            ? ((v = er.formatMessage({
                id: "codeReview.setup.search.label",
                defaultMessage: "Search repositories",
                description: "Accessible label for repository search in review setup.",
              })),
              (G[45] = er),
              (G[46] = v))
            : (v = G[46]),
          G[47] !== er
            ? ((b = er.formatMessage({
                id: "codeReview.setup.search.placeholder",
                defaultMessage: "Search",
                description: "Placeholder for searching repositories to enable automatic reviews.",
              })),
              (G[47] = er),
              (G[48] = b))
            : (b = G[48]),
          G[49] !== H || G[50] !== ea || G[51] !== el || G[52] !== v || G[53] !== b
            ? ((w = (0, i.jsx)(O.s, {
                id: ea,
                variant: "catalog-compact",
                autoFocus: !0,
                disabled: H,
                searchQuery: el,
                onKeyDown: Y,
                onSearchQueryChange: h,
                label: v,
                placeholder: b,
              })),
              (G[49] = H),
              (G[50] = ea),
              (G[51] = el),
              (G[52] = v),
              (G[53] = b),
              (G[54] = w))
            : (w = G[54]),
          (p = eu),
          (g = "flex h-60 shrink-0 flex-col overflow-y-auto"),
          G[55] !== ed ||
          G[56] !== H ||
          G[57] !== ea ||
          G[58] !== B ||
          G[59] !== et ||
          G[60] !== en ||
          G[61] !== eo ||
          G[62] !== ei ||
          G[63] !== el ||
          G[64] !== K
            ? ((C = (e) => {
                let t = V(e, en, B, ei),
                  s = K.some((t) => t.repository.id === e.repository.id)
                return (0, i.jsxs)(
                  "label",
                  {
                    className: (0, z.A)(
                      "flex shrink-0 items-center gap-3 rounded-lg px-3 py-2 text-base select-none",
                      null == t ? "cursor-interaction hover:bg-secondary-ghost-hover" : "text-secondary",
                    ),
                    htmlFor: `${ea}-${e.repository.id}`,
                    children: [
                      (0, i.jsx)("span", {
                        className: "relative flex",
                        children: (0, i.jsx)(W.S, {
                          id: `${ea}-${e.repository.id}`,
                          variant: "secondary",
                          checked: s,
                          "aria-describedby": null == t ? void 0 : `${ea}-${e.repository.id}-status`,
                          disabled: H || el !== ed || (null != t && !s),
                          onCheckedChange: (t) => {
                            et(t ? [...K, e] : K.filter((t) => t.repository.id !== e.repository.id))
                          },
                        }),
                      }),
                      (0, i.jsxs)("span", {
                        className: "min-w-0 flex-1 truncate",
                        children: [
                          (0, i.jsx)("span", {
                            className: "text-secondary",
                            children: e.repository.repository_full_name.slice(
                              0,
                              e.repository.repository_full_name.lastIndexOf("/") + 1,
                            ),
                          }),
                          e.repository.repository_full_name.slice(
                            e.repository.repository_full_name.lastIndexOf("/") + 1,
                          ),
                        ],
                      }),
                      null != t &&
                        (0, i.jsxs)("span", {
                          id: `${ea}-${e.repository.id}-status`,
                          className: "flex shrink-0 items-center gap-1 text-sm text-secondary",
                          children: [
                            "enabled" === t && (0, i.jsx)(f.I, { asset: L.G }),
                            (0, i.jsx)(d.A, {
                              id: "codeReview.setup.repository.status",
                              defaultMessage:
                                "{status, select, enabled {Enabled} admin {Admin access required} write {Write access required} funding {Funding approval required} loading {Loading settings…} code_required {Enable code review first} other {Unavailable}}",
                              description:
                                "Reason a repository cannot be selected for automatic review setup. Enabled means the requested reviews are effectively enabled; access, funding, and code-review prerequisites prevent setup.",
                              values: { status: "preferences" === t && eo ? "loading" : t },
                            }),
                          ],
                        }),
                    ],
                  },
                  e.repository.id,
                )
              }),
              (G[55] = ed),
              (G[56] = H),
              (G[57] = ea),
              (G[58] = B),
              (G[59] = et),
              (G[60] = en),
              (G[61] = eo),
              (G[62] = ei),
              (G[63] = el),
              (G[64] = K),
              (G[65] = C))
            : (C = G[65]),
          (m = l.map(C)),
          (G[4] = ep?.pages),
          (G[5] = ep?.pages.flatMap),
          (G[6] = ed),
          (G[7] = H),
          (G[8] = ea),
          (G[9] = er),
          (G[10] = B),
          (G[11] = et),
          (G[12] = en),
          (G[13] = eo),
          (G[14] = ee),
          (G[15] = ei),
          (G[16] = el),
          (G[17] = K),
          (G[18] = s),
          (G[19] = n),
          (G[20] = o),
          (G[21] = l),
          (G[22] = u),
          (G[23] = p),
          (G[24] = g),
          (G[25] = m),
          (G[26] = y),
          (G[27] = w),
          (G[28] = _),
          (G[29] = j))
      } else
        ((s = G[18]),
          (n = G[19]),
          (o = G[20]),
          (l = G[21]),
          (u = G[22]),
          (p = G[23]),
          (g = G[24]),
          (m = G[25]),
          (y = G[26]),
          (w = G[27]),
          (_ = G[28]),
          (j = G[29]))
      ;(G[66] !== ed ||
      G[67] !== H ||
      G[68] !== eb ||
      G[69] !== em ||
      G[70] !== eh ||
      G[71] !== ef ||
      G[72] !== ew ||
      G[73] !== el
        ? ((C =
            em &&
            (0, i.jsx)(b.$, {
              color: "secondary",
              disabled: H || ef || el !== ed,
              onClick: () => {
                eh ? eb() : ew()
              },
              children: (0, i.jsx)(d.A, {
                id: "codeReview.setup.search.retry",
                defaultMessage: "Couldn’t load repositories — retry",
                description: "Retry a failed repository search.",
              }),
            })),
          (G[66] = ed),
          (G[67] = H),
          (G[68] = eb),
          (G[69] = em),
          (G[70] = eh),
          (G[71] = ef),
          (G[72] = ew),
          (G[73] = el),
          (G[74] = C))
        : (C = G[74]),
        G[75] !== eg
          ? ((A =
              eg &&
              (0, i.jsx)($.W, {
                className: "min-h-9 flex-1",
                children: (0, i.jsxs)("span", {
                  role: "status",
                  children: [
                    (0, i.jsx)(Z.y, { className: "icon-xs" }),
                    (0, i.jsx)("span", {
                      className: "sr-only",
                      children: (0, i.jsx)(d.A, {
                        id: "codeReview.setup.search.loading",
                        defaultMessage: "Loading repositories…",
                        description: "Loading state during repository search.",
                      }),
                    }),
                  ],
                }),
              })),
            (G[75] = eg),
            (G[76] = A))
          : (A = G[76]),
        G[77] !== ey || G[78] !== em || G[79] !== ef || G[80] !== l
          ? ((M =
              !em &&
              !ef &&
              !ey &&
              0 === l.length &&
              (0, i.jsx)($.W, {
                className: "flex-1",
                children: (0, i.jsx)(d.A, {
                  id: "codeReview.setup.search.empty",
                  defaultMessage: "No repositories found",
                  description: "No repositories match the search in review setup.",
                }),
              })),
            (G[77] = ey),
            (G[78] = em),
            (G[79] = ef),
            (G[80] = l),
            (G[81] = M))
          : (M = G[81]))
      let ex = ey && !em && !ef && !H && el === ed
      return (
        G[82] !== eb ? ((T = () => void eb()), (G[82] = eb), (G[83] = T)) : (T = G[83]),
        G[84] !== ev || G[85] !== ex || G[86] !== T
          ? ((S = (0, i.jsx)(U.D, { rootRef: eu, hasNextPage: ex, isFetchingNextPage: ev, onLoadNextPage: T })),
            (G[84] = ev),
            (G[85] = ex),
            (G[86] = T),
            (G[87] = S))
          : (S = G[87]),
        G[88] !== C || G[89] !== A || G[90] !== M || G[91] !== S || G[92] !== p || G[93] !== g || G[94] !== m
          ? ((N = (0, i.jsxs)("div", { ref: p, className: g, children: [m, C, A, M, S] })),
            (G[88] = C),
            (G[89] = A),
            (G[90] = M),
            (G[91] = S),
            (G[92] = p),
            (G[93] = g),
            (G[94] = m),
            (G[95] = N))
          : (N = G[95]),
        G[96] !== s || G[97] !== N || G[98] !== y || G[99] !== w
          ? ((R = (0, i.jsxs)(s, { className: y, children: [w, N] })),
            (G[96] = s),
            (G[97] = N),
            (G[98] = y),
            (G[99] = w),
            (G[100] = R))
          : (R = G[100]),
        G[101] !== n || G[102] !== R || G[103] !== _ || G[104] !== j
          ? ((P = (0, i.jsx)(n, { variant: _, dividers: j, children: R })),
            (G[101] = n),
            (G[102] = R),
            (G[103] = _),
            (G[104] = j),
            (G[105] = P))
          : (P = G[105]),
        G[106] !== o || G[107] !== u || G[108] !== P
          ? ((I = (0, i.jsxs)(o, { children: [u, P] })), (G[106] = o), (G[107] = u), (G[108] = P), (G[109] = I))
          : (I = G[109]),
        I
      )
    }
    function Y(e) {
      "Enter" === e.key && e.preventDefault()
    }
    function X(e) {
      return e.repository.id
    }
    function J(e) {
      return e.repo_review_settings
    }
    function ee(e) {
      let t,
        s,
        n,
        o,
        a,
        l,
        c,
        u,
        p,
        g,
        f,
        m,
        h,
        v,
        y = (0, r.c)(40),
        { results: w, options: _, saving: j, completed: C, onRetry: A, onSettings: M } = e,
        T = void 0 === C ? 0 : C
      y[0] !== w
        ? ((s = w.filter(ei)),
          (t = w.length - s.length),
          (n = s.some(es)),
          (y[0] = w),
          (y[1] = t),
          (y[2] = s),
          (y[3] = n))
        : ((t = y[1]), (s = y[2]), (n = y[3]))
      let S = n,
        N = "code" === _.kind && _.security ? "both" : _.kind
      return (
        y[4] !== T || y[5] !== s || y[6] !== j
          ? ((o = j && (0, i.jsx)(Q, { completed: T, total: s.length })),
            (y[4] = T),
            (y[5] = s),
            (y[6] = j),
            (y[7] = o))
          : (o = y[7]),
        y[8] !== t || y[9] !== N || y[10] !== j
          ? ((a =
              !j &&
              0 === t &&
              (0, i.jsx)(d.A, {
                id: "codeReview.setup.result.failed.title",
                defaultMessage:
                  "{review, select, security {Couldn’t enable security review} code {Couldn’t enable code review} other {Couldn’t enable code and security review}}",
                description:
                  "Failure heading when none of the selected repositories could be enabled. review identifies code review, security review, or both. A reason and retry button follow.",
                values: { review: N },
              })),
            (y[8] = t),
            (y[9] = N),
            (y[10] = j),
            (y[11] = a))
          : (a = y[11]),
        y[12] !== t || y[13] !== w.length || y[14] !== j
          ? ((l =
              !j &&
              t > 0 &&
              (0, i.jsx)(d.A, {
                id: "codeReview.setup.result.count",
                defaultMessage: "Enabled for {enabled, number} of {total, number} repositories",
                description:
                  "Summary after enabling automatic reviews in bulk. Counts only confirmed successful saves.",
                values: { enabled: t, total: w.length },
              })),
            (y[12] = t),
            (y[13] = w.length),
            (y[14] = j),
            (y[15] = l))
          : (l = y[15]),
        y[16] !== o || y[17] !== a || y[18] !== l
          ? ((c = (0, i.jsxs)("span", { role: "status", children: [o, a, l] })),
            (y[16] = o),
            (y[17] = a),
            (y[18] = l),
            (y[19] = c))
          : (c = y[19]),
        y[20] !== S
          ? ((u = S
              ? (0, i.jsx)(d.A, {
                  id: "codeReview.setup.result.accountChanged",
                  defaultMessage: "Your account changed; reopen setup to continue",
                  description:
                    "An account change interrupted review setup. The user must reopen setup in their current account.",
                })
              : void 0),
            (y[20] = S),
            (y[21] = u))
          : (u = y[21]),
        y[22] !== c || y[23] !== u
          ? ((p = (0, i.jsx)(x.c7, {
              titleSize: "base",
              subtitleSize: "sm",
              subtitleTone: "secondary",
              title: c,
              subtitle: u,
            })),
            (y[22] = c),
            (y[23] = u),
            (y[24] = p))
          : (p = y[24]),
        y[25] !== w ? ((g = w.map(et)), (y[25] = w), (y[26] = g)) : (g = y[26]),
        y[27] !== g
          ? ((f = (0, i.jsx)("div", {
              className: "max-h-60 overflow-y-auto",
              children: (0, i.jsx)(k.t, { variant: "outlined", children: g }),
            })),
            (y[27] = g),
            (y[28] = f))
          : (f = y[28]),
        y[29] !== f || y[30] !== p
          ? ((m = (0, i.jsx)(x.OO, { children: (0, i.jsxs)(x.RW, { children: [p, f] }) })),
            (y[29] = f),
            (y[30] = p),
            (y[31] = m))
          : (m = y[31]),
        y[32] !== t || y[33] !== A || y[34] !== M || y[35] !== j
          ? ((h = (0, i.jsx)(x.Es, {
              children: (e) =>
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    t > 0
                      ? (0, i.jsx)(b.$, {
                          size: e,
                          color: "tinted",
                          radius: "full",
                          disabled: j,
                          onClick: M,
                          children: (0, i.jsx)(d.A, {
                            id: "codeReview.setup.settings",
                            defaultMessage: "Review settings",
                            description: "Open repository review settings after successfully enabling reviews.",
                          }),
                        })
                      : null,
                    (0, i.jsx)(b.$, {
                      size: e,
                      color: "primary",
                      radius: "full",
                      disabled: j,
                      loading: j,
                      onClick: A,
                      children: (0, i.jsx)(d.A, {
                        id: "codeReview.setup.result.retry",
                        defaultMessage: "{all, select, yes {Retry all} other {Retry failed}}",
                        description: "Retry only failed repository updates. Retry all is shown when none succeeded.",
                        values: { all: 0 === t ? "yes" : "no" },
                      }),
                    }),
                  ],
                }),
            })),
            (y[32] = t),
            (y[33] = A),
            (y[34] = M),
            (y[35] = j),
            (y[36] = h))
          : (h = y[36]),
        y[37] !== m || y[38] !== h
          ? ((v = (0, i.jsxs)(i.Fragment, { children: [m, h] })), (y[37] = m), (y[38] = h), (y[39] = v))
          : (v = y[39]),
        v
      )
    }
    function et(e) {
      return (0, i.jsx)(
        M.ic,
        {
          size: "compact",
          label: e.repository.repository.repository_full_name,
          description:
            "failed" === e.status && "account" !== e.reason
              ? (e.errorMessage ??
                (0, i.jsx)(d.A, {
                  id: "codeReview.setup.result.repositoryError",
                  defaultMessage:
                    "{reason, select, permission {You don’t have permission to configure reviews} funding {Authorize review funding in settings} conflict {Review settings changed. Try again} other {Couldn’t save review settings. Try again}}",
                  description:
                    "Error beneath the affected repository. permission means access was denied, funding requires authorization in settings, conflict means the server rejected a stale update, and other is a save failure.",
                  values: { reason: e.reason ?? "save" },
                }))
              : void 0,
          controlSizing: "content",
          control:
            "enabled" === e.status
              ? (0, i.jsxs)("span", {
                  className: "flex items-center gap-2 text-success select-none",
                  children: [
                    (0, i.jsx)(f.I, { asset: L.G }),
                    (0, i.jsx)(d.A, {
                      id: "codeReview.setup.result.enabled",
                      defaultMessage: "Enabled",
                      description:
                        "Status beside the repository name after its automatic review settings have been saved successfully.",
                    }),
                  ],
                })
              : (0, i.jsx)("span", {
                  className: "text-danger select-none",
                  children: (0, i.jsx)(d.A, {
                    id: "codeReview.setup.result.failed",
                    defaultMessage: "Failed",
                    description: "Status for a repository whose automatic review settings could not be saved.",
                  }),
                }),
        },
        e.repository.repository.id,
      )
    }
    function es(e) {
      return "account" === e.reason
    }
    function ei(e) {
      return "failed" === e.status
    }
    var er = s("LH8k"),
      en = s("HFSu"),
      eo = s("eShZ")
    function ea(e) {
      let t,
        s,
        n,
        o,
        l,
        u,
        p,
        f,
        m,
        h,
        v,
        S,
        R,
        P,
        I,
        G = (0, r.c)(63),
        { initialRepository: E, kind: L, provider: z, connectorId: F, identity: W, onClose: U, onSettings: $ } = e,
        O = (0, a.gh)(C.u),
        { trackCodeReviewInteraction: Z } = (0, y.uM)()
      G[0] !== E ? ((t = [E]), (G[0] = E), (G[1] = t)) : (t = G[1])
      let [D, V] = (0, c.useState)(t),
        Q = "security" === L
      G[2] !== L || G[3] !== Q
        ? ((s = { kind: L, scope: "all", security: Q, codeTrigger: "pr_open", securityTrigger: "code_review" }),
          (G[2] = L),
          (G[3] = Q),
          (G[4] = s))
        : (s = G[4])
      let [Y, X] = (0, c.useState)(s),
        [J, et] = (0, c.useState)(null),
        [es, ei] = (0, c.useState)(null),
        ea = null != es
      G[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (0, i.jsx)(d.A, {
            id: "codeReview.setup.enable",
            defaultMessage: "Enable",
            description: "Enable the selected automatic reviews for selected repositories.",
          })),
          (G[5] = n))
        : (n = G[5])
      let ev = n
      G[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (0, i.jsx)(d.A, {
            id: "codeReview.setup.enabling",
            defaultMessage: "Enabling",
            description:
              "Loading label on the Enable button while automatic reviews are being enabled for the selected repositories.",
          })),
          (G[6] = o))
        : (o = G[6])
      let ey = o
      G[7] !== D ? ((l = D.length > 0 && D.every(eh)), (G[7] = D), (G[8] = l)) : (l = G[8])
      let eb = l,
        ew = Y.security && eb
      G[9] !== Y || G[10] !== ew ? ((u = { ...Y, security: ew }), (G[9] = Y), (G[10] = ew), (G[11] = u)) : (u = G[11])
      let ex = u
      G[12] !== ex ||
      G[13] !== W ||
      G[14] !== U ||
      G[15] !== $ ||
      G[16] !== z ||
      G[17] !== D ||
      G[18] !== J ||
      G[19] !== ea ||
      G[20] !== O ||
      G[21] !== Z
        ? ((p = async function () {
            if (ea || 0 === D.length) return
            let e = performance.now()
            Z(null == J ? "review_upsell_setup_enable_clicked" : "review_upsell_setup_retry_clicked")
            let t = null == J ? D : J.filter(em).map(ef)
            ei({ completed: 0, total: t.length })
            let s = await (async function (e, t, s, i, r, n) {
                let o,
                  a = () =>
                    e.get(g.chatGptAuthenticatedUserId$) === i.userId &&
                    e.get(g.chatGptAuthenticatedAccountId$) === i.accountId,
                  l = [],
                  c = 0
                for (let e = 0; e < t.length; e += 4) {
                  let i = await Promise.all(
                    t.slice(e, e + 4).map(async (e) => {
                      let t = await (async function (e) {
                        if (!a()) return { repository: e, status: "failed", reason: "account" }
                        try {
                          let t,
                            i,
                            n,
                            l = await en.CodexRequest.safeGet("/wham/settings/code_review/{repo_id}", {
                              parameters: { path: { repo_id: e.repository.id } },
                            })
                          if (!a()) return { repository: e, status: "failed", reason: "account" }
                          if (null !== l.edit_blocked_reason)
                            return { repository: e, status: "failed", reason: "permission" }
                          if (l.funding_authorization_required)
                            return { repository: e, status: "failed", reason: "funding" }
                          if (
                            ((i = K(l, s.scope)),
                            (n = null != l.security_review && K(l.security_review, s.scope)),
                            ("code" !== s.kind || i) && (!("security" === s.kind || s.security) || n))
                          )
                            return { repository: l, status: "enabled" }
                          if (
                            "code" === s.kind &&
                            !s.security &&
                            null != l.security_review &&
                            null == B(l.security_review) &&
                            ((o = o ?? en.CodexRequest.safeGet("/wham/settings/user")), (t = await o), !a())
                          )
                            return { repository: e, status: "failed", reason: "account" }
                          let c = (function (e, t) {
                              let s = "all" === t.scope ? "review_everyone" : "review_if_enabled",
                                i = {
                                  repository: e.repository.id,
                                  review_preference: e.review_preference,
                                  funding_generation: e.funding_generation,
                                }
                              if (
                                ("code" !== t.kind ||
                                  K(e, t.scope) ||
                                  ((i.global_review_preference = s),
                                  (i.review_preference = "team"),
                                  t.codeTrigger !== e.code_review_trigger_policy &&
                                    (i.code_review_trigger_policy = t.codeTrigger)),
                                ("security" === t.kind || t.security) &&
                                  (null == e.security_review || !K(e.security_review, t.scope)))
                              ) {
                                ;((i.security_review = { global_review_preference: s }),
                                  e.security_review?.review_preference !== "team" &&
                                    (i.security_review.review_preference = "team"))
                                let r = "code" === t.kind ? "code_review" : t.securityTrigger
                                ;(r !== e.security_review?.trigger_policy && (i.security_review.trigger_policy = r),
                                  e.security_review?.severity_threshold == null &&
                                    (i.security_review.severity_threshold = "high"))
                              }
                              return i
                            })(l, s),
                            d = await en.CodexRequest.safePatch("/wham/settings/code_review", {
                              expectedErrorStatuses: [400, 403, 409],
                              requestBody: { repo_review_settings: [c] },
                            })
                          if (!a()) return { repository: e, status: "failed", reason: "account" }
                          let u = d.repo_review_settings.find((e) => e.repository === c.repository)
                          if (
                            null == u ||
                            u.review_preference !== c.review_preference ||
                            (null != c.global_review_preference &&
                              u.global_review_preference !== c.global_review_preference) ||
                            (null != c.security_review &&
                              u.security_review?.global_review_preference !==
                                c.security_review.global_review_preference) ||
                            (c.security_review?.review_preference != null &&
                              u.security_review?.review_preference !== c.security_review.review_preference)
                          )
                            return { repository: e, status: "failed", reason: "save" }
                          if (null != c.global_review_preference) {
                            let e = B({ ...l.security_review, ...u.security_review }, t?.security_review?.preference)
                            r(
                              !0 === e
                                ? "review_upsell_setup_code_with_security_repository_enabled"
                                : "review_upsell_setup_code_without_security_repository_enabled",
                            )
                          }
                          return (
                            null != c.security_review && r("review_upsell_setup_security_repository_enabled"),
                            { repository: l, status: "enabled" }
                          )
                        } catch (i) {
                          let t = "save"
                          a()
                            ? i instanceof eo.fk && 403 === i.status
                              ? (t = "permission")
                              : i instanceof eo.fk && 409 === i.status && (t = "conflict")
                            : (t = "account")
                          let s = { repository: e, status: "failed", reason: t }
                          if ("account" !== t && i instanceof eo.fk && i.status >= 400 && i.status < 500) {
                            let e = (0, er.d)(i)?.message.trim()
                            e && (s.errorMessage = e)
                          }
                          return s
                        }
                      })(e)
                      return ((c += 1), n?.(c), t)
                    }),
                  )
                  l.push(...i)
                }
                return (e.queryClient.invalidateQueries({ queryKey: ["repository-review-settings"] }), l)
              })(O, t, ex, W, Z, (e) => ei({ completed: e, total: t.length })).finally(() => ei(null)),
              r = new Map(s.map(eg)),
              n = (J ?? s).map((e) => r.get(e.repository.repository.id) ?? e),
              o = s.filter(ep).length,
              a = "partial_failure"
            if (
              (o === s.length ? (a = "success") : 0 === o && (a = "failure"),
              O.get(g.chatGptAuthenticatedUserId$) === W.userId &&
                O.get(g.chatGptAuthenticatedAccountId$) === W.accountId &&
                (0, T.X)(O, {
                  type: "upsell_setup_completed",
                  provider: z,
                  durationMs: performance.now() - e,
                  repositoryCount: t.length,
                  reviewType: "code" === ex.kind && ex.security ? "code_and_security" : ex.kind,
                  outcome: a,
                  attempt: null == J ? "enable" : "retry",
                }),
              n.every(eu))
            ) {
              let e = "code" === ex.kind && ex.security ? "both" : ex.kind
              ;(O.get(_.Id).success(
                (0, i.jsx)(d.A, {
                  id: "codeReview.setup.success.toastWithCount",
                  defaultMessage:
                    "{review, select, security {Security review enabled} code {Code review enabled} other {Code and security review enabled}} for {count, plural, one {# repository} other {# repositories}}",
                  description:
                    "Success toast after every selected repository has automatic reviews enabled. count includes earlier successes when a retry completes. review identifies code review, security review, or both.",
                  values: { review: e, count: n.length },
                }),
                {
                  variant: "successNeutral",
                  actionPlacement: "inline",
                  primaryAction: {
                    label: (0, i.jsx)(d.A, {
                      id: "codeReview.setup.settings",
                      defaultMessage: "Review settings",
                      description: "Open repository review settings after successfully enabling reviews.",
                    }),
                    onClick: $,
                  },
                },
              ),
                U())
              return
            }
            et(n)
          }),
          (G[12] = ex),
          (G[13] = W),
          (G[14] = U),
          (G[15] = $),
          (G[16] = z),
          (G[17] = D),
          (G[18] = J),
          (G[19] = ea),
          (G[20] = O),
          (G[21] = Z),
          (G[22] = p))
        : (p = G[22])
      let e_ = p,
        ej = !ea
      return (
        G[23] !== U || G[24] !== ea
          ? ((f = (e) => {
              e || ea || U()
            }),
            (G[23] = U),
            (G[24] = ea),
            (G[25] = f))
          : (f = G[25]),
        G[26] !== e_
          ? ((m = (e) => {
              ;(e.preventDefault(), e_())
            }),
            (G[26] = e_),
            (G[27] = m))
          : (m = G[27]),
        G[28] !== L ? ((h = (0, i.jsx)(q, { kind: L })), (G[28] = L), (G[29] = h)) : (h = G[29]),
        G[30] !== F ||
        G[31] !== W ||
        G[32] !== L ||
        G[33] !== U ||
        G[34] !== Y ||
        G[35] !== es ||
        G[36] !== z ||
        G[37] !== D ||
        G[38] !== J ||
        G[39] !== ea ||
        G[40] !== O ||
        G[41] !== eb ||
        G[42] !== Z
          ? ((v =
              null == J &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(x.OO, {
                    children: (0, i.jsx)(H, {
                      provider: z,
                      connectorId: F,
                      kind: L,
                      requireSecurity: Y.security,
                      selected: D,
                      disabled: ea,
                      progress: es,
                      onChange: V,
                    }),
                  }),
                  (0, i.jsx)(x.OO, {
                    children: (0, i.jsxs)(k.t, {
                      variant: "outlined",
                      dividers: !1,
                      children: [
                        (0, i.jsx)(M.ic, {
                          size: "compact",
                          label: (0, i.jsx)(d.A, {
                            id: "settings.codeReview.repository.scope",
                            defaultMessage: "Review",
                            description:
                              "Label for selecting whose pull requests receive automatic reviews in repository settings.",
                          }),
                          control: (e) =>
                            (0, i.jsx)(A.wW, {
                              ...e,
                              value: Y.scope,
                              options: ["all", "team"],
                              disabled: ea,
                              onChange: (e) => X({ ...Y, scope: e }),
                              renderLabel: ed,
                            }),
                        }),
                        (0, i.jsx)(M.ic, {
                          size: "compact",
                          label: (0, i.jsx)(d.A, {
                            id: "codeReview.setup.when",
                            defaultMessage: "When to run",
                            description: "Label for when automatic repository reviews should run.",
                          }),
                          control: (e) =>
                            "code" === L
                              ? (0, i.jsx)(A.wW, {
                                  ...e,
                                  value: Y.codeTrigger,
                                  options: ["pr_open", "every_push"],
                                  disabled: ea,
                                  onChange: (e) => X({ ...Y, codeTrigger: e }),
                                  renderLabel: ec,
                                })
                              : (0, i.jsx)(A.wW, {
                                  ...e,
                                  value: Y.securityTrigger,
                                  options: ["code_review", "pr_open", "every_push"],
                                  disabled: ea,
                                  onChange: (e) => X({ ...Y, securityTrigger: e }),
                                  renderLabel: el,
                                }),
                        }),
                        "code" === L && eb
                          ? (0, i.jsx)(M.ic, {
                              size: "compact",
                              label: (0, i.jsx)(d.A, {
                                id: "codeReview.setup.security",
                                defaultMessage: "Security review",
                                description: "Optional additional security review in automatic code review setup.",
                              }),
                              description: (0, i.jsx)(d.A, {
                                id: "codeReview.setup.security.description",
                                defaultMessage: "Run additional review to detect security vulnerabilities",
                                description: "Explains the optional security review toggle in code review setup.",
                              }),
                              control: (e) =>
                                (0, i.jsx)(j.l, {
                                  ...e,
                                  checked: Y.security,
                                  disabled: ea,
                                  onChange: (e) => X({ ...Y, security: e }),
                                }),
                            })
                          : null,
                      ],
                    }),
                  }),
                  (0, i.jsxs)(x.Es, {
                    expandSingleButton: !1,
                    children: [
                      (0, i.jsx)(b.$, {
                        className: "flex-1",
                        size: "formAction",
                        color: "outlineSurface",
                        radius: "full",
                        type: "button",
                        disabled: ea,
                        onClick: () => {
                          ;(O.set(O.get(N, W.userId), (e) => ({ ...e, [L]: !0 })),
                            Z(
                              "code" === L
                                ? "review_upsell_setup_code_dismissed"
                                : "review_upsell_setup_security_dismissed",
                            ),
                            U())
                        },
                        children: (0, i.jsx)(d.A, {
                          id: "codeReview.setup.dismissUpsell",
                          defaultMessage: "Don’t show again",
                          description:
                            "Dismiss this type of review setup suggestion for the signed-in user across all repositories. Does not change review settings or dismiss the other review type.",
                        }),
                      }),
                      (0, i.jsx)(b.$, {
                        className: "flex-1",
                        size: "formAction",
                        color: "primary",
                        radius: "full",
                        type: "submit",
                        loading: ea,
                        disabled: ea || 0 === D.length,
                        disabledAppearance: ea ? "unchanged" : "dimmed",
                        sizingLabels: [ev, ey],
                        children: ea ? ey : ev,
                      }),
                    ],
                  }),
                ],
              })),
            (G[30] = F),
            (G[31] = W),
            (G[32] = L),
            (G[33] = U),
            (G[34] = Y),
            (G[35] = es),
            (G[36] = z),
            (G[37] = D),
            (G[38] = J),
            (G[39] = ea),
            (G[40] = O),
            (G[41] = eb),
            (G[42] = Z),
            (G[43] = v))
          : (v = G[43]),
        G[44] !== ex || G[45] !== $ || G[46] !== es?.completed || G[47] !== J || G[48] !== ea || G[49] !== e_
          ? ((S =
              null != J &&
              (0, i.jsx)(ee, {
                results: J,
                options: ex,
                saving: ea,
                completed: es?.completed ?? 0,
                onRetry: () => void e_(),
                onSettings: $,
              })),
            (G[44] = ex),
            (G[45] = $),
            (G[46] = es?.completed),
            (G[47] = J),
            (G[48] = ea),
            (G[49] = e_),
            (G[50] = S))
          : (S = G[50]),
        G[51] !== v || G[52] !== S
          ? ((R = (0, i.jsxs)(x.R4, { children: [v, S] })), (G[51] = v), (G[52] = S), (G[53] = R))
          : (R = G[53]),
        G[54] !== m || G[55] !== h || G[56] !== R
          ? ((P = (0, i.jsxs)(x.R4, {
              variant: "chatgpt",
              size: "viewport",
              as: "form",
              onSubmit: m,
              children: [h, R],
            })),
            (G[54] = m),
            (G[55] = h),
            (G[56] = R),
            (G[57] = P))
          : (P = G[57]),
        G[58] !== ea || G[59] !== ej || G[60] !== f || G[61] !== P
          ? ((I = (0, i.jsx)(w.lG, {
              open: !0,
              size: "beacon",
              variant: "promotional",
              showDialogClose: ej,
              shouldIgnoreClickOutside: ea,
              onOpenChange: f,
              children: P,
            })),
            (G[58] = ea),
            (G[59] = ej),
            (G[60] = f),
            (G[61] = P),
            (G[62] = I))
          : (I = G[62]),
        I
      )
    }
    function el(e) {
      return "code_review" === e
        ? (0, i.jsx)(d.A, {
            id: "codeReview.setup.whenCodeReviewRuns",
            defaultMessage: "When code review runs",
            description: "Security review schedule option to run whenever code review runs.",
          })
        : (0, i.jsx)(A.dN, { value: e })
    }
    function ec(e) {
      return (0, i.jsx)(A.dN, { value: e })
    }
    function ed(e) {
      return (0, i.jsx)(d.A, {
        id: "codeReview.setup.scope.option",
        defaultMessage: "{scope, select, all {All PRs} other {Team PRs}}",
        description:
          "Who receives automatic reviews for selected repositories. All PRs includes every contributor; Team PRs includes workspace members.",
        values: { scope: e },
      })
    }
    function eu(e) {
      return "enabled" === e.status
    }
    function ep(e) {
      return "enabled" === e.status
    }
    function eg(e) {
      return [e.repository.repository.id, e]
    }
    function ef(e) {
      return e.repository
    }
    function em(e) {
      return "failed" === e.status
    }
    function eh(e) {
      return null != e.security_review
    }
    function ev(e) {
      let t,
        s,
        n = (0, r.c)(7),
        { request: o } = e,
        l = (0, a.Ul)(m.z),
        c = (0, a.Ul)(g.chatGptAuthenticatedUserId$),
        d = (0, a.Ul)(g.chatGptAuthenticatedAccountId$)
      if ("enabled" !== l || null == c || null == d) return null
      let u = `${c}:${d}`
      return (
        n[0] !== d || n[1] !== c ? ((t = { userId: c, accountId: d }), (n[0] = d), (n[1] = c), (n[2] = t)) : (t = n[2]),
        n[3] !== o || n[4] !== u || n[5] !== t
          ? ((s = (0, i.jsx)(ey, { request: o, identity: t }, u)), (n[3] = o), (n[4] = u), (n[5] = t), (n[6] = s))
          : (s = n[6]),
        s
      )
    }
    function ey(e) {
      let t,
        s,
        n,
        g,
        m,
        b,
        w,
        x,
        _ = (0, r.c)(24),
        { request: j, identity: C } = e,
        A = (0, u.Zp)(),
        { data: M } = (0, h.wJ)(),
        k = (0, a._U)(N, C.userId),
        { trackCodeReviewInteraction: T } = (0, y.uM)()
      _[0] !== j.account ? ((t = (0, l.u)(j.account)), (_[0] = j.account), (_[1] = t)) : (t = _[1])
      let S = t,
        R = `${j.pullRequest.owner}/${j.pullRequest.repository}`
      "connectorId" in j.account
        ? (s = j.account.connectorId)
        : null == (s = j.account.connection?.connectorId ?? null) && "github.com" === j.account.hostname && (s = p.qD)
      let P = s ?? ""
      _[2] !== S || _[3] !== R || _[4] !== P
        ? ((n = { provider: S, connectorId: P, search: R }), (_[2] = S), (_[3] = R), (_[4] = P), (_[5] = n))
        : (n = _[5])
      let q = null != s
      _[6] !== q ? ((g = { enabled: q }), (_[6] = q), (_[7] = g)) : (g = _[7])
      let { data: L, isError: z, isFetching: F } = (0, a._U)(v.BX, n, g),
        W = L?.repo_review_settings.find((e) => e.repository.repository_full_name.toLowerCase() === R.toLowerCase()),
        [U, $] = (0, c.useState)(null),
        O =
          null == s || null == W || z || F
            ? null
            : null == (x = V(W, M, "code", !1))
              ? "code"
              : "enabled" !== x
                ? null
                : null == V(W, M, "security", !0)
                  ? "security"
                  : null
      return (
        _[8] !== W || _[9] !== k || _[10] !== O || _[11] !== $ || _[12] !== T
          ? ((m =
              null == O || null == W || k[O]
                ? null
                : (0, i.jsxs)("button", {
                    className: I,
                    "data-variant": "banner",
                    "data-artwork": O,
                    type: "button",
                    onClick: () => {
                      ;(T("review_setup_upsell_opened"), $({ repository: W, kind: O }))
                    },
                    children: [
                      (0, i.jsxs)("span", {
                        className: "copy-mtj0R8",
                        children: [
                          (0, i.jsx)("span", {
                            className: G,
                            children: (0, i.jsx)(d.A, {
                              id: "codeReview.setup.banner.title",
                              defaultMessage:
                                "{kind, select, code {Set up Code Review Agent} other {Set up Security Review}}",
                              description:
                                "Setup suggestion for automatic code reviews or additional security vulnerability reviews.",
                              values: { kind: O },
                            }),
                          }),
                          (0, i.jsx)("span", {
                            className: E,
                            children: (0, i.jsx)(d.A, {
                              id: "codeReview.setup.banner.description",
                              defaultMessage:
                                "{kind, select, code {Scan PRs for bugs and vulnerabilities} other {Scan PRs for security vulnerabilities}}",
                              description:
                                "Short description of the suggested automatic review feature. PR means pull request.",
                              values: { kind: O },
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)(f.I, { asset: o, className: "shrink-0" }),
                    ],
                  })),
            (_[8] = W),
            (_[9] = k),
            (_[10] = O),
            (_[11] = $),
            (_[12] = T),
            (_[13] = m))
          : (m = _[13]),
        _[14] !== s || _[15] !== C || _[16] !== A || _[17] !== S || _[18] !== $ || _[19] !== U
          ? ((b =
              null != U
                ? (0, i.jsx)(ea, {
                    initialRepository: U.repository,
                    kind: U.kind,
                    provider: S,
                    connectorId: s ?? "",
                    identity: C,
                    onClose: () => $(null),
                    onSettings: () => {
                      ;($(null), A("/settings/code-review?tab=cloud"))
                    },
                  })
                : null),
            (_[14] = s),
            (_[15] = C),
            (_[16] = A),
            (_[17] = S),
            (_[18] = $),
            (_[19] = U),
            (_[20] = b))
          : (b = _[20]),
        _[21] !== m || _[22] !== b
          ? ((w = (0, i.jsxs)(i.Fragment, { children: [m, b] })), (_[21] = m), (_[22] = b), (_[23] = w))
          : (w = _[23]),
        w
      )
    }
  },
  RRpo(e, t, s) {
    let i = (0, s("Qgfj").YK)({
      creatorMicro: {
        id: "codexMicro.deviceName.creatorMicro",
        defaultMessage: "Creator Micro",
        description: "Product name for the Creator Micro keyboard",
      },
    })
    s.d(t, {}, { b: i })
  },
  wZQ4(e, t, s) {
    var i = s("ABep"),
      r = s("QosV"),
      n = s("zd8w"),
      o = s("RNul")
    function a(e) {
      return e.isIntersecting
    }
    s.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            s,
            l,
            c,
            d,
            u = (0, r.c)(20),
            {
              loadingPlaceholder: p,
              hasNextPage: g,
              isFetchingNextPage: f,
              onLoadNextPage: m,
              rootMargin: h,
              rootRef: v,
            } = e,
            y = (0, n.useRef)(null)
          u[0] !== g || u[1] !== f || u[2] !== m
            ? ((t = () => {
                g && !f && m()
              }),
              (u[0] = g),
              (u[1] = f),
              (u[2] = m),
              (u[3] = t))
            : (t = u[3])
          let b = (0, n.useEffectEvent)(t)
          if (
            (u[4] !== g || u[5] !== f || u[6] !== b || u[7] !== h || u[8] !== v
              ? ((s = () => {
                  let e = y.current
                  if (null == e || !g || f) return
                  if ("u" < typeof IntersectionObserver) return void b()
                  let t = new IntersectionObserver(
                    (e) => {
                      e.some(a) && (t.disconnect(), b())
                    },
                    { root: v?.current, rootMargin: h },
                  )
                  return (
                    t.observe(e),
                    () => {
                      t.disconnect()
                    }
                  )
                }),
                (u[4] = g),
                (u[5] = f),
                (u[6] = b),
                (u[7] = h),
                (u[8] = v),
                (u[9] = s))
              : (s = u[9]),
            u[10] !== g || u[11] !== f || u[12] !== h || u[13] !== v
              ? ((l = [g, f, h, v]), (u[10] = g), (u[11] = f), (u[12] = h), (u[13] = v), (u[14] = l))
              : (l = u[14]),
            (0, n.useEffect)(s, l),
            !g && !f)
          )
            return null
          if (!f) {
            let e
            return (
              u[15] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)("div", { ref: y, className: "min-h-px w-full" })), (u[15] = e))
                : (e = u[15]),
              e
            )
          }
          if (void 0 !== p) {
            let e
            return (
              u[16] !== p
                ? ((e = (0, i.jsx)("div", { ref: y, className: "min-h-px w-full", children: p })),
                  (u[16] = p),
                  (u[17] = e))
                : (e = u[17]),
              e
            )
          }
          u[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = (0, i.jsx)("div", {
                ref: y,
                className: "flex w-full justify-center py-3",
                children: (0, i.jsx)(o.y, { className: "icon-xs text-secondary" }),
              })),
              (u[18] = c))
            : (c = u[18])
          let w = c
          return (
            u[19] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, i.jsxs)(i.Fragment, { children: [null, (0, i.jsx)(i.Fragment, { children: w })] })),
                (u[19] = d))
              : (d = u[19]),
            d
          )
        },
      },
    )
  },
  S5NB(e, t, s) {
    let i = (0, s("Qgfj").YK)({
      title: {
        id: "restricted.cloudComputer.title",
        defaultMessage: "Cloud computer",
        description: "Title of cloud computer settings",
      },
      cookies: {
        id: "restricted.cloudComputer.cookies",
        defaultMessage: "ChatGPT Work cookies",
        description: "Cookies managed by ChatGPT Work, separate from the user’s dot’s cookies",
      },
      cookiesDescription: {
        id: "restricted.cloudComputer.cookies.description",
        defaultMessage: "Manage cookies used by ChatGPT Work",
        description: "Description of the cookie manager for ChatGPT Work in the cloud",
      },
      approvalsDescription: {
        id: "restricted.cloudComputer.approvals.description",
        defaultMessage: "Choose whether ChatGPT Work asks before opening websites. Applies only to ChatGPT Work.",
        description: "Explains that cloud website approval settings affect ChatGPT Work, not the user's dot",
      },
      approvals: {
        id: "restricted.cloudComputer.approvals",
        defaultMessage: "ChatGPT Work website approvals",
        description: "Website approvals apply only to ChatGPT Work in the cloud",
      },
    })
    s.d(t, {}, { P: i })
  },
  Sptq(e, t, s) {
    var i = s("zTeN"),
      r = s("eFn4"),
      n = s("Sfgm"),
      o = s("S7UE"),
      a = s("KH2l"),
      l = s("OWtl"),
      c = s("vw1R")
    let d = (0, i.un)(l.u, ({ get: e }) => {
        let t = e(r.$S)
        if (t.authLoading) return "loading"
        let s = "chatgpt" === t.authMethod && null != t.accountId && (0, c.o)(t.plan) ? e(r.Jk, t.accountId) : null
        return (0, n.P4)(t.plan ?? void 0, t.authMethod, {
          isLoading: t.accountInfoLoading || s?.isPending === !0,
          hasErrors: t.accountInfoError || s?.isError === !0,
          hasWorkspaceEnabledCodex: s?.data?.beta_settings.wham_access === !0,
          needsOnboarding: !1,
        })
      }),
      u = (0, i.un)(l.u, ({ get: e }) => {
        let t = e(d),
          s = e(a.Am),
          i = e(o.u)
        return {
          cloud: { visible: "enabled" === t, pending: "loading" === t, error: "error" === t },
          app: {
            visible: s && "allowed" === i.status,
            pending: s && "loading" === i.status,
            error: s && "error" === i.status,
          },
        }
      })
    s.d(t, {}, { T: u, z: d })
  },
  uxIz(e, t, s) {
    let i = (0, s("Qgfj").YK)({
      title: {
        id: "restricted.passwords.title",
        defaultMessage: "Passwords",
        description:
          "Title of the settings section for saved website passwords, distinct from the user's ChatGPT login password",
      },
      search: {
        id: "restricted.passwords.search",
        defaultMessage: "Search passwords",
        description: "Placeholder and accessible label for filtering saved passwords by website or account label",
      },
    })
    s.d(t, {}, { $: "1675852838", N: i })
  },
  uMwG(e, t, s) {
    var i = s("QosV"),
      r = s("T0Rc"),
      n = s("irkb"),
      o = s("xSOA"),
      a = s("zTeN"),
      l = s("SPnB"),
      c = s("eFn4"),
      d = s("EOo5"),
      u = s("GaA7"),
      p = s("hZax"),
      g = s("rvFo"),
      f = s("HFSu")
    function m(e) {
      return ["cloud-user-preferences", e]
    }
    function h(e) {
      return (0, a.Ul)(l.o8)
    }
    function v(e) {
      let { signal: t } = e
      return f.CodexRequest.safeGet("/wham/settings/user", { signal: t })
    }
    function y() {
      return f.CodexRequest.safeGet("/wham/settings/configs/user-preferences")
    }
    function b(e, t, s) {
      let i = e
      for (let e of t) i = i.replaceAll(e.value, s(e))
      return i
    }
    s.d(
      t,
      {},
      {
        If: h,
        Zl: function () {
          let e,
            t,
            s = (0, i.c)(6),
            { accountId: n, userId: o } = (0, d.As)()
          s[0] !== n || s[1] !== o
            ? ((e = ["cloud-preferences-config", n, o]), (s[0] = n), (s[1] = o), (s[2] = e))
            : (e = s[2])
          let a = null != n && null != o
          return (
            s[3] !== e || s[4] !== a
              ? ((t = { queryKey: e, queryFn: y, enabled: a, retry: !1, staleTime: g.D.FIVE_MINUTES }),
                (s[3] = e),
                (s[4] = a),
                (s[5] = t))
              : (t = s[5]),
            (0, r.I)(t)
          )
        },
        d9: function (e, t, s) {
          let i = (e.match(/{/g) ?? []).length
          if (i !== (e.match(/}/g) ?? []).length) return "bracket-mismatch"
          if (0 === i) return "missing-pattern"
          let r = s.map((e) => e.value)
          if ((e.match(/{([^}]+)}/g) ?? []).some((e) => !r.includes(e))) return "invalid-pattern"
          let n = b(e, s, (e) => "x".repeat(e.char_count))
          return n.length > t
            ? "too-long"
            : n.startsWith("/")
              ? "leading-slash"
              : /^[a-zA-Z0-9./\-_]+$/.test(n)
                ? null
                : "invalid-characters"
        },
        ig: function (e, t) {
          return b(e, t, (e) => e.example)
        },
        sN: function () {
          let e,
            t,
            s,
            r,
            a,
            l = (0, i.c)(13),
            { accountId: c, userId: p } = (0, d.As)(),
            g = h(p),
            v = (0, n.jE)()
          return (
            l[0] !== c || l[1] !== g
              ? ((e = ["update-cloud-user-preferences", c, g]),
                (t = (e) => {
                  if (null == c || null == g) throw Error("Sign in to update preferences")
                  return f.CodexRequest.safePatch("/wham/settings/user", {
                    expectedIdentity: { accountId: c, userId: g },
                    requestBody: e,
                  })
                }),
                (l[0] = c),
                (l[1] = g),
                (l[2] = e),
                (l[3] = t))
              : ((e = l[2]), (t = l[3])),
            l[4] !== g ? ((s = () => ({ queryKey: m(g) })), (l[4] = g), (l[5] = s)) : (s = l[5]),
            l[6] !== v
              ? ((r = async (e, t, s) => {
                  null != s &&
                    ((void 0 !== t.custom_instructions ||
                      void 0 !== t.communication_guide ||
                      void 0 !== t.communication_guide_enabled) &&
                      (await (u.appServices?.clientCoordination ?? u.appServices?.queryCache)?.invalidateQueryCache({
                        queryKey: [...s.queryKey],
                      })),
                    v.setQueryData(s.queryKey, e))
                }),
                (l[6] = v),
                (l[7] = r))
              : (r = l[7]),
            l[8] !== e || l[9] !== t || l[10] !== s || l[11] !== r
              ? ((a = { mutationKey: e, mutationFn: t, onMutate: s, onSuccess: r }),
                (l[8] = e),
                (l[9] = t),
                (l[10] = s),
                (l[11] = r),
                (l[12] = a))
              : (a = l[12]),
            (0, o.n)(a)
          )
        },
        tz: function () {
          let e,
            t = (0, i.c)(3),
            { authMethod: s, isLoading: r } = (0, d.As)(),
            n = (0, p.Zj)("2826489636"),
            o = (0, p.Zj)((!!r || "chatgpt" === s || "chatgptAuthTokens" === s) && "1168186395"),
            l = (0, p.Zj)(!!o && "3816307151"),
            u = (0, a.Ul)(l ? c.L5 : null),
            g = l && (void 0 === u ? void 0 : (u?.cloudAccess ?? !0)),
            f = n || g
          return (
            t[0] !== g || t[1] !== f
              ? ((e = { cloudInstructionsEnabled: g, unifiedInstructions: f }), (t[0] = g), (t[1] = f), (t[2] = e))
              : (e = t[2]),
            e
          )
        },
        wJ: function () {
          let e,
            t,
            s = (0, i.c)(5),
            { userId: n } = (0, d.As)(),
            o = h(n)
          s[0] !== o ? ((e = m(o)), (s[0] = o), (s[1] = e)) : (e = s[1])
          let a = null != o
          return (
            s[2] !== e || s[3] !== a
              ? ((t = { queryKey: e, queryFn: v, enabled: a, retry: !1, staleTime: g.D.FIVE_MINUTES }),
                (s[2] = e),
                (s[3] = a),
                (s[4] = t))
              : (t = s[4]),
            (0, r.I)(t)
          )
        },
      },
    )
  },
  u5Xi(e, t, s) {
    var i = s("ABep"),
      r = s("QosV"),
      n = s("zd8w"),
      o = s("oyxz"),
      a = s("bqtn"),
      l = s("F0xz"),
      c = s("BSnr"),
      d = s("AWNZ"),
      u = s("QyE3"),
      p = s("ZEx5")
    function g(e) {
      let t,
        s,
        n,
        o,
        a,
        l = (0, r.c)(10)
      return (
        l[0] !== e
          ? (({ label: s, description: t, ...n } = e), (l[0] = e), (l[1] = t), (l[2] = s), (l[3] = n))
          : ((t = l[1]), (s = l[2]), (n = l[3])),
        l[4] !== n ? ((o = (e) => (0, i.jsx)(f, { ...n, ...e })), (l[4] = n), (l[5] = o)) : (o = l[5]),
        l[6] !== t || l[7] !== s || l[8] !== o
          ? ((a = (0, i.jsx)(d.ic, { label: s, description: t, control: o })),
            (l[6] = t),
            (l[7] = s),
            (l[8] = o),
            (l[9] = a))
          : (a = l[9]),
        a
      )
    }
    function f(e) {
      let t,
        s,
        o,
        l,
        c,
        d,
        p,
        g,
        f,
        h,
        v,
        y,
        b,
        w,
        x = (0, r.c)(40)
      x[0] !== e
        ? (({ value: p, options: l, disabled: s, onChange: o, renderLabel: d, renderDescription: c, ...t } = e),
          (x[0] = e),
          (x[1] = t),
          (x[2] = s),
          (x[3] = o),
          (x[4] = l),
          (x[5] = c),
          (x[6] = d),
          (x[7] = p))
        : ((t = x[1]), (s = x[2]), (o = x[3]), (l = x[4]), (c = x[5]), (d = x[6]), (p = x[7]))
      let _ = (0, n.useId)(),
        j = null == c ? void 0 : "panelWide",
        C = null == t["aria-labelledby"] ? void 0 : `${t["aria-labelledby"]} ${_}`
      if (
        (x[8] !== t || x[9] !== _
          ? ((g = null == t["aria-label"] ? t["aria-describedby"] : [t["aria-describedby"], _].filter(m).join(" ")),
            (x[8] = t),
            (x[9] = _),
            (x[10] = g))
          : (g = x[10]),
        x[11] !== d || x[12] !== p ? ((f = d(p)), (x[11] = d), (x[12] = p), (x[13] = f)) : (f = x[13]),
        x[14] !== f || x[15] !== _
          ? ((h = (0, i.jsx)("span", { id: _, children: f })), (x[14] = f), (x[15] = _), (x[16] = h))
          : (h = x[16]),
        x[17] !== t || x[18] !== s || x[19] !== C || x[20] !== g || x[21] !== h
          ? ((v = (0, i.jsx)(u.vg, { ...t, "aria-labelledby": C, "aria-describedby": g, disabled: s, children: h })),
            (x[17] = t),
            (x[18] = s),
            (x[19] = C),
            (x[20] = g),
            (x[21] = h),
            (x[22] = v))
          : (v = x[22]),
        x[23] !== o || x[24] !== l || x[25] !== c || x[26] !== d)
      ) {
        let e
        ;(x[28] !== o || x[29] !== c || x[30] !== d
          ? ((e = (e) =>
              (0, i.jsx)(a.ms.RadioItem, { value: e, onSelect: () => o(e), SubText: c?.(e), children: d(e) }, e)),
            (x[28] = o),
            (x[29] = c),
            (x[30] = d),
            (x[31] = e))
          : (e = x[31]),
          (y = l.map(e)),
          (x[23] = o),
          (x[24] = l),
          (x[25] = c),
          (x[26] = d),
          (x[27] = y))
      } else y = x[27]
      return (
        x[32] !== y || x[33] !== p
          ? ((b = (0, i.jsx)(a.ms.RadioGroup, { value: p, children: y })), (x[32] = y), (x[33] = p), (x[34] = b))
          : (b = x[34]),
        x[35] !== s || x[36] !== j || x[37] !== v || x[38] !== b
          ? ((w = (0, i.jsx)(a.Ab, { contentWidth: j, disabled: s, triggerButton: v, children: b })),
            (x[35] = s),
            (x[36] = j),
            (x[37] = v),
            (x[38] = b),
            (x[39] = w))
          : (w = x[39]),
        w
      )
    }
    function m(e) {
      return null != e
    }
    function h(e) {
      return (0, i.jsx)(o.A, {
        id: "settings.codeReview.repository.scope.option",
        defaultMessage: "{scope, select, everyone {All PRs} team {Team PRs} other {Follow personal preferences}}",
        description:
          "Automatic review scope in repository settings. All PRs includes every contributor, Team PRs preserves an existing workspace setting, and Follow personal preferences lets each contributor opt in. PR means pull request.",
        values: { scope: e },
      })
    }
    s.d(
      t,
      {},
      {
        Qt: function (e) {
          let t,
            s = (0, r.c)(2),
            { value: n } = e
          return (
            s[0] !== n
              ? ((t = (0, i.jsx)(o.A, {
                  id: "settings.codeReview.repository.severity.option.v2",
                  defaultMessage:
                    "{value, select, critical {Critical} high {High} medium {Medium} low {Low} inherit {Use repository setting} other {Unknown}}",
                  description:
                    "Minimum severity of vulnerability findings reported or blocked by repository security review. The inherit option uses the corresponding automatic or manual repository setting for a path override.",
                  values: { value: n },
                })),
                (s[0] = n),
                (s[1] = t))
              : (t = s[1]),
            t
          )
        },
        SA: function (e) {
          let t,
            s,
            n,
            a,
            u,
            f,
            m,
            v,
            y = (0, r.c)(26),
            { title: b, children: w, security: x, preferences: _, disabled: j, onUpdate: C } = e,
            A = "never_review" !== _.global_review_preference,
            M = "team" === _.review_preference ? "team" : "personal"
          ;("review_everyone" === _.global_review_preference && (M = "everyone"),
            y[0] !== b ? ((t = (0, i.jsx)(c.X.Header, { title: b })), (y[0] = b), (y[1] = t)) : (t = y[1]))
          let k = String(void 0 !== x && x)
          ;(y[2] !== k
            ? ((s = (0, i.jsx)(o.A, {
                id: "settings.codeReview.repository.automatic",
                defaultMessage: "{security, select, true {Auto security review} other {Automatic review}}",
                description:
                  "Label for the repository setting that enables automatic reviews. Security reviews look for vulnerabilities; the other option reviews code.",
                values: { security: k },
              })),
              (y[2] = k),
              (y[3] = s))
            : (s = y[3]),
            y[4] !== A
              ? ((n = A
                  ? void 0
                  : (0, i.jsx)(o.A, {
                      id: "settings.codeReview.repository.manualReviewNotice",
                      defaultMessage: "You can still request a review with @codex",
                      description:
                        "Notice shown while automatic repository reviews are disabled. Signed-in Codex users can request a manual review by mentioning @codex.",
                    })),
                (y[4] = A),
                (y[5] = n))
              : (n = y[5]),
            y[6] !== j || y[7] !== A || y[8] !== C
              ? ((a = (e) =>
                  (0, i.jsx)(l.l, {
                    ...e,
                    checked: A,
                    disabled: j,
                    onChange: (e) => C({ global_review_preference: e ? "review_if_enabled" : "never_review" }),
                  })),
                (y[6] = j),
                (y[7] = A),
                (y[8] = C),
                (y[9] = a))
              : (a = y[9]),
            y[10] !== s || y[11] !== n || y[12] !== a
              ? ((u = (0, i.jsx)(d.ic, { label: s, description: n, control: a })),
                (y[10] = s),
                (y[11] = n),
                (y[12] = a),
                (y[13] = u))
              : (u = y[13]),
            y[14] !== j || y[15] !== A || y[16] !== C || y[17] !== M
              ? ((f = A
                  ? (0, i.jsx)(g, {
                      label: (0, i.jsx)(o.A, {
                        id: "settings.codeReview.repository.scope",
                        defaultMessage: "Review",
                        description:
                          "Label for selecting whose pull requests receive automatic reviews in repository settings.",
                      }),
                      value: M,
                      options: ["everyone", "team", "personal"],
                      disabled: j,
                      onChange: (e) =>
                        C({
                          global_review_preference: "everyone" === e ? "review_everyone" : "review_if_enabled",
                          review_preference: "personal" === e ? "never" : "team",
                        }),
                      renderLabel: h,
                    })
                  : null),
                (y[14] = j),
                (y[15] = A),
                (y[16] = C),
                (y[17] = M),
                (y[18] = f))
              : (f = y[18]))
          let T = A ? w : null
          return (
            y[19] !== u || y[20] !== f || y[21] !== T
              ? ((m = (0, i.jsx)(c.X.Content, { children: (0, i.jsxs)(p.t, { children: [u, f, T] }) })),
                (y[19] = u),
                (y[20] = f),
                (y[21] = T),
                (y[22] = m))
              : (m = y[22]),
            y[23] !== m || y[24] !== t
              ? ((v = (0, i.jsxs)(c.X, { children: [t, m] })), (y[23] = m), (y[24] = t), (y[25] = v))
              : (v = y[25]),
            v
          )
        },
        _P: g,
        dN: function (e) {
          let t,
            s = (0, r.c)(2),
            { value: n } = e
          return (
            s[0] !== n
              ? ((t = (0, i.jsx)(o.A, {
                  id: "settings.codeReview.repository.trigger.option",
                  defaultMessage:
                    "{value, select, personal {Follow personal preferences} pr_open {On PR open} every_push {On every push} smart_detect {Smart detect (Experimental)} code_review {Whenever code review runs} other {Unknown}}",
                  description:
                    "Options for when automatic repository reviews run. PR means pull request. Smart detect lets Codex decide whether changed code needs another review.",
                  values: { value: n },
                })),
                (s[0] = n),
                (s[1] = t))
              : (t = s[1]),
            t
          )
        },
        wW: f,
      },
    )
  },
  Vujf(e, t, s) {
    var i = s("zTeN"),
      r = s("SUID"),
      n = s("uc7r"),
      o = s("SPnB"),
      a = s("OWtl"),
      l = s("rvFo"),
      c = s("HFSu"),
      d = s("GDNt")
    let u = (0, i.vU)(a.u, (e, { get: t, scope: s }) => {
        let i = t(o.chatGptAuthenticatedAccountId$),
          a = t(o.chatGptAuthenticatedUserId$)
        return {
          queryKey: ["repository-review-connectors", i, a, e],
          enabled: !!i && !!a,
          queryFn: async ({ client: t, signal: l }) => {
            let c = (await (0, r.g)({ provider: e, applyEligibilityFilter: !0 })).filter(
              (e) => "DISABLED_BY_ADMIN" !== e.status && e.labels?.admin_only_connector !== "true",
            )
            if (0 === c.length) return []
            l.throwIfAborted()
            let d = await t.fetchQuery({ ...(0, n.dZ)({ accountId: i, userId: a, productSku: "CODEX" }), staleTime: 0 })
            if (
              (l.throwIfAborted(),
              s.get(o.chatGptAuthenticatedAccountId$) !== i || s.get(o.chatGptAuthenticatedUserId$) !== a)
            )
              throw Error("Account changed while loading repository connections")
            let u = new Set(d.map((e) => e.connector_id))
            return c.filter((e) => u.has(e.id))
          },
          retry: !1,
          refetchOnMount: !0,
          refetchOnWindowFocus: !0,
          staleTime: l.D.FIVE_MINUTES,
        }
      }),
      p = (0, i.vU)(a.u, (e, { get: t }) => ({
        queryKey: ["repository-review-settings", t(o.chatGptAuthenticatedAccountId$), "list", e],
        queryFn: () => h(e),
        retry: !1,
        refetchOnMount: !0,
        staleTime: l.D.FIVE_MINUTES,
      })),
      g = (0, i.N3)(a.u, (e, { get: t }) => ({
        queryKey: ["repository-review-settings", t(o.chatGptAuthenticatedAccountId$), "infinite-list", e],
        initialPageParam: null,
        queryFn: ({ pageParam: t }) => h({ ...e, nextToken: t }),
        getNextPageParam: (e) => e.next_token ?? null,
        retry: !1,
        refetchOnMount: !0,
        staleTime: l.D.FIVE_MINUTES,
      })),
      f = (0, i.vU)(a.u, (e, { get: t }) => ({
        queryKey: ["repository-review-settings", t(o.chatGptAuthenticatedAccountId$), "detail", e],
        queryFn: () =>
          c.CodexRequest.safeGet("/wham/settings/code_review/{repo_id}", { parameters: { path: { repo_id: e } } }),
        retry: !1,
        refetchOnMount: !0,
        staleTime: l.D.FIVE_MINUTES,
      })),
      m = (0, i.c4)(a.u, (e, { scope: t }) => ({
        mutationFn: (e) =>
          c.CodexRequest.safePatch("/wham/settings/code_review", {
            expectedErrorStatuses: [400, 403, 409],
            requestBody: { repo_review_settings: [e] },
          }),
        onSuccess: async () => {
          await t.queryClient.invalidateQueries({ queryKey: ["repository-review-settings"] })
        },
        onError: async (s) => {
          s instanceof d.fk && 409 === s.status && (await t.query.invalidate(f, e))
        },
      }))
    async function h(e) {
      let t = e.search.trim()
      if (0 === t.length && "gitlab" === e.provider)
        return c.CodexRequest.safeGet("/wham/settings/code_review", {
          parameters: {
            query: { provider: e.provider, next_token: e.nextToken, connector_id: e.connectorId, per_page: 8 },
          },
        })
      let s = Number(e.nextToken ?? 1),
        i = (function (e, t) {
          let s = e,
            i = /^https?:\/\//i.test(s),
            r = s.replace(/^www\./i, "")
          if (i || r.toLowerCase().startsWith("gitlab" === t ? "gitlab.com/" : "github.com/")) {
            let e = URL.parse(i ? s : `https://${r}`)
            if (null == e) return null
            s = e.pathname
          }
          "github" === t && (s = s.toLowerCase())
          let n = (s = s.replace(/\.git$/, "")).split("/").filter(Boolean)
          if ("gitlab" === t) {
            let e = n.findIndex((e, t) => t >= 2 && "-" === e)
            ;-1 !== e && (n = n.slice(0, e))
          }
          return n.length < 2 ? null : "gitlab" === t ? n.join("/") : n.slice(0, 2).join("/")
        })(t, e.provider)
      if (1 === s && null != i)
        try {
          let t = await c.CodexRequest.safeGet("/wham/settings/code_review/{repo_id}", {
            expectedErrorStatuses: [400, 403, 404],
            parameters: { path: { repo_id: `${e.provider}-${i}` }, query: { connector_id: e.connectorId } },
          })
          return { repo_review_settings: t.repository.archived ? [] : [t], next_token: null }
        } catch (e) {
          if (!(e instanceof d.fk) || ![400, 403, 404].includes(e.status)) throw e
        }
      let r = await c.CodexRequest.safeGet("/wham/settings/code_review_search", {
        parameters: {
          query: {
            query: "github" === e.provider ? `${t} archived:false`.trim() : t,
            limit: 8,
            page: s,
            provider: e.provider,
            connector_id: e.connectorId,
          },
        },
      })
      return {
        ...r,
        next_token: r.repo_review_settings.length < 8 || ("github" === e.provider && s >= 125) ? null : String(s + 1),
      }
    }
    s.d(t, {}, { BX: p, Hm: u, _E: f, jm: g, uH: m })
  },
  BSnr(e, t, s) {
    s.d(t, { X: () => o })
    var i = s("ABep"),
      r = s("QosV"),
      n = s("on57")
    let o = Object.assign(
      function (e) {
        let t,
          s,
          o = (0, r.c)(6),
          { children: a, id: l, className: c } = e
        return (
          o[0] !== c ? ((t = (0, n.A)("flex flex-col", c)), (o[0] = c), (o[1] = t)) : (t = o[1]),
          o[2] !== a || o[3] !== l || o[4] !== t
            ? ((s = (0, i.jsx)("section", { id: l, className: t, children: a })),
              (o[2] = a),
              (o[3] = l),
              (o[4] = t),
              (o[5] = s))
            : (s = o[5]),
          s
        )
      },
      {
        Header: function (e) {
          let t,
            s,
            o,
            a,
            l,
            c,
            d,
            u = (0, r.c)(32),
            {
              title: p,
              subtitle: g,
              actions: f,
              actionsAlignment: m,
              className: h,
              size: v,
              titleGap: y,
              spacing: b,
              subtitlePlacement: w,
              subtitleWrap: x,
            } = e,
            _ = void 0 === v ? "default" : v,
            j = void 0 === b ? "default" : b,
            C = void 0 === w ? "below-title" : w,
            A = void 0 === x ? "balance" : x,
            M = null != p,
            k = null != g,
            T = null != f,
            S = "compact" === _
          u[0] !== S || u[1] !== g || u[2] !== C || u[3] !== A
            ? ((t = g
                ? (0, i.jsx)("div", {
                    className: (0, n.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === A ? "text-balance" : "text-wrap",
                      S ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === C && "w-full",
                    ),
                    children: g,
                  })
                : null),
              (u[0] = S),
              (u[1] = g),
              (u[2] = C),
              (u[3] = A),
              (u[4] = t))
            : (t = u[4])
          let N = t
          if (!M && !k && !T) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(i.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let R = "below-header" === C ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            P = k && "compact" === j && "pb-2",
            I = k && "compact" !== j && "pb-3"
          u[6] !== h || u[7] !== k || u[8] !== S || u[9] !== j || u[10] !== R || u[11] !== P || u[12] !== I
            ? ((s = (0, n.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                R,
                P,
                I,
                !k && (0, n.A)("items-center pb-1.5", "compact" === j ? "min-h-8" : "min-h-toolbar"),
                k && S && "items-center",
                k && !S && "items-start",
                h,
              )),
              (u[6] = h),
              (u[7] = k),
              (u[8] = S),
              (u[9] = j),
              (u[10] = R),
              (u[11] = P),
              (u[12] = I),
              (u[13] = s))
            : (s = u[13])
          let G =
            "none" === (void 0 === y ? "default" : y)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[14] !== G ? ((o = (0, n.A)("flex min-w-0 flex-1 flex-col", G)), (u[14] = G), (u[15] = o)) : (o = u[15]),
            u[16] !== k || u[17] !== _ || u[18] !== p
              ? ((a = p
                  ? (0, i.jsx)("div", {
                      className: (0, n.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === _ && "text-sm leading-[18px]",
                        ("large" === _ || ("default" === _ && k)) && "text-lg",
                        ("base" === _ || ("default" === _ && !k)) && "text-base",
                      ),
                      children: p,
                    })
                  : null),
                (u[16] = k),
                (u[17] = _),
                (u[18] = p),
                (u[19] = a))
              : (a = u[19]))
          let E = "below-title" === C ? N : null
          ;(u[20] !== o || u[21] !== a || u[22] !== E
            ? ((l = (0, i.jsxs)("div", { className: o, children: [a, E] })),
              (u[20] = o),
              (u[21] = a),
              (u[22] = E),
              (u[23] = l))
            : (l = u[23]),
            u[24] !== f || u[25] !== m
              ? ((c = f
                  ? (0, i.jsx)("div", {
                      className: (0, n.A)("flex items-center gap-2", "end" === m && "self-end"),
                      children: f,
                    })
                  : null),
                (u[24] = f),
                (u[25] = m),
                (u[26] = c))
              : (c = u[26]))
          let q = "below-header" === C ? N : null
          return (
            u[27] !== s || u[28] !== l || u[29] !== c || u[30] !== q
              ? ((d = (0, i.jsxs)("div", { className: s, children: [l, c, q] })),
                (u[27] = s),
                (u[28] = l),
                (u[29] = c),
                (u[30] = q),
                (u[31] = d))
              : (d = u[31]),
            d
          )
        },
        Content: function (e) {
          let t,
            s,
            o = (0, r.c)(5),
            { children: a, className: l } = e
          return (
            o[0] !== l ? ((t = (0, n.A)("flex flex-col gap-1.5", l)), (o[0] = l), (o[1] = t)) : (t = o[1]),
            o[2] !== a || o[3] !== t
              ? ((s = (0, i.jsx)("div", { className: t, children: a })), (o[2] = a), (o[3] = t), (o[4] = s))
              : (s = o[4]),
            s
          )
        },
        Footer: function (e) {
          let t,
            s,
            o = (0, r.c)(6),
            { children: a, className: l, variant: c } = e,
            d =
              "action" === (void 0 === c ? "description" : c)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            o[0] !== l || o[1] !== d
              ? ((t = (0, n.A)("text-balance text-secondary", d, l)), (o[0] = l), (o[1] = d), (o[2] = t))
              : (t = o[2]),
            o[3] !== a || o[4] !== t
              ? ((s = (0, i.jsx)("div", { className: t, children: a })), (o[3] = a), (o[4] = t), (o[5] = s))
              : (s = o[5]),
            s
          )
        },
      },
    )
  },
  Y6nA(e, t, s) {
    s.d(t, { G: () => p })
    var i = s("WLmQ"),
      r = s("Qgfj"),
      n = s("EZRW")
    let o = (0, r.YK)({
      title: {
        id: "settings.nav.rosalind",
        defaultMessage: "GPT-Rosalind",
        description: "Title for the GPT-Rosalind plugin settings section",
      },
    })
    var a = s("S5NB"),
      l = s("uxIz"),
      c = s("qaaZ")
    let d = (0, r.zR)({
        id: "settings.nav.general-settings",
        defaultMessage: "General",
        description: "Title for general settings section",
      }),
      u = (0, r.YK)({
        family: d,
        billing: {
          id: "settings.nav.billing",
          defaultMessage: "Billing",
          description:
            "Navigation title for personal ChatGPT subscription, payment methods, invoices, and wallet settings",
        },
        agreements: {
          id: "workspaceAgreements.title",
          defaultMessage: "Agreements",
          description: "Title of the workspace agreements page",
        },
        age: {
          id: "settings.chatGpt.age.title",
          defaultMessage: "Age",
          description: "Title of the Age detail page within ChatGPT Account settings",
        },
        account: {
          id: "settings.nav.account",
          defaultMessage: "Account",
          description: "Title for ChatGPT account settings section",
        },
        "parental-controls": {
          id: "settings.nav.parental-controls",
          defaultMessage: "Parental controls",
          description: "Title for ChatGPT settings showing family members linked through parental controls",
        },
        "trusted-contact": {
          id: "settingsModal.trustedContacts.sectionTitle",
          defaultMessage: "Trusted contact",
          description: "Title for Trusted contact settings",
        },
        safety: {
          id: "settings.nav.safetyAndWellbeing",
          defaultMessage: "Safety & wellbeing",
          description: "Title for ChatGPT safety and wellbeing settings, including time management",
        },
        "time-management": {
          id: "settings.nav.time-management",
          defaultMessage: "Time management",
          description: "Title for ChatGPT time management settings, including the teen's Quiet Hours schedule",
        },
        appearance: {
          id: "settings.nav.appearance",
          defaultMessage: "Appearance",
          description: "Title for appearance settings section",
        },
        voice: { id: "settings.nav.voice", defaultMessage: "Voice", description: "Title for voice settings section" },
        storage: {
          id: "settings.nav.storage",
          defaultMessage: "Storage",
          description: "Title for ChatGPT library storage settings section",
        },
        pets: {
          id: "settings.nav.miniAndPets",
          defaultMessage: "Mini & Pets",
          description:
            "Title for settings for Mini, the floating compact panel, and its optional pets; use approved localized terminology",
        },
        chatGptPets: {
          id: "settings.nav.pets.v2",
          defaultMessage: "Pets",
          description:
            "Title for ChatGPT Work settings for choosing, creating, or uploading a collectible pet character",
        },
        "general-settings": d,
        notifications: {
          id: "settings.nav.notifications",
          defaultMessage: "Notifications",
          description: "Title for notifications settings section",
        },
        import: {
          id: "settings.nav.import.v2",
          defaultMessage: "Import",
          description:
            "Title for the import settings section. In French, use the infinitive verb 'Importer', not the noun 'Importation'.",
        },
        profile: { id: "settings.nav.profile", defaultMessage: "Profile", description: "Title for profile section" },
        security: {
          id: "settings.nav.security",
          defaultMessage: "Security",
          description: "Title for ChatGPT security settings section",
        },
        "keyboard-shortcuts": {
          id: "settings.nav.keyboard-shortcuts",
          defaultMessage: "Keyboard shortcuts",
          description: "Title for keyboard shortcuts settings section",
        },
        "codex-micro": {
          id: "settings.nav.codex-micro",
          defaultMessage: "Codex Micro",
          description: "Title for Codex Micro settings section",
        },
        appshots: {
          id: "settings.nav.appshots",
          defaultMessage: "Appshots",
          description:
            "Navigation title for settings that configure Appshots, Codex captures of the frontmost app window",
        },
        agent: {
          id: "settings.nav.agent",
          defaultMessage: "Configuration",
          description: "Title for configuration settings section",
        },
        "work-settings": {
          id: "settings.nav.workPreferences",
          defaultMessage: "Work preferences",
          description: "Navigation title for saved account preferences for Work",
        },
        "git-settings": {
          id: "settings.nav.git-settings",
          defaultMessage: "Git",
          description: "Title for git settings section",
        },
        "ads-controls": {
          id: "settings.nav.ads-controls",
          defaultMessage: "Ads controls",
          description: "Navigation title for ChatGPT advertising preferences and history",
        },
        "archived-chats": {
          id: "settings.nav.archived-chats",
          defaultMessage: "Archived chats",
          description: "Title for archived chats settings section",
        },
        "data-controls": {
          id: "settings.nav.chatGptDataControls",
          defaultMessage: "Data controls",
          description: "Title for shared data controls when ChatGPT settings are available",
        },
        chatGptSecurity: {
          id: "settings.nav.chatGptSecurity",
          defaultMessage: "Security and login",
          description: "Title for ChatGPT security and login settings section",
        },
        chatGptKeyboard: {
          id: "settings.nav.chatGptKeyboard",
          defaultMessage: "Keyboard",
          description: "Title for ChatGPT keyboard settings section",
        },
        chatGptRemotes: {
          id: "settings.nav.chatGptRemotes",
          defaultMessage: "Remotes",
          description: "Title for ChatGPT remote computer settings section",
        },
        chatGptInternalSettings: {
          id: "settings.nav.chatGptInternalSettings",
          defaultMessage: "Employee Only",
          description: "Title for employee-only ChatGPT settings section",
        },
        "code-review": {
          id: "settings.nav.codeReview",
          defaultMessage: "Code Review",
          description: "Title for the Code Review settings section",
        },
        "usage-code-review": {
          id: "settings.nav.codeReviewAnalytics",
          defaultMessage: "Code review analytics",
          description:
            "Settings navigation and command menu label for code review usage analytics, distinct from code review configuration",
        },
        "cloud-settings": {
          id: "settings.nav.cloudSettings",
          defaultMessage: "Cloud preferences",
          description: "Title for cloud settings section",
        },
        "codex-cloud": {
          id: "settings.nav.codexCloud",
          defaultMessage: "Codex Cloud",
          description: "Settings for Codex Cloud environments and the personal vault",
        },
        legacyCodexCloud: {
          id: "settings.nav.legacyCodexCloud",
          defaultMessage: "Legacy Codex Cloud",
          description: "Settings for the legacy Codex Cloud environment system",
        },
        "cloud-environments": {
          id: "settings.nav.cloudEnvironments",
          defaultMessage: "Cloud environments",
          description: "Title for cloud environments settings section",
        },
        personalization: {
          id: "settings.nav.personalization",
          defaultMessage: "Personalization",
          description: "Title for personalization settings section",
        },
        chronicle: {
          id: "settings.nav.chronicle",
          defaultMessage: "Computer history",
          description: "Title for Computer history settings section",
        },
        usage: {
          id: "settings.nav.usage",
          defaultMessage: "Usage & billing",
          description: "Title for usage and billing settings section",
        },
        enterpriseUsage: {
          id: "settings.nav.enterpriseUsage",
          defaultMessage: "Usage",
          description: "Title for the enterprise usage settings section when analytics has its own section",
        },
        analytics: {
          id: "settings.nav.analytics",
          defaultMessage: "Analytics",
          description: "Title for the usage analytics settings section",
        },
        "consumer-view": {
          id: "settings.nav.consumerView",
          defaultMessage: "Consumer analytics (internal)",
          description:
            "Settings navigation label for a restricted consumer usage dashboard used solely for OpenAI internal testing",
        },
        debug: { id: "settings.nav.debug", defaultMessage: "Debug", description: "Title for debug settings section" },
        "computer-use": {
          id: "settings.nav.computer-use",
          defaultMessage: "Computer use",
          description: "Title for computer use settings section",
        },
        "browser-use": {
          id: "settings.nav.browser-use",
          defaultMessage: "Browser",
          description: "Title for in-app browser settings section",
        },
        extension: {
          id: "settings.nav.namedBrowserExtension",
          defaultMessage: "{browserName} extension",
          description:
            "Title for browser extension settings; browserName is the browser's brand name, such as Chrome, Edge, or Brave",
        },
        browserExtension: {
          id: "settings.nav.browser-extension",
          defaultMessage: "Browser extension",
          description: "Title for browser extension settings when the current browser cannot be identified",
        },
        "local-environments": {
          id: "settings.nav.local-environments",
          defaultMessage: "Environments",
          description: "Title for environments settings section",
        },
        worktrees: {
          id: "settings.nav.worktrees.v2",
          defaultMessage: "Worktrees",
          description:
            "Title for worktrees settings section. Keep 'Worktrees' in English in all locales; it is a product term.",
        },
        environments: {
          id: "settings.nav.environments",
          defaultMessage: "Cloud Environments",
          description: "Title for environments settings section",
        },
        "mcp-settings": {
          id: "settings.nav.mcp-settings",
          defaultMessage: "MCP servers",
          description: "Title for MCP servers settings section",
        },
        gateways: {
          id: "settings.nav.gateways",
          defaultMessage: "Model Providers",
          description: "Navigation label for desktop model gateway settings",
        },
        "hooks-settings": {
          id: "settings.nav.hooks-settings",
          defaultMessage: "Hooks",
          description: "Title for hooks settings section",
        },
        connections: {
          id: "settings.nav.connections",
          defaultMessage: "Connections",
          description: "Title for connections settings section",
        },
        "plugins-settings": {
          id: "settings.nav.plugins-settings",
          defaultMessage: "Plugins",
          description: "Title for plugins settings section",
        },
        "file-type-handlers": {
          id: "settings.nav.file-type-handlers",
          defaultMessage: "File viewers",
          description: "Title for choosing what opens each file type in Codex",
        },
        "skills-settings": {
          id: "settings.nav.skills-settings",
          defaultMessage: "Skills",
          description: "Title for skills settings section",
        },
      })
    function p(e, t = !1, s = !1) {
      if ("rosalind" === e) return o.title
      if ("extension" === e) {
        let e = (0, n.e)()
        return null != e ? { ...u.extension, values: { browserName: i.Yp[e].shortDisplayName } } : u.browserExtension
      }
      if ("usage" === e && t) return u.enterpriseUsage
      if ("passwords" === e) return l.N.title
      if ("cloud-computer" === e) return a.P.title
      if ("teams" === e) return c.T.title
      if (s) {
        if ("usage" === e) return u.enterpriseUsage
        if ("connections" === e) return u.chatGptRemotes
        if ("debug" === e) return u.chatGptInternalSettings
        if ("keyboard-shortcuts" === e) return u.chatGptKeyboard
        if ("security" === e) return u.chatGptSecurity
      }
      return "cloud-environments" === e ? u.legacyCodexCloud : u[e]
    }
  },
  bZug(e, t, s) {
    s.d(
      t,
      {},
      {
        r: "flex flex-col [&>*:not(:last-child)]:relative [&>*:not(:last-child)]:after:pointer-events-none [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:inset-x-4 [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-px [&>*:not(:last-child)]:after:bg-border [&>*:not(:last-child)]:after:content-['']",
        s: "flex flex-col [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border",
      },
    )
  },
  AWNZ(e, t, s) {
    var i = s("ABep"),
      r = s("QosV"),
      n = s("on57"),
      o = s("zd8w"),
      a = s("HZfM"),
      l = s("bVeK")
    function c(e) {
      return e.preventDefault()
    }
    function d(e) {
      let t,
        s,
        o,
        a,
        l,
        c,
        d,
        u = (0, r.c)(24),
        {
          label: p,
          labelId: g,
          labelSizing: f,
          labelWeight: m,
          description: h,
          descriptionId: v,
          icon: y,
          variant: b,
          verticalAlignment: w,
        } = e,
        x = "start" === w ? "items-start" : "items-center",
        _ = "grow" === (void 0 === f ? "grow" : f) && "flex-1"
      ;(u[0] !== x || u[1] !== _
        ? ((t = (0, n.A)("flex min-w-0 gap-3", x, _)), (u[0] = x), (u[1] = _), (u[2] = t))
        : (t = u[2]),
        u[3] !== y
          ? ((s = null != y ? (0, i.jsx)("span", { className: "flex shrink-0", children: y }) : null),
            (u[3] = y),
            (u[4] = s))
          : (s = u[4]))
      let j = "featured" === b && "text-base",
        C = "recommendation" === b && "text-[13px] leading-[18.571429px]",
        A = "featured" !== b && "recommendation" !== b && "text-sm",
        M = "nested" !== b && "medium" === (void 0 === m ? "medium" : m) && "font-medium"
      return (
        u[5] !== M || u[6] !== j || u[7] !== C || u[8] !== A
          ? ((o = (0, n.A)(
              "min-w-0 break-words text-default group-data-[density=compact]/settings:leading-4.5",
              j,
              C,
              A,
              M,
            )),
            (u[5] = M),
            (u[6] = j),
            (u[7] = C),
            (u[8] = A),
            (u[9] = o))
          : (o = u[9]),
        u[10] !== p || u[11] !== g || u[12] !== o
          ? ((a = (0, i.jsx)("div", { id: g, className: o, children: p })),
            (u[10] = p),
            (u[11] = g),
            (u[12] = o),
            (u[13] = a))
          : (a = u[13]),
        u[14] !== h || u[15] !== v
          ? ((l = h
              ? (0, i.jsx)("div", {
                  id: v,
                  className: "min-w-0 text-xs leading-4 text-wrap break-words text-secondary",
                  children: h,
                })
              : null),
            (u[14] = h),
            (u[15] = v),
            (u[16] = l))
          : (l = u[16]),
        u[17] !== a || u[18] !== l
          ? ((c = (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [a, l] })),
            (u[17] = a),
            (u[18] = l),
            (u[19] = c))
          : (c = u[19]),
        u[20] !== c || u[21] !== t || u[22] !== s
          ? ((d = (0, i.jsxs)("div", { className: t, children: [s, c] })),
            (u[20] = c),
            (u[21] = t),
            (u[22] = s),
            (u[23] = d))
          : (d = u[23]),
        d
      )
    }
    s.d(
      t,
      {},
      {
        $5: function (e) {
          let t,
            s,
            o,
            a,
            l,
            c,
            d = (0, r.c)(18),
            { children: u, compactLabelInset: p, label: g, valueAlignment: f, variant: m } = e,
            h = void 0 === p || p,
            v = void 0 === f ? "start" : f,
            y = void 0 === m ? "default" : m,
            b =
              "compact" === y
                ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-default electron:opacity-75"
                : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          return (
            d[0] !== b ? ((t = (0, n.A)("grid items-center", b)), (d[0] = b), (d[1] = t)) : (t = d[1]),
            d[2] !== h || d[3] !== y
              ? ((s = (0, n.A)(
                  "min-w-0",
                  "compact" === y
                    ? (0, n.A)("flex items-center pe-2 text-start", h && "ps-1")
                    : "text-sm text-secondary",
                )),
                (d[2] = h),
                (d[3] = y),
                (d[4] = s))
              : (s = d[4]),
            d[5] !== g || d[6] !== s
              ? ((o = (0, i.jsx)("div", { className: s, children: g })), (d[5] = g), (d[6] = s), (d[7] = o))
              : (o = d[7]),
            d[8] !== v || d[9] !== y
              ? ((a = (0, n.A)(
                  "min-w-0",
                  "compact" === y
                    ? "flex items-center justify-end justify-self-stretch overflow-hidden"
                    : (0, n.A)("break-words whitespace-normal text-sm text-default", "end" === v && "text-end"),
                )),
                (d[8] = v),
                (d[9] = y),
                (d[10] = a))
              : (a = d[10]),
            d[11] !== u || d[12] !== a
              ? ((l = (0, i.jsx)("div", { className: a, children: u })), (d[11] = u), (d[12] = a), (d[13] = l))
              : (l = d[13]),
            d[14] !== t || d[15] !== o || d[16] !== l
              ? ((c = (0, i.jsxs)("div", { className: t, children: [o, l] })),
                (d[14] = t),
                (d[15] = o),
                (d[16] = l),
                (d[17] = c))
              : (c = d[17]),
            c
          )
        },
        ic: function (e) {
          let t,
            s,
            a,
            l,
            c = (0, r.c)(35),
            {
              label: u,
              labelSizing: p,
              labelWeight: g,
              layout: f,
              description: m,
              control: h,
              controlSizing: v,
              icon: y,
              className: b,
              id: w,
              inset: x,
              size: _,
              variant: j,
              verticalAlignment: C,
            } = e,
            A = void 0 === p ? "grow" : p,
            M = void 0 === g ? "medium" : g,
            k = void 0 === f ? "default" : f,
            T = void 0 === v ? "minimum" : v,
            S = void 0 === x || x,
            N = void 0 === _ ? "default" : _,
            R = void 0 === j ? "default" : j,
            P = void 0 === C ? "center" : C,
            I = (0, o.useId)(),
            G = null != u || null != m || null != y,
            E = "function" == typeof h,
            q = E && null != u ? `${I}-label` : void 0,
            L = E && m ? `${I}-description` : void 0,
            z = S && ("split" !== k || "default" !== R) && "px-4",
            F = S && "nested" === R && "group-data-[density=form]/settings:px-5",
            W =
              "stacked" === R &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            U =
              "nested" === R &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            $ = "stacked" !== R && ("start" === P ? "items-start" : "items-center"),
            O = "split" === k && "default" === R && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            c[0] !== b ||
            c[1] !== k ||
            c[2] !== N ||
            c[3] !== F ||
            c[4] !== W ||
            c[5] !== U ||
            c[6] !== $ ||
            c[7] !== O ||
            c[8] !== z ||
            c[9] !== R
              ? ((t = (0, n.A)(
                  "@container/settings-row",
                  z,
                  F,
                  W,
                  U,
                  $,
                  O,
                  "default" === k &&
                    ("default" === R || "featured" === R || "recommendation" === R) &&
                    (0, n.A)(
                      "flex justify-between",
                      "featured" === R && (0, n.A)("gap-6", "compact" === N ? "min-h-11 py-2" : "py-4"),
                      "featured" !== R && ("compact" === N ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === R && "dark:bg-secondary-ghost-hover",
                  b,
                )),
                (c[0] = b),
                (c[1] = k),
                (c[2] = N),
                (c[3] = F),
                (c[4] = W),
                (c[5] = U),
                (c[6] = $),
                (c[7] = O),
                (c[8] = z),
                (c[9] = R),
                (c[10] = t))
              : (t = c[10]),
            c[11] !== m ||
            c[12] !== L ||
            c[13] !== G ||
            c[14] !== y ||
            c[15] !== u ||
            c[16] !== q ||
            c[17] !== A ||
            c[18] !== M ||
            c[19] !== R ||
            c[20] !== P
              ? ((s = G
                  ? (0, i.jsx)(d, {
                      label: u,
                      labelId: q,
                      labelSizing: A,
                      labelWeight: M,
                      description: m,
                      descriptionId: L,
                      icon: y,
                      variant: R,
                      verticalAlignment: P,
                    })
                  : null),
                (c[11] = m),
                (c[12] = L),
                (c[13] = G),
                (c[14] = y),
                (c[15] = u),
                (c[16] = q),
                (c[17] = A),
                (c[18] = M),
                (c[19] = R),
                (c[20] = P),
                (c[21] = s))
              : (s = c[21]),
            c[22] !== h || c[23] !== T || c[24] !== L || c[25] !== E || c[26] !== q || c[27] !== k || c[28] !== R
              ? ((a =
                  null != h && !1 !== h
                    ? (0, i.jsx)("div", {
                        className: (0, n.A)(
                          "stacked" === R && "w-full",
                          "nested" === R && "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch",
                          "split" === k &&
                            "default" === R &&
                            (0, n.A)(
                              "flex min-w-0 max-w-full items-center justify-end gap-2",
                              "sm:col-span-2",
                              "grow" === T && "w-full",
                            ),
                          "default" === k &&
                            ("default" === R || "featured" === R || "recommendation" === R) &&
                            (0, n.A)(
                              "flex max-w-full items-center justify-end gap-2",
                              "grow" === T ? "min-w-0 flex-1" : "shrink-0",
                              "minimum" === T && "min-w-[min(--spacing(40),40cqw)] empty:min-w-0",
                            ),
                        ),
                        children: E ? h({ "aria-labelledby": q, "aria-describedby": L }) : h,
                      })
                    : null),
                (c[22] = h),
                (c[23] = T),
                (c[24] = L),
                (c[25] = E),
                (c[26] = q),
                (c[27] = k),
                (c[28] = R),
                (c[29] = a))
              : (a = c[29]),
            c[30] !== w || c[31] !== t || c[32] !== s || c[33] !== a
              ? ((l = (0, i.jsxs)("div", { id: w, className: t, children: [s, a] })),
                (c[30] = w),
                (c[31] = t),
                (c[32] = s),
                (c[33] = a),
                (c[34] = l))
              : (l = c[34]),
            l
          )
        },
        jj: function (e) {
          let t,
            s = (0, r.c)(2),
            { children: n } = e
          return (
            s[0] !== n
              ? ((t = (0, i.jsx)("span", { className: "text-xs text-secondary", children: n })), (s[0] = n), (s[1] = t))
              : (t = s[1]),
            t
          )
        },
        kG: function (e) {
          let t,
            s,
            o,
            l,
            u,
            p,
            g,
            f,
            m,
            h,
            v,
            y,
            b,
            w,
            x,
            _,
            j,
            C,
            A,
            M,
            k,
            T,
            S,
            N = (0, r.c)(54)
          N[0] !== e
            ? (({
                actions: t,
                actionsPlacement: v,
                ariaControls: s,
                ariaExpanded: o,
                ariaLabel: l,
                className: u,
                description: p,
                disabled: g,
                edgeRounding: y,
                icon: f,
                label: h,
                size: b,
                trailing: x,
                variant: w,
                ...m
              } = e),
              (N[0] = e),
              (N[1] = t),
              (N[2] = s),
              (N[3] = o),
              (N[4] = l),
              (N[5] = u),
              (N[6] = p),
              (N[7] = g),
              (N[8] = f),
              (N[9] = m),
              (N[10] = h),
              (N[11] = v),
              (N[12] = y),
              (N[13] = b),
              (N[14] = w),
              (N[15] = x))
            : ((t = N[1]),
              (s = N[2]),
              (o = N[3]),
              (l = N[4]),
              (u = N[5]),
              (p = N[6]),
              (g = N[7]),
              (f = N[8]),
              (m = N[9]),
              (h = N[10]),
              (v = N[11]),
              (y = N[12]),
              (b = N[13]),
              (w = N[14]),
              (x = N[15]))
          let R = void 0 === y ? "row" : y,
            P = void 0 === b ? "default" : b,
            I = void 0 === w ? "default" : w,
            G = "before-trailing" === (void 0 === v ? "end" : v) && !g && null != t && null != x,
            E = G ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          N[16] !== u || N[17] !== G || N[18] !== P || N[19] !== E || N[20] !== I
            ? ((_ = (0, n.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                E,
                "empty" === I
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, n.A)(
                      "px-4 text-start",
                      "nested" === I && "min-h-10 py-0.5",
                      "nested" !== I && ("large" === P ? "py-4" : "py-3"),
                      G && "gap-2",
                      !G && ("nested" === I ? "gap-3" : "gap-6"),
                    ),
                u,
              )),
              (N[16] = u),
              (N[17] = G),
              (N[18] = P),
              (N[19] = E),
              (N[20] = I),
              (N[21] = _))
            : (_ = N[21])
          let q = _
          ;(N[22] !== p || N[23] !== f || N[24] !== h || N[25] !== I
            ? ((j =
                "empty" === I
                  ? (0, i.jsxs)(i.Fragment, { children: [f, h] })
                  : (0, i.jsx)(d, { label: h, description: p, icon: f, variant: I, verticalAlignment: "center" })),
              (N[22] = p),
              (N[23] = f),
              (N[24] = h),
              (N[25] = I),
              (N[26] = j))
            : (j = N[26]),
            N[27] !== x
              ? ((C =
                  null != x
                    ? (0, i.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: x })
                    : null),
                (N[27] = x),
                (N[28] = C))
              : (C = N[28]),
            N[29] !== j || N[30] !== C
              ? ((A = (0, i.jsxs)(i.Fragment, { children: [j, C] })), (N[29] = j), (N[30] = C), (N[31] = A))
              : (A = N[31]))
          let L = A,
            z = G ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            F = "row" === R && "first:rounded-t-2xl last:rounded-b-2xl",
            W = "recommendation" === I && "dark:bg-secondary-ghost-hover",
            U = !g && "hover:bg-secondary-ghost-hover focus-within:bg-secondary-ghost-hover",
            $ =
              !g &&
              "recommendation" === I &&
              "dark:hover:bg-background-secondary-soft-alpha dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            N[32] !== z || N[33] !== F || N[34] !== W || N[35] !== U || N[36] !== $
              ? ((M = (0, n.A)("group w-full items-center", z, F, W, U, $)),
                (N[32] = z),
                (N[33] = F),
                (N[34] = W),
                (N[35] = U),
                (N[36] = $),
                (N[37] = M))
              : (M = N[37]),
            N[38] !== s || N[39] !== o || N[40] !== l || N[41] !== L || N[42] !== g || N[43] !== m || N[44] !== q
              ? ((k =
                  null != m.to
                    ? (0, i.jsx)(a.N_, {
                        ...m,
                        className: q,
                        "aria-controls": s,
                        "aria-expanded": o,
                        "aria-label": l,
                        "aria-disabled": g || void 0,
                        tabIndex: g ? -1 : void 0,
                        onClick: g ? c : m.onClick,
                        children: L,
                      })
                    : (0, i.jsx)("button", {
                        ...m,
                        className: q,
                        "aria-controls": s,
                        "aria-expanded": o,
                        "aria-label": l,
                        disabled: g,
                        type: "button",
                        children: L,
                      })),
                (N[38] = s),
                (N[39] = o),
                (N[40] = l),
                (N[41] = L),
                (N[42] = g),
                (N[43] = m),
                (N[44] = q),
                (N[45] = k))
              : (k = N[45]),
            N[46] !== t || N[47] !== g || N[48] !== G
              ? ((T =
                  g || null == t
                    ? null
                    : (0, i.jsx)("div", {
                        className: (0, n.A)(
                          "flex shrink-0 items-center gap-1",
                          G ? "relative col-start-2 row-start-1" : "pe-4",
                        ),
                        children: t,
                      })),
                (N[46] = t),
                (N[47] = g),
                (N[48] = G),
                (N[49] = T))
              : (T = N[49]),
            N[50] !== M || N[51] !== k || N[52] !== T
              ? ((S = (0, i.jsxs)("div", { className: M, children: [k, T] })),
                (N[50] = M),
                (N[51] = k),
                (N[52] = T),
                (N[53] = S))
              : (S = N[53]),
            S
          )
        },
        kf: function (e) {
          let t,
            s = (0, r.c)(2),
            { children: n } = e
          return (
            s[0] !== n
              ? ((t = (0, i.jsx)("span", { className: "text-tertiary", children: n })), (s[0] = n), (s[1] = t))
              : (t = s[1]),
            t
          )
        },
        lu: function (e) {
          let t,
            s,
            o,
            a,
            c,
            d,
            u,
            p,
            g,
            f,
            m = (0, r.c)(43),
            {
              id: h,
              ariaLabel: v,
              autoFocus: y,
              checked: b,
              description: w,
              highlightSelected: x,
              indicator: _,
              label: j,
              name: C,
              onChange: A,
              onClick: M,
              value: k,
              variant: T,
            } = e,
            S = void 0 === x || x,
            N = void 0 === _ ? "radio" : _,
            R = void 0 === T ? "default" : T
          ;(m[0] !== b || m[1] !== w || m[2] !== S || m[3] !== N || m[4] !== R
            ? ((t = (0, n.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === R &&
                  (0, n.A)(
                    "gap-3 px-4 py-3 hover:bg-secondary-ghost-hover",
                    null != w ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === R && b && S && "radio" === N && "bg-background-neutral-soft-alpha",
                "form" === R && "items-center gap-4 px-4 py-4 hover:bg-secondary-ghost-hover",
                "inline" === R && "items-center gap-2",
                "checkmark" === N && "after:ms-7",
              )),
              (m[0] = b),
              (m[1] = w),
              (m[2] = S),
              (m[3] = N),
              (m[4] = R),
              (m[5] = t))
            : (t = m[5]),
            m[6] !== v || m[7] !== h
              ? ((s = (0, i.jsx)("label", {
                  className: "absolute inset-0 cursor-interaction",
                  "aria-label": v,
                  htmlFor: h,
                })),
                (m[6] = v),
                (m[7] = h),
                (m[8] = s))
              : (s = m[8]),
            m[9] !== N || m[10] !== R
              ? ((o = (0, n.A)(
                  "z-10 cursor-interaction",
                  "checkmark" === N
                    ? "absolute inset-0 size-full opacity-0"
                    : (0, n.A)(
                        "relative shrink-0 appearance-auto accent-current",
                        "default" === R ? "mt-1 size-4" : "size-5",
                      ),
                )),
                (m[9] = N),
                (m[10] = R),
                (m[11] = o))
              : (o = m[11]))
          let P = null != w ? `${h}-description` : void 0
          ;(m[12] !== v ||
          m[13] !== y ||
          m[14] !== b ||
          m[15] !== h ||
          m[16] !== C ||
          m[17] !== A ||
          m[18] !== M ||
          m[19] !== o ||
          m[20] !== P ||
          m[21] !== k
            ? ((a = (0, i.jsx)("input", {
                id: h,
                className: o,
                "aria-label": v,
                "aria-describedby": P,
                autoFocus: y,
                type: "radio",
                name: C,
                value: k,
                checked: b,
                onChange: A,
                onClick: M,
              })),
              (m[12] = v),
              (m[13] = y),
              (m[14] = b),
              (m[15] = h),
              (m[16] = C),
              (m[17] = A),
              (m[18] = M),
              (m[19] = o),
              (m[20] = P),
              (m[21] = k),
              (m[22] = a))
            : (a = m[22]),
            m[23] !== b || m[24] !== N
              ? ((c = "checkmark" === N ? (0, i.jsx)(l.ALZ, { className: (0, n.A)(!b && "invisible") }) : null),
                (m[23] = b),
                (m[24] = N),
                (m[25] = c))
              : (c = m[25]))
          let I = "default" === R ? "text-sm font-medium" : "text-base"
          return (
            m[26] !== I ? ((d = (0, n.A)("text-default", I)), (m[26] = I), (m[27] = d)) : (d = m[27]),
            m[28] !== j || m[29] !== d
              ? ((u = (0, i.jsx)("span", { className: d, children: j })), (m[28] = j), (m[29] = d), (m[30] = u))
              : (u = m[30]),
            m[31] !== w || m[32] !== h
              ? ((p =
                  null != w
                    ? (0, i.jsx)("span", {
                        id: `${h}-description`,
                        className: "text-sm leading-5 text-secondary",
                        children: w,
                      })
                    : null),
                (m[31] = w),
                (m[32] = h),
                (m[33] = p))
              : (p = m[33]),
            m[34] !== u || m[35] !== p
              ? ((g = (0, i.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [u, p],
                })),
                (m[34] = u),
                (m[35] = p),
                (m[36] = g))
              : (g = m[36]),
            m[37] !== g || m[38] !== t || m[39] !== s || m[40] !== a || m[41] !== c
              ? ((f = (0, i.jsxs)("div", { className: t, children: [s, a, c, g] })),
                (m[37] = g),
                (m[38] = t),
                (m[39] = s),
                (m[40] = a),
                (m[41] = c),
                (m[42] = f))
              : (f = m[42]),
            f
          )
        },
      },
    )
  },
  QyE3(e, t, s) {
    var i = s("ABep"),
      r = s("QosV"),
      n = s("on57"),
      o = s("oyxz"),
      a = s("RRpo"),
      l = s("Sm6l"),
      c = s("Yakm"),
      d = s("Y6nA")
    function u(e) {
      let t,
        s,
        n = (0, r.c)(7),
        { codexMicroDeviceModel: l, showChatGptDataControlsLabel: c, showUsageOnlyLabel: u, slug: p } = e,
        g = void 0 !== c && c,
        f = void 0 !== u && u
      if ("codex-micro" === p && "creator-micro-v2" === (void 0 === l ? null : l)) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(o.A, { ...a.b.creatorMicro })), (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      return (
        n[1] !== g || n[2] !== f || n[3] !== p
          ? ((t = (0, d.G)(p, f, g)), (n[1] = g), (n[2] = f), (n[3] = p), (n[4] = t))
          : (t = n[4]),
        n[5] !== t ? ((s = (0, i.jsx)(o.A, { ...t })), (n[5] = t), (n[6] = s)) : (s = n[6]),
        s
      )
    }
    s.d(
      t,
      {},
      {
        gl: u,
        s: function (e) {
          let t = (0, r.c)(62),
            { showChatGptDataControlsLabel: s, slug: n } = e
          if (
            void 0 !== s &&
            s &&
            [
              "browser-use",
              "connections",
              "data-controls",
              "debug",
              "keyboard-shortcuts",
              "security",
              "usage",
            ].includes(n)
          ) {
            let e, s
            return (
              t[0] !== n ? ((e = (0, d.G)(n, !1, !0)), (t[0] = n), (t[1] = e)) : (e = t[1]),
              t[2] !== e ? ((s = (0, i.jsx)(o.A, { ...e })), (t[2] = e), (t[3] = s)) : (s = t[3]),
              s
            )
          }
          switch (n) {
            case "rosalind":
            case "passwords":
            case "cloud-computer":
            case "age":
            case "agreements":
            case "billing":
            case "extension": {
              let e, s
              return (
                t[4] !== n ? ((e = (0, d.G)(n)), (t[4] = n), (t[5] = e)) : (e = t[5]),
                t[6] !== e ? ((s = (0, i.jsx)(o.A, { ...e })), (t[6] = e), (t[7] = s)) : (s = t[7]),
                s
              )
            }
            case "account": {
              let e
              return (
                t[8] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.account",
                      defaultMessage: "Account",
                      description: "Title for ChatGPT account settings section",
                    })),
                    (t[8] = e))
                  : (e = t[8]),
                e
              )
            }
            case "appshots": {
              let e
              return (
                t[9] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.appshots",
                      defaultMessage: "Appshots",
                      description:
                        "Page title for settings that configure Appshots, Codex captures of the frontmost app window",
                    })),
                    (t[9] = e))
                  : (e = t[9]),
                e
              )
            }
            case "appearance": {
              let e
              return (
                t[10] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.appearance",
                      defaultMessage: "Appearance",
                      description: "Title for appearance settings section",
                    })),
                    (t[10] = e))
                  : (e = t[10]),
                e
              )
            }
            case "voice": {
              let e
              return (
                t[11] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.voice",
                      defaultMessage: "Voice",
                      description: "Title for voice settings section",
                    })),
                    (t[11] = e))
                  : (e = t[11]),
                e
              )
            }
            case "storage": {
              let e
              return (
                t[12] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.storage",
                      defaultMessage: "Storage",
                      description: "Title for ChatGPT storage settings section",
                    })),
                    (t[12] = e))
                  : (e = t[12]),
                e
              )
            }
            case "family":
            case "parental-controls":
            case "trusted-contact":
            case "safety":
            case "time-management":
            case "pets": {
              let e, s
              return (
                t[13] !== n ? ((e = (0, d.G)(n)), (t[13] = n), (t[14] = e)) : (e = t[14]),
                t[15] !== e ? ((s = (0, i.jsx)(o.A, { ...e })), (t[15] = e), (t[16] = s)) : (s = t[16]),
                s
              )
            }
            case "general-settings": {
              let e
              return (
                t[17] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.general-settings",
                      defaultMessage: "General",
                      description: "Title for general settings section",
                    })),
                    (t[17] = e))
                  : (e = t[17]),
                e
              )
            }
            case "notifications": {
              let e
              return (
                t[18] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.notifications",
                      defaultMessage: "Notifications",
                      description: "Title for notifications settings section",
                    })),
                    (t[18] = e))
                  : (e = t[18]),
                e
              )
            }
            case "import": {
              let e
              return (
                t[19] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.import.v2",
                      defaultMessage: "Import",
                      description:
                        "Title for the import settings section. In French, use the infinitive verb 'Importer', not the noun 'Importation'.",
                    })),
                    (t[19] = e))
                  : (e = t[19]),
                e
              )
            }
            case "profile": {
              let e
              return (
                t[20] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.profile",
                      defaultMessage: "Profile",
                      description: "Title for profile section",
                    })),
                    (t[20] = e))
                  : (e = t[20]),
                e
              )
            }
            case "security": {
              let e
              return (
                t[21] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.security",
                      defaultMessage: "Security and login",
                      description: "Title for ChatGPT security settings section",
                    })),
                    (t[21] = e))
                  : (e = t[21]),
                e
              )
            }
            case "keyboard-shortcuts": {
              let e
              return (
                t[22] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.keyboard-shortcuts",
                      defaultMessage: "Keyboard shortcuts",
                      description: "Title for keyboard shortcuts settings section",
                    })),
                    (t[22] = e))
                  : (e = t[22]),
                e
              )
            }
            case "codex-micro": {
              let e
              return (
                t[23] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.codex-micro",
                      defaultMessage: "Codex Micro",
                      description: "Title for Codex Micro settings section",
                    })),
                    (t[23] = e))
                  : (e = t[23]),
                e
              )
            }
            case "agent": {
              let e
              return (
                t[24] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.agent",
                      defaultMessage: "Configuration",
                      description: "Title for configuration settings section",
                    })),
                    (t[24] = e))
                  : (e = t[24]),
                e
              )
            }
            case "work-settings": {
              let e
              return (
                t[25] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(u, { slug: "work-settings" })), (t[25] = e))
                  : (e = t[25]),
                e
              )
            }
            case "git-settings": {
              let e
              return (
                t[26] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.git-settings",
                      defaultMessage: "Git",
                      description: "Title for git settings section",
                    })),
                    (t[26] = e))
                  : (e = t[26]),
                e
              )
            }
            case "ads-controls": {
              let e
              return (
                t[27] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(u, { slug: "ads-controls" })), (t[27] = e))
                  : (e = t[27]),
                e
              )
            }
            case "data-controls":
            case "archived-chats": {
              let e
              return (t[28] !== n ? ((e = (0, i.jsx)(u, { slug: n })), (t[28] = n), (t[29] = e)) : (e = t[29]), e)
            }
            case "usage-code-review": {
              let e
              return (
                t[30] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.codeReview",
                      defaultMessage: "Code review",
                      description: "Title for code review settings section",
                    })),
                    (t[30] = e))
                  : (e = t[30]),
                e
              )
            }
            case "code-review": {
              let e
              return (
                t[31] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(u, { slug: "code-review" })), (t[31] = e))
                  : (e = t[31]),
                e
              )
            }
            case "cloud-settings": {
              let e
              return (
                t[32] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.cloudSettings",
                      defaultMessage: "Cloud preferences",
                      description: "Title for cloud settings section",
                    })),
                    (t[32] = e))
                  : (e = t[32]),
                e
              )
            }
            case "codex-cloud":
            case "cloud-environments": {
              let e, s
              return (
                t[33] !== n ? ((e = (0, d.G)(n)), (t[33] = n), (t[34] = e)) : (e = t[34]),
                t[35] !== e ? ((s = (0, i.jsx)(o.A, { ...e })), (t[35] = e), (t[36] = s)) : (s = t[36]),
                s
              )
            }
            case "personalization": {
              let e
              return (
                t[37] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.personalization",
                      defaultMessage: "Personalization",
                      description: "Title for personalization settings section",
                    })),
                    (t[37] = e))
                  : (e = t[37]),
                e
              )
            }
            case "chronicle": {
              let e
              return (
                t[38] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.chronicle",
                      defaultMessage: "Computer history",
                      description: "Title for Computer history settings section",
                    })),
                    (t[38] = e))
                  : (e = t[38]),
                e
              )
            }
            case "usage": {
              let e
              return (
                t[39] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.usage",
                      defaultMessage: "Usage & billing",
                      description: "Title for usage and billing settings section",
                    })),
                    (t[39] = e))
                  : (e = t[39]),
                e
              )
            }
            case "analytics": {
              let e
              return (
                t[40] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.analytics",
                      defaultMessage: "Analytics",
                      description: "Title for the usage analytics settings section",
                    })),
                    (t[40] = e))
                  : (e = t[40]),
                e
              )
            }
            case "consumer-view": {
              let e
              return (
                t[41] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.consumerView",
                      defaultMessage: "Consumer analytics (internal)",
                      description:
                        "Page title for a restricted consumer usage dashboard used solely for OpenAI internal testing",
                    })),
                    (t[41] = e))
                  : (e = t[41]),
                e
              )
            }
            case "debug": {
              let e
              return (
                t[42] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.debug",
                      defaultMessage: "Debug",
                      description: "Title for debug settings section",
                    })),
                    (t[42] = e))
                  : (e = t[42]),
                e
              )
            }
            case "computer-use": {
              let e
              return (
                t[43] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "computerUse.label",
                      defaultMessage: "Computer use",
                      description: "Label for the Computer Use feature",
                    })),
                    (t[43] = e))
                  : (e = t[43]),
                e
              )
            }
            case "browser-use": {
              let e
              return (
                t[44] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.browser-use",
                      defaultMessage: "Browser",
                      description: "Title for in-app browser settings section",
                    })),
                    (t[44] = e))
                  : (e = t[44]),
                e
              )
            }
            case "local-environments": {
              let e
              return (
                t[45] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.local-environments",
                      defaultMessage: "Environments",
                      description: "Title for environments settings section",
                    })),
                    (t[45] = e))
                  : (e = t[45]),
                e
              )
            }
            case "worktrees": {
              let e
              return (
                t[46] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.worktrees.v2",
                      defaultMessage: "Worktrees",
                      description:
                        "Title for worktrees settings section. Keep 'Worktrees' in English in all locales; it is a product term.",
                    })),
                    (t[46] = e))
                  : (e = t[46]),
                e
              )
            }
            case "environments": {
              let e
              return (
                t[47] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.environments",
                      defaultMessage: "Cloud Environments",
                      description: "Title for environments settings section",
                    })),
                    (t[47] = e))
                  : (e = t[47]),
                e
              )
            }
            case "gateways": {
              let e
              return (
                t[48] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.gateways",
                      defaultMessage: "Model Providers",
                      description: "Title for desktop model gateway settings",
                    })),
                    (t[48] = e))
                  : (e = t[48]),
                e
              )
            }
            case "mcp-settings": {
              let e
              return (
                t[49] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.mcp-settings",
                      defaultMessage: "MCP servers",
                      description: "Title for MCP servers settings section",
                    })),
                    (t[49] = e))
                  : (e = t[49]),
                e
              )
            }
            case "hooks-settings": {
              let e
              return (
                t[50] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.hooks-settings",
                      defaultMessage: "Hooks",
                      description: "Title for hooks settings section",
                    })),
                    (t[50] = e))
                  : (e = t[50]),
                e
              )
            }
            case "connections": {
              let e
              return (
                t[51] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.connections",
                      defaultMessage: "Connections",
                      description: "Title for connections settings section",
                    })),
                    (t[51] = e))
                  : (e = t[51]),
                e
              )
            }
            case "plugins-settings": {
              let e
              return (
                t[52] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.plugins-settings",
                      defaultMessage: "Plugins",
                      description: "Title for plugins settings section",
                    })),
                    (t[52] = e))
                  : (e = t[52]),
                e
              )
            }
            case "file-type-handlers": {
              let e, s
              return (
                t[53] !== n ? ((e = (0, d.G)(n)), (t[53] = n), (t[54] = e)) : (e = t[54]),
                t[55] !== e ? ((s = (0, i.jsx)(o.A, { ...e })), (t[55] = e), (t[56] = s)) : (s = t[56]),
                s
              )
            }
            case "skills-settings": {
              let e
              return (
                t[57] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.skills-settings",
                      defaultMessage: "Skills",
                      description: "Title for skills settings section",
                    })),
                    (t[57] = e))
                  : (e = t[57]),
                e
              )
            }
            case "teams": {
              let e, s
              return (
                t[58] !== n ? ((e = (0, d.G)(n)), (t[58] = n), (t[59] = e)) : (e = t[59]),
                t[60] !== e ? ((s = (0, i.jsx)(o.A, { ...e })), (t[60] = e), (t[61] = s)) : (s = t[61]),
                s
              )
            }
          }
        },
        vg: function (e) {
          let t,
            s,
            o,
            a,
            d,
            u,
            p,
            g,
            f,
            m,
            h,
            v,
            y,
            b,
            w = (0, r.c)(29)
          w[0] !== e
            ? (({
                children: s,
                className: o,
                contentClassName: a,
                chevronClassName: t,
                leadingVisual: d,
                color: p,
                size: g,
                ...u
              } = e),
              (w[0] = e),
              (w[1] = t),
              (w[2] = s),
              (w[3] = o),
              (w[4] = a),
              (w[5] = d),
              (w[6] = u),
              (w[7] = p),
              (w[8] = g))
            : ((t = w[1]), (s = w[2]), (o = w[3]), (a = w[4]), (d = w[5]), (u = w[6]), (p = w[7]), (g = w[8]))
          let x = void 0 === p ? "outline" : p,
            _ = void 0 === g ? "toolbar" : g,
            j =
              "toolbar" === _ &&
              (null != d ? "pe-3 ps-[calc((var(--spacing-token-button-composer)-var(--spacing)*5)/2-1px)]" : "px-3")
          return (
            w[9] !== o || w[10] !== j
              ? ((f = (0, n.A)("max-w-full justify-between", j, o)), (w[9] = o), (w[10] = j), (w[11] = f))
              : (f = w[11]),
            w[12] !== a
              ? ((m = (0, n.A)("flex min-w-0 flex-1 items-center gap-1.5", a)), (w[12] = a), (w[13] = m))
              : (m = w[13]),
            w[14] !== s || w[15] !== d || w[16] !== m
              ? ((h = (0, i.jsxs)("span", { className: m, children: [d, s] })),
                (w[14] = s),
                (w[15] = d),
                (w[16] = m),
                (w[17] = h))
              : (h = w[17]),
            w[18] !== t
              ? ((v = (0, n.A)("icon-2xs shrink-0 text-tertiary", t)), (w[18] = t), (w[19] = v))
              : (v = w[19]),
            w[20] !== v ? ((y = (0, i.jsx)(c.A, { className: v })), (w[20] = v), (w[21] = y)) : (y = w[21]),
            w[22] !== x || w[23] !== u || w[24] !== _ || w[25] !== f || w[26] !== h || w[27] !== y
              ? ((b = (0, i.jsxs)(l.$, { color: x, size: _, className: f, ...u, children: [h, y] })),
                (w[22] = x),
                (w[23] = u),
                (w[24] = _),
                (w[25] = f),
                (w[26] = h),
                (w[27] = y),
                (w[28] = b))
              : (b = w[28]),
            b
          )
        },
      },
    )
  },
  ZEx5(e, t, s) {
    s.d(t, { t: () => a })
    var i = s("ABep"),
      r = s("QosV"),
      n = s("on57"),
      o = s("bZug")
    function a(e) {
      let t,
        s,
        a,
        l = (0, r.c)(23),
        { children: c, className: d, contentOverflow: u, dividers: p, variant: g, decoration: f } = e,
        m = void 0 === g ? "default" : g,
        h = "flat" === m || "rows" === m ? o.s : o.r,
        v = void 0 === p || p ? h : "flex flex-col",
        y = "recommendation" === m && "rounded-[20px]",
        b = "recommendation" !== m && "flat" !== m && "rows" !== m && "outlinedLarge" !== m && "rounded-2xl",
        w = "outlinedLarge" === m && "rounded-[30px] border border-default bg-transparent",
        x = "daybreak" === f && "daybreak-VsXdEH",
        _ = "visible" === (void 0 === u ? "hidden" : u) ? "overflow-visible" : "overflow-hidden",
        j =
          "default" === m &&
          "border border-default group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border",
        C = "metered" === m && "ring-1 ring-inset ring-border-subtle",
        A = "secondary" === m && "bg-surface-secondary/92",
        M = "muted" === m && "bg-(--color-background-neutral-soft-alpha)/50 dark:bg-background-neutral-soft-alpha",
        k =
          "form" === m &&
          "border border-subtle bg-surface dark:bg-surface-secondary/92 group-data-[density=form]/settings:border-default group-data-[density=form]/settings:bg-transparent dark:group-data-[density=form]/settings:bg-transparent group-data-[density=form]/settings:[&>*:not(:last-child)]:after:inset-x-5 group-data-[density=form]/settings:[&>*:not(:last-child)]:after:h-px group-data-[density=form]/settings:[&>*:not(:last-child)]:after:bg-border-subtle",
        T = "outlined" === m && "border border-subtle bg-transparent",
        S =
          "flat" === m &&
          "relative bg-transparent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']",
        N = "input" === m && "border border-primary-outline bg-primary-soft",
        R = "recommendation" === m && "border border-default bg-secondary-soft dark:bg-transparent"
      return (
        l[0] !== d ||
        l[1] !== j ||
        l[2] !== C ||
        l[3] !== A ||
        l[4] !== M ||
        l[5] !== k ||
        l[6] !== T ||
        l[7] !== S ||
        l[8] !== N ||
        l[9] !== R ||
        l[10] !== v ||
        l[11] !== y ||
        l[12] !== b ||
        l[13] !== w ||
        l[14] !== x ||
        l[15] !== _
          ? ((t = (0, n.A)(v, y, b, w, x, _, j, C, A, M, k, T, S, N, R, d)),
            (l[0] = d),
            (l[1] = j),
            (l[2] = C),
            (l[3] = A),
            (l[4] = M),
            (l[5] = k),
            (l[6] = T),
            (l[7] = S),
            (l[8] = N),
            (l[9] = R),
            (l[10] = v),
            (l[11] = y),
            (l[12] = b),
            (l[13] = w),
            (l[14] = x),
            (l[15] = _),
            (l[16] = t))
          : (t = l[16]),
        l[17] !== m
          ? ((s =
              "default" === m || "metered" === m
                ? { backgroundColor: "var(--color-background-panel, var(--color-background-neutral-soft-alpha))" }
                : void 0),
            (l[17] = m),
            (l[18] = s))
          : (s = l[18]),
        l[19] !== c || l[20] !== t || l[21] !== s
          ? ((a = (0, i.jsx)("div", { className: t, style: s, children: c })),
            (l[19] = c),
            (l[20] = t),
            (l[21] = s),
            (l[22] = a))
          : (a = l[22]),
        a
      )
    }
  },
  VLvf(e, t, s) {
    let i = (0, s("iJY0").a)({
      name: "shield-checkmark-regular-32",
      canvas: {
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        frame: { x: 0, y: 0, width: 32, height: 32 },
        inkBounds: { x: 4.087402, y: 2.083984, width: 23.814453, height: 28.453125 },
        visualBounds: { x: 4.087402, y: 2.083984, width: 23.814453, height: 28.453125 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 4.087402, y: 2.083984, width: 23.814453, height: 28.453125 },
        center: { x: 15.994629, y: 16.310547 },
        insets: { top: 2.083984, right: 4.098145, bottom: 1.462891, left: 4.087402 },
        anchors: {
          frame: { x: 16, y: 16 },
          ink: { x: 15.994629, y: 16.310547 },
          foreground: { x: 15.994629, y: 16.310547 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M19.7368 11.2468C20.1212 10.6737 20.8979 10.5209 21.4712 10.905C22.0444 11.2895 22.1974 12.0661 21.813 12.6394L16.2134 20.9919C15.6752 21.7941 14.5297 21.8858 13.8706 21.1794L10.8101 17.8991C10.3394 17.3944 10.3671 16.6034 10.8716 16.1325C11.3763 15.6617 12.1672 15.6895 12.6382 16.1941L14.8384 18.5525L19.7368 11.2468Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2944 2.44016C15.3802 1.96536 16.615 1.96516 17.7007 2.44016L25.356 5.78879C26.9026 6.46557 27.9017 7.99409 27.9019 9.68235V17.0593C27.9018 20.7152 26.6134 23.5767 24.5435 25.7693C22.5013 27.9323 19.7493 29.3941 16.8687 30.3982L16.8589 30.4011C16.3055 30.5886 15.7051 30.582 15.1558 30.3845C15.1464 30.3812 15.1368 30.379 15.1274 30.3757C12.2505 29.3789 9.50084 27.9256 7.4585 25.7722C5.38117 23.5819 4.08747 20.7191 4.0874 17.0593V9.68333C4.0874 7.99462 5.08709 6.46547 6.63428 5.78879L14.2944 2.44016ZM16.6987 4.7302C16.2518 4.53467 15.7434 4.53487 15.2964 4.7302L7.63623 8.07981C6.99917 8.35845 6.5874 8.98799 6.5874 9.68333V17.0593C6.58747 20.0659 7.62706 22.3161 9.27295 24.0515C10.8425 25.7063 13.0085 26.9376 15.4751 27.8454L15.9858 28.0281L16.0005 28.0329C16.0175 28.0392 16.0359 28.0391 16.0532 28.0339C18.716 27.1049 21.0591 25.8191 22.7261 24.0534C24.3666 22.3157 25.4018 20.0645 25.4019 17.0593V9.68235C25.4017 8.98745 24.9905 8.35854 24.354 8.07981L16.6987 4.7302Z" fill="currentColor"/>',
    })
    s.d(t, {}, { q: i })
  },
}
//# sourceMappingURL=474076.356300a3d0.js.map
