export const __rspack_esm_ids = [428876]
export const __webpack_modules__ = {
  YsUF(e, t, a) {
    var r = a("ABep"),
      s = a("QosV"),
      n = a("irkb"),
      o = a("T0Rc"),
      i = a("zd8w"),
      l = a("oyxz"),
      c = a("HZfM"),
      u = a("EOo5"),
      d = a("ygO2"),
      f = a("HFSu"),
      h = a("gLgE"),
      m = a("x4hW")
    a.d(
      t,
      {},
      {
        BrowserMfaDisablePage: function () {
          let e,
            t,
            a,
            p,
            g,
            x,
            b,
            w,
            y,
            j,
            _,
            A,
            v,
            M,
            k,
            N,
            S,
            C = (0, s.c)(55),
            { userId: q } = (0, u.As)(),
            F = (0, c.Zp)(),
            T = (0, n.jE)()
          C[0] !== q ? ((e = (0, m.N7)(q)), (C[0] = q), (C[1] = e)) : (e = C[1])
          let G = e,
            { data: P, isPending: B, error: D, refetch: z } = (0, o.I)(G),
            [E, H] = (0, i.useState)(!1),
            [O, R] = (0, i.useState)(!1),
            [I, L] = (0, i.useState)(!1),
            [Z, Q] = (0, i.useState)(!1),
            W = (0, i.useRef)(null)
          ;(C[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = () => () => W.current?.abort()), (a = []), (C[2] = t), (C[3] = a))
            : ((t = C[2]), (a = C[3])),
            (0, i.useEffect)(t, a))
          let K = P?.mfa_enabled_v2 ? P.native_default_factor_id : null
          C[4] !== D ? ((p = (0, m.gw)(D)), (C[4] = D), (C[5] = p)) : (p = C[5])
          let V = p
          C[6] !== K || C[7] !== V || C[8] !== G || C[9] !== T || C[10] !== Z
            ? ((g = async () => {
                if (W.current || (!K && !V)) return
                let e = new AbortController()
                ;((W.current = e), H(!0), R(!1))
                try {
                  V || Z || (await (0, m.xG)(!0))
                    ? (Q(!0), (await (0, m.m1)(window.location.href, e.signal)) || R(!0))
                    : K &&
                      !e.signal.aborted &&
                      (await f.CodexRequest.safePost("/accounts/mfa/user/disable_in_house", {
                        requestBody: { factor_id: K },
                        signal: e.signal,
                      }),
                      L(!0),
                      await T.invalidateQueries({ queryKey: G.queryKey }))
                } catch (t) {
                  if (e.signal.aborted) return
                  ;(0, m.gw)(t) ? Q(!0) : R(!0)
                }
                ;((W.current = null), e.signal.aborted || H(!1))
              }),
              (C[6] = K),
              (C[7] = V),
              (C[8] = G),
              (C[9] = T),
              (C[10] = Z),
              (C[11] = g))
            : (g = C[11])
          let $ = g
          return (
            C[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = (0, r.jsx)(l.A, {
                  id: "browser.auth.mfa.disableTitle",
                  defaultMessage: "Disable multi-factor authentication?",
                  description: "Heading on the confirmation page for turning off the user's default MFA factor",
                })),
                (C[12] = x))
              : (x = C[12]),
            C[13] !== B
              ? ((b = B
                  ? (0, r.jsx)("p", {
                      role: "status",
                      children: (0, r.jsx)(l.A, {
                        id: "browser.auth.mfa.loading",
                        defaultMessage: "Loading…",
                        description: "Loading status while the browser fetches MFA information or an enrollment token",
                      }),
                    })
                  : null),
                (C[13] = B),
                (C[14] = b))
              : (b = C[14]),
            C[15] !== I
              ? ((w = I
                  ? (0, r.jsx)("p", {
                      role: "status",
                      children: (0, r.jsx)(l.A, {
                        id: "browser.auth.mfa.disabled",
                        defaultMessage: "Multi-factor authentication is disabled",
                        description: "Success confirmation after the API disables the default MFA factor",
                      }),
                    })
                  : null),
                (C[15] = I),
                (C[16] = w))
              : (w = C[16]),
            C[17] !== I || C[18] !== K
              ? ((y =
                  !I && K
                    ? (0, r.jsx)("p", {
                        className: "text-center text-sm text-secondary",
                        children: (0, r.jsx)(l.A, {
                          id: "browser.auth.mfa.disableDescription",
                          defaultMessage: "You won’t be asked for a verification code when you log in",
                          description:
                            "Explanation of the effect of disabling the default multi-factor authentication method",
                        }),
                      })
                    : null),
                (C[17] = I),
                (C[18] = K),
                (C[19] = y))
              : (y = C[19]),
            C[20] !== I || C[21] !== D || C[22] !== K || C[23] !== B
              ? ((j =
                  I || K || B || D
                    ? null
                    : (0, r.jsx)("p", {
                        children: (0, r.jsx)(l.A, {
                          id: "browser.auth.mfa.noDefault",
                          defaultMessage: "There is no default authentication factor to disable",
                          description: "Status when the legacy MFA-disable callback has no default factor to remove",
                        }),
                      })),
                (C[20] = I),
                (C[21] = D),
                (C[22] = K),
                (C[23] = B),
                (C[24] = j))
              : (j = C[24]),
            C[25] !== D || C[26] !== O || C[27] !== V
              ? ((_ =
                  O || (D && !V)
                    ? (0, r.jsx)("p", {
                        role: "alert",
                        className: "text-sm text-danger",
                        children: (0, r.jsx)(l.A, {
                          id: "browser.auth.mfa.failed",
                          defaultMessage: "Something went wrong. Please try again",
                          description:
                            "Inline error after an MFA management request fails; no authentication setting has been changed",
                        }),
                      })
                    : null),
                (C[25] = D),
                (C[26] = O),
                (C[27] = V),
                (C[28] = _))
              : (_ = C[28]),
            C[29] !== $ || C[30] !== I || C[31] !== K || C[32] !== V || C[33] !== E || C[34] !== Z
              ? ((A =
                  !I && (K || V)
                    ? (0, r.jsx)("form", {
                        className: "flex w-full flex-col gap-3",
                        onSubmit: (e) => {
                          ;(e.preventDefault(), $())
                        },
                        children: (0, r.jsx)(d.$, {
                          type: "submit",
                          color: "primary",
                          size: "auth",
                          loading: E,
                          children:
                            Z || V
                              ? (0, r.jsx)(l.A, {
                                  id: "browser.auth.mfa.reauthenticate",
                                  defaultMessage: "Confirm it’s you",
                                  description:
                                    "Button that asks the user to sign in again before changing multi-factor authentication",
                                })
                              : (0, r.jsx)(l.A, {
                                  id: "browser.auth.mfa.disableConfirm",
                                  defaultMessage: "Disable",
                                  description:
                                    "Confirmation button that disables the default multi-factor authentication factor",
                                }),
                        }),
                      })
                    : null),
                (C[29] = $),
                (C[30] = I),
                (C[31] = K),
                (C[32] = V),
                (C[33] = E),
                (C[34] = Z),
                (C[35] = A))
              : (A = C[35]),
            C[36] !== D || C[37] !== V || C[38] !== z
              ? ((v =
                  D && !V
                    ? (0, r.jsx)(d.$, {
                        type: "button",
                        color: "outlineSurface",
                        size: "auth",
                        onClick: () => {
                          z()
                        },
                        children: (0, r.jsx)(l.A, {
                          id: "browser.auth.mfa.retry",
                          defaultMessage: "Try again",
                          description: "Button to retry loading or updating multi-factor authentication after an error",
                        }),
                      })
                    : null),
                (C[36] = D),
                (C[37] = V),
                (C[38] = z),
                (C[39] = v))
              : (v = C[39]),
            C[40] !== F
              ? ((M = () => {
                  F("/settings/security", { replace: !0 })
                }),
                (C[40] = F),
                (C[41] = M))
              : (M = C[41]),
            C[42] === Symbol.for("react.memo_cache_sentinel")
              ? ((k = (0, r.jsx)(l.A, {
                  id: "browser.auth.mfa.return",
                  defaultMessage: "Return to ChatGPT",
                  description: "Button leaving the MFA management page and returning to ChatGPT",
                })),
                (C[42] = k))
              : (k = C[42]),
            C[43] !== E || C[44] !== M
              ? ((N = (0, r.jsx)(d.$, {
                  type: "button",
                  color: "outlineSurface",
                  size: "auth",
                  disabled: E,
                  onClick: M,
                  children: k,
                })),
                (C[43] = E),
                (C[44] = M),
                (C[45] = N))
              : (N = C[45]),
            C[46] !== _ ||
            C[47] !== A ||
            C[48] !== v ||
            C[49] !== N ||
            C[50] !== b ||
            C[51] !== w ||
            C[52] !== y ||
            C[53] !== j
              ? ((S = (0, r.jsxs)(h.q, { title: x, children: [b, w, y, j, _, A, v, N] })),
                (C[46] = _),
                (C[47] = A),
                (C[48] = v),
                (C[49] = N),
                (C[50] = b),
                (C[51] = w),
                (C[52] = y),
                (C[53] = j),
                (C[54] = S))
              : (S = C[54]),
            S
          )
        },
      },
    )
  },
  x4hW(e, t, a) {
    var r = a("HVNn"),
      s = a("ASxG"),
      n = a("qhRx"),
      o = a("X1mr"),
      i = a("HFSu"),
      l = a("eShZ"),
      c = a("jEww")
    let u = s.object({
      pwd_auth_time: s.number().optional(),
      "https://api.openai.com/mfa": s.object({ required: s.string() }).optional(),
    })
    a.d(
      t,
      {},
      {
        N7: function (e) {
          return {
            queryKey: ["browser-mfa-info", e],
            queryFn: ({ signal: e }) => i.CodexRequest.safeGet("/accounts/mfa_info", { signal: e }),
            staleTime: 0,
            gcTime: 0,
            retry: !1,
            refetchOnWindowFocus: !1,
          }
        },
        gw: function (e) {
          return (
            e instanceof l.fk &&
            (401 === e.status || "recent_auth_required" === e.errorCode || "reauth_required" === e.errorCode)
          )
        },
        m1: async function (e, t) {
          let a = await (0, c.aN)(e, (0, o.WF)().auth.reauthenticationParams, t)
          return !(!a.ok || t?.aborted) && (window.location.assign(a.url), !0)
        },
        xG: async function (e) {
          let t = await (0, n.loadBrowserChatGptAuth)()
          if (!t) return !0
          try {
            let a = u.parse((0, r.s)(t.accessToken))
            return (
              !a.pwd_auth_time ||
              Date.now() - a.pwd_auth_time > 24e4 ||
              (e && a["https://api.openai.com/mfa"]?.required !== "yes")
            )
          } catch {
            return !0
          }
        },
      },
    )
  },
  gLgE(e, t, a) {
    var r = a("ABep"),
      s = a("QosV"),
      n = a("on57"),
      o = a("oyxz"),
      i = a("HZfM"),
      l = a("ZtSy"),
      c = a("OQ5p")
    a.d(
      t,
      {},
      {
        q: function (e) {
          let t,
            a,
            u,
            d,
            f,
            h,
            m,
            p,
            g,
            x,
            b,
            w,
            y = (0, s.c)(36),
            {
              title: j,
              description: _,
              children: A,
              presentation: v,
              contentAlignment: M,
              showFooter: k,
              showHomeLink: N,
              onHomeClick: S,
            } = e,
            C = void 0 === v ? "page" : v,
            q = void 0 === k || k,
            F = void 0 !== N && N
          y[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, r.jsx)("span", {
                className: "text-heading-lg font-semibold tracking-tight",
                children: (0, r.jsx)(o.A, {
                  id: "browser.auth.brand",
                  defaultMessage: "ChatGPT",
                  description:
                    "ChatGPT brand name in the top-left header of the browser login and logout pages; do not translate the product name",
                }),
              })),
              (y[0] = t))
            : (t = y[0])
          let T = t
          y[1] !== S || y[2] !== C || y[3] !== F
            ? ((a =
                "page" !== C
                  ? null
                  : (0, r.jsx)("header", {
                      className: "shrink-0 px-6 py-4 sm:px-8",
                      children: F ? (0, r.jsx)(i.N_, { to: "/", reloadDocument: !0, onClick: S, children: T }) : T,
                    })),
              (y[1] = S),
              (y[2] = C),
              (y[3] = F),
              (y[4] = a))
            : (a = y[4])
          let G = "start" === (void 0 === M ? "center" : M) ? "justify-start pt-12 sm:pt-16" : "justify-center pt-4"
          y[5] !== G
            ? ((u = (0, n.A)("flex w-full shrink-0 grow flex-col items-center px-6 pb-4", G)), (y[5] = G), (y[6] = u))
            : (u = y[6])
          let P = "focused" === C ? "max-w-80 gap-8" : "max-w-sm gap-5"
          y[7] !== P ? ((d = (0, n.A)("flex w-full flex-col", P)), (y[7] = P), (y[8] = d)) : (d = y[8])
          let B = "dialog" === C ? "sr-only" : "flex flex-col gap-4 text-center",
            D = "dialog" === C && "sr-only",
            z = "focused" === C && "text-2xl font-semibold",
            E = "page" === C && "text-3xl font-normal"
          return (
            y[9] !== D || y[10] !== z || y[11] !== E
              ? ((f = (0, n.A)(D, z, E)), (y[9] = D), (y[10] = z), (y[11] = E), (y[12] = f))
              : (f = y[12]),
            y[13] !== f || y[14] !== j
              ? ((h = (0, r.jsx)("h1", { className: f, children: j })), (y[13] = f), (y[14] = j), (y[15] = h))
              : (h = y[15]),
            y[16] !== _
              ? ((m = null != _ ? (0, r.jsx)("p", { className: "text-sm text-secondary", children: _ }) : null),
                (y[16] = _),
                (y[17] = m))
              : (m = y[17]),
            y[18] !== B || y[19] !== h || y[20] !== m
              ? ((p = (0, r.jsxs)("div", { className: B, children: [h, m] })),
                (y[18] = B),
                (y[19] = h),
                (y[20] = m),
                (y[21] = p))
              : (p = y[21]),
            y[22] !== A || y[23] !== d || y[24] !== p
              ? ((g = (0, r.jsxs)("div", { className: d, children: [p, A] })),
                (y[22] = A),
                (y[23] = d),
                (y[24] = p),
                (y[25] = g))
              : (g = y[25]),
            y[26] !== g || y[27] !== u
              ? ((x = (0, r.jsx)("main", { className: u, children: g })), (y[26] = g), (y[27] = u), (y[28] = x))
              : (x = y[28]),
            y[29] !== C || y[30] !== q
              ? ((b =
                  q && "focused" !== C
                    ? (0, r.jsxs)("footer", {
                        className: "flex shrink-0 flex-col items-center gap-3 px-6 pt-10 pb-8",
                        children: [
                          (0, r.jsx)(c.A, { "aria-hidden": "true", className: "size-6 shrink-0" }),
                          (0, r.jsxs)("div", {
                            className: "flex flex-wrap items-center justify-center gap-3 text-xs text-secondary",
                            children: [
                              (0, r.jsx)(l.G, {
                                appearance: "secondary",
                                href: "https://openai.com/policies/terms-of-use/",
                                initiator: "open_in_browser_bridge",
                                openTarget: "dialog" === C ? "external-browser" : void 0,
                                children: (0, r.jsx)(o.A, {
                                  id: "browser.auth.termsOfUse",
                                  defaultMessage: "Terms of use",
                                  description:
                                    "Footer link to OpenAI's terms of use on the browser login and logout pages",
                                }),
                              }),
                              (0, r.jsx)("div", { "aria-hidden": "true", className: "h-3 w-px bg-border" }),
                              (0, r.jsx)(l.G, {
                                appearance: "secondary",
                                href: "https://openai.com/policies/privacy-policy/",
                                initiator: "open_in_browser_bridge",
                                openTarget: "dialog" === C ? "external-browser" : void 0,
                                children: (0, r.jsx)(o.A, {
                                  id: "browser.auth.privacyPolicy",
                                  defaultMessage: "Privacy policy",
                                  description:
                                    "Footer link to OpenAI's privacy policy on the browser login and logout pages",
                                }),
                              }),
                            ],
                          }),
                        ],
                      })
                    : null),
                (y[29] = C),
                (y[30] = q),
                (y[31] = b))
              : (b = y[31]),
            y[32] !== x || y[33] !== b || y[34] !== a
              ? ((w = (0, r.jsxs)("div", {
                  className: "flex h-full w-full flex-col overflow-y-auto bg-surface text-default select-none",
                  children: [a, x, b],
                })),
                (y[32] = x),
                (y[33] = b),
                (y[34] = a),
                (y[35] = w))
              : (w = y[35]),
            w
          )
        },
      },
    )
  },
}
//# sourceMappingURL=428876.9889d86ec1.js.map
