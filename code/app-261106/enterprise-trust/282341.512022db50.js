export const __rspack_esm_ids = [282341]
export const __webpack_modules__ = {
  BcYu(e, a, t) {
    t.d(a, { T: () => o })
    var i = t("ABep"),
      s = t("on57"),
      n = t("zd8w"),
      r = t("UIGa"),
      l = t("fZ4G")
    let o = (e) => {
      let a = (0, n.useRef)(null),
        t = (0, n.useId)(),
        o = `search-ui-input-${t}`,
        {
          id: c,
          name: d,
          variant: p = "outline",
          size: u = "md",
          gutterSize: m,
          className: h,
          autoComplete: f,
          disabled: b = !1,
          readOnly: g = !1,
          invalid: _ = !1,
          allowAutofillExtensions: x = !!d || (!!f && "off" !== f),
          onFocus: A,
          onBlur: y,
          onAnimationStart: v,
          onAutofill: T,
          autoSelect: w,
          rows: j = 3,
          maxRows: P,
          autoResize: S,
          maxHeight: C,
          resize: I = "none",
          ref: R,
          onChange: N,
          __isWidget: E,
          ...L
        } = e,
        [O, M] = (0, n.useState)(!1),
        D = S ? Math.max(P ?? 10, j) : j,
        k = "none" !== I
      ;(0, n.useEffect)(() => {
        w && a.current?.select()
      }, [w])
      let G = (0, n.useCallback)(() => {
        if (!S || !a.current || void 0 === D) return
        a.current.style.height = "0px"
        let e = a.current.scrollHeight
        a.current.style.height = e + "px"
      }, [S, D])
      return (
        (0, n.useEffect)(() => {
          G()
        }, [e.value, j, G]),
        (0, i.jsx)("div", {
          className: (0, s.A)("Container-P18Q1e", h),
          "data-w-component": E ? "textarea" : "",
          "data-variant": p,
          "data-size": u,
          "data-gutter-size": m,
          "data-focused": O,
          "data-disabled": b ? "" : void 0,
          "data-readonly": g ? "" : void 0,
          "data-invalid": _ ? "" : void 0,
          style: (0, l.mW)({
            "textarea-min-rows": `${j}`,
            "textarea-max-rows": `${D}`,
            "textarea-max-height": C,
            ...(k ? { "textarea-resize": I, "textarea-resizer-visibility": "visible" } : null),
          }),
          children: (0, i.jsx)("textarea", {
            ...L,
            onChange: (e) => {
              ;(N?.(e), G())
            },
            ref: (0, r.P)([a, R]),
            id: c || (x ? void 0 : o),
            className: "Textarea-WlH_Xa",
            name: d,
            autoComplete: f,
            readOnly: g,
            disabled: b,
            rows: j,
            onFocus: (e) => {
              ;(M(!0), A?.(e))
            },
            onBlur: (e) => {
              ;(M(!1), y?.(e))
            },
            onAnimationStart: (e) => {
              ;(v?.(e), "native-autofill-in" === e.animationName && T?.())
            },
            "data-lpignore": !x || void 0,
            "data-1p-ignore": !x || void 0,
          }),
        })
      )
    }
  },
  dMvT(e, a, t) {
    var i = t("NwSQ"),
      s = t("DBCl"),
      n = t("T5JX"),
      r = t("Ghh3"),
      l = t("ilGw")
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
          expectedIdentity: p,
          assertCurrent: u,
          isExpectedError: m,
        }) {
          ;(d.throwIfAborted(), u?.())
          let h = new URLSearchParams(window.location.search),
            f = (0, l.f)(h),
            [b, g] = await Promise.all([a, (0, n.Xn)("chatgpt_checkout")])
          ;(d.throwIfAborted(), u?.())
          let _ = b.checkout_source ?? ("unknown" === f ? null : f),
            x = await r.Request.safePost("/payments/checkout", {
              additionalHeaders: { ...g, "ChatGPT-Account-ID": e, [s.zBc]: e },
              signal: d,
              expectedIdentity: p,
              assertRequestCurrent: u,
              isExpectedError: m,
              requestBody: { ...b, checkout_source: _, checkout_appearance: t, cancel_url: o, purchase_attempt_id: c },
            })
          return (
            d.throwIfAborted(),
            u?.(),
            "checkout_session_id" in x && (0, i.FU)(x.checkout_session_id, _, h.get("checkout_from")),
            x
          )
        },
      },
    )
  },
  AFy3(e, a, t) {
    t.d(a, { RosalindApplicationRoute: () => tu })
    var i = t("ABep"),
      s = t("QosV"),
      n = t("zTeN"),
      r = t("zd8w"),
      l = t("HZfM"),
      o = t("EOo5"),
      c = t("OAko"),
      d = t("Ot7V"),
      p = t("zOE4"),
      u = t("OMIV"),
      m = t("UR81"),
      h = t("AGJY"),
      f = t("Wf1j"),
      b = t("SPnB"),
      g = t("SGsN"),
      _ = t("vV6o"),
      x = t("yGJW"),
      A = t("E4mZ"),
      y = t("KJsA"),
      v = t("a6Zv"),
      T = t("UgNy"),
      w = t("iJY0")
    let j = (0, w.a)({
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
    var P = t("oyxz"),
      S = t("qpPf"),
      C = t("Sm6l"),
      I = t("HOLv")
    let R = (0, w.a)({
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
      N = (0, w.a)({
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
    var E = t("Qgfj"),
      L = t("TjgH"),
      O = t("CtJU"),
      M = t("GGiG"),
      D = t("tvcH"),
      k = t("Pk1v")
    function G(e) {
      let a = (0, s.c)(8),
        { status: t } = e
      switch (t) {
        case "created":
        case "pending": {
          let e
          return (
            a[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(P.A, {
                  id: "rosalind.personaStatus.inProgress",
                  defaultMessage: "In progress",
                  description:
                    "Status of a Rosalind Lab applicant's Persona identity verification inquiry that has started but has not been submitted",
                })),
                (a[0] = e))
              : (e = a[0]),
            e
          )
        }
        case "completed": {
          let e
          return (
            a[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(P.A, {
                  id: "rosalind.personaStatus.submitted",
                  defaultMessage: "Information submitted",
                  description:
                    "The applicant has submitted information to Persona for identity verification; this does not mean their identity or Rosalind Lab application has been approved",
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
              ? ((e = (0, i.jsx)(P.A, {
                  id: "rosalind.personaStatus.underReview",
                  defaultMessage: "Under review",
                  description:
                    "The applicant's submitted Persona identity verification information is awaiting review, separate from review of their Rosalind Lab application",
                })),
                (a[2] = e))
              : (e = a[2]),
            e
          )
        }
        case "approved": {
          let e
          return (
            a[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(P.A, {
                  id: "rosalind.personaStatus.approved",
                  defaultMessage: "Verification approved",
                  description:
                    "Persona has approved the applicant's identity verification; this status does not mean their Rosalind Lab application has been approved",
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
              ? ((e = (0, i.jsx)(P.A, {
                  id: "rosalind.personaStatus.declined",
                  defaultMessage: "Verification declined",
                  description:
                    "Persona has declined the applicant's identity verification; this describes the verification decision, not a decision on their Rosalind Lab application",
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
              ? ((e = (0, i.jsx)(P.A, {
                  id: "rosalind.personaStatus.failed",
                  defaultMessage: "Verification failed",
                  description:
                    "The applicant's Persona identity verification attempt failed; this is not a rejection of their Rosalind Lab application",
                })),
                (a[5] = e))
              : (e = a[5]),
            e
          )
        }
        case "expired": {
          let e
          return (
            a[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(P.A, {
                  id: "rosalind.personaStatus.expired",
                  defaultMessage: "Verification expired",
                  description: "The applicant's Persona identity verification inquiry has expired",
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
              ? ((e = (0, i.jsx)(P.A, {
                  id: "rosalind.personaStatus.notConfirmed",
                  defaultMessage: "Not confirmed",
                  description:
                    "No recognized Persona identity verification status is available for the applicant; this does not establish whether they have started or submitted verification",
                })),
                (a[7] = e))
              : (e = a[7]),
            e
          )
        }
      }
    }
    var B = t("sgGK"),
      U = t("OWtl")
    let W = ["lab", "research", "members", "locations", "review"],
      H = (0, n.z8)("LabApplicationScope", { parent: U.u }),
      q = (0, n.vP)(H, () => null),
      $ = (0, n.vP)(H, () => null),
      F = (0, n.vP)(H, ""),
      z = (0, n.vP)(H, ""),
      Y = (0, n.vP)(H, ""),
      V = (0, n.vP)(H, ""),
      K = (0, n.vP)(H, () => []),
      Z = (0, n.vP)(H, () => ["chatgpt-codex"]),
      J = (0, n.vP)(H, () => []),
      X = (0, n.vP)(H, ""),
      Q = (0, n.i1)(H, (e, { get: a }) => ec([e, ...a(J), a(X)].join("\n"))),
      ee = (0, n.vP)(H, ""),
      ea = (0, n.vP)(H, ""),
      et = (0, n.vP)(H, ""),
      ei = (0, n.vP)(H, ""),
      es = (0, n.vP)(H, () => null),
      en = (0, n.vP)(H, () => []),
      er = (0, n.vP)(H, () => []),
      el = (0, n.vP)(H, "")
    function eo(e, a) {
      let t = e.get(q),
        i = a?.answers
      ;(0, n.Y)(e, (e) => {
        ;(e.set(q, null != a && t?.id === a.id ? { ...a, persona_status: t.persona_status } : a),
          e.set($, null),
          e.set(F, i?.lab_name ?? ""),
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
          e.set(en, i?.additional_countries ?? []),
          e.set(er, i?.selected_safeguards ?? []),
          e.set(el, i?.other_safeguard_details ?? ""))
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
        n,
        r,
        l,
        o,
        c,
        d,
        p,
        u = (0, s.c)(25),
        { application: m, onEdit: h } = e
      return (
        u[0] !== h ? ((a = null == h ? void 0 : () => h("lab")), (u[0] = h), (u[1] = a)) : (a = u[1]),
        u[2] !== m || u[3] !== a
          ? ((t = (0, i.jsx)(ep, { application: m, onEdit: a })), (u[2] = m), (u[3] = a), (u[4] = t))
          : (t = u[4]),
        u[5] !== h ? ((n = null == h ? void 0 : () => h("research")), (u[5] = h), (u[6] = n)) : (n = u[6]),
        u[7] !== m || u[8] !== n
          ? ((r = (0, i.jsx)(eu, { application: m, onEdit: n })), (u[7] = m), (u[8] = n), (u[9] = r))
          : (r = u[9]),
        u[10] !== h ? ((l = null == h ? void 0 : () => h("members")), (u[10] = h), (u[11] = l)) : (l = u[11]),
        u[12] !== m || u[13] !== l
          ? ((o = (0, i.jsx)(ef, { application: m, onEdit: l })), (u[12] = m), (u[13] = l), (u[14] = o))
          : (o = u[14]),
        u[15] !== h ? ((c = null == h ? void 0 : () => h("locations")), (u[15] = h), (u[16] = c)) : (c = u[16]),
        u[17] !== m || u[18] !== c
          ? ((d = (0, i.jsx)(eg, { application: m, onEdit: c })), (u[17] = m), (u[18] = c), (u[19] = d))
          : (d = u[19]),
        u[20] !== t || u[21] !== r || u[22] !== o || u[23] !== d
          ? ((p = (0, i.jsxs)("div", { className: "flex flex-col gap-4", children: [t, r, o, d] })),
            (u[20] = t),
            (u[21] = r),
            (u[22] = o),
            (u[23] = d),
            (u[24] = p))
          : (p = u[24]),
        p
      )
    }
    function ep(e) {
      let a,
        t,
        r,
        l,
        c,
        d,
        p,
        u,
        m,
        h,
        f,
        b,
        g,
        _,
        x,
        A,
        y,
        v = (0, s.c)(39),
        { application: T, onEdit: w } = e,
        j = (0, n.Ul)(null == T ? F : (T.answers.lab_name ?? "")),
        S = (0, n.Ul)(null == T ? z : (T.answers.lab_website ?? "")),
        C = (0, n.Ul)(null == T ? Y : (T.answers.lab_lead_responsibilities ?? "")),
        I = (0, n.Ul)(T ?? q),
        R = I?.answers.lab_lead_name,
        N = I?.answers.lab_lead_email,
        { accountId: E, userId: M, email: k } = (0, o.As)()
      v[0] !== E || v[1] !== M ? ((a = { accountId: E, userId: M }), (v[0] = E), (v[1] = M), (v[2] = a)) : (a = v[2])
      let U = null == T
      v[3] !== U ? ((t = { enabled: U }), (v[3] = U), (v[4] = t)) : (t = v[4])
      let { data: W } = (0, n._U)(D.chatGptCurrentUserQuery$, a, t),
        H = null == T && void 0 === R ? W?.name : R,
        $ = null == T && void 0 === N ? k : N
      return (
        v[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(P.A, {
              id: "rosalind.review.lab",
              defaultMessage: "Lab",
              description: "Heading for the lab details summary in a GPT-Rosalind application review",
            })),
            (v[5] = r))
          : (r = v[5]),
        v[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)(P.A, {
              id: "rosalind.review.labName",
              defaultMessage: "Lab name",
              description: "Label for the lab name in a GPT-Rosalind application review",
            })),
            (v[6] = l))
          : (l = v[6]),
        v[7] !== j ? ((c = j.trim() || (0, i.jsx)(ex, {})), (v[7] = j), (v[8] = c)) : (c = v[8]),
        v[9] !== c
          ? ((d = (0, i.jsx)(O.l, { align: "start", spacing: "relaxed", label: l, children: c })),
            (v[9] = c),
            (v[10] = d))
          : (d = v[10]),
        v[11] !== I
          ? ((p =
              null != I &&
              (0, i.jsx)(O.l, {
                align: "start",
                spacing: "relaxed",
                label: (0, i.jsx)(P.A, {
                  id: "rosalind.review.organization",
                  defaultMessage: "Organization",
                  description:
                    "Label for the ChatGPT workspace used to start this lab application, called an organization in this flow",
                }),
                children:
                  I.associated_workspace_name ??
                  (null == I.associated_workspace_id
                    ? (0, i.jsx)(P.A, {
                        id: "rosalind.review.noOrganization",
                        defaultMessage: "No organization associated",
                        description: "Shown when the lab application has no saved ChatGPT workspace association",
                      })
                    : (0, i.jsx)(P.A, {
                        id: "rosalind.review.organizationNameUnavailable",
                        defaultMessage: "Organization name unavailable",
                        description:
                          "Shown when the name of the lab application's saved ChatGPT workspace cannot be retrieved",
                      })),
              })),
            (v[11] = I),
            (v[12] = p))
          : (p = v[12]),
        v[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, i.jsx)(P.A, {
              id: "rosalind.review.labWebsite",
              defaultMessage: "Research page",
              description: "Label for the lab’s research page URL in a GPT-Rosalind application review",
            })),
            (v[13] = u))
          : (u = v[13]),
        v[14] !== S ? ((m = S.trim() || (0, i.jsx)(ex, {})), (v[14] = S), (v[15] = m)) : (m = v[15]),
        v[16] !== m
          ? ((h = (0, i.jsx)(O.l, { align: "start", spacing: "relaxed", label: u, children: m })),
            (v[16] = m),
            (v[17] = h))
          : (h = v[17]),
        v[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, i.jsx)(P.A, {
              id: "rosalind.review.labLead",
              defaultMessage: "Lab lead",
              description: "Label for the lab lead’s name, email, and responsibilities in the application review",
            })),
            (v[18] = f))
          : (f = v[18]),
        v[19] !== H ? ((b = null != H && (0, i.jsx)("p", { children: H })), (v[19] = H), (v[20] = b)) : (b = v[20]),
        v[21] !== $ ? ((g = null != $ && (0, i.jsx)("p", { children: $ })), (v[21] = $), (v[22] = g)) : (g = v[22]),
        v[23] !== C
          ? ((_ = "" !== C.trim() && (0, i.jsx)("p", { className: "pt-1 whitespace-pre-wrap", children: C })),
            (v[23] = C),
            (v[24] = _))
          : (_ = v[24]),
        v[25] !== b || v[26] !== g || v[27] !== _
          ? ((x = (0, i.jsx)(O.l, {
              align: "start",
              spacing: "relaxed",
              label: f,
              children: (0, i.jsxs)("div", { className: "flex min-w-0 flex-col", children: [b, g, _] }),
            })),
            (v[25] = b),
            (v[26] = g),
            (v[27] = _),
            (v[28] = x))
          : (x = v[28]),
        v[29] !== T || v[30] !== I?.persona_status
          ? ((A =
              null == T &&
              (0, i.jsx)(O.l, {
                align: "start",
                spacing: "relaxed",
                label: (0, i.jsx)(P.A, {
                  id: "rosalind.review.verification",
                  defaultMessage: "Applicant verification",
                  description: "Label for the applicant’s identity verification status in the application review",
                }),
                children: (0, i.jsx)(L.E, {
                  variant: "outlinePill",
                  children: (0, i.jsx)(G, { status: I?.persona_status }),
                }),
              })),
            (v[29] = T),
            (v[30] = I?.persona_status),
            (v[31] = A))
          : (A = v[31]),
        v[32] !== w || v[33] !== h || v[34] !== x || v[35] !== A || v[36] !== d || v[37] !== p
          ? ((y = (0, i.jsxs)(B.e, { onEdit: w, title: r, children: [d, p, h, x, A] })),
            (v[32] = w),
            (v[33] = h),
            (v[34] = x),
            (v[35] = A),
            (v[36] = d),
            (v[37] = p),
            (v[38] = y))
          : (y = v[38]),
        y
      )
    }
    function eu(e) {
      let a,
        t,
        r,
        l,
        o,
        c,
        d,
        p,
        u,
        m = (0, s.c)(17),
        { application: h, onEdit: f } = e,
        b = (0, n.Ul)(null == h ? V : (h.answers.research_purpose ?? "")),
        g = (0, n.Ul)(null == h ? K : h.answers.research_scopes),
        _ = (0, n.Ul)(null == h ? Z : h.answers.products)
      return (
        m[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)(P.A, {
              id: "rosalind.review.research",
              defaultMessage: "Research",
              description: "Heading for the research summary in a GPT-Rosalind application review",
            })),
            (m[0] = a))
          : (a = m[0]),
        m[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(P.A, {
              id: "rosalind.review.researchPurpose",
              defaultMessage: "Research purpose",
              description: "Label for the lab’s proposed research in the application review",
            })),
            (m[1] = t))
          : (t = m[1]),
        m[2] !== b ? ((r = b.trim() || (0, i.jsx)(ex, {})), (m[2] = b), (m[3] = r)) : (r = m[3]),
        m[4] !== r
          ? ((l = (0, i.jsx)(O.l, {
              align: "start",
              spacing: "relaxed",
              label: t,
              children: (0, i.jsx)("span", { className: "whitespace-pre-wrap", children: r }),
            })),
            (m[4] = r),
            (m[5] = l))
          : (l = m[5]),
        m[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(P.A, {
              id: "rosalind.review.researchScope",
              defaultMessage: "Research scope",
              description: "Label for the selected research categories in the application review",
            })),
            (m[6] = o))
          : (o = m[6]),
        m[7] !== g
          ? ((c = (0, i.jsx)(O.l, {
              align: "start",
              spacing: "relaxed",
              label: o,
              children:
                null == g || 0 === g.length
                  ? (0, i.jsx)(eA, {})
                  : (0, i.jsx)("span", {
                      children: (0, i.jsx)(E.dT, {
                        type: "unit",
                        value: k.WZ.filter((e) => {
                          let { value: a } = e
                          return g.includes(a)
                        }).map(eh),
                      }),
                    }),
            })),
            (m[7] = g),
            (m[8] = c))
          : (c = m[8]),
        m[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)(P.A, {
              id: "rosalind.review.requestedAccess",
              defaultMessage: "Requested access",
              description: "Label for selected GPT-Rosalind access options in the application review",
            })),
            (m[9] = d))
          : (d = m[9]),
        m[10] !== _
          ? ((p = (0, i.jsx)(O.l, {
              align: "start",
              spacing: "relaxed",
              label: d,
              children:
                null == _ || 0 === _.length
                  ? (0, i.jsx)(eA, {})
                  : (0, i.jsx)("span", {
                      children: (0, i.jsx)(E.dT, {
                        type: "unit",
                        value: k.P2.filter((e) => {
                          let { value: a } = e
                          return _.includes(a)
                        }).map(em),
                      }),
                    }),
            })),
            (m[10] = _),
            (m[11] = p))
          : (p = m[11]),
        m[12] !== f || m[13] !== l || m[14] !== c || m[15] !== p
          ? ((u = (0, i.jsxs)(B.e, { onEdit: f, title: a, children: [l, c, p] })),
            (m[12] = f),
            (m[13] = l),
            (m[14] = c),
            (m[15] = p),
            (m[16] = u))
          : (u = m[16]),
        u
      )
    }
    function em(e) {
      let { label: a } = e
      return a
    }
    function eh(e) {
      let { label: a } = e
      return a
    }
    function ef(e) {
      let a,
        t,
        r,
        l,
        c,
        d,
        p,
        u = (0, s.c)(15),
        { application: m, onEdit: h } = e,
        { email: f } = (0, o.As)()
      u[0] !== m
        ? ((a = null == m ? Q : ec([m.answers.lab_lead_email, ...(m.answers.member_emails ?? [])].join("\n"))),
          (u[0] = m),
          (u[1] = a))
        : (a = u[1])
      let b = (0, n._U)(a, f),
        g = (0, n.Ul)(null == m ? ee : (m.answers.biosafety_contact?.name ?? "")),
        _ = (0, n.Ul)(null == m ? ea : (m.answers.biosafety_contact?.email ?? "")),
        x = (0, n.Ul)(null == m ? et : (m.answers.biosafety_contact?.role ?? ""))
      return (
        u[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(P.A, {
              id: "rosalind.review.members",
              defaultMessage: "Members",
              description: "Heading for the lab member summary in a GPT-Rosalind application review",
            })),
            (u[2] = t))
          : (t = u[2]),
        u[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(P.A, {
              id: "rosalind.review.proposedMembers",
              defaultMessage: "Proposed members",
              description:
                "Label for the applicant’s and proposed lab members’ email addresses in the application review",
            })),
            (u[3] = r))
          : (r = u[3]),
        u[4] !== b
          ? ((l = (0, i.jsx)(O.l, {
              align: "start",
              spacing: "relaxed",
              label: r,
              children:
                0 === b.length
                  ? (0, i.jsx)(ex, {})
                  : (0, i.jsx)("ul", { className: "flex min-w-0 flex-col", children: b.map(eb) }),
            })),
            (u[4] = b),
            (u[5] = l))
          : (l = u[5]),
        u[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, i.jsx)(P.A, {
              id: "rosalind.review.biosafetyContact",
              defaultMessage: "Biosafety contact",
              description: "Label for the trained biosafety contact in the application review",
            })),
            (u[6] = c))
          : (c = u[6]),
        u[7] !== _ || u[8] !== g || u[9] !== x
          ? ((d = (0, i.jsx)(O.l, {
              align: "start",
              spacing: "relaxed",
              label: c,
              children:
                "" === g.trim() && "" === _.trim() && "" === x.trim()
                  ? (0, i.jsx)(ex, {})
                  : (0, i.jsxs)("div", {
                      className: "flex min-w-0 flex-col",
                      children: [
                        "" !== g.trim() && (0, i.jsx)("p", { children: g }),
                        "" !== _.trim() && (0, i.jsx)("p", { children: _ }),
                        "" !== x.trim() && (0, i.jsx)("p", { className: "pt-1 whitespace-pre-wrap", children: x }),
                      ],
                    }),
            })),
            (u[7] = _),
            (u[8] = g),
            (u[9] = x),
            (u[10] = d))
          : (d = u[10]),
        u[11] !== h || u[12] !== l || u[13] !== d
          ? ((p = (0, i.jsxs)(B.e, { onEdit: h, title: t, children: [l, d] })),
            (u[11] = h),
            (u[12] = l),
            (u[13] = d),
            (u[14] = p))
          : (p = u[14]),
        p
      )
    }
    function eb(e) {
      return (0, i.jsx)("li", { children: e }, e)
    }
    function eg(e) {
      let a,
        t,
        r,
        l,
        o,
        c,
        d,
        p,
        u,
        m,
        h = (0, s.c)(29),
        { application: b, onEdit: g } = e,
        _ = (0, f.A)(),
        x = (0, n.Ul)(null == b ? ei : (b.answers.primary_country ?? "")),
        A = (0, n.Ul)(null == b ? es : b.answers.additional_locations),
        y = (0, n.Ul)(null == b ? en : b.answers.additional_countries),
        v = (0, n.Ul)(null == b ? er : b.answers.selected_safeguards),
        T = (0, n.Ul)(null == b ? el : (b.answers.other_safeguard_details ?? ""))
      h[0] === Symbol.for("react.memo_cache_sentinel") ? ((a = (0, i.jsx)(eA, {})), (h[0] = a)) : (a = h[0])
      let w = a
      if ("yes" === A && null != y && y.length > 0) {
        let e, a
        if (h[1] !== y || h[2] !== _) {
          let a
          ;(h[4] !== _ ? ((a = (e) => _.formatDisplayName(e, { type: "region" })), (h[4] = _), (h[5] = a)) : (a = h[5]),
            (e = y.map(a)),
            (h[1] = y),
            (h[2] = _),
            (h[3] = e))
        } else e = h[3]
        ;(h[6] !== e
          ? ((a = (0, i.jsx)("span", { children: (0, i.jsx)(E.dT, { type: "unit", value: e }) })),
            (h[6] = e),
            (h[7] = a))
          : (a = h[7]),
          (w = a))
      } else if ("yes" !== A) {
        let e
        ;(h[8] !== A
          ? ((e =
              k.tp.find((e) => {
                let { id: a } = e
                return a === A
              })?.label ?? (0, i.jsx)(eA, {})),
            (h[8] = A),
            (h[9] = e))
          : (e = h[9]),
          (w = e))
      }
      return (
        h[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(P.A, {
              id: "rosalind.review.locations",
              defaultMessage: "Locations and safeguards",
              description: "Heading for the locations and safeguards summary in a GPT-Rosalind application review",
            })),
            (h[10] = t))
          : (t = h[10]),
        h[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(P.A, {
              id: "rosalind.review.primaryCountry",
              defaultMessage: "Primary access location",
              description: "Label for the primary access country or region in the application review",
            })),
            (h[11] = r))
          : (r = h[11]),
        h[12] !== _ || h[13] !== x
          ? ((l = "" === x ? (0, i.jsx)(ex, {}) : _.formatDisplayName(x, { type: "region" })),
            (h[12] = _),
            (h[13] = x),
            (h[14] = l))
          : (l = h[14]),
        h[15] !== l
          ? ((o = (0, i.jsx)(O.l, { align: "start", spacing: "relaxed", label: r, children: l })),
            (h[15] = l),
            (h[16] = o))
          : (o = h[16]),
        h[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, i.jsx)(P.A, {
              id: "rosalind.review.additionalCountries",
              defaultMessage: "Additional countries or regions",
              description: "Label for access locations outside the primary country in the application review",
            })),
            (h[17] = c))
          : (c = h[17]),
        h[18] !== w
          ? ((d = (0, i.jsx)(O.l, { align: "start", spacing: "relaxed", label: c, children: w })),
            (h[18] = w),
            (h[19] = d))
          : (d = h[19]),
        h[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsx)(P.A, {
              id: "rosalind.review.safeguards",
              defaultMessage: "Safeguards",
              description: "Label for the lab’s selected research safeguards in the application review",
            })),
            (h[20] = p))
          : (p = h[20]),
        h[21] !== T || h[22] !== v
          ? ((u = (0, i.jsx)(O.l, {
              align: "start",
              spacing: "relaxed",
              label: p,
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
                          }).map(e_),
                        }),
                        v.includes("other") &&
                          "" !== T.trim() &&
                          (0, i.jsx)("p", { className: "whitespace-pre-wrap", children: T }),
                      ],
                    }),
            })),
            (h[21] = T),
            (h[22] = v),
            (h[23] = u))
          : (u = h[23]),
        h[24] !== g || h[25] !== o || h[26] !== d || h[27] !== u
          ? ((m = (0, i.jsxs)(B.e, { onEdit: g, title: t, children: [o, d, u] })),
            (h[24] = g),
            (h[25] = o),
            (h[26] = d),
            (h[27] = u),
            (h[28] = m))
          : (m = h[28]),
        m
      )
    }
    function e_(e) {
      let { value: a, label: t } = e
      return (0, i.jsx)("li", { children: t }, a)
    }
    function ex() {
      let e,
        a = (0, s.c)(1)
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(P.A, {
              id: "rosalind.review.notProvided",
              defaultMessage: "Not provided",
              description: "Review summary value when the applicant has not entered text or contact details",
            })),
            (a[0] = e))
          : (e = a[0]),
        e
      )
    }
    function eA() {
      let e,
        a = (0, s.c)(1)
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(P.A, {
              id: "rosalind.review.notSpecified",
              defaultMessage: "Not specified",
              description: "Review summary value when the applicant has not selected an option",
            })),
            (a[0] = e))
          : (e = a[0]),
        e
      )
    }
    var ey = t("zKCW"),
      ev = t("JNtf"),
      eT = t("mUDD")
    function ew(e) {
      let a,
        t,
        n,
        r,
        l,
        o,
        c,
        d,
        p = (0, s.c)(13),
        { onClose: u } = e
      return (
        p[0] !== u
          ? ((a = (e) => {
              e || u()
            }),
            (p[0] = u),
            (p[1] = a))
          : (a = p[1]),
        p[2] !== u
          ? ((t = (e) => {
              ;(e.preventDefault(), u())
            }),
            (p[2] = u),
            (p[3] = t))
          : (t = p[3]),
        p[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(ev.L3, { children: (0, i.jsx)(P.A, { ...eS.title }) })), (p[4] = n))
          : (n = p[4]),
        p[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(eT.OO, {
              children: (0, i.jsx)(eT.c7, {
                title: n,
                subtitle: (0, i.jsx)(ev.rr, { children: (0, i.jsx)(P.A, { ...eS.subtitle }) }),
                subtitleSize: "sm",
              }),
            })),
            (p[5] = r))
          : (r = p[5]),
        p[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)(eT.OO, {
              children: (0, i.jsx)("div", {
                className: "flex flex-col gap-3 text-sm text-secondary",
                children: (0, i.jsx)(eP, {}),
              }),
            })),
            (p[6] = l))
          : (l = p[6]),
        p[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(eT.OO, {
              children: (0, i.jsx)(eT.Es, {
                expandSingleButton: !1,
                children: (0, i.jsx)(C.$, {
                  color: "primary",
                  type: "submit",
                  children: (0, i.jsx)(P.A, {
                    id: "rosalind.labVerificationReminder.dismiss",
                    defaultMessage: "Got it",
                    description:
                      "Dismiss the identity verification email reminder and remain on the submitted lab application page; this does not complete verification or approve the application",
                  }),
                }),
              }),
            })),
            (p[7] = o))
          : (o = p[7]),
        p[8] !== t
          ? ((c = (0, i.jsxs)(eT.R4, { as: "form", onSubmit: t, children: [r, l, o] })), (p[8] = t), (p[9] = c))
          : (c = p[9]),
        p[10] !== a || p[11] !== c
          ? ((d = (0, i.jsx)(ev.lG, { open: !0, size: "compact", onOpenChange: a, children: c })),
            (p[10] = a),
            (p[11] = c),
            (p[12] = d))
          : (d = p[12]),
        d
      )
    }
    function ej() {
      let e,
        a = (0, s.c)(1)
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(ey.l, {
              type: "warning",
              layout: "vertical",
              role: "status",
              title: (0, i.jsx)(P.A, { ...eS.title }),
              content: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("p", { children: (0, i.jsx)(P.A, { ...eS.subtitle }) }), (0, i.jsx)(eP, {})],
              }),
            })),
            (a[0] = e))
          : (e = a[0]),
        e
      )
    }
    function eP() {
      let e,
        a = (0, s.c)(1)
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("p", {
                  children: (0, i.jsx)(P.A, {
                    id: "rosalind.labVerificationReminder.status",
                    defaultMessage: "Your application is submitted. Identity verification is still pending.",
                    description:
                      "Explains that final lab application submission succeeded but identity verification is not yet complete",
                  }),
                }),
                (0, i.jsx)("p", {
                  children: (0, i.jsx)(P.A, {
                    id: "rosalind.labVerificationReminder.instructions",
                    defaultMessage:
                      "Look for a message from Persona at your application email address. Follow the instructions to finish identity verification and complete your application.",
                    description:
                      "Tells a lab applicant to check the email address used for their application for Persona's identity verification instructions and complete that last step",
                  }),
                }),
                (0, i.jsx)("p", {
                  children: (0, i.jsx)(P.A, {
                    id: "rosalind.labVerificationReminder.spam",
                    defaultMessage: "Can’t find it? Check your spam or junk folder.",
                    description: "Help for lab applicants who cannot find the Persona identity verification email",
                  }),
                }),
              ],
            })),
            (a[0] = e))
          : (e = a[0]),
        e
      )
    }
    let eS = (0, E.YK)({
      title: {
        id: "rosalind.labVerificationReminder.title",
        defaultMessage: "Check your email",
        description:
          "Prominent heading asking a submitted lab applicant to look for Persona identity verification instructions in their email",
      },
      subtitle: {
        id: "rosalind.labVerificationReminder.subtitle",
        defaultMessage: "One last step to complete your application",
        description:
          "Subtitle explaining that identity verification remains after submitting a lab application; completing it does not mean access is approved",
      },
    })
    var eC = t("ZtSy"),
      eI = t("JIuM"),
      eR = t("LhhH")
    function eN() {
      let e,
        a,
        t,
        n,
        r,
        l = (0, s.c)(11)
      l[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = { preview: !1 }), (l[0] = e)) : (e = l[0])
      let { data: o } = (0, c.YL)(void 0, e),
        d = (0, eI.Dv)(o?.structure === "workspace" ? o.profile_picture_url : null)
      if (o?.structure !== "workspace") return null
      l[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, i.jsx)("h2", {
            className: "text-xs text-secondary",
            children: (0, i.jsx)(P.A, {
              id: "account.currentOrganization.heading",
              defaultMessage: "Current organization:",
              description: "Label above the currently selected organization’s name and avatar",
            }),
          })),
          (l[1] = a))
        : (a = l[1])
      let p = o.name ?? null
      return (
        l[2] !== o.id || l[3] !== d || l[4] !== p
          ? ((t = (0, i.jsx)(eR.e, { alt: "", colorKey: o.id, name: p, size: "md", shape: "square", src: d })),
            (l[2] = o.id),
            (l[3] = d),
            (l[4] = p),
            (l[5] = t))
          : (t = l[5]),
        l[6] !== o.name
          ? ((n = (0, i.jsx)("span", { className: "min-w-0 text-base break-words", children: o.name })),
            (l[6] = o.name),
            (l[7] = n))
          : (n = l[7]),
        l[8] !== t || l[9] !== n
          ? ((r = (0, i.jsxs)("section", {
              className: "flex flex-col gap-4 border-b border-default pb-6 select-text",
              children: [a, (0, i.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [t, n] })],
            })),
            (l[8] = t),
            (l[9] = n),
            (l[10] = r))
          : (r = l[10]),
        r
      )
    }
    function eE(e) {
      return (
        e?.structure === "workspace" &&
        ("account-owner" === e.account_user_role || "account-admin" === e.account_user_role)
      )
    }
    var eL = t("iE0s")
    function eO(e) {
      return (0, i.jsx)(
        eC.G,
        { appearance: "primary", href: eL.n3, initiator: "external_link", underline: "always", children: e },
        "learn-more",
      )
    }
    function eM(e) {
      let a,
        t,
        n,
        r,
        l,
        o,
        d = (0, s.c)(12),
        { awaitingReview: p } = e
      d[0] === Symbol.for("react.memo_cache_sentinel") ? ((a = { preview: !1 }), (d[0] = a)) : (a = d[0])
      let { data: u } = (0, c.YL)(void 0, a)
      d[1] !== u ? ((t = eE(u)), (d[1] = u), (d[2] = t)) : (t = d[2])
      let m = t
      if (void 0 !== p && p) {
        let e
        ;(d[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(P.A, {
              id: "rosalind.applicationStatus.submittedIntroductionWithLinks",
              defaultMessage:
                "Thanks for submitting your application for extended <model>GPT-Rosalind</model> access. We will start reviewing applications on Oct 22. <learnMore>Learn more</learnMore>",
              description:
                "Introduction shown after a GPT-Rosalind access application has been submitted and is awaiting review. Application reviews begin on October 22, 2026; this is not a promised decision date. The model tag links to the GPT-Rosalind product page. The learnMore tag links to the Help Center article about the Rosalind Academic Plan promotion.",
              values: { model: eD, learnMore: eO },
            })),
            (d[3] = e))
          : (e = d[3]),
          (n = e))
      } else {
        let e
        ;(d[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(P.A, {
              id: "rosalind.labEntrypoint.introduction",
              defaultMessage:
                "Apply for expanded access to <model>GPT-Rosalind</model> for scientific research in ChatGPT, Codex, or the API. You’ll be listed as your lab’s principal investigator or lab lead.",
              description:
                "Introduction to applying for expanded GPT-Rosalind access as a lab leader. The model tag links the model name to the Rosalind information page.",
              values: { model: eD },
            })),
            (d[4] = e))
          : (e = d[4]),
          (n = e))
      }
      return (
        d[5] !== m ? ((r = m && (0, i.jsx)(eN, {})), (d[5] = m), (d[6] = r)) : (r = d[6]),
        d[7] !== n
          ? ((l = (0, i.jsx)("p", { className: "text-base leading-relaxed text-secondary", children: n })),
            (d[7] = n),
            (d[8] = l))
          : (l = d[8]),
        d[9] !== r || d[10] !== l
          ? ((o = (0, i.jsxs)(i.Fragment, { children: [r, l] })), (d[9] = r), (d[10] = l), (d[11] = o))
          : (o = d[11]),
        o
      )
    }
    function eD(e) {
      return (0, i.jsx)(
        eC.G,
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
    function eG(e) {
      let a,
        t,
        n,
        r,
        l,
        o,
        c,
        d,
        p,
        u,
        m,
        h,
        b,
        g,
        _,
        x,
        A,
        y,
        v,
        T,
        w,
        j,
        S = (0, s.c)(57),
        { application: M, onCancel: D, actions: k, statusContent: G, progress: B, detailsOpen: U } = e,
        W = (0, f.A)(),
        { answers: H, state: q, submitted_at: $ } = M,
        F = "submitting" === q ? "submitting" : "submitted",
        z = "info"
      ;("in_progress" === q || "action_required" === q
        ? (F = "in_progress")
        : ("approved" === q || "denied" === q || "canceled" === q) && (F = "decision"),
        "approved" === q
          ? (z = "success")
          : "denied" === q
            ? (z = "danger")
            : "action_required" === q && (z = "warning"),
        S[0] !== W
          ? ((a = W.formatMessage({
              id: "rosalind.applicationStatus.label",
              defaultMessage: "Lab application status",
              description: "Accessible label for the status and submitted answers of a GPT-Rosalind lab application",
            })),
            (S[0] = W),
            (S[1] = a))
          : (a = S[1]),
        S[2] !== q ? ((t = (0, i.jsx)(eM, { awaitingReview: "submitted" === q })), (S[2] = q), (S[3] = t)) : (t = S[3]),
        S[4] !== F || S[5] !== B
          ? ((n = B ?? (0, i.jsx)(eB, { currentStep: F })), (S[4] = F), (S[5] = B), (S[6] = n))
          : (n = S[6]),
        S[7] !== M || S[8] !== q || S[9] !== G
          ? ((r =
              G ??
              (ek(M)
                ? (0, i.jsx)(ej, {})
                : (0, i.jsx)("p", {
                    className: "leading-relaxed text-secondary",
                    role: "status",
                    children: (0, i.jsx)(P.A, {
                      id: "rosalind.applicationStatus.description",
                      defaultMessage:
                        "{state, select, submitting {Your application is saved, but submission isn’t complete} submitted {Your lab’s application is awaiting review} in_progress {We’re reviewing your lab’s application. No action is required from you right now.} action_required {Your lab’s application requires additional action before review can continue} approved {Your lab’s application has been approved. Workspace setup is pending.} denied {Your application has been denied} canceled {Your application has been canceled} other {Your application has not been submitted}}",
                      description:
                        "Explains the current review state of a GPT-Rosalind lab application. Submitting is saved but incomplete, submitted is awaiting review, in_progress is under review, action_required needs more action, approved awaits workspace setup, denied was rejected, and canceled was withdrawn.",
                      values: { state: q },
                    }),
                  }))),
            (S[7] = M),
            (S[8] = q),
            (S[9] = G),
            (S[10] = r))
          : (r = S[10]),
        S[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)(P.A, {
              id: "rosalind.applicationStatus.status",
              defaultMessage: "Status",
              description: "Label for the current state of a submitted GPT-Rosalind lab application",
            })),
            (S[11] = l))
          : (l = S[11]))
      let Y = eU[q]
      return (
        S[12] !== Y ? ((o = (0, i.jsx)(P.A, { ...Y })), (S[12] = Y), (S[13] = o)) : (o = S[13]),
        S[14] !== z || S[15] !== o
          ? ((c = (0, i.jsx)(O.l, {
              align: "start",
              spacing: "relaxed",
              label: l,
              children: (0, i.jsx)(L.E, { variant: z, children: o }),
            })),
            (S[14] = z),
            (S[15] = o),
            (S[16] = c))
          : (c = S[16]),
        S[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)(P.A, {
              id: "rosalind.applicationStatus.lab",
              defaultMessage: "Lab",
              description: "Label for the lab name on the GPT-Rosalind application status page",
            })),
            (S[17] = d))
          : (d = S[17]),
        S[18] !== H.lab_name
          ? ((p = (0, i.jsx)(O.l, { align: "start", spacing: "relaxed", label: d, children: H.lab_name })),
            (S[18] = H.lab_name),
            (S[19] = p))
          : (p = S[19]),
        S[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, i.jsx)(P.A, {
              id: "rosalind.applicationStatus.reference",
              defaultMessage: "Application reference",
              description: "Label for the reference identifier of the submitted GPT-Rosalind lab application",
            })),
            (S[20] = u))
          : (u = S[20]),
        S[21] !== M.id
          ? ((m = (0, i.jsx)(O.l, {
              align: "start",
              spacing: "relaxed",
              label: u,
              children: (0, i.jsx)("span", { className: "font-mono", children: M.id }),
            })),
            (S[21] = M.id),
            (S[22] = m))
          : (m = S[22]),
        S[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, i.jsx)(P.A, {
              id: "rosalind.applicationStatus.applicant",
              defaultMessage: "Applicant",
              description: "Label for the applicant’s name and email on the GPT-Rosalind lab application status page",
            })),
            (S[23] = h))
          : (h = S[23]),
        S[24] !== H.lab_lead_name
          ? ((b = null != H.lab_lead_name && (0, i.jsx)("p", { children: H.lab_lead_name })),
            (S[24] = H.lab_lead_name),
            (S[25] = b))
          : (b = S[25]),
        S[26] !== H.lab_lead_email
          ? ((g = null != H.lab_lead_email && (0, i.jsx)("p", { children: H.lab_lead_email })),
            (S[26] = H.lab_lead_email),
            (S[27] = g))
          : (g = S[27]),
        S[28] !== b || S[29] !== g
          ? ((_ = (0, i.jsx)(O.l, {
              align: "start",
              spacing: "relaxed",
              label: h,
              children: (0, i.jsxs)("div", { className: "flex min-w-0 flex-col", children: [b, g] }),
            })),
            (S[28] = b),
            (S[29] = g),
            (S[30] = _))
          : (_ = S[30]),
        S[31] !== $
          ? ((x =
              null != $ &&
              (0, i.jsx)(O.l, {
                align: "start",
                spacing: "relaxed",
                label: (0, i.jsx)(P.A, { ...eU.submitted }),
                children: (0, i.jsx)(E.XU, { value: $, year: "numeric", month: "short", day: "numeric" }),
              })),
            (S[31] = $),
            (S[32] = x))
          : (x = S[32]),
        S[33] !== p || S[34] !== m || S[35] !== _ || S[36] !== x || S[37] !== c
          ? ((A = (0, i.jsxs)("dl", {
              className:
                "@container divide-y divide-border border-t border-default select-text [--detail-property-label-width:theme(spacing.32)] [--detail-row-font-size:var(--text-sm)]",
              children: [c, p, m, _, x],
            })),
            (S[33] = p),
            (S[34] = m),
            (S[35] = _),
            (S[36] = x),
            (S[37] = c),
            (S[38] = A))
          : (A = S[38]),
        S[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, i.jsxs)("summary", {
              className:
                "flex cursor-interaction list-none items-center justify-between gap-4 font-medium select-none marker:hidden",
              children: [
                (0, i.jsx)(P.A, {
                  id: "rosalind.applicationStatus.details",
                  defaultMessage: "Application details",
                  description: "Expandable section showing the answers submitted in a GPT-Rosalind lab application",
                }),
                (0, i.jsx)(I.I, { className: "shrink-0 group-open:hidden", asset: N }),
                (0, i.jsx)(I.I, { className: "hidden shrink-0 group-open:block", asset: R }),
              ],
            })),
            (S[39] = y))
          : (y = S[39]),
        S[40] !== M
          ? ((v = (0, i.jsx)("div", { className: "pt-4", children: (0, i.jsx)(ed, { application: M }) })),
            (S[40] = M),
            (S[41] = v))
          : (v = S[41]),
        S[42] !== U || S[43] !== v
          ? ((T = (0, i.jsxs)("details", {
              className: "group rounded-xl border border-default p-4",
              open: U,
              children: [y, v],
            })),
            (S[42] = U),
            (S[43] = v),
            (S[44] = T))
          : (T = S[44]),
        S[45] !== D || S[46] !== q
          ? ((w =
              null != D &&
              ("submitting" === q || "submitted" === q || "in_progress" === q || "action_required" === q) &&
              (0, i.jsx)(C.$, {
                className: "w-full self-start sm:w-auto",
                color: "outline",
                onClick: D,
                size: "beaconAction",
                type: "button",
                children: (0, i.jsx)(P.A, {
                  id: "rosalind.applicationStatus.cancel",
                  defaultMessage: "Cancel application",
                  description:
                    "Button to open confirmation before withdrawing a GPT-Rosalind lab application that has not received a review decision",
                }),
              })),
            (S[45] = D),
            (S[46] = q),
            (S[47] = w))
          : (w = S[47]),
        S[48] !== k ||
        S[49] !== a ||
        S[50] !== A ||
        S[51] !== t ||
        S[52] !== T ||
        S[53] !== w ||
        S[54] !== n ||
        S[55] !== r
          ? ((j = (0, i.jsxs)("section", {
              className:
                "flex flex-col gap-6 rounded-2xl border border-default bg-surface p-4.5 text-sm text-default select-text sm:p-6",
              "aria-label": a,
              children: [t, n, r, A, T, w, k],
            })),
            (S[48] = k),
            (S[49] = a),
            (S[50] = A),
            (S[51] = t),
            (S[52] = T),
            (S[53] = w),
            (S[54] = n),
            (S[55] = r),
            (S[56] = j))
          : (j = S[56]),
        j
      )
    }
    function eB(e) {
      let a,
        t,
        n,
        r,
        l,
        o,
        c = (0, s.c)(18),
        { currentStep: d } = e,
        p = (0, f.A)(),
        u = "submitting" === d ? eU.submitting : eU.submitted
      if (
        (c[0] !== u
          ? ((a = { id: "submitted", label: (0, i.jsx)(P.A, { ...u }) }), (c[0] = u), (c[1] = a))
          : (a = c[1]),
        c[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = { id: "in_progress", label: (0, i.jsx)(P.A, { ...eU.in_progress }) }), (c[2] = t))
          : (t = c[2]),
        c[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = { id: "decision", label: (0, i.jsx)(P.A, { ...eU.decision }) }), (c[3] = n))
          : (n = c[3]),
        c[4] !== d || c[5] !== a)
      ) {
        if (((r = [a, t, n]), "activation" === d || "complete" === d)) {
          let e,
            a,
            t = eU[d]
          ;(c[7] !== t ? ((e = (0, i.jsx)(P.A, { ...t })), (c[7] = t), (c[8] = e)) : (e = c[8]),
            c[9] !== d || c[10] !== e ? ((a = { id: d, label: e }), (c[9] = d), (c[10] = e), (c[11] = a)) : (a = c[11]),
            r.push(a))
        }
        ;((c[4] = d), (c[5] = a), (c[6] = r))
      } else r = c[6]
      let m = "submitting" === d ? "submitted" : d
      return (
        c[12] !== p
          ? ((l = p.formatMessage({
              id: "rosalind.applicationStatus.progress",
              defaultMessage: "Application progress",
              description:
                "Accessible label for progress through lab application submission, review, decision, and workspace activation or completion",
            })),
            (c[12] = p),
            (c[13] = l))
          : (l = c[13]),
        c[14] !== r || c[15] !== m || c[16] !== l
          ? ((o = (0, i.jsx)(M.K, { currentStep: m, distribute: !0, ariaLabel: l, steps: r })),
            (c[14] = r),
            (c[15] = m),
            (c[16] = l),
            (c[17] = o))
          : (o = c[17]),
        o
      )
    }
    let eU = (0, E.YK)({
      draft: {
        id: "rosalind.applicationStatus.draft",
        defaultMessage: "Draft",
        description: "Status of a GPT-Rosalind lab application that has not been submitted",
      },
      submitting: {
        id: "rosalind.applicationStatus.submitting",
        defaultMessage: "Submission incomplete",
        description: "Status of a GPT-Rosalind lab application that is saved but has not finished submitting",
      },
      submitted: {
        id: "rosalind.applicationStatus.submitted",
        defaultMessage: "Submitted",
        description:
          "Submitted status, submission progress step, or submission date label for a GPT-Rosalind lab application",
      },
      in_progress: {
        id: "rosalind.applicationStatus.inReview",
        defaultMessage: "In review",
        description: "Status and progress step for a GPT-Rosalind lab application under review",
      },
      action_required: {
        id: "rosalind.applicationStatus.actionRequired",
        defaultMessage: "Action required",
        description: "Status of a GPT-Rosalind lab application needing additional action before review can continue",
      },
      approved: {
        id: "rosalind.applicationStatus.approved",
        defaultMessage: "Approved",
        description: "Status of an approved GPT-Rosalind lab application",
      },
      denied: {
        id: "rosalind.applicationStatus.denied",
        defaultMessage: "Denied",
        description: "Status of a rejected GPT-Rosalind lab application",
      },
      canceled: {
        id: "rosalind.applicationStatus.canceled",
        defaultMessage: "Canceled",
        description: "Status of a withdrawn GPT-Rosalind lab application",
      },
      decision: {
        id: "rosalind.applicationStatus.decision",
        defaultMessage: "Decision",
        description: "Progress step for the review decision on a GPT-Rosalind lab application",
      },
      activation: {
        id: "rosalind.labActivation.step.activation",
        defaultMessage: "Activation",
        description: "Current activation review step for an approved lab application",
      },
      complete: {
        id: "rosalind.labActivation.step.complete",
        defaultMessage: "Complete",
        description:
          "Final progress step after an approved lab application has completed activation and its academic workspace has been created",
      },
    })
    var eW = t("wgaZ"),
      eH = t("T1PX"),
      eq = t("zLIa"),
      e$ = t("djbx")
    function eF(e) {
      let a,
        t,
        n,
        r,
        l,
        o = (0, s.c)(18),
        { id: c, checked: d, onCheckedChange: p, label: u, description: m, invalid: h } = e,
        f = null == m ? void 0 : `${c}-description`
      return (
        o[0] !== d || o[1] !== c || o[2] !== h || o[3] !== p || o[4] !== f
          ? ((a = (0, i.jsx)(e$.S, {
              id: c,
              className: "mt-0.5",
              "aria-describedby": f,
              "aria-invalid": h,
              checked: d,
              onCheckedChange: p,
              size: "sm",
              variant: "choice",
            })),
            (o[0] = d),
            (o[1] = c),
            (o[2] = h),
            (o[3] = p),
            (o[4] = f),
            (o[5] = a))
          : (a = o[5]),
        o[6] !== c || o[7] !== u
          ? ((t = (0, i.jsx)("label", {
              className: "cursor-interaction text-sm leading-4.5 select-none",
              htmlFor: c,
              children: u,
            })),
            (o[6] = c),
            (o[7] = u),
            (o[8] = t))
          : (t = o[8]),
        o[9] !== m || o[10] !== c
          ? ((n = null != m && (0, i.jsx)(eW.Rr, { id: `${c}-description`, size: "body", children: m })),
            (o[9] = m),
            (o[10] = c),
            (o[11] = n))
          : (n = o[11]),
        o[12] !== t || o[13] !== n
          ? ((r = (0, i.jsxs)("div", { className: "flex min-w-0 flex-col gap-0.5", children: [t, n] })),
            (o[12] = t),
            (o[13] = n),
            (o[14] = r))
          : (r = o[14]),
        o[15] !== a || o[16] !== r
          ? ((l = (0, i.jsxs)("div", { className: "relative flex items-start gap-2.5", children: [a, r] })),
            (o[15] = a),
            (o[16] = r),
            (o[17] = l))
          : (l = o[17]),
        l
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
        n,
        r,
        l,
        o,
        c,
        d = (0, s.c)(8)
      return (
        d[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(eW.I3, {
              children: (0, i.jsx)(P.A, {
                id: "rosalind.labActivation.responsibilities.title",
                defaultMessage: "Your responsibilities",
                description: "Heading for a lab lead’s responsibilities when activating GPT-Rosalind access",
              }),
            })),
            (d[0] = e))
          : (e = d[0]),
        d[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsxs)("ul", {
              className: "flex list-disc flex-col gap-2.5 ps-4.5 text-secondary",
              children: [
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(P.A, {
                    id: "rosalind.labActivation.responsibilities.membersSummary",
                    defaultMessage:
                      "Manage access for up to 30 eligible lab members: faculty, staff, postdocs, and supervised graduate students",
                    description: "Summary of the membership limit and eligible roles for GPT-Rosalind lab access",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(P.A, {
                    id: "rosalind.labActivation.responsibilities.rosterSummary",
                    defaultMessage:
                      "Keep lab membership and your institutional safety contact current, and remove ineligible members",
                    description:
                      "Summary of the lab lead’s duty to maintain membership eligibility and a current institutional safety contact",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(P.A, {
                    id: "rosalind.labActivation.responsibilities.researchSummary",
                    defaultMessage: "Follow applicable research, security, and data-handling requirements",
                    description: "Summary of the requirements that govern a lab’s use of GPT-Rosalind",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(P.A, {
                    id: "rosalind.labActivation.responsibilities.reportingSummary",
                    defaultMessage:
                      "Report suspected misuse or security incidents within 24 hours and cooperate with follow-up",
                    description:
                      "Summary of the lab lead’s duty to report suspected misuse or security incidents within 24 hours",
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
                (0, i.jsx)(P.A, {
                  id: "rosalind.labActivation.responsibilities.expand",
                  defaultMessage: "View all lab responsibilities and safety guidance",
                  description:
                    "Disclosure control that expands the full responsibilities and safety guidance for GPT-Rosalind lab access",
                }),
                (0, i.jsx)(I.I, { className: "shrink-0 group-open:hidden", asset: N }),
                (0, i.jsx)(I.I, { className: "hidden shrink-0 group-open:block", asset: R }),
              ],
            })),
            (d[2] = t))
          : (t = d[2]),
        d[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(eW.Rr, {
              size: "body",
              children: (0, i.jsx)(P.A, {
                id: "rosalind.labActivation.responsibilities.safetyDocuments",
                defaultMessage:
                  "Review the <biosafety>biosafety overview</biosafety> and <deployment>safe deployment best practices</deployment> before accepting",
                description: "Links to required biosafety and safe deployment PDFs",
                values: { biosafety: eX, deployment: eJ },
              }),
            })),
            (d[3] = n))
          : (n = d[3]),
        d[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsxs)("ul", {
              className: "flex list-disc flex-col gap-2.5 ps-4.5 text-secondary",
              children: [
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(P.A, {
                    id: "rosalind.labActivation.responsibilities.members",
                    defaultMessage:
                      "Limit access to 30 named members, including the lab lead, using institutional email addresses. Eligible members include faculty, staff, postdocs, and supervised graduate students; undergraduates are not eligible by default.",
                    description:
                      "Guidance on the total named-member limit, institutional email requirement, and eligible academic roles",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(P.A, {
                    id: "rosalind.labActivation.responsibilities.roster",
                    defaultMessage:
                      "Maintain an accurate roster and appropriate supervision, promptly remove departed or ineligible members, and revalidate membership annually",
                    description:
                      "Guidance requiring current membership records, supervision, removal of ineligible members, and annual revalidation",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(P.A, {
                    id: "rosalind.labActivation.responsibilities.research",
                    defaultMessage:
                      "Follow approved research, security, geography, and data-handling requirements, never share credentials, and ensure qualified human review of outputs",
                    description:
                      "Guidance on approved research scope, security, geographic and data restrictions, individual credentials, and qualified human review",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(P.A, {
                    id: "rosalind.labActivation.responsibilities.safety",
                    defaultMessage:
                      "Maintain an institutional safety contact, share these responsibilities with members, and maintain controls for misconduct and insider risks",
                    description:
                      "Guidance on the institutional safety contact, communicating member duties, and controls for misconduct and insider risks",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(P.A, {
                    id: "rosalind.labActivation.responsibilities.reporting",
                    defaultMessage:
                      "Notify OpenAI within 24 hours of suspected misuse, unauthorized access, account compromise, or policy violations, cooperate with follow-up, and report material changes to research scope or oversight",
                    description:
                      "Guidance on reporting incidents to OpenAI within 24 hours, cooperating with review, and reporting significant research or oversight changes",
                  }),
                }),
              ],
            })),
            (d[4] = r))
          : (r = d[4]),
        d[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)(eW.Rr, {
              size: "body",
              children: (0, i.jsx)(P.A, {
                id: "rosalind.labActivation.responsibilities.affiliation",
                defaultMessage:
                  "Confirm each member’s institutional affiliation and explain permitted uses, supervision, and how to report concerns, including concerns involving a supervisor. Remove access when affiliation or supervision ends, or access is no longer needed.",
                description:
                  "Guidance on verifying member affiliation, communicating permitted uses and reporting paths including concerns about supervisors, and removing access when no longer appropriate",
              }),
            })),
            (d[5] = l))
          : (l = d[5]),
        d[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(eW.Rr, {
              size: "body",
              children: (0, i.jsx)(P.A, {
                id: "rosalind.labActivation.responsibilities.humanReview",
                defaultMessage:
                  "Consequential outputs require qualified human review before they inform research decisions or actions",
                description:
                  "Guidance requiring qualified human review before consequential model outputs inform research decisions or actions",
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
                        n,
                        r,
                        l,
                        o,
                        (0, i.jsx)(eW.Rr, {
                          size: "body",
                          children: (0, i.jsx)(P.A, {
                            id: "rosalind.labActivation.responsibilities.authority",
                            defaultMessage:
                              "Institutional authorization and any required Responsible Official approval are separate from the principal investigator’s confirmation",
                            description:
                              "Guidance distinguishing institutional authorization and Responsible Official approval from the principal investigator’s own confirmation",
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
      return (0, i.jsx)(eC.G, { href: eK, initiator: "external_link", underline: "always", children: e }, "deployment")
    }
    function eX(e) {
      return (0, i.jsx)(eC.G, { href: eV, initiator: "external_link", underline: "always", children: e }, "biosafety")
    }
    function eQ(e) {
      let a,
        t,
        n,
        l,
        o,
        c,
        d,
        p,
        u,
        m,
        h,
        f,
        b,
        g,
        _,
        x,
        A,
        y,
        v,
        T,
        w,
        j,
        S,
        I,
        R,
        N,
        E,
        L,
        O,
        M,
        D,
        k,
        G,
        B,
        U,
        W = (0, s.c)(95),
        {
          checkoutFailed: H,
          checkoutPending: q,
          onAccept: $,
          application: F,
          onBack: z,
          onSaveRetentionRequest: Y,
        } = e,
        V = void 0 !== H && H,
        K = void 0 !== q && q,
        Z = (0, r.useId)(),
        J = F.activation_acceptance?.consent,
        X = null != J,
        Q = F.activation_version === eY,
        ee = F.activation_fingerprint,
        ea = null != J && (J.version !== eY || J.application_fingerprint !== ee),
        et = (0, r.useRef)(null)
      ;(W[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = () => {
            let e = new AbortController()
            return ((et.current = e), () => e.abort())
          }),
          (t = []),
          (W[0] = a),
          (W[1] = t))
        : ((a = W[0]), (t = W[1])),
        (0, r.useEffect)(a, t))
      let [ei, es] = (0, r.useState)(J?.responsibilities_accepted ?? !1),
        [en, er] = (0, r.useState)(J?.terms_accepted ?? !1),
        [el, eo] = (0, r.useState)(
          null != J ? null != J.enhanced_retention_reason : (F.enhanced_retention_request?.requested ?? !1),
        ),
        [ec, ed] = (0, r.useState)(
          null != J ? (J.enhanced_retention_reason ?? "") : (F.enhanced_retention_request?.reason ?? ""),
        ),
        [ep, eu] = (0, r.useState)(!1),
        em = (0, r.useRef)(null),
        eh = X || null != Y,
        ef = ei && en
      W[2] !== ec ? ((l = Array.from((n = ec.trim()))), (W[2] = ec), (W[3] = n), (W[4] = l)) : ((n = W[3]), (l = W[4]))
      let eb = l.length,
        eg = el && (0 === eb || eb > 4e3)
      W[5] !== X ||
      W[6] !== eh ||
      W[7] !== K ||
      W[8] !== ef ||
      W[9] !== Q ||
      W[10] !== el ||
      W[11] !== ee ||
      W[12] !== eg ||
      W[13] !== $ ||
      W[14] !== Y ||
      W[15] !== ep ||
      W[16] !== n ||
      W[17] !== ei ||
      W[18] !== J ||
      W[19] !== ea ||
      W[20] !== en
        ? ((o = async function () {
            if (!eh || !ef || !Q || ea || null == ee || ep || K || null == $) return
            if (eg) return void em.current?.focus()
            let e = J ?? {
              version: eY,
              application_fingerprint: ee,
              responsibilities_accepted: ei,
              terms_accepted: en,
              enhanced_retention_reason: el ? n : null,
            }
            if ((eu(!0), X)) {
              ;(eu(!1), $(e))
              return
            }
            null != Y &&
              (await Y({ requested: el, reason: el ? n : null })
                .then(() => {
                  et.current?.signal.aborted || $(e)
                })
                .catch(e4)
                .finally(() => {
                  eu(!1)
                }))
          }),
          (W[5] = X),
          (W[6] = eh),
          (W[7] = K),
          (W[8] = ef),
          (W[9] = Q),
          (W[10] = el),
          (W[11] = ee),
          (W[12] = eg),
          (W[13] = $),
          (W[14] = Y),
          (W[15] = ep),
          (W[16] = n),
          (W[17] = ei),
          (W[18] = J),
          (W[19] = ea),
          (W[20] = en),
          (W[21] = o))
        : (o = W[21])
      let e_ = o,
        ex = `${Z}-title`,
        eA = `${Z}-title`
      ;(W[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, i.jsx)(P.A, {
            id: "rosalind.labActivation.terms.title",
            defaultMessage: "Terms and confirmations",
            description: "Heading for lab activation terms and confirmations",
          })),
          (W[22] = c))
        : (c = W[22]),
        W[23] !== eA
          ? ((d = (0, i.jsx)(eW.VO, { children: (0, i.jsx)("span", { id: eA, children: c }) })),
            (W[23] = eA),
            (W[24] = d))
          : (d = W[24]),
        W[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsx)(eW.Rr, {
              size: "body",
              children: (0, i.jsx)(P.A, {
                id: "rosalind.labActivation.terms.previewNotice",
                defaultMessage:
                  "Your confirmations are saved before checkout for a new Rosalind Academic workspace. You’ll review the promotion and provide a payment method at checkout.",
                description: "Explains durable consent followed by promotion review and payment method collection",
              }),
            })),
            (W[25] = p))
          : (p = W[25]),
        W[26] !== d
          ? ((u = (0, i.jsxs)("div", { className: "flex flex-col gap-2", children: [d, p] })), (W[26] = d), (W[27] = u))
          : (u = W[27]),
        W[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, i.jsx)(eW.Rr, {
              size: "body",
              children: (0, i.jsx)(P.A, {
                id: "rosalind.labActivation.terms.workspaceDescription",
                defaultMessage: "You’ll create a new lab workspace with the Rosalind Academic Plan promotion",
                description: "Describes creation of a new lab workspace through the academic promotion checkout",
              }),
            })),
            (h = (0, i.jsx)(eZ, {})),
            (W[28] = m),
            (W[29] = h))
          : ((m = W[28]), (h = W[29])))
      let ey = X || ep || K,
        ev = `${Z}-retention-title`,
        eT = `${Z}-retention-title`
      ;(W[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (0, i.jsx)(P.A, {
            id: "rosalind.labActivation.retention.title",
            defaultMessage: "Data retention",
            description: "Heading for the lab activation data-retention options",
          })),
          (W[30] = f))
        : (f = W[30]),
        W[31] !== eT ? ((b = (0, i.jsx)(eW.I3, { id: eT, children: f })), (W[31] = eT), (W[32] = b)) : (b = W[32]),
        W[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)(eW.Rr, {
              size: "body",
              children: (0, i.jsx)(P.A, {
                id: "rosalind.labActivation.retention.description",
                defaultMessage:
                  "Standard Data Retention applies by default. Enhanced retention requires separate approval; Zero Data Retention is unavailable.",
                description:
                  "Draft explanation of standard retention and the separate approval needed for enhanced retention; zero retention is not offered",
              }),
            })),
            (W[33] = g))
          : (g = W[33]))
      let ew = `${Z}-enhanced-retention`
      ;(W[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = (0, i.jsx)(P.A, {
            id: "rosalind.labActivation.retention.request",
            defaultMessage: "Request enhanced data retention (optional)",
            description: "Optional checkbox that reveals the required reason for an enhanced-retention request",
          })),
          (W[34] = _))
        : (_ = W[34]),
        W[35] !== el || W[36] !== ew
          ? ((x = (0, i.jsx)(eF, { id: ew, checked: el, onCheckedChange: eo, label: _ })),
            (W[35] = el),
            (W[36] = ew),
            (W[37] = x))
          : (x = W[37]),
        W[38] !== el || W[39] !== Z || W[40] !== ec
          ? ((A =
              el &&
              (0, i.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  (0, i.jsx)(eW.l1, {
                    htmlFor: `${Z}-retention-reason`,
                    children: (0, i.jsx)(P.A, {
                      id: "rosalind.labActivation.retention.reason",
                      defaultMessage: "Why do you need enhanced data retention? (required)",
                      description: "Label for the required reason when requesting enhanced data retention",
                    }),
                  }),
                  (0, i.jsx)(eW.Rr, {
                    id: `${Z}-retention-help`,
                    size: "body",
                    children: (0, i.jsx)(P.A, {
                      id: "rosalind.labActivation.retention.reasonHelp",
                      defaultMessage:
                        "Describe the institutional policy or research requirement (up to 4,000 characters)",
                      description: "Instructions and character limit for the enhanced-retention request",
                    }),
                  }),
                  (0, i.jsx)(eq.TM, {
                    id: `${Z}-retention-reason`,
                    ref: em,
                    "aria-describedby": `${Z}-retention-help ${Z}-retention-status`,
                    value: ec,
                    onChange: (e) => ed(e.target.value),
                    rows: 4,
                    required: !0,
                    variant: "feedback",
                  }),
                  (0, i.jsx)(eW.Rr, {
                    id: `${Z}-retention-status`,
                    size: "body",
                    children: (0, i.jsx)(P.A, {
                      id: "rosalind.labActivation.retention.separateReview",
                      defaultMessage:
                        "Continuing saves your reason with the application for separate review. Standard retention remains in place unless an alternative is approved and activated.",
                      description: "Clarifies that the request is recorded but does not itself change retention policy",
                    }),
                  }),
                ],
              })),
            (W[38] = el),
            (W[39] = Z),
            (W[40] = ec),
            (W[41] = A))
          : (A = W[41]),
        W[42] !== ev || W[43] !== b || W[44] !== x || W[45] !== A
          ? ((y = (0, i.jsxs)("section", {
              className: "flex flex-col gap-3",
              "aria-labelledby": ev,
              children: [b, g, x, A],
            })),
            (W[42] = ev),
            (W[43] = b),
            (W[44] = x),
            (W[45] = A),
            (W[46] = y))
          : (y = W[46]))
      let ej = `${Z}-responsibilities`
      ;(W[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = (0, i.jsx)(P.A, {
            id: "rosalind.labActivation.terms.responsibilitiesConfirmationWithLinks",
            defaultMessage:
              "I have reviewed the <responsibilities>lab responsibilities</responsibilities> and <safety>safety guidance</safety> and agree to uphold them",
            description:
              "Required confirmation with lab responsibilities linking to the safe deployment best practices PDF and safety guidance linking to the biosafety overview PDF",
            values: { responsibilities: e2, safety: e1 },
          })),
          (W[47] = v))
        : (v = W[47]),
        W[48] !== ei || W[49] !== ej
          ? ((T = (0, i.jsx)(eF, { id: ej, checked: ei, onCheckedChange: es, label: v })),
            (W[48] = ei),
            (W[49] = ej),
            (W[50] = T))
          : (T = W[50]))
      let eP = `${Z}-terms`
      ;(W[51] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = (0, i.jsx)(P.A, {
            id: "rosalind.labActivation.terms.authorityConfirmation",
            defaultMessage:
              "I confirm this application is accurate, I am authorized to accept for this lab, and I agree to the <terms>GPT-Rosalind Terms</terms>",
            description: "Required accuracy and authority confirmation with a link to the GPT-Rosalind Terms PDF",
            values: { terms: e0 },
          })),
          (W[51] = w))
        : (w = W[51]),
        W[52] !== eP || W[53] !== en
          ? ((j = (0, i.jsx)(eF, { id: eP, checked: en, onCheckedChange: er, label: w })),
            (W[52] = eP),
            (W[53] = en),
            (W[54] = j))
          : (j = W[54]),
        W[55] !== T || W[56] !== j
          ? ((S = (0, i.jsxs)("div", { className: "flex flex-col gap-3", children: [T, j] })),
            (W[55] = T),
            (W[56] = j),
            (W[57] = S))
          : (S = W[57]),
        W[58] !== ey || W[59] !== y || W[60] !== S
          ? ((I = (0, i.jsxs)("fieldset", { disabled: ey, className: "flex flex-col gap-6", children: [y, S] })),
            (W[58] = ey),
            (W[59] = y),
            (W[60] = S),
            (W[61] = I))
          : (I = W[61]),
        W[62] !== X
          ? ((R =
              X &&
              (0, i.jsx)(eW.Rr, {
                size: "body",
                children: (0, i.jsx)(P.A, {
                  id: "rosalind.labActivation.confirmationsSaved",
                  defaultMessage: "Your confirmations are saved. Continue to checkout to complete workspace setup.",
                  description: "Receipt status after saving consent, including when retrying checkout",
                }),
              })),
            (W[62] = X),
            (W[63] = R))
          : (R = W[63]),
        W[64] !== Q || W[65] !== ea
          ? ((N =
              (!Q || ea) &&
              (0, i.jsx)("p", {
                role: "alert",
                className: "text-secondary",
                children: (0, i.jsx)(P.A, {
                  id: "rosalind.labActivation.reloadTerms",
                  defaultMessage:
                    "The application or activation terms have changed. Reload this page; if the message remains, contact support before continuing.",
                  description: "Blocks an outdated UI from accepting a newer server consent version",
                }),
              })),
            (W[64] = Q),
            (W[65] = ea),
            (W[66] = N))
          : (N = W[66]),
        W[67] !== V || W[68] !== Z
          ? ((E =
              V &&
              (0, i.jsx)("p", {
                id: `${Z}-checkout-failed`,
                className: "text-secondary",
                role: "alert",
                children: (0, i.jsx)(P.A, {
                  id: "rosalind.labActivation.checkout.failed",
                  defaultMessage:
                    "We couldn’t save your confirmations or open checkout. Try again. If the problem continues, reload the application.",
                  description: "Error when saving activation consent or opening academic checkout fails",
                }),
              })),
            (W[67] = V),
            (W[68] = Z),
            (W[69] = E))
          : (E = W[69]),
        W[70] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (0, i.jsx)(P.A, {
              id: "rosalind.labActivation.back",
              defaultMessage: "Back to application",
              description: "Button to return from the activation preview to the approved lab application status",
            })),
            (W[70] = L))
          : (L = W[70]),
        W[71] !== z
          ? ((O = (0, i.jsx)(C.$, {
              className: "w-full sm:w-auto",
              color: "outline",
              onClick: z,
              size: "beaconAction",
              type: "button",
              children: L,
            })),
            (W[71] = z),
            (W[72] = O))
          : (O = W[72]))
      let eS = !eh || !ef || !Q || ea || null == ee || eg || ep || K || null == $
      W[73] !== e_ ? ((M = () => void e_()), (W[73] = e_), (W[74] = M)) : (M = W[74])
      let eC = V ? `${Z}-checkout-failed` : void 0
      return (
        W[75] !== K
          ? ((D = K
              ? (0, i.jsx)(P.A, {
                  id: "rosalind.labActivation.checkout.pending",
                  defaultMessage: "Opening checkout…",
                  description: "Button label while academic workspace checkout is being opened",
                })
              : (0, i.jsx)(P.A, {
                  id: "rosalind.labActivation.terms.accept",
                  defaultMessage: "Accept and continue",
                  description: "Accepts the activation confirmations and starts academic workspace checkout",
                })),
            (W[75] = K),
            (W[76] = D))
          : (D = W[76]),
        W[77] !== eS || W[78] !== M || W[79] !== eC || W[80] !== D
          ? ((k = (0, i.jsx)(C.$, {
              className: "w-full sm:w-auto",
              color: "primary",
              size: "beaconAction",
              type: "button",
              disabled: eS,
              onClick: M,
              "aria-describedby": eC,
              children: D,
            })),
            (W[77] = eS),
            (W[78] = M),
            (W[79] = eC),
            (W[80] = D),
            (W[81] = k))
          : (k = W[81]),
        W[82] !== O || W[83] !== k
          ? ((G = (0, i.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-3",
              children: [O, k],
            })),
            (W[82] = O),
            (W[83] = k),
            (W[84] = G))
          : (G = W[84]),
        W[85] !== E || W[86] !== G
          ? ((B = (0, i.jsxs)("div", {
              className: "flex flex-col gap-3 border-t border-default pt-5",
              children: [E, G],
            })),
            (W[85] = E),
            (W[86] = G),
            (W[87] = B))
          : (B = W[87]),
        W[88] !== u || W[89] !== I || W[90] !== R || W[91] !== N || W[92] !== B || W[93] !== ex
          ? ((U = (0, i.jsxs)("section", {
              className: "flex flex-col gap-6",
              "aria-labelledby": ex,
              children: [u, m, h, I, R, N, B],
            })),
            (W[88] = u),
            (W[89] = I),
            (W[90] = R),
            (W[91] = N),
            (W[92] = B),
            (W[93] = ex),
            (W[94] = U))
          : (U = W[94]),
        U
      )
    }
    function e0(e) {
      return (0, i.jsx)(
        eC.G,
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
      return (0, i.jsx)(eC.G, { href: eV, initiator: "external_link", underline: "always", children: e }, "safety")
    }
    function e2(e) {
      return (0, i.jsx)(
        eC.G,
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
        n,
        l,
        o,
        c,
        d,
        p,
        u = (0, s.c)(20),
        {
          application: m,
          checkoutFailed: h,
          checkoutPending: f,
          onBack: b,
          onCreateWorkspace: g,
          onSaveRetentionRequest: _,
        } = e,
        x = (0, eH.I)(),
        A = (0, r.useRef)(null)
      ;(u[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, i.jsx)(eB, { currentStep: "activation" })), (u[0] = a))
        : (a = u[0]),
        u[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(eW.VO, {
              children: (0, i.jsx)(P.A, {
                id: "rosalind.labActivation.title",
                defaultMessage: "Review and approve activation",
                description:
                  "Heading of the separate employee-only activation review preview for an approved lab application",
              }),
            })),
            (u[1] = t))
          : (t = u[1]),
        u[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(eW.Rr, {
              size: "body",
              children: (0, i.jsx)(P.A, {
                id: "rosalind.labActivation.reviewDescription",
                defaultMessage:
                  "Your lab’s application has been approved. Review the submitted research plans and members, then review the terms and workspace setup.",
                description:
                  "Introduction to the lab activation review, without promising that workspace creation is available",
              }),
            })),
            (u[2] = n))
          : (n = u[2]),
        u[3] !== x
          ? ((l = () => {
              ;(A.current?.scrollIntoView({ block: "start", behavior: x ? "instant" : "smooth" }),
                A.current?.focus({ preventScroll: !0 }))
            }),
            (u[3] = x),
            (u[4] = l))
          : (l = u[4]),
        u[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(P.A, {
              id: "rosalind.labActivation.reviewTerms",
              defaultMessage: "Review terms and workspace setup",
              description: "Scroll to the terms section on the lab activation review page",
            })),
            (u[5] = o))
          : (o = u[5]),
        u[6] !== l
          ? ((c = (0, i.jsxs)("div", {
              className: "flex flex-col gap-3",
              children: [
                t,
                n,
                (0, i.jsx)(C.$, {
                  className: "self-start",
                  color: "primary",
                  size: "dialogAction",
                  type: "button",
                  onClick: l,
                  children: o,
                }),
              ],
            })),
            (u[6] = l),
            (u[7] = c))
          : (c = u[7]))
      let y = `${m.id}:${m.activation_acceptance?.accepted_at ?? "unsaved"}`
      return (
        u[8] !== m || u[9] !== h || u[10] !== f || u[11] !== b || u[12] !== g || u[13] !== _ || u[14] !== y
          ? ((d = (0, i.jsx)("div", {
              ref: A,
              className: "outline-none",
              tabIndex: -1,
              children: (0, i.jsx)(
                eQ,
                {
                  checkoutFailed: h,
                  checkoutPending: f,
                  onAccept: g,
                  onBack: b,
                  application: m,
                  onSaveRetentionRequest: _,
                },
                y,
              ),
            })),
            (u[8] = m),
            (u[9] = h),
            (u[10] = f),
            (u[11] = b),
            (u[12] = g),
            (u[13] = _),
            (u[14] = y),
            (u[15] = d))
          : (d = u[15]),
        u[16] !== m || u[17] !== c || u[18] !== d
          ? ((p = (0, i.jsx)(eG, { application: m, detailsOpen: !0, progress: a, statusContent: c, actions: d })),
            (u[16] = m),
            (u[17] = c),
            (u[18] = d),
            (u[19] = p))
          : (p = u[19]),
        p
      )
    }
    var e5 = t("T0Rc"),
      e6 = t("Ietk"),
      e9 = t("iN9M"),
      e8 = t("hZax")
    function e7(e) {
      let a,
        t,
        l,
        c,
        d,
        p,
        u,
        m,
        h,
        b,
        g,
        _,
        x,
        A,
        y,
        v,
        T,
        w,
        S,
        E,
        O,
        M,
        D,
        k = (0, s.c)(53),
        { application: G, onOpenWorkspace: B } = e,
        W = (0, n.gh)(U.u),
        H = (0, e8.AS)(),
        q = (0, f.A)(),
        [$, F] = (0, r.useState)(!1),
        [z, Y] = (0, r.useState)(!1),
        { userId: V } = (0, o.As)()
      ;(k[0] !== G.created_workspace_id || k[1] !== G.id || k[2] !== V
        ? ((a = ["rosalind", "lab-workspace-invite", V, G.id, G.created_workspace_id]),
          (k[0] = G.created_workspace_id),
          (k[1] = G.id),
          (k[2] = V),
          (k[3] = a))
        : (a = k[3]),
        k[4] !== G.created_workspace_id || k[5] !== W
          ? ((t = async (e) => {
              let { signal: a } = e
              await (0, e6.Q6)("accounts-check")
              let { accounts: t } = await (0, e6.Tq)(W, a, !0),
                i = t?.find((e) => e.id === G.created_workspace_id)
              if (null == i || ("account-owner" !== i.account_user_role && "account-admin" !== i.account_user_role))
                throw Error("Workspace invitation membership unavailable")
              return i
            }),
            (k[4] = G.created_workspace_id),
            (k[5] = W),
            (k[6] = t))
          : (t = k[6]),
        k[7] !== a || k[8] !== t
          ? ((l = {
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
            (k[9] = l))
          : (l = k[9]))
      let { data: K, isError: Z, isFetching: J, refetch: X } = (0, e5.I)(l, W.queryClient)
      ;(k[10] !== q
        ? ((c = q.formatMessage({
            id: "rosalind.labActivation.workspaceReady.label",
            defaultMessage: "Workspace setup complete",
            description: "Accessible label for the completed academic workspace setup screen",
          })),
          (k[10] = q),
          (k[11] = c))
        : (c = k[11]),
        k[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)(eB, { currentStep: "complete" })), (k[12] = d))
          : (d = k[12]),
        k[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsx)(L.E, {
              variant: "success",
              children: (0, i.jsx)(P.A, {
                id: "rosalind.labActivation.workspaceReady.complete",
                defaultMessage: "Setup complete",
                description: "Badge confirming that the approved lab's academic workspace has been created",
              }),
            })),
            (k[13] = p))
          : (p = k[13]),
        k[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, i.jsx)(eW.VO, {
              children: (0, i.jsx)(P.A, {
                id: "rosalind.labActivation.workspaceReady.heading",
                defaultMessage: "Your workspace is ready",
                description: "Headline after an approved lab has finished creating its academic workspace",
              }),
            })),
            (k[14] = u))
          : (u = k[14]),
        k[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, i.jsx)("p", {
              className: "leading-relaxed text-secondary",
              children: (0, i.jsx)(P.A, {
                id: "rosalind.labApplication.workspaceCreated",
                defaultMessage: "Your academic workspace has been created",
                description: "Confirms that an approved lab application is linked to its created academic workspace",
              }),
            })),
            (k[15] = m))
          : (m = k[15]),
        k[16] !== G.answers.lab_name
          ? ((h = (0, i.jsxs)("div", {
              className: "flex flex-col items-start gap-2",
              role: "status",
              children: [
                p,
                u,
                m,
                (0, i.jsx)("p", {
                  className: "font-medium",
                  children: (0, i.jsx)(P.A, {
                    id: "rosalind.labActivation.workspaceReady.lab",
                    defaultMessage: "Lab: {lab}",
                    description:
                      "Identifies the lab whose academic workspace setup is complete; lab is the submitted lab name",
                    values: { lab: G.answers.lab_name },
                  }),
                }),
              ],
            })),
            (k[16] = G.answers.lab_name),
            (k[17] = h))
          : (h = k[17]),
        k[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, i.jsx)(P.A, {
              id: "rosalind.labApplication.openWorkspace",
              defaultMessage: "Open workspace",
              description: "Opens the academic workspace already created for this application",
            })),
            (g = (0, i.jsx)(I.I, { className: "shrink-0", asset: j, focusable: "false" })),
            (k[18] = b),
            (k[19] = g))
          : ((b = k[18]), (g = k[19])),
        k[20] !== B
          ? ((_ = (0, i.jsxs)(C.$, {
              color: "primary",
              onClick: B,
              size: "beaconAction",
              type: "button",
              children: [b, g],
            })),
            (k[20] = B),
            (k[21] = _))
          : (_ = k[21]))
      let Q = J || $,
        ee = null == K || Z || J || $
      return (
        k[22] !== K || k[23] !== W || k[24] !== H
          ? ((x = (e) => {
              null != K &&
                (F(!0),
                Y(!1),
                (0, e9.P)({
                  scope: W,
                  account: K,
                  statsigClient: H,
                  event: e,
                  surface: "CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_ADMIN_INVITE_MODAL",
                })
                  .catch(() => Y(!0))
                  .finally(() => F(!1)))
            }),
            (k[22] = K),
            (k[23] = W),
            (k[24] = H),
            (k[25] = x))
          : (x = k[25]),
        k[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, i.jsx)(P.A, {
              id: "rosalind.labActivation.workspaceReady.invite",
              defaultMessage: "Invite lab members",
              description: "Opens the existing invitation flow for the academic workspace created for this application",
            })),
            (k[26] = A))
          : (A = k[26]),
        k[27] !== Q || k[28] !== ee || k[29] !== x
          ? ((y = (0, i.jsx)(C.$, {
              "aria-busy": Q,
              color: "outline",
              disabled: ee,
              onClick: x,
              size: "beaconAction",
              type: "button",
              children: A,
            })),
            (k[27] = Q),
            (k[28] = ee),
            (k[29] = x),
            (k[30] = y))
          : (y = k[30]),
        k[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, i.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, i.jsx)(P.A, {
                id: "rosalind.labActivation.workspaceReady.inviteHint",
                defaultMessage: "Use institutional emails. Manage invitations in Workspace settings",
                description:
                  "Guidance for inviting lab members with institutional email addresses and finding invitation management in Workspace settings",
              }),
            })),
            (k[31] = v))
          : (v = k[31]),
        k[32] !== z || k[33] !== Z || k[34] !== X
          ? ((T =
              (Z || z) &&
              (0, i.jsxs)("div", {
                className: "flex flex-col items-start gap-3",
                role: "alert",
                children: [
                  (0, i.jsx)("p", {
                    children: (0, i.jsx)(P.A, {
                      id: "rosalind.labActivation.workspaceReady.inviteFailed",
                      defaultMessage:
                        "We couldn’t open invitations for this workspace. Please try again or use Workspace settings → Members",
                      description:
                        "Retryable error when invitations cannot be opened for the newly created academic workspace; Workspace settings and Members are navigation labels",
                    }),
                  }),
                  Z &&
                    (0, i.jsx)(C.$, {
                      color: "outline",
                      onClick: () => void X(),
                      size: "beaconAction",
                      type: "button",
                      children: (0, i.jsx)(P.A, {
                        id: "rosalind.labActivation.workspaceReady.retry",
                        defaultMessage: "Try again",
                        description: "Retries loading invitation permissions for the newly created academic workspace",
                      }),
                    }),
                ],
              })),
            (k[32] = z),
            (k[33] = Z),
            (k[34] = X),
            (k[35] = T))
          : (T = k[35]),
        k[36] !== _ || k[37] !== y || k[38] !== T
          ? ((w = (0, i.jsxs)("div", { className: "flex flex-col gap-3", children: [_, y, v, T] })),
            (k[36] = _),
            (k[37] = y),
            (k[38] = T),
            (k[39] = w))
          : (w = k[39]),
        k[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, i.jsxs)("summary", {
              className:
                "flex cursor-interaction list-none items-center justify-between gap-4 font-medium select-none marker:hidden",
              children: [
                (0, i.jsx)(P.A, {
                  id: "rosalind.applicationStatus.details",
                  defaultMessage: "Application details",
                  description: "Expandable section showing the answers submitted in a GPT-Rosalind lab application",
                }),
                (0, i.jsx)(I.I, { className: "shrink-0 group-open:hidden", asset: N }),
                (0, i.jsx)(I.I, { className: "hidden shrink-0 group-open:block", asset: R }),
              ],
            })),
            (k[40] = S))
          : (S = k[40]),
        k[41] !== G.id
          ? ((E = (0, i.jsx)("p", { className: "font-mono break-all", children: G.id })), (k[41] = G.id), (k[42] = E))
          : (E = k[42]),
        k[43] !== G ? ((O = (0, i.jsx)(ed, { application: G })), (k[43] = G), (k[44] = O)) : (O = k[44]),
        k[45] !== E || k[46] !== O
          ? ((M = (0, i.jsxs)("details", {
              className: "group rounded-xl border border-default p-4",
              children: [S, (0, i.jsxs)("div", { className: "flex flex-col gap-4 pt-4", children: [E, O] })],
            })),
            (k[45] = E),
            (k[46] = O),
            (k[47] = M))
          : (M = k[47]),
        k[48] !== w || k[49] !== M || k[50] !== c || k[51] !== h
          ? ((D = (0, i.jsxs)("section", {
              className:
                "flex flex-col gap-6 rounded-2xl border border-default bg-surface p-4.5 text-sm text-default select-text sm:p-6",
              "aria-label": c,
              children: [d, h, w, M],
            })),
            (k[48] = w),
            (k[49] = M),
            (k[50] = c),
            (k[51] = h),
            (k[52] = D))
          : (D = k[52]),
        D
      )
    }
    function ae(e) {
      let a,
        t,
        n = (0, s.c)(21),
        {
          activationOpen: l,
          application: o,
          onActivationOpenChange: c,
          onCancel: d,
          onOpenWorkspace: p,
          onCreateWorkspace: u,
          onCancelCheckout: m,
          checkoutFailed: h,
          checkoutPending: f,
          onSaveRetentionRequest: b,
        } = e,
        g = o.created_workspace_id,
        _ = !0 === o.can_start_activation && "approved" === o.state && null == g,
        [x, A] = (0, r.useState)(_),
        [y, v] = (0, r.useState)(!1),
        T = (0, r.useRef)(null)
      n[0] !== c
        ? ((a = function (e) {
            ;(null != c ? c(e) : A(e),
              T.current?.closest("main")?.parentElement?.scrollTo({ top: 0, behavior: "instant" }),
              T.current?.focus({ preventScroll: !0 }))
          }),
          (n[0] = c),
          (n[1] = a))
        : (a = n[1])
      let w = a
      if (y && null != g) {
        let e
        return (
          n[2] !== g
            ? ((e = (0, i.jsx)(S.X$, {
                accountId: g,
                destination: "/?surface=work&model_specialty=bio",
                unavailablePath: "/",
              })),
              (n[2] = g),
              (n[3] = e))
            : (e = n[3]),
          e
        )
      }
      if ("approved" === o.state && null != g) {
        let e, a
        return (
          n[4] !== p
            ? ((e = () => {
                ;(v(!0), p?.())
              }),
              (n[4] = p),
              (n[5] = e))
            : (e = n[5]),
          n[6] !== o || n[7] !== e
            ? ((a = (0, i.jsx)(e7, { application: o, onOpenWorkspace: e })), (n[6] = o), (n[7] = e), (n[8] = a))
            : (a = n[8]),
          a
        )
      }
      return (
        n[9] !== l ||
        n[10] !== o ||
        n[11] !== _ ||
        n[12] !== h ||
        n[13] !== f ||
        n[14] !== d ||
        n[15] !== m ||
        n[16] !== u ||
        n[17] !== b ||
        n[18] !== x ||
        n[19] !== w
          ? ((t = (0, i.jsx)("div", {
              ref: T,
              className: "outline-none",
              tabIndex: -1,
              children:
                _ && (l ?? x)
                  ? (0, i.jsx)(e3, {
                      application: o,
                      checkoutFailed: h,
                      checkoutPending: f,
                      onBack: () => {
                        ;(m?.(), w(!1))
                      },
                      onCreateWorkspace: u,
                      onSaveRetentionRequest: b,
                    })
                  : (0, i.jsx)(eG, {
                      application: o,
                      onCancel: d,
                      statusContent:
                        "approved" === o.state || "denied" === o.state
                          ? (0, i.jsxs)("div", {
                              className: "flex flex-col gap-2",
                              role: "status",
                              children: [
                                (0, i.jsx)(eW.VO, {
                                  children: (0, i.jsx)(P.A, {
                                    id: "rosalind.labApplication.decision.heading",
                                    defaultMessage:
                                      "{state, select, approved {Your application has been approved} denied {Application not approved} other {}}",
                                    description:
                                      "Headline for a final GPT-Rosalind lab application decision. Approval does not mean access has been activated; denied means the application was not approved. Only these two states are shown here.",
                                    values: { state: o.state },
                                  }),
                                }),
                                (0, i.jsx)("p", {
                                  className: "leading-relaxed text-secondary",
                                  children: (0, i.jsx)(P.A, {
                                    id: "rosalind.labApplication.decision.description",
                                    defaultMessage:
                                      "{state, select, approved {Your lab’s application has been approved. Expanded access is not available until activation is complete.} denied {Your lab’s application was not approved. Expanded access has not been granted.} other {}}",
                                    description:
                                      "Supporting copy for a final GPT-Rosalind lab application decision. Approval requires a separate activation step before expanded access is available. Denial does not grant expanded access or disclose a rejection reason. Only these two states are shown here.",
                                    values: { state: o.state },
                                  }),
                                }),
                              ],
                            })
                          : void 0,
                      actions:
                        _ &&
                        (0, i.jsx)("div", {
                          className: "mt-1 flex justify-end gap-3 border-t border-default pt-5",
                          children: (0, i.jsxs)(C.$, {
                            className: "w-full sm:w-auto",
                            color: "primary",
                            onClick: () => w(!0),
                            size: "beaconAction",
                            type: "button",
                            children: [
                              (0, i.jsx)(P.A, {
                                id: "rosalind.labActivation.continue",
                                defaultMessage: "Continue to activation",
                                description:
                                  "Button on an approved lab application that opens a separate activation review preview",
                              }),
                              (0, i.jsx)(I.I, { className: "shrink-0", asset: j, focusable: "false" }),
                            ],
                          }),
                        }),
                    }),
            })),
            (n[9] = l),
            (n[10] = o),
            (n[11] = _),
            (n[12] = h),
            (n[13] = f),
            (n[14] = d),
            (n[15] = m),
            (n[16] = u),
            (n[17] = b),
            (n[18] = x),
            (n[19] = w),
            (n[20] = t))
          : (t = n[20]),
        t
      )
    }
    function aa(e) {
      let a,
        t,
        i = (0, s.c)(8),
        { status: l, canStartApplication: o, retryCount: c, isDebugging: d, isVisible: p } = e,
        u = (0, n.Ul)(x.YV),
        m = (0, r.useRef)(null)
      return (
        i[0] !== o || i[1] !== d || i[2] !== p || i[3] !== u || i[4] !== c || i[5] !== l
          ? ((a = () => {
              let e
              !d &&
                p &&
                "loading" !== l &&
                u !== x.Cg &&
                m.current !== c &&
                ((m.current = c),
                (e =
                  "continue" === l
                    ? "CHATGPT_WEB_ROSALIND_APPLICATION_ENTRY_STATE_RESUME_AVAILABLE"
                    : "error" === l
                      ? "CHATGPT_WEB_ROSALIND_APPLICATION_ENTRY_STATE_LOAD_FAILED"
                      : o
                        ? "CHATGPT_WEB_ROSALIND_APPLICATION_ENTRY_STATE_START_AVAILABLE"
                        : "CHATGPT_WEB_ROSALIND_APPLICATION_ENTRY_STATE_ELIGIBILITY_BLOCKED"),
                u.logProductEvent(h.S7, { flow: "CHATGPT_WEB_ROSALIND_APPLICATION_FLOW_LAB", state: e }))
            }),
            (t = [o, d, p, u, c, l]),
            (i[0] = o),
            (i[1] = d),
            (i[2] = p),
            (i[3] = u),
            (i[4] = c),
            (i[5] = l),
            (i[6] = a),
            (i[7] = t))
          : ((a = i[6]), (t = i[7])),
        (0, r.useEffect)(a, t),
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
        { isDebugging: l } = e,
        o = (0, n.Ul)(x.YV),
        c = (0, r.useRef)(!1)
      return (
        i[0] !== l || i[1] !== o
          ? ((a = () => {
              l ||
                o === x.Cg ||
                c.current ||
                ((c.current = !0),
                o.logProductEvent(h.Si, {
                  flow: "CHATGPT_WEB_ROSALIND_APPLICATION_FLOW_LAB",
                  view: "CHATGPT_WEB_ROSALIND_APPLICATION_STATUS_VIEW_APPLICATION",
                }))
            }),
            (t = [l, o]),
            (i[0] = l),
            (i[1] = o),
            (i[2] = a),
            (i[3] = t))
          : ((a = i[2]), (t = i[3])),
        (0, r.useEffect)(a, t),
        null
      )
    }
    function an(e) {
      let a,
        t,
        i = (0, s.c)(5),
        { step: l, isDebugging: o } = e,
        c = void 0 !== o && o,
        d = (0, n.Ul)(x.YV),
        p = (0, r.useRef)(null)
      return (
        i[0] !== c || i[1] !== d || i[2] !== l
          ? ((a = () => {
              c ||
                d === x.Cg ||
                p.current === l ||
                ((p.current = l),
                d.logProductEvent(h.Oe, { flow: "CHATGPT_WEB_ROSALIND_APPLICATION_FLOW_LAB", step: ai[l] }))
            }),
            (t = [c, d, l]),
            (i[0] = c),
            (i[1] = d),
            (i[2] = l),
            (i[3] = a),
            (i[4] = t))
          : ((a = i[3]), (t = i[4])),
        (0, r.useEffect)(a, t),
        null
      )
    }
    var ar = t("v7qY"),
      al = t("nPFn"),
      ao = t("D7Ms"),
      ac = t("SZCv"),
      ad = t.n(ac),
      ap = t("KUdL"),
      au = t.n(ap),
      am = t("DBCl"),
      ah = t("Isak"),
      af = t("Ghh3"),
      ab = t("dMvT")
    let ag = t("ASxG").email(),
      a_ = (0, n.un)(H, ({ get: e }) => {
        let a = e(q)?.persona_status
        return "bypassed" === a || "completed" === a || "needs_review" === a || "approved" === a || "declined" === a
      }),
      ax = (0, n.un)(H, ({ get: e }) => {
        let a = e(F).trim().length
        return a > 0 && a <= 200 && null != aw(e(z)) && "" !== e(Y).trim() && e(a_)
      }),
      aA = (0, n.un)(H, ({ get: e }) => {
        let a = e(K)
        return (
          al.W8.shape.researchPurpose.safeParse(e(V).trim()).success &&
          al.W8.shape.researchScopes.safeParse(a).success &&
          (!a.includes("none") || 1 === a.length) &&
          al.W8.shape.products.safeParse(e(Z)).success
        )
      }),
      ay = (0, n.i1)(H, (e, { get: a }) => {
        let t = a(Q, e),
          i = a(ee).trim(),
          s = a(ea).trim()
        return t.length > 0 && t.every((a) => aT(a, e)) && "" !== i && ag.safeParse(s).success
      }),
      av = (0, n.un)(H, ({ get: e }) => {
        let a = e(ei),
          t = e(es),
          i = e(en),
          s = e(er)
        return (
          al.W8.shape.primaryCountry.safeParse(a).success &&
          al.W8.shape.additionalLocations.safeParse(t).success &&
          ("yes" !== t || (al.W8.shape.additionalCountries.safeParse(i).success && !i.includes(a))) &&
          al.W8.shape.selectedSafeguards.safeParse(s).success &&
          (!s.includes("other") || al.W8.shape.otherSafeguardDetails.safeParse(e(el).trim()).success)
        )
      })
    function aT(e, a) {
      let t = a?.trim().split("@")[1]?.toLowerCase(),
        i = e.split("@").at(-1)?.toLowerCase()
      return null != t && ag.safeParse(e).success && i === t
    }
    function aw(e) {
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
    class aj extends Error {
      step
      constructor(e) {
        ;(super("Complete the changed application step before saving"), (this.step = e))
      }
    }
    let aP = (0, n.RD)(H, ({ get: e }) => {
        let a = e(b.chatGptAuthenticatedAccountId$),
          t = e(b.o8)
        return {
          queryKey: ["rosalind-lab-application", a, t],
          enabled: null != a && null != t,
          queryFn: async ({ signal: e }) => {
            let i
            if (null == a || null == t) throw Error("Authentication is required to load applications")
            do {
              let s = await af.Request.safeGet("/rosalind/applications", {
                  parameters: { query: { cursor: i } },
                  additionalHeaders: { [am.zBc]: a },
                  expectedIdentity: { accountId: a, userId: t },
                  expectedErrorStatuses: [400, 401, 403, 404],
                  signal: e,
                  retry: !1,
                }),
                n = s.items.find(({ state: e }) => "canceled" !== e)
              if (null != n) return n
              i = s.cursor ?? void 0
            } while (null != i)
            return null
          },
          staleTime: 0,
          retry: !1,
          refetchOnWindowFocus: !0,
        }
      }),
      aS = (0, n.RD)(H, ({ get: e, scope: a }) => {
        let t = e(b.chatGptAuthenticatedAccountId$),
          i = e(b.o8),
          s = e(q)
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
      aC = (0, n.aP)(H, ({ scope: e }) => ({
        mutationFn: ({ accountId: e, idempotencyKey: a }) =>
          af.Request.safePost("/rosalind/applications/drafts", {
            requestBody: { application_type: "lab" },
            additionalHeaders: { "Idempotency-Key": a, ...(null == e ? {} : { [am.zBc]: e }) },
          }),
        retry: !1,
        onSuccess: (a, { accountId: t }) => aG(e, t, a),
      })),
      aI = (0, n.aP)(H, ({ scope: e }) => ({
        mutationFn: ({ accountId: e, application: a }) =>
          af.Request.safeDelete("/rosalind/applications/drafts/{draft_id}", {
            parameters: { path: { draft_id: a.id } },
            additionalHeaders: null == e ? void 0 : { [am.zBc]: e },
            expectedIdentity: null == e ? void 0 : { accountId: e, userId: a.user_id },
            expectedErrorStatuses: [403, 404, 409, 503],
            retry: !1,
          }),
        retry: !1,
        onSuccess: (a, { accountId: t, application: i }) => aB(e, t, i),
      })),
      aR = (0, n.aP)(H, ({ scope: e }) => ({
        mutationFn: ({ accountId: e, application: a }) =>
          af.Request.safePost("/rosalind/applications/{application_id}/cancel", {
            parameters: { path: { application_id: a.id } },
            additionalHeaders: null == e ? void 0 : { [am.zBc]: e },
            expectedIdentity: null == e ? void 0 : { accountId: e, userId: a.user_id },
            expectedErrorStatuses: [401, 403, 404, 409, 503],
            retry: !1,
          }),
        retry: !1,
        onSuccess: (a, { accountId: t, application: i }) => aB(e, t, i),
      })),
      aN = (0, n.aP)(H, ({ scope: e }) => ({
        mutationFn: ({ accountId: a }) => ak(e, a, !1),
        retry: !1,
        onSuccess: (a, { accountId: t }) => aG(e, t, a),
      })),
      aE = (0, n.aP)(H, ({ scope: e }) => ({
        mutationFn: async ({ accountId: a, application: t, appearance: i, consent: s, signal: n }) => {
          if (null == a) throw Error("Rosalind Academic checkout account unavailable")
          let r = await af.Request.safePost("/rosalind/applications/{application_id}/activation", {
            parameters: { path: { application_id: t.id } },
            requestBody: s,
            additionalHeaders: { [am.zBc]: a },
            expectedIdentity: { accountId: a, userId: t.user_id },
            expectedErrorStatuses: [401, 403, 404, 409, 422, 503],
            signal: n,
            retry: !1,
          })
          if ((await aG(e, a, r), n.throwIfAborted(), !0 !== r.can_start_checkout))
            throw Error("Rosalind Academic checkout unavailable")
          let l = {
            checkout_ui_mode: "custom",
            entry_point: "rosalind_application_status",
            plan_name: "chatgptrosalindacademicplan",
            rosalind_application_id: t.id,
          }
          return (0, ab.M)({
            accountId: a,
            requestBody: l,
            appearance: i,
            cancelUrl: window.location.href,
            purchaseAttemptId: (0, ah.A)(JSON.stringify(["rosalind-academic-checkout:v1", t.user_id, t.id]), ah.A.URL),
            signal: n,
            expectedIdentity: { accountId: a, userId: t.user_id },
          }).then((e) => {
            if ("tag" in e && "custom_checkout_session" === e.tag) return e
            if (null == e.url) throw Error("Rosalind Academic checkout URL unavailable")
            return e
          })
        },
        retry: !1,
      })),
      aL = (0, n.aP)(H, ({ scope: e }) => ({
        mutationFn: ({ accountId: e, application: a, request: t }) =>
          af.Request.safePut("/rosalind/applications/{application_id}/retention-request", {
            parameters: { path: { application_id: a.id } },
            requestBody: t,
            additionalHeaders: { [am.zBc]: e },
            expectedIdentity: { accountId: e, userId: a.user_id },
            expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 503],
            retry: !1,
          }),
        retry: !1,
        onSuccess: (a, { accountId: t }) => aG(e, t, a),
      })),
      aO = (0, n.aP)(H, ({ scope: e }) => ({
        mutationFn: async ({ accountId: a, application: t, attestations: i, skipIntegrityAndApprove: s }) => {
          if (null == a) throw Error("Authentication is required to submit applications")
          if (!i.research_safeguards || !i.accuracy || !i.authority) throw new aj("review")
          let n = e.get(u.JW, "2599758586"),
            r = {
              additionalHeaders: { [am.zBc]: a },
              expectedIdentity: { accountId: a, userId: t.user_id },
              expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 503],
            },
            l = t
          n &&
            (l = await af.Request.safeGet("/rosalind/applications/{application_id}", {
              ...r,
              parameters: { path: { application_id: t.id } },
              retry: !1,
            }))
          let o = i
          if ("submitted" === l.state && "draft" === t.state && Object.keys(aU(e, t)).length > 0)
            throw Error("The submitted application has different answers")
          if ("submitting" === l.state) {
            let i = "draft" === t.state && t.id === l.id && Object.keys(aU(e, t)).length > 0
            if ((await aG(e, a, l), i)) throw Error("Review the saved application before retrying submission")
          } else if ("draft" !== l.state && ("submitted" !== l.state || "submitting" === t.state)) {
            if ("canceled" === l.state) throw (await aG(e, a, l), Error("The application was canceled"))
            return l
          }
          if ("submitting" === l.state || "submitted" === l.state) {
            let e = l.answers.attestations
            if (null == e) throw Error("The saved submission has no attestations")
            o = {
              research_safeguards: e.research_safeguards.accepted,
              accuracy: e.accuracy.accepted,
              authority: e.authority.accepted,
            }
          }
          let c = l
          if ("draft" === l.state) {
            if (e.get(q)?.id !== l.id) throw Error("The application changed before submission")
            c = await ak(e, a, !0)
          }
          ;("draft" === c.state || "submitting" === c.state) && (await aG(e, a, c))
          try {
            return await af.Request.safePost("/rosalind/applications/drafts/{draft_id}/submit", {
              ...r,
              parameters: { path: { draft_id: c.id } },
              requestBody: {
                form_schema_version: c.form_schema_version,
                attestations: o,
                ...(s ? { skip_integrity_and_approve: !0 } : {}),
              },
              retry: !1,
            })
          } catch (i) {
            let t = await af.Request.safeGet("/rosalind/applications/{application_id}", {
              ...r,
              parameters: { path: { application_id: c.id } },
              retry: !1,
            }).catch(() => null)
            if (
              (t?.state === "submitting" && (await aG(e, a, t)),
              null != t && "draft" !== t.state && "submitting" !== t.state && "canceled" !== t.state)
            )
              return t
            throw i
          }
        },
        retry: !1,
        onSuccess: (a, { accountId: t }) => aG(e, t, a),
      }))
    async function aM(e, a, t) {
      t.throwIfAborted()
      let i = e.get(q)
      if (i?.state !== "draft") throw Error("No lab application draft to verify")
      let s = () => aD(e, i, a, t)
      s()
      let n = await af.Request.safePost("/rosalind/applications/drafts/{draft_id}/persona/status", {
          parameters: { path: { draft_id: i.id } },
          additionalHeaders: { [am.zBc]: a },
          expectedIdentity: { accountId: a, userId: i.user_id },
          expectedErrorStatuses: [401, 403, 404, 409, 503],
          assertRequestCurrent: s,
          signal: t,
          retry: !1,
        }),
        r = s()
      if (n.id !== i.id) throw Error("The Persona verification status is unavailable")
      return null != n.persona_status && (e.set(q, { ...r, persona_status: n.persona_status }), !0)
    }
    function aD(e, a, t, i) {
      i.throwIfAborted()
      let s = e.get(q)
      if (
        e.get(b.chatGptAuthenticatedAccountId$) !== t ||
        e.get(b.o8) !== a.user_id ||
        s?.id !== a.id ||
        "draft" !== s.state
      )
        throw new DOMException("The application changed while verifying with Persona", "AbortError")
      return s
    }
    async function ak(e, a, t) {
      let i = e.get(q)
      if (i?.state !== "draft") throw Error("No lab application draft to update")
      let s = aU(e, i),
        n = [
          { step: "lab", valid: e.get(ax), fields: ["lab_name", "lab_website", "lab_lead_responsibilities"] },
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
      if (null != n) throw new aj(n.step)
      return 0 === Object.keys(s).length
        ? i
        : af.Request.safePatch("/rosalind/applications/drafts/{draft_id}", {
            parameters: { path: { draft_id: i.id } },
            requestBody: { answers: s },
            additionalHeaders: null == a ? void 0 : { [am.zBc]: a },
            expectedIdentity: null == a ? void 0 : { accountId: a, userId: i.user_id },
            expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 503],
            retry: !1,
          })
    }
    async function aG(e, a, t) {
      e.get(b.chatGptAuthenticatedAccountId$) !== a ||
        e.get(b.o8) !== t.user_id ||
        (await e.query.cancel(aP),
        e.get(b.chatGptAuthenticatedAccountId$) === a &&
          e.get(b.o8) === t.user_id &&
          (e.query.setData(aP, t), eo(e, "draft" === t.state || "submitting" === t.state ? t : null)))
    }
    async function aB(e, a, t) {
      e.get(b.chatGptAuthenticatedAccountId$) !== a ||
        e.get(b.o8) !== t.user_id ||
        (await e.query.cancel(aP),
        e.get(b.chatGptAuthenticatedAccountId$) === a &&
          e.get(b.o8) === t.user_id &&
          (eo(e, null), e.query.setData(aP, null), e.query.invalidate(aP)))
    }
    function aU(e, a) {
      let t = {},
        i = e.get(z).trim(),
        s = e.get(Z),
        n = e.get(K),
        r = ec([...e.get(J), e.get(X)].join("\n")).filter((e) => e !== a.answers.lab_lead_email?.toLowerCase()),
        l = e.get(ee).trim(),
        o = e.get(ea).trim(),
        c = e.get(et).trim(),
        d = e.get(ei),
        p = e.get(es),
        u = e.get(en),
        m = e.get(er)
      return (
        h("lab_name", e.get(F).trim() || null),
        h("lab_website", aw(i)?.href ?? (i || null)),
        h("lab_lead_responsibilities", e.get(Y).trim() || null),
        h("products", s.length > 0 ? s : null),
        h("research_purpose", e.get(V).trim() || null),
        h("research_scopes", n.length > 0 ? n : null),
        h("member_emails", r.length > 0 ? r : null),
        h("biosafety_contact", l || o || c ? { name: l, email: o, role: c || null } : null),
        h("primary_country", "" === d ? null : al.W8.shape.primaryCountry.parse(d)),
        h("additional_locations", p),
        h(
          "additional_countries",
          "yes" === p && u.length > 0 ? u.map((e) => al.W8.shape.primaryCountry.parse(e)) : null,
        ),
        h("selected_safeguards", m),
        h("other_safeguard_details", (m.includes("other") && e.get(el).trim()) || null),
        t
      )
      function h(e, i) {
        let s = a.answers[e] ?? ("selected_safeguards" === e ? [] : null)
        ;(Array.isArray(i) && Array.isArray(s) ? ad()(au()(i), au()(s)) : ad()(i, s)) || (t[e] = i)
      }
    }
    let aW = {
      lab: (0, i.jsx)(P.A, {
        id: "rosalind.labApplication.step.lab",
        defaultMessage: "Lab",
        description: "Step label for lab details in a GPT-Rosalind access application",
      }),
      research: (0, i.jsx)(P.A, {
        id: "rosalind.labApplication.step.research",
        defaultMessage: "Research",
        description: "Step label for research plans in a GPT-Rosalind access application",
      }),
      members: (0, i.jsx)(P.A, {
        id: "rosalind.labApplication.step.members",
        defaultMessage: "Members",
        description: "Step label for lab members in a GPT-Rosalind access application",
      }),
      locations: (0, i.jsx)(P.A, {
        id: "rosalind.labApplication.step.locations",
        defaultMessage: "Locations and safeguards",
        description: "Step label for access locations and research safeguards in a GPT-Rosalind access application",
      }),
      review: (0, i.jsx)(P.A, {
        id: "rosalind.labApplication.step.review",
        defaultMessage: "Review",
        description: "Step label for reviewing a GPT-Rosalind access application before submission",
      }),
    }
    var aH = t("Z0qE"),
      aq = t("BcYu"),
      a$ = t("qvry"),
      aF = t("uMJm")
    function az(e) {
      let a,
        t,
        r,
        l,
        o,
        c,
        d,
        p,
        u,
        m = (0, s.c)(25),
        { onBack: h, onContinue: f, continueInvalid: b, continueLabel: g, pending: _, showSaveError: x } = e,
        A = void 0 === x || x,
        { isPending: y, isError: v } = (0, n.Ul)(aN),
        T = y || (void 0 !== _ && _)
      ;(m[0] !== v || m[1] !== A
        ? ((a =
            A &&
            v &&
            (0, i.jsx)("p", {
              className: "text-sm text-danger select-text",
              role: "alert",
              children: (0, i.jsx)(P.A, {
                id: "rosalind.application.saveDraftFailed",
                defaultMessage: "We couldn’t save your application. Please try again.",
                description:
                  "Error shown on a GPT-Rosalind lab application step when saving the application draft fails. The applicant can retry with the button that continues to the next step.",
              }),
            })),
          (m[0] = v),
          (m[1] = A),
          (m[2] = a))
        : (a = m[2]),
        m[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(I.I, { className: "shrink-0", asset: aF.x, focusable: "false" })),
            (r = (0, i.jsx)(P.A, {
              id: "rosalind.application.back",
              defaultMessage: "Back",
              description: "Button to return to the previous step of the GPT-Rosalind lab application",
            })),
            (m[3] = t),
            (m[4] = r))
          : ((t = m[3]), (r = m[4])),
        m[5] !== T || m[6] !== h
          ? ((l = (0, i.jsxs)(C.$, {
              className: "flex-1 sm:flex-none",
              color: "outline",
              disabled: T,
              onClick: h,
              size: "dialogAction",
              type: "button",
              children: [t, r],
            })),
            (m[5] = T),
            (m[6] = h),
            (m[7] = l))
          : (l = m[7]))
      let w = (void 0 !== b && b) || T || null == f,
        S = null == f
      return (
        m[8] !== g
          ? ((o =
              g ??
              (0, i.jsx)(P.A, {
                id: "rosalind.application.continue",
                defaultMessage: "Continue",
                description: "Button to continue to the next step of the GPT-Rosalind lab application",
              })),
            (m[8] = g),
            (m[9] = o))
          : (o = m[9]),
        m[10] !== T
          ? ((c = !T && (0, i.jsx)(I.I, { className: "shrink-0", asset: j, focusable: "false" })),
            (m[10] = T),
            (m[11] = c))
          : (c = m[11]),
        m[12] !== T || m[13] !== f || m[14] !== o || m[15] !== c || m[16] !== w || m[17] !== S
          ? ((d = (0, i.jsxs)(C.$, {
              className: "flex-1 sm:flex-none",
              color: "primary",
              "aria-busy": T,
              "aria-disabled": w,
              disabled: S,
              loading: T,
              onClick: f,
              size: "dialogAction",
              type: "button",
              children: [o, c],
            })),
            (m[12] = T),
            (m[13] = f),
            (m[14] = o),
            (m[15] = c),
            (m[16] = w),
            (m[17] = S),
            (m[18] = d))
          : (d = m[18]),
        m[19] !== d || m[20] !== l
          ? ((p = (0, i.jsxs)("div", {
              className: "mt-1 flex items-center justify-between gap-3 border-t border-default pt-5",
              "data-application-navigation": !0,
              children: [l, d],
            })),
            (m[19] = d),
            (m[20] = l),
            (m[21] = p))
          : (p = m[21]),
        m[22] !== p || m[23] !== a
          ? ((u = (0, i.jsxs)(i.Fragment, { children: [a, p] })), (m[22] = p), (m[23] = a), (m[24] = u))
          : (u = m[24]),
        u
      )
    }
    var aY = t("eShZ"),
      aV = t("jLVq")
    function aK(e) {
      let a,
        l,
        c,
        d,
        p,
        u,
        m,
        h,
        b,
        g,
        _,
        x,
        A,
        y,
        v,
        T,
        w,
        j = (0, s.c)(58),
        { disabled: S, isDebugging: I } = e,
        R = (0, n.gh)(H),
        N = (0, f.A)(),
        E = (0, r.useId)(),
        { accountId: L } = (0, o.As)(),
        O = (0, n.Ul)(q),
        M = O?.persona_status,
        D = (0, n.Ul)(a_),
        k = "lab" === (0, n.Ul)($) && !D,
        [B, U] = (0, r.useState)("idle"),
        W = (0, r.useRef)(null),
        F = "loading" === B || "open" === B || "refreshing" === B,
        z = "error" === B || "refresh-error" === B || "unavailable" === B || "conflict" === B
      ;(j[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = () => () => W.current?.()), (l = []), (j[0] = a), (j[1] = l))
        : ((a = j[0]), (l = j[1])),
        (0, r.useEffect)(a, l),
        j[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = function (e) {
              ;((W.current = null), U(e))
            }),
            (j[2] = c))
          : (c = j[2]))
      let Y = c
      j[3] !== L || j[4] !== I || j[5] !== R
        ? ((d = function () {
            let e = R.get(q)
            if (null != W.current || I || null == L || e?.state !== "draft") return
            let a = new AbortController()
            ;((W.current = () => a.abort()),
              U("refreshing"),
              R.query
                .cancel(aS)
                .then(() => aM(R, L, a.signal))
                .then((t) => {
                  a.signal.aborted || R.get(q)?.id !== e.id || Y(t ? "idle" : "refresh-error")
                })
                .catch(() => {
                  a.signal.aborted || R.get(q)?.id !== e.id || Y("refresh-error")
                }))
          }),
          (j[3] = L),
          (j[4] = I),
          (j[5] = R),
          (j[6] = d))
        : (d = j[6])
      let V = d
      j[7] !== L || j[8] !== I || j[9] !== V || j[10] !== R
        ? ((p = function () {
            let e = R.get(q)
            null != W.current ||
              R.get(a_) ||
              I ||
              null == L ||
              e?.state !== "draft" ||
              R.get(aN).isPending ||
              R.get(aO).isPending ||
              (U("loading"),
              (W.current = (function ({ scope: e, accountId: a, onReady: i, onComplete: s, onCancel: n, onError: r }) {
                let l = new AbortController(),
                  o = !1,
                  c = null,
                  d = () => {
                    ;((o = !0), clearTimeout(u), l.abort())
                    let e = c
                    ;((c = null), e?.destroy())
                  },
                  p = (e) => {
                    o || (d(), r(e))
                  },
                  u = setTimeout(() => p(Error("Persona verification could not start in time")), 6e4)
                return (
                  Promise.all([
                    t.e(891564).then(t.t.bind(t, "Iv8T", 23)),
                    (async function (e, a, t) {
                      ;(await e.query.cancel(aS), t.throwIfAborted())
                      let i = e.get(q)
                      if (i?.state !== "draft") throw Error("No lab application draft to verify")
                      let s = () => aD(e, i, a, t)
                      if ((s(), null == i.answers.lab_lead_email)) throw Error("The applicant email is unavailable")
                      let n = await af.Request.safePost("/rosalind/applications/drafts/{draft_id}/persona", {
                        parameters: { path: { draft_id: i.id } },
                        additionalHeaders: { [am.zBc]: a },
                        expectedIdentity: { accountId: a, userId: i.user_id },
                        expectedErrorStatuses: [401, 403, 404, 409, 503],
                        assertRequestCurrent: s,
                        signal: t,
                        retry: !1,
                      })
                      return (s(), n)
                    })(e, a, l.signal),
                  ])
                    .then(([{ default: e }, a]) => {
                      if (o) return
                      let t = new e.Client({
                        inquiryId: a.inquiry_id,
                        environmentId: a.environment_id,
                        sessionToken: a.session_token,
                        onReady: () => {
                          o || (clearTimeout(u), c?.open(), i())
                        },
                        onComplete: () => {
                          o || (d(), s())
                        },
                        onCancel: () => {
                          o || (d(), n())
                        },
                        onError: () => p(Error("Persona verification failed")),
                      })
                      o ? t.destroy() : (c = t)
                    })
                    .catch((e) => {
                      p(e instanceof Error ? e : Error("Could not start Persona verification"))
                    }),
                  d
                )
              })({
                scope: R,
                accountId: L,
                onReady: () => U("open"),
                onComplete: () => {
                  R.get(q)?.id === e.id && ((W.current = null), V())
                },
                onCancel: () => Y("canceled"),
                onError: (e) => {
                  e instanceof aY.fk && 404 === e.status
                    ? Y("unavailable")
                    : e instanceof aY.fk && 409 === e.status
                      ? Y("conflict")
                      : Y("error")
                },
              })))
          }),
          (j[7] = L),
          (j[8] = I),
          (j[9] = V),
          (j[10] = R),
          (j[11] = p))
        : (p = j[11])
      let K = p
      if ("bypassed" === M) {
        let e
        ;(j[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(P.A, {
              id: "rosalind.labDetails.verificationBypassed",
              defaultMessage: "Test bypass enabled",
              description:
                "Button label explaining that Persona verification is bypassed for an explicitly targeted test user",
            })),
            (j[12] = e))
          : (e = j[12]),
          (u = e))
      } else if (D) {
        let e
        ;(j[13] !== M ? ((e = (0, i.jsx)(G, { status: M })), (j[13] = M), (j[14] = e)) : (e = j[14]), (u = e))
      } else if (F) {
        let e
        ;(j[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(P.A, {
              id: "rosalind.labDetails.verificationInProgress",
              defaultMessage: "Verification in progress…",
              description: "Button label while the Persona verification session is starting or open",
            })),
            (j[15] = e))
          : (e = j[15]),
          (u = e))
      } else if (z || "canceled" === B || "failed" === M || "expired" === M) {
        let e
        ;(j[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(P.A, {
              id: "rosalind.labDetails.retryVerification",
              defaultMessage: "Try verification again",
              description: "Button to create or resume a Persona verification session after an error or cancellation",
            })),
            (j[16] = e))
          : (e = j[16]),
          (u = e))
      } else if ("created" === M || "pending" === M) {
        let e
        ;(j[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(P.A, {
              id: "rosalind.labDetails.continueVerification",
              defaultMessage: "Continue verification",
              description:
                "Button to resume an existing Persona identity verification inquiry that is still in progress",
            })),
            (j[17] = e))
          : (e = j[17]),
          (u = e))
      } else {
        let e
        ;(j[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(P.A, {
              id: "rosalind.labDetails.startVerification",
              defaultMessage: "Start verification",
              description: "Button to begin verifying the lab leader’s identity through Persona",
            })),
            (j[18] = e))
          : (e = j[18]),
          (u = e))
      }
      let Z = null
      if ("bypassed" === M) {
        let e
        ;(j[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)("div", {
              role: "status",
              children: (0, i.jsx)(eW.Rr, {
                children: (0, i.jsx)(P.A, {
                  id: "rosalind.labDetails.verificationBypassedDescription",
                  defaultMessage:
                    "Persona verification is bypassed for this test application. Remove the user from the test gate after testing.",
                  description:
                    "Explains that the Persona test bypass is active and how to clean up the explicitly targeted test user",
                }),
              }),
            })),
            (j[19] = e))
          : (e = j[19]),
          (Z = e))
      } else if (D) {
        let e
        ;(j[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)("div", {
              role: "status",
              children: (0, i.jsx)(eW.Rr, {
                children: (0, i.jsx)(P.A, {
                  id: "rosalind.labDetails.verificationSubmittedDescription",
                  defaultMessage:
                    "Your information was submitted to Persona. This does not mean your application has been approved.",
                  description:
                    "Explains that submitting identity verification information, including an approved Persona verification, does not imply approval of the lab application",
                }),
              }),
            })),
            (j[20] = e))
          : (e = j[20]),
          (Z = e))
      }
      ;(j[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = (0, i.jsx)(eW.I3, {
            emphasis: !0,
            children: (0, i.jsx)(P.A, {
              id: "rosalind.labDetails.verificationHeading",
              defaultMessage: "Verify your identity with Persona",
              description:
                "Heading for identity verification through the Persona service in a GPT-Rosalind lab application; Persona is a brand name",
            }),
          })),
          (j[21] = m))
        : (m = j[21]),
        j[22] !== N
          ? ((h = N.formatMessage({
              id: "rosalind.labDetails.personaLabel",
              defaultMessage: "Persona",
              description: "Accessible name for the Persona identity verification service wordmark; do not translate",
            })),
            (j[22] = N),
            (j[23] = h))
          : (h = j[23]),
        j[24] !== h
          ? ((b = (0, i.jsx)(aV.A, {
              className: "h-auto w-28 shrink-0 text-default select-none",
              role: "img",
              "aria-label": h,
            })),
            (j[24] = h),
            (j[25] = b))
          : (b = j[25]))
      let J = k ? E : void 0,
        X = S || F || D || I || null == L || O?.state !== "draft",
        Q = "loading" === B || "refreshing" === B,
        ee = "refresh-error" === B ? V : K
      return (
        j[26] !== u || j[27] !== k || j[28] !== F || j[29] !== X || j[30] !== Q || j[31] !== ee || j[32] !== J
          ? ((g = (0, i.jsx)(C.$, {
              color: "primary",
              "aria-busy": F,
              "aria-describedby": J,
              "aria-invalid": k,
              disabled: X,
              loading: Q,
              onClick: ee,
              size: "dialogAction",
              type: "button",
              children: u,
            })),
            (j[26] = u),
            (j[27] = k),
            (j[28] = F),
            (j[29] = X),
            (j[30] = Q),
            (j[31] = ee),
            (j[32] = J),
            (j[33] = g))
          : (g = j[33]),
        j[34] !== B
          ? ((_ =
              ("loading" === B || "open" === B) &&
              (0, i.jsx)(C.$, {
                color: "outline",
                onClick: () => {
                  ;(W.current?.(), Y("canceled"))
                },
                size: "dialogAction",
                type: "button",
                children: (0, i.jsx)(P.A, {
                  id: "rosalind.labDetails.cancelVerification",
                  defaultMessage: "Cancel verification",
                  description: "Button to close or stop loading the current Persona verification session",
                }),
              })),
            (j[34] = B),
            (j[35] = _))
          : (_ = j[35]),
        j[36] !== g || j[37] !== _
          ? ((x = (0, i.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [g, _] })),
            (j[36] = g),
            (j[37] = _),
            (j[38] = x))
          : (x = j[38]),
        j[39] !== x || j[40] !== b
          ? ((A = (0, i.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-4 rounded-xl border border-default p-6",
              children: [b, x],
            })),
            (j[39] = x),
            (j[40] = b),
            (j[41] = A))
          : (A = j[41]),
        j[42] !== E || j[43] !== k
          ? ((y =
              k &&
              (0, i.jsx)("p", {
                id: E,
                className: "text-xs text-danger select-text",
                role: "alert",
                children: (0, i.jsx)(P.A, {
                  id: "rosalind.labDetails.verificationRequired",
                  defaultMessage: "Submit your information to Persona before continuing",
                  description:
                    "Validation error when the applicant tries to leave the Lab step before submitting identity verification information to Persona; approval is not required to continue",
                }),
              })),
            (j[42] = E),
            (j[43] = k),
            (j[44] = y))
          : (y = j[44]),
        j[45] !== B || j[46] !== D
          ? ((v =
              "canceled" === B &&
              !D &&
              (0, i.jsx)("div", {
                role: "status",
                children: (0, i.jsx)(eW.Rr, {
                  children: (0, i.jsx)(P.A, {
                    id: "rosalind.labDetails.verificationCanceled",
                    defaultMessage: "Verification was closed. You can try again when you’re ready.",
                    description:
                      "Shown after the applicant closes or cancels Persona verification; they may resume using the retry button",
                  }),
                }),
              })),
            (j[45] = B),
            (j[46] = D),
            (j[47] = v))
          : (v = j[47]),
        j[48] !== z || j[49] !== B || j[50] !== D
          ? ((T =
              z &&
              !D &&
              (0, i.jsxs)("p", {
                className: "text-sm text-danger select-text",
                role: "alert",
                children: [
                  "unavailable" === B &&
                    (0, i.jsx)(P.A, {
                      id: "rosalind.labDetails.verificationUnavailable",
                      defaultMessage: "Verification is unavailable for this application. Please reload and try again.",
                      description:
                        "Shown when the Persona endpoint returns 404 because the draft is unavailable or not owned by the applicant",
                    }),
                  "conflict" === B &&
                    (0, i.jsx)(P.A, {
                      id: "rosalind.labDetails.verificationConflict",
                      defaultMessage:
                        "This application can’t start verification in its current state. Please reload before trying again.",
                      description:
                        "Shown when the Persona endpoint returns a draft conflict; does not imply that identity verification was approved",
                    }),
                  ("error" === B || "refresh-error" === B) &&
                    (0, i.jsx)(P.A, {
                      id: "rosalind.labDetails.verificationFailed",
                      defaultMessage: "We couldn’t start or finish verification. Please try again.",
                      description:
                        "Generic safe error for network, Persona service unavailability, and SDK failures; the applicant can retry",
                    }),
                ],
              })),
            (j[48] = z),
            (j[49] = B),
            (j[50] = D),
            (j[51] = T))
          : (T = j[51]),
        j[52] !== Z || j[53] !== A || j[54] !== y || j[55] !== v || j[56] !== T
          ? ((w = (0, i.jsxs)("section", { className: "flex flex-col gap-4", children: [m, A, y, Z, v, T] })),
            (j[52] = Z),
            (j[53] = A),
            (j[54] = y),
            (j[55] = v),
            (j[56] = T),
            (j[57] = w))
          : (w = j[57]),
        w
      )
    }
    function aZ(e) {
      let a,
        t,
        l,
        c,
        d,
        p,
        u,
        m,
        h,
        b,
        g,
        _,
        x,
        A,
        y,
        v,
        T,
        w,
        j,
        S,
        C,
        I,
        R,
        N,
        E,
        L,
        O,
        M,
        k,
        G,
        B,
        U,
        W,
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
        { active: es, disabled: en, isDebugging: er, onBack: el, onContinue: eo } = e,
        ec = (0, n.gh)(H),
        ed = (0, f.A)(),
        ep = (0, r.useId)(),
        eu = (0, n.Ul)(F),
        em = (0, n.Ul)(z),
        eh = (0, n.Ul)(Y),
        ef = (0, n.Ul)(q),
        eb = ef?.answers.lab_lead_name,
        eg = ef?.answers.lab_lead_email,
        e_ = (0, n.Ul)(ax)
      ;(0, n.Ul)(a_)
      let ex = "lab" === (0, n.Ul)($)
      ei[0] !== eu ? ((a = eu.trim()), (ei[0] = eu), (ei[1] = a)) : (a = ei[1])
      let eA = "" === a
      ei[2] !== eu || ei[3] !== eA || ei[4] !== ex
        ? ((t = ex && (eA || eu.trim().length > 200)), (ei[2] = eu), (ei[3] = eA), (ei[4] = ex), (ei[5] = t))
        : (t = ei[5])
      let ey = t
      ei[6] !== em || ei[7] !== ex ? ((l = ex && null == aw(em)), (ei[6] = em), (ei[7] = ex), (ei[8] = l)) : (l = ei[8])
      let ev = l
      ei[9] !== eh || ei[10] !== ex
        ? ((c = ex && "" === eh.trim()), (ei[9] = eh), (ei[10] = ex), (ei[11] = c))
        : (c = ei[11])
      let eT = c,
        { accountId: ew, userId: ej, email: eP } = (0, o.As)()
      ei[12] !== ew || ei[13] !== ej
        ? ((d = { accountId: ew, userId: ej }), (ei[12] = ew), (ei[13] = ej), (ei[14] = d))
        : (d = ei[14])
      let { data: eS } = (0, n._U)(D.chatGptCurrentUserQuery$, d)
      ei[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (0, i.jsx)(eW.VO, {
            children: (0, i.jsx)(P.A, {
              id: "rosalind.labDetails.heading",
              defaultMessage: "Your lab",
              description: "Heading for the lab details step in a GPT-Rosalind access application",
            }),
          })),
          (ei[15] = p))
        : (p = ei[15])
      let eC = `${ep}-name`
      ei[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (0, i.jsx)(P.A, {
            id: "rosalind.labDetails.name",
            defaultMessage: "Lab name",
            description: "Label for the name of the research lab applying for GPT-Rosalind access",
          })),
          (ei[16] = u))
        : (u = ei[16])
      let eI = `${ep}-name`,
        eR = ey ? `${ep}-name-error` : void 0
      ;(ei[17] !== ec ? ((m = (e) => ec.set(F, e.currentTarget.value)), (ei[17] = ec), (ei[18] = m)) : (m = ei[18]),
        ei[19] !== eu || ei[20] !== ey || ei[21] !== eR || ei[22] !== m || ei[23] !== eI
          ? ((h = (0, i.jsx)(aH.p, {
              id: eI,
              "aria-describedby": eR,
              "aria-invalid": ey,
              gutterSize: "md",
              invalid: ey,
              name: "labName",
              required: !0,
              onChange: m,
              size: "2xl",
              value: eu,
              variant: "outline",
            })),
            (ei[19] = eu),
            (ei[20] = ey),
            (ei[21] = eR),
            (ei[22] = m),
            (ei[23] = eI),
            (ei[24] = h))
          : (h = ei[24]),
        ei[25] !== ep || ei[26] !== ey || ei[27] !== eA
          ? ((b =
              ey &&
              (0, i.jsx)("p", {
                id: `${ep}-name-error`,
                className: "text-xs text-danger select-text",
                role: "alert",
                children: eA
                  ? (0, i.jsx)(P.A, {
                      id: "rosalind.labDetails.nameRequired",
                      defaultMessage: "Enter your lab’s name.",
                      description: "Prototype validation error when the required lab name is empty",
                    })
                  : (0, i.jsx)(P.A, {
                      id: "rosalind.labDetails.nameTooLong",
                      defaultMessage: "Use 200 characters or fewer for the lab name.",
                      description: "Prototype validation error when the lab name exceeds 200 characters",
                    }),
              })),
            (ei[25] = ep),
            (ei[26] = ey),
            (ei[27] = eA),
            (ei[28] = b))
          : (b = ei[28]),
        ei[29] !== h || ei[30] !== b || ei[31] !== eC
          ? ((g = (0, i.jsxs)(a$.t, { htmlFor: eC, title: u, children: [h, b] })),
            (ei[29] = h),
            (ei[30] = b),
            (ei[31] = eC),
            (ei[32] = g))
          : (g = ei[32]))
      let eN = `${ep}-website`
      ei[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = (0, i.jsx)(P.A, {
            id: "rosalind.labDetails.website",
            defaultMessage: "Lab website or university research page",
            description:
              "Label for the lab’s official website or university research page in a GPT-Rosalind application",
          })),
          (x = (0, i.jsx)(P.A, {
            id: "rosalind.labDetails.websiteHelp",
            defaultMessage:
              "Use an official page showing your lab, its lead, and research. We’ll periodically check this page against your application’s research and member details.",
            description:
              "Explains which website to provide for a GPT-Rosalind lab application and that its information will be checked against the application",
          })),
          (ei[33] = _),
          (ei[34] = x))
        : ((_ = ei[33]), (x = ei[34]))
      let eE = `${ep}-website-help`,
        eL = `${ep}-website`,
        eO = `${ep}-website-help${ev ? ` ${ep}-website-error` : ""}`
      ;(ei[35] !== ec
        ? ((A = (e) => ec.set(z, aw(e.currentTarget.value)?.href ?? e.currentTarget.value.trim())),
          (y = (e) => ec.set(z, e.currentTarget.value)),
          (ei[35] = ec),
          (ei[36] = A),
          (ei[37] = y))
        : ((A = ei[36]), (y = ei[37])),
        ei[38] !== ed
          ? ((v = ed.formatMessage({
              id: "rosalind.labDetails.websitePlaceholder",
              defaultMessage: "university.edu/research/your-lab",
              description:
                "Example university research page URL shown in the lab website input for a GPT-Rosalind application",
            })),
            (ei[38] = ed),
            (ei[39] = v))
          : (v = ei[39]),
        ei[40] !== em || ei[41] !== eL || ei[42] !== eO || ei[43] !== A || ei[44] !== y || ei[45] !== v || ei[46] !== ev
          ? ((T = (0, i.jsx)(aH.p, {
              id: eL,
              "aria-describedby": eO,
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
              value: em,
              variant: "outline",
            })),
            (ei[40] = em),
            (ei[41] = eL),
            (ei[42] = eO),
            (ei[43] = A),
            (ei[44] = y),
            (ei[45] = v),
            (ei[46] = ev),
            (ei[47] = T))
          : (T = ei[47]),
        ei[48] !== ep || ei[49] !== ev
          ? ((w =
              ev &&
              (0, i.jsx)("p", {
                id: `${ep}-website-error`,
                className: "text-xs text-danger select-text",
                role: "alert",
                children: (0, i.jsx)(P.A, {
                  id: "rosalind.labDetails.invalidWebsite",
                  defaultMessage: "Enter a valid lab or university page address.",
                  description: "Prototype validation error when the lab website is missing or invalid",
                }),
              })),
            (ei[48] = ep),
            (ei[49] = ev),
            (ei[50] = w))
          : (w = ei[50]),
        ei[51] !== eN || ei[52] !== eE || ei[53] !== T || ei[54] !== w
          ? ((j = (0, i.jsxs)(a$.t, { htmlFor: eN, title: _, description: x, descriptionId: eE, children: [T, w] })),
            (ei[51] = eN),
            (ei[52] = eE),
            (ei[53] = T),
            (ei[54] = w),
            (ei[55] = j))
          : (j = ei[55]),
        ei[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, i.jsx)(eW.I3, {
              as: "legend",
              emphasis: !0,
              children: (0, i.jsx)(P.A, {
                id: "rosalind.labDetails.leadHeading",
                defaultMessage: "Lab lead",
                description: "Heading for the research lab leader’s account details in a GPT-Rosalind application",
              }),
            })),
            (ei[56] = S))
          : (S = ei[56]))
      let eM = `${ep}-lead-name`
      ei[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = (0, i.jsx)(P.A, {
            id: "rosalind.labDetails.leadName",
            defaultMessage: "Full name",
            description: "Label for the lab leader’s full name, taken from their signed-in account",
          })),
          (ei[57] = C))
        : (C = ei[57])
      let eD = `${ep}-lead-name`,
        ek = `${ep}-lead-help`,
        eG = (void 0 === eb ? eS?.name : eb) ?? ""
      ;(ei[58] !== eD || ei[59] !== ek || ei[60] !== eG
        ? ((I = (0, i.jsx)(aH.p, {
            id: eD,
            "aria-describedby": ek,
            readOnly: !0,
            gutterSize: "md",
            size: "2xl",
            value: eG,
            variant: "soft",
          })),
          (ei[58] = eD),
          (ei[59] = ek),
          (ei[60] = eG),
          (ei[61] = I))
        : (I = ei[61]),
        ei[62] !== eM || ei[63] !== I
          ? ((R = (0, i.jsx)(a$.t, { htmlFor: eM, title: C, children: I })), (ei[62] = eM), (ei[63] = I), (ei[64] = R))
          : (R = ei[64]))
      let eB = `${ep}-lead-email`
      ei[65] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = (0, i.jsx)(P.A, {
            id: "rosalind.labDetails.leadEmail",
            defaultMessage: "Email address",
            description: "Label for the lab leader’s email address, taken from their signed-in account",
          })),
          (ei[65] = N))
        : (N = ei[65])
      let eU = `${ep}-lead-email`,
        eH = `${ep}-lead-help`,
        eq = (void 0 === eg ? eP : eg) ?? ""
      ;(ei[66] !== eU || ei[67] !== eH || ei[68] !== eq
        ? ((E = (0, i.jsx)(aH.p, {
            id: eU,
            "aria-describedby": eH,
            readOnly: !0,
            gutterSize: "md",
            size: "2xl",
            type: "email",
            value: eq,
            variant: "soft",
          })),
          (ei[66] = eU),
          (ei[67] = eH),
          (ei[68] = eq),
          (ei[69] = E))
        : (E = ei[69]),
        ei[70] !== eB || ei[71] !== E
          ? ((L = (0, i.jsx)(a$.t, { htmlFor: eB, title: N, children: E })), (ei[70] = eB), (ei[71] = E), (ei[72] = L))
          : (L = ei[72]),
        ei[73] !== R || ei[74] !== L
          ? ((O = (0, i.jsxs)("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [R, L] })),
            (ei[73] = R),
            (ei[74] = L),
            (ei[75] = O))
          : (O = ei[75]))
      let e$ = `${ep}-lead-help`
      ;(ei[76] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = (0, i.jsx)(P.A, {
            id: "rosalind.labDetails.leadHelp",
            defaultMessage: "If you aren’t the lab lead, ask them to apply from their account",
            description:
              "Explains that only the lab leader should apply for GPT-Rosalind access from their own account",
          })),
          (ei[76] = M))
        : (M = ei[76]),
        ei[77] !== e$ ? ((k = (0, i.jsx)(eW.Rr, { id: e$, children: M })), (ei[77] = e$), (ei[78] = k)) : (k = ei[78]),
        ei[79] !== O || ei[80] !== k
          ? ((G = (0, i.jsxs)("fieldset", { className: "flex min-w-0 flex-col gap-4", children: [S, O, k] })),
            (ei[79] = O),
            (ei[80] = k),
            (ei[81] = G))
          : (G = ei[81]))
      let eF = `${ep}-responsibilities`
      ei[82] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = (0, i.jsx)(P.A, {
            id: "rosalind.labDetails.responsibilities",
            defaultMessage: "Role and responsibilities",
            description: "Label for a description of the applicant’s role and responsibilities as the lab leader",
          })),
          (ei[82] = B))
        : (B = ei[82])
      let ez = `${ep}-responsibilities`,
        eY = eT ? `${ep}-responsibilities-error` : void 0
      ;(ei[83] !== ec ? ((U = (e) => ec.set(Y, e.currentTarget.value)), (ei[83] = ec), (ei[84] = U)) : (U = ei[84]),
        ei[85] !== eh || ei[86] !== eT || ei[87] !== ez || ei[88] !== eY || ei[89] !== U
          ? ((W = (0, i.jsx)(aq.T, {
              id: ez,
              "aria-describedby": eY,
              "aria-invalid": eT,
              invalid: eT,
              maxHeight: "none",
              name: "responsibilities",
              required: !0,
              onChange: U,
              resize: "vertical",
              rows: 4,
              size: "2xl",
              value: eh,
              variant: "outline",
            })),
            (ei[85] = eh),
            (ei[86] = eT),
            (ei[87] = ez),
            (ei[88] = eY),
            (ei[89] = U),
            (ei[90] = W))
          : (W = ei[90]),
        ei[91] !== ep || ei[92] !== eT
          ? ((V =
              eT &&
              (0, i.jsx)("p", {
                id: `${ep}-responsibilities-error`,
                className: "text-xs text-danger select-text",
                role: "alert",
                children: (0, i.jsx)(P.A, {
                  id: "rosalind.labDetails.responsibilitiesRequired",
                  defaultMessage: "Describe the lab lead’s role and responsibilities.",
                  description: "Prototype validation error when the lab lead’s role and responsibilities are missing",
                }),
              })),
            (ei[91] = ep),
            (ei[92] = eT),
            (ei[93] = V))
          : (V = ei[93]),
        ei[94] !== eF || ei[95] !== W || ei[96] !== V
          ? ((K = (0, i.jsxs)(a$.t, { htmlFor: eF, title: B, children: [W, V] })),
            (ei[94] = eF),
            (ei[95] = W),
            (ei[96] = V),
            (ei[97] = K))
          : (K = ei[97]),
        ei[98] !== en || ei[99] !== g || ei[100] !== j || ei[101] !== G || ei[102] !== K
          ? ((Z = (0, i.jsxs)("fieldset", {
              className: "flex min-w-0 flex-col gap-4",
              disabled: en,
              children: [g, j, G, K],
            })),
            (ei[98] = en),
            (ei[99] = g),
            (ei[100] = j),
            (ei[101] = G),
            (ei[102] = K),
            (ei[103] = Z))
          : (Z = ei[103]),
        ei[104] !== es || ei[105] !== ef?.id || ei[106] !== en || ei[107] !== er
          ? ((J = es && (0, i.jsx)(aK, { disabled: en, isDebugging: er }, ef?.id)),
            (ei[104] = es),
            (ei[105] = ef?.id),
            (ei[106] = en),
            (ei[107] = er),
            (ei[108] = J))
          : (J = ei[108]),
        ei[109] !== J ? ((X = (0, i.jsx)(i.Fragment, { children: J })), (ei[109] = J), (ei[110] = X)) : (X = ei[110]),
        ei[111] !== Z || ei[112] !== X
          ? ((Q = (0, i.jsxs)("div", { className: "flex flex-col gap-4", children: [Z, X, null] })),
            (ei[111] = Z),
            (ei[112] = X),
            (ei[113] = Q))
          : (Q = ei[113]))
      let eV = !e_
      return (
        ei[114] !== el || ei[115] !== eo || ei[116] !== eV
          ? ((ee = (0, i.jsx)(az, { continueInvalid: eV, onBack: el, onContinue: eo })),
            (ei[114] = el),
            (ei[115] = eo),
            (ei[116] = eV),
            (ei[117] = ee))
          : (ee = ei[117]),
        ei[118] !== en || ei[119] !== ee
          ? ((ea = (0, i.jsx)("fieldset", { className: "flex min-w-0 flex-col gap-6", disabled: en, children: ee })),
            (ei[118] = en),
            (ei[119] = ee),
            (ei[120] = ea))
          : (ea = ei[120]),
        ei[121] !== Q || ei[122] !== ea
          ? ((et = (0, i.jsxs)(i.Fragment, { children: [p, Q, ea] })), (ei[121] = Q), (ei[122] = ea), (ei[123] = et))
          : (et = ei[123]),
        et
      )
    }
    var aJ = t("psL3"),
      aX = t("rY4A")
    let aQ = new Map(["US", "AU", "CA", "FR", "DE", "IN", "JP", "MX", "NL", "SG", "CH", "GB"].map((e, a) => [e, a])),
      a0 = (0, n.un)(H, ({ get: e }) => e(aN).isPending)
    function a1(e) {
      let a,
        t,
        l,
        o,
        c,
        d,
        p,
        u,
        m,
        h,
        b,
        g,
        _,
        x,
        A,
        y,
        v,
        T,
        w,
        j,
        S,
        I,
        R,
        N,
        E,
        L,
        O = (0, s.c)(85),
        { onBack: M, onContinue: D } = e,
        G = (0, n.gh)(H),
        B = (0, f.A)(),
        U = (0, r.useId)(),
        W = (0, n.Ul)(ei),
        q = (0, n.Ul)(es),
        F = (0, n.Ul)(en),
        z = (0, n.Ul)(er),
        Y = (0, n.Ul)(el),
        V = (0, n.Ul)(av),
        K = "locations" === (0, n.Ul)($)
      O[0] !== Y ? ((a = Array.from(Y.trim())), (O[0] = Y), (O[1] = a)) : (a = O[1])
      let Z = a.length,
        J = K && !W,
        X = K && null == q,
        Q = K && F.length < al.XO.additionalCountries.min,
        ee = K && F.length > al.XO.additionalCountries.max,
        ea = K && Z < al.XO.otherSafeguardDetails.min,
        et = K && Z > al.XO.otherSafeguardDetails.max
      O[2] !== B
        ? ((t = al.PO.map((e) => ({ value: e, label: B.formatDisplayName(e, { type: "region" }) ?? e })).sort(
            (e, a) =>
              (aQ.get(e.value) ?? aQ.size) - (aQ.get(a.value) ?? aQ.size) || e.label.localeCompare(a.label, B.locale),
          )),
          (O[2] = B),
          (O[3] = t))
        : (t = O[3])
      let eo = t
      O[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (0, i.jsx)(eW.VO, {
            children: (0, i.jsx)(P.A, {
              id: "rosalind.locations.heading",
              defaultMessage: "Locations and safeguards",
              description: "Heading for the access locations and safeguards step in a GPT-Rosalind application",
            }),
          })),
          (O[4] = l))
        : (l = O[4])
      let ec = `${U}-primary-country`
      O[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (0, i.jsx)(P.A, {
            id: "rosalind.locations.primaryCountry",
            defaultMessage: "Primary access location",
            description: "Label for the primary country or region where lab members will access GPT-Rosalind",
          })),
          (c = (0, i.jsx)(P.A, {
            id: "rosalind.locations.primaryCountryHelp",
            defaultMessage: "Where will users primarily access GPT-Rosalind?",
            description:
              "Explains which location to select as the primary access location in a GPT-Rosalind application",
          })),
          (O[5] = o),
          (O[6] = c))
        : ((o = O[5]), (c = O[6]))
      let ed = `${U}-primary-country-help`,
        ep = `${U}-primary-country`,
        eu = `${U}-primary-country-help${J ? ` ${U}-primary-country-error` : ""}`
      ;(O[7] !== G
        ? ((d = (e) => {
            ;(0, n.Y)(G, () => {
              ;(G.set(ei, e), G.set(en, (a) => a.filter((a) => a !== e)))
            })
          }),
          (O[7] = G),
          (O[8] = d))
        : (d = O[8]),
        O[9] !== eo || O[10] !== W || O[11] !== J || O[12] !== d || O[13] !== ep || O[14] !== eu
          ? ((p = (0, i.jsx)("div", {
              className: "mt-3 mb-2",
              children: (0, i.jsx)(aX.x, {
                id: ep,
                pending$: a0,
                describedBy: eu,
                invalid: J,
                options: eo,
                value: W,
                onChange: d,
              }),
            })),
            (O[9] = eo),
            (O[10] = W),
            (O[11] = J),
            (O[12] = d),
            (O[13] = ep),
            (O[14] = eu),
            (O[15] = p))
          : (p = O[15]),
        O[16] !== U || O[17] !== J
          ? ((u = J
              ? (0, i.jsx)("p", {
                  id: `${U}-primary-country-error`,
                  className: "text-xs text-danger select-text",
                  role: "alert",
                  children: (0, i.jsx)(P.A, {
                    id: "rosalind.locations.primaryCountryRequired",
                    defaultMessage: "Select a primary country or region.",
                    description:
                      "Error when no primary access country or region is selected in a GPT-Rosalind application",
                  }),
                })
              : null),
            (O[16] = U),
            (O[17] = J),
            (O[18] = u))
          : (u = O[18]),
        O[19] !== p || O[20] !== u || O[21] !== ec || O[22] !== ed
          ? ((m = (0, i.jsxs)(a$.t, {
              htmlFor: ec,
              title: o,
              description: c,
              descriptionId: ed,
              descriptionSize: "body",
              children: [p, u],
            })),
            (O[19] = p),
            (O[20] = u),
            (O[21] = ec),
            (O[22] = ed),
            (O[23] = m))
          : (m = O[23]))
      let em = X ? `${U}-additional-locations-error` : void 0,
        eh = `${U}-additional-locations-label`
      ;(O[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = (0, i.jsx)(P.A, {
            id: "rosalind.locations.additionalLocations",
            defaultMessage: "Will anyone access GPT-Rosalind from other countries or regions?",
            description: "Asks whether lab members will access GPT-Rosalind outside the primary country or region",
          })),
          (O[24] = h))
        : (h = O[24]),
        O[25] !== eh
          ? ((b = (0, i.jsx)(eW.I3, { as: "legend", children: (0, i.jsx)("span", { id: eh, children: h }) })),
            (O[25] = eh),
            (O[26] = b))
          : (b = O[26]))
      let ef = `${U}-additional-locations-label`
      ;(O[27] !== q || O[28] !== G
        ? ((g = k.tp.map((e) => {
            let { id: a, label: t } = e
            return (0, i.jsx)(
              C.$,
              {
                "aria-pressed": q === a,
                color: q === a ? "tinted" : "outlineSubtle",
                onClick: () => G.set(es, a),
                radius: "full",
                size: "cardAction",
                type: "button",
                children: t,
              },
              a,
            )
          })),
          (O[27] = q),
          (O[28] = G),
          (O[29] = g))
        : (g = O[29]),
        O[30] !== ef || O[31] !== g
          ? ((_ = (0, i.jsx)("div", {
              className: "pb-2",
              children: (0, i.jsx)(aJ.e, {
                className: "flex-wrap gap-2",
                "aria-labelledby": ef,
                joined: !1,
                role: "group",
                children: g,
              }),
            })),
            (O[30] = ef),
            (O[31] = g),
            (O[32] = _))
          : (_ = O[32]),
        O[33] !== X || O[34] !== U
          ? ((x = X
              ? (0, i.jsx)("p", {
                  id: `${U}-additional-locations-error`,
                  className: "text-xs text-danger select-text",
                  role: "alert",
                  children: (0, i.jsx)(P.A, {
                    id: "rosalind.locations.additionalLocationsRequired",
                    defaultMessage: "Choose Yes, No, or Not sure for additional access locations.",
                    description:
                      "Error when the question about access from additional countries or regions has not been answered in a GPT-Rosalind application",
                  }),
                })
              : null),
            (O[33] = X),
            (O[34] = U),
            (O[35] = x))
          : (x = O[35]),
        O[36] !== F ||
        O[37] !== Q ||
        O[38] !== q ||
        O[39] !== eo ||
        O[40] !== U ||
        O[41] !== W ||
        O[42] !== G ||
        O[43] !== ee
          ? ((A =
              "yes" === q
                ? (0, i.jsxs)(a$.t, {
                    htmlFor: `${U}-additional-countries`,
                    title: (0, i.jsx)(P.A, {
                      id: "rosalind.locations.additionalCountries",
                      defaultMessage: "Additional countries or regions",
                      description:
                        "Label for selecting every additional country or region where lab members will access GPT-Rosalind",
                    }),
                    children: [
                      (0, i.jsx)(aX.x, {
                        id: `${U}-additional-countries`,
                        pending$: a0,
                        describedBy: Q || ee ? `${U}-additional-countries-error` : void 0,
                        invalid: Q || ee,
                        multiple: !0,
                        options: eo.filter((e) => e.value !== W),
                        value: F,
                        onChange: (e) => G.set(en, e),
                      }),
                      Q || ee
                        ? (0, i.jsx)("p", {
                            id: `${U}-additional-countries-error`,
                            className: "text-xs text-danger select-text",
                            role: "alert",
                            children: ee
                              ? (0, i.jsx)(P.A, {
                                  id: "rosalind.locations.additionalCountriesMaximum",
                                  defaultMessage: "Select no more than {maximum} additional countries or regions.",
                                  description:
                                    "Error when too many additional access countries or regions are selected in a GPT-Rosalind application",
                                  values: { maximum: al.XO.additionalCountries.max },
                                })
                              : (0, i.jsx)(P.A, {
                                  id: "rosalind.locations.additionalCountriesRequired",
                                  defaultMessage: "Select at least one additional country or region.",
                                  description:
                                    "Error when access from other countries is selected but no additional country or region has been chosen in a GPT-Rosalind application",
                                }),
                          })
                        : null,
                    ],
                  })
                : null),
            (O[36] = F),
            (O[37] = Q),
            (O[38] = q),
            (O[39] = eo),
            (O[40] = U),
            (O[41] = W),
            (O[42] = G),
            (O[43] = ee),
            (O[44] = A))
          : (A = O[44]),
        O[45] !== X || O[46] !== em || O[47] !== b || O[48] !== _ || O[49] !== x || O[50] !== A
          ? ((y = (0, i.jsxs)("fieldset", {
              className: "flex min-w-0 flex-col gap-4",
              "aria-describedby": em,
              "aria-invalid": X,
              children: [b, _, x, A],
            })),
            (O[45] = X),
            (O[46] = em),
            (O[47] = b),
            (O[48] = _),
            (O[49] = x),
            (O[50] = A),
            (O[51] = y))
          : (y = O[51]),
        O[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, i.jsx)(P.A, {
              id: "rosalind.locations.safeguardsHelp",
              defaultMessage: "Select all that apply. Formal certifications or published policies are not required.",
              description:
                "Explains that existing safeguards are optional and do not require formal certifications or published policies in a GPT-Rosalind application",
            })),
            (O[52] = v))
          : (v = O[52]))
      let eb = `${U}-safeguards-help`
      ;(O[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = (0, i.jsx)(P.A, {
            id: "rosalind.locations.safeguardsHeading",
            defaultMessage: "Existing safeguards <optional>Optional</optional>",
            description:
              "Heading for optional research safeguards in a GPT-Rosalind application; the optional tag visually distinguishes the optional status",
            values: { optional: a2 },
          })),
          (O[53] = T))
        : (T = O[53]),
        O[54] !== eb
          ? ((w = (0, i.jsx)(eW.I3, { as: "legend", description: v, descriptionId: eb, children: T })),
            (O[54] = eb),
            (O[55] = w))
          : (w = O[55]))
      let eg = `${U}-safeguards-help`
      ;(O[56] !== U || O[57] !== G || O[58] !== z
        ? ((j = k.Rs.map((e) => {
            let { value: a, label: t } = e
            return (0, i.jsx)(
              eF,
              {
                id: `${U}-safeguard-${a}`,
                checked: z.includes(a),
                label: t,
                onCheckedChange: (e) => G.set(er, (t) => (e ? [...t, a] : t.filter((e) => e !== a))),
              },
              a,
            )
          })),
          (O[56] = U),
          (O[57] = G),
          (O[58] = z),
          (O[59] = j))
        : (j = O[59]),
        O[60] !== eg || O[61] !== j
          ? ((S = (0, i.jsx)("div", {
              className: "grid grid-cols-1 gap-3 text-balance lg:grid-cols-2",
              "aria-describedby": eg,
              children: j,
            })),
            (O[60] = eg),
            (O[61] = j),
            (O[62] = S))
          : (S = O[62]),
        O[63] !== U || O[64] !== Y || O[65] !== ea || O[66] !== et || O[67] !== G || O[68] !== z
          ? ((I = z.includes("other")
              ? (0, i.jsxs)(a$.t, {
                  htmlFor: `${U}-other-safeguards`,
                  title: (0, i.jsx)(P.A, {
                    id: "rosalind.locations.otherSafeguardDetails",
                    defaultMessage: "Describe your other safeguards",
                    description: "Label for details about other research safeguards in a GPT-Rosalind application",
                  }),
                  children: [
                    (0, i.jsx)(aq.T, {
                      id: `${U}-other-safeguards`,
                      "aria-describedby": ea || et ? `${U}-other-safeguards-error` : void 0,
                      "aria-invalid": ea || et,
                      invalid: ea || et,
                      maxLength: al.XO.otherSafeguardDetails.max,
                      name: "otherSafeguardDetails",
                      onChange: (e) => G.set(el, e.currentTarget.value),
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
                          id: `${U}-other-safeguards-error`,
                          className: "text-xs text-danger select-text",
                          role: "alert",
                          children: et
                            ? (0, i.jsx)(P.A, {
                                id: "rosalind.locations.otherSafeguardDetailsMaximum",
                                defaultMessage: "Use no more than {maximum} characters.",
                                description:
                                  "Error when details about other research safeguards exceed the maximum character count in a GPT-Rosalind application",
                                values: { maximum: al.XO.otherSafeguardDetails.max },
                              })
                            : (0, i.jsx)(P.A, {
                                id: "rosalind.locations.otherSafeguardDetailsRequired",
                                defaultMessage: "Describe the other safeguards in place.",
                                description:
                                  "Error when the Other safeguards option is selected but its required description is missing in a GPT-Rosalind application",
                              }),
                        })
                      : null,
                  ],
                })
              : null),
            (O[63] = U),
            (O[64] = Y),
            (O[65] = ea),
            (O[66] = et),
            (O[67] = G),
            (O[68] = z),
            (O[69] = I))
          : (I = O[69]),
        O[70] !== w || O[71] !== S || O[72] !== I
          ? ((R = (0, i.jsxs)("fieldset", { className: "flex min-w-0 flex-col gap-4", children: [w, S, I] })),
            (O[70] = w),
            (O[71] = S),
            (O[72] = I),
            (O[73] = R))
          : (R = O[73]),
        O[74] !== m || O[75] !== y || O[76] !== R
          ? ((N = (0, i.jsxs)("div", { className: "flex flex-col gap-4", children: [m, y, R] })),
            (O[74] = m),
            (O[75] = y),
            (O[76] = R),
            (O[77] = N))
          : (N = O[77]))
      let e_ = !V
      return (
        O[78] !== M || O[79] !== D || O[80] !== e_
          ? ((E = (0, i.jsx)(az, { continueInvalid: e_, onBack: M, onContinue: D })),
            (O[78] = M),
            (O[79] = D),
            (O[80] = e_),
            (O[81] = E))
          : (E = O[81]),
        O[82] !== N || O[83] !== E
          ? ((L = (0, i.jsxs)(i.Fragment, { children: [l, N, E] })), (O[82] = N), (O[83] = E), (O[84] = L))
          : (L = O[84]),
        L
      )
    }
    function a2(e) {
      return (0, i.jsx)("span", { className: "ms-2 text-xs leading-4.5 font-normal text-secondary", children: e })
    }
    let a4 = (0, w.a)({
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
    var a3 = t("c70r"),
      a5 = t("on57")
    function a6() {
      let e,
        a,
        t,
        l,
        c,
        d,
        p,
        u,
        m,
        h,
        b,
        g,
        _,
        x,
        A,
        y,
        v = (0, s.c)(61),
        T = (0, n.gh)(H),
        w = (0, f.A)(),
        j = (0, r.useId)(),
        { email: S } = (0, o.As)(),
        C = S?.trim().toLowerCase().split("@")[1],
        R = (0, n.Ul)(J),
        N = (0, n._U)(Q, S),
        E = (0, n.Ul)(X),
        L = "members" === (0, n.Ul)($)
      if (v[0] !== S || v[1] !== R) {
        let a
        ;(v[3] !== S ? ((a = (e) => !aT(e, S)), (v[3] = S), (v[4] = a)) : (a = v[4]),
          (e = R.some(a)),
          (v[0] = S),
          (v[1] = R),
          (v[2] = e))
      } else e = v[2]
      let O = e
      v[5] !== S || v[6] !== O || v[7] !== N || v[8] !== L
        ? ((a = O || (L && (0 === N.length || N.some((e) => !aT(e, S))))),
          (v[5] = S),
          (v[6] = O),
          (v[7] = N),
          (v[8] = L),
          (v[9] = a))
        : (a = v[9])
      let M = a,
        D = (0, r.useRef)(null),
        k = (0, r.useRef)(null),
        [G, B] = (0, r.useState)("")
      if (null == C) return null
      v[10] !== T
        ? ((t = function (e, a) {
            let t = T.get(J),
              i = ec([...t, e].join("\n"))
            return (T.set(J, i), T.set(X, void 0 === a ? "" : a), i.length - t.length)
          }),
          (v[10] = T),
          (v[11] = t))
        : (t = v[11])
      let U = t
      v[12] !== U || v[13] !== w || v[14] !== T || v[15] !== B
        ? ((l = function () {
            let e = T.get(X)
            if (!e.trim()) return
            let a = U(e)
            B(
              a > 0
                ? w.formatMessage(
                    {
                      id: "rosalind.members.addressesAdded",
                      defaultMessage: "{count, plural, one {# address added} other {# addresses added}}",
                      description: "Screen reader announcement after committing member email tokens",
                    },
                    { count: a },
                  )
                : w.formatMessage({
                    id: "rosalind.members.addressAlreadyAdded",
                    defaultMessage: "That address is already in the list",
                    description: "Screen reader announcement when a duplicate member email is entered",
                  }),
            )
          }),
          (v[12] = U),
          (v[13] = w),
          (v[14] = T),
          (v[15] = B),
          (v[16] = l))
        : (l = v[16])
      let W = l,
        q = function (e) {
          let a = k.current?.querySelector(`[data-token-index="${e}"]`)
          ;(a ?? D.current)?.focus()
        },
        F = function (e) {
          ;(T.set(J, (a) => a.filter((a) => a !== e)),
            B(
              w.formatMessage(
                {
                  id: "rosalind.members.addressRemoved",
                  defaultMessage: "Removed {email}",
                  description: "Screen reader announcement after removing a member email token",
                },
                { email: e },
              ),
            ),
            D.current?.focus())
        }
      v[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, i.jsx)(P.A, {
            id: "rosalind.members.emails",
            defaultMessage: "Member email addresses",
            description: "Label for the email addresses of lab members who need GPT-Rosalind access",
          })),
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
        V = R.map((e, a) => {
          let t = aT(e, S)
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
                    : w.formatMessage(
                        {
                          id: "rosalind.members.invalidEmailTooltip",
                          defaultMessage: "{email} — Use a valid {domain} email address for every proposed member",
                          description:
                            "Tooltip on an invalid email token, identifying the address and required email domain",
                        },
                        { email: e, domain: C },
                      ),
                  children: [
                    !t && (0, i.jsx)(I.I, { className: "shrink-0", asset: a4 }),
                    (0, i.jsx)("span", { className: "min-w-0 wrap-anywhere", children: e }),
                  ],
                }),
                (0, i.jsx)("button", {
                  className:
                    "inline-flex min-h-7 w-7 flex-none cursor-interaction items-center justify-center gap-1.25 self-stretch border-0 bg-transparent px-1.75 py-0.75 text-inherit select-none hover:bg-current/8 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-text",
                  "aria-label": w.formatMessage(
                    {
                      id: "rosalind.members.removeEmail",
                      defaultMessage: "Remove {email}",
                      description: "Accessible label for removing one lab member’s email address from the application",
                    },
                    { email: e },
                  ),
                  "data-token-index": a,
                  type: "button",
                  onClick: () => F(e),
                  onKeyDown: (t) => {
                    t.nativeEvent.isComposing ||
                      ("Backspace" === t.key || "Delete" === t.key
                        ? (t.preventDefault(), F(e))
                        : "ArrowLeft" === t.key || "ArrowRight" === t.key
                          ? (t.preventDefault(), q(a + ("ArrowLeft" === t.key ? -1 : 1)))
                          : "Escape" === t.key && D.current?.focus())
                  },
                  children: (0, i.jsx)(I.I, { asset: a3.Q }),
                }),
              ],
            },
            e,
          )
        }),
        K = `${j}-domain-help ${j}-help${M ? ` ${j}-error` : ""}`,
        Z = M || void 0,
        ee =
          R.length > 0
            ? w.formatMessage({
                id: "rosalind.members.emailPlaceholder",
                defaultMessage: "Add an email address",
                description: "Placeholder for adding a lab member’s email to the GPT-Rosalind application",
              })
            : w.formatMessage(
                {
                  id: "rosalind.members.firstEmailPlaceholder",
                  defaultMessage: "name@{domain}",
                  description: "Example member email when no members have been added; keep it a valid email address",
                },
                { domain: C },
              )
      ;(v[20] !== U || v[21] !== T
        ? ((p = (e) => {
            let a = e.currentTarget.value.split(/[,;\n\r]+/),
              t = a.pop() ?? ""
            a.length > 0 ? U(a.join("\n"), t) : T.set(X, t)
          }),
          (v[20] = U),
          (v[21] = T),
          (v[22] = p))
        : (p = v[22]),
        v[23] !== W
          ? ((u = (e) => {
              ;(e.relatedTarget instanceof Element && e.relatedTarget.closest("[data-application-navigation]")) || W()
            }),
            (v[23] = W),
            (v[24] = u))
          : (u = v[24]),
        v[25] !== U || v[26] !== E || v[27] !== w || v[28] !== B
          ? ((m = (e) => {
              let a = e.clipboardData.getData("text")
              if (!/[,;\n\r]/.test(a)) return
              e.preventDefault()
              let t = e.currentTarget
              ;(U(E.slice(0, t.selectionStart ?? E.length) + a + E.slice(t.selectionEnd ?? E.length)),
                B(
                  w.formatMessage({
                    id: "rosalind.members.pastedEmails",
                    defaultMessage: "Email addresses added. Check any highlighted addresses",
                    description: "Screen reader announcement after pasting a list of member emails",
                  }),
                ))
            }),
            (v[25] = U),
            (v[26] = E),
            (v[27] = w),
            (v[28] = B),
            (v[29] = m))
          : (m = v[29]),
        v[30] !== W || v[31] !== q || v[32] !== E || v[33] !== R.length
          ? ((h = (e) => {
              !e.nativeEvent.isComposing &&
                ("Enter" === e.key || "," === e.key || ";" === e.key
                  ? (e.preventDefault(), W())
                  : "Tab" === e.key
                    ? W()
                    : R.length > 0 &&
                      (("Backspace" === e.key && "" === E) ||
                        ("ArrowLeft" === e.key && 0 === e.currentTarget.selectionStart)) &&
                      (e.preventDefault(), q(R.length - 1)))
            }),
            (v[30] = W),
            (v[31] = q),
            (v[32] = E),
            (v[33] = R.length),
            (v[34] = h))
          : (h = v[34]),
        v[35] !== j ||
        v[36] !== E ||
        v[37] !== D ||
        v[38] !== K ||
        v[39] !== Z ||
        v[40] !== ee ||
        v[41] !== p ||
        v[42] !== u ||
        v[43] !== m ||
        v[44] !== h
          ? ((b = (0, i.jsx)("input", {
              id: j,
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
              value: E,
              onChange: p,
              onBlur: u,
              onPaste: m,
              onKeyDown: h,
            })),
            (v[35] = j),
            (v[36] = E),
            (v[37] = D),
            (v[38] = K),
            (v[39] = Z),
            (v[40] = ee),
            (v[41] = p),
            (v[42] = u),
            (v[43] = m),
            (v[44] = h),
            (v[45] = b))
          : (b = v[45]),
        v[46] !== k || v[47] !== b || v[48] !== d || v[49] !== Y || v[50] !== V
          ? ((g = (0, i.jsxs)("div", { ref: k, className: d, "data-invalid": Y, children: [V, b] })),
            (v[46] = k),
            (v[47] = b),
            (v[48] = d),
            (v[49] = Y),
            (v[50] = V),
            (v[51] = g))
          : (g = v[51]))
      let ea = `${j}-help`
      return (
        v[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, i.jsx)(P.A, {
              id: "rosalind.members.entryHelp",
              defaultMessage: "Press Enter to add an address, or paste a list",
              description: "Instructions for entering one or several lab member email addresses",
            })),
            (v[52] = _))
          : (_ = v[52]),
        v[53] !== ea
          ? ((x = (0, i.jsx)("p", {
              id: ea,
              className: "m-0 text-[11px] leading-4.5 text-secondary select-text",
              children: _,
            })),
            (v[53] = ea),
            (v[54] = x))
          : (x = v[54]),
        v[55] !== G
          ? ((A = (0, i.jsx)("span", { className: "sr-only", role: "status", "aria-live": "polite", children: G })),
            (v[55] = G),
            (v[56] = A))
          : (A = v[56]),
        v[57] !== C || v[58] !== j || v[59] !== M
          ? ((y =
              M &&
              (0, i.jsx)("p", {
                id: `${j}-error`,
                className: "text-xs text-danger select-text",
                role: "alert",
                children: (0, i.jsx)(P.A, {
                  id: "rosalind.members.matchingDomainEmail",
                  defaultMessage: "Enter valid @{domain} email addresses that match your account’s email domain",
                  description:
                    "Error when member email addresses are malformed or use a different domain from the applicant’s account; domain is the applicant’s email domain without @",
                  values: { domain: C },
                }),
              })),
            (v[57] = C),
            (v[58] = j),
            (v[59] = M),
            (v[60] = y))
          : (y = v[60]),
        (0, i.jsxs)(a$.t, {
          htmlFor: j,
          title: c,
          description: (0, i.jsx)(P.A, {
            id: "rosalind.members.domainHelp",
            defaultMessage: "Use @{domain} email addresses for everyone who needs access",
            description:
              "Instructs the lab lead to use member emails with the same domain as their account; domain is the email domain without @",
            values: { domain: C },
          }),
          descriptionId: `${j}-domain-help`,
          children: [g, x, A, y],
        })
      )
    }
    function a9(e) {
      let a,
        t,
        l,
        c,
        d,
        p,
        u,
        m,
        h,
        f,
        b,
        g,
        _,
        x,
        A,
        y,
        v,
        T,
        w,
        j,
        S,
        C,
        I,
        R = (0, s.c)(64),
        { onBack: N, onContinue: E } = e,
        L = (0, n.gh)(H),
        O = (0, r.useId)(),
        { email: M } = (0, o.As)(),
        D = (0, n._U)(ay, M),
        k = "members" === (0, n.Ul)($),
        G = (0, n.Ul)(ee),
        B = (0, n.Ul)(ea),
        U = (0, n.Ul)(et)
      R[0] !== G || R[1] !== k ? ((a = k && "" === G.trim()), (R[0] = G), (R[1] = k), (R[2] = a)) : (a = R[2])
      let W = a
      R[3] !== B || R[4] !== k
        ? ((t = k && !ag.safeParse(B.trim()).success), (R[3] = B), (R[4] = k), (R[5] = t))
        : (t = R[5])
      let q = t
      ;(R[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (0, i.jsx)(eW.VO, {
            children: (0, i.jsx)(P.A, {
              id: "rosalind.members.heading",
              defaultMessage: "Lab members",
              description: "Heading for the lab members step of a GPT-Rosalind access application",
            }),
          })),
          (c = (0, i.jsx)(a6, {})),
          (R[6] = l),
          (R[7] = c))
        : ((l = R[6]), (c = R[7])),
        R[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)(eW.I3, {
              as: "legend",
              emphasis: !0,
              description: (0, i.jsx)(P.A, {
                id: "rosalind.members.biosafetyDescription",
                defaultMessage:
                  "Nominate your institution's biosafety, biosecurity, or compliance official. Include their full name, title, office/program, and institutional email.",
                description:
                  "Instructions for selecting the required biosafety contact and providing their institutional contact details for a Rosalind lab access application",
              }),
              children: (0, i.jsx)(P.A, {
                id: "rosalind.members.requiredBiosafetyHeading",
                defaultMessage: "Trained biosafety contact",
                description: "Heading for required contact details for someone trained in biosafety",
              }),
            })),
            (R[8] = d))
          : (d = R[8]))
      let F = `${O}-contact-name`
      R[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (0, i.jsx)(P.A, {
            id: "rosalind.members.contactName",
            defaultMessage: "Full name",
            description: "Label for the trained biosafety contact’s full name",
          })),
          (R[9] = p))
        : (p = R[9])
      let z = `${O}-contact-name`,
        Y = W ? `${O}-contact-name-error` : void 0
      ;(R[10] !== L ? ((u = (e) => L.set(ee, e.currentTarget.value)), (R[10] = L), (R[11] = u)) : (u = R[11]),
        R[12] !== G || R[13] !== W || R[14] !== u || R[15] !== z || R[16] !== Y
          ? ((m = (0, i.jsx)(aH.p, {
              id: z,
              "aria-describedby": Y,
              "aria-invalid": W,
              autoComplete: "name",
              gutterSize: "md",
              invalid: W,
              name: "biosafetyContactName",
              required: !0,
              onChange: u,
              size: "2xl",
              value: G,
              variant: "outline",
            })),
            (R[12] = G),
            (R[13] = W),
            (R[14] = u),
            (R[15] = z),
            (R[16] = Y),
            (R[17] = m))
          : (m = R[17]),
        R[18] !== O || R[19] !== W
          ? ((h =
              W &&
              (0, i.jsx)("p", {
                id: `${O}-contact-name-error`,
                className: "text-xs text-danger select-text",
                role: "alert",
                children: (0, i.jsx)(P.A, {
                  id: "rosalind.members.requiredContactName",
                  defaultMessage: "Enter the biosafety contact’s name",
                  description: "Error when the required biosafety contact’s name is missing",
                }),
              })),
            (R[18] = O),
            (R[19] = W),
            (R[20] = h))
          : (h = R[20]),
        R[21] !== m || R[22] !== h || R[23] !== F
          ? ((f = (0, i.jsxs)(a$.t, { htmlFor: F, title: p, children: [m, h] })),
            (R[21] = m),
            (R[22] = h),
            (R[23] = F),
            (R[24] = f))
          : (f = R[24]))
      let V = `${O}-contact-email`
      R[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = (0, i.jsx)(P.A, {
            id: "rosalind.members.contactEmail",
            defaultMessage: "Email address",
            description: "Label for the trained biosafety contact’s email address",
          })),
          (R[25] = b))
        : (b = R[25])
      let K = `${O}-contact-email`,
        Z = q ? `${O}-contact-error` : void 0
      ;(R[26] !== L ? ((g = (e) => L.set(ea, e.currentTarget.value)), (R[26] = L), (R[27] = g)) : (g = R[27]),
        R[28] !== B || R[29] !== q || R[30] !== K || R[31] !== Z || R[32] !== g
          ? ((_ = (0, i.jsx)(aH.p, {
              id: K,
              "aria-describedby": Z,
              "aria-invalid": q,
              autoComplete: "email",
              gutterSize: "md",
              invalid: q,
              name: "biosafetyContactEmail",
              required: !0,
              size: "2xl",
              type: "email",
              value: B,
              variant: "outline",
              onChange: g,
            })),
            (R[28] = B),
            (R[29] = q),
            (R[30] = K),
            (R[31] = Z),
            (R[32] = g),
            (R[33] = _))
          : (_ = R[33]),
        R[34] !== O || R[35] !== q
          ? ((x =
              q &&
              (0, i.jsx)("p", {
                id: `${O}-contact-error`,
                className: "text-xs text-danger select-text",
                role: "alert",
                children: (0, i.jsx)(P.A, {
                  id: "rosalind.members.invalidContactEmail",
                  defaultMessage: "Enter a valid biosafety contact email address",
                  description: "Error when the required biosafety contact’s email address is missing or invalid",
                }),
              })),
            (R[34] = O),
            (R[35] = q),
            (R[36] = x))
          : (x = R[36]),
        R[37] !== V || R[38] !== _ || R[39] !== x
          ? ((A = (0, i.jsxs)(a$.t, { htmlFor: V, title: b, children: [_, x] })),
            (R[37] = V),
            (R[38] = _),
            (R[39] = x),
            (R[40] = A))
          : (A = R[40]),
        R[41] !== f || R[42] !== A
          ? ((y = (0, i.jsxs)("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [f, A] })),
            (R[41] = f),
            (R[42] = A),
            (R[43] = y))
          : (y = R[43]))
      let J = `${O}-contact-role`
      R[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = (0, i.jsx)(P.A, {
            id: "rosalind.members.contactRoleOptionalLabel",
            defaultMessage: "Role and responsibilities <optional>Optional</optional>",
            description:
              "Label for the trained biosafety contact’s role and responsibilities; the optional tag visually distinguishes that this field is not required",
            values: { optional: a8 },
          })),
          (R[44] = v))
        : (v = R[44])
      let X = `${O}-contact-role`
      ;(R[45] !== L ? ((T = (e) => L.set(et, e.currentTarget.value)), (R[45] = L), (R[46] = T)) : (T = R[46]),
        R[47] !== U || R[48] !== X || R[49] !== T
          ? ((w = (0, i.jsx)(aq.T, {
              id: X,
              maxHeight: "none",
              name: "biosafetyContactRole",
              onChange: T,
              resize: "vertical",
              rows: 4,
              size: "2xl",
              value: U,
              variant: "outline",
            })),
            (R[47] = U),
            (R[48] = X),
            (R[49] = T),
            (R[50] = w))
          : (w = R[50]),
        R[51] !== J || R[52] !== w
          ? ((j = (0, i.jsx)(a$.t, { htmlFor: J, title: v, children: w })), (R[51] = J), (R[52] = w), (R[53] = j))
          : (j = R[53]),
        R[54] !== y || R[55] !== j
          ? ((S = (0, i.jsxs)("fieldset", { className: "mt-1 flex min-w-0 flex-col gap-4", children: [d, y, j] })),
            (R[54] = y),
            (R[55] = j),
            (R[56] = S))
          : (S = R[56]))
      let Q = !D
      return (
        R[57] !== N || R[58] !== E || R[59] !== Q
          ? ((C = (0, i.jsx)(az, { continueInvalid: Q, onBack: N, onContinue: E })),
            (R[57] = N),
            (R[58] = E),
            (R[59] = Q),
            (R[60] = C))
          : (C = R[60]),
        R[61] !== S || R[62] !== C
          ? ((I = (0, i.jsxs)(i.Fragment, { children: [l, c, S, C] })), (R[61] = S), (R[62] = C), (R[63] = I))
          : (I = R[63]),
        I
      )
    }
    function a8(e) {
      return (0, i.jsx)("span", { className: "ms-2 text-xs leading-4.5 font-normal text-secondary", children: e })
    }
    function a7(e) {
      let a,
        t,
        l,
        o,
        c,
        d,
        p,
        u,
        m,
        h,
        f,
        b,
        g,
        _,
        x,
        A,
        y,
        v = (0, s.c)(53),
        { onBack: T, onContinue: w } = e,
        j = (0, n.gh)(H),
        S = (0, r.useId)(),
        C = (0, n.Ul)(V),
        I = (0, n.Ul)(K),
        R = (0, n.Ul)(aA),
        N = "research" === (0, n.Ul)($)
      v[0] !== C ? ((a = Array.from(C.trim())), (v[0] = C), (v[1] = a)) : (a = v[1])
      let E = a.length,
        L = N && E < al.XO.researchPurpose.min,
        O = N && E > al.XO.researchPurpose.max,
        M = N && 0 === I.length
      v[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)(eW.VO, {
            children: (0, i.jsx)(P.A, {
              id: "rosalind.researchDetails.heading",
              defaultMessage: "Research details",
              description: "Heading for the research step in a GPT-Rosalind access application",
            }),
          })),
          (v[2] = t))
        : (t = v[2])
      let D = `${S}-purpose`
      v[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (0, i.jsx)(P.A, {
            id: "rosalind.researchDetails.purpose",
            defaultMessage: "Research purpose",
            description: "Label for the lab’s intended research purpose in a GPT-Rosalind application",
          })),
          (o = (0, i.jsx)(P.A, {
            id: "rosalind.researchDetails.purposeHelp",
            defaultMessage:
              "Describe your lab’s research objective, approach, how it will use GPT-Rosalind and its outputs, and the expected benefit. Exclude personal or patient data, personnel records, genomic sequences, lab protocols, and confidential material.",
            description:
              "Instructions for describing the lab’s planned research in a GPT-Rosalind application, including information that must be excluded",
          })),
          (v[3] = l),
          (v[4] = o))
        : ((l = v[3]), (o = v[4]))
      let G = `${S}-purpose-help`,
        B = `${S}-purpose`,
        U = `${S}-purpose-help ${S}-purpose-count${L || O ? ` ${S}-purpose-error` : ""}`,
        W = L || O
      v[5] !== j ? ((c = (e) => j.set(V, e.target.value)), (v[5] = j), (v[6] = c)) : (c = v[6])
      let q = `${S}-purpose-count`
      ;(v[7] !== E || v[8] !== C
        ? ((d =
            E < al.XO.researchPurpose.min
              ? (0, i.jsx)(P.A, {
                  id: "rosalind.researchDetails.purposeCharactersMinimum",
                  defaultMessage: "{count, number} / {minimum, number} characters minimum",
                  description:
                    "Shows the research purpose character count while it is below the minimum required length in a GPT-Rosalind application",
                  values: { count: E, minimum: al.XO.researchPurpose.min },
                })
              : (0, i.jsx)(P.A, {
                  id: "rosalind.researchDetails.purposeCharactersCount",
                  defaultMessage: "{count, number} / {maximum, number}",
                  description:
                    "Shows the research purpose character count and the maximum permitted length in a GPT-Rosalind application",
                  values: { count: Array.from(C).length, maximum: al.XO.researchPurpose.max },
                })),
          (v[7] = E),
          (v[8] = C),
          (v[9] = d))
        : (d = v[9]),
        v[10] !== q || v[11] !== d
          ? ((p = (0, i.jsx)("div", { className: "text-end", children: (0, i.jsx)(eW.Rr, { id: q, children: d }) })),
            (v[10] = q),
            (v[11] = d),
            (v[12] = p))
          : (p = v[12]),
        v[13] !== C || v[14] !== c || v[15] !== p || v[16] !== B || v[17] !== U || v[18] !== W
          ? ((u = (0, i.jsx)("div", {
              className: "pt-3",
              children: (0, i.jsx)(eq.TM, {
                id: B,
                "aria-describedby": U,
                "aria-invalid": W,
                maxLength: al.XO.researchPurpose.max,
                minLength: al.XO.researchPurpose.min,
                name: "researchPurpose",
                onChange: c,
                rows: 4,
                required: !0,
                value: C,
                variant: "feedback",
                footer: p,
              }),
            })),
            (v[13] = C),
            (v[14] = c),
            (v[15] = p),
            (v[16] = B),
            (v[17] = U),
            (v[18] = W),
            (v[19] = u))
          : (u = v[19]),
        v[20] !== S || v[21] !== O || v[22] !== L
          ? ((m =
              L || O
                ? (0, i.jsx)("p", {
                    id: `${S}-purpose-error`,
                    className: "text-xs text-danger select-text",
                    role: "alert",
                    children: O
                      ? (0, i.jsx)(P.A, {
                          id: "rosalind.researchDetails.purposeMaximum",
                          defaultMessage: "Use no more than {maximum} characters.",
                          description:
                            "Error when the research purpose exceeds the maximum character count in a GPT-Rosalind application",
                          values: { maximum: al.XO.researchPurpose.max },
                        })
                      : (0, i.jsx)(P.A, {
                          id: "rosalind.researchDetails.purposeRequired",
                          defaultMessage: "Describe your research in at least 40 characters.",
                          description:
                            "Error when a research purpose is missing or too short in a GPT-Rosalind application",
                        }),
                  })
                : null),
            (v[20] = S),
            (v[21] = O),
            (v[22] = L),
            (v[23] = m))
          : (m = v[23]),
        v[24] !== u || v[25] !== m || v[26] !== D || v[27] !== G
          ? ((h = (0, i.jsxs)(a$.t, {
              htmlFor: D,
              title: l,
              description: o,
              descriptionId: G,
              descriptionSize: "body",
              children: [u, m],
            })),
            (v[24] = u),
            (v[25] = m),
            (v[26] = D),
            (v[27] = G),
            (v[28] = h))
          : (h = v[28]))
      let F = M ? `${S}-scope-error` : void 0
      ;(v[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (0, i.jsx)(eW.I3, {
            as: "legend",
            description: (0, i.jsx)(P.A, {
              id: "rosalind.researchDetails.scopeHelp",
              defaultMessage: "Select all that apply",
              description: "Instructions for choosing research scope categories in a GPT-Rosalind application",
            }),
            children: (0, i.jsx)(P.A, {
              id: "rosalind.researchDetails.scope",
              defaultMessage: "Research scope",
              description: "Heading for the research categories in a GPT-Rosalind application",
            }),
          })),
          (v[29] = f))
        : (f = v[29]),
        v[30] !== S || v[31] !== I || v[32] !== j || v[33] !== M
          ? ((b = k.WZ.map((e) =>
              (0, i.jsx)(
                eF,
                {
                  id: `${S}-scope-${e.value}`,
                  checked: I.includes(e.value),
                  description: e.description,
                  invalid: M,
                  label: e.label,
                  onCheckedChange: (a) => {
                    j.set(K, (t) =>
                      a ? ("none" === e.value ? ["none"] : [...t.filter(te), e.value]) : t.filter((a) => a !== e.value),
                    )
                  },
                },
                e.value,
              ),
            )),
            (v[30] = S),
            (v[31] = I),
            (v[32] = j),
            (v[33] = M),
            (v[34] = b))
          : (b = v[34]),
        v[35] !== S || v[36] !== M
          ? ((g = M
              ? (0, i.jsx)("p", {
                  id: `${S}-scope-error`,
                  className: "text-xs text-danger select-text",
                  role: "alert",
                  children: (0, i.jsx)(P.A, {
                    id: "rosalind.researchDetails.scopeRequired",
                    defaultMessage: "Select the applicable research categories, or “None of the above.”",
                    description: "Error when no research scope category is selected in a GPT-Rosalind application",
                  }),
                })
              : null),
            (v[35] = S),
            (v[36] = M),
            (v[37] = g))
          : (g = v[37]),
        v[38] !== M || v[39] !== F || v[40] !== b || v[41] !== g
          ? ((_ = (0, i.jsxs)("fieldset", {
              className: "flex min-w-0 flex-col gap-3.5",
              "aria-describedby": F,
              "aria-invalid": M,
              children: [f, b, g],
            })),
            (v[38] = M),
            (v[39] = F),
            (v[40] = b),
            (v[41] = g),
            (v[42] = _))
          : (_ = v[42]),
        v[43] !== h || v[44] !== _
          ? ((x = (0, i.jsxs)("div", { className: "flex flex-col gap-8 pb-4", children: [h, _] })),
            (v[43] = h),
            (v[44] = _),
            (v[45] = x))
          : (x = v[45]))
      let z = !R
      return (
        v[46] !== T || v[47] !== w || v[48] !== z
          ? ((A = (0, i.jsx)(az, { continueInvalid: z, onBack: T, onContinue: w })),
            (v[46] = T),
            (v[47] = w),
            (v[48] = z),
            (v[49] = A))
          : (A = v[49]),
        v[50] !== x || v[51] !== A
          ? ((y = (0, i.jsxs)(i.Fragment, { children: [t, x, A] })), (v[50] = x), (v[51] = A), (v[52] = y))
          : (y = v[52]),
        y
      )
    }
    function te(e) {
      return "none" !== e
    }
    var ta = t("bVeK")
    function tt(e) {
      let a,
        t,
        n,
        r,
        l,
        o = (0, s.c)(9),
        { id: c, checked: d, onCheckedChange: p } = e
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)(P.A, {
              id: "rosalind.review.integrityBypass.title",
              defaultMessage: "Employee/test account only",
              description:
                "Title for restricted GPT-Rosalind application controls available only to employees and verified test users",
            })),
            (o[0] = a))
          : (a = o[0]),
        o[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(P.A, {
              id: "rosalind.review.integrityBypass.label",
              defaultMessage: "Skip integrity and approve",
              description:
                "Restricted option that submits a GPT-Rosalind application directly as approved without integrity review",
            })),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== d || o[3] !== c || o[4] !== p
          ? ((n = (0, i.jsx)(eF, { id: c, checked: d, onCheckedChange: p, label: t })),
            (o[2] = d),
            (o[3] = c),
            (o[4] = p),
            (o[5] = n))
          : (n = o[5]),
        o[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(P.A, {
              id: "rosalind.review.integrityBypass.description",
              defaultMessage:
                "Submits this application directly as approved without sending it to the integrity review pipeline.",
              description: "Explanation of the restricted GPT-Rosalind integrity review bypass",
            })),
            (o[6] = r))
          : (r = o[6]),
        o[7] !== n
          ? ((l = (0, i.jsx)(ey.l, {
              type: "infoAccent",
              variant: "callout",
              layout: "verticalIcon",
              Icon: ta.zOs,
              role: "status",
              title: a,
              content: (0, i.jsxs)("div", { className: "flex flex-col gap-2", children: [n, r] }),
            })),
            (o[7] = n),
            (o[8] = l))
          : (l = o[8]),
        l
      )
    }
    function ti(e) {
      let a,
        t,
        l,
        c,
        d,
        p,
        m,
        f,
        g,
        _,
        A,
        y,
        v,
        T,
        w,
        j,
        S,
        C,
        I,
        R,
        N = (0, s.c)(71),
        { isDebugging: E, onBack: L, onEdit: O, onInvalidStep: M, onSubmitted: D } = e,
        k = (0, n.gh)(H),
        { accountId: G, userId: B } = (0, o.As)(),
        U = (0, r.useId)(),
        { mutate: W, isPending: F, isError: z } = (0, n.Ul)(aO),
        Y = "review" === (0, n.Ul)($),
        [V, K] = (0, r.useState)(!1),
        Z = (0, n._U)(u.JW, "87235139"),
        J = (0, n.Ul)(q),
        { data: X } = (0, n.Ul)(aP),
        Q = X?.state === "submitting" ? X : J,
        ee = Q?.state === "submitting",
        ea = (0, n._U)(u.JW, "2599758586"),
        et = ee ? Q.answers.attestations : null,
        [ei, es] = (0, r.useState)(!1),
        [en, er] = (0, r.useState)(!1),
        [el, eo] = (0, r.useState)(!1),
        ec = et?.research_safeguards.accepted ?? ei,
        ep = et?.accuracy.accepted ?? en,
        eu = et?.authority.accepted ?? el
      N[0] !== G || N[1] !== E || N[2] !== k || N[3] !== B
        ? ((a = function (e, a) {
            E ||
              k.get(b.chatGptAuthenticatedAccountId$) !== G ||
              k.get(b.chatGptAuthenticatedUserId$) !== B ||
              (0, x.yy)(k, h.op, {
                flow: "CHATGPT_WEB_ROSALIND_APPLICATION_FLOW_LAB",
                surface: "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_FORM",
                step: "CHATGPT_WEB_ROSALIND_APPLICATION_STEP_REVIEW",
                action: "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_SUBMIT",
                result: e,
                failureReason: a,
              })
          }),
          (N[0] = G),
          (N[1] = E),
          (N[2] = k),
          (N[3] = B),
          (N[4] = a))
        : (a = N[4])
      let em = a
      N[5] !== G ||
      N[6] !== Q ||
      N[7] !== ep ||
      N[8] !== eu ||
      N[9] !== ec ||
      N[10] !== ee ||
      N[11] !== em ||
      N[12] !== M ||
      N[13] !== D ||
      N[14] !== k ||
      N[15] !== V ||
      N[16] !== W
        ? ((t = function () {
            if (!k.get(aO).isPending && null != Q && ("draft" === Q.state || "submitting" === Q.state)) {
              if (!ec || !ep || !eu) {
                ;(em(
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_VALIDATION",
                ),
                  M("review"))
                return
              }
              ;(em("CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED"),
                W(
                  {
                    accountId: G,
                    application: Q,
                    attestations: { research_safeguards: ec, accuracy: ep, authority: eu },
                    skipIntegrityAndApprove: V && !ee && k.get(u.JW, "87235139"),
                  },
                  {
                    onSuccess: () => {
                      ;(em("CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED"), D?.())
                    },
                    onError: (e) => {
                      e instanceof aj
                        ? (em(
                            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
                            "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_VALIDATION",
                          ),
                          M(e.step))
                        : em(
                            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_UNCONFIRMED",
                            "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_REQUEST_FAILED",
                          )
                    },
                  },
                ))
            }
          }),
          (N[5] = G),
          (N[6] = Q),
          (N[7] = ep),
          (N[8] = eu),
          (N[9] = ec),
          (N[10] = ee),
          (N[11] = em),
          (N[12] = M),
          (N[13] = D),
          (N[14] = k),
          (N[15] = V),
          (N[16] = W),
          (N[17] = t))
        : (t = N[17])
      let eh = t
      N[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (0, i.jsx)(P.A, {
            id: "rosalind.review.submissionFailed",
            defaultMessage: "We couldn’t submit your application. Please try again.",
            description:
              "Error shown after a GPT-Rosalind lab application submission fails; the applicant can retry with the submit button",
          })),
          (N[18] = l))
        : (l = N[18])
      let ef = l
      N[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, i.jsx)(eW.VO, {
            children: (0, i.jsx)(P.A, {
              id: "rosalind.review.heading",
              defaultMessage: "Review your application",
              description: "Heading for the final review step of a GPT-Rosalind lab access application",
            }),
          })),
          (N[19] = c))
        : (c = N[19])
      let eb = ee ? Q : void 0,
        eg = ee ? void 0 : O
      ;(N[20] !== eb || N[21] !== eg
        ? ((d = (0, i.jsx)(ed, { application: eb, onEdit: eg })), (N[20] = eb), (N[21] = eg), (N[22] = d))
        : (d = N[22]),
        N[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsx)(eW.I3, {
              as: "legend",
              children: (0, i.jsx)(P.A, {
                id: "rosalind.review.confirmHeading",
                defaultMessage: "Confirm before submitting",
                description: "Heading for the confirmations required before submitting a GPT-Rosalind lab application",
              }),
            })),
            (N[23] = p))
          : (p = N[23]))
      let e_ = `${U}-safeguards`,
        ex = Y && !ec
      ;(N[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = (0, i.jsx)(P.A, {
            id: "rosalind.review.confirmSafeguards",
            defaultMessage:
              "I confirm that our lab maintains reasonable safeguards appropriate to the proposed research, including limiting access to authorized personnel, following relevant research oversight or safety processes where applicable, and requiring qualified human review before AI-generated outputs inform experiments, publications, or other consequential decisions",
            description:
              "Applicant’s confirmation that their lab maintains research safeguards and human review for consequential uses of AI output",
          })),
          (N[24] = m))
        : (m = N[24]),
        N[25] !== ec || N[26] !== ex || N[27] !== e_
          ? ((f = (0, i.jsx)(eF, { id: e_, checked: ec, invalid: ex, onCheckedChange: es, label: m })),
            (N[25] = ec),
            (N[26] = ex),
            (N[27] = e_),
            (N[28] = f))
          : (f = N[28]))
      let eA = `${U}-accuracy`,
        ev = Y && !ep
      ;(N[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (0, i.jsx)(P.A, {
            id: "rosalind.review.certifyAccuracy",
            defaultMessage: "I certify that this application is accurate and complete",
            description: "Applicant’s certification that their GPT-Rosalind lab application is accurate and complete",
          })),
          (N[29] = g))
        : (g = N[29]),
        N[30] !== ep || N[31] !== eA || N[32] !== ev
          ? ((_ = (0, i.jsx)(eF, { id: eA, checked: ep, invalid: ev, onCheckedChange: er, label: g })),
            (N[30] = ep),
            (N[31] = eA),
            (N[32] = ev),
            (N[33] = _))
          : (_ = N[33]))
      let eT = `${U}-authority`,
        ew = Y && !eu
      ;(N[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = (0, i.jsx)(P.A, {
            id: "rosalind.review.certifyAuthority",
            defaultMessage: "I am authorized to apply on behalf of this lab",
            description:
              "Applicant’s confirmation that they have authority to submit a GPT-Rosalind application for the lab",
          })),
          (N[34] = A))
        : (A = N[34]),
        N[35] !== eu || N[36] !== eT || N[37] !== ew
          ? ((y = (0, i.jsx)(eF, { id: eT, checked: eu, invalid: ew, onCheckedChange: eo, label: A })),
            (N[35] = eu),
            (N[36] = eT),
            (N[37] = ew),
            (N[38] = y))
          : (y = N[38]),
        N[39] !== ee || N[40] !== f || N[41] !== _ || N[42] !== y
          ? ((v = (0, i.jsxs)("fieldset", {
              className: "flex min-w-0 flex-col gap-3",
              disabled: ee,
              children: [p, f, _, y],
            })),
            (N[39] = ee),
            (N[40] = f),
            (N[41] = _),
            (N[42] = y),
            (N[43] = v))
          : (v = N[43]),
        N[44] !== ee || N[45] !== U || N[46] !== Z || N[47] !== V
          ? ((T =
              Z && !ee && (0, i.jsx)(tt, { id: `${U}-skip-integrity-and-approve`, checked: V, onCheckedChange: K })),
            (N[44] = ee),
            (N[45] = U),
            (N[46] = Z),
            (N[47] = V),
            (N[48] = T))
          : (T = N[48]),
        N[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, i.jsx)(eW.Rr, {
              size: "body",
              children: (0, i.jsx)(P.A, {
                id: "rosalind.review.submissionHelp",
                defaultMessage: "Submitting an application starts a review and does not grant access",
                description:
                  "Clarifies that submitting a GPT-Rosalind application starts a review process and does not immediately grant access",
              }),
            })),
            (N[49] = w))
          : (w = N[49]),
        N[50] !== ep || N[51] !== eu || N[52] !== ec || N[53] !== Y
          ? ((j =
              Y &&
              (!ec || !ep || !eu) &&
              (0, i.jsx)("p", {
                className: "text-sm text-danger select-text",
                role: "alert",
                children: (0, i.jsx)(P.A, {
                  id: "rosalind.review.confirmationsRequired",
                  defaultMessage: "Confirm all three statements before submitting your application",
                  description:
                    "Validation error when the applicant tries to submit a GPT-Rosalind lab application without accepting every required confirmation",
                }),
              })),
            (N[50] = ep),
            (N[51] = eu),
            (N[52] = ec),
            (N[53] = Y),
            (N[54] = j))
          : (j = N[54]),
        N[55] !== z || N[56] !== ea
          ? ((S =
              z &&
              (ea
                ? (0, i.jsx)(ey.l, { type: "error", role: "alert", content: ef })
                : (0, i.jsx)("p", { className: "text-sm text-danger select-text", role: "alert", children: ef }))),
            (N[55] = z),
            (N[56] = ea),
            (N[57] = S))
          : (S = N[57]))
      let ej = !ec || !ep || !eu
      return (
        N[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, i.jsx)(P.A, {
              id: "rosalind.review.submit",
              defaultMessage: "Submit application",
              description: "Button to submit a GPT-Rosalind lab access application for review",
            })),
            (N[58] = C))
          : (C = N[58]),
        N[59] !== F || N[60] !== L || N[61] !== eh || N[62] !== ej
          ? ((I = (0, i.jsx)(az, {
              continueInvalid: ej,
              onBack: L,
              onContinue: eh,
              pending: F,
              showSaveError: !1,
              continueLabel: C,
            })),
            (N[59] = F),
            (N[60] = L),
            (N[61] = eh),
            (N[62] = ej),
            (N[63] = I))
          : (I = N[63]),
        N[64] !== v || N[65] !== T || N[66] !== j || N[67] !== S || N[68] !== I || N[69] !== d
          ? ((R = (0, i.jsxs)(i.Fragment, { children: [c, d, v, T, w, j, S, I] })),
            (N[64] = v),
            (N[65] = T),
            (N[66] = j),
            (N[67] = S),
            (N[68] = I),
            (N[69] = d),
            (N[70] = R))
          : (R = N[70]),
        R
      )
    }
    function ts(e) {
      let a,
        t,
        l,
        c,
        d,
        p,
        u,
        m,
        b,
        g,
        _,
        A,
        y,
        v,
        T,
        w,
        j,
        P,
        S,
        C,
        I,
        R,
        N,
        E,
        L,
        O,
        D,
        k,
        G,
        B,
        U,
        F,
        z = (0, s.c)(117),
        { selectedTab: Y, isDebugging: V, onBack: K, onStepChange: Z, onSubmitted: J } = e,
        X = void 0 !== V && V,
        Q = (0, n.gh)(H),
        ee = (0, f.A)(),
        ea = (0, eH.I)(),
        { accountId: et, email: ei } = (0, o.As)(),
        { mutate: es, isPending: en } = (0, n.Ul)(aN),
        { isPending: er } = (0, n.Ul)(aO),
        el = en || er,
        { data: eo } = (0, n.Ul)(aP),
        ec = (0, n.Ul)(q),
        ed = eo?.state === "submitting" || ec?.state === "submitting",
        ep = (0, n.Ul)(ax),
        eu = (0, n.Ul)(aA),
        em = (0, n._U)(ay, ei),
        eh = (0, n.Ul)(av),
        ef = (0, r.useRef)(null),
        eb = !X
      ;(z[0] !== eb ? ((a = { enabled: eb }), (z[0] = eb), (z[1] = a)) : (a = z[1]), (0, n.Ul)(aS, a))
      let eg = W.indexOf(Y),
        e_ = ep && eu,
        ex = ep && eu && em,
        eA = ep && eu && em && eh
      z[2] !== ep || z[3] !== e_ || z[4] !== ex || z[5] !== eA
        ? ((t = { lab: !0, research: ep, members: e_, locations: ex, review: eA }),
          (z[2] = ep),
          (z[3] = e_),
          (z[4] = ex),
          (z[5] = eA),
          (z[6] = t))
        : (t = z[6])
      let ey = t
      z[7] !== Z || z[8] !== Q
        ? ((l = function (e) {
            ;(Q.set($, null),
              Z(e),
              ef.current?.closest("main")?.parentElement?.scrollTo({ top: 0, behavior: "instant" }))
          }),
          (z[7] = Z),
          (z[8] = Q),
          (z[9] = l))
        : (l = z[9])
      let ev = l
      z[10] !== X || z[11] !== Q || z[12] !== Y
        ? ((c = function (e, a, t, i) {
            X ||
              e === Y ||
              (0, x.yy)(Q, h.op, {
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
      let eT = c
      z[14] !== Z || z[15] !== Q || z[16] !== ea
        ? ((d = function (e) {
            ;(0, ar.flushSync)(() => {
              ;(Z(e), Q.set($, e))
            })
            let a = ef.current?.querySelector(':scope > div:not([hidden]) :is([aria-invalid="true"], [data-invalid])')
            ;((a?.querySelector("input, textarea, button, [tabindex]") ?? a)?.focus({ preventScroll: !0 }),
              a?.scrollIntoView({ behavior: ea ? "instant" : "smooth", block: "center", inline: "nearest" }))
          }),
          (z[14] = Z),
          (z[15] = Q),
          (z[16] = ea),
          (z[17] = d))
        : (d = z[17])
      let ew = d
      z[18] !== ey || z[19] !== eg || z[20] !== ed || z[21] !== eT || z[22] !== Q || z[23] !== Y || z[24] !== ew
        ? ((p = function (e, a) {
            return (
              (!ed || "entry" === e) &&
              !Q.get(aN).isPending &&
              !Q.get(aO).isPending &&
              (!("entry" !== e && W.indexOf(e) > eg) ||
                !!ey[e] ||
                (eT(
                  e,
                  a,
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_VALIDATION",
                ),
                ew(Y),
                !1))
            )
          }),
          (z[18] = ey),
          (z[19] = eg),
          (z[20] = ed),
          (z[21] = eT),
          (z[22] = Q),
          (z[23] = Y),
          (z[24] = ew),
          (z[25] = p))
        : (p = z[25])
      let ej = p
      z[26] !== ej || z[27] !== X || z[28] !== eT || z[29] !== K || z[30] !== ev
        ? ((u = function (e, a) {
            ej(e, a) &&
              (eT(e, a, "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED"), "entry" === e ? K(X) : ev(e))
          }),
          (z[26] = ej),
          (z[27] = X),
          (z[28] = eT),
          (z[29] = K),
          (z[30] = ev),
          (z[31] = u))
        : (u = z[31])
      let eP = u
      z[32] !== et || z[33] !== ej || z[34] !== eT || z[35] !== Q || z[36] !== ev || z[37] !== ew || z[38] !== es
        ? ((m = function (e) {
            if (ej(e, "continue")) {
              if (null == Q.get(q)) return void ev(e)
              es(
                { accountId: et },
                {
                  onSuccess: () => {
                    ;(eT(e, "continue", "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED"), ev(e))
                  },
                  onError: (a) => {
                    a instanceof aj
                      ? (eT(
                          e,
                          "continue",
                          "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_BLOCKED",
                          "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_VALIDATION",
                        ),
                        ew(a.step))
                      : eT(
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
          (z[33] = ej),
          (z[34] = eT),
          (z[35] = Q),
          (z[36] = ev),
          (z[37] = ew),
          (z[38] = es),
          (z[39] = m))
        : (m = z[39])
      let eS = m,
        eC = "lab" === Y,
        eI = el || ed
      ;(z[40] !== eP ? ((b = () => eP("entry", "back")), (z[40] = eP), (z[41] = b)) : (b = z[41]),
        z[42] !== eS ? ((g = () => eS("research")), (z[42] = eS), (z[43] = g)) : (g = z[43]),
        z[44] !== X || z[45] !== eC || z[46] !== eI || z[47] !== b || z[48] !== g
          ? ((_ = {
              id: "lab",
              content: (0, i.jsx)(aZ, { active: eC, disabled: eI, isDebugging: X, onBack: b, onContinue: g }),
            }),
            (z[44] = X),
            (z[45] = eC),
            (z[46] = eI),
            (z[47] = b),
            (z[48] = g),
            (z[49] = _))
          : (_ = z[49]),
        z[50] !== eP ? ((A = () => eP("lab", "back")), (z[50] = eP), (z[51] = A)) : (A = z[51]),
        z[52] !== eS ? ((y = () => eS("members")), (z[52] = eS), (z[53] = y)) : (y = z[53]),
        z[54] !== A || z[55] !== y
          ? ((v = { id: "research", content: (0, i.jsx)(a7, { onBack: A, onContinue: y }) }),
            (z[54] = A),
            (z[55] = y),
            (z[56] = v))
          : (v = z[56]),
        z[57] !== eP ? ((T = () => eP("research", "back")), (z[57] = eP), (z[58] = T)) : (T = z[58]),
        z[59] !== eS ? ((w = () => eS("locations")), (z[59] = eS), (z[60] = w)) : (w = z[60]),
        z[61] !== T || z[62] !== w
          ? ((j = { id: "members", content: (0, i.jsx)(a9, { onBack: T, onContinue: w }) }),
            (z[61] = T),
            (z[62] = w),
            (z[63] = j))
          : (j = z[63]),
        z[64] !== eP ? ((P = () => eP("members", "back")), (z[64] = eP), (z[65] = P)) : (P = z[65]),
        z[66] !== eS ? ((S = () => eS("review")), (z[66] = eS), (z[67] = S)) : (S = z[67]),
        z[68] !== P || z[69] !== S
          ? ((C = { id: "locations", content: (0, i.jsx)(a1, { onBack: P, onContinue: S }) }),
            (z[68] = P),
            (z[69] = S),
            (z[70] = C))
          : (C = z[70]),
        z[71] !== ed || z[72] !== eP
          ? ((I = () => eP(ed ? "entry" : "locations", "back")), (z[71] = ed), (z[72] = eP), (z[73] = I))
          : (I = z[73]),
        z[74] !== eP ? ((R = (e) => eP(e, "edit")), (z[74] = eP), (z[75] = R)) : (R = z[75]),
        z[76] !== ew ? ((N = (e) => ew(e)), (z[76] = ew), (z[77] = N)) : (N = z[77]),
        z[78] !== X || z[79] !== J || z[80] !== I || z[81] !== R || z[82] !== N
          ? ((E = {
              id: "review",
              content: (0, i.jsx)(ti, { isDebugging: X, onBack: I, onEdit: R, onInvalidStep: N, onSubmitted: J }),
            }),
            (z[78] = X),
            (z[79] = J),
            (z[80] = I),
            (z[81] = R),
            (z[82] = N),
            (z[83] = E))
          : (E = z[83]),
        z[84] !== _ || z[85] !== v || z[86] !== j || z[87] !== C || z[88] !== E
          ? ((L = [_, v, j, C, E]), (z[84] = _), (z[85] = v), (z[86] = j), (z[87] = C), (z[88] = E), (z[89] = L))
          : (L = z[89]))
      let eR = L
      return (
        z[90] !== X || z[91] !== Y
          ? ((O = (0, i.jsx)(an, { step: Y, isDebugging: X })), (z[90] = X), (z[91] = Y), (z[92] = O))
          : (O = z[92]),
        z[93] !== ee
          ? ((D = ee.formatMessage({
              id: "rosalind.labApplication.progress",
              defaultMessage: "Application progress",
              description: "Accessible label for the numbered steps in a lab’s GPT-Rosalind access application",
            })),
            (z[93] = ee),
            (z[94] = D))
          : (D = z[94]),
        z[95] !== eP ? ((k = (e) => eP(e, "stepSelected")), (z[95] = eP), (z[96] = k)) : (k = z[96]),
        z[97] !== ey || z[98] !== eg || z[99] !== ed || z[100] !== el || z[101] !== eR
          ? ((G = eR.map((e, a) => {
              let { id: t } = e
              return { id: t, label: aW[t], disabled: ed || el || (a > eg && !ey[t]) }
            })),
            (z[97] = ey),
            (z[98] = eg),
            (z[99] = ed),
            (z[100] = el),
            (z[101] = eR),
            (z[102] = G))
          : (G = z[102]),
        z[103] !== Y || z[104] !== D || z[105] !== k || z[106] !== G
          ? ((B = (0, i.jsx)(M.K, { currentStep: Y, distribute: !0, ariaLabel: D, onStepSelect: k, steps: G })),
            (z[103] = Y),
            (z[104] = D),
            (z[105] = k),
            (z[106] = G),
            (z[107] = B))
          : (B = z[107]),
        z[108] !== ed || z[109] !== el || z[110] !== Y || z[111] !== eR
          ? ((U = eR.map((e) => {
              let { id: a, content: t } = e
              return (0, i.jsx)(
                "div",
                {
                  hidden: a !== Y,
                  children: (0, i.jsx)("fieldset", {
                    className: "flex min-w-0 flex-col gap-6",
                    "aria-busy": el,
                    disabled: (ed && "review" !== a) || (el && "lab" !== a),
                    children: "review" !== a || a === Y ? t : null,
                  }),
                },
                a,
              )
            })),
            (z[108] = ed),
            (z[109] = el),
            (z[110] = Y),
            (z[111] = eR),
            (z[112] = U))
          : (U = z[112]),
        z[113] !== O || z[114] !== B || z[115] !== U
          ? ((F = (0, i.jsxs)("div", {
              ref: ef,
              className:
                "flex flex-col gap-6 rounded-2xl border border-default bg-surface p-4.5 text-sm text-default sm:p-6",
              children: [O, B, U],
            })),
            (z[113] = O),
            (z[114] = B),
            (z[115] = U),
            (z[116] = F))
          : (F = z[116]),
        F
      )
    }
    function tn(e) {
      let a,
        t,
        l,
        c,
        d,
        p,
        u,
        m,
        f,
        g,
        _,
        A,
        y,
        v,
        T,
        w,
        j,
        S,
        I,
        R = (0, s.c)(54),
        { application: N, isDebugging: E, onClose: L, onDeleted: O } = e,
        M = (0, n.gh)(H),
        { accountId: D, userId: k } = (0, o.As)(),
        G = (0, n.Ul)(x.YV),
        B = (0, r.useRef)(!1),
        U = (0, r.useRef)(!1),
        { mutate: W, isPending: q, isError: $ } = (0, n.Ul)(aI)
      R[0] !== D || R[1] !== E || R[2] !== M || R[3] !== k
        ? ((a = function (e, a, t) {
            return (
              !E &&
              M.get(x.YV) !== x.Cg &&
              M.get(b.chatGptAuthenticatedAccountId$) === D &&
              M.get(b.chatGptAuthenticatedUserId$) === k &&
              ((0, x.yy)(M, h.op, {
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
          (R[0] = D),
          (R[1] = E),
          (R[2] = M),
          (R[3] = k),
          (R[4] = a))
        : (a = R[4])
      let F = a
      R[5] !== F
        ? ((t = () => {
            B.current ||
              (B.current = F(
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_DELETE_DRAFT_CONFIRMATION",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
              ))
          }),
          (R[5] = F),
          (R[6] = t))
        : (t = R[6])
      let z = (0, r.useEffectEvent)(t)
      ;(R[7] !== z
        ? ((l = () => {
            z()
          }),
          (R[7] = z),
          (R[8] = l))
        : (l = R[8]),
        R[9] !== D || R[10] !== E || R[11] !== G || R[12] !== k
          ? ((c = [D, E, G, k]), (R[9] = D), (R[10] = E), (R[11] = G), (R[12] = k), (R[13] = c))
          : (c = R[13]),
        (0, r.useEffect)(l, c),
        R[14] !== F || R[15] !== L
          ? ((d = function () {
              ;(U.current ||
                F(
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_DELETE_DRAFT_CONFIRMATION",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_CANCELLED",
                ),
                L())
            }),
            (R[14] = F),
            (R[15] = L),
            (R[16] = d))
          : (d = R[16]))
      let Y = d
      R[17] !== D || R[18] !== N || R[19] !== W || R[20] !== F || R[21] !== O || R[22] !== M
        ? ((p = function () {
            M.get(aI).isPending ||
              (U.current ||
                ((U.current = !0),
                F(
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_DELETE_DRAFT_CONFIRMATION",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                )),
              F(
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_DELETE_DRAFT",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
              ),
              W(
                { accountId: D, application: N },
                {
                  onSuccess: () => {
                    ;(F(
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_DELETE_DRAFT",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                    ),
                      O())
                  },
                  onError: () => {
                    F(
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_DELETE_DRAFT",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_UNCONFIRMED",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_REQUEST_FAILED",
                    )
                  },
                },
              ))
          }),
          (R[17] = D),
          (R[18] = N),
          (R[19] = W),
          (R[20] = F),
          (R[21] = O),
          (R[22] = M),
          (R[23] = p))
        : (p = R[23])
      let V = p,
        K = !q
      return (
        R[24] !== Y || R[25] !== q
          ? ((u = (e) => {
              e || q || Y()
            }),
            (R[24] = Y),
            (R[25] = q),
            (R[26] = u))
          : (u = R[26]),
        R[27] !== V
          ? ((m = (e) => {
              ;(e.preventDefault(), V())
            }),
            (R[27] = V),
            (R[28] = m))
          : (m = R[28]),
        R[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, i.jsx)(ev.L3, {
              children: (0, i.jsx)(P.A, {
                id: "rosalind.deleteDraft.title",
                defaultMessage: "Delete draft?",
                description: "Title of the confirmation dialog for deleting a saved GPT-Rosalind lab application draft",
              }),
            })),
            (R[29] = f))
          : (f = R[29]),
        R[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)(eT.c7, {
              title: f,
              subtitle: (0, i.jsx)(ev.rr, {
                children: (0, i.jsx)(P.A, {
                  id: "rosalind.deleteDraft.description",
                  defaultMessage: "Your saved answers will be deleted. This can’t be undone",
                  description:
                    "Explains that deleting a GPT-Rosalind lab application draft removes its saved answers and cannot be undone",
                }),
              }),
            })),
            (R[30] = g))
          : (g = R[30]),
        R[31] !== $
          ? ((_ =
              $ &&
              (0, i.jsx)("p", {
                className: "text-danger",
                role: "alert",
                children: (0, i.jsx)(P.A, {
                  id: "rosalind.deleteDraft.failed",
                  defaultMessage: "We couldn’t delete your draft. Please try again",
                  description:
                    "Error shown when deleting a GPT-Rosalind lab application draft fails; the user can retry in the confirmation dialog",
                }),
              })),
            (R[31] = $),
            (R[32] = _))
          : (_ = R[32]),
        R[33] !== _ ? ((A = (0, i.jsxs)(eT.OO, { children: [g, _] })), (R[33] = _), (R[34] = A)) : (A = R[34]),
        R[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, i.jsx)(P.A, {
              id: "rosalind.deleteDraft.cancel",
              defaultMessage: "Cancel",
              description:
                "Button to close the draft deletion confirmation without deleting the GPT-Rosalind application",
            })),
            (R[35] = y))
          : (y = R[35]),
        R[36] !== Y || R[37] !== q
          ? ((v = (0, i.jsx)(C.$, { color: "outline", disabled: q, onClick: Y, children: y })),
            (R[36] = Y),
            (R[37] = q),
            (R[38] = v))
          : (v = R[38]),
        R[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, i.jsx)(P.A, {
              id: "rosalind.deleteDraft.confirm",
              defaultMessage: "Delete draft",
              description: "Button to confirm deletion of the saved GPT-Rosalind lab application draft",
            })),
            (R[39] = T))
          : (T = R[39]),
        R[40] !== q
          ? ((w = (0, i.jsx)(C.$, { color: "danger", loading: q, type: "submit", children: T })),
            (R[40] = q),
            (R[41] = w))
          : (w = R[41]),
        R[42] !== v || R[43] !== w
          ? ((j = (0, i.jsx)(eT.OO, { children: (0, i.jsxs)(eT.Es, { children: [v, w] }) })),
            (R[42] = v),
            (R[43] = w),
            (R[44] = j))
          : (j = R[44]),
        R[45] !== A || R[46] !== j || R[47] !== m
          ? ((S = (0, i.jsxs)(eT.R4, { as: "form", onSubmit: m, children: [A, j] })),
            (R[45] = A),
            (R[46] = j),
            (R[47] = m),
            (R[48] = S))
          : (S = R[48]),
        R[49] !== q || R[50] !== S || R[51] !== K || R[52] !== u
          ? ((I = (0, i.jsx)(ev.lG, {
              open: !0,
              size: "compact",
              showDialogClose: K,
              shouldIgnoreClickOutside: q,
              onOpenChange: u,
              children: S,
            })),
            (R[49] = q),
            (R[50] = S),
            (R[51] = K),
            (R[52] = u),
            (R[53] = I))
          : (I = R[53]),
        I
      )
    }
    var tr = t("RNul")
    function tl(e) {
      let a,
        t,
        n,
        l,
        o,
        d,
        p,
        u,
        m,
        h,
        f,
        b,
        g,
        _,
        x,
        A,
        y = (0, s.c)(43),
        { canStartApplication: v, status: T, onStart: w, onDelete: j, starting: S, startFailed: I, deleting: R } = e,
        N = void 0 !== S && S,
        E = void 0 !== I && I,
        L = void 0 !== R && R,
        O = (0, r.useId)()
      y[0] === Symbol.for("react.memo_cache_sentinel") ? ((a = { preview: !1 }), (y[0] = a)) : (a = y[0])
      let { data: M } = (0, c.YL)(void 0, a),
        D = "start" === T && !v
      if ("loading" === T) {
        let e
        return (
          y[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(tr.y, { containerClassName: "self-center" })), (y[1] = e))
            : (e = y[1]),
          e
        )
      }
      if (eE(M)) {
        let e
        ;(y[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(P.A, {
              id: "rosalind.labEntrypoint.organizationAcademicPlanApprovalDescription",
              defaultMessage:
                "You’ll get the {rosalind} Academic Plan promotional plan for your lab’s new or existing workspace. <learnMore>Learn more</learnMore>",
              description:
                "Explains the promotional plan after a lab is approved, without a personal-account upgrade requirement. rosalind is the brand name Rosalind and must remain unchanged; translate Academic Plan as part of the plan name. learnMore links to more details.",
              values: { rosalind: "Rosalind", learnMore: eO },
            })),
            (y[3] = e))
          : (e = y[3]),
          (t = e))
      } else {
        let e
        ;(y[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(P.A, {
              id: "rosalind.labEntrypoint.academicPlanApprovalDescription",
              defaultMessage:
                "You’ll need to upgrade to a business plan. You’ll get the {rosalind} Academic Plan promotional plan for your lab’s new or existing workspace. <learnMore>Learn more</learnMore>",
              description:
                "Explains the business plan requirement after a lab is approved. rosalind is the brand name Rosalind and must remain unchanged; translate Academic Plan as part of the plan name. learnMore links to more details.",
              values: { rosalind: "Rosalind", learnMore: eO },
            })),
            (y[2] = e))
          : (e = y[2]),
          (t = e))
      }
      ;(y[4] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, i.jsx)(eM, {})), (y[4] = n)) : (n = y[4]),
        y[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)("h2", {
              className: "font-medium",
              children: (0, i.jsx)(P.A, {
                id: "rosalind.labEntrypoint.approvalHeading",
                defaultMessage: "Once you’re approved",
                description:
                  "Heading for what happens after an application for expanded GPT-Rosalind access is approved",
              }),
            })),
            (y[5] = l))
          : (l = y[5]),
        y[6] !== t
          ? ((o = (0, i.jsxs)("section", {
              className: "flex flex-col gap-2",
              children: [l, (0, i.jsx)("p", { className: "leading-relaxed text-secondary", children: t })],
            })),
            (y[6] = t),
            (y[7] = o))
          : (o = y[7]),
        y[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)("h2", {
              className: "font-medium",
              children: (0, i.jsx)(P.A, {
                id: "rosalind.labEntrypoint.requirementsHeading",
                defaultMessage: "What you’ll need",
                description:
                  "Heading for the information needed to complete an application for expanded GPT-Rosalind access",
              }),
            })),
            (y[8] = d))
          : (d = y[8]),
        y[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, i.jsxs)("section", {
              className: "flex flex-col gap-3 rounded-xl bg-secondary-soft p-5 text-sm leading-normal text-default",
              children: [
                d,
                (0, i.jsxs)("ul", {
                  className: "flex list-disc flex-col gap-2.5 ps-4.5 text-secondary",
                  children: [
                    (0, i.jsx)("li", {
                      children: (0, i.jsx)(P.A, {
                        id: "rosalind.labEntrypoint.labDetails",
                        defaultMessage: "Your lab’s name and website",
                        description: "Required lab identification information for a GPT-Rosalind access application",
                      }),
                    }),
                    (0, i.jsx)("li", {
                      children: (0, i.jsx)(P.A, {
                        id: "rosalind.labEntrypoint.memberEmails",
                        defaultMessage: "Proposed members’ email addresses",
                        description:
                          "Required email addresses of people who would join the lab’s GPT-Rosalind workspace",
                      }),
                    }),
                    (0, i.jsx)("li", {
                      children: (0, i.jsx)(P.A, {
                        id: "rosalind.labEntrypoint.researchPlans",
                        defaultMessage: "Research plans and intended use",
                        description:
                          "Required description of the applicant’s research plans and intended use of GPT-Rosalind",
                      }),
                    }),
                    (0, i.jsx)("li", {
                      children: (0, i.jsx)(P.A, {
                        id: "rosalind.labEntrypoint.safeguards",
                        defaultMessage: "Access locations and research safeguards",
                        description:
                          "Required information about where GPT-Rosalind will be accessed and the applicant’s research safeguards",
                      }),
                    }),
                  ],
                }),
              ],
            })),
            (y[9] = p))
          : (p = y[9]),
        y[10] !== O || y[11] !== D
          ? ((u =
              D &&
              (0, i.jsx)("p", {
                id: O,
                className: "text-sm text-danger select-text",
                role: "alert",
                children: (0, i.jsx)(P.A, {
                  id: "rosalind.labEntrypoint.eligibleEmailDomains",
                  defaultMessage:
                    "Only accounts with a valid .edu or .org email address are eligible to apply for lab access to Rosalind",
                  description:
                    "Explains why starting a Rosalind lab access application is disabled when the signed-in account does not have a valid email address ending in .edu or .org. Keep .edu and .org untranslated.",
                }),
              })),
            (y[10] = O),
            (y[11] = D),
            (y[12] = u))
          : (u = y[12]),
        y[13] !== E || y[14] !== T
          ? ((m =
              (E || "error" === T) &&
              (0, i.jsx)("p", {
                className: "text-sm text-danger select-text",
                role: "alert",
                children:
                  "error" === T
                    ? (0, i.jsx)(P.A, {
                        id: "rosalind.labEntrypoint.loadApplicationFailed",
                        defaultMessage: "We couldn’t check for existing applications. Please try again.",
                        description:
                          "Error on the GPT-Rosalind lab application entry screen when checking for a saved application fails. The applicant can retry without creating another application.",
                      })
                    : (0, i.jsx)(P.A, {
                        id: "rosalind.labEntrypoint.createDraftFailed",
                        defaultMessage: "We couldn’t start your application. Please try again.",
                        description:
                          "Error on the GPT-Rosalind lab application entry screen when creating the application draft fails. The applicant can retry with the Start application button.",
                      }),
              })),
            (y[13] = E),
            (y[14] = T),
            (y[15] = m))
          : (m = y[15]))
      let k = D ? O : void 0,
        G = D || L
      return (
        y[16] !== T
          ? ((h =
              "error" === T &&
              (0, i.jsx)(P.A, {
                id: "rosalind.labEntrypoint.retryApplications",
                defaultMessage: "Try again",
                description: "Button to retry checking for a saved GPT-Rosalind lab application",
              })),
            (y[16] = T),
            (y[17] = h))
          : (h = y[17]),
        y[18] !== T
          ? ((f =
              "continue" === T &&
              (0, i.jsx)(P.A, {
                id: "rosalind.labEntrypoint.continueApplication",
                defaultMessage: "Continue application",
                description:
                  "Button to resume a saved application for expanded GPT-Rosalind access with its existing answers",
              })),
            (y[18] = T),
            (y[19] = f))
          : (f = y[19]),
        y[20] !== T
          ? ((b =
              "start" === T &&
              (0, i.jsx)(P.A, {
                id: "rosalind.labEntrypoint.startApplication",
                defaultMessage: "Start application",
                description: "Button to start an application for expanded GPT-Rosalind access",
              })),
            (y[20] = T),
            (y[21] = b))
          : (b = y[21]),
        y[22] !== w || y[23] !== N || y[24] !== k || y[25] !== G || y[26] !== h || y[27] !== f || y[28] !== b
          ? ((g = (0, i.jsxs)(C.$, {
              className: "w-full self-start sm:w-auto",
              color: "primary",
              "aria-busy": N,
              "aria-describedby": k,
              disabled: G,
              loading: N,
              size: "beaconAction",
              onClick: w,
              children: [h, f, b],
            })),
            (y[22] = w),
            (y[23] = N),
            (y[24] = k),
            (y[25] = G),
            (y[26] = h),
            (y[27] = f),
            (y[28] = b),
            (y[29] = g))
          : (g = y[29]),
        y[30] !== L || y[31] !== j || y[32] !== N || y[33] !== T
          ? ((_ =
              "continue" === T &&
              null != j &&
              (0, i.jsx)(C.$, {
                className: "w-full self-start sm:w-auto",
                color: "dangerOutline",
                disabled: N,
                loading: L,
                size: "beaconAction",
                onClick: j,
                children: (0, i.jsx)(P.A, {
                  id: "rosalind.labEntrypoint.deleteDraft",
                  defaultMessage: "Delete application",
                  description:
                    "Button beside Continue application to delete the saved GPT-Rosalind lab application draft",
                }),
              })),
            (y[30] = L),
            (y[31] = j),
            (y[32] = N),
            (y[33] = T),
            (y[34] = _))
          : (_ = y[34]),
        y[35] !== g || y[36] !== _
          ? ((x = (0, i.jsxs)("div", { className: "flex flex-wrap items-center gap-3", children: [g, _] })),
            (y[35] = g),
            (y[36] = _),
            (y[37] = x))
          : (x = y[37]),
        y[38] !== u || y[39] !== m || y[40] !== x || y[41] !== o
          ? ((A = (0, i.jsxs)("div", {
              className:
                "flex flex-col gap-6 rounded-2xl border border-default bg-surface p-4.5 text-sm text-default select-text sm:p-6",
              children: [n, o, p, u, m, x],
            })),
            (y[38] = u),
            (y[39] = m),
            (y[40] = x),
            (y[41] = o),
            (y[42] = A))
          : (A = y[42]),
        A
      )
    }
    function to() {
      let e,
        a,
        t,
        r,
        l = (0, s.c)(10),
        { accountId: c, userId: d } = (0, o.As)()
      return (
        l[0] !== c || l[1] !== d ? ((e = JSON.stringify([c, d])), (l[0] = c), (l[1] = d), (l[2] = e)) : (e = l[2]),
        l[3] !== c || l[4] !== d ? ((a = { accountId: c, userId: d }), (l[3] = c), (l[4] = d), (l[5] = a)) : (a = l[5]),
        l[6] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, i.jsx)(tc, {})), (l[6] = t)) : (t = l[6]),
        l[7] !== e || l[8] !== a
          ? ((r = (0, i.jsx)(n.Ui, { scope: H, value: a, children: t }, e)), (l[7] = e), (l[8] = a), (l[9] = r))
          : (r = l[9]),
        r
      )
    }
    function tc() {
      let e,
        a,
        t,
        c,
        d,
        p,
        m,
        w,
        j,
        P,
        S,
        C,
        I,
        R,
        N,
        E,
        L,
        O,
        M,
        D = (0, s.c)(151),
        k = (0, n.gh)(H),
        G = (0, l.zy)(),
        B = (0, l.Zp)(),
        U = (0, f.A)(),
        [W] = (0, l.ok)(),
        { accountId: F, email: z, userId: Y, isLoading: V } = (0, o.As)(),
        K = (0, v.Y)(),
        Z = (0, n._U)(u.JW, "3428714435")
      D[0] !== F || D[1] !== Z || D[2] !== z || D[3] !== V || D[4] !== Y
        ? ((e = !V && null != F && null != Y && null != z && (Z || /\.(edu|org)$/i.test(z)) && ag.safeParse(z).success),
          (D[0] = F),
          (D[1] = Z),
          (D[2] = z),
          (D[3] = V),
          (D[4] = Y),
          (D[5] = e))
        : (e = D[5])
      let J = e,
        X = (0, r.useRef)(null),
        Q = (0, r.useRef)(null),
        [ee, ea] = (0, r.useState)(!1),
        [et, ei] = (0, r.useState)(0),
        [es, en] = (0, r.useState)(null),
        [er, el] = (0, r.useState)(null),
        [ec, ed] = (0, r.useState)(null),
        [ep, eu] = (0, r.useState)(null),
        em = (0, n.Ul)(q),
        { data: eh, isPending: ef, isFetching: eb, isError: eg, refetch: e_ } = (0, n.Ul)(aP),
        { mutate: ex, isPending: eA, isError: ey } = (0, n.Ul)(aC),
        { isPending: ev } = (0, n.Ul)(aI),
        { isPending: eT } = (0, n.Ul)(aN),
        { isPending: ej } = (0, n.Ul)(aL),
        { data: eP, isPending: eS, isSuccess: eC } = (0, n.Ul)(aO),
        { mutate: eI, isPending: eR, isError: eN } = (0, n.Ul)(aR),
        { mutate: eE, isPending: eL, isError: eO } = (0, n.Ul)(aE),
        eM = (0, r.useRef)(null)
      ;(D[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = () => () => eM.current?.abort()), (D[6] = a))
        : (a = D[6]),
        D[7] !== F || D[8] !== ep || D[9] !== ee
          ? ((t = [F, ep, ee]), (D[7] = F), (D[8] = ep), (D[9] = ee), (D[10] = t))
          : (t = D[10]),
        (0, r.useEffect)(a, t))
      let eD = null != eh && "draft" !== eh.state && "submitting" !== eh.state ? eh : null
      ;(D[11] !== em || D[12] !== eh || D[13] !== eb || D[14] !== eg || D[15] !== ef
        ? ((c = "start"),
          null != em
            ? (c = "continue")
            : ef || eb
              ? (c = "loading")
              : eg
                ? (c = "error")
                : null != eh && (c = "continue"),
          (D[11] = em),
          (D[12] = eh),
          (D[13] = eb),
          (D[14] = eg),
          (D[15] = ef),
          (D[16] = c))
        : (c = D[16]),
        D[17] !== k
          ? ((d = function (e) {
              ;(k.set($, null),
                ea(!0),
                eu(e),
                X.current?.closest("main")?.parentElement?.scrollTo({ top: 0, behavior: "instant" }))
            }),
            (D[17] = k),
            (D[18] = d))
          : (d = D[18]))
      let eG = d
      if (
        D[19] !== F ||
        D[20] !== J ||
        D[21] !== ex ||
        D[22] !== z ||
        D[23] !== c ||
        D[24] !== eh ||
        D[25] !== ee ||
        D[26] !== ev ||
        D[27] !== eA ||
        D[28] !== e_ ||
        D[29] !== k ||
        D[30] !== Y
      ) {
        function eB(e, a, t) {
          let i = void 0 === t ? "lab" : t
          ;((0, x.yy)(k, h.op, {
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
            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED" === e && eu(i))
        }
        ;((p = function () {
          if (!eA && !ev && "loading" !== c) {
            if ("error" === c) {
              ;(ee ||
                (0, x.yy)(k, h.op, {
                  flow: "CHATGPT_WEB_ROSALIND_APPLICATION_FLOW_LAB",
                  surface: "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_FORM",
                  step: ai.entry,
                  action: "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_RETRY_STATUS",
                  result: "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                }),
                e_().then(() => {
                  k.get(b.chatGptAuthenticatedAccountId$) === F && k.get(b.chatGptAuthenticatedUserId$) === Y && ei(td)
                }))
              return
            }
            if (
              (ea(!1), null != eh && (null == k.get(q) || "submitting" === eh.state) && eo(k, eh), null != k.get(q))
            ) {
              let e = "review",
                a = k.get(q)?.state !== "submitting"
              ;(a && !k.get(ax)
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
              ex(
                { accountId: F, idempotencyKey: Q.current },
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
          (D[19] = F),
          (D[20] = J),
          (D[21] = ex),
          (D[22] = z),
          (D[23] = c),
          (D[24] = eh),
          (D[25] = ee),
          (D[26] = ev),
          (D[27] = eA),
          (D[28] = e_),
          (D[29] = k),
          (D[30] = Y),
          (D[31] = p))
      } else p = D[31]
      D[32] !== F || D[33] !== ee || D[34] !== k || D[35] !== Y
        ? ((m = function (e, a, t) {
            ee ||
              k.get(b.chatGptAuthenticatedAccountId$) !== F ||
              k.get(b.chatGptAuthenticatedUserId$) !== Y ||
              (0, x.yy)(k, h.op, {
                flow: "CHATGPT_WEB_ROSALIND_APPLICATION_FLOW_LAB",
                surface: "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_STATUS",
                action: e,
                result: a,
                failureReason: t,
              })
          }),
          (D[32] = F),
          (D[33] = ee),
          (D[34] = k),
          (D[35] = Y),
          (D[36] = m))
        : (m = D[36])
      let eU = m,
        eW = !1
      if (null != eD && "entry" !== ep) {
        let e, a, t, s, n, r, l, o
        D[38] !== ee || D[39] !== eD.id
          ? ((e = (0, i.jsx)(as, { isDebugging: ee }, eD.id)), (D[38] = ee), (D[39] = eD.id), (D[40] = e))
          : (e = D[40])
        let c = `${eD.id}:${eD.state}`
        ;(D[41] !== eU
          ? ((a = () =>
              eU(
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_OPEN_WORKSPACE",
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
              )),
            (D[41] = eU),
            (D[42] = a))
          : (a = D[42]),
          D[43] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = () => eM.current?.abort()), (D[43] = t))
            : (t = D[43]),
          D[44] !== F || D[45] !== eE || D[46] !== K || D[47] !== G || D[48] !== B || D[49] !== eD
            ? ((s = (e) => {
                eM.current?.abort()
                let a = new AbortController()
                ;((eM.current = a),
                  eE(
                    {
                      accountId: F,
                      application: eD,
                      consent: e,
                      appearance: !0 === K ? "dark" : "light",
                      signal: a.signal,
                    },
                    {
                      onSuccess: (e) => {
                        a.signal.aborted ||
                          ("tag" in e && "custom_checkout_session" === e.tag
                            ? B((0, _.L7)(e), { state: { checkoutReturnLocation: G } })
                            : null != e.url && window.location.assign(e.url))
                      },
                    },
                  ))
              }),
              (D[44] = F),
              (D[45] = eE),
              (D[46] = K),
              (D[47] = G),
              (D[48] = B),
              (D[49] = eD),
              (D[50] = s))
            : (s = D[50]),
          D[51] !== F || D[52] !== k || D[53] !== eD
            ? ((n =
                null == F
                  ? void 0
                  : async (e) => {
                      await k.get(aL).mutateAsync({ accountId: F, application: eD, request: e })
                    }),
              (D[51] = F),
              (D[52] = k),
              (D[53] = eD),
              (D[54] = n))
            : (n = D[54]),
          D[55] !== eU || D[56] !== eD
            ? ((r = () => {
                ;(eU(
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCELLATION_CONFIRMATION",
                  "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                ),
                  ed(eD))
              }),
              (D[55] = eU),
              (D[56] = eD),
              (D[57] = r))
            : (r = D[57]),
          D[58] !== eO ||
          D[59] !== eL ||
          D[60] !== eD ||
          D[61] !== n ||
          D[62] !== r ||
          D[63] !== c ||
          D[64] !== a ||
          D[65] !== s
            ? ((l = (0, i.jsx)(
                ae,
                {
                  application: eD,
                  onOpenWorkspace: a,
                  onCancelCheckout: t,
                  onCreateWorkspace: s,
                  checkoutFailed: eO,
                  checkoutPending: eL,
                  onSaveRetentionRequest: n,
                  onCancel: r,
                },
                c,
              )),
              (D[58] = eO),
              (D[59] = eL),
              (D[60] = eD),
              (D[61] = n),
              (D[62] = r),
              (D[63] = c),
              (D[64] = a),
              (D[65] = s),
              (D[66] = l))
            : (l = D[66]),
          D[67] !== l || D[68] !== e
            ? ((o = (0, i.jsxs)(i.Fragment, { children: [e, l] })), (D[67] = l), (D[68] = e), (D[69] = o))
            : (o = D[69]),
          (w = o))
      } else if (null != ep && "entry" !== ep && "submitted" !== ep && (ee || null != em)) {
        let e,
          a,
          t,
          s = eh?.state === "submitting" ? "review" : ep
        ;(D[70] === Symbol.for("react.memo_cache_sentinel") ? ((e = () => eu(null)), (D[70] = e)) : (e = D[70]),
          D[71] !== eG
            ? ((a = (e) => {
                e ? eG("entry") : (ea(!1), eu(null))
              }),
              (D[71] = eG),
              (D[72] = a))
            : (a = D[72]),
          D[73] !== ee || D[74] !== s || D[75] !== a
            ? ((t = (0, i.jsx)(ts, { selectedTab: s, isDebugging: ee, onStepChange: eu, onSubmitted: e, onBack: a })),
              (D[73] = ee),
              (D[74] = s),
              (D[75] = a),
              (D[76] = t))
            : (t = D[76]),
          (w = t))
      } else {
        let e, a, t, s
        ;((eW = !0),
          D[77] !== ee
            ? ((e = (0, i.jsx)(an, { step: "entry", isDebugging: ee })), (D[77] = ee), (D[78] = e))
            : (e = D[78]),
          D[79] !== em || D[80] !== eh || D[81] !== eU || D[82] !== eD
            ? ((a =
                null == eD
                  ? () => {
                      let e = eh?.state === "submitting" ? eh : (em ?? eh)
                      null != e &&
                        ("submitting" === e.state
                          ? (eU(
                              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCELLATION_CONFIRMATION",
                              "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                            ),
                            ed(e))
                          : el(e))
                    }
                  : void 0),
              (D[79] = em),
              (D[80] = eh),
              (D[81] = eU),
              (D[82] = eD),
              (D[83] = a))
            : (a = D[83]),
          D[84] !== J || D[85] !== c || D[86] !== ev || D[87] !== ey || D[88] !== eA || D[89] !== p || D[90] !== a
            ? ((t = (0, i.jsx)(tl, {
                canStartApplication: J,
                status: c,
                onStart: p,
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
              (D[89] = p),
              (D[90] = a),
              (D[91] = t))
            : (t = D[91]),
          D[92] !== e || D[93] !== t
            ? ((s = (0, i.jsxs)(i.Fragment, { children: [e, t] })), (D[92] = e), (D[93] = t), (D[94] = s))
            : (s = D[94]),
          (w = s))
      }
      D[95] !== W ? ((j = W.get("embedded")), (D[95] = W), (D[96] = j)) : (j = D[96])
      let eH = "codex" === j
      ;(D[97] !== eR || D[98] !== ev || D[99] !== eA || D[100] !== ej || D[101] !== k
        ? ((P = () => {
            eA ||
              ev ||
              eR ||
              ej ||
              k.get(aN).isPending ||
              k.get(aO).isPending ||
              (k.set($, null),
              ea(!1),
              eu("entry"),
              X.current?.closest("main")?.parentElement?.scrollTo({ top: 0, behavior: "instant" }))
          }),
          (D[97] = eR),
          (D[98] = ev),
          (D[99] = eA),
          (D[100] = ej),
          (D[101] = k),
          (D[102] = P))
        : (P = D[102]),
        D[103] === Symbol.for("react.memo_cache_sentinel") ? ((S = (0, i.jsx)(y.Z, {})), (D[103] = S)) : (S = D[103]),
        D[104] !== Z ? ((C = !1), (D[104] = Z), (D[105] = C)) : (C = D[105]))
      let eq = V || ef || eb ? "loading" : c
      return (
        D[106] !== J || D[107] !== et || D[108] !== ee || D[109] !== eW || D[110] !== eq
          ? ((I = (0, i.jsx)(aa, {
              status: eq,
              canStartApplication: J,
              retryCount: et,
              isDebugging: ee,
              isVisible: eW,
            })),
            (D[106] = J),
            (D[107] = et),
            (D[108] = ee),
            (D[109] = eW),
            (D[110] = eq),
            (D[111] = I))
          : (I = D[111]),
        D[112] !== ev || D[113] !== eA || D[114] !== eT || D[115] !== ej || D[116] !== eS
          ? ((R = !1), (D[112] = ev), (D[113] = eA), (D[114] = eT), (D[115] = ej), (D[116] = eS), (D[117] = R))
          : (R = D[117]),
        D[118] !== ec ||
        D[119] !== er ||
        D[120] !== ep ||
        D[121] !== es ||
        D[122] !== ee ||
        D[123] !== eC ||
        D[124] !== eD ||
        D[125] !== eP?.id
          ? ((N =
              !ee &&
              "entry" !== ep &&
              eC &&
              null != eD &&
              eP?.id === eD.id &&
              es !== eD.id &&
              ek(eD) &&
              null == ec &&
              null == er &&
              (0, i.jsx)(ew, { onClose: () => en(eD.id) })),
            (D[118] = ec),
            (D[119] = er),
            (D[120] = ep),
            (D[121] = es),
            (D[122] = ee),
            (D[123] = eC),
            (D[124] = eD),
            (D[125] = eP?.id),
            (D[126] = N))
          : (N = D[126]),
        D[127] !== F ||
        D[128] !== ec ||
        D[129] !== eI ||
        D[130] !== eN ||
        D[131] !== U ||
        D[132] !== eR ||
        D[133] !== eU ||
        D[134] !== k
          ? ((E =
              null != ec &&
              (0, i.jsx)(T.v, {
                pending: eR,
                failed: eN,
                onClose: () => {
                  ;(eU(
                    "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCELLATION_CONFIRMATION",
                    "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_CANCELLED",
                  ),
                    ed(null))
                },
                onConfirm: () => {
                  k.get(aR).isPending ||
                    (eU(
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCELLATION_CONFIRMATION",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                    ),
                    eU(
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCEL",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                    ),
                    eI(
                      { accountId: F, application: ec },
                      {
                        onSuccess: () => {
                          ;(eU(
                            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCEL",
                            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                          ),
                            (Q.current = null),
                            eu(null),
                            ea(!1),
                            ed(null),
                            k
                              .get(g.Id)
                              .success(
                                U.formatMessage({
                                  id: "rosalind.cancelApplication.succeeded",
                                  defaultMessage: "Application canceled",
                                  description:
                                    "Confirmation shown after successfully withdrawing a GPT-Rosalind lab application from review",
                                }),
                              ))
                        },
                        onError: () => {
                          eU(
                            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCEL",
                            "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_UNCONFIRMED",
                            "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_REQUEST_FAILED",
                          )
                        },
                      },
                    ))
                },
              })),
            (D[127] = F),
            (D[128] = ec),
            (D[129] = eI),
            (D[130] = eN),
            (D[131] = U),
            (D[132] = eR),
            (D[133] = eU),
            (D[134] = k),
            (D[135] = E))
          : (E = D[135]),
        D[136] !== er || D[137] !== ee
          ? ((L =
              null != er &&
              (0, i.jsx)(tn, {
                application: er,
                isDebugging: ee,
                onClose: () => el(null),
                onDeleted: () => {
                  ;((Q.current = null), el(null))
                },
              })),
            (D[136] = er),
            (D[137] = ee),
            (D[138] = L))
          : (L = D[138]),
        D[139] !== w || D[140] !== I || D[141] !== R || D[142] !== N || D[143] !== E || D[144] !== L || D[145] !== C
          ? ((O = (0, i.jsxs)("div", { ref: X, className: "flex flex-col gap-8", children: [S, C, I, w, R, N, E, L] })),
            (D[139] = w),
            (D[140] = I),
            (D[141] = R),
            (D[142] = N),
            (D[143] = E),
            (D[144] = L),
            (D[145] = C),
            (D[146] = O))
          : (O = D[146]),
        D[147] !== O || D[148] !== eH || D[149] !== P
          ? ((M = (0, i.jsx)(A.x, { embedded: eH, onHome: P, children: O })),
            (D[147] = O),
            (D[148] = eH),
            (D[149] = P),
            (D[150] = M))
          : (M = D[150]),
        M
      )
    }
    function td(e) {
      return e + 1
    }
    let tp = "1062673654"
    function tu() {
      let e,
        a,
        t,
        h,
        f,
        b,
        g = (0, s.c)(20),
        _ = (0, l.Zp)(),
        { accountId: x, email: A, isLoading: y } = (0, o.As)()
      g[0] !== A ? ((e = ag.safeParse(A)), (g[0] = A), (g[1] = e)) : (e = g[1])
      let v = e.success
      g[2] === Symbol.for("react.memo_cache_sentinel") ? ((a = { preview: !1 }), (g[2] = a)) : (a = g[2])
      let { data: T, isLoading: w, isError: j } = (0, c.YL)(void 0, a),
        P = (0, n._U)(u.JW, tp),
        S = (0, n._U)(u.dx, tp),
        C = (0, n._U)(u.JW, "3428714435"),
        I = (0, n.Ul)(u.RS)
      g[3] !== T ||
      g[4] !== j ||
      g[5] !== x ||
      g[6] !== w ||
      g[7] !== C ||
      g[8] !== S ||
      g[9] !== v ||
      g[10] !== I ||
      g[11] !== y
        ? ((t =
            !y &&
            v &&
            !I &&
            !S &&
            !w &&
            !j &&
            T?.id === x &&
            T?.structure === "workspace" &&
            (0, m.J8)(T.plan_type) &&
            !C),
          (g[3] = T),
          (g[4] = j),
          (g[5] = x),
          (g[6] = w),
          (g[7] = C),
          (g[8] = S),
          (g[9] = v),
          (g[10] = I),
          (g[11] = y),
          (g[12] = t))
        : (t = g[12])
      let R = t
      if (
        (g[13] !== _ || g[14] !== R
          ? ((h = () => {
              R &&
                ((0, d.E0)({ href: "https://chatgpt.com/rosalind/application", initiator: "external_link" }),
                _("/", { replace: !0 }))
            }),
            (f = [R, _]),
            (g[13] = _),
            (g[14] = R),
            (g[15] = h),
            (g[16] = f))
          : ((h = g[15]), (f = g[16])),
        (0, r.useEffect)(h, f),
        y || I || S || w || R)
      ) {
        let e
        return (
          g[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(p.LoadingPage, { fillParent: !0 })), (g[17] = e))
            : (e = g[17]),
          e
        )
      }
      if (!v || !P || j || null == T || T.id !== x) {
        let e
        return (
          g[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(l.C5, { to: "/", replace: !0 })), (g[18] = e))
            : (e = g[18]),
          e
        )
      }
      return (
        g[19] === Symbol.for("react.memo_cache_sentinel") ? ((b = (0, i.jsx)(to, {})), (g[19] = b)) : (b = g[19]),
        b
      )
    }
  },
  uMJm(e, a, t) {
    let i = (0, t("iJY0").a)({
      name: "arrow-left-md-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.682129, y: 4.14209, width: 8.843018, height: 7.716309 },
        visualBounds: { x: 3.682129, y: 4.14209, width: 8.843018, height: 7.716309 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.682129, y: 4.14209, width: 8.843018, height: 7.716309 },
        center: { x: 8.103638, y: 8.000244 },
        insets: { top: 4.14209, right: 3.474853, bottom: 4.141601, left: 3.682129 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.103638, y: 8.000244 }, foreground: { x: 8.103638, y: 8.000244 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6.96163 4.29558C7.16647 4.09074 7.49875 4.09111 7.70382 4.29558C7.90884 4.50061 7.90884 4.83275 7.70382 5.03777L5.26534 7.47527H11.9997C12.2897 7.47527 12.5251 7.71071 12.5251 8.00066C12.525 8.29048 12.2896 8.52605 11.9997 8.52605H5.2673L7.70382 10.9626C7.90884 11.1676 7.90884 11.4997 7.70382 11.7048C7.49877 11.9094 7.16654 11.9097 6.96163 11.7048L3.98214 8.72527C3.58225 8.32496 3.582 7.67524 3.98214 7.27508L6.96163 4.29558Z" fill="currentColor"/>',
    })
    t.d(a, {}, { x: i })
  },
}
//# sourceMappingURL=282341.512022db50.js.map
