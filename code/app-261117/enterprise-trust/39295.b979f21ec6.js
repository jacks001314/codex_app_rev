export const __rspack_esm_ids = [39295]
export const __webpack_modules__ = {
  Xf6D(e, t, n) {
    e.exports = n.p + "assets/setup-artwork.2a33374c41.png"
  },
  xG8A(e, t, n) {
    n.d(t, { WS: () => P, $x: () => R, Oy: () => C })
    var r = n("ABep"),
      o = n("QosV"),
      i = n("qmMi"),
      s = n("DBCl"),
      a = n("IhIa"),
      l = n("Wf1j"),
      c = n("MQPm"),
      d = n("Ko9s"),
      u = n("SGsN"),
      m = n("YYwy"),
      p = n("IIBl"),
      g = n("v9CB"),
      f = n("OWtl"),
      h = n("WFY2"),
      v = n("pZTm"),
      x = n("LH8k")
    let b = "missing_github_connector_link"
    var y = n("TurB"),
      k = n("pjlf")
    function _(e, t) {
      switch ((0, s.Rt_)(e)) {
        case k.JS:
          return t.formatMessage({
            id: "composer.browserTabMentions.contextLimitExceeded",
            defaultMessage:
              "This message includes too much browser tab context. Remove some tab mentions and try again",
          })
        case k.Jg:
          return t.formatMessage(
            {
              id: "composer.browserTabMentions.limitExceeded",
              defaultMessage: "You can mention up to {limit} browser tabs per message",
            },
            { limit: s.s3R },
          )
        default:
          return null
      }
    }
    var S = n("qle4"),
      j = n("J7aR"),
      I = n("oynk"),
      A = n("IiOi"),
      M = n("Ld2s")
    let w = {
      toastId: "composer_submit_failed",
      operation: "submit_conversation",
      errorCategory: "conversation",
      userFacingError: {
        surface: "CHATGPT_USER_FACING_ERROR_SURFACE_CODEX",
        errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION",
      },
    }
    function C(e) {
      let t,
        n = (0, o.c)(7),
        { composerMode: c, conversationId: y, cwd: k, followUpType: C } = e,
        G = (0, l.A)(),
        T = (0, i.gh)(f.u)
      return (
        n[0] !== c || n[1] !== y || n[2] !== k || n[3] !== C || n[4] !== G || n[5] !== T
          ? ((t = (e, t, n) => {
              if ((0, p.ym)(e)) return void T.get(u.Id).danger(G.formatMessage(p.Bw.rejected), { errorAnalytics: w })
              if (e instanceof A.m)
                return void T.get(u.Id).danger(
                  G.formatMessage({
                    id: "composer.presentationSuggestionCloudUnsupported",
                    defaultMessage:
                      "Slide suggestions can\u2019t be sent to Cloud. Switch out of Cloud or remove the slide attachment to continue",
                  }),
                  { errorAnalytics: { ...w, toastId: "composer.presentationSuggestionCloudUnsupported" } },
                )
              if (e instanceof I.a || (0, j.DB)(e) || (0, j.zY)(e) || e instanceof g.Kr)
                return void T.get(u.Id).danger(e.message, {
                  errorAnalytics: { ...w, toastId: "composerSubmitError.useComposerSubmitError" },
                })
              if (
                e instanceof d.ChatGptProjectSyncAlreadyReportedError ||
                e instanceof M.e ||
                (e instanceof Error && "AbortError" === e.name)
              )
                return
              h.v.error("[Composer] submit failed", { safe: { mode: c, followUp: C }, sensitive: { cwd: k, error: e } })
              let o =
                "cloud" === c
                  ? void 0
                  : (0, m.t)(T, {
                      conversationId: y,
                      surface: "codex",
                      operation: n ?? (null == y ? "startup" : "request_submission"),
                      errorMessage: (0, s.Rt_)(e),
                      occurredAtMs: Date.now(),
                    })
              "worktree" === c
                ? T.get(u.Id).danger(P(e, G), { id: "composer.taskError", primaryAction: o, errorAnalytics: w })
                : T.get(u.Id).danger(
                    (function ({ error: e, composerMode: t, intl: n }) {
                      var o
                      let i = R(e, n)
                      if (null != i) return i
                      let l = _(e, n)
                      if (null != l) return l
                      let c = E(e, n)
                      return null != c
                        ? c
                        : "worktree" === t && N(e)
                          ? n.formatMessage({
                              id: "composer.worktreeSetupFailed",
                              defaultMessage: "Worktree setup failed. Check .codex/environments for a setup script",
                            })
                          : ((o = e), (0, s.Rt_)(o).includes(S.bj))
                            ? n.formatMessage({
                                id: "composer.closedAgentError",
                                defaultMessage: "Ask parent to resume sub-agent to continue conversation",
                              })
                            : "cloud" === t
                              ? (function (e, t) {
                                  if ((0, s.Rt_)(e) === a.lr) return t.formatMessage(v.A.appInput)
                                  let n = e instanceof Error ? (0, x.d)(e) : null
                                  return n?.type === b
                                    ? t.formatMessage({
                                        id: "composer.cloudTaskCreationError.missingGithubConnectorLink",
                                        defaultMessage:
                                          "No GitHub connection. Reconnect your GitHub account in Plugins",
                                      })
                                    : t.formatMessage(
                                        {
                                          id: "composer.cloudTaskCreationError.v2",
                                          defaultMessage: "Error submitting message{br}{error}",
                                        },
                                        {
                                          br: (0, r.jsx)("br", {}, "cloud-task-creation-error-break"),
                                          error: n?.message ?? (0, s.Rt_)(e),
                                        },
                                      )
                                })(e, n)
                              : (function (e, t) {
                                  if ((0, s.Rt_)(e) === a.lr) return t.formatMessage(v.A.appInput)
                                  let n = e instanceof Error ? (0, x.d)(e) : null
                                  return n?.type === b
                                    ? t.formatMessage({
                                        id: "composer.cloudTaskError.missingGithubConnectorLink",
                                        defaultMessage:
                                          "No GitHub connection. Reconnect your GitHub account in Plugins",
                                      })
                                    : t.formatMessage(
                                        {
                                          id: "composer.cloudTaskError.v2",
                                          defaultMessage: "Error submitting message{br}{error}",
                                        },
                                        {
                                          br: (0, r.jsx)("br", {}, "task-creation-error-break"),
                                          error: n?.message ?? (0, s.Rt_)(e),
                                        },
                                      )
                                })(e, n)
                    })({ error: e, composerMode: c, intl: G }),
                    { id: t, primaryAction: o, errorAnalytics: w },
                  )
            }),
            (n[0] = c),
            (n[1] = y),
            (n[2] = k),
            (n[3] = C),
            (n[4] = G),
            (n[5] = T),
            (n[6] = t))
          : (t = n[6]),
        t
      )
    }
    function P(e, t) {
      if ((0, s.Rt_)(e) === a.lr) return t.formatMessage(v.A.appInput)
      let n = R(e, t)
      if (null != n) return n
      let o = _(e, t)
      if (null != o) return o
      let i = E(e, t)
      return null != i
        ? i
        : N(e)
          ? t.formatMessage({
              id: "composer.worktreeSetupFailed",
              defaultMessage: "Worktree setup failed. Check .codex/environments for a setup script",
            })
          : t.formatMessage(
              { id: "composer.localTaskError.v2", defaultMessage: "Error starting chat{br}{error}" },
              { br: (0, r.jsx)("br", {}), error: (0, s.Rt_)(e) },
            )
    }
    function R(e, t) {
      return (0, s.Rt_)(e) === c.W
        ? t.formatMessage({
            id: "composer.threadReferences.toolUnavailable",
            defaultMessage: "Chat references aren't available here. Remove them or start a new chat",
          })
        : null
    }
    function N(e) {
      return !!e && "object" == typeof e && e.data?.code === "worktree_init_failed"
    }
    function E(e, t) {
      let n = (0, s.Rt_)(e)
      return n.includes(y.mb)
        ? t.formatMessage({
            id: "composer.submitToast.restorableWorkingDirectory",
            defaultMessage: "Restore the worktree to continue",
          })
        : n.includes(y.fX)
          ? t.formatMessage({
              id: "composer.submitToast.missingWorkingDirectory",
              defaultMessage: "The worktree no longer exists",
            })
          : n.includes(y.V4)
            ? t.formatMessage({
                id: "composer.submitToast.workspaceStatusUnavailable",
                defaultMessage: "Couldn't check worktree status",
              })
            : null
    }
  },
  oynk(e, t, n) {
    n.d(t, {}, { a: class extends Error {} })
  },
  IiOi(e, t, n) {
    n.d(t, {}, { m: class extends Error {} })
  },
  Laxs(e, t, n) {
    var r = n("ABep"),
      o = n("QosV"),
      i = n("qmMi"),
      s = n("zd8w"),
      a = n("Wf1j"),
      l = n("oyxz"),
      c = n("Sm6l"),
      d = n("SGsN"),
      u = n("Yewb"),
      m = n("OWtl"),
      p = n("rLsS"),
      g = n("KZOJ"),
      f = n("fUey")
    function h() {
      return { status: "unavailable" }
    }
    n.d(
      t,
      {},
      {
        z: function (e) {
          let t,
            n,
            v,
            x,
            b,
            y = (0, o.c)(21),
            { connectorId: k, disabled: _, reconnect: S, compact: j } = e,
            I = void 0 !== j && j,
            A = (0, i.gh)(m.u)
          y[0] !== k ? ((t = (0, f.Pt)(k)), (y[0] = k), (y[1] = t)) : (t = y[1])
          let M = t,
            w = (0, a.A)(),
            { status: C } = (0, u.XY)(),
            [P, R] = (0, s.useState)(!1),
            N = P || null != C,
            E = I ? "ghostActive" : "accent",
            G = _ || N,
            T = I ? "menuRow" : "dialog"
          return (
            y[2] !== k || y[3] !== w || y[4] !== M || y[5] !== A
              ? ((n = () => {
                  ;(R(!0),
                    (0, p.X_)(A, k, { allowGitLab: !0 })
                      .catch(h)
                      .then((e) => {
                        if ("unavailable" === e.status)
                          return void A.get(d.Id).danger(
                            w.formatMessage(
                              {
                                id: "environmentSetup.repositoryPicker.connectProvider.unavailable",
                                defaultMessage: "{provider} could not be loaded. Try again",
                              },
                              { provider: M },
                            ),
                            {
                              errorAnalytics: {
                                toastId: "environmentSetup.repositoryPicker.connectGithub.unavailable",
                              },
                            },
                          )
                      })
                      .finally(() => {
                        R(!1)
                      }))
                }),
                (y[2] = k),
                (y[3] = w),
                (y[4] = M),
                (y[5] = A),
                (y[6] = n))
              : (n = y[6]),
            y[7] !== I || y[8] !== k
              ? ((v = I ? (0, r.jsx)(g.R, { connectorId: k, compact: !0 }) : null), (y[7] = I), (y[8] = k), (y[9] = v))
              : (v = y[9]),
            y[10] !== M || y[11] !== S
              ? ((x = S
                  ? (0, r.jsx)(l.A, {
                      id: "restricted.environmentSetup.repositoryPicker.reconnectAction.provider",
                      defaultMessage: "Reconnect {provider}",
                      values: { provider: M },
                    })
                  : (0, r.jsx)(l.A, {
                      id: "restricted.environmentSetup.repositoryPicker.connectAction.provider",
                      defaultMessage: "Connect {provider}",
                      values: { provider: M },
                    })),
                (y[10] = M),
                (y[11] = S),
                (y[12] = x))
              : (x = y[12]),
            y[13] !== N || y[14] !== E || y[15] !== G || y[16] !== T || y[17] !== n || y[18] !== v || y[19] !== x
              ? ((b = (0, r.jsxs)(c.$, {
                  "aria-busy": N,
                  color: E,
                  disabled: G,
                  loading: N,
                  size: T,
                  onClick: n,
                  children: [v, x],
                })),
                (y[13] = N),
                (y[14] = E),
                (y[15] = G),
                (y[16] = T),
                (y[17] = n),
                (y[18] = v),
                (y[19] = x),
                (y[20] = b))
              : (b = y[20]),
            b
          )
        },
      },
    )
  },
  nv0p(e, t, n) {
    var r = n("ABep"),
      o = n("QosV"),
      i = n("qmMi"),
      s = n("zd8w"),
      a = n("v7qY"),
      l = n("Wf1j"),
      c = n("oyxz"),
      d = n("Ywss"),
      u = n("Sm6l"),
      m = n("JNtf"),
      p = n("mUDD"),
      g = n("eA5w"),
      f = n("o8WW"),
      h = n("OWtl"),
      v = n("Bc5r"),
      x = n("oiiw"),
      b = n("BExl"),
      y = n("Xf6D")
    function k(e) {
      let { repository: t } = e
      return t.id
    }
    n.d(
      t,
      {},
      {
        CloudEnvironmentCreateDialog: function (e) {
          let t,
            n,
            _,
            S,
            j,
            I,
            A,
            M,
            w,
            C,
            P,
            R,
            N,
            E,
            G,
            T,
            D,
            L,
            U,
            O,
            $ = (0, o.c)(54),
            { onClose: z, onStartSetup: B } = e,
            W = (0, i.gh)(h.u)
          $[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = { hostId: (0, g.Y)(), cwd: null }), ($[0] = t))
            : (t = $[0])
          let Y = (0, f.D)(t),
            H = (0, l.A)(),
            q = (0, d.Zp)(),
            F = (0, d.zy)(),
            Q = (0, v.M0)()
          $[1] === Symbol.for("react.memo_cache_sentinel") ? ((n = []), ($[1] = n)) : (n = $[1])
          let [V, J] = (0, s.useState)(n),
            [Z, K] = (0, s.useState)(!1),
            X = "/connector/oauth_callback" !== F.pathname
          ;($[2] !== z || $[3] !== Z
            ? ((_ = (e) => {
                e || Z || z()
              }),
              ($[2] = z),
              ($[3] = Z),
              ($[4] = _))
            : (_ = $[4]),
            $[5] !== H ||
            $[6] !== Y ||
            $[7] !== q ||
            $[8] !== Q ||
            $[9] !== z ||
            $[10] !== B ||
            $[11] !== V ||
            $[12] !== W ||
            $[13] !== Z
              ? ((S = (e) => {
                  e.preventDefault()
                  let t = V[0]
                  if (null == t || Z || Y.isLoading) return
                  K(!0)
                  let n = (0, x.K)(W, H, {
                    name: t.repository.name,
                    repositorySelections: V,
                    modelSettings: Y,
                    networkPolicy: { type: "restricted", presets: ["package_managers"], egress_rules: [] },
                  })
                  ;((0, a.flushSync)(() => {
                    ;(B?.(), z(), Q(n, (0, g.Y)()))
                  }),
                    (0, x.p)(W, H, q, n))
                }),
                ($[5] = H),
                ($[6] = Y),
                ($[7] = q),
                ($[8] = Q),
                ($[9] = z),
                ($[10] = B),
                ($[11] = V),
                ($[12] = W),
                ($[13] = Z),
                ($[14] = S))
              : (S = $[14]),
            $[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((j = (0, r.jsx)("img", {
                  className: "h-24 w-36 shrink-0 self-center object-contain",
                  alt: "",
                  draggable: !1,
                  src: y,
                })),
                ($[15] = j))
              : (j = $[15]),
            $[16] !== V ? ((I = V.map(k)), ($[16] = V), ($[17] = I)) : (I = $[17]),
            $[18] === Symbol.for("react.memo_cache_sentinel")
              ? ((A = (0, r.jsx)(m.L3, {
                  className: "heading-lg font-semibold",
                  children: (0, r.jsx)(c.A, {
                    id: "restricted.environmentSetup.create.title",
                    defaultMessage: "Create a cloud environment",
                  }),
                })),
                ($[18] = A))
              : (A = $[18]),
            $[19] === Symbol.for("react.memo_cache_sentinel")
              ? ((M = (0, r.jsxs)(r.Fragment, {
                  children: [
                    A,
                    (0, r.jsx)(m.rr, {
                      className: "text-base text-secondary",
                      children: (0, r.jsx)(c.A, {
                        id: "environmentSetup.create.reusableSetupDescription",
                        defaultMessage:
                          "Codex helps you set up the tools your repositories need. Reuse that setup across cloud chats.",
                      }),
                    }),
                  ],
                })),
                ($[19] = M))
              : (M = $[19]),
            $[20] !== V
              ? ((w = (e, t) => {
                  J(
                    t
                      ? [...V, e]
                      : V.filter((t) => {
                          let { repository: n } = t
                          return n.id !== e.repository.id
                        }),
                  )
                }),
                ($[20] = V),
                ($[21] = w))
              : (w = $[21]),
            $[22] !== Z || $[23] !== w || $[24] !== I
              ? ((C = (0, r.jsx)(b.CloudEnvironmentRepositoryPicker, {
                  disabled: Z,
                  selectedRepositoryIds: I,
                  header: M,
                  onChange: w,
                })),
                ($[22] = Z),
                ($[23] = w),
                ($[24] = I),
                ($[25] = C))
              : (C = $[25]),
            $[26] !== V.length
              ? ((P = (0, r.jsx)("span", {
                  className: "me-auto text-sm text-secondary select-none",
                  "aria-live": "polite",
                  children: (0, r.jsx)(c.A, {
                    id: "environmentSetup.create.repositorySelectionCount",
                    defaultMessage: "{count, plural, =0 {None selected} one {# selected} other {# selected}}",
                    values: { count: V.length },
                  }),
                })),
                ($[26] = V.length),
                ($[27] = P))
              : (P = $[27]),
            $[28] === Symbol.for("react.memo_cache_sentinel")
              ? ((R = (0, r.jsx)(c.A, { id: "restricted.environmentSetup.create.cancel", defaultMessage: "Cancel" })),
                ($[28] = R))
              : (R = $[28]),
            $[29] !== z || $[30] !== Z
              ? ((N = (0, r.jsx)(u.$, {
                  color: "secondary",
                  disabled: Z,
                  onClick: z,
                  size: "dialog",
                  type: "button",
                  children: R,
                })),
                ($[29] = z),
                ($[30] = Z),
                ($[31] = N))
              : (N = $[31]))
          let ee = Z || 0 === V.length || Y.isLoading
          return (
            $[32] !== Z
              ? ((E = Z
                  ? (0, r.jsx)(c.A, {
                      id: "restricted.environmentSetup.create.starting",
                      defaultMessage: "Starting setup\u2026",
                    })
                  : null),
                ($[32] = Z),
                ($[33] = E))
              : (E = $[33]),
            $[34] !== Z
              ? ((G = Z
                  ? null
                  : (0, r.jsx)(c.A, {
                      id: "restricted.environmentSetup.create.startSetup",
                      defaultMessage: "Get started",
                    })),
                ($[34] = Z),
                ($[35] = G))
              : (G = $[35]),
            $[36] !== ee || $[37] !== E || $[38] !== G
              ? ((T = (0, r.jsxs)(u.$, {
                  color: "primary",
                  disabled: ee,
                  size: "dialog",
                  type: "submit",
                  children: [E, G],
                })),
                ($[36] = ee),
                ($[37] = E),
                ($[38] = G),
                ($[39] = T))
              : (T = $[39]),
            $[40] !== P || $[41] !== N || $[42] !== T
              ? ((D = (0, r.jsxs)(p.Es, { className: "flex-wrap", expandSingleButton: !1, children: [P, N, T] })),
                ($[40] = P),
                ($[41] = N),
                ($[42] = T),
                ($[43] = D))
              : (D = $[43]),
            $[44] !== C || $[45] !== D
              ? ((L = (0, r.jsxs)("div", { className: "flex min-h-0 flex-col gap-5 pt-6", children: [C, D] })),
                ($[44] = C),
                ($[45] = D),
                ($[46] = L))
              : (L = $[46]),
            $[47] !== L || $[48] !== S
              ? ((U = (0, r.jsxs)(p.R4, { as: "form", size: "viewport", onSubmit: S, children: [j, L] })),
                ($[47] = L),
                ($[48] = S),
                ($[49] = U))
              : (U = $[49]),
            $[50] !== U || $[51] !== X || $[52] !== _
              ? ((O = (0, r.jsx)(m.lG, { open: X, size: "beacon", onOpenChange: _, children: U })),
                ($[50] = U),
                ($[51] = X),
                ($[52] = _),
                ($[53] = O))
              : (O = $[53]),
            O
          )
        },
      },
    )
  },
  Jd1d(e, t, n) {
    var r = n("ABep"),
      o = n("QosV"),
      i = n("oyxz"),
      s = n("Sm6l"),
      a = n("FrrB"),
      l = n("Laxs"),
      c = n("KZOJ"),
      d = n("fUey")
    function u() {
      return (0, r.jsx)("br", {})
    }
    n.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            n,
            m,
            p,
            g,
            f = (0, o.c)(23),
            {
              connectorId: h,
              connectionIcon: v,
              connectionMessage: x,
              connectionAction: b,
              disabled: y,
              reconnect: k,
              status: _,
              onRetry: S,
            } = e
          f[0] !== h ? ((t = (0, d.Pt)(h)), (f[0] = h), (f[1] = t)) : (t = f[1])
          let j = t
          if ("error" === _) {
            let e, t, o
            ;(f[2] !== j
              ? ((e = (0, r.jsx)(i.A, {
                  id: "restricted.environmentSetup.repositoryPicker.connectionError.provider",
                  defaultMessage: "{provider} connections couldn\u2019t load",
                  values: { provider: j },
                })),
                (f[2] = j),
                (f[3] = e))
              : (e = f[3]),
              (n = e),
              f[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, r.jsx)(i.A, {
                    id: "restricted.environmentSetup.repositoryPicker.retryConnection",
                    defaultMessage: "Try again",
                  })),
                  (f[4] = t))
                : (t = f[4]),
              f[5] !== y || f[6] !== S
                ? ((o = (0, r.jsx)(s.$, { color: "accent", disabled: y, onClick: S, size: "dialog", children: t })),
                  (f[5] = y),
                  (f[6] = S),
                  (f[7] = o))
                : (o = f[7]),
              (m = o))
          } else if ("disabled" === _) {
            let e
            ;(f[8] !== j
              ? ((e = (0, r.jsx)(i.A, {
                  id: "restricted.environmentSetup.repositoryPicker.blockedGuidance.provider",
                  defaultMessage:
                    "{provider} isn\u2019t enabled in this workspace<br></br>Ask a workspace admin to enable the {provider} plugin",
                  values: { provider: j, br: u },
                })),
                (f[8] = j),
                (f[9] = e))
              : (e = f[9]),
              (n = e))
          } else {
            let e
            ;((n = x),
              f[10] !== b || f[11] !== h || f[12] !== y || f[13] !== k
                ? ((e = b ?? (0, r.jsx)(l.z, { connectorId: h, disabled: y, reconnect: k })),
                  (f[10] = b),
                  (f[11] = h),
                  (f[12] = y),
                  (f[13] = k),
                  (f[14] = e))
                : (e = f[14]),
              (m = e))
          }
          return (
            f[15] !== v || f[16] !== h || f[17] !== _
              ? ((p = "connect" === _ ? (v ?? (0, r.jsx)(c.R, { connectorId: h })) : void 0),
                (f[15] = v),
                (f[16] = h),
                (f[17] = _),
                (f[18] = p))
              : (p = f[18]),
            f[19] !== m || f[20] !== n || f[21] !== p
              ? ((g = (0, r.jsx)(a.A, {
                  className: "flex-1 select-none",
                  title: null,
                  description: n,
                  actions: m,
                  illustration: p,
                  illustrationSize: "icon",
                })),
                (f[19] = m),
                (f[20] = n),
                (f[21] = p),
                (f[22] = g))
              : (g = f[22]),
            g
          )
        },
      },
    )
  },
  KZOJ(e, t, n) {
    n.d(t, { R: () => m })
    var r = n("ABep"),
      o = n("QosV")
    let i = (0, n("ESTr").a)({
      name: "github-logo-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.333252, y: 1.300293, width: 13.333252, height: 13.004395 },
        visualBounds: { x: 1.333252, y: 1.300293, width: 13.333252, height: 13.004395 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.333252, y: 1.300293, width: 13.333252, height: 13.004395 },
        center: { x: 7.999878, y: 7.802491 },
        insets: { top: 1.300293, right: 1.333496, bottom: 1.695312, left: 1.333252 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999878, y: 7.802491 }, foreground: { x: 7.999878, y: 7.802491 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.99992 1.30029C11.6833 1.30029 14.6666 4.28363 14.6666 7.96696C14.6662 9.36379 14.2278 10.7253 13.4131 11.86C12.5984 12.9946 11.4484 13.8452 10.1249 14.292C9.79158 14.3586 9.66658 14.1503 9.66658 13.9753C9.66658 13.7503 9.67492 13.0336 9.67492 12.142C9.67492 11.517 9.46659 11.117 9.22492 10.9086C10.7083 10.742 12.2666 10.1753 12.2666 7.61696C12.2666 6.88363 12.0083 6.29196 11.5833 5.82529C11.6499 5.65863 11.8833 4.97529 11.5166 4.05863C11.5166 4.05863 10.9583 3.87529 9.68325 4.74196C9.14992 4.59196 8.58325 4.51696 8.01659 4.51696C7.44992 4.51696 6.88325 4.59196 6.34992 4.74196C5.07492 3.88363 4.51659 4.05863 4.51659 4.05863C4.14992 4.97529 4.38325 5.65863 4.44992 5.82529C4.02492 6.29196 3.76659 6.89196 3.76659 7.61696C3.76659 10.167 5.31659 10.742 6.79992 10.9086C6.60825 11.0753 6.43325 11.367 6.37492 11.8003C5.99159 11.9753 5.03325 12.2586 4.43325 11.2503C4.30825 11.0503 3.93325 10.5586 3.40825 10.567C2.84992 10.5753 3.18325 10.8836 3.41659 11.0086C3.69992 11.167 4.02492 11.7586 4.09992 11.9503C4.23325 12.3253 4.66659 13.042 6.34159 12.7336C6.34159 13.292 6.34992 13.817 6.34992 13.9753C6.34992 14.1503 6.22492 14.3503 5.89159 14.292C4.56378 13.85 3.40886 13.0011 2.59066 11.8658C1.77246 10.7305 1.33252 9.36638 1.33325 7.96696C1.33325 4.28363 4.31659 1.30029 7.99992 1.30029Z" fill="currentColor"/>',
    })
    var s = n("on57"),
      a = n("HOLv"),
      l = n("z7xo"),
      c = n("WcS9"),
      d = n("fUey")
    let u = { [d.Lw.GitHub]: l.A, [d.Lw.GitLab]: c.A }
    function m(e) {
      let t,
        n,
        l = (0, o.c)(10),
        { connectorId: c, compact: m, className: p } = e,
        g = void 0 !== m && m,
        f = (0, d.Pt)(c)
      if (g && f === d.Lw.GitHub) {
        let e, t
        return (
          l[0] !== p ? ((e = (0, s.A)("shrink-0", p)), (l[0] = p), (l[1] = e)) : (e = l[1]),
          l[2] !== e
            ? ((t = (0, r.jsx)(a.I, { asset: i, alignment: "composite", className: e })), (l[2] = e), (l[3] = t))
            : (t = l[3]),
          t
        )
      }
      let h = u[f]
      return (
        l[4] !== p || l[5] !== g
          ? ((t = g ? (0, s.A)("icon-xs shrink-0", p) : p), (l[4] = p), (l[5] = g), (l[6] = t))
          : (t = l[6]),
        l[7] !== h || l[8] !== t
          ? ((n = (0, r.jsx)(h, { className: t })), (l[7] = h), (l[8] = t), (l[9] = n))
          : (n = l[9]),
        n
      )
    }
  },
  BExl(e, t, n) {
    n.d(t, { CloudEnvironmentRepositoryPicker: () => z })
    var r = n("ABep"),
      o = n("QosV"),
      i = n("on57"),
      s = n("i5ac"),
      a = n.n(s),
      l = n("qmMi"),
      c = n("zd8w"),
      d = n("Wf1j"),
      u = n("oyxz"),
      m = n("Rvvc"),
      p = n("Sm6l"),
      g = n("Sezd"),
      f = n("mUDD"),
      h = n("Ot7V"),
      v = n("evwP"),
      x = n("FrrB"),
      b = n("okCa"),
      y = n("RNul"),
      k = n("mYWF"),
      _ = n("OWtl"),
      S = n("S5Ho"),
      j = n("LH8k"),
      I = n("GEsy"),
      A = n("VPEh"),
      M = n("Jd1d"),
      w = n("rLsS"),
      C = n("fUey"),
      P = n("HFi9"),
      R = n.n(P),
      N = n("bqtn"),
      E = n("bVeK"),
      G = n("X3K1"),
      T = n("KZOJ")
    function D(e) {
      let t,
        n,
        s,
        a,
        c,
        g,
        f,
        v,
        x,
        b,
        y,
        k,
        j,
        I,
        A,
        M = (0, o.c)(61),
        {
          connector: P,
          connectors: D,
          disabled: $,
          headerAlignment: z,
          configureInAccountMenu: B,
          browsing: W,
          connectorsPending: Y,
          getConfigureHref: H,
          onChange: q,
        } = e,
        F = (0, l.gh)(_.u),
        Q = (0, d.A)(),
        V = P?.id ?? m.qD,
        J = P?.linkId,
        Z = (0, C.Pt)(V),
        K = "github" === C.Gq[Z].accountHandleSource && null == J
      M[0] !== P ? ((t = (0, w.jh)(P)), (M[0] = P), (M[1] = t)) : (t = M[1])
      let X = "connected" === t.status
      M[2] !== V || M[3] !== J ? ((n = { connectorId: V, linkId: J }), (M[2] = V), (M[3] = J), (M[4] = n)) : (n = M[4])
      let ee = K && !$ && X
      M[5] !== ee ? ((s = { enabled: ee }), (M[5] = ee), (M[6] = s)) : (s = M[6])
      let { data: et, isError: en, isPending: er } = (0, l._U)(S.cd, n, s)
      M[7] !== P?.link?.owner_profile?.nickname || M[8] !== et || M[9] !== K
        ? ((a = K ? et : P?.link?.owner_profile?.nickname?.trim()),
          (M[7] = P?.link?.owner_profile?.nickname),
          (M[8] = et),
          (M[9] = K),
          (M[10] = a))
        : (a = M[10])
      let eo = a,
        ei = W && (!K || !en) && !!eo,
        es = Y || (W && K && er)
      M[11] !== W || M[12] !== V || M[13] !== D || M[14] !== $ || M[15] !== H || M[16] !== Q || M[17] !== F
        ? ((c = Object.entries(R()(D, O))),
          (g = D.length > 1 || W),
          (f = W
            ? c.map((e) => {
                let [t, n] = e,
                  o =
                    n.find((e) => {
                      let { id: t } = e
                      return t === V
                    }) ?? n[0]
                if (null == o) return null
                let i = H(o.id)
                return (0, r.jsx)(
                  N.ms.Item,
                  {
                    disabled: $,
                    href: i,
                    leftIcon: (0, r.jsx)(T.R, { connectorId: o.id, compact: !0 }),
                    "aria-label": Q.formatMessage(
                      {
                        id: "environmentSetup.repositoryPicker.connection.manageProviderConnections",
                        defaultMessage: "Manage {provider} connections",
                      },
                      { provider: t },
                    ),
                    onClick: (e) => {
                      ;((0, h.PQ)({
                        event: e,
                        href: i,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser",
                      }),
                        (0, w.pI)(F, "none"))
                    },
                    children:
                      c.length > 1
                        ? t
                        : (0, r.jsx)(u.A, {
                            id: "environmentSetup.repositoryPicker.connection.manageProviderConnections",
                            defaultMessage: "Manage {provider} connections",
                            values: { provider: t },
                          }),
                  },
                  t,
                )
              })
            : null),
          (M[11] = W),
          (M[12] = V),
          (M[13] = D),
          (M[14] = $),
          (M[15] = H),
          (M[16] = Q),
          (M[17] = F),
          (M[18] = c),
          (M[19] = g),
          (M[20] = f))
        : ((c = M[18]), (g = M[19]), (f = M[20]))
      let ea = f
      M[21] !== V ? ((v = (0, r.jsx)(T.R, { connectorId: V, compact: !0 })), (M[21] = V), (M[22] = v)) : (v = M[22])
      let el = ei ? "group" : void 0,
        ec = ei
          ? Q.formatMessage(
              {
                id: "restricted.environmentSetup.repositoryPicker.connection.browsingAs.provider",
                defaultMessage: "Browsing {provider} as @{handle}",
              },
              { provider: Z, handle: eo },
            )
          : void 0
      ;(M[23] !== eo || M[24] !== es || M[25] !== P?.accountLabel || M[26] !== Z || M[27] !== ei
        ? ((x =
            !ei && es
              ? (0, r.jsx)(G.X, { as: "span", className: "w-64 max-w-full", size: "sm" })
              : (0, r.jsx)("span", { className: "truncate", children: ei ? eo : (P?.accountLabel ?? Z) })),
          (M[23] = eo),
          (M[24] = es),
          (M[25] = P?.accountLabel),
          (M[26] = Z),
          (M[27] = ei),
          (M[28] = x))
        : (x = M[28]),
        M[29] !== el || M[30] !== ec || M[31] !== x
          ? ((b = (0, r.jsx)("span", {
              id: "cloud-environment-repo-account",
              className: "flex h-5 min-w-0 items-center",
              role: el,
              "aria-label": ec,
              children: x,
            })),
            (M[29] = el),
            (M[30] = ec),
            (M[31] = x),
            (M[32] = b))
          : (b = M[32]),
        M[33] !== g ? ((y = g ? (0, r.jsx)(E.Aq_, {}) : null), (M[33] = g), (M[34] = y)) : (y = M[34]),
        M[35] !== b || M[36] !== y || M[37] !== v
          ? ((k = (0, r.jsxs)(r.Fragment, { children: [v, b, y] })), (M[35] = b), (M[36] = y), (M[37] = v), (M[38] = k))
          : (k = M[38]))
      let ed = k,
        eu = "start" === z ? "justify-start" : "justify-center"
      return (
        M[39] !== eu
          ? ((j = (0, i.A)("flex min-h-7 max-w-full min-w-0 items-center gap-2 text-sm text-secondary", eu)),
            (M[39] = eu),
            (M[40] = j))
          : (j = M[40]),
        M[41] !== W ||
        M[42] !== B ||
        M[43] !== ed ||
        M[44] !== P?.accountLabel ||
        M[45] !== V ||
        M[46] !== D ||
        M[47] !== $ ||
        M[48] !== z ||
        M[49] !== Q ||
        M[50] !== J ||
        M[51] !== ea ||
        M[52] !== q ||
        M[53] !== Z ||
        M[54] !== c ||
        M[55] !== ei ||
        M[56] !== g
          ? ((I = g
              ? (0, r.jsxs)(N.Ab, {
                  align: "end",
                  contentMaxHeight: "list",
                  contentWidth: "menu",
                  disabled: $,
                  triggerButton: (0, r.jsx)(p.$, {
                    className: (0, i.A)("max-w-full", "start" === z && !B && "-ms-2"),
                    allowShrink: !0,
                    "aria-describedby": ei ? "cloud-environment-repo-account" : void 0,
                    "aria-label": Q.formatMessage(
                      {
                        id: "restricted.environmentSetup.repositoryPicker.connection.selectionLabel.provider",
                        defaultMessage: "{provider} connection: {connection}",
                      },
                      { provider: Z, connection: P?.accountLabel ?? "" },
                    ),
                    color: "ghostSecondary",
                    disabled: $,
                    size: "settingsAction",
                    radius: "full",
                    children: ed,
                  }),
                  children: [
                    (0, r.jsxs)(N.ms.Group, {
                      children: [
                        (0, r.jsx)(N.ms.SectionLabel, {
                          children: (0, r.jsx)(u.A, {
                            id: "environmentSetup.repositoryPicker.connection.selectConnection",
                            defaultMessage: "Select connection",
                          }),
                        }),
                        D.map((e) =>
                          (0, r.jsx)(
                            N.ms.Item,
                            {
                              leftIcon: (0, r.jsx)(T.R, { connectorId: e.id, compact: !0 }),
                              RightIcon: e.id === V && e.linkId === J ? E.ALZ : void 0,
                              onSelect: () => q(e),
                              children:
                                e.accountLabel !== e.name
                                  ? (0, r.jsx)("span", {
                                      className: "flex min-w-0 items-center gap-2",
                                      children: (0, r.jsx)(u.A, {
                                        id: "environmentSetup.repositoryPicker.connection.accountAndProvider",
                                        defaultMessage:
                                          "<account>{accountName}</account> <provider>{providerName}</provider>",
                                        values: {
                                          accountName: e.accountLabel,
                                          providerName: e.name,
                                          account: U,
                                          provider: L,
                                        },
                                      }),
                                    })
                                  : e.accountLabel,
                            },
                            `${e.id}:${e.linkId ?? ""}`,
                          ),
                        ),
                      ],
                    }),
                    W
                      ? (0, r.jsx)(N.ms.Group, {
                          children:
                            c.length > 1
                              ? (0, r.jsx)(N.ms.SubmenuItem, {
                                  trigger: (0, r.jsx)(N.ms.Item, {
                                    disabled: $,
                                    children: (0, r.jsx)(u.A, {
                                      id: "environmentSetup.repositoryPicker.connection.manageConnections",
                                      defaultMessage: "Manage connections",
                                    }),
                                  }),
                                  children: ea,
                                })
                              : ea,
                        })
                      : null,
                  ],
                })
              : (0, r.jsx)("div", {
                  className: (0, i.A)(
                    "flex min-w-0 items-center gap-1 text-base text-secondary",
                    "start" === z && "-ms-1",
                  ),
                  children: ed,
                })),
            (M[41] = W),
            (M[42] = B),
            (M[43] = ed),
            (M[44] = P?.accountLabel),
            (M[45] = V),
            (M[46] = D),
            (M[47] = $),
            (M[48] = z),
            (M[49] = Q),
            (M[50] = J),
            (M[51] = ea),
            (M[52] = q),
            (M[53] = Z),
            (M[54] = c),
            (M[55] = ei),
            (M[56] = g),
            (M[57] = I))
          : (I = M[57]),
        M[58] !== j || M[59] !== I
          ? ((A = (0, r.jsx)("div", { className: j, children: I })), (M[58] = j), (M[59] = I), (M[60] = A))
          : (A = M[60]),
        A
      )
    }
    function L(e) {
      return (0, r.jsx)("span", { className: "truncate text-tertiary", children: e }, "provider")
    }
    function U(e) {
      return (0, r.jsx)("span", { className: "truncate", children: e }, "account")
    }
    function O(e) {
      let { id: t } = e
      return (0, C.Pt)(t)
    }
    function $(e) {
      let t,
        n,
        i,
        s,
        g,
        f,
        v,
        x,
        b,
        y,
        k,
        j,
        I,
        A,
        M,
        C,
        P,
        R,
        G,
        T,
        D,
        L = (0, o.c)(76),
        { connectorId: U, disabled: O, installation: $, linkId: z, onChange: B } = e,
        W = (0, l.gh)(_.u),
        Y = (0, d.A)(),
        [H, q] = (0, c.useState)(!1)
      L[0] !== U || L[1] !== z ? ((t = { connectorId: U, linkId: z }), (L[0] = U), (L[1] = z), (L[2] = t)) : (t = L[2])
      let F = !O
      L[3] !== F ? ((n = { enabled: F }), (L[3] = F), (L[4] = n)) : (n = L[4])
      let { data: Q, isError: V, isPending: J, refetch: Z } = (0, l._U)(S.ky, t, n)
      if (
        L[5] !== U ||
        L[6] !== Q?.app_installation_url ||
        L[7] !== Q?.memberships ||
        L[8] !== Q?.other ||
        L[9] !== O ||
        L[10] !== $ ||
        L[11] !== Y ||
        L[12] !== B ||
        L[13] !== H
      ) {
        let e, t, n, o, l, c, d, h
        ;(L[25] !== Q?.memberships ? ((e = Q?.memberships ?? []), (L[25] = Q?.memberships), (L[26] = e)) : (e = L[26]),
          L[27] !== Q?.other ? ((t = Q?.other ?? []), (L[27] = Q?.other), (L[28] = t)) : (t = L[28]))
        let _ = a()([...e, ...t], "id")
        ;((s = Q?.app_installation_url ?? (U === m.qD ? m.rh : null)),
          L[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, r.jsx)(u.A, {
                id: "restricted.environmentSetup.repositoryPicker.organization.all",
                defaultMessage: "All",
              })),
              (L[29] = n))
            : (n = L[29]))
        let S = n
        ;((i = N.Ab),
          (x = "end"),
          (b = "list"),
          (y = "menu"),
          (k = O),
          (j = H),
          (I = q),
          L[30] !== $ || L[31] !== Y
            ? ((o =
                null == $
                  ? Y.formatMessage({
                      id: "restricted.environmentSetup.repositoryPicker.organization.allSelectionLabel",
                      defaultMessage: "GitHub account: All repositories",
                    })
                  : Y.formatMessage(
                      {
                        id: "restricted.environmentSetup.repositoryPicker.organization.selectedAccountLabel",
                        defaultMessage: "GitHub account: {account}",
                      },
                      { account: $.account_login },
                    )),
              (L[30] = $),
              (L[31] = Y),
              (L[32] = o))
            : (o = L[32]))
        let A = $?.account_login ?? S
        ;(L[33] !== A
          ? ((l = (0, r.jsx)("span", { className: "truncate", children: A })), (L[33] = A), (L[34] = l))
          : (l = L[34]),
          L[35] === Symbol.for("react.memo_cache_sentinel") ? ((c = (0, r.jsx)(E.Aq_, {})), (L[35] = c)) : (c = L[35]),
          L[36] !== O || L[37] !== o || L[38] !== l
            ? ((g = (0, r.jsxs)(p.$, {
                className: "max-w-full",
                allowShrink: !0,
                "aria-label": o,
                color: "ghostSecondary",
                disabled: O,
                size: "settingsAction",
                radius: "full",
                children: [l, c],
              })),
              (L[36] = O),
              (L[37] = o),
              (L[38] = l),
              (L[39] = g))
            : (g = L[39]))
        let M = null == $ ? E.ALZ : void 0
        ;(L[40] !== B ? ((d = () => B(null)), (L[40] = B), (L[41] = d)) : (d = L[41]),
          L[42] !== M || L[43] !== d
            ? ((f = (0, r.jsx)(N.ms.Item, { RightIcon: M, onSelect: d, children: S })),
              (L[42] = M),
              (L[43] = d),
              (L[44] = f))
            : (f = L[44]),
          L[45] !== $?.id || L[46] !== B
            ? ((h = (e) =>
                (0, r.jsx)(
                  N.ms.Item,
                  { RightIcon: e.id === $?.id ? E.ALZ : void 0, onSelect: () => B(e), children: e.account_login },
                  e.id,
                )),
              (L[45] = $?.id),
              (L[46] = B),
              (L[47] = h))
            : (h = L[47]),
          (v = _.map(h)),
          (L[5] = U),
          (L[6] = Q?.app_installation_url),
          (L[7] = Q?.memberships),
          (L[8] = Q?.other),
          (L[9] = O),
          (L[10] = $),
          (L[11] = Y),
          (L[12] = B),
          (L[13] = H),
          (L[14] = i),
          (L[15] = s),
          (L[16] = g),
          (L[17] = f),
          (L[18] = v),
          (L[19] = x),
          (L[20] = b),
          (L[21] = y),
          (L[22] = k),
          (L[23] = j),
          (L[24] = I))
      } else
        ((i = L[14]),
          (s = L[15]),
          (g = L[16]),
          (f = L[17]),
          (v = L[18]),
          (x = L[19]),
          (b = L[20]),
          (y = L[21]),
          (k = L[22]),
          (j = L[23]),
          (I = L[24]))
      ;(L[48] !== J
        ? ((A = J
            ? (0, r.jsx)(N.ms.Message, {
                compact: !0,
                children: (0, r.jsx)(u.A, {
                  id: "restricted.environmentSetup.repositoryPicker.organization.loading",
                  defaultMessage: "Loading organizations\u2026",
                }),
              })
            : null),
          (L[48] = J),
          (L[49] = A))
        : (A = L[49]),
        L[50] !== V || L[51] !== Z
          ? ((M = V
              ? (0, r.jsx)(N.ms.Item, {
                  onSelect: () => void Z(),
                  children: (0, r.jsx)(u.A, {
                    id: "restricted.environmentSetup.repositoryPicker.organization.retry",
                    defaultMessage: "Retry loading organizations",
                  }),
                })
              : null),
            (L[50] = V),
            (L[51] = Z),
            (L[52] = M))
          : (M = L[52]),
        L[53] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, r.jsx)(N.ms.Separator, {})), (L[53] = C))
          : (C = L[53]),
        L[54] === Symbol.for("react.memo_cache_sentinel") ? ((P = (0, r.jsx)(E.xFs, {})), (L[54] = P)) : (P = L[54]))
      let K = null == s
      return (
        L[55] !== s || L[56] !== W
          ? ((R = (e) => {
              null != s &&
                (q(!1),
                (0, h.PQ)({ event: e, href: s, initiator: "open_in_browser_bridge", openTarget: "external-browser" }),
                (0, w.pI)(W, "none"))
            }),
            (L[55] = s),
            (L[56] = W),
            (L[57] = R))
          : (R = L[57]),
        L[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((G = (0, r.jsx)(u.A, {
              id: "restricted.environmentSetup.repositoryPicker.connection.connectOrganization",
              defaultMessage: "Connect GitHub org",
            })),
            (L[58] = G))
          : (G = L[58]),
        L[59] !== K || L[60] !== R
          ? ((T = (0, r.jsx)(N.ms.Item, { leftIcon: P, disabled: K, onClick: R, children: G })),
            (L[59] = K),
            (L[60] = R),
            (L[61] = T))
          : (T = L[61]),
        L[62] !== i ||
        L[63] !== g ||
        L[64] !== f ||
        L[65] !== v ||
        L[66] !== A ||
        L[67] !== M ||
        L[68] !== T ||
        L[69] !== x ||
        L[70] !== b ||
        L[71] !== y ||
        L[72] !== k ||
        L[73] !== j ||
        L[74] !== I
          ? ((D = (0, r.jsxs)(i, {
              align: x,
              contentMaxHeight: b,
              contentWidth: y,
              disabled: k,
              open: j,
              onOpenChange: I,
              triggerButton: g,
              children: [f, v, A, M, C, T],
            })),
            (L[62] = i),
            (L[63] = g),
            (L[64] = f),
            (L[65] = v),
            (L[66] = A),
            (L[67] = M),
            (L[68] = T),
            (L[69] = x),
            (L[70] = b),
            (L[71] = y),
            (L[72] = k),
            (L[73] = j),
            (L[74] = I),
            (L[75] = D))
          : (D = L[75]),
        D
      )
    }
    function z(e) {
      let t,
        n,
        s,
        P,
        R,
        N,
        E,
        G,
        T,
        L,
        U,
        O,
        z = (0, o.c)(154),
        {
          disabled: H,
          allowedProviders: q,
          selectedRepositoryIds: F,
          header: Q,
          headerAlignment: V,
          configureInAccountMenu: J,
          onChange: Z,
          preferredConnectorId: K,
          selectionMode: X,
          maxRepositories: ee,
        } = e,
        et = void 0 === V ? "center" : V,
        en = void 0 !== J && J,
        er = void 0 === X ? "multiple" : X,
        eo = (0, l.gh)(_.u),
        ei = (0, d.A)(),
        es = null != ee && F.length >= ee,
        [ea, el] = (0, c.useState)(""),
        ec = (0, c.useRef)(null),
        [ed, eu] = (0, c.useState)(),
        [em, ep] = (0, c.useState)(null),
        [eg, ef] = (0, c.useState)(null)
      z[0] !== ea ? ((t = ea.trim()), (z[0] = ea), (z[1] = t)) : (t = z[1])
      let eh = t,
        ev = (0, I.o)(eh, 200),
        ex = ev !== eh,
        eb = "" !== eh || ex
      z[2] !== q ? ((n = { surface: "picker", allowedProviders: q }), (z[2] = q), (z[3] = n)) : (n = z[3])
      let { data: ey, hasDiscoveryError: ek, isError: e_, isPending: eS, refetch: ej } = (0, l._U)(A.G, n)
      z[4] !== ey || z[5] !== K || z[6] !== em
        ? ((s =
            ey?.find((e) => {
              let { id: t, linkId: n } = e
              return t === em?.connectorId && (null == em.linkId || n === em.linkId)
            }) ??
            ey?.find((e) => e.id === K && "connected" === (0, w.jh)(e).status) ??
            ey?.find(Y) ??
            ey?.find(W) ??
            ey?.[0]),
          (z[4] = ey),
          (z[5] = K),
          (z[6] = em),
          (z[7] = s))
        : (s = z[7])
      let eI = s,
        eA = eI?.id ?? m.qD
      z[8] !== eA ? ((P = (0, C.Pt)(eA)), (z[8] = eA), (z[9] = P)) : (P = z[9])
      let eM = P,
        { missingLinkError: ew, repositoryBrowseMode: eC } = C.Gq[eM],
        eP = "github-installations" === eC,
        eR = eI?.linkId
      z[10] !== eI ? ((R = (0, w.jh)(eI)), (z[10] = eI), (z[11] = R)) : (R = z[11])
      let { status: eN, reconnect: eE } = R
      z[12] !== eA || z[13] !== ey || z[14] !== eR
        ? ((N = ey?.some((e) => e.id === eA && null != e.linkId && e.linkId !== eR)),
          (z[12] = eA),
          (z[13] = ey),
          (z[14] = eR),
          (z[15] = N))
        : (N = z[15])
      let eG = N,
        eT = (e_ && !ey?.length) || "error" === eN,
        eD = "connected" === eN
      z[16] !== eA || z[17] !== eR
        ? ((E = { connectorId: eA, linkId: eR, poll: !0 }), (z[16] = eA), (z[17] = eR), (z[18] = E))
        : (E = z[18])
      let eL = eP && !H && eD
      z[19] !== eL ? ((G = { enabled: eL }), (z[19] = eL), (z[20] = G)) : (G = z[20])
      let { data: eU } = (0, l._U)(S.ky, E, G)
      ;(z[21] !== eA || z[22] !== eU || z[23] !== eR || z[24] !== eg
        ? ((T = eg?.installation ?? null),
          null != eg &&
            (eg.connectorId !== eA || eg.linkId !== eR
              ? (T = null)
              : null != eU &&
                (T =
                  [...eU.memberships, ...eU.other].find((e) => {
                    let { id: t } = e
                    return t === eg.installation.id
                  }) ?? null),
            null == T && ef(null)),
          (z[21] = eA),
          (z[22] = eU),
          (z[23] = eR),
          (z[24] = eg),
          (z[25] = T))
        : (T = z[25]),
        z[26] !== eA || z[27] !== ev || z[28] !== T || z[29] !== eR
          ? ((L = { connectorId: eA, linkId: eR, installation: T, query: ev, poll: !0 }),
            (z[26] = eA),
            (z[27] = ev),
            (z[28] = T),
            (z[29] = eR),
            (z[30] = L))
          : (L = z[30]))
      let eO = !H && !eT && eD
      z[31] !== eO ? ((U = { enabled: eO }), (z[31] = eO), (z[32] = U)) : (U = z[32])
      let {
        data: e$,
        error: ez,
        fetchNextPage: eB,
        hasNextPage: eW,
        isError: eY,
        isFetching: eH,
        isFetchingNextPage: eq,
        isFetchNextPageError: eF,
        isPending: eQ,
        refetch: eV,
      } = (0, l._U)(S.go, L, U)
      if (
        z[33] !== q ||
        z[34] !== en ||
        z[35] !== eD ||
        z[36] !== eT ||
        z[37] !== eI ||
        z[38] !== eA ||
        z[39] !== ey ||
        z[40] !== e_ ||
        z[41] !== eS ||
        z[42] !== ev ||
        z[43] !== H ||
        z[44] !== ek ||
        z[45] !== eB ||
        z[46] !== eG ||
        z[47] !== eW ||
        z[48] !== Q ||
        z[49] !== et ||
        z[50] !== T ||
        z[51] !== eU?.app_installation_url ||
        z[52] !== ei ||
        z[53] !== ex ||
        z[54] !== eb ||
        z[55] !== eR ||
        z[56] !== ew ||
        z[57] !== eF ||
        z[58] !== eq ||
        z[59] !== Z ||
        z[60] !== eM ||
        z[61] !== ea ||
        z[62] !== eE ||
        z[63] !== ej ||
        z[64] !== eV ||
        z[65] !== ez ||
        z[66] !== eY ||
        z[67] !== eH ||
        z[68] !== eQ ||
        z[69] !== e$ ||
        z[70] !== eo ||
        z[71] !== ed ||
        z[72] !== F ||
        z[73] !== es ||
        z[74] !== er ||
        z[75] !== eN ||
        z[76] !== eP
      ) {
        let e,
          t,
          n,
          o,
          s,
          l,
          c,
          d,
          _,
          S,
          I,
          A,
          P,
          R,
          N,
          E = null == e$ ? void 0 : a()(e$.pages.flatMap(B), "id"),
          G = eb || eQ ? ed : void 0
        z[78] !== q || z[79] !== eI || z[80] !== e_ || z[81] !== eS || z[82] !== H || z[83] !== ej
          ? ((e =
              null == eI && q && !q.includes(C.Lw.GitHub)
                ? (0, r.jsxs)(v.W, {
                    layout: "settings-row",
                    children: [
                      eS && (0, r.jsx)(y.y, {}),
                      !eS &&
                        e_ &&
                        (0, r.jsx)(p.$, {
                          color: "accent",
                          disabled: H,
                          onClick: () => void ej(),
                          size: "dialog",
                          children: (0, r.jsx)(u.A, {
                            id: "restricted.environmentSetup.repositoryPicker.retryConnection",
                            defaultMessage: "Try again",
                          }),
                        }),
                      !eS &&
                        !e_ &&
                        (0, r.jsx)(u.A, {
                          id: "environmentSetup.repositoryPicker.noAvailableConnections",
                          defaultMessage: "No repository connections available",
                        }),
                    ],
                  })
                : null),
            (z[78] = q),
            (z[79] = eI),
            (z[80] = e_),
            (z[81] = eS),
            (z[82] = H),
            (z[83] = ej),
            (z[84] = e))
          : (e = z[84])
        let L = e
        z[85] !== ew || z[86] !== ez
          ? ((t = ez instanceof Error && (0, j.d)(ez)?.type === ew), (z[85] = ew), (z[86] = ez), (z[87] = t))
          : (t = z[87])
        let U = t,
          W = eD && !U && !eT
        z[88] !== eA
          ? ((n = (0, k.Y2)({ appId: eA, installUrl: null, remotePluginId: null })), (z[88] = eA), (z[89] = n))
          : (n = z[89])
        let Y = n
        z[90] !== Y || z[91] !== eo
          ? ((o = (e) => {
              ;((0, h.PQ)({ event: e, href: Y, initiator: "open_in_browser_bridge", openTarget: "external-browser" }),
                (0, w.pI)(eo, "none"))
            }),
            (z[90] = Y),
            (z[91] = eo),
            (z[92] = o))
          : (o = z[92])
        let V = o
        ;(z[93] !== eM
          ? ((s = (0, r.jsx)(u.A, {
              id: "restricted.environmentSetup.repositoryPicker.openSettings.provider",
              defaultMessage: "Open {provider} settings",
              values: { provider: eM },
            })),
            (z[93] = eM),
            (z[94] = s))
          : (s = z[94]),
          z[95] !== H || z[96] !== V || z[97] !== s
            ? ((l = (0, r.jsx)(p.$, { color: "accent", disabled: H, onClick: V, size: "dialog", children: s })),
              (z[95] = H),
              (z[96] = V),
              (z[97] = s),
              (z[98] = l))
            : (l = z[98]))
        let J = l,
          K = null,
          X = eT ? "error" : eN
        z[99] !== eD ||
        z[100] !== eT ||
        z[101] !== eA ||
        z[102] !== J ||
        z[103] !== eS ||
        z[104] !== H ||
        z[105] !== X ||
        z[106] !== eG ||
        z[107] !== eR ||
        z[108] !== U ||
        z[109] !== eM ||
        z[110] !== eE ||
        z[111] !== ej ||
        z[112] !== eN
          ? ((d =
              eT || "disabled" === eN || (!eS && (!eD || U))
                ? (0, r.jsx)(M.P, {
                    connectorId: eA,
                    connectionMessage:
                      eE || U
                        ? (0, r.jsx)(u.A, {
                            id: "restricted.environmentSetup.repositoryPicker.reconnect.provider",
                            defaultMessage: "Reconnect {provider} to load your repositories",
                            values: { provider: eM },
                          })
                        : (0, r.jsx)(u.A, {
                            id: "restricted.environmentSetup.repositoryPicker.connect.provider",
                            defaultMessage: "Connect {provider} to see your repositories",
                            values: { provider: eM },
                          }),
                    connectionAction: null != eR && eG && (eE || U) ? J : void 0,
                    disabled: H,
                    reconnect: eE || U,
                    status: "connected" === X ? "connect" : X,
                    onRetry: () => void ej(),
                  })
                : null),
            (z[99] = eD),
            (z[100] = eT),
            (z[101] = eA),
            (z[102] = J),
            (z[103] = eS),
            (z[104] = H),
            (z[105] = X),
            (z[106] = eG),
            (z[107] = eR),
            (z[108] = U),
            (z[109] = eM),
            (z[110] = eE),
            (z[111] = ej),
            (z[112] = eN),
            (z[113] = d))
          : (d = z[113])
        let ee = d
        if (!eY || E?.length || eb) {
          if (!ex && null == T && "" === ev && E?.length === 0) {
            let e
            ;(z[121] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(u.A, {
                  id: "restricted.environmentSetup.repositoryPicker.noAccess",
                  defaultMessage: "No repositories are available to this connection",
                })),
                (z[121] = e))
              : (e = z[121]),
              (K = e),
              (c = J))
          }
        } else {
          let e, t, n, o
          ;(z[114] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(u.A, {
                id: "restricted.environmentSetup.repositoryPicker.loadError",
                defaultMessage: "Repositories couldn\u2019t load",
              })),
              (z[114] = e))
            : (e = z[114]),
            (K = e),
            z[115] !== eV ? ((t = () => void eV()), (z[115] = eV), (z[116] = t)) : (t = z[116]),
            z[117] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, r.jsx)(u.A, {
                  id: "restricted.environmentSetup.repositoryPicker.retryRepositories",
                  defaultMessage: "Try again",
                })),
                (z[117] = n))
              : (n = z[117]),
            z[118] !== H || z[119] !== t
              ? ((o = (0, r.jsx)(p.$, { color: "accent", disabled: H, onClick: t, size: "dialog", children: n })),
                (z[118] = H),
                (z[119] = t),
                (z[120] = o))
              : (o = z[120]),
            (c = o))
        }
        z[122] !== ee || z[123] !== c || z[124] !== K
          ? ((_ =
              ee ??
              (null != K
                ? (0, r.jsx)(x.A, { className: "flex-1 select-none", title: null, description: K, actions: c })
                : null)),
            (z[122] = ee),
            (z[123] = c),
            (z[124] = K),
            (z[125] = _))
          : (_ = z[125])
        let em = _
        z[126] !== ei
          ? ((S = ei.formatMessage({
              id: "restricted.environmentSetup.repositoryPicker.search",
              defaultMessage: "Search repositories",
            })),
            (z[126] = ei),
            (z[127] = S))
          : (S = z[127])
        let eg = S
        z[128] !== eA || z[129] !== T || z[130] !== eU?.app_installation_url
          ? ((I = (e) =>
              (e === eA ? (T?.html_url ?? eU?.app_installation_url) : void 0) ??
              (e === m.qD ? m.rh : (0, k.Y2)({ appId: e, installUrl: null, remotePluginId: null }))),
            (z[128] = eA),
            (z[129] = T),
            (z[130] = eU?.app_installation_url),
            (z[131] = I))
          : (I = z[131])
        let eh = I
        z[132] !== W ||
        z[133] !== en ||
        z[134] !== eI ||
        z[135] !== eA ||
        z[136] !== ey ||
        z[137] !== eS ||
        z[138] !== H ||
        z[139] !== eh ||
        z[140] !== et ||
        z[141] !== eR ||
        z[142] !== L
          ? ((A =
              null == L
                ? (0, r.jsx)(D, {
                    connector: eI,
                    connectors: ey,
                    disabled: H,
                    headerAlignment: et,
                    configureInAccountMenu: en,
                    browsing: W,
                    connectorsPending: eS,
                    getConfigureHref: eh,
                    onChange: (e) => {
                      ;(ep({ connectorId: e.id, linkId: e.linkId }), (e.id !== eA || e.linkId !== eR) && ef(null))
                    },
                  })
                : null),
            (z[132] = W),
            (z[133] = en),
            (z[134] = eI),
            (z[135] = eA),
            (z[136] = ey),
            (z[137] = eS),
            (z[138] = H),
            (z[139] = eh),
            (z[140] = et),
            (z[141] = eR),
            (z[142] = L),
            (z[143] = A))
          : (A = z[143])
        let eC = A,
          eL = (0, i.A)("gap-3 px-3 text-base", en && "multiple" === er ? "py-1.5 leading-5" : "py-1"),
          eO = "start" === et ? "gap-3" : "gap-4"
        ;(z[144] !== eO ? ((P = (0, i.A)("flex min-h-0 flex-col", eO)), (z[144] = eO), (z[145] = P)) : (P = z[145]),
          z[146] !== en || z[147] !== eC || z[148] !== Q || z[149] !== et
            ? ((R =
                "start" === et
                  ? (0, r.jsx)(f.c7, {
                      className: "shrink-0 select-none",
                      title: Q,
                      subtitle: en ? void 0 : eC,
                      subtitleTone: "secondary",
                    })
                  : (0, r.jsxs)("div", {
                      className: "flex flex-col items-center gap-2 text-center select-none",
                      children: [Q, !en && eC],
                    })),
              (z[146] = en),
              (z[147] = eC),
              (z[148] = Q),
              (z[149] = et),
              (z[150] = R))
            : (R = z[150]),
          z[151] !== en || z[152] !== eC
            ? ((N =
                en && null != eC
                  ? (0, r.jsxs)("div", {
                      className: "flex min-w-0 items-center justify-between gap-4",
                      children: [
                        (0, r.jsx)("span", {
                          className: "shrink-0 text-base font-medium",
                          children: (0, r.jsx)(u.A, {
                            id: "environmentSetup.repositoryPicker.connectedAsLabel",
                            defaultMessage: "Connected as",
                          }),
                        }),
                        eC,
                      ],
                    })
                  : null),
              (z[151] = en),
              (z[152] = eC),
              (z[153] = N))
            : (N = z[153]),
          (O = (0, r.jsxs)("div", {
            className: P,
            children: [
              R,
              N,
              L ??
                (0, r.jsxs)("div", {
                  className: "flex min-h-0 flex-1 flex-col gap-2",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex min-w-0 items-center justify-between gap-4",
                      children: [
                        (0, r.jsx)("span", {
                          className: "min-w-0 truncate text-base font-medium select-none",
                          children:
                            "single" === er
                              ? (0, r.jsx)(u.A, {
                                  id: "environmentSetup.repositoryPicker.single.label",
                                  defaultMessage: "Select a repository",
                                })
                              : (0, r.jsx)(u.A, {
                                  id: "restricted.environmentSetup.create.repositories.label",
                                  defaultMessage: "Select repositories",
                                }),
                        }),
                        eP && (W || eS)
                          ? (0, r.jsx)("div", {
                              className: "max-w-1/2 min-w-0",
                              children: (0, r.jsx)($, {
                                connectorId: eA,
                                disabled: H || eS,
                                installation: T,
                                linkId: eR,
                                onChange: (e) =>
                                  ef(null == e ? null : { connectorId: eA, linkId: eR, installation: e }),
                              }),
                            })
                          : null,
                      ],
                    }),
                    null == ee && (null == K || W)
                      ? (0, r.jsx)(b.s, {
                          id: "cloud-environment-repository-search",
                          className: "min-w-0 shrink-0",
                          autoFocus: !0,
                          variant: "toolbar",
                          label: eg,
                          onSearchQueryChange: (e) => {
                            ;(eb || "" === e.trim() || eu(ec.current?.offsetHeight || void 0), el(e))
                          },
                          placeholder: ei.formatMessage({
                            id: "restricted.environmentSetup.repositoryPicker.search.placeholder",
                            defaultMessage: "Search",
                          }),
                          searchQuery: ea,
                        })
                      : null,
                    ek && !eT
                      ? (0, r.jsx)(p.$, {
                          color: "ghostActive",
                          disabled: H,
                          onClick: () => void ej(),
                          children: (0, r.jsx)(u.A, {
                            id: "environmentSetup.repositoryPicker.connections.retry",
                            defaultMessage: "Retry loading repository connections",
                          }),
                        })
                      : null,
                    em ??
                      (0, r.jsxs)("div", {
                        ref: ec,
                        className: "max-h-64 min-h-0 overflow-y-auto select-none",
                        style: { height: G },
                        children: [
                          ex || eQ
                            ? (0, r.jsxs)("div", {
                                className: (0, i.A)("flex items-center text-secondary", eL),
                                role: "status",
                                children: [
                                  (0, r.jsx)(y.y, { className: "icon-xs", containerClassName: "min-w-4 shrink-0" }),
                                  (0, r.jsx)("span", {
                                    className: "truncate",
                                    children: (0, r.jsx)(u.A, {
                                      id: "restricted.environmentSetup.repositoryPicker.repositories.loading",
                                      defaultMessage: "Loading repositories\u2026",
                                    }),
                                  }),
                                ],
                              })
                            : null,
                          ex || !eY || eF
                            ? null
                            : (0, r.jsx)(p.$, {
                                color: "ghostActive",
                                disabled: H,
                                onClick: () => void eV(),
                                children: (0, r.jsx)(u.A, {
                                  id: "restricted.environmentSetup.repositoryPicker.repositories.retry",
                                  defaultMessage: "Retry loading repositories",
                                }),
                              }),
                          ex || eY || E?.length !== 0
                            ? null
                            : (0, r.jsx)(v.W, {
                                layout: null == G ? "settings-row" : "default",
                                className: null == G ? void 0 : "h-full",
                                children:
                                  "" !== ev
                                    ? (0, r.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.noMatches",
                                        defaultMessage: "No repositories match \u201C{query}\u201D",
                                        values: { query: ev },
                                      })
                                    : (0, r.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.repositories.empty",
                                        defaultMessage: "No repositories found",
                                      }),
                              }),
                          ex
                            ? null
                            : E?.map((e) => {
                                let t = F.includes(e.id),
                                  n = { linkId: eR, connectorId: (0, C.Ip)(e.id, eA), repository: e },
                                  o = e.repository_full_name.lastIndexOf("/") + 1,
                                  s = (0, r.jsxs)("span", {
                                    className: (0, i.A)("truncate", en && "single" !== er && "-translate-y-px"),
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: "text-secondary",
                                        children: e.repository_full_name.slice(0, o),
                                      }),
                                      e.repository_full_name.slice(o),
                                    ],
                                  })
                                return "single" === er
                                  ? (0, r.jsx)(
                                      p.$,
                                      {
                                        className: (0, i.A)(
                                          "w-full rounded-lg text-start hover:bg-secondary-ghost-hover",
                                          eL,
                                        ),
                                        disabled: H,
                                        unstyled: !0,
                                        onClick: () => Z(n, !0),
                                        type: "button",
                                        children: s,
                                      },
                                      e.id,
                                    )
                                  : (0, r.jsxs)(
                                      "label",
                                      {
                                        className: (0, i.A)("flex cursor-interaction items-center select-none", eL),
                                        htmlFor: `cloud-environment-repository-${e.id}`,
                                        children: [
                                          (0, r.jsx)("span", {
                                            className: "relative flex",
                                            children: (0, r.jsx)(g.S, {
                                              variant: "secondary",
                                              checked: t,
                                              disabled: H || (!t && (es || !e.default_branch)),
                                              id: `cloud-environment-repository-${e.id}`,
                                              onCheckedChange: (e) => {
                                                Z(n, !0 === e)
                                              },
                                            }),
                                          }),
                                          s,
                                          !e.default_branch &&
                                            (0, r.jsx)("span", {
                                              className: "text-secondary",
                                              children: (0, r.jsx)(u.A, {
                                                id: "environmentSetup.repositoryPicker.noDefaultBranch",
                                                defaultMessage: "No default branch",
                                              }),
                                            }),
                                        ],
                                      },
                                      e.id,
                                    )
                              }),
                          !ex && (eW || eF) && (!eY || eF)
                            ? (0, r.jsx)(v.W, {
                                layout: "settings-row",
                                children: (0, r.jsxs)(p.$, {
                                  color: "secondary",
                                  disabled: H || eH,
                                  loading: eq,
                                  size: "dialog",
                                  onClick: () => void eB(),
                                  children: [
                                    eq &&
                                      (0, r.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.repositories.loadingMore",
                                        defaultMessage: "Loading more\u2026",
                                      }),
                                    !eq &&
                                      eF &&
                                      (0, r.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.repositories.retry",
                                        defaultMessage: "Retry loading repositories",
                                      }),
                                    !eq &&
                                      !eF &&
                                      (0, r.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.repositories.loadMore",
                                        defaultMessage: "Load more repositories",
                                      }),
                                  ],
                                }),
                              })
                            : null,
                        ],
                      }),
                  ],
                }),
            ],
          })),
          (z[33] = q),
          (z[34] = en),
          (z[35] = eD),
          (z[36] = eT),
          (z[37] = eI),
          (z[38] = eA),
          (z[39] = ey),
          (z[40] = e_),
          (z[41] = eS),
          (z[42] = ev),
          (z[43] = H),
          (z[44] = ek),
          (z[45] = eB),
          (z[46] = eG),
          (z[47] = eW),
          (z[48] = Q),
          (z[49] = et),
          (z[50] = T),
          (z[51] = eU?.app_installation_url),
          (z[52] = ei),
          (z[53] = ex),
          (z[54] = eb),
          (z[55] = eR),
          (z[56] = ew),
          (z[57] = eF),
          (z[58] = eq),
          (z[59] = Z),
          (z[60] = eM),
          (z[61] = ea),
          (z[62] = eE),
          (z[63] = ej),
          (z[64] = eV),
          (z[65] = ez),
          (z[66] = eY),
          (z[67] = eH),
          (z[68] = eQ),
          (z[69] = e$),
          (z[70] = eo),
          (z[71] = ed),
          (z[72] = F),
          (z[73] = es),
          (z[74] = er),
          (z[75] = eN),
          (z[76] = eP),
          (z[77] = O))
      } else O = z[77]
      return O
    }
    function B(e) {
      return e.repositories
    }
    function W(e) {
      let { status: t } = e
      return "DISABLED_BY_ADMIN" !== t
    }
    function Y(e) {
      return "connected" === (0, w.jh)(e).status
    }
  },
  oiiw(e, t, n) {
    n.d(t, { K: () => C, p: () => P })
    var r = n("qmMi"),
      o = n("DBCl"),
      i = n("SPnB"),
      s = n("xG8A"),
      a = n("SGsN"),
      l = n("eA5w"),
      c = n("nlNF"),
      d = n("V3rO"),
      u = n("Bc5r"),
      m = n("SRbQ"),
      p = n("Eh2x"),
      g = n("NRIv"),
      f = n("Dgwo"),
      h = n("shRG"),
      v = n("fYtp"),
      x = n("GaA7"),
      b = n("HhRW"),
      y = n("IRAs"),
      k = n("j2sz")
    let _ = "cloud-environment-onboarding:setup"
    class S extends Error {}
    function j(e, t) {
      return null != t
        ? e.formatMessage(
            {
              id: "restricted.environmentSetup.onboarding.skillPrompt",
              defaultMessage: "Use {skill} to set up this cloud environment",
            },
            { skill: `$${t}` },
          )
        : e.formatMessage({
            id: "restricted.environmentSetup.onboarding.prompt",
            defaultMessage:
              "First ask me what I want to get running and discuss any needed details with me. Wait for my response before setting up this cloud environment",
          })
    }
    function I(e) {
      return Error(
        e.formatMessage({
          id: "environmentSetup.onboarding.planNotSupported",
          defaultMessage:
            "Your ChatGPT plan does not include Codex Cloud. Switch to an eligible plan to set up a cloud environment",
        }),
      )
    }
    function A(e) {
      return "http" !== e.error || null == e.status || 408 === e.status || e.status >= 500
    }
    function M(e, t, n, r) {
      if (e.get(i.chatGptAuthenticatedAccountId$) !== n || e.get(i.chatGptAuthenticatedUserId$) !== r)
        throw Error(
          t.formatMessage({
            id: "restricted.environmentSetup.onboarding.accountChanged",
            defaultMessage: "Your account changed while creating the environment",
          }),
        )
    }
    var w = n("bMv2")
    function C(e, t, n) {
      let r = e.get(i.chatGptAuthenticatedAccountId$),
        s = e.get(i.chatGptAuthenticatedUserId$)
      if (null != n.legacyEnvironmentId) {
        for (let [t, o] of e.get(w.r))
          if (
            o.accountId === r &&
            o.userId === s &&
            o.inputs.legacyEnvironmentId === n.legacyEnvironmentId &&
            null != e.get(d.Pt, t)
          )
            return t
      }
      let a = (0, o.xa2)(),
        c = { hostId: (0, l.Y)(), prompt: j(t, _), title: (0, k.ZO)(t, n.name), status: "queued" }
      return (
        (0, d.gI)(e, a, c),
        e.set(
          w.r,
          (o) =>
            new Map([
              ...[...o].filter(([t]) => null != e.get(d.Pt, t)),
              [
                a,
                {
                  accountId: r,
                  userId: s,
                  name: n.name ?? (0, k.II)(t),
                  inputs: { ...n, initialPrompt: c.prompt },
                  config: null,
                  conversationId: null,
                  stage: "creating",
                },
              ],
            ]),
        ),
        a
      )
    }
    async function P(e, t, n, C) {
      let P = e.get(w.m, C),
        R = e.get(d.Pt, C)
      if (null == P || null == R || ("queued" !== R.status && "failed" !== R.status)) return
      let N = { ...R, status: "creating", errorMessage: void 0 }
      ;(0, r.Y)(e, () => {
        ;((0, d.gI)(e, C, N),
          e.set(w.r, (e) => new Map(e).set(C, { ...P, stage: null == P.config ? "creating" : "connecting" })))
      })
      let E = () =>
        e.get(d.Pt, C) === N &&
        e.get(i.chatGptAuthenticatedAccountId$) === P.accountId &&
        e.get(i.chatGptAuthenticatedUserId$) === P.userId
      function G() {
        e.set(w.r, (e) => {
          let t = new Map(e)
          return (t.delete(C), t)
        })
      }
      try {
        let s = await (async function (
          e,
          t,
          {
            name: n,
            repositorySelections: s,
            networkPolicy: a,
            modelSettings: c,
            legacyEnvironmentId: d,
            repositoryNamesById: u,
            initialPrompt: w,
            idempotencyKey: C = crypto.randomUUID(),
            existingConfig: P,
            onConfigurationCreated: R,
            onConfigurationReady: N,
            onConnected: E,
            onConversationReady: G,
            onOutcomeUnknown: T,
          },
        ) {
          let D = e.get(i.chatGptAuthenticatedAccountId$),
            L = e.get(i.chatGptAuthenticatedUserId$)
          if (x.appServices?.environmentConfigs == null || null == D || null == L)
            throw Error(
              t.formatMessage({
                id: "restricted.environmentSetup.onboarding.unavailable",
                defaultMessage: "Cloud environment setup is unavailable",
              }),
            )
          let U = null != d && null == P,
            O = x.appServices.environmentConfigs.request(
              null == P
                ? {
                    method: "POST",
                    accountId: D,
                    userId: L,
                    body:
                      null != d
                        ? { legacy_environment_id: d, start_onboarding: !0, private_draft: !0, model: c.model }
                        : {
                            idempotency_key: C,
                            name: n ?? (0, k.II)(t),
                            repositories: s.map(y.D),
                            network_policy: a,
                            share_settings: "private",
                            start_onboarding: !1,
                          },
                  }
                : { method: "GET", accountId: D, userId: L, configId: P.id, draftId: P.privateDraftId },
            ),
            $ = U ? await O.catch(() => ({ ok: !1, error: "unavailable" })) : await O
          if (
            U &&
            ($.ok ? $.config.draft?.id == null || null == $.config.environment_id || null == $.config.thread_id : A($))
          )
            return (M(e, t, D, L), T?.(), { conversationId: null, config: null })
          if (!$.ok) {
            if ((0, p.eN)($.status, $.message)) throw I(t)
            if (null != d && 400 === $.status && $.message === p.ds)
              throw new S(
                t.formatMessage({
                  id: "environmentSetup.onboarding.repositoryNotAccessible",
                  defaultMessage:
                    "We couldn't access this environment's GitHub repository. Check that it still exists and that your connected GitHub account can open it, then try again.",
                }),
              )
            throw Error(
              t.formatMessage(
                {
                  id: "restricted.environmentSetup.onboarding.createFailed",
                  defaultMessage: "Could not start cloud environment setup ({reason})",
                },
                { reason: null == $.status ? $.error : `HTTP ${$.status}` },
              ),
            )
          }
          if (
            (M(e, t, D, L),
            P?.privateDraftId != null &&
              ($.config.draft?.id !== P.privateDraftId || $.config.environment_id !== P.environment_id))
          )
            throw Error("The setup draft no longer matches its Build")
          let z = {
            ...$.config,
            ...(U && { privateDraftId: $.config.draft?.id }),
            ...(P?.privateDraftId && { privateDraftId: P.privateDraftId, thread_id: P.thread_id }),
            onboarding_skill: $.config.onboarding_skill ?? P?.onboarding_skill,
          }
          R?.(z)
          let B = u ?? Object.fromEntries(s.map(({ repository: e }) => [e.id, e.repository_full_name]))
          if (null == z.thread_id && null == d) {
            let n = { stack: [], error: void 0, hasError: !1 }
            try {
              let r = (0, m.mS)(
                n,
                await x.appServices.environmentConfigs
                  .createDraft({
                    accountId: D,
                    userId: L,
                    configId: z.id,
                    method: "POST",
                    body: { start_thread: !0, model: c.model },
                  })
                  .catch(() => null),
                !1,
              )
              if ((M(e, t, D, L), null == r || (!r.ok && A(r)) || (r.ok && null == r.data.thread_id)))
                return (T?.(), { conversationId: null, config: z })
              if (!r.ok) {
                if ((0, p.eN)(r.status, r.message)) throw I(t)
                throw Error(r.message ?? r.error)
              }
              ;((z = {
                ...z,
                privateDraftId: r.data.draft_id,
                environment_id: r.data.environment_id,
                thread_id: r.data.thread_id,
              }),
                R?.(z))
            } catch (e) {
              ;((n.error = e), (n.hasError = !0))
            } finally {
              ;(0, m.hk)(n)
            }
          }
          let W =
              null != d
                ? (z.draft ?? z).repositories.map(({ repository_id: e, ref: t }) => ({
                    repository_id: e,
                    name: B[e] ?? e,
                    ref: t,
                  }))
                : s.map(({ repository: e }) => ({
                    repository_id: e.id,
                    name: e.repository_full_name,
                    ref: e.default_branch,
                  })),
            Y =
              null != z.onboarding_skill
                ? j(t, z.onboarding_skill)
                : (w ?? j(t, null == z.privateDraftId || null != d ? void 0 : _)),
            H = (0, f.V)(e, (0, l.Y)()),
            q = [
              {
                type: "text",
                text: `${JSON.stringify({ repositories: W })}

${g.Vh}`,
                text_elements: [],
              },
              { type: "text", text: Y, text_elements: [] },
            ],
            F = (0, k.ZO)(t, null == n && z.name === (0, k.II)(t) ? null : z.name)
          if (null == z.thread_id || null == z.environment_id)
            throw Error(
              t.formatMessage({
                id: "restricted.environmentSetup.onboarding.missingTask",
                defaultMessage: "The server saved the configuration but did not return a setup chat",
              }),
            )
          let Q = (0, o.JXB)(z.thread_id)
          return (
            M(e, t, D, L),
            (0, v.cx)(e, Q, (0, v.J5)(e, z.environment_id ?? null)),
            null == e.get(b.fm, Q) &&
              (0, r.Y)(e, (e) => {
                ;((0, b.or)(e, Q, { name: z.name, repositories: W.map(({ repository_id: e }) => e) }),
                  (0, b.e2)(e, Q, {
                    accountId: D,
                    userId: L,
                    configId: z.id,
                    ...(z.privateDraftId && { draftId: z.privateDraftId, environmentId: z.environment_id ?? void 0 }),
                    name: z.name,
                    repositoryNamesById: B,
                    generatedThreadTitle: { environmentName: z.name, title: F },
                  }))
              }),
            N?.(Q, Y),
            await H.resumeConversation(
              {
                conversationId: Q,
                model: null,
                reasoningEffort: null,
                workspaceRoots: ["/workspace", "/tmp"],
                collaborationMode: null,
                useAppServerPermissionDefault: !0,
              },
              { readResumeInputs: (0, h.jQ)(e, (0, l.Y)()) },
            ),
            M(e, t, D, L),
            E?.(),
            await H.updateThreadSettingsForNextTurn(Q, { model: c.model, effort: c.reasoningEffort }),
            M(e, t, D, L),
            await H.setThreadTitle(Q, F, { onlyIfUntitled: !0, requireAcknowledgement: !0 }),
            M(e, t, D, L),
            G?.(Q),
            await H.startTurn(Q, {
              context: { useAppServerServiceTierDefault: !0 },
              request: { turnTrigger: "environment_onboarding", threadId: Q, input: q },
            }),
            M(e, t, D, L),
            { conversationId: Q, config: z }
          )
        })(e, t, {
          ...P.inputs,
          idempotencyKey: C,
          existingConfig: P.config,
          onOutcomeUnknown: () => {
            E() && ((N = { ...N, status: "draft-creation-unconfirmed" }), (0, d.gI)(e, C, N))
          },
          onConfigurationCreated: (t) => {
            E() &&
              e.set(w.r, (e) => {
                let n = e.get(C)
                return null == n ? e : new Map(e).set(C, { ...n, config: t })
              })
          },
          onConfigurationReady: (t, n) => {
            E() &&
              (0, r.Y)(e, () => {
                ;((N = { ...N, prompt: n }),
                  (0, d.gI)(e, C, N),
                  e.set(w.r, (e) => {
                    let n = e.get(C)
                    return null == n ? e : new Map(e).set(C, { ...n, conversationId: t, stage: "connecting" })
                  }))
              })
          },
          onConnected: () => {
            E() &&
              e.set(w.r, (e) => {
                let t = e.get(C)
                return null == t ? e : new Map(e).set(C, { ...t, stage: "starting" })
              })
          },
          onConversationReady: (t) => {
            E() &&
              ((0, d.Bb)(e, { clientThreadId: C, conversationId: t, hostId: (0, l.Y)() }),
              G(),
              e.get(c.x2)?.pathname === (0, o._RT)(C) && n((0, u.Ch)((0, o._RT)(t), (0, l.Y)()), { replace: !0 }))
          },
        })
        E() && null != s.conversationId && ((0, d.gI)(e, C, null), G())
      } catch (n) {
        if (e.get(d.Pt, C) !== N) return
        if (
          e.get(i.chatGptAuthenticatedAccountId$) !== P.accountId ||
          e.get(i.chatGptAuthenticatedUserId$) !== P.userId
        ) {
          ;((0, d.gI)(e, C, null), G())
          return
        }
        ;((0, d.gI)(
          e,
          C,
          e.get(w.r).has(C) ? { ...N, status: "failed", errorMessage: n instanceof S ? n.message : void 0 } : null,
        ),
          e
            .get(a.Id)
            .danger(
              n instanceof S
                ? t.formatMessage({
                    id: "environmentSetup.onboarding.migrationFailed",
                    defaultMessage: "We couldn't finish the migration",
                  })
                : (0, s.WS)(n, t),
              {
                description: n instanceof S ? n.message : void 0,
                errorAnalytics: { toastId: "createDialog.CloudEnvironmentCreateDialog" },
              },
            ))
      }
    }
  },
  WT8y(e, t, n) {
    var r = n("rGp2")
    n.d(
      t,
      {},
      {
        Q: function (e, t) {
          let n = new URL(`/plugins/${encodeURIComponent(e)}`, "https://chatgpt.com")
          return (
            n.searchParams.set("no_universal_links", "1"),
            1 === t && (n.hash = `settings/Plugins/${encodeURIComponent(e)}?product-sku=CODEX`),
            n.toString()
          )
        },
        x: function ({ appId: e, installUrl: t, remotePluginId: n }) {
          let o = new URL(
            null == n ? "/plugins" : `/plugins/${encodeURIComponent(n)}`,
            t?.trim() || "https://chatgpt.com",
          )
          return (
            o.searchParams.set("no_universal_links", "1"),
            (o.hash =
              null == n
                ? `settings/Connectors?${new URLSearchParams({ connector: e, "product-sku": (0, r.MR)(), referrer: "codex" })}`
                : `settings/Plugins/${encodeURIComponent(n)}?product-sku=CODEX`),
            o.toString()
          )
        },
      },
    )
  },
  mYWF(e, t, n) {
    var r = n("DBCl"),
      o = n("rGp2"),
      i = n("hOO0"),
      s = n("ReGc"),
      a = n("WT8y")
    async function l(e, { appId: t, appName: n }) {
      let a = await e.query.getOrFetch(s.a)
      return new URL(
        (0, o.Cj)({ id: (0, i.$)(t), name: n, installUrl: new URL(a.chatGptDesktopAuthOrigin ?? r.WaA).origin }),
      )
    }
    n.d(t, { Hd: () => l, Y2: () => a.x, x1: () => a.Q })
  },
}
//# sourceMappingURL=39295.b979f21ec6.js.map
