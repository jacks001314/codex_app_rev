export const __rspack_esm_ids = [889222]
export const __webpack_modules__ = {
  Xf6D(e, t, n) {
    e.exports = n.p + "assets/setup-artwork.2a33374c41.png"
  },
  cnjf(e, t, n) {
    var r = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, r.jsxs)("svg", {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, r.jsx)("path", {
              d: "M21.6644 9.99309L21.637 9.92141L18.9146 2.81857C18.8602 2.67941 18.7624 2.56219 18.635 2.48122C18.5081 2.39984 18.3593 2.36147 18.2083 2.36948C18.0582 2.37749 17.914 2.43231 17.7963 2.52592C17.6795 2.62038 17.5952 2.74815 17.5555 2.89237L15.7174 8.51805H8.28061L6.44248 2.89237C6.40285 2.74815 6.31851 2.62038 6.20171 2.52592C6.08405 2.43231 5.93984 2.37749 5.78972 2.36948C5.63876 2.36147 5.4899 2.39984 5.36298 2.48122C5.23563 2.56219 5.1378 2.67941 5.0834 2.81857L2.36102 9.92183L2.3336 9.99309C1.52692 12.0973 2.21426 14.476 4.01064 15.8347C4.01401 15.8368 4.01696 15.8393 4.02034 15.8418L4.04438 15.86L8.1912 18.9644L10.2423 20.517L11.4905 21.4608C11.7911 21.6885 12.2069 21.6885 12.5076 21.4608L13.7557 20.517L15.8064 18.9644L19.9777 15.8418C19.9815 15.8389 19.9849 15.8364 19.9886 15.8334C21.7838 14.4747 22.4707 12.0969 21.6644 9.99309Z",
              fill: "#E24329",
            }),
            (0, r.jsx)("path", {
              d: "M21.6644 9.99309L21.637 9.9214C20.2864 10.1989 19.0424 10.7703 17.9772 11.5672C17.9599 11.5799 14.7404 14.0147 11.999 16.0873C14.0345 17.6264 15.8064 18.9644 15.8064 18.9644L19.9777 15.8418C19.9815 15.8389 19.9849 15.8364 19.9887 15.8334C21.7838 14.4747 22.4707 12.0969 21.6644 9.99309Z",
              fill: "#FC6D26",
            }),
            (0, r.jsx)("path", {
              d: "M8.19122 18.9644L10.2423 20.5171L11.4905 21.4608C11.7911 21.6885 12.2069 21.6885 12.5076 21.4608L13.7558 20.5171L15.8064 18.9644C15.8064 18.9644 14.0345 17.6264 11.999 16.0873C9.96314 17.6264 8.19122 18.9644 8.19122 18.9644Z",
              fill: "#FCA326",
            }),
            (0, r.jsx)("path", {
              d: "M6.02041 11.5672C4.95566 10.7707 3.71211 10.1989 2.36105 9.92183L2.33363 9.99309C1.52695 12.0973 2.21429 14.476 4.01067 15.8347C4.01404 15.8368 4.01699 15.8393 4.02037 15.8418L4.04441 15.86L8.19124 18.9644C8.19124 18.9644 9.96315 17.6264 11.999 16.0873C9.25768 14.0147 6.0377 11.5799 6.02041 11.5672Z",
              fill: "#FC6D26",
            }),
          ],
        })))
  },
  xG8A(e, t, n) {
    n.d(t, { WS: () => E, $x: () => R, Oy: () => N })
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
      v = n("OWtl"),
      b = n("WFY2"),
      y = n("pZTm"),
      x = n("LH8k")
    let w = "missing_github_connector_link"
    var k = n("TurB"),
      j = n("pjlf")
    function _(e, t) {
      switch ((0, a.Rt_)(e)) {
        case j.JS:
          return t.formatMessage({
            id: "composer.browserTabMentions.contextLimitExceeded",
            defaultMessage:
              "This message includes too much browser tab context. Remove some tab mentions and try again",
            description: "Toast shown when the combined browser tab mention context exceeds its size limit",
          })
        case j.Jg:
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
    var C = n("YEpt"),
      S = n("J7aR"),
      I = n("oynk"),
      M = n("IiOi"),
      A = n("Ld2s")
    let P = {
      toastId: "composer_submit_failed",
      operation: "submit_conversation",
      errorCategory: "conversation",
      userFacingError: {
        surface: "CHATGPT_USER_FACING_ERROR_SURFACE_CODEX",
        errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION",
      },
    }
    function N(e) {
      let t,
        n = (0, o.c)(7),
        { composerMode: d, conversationId: k, cwd: j, followUpType: N } = e,
        T = (0, c.A)(),
        z = (0, s.gh)(v.u)
      return (
        n[0] !== d || n[1] !== k || n[2] !== j || n[3] !== N || n[4] !== T || n[5] !== z
          ? ((t = (e, t, n) => {
              if ((0, g.ym)(e)) return void z.get(p.Id).danger(T.formatMessage(g.Bw.rejected), { errorAnalytics: P })
              if (e instanceof M.m)
                return void z
                  .get(p.Id)
                  .danger(
                    T.formatMessage({
                      id: "composer.presentationSuggestionCloudUnsupported",
                      defaultMessage:
                        "Slide suggestions can’t be sent to Cloud. Switch out of Cloud or remove the slide attachment to continue",
                      description:
                        "Toast shown when a user sends a presentation slide suggestion in Cloud execution mode, which cannot access the attached local slide target. Their unsent prompt and attachments are preserved.",
                    }),
                    { errorAnalytics: { ...P, toastId: "composer.presentationSuggestionCloudUnsupported" } },
                  )
              if (e instanceof i.y)
                return void z
                  .get(p.Id)
                  .danger(T.formatMessage(f.Gu.textOnly), {
                    errorAnalytics: { ...P, toastId: "aeon.replyChain.textOnly" },
                  })
              if (e instanceof I.a || (0, S.DB)(e) || e instanceof h.Kr)
                return void z
                  .get(p.Id)
                  .danger(e.message, {
                    errorAnalytics: { ...P, toastId: "composerSubmitError.useComposerSubmitError" },
                  })
              if (
                e instanceof u.ChatGptProjectSyncAlreadyReportedError ||
                e instanceof A.e ||
                (e instanceof Error && "AbortError" === e.name)
              )
                return
              b.v.error("[Composer] submit failed", { safe: { mode: d, followUp: N }, sensitive: { cwd: j, error: e } })
              let o =
                "cloud" === d
                  ? void 0
                  : (0, m.t)(z, {
                      conversationId: k,
                      surface: "codex",
                      operation: n ?? (null == k ? "startup" : "request_submission"),
                      errorMessage: (0, a.Rt_)(e),
                      occurredAtMs: Date.now(),
                    })
              "worktree" === d
                ? z.get(p.Id).danger(E(e, T), { id: "composer.taskError", primaryAction: o, errorAnalytics: P })
                : z.get(p.Id).danger(
                    (function ({ error: e, composerMode: t, intl: n }) {
                      var o
                      let i = R(e, n)
                      if (null != i) return i
                      let s = _(e, n)
                      if (null != s) return s
                      let c = G(e, n)
                      return null != c
                        ? c
                        : "worktree" === t && L(e)
                          ? n.formatMessage({
                              id: "composer.worktreeSetupFailed",
                              defaultMessage: "Worktree setup failed. Check .codex/environments for a setup script",
                              description: "Toast text shown when the worktree setup script fails",
                            })
                          : ((o = e), (0, a.Rt_)(o).includes(C.bj))
                            ? n.formatMessage({
                                id: "composer.closedAgentError",
                                defaultMessage: "Ask parent to resume sub-agent to continue conversation",
                                description: "Toast shown when the user tries to send a message to a closed agent chat",
                              })
                            : "cloud" === t
                              ? (function (e, t) {
                                  if ((0, a.Rt_)(e) === l.lr) return t.formatMessage(y.A.appInput)
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
                                  if ((0, a.Rt_)(e) === l.lr) return t.formatMessage(y.A.appInput)
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
                    })({ error: e, composerMode: d, intl: T }),
                    { id: t, primaryAction: o, errorAnalytics: P },
                  )
            }),
            (n[0] = d),
            (n[1] = k),
            (n[2] = j),
            (n[3] = N),
            (n[4] = T),
            (n[5] = z),
            (n[6] = t))
          : (t = n[6]),
        t
      )
    }
    function E(e, t) {
      if ((0, a.Rt_)(e) === l.lr) return t.formatMessage(y.A.appInput)
      let n = R(e, t)
      if (null != n) return n
      let o = _(e, t)
      if (null != o) return o
      let i = G(e, t)
      return null != i
        ? i
        : L(e)
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
    function L(e) {
      return !!e && "object" == typeof e && e.data?.code === "worktree_init_failed"
    }
    function G(e, t) {
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
  Laxs(e, t, n) {
    var r = n("ABep"),
      o = n("QosV"),
      i = n("zTeN"),
      s = n("zd8w"),
      a = n("Wf1j"),
      l = n("oyxz"),
      c = n("Sm6l"),
      d = n("SGsN"),
      u = n("Yewb"),
      p = n("OWtl"),
      m = n("rLsS"),
      g = n("X1Fy"),
      h = n("fUey")
    function f() {
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
            b,
            y,
            x = (0, o.c)(21),
            { connectorId: w, disabled: k, reconnect: j, compact: _ } = e,
            C = void 0 !== _ && _,
            S = (0, i.gh)(p.u)
          x[0] !== w ? ((t = (0, h.Pt)(w)), (x[0] = w), (x[1] = t)) : (t = x[1])
          let I = t,
            M = (0, a.A)(),
            { status: A } = (0, u.XY)(),
            [P, N] = (0, s.useState)(!1),
            E = P || null != A,
            R = C ? "ghostActive" : "accent",
            L = k || E,
            G = C ? "menuRow" : "dialog"
          return (
            x[2] !== w || x[3] !== M || x[4] !== I || x[5] !== S
              ? ((n = () => {
                  ;(N(!0),
                    (0, m.X_)(S, w, { allowGitLab: !0 })
                      .catch(f)
                      .then((e) => {
                        if ("unavailable" === e.status)
                          return void S.get(d.Id).danger(
                            M.formatMessage(
                              {
                                id: "environmentSetup.repositoryPicker.connectProvider.unavailable",
                                defaultMessage: "{provider} could not be loaded. Try again",
                                description:
                                  "Error when the provider plugin cannot be found to connect it from the environment repository picker",
                              },
                              { provider: I },
                            ),
                            {
                              errorAnalytics: {
                                toastId: "environmentSetup.repositoryPicker.connectGithub.unavailable",
                              },
                            },
                          )
                      })
                      .finally(() => {
                        N(!1)
                      }))
                }),
                (x[2] = w),
                (x[3] = M),
                (x[4] = I),
                (x[5] = S),
                (x[6] = n))
              : (n = x[6]),
            x[7] !== C || x[8] !== w
              ? ((v = C ? (0, r.jsx)(g.R, { connectorId: w, compact: !0 }) : null), (x[7] = C), (x[8] = w), (x[9] = v))
              : (v = x[9]),
            x[10] !== I || x[11] !== j
              ? ((b = j
                  ? (0, r.jsx)(l.A, {
                      id: "restricted.environmentSetup.repositoryPicker.reconnectAction.provider",
                      defaultMessage: "Reconnect {provider}",
                      values: { provider: I },
                      description: "Starts provider plugin setup to reconnect the user's account",
                    })
                  : (0, r.jsx)(l.A, {
                      id: "restricted.environmentSetup.repositoryPicker.connectAction.provider",
                      defaultMessage: "Connect {provider}",
                      values: { provider: I },
                      description: "Starts provider plugin setup to connect the user's account",
                    })),
                (x[10] = I),
                (x[11] = j),
                (x[12] = b))
              : (b = x[12]),
            x[13] !== E || x[14] !== R || x[15] !== L || x[16] !== G || x[17] !== n || x[18] !== v || x[19] !== b
              ? ((y = (0, r.jsxs)(c.$, {
                  "aria-busy": E,
                  color: R,
                  disabled: L,
                  loading: E,
                  size: G,
                  onClick: n,
                  children: [v, b],
                })),
                (x[13] = E),
                (x[14] = R),
                (x[15] = L),
                (x[16] = G),
                (x[17] = n),
                (x[18] = v),
                (x[19] = b),
                (x[20] = y))
              : (y = x[20]),
            y
          )
        },
      },
    )
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
      u = n("Sm6l"),
      p = n("JNtf"),
      m = n("mUDD"),
      g = n("eA5w"),
      h = n("o8WW"),
      f = n("OWtl"),
      v = n("Bc5r"),
      b = n("oiiw"),
      y = n("S5Ho"),
      x = n("OMIV"),
      w = n("VPEh"),
      k = n("rLsS"),
      j = n("fUey"),
      _ = n("EgcF")
    let C = (0, i.i1)(f.u, (e, { get: t }) => {
      if (null == e || !t(x.JW, "3620782482")) return null
      let n = t(_.g, e)
      if (null == n) return n
      if (1 !== n.repositories.length) return null
      let r = n.repositories[0],
        o = (0, j.tW)(r.originUrl)
      if (!o || 1 !== r.workspaceRoots.length) return null
      let { connectorId: i, fullName: s } = o
      if (!(0, j.ye)(i, (e) => t(x.JW, e))) return null
      let { data: a, isPending: l } = t(w.G, { surface: "picker" })
      if (!l) {
        if (null == a) return null
        for (let e of a) {
          if (e.id !== i || "connected" !== (0, k.jh)(e).status) continue
          let { data: r, isPending: o } = t(y.go, { connectorId: i, linkId: e.linkId, installation: null, query: s })
          if (null == r) {
            if (o) return
            continue
          }
          let a = r.pages
            .flatMap((e) => e.repositories)
            .find((e) => e.repository_full_name.toLowerCase() === s.toLowerCase())
          if (a?.default_branch)
            return { name: n.name ?? a.name, repository: { connectorId: i, repository: a }, linkId: e.linkId }
        }
        return null
      }
    })
    var S = n("ZtSy"),
      I = n("aQvR"),
      M = n("bVeK"),
      A = n("X3K1"),
      P = n("AWNZ"),
      N = n("ZEx5")
    function E(e) {
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
        g,
        h = (0, o.c)(24),
        { setup: f } = e,
        { connectorId: v, repository: b } = f.repository
      h[0] !== v || h[1] !== b.repository_full_name
        ? ((t = (0, j.ys)(v, b.repository_full_name)), (h[0] = v), (h[1] = b.repository_full_name), (h[2] = t))
        : (t = h[2])
      let y = t
      return (
        h[3] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, r.jsx)(M.nex, {})), (h[3] = n)) : (n = h[3]),
        h[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, r.jsx)(c.A, {
              id: "environmentSetup.create.currentlySelectedProject",
              defaultMessage: "Currently selected project",
              description:
                "Identifies the project whose name appears above as the project currently selected in the app",
            })),
            (h[4] = i))
          : (i = h[4]),
        h[5] !== f.name
          ? ((s = (0, r.jsx)(P.ic, { icon: n, label: f.name, description: i, control: null })),
            (h[5] = f.name),
            (h[6] = s))
          : (s = h[6]),
        h[7] === Symbol.for("react.memo_cache_sentinel") ? ((a = (0, r.jsx)(M.Yg, {})), (h[7] = a)) : (a = h[7]),
        h[8] !== b.repository_full_name
          ? ((l = (0, r.jsx)("span", { className: "min-w-0 break-all", children: b.repository_full_name })),
            (h[8] = b.repository_full_name),
            (h[9] = l))
          : (l = h[9]),
        h[10] !== y
          ? ((d = (0, r.jsx)(I.g, { size: 16, href: y, openTarget: "external-browser" })), (h[10] = y), (h[11] = d))
          : (d = h[11]),
        h[12] !== y || h[13] !== l || h[14] !== d
          ? ((u = (0, r.jsxs)(S.G, {
              className: "inline-flex items-center gap-1",
              appearance: "inherit",
              href: y,
              initiator: "external_link",
              openTarget: "external-browser",
              underline: "hover",
              children: [l, d],
            })),
            (h[12] = y),
            (h[13] = l),
            (h[14] = d),
            (h[15] = u))
          : (u = h[15]),
        h[16] !== f.repository.repository.default_branch
          ? ((p = (0, r.jsx)(c.A, {
              id: "environmentSetup.create.defaultBranch",
              defaultMessage: "{branch} · Default branch",
              description: "Default Git branch that will be used for the suggested cloud environment repository",
              values: { branch: f.repository.repository.default_branch },
            })),
            (h[16] = f.repository.repository.default_branch),
            (h[17] = p))
          : (p = h[17]),
        h[18] !== u || h[19] !== p
          ? ((m = (0, r.jsx)(P.ic, { icon: a, label: u, labelWeight: "normal", description: p, control: null })),
            (h[18] = u),
            (h[19] = p),
            (h[20] = m))
          : (m = h[20]),
        h[21] !== m || h[22] !== s
          ? ((g = (0, r.jsxs)(N.t, { variant: "secondary", children: [s, m] })), (h[21] = m), (h[22] = s), (h[23] = g))
          : (g = h[23]),
        g
      )
    }
    function R() {
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
              children: [e, (0, r.jsx)(N.t, { variant: "secondary", children: [M.nex, M.Yg].map(L) })],
            })),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function L(e, t) {
      return (0, r.jsx)(
        P.ic,
        {
          icon: (0, r.jsx)(e, {}),
          label: (0, r.jsx)("span", {
            className: "flex h-lh items-center",
            children: (0, r.jsx)(A.X, { className: "w-36 max-w-full", size: "md" }),
          }),
          description: (0, r.jsx)("span", {
            className: "flex h-lh items-center",
            children: (0, r.jsx)(A.X, { className: "w-48 max-w-full", size: "sm" }),
          }),
          control: null,
        },
        t,
      )
    }
    var G = n("BExl"),
      T = n("Xf6D")
    function z(e) {
      let t,
        n,
        y,
        x,
        w,
        k,
        j,
        _,
        S,
        I,
        M,
        A,
        P,
        N,
        L,
        z,
        U,
        H,
        O,
        B,
        $,
        F,
        W,
        Y = (0, o.c)(75),
        { onClose: q, onStartSetup: X, project: Q } = e,
        V = (0, i.gh)(f.u),
        { modelSettings: Z } = (0, h.aU)(),
        J = (0, l.A)(),
        K = (0, d.Zp)(),
        ee = (0, d.zy)(),
        et = (0, v.M0)()
      Y[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (Y[0] = t)) : (t = Y[0])
      let [en, er] = (0, s.useState)(t),
        [eo, ei] = (0, s.useState)(!1),
        [es, ea] = (0, s.useState)(!1),
        el = (0, i._U)(C, es ? null : (Q ?? null)),
        ec = null != Q && !es && void 0 === el,
        ed = ec || null != el
      Y[1] !== el || Y[2] !== en
        ? ((n = null != el ? [el.repository] : en), (Y[1] = el), (Y[2] = en), (Y[3] = n))
        : (n = Y[3])
      let eu = n
      Y[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function () {
            ;(ea(!0), er([]))
          }),
          (Y[4] = y))
        : (y = Y[4])
      let ep = y,
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
              let n = (0, b.K)(V, J, {
                name: t.repository.name,
                repositorySelections: eu,
                modelSettings: Z,
                networkPolicy: { type: "restricted", presets: ["package_managers"], egress_rules: [] },
              })
              ;((0, a.flushSync)(() => {
                ;(X?.(), q(), et(n, (0, g.Y)()))
              }),
                (0, b.p)(V, J, K, n))
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
              src: T,
            })),
            (Y[19] = k))
          : (k = Y[19]),
        Y[20] !== eu ? ((j = eu.map(D)), (Y[20] = eu), (Y[21] = j)) : (j = Y[21]))
      let eg = el?.repository.connectorId,
        eh = el?.linkId,
        ef = null == Q || es ? void 0 : ep
      ;(Y[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = (0, r.jsx)(p.L3, {
            className: "heading-lg font-semibold",
            children: (0, r.jsx)(c.A, {
              id: "restricted.environmentSetup.create.title",
              defaultMessage: "Create a cloud environment",
              description: "Title of the dialog for choosing repositories before cloud environment setup",
            }),
          })),
          (Y[22] = _))
        : (_ = Y[22]),
        Y[23] !== ed
          ? ((S = (0, r.jsxs)(r.Fragment, {
              children: [
                _,
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
          ? ((I = (e, t) => {
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
            (Y[26] = I))
          : (I = Y[26]),
        Y[27] !== ec || Y[28] !== el || Y[29] !== ed
          ? ((M = ed
              ? (0, r.jsxs)(r.Fragment, {
                  children: [ec ? (0, r.jsx)(R, {}) : null, null != el ? (0, r.jsx)(E, { setup: el }) : null],
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
        Y[35] !== I ||
        Y[36] !== M ||
        Y[37] !== j ||
        Y[38] !== eg
          ? ((A = (0, r.jsx)(G.CloudEnvironmentRepositoryPicker, {
              disabled: eo,
              selectedRepositoryIds: j,
              preferredConnectorId: eg,
              preferredLinkId: eh,
              onConnectionChange: ef,
              header: S,
              onChange: I,
              children: M,
            })),
            (Y[31] = eo),
            (Y[32] = eh),
            (Y[33] = ef),
            (Y[34] = S),
            (Y[35] = I),
            (Y[36] = M),
            (Y[37] = j),
            (Y[38] = eg),
            (Y[39] = A))
          : (A = Y[39]),
        Y[40] !== eu.length || Y[41] !== ed || Y[42] !== eo
          ? ((P = ed
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
            (Y[43] = P))
          : (P = Y[43]),
        Y[44] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, r.jsx)(c.A, {
              id: "restricted.environmentSetup.create.cancel",
              defaultMessage: "Cancel",
              description: "Closes cloud environment creation without starting setup",
            })),
            (Y[44] = N))
          : (N = Y[44]),
        Y[45] !== q || Y[46] !== eo
          ? ((L = (0, r.jsx)(u.$, {
              color: "secondary",
              disabled: eo,
              onClick: q,
              size: "dialog",
              type: "button",
              children: N,
            })),
            (Y[45] = q),
            (Y[46] = eo),
            (Y[47] = L))
          : (L = Y[47]))
      let ev = eo || ec || 0 === eu.length || Z.isLoading
      return (
        Y[48] !== eo
          ? ((z = eo
              ? (0, r.jsx)(c.A, {
                  id: "restricted.environmentSetup.create.starting",
                  defaultMessage: "Starting setup…",
                  description: "Button label while the cloud environment setup conversation is being created",
                })
              : null),
            (Y[48] = eo),
            (Y[49] = z))
          : (z = Y[49]),
        Y[50] !== ed || Y[51] !== eo
          ? ((U =
              !eo && ed
                ? (0, r.jsx)(c.A, {
                    id: "environmentSetup.create.useProject",
                    defaultMessage: "Use this project",
                    description: "Starts cloud environment onboarding with the currently selected project’s repository",
                  })
                : null),
            (Y[50] = ed),
            (Y[51] = eo),
            (Y[52] = U))
          : (U = Y[52]),
        Y[53] !== ed || Y[54] !== eo
          ? ((H =
              eo || ed
                ? null
                : (0, r.jsx)(c.A, {
                    id: "restricted.environmentSetup.create.startSetup",
                    defaultMessage: "Get started",
                    description: "Starts Cloud v2 setup with the selected GitHub repositories",
                  })),
            (Y[53] = ed),
            (Y[54] = eo),
            (Y[55] = H))
          : (H = Y[55]),
        Y[56] !== ev || Y[57] !== z || Y[58] !== U || Y[59] !== H
          ? ((O = (0, r.jsxs)(u.$, {
              color: "primary",
              disabled: ev,
              size: "dialog",
              type: "submit",
              children: [z, U, H],
            })),
            (Y[56] = ev),
            (Y[57] = z),
            (Y[58] = U),
            (Y[59] = H),
            (Y[60] = O))
          : (O = Y[60]),
        Y[61] !== P || Y[62] !== L || Y[63] !== O
          ? ((B = (0, r.jsxs)(m.Es, { className: "flex-wrap", expandSingleButton: !1, children: [P, L, O] })),
            (Y[61] = P),
            (Y[62] = L),
            (Y[63] = O),
            (Y[64] = B))
          : (B = Y[64]),
        Y[65] !== A || Y[66] !== B
          ? (($ = (0, r.jsxs)("div", { className: "flex min-h-0 flex-col gap-5 pt-6", children: [A, B] })),
            (Y[65] = A),
            (Y[66] = B),
            (Y[67] = $))
          : ($ = Y[67]),
        Y[68] !== $ || Y[69] !== w
          ? ((F = (0, r.jsxs)(m.R4, { as: "form", size: "viewport", onSubmit: w, children: [k, $] })),
            (Y[68] = $),
            (Y[69] = w),
            (Y[70] = F))
          : (F = Y[70]),
        Y[71] !== F || Y[72] !== em || Y[73] !== x
          ? ((W = (0, r.jsx)(p.lG, { open: em, size: "beacon", onOpenChange: x, children: F })),
            (Y[71] = F),
            (Y[72] = em),
            (Y[73] = x),
            (Y[74] = W))
          : (W = Y[74]),
        W
      )
    }
    function D(e) {
      let { repository: t } = e
      return t.id
    }
  },
  Jd1d(e, t, n) {
    var r = n("ABep"),
      o = n("QosV"),
      i = n("oyxz"),
      s = n("Sm6l"),
      a = n("FrrB"),
      l = n("Laxs"),
      c = n("X1Fy"),
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
            p,
            m,
            g,
            h = (0, o.c)(23),
            {
              connectorId: f,
              connectionIcon: v,
              connectionMessage: b,
              connectionAction: y,
              disabled: x,
              reconnect: w,
              status: k,
              onRetry: j,
            } = e
          h[0] !== f ? ((t = (0, d.Pt)(f)), (h[0] = f), (h[1] = t)) : (t = h[1])
          let _ = t
          if ("error" === k) {
            let e, t, o
            ;(h[2] !== _
              ? ((e = (0, r.jsx)(i.A, {
                  id: "restricted.environmentSetup.repositoryPicker.connectionError.provider",
                  defaultMessage: "{provider} connections couldn’t load",
                  values: { provider: _ },
                  description: "Error when provider connections cannot be loaded",
                })),
                (h[2] = _),
                (h[3] = e))
              : (e = h[3]),
              (n = e),
              h[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, r.jsx)(i.A, {
                    id: "restricted.environmentSetup.repositoryPicker.retryConnection",
                    defaultMessage: "Try again",
                    description: "Retries loading provider connections",
                  })),
                  (h[4] = t))
                : (t = h[4]),
              h[5] !== x || h[6] !== j
                ? ((o = (0, r.jsx)(s.$, { color: "accent", disabled: x, onClick: j, size: "dialog", children: t })),
                  (h[5] = x),
                  (h[6] = j),
                  (h[7] = o))
                : (o = h[7]),
              (p = o))
          } else if ("disabled" === k) {
            let e
            ;(h[8] !== _
              ? ((e = (0, r.jsx)(i.A, {
                  id: "restricted.environmentSetup.repositoryPicker.blockedGuidance.provider",
                  defaultMessage:
                    "{provider} isn’t enabled in this workspace<br></br>Ask a workspace admin to enable the {provider} plugin",
                  description:
                    "Explains that the workspace administrator has disabled the provider and how the user can request access. The br tag starts a new line.",
                  values: { provider: _, br: u },
                })),
                (h[8] = _),
                (h[9] = e))
              : (e = h[9]),
              (n = e))
          } else {
            let e
            ;((n = b),
              h[10] !== y || h[11] !== f || h[12] !== x || h[13] !== w
                ? ((e = y ?? (0, r.jsx)(l.z, { connectorId: f, disabled: x, reconnect: w })),
                  (h[10] = y),
                  (h[11] = f),
                  (h[12] = x),
                  (h[13] = w),
                  (h[14] = e))
                : (e = h[14]),
              (p = e))
          }
          return (
            h[15] !== v || h[16] !== f || h[17] !== k
              ? ((m = "connect" === k ? (v ?? (0, r.jsx)(c.R, { connectorId: f })) : void 0),
                (h[15] = v),
                (h[16] = f),
                (h[17] = k),
                (h[18] = m))
              : (m = h[18]),
            h[19] !== p || h[20] !== n || h[21] !== m
              ? ((g = (0, r.jsx)(a.A, {
                  className: "flex-1 select-none",
                  title: null,
                  description: n,
                  actions: p,
                  illustration: m,
                  illustrationSize: "icon",
                })),
                (h[19] = p),
                (h[20] = n),
                (h[21] = m),
                (h[22] = g))
              : (g = h[22]),
            g
          )
        },
      },
    )
  },
  X1Fy(e, t, n) {
    n.d(t, { R: () => p })
    var r = n("ABep"),
      o = n("QosV")
    let i = (0, n("iJY0").a)({
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
      l = n("mS6z"),
      c = n("cnjf"),
      d = n("fUey")
    let u = { [d.Lw.GitHub]: l.A, [d.Lw.GitLab]: c.A }
    function p(e) {
      let t,
        n,
        l = (0, o.c)(10),
        { connectorId: c, compact: p, className: m } = e,
        g = void 0 !== p && p,
        h = (0, d.Pt)(c)
      if (g && h === d.Lw.GitHub) {
        let e, t
        return (
          l[0] !== m ? ((e = (0, s.A)("shrink-0", m)), (l[0] = m), (l[1] = e)) : (e = l[1]),
          l[2] !== e
            ? ((t = (0, r.jsx)(a.I, { asset: i, alignment: "composite", className: e })), (l[2] = e), (l[3] = t))
            : (t = l[3]),
          t
        )
      }
      let f = u[h]
      return (
        l[4] !== m || l[5] !== g
          ? ((t = g ? (0, s.A)("icon-xs shrink-0", m) : m), (l[4] = m), (l[5] = g), (l[6] = t))
          : (t = l[6]),
        l[7] !== f || l[8] !== t
          ? ((n = (0, r.jsx)(f, { className: t })), (l[7] = f), (l[8] = t), (l[9] = n))
          : (n = l[9]),
        n
      )
    }
  },
  BExl(e, t, n) {
    n.d(t, { CloudEnvironmentRepositoryPicker: () => O })
    var r = n("ABep"),
      o = n("QosV"),
      i = n("on57"),
      s = n("i5ac"),
      a = n.n(s),
      l = n("zTeN"),
      c = n("zd8w"),
      d = n("Wf1j"),
      u = n("oyxz"),
      p = n("Rvvc"),
      m = n("Sm6l"),
      g = n("djbx"),
      h = n("mUDD"),
      f = n("Ot7V"),
      v = n("evwP"),
      b = n("FrrB"),
      y = n("okCa"),
      x = n("X3K1"),
      w = n("RNul"),
      k = n("mYWF"),
      j = n("OWtl"),
      _ = n("S5Ho"),
      C = n("LH8k"),
      S = n("GEsy"),
      I = n("VPEh"),
      M = n("Jd1d"),
      A = n("rLsS"),
      P = n("fUey"),
      N = n("HFi9"),
      E = n.n(N),
      R = n("bqtn"),
      L = n("bVeK"),
      G = n("X1Fy")
    function T(e) {
      let t,
        n,
        s,
        a,
        c,
        g,
        h,
        v,
        b,
        y,
        w,
        k,
        C,
        S,
        I,
        M = (0, o.c)(61),
        {
          connector: N,
          connectors: T,
          disabled: H,
          headerAlignment: O,
          configureInAccountMenu: B,
          browsing: $,
          connectorsPending: F,
          getConfigureHref: W,
          onChange: Y,
        } = e,
        q = (0, l.gh)(j.u),
        X = (0, d.A)(),
        Q = N?.id ?? p.qD,
        V = N?.linkId,
        Z = (0, P.Pt)(Q),
        J = "github" === P.Gq[Z].accountHandleSource && null == V
      M[0] !== N ? ((t = (0, A.jh)(N)), (M[0] = N), (M[1] = t)) : (t = M[1])
      let K = "connected" === t.status
      M[2] !== Q || M[3] !== V ? ((n = { connectorId: Q, linkId: V }), (M[2] = Q), (M[3] = V), (M[4] = n)) : (n = M[4])
      let ee = J && !H && K
      M[5] !== ee ? ((s = { enabled: ee }), (M[5] = ee), (M[6] = s)) : (s = M[6])
      let { data: et, isError: en, isPending: er } = (0, l._U)(_.cd, n, s)
      M[7] !== N?.link?.owner_profile?.nickname || M[8] !== et || M[9] !== J
        ? ((a = J ? et : N?.link?.owner_profile?.nickname?.trim()),
          (M[7] = N?.link?.owner_profile?.nickname),
          (M[8] = et),
          (M[9] = J),
          (M[10] = a))
        : (a = M[10])
      let eo = a,
        ei = $ && (!J || !en) && !!eo,
        es = F || ($ && J && er)
      M[11] !== $ || M[12] !== Q || M[13] !== T || M[14] !== H || M[15] !== W || M[16] !== X || M[17] !== q
        ? ((c = Object.entries(E()(T, U))),
          (g = T.length > 1 || $),
          (h = $
            ? c.map((e) => {
                let [t, n] = e,
                  o =
                    n.find((e) => {
                      let { id: t } = e
                      return t === Q
                    }) ?? n[0]
                if (null == o) return null
                let i = W(o.id)
                return (0, r.jsx)(
                  R.ms.Item,
                  {
                    disabled: H,
                    href: i,
                    leftIcon: (0, r.jsx)(G.R, { connectorId: o.id, compact: !0 }),
                    "aria-label": X.formatMessage(
                      {
                        id: "environmentSetup.repositoryPicker.connection.manageProviderConnections",
                        defaultMessage: "Manage {provider} connections",
                        description:
                          "Opens the connection settings for a repository provider; provider is GitHub or GitLab",
                      },
                      { provider: t },
                    ),
                    onClick: (e) => {
                      ;((0, f.PQ)({
                        event: e,
                        href: i,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser",
                      }),
                        (0, A.pI)(q, "none"))
                    },
                    children:
                      c.length > 1
                        ? t
                        : (0, r.jsx)(u.A, {
                            id: "environmentSetup.repositoryPicker.connection.manageProviderConnections",
                            defaultMessage: "Manage {provider} connections",
                            description:
                              "Opens the connection settings for a repository provider; provider is GitHub or GitLab",
                            values: { provider: t },
                          }),
                  },
                  t,
                )
              })
            : null),
          (M[11] = $),
          (M[12] = Q),
          (M[13] = T),
          (M[14] = H),
          (M[15] = W),
          (M[16] = X),
          (M[17] = q),
          (M[18] = c),
          (M[19] = g),
          (M[20] = h))
        : ((c = M[18]), (g = M[19]), (h = M[20]))
      let ea = h
      M[21] !== Q ? ((v = (0, r.jsx)(G.R, { connectorId: Q, compact: !0 })), (M[21] = Q), (M[22] = v)) : (v = M[22])
      let el = ei ? "group" : void 0,
        ec = ei
          ? X.formatMessage(
              {
                id: "restricted.environmentSetup.repositoryPicker.connection.browsingAs.provider",
                defaultMessage: "Browsing {provider} as @{handle}",
                description:
                  "Identifies the user signed in to the selected connection in the Cloud environment repository picker",
              },
              { provider: Z, handle: eo },
            )
          : void 0
      ;(M[23] !== eo || M[24] !== es || M[25] !== N?.accountLabel || M[26] !== Z || M[27] !== ei
        ? ((b =
            !ei && es
              ? (0, r.jsx)(x.X, { as: "span", className: "w-64 max-w-full", size: "sm" })
              : (0, r.jsx)("span", { className: "truncate", children: ei ? eo : (N?.accountLabel ?? Z) })),
          (M[23] = eo),
          (M[24] = es),
          (M[25] = N?.accountLabel),
          (M[26] = Z),
          (M[27] = ei),
          (M[28] = b))
        : (b = M[28]),
        M[29] !== el || M[30] !== ec || M[31] !== b
          ? ((y = (0, r.jsx)("span", {
              id: "cloud-environment-repo-account",
              className: "flex h-5 min-w-0 items-center",
              role: el,
              "aria-label": ec,
              children: b,
            })),
            (M[29] = el),
            (M[30] = ec),
            (M[31] = b),
            (M[32] = y))
          : (y = M[32]),
        M[33] !== g ? ((w = g ? (0, r.jsx)(L.Aq_, {}) : null), (M[33] = g), (M[34] = w)) : (w = M[34]),
        M[35] !== y || M[36] !== w || M[37] !== v
          ? ((k = (0, r.jsxs)(r.Fragment, { children: [v, y, w] })), (M[35] = y), (M[36] = w), (M[37] = v), (M[38] = k))
          : (k = M[38]))
      let ed = k,
        eu = "start" === O ? "justify-start" : "justify-center"
      return (
        M[39] !== eu
          ? ((C = (0, i.A)("flex min-h-7 max-w-full min-w-0 items-center gap-2 text-sm text-secondary", eu)),
            (M[39] = eu),
            (M[40] = C))
          : (C = M[40]),
        M[41] !== $ ||
        M[42] !== B ||
        M[43] !== ed ||
        M[44] !== N?.accountLabel ||
        M[45] !== Q ||
        M[46] !== T ||
        M[47] !== H ||
        M[48] !== O ||
        M[49] !== X ||
        M[50] !== V ||
        M[51] !== ea ||
        M[52] !== Y ||
        M[53] !== Z ||
        M[54] !== c ||
        M[55] !== ei ||
        M[56] !== g
          ? ((S = g
              ? (0, r.jsxs)(R.Ab, {
                  align: "end",
                  contentMaxHeight: "list",
                  contentWidth: "menu",
                  disabled: H,
                  triggerButton: (0, r.jsx)(m.$, {
                    className: (0, i.A)("max-w-full", "start" === O && !B && "-ms-2"),
                    allowShrink: !0,
                    "aria-describedby": ei ? "cloud-environment-repo-account" : void 0,
                    "aria-label": X.formatMessage(
                      {
                        id: "restricted.environmentSetup.repositoryPicker.connection.selectionLabel.provider",
                        defaultMessage: "{provider} connection: {connection}",
                        description:
                          "Accessible label for choosing a connected repository account; connection is the selected account identity or connection name",
                      },
                      { provider: Z, connection: N?.accountLabel ?? "" },
                    ),
                    color: "ghostSecondary",
                    disabled: H,
                    size: "settingsAction",
                    radius: "full",
                    children: ed,
                  }),
                  children: [
                    (0, r.jsxs)(R.ms.Group, {
                      children: [
                        (0, r.jsx)(R.ms.SectionLabel, {
                          children: (0, r.jsx)(u.A, {
                            id: "environmentSetup.repositoryPicker.connection.selectConnection",
                            defaultMessage: "Select connection",
                            description:
                              "Heading for selecting a connected repository account in the Cloud environment repository picker",
                          }),
                        }),
                        T.map((e) =>
                          (0, r.jsx)(
                            R.ms.Item,
                            {
                              leftIcon: (0, r.jsx)(G.R, { connectorId: e.id, compact: !0 }),
                              RightIcon: e.id === Q && e.linkId === V ? L.ALZ : void 0,
                              onSelect: () => Y(e),
                              children:
                                e.accountLabel !== e.name
                                  ? (0, r.jsx)("span", {
                                      className: "flex min-w-0 items-center gap-2",
                                      children: (0, r.jsx)(u.A, {
                                        id: "environmentSetup.repositoryPicker.connection.accountAndProvider",
                                        defaultMessage:
                                          "<account>{accountName}</account> <provider>{providerName}</provider>",
                                        description:
                                          "Connected repository account followed by its provider name on the same line; account and provider tags style the two names",
                                        values: {
                                          accountName: e.accountLabel,
                                          providerName: e.name,
                                          account: D,
                                          provider: z,
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
                    $
                      ? (0, r.jsx)(R.ms.Group, {
                          children:
                            c.length > 1
                              ? (0, r.jsx)(R.ms.SubmenuItem, {
                                  trigger: (0, r.jsx)(R.ms.Item, {
                                    disabled: H,
                                    children: (0, r.jsx)(u.A, {
                                      id: "environmentSetup.repositoryPicker.connection.manageConnections",
                                      defaultMessage: "Manage connections",
                                      description:
                                        "Expand or collapse links to repository provider connection settings",
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
                    "start" === O && "-ms-1",
                  ),
                  children: ed,
                })),
            (M[41] = $),
            (M[42] = B),
            (M[43] = ed),
            (M[44] = N?.accountLabel),
            (M[45] = Q),
            (M[46] = T),
            (M[47] = H),
            (M[48] = O),
            (M[49] = X),
            (M[50] = V),
            (M[51] = ea),
            (M[52] = Y),
            (M[53] = Z),
            (M[54] = c),
            (M[55] = ei),
            (M[56] = g),
            (M[57] = S))
          : (S = M[57]),
        M[58] !== C || M[59] !== S
          ? ((I = (0, r.jsx)("div", { className: C, children: S })), (M[58] = C), (M[59] = S), (M[60] = I))
          : (I = M[60]),
        I
      )
    }
    function z(e) {
      return (0, r.jsx)("span", { className: "truncate text-tertiary", children: e }, "provider")
    }
    function D(e) {
      return (0, r.jsx)("span", { className: "truncate", children: e }, "account")
    }
    function U(e) {
      let { id: t } = e
      return (0, P.Pt)(t)
    }
    function H(e) {
      let t,
        n,
        i,
        s,
        g,
        h,
        v,
        b,
        y,
        x,
        w,
        k,
        C,
        S,
        I,
        M,
        P,
        N,
        E,
        G,
        T,
        z = (0, o.c)(76),
        { connectorId: D, disabled: U, installation: H, linkId: O, onChange: B } = e,
        $ = (0, l.gh)(j.u),
        F = (0, d.A)(),
        [W, Y] = (0, c.useState)(!1)
      z[0] !== D || z[1] !== O ? ((t = { connectorId: D, linkId: O }), (z[0] = D), (z[1] = O), (z[2] = t)) : (t = z[2])
      let q = !U
      z[3] !== q ? ((n = { enabled: q }), (z[3] = q), (z[4] = n)) : (n = z[4])
      let { data: X, isError: Q, isPending: V, refetch: Z } = (0, l._U)(_.ky, t, n)
      if (
        z[5] !== D ||
        z[6] !== X?.app_installation_url ||
        z[7] !== X?.memberships ||
        z[8] !== X?.other ||
        z[9] !== U ||
        z[10] !== H ||
        z[11] !== F ||
        z[12] !== B ||
        z[13] !== W
      ) {
        let e, t, n, o, l, c, d, f
        ;(z[25] !== X?.memberships ? ((e = X?.memberships ?? []), (z[25] = X?.memberships), (z[26] = e)) : (e = z[26]),
          z[27] !== X?.other ? ((t = X?.other ?? []), (z[27] = X?.other), (z[28] = t)) : (t = z[28]))
        let j = a()([...e, ...t], "id")
        ;((s = X?.app_installation_url ?? (D === p.qD ? p.rh : null)),
          z[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, r.jsx)(u.A, {
                id: "restricted.environmentSetup.repositoryPicker.organization.all",
                defaultMessage: "All",
                description:
                  "Shows repositories from every connected GitHub organization and personal account in the Cloud environment repository filter",
              })),
              (z[29] = n))
            : (n = z[29]))
        let _ = n
        ;((i = R.Ab),
          (b = "end"),
          (y = "list"),
          (x = "menu"),
          (w = U),
          (k = W),
          (C = Y),
          z[30] !== H || z[31] !== F
            ? ((o =
                null == H
                  ? F.formatMessage({
                      id: "restricted.environmentSetup.repositoryPicker.organization.allSelectionLabel",
                      defaultMessage: "GitHub account: All repositories",
                      description:
                        "Accessible label for the Cloud repository organization filter when all connected organizations and personal accounts are selected",
                    })
                  : F.formatMessage(
                      {
                        id: "restricted.environmentSetup.repositoryPicker.organization.selectedAccountLabel",
                        defaultMessage: "GitHub account: {account}",
                        description:
                          "Accessible label for the Cloud repository filter; account is the selected GitHub organization or personal account name",
                      },
                      { account: H.account_login },
                    )),
              (z[30] = H),
              (z[31] = F),
              (z[32] = o))
            : (o = z[32]))
        let S = H?.account_login ?? _
        ;(z[33] !== S
          ? ((l = (0, r.jsx)("span", { className: "truncate", children: S })), (z[33] = S), (z[34] = l))
          : (l = z[34]),
          z[35] === Symbol.for("react.memo_cache_sentinel") ? ((c = (0, r.jsx)(L.Aq_, {})), (z[35] = c)) : (c = z[35]),
          z[36] !== U || z[37] !== o || z[38] !== l
            ? ((g = (0, r.jsxs)(m.$, {
                className: "max-w-full",
                allowShrink: !0,
                "aria-label": o,
                color: "ghostSecondary",
                disabled: U,
                size: "settingsAction",
                radius: "full",
                children: [l, c],
              })),
              (z[36] = U),
              (z[37] = o),
              (z[38] = l),
              (z[39] = g))
            : (g = z[39]))
        let I = null == H ? L.ALZ : void 0
        ;(z[40] !== B ? ((d = () => B(null)), (z[40] = B), (z[41] = d)) : (d = z[41]),
          z[42] !== I || z[43] !== d
            ? ((h = (0, r.jsx)(R.ms.Item, { RightIcon: I, onSelect: d, children: _ })),
              (z[42] = I),
              (z[43] = d),
              (z[44] = h))
            : (h = z[44]),
          z[45] !== H?.id || z[46] !== B
            ? ((f = (e) =>
                (0, r.jsx)(
                  R.ms.Item,
                  { RightIcon: e.id === H?.id ? L.ALZ : void 0, onSelect: () => B(e), children: e.account_login },
                  e.id,
                )),
              (z[45] = H?.id),
              (z[46] = B),
              (z[47] = f))
            : (f = z[47]),
          (v = j.map(f)),
          (z[5] = D),
          (z[6] = X?.app_installation_url),
          (z[7] = X?.memberships),
          (z[8] = X?.other),
          (z[9] = U),
          (z[10] = H),
          (z[11] = F),
          (z[12] = B),
          (z[13] = W),
          (z[14] = i),
          (z[15] = s),
          (z[16] = g),
          (z[17] = h),
          (z[18] = v),
          (z[19] = b),
          (z[20] = y),
          (z[21] = x),
          (z[22] = w),
          (z[23] = k),
          (z[24] = C))
      } else
        ((i = z[14]),
          (s = z[15]),
          (g = z[16]),
          (h = z[17]),
          (v = z[18]),
          (b = z[19]),
          (y = z[20]),
          (x = z[21]),
          (w = z[22]),
          (k = z[23]),
          (C = z[24]))
      ;(z[48] !== V
        ? ((S = V
            ? (0, r.jsx)(R.ms.Message, {
                compact: !0,
                children: (0, r.jsx)(u.A, {
                  id: "restricted.environmentSetup.repositoryPicker.organization.loading",
                  defaultMessage: "Loading organizations…",
                  description:
                    "Shown while loading the connected GitHub organizations for the Cloud environment repository filter",
                }),
              })
            : null),
          (z[48] = V),
          (z[49] = S))
        : (S = z[49]),
        z[50] !== Q || z[51] !== Z
          ? ((I = Q
              ? (0, r.jsx)(R.ms.Item, {
                  onSelect: () => void Z(),
                  children: (0, r.jsx)(u.A, {
                    id: "restricted.environmentSetup.repositoryPicker.organization.retry",
                    defaultMessage: "Retry loading organizations",
                    description:
                      "Retries loading connected GitHub organizations after a failure in the Cloud environment repository filter",
                  }),
                })
              : null),
            (z[50] = Q),
            (z[51] = Z),
            (z[52] = I))
          : (I = z[52]),
        z[53] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, r.jsx)(R.ms.Separator, {})), (z[53] = M))
          : (M = z[53]),
        z[54] === Symbol.for("react.memo_cache_sentinel") ? ((P = (0, r.jsx)(L.xFs, {})), (z[54] = P)) : (P = z[54]))
      let J = null == s
      return (
        z[55] !== s || z[56] !== $
          ? ((N = (e) => {
              null != s &&
                (Y(!1),
                (0, f.PQ)({ event: e, href: s, initiator: "open_in_browser_bridge", openTarget: "external-browser" }),
                (0, A.pI)($, "none"))
            }),
            (z[55] = s),
            (z[56] = $),
            (z[57] = N))
          : (N = z[57]),
        z[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, r.jsx)(u.A, {
              id: "restricted.environmentSetup.repositoryPicker.connection.connectOrganization",
              defaultMessage: "Connect GitHub org",
              description: "Opens GitHub in the system browser to grant access to repositories in another organization",
            })),
            (z[58] = E))
          : (E = z[58]),
        z[59] !== J || z[60] !== N
          ? ((G = (0, r.jsx)(R.ms.Item, { leftIcon: P, disabled: J, onClick: N, children: E })),
            (z[59] = J),
            (z[60] = N),
            (z[61] = G))
          : (G = z[61]),
        z[62] !== i ||
        z[63] !== g ||
        z[64] !== h ||
        z[65] !== v ||
        z[66] !== S ||
        z[67] !== I ||
        z[68] !== G ||
        z[69] !== b ||
        z[70] !== y ||
        z[71] !== x ||
        z[72] !== w ||
        z[73] !== k ||
        z[74] !== C
          ? ((T = (0, r.jsxs)(i, {
              align: b,
              contentMaxHeight: y,
              contentWidth: x,
              disabled: w,
              open: k,
              onOpenChange: C,
              triggerButton: g,
              children: [h, v, S, I, M, G],
            })),
            (z[62] = i),
            (z[63] = g),
            (z[64] = h),
            (z[65] = v),
            (z[66] = S),
            (z[67] = I),
            (z[68] = G),
            (z[69] = b),
            (z[70] = y),
            (z[71] = x),
            (z[72] = w),
            (z[73] = k),
            (z[74] = C),
            (z[75] = T))
          : (T = z[75]),
        T
      )
    }
    function O(e) {
      let t,
        n,
        s,
        x,
        N,
        E,
        R,
        L,
        G,
        z,
        D,
        U,
        O,
        Y = (0, o.c)(158),
        {
          disabled: q,
          allowedProviders: X,
          selectedRepositoryIds: Q,
          header: V,
          headerAlignment: Z,
          configureInAccountMenu: J,
          onChange: K,
          preferredConnectorId: ee,
          selectionMode: et,
          children: en,
          preferredLinkId: er,
          onConnectionChange: eo,
          maxRepositories: ei,
        } = e,
        es = void 0 === Z ? "center" : Z,
        ea = void 0 !== J && J,
        el = void 0 === et ? "multiple" : et,
        ec = (0, l.gh)(j.u),
        ed = (0, d.A)(),
        eu = null != ei && Q.length >= ei,
        [ep, em] = (0, c.useState)(""),
        [eg, eh] = (0, c.useState)(null),
        [ef, ev] = (0, c.useState)(null)
      Y[0] !== ep ? ((t = ep.trim()), (Y[0] = ep), (Y[1] = t)) : (t = Y[1])
      let eb = (0, S.o)(t, 200)
      Y[2] !== ep ? ((n = ep.trim()), (Y[2] = ep), (Y[3] = n)) : (n = Y[3])
      let ey = eb !== n
      Y[4] !== X ? ((s = { surface: "picker", allowedProviders: X }), (Y[4] = X), (Y[5] = s)) : (s = Y[5])
      let { data: ex, hasDiscoveryError: ew, isError: ek, isPending: ej, refetch: e_ } = (0, l._U)(I.G, s)
      Y[6] !== ex || Y[7] !== ee || Y[8] !== er || Y[9] !== eg
        ? ((x =
            ex?.find((e) => {
              let { id: t, linkId: n } = e
              return t === eg?.connectorId && (null == eg.linkId || n === eg.linkId)
            }) ??
            ex?.find((e) => e.id === ee && (null == er || e.linkId === er) && "connected" === (0, A.jh)(e).status) ??
            ex?.find(W) ??
            ex?.find(F) ??
            ex?.[0]),
          (Y[6] = ex),
          (Y[7] = ee),
          (Y[8] = er),
          (Y[9] = eg),
          (Y[10] = x))
        : (x = Y[10])
      let eC = x,
        eS = eC?.id ?? p.qD
      Y[11] !== eS ? ((N = (0, P.Pt)(eS)), (Y[11] = eS), (Y[12] = N)) : (N = Y[12])
      let eI = N,
        { missingLinkError: eM, repositoryBrowseMode: eA } = P.Gq[eI],
        eP = "github-installations" === eA,
        eN = eC?.linkId
      Y[13] !== eC ? ((E = (0, A.jh)(eC)), (Y[13] = eC), (Y[14] = E)) : (E = Y[14])
      let { status: eE, reconnect: eR } = E
      Y[15] !== eS || Y[16] !== ex || Y[17] !== eN
        ? ((R = ex?.some((e) => e.id === eS && null != e.linkId && e.linkId !== eN)),
          (Y[15] = eS),
          (Y[16] = ex),
          (Y[17] = eN),
          (Y[18] = R))
        : (R = Y[18])
      let eL = R,
        eG = (ek && !ex?.length) || "error" === eE,
        eT = "connected" === eE
      Y[19] !== eS || Y[20] !== eN
        ? ((L = { connectorId: eS, linkId: eN, poll: !0 }), (Y[19] = eS), (Y[20] = eN), (Y[21] = L))
        : (L = Y[21])
      let ez = eP && null == en && !q && eT
      Y[22] !== ez ? ((G = { enabled: ez }), (Y[22] = ez), (Y[23] = G)) : (G = Y[23])
      let { data: eD } = (0, l._U)(_.ky, L, G)
      ;(Y[24] !== eS || Y[25] !== eD || Y[26] !== eN || Y[27] !== ef
        ? ((z = ef?.installation ?? null),
          null != ef &&
            (ef.connectorId !== eS || ef.linkId !== eN
              ? (z = null)
              : null != eD &&
                (z =
                  [...eD.memberships, ...eD.other].find((e) => {
                    let { id: t } = e
                    return t === ef.installation.id
                  }) ?? null),
            null == z && ev(null)),
          (Y[24] = eS),
          (Y[25] = eD),
          (Y[26] = eN),
          (Y[27] = ef),
          (Y[28] = z))
        : (z = Y[28]),
        Y[29] !== eS || Y[30] !== eb || Y[31] !== z || Y[32] !== eN
          ? ((D = { connectorId: eS, linkId: eN, installation: z, query: eb, poll: !0 }),
            (Y[29] = eS),
            (Y[30] = eb),
            (Y[31] = z),
            (Y[32] = eN),
            (Y[33] = D))
          : (D = Y[33]))
      let eU = null == en && !q && !eG && eT
      Y[34] !== eU ? ((U = { enabled: eU }), (Y[34] = eU), (Y[35] = U)) : (U = Y[35])
      let {
        data: eH,
        error: eO,
        fetchNextPage: eB,
        hasNextPage: e$,
        isError: eF,
        isFetching: eW,
        isFetchingNextPage: eY,
        isFetchNextPageError: eq,
        isPending: eX,
        refetch: eQ,
      } = (0, l._U)(_.go, D, U)
      if (
        Y[36] !== X ||
        Y[37] !== en ||
        Y[38] !== ea ||
        Y[39] !== eT ||
        Y[40] !== eG ||
        Y[41] !== eC ||
        Y[42] !== eS ||
        Y[43] !== ex ||
        Y[44] !== ek ||
        Y[45] !== ej ||
        Y[46] !== eb ||
        Y[47] !== q ||
        Y[48] !== ew ||
        Y[49] !== eB ||
        Y[50] !== eL ||
        Y[51] !== e$ ||
        Y[52] !== V ||
        Y[53] !== es ||
        Y[54] !== z ||
        Y[55] !== eD?.app_installation_url ||
        Y[56] !== ed ||
        Y[57] !== ey ||
        Y[58] !== eN ||
        Y[59] !== eM ||
        Y[60] !== eq ||
        Y[61] !== eY ||
        Y[62] !== K ||
        Y[63] !== eo ||
        Y[64] !== eI ||
        Y[65] !== ep ||
        Y[66] !== eR ||
        Y[67] !== e_ ||
        Y[68] !== eQ ||
        Y[69] !== eO ||
        Y[70] !== eF ||
        Y[71] !== eW ||
        Y[72] !== eX ||
        Y[73] !== eH ||
        Y[74] !== ec ||
        Y[75] !== Q ||
        Y[76] !== eu ||
        Y[77] !== el ||
        Y[78] !== eE ||
        Y[79] !== eP
      ) {
        let e,
          t,
          n,
          o,
          s,
          l,
          c,
          d,
          x,
          j,
          _,
          S,
          I,
          N,
          E,
          R = null == eH ? void 0 : a()(eH.pages.flatMap($), "id")
        Y[81] !== X || Y[82] !== eC || Y[83] !== ek || Y[84] !== ej || Y[85] !== q || Y[86] !== e_
          ? ((e =
              null == eC && X && !X.includes(P.Lw.GitHub)
                ? (0, r.jsxs)(v.W, {
                    layout: "settings-row",
                    children: [
                      ej && (0, r.jsx)(w.y, {}),
                      !ej &&
                        ek &&
                        (0, r.jsx)(m.$, {
                          color: "accent",
                          disabled: q,
                          onClick: () => void e_(),
                          size: "dialog",
                          children: (0, r.jsx)(u.A, {
                            id: "restricted.environmentSetup.repositoryPicker.retryConnection",
                            defaultMessage: "Try again",
                            description: "Retries loading provider connections",
                          }),
                        }),
                      !ej &&
                        !ek &&
                        (0, r.jsx)(u.A, {
                          id: "environmentSetup.repositoryPicker.noAvailableConnections",
                          defaultMessage: "No repository connections available",
                          description:
                            "Shown when no discovered repository connections match the providers allowed in this picker",
                        }),
                    ],
                  })
                : null),
            (Y[81] = X),
            (Y[82] = eC),
            (Y[83] = ek),
            (Y[84] = ej),
            (Y[85] = q),
            (Y[86] = e_),
            (Y[87] = e))
          : (e = Y[87])
        let L = e
        Y[88] !== eM || Y[89] !== eO
          ? ((t = eO instanceof Error && (0, C.d)(eO)?.type === eM), (Y[88] = eM), (Y[89] = eO), (Y[90] = t))
          : (t = Y[90])
        let G = t,
          D = eT && !G && !eG
        Y[91] !== eS
          ? ((n = (0, k.Y2)({ appId: eS, installUrl: null, remotePluginId: null })), (Y[91] = eS), (Y[92] = n))
          : (n = Y[92])
        let U = n
        Y[93] !== U || Y[94] !== ec
          ? ((o = (e) => {
              ;((0, f.PQ)({ event: e, href: U, initiator: "open_in_browser_bridge", openTarget: "external-browser" }),
                (0, A.pI)(ec, "none"))
            }),
            (Y[93] = U),
            (Y[94] = ec),
            (Y[95] = o))
          : (o = Y[95])
        let F = o
        ;(Y[96] !== eI
          ? ((s = (0, r.jsx)(u.A, {
              id: "restricted.environmentSetup.repositoryPicker.openSettings.provider",
              defaultMessage: "Open {provider} settings",
              values: { provider: eI },
              description: "Opens the selected provider's connection and repository access settings",
            })),
            (Y[96] = eI),
            (Y[97] = s))
          : (s = Y[97]),
          Y[98] !== q || Y[99] !== F || Y[100] !== s
            ? ((l = (0, r.jsx)(m.$, { color: "accent", disabled: q, onClick: F, size: "dialog", children: s })),
              (Y[98] = q),
              (Y[99] = F),
              (Y[100] = s),
              (Y[101] = l))
            : (l = Y[101]))
        let W = l,
          Z = null,
          J = eG ? "error" : eE
        Y[102] !== eT ||
        Y[103] !== eG ||
        Y[104] !== eS ||
        Y[105] !== W ||
        Y[106] !== ej ||
        Y[107] !== q ||
        Y[108] !== J ||
        Y[109] !== eL ||
        Y[110] !== eN ||
        Y[111] !== G ||
        Y[112] !== eI ||
        Y[113] !== eR ||
        Y[114] !== e_ ||
        Y[115] !== eE
          ? ((d =
              eG || "disabled" === eE || (!ej && (!eT || G))
                ? (0, r.jsx)(M.P, {
                    connectorId: eS,
                    connectionMessage:
                      eR || G
                        ? (0, r.jsx)(u.A, {
                            id: "restricted.environmentSetup.repositoryPicker.reconnect.provider",
                            defaultMessage: "Reconnect {provider} to load your repositories",
                            values: { provider: eI },
                            description: "The user's repository authorization needs to be renewed",
                          })
                        : (0, r.jsx)(u.A, {
                            id: "restricted.environmentSetup.repositoryPicker.connect.provider",
                            defaultMessage: "Connect {provider} to see your repositories",
                            values: { provider: eI },
                            description:
                              "Invites the user to connect their repository account before choosing repositories",
                          }),
                    connectionAction: null != eN && eL && (eR || G) ? W : void 0,
                    disabled: q,
                    reconnect: eR || G,
                    status: "connected" === J ? "connect" : J,
                    onRetry: () => void e_(),
                  })
                : null),
            (Y[102] = eT),
            (Y[103] = eG),
            (Y[104] = eS),
            (Y[105] = W),
            (Y[106] = ej),
            (Y[107] = q),
            (Y[108] = J),
            (Y[109] = eL),
            (Y[110] = eN),
            (Y[111] = G),
            (Y[112] = eI),
            (Y[113] = eR),
            (Y[114] = e_),
            (Y[115] = eE),
            (Y[116] = d))
          : (d = Y[116])
        let ee = d
        if (eF && !R?.length) {
          let e, t, n, o
          ;(Y[117] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(u.A, {
                id: "restricted.environmentSetup.repositoryPicker.loadError",
                defaultMessage: "Repositories couldn’t load",
                description: "Error when the repository list cannot be loaded",
              })),
              (Y[117] = e))
            : (e = Y[117]),
            (Z = e),
            Y[118] !== eQ ? ((t = () => void eQ()), (Y[118] = eQ), (Y[119] = t)) : (t = Y[119]),
            Y[120] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, r.jsx)(u.A, {
                  id: "restricted.environmentSetup.repositoryPicker.retryRepositories",
                  defaultMessage: "Try again",
                  description: "Retries loading repositories",
                })),
                (Y[120] = n))
              : (n = Y[120]),
            Y[121] !== q || Y[122] !== t
              ? ((o = (0, r.jsx)(m.$, { color: "accent", disabled: q, onClick: t, size: "dialog", children: n })),
                (Y[121] = q),
                (Y[122] = t),
                (Y[123] = o))
              : (o = Y[123]),
            (c = o))
        } else if (!ey && null == z && "" === eb && R?.length === 0) {
          let e
          ;(Y[124] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(u.A, {
                id: "restricted.environmentSetup.repositoryPicker.noAccess",
                defaultMessage: "No repositories are available to this connection",
                description: "The provider is connected but repository discovery returned no repositories",
              })),
              (Y[124] = e))
            : (e = Y[124]),
            (Z = e),
            (c = W))
        }
        Y[125] !== ee || Y[126] !== c || Y[127] !== Z
          ? ((x =
              ee ??
              (null != Z
                ? (0, r.jsx)(b.A, { className: "flex-1 select-none", title: null, description: Z, actions: c })
                : null)),
            (Y[125] = ee),
            (Y[126] = c),
            (Y[127] = Z),
            (Y[128] = x))
          : (x = Y[128])
        let et = x
        Y[129] !== ed
          ? ((j = ed.formatMessage({
              id: "restricted.environmentSetup.repositoryPicker.search",
              defaultMessage: "Search repositories",
              description: "Accessible label for searching repositories in the cloud environment creation dialog",
            })),
            (Y[129] = ed),
            (Y[130] = j))
          : (j = Y[130])
        let er = j
        Y[131] !== eS || Y[132] !== z || Y[133] !== eD?.app_installation_url
          ? ((_ = (e) =>
              (e === eS ? (z?.html_url ?? eD?.app_installation_url) : void 0) ??
              (e === p.qD ? p.rh : (0, k.Y2)({ appId: e, installUrl: null, remotePluginId: null }))),
            (Y[131] = eS),
            (Y[132] = z),
            (Y[133] = eD?.app_installation_url),
            (Y[134] = _))
          : (_ = Y[134])
        let ei = _
        Y[135] !== D ||
        Y[136] !== ea ||
        Y[137] !== eC ||
        Y[138] !== eS ||
        Y[139] !== ex ||
        Y[140] !== ej ||
        Y[141] !== q ||
        Y[142] !== ei ||
        Y[143] !== es ||
        Y[144] !== eN ||
        Y[145] !== L ||
        Y[146] !== eo
          ? ((S =
              null == L
                ? (0, r.jsx)(T, {
                    connector: eC,
                    connectors: ex,
                    disabled: q,
                    headerAlignment: es,
                    configureInAccountMenu: ea,
                    browsing: D,
                    connectorsPending: ej,
                    getConfigureHref: ei,
                    onChange: (e) => {
                      ;(eh({ connectorId: e.id, linkId: e.linkId }),
                        (e.id !== eS || e.linkId !== eN) && (ev(null), eo?.()))
                    },
                  })
                : null),
            (Y[135] = D),
            (Y[136] = ea),
            (Y[137] = eC),
            (Y[138] = eS),
            (Y[139] = ex),
            (Y[140] = ej),
            (Y[141] = q),
            (Y[142] = ei),
            (Y[143] = es),
            (Y[144] = eN),
            (Y[145] = L),
            (Y[146] = eo),
            (Y[147] = S))
          : (S = Y[147])
        let eg = S,
          ef = "start" === es ? "gap-3" : "gap-4"
        ;(Y[148] !== ef ? ((I = (0, i.A)("flex min-h-0 flex-col", ef)), (Y[148] = ef), (Y[149] = I)) : (I = Y[149]),
          Y[150] !== ea || Y[151] !== eg || Y[152] !== V || Y[153] !== es
            ? ((N =
                "start" === es
                  ? (0, r.jsx)(h.c7, {
                      className: "shrink-0 select-none",
                      title: V,
                      subtitle: ea ? void 0 : eg,
                      subtitleTone: "secondary",
                    })
                  : (0, r.jsxs)("div", {
                      className: "flex flex-col items-center gap-2 text-center select-none",
                      children: [V, !ea && eg],
                    })),
              (Y[150] = ea),
              (Y[151] = eg),
              (Y[152] = V),
              (Y[153] = es),
              (Y[154] = N))
            : (N = Y[154]),
          Y[155] !== ea || Y[156] !== eg
            ? ((E =
                ea && null != eg
                  ? (0, r.jsxs)("div", {
                      className: "flex min-w-0 items-center justify-between gap-4",
                      children: [
                        (0, r.jsx)("span", {
                          className: "shrink-0 text-base font-medium",
                          children: (0, r.jsx)(u.A, {
                            id: "environmentSetup.repositoryPicker.connectedAsLabel",
                            defaultMessage: "Connected as",
                            description: "Label beside the repository account selector in the add repository dialog",
                          }),
                        }),
                        eg,
                      ],
                    })
                  : null),
              (Y[155] = ea),
              (Y[156] = eg),
              (Y[157] = E))
            : (E = Y[157]),
          (O = (0, r.jsxs)("div", {
            className: I,
            children: [
              N,
              E,
              en ??
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
                            "single" === el
                              ? (0, r.jsx)(u.A, {
                                  id: "environmentSetup.repositoryPicker.single.label",
                                  defaultMessage: "Select a repository",
                                  description: "Label for selecting one repository for a cloud environment",
                                })
                              : (0, r.jsx)(u.A, {
                                  id: "restricted.environmentSetup.create.repositories.label",
                                  defaultMessage: "Select repositories",
                                  description: "Label for the repositories to include in the new cloud environment",
                                }),
                        }),
                        eP && (D || ej)
                          ? (0, r.jsx)("div", {
                              className: "max-w-1/2 min-w-0",
                              children: (0, r.jsx)(H, {
                                connectorId: eS,
                                disabled: q || ej,
                                installation: z,
                                linkId: eN,
                                onChange: (e) =>
                                  ev(null == e ? null : { connectorId: eS, linkId: eN, installation: e }),
                              }),
                            })
                          : null,
                      ],
                    }),
                    null == ee && (null == Z || D)
                      ? (0, r.jsx)(y.s, {
                          id: "cloud-environment-repository-search",
                          className: "min-w-0 shrink-0",
                          autoFocus: !0,
                          variant: "toolbar",
                          label: er,
                          onSearchQueryChange: em,
                          placeholder: ed.formatMessage({
                            id: "restricted.environmentSetup.repositoryPicker.search.placeholder",
                            defaultMessage: "Search",
                            description:
                              "Placeholder for searching repositories in the cloud environment creation dialog",
                          }),
                          searchQuery: ep,
                          trailingControl:
                            "" !== ep.trim() && (eW || ey) ? (0, r.jsx)(w.y, { className: "icon-2xs" }) : void 0,
                        })
                      : null,
                    ew && !eG
                      ? (0, r.jsx)(m.$, {
                          color: "ghostActive",
                          disabled: q,
                          onClick: () => void e_(),
                          children: (0, r.jsx)(u.A, {
                            id: "environmentSetup.repositoryPicker.connections.retry",
                            defaultMessage: "Retry loading repository connections",
                            description:
                              "Retries discovering repository providers that could not load while keeping available connections usable",
                          }),
                        })
                      : null,
                    et ??
                      (0, r.jsxs)("div", {
                        className: "max-h-64 min-h-0 overflow-y-auto",
                        children: [
                          ey || eX
                            ? (0, r.jsxs)("div", {
                                role: "status",
                                className: "select-none",
                                children: [
                                  (0, r.jsx)("div", {
                                    className: "sr-only",
                                    children: (0, r.jsx)(u.A, {
                                      id: "restricted.environmentSetup.repositoryPicker.repositories.loading",
                                      defaultMessage: "Loading repositories…",
                                      description:
                                        "Loading state while fetching repositories for the Cloud v2 repository picker",
                                    }),
                                  }),
                                  ["w-24", "w-32", "w-28", "w-36", "w-20", "w-16"].map(B),
                                ],
                              })
                            : null,
                          eF && !eq
                            ? (0, r.jsx)(m.$, {
                                color: "ghostActive",
                                onClick: () => void eQ(),
                                children: (0, r.jsx)(u.A, {
                                  id: "restricted.environmentSetup.repositoryPicker.repositories.retry",
                                  defaultMessage: "Retry loading repositories",
                                  description:
                                    "Retries a failed repository page or search in the Cloud v2 repository picker",
                                }),
                              })
                            : null,
                          ey || eF || R?.length !== 0
                            ? null
                            : (0, r.jsx)(v.W, {
                                layout: "settings-row",
                                children:
                                  "" !== eb
                                    ? (0, r.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.noMatches",
                                        defaultMessage: "No repositories match “{query}”",
                                        description: "No repositories match the user's search text",
                                        values: { query: eb },
                                      })
                                    : (0, r.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.repositories.empty",
                                        defaultMessage: "No repositories found",
                                        description:
                                          "Empty state when no repositories match the Cloud v2 repository picker search",
                                      }),
                              }),
                          ey
                            ? null
                            : R?.map((e) => {
                                let t = Q.includes(e.id),
                                  n = { linkId: eN, connectorId: (0, P.Ip)(e.id, eS), repository: e },
                                  o = e.repository_full_name.lastIndexOf("/") + 1,
                                  s = (0, r.jsxs)("span", {
                                    className: (0, i.A)("truncate", ea && "single" !== el && "-translate-y-px"),
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: "text-secondary",
                                        children: e.repository_full_name.slice(0, o),
                                      }),
                                      e.repository_full_name.slice(o),
                                    ],
                                  })
                                return "single" === el
                                  ? (0, r.jsx)(
                                      m.$,
                                      {
                                        className:
                                          "w-full gap-3 rounded-lg px-3 py-1 text-start text-base hover:bg-secondary-ghost-hover",
                                        disabled: q,
                                        unstyled: !0,
                                        onClick: () => K(n, !0),
                                        type: "button",
                                        children: s,
                                      },
                                      e.id,
                                    )
                                  : (0, r.jsxs)(
                                      "label",
                                      {
                                        className: (0, i.A)(
                                          "flex cursor-interaction items-center gap-3 px-3 text-base select-none",
                                          ea ? "py-1.5 leading-5" : "py-1",
                                        ),
                                        htmlFor: `cloud-environment-repository-${e.id}`,
                                        children: [
                                          (0, r.jsx)("span", {
                                            className: "relative flex",
                                            children: (0, r.jsx)(g.S, {
                                              variant: "secondary",
                                              checked: t,
                                              disabled: q || (!t && (eu || !e.default_branch)),
                                              id: `cloud-environment-repository-${e.id}`,
                                              onCheckedChange: (e) => {
                                                K(n, !0 === e)
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
                                                description:
                                                  "Reason an empty repository cannot be added to a cloud environment",
                                              }),
                                            }),
                                        ],
                                      },
                                      e.id,
                                    )
                              }),
                          !ey && (e$ || eq) && (!eF || eq)
                            ? (0, r.jsx)(v.W, {
                                layout: "settings-row",
                                children: (0, r.jsxs)(m.$, {
                                  color: "secondary",
                                  disabled: q || eW,
                                  loading: eY,
                                  size: "dialog",
                                  onClick: () => void eB(),
                                  children: [
                                    eY &&
                                      (0, r.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.repositories.loadingMore",
                                        defaultMessage: "Loading more…",
                                        description:
                                          "Button label while loading another page of repositories in the cloud environment setup dialog",
                                      }),
                                    !eY &&
                                      eq &&
                                      (0, r.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.repositories.retry",
                                        defaultMessage: "Retry loading repositories",
                                        description:
                                          "Retries a failed repository page or search in the Cloud v2 repository picker",
                                      }),
                                    !eY &&
                                      !eq &&
                                      (0, r.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.repositories.loadMore",
                                        defaultMessage: "Load more repositories",
                                        description:
                                          "Loads another page of repositories in the Cloud v2 repository picker",
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
          (Y[36] = X),
          (Y[37] = en),
          (Y[38] = ea),
          (Y[39] = eT),
          (Y[40] = eG),
          (Y[41] = eC),
          (Y[42] = eS),
          (Y[43] = ex),
          (Y[44] = ek),
          (Y[45] = ej),
          (Y[46] = eb),
          (Y[47] = q),
          (Y[48] = ew),
          (Y[49] = eB),
          (Y[50] = eL),
          (Y[51] = e$),
          (Y[52] = V),
          (Y[53] = es),
          (Y[54] = z),
          (Y[55] = eD?.app_installation_url),
          (Y[56] = ed),
          (Y[57] = ey),
          (Y[58] = eN),
          (Y[59] = eM),
          (Y[60] = eq),
          (Y[61] = eY),
          (Y[62] = K),
          (Y[63] = eo),
          (Y[64] = eI),
          (Y[65] = ep),
          (Y[66] = eR),
          (Y[67] = e_),
          (Y[68] = eQ),
          (Y[69] = eO),
          (Y[70] = eF),
          (Y[71] = eW),
          (Y[72] = eX),
          (Y[73] = eH),
          (Y[74] = ec),
          (Y[75] = Q),
          (Y[76] = eu),
          (Y[77] = el),
          (Y[78] = eE),
          (Y[79] = eP),
          (Y[80] = O))
      } else O = Y[80]
      return O
    }
    function B(e) {
      return (0, r.jsxs)(
        "div",
        {
          "aria-hidden": !0,
          className: "flex h-8 items-center gap-3 px-3",
          children: [
            (0, r.jsx)("div", { className: "size-4 shrink-0", children: (0, r.jsx)(x.X, { size: "fill" }) }),
            (0, r.jsx)(x.X, { className: e, size: "sm" }),
          ],
        },
        e,
      )
    }
    function $(e) {
      return e.repositories
    }
    function F(e) {
      let { status: t } = e
      return "DISABLED_BY_ADMIN" !== t
    }
    function W(e) {
      return "connected" === (0, A.jh)(e).status
    }
  },
  oiiw(e, t, n) {
    n.d(t, { K: () => P, p: () => N })
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
      v = n("PAzX"),
      b = n("fYtp"),
      y = n("GaA7"),
      x = n("eac5"),
      w = n("HhRW"),
      k = n("j2sz")
    let j = "cloud-environment-onboarding:setup"
    class _ extends Error {}
    function C(e, t) {
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
    function S(e) {
      return Error(
        e.formatMessage({
          id: "environmentSetup.onboarding.planNotSupported",
          defaultMessage:
            "Your ChatGPT plan does not include Codex Cloud. Switch to an eligible plan to set up a cloud environment",
          description: "Error when the selected ChatGPT plan cannot start cloud environment setup",
        }),
      )
    }
    function I(e) {
      return "http" !== e.error || null == e.status || 408 === e.status || e.status >= 500
    }
    function M(e, t, n, r) {
      if (e.get(i.chatGptAuthenticatedAccountId$) !== n || e.get(i.chatGptAuthenticatedUserId$) !== r)
        throw Error(
          t.formatMessage({
            id: "restricted.environmentSetup.onboarding.accountChanged",
            defaultMessage: "Your account changed while creating the environment",
            description: "Error when the selected account changes during environment creation",
          }),
        )
    }
    var A = n("bMv2")
    function P(e, t, n) {
      let r = e.get(i.chatGptAuthenticatedAccountId$),
        s = e.get(i.chatGptAuthenticatedUserId$)
      if (null != n.legacyEnvironmentId) {
        for (let [t, o] of e.get(A.r))
          if (
            o.accountId === r &&
            o.userId === s &&
            o.inputs.legacyEnvironmentId === n.legacyEnvironmentId &&
            null != e.get(d.Pt, t)
          )
            return t
      }
      let a = (0, o.xa2)(),
        c = { hostId: (0, l.Y)(), prompt: C(t, j), title: (0, k.ZO)(t, n.name), status: "queued" }
      return (
        (0, d.gI)(e, a, c),
        e.set(
          A.r,
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
    async function N(e, t, n, P) {
      let N = e.get(A.m, P),
        E = e.get(d.Pt, P)
      if (null == N || null == E || ("queued" !== E.status && "failed" !== E.status)) return
      let R = { ...E, status: "creating", errorMessage: void 0 }
      ;(0, r.Y)(e, () => {
        ;((0, d.gI)(e, P, R),
          e.set(A.r, (e) => new Map(e).set(P, { ...N, stage: null == N.config ? "creating" : "connecting" })))
      })
      let L = () =>
        e.get(d.Pt, P) === R &&
        e.get(i.chatGptAuthenticatedAccountId$) === N.accountId &&
        e.get(i.chatGptAuthenticatedUserId$) === N.userId
      function G() {
        e.set(A.r, (e) => {
          let t = new Map(e)
          return (t.delete(P), t)
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
            initialPrompt: A,
            idempotencyKey: P = crypto.randomUUID(),
            existingConfig: N,
            onConfigurationCreated: E,
            onConfigurationReady: R,
            onConnected: L,
            onConversationReady: G,
            onOutcomeUnknown: T,
          },
        ) {
          let z = e.get(i.chatGptAuthenticatedAccountId$),
            D = e.get(i.chatGptAuthenticatedUserId$)
          if (y.appServices?.environmentConfigs == null || null == z || null == D)
            throw Error(
              t.formatMessage({
                id: "restricted.environmentSetup.onboarding.unavailable",
                defaultMessage: "Cloud environment setup is unavailable",
                description: "Error when the Desktop environment onboarding service or account is unavailable",
              }),
            )
          let U = Symbol("service-tier-timeout"),
            H = await (0, x.M)((0, v.e)(e, (0, l.Y)(), c.model), U, Date.now() + 3e4)
          if (H === U)
            throw Error(
              t.formatMessage({
                id: "restricted.environmentSetup.onboarding.connectionTimeout",
                defaultMessage: "Could not connect to cloud setup. Check your connection and try again",
                description:
                  "Error when the cloud app-server does not respond before creating an environment or setup chat",
              }),
            )
          M(e, t, z, D)
          let O = null != d && null == N,
            B = y.appServices.environmentConfigs.request(
              null == N
                ? {
                    method: "POST",
                    accountId: z,
                    userId: D,
                    body:
                      null != d
                        ? { legacy_environment_id: d, start_onboarding: !0, private_draft: !0 }
                        : {
                            idempotency_key: P,
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
                : { method: "GET", accountId: z, userId: D, configId: N.id, draftId: N.privateDraftId },
            ),
            $ = O ? await B.catch(() => ({ ok: !1, error: "unavailable" })) : await B
          if (
            O &&
            ($.ok ? $.config.draft?.id == null || null == $.config.environment_id || null == $.config.thread_id : I($))
          )
            return (M(e, t, z, D), T?.(), { conversationId: null, config: null })
          if (!$.ok) {
            if ((0, m.eN)($.status, $.message)) throw S(t)
            if (null != d && 400 === $.status && $.message === m.ds)
              throw new _(
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
                { reason: null == $.status ? $.error : `HTTP ${$.status}` },
              ),
            )
          }
          if (
            (M(e, t, z, D),
            N?.privateDraftId != null &&
              ($.config.draft?.id !== N.privateDraftId || $.config.environment_id !== N.environment_id))
          )
            throw Error("The setup draft no longer matches its Build")
          let F = {
            ...$.config,
            ...(O && { privateDraftId: $.config.draft?.id }),
            ...(N?.privateDraftId && { privateDraftId: N.privateDraftId, thread_id: N.thread_id }),
            onboarding_skill: $.config.onboarding_skill ?? N?.onboarding_skill,
          }
          E?.(F)
          let W = u ?? Object.fromEntries(s.map(({ repository: e }) => [e.id, e.repository_full_name]))
          if (null == F.thread_id && null == d) {
            let n = { stack: [], error: void 0, hasError: !1 }
            try {
              let r = (0, p.mS)(
                n,
                await y.appServices.environmentConfigs
                  .createDraft({ accountId: z, userId: D, configId: F.id, method: "POST" })
                  .catch(() => null),
                !1,
              )
              if ((M(e, t, z, D), null == r || (!r.ok && I(r)) || (r.ok && null == r.data.thread_id)))
                return (T?.(), { conversationId: null, config: F })
              if (!r.ok) {
                if ((0, m.eN)(r.status, r.message)) throw S(t)
                throw Error(r.message ?? r.error)
              }
              ;((F = {
                ...F,
                privateDraftId: r.data.draft_id,
                environment_id: r.data.environment_id,
                thread_id: r.data.thread_id,
              }),
                E?.(F))
            } catch (e) {
              ;((n.error = e), (n.hasError = !0))
            } finally {
              ;(0, p.hk)(n)
            }
          }
          let Y =
              null != d
                ? (F.draft ?? F).repositories.map(({ repository_id: e, ref: t }) => ({ name: W[e] ?? e, ref: t }))
                : s.map(({ repository: e }) => ({ name: e.repository_full_name, ref: e.default_branch })),
            q =
              null != F.onboarding_skill
                ? C(t, F.onboarding_skill)
                : (A ?? C(t, null == F.privateDraftId || null != d ? void 0 : j)),
            X = (0, h.V)(e, (0, l.Y)()),
            Q = [
              {
                type: "text",
                text: `${JSON.stringify({ repositories: Y })}

${g.Vh}`,
                text_elements: [],
              },
              { type: "text", text: q, text_elements: [] },
            ],
            V = (0, k.ZO)(t, null == n && F.name === (0, k.II)(t) ? null : F.name)
          if (null == F.thread_id || null == F.environment_id)
            throw Error(
              t.formatMessage({
                id: "restricted.environmentSetup.onboarding.missingTask",
                defaultMessage: "The server saved the configuration but did not return a setup chat",
                description: "Error when an older ASB does not support environment onboarding",
              }),
            )
          let Z = (0, o.JXB)(F.thread_id)
          return (
            M(e, t, z, D),
            (0, b.cx)(e, Z, (0, b.J5)(e, F.environment_id ?? null)),
            null == e.get(w.fm, Z) &&
              (0, r.Y)(e, (e) => {
                ;((0, w.or)(e, Z, { name: F.name, repositories: Y.map(({ name: e }) => e) }),
                  (0, w.e2)(e, Z, {
                    accountId: z,
                    userId: D,
                    configId: F.id,
                    ...(F.privateDraftId && { draftId: F.privateDraftId, environmentId: F.environment_id ?? void 0 }),
                    name: F.name,
                    repositoryNamesById: W,
                    generatedThreadTitle: { environmentName: F.name, title: V },
                  }))
              }),
            R?.(Z, q),
            await X.resumeConversation(
              {
                conversationId: Z,
                model: null,
                serviceTier: H,
                reasoningEffort: null,
                workspaceRoots: ["/workspace", "/tmp"],
                collaborationMode: null,
                useAppServerPermissionDefault: !0,
              },
              { readResumeInputs: (0, f.jQ)(e, (0, l.Y)()) },
            ),
            M(e, t, z, D),
            L?.(),
            await X.updateThreadSettingsForNextTurn(Z, { model: c.model, effort: c.reasoningEffort }),
            M(e, t, z, D),
            await X.setThreadTitle(Z, V, { onlyIfUntitled: !0, requireAcknowledgement: !0 }),
            M(e, t, z, D),
            G?.(Z),
            await X.startTurn(Z, {
              request: { turnTrigger: "environment_onboarding", threadId: Z, input: Q, serviceTier: H },
            }),
            M(e, t, z, D),
            { conversationId: Z, config: F }
          )
        })(e, t, {
          ...N.inputs,
          idempotencyKey: P,
          existingConfig: N.config,
          onOutcomeUnknown: () => {
            L() && ((R = { ...R, status: "draft-creation-unconfirmed" }), (0, d.gI)(e, P, R))
          },
          onConfigurationCreated: (t) => {
            L() &&
              e.set(A.r, (e) => {
                let n = e.get(P)
                return null == n ? e : new Map(e).set(P, { ...n, config: t })
              })
          },
          onConfigurationReady: (t, n) => {
            L() &&
              (0, r.Y)(e, () => {
                ;((R = { ...R, prompt: n }),
                  (0, d.gI)(e, P, R),
                  e.set(A.r, (e) => {
                    let n = e.get(P)
                    return null == n ? e : new Map(e).set(P, { ...n, conversationId: t, stage: "connecting" })
                  }))
              })
          },
          onConnected: () => {
            L() &&
              e.set(A.r, (e) => {
                let t = e.get(P)
                return null == t ? e : new Map(e).set(P, { ...t, stage: "starting" })
              })
          },
          onConversationReady: (t) => {
            L() &&
              ((0, d.Bb)(e, { clientThreadId: P, conversationId: t, hostId: (0, l.Y)() }),
              G(),
              e.get(c.x2)?.pathname === (0, o._RT)(P) && n((0, u.Ch)((0, o._RT)(t), (0, l.Y)()), { replace: !0 }))
          },
        })
        L() && null != s.conversationId && ((0, d.gI)(e, P, null), G())
      } catch (n) {
        if (e.get(d.Pt, P) !== R) return
        if (
          e.get(i.chatGptAuthenticatedAccountId$) !== N.accountId ||
          e.get(i.chatGptAuthenticatedUserId$) !== N.userId
        ) {
          ;((0, d.gI)(e, P, null), G())
          return
        }
        ;((0, d.gI)(
          e,
          P,
          e.get(A.r).has(P) ? { ...R, status: "failed", errorMessage: n instanceof _ ? n.message : void 0 } : null,
        ),
          e
            .get(a.Id)
            .danger(
              n instanceof _
                ? t.formatMessage({
                    id: "environmentSetup.onboarding.migrationFailed",
                    defaultMessage: "We couldn't finish the migration",
                    description: "Heading of an error toast when migrating a legacy cloud environment",
                  })
                : (0, s.WS)(n, t),
              {
                description: n instanceof _ ? n.message : void 0,
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
//# sourceMappingURL=889222.dd99f24b34.js.map
