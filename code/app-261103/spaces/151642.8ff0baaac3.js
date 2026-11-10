export const __rspack_esm_ids = [151642]
export const __webpack_modules__ = {
  Zwnn(e, t, n) {
    var a = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, a.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            d: "M16.4183 9.99967C16.4181 6.45518 13.5448 3.58188 10.0003 3.58171C7.96895 3.58171 6.15935 4.52712 4.98273 6.00163H7.50031L7.6341 6.0153C7.93707 6.07735 8.16535 6.34535 8.16535 6.66667C8.16535 6.98799 7.93707 7.25598 7.6341 7.31803L7.50031 7.33171H3.75031C3.73055 7.33171 3.71104 7.32656 3.69172 7.32487C3.68913 7.32464 3.68649 7.32513 3.68391 7.32487C3.64304 7.32082 3.60409 7.31254 3.56574 7.30143C3.56188 7.30031 3.55788 7.2997 3.55402 7.2985C3.51366 7.286 3.47546 7.27023 3.43879 7.25065L3.43586 7.24967C3.43444 7.24891 3.43337 7.24752 3.43195 7.24675C3.35757 7.20587 3.29219 7.15262 3.23859 7.08757C3.23505 7.08329 3.23128 7.07923 3.22785 7.07487C3.20549 7.04631 3.1858 7.01609 3.16828 6.98405C3.16491 6.97791 3.16169 6.97173 3.15852 6.9655C3.14408 6.93698 3.13265 6.90732 3.12238 6.87663C3.11744 6.86205 3.11264 6.84757 3.10871 6.83268C3.10316 6.81117 3.09843 6.78955 3.09504 6.76725C3.09108 6.74233 3.08833 6.71738 3.08723 6.69206C3.08691 6.68361 3.08527 6.67519 3.08527 6.66667V2.91667C3.08527 2.5494 3.38304 2.25163 3.75031 2.25163C4.11743 2.2518 4.41535 2.54951 4.41535 2.91667V4.62956C5.82462 3.16447 7.80565 2.25163 10.0003 2.25163C14.2793 2.2518 17.7482 5.72065 17.7484 9.99967C17.7484 14.2789 14.2794 17.7485 10.0003 17.7487C6.02899 17.7487 2.75629 14.7612 2.305 10.9108L2.96516 10.8337L3.62531 10.7555C3.99895 13.9437 6.7115 16.4186 10.0003 16.4186C13.5449 16.4184 16.4183 13.5443 16.4183 9.99967ZM2.88801 10.1725C3.25252 10.13 3.58237 10.3911 3.62531 10.7555L2.305 10.9108C2.26225 10.546 2.52323 10.2153 2.88801 10.1725Z",
          }),
        })))
  },
  kpoE(e, t, n) {
    var a = n("ASxG")
    n("fVOX")
    var r = n("WFY2"),
      o = n("eShZ")
    let l = a.object({
      stage: a.enum([
        "prepare",
        "connection_status",
        "disconnect",
        "recovery_read",
        "recovery_claim",
        "recovery_write",
        "recovery_reconcile",
        "enrollment",
        "enrollment_completion",
        "authorization_navigation",
        "approval_navigation",
        "approval_start",
        "approval_resume",
        "approval_poll",
        "fill",
      ]),
      error_category: a.enum(["http", "network", "timeout", "client", "invalid_response", "popup_blocked"]),
      http_status: a
        .number()
        .int()
        .min(400)
        .max(599)
        .optional()
        .catch(void 0),
      operation_id: a
        .uuid()
        .optional()
        .catch(void 0),
    })
    n.d(
      t,
      {},
      {
        z: function (e, t, n, a) {
          if (n instanceof Error && "AbortError" === n.name) return
          let i = "client"
          "invalid_response" === n || "popup_blocked" === n
            ? (i = n)
            : n instanceof Error && "TimeoutError" === n.name
              ? (i = "timeout")
              : n instanceof o.fk && (i = "network" === n.errorKind ? "network" : "http")
          let s = l.safeParse({
            stage: t,
            error_category: i,
            http_status: "http" === i && n instanceof o.fk ? n.status : void 0,
            operation_id: a,
          }).data
          if (null != s)
            try {
              r.v.error("Browser auth failed", { safe: s })
            } catch {}
        },
      },
    )
  },
  Y8Nq(e, t, n) {
    var a = n("zTeN"),
      r = n("SPnB"),
      o = n("g2p6"),
      l = n("jScN"),
      i = n("GaA7"),
      s = n("OWtl"),
      d = n("kpoE"),
      c = n("ShnJ")
    let u = (0, a.vU)(s.u, (e, { scope: t }) => ({
      queryKey: ["browser-auth-operation", e],
      enabled: null != e,
      queryFn: async () => {
        if (null == e) return null
        try {
          let t = await h().read(e)
          return null == t ? null : f(t)
        } catch (n) {
          throw (p(t, e) && (0, d.z)(t, "recovery_read", n), n)
        }
      },
      staleTime: 1 / 0,
      gcTime: 0,
      retry: !1,
    }))
    function p(e, t) {
      return e.get(r.chatGptAuthenticatedUserId$) === t.userId && e.get(o.Sk) === t.accountId
    }
    async function m(e, t, n) {
      let a = e.query.getData(u, t),
        r = {
          ...n,
          fill_status:
            "unknown" === n.fill_status && a?.operation_id === n.operation_id ? a.fill_status : n.fill_status,
          save_status:
            "unknown" === n.save_status && a?.operation_id === n.operation_id ? a.save_status : n.save_status,
        }
      return (e.query.setData(u, t, r), await g(e, t, r), r)
    }
    async function g(e, t, n) {
      try {
        await h().settle(t, {
          operationId: n.operation_id,
          fillStatus: n.fill_status,
          saveStatus: n.save_status,
          statusAvailable: !1 !== n.statusAvailable,
          selectionId: n.selectionId,
        })
      } catch (a) {
        p(e, t) && (0, d.z)(e, "recovery_write", a, n.operation_id)
      }
    }
    function h() {
      let e = i.appServices?.browserAuthOperations
      if (null == e) throw Error("Browser sign-in recovery is unavailable")
      return e
    }
    function f(e) {
      return {
        operation_id: e.operationId,
        fill_status: e.fillStatus,
        save_status: e.saveStatus,
        statusAvailable: e.statusAvailable,
        selectionId: e.selectionId,
      }
    }
    n.d(
      t,
      {},
      {
        AM: u,
        O2: p,
        Ve: m,
        lV: async function (e, t, n, a, r) {
          let o = (0, c.qv)(n.choice),
            i = (0, l.m7)({
              attributes: { "browser_auth.phase": "submit", "browser_auth.submission_mode": o },
              name: "codex.browser_auth.submit",
            })
          try {
            let o = await (async () => {
              let o,
                { recheckSave: l, ...s } = n,
                { choice: v } = s
              if (v?.remember && 1) {
                let n = !0,
                  a = await (
                    null != l
                      ? l()
                      : e.queryClient.fetchQuery({
                          queryKey: (0, c.mK)(t.userId, t.accountId, t.conversationId, t.challengeId),
                          queryFn: () => {
                            let e = n ? "explicit_recheck" : "other_refetch"
                            return ((n = !1), (0, c.RS)(t.conversationId, t.challengeId, e, i?.trace))
                          },
                          staleTime: 0,
                          gcTime: 3e5,
                        })
                  ).catch(() => void 0)
                n = !1
                let r = v.saveFields,
                  o = a?.manual_save_fixed_account_fields,
                  s = a?.manual_save_fields,
                  d =
                    a?.available === !0 &&
                    a.save_enabled &&
                    !0 === a.manual_save_supported &&
                    null != r &&
                    (v.saveFixedAccount
                      ? null != o && null == s && null == r.username && o.password === r.password
                      : null == o && null != s && (s.username ?? void 0) === r.username && s.password === r.password)
                v = {
                  ...v,
                  remember: d,
                  trackFillStatus:
                    !0 === v.trackFillStatus && a?.available === !0 && !0 === a.manual_fill_recovery_supported,
                  saveFields: d ? r : void 0,
                }
              }
              if (!a()) return
              let y = {
                operationId: v?.passwordManagerOperationId ?? v?.operationId ?? crypto.randomUUID(),
                fillStatus: "unknown",
                saveStatus: v?.remember ? "unknown" : "not_requested",
                statusAvailable:
                  v?.remember === !0 ||
                  v?.passwordManagerAccess != null ||
                  v?.savedCredentialSelectionId != null ||
                  v?.trackFillStatus === !0,
                selectionId: v?.savedCredentialSelectionId,
              }
              ;(0, c.q3)(e.queryClient, t.userId, t.accountId, t.conversationId, t.challengeId)
              let b = await h()
                  .claim(t, y)
                  .catch(async (n) => {
                    throw (
                      a() && (0, d.z)(e, "recovery_claim", n, y.operationId),
                      await g(e, t, {
                        ...f(y),
                        fill_status: "unavailable",
                        save_status: "not_requested",
                        statusAvailable: !1,
                      }),
                      n
                    )
                  }),
                x = f(b.operation)
              if (!b.created) return (e.query.setData(u, t, x), a() ? x : void 0)
              if (!a())
                return void (await g(e, t, {
                  ...x,
                  fill_status: "cancelled",
                  save_status: "not_requested",
                  statusAvailable: !1,
                }))
              r()
              try {
                o = await (0, c.Nq)({
                  ...s,
                  choice: v,
                  conversationId: t.conversationId,
                  challengeId: t.challengeId,
                  operationId: y.operationId,
                  trace: i?.trace,
                })
              } catch (n) {
                ;(v?.passwordManagerAccess != null && p(e, t) && (0, d.z)(e, "fill", n, y.operationId),
                  (o = (0, c.WC)(n, v)
                    ? { ...x, fill_status: "unavailable", save_status: "not_requested", statusAvailable: !1 }
                    : x))
              }
              return m(e, t, o)
            })()
            return (
              null != o &&
                i?.setAttributes?.({
                  "browser_auth.fill_status": o.fill_status ?? "unknown",
                  "browser_auth.save_status": o.save_status ?? "unknown",
                  "browser_auth.status_available": !1 !== o.statusAvailable,
                }),
              i?.finish(void 0, null == o ? { outcome: "aborted", reason: "cancelled" } : (0, c.JU)(o.fill_status)),
              o
            )
          } catch (e) {
            throw (i?.finish(void 0, { outcome: "failure", reason: "request_failed" }), e)
          }
        },
        n8: function (e, t, n, a) {
          let l = e.get(r.chatGptAuthenticatedUserId$),
            i = e.get(o.Sk)
          return null == l || null == i || null == n
            ? null
            : { userId: l, accountId: i, hostId: t, conversationId: n, challengeId: a }
        },
      },
    )
  },
  ShnJ(e, t, n) {
    var a = n("DBCl"),
      r = n("ASxG"),
      o = n("d7QT"),
      l = n("Ghh3"),
      i = n("jScN"),
      s = n("eShZ")
    function d(e, t, n, a) {
      return ["browser-auth-credential-availability", e, t, n, a]
    }
    let c = r.object({
        credential_id: r.string(),
        origin: r.string(),
        account_label: r.string(),
        created_at: r.number(),
        selection_id: r.string(),
        expires_at: r.number(),
      }),
      u = r.object({
        available: r.boolean(),
        save_enabled: r.boolean(),
        reuse_enabled: r.boolean(),
        manual_save_supported: r.boolean().optional(),
        manual_fill_recovery_supported: r.boolean().optional(),
        manual_save_fields: r.object({ username: r.string().nullish(), password: r.string() }).nullish(),
        manual_save_fixed_account_fields: r.object({ password: r.string() }).nullish(),
        items: r.array(c),
        next_cursor: r.string().nullish(),
      }),
      p = r.enum(["not_requested", "saved", "failed", "unknown"]),
      m = r.object({
        operation_id: r.string(),
        fill_status: r.union([l.k$.shape.status, r.literal("unknown")]),
        save_status: p,
      }),
      g = r.discriminatedUnion("interaction", [
        r.object({
          provider: r.literal("openai_passwords"),
          interaction: r.literal("inline"),
          save_enabled: r.boolean(),
          manual_save_fields: r.object({ username: r.string().nullish(), password: r.string() }).nullable(),
          manual_save_fixed_account_fields: r.object({ password: r.string() }).nullable().default(null),
          items: r.array(c),
          next_cursor: r.string().nullable(),
        }),
        r.object({
          provider: r.literal("onepassword"),
          interaction: r.literal("external"),
          state: r.enum(["disconnected", "connecting", "connected", "failed", "reconnect_required"]),
          enrollment_url: r.string().nullable(),
        }),
      ]),
      h = r.object({
        default_password_manager: r.enum(["openai_passwords", "onepassword"]).nullish().catch(null),
        access_request: r
          .object({
            provider: r.string(),
            operation_id: r.string(),
            access_handle: r.string(),
            state: r.enum(["waiting", "approved", "denied", "failed", "expired"]),
            expires_at: r.number(),
            approval_url: r.string().nullish(),
          })
          .nullish(),
        manual_fill_recovery_supported: r.boolean(),
        operation_id: r.string().nullable(),
        operation: m.nullable(),
        password_managers: r
          .array(r.object({ provider: r.string() }).loose())
          .transform((e) => e.filter((e) => g.options.some((t) => t.shape.provider.safeParse(e.provider).success)))
          .pipe(r.array(g)),
      })
    function f(e) {
      return e?.passwordManagerAccess != null
        ? "password_manager"
        : e?.savedCredentialSelectionId != null
          ? "saved"
          : "manual"
    }
    async function v(e, t, n, a) {
      let r = (0, i.m7)({
        attributes: { "browser_auth.phase": e, ...(null == t ? {} : { "browser_auth.trigger": t }) },
        name: "codex.browser_auth.candidates",
        trace: n,
      })
      try {
        let e = await a()
        return (r?.finish(void 0, { outcome: "success", reason: "completed" }), e)
      } catch (e) {
        throw (y(r, e), e)
      }
    }
    function y(e, t) {
      let n = "request_failed"
      ;(t instanceof o.G
        ? (n = "invalid_response")
        : t instanceof Error && "TimeoutError" === t.name
          ? (n = "timeout")
          : t instanceof Error && "AbortError" === t.name && (n = "cancelled"),
        e?.finish(void 0, { outcome: "cancelled" === n ? "aborted" : "failure", reason: n }))
    }
    function b(e) {
      return "submitted" === e
        ? { outcome: "success", reason: e }
        : "declined" === e || "cancelled" === e
          ? { outcome: "aborted", reason: e }
          : "unavailable" === e || "submission_failed" === e || "unknown" === e
            ? { outcome: "failure", reason: e }
            : { outcome: "expected", reason: e }
    }
    n.d(
      t,
      {},
      {
        GI: async function (e, t, n) {
          return v("candidates", void 0, void 0, async () =>
            u.parse(
              await l.Request.safePost("/flora/browser/credential-candidates", {
                additionalHeaders: { "X-OpenAI-Cloud-Vault-Credential-Fields-Version": "2" },
                requestBody: { conversation_id: e, challenge_id: t, cursor: n },
              }),
            ),
          )
        },
        JU: b,
        Nq: async function ({
          conversationId: e,
          challengeId: t,
          operationId: n,
          fields: o,
          selectedOption: d,
          choice: c,
          trace: u,
        }) {
          let m, g
          m =
            c?.passwordManagerAccess != null
              ? {
                  conversation_id: e,
                  challenge_id: t,
                  operation_id: n,
                  password_manager_access: c.passwordManagerAccess,
                }
              : c?.savedCredentialSelectionId != null
                ? {
                    conversation_id: e,
                    challenge_id: t,
                    operation_id: n,
                    saved_credential_selection_id: c.savedCredentialSelectionId,
                  }
                : {
                    conversation_id: e,
                    challenge_id: t,
                    operation_id: c?.remember || c?.trackFillStatus ? n : void 0,
                    fields: o,
                    selected_option: d,
                    remember: c?.remember || void 0,
                    save_fields: c?.remember ? c.saveFields : void 0,
                  }
          let h = f(c),
            v = (0, i.m7)({
              attributes: {
                "browser_auth.phase": "form_fill",
                "browser_auth.submission_mode": h,
                "http.request.method": "POST",
              },
              name: "codex.browser_auth.form_fill",
              trace: u,
            })
          try {
            g = l.k$.extend({ save_status: p.nullish(), operation_id: r.string().nullish() }).parse(
              await l.Request.safePost(a.d33, {
                additionalHeaders: (function (e) {
                  if (null != e)
                    return {
                      traceparent: e.trace.traceparent,
                      ...(null == e.trace.tracestate ? {} : { tracestate: e.trace.tracestate }),
                    }
                })(v),
                signal: AbortSignal.timeout(c?.passwordManagerAccess != null ? 13e4 : 3e4),
                requestBody: m,
              }),
            )
          } catch (e) {
            throw (
              e instanceof s.fk &&
                null != e.responseStatus &&
                v?.setAttributes?.({ "http.response.status_code": e.responseStatus }),
              y(v, e),
              e
            )
          }
          if (null != g.operation_id && g.operation_id !== n)
            throw (
              v?.finish(void 0, { outcome: "failure", reason: "invalid_response" }),
              Error("Browser sign-in operation did not match")
            )
          let x = {
            operation_id: n,
            fill_status: g.status,
            save_status: g.save_status ?? (c?.remember ? "unknown" : "not_requested"),
            statusAvailable:
              c?.remember === !0 ||
              c?.passwordManagerAccess != null ||
              c?.savedCredentialSelectionId != null ||
              c?.trackFillStatus === !0,
            selectionId: c?.savedCredentialSelectionId,
          }
          return (
            v?.setAttributes?.({
              "browser_auth.fill_status": x.fill_status,
              "browser_auth.save_status": x.save_status,
            }),
            v?.finish(void 0, b(x.fill_status)),
            x
          )
        },
        RS: async function (e, t, n, a) {
          return v("availability", n, a, async () =>
            u.parse(
              await l.Request.safeGet("/flora/browser/credential-availability", {
                signal: AbortSignal.timeout(3e3),
                additionalHeaders: {
                  "X-OpenAI-Cloud-Vault-Check-Trigger": n,
                  "X-OpenAI-Cloud-Vault-Credential-Fields-Version": "2",
                },
                parameters: { query: { conversation_id: e, challenge_id: t } },
              }),
            ),
          )
        },
        WC: function (e, t) {
          return (
            e instanceof s.fk &&
            ([401, 403, 404, 422].includes(e.responseStatus ?? 0) ||
              (400 === e.responseStatus && t?.savedCredentialSelectionId == null) ||
              (t?.passwordManagerAccess != null && [409, 410].includes(e.responseStatus ?? 0)))
          )
        },
        XC: async function (e, t, n, a) {
          let r = m.parse(
            await l.Request.safePost("/flora/browser/credential-operations/{operation_id}/reconcile", {
              parameters: { path: { operation_id: t } },
              requestBody: { conversation_id: e, challenge_id: n, selection_id: a },
            }),
          )
          if (r.operation_id !== t) throw Error("Browser sign-in operation did not match")
          return r
        },
        cP: async function (e, t, n) {
          let a = AbortSignal.timeout(3e4),
            r = (0, i.m7)({ attributes: { "browser_auth.phase": "prepare" }, name: "codex.browser_auth.prepare" })
          try {
            let o = h.parse(
              await l.Request.safePost("/flora/browser/auth/prepare", {
                signal: null == n ? a : AbortSignal.any([n, a]),
                requestBody: { conversation_id: e, challenge_id: t },
              }),
            )
            return (r?.finish(void 0, { outcome: "success", reason: "completed" }), o)
          } catch (e) {
            throw (y(r, e), e)
          }
        },
        mK: d,
        q3: function (e, t, n, a, r) {
          for (let o of [!1, !0])
            e.removeQueries({
              queryKey: [o ? "messaging-credential-preparation" : "browser-auth-preparation", t, n, a, r],
              exact: !0,
            })
          e.removeQueries({ queryKey: d(t, n, a, r), exact: !0 })
        },
        qv: f,
        xM: function (e, t, n) {
          if (null != e.accountUsername || null != n)
            return null != e.accountUsername &&
              null != n &&
              null == t &&
              1 === e.fields.length &&
              e.fields[0]?.id === n.password
              ? { password: n.password }
              : void 0
          if (null == t || t.username === t.password) return
          let a = e.fields.filter(({ id: e }) => e === t.password)
          return null == t.username
            ? 1 === e.fields.length && 1 === a.length
              ? { password: t.password }
              : void 0
            : 1 === e.fields.filter(({ id: e }) => e === t.username).length && 1 === a.length
              ? { username: t.username, password: t.password }
              : void 0
        },
      },
    )
  },
  JjB1(e, t, n) {
    var a = n("on57")
    let r = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif',
      o = (0, a.A)(
        "text-default min-h-0 w-full p-0 leading-normal !font-sans",
        "[&_.ProseMirror]:w-full",
        "[&_.ProseMirror]:!text-default",
        "[&_.ProseMirror]:!font-sans",
        "[&_.ProseMirror]:px-0",
        "[&_.ProseMirror]:py-0",
        "[&_.ProseMirror]:!leading-6",
        "[&_.ProseMirror_p]:!font-sans",
        "[&_.ProseMirror_p]:!leading-6",
        "[&_.ProseMirror_p_*]:!font-sans",
        "[&_.ProseMirror_span]:!font-sans",
        "!min-h-0 text-base",
        "[&_.ProseMirror]:min-h-6",
      )
    n.d(
      t,
      {},
      {
        Eb: o,
        Fn: "absolute left-4 min-w-0 overflow-hidden transition-[left,width,top,bottom] duration-[140ms] ease-enter-snappy motion-reduce:transition-none",
        H5: {
          "--codex-chat-font-size": "var(--annotation-comment-font-size, 13px)",
          "--composer-top-tray-background": "var(--color-surface)",
          "--composer-top-tray-border": "transparent",
          "--font-sans": r,
          "--font-ui-family": r,
          fontFamily: r,
        },
        xB: "absolute inset-x-0 bottom-0 flex h-12 items-center ps-2 pe-3 origin-bottom-left transition-[opacity,transform] duration-basic ease-out motion-reduce:transition-none",
      },
    )
  },
  YwjY(e, t, n) {
    n.d(t, { o: () => i })
    var a = n("ABep"),
      r = n("QosV"),
      o = n("on57"),
      l = n("JjB1")
    function i(e) {
      let t,
        n,
        i,
        s,
        d,
        c,
        u,
        p,
        m,
        g,
        h,
        f,
        v = (0, r.c)(24)
      v[0] !== e
        ? (({ className: n, children: t, style: s, isRevealingPageComment: d, surfaceVariant: c, ...i } = e),
          (v[0] = e),
          (v[1] = t),
          (v[2] = n),
          (v[3] = i),
          (v[4] = s),
          (v[5] = d),
          (v[6] = c))
        : ((t = v[1]), (n = v[2]), (i = v[3]), (s = v[4]), (d = v[5]), (c = v[6]))
      let y = void 0 === c ? "default" : c,
        b = "default" === y && "bg-surface-elevated-secondary shadow-md",
        x = void 0 !== d && d ? "transition-none" : "transition-[height,width,opacity]"
      return (
        v[7] !== n || v[8] !== b || v[9] !== x
          ? ((u = (0, o.A)(
              "surface-AyYLmv",
              "pointer-events-auto isolate rounded-[22px] ease-enter-snappy motion-reduce:transition-none",
              b,
              x,
              n,
            )),
            (v[7] = n),
            (v[8] = b),
            (v[9] = x),
            (v[10] = u))
          : (u = v[10]),
        v[11] !== s ? ((p = { ...l.H5, ...s }), (v[11] = s), (v[12] = p)) : (p = v[12]),
        v[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, o.A)("content-Sj8_aX", "overflow-hidden rounded-[inherit] bg-inherit")), (v[13] = m))
          : (m = v[13]),
        v[14] !== t ? ((g = (0, a.jsx)("div", { className: m, children: t })), (v[14] = t), (v[15] = g)) : (g = v[15]),
        v[16] !== y
          ? ((h =
              "default" === y
                ? (0, a.jsx)("div", {
                    "aria-hidden": !0,
                    className:
                      "pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-multiply outline-1 outline-border",
                  })
                : null),
            (v[16] = y),
            (v[17] = h))
          : (h = v[17]),
        v[18] !== i || v[19] !== u || v[20] !== p || v[21] !== g || v[22] !== h
          ? ((f = (0, a.jsxs)("div", { ...i, className: u, style: p, children: [g, h] })),
            (v[18] = i),
            (v[19] = u),
            (v[20] = p),
            (v[21] = g),
            (v[22] = h),
            (v[23] = f))
          : (f = v[23]),
        f
      )
    }
  },
  bdLz(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("ygO2"),
      l = n("GO7r")
    n.d(
      t,
      {},
      {
        m: function (e) {
          let t,
            n,
            i,
            s,
            d,
            c,
            u,
            p = (0, r.c)(15)
          p[0] !== e
            ? (({ children: t, loading: n, size: s, type: d, ...i } = e),
              (p[0] = e),
              (p[1] = t),
              (p[2] = n),
              (p[3] = i),
              (p[4] = s),
              (p[5] = d))
            : ((t = p[1]), (n = p[2]), (i = p[3]), (s = p[4]), (d = p[5]))
          let m = void 0 === s ? "composerSm" : s,
            g = void 0 === d ? "submit" : d
          return (
            p[6] !== t || p[7] !== n
              ? ((c = n ? null : (t ?? (0, a.jsx)(l.npO, {}))), (p[6] = t), (p[7] = n), (p[8] = c))
              : (c = p[8]),
            p[9] !== n || p[10] !== i || p[11] !== m || p[12] !== c || p[13] !== g
              ? ((u = (0, a.jsx)(o.$, {
                  ...i,
                  loading: n,
                  radius: "full",
                  size: m,
                  type: g,
                  uniform: !0,
                  children: c,
                })),
                (p[9] = n),
                (p[10] = i),
                (p[11] = m),
                (p[12] = c),
                (p[13] = g),
                (p[14] = u))
              : (u = p[14]),
            u
          )
        },
      },
    )
  },
  LMw7(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("on57")
    n.d(
      t,
      {},
      {
        Q: function (e) {
          let t,
            n,
            l,
            i,
            s,
            d,
            c = (0, r.c)(12)
          c[0] !== e
            ? (({ children: t, className: n, tone: i, ...l } = e),
              (c[0] = e),
              (c[1] = t),
              (c[2] = n),
              (c[3] = l),
              (c[4] = i))
            : ((t = c[1]), (n = c[2]), (l = c[3]), (i = c[4]))
          let u = "danger" === (void 0 === i ? "secondary" : i) ? "text-chart-red" : "text-tertiary"
          return (
            c[5] !== n || c[6] !== u
              ? ((s = (0, o.A)(
                  "flex min-h-[var(--height-token-row)] items-center justify-center gap-2 py-row-y text-[length:var(--detail-row-font-size,var(--text-base))] leading-5",
                  u,
                  n,
                )),
                (c[5] = n),
                (c[6] = u),
                (c[7] = s))
              : (s = c[7]),
            c[8] !== t || c[9] !== l || c[10] !== s
              ? ((d = (0, a.jsx)("div", { className: s, ...l, children: t })),
                (c[8] = t),
                (c[9] = l),
                (c[10] = s),
                (c[11] = d))
              : (d = c[11]),
            d
          )
        },
      },
    )
  },
  AdJ5(e, t, n) {
    var a = n("lsky"),
      r = n("EULo"),
      o = n("MX6A"),
      l = n("ABl9")
    let i = [
      {
        extensions: [
          {
            name: "sitesPluginMention",
            level: "inline",
            start: (e) => s(e),
            tokenizer(e) {
              if (!this.lexer.state.inLink && 0 === s(e))
                return {
                  type: "link",
                  raw: "$sites",
                  href: l.ic,
                  title: null,
                  text: "Sites",
                  tokens: [{ type: "text", raw: "Sites", text: "Sites" }],
                }
            },
          },
          {
            name: "userMessageImage",
            level: "inline",
            start: (e) => e.indexOf("!["),
            tokenizer(e) {
              var t, n
              if (!e.startsWith("![")) return
              let r = this.lexer.options.tokenizer
              if (null == r) return
              let o = a._F.prototype.link.call(r, e) ?? a._F.prototype.reflink.call(r, e, this.lexer.tokens.links)
              return o?.type === "image"
                ? ((t = o),
                  (n = d(this.lexer, o.text)),
                  {
                    type: "text",
                    raw: t.raw,
                    text: `!${t.text}`,
                    tokens: [
                      { type: "text", raw: "!", text: "!" },
                      { type: "link", raw: t.raw.slice(1), href: t.href, title: t.title, text: t.text, tokens: n },
                    ],
                  })
                : void 0
            },
          },
          {
            name: "composerLink",
            level: "inline",
            start(e) {
              let t = e.indexOf("[")
              if (-1 === t) return
              let n = e[t - 1]
              return ":" === n || "!" === n ? t - 1 : t
            },
            tokenizer(e) {
              if (this.lexer.state.inLink) return this.lexer.options.tokenizer?.escape(e)
              if (e.startsWith(":[") && (0, r.ex)(e, 1)?.start === 1) {
                let t = e[0]
                return { type: "text", raw: t, text: t }
              }
              if (!e.startsWith("[")) return
              let t = this.lexer.options.tokenizer,
                n = null == t ? void 0 : a._F.prototype.link.call(t, e)
              if (n?.type === "link" && null != n.title) return n
              let l = (0, r.ex)(e, 0)
              if (l?.start === 0) {
                let t = (0, o.Nb)(l.label)
                return {
                  type: "link",
                  raw: e.slice(0, l.end),
                  href: (0, r.gh)(l.path),
                  title: null,
                  text: t,
                  tokens: d(this.lexer, l.label),
                }
              }
              let i = e.split("\n", 1)[0]
              if (i.includes("](")) return { type: "text", raw: i, text: i }
            },
          },
        ],
      },
    ]
    function s(e) {
      let t = e.matchAll(l.sm).next().value
      return null == t ? void 0 : t.index + t[1].length
    }
    function d(e, t) {
      let n = e.state.inLink
      e.state.inLink = !0
      try {
        return e.inlineTokens(t)
      } finally {
        e.state.inLink = n
      }
    }
    n.d(t, {}, { b: i })
  },
  GKsW(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("zTeN"),
      l = n("zd8w"),
      i = n("GaA7"),
      s = n("OWtl"),
      d = n("Oj9r"),
      c = n("n5oN")
    let u = (0, o.vP)(s.u, () => [])
    function p(e) {
      let t,
        n,
        a,
        d,
        c,
        p,
        f = (0, r.c)(13),
        { title: v, nativeTitle: y } = e,
        b = void 0 === y ? v : y,
        x = (0, o.gh)(s.u),
        [w] = (0, l.useState)(m)
      return (
        f[0] !== b || f[1] !== w || f[2] !== x || f[3] !== v
          ? ((t = () => {
              if (i.appServices?.windowTitle == null) return
              let e = { owner: w, title: null == v ? void 0 : (b ?? null) }
              ;(x.set(u, (t) => (t.some((e) => e.owner === w) ? t.map((t) => (t.owner === w ? e : t)) : [...t, e])),
                h(x))
            }),
            (n = [x, w, v, b]),
            (f[0] = b),
            (f[1] = w),
            (f[2] = x),
            (f[3] = v),
            (f[4] = t),
            (f[5] = n))
          : ((t = f[4]), (n = f[5])),
        (0, l.useEffect)(t, n),
        f[6] !== w || f[7] !== x
          ? ((a = () => () => {
              i.appServices?.windowTitle != null && (x.set(u, (e) => e.filter((e) => e.owner !== w)), h(x))
            }),
            (d = [x, w]),
            (f[6] = w),
            (f[7] = x),
            (f[8] = a),
            (f[9] = d))
          : ((a = f[8]), (d = f[9])),
        (0, l.useEffect)(a, d),
        f[10] !== v
          ? ((c = () => {
              if (null == v) return
              let e = document.title
              g(v)
              let t = document.title
              return () => {
                document.title === t && g(e)
              }
            }),
            (p = [v]),
            (f[10] = v),
            (f[11] = c),
            (f[12] = p))
          : ((c = f[11]), (p = f[12])),
        (0, l.useEffect)(c, p),
        null
      )
    }
    function m() {
      return Symbol()
    }
    function g(e) {
      let t = document.head.querySelector("title")?.firstChild
      t instanceof Text && null == t.nextSibling ? (t.data = e) : (document.title = e)
    }
    function h(e) {
      i.appServices.windowTitle?.setTitle(e.get(u).findLast((e) => void 0 !== e.title)?.title ?? null)
    }
    n.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            n = (0, r.c)(2),
            { title: l } = e,
            i = (0, o.gh)(d.GD),
            s = (0, o._U)(c.m, `${i.value.pathname}${i.value.search ?? ""}`),
            u = l ?? s
          return (n[0] !== u ? ((t = (0, a.jsx)(p, { title: u })), (n[0] = u), (n[1] = t)) : (t = n[1]), t)
        },
        Q: p,
      },
    )
  },
  OTo8(e, t, n) {
    var a = n("QosV"),
      r = n("zTeN"),
      o = n("NdHc")
    n.d(
      t,
      {},
      {
        v: function (e, t, n, l) {
          let i,
            s,
            d = (0, a.c)(8),
            c = l?.enabled ?? !0
          d[0] !== e || d[1] !== t
            ? ((i = null == e ? null : { cwd: e, hostConfig: t }), (d[0] = e), (d[1] = t), (d[2] = i))
            : (i = d[2])
          let u = l?.retainRepoWatch
          return (
            d[3] !== n || d[4] !== c || d[5] !== i || d[6] !== u
              ? ((s = { enabled: c, operationSource: n, lookup: i, retainRepoWatch: u }),
                (d[3] = n),
                (d[4] = c),
                (d[5] = i),
                (d[6] = u),
                (d[7] = s))
              : (s = d[7]),
            (0, r._U)(o.Ko, s)
          )
        },
      },
    )
  },
  wSXO(e, t, n) {
    var a = n("zTeN"),
      r = n("svjy"),
      o = n("q3j5"),
      l = n("imTH"),
      i = n("jiwy"),
      s = n("OWtl"),
      d = n("amW0")
    let c = (0, a.un)(s.u, ({ get: e }) =>
        e(i.VK)
          ? e(l.Tr)?.flatMap((t) => {
              let n = t.active_root_thread_id
              if (null == n || "active" !== t.status) return []
              let a = (0, o.x)(t.display_name)
              return [
                {
                  orbitId: t.id,
                  isPrimary: !0 === t.is_primary,
                  threadId: n,
                  isDefault: a,
                  name: a ? e(r.g).formatMessage(d.z) : t.display_name,
                },
              ]
            })
          : [],
      ),
      u = (0, a.un)(s.u, ({ get: e }) => e(c)?.find((e) => e.isPrimary))
    n.d(t, {}, { D: u, t: c })
  },
  opxc(e, t, n) {
    n.d(t, { C: () => I })
    var a = n("SZCv"),
      r = n.n(a),
      o = n("SPnB"),
      l = n("v9CB"),
      i = n("Yp9l"),
      s = n("XE7W"),
      d = n("uQmz"),
      c = n("CguJ"),
      u = n("x74N"),
      p = n("ASxG"),
      m = n("YAwS")
    let g = p.object({
        uploadId: p.string(),
        contentSha256: p.string(),
        name: p.string(),
        mime: p.string(),
        size: p.number(),
        fileId: p.string().nullable(),
        expiresAt: p.string().nullable(),
        ready: p.boolean(),
        ownerId: p.string(),
        createdAt: p.number(),
      }),
      h = p.object({
        roomId: p.string(),
        requestId: p.string(),
        text: p.string(),
        attachmentIds: p.array(p.string()).optional(),
        replyToMessageId: p.string().optional(),
        messageMetadata: p.record(p.string(), p.unknown()).optional(),
        pageContext: p.object({ page_id: p.string().nullable() }).optional(),
      }),
      f = p.object({
        request: h,
        createdAt: p.string(),
        comments: p.array(p.object({ id: p.string(), digest: p.string() })),
        submitted: p.boolean(),
        queued: p.boolean(),
        uploadIds: p.array(p.string()),
        ownerId: p.string(),
        sourceId: p.string().optional(),
        sourceSha256: p.string().optional(),
      }),
      v = p.object({ uploads: p.array(g), sends: p.array(f) }),
      y = p.record(p.string(), p.object({ roomId: p.string(), bytes: p.number() })),
      b = p
        .object({
          version: p.literal(2),
          files: y,
          rooms: p.record(p.string(), p.object({ count: p.number(), bytes: p.number() })),
        })
        .default(() => ({ version: 2, files: {}, rooms: {} }))
    class x extends Error {}
    class w extends Error {}
    function I({ scope: e, media: t, signal: n, roomId: a, accountId: r, userId: g, intl: h }) {
      let f = (function (e, t, n, a) {
          let r = `orbit-annotation-uploads-v1:${JSON.stringify([e, t])}`,
            o = `${r}:room:${n}`,
            l = `${r}:quota`,
            i = (e) => `${r}:file:${e}`,
            s = (e) => (null == e ? { uploads: [], sends: [] } : v.parse(e))
          function d(e, t, a) {
            if (Object.keys(e).length >= 128 || Object.values(e).reduce((e, t) => e + t.bytes, a) > 0xa000000)
              throw new w("Annotation upload storage is full")
            e[t] = { roomId: n, bytes: a }
          }
          let c = (e) =>
              (0, m.accessBrowserHostRecordDurably)(i(e), (e) => ({
                result: p
                  .custom((e) => ArrayBuffer.isView(e))
                  .transform((e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
                  .parse(e),
              })),
            u = async () => {
              let e = [
                ...new Set(
                  Object.values(
                    (await (0, m.accessBrowserHostRecordDurably)(l, (e) => ({ result: b.parse(e) }))).files,
                  ).map((e) => `${r}:room:${e.roomId}`),
                ),
              ]
              await (0, m.Cf)([l, ...e], (t) => {
                let n = b.parse(t.get(l)),
                  a = new Map(),
                  r = []
                for (let o of e) {
                  let e = s(t.get(o)),
                    l = new Set(e.sends.flatMap((e) => e.uploadIds)),
                    d = e.uploads.filter(
                      (e) =>
                        !!(e.createdAt > Date.now() - 864e5 || l.has(e.uploadId)) ||
                        (delete n.files[e.uploadId], r.push(i(e.uploadId)), !1),
                    )
                  d.length !== e.uploads.length && a.set(o, { ...e, uploads: d })
                }
                return (a.set(l, n), { updates: a, deletes: r, result: void 0 })
              })
            }
          return {
            read: async () => {
              let e = await (0, m.accessBrowserHostRecordDurably)(o, (e) => ({ result: s(e) }))
              return (a?.(e.sends), e)
            },
            update: async (e, t) => {
              let r,
                c = () =>
                  (0, m.Cf)([o, l], (a) => {
                    var r
                    let c = s(a.get(o)),
                      u = new Set(c.sends.map((e) => e.request.requestId)),
                      p = e(c),
                      m = b.parse(a.get(l))
                    if (
                      (p.sends.length > 0
                        ? (m.rooms[n] = {
                            count: (r = p.sends).length,
                            bytes: new TextEncoder().encode(JSON.stringify(r)).byteLength,
                          })
                        : delete m.rooms[n],
                      p.sends.some((e) => !u.has(e.request.requestId)) &&
                        (Object.values(m.rooms).reduce((e, t) => e + t.count, 0) > 64 ||
                          Object.values(m.rooms).reduce((e, t) => e + t.bytes, 0) > 8388608 ||
                          new TextEncoder().encode(JSON.stringify(p)).byteLength > 8388608))
                    )
                      throw new x("Annotation upload journal is full")
                    let g = new Map(),
                      h = new Set([
                        ...p.uploads.map((e) => e.uploadId),
                        ...p.sends.flatMap((e) => (null == e.sourceId ? [] : [e.sourceId])),
                      ]),
                      f = [
                        ...c.uploads.map((e) => e.uploadId),
                        ...c.sends.flatMap((e) => (null == e.sourceId ? [] : [e.sourceId])),
                      ].filter((e) => !h.has(e))
                    for (let e of f) delete m.files[e]
                    return (
                      null != t &&
                        h.has(t.id) &&
                        null == m.files[t.id] &&
                        (d(m.files, t.id, t.bytes.byteLength), g.set(i(t.id), t.bytes)),
                      g.set(o, p),
                      g.set(l, m),
                      { updates: g, deletes: f.map(i), result: p }
                    )
                  })
              try {
                r = await c()
              } catch (e) {
                if (!(e instanceof w)) throw e
                ;(await u(), (r = await c()))
              }
              return (a?.(r.sends), r)
            },
            source: c,
            async add(e, t, n) {
              let a = crypto.randomUUID(),
                r = new Uint8Array(await e.arrayBuffer()),
                c = () =>
                  (0, m.Cf)([o, l], (c) => {
                    let u = s(c.get(o)),
                      p = b.parse(c.get(l))
                    d(p.files, a, r.byteLength)
                    let m = {
                      uploadId: a,
                      contentSha256: t,
                      name: e.name,
                      mime: e.type,
                      size: e.size,
                      fileId: null,
                      expiresAt: null,
                      ready: !1,
                      ownerId: n,
                      createdAt: Date.now(),
                    }
                    return {
                      updates: new Map([
                        [o, { ...u, uploads: [...u.uploads, m] }],
                        [l, p],
                        [i(a), r],
                      ]),
                      result: m,
                    }
                  })
              try {
                return await c()
              } catch (e) {
                if (!(e instanceof w)) throw e
                return (await u(), c())
              }
            },
            file: async (e) => new File([(await c(e.uploadId)).slice()], e.name, { type: e.mime }),
          }
        })(r, g, a, (t) => (0, c.Q)(e, r, g, a, t)),
        y = crypto.randomUUID(),
        k = new Map(),
        S = new Map(),
        C = new Set(),
        A = new Set(),
        j = new Map(),
        M = new Map()
      function P() {
        if (
          (n.throwIfAborted(),
          e.get(o.chatGptAuthenticatedAccountId$) !== r || e.get(o.chatGptAuthenticatedUserId$) !== g)
        )
          throw (0, s.t)(e)
      }
      function T(e) {
        return e
          ? new l.oy(
              h.formatMessage({
                id: "orbit.browserAnnotations.uploadPending",
                defaultMessage: "Couldn't finish uploading these annotations. Your message is saved; try sending again",
                description:
                  "An annotation upload or durable local write failed; the saved message and file identities remain available for retry",
              }),
              void 0,
              { retryWithSameRequest: e, deliveryUnknown: !1 },
            )
          : new l.oy(
              h.formatMessage({
                id: "orbit.browserAnnotations.prepareUnavailable",
                defaultMessage: "Couldn't prepare these annotations. Your comments are still available; try again",
                description:
                  "An annotation reservation or durable storage write failed before queueing; the original composer content is retained",
              }),
            )
      }
      async function E(e) {
        P()
        let r = k.get(e)
        return (
          null == r &&
            ((r = (async () => {
              let r = await (async function (e) {
                let t = (await f.read()).uploads.find((t) => t.uploadId === e)
                if (null == t) throw new DOMException("Annotation upload is no longer retained", "AbortError")
                return t
              })(e)
              if (null != r.fileId) return r
              let o = await t.reserveUpload(
                a,
                {
                  upload_id: e,
                  name: r.name,
                  mime_type: r.mime || "application/octet-stream",
                  content_sha256: r.contentSha256,
                },
                n,
              )
              ;(C.add(e), P())
              let l = (
                await f.update((t) => ({
                  ...t,
                  uploads: t.uploads.map((t) =>
                    t.uploadId === e ? { ...t, fileId: o.id, expiresAt: o.expires_at, ready: "ready" === o.status } : t,
                  ),
                }))
              ).uploads.find((t) => t.uploadId === e)
              if (null == l) throw new DOMException("Annotation upload is no longer retained", "AbortError")
              return l
            })()),
            k.set(e, r),
            r.finally(() => k.delete(e)).catch(() => {})),
          r
        )
      }
      async function N(e) {
        P()
        let r = S.get(e)
        return (
          null == r &&
            ((r = (async () => {
              let r = await E(e)
              if (!C.has(e) || A.has(e) || (!r.ready && null != r.expiresAt && Date.parse(r.expiresAt) <= Date.now())) {
                let o = await t.getUpload(a, e, n).catch((e) => {
                  if (r.ready || !(e instanceof l.Kr) || 404 !== e.status || e.deliveryUnknown) throw e
                })
                if (
                  ((null == o || "expired" === o.status) &&
                    (o = await t.reserveUpload(
                      a,
                      {
                        upload_id: e,
                        name: r.name,
                        mime_type: r.mime || "application/octet-stream",
                        content_sha256: r.contentSha256,
                      },
                      n,
                    )),
                  o.id !== r.fileId || "expired" === o.status)
                )
                  throw T(!0)
                ;((r =
                  (
                    await f.update((t) => ({
                      ...t,
                      uploads: t.uploads.map((t) =>
                        t.uploadId === e ? { ...t, ready: "ready" === o.status, expiresAt: o.expires_at } : t,
                      ),
                    }))
                  ).uploads.find((t) => t.uploadId === e) ?? r),
                  C.add(e))
              }
              if (r.ready) return void A.delete(e)
              A.add(e)
              let o = new AbortController()
              j.set(e, o)
              let i = AbortSignal.any([n, o.signal]),
                s = await f.file(r)
              if ((await t.completeUpload(a, e, s, { signal: i, onProgress: () => {} })).fileId !== r.fileId)
                throw T(!0)
              ;(P(),
                await f.update((t) => ({
                  ...t,
                  uploads: t.uploads.map((t) => (t.uploadId === e ? { ...t, ready: !0 } : t)),
                })),
                A.delete(e))
            })()),
            S.set(e, r),
            r
              .finally(() => {
                ;(S.delete(e), j.delete(e))
              })
              .catch(() => {})),
          r
        )
      }
      function U(e) {
        for (let t of e) {
          j.get(t)?.abort()
          let e = M.get(t)
          ;(null != e && (URL.revokeObjectURL(e), M.delete(t)), A.delete(t), C.delete(t))
        }
      }
      return (
        n.addEventListener(
          "abort",
          () => {
            for (let e of M.values()) URL.revokeObjectURL(e)
            M.clear()
          },
          { once: !0 },
        ),
        {
          prepare: async function (e, t) {
            P()
            let a = crypto.randomUUID()
            return (0, u.k)({
              comments: e,
              ordinaryAttachmentIds: t,
              intl: h,
              signal: n,
              reserve: async (e) => {
                let t
                ;(P(), n.throwIfAborted())
                let r = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", await e.arrayBuffer())), (e) =>
                  e.toString(16).padStart(2, "0"),
                ).join("")
                try {
                  t = await f.add(e, r, a)
                } catch {
                  throw T(!1)
                }
                let o = await E(t.uploadId)
                ;(n.throwIfAborted(), N(t.uploadId).catch(() => {}))
                let l = (0, i.tm)({
                  type: "file",
                  file_id: o.fileId,
                  name: e.name,
                  mime_type: e.type,
                  status: o.ready ? "ready" : "uploading",
                  isLoading: !o.ready,
                  size_bytes: e.size,
                })
                if (null == l) throw T(!1)
                return l
              },
            })
          },
          async retainRequest(e, t) {
            if ((P(), e.roomId !== a)) throw T(!1)
            let n = (0, d.Yi)(e.messageMetadata)
            if (0 === n.length) return
            let r = new Set([...n.map(({ data: e }) => e.context_file_id), ...(0, d.Yd)(e.messageMetadata)]),
              o = null == t.source ? void 0 : { id: crypto.randomUUID(), bytes: t.source.bytes },
              i = []
            try {
              await f.update((n) => {
                i = []
                let a = n.sends.find((t) => t.request.requestId === e.requestId)
                if (null != a) {
                  if (!_(a.request, e)) throw T(!1)
                  return {
                    ...n,
                    sends: n.sends.map((e) =>
                      e === a
                        ? {
                            ...e,
                            queued: !0,
                            sourceId: e.sourceId ?? o?.id,
                            sourceSha256: null == e.sourceId ? t.source?.sha256 : e.sourceSha256,
                          }
                        : e,
                    ),
                  }
                }
                let l = n.uploads.filter((e) => null != e.fileId && r.has(e.fileId)),
                  s = l[0]?.ownerId
                if (
                  l.length !== r.size ||
                  null == s ||
                  l.some((e) => e.ownerId !== s || n.sends.some((t) => t.uploadIds.includes(e.uploadId)))
                )
                  throw T(!1)
                let d = {
                    request: structuredClone(e),
                    createdAt: t.createdAt,
                    comments: t.comments.map((e) => ({ ...e })),
                    uploadIds: l.map((e) => e.uploadId),
                    submitted: !1,
                    queued: !0,
                    ownerId: y,
                    sourceId: o?.id,
                    sourceSha256: t.source?.sha256,
                  },
                  c = n.sends.filter((e) => null != o && e.ownerId === y && !e.queued && !e.submitted),
                  u = [...n.sends.filter((e) => !c.includes(e)), d]
                return (
                  (i = c.flatMap((e) => e.uploadIds)),
                  { ...n, sends: u, uploads: n.uploads.filter((e) => !i.includes(e.uploadId)) }
                )
              }, o)
            } catch (e) {
              if (e instanceof x)
                throw new l.oy(
                  h.formatMessage({
                    id: "orbit.browserAnnotations.pendingSendLimit",
                    defaultMessage: "Finish retrying pending annotation messages before sending another",
                    description:
                      "Error when retained unconfirmed annotation messages fill local storage; existing messages can still be retried and no saved request is removed",
                  }),
                  429,
                )
              throw T(!1)
            }
            U(i)
          },
          async waitForRequest(e) {
            if ((P(), 0 !== (0, d.Yi)(e.messageMetadata).length))
              try {
                let t = (await f.read()).sends.find((t) => t.request.requestId === e.requestId)
                if (null == t || e.roomId !== a || !_(t.request, e)) throw T(!0)
                ;(await Promise.all(t.uploadIds.map(N)), P())
              } catch {
                throw T(!0)
              }
          },
          async markSubmitted(e) {
            if ((P(), 0 !== (0, d.Yi)(e.messageMetadata).length))
              try {
                await f.update((t) => {
                  if (!t.sends.some((t) => _(t.request, e))) throw T(!0)
                  return { ...t, sends: t.sends.map((t) => (_(t.request, e) ? { ...t, submitted: !0 } : t)) }
                })
              } catch {
                throw T(!0)
              }
          },
          async rejectRequest(e) {
            if (0 !== (0, d.Yi)(e.messageMetadata).length) {
              if (e.roomId !== a) throw T(!0)
              try {
                await f.update((t) => ({
                  ...t,
                  sends: t.sends.map((t) => (_(t.request, e) ? { ...t, submitted: !1, queued: !1 } : t)),
                }))
              } catch {
                throw T(!0)
              }
            }
          },
          async completeRequest(e) {
            if ((P(), 0 === (0, d.Yi)(e.messageMetadata).length)) return
            if (e.roomId !== a) throw T(!0)
            let t = []
            ;(await f.update((n) => {
              let a = n.sends.find((t) => _(t.request, e)),
                r = n.sends.filter((e) => e !== a)
              return (
                (t = a?.uploadIds ?? []),
                { ...n, sends: r, uploads: n.uploads.filter((e) => !t.includes(e.uploadId)) }
              )
            }),
              U(t))
          },
          async restore(e = !1) {
            P()
            let t = await f.read()
            if ((P(), !e)) return t.sends
            let n = await Promise.all(
              t.sends.map(async (e) => ({
                ...e,
                sourceBytes: null == e.sourceId ? void 0 : await f.source(e.sourceId).catch(() => void 0),
                attachments: (
                  await Promise.all(
                    t.uploads
                      .filter(
                        (t) => e.uploadIds.includes(t.uploadId) && e.request.attachmentIds?.includes(t.fileId ?? ""),
                      )
                      .map(async (e) => {
                        let t = (0, i.tm)({
                          type: "file",
                          file_id: e.fileId,
                          name: e.name,
                          mime_type: e.mime,
                          status: e.ready ? "ready" : "uploading",
                        })
                        if (null == t) return null
                        let n = M.get(e.uploadId)
                        if (null == n)
                          try {
                            let t = await f.file(e)
                            ;(P(), (n = URL.createObjectURL(t)), M.set(e.uploadId, n))
                          } catch {}
                        return (P(), { ...t, imageDataUrl: n ?? "", isLoading: !e.ready })
                      }),
                  )
                ).filter((e) => null != e),
              })),
            )
            return (P(), n)
          },
        }
      )
    }
    function _(e, t) {
      return r()(
        [e.roomId, e.requestId, e.text, e.attachmentIds, e.replyToMessageId, e.pageContext, e.messageMetadata],
        [t.roomId, t.requestId, t.text, t.attachmentIds, t.replyToMessageId, t.pageContext, t.messageMetadata],
      )
    }
  },
  LZ1k(e, t, n) {
    var a = n("kavB"),
      r = n("nmDX")
    n.d(
      t,
      {},
      {
        X: function (e) {
          return {
            origin: "artifact_annotation",
            path: `artifact:${e.file_name}`,
            side: null,
            lineRange: null,
            body: e.comment,
            artifactRef: e.artifact_ref ?? void 0,
            artifactAnnotationFilePath: e.file_path ?? void 0,
            artifactAnnotationLocationLabel: e.target_label,
            artifactAnnotationContentPreview:
              null == e.selected_text ? void 0 : { type: "text", text: e.selected_text },
          }
        },
        i: function (e, t, n) {
          let o = e.localArtifactAnnotationContext,
            l = e.localPdfContext ?? o
          if (null == l) throw Error("File annotation is missing its context")
          let i = null == l.path ? void 0 : l.sourceFileId,
            s = (0, r.h_)(e),
            d = s.pdfAnnotationContentPreview ?? s.artifactAnnotationContentPreview,
            c = s.artifactAnnotationTarget,
            u = null != c && "slideLabel" in c ? c.slideLabel : (0, a.tT)(s, n)
          return {
            comment: s.body,
            screenshot_file_id: t ?? null,
            file_id: i ?? null,
            file_path: null != i || null == l.path ? null : (l.sourcePath ?? l.path),
            artifact_ref: null == i ? (o?.artifactRef ?? null) : null,
            file_name: l.title,
            target_label: u ?? ("label" in l ? l.label : l.title),
            selected_text: d?.type === "text" ? d.text : null,
          }
        },
      },
    )
  },
  uzqr(e, t, n) {
    n.d(
      t,
      {},
      {
        h: async function (e) {
          let t = JSON.stringify(
            e.map((e) => ({ ...e, position: { ...e.position, line: 0 } })),
            (e, t) =>
              null == t || "object" != typeof t || Array.isArray(t)
                ? t
                : Object.fromEntries(
                    Object.keys(t)
                      .sort()
                      .map((e) => [e, t[e]]),
                  ),
          )
          return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t))), (e) =>
            e.toString(16).padStart(2, "0"),
          ).join("")
        },
      },
    )
  },
  x74N(e, t, n) {
    var a = n("Bl5Q"),
      r = n("uOFa"),
      o = n("HfjH"),
      l = n("yJfM"),
      i = n("v9CB"),
      s = n("a4qT"),
      d = n("LulU"),
      c = n("J5Kp"),
      u = n("LZ1k"),
      p = n("uQmz")
    n.d(
      t,
      {},
      {
        k: async function ({
          comments: e,
          reserve: t,
          ordinaryAttachmentIds: n,
          intl: m,
          signal: g = new AbortController().signal,
        }) {
          let h = e.filter(r.X8),
            f = e.filter(p.nW),
            v = [...h, ...f]
          if (0 === v.length) return
          if (v.some((e) => (e.localBrowserAttachedImages?.length ?? 0) > 0))
            throw new i.oy(
              m.formatMessage({
                id: "orbit.browserAnnotations.extraImagesUnsupported",
                defaultMessage:
                  "Additional images aren't supported in browser annotations. Remove the extra images and try again",
                description:
                  "Error when a saved browser annotation contains extra attached images that this flow cannot send; the annotation's own screenshot is optional",
              }),
            )
          let y = (0, l.Zp)({
              prompt: "",
              addedFiles: [],
              fileAttachments: [],
              imageAttachments: [],
              ideContext: null,
              commentAttachments: v.map((e) => {
                if (e.localPdfContext?.sourcePath != null)
                  return { ...e, localPdfContext: { ...e.localPdfContext, path: e.localPdfContext.sourcePath } }
                let t = e.localArtifactAnnotationContext
                return t?.path != null && null != t.sourcePath
                  ? { ...e, localArtifactAnnotationContext: { ...t, path: t.sourcePath } }
                  : e
              }),
            }),
            b = v.flatMap((e, t) => (0, o.Bn)([e], !0).map((e) => ({ input: e, index: t }))),
            x = b.flatMap(({ input: e, index: t }) =>
              "image" === e.type && "url" in e
                ? [{ input: e, index: t, file: (0, d.bX)(e.url, "annotation.png").file }]
                : [],
            ),
            w = f.flatMap((e) => {
              let t = e.localPdfContext ?? e.localArtifactAnnotationContext,
                n = t?.path == null ? void 0 : t.sourceFileId
              return null == n ? [] : [n]
            })
          if (new Set([...n, ...w]).size + x.length > 9)
            throw new i.oy(
              m.formatMessage({
                id: "orbit.browserAnnotations.tooManyAttachments",
                defaultMessage:
                  "This message has too many attachments. Remove an attachment or annotation and try again",
                description:
                  "Error when the combined message attachments, annotation screenshots, and annotation context exceed the supported file count; all drafts are retained",
              }),
            )
          if (
            b.some(({ input: e }) => "text" !== e.type && "image" !== e.type) ||
            new TextEncoder().encode(y).byteLength > 262144
          )
            throw new i.oy(
              m.formatMessage({
                id: "orbit.browserAnnotations.tooLarge",
                defaultMessage:
                  "These annotations are too large to send together. Send fewer annotations or attachments",
                description:
                  "Error shown when browser annotation context or its screenshots exceed a message size limit; the unsent annotations are preserved",
              }),
            )
          let I = await (0, a.Ay)(
              x,
              async ({ input: e, index: n, file: a }) => {
                g.throwIfAborted()
                let r = await (async function (e, t) {
                  if ("image/png" !== e.type) return e
                  try {
                    let n = await createImageBitmap(e)
                    try {
                      t.throwIfAborted()
                      let a = await (0, s.U)(n)
                      if (a?.type === "image/jpeg" && a.size < e.size)
                        return new File([a], "annotation.jpg", { type: "image/jpeg", lastModified: e.lastModified })
                    } finally {
                      n.close()
                    }
                  } catch {
                    t.throwIfAborted()
                  }
                  return e
                })(a, g)
                return (g.throwIfAborted(), { input: e, index: n, attachment: await t(r) })
              },
              { concurrency: 3 },
            ),
            _ = new File(
              [
                JSON.stringify({
                  version: 1,
                  content: [
                    { type: "text", text: y },
                    ...b.flatMap(({ input: e, index: t }) => {
                      if ("text" === e.type)
                        return [
                          {
                            type: "text",
                            text: `Image for submitted Comment ${t + 1} (original page marker ${v[t].position.line}).
${e.text}`,
                          },
                        ]
                      let n = I.find((t) => t.input === e)
                      return null == n ? [] : [{ type: "image", file_id: n.attachment.fileId }]
                    }),
                  ],
                }),
              ],
              f.length > 0 ? "annotations.txt" : "browser-annotations.txt",
              { type: "text/plain" },
            )
          if (_.size > 262144)
            throw new i.oy(
              m.formatMessage({
                id: "orbit.browserAnnotations.contextTooLarge",
                defaultMessage: "This annotation context is too large to send. Send fewer annotations",
                description:
                  "Error when the serialized browser annotation context exceeds the supported size; the user's annotations remain available to retry",
              }),
            )
          g.throwIfAborted()
          let k = (await t(_)).fileId,
            S = {}
          if (
            (h.length > 0 &&
              (S.browser_annotations = {
                version: 1,
                context_file_id: k,
                annotations: h.map((e, t) => (0, c.ad)(e, I.find((e) => e.index === t)?.attachment.fileId)),
              }),
            f.length > 0 &&
              (S.file_annotations = {
                version: 1,
                context_file_id: k,
                annotations: f.map((e, t) =>
                  (0, u.i)(e, I.find((e) => e.index === h.length + t)?.attachment.fileId, m),
                ),
              }),
            new TextEncoder().encode(JSON.stringify(S)).byteLength > 16384)
          )
            throw new i.oy(
              m.formatMessage({
                id: "orbit.browserAnnotations.summaryTooLarge",
                defaultMessage: "These annotation comments are too long to send together. Send fewer annotations",
                description:
                  "Error when visible annotation metadata exceeds the message limit; comments are retained for retry",
              }),
            )
          return {
            messageMetadata: S,
            attachments: I.map(({ attachment: e, input: t, index: n }) => {
              let a = (0, o.W6)(v[n])
              return { ...e, imageDataUrl: t.url, width: a?.width ?? null, height: a?.height ?? null }
            }),
          }
        },
      },
    )
  },
  BApD(e, t, n) {
    var a = n("SRbQ"),
      r = n("pkoC"),
      o = n.n(r),
      l = n("zkY4"),
      i = n("Bl5Q"),
      s = n("DBCl"),
      d = n("PkQL"),
      c = n("uOFa"),
      u = n("RAsy"),
      p = n("LnAF"),
      m = n("Isak"),
      g = n("wTVm"),
      h = n("fAj4"),
      f = n("SPnB"),
      v = n("vldH"),
      y = n("Ghh3"),
      b = n("mt4D"),
      x = n("xKli"),
      w = n("Ld2s"),
      I = n("svjy"),
      _ = n("GaA7"),
      k = n("OMIV"),
      S = n("LulU"),
      C = n("yI91"),
      A = n("Nwp9"),
      j = n("KSXx"),
      M = n("MtDh"),
      P = n("TYK1"),
      T = n("jiwy"),
      E = n("opxc"),
      N = n("uQmz"),
      U = n("uzqr"),
      q = n("MZvE"),
      D = n("XE7W"),
      z = n("aqtt"),
      L = n("v9CB")
    let O = (0, A.m3)("cloud-orbit-composer-sends-v1", {})
    async function R(e, t, n) {
      let r = { stack: [], error: void 0, hasError: !1 }
      try {
        let o = (0, a.mS)(
          r,
          await _.appServices.workspaceFiles.read({ hostId: e, path: t, representation: "blob" }),
          !1,
        )
        if (!("blob" in o)) throw Error("Attachment contents were not returned as a blob")
        return new File([(0, C.K)(o.blob)], n, { type: (0, l.lookup)(n) || "application/octet-stream" })
      } catch (e) {
        ;((r.error = e), (r.hasError = !0))
      } finally {
        ;(0, a.hk)(r)
      }
    }
    n.d(
      t,
      {},
      {
        d: async function ({
          scope: e,
          conversationId: t,
          hostId: n,
          context: a,
          replyToMessageId: r,
          requestId: l,
          pageComment: _,
          entryPoint: A = "conversation",
          beforeSend: $,
          conversations: B,
          onOptimisticMessage: F,
        }) {
          let V,
            W,
            H = e.get(f.chatGptAuthenticatedAccountId$),
            G = e.get(f.chatGptAuthenticatedUserId$),
            K = e.get(f.kf),
            Q = "loaded" === K.status && "personal" === K.structure ? G : e.get(f.Kw)
          if ("loaded" !== K.status || null == H || null == G || null == Q) throw (0, D.t)(e)
          let X = () => {
              if (e.get(f.chatGptAuthenticatedAccountId$) !== H || e.get(f.chatGptAuthenticatedUserId$) !== G)
                throw new DOMException("Messaging account changed", "AbortError")
            },
            Z = new AbortController(),
            Y = (0, D.createNativeMessagingApi)({
              scope: e,
              accountId: H,
              userId: G,
              accountUserId: Q,
              conversationId: t,
              entryPoint: A,
              beforeSend: $,
              signal: Z.signal,
              waitForUploads: async (e) => {
                await V?.waitForRequest(e)
              },
              markSubmitted: async (e) => {
                await V?.markSubmitted(e)
              },
              rejectRequest: async (e) => {
                await V?.rejectRequest(e)
              },
              completeRequest: (e) => (W = V?.completeRequest(e)) ?? Promise.resolve(),
            }),
            J = (t) => (
              null == V &&
                (V = (0, E.C)({
                  scope: e,
                  media: Y.media,
                  signal: Z.signal,
                  roomId: t,
                  accountId: H,
                  userId: G,
                  intl: e.get(I.g),
                })),
              V
            )
          try {
            let f = JSON.stringify([H, G, t]),
              A = (0, m.A)(
                JSON.stringify({
                  ...a,
                  replyToMessageId: r,
                  requestId: l,
                  pageComment: _,
                  ideContext: void 0,
                  inAppBrowserContext: void 0,
                }),
                m.A.URL,
              ),
              E = e.get(O)[f]
            if (E?.draftId !== A) {
              let m = await (0, w.t)(e, a, async (a) => {
                if (((0, T.qo)(e), (0, x.Fc)(a).responseItems.length > 0)) throw new L.oy(s.mHE)
                let m = e.query.snapshot(P.cloudAeonByThreadId$, t),
                  f = await m.getOrFetch()
                if (null == f) throw (0, D.t)(e)
                let w = f.messaging_room_id
                if ("shared" === f.scope) (X(), (w = await e.query.getOrFetch(q.K, f.id)), X())
                else if (null == w) {
                  let e = await y.Request.safePost("/tbo/{tbo_id}/messaging-room", {
                    additionalHeaders: { [s.zBc]: H },
                    parameters: { path: { tbo_id: f.id } },
                  })
                  ;((w = e.messaging_room_id), await m.cancel(), m.setData(e))
                }
                if (null == w) throw (0, D.t)(e)
                let I = e.get(k.JW, "451195040"),
                  [A, j] = o()(a.commentAttachments, (e) => (0, c.X8)(e) || (I && (0, N.j0)(e))),
                  M = 0 === A.length ? a : { ...a, commentAttachments: j },
                  { attachments: E, appshotContexts: O } = await (async function (e, t, n, a, r) {
                    let o = new AbortController().signal,
                      l = [...(e.uploadedFileAttachments ?? []), ...(e.pastedTextAttachments ?? [])].flatMap(
                        ({ upload: e }) => e ?? [],
                      )
                    if (l.some((e) => null != e.accountId && e.accountId !== n))
                      throw new DOMException("Attachment account changed", "AbortError")
                    let c = (e.pastedTextAttachments ?? []).flatMap((e) =>
                        null == e.file ? [] : [{ file: e.file, hostId: e.hostId ?? t }],
                      ),
                      m = [
                        ...(0, u.Y)(e.fileAttachments)
                          .filter((e) => !(0, s.skP)(e) && !c.some((t) => t.file.fsPath === e.fsPath))
                          .map((e) => async () => {
                            let n = (0, b._Z)(e)
                            return null == n
                              ? R(t, e.fsPath, e.label)
                              : new File([(0, C.K)(n.contentsBase64)], e.label, {
                                  type: n.mimeType ?? "application/octet-stream",
                                })
                          }),
                        ...c.map((e) => () => R(e.hostId, e.file.fsPath, e.file.label)),
                        ...l.map((e) => async () => {
                          let t = await (0, v.fetchChatGptFileBlob)({
                            conversationId: null,
                            target: { type: "file-id", fileId: e.fileId },
                            signal: o,
                          })
                          return new File([t], e.fileName, { type: t.type })
                        }),
                      ],
                      g = (e.appshotContexts ?? []).filter((e) => null != e.imageDataUrl || null != e.imagePath),
                      h =
                        e.imageAttachments.length +
                        (e.mcpAppModelContextAttachments ?? []).reduce((e, t) => e + (0, d.U1)(t).length, 0),
                      f = (0, p.v)(e, !0).flatMap((t, n) => {
                        let a = g[n - h],
                          r = a?.imageName ?? e.imageAttachments[n]?.filename ?? "image.png"
                        return "image" === t.type && "url" in t
                          ? [{ appshot: a, read: async () => (0, S.bX)(t.url, r).file }]
                          : "localImage" === t.type
                            ? [{ appshot: a, read: () => R("local", t.path, r) }]
                            : []
                      }),
                      y = await (0, i.Ay)(
                        [...m.map((e) => ({ read: e, appshot: void 0 })), ...f],
                        async ({ read: e, appshot: t }) => {
                          let n = await e(),
                            l = await r.upload(a, n, { signal: o, onProgress: () => {} })
                          return {
                            attachment: (0, z.UZ)({
                              id: l.fileId,
                              roomId: a,
                              name: n.name,
                              mimeType: n.type,
                              sizeBytes: n.size,
                              previewUrl: "",
                              status: "complete",
                              fileId: l.fileId,
                            }),
                            appshot: t,
                          }
                        },
                        { concurrency: 3 },
                      )
                    return {
                      attachments: y.map(({ attachment: e }) => e),
                      appshotContexts: (e.appshotContexts ?? []).map((e) => {
                        let t = y.find((t) => t.appshot === e)
                        return null == t ? e : { ...e, imageName: t.attachment.fileId, imagePath: null }
                      }),
                    }
                  })(M, n, H, w, Y.media),
                  $ =
                    A.length > 0
                      ? await J(w).prepare(
                          A,
                          E.map((e) => e.fileId),
                        )
                      : void 0
                for (let t of O) (0, h.D)(e, t.bundleIdentifier, t.imageName, t.appIconDataUrl)
                let B = {
                  roomId: w,
                  text: (0, x.kv)({ ...M, appshotContexts: O }),
                  requestId: l ?? (0, g.A)(),
                  pageComment: _,
                  replyToMessageId: r,
                  attachmentIds: [...E.map((e) => e.fileId), ...($?.attachments.map((e) => e.fileId) ?? [])],
                  messageMetadata: $?.messageMetadata,
                }
                if (null != $) {
                  let e = {
                    createdAt: new Date().toISOString(),
                    comments: await Promise.all(
                      A.map(async (e, t) => ({ id: (0, N.qh)(e, t), digest: await (0, U.h)([e]) })),
                    ),
                  }
                  await J(w).retainRequest(B, e)
                }
                return { request: B, attachments: [...E, ...($?.attachments ?? [])] }
              })
              ;((E = { draftId: A, ...m }), e.set(O, (e) => ({ ...e, [f]: E })))
            }
            if (
              ((0, N.Yi)(E.request.messageMetadata).length > 0 && J(E.request.roomId),
              X(),
              (0, M.VJ)(t) || "stopped" === e.get(M.NU, t))
            ) {
              let n = await (0, j.jP)(e, t, "durable")
              if ("unconfirmed" === n)
                throw new L.oy(
                  e
                    .get(I.g)
                    .formatMessage(
                      {
                        id: "restricted.aeon.messaging.resumeUnconfirmed.productName",
                        defaultMessage: "Could not confirm that your {dot} resumed",
                        description:
                          "Error when sending a message is stopped because resuming the user's agent has an unknown outcome. dot is a common noun for the agent and must remain untranslated.",
                      },
                      { dot: "dot" },
                    ),
                )
            }
            let { request: $ } = E,
              V = B?.get($.roomId).messages.find((e) => e.id === $.replyToMessageId)
            ;(F?.($.requestId),
              B?.addOptimistic(
                (0, z.$G)(
                  null == E.attachments ? { ...$, text: a.prompt } : $,
                  Q,
                  E.attachments ?? [],
                  null == $.replyToMessageId
                    ? null
                    : { messageId: $.replyToMessageId, text: V?.text ?? "", author: V?.senderName ?? "" },
                ),
              ))
            try {
              let e = await Y.client.send(E.request, { retry: !!E.deliveryUnknown })
              B?.delivered($.roomId, $.requestId, e)
            } catch (t) {
              throw (
                B?.removeOptimistic($.roomId, $.requestId),
                t instanceof L.Kr &&
                  t.deliveryUnknown &&
                  e.set(O, (e) =>
                    e[f]?.request.requestId !== E.request.requestId ? e : { ...e, [f]: { ...E, deliveryUnknown: !0 } },
                  ),
                t
              )
            }
            e.set(O, (e) => {
              if (e[f]?.request.requestId !== E.request.requestId) return e
              let t = { ...e }
              return (delete t[f], t)
            })
          } finally {
            ;(await W?.catch(() => {}), Z.abort())
          }
        },
      },
    )
  },
  em67(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("zTeN"),
      l = n("zd8w"),
      i = n("E8Sp"),
      s = n("Bbed"),
      d = n("OWtl"),
      c = n("e1xH"),
      u = n("Um9I"),
      p = n("SEOK"),
      m = n("pyoT")
    let g = (0, s._)(async () => (await n.e(872149).then(n.bind(n, "PZql"))).AttachSiteDialog),
      h = (0, o.i1)(d.u, (e, { get: t }) => {
        if (!t(c.bd)) return !1
        let n = t(m.spacePageQuery$, e, { enabled: !1 }),
          a = t(m.spacePageAncestryQuery$, e, { enabled: !1 }),
          r = (a.dataUpdatedAt > n.dataUpdatedAt ? a.data?.metadata : null) ?? t(m.loadedSpacePageMetadata$, e)
        return (
          r?.drive_space_id != null &&
          null == r.deleted_at &&
          r.access.can_read &&
          r.access.can_write &&
          "request_changes" !== t(u.jy, r)
        )
      })
    n.d(
      t,
      {},
      {
        T: function (e) {
          let t,
            n,
            s,
            c,
            u = (0, r.c)(13),
            { children: f, pageId: v, isVisible: y } = e,
            b = (0, o.gh)(d.u),
            [x, w] = (0, l.useState)(null),
            I = (0, o.Ul)(null == x ? null : m.spaceAccountId$),
            _ = (0, o._U)((void 0 === y || y) && x?.accountId === I && x?.pageId === v ? h : null, v)
          return (
            null == x || _ || w(null),
            u[0] !== v || u[1] !== b
              ? ((t = () => w({ accountId: b.get(m.spaceAccountId$), pageId: v })), (u[0] = v), (u[1] = b), (u[2] = t))
              : (t = u[2]),
            u[3] !== f || u[4] !== t ? ((n = f(t)), (u[3] = f), (u[4] = t), (u[5] = n)) : (n = u[5]),
            u[6] !== _ || u[7] !== v || u[8] !== b
              ? ((s = _
                  ? (0, a.jsx)(l.Suspense, {
                      fallback: null,
                      children: (0, a.jsx)(g, {
                        parentPageId: v,
                        onAttached: (e, t) => {
                          ;(w(null), (0, i.oo)(b, `/space/${e}`, { state: (0, p.$)(t, b.get(m.spaceAccountId$), e) }))
                        },
                        onClose: () => w(null),
                      }),
                    })
                  : null),
                (u[6] = _),
                (u[7] = v),
                (u[8] = b),
                (u[9] = s))
              : (s = u[9]),
            u[10] !== n || u[11] !== s
              ? ((c = (0, a.jsxs)(a.Fragment, { children: [n, s] })), (u[10] = n), (u[11] = s), (u[12] = c))
              : (c = u[12]),
            c
          )
        },
      },
    )
  },
  IGL9(e, t, n) {
    var a = n("SZCv"),
      r = n.n(a),
      o = n("zTeN"),
      l = n("ChYf"),
      i = n("SPnB"),
      s = n("Ro2M"),
      d = n("Ghh3"),
      c = n("e1xH"),
      u = n("pyoT"),
      p = n("OWtl"),
      m = n("rvFo"),
      g = n("GDNt")
    let h = (0, o.un)(p.u, ({ get: e }) =>
        JSON.stringify([e(u.spaceAccountId$), e(i.chatGptAuthenticatedUserId$), e(i.Kw)]),
      ),
      f = (0, o.vU)(p.u, (e, { get: t }) => {
        let n = t(u.spaceAccountId$),
          a = t(i.chatGptAuthenticatedUserId$)
        return {
          queryKey: ["cloud-automations", "page-automation-attachments", n, a, e],
          queryFn: ({ signal: t }) =>
            d.Request.safeGet("/pages/{page_id}/automation-attachments", {
              parameters: { path: { page_id: e } },
              signal: t,
              expectedErrorStatuses: [403, 404, 503],
            }),
          enabled: null != n && null != a && t(c.pagesEnabled$),
          refetchInterval: (e) => x(e.state.error, m.D.THIRTY_SECONDS),
          retry: !1,
          staleTime: m.D.THIRTY_SECONDS,
        }
      }),
      v = (0, o.vU)(p.u, (e, { get: t }) => ({
        ...(0, s.XZ)(e, t(s.H)),
        refetchInterval: (e) => null != e.state.error && x(e.state.error, m.D.THIRTY_SECONDS),
      })),
      y = (0, o.vU)(p.u, (e, { get: t }) => {
        let n = t(u.spaceAccountId$),
          a = t(i.chatGptAuthenticatedUserId$),
          r = t(i.Kw),
          o = ["cloud-automations", "page-latest-run", n, a, r, e]
        return {
          queryKey: o,
          enabled: null != n && null != a && null != r,
          queryFn: async ({ client: t, signal: a }) => {
            let r = t.getQueryData(o),
              [l] = await Promise.all([
                d.Request.safeGet("/automation/{automation_id}/runs/latest", {
                  parameters: { path: { automation_id: e } },
                  signal: a,
                  expectedErrorStatuses: [403, 404, 503],
                }),
                null == r ? void 0 : t.invalidateQueries({ queryKey: (0, s.XZ)(e, n).queryKey }),
              ])
            a.throwIfAborted()
            let i =
              null != r &&
              (r.result.last_run?.id !== l.last_run?.id || r.result.last_run?.status !== l.last_run?.status)
            return { result: l, refreshUntil: i ? Date.now() + 6e4 : (r?.refreshUntil ?? 0) }
          },
          refetchInterval: (e) => {
            let t = Date.now(),
              n = e.state.data?.result.last_run,
              a = e.state.data?.result.latest_update,
              r =
                n?.status === "in_progress" ||
                (null != n && a?.run.id === n.id && a.latest_update?.metadata.automation_requires_user_action === !0)
            return x(e.state.error, r || t < (e.state.data?.refreshUntil ?? 0) ? m.D.FIVE_SECONDS : m.D.THIRTY_SECONDS)
          },
          retry: !1,
          staleTime: m.D.FIVE_SECONDS,
        }
      }),
      b = (0, o.i1)(
        p.u,
        (e, { get: t }) => {
          let n = t(u.spaceAccountId$),
            a = t(i.chatGptAuthenticatedUserId$),
            r = t(i.Kw)
          if (
            !t(c.pagesEnabled$) ||
            !t(l.G, { name: "automations.cloud" }).isCapable ||
            null == n ||
            null == a ||
            null == r ||
            t(s.H) !== n
          )
            return { status: "unavailable", tasks: [] }
          let o = t(i.MS) ? a.split("__")[0] : r,
            d = t(f, e)
          if (null != d.error) return { status: "error", tasks: [] }
          if (null == d.data) return { status: "loading", tasks: [] }
          let p = "ready",
            m = d.data.flatMap((e) => {
              if (e.creator_account_user_id !== o || "cloud" !== e.runtime) return []
              let n = t(v, e.automation_id)
              if (null != n.error) return ((p = "error"), [])
              let a = n.data?.automation
              if (null == a) return ("error" !== p && (p = "loading"), [])
              if (
                n.data?.teamId != null ||
                null != a.team_id ||
                "local" === a.executor ||
                (a.current_user_role ?? "owner") !== "owner"
              )
                return []
              let r = t(y, a.id),
                l = null == r.error ? (r.data?.result.last_run ?? null) : null,
                i = r.data?.result.latest_update,
                s = "ready"
              return (
                null != r.error ? (s = "error") : null == r.data && (s = "loading"),
                [
                  {
                    automationId: a.id,
                    title: a.display_title?.trim() || a.title,
                    conversationId: a.conversation_id,
                    lastPublishedRunAt: a.last_run_time,
                    status: s,
                    lastRun: l,
                    needsAttention:
                      null != l &&
                      i?.run.id === l.id &&
                      i.latest_update?.metadata.automation_requires_user_action === !0,
                  },
                ]
              )
            })
          return { status: p, tasks: m }
        },
        { autoDispose: !0, isEqual: r() },
      )
    function x(e, t) {
      return null == e ? t : (!(e instanceof g.fk) || !(e.status >= 400) || !(e.status < 500)) && m.D.THIRTY_SECONDS
    }
    n.d(t, {}, { $T: b, DU: f, Wq: h })
  },
  jQst(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("on57"),
      l = n("ygO2")
    n.d(
      t,
      {},
      {
        B: function (e) {
          let t,
            n,
            i,
            s,
            d,
            c = (0, r.c)(11)
          c[0] !== e
            ? (({ floatingLayout: n, className: t, ...i } = e), (c[0] = e), (c[1] = t), (c[2] = n), (c[3] = i))
            : ((t = c[1]), (n = c[2]), (i = c[3]))
          let u =
            n &&
            "size-6 shrink-0 gap-1 rounded-[5px] border-0 border-transparent p-1 text-xs leading-4 text-secondary not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover"
          return (
            c[4] !== t || c[5] !== u ? ((s = (0, o.A)(u, t)), (c[4] = t), (c[5] = u), (c[6] = s)) : (s = c[6]),
            c[7] !== n || c[8] !== i || c[9] !== s
              ? ((d = (0, a.jsx)(l.$, { ...i, unstyled: n, size: "composerSm", uniform: !0, className: s })),
                (c[7] = n),
                (c[8] = i),
                (c[9] = s),
                (c[10] = d))
              : (d = c[10]),
            d
          )
        },
      },
    )
  },
  zJs4(e, t, n) {
    var a = n("zTeN"),
      r = n("SPnB"),
      o = n("rTPf"),
      l = n("pyoT"),
      i = n("OWtl")
    let s = (0, a.i1)(i.u, (e, { get: t }) =>
        e.displayName === e.id ? (t(o.ik, e.id) ?? e.displayName) : e.displayName,
      ),
      d = (0, a.i1)(i.u, (e, { get: t }) => {
        let n = t(r.kf)
        return (
          "loading" === n.status ||
          ("loaded" === n.status &&
            "workspace" === n.structure &&
            null != t(l.spaceAccountId$) &&
            null != t(r.chatGptAuthenticatedUserId$) &&
            t(o.Ks, e).isPending)
        )
      }),
      c = (0, a.i1)(
        i.u,
        (e, { get: t }) => new Map(e.filter((e) => e.displayName === e.id).map((e) => [e.id, t(s, e)])),
      )
    n.d(t, {}, { Bm: s, Ww: d, wh: c })
  },
  J7Vx(e, t, n) {
    var a = n("ABep"),
      r = n("m5Sp"),
      o = n("mZuD")
    let l = "page-comment-code-find-active"
    n.d(
      t,
      {},
      {
        W: function (e, t, n, i, s) {
          if (null == i) return n
          let d = "code" === e.type ? "div" : "span"
          return (0, a.jsx)(
            d,
            {
              className: "code" === e.type ? "contents [&:first-child>*]:mt-0 [&:last-child>*]:mb-0" : "contents",
              ref: (t) => {
                if (null != t)
                  return (function (e, t, n, a) {
                    let i = e.ownerDocument.defaultView
                    if (null == i) return
                    let s = i.CSS?.highlights,
                      d = null,
                      c = [],
                      u = () => {
                        ;(d?.removeAttribute("data-page-find-block-match"), (d = null))
                        let e = s?.get(a)
                        for (let t of c) e?.delete(t)
                        ;(e?.size === 0 && s?.delete(a), (c = []))
                      },
                      p = () => {
                        u()
                        let p = "code" === t.type ? e.querySelector("[data-code-block-source] code") : e
                        if (null == p || p.textContent !== t.text) {
                          a === l &&
                            ((d = e.querySelector(
                              "code" === t.type && (0, o.I)(t.lang, !1)
                                ? '[data-markdown-copy="code-block"]'
                                : "[data-file-reference]",
                            )),
                            d?.setAttribute("data-page-find-block-match", ""))
                          return
                        }
                        if (null == s || null == i.Highlight) return
                        let m = s.get(a) ?? new i.Highlight()
                        for (let { start: e, end: t } of n) {
                          let n = (0, r.g9)(p, e),
                            a = (0, r.g9)(p, t)
                          if (null != n && null != a) {
                            let e = p.ownerDocument.createRange()
                            ;(e.setStart(n.node, n.offset), e.setEnd(a.node, a.offset), m.add(e), c.push(e))
                          }
                        }
                        s.set(a, m)
                      }
                    p()
                    let m = new i.MutationObserver(p)
                    return (
                      m.observe(e, { childList: !0, characterData: !0, subtree: !0 }),
                      () => {
                        ;(m.disconnect(), u())
                      }
                    )
                  })(t, e, i, s ? l : "page-comment-code-find")
              },
              children: n,
            },
            t,
          )
        },
        o: function (e) {
          let t = e.ownerDocument.defaultView
          for (let n of t?.CSS?.highlights?.get(l) ?? [])
            if (null != t && n instanceof t.Range && e.contains(n.commonAncestorContainer)) return n
          return null
        },
      },
    )
  },
  eiyF(e, t, n) {
    n.d(t, { z: () => C, w: () => S })
    var a = n("ABep"),
      r = n("QosV"),
      o = n("on57"),
      l = n("iodE"),
      i = n("LIss"),
      s = n("zTeN"),
      d = n("f6KK"),
      c = n("zd8w"),
      u = n("QWm3"),
      p = n("rS3J"),
      m = n("td7D"),
      g = n("T1PX"),
      h = n("HRo6"),
      f = n("lKu2"),
      v = n("UOwN"),
      y = n("fEVS"),
      b = n("Rxyo"),
      x = n("V8uZ"),
      w = n("EPWt"),
      I = n("WtpQ"),
      _ = n("Rkui"),
      k = n("UXeX")
    function S(e) {
      let t,
        n,
        o,
        s,
        d,
        c,
        u,
        p,
        m,
        h = (0, r.c)(38),
        { animationControls: f, animateEntry: v, unifiedComments: y, children: b } = e,
        w = void 0 === v || v,
        I = void 0 !== y && y,
        [_, k] = (0, l.xQ)(!I && null != f),
        S = (0, g.I)()
      if (I) {
        let e,
          t,
          n = _ ? "open" : "closed",
          r = !_,
          o = w ? "floatingReply-KW12nx" : void 0
        return (
          h[0] !== b || h[1] !== o
            ? ((e = (0, a.jsx)("div", { "data-page-comment-reply-content": !0, className: o, children: b })),
              (h[0] = b),
              (h[1] = o),
              (h[2] = e))
            : (e = h[2]),
          h[3] !== n || h[4] !== r || h[5] !== e
            ? ((t = (0, a.jsx)("div", { "data-page-comment-reply-expansion": n, hidden: r, children: e })),
              (h[3] = n),
              (h[4] = r),
              (h[5] = e),
              (h[6] = t))
            : (t = h[6]),
          t
        )
      }
      let C = _ ? "open" : "closed",
        A = !_,
        j = !_
      ;(h[7] !== w || h[8] !== S
        ? ((t = !!w && !S && { gridTemplateRows: "0fr", opacity: 0, overflow: "hidden" }),
          (h[7] = w),
          (h[8] = S),
          (h[9] = t))
        : (t = h[9]),
        h[10] !== f
          ? ((n = f ?? { gridTemplateRows: "1fr", opacity: 1, transitionEnd: { overflow: "visible" } }),
            (h[10] = f),
            (h[11] = n))
          : (n = h[11]))
      let M = _ ? "1fr" : "0fr",
        P = +!!_,
        T = _ ? "visible" : "hidden"
      return (
        h[12] !== T ? ((o = { overflow: T }), (h[12] = T), (h[13] = o)) : (o = h[13]),
        h[14] !== o || h[15] !== M || h[16] !== P
          ? ((s = { layout: { gridTemplateRows: M, opacity: P, overflow: "hidden", transitionEnd: o } }),
            (h[14] = o),
            (h[15] = M),
            (h[16] = P),
            (h[17] = s))
          : (s = h[17]),
        h[18] !== f
          ? ((d = null == f ? { gridTemplateRows: "0fr", opacity: 0, overflow: "hidden" } : void 0),
            (h[18] = f),
            (h[19] = d))
          : (d = h[19]),
        h[20] !== _ || h[21] !== k
          ? ((c = () => {
              _ || k?.()
            }),
            (h[20] = _),
            (h[21] = k),
            (h[22] = c))
          : (c = h[22]),
        h[23] !== S ? ((u = S ? { duration: 0 } : x.X7), (h[23] = S), (h[24] = u)) : (u = h[24]),
        h[25] !== b
          ? ((p = (0, a.jsx)("div", {
              className: "min-h-0 min-w-0",
              children: (0, a.jsx)("div", { "data-page-comment-reply-content": !0, children: b }),
            })),
            (h[25] = b),
            (h[26] = p))
          : (p = h[26]),
        h[27] !== s ||
        h[28] !== d ||
        h[29] !== c ||
        h[30] !== u ||
        h[31] !== p ||
        h[32] !== C ||
        h[33] !== A ||
        h[34] !== j ||
        h[35] !== t ||
        h[36] !== n
          ? ((m = (0, a.jsx)(i.P.div, {
              className: "grid",
              "data-page-comment-reply-expansion": C,
              inert: A,
              "aria-hidden": j,
              initial: t,
              animate: n,
              variants: s,
              exit: d,
              onAnimationComplete: c,
              transition: u,
              children: p,
            })),
            (h[27] = s),
            (h[28] = d),
            (h[29] = c),
            (h[30] = u),
            (h[31] = p),
            (h[32] = C),
            (h[33] = A),
            (h[34] = j),
            (h[35] = t),
            (h[36] = n),
            (h[37] = m))
          : (m = h[37]),
        m
      )
    }
    function C(e) {
      let t,
        n,
        l,
        i,
        g,
        x,
        S,
        C,
        A,
        j,
        M,
        P,
        T,
        E = (0, r.c)(77),
        {
          pageId: N,
          presence: U,
          comments: q,
          thread: D,
          authorAccountUserId: z,
          authorName: L,
          autoFocus: O,
          isVisible: R,
          unifiedComments: $,
          initialSelection: B,
          initialBody: F,
          takeNativeDraft: V,
          body: W,
          persistedBody: H,
          onDictationBusyChange: G,
          canMention: K,
          canSubmit: Q,
          isReply: X,
          editMessageId: Z,
          surfaceVariant: Y,
          onBodyChange: J,
          onCancel: ee,
          onDismiss: et,
          onSubmit: en,
          renderTaskComposer: ea,
        } = e,
        er = void 0 === R || R,
        eo = void 0 !== $ && $,
        el = void 0 === K || K,
        ei = void 0 === Q || Q,
        es = void 0 === Y ? "default" : Y,
        ed = (0, s.Ul)(!!er && null != N && b.y),
        ec = (0, c.useId)(),
        eu = (0, c.useRef)(null),
        [ep, em] = (0, c.useState)(!1),
        [eg, eh] = (0, c.useState)()
      E[0] !== z || E[1] !== W ? ((t = (0, f.jX)(W, z)), (E[0] = z), (E[1] = W), (E[2] = t)) : (t = E[2])
      let ef = (0, s._U)(f.OU, t),
        [ev, ey] = (0, c.useState)(!1)
      E[3] !== z || E[4] !== ef ? ((n = { owner: z, labels: ef }), (E[3] = z), (E[4] = ef), (E[5] = n)) : (n = E[5])
      let [eb, ex] = (0, c.useState)(n)
      E[6] !== z || E[7] !== eb || E[8] !== ev || E[9] !== ef
        ? ((l = (0, f.FL)(eb, { owner: z, labels: ef }, ev)),
          (E[6] = z),
          (E[7] = eb),
          (E[8] = ev),
          (E[9] = ef),
          (E[10] = l))
        : (l = E[10])
      let ew = l
      ew !== eb && ex(ew)
      let [eI, e_] = (0, c.useState)(null),
        ek = (0, c.useRef)(null)
      ;(E[11] !== eI || E[12] !== B || E[13] !== ew || E[14] !== ep
        ? ((i = () => {
            if (null == eI || eI.view.isDestroyed) return
            let e = eI.view,
              t = e.props.nodeViews
            if (
              (e.setProps({
                nodeViews: {
                  ...t,
                  pageTaskMention: (e) => {
                    let t = "string" == typeof e.attrs.path ? (0, y.UR)(e.attrs.path) : null,
                      n = (0, y.R9)(t),
                      a = null == t ? void 0 : (0, f.Xz)(ew, t)
                    return {
                      dom: (0, h._)({
                        text: null == a ? n : `@${a}`,
                        tone: "neutral",
                        dataAttributes: {
                          "page-task-mention-path": e.attrs.path,
                          ...(0, p.LL)({ href: e.attrs.path, label: n }),
                        },
                      }),
                    }
                  },
                },
              }),
              ek.current !== eI)
            ) {
              ek.current = eI
              let t = ep ? 0 : B
              null != t && (0, I.nH)(e, t)
            }
            return () => {
              e.isDestroyed || e.setProps({ nodeViews: t })
            }
          }),
          (g = [eI, ew, B, ep]),
          (E[11] = eI),
          (E[12] = B),
          (E[13] = ew),
          (E[14] = ep),
          (E[15] = i),
          (E[16] = g))
        : ((i = E[15]), (g = E[16])),
        (0, c.useLayoutEffect)(i, g),
        E[17] !== eI || E[18] !== V
          ? ((x = () => {
              let e = null == eI ? null : V?.()
              if (null == eI || null == e) return
              let { body: t, offset: n } = e
              if (null == n)
                return void eI.restoreDraft(t, {
                  document: (0, m.hI)({ schema: eI.view.state.schema, text: t }),
                  plainTextMode: !1,
                })
              let { doc: a, caret: r } = (0, I.IR)(t, n, (e) => eI.parsePromptText(e))
              eI.view.dom.blur()
              let { state: o } = eI.view,
                l = o.tr.replaceWith(0, o.doc.content.size, a.content)
              ;(l.setSelection(null == r ? d.U3.atEnd(l.doc) : d.U3.near(l.doc.resolve(r.pos))),
                eI.view.dispatch(l.setMeta("addToHistory", !1)),
                eI.focus())
            }),
            (S = [eI, V]),
            (E[17] = eI),
            (E[18] = V),
            (E[19] = x),
            (E[20] = S))
          : ((x = E[19]), (S = E[20])),
        (0, c.useLayoutEffect)(x, S),
        E[21] !== W || E[22] !== J || E[23] !== ee || E[24] !== et || E[25] !== ea || E[26] !== eg
          ? ((C = ea?.(
              W,
              et ?? ee,
              (e, t) => {
                let n = void 0 === t ? e : t
                ;(J(e, n), em(!0))
              },
              eg,
            )),
            (E[21] = W),
            (E[22] = J),
            (E[23] = ee),
            (E[24] = et),
            (E[25] = ea),
            (E[26] = eg),
            (E[27] = C))
          : (C = E[27]))
      let eS = C
      if (null != eS) {
        let e,
          t,
          n,
          r,
          l = X ? "gap-2.5 ps-4 pe-2 pb-2.5" : "gap-2",
          i =
            eo &&
            X &&
            "in-data-[comment-layout=floating]:mt-3.5 in-data-[comment-layout=floating]:gap-2 in-data-[comment-layout=floating]:px-0 in-data-[comment-layout=floating]:pb-0"
        return (
          E[28] !== l || E[29] !== i
            ? ((e = (0, o.A)("page-comment-typography flex min-w-0 items-start", l, i)),
              (E[28] = l),
              (E[29] = i),
              (E[30] = e))
            : (e = E[30]),
          E[31] !== z || E[32] !== L || E[33] !== X
            ? ((t = X
                ? (0, a.jsx)("div", {
                    className: "shrink-0 pt-1.5",
                    children: (0, a.jsx)(v.Y, { accountUserId: z, name: L }),
                  })
                : null),
              (E[31] = z),
              (E[32] = L),
              (E[33] = X),
              (E[34] = t))
            : (t = E[34]),
          E[35] !== eS
            ? ((n = (0, a.jsx)("div", { className: "min-w-0 flex-1", children: eS })), (E[35] = eS), (E[36] = n))
            : (n = E[36]),
          E[37] !== e || E[38] !== t || E[39] !== n
            ? ((r = (0, a.jsxs)("div", { "data-page-comment-composer": !0, className: e, children: [t, n] })),
              (E[37] = e),
              (E[38] = t),
              (E[39] = n),
              (E[40] = r))
            : (r = E[40]),
          r
        )
      }
      E[41] !== z || E[42] !== L
        ? ((A = (0, a.jsx)(v.Y, { accountUserId: z, name: L })), (E[41] = z), (E[42] = L), (E[43] = A))
        : (A = E[43])
      let eC = void 0 === O || O || ep,
        eA = null != N && (el || null != ea)
      E[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = () => ey(!0)), (M = () => ey(!1)), (E[44] = j), (E[45] = M))
        : ((j = E[44]), (M = E[45]))
      let ej = et ?? ee
      return (
        E[46] !== z ||
        E[47] !== L ||
        E[48] !== el ||
        E[49] !== q ||
        E[50] !== ed ||
        E[51] !== er ||
        E[52] !== J ||
        E[53] !== N ||
        E[54] !== U ||
        E[55] !== ea ||
        E[56] !== D
          ? ((P =
              null == N
                ? void 0
                : (e) =>
                    (0, a.jsx)(u.$, {
                      anchorRef: eu,
                      anchorMinHeight: ed ? 240 : void 0,
                      anchorMinWidth: 360,
                      flip: !0,
                      isActive: er,
                      placement: ed ? "bottom" : "top",
                      zIndexClassName: ed ? "z-[60]" : void 0,
                      children: (0, a.jsx)("div", {
                        "data-page-comments-controls": !0,
                        children: (0, a.jsx)(_.N, {
                          ...e,
                          className: "w-full",
                          pageId: N,
                          presence: U,
                          comments: q,
                          thread: D,
                          canMention: el,
                          authorAccountUserId: z,
                          authorName: L,
                          onChatGPT:
                            null == ea
                              ? void 0
                              : (e, t, n) => {
                                  ;(eh(t), J(e, n))
                                },
                        }),
                      }),
                    })),
            (E[46] = z),
            (E[47] = L),
            (E[48] = el),
            (E[49] = q),
            (E[50] = ed),
            (E[51] = er),
            (E[52] = J),
            (E[53] = N),
            (E[54] = U),
            (E[55] = ea),
            (E[56] = D),
            (E[57] = P))
          : (P = E[57]),
        E[58] !== W ||
        E[59] !== ei ||
        E[60] !== Z ||
        E[61] !== F ||
        E[62] !== X ||
        E[63] !== er ||
        E[64] !== J ||
        E[65] !== G ||
        E[66] !== en ||
        E[67] !== H ||
        E[68] !== ec ||
        E[69] !== es ||
        E[70] !== A ||
        E[71] !== eC ||
        E[72] !== eA ||
        E[73] !== ej ||
        E[74] !== P ||
        E[75] !== eo
          ? ((T = (0, a.jsx)(w.g, {
              "data-page-comment-composer": !0,
              authorAvatar: A,
              autoFocus: eC,
              unifiedComments: eo,
              body: W,
              initialBody: F,
              persistedBody: H,
              canSubmit: ei,
              editMessageId: Z,
              editorRef: e_,
              enableSuggestions: eA,
              inputContainerClassName: k.A.PageCommentMentions,
              inputContainerRef: eu,
              isReply: X,
              isVisible: er,
              onFocusCapture: j,
              onBlurCapture: M,
              onBodyChange: J,
              onDictationBusyChange: G,
              onCancel: ej,
              onSubmit: en,
              sessionId: ec,
              surfaceVariant: es,
              renderAtMentionList: P,
            })),
            (E[58] = W),
            (E[59] = ei),
            (E[60] = Z),
            (E[61] = F),
            (E[62] = X),
            (E[63] = er),
            (E[64] = J),
            (E[65] = G),
            (E[66] = en),
            (E[67] = H),
            (E[68] = ec),
            (E[69] = es),
            (E[70] = A),
            (E[71] = eC),
            (E[72] = eA),
            (E[73] = ej),
            (E[74] = P),
            (E[75] = eo),
            (E[76] = T))
          : (T = E[76]),
        T
      )
    }
  },
  EPWt(e, t, n) {
    n.d(t, { g: () => h })
    var a = n("ABep"),
      r = n("QosV"),
      o = n("HgFd"),
      l = n("on57"),
      i = n("DBCl"),
      s = n("zd8w"),
      d = n("Wf1j"),
      c = n("ntJV"),
      u = n("aVzC"),
      p = n("HgLj"),
      m = n("mDXq")
    class g extends m.ud {
      proseMirrorNodeName() {
        return "commentLiteralAutolink"
      }
      proseMirrorNodeSpec() {
        return null
      }
      proseMirrorNodeToUnistNodes() {
        return []
      }
      unistNodeName() {
        return "link"
      }
      unistToProseMirrorTest(e) {
        let t = e.children?.[0]
        return (
          "link" === e.type &&
          /^https?:\/\//i.test(e.url) &&
          1 === e.children.length &&
          t?.type === "text" &&
          t.value === e.url &&
          (null == e.position ||
            (null != e.position.start.offset && e.position.end.offset === e.position.start.offset + t.value.length))
        )
      }
      unistNodeToProseMirrorNodes({ convertedChildren: e, schema: t }) {
        let n = t.marks.literalPaste.create()
        return e.map((e) => e.mark(n.addToSet(e.marks)))
      }
    }
    function h(e) {
      let t,
        n,
        u,
        m,
        g,
        h,
        v,
        y,
        b,
        x,
        w,
        I,
        _,
        k,
        S,
        C,
        A,
        j,
        M,
        P,
        T,
        E,
        N,
        U,
        q,
        D,
        z,
        L,
        O,
        R,
        $,
        B,
        F,
        V,
        W,
        H,
        G,
        K,
        Q,
        X,
        Z,
        Y,
        J,
        ee,
        et = (0, r.c)(109)
      et[0] !== e
        ? (({
            authorAvatar: t,
            autoFocus: T,
            body: n,
            canSubmit: E,
            className: u,
            disabled: N,
            editMessageId: m,
            editorRef: g,
            enableSuggestions: h,
            initialBody: v,
            inputContainerClassName: y,
            inputContainerRef: b,
            isReply: x,
            isVisible: U,
            onBlurCapture: w,
            onBodyChange: I,
            onCancel: _,
            onDictationBusyChange: k,
            onFocusCapture: S,
            onSubmit: C,
            persistedBody: A,
            renderAtMentionList: j,
            sessionId: P,
            surfaceVariant: q,
            unifiedComments: D,
            ...M
          } = e),
          (et[0] = e),
          (et[1] = t),
          (et[2] = n),
          (et[3] = u),
          (et[4] = m),
          (et[5] = g),
          (et[6] = h),
          (et[7] = v),
          (et[8] = y),
          (et[9] = b),
          (et[10] = x),
          (et[11] = w),
          (et[12] = I),
          (et[13] = _),
          (et[14] = k),
          (et[15] = S),
          (et[16] = C),
          (et[17] = A),
          (et[18] = j),
          (et[19] = M),
          (et[20] = P),
          (et[21] = T),
          (et[22] = E),
          (et[23] = N),
          (et[24] = U),
          (et[25] = q),
          (et[26] = D))
        : ((t = et[1]),
          (n = et[2]),
          (u = et[3]),
          (m = et[4]),
          (g = et[5]),
          (h = et[6]),
          (v = et[7]),
          (y = et[8]),
          (b = et[9]),
          (x = et[10]),
          (w = et[11]),
          (I = et[12]),
          (_ = et[13]),
          (k = et[14]),
          (S = et[15]),
          (C = et[16]),
          (A = et[17]),
          (j = et[18]),
          (M = et[19]),
          (P = et[20]),
          (T = et[21]),
          (E = et[22]),
          (N = et[23]),
          (U = et[24]),
          (q = et[25]),
          (D = et[26]))
      let en = void 0 === T || T,
        ea = void 0 === E || E,
        er = void 0 !== N && N,
        eo = void 0 === U || U,
        el = void 0 === q ? "default" : q,
        ei = void 0 !== D && D,
        es = (0, d.A)(),
        ed = (0, s.useId)(),
        [ec] = (0, s.useState)(n),
        [eu] = (0, s.useState)(f),
        [ep, em] = (0, s.useState)(null)
      ;(et[27] !== en || et[28] !== er || et[29] !== ep || et[30] !== eo || et[31] !== ei
        ? ((z = () => {
            if (!ei || null == ep || !eo || !en || er) return
            let e = ep.view.dom.ownerDocument.defaultView
            if (null == e) return
            let t = e.requestAnimationFrame(() => {
              let t = e.document.activeElement?.closest('[role="dialog"], [role="menu"]')
              ;(null == t || "closed" === t.getAttribute("data-state") || t.contains(ep.view.dom)) && ep.focus()
            })
            return () => e.cancelAnimationFrame(t)
          }),
          (L = [ep, en, er, eo, ei]),
          (et[27] = en),
          (et[28] = er),
          (et[29] = ep),
          (et[30] = eo),
          (et[31] = ei),
          (et[32] = z),
          (et[33] = L))
        : ((z = et[32]), (L = et[33])),
        (0, s.useLayoutEffect)(z, L),
        et[34] !== m || et[35] !== ep || et[36] !== ei
          ? ((R = () => {
              ;(ei || null != m) && ep?.setEnterBehavior(null == m ? "enter" : "cmdAlways")
            }),
            (O = [ep, m, ei]),
            (et[34] = m),
            (et[35] = ep),
            (et[36] = ei),
            (et[37] = O),
            (et[38] = R))
          : ((O = et[37]), (R = et[38])),
        (0, s.useLayoutEffect)(R, O),
        et[39] !== ea || et[40] !== er || et[41] !== m || et[42] !== C
          ? (($ = (e) => {
              let { body: t, submitSource: n } = e
              !er && ea && "" !== t.trim() && (0, o.U)(null == m ? t : t.trim()) && C(t.trim(), n)
            }),
            (et[39] = ea),
            (et[40] = er),
            (et[41] = m),
            (et[42] = C),
            (et[43] = $))
          : ($ = et[43]))
      let eg = $,
        eh = x ? "gap-2.5 ps-4 pe-2 pb-2.5" : "gap-2",
        ef =
          ei &&
          x &&
          "in-data-[comment-layout=floating]:mt-3.5 in-data-[comment-layout=floating]:gap-2 in-data-[comment-layout=floating]:px-0 in-data-[comment-layout=floating]:pb-0"
      ;(et[44] !== u || et[45] !== eh || et[46] !== ef
        ? ((B = (0, l.A)("page-comment-typography relative flex min-w-0 items-start", eh, ef, u)),
          (et[44] = u),
          (et[45] = eh),
          (et[46] = ef),
          (et[47] = B))
        : (B = et[47]),
        et[48] !== t || et[49] !== x || et[50] !== ei
          ? ((F =
              x && null != t
                ? (0, a.jsx)("div", {
                    className: (0, l.A)("shrink-0 pt-2", ei && "in-data-[comment-layout=floating]:pt-1.5"),
                    children: t,
                  })
                : null),
            (et[48] = t),
            (et[49] = x),
            (et[50] = ei),
            (et[51] = F))
          : (F = et[51]))
      let ev = ei && "composer-XaL4CV",
        ey = ei && "default" === el && "defaultSurface-KTjCaW"
      et[52] !== y || et[53] !== ev || et[54] !== ey
        ? ((V = (0, l.A)(y, ev, ey, "min-w-0 flex-1")), (et[52] = y), (et[53] = ev), (et[54] = ey), (et[55] = V))
        : (V = et[55])
      let eb = ei ? eu.unified : eu.legacy,
        ex = !ei && en && !er
      ;(et[56] !== g ? ((W = (0, p.P)(g, em)), (et[56] = g), (et[57] = W)) : (W = et[57]),
        et[58] !== n || et[59] !== ea || et[60] !== er || et[61] !== m
          ? ((H = !er && ea && (0, o.U)(null == m ? n : n.trim())),
            (et[58] = n),
            (et[59] = ea),
            (et[60] = er),
            (et[61] = m),
            (et[62] = H))
          : (H = et[62]),
        et[63] !== es || et[64] !== x
          ? ((G = x
              ? es.formatMessage({
                  id: "codex.space.page.comments.submitReply",
                  defaultMessage: "Reply",
                  description: "Button that posts a reply to a shared Page comment thread",
                })
              : es.formatMessage({
                  id: "codex.space.page.comments.submit",
                  defaultMessage: "Comment",
                  description: "Button that posts the first comment on selected text in a shared Page",
                })),
            (et[63] = es),
            (et[64] = x),
            (et[65] = G))
          : (G = et[65]),
        et[66] !== m || et[67] !== es
          ? ((K =
              null == m
                ? es.formatMessage({
                    id: "codex.space.page.comments.body",
                    defaultMessage: "Comment",
                    description: "Accessible label for typing a new comment or reply on a shared Page",
                  })
                : es.formatMessage({
                    id: "codex.space.page.comments.editBody",
                    defaultMessage: "Comment text",
                    description: "Accessible label for editing a Page comment's text",
                  })),
            (et[66] = m),
            (et[67] = es),
            (et[68] = K))
          : (K = et[68]),
        et[69] !== es || et[70] !== x
          ? ((Q = x
              ? es.formatMessage({
                  id: "codex.space.page.comments.placeholder",
                  defaultMessage: "Reply…",
                  description: "Placeholder for writing a reply to a shared Page comment thread",
                })
              : es.formatMessage({
                  id: "codex.space.page.comments.createPlaceholder",
                  defaultMessage: "Add a comment…",
                  description: "Placeholder for writing the first comment on selected text in a shared Page",
                })),
            (et[69] = es),
            (et[70] = x),
            (et[71] = Q))
          : (Q = et[71]))
      let ew = P ?? ed
      et[72] !== m
        ? ((X = null == m ? { mode: "create" } : { mode: "edit", commentId: m }), (et[72] = m), (et[73] = X))
        : (X = et[73])
      let eI = null == m ? "" : (v ?? ec),
        e_ = A ?? n
      et[74] !== ew || et[75] !== X || et[76] !== eI || et[77] !== e_
        ? ((Z = {
            sessionId: ew,
            target: X,
            body: eI,
            draftBody: e_,
            cwd: null,
            previewAlignment: "end",
            surfaceMode: "editor",
          }),
          (et[74] = ew),
          (et[75] = X),
          (et[76] = eI),
          (et[77] = e_),
          (et[78] = Z))
        : (Z = et[78])
      let ek = A ?? n
      return (
        et[79] !== h ||
        et[80] !== eo ||
        et[81] !== I ||
        et[82] !== _ ||
        et[83] !== k ||
        et[84] !== j ||
        et[85] !== eg ||
        et[86] !== el ||
        et[87] !== eb ||
        et[88] !== ex ||
        et[89] !== W ||
        et[90] !== H ||
        et[91] !== G ||
        et[92] !== K ||
        et[93] !== Q ||
        et[94] !== Z ||
        et[95] !== ek
          ? ((Y = (0, a.jsx)(c.s, {
              embedded: !0,
              isVisible: eo,
              surfaceVariant: el,
              enableRichText: !0,
              enableSuggestions: h,
              markdownExtensions: eb,
              allowImageAttachments: !1,
              dictationProductSurface: "chatgpt",
              autoFocus: ex,
              editorRef: W,
              canSubmit: H,
              allowDirectSubmit: !0,
              defaultCreateSubmitMode: "direct",
              submitLabel: G,
              inputAriaLabel: K,
              placeholder: Q,
              session: Z,
              value: ek,
              showAdjustEntry: !1,
              windowHeight: i.bUX + i.o6c,
              reservedTrayHeight: i.o6c,
              renderAtMentionList: j,
              onBodyChange: I,
              onDictationBusyChange: k,
              onCancel: _,
              onEscape: _,
              onSubmit: eg,
              onDirectSubmit: eg,
            })),
            (et[79] = h),
            (et[80] = eo),
            (et[81] = I),
            (et[82] = _),
            (et[83] = k),
            (et[84] = j),
            (et[85] = eg),
            (et[86] = el),
            (et[87] = eb),
            (et[88] = ex),
            (et[89] = W),
            (et[90] = H),
            (et[91] = G),
            (et[92] = K),
            (et[93] = Q),
            (et[94] = Z),
            (et[95] = ek),
            (et[96] = Y))
          : (Y = et[96]),
        et[97] !== b || et[98] !== V || et[99] !== Y
          ? ((J = (0, a.jsx)("div", { ref: b, className: V, children: Y })),
            (et[97] = b),
            (et[98] = V),
            (et[99] = Y),
            (et[100] = J))
          : (J = et[100]),
        et[101] !== er ||
        et[102] !== w ||
        et[103] !== S ||
        et[104] !== M ||
        et[105] !== B ||
        et[106] !== F ||
        et[107] !== J
          ? ((ee = (0, a.jsxs)("div", {
              ...M,
              className: B,
              inert: er,
              onFocusCapture: S,
              onBlurCapture: w,
              children: [F, J],
            })),
            (et[101] = er),
            (et[102] = w),
            (et[103] = S),
            (et[104] = M),
            (et[105] = B),
            (et[106] = F),
            (et[107] = J),
            (et[108] = ee))
          : (ee = et[108]),
        ee
      )
    }
    function f() {
      let e = (0, u.L)()
      return { legacy: [e], unified: [e, new g()] }
    }
  },
  WtpQ(e, t, n) {
    var a = n("f6KK")
    function r(e) {
      let t = [],
        n = !0
      return (
        e.state.doc.descendants((a, r) => {
          a.isTextblock
            ? (n || t.push({ from: r, text: "\n", atomic: !1 }),
              (n = !1),
              0 === a.content.size && t.push({ from: r + 1, text: "", atomic: !1 }))
            : a.isText
              ? t.push({ from: r, text: a.text ?? "", atomic: !1 })
              : a.isInline && a.isLeaf && t.push({ from: r, text: e.nodeDOM(r)?.textContent ?? "\n", atomic: !0 })
        }),
        t
      )
    }
    n.d(
      t,
      {},
      {
        B6: function (e) {
          let t = e.state.selection.from,
            n = 0
          for (let a of r(e)) {
            if (t <= a.from) break
            n += a.atomic ? a.text.length : Math.min(t - a.from, a.text.length)
          }
          return n
        },
        IR: function (e, t, n) {
          let r = "" + crypto.randomUUID() + "",
            o = n(e.slice(0, t) + r + e.slice(t)),
            l = null
          o.descendants((e, t) => {
            let n = e.text?.indexOf(r) ?? -1
            return (n >= 0 && (l = t + n), null == l)
          })
          let i = n(e)
          if (null == l) return { doc: i, caret: null }
          let s = o.resolve(l),
            d = i.resolve(Math.min(s.start(), i.content.size)),
            c = s.parent.textBetween(s.parentOffset + r.length, s.parent.content.size, void 0, "￼"),
            u = d.parent.textBetween(0, d.parent.content.size, void 0, "￼"),
            p =
              d.start() +
              (u.endsWith(c) ? d.parent.content.size - c.length : Math.min(s.parentOffset, d.parent.content.size))
          return { doc: i, caret: a.U3.near(i.resolve(p)).$from }
        },
        nH: function (e, t) {
          let n = t,
            o = a.U3.atEnd(e.state.doc).from
          for (let t of r(e)) {
            if (n <= t.text.length) {
              o = t.from + (t.atomic ? Math.min(n, 1) : n)
              break
            }
            n -= t.text.length
          }
          e.dispatch(e.state.tr.setSelection(a.U3.near(e.state.doc.resolve(o))))
        },
      },
    )
  },
  FXi4(e, t, n) {
    var a = n("v7qY")
    n.d(
      t,
      {},
      {
        _: function (e, t) {
          let n = []
          for (let t = e.parentElement; null != t; t = t.parentElement)
            t.scrollHeight > t.clientHeight && n.push({ element: t, top: t.scrollTop })
          for (let { element: e, top: r } of ((0, a.flushSync)(t), n)) e.scrollTop = r
        },
      },
    )
  },
  Xtjz(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("xMUP")
    n.d(
      t,
      {},
      {
        v: function (e) {
          let t,
            n,
            l = (0, r.c)(10),
            { activeFindMatch: i, query: s, text: d, ranges: c, offset: u } = e,
            p = void 0 !== i && i,
            m = void 0 === u ? 0 : u
          if (l[0] !== p || l[1] !== m || l[2] !== s || l[3] !== c || l[4] !== d) {
            n = Symbol.for("react.early_return_sentinel")
            e: {
              let e,
                r = null == s ? c : (0, o.nI)(d, s)
              if (null == r || 0 === r.length) {
                n = d
                break e
              }
              t = []
              let i = 0
              for (let e of r) {
                let n = Math.max(0, e.start - m),
                  r = Math.min(d.length, e.end - m)
                n >= r ||
                  (t.push(
                    d.slice(i, n),
                    (0, a.jsx)(
                      "mark",
                      {
                        "data-page-find-match": p ? "" : void 0,
                        "data-active": p ? "" : void 0,
                        className: "rounded-2xs bg-token-editor-find-match-background text-default",
                        children: d.slice(n, r),
                      },
                      n,
                    ),
                  ),
                  (i = r))
              }
              ;(l[7] !== i || l[8] !== d ? ((e = d.slice(i)), (l[7] = i), (l[8] = d), (l[9] = e)) : (e = l[9]),
                t.push(e))
            }
            ;((l[0] = p), (l[1] = m), (l[2] = s), (l[3] = c), (l[4] = d), (l[5] = t), (l[6] = n))
          } else ((t = l[5]), (n = l[6]))
          return n !== Symbol.for("react.early_return_sentinel") ? n : t
        },
      },
    )
  },
  Oe5x(e, t, n) {
    var a = n("HgFd"),
      r = n("XNvh"),
      o = n("EULo"),
      l = n("MX6A"),
      i = n("AdJ5"),
      s = n("RQgn"),
      d = n("XpUB"),
      c = n("fEVS")
    let u = [
        ...i.b,
        {
          extensions: [
            {
              name: "pageCommentMention",
              level: "inline",
              start: (e) => e.indexOf("["),
              tokenizer(e) {
                if (this.lexer.state.inLink) return
                let t = (0, o.ex)(e, 0)
                if (t?.start !== 0) return
                let n = (0, o.gh)(t.path)
                if (null == (0, a.D1)(n) && null == (0, c.UR)(n) && !(0, r.$U)(n)) return
                let l = e.slice(0, t.end)
                return { type: "text", raw: l, text: l }
              },
            },
          ],
        },
      ],
      p = new Set(["text", "paragraph", "heading", "blockquote", "strong", "em", "del", "list_item", "list", "table"]),
      m = new Set([...p, "link", "br", "checkbox", "code", "codespan", "def", "escape", "hr", "html", "image", "space"])
    function g(e) {
      let t = (0, d.o)(e, u, { repairOrderedLists: !1, renderMath: !1 })
      return {
        tokens: t,
        taskMentions: (function e(t) {
          return t.filter(f).flatMap((t) => {
            switch (t.type) {
              case "text":
                return null == t.tokens ? (0, c.FD)(t.text) : e(t.tokens)
              case "paragraph":
              case "heading":
              case "blockquote":
              case "strong":
              case "em":
              case "del":
              case "list_item":
                return e(t.tokens)
              case "list":
                return e(t.items)
              case "table":
                return [t.header, ...t.rows].flatMap((t) => t.flatMap((t) => e(t.tokens)))
              case "br":
              case "checkbox":
              case "code":
              case "codespan":
              case "def":
              case "escape":
              case "hr":
              case "html":
              case "image":
              case "link":
              case "space":
                return []
            }
          })
        })(t),
      }
    }
    function h(e, t) {
      let n = 0
      return (
        (0, o.C4)(e)
          .map((a) => {
            let r = (0, s.C)(e.slice(n, a.start))
            return ((n = a.end), r + (t?.[e.slice(a.start, a.end)] ?? (0, l.Nb)(a.label)))
          })
          .join("") + (0, s.C)(e.slice(n))
      )
    }
    function f(e) {
      return m.has(e.type)
    }
    n.d(
      t,
      {},
      {
        Mw: function (e, t, n) {
          var a, r, o, l
          let i = ""
          return (
            (a = e),
            (r = (e, n) => {
              n?.type !== "checkbox" &&
                (null != n && t?.set(n, { start: i.length, end: i.length + e.length }), (i += e))
            }),
            (o = () => {
              i += " "
            }),
            (l = n),
            !(function e(t, n) {
              let a = (e, t) => r(e, t, n)
              for (let i of t) {
                if (!f(i)) {
                  a(i.raw)
                  continue
                }
                switch (i.type) {
                  case "html":
                    ;/^<br\s*\/?>$/i.test(i.raw.trim()) ? o("\n") : a(i.raw)
                    break
                  case "checkbox":
                    r(i.checked ? "[x] " : "[ ] ", i)
                    break
                  case "space":
                  case "hr":
                  case "def":
                    o("\n\n")
                    break
                  case "br":
                    o("\n")
                    break
                  case "code":
                    ;(a(i.text, i), o("\n\n"))
                    break
                  case "codespan":
                    a(i.text, i)
                    break
                  case "escape":
                    a(i.text)
                    break
                  case "image":
                    a((0, s.C)(i.text))
                    break
                  case "text":
                    null != i.tokens ? e(i.tokens, n) : a(h(i.text, l), i)
                    break
                  case "link":
                    e(i.tokens, i.href)
                    break
                  case "strong":
                  case "em":
                  case "del":
                    e(i.tokens, n)
                    break
                  case "paragraph":
                  case "heading":
                  case "blockquote":
                  case "list_item":
                    ;(e(i.tokens, n), o("list_item" === i.type ? "\n" : "\n\n"))
                    break
                  case "list":
                    e(i.items, n)
                    break
                  case "table":
                    for (let [t, a] of [i.header, ...i.rows].entries())
                      for (let [r, l] of (t > 0 && o("\n"), a.entries())) (r > 0 && o(" "), e(l.tokens, n))
                }
              }
            })(a),
            i
          )
        },
        Rb: function (e) {
          let t = [],
            n = (e, a, r) => {
              let o = 0
              for (let l of e) {
                let e,
                  i = a.indexOf(l.raw, o)
                if (
                  ("list" === l.type
                    ? (e = l.items)
                    : "table" === l.type
                      ? (e = [l.header, ...l.rows].flat().flatMap((e) => e.tokens))
                      : p.has(l.type) && "tokens" in l && (e = l.tokens),
                  i < 0)
                ) {
                  null != e && (o += n(e, a.slice(o), r + o))
                  continue
                }
                ;((o = i + l.raw.length),
                  "link" === l.type ? t.push({ from: r + i, to: r + o }) : null != e && n(e, l.raw, r + i))
              }
              return o
            }
          return (n(g(e).tokens, e, 0), t)
        },
        bl: g,
        rZ: h,
      },
    )
  },
  Rkui(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("zTeN"),
      l = n("zd8w"),
      i = n("Wf1j"),
      s = n("KIKs"),
      d = n("OQ5p"),
      c = n("wSXO"),
      u = n("e1xH"),
      p = n("tIbI"),
      m = n("tcwr"),
      g = n("zOWn"),
      h = n("tdE2"),
      f = n("fEVS"),
      v = n("Rxyo"),
      y = n("WtpQ")
    function b() {}
    function x(e) {
      return { id: e.accountUserId.split("__")[0], account_user_id: e.accountUserId, name: e.displayName, email: null }
    }
    function w(e) {
      return e.accountUserId
    }
    function I(e) {
      return e.id
    }
    function _(e) {
      return e ?? []
    }
    function k(e) {
      return e.getTime()
    }
    function S() {}
    n.d(
      t,
      {},
      {
        N: function (e) {
          let t,
            n,
            C,
            A,
            j,
            M,
            P,
            T,
            E,
            N,
            U,
            q,
            D,
            z,
            L,
            O,
            R,
            $,
            B,
            F,
            V,
            W,
            H,
            G = (0, r.c)(68)
          G[0] !== e
            ? (({
                pageId: E,
                presence: N,
                comments: j,
                thread: q,
                canMention: A,
                authorAccountUserId: n,
                authorName: C,
                contextualPicks: M,
                artifactParticipants: t,
                onAssignChatGPT: P,
                onChatGPT: T,
                ...U
              } = e),
              (G[0] = e),
              (G[1] = t),
              (G[2] = n),
              (G[3] = C),
              (G[4] = A),
              (G[5] = j),
              (G[6] = M),
              (G[7] = P),
              (G[8] = T),
              (G[9] = E),
              (G[10] = N),
              (G[11] = U),
              (G[12] = q))
            : ((t = G[1]),
              (n = G[2]),
              (C = G[3]),
              (A = G[4]),
              (j = G[5]),
              (M = G[6]),
              (P = G[7]),
              (T = G[8]),
              (E = G[9]),
              (N = G[10]),
              (U = G[11]),
              (q = G[12]))
          let K = (0, i.A)(),
            Q = (0, o.Ul)(u.pagesEnabled$) && A
          G[13] !== N ? ((D = (e) => N?.subscribe(e) ?? S), (G[13] = N), (G[14] = D)) : (D = G[14])
          let X = D
          G[15] !== N ? ((z = () => N?.getSnapshot()), (G[15] = N), (G[16] = z)) : (z = G[16])
          let Z = z
          G[17] !== N ? ((L = () => N?.getServerSnapshot()), (G[17] = N), (G[18] = L)) : (L = G[18])
          let Y = L,
            J = (0, l.useSyncExternalStore)(X, Z, Y),
            ee = (0, l.useSyncExternalStore)(
              Q && null != j ? j.subscribe : h.aW,
              Q && null != j ? j.getSnapshot : h.tb,
              j?.getServerSnapshot ?? h.tb,
            ),
            et = (0, o.Ul)(!!Q && v.y)
          G[19] !== et ? ((O = { enabled: et }), (G[19] = et), (G[20] = O)) : (O = G[20])
          let en = (0, s.wv)(k, O)
          G[21] !== t ||
          G[22] !== en ||
          G[23] !== J?.collaborators ||
          G[24] !== M ||
          G[25] !== Q ||
          G[26] !== et ||
          G[27] !== E ||
          G[28] !== U ||
          G[29] !== q ||
          G[30] !== ee
            ? ((R = Q
                ? {
                    type: "page",
                    id: E,
                    query: U.query,
                    commenters: [...((0, h.Qk)(ee) ?? []), ...(M?.flatMap(_) ?? [])],
                    mentionContext: et
                      ? {
                          asOfMs: en,
                          threadUserIds: (0, h.Qk)(null == q ? void 0 : [q])?.map(I),
                          liveUserIds: J?.collaborators.map(w),
                          participants: [...(0, h.Fx)(ee), ...(t ?? [])],
                        }
                      : void 0,
                  }
                : null),
              (G[21] = t),
              (G[22] = en),
              (G[23] = J?.collaborators),
              (G[24] = M),
              (G[25] = Q),
              (G[26] = et),
              (G[27] = E),
              (G[28] = U),
              (G[29] = q),
              (G[30] = ee),
              (G[31] = R))
            : (R = G[31])
          let ea = (0, o._U)(m.K, R),
            er = null != T
          G[32] !== er ? (($ = { enabled: er }), (G[32] = er), (G[33] = $)) : ($ = G[33])
          let eo = (0, o.Ul)(c.t, $)
          G[34] !== n || G[35] !== C || G[36] !== eo || G[37] !== P || G[38] !== T
            ? ((B = (e, t) => {
                let { composerController: a, mentionState: r } = e
                if (null == t && null != P) {
                  if ((a.clearSuggestion(r), !/^@ChatGPT(?=\s|$)/u.test(a.getText()))) {
                    let { view: e } = a
                    e.dispatch(e.state.tr.insertText("@ChatGPT ", 1))
                  }
                  ;(P(a.getText(), a.getPersistedText()), a.view.focus())
                  return
                }
                if (null == n || null == T || null == r.range) return
                a.insertMentionNodeFromAtMention(
                  a.view.state.schema.nodes.pageTaskMention,
                  { path: (0, f.P)({ id: crypto.randomUUID(), owner: n, ownerName: C, orbit: t }) },
                  r,
                )
                let o = (0, y.B6)(a.view),
                  l = eo?.find((e) => e.threadId === t?.threadId),
                  i = null == t || l?.isDefault !== !1 ? 0 : l.name.length - 3
                T(a.getText(), o + i, a.getPersistedText())
              }),
              (G[34] = n),
              (G[35] = C),
              (G[36] = eo),
              (G[37] = P),
              (G[38] = T),
              (G[39] = B))
            : (B = G[39])
          let el = B
          if (G[40] !== n || G[41] !== eo || G[42] !== el || G[43] !== K || G[44] !== P || G[45] !== T) {
            for (let e of ((F =
              null == T && null == P
                ? []
                : [
                    {
                      key: "page-comment-chatgpt",
                      type: "mention",
                      label: K.formatMessage({
                        id: "codex.page.commentTaskMention.suggestion",
                        defaultMessage: "ChatGPT",
                        description: "Starts a finite task that updates and resolves this Page comment",
                      }),
                      detail: null,
                      icon: d.A,
                      disabled: null == P && null == n,
                      insertMention: (e) => el(e),
                    },
                  ]),
            null == T ? [] : (eo ?? [])))
              F.push({
                key: `page-comment-orbit:${e.orbitId}`,
                type: "mention",
                label: e.name,
                detail: null,
                searchTerms: ["dot", "o", "orbit", e.name],
                iconElement: (0, a.jsx)(g.r, { className: "size-4", conversationId: e.threadId }),
                disabled: null == n,
                insertMention: (t) => el(t, { orbitId: e.orbitId, threadId: e.threadId }),
              })
            ;((G[40] = n), (G[41] = eo), (G[42] = el), (G[43] = K), (G[44] = P), (G[45] = T), (G[46] = F))
          } else F = G[46]
          let ei = J?.commentActor
          if (G[47] !== J?.collaborators || G[48] !== M || G[49] !== ea.picks || G[50] !== q) {
            let e, t
            ;(G[52] !== M ? ((e = M ?? []), (G[52] = M), (G[53] = e)) : (e = G[53]),
              G[54] !== J?.collaborators
                ? ((t = J?.collaborators.map(x)), (G[54] = J?.collaborators), (G[55] = t))
                : (t = G[55]),
              (V = [...(0, h.fC)(q), ...e, t, ...ea.picks]),
              (G[47] = J?.collaborators),
              (G[48] = M),
              (G[49] = ea.picks),
              (G[50] = q),
              (G[51] = V))
          } else V = G[51]
          return (
            G[56] !== ea.isError || G[57] !== ea.isLoading
              ? ((W = { peopleError: ea.isError, peopleLoading: ea.isLoading }),
                (G[56] = ea.isError),
                (G[57] = ea.isLoading),
                (G[58] = W))
              : (W = G[58]),
            G[59] !== Q ||
            G[60] !== E ||
            G[61] !== ea.mentionContext ||
            G[62] !== U ||
            G[63] !== V ||
            G[64] !== W ||
            G[65] !== ei ||
            G[66] !== F
              ? ((H = (0, a.jsx)(p.I, {
                  ...U,
                  pageId: E,
                  currentViewer: ei,
                  contextualPicks: V,
                  mentionContext: ea.mentionContext,
                  peopleEnabled: Q,
                  peopleStatus: W,
                  onMention: b,
                  leadingItems: F,
                  prioritizeLeadingItems: !0,
                  rankingContext: "page",
                })),
                (G[59] = Q),
                (G[60] = E),
                (G[61] = ea.mentionContext),
                (G[62] = U),
                (G[63] = V),
                (G[64] = W),
                (G[65] = ei),
                (G[66] = F),
                (G[67] = H))
              : (H = G[67]),
            H
          )
        },
      },
    )
  },
  N5hd(e, t, n) {
    n.d(t, { _: () => ej })
    var a = n("ABep"),
      r = n("QosV"),
      o = n("slpy")
    let l = (0, n("nkTT").a)({
      name: "clock-arrow-rotate-counterclockwise-light-12",
      canvas: {
        width: 12,
        height: 12,
        viewBox: "0 0 12 12",
        frame: { x: 0, y: 0, width: 12, height: 12 },
        inkBounds: { x: 1.224609, y: 1.224609, width: 9.550781, height: 9.550781 },
        visualBounds: { x: 1.224609, y: 1.224609, width: 9.550781, height: 9.550781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.224609, y: 1.224609, width: 9.550781, height: 9.550781 },
        center: { x: 6, y: 6 },
        insets: { top: 1.224609, right: 1.22461, bottom: 1.22461, left: 1.224609 },
        anchors: { frame: { x: 6, y: 6 }, ink: { x: 6, y: 6 }, foreground: { x: 6, y: 6 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6 1.22461C8.63715 1.22462 10.7754 3.36284 10.7754 6C10.7754 8.63716 8.63715 10.7754 6 10.7754C3.72703 10.7754 1.82628 9.18706 1.34375 7.06055C1.29494 6.84524 1.4293 6.63105 1.64453 6.58203C1.85996 6.53315 2.07415 6.66836 2.12305 6.88379C2.52471 8.65392 4.10877 9.97461 6 9.97461C8.19533 9.9746 9.97461 8.19533 9.97461 6C9.97461 3.80467 8.19533 2.0254 6 2.02539C4.47703 2.02539 3.15503 2.8824 2.4873 4.1416H3.56934C3.79025 4.1416 3.96973 4.32108 3.96973 4.54199C3.96973 4.76291 3.79025 4.94238 3.56934 4.94238H1.625C1.40409 4.94238 1.22461 4.76291 1.22461 4.54199V2.35449C1.22461 2.13358 1.40409 1.9541 1.625 1.9541C1.84591 1.9541 2.02539 2.13358 2.02539 2.35449V3.35547C2.88092 2.07214 4.34082 1.22461 6 1.22461Z" fill="currentColor"/> <path d="M6 3.16895C6.22073 3.16916 6.40039 3.34855 6.40039 3.56934V6C6.40036 6.10595 6.35807 6.20823 6.2832 6.2832L5.06836 7.49805C4.91222 7.65419 4.65818 7.65406 4.50195 7.49805C4.34601 7.34193 4.34612 7.0888 4.50195 6.93262L5.60059 5.83398V3.56934C5.60059 3.34857 5.77929 3.16918 6 3.16895Z" fill="currentColor"/>',
    })
    var i = n("on57"),
      s = n("zTeN"),
      d = n("zd8w"),
      c = n("Wf1j"),
      u = n("oyxz"),
      p = n("Qgfj"),
      m = n("ygO2"),
      g = n("xs0e"),
      h = n("HOLv"),
      f = n("GO7r"),
      v = n("nzx4"),
      y = n("X3K1"),
      b = n("OQ5p"),
      x = n("UOwN"),
      w = n("zOWn"),
      I = n("Adh7"),
      _ = n("uAks"),
      k = n("jQst"),
      S = n("zJs4"),
      C = n("HgFd"),
      A = n("p5Yg"),
      j = n("XNvh"),
      M = n("EULo"),
      P = n("rS3J"),
      T = n("MX6A"),
      E = n("oQwr"),
      N = n("EXS8"),
      U = n("RQgn"),
      q = n("TxRk"),
      D = n("NyT3"),
      z = n("AAxy"),
      L = n("fEVS"),
      O = n("J7Vx"),
      R = n("FXi4"),
      $ = n("Xtjz"),
      B = n("Oe5x"),
      F = n("xMUP"),
      V = n("UXeX")
    function W(e) {
      let t,
        n,
        o,
        l,
        c,
        p,
        g,
        h,
        f,
        v,
        y,
        b,
        x,
        I,
        k = (0, r.c)(59),
        {
          expanded: S,
          commentThreadId: j,
          renderTaskMention: T,
          body: W,
          collapsedLines: Y,
          resolved: J,
          floatingLayout: ee,
          onExpand: et,
          onCollapse: en,
          findMatch: ea,
          viewer: er,
          searchQuery: eo,
          children: el,
        } = e,
        ei = void 0 !== ee && ee,
        es = void 0 === er ? null : er,
        { tokens: ed } = (0, B.bl)(W)
      ;(k[0] !== W || k[1] !== ea
        ? ((t = null == ea ? [] : (0, z.ft)([W])), (k[0] = W), (k[1] = ea), (k[2] = t))
        : (t = k[2]),
        k[3] !== t || k[4] !== es
          ? ((n = { sources: t, viewer: es }), (k[3] = t), (k[4] = es), (k[5] = n))
          : (n = k[5]))
      let ec = (0, s._U)(z.f9, n),
        eu = ea ?? (void 0 === eo ? "" : eo),
        ep = eu ? (0, F.Wo)(ed, eu, ec) : null,
        em = (0, d.useId)(),
        eg = (0, d.useRef)(null)
      k[6] !== Y ? ((o = { collapsedLineCount: Y, fallbackFontSizePx: 13 }), (k[6] = Y), (k[7] = o)) : (o = k[7])
      let { setTextMeasurementRef: eh, textMeasurement: ef } = (0, E.le)(o)
      k[8] !== eh
        ? ((l = (e) => {
            if (null == e) return
            let t = () => eh(e)
            return (
              A.Gt.read(t),
              () => {
                ;((0, A.WG)(t), eh(null))
              }
            )
          }),
          (k[8] = eh),
          (k[9] = l))
        : (l = k[9])
      let ev = l,
        ey =
          ef?.contentHeightPx != null && null != ef.collapsedHeightPx && ef.contentHeightPx > ef.collapsedHeightPx + 1,
        eb = !S && (null == ef || ey)
      ;(k[10] !== S || k[11] !== ei || k[12] !== ey || k[13] !== ef
        ? ((c = () => {
            let e = eg.current
            if (S || !ey || ei) return void e?.style.removeProperty("max-height")
            if (null == e || null == ef) return
            let { element: t, collapsedHeightPx: n } = ef
            if (null == n) return
            let a = 0,
              r = () => {
                e.style.maxHeight = `${Math.min(a, n)}px`
              },
              o = () => {
                if (0 === t.offsetHeight) return
                let e = t.getBoundingClientRect(),
                  o = e.height / t.offsetHeight,
                  l = e.top + n * o,
                  i = t.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_TEXT),
                  s = t.ownerDocument.createRange(),
                  d = Array.from(t.querySelectorAll("button, img, svg"), Z)
                for (let e = i.nextNode(); null != e; e = i.nextNode())
                  for (let t of (e.textContent ?? "").matchAll(/\S[^\r\n]*/gu))
                    (s.setStart(e, t.index),
                      s.setEnd(e, t.index + t[0].trimEnd().length),
                      d.push(...s.getClientRects()))
                for (let t of d) t.width > 0 && t.bottom <= l && (a = Math.max(a, (t.bottom - e.top) / o))
                A.Gt.render(r)
              }
            return (
              A.Gt.read(o),
              () => {
                ;((0, A.WG)(o), (0, A.WG)(r))
              }
            )
          }),
          (k[10] = S),
          (k[11] = ei),
          (k[12] = ey),
          (k[13] = ef),
          (k[14] = c))
        : (c = k[14]),
        k[15] !== W || k[16] !== S || k[17] !== ei || k[18] !== ey || k[19] !== ef
          ? ((p = [W, S, ei, ey, ef]), (k[15] = W), (k[16] = S), (k[17] = ei), (k[18] = ey), (k[19] = ef), (k[20] = p))
          : (p = k[20]),
        (0, d.useLayoutEffect)(c, p))
      let ex = J && "text-secondary"
      k[21] !== ex
        ? ((g = (0, i.A)("flex flex-col gap-2 text-base leading-normal in-data-[comment-layout=floating]:gap-0", ex)),
          (k[21] = ex),
          (k[22] = g))
        : (g = k[22])
      let ew = !S && "preview-vkcaVA",
        eI = !S && 6 === Y && "standalone-G7V3m5"
      k[23] !== ew || k[24] !== eI ? ((h = (0, i.A)(ew, eI)), (k[23] = ew), (k[24] = eI), (k[25] = h)) : (h = k[25])
      let e_ = S && null == en ? void 0 : ev,
        ek = eb ? "" : void 0
      return (
        k[26] !== eb || k[27] !== et
          ? ((f = (e) => {
              e.target !== e.currentTarget &&
                eb &&
                ((0, R._)(e.currentTarget, () => et?.()), e.target.scrollIntoView({ block: "nearest" }))
            }),
            (k[26] = eb),
            (k[27] = et),
            (k[28] = f))
          : (f = k[28]),
        k[29] !== el ||
        k[30] !== j ||
        k[31] !== ea ||
        k[32] !== T ||
        k[33] !== J ||
        k[34] !== ep ||
        k[35] !== ec ||
        k[36] !== ed ||
        k[37] !== es
          ? ((v =
              el ??
              (0, a.jsx)(N.T, {
                className: (0, i.A)(
                  V.A.PageCommentMentions,
                  "whitespace-pre-wrap in-data-[comment-layout=floating]:whitespace-normal",
                ),
                textStyle: { kind: "inherit" },
                tokens: ed,
                decorateCode: (e, t, n) => (0, O.W)(e, t, n, ep?.get(e), null != ea),
                renderText: (e, t, n, r) => {
                  let o = ep?.get(n),
                    l = (e, t) =>
                      null == o
                        ? e
                        : (0, a.jsx)($.v, {
                            activeFindMatch: null != ea,
                            ranges: o,
                            offset: void 0 === t ? 0 : t,
                            text: e,
                          })
                  if (!r) return (0, a.jsx)(d.Fragment, { children: l((0, U.C)(e)) }, t)
                  let i = [...(0, C.iK)(e).map(X), ...(0, L.FD)(e).map(Q), ...(0, M.C4)(e).filter(K).map(G)].sort(H),
                    s = 0
                  return (0, a.jsxs)(
                    d.Fragment,
                    {
                      children: [
                        i.map((t, n) => {
                          let r,
                            c = (0, U.C)(e.slice(0 === n ? 0 : i[n - 1].to, t.from)),
                            u = l(c, s),
                            p = s + c.length
                          return (
                            (s = p + (0, B.rZ)(e.slice(t.from, t.to), ec).length),
                            (r =
                              "task" === t.kind
                                ? (T?.({ mention: t, commentThreadId: j, resolved: J }) ??
                                  (0, a.jsx)(q.q3, {
                                    tone: "neutral",
                                    icon: null == t.orbit ? void 0 : (0, a.jsx)(w.r, { conversationId: void 0 }),
                                    children: (0, a.jsx)(_.a, { ...t, viewer: es }),
                                  }))
                                : "plugin" === t.kind
                                  ? (0, a.jsx)(q.q3, { dataAttributes: (0, P.LL)(t), children: l(t.label, p) })
                                  : (0, a.jsx)(D.f, {
                                      accountUserId: t.accountUserId,
                                      label: t.label,
                                      children: l(t.label, s - t.label.length),
                                    })),
                            null != ea &&
                              o?.some((e) => {
                                let { start: n, end: a } = e
                                return (
                                  n < s &&
                                  a > p &&
                                  ("task" === t.kind || ("person" === t.kind && a <= s - t.label.length))
                                )
                              }) &&
                              (r = (0, a.jsx)("mark", {
                                className: "rounded-2xs text-default",
                                "data-page-find-match": !0,
                                "data-active": !0,
                                children: r,
                              })),
                            (0, a.jsxs)(d.Fragment, { children: [u, r] }, `${t.kind}:${t.from}`)
                          )
                        }),
                        l((0, U.C)(e.slice(i.at(-1)?.to ?? 0)), s),
                      ],
                    },
                    t,
                  )
                },
              })),
            (k[29] = el),
            (k[30] = j),
            (k[31] = ea),
            (k[32] = T),
            (k[33] = J),
            (k[34] = ep),
            (k[35] = ec),
            (k[36] = ed),
            (k[37] = es),
            (k[38] = v))
          : (v = k[38]),
        k[39] !== e_ || k[40] !== ek || k[41] !== f || k[42] !== v
          ? ((y = (0, a.jsx)("div", {
              ref: e_,
              className: "break-words outline-none",
              "data-page-comment-collapsed-body": ek,
              onFocusCapture: f,
              tabIndex: -1,
              children: v,
            })),
            (k[39] = e_),
            (k[40] = ek),
            (k[41] = f),
            (k[42] = v),
            (k[43] = y))
          : (y = k[43]),
        k[44] !== em || k[45] !== h || k[46] !== y
          ? ((b = (0, a.jsx)("div", { id: em, ref: eg, className: h, children: y })),
            (k[44] = em),
            (k[45] = h),
            (k[46] = y),
            (k[47] = b))
          : (b = k[47]),
        k[48] !== S || k[49] !== em || k[50] !== en || k[51] !== et || k[52] !== ey || k[53] !== ef?.element
          ? ((x =
              ey && (!S || null != en)
                ? (0, a.jsx)("div", {
                    className: "text-secondary",
                    children: (0, a.jsxs)(m.$, {
                      className:
                        "min-h-6 text-sm in-data-[comment-layout=floating]:text-[13px] in-data-[comment-layout=floating]:leading-6 in-data-[comment-layout=floating]:hover:underline",
                      "aria-controls": em,
                      "aria-expanded": S,
                      color: "ghostMuted",
                      size: "inline",
                      onClick: (e) => {
                        S
                          ? (0, R._)(e.currentTarget, () => en?.())
                          : ((0, R._)(e.currentTarget, () => et?.()), ef?.element.focus({ preventScroll: !0 }))
                      },
                      children: [
                        null == en
                          ? (0, a.jsx)(u.A, {
                              id: "codex.space.page.comments.more",
                              defaultMessage: "Read more",
                              description:
                                "Expands the clipped text of one Page comment or reply to show its full message",
                            })
                          : null,
                        null == en || S
                          ? null
                          : (0, a.jsx)(u.A, {
                              id: "codex.space.page.comments.showMore",
                              defaultMessage: "Show more",
                              description:
                                "Expands the clipped text of one Page comment or reply to show its full message",
                            }),
                        null != en && S
                          ? (0, a.jsx)(u.A, {
                              id: "codex.space.page.comments.showLess",
                              defaultMessage: "Show less",
                              description:
                                "Collapses the full text of one Page comment or reply back to a short preview",
                            })
                          : null,
                      ],
                    }),
                  })
                : null),
            (k[48] = S),
            (k[49] = em),
            (k[50] = en),
            (k[51] = et),
            (k[52] = ey),
            (k[53] = ef?.element),
            (k[54] = x))
          : (x = k[54]),
        k[55] !== g || k[56] !== b || k[57] !== x
          ? ((I = (0, a.jsxs)("div", { className: g, children: [b, x] })),
            (k[55] = g),
            (k[56] = b),
            (k[57] = x),
            (k[58] = I))
          : (I = k[58]),
        I
      )
    }
    function H(e, t) {
      return e.from - t.from
    }
    function G(e) {
      return { kind: "plugin", from: e.start, to: e.end, label: (0, T.Nb)(e.label), href: (0, M.gh)(e.path) }
    }
    function K(e) {
      return (0, j.$U)(e.path)
    }
    function Q(e) {
      return { ...e, kind: "task" }
    }
    function X(e) {
      return { ...e, kind: "person" }
    }
    function Z(e) {
      return e.getBoundingClientRect()
    }
    var Y = n("JNtf"),
      J = n("mUDD"),
      ee = n("bqtn"),
      et = n("M14h"),
      en = n("OWtl"),
      ea = n("akkX")
    function er(e) {
      let t,
        n,
        l,
        i,
        p,
        g,
        h,
        v,
        y,
        b,
        x,
        w,
        I,
        _,
        S,
        C,
        A,
        j,
        M,
        P,
        T,
        E = (0, r.c)(59),
        {
          pageId: N,
          threadId: U,
          message: q,
          editing: D,
          floatingLayout: z,
          onEdit: L,
          onDelete: O,
          onDeleteThread: R,
          onMenuOpenChange: $,
        } = e,
        B = void 0 !== z && z,
        F = (0, s.gh)(en.u),
        V = (0, c.A)()
      E[0] !== V
        ? ((t = V.formatMessage({
            id: "codex.space.page.comments.actions",
            defaultMessage: "Comment actions",
            description: "Opens the menu to copy a link, edit, or delete a Page comment",
          })),
          (E[0] = V),
          (E[1] = t))
        : (t = E[1])
      let W = t,
        [H, G] = (0, d.useState)(null)
      if ("thread" === H) {
        let e
        ;(E[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(u.A, {
              id: "codex.space.page.comments.confirmDeleteThread",
              defaultMessage: "Delete this thread?",
              description: "Confirmation title for deleting an entire Page comment thread",
            })),
            (E[2] = e))
          : (e = E[2]),
          (n = e))
      } else {
        let e
        ;(E[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(u.A, {
              id: "codex.space.page.comments.confirmDeleteMessage",
              defaultMessage: "Delete this comment?",
              description: "Confirmation title for replacing a Page comment with a tombstone",
            })),
            (E[3] = e))
          : (e = E[3]),
          (n = e))
      }
      ;(E[4] !== D
        ? ((l = (e) => {
            D && e.preventDefault()
          }),
          (E[4] = D),
          (E[5] = l))
        : (l = E[5]),
        E[6] === Symbol.for("react.memo_cache_sentinel") ? ((i = (0, a.jsx)(f.l0Y, {})), (E[6] = i)) : (i = E[6]),
        E[7] !== W || E[8] !== B
          ? ((p = (0, a.jsx)(k.B, { floatingLayout: B, color: "ghost", "aria-label": W, children: i })),
            (E[7] = W),
            (E[8] = B),
            (E[9] = p))
          : (p = E[9]),
        E[10] !== W || E[11] !== p
          ? ((g = (0, a.jsx)(o.m, { side: "top", content: W, children: p })), (E[10] = W), (E[11] = p), (E[12] = g))
          : (g = E[12]),
        E[13] !== q || E[14] !== N || E[15] !== F || E[16] !== U
          ? ((h =
              null != N && null == q.deletedAt
                ? (0, a.jsx)(ee.ms.Item, {
                    onSelect: () => {
                      let e = F.get(et.Xw, N)
                      ;(0, et.LE)(F, e, void 0, { comment: { threadId: U, messageId: q.id } }).then((t) => {
                        let n = F.get(et.Xw, N)
                        t && n.accountId === e.accountId && n.userId === e.userId && (0, ea.o)(F)
                      })
                    },
                    children: (0, a.jsx)(u.A, {
                      id: "codex.space.page.comments.copyLink",
                      defaultMessage: "Copy link",
                      description: "Copies a link that opens this specific Page comment without changing access",
                    }),
                  })
                : null),
            (E[13] = q),
            (E[14] = N),
            (E[15] = F),
            (E[16] = U),
            (E[17] = h))
          : (h = E[17]),
        E[18] !== D || E[19] !== q || E[20] !== L
          ? ((v =
              null != L && null == q.deletedAt
                ? (0, a.jsx)(ee.ms.Item, {
                    disabled: D,
                    onSelect: L,
                    children: (0, a.jsx)(u.A, {
                      id: "codex.space.page.comments.edit",
                      defaultMessage: "Edit comment",
                      description: "Edits the caller's own Page comment",
                    }),
                  })
                : null),
            (E[18] = D),
            (E[19] = q),
            (E[20] = L),
            (E[21] = v))
          : (v = E[21]),
        E[22] !== q || E[23] !== O
          ? ((y =
              null != O && null == q.deletedAt
                ? (0, a.jsx)(ee.ms.Item, {
                    onSelect: () => G("message"),
                    children: (0, a.jsx)(u.A, {
                      id: "codex.space.page.comments.deleteMessage",
                      defaultMessage: "Delete comment",
                      description: "Replaces the caller's own Page comment with a tombstone, retaining replies",
                    }),
                  })
                : null),
            (E[22] = q),
            (E[23] = O),
            (E[24] = y))
          : (y = E[24]),
        E[25] !== R
          ? ((b =
              null != R
                ? (0, a.jsx)(ee.ms.Item, {
                    onSelect: () => G("thread"),
                    children: (0, a.jsx)(u.A, {
                      id: "codex.space.page.comments.deleteThread",
                      defaultMessage: "Delete thread",
                      description: "Removes a Page discussion containing only the caller's messages",
                    }),
                  })
                : null),
            (E[25] = R),
            (E[26] = b))
          : (b = E[26]),
        E[27] !== $ || E[28] !== b || E[29] !== l || E[30] !== g || E[31] !== h || E[32] !== v || E[33] !== y
          ? ((x = (0, a.jsxs)(ee.Ab, {
              align: "end",
              contentWidth: "menu",
              onOpenChange: $,
              onCloseAutoFocus: l,
              triggerButton: g,
              children: [h, v, y, b],
            })),
            (E[27] = $),
            (E[28] = b),
            (E[29] = l),
            (E[30] = g),
            (E[31] = h),
            (E[32] = v),
            (E[33] = y),
            (E[34] = x))
          : (x = E[34]))
      let K = null != H && ("thread" !== H || null != R)
      return (
        E[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (e) => {
              e || G(null)
            }),
            (E[35] = w))
          : (w = E[35]),
        E[36] !== H || E[37] !== O || E[38] !== R
          ? ((I = (e) => {
              ;(e.preventDefault(), ("thread" === H ? R?.() : O?.()) && G(null))
            }),
            (E[36] = H),
            (E[37] = O),
            (E[38] = R),
            (E[39] = I))
          : (I = E[39]),
        E[40] !== n ? ((_ = (0, a.jsx)(Y.L3, { children: n })), (E[40] = n), (E[41] = _)) : (_ = E[41]),
        E[42] !== H
          ? ((S = (0, a.jsx)(Y.rr, {
              children:
                "thread" === H
                  ? (0, a.jsx)(u.A, {
                      id: "codex.space.page.comments.deleteThreadDescription",
                      defaultMessage: "This removes the thread and all its messages",
                      description:
                        "Explains the effect of deleting a Page thread containing only the caller's messages",
                    })
                  : (0, a.jsx)(u.A, {
                      id: "codex.space.page.comments.deleteMessageDescription",
                      defaultMessage: "The comment text will be removed, but replies will remain",
                      description: "Explains that deleting a Page message preserves its thread and replies",
                    }),
            })),
            (E[42] = H),
            (E[43] = S))
          : (S = E[43]),
        E[44] !== _ || E[45] !== S
          ? ((C = (0, a.jsx)(J.OO, { children: (0, a.jsx)(J.c7, { title: _, subtitle: S }) })),
            (E[44] = _),
            (E[45] = S),
            (E[46] = C))
          : (C = E[46]),
        E[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, a.jsx)(m.$, {
              color: "secondary",
              onClick: () => G(null),
              children: (0, a.jsx)(u.A, {
                id: "codex.space.page.comments.cancelEdit",
                defaultMessage: "Cancel",
                description: "Cancels editing or deleting a Page comment",
              }),
            })),
            (E[47] = A))
          : (A = E[47]),
        E[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, a.jsxs)(J.Es, {
              children: [
                A,
                (0, a.jsx)(m.$, {
                  type: "submit",
                  color: "danger",
                  children: (0, a.jsx)(u.A, {
                    id: "codex.space.page.comments.confirmDelete",
                    defaultMessage: "Delete",
                    description: "Confirms deletion of a Page comment or thread",
                  }),
                }),
              ],
            })),
            (E[48] = j))
          : (j = E[48]),
        E[49] !== I || E[50] !== C || E[51] !== U
          ? ((M = (0, a.jsxs)(J.R4, { as: "form", "data-page-comment-thread-id": U, onSubmit: I, children: [C, j] })),
            (E[49] = I),
            (E[50] = C),
            (E[51] = U),
            (E[52] = M))
          : (M = E[52]),
        E[53] !== K || E[54] !== M
          ? ((P = (0, a.jsx)(Y.lG, { open: K, onOpenChange: w, children: M })), (E[53] = K), (E[54] = M), (E[55] = P))
          : (P = E[55]),
        E[56] !== x || E[57] !== P
          ? ((T = (0, a.jsxs)(a.Fragment, { children: [x, P] })), (E[56] = x), (E[57] = P), (E[58] = T))
          : (T = E[58]),
        T
      )
    }
    var eo = n("zLIa"),
      el = n("zstr"),
      ei = n("tdE2"),
      es = n("eiyF"),
      ed = n("xEDl")
    function ec(e) {
      let t,
        n = (0, r.c)(2)
      return (
        n[0] !== e
          ? ((t = e.unifiedComments ? (0, a.jsx)(em, { ...e }) : (0, a.jsx)(eu, { ...e })), (n[0] = e), (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function eu(e) {
      let t,
        n,
        o,
        l,
        i,
        s,
        p,
        g,
        h,
        f,
        v,
        y = (0, r.c)(42),
        {
          inactive: b,
          body: x,
          onBodyChange: w,
          pageId: I,
          presence: _,
          comments: k,
          thread: S,
          taskOwner: A,
          taskOwnerName: j,
          onCancel: M,
          onSave: P,
          renderTaskComposer: T,
        } = e,
        E = void 0 !== b && b,
        N = (0, c.A)(),
        [U, q] = (0, d.useState)(!1),
        [D, z] = (0, d.useState)()
      y[0] !== x || y[1] !== w || y[2] !== M || y[3] !== T || y[4] !== D
        ? ((t = T?.(
            x,
            M,
            (e, t) => {
              ;(w(e, t), q(!0))
            },
            D,
          )),
          (y[0] = x),
          (y[1] = w),
          (y[2] = M),
          (y[3] = T),
          (y[4] = D),
          (y[5] = t))
        : (t = y[5])
      let L = t
      if (null != L) return L
      y[6] !== x ? ((n = "" !== x.trim() && (0, C.U)(x.trim())), (y[6] = x), (y[7] = n)) : (n = y[7])
      let O = n
      ;(y[8] !== x || y[9] !== P || y[10] !== O
        ? ((o = (e) => {
            ;(e.preventDefault(), O && P(x))
          }),
          (y[8] = x),
          (y[9] = P),
          (y[10] = O),
          (y[11] = o))
        : (o = y[11]),
        y[12] !== M
          ? ((l = (e) => {
              !e.nativeEvent.isComposing &&
                ("Escape" === e.key
                  ? (e.preventDefault(), e.stopPropagation(), M())
                  : "Enter" === e.key &&
                    (e.metaKey || e.ctrlKey) &&
                    (e.preventDefault(), e.currentTarget.requestSubmit()))
            }),
            (y[12] = M),
            (y[13] = l))
          : (l = y[13]),
        y[14] !== x ||
        y[15] !== k ||
        y[16] !== E ||
        y[17] !== N ||
        y[18] !== w ||
        y[19] !== M ||
        y[20] !== I ||
        y[21] !== _ ||
        y[22] !== T ||
        y[23] !== U ||
        y[24] !== A ||
        y[25] !== j ||
        y[26] !== S
          ? ((i =
              null == I
                ? (0, a.jsx)(eo.TM, {
                    rows: 3,
                    value: x,
                    onChange: (e) => w(e.target.value),
                    "aria-label": N.formatMessage({
                      id: "codex.space.page.comments.editBody",
                      defaultMessage: "Comment text",
                      description: "Accessible label for editing a Page comment's text",
                    }),
                  })
                : (0, a.jsx)(el.m, {
                    disabled: E,
                    pageId: I,
                    presence: _,
                    comments: k,
                    contextualPicks: (0, ei.fC)(S),
                    thread: S,
                    taskOwner: A,
                    taskOwnerName: j,
                    autoFocus: !1,
                    submitOnEnter: !1,
                    initialSelection: U ? 0 : void 0,
                    body: x,
                    onBodyChange: w,
                    onCancel: M,
                    onChatGPT:
                      null == T
                        ? void 0
                        : (e, t) => {
                            ;(z(t), w(e))
                          },
                    placeholder: "",
                    ariaLabel: N.formatMessage({
                      id: "codex.space.page.comments.editBody",
                      defaultMessage: "Comment text",
                      description: "Accessible label for editing a Page comment's text",
                    }),
                  })),
            (y[14] = x),
            (y[15] = k),
            (y[16] = E),
            (y[17] = N),
            (y[18] = w),
            (y[19] = M),
            (y[20] = I),
            (y[21] = _),
            (y[22] = T),
            (y[23] = U),
            (y[24] = A),
            (y[25] = j),
            (y[26] = S),
            (y[27] = i))
          : (i = y[27]),
        y[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(u.A, {
              id: "codex.space.page.comments.cancelEdit",
              defaultMessage: "Cancel",
              description: "Cancels editing or deleting a Page comment",
            })),
            (y[28] = s))
          : (s = y[28]),
        y[29] !== M
          ? ((p = (0, a.jsx)(m.$, { color: "secondary", size: "compact", onClick: M, children: s })),
            (y[29] = M),
            (y[30] = p))
          : (p = y[30]))
      let R = !O
      return (
        y[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, a.jsx)(u.A, {
              id: "codex.space.page.comments.saveEdit",
              defaultMessage: "Save",
              description: "Saves edits to the caller's Page comment",
            })),
            (y[31] = g))
          : (g = y[31]),
        y[32] !== R
          ? ((h = (0, a.jsx)(m.$, { type: "submit", size: "compact", disabled: R, children: g })),
            (y[32] = R),
            (y[33] = h))
          : (h = y[33]),
        y[34] !== h || y[35] !== p
          ? ((f = (0, a.jsxs)("div", { className: "flex justify-end gap-2", children: [p, h] })),
            (y[34] = h),
            (y[35] = p),
            (y[36] = f))
          : (f = y[36]),
        y[37] !== f || y[38] !== o || y[39] !== l || y[40] !== i
          ? ((v = (0, a.jsxs)("form", {
              ref: ep,
              className: "relative flex min-w-0 flex-col gap-2",
              onSubmit: o,
              onKeyDown: l,
              children: [i, f],
            })),
            (y[37] = f),
            (y[38] = o),
            (y[39] = l),
            (y[40] = i),
            (y[41] = v))
          : (v = y[41]),
        v
      )
    }
    function ep(e) {
      let t = e?.querySelector("textarea"),
        n = e?.closest("[data-page-comment-sidebar-scroll]")
      ;(t?.focus({ preventScroll: null != n }), null != t && null != n && (0, ed.K)(n, t))
    }
    function em(e) {
      let t,
        n = (0, r.c)(18),
        {
          inactive: o,
          messageId: l,
          initialBody: i,
          body: s,
          persistedBody: c,
          onBodyChange: u,
          pageId: p,
          presence: m,
          comments: g,
          thread: h,
          taskOwner: f,
          taskOwnerName: v,
          onCancel: y,
          onSave: b,
          renderTaskComposer: x,
        } = e,
        w = void 0 !== o && o,
        [I, _] = (0, d.useState)(w)
      w && !I && _(!0)
      let k = !I,
        S = !w,
        C = !w,
        A = f ?? null,
        j = v ?? ""
      return (
        n[0] !== s ||
        n[1] !== g ||
        n[2] !== i ||
        n[3] !== l ||
        n[4] !== u ||
        n[5] !== y ||
        n[6] !== b ||
        n[7] !== p ||
        n[8] !== c ||
        n[9] !== m ||
        n[10] !== x ||
        n[11] !== k ||
        n[12] !== S ||
        n[13] !== C ||
        n[14] !== A ||
        n[15] !== j ||
        n[16] !== h
          ? ((t = (0, a.jsx)(es.z, {
              autoFocus: k,
              isVisible: S,
              canSubmit: C,
              pageId: p,
              presence: m,
              comments: g,
              thread: h,
              authorAccountUserId: A,
              authorName: j,
              isReply: !1,
              editMessageId: l,
              initialBody: i,
              unifiedComments: !0,
              body: s,
              persistedBody: c,
              onBodyChange: u,
              onCancel: y,
              onSubmit: b,
              renderTaskComposer: x,
            })),
            (n[0] = s),
            (n[1] = g),
            (n[2] = i),
            (n[3] = l),
            (n[4] = u),
            (n[5] = y),
            (n[6] = b),
            (n[7] = p),
            (n[8] = c),
            (n[9] = m),
            (n[10] = x),
            (n[11] = k),
            (n[12] = S),
            (n[13] = C),
            (n[14] = A),
            (n[15] = j),
            (n[16] = h),
            (n[17] = t))
          : (t = n[17]),
        t
      )
    }
    function eg(e) {
      let t,
        n,
        o,
        l,
        s,
        d,
        c,
        u,
        p,
        m,
        g,
        h,
        f = (0, r.c)(25)
      f[0] !== e
        ? (({ avatar: t, header: l, children: n, hasConnector: o, hasPrevious: d, ...s } = e),
          (f[0] = e),
          (f[1] = t),
          (f[2] = n),
          (f[3] = o),
          (f[4] = l),
          (f[5] = s),
          (f[6] = d))
        : ((t = f[1]), (n = f[2]), (o = f[3]), (l = f[4]), (s = f[5]), (d = f[6]))
      let v = void 0 !== d && d,
        y = v && "in-data-[comment-layout=floating]:mt-3.5"
      return (
        f[7] !== y
          ? ((c = (0, i.A)(
              "group/message relative flex items-start gap-2.5 ps-4 pe-2 outline-none in-data-[comment-layout=floating]:gap-2 in-data-[comment-layout=floating]:px-0",
              y,
            )),
            (f[7] = y),
            (f[8] = c))
          : (c = f[8]),
        f[9] !== v
          ? ((u =
              v &&
              (0, a.jsx)("span", {
                "aria-hidden": !0,
                className:
                  "pointer-events-none absolute start-1/2 top-0 h-2.5 w-px -translate-x-1/2 rounded-full bg-token-border-heavy in-data-[comment-layout=floating]:hidden",
              })),
            (f[9] = v),
            (f[10] = u))
          : (u = f[10]),
        f[11] !== o
          ? ((p =
              o &&
              (0, a.jsx)("span", {
                "aria-hidden": !0,
                className:
                  "pointer-events-none absolute start-1/2 top-11.5 bottom-0 w-px -translate-x-1/2 rounded-full bg-token-border-heavy in-data-[comment-layout=floating]:top-7 in-data-[comment-layout=floating]:-bottom-2.5 in-data-[comment-layout=floating]:bg-border",
              })),
            (f[11] = o),
            (f[12] = p))
          : (p = f[12]),
        f[13] !== t || f[14] !== u || f[15] !== p
          ? ((m = (0, a.jsxs)("div", {
              className: "relative shrink-0 self-stretch pt-4 in-data-[comment-layout=floating]:pt-0",
              children: [u, t, p],
            })),
            (f[13] = t),
            (f[14] = u),
            (f[15] = p),
            (f[16] = m))
          : (m = f[16]),
        f[17] !== n || f[18] !== l
          ? ((g = (0, a.jsxs)("div", {
              className: "flex min-w-0 flex-1 flex-col py-3 in-data-[comment-layout=floating]:py-0",
              children: [l, n],
            })),
            (f[17] = n),
            (f[18] = l),
            (f[19] = g))
          : (g = f[19]),
        f[20] !== s || f[21] !== c || f[22] !== m || f[23] !== g
          ? ((h = (0, a.jsxs)("div", { ...s, className: c, children: [m, g] })),
            (f[20] = s),
            (f[21] = c),
            (f[22] = m),
            (f[23] = g),
            (f[24] = h))
          : (h = f[24]),
        h
      )
    }
    var eh = n("OMIV"),
      ef = n("VAbi")
    let ev = ["👍", "❤️", "🎉", "👀", "✅"],
      ey = [...ev, "➕"]
    function eb(e) {
      let t,
        n,
        o,
        l,
        i,
        u,
        p,
        g = (0, r.c)(27),
        { message: h, onSelect: v } = e,
        y = (0, s._U)(eh.JW, "618904801"),
        b = (0, c.A)(),
        [x, w] = (0, d.useState)(!1)
      ;(g[0] !== h.reactions ? ((t = h.reactions.filter(ew).map(ex)), (g[0] = h.reactions), (g[1] = t)) : (t = g[1]),
        g[2] !== b ? ((n = (e) => b.formatMessage(eI.reaction, { emoji: e })), (g[2] = b), (g[3] = n)) : (n = g[3]),
        g[4] !== t || g[5] !== n
          ? ((o = { selectedEmojis: t, getEmojiLabel: n }), (g[4] = t), (g[5] = n), (g[6] = o))
          : (o = g[6]))
      let I = o
      g[7] !== v
        ? ((l = (e) => {
            "emoji" === e.kind && v(e.value)
          }),
          (g[7] = v),
          (g[8] = l))
        : (l = g[8])
      let _ = l
      if (!y) {
        let e, t
        return (
          g[9] !== I ? ((e = { emoji: { ...I, allowedEmojis: ev } }), (g[9] = I), (g[10] = e)) : (e = g[10]),
          g[11] !== _ || g[12] !== e
            ? ((t = (0, a.jsx)(ef.T, { layout: "compact", capabilities: e, showSearch: !1, onSelect: _ })),
              (g[11] = _),
              (g[12] = e),
              (g[13] = t))
            : (t = g[13]),
          t
        )
      }
      let k = x ? "grid" : "compact",
        S = x ? void 0 : ey
      ;(g[14] !== I || g[15] !== S
        ? ((i = { emoji: { ...I, allowedEmojis: S } }), (g[14] = I), (g[15] = S), (g[16] = i))
        : (i = g[16]),
        g[17] !== x || g[18] !== b
          ? ((u =
              !x &&
              (0, a.jsx)(m.$, {
                "aria-label": b.formatMessage(eI.moreEmojis),
                "aria-expanded": x,
                color: "ghost",
                size: "iconCircleLg",
                onClick: () => w(!0),
                children: (0, a.jsx)(f.l0Y, {}),
              })),
            (g[17] = x),
            (g[18] = b),
            (g[19] = u))
          : (u = g[19]))
      let C = x ? 360 : 302
      return (
        g[20] !== x || g[21] !== _ || g[22] !== k || g[23] !== i || g[24] !== u || g[25] !== C
          ? ((p = (0, a.jsx)(ef.T, {
              layout: k,
              compactSize: "small",
              capabilities: i,
              showSearch: x,
              trailing: u,
              width: C,
              onSelect: _,
            })),
            (g[20] = x),
            (g[21] = _),
            (g[22] = k),
            (g[23] = i),
            (g[24] = u),
            (g[25] = C),
            (g[26] = p))
          : (p = g[26]),
        p
      )
    }
    function ex(e) {
      return e.emoji
    }
    function ew(e) {
      return e.reactedByMe
    }
    let eI = (0, p.YK)({
      reaction: {
        id: "codex.space.page.comments.reaction",
        defaultMessage: "{emoji} reaction",
        description: "Accessible label for toggling an emoji reaction on a shared Page comment",
      },
      moreEmojis: {
        id: "codex.space.page.comments.moreEmojis",
        defaultMessage: "More emojis",
        description: "Accessible label for expanding the full comment reaction emoji catalog",
      },
    })
    var e_ = n("SZCv"),
      ek = n.n(e_),
      eS = n("rTPf")
    let eC = (0, s.i1)(
      en.u,
      (e, { get: t }) =>
        e.flatMap((e) => {
          let { id: n, displayName: a } = e,
            r = a === n ? t(eS.ik, n) : a
          return null == r && "agent" !== e.authorType ? [] : [{ ...e, displayName: r }]
        }),
      { isEqual: ek() },
    )
    function eA(e) {
      let t,
        n,
        o,
        l,
        i = (0, r.c)(23),
        { reaction: d, viewerId: c } = e
      i[0] !== d.reactors ? ((t = d.reactors.slice(0, 5)), (i[0] = d.reactors), (i[1] = t)) : (t = i[1])
      let m = (0, s._U)(eC, t)
      if (i[2] !== m || i[3] !== c) {
        let e
        ;(i[5] !== c
          ? ((e = (e, t) =>
              "agent" !== e.authorType
                ? e.displayName
                : "o" === e.agent_kind
                  ? (0, a.jsx)(
                      _._,
                      { ownerName: e.displayName ?? void 0, conversationId: c === e.id ? e.conversation_id : void 0 },
                      t,
                    )
                  : (0, a.jsx)(
                      u.A,
                      {
                        id: "codex.space.page.comments.reactionChatGPT",
                        defaultMessage: "ChatGPT",
                        description: "Name of the ChatGPT agent that reacted to a Page comment; keep the product name",
                      },
                      t,
                    )),
            (i[5] = c),
            (i[6] = e))
          : (e = i[6]),
          (n = m.map(e)),
          (i[2] = m),
          (i[3] = c),
          (i[4] = n))
      } else n = i[4]
      let g = n,
        h = d.count - g.length
      if (0 === g.length) {
        let e
        ;(i[7] !== d.count || i[8] !== d.emoji
          ? ((e = (0, a.jsx)(u.A, {
              id: "codex.space.page.comments.reactionCountWithEmoji",
              defaultMessage: "{emoji} {count, plural, one {# reaction} other {# reactions}}",
              description:
                "Tooltip identifying an emoji reaction and how many people used it on a shared Page comment when their names are unavailable",
              values: { emoji: d.emoji, count: d.count },
            })),
            (i[7] = d.count),
            (i[8] = d.emoji),
            (i[9] = e))
          : (e = i[9]),
          (o = e))
      } else if (h > 0) {
        let e, t
        ;(i[10] !== g ? ((e = (0, a.jsx)(p.dT, { value: g, type: "unit" })), (i[10] = g), (i[11] = e)) : (e = i[11]),
          i[12] !== d.emoji || i[13] !== h || i[14] !== e
            ? ((t = (0, a.jsx)(u.A, {
                id: "codex.space.page.comments.reactionPeopleWithOthers",
                defaultMessage: "{emoji} {people} and {remaining, plural, one {# other} other {# others}}",
                description:
                  "Tooltip for a shared Page comment reaction listing up to five people by name and counting the remaining reactors. {emoji} is the reaction symbol, {people} is a localized list of names, and {remaining} counts people whose names are unavailable or omitted to keep the tooltip short",
                values: { emoji: d.emoji, people: e, remaining: h },
              })),
              (i[12] = d.emoji),
              (i[13] = h),
              (i[14] = e),
              (i[15] = t))
            : (t = i[15]),
          (o = t))
      } else {
        let e, t
        ;(i[16] !== g ? ((e = (0, a.jsx)(p.dT, { value: g })), (i[16] = g), (i[17] = e)) : (e = i[17]),
          i[18] !== d.emoji || i[19] !== e
            ? ((t = (0, a.jsx)(u.A, {
                id: "codex.space.page.comments.reactionPeople",
                defaultMessage: "{emoji} {people}",
                description:
                  "Tooltip identifying an emoji reaction and the names of people who reacted to a shared Page comment",
                values: { emoji: d.emoji, people: e },
              })),
              (i[18] = d.emoji),
              (i[19] = e),
              (i[20] = t))
            : (t = i[20]),
          (o = t))
      }
      return (i[21] !== o ? ((l = (0, a.jsx)("span", { children: o })), (i[21] = o), (i[22] = l)) : (l = i[22]), l)
    }
    function ej(e) {
      let t,
        n,
        p,
        x,
        C,
        A,
        j,
        M,
        P,
        T,
        E,
        N,
        U,
        q,
        D,
        z,
        L,
        O,
        R,
        B,
        F,
        V,
        H,
        G,
        K,
        Q,
        X,
        Z,
        Y,
        J,
        ee = (0, r.c)(164),
        {
          targetRequestId: et,
          revealTarget: en,
          pageId: ea,
          presence: eo,
          comments: el,
          thread: ei,
          renderTaskMention: es,
          renderTaskComposer: eu,
          renderTaskStatus: ep,
          composeTask: em,
          onCloseTaskComposer: eh,
          threadId: ef,
          message: ev,
          findMatch: ey,
          searchQuery: ex,
          viewerId: ew,
          taskViewer: eI,
          resolved: e_,
          writable: ek,
          hasConnector: eS,
          hasPrevious: eC,
          floatingLayout: ej,
          unifiedComments: eT,
          collapsedLines: eE,
          expanded: eN,
          onExpand: eU,
          onCollapse: eq,
          action: eD,
          reactionPickerOpen: ez,
          onReactionPickerChange: eL,
          onReaction: eO,
          onSelect: eR,
          onEdit: e$,
          editDraft: eB,
          onDelete: eF,
          onDeleteThread: eV,
          authorPresentation: eW,
          bodyContent: eH,
        } = e,
        eG = void 0 !== em && em,
        eK = void 0 === ex ? "" : ex,
        eQ = void 0 === eI ? ew : eI,
        eX = void 0 !== ej && ej,
        eZ = void 0 !== eT && eT,
        eY = (0, d.useRef)(null),
        eJ = (0, d.useRef)(!1),
        [e0, e1] = (0, d.useState)(!1),
        [e2, e3] = (0, d.useState)(!1),
        e4 = (0, d.useRef)(null),
        [e5, e6] = (0, d.useState)(null)
      null != e5 && (null == e$ || null != ev.deletedAt) && e6(null)
      let e7 = null == eB ? e5 : eB.value,
        e8 = eB?.onChange ?? e6,
        e9 = null != e7 && null != e$ && null == ev.deletedAt,
        te = (e9 || eG) && null != e$,
        tt = eB?.onEditorMount
      ;(ee[0] !== tt || ee[1] !== te || ee[2] !== ef
        ? ((t = () => {
            if (te) return tt?.(ef)
          }),
          (n = [tt, te, ef]),
          (ee[0] = tt),
          (ee[1] = te),
          (ee[2] = ef),
          (ee[3] = t),
          (ee[4] = n))
        : ((t = ee[3]), (n = ee[4])),
        (0, d.useLayoutEffect)(t, n),
        ee[5] !== e8 || ee[6] !== eh
          ? ((p = () => {
              ;(e8(null), eh?.(), eY.current?.focus({ preventScroll: !0 }))
            }),
            (ee[5] = e8),
            (ee[6] = eh),
            (ee[7] = p))
          : (p = ee[7]))
      let tn = p
      ;(ee[8] !== en || ee[9] !== et
        ? ((C = () => {
            if (en && null != et && e4.current !== et) {
              let e = requestAnimationFrame(() => {
                e4.current = et
                let e = eY.current,
                  t = e?.closest("[data-page-comment-sidebar-scroll]")
                ;(null != e && null != t ? (0, ed.K)(t, e) : e?.scrollIntoView({ block: "nearest" }),
                  e?.focus({ preventScroll: !0 }))
              })
              return () => cancelAnimationFrame(e)
            }
          }),
          (x = [en, et]),
          (ee[8] = en),
          (ee[9] = et),
          (ee[10] = x),
          (ee[11] = C))
        : ((x = ee[10]), (C = ee[11])),
        (0, d.useLayoutEffect)(C, x))
      let ta = (0, c.A)(),
        tr = "agent" === ev.authorType,
        to = tr && "o" === ev.agent_kind,
        tl = (0, s._U)(null == eW ? S.Bm : void 0, ev.author) ?? ev.author.displayName,
        ti = tl !== ev.author.id,
        ts = (0, s._U)(null == eW ? S.Ww : void 0, ev.author.id),
        td = null != ev.editedAt && ev.editedAt !== ev.createdAt && null == ev.deletedAt
      ee[12] !== td || ee[13] !== ta || ee[14] !== ev.createdAt || ee[15] !== ev.editedAt
        ? ((A = td
            ? (0, a.jsx)(u.A, {
                id: "codex.space.page.comments.createdAndEditedAt",
                defaultMessage: "Created {createdAt} · Edited {editedAt}",
                description: "Tooltip with the full creation and last-edit timestamps of a Page comment",
                values: {
                  createdAt: ta.formatDate(ev.createdAt, { dateStyle: "medium", timeStyle: "short" }),
                  editedAt: ta.formatDate(ev.editedAt, { dateStyle: "medium", timeStyle: "short" }),
                },
              })
            : ta.formatDate(ev.createdAt, { dateStyle: "medium", timeStyle: "short" })),
          (ee[12] = td),
          (ee[13] = ta),
          (ee[14] = ev.createdAt),
          (ee[15] = ev.editedAt),
          (ee[16] = A))
        : (A = ee[16])
      let tc = A
      ee[17] !== ta ? ((j = ta.formatMessage(eP.addReaction)), (ee[17] = ta), (ee[18] = j)) : (j = ee[18])
      let tu = j
      ee[19] !== tl || ee[20] !== ta || ee[21] !== ti
        ? ((M = ta.formatMessage(
            {
              id: "codex.space.page.comments.agentInitiator",
              defaultMessage: "Initiated by {knownAuthor, select, true {{authorName}} other {a collaborator}}",
              description:
                "Accessible label and tooltip for the human avatar badge on an AI-authored Page comment; never expose an unresolved account ID",
            },
            { knownAuthor: ti, authorName: tl },
          )),
          (ee[19] = tl),
          (ee[20] = ta),
          (ee[21] = ti),
          (ee[22] = M))
        : (M = ee[22])
      let tp = M
      ee[23] !== tl ||
      ee[24] !== e8 ||
      ee[25] !== el ||
      ee[26] !== e7?.body ||
      ee[27] !== e7?.persistedBody ||
      ee[28] !== eB?.hidden ||
      ee[29] !== ti ||
      ee[30] !== ev.body ||
      ee[31] !== ev.id ||
      ee[32] !== e$ ||
      ee[33] !== ea ||
      ee[34] !== eo ||
      ee[35] !== eu ||
      ee[36] !== te ||
      ee[37] !== tn ||
      ee[38] !== ei ||
      ee[39] !== eZ ||
      ee[40] !== ew ||
      ee[41] !== ek
        ? ((P = te
            ? (0, a.jsx)("div", {
                hidden: eB?.hidden,
                children: (0, a.jsx)(ec, {
                  inactive: eB?.hidden,
                  messageId: ev.id,
                  initialBody: ev.body,
                  unifiedComments: eZ,
                  body: e7?.body ?? ev.body,
                  persistedBody: e7?.persistedBody,
                  onBodyChange: (e, t) => e8({ body: e, persistedBody: t }),
                  renderTaskComposer: eu,
                  pageId: ea,
                  presence: eo,
                  comments: el,
                  thread: ei,
                  taskOwner: ek ? ew : void 0,
                  taskOwnerName: ti ? tl : void 0,
                  onCancel: tn,
                  onSave: (e) => {
                    e$(e) && tn()
                  },
                }),
              })
            : null),
          (ee[23] = tl),
          (ee[24] = e8),
          (ee[25] = el),
          (ee[26] = e7?.body),
          (ee[27] = e7?.persistedBody),
          (ee[28] = eB?.hidden),
          (ee[29] = ti),
          (ee[30] = ev.body),
          (ee[31] = ev.id),
          (ee[32] = e$),
          (ee[33] = ea),
          (ee[34] = eo),
          (ee[35] = eu),
          (ee[36] = te),
          (ee[37] = tn),
          (ee[38] = ei),
          (ee[39] = eZ),
          (ee[40] = ew),
          (ee[41] = ek),
          (ee[42] = P))
        : (P = ee[42])
      let tm = P
      ee[43] !== eH ||
      ee[44] !== eE ||
      ee[45] !== eN ||
      ee[46] !== ey ||
      ee[47] !== eX ||
      ee[48] !== ev.body ||
      ee[49] !== eq ||
      ee[50] !== eU ||
      ee[51] !== es ||
      ee[52] !== e_ ||
      ee[53] !== eK ||
      ee[54] !== eQ ||
      ee[55] !== ef
        ? ((T = (0, a.jsx)(W, {
            floatingLayout: eX,
            viewer: eQ,
            renderTaskMention: es,
            commentThreadId: ef,
            expanded: eN,
            body: ev.body,
            findMatch: ey,
            searchQuery: eK,
            collapsedLines: eE,
            resolved: e_,
            onExpand: eU,
            onCollapse: eq,
            children: eH,
          })),
          (ee[43] = eH),
          (ee[44] = eE),
          (ee[45] = eN),
          (ee[46] = ey),
          (ee[47] = eX),
          (ee[48] = ev.body),
          (ee[49] = eq),
          (ee[50] = eU),
          (ee[51] = es),
          (ee[52] = e_),
          (ee[53] = eK),
          (ee[54] = eQ),
          (ee[55] = ef),
          (ee[56] = T))
        : (T = ee[56])
      let tg = T
      if (null != ep && !e9 && !eG) {
        let e
        ;(ee[57] !== tg || ee[58] !== ep ? ((e = ep(tg)), (ee[57] = tg), (ee[58] = ep), (ee[59] = e)) : (e = ee[59]),
          (tg = e))
      }
      let th = ev.id,
        tf = eC ? void 0 : "",
        tv = e0 || e2 || ez ? "" : void 0,
        ty = null != ey ? "" : void 0
      ;(ee[60] !== e0
        ? ((E = (e) => {
            !e0 &&
              "touch" !== e.pointerType &&
              e.target instanceof Element &&
              e.currentTarget.contains(e.target) &&
              null == e.target.closest("button") &&
              e1(!0)
          }),
          (ee[60] = e0),
          (ee[61] = E))
        : (E = ee[61]),
        ee[62] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (e) => {
              ;(e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) || e1(!1)
            }),
            (ee[62] = N))
          : (N = ee[62]),
        ee[63] !== tl ||
        ee[64] !== eW?.avatar ||
        ee[65] !== tp ||
        ee[66] !== tr ||
        ee[67] !== to ||
        ee[68] !== ti ||
        ee[69] !== ev.author.id ||
        ee[70] !== ev.conversation_id ||
        ee[71] !== ew
          ? ((U =
              eW?.avatar ??
              (tr
                ? (0, a.jsx)(o.m, {
                    content: tp,
                    children: (0, a.jsxs)("span", {
                      className: "relative block size-6 shrink-0",
                      children: [
                        to
                          ? (0, a.jsx)(w.r, {
                              className: "size-6",
                              conversationId: ew === ev.author.id ? ev.conversation_id : void 0,
                            })
                          : (0, a.jsx)(b.A, { "aria-hidden": !0, className: "size-6" }),
                        (0, a.jsx)("span", {
                          className:
                            "absolute -end-0.5 bottom-0 rounded-full bg-surface-elevated ring-2 ring-surface-elevated",
                          children: (0, a.jsx)(eM, { accountUserId: ev.author.id, name: ti ? tl : "?", size: "badge" }),
                        }),
                      ],
                    }),
                  })
                : (0, a.jsx)(I.Ve, {
                    accountUserId: ti ? ev.author.id : null,
                    label: tl,
                    children: (0, a.jsx)(eM, { accountUserId: ev.author.id, name: ti ? tl : "?" }),
                  }))),
            (ee[63] = tl),
            (ee[64] = eW?.avatar),
            (ee[65] = tp),
            (ee[66] = tr),
            (ee[67] = to),
            (ee[68] = ti),
            (ee[69] = ev.author.id),
            (ee[70] = ev.conversation_id),
            (ee[71] = ew),
            (ee[72] = U))
          : (U = ee[72]),
        ee[73] !== U
          ? ((q = (0, a.jsx)("span", { "data-page-comment-avatar": !0, className: "block", children: U })),
            (ee[73] = U),
            (ee[74] = q))
          : (q = ee[74]),
        ee[75] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, i.A)("header-qUxZ7y", "flex min-w-0 items-center gap-1")), (ee[75] = D))
          : (D = ee[75]),
        ee[76] !== eW
          ? ((z =
              null != eW ? (0, a.jsx)("span", { className: "min-w-4 truncate font-medium", children: eW.name }) : null),
            (ee[76] = eW),
            (ee[77] = z))
          : (z = ee[77]),
        ee[78] !== ts ||
        ee[79] !== tl ||
        ee[80] !== eW ||
        ee[81] !== tp ||
        ee[82] !== ta ||
        ee[83] !== tr ||
        ee[84] !== to ||
        ee[85] !== ti ||
        ee[86] !== ev.author.id ||
        ee[87] !== ev.conversation_id ||
        ee[88] !== eR ||
        ee[89] !== e_ ||
        ee[90] !== eK ||
        ee[91] !== eZ ||
        ee[92] !== ew
          ? ((L =
              null == eW &&
              (tr
                ? (0, a.jsx)(o.m, {
                    content: tp,
                    children: (0, a.jsx)("button", {
                      "aria-label": to
                        ? void 0
                        : ta.formatMessage(
                            {
                              id: "codex.space.page.comments.agentAuthorWithInitiator",
                              defaultMessage:
                                "ChatGPT, initiated by {knownAuthor, select, true {{authorName}} other {a collaborator}}",
                              description:
                                "Accessible name of the ChatGPT author and avatar tooltip trigger on an agent-authored Page comment, including the responsible human when known",
                            },
                            { knownAuthor: ti, authorName: tl },
                          ),
                      className: (0, i.A)(
                        "flex min-w-4 max-w-fit flex-1 items-center rounded-sm text-start font-medium focus-visible:outline-2 focus-visible:outline-ring",
                        e_ && "text-secondary",
                      ),
                      type: "button",
                      onClick: eR,
                      children: (0, a.jsx)("span", {
                        className: "truncate",
                        children: to
                          ? (0, a.jsx)(_._, {
                              conversationId: ew === ev.author.id ? ev.conversation_id : void 0,
                              ownerName: ti ? tl : void 0,
                            })
                          : (0, a.jsx)(u.A, {
                              id: "codex.space.page.comments.chatgptAuthor",
                              defaultMessage: "ChatGPT",
                              description: "Name of the AI author of a shared Page comment",
                            }),
                      }),
                    }),
                  })
                : (0, a.jsx)("span", {
                    className: (0, i.A)(
                      "flex min-w-4 max-w-fit flex-1 items-center font-medium",
                      e_ && "text-secondary",
                    ),
                    children:
                      ts && !ti && (eZ || ew !== ev.author.id)
                        ? (0, a.jsxs)("span", {
                            "aria-busy": "true",
                            className: "flex h-lh min-w-0 items-center",
                            children: [
                              (0, a.jsx)("span", {
                                className: "sr-only",
                                children: (0, a.jsx)(u.A, {
                                  id: "codex.space.page.comments.loadingAuthor",
                                  defaultMessage: "Loading author…",
                                  description: "Accessible label while a Page comment author's profile is loading",
                                }),
                              }),
                              (0, a.jsx)(y.X, { as: "span", className: "w-24 max-w-full", size: "sm" }),
                            ],
                          })
                        : (0, a.jsx)(I.Ve, {
                            accountUserId: ti ? ev.author.id : null,
                            label: tl,
                            children: (0, a.jsx)("span", {
                              className: "block truncate",
                              children: (0, a.jsx)(u.A, {
                                id: "codex.space.page.comments.author",
                                defaultMessage:
                                  "{viewer, select, true {You} other {{knownAuthor, select, true {{authorName}} other {Collaborator}}}}",
                                description:
                                  "Author of a Page comment: You for the verified current viewer, or Collaborator when their name is unavailable",
                                values: {
                                  viewer: !eZ && ew === ev.author.id,
                                  knownAuthor: ti,
                                  authorName: eK ? (0, a.jsx)($.v, { query: eK, text: tl }) : tl,
                                },
                              }),
                            }),
                          }),
                  }))),
            (ee[78] = ts),
            (ee[79] = tl),
            (ee[80] = eW),
            (ee[81] = tp),
            (ee[82] = ta),
            (ee[83] = tr),
            (ee[84] = to),
            (ee[85] = ti),
            (ee[86] = ev.author.id),
            (ee[87] = ev.conversation_id),
            (ee[88] = eR),
            (ee[89] = e_),
            (ee[90] = eK),
            (ee[91] = eZ),
            (ee[92] = ew),
            (ee[93] = L))
          : (L = ee[93]),
        ee[94] !== td || ee[95] !== ev.createdAt || ee[96] !== eZ
          ? ((O = (0, a.jsx)("button", {
              className:
                "min-w-0 cursor-interaction truncate rounded-sm text-start text-sm text-tertiary focus-visible:outline-2 focus-visible:outline-ring in-data-[comment-layout=floating]:shrink-0 in-data-[comment-layout=floating]:text-xs in-data-[comment-layout=floating]:text-secondary",
              type: "button",
              children:
                eZ && td
                  ? (0, a.jsx)(u.A, {
                      id: "codex.space.page.comments.editedTimestamp",
                      defaultMessage: "{timestamp} · Edited",
                      description:
                        "A Page comment's relative creation time followed by an indication that it was edited. The timestamp is a localized relative time such as 2h or 3d.",
                      values: {
                        timestamp: (0, a.jsx)("time", {
                          dateTime: ev.createdAt,
                          children: (0, a.jsx)(g.A, { dateString: ev.createdAt }),
                        }),
                      },
                    })
                  : (0, a.jsx)("time", {
                      dateTime: ev.createdAt,
                      children: (0, a.jsx)(g.A, { dateString: ev.createdAt }),
                    }),
            })),
            (ee[94] = td),
            (ee[95] = ev.createdAt),
            (ee[96] = eZ),
            (ee[97] = O))
          : (O = ee[97]),
        ee[98] !== O || ee[99] !== tc
          ? ((R = (0, a.jsx)(o.m, { content: tc, preventDismissOnFastClick: !0, children: O })),
            (ee[98] = O),
            (ee[99] = tc),
            (ee[100] = R))
          : (R = ee[100]),
        ee[101] !== z || ee[102] !== L || ee[103] !== R
          ? ((B = (0, a.jsxs)("span", {
              className:
                "flex min-w-0 flex-1 items-center gap-1 text-base select-none in-data-[comment-layout=floating]:gap-1.25",
              children: [z, L, R],
            })),
            (ee[101] = z),
            (ee[102] = L),
            (ee[103] = R),
            (ee[104] = B))
          : (B = ee[104]),
        ee[105] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (0, i.A)("actions-TaTUHT", "flex shrink-0 items-center")), (ee[105] = F))
          : (F = ee[105]),
        ee[106] !== eX || ee[107] !== td || ee[108] !== ta || ee[109] !== tc || ee[110] !== eZ
          ? ((V =
              !eZ && td
                ? (0, a.jsx)(o.m, {
                    content: tc,
                    preventDismissOnFastClick: !0,
                    children: (0, a.jsx)(k.B, {
                      floatingLayout: eX,
                      className: "hidden @xs/comment-card:inline-flex",
                      "aria-label": ta.formatMessage(eP.edited),
                      color: "ghostSecondary",
                      children: (0, a.jsx)(h.I, { asset: l }),
                    }),
                  })
                : null),
            (ee[106] = eX),
            (ee[107] = td),
            (ee[108] = ta),
            (ee[109] = tc),
            (ee[110] = eZ),
            (ee[111] = V))
          : (V = ee[111]),
        ee[112] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = (0, i.A)("actionButtons-uvawur", "flex items-center")), (ee[112] = H))
          : (H = ee[112]),
        ee[113] !== tu ||
        ee[114] !== eX ||
        ee[115] !== ev ||
        ee[116] !== eO ||
        ee[117] !== eL ||
        ee[118] !== ez ||
        ee[119] !== ek
          ? ((G =
              ek && null == ev.deletedAt
                ? (0, a.jsxs)(v.AM, {
                    open: ez,
                    onOpenChange: eL,
                    children: [
                      (0, a.jsx)(v.Wv, {
                        asChild: !0,
                        children: (0, a.jsx)(o.m, {
                          content: tu,
                          disabled: ez,
                          children: (0, a.jsx)(k.B, {
                            floatingLayout: eX,
                            "aria-label": tu,
                            color: "ghostActive",
                            disabled: ev.reactions.length >= 10,
                            children: (0, a.jsx)(f.OSQ, {}),
                          }),
                        }),
                      }),
                      (0, a.jsx)(v.hl, {
                        className: "z-50 outline-hidden",
                        align: "end",
                        "aria-label": tu,
                        onCloseAutoFocus: (e) => {
                          let t = eJ.current
                          ;((eJ.current = !1),
                            t &&
                              ev.reactions.length >= 10 &&
                              (e.preventDefault(), eY.current?.focus({ preventScroll: !0 })))
                        },
                        unstyled: !0,
                        children: (0, a.jsx)(eb, {
                          message: ev,
                          onSelect: (e) => {
                            ;((eJ.current = !0),
                              eL(!1),
                              eO({
                                active: !ev.reactions.find((t) => t.emoji === e)?.reactedByMe,
                                emoji: e,
                                messageId: ev.id,
                              }))
                          },
                        }),
                      }),
                    ],
                  })
                : null),
            (ee[113] = tu),
            (ee[114] = eX),
            (ee[115] = ev),
            (ee[116] = eO),
            (ee[117] = eL),
            (ee[118] = ez),
            (ee[119] = ek),
            (ee[120] = G))
          : (G = ee[120]),
        ee[121] !== e8 ||
        ee[122] !== e9 ||
        ee[123] !== eX ||
        ee[124] !== ev ||
        ee[125] !== eF ||
        ee[126] !== eV ||
        ee[127] !== e$ ||
        ee[128] !== eR ||
        ee[129] !== ea ||
        ee[130] !== ef
          ? ((K =
              (null != ea && null == ev.deletedAt) || null != e$ || null != eF || null != eV
                ? (0, a.jsx)(er, {
                    floatingLayout: eX,
                    pageId: ea,
                    threadId: ef,
                    message: ev,
                    editing: e9,
                    onEdit:
                      null == e$
                        ? void 0
                        : () => {
                            ;(eX && eR?.(), e8({ body: ev.body }))
                          },
                    onDelete: eF,
                    onDeleteThread: eV,
                    onMenuOpenChange: e3,
                  })
                : null),
            (ee[121] = e8),
            (ee[122] = e9),
            (ee[123] = eX),
            (ee[124] = ev),
            (ee[125] = eF),
            (ee[126] = eV),
            (ee[127] = e$),
            (ee[128] = eR),
            (ee[129] = ea),
            (ee[130] = ef),
            (ee[131] = K))
          : (K = ee[131]),
        ee[132] !== eD || ee[133] !== G || ee[134] !== K
          ? ((Q = (0, a.jsxs)("div", { className: H, children: [eD, G, K] })),
            (ee[132] = eD),
            (ee[133] = G),
            (ee[134] = K),
            (ee[135] = Q))
          : (Q = ee[135]),
        ee[136] !== V || ee[137] !== Q
          ? ((X = (0, a.jsxs)("div", { className: F, children: [V, Q] })), (ee[136] = V), (ee[137] = Q), (ee[138] = X))
          : (X = ee[138]),
        ee[139] !== B || ee[140] !== X
          ? ((Z = (0, a.jsxs)("div", { className: D, children: [B, X] })), (ee[139] = B), (ee[140] = X), (ee[141] = Z))
          : (Z = ee[141]))
      let tb = null == tm || eB?.hidden ? tg : null
      return (
        ee[142] !== eX ||
        ee[143] !== ta ||
        ee[144] !== ev.deletedAt ||
        ee[145] !== ev.id ||
        ee[146] !== ev.reactions ||
        ee[147] !== eO ||
        ee[148] !== ew ||
        ee[149] !== ek
          ? ((Y =
              null == ev.deletedAt && ev.reactions.length > 0
                ? (0, a.jsx)("div", {
                    className:
                      "flex flex-wrap items-center gap-1 text-xs text-secondary in-data-[comment-layout=floating]:mt-1",
                    children: ev.reactions.map((e) =>
                      (0, a.jsx)(
                        o.m,
                        {
                          content: (0, a.jsx)(eA, { reaction: e, viewerId: ew }),
                          children: (0, a.jsx)(m.$, {
                            "aria-label": ta.formatMessage(eP.reaction, { emoji: e.emoji }),
                            "aria-pressed": e.reactedByMe,
                            className: (0, i.A)(
                              eX &&
                                "h-5.5 rounded-lg border-0 border-transparent bg-secondary-soft px-1.75 py-px text-xs leading-5 text-default",
                            ),
                            color: e.reactedByMe ? "secondary" : "ghostSecondary",
                            disabled: !ek,
                            size: "compact",
                            unstyled: eX,
                            onClick: () => eO({ active: !e.reactedByMe, emoji: e.emoji, messageId: ev.id }),
                            children: eX
                              ? (0, a.jsx)(u.A, {
                                  id: "codex.space.page.comments.reactionCount",
                                  defaultMessage: "{emoji} {count}",
                                  description: "Emoji and count displayed in a compact Page comment reaction chip",
                                  values: { emoji: e.emoji, count: e.count },
                                })
                              : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    e.emoji,
                                    (0, a.jsx)("span", { className: "text-xs tabular-nums", children: e.count }),
                                  ],
                                }),
                          }),
                        },
                        e.emoji,
                      ),
                    ),
                  })
                : null),
            (ee[142] = eX),
            (ee[143] = ta),
            (ee[144] = ev.deletedAt),
            (ee[145] = ev.id),
            (ee[146] = ev.reactions),
            (ee[147] = eO),
            (ee[148] = ew),
            (ee[149] = ek),
            (ee[150] = Y))
          : (Y = ee[150]),
        ee[151] !== tm ||
        ee[152] !== eS ||
        ee[153] !== eC ||
        ee[154] !== ev.id ||
        ee[155] !== tf ||
        ee[156] !== tv ||
        ee[157] !== ty ||
        ee[158] !== E ||
        ee[159] !== q ||
        ee[160] !== Z ||
        ee[161] !== tb ||
        ee[162] !== Y
          ? ((J = (0, a.jsxs)(eg, {
              ref: eY,
              "data-page-comment-message-id": th,
              "data-page-comment-root-message": tf,
              "data-page-comment-actions-visible": tv,
              "data-page-comment-find-message": ty,
              tabIndex: -1,
              onPointerOver: E,
              onPointerOut: N,
              hasConnector: eS,
              hasPrevious: eC,
              avatar: q,
              header: Z,
              children: [tm, tb, Y],
            })),
            (ee[151] = tm),
            (ee[152] = eS),
            (ee[153] = eC),
            (ee[154] = ev.id),
            (ee[155] = tf),
            (ee[156] = tv),
            (ee[157] = ty),
            (ee[158] = E),
            (ee[159] = q),
            (ee[160] = Z),
            (ee[161] = tb),
            (ee[162] = Y),
            (ee[163] = J))
          : (J = ee[163]),
        J
      )
    }
    function eM(e) {
      let t,
        n,
        o,
        l,
        d = (0, r.c)(11),
        { accountUserId: c, name: u, size: p } = e,
        m = void 0 === p ? "sm" : p,
        g = (0, s._U)(S.Ww, c),
        h = "badge" === m ? "size-3" : "size-6"
      ;(d[0] !== h
        ? ((t = (0, i.A)("block shrink-0 overflow-hidden rounded-full", h)), (d[0] = h), (d[1] = t))
        : (t = d[1]),
        d[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(y.X, { as: "span", size: "fill" })), (d[2] = n))
          : (n = d[2]),
        d[3] !== t ? ((o = (0, a.jsx)("span", { className: t, children: n })), (d[3] = t), (d[4] = o)) : (o = d[4]))
      let f = o
      return (
        d[5] !== c || d[6] !== g || d[7] !== u || d[8] !== f || d[9] !== m
          ? ((l = g ? f : (0, a.jsx)(x.Y, { accountUserId: c, name: u, size: m, loadingFallback: f })),
            (d[5] = c),
            (d[6] = g),
            (d[7] = u),
            (d[8] = f),
            (d[9] = m),
            (d[10] = l))
          : (l = d[10]),
        l
      )
    }
    let eP = (0, p.YK)({
      edited: {
        id: "codex.space.page.comments.edited",
        defaultMessage: "Edited",
        description: "Label indicating a Page comment was edited; the tooltip shows creation and last-edit dates",
      },
      addReaction: {
        id: "codex.space.page.comments.addReaction",
        defaultMessage: "Add reaction",
        description: "Accessible label for opening the emoji reaction picker for a shared Page comment",
      },
      reaction: {
        id: "codex.space.page.comments.reaction",
        defaultMessage: "{emoji} reaction",
        description: "Accessible label for toggling an emoji reaction on a shared Page comment",
      },
    })
  },
  HWbF(e, t, n) {
    n.d(t, {}, { _: { duration: 0.18, ease: [0.3, 0, 1, 1] }, x: { duration: 0.14, ease: [0.2, 0.8, 0.2, 1] } })
  },
  PYJe(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("oyxz"),
      l = n("ygO2"),
      i = n("FXi4")
    n.d(
      t,
      {},
      {
        g: function (e) {
          let t,
            n,
            s,
            d,
            c = (0, r.c)(10),
            { count: u, firstReplyId: p, messagesId: m, onExpand: g } = e
          return (
            c[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)("span", {
                  "aria-hidden": !0,
                  className:
                    "pointer-events-none absolute start-7 top-0 bottom-0 w-px bg-border-strong in-data-[comment-layout=floating]:start-3 in-data-[comment-layout=floating]:-top-0.5 in-data-[comment-layout=floating]:-bottom-2 in-data-[comment-layout=floating]:-translate-x-1/2 in-data-[comment-layout=floating]:bg-border",
                })),
                (c[0] = t))
              : (t = c[0]),
            c[1] !== p || c[2] !== g
              ? ((n = (e) => {
                  let t = e.currentTarget.closest("[data-page-comment-card]")
                  ;((0, i._)(e.currentTarget, g),
                    t?.querySelector(`[data-page-comment-message-id="${CSS.escape(p)}"]`)?.focus({ preventScroll: !0 }))
                }),
                (c[1] = p),
                (c[2] = g),
                (c[3] = n))
              : (n = c[3]),
            c[4] !== u
              ? ((s = (0, a.jsx)(o.A, {
                  id: "codex.space.page.comments.showReplies",
                  defaultMessage: "Show {count, plural, one {# reply} other {# replies}}",
                  description:
                    "Reveals older hidden replies between the original Page comment and its latest visible reply; the count excludes the original and latest messages",
                  values: { count: u },
                })),
                (c[4] = u),
                (c[5] = s))
              : (s = c[5]),
            c[6] !== m || c[7] !== n || c[8] !== s
              ? ((d = (0, a.jsxs)("div", {
                  className:
                    "relative flex min-h-8 items-center ps-12.5 pe-2 text-sm text-secondary in-data-[comment-layout=floating]:mt-3 in-data-[comment-layout=floating]:-mb-0.5 in-data-[comment-layout=floating]:ps-8 in-data-[comment-layout=floating]:pe-0",
                  children: [
                    t,
                    (0, a.jsx)(l.$, {
                      className: "min-h-6 in-data-[comment-layout=floating]:hover:underline",
                      "aria-controls": m,
                      "aria-expanded": !1,
                      color: "ghostMuted",
                      size: "inline",
                      onClick: n,
                      children: s,
                    }),
                  ],
                })),
                (c[6] = m),
                (c[7] = n),
                (c[8] = s),
                (c[9] = d))
              : (d = c[9]),
            d
          )
        },
      },
    )
  },
  PqeH(e, t, n) {
    n.d(
      t,
      {},
      {
        d: function (e, t, n) {
          if (e.length <= 2 || e.reduce((e, t) => e + t, 0) <= t) return { hiddenStart: 0, hiddenEnd: 0 }
          let a = 1,
            r = e.length - 1,
            o = e[0] + e[r] + n,
            l = !0
          for (; a < r;) {
            let n = l ? a : r - 1
            if (o + e[n] > t && o + e[(n = l ? r - 1 : a)] > t) break
            ;((o += e[n]), n === a ? ((a += 1), (l = !1)) : ((r -= 1), (l = !0)))
          }
          return { hiddenStart: a, hiddenEnd: r }
        },
      },
    )
  },
  a4Nf(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("oyxz"),
      l = n("ygO2"),
      i = n("xs0e")
    n.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            n,
            s,
            d,
            c = (0, r.c)(10),
            { resolvedAt: u, onReopen: p } = e,
            m = null != u
          return (
            c[0] !== u
              ? ((t = null != u ? (0, a.jsx)(i.A, { dateString: u }, "resolved-time") : null), (c[0] = u), (c[1] = t))
              : (t = c[1]),
            c[2] !== m || c[3] !== t
              ? ((n = (0, a.jsx)("span", {
                  children: (0, a.jsx)(o.A, {
                    id: "codex.space.page.comments.resolvedStatus",
                    defaultMessage: "Resolved{hasDate, select, true { · {time}} other {}}",
                    description: "Resolution status below a Page discussion, with the relative time when known",
                    values: { hasDate: m, time: t },
                  }),
                })),
                (c[2] = m),
                (c[3] = t),
                (c[4] = n))
              : (n = c[4]),
            c[5] !== p
              ? ((s =
                  null != p
                    ? (0, a.jsx)(l.$, {
                        color: "ghostSecondary",
                        size: "compact",
                        onClick: p,
                        children: (0, a.jsx)(o.A, {
                          id: "codex.space.page.comments.reopen",
                          defaultMessage: "Reopen",
                          description: "Reopens a resolved shared Page comment thread so collaborators can reply again",
                        }),
                      })
                    : null),
                (c[5] = p),
                (c[6] = s))
              : (s = c[6]),
            c[7] !== n || c[8] !== s
              ? ((d = (0, a.jsxs)("div", {
                  className:
                    "flex flex-wrap items-center justify-between gap-2 ps-4 pe-3 pb-2 text-sm text-tertiary select-none in-data-[comment-layout=floating]:mt-3 in-data-[comment-layout=floating]:px-0 in-data-[comment-layout=floating]:pb-0",
                  children: [n, s],
                })),
                (c[7] = n),
                (c[8] = s),
                (c[9] = d))
              : (d = c[9]),
            d
          )
        },
      },
    )
  },
  eo4i(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("on57"),
      l = n("zd8w"),
      i = n("oyxz"),
      s = n("GO7r")
    function d(e) {
      let t,
        n,
        l,
        i,
        d,
        c,
        u,
        p,
        m = (0, r.c)(18)
      ;(m[0] !== e
        ? (({ expanded: t, onExpandedChange: l, label: n, ...i } = e),
          (m[0] = e),
          (m[1] = t),
          (m[2] = n),
          (m[3] = l),
          (m[4] = i))
        : ((t = m[1]), (n = m[2]), (l = m[3]), (i = m[4])),
        m[5] !== t || m[6] !== l ? ((d = () => l(!t)), (m[5] = t), (m[6] = l), (m[7] = d)) : (d = m[7]))
      let g = t && "rotate-90"
      return (
        m[8] !== g ? ((c = (0, o.A)(g)), (m[8] = g), (m[9] = c)) : (c = m[9]),
        m[10] !== c ? ((u = (0, a.jsx)(s.uM3, { className: c })), (m[10] = c), (m[11] = u)) : (u = m[11]),
        m[12] !== t || m[13] !== n || m[14] !== i || m[15] !== d || m[16] !== u
          ? ((p = (0, a.jsxs)("button", {
              ...i,
              type: "button",
              "aria-expanded": t,
              className:
                "flex w-full cursor-interaction items-center justify-between rounded-lg px-2 py-2 text-start text-sm font-medium text-secondary select-none hover:bg-primary-ghost-hover",
              onClick: d,
              children: [n, u],
            })),
            (m[12] = t),
            (m[13] = n),
            (m[14] = i),
            (m[15] = d),
            (m[16] = u),
            (m[17] = p))
          : (p = m[17]),
        p
      )
    }
    n.d(
      t,
      {},
      {
        U: d,
        w: function (e) {
          let t,
            n,
            o,
            s,
            c = (0, r.c)(12),
            { children: u, expanded: p, onExpandedChange: m } = e,
            g = (0, l.useId)()
          ;(c[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(i.A, {
                id: "codex.space.page.comments.resolvedHeading",
                defaultMessage: "Resolved",
                description: "Heading and toggle for resolved Page comment threads",
              })),
              (c[0] = t))
            : (t = c[0]),
            c[1] !== p || c[2] !== g || c[3] !== m
              ? ((n = (0, a.jsx)(d, { "aria-controls": g, expanded: p, onExpandedChange: m, label: t })),
                (c[1] = p),
                (c[2] = g),
                (c[3] = m),
                (c[4] = n))
              : (n = c[4]))
          let h = !p,
            f = p ? u : null
          return (
            c[5] !== g || c[6] !== h || c[7] !== f
              ? ((o = (0, a.jsx)("div", { id: g, className: "flex flex-col gap-1.5", hidden: h, children: f })),
                (c[5] = g),
                (c[6] = h),
                (c[7] = f),
                (c[8] = o))
              : (o = c[8]),
            c[9] !== n || c[10] !== o
              ? ((s = (0, a.jsxs)("section", {
                  "data-page-comment-card": !0,
                  className: "mt-3 flex flex-col gap-1.5 border-t border-default pt-2",
                  children: [n, o],
                })),
                (c[9] = n),
                (c[10] = o),
                (c[11] = s))
              : (s = c[11]),
            s
          )
        },
      },
    )
  },
  xMUP(e, t, n) {
    var a = n("kQNh"),
      r = n.n(a),
      o = n("Oe5x")
    let l = new WeakMap()
    function i(e, t) {
      let n = l.get(e)
      if (n?.body !== e.body) {
        let { tokens: t, taskMentions: a } = (0, o.bl)(e.body)
        ;((n = { body: e.body, text: (0, o.Mw)(t), taskTokens: a.length ? t : void 0 }), l.set(e, n))
      }
      return t && n.taskTokens ? (0, o.Mw)(n.taskTokens, void 0, t) : n.text
    }
    function s(e) {
      let t = e.trim()
      return "" === t ? null : RegExp(`(${r()(t).replace(/['‘’]/g, "['‘’]")})`, "i")
    }
    function d(e, t) {
      let n = s(t)
      return null == n
        ? []
        : Array.from(e.matchAll(RegExp(n.source, "gi")), (e) => ({ start: e.index, end: e.index + e[0].length }))
    }
    n.d(
      t,
      {},
      {
        UI: function (e, t, n) {
          let a = s(t)
          return null == a
            ? []
            : e.messages
                .filter((e) => {
                  let t =
                    e.author.displayName === e.author.id
                      ? (n?.get(e.author.id) ?? e.author.displayName)
                      : e.author.displayName
                  return (
                    null == e.deletedAt &&
                    ((t !== e.author.id && a.test(t)) ||
                      ("agent" === e.authorType && a.test("o" === e.agent_kind ? "dot" : "ChatGPT")) ||
                      a.test(i(e)))
                  )
                })
                .map((e) => e.id)
        },
        Wo: function (e, t, n) {
          let a = new Map()
          if ("string" == typeof t && "" === t.trim()) return a
          let r = new Map(),
            l = (0, o.Mw)(e, r, n),
            i = "string" == typeof t ? d(l, t) : [{ start: t.from, end: t.to }],
            s = 0
          for (let [e, { start: t, end: n }] of r) {
            for (; s < i.length && i[s].end <= t;) s += 1
            let r = []
            for (let e = s; e < i.length && i[e].start < n; e += 1)
              r.push({ start: Math.max(t, i[e].start) - t, end: Math.min(n, i[e].end) - t })
            r.length > 0 && a.set(e, r)
          }
          return a
        },
        Zf: i,
        nI: d,
      },
    )
  },
  xEDl(e, t, n) {
    n.d(
      t,
      {},
      {
        K: function (e, t, n = 0, a, r = "instant") {
          let o = e.getBoundingClientRect()
          if (0 === e.offsetHeight || 0 === o.height) return
          let l = t.getBoundingClientRect()
          if (t instanceof Range) {
            let e = t.startContainer.parentElement?.closest("[data-code-block-source]")
            if (null != e && e.scrollWidth > e.clientWidth) {
              let t = e.getBoundingClientRect(),
                n = l.left - t.left,
                a = n < 0 ? n : Math.max(0, Math.min(l.right - t.right, n))
              e.scrollLeft += a / (e.currentCSSZoom || 1)
            }
          }
          let i = o.height / e.offsetHeight,
            s = getComputedStyle(e),
            d = Number.parseFloat(s.scrollPaddingTop) || 0,
            c = Number.parseFloat(s.scrollPaddingBottom) || 0,
            u = o.top + (e.clientTop + d + n) * i,
            p = o.top + (e.clientTop + e.clientHeight - c) * i
          l.height > p - u && null != a && (l = a.getBoundingClientRect())
          let m = l.top < u ? l.top - u : Math.max(0, Math.min(l.bottom - p, l.top - u))
          0 !== m && e.scrollTo({ top: e.scrollTop + m / i, behavior: r })
        },
      },
    )
  },
  oky5(e, t, n) {
    n.d(t, { W: () => h, $: () => g })
    var a = n("ABep"),
      r = n("QosV")
    let o = (0, n("nkTT").a)({
      name: "magnifying-glass-md-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 3.080811, y: 3.081055, width: 13.39502, height: 13.420898 },
        visualBounds: { x: 3.080811, y: 3.081055, width: 13.39502, height: 13.420898 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.080811, y: 3.081055, width: 13.39502, height: 13.420898 },
        center: { x: 9.778321, y: 9.791504 },
        insets: { top: 3.081055, right: 3.524169, bottom: 3.498047, left: 3.080811 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.778321, y: 9.791504 },
          foreground: { x: 9.778321, y: 9.791504 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M8.74585 3.08105C11.8745 3.08105 14.4109 5.6174 14.4109 8.74609C14.4109 10.0772 13.9499 11.2996 13.1814 12.2666L16.281 15.3672C16.5407 15.6269 16.5407 16.0479 16.281 16.3076C16.0213 16.5671 15.6002 16.5673 15.3406 16.3076L12.2371 13.2051C11.2748 13.9596 10.0635 14.4111 8.74585 14.4111C5.61716 14.4111 3.08081 11.8748 3.08081 8.74609C3.08081 5.6174 5.61716 3.08105 8.74585 3.08105ZM8.74585 4.41113C6.3517 4.41113 4.41089 6.35194 4.41089 8.74609C4.41089 11.1402 6.3517 13.0811 8.74585 13.0811C11.14 13.0811 13.0808 11.1402 13.0808 8.74609C13.0808 6.35194 11.14 4.41113 8.74585 4.41113Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var l = n("zd8w"),
      i = n("Wf1j"),
      s = n("oyxz"),
      d = n("ygO2"),
      c = n("HOLv"),
      u = n("GO7r"),
      p = n("okCa"),
      m = n("pZQ9")
    function g(e) {
      let t,
        n,
        u,
        g,
        h,
        f,
        v,
        y,
        b,
        x = (0, r.c)(35),
        { standalone: w, onHideComments: I, title: _, closeLabel: k, quote: S, search: C } = e,
        A = void 0 !== w && w,
        j = (0, i.A)(),
        M = (0, l.useId)(),
        P = (0, l.useRef)(null),
        T = (0, l.useRef)(null),
        [E, N] = (0, l.useState)(null != C && "" !== C.query),
        U = null != C && (E || "" !== C.query)
      x[0] !== C
        ? ((t = (e) => {
            ;(C?.onChange(e),
              P.current
                ?.closest("[data-page-comment-rail]")
                ?.querySelector("[data-page-comment-sidebar-scroll]")
                ?.scrollTo({ top: 0, behavior: "instant" }))
          }),
          (x[0] = C),
          (x[1] = t))
        : (t = x[1])
      let q = t
      x[2] !== q
        ? ((n = () => {
            ;(q(""), N(!1), T.current?.focus({ preventScroll: !0 }))
          }),
          (x[2] = q),
          (x[3] = n))
        : (n = x[3])
      let D = n
      return (
        x[4] !== _
          ? ((u =
              _ ??
              (0, a.jsx)(s.A, {
                id: "codex.space.page.comments.sidebarHeading",
                defaultMessage: "Comments",
                description: "Heading of the Page comments surface",
              })),
            (x[4] = _),
            (x[5] = u))
          : (u = x[5]),
        x[6] !== k || x[7] !== j
          ? ((g =
              k ??
              j.formatMessage({
                id: "codex.space.page.comments.closeSidebar",
                defaultMessage: "Close comments",
                description: "Hide the Page comments sidebar",
              })),
            (x[6] = k),
            (x[7] = j),
            (x[8] = g))
          : (g = x[8]),
        x[9] !== D || x[10] !== j || x[11] !== C || x[12] !== M || x[13] !== U
          ? ((h =
              null != C &&
              (0, a.jsx)(d.$, {
                ref: T,
                "aria-label": j.formatMessage({
                  id: "codex.space.page.comments.toggleSearch",
                  defaultMessage: "Search comments",
                  description: "Show or hide the search field in the Page comments sidebar",
                }),
                "aria-expanded": U,
                "aria-controls": U ? M : void 0,
                color: "secondary",
                radius: "full",
                size: "toolbar",
                uniform: !0,
                onClick: () => {
                  U ? D() : N(!0)
                },
                children: (0, a.jsx)(c.I, { asset: o }),
              })),
            (x[9] = D),
            (x[10] = j),
            (x[11] = C),
            (x[12] = M),
            (x[13] = U),
            (x[14] = h))
          : (h = x[14]),
        x[15] !== I || x[16] !== u || x[17] !== g || x[18] !== h
          ? ((f = (0, a.jsx)(m.xx, { title: u, closeLabel: g, onClose: I, actions: h })),
            (x[15] = I),
            (x[16] = u),
            (x[17] = g),
            (x[18] = h),
            (x[19] = f))
          : (f = x[19]),
        x[20] !== q || x[21] !== D || x[22] !== j || x[23] !== C || x[24] !== E || x[25] !== M || x[26] !== U
          ? ((v =
              null != C &&
              U &&
              (0, a.jsx)("div", {
                className: "px-3 pb-3",
                role: "search",
                onKeyDown: (e) => {
                  "Escape" !== e.key ||
                    e.nativeEvent.isComposing ||
                    (e.preventDefault(),
                    e.stopPropagation(),
                    "" !== C.query ? (N(!0), q(""), P.current?.focus({ preventScroll: !0 })) : D())
                },
                children: (0, a.jsx)(p.s, {
                  id: M,
                  inputRef: P,
                  inputRole: "searchbox",
                  autoFocus: E,
                  variant: "sidebar-header",
                  label: j.formatMessage({
                    id: "codex.space.page.comments.searchLabel",
                    defaultMessage: "Search comments",
                    description:
                      "Accessible label for searching this Page's comments and replies by text or author name",
                  }),
                  placeholder: j.formatMessage({
                    id: "codex.space.page.comments.searchPlaceholder",
                    defaultMessage: "Search comments",
                    description: "Placeholder for searching this Page's comments and replies by text or author name",
                  }),
                  searchQuery: C.query,
                  onSearchQueryChange: q,
                }),
              })),
            (x[20] = q),
            (x[21] = D),
            (x[22] = j),
            (x[23] = C),
            (x[24] = E),
            (x[25] = M),
            (x[26] = U),
            (x[27] = v))
          : (v = x[27]),
        x[28] !== S || x[29] !== A
          ? ((y =
              A &&
              S &&
              (0, a.jsx)("div", {
                className: "flex flex-col gap-2 p-3",
                children: (0, a.jsx)("blockquote", {
                  className: "border-s-2 border-border ps-3 break-words whitespace-pre-wrap text-secondary",
                  children: (0, a.jsx)("p", { className: "line-clamp-3", children: S }),
                }),
              })),
            (x[28] = S),
            (x[29] = A),
            (x[30] = y))
          : (y = x[30]),
        x[31] !== f || x[32] !== v || x[33] !== y
          ? ((b = (0, a.jsx)("div", {
              className: "sticky top-0 z-10",
              "data-page-comments-controls": !0,
              children: (0, a.jsxs)("div", { children: [f, v, y] }),
            })),
            (x[31] = f),
            (x[32] = v),
            (x[33] = y),
            (x[34] = b))
          : (b = x[34]),
        b
      )
    }
    function h(e) {
      let t,
        n,
        o,
        l,
        i,
        d = (0, r.c)(15),
        { canComment: c, searching: p, action: m, emptyDescription: g } = e,
        h = void 0 !== c && c,
        f = void 0 !== p && p
      ;(d[0] !== f ? ((t = f ? (0, a.jsx)(u.zcw, {}) : (0, a.jsx)(u.izo, {})), (d[0] = f), (d[1] = t)) : (t = d[1]),
        d[2] !== f
          ? ((n = (0, a.jsx)("p", {
              className: "text-base leading-4 font-medium",
              children: f
                ? (0, a.jsx)(s.A, {
                    id: "codex.space.page.comments.searchEmpty",
                    defaultMessage: "No matching comments",
                    description: "Empty state when no comment or reply matches the search in the current Page",
                  })
                : (0, a.jsx)(s.A, {
                    id: "codex.space.page.comments.empty",
                    defaultMessage: "No comments yet",
                    description: "Empty state in the Page comments surface",
                  }),
            })),
            (d[2] = f),
            (d[3] = n))
          : (n = d[3]),
        d[4] !== h || d[5] !== g || d[6] !== f
          ? ((o = f
              ? (0, a.jsx)("p", {
                  className: "text-base leading-5",
                  children: (0, a.jsx)(s.A, {
                    id: "codex.space.page.comments.searchEmptyDescription",
                    defaultMessage: "Try a different word or name",
                    description: "Suggestion when no comments match a Page comment search",
                  }),
                })
              : (null != g || h) &&
                (0, a.jsx)("p", {
                  className: "text-base leading-5",
                  children:
                    g ??
                    (0, a.jsx)(s.A, {
                      id: "codex.space.page.comments.emptyDescription",
                      defaultMessage: "Select text to add a comment",
                      description: "How to start a comment when the Page has no comments",
                    }),
                })),
            (d[4] = h),
            (d[5] = g),
            (d[6] = f),
            (d[7] = o))
          : (o = d[7]),
        d[8] !== n || d[9] !== o
          ? ((l = (0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [n, o] })),
            (d[8] = n),
            (d[9] = o),
            (d[10] = l))
          : (l = d[10]))
      let v = !f && m
      return (
        d[11] !== t || d[12] !== l || d[13] !== v
          ? ((i = (0, a.jsxs)("div", {
              className: "flex flex-col items-center gap-4 px-8 pt-40 text-center text-secondary select-none",
              children: [t, l, v],
            })),
            (d[11] = t),
            (d[12] = l),
            (d[13] = v),
            (d[14] = i))
          : (i = d[14]),
        i
      )
    }
  },
  TgJT(e, t, n) {
    n.d(t, { G: () => l })
    var a = n("ABep"),
      r = n("QosV"),
      o = n("on57")
    function l(e) {
      let t,
        n,
        l,
        i,
        s,
        d,
        c,
        u,
        p = (0, r.c)(17)
      p[0] !== e
        ? (({ children: t, borderless: l, unstyled: i, inPanel: s, selected: d, ...n } = e),
          (p[0] = e),
          (p[1] = t),
          (p[2] = n),
          (p[3] = l),
          (p[4] = i),
          (p[5] = s),
          (p[6] = d))
        : ((t = p[1]), (n = p[2]), (l = p[3]), (i = p[4]), (s = p[5]), (d = p[6]))
      let m = void 0 !== l && l,
        g = void 0 !== i && i,
        h = void 0 !== s && s,
        f = void 0 !== d && d,
        v = !g && "rounded-xl",
        y = !g && !h && "bg-surface-elevated",
        b = !g && h && f && "bg-background-secondary-soft",
        x = !g && !m && "ring-1 ring-inset ring-border hover:ring-[1.5px]"
      p[7] !== v || p[8] !== y || p[9] !== b || p[10] !== x
        ? ((c = (0, o.A)(
            "surface-ZBBsyI",
            "page-comment-typography group @container/comment-card relative min-w-0 text-default in-data-[comment-layout=floating]:p-3",
            v,
            y,
            b,
            x,
          )),
          (p[7] = v),
          (p[8] = y),
          (p[9] = b),
          (p[10] = x),
          (p[11] = c))
        : (c = p[11])
      let w = f ? "" : void 0
      return (
        p[12] !== t || p[13] !== n || p[14] !== w || p[15] !== c
          ? ((u = (0, a.jsx)("div", {
              ...n,
              className: c,
              "data-page-comment-card": !0,
              "data-page-comment-selected": w,
              children: t,
            })),
            (p[12] = t),
            (p[13] = n),
            (p[14] = w),
            (p[15] = c),
            (p[16] = u))
          : (u = p[16]),
        u
      )
    }
  },
  UM8J(e, t, n) {
    var a = n("HgFd"),
      r = n("SZCv"),
      o = n.n(r),
      l = n("DBCl"),
      i = n("YWcr"),
      s = n("fEVS")
    let d = []
    n.d(
      t,
      {},
      {
        K: function (e, t, n) {
          let r,
            d = e.getSnapshot().editorView?.state.doc,
            c = t.getSnapshot(),
            u = []
          return {
            getSnapshot: () => {
              let p = e.getSnapshot().editorView?.state.doc,
                m = t.getSnapshot(),
                g = n.getViewerAccountUserId()
              if (p === d && m === c && g === r) return u
              ;((d = p), (c = m), (r = g))
              let h = new Map(),
                f = (e) => {
                  null != g &&
                    e.owner === g &&
                    null == e.orbit &&
                    "chatgpt" !== e.backend &&
                    (null == e.hostId || "local" === e.hostId) &&
                    null != e.threadId &&
                    h.get(e.threadId)?.source !== "mention" &&
                    h.set(e.threadId, { conversationId: (0, l.JXB)(e.threadId), title: "", source: "mention" })
                }
              for (let e of (p?.descendants((e) => {
                let t = (0, a.W2)(e.attrs.lang)
                for (let n of (t?.threadId == null ||
                  h.has(t.threadId) ||
                  h.set(t.threadId, { conversationId: (0, l.JXB)(t.threadId), title: e.textContent, source: "link" }),
                [
                  e.attrs.path,
                  ...e.marks
                    .filter((e) => "link" === e.type.name)
                    .map((e) => ("string" == typeof e.attrs.href ? e.attrs.href : void 0)),
                ])) {
                  if ("string" != typeof n) continue
                  let t = (0, i.tP)(n)
                  if (t?.hostId != null && "local" !== t.hostId) continue
                  let a = t?.threadId ?? (0, l.cCV)(n)?.conversationId
                  null == a ||
                    h.has(a) ||
                    h.set(a, {
                      conversationId: a,
                      title: e.textContent || e.attrs.displayName || e.attrs.label || "",
                      source: "link",
                    })
                }
              }),
              m))
                for (let t of e.messages) null == t.deletedAt && (0, s.FD)(t.body).forEach(f)
              let v = [...h.values()]
              return (o()(u, v) || (u = v), u)
            },
            subscribe: (a) => {
              let r = [e.subscribe(a), t.subscribe(a), n.subscribe(a)]
              return () => r.forEach((e) => e())
            },
          }
        },
        o: { getSnapshot: () => d, subscribe: () => () => {} },
      },
    )
  },
  Ob1U(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("zTeN"),
      l = n("zd8w"),
      i = n("HZfM"),
      s = n("E8Sp"),
      d = n("SPnB"),
      c = n("dJBt"),
      u = n("OWtl"),
      p = n("pyoT"),
      m = n("hEJC"),
      g = n("N8b3"),
      h = n("PzpM"),
      f = n("rpnz")
    let v = (0, o.i1)(u.u, ({ pageId: e, spaceId: t }, { get: n }) => {
      if (null == t) return n(p.spacePageCreation$, e)
      let a = n(g.Yn, t)
      if (a?.response != null)
        return {
          localPageId: a.localPageId,
          serverPageId: a.response.root_page_id,
          status: "created",
          unlistedMetadata: null,
          metrics: a.metrics,
          space: { name: a.name, userId: a.userId, response: a.response },
        }
      let r = n(p.spaceAccountId$),
        o = n(d.chatGptAuthenticatedUserId$),
        l = n(h.z$).find((n) => n.space?.spaceId === t && n.space.rootPageId === e)
      return null == r
        ? void 0
        : n(f.Sq, r).find(
            (n) =>
              n.space?.userId === o &&
              (n.localPageId === l?.localPageId ||
                (n.serverPageId ?? n.pendingServerPageId) === e ||
                n.space?.serverSpaceId === t ||
                n.space?.response?.id === t),
          )
    })
    function y() {
      return !0
    }
    function b(e) {
      let t,
        n,
        i,
        d,
        p,
        m,
        g,
        f,
        y = (0, r.c)(26),
        { pageId: b, ready: w, spaceId: I, uiReady: _ } = e,
        k = (0, o.gh)(u.u)
      y[0] !== b || y[1] !== I ? ((t = { pageId: b, spaceId: I }), (y[0] = b), (y[1] = I), (y[2] = t)) : (t = y[2])
      let S = (0, o._U)(v, t),
        C = S?.emptyDraft
      ;(y[3] !== C
        ? ((n = () => C?.retain()), (i = [C]), (y[3] = C), (y[4] = n), (y[5] = i))
        : ((n = y[4]), (i = y[5])),
        (0, l.useLayoutEffect)(n, i))
      let A = null == I || S?.metrics?.documentType === "space" ? S?.metrics : void 0
      return (y[6] !== A || y[7] !== b || y[8] !== k || y[9] !== I
        ? ((d = () => {
            if (null == A) return
            let e = k.get(s.gM).pathname,
              t = A.observeEditor(null == I ? "editor" : "content")
            return () => {
              ;(t(),
                queueMicrotask(() => {
                  let t = k.get(s.gM).pathname
                  if (null == e || null == t || t === e) return
                  let n = k.get(v, { pageId: b, spaceId: I }),
                    a = k.get(h.z$).find((e) => e.localPageId === n?.localPageId)
                  x(t, n, a)
                    ? A.retainObservation(
                        k.watch((e) => {
                          let { get: t } = e,
                            n = t(s.gM).pathname,
                            a = t(v, { pageId: b, spaceId: I }),
                            r = t(h.z$).find((e) => e.localPageId === a?.localPageId)
                          ;(null != n && x(n, a, r)) || A.observationLost()
                        }),
                      )
                    : A.observationLost()
                }))
            }
          }),
          (p = [A, b, I, k]),
          (y[6] = A),
          (y[7] = b),
          (y[8] = k),
          (y[9] = I),
          (y[10] = d),
          (y[11] = p))
        : ((d = y[10]), (p = y[11])),
      (0, l.useLayoutEffect)(d, p),
      null == S || null == A)
        ? null
        : (y[12] !== S || y[13] !== A || y[14] !== I || y[15] !== _
            ? ((m =
                null != _ &&
                ("space" !== A.documentType || null != I) &&
                (0, a.jsx)(
                  c.X,
                  {
                    requireVisibleAtPaint: !0,
                    onPaint: () => {
                      _() && A.uiReady()
                    },
                  },
                  `ui:${S.localPageId}`,
                )),
              (y[12] = S),
              (y[13] = A),
              (y[14] = I),
              (y[15] = _),
              (y[16] = m))
            : (m = y[16]),
          y[17] !== S || y[18] !== A || y[19] !== b || y[20] !== w || y[21] !== I
            ? ((g =
                w &&
                (null != I || null != S.serverPageId) &&
                (0, a.jsx)(
                  c.X,
                  { requireVisibleAtPaint: !0, onPaint: () => A.paintOpportunity(null == I ? void 0 : b) },
                  S.localPageId,
                )),
              (y[17] = S),
              (y[18] = A),
              (y[19] = b),
              (y[20] = w),
              (y[21] = I),
              (y[22] = g))
            : (g = y[22]),
          y[23] !== m || y[24] !== g
            ? ((f = (0, a.jsxs)(a.Fragment, { children: [m, g] })), (y[23] = m), (y[24] = g), (y[25] = f))
            : (f = y[25]),
          f)
    }
    function x(e, t, n) {
      let a = (0, m.uv)(e)
      if (null != a)
        return new Set([t?.localPageId, t?.serverPageId ?? t?.pendingServerPageId, n?.space?.rootPageId]).has(a)
      let r = (0, i.B6)("/spaces/:spaceId", e)?.params.spaceId,
        o = new Set([t?.space?.serverSpaceId, t?.space?.response?.id, n?.space?.spaceId])
      return null != r && o.has(r)
    }
    n.d(
      t,
      {},
      {
        F: function (e) {
          let t,
            n = (0, r.c)(4),
            { pageId: o, ready: l, uiReady: i } = e
          return (
            n[0] !== o || n[1] !== l || n[2] !== i
              ? ((t = (0, a.jsx)(b, { pageId: o, ready: l, uiReady: i })),
                (n[0] = o),
                (n[1] = l),
                (n[2] = i),
                (n[3] = t))
              : (t = n[3]),
            t
          )
        },
        O: function (e) {
          let t,
            n = (0, r.c)(5),
            { pageId: o, ready: l, spaceId: i, uiReady: s } = e,
            d = (void 0 === s ? l : s) ? y : void 0
          return (
            n[0] !== o || n[1] !== l || n[2] !== i || n[3] !== d
              ? ((t = (0, a.jsx)(b, { pageId: o, ready: l, spaceId: i, uiReady: d })),
                (n[0] = o),
                (n[1] = l),
                (n[2] = i),
                (n[3] = d),
                (n[4] = t))
              : (t = n[4]),
            t
          )
        },
      },
    )
  },
  WRaR(e, t, n) {
    var a = n("HgFd"),
      r = n("f6KK"),
      o = n("S7yU"),
      l = n("YKbg")
    n.d(
      t,
      {},
      {
        d: class {
          options
          entries = new Map()
          blockIds = new Map()
          listeners = new Set()
          snapshot = []
          nextId = 0
          constructor(e) {
            this.options = e
          }
          getSnapshot = () => this.snapshot
          subscribe = (e) => (
            this.listeners.add(e),
            () => {
              this.listeners.delete(e)
            }
          )
          createNodeView = (e, t, n) => {
            let o = e
            if (!(0, a.VN)(e.attrs.dil) && "string" != typeof e.attrs.source)
              throw TypeError("Invalid Page DIL snapshot")
            let l = t.dom.ownerDocument.createElement("div")
            ;((l.contentEditable = "false"),
              (l.dataset.pageDil = ""),
              (l.dataset.pageMediaContainer = ""),
              l.setAttribute("role", "group"),
              l.setAttribute("aria-label", String(e.attrs.fallback)),
              (l.tabIndex = 0))
            let i = {
              id: this.nextId++,
              container: l,
              portalContainer: l.ownerDocument.createElement("div"),
              generationPreview: this.options?.generationPreview === !0,
              snapshot: e.attrs.dil,
              source: e.attrs.source,
              metadata: (0, a.qp)(e.attrs.dilMetadata) ?? null,
              fallback: e.attrs.fallback,
              view: t,
              getPos: n,
            }
            return (
              l.addEventListener("keydown", (e) => {
                if (e.target !== l || e.isComposing || ["Tab", "Shift", "Control", "Alt", "Meta"].includes(e.key))
                  return
                let a = n()
                if (null != a) {
                  if ("Enter" === e.key || " " === e.key) {
                    ;(e.preventDefault(), t.dispatch(t.state.tr.setSelection(r.nh.create(t.state.doc, a))), t.focus())
                    return
                  }
                  ;(e.key.startsWith("Arrow") || null == this.getInnerSelection(t)) && t.focus()
                }
              }),
              this.entries.set(l, i),
              {
                dom: l,
                update: (e) => {
                  if (e.type !== o.type) return !1
                  if (e.sameMarkup(o)) return !0
                  if (!(0, a.VN)(e.attrs.dil) && "string" != typeof e.attrs.source) return !1
                  o = e
                  let t = this.entries.get(l) ?? i
                  return (
                    this.entries.set(l, {
                      ...t,
                      snapshot: e.attrs.dil,
                      source: e.attrs.source,
                      metadata: (0, a.qp)(e.attrs.dilMetadata) ?? null,
                      fallback: e.attrs.fallback,
                    }),
                    l.setAttribute("aria-label", String(e.attrs.fallback)),
                    !0
                  )
                },
                selectNode: () => l.classList.add("ProseMirror-selectednode"),
                deselectNode: () => l.classList.remove("ProseMirror-selectednode"),
                stopEvent: (e) => e.target !== l,
                ignoreMutation: () => !0,
                destroy: () => {
                  this.entries.delete(l)
                },
              }
            )
          }
          createPlugin(e) {
            return new r.k_({
              view: (t) => {
                let n,
                  a = (0, l.Uq)(t),
                  r = t.dom.ownerDocument,
                  o = () => {
                    let e = r.getSelection(),
                      a = e?.isCollapsed === !1 ? this.getInnerSelection(t)?.container : void 0
                    n !== a &&
                      (n?.removeAttribute("data-page-dil-text-selection"),
                      a?.setAttribute("data-page-dil-text-selection", ""),
                      (n = a))
                  },
                  i = () => this.sync(t, e)
                return (
                  i(),
                  r.addEventListener("selectionchange", o),
                  {
                    update: (e, t) => {
                      ;(a.update?.(e, t), i(), o())
                    },
                    destroy: () => {
                      for (let [e, l] of (r.removeEventListener("selectionchange", o),
                      n?.removeAttribute("data-page-dil-text-selection"),
                      a.destroy?.(),
                      this.entries))
                        l.view === t && this.entries.delete(e)
                      i()
                    },
                  }
                )
              },
              props: {
                nodeViews: { [o.P]: this.createNodeView },
                handleKeyPress: (e) => this.protectTextInput(e),
                handleTextInput: (e) => this.protectTextInput(e),
                handlePaste: (e) => this.protectTextInput(e),
                handleDOMEvents: {
                  keydown: (e, t) =>
                    "Backspace" === t.key || "Delete" === t.key
                      ? this.preserveInnerSelection(e, t)
                      : !t.metaKey &&
                        (!t.ctrlKey || t.altKey) &&
                        (1 === t.key.length || "Dead" === t.key || "Process" === t.key || t.isComposing) &&
                        this.protectTextInput(e, t),
                  beforeinput: (e, t) =>
                    t.inputType.startsWith("insert")
                      ? this.protectTextInput(e, t)
                      : t.inputType.startsWith("delete") && this.preserveInnerSelection(e, t),
                  paste: (e, t) => this.protectTextInput(e, t),
                  compositionstart: (e, t) => this.protectTextInput(e, t),
                  compositionupdate: (e, t) => this.protectTextInput(e, t),
                },
              },
            })
          }
          plugin = this.createPlugin()
          sync(e, t) {
            let n = new Map(
                this.snapshot.flatMap((t) => {
                  let n = this.blockIds.get(t.container)
                  return t.view === e && null != n ? [[n, t]] : []
                }),
              ),
              a = new Map()
            for (let [r, o] of this.entries) {
              if (o.view !== e) continue
              let l = o.getPos(),
                i = null == l ? void 0 : t?.(e, l)
              null != i && a.set(r, i)
              let s =
                  (null == i ? void 0 : n.get(i)) ??
                  (this.blockIds.has(r) && this.blockIds.get(r) !== i
                    ? { id: this.nextId++, portalContainer: r.ownerDocument.createElement("div") }
                    : o),
                d =
                  o.id === s.id && o.portalContainer === s.portalContainer
                    ? o
                    : { ...o, id: s.id, portalContainer: s.portalContainer }
              ;(d.portalContainer.parentElement !== r && r.append(d.portalContainer), this.entries.set(r, d))
            }
            let r = new Set([...this.entries.values()].map((e) => e.portalContainer))
            for (let e of this.snapshot) r.has(e.portalContainer) || e.portalContainer.remove()
            ;((this.blockIds = a), this.publish())
          }
          preserveInnerSelection(e, t) {
            return null != this.getInnerSelection(e) && (t.preventDefault(), !0)
          }
          protectTextInput(e, t) {
            if (!e.editable) return !1
            let { selection: n } = e.state,
              a = n instanceof r.nh && n.node.type.name === o.P ? e.nodeDOM(n.from) : null,
              l = this.getInnerSelection(e) ?? this.snapshot.find((t) => t.view === e && t.container === a),
              i = l?.getPos()
            if (null == l || null == i) return !1
            t?.preventDefault()
            let s = r.nh.create(e.state.doc, i)
            return (
              s.eq(n) || e.dispatch(e.state.tr.setSelection(s)),
              e.focus(),
              l.container.focus({ preventScroll: !0 }),
              !0
            )
          }
          getInnerSelection(e) {
            let t = e.dom.ownerDocument.getSelection()
            if (null == t) return
            let n = t.anchorNode,
              a = (n instanceof Element ? n : n?.parentElement)?.closest("[data-page-dil]"),
              r = null == a ? void 0 : this.entries.get(a)
            return r?.view === e && r.container.contains(t.focusNode) ? r : void 0
          }
          publish() {
            let e = [...this.entries.values()]
            if (!(e.length === this.snapshot.length && e.every((e, t) => e === this.snapshot[t])))
              for (let t of ((this.snapshot = e), this.listeners)) t()
          }
        },
      },
    )
  },
  YKbg(e, t, n) {
    var a = n("f6KK"),
      r = n("BdKm")
    class o {
      snapshot = null
      listeners = new Set()
      getSnapshot = () => this.snapshot
      subscribe = (e) => (this.listeners.add(e), () => this.listeners.delete(e))
      set(e) {
        this.snapshot !== e && ((this.snapshot = e), this.listeners.forEach((e) => e()))
      }
    }
    let l = new WeakMap()
    function i(e) {
      let t = l.get(e)
      return (null == t && ((t = new o()), l.set(e, t)), t)
    }
    n.d(
      t,
      {},
      {
        $Y: i,
        Jy: function (e, t, n) {
          let a = i(t.view),
            o = () => a.set({ editorView: e, mount: t, region: n, selection: (0, r.B0)(e) })
          return (
            e.dom.addEventListener("focus", o),
            {
              update() {
                ;(e.hasFocus() || a.getSnapshot()?.editorView === e) && o()
              },
              destroy() {
                ;(e.dom.removeEventListener("focus", o), a.getSnapshot()?.editorView === e && a.set(null))
              },
            }
          )
        },
        Uq: function (e) {
          let t = i(e),
            n = (e) => {
              let n = t.getSnapshot()
              null != n && e.target instanceof Node && !n.editorView.dom.contains(e.target) && t.set(null)
            }
          return (
            e.dom.addEventListener("pointerdown", n),
            e.dom.addEventListener("focusin", n),
            {
              update() {
                let n = t.getSnapshot(),
                  r = e.state.selection
                null == n || (r instanceof a.nh && r.from === n.mount.getPos()) || t.set(null)
              },
              destroy() {
                ;(e.dom.removeEventListener("pointerdown", n),
                  e.dom.removeEventListener("focusin", n),
                  t.set(null),
                  l.delete(e))
              },
            }
          )
        },
      },
    )
  },
  cJbq(e, t, n) {
    var a = n("WhP6"),
      r = n("d8ZM"),
      o = n("czKg"),
      l = n("rUQK"),
      i = n("taWL"),
      s = n("X2Bp"),
      d = n("H0zY"),
      c = n("f6KK"),
      u = n("hGgS"),
      p = n("Lo8c"),
      m = n("BdKm"),
      g = n("MLlN")
    let h = [
      { id: "page.formatNumberedList", style: "orderedList" },
      { id: "page.formatBulletedList", style: "unorderedList" },
      { id: "page.formatChecklist", style: "checklist" },
    ]
    function f(e, t) {
      let n,
        { state: s } = e,
        u = "nativeSelection" in t ? t : null,
        v = u?.nativeSelection,
        y = v instanceof c.U3 ? (0, r.E)(v.$from) : null,
        b =
          !e.isDestroyed &&
          u?.kind === "text" &&
          null != v &&
          v.$from.doc === s.doc &&
          null != y &&
          v.$to.depth >= y &&
          v.$from.before(y) === v.$to.before(y),
        x = "nativeSelection" in t ? t.targets : t,
        w = b ? [] : (0, g.KR)(e, x, v ?? null)
      b &&
        s.doc.nodesBetween(v.from, v.to, (t, n) => {
          if (!t.isTextblock) return !0
          if (!v.empty && (v.from >= n + t.nodeSize - 1 || v.to <= n + 1)) return !1
          let a = (0, p.cY)(e, n)
          return (null != a && w.push({ node: t, from: n, element: a }), !1)
        })
      let I = [...w]
      if (0 === I.length && v?.empty && v.$from.parent.isTextblock) {
        let t = v.$from.before(),
          n = (0, p.cY)(e, t)
        null != n && I.push({ node: v.$from.parent, from: t, element: n })
      }
      let _ = w[0],
        k =
          u?.kind === "blocks" ||
          x.length > 1 ||
          w.length > 1 ||
          (null != v && null != _ && (v.from < _.from || v.to > _.from + _.node.nodeSize)),
        { blockquote: S, code_block: C } = s.schema.nodes,
        A = !k && null != S && v?.$from.blockRange(v.$to)?.parent.type === S,
        j = !k && v?.$from.parent.type === C
      n = null == v || k ? (0, g.yb)(s, w) : A ? "quote" : j ? "code" : (0, o.On)(v)
      let M = (t) => {
        let n = "code" === t ? I : w
        return (
          !e.isDestroyed &&
          e.state.doc === s.doc &&
          u?.kind !== "table" &&
          (!b || "paragraph" === t || "unorderedList" === t || "orderedList" === t || "code" === t) &&
          (null == v || v.$from.doc === s.doc) &&
          ("checklist" !== t || null != s.schema.nodes.task_list_item) &&
          ("quote" !== t || null != S) &&
          ("code" !== t || null != C) &&
          (null == v || k || "checklist" === t || "quote" === t || "code" === t || l.DR.some((e) => e === t)) &&
          (0 === n.length ? null != v && 0 === x.length : (0, g.Ar)(s, n, t))
        )
      }
      return {
        activeStyle: n,
        canSelect: M,
        select(t, n = "set", r = "replace") {
          if (e.editable && !e.composing && M(t)) {
            if (null == v) return void (1 === w.length ? (0, g.rZ)(e, w[0], t) : (0, g.od)(e, w, t, n, null))
            if (
              (e.state.selection.eq(v) || e.dispatch(e.state.tr.setSelection(v)),
              k ||
                "code" === t ||
                (t.startsWith("heading") &&
                  v.$from.parent.content.content.some((e) => e.type === s.schema.linebreakReplacement)))
            ) {
              if (0 === w.length && v instanceof c.U3 && v.empty) {
                let t = v.$from.before(),
                  n = (0, p.cY)(e, t)
                null != n && w.push({ node: v.$from.parent, from: t, element: n })
              }
              ;(0, g.od)(e, "code" === t ? I : w, t, n)
            } else if ("quote" === t) A || (0, d.Im)(S)(e.state, e.dispatch)
            else {
              if (A && "replace" === r && ((0, d.yY)(e.state, e.dispatch), h.some((e) => e.style === t)))
                return void f(e, (0, m.B0)(e)).select(t, n, "preserve")
              if ("checklist" === t) "toggle" === n ? (0, a.Vu)(e) : (0, a.XY)(e)
              else {
                let n = l.DR.find((e) => e === t)
                null != n && (0, i.NQ)(e, n)
              }
            }
            e.focus()
          }
        },
      }
    }
    function v(e, t) {
      e.isDestroyed || f(e, (0, m.B0)(e)).select(t, "toggle", "preserve")
    }
    n.d(
      t,
      {},
      {
        VN: v,
        cW: h,
        rg: f,
        wI: function (e = (e) => (0, s.ad)({ commandId: e })) {
          return new c.k_({
            props: {
              handleKeyDown: (t, n) => {
                if (!t.editable || t.composing || n.isComposing) return !1
                for (let { id: a, style: r } of h) if (e(a).some((e) => (0, u.eg)(n, e))) return (v(t, r), !0)
                return !1
              },
            },
          })
        },
      },
    )
  },
  MLlN(e, t, n) {
    var a = n("o98b"),
      r = n("GTmQ"),
      o = n("f6KK"),
      l = n("HLFh"),
      i = n("fXhT"),
      s = n("iUJ1"),
      d = n("wBb7"),
      c = n("tINb"),
      u = n("Lo8c"),
      p = n("OIHP"),
      m = n("Uguk")
    let g = { heading1: 1, heading2: 2, heading3: 3, heading4: 4, heading5: 5, heading6: 6 }
    function h(e, t, n) {
      if (!t.every((t) => (0, d.Qx)(e, t))) return []
      let a = [],
        r = n?.empty === !1 ? n.ranges : null
      for (let n of t)
        !(function t(n, o) {
          let l = o + n.nodeSize
          if (null != r && !r.some(({ $from: e, $to: t }) => e.pos < l - 1 && t.pos > o + 1)) return
          let i = (0, m.s)(n) || "callout" === n.type.name,
            s = null == r || r.some(({ $from: e, $to: t }) => e.pos <= o + 1 && t.pos >= l - 1)
          if (n.isTextblock || (i && s && n.content.content.every((e) => e.isTextblock))) {
            let t = (0, u.cY)(e, o)
            null != t && a.push({ node: n, from: o, element: t })
          } else (i || "list" === n.type.name || "ordered_list" === n.type.name) && n.forEach((e, n) => t(e, o + 1 + n))
        })(n.node, n.from)
      return a
    }
    function f(e, t) {
      switch (t.node.type.name) {
        case "paragraph": {
          let n = e.doc.resolve(t.from),
            a = (0, m.O)(n)
          if (0 === n.index() && a?.node.type.isInGroup("list_item")) {
            if ("task_list_item" === a.node.type.name) return "checklist"
            return "ordered_list" === n.node(n.depth - 1).type.name ? "orderedList" : "unorderedList"
          }
          if (a?.node.type.name === "blockquote") return "quote"
          if ("callout" === n.parent.type.name) return "callout"
          return "paragraph"
        }
        case "heading":
          switch (t.node.attrs.level) {
            case 1:
              return "heading1"
            case 2:
              return "heading2"
            case 3:
              return "heading3"
            case 4:
              return "heading4"
            case 5:
              return "heading5"
            case 6:
              return "heading6"
            default:
              return null
          }
        case "code_block":
          return "code"
        case "blockquote":
          return t.node.firstChild?.isTextblock ? "quote" : null
        case "callout":
          return t.node.firstChild?.isTextblock ? "callout" : null
        case "task_list_item":
          return "checklist"
        case "regular_list_item":
          return "ordered_list" === e.doc.resolve(t.from).parent.type.name ? "orderedList" : "unorderedList"
        default:
          return null
      }
    }
    function v(e, t, n) {
      if ("callout" === n && "callout" !== f(e, t) && ((0, s.o)(e.doc.resolve(t.from)) || (0, s.v)(t.node))) return !1
      let a = x(e.schema, n),
        r = e.schema.linebreakReplacement,
        o = null != r && !!a.contentMatch.matchType(r)
      return w(t).every(({ node: e }) => {
        let t = !0
        return (
          e.forEach((l) => {
            ;(a.contentMatch.matchType(l.type) ||
              (l.type === r && ("pre" === a.whitespace || null != g[n])) ||
              (t = !1),
              "pre" === e.type.whitespace &&
                "pre" !== a.whitespace &&
                !o &&
                l.isText &&
                /[\r\n]/.test(l.text ?? "") &&
                (t = !1))
          }),
          t
        )
      })
    }
    function y(e, t, n) {
      let a = [...t].sort((e, t) => e.from - t.from)
      return (
        a.length > 0 &&
        a.every((t, r) => {
          let o = a[r - 1]
          return (
            t.from >= 0 &&
            t.from < e.doc.content.size &&
            e.doc.nodeAt(t.from) === t.node &&
            (null == o || o.from + o.node.nodeSize <= t.from) &&
            null != f(e, t) &&
            v(e, t, n)
          )
        })
      )
    }
    function b(e, t, n, r = null) {
      let s = e.doc,
        d = s.type.schema,
        c = e.mapping.maps.length,
        u = s.resolve(t.from),
        p = (0, m.O)(u),
        h = p?.node.type.isInGroup("list_item") && (!t.node.isTextblock || 0 === u.index()) ? p : null,
        f = !t.node.isTextblock || null != h || p?.node.type.name === "blockquote" || "callout" === u.parent.type.name,
        v = w(t),
        y = v[0]
      if (null == y) return !1
      let _ = o.U3.create(s, y.from + 1, y.from + 1 + y.node.content.size)
      e.setSelection(_)
      let k = null,
        S = (0, i.zo)(t.node.attrs.pageLayout)
      "orderedList" === n
        ? (k = d.nodes.ordered_list)
        : ("unorderedList" === n || "checklist" === n) && (k = d.nodes.list)
      let C = null != k && null != h ? h : t,
        A = o.U3.between(s.resolve(C.from + 1), s.resolve(C.from + C.node.nodeSize - 1)).getBookmark()
      if (null != h && s.resolve(h.from).parent.type === k)
        e.setNodeMarkup(
          h.from,
          "checklist" === n ? d.nodes.task_list_item : d.nodes.regular_list_item,
          "checklist" === n ? { ...h.node.attrs, checked: !1 } : h.node.attrs,
        )
      else {
        if (f) {
          let a = h ?? t,
            r = s.resolve(a.from + 1).blockRange(s.resolve(a.from + a.node.nodeSize - 1)),
            o = null == r ? null : (0, l.jP)(r)
          if (null == r || null == o) return !1
          e.lift(r, o)
          let i = s.resolve(a.from)
          if (i.parent.type === d.nodes.ordered_list && i.index() + 1 < i.parent.childCount) {
            let t = e.doc.resolve(e.mapping.slice(c).map(a.from + a.node.nodeSize + 1)),
              r = t.depth - 1
            e.setNodeMarkup(t.before(r), void 0, {
              ...t.node(r).attrs,
              startingNumber: null == g[n] ? i.parent.attrs.startingNumber + i.index() + 1 : 1,
            })
          }
        }
        for (let { node: t, from: a } of v) {
          let o = e.mapping.slice(c).map(a + 1),
            l = g[n]
          null != l && t.content.content.some((e) => e.type === d.linebreakReplacement)
            ? I(e, e.doc.resolve(o).before(), l, r?.map(e.doc, e.mapping.slice(c)) ?? null)
            : e.setBlockType(o, o, x(d, n), { ...t.attrs, pageLayout: S, level: l })
        }
        if (null != k || "quote" === n || "callout" === n) {
          e.setSelection(A.map(e.mapping.slice(c)).resolve(e.doc))
          let t = e.selection.$from.blockRange(e.selection.$to)
          if (null == t) return !1
          if (null != k) {
            if (!(0, a.d)(e, t, k, { pageLayout: S })) return !1
          } else {
            let a = (0, l.oM)(t, d.nodes["callout" === n ? "callout" : "blockquote"], { pageLayout: S })
            if (null == a) return !1
            e.wrap(t, a)
          }
          if ("checklist" === n)
            for (let { from: t } of v) {
              let n = e.doc.resolve(e.mapping.slice(c).map(t + 1)),
                a = n.depth - 1
              e.setNodeMarkup(n.before(a), d.nodes.task_list_item, n.node(a).attrs)
            }
        }
      }
      return (e.setSelection(o.U3.create(e.doc, _.map(e.doc, e.mapping.slice(c)).to)), !0)
    }
    function x(e, t) {
      return null != g[t] ? e.nodes.heading : e.nodes["code" === t ? "code_block" : "paragraph"]
    }
    function w(e) {
      if (e.node.isTextblock) return [{ node: e.node, from: e.from }]
      let t = []
      return (
        e.node.forEach((n, a) => {
          n.isTextblock && t.push({ node: n, from: e.from + 1 + a })
        }),
        t
      )
    }
    function I(e, t, n, a) {
      let r = e.doc.nodeAt(t)
      if (null == r || !r.isTextblock) return
      let o = []
      r.forEach((e, n) => {
        e.type === r.type.schema.linebreakReplacement && o.push(t + 1 + n)
      })
      let l = [t + 1, ...o.map((e) => e + 1)],
        i = [...o, t + 1 + r.content.size],
        s = l.filter((e, t) => {
          let n = i[t]
          return (
            null == a ||
            a.ranges.some(({ $from: t, $to: r }) =>
              a.empty ? t.pos >= e && t.pos <= n : (t.pos < n || (e === n && t.pos === e)) && r.pos > e,
            )
          )
        }),
        d = o.filter((e, t) => s.includes(l[t]) || s.includes(l[t + 1])),
        c = e.mapping.maps.length
      for (let t of d.reverse()) e.delete(t, t + 1).split(t)
      for (let t of s) {
        let a = e.mapping.slice(c).map(t)
        e.setBlockType(a, a, r.type.schema.nodes.heading, { ...r.attrs, level: n })
      }
    }
    n.d(
      t,
      {},
      {
        Ar: y,
        KR: h,
        cO: I,
        od: function (e, t, n, a = "set", i = e.state.selection) {
          if (!e.editable || !t.every((t) => (0, d.Qx)(e, t))) return
          let s = i?.empty === !1 ? h(e, t, i) : t
          if (!y(e.state, s, n)) return
          let { state: u } = e,
            m = u.tr,
            v =
              "toggle" === a &&
              s.every(
                (e) =>
                  f(u, e) === n &&
                  ("checklist" !== n || (e.node.attrs.checked ?? u.doc.resolve(e.from).parent.attrs.checked) === !1),
              )
                ? "paragraph"
                : n,
            x = new Set(s.flatMap(w).map(({ from: e }) => e)),
            I = "callout" === v ? (0, c.zk)(u) : [],
            _ = s.flatMap((e) => {
              let t = u.doc.resolve(e.from),
                n = e.node.isTextblock && t.depth > 0,
                a = "callout" === e.node.type.name ? { node: e.node, from: e.from } : null
              null == a && "callout" === t.parent.type.name && (a = { node: t.parent, from: t.before() })
              let r = !I.some(({ from: t, to: n }) => t < e.from + e.node.nodeSize && n > e.from)
              if (null != a) {
                let { node: e, from: t } = a
                e.forEach((e, n) => {
                  ;(e.isTextblock && x.has(t + 1 + n)) || (r = !1)
                })
              }
              return w(e).flatMap(({ node: e, from: t }) => {
                let a = [t + 1]
                return (
                  null != g[v] &&
                    u.selection instanceof p.p &&
                    e.forEach((e, n) => {
                      e.type === u.schema.linebreakReplacement && a.push(t + n + 2)
                    }),
                  a.map((e) => ({ position: e, granular: n, canJoinCallout: r }))
                )
              })
            })
          if ("callout" !== v && i?.empty === !1) {
            let e = new Set()
            for (let t of s) {
              let n = u.doc.resolve(t.from)
              for (let t = n.depth; t > 0; t -= 1) {
                if ("callout" !== n.node(t).type.name) continue
                let a = n.start(t),
                  r = n.end(t),
                  l = o.U3.between(u.doc.resolve(a), u.doc.resolve(r))
                i.ranges.some(({ $from: e, $to: t }) => e.pos <= l.from && t.pos >= l.to) && e.add(a)
              }
            }
            for (let t of [...e].sort((e, t) => t - e)) {
              let e = m.doc.resolve(m.mapping.map(t)),
                n = e.blockRange(m.doc.resolve(e.end())),
                a = null == n ? null : (0, l.jP)(n)
              if (null == n || null == a) return
              m.lift(n, a)
            }
          }
          for (let e of [...s].sort((e, t) => e.from - t.from)) {
            if (
              f(u, e) === v &&
              !(
                "toggle" === a &&
                "checklist" === v &&
                (e.node.attrs.checked ?? u.doc.resolve(e.from).parent.attrs.checked)
              )
            )
              continue
            let t = w(e)[0]
            if (null == t) return
            let n = m.doc.resolve(m.mapping.map(t.from + 1)),
              r = n.depth
            for (; r > 0 && n.node(r) !== e.node;) r -= 1
            if (0 === r || !b(m, { ...e, from: n.before(r) }, v, i instanceof o.U3 ? i.map(m.doc, m.mapping) : null))
              return
          }
          if (m.docChanged && ("orderedList" === v || "unorderedList" === v || "checklist" === v || "callout" === v)) {
            let e = new Set()
            for (let { position: t, canJoinCallout: n } of _) {
              if ("callout" === v && !n) continue
              let a = m.doc.resolve(m.mapping.map(t))
              for (let t = a.depth - 1; t > 0; t -= 1) {
                if ("callout" === v && "callout" === a.node(t).type.name) {
                  e.add(a.before(t))
                  break
                }
                if ("callout" !== v && a.node(t).type.isInGroup("list_item")) {
                  e.add(a.before(t - 1))
                  break
                }
              }
            }
            for (let t of [...e].sort((e, t) => t - e)) {
              let n = m.doc.nodeAt(t),
                a = m.doc.resolve(t).nodeBefore,
                r = null == a ? null : t - a.nodeSize
              null != r &&
                null != n &&
                e.has(r) &&
                a?.attrs.pageLayout === n.attrs.pageLayout &&
                ("callout" !== v || (null != a && (0, c.FJ)(a).sameMarkup((0, c.FJ)(n)))) &&
                (0, l.n9)(m.doc, t) &&
                m.join(t)
            }
          }
          if (!m.docChanged) return void e.focus()
          if (u.selection instanceof p.p) {
            let e = _.map(({ position: e, granular: t }) => {
              let n = m.doc.resolve(m.mapping.map(e))
              if (t) return n.before()
              for (let e = n.depth; e > 0; e -= 1) {
                let t = n.node(e)
                if (
                  ("quote" === v && "blockquote" === t.type.name) ||
                  ("callout" === v && "callout" === t.type.name) ||
                  (("orderedList" === v || "unorderedList" === v || "checklist" === v) && t.type.isInGroup("list_item"))
                )
                  return n.before(e)
              }
              return n.before()
            })
            ;(i instanceof p.p &&
              u.doc.nodesBetween(i.from, i.to, (t, n) => {
                if (!t.isBlock) return !1
                let a = m.mapping.map(n)
                return (
                  !(
                    m.doc.nodeAt(a) === t &&
                    i.ranges.some(({ $from: e, $to: a }) => e.pos <= n && a.pos >= n + t.nodeSize)
                  ) || (e.push(a), !1)
                )
              }),
              m.setSelection(p.p.create(m.doc, e)))
          } else
            m.setSelection(
              u.selection.empty && null == i && null == g[v]
                ? o.LN.near(m.doc.resolve(m.mapping.map(_[0].position)))
                : u.selection.map(m.doc, m.mapping),
            )
          ;(null != e.state.storedMarks && m.ensureMarks(e.state.storedMarks),
            e.dispatch((0, r._B)(m.scrollIntoView())),
            e.focus())
        },
        rZ: function (e, t, n) {
          if (!e.editable || !(0, d.Qx)(e, t)) return
          let a = f(e.state, t)
          if (null == a || a === n || !v(e.state, t, n)) return
          let o = e.state.tr
          b(o, t, n) &&
            (null != e.state.storedMarks && o.ensureMarks(e.state.storedMarks),
            e.dispatch((0, r._B)(o.scrollIntoView())),
            e.focus())
        },
        yb: function (e, t) {
          let n = t[0]
          if (null == n) return null
          let a = f(e, n)
          return t.every((t) => f(e, t) === a) ? a : null
        },
      },
    )
  },
  Ek4q(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("Wf1j"),
      l = n("GKsW")
    n.d(
      t,
      {},
      {
        O: function (e) {
          let t,
            n,
            i,
            s,
            d = (0, r.c)(9),
            { title: c } = e,
            u = (0, o.A)()
          if (null == c) return null
          if (d[0] !== u || d[1] !== c) {
            let e = c.replace(/[\r\n]+/g, " ").trim()
            ;((t = l.Q),
              (n = e || null),
              (i = e
                ? u.formatMessage(
                    {
                      id: "codex.space.page.documentTitle",
                      defaultMessage: "{title} - ChatGPT",
                      description:
                        "Browser tab title while viewing a document in Space. The title placeholder is the user-authored document name and updates as it changes. Keep ChatGPT as the product name.",
                    },
                    { title: e },
                  )
                : u.formatMessage({
                    id: "codex.space.page.emptyDocumentTitle",
                    defaultMessage: "ChatGPT",
                    description:
                      "Browser tab title for a document in Space that has no name; keep the ChatGPT product name unchanged",
                  })),
              (d[0] = u),
              (d[1] = c),
              (d[2] = t),
              (d[3] = n),
              (d[4] = i))
          } else ((t = d[2]), (n = d[3]), (i = d[4]))
          return (
            d[5] !== t || d[6] !== n || d[7] !== i
              ? ((s = (0, a.jsx)(t, { nativeTitle: n, title: i })), (d[5] = t), (d[6] = n), (d[7] = i), (d[8] = s))
              : (s = d[8]),
            s
          )
        },
      },
    )
  },
  iUJ1(e, t, n) {
    n.d(
      t,
      {},
      {
        o: function (e) {
          for (let t = e.depth; t > 0; t -= 1) if ("callout" === e.node(t).type.name) return !0
          return !1
        },
        v: function (e) {
          let t = "callout" === e.type.name
          return (e.descendants((e) => !(t = t || "callout" === e.type.name)), t)
        },
      },
    )
  },
  SPCP(e, t, n) {
    n.d(t, { h: () => L })
    var a = n("ABep"),
      r = n("QosV"),
      o = n("zTeN"),
      l = n("eFn4"),
      i = n("Bbed"),
      s = n("oW9F"),
      d = n("zd8w"),
      c = n("Wf1j"),
      u = n("rPIX"),
      p = n("SZCv"),
      m = n.n(p),
      g = n("KW2R"),
      h = n("OOaz"),
      f = n("OWtl"),
      v = n("uqiN"),
      y = n("zyJC"),
      b = n("lBzi"),
      x = n("MrGp"),
      w = n("J3Mi")
    let I = (0, o.i1)(
      f.u,
      (e, { get: t }) => {
        if (null == e) return { hasPendingInput: !1, pendingInputKey: null, isAvailable: !1, isActive: !1 }
        let n = t(b.chatGptConversationQueryById$, e)
        t(g.h)
        let a = t(x.Jv, e),
          r = t(x.F1, e),
          o = (0, x.QN)(r),
          l = null == a ? n.data : { current_node: t(x.Od, e), mapping: a, conversation_origin: t(x.uh, e) },
          i = (null == l ? [] : (0, y.hd)(l, { isStreaming: o })).flatMap(({ turn: e }) =>
            e.items.flatMap((e) =>
              ("chatgpt-reasoning-group" === e.type ? e.items : [e]).flatMap((e) =>
                "chatgpt-tool-approval" === e.type && e.request?.type !== "preview" ? [e.messageId] : [],
              ),
            ),
          ),
          s = t(w.T4, e),
          d = [...i, ...(null == s ? [] : [s.messageId])],
          c = d.length > 0
        return {
          hasPendingInput: c,
          pendingInputKey: c ? JSON.stringify(d) : null,
          isAvailable: null != l,
          isActive: o,
        }
      },
      { isEqual: m() },
    )
    var _ = n("IGL9")
    let k = (0, o.i1)(
        f.u,
        (e, { get: t }) => {
          let n = t(_.$T, e)
          return {
            status: n.status,
            tasks: n.tasks.map((e) => {
              let n = e.lastRun?.status === "in_progress",
                a = t(I, null == e.conversationId ? null : (0, h.q3)(e.conversationId), {
                  enabled: e.lastRun?.status === "in_progress" || e.needsAttention || "unavailable" === e.status,
                }),
                r = e.needsAttention && !a.isAvailable,
                o = a.hasPendingInput || r,
                l = n || a.isActive
              return { ...e, ...a, requiresInput: o, isRunActive: l || o, isRunning: !o && l }
            }),
          }
        },
        { autoDispose: !0, isEqual: m() },
      ),
      S = (0, o.bD)(
        f.u,
        (e) => [],
        {
          isEqual: m(),
          onMount: (e, t) =>
            t.watch(({ get: n }) => {
              let a
              if (n(_.Wq) !== t.key.identity) return
              let r = n(k, t.key.pageId)
              if ("unavailable" === r.status) return
              let o = new Set()
              e((e) => {
                let t = r.tasks.map((t) => {
                  let n = e.find((e) => e.automationId === t.automationId),
                    a = !t.isAvailable,
                    r = n?.attentionSnapshotKey ?? null,
                    l =
                      null != t.conversationId && null != t.lastPublishedRunAt
                        ? JSON.stringify([t.conversationId, t.lastPublishedRunAt])
                        : null
                  return (
                    "error" !== t.status &&
                      "loading" !== t.status &&
                      (r =
                        t.needsAttention && null != t.conversationId
                          ? JSON.stringify([t.conversationId, t.lastRun?.id, t.lastRun?.updated_at])
                          : null),
                    null != t.conversationId &&
                      ((null != r && r !== n?.attentionSnapshotKey) ||
                        (null != n && null != l && l !== n.publishedRunKey)) &&
                      o.add((0, h.q3)(t.conversationId)),
                    {
                      automationId: t.automationId,
                      pendingInputKey: a ? (n?.pendingInputKey ?? null) : t.pendingInputKey,
                      attentionSnapshotKey: r,
                      publishedRunKey: l,
                    }
                  )
                })
                "ready" !== r.status && t.push(...e.filter((e) => !t.some((t) => t.automationId === e.automationId)))
                let n = t.find((t) => {
                  let n = e.find((e) => e.automationId === t.automationId)
                  return null != t.pendingInputKey && t.pendingInputKey !== n?.pendingInputKey
                })
                return ((a = n?.automationId), t)
              })
              let l = r.tasks.find((e) => e.automationId === a)
              for (let e of (l?.conversationId != null &&
                (0, v.gP)(t, t.key.pageId, {
                  kind: "chatgpt",
                  conversationId: (0, h.q3)(l.conversationId),
                  title: l.title,
                }),
              o))
                (0, g.refetchChatGptConversation)(t, e, "explicit_update")
            }),
        },
        { autoDispose: !0 },
      )
    var C = n("QAev"),
      A = n("gcWI"),
      j = n("UM8J"),
      M = n("rpnz"),
      P = n("p66p"),
      T = n("pyoT"),
      E = n("Oj9r"),
      N = n("eviP"),
      U = n("bIvi")
    function q(e) {
      let t,
        n,
        a,
        l,
        i,
        s,
        p,
        m,
        g,
        h,
        f,
        y = (0, r.c)(66),
        {
          accountId: b,
          disableSubmit: x,
          documentType: w,
          enabled: I,
          getAdditionalUserContext: k,
          pageId: q,
          namespace: D,
          sourceId: z,
          title: L,
          taskLinks: O,
        } = e,
        R = void 0 === O ? j.o : O,
        $ = (0, o.gh)(E.GD),
        B = (0, d.useSyncExternalStore)(R.subscribe, R.getSnapshot, j.o.getSnapshot),
        F = (0, c.A)(),
        V = null != (0, o.Ul)(N.q),
        W = (0, o.Ul)(P.Mr)
      y[0] !== q ? ((t = (0, M.sD)(q)), (y[0] = q), (y[1] = t)) : (t = y[1])
      let H = t,
        G = I && (!H || (V && W?.accountId === b && W.pageId === q))
      y[2] !== q || y[3] !== L ? ((n = L?.trim() || q), (y[2] = q), (y[3] = L), (y[4] = n)) : (n = y[4])
      let K = n
      y[5] !== k ? ((a = (e) => k?.(e)), (y[5] = k), (y[6] = a)) : (a = y[6])
      let Q = (0, U.K)(a),
        X = (0, d.useRef)(null)
      ;(y[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = () => () => {
            ;(X.current?.(), (X.current = null))
          }),
          (y[7] = l))
        : (l = y[7]),
        y[8] !== b || y[9] !== G || y[10] !== q || y[11] !== $ || y[12] !== z
          ? ((i = [b, G, q, $, z]), (y[8] = b), (y[9] = G), (y[10] = q), (y[11] = $), (y[12] = z), (y[13] = i))
          : (i = y[13]),
        (0, d.useLayoutEffect)(l, i),
        y[14] !== w || y[15] !== F || y[16] !== D
          ? ("meeting_notes" === D
              ? (s = F.formatMessage({
                  id: "codex.page.chat.meetingPlaceholder",
                  defaultMessage: "Ask about this meeting…",
                  description: "Placeholder in the chat composer for a meeting notes Page",
                }))
              : null != w &&
                (s = F.formatMessage(
                  {
                    id: "codex.page.chat.nativePlaceholder",
                    defaultMessage:
                      "Work with this {documentType, select, granola_whiteboard {canvas} granola_workbook {sheet} granola_presentation {slide} other {doc}}…",
                    description:
                      "Placeholder in the floating chat composer for the open native document: a canvas, spreadsheet (sheet), presentation, or doc",
                  },
                  { documentType: w },
                )),
            (y[14] = w),
            (y[15] = F),
            (y[16] = D),
            (y[17] = s))
          : (s = y[17]),
        y[18] !== b ||
        y[19] !== G ||
        y[20] !== s ||
        y[21] !== x ||
        y[22] !== w ||
        y[23] !== B ||
        y[24] !== H ||
        y[25] !== D ||
        y[26] !== q ||
        y[27] !== K ||
        y[28] !== Q ||
        y[29] !== $ ||
        y[30] !== z
          ? ((p = () =>
              G && null != b
                ? $.watch((e) => {
                    let { get: t } = e,
                      n = {
                        documentType: w,
                        pageId: q,
                        pageTitle: K,
                        namespace: D,
                        spaceContext: t(T.spacePageContext$, q),
                        includeReferenceTitles: !1,
                      },
                      a = {
                        accountId: b,
                        composerPlaceholder: s,
                        disableSubmit: x || H,
                        documentType: w,
                        getAdditionalUserContext: Q,
                        kind: "codex",
                        linkedTasks: B,
                        pageId: q,
                        pageTitle: K,
                        pageContextDeveloperInstructions: (0, C.yZ)(n),
                        localPageContextDeveloperInstructions: (0, C.yZ)({
                          ...n,
                          artifactExecution: "local-artifact-session",
                        }),
                        capturePageAdditionalContext: (e) => (0, C.SG)({ ...n, artifactExecution: e }, Q(!1)),
                        preferredPresentation: "compact",
                        sourceId: z,
                      }
                    ;((X.current = (0, P.QX)($, a)), (0, A.v)($, z, K))
                  })
                : void $.set(u.Px, null)),
            (y[18] = b),
            (y[19] = G),
            (y[20] = s),
            (y[21] = x),
            (y[22] = w),
            (y[23] = B),
            (y[24] = H),
            (y[25] = D),
            (y[26] = q),
            (y[27] = K),
            (y[28] = Q),
            (y[29] = $),
            (y[30] = z),
            (y[31] = p))
          : (p = y[31]),
        y[32] !== b ||
        y[33] !== G ||
        y[34] !== s ||
        y[35] !== x ||
        y[36] !== w ||
        y[37] !== V ||
        y[38] !== B ||
        y[39] !== H ||
        y[40] !== D ||
        y[41] !== q ||
        y[42] !== K ||
        y[43] !== Q ||
        y[44] !== $ ||
        y[45] !== z
          ? ((m = [b, G, s, x, w, Q, V, q, D, B, H, K, $, z]),
            (y[32] = b),
            (y[33] = G),
            (y[34] = s),
            (y[35] = x),
            (y[36] = w),
            (y[37] = V),
            (y[38] = B),
            (y[39] = H),
            (y[40] = D),
            (y[41] = q),
            (y[42] = K),
            (y[43] = Q),
            (y[44] = $),
            (y[45] = z),
            (y[46] = m))
          : (m = y[46]),
        (0, d.useLayoutEffect)(p, m),
        y[47] !== K ? ((g = () => K), (y[47] = K), (y[48] = g)) : (g = y[48]))
      let Z = (0, d.useEffectEvent)(g)
      return (
        y[49] !== b ||
        y[50] !== G ||
        y[51] !== w ||
        y[52] !== Z ||
        y[53] !== V ||
        y[54] !== q ||
        y[55] !== $ ||
        y[56] !== z
          ? ((h = () => {
              if (!G || null == b) {
                V || (0, u.FJ)($)
                return
              }
              let e = {
                pageId: q,
                open: () => {
                  $.get(u.rp)?.sourceId !== z &&
                    (0, A.cG)($, { accountId: b, documentType: w ?? "page", pageId: q, sourceId: z, title: Z() })
                },
              }
              ;($.set(v.BO, e), V || e.open())
              let t = $.watch((e) => {
                let { get: t } = e
                ;(t(v.BP, { accountId: b, sourceId: z }), V || t(S, { pageId: q, identity: t(_.Wq) }))
              })
              return () => {
                ;(t(), $.get(v.BO) === e && $.set(v.BO, null), $.get(u.rp)?.sourceId === z && (0, A.HO)($, z))
              }
            }),
            (y[49] = b),
            (y[50] = G),
            (y[51] = w),
            (y[52] = Z),
            (y[53] = V),
            (y[54] = q),
            (y[55] = $),
            (y[56] = z),
            (y[57] = h))
          : (h = y[57]),
        y[58] !== b || y[59] !== G || y[60] !== w || y[61] !== V || y[62] !== q || y[63] !== $ || y[64] !== z
          ? ((f = [b, G, w, V, q, $, z]),
            (y[58] = b),
            (y[59] = G),
            (y[60] = w),
            (y[61] = V),
            (y[62] = q),
            (y[63] = $),
            (y[64] = z),
            (y[65] = f))
          : (f = y[65]),
        (0, d.useLayoutEffect)(h, f),
        null
      )
    }
    let D = (0, i._)(async () => (await n.e(444397).then(n.bind(n, "cq6E"))).PageWorkCompanionBridge)
    function z(e) {
      let t,
        n,
        l,
        i,
        d = (0, r.c)(11)
      if (
        (d[0] !== e
          ? (({ allowLocalBlankPage: t, ...n } = e), (d[0] = e), (d[1] = t), (d[2] = n))
          : ((t = d[1]), (n = d[2])),
        d[3] !== n.accountId || d[4] !== n.pageId
          ? ((l = { accountId: n.accountId, pageId: n.pageId }), (d[3] = n.accountId), (d[4] = n.pageId), (d[5] = l))
          : (l = d[5]),
        (0, o._U)(s.Dh, l))
      ) {
        let e
        return (
          d[6] !== t || d[7] !== n
            ? ((e = (0, a.jsx)(D, { ...n, allowLocalBlankPage: t })), (d[6] = t), (d[7] = n), (d[8] = e))
            : (e = d[8]),
          e
        )
      }
      return (d[9] !== n ? ((i = (0, a.jsx)(q, { ...n })), (d[9] = n), (d[10] = i)) : (i = d[10]), i)
    }
    function L(e) {
      let t,
        n = (0, r.c)(3),
        i = (0, o.Ul)(l.ph)
      return (
        n[0] !== i || n[1] !== e
          ? ((t = i ? (0, a.jsx)(z, { ...e }) : null), (n[0] = i), (n[1] = e), (n[2] = t))
          : (t = n[2]),
        t
      )
    }
  },
  Eg3N(e, t, n) {
    var a = n("zTeN"),
      r = n("Oj9r"),
      o = n("eviP"),
      l = n("moBM"),
      i = n("pZMh")
    let s = (0, a.un)(r.GD, ({ get: e }) => (e(l.FG) && e(i.Br) ? e(i.g4) : null)),
      d = (0, a.i1)(r.GD, (e, { get: t }) => {
        let n = t(s)
        return null != t(o.q) && (null == n || n === e)
      })
    n.d(t, {}, { B: d, M: s })
  },
  giYK(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("zTeN"),
      l = n("zd8w"),
      i = n("YCKz"),
      s = n("dTlo"),
      d = n("TGoC"),
      c = n("dJBt"),
      u = n("ajm9"),
      p = n("uFKw"),
      m = n("Wj4L"),
      g = n("ia0X")
    function h(e) {
      let t,
        n,
        d,
        p,
        h,
        f,
        v,
        y,
        b = (0, r.c)(48),
        {
          pageId: x,
          documentType: w,
          isCurrent: I,
          onPaint: _,
          panelLoadMetrics: k,
          editorVisit: S,
          renderer: C,
          backgroundSuspensions: A,
          fullEditor: j,
          synchronized: M,
          previewSource: P,
          contentRevision: T,
          nativeOpen: E,
          uiReady: N,
          contentReady: U,
          browserOnly: q,
        } = e,
        D = void 0 === w ? "page" : w,
        z = void 0 !== q && q,
        L = (0, o.gh)(u.U0),
        O = (0, o._U)(i.hM, (0, l.useContext)(i.HE)) && (void 0 === U || U),
        R = (0, l.useRef)(null)
      b[0] !== L ? ((t = (0, u.FB)(L)), (b[0] = L), (b[1] = t)) : (t = b[1])
      let $ = t,
        B = (0, o.Ul)(null == k && null == L.value.tabId ? s.h : null),
        F = B?.debug.snapshot.pageId === x ? B : null,
        V = $?.snapshot.pageId === x ? $ : F?.debug,
        W = k ?? F?.metrics,
        H = (0, o.Ul)(null == k && null == L.value.tabId ? g.N2 : null),
        G = k?.browserFirstContent ?? F?.browserFirstContent,
        K = !O
      b[2] !== G || b[3] !== K ? ((n = { owner: G, needed: K }), (b[2] = G), (b[3] = K), (b[4] = n)) : (n = b[4])
      let [Q, X] = (0, l.useState)(n)
      if (((Q.owner === G && (O || Q.needed)) || X({ owner: G, needed: !O }), null == V && null == k && null == _))
        return null
      z || V?.renderStarted()
      let Z = `${F?.attributes.navigationId ?? k?.id ?? V?.snapshot.id}:${j}:${P}:${M ? "synchronized" : T}:${E?.editable}:${E?.readOnly}:${null != N}`
      ;(b[5] !== z ||
      b[6] !== V ||
      b[7] !== D ||
      b[8] !== O ||
      b[9] !== G ||
      b[10] !== j ||
      b[11] !== I ||
      b[12] !== F ||
      b[13] !== E ||
      b[14] !== _ ||
      b[15] !== k ||
      b[16] !== P ||
      b[17] !== M ||
      b[18] !== $ ||
      b[19] !== N
        ? ((d = () => {
            ;(F?.observeDocumentType(D),
              k?.observeDocumentType(D),
              !z &&
                null != $ &&
                V?.contentPaintSource(null) === "unknown" &&
                (V.documentReady(P ?? "session"), M && V.point("initial_sync", void 0, "reused")),
              z || V?.renderCommitted())
            let e =
                "page" !== D
                  ? "realtime"
                  : (F?.contentPaintSource(P) ?? ("cache" === P ? "local_cache" : (P ?? "unknown"))),
              t = V?.contentPaintSource(P)
            R.current = (n) => {
              I?.() === !1 ||
                (_?.(),
                O && n && G?.contentVisible(),
                z ||
                  (N?.() && (k?.uiReady(), F?.uiReady()),
                  null != $ &&
                    null != t &&
                    ($.rendered(t), E?.readOnly ? $.setEditableStatus("read_only") : E?.editable && $.editable()),
                  null != k
                    ? (j && k.finish("readable"),
                      k.finish("first_visible", void 0, "none", e),
                      M && k.finish("synchronized_visible", void 0, "none", e),
                      null != E && k.nativePaint(E))
                    : ("page" !== D && j && F?.paintOpportunity(),
                      F?.contentPaintOpportunity(M, e),
                      null != E && F?.nativePaint(E))))
            }
          }),
          (b[5] = z),
          (b[6] = V),
          (b[7] = D),
          (b[8] = O),
          (b[9] = G),
          (b[10] = j),
          (b[11] = I),
          (b[12] = F),
          (b[13] = E),
          (b[14] = _),
          (b[15] = k),
          (b[16] = P),
          (b[17] = M),
          (b[18] = $),
          (b[19] = N),
          (b[20] = d))
        : (d = b[20]),
        b[21] !== O ? ((p = () => R.current?.(O)), (b[21] = O), (b[22] = p)) : (p = b[22]),
        b[23] !== Z || b[24] !== d || b[25] !== p
          ? ((h = (0, a.jsx)(c.X, { requireVisibleAtPaint: !0, onCommit: d, onPaint: p }, Z)),
            (b[23] = Z),
            (b[24] = d),
            (b[25] = p),
            (b[26] = h))
          : (h = b[26]))
      let Y = h
      return (
        b[27] !== A ||
        b[28] !== D ||
        b[29] !== W ||
        b[30] !== S ||
        b[31] !== O ||
        b[32] !== I ||
        b[33] !== x ||
        b[34] !== k ||
        b[35] !== C ||
        b[36] !== H ||
        b[37] !== L
          ? ((f =
              O &&
              null != W &&
              null != C &&
              (null != k || H) &&
              (0, a.jsx)(
                c.X,
                {
                  paintIdentity: C.paintIdentity ?? C.token,
                  requireVisibleAtPaint: !0,
                  onPaint: () => {
                    if (I?.() !== !1 && C.isCurrent()) {
                      if (null == k) {
                        let e = (0, m.th)({ document_type: D })
                        if (null == x || "unsupported" === e || (0, g.qo)(L, x, e) !== W) return
                      }
                      W.editorPainted(C.token, D, A)
                    }
                  },
                },
                `${W.id}:${S}`,
              )),
            (b[27] = A),
            (b[28] = D),
            (b[29] = W),
            (b[30] = S),
            (b[31] = O),
            (b[32] = I),
            (b[33] = x),
            (b[34] = k),
            (b[35] = C),
            (b[36] = H),
            (b[37] = L),
            (b[38] = f))
          : (f = b[38]),
        b[39] !== O || b[40] !== G || b[41] !== I || b[42] !== Q.needed
          ? ((v =
              Q.needed &&
              O &&
              G?.isRecording() &&
              (0, a.jsx)(c.X, {
                requireVisibleAtPaint: !0,
                onPaint: () => {
                  I?.() !== !1 && G.contentVisible()
                },
              })),
            (b[39] = O),
            (b[40] = G),
            (b[41] = I),
            (b[42] = Q.needed),
            (b[43] = v))
          : (v = b[43]),
        b[44] !== Y || b[45] !== f || b[46] !== v
          ? ((y = (0, a.jsxs)(a.Fragment, { children: [Y, f, v] })), (b[44] = Y), (b[45] = f), (b[46] = v), (b[47] = y))
          : (y = b[47]),
        y
      )
    }
    function f(e) {
      let t,
        n,
        l,
        i,
        s = (0, r.c)(10)
      s[0] !== e ? (({ panelTabId: t, ...n } = e), (s[0] = e), (s[1] = t), (s[2] = n)) : ((t = s[1]), (n = s[2]))
      let d = (0, o.uO)(p.F, t),
        c = (0, o.Ul)(d.activation$),
        u = (0, o.Ul)(d.editorVisit$)
      s[3] !== c || s[4] !== d ? ((l = d.getLoad(c)), (s[3] = c), (s[4] = d), (s[5] = l)) : (l = s[5])
      let m = l
      return (
        s[6] !== u || s[7] !== m || s[8] !== n
          ? ((i =
              null == m && null == n.onPaint
                ? null
                : (0, a.jsx)(h, { ...n, pageId: null == m ? null : n.pageId, panelLoadMetrics: m, editorVisit: u })),
            (s[6] = u),
            (s[7] = m),
            (s[8] = n),
            (s[9] = i))
          : (i = s[9]),
        i
      )
    }
    n.d(
      t,
      {},
      {
        x: function (e) {
          let t,
            n,
            o,
            l = (0, r.c)(8)
          return (
            l[0] !== e.loadAncestry || l[1] !== e.pageId
              ? ((t = null != e.pageId && !1 !== e.loadAncestry && (0, a.jsx)(d.J, { pageId: e.pageId })),
                (l[0] = e.loadAncestry),
                (l[1] = e.pageId),
                (l[2] = t))
              : (t = l[2]),
            l[3] !== e
              ? ((n =
                  null == e.panelTabId ? (0, a.jsx)(h, { ...e }) : (0, a.jsx)(f, { ...e, panelTabId: e.panelTabId })),
                (l[3] = e),
                (l[4] = n))
              : (n = l[4]),
            l[5] !== t || l[6] !== n
              ? ((o = (0, a.jsxs)(a.Fragment, { children: [t, n] })), (l[5] = t), (l[6] = n), (l[7] = o))
              : (o = l[7]),
            o
          )
        },
      },
    )
  },
  QEw2(e, t, n) {
    var a = n("V8uZ")
    let r = "page-block-layout",
      o = { duration: 300, easing: `cubic-bezier(${a.Wu.join(",")})` }
    function l(e, t) {
      let n = e.closest("[data-page-block-viewport]"),
        a = n?.firstElementChild
      if (null == n || 0 === n.offsetWidth || !(a instanceof HTMLElement)) return null
      let r = n.getBoundingClientRect(),
        o = a.getBoundingClientRect(),
        l = "rtl" === getComputedStyle(n).direction
      return {
        viewport: n,
        content: a,
        rtl: l,
        start: (l ? r.right : r.left) / t,
        width: r.width / t,
        contentStart: (l ? o.right : o.left) / t,
        contentWidth: o.width / t,
        inset: Number.parseFloat(getComputedStyle(a).marginInlineStart),
      }
    }
    n.d(
      t,
      {},
      {
        A: function (e, { reducedMotion: t, zoom: n, delayMs: a = 0 }) {
          let i = l(e, n)
          if (null != i)
            for (let e of [i.viewport, i.content]) for (let t of e.getAnimations()) t.id === r && t.cancel()
          return t || null == i
            ? null
            : (e) =>
                (function (e, t, n, a) {
                  let i = l(t, n)
                  if (null == i) return
                  let s = { ...o, delay: a, fill: a > 0 ? "backwards" : "none", id: r },
                    d = e.start - i.start
                  ;((0 !== d || e.width !== i.width) &&
                    i.viewport.animate(
                      [
                        { inlineSize: `${e.width}px`, transform: `translateX(${d}px)` },
                        { inlineSize: `${i.width}px`, transform: "translateX(0px)" },
                      ],
                      s,
                    ),
                    (e.contentWidth !== i.contentWidth || e.inset !== i.inset) &&
                      i.content.animate(
                        [
                          {
                            inlineSize: `${e.contentWidth}px`,
                            minInlineSize: "0px",
                            marginInlineStart: `${e.inset}px`,
                          },
                          {
                            inlineSize: `${i.contentWidth}px`,
                            minInlineSize: "0px",
                            marginInlineStart: `${i.inset}px`,
                          },
                        ],
                        s,
                      ))
                  let c = i.content.getBoundingClientRect(),
                    u = e.contentStart - (i.rtl ? c.right : c.left) / n
                  0 !== u &&
                    i.content.animate([{ transform: `translateX(${u}px)` }, { transform: "translateX(0px)" }], s)
                })(i, e, n, a)
        },
        S: r,
      },
    )
  },
  wBb7(e, t, n) {
    var a = n("iLyw"),
      r = n("Lo8c")
    let o = new WeakMap()
    function l(e, t) {
      let n = i(e, t)
      return null == n ? null : d(e, n)
    }
    function i(e, t) {
      let n = t instanceof Element ? t : t.parentElement,
        r = n?.closest("[data-page-generate-id]")
      if (null != r) {
        let t = r.dataset.pageGenerateId,
          n = null == t ? null : a.Dl.getState(e.state)?.get(t)
        return null == n || n.invalidated ? null : n.from
      }
      let o = n?.closest("[data-page-dil]")
      return e.posAtDOM(o ?? t, 0, -1)
    }
    function s(e, t) {
      let n = [...(a.Dl.getState(e.state)?.values() ?? [])].find((e) => !e.invalidated && e.from === t)
      return (0, r.ce)(null == n ? e.nodeDOM(t) : e.dom.querySelector(`:scope > [data-page-generate-id="${n.id}"]`))
    }
    function d(e, t) {
      if (t < 0 || t > e.state.doc.content.size) return null
      let n = e.state.doc.resolve(t),
        a = 0 === n.depth ? t : n.before(1),
        r = e.state.doc.nodeAt(a),
        o = s(e, a)
      if (null == r || !(o instanceof HTMLElement)) return null
      let l = o.closest("[data-page-block-row]")
      if (l?.parentElement !== e.dom) return null
      let i = null,
        d = null
      for (let t = n.depth; t > 0; t -= 1) {
        let a = n.node(t),
          r = n.before(t),
          o = e.nodeDOM(r)
        if (
          o instanceof HTMLElement &&
          (null == i && a.type.isInGroup("list_item") && (i = { from: r, node: a, element: o }),
          null == d && o instanceof HTMLTableCellElement)
        ) {
          let e = o.closest("table"),
            l = o.parentElement
          null != e &&
            l instanceof HTMLTableRowElement &&
            (d = {
              block: { from: n.before(t - 2), node: n.node(t - 2), element: e },
              cell: { from: r, node: a, element: o },
              element: e,
              row: l,
            })
        }
      }
      return { block: { from: a, node: r, element: o }, item: i, table: d }
    }
    function c(e, t) {
      let n = 0,
        a = e.length
      for (; n < a;) {
        let r = Math.floor((n + a) / 2)
        e[r].getBoundingClientRect().bottom < t ? (n = r + 1) : (a = r)
      }
      let r = e[n] ?? null,
        o = e[n - 1] ?? null
      return null == r || null == o
        ? (r ?? o)
        : t - o.getBoundingClientRect().bottom <= r.getBoundingClientRect().top - t
          ? o
          : r
    }
    n.d(
      t,
      {},
      {
        Ks: function (e, t) {
          let n = o.get(e)
          n?.state !== e.state &&
            ((n = {
              state: e.state,
              elements: e.dom.querySelectorAll(
                ":scope > [data-page-block-row]:not([data-page-agent-edit-ghost], [data-page-agent-edit-pending], [data-page-section-hidden], [data-page-magic-edit-original], [data-page-generate-original], :has(> [data-page-block-viewport] > :is([data-page-agent-edit-pending], [data-page-section-hidden], [data-page-magic-edit-original], [data-page-generate-original])))",
              ),
            }),
            o.set(e, n))
          let a = c(n.elements, t),
            r = a?.querySelector("[data-page-block-viewport]")?.firstElementChild
          for (; r?.matches("ul, ol");) {
            let e = c(r.children, t)
            if (null == e) return null
            r = c((e.querySelector(":scope > .task-list-item-content") ?? e).children, t) ?? e
          }
          return null == r ? null : l(e, r)
        },
        Qx: function (e, t) {
          return !e.isDestroyed && t.from <= e.state.doc.content.size && e.state.doc.nodeAt(t.from) === t.node
        },
        V2: d,
        fC: s,
        m5: i,
        no: l,
        tA: function (e, t) {
          let n = e.state.doc.resolve(t.from)
          for (let t = 1; t <= n.depth; t += 1) {
            let a = n.node(t)
            if ("list" === a.type.name || "ordered_list" === a.type.name) {
              let r = n.before(t),
                o = e.nodeDOM(r)
              if (o instanceof HTMLElement) return { from: r, node: a, element: o }
            }
          }
          return t
        },
      },
    )
  },
  dtvq(e, t, n) {
    var a = n("zfFc"),
      r = n.n(a)
    n.d(
      t,
      {},
      {
        q: function (e, t) {
          return e.hasMarkup(
            t.type,
            {
              ...t.attrs,
              ...r()(e.attrs, [
                "pageLayout",
                "pageCodeWrap",
                "pageColumnWidth",
                "pageRowHeight",
                "pageHeaderRow",
                "pageHeaderColumn",
                "pagePinHeaderRow",
                "pagePinHeaderColumn",
                "sourceMarkdown",
                "sourceCanonicalMarkdown",
              ]),
            },
            t.marks,
          )
        },
      },
    )
  },
  d3AA(e, t, n) {
    var a = n("chrt"),
      r = n("bQNR"),
      o = n("Hpb6"),
      l = n("MnjQ"),
      i = n("TwV4"),
      s = n("fXhT"),
      d = n("tINb"),
      c = n("tc1t"),
      u = n("sQAU"),
      p = n("ebwD"),
      m = n("uhrq"),
      g = n("dtvq"),
      h = n("UXeX")
    function f(e) {
      for (let t = 1; t < e.length - 1; t++) {
        let n = e[t]
        if (n.added || n.removed) continue
        let a = t - 1,
          r = t + 1
        for (; a > 0 && (e[a - 1].added || e[a - 1].removed);) a--
        for (; r + 1 < e.length && (e[r + 1].added || e[r + 1].removed);) r++
        let o = [e.slice(a, t), e.slice(t + 1, r + 1)].every((e) => {
          let t = e.reduce((e, t) => e + (t.removed ? t.value.length : 0), 0),
            a = e.reduce((e, t) => e + (t.added ? t.value.length : 0), 0)
          return n.value.length <= Math.max(t, a)
        })
        if ("" !== n.value.trim() && !o) continue
        let l = e.slice(a, r + 1),
          i = l.filter((e) => !e.added),
          s = l.filter((e) => !e.removed)
        ;(e.splice(
          a,
          r - a + 1,
          { value: i.map((e) => e.value).join(""), count: i.reduce((e, t) => e + t.count, 0), removed: !0, added: !1 },
          { value: s.map((e) => e.value).join(""), count: s.reduce((e, t) => e + t.count, 0), removed: !1, added: !0 },
        ),
          (t = 0))
      }
    }
    function v(e) {
      return (
        e.type.spec.leafText?.(e) ??
        (0, l.jw)(o.FK.from(e.type.schema.nodes.paragraph.create(null, e)), { preserveUnresolvedSkillMentions: !0 })
          .content
      )
    }
    function y(e) {
      return "ordered_list" === e.type.name ? "list" : e.type.name
    }
    function b(e) {
      return e.content.content.flatMap((t) => [
        t,
        ...("list" === y(e) ? t.content.content.filter((e) => "list" === y(e)).flatMap(b) : []),
      ])
    }
    function x(e, t) {
      return "table_cell" !== e.type.name || "table_cell" !== t.type.name
        ? (0, g.q)(e, t)
        : (0 === e.attrs.rowIndex) == (0 === t.attrs.rowIndex) &&
            (0, g.q)(e, t.type.create({ ...t.attrs, rowIndex: e.attrs.rowIndex }, t.content, t.marks))
    }
    function w(e, t, n, a) {
      if ("table" === n)
        return (
          e.childCount === t.childCount &&
          e.content.content.every((e, n) => x(e, t.child(n)) && (!a || e.content.eq(t.child(n).content)))
        )
      if (!a) return !0
      if ("list" === n) {
        let n = (e) => o.FK.fromArray(e.content.content.filter((e) => "list" !== y(e)))
        return x(e, t) && n(e).eq(n(t))
      }
      return e.eq(t)
    }
    function I(e) {
      let t = e[0].firstChild?.childCount
      return e.every((e) =>
        e.content.content.every(
          (e) =>
            e.childCount === t &&
            e.content.content.every((e) => (e.attrs.colspan ?? 1) === 1 && (e.attrs.rowspan ?? 1) === 1),
        ),
      )
    }
    function _(e, t, n, a = !1) {
      let o =
        e.length + t.length > 256
          ? void 0
          : (0, r.E)([...e], [...t], { comparator: (e, t) => w(e, t, n, !0), maxEditLength: 128 })
      if (null == o)
        return [
          (a ? k([...e.map((e) => ({ before: e })), ...t.map((e) => ({ after: e }))]) : void 0) ?? [
            ...t.map((t, n) => ({ before: e[n], after: t })),
            ...e.slice(t.length).map((e) => ({ before: e })),
          ],
        ]
      let l = [],
        i = [],
        s = 0
      for (let t of o)
        t.added || t.removed
          ? (i.push(...t.value.map((e) => (t.removed ? { before: e } : { after: e }))),
            t.removed && (s += t.value.length))
          : (l.push(
              i,
              t.value.map((t) => ({ before: e[s++], after: t })),
            ),
            (i = []))
      l.push(i)
      let d = l.flat(),
        c = d.filter((e) => null == e.after)
      for (let e of d) {
        let t = e.after
        if (null == e.before && null != t) {
          let a = c.find(({ before: e }) => null != e && w(e, t, n, !0))
          null != a && ((e.before = a.before), (a.before = void 0))
        }
      }
      return l.map((e) => {
        if (a) {
          let t = k(e)
          if (null != t) return t
        }
        let t = e.filter((e) => null == e.after && null != e.before),
          r = e.filter((e) => null != e.after)
        for (let e of r) {
          let a = e.after
          if (null == e.before && null != a) {
            let r = t.findIndex(({ before: e }) => null != e && w(e, a, n, !1))
            r >= 0 && (e.before = t.splice(r, 1)[0].before)
          }
        }
        return [...r, ...t]
      })
    }
    function k(e) {
      if (e.some(({ before: e, after: t }) => (null != e && null != t) || (e ?? t)?.type.name !== "paragraph")) return
      let t = e.flatMap((e) => e.before ?? []),
        n = e.flatMap((e) => e.after ?? [])
      if (t.length <= 1 && n.length <= 1) return
      let r = []
      t.length * n.length <= 256 &&
        t.forEach((e, t) => {
          n.forEach((n, o) => {
            if (!x(e, n)) return
            let l = (0, a.pR)(e.textContent, n.textContent, { maxEditLength: 128 })
            if (null == l) return
            f(l)
            let i = Math.max(
                0,
                ...l.map((e) => (!e.added && !e.removed && /[^\s\p{P}]/u.test(e.value) ? e.value.trim().length : 0)),
              ),
              s = l.reduce((e, t) => e + (t.removed ? t.value.length : 0), 0),
              d = l.reduce((e, t) => e + (t.added ? t.value.length : 0), 0)
            i > Math.min(s, d) && r.push({ oldIndex: t, newIndex: o, clear: i > Math.max(s, d) })
          })
        })
      let o = r.filter(
        ({ oldIndex: e, newIndex: t, clear: n }) =>
          n && 1 === r.filter((t) => t.oldIndex === e).length && 1 === r.filter((e) => e.newIndex === t).length,
      )
      o.some((e, t) => t > 0 && e.newIndex < o[t - 1].newIndex) && (o.length = 0)
      let l = [],
        i = 0,
        s = 0
      for (let { oldIndex: e, newIndex: a } of [...o, { oldIndex: t.length, newIndex: n.length }])
        (l.push(...t.slice(i, e).map((e) => ({ before: e })), ...n.slice(s, a).map((e) => ({ after: e }))),
          e < t.length && l.push({ before: t[e], after: n[a] }),
          (i = e + 1),
          (s = a + 1))
      return l
    }
    n.d(
      t,
      {},
      {
        V: function (e, t, n, r, { layout: l = "original", granularity: g = "word" } = {}) {
          let w = e.type.schema,
            k = o.ZF.nodesFromSchema(w)
          for (let [e, t] of Object.entries(w.nodes))
            (null != t.spec.leafText || t.spec.inlineMention) && (k[e] = (e) => ["span", v(e)])
          let S = new o.ZF(k, { ...o.ZF.marksFromSchema(w), link: () => ["a", 0] }),
            C = new Map(),
            A = n.createElement("div")
          ;((A.className = `font-content ${h.A.PageDocument}`), (A.dataset.pageBlockDiff = ""))
          let j = (e, t, a) => {
              let r = null == a ? void 0 : n.createElement(a)
              ;(null != r &&
                ((r.dataset.pageDiffChange = ""),
                (r.className = "ins" === a ? "bg-text-info/10 text-info no-underline" : "text-tertiary line-through"),
                t.appendChild(r)),
                (r ?? t).appendChild(S.serializeFragment(e, { document: n })))
            },
            M = (e, t, i) => {
              let d,
                { after: c } = e,
                u = null != e.before && i.has(y(e.before)) ? void 0 : e.before,
                h = null == c ? void 0 : i.get(y(c))
              if (null != u && null != c && (!x(u, c) || ("table" === y(u) && !u.eq(c) && !I([u, c])))) {
                ;(M({ before: u }, t, i), M({ after: c }, t, i))
                return
              }
              let b = u ?? c
              if (null == b) return
              let w = t
              if (t === A) {
                let e = n.createElement("div")
                ;((e.dataset.pageBlockRow = ""),
                  (e.dataset.pageBlockType = b.type.name),
                  (e.dataset.pageBlockLayout = (0, s.zo)(("proposed" === l ? (c ?? b) : b).attrs.pageLayout)))
                let t = n.createElement("div")
                ;((t.dataset.pageBlockViewport = ""),
                  "table" === b.type.name && (t.className = "horizontal-scroll-fade-mask"))
                let a = n.createElement("div")
                ;((a.dataset.pageBlockDiff = ""), t.append(a), e.append(t), A.append(e), (w = a))
              }
              if ((null == u ? (d = "ins") : null == c && (d = "del"), b.isLeaf)) return void j(o.FK.from(b), w, d)
              let { dom: _, contentDOM: k } = o.ZF.renderSpec(n, S.nodes[b.type.name](b))
              ;("table" === b.type.name && _ instanceof HTMLTableElement && C.set(_, b),
                _ instanceof HTMLTableCellElement &&
                  _.toggleAttribute("data-page-numeric-cell", (0, m.t)(b) && (null == c || (0, m.t)(c))))
              let T = "table" === b.type.name ? (0, p.Y)(e.before ?? b) : void 0
              if (null != T) {
                for (let [e, t] of Object.entries(T.attributes)) _.setAttribute(e, t)
                let e = n.createElement("colgroup")
                ;(T.widths.forEach((t) => {
                  let a = n.createElement("col")
                  ;((a.style.width = `${t}px`), e.append(a))
                }),
                  _.prepend(e))
              }
              if (
                ("task_list_item" === b.type.name &&
                  _.querySelector("input")?.setAttribute(
                    "aria-label",
                    (c ?? b).content.content
                      .filter((e) => e.isTextblock)
                      .map((e) => e.textBetween(0, e.content.size, " ", v))
                      .join(" "),
                  ),
                w.appendChild(_),
                c?.type.name === "code_block" && r?.(c, _),
                null == k)
              )
                return
              if (b.isTextblock) {
                if (null == u || null == c || u.content.eq(c.content)) j(b.content, k, d)
                else {
                  let e = u.textBetween(0, u.content.size, "\n", "\n"),
                    t = c.textBetween(0, c.content.size, "\n", "\n"),
                    r = (0, a.pR)(e, t, { maxEditLength: 128 })
                  if (
                    ("adaptive" === g && null != r && f(r),
                    null == r ||
                      ("adaptive" === g && !r.some((e) => !e.added && !e.removed && /[^\s\p{P}]/u.test(e.value))))
                  ) {
                    ;(j(u.content, k, "del"),
                      "adaptive" === g &&
                        u.content.size > 0 &&
                        c.content.size > 0 &&
                        (e.length + t.length > 80 || /\n/.test(e + t)) &&
                        k.appendChild(n.createElement("br")),
                      j(c.content, k, "ins"))
                    return
                  }
                  let o = 0,
                    l = 0
                  for (let e of r) {
                    let t = o + (e.added ? 0 : e.value.length),
                      n = l + (e.removed ? 0 : e.value.length),
                      a = u.content.cut(o, t),
                      r = c.content.cut(l, n)
                    ;(!e.added && !e.removed && a.eq(r)
                      ? j(r, k)
                      : (e.added || j(a, k, "del"), e.removed || j(r, k, "ins")),
                      (o = t),
                      (l = n))
                  }
                }
                return
              }
              if (null != h) {
                if (
                  (b.forEach(() => {
                    for (; h.index < h.changes.length && null == h.changes[h.index].after;)
                      M(h.changes[h.index++], k, i)
                    M(h.changes[h.index++], k, i)
                  }),
                  b === h.last)
                )
                  for (; h.index < h.changes.length;) M(h.changes[h.index++], k, i)
                return
              }
              let E = new Map(),
                N = i.get("list")
              ;(b.type.isInGroup("list_item") && null != N && E.set("list", N),
                null == u || null == c || "table_row" === b.type.name
                  ? b.forEach((e, t, n) => M({ before: u?.child(n), after: c?.child(n) }, k, E))
                  : P(u.content.content, c.content.content, k, E))
            },
            P = (e, t, n, a) => {
              for (let r of _(e, t, void 0, "adaptive" === g)) {
                let e = new Map(a)
                for (let t of ["list", "table"]) {
                  if (e.has(t)) continue
                  let n = r.flatMap(({ before: e }) => (null != e && y(e) === t ? [e] : [])),
                    a = r.flatMap(({ after: e }) => (null != e && y(e) === t ? [e] : []))
                  n.length > 0 &&
                    a.length > 0 &&
                    ("list" === t || I([...n, ...a])) &&
                    e.set(t, { changes: _(n.flatMap(b), a.flatMap(b), t).flat(), index: 0, last: a[a.length - 1] })
                }
                r.forEach((t) => M(t, n, e))
              }
            }
          for (let [n, a] of (P((0, d.FJ)(e).content.content, (0, d.FJ)(t).content.content, A, new Map()), C)) {
            let e = (0, c.R)(
              Array.from(n.rows, (e) => e.cells),
              (e) => e,
            )
            for (let t of n.rows)
              for (let n of t.cells) n.setAttribute("role", (0, u.y2)(a, t.rowIndex, e[t.rowIndex][n.cellIndex]))
          }
          return (
            A.querySelectorAll("pre").forEach((e) => {
              e.classList.add("horizontal-scroll-fade-mask")
            }),
            A.querySelectorAll("input").forEach((e) => {
              e.disabled = !0
            }),
            A.querySelectorAll('[data-page-block-kind="agent_instructions"]').forEach((e) => {
              ;(0, i.qI)(e, !0)
              let t = e.querySelector('[data-page-agent-instructions="toggle"]')
              if (null != t) {
                t.querySelector('[data-page-agent-instructions="icon"]')?.remove()
                let e = n.createElement("div")
                ;((e.className = "text-sm text-secondary"), e.append(...t.childNodes), t.replaceWith(e))
              }
            }),
            A
          )
        },
        p: function (e, t) {
          if (!I([e]) || !I([t])) return []
          let n = e.firstChild,
            a = t.firstChild
          if (null == n || null == a) return []
          let l = new Map()
          if (n.childCount === a.childCount) n.forEach((e, t, n) => l.set(n, n))
          else {
            if (!1 === e.attrs.pageHeaderRow || !1 === t.attrs.pageHeaderRow) return []
            if (n.childCount + a.childCount > 256) return null
            let o = (e, t) => x(e, t) && e.content.eq(t.content)
            if (n.content.content.some((e) => 1 !== a.content.content.filter((t) => o(e, t)).length)) return []
            let i = (0, r.E)([...n.content.content], [...a.content.content], { comparator: o, maxEditLength: 128 })
            if (null == i) return null
            if (i.some((e) => e.removed)) return []
            let s = 0,
              d = 0
            for (let e of i) for (let t of e.value) (e.added || l.set(d, s++), d++)
          }
          let i = new Map(),
            s = t.content.content.map((e) => {
              let t = l.size === e.childCount ? e : e.copy(o.FK.fromArray([...l.keys()].map((t) => e.child(t))))
              return (i.set(t, e), t)
            }),
            d = (function (e, t) {
              let n = 0,
                a = e.length,
                r = t.length
              for (; n < a && n < r && w(e[n], t[n], "table", !0);) n++
              for (; a > n && r > n && w(e[a - 1], t[r - 1], "table", !0);) (a--, r--)
              return a + r - 2 * n > 128
                ? null
                : _(e.slice(n, a), t.slice(n, r), "table").flatMap((e) =>
                    e.some(({ before: e, after: t }) => null == e || null == t) &&
                    e.some(({ before: e, after: t }) => null != e && null != t && !w(e, t, "table", !0))
                      ? []
                      : e,
                  )
            })(e.content.content, s)
          if (null == d) return null
          let c = new Map()
          for (let e of d) {
            let t = null == e.after ? void 0 : i.get(e.after)
            null != t && c.set(t, e.before)
          }
          return t.content.content.flatMap((e) =>
            e.content.content.flatMap((t, n) => {
              let a = l.get(n)
              return null == a ? [{ after: t }] : c.has(e) ? [{ before: c.get(e)?.child(a), after: t }] : []
            }),
          )
        },
      },
    )
  },
  eNoc(e, t, n) {
    var a = n("f6KK"),
      r = n("psNA")
    n.d(
      t,
      {},
      {
        I: function (e, t, { scrollIntoView: n = !0, insertIfMissing: o = !0 } = {}) {
          if (e.isDestroyed || !e.editable) return !1
          let l = e.state.tr,
            i = l.doc.resolve(t).after()
          if (i === l.doc.content.size) {
            if (!o) return !1
            l.insert(i, e.state.schema.nodes.paragraph.create())
          }
          ;(l.setSelection(a.LN.near(l.doc.resolve(i), 1)), n && l.scrollIntoView())
          let s = l.docChanged ? (0, r.ss)(l) : null
          return (e.dispatch(l), (null == s || s.result?.status === "accepted") && (e.focus(), !0))
        },
      },
    )
  },
  iLyw(e, t, n) {
    n.d(t, { W4: () => q, pe: () => N, Dx: () => U, Dl: () => E })
    var a = n("GTmQ"),
      r = n("jAmA"),
      o = n("Hpb6"),
      l = n("f6KK"),
      i = n("SAxP"),
      s = n("MnjQ"),
      d = n("jEHo"),
      c = n("L0Gp"),
      u = n("QEw2"),
      p = n("tINb"),
      m = n("VdCk"),
      g = n("eNoc"),
      h = n("TXVE"),
      f = n("j8xC"),
      v = n("LSvd"),
      y = n("Ah6R"),
      b = n("H0zY"),
      x = n("v2Zq"),
      w = n("UwDf"),
      I = n("HgFd"),
      _ = n("S7yU"),
      k = n("zSQm")
    let S = new Set([
        "doc",
        "paragraph",
        "heading",
        "blockquote",
        "callout",
        "list",
        "ordered_list",
        "regular_list_item",
        "task_list_item",
        "code_block",
        "horizontal_rule",
        "table",
        "table_row",
        "table_cell",
      ]),
      C = new Set(["pageReferenceMention", "personMention", "chatGptConversationMention", "chatGptLibraryFileMention"])
    function A(e, t, n) {
      if ("text" === n.output) {
        let n, a
        return "string" == typeof t
          ? ((n = e.parse(t)),
            (a = (e) => {
              if (e.isText || "hard_break" === e.type.name || C.has(e.type.name))
                return [
                  e.mark(
                    e.marks.filter(
                      (e) =>
                        "link" !== e.type.name || ("string" == typeof e.attrs.href && null != (0, k.av)(e.attrs.href)),
                    ),
                  ),
                ]
              if (e.isInline) return []
              let t = []
              if ((e.forEach((e) => t.push(...a(e))), S.has(e.type.name))) {
                let n = o.FK.fromArray(t),
                  a = e.type.createAndFill(e.attrs, n)
                return null == a ? [] : [a]
              }
              let r = e.textBetween(0, e.content.size, "\n")
              return "" === r ? [] : [n.type.schema.nodes.paragraph.create(null, n.type.schema.text(r))]
            }),
            n.copy(o.FK.fromArray(n.content.content.flatMap(a))))
          : null
      }
      if ("string" != typeof t && 0 === t.length) return null
      let a = "string" == typeof t ? e.parse(t) : (0, p.f3)(e.parse(""), t, e)
      if (
        0 === a.childCount ||
        a.content.content.some(
          (e) =>
            ("string" == typeof t && e.type.name !== _.P) ||
            (e.type.name === _.P && !(0, I.VN)(e.attrs.dil) && (0, I.qp)(e.attrs.dilMetadata)?.source_format !== "dil"),
        )
      )
        return null
      let r = n.at - n.from - 1,
        l = []
      return (
        r > 0 && l.push(n.node.cut(0, r)),
        l.push(...a.content.content),
        r < n.node.content.size && l.push(n.node.cut(r)),
        a.copy(o.FK.fromArray(l))
      )
    }
    var j = n("cdkl"),
      M = n("Lo8c"),
      P = n("qPPq"),
      T = n("BdFx")
    n("V8uZ")
    let E = void 0 ?? new l.hs("pageGenerate")
    function N(e) {
      let t = D(e.selection)
      return null != t && [...(E.getState(e)?.values() ?? [])].some((e) => !e.invalidated && e.from === t)
    }
    function U(e, t, n, { insertParagraph: o = !1, output: i = "text" } = {}) {
      let s = e.state.tr
      o && s.insert(t, e.state.schema.nodes.paragraph.create())
      let d = o ? t + 1 : t,
        c = s.doc.resolve(d),
        u = E.getState(e.state)
      if (
        !e.editable ||
        1 !== c.depth ||
        !c.parent.isTextblock ||
        L(c.parent) ||
        null == u ||
        [...u.values()].some((e) => !e.invalidated && e.from === c.before())
      )
        return !1
      let p = crypto.randomUUID()
      return (
        s.delete(d, o ? d : n),
        o && s.setMeta("addToHistory", !1),
        e.dispatch(
          (0, a._B)(
            s
              .setSelection(l.U3.create(s.doc, d))
              .setMeta(r.FY, { type: "close" })
              .setMeta(E, { type: "open", id: p, from: c.before(), at: d, insertedParagraph: o, output: i })
              .scrollIntoView(),
          ),
        ),
        e.focus(),
        E.getState(e.state)?.has(p) === !0
      )
    }
    function q({
      pmu: e,
      canWrite: t,
      canGenerate: n = t,
      canContinueGeneration: r = n,
      generate: s,
      startObservation: I,
      placeholder: _,
      intelligentUiPlaceholder: k,
      createPromptPlugins: S,
      observe: C,
      background: U,
      getBlockId: O,
      getBlockFrom: R,
    }) {
      let $ = U ?? new h.Wu(),
        B = new Map(),
        F = new Set(),
        V = null,
        W = [],
        H = (e) => {
          let t = B.get(e)
          return (
            null == t &&
              ((t = {
                data: $.entries.get(e) ?? $.create(e),
                checkboxes: new c.N(e),
                promptView: null,
                preview: null,
                scroll: null,
                frame: null,
                snapshot: null,
                lastState: null,
                synchronizing: !1,
                exitHandler: null,
                pendingExit: null,
                registerExit: (t) => {
                  let n = H(e)
                  return (
                    (n.exitHandler = t),
                    () => {
                      n.exitHandler === t && ((n.exitHandler = null), (n.pendingExit = null))
                    }
                  )
                },
              }),
              B.set(e, t)),
            t
          )
        },
        G = () => {
          let e = [...B.values()].flatMap((e) => (null == e.snapshot ? [] : [e.snapshot]))
          ;(e.length === W.length && e.every((e, t) => e === W[t])) || ((W = e), F.forEach((e) => e()))
        },
        K = (e) => (null == V ? e.data.prompt : (E.getState(V.state)?.get(e.data.id) ?? null)),
        Q = (e) => !!V?.editable && t() && null != e && n(e.output),
        X = (e) => Q(e) && e?.invalidated === !1,
        Z = (e, t) => {
          ;(null == V && null != e.data.prompt && ((e.data.prompt = { ...e.data.prompt, ...t }), e.data.notify()),
            null == V ||
              V.isDestroyed ||
              V.dispatch(
                V.state.tr.setMeta(E, { id: e.data.id, type: "update", update: t }).setMeta("addToHistory", !1),
              ))
        },
        Y = (e) => {
          null != e.frame && (V?.dom.ownerDocument.defaultView?.cancelAnimationFrame(e.frame), (e.frame = null))
        },
        J = (e) => {
          ;(e.data.request?.abort(), (e.data.request = null), Y(e))
        },
        ee = (e) => {
          ;(e.data.observation?.action.finish("cancelled"),
            (e.data.observation = void 0),
            J(e),
            e.scroll?.destroy(),
            (e.scroll = null),
            e.preview?.editor.destroy(),
            (e.preview = null),
            (e.data.result = null),
            (e.data.previousResult = null),
            (e.data.reviewObservation = void 0))
        },
        et = (e, t) => {
          if (null != e.pendingExit) return !0
          if (null == e.exitHandler) return !1
          let n = () => {
            e.pendingExit === n && ((e.pendingExit = null), B.get(e.data.id) === e && t())
          }
          return ((e.pendingExit = n), e.exitHandler(n), !0)
        },
        en = (e, n = !0) => {
          let r = B.get(e)
          if (null == r) return
          let o = V,
            i = K(r)
          if (null == o || null == i) return
          let s = r.promptView?.editor.view.state.doc.firstChild?.content
          if (null != s && s.size > 0 && (!o.editable || !t())) return void Z(r, { error: "unavailable" })
          if ((J(r), n && et(r, () => en(e, !1)))) return
          "review" === i.phase && r.data.reviewObservation?.action.milestone("review_discarded")
          let d = o.state.tr
          if (null != s && s.size > 0) {
            let e = d.doc.resolve(i.at)
            d.insert(i.at, e.parent.inlineContent ? s : o.state.schema.nodes.paragraph.create(null, s))
          }
          ;((d.docChanged || (o.state.selection instanceof l.nh && o.state.selection.from === i.from)) &&
            d.setSelection(l.U3.near(d.doc.resolve(d.mapping.map(i.at)))),
            s?.size === 0 &&
              i.insertedParagraph &&
              !i.invalidated &&
              i.node.type === o.state.schema.nodes.paragraph &&
              0 === i.node.content.size &&
              o.editable &&
              t() &&
              d.delete(i.from, i.from + i.node.nodeSize).setMeta("addToHistory", !1),
            o.dispatch((0, a._B)(d.setMeta(E, { id: r.data.id, type: "close" }))))
        },
        ea = (e) => {
          let t = B.get(e)
          if (null == t) return
          let n = K(t)
          if (
            (n?.phase === "generating" && t.data.observation?.action.finish("cancelled"),
            n?.phase === "review" && t.data.reviewObservation?.action.milestone("review_discarded"),
            null != t.promptView && null != n && "prompt" !== n.phase && (t.promptView.restoreFocus = !0),
            n?.phase === "prompt" && n.preview)
          )
            Z(t, { phase: "review", error: null })
          else if (n?.phase === "generating" && null != t.data.previousResult)
            (ei(t), Z(t, { phase: "prompt", error: null }), t.promptView?.editor.view.focus())
          else if (null != n && "prompt" !== n.phase)
            (Z(t, { phase: "prompt", preview: !1, error: null }), t.promptView?.editor.view.focus())
          else {
            let e = V
            ;(en(t.data.id), e?.focus())
          }
        },
        er = (e) => {
          let t = K(e),
            n = t?.preview ? e.preview?.dom : e.promptView?.anchor,
            a =
              null == t || null == n
                ? null
                : {
                    output: t.output,
                    phase: t.phase,
                    error: t.error,
                    status: "generating" === t.phase ? e.data.status : null,
                    canSubmit: "prompt" === t.phase && Q(t) && "" !== z(e.promptView?.editor.view.state.doc),
                    preview: t.preview,
                    selected: !t.invalidated && V?.state.selection instanceof l.nh && V.state.selection.from === t.from,
                    codeBlocks: e.preview?.editor.codeBlocks,
                    container: n,
                    inputView: "prompt" === t.phase ? (e.promptView?.editor.view ?? null) : null,
                    id: e.data.id,
                    checkboxes: e.checkboxes,
                    dil: e.preview?.editor.dil ?? null,
                    mountInput: (t) =>
                      ((e, t) => {
                        let n = e.promptView?.editor.view
                        if (null != n && null != e.promptView && null != V) {
                          if (null == t) {
                            e.promptView.restoreFocus = e.promptView.restoreFocus || n.hasFocus()
                            return
                          }
                          if (n.dom.parentElement === t) {
                            e.promptView.restoreFocus = !1
                            return
                          }
                          ;(t.append(n.dom),
                            e.promptView.restoreFocus &&
                              ((e.promptView.restoreFocus = !1),
                              K(e)?.phase === "prompt" && n.dom.focus({ preventScroll: !0 })))
                        }
                      })(e, t),
                    mountPreview: (t) => {
                      null != t &&
                        null != e.preview &&
                        e.preview.editor.dom.parentElement !== t &&
                        t.append(e.preview.editor.dom)
                    },
                    mountPreviewFrame: (t) => {
                      null != e.preview &&
                        (null == t &&
                          (e.preview.restoreFocus =
                            e.preview.restoreFocus ||
                            !!e.preview.frame?.contains(e.preview.dom.ownerDocument.activeElement)),
                        (e.preview.frame = t),
                        null != t &&
                          (e.scroll?.setCard(
                            t,
                            K(e)?.output === "text"
                              ? (t.querySelector("[data-page-composer-overlay]") ?? void 0)
                              : void 0,
                          ),
                          e.preview.restoreFocus &&
                            ((e.preview.restoreFocus = !1),
                            K(e)?.phase !== "prompt" && t.focus({ preventScroll: !0 }))))
                    },
                    registerExit: e.registerExit,
                  }
          ;(a?.output !== e.snapshot?.output ||
            a?.phase !== e.snapshot?.phase ||
            a?.error !== e.snapshot?.error ||
            a?.status !== e.snapshot?.status ||
            a?.canSubmit !== e.snapshot?.canSubmit ||
            a?.preview !== e.snapshot?.preview ||
            a?.selected !== e.snapshot?.selected ||
            a?.codeBlocks !== e.snapshot?.codeBlocks ||
            a?.inputView !== e.snapshot?.inputView ||
            a?.container !== e.snapshot?.container) &&
            ((e.snapshot = a), e.promptView?.editor.setEditable(t?.phase === "prompt"), G())
        },
        eo = (t, n) => {
          if (null == t.promptView) {
            let r = n.dom.ownerDocument,
              o = r.createElement("div")
            ;((o.contentEditable = "false"),
              (o.dataset.pageBlockRow = ""),
              (o.dataset.pageBlockType = "paragraph"),
              (o.dataset.pageGeneratePrompt = ""),
              (o.dataset.pageGenerateId = t.data.id),
              (t.promptView = {
                anchor: o,
                restoreFocus: !0,
                editor: (function ({
                  mount: e,
                  pmu: t,
                  placeholder: n,
                  plugins: r,
                  canEdit: o,
                  onChange: i,
                  onSubmit: s,
                  onCancel: d,
                  initialDocument: c,
                }) {
                  let u = (0, v.v)({
                    mount: e,
                    pmu: t,
                    markdown: "",
                    initialDocument: c,
                    editable: o(),
                    attributes: () => ({
                      "data-page-generate-input": "",
                      role: "textbox",
                      "aria-label": n ?? "",
                      "aria-multiline": "true",
                      "aria-readonly": o() ? "false" : "true",
                      tabindex: "-1",
                    }),
                    onChange: i,
                    pluginStack: [
                      (0, a.b6)(),
                      (0, w.$)(n ?? ""),
                      ...r,
                      new l.k_({
                        filterTransaction: (e) => !e.docChanged || o(),
                        props: {
                          handleKeyDown: (e, t) =>
                            !t.defaultPrevented &&
                            !t.isComposing &&
                            229 !== t.keyCode &&
                            ("Escape" === t.key
                              ? (d(), !0)
                              : "Enter" === t.key &&
                                !t.metaKey &&
                                !t.ctrlKey &&
                                !t.altKey &&
                                (t.repeat ||
                                  (t.shiftKey
                                    ? e.dispatch(
                                        e.state.tr.replaceSelectionWith(e.state.schema.nodes.hard_break.create()),
                                      )
                                    : s()),
                                !0)),
                          handlePaste(e, t) {
                            let n = t.clipboardData?.getData("text/plain")
                            if (null == n) return !1
                            let a = []
                            return (
                              n.split(/\r?\n/u).forEach((t, n) => {
                                ;(n > 0 && a.push(e.state.schema.nodes.hard_break.create()),
                                  "" !== t && a.push(e.state.schema.text(t)))
                              }),
                              e.dispatch(e.state.tr.replaceWith(e.state.selection.from, e.state.selection.to, a)),
                              !0
                            )
                          },
                        },
                      }),
                      (0, x.w)({
                        "Mod-a": (e, t) => (t?.(e.tr.setSelection(l.U3.create(e.doc, 1, e.doc.content.size - 1))), !0),
                        "Mod-z": a.tN,
                        "Shift-Mod-z": a.ZS,
                        "Mod-y": a.ZS,
                      }),
                      (0, x.w)(b.RV),
                    ],
                  })
                  return (u.view.setProps({ clipboardTextSerializer: y.Q2, handleScrollToSelection: () => !0 }), u)
                })({
                  mount: r.createElement("div"),
                  pmu: e,
                  placeholder: K(t)?.output === "dil" ? k : _,
                  plugins: S?.() ?? [],
                  canEdit: () => K(t)?.phase === "prompt",
                  onChange: () => {
                    ;((t.data.input = t.promptView?.editor.view.state.doc), er(t))
                  },
                  initialDocument: t.data.input,
                  onSubmit: () => ed(t.data.id),
                  onCancel: () => ea(t.data.id),
                }),
              }))
          }
          return t.promptView.anchor
        },
        el = (e) => {
          ;(e.promptView?.editor.destroy(), (e.promptView = null))
        },
        ei = (e) => {
          J(e)
          let t = K(e)
          ;((e.data.result = e.data.previousResult),
            null != e.data.result &&
              null != V &&
              null != t &&
              e.preview?.editor.review(V.state.doc.type.create(null, t.node), e.data.result))
        },
        es = (t) => {
          t.frame = null
          let n = K(t)
          if (null == V || V.isDestroyed || null == n || (!n.preview && "generating" !== n.phase)) return
          let a = t.data.result ?? A(e, t.data.markdown, n)
          if (null == a || ("text" === n.output && "" === e.serialize(a).trim())) return
          let r = !n.preview || null == t.preview
          if (null == t.preview) {
            let e,
              r = V.dom.ownerDocument,
              o = r.createElement("div")
            ;((o.contentEditable = "false"), (o.dataset.pageBlockRow = ""), (o.dataset.pageGenerateId = t.data.id))
            let l = t.promptView?.anchor.querySelector("[data-page-generate-frame]")
            if (l instanceof HTMLElement) {
              let t = r.defaultView?.getComputedStyle(l)
              null != t && (e = l.clientHeight - parseFloat(t.paddingBlockStart) - parseFloat(t.paddingBlockEnd))
            }
            t.preview = {
              dom: o,
              editor: (0, f._)(r, a, { checkboxes: t.checkboxes, output: n.output, initialHeight: e }),
              frame: null,
              restoreFocus: !!t.promptView?.anchor.contains(r.activeElement),
            }
          } else t.preview.editor.render(a)
          ;((t.preview.dom.dataset.pageBlockType = a.firstChild?.type.name ?? "paragraph"), r && Z(t, { preview: !0 }))
        },
        ed = (n) => {
          let l = B.get(n)
          if (null == l) return
          let i = V,
            d = K(l),
            c = z(l.promptView?.editor.view.state.doc)
          if (null == i || i.isDestroyed || !Q(d) || d?.phase !== "prompt" || "" === c) return
          if (d.invalidated) {
            let e = i.state.doc.resolve(d.at),
              t = e.depth > 0 ? e.before(1) : e.pos,
              r = i.state.doc.nodeAt(t),
              o = null == r || 0 === r.content.size ? t : t + r.nodeSize
            if (
              (ee(l),
              (l.data.blockId = null),
              i.dispatch(
                (0, a._B)(
                  i.state.tr
                    .insert(o, i.state.schema.nodes.paragraph.create())
                    .setMeta("addToHistory", !1)
                    .setMeta(E, { type: "open", id: n, from: o, at: o + 1, insertedParagraph: !0, output: d.output }),
                ),
              ),
              !X((d = K(l))) || d?.phase !== "prompt")
            )
              return
          }
          let u = new AbortController()
          l.data.observation?.action.finish("superseded")
          let p = C?.(d.output)
          ;((l.data.observation = p),
            (l.data.request = u),
            (l.data.markdown = ""),
            (l.data.status = null),
            (l.data.result = null),
            null != l.data.previousResult && l.preview?.editor.render(l.data.previousResult))
          let m = l.preview?.frame ?? l.promptView?.anchor
          ;(null == l.scroll &&
            m instanceof HTMLElement &&
            (l.scroll = (0, T.F)(
              m,
              "text" === d.output ? (m.querySelector("[data-page-composer-overlay]") ?? void 0) : void 0,
            )),
            Z(l, { phase: "generating", error: null }),
            (0, g.I)(i, d.at, { scrollIntoView: !1, insertIfMissing: !1 }) || l.promptView?.editor.view.dom.focus())
          let h = i.state,
            f = I?.(d.output)
          s({
            prompt: c,
            getPrompt: () => K(l),
            output: d.output,
            draft: l.data.previousResult ?? void 0,
            signal: u.signal,
            observation: f,
            onStatus: (e) => {
              u.signal.aborted || l.data.request !== u || ((l.data.status = e), l.data.notify(), er(l))
            },
            onText: (e) => {
              u.signal.aborted ||
                l.data.request !== u ||
                ((l.data.markdown = e),
                e.length > 0 && p?.action.milestone("response_started"),
                l.data.notify(),
                null != V &&
                  null == l.frame &&
                  (l.frame = V.dom.ownerDocument.defaultView?.requestAnimationFrame(() => es(l)) ?? null))
            },
          })
            .then((n) => {
              let a = K(l)
              if (u.signal.aborted || l.data.request !== u || a?.invalidated || a?.phase !== "generating")
                return void f?.cancel()
              if (!r(a.output) || (null == U && !t())) throw new P.cS("unavailable")
              if ((f?.stage("validating_output"), (l.data.result = A(e, n, a)), null == l.data.result))
                throw new P.cS("empty")
              if (
                1 === l.data.result.childCount &&
                l.data.result.firstChild?.type.name !== "table" &&
                l.data.result.firstChild?.type.spec.attrs?.pageLayout != null
              ) {
                let e = l.data.result.firstChild
                l.data.result = l.data.result.copy(
                  o.FK.from(e.type.create({ ...e.attrs, pageLayout: a.node.attrs.pageLayout }, e.content, e.marks)),
                )
              }
              if ("text" === a.output && "" === e.serialize(l.data.result).trim()) throw new P.cS("empty")
              ;(Y(l),
                "string" == typeof n && (l.data.markdown = n),
                es(l),
                l.preview?.editor.review(a.node.type.schema.topNodeType.create(null, a.node), l.data.result),
                (l.data.previousResult = l.data.result),
                (l.data.reviewObservation = p),
                null != l.preview &&
                  i.hasFocus() &&
                  i.state.doc === h.doc &&
                  i.state.selection.eq(h.selection) &&
                  ((l.preview.restoreFocus = null == l.preview.frame), l.preview.frame?.focus({ preventScroll: !0 })),
                J(l),
                Z(l, { phase: "review", preview: !0 }),
                f?.succeed())
            })
            .catch((e) => {
              ;(f?.fail(e),
                p?.action.finish(u.signal.aborted ? "cancelled" : "failure"),
                !u.signal.aborted &&
                  l.data.request === u &&
                  (ei(l),
                  null != l.promptView &&
                    l.preview?.frame?.contains(i.dom.ownerDocument.activeElement) &&
                    (l.promptView.restoreFocus = !0),
                  Z(l, {
                    phase: "prompt",
                    preview: null != l.data.previousResult,
                    error: e instanceof P.cS ? e.reason : "failed",
                  }),
                  l.promptView?.restoreFocus && l.promptView.editor.view.focus()))
            })
        },
        ec = (e, t = !0) => {
          let n = B.get(e)
          if (null == n) return
          let r = V,
            o = K(n)
          if (
            null == r ||
            r.isDestroyed ||
            !X(o) ||
            o?.phase !== "review" ||
            null == n.data.result ||
            (t && et(n, () => ec(e, !1)))
          )
            return
          let l = new Map(),
            i = n.preview?.editor.dom.querySelectorAll(
              ':scope > [data-page-block-diff] > [data-page-block-type="table"] > [data-page-block-viewport]',
            )
          if (null != i && i.length > 0) {
            let e = r.dom.ownerDocument,
              t = e.documentElement.dataset.reducedMotion,
              a =
                "true" === t || (null == t && !!e.defaultView?.matchMedia("(prefers-reduced-motion: reduce)").matches),
              s = r.dom.getBoundingClientRect().width / r.dom.offsetWidth || 1,
              d = 0
            n.data.result.forEach((e, t) => {
              if ("table" !== e.type.name) return
              let n = i[d++]
              if (null == n || "full-width" !== e.attrs.pageLayout) return
              let r = (0, u.A)(n, { reducedMotion: a, zoom: s, delayMs: 150 })
              null != r && l.set(o.from + t, r)
            })
          }
          let s = (0, a._B)(
              r.state.tr
                .replaceWith(o.from, o.from + o.node.nodeSize, n.data.result.content)
                .setMeta(d.Tt, !0)
                .setMeta(E, { id: n.data.id, type: "close" }),
            ),
            c = n.data.reviewObservation
          for (let [e, t] of ((n.data.observation = void 0), r.dispatch(s), l)) {
            let n = (0, M.cY)(r, e)
            null != n && t(n)
          }
          ;(c?.accepted(), r.focus())
        },
        eu = (e) => {
          let t = V
          if (null == t || t.isDestroyed || B.get(e.id)?.synchronizing) return
          let n = e.prompt,
            a = E.getState(t.state)?.get(e.id)
          if (null == n) {
            null != a && t.dispatch(t.state.tr.setMeta(E, { type: "close", id: e.id }))
            return
          }
          if (null == a) {
            let r = e.restore(t.state.doc, R)
            if (
              null == r ||
              (t.dispatch(t.state.tr.setMeta(E, { type: "restore", prompt: r })), (a = r), null == (n = e.prompt))
            )
              return
          }
          let r = H(e.id)
          r.synchronizing = !0
          try {
            ;((a.phase !== n.phase || a.error !== n.error || a.preview !== n.preview) &&
              Z(r, { phase: n.phase, error: n.error, preview: n.preview }),
              "generating" === n.phase
                ? (r.frame = r.frame ?? t.dom.ownerDocument.defaultView?.requestAnimationFrame(() => es(r)) ?? null)
                : (Y(r), es(r)),
              "review" === n.phase &&
                null != e.result &&
                r.preview?.editor.review(t.state.doc.type.create(null, n.node), e.result),
              er(r))
          } finally {
            r.synchronizing = !1
          }
        }
      return {
        canGenerate: n,
        plugin: new l.k_({
          key: E,
          selectAsBlock: !0,
          filterTransaction(e, t) {
            if (!e.docChanged || e.getMeta(m.Qe)) return !0
            let n = e.getMeta(E)
            for (let a of E.getState(t)?.values() ?? []) {
              if (("prompt" === a.phase && !a.preview) || (n?.type === "close" && n.id === a.id)) continue
              let t = e.mapping.mapResult(a.from, 1),
                r = t.deleted ? (0, j.x)(e, a.from) : t.pos,
                o = null == r ? null : e.doc.nodeAt(r)
              if (null != o && !(0, p.FJ)(o).eq((0, p.FJ)(a.node))) return !1
            }
            return !0
          },
          state: {
            init: (e, t) => {
              let n = new Map()
              for (let e of $.entries.values()) {
                let a = e.restore(t.doc, R)
                null != a && n.set(e.id, a)
              }
              return n
            },
            apply(e, t) {
              let n = e.getMeta(E),
                a = new Map()
              for (let [r, o] of t) {
                if (n?.type === "close" && n.id === r) continue
                let t = e.mapping.mapResult(o.from, 1),
                  i = $.entries.get(r)?.blockId,
                  s = e.getMeta(m.Qe) && null != i ? R?.(e.doc, i) : void 0,
                  d = t.deleted ? (0, j.x)(e, o.from) : null,
                  c = s ?? d ?? t.pos,
                  u = e.doc.nodeAt(c),
                  g =
                    ((null != s && (t.deleted || s !== t.pos)) || null != d) && u?.isTextblock
                      ? c + Math.min(o.at - o.from, u.nodeSize - 1)
                      : e.mapping.map(o.at, 1),
                  h =
                    o.invalidated ||
                    null === s ||
                    (t.deleted && null == s && null == d) ||
                    null == u ||
                    !u.isTextblock ||
                    L(u),
                  f = h || (null != u && !(0, p.FJ)(u).eq((0, p.FJ)(o.node)))
                a.set(r, {
                  ...o,
                  from: c,
                  at: h ? l.U3.near(e.doc.resolve(g)).from : g,
                  node: h || null == u ? o.node : u,
                  invalidated: h,
                  insertedParagraph: o.insertedParagraph && !f,
                  ...(n?.type === "update" && n.id === r ? n.update : {}),
                  ...(f && ("prompt" !== o.phase || o.preview || h)
                    ? { phase: "prompt", preview: !1, error: "changed" }
                    : {}),
                })
              }
              if (n?.type === "open") {
                let t = e.doc.nodeAt(n.from)
                t?.isTextblock &&
                  a.set(n.id, {
                    id: n.id,
                    output: n.output,
                    from: n.from,
                    at: n.at,
                    insertedParagraph: n.insertedParagraph,
                    node: t,
                    invalidated: !1,
                    phase: "prompt",
                    error: null,
                    preview: !1,
                  })
              } else n?.type === "restore" && a.set(n.prompt.id, n.prompt)
              return a
            },
          },
          props: {
            decorations(e) {
              let t = []
              for (let n of E.getState(e)?.values() ?? []) {
                let a = H(n.id),
                  { from: r, node: o } = n,
                  l = !n.invalidated && 0 === o.content.size
                if (n.preview && null != a.preview) {
                  t.push(
                    i.NZ.widget(r, a.preview.dom, {
                      key: `page-generate-preview-${n.id}`,
                      side: 1,
                      ignoreSelection: !0,
                      stopEvent: () => !0,
                    }),
                    i.NZ.node(
                      r,
                      r + o.nodeSize,
                      { "data-page-generate-original": "", "aria-hidden": "true", contenteditable: "false" },
                      { selectAsBlock: l },
                    ),
                  )
                  continue
                }
                let s = e.doc.resolve(n.at),
                  d = s.depth > 0 ? s.before(1) : n.at,
                  c = e.doc.nodeAt(d)
                ;(null != c &&
                  t.push(
                    i.NZ.node(
                      d,
                      d + c.nodeSize,
                      {
                        "data-page-generate-prompt": "",
                        "data-page-generate-original": 0 === c.content.size ? "" : void 0,
                        contenteditable: "prompt" === n.phase ? void 0 : "false",
                        "aria-readonly": "prompt" === n.phase ? void 0 : "true",
                        class: "prompt" === n.phase ? void 0 : "text-disabled",
                      },
                      { selectAsBlock: l },
                    ),
                  ),
                  t.push(
                    i.NZ.widget(null == c || 0 === c.content.size ? d : d + c.nodeSize, (e) => eo(a, e), {
                      key: `page-generate-instructions-${n.id}`,
                      marks: [],
                      side: 1,
                      ignoreSelection: !0,
                      stopEvent: () => !0,
                    }),
                  ))
              }
              return i.zF.create(e.doc, t)
            },
            handleKeyDown(e, t) {
              if ("Escape" !== t.key || t.defaultPrevented || t.isComposing) return !1
              let { selection: n } = e.state
              for (let [t, a] of B) {
                let r = K(a)
                if (
                  null != r &&
                  "prompt" !== r.phase &&
                  (a.preview?.frame?.contains(e.dom.ownerDocument.activeElement) ||
                    a.promptView?.anchor.contains(e.dom.ownerDocument.activeElement) ||
                    (e.hasFocus() &&
                      ((D(n) === r.from && (n instanceof l.nh || n.to < r.from + r.node.nodeSize)) ||
                        (n.empty && n.from === r.from + r.node.nodeSize + 1 && !N(e.state)))))
                )
                  return (ea(t), !0)
              }
              return !1
            },
          },
          view(e) {
            V = e
            let n = [...$.entries.values()]
            for (let t of E.getState(e.state)?.values() ?? []) {
              let e = H(t.id)
              ;((e.data.prompt = t), (e.lastState = t), "changed" === t.error && ee(e), er(e))
            }
            let o = $.subscribe(eu)
            queueMicrotask(() => {
              if (V === e && !e.isDestroyed) {
                for (let t of n) E.getState(e.state)?.has(t.id) || null == t.prompt || t.clear()
                for (let e of $.entries.values()) eu(e)
              }
            })
            let i = (t) => {
                if (
                  "Enter" === t.key &&
                  !t.defaultPrevented &&
                  !t.repeat &&
                  !t.isComposing &&
                  229 !== t.keyCode &&
                  !t.shiftKey &&
                  !t.metaKey &&
                  !t.ctrlKey &&
                  !t.altKey
                )
                  for (let [n, r] of B) {
                    let o = K(r)
                    if (!X(o) || null == o || ("prompt" === o.phase && !o.preview)) continue
                    let { selection: i } = e.state
                    if (
                      ("generating" === o.phase && t.target === r.promptView?.editor.view.dom) ||
                      t.target === r.preview?.frame ||
                      (t.target === e.dom && D(i) === o.from && (i.empty || i instanceof l.nh))
                    ) {
                      if ((t.preventDefault(), t.stopPropagation(), "review" === o.phase)) ec(n)
                      else {
                        let t = o.from + o.node.nodeSize,
                          n = e.state.tr.insert(t, e.state.schema.nodes.paragraph.create())
                        ;(e.dispatch((0, a._B)(n.setSelection(l.U3.create(n.doc, t + 1)).scrollIntoView())), e.focus())
                      }
                      return
                    }
                  }
              },
              s = (t) => {
                if (t.target instanceof Element && null == t.target.closest("[data-inline-composer]"))
                  for (let n of B.values()) {
                    let a = K(n)
                    if (
                      a?.phase !== "generating" &&
                      !(a?.phase === "prompt" && n.promptView?.anchor.contains(t.target))
                    )
                      continue
                    let r = e.nodeDOM(a.from)
                    if (
                      (r instanceof HTMLElement && r.closest("[data-page-block-row]")?.contains(t.target)) ||
                      n.preview?.dom.contains(t.target) ||
                      n.promptView?.anchor.contains(t.target)
                    ) {
                      ;(t.preventDefault(),
                        (n.preview?.frame ?? n.promptView?.editor.view.dom)?.focus({ preventScroll: !0 }))
                      return
                    }
                  }
              }
            return (
              e.dom.addEventListener("mousedown", s, !0),
              e.dom.addEventListener("keydown", i, !0),
              {
                update() {
                  let n = E.getState(e.state)
                  for (let a of n?.values() ?? []) {
                    let n = H(a.id)
                    if ("prompt" !== a.phase || a.preview) {
                      if (!r(a.output) || (null == U && (!t() || !e.editable)))
                        return void Z(n, { phase: "prompt", preview: !1, error: "unavailable" })
                    } else ee(n)
                    ;(n.synchronizing ||
                      ((n.data.prompt = a),
                      (n.data.blockId = n.data.blockId ?? O?.(e.state.doc, a.from) ?? null),
                      a !== n.lastState && ((n.synchronizing = !0), n.data.notify(), (n.synchronizing = !1))),
                      (n.lastState = a),
                      er(n))
                  }
                  for (let [e, t] of B) n?.has(e) || (ee(t), el(t), (t.synchronizing = !0), t.data.clear(), B.delete(e))
                  for (let e of (G(), $.entries.values())) n?.has(e.id) || eu(e)
                },
                destroy() {
                  for (let t of (e.dom.removeEventListener("mousedown", s, !0),
                  e.dom.removeEventListener("keydown", i, !0),
                  o(),
                  B.values()))
                    (Y(t), (t.data.input = t.promptView?.editor.view.state.doc ?? t.data.input), (t.snapshot = null))
                  ;((V = null),
                    G(),
                    queueMicrotask(() => {
                      if (null == V)
                        for (let e of B.values())
                          (e.scroll?.destroy(),
                            (e.scroll = null),
                            e.preview?.editor.destroy(),
                            (e.preview = null),
                            el(e),
                            null == U && (e.data.observation?.action.dispose(), ee(e)))
                    }))
                },
              }
            )
          },
        }),
        submit: ed,
        accept: ec,
        followUp: (e) => {
          let t = B.get(e)
          if (null == t) return
          let n = K(t)
          null != V &&
            X(n) &&
            n?.phase === "review" &&
            (el(t), (t.data.input = void 0), eo(t, V), Z(t, { phase: "prompt", error: null }))
        },
        cancel: ea,
        dismiss: (e) => {
          let t = B.get(e)
          if (null == t) return
          let n = K(t)
          n?.phase === "prompt" && (n.preview ? ea(e) : en(e))
        },
        close: en,
        subscribe: (e) => (F.add(e), () => F.delete(e)),
        getSnapshot: () => W,
      }
    }
    function D(e) {
      return e instanceof l.nh
        ? e.node.isTextblock && 0 === e.node.content.size
          ? e.from
          : null
        : e.$from.depth > 0
          ? e.$from.before(1)
          : null
    }
    function z(e) {
      return null == e ? "" : (0, s.jw)(e.content, { preserveUnresolvedSkillMentions: !0 }).content.trim()
    }
    function L(e) {
      let t = !1
      return (
        e.descendants((e) => {
          e.isAtom && !e.isText && "hard_break" !== e.type.name && (t = !0)
        }),
        t
      )
    }
  },
  TXVE(e, t, n) {
    var a = n("tINb"),
      r = n("jIRR")
    let o = new WeakMap()
    class l {
      retain
      entries = new Map()
      listeners = new Set()
      constructor(e) {
        this.retain = e
      }
      create(e) {
        let t = new i(e, this.retain, () => {
          ;(null == t.prompt && this.entries.delete(e), this.listeners.forEach((e) => e(t)))
        })
        return (this.entries.set(e, t), t)
      }
      subscribe(e) {
        return (this.listeners.add(e), () => this.listeners.delete(e))
      }
      clear() {
        for (let e of this.entries.values()) e.clear()
      }
    }
    class i {
      id
      retain
      onChange
      prompt = null
      blockId = null
      input
      request = null
      observation
      markdown = ""
      status = null
      result = null
      previousResult = null
      reviewObservation
      release = null
      constructor(e, t, n) {
        ;((this.id = e), (this.retain = t), (this.onChange = n))
      }
      restore(e, t) {
        let n = this.prompt
        if (null == n || null == this.blockId || null == t) return null
        let r = t(e, this.blockId),
          o = null == r ? null : e.nodeAt(r)
        if (null == r || null == o || !o.isTextblock) return null
        let l = !(0, a.FJ)(o).eq((0, a.FJ)(n.node))
        return {
          ...n,
          from: r,
          at: r + Math.min(n.at - n.from, o.nodeSize - 1),
          node: o,
          insertedParagraph: n.insertedParagraph && !l,
          phase: l ? "prompt" : n.phase,
          preview: !l && n.preview,
          error: l ? "changed" : n.error,
        }
      }
      notify() {
        ;(null != this.prompt
          ? (this.release = this.release ?? this.retain?.(() => this.clear()) ?? null)
          : (this.release?.(), (this.release = null)),
          this.onChange())
      }
      clear() {
        ;((this.prompt = null),
          (this.blockId = null),
          (this.input = void 0),
          this.request?.abort(),
          (this.request = null),
          this.observation?.action.finish("cancelled"),
          (this.observation = void 0),
          (this.result = null),
          (this.previousResult = null),
          (this.reviewObservation = void 0),
          (this.markdown = ""),
          (this.status = null),
          this.notify())
      }
    }
    n.d(
      t,
      {},
      {
        KX: function (e, t, n, a) {
          let i = o.get(a)
          return (null == i && ((i = new l((o) => (0, r.w)(e, t, n, a, o))), o.set(a, i)), i)
        },
        Wu: l,
      },
    )
  },
  j8xC(e, t, n) {
    n.d(t, { _: () => c })
    var a = n("Hpb6"),
      r = n("PSdF"),
      o = n("WRaR"),
      l = n("d3AA"),
      i = n("SuyB"),
      s = n("FBD6"),
      d = n("UXeX")
    function c(e, t, { checkboxes: n, output: u, initialHeight: p }) {
      let m,
        g = e.createElement("div")
      ;((g.className = "Viewport-wZDNOK"), null != p && (g.style.blockSize = `${p}px`))
      let h = "dil" === u ? new o.d({ generationPreview: !0 }) : null,
        f = (e) =>
          (0, i.V)(g, e, { checkboxes: n, plugins: [...(null == h ? [] : [h.plugin]), (0, s.y)(g.ownerDocument)] }),
        v = f(t),
        y = v.dom,
        b = new ResizeObserver(() => {
          let e = `${y.offsetHeight}px`
          g.style.blockSize !== e && (g.style.blockSize = e)
        })
      return (
        b.observe(y),
        {
          dom: g,
          dil: h,
          get codeBlocks() {
            return m
          },
          render(e) {
            if (v.isDestroyed) {
              ;((m = void 0), b.disconnect(), g.replaceChildren(), (y = (v = f(e)).dom), b.observe(y))
              return
            }
            ;(0, i.u)(v, e)
          },
          review(e, t) {
            if (null != h) return void (0, i.u)(v, t)
            ;(b.disconnect(), v.destroy())
            let n = [],
              o =
                1 === e.childCount && e.firstChild?.type.name === "paragraph" && 0 === e.firstChild.content.size
                  ? e.copy(a.FK.empty)
                  : e
            ;((y = (0, l.V)(
              o,
              t,
              g.ownerDocument,
              (e, t) => {
                if ("string" != typeof e.attrs.lang || "latex" !== (0, r.dc)(e.attrs.lang)) return
                let a = g.ownerDocument.createElement("div")
                ;(t.replaceWith(a), a.append(t), n.push({ node: e, source: t, container: a }))
              },
              { granularity: "adaptive" },
            )),
              (m = n),
              y.classList.add(d.A.PagePreview),
              g.replaceChildren(y),
              b.observe(y))
          },
          destroy() {
            ;(b.disconnect(), v.destroy(), (m = void 0), g.remove())
          },
        }
      )
    }
  },
  FBD6(e, t, n) {
    var a = n("f6KK"),
      r = n("SAxP")
    n("V8uZ")
    var o = n("Ny3C"),
      l = n("D1xy")
    let i = 0
    function s(e, t, n, { arrivalColor: a, granularity: r, restartAtEachRange: o = !1 }) {
      let l = (l = 0, i = 4) => {
          let s = []
          for (let { from: c, to: u } of n)
            s.push(
              ...d(e, t, c, u, {
                appearance: "response",
                arrivalColor: a,
                granularity: r,
                firstWordIndex: o ? 0 : s.length,
                typingSpeed: i,
                delayMs: l,
              }),
            )
          return s
        },
        i = performance.now(),
        c = l(),
        u = c.reduce((e, t) => Math.max(e, t.spec.expiresAt - 500), i) - i,
        p = Math.max(0, 150 - u)
      return c.length > 0 && (p > 0 || u > 600) ? l(p, 4 * Math.max(1, u / 600)) : c
    }
    function d(
      e,
      t,
      n,
      a,
      {
        delayMs: s = 0,
        staggerMs: c = 0,
        durationMs: u = 500,
        granularity: p = "word",
        appearance: m = "draft",
        arrivalColor: g,
        typingSpeed: h = 1,
        firstWordIndex: f = 0,
      } = {},
    ) {
      let v = e.documentElement.dataset.reducedMotion
      if (
        n >= a ||
        "true" === v ||
        (null == v && e.defaultView?.matchMedia("(prefers-reduced-motion: reduce)").matches)
      )
        return []
      let y = [],
        b = performance.now(),
        x = (e, t, n) => {
          let a = String(++i)
          return r.NZ.inline(
            e,
            t,
            {
              class: "response" === m ? l.A.responseWordArrival : l.A.wordArrival,
              style: `animation-delay: ${n}ms; animation-duration: ${u}ms${null == g ? "" : `; --word-arrival-color: ${g}`}`,
              "data-page-generate-reveal": a,
            },
            { key: a, expiresAt: b + u + n },
          )
        }
      if ("range" === p) return [x(n, a, s)]
      let w = f
      if ("response" === m)
        return (
          t.nodesBetween(n, a, (e, t) => {
            if (!e.isTextblock) return
            let r = Math.max(n, t + 1),
              l = Math.min(a, t + e.nodeSize - 1),
              i = e.textBetween(r - t - 1, l - t - 1, "", "￼"),
              d = (0, o.O)(i, w, m)
            for (let e of ((w += d.length), d)) y.push(x(r + e.from, r + e.to, s + e.delay / h))
            return !1
          }),
          y
        )
      let I = t.textBetween(n, a, "", "").length,
        _ = 0
      return (
        t.nodesBetween(n, a, (e, t) => {
          if (!e.isText) return
          let r = Math.max(n, t),
            l = e.textContent.slice(r - t, Math.min(a, t + e.nodeSize) - t),
            i = (0, o.O)(l, w)
          for (let e of ((w += i.length), i)) {
            let t = s + e.delay / h + (c * (_ + e.from)) / I
            y.push(x(r + e.from, r + e.to, t))
          }
          _ += l.length
        }),
        y
      )
    }
    n.d(
      t,
      {},
      {
        j: s,
        y: function (e, t = {}) {
          let n = e.defaultView,
            o = (n, a, r) =>
              "agent-edit" === t.appearance
                ? s(e, n, [{ from: a, to: r }], { arrivalColor: t.arrivalColor })
                : d(e, n, a, r),
            l = new a.k_({
              state: {
                init: (e, t) => r.zF.create(t.doc, o(t.doc, 0, t.doc.content.size)),
                apply(e, t, n) {
                  if (e.getMeta(l)) {
                    let e = performance.now()
                    return t.remove(t.find(void 0, void 0, (t) => t.expiresAt <= e))
                  }
                  let a = t.map(e.mapping, e.doc)
                  if (n.doc.textContent === e.doc.textContent) return a
                  let r = []
                  return (
                    e.mapping.maps.forEach((t, n) => {
                      let a = e.mapping.slice(n + 1)
                      t.forEach((t, n, l, i) => {
                        r.push(...o(e.doc, a.map(l, 1), a.map(i, -1)))
                      })
                    }),
                    a.add(e.doc, r)
                  )
                },
              },
              props: {
                decorations(e) {
                  return this.getState(e)
                },
              },
              view: (e) => {
                let t = null,
                  a = () => {
                    if (null != t) return
                    let a = 1 / 0
                    ;(l
                      .getState(e.state)
                      ?.find()
                      .forEach((e) => {
                        let t = e.spec
                        a = Math.min(a, t.expiresAt)
                      }),
                      1 / 0 !== a &&
                        (t =
                          n?.setTimeout(
                            () => {
                              ;((t = null), e.dispatch(e.state.tr.setMeta(l, !0)))
                            },
                            Math.max(0, a - performance.now()),
                          ) ?? null))
                  }
                return (
                  a(),
                  {
                    update: a,
                    destroy() {
                      null != t && n?.clearTimeout(t)
                    },
                  }
                )
              },
            })
          return l
        },
      },
    )
  },
  zoJM(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("zTeN"),
      l = n("zd8w"),
      i = n("e1xH"),
      s = n("Um9I"),
      d = n("oPCO"),
      c = n("tzqa"),
      u = n("pyoT"),
      p = n("OWtl")
    let m = (0, o.i1)(p.u, (e, { get: t }) => {
      if (!t(i.pagesEnabled$) || t(i.ZR, e)) return null
      let n = t(s.G2, e)
      if (!n?.can_read || !n.presentation.collaboration) return null
      if (!n.can_share) return "presence"
      let { space: a, isDriveBacked: r } = t(u.spacePageContext$, e)
      if (a?.root_page_id === e || null == r) return "presence"
      if (r) {
        let n = t(u.loadedSpacePageMetadata$, e)
        if (!(0, d.U)(n)) return "presence"
        if (n?.parent != null) return "shares"
      }
      return void 0 !== a ? "shares" : "presence"
    })
    n.d(
      t,
      {},
      {
        s: function (e) {
          let t,
            n,
            i,
            s = (0, r.c)(9),
            { pageId: d, session: u, onChange: p } = e,
            g = (0, o._U)(m, d),
            h = null != g
          return (
            s[0] !== h || s[1] !== p
              ? ((t = () => {
                  if (h) return () => p([])
                }),
                (n = [h, p]),
                (s[0] = h),
                (s[1] = p),
                (s[2] = t),
                (s[3] = n))
              : ((t = s[2]), (n = s[3])),
            (0, l.useLayoutEffect)(t, n),
            s[4] !== g || s[5] !== p || s[6] !== d || s[7] !== u
              ? ((i =
                  null == g ? null : (0, a.jsx)(c.Z, { pageId: d, session: u, canShare: "shares" === g, onChange: p })),
                (s[4] = g),
                (s[5] = p),
                (s[6] = d),
                (s[7] = u),
                (s[8] = i))
              : (i = s[8]),
            i
          )
        },
      },
    )
  },
  cdkl(e, t, n) {
    n.d(
      t,
      {},
      {
        x: function (e, t) {
          let n = e.before.nodeAt(t)
          if (null == n || 1 !== e.before.content.content.filter((e) => e === n).length) return null
          let a = []
          return (
            e.doc.forEach((e, t) => {
              e === n && a.push(t)
            }),
            1 === a.length ? a[0] : null
          )
        },
      },
    )
  },
  ebwD(e, t, n) {
    var a = n("wJ05")
    n.d(
      t,
      {},
      {
        Y: function (e, t) {
          let n = null == t ? (0, a.d)(e)?.[0] : void 0,
            r = n?.filter((e) => null != e),
            o = r?.length ? r.reduce((e, t) => e + t, 0) / r.length : 0,
            l = t ?? n?.map((e) => e ?? o)
          if (null == l) return
          let i = l.reduce((e, t) => e + t, 0)
          return {
            widths: l,
            totalWidth: i,
            attributes: {
              "data-page-table-resized": "true",
              style: `inline-size: ${i}px; min-inline-size: 0; max-inline-size: none;`,
            },
          }
        },
      },
    )
  },
  D3nE(e, t, n) {
    n.d(t, { g: () => C })
    var a = n("ABep"),
      r = n("QosV"),
      o = n("wTzC"),
      l = n("slpy"),
      i = n("kBEa"),
      s = n("nkTT")
    let d = (0, s.a)({
        name: "cloud-arrow-up-light-20",
        canvas: {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          frame: { x: 0, y: 0, width: 20, height: 20 },
          inkBounds: { x: 1.314209, y: 3.012695, width: 17.37207, height: 14.487305 },
          visualBounds: { x: 1.314209, y: 3.012695, width: 17.37207, height: 14.487305 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.314209, y: 3.012695, width: 17.37207, height: 14.487305 },
          center: { x: 10.000244, y: 10.256348 },
          insets: { top: 3.012695, right: 1.313721, bottom: 2.5, left: 1.314209 },
          anchors: {
            frame: { x: 10, y: 10 },
            ink: { x: 10.000244, y: 10.256348 },
            foreground: { x: 10.000244, y: 10.256348 },
          },
        },
        capabilities: ["icon"],
        body: '<path d="M9.63452 9.54199C9.8925 9.37182 10.2433 9.40009 10.4705 9.62695L12.8767 12.0332C13.1363 12.2928 13.1361 12.7139 12.8767 12.9736C12.617 13.2333 12.196 13.2333 11.9363 12.9736L10.6658 11.7031V16.835C10.6658 17.2022 10.368 17.5 10.0007 17.5C9.63346 17.5 9.33569 17.2022 9.33569 16.835V11.7021L8.06519 12.9736C7.80549 13.2333 7.38348 13.2333 7.12378 12.9736C6.86447 12.714 6.86438 12.2928 7.12378 12.0332L9.53003 9.62695L9.63452 9.54199Z" fill="currentColor"/> <path d="M9.99976 3.0127C12.8175 3.0127 15.1372 5.14056 15.4421 7.87695C17.2817 8.17771 18.6861 9.77362 18.6863 11.6982C18.6863 13.8374 16.9514 15.5723 14.8123 15.5723C14.4452 15.5721 14.1474 15.2742 14.1472 14.9072C14.1472 14.5401 14.4451 14.2424 14.8123 14.2422C16.2169 14.2422 17.3562 13.1029 17.3562 11.6982C17.356 10.2937 16.2168 9.15527 14.8123 9.15527C14.4451 9.1551 14.1472 8.8574 14.1472 8.49023C14.1472 6.19963 12.2904 4.34277 9.99976 4.34277C8.18354 4.34291 6.63867 5.51091 6.07788 7.13867C5.99604 7.37628 5.78688 7.5474 5.53784 7.58105C3.90424 7.80128 2.64429 9.20241 2.64429 10.8965C2.64429 12.5142 3.79337 13.8649 5.32007 14.1748C5.67985 14.248 5.91262 14.5992 5.8396 14.959C5.76655 15.3188 5.41526 15.5514 5.05542 15.4785C2.9211 15.0452 1.31421 13.1592 1.31421 10.8965C1.31421 8.66688 2.87429 6.80226 4.96265 6.33398C5.79947 4.38154 7.73934 3.01283 9.99976 3.0127Z" fill="currentColor"/>',
      }),
      c = (0, s.a)({
        name: "cloud-slash-light-16",
        canvas: {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 0.808105, y: 1.474609, width: 14.383789, height: 13.049805 },
          visualBounds: { x: 0.808105, y: 1.474609, width: 14.383789, height: 13.049805 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 0.808105, y: 1.474609, width: 14.383789, height: 13.049805 },
          center: { x: 8, y: 7.999512 },
          insets: { top: 1.474609, right: 0.808106, bottom: 1.475586, left: 0.808105 },
          anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 7.999512 }, foreground: { x: 8, y: 7.999512 } },
        },
        capabilities: ["icon"],
        body: '<path d="M1.62842 1.62815C1.83329 1.42328 2.16554 1.42358 2.37061 1.62815L12.3657 11.6233C12.369 11.6265 12.3723 11.6297 12.3755 11.633L14.3706 13.6282C14.5756 13.8332 14.5756 14.1653 14.3706 14.3703C14.1656 14.5754 13.8334 14.5754 13.6284 14.3703L11.7827 12.5246H4.6665C2.53585 12.5245 0.808268 10.7969 0.808105 8.66624C0.808208 6.72543 2.2413 5.12042 4.10693 4.84886L1.62842 2.37034C1.42384 2.16528 1.42354 1.83303 1.62842 1.62815ZM4.98389 5.78147L4.29346 5.88304H4.2876C2.91632 6.06792 1.85899 7.24422 1.85889 8.66624C1.85905 10.217 3.11575 11.4747 4.6665 11.4748H10.7329L5.02783 5.76976C5.01322 5.77319 4.99902 5.77926 4.98389 5.78147Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M7.99951 2.14183C10.3343 2.14183 12.2547 3.9104 12.4976 6.18089C14.0241 6.42006 15.1919 7.74077 15.1919 9.33421C15.1917 10.0287 14.9689 10.6733 14.5913 11.1975C14.4218 11.4324 14.0931 11.4858 13.8579 11.3166C13.6231 11.1473 13.57 10.8193 13.7388 10.5842C13.992 10.2327 14.1409 9.80128 14.1411 9.33421C14.1411 8.19656 13.2542 7.26559 12.1343 7.19651C11.7805 7.17469 11.4875 6.88883 11.4722 6.52171C11.3961 4.6702 9.86996 3.19261 7.99951 3.19261C7.51169 3.19267 7.04829 3.29237 6.62842 3.47288C6.36236 3.587 6.05366 3.46424 5.93896 3.19847C5.82447 2.93216 5.94812 2.62263 6.21436 2.50804C6.7627 2.27235 7.36663 2.14188 7.99951 2.14183Z" fill="currentColor"/>',
      }),
      u = (0, s.a)({
        name: "cloud-slash-light-20",
        canvas: {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          frame: { x: 0, y: 0, width: 20, height: 20 },
          inkBounds: { x: 1.001465, y: 1.833984, width: 17.99707, height: 16.331055 },
          visualBounds: { x: 1.001465, y: 1.833984, width: 17.99707, height: 16.331055 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.001465, y: 1.833984, width: 17.99707, height: 16.331055 },
          center: { x: 10, y: 9.999512 },
          insets: { top: 1.833984, right: 1.001465, bottom: 1.834961, left: 1.001465 },
          anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 9.999512 }, foreground: { x: 10, y: 9.999512 } },
        },
        capabilities: ["icon"],
        body: '<path d="M2.02881 2.02854C2.28836 1.76899 2.71048 1.76928 2.97021 2.02854L17.9702 17.0285C18.2299 17.2882 18.2299 17.7102 17.9702 17.9699C17.7105 18.2296 17.2885 18.2296 17.0288 17.9699L14.7231 15.6643H5.8335C3.16519 15.6643 1.00171 13.5015 1.00146 10.8332C1.00146 8.40872 2.78688 6.40337 5.11475 6.05588L2.02881 2.96995C1.76955 2.71021 1.76926 2.28809 2.02881 2.02854ZM6.23096 7.23557L5.36768 7.36155L5.35986 7.36252C3.65003 7.59312 2.33154 9.06007 2.33154 10.8332C2.33179 12.7669 3.89973 14.3342 5.8335 14.3342H13.3931L6.28076 7.2219C6.26412 7.22566 6.24812 7.23306 6.23096 7.23557Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M10.0005 2.66819C12.921 2.66843 15.3235 4.8787 15.6304 7.71799C17.5392 8.0205 18.9984 9.67261 18.9985 11.6662C18.9984 12.5364 18.7196 13.3444 18.2466 14.0012C18.0319 14.2988 17.6157 14.3669 17.3179 14.1526C17.02 13.938 16.9522 13.5218 17.1665 13.2239C17.482 12.7858 17.6684 12.2484 17.6685 11.6662C17.6683 10.249 16.5627 9.08922 15.1675 9.00315C14.7208 8.97556 14.3508 8.61511 14.3315 8.15159C14.2366 5.84209 12.3336 3.99852 10.0005 3.99827C9.39177 3.99828 8.81344 4.12362 8.28955 4.34885C7.95234 4.4936 7.56066 4.33726 7.41553 4.00022C7.27069 3.66302 7.42715 3.27237 7.76416 3.12717C8.45092 2.83191 9.20783 2.6682 10.0005 2.66819Z" fill="currentColor"/>',
      })
    var p = n("EvLk"),
      m = n("eSc7"),
      g = n("on57"),
      h = n("zTeN"),
      f = n("zd8w"),
      v = n("Wf1j"),
      y = n("oyxz"),
      b = n("Qgfj"),
      x = n("GO7r"),
      w = n("UxN3"),
      I = n("NraH"),
      _ = n("OWtl")
    let k = (0, h.A4)(
        _.u,
        (e) => null,
        (e, { set: t }) => {
          let n,
            a = e.getEngineSaveStatus()
          t("saved" === a ? null : a)
          let r = e.subscribe(() => {
            let r = e.getEngineSaveStatus()
            r !== a &&
              (clearTimeout(n),
              t("saved" === r && null == a ? null : r),
              "saved" === r && null != a && (n = setTimeout(() => t(null), 1e3)),
              (a = r))
          })
          return () => {
            ;(r(), clearTimeout(n))
          }
        },
        { key: (e) => e, autoDispose: !0 },
      ),
      S = {
        offline: { assets: { 16: c, 20: u } },
        "offline-unavailable": { assets: { 16: p.A, 20: m.X } },
        saving: { assets: { 16: i.h, 20: d } },
        saved: { 16: x.ALZ, 20: x.jFs },
      }
    function C(e) {
      let t,
        n = (0, r.c)(5),
        { session: o, pageSession: l, visible: i } = e,
        s = void 0 === i || i,
        d = (0, h._U)(k, o)
      return (
        n[0] !== l || n[1] !== o || n[2] !== d || n[3] !== s
          ? ((t = (0, a.jsx)(A, { visible: s, status: d, session: o, pageSession: l })),
            (n[0] = l),
            (n[1] = o),
            (n[2] = d),
            (n[3] = s),
            (n[4] = t))
          : (t = n[4]),
        t
      )
    }
    function A(e) {
      let t,
        n,
        i,
        s,
        d,
        c,
        u,
        p,
        m,
        h,
        b = (0, r.c)(28),
        { status: x, session: _, pageSession: k, visible: C } = e,
        A = void 0 === C || C,
        M = (0, v.A)()
      b[0] !== _ || b[1] !== x ? ((t = { session: _, status: x }), (b[0] = _), (b[1] = x), (b[2] = t)) : (t = b[2])
      let [P, T] = (0, f.useState)(t)
      ;(_ !== P.session || (x !== P.status && (null != x || "saved" !== P.status))) && T({ session: _, status: x })
      let E = null == x
      b[3] !== M || b[4] !== x
        ? ((n = null == x ? "" : M.formatMessage(j[x])), (b[3] = M), (b[4] = x), (b[5] = n))
        : (n = b[5])
      let N = n,
        U = E && "pointer-events-none opacity-0"
      return (
        b[6] !== U
          ? ((i = (0, g.A)(
              "inline-flex shrink-0 cursor-default items-center justify-center p-1.5 text-default select-none no-drag",
              "transition-opacity duration-100 ease-linear motion-reduce:transition-none",
              U,
            )),
            (b[6] = U),
            (b[7] = i))
          : (i = b[7]),
        b[8] !== k || b[9] !== x || b[10] !== A
          ? ((s =
              null != k &&
              "offline-unavailable" === x &&
              (0, a.jsx)(I.O, {
                visible: A,
                errorUiPresentation: "status",
                operation: "pages.realtime.notice",
                session: k,
                errorUiType: o.CodexPagesErrorUiType.CODEX_PAGES_ERROR_UI_TYPE_LOCAL_SAVE_FAILED,
              })),
            (b[8] = k),
            (b[9] = x),
            (b[10] = A),
            (b[11] = s))
          : (s = b[11]),
        b[12] !== P.status
          ? ((d = null != P.status && (0, a.jsx)(y.A, { ...j[P.status] })), (b[12] = P.status), (b[13] = d))
          : (d = b[13]),
        b[14] !== d
          ? ((c = (0, a.jsx)("span", { className: "sr-only", children: d })), (b[14] = d), (b[15] = c))
          : (c = b[15]),
        b[16] === Symbol.for("react.memo_cache_sentinel") ? ((u = Object.entries(S)), (b[16] = u)) : (u = b[16]),
        b[17] !== x
          ? ((p = (0, a.jsx)("span", {
              className: "grid",
              "aria-hidden": !0,
              children: u.map((e) => {
                let [t, n] = e
                return (0, a.jsx)(
                  "span",
                  {
                    className: (0, g.A)(
                      "col-start-1 row-start-1",
                      "transition-opacity duration-100 ease-linear motion-reduce:transition-none",
                      t === x ? "opacity-100" : "opacity-0",
                    ),
                    children: (0, a.jsx)(w.b5, { icon: n }),
                  },
                  t,
                )
              }),
            })),
            (b[17] = x),
            (b[18] = p))
          : (p = b[18]),
        b[19] !== p || b[20] !== i || b[21] !== s || b[22] !== c
          ? ((m = (0, a.jsxs)("span", {
              className: i,
              "aria-live": "polite",
              "aria-atomic": "true",
              role: "status",
              children: [s, c, p],
            })),
            (b[19] = p),
            (b[20] = i),
            (b[21] = s),
            (b[22] = c),
            (b[23] = m))
          : (m = b[23]),
        b[24] !== E || b[25] !== N || b[26] !== m
          ? ((h = (0, a.jsx)(l.m, { content: N, disabled: E, children: m })),
            (b[24] = E),
            (b[25] = N),
            (b[26] = m),
            (b[27] = h))
          : (h = b[27]),
        h
      )
    }
    let j = (0, b.YK)({
      offline: {
        id: "pages.saveIndicator.offline",
        defaultMessage: "You are offline. Your changes will be saved to this device.",
        description:
          "Tooltip and screen-reader status announcement for the Page toolbar offline icon, shown only when durable local storage is available",
      },
      "offline-unavailable": {
        id: "pages.saveIndicator.offlineUnavailable",
        defaultMessage:
          "You are offline. Changes cannot be saved to this device. Keep this page open until you reconnect.",
        description:
          "Tooltip and screen-reader status announcement when the Page is offline and local device storage is unavailable or blocked",
      },
      saving: {
        id: "pages.saveIndicator.saving",
        defaultMessage: "Saving your changes…",
        description:
          "Tooltip and screen-reader status announcement for the Page toolbar upload icon while synchronizing or awaiting server acknowledgment of local edits",
      },
      saved: {
        id: "pages.saveIndicator.saved",
        defaultMessage: "All changes saved.",
        description:
          "Tooltip and screen-reader status announcement for the Page toolbar checkmark displayed for one second after the server acknowledges all local edits",
      },
    })
  },
  V5qk(e, t, n) {
    n.d(t, { g: () => em, l: () => ec })
    var a = n("ABep"),
      r = n("QosV"),
      o = n("zTeN"),
      l = n("zd8w"),
      i = n("oyxz"),
      s = n("OAko"),
      d = n("hwkA"),
      c = n("Wf1j"),
      u = n("HZfM"),
      p = n("SPnB"),
      m = n("ygO2"),
      g = n("LMw7"),
      h = n("mUDD"),
      f = n("SGsN"),
      v = n("heYt"),
      y = n("mNPx"),
      b = n("UOwN"),
      x = n("Adh7"),
      w = n("cfLx"),
      I = n("pyoT"),
      _ = n("OWtl"),
      k = n("wuZu"),
      S = n("FwqS"),
      C = n("glqn"),
      A = n("LKbA"),
      j = n("Zgpy")
    function M(e) {
      let t,
        n = (0, r.c)(12),
        { children: l, dialog: i, renderDialog: s, target: d } = e,
        c = (0, o.Ul)(j.Ek),
        u = (0, o.Ul)(v.v0),
        m = (0, o.Ul)(I.spaceAccountId$),
        g = (0, o.Ul)(p.chatGptAuthenticatedUserId$)
      if (!c || "unavailable" === u || null == m || null == g) {
        let e, t
        return (
          n[0] !== l ? ((e = l?.(null)), (n[0] = l), (n[1] = e)) : (e = n[1]),
          n[2] !== e ? ((t = (0, a.jsx)(a.Fragment, { children: e })), (n[2] = e), (n[3] = t)) : (t = n[3]),
          t
        )
      }
      let h = `${d.kind}:${d.id}`
      return (
        n[4] !== m || n[5] !== l || n[6] !== i || n[7] !== s || n[8] !== h || n[9] !== d || n[10] !== g
          ? ((t = (0, a.jsx)(P, { accountId: m, dialog: i, renderDialog: s, target: d, userId: g, children: l }, h)),
            (n[4] = m),
            (n[5] = l),
            (n[6] = i),
            (n[7] = s),
            (n[8] = h),
            (n[9] = d),
            (n[10] = g),
            (n[11] = t))
          : (t = n[11]),
        t
      )
    }
    function P(e) {
      let t,
        n,
        i = (0, r.c)(10)
      i[0] !== e.accountId || i[1] !== e.userId
        ? ((t = { accountId: e.accountId, userId: e.userId }), (i[0] = e.accountId), (i[1] = e.userId), (i[2] = t))
        : (t = i[2])
      let [s, d] = (0, l.useState)(t),
        c = (0, o.Ul)(v.v0)
      if (s.accountId !== e.accountId || s.userId !== e.userId) {
        if ("available" !== c) {
          let t, n
          return (
            i[3] !== e.children ? ((t = e.children?.(null)), (i[3] = e.children), (i[4] = t)) : (t = i[4]),
            i[5] !== t ? ((n = (0, a.jsx)(a.Fragment, { children: t })), (i[5] = t), (i[6] = n)) : (n = i[6]),
            n
          )
        }
        d({ accountId: e.accountId, userId: e.userId })
      }
      let u = `${e.accountId}:${e.userId}:${e.target.kind}:${e.target.id}`
      return (
        i[7] !== e || i[8] !== u ? ((n = (0, a.jsx)(T, { ...e }, u)), (i[7] = e), (i[8] = u), (i[9] = n)) : (n = i[9]),
        n
      )
    }
    function T(e) {
      let t,
        n,
        s,
        A,
        M,
        P,
        T,
        U,
        z,
        L,
        O,
        R,
        $,
        B,
        F,
        V,
        W,
        H,
        G,
        K,
        Q,
        X,
        Z = (0, r.c)(93),
        { accountId: Y, children: J, dialog: ee, renderDialog: et, target: en, userId: ea } = e,
        er = void 0 === et || et,
        eo = (0, o.gh)(_.u),
        el = (0, c.A)(),
        ei = (0, o.Ul)(v.v0),
        es = "available" === ei,
        [ed, ec] = (0, u.ok)(),
        eu = (0, u.zy)(),
        [ep, em] = (0, l.useState)(!1),
        eg = ee?.onOpenChange ?? em,
        eh = (0, l.useRef)(null),
        ef = ee?.triggerRef ?? eh,
        ev = (0, o._U)(j.TP, en),
        [ey, eb] = (0, l.useState)(D)
      Z[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = {}), (Z[0] = t)) : (t = Z[0])
      let [ex, ew] = (0, l.useState)(t),
        {
          data: eI,
          isError: e_,
          isPending: ek,
          refetch: eS,
          hasNextPage: eC,
          fetchNextPage: eA,
          isFetchingNextPage: ej,
        } = (0, o._U)(j.fo, en)
      if (
        Z[1] !== Y ||
        Z[2] !== es ||
        Z[3] !== eI?.pages ||
        Z[4] !== ey ||
        Z[5] !== ee?.open ||
        Z[6] !== eC ||
        Z[7] !== el ||
        Z[8] !== e_ ||
        Z[9] !== ek ||
        Z[10] !== eu ||
        Z[11] !== ei ||
        Z[12] !== ep ||
        Z[13] !== ev ||
        Z[14] !== eS ||
        Z[15] !== ex ||
        Z[16] !== eo ||
        Z[17] !== ed ||
        Z[18] !== eg ||
        Z[19] !== ec ||
        Z[20] !== en ||
        Z[21] !== ef ||
        Z[22] !== ea
      ) {
        let e,
          t = es && !e_ ? eI?.pages.flatMap(q) : void 0,
          r = t?.flatMap(N).filter((e) => {
            let { request: t, recipient: n } = e,
              a = (0, j.fR)(t.request_id, t.created_at, n?.principal)
            return !ey.has(a) && !ev?.has(a)
          }),
          o = "loading" === ei || (es && ek),
          l = "error" === ei || (es && e_)
        ;((M = (ee?.open ?? ep) || "1" === ed.get("review_access_requests")),
          Z[37] !== Y || Z[38] !== ex || Z[39] !== eo || Z[40] !== en || Z[41] !== ea
            ? ((e = async (e, t) => {
                let { request: n, recipient: r } = e,
                  o = (0, j.fR)(n.request_id, n.created_at, r?.principal)
                eb((e) => new Set(e).add(o))
                try {
                  await (0, j.Ci)(
                    eo,
                    en,
                    "approve" === t
                      ? {
                          accountId: Y,
                          userId: ea,
                          requestId: n.request_id,
                          requestCreatedAt: n.created_at,
                          recipient: r?.principal,
                          decision: t,
                          role: ex[o] ?? n.requested_role ?? "viewer",
                        }
                      : {
                          accountId: Y,
                          userId: ea,
                          requestId: n.request_id,
                          requestCreatedAt: n.created_at,
                          recipient: r?.principal,
                          decision: t,
                        },
                  )
                } catch (e) {
                  if (e instanceof Error && "access_request_decision_pending" === e.message) return
                  ;(eb((e) => {
                    let t = new Set(e)
                    return (t.delete(o), t)
                  }),
                    eo.get(I.spaceAccountId$) === Y &&
                      eo.get(p.chatGptAuthenticatedUserId$) === ea &&
                      eo
                        .get(f.Id)
                        .danger(
                          (0, a.jsx)(i.A, {
                            id: "codex.pages.accessRequests.decisionError",
                            defaultMessage: "Could not update this access request. Try again",
                            description: "Error toast when granting or rejecting a Page or Space access request fails",
                          }),
                          {
                            errorAnalytics: {
                              toastId: "codex.pages.accessRequests.decisionError",
                              userFacingError: (0, y.jq)("pages.access-request.decide", e),
                            },
                          },
                        ))
                }
              }),
              (Z[37] = Y),
              (Z[38] = ex),
              (Z[39] = eo),
              (Z[40] = en),
              (Z[41] = ea),
              (Z[42] = e))
            : (e = Z[42]))
        let c = e
        ;((F =
          null != r && r.length > 0
            ? (0, a.jsx)(m.$, {
                ref: (e) => (
                  (ef.current = e),
                  () => {
                    ef.current === e && (ef.current = null)
                  }
                ),
                "aria-label": el.formatMessage(
                  {
                    id: "codex.pages.accessRequests.activity",
                    defaultMessage: "Access requests{count, plural, =0 {} one { ({count})} other { ({count})}}",
                    description:
                      "Owner toolbar notification button with the number of loaded recipients awaiting access approval for the current Page or Space",
                  },
                  { count: r.length },
                ),
                color: "accent",
                radius: "full",
                size: "compact",
                uniform: !0,
                onClick: () => eg(!0),
                children: el.formatNumber(r.length),
              })
            : null),
          (A = S.tQ),
          Z[43] !== ef.current
            ? ((P = (e) => {
                ef.current?.isConnected && (e.preventDefault(), ef.current.focus())
              }),
              (Z[43] = ef.current),
              (Z[44] = P))
            : (P = Z[44]),
          Z[45] !== eu || Z[46] !== ed || Z[47] !== eg || Z[48] !== ec
            ? ((T = () => {
                if ((eg(!1), ed.has("review_access_requests"))) {
                  let e = new URLSearchParams(ed)
                  ;(e.delete("review_access_requests"),
                    e.delete("review_access_requests_scope"),
                    ec(e, { replace: !0, state: eu.state }))
                }
              }),
              (Z[45] = eu),
              (Z[46] = ed),
              (Z[47] = eg),
              (Z[48] = ec),
              (Z[49] = T))
            : (T = Z[49]),
          (s = S.$t),
          Z[50] === Symbol.for("react.memo_cache_sentinel")
            ? (($ = (0, a.jsx)(i.A, {
                id: "codex.pages.accessRequests.title",
                defaultMessage: "Manage access requests",
                description: "Title of the owner review dialog for pending access requests",
              })),
              (Z[50] = $))
            : ($ = Z[50]))
        let u = "page" === en.kind ? en.id : void 0
        ;(Z[51] !== u || Z[52] !== en.kind
          ? ((B = (0, a.jsx)(w.Z, { kind: en.kind, pageId: u })), (Z[51] = u), (Z[52] = en.kind), (Z[53] = B))
          : (B = Z[53]),
          (n = h.OO),
          Z[54] !== o
            ? ((L = o
                ? (0, a.jsx)(g.Q, {
                    role: "status",
                    children: (0, a.jsx)(i.A, {
                      id: "codex.pages.accessRequests.loading",
                      defaultMessage: "Loading requests…",
                      description: "Loading pending access requests",
                    }),
                  })
                : null),
              (Z[54] = o),
              (Z[55] = L))
            : (L = Z[55]),
          Z[56] !== l || Z[57] !== ei || Z[58] !== eS || Z[59] !== eo
            ? ((O = l
                ? (0, a.jsxs)(g.Q, {
                    role: "alert",
                    tone: "danger",
                    children: [
                      (0, a.jsx)(i.A, {
                        id: "codex.pages.accessRequests.error",
                        defaultMessage: "Could not update access requests. Try again.",
                        description: "Recoverable failure loading access requests",
                      }),
                      (0, a.jsx)(m.$, {
                        color: "secondary",
                        size: "compact",
                        onClick: () => {
                          "error" === ei ? eo.get(v.Qv).refetch() : eS()
                        },
                        children: (0, a.jsx)(i.A, {
                          id: "codex.pages.accessRequests.retry",
                          defaultMessage: "Try again",
                          description: "Reload access requests after failure",
                        }),
                      }),
                    ],
                  })
                : null),
              (Z[56] = l),
              (Z[57] = ei),
              (Z[58] = eS),
              (Z[59] = eo),
              (Z[60] = O))
            : (O = Z[60]),
          (R =
            r?.length !== 0 || eC || l
              ? null
              : (0, a.jsx)(g.Q, {
                  children: (0, a.jsx)(i.A, {
                    id: "codex.pages.accessRequests.empty",
                    defaultMessage: "No pending requests",
                    description: "The current Page or Space has no outstanding access requests",
                  }),
                })),
          (U = "flex flex-col gap-1"),
          (z = r?.map((e) => {
            let t,
              { request: n, recipient: r } = e,
              o = (0, j.fR)(n.request_id, n.created_at, r?.principal),
              l = r?.name ?? r?.email,
              s =
                r?.principal.principal_type === "user" && null != l
                  ? { accountUserId: r.principal.principal_id, name: l }
                  : null,
              u = null == r ? n.requester_email : r.email
            return (
              (t =
                null == r
                  ? (n.requester_name ??
                    n.requester_email ??
                    (0, a.jsx)(i.A, {
                      id: "codex.pages.accessRequests.unknownRequester",
                      defaultMessage: "Someone",
                      description: "Fallback name for an access requester whose name and email are unavailable",
                    }))
                  : null != s
                    ? s.name
                    : (0, a.jsx)(i.A, {
                        id: "codex.pages.accessRequests.recipientFallback",
                        defaultMessage: "{type, select, group {Group} other {Collaborator}}",
                        description:
                          "Fallback identity for an access-request beneficiary whose name and email are unavailable; type distinguishes a group from an individual collaborator",
                        values: { type: r.principal.principal_type },
                      })),
              (0, a.jsx)(
                k.h,
                {
                  avatar:
                    null == s
                      ? void 0
                      : (0, a.jsx)(b.Y, { accountUserId: s.accountUserId, name: s.name, size: "group" }),
                  renderIdentity:
                    null == s
                      ? void 0
                      : (e) =>
                          (0, a.jsx)(x.Ve, {
                            accountUserId: s.accountUserId,
                            label: s.name,
                            labelEmail: u,
                            children: e,
                          }),
                  avatarLabel: null == r ? (n.requester_name ?? void 0) : (l ?? void 0),
                  label: t,
                  secondaryLabel: null != u ? (0, a.jsx)("span", { className: "select-text", children: u }) : void 0,
                  stackActionsOnNarrow: !0,
                  trailingContent: (0, a.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, a.jsx)(C.e, {
                        color: "primary",
                        size: "xl",
                        variant: "inline",
                        options:
                          r?.principal.principal_type === "group"
                            ? [{ value: "viewer" }, { value: "editor" }]
                            : [{ value: "viewer" }, { value: "commenter" }, { value: "editor" }],
                        value: ex[o] ?? n.requested_role ?? "viewer",
                        renderLabel: E,
                        onChange: (e) => ew({ ...ex, [o]: e }),
                      }),
                      (0, a.jsx)(d.$, {
                        "aria-label":
                          null == r
                            ? void 0
                            : el.formatMessage(
                                {
                                  id: "codex.pages.accessRequests.rejectRecipient",
                                  defaultMessage:
                                    "{known, select, true {Deny access for {name}} other {Deny access request}}",
                                  description:
                                    "Accessible label for rejecting an access request for a beneficiary, identified by name or email when available",
                                },
                                { known: null != l, name: l },
                              ),
                        color: "primary",
                        size: "xl",
                        variant: "outline",
                        onClick: () => void c(e, "reject"),
                        children: (0, a.jsx)(i.A, {
                          id: "codex.pages.accessRequests.reject",
                          defaultMessage: "Deny",
                          description: "Reject this person's request without granting access",
                        }),
                      }),
                      (0, a.jsx)(d.$, {
                        "aria-label":
                          null == r
                            ? void 0
                            : el.formatMessage(
                                {
                                  id: "codex.pages.accessRequests.grantRecipient",
                                  defaultMessage:
                                    "{known, select, true {Approve access for {name}} other {Approve access request}}",
                                  description:
                                    "Accessible label for granting the selected role to an access-request beneficiary, identified by name or email when available",
                                },
                                { known: null != l, name: l },
                              ),
                        color: "primary",
                        size: "xl",
                        onClick: () => void c(e, "approve"),
                        children: (0, a.jsx)(i.A, {
                          id: "codex.pages.accessRequests.grant",
                          defaultMessage: "Approve",
                          description: "Approve this request and grant the selected access role",
                        }),
                      }),
                    ],
                  }),
                },
                o,
              )
            )
          })),
          (Z[1] = Y),
          (Z[2] = es),
          (Z[3] = eI?.pages),
          (Z[4] = ey),
          (Z[5] = ee?.open),
          (Z[6] = eC),
          (Z[7] = el),
          (Z[8] = e_),
          (Z[9] = ek),
          (Z[10] = eu),
          (Z[11] = ei),
          (Z[12] = ep),
          (Z[13] = ev),
          (Z[14] = eS),
          (Z[15] = ex),
          (Z[16] = eo),
          (Z[17] = ed),
          (Z[18] = eg),
          (Z[19] = ec),
          (Z[20] = en),
          (Z[21] = ef),
          (Z[22] = ea),
          (Z[23] = n),
          (Z[24] = s),
          (Z[25] = A),
          (Z[26] = M),
          (Z[27] = P),
          (Z[28] = T),
          (Z[29] = U),
          (Z[30] = z),
          (Z[31] = L),
          (Z[32] = O),
          (Z[33] = R),
          (Z[34] = $),
          (Z[35] = B),
          (Z[36] = F))
      } else
        ((n = Z[23]),
          (s = Z[24]),
          (A = Z[25]),
          (M = Z[26]),
          (P = Z[27]),
          (T = Z[28]),
          (U = Z[29]),
          (z = Z[30]),
          (L = Z[31]),
          (O = Z[32]),
          (R = Z[33]),
          ($ = Z[34]),
          (B = Z[35]),
          (F = Z[36]))
      ;(Z[61] !== U || Z[62] !== z
        ? ((V = (0, a.jsx)("div", { className: U, children: z })), (Z[61] = U), (Z[62] = z), (Z[63] = V))
        : (V = Z[63]),
        Z[64] !== es || Z[65] !== eA || Z[66] !== eC || Z[67] !== ej
          ? ((W =
              es && eC
                ? (0, a.jsx)(m.$, {
                    color: "secondary",
                    loading: ej,
                    onClick: () => void eA(),
                    children: (0, a.jsx)(i.A, {
                      id: "codex.pages.accessRequests.more",
                      defaultMessage: "Load more",
                      description: "Load another page of pending access requests",
                    }),
                  })
                : null),
            (Z[64] = es),
            (Z[65] = eA),
            (Z[66] = eC),
            (Z[67] = ej),
            (Z[68] = W))
          : (W = Z[68]),
        Z[69] !== n || Z[70] !== V || Z[71] !== W || Z[72] !== L || Z[73] !== O || Z[74] !== R
          ? ((H = (0, a.jsxs)(n, { children: [L, O, R, V, W] })),
            (Z[69] = n),
            (Z[70] = V),
            (Z[71] = W),
            (Z[72] = L),
            (Z[73] = O),
            (Z[74] = R),
            (Z[75] = H))
          : (H = Z[75]),
        Z[76] !== s || Z[77] !== H || Z[78] !== $ || Z[79] !== B
          ? ((G = (0, a.jsx)(s, { title: $, subtitle: B, children: H })),
            (Z[76] = s),
            (Z[77] = H),
            (Z[78] = $),
            (Z[79] = B),
            (Z[80] = G))
          : (G = Z[80]),
        Z[81] !== A || Z[82] !== P || Z[83] !== T || Z[84] !== G
          ? ((K = (0, a.jsx)(A, { onCloseAutoFocus: P, onClose: T, children: G })),
            (Z[81] = A),
            (Z[82] = P),
            (Z[83] = T),
            (Z[84] = G),
            (Z[85] = K))
          : (K = Z[85]))
      let eM = K
      Z[86] !== J || Z[87] !== F ? ((Q = J?.(F)), (Z[86] = J), (Z[87] = F), (Z[88] = Q)) : (Q = Z[88])
      let eP = er && null == J ? F : null,
        eT = er && M ? eM : null
      return (
        Z[89] !== Q || Z[90] !== eP || Z[91] !== eT
          ? ((X = (0, a.jsxs)(a.Fragment, { children: [Q, eP, eT] })),
            (Z[89] = Q),
            (Z[90] = eP),
            (Z[91] = eT),
            (Z[92] = X))
          : (X = Z[92]),
        X
      )
    }
    function E(e) {
      return (0, a.jsx)(A.u, { permission: e })
    }
    function N(e) {
      return null == e.recipients
        ? [{ request: e, recipient: void 0 }]
        : e.recipients.filter(U).map((t) => ({ request: e, recipient: t }))
    }
    function U(e) {
      return "pending" === e.status
    }
    function q(e) {
      return e.requests
    }
    function D() {
      return new Set()
    }
    var z = n("pKVr"),
      L = n("Wj4L"),
      O = n("Um9I"),
      R = n("KQH2"),
      $ = n("Y1D1"),
      B = n("slpy"),
      F = n("BrEg"),
      V = n("hZax"),
      W = n("i1ww")
    function H(e) {
      let t,
        n,
        l,
        s,
        d,
        u,
        p = (0, r.c)(20),
        { pageId: m } = e,
        g = (0, o.gh)(_.u),
        h = (0, o.Ul)(I.spaceAccountId$)
      p[0] !== h || p[1] !== m ? ((t = { accountId: h, pageId: m }), (p[0] = h), (p[1] = m), (p[2] = t)) : (t = p[2])
      let f = t,
        v = (0, o._U)(W.Io, f),
        y = (0, o._U)(W.$f, f),
        b = (0, V.Zj)("2621756053"),
        x = (0, c.A)()
      p[3] !== y || p[4] !== b || p[5] !== x
        ? ((n =
            b && y.enabled
              ? x.formatMessage({
                  id: "pages.presentation.stopFollowingChatGPT",
                  defaultMessage: "Stop following ChatGPT",
                  description:
                    "Accessible label for the ChatGPT avatar that returns presentation cursors to the header and stops following edits",
                })
              : x.formatMessage({
                  id: "pages.presentation.followChatGPT",
                  defaultMessage: "Follow ChatGPT",
                  description:
                    "Accessible label for the ChatGPT avatar that resumes following its edits in a presentation",
                })),
          (p[3] = y),
          (p[4] = b),
          (p[5] = x),
          (p[6] = n))
        : (n = p[6])
      let w = n,
        k = v ? "border-blue" : void 0
      return (
        p[7] !== b || p[8] !== f || p[9] !== g
          ? ((l = () => g.set(W.$f, f, (e) => ({ ...e, enabled: !b || !e.enabled }))),
            (p[7] = b),
            (p[8] = f),
            (p[9] = g),
            (p[10] = l))
          : (l = p[10]),
        p[11] !== y || p[12] !== b
          ? ((s = (e) =>
              (0, a.jsx)(B.m, {
                content: (0, a.jsxs)("div", {
                  className: "flex flex-col items-center gap-1",
                  children: [
                    (0, a.jsx)(i.A, {
                      id: "pages.presentation.agentName",
                      defaultMessage: "ChatGPT",
                      description:
                        "Name of the agent in a presentation's collaborator facepile; do not translate ChatGPT",
                    }),
                    (0, a.jsx)("span", {
                      className: "opacity-60",
                      children:
                        b && y.enabled
                          ? (0, a.jsx)(i.A, {
                              id: "pages.presentation.clickToStopFollowing",
                              defaultMessage: "Click to stop following",
                              description:
                                "Tooltip instruction for returning ChatGPT's presentation cursors to the header and stopping automatic slide following",
                            })
                          : (0, a.jsx)(i.A, {
                              id: "pages.presentation.clickToFollow",
                              defaultMessage: "Click to follow",
                              description:
                                "Tooltip instruction for following ChatGPT's edits by clicking its avatar in a presentation",
                            }),
                    }),
                  ],
                }),
                children: e,
              })),
            (p[11] = y),
            (p[12] = b),
            (p[13] = s))
          : (s = p[13]),
        p[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)("span", {
              "data-presentation-creation-avatar": !0,
              className: "flex size-6 items-center justify-center rounded-full bg-black text-white",
              children: (0, a.jsx)(F.A, { className: "size-4", "aria-hidden": "true" }),
            })),
            (p[14] = d))
          : (d = p[14]),
        p[15] !== w || p[16] !== k || p[17] !== l || p[18] !== s
          ? ((u = (0, a.jsx)(R.e, {
              ariaLabel: w,
              borderClassName: k,
              onClick: l,
              tooltip: w,
              renderTooltip: s,
              children: d,
            })),
            (p[15] = w),
            (p[16] = k),
            (p[17] = l),
            (p[18] = s),
            (p[19] = u))
          : (u = p[19]),
        u
      )
    }
    var G = n("HGub"),
      K = n("tzqa"),
      Q = n("CNwL")
    function X(e) {
      let t,
        n,
        o = (0, r.c)(11),
        { canShare: l, onLocate: i, onOpen: s, pageId: d, session: u, showPlaceholder: p } = e,
        m = void 0 !== p && p,
        g = (0, c.A)()
      return (
        o[0] !== g || o[1] !== i || o[2] !== s || o[3] !== d || o[4] !== m
          ? ((t = (e) =>
              (0, a.jsx)(Q.c, {
                pageId: d,
                collapsible: e[0]?.kind !== "presentationAgent",
                showPlaceholder: m,
                people: e.map((e) => {
                  let t
                  if ("presentationAgent" === e.kind)
                    return {
                      id: "presentation-creation-agent",
                      name: e.displayName,
                      avatar: (0, a.jsx)(H, { pageId: d }),
                    }
                  let n = "editing" === e.activity,
                    r = "hasAccess" !== e.activity
                  t = r
                    ? g.formatMessage(
                        {
                          id: "codex.space.page.collaborator.tooltip",
                          defaultMessage: "{name} is {editing, select, true {editing} other {viewing}}",
                          description:
                            "Tooltip over a collaborator avatar in a shared Page header; name is the collaborator's display name and editing indicates whether their cursor is active",
                        },
                        { editing: String(n), name: e.displayName },
                      )
                    : e.isCurrentUser
                      ? g.formatMessage(
                          {
                            id: "codex.space.page.collaborator.localAccessTooltip",
                            defaultMessage: "{name} (you)",
                            description:
                              "Tooltip over the signed-in person's avatar in a shared Page header when they are not active in another session; name is their display name",
                          },
                          { name: e.displayName },
                        )
                      : g.formatMessage(
                          {
                            id: "codex.space.page.collaborator.accessTooltip",
                            defaultMessage: "{name} has access",
                            description:
                              "Tooltip over the neutral avatar of a person who can access a shared Page but is not currently active in its document",
                          },
                          { name: e.displayName },
                        )
                  let o = n && !e.isCurrentUser && null != i,
                    l = o || null != s
                  return {
                    id: e.accountUserId,
                    name: e.displayName,
                    label: (0, a.jsx)(x.Ve, {
                      accountUserId: e.accountUserId,
                      label: e.displayName,
                      children: e.displayName,
                    }),
                    avatar: (0, a.jsx)(R.e, {
                      ariaLabel: o
                        ? g.formatMessage(
                            {
                              id: "codex.space.page.collaborator.locateLabel",
                              defaultMessage: "Go to {name}’s cursor",
                              description:
                                "Accessible label for a collaborator avatar button that scrolls to that person's cursor in a shared Page; name is the collaborator's display name",
                            },
                            { name: e.displayName },
                          )
                        : t,
                      borderClassName: n ? (0, G.C)(e.accountUserId).caret : void 0,
                      onClick: l
                        ? () => {
                            ;(o && i(e.accountUserId)) || s?.()
                          }
                        : void 0,
                      renderTooltip: (n) =>
                        (0, a.jsx)(x.Ve, {
                          accountUserId: e.accountUserId,
                          fallbackTooltip: t,
                          label: e.displayName,
                          triggerIsFocusable: l,
                          children: n,
                        }),
                      tooltip: t,
                      children: (0, a.jsx)(b.Y, {
                        accountUserId: e.accountUserId,
                        loadingFallback: (0, a.jsx)($.T, {}),
                        muted: !r && !e.isCurrentUser,
                        name: e.displayName,
                      }),
                    }),
                  }
                }),
              })),
            (o[0] = g),
            (o[1] = i),
            (o[2] = s),
            (o[3] = d),
            (o[4] = m),
            (o[5] = t))
          : (t = o[5]),
        o[6] !== l || o[7] !== d || o[8] !== u || o[9] !== t
          ? ((n = (0, a.jsx)(K.d, { pageId: d, session: u, canShare: l, children: t })),
            (o[6] = l),
            (o[7] = d),
            (o[8] = u),
            (o[9] = t),
            (o[10] = n))
          : (n = o[10]),
        n
      )
    }
    var Z = n("rpnz"),
      Y = n("xrkS"),
      J = n("HNZf"),
      ee = n("oPCO"),
      et = n("rH0R"),
      en = n("gKie"),
      ea = n("qsTb"),
      er = n("RiLw")
    function eo(e) {
      let t,
        n,
        i,
        d,
        u,
        p,
        m = (0, r.c)(54),
        {
          canShare: g,
          children: h,
          dialog: f,
          renderDialog: y,
          onLocateCollaborator: b,
          pageId: x,
          session: w,
          presence: k,
          comments: S,
          showShareAction: C,
        } = e,
        A = void 0 === y || y,
        M = void 0 === k ? w : k,
        P = (0, o.gh)(_.u),
        T = (0, c.A)(),
        E = (0, o._U)(I.loadedSpacePageMetadata$, x),
        N = (0, o.Ul)(j.dt),
        U = (0, o.Ul)(I.spaceAccountId$),
        { data: q, isError: D } = (0, s.oV)()
      m[0] !== U || m[1] !== q?.accounts
        ? ((t = q?.accounts?.find((e) => e.id === U)), (m[0] = U), (m[1] = q?.accounts), (m[2] = t))
        : (t = m[2])
      let z = t,
        R = (0, o._U)(O.jy, x),
        $ = (0, o._U)(O.G2, x)
      m[3] !== $ || m[4] !== z?.structure || m[5] !== D || m[6] !== R || m[7] !== E || m[8] !== x || m[9] !== N
        ? ((n =
            N &&
            !(0, Z.sD)(x) &&
            !D &&
            z?.structure === "workspace" &&
            (0, ee.U)(E) &&
            $?.can_read === !0 &&
            !1 === $.can_share &&
            "request_changes" !== R),
          (m[3] = $),
          (m[4] = z?.structure),
          (m[5] = D),
          (m[6] = R),
          (m[7] = E),
          (m[8] = x),
          (m[9] = N),
          (m[10] = n))
        : (n = m[10])
      let F = n,
        [V, W] = (0, l.useState)(!1),
        H = f?.open ?? V,
        G = f?.onOpenChange ?? W
      m[11] !== F || m[12] !== g || m[13] !== G || m[14] !== C
        ? ((i =
            (g || F) && C
              ? () => {
                  G(!0)
                }
              : void 0),
          (m[11] = F),
          (m[12] = g),
          (m[13] = G),
          (m[14] = C),
          (m[15] = i))
        : (i = m[15])
      let K = i
      if (
        m[16] !== g ||
        m[17] !== h ||
        m[18] !== f?.triggerRef ||
        m[19] !== T ||
        m[20] !== E ||
        m[21] !== b ||
        m[22] !== K ||
        m[23] !== x ||
        m[24] !== M ||
        m[25] !== P
      ) {
        let e,
          t,
          n,
          r,
          o = E?.access.can_read === !0 && (0, L.rr)(E)
        m[27] !== g || m[28] !== E || m[29] !== K || m[30] !== x || m[31] !== P
          ? ((e =
              null == K
                ? void 0
                : () => {
                    if ((et.PageSharingDialog.prefetch(), g && (0, ee.U)(E) && P.get(v.Sz))) {
                      P.query.fetch(J.e2, { type: "page", id: x }).catch(el)
                      let e = P.query.getOptions(Y.G, { type: "page", id: x })
                      e.enabled && P.queryClient.prefetchQuery(e)
                    }
                  }),
            (m[27] = g),
            (m[28] = E),
            (m[29] = K),
            (m[30] = x),
            (m[31] = P),
            (m[32] = e))
          : (e = m[32])
        let l = e
        m[33] !== T
          ? ((t = T.formatMessage({
              id: "codex.space.page.share",
              defaultMessage: "Share",
              description:
                "Button in the shared Page header that opens its people and groups access dialog for an owner or editor",
            })),
            (m[33] = T),
            (m[34] = t))
          : (t = m[34])
        let i = t
        ;(m[35] !== f?.triggerRef || m[36] !== K || m[37] !== l || m[38] !== i
          ? ((n =
              null != K
                ? (0, a.jsx)(B.m, {
                    enabledWhen: "target-hidden",
                    content: i,
                    children: (0, a.jsx)(er.c, { ref: f?.triggerRef, "aria-label": i, onFocus: l, onClick: K }),
                  })
                : null),
            (m[35] = f?.triggerRef),
            (m[36] = K),
            (m[37] = l),
            (m[38] = i),
            (m[39] = n))
          : (n = m[39]),
          m[40] !== n ? ((r = (0, a.jsx)(a.Fragment, { children: n })), (m[40] = n), (m[41] = r)) : (r = m[41]),
          (d = h({
            controls: r,
            onShare: K,
            people:
              (null != M || o) &&
              (0, a.jsx)(X, { canShare: g, onLocate: b, onOpen: K, pageId: x, session: M, showPlaceholder: o }),
            prewarmSharing: l,
          })),
          (m[16] = g),
          (m[17] = h),
          (m[18] = f?.triggerRef),
          (m[19] = T),
          (m[20] = E),
          (m[21] = b),
          (m[22] = K),
          (m[23] = x),
          (m[24] = M),
          (m[25] = P),
          (m[26] = d))
      } else d = m[26]
      return (
        m[42] !== g ||
        m[43] !== S ||
        m[44] !== f?.onCloseAutoFocus ||
        m[45] !== K ||
        m[46] !== H ||
        m[47] !== x ||
        m[48] !== A ||
        m[49] !== G
          ? ((u =
              A && null != K && H
                ? (0, a.jsx)(et.PageSharingDialog, {
                    pageId: x,
                    comments: S,
                    requestAccess: !g,
                    onClose: () => G(!1),
                    onCloseAutoFocus: f?.onCloseAutoFocus,
                  })
                : null),
            (m[42] = g),
            (m[43] = S),
            (m[44] = f?.onCloseAutoFocus),
            (m[45] = K),
            (m[46] = H),
            (m[47] = x),
            (m[48] = A),
            (m[49] = G),
            (m[50] = u))
          : (u = m[50]),
        m[51] !== d || m[52] !== u
          ? ((p = (0, a.jsxs)(a.Fragment, { children: [d, u] })), (m[51] = d), (m[52] = u), (m[53] = p))
          : (p = m[53]),
        p
      )
    }
    function el() {}
    function ei(e) {
      let t,
        n,
        d,
        u,
        p,
        m,
        g,
        h,
        f,
        y,
        b,
        x,
        w = (0, r.c)(49),
        { canShare: k, children: S, dialog: C, renderDialog: A, pageId: M, space: P } = e,
        T = void 0 === A || A,
        E = (0, o.gh)(_.u),
        N = (0, c.A)(),
        U = (0, o.Ul)(j.dt),
        q = (0, o.Ul)(I.spaceAccountId$),
        { data: D, isError: z } = (0, s.oV)()
      w[0] !== q || w[1] !== D?.accounts
        ? ((t = D?.accounts?.find((e) => e.id === q)), (w[0] = q), (w[1] = D?.accounts), (w[2] = t))
        : (t = w[2])
      let L = t,
        R = (0, o._U)(I.loadedSpacePageMetadata$, P.root_page_id),
        [$, F] = (0, l.useState)(!1),
        V = C?.open ?? $,
        W = C?.onOpenChange ?? F,
        H = null == P.interaction_mode
      w[3] !== H ? ((n = { enabled: H }), (w[3] = H), (w[4] = n)) : (n = w[4])
      let { data: G } = (0, o._U)(I.spaceQuery$, P.id, n)
      ;(w[5] !== P.id ? ((d = { type: "space", id: P.id }), (w[5] = P.id), (w[6] = d)) : (d = w[6]),
        w[7] !== k ? ((u = { enabled: k }), (w[7] = k), (w[8] = u)) : (u = w[8]))
      let { data: K } = (0, o._U)(J.e2, d, u),
        Q = null != K && (0, J.TO)(K),
        X =
          U &&
          !z &&
          L?.structure === "workspace" &&
          R?.drive_space_id === P.id &&
          !0 === R.access.can_read &&
          !1 === R.access.can_share
      w[9] !== X || w[10] !== k || w[11] !== G?.interaction_mode || w[12] !== E || w[13] !== W || w[14] !== P
        ? ((p =
            "request_changes" !== (0, O.wI)(P.interaction_mode, G?.interaction_mode) && (k || X)
              ? () => {
                  ;(0, en.h)(E, P, () => W(!0))
                }
              : void 0),
          (w[9] = X),
          (w[10] = k),
          (w[11] = G?.interaction_mode),
          (w[12] = E),
          (w[13] = W),
          (w[14] = P),
          (w[15] = p))
        : (p = w[15])
      let Z = p
      w[16] !== k || w[17] !== Z || w[18] !== E || w[19] !== P.id
        ? ((m =
            null == Z
              ? void 0
              : () => {
                  if ((et.vC.prefetch(), k && E.get(v.Sz))) {
                    E.query.fetch(J.e2, { type: "space", id: P.id }).catch(es)
                    let e = E.query.getOptions(Y.G, { type: "space", id: P.id })
                    e.enabled && E.queryClient.prefetchQuery(e)
                  }
                }),
          (w[16] = k),
          (w[17] = Z),
          (w[18] = E),
          (w[19] = P.id),
          (w[20] = m))
        : (m = w[20])
      let ee = m
      w[21] !== N || w[22] !== P.name
        ? ((g = N.formatMessage(
            {
              id: "codex.space.share",
              defaultMessage: "Share {spaceName}",
              description: "Button in a Space root Page header that opens the Space sharing dialog",
            },
            { spaceName: P.name },
          )),
          (w[21] = N),
          (w[22] = P.name),
          (w[23] = g))
        : (g = w[23])
      let er = g
      ;(w[24] !== C?.triggerRef || w[25] !== Z || w[26] !== ee || w[27] !== er
        ? ((h =
            null != Z &&
            (0, a.jsx)(B.m, {
              enabledWhen: "target-hidden",
              content: er,
              children: (0, a.jsx)(ea.DW, {
                ref: C?.triggerRef,
                "aria-label": er,
                onFocus: ee,
                onClick: Z,
                children: (0, a.jsx)(i.A, {
                  id: "codex.space.overview.shareSpace",
                  defaultMessage: "Share Space",
                  description: "Button on the Space overview that shares the whole Space",
                }),
              }),
            })),
          (w[24] = C?.triggerRef),
          (w[25] = Z),
          (w[26] = ee),
          (w[27] = er),
          (w[28] = h))
        : (h = w[28]),
        w[29] !== h ? ((f = (0, a.jsx)(a.Fragment, { children: h })), (w[29] = h), (w[30] = f)) : (f = w[30]))
      let eo = f,
        el = Q ? Z : void 0
      return (
        w[31] !== S || w[32] !== eo || w[33] !== Z || w[34] !== ee || w[35] !== el
          ? ((y = S({ controls: eo, facepileOnOpen: el, onShare: Z, people: null, prewarmSharing: ee })),
            (w[31] = S),
            (w[32] = eo),
            (w[33] = Z),
            (w[34] = ee),
            (w[35] = el),
            (w[36] = y))
          : (y = w[36]),
        w[37] !== k ||
        w[38] !== C?.onCloseAutoFocus ||
        w[39] !== Z ||
        w[40] !== V ||
        w[41] !== M ||
        w[42] !== T ||
        w[43] !== W ||
        w[44] !== P
          ? ((b =
              T && null != Z && V
                ? (0, a.jsx)(et.vC, {
                    pageId: M,
                    requestAccess: !k,
                    space: P,
                    onClose: () => W(!1),
                    onCloseAutoFocus: C?.onCloseAutoFocus,
                  })
                : null),
            (w[37] = k),
            (w[38] = C?.onCloseAutoFocus),
            (w[39] = Z),
            (w[40] = V),
            (w[41] = M),
            (w[42] = T),
            (w[43] = W),
            (w[44] = P),
            (w[45] = b))
          : (b = w[45]),
        w[46] !== y || w[47] !== b
          ? ((x = (0, a.jsxs)(a.Fragment, { children: [y, b] })), (w[46] = y), (w[47] = b), (w[48] = x))
          : (x = w[48]),
        x
      )
    }
    function es() {}
    var ed = n("pZQ9")
    function ec(e) {
      let t,
        n = (0, r.c)(10),
        l = (0, o._U)(I.loadedSpacePageMetadata$, e.pageId)
      if (e.disabled) {
        let t, r, o
        return (
          n[0] !== l || n[1] !== e.pageId
            ? ((t =
                l?.access.can_read === !0 && (0, L.rr)(l)
                  ? (0, a.jsx)(Q.c, { pageId: e.pageId, people: [], showPlaceholder: !0 })
                  : null),
              (n[0] = l),
              (n[1] = e.pageId),
              (n[2] = t))
            : (t = n[2]),
          n[3] !== e.children || n[4] !== t
            ? ((r = e.children({
                accessRequestReview: null,
                controls: null,
                onShare: void 0,
                people: t,
                prewarmSharing: void 0,
                requestEditAccess: null,
              })),
              (n[3] = e.children),
              (n[4] = t),
              (n[5] = r))
            : (r = n[5]),
          n[6] !== r ? ((o = (0, a.jsx)(a.Fragment, { children: r })), (n[6] = r), (n[7] = o)) : (o = n[7]),
          o
        )
      }
      return (n[8] !== e ? ((t = (0, a.jsx)(eu, { ...e })), (n[8] = e), (n[9] = t)) : (t = n[9]), t)
    }
    function eu(e) {
      let t,
        n,
        l,
        i,
        s = (0, r.c)(35),
        {
          canShare: d,
          children: c,
          dialog: u,
          accessRequestDialog: p,
          editAccessDialog: m,
          renderDialog: g,
          isOwner: h,
          onLocateCollaborator: f,
          pageId: v,
          session: y,
          presence: b,
          comments: x,
        } = e,
        w = void 0 === b ? y : b,
        { data: _, isError: k } = (0, o.Ul)(I.spacesQuery$),
        { space: S, isDriveBacked: C } = (0, o._U)(I.spacePageContext$, v),
        A = (0, o._U)(I.loadedSpacePageMetadata$, v)
      s[0] !== p ||
      s[1] !== C ||
      s[2] !== h ||
      s[3] !== A?.drive_scope ||
      s[4] !== A?.parent ||
      s[5] !== v ||
      s[6] !== g ||
      s[7] !== S
        ? ((t = (e) => {
            let t = null,
              n = { dialog: p, renderDialog: g, children: null == p ? void 0 : e }
            return (
              S?.root_page_id === v
                ? (t = (0, a.jsx)(em, { ...n, spaceId: S.id }))
                : h &&
                  !0 === C &&
                  (A?.drive_scope === "personal" || A?.parent != null || null != S) &&
                  (t = (0, a.jsx)(M, { ...n, target: { kind: "page", id: v } })),
              null == p || null == t ? e(t) : t
            )
          }),
          (s[0] = p),
          (s[1] = C),
          (s[2] = h),
          (s[3] = A?.drive_scope),
          (s[4] = A?.parent),
          (s[5] = v),
          (s[6] = g),
          (s[7] = S),
          (s[8] = t))
        : (t = s[8])
      let j = t
      s[9] !== d ||
      s[10] !== c ||
      s[11] !== x ||
      s[12] !== u ||
      s[13] !== C ||
      s[14] !== k ||
      s[15] !== A ||
      s[16] !== f ||
      s[17] !== v ||
      s[18] !== w ||
      s[19] !== j ||
      s[20] !== g ||
      s[21] !== y ||
      s[22] !== S ||
      s[23] !== _
        ? ((n = (e) =>
            S?.root_page_id === v
              ? (0, a.jsx)(ei, {
                  canShare: d,
                  dialog: u,
                  renderDialog: g,
                  pageId: v,
                  space: S,
                  children: (t) => {
                    let { controls: n, facepileOnOpen: r, onShare: o, prewarmSharing: l } = t,
                      i = A?.access.can_read === !0 && (0, L.rr)(A)
                    return j((t) =>
                      c({
                        accessRequestReview: t,
                        controls: (0, a.jsxs)(a.Fragment, { children: [n, t] }),
                        onShare: o,
                        requestEditAccess: e,
                        people:
                          (null != w || i) &&
                          (0, a.jsx)(X, {
                            canShare: !1,
                            onLocate: f,
                            onOpen: r,
                            pageId: v,
                            session: w,
                            showPlaceholder: i,
                          }),
                        prewarmSharing: l,
                      }),
                    )
                  },
                })
              : (0, a.jsx)(eo, {
                  canShare: d && null != C,
                  dialog: u,
                  renderDialog: g,
                  onLocateCollaborator: f,
                  pageId: v,
                  presence: w,
                  comments: x,
                  session: y,
                  showShareAction: !0 === C || (!1 === C && (null != _ || k)),
                  children: (t) =>
                    j((n) =>
                      c({
                        ...t,
                        requestEditAccess: e,
                        accessRequestReview: n,
                        controls: (0, a.jsxs)(a.Fragment, { children: [t.controls, n] }),
                      }),
                    ),
                })),
          (s[9] = d),
          (s[10] = c),
          (s[11] = x),
          (s[12] = u),
          (s[13] = C),
          (s[14] = k),
          (s[15] = A),
          (s[16] = f),
          (s[17] = v),
          (s[18] = w),
          (s[19] = j),
          (s[20] = g),
          (s[21] = y),
          (s[22] = S),
          (s[23] = _),
          (s[24] = n))
        : (n = s[24])
      let P = n,
        T = !0 === C
      return (
        s[25] !== v || s[26] !== S
          ? ((l = S?.root_page_id === v ? { kind: "space", id: S.id } : { kind: "page", id: v }),
            (s[25] = v),
            (s[26] = S),
            (s[27] = l))
          : (l = s[27]),
        s[28] !== m || s[29] !== v || s[30] !== g || s[31] !== P || s[32] !== T || s[33] !== l
          ? ((i = (0, a.jsx)(
              ep,
              { dialog: m, isDriveBacked: T, pageId: v, renderDialog: g, target: l, children: P },
              v,
            )),
            (s[28] = m),
            (s[29] = v),
            (s[30] = g),
            (s[31] = P),
            (s[32] = T),
            (s[33] = l),
            (s[34] = i))
          : (i = s[34]),
        i
      )
    }
    function ep(e) {
      let t,
        n,
        d,
        c,
        u,
        p,
        m = (0, r.c)(23),
        { children: g, dialog: h, isDriveBacked: f, pageId: v, renderDialog: y, target: b } = e,
        x = void 0 === y || y,
        w = (0, o._U)(I.loadedSpacePageMetadata$, v),
        _ = (0, o._U)(O.mS, v),
        k = (0, o.Ul)(j.dt),
        S = (0, o.Ul)(I.spaceAccountId$),
        { data: C, isError: A } = (0, s.oV)(),
        M = C?.accounts?.find((e) => e.id === S),
        [P, T] = (0, l.useState)(!1),
        E = h?.open ?? P,
        N = h?.onOpenChange ?? T
      if (
        !f ||
        !k ||
        A ||
        !(0, j.BI)(M) ||
        w?.access.can_read !== !0 ||
        !1 !== w.access.can_write ||
        !1 !== w.access.can_share ||
        _.loading ||
        "request_changes" === _.mode
      ) {
        let e, t
        return (
          m[0] !== g ? ((e = g(null)), (m[0] = g), (m[1] = e)) : (e = m[1]),
          m[2] !== e ? ((t = (0, a.jsx)(a.Fragment, { children: e })), (m[2] = e), (m[3] = t)) : (t = m[3]),
          t
        )
      }
      let U = h?.triggerRef
      return (
        m[4] !== N ? ((t = () => N(!0)), (m[4] = N), (m[5] = t)) : (t = m[5]),
        m[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(i.A, {
              id: "codex.pages.requestEditAccess.button",
              defaultMessage: "Request edit access",
              description: "Button for a Page viewer or commenter to ask the owner for a higher role",
            })),
            (m[6] = n))
          : (n = m[6]),
        m[7] !== U || m[8] !== t
          ? ((d = (0, a.jsx)(ed.DW, { ref: U, onClick: t, children: n })), (m[7] = U), (m[8] = t), (m[9] = d))
          : (d = m[9]),
        m[10] !== g || m[11] !== d ? ((c = g(d)), (m[10] = g), (m[11] = d), (m[12] = c)) : (c = m[12]),
        m[13] !== h?.onCloseAutoFocus || m[14] !== E || m[15] !== v || m[16] !== x || m[17] !== N || m[18] !== b
          ? ((u =
              x && E
                ? (0, a.jsx)(et.cH, {
                    target: b,
                    pageId: v,
                    onClose: () => N(!1),
                    onCloseAutoFocus: h?.onCloseAutoFocus,
                  })
                : null),
            (m[13] = h?.onCloseAutoFocus),
            (m[14] = E),
            (m[15] = v),
            (m[16] = x),
            (m[17] = N),
            (m[18] = b),
            (m[19] = u))
          : (u = m[19]),
        m[20] !== c || m[21] !== u
          ? ((p = (0, a.jsxs)(a.Fragment, { children: [c, u] })), (m[20] = c), (m[21] = u), (m[22] = p))
          : (p = m[22]),
        p
      )
    }
    function em(e) {
      let t,
        n = (0, r.c)(6),
        { children: l, dialog: i, renderDialog: s, spaceId: d } = e,
        c = (0, o._U)(z.t5, d)
      return (
        n[0] !== l || n[1] !== i || n[2] !== c?.isOwner || n[3] !== s || n[4] !== d
          ? ((t =
              c?.isOwner === !0
                ? (0, a.jsx)(M, { target: { kind: "space", id: d }, dialog: i, renderDialog: s, children: l })
                : (0, a.jsx)(a.Fragment, { children: l?.(null) })),
            (n[0] = l),
            (n[1] = i),
            (n[2] = c?.isOwner),
            (n[3] = s),
            (n[4] = d),
            (n[5] = t))
          : (t = n[5]),
        t
      )
    }
  },
  jIRR(e, t, n) {
    var a = n("NRR1"),
      r = n("vrE1")
    n.d(
      t,
      {},
      {
        w: function (e, t, n, o, l) {
          if (null == n) return (queueMicrotask(l), () => {})
          let i = (0, r.acquirePageRealtimeSession)({ scope: e, pageId: t, pageViewReportingEnabled: !1 })
          if (i.session !== o) return (i.release(), queueMicrotask(l), () => {})
          let s = (0, a.hI)(e, n)
          s.signal.addEventListener("abort", l, { once: !0 })
          let d = () => {
              ;(s.signal.aborted || o.isAccessRevoked || o.getSnapshot().writeAccessDenied) && l()
            },
            c = o.subscribe(d)
          return (
            queueMicrotask(d),
            () => {
              ;(s.signal.removeEventListener("abort", l), s.stop(), c(), i.release())
            }
          )
        },
      },
    )
  },
  BdFx(e, t, n) {
    n.d(
      t,
      {},
      {
        F: function (e, t) {
          let n = e.ownerDocument.defaultView,
            a = e.parentElement
          for (; null != a && !/auto|scroll/u.test(n?.getComputedStyle(a).overflowY ?? "");) a = a.parentElement
          if (null == a) return null
          let r = a,
            o = e,
            l = t,
            i = e.getBoundingClientRect().height,
            s = r.scrollTop,
            d = (t) => {
              let a = r.getBoundingClientRect(),
                o = a.height / r.offsetHeight || 1,
                l = a.top + r.clientTop * o,
                i = l + r.clientHeight * o
              for (let a of e.ownerDocument.querySelectorAll(
                "[data-pip-obstacle], [data-right-panel-composer-overlay-content]",
              )) {
                let e = a.getBoundingClientRect()
                if (
                  e.height > 0 &&
                  e.width > 0 &&
                  e.left < t.right &&
                  e.right > t.left &&
                  e.top > l &&
                  e.top < i &&
                  !r.contains(a) &&
                  null == a.closest('[aria-hidden="true"], [hidden]')
                ) {
                  let t = n?.getComputedStyle(a)
                  t?.visibility !== "hidden" && t?.opacity !== "0" && (i = e.top)
                }
              }
              return { top: l, bottom: i, scale: o }
            },
            c = () => {
              let e = (l ?? o).getBoundingClientRect(),
                t = d(e)
              return e.height > 0 && e.bottom > t.top && e.bottom <= t.bottom + 1
            },
            u = () => {
              if (null == l) return null
              let e = l.getBoundingClientRect(),
                t = d(e)
              return (e.top + e.height / 2 - t.top) / t.scale
            },
            p = u(),
            m = c(),
            g = () => {
              let e = r.scrollTop
              e !== s && ((m = e > s && c()), (s = e), (p = u()))
            },
            h = (e) => {
              e.deltaY < 0 && (m = !1)
            },
            f = new ResizeObserver(() => {
              g()
              let e = o.getBoundingClientRect(),
                t = e.height > i
              if (((i = e.height), !m)) return
              let n = d(e)
              if (null != l && null != p) {
                let e = l.getBoundingClientRect(),
                  t = Math.max(n.top + e.height / 2, Math.min(n.top + p * n.scale, n.bottom - e.height / 2))
                ;((r.scrollTop += (e.top + e.height / 2 - t) / n.scale), (s = r.scrollTop))
                return
              }
              if (!t) return
              let a = n.top + (n.bottom - n.top) * 0.75
              e.bottom > a && ((r.scrollTop += (e.bottom - a) / n.scale), (s = r.scrollTop))
            })
          return (
            f.observe(o),
            r.addEventListener("scroll", g, { passive: !0 }),
            r.addEventListener("wheel", h, { passive: !0 }),
            {
              setCard(e, t) {
                ;(f.disconnect(), (o = e), (l = t), null != t && (s = r.scrollTop), f.observe(o))
              },
              destroy() {
                ;(f.disconnect(), r.removeEventListener("scroll", g), r.removeEventListener("wheel", h))
              },
            }
          )
        },
      },
    )
  },
  PejT(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("slpy"),
      l = n("ENii"),
      i = n("Wf1j"),
      s = n("HOLv")
    n.d(
      t,
      {},
      {
        V: function (e) {
          let t,
            n,
            d,
            c,
            u = (0, r.c)(9),
            { canRead: p, canShare: m } = e,
            g = (0, i.A)()
          if (!1 !== p) return null
          u[0] !== m || u[1] !== g
            ? ((t = m
                ? g.formatMessage({
                    id: "codex.pages.mentions.access.shareHint",
                    defaultMessage: "Can’t view this page. Mention them to be offered sharing after saving.",
                    description:
                      "Accessible explanation of a mention recipient without Page access, when the author can share",
                  })
                : g.formatMessage({
                    id: "codex.pages.mentions.access.noShareHint",
                    defaultMessage: "Can’t view this page. Ask an owner to share it with them.",
                    description:
                      "Accessible explanation of a mention recipient without Page access, when the author cannot share",
                  })),
              (u[0] = m),
              (u[1] = g),
              (u[2] = t))
            : (t = u[2])
          let h = t
          return (
            u[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, a.jsx)(s.I, { asset: l.E, className: "text-secondary" })), (u[3] = n))
              : (n = u[3]),
            u[4] !== h
              ? ((d = (0, a.jsx)("span", { "aria-label": h, role: "img", children: n })), (u[4] = h), (u[5] = d))
              : (d = u[5]),
            u[6] !== h || u[7] !== d
              ? ((c = (0, a.jsx)(o.m, { content: h, children: d })), (u[6] = h), (u[7] = d), (u[8] = c))
              : (c = u[8]),
            c
          )
        },
      },
    )
  },
  uF6b(e, t, n) {
    var a = n("HgFd"),
      r = n("PFjh"),
      o = n("SGsN"),
      l = n("svjy"),
      i = n("e1xH"),
      s = n("DHW4"),
      d = n("pyoT"),
      c = n("WFY2"),
      u = n("HFSu")
    function p(e, t) {
      let n = new Set(e.flatMap(a.iK).map(a.M3))
      return t.filter((e) => n.has((0, a.M3)(e)))
    }
    async function m(e, t, n) {
      let a = e.get(d.spaceAccountId$),
        p = n.filter((e) => null == e.pageId || e.pageId === t.pageId)
      if (null == a || 0 === p.length || !e.get(i.pagesEnabled$)) return []
      let m = (0, s.r)((0, r.dj)(e), {
          action: "mention",
          documentType: "page",
          completionMilestone: "mention_persisted",
        }),
        g = "save"
      try {
        if ((await t.flush(), (g = "access_check"), e.get(d.spaceAccountId$) !== a || !e.get(i.pagesEnabled$)))
          return (m.dispose(), [])
        let n = t.getLiveMentions(p)
        if (0 === n.length) return (m.finish("cancelled"), [])
        m.milestone("mention_persisted")
        let r = t.pageId,
          s = [...new Set(n.map((e) => e.accountUserId))],
          c = new Set(),
          h = !0
        for (let o = 0; o < s.length; o += 50) {
          let l = new Set(t.getLiveMentions(n).map((e) => e.accountUserId)),
            p = s.slice(o, o + 50).filter((e) => l.has(e))
          if (0 === p.length) continue
          let m = await u.CodexRequest.safePost("/pages/{page_id}/mentions/access", {
            parameters: { path: { page_id: r } },
            requestBody: { account_user_ids: p },
          })
          if (e.get(d.spaceAccountId$) !== a || !e.get(i.pagesEnabled$)) return []
          for (let e of ((h = h && m.can_share), m.items)) e.can_read || c.add(e.account_user_id)
        }
        let f = t.getLiveMentions(n).filter((e) => c.has(e.accountUserId))
        if (0 === f.length) return []
        if (!h)
          return (
            e
              .get(o.Id)
              .info(
                e
                  .get(l.g)
                  .formatMessage({
                    id: "codex.pages.mentions.cannotShare",
                    defaultMessage:
                      "Mention saved, but people without page access won’t be notified. Ask an owner to share the page.",
                    description:
                      "Explains that tagging someone does not grant access or notify them when the author cannot share the Page",
                  }),
              ),
            []
          )
        return f
      } catch (e) {
        return (
          "save" === g &&
            (e instanceof Error && "page_session_closed" === e.message
              ? m.dispose()
              : m.finish(e instanceof Error && "page_save_timeout" === e.message ? "timeout" : "failure")),
          c.v.warning("page_mention_access_check_failed", { safe: { stage: g }, sensitive: { error: e } }),
          []
        )
      }
    }
    n.d(
      t,
      {},
      {
        LA: async function (e, t, n, r) {
          var o
          return m(
            e,
            ((o = () => e.get(d.spacePageId$, t.id)),
            {
              get pageId() {
                return o()
              },
              flush: () => t.flush({ scope: t.hasPendingOptimisticAgentInstructionsUnwraps() ? "all" : "current" }),
              getLiveMentions: (e) =>
                (function (e, t, n) {
                  if (0 === t.length) return []
                  let r = (0, a.e6)(e)
                  return p(
                    [
                      ...[...new Set(r.order.toArray())].flatMap((e) => {
                        let t = (0, a.dQ)(r, e)
                        return void 0 === t ? [] : [t.text.toJSON()]
                      }),
                      ...(n?.flatMap((e) => e.messages.map((e) => e.body)) ?? []),
                    ],
                    t,
                  )
                })(t.document, e, r?.getSnapshot()),
            }),
            n,
          )
        },
        c2: m,
        nH: p,
      },
    )
  },
  E3vE(e, t, n) {
    var a = n("HgFd"),
      r = n("fEVS")
    function o(e, t) {
      let n = "",
        o = 0,
        l = [
          ...(0, a.iK)(e),
          ...(0, r.FD)(e).map((e) => ({ ...e, label: t?.(e) ?? (null == e.orbit ? "ChatGPT" : "dot") })),
        ]
          .sort((e, t) => e.from - t.from)
          .map((t) => {
            let a = (n += e.slice(o, t.from)).length
            return (
              (n += `@${t.label}`),
              (o = t.to),
              {
                ...t,
                markup: "orbit" in t && null != t.orbit ? `[@dot](${(0, r.P)(t)})` : e.slice(t.from, t.to),
                displayFrom: a,
                displayTo: n.length,
              }
            )
          })
      return { text: n + e.slice(o), mentions: l }
    }
    function l(e, t, n, a, r) {
      let { text: l, mentions: i } = o(e, r),
        s = (e, t) => {
          let n = "",
            a = e
          for (let r of i)
            r.displayFrom < e || r.displayTo > t || ((n += l.slice(a, r.displayFrom) + r.markup), (a = r.displayTo))
          return n + l.slice(a, t)
        }
      return s(0, t) + a + s(n, l.length)
    }
    n.d(
      t,
      {},
      {
        WK: function (e, t, n = null, a) {
          let r = o(e, a).text
          if (n?.text === r) {
            let { from: o, to: i } = n
            if (o === i && n.inputType.startsWith("delete")) {
              let e = r.length - t.length
              n.inputType.endsWith("Backward") ? (o -= e) : n.inputType.endsWith("Forward") && (i += e)
            }
            let s = t.length - (r.length - i)
            if (o >= 0 && s >= o && r.slice(0, o) === t.slice(0, o) && r.slice(i) === t.slice(s))
              return l(e, o, i, t.slice(o, s), a)
          }
          let i = 0
          for (; i < r.length && r[i] === t[i];) i += 1
          let s = 0
          for (; s < r.length && s < t.length && r[r.length - s - 1] === t[t.length - s - 1];) s += 1
          let d = Math.min(i, r.length - s, t.length - s)
          return ((s = Math.min(s, r.length - i, t.length - i)), l(e, d, r.length - s, t.slice(d, t.length - s), a))
        },
        sB: l,
        tP: o,
      },
    )
  },
  tIbI(e, t, n) {
    n.d(t, { I: () => N })
    var a = n("ABep"),
      r = n("QosV"),
      o = n("HgFd"),
      l = n("SZCv"),
      i = n.n(l),
      s = n("LPKZ"),
      d = n.n(s),
      c = n("pkoC"),
      u = n.n(c),
      p = n("zTeN"),
      m = n("Wf1j"),
      g = n("Qgfj"),
      h = n("jguW"),
      f = n("SPnB"),
      v = n("R2HH"),
      y = n("TYyY"),
      b = n("zWHk"),
      x = n("r0y7"),
      w = n("rpnz"),
      I = n("UOwN"),
      _ = n("Z1L7"),
      k = n("bQW7"),
      S = n("S4d4"),
      C = n("CMOE"),
      A = n("HzoD"),
      j = n("Rxyo"),
      M = n("PejT")
    function P(e) {
      let t = new Map()
      return (
        e?.descendants((e) => {
          if ("personMention" !== e.type.name) return
          let n = (0, o.D1)(e.attrs.path)
          if (null == n || "string" != typeof e.attrs.title) return
          let a = n.accountUserId,
            r = e.attrs.title.slice(1),
            l = t.get(a)
          null == l ? t.set(a, { id: a, name: r, count: 1 }) : (l.count++, r.length > l.name.length && (l.name = r))
        }),
        [...t.values()]
      )
    }
    var T = n("oixE"),
      E = n("xa9F")
    function N(e) {
      let t,
        n,
        l,
        s,
        c,
        N,
        z,
        L,
        O,
        R,
        $,
        B,
        F,
        V,
        W = (0, r.c)(46),
        H = (0, m.A)(),
        G = (0, p.Ul)(f.chatGptAuthenticatedUserId$)
      W[0] !== e.pageId || W[1] !== e.peopleEnabled
        ? ((t = e.peopleEnabled && !(0, w.sD)(e.pageId)), (W[0] = e.pageId), (W[1] = e.peopleEnabled), (W[2] = t))
        : (t = W[2])
      let K = t,
        Q = (0, p.Ul)(!!K && j.A),
        X = K ? e.query : "",
        { checkboxAssignment: Z, sharing: Y } = e,
        J = e.pageId
      ;(W[3] !== X ? ((n = X.trim()), (W[3] = X), (W[4] = n)) : (n = W[4]),
        W[5] !== e.pageId || W[6] !== n
          ? ((l = { pageId: J, query: n }), (W[5] = e.pageId), (W[6] = n), (W[7] = l))
          : (l = W[7]),
        W[8] !== K ? ((s = { enabled: K }), (W[8] = K), (W[9] = s)) : (s = W[9]))
      let {
          data: ee,
          isFetching: et,
          isPending: en,
          isEnabled: ea,
          isError: er,
          failureCount: eo,
        } = (0, p._U)(E.Lc, l, s),
        el = K ? e.editorView : void 0
      W[10] !== el?.state.doc ? ((N = () => el?.state.doc), (W[10] = el?.state.doc), (W[11] = N)) : (N = W[11])
      let ei = N
      W[12] !== el
        ? ((z = (e) =>
            null == el
              ? d()
              : (0, b.A$)(el, (t) => {
                  t && e()
                })),
          (W[12] = el),
          (W[13] = z))
        : (z = W[13])
      let es = (0, h.useSyncExternalStoreWithSelector)(z, ei, ei, P, i()),
        ed = Q ? e.mentionContext : void 0,
        ec = new Map(es.map(D)),
        eu = (0, k.pW)(X, [es], ed, { currentUserId: G, mentionCounts: ec, limit: 8 }).map(q),
        ep = (0, p._U)(E.Id, eu),
        em = e.peopleStatus.peopleError || ep.error || (ea && (er || eo > 0)),
        eg = !em && (e.peopleStatus.peopleLoading || ep.pendingIds.length > 0 || (ea && (en || et)))
      if (K) {
        let t = [...e.contextualPicks, ep.people]
        c = (0, k.pW)(X, t, ed, {
          excludeDomainOnlyMatches: !0,
          currentUserId: G,
          limit: 8,
          directoryMatches: ee,
          mentionCounts: ec,
          requireIdentified: Q,
        })
      }
      let eh = (0, p._U)(T.L, K && Q && "" === X.trim() && !em && c?.length === 0 ? e.pageId : null),
        ef = em || (!eg && eh.isError),
        ev = !ef && (eg || eh.isLoading)
      em || eg || c?.length !== 0 || (c = eh.people)
      let ey = e.currentViewer
      W[14] !== X ? ((L = X.trim().toLowerCase()), (W[14] = X), (W[15] = L)) : (L = W[15])
      let eb = "me" === L,
        ex = ee?.find((e) => e.account_user_id === ey?.accountUserId),
        ew = (0, p.Ul)(null != ey ? x.bm : null),
        eI = ex?.email ?? (null != ew && ew.accountUserId === ey?.accountUserId ? ew.email : null),
        e_ = Q && null != ey ? (0, S.Z)(ey.accountUserId, ey.displayName) : ey?.displayName,
        ek = (0, C.f)({ name: e_, email: eI }, X),
        eS = eb || ek >= 2 ? ey : null,
        eC = c
      if (null != eS && null != e_ && null != eC) {
        let e, t
        ;(W[16] !== eS.accountUserId
          ? ((e = (e) => e.account_user_id !== eS.accountUserId), (W[16] = eS.accountUserId), (W[17] = e))
          : (e = W[17]),
          W[18] !== X || W[19] !== ek || W[20] !== eb
            ? ((t = (e) => !eb && ek < 4 && 4 === (0, C.f)(e, X)), (W[18] = X), (W[19] = ek), (W[20] = eb), (W[21] = t))
            : (t = W[21]))
        let [n, a] = u()(eC.filter(e), t)
        eC = [
          ...n,
          { ...ex, id: eS.accountUserId.split("__")[0], account_user_id: eS.accountUserId, name: e_, email: eI },
          ...a,
        ].slice(0, 8)
      }
      W[22] !== K ? ((O = { enabled: K }), (W[22] = K), (W[23] = O)) : (O = W[23])
      let {
          data: eA,
          isError: ej,
          isLoading: eM,
        } = (0, p._U)(E.i5, { pageId: e.pageId, accountUserIds: (eC ?? []).map(U).sort() }, O),
        eP = null != Z && eM,
        eT = eP || Y?.pendingItem != null ? [] : (eC ?? []),
        eE = ep.pendingIds.some((e) => !eT.some((t) => t.account_user_id === e)),
        eN = eP || (ev && (eT.length < 8 || eE)),
        eU = K
          ? [
              {
                id: "people",
                queryMatchMode: "source-ranked",
                title: (0, g.zR)({
                  id: "codex.pages.mentions.people",
                  defaultMessage: "People",
                  description: "Section of the Page mention picker listing workspace people",
                }),
                isLoading: eN,
                isError: ef,
                emptyState:
                  ef || "" !== X.trim()
                    ? null
                    : (0, g.zR)({
                        id: "codex.pages.mentions.searchHint",
                        defaultMessage: "Type a name to mention someone",
                        description: "Hint in the Page mention picker before a workspace person search",
                      }),
                items: eT.map((t) => {
                  let n = (0, _.$4)(t),
                    r = ej ? void 0 : eA?.items.find((e) => e.account_user_id === t.account_user_id)?.can_read,
                    l = !0 === r || (!1 === r && null != Y) ? Z : void 0
                  return {
                    key: `person:${t.account_user_id}`,
                    label:
                      eb && t.account_user_id === eS?.accountUserId
                        ? H.formatMessage(
                            {
                              id: "codex.pages.mentions.selfLabel",
                              defaultMessage: "{name} (you)",
                              description: "Label for the current user in the Page editor's @me mention suggestions",
                            },
                            { name: n },
                          )
                        : n,
                    detail: t.email ?? null,
                    allowLabelAndDetailToShrink: null == l,
                    searchTerms: null == t.email ? [] : [t.email],
                    trailingContent:
                      null == l ? (0, a.jsx)(M.V, { canRead: r, canShare: eA?.can_share ?? !1 }) : void 0,
                    trailingDetail:
                      null == l
                        ? void 0
                        : H.formatMessage({
                            id: "codex.pages.mentions.tabToAssign",
                            defaultMessage: "Tab to assign",
                            description:
                              "Keyboard shortcut on a person suggestion that assigns them the current Page checkbox",
                          }),
                    iconElement: (0, a.jsx)(I.Y, {
                      accountUserId: t.account_user_id,
                      avatarUrl: t.avatar_url,
                      name: n,
                      size: "inline",
                    }),
                    type: "mention",
                    insertMention: (a) => {
                      let { action: i, composerController: s, mentionState: d } = a
                      if (null == d.range) return
                      if ("complete-query" === i && null != l)
                        return void (r
                          ? l(s, { accountUserId: t.account_user_id, label: n })
                          : Y?.onShare(t.account_user_id, n, s, d.range))
                      let c = {
                        accountUserId: t.account_user_id,
                        label: n,
                        mentionId: crypto.randomUUID(),
                        pageId: e.pageId,
                      }
                      ;(s.insertMentionNodeFromAtMention(
                        s.view.state.schema.nodes.personMention,
                        { path: (0, o.G2)(c), title: `@${n}` },
                        d,
                      ),
                        e.onMention([c]))
                    },
                  }
                }),
              },
            ]
          : []
      ;(Y?.pendingItem != null && eU[0]?.items.push(Y.pendingItem),
        W[24] !== H || W[25] !== e.source
          ? ((R =
              null == e.source
                ? [
                    {
                      id: "dates",
                      title: (0, g.zR)({
                        id: "codex.pages.mentions.dates",
                        defaultMessage: "Dates",
                        description: "Section of the Page mention picker for inserting dates",
                      }),
                      emptyState: null,
                      isLoading: !1,
                      items: [
                        {
                          day: "today",
                          offset: 0,
                          label: H.formatMessage({
                            id: "codex.pages.mentions.today",
                            defaultMessage: "Today",
                            description: "Page mention picker action that inserts today's date",
                          }),
                        },
                        {
                          day: "tomorrow",
                          offset: 1,
                          label: H.formatMessage({
                            id: "codex.pages.mentions.tomorrow",
                            defaultMessage: "Tomorrow",
                            description: "Page mention picker action that inserts tomorrow's date",
                          }),
                        },
                        {
                          day: "yesterday",
                          offset: -1,
                          label: H.formatMessage({
                            id: "codex.pages.mentions.yesterday",
                            defaultMessage: "Yesterday",
                            description: "Page mention picker action that inserts yesterday's date",
                          }),
                        },
                      ].map((e) => {
                        let { day: t, offset: n, label: a } = e
                        return {
                          key: `date:${t}`,
                          label: a,
                          detail: null,
                          searchTerms: [t],
                          type: "mention",
                          insertMention: (e) => {
                            let { composerController: t, mentionState: a } = e,
                              { view: r } = t
                            if (!r.editable || null == a.range) return
                            let o = new Date(Date.now())
                            ;(o.setDate(o.getDate() + n),
                              r.dispatch(
                                r.state.tr
                                  .insertText(H.formatDate(o, { dateStyle: "long" }), a.range.from, a.range.to)
                                  .setMeta(y.Gq, { type: "close" }),
                              ),
                              r.focus())
                          },
                        }
                      }),
                    },
                  ]
                : []),
            (W[24] = H),
            (W[25] = e.source),
            (W[26] = R))
          : (R = W[26]))
      let eq = R,
        eD = e.footer
      if (Y?.failed) {
        let e, t
        ;(W[27] !== H
          ? ((e = H.formatMessage({
              id: "codex.pages.mentions.shareAndAssignFailed",
              defaultMessage: "Couldn’t give edit access. Try again to assign.",
              description: "Inline error when sharing before a checkbox assignment fails",
            })),
            (W[27] = H),
            (W[28] = e))
          : (e = W[28]),
          W[29] !== e
            ? ((t = (0, a.jsx)("span", { role: "alert", className: "px-2 text-secondary", children: e })),
              (W[29] = e),
              (W[30] = t))
            : (t = W[30]),
          (eD = t))
      } else if (K && (eN || ep.error) && Y?.pendingItem == null) {
        let t
        "page" === e.rankingContext && eN && !ef && "" !== X.trim() && ($ = "people")
        let n = eN && !ef
        ;(W[31] !== ep.error || W[32] !== n
          ? ((t = (0, a.jsx)(A.I, { peopleLoading: n, peopleError: ep.error })),
            (W[31] = ep.error),
            (W[32] = n),
            (W[33] = t))
          : (t = W[33]),
          (eD = t))
      }
      let ez = ey?.accountUserId
      return (
        W[34] !== e.additionalSections
          ? ((B = e.additionalSections ?? []), (W[34] = e.additionalSections), (W[35] = B))
          : (B = W[35]),
        W[36] !== eq || W[37] !== eU || W[38] !== B
          ? ((F = [...eU, ...eq, ...B]), (W[36] = eq), (W[37] = eU), (W[38] = B), (W[39] = F))
          : (F = W[39]),
        W[40] !== eD || W[41] !== $ || W[42] !== e || W[43] !== ez || W[44] !== F
          ? ((V = (0, a.jsx)(v.Ox, { ...e, footer: eD, footerSectionId: $, additionalSections: F }, ez)),
            (W[40] = eD),
            (W[41] = $),
            (W[42] = e),
            (W[43] = ez),
            (W[44] = F),
            (W[45] = V))
          : (V = W[45]),
        V
      )
    }
    function U(e) {
      return e.account_user_id
    }
    function q(e) {
      let { id: t } = e
      return t
    }
    function D(e) {
      let { id: t, count: n } = e
      return [t, n]
    }
  },
  NyT3(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("zTeN"),
      l = n("Wf1j"),
      i = n("X3K1"),
      s = n("CqQF"),
      d = n("hFgF"),
      c = n("TxRk"),
      u = n("UOwN"),
      p = n("Adh7"),
      m = n("vSFv"),
      g = n("rTPf"),
      h = n("wuZu")
    function f(e) {
      return e.stopPropagation()
    }
    function v(e) {
      let t,
        n,
        l,
        d,
        c,
        m,
        f,
        v = (0, r.c)(21),
        { accountUserId: y, label: b, onOpenChange: x, tooltipId: w, triggerElement: I } = e
      v[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (v[0] = t)) : (t = v[0])
      let { data: _, isLoading: k } = (0, o._U)(g.Ks, y, t)
      v[1] !== b || v[2] !== _?.name
        ? ((n = _?.name?.trim() || b.replace(/^@/, "")), (v[1] = b), (v[2] = _?.name), (v[3] = n))
        : (n = v[3])
      let S = n
      return (
        v[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)("span", {
              className: "size-full overflow-hidden rounded-full",
              children: (0, a.jsx)(i.X, { size: "fill" }),
            })),
            (v[4] = l))
          : (l = v[4]),
        v[5] !== y || v[6] !== k || v[7] !== S
          ? ((d = (0, a.jsx)(u.Y, {
              accountUserId: y,
              fadeIn: !0,
              loading: k,
              loadingFallback: l,
              name: S,
              profileQueryEnabled: !1,
              size: "md",
            })),
            (v[5] = y),
            (v[6] = k),
            (v[7] = S),
            (v[8] = d))
          : (d = v[8]),
        v[9] !== k || v[10] !== _?.email
          ? ((c = k
              ? (0, a.jsx)("span", {
                  className: "flex h-lh items-center",
                  children: (0, a.jsx)(i.X, { className: "w-32", size: "sm" }),
                })
              : (0, a.jsx)(p.Lz, { email: _?.email })),
            (v[9] = k),
            (v[10] = _?.email),
            (v[11] = c))
          : (c = v[11]),
        v[12] !== S || v[13] !== d || v[14] !== c
          ? ((m = (0, a.jsx)("div", {
              className: "w-max max-w-full min-w-56 p-3",
              children: (0, a.jsx)(h.h, { avatar: d, label: S, secondaryLabel: c, trailingContent: null }),
            })),
            (v[12] = S),
            (v[13] = d),
            (v[14] = c),
            (v[15] = m))
          : (m = v[15]),
        v[16] !== x || v[17] !== m || v[18] !== w || v[19] !== I
          ? ((f = (0, a.jsx)(s.m, {
              closeOnTriggerClick: !1,
              disableHoverOpen: !0,
              interactive: !0,
              keyboardNavigation: !0,
              open: !0,
              onOpenChange: x,
              scaleAvailableSizeWithZoom: !0,
              selectable: !0,
              side: "bottom",
              sideOffset: 4,
              tooltipContent: m,
              tooltipId: w,
              triggerElement: I,
              variant: "rich",
              children: null,
            })),
            (v[16] = x),
            (v[17] = m),
            (v[18] = w),
            (v[19] = I),
            (v[20] = f))
          : (f = v[20]),
        f
      )
    }
    n.d(
      t,
      {},
      {
        f: function (e) {
          let t,
            n,
            i,
            s,
            u = (0, r.c)(12),
            { accountUserId: g, label: h, children: v } = e,
            y = (0, l.A)(),
            b = (0, o.Ul)(m.JG),
            x = v ?? h
          u[0] !== x
            ? ((t = (0, a.jsx)(c.q3, { className: "cursor-default", children: x })), (u[0] = x), (u[1] = t))
            : (t = u[1])
          let w = t
          return b
            ? (u[2] !== y || u[3] !== h
                ? ((n = y.formatMessage(
                    {
                      id: "pages.personMention.openProfileCard",
                      defaultMessage: "View profile for {name}",
                      description:
                        "Accessible label for a person mention in a Page comment that opens the person's profile card",
                    },
                    { name: h.replace(/^@/, "") },
                  )),
                  (u[2] = y),
                  (u[3] = h),
                  (u[4] = n))
                : (n = u[4]),
              u[5] !== w || u[6] !== n
                ? ((i = (0, a.jsx)(d.I, { "aria-label": n, children: w })), (u[5] = w), (u[6] = n), (u[7] = i))
                : (i = u[7]),
              u[8] !== g || u[9] !== h || u[10] !== i
                ? ((s = (0, a.jsx)(p.Ve, {
                    accountUserId: g,
                    label: h,
                    openOnClick: !0,
                    triggerIsFocusable: !0,
                    onClick: f,
                    children: i,
                  })),
                  (u[8] = g),
                  (u[9] = h),
                  (u[10] = i),
                  (u[11] = s))
                : (s = u[11]),
              s)
            : w
        },
        q: function (e) {
          let t,
            n,
            l = (0, r.c)(14),
            { accountUserId: i, label: d, onOpenChange: c, tooltipId: u, triggerElement: g } = e
          if (!(0, o.Ul)(m.JG)) {
            let e
            return (
              l[0] !== i || l[1] !== d || l[2] !== c || l[3] !== u || l[4] !== g
                ? ((e = (0, a.jsx)(v, {
                    accountUserId: i,
                    label: d,
                    onOpenChange: c,
                    tooltipId: u,
                    triggerElement: g,
                  })),
                  (l[0] = i),
                  (l[1] = d),
                  (l[2] = c),
                  (l[3] = u),
                  (l[4] = g),
                  (l[5] = e))
                : (e = l[5]),
              e
            )
          }
          return (
            l[6] !== i || l[7] !== d
              ? ((t = (0, a.jsx)(p.BF, { accountUserId: i, label: d })), (l[6] = i), (l[7] = d), (l[8] = t))
              : (t = l[8]),
            l[9] !== c || l[10] !== t || l[11] !== u || l[12] !== g
              ? ((n = (0, a.jsx)(s.m, {
                  closeOnTriggerClick: !1,
                  disableHoverOpen: !0,
                  interactive: !0,
                  keyboardNavigation: !0,
                  open: !0,
                  onOpenChange: c,
                  scaleAvailableSizeWithZoom: !0,
                  selectable: !0,
                  side: "bottom",
                  sideOffset: 4,
                  tooltipContent: t,
                  tooltipId: u,
                  triggerElement: g,
                  variant: "entityPreview",
                  children: null,
                })),
                (l[9] = c),
                (l[10] = t),
                (l[11] = u),
                (l[12] = g),
                (l[13] = n))
              : (n = l[13]),
            n
          )
        },
      },
    )
  },
  oixE(e, t, n) {
    var a = n("zTeN"),
      r = n("SPnB"),
      o = n("heYt"),
      l = n("rpnz"),
      i = n("xrkS"),
      s = n("rTPf"),
      d = n("pyoT"),
      c = n("OWtl"),
      u = n("bQW7"),
      p = n("LiNd"),
      m = n("Rxyo")
    let g = (0, a.i1)(c.u, (e, { get: t, scope: n }) => {
      let a = [],
        c = { people: a, isLoading: !1, isError: !1 }
      if (null == e || !t(m.y) || !t(o.Sz)) return c
      let g = t(d.spaceAccountId$),
        h = t(r.chatGptAuthenticatedUserId$),
        f = t(d.spacePageId$, e)
      if (null == g || null == h || (0, l.sD)(f) || t(d.loadedSpacePageMetadata$, f)?.access.can_share !== !0) return c
      let v = { type: "page", id: f }
      if (!0 !== n.query.getOptions(i.G, v).enabled) return c
      let { data: y, isPending: b, isError: x, isFetching: w, fetchStatus: I } = t(i.G, v)
      if ("paused" === I || ((c.isError = x), x)) return c
      if (y?.suggestions_as_of == null) return ((c.isLoading = b || w), c)
      let _ = Date.parse(y.suggestions_as_of)
      if (!Number.isFinite(_)) return c
      let k = (y.suggestions ?? []).flatMap((e) => {
          let t = e.id.split("__")[0],
            n = null == e.last_shared_at ? 0 / 0 : _ - Date.parse(e.last_shared_at)
          return "user" === e.type &&
            e.id === `${t}__${g.toLowerCase()}` &&
            t !== h.split("__")[0] &&
            e.sources.some((e) => "history" === e || "recent" === e) &&
            Number.isFinite(n) &&
            n >= 0 &&
            n <= 2592e6
            ? [{ id: `user:${e.id}`, label: e.display_name, secondaryLabel: e.detail ?? void 0, suggestion: e }]
            : []
        }),
        S = 0
      for (let { suggestion: e } of (0, p.s)("", [k], {
        selectedIds: new Set(),
        suggestionsAsOf: y.suggestions_as_of,
        limit: k.length,
      })) {
        let { data: r, isPending: o, isError: l, failureCount: i, fetchStatus: d } = t(s.Ks, e.id)
        if (
          ((c.isError = c.isError || l || i > 0),
          l ||
            0 !== i ||
            "paused" === d ||
            (o
              ? (S += 1)
              : !0 === n.query.getOptions(s.Ks, e.id).enabled &&
                r?.account_user_id === e.id &&
                r.id === e.id.split("__")[0] &&
                a.push(...((0, u.Jk)([r]) ?? []))),
          a.length + S >= 3)
        )
          break
      }
      return ((c.isLoading = S > 0), c)
    })
    n.d(t, {}, { L: g })
  },
  xa9F(e, t, n) {
    var a = n("zTeN"),
      r = n("SPnB"),
      o = n("rpnz"),
      l = n("e1xH"),
      i = n("rTPf"),
      s = n("pyoT"),
      d = n("OWtl"),
      c = n("rvFo"),
      u = n("HFSu")
    let p = (0, a.i1)(d.u, (e, { get: t }) => {
        let n = [],
          a = [],
          r = !1
        for (let o of e) {
          let e = t(i.Ks, o)
          ;(e.data?.account_user_id === o && n.push(e.data),
            e.isEnabled && (e.isPending && a.push(o), (r = r || e.isError || e.failureCount > 0)))
        }
        return { people: n, pendingIds: a, error: r }
      }),
      m = (0, a.i1)(d.u, ({ pageId: e, query: t }, { get: n }) => {
        let a = n(s.spacePageId$, e)
        return n(i.DC, t, { enabled: n(l.pagesEnabled$) && !(0, o.sD)(a) })
      }),
      g = (0, a.vU)(d.u, ({ pageId: e, accountUserIds: t }, { get: n }) => {
        let a = n(s.spaceAccountId$),
          i = n(r.chatGptAuthenticatedUserId$),
          d = n(s.spacePageId$, e),
          p = [...new Set(t)].sort().slice(0, 50)
        return {
          enabled: n(l.pagesEnabled$) && null != a && !(0, o.sD)(d) && p.length > 0,
          queryKey: ["space", "mention-access", a, d, i, p],
          staleTime: c.D.THIRTY_SECONDS,
          gcTime: c.D.ONE_MINUTE,
          retry: !1,
          refetchOnMount: !0,
          queryFn: ({ signal: e }) =>
            u.CodexRequest.safePost("/pages/{page_id}/mentions/access", {
              parameters: { path: { page_id: d } },
              requestBody: { account_user_ids: p },
              signal: e,
            }),
        }
      })
    n.d(t, {}, { Id: p, Lc: m, i5: g })
  },
  lKu2(e, t, n) {
    var a = n("zTeN"),
      r = n("DBCl"),
      o = n("q3j5"),
      l = n("TYK1"),
      i = n("OWtl"),
      s = n("fEVS")
    let d = (0, a.i1)(i.u, (e, { get: t }) =>
      Object.fromEntries(
        e.map((e) => {
          let { data: n } = t(l.cloudAeonByThreadId$, (0, r.JXB)(e))
          return [e, null == n || (0, o.x)(n.display_name) ? void 0 : n.display_name]
        }),
      ),
    )
    n.d(
      t,
      {},
      {
        FL: function (e, t, n) {
          return e.owner === t.owner && n
            ? Object.keys(t.labels).some((t) => !Object.hasOwn(e.labels, t))
              ? { owner: t.owner, labels: { ...t.labels, ...e.labels } }
              : e
            : e.owner === t.owner && e.labels === t.labels
              ? e
              : t
        },
        OU: d,
        Xz: function (e, t) {
          return t.owner === e.owner && null != t.orbit ? e.labels[t.orbit.threadId] : void 0
        },
        jX: function (e, t) {
          return [
            ...new Set((0, s.FD)(e).flatMap((e) => (e.owner === t && null != e.orbit ? [e.orbit.threadId] : []))),
          ].sort()
        },
      },
    )
  },
  zstr(e, t, n) {
    n.d(t, { m: () => z })
    var a = n("ABep"),
      r = n("QosV"),
      o = n("HgFd"),
      l = n("QEJB"),
      i = n("on57"),
      s = n("zTeN"),
      d = n("zd8w"),
      c = n("oyxz"),
      u = n("SPnB"),
      p = n("QWm3"),
      m = n("OOvA"),
      g = n("tnQ4"),
      h = n("UxN3"),
      f = n("KIKs"),
      v = n("OQ5p"),
      y = n("TxRk"),
      b = n("wSXO"),
      x = n("e1xH"),
      w = n("lKu2"),
      I = n("UOwN"),
      _ = n("tcwr"),
      k = n("zOWn"),
      S = n("tdE2"),
      C = n("Z1L7"),
      A = n("bQW7"),
      j = n("HzoD"),
      M = n("Rxyo"),
      P = n("HgLj"),
      T = n("Oe5x"),
      E = n("fEVS"),
      N = n("PejT"),
      U = n("E3vE"),
      q = n("oixE"),
      D = n("xa9F")
    function z(e) {
      let t,
        n,
        c,
        u,
        m,
        g,
        h,
        v,
        b,
        I,
        k,
        A,
        j,
        N,
        q,
        D,
        z,
        Q,
        X,
        Z,
        Y,
        J,
        ee,
        et,
        en,
        ea,
        er = (0, r.c)(104),
        {
          className: eo,
          disabled: el,
          style: ei,
          inputRef: es,
          onKeyDown: ed,
          ariaLabel: ec,
          autoFocus: eu,
          initialSelection: ep,
          submitOnEnter: em,
          body: eg,
          canMention: eh,
          onBodyChange: ef,
          onCancel: ev,
          onChatGPT: ey,
          onAssignChatGPT: eb,
          taskOwner: ex,
          taskOwnerName: ew,
          placeholder: eI,
          pageId: e_,
          presence: ek,
          comments: eS,
          contextualPicks: eC,
          thread: eA,
          artifactParticipants: ej,
        } = e,
        eM =
          void 0 === eo
            ? "block field-sizing-content max-h-48 min-h-7 w-full min-w-0 flex-1 resize-none overflow-y-auto border-0 bg-transparent px-0 py-1 text-base leading-normal text-default outline-none placeholder:text-tertiary"
            : eo,
        eP = void 0 !== el && el,
        eT = void 0 === em || em,
        eE = void 0 === eh || eh,
        eN = (0, s.Ul)(x.pagesEnabled$)
      er[0] !== eg || er[1] !== ex ? ((t = (0, w.jX)(eg, ex)), (er[0] = eg), (er[1] = ex), (er[2] = t)) : (t = er[2])
      let eU = (0, s._U)(w.OU, t),
        [eq, eD] = (0, d.useState)(!1)
      er[3] !== eU || er[4] !== ex
        ? ((n = { owner: ex, labels: eU }), (er[3] = eU), (er[4] = ex), (er[5] = n))
        : (n = er[5])
      let [ez, eL] = (0, d.useState)(n)
      er[6] !== ez || er[7] !== eq || er[8] !== eU || er[9] !== ex
        ? ((c = (0, w.FL)(ez, { owner: ex, labels: eU }, eq)),
          (er[6] = ez),
          (er[7] = eq),
          (er[8] = eU),
          (er[9] = ex),
          (er[10] = c))
        : (c = er[10])
      let eO = c
      ;(eO !== ez && eL(eO),
        er[11] !== eO ? ((u = (e) => (0, w.Xz)(eO, e)), (er[11] = eO), (er[12] = u)) : (u = er[12]))
      let eR = u,
        e$ = (0, U.tP)(eg, eR),
        eB = (0, d.useRef)(null),
        eF = (0, d.useRef)(null),
        eV = [
          ...(0, T.Rb)(e$.text)
            .filter((e) => {
              let { from: t, to: n } = e
              return !e$.mentions.some((e) => t < e.displayTo && n > e.displayFrom)
            })
            .map(G),
          ...e$.mentions.filter(H).map(W),
        ].sort(V),
        eW = e$.text.slice(eV.at(-1)?.to ?? 0) + "\n",
        eH = (0, d.useRef)(ep ?? e$.text.length),
        eG = (0, d.useRef)(null),
        eK = (0, d.useId)()
      er[13] === Symbol.for("react.memo_cache_sentinel") ? ((m = { start: 0, end: 0 }), (er[13] = m)) : (m = er[13])
      let [eQ, eX] = (0, d.useState)(m),
        [eZ, eY] = (0, d.useState)(!1),
        [eJ, e0] = (0, d.useState)(null),
        [e1, e2] = (0, d.useState)(null),
        e3 =
          !eP && ((eN && eE) || null != ey || null != eb) && !eZ && eQ.start === eQ.end
            ? /(?:^|\s|[([{])@((?:[^\s@()[\]`]| ){0,80})$/u.exec(e$.text.slice(0, eQ.start))
            : null,
        e4 = e3?.[1],
        e5 = null == e4 ? null : eQ.start - e4.length - 1,
        e6 =
          null != e4 &&
          eJ !== `${e5}:${e4}` &&
          !e$.mentions.some((e) => null != e5 && e5 >= e.displayFrom && e5 < e.displayTo),
        e7 = e6 && eN && eE,
        e8 = (0, s.Ul)(!!e7 && M.A)
      er[14] !== e8 ? ((g = { enabled: e8 }), (er[14] = e8), (er[15] = g)) : (g = er[15])
      let e9 = (0, f.wv)(F, g),
        te = e7 && null != eS,
        tt = (0, d.useSyncExternalStore)(
          te ? eS.subscribe : S.aW,
          te ? eS.getSnapshot : S.tb,
          eS?.getServerSnapshot ?? S.tb,
        ),
        tn = e7 ? ek : void 0
      er[16] !== tn ? ((h = (e) => tn?.subscribe(e) ?? B), (er[16] = tn), (er[17] = h)) : (h = er[17])
      let ta = h
      er[18] !== tn ? ((v = () => tn?.getSnapshot().collaborators), (er[18] = tn), (er[19] = v)) : (v = er[19])
      let tr = v
      er[20] !== tn ? ((b = () => tn?.getServerSnapshot().collaborators), (er[20] = tn), (er[21] = b)) : (b = er[21])
      let to = (0, d.useSyncExternalStore)(ta, tr, b),
        tl = (0, s._U)(
          _.K,
          e7
            ? {
                type: "page",
                id: e_,
                query: e4,
                commenters: e8 ? [...((0, S.Qk)(tt) ?? []), ...(eC?.flatMap($) ?? [])] : (0, S.Qk)(tt),
                mentionContext: e8
                  ? {
                      asOfMs: e9,
                      threadUserIds: (0, S.Qk)(null == eA ? void 0 : [eA])?.map(R),
                      liveUserIds: to?.map(O),
                      participants: [...(0, S.Fx)(tt), ...(ej ?? [])],
                    }
                  : void 0,
              }
            : null,
        ),
        ti = () => e0(`${e5}:${e4}`)
      ;(er[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = () => {
            let e = eB.current
            if (null == e) return
            let t = (t) => {
              eG.current = { text: e.value, from: e.selectionStart, to: e.selectionEnd, inputType: t.inputType }
            }
            return (e.addEventListener("beforeinput", t), () => e.removeEventListener("beforeinput", t))
          }),
          (k = []),
          (er[22] = I),
          (er[23] = k))
        : ((I = er[22]), (k = er[23])),
        (0, d.useEffect)(I, k),
        er[24] !== eg || er[25] !== eR || er[26] !== ef || er[27] !== eX
          ? ((A = (e) => {
              let t = (0, U.WK)(eg, e.value, eG.current, eR)
              ;((eG.current = null), (0, o.U)(t) && ef(t), eX({ start: e.selectionStart, end: e.selectionEnd }))
            }),
            (er[24] = eg),
            (er[25] = eR),
            (er[26] = ef),
            (er[27] = eX),
            (er[28] = A))
          : (A = er[28]))
      let ts = A
      er[29] !== eg ||
      er[30] !== e5 ||
      er[31] !== eR ||
      er[32] !== ef ||
      er[33] !== e_ ||
      er[34] !== eQ ||
      er[35] !== eX
        ? ((j = (e) => {
            if (null == e5) return
            let t = (0, C.$4)(e),
              n = (0, U.sB)(
                eg,
                e5,
                eQ.start,
                (0, o.MM)({ accountUserId: e.account_user_id, label: t, mentionId: crypto.randomUUID(), pageId: e_ }) +
                  " ",
                eR,
              )
            if (!(0, o.U)(n)) return
            let a = e5 + t.length + 2
            ;(ef(n),
              eX({ start: a, end: a }),
              e0(null),
              requestAnimationFrame(() => {
                ;(eB.current?.focus(), eB.current?.setSelectionRange(a, a))
              }))
          }),
          (er[29] = eg),
          (er[30] = e5),
          (er[31] = eR),
          (er[32] = ef),
          (er[33] = e_),
          (er[34] = eQ),
          (er[35] = eX),
          (er[36] = j))
        : (j = er[36])
      let td = j
      er[37] !== eM ? ((N = (0, i.A)(eM, "container-Ursg8Y")), (er[37] = eM), (er[38] = N)) : (N = er[38])
      let tc = (0, P.P)(es, (e) => {
        ;((eB.current = e),
          null != e && null != eH.current && (e.setSelectionRange(eH.current, eH.current), (eH.current = void 0)))
      })
      er[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = (e) => {
            null != eF.current &&
              ((eF.current.scrollTop = e.currentTarget.scrollTop), (eF.current.scrollLeft = e.currentTarget.scrollLeft))
          }),
          (er[39] = q))
        : (q = er[39])
      let tu = e6 ? "list" : void 0,
        tp = e6 ? eK : void 0,
        tm = e6 && null != e1 ? `${eK}-option-${e1}` : void 0,
        tg = eu && !eP
      return (
        er[40] !== eg || er[41] !== eR || er[42] !== ts
          ? ((D = (e) => {
              let t = e.currentTarget,
                n = t.selectionStart,
                a = t.selectionEnd,
                r = e.clipboardData.getData("text/plain").replace(/\r\n?/gu, "\n"),
                l = (0, U.sB)(eg, n, a, "", eR),
                i = o.i7 - Array.from(l).length,
                s = 0,
                d = 0
              for (let e of r) {
                if (d >= i) break
                ;((s += e.length), d++)
              }
              if (s !== r.length && (e.preventDefault(), s > 0)) {
                let e = r.slice(0, s)
                if (
                  ((eG.current = { text: t.value, from: n, to: a, inputType: "insertFromPaste" }),
                  t.ownerDocument.execCommand?.("insertText", !1, e))
                )
                  return
                ;(t.setRangeText(e, n, a, "end"), ts(t))
              }
            }),
            (er[40] = eg),
            (er[41] = eR),
            (er[42] = ts),
            (er[43] = D))
          : (D = er[43]),
        er[44] !== ts ? ((z = (e) => ts(e.currentTarget)), (er[44] = ts), (er[45] = z)) : (z = er[45]),
        er[46] !== e$.text || er[47] !== ts
          ? ((Q = (e) => {
              e.currentTarget.value === e$.text && ts(e.currentTarget)
            }),
            (er[46] = e$.text),
            (er[47] = ts),
            (er[48] = Q))
          : (Q = er[48]),
        er[49] !== eX
          ? ((X = (e) => eX({ start: e.currentTarget.selectionStart, end: e.currentTarget.selectionEnd })),
            (er[49] = eX),
            (er[50] = X))
          : (X = er[50]),
        er[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = () => eD(!0)), (Y = () => eD(!1)), (er[51] = Z), (er[52] = Y))
          : ((Z = er[51]), (Y = er[52])),
        er[53] !== eY
          ? ((J = () => eY(!0)), (ee = () => eY(!1)), (er[53] = eY), (er[54] = J), (er[55] = ee))
          : ((J = er[54]), (ee = er[55])),
        er[56] !== e6 || er[57] !== ti || er[58] !== ev || er[59] !== ed || er[60] !== eT
          ? ((et = (e) => {
              e.nativeEvent.isComposing ||
                e.defaultPrevented ||
                (ed?.(e),
                e.defaultPrevented ||
                  ("Escape" === e.key && (e6 || null != ev)
                    ? (e.preventDefault(), e.stopPropagation(), e6 ? ti() : ev?.())
                    : "Enter" === e.key &&
                      !e.shiftKey &&
                      eT &&
                      (e.preventDefault(), e.currentTarget.form?.requestSubmit())))
            }),
            (er[56] = e6),
            (er[57] = ti),
            (er[58] = ev),
            (er[59] = ed),
            (er[60] = eT),
            (er[61] = et))
          : (et = er[61]),
        er[62] !== ec ||
        er[63] !== eP ||
        er[64] !== e$.text ||
        er[65] !== eI ||
        er[66] !== tc ||
        er[67] !== tu ||
        er[68] !== tp ||
        er[69] !== tm ||
        er[70] !== tg ||
        er[71] !== D ||
        er[72] !== z ||
        er[73] !== Q ||
        er[74] !== X ||
        er[75] !== J ||
        er[76] !== ee ||
        er[77] !== et
          ? ((en = (0, a.jsx)("textarea", {
              ref: tc,
              className: "textarea-WvGgkS",
              onScroll: q,
              disabled: eP,
              "aria-label": ec,
              "aria-autocomplete": tu,
              "aria-controls": tp,
              "aria-activedescendant": tm,
              autoFocus: tg,
              placeholder: eI,
              onPaste: D,
              rows: 1,
              value: e$.text,
              onChange: z,
              onInput: Q,
              onSelect: X,
              onFocus: Z,
              onBlur: Y,
              onCompositionStart: J,
              onCompositionEnd: ee,
              onKeyDown: et,
            })),
            (er[62] = ec),
            (er[63] = eP),
            (er[64] = e$.text),
            (er[65] = eI),
            (er[66] = tc),
            (er[67] = tu),
            (er[68] = tp),
            (er[69] = tm),
            (er[70] = tg),
            (er[71] = D),
            (er[72] = z),
            (er[73] = Q),
            (er[74] = X),
            (er[75] = J),
            (er[76] = ee),
            (er[77] = et),
            (er[78] = en))
          : (en = er[78]),
        er[79] !== e6 ||
        er[80] !== eg ||
        er[81] !== eE ||
        er[82] !== to ||
        er[83] !== eC ||
        er[84] !== ti ||
        er[85] !== eN ||
        er[86] !== e5 ||
        er[87] !== eR ||
        er[88] !== e8 ||
        er[89] !== eK ||
        er[90] !== eO ||
        er[91] !== eb ||
        er[92] !== ef ||
        er[93] !== ey ||
        er[94] !== e_ ||
        er[95] !== tl ||
        er[96] !== e4 ||
        er[97] !== td ||
        er[98] !== eQ ||
        er[99] !== e2 ||
        er[100] !== eX ||
        er[101] !== ex ||
        er[102] !== ew
          ? ((ea = e6
              ? (0, a.jsx)(p.$, {
                  isActive: !0,
                  children: (0, a.jsx)(l.qW, {
                    onDismiss: ti,
                    onEscapeKeyDown: (e) => {
                      ;(e.preventDefault(), e.stopPropagation(), e.isComposing || (ti(), eB.current?.focus()))
                    },
                    onInteractOutside: (e) => {
                      e.target === eB.current && e.preventDefault()
                    },
                    children: (0, a.jsx)(K, {
                      improvedSuggestions: e8,
                      mentionContext: tl.mentionContext,
                      contextualPicks: [...(eC ?? []), to?.map(L), ...tl.picks],
                      peopleStatus: { peopleError: tl.isError, peopleLoading: tl.isLoading },
                      onChatGPT:
                        null == ey && null == eb
                          ? void 0
                          : (e, t) => {
                              if (null == e5) return
                              if (null != eb && null == t) {
                                ;(ef((0, U.sB)(eg, e5, eQ.start, "", eR)),
                                  eb(),
                                  eX({ start: e5, end: e5 }),
                                  ti(),
                                  requestAnimationFrame(() => {
                                    ;(eB.current?.focus(), eB.current?.setSelectionRange(e5, e5))
                                  }))
                                return
                              }
                              if (null == ex) return
                              let n = crypto.randomUUID()
                              ti()
                              let a = (0, U.sB)(
                                eg,
                                e5,
                                eQ.start,
                                `[@${null == t ? "ChatGPT" : "dot"}](${(0, E.P)({ id: n, owner: ex, ownerName: ew, orbit: t })}) `,
                                eR,
                              )
                              if ((0, o.U)(a)) {
                                null != t && eL({ ...eO, labels: { ...eO.labels, [t.threadId]: e } })
                                let n = e5 + e.length + 2
                                ;(ey?.(a, n),
                                  eX({ start: n, end: n }),
                                  requestAnimationFrame(() => {
                                    ;(eB.current?.focus(), eB.current?.setSelectionRange(n, n))
                                  }))
                              }
                            },
                      taskMentionsDisabled: null == eb && null == ex,
                      allowDot: null != ey,
                      canMention: eN && eE,
                      pageId: e_,
                      listboxId: eK,
                      query: e4,
                      onHighlight: e2,
                      onSelect: td,
                    }),
                  }),
                })
              : null),
            (er[79] = e6),
            (er[80] = eg),
            (er[81] = eE),
            (er[82] = to),
            (er[83] = eC),
            (er[84] = ti),
            (er[85] = eN),
            (er[86] = e5),
            (er[87] = eR),
            (er[88] = e8),
            (er[89] = eK),
            (er[90] = eO),
            (er[91] = eb),
            (er[92] = ef),
            (er[93] = ey),
            (er[94] = e_),
            (er[95] = tl),
            (er[96] = e4),
            (er[97] = td),
            (er[98] = eQ),
            (er[99] = e2),
            (er[100] = eX),
            (er[101] = ex),
            (er[102] = ew),
            (er[103] = ea))
          : (ea = er[103]),
        (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("label", {
              className: N,
              style: ei,
              children: [
                (0, a.jsxs)("div", {
                  ref: eF,
                  className: "highlight-Qnw9gV",
                  "aria-hidden": "true",
                  children: [
                    eV.map((e, t) => {
                      let { from: n, to: r, appearance: o } = e
                      return (0, a.jsxs)(
                        d.Fragment,
                        {
                          children: [
                            e$.text.slice(0 === t ? 0 : eV[t - 1].to, n),
                            (0, a.jsx)(y.q3, {
                              className: "link-eH2MwO",
                              appearance: o,
                              fontWeight: "inherit",
                              children: (0, a.jsx)("span", {
                                className: "whitespace-pre-wrap",
                                children: e$.text.slice(n, r),
                              }),
                            }),
                          ],
                        },
                        n,
                      )
                    }),
                    eW,
                  ],
                }),
                en,
              ],
            }),
            ea,
          ],
        })
      )
    }
    function L(e) {
      return { id: e.accountUserId.split("__")[0], account_user_id: e.accountUserId, name: e.displayName, email: null }
    }
    function O(e) {
      return e.accountUserId
    }
    function R(e) {
      return e.id
    }
    function $(e) {
      return e ?? []
    }
    function B() {}
    function F(e) {
      return e.getTime()
    }
    function V(e, t) {
      return e.from - t.from
    }
    function W(e) {
      let { displayFrom: t, displayTo: n } = e
      return { from: t, to: n, appearance: "inline-mention" }
    }
    function H(e) {
      return null != e.accountUserId
    }
    function G(e) {
      return { ...e, appearance: "underlined-text" }
    }
    function K(e) {
      let t,
        n,
        o,
        l,
        i,
        d,
        p,
        f,
        y,
        x,
        w,
        _,
        S,
        M = (0, r.c)(49),
        {
          improvedSuggestions: P,
          onChatGPT: T,
          allowDot: E,
          taskMentionsDisabled: U,
          canMention: z,
          listboxId: L,
          onHighlight: O,
          onSelect: R,
          query: $,
          pageId: B,
          contextualPicks: F,
          mentionContext: V,
          peopleStatus: W,
        } = e,
        H = (0, s.Ul)(u.chatGptAuthenticatedUserId$)
      M[0] !== E ? ((t = { enabled: E }), (M[0] = E), (M[1] = t)) : (t = M[1])
      let G = (0, s.Ul)(b.t, t)
      ;(M[2] !== $ ? ((n = $.trim()), (M[2] = $), (M[3] = n)) : (n = M[3]),
        M[4] !== B || M[5] !== n ? ((o = { pageId: B, query: n }), (M[4] = B), (M[5] = n), (M[6] = o)) : (o = M[6]))
      let { data: K, isFetching: X, isPending: Z, isEnabled: Y, isError: J, failureCount: ee } = (0, s._U)(D.Lc, o),
        et = []
      if (z) {
        let e = { excludeDomainOnlyMatches: !0, currentUserId: H, limit: 8, directoryMatches: K, requireIdentified: P }
        et = P && null != V ? (0, A.oy)($, F, V, e) : (0, A.KZ)($, F, e)
      }
      let en = W.peopleError || (Y && (J || ee > 0)),
        ea = !en && (W.peopleLoading || (Y && (Z || X))),
        er = (0, s._U)(q.L, z && P && "" === $.trim() && !en && 0 === et.length ? B : null),
        eo = en || (!ea && er.isError),
        el = !eo && (ea || er.isLoading),
        ei = !en && !ea && 0 === et.length && er.people.length > 0
      ei && (et = er.people)
      let { data: es, isError: ed } = (0, s._U)(D.i5, { pageId: B, accountUserIds: et.map(Q).sort() })
      if (eo) l = null
      else if (el) {
        let e
        ;(M[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "codex.pages.mentions.searching",
              defaultMessage: "Searching…",
              description: "Status while looking for workspace people to mention on a Page",
            })),
            (M[7] = e))
          : (e = M[7]),
          (l = e))
      } else if ("" === $.trim()) {
        let e
        ;(M[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "codex.pages.mentions.searchHint",
              defaultMessage: "Type a name to mention someone",
              description: "Hint in the Page mention picker before a workspace person search",
            })),
            (M[8] = e))
          : (e = M[8]),
          (l = e))
      } else {
        let e
        ;(M[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "codex.pages.mentions.noPeople",
              defaultMessage: "No matching people",
              description: "Empty result when no workspace person matches a Page mention search",
            })),
            (M[9] = e))
          : (e = M[9]),
          (l = e))
      }
      let ec = m.d
      ;(M[10] !== el
        ? ((i = el ? (0, a.jsx)(j.I, { peopleLoading: !0 }) : void 0), (M[10] = el), (M[11] = i))
        : (i = M[11]),
        M[12] !== O ? ((d = (e, t) => O(null == e ? null : t)), (M[12] = O), (M[13] = d)) : (d = M[13]))
      let eu = (e) => {
        if ("page-comment-chatgpt" === e.key) return void T?.("ChatGPT")
        let t = G?.find((t) => e.key === `page-comment-orbit:${t.orbitId}`)
        if (null != t) return void T?.(t.isDefault ? "dot" : t.name, t)
        let n = et.find((t) => t.account_user_id === e.key)
        null != n && R(n)
      }
      ;(M[14] !== T || M[15] !== $ || M[16] !== U
        ? ((p =
            null != T && "chatgpt".includes($.trim().toLowerCase())
              ? [
                  {
                    id: "chatgpt",
                    items: [
                      {
                        key: "page-comment-chatgpt",
                        disabled: U,
                        content: (0, a.jsx)(g.s, {
                          leftIcon: (0, a.jsx)(h.b5, { icon: v.A, "aria-hidden": !0 }),
                          children: (0, a.jsx)(c.A, {
                            id: "codex.page.commentTaskMention.suggestion",
                            defaultMessage: "ChatGPT",
                            description: "Starts a finite task that updates and resolves this Page comment",
                          }),
                        }),
                      },
                    ],
                  },
                ]
              : []),
          (M[14] = T),
          (M[15] = $),
          (M[16] = U),
          (M[17] = p))
        : (p = M[17]),
        M[18] !== E || M[19] !== G || M[20] !== T || M[21] !== $ || M[22] !== U
          ? ((f =
              null != T && E
                ? [
                    {
                      id: "orbit",
                      items: (G ?? [])
                        .filter((e) =>
                          ["dot", "o", "orbit", e.name.toLowerCase()].some((e) =>
                            e.includes($.trim().replace(/^\./u, "").toLowerCase()),
                          ),
                        )
                        .map((e) => ({
                          key: `page-comment-orbit:${e.orbitId}`,
                          disabled: U,
                          content: (0, a.jsx)(g.s, {
                            leftIcon: (0, a.jsx)(k.r, { className: "size-4", conversationId: e.threadId }),
                            children: e.name,
                          }),
                        })),
                    },
                  ]
                : []),
            (M[18] = E),
            (M[19] = G),
            (M[20] = T),
            (M[21] = $),
            (M[22] = U),
            (M[23] = f))
          : (f = M[23]),
        M[24] !== ei
          ? ((y = ei
              ? (0, a.jsx)(c.A, {
                  id: "codex.pages.mentions.people",
                  defaultMessage: "People",
                  description: "Section of the Page mention picker listing workspace people",
                })
              : void 0),
            (M[24] = ei),
            (M[25] = y))
          : (y = M[25]))
      let ep = l
      M[26] !== es?.can_share || M[27] !== es?.items || M[28] !== ed
        ? ((x = (e) => ({
            key: e.account_user_id,
            content: (0, a.jsx)(g.s, {
              trailingContent: (0, a.jsx)(N.V, {
                canRead: ed ? void 0 : es?.items.find((t) => t.account_user_id === e.account_user_id)?.can_read,
                canShare: es?.can_share ?? !1,
              }),
              leftIcon: (0, a.jsx)(I.Y, {
                accountUserId: e.account_user_id,
                avatarUrl: e.avatar_url,
                name: (0, C.$4)(e),
                size: "inline",
              }),
              children: (0, C.$4)(e),
            }),
          })),
          (M[26] = es?.can_share),
          (M[27] = es?.items),
          (M[28] = ed),
          (M[29] = x))
        : (x = M[29])
      let em = et.map(x)
      return (
        M[30] !== l || M[31] !== eo || M[32] !== el || M[33] !== ei || M[34] !== y || M[35] !== em
          ? ((w = { id: "people", title: y, showTitle: ei, isError: eo, isLoading: el, emptyState: ep, items: em }),
            (M[30] = l),
            (M[31] = eo),
            (M[32] = el),
            (M[33] = ei),
            (M[34] = y),
            (M[35] = em),
            (M[36] = w))
          : (w = M[36]),
        M[37] !== p || M[38] !== f || M[39] !== w
          ? ((_ = [...p, ...f, w]), (M[37] = p), (M[38] = f), (M[39] = w), (M[40] = _))
          : (_ = M[40]),
        M[41] !== ec || M[42] !== L || M[43] !== $ || M[44] !== _ || M[45] !== i || M[46] !== d || M[47] !== eu
          ? ((S = (0, a.jsx)(ec, {
              preserveHighlightOnItemsChange: "user",
              isActive: !0,
              closeOnNoResults: !1,
              footer: i,
              listboxId: L,
              onHighlight: d,
              onSelect: eu,
              query: $,
              selectOnTab: !0,
              sections: _,
            })),
            (M[41] = ec),
            (M[42] = L),
            (M[43] = $),
            (M[44] = _),
            (M[45] = i),
            (M[46] = d),
            (M[47] = eu),
            (M[48] = S))
          : (S = M[48]),
        S
      )
    }
    function Q(e) {
      return e.account_user_id
    }
  },
  i1ww(e, t, n) {
    var a = n("SRbQ"),
      r = n("SZCv"),
      o = n.n(r),
      l = n("zTeN"),
      i = n("Dgwo"),
      s = n("vdpW"),
      d = n("b0N7"),
      c = n("SPnB"),
      u = n("OWtl"),
      p = n("OMIV"),
      m = n("pyoT")
    let g = (0, l.bD)(u.u, (e) => ({ enabled: !0, slideId: null, heading: null }), void 0, { autoDispose: 6e4 }),
      h = (0, l.bD)(u.u, (e) => null, void 0, { autoDispose: 6e4 }),
      f = (0, l.i1)(
        u.u,
        (e, { get: t }) => {
          let n = t(h, e)
          return null == n
            ? null
            : (t(s.M, { hostId: n.hostId, threadId: n.threadId })?.find((e) => t(s.RN, e) === n.turnId) ?? null)
        },
        { isEqual: o() },
      ),
      v = (0, l.i1)(u.u, (e, { get: t }) => "inProgress" === t(s.OM, t(f, e))),
      y = (0, l.bD)(u.u, (e) => 0, void 0, { autoDispose: 6e4 }),
      b = (0, l.i1)(u.u, (e, { get: t }) => t(y, e) > 0)
    function x(e, t, n) {
      if (o()(e.get(h, t), n)) return
      let a = e.get(c.chatGptAuthenticatedUserId$),
        r = { hostId: n.hostId, threadId: n.threadId }
      ;(e.set(h, t, n), e.set(g, t, (e) => ({ ...e, slideId: null, heading: null })))
      let l = e.watch(({ get: o }) => {
        o(s.Ct, r)
        let i = o(s.OM, o(f, t)),
          u = o(s.fl, r),
          p = o(d.Z, o(f, t))
        ;(null != p && e.set(g, t, (e) => (e.heading === p ? e : { ...e, heading: p })),
          (o(h, t) !== n ||
            o(m.spaceAccountId$) !== t.accountId ||
            o(c.chatGptAuthenticatedUserId$) !== a ||
            "missing" === u ||
            "unavailable" === u ||
            "error" === u ||
            (null != i && "inProgress" !== i)) &&
            queueMicrotask(() => {
              ;(l(),
                e.get(h, t) === n &&
                  (e.set(h, t, null),
                  (e.get(m.spaceAccountId$) !== t.accountId || e.get(c.chatGptAuthenticatedUserId$) !== a) &&
                    e.set(g, t, { enabled: !1, slideId: null, heading: null })))
            }))
      })
    }
    n.d(
      t,
      {},
      {
        $f: g,
        Gw: x,
        Io: b,
        L0: f,
        N6: y,
        QK: async function (e, t, n) {
          let r = { stack: [], error: void 0, hasError: !1 }
          try {
            if (!e.get(p.JW, "821992342") || e.get(m.spaceAccountId$) !== t.accountId) return
            let o = e.get(c.chatGptAuthenticatedUserId$),
              l = (0, a.mS)(r, await (0, i.V)(e, n.hostId).getThreadExecutionState(n.threadId), !1)
            l?.activeTurnId != null &&
              l.inProgress &&
              e.get(p.JW, "821992342") &&
              e.get(m.spaceAccountId$) === t.accountId &&
              e.get(c.chatGptAuthenticatedUserId$) === o &&
              x(e, t, { ...n, turnId: l.activeTurnId })
          } catch (e) {
            ;((r.error = e), (r.hasError = !0))
          } finally {
            ;(0, a.hk)(r)
          }
        },
        XO: v,
        aQ: h,
      },
    )
  },
  tWTn(e, t, n) {
    n.d(t, { D: () => em })
    var a = n("ABep"),
      r = n("QosV"),
      o = n("on57"),
      l = n("suct"),
      i = n("zTeN"),
      s = n("zd8w"),
      d = n("Wf1j"),
      c = n("oyxz"),
      u = n("Qgfj"),
      p = n("iodE"),
      m = n("K45w"),
      g = n("W5pg"),
      h = n("xNuN"),
      f = n("LIss"),
      v = n("T1PX"),
      y = n("yC2B"),
      b = n("V8uZ"),
      x = n("OBKr"),
      w = n("QESW"),
      I = n("DUYS")
    function _(e) {
      let t,
        n,
        l,
        i,
        c,
        u,
        _,
        k,
        S,
        C,
        A,
        j,
        M,
        P,
        T,
        E,
        N,
        U,
        q = (0, r.c)(65),
        { animation: D, children: z, defaultWidth: L, label: O, onClose: R, storageKey: $, variant: B } = e,
        F = void 0 === L ? 600 : L,
        V = void 0 === B ? "default" : B,
        W = (0, d.A)(),
        H = (0, v.I)(),
        [G, K] = (0, p.xQ)()
      q[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { width: 0, height: 0 }), (q[0] = t)) : (t = q[0])
      let [Q, X] = (0, s.useState)(t),
        Z = (0, m.d)(0),
        Y = D ?? Z,
        J = (0, m.d)(null),
        ee = Q.width < 640,
        et = ee ? "full" : "regular"
      q[1] !== F || q[2] !== Q.height || q[3] !== Q.width
        ? ((n = (0, I.Mv)({ defaultWidth: F, mainContentWidth: Q.width, shellHeight: Q.height })),
          (q[1] = F),
          (q[2] = Q.height),
          (q[3] = Q.width),
          (q[4] = n))
        : (n = q[4])
      let en = n
      q[5] !== en || q[6] !== Q.width || q[7] !== $ || q[8] !== et
        ? ((l = (e) =>
            Math.min(
              Q.width,
              (0, I.Ju)(
                e ?? (0, I.t7)({ defaultWidth: en, mainContentWidth: Q.width, storageKey: $, widthMode: et }),
                Q.width,
                et,
              ),
            )),
          (q[5] = en),
          (q[6] = Q.width),
          (q[7] = $),
          (q[8] = et),
          (q[9] = l))
        : (l = q[9])
      let ea = (0, g.G)(J, l)
      q[10] !== G || q[11] !== Y || q[12] !== ea
        ? ((i = { size: ea, animation: Y, isVisible: G }), (q[10] = G), (q[11] = Y), (q[12] = ea), (q[13] = i))
        : (i = q[13])
      let { animatedSize: er } = (0, w.j)(i)
      ;(q[14] !== G || q[15] !== H || q[16] !== K || q[17] !== Y
        ? ((c = () => {
            let e = (0, h.i)(Y, +!!G, {
              ...(H ? { duration: 0 } : b.cv),
              onComplete: () => {
                G || K?.()
              },
            })
            return () => e.stop()
          }),
          (u = [G, H, K, Y]),
          (q[14] = G),
          (q[15] = H),
          (q[16] = K),
          (q[17] = Y),
          (q[18] = c),
          (q[19] = u))
        : ((c = q[18]), (u = q[19])),
        (0, s.useLayoutEffect)(c, u),
        q[20] !== D
          ? ((k = () => () => D?.jump(0)), (_ = [D]), (q[20] = D), (q[21] = _), (q[22] = k))
          : ((_ = q[21]), (k = q[22])),
        (0, s.useLayoutEffect)(k, _))
      let eo = Math.min(Q.width, 320),
        el = Q.width
      q[23] !== Q.width || q[24] !== et
        ? ((S = (0, I.Ju)(1, Q.width, et)), (q[23] = Q.width), (q[24] = et), (q[25] = S))
        : (S = q[25])
      let ei = Math.min(el, S)
      q[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = (e) => {
            let t = e?.parentElement
            if (null == t) return
            let n = () => {
              let e = t.clientWidth,
                n = t.clientHeight
              X((t) => (t.width === e && t.height === n ? t : { width: e, height: n }))
            }
            n()
            let a = new ResizeObserver(n)
            return (a.observe(t), () => a.disconnect())
          }),
          (q[26] = C))
        : (C = q[26])
      let es = ee ? "absolute inset-y-0 end-0 z-20" : "relative"
      q[27] !== es ? ((A = (0, o.A)("h-full min-h-0 min-w-0 shrink-0", es)), (q[27] = es), (q[28] = A)) : (A = q[28])
      let ed = !G,
        ec = !G
      ;(q[29] !== er ? ((j = { width: er }), (q[29] = er), (q[30] = j)) : (j = q[30]),
        q[31] !== G || q[32] !== Y
          ? ((M = () => G && Y.jump(1)), (P = () => G && Y.jump(1)), (q[31] = G), (q[32] = Y), (q[33] = M), (q[34] = P))
          : ((M = q[33]), (P = q[34])),
        q[35] !== R
          ? ((T = (e) => {
              "Escape" !== e.key || e.defaultPrevented || (e.stopPropagation(), R())
            }),
            (q[35] = R),
            (q[36] = T))
          : (T = q[36]))
      let eu = "rtl" === (0, y.b)(W.locale) ? "right" : "left",
        ep = "glass" !== V
      return (
        q[37] !== en ||
        q[38] !== W ||
        q[39] !== ei ||
        q[40] !== eo ||
        q[41] !== G ||
        q[42] !== Q.width ||
        q[43] !== $ ||
        q[44] !== V ||
        q[45] !== Y ||
        q[46] !== et ||
        q[47] !== J
          ? ((E =
              G && ei > eo
                ? {
                    hitArea: "glass" === V ? "inside" : void 0,
                    indicatorVisibility: "glass" === V ? "always" : void 0,
                    ariaLabel: W.formatMessage({
                      id: "splitView.resize",
                      defaultMessage: "Resize panels",
                      description: "Accessible name for the split-view resize handle",
                    }),
                    defaultSize: en,
                    maximumSize: ei,
                    minimumSize: eo,
                    setSize: (e) => {
                      ;(Y.jump(1), J.set((0, I.R2)(e, Q.width, et)))
                    },
                    onResizeEnd: (e) => {
                      ;(0, I.AU)({ mainContentWidth: Q.width, storageKey: $, width: e, widthMode: et })
                    },
                  }
                : void 0),
            (q[37] = en),
            (q[38] = W),
            (q[39] = ei),
            (q[40] = eo),
            (q[41] = G),
            (q[42] = Q.width),
            (q[43] = $),
            (q[44] = V),
            (q[45] = Y),
            (q[46] = et),
            (q[47] = J),
            (q[48] = E))
          : (E = q[48]),
        q[49] !== z || q[50] !== eu || q[51] !== ep || q[52] !== E || q[53] !== ea
          ? ((N = (0, a.jsx)(x.p, {
              width: ea,
              edge: eu,
              showBorder: ep,
              showBackground: !1,
              resizer: E,
              children: z,
            })),
            (q[49] = z),
            (q[50] = eu),
            (q[51] = ep),
            (q[52] = E),
            (q[53] = ea),
            (q[54] = N))
          : (N = q[54]),
        q[55] !== O ||
        q[56] !== A ||
        q[57] !== ed ||
        q[58] !== ec ||
        q[59] !== j ||
        q[60] !== M ||
        q[61] !== P ||
        q[62] !== T ||
        q[63] !== N
          ? ((U = (0, a.jsx)(f.P.aside, {
              ref: C,
              className: A,
              "aria-label": O,
              "aria-hidden": ed,
              inert: ec,
              style: j,
              onPointerDownCapture: M,
              onKeyDownCapture: P,
              onKeyDown: T,
              children: N,
            })),
            (q[55] = O),
            (q[56] = A),
            (q[57] = ed),
            (q[58] = ec),
            (q[59] = j),
            (q[60] = M),
            (q[61] = P),
            (q[62] = T),
            (q[63] = N),
            (q[64] = U))
          : (U = q[64]),
        U
      )
    }
    var k = n("rsCP"),
      S = n("v0Gf"),
      C = n("slpy"),
      A = n("HgFd"),
      j = n("cC4N"),
      M = n("ndwI"),
      P = n("dVri"),
      T = n("IgxH"),
      E = n("G4E3"),
      N = n("Yn57"),
      U = n("ygO2"),
      q = n("LMw7"),
      D = n("tWaO"),
      z = n("GO7r"),
      L = n("X3K1"),
      O = n("KIKs"),
      R = n("OQ5p"),
      $ = n("uG2s"),
      B = n("RbH1"),
      F = n("UOwN"),
      V = n("Adh7"),
      W = n("pyoT"),
      H = n("uAks"),
      G = n("wuZu")
    function K(e) {
      let t,
        n,
        o,
        l,
        u,
        p,
        m,
        g,
        h,
        f = (0, r.c)(42),
        { document: v, onRevealSection: y, pageId: b } = e,
        x = (0, d.A)(),
        w = (0, s.useId)(),
        I = (0, O.wv)(),
        [_, k] = (0, s.useState)(20),
        { data: S, isError: L, isPending: K, refetch: J } = (0, i._U)(W.pageAttributionQuery$, b)
      if (K) {
        let e
        return (
          f[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsxs)("div", {
                className: "flex flex-col gap-5",
                role: "status",
                children: [
                  (0, a.jsx)("span", {
                    className: "sr-only",
                    children: (0, a.jsx)(c.A, {
                      id: "codex.space.page.attribution.loading",
                      defaultMessage: "Loading edit details…",
                      description: "Accessible status while recent Page edit details are fetched",
                    }),
                  }),
                  [0, 1, 2].map(Y),
                ],
              })),
              (f[0] = e))
            : (e = f[0]),
          e
        )
      }
      if (L) {
        let e, t, n, r
        return (
          f[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("p", {
                className: "text-sm text-secondary",
                role: "status",
                children: (0, a.jsx)(c.A, {
                  id: "codex.space.page.attribution.error",
                  defaultMessage: "Edit details unavailable",
                  description: "Error shown when recent block edit attribution for a shared Page cannot be loaded",
                }),
              })),
              (f[1] = e))
            : (e = f[1]),
          f[2] !== J
            ? ((t = () => {
                J()
              }),
              (f[2] = J),
              (f[3] = t))
            : (t = f[3]),
          f[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)(c.A, {
                id: "codex.space.page.attribution.retry",
                defaultMessage: "Try again",
                description: "Button that retries loading recent Page edits",
              })),
              (f[4] = n))
            : (n = f[4]),
          f[5] !== t
            ? ((r = (0, a.jsxs)("div", {
                className: "flex flex-col items-start gap-3",
                children: [e, (0, a.jsx)(U.$, { color: "secondary", size: "compact", onClick: t, children: n })],
              })),
              (f[5] = t),
              (f[6] = r))
            : (r = f[6]),
          r
        )
      }
      if (null == S || 0 === Object.keys(S.blockAttributions).length) {
        let e
        return (
          f[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(q.Q, {
                children: (0, a.jsx)(c.A, {
                  id: "codex.space.page.attribution.empty",
                  defaultMessage: "No edit details available",
                  description: "Empty state shown when a shared Page has no block-level authorship information",
                }),
              })),
              (f[7] = e))
            : (e = f[7]),
          e
        )
      }
      if (
        f[8] !== S.actorDisplays ||
        f[9] !== S.blockAttributions ||
        f[10] !== v ||
        f[11] !== w ||
        f[12] !== x ||
        f[13] !== I ||
        f[14] !== y ||
        f[15] !== _
      ) {
        let e,
          r,
          i = (t = Object.entries(S.blockAttributions).filter(Z).sort(X)).slice(0, _)
        f[22] !== x || f[23] !== I
          ? ((e = (e) => {
              let [, t] = e,
                { unit: n, value: a } = (0, D.w)(t.changed_at, I)
              return x.formatRelativeTime(-a, n, { numeric: "always", style: "narrow" })
            }),
            (f[22] = x),
            (f[23] = I),
            (f[24] = e))
          : (e = f[24])
        let s = i.map(e),
          d = (0, $.N)(i.map(Q), S.blockAttributions),
          m = null == v ? void 0 : (0, A.cr)(v),
          g = null == m ? void 0 : new Set((0, A.bg)(m))
        u = "flex flex-col gap-4"
        let h = `${w}-go-to-section`
        ;(f[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(c.A, {
              id: "codex.space.page.activity.goToSection",
              defaultMessage: "Go to section",
              description: "Tooltip for the action that scrolls the Page to the section shown in an edit preview",
            })),
            (f[25] = r))
          : (r = f[25]),
          f[26] !== h
            ? ((p = (0, a.jsx)("span", { id: h, className: "sr-only", children: r })), (f[26] = h), (f[27] = p))
            : (p = f[27]),
          (n = "flex flex-col gap-5"),
          f[28] !== x
            ? ((o = x.formatMessage({
                id: "codex.space.page.activity.recentSections",
                defaultMessage: "Recently edited sections",
                description:
                  "Accessible label for the Page edits list, which shows the latest edit to each section rather than a complete version history",
              })),
              (f[28] = x),
              (f[29] = o))
            : (o = f[29]),
          (l = d.map((e) => {
            let t,
              n,
              { attribution: r, blockId: o, index: l, endIndex: d } = e,
              u =
                S.actorDisplays.find((e) => e.account_user_id === r.actor.account_user_id)?.display_name?.trim() ||
                void 0,
              p = "agent" === r.actor.actor_type && "o" === r.actor.agent_kind,
              h = "user" === r.actor.actor_type && null != u ? r.actor.account_user_id : null
            return (
              (t =
                "agent" === r.actor.actor_type && null != u
                  ? x.formatMessage(B.P.authorizedAgent, { name: u })
                  : "user" === r.actor.actor_type && null != u
                    ? u
                    : x.formatMessage(B.P.actor, { type: r.actor.actor_type })),
              (n = p
                ? (0, a.jsx)("img", {
                    className: "block size-6 object-contain",
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    src: N,
                  })
                : "agent" === r.actor.actor_type
                  ? (0, a.jsx)(R.A, { "aria-hidden": !0 })
                  : (0, a.jsx)(V.Ve, {
                      accountUserId: h,
                      label: t,
                      children: (0, a.jsx)(F.Y, { accountUserId: h, name: t, size: "sm" }),
                    })),
              (0, a.jsx)(
                "li",
                {
                  className: "flex flex-col",
                  children: (0, a.jsx)(G.h, {
                    size: "compact",
                    avatar: n,
                    label: (0, a.jsx)(V.Ve, {
                      accountUserId: h,
                      label: t,
                      children: (0, a.jsx)("span", {
                        className: "block wrap-break-word whitespace-normal",
                        title: p ? void 0 : t,
                        children: p ? (0, a.jsx)(H._, { ownerName: u }) : t,
                      }),
                    }),
                    trailingContent: null,
                    children: (0, a.jsx)("ul", {
                      className: "flex flex-col",
                      children: i.slice(l, d + 1).map((e, t) => {
                        let [n, r] = e,
                          o = null != m && g?.has(n) ? (0, A.dQ)(m, n) : void 0,
                          i = (function (e, t) {
                            if (null == e)
                              return t.formatMessage({
                                id: "codex.space.page.activity.unavailableSection",
                                defaultMessage: "Section unavailable",
                                description: "Edit preview when the section is no longer available in the current Page",
                              })
                            let n = e
                                .replace(/^(?:[ \t]*\r?\n)+/, "")
                                .split("\n", 2)
                                .join("\n"),
                              a = (0, j.Y)(n, { extensions: [(0, P.T)()], mdastExtensions: [(0, M.C)()] }).children[0]
                            if (
                              a?.type === "table" ||
                              a?.type === "code" ||
                              a?.type === "thematicBreak" ||
                              a?.type === "html"
                            )
                              return t.formatMessage(
                                {
                                  id: "codex.space.page.activity.structuredSectionExcerpt",
                                  defaultMessage:
                                    "{type, select, table {Table} code {Code block} thematicBreak {Divider} html {HTML block} other {Section}}",
                                  description:
                                    "Plain-string edit preview used in a section link and its tooltip instead of flattening table cells, code, or HTML",
                                },
                                { type: a.type },
                              )
                            let r = (0, T.i)(n.slice(0, a?.position?.end.offset))
                            return (
                              r ||
                              (a?.type === "paragraph" &&
                              a.children.some((e) => "link" === e.type && (0, E.I0)(e.url)?.kind === "page")
                                ? t.formatMessage({
                                    id: "codex.space.page.activity.pageLinkSection",
                                    defaultMessage: "Page link",
                                    description: "Edit preview for a Page link that has no text label",
                                  })
                                : a?.type === "paragraph" && a.children.some((e) => "image" === e.type)
                                  ? t.formatMessage({
                                      id: "codex.space.page.activity.imageSection",
                                      defaultMessage: "Image",
                                      description: "Edit preview for an image without a text description",
                                    })
                                  : null == a
                                    ? t.formatMessage({
                                        id: "codex.space.page.activity.emptySection",
                                        defaultMessage: "Empty section",
                                        description: "Edit preview for an available Page section with no content",
                                      })
                                    : t.formatMessage({
                                        id: "codex.space.page.activity.sectionWithoutText",
                                        defaultMessage: "Section without text",
                                        description:
                                          "Edit preview for an available section that contains no readable text",
                                      }))
                            )
                          })(o?.text.toJSON(), x),
                          d = null != o && null != y,
                          u = s[l + t],
                          p = u === s[l + t - 1],
                          h = (0, a.jsxs)("span", {
                            className: "flex w-full items-start gap-3 py-1.5",
                            children: [
                              (0, a.jsx)("span", {
                                id: `${w}-${n}`,
                                className:
                                  "line-clamp-2 min-w-0 flex-1 text-start text-sm wrap-break-word whitespace-normal text-secondary",
                                title: i,
                                children: i,
                              }),
                              (0, a.jsxs)("span", {
                                className: "flex shrink-0 items-center gap-1 text-xs text-secondary",
                                children: [
                                  (0, a.jsx)("time", {
                                    className: "shrink-0 tabular-nums",
                                    dateTime: r.changed_at,
                                    title: x.formatDate(r.changed_at, { dateStyle: "medium", timeStyle: "short" }),
                                    children: (0, a.jsx)("span", { className: p ? "opacity-0" : void 0, children: u }),
                                  }),
                                  d
                                    ? (0, a.jsx)(z.$XR, {
                                        className:
                                          "opacity-0 group-hover/activity-section:opacity-100 group-focus-visible/activity-section:opacity-100",
                                      })
                                    : null,
                                ],
                              }),
                            ],
                          })
                        return (0, a.jsx)(
                          "li",
                          {
                            children: d
                              ? (0, a.jsx)(C.m, {
                                  content: (0, a.jsx)(c.A, {
                                    id: "codex.space.page.activity.goToSection",
                                    defaultMessage: "Go to section",
                                    description:
                                      "Tooltip for the action that scrolls the Page to the section shown in an edit preview",
                                  }),
                                  children: (0, a.jsx)(U.$, {
                                    className: "group/activity-section w-full",
                                    color: "ghostMuted",
                                    size: "inline",
                                    onClick: () => y(n),
                                    "aria-labelledby": `${w}-go-to-section ${w}-${n}`,
                                    children: h,
                                  }),
                                })
                              : (0, a.jsx)("div", { className: "flex flex-col gap-1", children: h }),
                          },
                          n,
                        )
                      }),
                    }),
                  }),
                },
                o,
              )
            )
          })),
          (f[8] = S.actorDisplays),
          (f[9] = S.blockAttributions),
          (f[10] = v),
          (f[11] = w),
          (f[12] = x),
          (f[13] = I),
          (f[14] = y),
          (f[15] = _),
          (f[16] = t),
          (f[17] = n),
          (f[18] = o),
          (f[19] = l),
          (f[20] = u),
          (f[21] = p))
      } else ((t = f[16]), (n = f[17]), (o = f[18]), (l = f[19]), (u = f[20]), (p = f[21]))
      return (
        f[30] !== n || f[31] !== o || f[32] !== l
          ? ((m = (0, a.jsx)("ul", { className: n, "aria-label": o, children: l })),
            (f[30] = n),
            (f[31] = o),
            (f[32] = l),
            (f[33] = m))
          : (m = f[33]),
        f[34] !== t.length || f[35] !== _
          ? ((g =
              t.length > _
                ? (0, a.jsx)(U.$, {
                    className: "shrink-0 justify-center",
                    color: "ghost",
                    size: "compact",
                    onClick: () => k(_ + 20),
                    children: (0, a.jsx)(c.A, {
                      id: "codex.space.page.activity.moreEdits",
                      defaultMessage: "Show more",
                      description: "Button that reveals more recently edited sections in the Page activity panel",
                    }),
                  })
                : null),
            (f[34] = t.length),
            (f[35] = _),
            (f[36] = g))
          : (g = f[36]),
        f[37] !== u || f[38] !== p || f[39] !== m || f[40] !== g
          ? ((h = (0, a.jsxs)("div", { className: u, children: [p, m, g] })),
            (f[37] = u),
            (f[38] = p),
            (f[39] = m),
            (f[40] = g),
            (f[41] = h))
          : (h = f[41]),
        h
      )
    }
    function Q(e) {
      let [t] = e
      return t
    }
    function X(e, t) {
      let [, n] = e,
        [, a] = t
      return a.changed_at.localeCompare(n.changed_at)
    }
    function Z(e) {
      let [, t] = e
      return Number.isFinite(Date.parse(t.changed_at))
    }
    function Y(e) {
      return (0, a.jsx)(
        "div",
        {
          "aria-hidden": !0,
          className: "flex flex-col",
          children: (0, a.jsx)(G.h, {
            size: "compact",
            avatar: (0, a.jsx)("div", {
              className: "size-6 shrink-0 overflow-hidden rounded-full",
              children: (0, a.jsx)(L.X, { size: "fill" }),
            }),
            label: (0, a.jsx)(L.X, { className: "w-1/2", size: "sm" }),
            trailingContent: null,
            children: (0, a.jsxs)("div", {
              className: "flex items-start gap-3",
              children: [
                (0, a.jsx)(L.P, { className: "min-w-0 flex-1", lines: 2, seed: `page-edits-${e}` }),
                (0, a.jsx)(L.X, { className: "w-12 shrink-0", size: "sm" }),
              ],
            }),
          }),
        },
        e,
      )
    }
    var J = n("e1xH"),
      ee = n("uris"),
      et = n("xs0e"),
      en = n("HFSu")
    function ea(e) {
      let t,
        n,
        o,
        l,
        u,
        m,
        g,
        h,
        f,
        v,
        y,
        b,
        x = (0, r.c)(44),
        { pageId: w, active: I, documentType: _ } = e,
        k = void 0 === _ ? "page" : _,
        S = (0, d.A)(),
        C = (0, p.tF)(),
        [A, j] = (0, s.useState)(20),
        M = (0, i.Ul)(W.spaceAccountId$),
        P = (void 0 === I || I) && C && null != M
      ;(x[0] !== w
        ? ((t = (e) => {
            let { pageParam: t, signal: n } = e
            return en.CodexRequest.safeGet("/pages/{page_id}/views", {
              parameters: { path: { page_id: w }, query: { cursor: t || void 0, limit: 20 } },
              signal: n,
            })
          }),
          (x[0] = w),
          (x[1] = t))
        : (t = x[1]),
        x[2] !== M || x[3] !== w
          ? ((n = ["space", "page-view-history", M, w]), (x[2] = M), (x[3] = w), (x[4] = n))
          : (n = x[4]),
        x[5] !== P || x[6] !== t || x[7] !== n
          ? ((o = {
              enabled: P,
              getNextPageParam: ed,
              initialPageParam: "",
              queryFn: t,
              queryKey: n,
              retry: !1,
              staleTime: 0,
            }),
            (x[5] = P),
            (x[6] = t),
            (x[7] = n),
            (x[8] = o))
          : (o = x[8]))
      let {
        data: T,
        fetchNextPage: E,
        hasNextPage: N,
        isError: q,
        isFetchingNextPage: D,
        isFetchNextPageError: z,
        isPending: L,
        refetch: O,
      } = (0, ee.q)(o)
      if (x[9] !== T?.pages || x[10] !== k || x[11] !== S || x[12] !== q || x[13] !== L || x[14] !== O || x[15] !== A) {
        let e, t
        ;((f = T?.pages.flatMap(es)),
          x[22] !== T?.pages ? ((e = new Map(T?.pages.flatMap(el))), (x[22] = T?.pages), (x[23] = e)) : (e = x[23]))
        let n = e
        x[24] !== S
          ? ((t = S.formatMessage({
              id: "codex.space.page.viewHistory.unknownPerson",
              defaultMessage: "Unknown person",
              description:
                "Privacy-safe fallback name shown when a shared Page viewer's workspace display name is unavailable",
            })),
            (x[24] = S),
            (x[25] = t))
          : (t = x[25])
        let r = t
        ;((m = "flex flex-col gap-4"),
          x[26] !== L
            ? ((g = L
                ? (0, a.jsxs)("div", {
                    role: "status",
                    children: [
                      (0, a.jsx)("span", {
                        className: "sr-only",
                        children: (0, a.jsx)(c.A, {
                          id: "codex.space.page.viewHistory.loading",
                          defaultMessage: "Loading…",
                          description: "Accessible status while the list of people who viewed a shared Page is loading",
                        }),
                      }),
                      (0, a.jsx)("div", {
                        "aria-hidden": !0,
                        className: "flex flex-col gap-2",
                        children: (0, a.jsx)("div", {
                          className: "flex flex-col",
                          children: ["w-2/3", "w-1/2", "w-3/4"].map(eo),
                        }),
                      }),
                    ],
                  })
                : null),
              (x[26] = L),
              (x[27] = g))
            : (g = x[27]),
          (h =
            q && null == f
              ? (0, a.jsxs)("div", {
                  className: "flex items-center justify-between gap-3",
                  children: [
                    (0, a.jsx)("span", {
                      className: "text-sm text-codex-description",
                      children: (0, a.jsx)(c.A, {
                        id: "codex.space.page.viewHistory.error",
                        defaultMessage: "Could not load view history",
                        description:
                          "Error shown when the owner-only list of people who viewed a shared Page cannot be retrieved",
                      }),
                    }),
                    (0, a.jsx)(U.$, {
                      color: "secondary",
                      size: "compact",
                      onClick: () => {
                        O()
                      },
                      children: (0, a.jsx)(c.A, {
                        id: "codex.space.page.viewHistory.retry",
                        defaultMessage: "Try again",
                        description:
                          "Button that retries loading the list of people who viewed a shared Page after the request failed",
                      }),
                    }),
                  ],
                })
              : null),
          (l =
            f?.length === 0
              ? (0, a.jsx)("span", {
                  className: "text-sm text-codex-description",
                  children: (0, a.jsx)(c.A, {
                    id: "codex.space.page.viewHistory.empty",
                    defaultMessage: "No views yet",
                    description: "Empty state shown when nobody has recorded a view of the current shared Page",
                  }),
                })
              : null),
          (u =
            null != f && f.length > 0
              ? (0, a.jsx)("div", {
                  className: "flex flex-col",
                  role: "list",
                  "aria-label": S.formatMessage(
                    {
                      id: "codex.space.page.viewHistory.viewers.byDocumentType",
                      defaultMessage:
                        "{documentType, select, granola_presentation {Slide viewers} granola_workbook {Sheet viewers} other {Page viewers}}",
                      description:
                        "Accessible label for the list of people who viewed the current Page. documentType selects slide, sheet, or page for the current document.",
                    },
                    { documentType: k },
                  ),
                  children: f.slice(0, A).map((e) => {
                    let t = n.has(e.account_user_id) ? e.account_user_id : null,
                      o = n.get(e.account_user_id) ?? r
                    return (0, a.jsx)(
                      "div",
                      {
                        role: "listitem",
                        children: (0, a.jsx)(G.h, {
                          size: "compact",
                          avatar: (0, a.jsx)(V.Ve, {
                            accountUserId: t,
                            label: o,
                            children: (0, a.jsx)(F.Y, { accountUserId: t, name: o, size: "sm" }),
                          }),
                          label: (0, a.jsx)(V.Ve, {
                            accountUserId: t,
                            label: o,
                            children: (0, a.jsx)("span", { title: o, children: o }),
                          }),
                          trailingContent: (0, a.jsx)("time", {
                            className: "shrink-0 text-xs text-secondary tabular-nums",
                            dateTime: e.last_viewed_at,
                            title: S.formatDate(e.last_viewed_at, { dateStyle: "medium", timeStyle: "short" }),
                            children: (0, a.jsx)(et.A, { dateString: e.last_viewed_at, format: "relative" }),
                          }),
                        }),
                      },
                      e.account_user_id,
                    )
                  }),
                })
              : null),
          (x[9] = T?.pages),
          (x[10] = k),
          (x[11] = S),
          (x[12] = q),
          (x[13] = L),
          (x[14] = O),
          (x[15] = A),
          (x[16] = l),
          (x[17] = u),
          (x[18] = m),
          (x[19] = g),
          (x[20] = h),
          (x[21] = f))
      } else ((l = x[16]), (u = x[17]), (m = x[18]), (g = x[19]), (h = x[20]), (f = x[21]))
      return (
        x[28] !== z
          ? ((v = z
              ? (0, a.jsx)("p", {
                  className: "text-sm text-secondary",
                  role: "status",
                  children: (0, a.jsx)(c.A, {
                    id: "codex.space.page.viewHistory.moreError",
                    defaultMessage: "Couldn’t load more views. Try again below.",
                    description:
                      "Message shown when loading another page of viewers fails; the existing viewers remain visible and the load-more button retries",
                  }),
                })
              : null),
            (x[28] = z),
            (x[29] = v))
          : (v = x[29]),
        x[30] !== E || x[31] !== N || x[32] !== D || x[33] !== f || x[34] !== A
          ? ((y =
              (null != f && f.length > A) || N
                ? (0, a.jsx)(U.$, {
                    className: "shrink-0 justify-center",
                    color: "ghost",
                    loading: D,
                    size: "compact",
                    onClick: () => {
                      null != f && f.length > A
                        ? j(f.length)
                        : E().then((e) => {
                            e.isError || j(er)
                          })
                    },
                    children: (0, a.jsx)(c.A, {
                      id: "codex.space.page.viewHistory.showMoreViewers",
                      defaultMessage: "Show more viewers",
                      description:
                        "Button that reveals more people who viewed a shared Page, loading the next group when needed",
                    }),
                  })
                : null),
            (x[30] = E),
            (x[31] = N),
            (x[32] = D),
            (x[33] = f),
            (x[34] = A),
            (x[35] = y))
          : (y = x[35]),
        x[36] !== l || x[37] !== u || x[38] !== v || x[39] !== y || x[40] !== m || x[41] !== g || x[42] !== h
          ? ((b = (0, a.jsxs)("div", { className: m, children: [g, h, l, u, v, y] })),
            (x[36] = l),
            (x[37] = u),
            (x[38] = v),
            (x[39] = y),
            (x[40] = m),
            (x[41] = g),
            (x[42] = h),
            (x[43] = b))
          : (b = x[43]),
        b
      )
    }
    function er(e) {
      return e + 20
    }
    function eo(e) {
      return (0, a.jsx)(
        G.h,
        {
          size: "compact",
          avatar: (0, a.jsx)("span", {
            className: "size-6 shrink-0 overflow-hidden rounded-full",
            children: (0, a.jsx)(L.X, { as: "span", size: "fill" }),
          }),
          label: (0, a.jsx)(L.X, { className: e, size: "sm" }),
          trailingContent: (0, a.jsx)(L.X, { className: "w-12 shrink-0", size: "sm" }),
        },
        e,
      )
    }
    function el(e) {
      return (e.actor_displays ?? []).map(ei)
    }
    function ei(e) {
      return [e.account_user_id, e.display_name]
    }
    function es(e) {
      return e.items
    }
    function ed(e) {
      return e.next_cursor ?? void 0
    }
    var ec = n("dN0a"),
      eu = n("pZQ9"),
      ep = n("GoVO")
    function em(e) {
      let t,
        n,
        u,
        p,
        m,
        g,
        h,
        f = (0, r.c)(34),
        {
          animation: v,
          open: y,
          documentType: b,
          versions: x,
          recovery: w,
          canViewEdits: I,
          canViewHistory: C,
          document: A,
          headerOverlay: j,
          view: M,
          onViewChange: P,
          onClose: T,
          onRevealSection: E,
          pageId: N,
        } = e,
        U = void 0 === y || y,
        q = void 0 === b ? "page" : b,
        D = void 0 === I || I,
        z = void 0 !== j && j,
        L = (0, d.A)(),
        O = (0, i.Ul)("page" === q && J.OJ),
        R = (0, s.useId)(),
        $ = (0, s.useRef)(null),
        B = (0, s.useRef)(null),
        F = (0, i.Ul)(ec.LT)
      ;(f[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = ["views", "edits", "versions", "recovery"]), (f[0] = t))
        : (t = f[0]),
        f[1] !== D || f[2] !== C || f[3] !== w || f[4] !== O || f[5] !== x
          ? ((n = t.filter(
              (e) =>
                ("views" === e && C) ||
                ("edits" === e && D) ||
                ("versions" === e && null != x) ||
                ("recovery" === e && O && null != w),
            )),
            (f[1] = D),
            (f[2] = C),
            (f[3] = w),
            (f[4] = O),
            (f[5] = x),
            (f[6] = n))
          : (n = f[6]))
      let V = n,
        W = V.includes(M) ? M : V[0]
      f[7] !== M ? ((u = [M]), (f[7] = M), (f[8] = u)) : (u = f[8])
      let [H, G] = (0, s.useState)(u)
      null == W || H.includes(W) || G([...H, W])
      let Q = null != P && V.length > 1
      return (f[9] !== V
        ? ((p = () => {
            if (null != B.current && !V.includes(B.current)) {
              B.current = null
              let e = $.current?.querySelector(
                '[role="tab"][aria-selected="true"], [data-page-activity-view]:not([hidden]) :is([role="tabpanel"], [role="region"])',
              )
              e?.focus()
            }
          }),
          (m = [V]),
          (f[9] = V),
          (f[10] = p),
          (f[11] = m))
        : ((p = f[10]), (m = f[11])),
      (0, s.useLayoutEffect)(p, m),
      null == W)
        ? null
        : (f[12] !== v ||
          f[13] !== V ||
          f[14] !== F ||
          f[15] !== Q ||
          f[16] !== A ||
          f[17] !== q ||
          f[18] !== z ||
          f[19] !== R ||
          f[20] !== L ||
          f[21] !== T ||
          f[22] !== E ||
          f[23] !== P ||
          f[24] !== U ||
          f[25] !== N ||
          f[26] !== w ||
          f[27] !== O ||
          f[28] !== W ||
          f[29] !== x ||
          f[30] !== H
            ? ((g =
                U &&
                (0, a.jsx)(_, {
                  animation: v,
                  defaultWidth: O ? 320 : void 0,
                  label: L.formatMessage(eg.title, { documentType: q }),
                  onClose: T,
                  storageKey: "pages:activity-panel-width",
                  variant: "glass",
                  children: (0, a.jsx)("div", {
                    ref: $,
                    "data-page-activity-panel": !0,
                    className: (0, o.A)("h-full min-h-0", z && "pt-[var(--viewer-header-height)]"),
                    onFocusCapture: (e) => {
                      B.current =
                        V.find(
                          (t) =>
                            e.target.id === `${R}-${t}-tab` ||
                            null != e.target.closest(`[data-page-activity-view="${t}"]`),
                        ) ?? null
                    },
                    onBlurCapture: (e) => {
                      e.currentTarget.contains(e.relatedTarget) || (B.current = null)
                    },
                    children: (0, a.jsx)("div", {
                      className: "flex h-full min-h-0 p-2 pt-px",
                      children: (0, a.jsxs)(k.kW, {
                        className:
                          "@container/app-shell-detail-panel flex min-h-0 flex-1 flex-col overflow-hidden text-default",
                        variant: "island",
                        children: [
                          (0, a.jsx)(eu.xx, {
                            title: (0, a.jsx)(c.A, { ...eg.title, values: { documentType: q } }),
                            closeLabel: L.formatMessage(
                              {
                                id: "codex.space.page.activity.close.byDocumentType",
                                defaultMessage:
                                  "{documentType, select, granola_presentation {Close slide activity} granola_workbook {Close sheet activity} other {Close page activity}}",
                                description:
                                  "Accessible label for closing the Page activity side panel. documentType selects slide, sheet, or page for the current document.",
                              },
                              { documentType: q },
                            ),
                            onClose: T,
                          }),
                          Q &&
                            (0, a.jsx)("div", {
                              className: "flex shrink-0 flex-col gap-2 px-toolbar pb-3",
                              children: (0, a.jsx)(ep.J, {
                                ariaLabel: L.formatMessage(eg.title, { documentType: q }),
                                fullWidth: "page" === q,
                                onSelect: P,
                                selectedKey: W,
                                tabs: V.map((e) => ({
                                  key: e,
                                  name: (0, a.jsx)(c.A, { ...eg[e] }),
                                  panelId: `${R}-${e}`,
                                })),
                              }),
                            }),
                          V.map((e) =>
                            (0, a.jsx)(
                              "div",
                              {
                                className: W === e ? "flex min-h-0 flex-1 flex-col" : "hidden",
                                hidden: W !== e,
                                inert: W !== e,
                                "data-page-activity-view": e,
                                children:
                                  "versions" === e || "recovery" === e
                                    ? (0, a.jsx)("div", {
                                        id: `${R}-${e}`,
                                        className: "flex min-h-0 flex-1 flex-col",
                                        role: Q ? "tabpanel" : "region",
                                        "aria-labelledby": Q ? `${R}-${e}-tab` : void 0,
                                        "aria-label": Q ? void 0 : L.formatMessage(eg[e]),
                                        tabIndex: 0,
                                        children: H.includes(e) && ("recovery" === e ? w : x),
                                      })
                                    : (0, a.jsx)(S.Q, {
                                        className: "relative grid min-h-0 flex-1 overflow-hidden",
                                        fade: "mask",
                                        scrollClassName:
                                          "min-h-0 overflow-y-auto overscroll-contain px-toolbar py-3 focus-visible:outline-2 focus-visible:outline-ring",
                                        scrollProps: {
                                          id: `${R}-${e}`,
                                          role: Q ? "tabpanel" : "region",
                                          "aria-labelledby": Q ? `${R}-${e}-tab` : void 0,
                                          "aria-label": Q ? void 0 : L.formatMessage(eg[e]),
                                          tabIndex: 0,
                                          style: { scrollPaddingBottom: F },
                                        },
                                        children: (0, a.jsx)("div", {
                                          style: { paddingBottom: F },
                                          children:
                                            H.includes(e) &&
                                            ("views" === e
                                              ? (0, a.jsx)(ea, { documentType: q, active: "views" === W, pageId: N })
                                              : (0, a.jsx)(K, { document: A, onRevealSection: E, pageId: N })),
                                        }),
                                      }),
                              },
                              e,
                            ),
                          ),
                        ],
                      }),
                    }),
                  }),
                })),
              (f[12] = v),
              (f[13] = V),
              (f[14] = F),
              (f[15] = Q),
              (f[16] = A),
              (f[17] = q),
              (f[18] = z),
              (f[19] = R),
              (f[20] = L),
              (f[21] = T),
              (f[22] = E),
              (f[23] = P),
              (f[24] = U),
              (f[25] = N),
              (f[26] = w),
              (f[27] = O),
              (f[28] = W),
              (f[29] = x),
              (f[30] = H),
              (f[31] = g))
            : (g = f[31]),
          f[32] !== g ? ((h = (0, a.jsx)(l.N, { propagate: !0, children: g })), (f[32] = g), (f[33] = h)) : (h = f[33]),
          h)
    }
    let eg = (0, u.YK)({
      title: {
        id: "codex.space.page.activity.title.byDocumentType",
        defaultMessage:
          "{documentType, select, granola_presentation {Slide activity} granola_workbook {Sheet activity} other {Page activity}}",
        description:
          "Heading for the side panel containing versions, edits, and views of the current Page. documentType selects slide, sheet, or page for the current document.",
      },
      views: {
        id: "codex.space.page.activity.views",
        defaultMessage: "Views",
        description: "Tab showing the people who viewed the current Page",
      },
      edits: {
        id: "codex.space.page.activity.edits",
        defaultMessage: "Edits",
        description: "Tab showing who last edited each section of the current Page",
      },
      versions: {
        id: "codex.space.page.activity.versions",
        defaultMessage: "Versions",
        description: "Tab showing saved Page versions and comparison controls",
      },
      recovery: {
        id: "codex.space.page.activity.recovery",
        defaultMessage: "Recovery",
        description: "Tab showing recent recovery copies saved on this device, separate from shared Page versions",
      },
    })
  },
  TGoC(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("zTeN"),
      l = n("SPnB"),
      i = n("dJBt"),
      s = n("OWtl"),
      d = n("NRR1"),
      c = n("pyoT")
    function u(e) {
      let t,
        n,
        u,
        m,
        g = (0, r.c)(15),
        { pageId: h } = e,
        f = (0, o.gh)(s.u),
        v = (0, o.Ul)(d.DO),
        y = (0, o.Ul)(l.chatGptAuthenticatedUserId$),
        { accountUserId: b } = (0, o.Ul)(l.PO)
      g[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (g[0] = t)) : (t = g[0])
      let { data: x } = (0, o._U)(c.spacePageAncestryQuery$, h, t)
      return null == v ||
        x?.metadata.access.can_read !== !0 ||
        null != x.metadata.deleted_at ||
        x?.metadata.display_metadata_included !== !1
        ? null
        : (g[1] !== v || g[2] !== b || g[3] !== h || g[4] !== y
            ? ((n = JSON.stringify([v, y, b, h])), (g[1] = v), (g[2] = b), (g[3] = h), (g[4] = y), (g[5] = n))
            : (n = g[5]),
          g[6] !== v || g[7] !== b || g[8] !== h || g[9] !== f || g[10] !== y
            ? ((u = () => {
                f.get(d.DO) === v &&
                  f.get(l.chatGptAuthenticatedUserId$) === y &&
                  f.get(l.PO).accountUserId === b &&
                  f.query.fetch(c.spacePageAncestryQuery$, h).catch(p)
              }),
              (g[6] = v),
              (g[7] = b),
              (g[8] = h),
              (g[9] = f),
              (g[10] = y),
              (g[11] = u))
            : (u = g[11]),
          g[12] !== n || g[13] !== u
            ? ((m = (0, a.jsx)(i.X, { requireVisibleAtPaint: !0, onPaint: u }, n)),
              (g[12] = n),
              (g[13] = u),
              (g[14] = m))
            : (m = g[14]),
          m)
    }
    function p() {}
    n.d(
      t,
      {},
      {
        J: function (e) {
          let t,
            n,
            l,
            i = (0, r.c)(4),
            { pageId: s } = e
          i[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (i[0] = t)) : (t = i[0])
          let { missingAncestorPageId: d } = (0, o._U)(c.spacePageContext$, s, t)
          i[1] === Symbol.for("react.memo_cache_sentinel") ? ((n = { enabled: !1 }), (i[1] = n)) : (n = i[1])
          let { data: p } = (0, o._U)(c.spacePageAncestryQuery$, s, n),
            m = p?.metadata.display_metadata_included === !1 ? s : (d ?? s)
          return (i[2] !== m ? ((l = (0, a.jsx)(u, { pageId: m })), (i[2] = m), (i[3] = l)) : (l = i[3]), l)
        },
      },
    )
  },
  uG2s(e, t, n) {
    n.d(
      t,
      {},
      {
        N: function (e, t) {
          let n,
            a = []
          for (let [r, o] of e.entries()) {
            let e = t[o],
              l = null == e ? 0 / 0 : Date.parse(e.changed_at)
            if (null == e || !Number.isFinite(l)) {
              n = void 0
              continue
            }
            let i = e.actor,
              s = n?.attribution.actor,
              d = i.account_user_id?.trim()
            if (
              null != n &&
              i.actor_type === s?.actor_type &&
              ("agent" !== i.actor_type || ("o" === i.agent_kind) == ("o" === s.agent_kind)) &&
              ("system" === i.actor_type || (d && d === s.account_user_id?.trim()))
            ) {
              ;((n.endIndex = r), l > Date.parse(n.attribution.changed_at) && (n.attribution = e))
              continue
            }
            let c = { attribution: e, blockId: o, endIndex: r, index: r }
            ;(a.push(c), (n = c))
          }
          return a
        },
      },
    )
  },
  RbH1(e, t, n) {
    let a = (0, n("Qgfj").YK)({
      authorizedAgent: {
        id: "codex.space.page.blockAttribution.authorizedAgent",
        defaultMessage: "{name}’s ChatGPT",
        description: "Page edit attribution for ChatGPT acting on behalf of the named person",
      },
      actor: {
        id: "codex.space.page.blockAttribution.actor",
        defaultMessage:
          "{type, select, agent {ChatGPT} system {System} user {A collaborator} other {Another contributor}}",
        description: "Standalone Page edit attribution when the editor’s display name is unavailable",
      },
    })
    n.d(t, {}, { P: a })
  },
  HGub(e, t, n) {
    var a = n("BD7c")
    let r = {
      blue: {
        color: "var(--color-content-blue)",
        caret: "border-content-blue",
        label: "bg-content-blue",
        selection: "bg-content-blue/15",
      },
      purple: {
        color: "var(--color-content-purple)",
        caret: "border-content-purple",
        label: "bg-content-purple",
        selection: "bg-content-purple/15",
      },
      green: {
        color: "var(--color-content-green)",
        caret: "border-content-green",
        label: "bg-content-green",
        selection: "bg-content-green/15",
      },
      yellow: {
        color: "var(--color-content-yellow)",
        caret: "border-content-yellow",
        label: "bg-content-yellow",
        selection: "bg-content-yellow/15",
      },
      red: {
        color: "var(--color-content-red)",
        caret: "border-content-red",
        label: "bg-content-red",
        selection: "bg-content-red/15",
      },
    }
    n.d(
      t,
      {},
      {
        C: function (e, t = 0) {
          return r[(0, a.$)(e, t)]
        },
      },
    )
  },
  tzqa(e, t, n) {
    n.d(t, { d: () => I, Z: () => C })
    var a = n("ABep"),
      r = n("QosV"),
      o = n("SZCv"),
      l = n.n(o),
      i = n("zTeN"),
      s = n("zd8w"),
      d = n("SPnB"),
      c = n("BD7c"),
      u = n("HNZf"),
      p = n("LNpE"),
      m = n("i1ww"),
      g = n("oXsw"),
      h = n("rTPf")
    function f() {
      return { collaborators: [] }
    }
    function v(e, t) {
      if ("reset" === t.type) return f()
      let n = new Map(e.collaborators.map((e) => [e.accountUserId, e])),
        a = new Map(t.collaborators.map((e) => [e.accountUserId, e])),
        r = t.collaborators
          .filter((e) => {
            let t = n.get(e.accountUserId)
            return null == t || t.editing !== e.editing
          })
          .sort((e, t) => e.displayName.localeCompare(t.displayName)),
        o = e.collaborators.flatMap((e) => {
          let t = a.get(e.accountUserId)
          return t?.editing === e.editing ? [t] : []
        }),
        i = [...r, ...o],
        s = [...i.filter((e) => e.editing), ...i.filter((e) => !e.editing)]
      return l()(e.collaborators, s) ? e : { collaborators: s }
    }
    var y = n("pyoT"),
      b = n("OWtl"),
      x = n("ISnp"),
      w = n("hZax")
    function I(e) {
      let t,
        n,
        a,
        o,
        l,
        c,
        g,
        h,
        b,
        x,
        I,
        C = (0, r.c)(33),
        { canShare: A, pageId: j, session: M, children: T } = e,
        E = (0, i.Ul)(y.spaceAccountId$),
        N = (0, w.Zj)("821992342")
      C[0] !== E || C[1] !== j ? ((t = { accountId: E, pageId: j }), (C[0] = E), (C[1] = j), (C[2] = t)) : (t = C[2])
      let U = (0, i._U)(!!N && m.XO, t)
      C[3] !== M ? ((n = () => M?.getSnapshot().collaborators ?? null), (C[3] = M), (C[4] = n)) : (n = C[4])
      let q = n
      C[5] !== M ? ((a = () => M?.getSnapshot().commentActor ?? null), (C[5] = M), (C[6] = a)) : (a = C[6])
      let D = a
      C[7] !== M ? ((o = () => M?.getServerSnapshot().collaborators ?? null), (C[7] = M), (C[8] = o)) : (o = C[8])
      let z = (0, s.useSyncExternalStore)(null == M ? P : M.subscribe, q, o)
      C[9] !== z || C[10] !== M
        ? ((l = () => ({
            session: M,
            source: z,
            order: null == z ? f() : v(f(), { type: "snapshot", collaborators: z }),
          })),
          (C[9] = z),
          (C[10] = M),
          (C[11] = l))
        : (l = C[11])
      let [L, O] = (0, s.useState)(l)
      ;((L.session !== M || L.source !== z) &&
        O({
          session: M,
          source: z,
          order:
            null == z
              ? f()
              : v(L.session === M ? L.order : f(), {
                  type: L.session === M ? "presence" : "snapshot",
                  collaborators: z,
                }),
        }),
        C[12] !== M ? ((c = () => M?.getServerSnapshot().commentActor ?? null), (C[12] = M), (C[13] = c)) : (c = C[13]))
      let R = (0, s.useSyncExternalStore)(null == M ? P : M.subscribe, D, c),
        $ = (0, i.Ul)(d.Kw) ?? R?.accountUserId
      C[14] !== j ? ((g = { type: "page", id: j }), (C[14] = j), (C[15] = g)) : (g = C[15])
      let B = A && null != M
      C[16] !== B ? ((h = { enabled: B }), (C[16] = B), (C[17] = h)) : (h = C[17])
      let { data: F } = (0, i._U)(u.e2, g, h),
        V = (0, i.Ul)(d.chatGptAuthenticatedUserId$)
      ;(C[18] !== j ? ((b = { type: "page", id: j }), (C[18] = j), (C[19] = b)) : (b = C[19]),
        C[20] !== E || C[21] !== b || C[22] !== V
          ? ((x = { accountId: E, userId: V, target: b }), (C[20] = E), (C[21] = b), (C[22] = V), (C[23] = x))
          : (x = C[23]))
      let W = x,
        H = (0, i.uO)(p.C, W),
        G = (0, i.Ul)(H.pendingChanges$),
        K = (0, i._U)(p.y, W),
        Q = A ? F : void 0
      if (
        C[24] !== K ||
        C[25] !== U ||
        C[26] !== T ||
        C[27] !== L.order.collaborators ||
        C[28] !== $ ||
        C[29] !== R ||
        C[30] !== G ||
        C[31] !== Q
      ) {
        let e = new Map(
            L.order.collaborators.map((e) => [
              e.accountUserId.split("__")[0],
              {
                kind: "person",
                accountUserId: e.accountUserId,
                displayName: e.displayName,
                activity: e.editing ? "editing" : "viewing",
                isCurrentUser: e.accountUserId.split("__")[0] === $?.split("__")[0],
              },
            ]),
          ),
          t = R?.accountUserId.split("__")[0]
        if (
          (null == R ||
            null == t ||
            t !== $?.split("__")[0] ||
            e.has(t) ||
            e.set(t, { ...R, kind: "person", activity: "hasAccess", isCurrentUser: !0 }),
          null != Q)
        ) {
          let t = Q.owner.principal_id,
            n = t.split("__")[0],
            a = $?.split("__")[0] === t.split("__")[0],
            r = (a ? R?.displayName : void 0) ?? Q.owner_display_name
          null == r ||
            e.has(n) ||
            e.set(n, { accountUserId: t, kind: "person", displayName: r, activity: "hasAccess", isCurrentUser: a })
          let o = new Map(Q.shares.map(S))
          for (let { change: e, share: t } of K)
            "remove" === e.action
              ? o.delete(e.shareId)
              : o.set(t.share_id, {
                  ...t,
                  status: "active",
                  recipient_display_name:
                    t.recipient_display_name ?? ("invite" === e.action ? e.invitee?.label : void 0),
                })
          for (let e of G)
            "remove" === e.action
              ? o.delete(e.shareId)
              : "invite" === e.action &&
                o.set((0, u.hk)(e.recipient), {
                  share_id: (0, u.hk)(e.recipient),
                  recipient: e.recipient,
                  role_id: e.roleId,
                  inviter: Q.owner,
                  status: "active",
                  recipient_display_name: e.invitee?.label,
                })
          for (let t of o.values()) {
            let n = t.recipient
            "active" !== t.status ||
              "principal" !== n.recipient_type ||
              "user" !== n.principal_type ||
              e.has(n.principal_id.split("__")[0]) ||
              e.set(n.principal_id.split("__")[0], {
                accountUserId: n.principal_id,
                kind: "person",
                displayName: t.recipient_display_name ?? n.principal_id,
                activity: "hasAccess",
                isCurrentUser: $?.split("__")[0] === n.principal_id.split("__")[0],
              })
          }
        }
        let n = [...e.entries()].map(k).sort(_)
        ;(U && n.unshift({ kind: "presentationAgent", displayName: "ChatGPT" }),
          (I = T(n)),
          (C[24] = K),
          (C[25] = U),
          (C[26] = T),
          (C[27] = L.order.collaborators),
          (C[28] = $),
          (C[29] = R),
          (C[30] = G),
          (C[31] = Q),
          (C[32] = I))
      } else I = C[32]
      return I
    }
    function _(e, t) {
      return Number(t.isCurrentUser) - Number(e.isCurrentUser)
    }
    function k(e) {
      let [t, n] = e
      return { ...n, personId: t, cursorColor: (0, c.$)(t) }
    }
    function S(e) {
      return [e.share_id, e]
    }
    function C(e) {
      let t,
        n,
        o,
        l,
        i = (0, r.c)(8)
      return (
        i[0] !== e ? (({ onChange: t, ...n } = e), (i[0] = e), (i[1] = t), (i[2] = n)) : ((t = i[1]), (n = i[2])),
        i[3] !== t ? ((o = (e) => (0, a.jsx)(j, { entries: e, onChange: t })), (i[3] = t), (i[4] = o)) : (o = i[4]),
        i[5] !== n || i[6] !== o
          ? ((l = (0, a.jsx)(I, { ...n, children: o })), (i[5] = n), (i[6] = o), (i[7] = l))
          : (l = i[7]),
        l
      )
    }
    let A = (0, i.i1)(b.u, (e, { get: t }) => new Map(e.map((e) => [e, t(h.tg, e)])))
    function j(e) {
      let t,
        n,
        a,
        o,
        d,
        c,
        u,
        p,
        m = (0, r.c)(22),
        { entries: h, onChange: f } = e
      m[0] !== h ? ((t = h.flatMap(M)), (m[0] = h), (m[1] = t)) : (t = m[1])
      let v = t,
        { isProfileVisible: y } = (0, x.D)()
      m[2] !== y || m[3] !== v ? ((n = y ? v : []), (m[2] = y), (m[3] = v), (m[4] = n)) : (n = m[4])
      let b = (0, i._U)(g.H, n)
      m[5] !== y || m[6] !== v || m[7] !== b
        ? ((a = y ? v.filter((e) => e !== b.accountUserId || null == b.url) : []),
          (m[5] = y),
          (m[6] = v),
          (m[7] = b),
          (m[8] = a))
        : (a = m[8])
      let w = (0, i._U)(A, a)
      if (m[9] !== w || m[10] !== h || m[11] !== b) {
        let e
        ;(m[13] !== w || m[14] !== b
          ? ((e = (e) => {
              if ("presentationAgent" === e.kind) return e
              let t = e.accountUserId === b.accountUserId ? b.url : null
              return { ...e, avatarURL: t ?? w.get(e.accountUserId) ?? null }
            }),
            (m[13] = w),
            (m[14] = b),
            (m[15] = e))
          : (e = m[15]),
          (o = h.map(e)),
          (m[9] = w),
          (m[10] = h),
          (m[11] = b),
          (m[12] = o))
      } else o = m[12]
      let I = o,
        _ = (0, s.useRef)(null)
      return (
        m[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = () => () => {
              _.current = null
            }),
            (c = []),
            (m[16] = d),
            (m[17] = c))
          : ((d = m[16]), (c = m[17])),
        (0, s.useLayoutEffect)(d, c),
        m[18] !== f || m[19] !== I
          ? ((u = () => {
              ;(_.current?.publish === f && l()(_.current.entries, I)) ||
                ((_.current = { entries: I, publish: f }), f(I))
            }),
            (p = [f, I]),
            (m[18] = f),
            (m[19] = I),
            (m[20] = u),
            (m[21] = p))
          : ((u = m[20]), (p = m[21])),
        (0, s.useLayoutEffect)(u, p),
        null
      )
    }
    function M(e) {
      return "person" === e.kind ? [e.accountUserId] : []
    }
    function P() {
      return () => {}
    }
  },
  xeTY(e, t, n) {
    n.d(t, { x: () => X })
    var a = n("ABep"),
      r = n("QosV"),
      o = n("zTeN"),
      l = n("zd8w"),
      i = n("Wf1j"),
      s = n("Qgfj"),
      d = n("oyxz"),
      c = n("HZfM"),
      u = n("n5iL"),
      p = n("EFj1"),
      m = n("rmk3"),
      g = n("bqtn"),
      h = n("GO7r"),
      f = n("Bbed"),
      v = n("UxN3"),
      y = n("em67"),
      b = n("rpnz"),
      x = n("pKVr"),
      w = n("cJbq")
    function I(e) {
      let t,
        n,
        o = (0, r.c)(6),
        { canWrite: l, editorView: i, isPageActive: s } = e
      return (
        o[0] !== l || o[1] !== i || o[2] !== s
          ? ((t = w.cW.map((e) => (0, a.jsx)(_, { canWrite: l, command: e, editorView: i, isPageActive: s }, e.id))),
            (o[0] = l),
            (o[1] = i),
            (o[2] = s),
            (o[3] = t))
          : (t = o[3]),
        o[4] !== t ? ((n = (0, a.jsx)(a.Fragment, { children: t })), (o[4] = t), (o[5] = n)) : (n = o[5]),
        n
      )
    }
    function _(e) {
      let t,
        n,
        a,
        o,
        l = (0, r.c)(12),
        { canWrite: i, command: s, editorView: d, isPageActive: c } = e
      return (
        l[0] !== s.style || l[1] !== d
          ? ((t = () => (0, w.VN)(d, s.style)), (l[0] = s.style), (l[1] = d), (l[2] = t))
          : (t = l[2]),
        l[3] !== d || l[4] !== c
          ? ((n = (e) => !d.isDestroyed && d.editable && !d.composing && c(e)), (l[3] = d), (l[4] = c), (l[5] = n))
          : (n = l[5]),
        l[6] !== d ? ((a = () => !!d.hasFocus() && void 0), (l[6] = d), (l[7] = a)) : (a = l[7]),
        l[8] !== i || l[9] !== n || l[10] !== a
          ? ((o = { enabled: i, isActive: n, keyboardHandler: a }), (l[8] = i), (l[9] = n), (l[10] = a), (l[11] = o))
          : (o = l[11]),
        (0, p.K)(s.id, t, o),
        null
      )
    }
    var k = n("Wj4L"),
      S = n("zTDg"),
      C = n("e1xH"),
      A = n("Um9I"),
      j = n("NobM"),
      M = n("eLR8"),
      P = n("sO5n"),
      T = n("M14h"),
      E = n("qLyg"),
      N = n("sX33"),
      U = n("qyu6")
    let q = (0, s.YK)({
      enable: {
        id: "codex.pages.skills.action.enable",
        defaultMessage: "Enable as skill",
        description: "Page menu action that enables this Page as a reusable skill",
      },
      readOnly: {
        id: "codex.pages.skills.action.readOnly",
        defaultMessage: "This Page is a skill",
        description: "Disabled Page menu action identifying a skill Page for a reader who cannot edit it",
      },
    })
    var D = n("SPnB"),
      z = n("SGsN"),
      L = n("svjy"),
      O = n("NRR1"),
      R = n("EqWS"),
      $ = n("kq7t"),
      B = n("pyoT"),
      F = n("OWtl"),
      V = n("HFSu")
    let W = (0, o.c4)(F.u, (e, { get: t, scope: n }) => {
      let a = t(O.DO),
        r = t(D.chatGptAuthenticatedUserId$)
      return {
        mutationKey: ["space", "page-skill", a, r, e],
        mutationFn: async ({ metadata: e, enabled: t }) => {
          if (null == a || !e.access.can_write) return
          let o = n.get(B.spacePageContext$, e.page_id)
          if (t && (!1 !== o.isSpaceRoot || void 0 === o.space)) return
          let l = (0, O.hI)(n, a, r),
            i = async (t) => {
              ;(l.signal.throwIfAborted(),
                await Promise.all([
                  n.query.cancel(B.spacePagesQuery$, { exact: !0 }),
                  n.query.cancel(B.spacePageQuery$, e.page_id, { exact: !0 }),
                ]),
                l.signal.throwIfAborted(),
                (0, R.oC)(
                  n,
                  a,
                  (n) => (n.page_id === e.page_id && n.namespace !== t ? { ...n, namespace: t } : n),
                  void 0,
                ))
            }
          try {
            ;(l.signal.throwIfAborted(), await i(t ? "skill" : null))
            let a = await V.CodexRequest.safePatch("/pages/{page_id}/metadata", {
              parameters: { path: { page_id: e.page_id } },
              requestBody: { skill: { enabled: t } },
              signal: l.signal,
            })
            ;(l.signal.throwIfAborted(), (0, $.applyPageRealtimeMetadata)(n, a.metadata), await i(a.metadata.namespace))
          } catch {
            l.signal.aborted ||
              (await i(e.namespace),
              n
                .get(z.Id)
                .danger(
                  n
                    .get(L.g)
                    .formatMessage({
                      id: "codex.pages.skills.updateFailed",
                      defaultMessage: "Couldn’t update this Page’s skill status",
                      description: "Error toast when enabling or disabling a Page as a reusable skill fails",
                    }),
                  { errorAnalytics: { toastId: "codex.pages.skills.updateFailed" } },
                ),
              await (0, B.fetchSpacePageMetadata)(n, e.page_id, { accountId: a, userId: r, signal: l.signal })
                .then(
                  ({ metadata: e }) => (
                    l.signal.throwIfAborted(),
                    (0, $.applyPageRealtimeMetadata)(n, e),
                    i(e.namespace)
                  ),
                )
                .catch(() => {}))
          } finally {
            l.stop()
          }
        },
      }
    })
    var H = n("D0Qt"),
      G = n("Emb5"),
      K = n("OMIV")
    let Q = (0, f._)(async () => (await n.e(204793).then(n.bind(n, "kDvk"))).SpaceArchiveConfirmationDialog)
    function X(e) {
      let t,
        n,
        f,
        w,
        _,
        D,
        z,
        L,
        O,
        R,
        $,
        V,
        X,
        Y,
        J,
        ee,
        et,
        en,
        ea,
        er,
        eo,
        el = (0, r.c)(119),
        {
          children: ei,
          editorView: es,
          editorElement: ed,
          getMarkdown: ec,
          metadata: eu,
          onAttributionChange: ep,
          onFloatingCommentsChange: em,
          onOpenBack: eg,
          onOpenActivity: eh,
          isScratch: ef,
          showUnavailableActions: ev,
          onShare: ey,
          onRename: eb,
          creationItems: ex,
          title: ew,
          pageId: eI,
          showAttribution: e_,
          showFloatingComments: ek,
          shortcutScope: eS,
          renderMenu: eC,
          isVisible: eA,
        } = e,
        ej = void 0 !== ef && ef,
        eM = void 0 !== ev && ev,
        eP = void 0 !== e_ && e_,
        eT = void 0 === ek || ek,
        eE = void 0 === eS ? "page" : eS,
        eN = void 0 === eA || eA,
        eU = (0, o.gh)(F.u)
      ;((0, o.Ul)(U.$),
        el[0] !== ej || el[1] !== eN || el[2] !== eu
          ? ((t = eN && !ej && null != eu && "page" === (0, k.th)(eu)),
            (el[0] = ej),
            (el[1] = eN),
            (el[2] = eu),
            (el[3] = t))
          : (t = el[3]))
      let { exportToGoogleDrive: eq, connectDialog: eD } = (0, P.i)(t)
      el[4] !== eI
        ? ((n = new URLSearchParams({ target: "page", page_id: eI })), (el[4] = eI), (el[5] = n))
        : (n = el[5])
      let ez = `?${n}`
      el[6] !== ez ? ((f = { pathname: "/codex/deeplink", search: ez }), (el[6] = ez), (el[7] = f)) : (f = el[7])
      let eL = (0, c.$P)(f),
        eO = (0, l.useRef)(null),
        [eR, e$] = (0, l.useState)(!1),
        eB = (0, o._U)(eR ? N.Zs : void 0, eI),
        eF = (0, o._U)(T.Xw, eI),
        eV = (0, i.A)(),
        eW = (0, o.Ul)(B.spaceAccountId$)
      el[8] !== eI ? ((w = (0, b.sD)(eI)), (el[8] = eI), (el[9] = w)) : (w = el[9])
      let eH = w,
        eG = (0, o._U)(B.spacePageContext$, eI),
        { isSpaceRoot: eK, space: eQ } = eG,
        eX = (0, o._U)(K.JW, "3525417893"),
        eZ = (0, o._U)(eX && eN && !ej && !eH ? W : null, eI)
      el[10] !== eu || el[11] !== eG || el[12] !== eZ
        ? ((_ =
            null == eZ || null == eu
              ? []
              : (function ({ metadata: e, context: t, saving: n, onSelect: a }) {
                  var r
                  let o, l
                  return !1 === t.isSpaceRoot &&
                    void 0 !== t.space &&
                    ((l = "skill" === (r = e).namespace),
                    r.access.can_read &&
                      ((r.layout ?? "document") === "document" || l) &&
                      (null == r.namespace || l) &&
                      (null == r.document_type || "page" === r.document_type) &&
                      null == r.site_project_id &&
                      (r.access.can_write || l) &&
                      !0)
                    ? ((o =
                        "skill" !== e.namespace
                          ? q.enable
                          : e.access.can_write
                            ? (0, s.zR)({
                                id: "codex.pages.skills.menu.disable",
                                defaultMessage: "Disable as skill",
                                description:
                                  "Page menu action that stops using this Page as a reusable skill without deleting it",
                              })
                            : q.readOnly),
                      [
                        {
                          id: "page-skill",
                          ...(0, j.XB)({ 16: h.Mjt, 20: h.zr3 }),
                          enabled: e.access.can_write && !n,
                          message: o,
                          onSelect: a,
                        },
                      ])
                    : []
                })({
                  metadata: eu,
                  context: eG,
                  saving: eZ.isPending,
                  onSelect: () => eZ.mutate({ metadata: eu, enabled: "skill" !== eu.namespace }),
                })),
          (el[10] = eu),
          (el[11] = eG),
          (el[12] = eZ),
          (el[13] = _))
        : (_ = el[13])
      let eY = _,
        eJ = (0, o.Ul)(B.pinnedSpacePageIds$),
        e0 = (0, o.Ul)(B.pinnedSpaceIds$),
        e1 = (0, o.Ul)(C.Xk),
        e2 = eN && !ej && !eH && (!0 === eK || e1) && eQ?.backing_type === "drive"
      el[14] !== e2 ? ((D = { enabled: e2 }), (el[14] = e2), (el[15] = D)) : (D = el[15])
      let e3 = (0, o._U)(x.t5, eQ?.id ?? "", D),
        e4 = eN && !0 === eK
      el[16] !== e4 ? ((z = { enabled: e4 }), (el[16] = e4), (el[17] = z)) : (z = el[17])
      let e5 = (0, o._U)(A.jy, eu ?? eI, z),
        [e6, e7] = (0, l.useState)(null),
        [e8, e9] = (0, l.useState)(null)
      el[18] !== eH || el[19] !== ej || el[20] !== eK || el[21] !== eu
        ? ((L = !ej && !eH && (0, j.un)(eu) && !1 === eK),
          (el[18] = eH),
          (el[19] = ej),
          (el[20] = eK),
          (el[21] = eu),
          (el[22] = L))
        : (L = el[22])
      let te = L
      el[23] !== eI || el[24] !== eJ
        ? ((O = eJ.includes(eI)), (el[23] = eI), (el[24] = eJ), (el[25] = O))
        : (O = el[25])
      let tt = O
      el[26] !== tt || el[27] !== eK || el[28] !== e0 || el[29] !== eQ
        ? ((R = (eK && null != eQ && e0.includes(eQ.id)) || tt),
          (el[26] = tt),
          (el[27] = eK),
          (el[28] = e0),
          (el[29] = eQ),
          (el[30] = R))
        : (R = el[30])
      let tn = R,
        ta = (0, o._U)(u.X1, "copyPageLink"),
        tr = eu?.document_type ?? "page",
        to = eK ? eQ?.id : void 0
      el[31] !== eF || el[32] !== to || el[33] !== eU
        ? (($ = () => {
            ;(0, T.CF)(eU, eF, to)
          }),
          (el[31] = eF),
          (el[32] = to),
          (el[33] = eU),
          (el[34] = $))
        : ($ = el[34])
      let tl = $
      el[35] !== ed?.current || el[36] !== es || el[37] !== eN || el[38] !== eE
        ? ((V = (e) => {
            let t = es?.dom ?? ed?.current
            if (
              !eN ||
              e?.originBrowserTab != null ||
              null == t ||
              es?.isDestroyed ||
              !t.checkVisibility() ||
              ("editor" === eE && (null != es ? !es.hasFocus() : !t.contains(t.ownerDocument.activeElement)))
            )
              return !1
            if (e?.originPanel != null)
              return (
                t
                  .closest("[data-app-shell-tab-panel-controller]")
                  ?.getAttribute("data-app-shell-tab-panel-controller") === e.originPanel
              )
            let n = t.ownerDocument.activeElement
            return n?.closest('[role="tabpanel"]') === t.closest('[role="tabpanel"]')
          }),
          (el[35] = ed?.current),
          (el[36] = es),
          (el[37] = eN),
          (el[38] = eE),
          (el[39] = V))
        : (V = el[39])
      let ti = V,
        ts = !ej && !eH
      ;(el[40] !== ti || el[41] !== ts
        ? ((X = { enabled: ts, isActive: ti }), (el[40] = ti), (el[41] = ts), (el[42] = X))
        : (X = el[42]),
        (0, p.K)("copyPageLink", tl, X),
        el[43] !== tt || el[44] !== tn || el[45] !== eK || el[46] !== eI || el[47] !== eU || el[48] !== eQ
          ? (eK && null != eQ
              ? (Y = () => (0, B.setSpacePinned)(eU, eQ.id, !tn))
              : (!1 === eK || (null == eK && null != eQ && eQ.root_page_id !== eI)) &&
                (Y = () => (0, B.setSpacePagePinned)(eU, eI, !tt)),
            (el[43] = tt),
            (el[44] = tn),
            (el[45] = eK),
            (el[46] = eI),
            (el[47] = eU),
            (el[48] = eQ),
            (el[49] = Y))
          : (Y = el[49]),
        el[50] !== eW ||
        el[51] !== te ||
        el[52] !== ta ||
        el[53] !== ex ||
        el[54] !== eL ||
        el[55] !== tr ||
        el[56] !== es ||
        el[57] !== eq ||
        el[58] !== ec ||
        el[59] !== e5 ||
        el[60] !== eV ||
        el[61] !== eH ||
        el[62] !== tn ||
        el[63] !== ej ||
        el[64] !== eK ||
        el[65] !== eR ||
        el[66] !== eu ||
        el[67] !== eB ||
        el[68] !== ep ||
        el[69] !== em ||
        el[70] !== eh ||
        el[71] !== eg ||
        el[72] !== eb ||
        el[73] !== Y ||
        el[74] !== eI ||
        el[75] !== eC ||
        el[76] !== to ||
        el[77] !== eU ||
        el[78] !== eP ||
        el[79] !== eT ||
        el[80] !== eM ||
        el[81] !== eY ||
        el[82] !== eQ ||
        el[83] !== e3 ||
        el[84] !== ew
          ? ((J = (e, t, n, r, o, l) => {
              let i = void 0 === r ? eC : r,
                c = void 0 === l ? eh : l,
                u = () => {
                  let a
                  eu?.access.can_read === !0 &&
                    null == eu.deleted_at &&
                    (eK ? null != eQ && (a = { kind: "space", id: eQ.id }) : (a = { kind: "page", id: eI }))
                  let r = (0, j.Zf)({
                    scope: eU,
                    exportToGoogleDrive: eq,
                    pageId: eI,
                    isScratch: ej,
                    showUnavailableActions: eM,
                    title: ew ?? eu?.title ?? eI,
                    canRename: void 0 === eb ? eu?.access.can_write === !0 : null != eb,
                    onRename: eb ?? void 0,
                    creationItems: [
                      ...(0, G.Qc)({
                        scope: eU,
                        page: eu,
                        pageId: eI,
                        canCreatePage: !ej && eu?.access.can_write === !0,
                        onAddSite: n,
                      }),
                      ...(ex ?? []),
                      ...eY,
                    ],
                    isPinned: tn,
                    organizationItems: ej || !1 !== eK ? [] : (0, G.C7)(eU, eI, eB),
                    reportTarget: a,
                    rootSpaceId: to,
                    getMarkdown: ec ?? void 0,
                    canCopyMarkdown: null != ec,
                    canExportDocument: null != eu && "page" === (0, k.th)(eu),
                    onShare:
                      null == t
                        ? void 0
                        : () => {
                            ;(eO.current?.isConnected && eO.current.focus({ preventScroll: !0 }), t())
                          },
                    onTogglePinned: Y,
                  })
                  if (ej || (eH && !eM)) return r
                  if (
                    (r.push({ id: "page-editor-separator", type: "separator" }),
                    null != em &&
                      r.push({
                        id: "page-floating-comments",
                        type: "checkbox",
                        checked: eT,
                        closeOnSelect: !0,
                        ...(0, j.XB)({ 16: h.TmP, 20: h.izo }),
                        message: (0, s.zR)({
                          id: "codex.space.page.comments.floating.toggle",
                          defaultMessage: "Show floating comments",
                          description:
                            "Page action menu checkbox controlling comments beside the document when the full comments sidebar is closed",
                        }),
                        onSelect: () => em(!eT),
                      }),
                    null != ep &&
                      r.push({
                        id: "page-attribution",
                        type: "checkbox",
                        checked: eP,
                        closeOnSelect: !0,
                        ...(0, j.XB)({ 16: h.JSV, 20: h.AdZ }),
                        message: (0, s.zR)({
                          id: "codex.space.page.attribution.toggle",
                          defaultMessage: "Show attribution",
                          description:
                            "Page action menu option that shows who last edited each block in the shared Page document",
                        }),
                        onSelect: () => ep(!eP),
                      }),
                    r.push({
                      id: "page-activity",
                      ...(0, j.XB)({ 16: h.KM4, 20: h.tGx }),
                      enabled: !eH && null != eW && null != c,
                      message: (0, s.zR)({
                        id: "codex.space.page.actions.activity.byDocumentType",
                        defaultMessage:
                          "{documentType, select, granola_presentation {Slide activity} granola_workbook {Sheet activity} other {Page activity}}",
                        description:
                          "Page menu action opening saved versions, recent edits, and permitted view history. documentType selects slide, sheet, or page for the current document.",
                      }),
                      messageValues: { documentType: tr },
                      onSelect: c,
                    }),
                    e &&
                      r.push({
                        id: "open-in-desktop",
                        ...(0, j.XB)({ 16: h.Som, 20: h.Pt }),
                        message: (0, s.zR)({
                          id: "codex.space.page.actions.openInDesktop",
                          defaultMessage: "Open in desktop",
                          description: "Page menu action that opens the current Page in the installed desktop app",
                        }),
                        enabled: !eH,
                        href: eH ? void 0 : eL,
                      }),
                    null != eg &&
                      r.push(
                        { id: "page-back-separator", type: "separator" },
                        {
                          id: "back-of-page",
                          message: j.Nh.backOfPage,
                          messageValues: { documentType: tr },
                          ...(0, j.XB)({ 16: h.oQS, 20: h.hXV }),
                          selectAfterClose: !0,
                          onSelect: eg,
                        },
                      ),
                    r.push(...(0, j.Sm)(te ? () => e7(eI) : void 0, eM && !eK)),
                    eK && null != eQ)
                  ) {
                    let { canArchive: e } = (0, H.lv)(e3, (0, A.wI)(eQ.interaction_mode, e5))
                    if (eU.get(B.spaceAccountId$) !== eW) return []
                    e &&
                      (r.push({ id: "space-delete-separator", type: "separator" }),
                      r.push({
                        id: "archive-space",
                        message: j.Nh.archiveSpace,
                        ...(0, j.XB)({ 16: h.cSG, 20: h.zwW }, j.lf.archive),
                        tone: "danger",
                        selectAfterClose: !0,
                        onSelect: () => e9(eQ.id),
                      }))
                  }
                  return r
                }
              return (0, a.jsx)(m.t, {
                align: "end",
                trigger: "click",
                preserveBrowserContextMenu: !0,
                disableNative: null != i,
                renderDropdown: null == i ? void 0 : (e) => i(e, eO),
                onOpenChange: (e) => {
                  ;(e$(e), e && (!ej && !1 === eK && eu?.access.can_write && E.O.prefetch(eU), o?.(!0)))
                },
                onAfterClose: () => o?.(!1),
                getItems: u,
                open: eR,
                items: eR ? u() : void 0,
                renderItem: (e) =>
                  "page-attribution" === e.id
                    ? (0, a.jsx)(g.ms.CheckboxItem, {
                        checked: eP,
                        closeOnSelect: e.closeOnSelect,
                        leftIcon: (0, a.jsx)(v.b5, { icon: { 16: h.JSV, 20: h.AdZ } }),
                        onCheckedChange: ep,
                        children: (0, a.jsx)(d.A, { ...e.message }),
                      })
                    : "page-floating-comments" === e.id
                      ? (0, a.jsx)(g.ms.CheckboxItem, {
                          checked: eT,
                          closeOnSelect: e.closeOnSelect,
                          leftIcon: (0, a.jsx)(v.b5, { icon: { 16: h.TmP, 20: h.izo } }),
                          onCheckedChange: em,
                          children: (0, a.jsx)(d.A, { ...e.message }),
                        })
                      : void 0,
                shortcuts: { "copy-page-link": ta },
                onCloseAutoFocus: (e) => {
                  es?.hasFocus() && e.preventDefault()
                },
                children: (0, a.jsx)(S.p, {
                  ref: eO,
                  onClick: Z,
                  label: eV.formatMessage(
                    {
                      id: "codex.space.page.actions.menu.byDocumentType",
                      defaultMessage:
                        "{documentType, select, granola_presentation {Slide actions} granola_workbook {Sheet actions} other {Page actions}}",
                      description:
                        "Accessible label for the shared Page header menu containing Page actions. documentType selects slide, sheet, or page for the current document.",
                    },
                    { documentType: tr },
                  ),
                  children: (0, a.jsx)(v.b5, { icon: { 16: h.l0Y, 20: h.e4G } }),
                }),
              })
            }),
            (el[50] = eW),
            (el[51] = te),
            (el[52] = ta),
            (el[53] = ex),
            (el[54] = eL),
            (el[55] = tr),
            (el[56] = es),
            (el[57] = eq),
            (el[58] = ec),
            (el[59] = e5),
            (el[60] = eV),
            (el[61] = eH),
            (el[62] = tn),
            (el[63] = ej),
            (el[64] = eK),
            (el[65] = eR),
            (el[66] = eu),
            (el[67] = eB),
            (el[68] = ep),
            (el[69] = em),
            (el[70] = eh),
            (el[71] = eg),
            (el[72] = eb),
            (el[73] = Y),
            (el[74] = eI),
            (el[75] = eC),
            (el[76] = to),
            (el[77] = eU),
            (el[78] = eP),
            (el[79] = eT),
            (el[80] = eM),
            (el[81] = eY),
            (el[82] = eQ),
            (el[83] = e3),
            (el[84] = ew),
            (el[85] = J))
          : (J = el[85]))
      let td = J
      return (
        el[86] !== es || el[87] !== ti || el[88] !== eu?.access.can_write
          ? ((ee =
              null != es && (0, a.jsx)(I, { canWrite: eu?.access.can_write === !0, editorView: es, isPageActive: ti })),
            (el[86] = es),
            (el[87] = ti),
            (el[88] = eu?.access.can_write),
            (el[89] = ee))
          : (ee = el[89]),
        el[90] !== td || el[91] !== ei || el[92] !== eh || el[93] !== ey
          ? ((et = (e) => {
              let t = (t, n, r, o) => {
                let l = void 0 === o ? eh : o
                return (0, a.jsxs)(a.Fragment, {
                  children: [null, (0, a.jsx)(a.Fragment, { children: td(!1, t, e, n, r, l) })],
                })
              }
              return (0, a.jsx)(a.Fragment, { children: null == ei ? t(ey) : ei(t) })
            }),
            (el[90] = td),
            (el[91] = ei),
            (el[92] = eh),
            (el[93] = ey),
            (el[94] = et))
          : (et = el[94]),
        el[95] !== eN || el[96] !== eI || el[97] !== et
          ? ((en = (0, a.jsx)(y.T, { pageId: eI, isVisible: eN, children: et })),
            (el[95] = eN),
            (el[96] = eI),
            (el[97] = et),
            (el[98] = en))
          : (en = el[98]),
        el[99] !== e6 || el[100] !== te || el[101] !== eN || el[102] !== eu || el[103] !== eI || el[104] !== ew
          ? ((ea =
              eN && te && e6 === eI
                ? (0, a.jsx)(M.F, {
                    pageId: eI,
                    pageTitle: ew ?? eu?.title,
                    hasChildren: eu?.has_children,
                    documentType: null == eu ? void 0 : (0, k.th)(eu),
                    onClose: () => e7(null),
                  })
                : null),
            (el[99] = e6),
            (el[100] = te),
            (el[101] = eN),
            (el[102] = eu),
            (el[103] = eI),
            (el[104] = ew),
            (el[105] = ea))
          : (ea = el[105]),
        el[106] !== e8 || el[107] !== eK || el[108] !== eN || el[109] !== eu?.title || el[110] !== eQ || el[111] !== ew
          ? ((er =
              eN && eK && null != eQ && e8 === eQ.id
                ? (0, a.jsx)(Q, {
                    spaceId: eQ.id,
                    spaceName: ew ?? eu?.title ?? eQ.name,
                    rootPageId: eQ.root_page_id,
                    onClose: () => e9(null),
                  })
                : null),
            (el[106] = e8),
            (el[107] = eK),
            (el[108] = eN),
            (el[109] = eu?.title),
            (el[110] = eQ),
            (el[111] = ew),
            (el[112] = er))
          : (er = el[112]),
        el[113] !== eD || el[114] !== ee || el[115] !== en || el[116] !== ea || el[117] !== er
          ? ((eo = (0, a.jsxs)(a.Fragment, { children: [ee, en, eD, ea, er] })),
            (el[113] = eD),
            (el[114] = ee),
            (el[115] = en),
            (el[116] = ea),
            (el[117] = er),
            (el[118] = eo))
          : (eo = el[118]),
        eo
      )
    }
    function Z(e) {
      return e.stopPropagation()
    }
  },
  sbEV(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("oyxz")
    n.d(
      t,
      {},
      {
        v: function (e) {
          let t,
            n = (0, r.c)(2),
            { documentType: l } = e,
            i = void 0 === l ? "page" : l
          return (
            n[0] !== i
              ? ((t = (0, a.jsx)(o.A, {
                  id: "pages.edit.limitExceeded.byDocumentType",
                  values: { documentType: i },
                  defaultMessage:
                    "{documentType, select, granola_presentation {That change would make this slide too large, so it was not saved} granola_workbook {That change would make this sheet too large, so it was not saved} other {That change would make this page too large, so it was not saved}}",
                  description:
                    "Explains why an oversized Page edit was rejected and will not be retried. documentType selects slide, sheet, or page for the current document.",
                })),
                (n[0] = i),
                (n[1] = t))
              : (t = n[1]),
            t
          )
        },
      },
    )
  },
  zOWn(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("zTeN"),
      l = n("DBCl"),
      i = n("oz6U"),
      s = n("jTFC")
    n.d(
      t,
      {},
      {
        r: function (e) {
          let t,
            n,
            d = (0, r.c)(6),
            { className: c, conversationId: u } = e
          d[0] !== u ? ((t = null == u ? null : (0, l.JXB)(u)), (d[0] = u), (d[1] = t)) : (t = d[1])
          let p = t,
            m = (0, o._U)(i.Hx, p),
            g = m?.avatar ?? null,
            h = p ?? "orbit-draft"
          return (
            d[2] !== c || d[3] !== g || d[4] !== h
              ? ((n = (0, a.jsx)(s.X, { className: c, avatar: g, identity: h, animated: !1 })),
                (d[2] = c),
                (d[3] = g),
                (d[4] = h),
                (d[5] = n))
              : (n = d[5]),
            n
          )
        },
      },
    )
  },
  p66p(e, t, n) {
    var a = n("zTeN"),
      r = n("DBCl"),
      o = n("E8Sp"),
      l = n("Dgwo"),
      i = n("vdpW"),
      s = n("AqHb"),
      d = n("QcW8"),
      c = n("ZU27"),
      u = n("Ow2S"),
      p = n("MrGp"),
      m = n("ZGrY"),
      g = n("n6WP"),
      h = n("rPIX"),
      f = n("YxWD"),
      v = n("pwjC"),
      y = n("jEN2"),
      b = n("ktL7"),
      x = n("Z2JT"),
      w = n("uqiN"),
      I = n("gcWI"),
      _ = n("rpnz"),
      k = n("qPPq"),
      S = n("zeCl"),
      C = n("pyoT"),
      A = n("OWtl"),
      j = n("o4oB"),
      M = n("Oj9r"),
      P = n("V3rO"),
      T = n("kfGJ"),
      E = n("dN0a"),
      N = n("eviP"),
      U = n("pZMh"),
      q = n("sjCL"),
      D = n("hOFV"),
      z = n("atZq"),
      L = n("oW9F"),
      O = n("Iq2T")
    let R = (0, a.vP)(A.u, null),
      $ = (0, a.vP)(A.u, null),
      B = (0, a.vP)(A.u, null),
      F = (0, a.vP)(A.u, null)
    function V(e, t, n) {
      let a = e.get(B)?.request
      null != a &&
        e.get(C.spacePageId$, a.pageId) === t &&
        e
          .when((e) => e.get(B)?.request !== a || n(e))
          .then(() => {
            let t = e.get(B)
            t?.request === a && null == t.threadId && e.set(B, null)
          })
    }
    let W = (0, a.vP)(A.u, null)
    async function H(
      e,
      {
        pageId: t,
        sourceId: a,
        prompt: u,
        project: m,
        isCancelled: f,
        waitForPageReady: v = !1,
        getPrompt: b,
        showTemplateThinking: _,
        onSubmitStart: A,
        onSubmitted: z,
        keepPageOpen: $ = !1,
        prefillOnly: K = !1,
        prefillOnComposerMount: Q = !1,
        signal: X,
        files: Z,
        setupInstructions: Y,
      },
    ) {
      let J,
        ee,
        et,
        en = e.get(h.Px)
      if (
        null == m &&
        e.value.persistentWorkspace?.key === "/space" &&
        null != e.get(L.$g) &&
        en?.kind === "codex" &&
        en.pageId === t &&
        en.sourceId === a &&
        e.get(q.Oh, { accountId: en.accountId, pageId: t })
      ) {
        let n, r
        if (e.get(w.qh) || f?.(e) || X?.aborted || e.get(I.cj) || 0 === u.trim().length || (!v && en.disableSubmit))
          throw new k.cS("unavailable")
        let l = en.accountId,
          i = e.get(o.gM),
          s = e.get(d.bp),
          c = !1,
          p = Symbol(),
          m = (e) => {
            let n = e.get(h.Px),
              r = n?.kind === "codex" ? n : n?.page
            return (
              e.get(w.qh) &&
              e.get(R) === p &&
              !f?.(e) &&
              !X?.aborted &&
              null == e.get(L.$g) &&
              e.get(o.gM).pathname === i.pathname &&
              e.get(o.gM).search === i.search &&
              e.get(d.bp) === s &&
              (null == r || (r.accountId === l && r.pageId === t && r.sourceId === a))
            )
          }
        if (
          !(await (0, L.s7)(
            e,
            (e) => f?.(e) === !0 || X?.aborted === !0 || e.get(w.qh) || e.get(O.o9) || e.get(d.bp) !== s,
          )) ||
          f?.(e) ||
          X?.aborted ||
          e.get(w.qh) ||
          e.get(O.o9) ||
          e.get(d.bp) !== s
        )
          throw new k.cS("unavailable")
        ;(e.set(R, p), e.set(w.qh, !0))
        let g = () => {
          e.get(R) === p && e.set(w.qh, !1)
        }
        X?.addEventListener("abort", g, { once: !0 })
        try {
          if (
            (await new Promise((t, a) => {
              ;((n = setTimeout(() => a(new k.cS("unavailable")), 3e4)),
                (r = e.watch((e) => {
                  if ((c = c || !m(e))) return void a(new k.cS("changed"))
                  let n = e.get(h.Px),
                    r = e.get(W)
                  n?.kind === "chatgpt" &&
                    null != n.page &&
                    (v || !n.disableSubmit) &&
                    r?.kind === "chatgpt" &&
                    r.conversationId === e.get(h.Mg)?.conversationId &&
                    t()
                })))
            }),
            c || !m(e))
          )
            throw new k.cS("changed")
        } finally {
          ;(clearTimeout(n), r?.(), X?.removeEventListener("abort", g), g())
        }
        en = e.get(h.Px)
      }
      if (null == m && en?.kind === "chatgpt" && null != en.page)
        return (async function (
          e,
          {
            pageId: t,
            sourceId: a,
            prompt: r,
            isCancelled: l,
            waitForPageReady: i,
            getPrompt: s,
            showTemplateThinking: c,
            onSubmitStart: u,
            onSubmitted: m,
            setupInstructions: f,
            prefillOnly: v,
            prefillOnComposerMount: b,
            signal: x,
            files: _,
          },
        ) {
          let S,
            A,
            j = e.get(h.Px),
            M = e.get(o.gM)
          if (
            e.get(w.qh) ||
            l?.(e) ||
            x?.aborted ||
            e.get(I.cj) ||
            0 === r.trim().length ||
            j?.kind !== "chatgpt" ||
            (!i && j.disableSubmit) ||
            j.page?.pageId !== t ||
            j.page.sourceId !== a
          )
            throw new k.cS("unavailable")
          if (!v && G(e)) throw new k.bD()
          let P = e.get(h.Mg),
            T = null != s && P?.hasConversation === !1 && null == P.projectId,
            E = null,
            N = Symbol()
          ;(e.set(R, N), e.set(w.qh, !0))
          let U = () => {
            e.get(R) === N && e.set(w.qh, !1)
          }
          x?.addEventListener("abort", U, { once: !0 })
          let q = !1,
            z = setTimeout(() => {
              ;((q = !0), U())
            }, 3e4)
          try {
            let I = async () => {
                let n = e.get(h.Mg),
                  r = e.get(d.bp),
                  o = (e) => {
                    let o = e.get(h.Px)
                    return (
                      q ||
                      l?.(e) === !0 ||
                      x?.aborted === !0 ||
                      e.get(R) !== N ||
                      !e.get(w.qh) ||
                      e.get(O.o9) ||
                      e.get(h.Mg) !== n ||
                      e.get(d.bp) !== r ||
                      (null != o &&
                        ("chatgpt" !== o.kind ||
                          o.page?.accountId !== j.page?.accountId ||
                          o.page?.pageId !== t ||
                          o.page.sourceId !== a))
                    )
                  }
                if (!(await (0, L.s7)(e, o)) || o(e)) throw new k.cS("unavailable")
              },
              $ = () => {
                ;(j.onNewChat?.(), (0, h.G2)(e, { preservePreviousSession: null != E, projectId: null }))
              }
            if (
              ((v ? null != P : T) ? (0, h.GR)(e) : (e.value.persistentWorkspace?.key === "/space" && (await I()), $()),
              (S = e.get(h.Mg)?.conversationId),
              null == S)
            )
              throw new k.cS("unavailable")
            e.set(g.C, S, (e) =>
              e?.presentation === "minimized" ? { ...e, presentation: e.restorePresentation ?? "compact" } : e,
            )
            let B = (e) => {
                let { get: n } = e,
                  r = n(h.Px),
                  s =
                    n(o.gM).pathname === M.pathname ||
                    (M.pathname?.startsWith("/space/local-page-") === !0 &&
                      n(C.spacePageId$, M.pathname.slice(7)) === t &&
                      n(o.gM).pathname === `/space/${t}`)
                return (
                  !q &&
                  !l?.(e) &&
                  n(w.qh) &&
                  n(R) === N &&
                  s &&
                  (n(o.gM).search ?? "") === (M.search ?? "") &&
                  (null == r ||
                    ("chatgpt" === r.kind &&
                      (i || !r.disableSubmit) &&
                      r.page?.accountId === j.page?.accountId &&
                      r.page?.pageId === t &&
                      r.page.sourceId === a)) &&
                  n(h.Mg)?.conversationId === S &&
                  n(h.kY)
                )
              },
              F = (e) => B(e) && (v || T || !G(e))
            if (v && b && null == s) {
              let t, n
              try {
                await new Promise((a) => {
                  let o = !1,
                    l = !1,
                    i = (e) => {
                      if (!o && !l) {
                        l = !0
                        try {
                          if (!F(e)) {
                            ;((o = !0), a())
                            return
                          }
                          let t = `chatgpt:${S}`,
                            n = (0, y.VT)(t, r)
                          if ("unavailable" === n) return
                          ;((o = !0), (0, y.te)(t), a())
                        } finally {
                          l = !1
                        }
                      }
                    }
                  ;((t = e.watch(i)), (n = (0, y.cM)(() => i(e))))
                })
              } finally {
                ;(t?.(), n?.())
              }
              if (q) throw new k.cS("unavailable")
              return
            }
            let H = e.get(W)
            for (;;) {
              if (
                (await e.when((e) => {
                  let t = e.get(W)
                  return !F(e) || (e.get(h.Px)?.disableSubmit === !1 && t?.kind === "chatgpt" && t.conversationId === S)
                }),
                q)
              )
                throw new k.cS("unavailable")
              if (null != _ && !v && B(e) && G(e)) throw new k.bD()
              if (!F(e)) {
                if (null != s) throw new k.cS("changed")
                return
              }
              if (
                ((H = e.get(W)), e.get(h.Px)?.disableSubmit === !1 && H?.kind === "chatgpt" && H.conversationId === S)
              )
                break
            }
            if ((clearTimeout(z), null != s && (await e.when((e) => !F(e) || null != s(e))), !v && T && F(e) && G(e))) {
              if (
                ((E = e.get(h.Mg)),
                (z = setTimeout(() => {
                  ;((q = !0), U())
                }, 3e4)),
                e.value.persistentWorkspace?.key === "/space" && (await I()),
                $(),
                (S = e.get(h.Mg)?.conversationId),
                null == S)
              )
                throw new k.cS("unavailable")
              await e.when((e) => {
                let t = e.get(W)
                return !F(e) || (t?.kind === "chatgpt" && t.conversationId === S)
              })
            }
            if (((H = e.get(W)), null != _ && !v && B(e) && G(e))) throw new k.bD()
            if (
              !F(e) ||
              (!v && G(e)) ||
              e.get(h.Px)?.disableSubmit !== !1 ||
              H?.kind !== "chatgpt" ||
              H.conversationId !== S
            ) {
              if (null != s) throw new k.cS("changed")
              return
            }
            let K = null == s ? r : s(e)
            if (null == K) throw new k.cS("changed")
            if (v) {
              let t = `chatgpt:${S}`
              if (!G(e) && !(0, y.Nl)(t, (e, t) => (t ? e : K))) throw new k.cS("unavailable")
              ;(0, y.te)(t)
              return
            }
            let Q = !1,
              X = ({ get: e }) => {
                let t = (0, p.QN)(e(p.F1, S))
                return (Q = Q || t) && !t
              }
            ;(V(e, t, X),
              c && (A = (0, D._i)(e, t, { getConversationId: () => null, isFinished: X })),
              null == _ && u?.())
            let Z = !1
            if (
              !(await H.submit(K, {
                isSubmissionCurrent: () => F(e) && !G(e) && e.get(h.Px)?.disableSubmit === !1,
                extraDeveloperInstructions: null == f ? void 0 : [f],
                onCompletionStart:
                  null == s && null == _
                    ? void 0
                    : () => {
                        ;((Z = !0), null != _ && u?.())
                      },
                ...(null == _ ? {} : { submissionIntent: "prepared_action", preserveDraft: !0, fileUploadIds: [] }),
                attachmentPreparation:
                  null == _
                    ? void 0
                    : {
                        mimeTypes: _.map((e) => e.type),
                        prepare: async (t) => {
                          let { uploadChatGptConversationFile: a } = await Promise.resolve().then(n.bind(n, "uLW7")),
                            r = [x, t].filter((e) => null != e),
                            o = AbortSignal.any(r)
                          return Promise.all(
                            _.map((t) =>
                              a(e, t, {
                                storeInLibrary: !1,
                                signal: o,
                                beforeRequest: () => {
                                  if ((o?.throwIfAborted(), !F(e))) throw new k.cS("changed")
                                },
                              }),
                            ),
                          )
                        },
                      },
              }))
            )
              throw new k.cS(null != s && !Z ? "not-sent" : "unavailable")
            m?.()
          } catch (e) {
            throw (A?.(), e)
          } finally {
            ;(clearTimeout(z),
              x?.removeEventListener("abort", U),
              U(),
              null != E && e.get(h.Mg)?.conversationId === S && e.set(h.Mg, E))
          }
        })(e, {
          pageId: t,
          sourceId: a,
          prompt: u,
          project: m,
          isCancelled: f,
          waitForPageReady: v,
          getPrompt: b,
          showTemplateThinking: _,
          onSubmitStart: A,
          onSubmitted: z,
          setupInstructions: Y,
          prefillOnly: K,
          prefillOnComposerMount: Q,
          signal: X,
          files: Z,
        })
      let ea = e.get(h.rp),
        er = e.get(N.q),
        eo = er?.getSession(e),
        el = e.get(W),
        ei = el?.kind === "codex" && el.session.clientThreadId === ea?.clientThreadId && el.hasUnsentContent()
      if (null != Z && ei) throw new k.bD()
      let es = null != b && null == er && ea?.hasConversation === !1 && null == ea.conversationId && !ei
      if (
        e.get(w.qh) ||
        f?.(e) ||
        X?.aborted ||
        e.get(I.cj) ||
        0 === u.trim().length ||
        en?.kind !== "codex" ||
        (!v && en.disableSubmit) ||
        en.pageId !== t ||
        en.sourceId !== a ||
        (null != er
          ? eo?.accountId !== en.accountId
          : ea?.sourceId !== a || ea.pageId !== t || ea.accountId !== en.accountId)
      )
        throw new k.cS("unavailable")
      let ed = e.get(d.bp)
      if (
        null != er &&
        K &&
        null != e.get(L.$g) &&
        (!(await (0, L.s7)(
          e,
          (e) => f?.(e) === !0 || X?.aborted === !0 || e.get(w.qh) || e.get(O.o9) || e.get(d.bp) !== ed,
        )) ||
          f?.(e) ||
          X?.aborted ||
          e.get(w.qh) ||
          e.get(O.o9) ||
          e.get(d.bp) !== ed ||
          er.getSession(e) !== eo)
      )
        throw new k.cS("unavailable")
      let ec = Symbol()
      ;(e.set(R, ec), e.set(w.qh, !0))
      let eu = () => {
        e.get(R) === ec && e.set(w.qh, !1)
      }
      X?.addEventListener("abort", eu, { once: !0 })
      let ep = !1
      try {
        ;((null != er || void 0 !== m || v) &&
          (J = setTimeout(() => {
            ;((ep = !0), eu())
          }, 3e4)),
          null != er || K || es || (0, I.hp)(e, a),
          null == er && (0, h.GR)(e))
        let p = null != er ? eo : e.get(h.rp)
        if (
          (null == er ||
            K ||
            (p = await er.prepareFreshChat(
              e,
              (t) =>
                ep ||
                t.get(R) !== ec ||
                f?.(t) === !0 ||
                !t.get(w.qh) ||
                t.get(d.bp) !== ed ||
                t.get(o.gM).pathname !== e.value.pathname ||
                (t.get(o.gM).search ?? "") !== (e.value.search ?? ""),
            )),
          ep || null == p)
        )
          throw new k.cS("unavailable")
        let g = p
        if (null != er) {
          let n = (0, P.f3)(e, g.clientThreadId),
            a = (0, M.YP)(n, (0, M.hf)(e.value))
          if (null == a) throw new k.cS("unavailable")
          ee = a.watch(({ get: e }) => {
            let n = e(c.It.activeTab$),
              a = n?.tabType.kind === S.E ? S.T.safeParse(n.props) : null
            ;(e(U.dS) &&
              a?.success === !0 &&
              a.data.accountId === g.accountId &&
              e(C.spacePageId$, a.data.pageId) === e(C.spacePageId$, t)) ||
              eu()
          })
        }
        let N = (n) => {
          if (!n.get(w.qh) || n.get(R) !== ec || ep || f?.(n)) return !1
          let { get: r } = n
          if (null != er) {
            let t = er.getSession(n)
            return (
              r(o.gM).pathname === e.value.pathname &&
              (r(o.gM).search ?? "") === (e.value.search ?? "") &&
              null != t &&
              t.accountKey === eo?.accountKey &&
              t.accountId === g.accountId &&
              t.clientThreadId === g.clientThreadId
            )
          }
          let l = r(h.Px)
          return (
            ((v && null == l) ||
              (l?.kind === "codex" &&
                (v || !l.disableSubmit) &&
                l.sourceId === a &&
                l.pageId === t &&
                l.accountId === g.accountId)) &&
            r(h.rp)?.clientThreadId === g.clientThreadId &&
            r(h.kY)
          )
        }
        if (K && Q && void 0 === m && null == b) {
          let n, r
          try {
            await new Promise((o) => {
              let l = !1,
                i = !1,
                s = (e) => {
                  if (!l && !i) {
                    i = !0
                    try {
                      if (!N(e)) {
                        ;((l = !0), o())
                        return
                      }
                      let n = e.get(null != er ? F : h.rp)
                      if (
                        n?.clientThreadId !== g.clientThreadId ||
                        n.pageId !== t ||
                        n.accountId !== g.accountId ||
                        n.sourceId !== a
                      )
                        return
                      let r = (0, y.VT)(g.clientThreadId, u)
                      if ("unavailable" === r) return
                      ;((l = !0), null == er && (0, w.gP)(e, t, null), (0, y.te)(g.clientThreadId), o())
                    } finally {
                      i = !1
                    }
                  }
                }
              ;((n = e.watch(s)), (r = (0, y.cM)(() => s(e))))
            })
          } finally {
            ;(n?.(), r?.())
          }
          if (ep) throw new k.cS("unavailable")
          return
        }
        let q = (e) => void 0 === m || (null == m ? null == e : e?.type === m.type && e.projectId === m.projectId),
          L = () => {
            let t = e.get(W)
            return t?.kind === "codex" && t.session.clientThreadId === g.clientThreadId && t.hasUnsentContent()
          },
          O = async (n) => {
            if (n && L()) return !1
            if (void 0 !== m) {
              if (
                (await e.when((e) => {
                  let n = e.get(W)
                  return (
                    !N(e) ||
                    (n?.kind === "codex" &&
                      n.session.clientThreadId === g.clientThreadId &&
                      n.session.pageId === t &&
                      n.session.accountId === g.accountId &&
                      null != n.submit)
                  )
                }),
                n && L())
              )
                return !1
              let a = e.get(W)
              if (
                !N(e) ||
                a?.kind !== "codex" ||
                a.session.clientThreadId !== g.clientThreadId ||
                a.session.accountId !== g.accountId ||
                a.session.pageId !== t ||
                null == a.submit
              )
                throw new k.cS(ep ? "unavailable" : "changed")
              a.scope.set(j.G, g.clientThreadId, m)
            }
            return (
              await e.when((e) => {
                let n = e.get(W),
                  a = e.get(null != er ? F : h.rp)
                return (
                  !N(e) ||
                  (e.get(h.Px)?.disableSubmit === !1 &&
                    n?.kind === "codex" &&
                    n.session.clientThreadId === g.clientThreadId &&
                    n.session.pageId === t &&
                    n.session.accountId === g.accountId &&
                    null != n.submit &&
                    a?.clientThreadId === g.clientThreadId &&
                    a.pageId === t &&
                    a.accountId === g.accountId &&
                    a.sourceId === n.session.sourceId &&
                    q(n.project))
                )
              }),
              !n || !L()
            )
          },
          H = () => {
            if (!N(e)) throw new k.cS(ep ? "unavailable" : "changed")
            ;(clearTimeout(J),
              (J = setTimeout(() => {
                ;((ep = !0), eu())
              }, 3e4)),
              (0, I.hp)(e, a),
              (0, h.GR)(e))
            let t = e.get(h.rp)
            if (null == t) throw new k.cS("unavailable")
            g = t
          },
          G = !K && es
        if (
          ((await O(G)) || (H(), (G = !1), await O(!1)),
          clearTimeout(J),
          ep ||
            (null != b && (await e.when((e) => !N(e) || null != b(e))),
            G && L() && (H(), await O(!1), clearTimeout(J), ep)))
        )
          throw new k.cS("unavailable")
        let en = e.get(W),
          ea = e.get(null != er ? F : h.rp)
        if (
          !N(e) ||
          e.get(h.Px)?.disableSubmit !== !1 ||
          en?.kind !== "codex" ||
          en.session.clientThreadId !== g.clientThreadId ||
          null == en.submit ||
          !q(en.project) ||
          ea?.clientThreadId !== g.clientThreadId ||
          ea.pageId !== t ||
          ea.accountId !== g.accountId ||
          en.session.pageId !== t ||
          en.session.accountId !== ea.accountId ||
          en.session.sourceId !== ea.sourceId
        ) {
          if (void 0 !== m) throw new k.cS("changed")
          return
        }
        ;(ee?.(), (ee = void 0))
        let el = null == b ? u : b(e)
        if (null == el) throw new k.cS("changed")
        if (null != Z && !K && en.hasUnsentContent()) throw new k.bD()
        if ((null != er && $ && (en.scope.set(x.H_, "expanded"), en.scope.get(E.Bd) || (0, E.zF)(en.scope)), K)) {
          if (!en.hasUnsentContent() && !(0, y.Nl)(g.clientThreadId, (e, t) => (t ? e : el)))
            throw new k.cS("unavailable")
          ;(null == er && (0, w.gP)(en.scope, t, null), (0, y.te)(g.clientThreadId))
          return
        }
        let ei = !1,
          em = !1,
          eg = ({ get: e }) => ((0, r.L$F)(g.clientThreadId) ? e(P.Tl, g.clientThreadId) : g.conversationId),
          eh = (e) => {
            let { get: t } = e,
              n = eg(e),
              a = t(i.M, null == n ? null : { hostId: T.fI, threadId: n })?.[0],
              r = t(i.OM, a ?? null)
            return null != r && "inProgress" !== r
          }
        ;(V(e, t, eh), _ && (et = (0, D._i)(e, t, { getConversationId: eg, isFinished: eh })), null == Z && A?.())
        let ef = en.submit({
          onSubmitted: () => {
            ;((ei = !0), z?.())
          },
          onNotSent: () => {
            em = !0
          },
          firstTurnReasoningEffort: "low",
          focusComposerAfterSubmit: !0,
          literalPrompt: !0,
          persistedPromptRawOverride: el,
          promptRawOverride: el,
          prepareFileAttachments:
            null == Z
              ? void 0
              : async (t, a) => {
                  let r,
                    o = () => !N(e) || en.hasUnsentContent()
                  if (o()) throw new k.cS("changed")
                  if ("durable" === (0, s._)(a)) {
                    let { uploadFileAttachment: e } = await n.e(834985).then(n.bind(n, "xa8Q")),
                      a = new AbortController()
                    r = {
                      fileAttachments: [],
                      uploadedFileAttachments: await Promise.all(
                        Z.map(async (n) => ({
                          upload: await e({
                            scope: t,
                            file: n,
                            onIdentityChanged: () => a.abort(),
                            shouldDiscard: o,
                            signal: null == X ? a.signal : AbortSignal.any([X, a.signal]),
                          }),
                        })),
                      ),
                    }
                  } else {
                    let { createBrowserFileAttachmentDescriptors: e } = await n.e(692003).then(n.bind(n, "mt4D"))
                    r = { fileAttachments: await e(Z, (e) => (0, l.V)(t, a).createFileAttachment(e)) }
                  }
                  if (o()) throw new k.cS("changed")
                  return (A?.(), r)
                },
          additionalContextOverride: null == Y ? void 0 : { codex_apps_page_setup: { kind: "application", value: Y } },
          skipGoalSubmit: !0,
          turnTrigger: "page_prompt",
        })
        ;(null == er && (0, w.gP)(en.scope, t, null), await ef, ei || et?.())
        let ev = e.get(B)
        if ((ei || null == ev || e.get(C.spacePageId$, ev.request.pageId) !== t || e.set(B, null), null != b && !ei)) {
          if (em) throw new k.cS("not-sent")
          throw new k.A_()
        }
      } catch (e) {
        throw (et?.(), e)
      } finally {
        ;(clearTimeout(J), ee?.(), X?.removeEventListener("abort", eu), eu())
      }
    }
    function G(e) {
      let t = e.get(h.Mg)?.conversationId
      return (
        null != e.get(b.B) ||
        (null != t &&
          (e.get(u.Od, t).length > 0 ||
            e.get(u.sk, t).length > 0 ||
            e.get(u.Qc, t).length > 0 ||
            e.get(v.$B, t).length > 0 ||
            e.get(m.rT, t).length > 0))
      )
    }
    let K = (0, a.i1)(A.u, (e, { get: t }) => {
        let n = t(W),
          a = t(C.spaceAccountId$),
          r = t(C.spacePageId$, e)
        if (n?.kind === "codex") return n.session.accountId === a && n.session.pageId === r ? n : null
        let o = t(h.Px)
        return n?.kind === "chatgpt" &&
          n.conversationId === t(h.Mg)?.conversationId &&
          o?.kind === "chatgpt" &&
          o.page?.accountId === a &&
          o.page?.pageId === r
          ? n
          : null
      }),
      Q = (0, a.i1)(A.u, (e, { get: t }) => {
        let n = t(K, e)
        return null == n ? null : "codex" === n.kind ? n.session.clientThreadId : "chatgpt:" + n.conversationId
      }),
      X = (0, a.i1)(A.u, (e, { get: t }) => {
        let n = t(Q, e)
        return null != n && (t(f.tu)["composer.addFiles"]?.some((e) => e.composerId === n) ?? !1)
      }),
      Z = (0, a.i1)(A.u, (e, { get: t }) => t(K, e)?.sourceActions ?? null)
    n.d(
      t,
      { QX: () => w.QX },
      {
        F2: async function (e, { accountId: t, pageId: n }, a) {
          if (!e.get(z.kJ)) return
          let o = AbortSignal.any([a, AbortSignal.timeout(3e4)]),
            l = async (a) => {
              let l = (0, r.udX)(),
                i = e.watch((e) => {
                  let r,
                    o,
                    i,
                    s =
                      ((r = e.get(w.Tb)),
                      (o = e.get(h.Px)),
                      (i = o?.kind === "codex" ? o : o?.page),
                      r?.context === o && i?.accountId === t && i.pageId === e.get(C.spacePageId$, n) ? r.scope : null)
                  return s?.watch((e) => {
                    a(e) && l.resolve(s)
                  })
                })
              try {
                return await (0, r._qC)(l.promise, o)
              } finally {
                i()
              }
            },
            i = await l((e) => {
              if (e.get(h.Px)?.kind === "chatgpt") return !0
              let t = e.get(N.q),
                n = e.get(F)
              return !e.get(O.o9) && null != t && null != n && n.clientThreadId === t.getSession(e)?.clientThreadId
            })
          if ((o.throwIfAborted(), i.get(h.Px)?.kind === "chatgpt")) return
          let s = i.get(N.q)
          if (null == s) throw new k.cS("changed")
          let d = await (0, r._qC)(
            s.prepareFreshChat(i, () => o.aborted),
            o,
          )
          if (null == d) throw new k.cS("changed")
          let c = await l((e) => e.value.clientThreadId === d.clientThreadId)
          ;(o.throwIfAborted(), c.set(x.H_, "expanded"), c.get(E.Bd) || (0, E.zF)(c))
        },
        LL: B,
        Mr: $,
        Ow: Z,
        SO: async function (e, t, n) {
          let a,
            r,
            o,
            l = !1,
            i = !1,
            s = (e) => (l = t.signal?.aborted === !0 || n(e) || l),
            d = (e) => {
              let n = e.get(w.Tb),
                a = e.get(h.Px)
              if (null == n || n.context !== a) return null
              let r = a?.kind === "codex" ? a : a?.page
              if (r?.pageId !== t.pageId || r.accountId !== t.accountId) return null
              if (a?.kind === "codex") {
                let a = n.scope.get(N.q),
                  o = null != a ? a.getSession(n.scope) : e.get(h.rp),
                  l = e.get(W)
                if (
                  null != t.files &&
                  (l?.kind !== "codex" ||
                    l.session.pageId !== t.pageId ||
                    l.session.accountId !== t.accountId ||
                    l.session.clientThreadId !== o?.clientThreadId)
                )
                  return null
                let i = e.get(F)
                if (
                  o?.accountId !== t.accountId ||
                  (null != a
                    ? i?.pageId !== t.pageId || i.accountId !== t.accountId || i.clientThreadId !== o.clientThreadId
                    : e.get(h.rp)?.sourceId !== r.sourceId)
                )
                  return null
              } else if (null != t.project || null == e.get(h.Mg)) return null
              return { scope: n.scope, sourceId: r.sourceId }
            }
          try {
            await new Promise((n, l) => {
              a = setTimeout(() => l(new k.cS("unavailable")), 3e4)
              let c = () => n()
              ;(t.signal?.addEventListener("abort", c, { once: !0 }),
                (o = () => t.signal?.removeEventListener("abort", c)),
                (r = e.watch((e) => {
                  let a = e.get(h.rp)
                  ;(i ||
                    e.get(z.kJ) ||
                    s(e) ||
                    a?.pageId !== t.pageId ||
                    a.accountId !== t.accountId ||
                    ((i = !0), (0, h.GR)(e)),
                    (s(e) || null != d(e)) && n())
                })))
            })
            let n = d(e)
            if (s(e) || null == n) throw new k.cS("unavailable")
            await H(n.scope, {
              pageId: t.pageId,
              sourceId: n.sourceId,
              prompt: t.prompt,
              setupInstructions: t.setupInstructions,
              project: t.project,
              keepPageOpen: t.keepPageOpen,
              prefillOnly: t.prefillOnly,
              prefillOnComposerMount: t.prefillOnComposerMount,
              signal: t.signal,
              files: t.files,
              isCancelled: s,
              waitForPageReady: !0,
              getPrompt: t.getPrompt,
              showTemplateThinking: t.showTemplateThinking,
              onSubmitStart: t.onSubmitStart,
              onSubmitted: t.onSubmitted,
            })
          } finally {
            ;(clearTimeout(a), r?.(), o?.())
          }
        },
        _k: function (e, t, n, a) {
          let r = { kind: "chatgpt", conversationId: t, submit: n, sourceActions: a }
          return (
            e.set(W, r),
            () => {
              e.get(W) === r && e.set(W, null)
            }
          )
        },
        e6: function (e, t) {
          let n = e.get(o.gM)
          ;(e.set(B, { request: t, threadId: null }),
            e
              .when(({ get: e }) => {
                let a = e(o.gM).pathname
                return (
                  e(B)?.request !== t ||
                  e(C.spaceAccountId$) !== t.accountId ||
                  (e(o.gM) !== n && a !== `/space/${t.pageId}` && a !== `/space/${e(C.spacePageId$, t.pageId)}`)
                )
              })
              .then(() => {
                e.get(B)?.request === t && e.set(B, null)
              }))
        },
        ee: function (e, t) {
          let n = e.get(W),
            a = e.get(h.Px)
          if (n?.kind !== "codex" || a?.kind !== "codex" || a.accountId !== e.get(C.spaceAccountId$)) return null
          let r = n.scope.get(N.q),
            o = null != r ? r.getSession(n.scope) : e.get(h.rp)
          return n.session.pageId === t &&
            a.pageId === t &&
            n.session.accountId === a.accountId &&
            n.session.sourceId === a.sourceId &&
            n.session.clientThreadId === o?.clientThreadId
            ? n.getModelSelection()
            : null
        },
        hN: X,
        iY: H,
        oD: async function (e, t, n) {
          let a = e.get(C.spaceAccountId$)
          if (null == a || "" === n.trim()) return
          if ((0, _.sD)(t)) {
            let n = e.get(o.gM),
              l = (0, r.udX)(),
              i = !1,
              s = e.watch(({ get: e }) => {
                let r = e(o.gM).pathname
                i =
                  i ||
                  e(C.spaceAccountId$) !== a ||
                  (e(o.gM) !== n && r !== `/space/${t}` && r !== `/space/${e(C.spacePageId$, t)}`)
                let s = e(w.Tb),
                  d = e(h.Px),
                  c = d?.kind === "codex" ? d : d?.page
                ;(i ||
                  (s?.context === d &&
                    c?.accountId === a &&
                    c.pageId === e(C.spacePageId$, t) &&
                    !(0, _.sD)(c.pageId))) &&
                  l.resolve(void 0)
              })
            try {
              await (0, r._qC)(l.promise, AbortSignal.timeout(3e4))
            } finally {
              s()
            }
            if (i) return
          }
          let l = e.get(w.Tb),
            i = e.get(h.Px),
            s = i?.kind === "codex" ? i : i?.page
          if (
            e.get(C.spaceAccountId$) !== a ||
            null == i ||
            null == l ||
            l.context !== i ||
            s?.pageId !== e.get(C.spacePageId$, t) ||
            s.accountId !== e.get(C.spaceAccountId$)
          )
            return
          let d = l.scope.get(N.q)
          ;("chatgpt" === i.kind
            ? e.get(h.Mg)?.hasConversation
            : null != d
              ? d.getSession(l.scope)?.conversationId != null
              : e.get(h.rp)?.hasConversation) ||
            ((0, E.gm)(l.scope),
            await H(l.scope, {
              pageId: s.pageId,
              sourceId: s.sourceId,
              prompt: n,
              prefillOnly: !0,
              prefillOnComposerMount: !0,
              waitForPageReady: !0,
              isCancelled: (e) => e.get(C.spaceAccountId$) !== s.accountId,
            }))
        },
        rV: function (e, t, n) {
          let a = e.get(Q, t)
          return null != a && "unavailable" !== (0, y.VT)(a, n)
        },
        rY: Q,
        vy: function (e, t) {
          let n = null == t ? null : { ...t }
          return (
            e.set(F, n),
            () => {
              e.get(F) === n && e.set(F, null)
            }
          )
        },
        xT: function (e, t, n, a = () => null, r = null, o = () => !1, l) {
          let i = e.get(N.q)
          if (null != i && i.getSession(e)?.clientThreadId !== t.clientThreadId) return () => {}
          let s = {
            scope: e,
            kind: "codex",
            session: t,
            submit: n,
            getModelSelection: a,
            hasUnsentContent: o,
            project: r,
            sourceActions: l,
          }
          return (
            e.set(W, s),
            () => {
              if (e.get(W) === s) {
                let n = a()
                e.set(W, {
                  scope: e,
                  kind: "codex",
                  session: t,
                  submit: null,
                  project: r,
                  getModelSelection: () => n,
                  hasUnsentContent: o,
                })
              }
            }
          )
        },
      },
    )
  },
  ZhLA(e, t, n) {
    n.d(t, { p: () => _ })
    var a = n("ABep"),
      r = n("QosV"),
      o = n("wTzC"),
      l = n("zTeN"),
      i = n("zd8w"),
      s = n("oyxz"),
      d = n("HdXD"),
      c = n("zKCW"),
      u = n("ygO2"),
      p = n("uuN8"),
      m = n("lznL"),
      g = n("JNtf"),
      h = n("mUDD"),
      f = n("NraH"),
      v = n("hTEq"),
      y = n("OWtl")
    function b(e) {
      let t,
        n,
        o,
        l = (0, r.c)(11),
        { source: d, session: c, notice: p, fromSyncNotice: m, visible: g, onReverted: h } = e,
        f = void 0 !== m && m,
        v = void 0 === g || g,
        y = (0, i.useSyncExternalStore)(d.subscribe, d.getEngineControls, x),
        [b, I] = (0, i.useState)(!1)
      return null == y
        ? null
        : (l[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(u.$, {
                color: "danger",
                size: "recoveryAction",
                type: "button",
                onClick: () => I(!0),
                children: (0, a.jsx)(s.A, {
                  id: "codex.space.page.revert.open",
                  defaultMessage: "Revert",
                  description:
                    "Short Page action that opens confirmation before discarding local edits and loading the last saved server version",
                }),
              })),
              (l[0] = t))
            : (t = l[0]),
          l[1] !== b || l[2] !== y || l[3] !== f || l[4] !== p || l[5] !== h || l[6] !== c || l[7] !== v
            ? ((n =
                b &&
                (0, a.jsx)(w, {
                  controls: y,
                  fromSyncNotice: f,
                  session: c,
                  notice: p,
                  visible: v,
                  onClose: () => I(!1),
                  onReverted: h,
                })),
              (l[1] = b),
              (l[2] = y),
              (l[3] = f),
              (l[4] = p),
              (l[5] = h),
              (l[6] = c),
              (l[7] = v),
              (l[8] = n))
            : (n = l[8]),
          l[9] !== n ? ((o = (0, a.jsxs)(a.Fragment, { children: [t, n] })), (l[9] = n), (l[10] = o)) : (o = l[10]),
          o)
    }
    function x() {}
    function w(e) {
      let t,
        n,
        c,
        p,
        m,
        b,
        x,
        w,
        I,
        _,
        k,
        S,
        C,
        A,
        j = (0, r.c)(45),
        { controls: M, fromSyncNotice: P, session: T, notice: E, visible: N, onClose: U, onReverted: q } = e,
        D = (0, l.gh)(y.u),
        [z, L] = (0, i.useState)("idle"),
        O = "resetting" === z,
        [R, $] = (0, i.useState)()
      return (
        j[0] !== U || j[1] !== O
          ? ((t = (e) => {
              e || O || U()
            }),
            (j[0] = U),
            (j[1] = O),
            (j[2] = t))
          : (t = j[2]),
        j[3] !== E?.pagesErrorCode || j[4] !== E?.reason || j[5] !== T || j[6] !== N
          ? ((n =
              null == T
                ? N && (0, a.jsx)(d.gO, { kind: "unsaved_changes", recoveryUi: "dialog" })
                : (0, a.jsx)(f.It, {
                    session: T,
                    noticeReason: E?.reason,
                    pagesErrorCode: E?.pagesErrorCode,
                    visible: N,
                    operation: "pages.realtime.recovery",
                    kind: "unsaved_changes",
                    recoveryUi: "dialog",
                  })),
            (j[3] = E?.pagesErrorCode),
            (j[4] = E?.reason),
            (j[5] = T),
            (j[6] = N),
            (j[7] = n))
          : (n = j[7]),
        j[8] !== R || j[9] !== T || j[10] !== z || j[11] !== N
          ? ((c =
              "failed" === z &&
              (0, a.jsx)(f.O, {
                errorUiPresentation: "dialog",
                session: T,
                visible: null != T && N,
                operation: "pages.realtime.reset",
                errorUiType: o.CodexPagesErrorUiType.CODEX_PAGES_ERROR_UI_TYPE_RECOVERY,
                error: R,
              })),
            (j[8] = R),
            (j[9] = T),
            (j[10] = z),
            (j[11] = N),
            (j[12] = c))
          : (c = j[12]),
        j[13] !== M ||
        j[14] !== P ||
        j[15] !== U ||
        j[16] !== q ||
        j[17] !== O ||
        j[18] !== D ||
        j[19] !== T ||
        j[20] !== N
          ? ((p = (e) => {
              if ((e.preventDefault(), O)) return
              let t = T?.hasPendingEditorWrites ? "deferred_editor_write" : "other",
                n = (0, v.I)(P && N ? D : void 0, "revert", {
                  eligibility: null == T ? "unknown" : t,
                  realtime_backend: "engine",
                })
              ;(L("resetting"),
                M.discardLocalChanges().then(
                  () => {
                    ;(n("success"), q?.(), U())
                  },
                  (e) => {
                    ;(n("failure"), $(e), L("failed"))
                  },
                ))
            }),
            (j[13] = M),
            (j[14] = P),
            (j[15] = U),
            (j[16] = q),
            (j[17] = O),
            (j[18] = D),
            (j[19] = T),
            (j[20] = N),
            (j[21] = p))
          : (p = j[21]),
        j[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(g.L3, {
              children: (0, a.jsx)(s.A, {
                id: "codex.space.page.revert.title",
                defaultMessage: "Revert changes?",
                description:
                  "Title of the confirmation dialog before discarding local Page edits and loading the last saved server version",
              }),
            })),
            (j[22] = m))
          : (m = j[22]),
        j[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, a.jsx)(h.OO, {
              children: (0, a.jsx)(h.c7, {
                title: m,
                subtitle: (0, a.jsx)(g.rr, {
                  children: (0, a.jsx)(s.A, {
                    id: "codex.space.page.revert.description",
                    defaultMessage:
                      "Copy anything you need before resetting. Local edits will be discarded and the last saved version will load when you're connected.",
                    description:
                      "Warning in the Page revert confirmation dialog: unsaved local edits will be lost, and the same Page will synchronize its server version when a connection is available",
                  }),
                }),
              }),
            })),
            (j[23] = b))
          : (b = j[23]),
        j[24] !== z
          ? ((x =
              "failed" === z &&
              (0, a.jsx)(h.OO, {
                children: (0, a.jsx)("p", {
                  className: "text-sm text-danger select-none",
                  role: "alert",
                  children: (0, a.jsx)(s.A, {
                    id: "codex.space.page.revert.failed",
                    defaultMessage: "Couldn't finish resetting this Page. Try again",
                    description:
                      "Error shown when reverting a Page fails; the user can retry the same explicit operation that discards local edits",
                  }),
                }),
              })),
            (j[24] = z),
            (j[25] = x))
          : (x = j[25]),
        j[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, a.jsx)(s.A, {
              id: "codex.space.page.revert.cancel",
              defaultMessage: "Cancel",
              description: "Cancels the Page revert confirmation without discarding any edits",
            })),
            (j[26] = w))
          : (w = j[26]),
        j[27] !== U || j[28] !== O
          ? ((I = (0, a.jsx)(u.$, { color: "secondary", disabled: O, onClick: U, type: "button", children: w })),
            (j[27] = U),
            (j[28] = O),
            (j[29] = I))
          : (I = j[29]),
        j[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, a.jsx)(s.A, {
              id: "codex.space.page.revert.submit",
              defaultMessage: "Revert changes",
              description:
                "Destructive confirmation button that discards local Page edits and loads the last saved server version; Cancel preserves the local edits",
            })),
            (j[30] = _))
          : (_ = j[30]),
        j[31] !== O
          ? ((k = (0, a.jsx)(u.$, { color: "danger", disabled: O, loading: O, type: "submit", children: _ })),
            (j[31] = O),
            (j[32] = k))
          : (k = j[32]),
        j[33] !== k || j[34] !== I
          ? ((S = (0, a.jsx)(h.OO, { children: (0, a.jsxs)(h.Es, { children: [I, k] }) })),
            (j[33] = k),
            (j[34] = I),
            (j[35] = S))
          : (S = j[35]),
        j[36] !== S || j[37] !== p || j[38] !== x
          ? ((C = (0, a.jsxs)(h.R4, { as: "form", onSubmit: p, children: [b, x, S] })),
            (j[36] = S),
            (j[37] = p),
            (j[38] = x),
            (j[39] = C))
          : (C = j[39]),
        j[40] !== t || j[41] !== C || j[42] !== n || j[43] !== c
          ? ((A = (0, a.jsxs)(g.lG, { open: !0, onOpenChange: t, children: [n, c, C] })),
            (j[40] = t),
            (j[41] = C),
            (j[42] = n),
            (j[43] = c),
            (j[44] = A))
          : (A = j[44]),
        A
      )
    }
    var I = n("LqIC")
    function _(e) {
      let t,
        n,
        u,
        g,
        h,
        v,
        y,
        x,
        w,
        _,
        M = (0, r.c)(55),
        {
          source: P,
          notice: T,
          session: E,
          experience: N,
          inline: U,
          writeAccessDenied: q,
          onCopy: D,
          onReverted: z,
          errorUiType: L,
          errorOperation: O,
          advice: R,
          children: $,
          visible: B,
        } = e,
        F = void 0 === U || U,
        V = void 0 !== q && q,
        W = void 0 === L ? o.CodexPagesErrorUiType.CODEX_PAGES_ERROR_UI_TYPE_SYNC_WARNING : L,
        H = void 0 === O ? "pages.realtime.notice" : O,
        G = void 0 === B || B,
        K = (0, i.useSyncExternalStore)(
          P.subscribe,
          null == E ? j : E.getSnapshot,
          null == E ? j : E.getServerSnapshot,
        ),
        Q = null == K || K.recoveryDrafts.length > 0 || K.pendingUpdates > 0 || !!E?.hasDeferredLocalEdits,
        X = (0, l._U)(
          !(
            !G ||
            !V ||
            K?.errorCode !== "page_write_forbidden" ||
            K.canWrite ||
            K.remoteAccessLost ||
            null != K.loadError ||
            K.hasRejectedEdits ||
            K.unsavedChangesDiscarded ||
            (0, m.XM)(K, E?.hasDeferredLocalEdits ?? !1)
          ) && I.T1,
          E?.id ?? "",
        )
      if (X) {
        let e, t
        M[0] !== X
          ? ((e = (0, a.jsx)("span", {
              role: "status",
              children:
                "completed" === X
                  ? (0, a.jsx)(s.A, {
                      id: "pages.document.checkingAccessAfterMove",
                      defaultMessage: "Checking edit access after the move…",
                      description: "Status while the moving user's tab refreshes Page access after a completed move",
                    })
                  : (0, a.jsx)(s.A, {
                      id: "pages.document.movingReadOnly",
                      defaultMessage: "This page is read-only while its move is in progress.",
                      description:
                        "Informational status for an open Page with no unsaved edits during the current user's move",
                    }),
            })),
            (M[0] = X),
            (M[1] = e))
          : (e = M[1])
        let n = e
        return (
          M[2] !== F || M[3] !== n
            ? ((t = F ? (0, a.jsx)(c.l, { variant: "callout", type: "normal", content: n }) : n),
              (M[2] = F),
              (M[3] = n),
              (M[4] = t))
            : (t = M[4]),
          t
        )
      }
      ;(M[5] !== N || M[6] !== G || M[7] !== V
        ? ((t = G && !V && (0, a.jsx)(d.vw, { tracker: N, kind: "sync" })),
          (M[5] = N),
          (M[6] = G),
          (M[7] = V),
          (M[8] = t))
        : (t = M[8]),
        M[9] !== H ||
        M[10] !== W ||
        M[11] !== N ||
        M[12] !== F ||
        M[13] !== T?.pagesErrorCode ||
        M[14] !== T?.reason ||
        M[15] !== E ||
        M[16] !== G ||
        M[17] !== V
          ? ((n =
              null == E
                ? G &&
                  (0, a.jsx)(d.gO, {
                    tracker: N,
                    kind: V ? "access" : "sync",
                    recoveryUi: "notice",
                    syncWarningBanner: F && !V && "pages.realtime.notice" === H,
                  })
                : (0, a.jsx)(f.It, {
                    noticeReason: T?.reason,
                    visible: G,
                    tracker: N,
                    kind: V ? "access" : "sync",
                    recoveryUi: "notice",
                    errorUiPresentation: F ? "banner" : "connection_help",
                    syncWarningMessage: V ? void 0 : "revert_recent_edits",
                    recoveryBanner:
                      F &&
                      !V &&
                      "pages.realtime.notice" === H &&
                      W === o.CodexPagesErrorUiType.CODEX_PAGES_ERROR_UI_TYPE_RECOVERY,
                    operation: H,
                    session: E,
                    pagesErrorCode: T?.pagesErrorCode,
                    errorUiType: V ? o.CodexPagesErrorUiType.CODEX_PAGES_ERROR_UI_TYPE_WRITE_ACCESS_DENIED : W,
                  })),
            (M[9] = H),
            (M[10] = W),
            (M[11] = N),
            (M[12] = F),
            (M[13] = T?.pagesErrorCode),
            (M[14] = T?.reason),
            (M[15] = E),
            (M[16] = G),
            (M[17] = V),
            (M[18] = n))
          : (n = M[18]),
        M[19] !== Q || M[20] !== D || M[21] !== K?.canWrite || M[22] !== V
          ? ((u = (0, a.jsx)("span", {
              className: "flex flex-wrap gap-x-1",
              children: V
                ? (0, a.jsxs)("span", {
                    className: "flex flex-col gap-1",
                    children: [
                      K?.canWrite
                        ? (0, a.jsx)(s.A, {
                            id: "codex.space.page.revert.permissionChanged.restored",
                            defaultMessage:
                              "<strong>Your permissions have changed.</strong> Your permissions changed before these edits could be saved",
                            description:
                              "Informational Page notice after edit access has been restored; a previous permission change prevented local edits from being saved. The first sentence is bold",
                            values: { strong: A },
                          })
                        : (0, a.jsx)(s.A, {
                            id: "codex.space.page.revert.permissionChanged",
                            defaultMessage:
                              "<strong>Your permissions have changed.</strong> You no longer have permission to edit this page",
                            description:
                              "Informational Page notice when edit access has been removed. The first sentence is bold; the user may still have read or comment access",
                            values: { strong: C },
                          }),
                      Q &&
                        null != D &&
                        (0, a.jsx)("span", {
                          children: (0, a.jsx)(s.A, {
                            id: "codex.space.page.revert.permissionChanged.copy",
                            defaultMessage: "Copy any edits you want to keep",
                            description:
                              "Supporting text in the Page permission-change notice when a Copy action is available to preserve local writing",
                          }),
                        }),
                    ],
                  })
                : (0, a.jsx)(s.A, {
                    id: "codex.space.page.revert.notice",
                    defaultMessage:
                      "<strong>Can't sync your changes.</strong> Please copy your recent edits, then revert to the last saved version",
                    description:
                      "Page synchronization failure banner. The first sentence is bold. Before using Revert to discard local edits and reload the server version, the user should copy any recent edits they need to keep",
                    values: { strong: S },
                  }),
            })),
            (M[19] = Q),
            (M[20] = D),
            (M[21] = K?.canWrite),
            (M[22] = V),
            (M[23] = u))
          : (u = M[23]),
        M[24] !== R || M[25] !== t || M[26] !== n || M[27] !== u
          ? ((g = (0, a.jsxs)(a.Fragment, { children: [t, n, u, R] })),
            (M[24] = R),
            (M[25] = t),
            (M[26] = n),
            (M[27] = u),
            (M[28] = g))
          : (g = M[28]))
      let Z = g
      if (!F) {
        let e
        return (
          M[29] !== Z
            ? ((e = (0, a.jsx)("span", { role: "status", children: Z })), (M[29] = Z), (M[30] = e))
            : (e = M[30]),
          e
        )
      }
      let Y = V ? "normal" : "warning"
      return (
        M[31] !== Z
          ? ((h = (0, a.jsx)("div", { role: "status", children: Z })), (M[31] = Z), (M[32] = h))
          : (h = M[32]),
        M[33] !== $ || M[34] !== h
          ? ((v = (0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [h, $] })),
            (M[33] = $),
            (M[34] = h),
            (M[35] = v))
          : (v = M[35]),
        M[36] !== Q || M[37] !== D || M[38] !== V
          ? ((y =
              null != D && (!V || Q) && (0, a.jsx)(p.i, { buttonText: !0, showIcon: !1, onCopy: D, renderButton: k })),
            (M[36] = Q),
            (M[37] = D),
            (M[38] = V),
            (M[39] = y))
          : (y = M[39]),
        M[40] !== Q || M[41] !== T || M[42] !== z || M[43] !== E || M[44] !== P || M[45] !== G || M[46] !== V
          ? ((x =
              (!V || Q) &&
              (0, a.jsx)(b, { notice: T, fromSyncNotice: !0, source: P, session: E, visible: G, onReverted: z })),
            (M[40] = Q),
            (M[41] = T),
            (M[42] = z),
            (M[43] = E),
            (M[44] = P),
            (M[45] = G),
            (M[46] = V),
            (M[47] = x))
          : (x = M[47]),
        M[48] !== y || M[49] !== x
          ? ((w = (0, a.jsxs)(a.Fragment, { children: [y, x] })), (M[48] = y), (M[49] = x), (M[50] = w))
          : (w = M[50]),
        M[51] !== Y || M[52] !== v || M[53] !== w
          ? ((_ = (0, a.jsx)(c.l, { variant: "callout", type: Y, content: v, customCtas: w, wrapCtas: !0 })),
            (M[51] = Y),
            (M[52] = v),
            (M[53] = w),
            (M[54] = _))
          : (_ = M[54]),
        _
      )
    }
    function k(e) {
      return (0, a.jsx)(u.$, { ...e, color: "secondary", size: "recoveryAction" })
    }
    function S(e) {
      return (0, a.jsx)("strong", { children: e })
    }
    function C(e) {
      return (0, a.jsx)("strong", { children: e })
    }
    function A(e) {
      return (0, a.jsx)("strong", { children: e })
    }
    function j() {}
  },
  D0Qt(e, t, n) {
    var a = n("SPnB"),
      r = n("pKVr"),
      o = n("Um9I"),
      l = n("CqWC"),
      i = n("pyoT")
    function s(e, t) {
      return "request_changes" === t
        ? { canArchive: !1, canCreatePage: !1, canOpenSharing: !1 }
        : { canArchive: e?.canDelete === !0, canCreatePage: e?.canWrite === !0, canOpenSharing: e?.canShare === !0 }
    }
    n.d(
      t,
      {},
      {
        jf: function (e, t) {
          let n = "id" in t ? t.id : t.space_id,
            { queryHash: d, queryKey: c } = e.queryClient.defaultQueryOptions(e.query.getOptions(i.spaceQuery$, n)),
            u = e.queryClient.getQueryCache().get(d)
          if (u?.state.status !== "success" || u.isStaleByTime(1 / 0)) return
          let p = e.query.getData(i.spaceQuery$, n)
          if (p?.id !== n || p.root_page_id !== t.root_page_id) return
          let m = (0, l.sh)(e, p.root_page_id, e.get(i.spaceAccountId$), e.get(a.chatGptAuthenticatedUserId$))
          if (m?.drive_space_id === n)
            return s(
              e.get(r.t5, n),
              (0, o.wI)(
                "id" in t ? t.interaction_mode : void 0,
                e.query.getData(i.spacesQuery$)?.items.find((e) => e.id === n)?.interaction_mode,
                p.interaction_mode,
              ),
            )
        },
        lv: s,
        xH: async function (e, t) {
          let n = "id" in t ? t.id : t.space_id,
            a = await (0, r.hj)(e, n).catch(() => void 0),
            l = (0, o.wI)(
              "id" in t ? t.interaction_mode : void 0,
              e.query.getData(i.spacesQuery$)?.items.find((e) => e.id === n)?.interaction_mode,
              e.query.getData(i.spaceQuery$, n)?.interaction_mode,
            )
          return (null == l && e.query.getOrFetch(i.spaceQuery$, n).catch(() => {}), s(a, l))
        },
      },
    )
  },
  gKie(e, t, n) {
    var a = n("e1xH"),
      r = n("Um9I"),
      o = n("pyoT")
    n.d(
      t,
      {},
      {
        h: function (e, t, n) {
          null != e.get(o.spaceAccountId$) &&
            e.get(a.pagesEnabled$) &&
            "request_changes" !==
              (0, r.wI)(
                t.interaction_mode,
                e.query.getData(o.spaceQuery$, t.id)?.interaction_mode,
                e.query.getData(o.spacesQuery$)?.items.find((e) => e.id === t.id)?.interaction_mode,
              ) &&
            n()
        },
      },
    )
  },
  AAxy(e, t, n) {
    var a = n("zTeN"),
      r = n("DBCl"),
      o = n("svjy"),
      l = n("q3j5"),
      i = n("TYK1"),
      s = n("rTPf"),
      d = n("OWtl"),
      c = n("fEVS")
    let u = (0, a.i1)(d.u, ({ ownerName: e, conversationId: t, mention: n = !1 }, { get: a }) => {
        let s = null == t ? null : a(i.cloudAeonByThreadId$, (0, r.JXB)(t)).data
        if (null != s && !(0, l.x)(s.display_name)) return (n ? "@" : "") + s.display_name
        let d = e?.trim().split(/\s+/u)[0]
        return a(o.g).formatMessage(
          {
            id: "codex.page.dot.ownerLabel.productName",
            defaultMessage:
              "{mention, select, true {@} other {}}{hasOwner, select, true {{name}’s {dot}} other {{dot}}}",
            description:
              "Shared Page label for a dot, an always-on agent, using the responsible person's first name when known. dot is a common noun for the agent and must remain untranslated. Mention labels start with @. Never use the agent's private nickname.",
          },
          { mention: n, hasOwner: !!d, name: d, dot: "dot" },
        )
      }),
      p = (0, a.i1)(d.u, ({ owner: e, ownerName: t, viewer: n, orbit: a }, { get: r }) => {
        let l = r(s.ik, e) ?? t,
          i = l === e ? void 0 : l?.trim().split(/\s+/u)[0]
        if (null != a) return r(u, { ownerName: i, conversationId: e === n ? a.threadId : void 0, mention: !0 })
        let d = r(o.g)
        return e !== n && i
          ? d.formatMessage(
              {
                id: "codex.page.taskMention.ownerLabel",
                defaultMessage: "@{name}’s ChatGPT",
                description: "ChatGPT task mention shown to someone other than its owner, using the owner's first name",
              },
              { name: i },
            )
          : d.formatMessage({
              id: "codex.page.taskMention.selfLabel",
              defaultMessage: "@ChatGPT",
              description:
                "ChatGPT task mention shown to its owner or when the owner’s name is unavailable; keep the product name",
            })
      }),
      m = (0, a.i1)(
        d.u,
        ({ sources: e, viewer: t }, { get: n }) => {
          if (!e.length) return
          let a = {}
          for (let r of e) {
            let e = (0, c.FD)(r)[0]
            if (null != e) {
              let { owner: o, ownerName: l, orbit: i } = e
              a[r] = n(p, { owner: o, ownerName: l, orbit: i, viewer: t })
            }
          }
          return a
        },
        { autoDispose: !0 },
      )
    n.d(
      t,
      {},
      {
        GD: p,
        bx: u,
        f9: m,
        ft: function (e) {
          let t = new Set()
          for (let n of e) if (n.includes("](task")) for (let { from: e, to: a } of (0, c.FD)(n)) t.add(n.slice(e, a))
          return [...t].sort()
        },
      },
    )
  },
  uAks(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("zTeN"),
      l = n("AAxy")
    n.d(
      t,
      {},
      {
        _: function (e) {
          let t,
            n = (0, r.c)(2),
            i = (0, o._U)(l.bx, e)
          return (n[0] !== i ? ((t = (0, a.jsx)(a.Fragment, { children: i })), (n[0] = i), (n[1] = t)) : (t = n[1]), t)
        },
        a: function (e) {
          let t,
            n,
            i = (0, r.c)(7),
            { owner: s, ownerName: d, viewer: c, orbit: u } = e
          i[0] !== u || i[1] !== s || i[2] !== d || i[3] !== c
            ? ((t = { owner: s, ownerName: d, viewer: c, orbit: u }),
              (i[0] = u),
              (i[1] = s),
              (i[2] = d),
              (i[3] = c),
              (i[4] = t))
            : (t = i[4])
          let p = (0, o._U)(l.GD, t)
          return (i[5] !== p ? ((n = (0, a.jsx)(a.Fragment, { children: p })), (i[5] = p), (i[6] = n)) : (n = i[6]), n)
        },
      },
    )
  },
  Xm1C(e, t, n) {
    var a = n("DBCl"),
      r = n("SPnB"),
      o = n("eA5w"),
      l = n("TYK1"),
      i = n("BApD"),
      s = n("jiwy"),
      d = n("OMIV")
    n.d(
      t,
      {},
      {
        S: async function ({
          scope: e,
          accountId: t,
          owner: n,
          threadId: c,
          prompt: u,
          pageId: p,
          requestId: m,
          backendDelivery: g,
          beforeSend: h,
        }) {
          let f = e.get(r.chatGptAuthenticatedUserId$)
          if (null == f) throw new DOMException("Page comment owner changed", "AbortError")
          let v = () => {
            if (
              e.get(r.chatGptAuthenticatedAccountId$) !== t ||
              e.get(r.chatGptAuthenticatedUserId$) !== f ||
              e.get(r.Kw) !== n
            )
              throw new DOMException("Page comment owner changed", "AbortError")
          }
          if ((v(), !e.get(s.VK))) throw Error("page_comment_orbit_unavailable")
          let y = (0, a.JXB)(c),
            b = await e.query.getOrFetch(l.cloudAeonByThreadId$, y)
          if ((v(), !(0, l.h2)(b, y))) throw Error("page_comment_orbit_unavailable")
          let x = () => {
            if ((v(), !e.get(s.VK))) throw Error("page_comment_orbit_unavailable")
            h()
          }
          if (null != g && e.get(d.JW, "3627948712") && e.get(d.JW, "1782536112")) {
            let e = !1
            try {
              ;(await g.session.flush({ scope: "current", waitFor: "remote" }),
                (e = g.session.hasSpaceInputDelivery(g.delivery)))
            } catch {}
            if (e) return void v()
          }
          ;(x(),
            await (0, i.d)({
              scope: e,
              conversationId: y,
              hostId: (0, o.Y)(),
              context: { prompt: u, addedFiles: [], fileAttachments: [], imageAttachments: [], ideContext: null },
              requestId: m,
              pageComment: null == g ? void 0 : { page_id: p, thread_id: c },
              beforeSend: x,
            }),
            v())
        },
      },
    )
  },
  hOFV(e, t, n) {
    var a = n("zTeN"),
      r = n("E8Sp"),
      o = n("OWtl"),
      l = n("OMIV"),
      i = n("pyoT")
    let s = (0, a.vP)(o.u, null),
      d = (0, a.bD)(o.u, (e) => !1)
    n.d(
      t,
      {},
      {
        DO: d,
        D_: s,
        _i: function (e, t, { getConversationId: n, isFinished: a }) {
          if (e.get(l.JW, "2720466079")) return () => {}
          let o = { accountId: e.get(i.spaceAccountId$), pageId: e.get(i.spacePageId$, t), getConversationId: n },
            c = e.get(i.spacePageEditorId$, t),
            u = e.get(r.gM),
            p = () => {
              e.get(s) === o && e.set(s, null)
            }
          return (
            e.set(d, o.pageId, !1),
            e.set(s, o),
            e
              .when((e) => {
                let { get: t } = e,
                  n = t(r.gM)
                return (
                  t(s) !== o ||
                  t(i.spaceAccountId$) !== o.accountId ||
                  (n !== u && n.pathname !== `/space/${o.pageId}` && n.pathname !== `/space/${c}`) ||
                  a(e)
                )
              })
              .then(p),
            p
          )
        },
      },
    )
  },
  eK1D(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("wTzC"),
      l = n("HgFd"),
      i = n("oyxz"),
      s = n("NraH")
    n.d(
      t,
      {},
      {
        A: function () {
          let e,
            t = (0, r.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(i.A, {
                  id: "codex.space.page.title.limit",
                  defaultMessage: "Titles can contain up to {limit} characters",
                  description: "Feedback when a Page title exceeds its character limit",
                  values: { limit: l.Am },
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
        j: function (e) {
          let t,
            n,
            l = (0, r.c)(6),
            { limit: i, session: d, pageId: c } = e,
            u = c ?? d?.id
          return (
            l[0] !== i || l[1] !== d
              ? ((t = () => {
                  let e = d?.getErrorContext()
                  return {
                    isOfflineEngine: e?.isOfflineEngine,
                    nativeDocumentType: e?.nativeDocumentType,
                    signal: e?.signal,
                    isCurrent: e?.isCurrent,
                    deliveryOptions: e?.deliveryOptions,
                    realtimeSessionId: e?.realtimeSessionId,
                    client: e?.client,
                    failureBoundary: "EDITOR_ADMISSION",
                    recoveryDiagnostics: {
                      stage: "local_size_check",
                      detail: "unspecified",
                      rejectionSource: "client",
                      disposition: "editor_not_admitted",
                      limitDimension: "title" === i ? "title_scalars" : "markdown_bytes",
                    },
                  }
                }),
                (l[0] = i),
                (l[1] = d),
                (l[2] = t))
              : (t = l[2]),
            l[3] !== u || l[4] !== t
              ? ((n = (0, a.jsx)(s.O, {
                  operation: "pages.realtime.notice",
                  pageId: u,
                  errorUiType: o.CodexPagesErrorUiType.CODEX_PAGES_ERROR_UI_TYPE_SYNC_WARNING,
                  errorUiPresentation: "toast",
                  pagesErrorCode: "page_limit_exceeded",
                  getErrorContext: t,
                })),
                (l[3] = u),
                (l[4] = t),
                (l[5] = n))
              : (n = l[5]),
            n
          )
        },
      },
    )
  },
  Z1L7(e, t, n) {
    function a(e) {
      return e.name ?? e.email ?? e.id
    }
    n.d(
      t,
      {},
      {
        $4: a,
        BM: function ({
          currentAccountUserId: e,
          existingAccountUserIds: t,
          selectedAccountUserIds: n,
          workspaceUsers: a,
        }) {
          let r = new Set(t),
            o = new Set(n)
          return a?.filter((t) => t.account_user_id !== e && !r.has(t.account_user_id) && !o.has(t.account_user_id))
        },
        xP: function (e) {
          return {
            chipLabel: e.email ?? void 0,
            colorKey: e.account_user_id,
            id: `user:${e.account_user_id}`,
            label: a(e),
            secondaryLabel: e.email ?? void 0,
          }
        },
      },
    )
  },
  n5oN(e, t, n) {
    var a = n("zTeN"),
      r = n("HZfM"),
      o = n("B0Wx"),
      l = n("m22M"),
      i = n("OWtl"),
      s = n("Oj9r"),
      d = n("r6TF"),
      c = n("d6Ff")
    let u = (0, a.i1)(i.u, (e, { get: t }) => {
      if (null == e) return null
      let { pathname: n, search: a } = (0, r.Rr)(e)
      if (null == n) return null
      let i = (0, s.VJ)({ pathname: n, routeTemplate: n, search: a })
      switch (i.routeKind) {
        case "client-local-thread":
        case "local-thread": {
          let e = t(d.hQ, (0, c.z3)("client-local-thread" === i.routeKind ? i.clientThreadId : i.conversationId))
          if (e?.kind !== "local") return null
          return null == e.conversationId
            ? (e.pendingThreadStart?.title ?? e.pendingWorktree?.label ?? null)
            : (t(l.Q, e.conversationId) ?? e.catalogTitle ?? e.summary?.title ?? null)
        }
        case "remote-thread": {
          let e = t(d.hQ, (0, c.Wz)(i.taskId))
          return e?.kind === "remote" ? (e.task.title ?? null) : null
        }
        case "chatgpt-thread":
          return t(o.Mx, i.conversationId) ?? null
        case "home":
        case "new-thread-panel":
        case "other":
          return null
      }
    })
    n.d(t, {}, { m: u })
  },
  a7dB(e, t, n) {
    let a = (0, n("nkTT").a)({
      name: "chevron-left-md-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 6.507568, y: 4.334473, width: 6.157959, height: 11.331055 },
        visualBounds: { x: 6.507568, y: 4.334473, width: 6.157959, height: 11.331055 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 6.507568, y: 4.334473, width: 6.157959, height: 11.331055 },
        center: { x: 9.586548, y: 10 },
        insets: { top: 4.334473, right: 7.334473, bottom: 4.334472, left: 6.507568 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 9.586548, y: 10 }, foreground: { x: 9.586548, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M12.4707 14.5292C12.7304 14.7889 12.7304 15.211 12.4707 15.4707C12.211 15.7304 11.789 15.7304 11.5293 15.4707L6.82419 10.7646C6.40203 10.3422 6.40203 9.65767 6.82419 9.2353L11.5293 4.52925C11.789 4.26955 12.211 4.26955 12.4707 4.52925C12.7304 4.78895 12.7304 5.21095 12.4707 5.47065L7.94137 9.99995L12.4707 14.5292Z" fill="currentColor"/>',
    })
    n.d(t, {}, { Y: a })
  },
  kBEa(e, t, n) {
    let a = (0, n("nkTT").a)({
      name: "cloud-arrow-up-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.057861, y: 2.416992, width: 13.883789, height: 11.576172 },
        visualBounds: { x: 1.057861, y: 2.416992, width: 13.883789, height: 11.576172 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.057861, y: 2.416992, width: 13.883789, height: 11.576172 },
        center: { x: 7.999756, y: 8.205078 },
        insets: { top: 2.416992, right: 1.05835, bottom: 2.006836, left: 1.057861 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999756, y: 8.205078 }, foreground: { x: 7.999756, y: 8.205078 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.71118 7.63965C7.91497 7.50504 8.19192 7.52761 8.37134 7.70703L10.2961 9.63184C10.5009 9.83687 10.501 10.1691 10.2961 10.374C10.0912 10.5787 9.7589 10.5787 9.55396 10.374L8.52661 9.34668V13.4678C8.5266 13.7576 8.29094 13.9929 8.00122 13.9932C7.71128 13.9932 7.47584 13.7577 7.47583 13.4678V9.34473L6.44653 10.374C6.24154 10.5786 5.90927 10.5788 5.70435 10.374C5.49944 10.1691 5.49968 9.83689 5.70435 9.63184L7.62915 7.70703L7.71118 7.63965Z" fill="currentColor"/> <path d="M8.00024 2.41699C10.2525 2.41716 12.1067 4.11962 12.3479 6.30762C13.8186 6.54579 14.9417 7.82144 14.9417 9.35938C14.9415 11.0667 13.5572 12.4512 11.8499 12.4512C11.56 12.4511 11.3245 12.2157 11.3245 11.9258C11.3245 11.6359 11.5599 11.4004 11.8499 11.4004C12.9773 11.4004 13.8917 10.4868 13.8918 9.35938C13.8918 8.23179 12.9774 7.31738 11.8499 7.31738C11.5599 7.31735 11.3245 7.08192 11.3245 6.79199C11.3243 4.95593 9.83631 3.46795 8.00024 3.46777C6.54406 3.46777 5.30529 4.40393 4.85571 5.70898C4.79108 5.89663 4.62564 6.03208 4.42896 6.05859C3.11871 6.23529 2.10864 7.359 2.10864 8.71777C2.10883 10.0151 3.02982 11.098 4.25415 11.3467C4.53826 11.4044 4.72191 11.6817 4.66431 11.9658C4.60662 12.25 4.32932 12.4337 4.04517 12.376C2.34115 12.0299 1.05805 10.5243 1.05786 8.71777C1.05786 6.93589 2.30611 5.44556 3.97583 5.07324C4.64359 3.51219 6.1936 2.41699 8.00024 2.41699Z" fill="currentColor"/>',
    })
    n.d(t, {}, { h: a })
  },
  eSc7(e, t, n) {
    let a = (0, n("nkTT").a)({
      name: "exclamation-mark-triangle-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.469971, y: 2.531738, width: 17.060303, height: 14.800293 },
        visualBounds: { x: 1.469971, y: 2.531738, width: 17.060303, height: 14.800293 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.469971, y: 2.531738, width: 17.060303, height: 14.800293 },
        center: { x: 10.000123, y: 9.931884 },
        insets: { top: 2.531738, right: 1.469726, bottom: 2.667969, left: 1.469971 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.000123, y: 9.931884 },
          foreground: { x: 10.000123, y: 9.931884 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M10.1056 12.5597C10.625 12.6125 11.0304 13.0517 11.0304 13.5851C11.0304 14.154 10.5691 14.6152 10.0002 14.6153C9.46674 14.6153 9.02754 14.21 8.97476 13.6905L8.96988 13.5851L8.97476 13.4796C9.0276 12.9602 9.46678 12.5548 10.0002 12.5548L10.1056 12.5597Z" fill="currentColor"/> <path d="M10.0002 7.25205C10.3673 7.25218 10.6652 7.5499 10.6652 7.91709V10.6251C10.6652 10.9923 10.3673 11.29 10.0002 11.2901C9.63288 11.2901 9.33511 10.9924 9.33511 10.6251V7.91709C9.33511 7.54982 9.63288 7.25205 10.0002 7.25205Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00992 3.64756C8.9191 2.1598 11.0802 2.1598 11.9894 3.64756L18.1847 13.7843C19.1339 15.338 18.0153 17.3321 16.1945 17.3321H3.80484C1.9842 17.332 0.866475 15.3379 1.81558 13.7843L8.00992 3.64756ZM10.8546 4.34092C10.4641 3.70179 9.53526 3.70179 9.14468 4.34092L2.95035 14.4776C2.54284 15.145 3.02284 16.0019 3.80484 16.002H16.1945C16.9766 16.002 17.4566 15.1451 17.049 14.4776L10.8546 4.34092Z" fill="currentColor"/>',
    })
    n.d(t, {}, { X: a })
  },
}
//# sourceMappingURL=151642.8ff0baaac3.js.map
