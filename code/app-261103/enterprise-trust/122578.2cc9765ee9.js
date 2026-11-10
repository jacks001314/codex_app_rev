export const __rspack_esm_ids = [122578]
export const __webpack_modules__ = {
  dN6L(e, a, i) {
    var t = i("nPFn"),
      n = i("DBCl"),
      s = i("ASxG"),
      o = i("Ghh3"),
      r = i("GDNt")
    let c = s.object({
        inquiryId: s.string().regex(/^inq_[A-Za-z0-9]{16,64}$/),
        environmentId: s.string().regex(/^env_[A-Za-z0-9]{16,64}$/),
        status: s.enum([
          "created",
          "started",
          "pending",
          "completed",
          "needs_review",
          "failed",
          "approved",
          "declined",
          "expired",
        ]),
        fields: s.record(s.string(), s.string()),
        sessionToken: s
          .string()
          .regex(/^[A-Za-z0-9._~+/=-]{16,2048}$/)
          .optional(),
      }),
      l = s.object({ ok: s.literal(!0), result: c }),
      d = s.object({
        organizationId: s.string(),
        state: s.custom(t.kO),
        bioagentsApplicationReference: s.string().regex(/^[0-9a-f]{64}$/),
        canCancel: s.boolean(),
        canResumeVerification: s.boolean().optional(),
        enhancedPrivacyFollowUpRequested: s.boolean().optional(),
        requestedResearchMode: s.custom(t.PI).optional(),
        kybStatus: s
          .enum(["not_started", "in_progress", "pending", "action_required", "passed", "failed", "expired", "error"])
          .optional(),
        requiredAction: s.string().optional(),
        actionOwner: s.literal("applicant").optional(),
        personaInquiryId: s
          .string()
          .regex(/^inq_[A-Za-z0-9]{16,64}$/)
          .optional(),
        personaEnvironmentId: s
          .string()
          .regex(/^env_[A-Za-z0-9]{16,64}$/)
          .optional(),
      }),
      p = s.looseObject({ code: s.string().optional() }),
      u = s.enum([
        "backend_unavailable",
        "invalid_provider_response",
        "invalid_request",
        "not_configured",
        "organization_unavailable",
        "provider_unavailable",
      ])
    class h extends Error {
      code
      status
      constructor(e, a) {
        ;(super("Rosalind business verification is unavailable"),
          (this.code = e),
          (this.status = a),
          (this.name = "RosalindPersonaRequestError"))
      }
    }
    async function g(e) {
      try {
        let a = l.safeParse(await e)
        if (!a.success) throw new h("invalid_provider_response")
        return a.data.result
      } catch (a) {
        if (a instanceof h) throw a
        let e = f(a)
        throw new h(u.safeParse(e?.body.code).data ?? "backend_unavailable", e?.status)
      }
    }
    function f(e) {
      if (!(e instanceof r.fk)) return null
      try {
        let a = p.safeParse(JSON.parse(e.message))
        return a.success ? { body: a.data, status: e.status } : null
      } catch {
        return null
      }
    }
    i.d(
      a,
      {},
      {
        HU: async function (e, a, i) {
          return g(
            o.Request.safeRequest("post", "/rosalind/access/persona/status", {
              additionalHeaders: { [n.zBc]: e.accountId },
              expectedIdentity: e,
              expectedErrorStatuses: [400, 401, 403, 404, 422, 502, 503],
              requestBody: a,
              retry: !1,
              signal: i,
            }),
          )
        },
        _k: async function (e, a = {}) {
          return o.Request.safeRequest("get", "/rosalind/access/context", {
            parameters: { query: { fastDiscovery: !1, organizationId: a.organizationId } },
            additionalHeaders: { [n.zBc]: e.accountId },
            expectedIdentity: e,
            expectedErrorStatuses: [400, 401, 403, 404, 422, 502, 503],
            retry: !1,
            signal: a.signal,
          })
        },
        ld: async function (e, a, i) {
          try {
            var t, s
            let r,
              c = await o.Request.safeRequest("post", "/rosalind/access/applications", {
                parameters: { header: a.headers },
                additionalHeaders: { [n.zBc]: e.accountId, ...a.headers },
                expectedIdentity: e,
                expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 502, 503],
                requestBody: a.body,
                retry: !1,
                signal: i,
              }),
              l = d.safeParse(c)
            if (
              !l.success ||
              l.data.organizationId !== a.body.organizationId ||
              ((t = l.data),
              (s = a.body),
              (r =
                "requestedEnhancedPrivacy" in s
                  ? s.requestedEnhancedPrivacy
                    ? "research_zdr"
                    : "research_non_zdr"
                  : (s.requestedResearchMode ?? "research_non_zdr")),
              (void 0 !== t.requestedResearchMode && t.requestedResearchMode !== r) ||
                (void 0 === t.personaInquiryId) != (void 0 === t.personaEnvironmentId))
            )
              throw Error("Invalid Rosalind application response")
            return { submitted: !0, ...l.data }
          } catch (i) {
            let e = (function (e, a) {
              let i = f(e)
              if (null == i) return null
              let { body: t, status: n } = i
              if (409 === n && "already_submitted" === t.code) {
                let e = d.safeParse(t)
                return e.success && e.data.organizationId === a
                  ? {
                      submitted: !1,
                      code: "application_conflict",
                      organizationId: a,
                      state: e.data.state,
                      bioagentsApplicationReference: e.data.bioagentsApplicationReference,
                      canCancel: e.data.canCancel,
                      canResumeVerification: e.data.canResumeVerification,
                      requestedResearchMode: e.data.requestedResearchMode,
                      kybStatus: e.data.kybStatus,
                    }
                  : { submitted: !1, code: "invalid_backend_response" }
              }
              switch (t.code) {
                case "application_history_limit":
                case "application_unprocessable":
                case "backend_unavailable":
                case "idempotency_conflict":
                case "invalid_application":
                case "invalid_idempotency_key":
                case "organization_unavailable":
                case "submissions_disabled":
                  return { submitted: !1, code: t.code }
                case "fresh_persona_required":
                case "suitability_admission_conflict":
                  return { submitted: !1, code: "application_unprocessable" }
                case "persona_verification_unavailable":
                  return { submitted: !1, code: "backend_unavailable" }
                default:
                  if (422 === n) return { submitted: !1, code: "invalid_application" }
                  if (403 === n) return { submitted: !1, code: "organization_unavailable" }
                  if (n >= 500) return { submitted: !1, code: "backend_unavailable" }
                  return { submitted: !1, code: "invalid_backend_response" }
              }
            })(i, a.body.organizationId)
            if (null != e) return e
            throw i
          }
        },
        zE: async function (e, a, i) {
          return g(
            o.Request.safeRequest("post", "/rosalind/access/persona/start", {
              additionalHeaders: { [n.zBc]: e.accountId },
              expectedIdentity: e,
              expectedErrorStatuses: [400, 401, 403, 404, 422, 502, 503],
              requestBody: a,
              retry: !1,
              signal: i,
            }),
          )
        },
      },
    )
  },
  YndV(e, a, i) {
    var t = i("ABep"),
      n = i("QosV"),
      s = i("Wf1j"),
      o = i("oyxz"),
      r = i("TjgH"),
      c = i("GO7r"),
      l = i("sgGK"),
      d = i("Ohp5"),
      p = i("b6mf"),
      u = i("sVuh"),
      h = i("A8Fn")
    i.d(
      a,
      {},
      {
        Z: function (e) {
          let a,
            i,
            g,
            f,
            m,
            b,
            v,
            y,
            _,
            w,
            P,
            z,
            R,
            T,
            x,
            A,
            M,
            S,
            G,
            k,
            I,
            C,
            q,
            O,
            D,
            L,
            j,
            N,
            E,
            V,
            X,
            H = (0, n.c)(88),
            {
              application: B,
              answers: U,
              applicantName: F,
              applicantEmail: $,
              organization: Y,
              headingRef: W,
              children: K,
              footer: Z,
            } = e,
            Q = (0, s.A)()
          H[0] !== Q
            ? ((a = (e) => Q.formatDisplayName(e, { type: "region" }) ?? e), (H[0] = Q), (H[1] = a))
            : (a = H[1])
          let J = a
          H[2] !== U.selectedSafeguards
            ? ((i = U.selectedSafeguards ?? []), (H[2] = U.selectedSafeguards), (H[3] = i))
            : (i = H[3])
          let ee = i,
            ea = "action_required" === B.state && "applicant" !== B.actionOwner ? "in_progress" : B.state
          H[4] !== ea
            ? ((g =
                "canceled" === ea
                  ? h.t.canceled
                  : {
                      submitted: p.X.submittedStatus,
                      in_progress: p.X.inProgressStatus,
                      action_required: p.X.actionRequiredStatus,
                      approved: p.X.approvedStatus,
                      access_granted: p.X.accessGrantedStatus,
                      revoked: p.X.accessRevokedStatus,
                      denied: p.X.deniedStatus,
                    }[ea]),
              (H[4] = ea),
              (H[5] = g))
            : (g = H[5])
          let ei = g
          if (
            (H[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (0, t.jsx)("span", {
                  className: "flex size-12 items-center justify-center rounded-full bg-success-soft text-success",
                  "aria-hidden": "true",
                  children: (0, t.jsx)(c.lIO, {}),
                })),
                (H[6] = f))
              : (f = H[6]),
            H[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = (0, t.jsx)(o.A, { ...h.t.title })), (H[7] = m))
              : (m = H[7]),
            H[8] !== W
              ? ((b = (0, t.jsx)("h1", {
                  ref: W,
                  className: "text-heading-md leading-8 font-semibold outline-none select-text md:text-heading-lg",
                  tabIndex: -1,
                  children: m,
                })),
                (H[8] = W),
                (H[9] = b))
              : (b = H[9]),
            H[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = (0, t.jsx)("p", {
                  className: "text-sm leading-5 text-secondary select-text",
                  children: (0, t.jsx)(o.A, { ...h.t.description }),
                })),
                (H[10] = v))
              : (v = H[10]),
            H[11] !== b
              ? ((y = (0, t.jsxs)("header", { className: "flex flex-col items-start gap-3", children: [f, b, v] })),
                (H[11] = b),
                (H[12] = y))
              : (y = H[12]),
            H[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((_ = (0, t.jsx)(o.A, { ...h.t.details })), (H[13] = _))
              : (_ = H[13]),
            H[14] !== ei
              ? ((w = (0, t.jsx)(r.E, { variant: "neutral", children: (0, t.jsx)(o.A, { ...ei }) })),
                (H[14] = ei),
                (H[15] = w))
              : (w = H[15]),
            H[16] !== B.bioagentsApplicationReference
              ? ((P = (0, t.jsx)(d.gi, {
                  label: h.t.reference,
                  children: (0, t.jsx)("span", {
                    className: "font-mono text-xs break-all",
                    children: B.bioagentsApplicationReference,
                  }),
                })),
                (H[16] = B.bioagentsApplicationReference),
                (H[17] = P))
              : (P = H[17]),
            H[18] !== F
              ? ((z = F && (0, t.jsx)(d.gi, { label: h.t.primaryContact, children: F })), (H[18] = F), (H[19] = z))
              : (z = H[19]),
            H[20] !== $
              ? ((R = $ && (0, t.jsx)(d.gi, { label: h.t.contactEmail, children: $ })), (H[20] = $), (H[21] = R))
              : (R = H[21]),
            H[22] !== Y
              ? ((T = (0, t.jsx)(d.gi, {
                  label: p.X.summaryOrganization,
                  children: (0, t.jsx)(o.A, { ...h.t.organizationIdentity, values: Y }),
                })),
                (H[22] = Y),
                (H[23] = T))
              : (T = H[23]),
            H[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = (0, t.jsx)(d.gi, {
                  label: h.t.verification,
                  children: (0, t.jsx)(o.A, { ...h.t.verificationDuringReview }),
                })),
                (H[24] = x))
              : (x = H[24]),
            H[25] !== U.products || H[26] !== Q)
          ) {
            let e, a
            ;(H[28] !== U.products
              ? ((e = (e) => {
                  let { id: a } = e
                  return U.products.includes(a)
                }),
                (H[28] = U.products),
                (H[29] = e))
              : (e = H[29]),
              H[30] !== Q
                ? ((a = (e) => {
                    let { title: a } = e
                    return Q.formatMessage(a)
                  }),
                  (H[30] = Q),
                  (H[31] = a))
                : (a = H[31]),
              (A = Q.formatList(u.DA.filter(e).map(a))),
              (H[25] = U.products),
              (H[26] = Q),
              (H[27] = A))
          } else A = H[27]
          if (
            (H[32] !== A
              ? ((M = (0, t.jsx)(d.gi, { label: p.X.requestedAccess, children: A })), (H[32] = A), (H[33] = M))
              : (M = H[33]),
            H[34] !== U.researchScopes || H[35] !== Q)
          ) {
            let e, a
            ;(H[37] !== U.researchScopes
              ? ((e = (e) => {
                  let { id: a } = e
                  return U.researchScopes.includes(a)
                }),
                (H[37] = U.researchScopes),
                (H[38] = e))
              : (e = H[38]),
              H[39] !== Q
                ? ((a = (e) => {
                    let { title: a } = e
                    return Q.formatMessage(a)
                  }),
                  (H[39] = Q),
                  (H[40] = a))
                : (a = H[40]),
              (S = Q.formatList(u.IR.filter(e).map(a))),
              (H[34] = U.researchScopes),
              (H[35] = Q),
              (H[36] = S))
          } else S = H[36]
          return (
            H[41] !== S
              ? ((G = (0, t.jsx)(d.gi, { label: p.X.summaryScope, children: S })), (H[41] = S), (H[42] = G))
              : (G = H[42]),
            H[43] !== U.primaryCountry || H[44] !== J
              ? ((k = J(U.primaryCountry)), (H[43] = U.primaryCountry), (H[44] = J), (H[45] = k))
              : (k = H[45]),
            H[46] !== k
              ? ((I = (0, t.jsx)(d.gi, { label: p.X.summaryPrimaryLocation, children: k })), (H[46] = k), (H[47] = I))
              : (I = H[47]),
            H[48] !== U.additionalLocations
              ? ((C = "no" === U.additionalLocations && (0, t.jsx)(o.A, { ...p.X.none })),
                (H[48] = U.additionalLocations),
                (H[49] = C))
              : (C = H[49]),
            H[50] !== U.additionalLocations
              ? ((q = "unsure" === U.additionalLocations && (0, t.jsx)(o.A, { ...h.t.unconfirmedLocations })),
                (H[50] = U.additionalLocations),
                (H[51] = q))
              : (q = H[51]),
            H[52] !== U.additionalCountries || H[53] !== U.additionalLocations || H[54] !== J || H[55] !== Q
              ? ((O = "yes" === U.additionalLocations && Q.formatList((U.additionalCountries ?? []).map(J))),
                (H[52] = U.additionalCountries),
                (H[53] = U.additionalLocations),
                (H[54] = J),
                (H[55] = Q),
                (H[56] = O))
              : (O = H[56]),
            H[57] !== C || H[58] !== q || H[59] !== O
              ? ((D = (0, t.jsxs)(d.gi, { label: p.X.summaryAdditionalLocations, children: [C, q, O] })),
                (H[57] = C),
                (H[58] = q),
                (H[59] = O),
                (H[60] = D))
              : (D = H[60]),
            H[61] === Symbol.for("react.memo_cache_sentinel")
              ? ((L = (0, t.jsx)(d.gi, {
                  label: h.t.safeguards,
                  children: (0, t.jsx)(o.A, { ...h.t.safeguardsConfirmed }),
                })),
                (H[61] = L))
              : (L = H[61]),
            H[62] !== Q || H[63] !== ee
              ? ((j =
                  ee.length > 0 &&
                  (0, t.jsx)(d.gi, {
                    label: h.t.safeguardsInPlace,
                    children: Q.formatList(
                      u.MB.filter((e) => {
                        let { id: a } = e
                        return ee.includes(a)
                      }).map((e) => {
                        let { title: a } = e
                        return Q.formatMessage(a)
                      }),
                    ),
                  })),
                (H[62] = Q),
                (H[63] = ee),
                (H[64] = j))
              : (j = H[64]),
            H[65] !== U.otherSafeguardDetails || H[66] !== ee
              ? ((N =
                  ee.includes("other") &&
                  U.otherSafeguardDetails &&
                  (0, t.jsx)(d.gi, { label: h.t.otherSafeguards, children: U.otherSafeguardDetails })),
                (H[65] = U.otherSafeguardDetails),
                (H[66] = ee),
                (H[67] = N))
              : (N = H[67]),
            H[68] !== U.researchPurpose
              ? ((E = (0, t.jsx)(d.gi, {
                  label: p.X.researchPurposeSummary,
                  children: (0, t.jsx)("p", { className: "whitespace-pre-wrap", children: U.researchPurpose }),
                })),
                (H[68] = U.researchPurpose),
                (H[69] = E))
              : (E = H[69]),
            H[70] !== Z ||
            H[71] !== w ||
            H[72] !== P ||
            H[73] !== z ||
            H[74] !== R ||
            H[75] !== T ||
            H[76] !== M ||
            H[77] !== G ||
            H[78] !== I ||
            H[79] !== D ||
            H[80] !== j ||
            H[81] !== N ||
            H[82] !== E
              ? ((V = (0, t.jsxs)(l.e, {
                  title: _,
                  trailing: w,
                  footer: Z,
                  children: [P, z, R, T, x, M, G, I, D, L, j, N, E],
                })),
                (H[70] = Z),
                (H[71] = w),
                (H[72] = P),
                (H[73] = z),
                (H[74] = R),
                (H[75] = T),
                (H[76] = M),
                (H[77] = G),
                (H[78] = I),
                (H[79] = D),
                (H[80] = j),
                (H[81] = N),
                (H[82] = E),
                (H[83] = V))
              : (V = H[83]),
            H[84] !== K || H[85] !== V || H[86] !== y
              ? ((X = (0, t.jsxs)("section", {
                  className: "flex flex-col gap-6 text-sm text-default",
                  "aria-live": "polite",
                  children: [y, K, V],
                })),
                (H[84] = K),
                (H[85] = V),
                (H[86] = y),
                (H[87] = X))
              : (X = H[87]),
            X
          )
        },
      },
    )
  },
  gAIi(e, a, i) {
    var t = i("nPFn"),
      n = i("b6mf")
    let s = (e) => `application-error-${e}`,
      o = {
        organizationId: n.X.organizationRequired,
        researchPurpose: n.X.researchPurposeRequired,
        researchScopes: n.X.researchScopeRequired,
        products: n.X.productRequired,
        primaryCountry: n.X.countryRequired,
        additionalLocations: n.X.additionalLocationsRequired,
        additionalCountries: n.X.additionalCountriesRequired,
        otherSafeguardDetails: n.X.otherSafeguardsRequired,
        confirmResearchSafeguards: n.X.safeguardsRequired,
        certifyAccuracy: n.X.accuracyRequired,
        certifyAuthority: n.X.authorityRequired,
      }
    i.d(
      a,
      {},
      {
        Lv: (e, a) => ({ "aria-invalid": !!a || void 0, "aria-describedby": a ? s(e) : void 0 }),
        VD: function (e, a) {
          if ("TOO_BIG" === e.issue && ("researchPurpose" === e.field || "otherSafeguardDetails" === e.field))
            return a.formatMessage(
              {
                id: "chatgpt.rosalind_access.validation.text_length",
                description:
                  "Inline validation error beside a GPT-Rosalind free-text application field when it exceeds the unchanged schema limit. Placeholder {maximum} is the numeric maximum character count.",
                defaultMessage: "Use no more than {maximum} characters.",
              },
              { maximum: t.XO[e.field].max },
            )
          if ("TOO_BIG" === e.issue && "additionalCountries" === e.field)
            return a.formatMessage(
              {
                id: "chatgpt.rosalind_access.validation.additional_locations_limit",
                description:
                  "Inline validation error beside the GPT-Rosalind additional countries or regions selector when too many values are selected. Placeholder {maximum} is the numeric schema limit.",
                defaultMessage: "Select no more than {maximum} additional countries or regions.",
              },
              { maximum: t.XO.additionalCountries.max },
            )
          if ("INVALID_VALUE" === e.issue && "researchScopes" === e.field)
            return a.formatMessage({
              id: "chatgpt.rosalind_access.validation.scope_exclusive",
              description:
                "Inline validation error beside the GPT-Rosalind research-scope checkboxes when None of the above is combined with another category. The applicant must choose categories or None on its own.",
              defaultMessage: "Select the applicable research categories, or select “None of the above” on its own.",
            })
          let i = o[e.field]
          return i
            ? a.formatMessage(i)
            : a.formatMessage({
                id: "chatgpt.rosalind_access.validation.valid_selection",
                description:
                  "Fallback inline validation message beside an invalid option in the GPT-Rosalind access application. Asks the researcher to choose a supported option without exposing internal validation codes.",
                defaultMessage: "Choose a valid option.",
              })
        },
        an: s,
        jv: function (e) {
          requestAnimationFrame(() => {
            let a = document.querySelector(`form[data-step="${e}"] [data-field-error]`)
            if (!a) return
            let i = a.closest("[data-validation-field]")
            ;((i?.querySelector("textarea,select,input:not(:disabled),summary,button:not(:disabled)") ?? a).focus({
              preventScroll: !0,
            }),
              (i ?? a).scrollIntoView({ block: "start", behavior: "instant" }))
          })
        },
      },
    )
  },
  Ohp5(e, a, i) {
    var t = i("ABep"),
      n = i("QosV"),
      s = i("nPFn"),
      o = i("zd8w"),
      r = i("oyxz"),
      c = i("Wf1j"),
      l = i("Xpvt"),
      d = i("CtJU"),
      p = i("zLIa"),
      u = i("qvry"),
      h = i("wgaZ"),
      g = i("gAIi"),
      f = i("b6mf"),
      m = i("sVuh")
    function b(e) {
      let a,
        i,
        s,
        o,
        r,
        c,
        d = (0, n.c)(23),
        { id: p, checked: u, disabled: g, onChange: f, title: m, description: b, invalid: v, describedBy: y } = e,
        _ = void 0 !== g && g,
        w = v || void 0
      return (
        d[0] !== y || d[1] !== b || d[2] !== p
          ? ((a = b ? `${p}-description ${y ?? ""}`.trim() : y), (d[0] = y), (d[1] = b), (d[2] = p), (d[3] = a))
          : (a = d[3]),
        d[4] !== u || d[5] !== _ || d[6] !== p || d[7] !== f || d[8] !== w || d[9] !== a
          ? ((i = (0, t.jsx)(l.S, {
              id: p,
              name: p,
              className: "mt-0.5",
              checked: u,
              disabled: _,
              onCheckedChange: f,
              "aria-invalid": w,
              "aria-describedby": a,
              size: "sm",
              variant: "choice",
            })),
            (d[4] = u),
            (d[5] = _),
            (d[6] = p),
            (d[7] = f),
            (d[8] = w),
            (d[9] = a),
            (d[10] = i))
          : (i = d[10]),
        d[11] !== p || d[12] !== m
          ? ((s = (0, t.jsx)("label", {
              className: "cursor-interaction text-sm leading-4.5 select-none",
              htmlFor: p,
              children: m,
            })),
            (d[11] = p),
            (d[12] = m),
            (d[13] = s))
          : (s = d[13]),
        d[14] !== b || d[15] !== p
          ? ((o = b && (0, t.jsx)(h.Rr, { id: `${p}-description`, size: "body", children: b })),
            (d[14] = b),
            (d[15] = p),
            (d[16] = o))
          : (o = d[16]),
        d[17] !== s || d[18] !== o
          ? ((r = (0, t.jsxs)("div", { className: "flex min-w-0 flex-col gap-0.5", children: [s, o] })),
            (d[17] = s),
            (d[18] = o),
            (d[19] = r))
          : (r = d[19]),
        d[20] !== i || d[21] !== r
          ? ((c = (0, t.jsxs)("div", { className: "relative flex items-start gap-2.5", children: [i, r] })),
            (d[20] = i),
            (d[21] = r),
            (d[22] = c))
          : (c = d[22]),
        c
      )
    }
    function v(e) {
      let a,
        i = (0, n.c)(3),
        { field: s, error: o } = e
      return (
        i[0] !== o || i[1] !== s
          ? ((a = o
              ? (0, t.jsx)("p", {
                  className: "text-sm text-danger",
                  "data-field-error": !0,
                  id: (0, g.an)(s),
                  role: "alert",
                  tabIndex: -1,
                  children: o,
                })
              : null),
            (i[0] = o),
            (i[1] = s),
            (i[2] = a))
          : (a = i[2]),
        a
      )
    }
    i.d(
      a,
      {},
      {
        TK: function (e) {
          let a,
            i,
            l,
            d,
            h,
            y,
            _,
            w,
            P,
            z,
            R,
            T,
            x,
            A,
            M,
            S,
            G,
            k,
            I,
            C,
            q,
            O = (0, n.c)(55),
            {
              capabilities: D,
              researchPurpose: L,
              researchScopes: j,
              setResearchPurpose: N,
              toggleResearchScope: E,
              fieldErrors: V,
              disabled: X,
            } = e
          O[0] !== V ? ((a = void 0 === V ? {} : V), (O[0] = V), (O[1] = a)) : (a = O[1])
          let H = a,
            B = (0, c.A)(),
            U = (0, o.useId)(),
            F = `${U}-research-purpose`
          O[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, t.jsx)(r.A, {
                id: "chatgpt.rosalind_access.research.purpose.use_plan.label",
                defaultMessage: "How do you plan to use Rosalind?",
                description:
                  "Visible and accessible label of the research-purpose text area on the GPT-Rosalind access application. Asks applicants for a high-level account of their intended scientific use, without requiring confidential details. Short question with no placeholders; preserve the Rosalind product name.",
              })),
              (l = (0, t.jsx)(r.A, {
                id: "chatgpt.rosalind_access.research.purpose.use_plan.help_text",
                defaultMessage:
                  "Describe your research goals, how you hope to use Rosalind, and the types of outputs or insights you need. Include any challenges you’d like help with. A high-level overview is sufficient; no confidential details are needed.",
                description:
                  "Supporting instructions above the research-purpose text area on the GPT-Rosalind access application. Applicants should explain their scientific goals, intended AI use, desired results, and challenges at a high level; they should not disclose confidential details. Reassuring plain-text paragraph with no placeholders; preserve the Rosalind product name.",
              })),
              (O[2] = i),
              (O[3] = l))
            : ((i = O[2]), (l = O[3]))
          let $ = `${U}-research-purpose-help`,
            Y = `${U}-research-purpose`
          ;(O[4] !== N ? ((d = (e) => N(e.target.value)), (O[4] = N), (O[5] = d)) : (d = O[5]),
            O[6] !== B
              ? ((h = B.formatMessage(f.X.researchPurposeVisualPlaceholder)), (O[6] = B), (O[7] = h))
              : (h = O[7]))
          let W = !!H.researchPurpose || void 0
          O[8] !== H.researchPurpose
            ? ((y = H.researchPurpose ? ` ${(0, g.an)("researchPurpose")}` : ""),
              (O[8] = H.researchPurpose),
              (O[9] = y))
            : (y = O[9])
          let K = `${U}-research-purpose-help ${U}-research-purpose-privacy${D?.discoveryApplications ? ` ${U}-research-purpose-review` : ""}${y}`
          ;(O[10] !== L
            ? ((_ = (0, t.jsx)("span", {
                className: "text-end text-xs leading-4.5 text-secondary",
                children:
                  Array.from(L.trim()).length < s.XO.researchPurpose.min
                    ? (0, t.jsx)(r.A, {
                        ...f.X.researchPurposeCharactersMinimum,
                        values: { count: Array.from(L.trim()).length, minimum: s.XO.researchPurpose.min },
                      })
                    : (0, t.jsx)(r.A, {
                        ...f.X.researchPurposeCharactersCount,
                        values: { count: Array.from(L).length, maximum: s.XO.researchPurpose.max },
                      }),
              })),
              (O[10] = L),
              (O[11] = _))
            : (_ = O[11]),
            O[12] !== X ||
            O[13] !== L ||
            O[14] !== W ||
            O[15] !== K ||
            O[16] !== _ ||
            O[17] !== Y ||
            O[18] !== d ||
            O[19] !== h
              ? ((w = (0, t.jsx)("div", {
                  className: "pt-3",
                  children: (0, t.jsx)(p.TM, {
                    variant: "feedback",
                    id: Y,
                    name: "research-purpose",
                    disabled: X,
                    value: L,
                    onChange: d,
                    maxLength: s.XO.researchPurpose.max,
                    placeholder: h,
                    rows: 4,
                    "aria-invalid": W,
                    "aria-describedby": K,
                    footer: _,
                  }),
                })),
                (O[12] = X),
                (O[13] = L),
                (O[14] = W),
                (O[15] = K),
                (O[16] = _),
                (O[17] = Y),
                (O[18] = d),
                (O[19] = h),
                (O[20] = w))
              : (w = O[20]),
            O[21] !== D?.discoveryApplications || O[22] !== U
              ? ((P =
                  D?.discoveryApplications &&
                  (0, t.jsx)("p", {
                    className: "text-sm leading-5 text-secondary select-text",
                    id: `${U}-research-purpose-review`,
                    children: (0, t.jsx)(r.A, {
                      id: "chatgpt.rosalind_access.research.purpose.tier_review.help_text",
                      defaultMessage:
                        "Your responses help us understand your research needs and determine the appropriate access tier.",
                      description:
                        "Explanatory text below the research-purpose text area on the GPT-Rosalind access application, shown only when the backend supports tier-aware application review. Tells applicants that their research needs inform eligibility for the Discovery or Research model tier, not privacy settings or a guaranteed approval. Plain-text sentence with no placeholders.",
                    }),
                  })),
                (O[21] = D?.discoveryApplications),
                (O[22] = U),
                (O[23] = P))
              : (P = O[23]))
          let Z = `${U}-research-purpose-privacy`
          return (
            O[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((z = (0, t.jsx)(r.A, { ...f.X.researchPrivacy })), (O[24] = z))
              : (z = O[24]),
            O[25] !== Z
              ? ((R = (0, t.jsx)("p", {
                  className: "text-sm leading-5 text-secondary select-text",
                  id: Z,
                  children: z,
                })),
                (O[25] = Z),
                (O[26] = R))
              : (R = O[26]),
            O[27] !== H.researchPurpose
              ? ((T = (0, t.jsx)(v, { field: "researchPurpose", error: H.researchPurpose })),
                (O[27] = H.researchPurpose),
                (O[28] = T))
              : (T = O[28]),
            O[29] !== w || O[30] !== P || O[31] !== R || O[32] !== T || O[33] !== F || O[34] !== $
              ? ((x = (0, t.jsx)("div", {
                  "data-validation-field": "researchPurpose",
                  children: (0, t.jsxs)(u.t, {
                    htmlFor: F,
                    title: i,
                    description: l,
                    descriptionId: $,
                    descriptionSize: "body",
                    children: [w, P, R, T],
                  }),
                })),
                (O[29] = w),
                (O[30] = P),
                (O[31] = R),
                (O[32] = T),
                (O[33] = F),
                (O[34] = $),
                (O[35] = x))
              : (x = O[35]),
            O[36] !== H.researchScopes
              ? ((A = (0, g.Lv)("researchScopes", H.researchScopes)), (O[36] = H.researchScopes), (O[37] = A))
              : (A = O[37]),
            O[38] === Symbol.for("react.memo_cache_sentinel")
              ? ((M = (0, t.jsx)("legend", {
                  className: "text-sm leading-5 font-medium select-none",
                  children: (0, t.jsx)(r.A, { ...f.X.researchScope }),
                })),
                (O[38] = M))
              : (M = O[38]),
            O[39] === Symbol.for("react.memo_cache_sentinel")
              ? ((S = (0, t.jsx)("p", {
                  className: "text-sm leading-5 text-secondary select-text",
                  children: (0, t.jsx)(r.A, { ...f.X.researchScopeVisualDescription }),
                })),
                (O[39] = S))
              : (S = O[39]),
            O[40] === Symbol.for("react.memo_cache_sentinel")
              ? ((G = (0, t.jsx)("p", {
                  className: "text-sm leading-5 text-secondary select-text",
                  children: (0, t.jsx)(r.A, {
                    id: "chatgpt.rosalind_access.research.scope.eligibility.help_text",
                    defaultMessage:
                      "Making a selection does not disqualify you from access. Your responses help us understand your research and review your application.",
                    description:
                      "Reassuring helper text beside the research-scope checkboxes in the GPT-Rosalind access application. Selecting a category does not automatically disqualify applicants; their responses still inform review of their research. This is not a promise of approval or a statement that categories are excluded from review. Short plain-text paragraph with no placeholders.",
                  }),
                })),
                (O[40] = G))
              : (G = O[40]),
            O[41] !== U || O[42] !== j || O[43] !== E
              ? ((k = m.IR.map((e) =>
                  (0, t.jsx)(
                    b,
                    {
                      id: `${U}-research-scope-${e.id}`,
                      checked: j.includes(e.id),
                      onChange: (a) => E(e.id, a),
                      title: (0, t.jsx)(r.A, { ...e.title }),
                      description: e.description && (0, t.jsx)(r.A, { ...e.description }),
                    },
                    e.id,
                  ),
                )),
                (O[41] = U),
                (O[42] = j),
                (O[43] = E),
                (O[44] = k))
              : (k = O[44]),
            O[45] !== H.researchScopes
              ? ((I = (0, t.jsx)(v, { field: "researchScopes", error: H.researchScopes })),
                (O[45] = H.researchScopes),
                (O[46] = I))
              : (I = O[46]),
            O[47] !== X || O[48] !== A || O[49] !== k || O[50] !== I
              ? ((C = (0, t.jsxs)("fieldset", {
                  className: "flex min-w-0 flex-col gap-3",
                  disabled: X,
                  "data-validation-field": "researchScopes",
                  ...A,
                  children: [M, S, G, k, I],
                })),
                (O[47] = X),
                (O[48] = A),
                (O[49] = k),
                (O[50] = I),
                (O[51] = C))
              : (C = O[51]),
            O[52] !== x || O[53] !== C
              ? ((q = (0, t.jsxs)(t.Fragment, { children: [x, C] })), (O[52] = x), (O[53] = C), (O[54] = q))
              : (q = O[54]),
            q
          )
        },
        Tl: b,
        bg: v,
        gi: function (e) {
          let a,
            i,
            s = (0, n.c)(5),
            { label: o, children: c } = e
          return (
            s[0] !== o ? ((a = (0, t.jsx)(r.A, { ...o })), (s[0] = o), (s[1] = a)) : (a = s[1]),
            s[2] !== c || s[3] !== a
              ? ((i = (0, t.jsx)(d.l, { align: "start", spacing: "relaxed", label: a, children: c })),
                (s[2] = c),
                (s[3] = a),
                (s[4] = i))
              : (i = s[4]),
            i
          )
        },
      },
    )
  },
  b6mf(e, a, i) {
    let t = (0, i("Qgfj").YK)({
      summaryOrganization: {
        id: "chatgpt.rosalind_access.review.summary.organization.label",
        defaultMessage: "Organization",
        description:
          "Summary row label for the one real OpenAI organization selected for the GPT-Rosalind application.",
      },
      applicationDetailsVisualHeading: {
        id: "chatgpt.rosalind_access.review.summary.visual_heading",
        defaultMessage: "Application details",
        description: "Concise visible heading inside the compact GPT-Rosalind application-review summary card.",
      },
      applicationProgress: {
        id: "chatgpt.rosalind_access.progress.navigation.aria_label",
        defaultMessage: "Application progress",
        description:
          "Accessible label for the navigation showing the steps of the GPT-Rosalind research access application.",
      },
      personaStep: {
        id: "chatgpt.rosalind_access.progress.persona.title",
        defaultMessage: "Persona",
        description:
          "Short title of the Persona business-verification step shown first in the GPT-Rosalind application when verification is enabled.",
      },
      personaHeading: {
        id: "chatgpt.rosalind_access.persona.heading",
        defaultMessage: "Verify your organization.",
        description:
          "Main accessible heading for the Persona business-verification step in the GPT-Rosalind application.",
      },
      personaVisualHeading: {
        id: "chatgpt.rosalind_access.persona.visual_heading",
        defaultMessage: "Business verification",
        description: "Visible heading for the Persona business-verification step in the GPT-Rosalind application.",
      },
      personaVisualDescription: {
        id: "chatgpt.rosalind_access.persona.visual_description",
        defaultMessage: "Complete the Persona verification before continuing your application.",
        description:
          "Visible instructions for completing the required Persona business-verification step before continuing the GPT-Rosalind application.",
      },
      personaRequired: {
        id: "chatgpt.rosalind_access.persona.required",
        defaultMessage: "Complete Persona verification before continuing.",
        description:
          "Validation message shown when a researcher tries to continue the GPT-Rosalind application before Persona verification reaches a terminal result.",
      },
      personaPending: {
        id: "chatgpt.rosalind_access.persona.required.pending",
        description:
          "Inline validation message on the business-verification step of the GPT-Rosalind application after the researcher tries to continue while Persona still reports a pending inquiry.",
        defaultMessage: "Verification is still pending.",
      },
      personaExpired: {
        id: "chatgpt.rosalind_access.persona.required.expired",
        description:
          "Inline validation message on the business-verification step of the GPT-Rosalind application after the researcher tries to continue with an expired Persona inquiry. Persona is the verification provider.",
        defaultMessage: "Reopen Persona before continuing.",
      },
      organizationStep: {
        id: "chatgpt.rosalind_access.progress.organization.title",
        defaultMessage: "Organization",
        description:
          "Short title of the first step of the GPT-Rosalind application, where the signed-in customer selects exactly one OpenAI organization.",
      },
      researchStep: {
        id: "chatgpt.rosalind_access.progress.research.title",
        defaultMessage: "Research",
        description:
          "Short title of the second GPT-Rosalind application step covering research purpose and requested product surfaces.",
      },
      locationsStep: {
        id: "chatgpt.rosalind_access.progress.locations.title",
        defaultMessage: "Locations and safeguards",
        description:
          "Short title of the third GPT-Rosalind application step covering actual access countries and proportionate research safeguards.",
      },
      reviewStep: {
        id: "chatgpt.rosalind_access.progress.review.title",
        defaultMessage: "Review",
        description:
          "Short title of the fourth GPT-Rosalind application step, where the applicant reviews their answers and confirms their accuracy and authority to apply.",
      },
      organizationHeading: {
        id: "chatgpt.rosalind_access.organization.heading",
        defaultMessage: "Advance research with GPT-Rosalind.",
        description:
          "Main headline on the first step of the customer-facing GPT-Rosalind biology and life sciences research access application.",
      },
      organizationDescription: {
        id: "chatgpt.rosalind_access.organization.description",
        defaultMessage: "Apply for GPT-Rosalind access for biology and life sciences research.",
        description:
          "Introductory sentence beneath the headline on the first step of the customer-facing GPT-Rosalind access application.",
      },
      researchHeading: {
        id: "chatgpt.rosalind_access.research.heading",
        defaultMessage: "Tell us about your research.",
        description:
          "Main headline on the second step of the customer-facing GPT-Rosalind research access application.",
      },
      researchPurposeVisualPlaceholder: {
        id: "chatgpt.rosalind_access.research.purpose.visual_placeholder",
        defaultMessage: "Describe your planned research",
        description: "Concise visible placeholder inside the GPT-Rosalind research-purpose text area.",
      },
      researchPurposeCharactersMinimum: {
        id: "chatgpt.rosalind_access.research.purpose.characters_minimum",
        defaultMessage: "{count, number} / {minimum, number} characters minimum",
        description:
          "Live character counter shown while the GPT-Rosalind research description remains below the required minimum length.",
      },
      researchPurposeCharactersCount: {
        id: "chatgpt.rosalind_access.research.purpose.characters_count",
        defaultMessage: "{count, number} / {maximum, number}",
        description:
          "Live character counter showing the current and maximum permitted length of the GPT-Rosalind research description.",
      },
      researchScopeVisualDescription: {
        id: "chatgpt.rosalind_access.research.scope.visual_description",
        defaultMessage: "Select all that apply to your proposed work.",
        description: "Visible supporting instructions beneath the concise research-scope heading.",
      },
      researchDescription: {
        id: "chatgpt.rosalind_access.research.description",
        defaultMessage: "Tell us what you’re working on and where you would like to use GPT-Rosalind.",
        description:
          "Introductory sentence on the second GPT-Rosalind application step. Here 'where' refers to product surfaces such as ChatGPT, Codex, and the API.",
      },
      locationsHeading: {
        id: "chatgpt.rosalind_access.locations.heading",
        defaultMessage: "Confirm your access locations.",
        description: "Main headline on the third step of the customer-facing GPT-Rosalind research access application.",
      },
      locationsDescription: {
        id: "chatgpt.rosalind_access.locations.description",
        defaultMessage: "Tell us where approved users will primarily access the program.",
        description:
          "Introductory sentence on the third GPT-Rosalind application step requesting the primary country from which approved users will access the research program.",
      },
      reviewHeading: {
        id: "chatgpt.rosalind_access.review.heading",
        defaultMessage: "Review your application.",
        description:
          "Main headline on the fourth step of the customer-facing GPT-Rosalind research access application.",
      },
      reviewDescription: {
        id: "chatgpt.rosalind_access.review.application_attestations.description",
        defaultMessage: "Check your research details and confirm your authority to apply.",
        description:
          "Introductory sentence on the fourth GPT-Rosalind application step explaining that the applicant must review their research details and confirm their authority to submit for the selected organization; legal agreement is completed later by an authorized owner or administrator.",
      },
      organizationVerificationDescription: {
        id: "chatgpt.rosalind_access.organization.selection.verification_description",
        defaultMessage: "Organizations are verified using your signed-in OpenAI account.",
        description:
          "Instructions explaining that the available organizations come from the authenticated applicant's verified account membership.",
      },
      organizationNotEligible: {
        id: "chatgpt.rosalind_access.organization.selection.submission_unavailable.help_text",
        defaultMessage: "Applications are currently unavailable for this organization.",
        description:
          "Short explanation beneath an organization on the first GPT-Rosalind application step when a completed eligibility check does not allow the signed-in customer to apply. Do not imply a specific cause such as the organization's subscription plan; the check can reject submission for several reasons. Plain text with no placeholders.",
      },
      organizationEligibilityUnavailable: {
        id: "chatgpt.rosalind_access.organization.selection.eligibility_unavailable.help_text",
        defaultMessage: "We couldn’t check whether you can apply. Try again.",
        description:
          "Brief error beneath the selected organization on the first GPT-Rosalind application step when its eligibility lookup could not complete. The signed-in customer can use the nearby Retry button to check again; this message does not mean the organization is ineligible. Plain text with no placeholders.",
      },
      selectOrganization: {
        id: "chatgpt.rosalind_access.organization.selection.placeholder",
        defaultMessage: "Select an OpenAI organization",
        description:
          "Placeholder option prompting an authenticated GPT-Rosalind applicant to choose one associated OpenAI organization.",
      },
      noOrganizations: {
        id: "chatgpt.rosalind_access.organization.selection.empty",
        defaultMessage: "No account organizations available",
        description:
          "Placeholder shown when the real authenticated account has no OpenAI organizations available for the GPT-Rosalind application. No organization is invented.",
      },
      organizationsLoading: {
        id: "chatgpt.rosalind_access.organization.selection.loading.status",
        defaultMessage: "Loading your organizations…",
        description:
          "Short accessible status inside the organization selector on the first GPT-Rosalind access-application step while the signed-in customer's verified Business, Enterprise, and API organization memberships are still loading. This is a temporary loading state, not confirmation that the customer has no organizations.",
      },
      retryOrganizationLookup: {
        id: "chatgpt.rosalind_access.organization.selection.lookup_unavailable.retry_button",
        defaultMessage: "Retry loading organizations",
        description:
          "Short button label on the first GPT-Rosalind application step that reloads the page to retry retrieving every OpenAI organization associated with the signed-in account after a temporary lookup failure.",
      },
      researchPrivacy: {
        id: "chatgpt.rosalind_access.research.purpose.privacy.help_text",
        defaultMessage:
          "Do not include patient data, personal information, personnel records, genomic sequences, laboratory protocols, or confidential materials.",
        description:
          "Privacy and safety notice under the GPT-Rosalind research-purpose field warning applicants not to submit sensitive personal, scientific, laboratory, or confidential information.",
      },
      researchScope: {
        id: "chatgpt.rosalind_access.research.scope.legend",
        defaultMessage: "Research scope",
        description: "Fieldset legend introducing the research-scope checkboxes on the GPT-Rosalind application.",
      },
      pathogenEngineering: {
        id: "chatgpt.rosalind_access.research.scope.option.pathogen_engineering.label",
        defaultMessage: "Pathogen engineering",
        description:
          "Short checkbox label on the GPT-Rosalind research-access application for an applicant to disclose that their proposed research involves modifying pathogenic organisms.",
      },
      pathogenEngineeringDescription: {
        id: "chatgpt.rosalind_access.research.scope.option.pathogen_engineering.description",
        defaultMessage: "Research involving the modification of pathogenic organisms.",
        description:
          "Supporting description beneath the Pathogen engineering checkbox on the GPT-Rosalind research-access application, helping an applicant recognize this research category without requesting sensitive scientific details.",
      },
      biologicalToxins: {
        id: "chatgpt.rosalind_access.research.scope.option.biological_toxins.label",
        defaultMessage: "Biological toxins",
        description:
          "Short checkbox label on the GPT-Rosalind research-access application for an applicant to disclose that their proposed research involves biological toxins or related materials.",
      },
      biologicalToxinsDescription: {
        id: "chatgpt.rosalind_access.research.scope.option.biological_toxins.description",
        defaultMessage: "Research involving biological toxins or related materials.",
        description:
          "Supporting description beneath the Biological toxins checkbox on the GPT-Rosalind research-access application, helping an applicant recognize this research category without requesting sensitive scientific details.",
      },
      highContainmentResearch: {
        id: "chatgpt.rosalind_access.research.scope.option.high_containment_wet_lab.label",
        defaultMessage: "High-containment wet-lab research",
        description:
          "Short checkbox label on the GPT-Rosalind research-access application for an applicant to disclose that their proposed wet-lab research requires specialized biological containment or oversight.",
      },
      highContainmentResearchDescription: {
        id: "chatgpt.rosalind_access.research.scope.option.high_containment_wet_lab.description",
        defaultMessage: "Wet-lab research requiring specialized containment or oversight.",
        description:
          "Supporting description beneath the High-containment wet-lab research checkbox on the GPT-Rosalind research-access application, helping an applicant recognize this research category without requesting sensitive scientific details.",
      },
      geneDriveResearch: {
        id: "chatgpt.rosalind_access.research.scope.option.gene_drive.label",
        defaultMessage: "Gene-drive research",
        description:
          "Short checkbox label on the GPT-Rosalind research-access application for an applicant to disclose that their proposed research involves gene-drive systems.",
      },
      geneDriveResearchDescription: {
        id: "chatgpt.rosalind_access.research.scope.option.gene_drive.description",
        defaultMessage: "Research involving gene-drive systems.",
        description:
          "Supporting description beneath the Gene-drive research checkbox on the GPT-Rosalind access application.",
      },
      humanAnimalInfectionStudies: {
        id: "chatgpt.rosalind_access.research.scope.option.human_animal_infection.label",
        defaultMessage: "Human or animal infection studies",
        description:
          "Short checkbox label on the GPT-Rosalind research-access application for an applicant to disclose that their proposed research involves infection studies with human or animal subjects.",
      },
      humanAnimalInfectionStudiesDescription: {
        id: "chatgpt.rosalind_access.research.scope.option.human_animal_infection.description",
        defaultMessage: "Studies involving infection in human or animal subjects.",
        description:
          "Supporting description beneath the Human or animal infection studies checkbox on the GPT-Rosalind access application.",
      },
      noneOfAbove: {
        id: "chatgpt.rosalind_access.research.scope.option.none.label",
        defaultMessage: "None of the above",
        description:
          "Mutually exclusive checkbox label on the GPT-Rosalind research-access application indicating that none of the listed research categories applies to the applicant's proposed work.",
      },
      noneOfAboveDescription: {
        id: "chatgpt.rosalind_access.research.scope.option.none.description",
        defaultMessage: "The proposed work does not involve any listed category.",
        description:
          "Supporting description beneath the mutually exclusive None of the above research-scope checkbox on the GPT-Rosalind access application.",
      },
      safeguardsConfirmation: {
        id: "chatgpt.rosalind_access.safeguards.confirmation.label",
        defaultMessage:
          "I confirm that our organization maintains reasonable safeguards appropriate to the proposed research, including limiting access to authorized personnel, following relevant research oversight or safety processes where applicable, and requiring qualified human review before AI-generated outputs inform experiments, publications, or other consequential decisions.",
        description:
          "Mandatory research-safety attestation on step three of the GPT-Rosalind application. The applicant confirms proportionate personnel access control, applicable oversight, and qualified human review of consequential AI outputs.",
      },
      safeguardAuthorized: {
        id: "chatgpt.rosalind_access.safeguards.options.authorized_personnel.label",
        defaultMessage: "Access limited to authorized researchers or staff",
        description:
          "Research-safeguard checklist option indicating that access to the proposed work is restricted to authorized researchers or staff.",
      },
      safeguardOversight: {
        id: "chatgpt.rosalind_access.safeguards.options.institutional_oversight.label",
        defaultMessage:
          "Institutional research oversight when applicable, such as IRB, IBC, IACUC, EHS, biosafety, or ethics review",
        description:
          "Research-safeguard checklist option covering institutional review boards, biosafety committees, animal care committees, environmental health and safety, and ethics review when applicable.",
      },
      safeguardTraining: {
        id: "chatgpt.rosalind_access.safeguards.options.training_and_sops.label",
        defaultMessage: "Staff training, SOPs, or laboratory safety procedures",
        description:
          "Research-safeguard checklist option covering staff training, standard operating procedures, and laboratory safety practices.",
      },
      safeguardData: {
        id: "chatgpt.rosalind_access.safeguards.options.secure_research_data.label",
        defaultMessage: "Secure storage or access controls for sensitive research data",
        description:
          "Research-safeguard checklist option covering secure storage and access restrictions for sensitive scientific or research data.",
      },
      safeguardHumanReview: {
        id: "chatgpt.rosalind_access.safeguards.options.human_review.label",
        defaultMessage: "Human review of AI-generated hypotheses, protocols, analyses, or decisions",
        description:
          "Research-safeguard checklist option indicating that qualified humans review hypotheses, laboratory protocols, analyses, or decisions generated using AI.",
      },
      safeguardIncidents: {
        id: "chatgpt.rosalind_access.safeguards.options.incident_reporting.label",
        defaultMessage: "Incident reporting or escalation process",
        description:
          "Research-safeguard checklist option indicating that the organization maintains a process for reporting or escalating safety or security incidents.",
      },
      safeguardDualUse: {
        id: "chatgpt.rosalind_access.safeguards.options.dual_use_review.label",
        defaultMessage: "Dual-use, misuse, or biosecurity review when relevant",
        description:
          "Research-safeguard checklist option indicating that the organization reviews potential dual-use, misuse, or biosecurity risks when relevant to the proposed scientific work.",
      },
      safeguardOther: {
        id: "chatgpt.rosalind_access.safeguards.options.other.label",
        defaultMessage: "Other",
        description:
          "Checklist option allowing a GPT-Rosalind applicant to describe research or security safeguards not represented by the other listed options.",
      },
      otherSafeguards: {
        id: "chatgpt.rosalind_access.safeguards.other.label",
        defaultMessage: "Describe the other safeguards currently in place",
        description:
          "Label for the conditional text area displayed when a GPT-Rosalind applicant selects Other in the safeguards checklist.",
      },
      primaryCountryVisualHeading: {
        id: "chatgpt.rosalind_access.locations.primary_country.visual_heading",
        defaultMessage: "Primary country or region",
        description: "Concise visible label for the full accessible primary country of access selector.",
      },
      primaryCountryVisualDescription: {
        id: "chatgpt.rosalind_access.locations.primary_country.visual_description",
        defaultMessage: "Where will GPT-Rosalind primarily be accessed?",
        description: "Concise visible supporting question for the primary GPT-Rosalind access country or region.",
      },
      additionalLocationsVisualHeading: {
        id: "chatgpt.rosalind_access.locations.additional.visual_heading",
        defaultMessage: "Will access occur from additional countries or regions?",
        description:
          "Concise visible heading above the yes, no, and unsure options for additional GPT-Rosalind access locations.",
      },
      safeguardsVisualHeading: {
        id: "chatgpt.rosalind_access.safeguards.options.visual_heading",
        defaultMessage: "Existing safeguards",
        description:
          "Concise visible heading above the optional checklist of existing organizational research safeguards.",
      },
      safeguardsOptionalLabel: {
        id: "chatgpt.rosalind_access.safeguards.options.optional_label",
        defaultMessage: "Optional",
        description:
          "Short visible label clarifying that selecting specific existing research safeguards is optional, while the separate safeguards confirmation remains mandatory.",
      },
      safeguardsVisualDescription: {
        id: "chatgpt.rosalind_access.safeguards.options.visual_description",
        defaultMessage: "Select any research safeguards your organization currently maintains.",
        description: "Visible supporting instructions for selecting existing organizational research safeguards.",
      },
      safeguardAuthorizedVisualLabel: {
        id: "chatgpt.rosalind_access.safeguards.options.authorized_personnel.visual_label",
        defaultMessage: "Authorized personnel",
        description: "Concise visible label for the authenticated-personnel research safeguard.",
      },
      safeguardOversightVisualLabel: {
        id: "chatgpt.rosalind_access.safeguards.options.institutional_oversight.visual_label",
        defaultMessage: "Institutional oversight",
        description: "Concise visible label for the institutional research-oversight safeguard.",
      },
      safeguardTrainingVisualLabel: {
        id: "chatgpt.rosalind_access.safeguards.options.training.visual_label",
        defaultMessage: "Training and standard procedures",
        description: "Concise visible label for the personnel training and standard-procedures safeguard.",
      },
      safeguardDataVisualLabel: {
        id: "chatgpt.rosalind_access.safeguards.options.research_data.visual_label",
        defaultMessage: "Secure research data",
        description: "Concise visible label for the secure research-data safeguard.",
      },
      safeguardHumanReviewVisualLabel: {
        id: "chatgpt.rosalind_access.safeguards.options.human_review.visual_label",
        defaultMessage: "Human review",
        description: "Concise visible label for the qualified human-review safeguard.",
      },
      safeguardIncidentsVisualLabel: {
        id: "chatgpt.rosalind_access.safeguards.options.incidents.visual_label",
        defaultMessage: "Incident reporting",
        description: "Concise visible label for the research incident-reporting safeguard.",
      },
      safeguardDualUseVisualLabel: {
        id: "chatgpt.rosalind_access.safeguards.options.dual_use.visual_label",
        defaultMessage: "Dual-use review",
        description: "Concise visible label for the dual-use and biosecurity-review safeguard.",
      },
      safeguardOtherVisualLabel: {
        id: "chatgpt.rosalind_access.safeguards.options.other.visual_label",
        defaultMessage: "Other safeguards",
        description: "Concise visible label for other organizational research safeguards.",
      },
      primaryCountry: {
        id: "chatgpt.rosalind_access.locations.primary_country.label",
        defaultMessage: "Primary country of access",
        description:
          "Label for the country or territory from which authorized users will primarily access GPT-Rosalind. The selector deliberately includes locations that may require policy review.",
      },
      countryPlaceholder: {
        id: "chatgpt.rosalind_access.locations.primary_country.placeholder",
        defaultMessage: "Select a country or region",
        description:
          "Placeholder for the GPT-Rosalind primary access country selector, which does not imply that any listed location is approved.",
      },
      additionalLocations: {
        id: "chatgpt.rosalind_access.locations.additional.legend",
        defaultMessage: "Will any users access the program from additional locations?",
        description:
          "Fieldset legend on the GPT-Rosalind access-location step asking whether any users expect to access the program from countries or territories beyond the primary location.",
      },
      additionalNo: {
        id: "chatgpt.rosalind_access.locations.additional.option.no.label",
        defaultMessage: "No",
        description:
          "Answer to the GPT-Rosalind additional-access-locations question indicating that access is planned only from the primary country.",
      },
      additionalYes: {
        id: "chatgpt.rosalind_access.locations.additional.option.yes.label",
        defaultMessage: "Yes",
        description:
          "Answer to the GPT-Rosalind additional-access-locations question indicating that the applicant can identify other expected access locations.",
      },
      additionalUnsure: {
        id: "chatgpt.rosalind_access.locations.additional.option.unsure.label",
        defaultMessage: "Not sure",
        description:
          "Answer to the GPT-Rosalind access-locations question indicating that the applicant needs help confirming other intended access locations.",
      },
      additionalCountries: {
        id: "chatgpt.rosalind_access.locations.additional.countries.label",
        defaultMessage: "Additional countries or territories",
        description:
          "Label for the country-and-territory multiselect shown on the GPT-Rosalind access-location step only after an applicant confirms that users will access the program from additional locations.",
      },
      additionalCountriesPlaceholder: {
        id: "chatgpt.rosalind_access.locations.additional.countries.placeholder",
        defaultMessage: "Select an additional country or region",
        description:
          "Placeholder inside the additional-country multiselect on the GPT-Rosalind access-location step, prompting an applicant who confirmed additional access locations to select every relevant country or territory.",
      },
      additionalCountriesSearch: {
        id: "chatgpt.rosalind_access.locations.additional.countries.search.label",
        defaultMessage: "Search countries or territories",
        description:
          "Accessible label and short search-input placeholder inside the primary-country picker and additional-country multiselect on the GPT-Rosalind access-location step. Instructs applicants to filter available countries or territories by their localized names or two-letter country codes.",
      },
      additionalCountriesNoResults: {
        id: "chatgpt.rosalind_access.locations.additional.countries.search.empty",
        defaultMessage: "No matching countries or territories.",
        description:
          "Accessible status message inside the GPT-Rosalind additional-access-location multiselect when the applicant's search does not match any available country or territory. Existing selected locations remain selected even when they are temporarily filtered out.",
      },
      editApplication: {
        id: "chatgpt.rosalind_access.review.summary.edit.button",
        defaultMessage: "Edit",
        description:
          "Compact button inside the application-summary card that returns the applicant to the organization step to edit their application.",
      },
      safeguardsVisualLabel: {
        id: "chatgpt.rosalind_access.review.summary.safeguards.visual_label",
        defaultMessage: "Safeguards",
        description: "Concise visible summary-row label for the applicant's confirmed research safeguards.",
      },
      requestedAccess: {
        id: "chatgpt.rosalind_access.review.summary.requested_access.label",
        defaultMessage: "Requested access",
        description:
          "Summary row label for the selected ChatGPT, Codex, internal API, and external API product surfaces.",
      },
      summaryScope: {
        id: "chatgpt.rosalind_access.review.summary.research_scope.label",
        defaultMessage: "Research scope",
        description:
          "Short summary-row label on the GPT-Rosalind application review screen for the applicant's selected pathogen-engineering, biological-toxin, high-containment wet-lab, gene-drive, or human or animal infection research categories, or none of those categories.",
      },
      summaryPrimaryLocation: {
        id: "chatgpt.rosalind_access.review.summary.primary_location.label",
        defaultMessage: "Primary access location",
        description: "Summary row label for the actual primary country or territory of GPT-Rosalind access.",
      },
      summaryAdditionalLocations: {
        id: "chatgpt.rosalind_access.review.summary.additional_locations.label",
        defaultMessage: "Additional countries or regions",
        description: "Summary row label for disclosed additional or uncertain GPT-Rosalind access countries.",
      },
      none: {
        id: "chatgpt.rosalind_access.review.summary.none.label",
        defaultMessage: "None",
        description:
          "Short application-summary value indicating that the applicant reported no additional access locations.",
      },
      researchPurposeSummary: {
        id: "chatgpt.rosalind_access.review.summary.research_purpose.label",
        defaultMessage: "Research purpose",
        description:
          "Summary row label displaying the applicant's own description of their scientific objective and expected research benefit.",
      },
      termsVisualHeading: {
        id: "chatgpt.rosalind_access.review.application_attestations.visual_heading",
        defaultMessage: "Application attestations",
        description:
          "Concise visible section heading introducing the applicant's two mandatory GPT-Rosalind application attestations: application accuracy and authority to apply on behalf of the selected organization. Legal agreement is completed separately by an organization owner or administrator.",
      },
      confirmOrganizationHeading: {
        id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.title",
        defaultMessage: "Confirm your organization",
        description:
          "Title of the final confirmation dialog shown after an authenticated researcher chooses Submit application in the GPT-Rosalind access application. The applicant must verify the selected organization's exact name and identifier before the application is actually sent.",
      },
      confirmOrganizationQuestion: {
        id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.question",
        defaultMessage: "Submit application for {organizationName} ({organizationId})?",
        description:
          "Confirmation question in the final dialog shown before sending a GPT-Rosalind access application. Placeholder {organizationName} is the verified organization's full customer-facing name, and {organizationId} is its exact OpenAI organization identifier. Both values must remain visible so the applicant can verify the intended organization.",
      },
      confirmOrganizationNameLabel: {
        id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.organization_name.label",
        defaultMessage: "Organization name",
        description:
          "Short row label preceding the verified organization's exact customer-facing name in the final GPT-Rosalind application submission confirmation dialog.",
      },
      confirmOrganizationIdLabel: {
        id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.organization_id.label",
        defaultMessage: "Organization ID",
        description:
          "Short row label preceding the selected organization's exact OpenAI organization identifier in the final GPT-Rosalind application submission confirmation dialog.",
      },
      confirmOrganizationBack: {
        id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.back.button",
        defaultMessage: "Go back",
        description:
          "Secondary button in the final GPT-Rosalind submission confirmation dialog. Closes the dialog and returns the authenticated researcher to the application review screen without sending or saving their application.",
      },
      confirmOrganizationSubmit: {
        id: "chatgpt.rosalind_access.review.organization_confirmation.dialog.submit.button",
        defaultMessage: "Confirm and submit",
        description:
          "Primary button in the final GPT-Rosalind submission confirmation dialog. Sends the access application only after the researcher has reviewed the verified organization's exact name and organization identifier. Short button label.",
      },
      certifyAccuracy: {
        id: "chatgpt.rosalind_access.review.terms.accuracy.label",
        defaultMessage: "I certify that this application is accurate and complete.",
        description:
          "Mandatory attestation certifying the accuracy and completeness of a GPT-Rosalind research access application.",
      },
      certifyAuthority: {
        id: "chatgpt.rosalind_access.review.terms.authority.label",
        defaultMessage: "I am authorized to apply on behalf of this organization.",
        description:
          "Mandatory attestation confirming that the applicant is authorized to submit a GPT-Rosalind access application for the selected organization.",
      },
      reviewStartsVisual: {
        id: "chatgpt.rosalind_access.review.submission.visual_notice",
        defaultMessage: "Submitting an application starts a review and does not grant access.",
        description:
          "Concise visible research-review notice clarifying that application submission never grants access.",
      },
      reviewStarts: {
        id: "chatgpt.rosalind_access.review.submission.after_agreement.notice",
        defaultMessage:
          "Submitting starts a review. GPT-Rosalind access is enabled only after organization verification and suitability and policy checks.",
        description:
          "Important notice on the final GPT-Rosalind application step explaining that submitting an application never grants immediate access; organization verification and independent suitability and policy checks must still finish first.",
      },
      back: {
        id: "chatgpt.rosalind_access.navigation.back.button",
        defaultMessage: "Back",
        description: "Button returning to the preceding step of the customer-facing GPT-Rosalind access application.",
      },
      next: {
        id: "chatgpt.rosalind_access.navigation.continue.button",
        defaultMessage: "Continue",
        description:
          "Button validating the current answers and advancing to the next step of the GPT-Rosalind access application.",
      },
      submit: {
        id: "chatgpt.rosalind_access.review.submit.button",
        defaultMessage: "Submit application",
        description:
          "Primary button for submitting a GPT-Rosalind research access application to the genuine authenticated customer backend. This button is disabled when submission is unavailable.",
      },
      submitting: {
        id: "chatgpt.rosalind_access.review.submitting.button",
        defaultMessage: "Submitting application…",
        description:
          "Temporary primary-button status shown only while a real authenticated GPT-Rosalind application submission request is in progress.",
      },
      organizationRequired: {
        id: "chatgpt.rosalind_access.validation.organization.error",
        defaultMessage: "Please select an OpenAI organization for this application.",
        description:
          "Validation error requiring the applicant to select exactly one real OpenAI organization for a GPT-Rosalind application.",
      },
      productRequired: {
        id: "chatgpt.rosalind_access.validation.products.error",
        defaultMessage: "Please select at least one place to use GPT-Rosalind.",
        description:
          "Validation error requiring at least one requested product surface such as ChatGPT, Codex, or an API application.",
      },
      researchPurposeRequired: {
        id: "chatgpt.rosalind_access.validation.research_purpose.error",
        defaultMessage:
          "Please describe your planned research, scientific objective, and intended benefit in at least 40 characters.",
        description:
          "Validation error requesting a meaningful description of the intended scientific research and public-health or research benefit.",
      },
      researchScopeRequired: {
        id: "chatgpt.rosalind_access.validation.research_scope.error",
        defaultMessage: "Please select the research scope that applies to your work.",
        description:
          "Validation error on the GPT-Rosalind research-access application shown when an applicant has not selected a pathogen-engineering, biological-toxin, high-containment wet-lab, gene-drive, or human or animal infection research category, or none of those categories.",
      },
      countryRequired: {
        id: "chatgpt.rosalind_access.validation.primary_country.error",
        defaultMessage: "Please select your primary country of access.",
        description:
          "Validation error requiring the applicant to disclose the real primary country from which GPT-Rosalind will be accessed.",
      },
      additionalLocationsRequired: {
        id: "chatgpt.rosalind_access.validation.additional_locations.error",
        defaultMessage: "Please tell us whether access is expected from additional locations.",
        description:
          "Validation error requiring the applicant to disclose whether approved GPT-Rosalind users expect to access the program from other actual locations.",
      },
      additionalCountriesRequired: {
        id: "chatgpt.rosalind_access.validation.additional_countries.error",
        defaultMessage: "Please select at least one additional access location.",
        description:
          "Validation error on the GPT-Rosalind access-location step requiring an applicant who answered Yes to additional access locations to select at least one additional country or territory. Applicants who answer that they are unsure do not see this error.",
      },
      safeguardsRequired: {
        id: "chatgpt.rosalind_access.validation.safeguards.error",
        defaultMessage:
          "Please confirm that your organization maintains reasonable safeguards appropriate to the proposed research.",
        description:
          "Validation error requiring the mandatory reasonable-research-safeguards attestation on the GPT-Rosalind access application.",
      },
      otherSafeguardsRequired: {
        id: "chatgpt.rosalind_access.validation.other_safeguards.error",
        defaultMessage: "Please describe the other safeguards currently in place.",
        description:
          "Validation error shown only when a GPT-Rosalind applicant selects the Other safeguard checkbox without describing the existing safeguard.",
      },
      accuracyRequired: {
        id: "chatgpt.rosalind_access.validation.accuracy.error",
        defaultMessage: "Please certify that your application is accurate and complete.",
        description:
          "Validation error requiring the accuracy and completeness attestation before GPT-Rosalind application submission.",
      },
      authorityRequired: {
        id: "chatgpt.rosalind_access.validation.authority.error",
        defaultMessage: "Please certify that you are authorized to apply on behalf of your organization.",
        description:
          "Validation error requiring the applicant to confirm legal or organizational authority to apply for GPT-Rosalind access.",
      },
      submissionUnavailable: {
        id: "chatgpt.rosalind_access.validation.submission_unavailable.error",
        defaultMessage: "Applications are not open yet. Your answers cannot be submitted or saved.",
        description:
          "Fail-closed error shown if a GPT-Rosalind application submission is attempted before the authenticated application service has been enabled.",
      },
      submissionFailed: {
        id: "chatgpt.rosalind_access.validation.submission_failed.error",
        defaultMessage: "Your application could not be submitted. Please try again.",
        description:
          "Error shown when the genuine server-side GPT-Rosalind application submission fails without providing a more specific safe error message.",
      },
      organizationUnavailable: {
        id: "chatgpt.rosalind_access.validation.organization_unavailable.error",
        defaultMessage:
          "The selected organization is unavailable or your membership could not be verified. Please choose an organization you can access.",
        description:
          "Privacy-safe error shown on the GPT-Rosalind application when the authenticated backend cannot verify that the customer currently belongs to their selected organization. Tells the customer to choose an organization they can access without disclosing private backend details.",
      },
      applicationUnprocessable: {
        id: "chatgpt.rosalind_access.validation.application_unprocessable.error",
        defaultMessage: "We couldn't process your application details. Please review your answers and try again.",
        description:
          "Privacy-safe error shown on the GPT-Rosalind application when the backend cannot process the submitted organization and research answers. Asks the customer to review their answers without displaying internal validation messages.",
      },
      applicationHistoryLimit: {
        id: "chatgpt.rosalind_access.validation.application_history_limit.error",
        defaultMessage: "This organization has reached its application limit and cannot submit another application.",
        description:
          "Privacy-safe error shown to a signed-in GPT-Rosalind applicant when their verified organization has exhausted the maximum number of application attempts. This is not an active duplicate application and changing form answers or retrying immediately cannot resolve it.",
      },
      submissionUnconfirmed: {
        id: "chatgpt.rosalind_access.validation.submission_unconfirmed.error",
        defaultMessage: "Your application could not be confirmed. Please try again.",
        description:
          "Fail-closed error shown when the server response does not confirm a real 64-character GPT-Rosalind application reference, submitted state, and matching selected organization.",
      },
      secureSubmissionFailed: {
        id: "chatgpt.rosalind_access.validation.secure_submission.error",
        defaultMessage: "A secure submission could not be started. Refresh the page and try again.",
        description:
          "Fail-closed error shown when the customer's browser cannot create the cryptographically strong idempotency key required for a GPT-Rosalind application.",
      },
      chatgptCodex: {
        id: "chatgpt.rosalind_access.research.products.option.chatgpt_codex.label",
        defaultMessage: "ChatGPT / Codex",
        description:
          "Product selection card title for using GPT-Rosalind in ChatGPT or Codex. Other options are internal and external API applications.",
      },
      chatgptCodexDescription: {
        id: "chatgpt.rosalind_access.research.products.option.chatgpt_codex.description",
        defaultMessage: "Use GPT-Rosalind directly in your organization’s workspaces.",
        description: "Description of the ChatGPT and Codex product option on the GPT-Rosalind application.",
      },
      internalApi: {
        id: "chatgpt.rosalind_access.research.products.option.internal_api.label",
        defaultMessage: "API · internal applications",
        description:
          "Product selection card title for using the OpenAI API in applications accessible only within the applicant's organization.",
      },
      internalApiDescription: {
        id: "chatgpt.rosalind_access.research.products.option.internal_api.description",
        defaultMessage: "Build research workflows for members of your organization.",
        description: "Description of the internal API application option in the GPT-Rosalind research access form.",
      },
      pageTitle: {
        id: "chatgpt.rosalind_access.page.title.upgrade",
        defaultMessage: "Apply for access to GPT-Rosalind",
        description:
          "Persistent main heading above the progress navigation on the standalone GPT-Rosalind research-access application, shown to authenticated researchers requesting access for their organization.",
      },
      pageDescription: {
        id: "chatgpt.rosalind_access.page.description",
        defaultMessage: "Tell us about your organization and proposed research.",
        description:
          "Reassuring introductory sentence below the persistent GPT-Rosalind access application heading that tells authenticated researchers which information they will provide without promising a specific completion time.",
      },
      yourOrganization: {
        id: "chatgpt.rosalind_access.organization.selection.section_label",
        defaultMessage: "Your organization",
        description:
          "Section heading introducing the single-organization selection on the first GPT-Rosalind research access application step.",
      },
      organizationVisualDescription: {
        id: "chatgpt.rosalind_access.organization.visual_description",
        defaultMessage: "Select the organization that will be associated with this application.",
        description:
          "Concise visible description beneath the organization heading in the standalone GPT-Rosalind access application.",
      },
      organizationAccountVerified: {
        id: "chatgpt.rosalind_access.organization.selection.account_verified",
        defaultMessage: "Verified",
        description:
          "Compact badge shown only when the organization's membership was returned by the verified authenticated-account source.",
      },
      organizationDisplayName: {
        id: "chatgpt.rosalind_access.organization.selection.option.label",
        defaultMessage: "{name} · {id}",
        description:
          "A single real OpenAI organization in the GPT-Rosalind application selector or review summary. The placeholder {name} is the organization name and {id} is its exact organization identifier. Keep both values so applicants can distinguish organizations.",
      },
      organizationWorkspaceDescription: {
        id: "chatgpt.rosalind_access.organization.selection.workspace_description",
        defaultMessage: "OpenAI organization",
        description:
          "Neutral supporting label for an actual organization associated with the signed-in applicant; does not invent an organization plan or verification status.",
      },
      applicationConflict: {
        id: "chatgpt.rosalind_access.validation.application_conflict.organization_error",
        defaultMessage: "Application for {organizationId} already submitted",
        description:
          "Privacy-safe notice shown when a GPT-Rosalind applicant selects or submits an organization that already has an active application. Placeholder {organizationId} is the exact OpenAI organization identifier selected by the authenticated customer; no internal application identifiers or backend error details are disclosed.",
      },
      applicationStatusLabel: {
        id: "chatgpt.rosalind_access.application.status.heading",
        defaultMessage: "Application status",
        description:
          "Short heading introducing the current customer-facing status of an existing GPT-Rosalind access application for the verified organization selected by the signed-in researcher.",
      },
      pricingChatgptRateCardLink: {
        id: "chatgpt.rosalind_access.pricing.chatgpt_rate_card.link.label",
        defaultMessage: "ChatGPT rate card",
        description:
          "Short inline link label on the GPT-Rosalind application and final provisioning-approval pricing notice for applicants and organization administrators. Opens the official ChatGPT rate card in a new tab so readers can find the ChatGPT and Codex rates applicable to their organization's agreement. Appears alongside a separate API pricing link. No placeholders.",
      },
      pricingApiLink: {
        id: "chatgpt.rosalind_access.pricing.api.link.label",
        defaultMessage: "API pricing page",
        description:
          "Short inline link label on the GPT-Rosalind application and final provisioning-approval pricing notice for applicants and organization administrators. Opens the official OpenAI API pricing page in a new tab so readers can review published Rosalind API rates. Appears alongside a separate ChatGPT rate card link. No placeholders.",
      },
      researchVisualHeading: {
        id: "chatgpt.rosalind_access.research.visual_heading",
        defaultMessage: "Research details",
        description:
          "Concise visible heading for the research-details step in the standalone GPT-Rosalind access application.",
      },
      researchVisualDescription: {
        id: "chatgpt.rosalind_access.research.visual_description",
        defaultMessage: "Tell us how your organization intends to use GPT-Rosalind.",
        description:
          "Concise visible description beneath the research-details heading in the standalone GPT-Rosalind access application.",
      },
      locationsVisualDescription: {
        id: "chatgpt.rosalind_access.locations.visual_description",
        defaultMessage: "Describe where GPT-Rosalind will be accessed and how the research is protected.",
        description:
          "Concise visible description beneath the locations and safeguards heading in the standalone GPT-Rosalind access application.",
      },
      reviewVisualHeading: {
        id: "chatgpt.rosalind_access.review.visual_heading",
        defaultMessage: "Review your application",
        description: "Concise visible title for the final GPT-Rosalind application-review step.",
      },
      reviewVisualDescription: {
        id: "chatgpt.rosalind_access.review.application_attestations.screen_description",
        defaultMessage: "Confirm the information below and your authority to apply.",
        description:
          "Concise visible description beneath the final-review heading in the standalone GPT-Rosalind access application, asking an applicant to verify their answers and authorization to apply without accepting legal terms.",
      },
      requestedAccessVisualHeading: {
        id: "chatgpt.rosalind_access.research.requested_access.visual_heading",
        defaultMessage: "Requested access",
        description:
          "Concise visible heading for the requested product-surface choices on the GPT-Rosalind research step.",
      },
      requestedAccessVisualDescription: {
        id: "chatgpt.rosalind_access.research.requested_access.visual_description",
        defaultMessage: "Select every product surface your organization plans to use.",
        description: "Visible supporting instructions for choosing all requested GPT-Rosalind product surfaces.",
      },
      chatgptCodexVisualLabel: {
        id: "chatgpt.rosalind_access.research.products.option.chatgpt_codex.visual_label",
        defaultMessage: "ChatGPT and Codex",
        description: "Concise visible product-card title for requesting GPT-Rosalind access through ChatGPT and Codex.",
      },
      internalApiVisualLabel: {
        id: "chatgpt.rosalind_access.research.products.option.internal_api.visual_label",
        defaultMessage: "Internal API",
        description:
          "Concise visible product-card title for GPT-Rosalind API applications accessible within the applicant's organization.",
      },
      submittedStatus: {
        id: "chatgpt.rosalind_access.application.status.submitted.label",
        defaultMessage: "Submitted",
        description:
          "Short application-status badge shown when a GPT-Rosalind application has been submitted successfully but business verification and suitability review have not started. Submission does not grant product access.",
      },
      inProgressStatus: {
        id: "chatgpt.rosalind_access.application.status.in_progress.label",
        defaultMessage: "In progress",
        description:
          "Short GPT-Rosalind application-status badge shown while business verification, suitability checks, or authorized employee review are underway. This status does not mean access has been granted.",
      },
      actionRequiredStatus: {
        id: "chatgpt.rosalind_access.application.status.action_required.label",
        defaultMessage: "Action required",
        description:
          "Short GPT-Rosalind application-status badge shown when the applicant or an authorized reviewer must complete an assigned action before the organization's access application can proceed.",
      },
      approvedStatus: {
        id: "chatgpt.rosalind_access.application.status.approved.label",
        defaultMessage: "Approved",
        description:
          "Short GPT-Rosalind application-status badge shown after business verification and suitability have been approved but before organization-wide product access has been granted.",
      },
      accessGrantedStatus: {
        id: "chatgpt.rosalind_access.application.status.access_granted.label",
        defaultMessage: "Access granted",
        description:
          "Short GPT-Rosalind application-status badge shown only after the approved organization's product access has actually been provisioned.",
      },
      accessRevokedStatus: {
        id: "chatgpt.rosalind_access.application.status.access_revoked.label",
        defaultMessage: "Access revoked",
        description:
          "Short GPT-Rosalind application-status badge shown when previously provisioned product access has subsequently been revoked for the organization.",
      },
      deniedStatus: {
        id: "chatgpt.rosalind_access.application.status.denied.label",
        defaultMessage: "Denied",
        description:
          "Short GPT-Rosalind application-status badge shown when an authorized reviewer has issued a final decision denying an organization's request for access. This status means access was not granted.",
      },
      trackOrganizationApplication: {
        id: "chatgpt.rosalind_access.organization.tracking.link.accessible_label",
        defaultMessage: "Track application status for {organizationName} ({organizationId})",
        description:
          "Accessible name for an organization-specific application status link. organizationName is the display name and organizationId is the unique OpenAI organization ID, included to distinguish identically named organizations. Opening the page may require workspace authentication; it does not accept terms or grant access.",
      },
      trackApplicationStatus: {
        id: "chatgpt.rosalind_access.organization.tracking.link.label",
        defaultMessage: "Track application status",
        description:
          "Button-style navigation link for a verified organization or a submitted application. Opens the status page with that exact organization already selected. Users can view their application and authorized administrators can review terms and confirm provisioning there. Clicking this link does not itself accept terms or grant access. Keep the label concise.",
      },
      organizationLabel: {
        id: "chatgpt.rosalind_access.organization.selection.account_organizations.label",
        defaultMessage: "OpenAI organizations associated with your account.",
        description:
          "Label above the single-select dropdown of real OpenAI organizations associated with the signed-in GPT-Rosalind applicant's account. The applicant must select exactly one organization for this application.",
      },
    })
    i.d(a, {}, { X: t })
  },
  sVuh(e, a, i) {
    var t = i("nPFn"),
      n = i("GO7r"),
      s = i("b6mf")
    let o = ["US", "AU", "CA", "FR", "DE", "IN", "JP", "MX", "NL", "SG", "CH", "GB"],
      r = [
        {
          title: s.X.organizationStep,
          heading: s.X.organizationHeading,
          description: s.X.organizationDescription,
          visualHeading: s.X.yourOrganization,
          visualDescription: s.X.organizationVisualDescription,
        },
        {
          title: s.X.researchStep,
          heading: s.X.researchHeading,
          description: s.X.researchDescription,
          visualHeading: s.X.researchVisualHeading,
          visualDescription: s.X.researchVisualDescription,
        },
        {
          title: s.X.locationsStep,
          heading: s.X.locationsHeading,
          description: s.X.locationsDescription,
          visualHeading: s.X.locationsStep,
          visualDescription: s.X.locationsVisualDescription,
        },
        {
          title: s.X.reviewStep,
          heading: s.X.reviewHeading,
          description: s.X.reviewDescription,
          visualHeading: s.X.reviewVisualHeading,
          visualDescription: s.X.reviewVisualDescription,
        },
      ],
      c = [
        {
          id: "chatgpt-codex",
          Icon: n.VhP,
          visualTitle: s.X.chatgptCodexVisualLabel,
          title: s.X.chatgptCodex,
          description: s.X.chatgptCodexDescription,
        },
        {
          id: "internal-api",
          Icon: n.u1Q,
          visualTitle: s.X.internalApiVisualLabel,
          title: s.X.internalApi,
          description: s.X.internalApiDescription,
        },
      ].filter((e) => t.ii.includes(e.id)),
      l = [
        { id: "pathogen-engineering", title: s.X.pathogenEngineering, description: s.X.pathogenEngineeringDescription },
        { id: "biological-toxins", title: s.X.biologicalToxins, description: s.X.biologicalToxinsDescription },
        {
          id: "high-containment",
          title: s.X.highContainmentResearch,
          description: s.X.highContainmentResearchDescription,
        },
        { id: "gene-drive", title: s.X.geneDriveResearch, description: s.X.geneDriveResearchDescription },
        {
          id: "human-animal-infection",
          title: s.X.humanAnimalInfectionStudies,
          description: s.X.humanAnimalInfectionStudiesDescription,
        },
        { id: "none", title: s.X.noneOfAbove, description: s.X.noneOfAboveDescription },
      ].filter((e) => t.tF.includes(e.id)),
      d = [
        { id: "authorized-personnel", title: s.X.safeguardAuthorized, visualTitle: s.X.safeguardAuthorizedVisualLabel },
        {
          id: "institutional-oversight",
          title: s.X.safeguardOversight,
          visualTitle: s.X.safeguardOversightVisualLabel,
        },
        { id: "training-and-sops", title: s.X.safeguardTraining, visualTitle: s.X.safeguardTrainingVisualLabel },
        { id: "secure-research-data", title: s.X.safeguardData, visualTitle: s.X.safeguardDataVisualLabel },
        { id: "human-review", title: s.X.safeguardHumanReview, visualTitle: s.X.safeguardHumanReviewVisualLabel },
        { id: "incident-reporting", title: s.X.safeguardIncidents, visualTitle: s.X.safeguardIncidentsVisualLabel },
        { id: "dual-use-review", title: s.X.safeguardDualUse, visualTitle: s.X.safeguardDualUseVisualLabel },
        { id: "other", title: s.X.safeguardOther, visualTitle: s.X.safeguardOtherVisualLabel },
      ].filter((e) => t.pK.includes(e.id))
    i.d(
      a,
      {},
      {
        DA: c,
        IR: l,
        MB: d,
        UT: r,
        b8: function (e) {
          let a = new Intl.Collator(e.locale, { sensitivity: "base" })
          return t.PO.map((a) => ({ value: a, label: e.formatDisplayName(a, { type: "region" }) ?? a })).sort(
            (e, i) => {
              let t = o.indexOf(e.value),
                n = o.indexOf(i.value)
              return t >= 0 || n >= 0 ? (t < 0 ? 1 : n < 0 ? -1 : t - n) : a.compare(e.label, i.label)
            },
          )
        },
      },
    )
  },
  rTTb(e, a, i) {
    var t = i("ABep"),
      n = i("QosV"),
      s = i("zd8w"),
      o = i("Wf1j"),
      r = i("oyxz"),
      c = i("TjgH"),
      l = i("ygO2"),
      d = i("ZZgR"),
      p = i("GO7r"),
      u = i("CqQF"),
      h = i("b6mf")
    i.d(
      a,
      {},
      {
        m: function (e) {
          let a,
            i,
            g,
            f,
            m,
            b,
            v,
            y,
            _,
            w,
            P,
            z = (0, n.c)(46),
            R = (0, o.A)(),
            [T, x] = (0, s.useState)(""),
            [A, M] = (0, s.useState)(!1)
          if (z[0] !== e.organizationId || z[1] !== e.organizations) {
            let i
            ;(z[3] !== e.organizationId
              ? ((i = (a) => a.id === e.organizationId), (z[3] = e.organizationId), (z[4] = i))
              : (i = z[4]),
              (a = e.organizations.find(i)),
              (z[0] = e.organizationId),
              (z[1] = e.organizations),
              (z[2] = a))
          } else a = z[2]
          let S = a
          if ("cards" === e.variant) {
            let a, i, n
            z[5] !== R ? ((a = R.formatMessage(h.X.organizationLabel)), (z[5] = R), (z[6] = a)) : (a = z[6])
            let s = e.lookupPending || void 0
            return (
              z[7] !== R || z[8] !== e
                ? ((i = e.organizations.map((a) => {
                    let i = a.id === e.organizationId,
                      n = e.disabled || e.lookupPending || e.canSelectOrganization?.(a.id) === !1,
                      s = new URLSearchParams({ organization_id: a.id, workspace_handoff: "true" })
                    return (
                      e.embedded && s.set("embedded", "codex"),
                      (0, t.jsxs)(
                        "div",
                        {
                          className: "rounded-xl border border-default data-[state=selected]:border-text",
                          "data-state": i ? "selected" : "unselected",
                          children: [
                            (0, t.jsxs)("label", {
                              className:
                                "flex cursor-interaction items-start gap-3 p-4 has-disabled:cursor-default has-disabled:opacity-60",
                              children: [
                                (0, t.jsx)("span", {
                                  className:
                                    "flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft",
                                  children: (0, t.jsx)(p.TGw, {}),
                                }),
                                (0, t.jsxs)("span", {
                                  className: "flex min-w-0 flex-1 flex-col gap-1",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className: "text-sm font-medium wrap-anywhere",
                                      children: a.name,
                                    }),
                                    (0, t.jsx)("span", {
                                      className: "font-mono text-xs wrap-anywhere text-secondary",
                                      children: a.id,
                                    }),
                                    (0, t.jsxs)("span", {
                                      className: "flex flex-wrap gap-1 select-none",
                                      children: [
                                        e.chatgptWorkspaceOrganizationIds?.includes(a.id) &&
                                          (0, t.jsx)(u.m, {
                                            tabIndex: 0,
                                            tooltipContent: (0, t.jsx)(r.A, {
                                              id: "chatgpt.rosalind_access.organization.selection.membership.chatgpt_codex.tooltip",
                                              defaultMessage:
                                                "You belong to a ChatGPT / Codex workspace linked to this organization.",
                                              description:
                                                "Tooltip on the ChatGPT / Codex pill in the Rosalind application organization picker. Describes the current user’s membership in a workspace linked to the organization, without claiming eligibility or approved access to Rosalind. ChatGPT, Codex, and Rosalind are product names.",
                                            }),
                                            children: (0, t.jsx)("span", {
                                              children: (0, t.jsx)(c.E, {
                                                variant: "neutralCompact",
                                                children: (0, t.jsx)(r.A, {
                                                  id: "chatgpt.rosalind_access.organization.selection.membership.chatgpt_codex.label",
                                                  defaultMessage: "ChatGPT / Codex",
                                                  description:
                                                    "Short neutral pill on an organization card in the GPT-Rosalind application, shown to applicants who belong to a ChatGPT workspace linked to that organization. Identifies workspace membership, not approved Rosalind model access. ChatGPT and Codex are product names. May appear beside an API membership pill. No placeholders.",
                                                }),
                                              }),
                                            }),
                                          }),
                                        !0 === a.hasDirectApiMembership &&
                                          (0, t.jsx)(u.m, {
                                            tabIndex: 0,
                                            tooltipContent: (0, t.jsx)(r.A, {
                                              id: "chatgpt.rosalind_access.organization.selection.membership.api.tooltip",
                                              defaultMessage: "You are a direct member of this API organization.",
                                              description:
                                                "Tooltip on the API pill in the Rosalind application organization picker. Describes the current user’s direct membership in the API organization, without claiming eligibility or approved access to Rosalind. API means application programming interface. Rosalind is a product name.",
                                            }),
                                            children: (0, t.jsx)("span", {
                                              children: (0, t.jsx)(c.E, {
                                                variant: "neutralCompact",
                                                children: (0, t.jsx)(r.A, {
                                                  id: "chatgpt.rosalind_access.organization.selection.membership.api.label",
                                                  defaultMessage: "API",
                                                  description:
                                                    "Short neutral pill on an organization card in the GPT-Rosalind application, shown to applicants who are direct members of that OpenAI API organization. Identifies organization membership, not approved Rosalind model access. API means application programming interface. May appear beside a ChatGPT/Codex workspace membership pill. No placeholders.",
                                                }),
                                              }),
                                            }),
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("input", {
                                  className:
                                    "mt-1 size-4 shrink-0 appearance-auto accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                                  type: "radio",
                                  name: "openai-organization-card",
                                  "aria-label": R.formatMessage(h.X.organizationDisplayName, {
                                    name: a.name,
                                    id: a.id,
                                  }),
                                  checked: i,
                                  disabled: n,
                                  onChange: () => e.onSelectOrganization(a.id),
                                }),
                              ],
                            }),
                            "verified" === e.organizationSource &&
                              e.organizationIdsWithApplications?.includes(a.id) &&
                              (0, t.jsx)("div", {
                                className: "px-4 pb-4",
                                children: (0, t.jsxs)(l.z, {
                                  className: "w-full",
                                  color: "outline",
                                  size: "dialogAction",
                                  to: `/rosalind/application/status?${s.toString()}`,
                                  "aria-label": R.formatMessage(h.X.trackOrganizationApplication, {
                                    organizationName: a.name,
                                    organizationId: a.id,
                                  }),
                                  children: [(0, t.jsx)(r.A, { ...h.X.trackApplicationStatus }), (0, t.jsx)(p.Imh, {})],
                                }),
                              }),
                          ],
                        },
                        a.id,
                      )
                    )
                  })),
                  (z[7] = R),
                  (z[8] = e),
                  (z[9] = i))
                : (i = z[9]),
              z[10] !== a || z[11] !== s || z[12] !== i
                ? ((n = (0, t.jsx)("div", {
                    className: "flex flex-col gap-3",
                    role: "radiogroup",
                    "aria-label": a,
                    "aria-busy": s,
                    children: i,
                  })),
                  (z[10] = a),
                  (z[11] = s),
                  (z[12] = i),
                  (z[13] = n))
                : (n = z[13]),
              n
            )
          }
          z[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (e) => {
                ;(M(e), e || x(""))
              }),
              (z[14] = i))
            : (i = z[14])
          let G = e.lookupPending || e.disabled
          if (
            (z[15] !== S
              ? ((g = S
                  ? (0, t.jsx)(r.A, {
                      id: "chatgpt.rosalind_access.organization.context.current",
                      defaultMessage: "Current organization: {name}",
                      description:
                        "Accessible name of the GPT-Rosalind organization picker. Placeholder {name} is the selected organization's display name.",
                      values: { name: S.name },
                    })
                  : (0, t.jsx)(r.A, { ...h.X.selectOrganization })),
                (z[15] = S),
                (z[16] = g))
              : (g = z[16]),
            z[17] !== G || z[18] !== g
              ? ((f = (0, t.jsx)(l.$, {
                  color: "secondary",
                  size: "dialogAction",
                  type: "button",
                  disabled: G,
                  children: g,
                })),
                (z[17] = G),
                (z[18] = g),
                (z[19] = f))
              : (f = z[19]),
            z[20] !== R ? ((m = R.formatMessage(h.X.selectOrganization)), (z[20] = R), (z[21] = m)) : (m = z[21]),
            z[22] !== R ? ((b = R.formatMessage(h.X.selectOrganization)), (z[22] = R), (z[23] = b)) : (b = z[23]),
            z[24] !== T || z[25] !== b
              ? ((v = (0, t.jsx)(d.G.Input, { value: T, onValueChange: x, placeholder: b })),
                (z[24] = T),
                (z[25] = b),
                (z[26] = v))
              : (v = z[26]),
            z[27] !== R.locale || z[28] !== e || z[29] !== T)
          ) {
            let a, i
            ;(z[31] !== R.locale || z[32] !== T
              ? ((a = (e) => `${e.name} ${e.id}`.toLocaleLowerCase(R.locale).includes(T.toLocaleLowerCase(R.locale))),
                (z[31] = R.locale),
                (z[32] = T),
                (z[33] = a))
              : (a = z[33]),
              z[34] !== e
                ? ((i = (a) =>
                    (0, t.jsx)(
                      d.G.Item,
                      {
                        value: a.id,
                        disabled: e.canSelectOrganization?.(a.id) === !1,
                        onSelect: () => {
                          e.disabled ||
                            e.lookupPending ||
                            e.canSelectOrganization?.(a.id) === !1 ||
                            (a.id !== e.organizationId && e.onSelectOrganization(a.id), M(!1), x(""))
                        },
                        children: a.name,
                      },
                      a.id,
                    )),
                  (z[34] = e),
                  (z[35] = i))
                : (i = z[35]),
              (y = e.organizations.filter(a).map(i)),
              (z[27] = R.locale),
              (z[28] = e),
              (z[29] = T),
              (z[30] = y))
          } else y = z[30]
          return (
            z[36] !== y ? ((_ = (0, t.jsx)(d.G.List, { children: y })), (z[36] = y), (z[37] = _)) : (_ = z[37]),
            z[38] !== m || z[39] !== v || z[40] !== _
              ? ((w = (0, t.jsxs)(d.G.Root, { label: m, children: [v, _] })),
                (z[38] = m),
                (z[39] = v),
                (z[40] = _),
                (z[41] = w))
              : (w = z[41]),
            z[42] !== A || z[43] !== w || z[44] !== f
              ? ((P = (0, t.jsx)(d.A, { open: A, onOpenChange: i, triggerButton: f, children: w })),
                (z[42] = A),
                (z[43] = w),
                (z[44] = f),
                (z[45] = P))
              : (P = z[45]),
            P
          )
        },
      },
    )
  },
  A8Fn(e, a, i) {
    let t = (0, i("Qgfj").YK)({
      organizationIdentity: {
        id: "chatgpt.rosalind_access.receipt.organization_identity",
        defaultMessage: "{name} · {id}",
        description: "Organization name followed by its ID in the submission receipt",
      },
      canceled: {
        id: "chatgpt.rosalind_access.customer.receipt.canceled",
        defaultMessage: "Canceled",
        description: "Status badge when an already submitted organization application has since been canceled.",
      },
      title: {
        id: "chatgpt.rosalind_access.customer.receipt.title",
        defaultMessage: "Your application has been submitted",
        description:
          "Success heading after the organization access application is confirmed by the server; submission does not grant access.",
      },
      description: {
        id: "chatgpt.rosalind_access.customer.receipt.description",
        defaultMessage: "We’ll review your organization, proposed research, access locations, and safeguards",
        description: "Explains what OpenAI reviews after an organization submits its GPT-Rosalind application.",
      },
      details: {
        id: "chatgpt.rosalind_access.customer.receipt.details",
        defaultMessage: "Application details",
        description: "Heading for the submitted organization application's receipt summary.",
      },
      reference: {
        id: "chatgpt.rosalind_access.customer.receipt.reference",
        defaultMessage: "Application reference",
        description: "Label for the immutable reference of the submitted organization application.",
      },
      primaryContact: {
        id: "chatgpt.rosalind_access.customer.receipt.contact_name",
        defaultMessage: "Primary contact",
        description: "Label for the applicant name from the authenticated session that submitted the application.",
      },
      contactEmail: {
        id: "chatgpt.rosalind_access.customer.receipt.contact_email",
        defaultMessage: "Contact email",
        description: "Label for the applicant email from the authenticated session that submitted the application.",
      },
      verification: {
        id: "chatgpt.rosalind_access.customer.receipt.verification",
        defaultMessage: "Business verification",
        description: "Label for the organization verification review shown on the receipt.",
      },
      verificationDuringReview: {
        id: "chatgpt.rosalind_access.customer.receipt.verification_review",
        defaultMessage: "Existing verification checked during review",
        description:
          "Explains that existing organization verification will be checked as part of application review, without claiming approval.",
      },
      unconfirmedLocations: {
        id: "chatgpt.rosalind_access.customer.receipt.locations_unsure",
        defaultMessage: "Not yet confirmed",
        description: "Receipt summary when the applicant is unsure about additional countries of access.",
      },
      safeguards: {
        id: "chatgpt.rosalind_access.customer.receipt.safeguards",
        defaultMessage: "Research safeguards",
        description: "Label for the submitted research safety attestation.",
      },
      safeguardsConfirmed: {
        id: "chatgpt.rosalind_access.customer.receipt.safeguards_confirmed",
        defaultMessage: "Reasonable safeguards confirmed",
        description:
          "Records the applicant's mandatory safeguards attestation; this does not claim OpenAI has verified or approved them.",
      },
      safeguardsInPlace: {
        id: "chatgpt.rosalind_access.customer.receipt.safeguards_in_place",
        defaultMessage: "Safeguards in place",
        description: "Label for optional research safeguards selected in the submitted application.",
      },
      otherSafeguards: {
        id: "chatgpt.rosalind_access.customer.receipt.other_safeguards",
        defaultMessage: "Other safeguards",
        description: "Label for the applicant's submitted description of other safeguards.",
      },
      noAccess: {
        id: "chatgpt.rosalind_access.customer.receipt.no_access",
        defaultMessage: "Submission does not grant access",
        description:
          "Notice on the receipt explaining that application submission alone does not enable GPT-Rosalind access.",
      },
      track: {
        id: "chatgpt.rosalind_access.customer.receipt.track",
        defaultMessage: "Track application status",
        description: "Link from the receipt to this organization's persisted application status.",
      },
    })
    i.d(a, {}, { t: t })
  },
  Y5Gw(e, a, i) {
    let t = (0, i("Qgfj").YK)({
        expiredVerificationTitle: {
          id: "chatgpt.rosalind_access.tracking.action.expired_verification.title",
          defaultMessage: "Your organization verification expired",
          description:
            "Heading inside the action-required panel on the GPT-Rosalind application status page when an organization's Persona business-verification inquiry has expired and cannot be resumed.",
        },
        expiredVerificationDescription: {
          id: "chatgpt.rosalind_access.tracking.action.expired_verification.description",
          defaultMessage:
            "Cancel this application and start a new one to complete your organization's business verification.",
          description:
            "Explanation inside the GPT-Rosalind application status page's action-required panel when an expired business-verification inquiry requires an authorized organization member to cancel the current application and submit a new one.",
        },
        expiredVerificationUnauthorizedDescription: {
          id: "chatgpt.rosalind_access.tracking.action.expired_verification.description.unauthorized",
          defaultMessage:
            "Your organization's verification expired. Ask an authorized organization administrator to cancel this application and submit a new one.",
          description:
            "Explanation inside the authenticated GPT-Rosalind application status page's expired business-verification action panel when the signed-in organization member is not authorized to cancel the active application. Instructs them to contact an authorized organization administrator; it never implies the viewer can cancel or resubmit the application.",
        },
        expiredVerificationButton: {
          id: "chatgpt.rosalind_access.tracking.action.expired_verification.button.label",
          defaultMessage: "Review application options",
          description:
            "Button in the GPT-Rosalind application status page's expired-verification action panel that opens the existing authenticated application page, where an authorized member can review cancellation and reapplication options. Clicking does not itself cancel an application.",
        },
        organizationVerificationTitle: {
          id: "chatgpt.rosalind_access.tracking.action.organization_verification.title",
          defaultMessage: "Complete Persona verification",
          description:
            "Heading inside the authenticated GPT-Rosalind application status page's action-required panel when the applicant must finish their organization's business verification with Persona, the identity-verification provider. Keep the Persona brand name unchanged.",
        },
        organizationVerificationDescription: {
          id: "chatgpt.rosalind_access.tracking.action.organization_verification.email.description",
          defaultMessage: "Please go to your email to continue with Persona.",
          description:
            "Instructions inside the authenticated GPT-Rosalind application status page's action-required panel when the applicant must complete or continue their organization's business verification with Persona. Directs the applicant to their email without presenting a separate verification button or implying verification has already passed.",
        },
        additionalInformationTitle: {
          id: "chatgpt.rosalind_access.tracking.action.additional_information.title",
          defaultMessage: "Complete application information",
          description:
            "Heading inside the authenticated GPT-Rosalind application status page's action-required panel when an authorized reviewer identifies missing or incomplete organization application information and requires a complete replacement application.",
        },
        additionalInformationDescription: {
          id: "chatgpt.rosalind_access.tracking.action.additional_information.description",
          defaultMessage:
            "Some application information is missing or incomplete. Cancel this application, then submit a new application with the complete information.",
          description:
            "Explanation inside the authenticated GPT-Rosalind application status page's missing-information action panel for a member authorized to cancel the current application. Clearly explains that resubmission requires canceling the current case first, then creating a separate complete application; it does not claim that an active case can be edited or directly resubmitted.",
        },
        additionalInformationUnauthorizedDescription: {
          id: "chatgpt.rosalind_access.tracking.action.additional_information.description.unauthorized",
          defaultMessage:
            "Some application information is missing or incomplete. Ask an authorized organization member to cancel this application and submit a new one.",
          description:
            "Explanation inside the authenticated GPT-Rosalind application status page's missing-information action panel when the signed-in organization member is not authorized to cancel the active application. Instructs them to contact an authorized organization member; it never implies the viewer can cancel, edit, or directly resubmit the case.",
        },
        additionalInformationButton: {
          id: "chatgpt.rosalind_access.tracking.action.additional_information.button.cancel_and_reapply.label",
          defaultMessage: "Cancel and reapply",
          description:
            "Short primary button label in the authenticated GPT-Rosalind application status page's missing-information action panel, shown only to an organization member authorized to cancel the existing case. Opens the same-page irreversible cancellation confirmation for that exact organization and application; only after explicit confirmation and successful cancellation can the member start a separate complete application.",
        },
        enterpriseAgreementTitle: {
          id: "chatgpt.rosalind_access.tracking.action.enterprise_agreement.required.title",
          defaultMessage: "Enterprise agreement required",
          description:
            "Heading inside the authenticated GPT-Rosalind application-status page's action-required panel when an organization requested the optional Enhanced Privacy upgrade and must complete an Enterprise agreement before access can be granted.",
        },
        enterpriseAgreementDescription: {
          id: "chatgpt.rosalind_access.tracking.action.enterprise_agreement.required.description",
          defaultMessage:
            "Your organization must sign an Enterprise agreement and receive OpenAI approval before access can be granted.",
          description:
            "Explanation inside the authenticated GPT-Rosalind application-status page's action-required panel when an organization requested Enhanced Privacy. Clearly states that an Enterprise agreement must be signed and OpenAI approval is required before access can be granted; it does not imply that the upgrade is active or that an agreement-signing provider is available.",
        },
        enterpriseAgreementButton: {
          id: "chatgpt.rosalind_access.tracking.action.enterprise_agreement.button.label",
          defaultMessage: "Review and sign forms",
          description:
            "Short disabled button label inside the GPT-Rosalind application-status page's Enhanced Privacy Enterprise-agreement action panel. The button remains disabled until a genuine authenticated agreement-signing integration exists; it must not imply that the organization can sign documents or gain access today.",
        },
        genericActionTitle: {
          id: "chatgpt.rosalind_access.tracking.action.other.title",
          defaultMessage: "Additional action required",
          description:
            "Fallback heading inside the GPT-Rosalind application status page's action-required panel when the backend supplies a valid applicant-owned action code that does not yet have a dedicated customer-facing presentation.",
        },
        genericActionDescription: {
          id: "chatgpt.rosalind_access.tracking.action.other.description",
          defaultMessage: "Next step: {action}",
          description:
            "Fallback explanation inside the GPT-Rosalind application status page's action-required panel for an applicant-owned action without a dedicated presentation. Placeholder {action} is the backend-authorized action code rendered with spaces instead of underscores.",
        },
      }),
      n = {
        cancel_and_reapply_persona_verification: {
          title: t.expiredVerificationTitle,
          description: t.expiredVerificationDescription,
        },
        complete_organization_verification: {
          title: t.organizationVerificationTitle,
          description: t.organizationVerificationDescription,
        },
        provide_organization_verification: {
          title: t.organizationVerificationTitle,
          description: t.organizationVerificationDescription,
        },
        provide_additional_information: {
          title: t.additionalInformationTitle,
          description: t.additionalInformationDescription,
        },
        sign_enterprise_zdr_agreement: {
          title: t.enterpriseAgreementTitle,
          description: t.enterpriseAgreementDescription,
          buttonLabel: t.enterpriseAgreementButton,
        },
      }
    i.d(
      a,
      {},
      {
        $: function (e) {
          if (
            "action_required" !== e.state ||
            "applicant" !== e.actionOwner ||
            void 0 === e.requiredAction ||
            "upload_verification_documents" === e.requiredAction
          )
            return
          if (!Object.hasOwn(n, e.requiredAction))
            return {
              title: t.genericActionTitle,
              description: t.genericActionDescription,
              descriptionValues: { action: e.requiredAction.replaceAll("_", " ") },
            }
          let a = n[e.requiredAction]
          if ("sign_enterprise_zdr_agreement" !== e.requiredAction || "research_zdr" === e.requestedResearchMode)
            return "provide_additional_information" === e.requiredAction
              ? e.canCancel
                ? { ...a, buttonLabel: t.additionalInformationButton }
                : { ...a, description: t.additionalInformationUnauthorizedDescription }
              : "cancel_and_reapply_persona_verification" === e.requiredAction
                ? e.canCancel
                  ? { ...a, buttonLabel: t.expiredVerificationButton, href: "/rosalind/application" }
                  : { ...a, description: t.expiredVerificationUnauthorizedDescription }
                : a
        },
      },
    )
  },
  s7Tx(e, a, i) {
    var t = i("AGJY")
    i.d(
      a,
      {},
      {
        t: function (e, a, i, n = "CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_STATUS") {
          try {
            e.logProductEvent(t.op, {
              surface: n,
              action: a,
              result: i,
              failureReason:
                "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_FAILED" === i
                  ? "CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_REQUEST_FAILED"
                  : void 0,
            })
          } catch {}
        },
      },
    )
  },
  zucz(e, a, i) {
    var t = i("nPFn"),
      n = i("DBCl"),
      s = i("ASxG"),
      o = i("fDv2"),
      r = i("Ghh3")
    let c = s.enum(["research_non_zdr", "research_zdr"]),
      l = s.object({
        products: s.array(s.enum(t.ii)),
        researchPurpose: s.string(),
        researchScopes: s.array(s.enum(t.tF)),
        primaryCountry: s.string(),
        additionalLocations: s.enum(["no", "yes", "unsure"]),
        additionalCountries: s.array(s.string()).optional(),
        selectedSafeguards: s.array(s.enum(t.pK)),
        otherSafeguardDetails: s.string().optional(),
        requestedResearchMode: c,
      }),
      d = s.object({
        organizationId: s.string(),
        applicantName: s.string().optional(),
        applicantEmail: s.string().optional(),
        bioagentsApplicationReference: s.string().regex(/^[0-9a-f]{64}$/),
        state: s.enum([...t.si, "canceled"]),
        canCancel: s.boolean(),
        canResumeVerification: s.boolean(),
        canApproveProvisioning: s.boolean().optional(),
        requiresInternalApiAcknowledgement: s.boolean().optional(),
        requestedResearchMode: c.optional(),
        grantedResearchMode: c.optional(),
        activeTier: s.enum(["discovery", "research"]).optional(),
        canRequestResearchUpgrade: s.boolean().optional(),
        researchUpgrade: s
          .object({
            requestId: s.string().regex(/^[0-9a-f]{64}$/),
            status: s.enum(["pending", "approved", "declined"]),
            requestedAt: o.datetime({ offset: !0 }),
          })
          .optional(),
        existingZdrEnabled: s.boolean().optional(),
        zdrUpgradeRequested: s.boolean().optional(),
        zdrUpgradeApproved: s.boolean().optional(),
        provisioningPricing: s
          .object({
            pricingVersion: s.string(),
            requestedResearchMode: c,
            pricingStatus: s.enum(["provisional", "final"]),
            rateDisplay: s.string(),
            separateCharge: s.boolean(),
          })
          .optional(),
        provisioningApproval: s
          .object({
            approvedAt: o.datetime({ offset: !0 }),
            pricingVersion: s.string(),
            requestedResearchMode: c,
            pricingStatus: s.enum(["provisional", "final"]),
            acceptedResearchTerms: s.literal(!0).optional(),
            acceptedInternalApiOnly: s.literal(!0).optional(),
            researchTermsVersion: s.string().optional(),
          })
          .optional(),
        researchTermsVersion: s.string().optional(),
        researchTermsUrl: s
          .url()
          .refine((e) => {
            let a = new URL(e)
            return (
              "https:" === a.protocol &&
              ["openai.com", "cdn.openai.com"].includes(a.hostname) &&
              !a.username &&
              !a.password
            )
          })
          .optional(),
        approvalSummary: l.optional(),
        applicationSummary: l.optional(),
        submittedAt: o.datetime({ offset: !0 }).optional(),
        statusUpdatedAt: o.datetime({ offset: !0 }).optional(),
        decisionAt: o.datetime({ offset: !0 }).optional(),
        accessGrantedAt: o.datetime({ offset: !0 }).optional(),
        requiredAction: s.string().optional(),
        actionOwner: s.enum(["applicant", "reviewer"]).optional(),
        kybStatus: s
          .enum(["not_started", "in_progress", "pending", "action_required", "passed", "failed", "expired", "error"])
          .optional(),
        processingPending: s.boolean().optional(),
        personaInquiryId: s
          .string()
          .regex(/^inq_[A-Za-z0-9]{16,64}$/)
          .optional(),
        personaEnvironmentId: s
          .string()
          .regex(/^env_[A-Za-z0-9]{16,64}$/)
          .optional(),
        personaSessionToken: s
          .string()
          .regex(/^[A-Za-z0-9._~+/=-]{16,2048}$/)
          .optional(),
      })
    function p(e, a) {
      let i = d.parse(e)
      if (i.organizationId !== a.organizationId || i.bioagentsApplicationReference !== a.bioagentsApplicationReference)
        throw Error("The Rosalind response belongs to another application")
      return i
    }
    i.d(
      a,
      {},
      {
        $d: async function (e, a, i, t) {
          let s = p(
            await r.Request.safeRequest(
              "post",
              "/rosalind/access/applications/{application_reference}/research-upgrades",
              {
                parameters: {
                  path: { application_reference: a.bioagentsApplicationReference },
                  header: { "Idempotency-Key": t },
                },
                requestBody: { organizationId: a.organizationId, details: i },
                additionalHeaders: { [n.zBc]: e.accountId, "Idempotency-Key": t },
                expectedIdentity: e,
                expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 502, 503],
                retry: !1,
              },
            ),
            a,
          )
          if (null == s.researchUpgrade || "access_granted" !== s.state || "discovery" !== s.activeTier)
            throw Error("The Research upgrade request was not confirmed")
          return s
        },
        ly: async function (e, a, i) {
          return p(
            await r.Request.safeRequest("get", "/rosalind/access/applications/{application_reference}", {
              parameters: {
                path: { application_reference: a.bioagentsApplicationReference },
                query: { organizationId: a.organizationId, includeDecisionMetadata: !0, includeApprovalSummary: !0 },
              },
              additionalHeaders: { [n.zBc]: e.accountId },
              expectedIdentity: e,
              expectedErrorStatuses: [400, 401, 403, 404, 422, 502, 503],
              retry: !1,
              signal: i,
            }),
            a,
          )
        },
        rH: async function (e, a) {
          let i = p(
            await r.Request.safeRequest("post", "/rosalind/access/applications/{application_reference}/cancel", {
              parameters: { path: { application_reference: a.bioagentsApplicationReference } },
              requestBody: { organizationId: a.organizationId },
              additionalHeaders: { [n.zBc]: e.accountId },
              expectedIdentity: e,
              expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 502, 503],
              retry: !1,
            }),
            a,
          )
          if ("canceled" !== i.state || i.canCancel) throw Error("The cancellation was not confirmed")
          return i
        },
        w0: async function (e, a, i) {
          if (i.organizationId !== a.organizationId) throw Error("The approval belongs to another organization")
          let t = p(
              await r.Request.safeRequest(
                "post",
                "/rosalind/access/applications/{application_reference}/approve-provisioning",
                {
                  parameters: { path: { application_reference: a.bioagentsApplicationReference } },
                  requestBody: i,
                  additionalHeaders: { [n.zBc]: e.accountId },
                  expectedIdentity: e,
                  expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 502, 503],
                  retry: !1,
                },
              ),
              a,
            ),
            s = t.provisioningApproval
          if (
            "approved" !== t.state ||
            !1 !== t.canApproveProvisioning ||
            s?.acceptedResearchTerms !== !0 ||
            s.pricingVersion !== i.pricingVersion ||
            s.researchTermsVersion !== i.researchTermsVersion ||
            s.requestedResearchMode !== i.requestedResearchMode ||
            (!0 === t.requiresInternalApiAcknowledgement && !0 !== s.acceptedInternalApiOnly)
          )
            throw Error("The provisioning approval was not confirmed")
          return t
        },
      },
    )
  },
  XhWW(e, a, i) {
    var t = i("ABep"),
      n = i("QosV"),
      s = i("xSOA"),
      o = i("zTeN"),
      r = i("zd8w"),
      c = i("oyxz"),
      l = i("ygO2"),
      d = i("yGJW"),
      p = i("UgNy"),
      u = i("s7Tx"),
      h = i("zucz"),
      g = i("o0BB")
    i.d(
      a,
      {},
      {
        G: function (e) {
          let a,
            i,
            f,
            m,
            b,
            v,
            y,
            _,
            w,
            P,
            z,
            R,
            T = (0, n.c)(51),
            {
              application: x,
              identity: A,
              disabled: M,
              surface: S,
              onCanceled: G,
              onRefresh: k,
              onPendingChange: I,
              buttonLabel: C,
              buttonColor: q,
            } = e,
            O = void 0 === q ? "dangerOutline" : q,
            D = (0, o.Ul)(d.YV),
            [L, j] = (0, r.useState)(!1)
          ;(T[0] !== x || T[1] !== A ? ((a = () => (0, h.rH)(A, x)), (T[0] = x), (T[1] = A), (T[2] = a)) : (a = T[2]),
            T[3] !== D || T[4] !== I || T[5] !== S
              ? ((i = () => {
                  ;(I?.(!0),
                    (0, u.t)(
                      D,
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCEL",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                      S,
                    ))
                }),
                (T[3] = D),
                (T[4] = I),
                (T[5] = S),
                (T[6] = i))
              : (i = T[6]),
            T[7] !== D || T[8] !== S
              ? ((f = () =>
                  (0, u.t)(
                    D,
                    "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCEL",
                    "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_FAILED",
                    S,
                  )),
                (T[7] = D),
                (T[8] = S),
                (T[9] = f))
              : (f = T[9]),
            T[10] !== D || T[11] !== G || T[12] !== S
              ? ((m = (e) => {
                  ;((0, u.t)(
                    D,
                    "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCEL",
                    "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_SUCCEEDED",
                    S,
                  ),
                    G?.(e),
                    j(!1))
                }),
                (T[10] = D),
                (T[11] = G),
                (T[12] = S),
                (T[13] = m))
              : (m = T[13]),
            T[14] !== I || T[15] !== k
              ? ((b = () => {
                  ;(I?.(!1), k())
                }),
                (T[14] = I),
                (T[15] = k),
                (T[16] = b))
              : (b = T[16]),
            T[17] !== a || T[18] !== i || T[19] !== f || T[20] !== m || T[21] !== b
              ? ((v = { mutationFn: a, retry: !1, onMutate: i, onError: f, onSuccess: m, onSettled: b }),
                (T[17] = a),
                (T[18] = i),
                (T[19] = f),
                (T[20] = m),
                (T[21] = b),
                (T[22] = v))
              : (v = T[22]))
          let N = (0, s.n)(v),
            E = M || N.isPending || N.isSuccess,
            V = (0, r.useRef)(!1)
          T[23] !== x.canCancel || T[24] !== E || T[25] !== N || T[26] !== D || T[27] !== S
            ? ((y = () => {
                !E &&
                  x.canCancel &&
                  (N.reset(),
                  (V.current = !0),
                  (0, u.t)(
                    D,
                    "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCELLATION_CONFIRMATION",
                    "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_STARTED",
                    S,
                  ),
                  j(!0))
              }),
              (T[23] = x.canCancel),
              (T[24] = E),
              (T[25] = N),
              (T[26] = D),
              (T[27] = S),
              (T[28] = y))
            : (y = T[28])
          let X = y
          T[29] !== N.isPending || T[30] !== D || T[31] !== S
            ? ((_ = () => {
                N.isPending ||
                  (V.current &&
                    ((V.current = !1),
                    (0, u.t)(
                      D,
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_CANCELLATION_CONFIRMATION",
                      "CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_CANCELLED",
                      S,
                    )),
                  j(!1))
              }),
              (T[29] = N.isPending),
              (T[30] = D),
              (T[31] = S),
              (T[32] = _))
            : (_ = T[32])
          let H = _
          return (
            T[33] !== x.canCancel || T[34] !== E || T[35] !== O || T[36] !== C || T[37] !== X
              ? ((w =
                  (x.canCancel || null != C) &&
                  (0, t.jsx)(l.$, {
                    color: O,
                    size: "dialogAction",
                    type: "button",
                    disabled: E || !x.canCancel,
                    onClick: X,
                    children: (0, t.jsx)(c.A, { ...(C ?? g.$.cancelApplication) }),
                  })),
                (T[33] = x.canCancel),
                (T[34] = E),
                (T[35] = O),
                (T[36] = C),
                (T[37] = X),
                (T[38] = w))
              : (w = T[38]),
            T[39] !== N.isSuccess
              ? ((P =
                  N.isSuccess &&
                  (0, t.jsx)("p", { role: "status", children: (0, t.jsx)(c.A, { ...g.$.cancellationComplete }) })),
                (T[39] = N.isSuccess),
                (T[40] = P))
              : (P = T[40]),
            T[41] !== x.canCancel || T[42] !== E || T[43] !== N || T[44] !== H || T[45] !== L
              ? ((z =
                  L &&
                  x.canCancel &&
                  (0, t.jsx)(p.v, {
                    pending: N.isPending,
                    failed: N.isError,
                    disabled: E || !x.canCancel,
                    onClose: H,
                    onConfirm: () => N.mutate(),
                  })),
                (T[41] = x.canCancel),
                (T[42] = E),
                (T[43] = N),
                (T[44] = H),
                (T[45] = L),
                (T[46] = z))
              : (z = T[46]),
            T[47] !== w || T[48] !== P || T[49] !== z
              ? ((R = (0, t.jsxs)(t.Fragment, { children: [w, P, z] })),
                (T[47] = w),
                (T[48] = P),
                (T[49] = z),
                (T[50] = R))
              : (R = T[50]),
            R
          )
        },
      },
    )
  },
  o0BB(e, a, i) {
    let t = (0, i("Qgfj").YK)({
      decisionStage: {
        id: "chatgpt.rosalind_access.tracking.progress.decision.label",
        defaultMessage: "Decision",
        description:
          "Label for the decision stage of the Rosalind application tracker; a decision does not mean access has been provisioned",
      },
      submittedStatus: {
        id: "chatgpt.rosalind_access.application.status.submitted.label",
        defaultMessage: "Submitted",
        description:
          "Short application-status badge shown when a GPT-Rosalind application has been submitted successfully but business verification and suitability review have not started. Submission does not grant product access.",
      },
      actionRequiredStatus: {
        id: "chatgpt.rosalind_access.application.status.action_required.label",
        defaultMessage: "Action required",
        description:
          "Short GPT-Rosalind application-status badge shown when the applicant or an authorized reviewer must complete an assigned action before the organization's access application can proceed.",
      },
      approvedStatus: {
        id: "chatgpt.rosalind_access.application.status.approved.label",
        defaultMessage: "Approved",
        description:
          "Short GPT-Rosalind application-status badge shown after business verification and suitability have been approved but before organization-wide product access has been granted.",
      },
      accessGrantedStatus: {
        id: "chatgpt.rosalind_access.application.status.access_granted.label",
        defaultMessage: "Access granted",
        description:
          "Short GPT-Rosalind application-status badge shown only after the approved organization's product access has actually been provisioned.",
      },
      accessRevokedStatus: {
        id: "chatgpt.rosalind_access.application.status.access_revoked.label",
        defaultMessage: "Access revoked",
        description:
          "Short GPT-Rosalind application-status badge shown when previously provisioned product access has subsequently been revoked for the organization.",
      },
      deniedStatus: {
        id: "chatgpt.rosalind_access.application.status.denied.label",
        defaultMessage: "Denied",
        description:
          "Short GPT-Rosalind application-status badge shown when an authorized reviewer has issued a final decision denying an organization's request for access. This status means access was not granted.",
      },
      canceledStatus: {
        id: "chatgpt.rosalind_access.application.status.canceled.label",
        defaultMessage: "Canceled",
        description:
          "Short application-status badge displayed when the signed-in researcher selects an organization whose latest GPT-Rosalind access application was permanently canceled. A canceled application cannot be restored, but an eligible organization can submit a separate new application.",
      },
      statusSubmittedHeadline: {
        id: "chatgpt.rosalind_access.tracking.status.submitted.heading",
        defaultMessage: "Application received",
        description:
          "Reassuring headline on the authenticated GPT-Rosalind organization application-status page when the submitted application has been received but review has not started. Receiving an application does not approve or grant access.",
      },
      statusSubmittedDescription: {
        id: "chatgpt.rosalind_access.tracking.status.submitted.description",
        defaultMessage: "Your organization’s application has been submitted and is awaiting review.",
        description:
          "Supporting explanation on the authenticated GPT-Rosalind organization application-status page when a real application has been submitted and is waiting for review. This message must not imply approval, access, or a guaranteed review timeframe.",
      },
      statusInProgressHeadline: {
        id: "chatgpt.rosalind_access.tracking.status.in_progress.heading",
        defaultMessage: "Your application is under review",
        description:
          "Reassuring headline on the authenticated GPT-Rosalind organization application-status page while business verification, suitability checks, or employee review are in progress. It does not mean access has been approved or granted.",
      },
      statusInProgressDescription: {
        id: "chatgpt.rosalind_access.tracking.status.in_progress.description",
        defaultMessage:
          "We’re reviewing your organization and application details. No action is required from you right now.",
        description:
          "Reassuring explanation on the authenticated GPT-Rosalind organization application-status page while authorized internal review is underway. Clearly tells the researcher they have no action to complete right now; applicant-owned next steps are shown only in the separate action-required state.",
      },
      statusInReviewBadge: {
        id: "chatgpt.rosalind_access.tracking.status.in_progress.badge",
        defaultMessage: "In review",
        description:
          "Short status badge on the authenticated GPT-Rosalind organization application-tracking page while authorized internal review is underway and the applicant has no action to complete. Reviewer-owned actions remain private and use this same customer-facing badge.",
      },
      statusActionRequiredHeadline: {
        id: "chatgpt.rosalind_access.tracking.status.action_required.heading",
        defaultMessage: "Action needed to continue",
        description:
          "Clear, gently urgent headline on the authenticated GPT-Rosalind organization application-status page when the signed-in applicant has an authorized next step to complete. Actions assigned only to an internal reviewer do not display this headline.",
      },
      statusActionRequiredDescription: {
        id: "chatgpt.rosalind_access.tracking.status.action_required.description",
        defaultMessage: "Complete the requested next step so your organization’s application can move forward.",
        description:
          "Supporting instructions on the authenticated GPT-Rosalind organization application-status page when an applicant-owned action is required. The precise authorized action appears separately; this message does not imply access will be granted.",
      },
      statusApprovedHeadline: {
        id: "chatgpt.rosalind_access.tracking.status.approved.heading",
        defaultMessage: "Your application has been approved",
        description:
          "Positive headline on the authenticated GPT-Rosalind organization application-status page after an authorized reviewer approves the application. Approval is distinct from actual product-access provisioning.",
      },
      statusApprovedDescription: {
        id: "chatgpt.rosalind_access.tracking.status.approved.description",
        defaultMessage: "Your organization has been approved. Access is not available until provisioning is complete.",
        description:
          "Supporting explanation on the authenticated GPT-Rosalind organization application-status page after application approval but before access is granted. Clearly distinguishes reviewer approval from the separate, unfinished access-provisioning step.",
      },
      statusAccessGrantedHeadline: {
        id: "chatgpt.rosalind_access.tracking.status.access_granted.heading",
        defaultMessage: "Your organization now has access",
        description:
          "Celebratory headline on the authenticated GPT-Rosalind organization application-status page shown only after organization-wide product access has actually been provisioned. This must never appear for mere application approval.",
      },
      statusAccessGrantedDescription: {
        id: "chatgpt.rosalind_access.tracking.status.access_granted.description",
        defaultMessage: "GPT-Rosalind access has been granted to your organization.",
        description:
          "Supporting confirmation on the authenticated GPT-Rosalind organization application-status page after an authoritative provisioning receipt establishes that the organization has real product access.",
      },
      statusDeniedHeadline: {
        id: "chatgpt.rosalind_access.tracking.status.denied.heading",
        defaultMessage: "Application not approved",
        description:
          "Calm, customer-safe headline on the authenticated GPT-Rosalind organization application-status page when an authorized reviewer issues a final denial. Do not imply a future retry, disclose internal decision reasons, or suggest that access was granted.",
      },
      statusDeniedDescription: {
        id: "chatgpt.rosalind_access.tracking.status.denied.description",
        defaultMessage: "Your organization’s application was not approved. Access has not been granted.",
        description:
          "Customer-safe explanation on the authenticated GPT-Rosalind organization application-status page after a final denial. Confirms access was not granted without exposing internal policy findings, reviewer identities, or sensitive denial reasons.",
      },
      statusRevokedHeadline: {
        id: "chatgpt.rosalind_access.tracking.status.revoked.heading",
        defaultMessage: "Access has been revoked",
        description:
          "Clear, customer-safe headline on the authenticated GPT-Rosalind organization application-status page after previously provisioned organization-wide access is revoked. This state differs from an application that was denied before access existed.",
      },
      statusRevokedDescription: {
        id: "chatgpt.rosalind_access.tracking.status.revoked.description",
        defaultMessage: "GPT-Rosalind access previously granted to your organization is no longer available.",
        description:
          "Customer-safe explanation on the authenticated GPT-Rosalind organization application-status page when an existing access grant has been revoked. Confirms access is no longer available without exposing internal policy findings or reviewer identities.",
      },
      statusCanceledHeadline: {
        id: "chatgpt.rosalind_access.tracking.status.canceled.heading",
        defaultMessage: "Application canceled",
        description:
          "Neutral headline on the authenticated GPT-Rosalind organization application-status page when the organization's latest application has been permanently canceled. A canceled application cannot be restored.",
      },
      statusCanceledDescription: {
        id: "chatgpt.rosalind_access.tracking.status.canceled.description",
        defaultMessage:
          "This application was permanently canceled. Your organization can start a new application if eligible.",
        description:
          "Supporting explanation on the authenticated GPT-Rosalind organization application-status page after an irreversible cancellation. Clarifies that the old case cannot be restored and that a separate new application depends on the organization's eligibility.",
      },
      statusProvisioningApprovalHeading: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.heading",
        defaultMessage: "Approve access provisioning",
        description:
          "Heading of the final approval panel on the authenticated GPT-Rosalind application-status page after an internal reviewer approves the application. The backend independently verifies the signer as an organization owner, organization administrator, or Global Admin of the Enterprise tenant linked to that organization. Approval is a separate prerequisite for provisioning and does not itself mean access has already been granted.",
      },
      statusProvisioningApprovalReceivedHeading: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.received.heading",
        defaultMessage: "Provisioning approval received",
        description:
          "Reassuring heading on the authenticated GPT-Rosalind application-status page after a verified organization owner or administrator durably confirms provisioning and accepts the current research-pricing policy. This receipt does not mean product access has been provisioned.",
      },
      statusProvisioningApprovalReceivedDescription: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.received.description",
        defaultMessage:
          "Your organization’s approval has been recorded. You do not have access yet. No action is required while access provisioning is pending.",
        description:
          "Reassuring confirmation shown to every authorized organization member on the authenticated GPT-Rosalind application-status page after a verified owner or administrator accepts the current provisional or final research-pricing policy. The approval is durably recorded and no immediate action is required, but product access has not been granted and access provisioning remains pending.",
      },
      statusProvisioningApprovalAdministratorRequired: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.organization_workspace_or_tenant_administrator_required.description",
        defaultMessage:
          "An organization owner or administrator, an Enterprise Global Admin, or an eligible Business workspace owner or administrator must accept the GPT-Rosalind Terms, confirm provisioning, and acknowledge the current pricing notice before access can be granted.",
        description:
          "Explanation shown to an authenticated GPT-Rosalind application-status viewer after reviewer approval when the backend has not independently authorized that viewer to sign for the selected organization. An organization owner or administrator, Global Admin of the Enterprise tenant linked to that exact organization, or owner or administrator of an eligible self-serve Business organization's sole verified workspace must accept the GPT-Rosalind Terms, confirm provisioning, and acknowledge the current pricing notice. Enterprise Global Admin is the tenant-wide administrative role. Business workspace authority applies only to the eligible sole-workspace case; other workspace roles, application-submission permission, and cancellation permission alone do not grant approval authority. Informational paragraph with no placeholders.",
      },
      statusProvisioningApprovalDescription: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.legal_and_pricing_notice.description",
        defaultMessage:
          "Review the application, research terms, and current pricing notice before approving access for your organization.",
        description:
          "Instructions inside the authenticated GPT-Rosalind application-status page's final provisioning-approval panel for an independently verified organization owner or administrator. Explains that they must review the submitted application, agree to the GPT-Rosalind Terms and applicable Services Agreement, acknowledge the current pricing notice, and confirm access provisioning before real secure approval can be submitted.",
      },
      statusProvisioningNoSeparateCharge: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.pricing.no_separate_charge.notice",
        defaultMessage:
          "GPT-Rosalind does not currently have a separate charge. We’ll notify your organization before any separate pricing takes effect.",
        description:
          "Current GPT-Rosalind pricing notice displayed during organization provisioning approval for either Standard Data Retention or Enhanced Privacy. Explains that no separate charge currently applies and the organization will be notified before any future separate pricing takes effect.",
      },
      statusProvisioningAgreementRates: {
        id: "codex.rosalind.provisioning.agreement_rates",
        defaultMessage:
          "GPT-Rosalind usage is subject to your organization’s pricing agreement and applicable rate card.",
        description: "Pricing notice for administrators reviewing the organization’s agreement-based pricing policy.",
      },
      statusProvisioningApprovalRates: {
        id: "codex.rosalind.provisioning.provisional_rates",
        defaultMessage: "GPT-Rosalind pricing is still to be confirmed.",
        description: "Pricing notice displayed before final rates are available.",
      },
      statusProvisioningLegalAttestation: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.legal.attestation.current_and_future_accuracy.description",
        defaultMessage:
          "I have reviewed this application with due inquiry and reasonable diligence; it is accurate and complete to the best of my knowledge; I am authorized to bind my organization and have all required internal approvals; and I will immediately notify OpenAI in writing if any information is or becomes inaccurate or incomplete. The GPT-Rosalind Terms are incorporated into our existing signed services agreement or, if none exists, the {servicesAgreement}.",
        description:
          "Complete legal attestation shown only to an independently verified organization owner or administrator in the authenticated GPT-Rosalind application-status provisioning-approval panel. Confirms application diligence and accuracy, authority and internal approvals to bind the organization, immediate written notice of existing or future inaccuracies, and incorporation of GPT-Rosalind Terms into an existing signed services agreement or, only when none exists, the fallback OpenAI Services Agreement. Placeholder {servicesAgreement} is an accessible external link to the official OpenAI Services Agreement.",
      },
      statusProvisioningServicesAgreementLink: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.legal.services_agreement.link.label",
        defaultMessage: "OpenAI Services Agreement",
        description:
          "Accessible external-link label opening the official OpenAI Services Agreement from the legal attestation in the authenticated GPT-Rosalind application-status provisioning-approval panel. An independently verified organization owner or administrator reads this fallback agreement when the organization has no existing signed services agreement. Short legal document title.",
      },
      statusProvisioningApprovalConfirmation: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.confirmation.provisioning.label",
        defaultMessage: "I confirm that GPT-Rosalind access should be provisioned for this organization.",
        description:
          "First mandatory consent checkbox in the authenticated GPT-Rosalind application-status page's final provisioning-approval panel. An independently verified organization owner or administrator confirms their organization should receive product access; selecting this checkbox alone never provisions access or submits approval.",
      },
      statusProvisioningNoSeparateChargeAcknowledgement: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.pricing.no_separate_charge.acknowledgement.label",
        defaultMessage:
          "I understand that GPT-Rosalind does not currently have a separate charge and that my organization will be notified before any separate pricing takes effect.",
        description:
          "Required organization-owner-or-administrator acknowledgment of the current GPT-Rosalind pricing notice. Confirms understanding that there is currently no separate charge and that the organization will be notified before any future separate pricing takes effect; accepting this notice preserves the existing secure provisioning approval contract.",
      },
      statusProvisioningAgreementPricingAcknowledgement: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.pricing.agreement.acknowledgement.label",
        defaultMessage:
          "I acknowledge that GPT-Rosalind usage is subject to my organization’s applicable pricing and billing terms.",
        description:
          "Required pricing acknowledgment checkbox for a verified organization owner or administrator in the GPT-Rosalind final provisioning-approval panel when the server supplies the agreement-based pricing policy. Acknowledges the organization's applicable pricing and billing terms without asserting a universal rate or that every organization is charged. Separate checkboxes confirm provisioning and accept the legal terms. No placeholders.",
      },
      statusProvisioningApprovalFinalRatesConfirmation: {
        id: "codex.rosalind.provisioning.final_rates_consent",
        defaultMessage: "I accept the GPT-Rosalind rates shown above.",
        description: "Required administrator consent to the displayed final rates.",
      },
      statusProvisioningApprovalRatesConfirmation: {
        id: "codex.rosalind.provisioning.provisional_rates_consent",
        defaultMessage: "I acknowledge that final GPT-Rosalind pricing is still to be confirmed.",
        description: "Required administrator acknowledgement when pricing is provisional.",
      },
      statusProvisioningResearchTermsAgreement: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.legal.attestation_and_agreements.label",
        defaultMessage:
          "I certify the statements above and agree to the {researchTerms} and the applicable {servicesAgreement}.",
        description:
          "Mandatory legal-agreement checkbox shown only to an independently verified organization owner or administrator in the authenticated GPT-Rosalind application-status provisioning-approval panel. Selecting this single checkbox certifies the preceding application-accuracy and organizational-authority statements and explicitly accepts both applicable agreements; an existing signed services agreement takes precedence over the linked fallback, and approval still requires separate pricing and provisioning confirmations. Placeholder {researchTerms} is an accessible external link to the official GPT-Rosalind Terms PDF. Placeholder {servicesAgreement} is a separate accessible external link to the OpenAI Services Agreement used when no signed services agreement already governs.",
      },
      statusProvisioningResearchTermsLink: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.legal.terms.link.label",
        defaultMessage: "GPT-Rosalind Terms",
        description:
          "Accessible external-link label opening the official GPT-Rosalind Terms PDF from the mandatory organization-owner-or-administrator agreement checkbox on the authenticated GPT-Rosalind application-status provisioning-approval panel. Short legal document title.",
      },
      statusProvisioningApplicableServicesAgreementLink: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.legal.applicable_services_agreement.link.label",
        defaultMessage: "Services Agreement",
        description:
          "Short accessible external-link label embedded in the mandatory GPT-Rosalind provisioning legal-agreement checkbox for an independently verified organization owner or administrator. The link opens the OpenAI Services Agreement, which applies only when the organization does not already have a signed governing services agreement; a separate preceding attestation explains this precedence.",
      },
      statusProvisioningApprovalButton: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.button.approve.label",
        defaultMessage: "Approve provisioning",
        description:
          "Short primary button label in the authenticated GPT-Rosalind application-status page's final provisioning-approval panel for an independently verified organization owner or administrator. The button becomes available only when the provisioning, pricing, and combined GPT-Rosalind Terms and Services Agreement consents are all selected and a genuine secure server-backed approval integration exists; approving is distinct from actually provisioning access.",
      },
      statusProvisioningApprovalUnavailable: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.unavailable.description",
        defaultMessage:
          "Secure administrator approval is not available yet. Access cannot be granted until approval and provisioning are complete.",
        description:
          "Honest explanation beside the disabled final provisioning-approval button on the authenticated GPT-Rosalind application-status page when no real secure owner-or-administrator approval integration or applicable research-pricing mode is available. Makes clear that selecting local checkboxes does not submit, approve, or provision product access.",
      },
      statusProvisioningApprovalFailed: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.error.submission_failed",
        defaultMessage: "We couldn’t submit your approval. Please try again.",
        description:
          "Recoverable error alert in the authenticated GPT-Rosalind final provisioning-approval panel when a genuine secure API-organization owner or administrator approval request fails. Reassuringly invites the administrator to retry while keeping the existing reviewer-approved application unchanged; it must not suggest that access was granted or provisioning succeeded.",
      },
      statusProvisioningApplicationReviewUnavailable: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.application_review.unavailable.error",
        defaultMessage: "We couldn’t load the submitted application. Please try again.",
        description:
          "Recoverable error alert shown to an independently verified organization owner or administrator in the GPT-Rosalind final provisioning-approval panel when the submitted application cannot be retrieved. Explains that approval remains unavailable until the existing secure application request succeeds; it must not suggest that the application needs to be submitted again.",
      },
      statusProvisioningApplicationReviewRetry: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.application_review.retry.button",
        defaultMessage: "Try again",
        description:
          "Short recovery button label in the GPT-Rosalind final provisioning-approval panel for an independently verified organization owner or administrator after the submitted application fails to load. Selecting it retries the existing authenticated application request without creating another application or granting product access.",
      },
      statusProvisioningPricingLinks: {
        id: "chatgpt.rosalind_access.tracking.approved.provisioning.pricing.agreement.links.description",
        defaultMessage: "Review the {chatgptRateCard} and {apiPricing} for details.",
        description:
          "Informational paragraph below the authoritative final pricing notice in the GPT-Rosalind provisioning-approval panel, shown to a verified organization owner or administrator when the server supplies the agreement-based pricing policy. The {chatgptRateCard} placeholder is a link labeled ChatGPT rate card covering ChatGPT and Codex pricing, and {apiPricing} is a link labeled API pricing page. Both links open in a new tab and are always present; the organization's applicable agreement determines its pricing and billing terms.",
      },
      applicationDetailsVisualHeading: {
        id: "chatgpt.rosalind_access.review.summary.visual_heading",
        defaultMessage: "Application details",
        description: "Concise visible heading inside the compact GPT-Rosalind application-review summary card.",
      },
      resumeBusinessVerification: {
        id: "chatgpt.rosalind_access.verification.resume.button",
        defaultMessage: "Resume business verification",
        description:
          "Short primary action button shown on the GPT-Rosalind application confirmation or an existing organization's application when its business verification is incomplete. Opens the same authenticated Persona business-verification inquiry without creating, canceling, or resubmitting the application.",
      },
      resumingBusinessVerification: {
        id: "chatgpt.rosalind_access.verification.resume.pending.button",
        defaultMessage: "Opening business verification…",
        description:
          "Temporary short primary-button label shown on the GPT-Rosalind application confirmation or an existing organization's application while the authenticated service retrieves a one-time Persona session for its existing business-verification inquiry.",
      },
      businessVerificationUnavailable: {
        id: "chatgpt.rosalind_access.verification.unavailable.error",
        defaultMessage: "Business verification is temporarily unavailable. Please try again.",
        description:
          "Privacy-safe error shown to a signed-in GPT-Rosalind applicant when the existing business-verification inquiry cannot be opened or resumed. The application is retained, and the applicant can retry without creating a replacement inquiry.",
      },
      cancelApplication: {
        id: "chatgpt.rosalind_access.cancellation.action.button",
        defaultMessage: "Cancel application",
        description:
          "Button on the GPT-Rosalind organization selection or submission confirmation screen that opens an explicit irreversible cancellation confirmation for one existing organization application. Short button label.",
      },
      cancellationComplete: {
        id: "chatgpt.rosalind_access.cancellation.success.notice",
        defaultMessage: "Application canceled. You can submit a new application for this organization.",
        description:
          "Confirmation notice displayed after the authenticated GPT-Rosalind backend permanently cancels one application. Explains that the organization can now create a separate new application; the canceled application is not restored.",
      },
      applicationStatusUnavailable: {
        id: "chatgpt.rosalind_access.tracking.application.history.unavailable.error",
        defaultMessage: "We couldn’t check your application status. Please try again.",
        description:
          "Privacy-safe error shown on the GPT-Rosalind application-status page when the signed-in researcher's selected-organization application history cannot be retrieved. Explains that the application-status check failed and can be retried without implying that the researcher lacks an application.",
      },
      retryOrganizationLookup: {
        id: "chatgpt.rosalind_access.organization.selection.lookup_unavailable.retry_button",
        defaultMessage: "Retry loading organizations",
        description:
          "Short button label on the first GPT-Rosalind application step that reloads the page to retry retrieving every OpenAI organization associated with the signed-in account after a temporary lookup failure.",
      },
      noAccessGranted: {
        id: "chatgpt.rosalind_access.confirmation.access.notice",
        defaultMessage: "Submission does not grant access.",
        description:
          "Safety notice on the real application confirmation screen explaining that receiving an application does not authorize use of GPT-Rosalind.",
      },
      confirmationReferenceLabel: {
        id: "chatgpt.rosalind_access.confirmation.application_reference.heading",
        defaultMessage: "Application reference",
        description: "Label for the actual backend-issued reference on a confirmed GPT-Rosalind application.",
      },
      requestedAccess: {
        id: "chatgpt.rosalind_access.review.summary.requested_access.label",
        defaultMessage: "Requested access",
        description:
          "Summary row label for the selected ChatGPT, Codex, internal API, and external API product surfaces.",
      },
      researchPurposeSummary: {
        id: "chatgpt.rosalind_access.review.summary.research_purpose.label",
        defaultMessage: "Research purpose",
        description:
          "Summary row label displaying the applicant's own description of their scientific objective and expected research benefit.",
      },
      summaryScope: {
        id: "chatgpt.rosalind_access.review.summary.research_scope.label",
        defaultMessage: "Research scope",
        description:
          "Short summary-row label on the GPT-Rosalind application review screen for the applicant's selected pathogen-engineering, biological-toxin, high-containment wet-lab, gene-drive, or human or animal infection research categories, or none of those categories.",
      },
      summaryPrimaryLocation: {
        id: "chatgpt.rosalind_access.review.summary.primary_location.label",
        defaultMessage: "Primary access location",
        description: "Summary row label for the actual primary country or territory of GPT-Rosalind access.",
      },
      summaryAdditionalLocations: {
        id: "chatgpt.rosalind_access.review.summary.additional_locations.label",
        defaultMessage: "Additional countries or regions",
        description: "Summary row label for disclosed additional or uncertain GPT-Rosalind access countries.",
      },
      summarySafeguards: {
        id: "chatgpt.rosalind_access.review.summary.safeguards.label",
        defaultMessage: "Research safeguards",
        description:
          "Summary row label for the mandatory reasonable-research-safeguards attestation in a GPT-Rosalind application.",
      },
      safeguardsInPlace: {
        id: "chatgpt.rosalind_access.review.summary.safeguards_in_place.label",
        defaultMessage: "Safeguards in place",
        description:
          "Summary row label listing any optional existing research and security safeguards selected by the GPT-Rosalind applicant.",
      },
      otherSafeguardsSummary: {
        id: "chatgpt.rosalind_access.review.summary.other_safeguards.label",
        defaultMessage: "Other safeguards",
        description:
          "Summary row label for the applicant's conditional free-text description of other existing research and security safeguards.",
      },
      safeguardsConfirmed: {
        id: "chatgpt.rosalind_access.review.summary.safeguards.confirmed",
        defaultMessage: "Reasonable safeguards confirmed",
        description:
          "Application-summary value confirming that the applicant completed the mandatory proportionate research-safeguards attestation.",
      },
      none: {
        id: "chatgpt.rosalind_access.review.summary.none.label",
        defaultMessage: "None",
        description:
          "Short application-summary value indicating that the applicant reported no additional access locations.",
      },
      additionalLocationsUnconfirmed: {
        id: "chatgpt.rosalind_access.review.summary.additional_locations.unconfirmed",
        defaultMessage: "Not yet confirmed · policy review required",
        description:
          "Application-summary value shown when a GPT-Rosalind applicant does not yet know whether users will access the program from additional countries or territories. It explains that locations remain unconfirmed and require policy review without asking the applicant to identify countries.",
      },
      policyReviewRequired: {
        id: "chatgpt.rosalind_access.review.summary.policy_review_required.label",
        defaultMessage: "{locations} · policy review required",
        description:
          "Application-summary value for additional GPT-Rosalind access locations. The placeholder {locations} is a localized list of the countries or territories selected by the applicant.",
      },
      externalApi: {
        id: "chatgpt.rosalind_access.research.products.option.external_api.label",
        defaultMessage: "API · external applications",
        description:
          "Product selection card title for using the OpenAI API in life sciences applications intended for external users.",
      },
      statusUpdatedLabel: {
        id: "chatgpt.rosalind_access.tracking.timeline.status_updated.label",
        defaultMessage: "Last updated",
        description:
          "Short date-row label on the authenticated GPT-Rosalind organization application-status page. The adjacent localized date and time comes from the authoritative latest application-state update.",
      },
      pricingChatgptRateCardLink: {
        id: "chatgpt.rosalind_access.pricing.chatgpt_rate_card.link.label",
        defaultMessage: "ChatGPT rate card",
        description:
          "Short inline link label on the GPT-Rosalind application and final provisioning-approval pricing notice for applicants and organization administrators. Opens the official ChatGPT rate card in a new tab so readers can find the ChatGPT and Codex rates applicable to their organization's agreement. Appears alongside a separate API pricing link. No placeholders.",
      },
      pricingApiLink: {
        id: "chatgpt.rosalind_access.pricing.api.link.label",
        defaultMessage: "API pricing page",
        description:
          "Short inline link label on the GPT-Rosalind application and final provisioning-approval pricing notice for applicants and organization administrators. Opens the official OpenAI API pricing page in a new tab so readers can review published Rosalind API rates. Appears alongside a separate ChatGPT rate card link. No placeholders.",
      },
      regulatedMaterials: {
        id: "chatgpt.rosalind_access.research.scope.option.regulated_materials.label",
        defaultMessage: "Pathogens, toxins, or regulated biological materials",
        description:
          "Biosafety scope option indicating that the proposed GPT-Rosalind research may involve infectious agents, toxins, or regulated biological materials.",
      },
      wetLab: {
        id: "chatgpt.rosalind_access.research.scope.option.wet_lab.label",
        defaultMessage: "Wet-lab research",
        description:
          "Biosafety scope option for research involving physical laboratory experiments with biological materials.",
      },
    })
    i.d(a, {}, { $: t })
  },
}
//# sourceMappingURL=122578.2cc9765ee9.js.map
