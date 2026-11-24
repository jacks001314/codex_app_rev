export const __rspack_esm_ids = [840125]
export const __webpack_modules__ = {
  BcYu(e, a, t) {
    t.d(a, { T: () => o })
    var i = t("ABep"),
      s = t("on57"),
      l = t("zd8w"),
      n = t("UIGa"),
      r = t("fZ4G")
    let o = (e) => {
      let a = (0, l.useRef)(null),
        t = (0, l.useId)(),
        o = `search-ui-input-${t}`,
        {
          id: c,
          name: d,
          variant: u = "outline",
          size: m = "md",
          gutterSize: p,
          className: f,
          autoComplete: h,
          disabled: _ = !1,
          readOnly: x = !1,
          invalid: g = !1,
          allowAutofillExtensions: b = !!d || (!!h && "off" !== h),
          onFocus: A,
          onBlur: y,
          onAnimationStart: v,
          onAutofill: j,
          autoSelect: T,
          rows: C = 3,
          maxRows: I,
          autoResize: S,
          maxHeight: N,
          resize: P = "none",
          ref: E,
          onChange: w,
          __isWidget: O,
          ...L
        } = e,
        [R, M] = (0, l.useState)(!1),
        D = S ? Math.max(I ?? 10, C) : C,
        k = "none" !== P
      ;(0, l.useEffect)(() => {
        T && a.current?.select()
      }, [T])
      let U = (0, l.useCallback)(() => {
        if (!S || !a.current || void 0 === D) return
        a.current.style.height = "0px"
        let e = a.current.scrollHeight
        a.current.style.height = e + "px"
      }, [S, D])
      return (
        (0, l.useEffect)(() => {
          U()
        }, [e.value, C, U]),
        (0, i.jsx)("div", {
          className: (0, s.A)("Container-P18Q1e", f),
          "data-w-component": O ? "textarea" : "",
          "data-variant": u,
          "data-size": m,
          "data-gutter-size": p,
          "data-focused": R,
          "data-disabled": _ ? "" : void 0,
          "data-readonly": x ? "" : void 0,
          "data-invalid": g ? "" : void 0,
          style: (0, r.mW)({
            "textarea-min-rows": `${C}`,
            "textarea-max-rows": `${D}`,
            "textarea-max-height": N,
            ...(k ? { "textarea-resize": P, "textarea-resizer-visibility": "visible" } : null),
          }),
          children: (0, i.jsx)("textarea", {
            ...L,
            onChange: (e) => {
              ;(w?.(e), U())
            },
            ref: (0, n.P)([a, E]),
            id: c || (b ? void 0 : o),
            className: "Textarea-WlH_Xa",
            name: d,
            autoComplete: h,
            readOnly: x,
            disabled: _,
            rows: C,
            onFocus: (e) => {
              ;(M(!0), A?.(e))
            },
            onBlur: (e) => {
              ;(M(!1), y?.(e))
            },
            onAnimationStart: (e) => {
              ;(v?.(e), "native-autofill-in" === e.animationName && j?.())
            },
            "data-lpignore": !b || void 0,
            "data-1p-ignore": !b || void 0,
          }),
        })
      )
    }
  },
  dMvT(e, a, t) {
    var i = t("NwSQ"),
      s = t("DBCl"),
      l = t("T5JX"),
      n = t("Kwur"),
      r = t("ilGw")
    t.d(
      a,
      {},
      {
        M: async function ({
          accountId: e,
          requestBody: a,
          appearance: t,
          cancelUrl: o,
          purchaseAttemptId: c,
          signal: d,
          expectedIdentity: u,
          assertCurrent: m,
          isExpectedError: p,
        }) {
          ;(d.throwIfAborted(), m?.())
          let f = new URLSearchParams(window.location.search),
            h = (0, r.f)(f),
            [_, x] = await Promise.all([a, (0, l.Xn)("chatgpt_checkout")])
          ;(d.throwIfAborted(), m?.())
          let g = _.checkout_source ?? ("unknown" === h ? null : h),
            b = await n.Request.safePost("/payments/checkout", {
              additionalHeaders: { ...x, "ChatGPT-Account-ID": e, [s.zBc]: e },
              signal: d,
              expectedIdentity: u,
              assertRequestCurrent: m,
              isExpectedError: p,
              requestBody: { ..._, checkout_source: g, checkout_appearance: t, cancel_url: o, purchase_attempt_id: c },
            })
          return (
            d.throwIfAborted(),
            m?.(),
            "checkout_session_id" in b && (0, i.FU)(b.checkout_session_id, g, f.get("checkout_from")),
            b
          )
        },
      },
    )
  },
  qHFK(e, a, t) {
    t.d(a, { RosalindApplicationRoute: () => tf })
    var i = t("ABep"),
      s = t("QosV"),
      l = t("qmMi"),
      n = t("zd8w"),
      r = t("Ywss"),
      o = t("UOa8"),
      c = t("OAko"),
      d = t("Ot7V"),
      u = t("zOE4"),
      m = t("OMIV"),
      p = t("UR81"),
      f = t("AGJY"),
      h = t("Wf1j"),
      _ = t("SPnB"),
      x = t("SGsN"),
      g = t("vV6o"),
      b = t("yGJW"),
      A = t("E4mZ"),
      y = t("KJsA"),
      v = t("a6Zv"),
      j = t("UgNy"),
      T = t("ESTr")
    let C = (0, T.a)({
      name: "arrow-right-md-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.474609, y: 4.14209, width: 8.843018, height: 7.716309 },
        visualBounds: { x: 3.474609, y: 4.14209, width: 8.843018, height: 7.716309 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.474609, y: 4.14209, width: 8.843018, height: 7.716309 },
        center: { x: 7.896118, y: 8.000244 },
        insets: { top: 4.14209, right: 3.682373, bottom: 4.141601, left: 3.474609 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.896118, y: 8.000244 }, foreground: { x: 7.896118, y: 8.000244 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.2959 4.29559C8.50089 4.09098 8.83316 4.09086 9.03809 4.29559L12.0176 7.27509C12.4178 7.67531 12.4177 8.32498 12.0176 8.72528L9.03809 11.7048C8.83317 11.9097 8.50095 11.9095 8.2959 11.7048C8.09105 11.4997 8.09093 11.1676 8.2959 10.9626L10.7324 8.52606H4C3.71014 8.52606 3.47476 8.2905 3.47461 8.00067C3.47461 7.71072 3.71005 7.47528 4 7.47528H10.7344L8.2959 5.03778C8.09105 4.83274 8.09093 4.50056 8.2959 4.29559Z" fill="currentColor"/>',
    })
    var I = t("oyxz"),
      S = t("qpPf"),
      N = t("Sm6l"),
      P = t("HOLv")
    let E = (0, T.a)({
        name: "minus-md-bold-12",
        canvas: {
          width: 12,
          height: 12,
          viewBox: "0 0 12 12",
          frame: { x: 0, y: 0, width: 12, height: 12 },
          inkBounds: { x: 1.299805, y: 5.299805, width: 9.400391, height: 1.400391 },
          visualBounds: { x: 1.299805, y: 5.299805, width: 9.400391, height: 1.400391 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.299805, y: 5.299805, width: 9.400391, height: 1.400391 },
          center: { x: 6.000001, y: 6.000001 },
          insets: { top: 5.299805, right: 1.299804, bottom: 5.299804, left: 1.299805 },
          anchors: {
            frame: { x: 6, y: 6 },
            ink: { x: 6.000001, y: 6.000001 },
            foreground: { x: 6.000001, y: 6.000001 },
          },
        },
        capabilities: ["icon"],
        body: '<path d="M10 6.7002H2C1.6134 6.7002 1.2998 6.3866 1.2998 6C1.2998 5.6134 1.6134 5.2998 2 5.2998H10C10.3866 5.2998 10.7002 5.6134 10.7002 6C10.7002 6.3866 10.3866 6.7002 10 6.7002Z" fill="currentColor"/>',
      }),
      w = (0, T.a)({
        name: "plus-md-bold-12",
        canvas: {
          width: 12,
          height: 12,
          viewBox: "0 0 12 12",
          frame: { x: 0, y: 0, width: 12, height: 12 },
          inkBounds: { x: 1.299805, y: 1.299805, width: 9.400391, height: 9.400391 },
          visualBounds: { x: 1.299805, y: 1.299805, width: 9.400391, height: 9.400391 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.299805, y: 1.299805, width: 9.400391, height: 9.400391 },
          center: { x: 6.000001, y: 6.000001 },
          insets: { top: 1.299805, right: 1.299804, bottom: 1.299804, left: 1.299805 },
          anchors: {
            frame: { x: 6, y: 6 },
            ink: { x: 6.000001, y: 6.000001 },
            foreground: { x: 6.000001, y: 6.000001 },
          },
        },
        capabilities: ["icon"],
        body: '<path d="M6 1.2998C6.3866 1.2998 6.7002 1.6134 6.7002 2V5.2998H10C10.3866 5.2998 10.7002 5.6134 10.7002 6C10.7002 6.3866 10.3866 6.7002 10 6.7002H6.7002V10C6.7002 10.3866 6.3866 10.7002 6 10.7002C5.6134 10.7002 5.2998 10.3866 5.2998 10V6.7002H2C1.6134 6.7002 1.2998 6.3866 1.2998 6C1.2998 5.6134 1.6134 5.2998 2 5.2998H5.2998V2C5.2998 1.6134 5.6134 1.2998 6 1.2998Z" fill="currentColor"/>',
      })
    var O = t("Qgfj"),
      L = t("TjgH"),
      R = t("CtJU"),
      M = t("GGiG"),
      D = t("tvcH"),
      k = t("JwoO")
    function U(e) {
      let a = (0, s.c)(8),
        { status: t } = e
      switch (t) {
        case "created":
        case "pending": {
          let e
          return (
            a[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(I.A, { id: "rosalind.personaStatus.inProgress", defaultMessage: "In progress" })),
                (a[0] = e))
              : (e = a[0]),
            e
          )
        }
        case "completed": {
          let e
          return (
            a[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(I.A, {
                  id: "rosalind.personaStatus.submitted",
                  defaultMessage: "Information submitted",
                })),
                (a[1] = e))
              : (e = a[1]),
            e
          )
        }
        case "needs_review": {
          let e
          return (
            a[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(I.A, { id: "rosalind.personaStatus.underReview", defaultMessage: "Under review" })),
                (a[2] = e))
              : (e = a[2]),
            e
          )
        }
        case "approved": {
          let e
          return (
            a[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(I.A, {
                  id: "rosalind.personaStatus.approved",
                  defaultMessage: "Verification approved",
                })),
                (a[3] = e))
              : (e = a[3]),
            e
          )
        }
        case "declined": {
          let e
          return (
            a[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(I.A, {
                  id: "rosalind.personaStatus.declined",
                  defaultMessage: "Verification declined",
                })),
                (a[4] = e))
              : (e = a[4]),
            e
          )
        }
        case "failed": {
          let e
          return (
            a[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(I.A, { id: "rosalind.personaStatus.failed", defaultMessage: "Verification failed" })),
                (a[5] = e))
              : (e = a[5]),
            e
          )
        }
        case "expired": {
          let e
          return (
            a[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(I.A, {
                  id: "rosalind.personaStatus.expired",
                  defaultMessage: "Verification expired",
                })),
                (a[6] = e))
              : (e = a[6]),
            e
          )
        }
        default: {
          let e
          return (
            a[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(I.A, { id: "rosalind.personaStatus.notConfirmed", defaultMessage: "Not confirmed" })),
                (a[7] = e))
              : (e = a[7]),
            e
          )
        }
      }
    }
    var B = t("sgGK"),
      W = t("OWtl")
    let H = ["lab", "research", "members", "locations", "review"],
      G = (0, l.z8)("LabApplicationScope", { parent: W.u }),
      $ = (0, l.vP)(G, () => null),
      F = (0, l.vP)(G, () => null),
      q = (0, l.vP)(G, ""),
      z = (0, l.vP)(G, ""),
      Y = (0, l.vP)(G, ""),
      V = (0, l.vP)(G, ""),
      K = (0, l.vP)(G, () => []),
      Z = (0, l.vP)(G, () => ["chatgpt-codex"]),
      J = (0, l.vP)(G, () => []),
      X = (0, l.vP)(G, ""),
      Q = (0, l.i1)(G, (e, { get: a }) => ec([e, ...a(J), a(X)].join("\n"))),
      ee = (0, l.vP)(G, ""),
      ea = (0, l.vP)(G, ""),
      et = (0, l.vP)(G, ""),
      ei = (0, l.vP)(G, ""),
      es = (0, l.vP)(G, () => null),
      el = (0, l.vP)(G, () => []),
      en = (0, l.vP)(G, () => []),
      er = (0, l.vP)(G, "")
    function eo(e, a) {
      let t = e.get($),
        i = a?.answers
      ;(0, l.Y)(e, (e) => {
        ;(e.set($, null != a && t?.id === a.id ? { ...a, persona_status: t.persona_status } : a),
          e.set(F, null),
          e.set(q, i?.lab_name ?? ""),
          e.set(z, i?.lab_website ?? ""),
          e.set(Y, i?.lab_lead_responsibilities ?? ""),
          e.set(V, i?.research_purpose ?? ""),
          e.set(K, i?.research_scopes ?? []),
          e.set(Z, null == a || "draft" === a.state ? ["chatgpt-codex"] : (i?.products ?? [])),
          e.set(J, i?.member_emails ?? []),
          e.set(X, ""),
          e.set(ee, i?.biosafety_contact?.name ?? ""),
          e.set(ea, i?.biosafety_contact?.email ?? ""),
          e.set(et, i?.biosafety_contact?.role ?? ""),
          e.set(ei, i?.primary_country ?? ""),
          e.set(es, i?.additional_locations ?? null),
          e.set(el, i?.additional_countries ?? []),
          e.set(en, i?.selected_safeguards ?? []),
          e.set(er, i?.other_safeguard_details ?? ""))
      })
    }
    function ec(e) {
      return [
        ...new Set(
          e
            .split(/[,;\n\r]+/)
            .map((e) => e.trim().toLowerCase())
            .filter((e) => "" !== e),
        ),
      ]
    }
    function ed(e) {
      let a,
        t,
        l,
        n,
        r,
        o,
        c,
        d,
        u,
        m = (0, s.c)(25),
        { application: p, onEdit: f } = e
      return (
        m[0] !== f ? ((a = null == f ? void 0 : () => f("lab")), (m[0] = f), (m[1] = a)) : (a = m[1]),
        m[2] !== p || m[3] !== a
          ? ((t = (0, i.jsx)(eu, { application: p, onEdit: a })), (m[2] = p), (m[3] = a), (m[4] = t))
          : (t = m[4]),
        m[5] !== f ? ((l = null == f ? void 0 : () => f("research")), (m[5] = f), (m[6] = l)) : (l = m[6]),
        m[7] !== p || m[8] !== l
          ? ((n = (0, i.jsx)(em, { application: p, onEdit: l })), (m[7] = p), (m[8] = l), (m[9] = n))
          : (n = m[9]),
        m[10] !== f ? ((r = null == f ? void 0 : () => f("members")), (m[10] = f), (m[11] = r)) : (r = m[11]),
        m[12] !== p || m[13] !== r
          ? ((o = (0, i.jsx)(eh, { application: p, onEdit: r })), (m[12] = p), (m[13] = r), (m[14] = o))
          : (o = m[14]),
        m[15] !== f ? ((c = null == f ? void 0 : () => f("locations")), (m[15] = f), (m[16] = c)) : (c = m[16]),
        m[17] !== p || m[18] !== c
          ? ((d = (0, i.jsx)(ex, { application: p, onEdit: c })), (m[17] = p), (m[18] = c), (m[19] = d))
          : (d = m[19]),
        m[20] !== t || m[21] !== n || m[22] !== o || m[23] !== d
          ? ((u = (0, i.jsxs)("div", { className: "flex flex-col gap-4", children: [t, n, o, d] })),
            (m[20] = t),
            (m[21] = n),
            (m[22] = o),
            (m[23] = d),
            (m[24] = u))
          : (u = m[24]),
        u
      )
    }
    function eu(e) {
      let a,
        t,
        n,
        r,
        c,
        d,
        u,
        m,
        p,
        f,
        h,
        _,
        x,
        g,
        b,
        A,
        y,
        v = (0, s.c)(39),
        { application: j, onEdit: T } = e,
        C = (0, l.Ul)(null == j ? q : (j.answers.lab_name ?? "")),
        S = (0, l.Ul)(null == j ? z : (j.answers.lab_website ?? "")),
        N = (0, l.Ul)(null == j ? Y : (j.answers.lab_lead_responsibilities ?? "")),
        P = (0, l.Ul)(j ?? $),
        E = P?.answers.lab_lead_name,
        w = P?.answers.lab_lead_email,
        { accountId: O, userId: M, email: k } = (0, o.As)()
      v[0] !== O || v[1] !== M ? ((a = { accountId: O, userId: M }), (v[0] = O), (v[1] = M), (v[2] = a)) : (a = v[2])
      let W = null == j
      v[3] !== W ? ((t = { enabled: W }), (v[3] = W), (v[4] = t)) : (t = v[4])
      let { data: H } = (0, l._U)(D.km, a, t),
        G = null == j && void 0 === E ? H?.name : E,
        F = null == j && void 0 === w ? k : w
      return (
        v[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(I.A, { id: "rosalind.review.lab", defaultMessage: "Lab" })), (v[5] = n))
          : (n = v[5]),
        v[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(I.A, { id: "rosalind.review.labName", defaultMessage: "Lab name" })), (v[6] = r))
          : (r = v[6]),
        v[7] !== C ? ((c = C.trim() || (0, i.jsx)(eb, {})), (v[7] = C), (v[8] = c)) : (c = v[8]),
        v[9] !== c
          ? ((d = (0, i.jsx)(R.l, { align: "start", spacing: "relaxed", label: r, children: c })),
            (v[9] = c),
            (v[10] = d))
          : (d = v[10]),
        v[11] !== P
          ? ((u =
              null != P &&
              (0, i.jsx)(R.l, {
                align: "start",
                spacing: "relaxed",
                label: (0, i.jsx)(I.A, { id: "rosalind.review.organization", defaultMessage: "Organization" }),
                children:
                  P.associated_workspace_name ??
                  (null == P.associated_workspace_id
                    ? (0, i.jsx)(I.A, {
                        id: "rosalind.review.noOrganization",
                        defaultMessage: "No organization associated",
                      })
                    : (0, i.jsx)(I.A, {
                        id: "rosalind.review.organizationNameUnavailable",
                        defaultMessage: "Organization name unavailable",
                      })),
              })),
            (v[11] = P),
            (v[12] = u))
          : (u = v[12]),
        v[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, i.jsx)(I.A, { id: "rosalind.review.labWebsite", defaultMessage: "Research page" })), (v[13] = m))
          : (m = v[13]),
        v[14] !== S ? ((p = S.trim() || (0, i.jsx)(eb, {})), (v[14] = S), (v[15] = p)) : (p = v[15]),
        v[16] !== p
          ? ((f = (0, i.jsx)(R.l, { align: "start", spacing: "relaxed", label: m, children: p })),
            (v[16] = p),
            (v[17] = f))
          : (f = v[17]),
        v[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, i.jsx)(I.A, { id: "rosalind.review.labLead", defaultMessage: "Lab lead" })), (v[18] = h))
          : (h = v[18]),
        v[19] !== G ? ((_ = null != G && (0, i.jsx)("p", { children: G })), (v[19] = G), (v[20] = _)) : (_ = v[20]),
        v[21] !== F ? ((x = null != F && (0, i.jsx)("p", { children: F })), (v[21] = F), (v[22] = x)) : (x = v[22]),
        v[23] !== N
          ? ((g = "" !== N.trim() && (0, i.jsx)("p", { className: "pt-1 whitespace-pre-wrap", children: N })),
            (v[23] = N),
            (v[24] = g))
          : (g = v[24]),
        v[25] !== _ || v[26] !== x || v[27] !== g
          ? ((b = (0, i.jsx)(R.l, {
              align: "start",
              spacing: "relaxed",
              label: h,
              children: (0, i.jsxs)("div", { className: "flex min-w-0 flex-col", children: [_, x, g] }),
            })),
            (v[25] = _),
            (v[26] = x),
            (v[27] = g),
            (v[28] = b))
          : (b = v[28]),
        v[29] !== j || v[30] !== P?.persona_status
          ? ((A =
              null == j &&
              (0, i.jsx)(R.l, {
                align: "start",
                spacing: "relaxed",
                label: (0, i.jsx)(I.A, {
                  id: "rosalind.review.verification",
                  defaultMessage: "Applicant verification",
                }),
                children: (0, i.jsx)(L.E, {
                  variant: "outlinePill",
                  children: (0, i.jsx)(U, { status: P?.persona_status }),
                }),
              })),
            (v[29] = j),
            (v[30] = P?.persona_status),
            (v[31] = A))
          : (A = v[31]),
        v[32] !== T || v[33] !== f || v[34] !== b || v[35] !== A || v[36] !== d || v[37] !== u
          ? ((y = (0, i.jsxs)(B.e, { onEdit: T, title: n, children: [d, u, f, b, A] })),
            (v[32] = T),
            (v[33] = f),
            (v[34] = b),
            (v[35] = A),
            (v[36] = d),
            (v[37] = u),
            (v[38] = y))
          : (y = v[38]),
        y
      )
    }
    function em(e) {
      let a,
        t,
        n,
        r,
        o,
        c,
        d,
        u,
        m,
        p = (0, s.c)(17),
        { application: f, onEdit: h } = e,
        _ = (0, l.Ul)(null == f ? V : (f.answers.research_purpose ?? "")),
        x = (0, l.Ul)(null == f ? K : f.answers.research_scopes),
        g = (0, l.Ul)(null == f ? Z : f.answers.products)
      return (
        p[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)(I.A, { id: "rosalind.review.research", defaultMessage: "Research" })), (p[0] = a))
          : (a = p[0]),
        p[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(I.A, { id: "rosalind.review.researchPurpose", defaultMessage: "Research purpose" })),
            (p[1] = t))
          : (t = p[1]),
        p[2] !== _ ? ((n = _.trim() || (0, i.jsx)(eb, {})), (p[2] = _), (p[3] = n)) : (n = p[3]),
        p[4] !== n
          ? ((r = (0, i.jsx)(R.l, {
              align: "start",
              spacing: "relaxed",
              label: t,
              children: (0, i.jsx)("span", { className: "whitespace-pre-wrap", children: n }),
            })),
            (p[4] = n),
            (p[5] = r))
          : (r = p[5]),
        p[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(I.A, { id: "rosalind.review.researchScope", defaultMessage: "Research scope" })),
            (p[6] = o))
          : (o = p[6]),
        p[7] !== x
          ? ((c = (0, i.jsx)(R.l, {
              align: "start",
              spacing: "relaxed",
              label: o,
              children:
                null == x || 0 === x.length
                  ? (0, i.jsx)(eA, {})
                  : (0, i.jsx)("span", {
                      children: (0, i.jsx)(O.dT, {
                        type: "unit",
                        value: k.WZ.filter((e) => {
                          let { value: a } = e
                          return x.includes(a)
                        }).map(ef),
                      }),
                    }),
            })),
            (p[7] = x),
            (p[8] = c))
          : (c = p[8]),
        p[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)(I.A, { id: "rosalind.review.requestedAccess", defaultMessage: "Requested access" })),
            (p[9] = d))
          : (d = p[9]),
        p[10] !== g
          ? ((u = (0, i.jsx)(R.l, {
              align: "start",
              spacing: "relaxed",
              label: d,
              children:
                null == g || 0 === g.length
                  ? (0, i.jsx)(eA, {})
                  : (0, i.jsx)("span", {
                      children: (0, i.jsx)(O.dT, {
                        type: "unit",
                        value: k.P2.filter((e) => {
                          let { value: a } = e
                          return g.includes(a)
                        }).map(ep),
                      }),
                    }),
            })),
            (p[10] = g),
            (p[11] = u))
          : (u = p[11]),
        p[12] !== h || p[13] !== r || p[14] !== c || p[15] !== u
          ? ((m = (0, i.jsxs)(B.e, { onEdit: h, title: a, children: [r, c, u] })),
            (p[12] = h),
            (p[13] = r),
            (p[14] = c),
            (p[15] = u),
            (p[16] = m))
          : (m = p[16]),
        m
      )
    }
    function ep(e) {
      let { label: a } = e
      return a
    }
    function ef(e) {
      let { label: a } = e
      return a
    }
    function eh(e) {
      let a,
        t,
        n,
        r,
        c,
        d,
        u,
        m = (0, s.c)(15),
        { application: p, onEdit: f } = e,
        { email: h } = (0, o.As)()
      m[0] !== p
        ? ((a = null == p ? Q : ec([p.answers.lab_lead_email, ...(p.answers.member_emails ?? [])].join("\n"))),
          (m[0] = p),
          (m[1] = a))
        : (a = m[1])
      let _ = (0, l._U)(a, h),
        x = (0, l.Ul)(null == p ? ee : (p.answers.biosafety_contact?.name ?? "")),
        g = (0, l.Ul)(null == p ? ea : (p.answers.biosafety_contact?.email ?? "")),
        b = (0, l.Ul)(null == p ? et : (p.answers.biosafety_contact?.role ?? ""))
      return (
        m[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(I.A, { id: "rosalind.review.members", defaultMessage: "Members" })), (m[2] = t))
          : (t = m[2]),
        m[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(I.A, { id: "rosalind.review.proposedMembers", defaultMessage: "Proposed members" })),
            (m[3] = n))
          : (n = m[3]),
        m[4] !== _
          ? ((r = (0, i.jsx)(R.l, {
              align: "start",
              spacing: "relaxed",
              label: n,
              children:
                0 === _.length
                  ? (0, i.jsx)(eb, {})
                  : (0, i.jsx)("ul", { className: "flex min-w-0 flex-col", children: _.map(e_) }),
            })),
            (m[4] = _),
            (m[5] = r))
          : (r = m[5]),
        m[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, i.jsx)(I.A, { id: "rosalind.review.biosafetyContact", defaultMessage: "Biosafety contact" })),
            (m[6] = c))
          : (c = m[6]),
        m[7] !== g || m[8] !== x || m[9] !== b
          ? ((d = (0, i.jsx)(R.l, {
              align: "start",
              spacing: "relaxed",
              label: c,
              children:
                "" === x.trim() && "" === g.trim() && "" === b.trim()
                  ? (0, i.jsx)(eb, {})
                  : (0, i.jsxs)("div", {
                      className: "flex min-w-0 flex-col",
                      children: [
                        "" !== x.trim() && (0, i.jsx)("p", { children: x }),
                        "" !== g.trim() && (0, i.jsx)("p", { children: g }),
                        "" !== b.trim() && (0, i.jsx)("p", { className: "pt-1 whitespace-pre-wrap", children: b }),
                      ],
                    }),
            })),
            (m[7] = g),
            (m[8] = x),
            (m[9] = b),
            (m[10] = d))
          : (d = m[10]),
        m[11] !== f || m[12] !== r || m[13] !== d
          ? ((u = (0, i.jsxs)(B.e, { onEdit: f, title: t, children: [r, d] })),
            (m[11] = f),
            (m[12] = r),
            (m[13] = d),
            (m[14] = u))
          : (u = m[14]),
        u
      )
    }
    function e_(e) {
      return (0, i.jsx)("li", { children: e }, e)
    }
    function ex(e) {
      let a,
        t,
        n,
        r,
        o,
        c,
        d,
        u,
        m,
        p,
        f = (0, s.c)(29),
        { application: _, onEdit: x } = e,
        g = (0, h.A)(),
        b = (0, l.Ul)(null == _ ? ei : (_.answers.primary_country ?? "")),
        A = (0, l.Ul)(null == _ ? es : _.answers.additional_locations),
        y = (0, l.Ul)(null == _ ? el : _.answers.additional_countries),
        v = (0, l.Ul)(null == _ ? en : _.answers.selected_safeguards),
        j = (0, l.Ul)(null == _ ? er : (_.answers.other_safeguard_details ?? ""))
      f[0] === Symbol.for("react.memo_cache_sentinel") ? ((a = (0, i.jsx)(eA, {})), (f[0] = a)) : (a = f[0])
      let T = a
      if ("yes" === A && null != y && y.length > 0) {
        let e, a
        if (f[1] !== y || f[2] !== g) {
          let a
          ;(f[4] !== g ? ((a = (e) => g.formatDisplayName(e, { type: "region" })), (f[4] = g), (f[5] = a)) : (a = f[5]),
            (e = y.map(a)),
            (f[1] = y),
            (f[2] = g),
            (f[3] = e))
        } else e = f[3]
        ;(f[6] !== e
          ? ((a = (0, i.jsx)("span", { children: (0, i.jsx)(O.dT, { type: "unit", value: e }) })),
            (f[6] = e),
            (f[7] = a))
          : (a = f[7]),
          (T = a))
      } else if ("yes" !== A) {
        let e
        ;(f[8] !== A
          ? ((e =
              k.tp.find((e) => {
                let { id: a } = e
                return a === A
              })?.label ?? (0, i.jsx)(eA, {})),
            (f[8] = A),
            (f[9] = e))
          : (e = f[9]),
          (T = e))
      }
      return (
        f[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(I.A, { id: "rosalind.review.locations", defaultMessage: "Locations and safeguards" })),
            (f[10] = t))
          : (t = f[10]),
        f[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(I.A, { id: "rosalind.review.primaryCountry", defaultMessage: "Primary access location" })),
            (f[11] = n))
          : (n = f[11]),
        f[12] !== g || f[13] !== b
          ? ((r = "" === b ? (0, i.jsx)(eb, {}) : g.formatDisplayName(b, { type: "region" })),
            (f[12] = g),
            (f[13] = b),
            (f[14] = r))
          : (r = f[14]),
        f[15] !== r
          ? ((o = (0, i.jsx)(R.l, { align: "start", spacing: "relaxed", label: n, children: r })),
            (f[15] = r),
            (f[16] = o))
          : (o = f[16]),
        f[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, i.jsx)(I.A, {
              id: "rosalind.review.additionalCountries",
              defaultMessage: "Additional countries or regions",
            })),
            (f[17] = c))
          : (c = f[17]),
        f[18] !== T
          ? ((d = (0, i.jsx)(R.l, { align: "start", spacing: "relaxed", label: c, children: T })),
            (f[18] = T),
            (f[19] = d))
          : (d = f[19]),
        f[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, i.jsx)(I.A, { id: "rosalind.review.safeguards", defaultMessage: "Safeguards" })), (f[20] = u))
          : (u = f[20]),
        f[21] !== j || f[22] !== v
          ? ((m = (0, i.jsx)(R.l, {
              align: "start",
              spacing: "relaxed",
              label: u,
              children:
                null == v || 0 === v.length
                  ? (0, i.jsx)(eA, {})
                  : (0, i.jsxs)("div", {
                      className: "flex min-w-0 flex-col gap-2",
                      children: [
                        (0, i.jsx)("ul", {
                          className: "flex min-w-0 flex-col gap-1",
                          children: k.Rs.filter((e) => {
                            let { value: a } = e
                            return v.includes(a)
                          }).map(eg),
                        }),
                        v.includes("other") &&
                          "" !== j.trim() &&
                          (0, i.jsx)("p", { className: "whitespace-pre-wrap", children: j }),
                      ],
                    }),
            })),
            (f[21] = j),
            (f[22] = v),
            (f[23] = m))
          : (m = f[23]),
        f[24] !== x || f[25] !== o || f[26] !== d || f[27] !== m
          ? ((p = (0, i.jsxs)(B.e, { onEdit: x, title: t, children: [o, d, m] })),
            (f[24] = x),
            (f[25] = o),
            (f[26] = d),
            (f[27] = m),
            (f[28] = p))
          : (p = f[28]),
        p
      )
    }
    function eg(e) {
      let { value: a, label: t } = e
      return (0, i.jsx)("li", { children: t }, a)
    }
    function eb() {
      let e,
        a = (0, s.c)(1)
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(I.A, { id: "rosalind.review.notProvided", defaultMessage: "Not provided" })), (a[0] = e))
          : (e = a[0]),
        e
      )
    }
    function eA() {
      let e,
        a = (0, s.c)(1)
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(I.A, { id: "rosalind.review.notSpecified", defaultMessage: "Not specified" })), (a[0] = e))
          : (e = a[0]),
        e
      )
    }
    var ey = t("MM0V"),
      ev = t("JNtf"),
      ej = t("mUDD")
    function eT(e) {
      let a,
        t,
        l,
        n,
        r,
        o,
        c,
        d,
        u = (0, s.c)(13),
        { onClose: m } = e
      return (
        u[0] !== m
          ? ((a = (e) => {
              e || m()
            }),
            (u[0] = m),
            (u[1] = a))
          : (a = u[1]),
        u[2] !== m
          ? ((t = (e) => {
              ;(e.preventDefault(), m())
            }),
            (u[2] = m),
            (u[3] = t))
          : (t = u[3]),
        u[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)(ev.L3, { children: (0, i.jsx)(I.A, { ...eS.title }) })), (u[4] = l))
          : (l = u[4]),
        u[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(ej.OO, {
              children: (0, i.jsx)(ej.c7, {
                title: l,
                subtitle: (0, i.jsx)(ev.rr, { children: (0, i.jsx)(I.A, { ...eS.subtitle }) }),
                subtitleSize: "sm",
              }),
            })),
            (u[5] = n))
          : (n = u[5]),
        u[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(ej.OO, {
              children: (0, i.jsx)("div", {
                className: "flex flex-col gap-3 text-sm text-secondary",
                children: (0, i.jsx)(eI, {}),
              }),
            })),
            (u[6] = r))
          : (r = u[6]),
        u[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(ej.OO, {
              children: (0, i.jsx)(ej.Es, {
                expandSingleButton: !1,
                children: (0, i.jsx)(N.$, {
                  color: "primary",
                  type: "submit",
                  children: (0, i.jsx)(I.A, {
                    id: "rosalind.labVerificationReminder.dismiss",
                    defaultMessage: "Got it",
                  }),
                }),
              }),
            })),
            (u[7] = o))
          : (o = u[7]),
        u[8] !== t
          ? ((c = (0, i.jsxs)(ej.R4, { as: "form", onSubmit: t, children: [n, r, o] })), (u[8] = t), (u[9] = c))
          : (c = u[9]),
        u[10] !== a || u[11] !== c
          ? ((d = (0, i.jsx)(ev.lG, { open: !0, size: "compact", onOpenChange: a, children: c })),
            (u[10] = a),
            (u[11] = c),
            (u[12] = d))
          : (d = u[12]),
        d
      )
    }
    function eC() {
      let e,
        a = (0, s.c)(1)
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(ey.l, {
              type: "warning",
              layout: "vertical",
              role: "status",
              title: (0, i.jsx)(I.A, { ...eS.title }),
              content: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("p", { children: (0, i.jsx)(I.A, { ...eS.subtitle }) }), (0, i.jsx)(eI, {})],
              }),
            })),
            (a[0] = e))
          : (e = a[0]),
        e
      )
    }
    function eI() {
      let e,
        a = (0, s.c)(1)
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("p", {
                  children: (0, i.jsx)(I.A, {
                    id: "rosalind.labVerificationReminder.status",
                    defaultMessage: "Your application is submitted. Identity verification is still pending.",
                  }),
                }),
                (0, i.jsx)("p", {
                  children: (0, i.jsx)(I.A, {
                    id: "rosalind.labVerificationReminder.instructions",
                    defaultMessage:
                      "Look for a message from Persona at your application email address. Follow the instructions to finish identity verification and complete your application.",
                  }),
                }),
                (0, i.jsx)("p", {
                  children: (0, i.jsx)(I.A, {
                    id: "rosalind.labVerificationReminder.spam",
                    defaultMessage: "Can\u2019t find it? Check your spam or junk folder.",
                  }),
                }),
              ],
            })),
            (a[0] = e))
          : (e = a[0]),
        e
      )
    }
    let eS = (0, O.YK)({
      title: { id: "rosalind.labVerificationReminder.title", defaultMessage: "Check your email" },
      subtitle: {
        id: "rosalind.labVerificationReminder.subtitle",
        defaultMessage: "One last step to complete your application",
      },
    })
    var eN = t("ZtSy"),
      eP = t("JIuM"),
      eE = t("LhhH")
    function ew() {
      let e,
        a,
        t,
        l,
        n,
        r = (0, s.c)(11)
      r[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = { preview: !1 }), (r[0] = e)) : (e = r[0])
      let { data: o } = (0, c.YL)(void 0, e),
        d = (0, eP.Dv)(o?.structure === "workspace" ? o.profile_picture_url : null)
      if (o?.structure !== "workspace") return null
      r[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, i.jsx)("h2", {
            className: "text-xs text-secondary",
            children: (0, i.jsx)(I.A, {
              id: "account.currentOrganization.heading",
              defaultMessage: "Current organization:",
            }),
          })),
          (r[1] = a))
        : (a = r[1])
      let u = o.name ?? null
      return (
        r[2] !== o.id || r[3] !== d || r[4] !== u
          ? ((t = (0, i.jsx)(eE.e, { alt: "", colorKey: o.id, name: u, size: "md", shape: "square", src: d })),
            (r[2] = o.id),
            (r[3] = d),
            (r[4] = u),
            (r[5] = t))
          : (t = r[5]),
        r[6] !== o.name
          ? ((l = (0, i.jsx)("span", { className: "min-w-0 text-base break-words", children: o.name })),
            (r[6] = o.name),
            (r[7] = l))
          : (l = r[7]),
        r[8] !== t || r[9] !== l
          ? ((n = (0, i.jsxs)("section", {
              className: "flex flex-col gap-4 border-b border-default pb-6 select-text",
              children: [a, (0, i.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [t, l] })],
            })),
            (r[8] = t),
            (r[9] = l),
            (r[10] = n))
          : (n = r[10]),
        n
      )
    }
    function eO(e) {
      return (
        e?.structure === "workspace" &&
        ("account-owner" === e.account_user_role || "account-admin" === e.account_user_role)
      )
    }
    var eL = t("iE0s")
    function eR(e) {
      return (0, i.jsx)(
        eN.G,
        { appearance: "primary", href: eL.n3, initiator: "external_link", underline: "always", children: e },
        "learn-more",
      )
    }
    function eM(e) {
      let a,
        t,
        l,
        n,
        r,
        o,
        d = (0, s.c)(12),
        { awaitingReview: u } = e
      d[0] === Symbol.for("react.memo_cache_sentinel") ? ((a = { preview: !1 }), (d[0] = a)) : (a = d[0])
      let { data: m } = (0, c.YL)(void 0, a)
      d[1] !== m ? ((t = eO(m)), (d[1] = m), (d[2] = t)) : (t = d[2])
      let p = t
      if (void 0 !== u && u) {
        let e
        ;(d[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(I.A, {
              id: "rosalind.applicationStatus.submittedIntroductionWithLinks",
              defaultMessage:
                "Thanks for submitting your application for extended <model>GPT-Rosalind</model> access. We will start reviewing applications on Oct 22. <learnMore>Learn more</learnMore>",
              values: { model: eD, learnMore: eR },
            })),
            (d[3] = e))
          : (e = d[3]),
          (l = e))
      } else {
        let e
        ;(d[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(I.A, {
              id: "rosalind.labEntrypoint.introduction",
              defaultMessage:
                "Apply for expanded access to <model>GPT-Rosalind</model> for scientific research in ChatGPT, Codex, or the API. You\u2019ll be listed as your lab\u2019s principal investigator or lab lead.",
              values: { model: eD },
            })),
            (d[4] = e))
          : (e = d[4]),
          (l = e))
      }
      return (
        d[5] !== p ? ((n = p && (0, i.jsx)(ew, {})), (d[5] = p), (d[6] = n)) : (n = d[6]),
        d[7] !== l
          ? ((r = (0, i.jsx)("p", { className: "text-base leading-relaxed text-secondary", children: l })),
            (d[7] = l),
            (d[8] = r))
          : (r = d[8]),
        d[9] !== n || d[10] !== r
          ? ((o = (0, i.jsxs)(i.Fragment, { children: [n, r] })), (d[9] = n), (d[10] = r), (d[11] = o))
          : (o = d[11]),
        o
      )
    }
    function eD(e) {
      return (0, i.jsx)(
        eN.G,
        {
          appearance: "primary",
          href: "https://openai.com/rosalind/",
          initiator: "external_link",
          underline: "always",
          children: e,
        },
        "model",
      )
    }
    function ek(e) {
      return (
        ("submitted" === e.state || "in_progress" === e.state || "action_required" === e.state) &&
        ("completed" === e.persona_status || "needs_review" === e.persona_status)
      )
    }
    function eU(e) {
      let a,
        t,
        l,
        n,
        r,
        o,
        c,
        d,
        u,
        m,
        p,
        f,
        _,
        x,
        g,
        b,
        A,
        y,
        v,
        j,
        T,
        C,
        S = (0, s.c)(57),
        { application: M, onCancel: D, actions: k, statusContent: U, progress: B, detailsOpen: W } = e,
        H = (0, h.A)(),
        { answers: G, state: $, submitted_at: F } = M,
        q = "submitting" === $ ? "submitting" : "submitted",
        z = "info"
      ;("in_progress" === $ || "action_required" === $
        ? (q = "in_progress")
        : ("approved" === $ || "denied" === $ || "canceled" === $) && (q = "decision"),
        "approved" === $
          ? (z = "success")
          : "denied" === $
            ? (z = "danger")
            : "action_required" === $ && (z = "warning"),
        S[0] !== H
          ? ((a = H.formatMessage({
              id: "rosalind.applicationStatus.label",
              defaultMessage: "Lab application status",
            })),
            (S[0] = H),
            (S[1] = a))
          : (a = S[1]),
        S[2] !== $ ? ((t = (0, i.jsx)(eM, { awaitingReview: "submitted" === $ })), (S[2] = $), (S[3] = t)) : (t = S[3]),
        S[4] !== q || S[5] !== B
          ? ((l = B ?? (0, i.jsx)(eB, { currentStep: q })), (S[4] = q), (S[5] = B), (S[6] = l))
          : (l = S[6]),
        S[7] !== M || S[8] !== $ || S[9] !== U
          ? ((n =
              U ??
              (ek(M)
                ? (0, i.jsx)(eC, {})
                : (0, i.jsx)("p", {
                    className: "leading-relaxed text-secondary",
                    role: "status",
                    children: (0, i.jsx)(I.A, {
                      id: "rosalind.applicationStatus.description",
                      defaultMessage:
                        "{state, select, submitting {Your application is saved, but submission isn\u2019t complete} submitted {Your lab\u2019s application is awaiting review} in_progress {We\u2019re reviewing your lab\u2019s application. No action is required from you right now.} action_required {Your lab\u2019s application requires additional action before review can continue} approved {Your lab\u2019s application has been approved. Workspace setup is pending.} denied {Your application has been denied} canceled {Your application has been canceled} other {Your application has not been submitted}}",
                      values: { state: $ },
                    }),
                  }))),
            (S[7] = M),
            (S[8] = $),
            (S[9] = U),
            (S[10] = n))
          : (n = S[10]),
        S[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(I.A, { id: "rosalind.applicationStatus.status", defaultMessage: "Status" })), (S[11] = r))
          : (r = S[11]))
      let Y = eW[$]
      return (
        S[12] !== Y ? ((o = (0, i.jsx)(I.A, { ...Y })), (S[12] = Y), (S[13] = o)) : (o = S[13]),
        S[14] !== z || S[15] !== o
          ? ((c = (0, i.jsx)(R.l, {
              align: "start",
              spacing: "relaxed",
              label: r,
              children: (0, i.jsx)(L.E, { variant: z, children: o }),
            })),
            (S[14] = z),
            (S[15] = o),
            (S[16] = c))
          : (c = S[16]),
        S[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)(I.A, { id: "rosalind.applicationStatus.lab", defaultMessage: "Lab" })), (S[17] = d))
          : (d = S[17]),
        S[18] !== G.lab_name
          ? ((u = (0, i.jsx)(R.l, { align: "start", spacing: "relaxed", label: d, children: G.lab_name })),
            (S[18] = G.lab_name),
            (S[19] = u))
          : (u = S[19]),
        S[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, i.jsx)(I.A, {
              id: "rosalind.applicationStatus.reference",
              defaultMessage: "Application reference",
            })),
            (S[20] = m))
          : (m = S[20]),
        S[21] !== M.id
          ? ((p = (0, i.jsx)(R.l, {
              align: "start",
              spacing: "relaxed",
              label: m,
              children: (0, i.jsx)("span", { className: "font-mono", children: M.id }),
            })),
            (S[21] = M.id),
            (S[22] = p))
          : (p = S[22]),
        S[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, i.jsx)(I.A, { id: "rosalind.applicationStatus.applicant", defaultMessage: "Applicant" })),
            (S[23] = f))
          : (f = S[23]),
        S[24] !== G.lab_lead_name
          ? ((_ = null != G.lab_lead_name && (0, i.jsx)("p", { children: G.lab_lead_name })),
            (S[24] = G.lab_lead_name),
            (S[25] = _))
          : (_ = S[25]),
        S[26] !== G.lab_lead_email
          ? ((x = null != G.lab_lead_email && (0, i.jsx)("p", { children: G.lab_lead_email })),
            (S[26] = G.lab_lead_email),
            (S[27] = x))
          : (x = S[27]),
        S[28] !== _ || S[29] !== x
          ? ((g = (0, i.jsx)(R.l, {
              align: "start",
              spacing: "relaxed",
              label: f,
              children: (0, i.jsxs)("div", { className: "flex min-w-0 flex-col", children: [_, x] }),
            })),
            (S[28] = _),
            (S[29] = x),
            (S[30] = g))
          : (g = S[30]),
        S[31] !== F
          ? ((b =
              null != F &&
              (0, i.jsx)(R.l, {
                align: "start",
                spacing: "relaxed",
                label: (0, i.jsx)(I.A, { ...eW.submitted }),
                children: (0, i.jsx)(O.XU, { value: F, year: "numeric", month: "short", day: "numeric" }),
              })),
            (S[31] = F),
            (S[32] = b))
          : (b = S[32]),
        S[33] !== u || S[34] !== p || S[35] !== g || S[36] !== b || S[37] !== c
          ? ((A = (0, i.jsxs)("dl", {
              className:
                "@container divide-y divide-border border-t border-default select-text [--detail-property-label-width:theme(spacing.32)] [--detail-row-font-size:var(--text-sm)]",
              children: [c, u, p, g, b],
            })),
            (S[33] = u),
            (S[34] = p),
            (S[35] = g),
            (S[36] = b),
            (S[37] = c),
            (S[38] = A))
          : (A = S[38]),
        S[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, i.jsxs)("summary", {
              className:
                "flex cursor-interaction list-none items-center justify-between gap-4 font-medium select-none marker:hidden",
              children: [
                (0, i.jsx)(I.A, { id: "rosalind.applicationStatus.details", defaultMessage: "Application details" }),
                (0, i.jsx)(P.I, { className: "shrink-0 group-open:hidden", asset: w }),
                (0, i.jsx)(P.I, { className: "hidden shrink-0 group-open:block", asset: E }),
              ],
            })),
            (S[39] = y))
          : (y = S[39]),
        S[40] !== M
          ? ((v = (0, i.jsx)("div", { className: "pt-4", children: (0, i.jsx)(ed, { application: M }) })),
            (S[40] = M),
            (S[41] = v))
          : (v = S[41]),
        S[42] !== W || S[43] !== v
          ? ((j = (0, i.jsxs)("details", {
              className: "group rounded-xl border border-default p-4",
              open: W,
              children: [y, v],
            })),
            (S[42] = W),
            (S[43] = v),
            (S[44] = j))
          : (j = S[44]),
        S[45] !== D || S[46] !== $
          ? ((T =
              null != D &&
              ("submitting" === $ || "submitted" === $ || "in_progress" === $ || "action_required" === $) &&
              (0, i.jsx)(N.$, {
                className: "w-full self-start sm:w-auto",
                color: "outline",
                onClick: D,
                size: "beaconAction",
                type: "button",
                children: (0, i.jsx)(I.A, {
                  id: "rosalind.applicationStatus.cancel",
                  defaultMessage: "Cancel application",
                }),
              })),
            (S[45] = D),
            (S[46] = $),
            (S[47] = T))
          : (T = S[47]),
        S[48] !== k ||
        S[49] !== a ||
        S[50] !== A ||
        S[51] !== t ||
        S[52] !== j ||
        S[53] !== T ||
        S[54] !== l ||
        S[55] !== n
          ? ((C = (0, i.jsxs)("section", {
              className:
                "flex flex-col gap-6 rounded-2xl border border-default bg-surface p-4.5 text-sm text-default select-text sm:p-6",
              "aria-label": a,
              children: [t, l, n, A, j, T, k],
            })),
            (S[48] = k),
            (S[49] = a),
            (S[50] = A),
            (S[51] = t),
            (S[52] = j),
            (S[53] = T),
            (S[54] = l),
            (S[55] = n),
            (S[56] = C))
          : (C = S[56]),
        C
      )
    }
    function eB(e) {
      let a,
        t,
        l,
        n,
        r,
        o,
        c = (0, s.c)(18),
        { currentStep: d } = e,
        u = (0, h.A)(),
        m = "submitting" === d ? eW.submitting : eW.submitted
      if (
        (c[0] !== m
          ? ((a = { id: "submitted", label: (0, i.jsx)(I.A, { ...m }) }), (c[0] = m), (c[1] = a))
          : (a = c[1]),
        c[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = { id: "in_progress", label: (0, i.jsx)(I.A, { ...eW.in_progress }) }), (c[2] = t))
          : (t = c[2]),
        c[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = { id: "decision", label: (0, i.jsx)(I.A, { ...eW.decision }) }), (c[3] = l))
          : (l = c[3]),
        c[4] !== d || c[5] !== a)
      ) {
        if (((n = [a, t, l]), "activation" === d || "complete" === d)) {
          let e,
            a,
            t = eW[d]
          ;(c[7] !== t ? ((e = (0, i.jsx)(I.A, { ...t })), (c[7] = t), (c[8] = e)) : (e = c[8]),
            c[9] !== d || c[10] !== e ? ((a = { id: d, label: e }), (c[9] = d), (c[10] = e), (c[11] = a)) : (a = c[11]),
            n.push(a))
        }
        ;((c[4] = d), (c[5] = a), (c[6] = n))
      } else n = c[6]
      let p = "submitting" === d ? "submitted" : d
      return (
        c[12] !== u
          ? ((r = u.formatMessage({
              id: "rosalind.applicationStatus.progress",
              defaultMessage: "Application progress",
            })),
            (c[12] = u),
            (c[13] = r))
          : (r = c[13]),
        c[14] !== n || c[15] !== p || c[16] !== r
          ? ((o = (0, i.jsx)(M.K, { currentStep: p, distribute: !0, ariaLabel: r, steps: n })),
            (c[14] = n),
            (c[15] = p),
            (c[16] = r),
            (c[17] = o))
          : (o = c[17]),
        o
      )
    }
    let eW = (0, O.YK)({
      draft: { id: "rosalind.applicationStatus.draft", defaultMessage: "Draft" },
      submitting: { id: "rosalind.applicationStatus.submitting", defaultMessage: "Submission incomplete" },
      submitted: { id: "rosalind.applicationStatus.submitted", defaultMessage: "Submitted" },
      in_progress: { id: "rosalind.applicationStatus.inReview", defaultMessage: "In review" },
      action_required: { id: "rosalind.applicationStatus.actionRequired", defaultMessage: "Action required" },
      approved: { id: "rosalind.applicationStatus.approved", defaultMessage: "Approved" },
      denied: { id: "rosalind.applicationStatus.denied", defaultMessage: "Denied" },
      canceled: { id: "rosalind.applicationStatus.canceled", defaultMessage: "Canceled" },
      decision: { id: "rosalind.applicationStatus.decision", defaultMessage: "Decision" },
      activation: { id: "rosalind.labActivation.step.activation", defaultMessage: "Activation" },
      complete: { id: "rosalind.labActivation.step.complete", defaultMessage: "Complete" },
    })
    var eH = t("wgaZ"),
      eG = t("T1PX"),
      e$ = t("zLIa"),
      eF = t("Sezd")
    function eq(e) {
      let a,
        t,
        l,
        n,
        r,
        o = (0, s.c)(18),
        { id: c, checked: d, onCheckedChange: u, label: m, description: p, invalid: f } = e,
        h = null == p ? void 0 : `${c}-description`
      return (
        o[0] !== d || o[1] !== c || o[2] !== f || o[3] !== u || o[4] !== h
          ? ((a = (0, i.jsx)(eF.S, {
              id: c,
              className: "mt-0.5",
              "aria-describedby": h,
              "aria-invalid": f,
              checked: d,
              onCheckedChange: u,
              size: "sm",
              variant: "choice",
            })),
            (o[0] = d),
            (o[1] = c),
            (o[2] = f),
            (o[3] = u),
            (o[4] = h),
            (o[5] = a))
          : (a = o[5]),
        o[6] !== c || o[7] !== m
          ? ((t = (0, i.jsx)("label", {
              className: "cursor-interaction text-sm leading-4.5 select-none",
              htmlFor: c,
              children: m,
            })),
            (o[6] = c),
            (o[7] = m),
            (o[8] = t))
          : (t = o[8]),
        o[9] !== p || o[10] !== c
          ? ((l = null != p && (0, i.jsx)(eH.Rr, { id: `${c}-description`, size: "body", children: p })),
            (o[9] = p),
            (o[10] = c),
            (o[11] = l))
          : (l = o[11]),
        o[12] !== t || o[13] !== l
          ? ((n = (0, i.jsxs)("div", { className: "flex min-w-0 flex-col gap-0.5", children: [t, l] })),
            (o[12] = t),
            (o[13] = l),
            (o[14] = n))
          : (n = o[14]),
        o[15] !== a || o[16] !== n
          ? ((r = (0, i.jsxs)("div", { className: "relative flex items-start gap-2.5", children: [a, n] })),
            (o[15] = a),
            (o[16] = n),
            (o[17] = r))
          : (r = o[17]),
        r
      )
    }
    var ez = t("WFY2")
    let eY = "rosalind-lab-activation-2026-10-20-v1",
      eV = "https://cdn.openai.com/pdf/ce33e19d-51e5-4d93-8769-908ac6217678/rosalind-edu-biosafety-one-pager.pdf",
      eK =
        "https://cdn.openai.com/pdf/ce33e19d-51e5-4d93-8769-908ac6217678/rosalind-edu-safe-deployment-best-practices.pdf"
    function eZ() {
      let e,
        a,
        t,
        l,
        n,
        r,
        o,
        c,
        d = (0, s.c)(8)
      return (
        d[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(eH.I3, {
              children: (0, i.jsx)(I.A, {
                id: "rosalind.labActivation.responsibilities.title",
                defaultMessage: "Your responsibilities",
              }),
            })),
            (d[0] = e))
          : (e = d[0]),
        d[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsxs)("ul", {
              className: "flex list-disc flex-col gap-2.5 ps-4.5 text-secondary",
              children: [
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(I.A, {
                    id: "rosalind.labActivation.responsibilities.membersSummary",
                    defaultMessage:
                      "Manage access for up to 30 eligible lab members: faculty, staff, postdocs, and supervised graduate students",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(I.A, {
                    id: "rosalind.labActivation.responsibilities.rosterSummary",
                    defaultMessage:
                      "Keep lab membership and your institutional safety contact current, and remove ineligible members",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(I.A, {
                    id: "rosalind.labActivation.responsibilities.researchSummary",
                    defaultMessage: "Follow applicable research, security, and data-handling requirements",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(I.A, {
                    id: "rosalind.labActivation.responsibilities.reportingSummary",
                    defaultMessage:
                      "Report suspected misuse or security incidents within 24 hours and cooperate with follow-up",
                  }),
                }),
              ],
            })),
            (d[1] = a))
          : (a = d[1]),
        d[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsxs)("summary", {
              className:
                "flex cursor-interaction list-none items-center justify-between gap-4 font-medium select-none marker:hidden",
              children: [
                (0, i.jsx)(I.A, {
                  id: "rosalind.labActivation.responsibilities.expand",
                  defaultMessage: "View all lab responsibilities and safety guidance",
                }),
                (0, i.jsx)(P.I, { className: "shrink-0 group-open:hidden", asset: w }),
                (0, i.jsx)(P.I, { className: "hidden shrink-0 group-open:block", asset: E }),
              ],
            })),
            (d[2] = t))
          : (t = d[2]),
        d[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)(eH.Rr, {
              size: "body",
              children: (0, i.jsx)(I.A, {
                id: "rosalind.labActivation.responsibilities.safetyDocuments",
                defaultMessage:
                  "Review the <biosafety>biosafety overview</biosafety> and <deployment>safe deployment best practices</deployment> before accepting",
                values: { biosafety: eX, deployment: eJ },
              }),
            })),
            (d[3] = l))
          : (l = d[3]),
        d[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsxs)("ul", {
              className: "flex list-disc flex-col gap-2.5 ps-4.5 text-secondary",
              children: [
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(I.A, {
                    id: "rosalind.labActivation.responsibilities.members",
                    defaultMessage:
                      "Limit access to 30 named members, including the lab lead, using institutional email addresses. Eligible members include faculty, staff, postdocs, and supervised graduate students; undergraduates are not eligible by default.",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(I.A, {
                    id: "rosalind.labActivation.responsibilities.roster",
                    defaultMessage:
                      "Maintain an accurate roster and appropriate supervision, promptly remove departed or ineligible members, and revalidate membership annually",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(I.A, {
                    id: "rosalind.labActivation.responsibilities.research",
                    defaultMessage:
                      "Follow approved research, security, geography, and data-handling requirements, never share credentials, and ensure qualified human review of outputs",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(I.A, {
                    id: "rosalind.labActivation.responsibilities.safety",
                    defaultMessage:
                      "Maintain an institutional safety contact, share these responsibilities with members, and maintain controls for misconduct and insider risks",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(I.A, {
                    id: "rosalind.labActivation.responsibilities.reporting",
                    defaultMessage:
                      "Notify OpenAI within 24 hours of suspected misuse, unauthorized access, account compromise, or policy violations, cooperate with follow-up, and report material changes to research scope or oversight",
                  }),
                }),
              ],
            })),
            (d[4] = n))
          : (n = d[4]),
        d[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(eH.Rr, {
              size: "body",
              children: (0, i.jsx)(I.A, {
                id: "rosalind.labActivation.responsibilities.affiliation",
                defaultMessage:
                  "Confirm each member\u2019s institutional affiliation and explain permitted uses, supervision, and how to report concerns, including concerns involving a supervisor. Remove access when affiliation or supervision ends, or access is no longer needed.",
              }),
            })),
            (d[5] = r))
          : (r = d[5]),
        d[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(eH.Rr, {
              size: "body",
              children: (0, i.jsx)(I.A, {
                id: "rosalind.labActivation.responsibilities.humanReview",
                defaultMessage:
                  "Consequential outputs require qualified human review before they inform research decisions or actions",
              }),
            })),
            (d[6] = o))
          : (o = d[6]),
        d[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, i.jsxs)("section", {
              className: "flex flex-col gap-3 rounded-2xl border border-default p-5",
              children: [
                e,
                a,
                (0, i.jsxs)("details", {
                  className: "group rounded-xl border border-default p-4",
                  children: [
                    t,
                    (0, i.jsxs)("div", {
                      className: "flex flex-col gap-3 pt-4",
                      children: [
                        l,
                        n,
                        r,
                        o,
                        (0, i.jsx)(eH.Rr, {
                          size: "body",
                          children: (0, i.jsx)(I.A, {
                            id: "rosalind.labActivation.responsibilities.authority",
                            defaultMessage:
                              "Institutional authorization and any required Responsible Official approval are separate from the principal investigator\u2019s confirmation",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })),
            (d[7] = c))
          : (c = d[7]),
        c
      )
    }
    function eJ(e) {
      return (0, i.jsx)(eN.G, { href: eK, initiator: "external_link", underline: "always", children: e }, "deployment")
    }
    function eX(e) {
      return (0, i.jsx)(eN.G, { href: eV, initiator: "external_link", underline: "always", children: e }, "biosafety")
    }
    function eQ(e) {
      let a,
        t,
        l,
        r,
        o,
        c,
        d,
        u,
        m,
        p,
        f,
        h,
        _,
        x,
        g,
        b,
        A,
        y,
        v,
        j,
        T,
        C,
        S,
        P,
        E,
        w,
        O,
        L,
        R,
        M,
        D,
        k,
        U,
        B,
        W,
        H = (0, s.c)(95),
        {
          checkoutFailed: G,
          checkoutPending: $,
          onAccept: F,
          application: q,
          onBack: z,
          onSaveRetentionRequest: Y,
        } = e,
        V = void 0 !== G && G,
        K = void 0 !== $ && $,
        Z = (0, n.useId)(),
        J = q.activation_acceptance?.consent,
        X = null != J,
        Q = q.activation_version === eY,
        ee = q.activation_fingerprint,
        ea = null != J && (J.version !== eY || J.application_fingerprint !== ee),
        et = (0, n.useRef)(null)
      ;(H[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = () => {
            let e = new AbortController()
            return ((et.current = e), () => e.abort())
          }),
          (t = []),
          (H[0] = a),
          (H[1] = t))
        : ((a = H[0]), (t = H[1])),
        (0, n.useEffect)(a, t))
      let [ei, es] = (0, n.useState)(J?.responsibilities_accepted ?? !1),
        [el, en] = (0, n.useState)(J?.terms_accepted ?? !1),
        [er, eo] = (0, n.useState)(
          null != J ? null != J.enhanced_retention_reason : (q.enhanced_retention_request?.requested ?? !1),
        ),
        [ec, ed] = (0, n.useState)(
          null != J ? (J.enhanced_retention_reason ?? "") : (q.enhanced_retention_request?.reason ?? ""),
        ),
        [eu, em] = (0, n.useState)(!1),
        ep = (0, n.useRef)(null),
        ef = X || null != Y,
        eh = ei && el
      H[2] !== ec ? ((r = Array.from((l = ec.trim()))), (H[2] = ec), (H[3] = l), (H[4] = r)) : ((l = H[3]), (r = H[4]))
      let e_ = r.length,
        ex = er && (0 === e_ || e_ > 4e3)
      H[5] !== X ||
      H[6] !== ef ||
      H[7] !== K ||
      H[8] !== eh ||
      H[9] !== Q ||
      H[10] !== er ||
      H[11] !== ee ||
      H[12] !== ex ||
      H[13] !== F ||
      H[14] !== Y ||
      H[15] !== eu ||
      H[16] !== l ||
      H[17] !== ei ||
      H[18] !== J ||
      H[19] !== ea ||
      H[20] !== el
        ? ((o = async function () {
            if (!ef || !eh || !Q || ea || null == ee || eu || K || null == F) return
            if (ex) return void ep.current?.focus()
            let e = J ?? {
              version: eY,
              application_fingerprint: ee,
              responsibilities_accepted: ei,
              terms_accepted: el,
              enhanced_retention_reason: er ? l : null,
            }
            if ((em(!0), X)) {
              ;(em(!1), F(e))
              return
            }
            null != Y &&
              (await Y({ requested: er, reason: er ? l : null })
                .then(() => {
                  et.current?.signal.aborted || F(e)
                })
                .catch(e4)
                .finally(() => {
                  em(!1)
                }))
          }),
          (H[5] = X),
          (H[6] = ef),
          (H[7] = K),
          (H[8] = eh),
          (H[9] = Q),
          (H[10] = er),
          (H[11] = ee),
          (H[12] = ex),
          (H[13] = F),
          (H[14] = Y),
          (H[15] = eu),
          (H[16] = l),
          (H[17] = ei),
          (H[18] = J),
          (H[19] = ea),
          (H[20] = el),
          (H[21] = o))
        : (o = H[21])
      let eg = o,
        eb = `${Z}-title`,
        eA = `${Z}-title`
      ;(H[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, i.jsx)(I.A, {
            id: "rosalind.labActivation.terms.title",
            defaultMessage: "Terms and confirmations",
          })),
          (H[22] = c))
        : (c = H[22]),
        H[23] !== eA
          ? ((d = (0, i.jsx)(eH.VO, { children: (0, i.jsx)("span", { id: eA, children: c }) })),
            (H[23] = eA),
            (H[24] = d))
          : (d = H[24]),
        H[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, i.jsx)(eH.Rr, {
              size: "body",
              children: (0, i.jsx)(I.A, {
                id: "rosalind.labActivation.terms.previewNotice",
                defaultMessage:
                  "Your confirmations are saved before checkout for a new Rosalind Academic workspace. You\u2019ll review the promotion and provide a payment method at checkout.",
              }),
            })),
            (H[25] = u))
          : (u = H[25]),
        H[26] !== d
          ? ((m = (0, i.jsxs)("div", { className: "flex flex-col gap-2", children: [d, u] })), (H[26] = d), (H[27] = m))
          : (m = H[27]),
        H[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsx)(eH.Rr, {
              size: "body",
              children: (0, i.jsx)(I.A, {
                id: "rosalind.labActivation.terms.workspaceDescription",
                defaultMessage: "You\u2019ll create a new lab workspace with the Rosalind Academic Plan promotion",
              }),
            })),
            (f = (0, i.jsx)(eZ, {})),
            (H[28] = p),
            (H[29] = f))
          : ((p = H[28]), (f = H[29])))
      let ey = X || eu || K,
        ev = `${Z}-retention-title`,
        ej = `${Z}-retention-title`
      ;(H[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = (0, i.jsx)(I.A, { id: "rosalind.labActivation.retention.title", defaultMessage: "Data retention" })),
          (H[30] = h))
        : (h = H[30]),
        H[31] !== ej ? ((_ = (0, i.jsx)(eH.I3, { id: ej, children: h })), (H[31] = ej), (H[32] = _)) : (_ = H[32]),
        H[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, i.jsx)(eH.Rr, {
              size: "body",
              children: (0, i.jsx)(I.A, {
                id: "rosalind.labActivation.retention.description",
                defaultMessage:
                  "Standard Data Retention applies by default. Enhanced retention requires separate approval; Zero Data Retention is unavailable.",
              }),
            })),
            (H[33] = x))
          : (x = H[33]))
      let eT = `${Z}-enhanced-retention`
      ;(H[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (0, i.jsx)(I.A, {
            id: "rosalind.labActivation.retention.request",
            defaultMessage: "Request enhanced data retention (optional)",
          })),
          (H[34] = g))
        : (g = H[34]),
        H[35] !== er || H[36] !== eT
          ? ((b = (0, i.jsx)(eq, { id: eT, checked: er, onCheckedChange: eo, label: g })),
            (H[35] = er),
            (H[36] = eT),
            (H[37] = b))
          : (b = H[37]),
        H[38] !== er || H[39] !== Z || H[40] !== ec
          ? ((A =
              er &&
              (0, i.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  (0, i.jsx)(eH.l1, {
                    htmlFor: `${Z}-retention-reason`,
                    children: (0, i.jsx)(I.A, {
                      id: "rosalind.labActivation.retention.reason",
                      defaultMessage: "Why do you need enhanced data retention? (required)",
                    }),
                  }),
                  (0, i.jsx)(eH.Rr, {
                    id: `${Z}-retention-help`,
                    size: "body",
                    children: (0, i.jsx)(I.A, {
                      id: "rosalind.labActivation.retention.reasonHelp",
                      defaultMessage:
                        "Describe the institutional policy or research requirement (up to 4,000 characters)",
                    }),
                  }),
                  (0, i.jsx)(e$.TM, {
                    id: `${Z}-retention-reason`,
                    ref: ep,
                    "aria-describedby": `${Z}-retention-help ${Z}-retention-status`,
                    value: ec,
                    onChange: (e) => ed(e.target.value),
                    rows: 4,
                    required: !0,
                    variant: "feedback",
                  }),
                  (0, i.jsx)(eH.Rr, {
                    id: `${Z}-retention-status`,
                    size: "body",
                    children: (0, i.jsx)(I.A, {
                      id: "rosalind.labActivation.retention.separateReview",
                      defaultMessage:
                        "Continuing saves your reason with the application for separate review. Standard retention remains in place unless an alternative is approved and activated.",
                    }),
                  }),
                ],
              })),
            (H[38] = er),
            (H[39] = Z),
            (H[40] = ec),
            (H[41] = A))
          : (A = H[41]),
        H[42] !== ev || H[43] !== _ || H[44] !== b || H[45] !== A
          ? ((y = (0, i.jsxs)("section", {
              className: "flex flex-col gap-3",
              "aria-labelledby": ev,
              children: [_, x, b, A],
            })),
            (H[42] = ev),
            (H[43] = _),
            (H[44] = b),
            (H[45] = A),
            (H[46] = y))
          : (y = H[46]))
      let eC = `${Z}-responsibilities`
      ;(H[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = (0, i.jsx)(I.A, {
            id: "rosalind.labActivation.terms.responsibilitiesConfirmationWithLinks",
            defaultMessage:
              "I have reviewed the <responsibilities>lab responsibilities</responsibilities> and <safety>safety guidance</safety> and agree to uphold them",
            values: { responsibilities: e2, safety: e1 },
          })),
          (H[47] = v))
        : (v = H[47]),
        H[48] !== ei || H[49] !== eC
          ? ((j = (0, i.jsx)(eq, { id: eC, checked: ei, onCheckedChange: es, label: v })),
            (H[48] = ei),
            (H[49] = eC),
            (H[50] = j))
          : (j = H[50]))
      let eI = `${Z}-terms`
      ;(H[51] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = (0, i.jsx)(I.A, {
            id: "rosalind.labActivation.terms.authorityConfirmation",
            defaultMessage:
              "I confirm this application is accurate, I am authorized to accept for this lab, and I agree to the <terms>GPT-Rosalind Terms</terms>",
            values: { terms: e0 },
          })),
          (H[51] = T))
        : (T = H[51]),
        H[52] !== eI || H[53] !== el
          ? ((C = (0, i.jsx)(eq, { id: eI, checked: el, onCheckedChange: en, label: T })),
            (H[52] = eI),
            (H[53] = el),
            (H[54] = C))
          : (C = H[54]),
        H[55] !== j || H[56] !== C
          ? ((S = (0, i.jsxs)("div", { className: "flex flex-col gap-3", children: [j, C] })),
            (H[55] = j),
            (H[56] = C),
            (H[57] = S))
          : (S = H[57]),
        H[58] !== ey || H[59] !== y || H[60] !== S
          ? ((P = (0, i.jsxs)("fieldset", { disabled: ey, className: "flex flex-col gap-6", children: [y, S] })),
            (H[58] = ey),
            (H[59] = y),
            (H[60] = S),
            (H[61] = P))
          : (P = H[61]),
        H[62] !== X
          ? ((E =
              X &&
              (0, i.jsx)(eH.Rr, {
                size: "body",
                children: (0, i.jsx)(I.A, {
                  id: "rosalind.labActivation.confirmationsSaved",
                  defaultMessage: "Your confirmations are saved. Continue to checkout to complete workspace setup.",
                }),
              })),
            (H[62] = X),
            (H[63] = E))
          : (E = H[63]),
        H[64] !== Q || H[65] !== ea
          ? ((w =
              (!Q || ea) &&
              (0, i.jsx)("p", {
                role: "alert",
                className: "text-secondary",
                children: (0, i.jsx)(I.A, {
                  id: "rosalind.labActivation.reloadTerms",
                  defaultMessage:
                    "The application or activation terms have changed. Reload this page; if the message remains, contact support before continuing.",
                }),
              })),
            (H[64] = Q),
            (H[65] = ea),
            (H[66] = w))
          : (w = H[66]),
        H[67] !== V || H[68] !== Z
          ? ((O =
              V &&
              (0, i.jsx)("p", {
                id: `${Z}-checkout-failed`,
                className: "text-secondary",
                role: "alert",
                children: (0, i.jsx)(I.A, {
                  id: "rosalind.labActivation.checkout.failed",
                  defaultMessage:
                    "We couldn\u2019t save your confirmations or open checkout. Try again. If the problem continues, reload the application.",
                }),
              })),
            (H[67] = V),
            (H[68] = Z),
            (H[69] = O))
          : (O = H[69]),
        H[70] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (0, i.jsx)(I.A, { id: "rosalind.labActivation.back", defaultMessage: "Back to application" })),
            (H[70] = L))
          : (L = H[70]),
        H[71] !== z
          ? ((R = (0, i.jsx)(N.$, {
              className: "w-full sm:w-auto",
              color: "outline",
              onClick: z,
              size: "beaconAction",
              type: "button",
              children: L,
            })),
            (H[71] = z),
            (H[72] = R))
          : (R = H[72]))
      let eS = !ef || !eh || !Q || ea || null == ee || ex || eu || K || null == F
      H[73] !== eg ? ((M = () => void eg()), (H[73] = eg), (H[74] = M)) : (M = H[74])
      let eN = V ? `${Z}-checkout-failed` : void 0
      return (
        H[75] !== K
          ? ((D = K
              ? (0, i.jsx)(I.A, {
                  id: "rosalind.labActivation.checkout.pending",
                  defaultMessage: "Opening checkout\u2026",
                })
              : (0, i.jsx)(I.A, { id: "rosalind.labActivation.terms.accept", defaultMessage: "Accept and continue" })),
            (H[75] = K),
            (H[76] = D))
          : (D = H[76]),
        H[77] !== eS || H[78] !== M || H[79] !== eN || H[80] !== D
          ? ((k = (0, i.jsx)(N.$, {
              className: "w-full sm:w-auto",
              color: "primary",
              size: "beaconAction",
              type: "button",
              disabled: eS,
              onClick: M,
              "aria-describedby": eN,
              children: D,
            })),
            (H[77] = eS),
            (H[78] = M),
            (H[79] = eN),
            (H[80] = D),
            (H[81] = k))
          : (k = H[81]),
        H[82] !== R || H[83] !== k
          ? ((U = (0, i.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-3",
              children: [R, k],
            })),
            (H[82] = R),
            (H[83] = k),
            (H[84] = U))
          : (U = H[84]),
        H[85] !== O || H[86] !== U
          ? ((B = (0, i.jsxs)("div", {
              className: "flex flex-col gap-3 border-t border-default pt-5",
              children: [O, U],
            })),
            (H[85] = O),
            (H[86] = U),
            (H[87] = B))
          : (B = H[87]),
        H[88] !== m || H[89] !== P || H[90] !== E || H[91] !== w || H[92] !== B || H[93] !== eb
          ? ((W = (0, i.jsxs)("section", {
              className: "flex flex-col gap-6",
              "aria-labelledby": eb,
              children: [m, p, f, P, E, w, B],
            })),
            (H[88] = m),
            (H[89] = P),
            (H[90] = E),
            (H[91] = w),
            (H[92] = B),
            (H[93] = eb),
            (H[94] = W))
          : (W = H[94]),
        W
      )
    }
    function e0(e) {
      return (0, i.jsx)(
        eN.G,
        {
          href: "https://cdn.openai.com/pdf/5e26898a-24de-4ae7-90ba-002fe4389593/openai-gpt-rosalind-terms.pdf",
          initiator: "external_link",
          underline: "always",
          children: e,
        },
        "terms",
      )
    }
    function e1(e) {
      return (0, i.jsx)(eN.G, { href: eV, initiator: "external_link", underline: "always", children: e }, "safety")
    }
    function e2(e) {
      return (0, i.jsx)(
        eN.G,
        { href: eK, initiator: "external_link", underline: "always", children: e },
        "responsibilities",
      )
    }
    function e4() {
      ez.v.warning("Failed to save lab data retention preference")
    }
    function e3(e) {
      let a,
        t,
        l,
        r,
        o,
        c,
        d,
        u,
        m = (0, s.c)(20),
        {
          application: p,
          checkoutFailed: f,
          checkoutPending: h,
          onBack: _,
          onCreateWorkspace: x,
          onSaveRetentionRequest: g,
        } = e,
        b = (0, eG.I)(),
        A = (0, n.useRef)(null)
      ;(m[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, i.jsx)(eB, { currentStep: "activation" })), (m[0] = a))
        : (a = m[0]),
        m[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(eH.VO, {
              children: (0, i.jsx)(I.A, {
                id: "rosalind.labActivation.title",
                defaultMessage: "Review and approve activation",
              }),
            })),
            (m[1] = t))
          : (t = m[1]),
        m[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)(eH.Rr, {
              size: "body",
              children: (0, i.jsx)(I.A, {
                id: "rosalind.labActivation.reviewDescription",
                defaultMessage:
                  "Your lab\u2019s application has been approved. Review the submitted research plans and members, then review the terms and workspace setup.",
              }),
            })),
            (m[2] = l))
          : (l = m[2]),
        m[3] !== b
          ? ((r = () => {
              ;(A.current?.scrollIntoView({ block: "start", behavior: b ? "instant" : "smooth" }),
                A.current?.focus({ preventScroll: !0 }))
            }),
            (m[3] = b),
            (m[4] = r))
          : (r = m[4]),
        m[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(I.A, {
              id: "rosalind.labActivation.reviewTerms",
              defaultMessage: "Review terms and workspace setup",
            })),
            (m[5] = o))
          : (o = m[5]),
        m[6] !== r
          ? ((c = (0, i.jsxs)("div", {
              className: "flex flex-col gap-3",
              children: [
                t,
                l,
                (0, i.jsx)(N.$, {
                  className: "self-start",
                  color: "primary",
                  size: "dialogAction",
                  type: "button",
                  onClick: r,
                  children: o,
                }),
              ],
            })),
            (m[6] = r),
            (m[7] = c))
          : (c = m[7]))
      let y = `${p.id}:${p.activation_acceptance?.accepted_at ?? "unsaved"}`
      return (
        m[8] !== p || m[9] !== f || m[10] !== h || m[11] !== _ || m[12] !== x || m[13] !== g || m[14] !== y
          ? ((d = (0, i.jsx)("div", {
              ref: A,
              className: "outline-none",
              tabIndex: -1,
              children: (0, i.jsx)(
                eQ,
                {
                  checkoutFailed: f,
                  checkoutPending: h,
                  onAccept: x,
                  onBack: _,
                  application: p,
                  onSaveRetentionRequest: g,
                },
                y,
              ),
            })),
            (m[8] = p),
            (m[9] = f),
            (m[10] = h),
            (m[11] = _),
            (m[12] = x),
            (m[13] = g),
            (m[14] = y),
            (m[15] = d))
          : (d = m[15]),
        m[16] !== p || m[17] !== c || m[18] !== d
          ? ((u = (0, i.jsx)(eU, { application: p, detailsOpen: !0, progress: a, statusContent: c, actions: d })),
            (m[16] = p),
            (m[17] = c),
            (m[18] = d),
            (m[19] = u))
          : (u = m[19]),
        u
      )
    }
    var e5 = t("T0Rc"),
      e6 = t("Ietk"),
      e9 = t("iN9M"),
      e8 = t("hZax")
    function e7(e) {
      let a,
        t,
        r,
        c,
        d,
        u,
        m,
        p,
        f,
        _,
        x,
        g,
        b,
        A,
        y,
        v,
        j,
        T,
        S,
        O,
        R,
        M,
        D,
        k = (0, s.c)(53),
        { application: U, onOpenWorkspace: B } = e,
        H = (0, l.gh)(W.u),
        G = (0, e8.AS)(),
        $ = (0, h.A)(),
        [F, q] = (0, n.useState)(!1),
        [z, Y] = (0, n.useState)(!1),
        { userId: V } = (0, o.As)()
      ;(k[0] !== U.created_workspace_id || k[1] !== U.id || k[2] !== V
        ? ((a = ["rosalind", "lab-workspace-invite", V, U.id, U.created_workspace_id]),
          (k[0] = U.created_workspace_id),
          (k[1] = U.id),
          (k[2] = V),
          (k[3] = a))
        : (a = k[3]),
        k[4] !== U.created_workspace_id || k[5] !== H
          ? ((t = async (e) => {
              let { signal: a } = e
              await (0, e6.Q6)("accounts-check")
              let { accounts: t } = await (0, e6.Tq)(H, a, !0),
                i = t?.find((e) => e.id === U.created_workspace_id)
              if (null == i || ("account-owner" !== i.account_user_role && "account-admin" !== i.account_user_role))
                throw Error("Workspace invitation membership unavailable")
              return i
            }),
            (k[4] = U.created_workspace_id),
            (k[5] = H),
            (k[6] = t))
          : (t = k[6]),
        k[7] !== a || k[8] !== t
          ? ((r = {
              queryKey: a,
              staleTime: 1 / 0,
              gcTime: 0,
              refetchOnMount: "always",
              refetchOnWindowFocus: !1,
              retry: !1,
              queryFn: t,
            }),
            (k[7] = a),
            (k[8] = t),
            (k[9] = r))
          : (r = k[9]))
      let { data: K, isError: Z, isFetching: J, refetch: X } = (0, e5.I)(r, H.queryClient)
      ;(k[10] !== $
        ? ((c = $.formatMessage({
            id: "rosalind.labActivation.workspaceReady.label",
            defaultMessage: "Workspace setup complete",
          })),
          (k[10] = $),
          (k[11] = c))
        : (c = k[11]),
        k[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)(eB, { currentStep: "complete" })), (k[12] = d))
          : (d = k[12]),
        k[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, i.jsx)(L.E, {
              variant: "success",
              children: (0, i.jsx)(I.A, {
                id: "rosalind.labActivation.workspaceReady.complete",
                defaultMessage: "Setup complete",
              }),
            })),
            (k[13] = u))
          : (u = k[13]),
        k[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, i.jsx)(eH.VO, {
              children: (0, i.jsx)(I.A, {
                id: "rosalind.labActivation.workspaceReady.heading",
                defaultMessage: "Your workspace is ready",
              }),
            })),
            (k[14] = m))
          : (m = k[14]),
        k[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsx)("p", {
              className: "leading-relaxed text-secondary",
              children: (0, i.jsx)(I.A, {
                id: "rosalind.labApplication.workspaceCreated",
                defaultMessage: "Your academic workspace has been created",
              }),
            })),
            (k[15] = p))
          : (p = k[15]),
        k[16] !== U.answers.lab_name
          ? ((f = (0, i.jsxs)("div", {
              className: "flex flex-col items-start gap-2",
              role: "status",
              children: [
                u,
                m,
                p,
                (0, i.jsx)("p", {
                  className: "font-medium",
                  children: (0, i.jsx)(I.A, {
                    id: "rosalind.labActivation.workspaceReady.lab",
                    defaultMessage: "Lab: {lab}",
                    values: { lab: U.answers.lab_name },
                  }),
                }),
              ],
            })),
            (k[16] = U.answers.lab_name),
            (k[17] = f))
          : (f = k[17]),
        k[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, i.jsx)(I.A, { id: "rosalind.labApplication.openWorkspace", defaultMessage: "Open workspace" })),
            (x = (0, i.jsx)(P.I, { className: "shrink-0", asset: C, focusable: "false" })),
            (k[18] = _),
            (k[19] = x))
          : ((_ = k[18]), (x = k[19])),
        k[20] !== B
          ? ((g = (0, i.jsxs)(N.$, {
              color: "primary",
              onClick: B,
              size: "beaconAction",
              type: "button",
              children: [_, x],
            })),
            (k[20] = B),
            (k[21] = g))
          : (g = k[21]))
      let Q = J || F,
        ee = null == K || Z || J || F
      return (
        k[22] !== K || k[23] !== H || k[24] !== G
          ? ((b = (e) => {
              null != K &&
                (q(!0),
                Y(!1),
                (0, e9.P)({
                  scope: H,
                  account: K,
                  statsigClient: G,
                  event: e,
                  surface: "CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_ADMIN_INVITE_MODAL",
                })
                  .catch(() => Y(!0))
                  .finally(() => q(!1)))
            }),
            (k[22] = K),
            (k[23] = H),
            (k[24] = G),
            (k[25] = b))
          : (b = k[25]),
        k[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, i.jsx)(I.A, {
              id: "rosalind.labActivation.workspaceReady.invite",
              defaultMessage: "Invite lab members",
            })),
            (k[26] = A))
          : (A = k[26]),
        k[27] !== Q || k[28] !== ee || k[29] !== b
          ? ((y = (0, i.jsx)(N.$, {
              "aria-busy": Q,
              color: "outline",
              disabled: ee,
              onClick: b,
              size: "beaconAction",
              type: "button",
              children: A,
            })),
            (k[27] = Q),
            (k[28] = ee),
            (k[29] = b),
            (k[30] = y))
          : (y = k[30]),
        k[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, i.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, i.jsx)(I.A, {
                id: "rosalind.labActivation.workspaceReady.inviteHint",
                defaultMessage: "Use institutional emails. Manage invitations in Workspace settings",
              }),
            })),
            (k[31] = v))
          : (v = k[31]),
        k[32] !== z || k[33] !== Z || k[34] !== X
          ? ((j =
              (Z || z) &&
              (0, i.jsxs)("div", {
                className: "flex flex-col items-start gap-3",
                role: "alert",
                children: [
                  (0, i.jsx)("p", {
                    children: (0, i.jsx)(I.A, {
                      id: "rosalind.labActivation.workspaceReady.inviteFailed",
                      defaultMessage:
                        "We couldn\u2019t open invitations for this workspace. Please try again or use Workspace settings \u2192 Members",
                    }),
                  }),
                  Z &&
                    (0, i.jsx)(N.$, {
                      color: "outline",
                      onClick: () => void X(),
                      size: "beaconAction",
                      type: "button",
                      children: (0, i.jsx)(I.A, {
                        id: "rosalind.labActivation.workspaceReady.retry",
                        defaultMessage: "Try again",
                      }),
                    }),
                ],
              })),
            (k[32] = z),
            (k[33] = Z),
            (k[34] = X),
            (k[35] = j))
          : (j = k[35]),
        k[36] !== g || k[37] !== y || k[38] !== j
          ? ((T = (0, i.jsxs)("div", { className: "flex flex-col gap-3", children: [g, y, v, j] })),
            (k[36] = g),
            (k[37] = y),
            (k[38] = j),
            (k[39] = T))
          : (T = k[39]),
        k[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, i.jsxs)("summary", {
              className:
                "flex cursor-interaction list-none items-center justify-between gap-4 font-medium select-none marker:hidden",
              children: [
                (0, i.jsx)(I.A, { id: "rosalind.applicationStatus.details", defaultMessage: "Application details" }),
                (0, i.jsx)(P.I, { className: "shrink-0 group-open:hidden", asset: w }),
                (0, i.jsx)(P.I, { className: "hidden shrink-0 group-open:block", asset: E }),
              ],
            })),
            (k[40] = S))
          : (S = k[40]),
        k[41] !== U.id
          ? ((O = (0, i.jsx)("p", { className: "font-mono break-all", children: U.id })), (k[41] = U.id), (k[42] = O))
          : (O = k[42]),
        k[43] !== U ? ((R = (0, i.jsx)(ed, { application: U })), (k[43] = U), (k[44] = R)) : (R = k[44]),
        k[45] !== O || k[46] !== R
          ? ((M = (0, i.jsxs)("details", {
              className: "group rounded-xl border border-default p-4",
              children: [S, (0, i.jsxs)("div", { className: "flex flex-col gap-4 pt-4", children: [O, R] })],
            })),
            (k[45] = O),
            (k[46] = R),
            (k[47] = M))
          : (M = k[47]),
        k[48] !== T || k[49] !== M || k[50] !== c || k[51] !== f
          ? ((D = (0, i.jsxs)("section", {
              className:
                "flex flex-col gap-6 rounded-2xl border border-default bg-surface p-4.5 text-sm text-default select-text sm:p-6",
              "aria-label": c,
              children: [d, f, T, M],
            })),
            (k[48] = T),
            (k[49] = M),
            (k[50] = c),
            (k[51] = f),
            (k[52] = D))
          : (D = k[52]),
        D
      )
    }
    function ae(e) {
      let a,
        t,
        l = (0, s.c)(21),
        {
          activationOpen: r,
          application: o,
          onActivationOpenChange: c,
          onCancel: d,
          onOpenWorkspace: u,
          onCreateWorkspace: m,
          onCancelCheckout: p,
          checkoutFailed: f,
          checkoutPending: h,
          onSaveRetentionRequest: _,
        } = e,
        x = o.created_workspace_id,
        g = !0 === o.can_start_activation && "approved" === o.state && null == x,
        [b, A] = (0, n.useState)(g),
        [y, v] = (0, n.useState)(!1),
        j = (0, n.useRef)(null)
      l[0] !== c
        ? ((a = function (e) {
            ;(null != c ? c(e) : A(e),
              j.current?.closest("main")?.parentElement?.scrollTo({ top: 0, behavior: "instant" }),
              j.current?.focus({ preventScroll: !0 }))
          }),
          (l[0] = c),
          (l[1] = a))
        : (a = l[1])
      let T = a
      if (y && null != x) {
        let e
        return (
          l[2] !== x
            ? ((e = (0, i.jsx)(S.X$, {
                accountId: x,
                destination: "/?surface=work&model_specialty=bio",
                unavailablePath: "/",
              })),
              (l[2] = x),
              (l[3] = e))
            : (e = l[3]),
          e
        )
      }
      if ("approved" === o.state && null != x) {
        let e, a
        return (
          l[4] !== u
            ? ((e = () => {
                ;(v(!0), u?.())
              }),
              (l[4] = u),
              (l[5] = e))
            : (e = l[5]),
          l[6] !== o || l[7] !== e
            ? ((a = (0, i.jsx)(e7, { application: o, onOpenWorkspace: e })), (l[6] = o), (l[7] = e), (l[8] = a))
            : (a = l[8]),
          a
        )
      }
      return (
        l[9] !== r ||
        l[10] !== o ||
        l[11] !== g ||
        l[12] !== f ||
        l[13] !== h ||
        l[14] !== d ||
        l[15] !== p ||
        l[16] !== m ||
        l[17] !== _ ||
        l[18] !== b ||
        l[19] !== T
          ? ((t = (0, i.jsx)("div", {
              ref: j,
              className: "outline-none",
              tabIndex: -1,
              children:
                g && (r ?? b)
                  ? (0, i.jsx)(e3, {
                      application: o,
                      checkoutFailed: f,
                      checkoutPending: h,
                      onBack: () => {
                        ;(p?.(), T(!1))
                      },
                      onCreateWorkspace: m,
                      onSaveRetentionRequest: _,
                    })
                  : (0, i.jsx)(eU, {
                      application: o,
                      onCancel: d,
                      statusContent:
                        "approved" === o.state || "denied" === o.state
                          ? (0, i.jsxs)("div", {
                              className: "flex flex-col gap-2",
                              role: "status",
                              children: [
                                (0, i.jsx)(eH.VO, {
                                  children: (0, i.jsx)(I.A, {
                                    id: "rosalind.labApplication.decision.heading",
                                    defaultMessage:
                                      "{state, select, approved {Your application has been approved} denied {Application not approved} other {}}",
                                    values: { state: o.state },
                                  }),
                                }),
                                (0, i.jsx)("p", {
                                  className: "leading-relaxed text-secondary",
                                  children: (0, i.jsx)(I.A, {
                                    id: "rosalind.labApplication.decision.description",
                                    defaultMessage:
                                      "{state, select, approved {Your lab\u2019s application has been approved. Expanded access is not available until activation is complete.} denied {Your lab\u2019s application was not approved. Expanded access has not been granted.} other {}}",
                                    values: { state: o.state },
                                  }),
                                }),
                              ],
                            })
                          : void 0,
                      actions:
                        g &&
                        (0, i.jsx)("div", {
                          className: "mt-1 flex justify-end gap-3 border-t border-default pt-5",
                          children: (0, i.jsxs)(N.$, {
                            className: "w-full sm:w-auto",
                            color: "primary",
                            onClick: () => T(!0),
                            size: "beaconAction",
                            type: "button",
                            children: [
                              (0, i.jsx)(I.A, {
                                id: "rosalind.labActivation.continue",
                                defaultMessage: "Continue to activation",
                              }),
                              (0, i.jsx)(P.I, { className: "shrink-0", asset: C, focusable: "false" }),
                            ],
                          }),
                        }),
                    }),
            })),
            (l[9] = r),
            (l[10] = o),
            (l[11] = g),
            (l[12] = f),
            (l[13] = h),
            (l[14] = d),
            (l[15] = p),
            (l[16] = m),
            (l[17] = _),
            (l[18] = b),
            (l[19] = T),
            (l[20] = t))
          : (t = l[20]),
        t
      )
    }
    function aa(e) {
      let a,
        t,
        i = (0, s.c)(8),
        { status: r, canStartApplication: o, retryCount: c, isDebugging: d, isVisible: u } = e,
        m = (0, l.Ul)(b.YV),
        p = (0, n.useRef)(null)
      return (
        i[0] !== o || i[1] !== d || i[2] !== u || i[3] !== m || i[4] !== c || i[5] !== r
          ? ((a = () => {
              let e
              !d &&
                u &&
                "loading" !== r &&
                m !== b.Cg &&
                p.current !== c &&
                ((p.current = c),
                (e =
                  "continue" === r
                    ? "CHATGPT_WEB_ROSALIND_APPLICATION_ENTRY_STATE_RESUME_AVAILABLE"
                    : "error" === r
                      ? "CHATGPT_WEB_ROSALIND_APPLICATION_ENTRY_STATE_LOAD_FAILED"
                      : o
                        ? "CHATGPT_WEB_ROSALIND_APPLICATION_ENTRY_STATE_START_AVAILABLE"
                        : "CHATGPT_WEB_ROSALIND_APPLICATION_ENTRY_STATE_ELIGIBILITY_BLOCKED"),
                m.logProductEvent(f.S7, { flow: "CHATGPT_WEB_ROSALIND_APPLICATION_FLOW_LAB", state: e }))
            }),
            (t = [o, d, u, m, c, r]),
            (i[0] = o),
            (i[1] = d),
            (i[2] = u),
            (i[3] = m),
            (i[4] = c),
            (i[5] = r),
            (i[6] = a),
            (i[7] = t))
          : ((a = i[6]), (t = i[7])),
        (0, n.useEffect)(a, t),
        null
      )
    }
    let at = {
        continue: "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_ADVANCE",
        back: "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_BACK",
        edit: "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_EDIT",
        stepSelected: "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SELECT_STEP",
      },
      ai = {
        entry: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_ENTRY",
        lab: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_LAB",
        research: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_RESEARCH",
        members: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_MEMBERS",
        locations: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_LOCATIONS_AND_SAFEGUARDS",
        review: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_REVIEW",
      }
    function as(e) {
      let a,
        t,
        i = (0, s.c)(4),
        { isDebugging: r } = e,
        o = (0, l.Ul)(b.YV),
        c = (0, n.useRef)(!1)
      return (
        i[0] !== r || i[1] !== o
          ? ((a = () => {
              r ||
                o === b.Cg ||
                c.current ||
                ((c.current = !0),
                o.logProductEvent(f.Si, {
                  flow: "CHATGPT_WEB_ROSALIND_APPLICATION_FLOW_LAB",
                  view: "CHATGPT_WEB_ROSALIND_APPLICATION_STATUS_VIEW_APPLICATION",
                }))
            }),
            (t = [r, o]),
            (i[0] = r),
            (i[1] = o),
            (i[2] = a),
            (i[3] = t))
          : ((a = i[2]), (t = i[3])),
        (0, n.useEffect)(a, t),
        null
      )
    }
    function al(e) {
      let a,
        t,
        i = (0, s.c)(5),
        { step: r, isDebugging: o } = e,
        c = void 0 !== o && o,
        d = (0, l.Ul)(b.YV),
        u = (0, n.useRef)(null)
      return (
        i[0] !== c || i[1] !== d || i[2] !== r
          ? ((a = () => {
              c ||
                d === b.Cg ||
                u.current === r ||
                ((u.current = r),
                d.logProductEvent(f.Oe, { flow: "CHATGPT_WEB_ROSALIND_APPLICATION_FLOW_LAB", step: ai[r] }))
            }),
            (t = [c, d, r]),
            (i[0] = c),
            (i[1] = d),
            (i[2] = r),
            (i[3] = a),
            (i[4] = t))
          : ((a = i[3]), (t = i[4])),
        (0, n.useEffect)(a, t),
        null
      )
    }
    var an = t("v7qY"),
      ar = t("nPFn"),
      ao = t("D7Ms"),
      ac = t("SZCv"),
      ad = t.n(ac),
      au = t("KUdL"),
      am = t.n(au),
      ap = t("DBCl"),
      af = t("Isak"),
      ah = t("Kwur"),
      a_ = t("dMvT")
    let ax = t("ASxG").Rpp(),
      ag = (0, l.un)(G, ({ get: e }) => {
        let a = e($)?.persona_status
        return "bypassed" === a || "completed" === a || "needs_review" === a || "approved" === a || "declined" === a
      }),
      ab = (0, l.un)(G, ({ get: e }) => {
        let a = e(q).trim().length
        return a > 0 && a <= 200 && null != aT(e(z)) && "" !== e(Y).trim() && e(ag)
      }),
      aA = (0, l.un)(G, ({ get: e }) => {
        let a = e(K)
        return (
          ar.Xt.safeParse(e(V).trim()).success &&
          ar.W8.shape.researchScopes.safeParse(a).success &&
          (!a.includes("none") || 1 === a.length) &&
          ar.W8.shape.products.safeParse(e(Z)).success
        )
      }),
      ay = (0, l.i1)(G, (e, { get: a }) => {
        let t = a(Q, e),
          i = a(ee).trim(),
          s = a(ea).trim()
        return t.length > 0 && t.every((a) => aj(a, e)) && "" !== i && ax.safeParse(s).success
      }),
      av = (0, l.un)(G, ({ get: e }) => {
        let a = e(ei),
          t = e(es),
          i = e(el),
          s = e(en)
        return (
          ar.W8.shape.primaryCountry.safeParse(a).success &&
          ar.W8.shape.additionalLocations.safeParse(t).success &&
          ("yes" !== t || (ar.W8.shape.additionalCountries.safeParse(i).success && !i.includes(a))) &&
          ar.W8.shape.selectedSafeguards.safeParse(s).success &&
          (!s.includes("other") || ar.W8.shape.otherSafeguardDetails.safeParse(e(er).trim()).success)
        )
      })
    function aj(e, a) {
      let t = a?.trim().split("@")[1]?.toLowerCase(),
        i = e.split("@").at(-1)?.toLowerCase()
      return null != t && ax.safeParse(e).success && i === t
    }
    function aT(e) {
      let a = e.trim()
      if ("" === a || a.includes("\\")) return null
      let t = /^https?:\/\//i.test(a),
        i = /^[a-z][a-z\d+.-]*:/i.test(a) && !/^[a-z\d.-]+\.[a-z\d-]+:\d+(?:[/?#]|$)/i.test(a)
      if (!t && i) return null
      let s = a
      t || (s = a.startsWith("//") ? `https:${a}` : `https://${a}`)
      try {
        let e = new URL(s),
          a = e.hostname.split(".")
        if (
          !["https:", "http:"].includes(e.protocol) ||
          "" !== e.username ||
          "" !== e.password ||
          a.length < 2 ||
          a.some((e) => !/^[a-z\d](?:[a-z\d-]*[a-z\d])?$/i.test(e))
        )
          return null
        return e
      } catch {
        return null
      }
    }
    class aC extends Error {
      step
      constructor(e) {
        ;(super("Complete the changed application step before saving"), (this.step = e))
      }
    }
    let aI = (0, l.RD)(G, ({ get: e }) => {
        let a = e(_.chatGptAuthenticatedAccountId$),
          t = e(_.o8)
        return {
          queryKey: ["rosalind-lab-application", a, t],
          enabled: null != a && null != t,
          queryFn: async ({ signal: e }) => {
            let i
            if (null == a || null == t) throw Error("Authentication is required to load applications")
            do {
              let s = await ah.Request.safeGet("/rosalind/applications", {
                  parameters: { query: { cursor: i } },
                  additionalHeaders: { [ap.zBc]: a },
                  expectedIdentity: { accountId: a, userId: t },
                  expectedErrorStatuses: [400, 401, 403, 404],
                  signal: e,
                  retry: !1,
                }),
                l = s.items.find(({ state: e }) => "canceled" !== e)
              if (null != l) return l
              i = s.cursor ?? void 0
            } while (null != i)
            return null
          },
          staleTime: 0,
          retry: !1,
          refetchOnWindowFocus: !0,
        }
      }),
      aS = (0, l.RD)(G, ({ get: e, scope: a }) => {
        let t = e(_.chatGptAuthenticatedAccountId$),
          i = e(_.o8),
          s = e($)
        return {
          enabled: null != t && null != i && s?.state === "draft",
          queryKey: ["rosalind-lab-persona-status", t, i, s?.id],
          queryFn: null != t ? ({ signal: e }) => aM(a, t, e) : ao.hT,
          staleTime: 1 / 0,
          gcTime: 0,
          retry: !1,
          retryOnMount: !1,
          refetchOnMount: !1,
          refetchOnWindowFocus: !1,
          refetchOnReconnect: !1,
        }
      }),
      aN = (0, l.aP)(G, ({ scope: e }) => ({
        mutationFn: ({ accountId: e, idempotencyKey: a }) =>
          ah.Request.safePost("/rosalind/applications/drafts", {
            requestBody: { application_type: "lab" },
            additionalHeaders: { "Idempotency-Key": a, ...(null == e ? {} : { [ap.zBc]: e }) },
          }),
        retry: !1,
        onSuccess: (a, { accountId: t }) => aU(e, t, a),
      })),
      aP = (0, l.aP)(G, ({ scope: e }) => ({
        mutationFn: ({ accountId: e, application: a }) =>
          ah.Request.safeDelete("/rosalind/applications/drafts/{draft_id}", {
            parameters: { path: { draft_id: a.id } },
            additionalHeaders: null == e ? void 0 : { [ap.zBc]: e },
            expectedIdentity: null == e ? void 0 : { accountId: e, userId: a.user_id },
            expectedErrorStatuses: [403, 404, 409, 503],
            retry: !1,
          }),
        retry: !1,
        onSuccess: (a, { accountId: t, application: i }) => aB(e, t, i),
      })),
      aE = (0, l.aP)(G, ({ scope: e }) => ({
        mutationFn: ({ accountId: e, application: a }) =>
          ah.Request.safePost("/rosalind/applications/{application_id}/cancel", {
            parameters: { path: { application_id: a.id } },
            additionalHeaders: null == e ? void 0 : { [ap.zBc]: e },
            expectedIdentity: null == e ? void 0 : { accountId: e, userId: a.user_id },
            expectedErrorStatuses: [401, 403, 404, 409, 503],
            retry: !1,
          }),
        retry: !1,
        onSuccess: (a, { accountId: t, application: i }) => aB(e, t, i),
      })),
      aw = (0, l.aP)(G, ({ scope: e }) => ({
        mutationFn: ({ accountId: a }) => ak(e, a, !1),
        retry: !1,
        onSuccess: (a, { accountId: t }) => aU(e, t, a),
      })),
      aO = (0, l.aP)(G, ({ scope: e }) => ({
        mutationFn: async ({ accountId: a, application: t, appearance: i, consent: s, signal: l }) => {
          if (null == a) throw Error("Rosalind Academic checkout account unavailable")
          let n = await ah.Request.safePost("/rosalind/applications/{application_id}/activation", {
            parameters: { path: { application_id: t.id } },
            requestBody: s,
            additionalHeaders: { [ap.zBc]: a },
            expectedIdentity: { accountId: a, userId: t.user_id },
            expectedErrorStatuses: [401, 403, 404, 409, 422, 503],
            signal: l,
            retry: !1,
          })
          if ((await aU(e, a, n), l.throwIfAborted(), !0 !== n.can_start_checkout))
            throw Error("Rosalind Academic checkout unavailable")
          let r = {
            checkout_ui_mode: "custom",
            entry_point: "rosalind_application_status",
            plan_name: "chatgptrosalindacademicplan",
            rosalind_application_id: t.id,
          }
          return (0, a_.M)({
            accountId: a,
            requestBody: r,
            appearance: i,
            cancelUrl: window.location.href,
            purchaseAttemptId: (0, af.A)(JSON.stringify(["rosalind-academic-checkout:v1", t.user_id, t.id]), af.A.URL),
            signal: l,
            expectedIdentity: { accountId: a, userId: t.user_id },
          }).then((e) => {
            if ("tag" in e && "custom_checkout_session" === e.tag) return e
            if (null == e.url) throw Error("Rosalind Academic checkout URL unavailable")
            return e
          })
        },
        retry: !1,
      })),
      aL = (0, l.aP)(G, ({ scope: e }) => ({
        mutationFn: ({ accountId: e, application: a, request: t }) =>
          ah.Request.safePut("/rosalind/applications/{application_id}/retention-request", {
            parameters: { path: { application_id: a.id } },
            requestBody: t,
            additionalHeaders: { [ap.zBc]: e },
            expectedIdentity: { accountId: e, userId: a.user_id },
            expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 503],
            retry: !1,
          }),
        retry: !1,
        onSuccess: (a, { accountId: t }) => aU(e, t, a),
      })),
      aR = (0, l.aP)(G, ({ scope: e }) => ({
        mutationFn: async ({ accountId: a, application: t, attestations: i, skipIntegrityAndApprove: s }) => {
          if (null == a) throw Error("Authentication is required to submit applications")
          if (!i.research_safeguards || !i.accuracy || !i.authority) throw new aC("review")
          let l = e.get(m.JW, "2599758586"),
            n = {
              additionalHeaders: { [ap.zBc]: a },
              expectedIdentity: { accountId: a, userId: t.user_id },
              expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 503],
            },
            r = t
          l &&
            (r = await ah.Request.safeGet("/rosalind/applications/{application_id}", {
              ...n,
              parameters: { path: { application_id: t.id } },
              retry: !1,
            }))
          let o = i
          if ("submitted" === r.state && "draft" === t.state && Object.keys(aW(e, t)).length > 0)
            throw Error("The submitted application has different answers")
          if ("submitting" === r.state) {
            let i = "draft" === t.state && t.id === r.id && Object.keys(aW(e, t)).length > 0
            if ((await aU(e, a, r), i)) throw Error("Review the saved application before retrying submission")
          } else if ("draft" !== r.state && ("submitted" !== r.state || "submitting" === t.state)) {
            if ("canceled" === r.state) throw (await aU(e, a, r), Error("The application was canceled"))
            return r
          }
          if ("submitting" === r.state || "submitted" === r.state) {
            let e = r.answers.attestations
            if (null == e) throw Error("The saved submission has no attestations")
            o = {
              research_safeguards: e.research_safeguards.accepted,
              accuracy: e.accuracy.accepted,
              authority: e.authority.accepted,
            }
          }
          let c = r
          if ("draft" === r.state) {
            if (e.get($)?.id !== r.id) throw Error("The application changed before submission")
            c = await ak(e, a, !0)
          }
          ;("draft" === c.state || "submitting" === c.state) && (await aU(e, a, c))
          try {
            return await ah.Request.safePost("/rosalind/applications/drafts/{draft_id}/submit", {
              ...n,
              parameters: { path: { draft_id: c.id } },
              requestBody: {
                form_schema_version: c.form_schema_version,
                attestations: o,
                ...(s ? { skip_integrity_and_approve: !0 } : {}),
              },
              retry: !1,
            })
          } catch (i) {
            let t = await ah.Request.safeGet("/rosalind/applications/{application_id}", {
              ...n,
              parameters: { path: { application_id: c.id } },
              retry: !1,
            }).catch(() => null)
            if (
              (t?.state === "submitting" && (await aU(e, a, t)),
              null != t && "draft" !== t.state && "submitting" !== t.state && "canceled" !== t.state)
            )
              return t
            throw i
          }
        },
        retry: !1,
        onSuccess: (a, { accountId: t }) => aU(e, t, a),
      }))
    async function aM(e, a, t) {
      t.throwIfAborted()
      let i = e.get($)
      if (i?.state !== "draft") throw Error("No lab application draft to verify")
      let s = () => aD(e, i, a, t)
      s()
      let l = await ah.Request.safePost("/rosalind/applications/drafts/{draft_id}/persona/status", {
          parameters: { path: { draft_id: i.id } },
          additionalHeaders: { [ap.zBc]: a },
          expectedIdentity: { accountId: a, userId: i.user_id },
          expectedErrorStatuses: [401, 403, 404, 409, 503],
          assertRequestCurrent: s,
          signal: t,
          retry: !1,
        }),
        n = s()
      if (l.id !== i.id) throw Error("The Persona verification status is unavailable")
      return null != l.persona_status && (e.set($, { ...n, persona_status: l.persona_status }), !0)
    }
    function aD(e, a, t, i) {
      i.throwIfAborted()
      let s = e.get($)
      if (
        e.get(_.chatGptAuthenticatedAccountId$) !== t ||
        e.get(_.o8) !== a.user_id ||
        s?.id !== a.id ||
        "draft" !== s.state
      )
        throw new DOMException("The application changed while verifying with Persona", "AbortError")
      return s
    }
    async function ak(e, a, t) {
      let i = e.get($)
      if (i?.state !== "draft") throw Error("No lab application draft to update")
      let s = aW(e, i),
        l = [
          { step: "lab", valid: e.get(ab), fields: ["lab_name", "lab_website", "lab_lead_responsibilities"] },
          { step: "research", valid: e.get(aA), fields: ["research_purpose", "research_scopes"] },
          {
            step: "members",
            valid: e.get(ay, i.answers.lab_lead_email ?? null),
            fields: ["member_emails", "biosafety_contact"],
          },
          {
            step: "locations",
            valid: e.get(av),
            fields: [
              "primary_country",
              "additional_locations",
              "additional_countries",
              "selected_safeguards",
              "other_safeguard_details",
            ],
          },
        ].find(({ valid: e, fields: a }) => !e && (t || a.some((e) => Object.hasOwn(s, e))))
      if (null != l) throw new aC(l.step)
      return 0 === Object.keys(s).length
        ? i
        : ah.Request.safePatch("/rosalind/applications/drafts/{draft_id}", {
            parameters: { path: { draft_id: i.id } },
            requestBody: { answers: s },
            additionalHeaders: null == a ? void 0 : { [ap.zBc]: a },
            expectedIdentity: null == a ? void 0 : { accountId: a, userId: i.user_id },
            expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 503],
            retry: !1,
          })
    }
    async function aU(e, a, t) {
      e.get(_.chatGptAuthenticatedAccountId$) !== a ||
        e.get(_.o8) !== t.user_id ||
        (await e.query.cancel(aI),
        e.get(_.chatGptAuthenticatedAccountId$) === a &&
          e.get(_.o8) === t.user_id &&
          (e.query.setData(aI, t), eo(e, "draft" === t.state || "submitting" === t.state ? t : null)))
    }
    async function aB(e, a, t) {
      e.get(_.chatGptAuthenticatedAccountId$) !== a ||
        e.get(_.o8) !== t.user_id ||
        (await e.query.cancel(aI),
        e.get(_.chatGptAuthenticatedAccountId$) === a &&
          e.get(_.o8) === t.user_id &&
          (eo(e, null), e.query.setData(aI, null), e.query.invalidate(aI)))
    }
    function aW(e, a) {
      let t = {},
        i = e.get(z).trim(),
        s = e.get(Z),
        l = e.get(K),
        n = ec([...e.get(J), e.get(X)].join("\n")).filter((e) => e !== a.answers.lab_lead_email?.toLowerCase()),
        r = e.get(ee).trim(),
        o = e.get(ea).trim(),
        c = e.get(et).trim(),
        d = e.get(ei),
        u = e.get(es),
        m = e.get(el),
        p = e.get(en)
      return (
        f("lab_name", e.get(q).trim() || null),
        f("lab_website", aT(i)?.href ?? (i || null)),
        f("lab_lead_responsibilities", e.get(Y).trim() || null),
        f("products", s.length > 0 ? s : null),
        f("research_purpose", e.get(V).trim() || null),
        f("research_scopes", l.length > 0 ? l : null),
        f("member_emails", n.length > 0 ? n : null),
        f("biosafety_contact", r || o || c ? { name: r, email: o, role: c || null } : null),
        f("primary_country", "" === d ? null : ar.W8.shape.primaryCountry.parse(d)),
        f("additional_locations", u),
        f(
          "additional_countries",
          "yes" === u && m.length > 0 ? m.map((e) => ar.W8.shape.primaryCountry.parse(e)) : null,
        ),
        f("selected_safeguards", p),
        f("other_safeguard_details", (p.includes("other") && e.get(er).trim()) || null),
        t
      )
      function f(e, i) {
        let s = a.answers[e] ?? ("selected_safeguards" === e ? [] : null)
        ;(Array.isArray(i) && Array.isArray(s) ? ad()(am()(i), am()(s)) : ad()(i, s)) || (t[e] = i)
      }
    }
    let aH = {
      lab: (0, i.jsx)(I.A, { id: "rosalind.labApplication.step.lab", defaultMessage: "Lab" }),
      research: (0, i.jsx)(I.A, { id: "rosalind.labApplication.step.research", defaultMessage: "Research" }),
      members: (0, i.jsx)(I.A, { id: "rosalind.labApplication.step.members", defaultMessage: "Members" }),
      locations: (0, i.jsx)(I.A, {
        id: "rosalind.labApplication.step.locations",
        defaultMessage: "Locations and safeguards",
      }),
      review: (0, i.jsx)(I.A, { id: "rosalind.labApplication.step.review", defaultMessage: "Review" }),
    }
    var aG = t("Z0qE"),
      a$ = t("BcYu"),
      aF = t("qvry"),
      aq = t("Q7yV")
    function az(e) {
      let a,
        t,
        n,
        r,
        o,
        c,
        d,
        u,
        m,
        p = (0, s.c)(25),
        { onBack: f, onContinue: h, continueInvalid: _, continueLabel: x, pending: g, showSaveError: b } = e,
        A = void 0 === b || b,
        { isPending: y, isError: v } = (0, l.Ul)(aw),
        j = y || (void 0 !== g && g)
      ;(p[0] !== v || p[1] !== A
        ? ((a =
            A &&
            v &&
            (0, i.jsx)("p", {
              className: "text-sm text-danger select-text",
              role: "alert",
              children: (0, i.jsx)(I.A, {
                id: "rosalind.application.saveDraftFailed",
                defaultMessage: "We couldn\u2019t save your application. Please try again.",
              }),
            })),
          (p[0] = v),
          (p[1] = A),
          (p[2] = a))
        : (a = p[2]),
        p[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(P.I, { className: "shrink-0", asset: aq.x, focusable: "false" })),
            (n = (0, i.jsx)(I.A, { id: "rosalind.application.back", defaultMessage: "Back" })),
            (p[3] = t),
            (p[4] = n))
          : ((t = p[3]), (n = p[4])),
        p[5] !== j || p[6] !== f
          ? ((r = (0, i.jsxs)(N.$, {
              className: "flex-1 sm:flex-none",
              color: "outline",
              disabled: j,
              onClick: f,
              size: "dialogAction",
              type: "button",
              children: [t, n],
            })),
            (p[5] = j),
            (p[6] = f),
            (p[7] = r))
          : (r = p[7]))
      let T = (void 0 !== _ && _) || j || null == h,
        S = null == h
      return (
        p[8] !== x
          ? ((o = x ?? (0, i.jsx)(I.A, { id: "rosalind.application.continue", defaultMessage: "Continue" })),
            (p[8] = x),
            (p[9] = o))
          : (o = p[9]),
        p[10] !== j
          ? ((c = !j && (0, i.jsx)(P.I, { className: "shrink-0", asset: C, focusable: "false" })),
            (p[10] = j),
            (p[11] = c))
          : (c = p[11]),
        p[12] !== j || p[13] !== h || p[14] !== o || p[15] !== c || p[16] !== T || p[17] !== S
          ? ((d = (0, i.jsxs)(N.$, {
              className: "flex-1 sm:flex-none",
              color: "primary",
              "aria-busy": j,
              "aria-disabled": T,
              disabled: S,
              loading: j,
              onClick: h,
              size: "dialogAction",
              type: "button",
              children: [o, c],
            })),
            (p[12] = j),
            (p[13] = h),
            (p[14] = o),
            (p[15] = c),
            (p[16] = T),
            (p[17] = S),
            (p[18] = d))
          : (d = p[18]),
        p[19] !== d || p[20] !== r
          ? ((u = (0, i.jsxs)("div", {
              className: "mt-1 flex items-center justify-between gap-3 border-t border-default pt-5",
              "data-application-navigation": !0,
              children: [r, d],
            })),
            (p[19] = d),
            (p[20] = r),
            (p[21] = u))
          : (u = p[21]),
        p[22] !== u || p[23] !== a
          ? ((m = (0, i.jsxs)(i.Fragment, { children: [a, u] })), (p[22] = u), (p[23] = a), (p[24] = m))
          : (m = p[24]),
        m
      )
    }
    var aY = t("eShZ"),
      aV = t("hAXG")
    function aK(e) {
      let a,
        r,
        c,
        d,
        u,
        m,
        p,
        f,
        _,
        x,
        g,
        b,
        A,
        y,
        v,
        j,
        T,
        C = (0, s.c)(58),
        { disabled: S, isDebugging: P } = e,
        E = (0, l.gh)(G),
        w = (0, h.A)(),
        O = (0, n.useId)(),
        { accountId: L } = (0, o.As)(),
        R = (0, l.Ul)($),
        M = R?.persona_status,
        D = (0, l.Ul)(ag),
        k = "lab" === (0, l.Ul)(F) && !D,
        [B, W] = (0, n.useState)("idle"),
        H = (0, n.useRef)(null),
        q = "loading" === B || "open" === B || "refreshing" === B,
        z = "error" === B || "refresh-error" === B || "unavailable" === B || "conflict" === B
      ;(C[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = () => () => H.current?.()), (r = []), (C[0] = a), (C[1] = r))
        : ((a = C[0]), (r = C[1])),
        (0, n.useEffect)(a, r),
        C[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = function (e) {
              ;((H.current = null), W(e))
            }),
            (C[2] = c))
          : (c = C[2]))
      let Y = c
      C[3] !== L || C[4] !== P || C[5] !== E
        ? ((d = function () {
            let e = E.get($)
            if (null != H.current || P || null == L || e?.state !== "draft") return
            let a = new AbortController()
            ;((H.current = () => a.abort()),
              W("refreshing"),
              E.query
                .cancel(aS)
                .then(() => aM(E, L, a.signal))
                .then((t) => {
                  a.signal.aborted || E.get($)?.id !== e.id || Y(t ? "idle" : "refresh-error")
                })
                .catch(() => {
                  a.signal.aborted || E.get($)?.id !== e.id || Y("refresh-error")
                }))
          }),
          (C[3] = L),
          (C[4] = P),
          (C[5] = E),
          (C[6] = d))
        : (d = C[6])
      let V = d
      C[7] !== L || C[8] !== P || C[9] !== V || C[10] !== E
        ? ((u = function () {
            let e = E.get($)
            null != H.current ||
              E.get(ag) ||
              P ||
              null == L ||
              e?.state !== "draft" ||
              E.get(aw).isPending ||
              E.get(aR).isPending ||
              (W("loading"),
              (H.current = (function ({ scope: e, accountId: a, onReady: i, onComplete: s, onCancel: l, onError: n }) {
                let r = new AbortController(),
                  o = !1,
                  c = null,
                  d = () => {
                    ;((o = !0), clearTimeout(m), r.abort())
                    let e = c
                    ;((c = null), e?.destroy())
                  },
                  u = (e) => {
                    o || (d(), n(e))
                  },
                  m = setTimeout(() => u(Error("Persona verification could not start in time")), 6e4)
                return (
                  Promise.all([
                    t.e(891564).then(t.t.bind(t, "Iv8T", 23)),
                    (async function (e, a, t) {
                      ;(await e.query.cancel(aS), t.throwIfAborted())
                      let i = e.get($)
                      if (i?.state !== "draft") throw Error("No lab application draft to verify")
                      let s = () => aD(e, i, a, t)
                      if ((s(), null == i.answers.lab_lead_email)) throw Error("The applicant email is unavailable")
                      let l = await ah.Request.safePost("/rosalind/applications/drafts/{draft_id}/persona", {
                        parameters: { path: { draft_id: i.id } },
                        additionalHeaders: { [ap.zBc]: a },
                        expectedIdentity: { accountId: a, userId: i.user_id },
                        expectedErrorStatuses: [401, 403, 404, 409, 503],
                        assertRequestCurrent: s,
                        signal: t,
                        retry: !1,
                      })
                      return (s(), l)
                    })(e, a, r.signal),
                  ])
                    .then(([{ default: e }, a]) => {
                      if (o) return
                      let t = new e.Client({
                        inquiryId: a.inquiry_id,
                        environmentId: a.environment_id,
                        sessionToken: a.session_token,
                        onReady: () => {
                          o || (clearTimeout(m), c?.open(), i())
                        },
                        onComplete: () => {
                          o || (d(), s())
                        },
                        onCancel: () => {
                          o || (d(), l())
                        },
                        onError: () => u(Error("Persona verification failed")),
                      })
                      o ? t.destroy() : (c = t)
                    })
                    .catch((e) => {
                      u(e instanceof Error ? e : Error("Could not start Persona verification"))
                    }),
                  d
                )
              })({
                scope: E,
                accountId: L,
                onReady: () => W("open"),
                onComplete: () => {
                  E.get($)?.id === e.id && ((H.current = null), V())
                },
                onCancel: () => Y("canceled"),
                onError: (e) => {
                  e instanceof aY.FetchError && 404 === e.status
                    ? Y("unavailable")
                    : e instanceof aY.FetchError && 409 === e.status
                      ? Y("conflict")
                      : Y("error")
                },
              })))
          }),
          (C[7] = L),
          (C[8] = P),
          (C[9] = V),
          (C[10] = E),
          (C[11] = u))
        : (u = C[11])
      let K = u
      if ("bypassed" === M) {
        let e
        ;(C[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(I.A, {
              id: "rosalind.labDetails.verificationBypassed",
              defaultMessage: "Test bypass enabled",
            })),
            (C[12] = e))
          : (e = C[12]),
          (m = e))
      } else if (D) {
        let e
        ;(C[13] !== M ? ((e = (0, i.jsx)(U, { status: M })), (C[13] = M), (C[14] = e)) : (e = C[14]), (m = e))
      } else if (q) {
        let e
        ;(C[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(I.A, {
              id: "rosalind.labDetails.verificationInProgress",
              defaultMessage: "Verification in progress\u2026",
            })),
            (C[15] = e))
          : (e = C[15]),
          (m = e))
      } else if (z || "canceled" === B || "failed" === M || "expired" === M) {
        let e
        ;(C[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(I.A, {
              id: "rosalind.labDetails.retryVerification",
              defaultMessage: "Try verification again",
            })),
            (C[16] = e))
          : (e = C[16]),
          (m = e))
      } else if ("created" === M || "pending" === M) {
        let e
        ;(C[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(I.A, {
              id: "rosalind.labDetails.continueVerification",
              defaultMessage: "Continue verification",
            })),
            (C[17] = e))
          : (e = C[17]),
          (m = e))
      } else {
        let e
        ;(C[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(I.A, {
              id: "rosalind.labDetails.startVerification",
              defaultMessage: "Start verification",
            })),
            (C[18] = e))
          : (e = C[18]),
          (m = e))
      }
      let Z = null
      if ("bypassed" === M) {
        let e
        ;(C[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)("div", {
              role: "status",
              children: (0, i.jsx)(eH.Rr, {
                children: (0, i.jsx)(I.A, {
                  id: "rosalind.labDetails.verificationBypassedDescription",
                  defaultMessage:
                    "Persona verification is bypassed for this test application. Remove the user from the test gate after testing.",
                }),
              }),
            })),
            (C[19] = e))
          : (e = C[19]),
          (Z = e))
      } else if (D) {
        let e
        ;(C[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)("div", {
              role: "status",
              children: (0, i.jsx)(eH.Rr, {
                children: (0, i.jsx)(I.A, {
                  id: "rosalind.labDetails.verificationSubmittedDescription",
                  defaultMessage:
                    "Your information was submitted to Persona. This does not mean your application has been approved.",
                }),
              }),
            })),
            (C[20] = e))
          : (e = C[20]),
          (Z = e))
      }
      ;(C[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (0, i.jsx)(eH.I3, {
            emphasis: !0,
            children: (0, i.jsx)(I.A, {
              id: "rosalind.labDetails.verificationHeading",
              defaultMessage: "Verify your identity with Persona",
            }),
          })),
          (C[21] = p))
        : (p = C[21]),
        C[22] !== w
          ? ((f = w.formatMessage({ id: "rosalind.labDetails.personaLabel", defaultMessage: "Persona" })),
            (C[22] = w),
            (C[23] = f))
          : (f = C[23]),
        C[24] !== f
          ? ((_ = (0, i.jsx)(aV.A, {
              className: "h-auto w-28 shrink-0 text-default select-none",
              role: "img",
              "aria-label": f,
            })),
            (C[24] = f),
            (C[25] = _))
          : (_ = C[25]))
      let J = k ? O : void 0,
        X = S || q || D || P || null == L || R?.state !== "draft",
        Q = "loading" === B || "refreshing" === B,
        ee = "refresh-error" === B ? V : K
      return (
        C[26] !== m || C[27] !== k || C[28] !== q || C[29] !== X || C[30] !== Q || C[31] !== ee || C[32] !== J
          ? ((x = (0, i.jsx)(N.$, {
              color: "primary",
              "aria-busy": q,
              "aria-describedby": J,
              "aria-invalid": k,
              disabled: X,
              loading: Q,
              onClick: ee,
              size: "dialogAction",
              type: "button",
              children: m,
            })),
            (C[26] = m),
            (C[27] = k),
            (C[28] = q),
            (C[29] = X),
            (C[30] = Q),
            (C[31] = ee),
            (C[32] = J),
            (C[33] = x))
          : (x = C[33]),
        C[34] !== B
          ? ((g =
              ("loading" === B || "open" === B) &&
              (0, i.jsx)(N.$, {
                color: "outline",
                onClick: () => {
                  ;(H.current?.(), Y("canceled"))
                },
                size: "dialogAction",
                type: "button",
                children: (0, i.jsx)(I.A, {
                  id: "rosalind.labDetails.cancelVerification",
                  defaultMessage: "Cancel verification",
                }),
              })),
            (C[34] = B),
            (C[35] = g))
          : (g = C[35]),
        C[36] !== x || C[37] !== g
          ? ((b = (0, i.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [x, g] })),
            (C[36] = x),
            (C[37] = g),
            (C[38] = b))
          : (b = C[38]),
        C[39] !== b || C[40] !== _
          ? ((A = (0, i.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-4 rounded-xl border border-default p-6",
              children: [_, b],
            })),
            (C[39] = b),
            (C[40] = _),
            (C[41] = A))
          : (A = C[41]),
        C[42] !== O || C[43] !== k
          ? ((y =
              k &&
              (0, i.jsx)("p", {
                id: O,
                className: "text-xs text-danger select-text",
                role: "alert",
                children: (0, i.jsx)(I.A, {
                  id: "rosalind.labDetails.verificationRequired",
                  defaultMessage: "Submit your information to Persona before continuing",
                }),
              })),
            (C[42] = O),
            (C[43] = k),
            (C[44] = y))
          : (y = C[44]),
        C[45] !== B || C[46] !== D
          ? ((v =
              "canceled" === B &&
              !D &&
              (0, i.jsx)("div", {
                role: "status",
                children: (0, i.jsx)(eH.Rr, {
                  children: (0, i.jsx)(I.A, {
                    id: "rosalind.labDetails.verificationCanceled",
                    defaultMessage: "Verification was closed. You can try again when you\u2019re ready.",
                  }),
                }),
              })),
            (C[45] = B),
            (C[46] = D),
            (C[47] = v))
          : (v = C[47]),
        C[48] !== z || C[49] !== B || C[50] !== D
          ? ((j =
              z &&
              !D &&
              (0, i.jsxs)("p", {
                className: "text-sm text-danger select-text",
                role: "alert",
                children: [
                  "unavailable" === B &&
                    (0, i.jsx)(I.A, {
                      id: "rosalind.labDetails.verificationUnavailable",
                      defaultMessage: "Verification is unavailable for this application. Please reload and try again.",
                    }),
                  "conflict" === B &&
                    (0, i.jsx)(I.A, {
                      id: "rosalind.labDetails.verificationConflict",
                      defaultMessage:
                        "This application can\u2019t start verification in its current state. Please reload before trying again.",
                    }),
                  ("error" === B || "refresh-error" === B) &&
                    (0, i.jsx)(I.A, {
                      id: "rosalind.labDetails.verificationFailed",
                      defaultMessage: "We couldn\u2019t start or finish verification. Please try again.",
                    }),
                ],
              })),
            (C[48] = z),
            (C[49] = B),
            (C[50] = D),
            (C[51] = j))
          : (j = C[51]),
        C[52] !== Z || C[53] !== A || C[54] !== y || C[55] !== v || C[56] !== j
          ? ((T = (0, i.jsxs)("section", { className: "flex flex-col gap-4", children: [p, A, y, Z, v, j] })),
            (C[52] = Z),
            (C[53] = A),
            (C[54] = y),
            (C[55] = v),
            (C[56] = j),
            (C[57] = T))
          : (T = C[57]),
        T
      )
    }
    function aZ(e) {
      let a,
        t,
        r,
        c,
        d,
        u,
        m,
        p,
        f,
        _,
        x,
        g,
        b,
        A,
        y,
        v,
        j,
        T,
        C,
        S,
        N,
        P,
        E,
        w,
        O,
        L,
        R,
        M,
        k,
        U,
        B,
        W,
        H,
        V,
        K,
        Z,
        J,
        X,
        Q,
        ee,
        ea,
        et,
        ei = (0, s.c)(124),
        { active: es, disabled: el, isDebugging: en, onBack: er, onContinue: eo } = e,
        ec = (0, l.gh)(G),
        ed = (0, h.A)(),
        eu = (0, n.useId)(),
        em = (0, l.Ul)(q),
        ep = (0, l.Ul)(z),
        ef = (0, l.Ul)(Y),
        eh = (0, l.Ul)($),
        e_ = eh?.answers.lab_lead_name,
        ex = eh?.answers.lab_lead_email,
        eg = (0, l.Ul)(ab)
      ;(0, l.Ul)(ag)
      let eb = "lab" === (0, l.Ul)(F)
      ei[0] !== em ? ((a = em.trim()), (ei[0] = em), (ei[1] = a)) : (a = ei[1])
      let eA = "" === a
      ei[2] !== em || ei[3] !== eA || ei[4] !== eb
        ? ((t = eb && (eA || em.trim().length > 200)), (ei[2] = em), (ei[3] = eA), (ei[4] = eb), (ei[5] = t))
        : (t = ei[5])
      let ey = t
      ei[6] !== ep || ei[7] !== eb ? ((r = eb && null == aT(ep)), (ei[6] = ep), (ei[7] = eb), (ei[8] = r)) : (r = ei[8])
      let ev = r
      ei[9] !== ef || ei[10] !== eb
        ? ((c = eb && "" === ef.trim()), (ei[9] = ef), (ei[10] = eb), (ei[11] = c))
        : (c = ei[11])
      let ej = c,
        { accountId: eT, userId: eC, email: eI } = (0, o.As)()
      ei[12] !== eT || ei[13] !== eC
        ? ((d = { accountId: eT, userId: eC }), (ei[12] = eT), (ei[13] = eC), (ei[14] = d))
        : (d = ei[14])
      let { data: eS } = (0, l._U)(D.km, d)
      ei[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (0, i.jsx)(eH.VO, {
            children: (0, i.jsx)(I.A, { id: "rosalind.labDetails.heading", defaultMessage: "Your lab" }),
          })),
          (ei[15] = u))
        : (u = ei[15])
      let eN = `${eu}-name`
      ei[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = (0, i.jsx)(I.A, { id: "rosalind.labDetails.name", defaultMessage: "Lab name" })), (ei[16] = m))
        : (m = ei[16])
      let eP = `${eu}-name`,
        eE = ey ? `${eu}-name-error` : void 0
      ;(ei[17] !== ec ? ((p = (e) => ec.set(q, e.currentTarget.value)), (ei[17] = ec), (ei[18] = p)) : (p = ei[18]),
        ei[19] !== em || ei[20] !== ey || ei[21] !== eE || ei[22] !== p || ei[23] !== eP
          ? ((f = (0, i.jsx)(aG.p, {
              id: eP,
              "aria-describedby": eE,
              "aria-invalid": ey,
              gutterSize: "md",
              invalid: ey,
              name: "labName",
              required: !0,
              onChange: p,
              size: "2xl",
              value: em,
              variant: "outline",
            })),
            (ei[19] = em),
            (ei[20] = ey),
            (ei[21] = eE),
            (ei[22] = p),
            (ei[23] = eP),
            (ei[24] = f))
          : (f = ei[24]),
        ei[25] !== eu || ei[26] !== ey || ei[27] !== eA
          ? ((_ =
              ey &&
              (0, i.jsx)("p", {
                id: `${eu}-name-error`,
                className: "text-xs text-danger select-text",
                role: "alert",
                children: eA
                  ? (0, i.jsx)(I.A, {
                      id: "rosalind.labDetails.nameRequired",
                      defaultMessage: "Enter your lab\u2019s name.",
                    })
                  : (0, i.jsx)(I.A, {
                      id: "rosalind.labDetails.nameTooLong",
                      defaultMessage: "Use 200 characters or fewer for the lab name.",
                    }),
              })),
            (ei[25] = eu),
            (ei[26] = ey),
            (ei[27] = eA),
            (ei[28] = _))
          : (_ = ei[28]),
        ei[29] !== f || ei[30] !== _ || ei[31] !== eN
          ? ((x = (0, i.jsxs)(aF.t, { htmlFor: eN, title: m, children: [f, _] })),
            (ei[29] = f),
            (ei[30] = _),
            (ei[31] = eN),
            (ei[32] = x))
          : (x = ei[32]))
      let ew = `${eu}-website`
      ei[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (0, i.jsx)(I.A, {
            id: "rosalind.labDetails.website",
            defaultMessage: "Lab website or university research page",
          })),
          (b = (0, i.jsx)(I.A, {
            id: "rosalind.labDetails.websiteHelp",
            defaultMessage:
              "Use an official page showing your lab, its lead, and research. We\u2019ll periodically check this page against your application\u2019s research and member details.",
          })),
          (ei[33] = g),
          (ei[34] = b))
        : ((g = ei[33]), (b = ei[34]))
      let eO = `${eu}-website-help`,
        eL = `${eu}-website`,
        eR = `${eu}-website-help${ev ? ` ${eu}-website-error` : ""}`
      ;(ei[35] !== ec
        ? ((A = (e) => ec.set(z, aT(e.currentTarget.value)?.href ?? e.currentTarget.value.trim())),
          (y = (e) => ec.set(z, e.currentTarget.value)),
          (ei[35] = ec),
          (ei[36] = A),
          (ei[37] = y))
        : ((A = ei[36]), (y = ei[37])),
        ei[38] !== ed
          ? ((v = ed.formatMessage({
              id: "rosalind.labDetails.websitePlaceholder",
              defaultMessage: "university.edu/research/your-lab",
            })),
            (ei[38] = ed),
            (ei[39] = v))
          : (v = ei[39]),
        ei[40] !== ep || ei[41] !== eL || ei[42] !== eR || ei[43] !== A || ei[44] !== y || ei[45] !== v || ei[46] !== ev
          ? ((j = (0, i.jsx)(aG.p, {
              id: eL,
              "aria-describedby": eR,
              "aria-invalid": ev,
              gutterSize: "md",
              invalid: ev,
              name: "labWebsite",
              required: !0,
              onBlur: A,
              onChange: y,
              placeholder: v,
              size: "2xl",
              type: "url",
              value: ep,
              variant: "outline",
            })),
            (ei[40] = ep),
            (ei[41] = eL),
            (ei[42] = eR),
            (ei[43] = A),
            (ei[44] = y),
            (ei[45] = v),
            (ei[46] = ev),
            (ei[47] = j))
          : (j = ei[47]),
        ei[48] !== eu || ei[49] !== ev
          ? ((T =
              ev &&
              (0, i.jsx)("p", {
                id: `${eu}-website-error`,
                className: "text-xs text-danger select-text",
                role: "alert",
                children: (0, i.jsx)(I.A, {
                  id: "rosalind.labDetails.invalidWebsite",
                  defaultMessage: "Enter a valid lab or university page address.",
                }),
              })),
            (ei[48] = eu),
            (ei[49] = ev),
            (ei[50] = T))
          : (T = ei[50]),
        ei[51] !== ew || ei[52] !== eO || ei[53] !== j || ei[54] !== T
          ? ((C = (0, i.jsxs)(aF.t, { htmlFor: ew, title: g, description: b, descriptionId: eO, children: [j, T] })),
            (ei[51] = ew),
            (ei[52] = eO),
            (ei[53] = j),
            (ei[54] = T),
            (ei[55] = C))
          : (C = ei[55]),
        ei[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, i.jsx)(eH.I3, {
              as: "legend",
              emphasis: !0,
              children: (0, i.jsx)(I.A, { id: "rosalind.labDetails.leadHeading", defaultMessage: "Lab lead" }),
            })),
            (ei[56] = S))
          : (S = ei[56]))
      let eM = `${eu}-lead-name`
      ei[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = (0, i.jsx)(I.A, { id: "rosalind.labDetails.leadName", defaultMessage: "Full name" })), (ei[57] = N))
        : (N = ei[57])
      let eD = `${eu}-lead-name`,
        ek = `${eu}-lead-help`,
        eU = (void 0 === e_ ? eS?.name : e_) ?? ""
      ;(ei[58] !== eD || ei[59] !== ek || ei[60] !== eU
        ? ((P = (0, i.jsx)(aG.p, {
            id: eD,
            "aria-describedby": ek,
            readOnly: !0,
            gutterSize: "md",
            size: "2xl",
            value: eU,
            variant: "soft",
          })),
          (ei[58] = eD),
          (ei[59] = ek),
          (ei[60] = eU),
          (ei[61] = P))
        : (P = ei[61]),
        ei[62] !== eM || ei[63] !== P
          ? ((E = (0, i.jsx)(aF.t, { htmlFor: eM, title: N, children: P })), (ei[62] = eM), (ei[63] = P), (ei[64] = E))
          : (E = ei[64]))
      let eB = `${eu}-lead-email`
      ei[65] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = (0, i.jsx)(I.A, { id: "rosalind.labDetails.leadEmail", defaultMessage: "Email address" })),
          (ei[65] = w))
        : (w = ei[65])
      let eW = `${eu}-lead-email`,
        eG = `${eu}-lead-help`,
        e$ = (void 0 === ex ? eI : ex) ?? ""
      ;(ei[66] !== eW || ei[67] !== eG || ei[68] !== e$
        ? ((O = (0, i.jsx)(aG.p, {
            id: eW,
            "aria-describedby": eG,
            readOnly: !0,
            gutterSize: "md",
            size: "2xl",
            type: "email",
            value: e$,
            variant: "soft",
          })),
          (ei[66] = eW),
          (ei[67] = eG),
          (ei[68] = e$),
          (ei[69] = O))
        : (O = ei[69]),
        ei[70] !== eB || ei[71] !== O
          ? ((L = (0, i.jsx)(aF.t, { htmlFor: eB, title: w, children: O })), (ei[70] = eB), (ei[71] = O), (ei[72] = L))
          : (L = ei[72]),
        ei[73] !== E || ei[74] !== L
          ? ((R = (0, i.jsxs)("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [E, L] })),
            (ei[73] = E),
            (ei[74] = L),
            (ei[75] = R))
          : (R = ei[75]))
      let eF = `${eu}-lead-help`
      ;(ei[76] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = (0, i.jsx)(I.A, {
            id: "rosalind.labDetails.leadHelp",
            defaultMessage: "If you aren\u2019t the lab lead, ask them to apply from their account",
          })),
          (ei[76] = M))
        : (M = ei[76]),
        ei[77] !== eF ? ((k = (0, i.jsx)(eH.Rr, { id: eF, children: M })), (ei[77] = eF), (ei[78] = k)) : (k = ei[78]),
        ei[79] !== R || ei[80] !== k
          ? ((U = (0, i.jsxs)("fieldset", { className: "flex min-w-0 flex-col gap-4", children: [S, R, k] })),
            (ei[79] = R),
            (ei[80] = k),
            (ei[81] = U))
          : (U = ei[81]))
      let eq = `${eu}-responsibilities`
      ei[82] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = (0, i.jsx)(I.A, {
            id: "rosalind.labDetails.responsibilities",
            defaultMessage: "Role and responsibilities",
          })),
          (ei[82] = B))
        : (B = ei[82])
      let ez = `${eu}-responsibilities`,
        eY = ej ? `${eu}-responsibilities-error` : void 0
      ;(ei[83] !== ec ? ((W = (e) => ec.set(Y, e.currentTarget.value)), (ei[83] = ec), (ei[84] = W)) : (W = ei[84]),
        ei[85] !== ef || ei[86] !== ej || ei[87] !== ez || ei[88] !== eY || ei[89] !== W
          ? ((H = (0, i.jsx)(a$.T, {
              id: ez,
              "aria-describedby": eY,
              "aria-invalid": ej,
              invalid: ej,
              maxHeight: "none",
              name: "responsibilities",
              required: !0,
              onChange: W,
              resize: "vertical",
              rows: 4,
              size: "2xl",
              value: ef,
              variant: "outline",
            })),
            (ei[85] = ef),
            (ei[86] = ej),
            (ei[87] = ez),
            (ei[88] = eY),
            (ei[89] = W),
            (ei[90] = H))
          : (H = ei[90]),
        ei[91] !== eu || ei[92] !== ej
          ? ((V =
              ej &&
              (0, i.jsx)("p", {
                id: `${eu}-responsibilities-error`,
                className: "text-xs text-danger select-text",
                role: "alert",
                children: (0, i.jsx)(I.A, {
                  id: "rosalind.labDetails.responsibilitiesRequired",
                  defaultMessage: "Describe the lab lead\u2019s role and responsibilities.",
                }),
              })),
            (ei[91] = eu),
            (ei[92] = ej),
            (ei[93] = V))
          : (V = ei[93]),
        ei[94] !== eq || ei[95] !== H || ei[96] !== V
          ? ((K = (0, i.jsxs)(aF.t, { htmlFor: eq, title: B, children: [H, V] })),
            (ei[94] = eq),
            (ei[95] = H),
            (ei[96] = V),
            (ei[97] = K))
          : (K = ei[97]),
        ei[98] !== el || ei[99] !== x || ei[100] !== C || ei[101] !== U || ei[102] !== K
          ? ((Z = (0, i.jsxs)("fieldset", {
              className: "flex min-w-0 flex-col gap-4",
              disabled: el,
              children: [x, C, U, K],
            })),
            (ei[98] = el),
            (ei[99] = x),
            (ei[100] = C),
            (ei[101] = U),
            (ei[102] = K),
            (ei[103] = Z))
          : (Z = ei[103]),
        ei[104] !== es || ei[105] !== eh?.id || ei[106] !== el || ei[107] !== en
          ? ((J = es && (0, i.jsx)(aK, { disabled: el, isDebugging: en }, eh?.id)),
            (ei[104] = es),
            (ei[105] = eh?.id),
            (ei[106] = el),
            (ei[107] = en),
            (ei[108] = J))
          : (J = ei[108]),
        ei[109] !== J ? ((X = (0, i.jsx)(i.Fragment, { children: J })), (ei[109] = J), (ei[110] = X)) : (X = ei[110]),
        ei[111] !== Z || ei[112] !== X
          ? ((Q = (0, i.jsxs)("div", { className: "flex flex-col gap-4", children: [Z, X, null] })),
            (ei[111] = Z),
            (ei[112] = X),
            (ei[113] = Q))
          : (Q = ei[113]))
      let eV = !eg
      return (
        ei[114] !== er || ei[115] !== eo || ei[116] !== eV
          ? ((ee = (0, i.jsx)(az, { continueInvalid: eV, onBack: er, onContinue: eo })),
            (ei[114] = er),
            (ei[115] = eo),
            (ei[116] = eV),
            (ei[117] = ee))
          : (ee = ei[117]),
        ei[118] !== el || ei[119] !== ee
          ? ((ea = (0, i.jsx)("fieldset", { className: "flex min-w-0 flex-col gap-6", disabled: el, children: ee })),
            (ei[118] = el),
            (ei[119] = ee),
            (ei[120] = ea))
          : (ea = ei[120]),
        ei[121] !== Q || ei[122] !== ea
          ? ((et = (0, i.jsxs)(i.Fragment, { children: [u, Q, ea] })), (ei[121] = Q), (ei[122] = ea), (ei[123] = et))
          : (et = ei[123]),
        et
      )
    }
    var aJ = t("psL3"),
      aX = t("rY4A")
    let aQ = new Map(["US", "AU", "CA", "FR", "DE", "IN", "JP", "MX", "NL", "SG", "CH", "GB"].map((e, a) => [e, a])),
      a0 = (0, l.un)(G, ({ get: e }) => e(aw).isPending)
    function a1(e) {
      let a,
        t,
        r,
        o,
        c,
        d,
        u,
        m,
        p,
        f,
        _,
        x,
        g,
        b,
        A,
        y,
        v,
        j,
        T,
        C,
        S,
        P,
        E,
        w,
        O,
        L,
        R = (0, s.c)(85),
        { onBack: M, onContinue: D } = e,
        U = (0, l.gh)(G),
        B = (0, h.A)(),
        W = (0, n.useId)(),
        H = (0, l.Ul)(ei),
        $ = (0, l.Ul)(es),
        q = (0, l.Ul)(el),
        z = (0, l.Ul)(en),
        Y = (0, l.Ul)(er),
        V = (0, l.Ul)(av),
        K = "locations" === (0, l.Ul)(F)
      R[0] !== Y ? ((a = Array.from(Y.trim())), (R[0] = Y), (R[1] = a)) : (a = R[1])
      let Z = a.length,
        J = K && !H,
        X = K && null == $,
        Q = K && q.length < ar.XO.additionalCountries.min,
        ee = K && q.length > ar.XO.additionalCountries.max,
        ea = K && Z < ar.XO.otherSafeguardDetails.min,
        et = K && Z > ar.XO.otherSafeguardDetails.max
      R[2] !== B
        ? ((t = ar.PO.map((e) => ({ value: e, label: B.formatDisplayName(e, { type: "region" }) ?? e })).sort(
            (e, a) =>
              (aQ.get(e.value) ?? aQ.size) - (aQ.get(a.value) ?? aQ.size) || e.label.localeCompare(a.label, B.locale),
          )),
          (R[2] = B),
          (R[3] = t))
        : (t = R[3])
      let eo = t
      R[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, i.jsx)(eH.VO, {
            children: (0, i.jsx)(I.A, { id: "rosalind.locations.heading", defaultMessage: "Locations and safeguards" }),
          })),
          (R[4] = r))
        : (r = R[4])
      let ec = `${W}-primary-country`
      R[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (0, i.jsx)(I.A, {
            id: "rosalind.locations.primaryCountry",
            defaultMessage: "Primary access location",
          })),
          (c = (0, i.jsx)(I.A, {
            id: "rosalind.locations.primaryCountryHelp",
            defaultMessage: "Where will users primarily access GPT-Rosalind?",
          })),
          (R[5] = o),
          (R[6] = c))
        : ((o = R[5]), (c = R[6]))
      let ed = `${W}-primary-country-help`,
        eu = `${W}-primary-country`,
        em = `${W}-primary-country-help${J ? ` ${W}-primary-country-error` : ""}`
      ;(R[7] !== U
        ? ((d = (e) => {
            ;(0, l.Y)(U, () => {
              ;(U.set(ei, e), U.set(el, (a) => a.filter((a) => a !== e)))
            })
          }),
          (R[7] = U),
          (R[8] = d))
        : (d = R[8]),
        R[9] !== eo || R[10] !== H || R[11] !== J || R[12] !== d || R[13] !== eu || R[14] !== em
          ? ((u = (0, i.jsx)("div", {
              className: "mt-3 mb-2",
              children: (0, i.jsx)(aX.x, {
                id: eu,
                pending$: a0,
                describedBy: em,
                invalid: J,
                options: eo,
                value: H,
                onChange: d,
              }),
            })),
            (R[9] = eo),
            (R[10] = H),
            (R[11] = J),
            (R[12] = d),
            (R[13] = eu),
            (R[14] = em),
            (R[15] = u))
          : (u = R[15]),
        R[16] !== W || R[17] !== J
          ? ((m = J
              ? (0, i.jsx)("p", {
                  id: `${W}-primary-country-error`,
                  className: "text-xs text-danger select-text",
                  role: "alert",
                  children: (0, i.jsx)(I.A, {
                    id: "rosalind.locations.primaryCountryRequired",
                    defaultMessage: "Select a primary country or region.",
                  }),
                })
              : null),
            (R[16] = W),
            (R[17] = J),
            (R[18] = m))
          : (m = R[18]),
        R[19] !== u || R[20] !== m || R[21] !== ec || R[22] !== ed
          ? ((p = (0, i.jsxs)(aF.t, {
              htmlFor: ec,
              title: o,
              description: c,
              descriptionId: ed,
              descriptionSize: "body",
              children: [u, m],
            })),
            (R[19] = u),
            (R[20] = m),
            (R[21] = ec),
            (R[22] = ed),
            (R[23] = p))
          : (p = R[23]))
      let ep = X ? `${W}-additional-locations-error` : void 0,
        ef = `${W}-additional-locations-label`
      ;(R[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (0, i.jsx)(I.A, {
            id: "rosalind.locations.additionalLocations",
            defaultMessage: "Will anyone access GPT-Rosalind from other countries or regions?",
          })),
          (R[24] = f))
        : (f = R[24]),
        R[25] !== ef
          ? ((_ = (0, i.jsx)(eH.I3, { as: "legend", children: (0, i.jsx)("span", { id: ef, children: f }) })),
            (R[25] = ef),
            (R[26] = _))
          : (_ = R[26]))
      let eh = `${W}-additional-locations-label`
      ;(R[27] !== $ || R[28] !== U
        ? ((x = k.tp.map((e) => {
            let { id: a, label: t } = e
            return (0, i.jsx)(
              N.$,
              {
                "aria-pressed": $ === a,
                color: $ === a ? "tinted" : "outlineSubtle",
                onClick: () => U.set(es, a),
                radius: "full",
                size: "cardAction",
                type: "button",
                children: t,
              },
              a,
            )
          })),
          (R[27] = $),
          (R[28] = U),
          (R[29] = x))
        : (x = R[29]),
        R[30] !== eh || R[31] !== x
          ? ((g = (0, i.jsx)("div", {
              className: "pb-2",
              children: (0, i.jsx)(aJ.e, {
                className: "flex-wrap gap-2",
                "aria-labelledby": eh,
                joined: !1,
                role: "group",
                children: x,
              }),
            })),
            (R[30] = eh),
            (R[31] = x),
            (R[32] = g))
          : (g = R[32]),
        R[33] !== X || R[34] !== W
          ? ((b = X
              ? (0, i.jsx)("p", {
                  id: `${W}-additional-locations-error`,
                  className: "text-xs text-danger select-text",
                  role: "alert",
                  children: (0, i.jsx)(I.A, {
                    id: "rosalind.locations.additionalLocationsRequired",
                    defaultMessage: "Choose Yes, No, or Not sure for additional access locations.",
                  }),
                })
              : null),
            (R[33] = X),
            (R[34] = W),
            (R[35] = b))
          : (b = R[35]),
        R[36] !== q ||
        R[37] !== Q ||
        R[38] !== $ ||
        R[39] !== eo ||
        R[40] !== W ||
        R[41] !== H ||
        R[42] !== U ||
        R[43] !== ee
          ? ((A =
              "yes" === $
                ? (0, i.jsxs)(aF.t, {
                    htmlFor: `${W}-additional-countries`,
                    title: (0, i.jsx)(I.A, {
                      id: "rosalind.locations.additionalCountries",
                      defaultMessage: "Additional countries or regions",
                    }),
                    children: [
                      (0, i.jsx)(aX.x, {
                        id: `${W}-additional-countries`,
                        pending$: a0,
                        describedBy: Q || ee ? `${W}-additional-countries-error` : void 0,
                        invalid: Q || ee,
                        multiple: !0,
                        options: eo.filter((e) => e.value !== H),
                        value: q,
                        onChange: (e) => U.set(el, e),
                      }),
                      Q || ee
                        ? (0, i.jsx)("p", {
                            id: `${W}-additional-countries-error`,
                            className: "text-xs text-danger select-text",
                            role: "alert",
                            children: ee
                              ? (0, i.jsx)(I.A, {
                                  id: "rosalind.locations.additionalCountriesMaximum",
                                  defaultMessage: "Select no more than {maximum} additional countries or regions.",
                                  values: { maximum: ar.XO.additionalCountries.max },
                                })
                              : (0, i.jsx)(I.A, {
                                  id: "rosalind.locations.additionalCountriesRequired",
                                  defaultMessage: "Select at least one additional country or region.",
                                }),
                          })
                        : null,
                    ],
                  })
                : null),
            (R[36] = q),
            (R[37] = Q),
            (R[38] = $),
            (R[39] = eo),
            (R[40] = W),
            (R[41] = H),
            (R[42] = U),
            (R[43] = ee),
            (R[44] = A))
          : (A = R[44]),
        R[45] !== X || R[46] !== ep || R[47] !== _ || R[48] !== g || R[49] !== b || R[50] !== A
          ? ((y = (0, i.jsxs)("fieldset", {
              className: "flex min-w-0 flex-col gap-4",
              "aria-describedby": ep,
              "aria-invalid": X,
              children: [_, g, b, A],
            })),
            (R[45] = X),
            (R[46] = ep),
            (R[47] = _),
            (R[48] = g),
            (R[49] = b),
            (R[50] = A),
            (R[51] = y))
          : (y = R[51]),
        R[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, i.jsx)(I.A, {
              id: "rosalind.locations.safeguardsHelp",
              defaultMessage: "Select all that apply. Formal certifications or published policies are not required.",
            })),
            (R[52] = v))
          : (v = R[52]))
      let e_ = `${W}-safeguards-help`
      ;(R[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = (0, i.jsx)(I.A, {
            id: "rosalind.locations.safeguardsHeading",
            defaultMessage: "Existing safeguards <optional>Optional</optional>",
            values: { optional: a2 },
          })),
          (R[53] = j))
        : (j = R[53]),
        R[54] !== e_
          ? ((T = (0, i.jsx)(eH.I3, { as: "legend", description: v, descriptionId: e_, children: j })),
            (R[54] = e_),
            (R[55] = T))
          : (T = R[55]))
      let ex = `${W}-safeguards-help`
      ;(R[56] !== W || R[57] !== U || R[58] !== z
        ? ((C = k.Rs.map((e) => {
            let { value: a, label: t } = e
            return (0, i.jsx)(
              eq,
              {
                id: `${W}-safeguard-${a}`,
                checked: z.includes(a),
                label: t,
                onCheckedChange: (e) => U.set(en, (t) => (e ? [...t, a] : t.filter((e) => e !== a))),
              },
              a,
            )
          })),
          (R[56] = W),
          (R[57] = U),
          (R[58] = z),
          (R[59] = C))
        : (C = R[59]),
        R[60] !== ex || R[61] !== C
          ? ((S = (0, i.jsx)("div", {
              className: "grid grid-cols-1 gap-3 text-balance lg:grid-cols-2",
              "aria-describedby": ex,
              children: C,
            })),
            (R[60] = ex),
            (R[61] = C),
            (R[62] = S))
          : (S = R[62]),
        R[63] !== W || R[64] !== Y || R[65] !== ea || R[66] !== et || R[67] !== U || R[68] !== z
          ? ((P = z.includes("other")
              ? (0, i.jsxs)(aF.t, {
                  htmlFor: `${W}-other-safeguards`,
                  title: (0, i.jsx)(I.A, {
                    id: "rosalind.locations.otherSafeguardDetails",
                    defaultMessage: "Describe your other safeguards",
                  }),
                  children: [
                    (0, i.jsx)(a$.T, {
                      id: `${W}-other-safeguards`,
                      "aria-describedby": ea || et ? `${W}-other-safeguards-error` : void 0,
                      "aria-invalid": ea || et,
                      invalid: ea || et,
                      maxLength: ar.XO.otherSafeguardDetails.max,
                      name: "otherSafeguardDetails",
                      onChange: (e) => U.set(er, e.currentTarget.value),
                      maxHeight: "none",
                      resize: "vertical",
                      rows: 4,
                      required: !0,
                      size: "2xl",
                      value: Y,
                      variant: "outline",
                    }),
                    ea || et
                      ? (0, i.jsx)("p", {
                          id: `${W}-other-safeguards-error`,
                          className: "text-xs text-danger select-text",
                          role: "alert",
                          children: et
                            ? (0, i.jsx)(I.A, {
                                id: "rosalind.locations.otherSafeguardDetailsMaximum",
                                defaultMessage: "Use no more than {maximum} characters.",
                                values: { maximum: ar.XO.otherSafeguardDetails.max },
                              })
                            : (0, i.jsx)(I.A, {
                                id: "rosalind.locations.otherSafeguardDetailsRequired",
                                defaultMessage: "Describe the other safeguards in place.",
                              }),
                        })
                      : null,
                  ],
                })
              : null),
            (R[63] = W),
            (R[64] = Y),
            (R[65] = ea),
            (R[66] = et),
            (R[67] = U),
            (R[68] = z),
            (R[69] = P))
          : (P = R[69]),
        R[70] !== T || R[71] !== S || R[72] !== P
          ? ((E = (0, i.jsxs)("fieldset", { className: "flex min-w-0 flex-col gap-4", children: [T, S, P] })),
            (R[70] = T),
            (R[71] = S),
            (R[72] = P),
            (R[73] = E))
          : (E = R[73]),
        R[74] !== p || R[75] !== y || R[76] !== E
          ? ((w = (0, i.jsxs)("div", { className: "flex flex-col gap-4", children: [p, y, E] })),
            (R[74] = p),
            (R[75] = y),
            (R[76] = E),
            (R[77] = w))
          : (w = R[77]))
      let eg = !V
      return (
        R[78] !== M || R[79] !== D || R[80] !== eg
          ? ((O = (0, i.jsx)(az, { continueInvalid: eg, onBack: M, onContinue: D })),
            (R[78] = M),
            (R[79] = D),
            (R[80] = eg),
            (R[81] = O))
          : (O = R[81]),
        R[82] !== w || R[83] !== O
          ? ((L = (0, i.jsxs)(i.Fragment, { children: [r, w, O] })), (R[82] = w), (R[83] = O), (R[84] = L))
          : (L = R[84]),
        L
      )
    }
    function a2(e) {
      return (0, i.jsx)("span", { className: "ms-2 text-xs leading-4.5 font-normal text-secondary", children: e })
    }
    let a4 = (0, T.a)({
      name: "circle-exclamationmark-light-12",
      canvas: {
        width: 12,
        height: 12,
        viewBox: "0 0 12 12",
        frame: { x: 0, y: 0, width: 12, height: 12 },
        inkBounds: { x: 1.099609, y: 1.099609, width: 9.800781, height: 9.800781 },
        visualBounds: { x: 1.099609, y: 1.099609, width: 9.800781, height: 9.800781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.099609, y: 1.099609, width: 9.800781, height: 9.800781 },
        center: { x: 6, y: 6 },
        insets: { top: 1.099609, right: 1.09961, bottom: 1.09961, left: 1.099609 },
        anchors: { frame: { x: 6, y: 6 }, ink: { x: 6, y: 6 }, foreground: { x: 6, y: 6 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6.61921 7.8408C6.61921 8.18276 6.342 8.45997 6.00004 8.45997C5.65807 8.45997 5.38086 8.18276 5.38086 7.8408C5.38086 7.49883 5.65807 7.22162 6.00004 7.22162C6.342 7.22162 6.61921 7.49883 6.61921 7.8408Z" fill="currentColor"/> <path d="M10.0996 6C10.0996 3.73563 8.26437 1.90039 6 1.90039C3.73563 1.90039 1.90039 3.73563 1.90039 6C1.90039 8.26437 3.73563 10.0996 6 10.0996C8.26437 10.0996 10.0996 8.26437 10.0996 6ZM10.9004 6C10.9004 8.7062 8.7062 10.9004 6 10.9004C3.2938 10.9004 1.09961 8.7062 1.09961 6C1.09961 3.2938 3.2938 1.09961 6 1.09961C8.7062 1.09961 10.9004 3.2938 10.9004 6Z" fill="currentColor"/> <path d="M5.59961 6.065V3.94C5.59961 3.71909 5.77909 3.53961 6 3.53961C6.22091 3.53961 6.40039 3.71909 6.40039 3.94V6.065C6.40039 6.28592 6.22091 6.46539 6 6.46539C5.77909 6.46539 5.59961 6.28592 5.59961 6.065Z" fill="currentColor"/>',
    })
    var a3 = t("gkHQ"),
      a5 = t("on57")
    function a6() {
      let e,
        a,
        t,
        r,
        c,
        d,
        u,
        m,
        p,
        f,
        _,
        x,
        g,
        b,
        A,
        y,
        v = (0, s.c)(61),
        j = (0, l.gh)(G),
        T = (0, h.A)(),
        C = (0, n.useId)(),
        { email: S } = (0, o.As)(),
        N = S?.trim().toLowerCase().split("@")[1],
        E = (0, l.Ul)(J),
        w = (0, l._U)(Q, S),
        O = (0, l.Ul)(X),
        L = "members" === (0, l.Ul)(F)
      if (v[0] !== S || v[1] !== E) {
        let a
        ;(v[3] !== S ? ((a = (e) => !aj(e, S)), (v[3] = S), (v[4] = a)) : (a = v[4]),
          (e = E.some(a)),
          (v[0] = S),
          (v[1] = E),
          (v[2] = e))
      } else e = v[2]
      let R = e
      v[5] !== S || v[6] !== R || v[7] !== w || v[8] !== L
        ? ((a = R || (L && (0 === w.length || w.some((e) => !aj(e, S))))),
          (v[5] = S),
          (v[6] = R),
          (v[7] = w),
          (v[8] = L),
          (v[9] = a))
        : (a = v[9])
      let M = a,
        D = (0, n.useRef)(null),
        k = (0, n.useRef)(null),
        [U, B] = (0, n.useState)("")
      if (null == N) return null
      v[10] !== j
        ? ((t = function (e, a) {
            let t = j.get(J),
              i = ec([...t, e].join("\n"))
            return (j.set(J, i), j.set(X, void 0 === a ? "" : a), i.length - t.length)
          }),
          (v[10] = j),
          (v[11] = t))
        : (t = v[11])
      let W = t
      v[12] !== W || v[13] !== T || v[14] !== j || v[15] !== B
        ? ((r = function () {
            let e = j.get(X)
            if (!e.trim()) return
            let a = W(e)
            B(
              a > 0
                ? T.formatMessage(
                    {
                      id: "rosalind.members.addressesAdded",
                      defaultMessage: "{count, plural, one {# address added} other {# addresses added}}",
                    },
                    { count: a },
                  )
                : T.formatMessage({
                    id: "rosalind.members.addressAlreadyAdded",
                    defaultMessage: "That address is already in the list",
                  }),
            )
          }),
          (v[12] = W),
          (v[13] = T),
          (v[14] = j),
          (v[15] = B),
          (v[16] = r))
        : (r = v[16])
      let H = r,
        $ = function (e) {
          let a = k.current?.querySelector(`[data-token-index="${e}"]`)
          ;(a ?? D.current)?.focus()
        },
        q = function (e) {
          ;(j.set(J, (a) => a.filter((a) => a !== e)),
            B(
              T.formatMessage(
                { id: "rosalind.members.addressRemoved", defaultMessage: "Removed {email}" },
                { email: e },
              ),
            ),
            D.current?.focus())
        }
      v[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, i.jsx)(I.A, { id: "rosalind.members.emails", defaultMessage: "Member email addresses" })),
          (v[17] = c))
        : (c = v[17])
      let z = M ? "border-text-danger" : "border-strong focus-within:border-text"
      v[18] !== z
        ? ((d = (0, a5.A)(
            "flex min-h-12 min-w-0 flex-wrap items-center gap-1.5 rounded-lg border bg-surface-card px-2.25 py-1.75",
            z,
          )),
          (v[18] = z),
          (v[19] = d))
        : (d = v[19])
      let Y = M || void 0,
        V = E.map((e, a) => {
          let t = aj(e, S)
          return (0, i.jsxs)(
            "span",
            {
              className:
                "inline-flex max-w-full min-w-0 items-center overflow-hidden rounded-md border border-default bg-secondary-soft text-xs leading-5 text-default select-text data-invalid:border-text-danger data-invalid:bg-danger-surface data-invalid:text-danger",
              "data-invalid": !t || void 0,
              children: [
                (0, i.jsxs)("span", {
                  className:
                    "inline-flex min-h-7 min-w-0 items-center justify-center gap-1.25 self-stretch py-0.75 ps-2 pe-0.5 text-start",
                  title: t
                    ? e
                    : T.formatMessage(
                        {
                          id: "rosalind.members.invalidEmailTooltip",
                          defaultMessage: "{email} \u2014 Use a valid {domain} email address for every proposed member",
                        },
                        { email: e, domain: N },
                      ),
                  children: [
                    !t && (0, i.jsx)(P.I, { className: "shrink-0", asset: a4 }),
                    (0, i.jsx)("span", { className: "min-w-0 wrap-anywhere", children: e }),
                  ],
                }),
                (0, i.jsx)("button", {
                  className:
                    "inline-flex min-h-7 w-7 flex-none cursor-interaction items-center justify-center gap-1.25 self-stretch border-0 bg-transparent px-1.75 py-0.75 text-inherit select-none hover:bg-current/8 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-text",
                  "aria-label": T.formatMessage(
                    { id: "rosalind.members.removeEmail", defaultMessage: "Remove {email}" },
                    { email: e },
                  ),
                  "data-token-index": a,
                  type: "button",
                  onClick: () => q(e),
                  onKeyDown: (t) => {
                    t.nativeEvent.isComposing ||
                      ("Backspace" === t.key || "Delete" === t.key
                        ? (t.preventDefault(), q(e))
                        : "ArrowLeft" === t.key || "ArrowRight" === t.key
                          ? (t.preventDefault(), $(a + ("ArrowLeft" === t.key ? -1 : 1)))
                          : "Escape" === t.key && D.current?.focus())
                  },
                  children: (0, i.jsx)(P.I, { asset: a3.Q }),
                }),
              ],
            },
            e,
          )
        }),
        K = `${C}-domain-help ${C}-help${M ? ` ${C}-error` : ""}`,
        Z = M || void 0,
        ee =
          E.length > 0
            ? T.formatMessage({ id: "rosalind.members.emailPlaceholder", defaultMessage: "Add an email address" })
            : T.formatMessage(
                { id: "rosalind.members.firstEmailPlaceholder", defaultMessage: "name@{domain}" },
                { domain: N },
              )
      ;(v[20] !== W || v[21] !== j
        ? ((u = (e) => {
            let a = e.currentTarget.value.split(/[,;\n\r]+/),
              t = a.pop() ?? ""
            a.length > 0 ? W(a.join("\n"), t) : j.set(X, t)
          }),
          (v[20] = W),
          (v[21] = j),
          (v[22] = u))
        : (u = v[22]),
        v[23] !== H
          ? ((m = (e) => {
              ;(e.relatedTarget instanceof Element && e.relatedTarget.closest("[data-application-navigation]")) || H()
            }),
            (v[23] = H),
            (v[24] = m))
          : (m = v[24]),
        v[25] !== W || v[26] !== O || v[27] !== T || v[28] !== B
          ? ((p = (e) => {
              let a = e.clipboardData.getData("text")
              if (!/[,;\n\r]/.test(a)) return
              e.preventDefault()
              let t = e.currentTarget
              ;(W(O.slice(0, t.selectionStart ?? O.length) + a + O.slice(t.selectionEnd ?? O.length)),
                B(
                  T.formatMessage({
                    id: "rosalind.members.pastedEmails",
                    defaultMessage: "Email addresses added. Check any highlighted addresses",
                  }),
                ))
            }),
            (v[25] = W),
            (v[26] = O),
            (v[27] = T),
            (v[28] = B),
            (v[29] = p))
          : (p = v[29]),
        v[30] !== H || v[31] !== $ || v[32] !== O || v[33] !== E.length
          ? ((f = (e) => {
              !e.nativeEvent.isComposing &&
                ("Enter" === e.key || "," === e.key || ";" === e.key
                  ? (e.preventDefault(), H())
                  : "Tab" === e.key
                    ? H()
                    : E.length > 0 &&
                      (("Backspace" === e.key && "" === O) ||
                        ("ArrowLeft" === e.key && 0 === e.currentTarget.selectionStart)) &&
                      (e.preventDefault(), $(E.length - 1)))
            }),
            (v[30] = H),
            (v[31] = $),
            (v[32] = O),
            (v[33] = E.length),
            (v[34] = f))
          : (f = v[34]),
        v[35] !== C ||
        v[36] !== O ||
        v[37] !== D ||
        v[38] !== K ||
        v[39] !== Z ||
        v[40] !== ee ||
        v[41] !== u ||
        v[42] !== m ||
        v[43] !== p ||
        v[44] !== f
          ? ((_ = (0, i.jsx)("input", {
              id: C,
              ref: D,
              className:
                "min-h-7.5 w-45 max-w-full min-w-[min(160px,100%)] grow basis-45 rounded-none border-0 bg-transparent px-0.75 py-0.5 text-sm leading-6 text-default placeholder:text-tertiary placeholder:opacity-100 focus-visible:outline-none",
              "aria-describedby": K,
              "aria-invalid": Z,
              autoCapitalize: "none",
              autoComplete: "off",
              inputMode: "email",
              name: "memberEmails",
              placeholder: ee,
              spellCheck: !1,
              type: "text",
              value: O,
              onChange: u,
              onBlur: m,
              onPaste: p,
              onKeyDown: f,
            })),
            (v[35] = C),
            (v[36] = O),
            (v[37] = D),
            (v[38] = K),
            (v[39] = Z),
            (v[40] = ee),
            (v[41] = u),
            (v[42] = m),
            (v[43] = p),
            (v[44] = f),
            (v[45] = _))
          : (_ = v[45]),
        v[46] !== k || v[47] !== _ || v[48] !== d || v[49] !== Y || v[50] !== V
          ? ((x = (0, i.jsxs)("div", { ref: k, className: d, "data-invalid": Y, children: [V, _] })),
            (v[46] = k),
            (v[47] = _),
            (v[48] = d),
            (v[49] = Y),
            (v[50] = V),
            (v[51] = x))
          : (x = v[51]))
      let ea = `${C}-help`
      return (
        v[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)(I.A, {
              id: "rosalind.members.entryHelp",
              defaultMessage: "Press Enter to add an address, or paste a list",
            })),
            (v[52] = g))
          : (g = v[52]),
        v[53] !== ea
          ? ((b = (0, i.jsx)("p", {
              id: ea,
              className: "m-0 text-[11px] leading-4.5 text-secondary select-text",
              children: g,
            })),
            (v[53] = ea),
            (v[54] = b))
          : (b = v[54]),
        v[55] !== U
          ? ((A = (0, i.jsx)("span", { className: "sr-only", role: "status", "aria-live": "polite", children: U })),
            (v[55] = U),
            (v[56] = A))
          : (A = v[56]),
        v[57] !== N || v[58] !== C || v[59] !== M
          ? ((y =
              M &&
              (0, i.jsx)("p", {
                id: `${C}-error`,
                className: "text-xs text-danger select-text",
                role: "alert",
                children: (0, i.jsx)(I.A, {
                  id: "rosalind.members.matchingDomainEmail",
                  defaultMessage: "Enter valid @{domain} email addresses that match your account\u2019s email domain",
                  values: { domain: N },
                }),
              })),
            (v[57] = N),
            (v[58] = C),
            (v[59] = M),
            (v[60] = y))
          : (y = v[60]),
        (0, i.jsxs)(aF.t, {
          htmlFor: C,
          title: c,
          description: (0, i.jsx)(I.A, {
            id: "rosalind.members.domainHelp",
            defaultMessage: "Use @{domain} email addresses for everyone who needs access",
            values: { domain: N },
          }),
          descriptionId: `${C}-domain-help`,
          children: [x, b, A, y],
        })
      )
    }
    function a9(e) {
      let a,
        t,
        r,
        c,
        d,
        u,
        m,
        p,
        f,
        h,
        _,
        x,
        g,
        b,
        A,
        y,
        v,
        j,
        T,
        C,
        S,
        N,
        P,
        E = (0, s.c)(64),
        { onBack: w, onContinue: O } = e,
        L = (0, l.gh)(G),
        R = (0, n.useId)(),
        { email: M } = (0, o.As)(),
        D = (0, l._U)(ay, M),
        k = "members" === (0, l.Ul)(F),
        U = (0, l.Ul)(ee),
        B = (0, l.Ul)(ea),
        W = (0, l.Ul)(et)
      E[0] !== U || E[1] !== k ? ((a = k && "" === U.trim()), (E[0] = U), (E[1] = k), (E[2] = a)) : (a = E[2])
      let H = a
      E[3] !== B || E[4] !== k
        ? ((t = k && !ax.safeParse(B.trim()).success), (E[3] = B), (E[4] = k), (E[5] = t))
        : (t = E[5])
      let $ = t
      ;(E[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, i.jsx)(eH.VO, {
            children: (0, i.jsx)(I.A, { id: "rosalind.members.heading", defaultMessage: "Lab members" }),
          })),
          (c = (0, i.jsx)(a6, {})),
          (E[6] = r),
          (E[7] = c))
        : ((r = E[6]), (c = E[7])),
        E[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)(eH.I3, {
              as: "legend",
              emphasis: !0,
              description: (0, i.jsx)(I.A, {
                id: "rosalind.members.biosafetyDescription",
                defaultMessage:
                  "Nominate your institution's biosafety, biosecurity, or compliance official. Include their full name, title, office/program, and institutional email.",
              }),
              children: (0, i.jsx)(I.A, {
                id: "rosalind.members.requiredBiosafetyHeading",
                defaultMessage: "Trained biosafety contact",
              }),
            })),
            (E[8] = d))
          : (d = E[8]))
      let q = `${R}-contact-name`
      E[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (0, i.jsx)(I.A, { id: "rosalind.members.contactName", defaultMessage: "Full name" })), (E[9] = u))
        : (u = E[9])
      let z = `${R}-contact-name`,
        Y = H ? `${R}-contact-name-error` : void 0
      ;(E[10] !== L ? ((m = (e) => L.set(ee, e.currentTarget.value)), (E[10] = L), (E[11] = m)) : (m = E[11]),
        E[12] !== U || E[13] !== H || E[14] !== m || E[15] !== z || E[16] !== Y
          ? ((p = (0, i.jsx)(aG.p, {
              id: z,
              "aria-describedby": Y,
              "aria-invalid": H,
              autoComplete: "name",
              gutterSize: "md",
              invalid: H,
              name: "biosafetyContactName",
              required: !0,
              onChange: m,
              size: "2xl",
              value: U,
              variant: "outline",
            })),
            (E[12] = U),
            (E[13] = H),
            (E[14] = m),
            (E[15] = z),
            (E[16] = Y),
            (E[17] = p))
          : (p = E[17]),
        E[18] !== R || E[19] !== H
          ? ((f =
              H &&
              (0, i.jsx)("p", {
                id: `${R}-contact-name-error`,
                className: "text-xs text-danger select-text",
                role: "alert",
                children: (0, i.jsx)(I.A, {
                  id: "rosalind.members.requiredContactName",
                  defaultMessage: "Enter the biosafety contact\u2019s name",
                }),
              })),
            (E[18] = R),
            (E[19] = H),
            (E[20] = f))
          : (f = E[20]),
        E[21] !== p || E[22] !== f || E[23] !== q
          ? ((h = (0, i.jsxs)(aF.t, { htmlFor: q, title: u, children: [p, f] })),
            (E[21] = p),
            (E[22] = f),
            (E[23] = q),
            (E[24] = h))
          : (h = E[24]))
      let V = `${R}-contact-email`
      E[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = (0, i.jsx)(I.A, { id: "rosalind.members.contactEmail", defaultMessage: "Email address" })), (E[25] = _))
        : (_ = E[25])
      let K = `${R}-contact-email`,
        Z = $ ? `${R}-contact-error` : void 0
      ;(E[26] !== L ? ((x = (e) => L.set(ea, e.currentTarget.value)), (E[26] = L), (E[27] = x)) : (x = E[27]),
        E[28] !== B || E[29] !== $ || E[30] !== K || E[31] !== Z || E[32] !== x
          ? ((g = (0, i.jsx)(aG.p, {
              id: K,
              "aria-describedby": Z,
              "aria-invalid": $,
              autoComplete: "email",
              gutterSize: "md",
              invalid: $,
              name: "biosafetyContactEmail",
              required: !0,
              size: "2xl",
              type: "email",
              value: B,
              variant: "outline",
              onChange: x,
            })),
            (E[28] = B),
            (E[29] = $),
            (E[30] = K),
            (E[31] = Z),
            (E[32] = x),
            (E[33] = g))
          : (g = E[33]),
        E[34] !== R || E[35] !== $
          ? ((b =
              $ &&
              (0, i.jsx)("p", {
                id: `${R}-contact-error`,
                className: "text-xs text-danger select-text",
                role: "alert",
                children: (0, i.jsx)(I.A, {
                  id: "rosalind.members.invalidContactEmail",
                  defaultMessage: "Enter a valid biosafety contact email address",
                }),
              })),
            (E[34] = R),
            (E[35] = $),
            (E[36] = b))
          : (b = E[36]),
        E[37] !== V || E[38] !== g || E[39] !== b
          ? ((A = (0, i.jsxs)(aF.t, { htmlFor: V, title: _, children: [g, b] })),
            (E[37] = V),
            (E[38] = g),
            (E[39] = b),
            (E[40] = A))
          : (A = E[40]),
        E[41] !== h || E[42] !== A
          ? ((y = (0, i.jsxs)("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [h, A] })),
            (E[41] = h),
            (E[42] = A),
            (E[43] = y))
          : (y = E[43]))
      let J = `${R}-contact-role`
      E[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = (0, i.jsx)(I.A, {
            id: "rosalind.members.contactRoleOptionalLabel",
            defaultMessage: "Role and responsibilities <optional>Optional</optional>",
            values: { optional: a8 },
          })),
          (E[44] = v))
        : (v = E[44])
      let X = `${R}-contact-role`
      ;(E[45] !== L ? ((j = (e) => L.set(et, e.currentTarget.value)), (E[45] = L), (E[46] = j)) : (j = E[46]),
        E[47] !== W || E[48] !== X || E[49] !== j
          ? ((T = (0, i.jsx)(a$.T, {
              id: X,
              maxHeight: "none",
              name: "biosafetyContactRole",
              onChange: j,
              resize: "vertical",
              rows: 4,
              size: "2xl",
              value: W,
              variant: "outline",
            })),
            (E[47] = W),
            (E[48] = X),
            (E[49] = j),
            (E[50] = T))
          : (T = E[50]),
        E[51] !== J || E[52] !== T
          ? ((C = (0, i.jsx)(aF.t, { htmlFor: J, title: v, children: T })), (E[51] = J), (E[52] = T), (E[53] = C))
          : (C = E[53]),
        E[54] !== y || E[55] !== C
          ? ((S = (0, i.jsxs)("fieldset", { className: "mt-1 flex min-w-0 flex-col gap-4", children: [d, y, C] })),
            (E[54] = y),
            (E[55] = C),
            (E[56] = S))
          : (S = E[56]))
      let Q = !D
      return (
        E[57] !== w || E[58] !== O || E[59] !== Q
          ? ((N = (0, i.jsx)(az, { continueInvalid: Q, onBack: w, onContinue: O })),
            (E[57] = w),
            (E[58] = O),
            (E[59] = Q),
            (E[60] = N))
          : (N = E[60]),
        E[61] !== S || E[62] !== N
          ? ((P = (0, i.jsxs)(i.Fragment, { children: [r, c, S, N] })), (E[61] = S), (E[62] = N), (E[63] = P))
          : (P = E[63]),
        P
      )
    }
    function a8(e) {
      return (0, i.jsx)("span", { className: "ms-2 text-xs leading-4.5 font-normal text-secondary", children: e })
    }
    var a7 = t("vZhU"),
      te = t("SARm")
    function ta(e) {
      let a,
        t,
        r,
        o,
        c,
        d,
        u,
        m,
        p,
        f,
        h,
        _ = (0, s.c)(33),
        { onBack: x, onContinue: g } = e,
        b = (0, l.gh)(G),
        A = (0, n.useId)(),
        y = (0, l.Ul)(V),
        v = (0, l.Ul)(K),
        j = (0, l.Ul)(aA),
        T = "research" === (0, l.Ul)(F)
      if (T) {
        let { max: e, minWords: t } = ar.XO.researchPurpose
        if (Array.from(y.trim()).length > e) {
          let t
          ;(_[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(I.A, {
                id: "rosalind.researchDetails.purposeMaximum",
                defaultMessage: "Use no more than {maximum} characters.",
                values: { maximum: e },
              })),
              (_[0] = t))
            : (t = _[0]),
            (a = t))
        } else if ((0, ar.an)(y) < t) {
          let e
          ;(_[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(I.A, { ...te.s, values: { minimum: t } })), (_[1] = e))
            : (e = _[1]),
            (a = e))
        }
      }
      let C = T && 0 === v.length
      ;(_[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)(eH.VO, {
            children: (0, i.jsx)(I.A, { id: "rosalind.researchDetails.heading", defaultMessage: "Research details" }),
          })),
          (_[2] = t))
        : (t = _[2]),
        _[3] !== b ? ((r = (e) => b.set(V, e)), (_[3] = b), (_[4] = r)) : (r = _[4]),
        _[5] !== a || _[6] !== y || _[7] !== r
          ? ((o = (0, i.jsx)(a7.i, { name: "researchPurpose", onChange: r, value: y, error: a, required: !0 })),
            (_[5] = a),
            (_[6] = y),
            (_[7] = r),
            (_[8] = o))
          : (o = _[8]))
      let S = C ? `${A}-scope-error` : void 0
      ;(_[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, i.jsx)(eH.I3, {
            as: "legend",
            description: (0, i.jsx)(I.A, {
              id: "rosalind.researchDetails.scopeHelp",
              defaultMessage: "Select all that apply",
            }),
            children: (0, i.jsx)(I.A, { id: "rosalind.researchDetails.scope", defaultMessage: "Research scope" }),
          })),
          (_[9] = c))
        : (c = _[9]),
        _[10] !== A || _[11] !== v || _[12] !== b || _[13] !== C
          ? ((d = k.WZ.map((e) =>
              (0, i.jsx)(
                eq,
                {
                  id: `${A}-scope-${e.value}`,
                  checked: v.includes(e.value),
                  description: e.description,
                  invalid: C,
                  label: e.label,
                  onCheckedChange: (a) => {
                    b.set(K, (t) =>
                      a ? ("none" === e.value ? ["none"] : [...t.filter(tt), e.value]) : t.filter((a) => a !== e.value),
                    )
                  },
                },
                e.value,
              ),
            )),
            (_[10] = A),
            (_[11] = v),
            (_[12] = b),
            (_[13] = C),
            (_[14] = d))
          : (d = _[14]),
        _[15] !== A || _[16] !== C
          ? ((u = C
              ? (0, i.jsx)("p", {
                  id: `${A}-scope-error`,
                  className: "text-xs text-danger select-text",
                  role: "alert",
                  children: (0, i.jsx)(I.A, {
                    id: "rosalind.researchDetails.scopeRequired",
                    defaultMessage: "Select the applicable research categories, or \u201CNone of the above.\u201D",
                  }),
                })
              : null),
            (_[15] = A),
            (_[16] = C),
            (_[17] = u))
          : (u = _[17]),
        _[18] !== C || _[19] !== S || _[20] !== d || _[21] !== u
          ? ((m = (0, i.jsxs)("fieldset", {
              className: "flex min-w-0 flex-col gap-3.5",
              "aria-describedby": S,
              "aria-invalid": C,
              children: [c, d, u],
            })),
            (_[18] = C),
            (_[19] = S),
            (_[20] = d),
            (_[21] = u),
            (_[22] = m))
          : (m = _[22]),
        _[23] !== o || _[24] !== m
          ? ((p = (0, i.jsxs)("div", { className: "flex flex-col gap-8 pb-4", children: [o, m] })),
            (_[23] = o),
            (_[24] = m),
            (_[25] = p))
          : (p = _[25]))
      let N = !j
      return (
        _[26] !== x || _[27] !== g || _[28] !== N
          ? ((f = (0, i.jsx)(az, { continueInvalid: N, onBack: x, onContinue: g })),
            (_[26] = x),
            (_[27] = g),
            (_[28] = N),
            (_[29] = f))
          : (f = _[29]),
        _[30] !== f || _[31] !== p
          ? ((h = (0, i.jsxs)(i.Fragment, { children: [t, p, f] })), (_[30] = f), (_[31] = p), (_[32] = h))
          : (h = _[32]),
        h
      )
    }
    function tt(e) {
      return "none" !== e
    }
    var ti = t("bVeK")
    function ts(e) {
      let a,
        t,
        l,
        n,
        r,
        o = (0, s.c)(9),
        { id: c, checked: d, onCheckedChange: u } = e
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)(I.A, {
              id: "rosalind.review.integrityBypass.title",
              defaultMessage: "Employee/test account only",
            })),
            (o[0] = a))
          : (a = o[0]),
        o[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(I.A, {
              id: "rosalind.review.integrityBypass.label",
              defaultMessage: "Skip integrity and approve",
            })),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== d || o[3] !== c || o[4] !== u
          ? ((l = (0, i.jsx)(eq, { id: c, checked: d, onCheckedChange: u, label: t })),
            (o[2] = d),
            (o[3] = c),
            (o[4] = u),
            (o[5] = l))
          : (l = o[5]),
        o[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(I.A, {
              id: "rosalind.review.integrityBypass.description",
              defaultMessage:
                "Submits this application directly as approved without sending it to the integrity review pipeline.",
            })),
            (o[6] = n))
          : (n = o[6]),
        o[7] !== l
          ? ((r = (0, i.jsx)(ey.l, {
              type: "infoAccent",
              variant: "callout",
              layout: "verticalIcon",
              Icon: ti.zOs,
              role: "status",
              title: a,
              content: (0, i.jsxs)("div", { className: "flex flex-col gap-2", children: [l, n] }),
            })),
            (o[7] = l),
            (o[8] = r))
          : (r = o[8]),
        r
      )
    }
    function tl(e) {
      let a,
        t,
        r,
        c,
        d,
        u,
        p,
        h,
        x,
        g,
        A,
        y,
        v,
        j,
        T,
        C,
        S,
        N,
        P,
        E,
        w = (0, s.c)(71),
        { isDebugging: O, onBack: L, onEdit: R, onInvalidStep: M, onSubmitted: D } = e,
        k = (0, l.gh)(G),
        { accountId: U, userId: B } = (0, o.As)(),
        W = (0, n.useId)(),
        { mutate: H, isPending: q, isError: z } = (0, l.Ul)(aR),
        Y = "review" === (0, l.Ul)(F),
        [V, K] = (0, n.useState)(!1),
        Z = (0, l._U)(m.JW, "87235139"),
        J = (0, l.Ul)($),
        { data: X } = (0, l.Ul)(aI),
        Q = X?.state === "submitting" ? X : J,
        ee = Q?.state === "submitting",
        ea = (0, l._U)(m.JW, "2599758586"),
        et = ee ? Q.answers.attestations : null,
        [ei, es] = (0, n.useState)(!1),
        [el, en] = (0, n.useState)(!1),
        [er, eo] = (0, n.useState)(!1),
        ec = et?.research_safeguards.accepted ?? ei,
        eu = et?.accuracy.accepted ?? el,
        em = et?.authority.accepted ?? er
      w[0] !== U || w[1] !== O || w[2] !== k || w[3] !== B
        ? ((a = function (e, a) {
            O ||
              k.get(_.chatGptAuthenticatedAccountId$) !== U ||
              k.get(_.chatGptAuthenticatedUserId$) !== B ||
              (0, b.yy)(k, f.op, {
                flow: "CHATGPT_WEB_ROSALIND_APPLICATION_FLOW_LAB",
                surface: "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_FORM",
                step: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_REVIEW",
                action: "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMIT",
                result: e,
                failureReason: a,
              })
          }),
          (w[0] = U),
          (w[1] = O),
          (w[2] = k),
          (w[3] = B),
          (w[4] = a))
        : (a = w[4])
      let ep = a
      w[5] !== U ||
      w[6] !== Q ||
      w[7] !== eu ||
      w[8] !== em ||
      w[9] !== ec ||
      w[10] !== ee ||
      w[11] !== ep ||
      w[12] !== M ||
      w[13] !== D ||
      w[14] !== k ||
      w[15] !== V ||
      w[16] !== H
        ? ((t = function () {
            if (!k.get(aR).isPending && null != Q && ("draft" === Q.state || "submitting" === Q.state)) {
              if (!ec || !eu || !em) {
                ;(ep(
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_VALIDATION",
                ),
                  M("review"))
                return
              }
              ;(ep("CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED"),
                H(
                  {
                    accountId: U,
                    application: Q,
                    attestations: { research_safeguards: ec, accuracy: eu, authority: em },
                    skipIntegrityAndApprove: V && !ee && k.get(m.JW, "87235139"),
                  },
                  {
                    onSuccess: () => {
                      ;(ep("CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED"), D?.())
                    },
                    onError: (e) => {
                      e instanceof aC
                        ? (ep(
                            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
                            "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_VALIDATION",
                          ),
                          M(e.step))
                        : ep(
                            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_UNCONFIRMED",
                            "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_REQUEST_FAILED",
                          )
                    },
                  },
                ))
            }
          }),
          (w[5] = U),
          (w[6] = Q),
          (w[7] = eu),
          (w[8] = em),
          (w[9] = ec),
          (w[10] = ee),
          (w[11] = ep),
          (w[12] = M),
          (w[13] = D),
          (w[14] = k),
          (w[15] = V),
          (w[16] = H),
          (w[17] = t))
        : (t = w[17])
      let ef = t
      w[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, i.jsx)(I.A, {
            id: "rosalind.review.submissionFailed",
            defaultMessage: "We couldn\u2019t submit your application. Please try again.",
          })),
          (w[18] = r))
        : (r = w[18])
      let eh = r
      w[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, i.jsx)(eH.VO, {
            children: (0, i.jsx)(I.A, { id: "rosalind.review.heading", defaultMessage: "Review your application" }),
          })),
          (w[19] = c))
        : (c = w[19])
      let e_ = ee ? Q : void 0,
        ex = ee ? void 0 : R
      ;(w[20] !== e_ || w[21] !== ex
        ? ((d = (0, i.jsx)(ed, { application: e_, onEdit: ex })), (w[20] = e_), (w[21] = ex), (w[22] = d))
        : (d = w[22]),
        w[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, i.jsx)(eH.I3, {
              as: "legend",
              children: (0, i.jsx)(I.A, {
                id: "rosalind.review.confirmHeading",
                defaultMessage: "Confirm before submitting",
              }),
            })),
            (w[23] = u))
          : (u = w[23]))
      let eg = `${W}-safeguards`,
        eb = Y && !ec
      ;(w[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (0, i.jsx)(I.A, {
            id: "rosalind.review.confirmSafeguards",
            defaultMessage:
              "I confirm that our lab maintains reasonable safeguards appropriate to the proposed research, including limiting access to authorized personnel, following relevant research oversight or safety processes where applicable, and requiring qualified human review before AI-generated outputs inform experiments, publications, or other consequential decisions",
          })),
          (w[24] = p))
        : (p = w[24]),
        w[25] !== ec || w[26] !== eb || w[27] !== eg
          ? ((h = (0, i.jsx)(eq, { id: eg, checked: ec, invalid: eb, onCheckedChange: es, label: p })),
            (w[25] = ec),
            (w[26] = eb),
            (w[27] = eg),
            (w[28] = h))
          : (h = w[28]))
      let eA = `${W}-accuracy`,
        ev = Y && !eu
      ;(w[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = (0, i.jsx)(I.A, {
            id: "rosalind.review.certifyAccuracy",
            defaultMessage: "I certify that this application is accurate and complete",
          })),
          (w[29] = x))
        : (x = w[29]),
        w[30] !== eu || w[31] !== eA || w[32] !== ev
          ? ((g = (0, i.jsx)(eq, { id: eA, checked: eu, invalid: ev, onCheckedChange: en, label: x })),
            (w[30] = eu),
            (w[31] = eA),
            (w[32] = ev),
            (w[33] = g))
          : (g = w[33]))
      let ej = `${W}-authority`,
        eT = Y && !em
      ;(w[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = (0, i.jsx)(I.A, {
            id: "rosalind.review.certifyAuthority",
            defaultMessage: "I am authorized to apply on behalf of this lab",
          })),
          (w[34] = A))
        : (A = w[34]),
        w[35] !== em || w[36] !== ej || w[37] !== eT
          ? ((y = (0, i.jsx)(eq, { id: ej, checked: em, invalid: eT, onCheckedChange: eo, label: A })),
            (w[35] = em),
            (w[36] = ej),
            (w[37] = eT),
            (w[38] = y))
          : (y = w[38]),
        w[39] !== ee || w[40] !== h || w[41] !== g || w[42] !== y
          ? ((v = (0, i.jsxs)("fieldset", {
              className: "flex min-w-0 flex-col gap-3",
              disabled: ee,
              children: [u, h, g, y],
            })),
            (w[39] = ee),
            (w[40] = h),
            (w[41] = g),
            (w[42] = y),
            (w[43] = v))
          : (v = w[43]),
        w[44] !== ee || w[45] !== W || w[46] !== Z || w[47] !== V
          ? ((j =
              Z && !ee && (0, i.jsx)(ts, { id: `${W}-skip-integrity-and-approve`, checked: V, onCheckedChange: K })),
            (w[44] = ee),
            (w[45] = W),
            (w[46] = Z),
            (w[47] = V),
            (w[48] = j))
          : (j = w[48]),
        w[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, i.jsx)(eH.Rr, {
              size: "body",
              children: (0, i.jsx)(I.A, {
                id: "rosalind.review.submissionHelp",
                defaultMessage: "Submitting an application starts a review and does not grant access",
              }),
            })),
            (w[49] = T))
          : (T = w[49]),
        w[50] !== eu || w[51] !== em || w[52] !== ec || w[53] !== Y
          ? ((C =
              Y &&
              (!ec || !eu || !em) &&
              (0, i.jsx)("p", {
                className: "text-sm text-danger select-text",
                role: "alert",
                children: (0, i.jsx)(I.A, {
                  id: "rosalind.review.confirmationsRequired",
                  defaultMessage: "Confirm all three statements before submitting your application",
                }),
              })),
            (w[50] = eu),
            (w[51] = em),
            (w[52] = ec),
            (w[53] = Y),
            (w[54] = C))
          : (C = w[54]),
        w[55] !== z || w[56] !== ea
          ? ((S =
              z &&
              (ea
                ? (0, i.jsx)(ey.l, { type: "error", role: "alert", content: eh })
                : (0, i.jsx)("p", { className: "text-sm text-danger select-text", role: "alert", children: eh }))),
            (w[55] = z),
            (w[56] = ea),
            (w[57] = S))
          : (S = w[57]))
      let eC = !ec || !eu || !em
      return (
        w[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, i.jsx)(I.A, { id: "rosalind.review.submit", defaultMessage: "Submit application" })), (w[58] = N))
          : (N = w[58]),
        w[59] !== q || w[60] !== L || w[61] !== ef || w[62] !== eC
          ? ((P = (0, i.jsx)(az, {
              continueInvalid: eC,
              onBack: L,
              onContinue: ef,
              pending: q,
              showSaveError: !1,
              continueLabel: N,
            })),
            (w[59] = q),
            (w[60] = L),
            (w[61] = ef),
            (w[62] = eC),
            (w[63] = P))
          : (P = w[63]),
        w[64] !== v || w[65] !== j || w[66] !== C || w[67] !== S || w[68] !== P || w[69] !== d
          ? ((E = (0, i.jsxs)(i.Fragment, { children: [c, d, v, j, T, C, S, P] })),
            (w[64] = v),
            (w[65] = j),
            (w[66] = C),
            (w[67] = S),
            (w[68] = P),
            (w[69] = d),
            (w[70] = E))
          : (E = w[70]),
        E
      )
    }
    function tn(e) {
      let a,
        t,
        r,
        c,
        d,
        u,
        m,
        p,
        _,
        x,
        g,
        A,
        y,
        v,
        j,
        T,
        C,
        I,
        S,
        N,
        P,
        E,
        w,
        O,
        L,
        R,
        D,
        k,
        U,
        B,
        W,
        q,
        z = (0, s.c)(117),
        { selectedTab: Y, isDebugging: V, onBack: K, onStepChange: Z, onSubmitted: J } = e,
        X = void 0 !== V && V,
        Q = (0, l.gh)(G),
        ee = (0, h.A)(),
        ea = (0, eG.I)(),
        { accountId: et, email: ei } = (0, o.As)(),
        { mutate: es, isPending: el } = (0, l.Ul)(aw),
        { isPending: en } = (0, l.Ul)(aR),
        er = el || en,
        { data: eo } = (0, l.Ul)(aI),
        ec = (0, l.Ul)($),
        ed = eo?.state === "submitting" || ec?.state === "submitting",
        eu = (0, l.Ul)(ab),
        em = (0, l.Ul)(aA),
        ep = (0, l._U)(ay, ei),
        ef = (0, l.Ul)(av),
        eh = (0, n.useRef)(null),
        e_ = !X
      ;(z[0] !== e_ ? ((a = { enabled: e_ }), (z[0] = e_), (z[1] = a)) : (a = z[1]), (0, l.Ul)(aS, a))
      let ex = H.indexOf(Y),
        eg = eu && em,
        eb = eu && em && ep,
        eA = eu && em && ep && ef
      z[2] !== eu || z[3] !== eg || z[4] !== eb || z[5] !== eA
        ? ((t = { lab: !0, research: eu, members: eg, locations: eb, review: eA }),
          (z[2] = eu),
          (z[3] = eg),
          (z[4] = eb),
          (z[5] = eA),
          (z[6] = t))
        : (t = z[6])
      let ey = t
      z[7] !== Z || z[8] !== Q
        ? ((r = function (e) {
            ;(Q.set(F, null),
              Z(e),
              eh.current?.closest("main")?.parentElement?.scrollTo({ top: 0, behavior: "instant" }))
          }),
          (z[7] = Z),
          (z[8] = Q),
          (z[9] = r))
        : (r = z[9])
      let ev = r
      z[10] !== X || z[11] !== Q || z[12] !== Y
        ? ((c = function (e, a, t, i) {
            X ||
              e === Y ||
              (0, b.yy)(Q, f.op, {
                flow: "CHATGPT_WEB_ROSALIND_APPLICATION_FLOW_LAB",
                surface: "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_FORM",
                action: at[a],
                step: ai[Y],
                targetStep: ai[e],
                result: t,
                failureReason: i,
              })
          }),
          (z[10] = X),
          (z[11] = Q),
          (z[12] = Y),
          (z[13] = c))
        : (c = z[13])
      let ej = c
      z[14] !== Z || z[15] !== Q || z[16] !== ea
        ? ((d = function (e) {
            ;(0, an.flushSync)(() => {
              ;(Z(e), Q.set(F, e))
            })
            let a = eh.current?.querySelector(':scope > div:not([hidden]) :is([aria-invalid="true"], [data-invalid])')
            ;((a?.querySelector("input, textarea, button, [tabindex]") ?? a)?.focus({ preventScroll: !0 }),
              a?.scrollIntoView({ behavior: ea ? "instant" : "smooth", block: "center", inline: "nearest" }))
          }),
          (z[14] = Z),
          (z[15] = Q),
          (z[16] = ea),
          (z[17] = d))
        : (d = z[17])
      let eT = d
      z[18] !== ey || z[19] !== ex || z[20] !== ed || z[21] !== ej || z[22] !== Q || z[23] !== Y || z[24] !== eT
        ? ((u = function (e, a) {
            return (
              (!ed || "entry" === e) &&
              !Q.get(aw).isPending &&
              !Q.get(aR).isPending &&
              (!("entry" !== e && H.indexOf(e) > ex) ||
                !!ey[e] ||
                (ej(
                  e,
                  a,
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_VALIDATION",
                ),
                eT(Y),
                !1))
            )
          }),
          (z[18] = ey),
          (z[19] = ex),
          (z[20] = ed),
          (z[21] = ej),
          (z[22] = Q),
          (z[23] = Y),
          (z[24] = eT),
          (z[25] = u))
        : (u = z[25])
      let eC = u
      z[26] !== eC || z[27] !== X || z[28] !== ej || z[29] !== K || z[30] !== ev
        ? ((m = function (e, a) {
            eC(e, a) &&
              (ej(e, a, "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED"), "entry" === e ? K(X) : ev(e))
          }),
          (z[26] = eC),
          (z[27] = X),
          (z[28] = ej),
          (z[29] = K),
          (z[30] = ev),
          (z[31] = m))
        : (m = z[31])
      let eI = m
      z[32] !== et || z[33] !== eC || z[34] !== ej || z[35] !== Q || z[36] !== ev || z[37] !== eT || z[38] !== es
        ? ((p = function (e) {
            if (eC(e, "continue")) {
              if (null == Q.get($)) return void ev(e)
              es(
                { accountId: et },
                {
                  onSuccess: () => {
                    ;(ej(e, "continue", "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED"), ev(e))
                  },
                  onError: (a) => {
                    a instanceof aC
                      ? (ej(
                          e,
                          "continue",
                          "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
                          "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_VALIDATION",
                        ),
                        eT(a.step))
                      : ej(
                          e,
                          "continue",
                          "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_UNCONFIRMED",
                          "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_REQUEST_FAILED",
                        )
                  },
                },
              )
            }
          }),
          (z[32] = et),
          (z[33] = eC),
          (z[34] = ej),
          (z[35] = Q),
          (z[36] = ev),
          (z[37] = eT),
          (z[38] = es),
          (z[39] = p))
        : (p = z[39])
      let eS = p,
        eN = "lab" === Y,
        eP = er || ed
      ;(z[40] !== eI ? ((_ = () => eI("entry", "back")), (z[40] = eI), (z[41] = _)) : (_ = z[41]),
        z[42] !== eS ? ((x = () => eS("research")), (z[42] = eS), (z[43] = x)) : (x = z[43]),
        z[44] !== X || z[45] !== eN || z[46] !== eP || z[47] !== _ || z[48] !== x
          ? ((g = {
              id: "lab",
              content: (0, i.jsx)(aZ, { active: eN, disabled: eP, isDebugging: X, onBack: _, onContinue: x }),
            }),
            (z[44] = X),
            (z[45] = eN),
            (z[46] = eP),
            (z[47] = _),
            (z[48] = x),
            (z[49] = g))
          : (g = z[49]),
        z[50] !== eI ? ((A = () => eI("lab", "back")), (z[50] = eI), (z[51] = A)) : (A = z[51]),
        z[52] !== eS ? ((y = () => eS("members")), (z[52] = eS), (z[53] = y)) : (y = z[53]),
        z[54] !== A || z[55] !== y
          ? ((v = { id: "research", content: (0, i.jsx)(ta, { onBack: A, onContinue: y }) }),
            (z[54] = A),
            (z[55] = y),
            (z[56] = v))
          : (v = z[56]),
        z[57] !== eI ? ((j = () => eI("research", "back")), (z[57] = eI), (z[58] = j)) : (j = z[58]),
        z[59] !== eS ? ((T = () => eS("locations")), (z[59] = eS), (z[60] = T)) : (T = z[60]),
        z[61] !== j || z[62] !== T
          ? ((C = { id: "members", content: (0, i.jsx)(a9, { onBack: j, onContinue: T }) }),
            (z[61] = j),
            (z[62] = T),
            (z[63] = C))
          : (C = z[63]),
        z[64] !== eI ? ((I = () => eI("members", "back")), (z[64] = eI), (z[65] = I)) : (I = z[65]),
        z[66] !== eS ? ((S = () => eS("review")), (z[66] = eS), (z[67] = S)) : (S = z[67]),
        z[68] !== I || z[69] !== S
          ? ((N = { id: "locations", content: (0, i.jsx)(a1, { onBack: I, onContinue: S }) }),
            (z[68] = I),
            (z[69] = S),
            (z[70] = N))
          : (N = z[70]),
        z[71] !== ed || z[72] !== eI
          ? ((P = () => eI(ed ? "entry" : "locations", "back")), (z[71] = ed), (z[72] = eI), (z[73] = P))
          : (P = z[73]),
        z[74] !== eI ? ((E = (e) => eI(e, "edit")), (z[74] = eI), (z[75] = E)) : (E = z[75]),
        z[76] !== eT ? ((w = (e) => eT(e)), (z[76] = eT), (z[77] = w)) : (w = z[77]),
        z[78] !== X || z[79] !== J || z[80] !== P || z[81] !== E || z[82] !== w
          ? ((O = {
              id: "review",
              content: (0, i.jsx)(tl, { isDebugging: X, onBack: P, onEdit: E, onInvalidStep: w, onSubmitted: J }),
            }),
            (z[78] = X),
            (z[79] = J),
            (z[80] = P),
            (z[81] = E),
            (z[82] = w),
            (z[83] = O))
          : (O = z[83]),
        z[84] !== g || z[85] !== v || z[86] !== C || z[87] !== N || z[88] !== O
          ? ((L = [g, v, C, N, O]), (z[84] = g), (z[85] = v), (z[86] = C), (z[87] = N), (z[88] = O), (z[89] = L))
          : (L = z[89]))
      let eE = L
      return (
        z[90] !== X || z[91] !== Y
          ? ((R = (0, i.jsx)(al, { step: Y, isDebugging: X })), (z[90] = X), (z[91] = Y), (z[92] = R))
          : (R = z[92]),
        z[93] !== ee
          ? ((D = ee.formatMessage({ id: "rosalind.labApplication.progress", defaultMessage: "Application progress" })),
            (z[93] = ee),
            (z[94] = D))
          : (D = z[94]),
        z[95] !== eI ? ((k = (e) => eI(e, "stepSelected")), (z[95] = eI), (z[96] = k)) : (k = z[96]),
        z[97] !== ey || z[98] !== ex || z[99] !== ed || z[100] !== er || z[101] !== eE
          ? ((U = eE.map((e, a) => {
              let { id: t } = e
              return { id: t, label: aH[t], disabled: ed || er || (a > ex && !ey[t]) }
            })),
            (z[97] = ey),
            (z[98] = ex),
            (z[99] = ed),
            (z[100] = er),
            (z[101] = eE),
            (z[102] = U))
          : (U = z[102]),
        z[103] !== Y || z[104] !== D || z[105] !== k || z[106] !== U
          ? ((B = (0, i.jsx)(M.K, { currentStep: Y, distribute: !0, ariaLabel: D, onStepSelect: k, steps: U })),
            (z[103] = Y),
            (z[104] = D),
            (z[105] = k),
            (z[106] = U),
            (z[107] = B))
          : (B = z[107]),
        z[108] !== ed || z[109] !== er || z[110] !== Y || z[111] !== eE
          ? ((W = eE.map((e) => {
              let { id: a, content: t } = e
              return (0, i.jsx)(
                "div",
                {
                  hidden: a !== Y,
                  children: (0, i.jsx)("fieldset", {
                    className: "flex min-w-0 flex-col gap-6",
                    "aria-busy": er,
                    disabled: (ed && "review" !== a) || (er && "lab" !== a),
                    children: "review" !== a || a === Y ? t : null,
                  }),
                },
                a,
              )
            })),
            (z[108] = ed),
            (z[109] = er),
            (z[110] = Y),
            (z[111] = eE),
            (z[112] = W))
          : (W = z[112]),
        z[113] !== R || z[114] !== B || z[115] !== W
          ? ((q = (0, i.jsxs)("div", {
              ref: eh,
              className:
                "flex flex-col gap-6 rounded-2xl border border-default bg-surface p-4.5 text-sm text-default sm:p-6",
              children: [R, B, W],
            })),
            (z[113] = R),
            (z[114] = B),
            (z[115] = W),
            (z[116] = q))
          : (q = z[116]),
        q
      )
    }
    function tr(e) {
      let a,
        t,
        r,
        c,
        d,
        u,
        m,
        p,
        h,
        x,
        g,
        A,
        y,
        v,
        j,
        T,
        C,
        S,
        P,
        E = (0, s.c)(54),
        { application: w, isDebugging: O, onClose: L, onDeleted: R } = e,
        M = (0, l.gh)(G),
        { accountId: D, userId: k } = (0, o.As)(),
        U = (0, l.Ul)(b.YV),
        B = (0, n.useRef)(!1),
        W = (0, n.useRef)(!1),
        { mutate: H, isPending: $, isError: F } = (0, l.Ul)(aP)
      E[0] !== D || E[1] !== O || E[2] !== M || E[3] !== k
        ? ((a = function (e, a, t) {
            return (
              !O &&
              M.get(b.YV) !== b.Cg &&
              M.get(_.chatGptAuthenticatedAccountId$) === D &&
              M.get(_.chatGptAuthenticatedUserId$) === k &&
              ((0, b.yy)(M, f.op, {
                flow: "CHATGPT_WEB_ROSALIND_APPLICATION_FLOW_LAB",
                surface: "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_FORM",
                step: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_ENTRY",
                action: e,
                result: a,
                failureReason: t,
              }),
              !0)
            )
          }),
          (E[0] = D),
          (E[1] = O),
          (E[2] = M),
          (E[3] = k),
          (E[4] = a))
        : (a = E[4])
      let q = a
      E[5] !== q
        ? ((t = () => {
            B.current ||
              (B.current = q(
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_DELETE_DRAFT_CONFIRMATION",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
              ))
          }),
          (E[5] = q),
          (E[6] = t))
        : (t = E[6])
      let z = (0, n.useEffectEvent)(t)
      ;(E[7] !== z
        ? ((r = () => {
            z()
          }),
          (E[7] = z),
          (E[8] = r))
        : (r = E[8]),
        E[9] !== D || E[10] !== O || E[11] !== U || E[12] !== k
          ? ((c = [D, O, U, k]), (E[9] = D), (E[10] = O), (E[11] = U), (E[12] = k), (E[13] = c))
          : (c = E[13]),
        (0, n.useEffect)(r, c),
        E[14] !== q || E[15] !== L
          ? ((d = function () {
              ;(W.current ||
                q(
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_DELETE_DRAFT_CONFIRMATION",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_CANCELLED",
                ),
                L())
            }),
            (E[14] = q),
            (E[15] = L),
            (E[16] = d))
          : (d = E[16]))
      let Y = d
      E[17] !== D || E[18] !== w || E[19] !== H || E[20] !== q || E[21] !== R || E[22] !== M
        ? ((u = function () {
            M.get(aP).isPending ||
              (W.current ||
                ((W.current = !0),
                q(
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_DELETE_DRAFT_CONFIRMATION",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                )),
              q(
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_DELETE_DRAFT",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
              ),
              H(
                { accountId: D, application: w },
                {
                  onSuccess: () => {
                    ;(q(
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_DELETE_DRAFT",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                    ),
                      R())
                  },
                  onError: () => {
                    q(
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_DELETE_DRAFT",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_UNCONFIRMED",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_REQUEST_FAILED",
                    )
                  },
                },
              ))
          }),
          (E[17] = D),
          (E[18] = w),
          (E[19] = H),
          (E[20] = q),
          (E[21] = R),
          (E[22] = M),
          (E[23] = u))
        : (u = E[23])
      let V = u,
        K = !$
      return (
        E[24] !== Y || E[25] !== $
          ? ((m = (e) => {
              e || $ || Y()
            }),
            (E[24] = Y),
            (E[25] = $),
            (E[26] = m))
          : (m = E[26]),
        E[27] !== V
          ? ((p = (e) => {
              ;(e.preventDefault(), V())
            }),
            (E[27] = V),
            (E[28] = p))
          : (p = E[28]),
        E[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, i.jsx)(ev.L3, {
              children: (0, i.jsx)(I.A, { id: "rosalind.deleteDraft.title", defaultMessage: "Delete draft?" }),
            })),
            (E[29] = h))
          : (h = E[29]),
        E[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, i.jsx)(ej.c7, {
              title: h,
              subtitle: (0, i.jsx)(ev.rr, {
                children: (0, i.jsx)(I.A, {
                  id: "rosalind.deleteDraft.description",
                  defaultMessage: "Your saved answers will be deleted. This can\u2019t be undone",
                }),
              }),
            })),
            (E[30] = x))
          : (x = E[30]),
        E[31] !== F
          ? ((g =
              F &&
              (0, i.jsx)("p", {
                className: "text-danger",
                role: "alert",
                children: (0, i.jsx)(I.A, {
                  id: "rosalind.deleteDraft.failed",
                  defaultMessage: "We couldn\u2019t delete your draft. Please try again",
                }),
              })),
            (E[31] = F),
            (E[32] = g))
          : (g = E[32]),
        E[33] !== g ? ((A = (0, i.jsxs)(ej.OO, { children: [x, g] })), (E[33] = g), (E[34] = A)) : (A = E[34]),
        E[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, i.jsx)(I.A, { id: "rosalind.deleteDraft.cancel", defaultMessage: "Cancel" })), (E[35] = y))
          : (y = E[35]),
        E[36] !== Y || E[37] !== $
          ? ((v = (0, i.jsx)(N.$, { color: "outline", disabled: $, onClick: Y, children: y })),
            (E[36] = Y),
            (E[37] = $),
            (E[38] = v))
          : (v = E[38]),
        E[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, i.jsx)(I.A, { id: "rosalind.deleteDraft.confirm", defaultMessage: "Delete draft" })), (E[39] = j))
          : (j = E[39]),
        E[40] !== $
          ? ((T = (0, i.jsx)(N.$, { color: "danger", loading: $, type: "submit", children: j })),
            (E[40] = $),
            (E[41] = T))
          : (T = E[41]),
        E[42] !== v || E[43] !== T
          ? ((C = (0, i.jsx)(ej.OO, { children: (0, i.jsxs)(ej.Es, { children: [v, T] }) })),
            (E[42] = v),
            (E[43] = T),
            (E[44] = C))
          : (C = E[44]),
        E[45] !== A || E[46] !== C || E[47] !== p
          ? ((S = (0, i.jsxs)(ej.R4, { as: "form", onSubmit: p, children: [A, C] })),
            (E[45] = A),
            (E[46] = C),
            (E[47] = p),
            (E[48] = S))
          : (S = E[48]),
        E[49] !== $ || E[50] !== S || E[51] !== K || E[52] !== m
          ? ((P = (0, i.jsx)(ev.lG, {
              open: !0,
              size: "compact",
              showDialogClose: K,
              shouldIgnoreClickOutside: $,
              onOpenChange: m,
              children: S,
            })),
            (E[49] = $),
            (E[50] = S),
            (E[51] = K),
            (E[52] = m),
            (E[53] = P))
          : (P = E[53]),
        P
      )
    }
    var to = t("RNul")
    function tc(e) {
      let a,
        t,
        l,
        r,
        o,
        d,
        u,
        m,
        p,
        f,
        h,
        _,
        x,
        g,
        b,
        A,
        y = (0, s.c)(43),
        { canStartApplication: v, status: j, onStart: T, onDelete: C, starting: S, startFailed: P, deleting: E } = e,
        w = void 0 !== S && S,
        O = void 0 !== P && P,
        L = void 0 !== E && E,
        R = (0, n.useId)()
      y[0] === Symbol.for("react.memo_cache_sentinel") ? ((a = { preview: !1 }), (y[0] = a)) : (a = y[0])
      let { data: M } = (0, c.YL)(void 0, a),
        D = "start" === j && !v
      if ("loading" === j) {
        let e
        return (
          y[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(to.y, { containerClassName: "self-center" })), (y[1] = e))
            : (e = y[1]),
          e
        )
      }
      if (eO(M)) {
        let e
        ;(y[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(I.A, {
              id: "rosalind.labEntrypoint.organizationAcademicPlanApprovalDescription",
              defaultMessage:
                "You\u2019ll get the {rosalind} Academic Plan promotional plan for your lab\u2019s new or existing workspace. <learnMore>Learn more</learnMore>",
              values: { rosalind: "Rosalind", learnMore: eR },
            })),
            (y[3] = e))
          : (e = y[3]),
          (t = e))
      } else {
        let e
        ;(y[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(I.A, {
              id: "rosalind.labEntrypoint.academicPlanApprovalDescription",
              defaultMessage:
                "You\u2019ll need to upgrade to a business plan. You\u2019ll get the {rosalind} Academic Plan promotional plan for your lab\u2019s new or existing workspace. <learnMore>Learn more</learnMore>",
              values: { rosalind: "Rosalind", learnMore: eR },
            })),
            (y[2] = e))
          : (e = y[2]),
          (t = e))
      }
      ;(y[4] === Symbol.for("react.memo_cache_sentinel") ? ((l = (0, i.jsx)(eM, {})), (y[4] = l)) : (l = y[4]),
        y[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)("h2", {
              className: "font-medium",
              children: (0, i.jsx)(I.A, {
                id: "rosalind.labEntrypoint.approvalHeading",
                defaultMessage: "Once you\u2019re approved",
              }),
            })),
            (y[5] = r))
          : (r = y[5]),
        y[6] !== t
          ? ((o = (0, i.jsxs)("section", {
              className: "flex flex-col gap-2",
              children: [r, (0, i.jsx)("p", { className: "leading-relaxed text-secondary", children: t })],
            })),
            (y[6] = t),
            (y[7] = o))
          : (o = y[7]),
        y[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)("h2", {
              className: "font-medium",
              children: (0, i.jsx)(I.A, {
                id: "rosalind.labEntrypoint.requirementsHeading",
                defaultMessage: "What you\u2019ll need",
              }),
            })),
            (y[8] = d))
          : (d = y[8]),
        y[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, i.jsxs)("section", {
              className: "flex flex-col gap-3 rounded-xl bg-secondary-soft p-5 text-sm leading-normal text-default",
              children: [
                d,
                (0, i.jsxs)("ul", {
                  className: "flex list-disc flex-col gap-2.5 ps-4.5 text-secondary",
                  children: [
                    (0, i.jsx)("li", {
                      children: (0, i.jsx)(I.A, {
                        id: "rosalind.labEntrypoint.labDetails",
                        defaultMessage: "Your lab\u2019s name and website",
                      }),
                    }),
                    (0, i.jsx)("li", {
                      children: (0, i.jsx)(I.A, {
                        id: "rosalind.labEntrypoint.memberEmails",
                        defaultMessage: "Proposed members\u2019 email addresses",
                      }),
                    }),
                    (0, i.jsx)("li", {
                      children: (0, i.jsx)(I.A, {
                        id: "rosalind.labEntrypoint.researchPlans",
                        defaultMessage: "Research plans and intended use",
                      }),
                    }),
                    (0, i.jsx)("li", {
                      children: (0, i.jsx)(I.A, {
                        id: "rosalind.labEntrypoint.safeguards",
                        defaultMessage: "Access locations and research safeguards",
                      }),
                    }),
                  ],
                }),
              ],
            })),
            (y[9] = u))
          : (u = y[9]),
        y[10] !== R || y[11] !== D
          ? ((m =
              D &&
              (0, i.jsx)("p", {
                id: R,
                className: "text-sm text-danger select-text",
                role: "alert",
                children: (0, i.jsx)(I.A, {
                  id: "rosalind.labEntrypoint.eligibleEmailDomains",
                  defaultMessage:
                    "Only accounts with a valid .edu or .org email address are eligible to apply for lab access to Rosalind",
                }),
              })),
            (y[10] = R),
            (y[11] = D),
            (y[12] = m))
          : (m = y[12]),
        y[13] !== O || y[14] !== j
          ? ((p =
              (O || "error" === j) &&
              (0, i.jsx)("p", {
                className: "text-sm text-danger select-text",
                role: "alert",
                children:
                  "error" === j
                    ? (0, i.jsx)(I.A, {
                        id: "rosalind.labEntrypoint.loadApplicationFailed",
                        defaultMessage: "We couldn\u2019t check for existing applications. Please try again.",
                      })
                    : (0, i.jsx)(I.A, {
                        id: "rosalind.labEntrypoint.createDraftFailed",
                        defaultMessage: "We couldn\u2019t start your application. Please try again.",
                      }),
              })),
            (y[13] = O),
            (y[14] = j),
            (y[15] = p))
          : (p = y[15]))
      let k = D ? R : void 0,
        U = D || L
      return (
        y[16] !== j
          ? ((f =
              "error" === j &&
              (0, i.jsx)(I.A, { id: "rosalind.labEntrypoint.retryApplications", defaultMessage: "Try again" })),
            (y[16] = j),
            (y[17] = f))
          : (f = y[17]),
        y[18] !== j
          ? ((h =
              "continue" === j &&
              (0, i.jsx)(I.A, {
                id: "rosalind.labEntrypoint.continueApplication",
                defaultMessage: "Continue application",
              })),
            (y[18] = j),
            (y[19] = h))
          : (h = y[19]),
        y[20] !== j
          ? ((_ =
              "start" === j &&
              (0, i.jsx)(I.A, { id: "rosalind.labEntrypoint.startApplication", defaultMessage: "Start application" })),
            (y[20] = j),
            (y[21] = _))
          : (_ = y[21]),
        y[22] !== T || y[23] !== w || y[24] !== k || y[25] !== U || y[26] !== f || y[27] !== h || y[28] !== _
          ? ((x = (0, i.jsxs)(N.$, {
              className: "w-full self-start sm:w-auto",
              color: "primary",
              "aria-busy": w,
              "aria-describedby": k,
              disabled: U,
              loading: w,
              size: "beaconAction",
              onClick: T,
              children: [f, h, _],
            })),
            (y[22] = T),
            (y[23] = w),
            (y[24] = k),
            (y[25] = U),
            (y[26] = f),
            (y[27] = h),
            (y[28] = _),
            (y[29] = x))
          : (x = y[29]),
        y[30] !== L || y[31] !== C || y[32] !== w || y[33] !== j
          ? ((g =
              "continue" === j &&
              null != C &&
              (0, i.jsx)(N.$, {
                className: "w-full self-start sm:w-auto",
                color: "dangerOutline",
                disabled: w,
                loading: L,
                size: "beaconAction",
                onClick: C,
                children: (0, i.jsx)(I.A, {
                  id: "rosalind.labEntrypoint.deleteDraft",
                  defaultMessage: "Delete application",
                }),
              })),
            (y[30] = L),
            (y[31] = C),
            (y[32] = w),
            (y[33] = j),
            (y[34] = g))
          : (g = y[34]),
        y[35] !== x || y[36] !== g
          ? ((b = (0, i.jsxs)("div", { className: "flex flex-wrap items-center gap-3", children: [x, g] })),
            (y[35] = x),
            (y[36] = g),
            (y[37] = b))
          : (b = y[37]),
        y[38] !== m || y[39] !== p || y[40] !== b || y[41] !== o
          ? ((A = (0, i.jsxs)("div", {
              className:
                "flex flex-col gap-6 rounded-2xl border border-default bg-surface p-4.5 text-sm text-default select-text sm:p-6",
              children: [l, o, u, m, p, b],
            })),
            (y[38] = m),
            (y[39] = p),
            (y[40] = b),
            (y[41] = o),
            (y[42] = A))
          : (A = y[42]),
        A
      )
    }
    function td() {
      let e,
        a,
        t,
        n,
        r = (0, s.c)(10),
        { accountId: c, userId: d } = (0, o.As)()
      return (
        r[0] !== c || r[1] !== d ? ((e = JSON.stringify([c, d])), (r[0] = c), (r[1] = d), (r[2] = e)) : (e = r[2]),
        r[3] !== c || r[4] !== d ? ((a = { accountId: c, userId: d }), (r[3] = c), (r[4] = d), (r[5] = a)) : (a = r[5]),
        r[6] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, i.jsx)(tu, {})), (r[6] = t)) : (t = r[6]),
        r[7] !== e || r[8] !== a
          ? ((n = (0, i.jsx)(l.Ui, { scope: G, value: a, children: t }, e)), (r[7] = e), (r[8] = a), (r[9] = n))
          : (n = r[9]),
        n
      )
    }
    function tu() {
      let e,
        a,
        t,
        c,
        d,
        u,
        p,
        T,
        C,
        I,
        S,
        N,
        P,
        E,
        w,
        O,
        L,
        R,
        M,
        D = (0, s.c)(151),
        k = (0, l.gh)(G),
        U = (0, r.zy)(),
        B = (0, r.Zp)(),
        W = (0, h.A)(),
        [H] = (0, r.ok)(),
        { accountId: q, email: z, userId: Y, isLoading: V } = (0, o.As)(),
        K = (0, v.Y)(),
        Z = (0, l._U)(m.JW, "3428714435")
      D[0] !== q || D[1] !== Z || D[2] !== z || D[3] !== V || D[4] !== Y
        ? ((e = !V && null != q && null != Y && null != z && (Z || /\.(edu|org)$/i.test(z)) && ax.safeParse(z).success),
          (D[0] = q),
          (D[1] = Z),
          (D[2] = z),
          (D[3] = V),
          (D[4] = Y),
          (D[5] = e))
        : (e = D[5])
      let J = e,
        X = (0, n.useRef)(null),
        Q = (0, n.useRef)(null),
        [ee, ea] = (0, n.useState)(!1),
        [et, ei] = (0, n.useState)(0),
        [es, el] = (0, n.useState)(null),
        [en, er] = (0, n.useState)(null),
        [ec, ed] = (0, n.useState)(null),
        [eu, em] = (0, n.useState)(null),
        ep = (0, l.Ul)($),
        { data: ef, isPending: eh, isFetching: e_, isError: ex, refetch: eg } = (0, l.Ul)(aI),
        { mutate: eb, isPending: eA, isError: ey } = (0, l.Ul)(aN),
        { isPending: ev } = (0, l.Ul)(aP),
        { isPending: ej } = (0, l.Ul)(aw),
        { isPending: eC } = (0, l.Ul)(aL),
        { data: eI, isPending: eS, isSuccess: eN } = (0, l.Ul)(aR),
        { mutate: eP, isPending: eE, isError: ew } = (0, l.Ul)(aE),
        { mutate: eO, isPending: eL, isError: eR } = (0, l.Ul)(aO),
        eM = (0, n.useRef)(null)
      ;(D[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = () => () => eM.current?.abort()), (D[6] = a))
        : (a = D[6]),
        D[7] !== q || D[8] !== eu || D[9] !== ee
          ? ((t = [q, eu, ee]), (D[7] = q), (D[8] = eu), (D[9] = ee), (D[10] = t))
          : (t = D[10]),
        (0, n.useEffect)(a, t))
      let eD = null != ef && "draft" !== ef.state && "submitting" !== ef.state ? ef : null
      ;(D[11] !== ep || D[12] !== ef || D[13] !== e_ || D[14] !== ex || D[15] !== eh
        ? ((c = "start"),
          null != ep
            ? (c = "continue")
            : eh || e_
              ? (c = "loading")
              : ex
                ? (c = "error")
                : null != ef && (c = "continue"),
          (D[11] = ep),
          (D[12] = ef),
          (D[13] = e_),
          (D[14] = ex),
          (D[15] = eh),
          (D[16] = c))
        : (c = D[16]),
        D[17] !== k
          ? ((d = function (e) {
              ;(k.set(F, null),
                ea(!0),
                em(e),
                X.current?.closest("main")?.parentElement?.scrollTo({ top: 0, behavior: "instant" }))
            }),
            (D[17] = k),
            (D[18] = d))
          : (d = D[18]))
      let eU = d
      if (
        D[19] !== q ||
        D[20] !== J ||
        D[21] !== eb ||
        D[22] !== z ||
        D[23] !== c ||
        D[24] !== ef ||
        D[25] !== ee ||
        D[26] !== ev ||
        D[27] !== eA ||
        D[28] !== eg ||
        D[29] !== k ||
        D[30] !== Y
      ) {
        function eB(e, a, t) {
          let i = void 0 === t ? "lab" : t
          ;((0, b.yy)(k, f.op, {
            flow: "CHATGPT_WEB_ROSALIND_APPLICATION_FLOW_LAB",
            surface: "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_FORM",
            action: "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_START_APPLICATION",
            result: e,
            startKind: a,
            step: ai.entry,
            targetStep: ai[i],
            failureReason:
              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_UNCONFIRMED" === e
                ? "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_REQUEST_FAILED"
                : void 0,
          }),
            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED" === e && em(i))
        }
        ;((u = function () {
          if (!eA && !ev && "loading" !== c) {
            if ("error" === c) {
              ;(ee ||
                (0, b.yy)(k, f.op, {
                  flow: "CHATGPT_WEB_ROSALIND_APPLICATION_FLOW_LAB",
                  surface: "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_FORM",
                  step: ai.entry,
                  action: "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_RETRY_STATUS",
                  result: "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                }),
                eg().then(() => {
                  k.get(_.chatGptAuthenticatedAccountId$) === q && k.get(_.chatGptAuthenticatedUserId$) === Y && ei(tm)
                }))
              return
            }
            if (
              (ea(!1), null != ef && (null == k.get($) || "submitting" === ef.state) && eo(k, ef), null != k.get($))
            ) {
              let e = "review",
                a = k.get($)?.state !== "submitting"
              ;(a && !k.get(ab)
                ? (e = "lab")
                : a && !k.get(aA)
                  ? (e = "research")
                  : a && !k.get(ay, z)
                    ? (e = "members")
                    : a && !k.get(av) && (e = "locations"),
                eB(
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_START_KIND_RESUME",
                  e,
                ))
              return
            }
            J &&
              (null == Q.current && (Q.current = crypto.randomUUID()),
              eb(
                { accountId: q, idempotencyKey: Q.current },
                {
                  onSuccess: () =>
                    eB(
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_START_KIND_NEW",
                    ),
                  onError: () =>
                    eB(
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_UNCONFIRMED",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_START_KIND_NEW",
                    ),
                },
              ))
          }
        }),
          (D[19] = q),
          (D[20] = J),
          (D[21] = eb),
          (D[22] = z),
          (D[23] = c),
          (D[24] = ef),
          (D[25] = ee),
          (D[26] = ev),
          (D[27] = eA),
          (D[28] = eg),
          (D[29] = k),
          (D[30] = Y),
          (D[31] = u))
      } else u = D[31]
      D[32] !== q || D[33] !== ee || D[34] !== k || D[35] !== Y
        ? ((p = function (e, a, t) {
            ee ||
              k.get(_.chatGptAuthenticatedAccountId$) !== q ||
              k.get(_.chatGptAuthenticatedUserId$) !== Y ||
              (0, b.yy)(k, f.op, {
                flow: "CHATGPT_WEB_ROSALIND_APPLICATION_FLOW_LAB",
                surface: "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_STATUS",
                action: e,
                result: a,
                failureReason: t,
              })
          }),
          (D[32] = q),
          (D[33] = ee),
          (D[34] = k),
          (D[35] = Y),
          (D[36] = p))
        : (p = D[36])
      let eW = p,
        eH = !1
      if (null != eD && "entry" !== eu) {
        let e, a, t, s, l, n, r, o
        D[38] !== ee || D[39] !== eD.id
          ? ((e = (0, i.jsx)(as, { isDebugging: ee }, eD.id)), (D[38] = ee), (D[39] = eD.id), (D[40] = e))
          : (e = D[40])
        let c = `${eD.id}:${eD.state}`
        ;(D[41] !== eW
          ? ((a = () =>
              eW(
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_OPEN_WORKSPACE",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
              )),
            (D[41] = eW),
            (D[42] = a))
          : (a = D[42]),
          D[43] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = () => eM.current?.abort()), (D[43] = t))
            : (t = D[43]),
          D[44] !== q || D[45] !== eO || D[46] !== K || D[47] !== U || D[48] !== B || D[49] !== eD
            ? ((s = (e) => {
                eM.current?.abort()
                let a = new AbortController()
                ;((eM.current = a),
                  eO(
                    {
                      accountId: q,
                      application: eD,
                      consent: e,
                      appearance: !0 === K ? "dark" : "light",
                      signal: a.signal,
                    },
                    {
                      onSuccess: (e) => {
                        a.signal.aborted ||
                          ("tag" in e && "custom_checkout_session" === e.tag
                            ? B((0, g.L7)(e), { state: { checkoutReturnLocation: U } })
                            : null != e.url && window.location.assign(e.url))
                      },
                    },
                  ))
              }),
              (D[44] = q),
              (D[45] = eO),
              (D[46] = K),
              (D[47] = U),
              (D[48] = B),
              (D[49] = eD),
              (D[50] = s))
            : (s = D[50]),
          D[51] !== q || D[52] !== k || D[53] !== eD
            ? ((l =
                null == q
                  ? void 0
                  : async (e) => {
                      await k.get(aL).mutateAsync({ accountId: q, application: eD, request: e })
                    }),
              (D[51] = q),
              (D[52] = k),
              (D[53] = eD),
              (D[54] = l))
            : (l = D[54]),
          D[55] !== eW || D[56] !== eD
            ? ((n = () => {
                ;(eW(
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCELLATION_CONFIRMATION",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                ),
                  ed(eD))
              }),
              (D[55] = eW),
              (D[56] = eD),
              (D[57] = n))
            : (n = D[57]),
          D[58] !== eR ||
          D[59] !== eL ||
          D[60] !== eD ||
          D[61] !== l ||
          D[62] !== n ||
          D[63] !== c ||
          D[64] !== a ||
          D[65] !== s
            ? ((r = (0, i.jsx)(
                ae,
                {
                  application: eD,
                  onOpenWorkspace: a,
                  onCancelCheckout: t,
                  onCreateWorkspace: s,
                  checkoutFailed: eR,
                  checkoutPending: eL,
                  onSaveRetentionRequest: l,
                  onCancel: n,
                },
                c,
              )),
              (D[58] = eR),
              (D[59] = eL),
              (D[60] = eD),
              (D[61] = l),
              (D[62] = n),
              (D[63] = c),
              (D[64] = a),
              (D[65] = s),
              (D[66] = r))
            : (r = D[66]),
          D[67] !== r || D[68] !== e
            ? ((o = (0, i.jsxs)(i.Fragment, { children: [e, r] })), (D[67] = r), (D[68] = e), (D[69] = o))
            : (o = D[69]),
          (T = o))
      } else if (null != eu && "entry" !== eu && "submitted" !== eu && (ee || null != ep)) {
        let e,
          a,
          t,
          s = ef?.state === "submitting" ? "review" : eu
        ;(D[70] === Symbol.for("react.memo_cache_sentinel") ? ((e = () => em(null)), (D[70] = e)) : (e = D[70]),
          D[71] !== eU
            ? ((a = (e) => {
                e ? eU("entry") : (ea(!1), em(null))
              }),
              (D[71] = eU),
              (D[72] = a))
            : (a = D[72]),
          D[73] !== ee || D[74] !== s || D[75] !== a
            ? ((t = (0, i.jsx)(tn, { selectedTab: s, isDebugging: ee, onStepChange: em, onSubmitted: e, onBack: a })),
              (D[73] = ee),
              (D[74] = s),
              (D[75] = a),
              (D[76] = t))
            : (t = D[76]),
          (T = t))
      } else {
        let e, a, t, s
        ;((eH = !0),
          D[77] !== ee
            ? ((e = (0, i.jsx)(al, { step: "entry", isDebugging: ee })), (D[77] = ee), (D[78] = e))
            : (e = D[78]),
          D[79] !== ep || D[80] !== ef || D[81] !== eW || D[82] !== eD
            ? ((a =
                null == eD
                  ? () => {
                      let e = ef?.state === "submitting" ? ef : (ep ?? ef)
                      null != e &&
                        ("submitting" === e.state
                          ? (eW(
                              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCELLATION_CONFIRMATION",
                              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                            ),
                            ed(e))
                          : er(e))
                    }
                  : void 0),
              (D[79] = ep),
              (D[80] = ef),
              (D[81] = eW),
              (D[82] = eD),
              (D[83] = a))
            : (a = D[83]),
          D[84] !== J || D[85] !== c || D[86] !== ev || D[87] !== ey || D[88] !== eA || D[89] !== u || D[90] !== a
            ? ((t = (0, i.jsx)(tc, {
                canStartApplication: J,
                status: c,
                onStart: u,
                onDelete: a,
                starting: eA,
                startFailed: ey,
                deleting: ev,
              })),
              (D[84] = J),
              (D[85] = c),
              (D[86] = ev),
              (D[87] = ey),
              (D[88] = eA),
              (D[89] = u),
              (D[90] = a),
              (D[91] = t))
            : (t = D[91]),
          D[92] !== e || D[93] !== t
            ? ((s = (0, i.jsxs)(i.Fragment, { children: [e, t] })), (D[92] = e), (D[93] = t), (D[94] = s))
            : (s = D[94]),
          (T = s))
      }
      D[95] !== H ? ((C = H.get("embedded")), (D[95] = H), (D[96] = C)) : (C = D[96])
      let eG = "codex" === C
      ;(D[97] !== eE || D[98] !== ev || D[99] !== eA || D[100] !== eC || D[101] !== k
        ? ((I = () => {
            eA ||
              ev ||
              eE ||
              eC ||
              k.get(aw).isPending ||
              k.get(aR).isPending ||
              (k.set(F, null),
              ea(!1),
              em("entry"),
              X.current?.closest("main")?.parentElement?.scrollTo({ top: 0, behavior: "instant" }))
          }),
          (D[97] = eE),
          (D[98] = ev),
          (D[99] = eA),
          (D[100] = eC),
          (D[101] = k),
          (D[102] = I))
        : (I = D[102]),
        D[103] === Symbol.for("react.memo_cache_sentinel") ? ((S = (0, i.jsx)(y.Z, {})), (D[103] = S)) : (S = D[103]),
        D[104] !== Z ? ((N = !1), (D[104] = Z), (D[105] = N)) : (N = D[105]))
      let e$ = V || eh || e_ ? "loading" : c
      return (
        D[106] !== J || D[107] !== et || D[108] !== ee || D[109] !== eH || D[110] !== e$
          ? ((P = (0, i.jsx)(aa, {
              status: e$,
              canStartApplication: J,
              retryCount: et,
              isDebugging: ee,
              isVisible: eH,
            })),
            (D[106] = J),
            (D[107] = et),
            (D[108] = ee),
            (D[109] = eH),
            (D[110] = e$),
            (D[111] = P))
          : (P = D[111]),
        D[112] !== ev || D[113] !== eA || D[114] !== ej || D[115] !== eC || D[116] !== eS
          ? ((E = !1), (D[112] = ev), (D[113] = eA), (D[114] = ej), (D[115] = eC), (D[116] = eS), (D[117] = E))
          : (E = D[117]),
        D[118] !== ec ||
        D[119] !== en ||
        D[120] !== eu ||
        D[121] !== es ||
        D[122] !== ee ||
        D[123] !== eN ||
        D[124] !== eD ||
        D[125] !== eI?.id
          ? ((w =
              !ee &&
              "entry" !== eu &&
              eN &&
              null != eD &&
              eI?.id === eD.id &&
              es !== eD.id &&
              ek(eD) &&
              null == ec &&
              null == en &&
              (0, i.jsx)(eT, { onClose: () => el(eD.id) })),
            (D[118] = ec),
            (D[119] = en),
            (D[120] = eu),
            (D[121] = es),
            (D[122] = ee),
            (D[123] = eN),
            (D[124] = eD),
            (D[125] = eI?.id),
            (D[126] = w))
          : (w = D[126]),
        D[127] !== q ||
        D[128] !== ec ||
        D[129] !== eP ||
        D[130] !== ew ||
        D[131] !== W ||
        D[132] !== eE ||
        D[133] !== eW ||
        D[134] !== k
          ? ((O =
              null != ec &&
              (0, i.jsx)(j.v, {
                pending: eE,
                failed: ew,
                onClose: () => {
                  ;(eW(
                    "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCELLATION_CONFIRMATION",
                    "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_CANCELLED",
                  ),
                    ed(null))
                },
                onConfirm: () => {
                  k.get(aE).isPending ||
                    (eW(
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCELLATION_CONFIRMATION",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                    ),
                    eW(
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCEL",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                    ),
                    eP(
                      { accountId: q, application: ec },
                      {
                        onSuccess: () => {
                          ;(eW(
                            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCEL",
                            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                          ),
                            (Q.current = null),
                            em(null),
                            ea(!1),
                            ed(null),
                            k
                              .get(x.Id)
                              .success(
                                W.formatMessage({
                                  id: "rosalind.cancelApplication.succeeded",
                                  defaultMessage: "Application canceled",
                                }),
                              ))
                        },
                        onError: () => {
                          eW(
                            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCEL",
                            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_UNCONFIRMED",
                            "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_REQUEST_FAILED",
                          )
                        },
                      },
                    ))
                },
              })),
            (D[127] = q),
            (D[128] = ec),
            (D[129] = eP),
            (D[130] = ew),
            (D[131] = W),
            (D[132] = eE),
            (D[133] = eW),
            (D[134] = k),
            (D[135] = O))
          : (O = D[135]),
        D[136] !== en || D[137] !== ee
          ? ((L =
              null != en &&
              (0, i.jsx)(tr, {
                application: en,
                isDebugging: ee,
                onClose: () => er(null),
                onDeleted: () => {
                  ;((Q.current = null), er(null))
                },
              })),
            (D[136] = en),
            (D[137] = ee),
            (D[138] = L))
          : (L = D[138]),
        D[139] !== T || D[140] !== P || D[141] !== E || D[142] !== w || D[143] !== O || D[144] !== L || D[145] !== N
          ? ((R = (0, i.jsxs)("div", { ref: X, className: "flex flex-col gap-8", children: [S, N, P, T, E, w, O, L] })),
            (D[139] = T),
            (D[140] = P),
            (D[141] = E),
            (D[142] = w),
            (D[143] = O),
            (D[144] = L),
            (D[145] = N),
            (D[146] = R))
          : (R = D[146]),
        D[147] !== R || D[148] !== eG || D[149] !== I
          ? ((M = (0, i.jsx)(A.x, { embedded: eG, onHome: I, children: R })),
            (D[147] = R),
            (D[148] = eG),
            (D[149] = I),
            (D[150] = M))
          : (M = D[150]),
        M
      )
    }
    function tm(e) {
      return e + 1
    }
    let tp = "1062673654"
    function tf() {
      let e,
        a,
        t,
        f,
        h,
        _,
        x = (0, s.c)(20),
        g = (0, r.Zp)(),
        { accountId: b, email: A, isLoading: y } = (0, o.As)()
      x[0] !== A ? ((e = ax.safeParse(A)), (x[0] = A), (x[1] = e)) : (e = x[1])
      let v = e.success
      x[2] === Symbol.for("react.memo_cache_sentinel") ? ((a = { preview: !1 }), (x[2] = a)) : (a = x[2])
      let { data: j, isLoading: T, isError: C } = (0, c.YL)(void 0, a),
        I = (0, l._U)(m.JW, tp),
        S = (0, l._U)(m.dx, tp),
        N = (0, l._U)(m.JW, "3428714435"),
        P = (0, l.Ul)(m.RS)
      x[3] !== j ||
      x[4] !== C ||
      x[5] !== b ||
      x[6] !== T ||
      x[7] !== N ||
      x[8] !== S ||
      x[9] !== v ||
      x[10] !== P ||
      x[11] !== y
        ? ((t =
            !y &&
            v &&
            !P &&
            !S &&
            !T &&
            !C &&
            j?.id === b &&
            j?.structure === "workspace" &&
            (0, p.J8)(j.plan_type) &&
            !N),
          (x[3] = j),
          (x[4] = C),
          (x[5] = b),
          (x[6] = T),
          (x[7] = N),
          (x[8] = S),
          (x[9] = v),
          (x[10] = P),
          (x[11] = y),
          (x[12] = t))
        : (t = x[12])
      let E = t
      if (
        (x[13] !== g || x[14] !== E
          ? ((f = () => {
              E &&
                ((0, d.E0)({ href: "https://chatgpt.com/rosalind/application", initiator: "external_link" }),
                g("/", { replace: !0 }))
            }),
            (h = [E, g]),
            (x[13] = g),
            (x[14] = E),
            (x[15] = f),
            (x[16] = h))
          : ((f = x[15]), (h = x[16])),
        (0, n.useEffect)(f, h),
        y || P || S || T || E)
      ) {
        let e
        return (
          x[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(u.LoadingPage, { fillParent: !0 })), (x[17] = e))
            : (e = x[17]),
          e
        )
      }
      if (!v || !I || C || null == j || j.id !== b) {
        let e
        return (
          x[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(r.C5, { to: "/", replace: !0 })), (x[18] = e))
            : (e = x[18]),
          e
        )
      }
      return (
        x[19] === Symbol.for("react.memo_cache_sentinel") ? ((_ = (0, i.jsx)(td, {})), (x[19] = _)) : (_ = x[19]),
        _
      )
    }
  },
  Q7yV(e, a, t) {
    let i = (0, t("ESTr").a)({
      name: "arrow-left-md-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.682251, y: 4.14209, width: 8.843018, height: 7.716309 },
        visualBounds: { x: 3.682251, y: 4.14209, width: 8.843018, height: 7.716309 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.682251, y: 4.14209, width: 8.843018, height: 7.716309 },
        center: { x: 8.10376, y: 8.000244 },
        insets: { top: 4.14209, right: 3.474731, bottom: 4.141601, left: 3.682251 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.10376, y: 8.000244 }, foreground: { x: 8.10376, y: 8.000244 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6.96175 4.29558C7.16659 4.09074 7.49887 4.09111 7.70394 4.29558C7.90897 4.50061 7.90897 4.83275 7.70394 5.03777L5.26546 7.47527H11.9998C12.2898 7.47527 12.5252 7.71071 12.5252 8.00066C12.5251 8.29048 12.2897 8.52605 11.9998 8.52605H5.26742L7.70394 10.9626C7.90897 11.1676 7.90897 11.4997 7.70394 11.7048C7.49889 11.9094 7.16666 11.9097 6.96175 11.7048L3.98226 8.72527C3.58237 8.32496 3.58212 7.67524 3.98226 7.27508L6.96175 4.29558Z" fill="currentColor"/>',
    })
    t.d(a, {}, { x: i })
  },
}
//# sourceMappingURL=840125.83666371b5.js.map
