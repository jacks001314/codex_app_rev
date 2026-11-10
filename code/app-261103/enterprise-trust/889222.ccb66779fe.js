export const __rspack_esm_ids = [889222]
export const __webpack_modules__ = {
  Xf6D(e, t, n) {
    e.exports = n.p + "assets/setup-artwork.2a33374c41.png"
  },
  xG8A(e, t, n) {
    n.d(t, { WS: () => P, $x: () => R, Oy: () => E })
    var r = n("ABep"),
      o = n("QosV"),
      i = n("Od9H"),
      s = n("zTeN"),
      a = n("DBCl")
    n("XW6f")
    var l = n("IhIa"),
      c = n("Wf1j"),
      d = n("MQPm"),
      u = n("Ko9s"),
      p = n("SGsN"),
      m = n("YYwy"),
      g = n("IIBl"),
      h = n("v9CB"),
      f = n("EcbM"),
      b = n("OWtl"),
      y = n("WFY2"),
      v = n("pZTm"),
      x = n("LH8k")
    let w = "missing_github_connector_link"
    var k = n("TurB"),
      _ = n("pjlf")
    function j(e, t) {
      switch ((0, a.Rt_)(e)) {
        case _.JS:
          return t.formatMessage({
            id: "composer.browserTabMentions.contextLimitExceeded",
            defaultMessage:
              "This message includes too much browser tab context. Remove some tab mentions and try again",
            description: "Toast shown when the combined browser tab mention context exceeds its size limit",
          })
        case _.Jg:
          return t.formatMessage(
            {
              id: "composer.browserTabMentions.limitExceeded",
              defaultMessage: "You can mention up to {limit} browser tabs per message",
              description: "Toast shown when a message contains more browser tab mentions than supported",
            },
            { limit: a.s3R },
          )
        default:
          return null
      }
    }
    var S = n("YEpt"),
      I = n("J7aR"),
      C = n("oynk"),
      M = n("IiOi"),
      A = n("Ld2s")
    let G = {
      toastId: "composer_submit_failed",
      operation: "submit_conversation",
      errorCategory: "conversation",
      userFacingError: {
        surface: "CHATGPT_USER_FACING_ERROR_SURFACE_CODEX",
        errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION",
      },
    }
    function E(e) {
      let t,
        n = (0, o.c)(7),
        { composerMode: d, conversationId: k, cwd: _, followUpType: E } = e,
        H = (0, c.A)(),
        D = (0, s.gh)(b.u)
      return (
        n[0] !== d || n[1] !== k || n[2] !== _ || n[3] !== E || n[4] !== H || n[5] !== D
          ? ((t = (e, t, n) => {
              if ((0, g.ym)(e)) return void D.get(p.Id).danger(H.formatMessage(g.Bw.rejected), { errorAnalytics: G })
              if (e instanceof M.m)
                return void D.get(p.Id).danger(
                  H.formatMessage({
                    id: "composer.presentationSuggestionCloudUnsupported",
                    defaultMessage:
                      "Slide suggestions can’t be sent to Cloud. Switch out of Cloud or remove the slide attachment to continue",
                    description:
                      "Toast shown when a user sends a presentation slide suggestion in Cloud execution mode, which cannot access the attached local slide target. Their unsent prompt and attachments are preserved.",
                  }),
                  { errorAnalytics: { ...G, toastId: "composer.presentationSuggestionCloudUnsupported" } },
                )
              if (e instanceof i.y)
                return void D.get(p.Id).danger(H.formatMessage(f.Gu.textOnly), {
                  errorAnalytics: { ...G, toastId: "aeon.replyChain.textOnly" },
                })
              if (e instanceof C.a || (0, I.DB)(e) || e instanceof h.Kr)
                return void D.get(p.Id).danger(e.message, {
                  errorAnalytics: { ...G, toastId: "composerSubmitError.useComposerSubmitError" },
                })
              if (
                e instanceof u.ChatGptProjectSyncAlreadyReportedError ||
                e instanceof A.e ||
                (e instanceof Error && "AbortError" === e.name)
              )
                return
              y.v.error("[Composer] submit failed", { safe: { mode: d, followUp: E }, sensitive: { cwd: _, error: e } })
              let o =
                "cloud" === d
                  ? void 0
                  : (0, m.t)(D, {
                      conversationId: k,
                      surface: "codex",
                      operation: n ?? (null == k ? "startup" : "request_submission"),
                      errorMessage: (0, a.Rt_)(e),
                      occurredAtMs: Date.now(),
                    })
              "worktree" === d
                ? D.get(p.Id).danger(P(e, H), { id: "composer.taskError", primaryAction: o, errorAnalytics: G })
                : D.get(p.Id).danger(
                    (function ({ error: e, composerMode: t, intl: n }) {
                      var o
                      let i = R(e, n)
                      if (null != i) return i
                      let s = j(e, n)
                      if (null != s) return s
                      let c = T(e, n)
                      return null != c
                        ? c
                        : "worktree" === t && N(e)
                          ? n.formatMessage({
                              id: "composer.worktreeSetupFailed",
                              defaultMessage: "Worktree setup failed. Check .codex/environments for a setup script",
                              description: "Toast text shown when the worktree setup script fails",
                            })
                          : ((o = e), (0, a.Rt_)(o).includes(S.bj))
                            ? n.formatMessage({
                                id: "composer.closedAgentError",
                                defaultMessage: "Ask parent to resume sub-agent to continue conversation",
                                description: "Toast shown when the user tries to send a message to a closed agent chat",
                              })
                            : "cloud" === t
                              ? (function (e, t) {
                                  if ((0, a.Rt_)(e) === l.lr) return t.formatMessage(v.A.appInput)
                                  let n = e instanceof Error ? (0, x.d)(e) : null
                                  return n?.type === w
                                    ? t.formatMessage({
                                        id: "composer.cloudTaskCreationError.missingGithubConnectorLink",
                                        defaultMessage:
                                          "No GitHub connection. Reconnect your GitHub account in Plugins",
                                        description:
                                          "Toast shown when creating a cloud task fails because the user must reconnect GitHub from Plugins",
                                      })
                                    : t.formatMessage(
                                        {
                                          id: "composer.cloudTaskCreationError.v2",
                                          defaultMessage: "Error submitting message{br}{error}",
                                          description:
                                            "Toast shown when submitting the first message or a follow-up to a cloud task fails",
                                        },
                                        {
                                          br: (0, r.jsx)("br", {}, "cloud-task-creation-error-break"),
                                          error: n?.message ?? (0, a.Rt_)(e),
                                        },
                                      )
                                })(e, n)
                              : (function (e, t) {
                                  if ((0, a.Rt_)(e) === l.lr) return t.formatMessage(v.A.appInput)
                                  let n = e instanceof Error ? (0, x.d)(e) : null
                                  return n?.type === w
                                    ? t.formatMessage({
                                        id: "composer.cloudTaskError.missingGithubConnectorLink",
                                        defaultMessage:
                                          "No GitHub connection. Reconnect your GitHub account in Plugins",
                                        description:
                                          "Toast shown when creating a task fails because the user must reconnect GitHub from Plugins",
                                      })
                                    : t.formatMessage(
                                        {
                                          id: "composer.cloudTaskError.v2",
                                          defaultMessage: "Error submitting message{br}{error}",
                                          description:
                                            "Toast shown when submitting the first message or a follow-up to a Codex task fails",
                                        },
                                        {
                                          br: (0, r.jsx)("br", {}, "task-creation-error-break"),
                                          error: n?.message ?? (0, a.Rt_)(e),
                                        },
                                      )
                                })(e, n)
                    })({ error: e, composerMode: d, intl: H }),
                    { id: t, primaryAction: o, errorAnalytics: G },
                  )
            }),
            (n[0] = d),
            (n[1] = k),
            (n[2] = _),
            (n[3] = E),
            (n[4] = H),
            (n[5] = D),
            (n[6] = t))
          : (t = n[6]),
        t
      )
    }
    function P(e, t) {
      if ((0, a.Rt_)(e) === l.lr) return t.formatMessage(v.A.appInput)
      let n = R(e, t)
      if (null != n) return n
      let o = j(e, t)
      if (null != o) return o
      let i = T(e, t)
      return null != i
        ? i
        : N(e)
          ? t.formatMessage({
              id: "composer.worktreeSetupFailed",
              defaultMessage: "Worktree setup failed. Check .codex/environments for a setup script",
              description: "Toast text shown when the worktree setup script fails",
            })
          : t.formatMessage(
              {
                id: "composer.localTaskError.v2",
                defaultMessage: "Error starting chat{br}{error}",
                description: "Toast text shown when we failed to start a chat",
              },
              { br: (0, r.jsx)("br", {}), error: (0, a.Rt_)(e) },
            )
    }
    function R(e, t) {
      return (0, a.Rt_)(e) === d.W
        ? t.formatMessage({
            id: "composer.threadReferences.toolUnavailable",
            defaultMessage: "Chat references aren't available here. Remove them or start a new chat",
            description: "Toast shown when a chat mention is submitted without the chat-reading tool",
          })
        : null
    }
    function N(e) {
      return !!e && "object" == typeof e && e.data?.code === "worktree_init_failed"
    }
    function T(e, t) {
      let n = (0, a.Rt_)(e)
      return n.includes(k.mb)
        ? t.formatMessage({
            id: "composer.submitToast.restorableWorkingDirectory",
            defaultMessage: "Restore the worktree to continue",
            description: "Message shown when submission races with cleanup of a restorable worktree",
          })
        : n.includes(k.fX)
          ? t.formatMessage({
              id: "composer.submitToast.missingWorkingDirectory",
              defaultMessage: "The worktree no longer exists",
              description: "Message shown when submission races with permanent removal of a worktree",
            })
          : n.includes(k.V4)
            ? t.formatMessage({
                id: "composer.submitToast.workspaceStatusUnavailable",
                defaultMessage: "Couldn't check worktree status",
                description: "Message shown when submission cannot verify the managed worktree status",
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
  gf5p(e, t, n) {
    n.d(t, { CloudEnvironmentCreateDialog: () => z })
    var r = n("ABep"),
      o = n("QosV"),
      i = n("zTeN"),
      s = n("zd8w"),
      a = n("v7qY"),
      l = n("Wf1j"),
      c = n("oyxz"),
      d = n("HZfM"),
      u = n("ygO2"),
      p = n("JNtf"),
      m = n("mUDD"),
      g = n("eA5w"),
      h = n("o8WW"),
      f = n("OWtl"),
      b = n("Bc5r"),
      y = n("oiiw"),
      v = n("DBCl"),
      x = n("Rvvc"),
      w = n("S5Ho"),
      k = n("OMIV"),
      _ = n("RPTV"),
      j = n("EaPL"),
      S = n("EgcF")
    let I = (0, i.i1)(f.u, (e, { get: t }) => {
      if (null == e || !t(k.JW, "3620782482")) return null
      let n = t(S.g, e)
      if (null == n) return n
      if (1 !== n.repositories.length) return null
      let r = n.repositories[0],
        o = r.originUrl ? (0, v.tN7)(r.originUrl) : null
      if (o?.host.toLowerCase() !== "github.com" || 1 !== r.workspaceRoots.length) return null
      let { data: i, isPending: s } = t(j.E)
      if (s) return
      if (null == i) return null
      let a = `${o.owner}/${o.repo}`
      for (let e of i) {
        if (e.id !== x.qD || "connected" !== (0, _.oP)(e).status) continue
        let { data: r, isPending: o } = t(w.l5, { connectorId: x.qD, linkId: e.linkId, installation: null, query: a })
        if (null == r) {
          if (o) return
          continue
        }
        let i = r.pages
          .flatMap((e) => e.repositories)
          .find((e) => e.repository_full_name.toLowerCase() === a.toLowerCase())
        if (null != i)
          return { name: n.name ?? i.name, repository: { connectorId: x.qD, repository: i }, linkId: e.linkId }
      }
      return null
    })
    var C = n("ZtSy"),
      M = n("aQvR"),
      A = n("GO7r"),
      G = n("X3K1"),
      E = n("AWNZ"),
      P = n("ZEx5")
    function R(e) {
      let t,
        n,
        i,
        s,
        a,
        l,
        d,
        u,
        p,
        m,
        g = (0, o.c)(21),
        { setup: h } = e,
        f = `https://github.com/${h.repository.repository.repository_full_name}`
      return (
        g[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, r.jsx)(A.nex, {})), (g[0] = t)) : (t = g[0]),
        g[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, r.jsx)(c.A, {
              id: "environmentSetup.create.currentlySelectedProject",
              defaultMessage: "Currently selected project",
              description:
                "Identifies the project whose name appears above as the project currently selected in the app",
            })),
            (g[1] = n))
          : (n = g[1]),
        g[2] !== h.name
          ? ((i = (0, r.jsx)(E.ic, { icon: t, label: h.name, description: n, control: null })),
            (g[2] = h.name),
            (g[3] = i))
          : (i = g[3]),
        g[4] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, r.jsx)(A.Yg, {})), (g[4] = s)) : (s = g[4]),
        g[5] !== h.repository.repository.repository_full_name
          ? ((a = (0, r.jsx)("span", {
              className: "min-w-0 break-all",
              children: h.repository.repository.repository_full_name,
            })),
            (g[5] = h.repository.repository.repository_full_name),
            (g[6] = a))
          : (a = g[6]),
        g[7] !== f
          ? ((l = (0, r.jsx)(M.g, { ExternalIcon: A.$XR, href: f, openTarget: "external-browser" })),
            (g[7] = f),
            (g[8] = l))
          : (l = g[8]),
        g[9] !== f || g[10] !== a || g[11] !== l
          ? ((d = (0, r.jsxs)(C.G, {
              className: "inline-flex items-center gap-1",
              appearance: "inherit",
              href: f,
              initiator: "external_link",
              openTarget: "external-browser",
              underline: "hover",
              children: [a, l],
            })),
            (g[9] = f),
            (g[10] = a),
            (g[11] = l),
            (g[12] = d))
          : (d = g[12]),
        g[13] !== h.repository.repository.default_branch
          ? ((u = (0, r.jsx)(c.A, {
              id: "environmentSetup.create.defaultBranch",
              defaultMessage: "{branch} · Default branch",
              description: "Default Git branch that will be used for the suggested cloud environment repository",
              values: { branch: h.repository.repository.default_branch },
            })),
            (g[13] = h.repository.repository.default_branch),
            (g[14] = u))
          : (u = g[14]),
        g[15] !== d || g[16] !== u
          ? ((p = (0, r.jsx)(E.ic, { icon: s, label: d, labelWeight: "normal", description: u, control: null })),
            (g[15] = d),
            (g[16] = u),
            (g[17] = p))
          : (p = g[17]),
        g[18] !== i || g[19] !== p
          ? ((m = (0, r.jsxs)(P.t, { variant: "secondary", children: [i, p] })), (g[18] = i), (g[19] = p), (g[20] = m))
          : (m = g[20]),
        m
      )
    }
    function N() {
      let e,
        t,
        n = (0, o.c)(2)
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("span", {
              className: "sr-only",
              children: (0, r.jsx)(c.A, {
                id: "environmentSetup.create.discoveringProject",
                defaultMessage: "Checking your project…",
                description: "Loading message while finding a selected project's accessible GitHub repository",
              }),
            })),
            (n[0] = e))
          : (e = n[0]),
        n[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsxs)("div", {
              role: "status",
              "aria-busy": "true",
              children: [e, (0, r.jsx)(P.t, { variant: "secondary", children: [A.nex, A.Yg].map(T) })],
            })),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function T(e, t) {
      return (0, r.jsx)(
        E.ic,
        {
          icon: (0, r.jsx)(e, {}),
          label: (0, r.jsx)("span", {
            className: "flex h-lh items-center",
            children: (0, r.jsx)(G.X, { className: "w-36 max-w-full", size: "md" }),
          }),
          description: (0, r.jsx)("span", {
            className: "flex h-lh items-center",
            children: (0, r.jsx)(G.X, { className: "w-48 max-w-full", size: "sm" }),
          }),
          control: null,
        },
        t,
      )
    }
    var H = n("pgXv"),
      D = n("Xf6D")
    function z(e) {
      let t,
        n,
        v,
        x,
        w,
        k,
        _,
        j,
        S,
        C,
        M,
        A,
        G,
        E,
        P,
        T,
        z,
        L,
        $,
        U,
        B,
        W,
        F,
        Y = (0, o.c)(75),
        { onClose: q, onStartSetup: X, project: Q } = e,
        V = (0, i.gh)(f.u),
        { modelSettings: Z } = (0, h.a)(),
        J = (0, l.A)(),
        K = (0, d.Zp)(),
        ee = (0, d.zy)(),
        et = (0, b.M0)()
      Y[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (Y[0] = t)) : (t = Y[0])
      let [en, er] = (0, s.useState)(t),
        [eo, ei] = (0, s.useState)(!1),
        [es, ea] = (0, s.useState)(!1),
        el = (0, i._U)(I, es ? null : (Q ?? null)),
        ec = null != Q && !es && void 0 === el,
        ed = ec || null != el
      Y[1] !== el || Y[2] !== en
        ? ((n = null != el ? [el.repository] : en), (Y[1] = el), (Y[2] = en), (Y[3] = n))
        : (n = Y[3])
      let eu = n
      Y[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function () {
            ;(ea(!0), er([]))
          }),
          (Y[4] = v))
        : (v = Y[4])
      let ep = v,
        em = "/connector/oauth_callback" !== ee.pathname
      ;(Y[5] !== q || Y[6] !== eo
        ? ((x = (e) => {
            e || eo || q()
          }),
          (Y[5] = q),
          (Y[6] = eo),
          (Y[7] = x))
        : (x = Y[7]),
        Y[8] !== ec ||
        Y[9] !== J ||
        Y[10] !== Z ||
        Y[11] !== K ||
        Y[12] !== et ||
        Y[13] !== q ||
        Y[14] !== X ||
        Y[15] !== eu ||
        Y[16] !== V ||
        Y[17] !== eo
          ? ((w = (e) => {
              e.preventDefault()
              let t = eu[0]
              if (null == t || ec || eo || Z.isLoading) return
              ei(!0)
              let n = (0, y.K)(V, J, {
                name: t.repository.name,
                githubRepositories: eu,
                modelSettings: Z,
                networkPolicy: { type: "restricted", presets: ["package_managers"], egress_rules: [] },
              })
              ;((0, a.flushSync)(() => {
                ;(X?.(), q(), et(n, (0, g.Y)()))
              }),
                (0, y.p)(V, J, K, n))
            }),
            (Y[8] = ec),
            (Y[9] = J),
            (Y[10] = Z),
            (Y[11] = K),
            (Y[12] = et),
            (Y[13] = q),
            (Y[14] = X),
            (Y[15] = eu),
            (Y[16] = V),
            (Y[17] = eo),
            (Y[18] = w))
          : (w = Y[18]),
        Y[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, r.jsx)("img", {
              className: "h-24 w-36 shrink-0 self-center object-contain",
              alt: "",
              draggable: !1,
              src: D,
            })),
            (Y[19] = k))
          : (k = Y[19]),
        Y[20] !== eu ? ((_ = eu.map(O)), (Y[20] = eu), (Y[21] = _)) : (_ = Y[21]))
      let eg = el?.repository.connectorId,
        eh = el?.linkId,
        ef = null == Q || es ? void 0 : ep
      ;(Y[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = (0, r.jsx)(p.L3, {
            className: "heading-lg font-semibold",
            children: (0, r.jsx)(c.A, {
              id: "restricted.environmentSetup.create.title",
              defaultMessage: "Create a cloud environment",
              description: "Title of the dialog for choosing repositories before cloud environment setup",
            }),
          })),
          (Y[22] = j))
        : (j = Y[22]),
        Y[23] !== ed
          ? ((S = (0, r.jsxs)(r.Fragment, {
              children: [
                j,
                (0, r.jsx)(p.rr, {
                  className: "text-base text-secondary",
                  children: ed
                    ? (0, r.jsx)(c.A, {
                        id: "environmentSetup.create.selectedProjectDescription",
                        defaultMessage:
                          "Get started faster with your selected project. Codex will use its repository to set up your cloud environment.",
                        description:
                          "Explains that using the currently selected project's repository is a shortcut to creating a cloud environment",
                      })
                    : (0, r.jsx)(c.A, {
                        id: "restricted.environmentSetup.create.description",
                        defaultMessage:
                          "Select repositories so Codex can work out what to install and how to configure your environment",
                        description: "Explains what Codex does after the user starts cloud environment setup",
                      }),
                }),
              ],
            })),
            (Y[23] = ed),
            (Y[24] = S))
          : (S = Y[24]),
        Y[25] !== eu
          ? ((C = (e, t) => {
              ;(ea(!0),
                er(
                  t
                    ? [...eu, e]
                    : eu.filter((t) => {
                        let { repository: n } = t
                        return n.id !== e.repository.id
                      }),
                ))
            }),
            (Y[25] = eu),
            (Y[26] = C))
          : (C = Y[26]),
        Y[27] !== ec || Y[28] !== el || Y[29] !== ed
          ? ((M = ed
              ? (0, r.jsxs)(r.Fragment, {
                  children: [ec ? (0, r.jsx)(N, {}) : null, null != el ? (0, r.jsx)(R, { setup: el }) : null],
                })
              : null),
            (Y[27] = ec),
            (Y[28] = el),
            (Y[29] = ed),
            (Y[30] = M))
          : (M = Y[30]),
        Y[31] !== eo ||
        Y[32] !== eh ||
        Y[33] !== ef ||
        Y[34] !== S ||
        Y[35] !== C ||
        Y[36] !== M ||
        Y[37] !== _ ||
        Y[38] !== eg
          ? ((A = (0, r.jsx)(H.CloudEnvironmentRepositoryPicker, {
              disabled: eo,
              selectedRepositoryIds: _,
              preferredConnectorId: eg,
              preferredLinkId: eh,
              onConnectionChange: ef,
              header: S,
              onChange: C,
              children: M,
            })),
            (Y[31] = eo),
            (Y[32] = eh),
            (Y[33] = ef),
            (Y[34] = S),
            (Y[35] = C),
            (Y[36] = M),
            (Y[37] = _),
            (Y[38] = eg),
            (Y[39] = A))
          : (A = Y[39]),
        Y[40] !== eu.length || Y[41] !== ed || Y[42] !== eo
          ? ((G = ed
              ? (0, r.jsx)(u.$, {
                  className: "me-auto",
                  color: "ghostSecondary",
                  size: "inline",
                  type: "button",
                  disabled: eo,
                  onClick: ep,
                  children: (0, r.jsx)(c.A, {
                    id: "environmentSetup.create.startFromScratch",
                    defaultMessage: "Start from scratch",
                    description: "Discards the suggested project repository and opens manual repository selection",
                  }),
                })
              : (0, r.jsx)("span", {
                  className: "me-auto text-sm text-secondary select-none",
                  "aria-live": "polite",
                  children: (0, r.jsx)(c.A, {
                    id: "environmentSetup.create.repositorySelectionCount",
                    defaultMessage: "{count, plural, =0 {None selected} one {# selected} other {# selected}}",
                    description: "Number of selected repositories in the cloud environment creation dialog",
                    values: { count: eu.length },
                  }),
                })),
            (Y[40] = eu.length),
            (Y[41] = ed),
            (Y[42] = eo),
            (Y[43] = G))
          : (G = Y[43]),
        Y[44] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, r.jsx)(c.A, {
              id: "restricted.environmentSetup.create.cancel",
              defaultMessage: "Cancel",
              description: "Closes cloud environment creation without starting setup",
            })),
            (Y[44] = E))
          : (E = Y[44]),
        Y[45] !== q || Y[46] !== eo
          ? ((P = (0, r.jsx)(u.$, {
              color: "secondary",
              disabled: eo,
              onClick: q,
              size: "dialog",
              type: "button",
              children: E,
            })),
            (Y[45] = q),
            (Y[46] = eo),
            (Y[47] = P))
          : (P = Y[47]))
      let eb = eo || ec || 0 === eu.length || Z.isLoading
      return (
        Y[48] !== eo
          ? ((T = eo
              ? (0, r.jsx)(c.A, {
                  id: "restricted.environmentSetup.create.starting",
                  defaultMessage: "Starting setup…",
                  description: "Button label while the cloud environment setup conversation is being created",
                })
              : null),
            (Y[48] = eo),
            (Y[49] = T))
          : (T = Y[49]),
        Y[50] !== ed || Y[51] !== eo
          ? ((z =
              !eo && ed
                ? (0, r.jsx)(c.A, {
                    id: "environmentSetup.create.useProject",
                    defaultMessage: "Use this project",
                    description: "Starts cloud environment onboarding with the currently selected project’s repository",
                  })
                : null),
            (Y[50] = ed),
            (Y[51] = eo),
            (Y[52] = z))
          : (z = Y[52]),
        Y[53] !== ed || Y[54] !== eo
          ? ((L =
              eo || ed
                ? null
                : (0, r.jsx)(c.A, {
                    id: "restricted.environmentSetup.create.startSetup",
                    defaultMessage: "Get started",
                    description: "Starts Cloud v2 setup with the selected GitHub repositories",
                  })),
            (Y[53] = ed),
            (Y[54] = eo),
            (Y[55] = L))
          : (L = Y[55]),
        Y[56] !== eb || Y[57] !== T || Y[58] !== z || Y[59] !== L
          ? (($ = (0, r.jsxs)(u.$, {
              color: "primary",
              disabled: eb,
              size: "dialog",
              type: "submit",
              children: [T, z, L],
            })),
            (Y[56] = eb),
            (Y[57] = T),
            (Y[58] = z),
            (Y[59] = L),
            (Y[60] = $))
          : ($ = Y[60]),
        Y[61] !== G || Y[62] !== P || Y[63] !== $
          ? ((U = (0, r.jsxs)(m.Es, { className: "flex-wrap", expandSingleButton: !1, children: [G, P, $] })),
            (Y[61] = G),
            (Y[62] = P),
            (Y[63] = $),
            (Y[64] = U))
          : (U = Y[64]),
        Y[65] !== A || Y[66] !== U
          ? ((B = (0, r.jsxs)("div", { className: "flex min-h-0 flex-col gap-5 pt-6", children: [A, U] })),
            (Y[65] = A),
            (Y[66] = U),
            (Y[67] = B))
          : (B = Y[67]),
        Y[68] !== B || Y[69] !== w
          ? ((W = (0, r.jsxs)(m.R4, { as: "form", size: "viewport", onSubmit: w, children: [k, B] })),
            (Y[68] = B),
            (Y[69] = w),
            (Y[70] = W))
          : (W = Y[70]),
        Y[71] !== W || Y[72] !== em || Y[73] !== x
          ? ((F = (0, r.jsx)(p.lG, { open: em, size: "beacon", onOpenChange: x, children: W })),
            (Y[71] = W),
            (Y[72] = em),
            (Y[73] = x),
            (Y[74] = F))
          : (F = Y[74]),
        F
      )
    }
    function O(e) {
      let { repository: t } = e
      return t.id
    }
  },
  GTHM(e, t, n) {
    n.d(t, { C: () => y })
    var r = n("ABep"),
      o = n("QosV"),
      i = n("oyxz"),
      s = n("ygO2"),
      a = n("FrrB"),
      l = n("UoEB"),
      c = n("zTeN"),
      d = n("zd8w"),
      u = n("Wf1j"),
      p = n("SGsN"),
      m = n("Yewb"),
      g = n("OWtl"),
      h = n("RPTV")
    function f(e) {
      let t,
        n,
        a,
        l = (0, o.c)(11),
        { connectorId: f, disabled: y, reconnect: v } = e,
        x = (0, c.gh)(g.u),
        w = (0, u.A)(),
        { status: k } = (0, m.XY)(),
        [_, j] = (0, d.useState)(!1),
        S = _ || null != k,
        I = y || S
      return (
        l[0] !== f || l[1] !== w || l[2] !== x
          ? ((t = () => {
              ;(j(!0),
                (0, h.t4)(x, f)
                  .catch(b)
                  .then((e) => {
                    if ("unavailable" === e.status)
                      return void x
                        .get(p.Id)
                        .danger(
                          w.formatMessage({
                            id: "environmentSetup.repositoryPicker.connectGithub.unavailable",
                            defaultMessage: "GitHub could not be loaded. Try again",
                            description:
                              "Error when the GitHub plugin cannot be found to connect it from the environment repository picker",
                          }),
                          {
                            errorAnalytics: { toastId: "environmentSetup.repositoryPicker.connectGithub.unavailable" },
                          },
                        )
                  })
                  .finally(() => {
                    j(!1)
                  }))
            }),
            (l[0] = f),
            (l[1] = w),
            (l[2] = x),
            (l[3] = t))
          : (t = l[3]),
        l[4] !== v
          ? ((n = v
              ? (0, r.jsx)(i.A, {
                  id: "restricted.environmentSetup.repositoryPicker.reconnectAction",
                  defaultMessage: "Reconnect GitHub",
                  description: "Starts GitHub plugin setup to reconnect the user's account",
                })
              : (0, r.jsx)(i.A, {
                  id: "restricted.environmentSetup.repositoryPicker.connectAction",
                  defaultMessage: "Connect GitHub",
                  description: "Starts GitHub plugin setup to connect the user's account",
                })),
            (l[4] = v),
            (l[5] = n))
          : (n = l[5]),
        l[6] !== S || l[7] !== I || l[8] !== t || l[9] !== n
          ? ((a = (0, r.jsx)(s.$, {
              "aria-busy": S,
              color: "accent",
              disabled: I,
              loading: S,
              size: "dialog",
              onClick: t,
              children: n,
            })),
            (l[6] = S),
            (l[7] = I),
            (l[8] = t),
            (l[9] = n),
            (l[10] = a))
          : (a = l[10]),
        a
      )
    }
    function b() {
      return { status: "unavailable" }
    }
    function y(e) {
      let t,
        n,
        c,
        d,
        u = (0, o.c)(17),
        {
          connectorId: p,
          connectionMessage: m,
          connectionAction: g,
          disabled: h,
          reconnect: b,
          status: y,
          onRetry: x,
        } = e
      if ("error" === y) {
        let e, o, a
        ;(u[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(i.A, {
              id: "restricted.environmentSetup.repositoryPicker.connectionError",
              defaultMessage: "GitHub connections couldn’t load",
              description: "Error when GitHub connections cannot be loaded",
            })),
            (u[0] = e))
          : (e = u[0]),
          (t = e),
          u[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (0, r.jsx)(i.A, {
                id: "restricted.environmentSetup.repositoryPicker.retryConnection",
                defaultMessage: "Try again",
                description: "Retries loading GitHub connections",
              })),
              (u[1] = o))
            : (o = u[1]),
          u[2] !== h || u[3] !== x
            ? ((a = (0, r.jsx)(s.$, { color: "accent", disabled: h, onClick: x, size: "dialog", children: o })),
              (u[2] = h),
              (u[3] = x),
              (u[4] = a))
            : (a = u[4]),
          (n = a))
      } else if ("disabled" === y) {
        let e
        ;(u[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(i.A, {
              id: "restricted.environmentSetup.repositoryPicker.blockedGuidance",
              defaultMessage:
                "GitHub isn’t enabled in this workspace<br></br>Ask a workspace admin to enable the GitHub plugin",
              description:
                "Explains that the workspace administrator has disabled GitHub and how the user can request access. The br tag starts a new line.",
              values: { br: v },
            })),
            (u[5] = e))
          : (e = u[5]),
          (t = e))
      } else {
        let e
        ;((t = m),
          u[6] !== g || u[7] !== p || u[8] !== h || u[9] !== b
            ? ((e = g ?? (0, r.jsx)(f, { connectorId: p, disabled: h, reconnect: b })),
              (u[6] = g),
              (u[7] = p),
              (u[8] = h),
              (u[9] = b),
              (u[10] = e))
            : (e = u[10]),
          (n = e))
      }
      return (
        u[11] !== y ? ((c = "connect" === y ? (0, r.jsx)(l.A, {}) : void 0), (u[11] = y), (u[12] = c)) : (c = u[12]),
        u[13] !== n || u[14] !== t || u[15] !== c
          ? ((d = (0, r.jsx)(a.A, {
              className: "flex-1 select-none",
              title: null,
              description: t,
              actions: n,
              illustration: c,
              illustrationSize: "icon",
            })),
            (u[13] = n),
            (u[14] = t),
            (u[15] = c),
            (u[16] = d))
          : (d = u[16]),
        d
      )
    }
    function v() {
      return (0, r.jsx)("br", {})
    }
  },
  pgXv(e, t, n) {
    n.d(t, { CloudEnvironmentRepositoryPicker: () => z })
    var r = n("ABep"),
      o = n("QosV")
    let i = (0, n("nkTT").a)({
      name: "github-logo-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.777832, y: 2.709473, width: 10.444336, height: 10.187012 },
        visualBounds: { x: 2.777832, y: 2.709473, width: 10.444336, height: 10.187012 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 2.777832, y: 2.709473, width: 10.444336, height: 10.187012 },
        center: { x: 8, y: 7.802979 },
        insets: { top: 2.709473, right: 2.777832, bottom: 3.103515, left: 2.777832 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 7.802979 }, foreground: { x: 8, y: 7.802979 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.00005 2.70947C10.8853 2.70947 13.2223 5.04642 13.2223 7.93169C13.222 9.02588 12.8786 10.0924 12.2404 10.9812C11.6022 11.87 10.7013 12.5363 9.66464 12.8863C9.40353 12.9385 9.30561 12.7753 9.30561 12.6382C9.30561 12.462 9.31214 11.9006 9.31214 11.2021C9.31214 10.7125 9.14894 10.3992 8.95964 10.236C10.1216 10.1054 11.3423 9.66156 11.3423 7.65753C11.3423 7.08308 11.1399 6.61961 10.807 6.25406C10.8592 6.1235 11.042 5.58822 10.7548 4.87017C10.7548 4.87017 10.3174 4.72656 9.31867 5.40544C8.90089 5.28794 8.457 5.22919 8.01311 5.22919C7.56922 5.22919 7.12533 5.28794 6.70755 5.40544C5.7088 4.73308 5.27144 4.87017 5.27144 4.87017C4.98422 5.58822 5.167 6.1235 5.21922 6.25406C4.8863 6.61961 4.68394 7.08961 4.68394 7.65753C4.68394 9.65503 5.89811 10.1054 7.06005 10.236C6.90992 10.3666 6.77283 10.595 6.72714 10.9345C6.42686 11.0716 5.67617 11.2935 5.20617 10.5036C5.10825 10.347 4.8145 9.96183 4.40325 9.96836C3.96589 9.97489 4.227 10.2164 4.40978 10.3143C4.63172 10.4384 4.8863 10.9018 4.94505 11.052C5.0495 11.3457 5.38894 11.9071 6.70103 11.6656C6.70103 12.1029 6.70755 12.5142 6.70755 12.6382C6.70755 12.7753 6.60964 12.932 6.34853 12.8863C5.30842 12.5401 4.40373 11.8751 3.7628 10.9858C3.12188 10.0965 2.77726 9.02791 2.77783 7.93169C2.77783 5.04642 5.11478 2.70947 8.00005 2.70947Z" fill="currentColor"/>',
    })
    var s = n("on57"),
      a = n("i5ac"),
      l = n.n(a),
      c = n("zTeN"),
      d = n("zd8w"),
      u = n("Wf1j"),
      p = n("oyxz"),
      m = n("Rvvc"),
      g = n("ygO2"),
      h = n("Xpvt"),
      f = n("mUDD"),
      b = n("bqtn"),
      y = n("ZtSy"),
      v = n("Ot7V"),
      x = n("aQvR"),
      w = n("HOLv"),
      k = n("GO7r"),
      _ = n("evwP"),
      j = n("FrrB"),
      S = n("okCa"),
      I = n("X3K1"),
      C = n("RNul"),
      M = n("mYWF"),
      A = n("OWtl"),
      G = n("VV8q"),
      E = n("S5Ho"),
      P = n("LH8k"),
      R = n("GEsy"),
      N = n("RPTV"),
      T = n("EaPL"),
      H = n("GTHM")
    function D(e) {
      let t,
        n,
        i,
        s,
        a,
        h,
        f,
        y,
        x,
        w,
        _,
        j,
        S,
        I,
        C,
        M,
        G,
        P,
        R,
        T,
        H,
        D = (0, o.c)(72),
        { connectorId: z, disabled: O, installation: L, linkId: $, onChange: U } = e,
        B = (0, c.gh)(A.u),
        W = (0, u.A)(),
        [F, Y] = (0, d.useState)(!1)
      D[0] !== z || D[1] !== $ ? ((t = { connectorId: z, linkId: $ }), (D[0] = z), (D[1] = $), (D[2] = t)) : (t = D[2])
      let q = !O
      D[3] !== q ? ((n = { enabled: q }), (D[3] = q), (D[4] = n)) : (n = D[4])
      let { data: X, isError: Q, isPending: V, refetch: Z } = (0, c._U)(E.ky, t, n)
      if (
        D[5] !== z ||
        D[6] !== X?.app_installation_url ||
        D[7] !== X?.memberships ||
        D[8] !== X?.other ||
        D[9] !== O ||
        D[10] !== L ||
        D[11] !== W ||
        D[12] !== U ||
        D[13] !== F
      ) {
        let e,
          t,
          n,
          o,
          c,
          d,
          u = l()([...(X?.memberships ?? []), ...(X?.other ?? [])], "id")
        ;((s = X?.app_installation_url ?? (z === m.qD ? m.rh : null)),
          D[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(p.A, {
                id: "restricted.environmentSetup.repositoryPicker.organization.all",
                defaultMessage: "All",
                description:
                  "Shows repositories from every connected GitHub organization and personal account in the Cloud environment repository filter",
              })),
              (D[25] = e))
            : (e = D[25]))
        let v = e
        ;((i = b.Ab),
          (y = "end"),
          (x = "list"),
          (w = "menu"),
          (_ = O),
          (j = F),
          (S = Y),
          D[26] !== L || D[27] !== W
            ? ((t =
                null == L
                  ? W.formatMessage({
                      id: "restricted.environmentSetup.repositoryPicker.organization.allSelectionLabel",
                      defaultMessage: "GitHub account: All repositories",
                      description:
                        "Accessible label for the Cloud repository organization filter when all connected organizations and personal accounts are selected",
                    })
                  : W.formatMessage(
                      {
                        id: "restricted.environmentSetup.repositoryPicker.organization.selectedAccountLabel",
                        defaultMessage: "GitHub account: {account}",
                        description:
                          "Accessible label for the Cloud repository filter; account is the selected GitHub organization or personal account name",
                      },
                      { account: L.account_login },
                    )),
              (D[26] = L),
              (D[27] = W),
              (D[28] = t))
            : (t = D[28]))
        let I = L?.account_login ?? v
        ;(D[29] !== I
          ? ((n = (0, r.jsx)("span", { className: "truncate", children: I })), (D[29] = I), (D[30] = n))
          : (n = D[30]),
          D[31] === Symbol.for("react.memo_cache_sentinel") ? ((o = (0, r.jsx)(k.Aq_, {})), (D[31] = o)) : (o = D[31]),
          D[32] !== O || D[33] !== t || D[34] !== n
            ? ((a = (0, r.jsxs)(g.$, {
                className: "max-w-full",
                allowShrink: !0,
                "aria-label": t,
                color: "ghostSecondary",
                disabled: O,
                size: "settingsAction",
                radius: "full",
                children: [n, o],
              })),
              (D[32] = O),
              (D[33] = t),
              (D[34] = n),
              (D[35] = a))
            : (a = D[35]))
        let C = null == L ? k.ALZ : void 0
        ;(D[36] !== U ? ((c = () => U(null)), (D[36] = U), (D[37] = c)) : (c = D[37]),
          D[38] !== C || D[39] !== c
            ? ((h = (0, r.jsx)(b.ms.Item, { RightIcon: C, onSelect: c, children: v })),
              (D[38] = C),
              (D[39] = c),
              (D[40] = h))
            : (h = D[40]),
          D[41] !== L?.id || D[42] !== U
            ? ((d = (e) =>
                (0, r.jsx)(
                  b.ms.Item,
                  { RightIcon: e.id === L?.id ? k.ALZ : void 0, onSelect: () => U(e), children: e.account_login },
                  e.id,
                )),
              (D[41] = L?.id),
              (D[42] = U),
              (D[43] = d))
            : (d = D[43]),
          (f = u.map(d)),
          (D[5] = z),
          (D[6] = X?.app_installation_url),
          (D[7] = X?.memberships),
          (D[8] = X?.other),
          (D[9] = O),
          (D[10] = L),
          (D[11] = W),
          (D[12] = U),
          (D[13] = F),
          (D[14] = i),
          (D[15] = s),
          (D[16] = a),
          (D[17] = h),
          (D[18] = f),
          (D[19] = y),
          (D[20] = x),
          (D[21] = w),
          (D[22] = _),
          (D[23] = j),
          (D[24] = S))
      } else
        ((i = D[14]),
          (s = D[15]),
          (a = D[16]),
          (h = D[17]),
          (f = D[18]),
          (y = D[19]),
          (x = D[20]),
          (w = D[21]),
          (_ = D[22]),
          (j = D[23]),
          (S = D[24]))
      ;(D[44] !== V
        ? ((I = V
            ? (0, r.jsx)(b.ms.Message, {
                compact: !0,
                children: (0, r.jsx)(p.A, {
                  id: "restricted.environmentSetup.repositoryPicker.organization.loading",
                  defaultMessage: "Loading organizations…",
                  description:
                    "Shown while loading the connected GitHub organizations for the Cloud environment repository filter",
                }),
              })
            : null),
          (D[44] = V),
          (D[45] = I))
        : (I = D[45]),
        D[46] !== Q || D[47] !== Z
          ? ((C = Q
              ? (0, r.jsx)(b.ms.Item, {
                  onSelect: () => void Z(),
                  children: (0, r.jsx)(p.A, {
                    id: "restricted.environmentSetup.repositoryPicker.organization.retry",
                    defaultMessage: "Retry loading organizations",
                    description:
                      "Retries loading connected GitHub organizations after a failure in the Cloud environment repository filter",
                  }),
                })
              : null),
            (D[46] = Q),
            (D[47] = Z),
            (D[48] = C))
          : (C = D[48]),
        D[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, r.jsx)(b.ms.Separator, {})), (D[49] = M))
          : (M = D[49]),
        D[50] === Symbol.for("react.memo_cache_sentinel") ? ((G = (0, r.jsx)(k.xFs, {})), (D[50] = G)) : (G = D[50]))
      let J = null == s
      return (
        D[51] !== s || D[52] !== B
          ? ((P = (e) => {
              null != s &&
                (Y(!1),
                (0, v.PQ)({ event: e, href: s, initiator: "open_in_browser_bridge", openTarget: "external-browser" }),
                (0, N.Ey)(B, "none"))
            }),
            (D[51] = s),
            (D[52] = B),
            (D[53] = P))
          : (P = D[53]),
        D[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = (0, r.jsx)(p.A, {
              id: "restricted.environmentSetup.repositoryPicker.connection.connectOrganization",
              defaultMessage: "Connect GitHub org",
              description: "Opens GitHub in the system browser to grant access to repositories in another organization",
            })),
            (D[54] = R))
          : (R = D[54]),
        D[55] !== J || D[56] !== P
          ? ((T = (0, r.jsx)(b.ms.Item, { leftIcon: G, disabled: J, onClick: P, children: R })),
            (D[55] = J),
            (D[56] = P),
            (D[57] = T))
          : (T = D[57]),
        D[58] !== i ||
        D[59] !== a ||
        D[60] !== h ||
        D[61] !== f ||
        D[62] !== I ||
        D[63] !== C ||
        D[64] !== T ||
        D[65] !== y ||
        D[66] !== x ||
        D[67] !== w ||
        D[68] !== _ ||
        D[69] !== j ||
        D[70] !== S
          ? ((H = (0, r.jsxs)(i, {
              align: y,
              contentMaxHeight: x,
              contentWidth: w,
              disabled: _,
              open: j,
              onOpenChange: S,
              triggerButton: a,
              children: [h, f, I, C, M, T],
            })),
            (D[58] = i),
            (D[59] = a),
            (D[60] = h),
            (D[61] = f),
            (D[62] = I),
            (D[63] = C),
            (D[64] = T),
            (D[65] = y),
            (D[66] = x),
            (D[67] = w),
            (D[68] = _),
            (D[69] = j),
            (D[70] = S),
            (D[71] = H))
          : (H = D[71]),
        H
      )
    }
    function z(e) {
      let t,
        n,
        a,
        z,
        B,
        W,
        F,
        Y,
        q,
        X,
        Q,
        V,
        Z,
        J,
        K,
        ee,
        et,
        en,
        er,
        eo = (0, o.c)(55),
        {
          disabled: ei,
          selectedRepositoryIds: es,
          header: ea,
          headerAlignment: el,
          configureInAccountMenu: ec,
          onChange: ed,
          preferredConnectorId: eu,
          selectionMode: ep,
          children: em,
          preferredLinkId: eg,
          onConnectionChange: eh,
          maxRepositories: ef,
        } = e,
        eb = void 0 === el ? "center" : el,
        ey = void 0 !== ec && ec,
        ev = void 0 === ep ? "multiple" : ep,
        ex = (0, c.gh)(A.u),
        ew = (0, u.A)(),
        ek = null != ef && es.length >= ef,
        [e_, ej] = (0, d.useState)(""),
        [eS, eI] = (0, d.useState)(null),
        [eC, eM] = (0, d.useState)(null)
      eo[0] !== e_ ? ((t = e_.trim()), (eo[0] = e_), (eo[1] = t)) : (t = eo[1])
      let eA = (0, R.o)(t, 200),
        eG = eA !== e_.trim(),
        { data: eE, isError: eP, isPending: eR, refetch: eN } = (0, c.Ul)(T.E),
        eT =
          eE?.find((e) => {
            let { id: t, linkId: n } = e
            return t === eS?.connectorId && n === eS?.linkId
          }) ??
          eE?.find((e) => e.id === eu && (null == eg || e.linkId === eg) && "connected" === (0, N.oP)(e).status) ??
          eE?.find(U) ??
          eE?.find($) ??
          eE?.[0],
        eH = eT?.id ?? m.qD,
        eD = eT?.linkId,
        { status: ez, reconnect: eO } = (0, N.oP)(eT),
        eL = eE?.some((e) => e.id === eH && null != e.linkId && e.linkId !== eD),
        e$ = (eP && !eE?.length) || "error" === ez,
        eU = "connected" === ez,
        eB = !ei && eU && null == eD
      eo[2] !== eB ? ((n = { enabled: eB }), (eo[2] = eB), (eo[3] = n)) : (n = eo[3])
      let { data: eW, isError: eF, isPending: eY } = (0, c._U)(E.cd, { connectorId: eH, linkId: eD }, n),
        eq = null == eD ? eW : eT?.link?.owner_profile?.nickname?.trim(),
        eX = null == em && !ei && eU
      eo[4] !== eX ? ((a = { enabled: eX }), (eo[4] = eX), (eo[5] = a)) : (a = eo[5])
      let { data: eQ } = (0, c._U)(E.ky, { connectorId: eH, linkId: eD, poll: !0 }, a),
        eV = eC?.installation ?? null
      null != eC &&
        (eC.connectorId !== eH || eC.linkId !== eD
          ? (eV = null)
          : null != eQ &&
            (eV =
              [...eQ.memberships, ...eQ.other].find((e) => {
                let { id: t } = e
                return t === eC.installation.id
              }) ?? null),
        null == eV && eM(null))
      let eZ = null == em && !ei && !e$ && eU
      eo[6] !== eZ ? ((z = { enabled: eZ }), (eo[6] = eZ), (eo[7] = z)) : (z = eo[7])
      let {
          data: eJ,
          error: eK,
          fetchNextPage: e0,
          hasNextPage: e1,
          isError: e2,
          isFetching: e4,
          isFetchingNextPage: e3,
          isFetchNextPageError: e5,
          isPending: e6,
          refetch: e7,
        } = (0, c._U)(E.l5, { connectorId: eH, linkId: eD, installation: eV, query: eA, poll: !0 }, z),
        e8 = null == eJ ? void 0 : l()(eJ.pages.flatMap(L), "id"),
        e9 = !e8?.length && eK instanceof Error && (0, P.d)(eK)?.type === "missing_github_connector_link",
        te = eU && !e9 && !e$,
        tt = (e) => {
          ;((0, v.PQ)({
            event: e,
            href: (0, M.Y2)({ appId: eH, installUrl: null, remotePluginId: null }),
            initiator: "open_in_browser_bridge",
            openTarget: "external-browser",
          }),
            (0, N.Ey)(ex, "none"))
        }
      ;(eo[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = (0, r.jsx)(p.A, {
            id: "restricted.environmentSetup.repositoryPicker.openSettings",
            defaultMessage: "Open GitHub settings",
            description: "Opens the selected GitHub plugin's connection and repository access settings",
          })),
          (eo[8] = B))
        : (B = eo[8]),
        eo[9] !== ei || eo[10] !== tt
          ? ((W = (0, r.jsx)(g.$, { color: "accent", disabled: ei, onClick: tt, size: "dialog", children: B })),
            (eo[9] = ei),
            (eo[10] = tt),
            (eo[11] = W))
          : (W = eo[11]))
      let tn = W,
        tr = null,
        to = e$ ? "error" : ez,
        ti =
          e$ || "disabled" === ez || (!eR && (!eU || e9))
            ? (0, r.jsx)(H.C, {
                connectorId: eH,
                connectionMessage:
                  eO || e9
                    ? (0, r.jsx)(p.A, {
                        id: "restricted.environmentSetup.repositoryPicker.reconnect",
                        defaultMessage: "Reconnect GitHub to load your repositories",
                        description: "The user's GitHub authorization needs to be renewed",
                      })
                    : (0, r.jsx)(p.A, {
                        id: "restricted.environmentSetup.repositoryPicker.connect",
                        defaultMessage: "Connect GitHub to see your repositories",
                        description: "Invites the user to connect their GitHub account before choosing repositories",
                      }),
                connectionAction: null != eD && eL && (eO || e9) ? tn : void 0,
                disabled: ei,
                reconnect: eO || e9,
                status: "connected" === to ? "connect" : to,
                onRetry: () => void eN(),
              })
            : null
      if (e2 && !e8?.length) {
        let e, t, n, o
        ;(eo[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(p.A, {
              id: "restricted.environmentSetup.repositoryPicker.loadError",
              defaultMessage: "Repositories couldn’t load",
              description: "Error when the GitHub repository list cannot be loaded",
            })),
            (eo[12] = e))
          : (e = eo[12]),
          (tr = e),
          eo[13] !== e7 ? ((t = () => void e7()), (eo[13] = e7), (eo[14] = t)) : (t = eo[14]),
          eo[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, r.jsx)(p.A, {
                id: "restricted.environmentSetup.repositoryPicker.retryRepositories",
                defaultMessage: "Try again",
                description: "Retries loading GitHub repositories",
              })),
              (eo[15] = n))
            : (n = eo[15]),
          eo[16] !== ei || eo[17] !== t
            ? ((o = (0, r.jsx)(g.$, { color: "accent", disabled: ei, onClick: t, size: "dialog", children: n })),
              (eo[16] = ei),
              (eo[17] = t),
              (eo[18] = o))
            : (o = eo[18]),
          (F = o))
      } else if (!eG && null == eV && "" === eA && e8?.length === 0) {
        let e
        ;(eo[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(p.A, {
              id: "restricted.environmentSetup.repositoryPicker.noAccess",
              defaultMessage: "No repositories are available to this connection",
              description: "GitHub is connected but repository discovery returned no repositories",
            })),
            (eo[19] = e))
          : (e = eo[19]),
          (tr = e),
          (F = tn))
      }
      eo[20] !== ti || eo[21] !== F || eo[22] !== tr
        ? ((Y =
            ti ??
            (null != tr
              ? (0, r.jsx)(j.A, { className: "flex-1 select-none", title: null, description: tr, actions: F })
              : null)),
          (eo[20] = ti),
          (eo[21] = F),
          (eo[22] = tr),
          (eo[23] = Y))
        : (Y = eo[23])
      let ts = Y
      eo[24] !== ew
        ? ((q = ew.formatMessage({
            id: "restricted.environmentSetup.repositoryPicker.search",
            defaultMessage: "Search repositories",
            description: "Accessible label for searching repositories in the cloud environment creation dialog",
          })),
          (eo[24] = ew),
          (eo[25] = q))
        : (q = eo[25])
      let ta = q,
        tl = te && (null != eD || !eF) && !!eq,
        tc = eR || (te && null == eD && eY),
        td = (null != eE && eE.length > 1) || (ey && te)
      ;(eo[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = (0, r.jsx)(w.I, { asset: i, alignment: "composite", className: "shrink-0" })), (eo[26] = X))
        : (X = eo[26]),
        eo[27] !== tc || eo[28] !== tl
          ? ((Q = !tl && tc ? (0, r.jsx)(I.X, { as: "span", className: "w-64 max-w-full", size: "sm" }) : null),
            (eo[27] = tc),
            (eo[28] = tl),
            (eo[29] = Q))
          : (Q = eo[29]),
        eo[30] !== td ? ((V = td ? (0, r.jsx)(k.Aq_, {}) : null), (eo[30] = td), (eo[31] = V)) : (V = eo[31]))
      let tu = (0, r.jsxs)(r.Fragment, {
          children: [
            X,
            (0, r.jsxs)("span", {
              id: "cloud-environment-github-account",
              className: "flex h-5 min-w-0 items-center",
              role: tl ? "group" : void 0,
              "aria-label": tl
                ? ew.formatMessage(
                    {
                      id: "restricted.environmentSetup.repositoryPicker.connection.browsingAs",
                      defaultMessage: "Browsing GitHub as @{handle}",
                      description:
                        "Identifies the GitHub user signed in to the selected connection in the Cloud environment repository picker",
                    },
                    { handle: eq },
                  )
                : void 0,
              children: [
                tl
                  ? (0, r.jsx)("span", {
                      className: "truncate",
                      children: (0, r.jsx)(p.A, {
                        id: "restricted.environmentSetup.repositoryPicker.connection.connectedAccount",
                        defaultMessage: "{handle}",
                        description:
                          "Signed-in GitHub username shown beside the GitHub icon above the cloud environment repository picker.",
                        values: { handle: eq },
                      }),
                    })
                  : null,
                Q,
                tl || tc
                  ? null
                  : (0, r.jsx)("span", {
                      className: "truncate",
                      children:
                        eT?.accountLabel ??
                        (0, r.jsx)(p.A, {
                          id: "restricted.environmentSetup.repositoryPicker.connection.defaultName",
                          defaultMessage: "GitHub",
                          description:
                            "Default GitHub provider name shown before cloud repository connection discovery completes",
                        }),
                    }),
              ],
            }),
            V,
          ],
        }),
        tp =
          eV?.html_url ??
          eQ?.app_installation_url ??
          (eH === m.qD ? m.rh : (0, M.Y2)({ appId: eH, installUrl: null, remotePluginId: null }))
      eo[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = (0, r.jsx)(p.A, {
            id: "environmentSetup.repositoryPicker.configureAccess",
            defaultMessage: "Configure",
            description:
              "Opens GitHub repository permissions for the selected organization, or installation setup when browsing all repositories",
          })),
          (eo[32] = Z))
        : (Z = eo[32])
      let tm = Z,
        tg = (0, r.jsxs)(r.Fragment, {
          children: [tm, (0, r.jsx)(x.g, { ExternalIcon: k.$XR, href: tp, openTarget: "external-browser" })],
        }),
        th = "start" === eb ? "justify-start" : "justify-center"
      eo[33] !== th
        ? ((J = (0, s.A)("flex min-h-7 max-w-full min-w-0 items-center gap-2 text-sm text-secondary", th)),
          (eo[33] = th),
          (eo[34] = J))
        : (J = eo[34])
      let tf = td
          ? (0, r.jsxs)(b.Ab, {
              align: "end",
              contentMaxHeight: "list",
              contentWidth: "menu",
              disabled: ei,
              triggerButton: (0, r.jsx)(g.$, {
                className: (0, s.A)("max-w-full", "start" === eb && !ey && "-ms-2"),
                allowShrink: !0,
                "aria-describedby": tl ? "cloud-environment-github-account" : void 0,
                "aria-label": ew.formatMessage(
                  {
                    id: "restricted.environmentSetup.repositoryPicker.connection.selectionLabel",
                    defaultMessage: "GitHub connection: {connection}",
                    description:
                      "Accessible label for choosing a connected GitHub account; connection is the selected account identity or connection name",
                  },
                  { connection: eT?.accountLabel ?? "" },
                ),
                color: "ghostSecondary",
                disabled: ei,
                size: "settingsAction",
                radius: "full",
                children: tu,
              }),
              children: [
                (0, r.jsx)(b.ms.SectionLabel, {
                  children: (0, r.jsx)(p.A, {
                    id: "environmentSetup.repositoryPicker.connection.menuLabel",
                    defaultMessage: "GitHub connection",
                    description:
                      "Menu heading explaining that the choices are GitHub connections used to find repositories",
                  }),
                }),
                eE?.map((e) =>
                  (0, r.jsx)(
                    b.ms.Item,
                    {
                      RightIcon: e.id === eH && e.linkId === eD ? k.ALZ : void 0,
                      SubText: ey || e.accountLabel === e.name ? null : (0, r.jsx)(r.Fragment, { children: e.name }),
                      onSelect: () => {
                        ;(eI({ connectorId: e.id, linkId: e.linkId }),
                          (e.id !== eH || e.linkId !== eD) && (eM(null), eh?.()))
                      },
                      children: e.accountLabel,
                    },
                    `${e.id}:${e.linkId ?? ""}`,
                  ),
                ),
                ey && te
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(b.ms.Separator, {}),
                        (0, r.jsx)(b.ms.Item, {
                          href: tp,
                          rightIcon: (0, r.jsx)(x.g, { ExternalIcon: k.$XR, href: tp, openTarget: "external-browser" }),
                          disabled: ei,
                          onClick: (e) => {
                            ;((0, v.PQ)({
                              event: e,
                              href: tp,
                              initiator: "open_in_browser_bridge",
                              openTarget: "external-browser",
                            }),
                              (0, N.Ey)(ex, "none"))
                          },
                          children: tm,
                        }),
                      ],
                    })
                  : null,
              ],
            })
          : (0, r.jsx)("div", {
              className: (0, s.A)(
                "flex min-w-0 items-center gap-1 text-base text-secondary",
                "start" === eb && "-ms-1",
              ),
              children: tu,
            }),
        tb =
          !ey && te && ei
            ? (0, r.jsx)("span", {
                className: "inline-flex shrink-0 items-center gap-1 opacity-50",
                role: "link",
                "aria-disabled": "true",
                children: tg,
              })
            : null,
        ty =
          ey || !te || ei
            ? null
            : (0, r.jsx)(y.G, {
                className: "inline-flex shrink-0 items-center gap-1",
                appearance: "secondary",
                href: tp,
                initiator: "open_in_browser_bridge",
                openTarget: "external-browser",
                underline: "hover",
                onActivate: () => {
                  ;(0, N.Ey)(ex, "none")
                },
                children: tg,
              })
      eo[35] !== J || eo[36] !== tf || eo[37] !== tb || eo[38] !== ty
        ? ((K = (0, r.jsxs)("div", { className: J, children: [tf, tb, ty] })),
          (eo[35] = J),
          (eo[36] = tf),
          (eo[37] = tb),
          (eo[38] = ty),
          (eo[39] = K))
        : (K = eo[39])
      let tv = K,
        tx = "start" === eb ? "gap-3" : "gap-4"
      ;(eo[40] !== tx ? ((ee = (0, s.A)("flex min-h-0 flex-col", tx)), (eo[40] = tx), (eo[41] = ee)) : (ee = eo[41]),
        eo[42] !== ey || eo[43] !== tv || eo[44] !== ea || eo[45] !== eb
          ? ((et =
              "start" === eb
                ? (0, r.jsx)(f.c7, {
                    className: "shrink-0 select-none",
                    title: ea,
                    subtitle: ey ? void 0 : tv,
                    subtitleTone: "secondary",
                  })
                : (0, r.jsxs)("div", {
                    className: "flex flex-col items-center gap-2 text-center select-none",
                    children: [ea, !ey && tv],
                  })),
            (eo[42] = ey),
            (eo[43] = tv),
            (eo[44] = ea),
            (eo[45] = eb),
            (eo[46] = et))
          : (et = eo[46]),
        eo[47] !== ey || eo[48] !== tv
          ? ((en = ey
              ? (0, r.jsxs)("div", {
                  className: "flex min-w-0 items-center justify-between gap-4",
                  children: [
                    (0, r.jsx)("span", {
                      className: "shrink-0 text-base font-medium",
                      children: (0, r.jsx)(p.A, {
                        id: "environmentSetup.repositoryPicker.connectedAsLabel",
                        defaultMessage: "Connected as",
                        description: "Label beside the GitHub account selector in the add repository dialog",
                      }),
                    }),
                    tv,
                  ],
                })
              : null),
            (eo[47] = ey),
            (eo[48] = tv),
            (eo[49] = en))
          : (en = eo[49]))
      let tw =
        em ??
        (0, r.jsxs)("div", {
          className: "flex min-h-0 flex-1 flex-col gap-2",
          children: [
            (0, r.jsxs)("div", {
              className: "flex min-w-0 items-center justify-between gap-4",
              children: [
                (0, r.jsx)("span", {
                  className: "min-w-0 truncate text-base font-medium select-none",
                  children:
                    "single" === ev
                      ? (0, r.jsx)(p.A, {
                          id: "environmentSetup.repositoryPicker.single.label",
                          defaultMessage: "Select a repository",
                          description: "Label for selecting one repository for a cloud environment",
                        })
                      : (0, r.jsx)(p.A, {
                          id: "restricted.environmentSetup.create.repositories.label",
                          defaultMessage: "Select repositories",
                          description: "Label for the repositories to include in the new cloud environment",
                        }),
                }),
                te || eR
                  ? (0, r.jsx)("div", {
                      className: "max-w-1/2 min-w-0",
                      children: (0, r.jsx)(D, {
                        connectorId: eH,
                        disabled: ei || eR,
                        installation: eV,
                        linkId: eD,
                        onChange: (e) => eM(null == e ? null : { connectorId: eH, linkId: eD, installation: e }),
                      }),
                    })
                  : null,
              ],
            }),
            null == ti && (null == tr || te)
              ? (0, r.jsx)(S.s, {
                  id: "cloud-environment-repository-search",
                  className: "min-w-0 shrink-0",
                  autoFocus: !0,
                  variant: "toolbar",
                  label: ta,
                  onSearchQueryChange: ej,
                  placeholder: ew.formatMessage({
                    id: "restricted.environmentSetup.repositoryPicker.search.placeholder",
                    defaultMessage: "Search",
                    description: "Placeholder for searching repositories in the cloud environment creation dialog",
                  }),
                  searchQuery: e_,
                  trailingControl: "" !== e_.trim() && (e4 || eG) ? (0, r.jsx)(C.y, { className: "icon-2xs" }) : void 0,
                })
              : null,
            ts ??
              (0, r.jsxs)("div", {
                className: "max-h-64 min-h-0 overflow-y-auto",
                children: [
                  eP
                    ? (0, r.jsx)(g.$, {
                        color: "ghostActive",
                        onClick: () => void eN(),
                        children: (0, r.jsx)(p.A, {
                          id: "restricted.environmentSetup.repositoryPicker.connections.retry",
                          defaultMessage: "Retry loading GitHub connections",
                          description: "Retries loading GitHub connections for the Cloud v2 repository picker",
                        }),
                      })
                    : null,
                  eG || e6
                    ? (0, r.jsxs)("div", {
                        role: "status",
                        className: "select-none",
                        children: [
                          (0, r.jsx)("div", {
                            className: "sr-only",
                            children: (0, r.jsx)(p.A, {
                              id: "restricted.environmentSetup.repositoryPicker.repositories.loading",
                              defaultMessage: "Loading repositories…",
                              description:
                                "Loading state while fetching repositories for the Cloud v2 repository picker",
                            }),
                          }),
                          ["w-24", "w-32", "w-28", "w-36", "w-20", "w-16"].map(O),
                        ],
                      })
                    : null,
                  e2 && !e5
                    ? (0, r.jsx)(g.$, {
                        color: "ghostActive",
                        onClick: () => void e7(),
                        children: (0, r.jsx)(p.A, {
                          id: "restricted.environmentSetup.repositoryPicker.repositories.retry",
                          defaultMessage: "Retry loading repositories",
                          description:
                            "Retries a failed GitHub repository page or search in the Cloud v2 repository picker",
                        }),
                      })
                    : null,
                  eG || e2 || e8?.length !== 0
                    ? null
                    : (0, r.jsx)(_.W, {
                        layout: "settings-row",
                        children:
                          "" !== eA
                            ? (0, r.jsx)(p.A, {
                                id: "restricted.environmentSetup.repositoryPicker.noMatches",
                                defaultMessage: "No repositories match “{query}”",
                                description: "No repositories match the user's search text",
                                values: { query: eA },
                              })
                            : (0, r.jsx)(p.A, {
                                id: "restricted.environmentSetup.repositoryPicker.repositories.empty",
                                defaultMessage: "No repositories found",
                                description:
                                  "Empty state when no repositories match the Cloud v2 repository picker search",
                              }),
                      }),
                  eG
                    ? null
                    : e8?.map((e) => {
                        let t = es.includes(e.id),
                          n = { linkId: eD, connectorId: (0, G.fw)(e.id) ?? eH, repository: e },
                          o = (0, r.jsxs)("span", {
                            className: (0, s.A)("truncate", ey && "single" !== ev && "-translate-y-px"),
                            children: [
                              (0, r.jsx)("span", {
                                className: "text-secondary",
                                children: e.repository_full_name.slice(0, e.repository_full_name.lastIndexOf("/") + 1),
                              }),
                              e.repository_full_name.slice(e.repository_full_name.lastIndexOf("/") + 1),
                            ],
                          })
                        return "single" === ev
                          ? (0, r.jsx)(
                              g.$,
                              {
                                className:
                                  "w-full gap-3 rounded-lg px-3 py-1 text-start text-base hover:bg-primary-ghost-hover",
                                disabled: ei,
                                unstyled: !0,
                                onClick: () => ed(n, !0),
                                type: "button",
                                children: o,
                              },
                              e.id,
                            )
                          : (0, r.jsxs)(
                              "label",
                              {
                                className: (0, s.A)(
                                  "flex cursor-interaction items-center gap-3 px-3 text-base select-none",
                                  ey ? "py-1.5 leading-5" : "py-1",
                                ),
                                htmlFor: `cloud-environment-repository-${e.id}`,
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "relative flex",
                                    children: (0, r.jsx)(h.S, {
                                      variant: "secondary",
                                      checked: t,
                                      disabled: ei || (ek && !t),
                                      id: `cloud-environment-repository-${e.id}`,
                                      onCheckedChange: (e) => {
                                        ed(n, !0 === e)
                                      },
                                    }),
                                  }),
                                  o,
                                ],
                              },
                              e.id,
                            )
                      }),
                  !eG && (e1 || e5) && (!e2 || e5)
                    ? (0, r.jsx)(_.W, {
                        layout: "settings-row",
                        children: (0, r.jsxs)(g.$, {
                          color: "secondary",
                          disabled: ei || e4,
                          loading: e3,
                          size: "dialog",
                          onClick: () => void e0(),
                          children: [
                            e3 &&
                              (0, r.jsx)(p.A, {
                                id: "restricted.environmentSetup.repositoryPicker.repositories.loadingMore",
                                defaultMessage: "Loading more…",
                                description:
                                  "Button label while loading another page of GitHub repositories in the cloud environment setup dialog",
                              }),
                            !e3 &&
                              e5 &&
                              (0, r.jsx)(p.A, {
                                id: "restricted.environmentSetup.repositoryPicker.repositories.retry",
                                defaultMessage: "Retry loading repositories",
                                description:
                                  "Retries a failed GitHub repository page or search in the Cloud v2 repository picker",
                              }),
                            !e3 &&
                              !e5 &&
                              (0, r.jsx)(p.A, {
                                id: "restricted.environmentSetup.repositoryPicker.repositories.loadMore",
                                defaultMessage: "Load more repositories",
                                description:
                                  "Loads another page of GitHub repositories in the Cloud v2 repository picker",
                              }),
                          ],
                        }),
                      })
                    : null,
                ],
              }),
          ],
        })
      return (
        eo[50] !== ee || eo[51] !== et || eo[52] !== en || eo[53] !== tw
          ? ((er = (0, r.jsxs)("div", { className: ee, children: [et, en, tw] })),
            (eo[50] = ee),
            (eo[51] = et),
            (eo[52] = en),
            (eo[53] = tw),
            (eo[54] = er))
          : (er = eo[54]),
        er
      )
    }
    function O(e) {
      return (0, r.jsxs)(
        "div",
        {
          "aria-hidden": !0,
          className: "flex h-8 items-center gap-3 px-3",
          children: [
            (0, r.jsx)("div", { className: "size-4 shrink-0", children: (0, r.jsx)(I.X, { size: "fill" }) }),
            (0, r.jsx)(I.X, { className: e, size: "sm" }),
          ],
        },
        e,
      )
    }
    function L(e) {
      return e.repositories
    }
    function $(e) {
      let { status: t } = e
      return "DISABLED_BY_ADMIN" !== t
    }
    function U(e) {
      return "connected" === (0, N.oP)(e).status
    }
  },
  oiiw(e, t, n) {
    n.d(t, { K: () => A, p: () => G })
    var r = n("zTeN"),
      o = n("DBCl"),
      i = n("SPnB"),
      s = n("xG8A"),
      a = n("SGsN"),
      l = n("eA5w"),
      c = n("nlNF"),
      d = n("V3rO"),
      u = n("Bc5r"),
      p = n("SRbQ"),
      m = n("Eh2x"),
      g = n("NRIv"),
      h = n("Dgwo"),
      f = n("shRG"),
      b = n("PAzX"),
      y = n("fYtp"),
      v = n("GaA7"),
      x = n("eac5"),
      w = n("HhRW"),
      k = n("j2sz")
    let _ = "cloud-environment-onboarding:setup"
    class j extends Error {}
    function S(e, t) {
      return null != t
        ? e.formatMessage(
            {
              id: "restricted.environmentSetup.onboarding.skillPrompt",
              defaultMessage: "Use {skill} to set up this cloud environment",
              description:
                "First onboarding message explicitly invoking the required setup skill. The skill placeholder is an exact invocation and must not be translated",
            },
            { skill: `$${t}` },
          )
        : e.formatMessage({
            id: "restricted.environmentSetup.onboarding.prompt",
            defaultMessage:
              "First ask me what I want to get running and discuss any needed details with me. Wait for my response before setting up this cloud environment",
            description:
              "First user message directing the setup agent to ask what the user wants to run and wait for their response before starting setup",
          })
    }
    function I(e) {
      return "http" !== e.error || null == e.status || 408 === e.status || e.status >= 500
    }
    function C(e, t, n, r) {
      if (e.get(i.chatGptAuthenticatedAccountId$) !== n || e.get(i.chatGptAuthenticatedUserId$) !== r)
        throw Error(
          t.formatMessage({
            id: "restricted.environmentSetup.onboarding.accountChanged",
            defaultMessage: "Your account changed while creating the environment",
            description: "Error when the selected account changes during environment creation",
          }),
        )
    }
    var M = n("bMv2")
    function A(e, t, n) {
      let r = e.get(i.chatGptAuthenticatedAccountId$),
        s = e.get(i.chatGptAuthenticatedUserId$)
      if (null != n.legacyEnvironmentId) {
        for (let [t, o] of e.get(M.r))
          if (
            o.accountId === r &&
            o.userId === s &&
            o.inputs.legacyEnvironmentId === n.legacyEnvironmentId &&
            null != e.get(d.Pt, t)
          )
            return t
      }
      let a = (0, o.xa2)(),
        c = { hostId: (0, l.Y)(), prompt: S(t, _), title: (0, k.ZO)(t, n.name), status: "queued" }
      return (
        (0, d.gI)(e, a, c),
        e.set(
          M.r,
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
    async function G(e, t, n, A) {
      let G = e.get(M.m, A),
        E = e.get(d.Pt, A)
      if (null == G || null == E || ("queued" !== E.status && "failed" !== E.status)) return
      let P = { ...E, status: "creating", errorMessage: void 0 }
      ;(0, r.Y)(e, () => {
        ;((0, d.gI)(e, A, P),
          e.set(M.r, (e) => new Map(e).set(A, { ...G, stage: null == G.config ? "creating" : "connecting" })))
      })
      let R = () =>
        e.get(d.Pt, A) === P &&
        e.get(i.chatGptAuthenticatedAccountId$) === G.accountId &&
        e.get(i.chatGptAuthenticatedUserId$) === G.userId
      function N() {
        e.set(M.r, (e) => {
          let t = new Map(e)
          return (t.delete(A), t)
        })
      }
      try {
        let s = await (async function (
          e,
          t,
          {
            name: n,
            githubRepositories: s,
            networkPolicy: a,
            modelSettings: c,
            legacyEnvironmentId: d,
            repositoryNamesById: u,
            initialPrompt: M,
            idempotencyKey: A = crypto.randomUUID(),
            existingConfig: G,
            onConfigurationCreated: E,
            onConfigurationReady: P,
            onConnected: R,
            onConversationReady: N,
            onOutcomeUnknown: T,
          },
        ) {
          let H = e.get(i.chatGptAuthenticatedAccountId$),
            D = e.get(i.chatGptAuthenticatedUserId$)
          if (v.appServices?.environmentConfigs == null || null == H || null == D)
            throw Error(
              t.formatMessage({
                id: "restricted.environmentSetup.onboarding.unavailable",
                defaultMessage: "Cloud environment setup is unavailable",
                description: "Error when the Desktop environment onboarding service or account is unavailable",
              }),
            )
          let z = Symbol("service-tier-timeout"),
            O = await (0, x.M)((0, b.e)(e, (0, l.Y)(), c.model), z, Date.now() + 3e4)
          if (O === z)
            throw Error(
              t.formatMessage({
                id: "restricted.environmentSetup.onboarding.connectionTimeout",
                defaultMessage: "Could not connect to cloud setup. Check your connection and try again",
                description:
                  "Error when the cloud app-server does not respond before creating an environment or setup chat",
              }),
            )
          C(e, t, H, D)
          let L = null != d && null == G,
            $ = v.appServices.environmentConfigs.request(
              null == G
                ? {
                    method: "POST",
                    accountId: H,
                    userId: D,
                    body:
                      null != d
                        ? { legacy_environment_id: d, start_onboarding: !0, private_draft: !0 }
                        : {
                            idempotency_key: A,
                            name: n ?? (0, k.II)(t),
                            repositories: s.map(({ repository: e }) => ({
                              repository_id: e.id,
                              ref: e.default_branch,
                            })),
                            network_policy: a,
                            share_settings: "private",
                            start_onboarding: !1,
                          },
                  }
                : { method: "GET", accountId: H, userId: D, configId: G.id, draftId: G.privateDraftId },
            ),
            U = L ? await $.catch(() => ({ ok: !1, error: "unavailable" })) : await $
          if (
            L &&
            (U.ok ? U.config.draft?.id == null || null == U.config.environment_id || null == U.config.thread_id : I(U))
          )
            return (C(e, t, H, D), T?.(), { conversationId: null, config: null })
          if (!U.ok) {
            if (null != d && 400 === U.status && U.message === m.ds)
              throw new j(
                t.formatMessage({
                  id: "environmentSetup.onboarding.repositoryNotAccessible",
                  defaultMessage:
                    "We couldn't access this environment's GitHub repository. Check that it still exists and that your connected GitHub account can open it, then try again.",
                  description:
                    "Error when converting a legacy cloud environment whose GitHub repository is missing or inaccessible to the connected GitHub account",
                }),
              )
            throw Error(
              t.formatMessage(
                {
                  id: "restricted.environmentSetup.onboarding.createFailed",
                  defaultMessage: "Could not start cloud environment setup ({reason})",
                  description: "Error when the ASB environment onboarding request fails",
                },
                { reason: null == U.status ? U.error : `HTTP ${U.status}` },
              ),
            )
          }
          if (
            (C(e, t, H, D),
            G?.privateDraftId != null &&
              (U.config.draft?.id !== G.privateDraftId || U.config.environment_id !== G.environment_id))
          )
            throw Error("The setup draft no longer matches its Build")
          let B = {
            ...U.config,
            ...(L && { privateDraftId: U.config.draft?.id }),
            ...(G?.privateDraftId && { privateDraftId: G.privateDraftId, thread_id: G.thread_id }),
            onboarding_skill: U.config.onboarding_skill ?? G?.onboarding_skill,
          }
          E?.(B)
          let W = u ?? Object.fromEntries(s.map(({ repository: e }) => [e.id, e.repository_full_name]))
          if (null == B.thread_id && null == d) {
            let n = { stack: [], error: void 0, hasError: !1 }
            try {
              let r = (0, p.mS)(
                n,
                await v.appServices.environmentConfigs
                  .createDraft({ accountId: H, userId: D, configId: B.id, method: "POST" })
                  .catch(() => null),
                !1,
              )
              if ((C(e, t, H, D), null == r || (!r.ok && I(r)) || (r.ok && null == r.data.thread_id)))
                return (T?.(), { conversationId: null, config: B })
              if (!r.ok) throw Error(r.message ?? r.error)
              ;((B = {
                ...B,
                privateDraftId: r.data.draft_id,
                environment_id: r.data.environment_id,
                thread_id: r.data.thread_id,
              }),
                E?.(B))
            } catch (e) {
              ;((n.error = e), (n.hasError = !0))
            } finally {
              ;(0, p.hk)(n)
            }
          }
          let F =
              null != d
                ? (B.draft ?? B).repositories.map(({ repository_id: e, ref: t }) => ({ name: W[e] ?? e, ref: t }))
                : s.map(({ repository: e }) => ({ name: e.repository_full_name, ref: e.default_branch })),
            Y =
              null != B.onboarding_skill
                ? S(t, B.onboarding_skill)
                : (M ?? S(t, null == B.privateDraftId || null != d ? void 0 : _)),
            q = (0, h.V)(e, (0, l.Y)()),
            X = [
              {
                type: "text",
                text: `${JSON.stringify({ repositories: F })}

${g.Vh}`,
                text_elements: [],
              },
              { type: "text", text: Y, text_elements: [] },
            ],
            Q = (0, k.ZO)(t, null == n && B.name === (0, k.II)(t) ? null : B.name)
          if (null == B.thread_id || null == B.environment_id)
            throw Error(
              t.formatMessage({
                id: "restricted.environmentSetup.onboarding.missingTask",
                defaultMessage: "The server saved the configuration but did not return a setup chat",
                description: "Error when an older ASB does not support environment onboarding",
              }),
            )
          let V = (0, o.JXB)(B.thread_id)
          return (
            C(e, t, H, D),
            (0, y.cx)(e, V, (0, y.J5)(e, B.environment_id ?? null)),
            null == e.get(w.fm, V) &&
              (0, r.Y)(e, (e) => {
                ;((0, w.or)(e, V, { name: B.name, repositories: F.map(({ name: e }) => e), githubRepository: s?.[0] }),
                  (0, w.e2)(e, V, {
                    accountId: H,
                    userId: D,
                    configId: B.id,
                    ...(B.privateDraftId && { draftId: B.privateDraftId, environmentId: B.environment_id ?? void 0 }),
                    name: B.name,
                    repositoryNamesById: W,
                    generatedThreadTitle: { environmentName: B.name, title: Q },
                  }))
              }),
            P?.(V, Y),
            await q.resumeConversation(
              {
                conversationId: V,
                model: null,
                serviceTier: O,
                reasoningEffort: null,
                workspaceRoots: ["/workspace", "/tmp"],
                collaborationMode: null,
                useAppServerPermissionDefault: !0,
              },
              { readResumeInputs: (0, f.jQ)(e, (0, l.Y)()) },
            ),
            C(e, t, H, D),
            R?.(),
            await q.updateThreadSettingsForNextTurn(V, { model: c.model, effort: c.reasoningEffort }),
            C(e, t, H, D),
            await q.setThreadTitle(V, Q, { onlyIfUntitled: !0, requireAcknowledgement: !0 }),
            C(e, t, H, D),
            N?.(V),
            await q.startTurn(V, {
              request: { turnTrigger: "environment_onboarding", threadId: V, input: X, serviceTier: O },
            }),
            C(e, t, H, D),
            { conversationId: V, config: B }
          )
        })(e, t, {
          ...G.inputs,
          idempotencyKey: A,
          existingConfig: G.config,
          onOutcomeUnknown: () => {
            R() && ((P = { ...P, status: "draft-creation-unconfirmed" }), (0, d.gI)(e, A, P))
          },
          onConfigurationCreated: (t) => {
            R() &&
              e.set(M.r, (e) => {
                let n = e.get(A)
                return null == n ? e : new Map(e).set(A, { ...n, config: t })
              })
          },
          onConfigurationReady: (t, n) => {
            R() &&
              (0, r.Y)(e, () => {
                ;((P = { ...P, prompt: n }),
                  (0, d.gI)(e, A, P),
                  e.set(M.r, (e) => {
                    let n = e.get(A)
                    return null == n ? e : new Map(e).set(A, { ...n, conversationId: t, stage: "connecting" })
                  }))
              })
          },
          onConnected: () => {
            R() &&
              e.set(M.r, (e) => {
                let t = e.get(A)
                return null == t ? e : new Map(e).set(A, { ...t, stage: "starting" })
              })
          },
          onConversationReady: (t) => {
            R() &&
              ((0, d.Bb)(e, { clientThreadId: A, conversationId: t, hostId: (0, l.Y)() }),
              N(),
              e.get(c.x2)?.pathname === (0, o._RT)(A) && n((0, u.Ch)((0, o._RT)(t), (0, l.Y)()), { replace: !0 }))
          },
        })
        R() && null != s.conversationId && ((0, d.gI)(e, A, null), N())
      } catch (n) {
        if (e.get(d.Pt, A) !== P) return
        if (
          e.get(i.chatGptAuthenticatedAccountId$) !== G.accountId ||
          e.get(i.chatGptAuthenticatedUserId$) !== G.userId
        ) {
          ;((0, d.gI)(e, A, null), N())
          return
        }
        ;((0, d.gI)(
          e,
          A,
          e.get(M.r).has(A) ? { ...P, status: "failed", errorMessage: n instanceof j ? n.message : void 0 } : null,
        ),
          e
            .get(a.Id)
            .danger(
              n instanceof j
                ? t.formatMessage({
                    id: "environmentSetup.onboarding.migrationFailed",
                    defaultMessage: "We couldn't finish the migration",
                    description: "Heading of an error toast when migrating a legacy cloud environment",
                  })
                : (0, s.WS)(n, t),
              {
                description: n instanceof j ? n.message : void 0,
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
    n.d(
      t,
      { Y2: () => a.x, x1: () => a.Q },
      {
        Hd: async function (e, { appId: t, appName: n }) {
          let a = await e.query.getOrFetch(s.a)
          return new URL(
            (0, o.Cj)({ id: (0, i.$)(t), name: n, installUrl: new URL(a.chatGptDesktopAuthOrigin ?? r.WaA).origin }),
          )
        },
      },
    )
  },
}
//# sourceMappingURL=889222.ccb66779fe.js.map
