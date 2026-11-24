export const __rspack_esm_ids = [331405]
export const __webpack_modules__ = {
  dvDp(e, t, r) {
    var n = r("rxoR"),
      i = r("RxZZ"),
      s = r("OMIV")
    r.d(
      t,
      {},
      {
        $: function (e) {
          let t = (0, n.V)().githubLinkTarget
          return (0, i.g4)(e, t) ?? (e(s.JW, "2247892263") ? "code-review-tab" : (0, i.CN)(e, t))
        },
      },
    )
  },
  wHBU(e, t, r) {
    r.d(t, { C: () => A })
    var n = r("qmMi"),
      i = r("ZU27"),
      s = r("Ot7V"),
      a = r("SGsN"),
      o = r("svjy"),
      l = r("i8Vs"),
      u = r("OWtl"),
      c = r("WwnD"),
      d = r("p45d"),
      g = r("rxoR"),
      m = r("SPnB"),
      p = r("nlNF"),
      h = r("fiy3"),
      f = r("tSEg"),
      v = r("RxZZ"),
      b = r("KH2l"),
      w = r("dvDp"),
      y = r("Jo4i"),
      R = r("Mhsw")
    function q(e, t, r, n, i = "task_link", s = "task_link" === i) {
      if (null == r || null == n || !e(b.Tm)) return { type: "unsupported" }
      if (
        s &&
        (0, v.vq)(e) &&
        (("client-local-thread" === t.routeKind && null == t.persistentWorkspace) || e(f.Rj) || !(0, R.i)(e, r, n))
      )
        return { type: "external", url: r, provider: n.provider }
      let a = (0, y.g)(e, "local", n, "task_pr" === i && !s)
      if ("loading" === a.status) return { type: "pending" }
      let { provider: o, pullRequest: u } = n,
        c = (0, h.g0)(r)
      if (null == c) return { type: "unsupported" }
      let d = c.url
      if ("unavailable" === a.status) {
        let e = "task_link" === i ? r : d
        return "account" !== a.reason
          ? { type: "external", url: e, provider: o }
          : { type: "unavailable", fallbackUrl: "gitlab.com" === u.hostname ? e : void 0 }
      }
      return { type: "open", provider: o, url: c.preserveDestination ? (0, l.UJ)(u, o) : d, destinationUrl: d }
    }
    var M = r("fJxb"),
      x = r("SAl8"),
      k = r("eY8z")
    let _ = (0, n.vP)(u.u, 0)
    function A(
      e,
      {
        pullRequestUrl: t,
        normalizedTarget: r,
        originHostId: n = "local",
        replaceTabId: u,
        source: h = "task_pr",
        respectLinkPreference: f = "task_link" === h,
      },
    ) {
      e.set(_, e.get(_) + 1)
      let b = void 0 === r && null != t ? (0, M.Q)(t) : (r ?? null),
        y = q(e.get, e.value, t, b, h, f)
      if ("pending" === y.type) {
        let r = e.get(_)
        return (
          !(async function (e, t, r, n, i, s = "task_link", a = "task_link" === s) {
            let o,
              l = (0, g.V)(),
              u = e.get(p.x2)?.key,
              c = e.get(m.chatGptAuthenticatedAccountId$),
              d = e.get(m.o8),
              h = (e) => (
                null == o &&
                  (0, v.vq)(e) &&
                  (o = {
                    provider: (0, v.CN)(e, l.gitHostingProvider),
                    linkTarget: (0, w.$)(e),
                    connectorId: (0, v.CN)(e, l.gitlabConnectorId),
                  }),
                n(e) ||
                  e(p.x2)?.key !== u ||
                  e(m.chatGptAuthenticatedAccountId$) !== c ||
                  e(m.o8) !== d ||
                  (null != o &&
                    ((0, v.CN)(e, l.gitHostingProvider) !== o.provider ||
                      (0, v.CN)(e, l.gitlabConnectorId) !== o.connectorId ||
                      (0, w.$)(e) !== o.linkTarget))
              ),
              f = h(e.get)
            try {
              if (
                (await e.when(({ get: n }) => (f = h(n)) || "pending" !== q(n, e.value, t, r, s, a).type),
                f || h(e.get))
              )
                return
              i(q(e.get, e.value, t, r, s, a))
              return
            } catch {
              if (f || h(e.get)) return
            }
            i({ type: "unavailable" })
          })(
            e,
            t,
            b,
            (e) => e(_) !== r,
            (t) => {
              R(t) ||
                "external" === t.type ||
                e
                  .get(a.Id)
                  .danger(
                    e
                      .get(o.g)
                      .formatMessage({
                        id: "thread.sidePanel.pullRequestTab.gitLabOpenFailed",
                        defaultMessage:
                          "Could not open this merge request. Check the selected GitLab connection and try again",
                        description: "Error after waiting for a GitLab connection to open an attached merge request",
                      }),
                    { errorAnalytics: { toastId: "thread.sidePanel.pullRequestTab.gitLabOpenFailed" } },
                  )
            },
            h,
            f,
          ),
          !0
        )
      }
      return R(
        "unavailable" === y.type && null != y.fallbackUrl
          ? { type: "external", url: y.fallbackUrl, provider: "gitlab" }
          : y,
      )
      function R(t) {
        if ("unsupported" === t.type || "unavailable" === t.type || "pending" === t.type) return !1
        if ("external" === t.type) {
          let r = (0, s.E0)({ href: t.url, initiator: "pull_request_link", hostId: n, originHostId: n }),
            i = (0, l.g0)(t.url)?.provider
          return (
            r && null != i && (0, x.X)(e, { type: "navigation", source: h, destination: i, provider: t.provider }),
            r
          )
        }
        let { url: r, destinationUrl: a } = t,
          o = `code-review:${r}`,
          g = e.get(i.It.tabById$, o)
        return (
          null != g && "url" in g.props && g.props.url === a && null == u
            ? (0, c.Mn)(e, g)
            : ((0, k.openCodeReviewTab)(e, { url: a, replaceTabId: u, tabId: o }),
              (0, x.X)(e, { type: "navigation", source: h, destination: "code_review", provider: t.provider })),
          "task_link" === h && "github" === t.provider && (0, d.E3)(e, o),
          !0
        )
      }
    }
  },
  EWTL(e, t, r) {
    var n = r("i5ac"),
      i = r.n(n),
      s = r("g3QY")
    function a(e) {
      return e.content
        .flatMap((e) => ("text" === e.content_type ? [e.text] : []))
        .join("\n\n")
        .trim()
    }
    r.d(
      t,
      {},
      {
        BI: function (e) {
          return {
            line: e.position.line,
            path: e.position.path,
            side: e.position.side,
            startLine: e.position.start_line ?? void 0,
            startSide: e.position.start_side ?? void 0,
          }
        },
        GM: a,
        K: function (e) {
          return e.reviewThreadId ?? e.url ?? (0, s.y6)(e)
        },
        jX: function (e, t, r) {
          if ((0, s.y6)({ ...t, content: e.content }) !== (0, s.y6)(e)) return 0
          let n = a(e),
            i = (e) => null != r && e?.toLowerCase() === r.toLowerCase()
          if (null != e.replyToReviewThreadId)
            return t.reviewThreadId !== e.replyToReviewThreadId
              ? 0
              : null != t.replies
                ? t.replies.filter((e) => i(e.authorLogin) && e.body.trim() === n).length
                : (0, s.Rx)(t)
                    .slice(1)
                    .filter((e) => i(e.authorLogin) && e.text === n).length
          let o = (0, s.Rx)(t)[0]
          return o?.text === n && i(o.authorLogin ?? t.authorLogin) ? 1 : 0
        },
        qm: function ({ currentComments: e, nextComments: t }) {
          let r = new Set(e.map(s.y6)),
            n = t.filter((t) =>
              e.some((e) =>
                (function ({ currentComment: e, nextComment: t }) {
                  return (
                    null != e.replyToReviewThreadId &&
                    e.replyToReviewThreadId === t.replyToReviewThreadId &&
                    0 === a(e).length &&
                    a(t).length > 0 &&
                    e.position.path === t.position.path &&
                    e.position.side === t.position.side &&
                    e.position.line === t.position.line
                  )
                })({ currentComment: e, nextComment: t }),
              ),
            ),
            o = t.filter((e) => a(e).length > 0 && !r.has((0, s.y6)(e)))
          return i()([...n, ...o], s.y6)
        },
        r8: function (e, t, r) {
          return { commentKey: (0, s.y6)(t), revision: e, ...(null == r ? {} : { diffSnapshot: r }) }
        },
      },
    )
  },
  OSYv(e, t, r) {
    var n = r("ABep"),
      i = r("QosV"),
      s = r("slpy"),
      a = r("on57"),
      o = r("Sm6l")
    r.d(
      t,
      {},
      {
        b: function (e) {
          let t,
            r,
            l,
            u,
            c,
            d,
            g,
            m,
            p,
            h,
            f,
            v,
            b,
            w,
            y = (0, i.c)(35)
          y[0] !== e
            ? (({
                children: t,
                collapseAt: c,
                icon: r,
                iconOnly: d,
                showIcon: g,
                loading: l,
                size: m,
                tooltipContent: p,
                ...u
              } = e),
              (y[0] = e),
              (y[1] = t),
              (y[2] = r),
              (y[3] = l),
              (y[4] = u),
              (y[5] = c),
              (y[6] = d),
              (y[7] = g),
              (y[8] = m),
              (y[9] = p))
            : ((t = y[1]),
              (r = y[2]),
              (l = y[3]),
              (u = y[4]),
              (c = y[5]),
              (d = y[6]),
              (g = y[7]),
              (m = y[8]),
              (p = y[9]))
          let R = void 0 === c ? "xs" : c,
            q = void 0 !== d && d,
            M = void 0 !== g && g,
            x = void 0 === m ? "default" : m,
            k = void 0 === p ? t : p,
            _ = void 0 === p ? "target-overflows" : "default",
            A = l || void 0,
            C = q ? "ghost" : u.color,
            j = q && "default" === x ? "compact" : x,
            I = q || u.uniform
          y[10] !== R || y[11] !== r || y[12] !== q || y[13] !== l || y[14] !== M
            ? ((h =
                !l &&
                null != r &&
                (0, n.jsx)("span", {
                  className: (0, a.A)(
                    q || M ? "inline-flex" : "hidden",
                    !q && !M && ("sm" === R ? "@max-sm/pr-actions:inline-flex" : "@max-xs/pr-actions:inline-flex"),
                  ),
                  children: r,
                })),
              (y[10] = R),
              (y[11] = r),
              (y[12] = q),
              (y[13] = l),
              (y[14] = M),
              (y[15] = h))
            : (h = y[15])
          let S = q && "sr-only",
            P = !q && null != r && ("sm" === R ? "@max-sm/pr-actions:sr-only" : "@max-xs/pr-actions:sr-only")
          return (
            y[16] !== S || y[17] !== P ? ((f = (0, a.A)(S, P)), (y[16] = S), (y[17] = P), (y[18] = f)) : (f = y[18]),
            y[19] !== t || y[20] !== f
              ? ((v = (0, n.jsx)("span", { "data-tooltip-enablement-target": !0, className: f, children: t })),
                (y[19] = t),
                (y[20] = f),
                (y[21] = v))
              : (v = y[21]),
            y[22] !== l ||
            y[23] !== u ||
            y[24] !== I ||
            y[25] !== h ||
            y[26] !== v ||
            y[27] !== A ||
            y[28] !== C ||
            y[29] !== j
              ? ((b = (0, n.jsxs)(o.$, {
                  ...u,
                  "aria-busy": A,
                  color: C,
                  loading: l,
                  size: j,
                  uniform: I,
                  children: [h, v],
                })),
                (y[22] = l),
                (y[23] = u),
                (y[24] = I),
                (y[25] = h),
                (y[26] = v),
                (y[27] = A),
                (y[28] = C),
                (y[29] = j),
                (y[30] = b))
              : (b = y[30]),
            y[31] !== b || y[32] !== k || y[33] !== _
              ? ((w = (0, n.jsx)(s.m, { content: k, enabledWhen: _, children: b })),
                (y[31] = b),
                (y[32] = k),
                (y[33] = _),
                (y[34] = w))
              : (w = y[34]),
            w
          )
        },
      },
    )
  },
  jMz3(e, t, r) {
    r.d(t, { B: () => G })
    var n = r("ABep"),
      i = r("QosV"),
      s = r("slpy"),
      a = r("qmMi"),
      o = r("DBCl"),
      l = r("zd8w"),
      u = r("Wf1j"),
      c = r("oyxz"),
      d = r("ChYf"),
      g = r("rVF8"),
      m = r("LrzQ"),
      p = r("EFj1"),
      h = r("bqtn"),
      f = r("bVeK"),
      v = r("SGsN"),
      b = r("OWtl"),
      w = r("RxZZ"),
      y = r("j9wQ"),
      R = r("B72h"),
      q = r("N6Z5"),
      M = r("SEJy"),
      x = r("dmx7"),
      k = r("Qgfj")
    let _ = (0, k.YK)({
        checks_pending: {
          id: "codeReview.mergeReason.checks_pending",
          defaultMessage: "{count, plural, =0 {Checks pending} one {# check pending} other {# checks pending}}",
        },
        checks_failed: {
          id: "codeReview.mergeReason.checks_failed",
          defaultMessage: "{count, plural, =0 {Checks failed} one {# check failed} other {# checks failed}}",
        },
        check_set_incomplete: {
          id: "codeReview.mergeReason.checkSetIncomplete.counted",
          defaultMessage:
            "{count, plural, =0 {Waiting for the list of required checks} one {Waiting for the list of required checks} other {Waiting for the list of required checks (# requirements)}}",
        },
        checks_must_pass: {
          id: "codeReview.mergeReason.checks_must_pass.counted",
          defaultMessage:
            "{count, plural, =0 {Required checks must pass} one {Required checks must pass} other {Required checks must pass (# requirements)}}",
        },
        approvals_missing: {
          id: "codeReview.mergeReason.approvals_missing.counted",
          defaultMessage:
            "{count, plural, =0 {Approval required} one {Approval required} other {# approvals required}}",
        },
        owner_approval: {
          id: "codeReview.mergeReason.owner_approval.counted",
          defaultMessage:
            "{count, plural, =0 {Code owner approval required} one {Code owner approval required} other {# code owner approvals required}}",
        },
        compliance_approval: {
          id: "codeReview.mergeReason.compliance_approval.counted",
          defaultMessage:
            "{count, plural, =0 {Compliance approval required} one {Compliance approval required} other {# compliance approvals required}}",
        },
        conflict: {
          id: "codeReview.mergeReason.conflict.counted",
          defaultMessage:
            "{count, plural, =0 {Resolve merge conflicts} one {Resolve merge conflicts} other {Resolve merge conflicts (# requirements)}}",
        },
        changes_requested: {
          id: "codeReview.mergeReason.changes_requested.counted",
          defaultMessage:
            "{count, plural, =0 {A reviewer requested changes} one {A reviewer requested changes} other {A reviewer requested changes (# requirements)}}",
        },
        threads_unresolved: {
          id: "codeReview.mergeReason.threads_unresolved.counted",
          defaultMessage:
            "{count, plural, =0 {Resolve open review threads} one {Resolve open review threads} other {Resolve open review threads (# requirements)}}",
        },
        permission_denied: {
          id: "codeReview.mergeReason.permission_denied.counted",
          defaultMessage:
            "{count, plural, =0 {You don\u2019t have permission to merge} one {You don\u2019t have permission to merge} other {You don\u2019t have permission to merge (# requirements)}}",
        },
        behind: {
          id: "codeReview.mergeReason.behind.counted",
          defaultMessage:
            "{count, plural, =0 {Update the branch before merging} one {Update the branch before merging} other {Update the branch before merging (# requirements)}}",
        },
        blocked_review_changes_requested: {
          id: "codeReview.mergeReason.blockedWithReview.counted",
          defaultMessage:
            "{count, plural, =0 {Repository rules block this merge. A reviewer requested changes.} one {Repository rules block this merge. A reviewer requested changes.} other {Repository rules block this merge. A reviewer requested changes. (# requirements)}}",
        },
        blocked: {
          id: "codeReview.mergeReason.blocked.counted",
          defaultMessage:
            "{count, plural, =0 {Repository rules block this merge} one {Repository rules block this merge} other {Repository rules block this merge (# requirements)}}",
        },
        unstable: {
          id: "codeReview.mergeReason.unstable.counted",
          defaultMessage:
            "{count, plural, =0 {GitHub reports non-passing checks} one {GitHub reports non-passing checks} other {GitHub reports non-passing checks (# requirements)}}",
        },
        analysis_pending: {
          id: "codeReview.mergeReason.analysis_pending.counted",
          defaultMessage:
            "{count, plural, =0 {Merge analysis is pending} one {Merge analysis is pending} other {Merge analysis is pending (# requirements)}}",
        },
      }),
      A = new Map(Object.entries(_))
    var C = r("Sm6l"),
      j = r("JNtf"),
      I = r("mUDD"),
      S = r("EShr"),
      P = r("RNul"),
      D = r("wrup"),
      E = r("OSYv"),
      T = r("LFoX"),
      B = r("T3tn")
    function L(e) {
      let t,
        r,
        a,
        o,
        l,
        d,
        g,
        m,
        p,
        v,
        b,
        w,
        R,
        q,
        M,
        x,
        k,
        _,
        A,
        L,
        N,
        Q,
        O,
        U,
        W,
        K,
        G,
        H = (0, i.c)(145),
        {
          primary: $,
          allowedMergeMethods: Z,
          autoMergeDisabled: z,
          autoMergeEnabled: J,
          error: V,
          isAutoMergeDisabling: Y,
          isAutoMergeEnabling: X,
          isAutoMergePending: ee,
          isDraft: et,
          isMarkReadyPending: er,
          isCheckingMergeability: en,
          isMergePending: ei,
          isPending: es,
          mergeDisabled: ea,
          mergeDisabledMessage: eo,
          mergeMethod: el,
          mergeOpen: eu,
          menu: ec,
          isGitLab: ed,
          onAutoMergeChange: eg,
          onMarkReady: em,
          onMerge: ep,
          onMergeMethodChange: eh,
          onMergeOpenChange: ef,
        } = e,
        ev = void 0 !== ec && ec,
        eb = (0, u.A)(),
        ew = void 0 !== ed && ed ? "gitlab" : "github",
        ey = null == Z || Z.length > 1
      if (
        H[0] !== Z ||
        H[1] !== z ||
        H[2] !== J ||
        H[3] !== V ||
        H[4] !== ey ||
        H[5] !== eb ||
        H[6] !== Y ||
        H[7] !== X ||
        H[8] !== ee ||
        H[9] !== en ||
        H[10] !== et ||
        H[11] !== er ||
        H[12] !== ei ||
        H[13] !== es ||
        H[14] !== ev ||
        H[15] !== ea ||
        H[16] !== eo ||
        H[17] !== el ||
        H[18] !== eu ||
        H[19] !== eg ||
        H[20] !== em ||
        H[21] !== ep ||
        H[22] !== eh ||
        H[23] !== ef ||
        H[24] !== $ ||
        H[25] !== ew
      ) {
        p = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            i,
            u,
            k,
            _,
            A,
            C,
            E,
            L = (function (e) {
              switch (e) {
                case "gitlab":
                  return (0, n.jsx)(c.A, {
                    id: "pullRequestDetail.merge.withoutSquash",
                    defaultMessage: "Do not squash",
                  })
                case "github":
                  return (0, n.jsx)(c.A, { id: "pullRequestDetail.merge.commit", defaultMessage: "Merge commit" })
              }
            })(ew)
          ;(H[42] !== ew
            ? ((e = (function (e) {
                switch (e) {
                  case "gitlab":
                    return (0, n.jsx)(c.A, {
                      id: "pullRequestDetail.merge.confirmWithoutSquash",
                      defaultMessage: "Merge without squashing",
                    })
                  case "github":
                    return (0, n.jsx)(c.A, {
                      id: "pullRequestDetail.merge.confirmMergeCommit",
                      defaultMessage: "Create merge commit",
                    })
                }
              })(ew)),
              (H[42] = ew),
              (H[43] = e))
            : (e = H[43]),
            (a = e),
            H[44] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, n.jsx)(c.A, { id: "pullRequestDetail.actions.markReady", defaultMessage: "Mark ready" })),
                (H[44] = i))
              : (i = H[44]))
          let N = i
          if (ev && et) {
            let e, t, r, i, s, a
            ;(H[45] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(f.ALZ, {})), (H[45] = e))
              : (e = H[45]),
              H[46] !== er
                ? ((t = er ? (0, n.jsx)(P.y, { className: "icon-sm" }) : void 0), (H[46] = er), (H[47] = t))
                : (t = H[47]),
              H[48] !== em
                ? ((r = (e) => {
                    ;(e.preventDefault(), em())
                  }),
                  (H[48] = em),
                  (H[49] = r))
                : (r = H[49]),
              H[50] !== es || H[51] !== t || H[52] !== r
                ? ((i = (0, n.jsx)(h.ms.Item, { disabled: es, leftIcon: e, rightIcon: t, onSelect: r, children: N })),
                  (H[50] = es),
                  (H[51] = t),
                  (H[52] = r),
                  (H[53] = i))
                : (i = H[53]),
              H[54] !== V
                ? ((s = null == V ? null : (0, n.jsx)(h.ms.Message, { role: "alert", tone: "error", children: V })),
                  (H[54] = V),
                  (H[55] = s))
                : (s = H[55]),
              H[56] !== i || H[57] !== s
                ? ((a = (0, n.jsxs)(n.Fragment, { children: [i, s] })), (H[56] = i), (H[57] = s), (H[58] = a))
                : (a = H[58]),
              (p = a))
            break e
          }
          ;(H[59] !== ef ? ((u = () => ef(!0)), (H[59] = ef), (H[60] = u)) : (u = H[60]),
            H[61] !== z ||
            H[62] !== J ||
            H[63] !== Y ||
            H[64] !== X ||
            H[65] !== ee ||
            H[66] !== ei ||
            H[67] !== ea ||
            H[68] !== eo ||
            H[69] !== eg ||
            H[70] !== u
              ? ((k = {
                  autoMergeDisabled: z,
                  isAutoMergeDisabling: Y,
                  isAutoMergeEnabled: J,
                  isAutoMergeEnabling: X,
                  isAutoMergePending: ee,
                  isMergePending: ei,
                  mergeDisabled: ea,
                  mergeDisabledMessage: eo,
                  onAutoMergeChange: eg,
                  onMerge: u,
                }),
                (H[61] = z),
                (H[62] = J),
                (H[63] = Y),
                (H[64] = X),
                (H[65] = ee),
                (H[66] = ei),
                (H[67] = ea),
                (H[68] = eo),
                (H[69] = eg),
                (H[70] = u),
                (H[71] = k))
              : (k = H[71]))
          let Q = k
          H[72] !== J || H[73] !== en || H[74] !== ev || H[75] !== Q || H[76] !== $
            ? ((_ = ev
                ? (0, n.jsx)(D.M, { ...Q, isDraft: !1, menuItem: !0, menuIcon: J ? null : (0, n.jsx)(f.SGL, {}) })
                : (0, n.jsx)(T.M, { ...Q, primary: $, isCheckingMergeability: en })),
              (H[72] = J),
              (H[73] = en),
              (H[74] = ev),
              (H[75] = Q),
              (H[76] = $),
              (H[77] = _))
            : (_ = H[77])
          let O = _
          ;(H[78] !== V || H[79] !== ev || H[80] !== eu
            ? ((g = ev && null != V && !eu && (0, n.jsx)(h.ms.Message, { tone: "error", role: "alert", children: V })),
              (H[78] = V),
              (H[79] = ev),
              (H[80] = eu),
              (H[81] = g))
            : (g = H[81]),
            H[82] !== et || H[83] !== er || H[84] !== es || H[85] !== O || H[86] !== em
              ? ((m = et
                  ? (0, n.jsx)(s.m, {
                      content: N,
                      enabledWhen: "target-overflows",
                      openDelay: 250,
                      children: (0, n.jsx)(y.DW, {
                        variant: "primary",
                        disabled: es || er,
                        "aria-busy": er || void 0,
                        onClick: em,
                        children: (0, n.jsx)(B.Ml, {
                          width: "merge",
                          icon: er ? (0, n.jsx)(P.y, { className: "icon-sm" }) : (0, n.jsx)(f.ALZ, {}),
                          leadingIcon: er ? (0, n.jsx)(P.y, { className: "icon-sm" }) : void 0,
                          children: N,
                        }),
                      }),
                    })
                  : O),
                (H[82] = et),
                (H[83] = er),
                (H[84] = es),
                (H[85] = O),
                (H[86] = em),
                (H[87] = m))
              : (m = H[87]),
            (r = j.lG),
            (o = eu),
            (l = !1),
            (d = ef),
            (t = I.R4),
            (v = "form"),
            (b = es),
            H[88] !== es || H[89] !== ep
              ? ((w = (e) => {
                  ;(e.preventDefault(), es || ep())
                }),
                (H[88] = es),
                (H[89] = ep),
                (H[90] = w))
              : (w = H[90]),
            H[91] !== ew ? ((A = F(ew)), (H[91] = ew), (H[92] = A)) : (A = H[92]),
            H[93] !== A
              ? ((R = (0, n.jsx)(j.L3, { className: "sr-only", children: A })), (H[93] = A), (H[94] = R))
              : (R = H[94]),
            H[95] !== ey
              ? ((q = (0, n.jsx)(j.rr, {
                  className: "sr-only",
                  children: ey
                    ? (0, n.jsx)(c.A, {
                        id: "pullRequestDetail.merge.description",
                        defaultMessage: "Choose a merge method and confirm.",
                      })
                    : (0, n.jsx)(c.A, {
                        id: "pullRequestDetail.merge.description.singleMethod",
                        defaultMessage: "Confirm the selected merge method.",
                      }),
                })),
                (H[95] = ey),
                (H[96] = q))
              : (q = H[96]),
            H[97] !== ew ? ((C = F(ew)), (H[97] = ew), (H[98] = C)) : (C = H[98]),
            H[99] !== ew
              ? ((E = (function (e) {
                  switch (e) {
                    case "gitlab":
                      return (0, n.jsx)(c.A, {
                        id: "pullRequestDetail.merge.projectDefaultSubtitle",
                        defaultMessage: "GitLab will merge only if the displayed head commit still matches",
                      })
                    case "github":
                      return (0, n.jsx)(c.A, {
                        id: "pullRequestDetail.merge.subtitle",
                        defaultMessage: "GitHub will merge only if the displayed head commit still matches.",
                      })
                  }
                })(ew)),
                (H[99] = ew),
                (H[100] = E))
              : (E = H[100]),
            H[101] !== C || H[102] !== E
              ? ((M = (0, n.jsx)(I.OO, { children: (0, n.jsx)(I.c7, { title: C, subtitle: E }) })),
                (H[101] = C),
                (H[102] = E),
                (H[103] = M))
              : (M = H[103]),
            (x = ey
              ? (0, n.jsx)(I.OO, {
                  children: (0, n.jsx)(S.T, {
                    ariaLabel: eb.formatMessage({
                      id: "pullRequestDetail.merge.method",
                      defaultMessage: "Merge method",
                    }),
                    options: [
                      {
                        id: "squash",
                        label: (0, n.jsx)(c.A, { id: "pullRequestDetail.merge.squash", defaultMessage: "Squash" }),
                      },
                      { id: "merge", label: L },
                    ].filter((e) => {
                      let { id: t } = e
                      return null == Z || Z.includes(t)
                    }),
                    selectedId: el,
                    onSelect: eh,
                  }),
                })
              : null))
        }
        ;((H[0] = Z),
          (H[1] = z),
          (H[2] = J),
          (H[3] = V),
          (H[4] = ey),
          (H[5] = eb),
          (H[6] = Y),
          (H[7] = X),
          (H[8] = ee),
          (H[9] = en),
          (H[10] = et),
          (H[11] = er),
          (H[12] = ei),
          (H[13] = es),
          (H[14] = ev),
          (H[15] = ea),
          (H[16] = eo),
          (H[17] = el),
          (H[18] = eu),
          (H[19] = eg),
          (H[20] = em),
          (H[21] = ep),
          (H[22] = eh),
          (H[23] = ef),
          (H[24] = $),
          (H[25] = ew),
          (H[26] = t),
          (H[27] = r),
          (H[28] = a),
          (H[29] = o),
          (H[30] = l),
          (H[31] = d),
          (H[32] = g),
          (H[33] = m),
          (H[34] = p),
          (H[35] = v),
          (H[36] = b),
          (H[37] = w),
          (H[38] = R),
          (H[39] = q),
          (H[40] = M),
          (H[41] = x))
      } else
        ((t = H[26]),
          (r = H[27]),
          (a = H[28]),
          (o = H[29]),
          (l = H[30]),
          (d = H[31]),
          (g = H[32]),
          (m = H[33]),
          (p = H[34]),
          (v = H[35]),
          (b = H[36]),
          (w = H[37]),
          (R = H[38]),
          (q = H[39]),
          (M = H[40]),
          (x = H[41]))
      return p !== Symbol.for("react.early_return_sentinel")
        ? p
        : (H[104] !== V
            ? ((k =
                null == V
                  ? null
                  : (0, n.jsx)(I.OO, {
                      children: (0, n.jsx)("div", { className: "text-sm text-danger", role: "alert", children: V }),
                    })),
              (H[104] = V),
              (H[105] = k))
            : (k = H[105]),
          H[106] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = (0, n.jsx)(f.Gmf, {})), (H[106] = _))
            : (_ = H[106]),
          H[107] !== ef
            ? ((A = () => {
                ef(!1)
              }),
              (H[107] = ef),
              (H[108] = A))
            : (A = H[108]),
          H[109] !== ei
            ? ((L = ei
                ? (0, n.jsx)(c.A, { id: "pullRequestDetail.merge.closePending", defaultMessage: "Close" })
                : (0, n.jsx)(c.A, { id: "pullRequestDetail.merge.cancel", defaultMessage: "Cancel" })),
              (H[109] = ei),
              (H[110] = L))
            : (L = H[110]),
          H[111] !== A || H[112] !== L
            ? ((N = (0, n.jsx)(E.b, { color: "secondary", icon: _, iconOnly: !0, onClick: A, children: L })),
              (H[111] = A),
              (H[112] = L),
              (H[113] = N))
            : (N = H[113]),
          H[114] !== a || H[115] !== el
            ? ((Q =
                "squash" === el
                  ? (0, n.jsx)(c.A, { id: "pullRequestDetail.merge.confirmSquash", defaultMessage: "Squash and merge" })
                  : a),
              (H[114] = a),
              (H[115] = el),
              (H[116] = Q))
            : (Q = H[116]),
          H[117] !== es || H[118] !== ea || H[119] !== Q
            ? ((O = (0, n.jsx)(C.$, { color: "primary", disabled: ea, loading: es, type: "submit", children: Q })),
              (H[117] = es),
              (H[118] = ea),
              (H[119] = Q),
              (H[120] = O))
            : (O = H[120]),
          H[121] !== N || H[122] !== O
            ? ((U = (0, n.jsx)(I.OO, { children: (0, n.jsxs)(I.Es, { children: [N, O] }) })),
              (H[121] = N),
              (H[122] = O),
              (H[123] = U))
            : (U = H[123]),
          H[124] !== t ||
          H[125] !== k ||
          H[126] !== U ||
          H[127] !== v ||
          H[128] !== b ||
          H[129] !== w ||
          H[130] !== R ||
          H[131] !== q ||
          H[132] !== M ||
          H[133] !== x
            ? ((W = (0, n.jsxs)(t, { as: v, "aria-busy": b, onSubmit: w, children: [R, q, M, x, k, U] })),
              (H[124] = t),
              (H[125] = k),
              (H[126] = U),
              (H[127] = v),
              (H[128] = b),
              (H[129] = w),
              (H[130] = R),
              (H[131] = q),
              (H[132] = M),
              (H[133] = x),
              (H[134] = W))
            : (W = H[134]),
          H[135] !== r || H[136] !== o || H[137] !== l || H[138] !== d || H[139] !== W
            ? ((K = (0, n.jsx)(r, { open: o, showDialogClose: l, onOpenChange: d, children: W })),
              (H[135] = r),
              (H[136] = o),
              (H[137] = l),
              (H[138] = d),
              (H[139] = W),
              (H[140] = K))
            : (K = H[140]),
          H[141] !== g || H[142] !== m || H[143] !== K
            ? ((G = (0, n.jsxs)(n.Fragment, { children: [g, m, K] })),
              (H[141] = g),
              (H[142] = m),
              (H[143] = K),
              (H[144] = G))
            : (G = H[144]),
          G)
    }
    function F(e) {
      switch (e) {
        case "gitlab":
          return (0, n.jsx)(c.A, { id: "codeReview.gitlab.mergeTitle", defaultMessage: "Merge this merge request" })
        case "github":
          return (0, n.jsx)(c.A, { id: "pullRequestDetail.merge.title", defaultMessage: "Merge pull request" })
      }
    }
    var N = r("CASd"),
      Q = r("ClXH"),
      O = r("HOLv"),
      U = r("wKuj")
    let W = (0, k.YK)({
      draft: { id: "pullRequestSidePanel.status.draft", defaultMessage: "Draft" },
      open: { id: "pullRequestDetail.header.openState", defaultMessage: "Open" },
      closed: { id: "pullRequestSidePanel.status.close", defaultMessage: "Closed" },
    })
    function K(e) {
      let t,
        r,
        s,
        a,
        o,
        l = (0, i.c)(23),
        {
          provider: c,
          disabled: d,
          menu: g,
          handoff: m,
          pendingStatus: p,
          isInMergeQueue: f,
          status: v,
          onStatusChange: b,
        } = e,
        w = void 0 !== d && d,
        y = void 0 === p ? null : p,
        R = (0, u.A)(),
        q = m ?? W
      ;(l[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = ["draft", "open", "closed"]), (l[0] = t)) : (t = l[0]),
        l[1] !== w || l[2] !== R || l[3] !== q || l[4] !== b || l[5] !== y || l[6] !== v
          ? ((r = t.map((e) => {
              let t = q[e]
              if (null == t) return null
              let r = y === e,
                i = v === e
              return (0, n.jsx)(
                h.ms.Item,
                {
                  "aria-busy": r || void 0,
                  disabled: w || i || ("closed" === v && "draft" === e),
                  focusableWhenDisabled: r,
                  rightIcon: r
                    ? (0, n.jsx)(P.y, { className: "icon-xs" })
                    : i && (0, n.jsx)(O.I, { "aria-hidden": !1, asset: Q.G }),
                  onSelect: () => b(e),
                  children: R.formatMessage(t),
                },
                e,
              )
            })),
            (l[1] = w),
            (l[2] = R),
            (l[3] = q),
            (l[4] = b),
            (l[5] = y),
            (l[6] = v),
            (l[7] = r))
          : (r = l[7]))
      let M = r
      if (void 0 !== g && g) {
        let e
        return (l[8] !== M ? ((e = (0, n.jsx)(n.Fragment, { children: M })), (l[8] = M), (l[9] = e)) : (e = l[9]), e)
      }
      l[10] !== R || l[11] !== c
        ? ((s = (function (e, t) {
            switch (t) {
              case "gitlab":
                return e.formatMessage({
                  id: "codeReview.gitlab.states.statusChangeLabel",
                  defaultMessage: "Change merge request status",
                })
              case "github":
                return e.formatMessage({
                  id: "pullRequestSidePanel.status.change",
                  defaultMessage: "Change pull request status",
                })
            }
          })(R, c)),
          (l[10] = R),
          (l[11] = c),
          (l[12] = s))
        : (s = l[12])
      let x = null != y
      return (
        l[13] !== w || l[14] !== f || l[15] !== v || l[16] !== s || l[17] !== x
          ? ((a = (0, n.jsx)(U.i, {
              interactive: !0,
              "aria-description": s,
              disabled: w,
              loading: x,
              isInMergeQueue: f,
              status: v,
            })),
            (l[13] = w),
            (l[14] = f),
            (l[15] = v),
            (l[16] = s),
            (l[17] = x),
            (l[18] = a))
          : (a = l[18]),
        l[19] !== w || l[20] !== M || l[21] !== a
          ? ((o = (0, n.jsx)(h.Ab, { contentWidth: "xs", disabled: w, triggerButton: a, children: M })),
            (l[19] = w),
            (l[20] = M),
            (l[21] = a),
            (l[22] = o))
          : (o = l[22]),
        o
      )
    }
    function G(e) {
      let t,
        r,
        s,
        o,
        l = (0, i.c)(20),
        { account: u, detail: c, placement: d, menu: m, surface: p, unavailable: h } = e,
        f = void 0 !== m && m,
        v = void 0 === p ? "pull_request_page" : p,
        b = void 0 === h ? null : h
      l[0] !== u || l[1] !== c.pullRequest
        ? ((t = { account: u, pullRequest: c.pullRequest }), (l[0] = u), (l[1] = c.pullRequest), (l[2] = t))
        : (t = l[2])
      let w = !0 === (0, a._U)(x.F, t).canUpdate
      l[3] !== c || l[4] !== f || l[5] !== d || l[6] !== b
        ? ((r = b ?? ("header" !== d || f ? null : (0, n.jsx)(T.L, { detail: c }))),
          (l[3] = c),
          (l[4] = f),
          (l[5] = d),
          (l[6] = b),
          (l[7] = r))
        : (r = l[7])
      let y = r
      if ("locked" === c.state) return y
      let R = null
      if ("gitlab" !== c.provider && !1 === c.isAuthor) {
        let e
        ;(l[8] !== c
          ? ((e = (function (e) {
              if ("closed" === e.state) return e.viewerCanReopen ? { open: g.b.reopen } : {}
              if ("open" !== e.state) return {}
              let t = {}
              return (
                e.hasWritePermission && (e.isDraft ? (t.open = g.b.ready) : (t.draft = g.b.draft)),
                e.viewerCanClose && (t.closed = g.b.close),
                t
              )
            })(c)),
            (l[8] = c),
            (l[9] = e))
          : (e = l[9]),
          (R = e),
          (s =
            "status" === d
              ? Object.keys(R).length > 0
              : "open" === c.state && !c.isDraft && (!0 === c.hasWritePermission || !0 === c.canManageAutoMerge)))
      } else
        s =
          "status" === d
            ? w && ((0, M.dA)(u) || !0 === c.isAuthor)
            : "open" === c.state && ((0, M.dA)(u) ? !c.isDraft || w : !0 === c.isAuthor)
      if (!s) {
        let e
        if (null != b || "header" === d) return y
        let t = "gitlab" === c.provider ? void 0 : c.isInMergeQueue,
          r = "open" === c.state && c.isDraft ? "draft" : c.state
        return (
          l[10] !== t || l[11] !== r
            ? ((e = (0, n.jsx)(U.i, { isInMergeQueue: t, status: r })), (l[10] = t), (l[11] = r), (l[12] = e))
            : (e = l[12]),
          e
        )
      }
      return (
        l[13] !== u || l[14] !== c || l[15] !== R || l[16] !== f || l[17] !== d || l[18] !== v
          ? ((o = (0, n.jsx)(H, { account: u, detail: c, placement: d, menu: f, handoff: R, surface: v })),
            (l[13] = u),
            (l[14] = c),
            (l[15] = R),
            (l[16] = f),
            (l[17] = d),
            (l[18] = v),
            (l[19] = o))
          : (o = l[19]),
        o
      )
    }
    function H(e) {
      let t,
        g,
        x,
        k,
        C,
        j,
        I,
        S,
        P,
        D,
        E,
        T,
        F,
        Q,
        O,
        U,
        W,
        G,
        H = (0, i.c)(130),
        { account: $, detail: Z, placement: z, menu: J, handoff: V, surface: Y } = e,
        X = (0, a.gh)(b.u),
        ee = (0, u.A)()
      H[0] !== $ || H[1] !== Z.pullRequest
        ? ((t = { account: $, pullRequest: Z.pullRequest }), (H[0] = $), (H[1] = Z.pullRequest), (H[2] = t))
        : (t = H[2])
      let et = t
      H[3] !== Z || H[4] !== et ? ((g = { request: et, detail: Z }), (H[3] = Z), (H[4] = et), (H[5] = g)) : (g = H[5])
      let er = (0, a._U)(R.o, g),
        en = er.data,
        ei = (0, a._U)(q.Kc, et),
        es = (0, a._U)(q.RR, et),
        ea = (0, a._U)(q.Cn, et),
        [eo, el] = (0, l.useState)(!1),
        [eu, ec] = (0, l.useState)(Z.headRevision),
        [ed, eg] = (0, l.useState)(null),
        [em, ep] = (0, l.useState)(!1),
        eh = (0, w.iK)(o.Ugj.pullRequestMergeMethod),
        [ef, ev] = (0, l.useState)(null)
      H[6] !== $ ||
      H[7] !== en?.allowedMergeMethods?.length ||
      H[8] !== en?.canMerge ||
      H[9] !== en?.ciStatus ||
      H[10] !== en?.mergeBlocker ||
      H[11] !== Z.headRevision ||
      H[12] !== Z.state ||
      H[13] !== ei
        ? ((x =
            "open" !== Z.state ||
            en?.mergeBlocker != null ||
            ((0, M.dA)($) && (en?.ciStatus === "failing" || en?.ciStatus === "pending")) ||
            en?.allowedMergeMethods?.length === 0 ||
            !en?.canMerge ||
            null == Z.headRevision ||
            ei),
          (H[6] = $),
          (H[7] = en?.allowedMergeMethods?.length),
          (H[8] = en?.canMerge),
          (H[9] = en?.ciStatus),
          (H[10] = en?.mergeBlocker),
          (H[11] = Z.headRevision),
          (H[12] = Z.state),
          (H[13] = ei),
          (H[14] = x))
        : (x = H[14])
      let eb = x,
        ew = es.isPending && es.variables?.action === "toggle-auto-merge" ? es.variables.enabled : null,
        ey = es.isPending ? es.variables?.action : null,
        eR = null
      "mark-draft" === ey
        ? (eR = "draft")
        : "close" === ey
          ? (eR = "closed")
          : ("mark-ready" === ey || "reopen" === ey || "reopen-ready" === ey) && (eR = "open")
      let eq = ew ?? en?.isAutoMergeEnabled === !0,
        eM =
          "open" !== Z.state ||
          (!eq && (Z.isDraft || null == Z.headRevision || en?.allowedMergeMethods?.length === 0)) ||
          (eq ? !en?.canCancelAutoMerge : !en?.canScheduleAutoMerge) ||
          ei,
        ex = em ? "squash" : (ed ?? eh ?? "merge")
      H[15] !== en || H[16] !== ex || H[17] !== em
        ? ((k =
            em || en?.allowedMergeMethods == null || en?.allowedMergeMethods.includes(ex)
              ? ex
              : (en?.allowedMergeMethods[0] ?? ex)),
          (H[15] = en),
          (H[16] = ex),
          (H[17] = em),
          (H[18] = k))
        : (k = H[18])
      let ek = k,
        e_ = "closed" === Z.state ? "closed" : Z.isDraft ? "draft" : "open"
      H[19] !== Z.headRevision
        ? ((C = () => {
            ;(ev(null), ec(Z.headRevision), el(!0))
          }),
          (H[19] = Z.headRevision),
          (H[20] = C))
        : (C = H[20])
      let eA =
        "header" === z && !J && (!0 === Z.isAuthor || null != V) && "open" === Z.state && !Z.isDraft && !eq && !eb
      ;(H[21] !== eA ? ((j = { enabled: eA }), (H[21] = eA), (H[22] = j)) : (j = H[22]),
        (0, p.K)("git.mergePullRequest", C, j),
        H[23] !== J || H[24] !== z || H[25] !== X
          ? ((I = function (e, t) {
              ;(ev(e),
                ("status" === z || !J || (void 0 !== t && t)) &&
                  X.get(v.Id).danger(e, { errorAnalytics: { toastId: "pullRequestDetailActions.showError" } }))
            }),
            (H[23] = J),
            (H[24] = z),
            (H[25] = X),
            (H[26] = I))
          : (I = H[26]))
      let eC = I
      H[27] !== ee || H[28] !== eh || H[29] !== X || H[30] !== em
        ? ((S = function () {
            em &&
              "squash" !== eh &&
              (0, w.gc)(X, o.Ugj.pullRequestMergeMethod, "squash").catch(() => {
                X.get(v.Id).danger(
                  ee.formatMessage({
                    id: "pullRequestDetail.actions.squashPreferenceError",
                    defaultMessage: "Couldn\u2019t save squash as your default merge method",
                  }),
                  { errorAnalytics: { toastId: "pullRequestDetail.actions.squashPreferenceError" } },
                )
              })
          }),
          (H[27] = ee),
          (H[28] = eh),
          (H[29] = X),
          (H[30] = em),
          (H[31] = S))
        : (S = H[31])
      let ej = S
      H[32] !== $ ||
      H[33] !== Z ||
      H[34] !== V ||
      H[35] !== et ||
      H[36] !== X ||
      H[37] !== eC ||
      H[38] !== e_ ||
      H[39] !== Y
        ? ((P = function (e) {
            let t = (0, N.U$)(e_, e, Z.isDraft && null == V)
            ;(ev(null),
              (0, m.H)(X, {
                account: $,
                action: (function (e) {
                  switch (e) {
                    case "close":
                      return "close"
                    case "mark-draft":
                      return "mark_draft"
                    case "mark-ready":
                      return "mark_ready"
                    case "reopen":
                    case "reopen-ready":
                      return "reopen"
                  }
                })(t),
                item: Z,
                surface: Y,
              }),
              X.get(q.RR, et)
                .mutateAsync({ ...et, action: t })
                .catch((e) => {
                  eC(e.message)
                }))
          }),
          (H[32] = $),
          (H[33] = Z),
          (H[34] = V),
          (H[35] = et),
          (H[36] = X),
          (H[37] = eC),
          (H[38] = e_),
          (H[39] = Y),
          (H[40] = P))
        : (P = H[40])
      let eI = P
      H[41] !== ee || H[42] !== ek || H[43] !== eC
        ? ((D = function (e, t) {
            if (t && "merge" === ek && /merge commits are not allowed on this repository/i.test(e.message)) {
              ;(ep(!0),
                eC(
                  ee.formatMessage({
                    id: "pullRequestDetail.actions.repoRestrictionError",
                    defaultMessage: "Merge commits are disabled in this repository; try again with squash",
                  }),
                  !0,
                ))
              return
            }
            eC(e.message, !0)
          }),
          (H[41] = ee),
          (H[42] = ek),
          (H[43] = eC),
          (H[44] = D))
        : (D = H[44])
      let eS = D
      H[45] !== $ ||
      H[46] !== en?.headRevision ||
      H[47] !== Z ||
      H[48] !== et ||
      H[49] !== ek ||
      H[50] !== ej ||
      H[51] !== X ||
      H[52] !== eS ||
      H[53] !== Y
        ? ((E = function (e) {
            ;(ev(null),
              (0, m.H)(X, { account: $, action: e ? "enable_auto_merge" : "disable_auto_merge", item: Z, surface: Y }),
              X.get(q.RR, et)
                .mutateAsync(
                  (0, M.dA)($)
                    ? {
                        ...et,
                        account: $,
                        action: "toggle-auto-merge",
                        enabled: e,
                        mergeMethod: ek,
                        expectedHeadRevision: Z.headRevision ?? en?.headRevision ?? void 0,
                      }
                    : { ...et, account: $, action: "toggle-auto-merge", enabled: e, mergeMethod: ek },
                )
                .then(() => {
                  ;(e && ej(), ep(!1))
                })
                .catch((t) => {
                  eS(t, e)
                }))
          }),
          (H[45] = $),
          (H[46] = en?.headRevision),
          (H[47] = Z),
          (H[48] = et),
          (H[49] = ek),
          (H[50] = ej),
          (H[51] = X),
          (H[52] = eS),
          (H[53] = Y),
          (H[54] = E))
        : (E = H[54])
      let eP = E
      H[55] !== $ ||
      H[56] !== Z ||
      H[57] !== V ||
      H[58] !== et ||
      H[59] !== eb ||
      H[60] !== ek ||
      H[61] !== ej ||
      H[62] !== z ||
      H[63] !== eu ||
      H[64] !== X ||
      H[65] !== eS ||
      H[66] !== Y
        ? ((T = function () {
            if (eb) return
            let e = "header" === z && ("gitlab" === Z.provider || null != V) ? eu : Z.headRevision
            null != e &&
              (ev(null),
              (0, m.H)(X, { account: $, action: "merge", item: Z, surface: Y }),
              X.get(q.Cn, et)
                .mutateAsync({
                  expectedHeadRevision: e,
                  mergeMethod: ek,
                  onAccepted: () => {
                    X.get(d.G, { name: "toys.confetti" }).isCapable &&
                      (async function () {
                        let { fireConfettiCannon: e } = await r.e(479822).then(r.bind(r, "wsQC"))
                        e()
                      })()
                  },
                })
                .then(() => {
                  ;(ej(), ep(!1), el(!1))
                })
                .catch((e) => {
                  eS(e, !0)
                }))
          }),
          (H[55] = $),
          (H[56] = Z),
          (H[57] = V),
          (H[58] = et),
          (H[59] = eb),
          (H[60] = ek),
          (H[61] = ej),
          (H[62] = z),
          (H[63] = eu),
          (H[64] = X),
          (H[65] = eS),
          (H[66] = Y),
          (H[67] = T))
        : (T = H[67])
      let eD = T
      if ("status" === z) {
        let e,
          t = (0, M.dA)($) ? "gitlab" : "github",
          r = "gitlab" === Z.provider ? void 0 : Z.isInMergeQueue
        return (
          H[68] !== V ||
          H[69] !== ei ||
          H[70] !== J ||
          H[71] !== eR ||
          H[72] !== e_ ||
          H[73] !== t ||
          H[74] !== r ||
          H[75] !== eI
            ? ((e = (0, n.jsx)(K, {
                menu: J,
                provider: t,
                disabled: ei,
                handoff: V,
                pendingStatus: eR,
                isInMergeQueue: r,
                status: e_,
                onStatusChange: eI,
              })),
              (H[68] = V),
              (H[69] = ei),
              (H[70] = J),
              (H[71] = eR),
              (H[72] = e_),
              (H[73] = t),
              (H[74] = r),
              (H[75] = eI),
              (H[76] = e))
            : (e = H[76]),
          e
        )
      }
      if (null != er.error) {
        let e, t, r, i, a
        H[77] !== ee
          ? ((e = ee.formatMessage({ id: "pullRequestDetail.actions.reload", defaultMessage: "Reload merge actions" })),
            (H[77] = ee),
            (H[78] = e))
          : (e = H[78])
        let o = e
        if (J) {
          let e, t
          return (
            H[79] !== er
              ? ((e = (e) => {
                  ;(e.preventDefault(), er.refetch?.())
                }),
                (H[79] = er),
                (H[80] = e))
              : (e = H[80]),
            H[81] !== o || H[82] !== e
              ? ((t = (0, n.jsx)(h.ms.Item, { onSelect: e, children: o })), (H[81] = o), (H[82] = e), (H[83] = t))
              : (t = H[83]),
            t
          )
        }
        return (
          H[84] !== er ? ((t = () => void er.refetch?.()), (H[84] = er), (H[85] = t)) : (t = H[85]),
          H[86] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, n.jsx)(B.Ml, {
                width: "merge",
                icon: (0, n.jsx)(f._7Q, {}),
                leadingIcon: (0, n.jsx)(f._7Q, {}),
                children: (0, n.jsx)(c.A, { id: "codeReview.merge.retryShort", defaultMessage: "Retry" }),
              })),
              (H[86] = r))
            : (r = H[86]),
          H[87] !== o || H[88] !== t
            ? ((i = (0, n.jsx)(y.DW, { "aria-label": o, onClick: t, children: r })),
              (H[87] = o),
              (H[88] = t),
              (H[89] = i))
            : (i = H[89]),
          H[90] !== o || H[91] !== i
            ? ((a = (0, n.jsx)(s.m, { content: o, children: i })), (H[90] = o), (H[91] = i), (H[92] = a))
            : (a = H[92]),
          a
        )
      }
      let eE = null == V,
        eT = en?.allowedMergeMethods,
        eB = !1 === ew,
        eL = !0 === ew,
        eF = es.isPending,
        eN = Z.isDraft,
        eQ = "mark-ready" === ey,
        eO = ea.isPending,
        eU = (null == en && er.isFetching) || ("gitlab" !== Z.provider && en?.mergeBlocker === "unknown")
      ;(H[93] !== $ ? ((F = (0, M.dA)($) ? "gitlab" : "github"), (H[93] = $), (H[94] = F)) : (F = H[94]),
        H[95] !== en || H[96] !== Z || H[97] !== ee || H[98] !== ei || H[99] !== F
          ? ((Q = (function (e, t, r, n, i) {
              if (r)
                switch (i) {
                  case "gitlab":
                    return n.formatMessage({
                      id: "codeReview.gitlab.mergePending",
                      defaultMessage: "Another merge request update is in progress",
                    })
                  case "github":
                    return n.formatMessage({
                      id: "pullRequestDetail.actions.merge.disabled.pending",
                      defaultMessage: "Another pull request update is in progress",
                    })
                }
              if ("closed" === e.state)
                switch (i) {
                  case "gitlab":
                    return n.formatMessage({
                      id: "codeReview.gitlab.mergeClosed",
                      defaultMessage: "Reopen this merge request before merging",
                    })
                  case "github":
                    return n.formatMessage({
                      id: "pullRequestDetail.actions.merge.disabled.closed",
                      defaultMessage: "Reopen this pull request before merging",
                    })
                }
              if (e.isDraft)
                switch (i) {
                  case "gitlab":
                    return n.formatMessage({
                      id: "codeReview.gitlab.mergeDraft",
                      defaultMessage: "Mark this merge request ready for review before merging",
                    })
                  case "github":
                    return n.formatMessage({
                      id: "pullRequestDetail.actions.merge.disabled.draft",
                      defaultMessage: "Mark this pull request ready for review before merging",
                    })
                }
              if (t?.canMerge === !1 && t.mergeBlockReasons?.length)
                return (function (e, t, r = !1) {
                  let n = r && !t.some((e) => "conflict" === e.code) ? [{ code: "conflict" }, ...t] : t,
                    i = []
                  for (let r of ["checks_failed", "checks_pending"]) {
                    let n = t.filter((e) => e.code === r)
                    if (0 === n.length) continue
                    let s = n.every((e) => null != e.count) ? n.reduce((e, t) => e + (t.count ?? 0), 0) : 0
                    i.push(e.formatMessage(_[r], { count: s }))
                  }
                  for (let { code: t, subject: r, count: s } of n) {
                    if ("checks_failed" === t || "checks_pending" === t) continue
                    let n = A.get(t)
                    if (n) {
                      i.push(e.formatMessage(n, { count: s ?? 0 }))
                      continue
                    }
                    let a = t.replaceAll("_", " "),
                      o = r && !/^checks?\//.test(r) ? r : null
                    o && null != s && s > 1
                      ? i.push(
                          e.formatMessage(
                            {
                              id: "codeReview.mergeReason.unknownSubjectAndCount",
                              defaultMessage: "{reason} ({subject}) ({count, number} requirements)",
                            },
                            { reason: a, subject: o, count: s },
                          ),
                        )
                      : o
                        ? i.push(
                            e.formatMessage(
                              { id: "codeReview.mergeReason.subject", defaultMessage: "{reason} ({subject})" },
                              { reason: a, subject: o },
                            ),
                          )
                        : null != s && s > 1
                          ? i.push(
                              e.formatMessage(
                                {
                                  id: "codeReview.mergeReason.count",
                                  defaultMessage: "{reason} ({count, number} requirements)",
                                },
                                { reason: a, count: s },
                              ),
                            )
                          : i.push(a)
                  }
                  return e.formatList([...new Set(i)], { type: "conjunction" })
                })(n, t.mergeBlockReasons, "conflicts" === t.mergeBlocker)
              if (t?.mergeBlocker === "conflicts")
                return n.formatMessage({
                  id: "pullRequestDetail.actions.merge.disabled.conflicts",
                  defaultMessage: "Resolve merge conflicts before merging",
                })
              if (t?.mergeBlocker === "unknown")
                return n.formatMessage({
                  id: "codeReview.merge.checkingEligibility",
                  defaultMessage: "Still checking whether this can be merged",
                })
              if ("gitlab" === i && t?.ciStatus === "failing")
                return n.formatMessage({
                  id: "pullRequestDetail.actions.merge.disabled.failingChecks",
                  defaultMessage: "Fix failing checks before merging",
                })
              if ("gitlab" === i && t?.ciStatus === "pending")
                return n.formatMessage({
                  id: "pullRequestDetail.actions.merge.disabled.pendingChecks",
                  defaultMessage: "Wait for checks to finish before merging",
                })
              if (t?.canMerge) return null
              switch (i) {
                case "gitlab":
                  return n.formatMessage({
                    id: "codeReview.gitlab.mergeBlocked",
                    defaultMessage: "This merge request can\u2019t be merged yet",
                  })
                case "github":
                  return n.formatMessage({
                    id: "pullRequestDetail.actions.merge.disabled.blocked",
                    defaultMessage: "This pull request can\u2019t be merged yet",
                  })
              }
            })(Z, en, ei, ee, F)),
            (H[95] = en),
            (H[96] = Z),
            (H[97] = ee),
            (H[98] = ei),
            (H[99] = F),
            (H[100] = Q))
          : (Q = H[100]))
      let eW = "gitlab" === Z.provider
      return (
        H[101] !== eI ? ((O = () => eI("open")), (H[101] = eI), (H[102] = O)) : (O = H[102]),
        H[103] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = (e) => {
              ;(eg(e), ep(!1))
            }),
            (H[103] = U))
          : (U = H[103]),
        H[104] !== Z.headRevision
          ? ((W = (e) => {
              ;(e && (ev(null), ec(Z.headRevision)), el(e))
            }),
            (H[104] = Z.headRevision),
            (H[105] = W))
          : (W = H[105]),
        H[106] !== eM ||
        H[107] !== eq ||
        H[108] !== Z.isDraft ||
        H[109] !== ef ||
        H[110] !== ei ||
        H[111] !== J ||
        H[112] !== eb ||
        H[113] !== ek ||
        H[114] !== ea.isPending ||
        H[115] !== eo ||
        H[116] !== eD ||
        H[117] !== eE ||
        H[118] !== eT ||
        H[119] !== eB ||
        H[120] !== eL ||
        H[121] !== eQ ||
        H[122] !== eU ||
        H[123] !== Q ||
        H[124] !== eW ||
        H[125] !== O ||
        H[126] !== W ||
        H[127] !== eP ||
        H[128] !== es.isPending
          ? ((G = (0, n.jsx)(L, {
              menu: J,
              primary: eE,
              allowedMergeMethods: eT,
              autoMergeDisabled: eM,
              autoMergeEnabled: eq,
              error: ef,
              isAutoMergeDisabling: eB,
              isAutoMergeEnabling: eL,
              isAutoMergePending: eF,
              isDraft: eN,
              isMarkReadyPending: eQ,
              isMergePending: eO,
              isPending: ei,
              isCheckingMergeability: eU,
              mergeDisabled: eb,
              mergeDisabledMessage: Q,
              mergeMethod: ek,
              mergeOpen: eo,
              isGitLab: eW,
              onAutoMergeChange: eP,
              onMarkReady: O,
              onMerge: eD,
              onMergeMethodChange: U,
              onMergeOpenChange: W,
            })),
            (H[106] = eM),
            (H[107] = eq),
            (H[108] = Z.isDraft),
            (H[109] = ef),
            (H[110] = ei),
            (H[111] = J),
            (H[112] = eb),
            (H[113] = ek),
            (H[114] = ea.isPending),
            (H[115] = eo),
            (H[116] = eD),
            (H[117] = eE),
            (H[118] = eT),
            (H[119] = eB),
            (H[120] = eL),
            (H[121] = eQ),
            (H[122] = eU),
            (H[123] = Q),
            (H[124] = eW),
            (H[125] = O),
            (H[126] = W),
            (H[127] = eP),
            (H[128] = es.isPending),
            (H[129] = G))
          : (G = H[129]),
        G
      )
    }
  },
  CASd(e, t, r) {
    var n = r("tUUe")
    r.d(
      t,
      {},
      {
        U$: function (e, t, r) {
          switch (t) {
            case "closed":
              return "close"
            case "draft":
              return "mark-draft"
            case "open":
              if ("closed" !== e) return "mark-ready"
              return r ? "reopen-ready" : "reopen"
          }
        },
        XE: function (e, t) {
          if (null != e.reviewThreadId) {
            let r = t.byReviewThreadId.get(e.reviewThreadId)
            if (null != r) return r
          }
          return (null == e.url ? null : t.byUrl.get(e.url)) ?? null
        },
        ZF: function (e) {
          let t = new Map(),
            r = new Map()
          for (let n of e ?? [])
            (null == n.reviewThreadId || t.has(n.reviewThreadId) || t.set(n.reviewThreadId, n),
              null != n.reviewThreadId || null == n.url || r.has(n.url) || r.set(n.url, n))
          return { byReviewThreadId: t, byUrl: r }
        },
        ah: function (e, t, r) {
          let i =
              null != r
                ? r.position
                : null == t.line || null == t.path || null == t.side
                  ? null
                  : {
                      line: t.line,
                      path: t.path,
                      side: t.side,
                      start_line: t.startLine ?? void 0,
                      start_side: t.startSide ?? void 0,
                    },
            s =
              null == i || null == t.originalLine
                ? i
                : { ...i, line: t.originalLine, start_line: t.originalStartLine ?? t.originalLine }
          return { provider: (0, n.u)(e), position: i, diffHunkPosition: s }
        },
      },
    )
  },
  wKuj(e, t, r) {
    r.d(t, { i: () => p })
    var n = r("ABep"),
      i = r("QosV"),
      s = r("gTyE"),
      a = r("SpZ6"),
      o = r("on57"),
      l = r("oyxz"),
      u = r("Sm6l"),
      c = r("HOLv"),
      d = r("bVeK"),
      g = r("RNul"),
      m = "Badge-A9Kb9J"
    function p(e) {
      let t,
        r,
        l,
        p,
        f,
        v,
        b,
        w,
        y,
        R,
        q,
        M = (0, i.c)(31)
      M[0] !== e
        ? (({ disabled: r, interactive: f, isInMergeQueue: l, loading: v, status: p, ...t } = e),
          (M[0] = e),
          (M[1] = t),
          (M[2] = r),
          (M[3] = l),
          (M[4] = p),
          (M[5] = f),
          (M[6] = v))
        : ((t = M[1]), (r = M[2]), (l = M[3]), (p = M[4]), (f = M[5]), (v = M[6]))
      let x = void 0 !== f && f,
        k = void 0 !== v && v,
        _ = "open" === p && l ? "queued" : p
      if (
        (M[7] === Symbol.for("react.memo_cache_sentinel") ? ((b = (0, n.jsx)(d.QC9, {})), (M[7] = b)) : (b = M[7]),
        M[8] !== _ || M[9] !== x || M[10] !== k)
      ) {
        let e, t, r, i, l, u
        ;(M[13] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(d.ono, {})), (M[13] = e)) : (e = M[13]),
          M[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(c.I, { "aria-hidden": !1, asset: a.Q })), (M[14] = t))
            : (t = M[14]),
          M[15] === Symbol.for("react.memo_cache_sentinel") ? ((r = (0, n.jsx)(d.SGL, {})), (M[15] = r)) : (r = M[15]),
          M[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, n.jsx)(c.I, { asset: s.Y })), (M[16] = i))
            : (i = M[16]))
        let { tone: m, icon: p } = {
          queued: { tone: "text-yellow", icon: b },
          open: { tone: "text-green", icon: e },
          draft: { tone: "text-secondary", icon: t },
          merged: { tone: "text-purple", icon: r },
          closed: { tone: "text-red", icon: i },
        }[_]
        ;(M[17] !== _
          ? ((l = (0, n.jsx)("span", { children: (0, n.jsx)(h, { status: _ }) })), (M[17] = _), (M[18] = l))
          : (l = M[18]),
          M[19] !== x || M[20] !== k
            ? ((u = x
                ? (0, n.jsx)("span", {
                    "aria-hidden": !0,
                    className: "flex size-3 shrink-0 self-center",
                    children: k ? (0, n.jsx)(g.y, { as: "span", className: "icon-xxs" }) : (0, n.jsx)(d.Awc, {}),
                  })
                : null),
              (M[19] = x),
              (M[20] = k),
              (M[21] = u))
            : (u = M[21]),
          (w = (0, n.jsxs)("span", {
            className: "inline-flex items-baseline gap-1",
            children: [(0, n.jsx)("span", { className: "flex self-center", children: p }), l, u],
          })),
          (y = (0, o.A)("inline-flex", m)),
          (M[8] = _),
          (M[9] = x),
          (M[10] = k),
          (M[11] = w),
          (M[12] = y))
      } else ((w = M[11]), (y = M[12]))
      return (
        M[22] !== t || M[23] !== w || M[24] !== r || M[25] !== x || M[26] !== k
          ? ((R = x
              ? (0, n.jsx)(u.$, {
                  ...t,
                  className: (0, o.A)(m, t.className),
                  "aria-busy": k || void 0,
                  color: "tinted",
                  disabled: r || k,
                  radius: "full",
                  size: "cardAction",
                  children: w,
                })
              : (0, n.jsx)("span", {
                  className: (0, o.A)(
                    m,
                    "inline-flex items-center rounded-full border border-transparent bg-current/10 text-sm leading-5 font-medium whitespace-nowrap",
                  ),
                  children: w,
                })),
            (M[22] = t),
            (M[23] = w),
            (M[24] = r),
            (M[25] = x),
            (M[26] = k),
            (M[27] = R))
          : (R = M[27]),
        M[28] !== y || M[29] !== R
          ? ((q = (0, n.jsx)("span", { className: y, children: R })), (M[28] = y), (M[29] = R), (M[30] = q))
          : (q = M[30]),
        q
      )
    }
    function h(e) {
      let t = (0, i.c)(5),
        { status: r } = e
      switch (r) {
        case "queued": {
          let e
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(l.A, { id: "codeReview.status.queued", defaultMessage: "Queued" })), (t[0] = e))
              : (e = t[0]),
            e
          )
        }
        case "closed": {
          let e
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(l.A, { id: "pullRequestSidePanel.state.closed", defaultMessage: "Closed" })),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        }
        case "draft": {
          let e
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(l.A, { id: "pullRequestSidePanel.state.draft", defaultMessage: "Draft" })), (t[2] = e))
              : (e = t[2]),
            e
          )
        }
        case "merged": {
          let e
          return (
            t[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(l.A, { id: "pullRequestSidePanel.state.merged", defaultMessage: "Merged" })),
                (t[3] = e))
              : (e = t[3]),
            e
          )
        }
        case "open": {
          let e
          return (
            t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(l.A, { id: "pullRequestDetail.header.openState", defaultMessage: "Open" })),
                (t[4] = e))
              : (e = t[4]),
            e
          )
        }
      }
    }
  },
  IbBW(e, t, r) {
    var n = r("jpoq")
    r.d(
      t,
      {},
      {
        z: async function (e, t, r, i) {
          let s = await n.$z[t](e, r, i)
          if ("error" in s) throw Error(s.error)
        },
      },
    )
  },
  A3uD(e, t, r) {
    r.d(t, { v: () => s, d: () => a })
    var n = r("kK7d"),
      i = r("rvFo")
    function s(e, t, r) {
      return {
        queryKey: ["gitlab-reviewer-candidates", t],
        enabled: t.query.length > 0,
        queryFn: async ({ signal: e }) => {
          let i = await (async function ({ account: e, pullRequest: t, query: r }) {
            switch (e.provider) {
              case "github-cli":
                throw Error("searchPullRequestReviewerCandidates is not implemented for github-cli")
              case "github-connector":
                throw Error("searchPullRequestReviewerCandidates is not implemented for github-connector")
              case "gitlab-connector":
                return n.CodexRequest.safePost("/wham/gitlab/operations/search-reviewer-candidates", {
                  requestBody: { account: e, pullRequest: t, query: r },
                  retry: !1,
                })
            }
          })({ ...t, source: r })
          return (e.throwIfAborted(), i)
        },
        staleTime: i.D.ONE_MINUTE,
        retry: !1,
      }
    }
    async function a(e, t, r, i) {
      if (null != r.reviewerSelector) throw Error("This provider does not support native reviewer identities")
      if ("remove-reviewers" === r.action && r.teamReviewers.length > 0)
        throw Error("GitLab team reviewer assignment is not supported")
      return (async function (e) {
        let { account: t } = e
        switch (t.provider) {
          case "github-cli":
            throw Error("updatePullRequestReviewerAssignment is not implemented for github-cli")
          case "github-connector":
            throw Error("updatePullRequestReviewerAssignment is not implemented for github-connector")
          case "gitlab-connector":
            if (e.reviewers.some((e) => "team" === e.kind))
              return { status: "error", error: "GitLab team reviewer assignment is not supported" }
            return n.CodexRequest.safePost("/wham/gitlab/operations/update-reviewer-assignment", {
              requestBody: {
                account: t,
                pullRequest: e.pullRequest,
                action: e.action,
                reviewers: e.reviewers.map((e) => e.id),
              },
              retry: !1,
            })
        }
      })({
        ...t,
        action: "request-reviewers" === r.action ? "add" : "remove",
        reviewers: r.reviewers.map((e) => ({ id: e, kind: "user" })),
        source: i,
      })
    }
  },
  eZAr(e, t, r) {
    var n = r("PP5b"),
      i = r("SEJy")
    r.d(
      t,
      {},
      {
        w: async function (e, t, r, s, { deferRefreshWhilePending: a = !1 } = {}) {
          let o = e.queryClient,
            l = ["gitlab-pull-request-write", t]
          try {
            ;(await o
              .getMutationCache()
              .build(o, {
                mutationFn: async () => {
                  let i = await (0, n.t)(e, t, r)
                  if ("error" === i.status) throw Error(i.error)
                },
                mutationKey: l,
                retry: !1,
                networkMode: "always",
                scope: { id: JSON.stringify([(0, i.rE)(t.account), t.pullRequest]) },
              })
              .execute(void 0),
              s?.())
          } finally {
            ;(a && 0 !== o.isMutating({ mutationKey: l })) ||
              (await Promise.allSettled([
                o.invalidateQueries({ queryKey: ["gitlab-pull-request-mergeability", t] }),
                o.invalidateQueries({ queryKey: ["gitlab-pull-request-stack", t], exact: !0 }),
                o.invalidateQueries({ queryKey: ["gitlab-pull-request-discussion", t], exact: !0 }),
                o.invalidateQueries({ queryKey: ["pull-request-search", t.account] }),
              ]))
          }
        },
      },
    )
  },
  B72h(e, t, r) {
    r.d(t, { o: () => c })
    var n = r("qmMi"),
      i = r("jpoq"),
      s = r("GsLq"),
      a = r("OWtl"),
      o = r("kK7d")
    let l = (0, n.vU)(a.u, ({ headRevision: e, ...t }, { scope: r }) => ({
      queryKey: ["gitlab-pull-request-mergeability", t, e],
      queryFn: async ({ signal: r }) => {
        let n = await (function (e) {
          switch (e.account.provider) {
            case "github-cli":
              throw Error("readPullRequestMergeability is not implemented for github-cli")
            case "github-connector":
              throw Error("readPullRequestMergeability is not implemented for github-connector")
            case "gitlab-connector":
              return o.CodexRequest.safePost("/wham/gitlab/operations/read-mergeability", {
                requestBody: { account: e.account, pullRequest: e.pullRequest },
                retry: !1,
              })
          }
        })({ ...t, source: "pull_requests_page" })
        if ((r.throwIfAborted(), null != e && n.headRevision !== e))
          throw Error("The merge request changed. Refresh to read its merge status.")
        return n
      },
      staleTime: 0,
      retry: !1,
    }))
    var u = r("SEJy")
    let c = (0, n.i1)(a.u, ({ request: e, detail: t }, { get: r }) => {
      if ("gitlab" !== t.provider) {
        if ((0, u.dA)(e.account)) return { data: null, error: null, refetch: null, isFetching: !1 }
        let n = r(i.pj["gh-pr-summary"], { account: e.account, pullRequest: e.pullRequest }),
          s = t.hasWritePermission ?? !0 === t.isAuthor
        return {
          isFetching: n.isFetching,
          error: n.error,
          refetch: n.refetch,
          data: {
            canMerge: null == n.error && s && t.canMerge,
            canScheduleAutoMerge: t.canManageAutoMerge ?? (!0 === t.isAuthor && s),
            canCancelAutoMerge: t.canManageAutoMerge ?? !0 === t.isAuthor,
            canApprove: !0,
            canComment: !0,
            headRevision: t.headRevision,
            isAutoMergeEnabled: t.isAutoMergeEnabled,
            allowedMergeMethods: t.allowedMergeMethods,
            mergeBlocker: t.mergeBlocker,
            mergeBlockReasons: s
              ? t.mergeBlockReasons
              : [...(t.mergeBlockReasons ?? []), { code: "permission_denied" }],
            ciStatus: t.ciStatus,
          },
        }
      }
      if (!(0, u.dA)(e.account)) return { data: null, error: null, refetch: null, isFetching: !1 }
      let n = r(l, { ...e, account: e.account, headRevision: t.headRevision }),
        a = r(s.H, { ...e, account: e.account })
      return {
        isFetching: n.isFetching,
        data: null == n.error ? (n.data ?? null) : null,
        error: n.error,
        refetch: async () => {
          let e = await a.refetch()
          ;(null == e.data || e.data.headRevision === t.headRevision) && (await n.refetch())
        },
      }
    })
  },
  N6Z5(e, t, r) {
    r.d(t, {
      DJ: () => S,
      nF: () => C,
      wW: () => j,
      Kc: () => L,
      QP: () => F,
      Cn: () => T,
      Su: () => I,
      ni: () => N,
      yM: () => B,
      Xm: () => D,
      RR: () => E,
      FK: () => P,
    })
    var n = r("qmMi"),
      i = r("OWtl"),
      s = r("tSEg"),
      a = r("IbBW"),
      o = r("EWTL"),
      l = r("kK7d")
    async function u(e, t) {
      switch (t.account.provider) {
        case "github-cli":
          throw Error("postPullRequestComment is not implemented for github-cli")
        case "github-connector":
          throw Error("postPullRequestComment is not implemented for github-connector")
        case "gitlab-connector":
          return l.CodexRequest.safePost("/wham/gitlab/operations/post-comment", {
            requestBody: {
              account: t.account,
              pullRequest: t.pullRequest,
              body: t.body,
              inlineComment: t.inlineComment,
            },
            retry: !1,
          })
      }
    }
    async function c(e, t) {
      switch (t.account.provider) {
        case "github-cli":
          throw Error("replyToPullRequestComment is not implemented for github-cli")
        case "github-connector":
          throw Error("replyToPullRequestComment is not implemented for github-connector")
        case "gitlab-connector":
          return l.CodexRequest.safePost("/wham/gitlab/operations/reply-comment", {
            requestBody: { account: t.account, pullRequest: t.pullRequest, body: t.body, discussionId: t.discussionId },
            retry: !1,
          })
      }
    }
    var d = r("eZAr"),
      g = r("jpoq"),
      m = r("aR1m"),
      p = r("SGsN"),
      h = r("svjy"),
      f = r("g3QY")
    function v(e, t) {
      return e.flatMap((e) =>
        e.nodeId !== t.nodeId ? [e] : "delete" === t.action ? [] : [{ ...e, body: t.body, rawBody: t.body }],
      )
    }
    var b = r("kVSf"),
      w = r("eddR"),
      y = r("Z1fA")
    function R(e, t, r, n) {
      if (e?.status !== "success" || null == r) return 0
      let i =
          null == n || e.activityItems.some((e) => "review_comment" === e.type && e.reviewThreadId === n)
            ? void 0
            : e.commentAttachments.find((e) => e.reviewThreadId === n),
        s =
          i?.replies ??
          e.activityItems.flatMap((e) =>
            null == n
              ? "comment" === e.type
                ? [e]
                : []
              : "review_comment" === e.type && e.reviewThreadId === n
                ? (e.replies ?? [])
                : [],
          )
      return (
        null != i && null == i.replies
          ? (0, f.Rx)(i).slice(1)
          : s.map((e) => ({ authorLogin: e.authorLogin, text: e.rawBody ?? e.body }))
      ).filter((e) => e.authorLogin?.toLowerCase() === r.toLowerCase() && e.text.trim() === t.trim()).length
    }
    var q = r("xxyD"),
      M = r("lI5L")
    async function x(e, t) {
      switch (t.account.provider) {
        case "github-cli":
          throw Error("updatePullRequestTitle is not implemented for github-cli")
        case "github-connector":
          throw Error("updatePullRequestTitle is not implemented for github-connector")
        case "gitlab-connector":
          return l.CodexRequest.safePost("/wham/gitlab/operations/update-title", {
            requestBody: { account: t.account, pullRequest: t.pullRequest, title: t.title },
            retry: !1,
          })
      }
    }
    async function k(e, t) {
      switch (t.account.provider) {
        case "github-cli":
          throw Error("updatePullRequestBody is not implemented for github-cli")
        case "github-connector":
          throw Error("updatePullRequestBody is not implemented for github-connector")
        case "gitlab-connector":
          return l.CodexRequest.safePost("/wham/gitlab/operations/update-body", {
            requestBody: { account: t.account, pullRequest: t.pullRequest, body: t.body },
            retry: !1,
          })
      }
    }
    var _ = r("A3uD"),
      A = r("SEJy")
    let C = (0, n.c4)(i.u, (e, { scope: t }) => {
        var r, n
        return (0, A.dA)(e.account)
          ? ((r = { ...e, account: e.account }),
            {
              retry: !1,
              mutationFn: ({ body: e, onSuccess: n, replyToReviewThreadId: i }, { client: s }) => {
                var a
                return (
                  (a = async () => {
                    let a = ["gitlab-pull-request-discussion", r],
                      o = s.getQueryData(a),
                      l = o?.currentUser?.login ?? null,
                      g = R(o, e, l, i)
                    try {
                      await (0, d.w)(t, r, () =>
                        null == i
                          ? u(t, { ...r, body: e, source: "pull_requests_page" })
                          : c(t, { ...r, body: e, discussionId: i, source: "pull_requests_page" }),
                      )
                    } catch (t) {
                      if (o?.status !== "success" || R(s.getQueryData(a), e, l, i) <= g) throw t
                    }
                    n?.()
                  }),
                  s
                    .getMutationCache()
                    .build(s, {
                      mutationFn: a,
                      networkMode: "always",
                      retry: !1,
                      scope: { id: JSON.stringify(["pull-request-comment-submission", r]) },
                    })
                    .execute(void 0)
                )
              },
            })
          : ((n = { ...e, account: e.account }),
            {
              retry: !1,
              mutationFn: async ({ body: e, onSuccess: r, replyToReviewThreadId: i, pendingReview: s }) => {
                if (null != s && (null == i || null == s.headRevision))
                  throw Error("Pending review revision is unavailable; finish or discard it on GitHub")
                let o =
                  null != s && null != i && null != s.headRevision
                    ? {
                        ...n,
                        body: e,
                        replyToReviewThreadId: i,
                        review: "pending",
                        pendingReviewId: s.id,
                        expectedHeadRevision: s.headRevision,
                      }
                    : { ...n, body: e, replyToReviewThreadId: i }
                ;(await (0, a.z)(t, "gh-pr-comment", o), r?.())
              },
            })
      }),
      j = (0, n.c4)(i.u, (e, { scope: t }) =>
        (0, A.dA)(e.request.account)
          ? (function (e, { request: t }) {
              return {
                retry: !1,
                mutationFn: (r) =>
                  (0, d.w)(e, t, () =>
                    "delete" === r.action
                      ? (async function (e) {
                          switch (e.account.provider) {
                            case "github-cli":
                              throw Error("deletePullRequestComment is not implemented for github-cli")
                            case "github-connector":
                              throw Error("deletePullRequestComment is not implemented for github-connector")
                            case "gitlab-connector":
                              return l.CodexRequest.safePost("/wham/gitlab/operations/delete-comment", {
                                requestBody: { account: e.account, pullRequest: e.pullRequest, commentId: e.commentId },
                                retry: !1,
                              })
                          }
                        })({ ...t, commentId: r.nodeId, commentType: r.commentType, source: "pull_requests_page" })
                      : (async function (e) {
                          switch (e.account.provider) {
                            case "github-cli":
                              throw Error("updatePullRequestComment is not implemented for github-cli")
                            case "github-connector":
                              throw Error("updatePullRequestComment is not implemented for github-connector")
                            case "gitlab-connector":
                              if ("review" === e.commentType)
                                throw Error("GitLab does not support editing review bodies")
                              return l.CodexRequest.safePost("/wham/gitlab/operations/update-comment", {
                                requestBody: {
                                  account: e.account,
                                  pullRequest: e.pullRequest,
                                  body: e.body,
                                  commentId: e.commentId,
                                },
                                retry: !1,
                              })
                          }
                        })({
                          ...t,
                          commentId: r.nodeId,
                          commentType: r.commentType,
                          body: r.body,
                          source: "pull_requests_page",
                        }),
                  ),
              }
            })(t, { ...e, request: { ...e.request, account: e.request.account } })
          : (function (e, { request: t }) {
              return {
                mutationFn: (r) => {
                  let n =
                    "delete" === r.action || null == r.pendingReviewId
                      ? () => {
                          e.query.setData(g.pj["gh-pr-discussion"], t, (e) => {
                            let t
                            return e?.status === "success"
                              ? ((t =
                                  "delete" === r.action
                                    ? e.activityItems.find(
                                        (e) => "event" !== e.type && "commit_group" !== e.type && e.nodeId === r.nodeId,
                                      )
                                    : void 0),
                                {
                                  ...e,
                                  activityItems: e.activityItems.flatMap((e) =>
                                    "event" === e.type || "commit_group" === e.type
                                      ? [e]
                                      : e.nodeId === r.nodeId
                                        ? "delete" === r.action
                                          ? []
                                          : [{ ...e, body: r.body, rawBody: r.body }]
                                        : e.replies?.some((e) => e.nodeId === r.nodeId) !== !0
                                          ? [e]
                                          : [{ ...e, replies: v(e.replies, r) }],
                                  ),
                                  commentAttachments: e.commentAttachments.flatMap((e) => {
                                    if (t?.type === "review_comment" && e.reviewThreadId === t.reviewThreadId) return []
                                    if (!e.replies?.some((e) => e.nodeId === r.nodeId)) return [e]
                                    let n = v(e.replies, r),
                                      i = (0, f.dj)(e)
                                    return [
                                      {
                                        ...e,
                                        replies: n,
                                        content: [
                                          {
                                            content_type: "text",
                                            text: [i, ...n.map((e) => ({ authorLogin: e.authorLogin, text: e.body }))]
                                              .map(({ authorLogin: e, text: t }) =>
                                                null == e
                                                  ? t
                                                  : `@${e}:
${t}`,
                                              )
                                              .join("\n\n"),
                                          },
                                        ],
                                      },
                                    ]
                                  }),
                                })
                              : e
                          })
                        }
                      : void 0
                  return (0, a.z)(e, "gh-pr-comment-update", { ...r, ...t }, n)
                },
              }
            })(t, { ...e, request: { ...e.request, account: e.request.account } }),
      ),
      I = (0, n.c4)(i.u, ({ request: e }, { scope: t }) => {
        var r, n
        return (0, A.dA)(e.account)
          ? ((r = { ...e, account: e.account }),
            {
              retry: !1,
              mutationFn: ({ action: e, reviewThreadId: n }) =>
                (0, d.w)(
                  t,
                  r,
                  () =>
                    (async function (e) {
                      switch (e.account.provider) {
                        case "github-cli":
                          throw Error("updatePullRequestDiscussionResolution is not implemented for github-cli")
                        case "github-connector":
                          throw Error("updatePullRequestDiscussionResolution is not implemented for github-connector")
                        case "gitlab-connector":
                          return l.CodexRequest.safePost("/wham/gitlab/operations/update-resolution", {
                            requestBody: {
                              account: e.account,
                              pullRequest: e.pullRequest,
                              discussionId: e.discussionId,
                              resolved: e.resolved,
                            },
                            retry: !1,
                          })
                      }
                    })({ ...r, discussionId: n, resolved: "resolve" === e, source: "pull_requests_page" }),
                  void 0,
                  { deferRefreshWhilePending: !0 },
                ),
              onMutate: async ({ action: e, reviewThreadId: t }, { client: n }) => {
                let i = ["gitlab-pull-request-discussion", r]
                return (await n.cancelQueries({ exact: !0, queryKey: i }), (0, y.E)(n, i, t, "resolve" === e))
              },
              onError: (e, t, r) => r?.(),
            })
          : ((n = { ...e, account: e.account }),
            {
              mutationFn: async ({ action: e, reviewThreadId: r }) => {
                if (
                  (await (0, a.z)(t, "gh-pr-review-thread-update", { ...n, action: e, reviewThreadId: r }),
                  "resolve" === e)
                )
                  try {
                    ;(0, m.Z)(t, n, r)
                  } catch {
                    t.get(p.Id).danger(
                      t
                        .get(h.g)
                        .formatMessage({
                          id: "pullRequestDetail.comment.attachmentCleanupFailed",
                          defaultMessage: "Thread resolved, but its attachment could not be removed from the draft",
                          description: "The review thread was resolved, but removing its composer attachment failed",
                        }),
                      { errorAnalytics: { toastId: "pullRequestDetail.comment.attachmentCleanupFailed" } },
                    )
                  }
              },
            })
      }),
      S = (0, n.c4)(s.GD, (e, { scope: t }) =>
        (0, A.dA)(e.request.account)
          ? (function (e, { request: t, submissionKey: r }) {
              return {
                retry: !1,
                mutationFn: ({ comment: n }) =>
                  (0, d.w)(e, t, () => {
                    let i = (0, o.GM)(n)
                    if (null != n.replyToReviewThreadId)
                      return c(e, {
                        ...t,
                        body: i,
                        discussionId: n.replyToReviewThreadId,
                        source: "pull_requests_page",
                      })
                    if (null == r.diffSnapshot) throw Error("Refresh the reviewed diff before commenting")
                    return u(e, {
                      ...t,
                      body: i,
                      source: "pull_requests_page",
                      inlineComment: { ...(0, o.BI)(n), ...r.diffSnapshot, headRevision: r.revision },
                    })
                  }),
              }
            })(t, { ...e, request: { ...e.request, account: e.request.account } })
          : (function (e, { request: t, submissionKey: r }) {
              return {
                retry: !1,
                mutationFn: async ({ comment: n, onSuccess: i, review: s, pendingReviewId: l }) => {
                  let u,
                    c = (0, o.GM)(n)
                  if ("pending" === s && null != n.replyToReviewThreadId && null == l)
                    throw Error("Pending review changed or was submitted; refresh before continuing")
                  let { replyToReviewThreadId: d } = n
                  ;((u =
                    null == d
                      ? {
                          ...t,
                          body: c,
                          expectedHeadRevision: r.revision,
                          inlineComment: (0, o.BI)(n),
                          review: s,
                          pendingReviewId: l,
                        }
                      : "pending" === s && null != l
                        ? {
                            ...t,
                            body: c,
                            replyToReviewThreadId: d,
                            review: s,
                            pendingReviewId: l,
                            expectedHeadRevision: r.revision,
                          }
                        : { ...t, body: c, replyToReviewThreadId: d }),
                    await (0, a.z)(e, "gh-pr-comment", u),
                    i?.())
                },
              }
            })(t, { ...e, request: { ...e.request, account: e.request.account } }),
      ),
      P = (0, n.c4)(i.u, (e, { scope: t }) => {
        var r, n
        return (0, A.dA)(e.account)
          ? ((r = { ...e, account: e.account }),
            {
              retry: !1,
              mutationFn: ({ title: e }) =>
                (0, d.w)(t, r, () => x(t, { ...r, title: e, source: "pull_requests_page" })),
            })
          : ((n = { ...e, account: e.account }),
            {
              networkMode: "always",
              mutationFn: ({ title: e }) => (0, a.z)(t, "gh-pr-update", { action: "update-title", title: e, ...n }),
            })
      }),
      D = (0, n.c4)(i.u, (e, { scope: t }) => {
        var r, n
        return (0, A.dA)(e.account)
          ? ((r = { ...e, account: e.account }),
            {
              retry: !1,
              mutationFn: ({ body: e }) => (0, d.w)(t, r, () => k(t, { ...r, body: e, source: "pull_requests_page" })),
            })
          : ((n = { ...e, account: e.account }),
            {
              networkMode: "always",
              mutationFn: ({ body: e }) => (0, a.z)(t, "gh-pr-update", { action: "update-body", body: e, ...n }),
            })
      }),
      E = (0, n.c4)(i.u, (e, { scope: t }) => {
        var r, n
        return {
          ...((0, A.dA)(e.account)
            ? ((r = { ...e, account: e.account }),
              {
                networkMode: "always",
                retry: !1,
                mutationFn: (e, { client: n }) => {
                  let i = "pull_requests_page",
                    s = [...(0, M.Y)(t.get, "reviewers"), r]
                  return (0, d.w)(
                    t,
                    r,
                    () => {
                      switch (e.action) {
                        case "update-title":
                          return x(t, { ...r, title: e.title, source: i })
                        case "update-body":
                          return k(t, { ...r, body: e.body, source: i })
                        case "close":
                        case "reopen":
                        case "reopen-ready":
                        case "mark-draft":
                        case "mark-ready":
                          return (async function (e) {
                            switch (e.account.provider) {
                              case "github-cli":
                                throw Error("updatePullRequestStatus is not implemented for github-cli")
                              case "github-connector":
                                throw Error("updatePullRequestStatus is not implemented for github-connector")
                              case "gitlab-connector":
                                return l.CodexRequest.safePost("/wham/gitlab/operations/update-status", {
                                  requestBody: { account: e.account, pullRequest: e.pullRequest, action: e.action },
                                  retry: !1,
                                })
                            }
                          })({ ...r, action: e.action, source: i })
                        case "toggle-auto-merge":
                          return (async function (e) {
                            switch (e.account.provider) {
                              case "github-cli":
                                throw Error("configurePullRequestAutoMerge is not implemented for github-cli")
                              case "github-connector":
                                throw Error("configurePullRequestAutoMerge is not implemented for github-connector")
                              case "gitlab-connector":
                                if (null == e.expectedHeadRevision)
                                  return {
                                    status: "error",
                                    error: "GitLab requires a reviewed head before changing auto-merge",
                                  }
                                return l.CodexRequest.safePost("/wham/gitlab/operations/configure-auto-merge", {
                                  requestBody: {
                                    account: e.account,
                                    pullRequest: e.pullRequest,
                                    expectedHeadRevision: e.expectedHeadRevision,
                                    mergeMethod: e.mergeMethod ?? "merge",
                                    enabled: e.enabled,
                                  },
                                  retry: !1,
                                })
                            }
                          })({
                            ...r,
                            enabled: e.enabled,
                            mergeMethod: e.mergeMethod,
                            expectedHeadRevision: e.expectedHeadRevision ?? null,
                            source: i,
                          })
                        case "request-reviewers":
                        case "remove-reviewers":
                          return (0, _.d)(t, r, e, i)
                      }
                    },
                    () => {
                      ;("request-reviewers" !== e.action && "remove-reviewers" !== e.action) ||
                        (n.getQueryState(s)?.error == null &&
                          n.setQueryData(s, (t) => (t?.status === "success" ? (0, w.Z)(t, e) : t)))
                    },
                    { deferRefreshWhilePending: "request-reviewers" === e.action || "remove-reviewers" === e.action },
                  )
                },
              })
            : ((n = { ...e, account: e.account }),
              {
                networkMode: "always",
                mutationFn: (e, { client: r }) => {
                  if ("request-reviewers" === e.action || "remove-reviewers" === e.action) {
                    let { reviewerEntries: i, ...s } = e,
                      o = () => {
                        t.query.setData(g.pj["gh-pr-reviews"], n, (t) => (t?.status === "success" ? (0, w.Z)(t, e) : t))
                      }
                    return r
                      .getMutationCache()
                      .build(r, {
                        mutationFn: () => (0, a.z)(t, "gh-pr-update", { ...s, ...n }, o),
                        networkMode: "always",
                        retry: !1,
                        scope: {
                          id: JSON.stringify(["github-reviewer-assignment", (0, b.getPullRequestQueryIdentity)(n)]),
                        },
                      })
                      .execute(void 0)
                  }
                  return (0, a.z)(t, "gh-pr-update", { ...e, ...n })
                },
              })),
          onMutate: (r) => {
            if ("request-reviewers" !== r.action && "remove-reviewers" !== r.action) return
            let n = { update: r, settled: !1 }
            return (t.set(w.Q, e, (e) => [...e, n]), n)
          },
          onSettled: (r, n, i, s) => {
            null != s &&
              t.set(w.Q, e, (e) => {
                let t = e.flatMap((e) => (e !== s ? [e] : null != n ? [] : [{ ...e, settled: !0 }]))
                return t.some((e) => !e.settled) ? t : []
              })
          },
        }
      }),
      T = (0, n.c4)(i.u, (e, { scope: t }) => {
        var r, n
        return (0, A.dA)(e.account)
          ? ((r = { ...e, account: e.account }),
            {
              networkMode: "always",
              retry: !1,
              mutationFn: ({ expectedHeadRevision: e, mergeMethod: n, onAccepted: i }) =>
                (0, d.w)(t, r, async () => {
                  let t = await (async function (e) {
                    switch (e.account.provider) {
                      case "github-cli":
                        throw Error("mergePullRequest is not implemented for github-cli")
                      case "github-connector":
                        throw Error("mergePullRequest is not implemented for github-connector")
                      case "gitlab-connector":
                        if (null == e.expectedHeadRevision)
                          return { status: "error", error: "GitLab requires a reviewed head before merging" }
                        return l.CodexRequest.safePost("/wham/gitlab/operations/merge", {
                          requestBody: {
                            account: e.account,
                            pullRequest: e.pullRequest,
                            expectedHeadRevision: e.expectedHeadRevision,
                            mergeMethod: e.mergeMethod ?? "merge",
                          },
                          retry: !1,
                        })
                    }
                  })({ ...r, expectedHeadRevision: e, mergeMethod: n, source: "pull_requests_page" })
                  return ("success" === t.status && t.merged && i(), t)
                }),
            })
          : ((n = { ...e, account: e.account }),
            {
              networkMode: "always",
              mutationFn: async ({ expectedHeadRevision: e, mergeMethod: r, onAccepted: i }) => {
                ;(await (0, a.z)(t, "gh-pr-merge", { ...n, expectedHeadRevision: e, mergeMethod: r }), i())
              },
            })
      }),
      B = (0, n.c4)(i.u, (e, { scope: t }) => {
        var r, n
        return (0, A.dA)(e.account)
          ? ((r = { ...e, account: e.account }),
            {
              retry: !1,
              mutationFn: ({ body: e, event: n, expectedHeadRevision: i, commentAlreadyPosted: s = !1 }) =>
                (0, d.w)(t, r, async () => {
                  let t = await (function (e) {
                    switch (e.account.provider) {
                      case "github-cli":
                        throw Error("submitPullRequestReview is not implemented for github-cli")
                      case "github-connector":
                        throw Error("submitPullRequestReview is not implemented for github-connector")
                      case "gitlab-connector":
                        return l.CodexRequest.safePost("/wham/gitlab/operations/submit-review", {
                          requestBody: { account: e.account, pullRequest: e.pullRequest, review: e.review },
                          retry: !1,
                        })
                    }
                  })({
                    ...r,
                    review: { body: e, event: n, expectedHeadRevision: i, commentAlreadyPosted: s },
                    source: "pull_requests_page",
                  })
                  if ("error" === t.status)
                    throw new q.B(t.error ?? "Unable to submit the review", !0 === t.textAccepted)
                  return t
                }),
            })
          : ((n = { ...e, account: e.account }),
            {
              mutationFn: ({ body: e, event: r, expectedHeadRevision: i, pendingReviewId: s }) =>
                (0, a.z)(t, "gh-pr-submit-review", {
                  ...n,
                  body: e,
                  event: r,
                  expectedHeadRevision: i,
                  pendingReviewId: s,
                }),
            })
      }),
      L = (0, n.i1)(
        i.u,
        (e, { get: t }) => t(P, e).isPending || t(D, e).isPending || t(E, e).isPending || t(T, e).isPending,
      ),
      F = (0, n.c4)(i.u, (e, { scope: t }) => ({
        mutationFn: (r) =>
          (0, a.z)(t, "gh-pr-comment-update", { ...e, action: "delete", commentType: "review", nodeId: r }),
      })),
      N = (0, n.i1)(
        i.u,
        (e, { get: t }) =>
          null != e && (t(B, e).isPending || (!(0, A.dA)(e.account) && t(F, { ...e, account: e.account }).isPending)),
      )
  },
  xxyD(e, t, r) {
    r.d(
      t,
      {},
      {
        B: class extends Error {
          textAccepted
          constructor(e, t) {
            ;(super(e), (this.textAccepted = t))
          }
        },
      },
    )
  },
  LrzQ(e, t, r) {
    r.d(t, { H: () => s })
    var n = r("tUUe"),
      i = r("SAl8")
    function s(e, { account: t, action: r, item: a, surface: o }) {
      ;(0, i.X)(e, {
        type: "pull_request_action",
        provider: (0, n.u)(t),
        action: r,
        surface: o,
        state: (function (e) {
          if (!("canonical" in e)) return
          if ("closed" === e.state) return "closed"
          let t = e.isDraft ? "draft" : "open"
          return (function ({ canMerge: e, ciStatus: t, hasMergeConflicts: r = !1, status: n }) {
            return "closed" === n || "merged" === n
              ? n
              : "draft" === n
                ? "draft"
                : r || "failing" === t
                  ? "failing"
                  : "passing" !== t || e
                    ? e
                      ? "ready"
                      : "in_progress"
                    : "successful"
          })({
            canMerge: e.canMerge,
            ciStatus: e.ciStatus,
            hasMergeConflicts: "conflicts" === e.mergeBlocker,
            status: "merged" === e.state ? "merged" : t,
          })
        })(a),
        isAuthor: a.isAuthor ?? void 0,
      })
    }
  },
  eddR(e, t, r) {
    var n = r("qmMi"),
      i = r("DBCl"),
      s = r("OWtl")
    let a = (0, n.bD)(s.u, (e) => [])
    function o(e, t) {
      if ("remove-reviewers" === t.action)
        return e.flatMap((e) => {
          let r = e.nativeRemoveTarget
          return null != r && ("user" === r.kind ? t.reviewers : t.teamReviewers).includes(r.id)
            ? e.importedPending || null != e.decision || e.approvedOnPreviousRevision || e.commented
              ? [{ ...e, nativeRemoveTarget: void 0 }]
              : []
            : [e]
        })
      let r = new Map(e.map((e) => [(0, i.jDE)(e.key), e]))
      for (let e of t.reviewers) {
        let n = { kind: "user", id: e },
          s = t.reviewerEntries?.find((e) => e.nativeAddTarget?.kind === n.kind && e.nativeAddTarget.id === n.id),
          a = s?.key ?? { type: "principal", principal: n },
          o = (0, i.jDE)(a),
          l = r.get(o)
        r.set(o, {
          key: a,
          decision: null,
          commented: !1,
          isViewer: !1,
          importedPending: !1,
          ...s,
          ...l,
          nativeAddTarget: n,
          nativeRemoveTarget: n,
        })
      }
      return [...r.values()]
    }
    r.d(
      t,
      {},
      {
        Q: a,
        Z: function (e, t) {
          if ("native_principal" === t.reviewerSelector) {
            let { entries: r, localEntries: n } = e.reviewers
            return {
              ...e,
              reviewers: { ...e.reviewers, ...(null == r ? { localEntries: o(n ?? [], t) } : { entries: o(r, t) }) },
            }
          }
          return {
            ...e,
            reviewers: {
              ...e.reviewers,
              requested:
                "request-reviewers" === t.action
                  ? Array.from(new Set([...e.reviewers.requested, ...t.reviewers]))
                  : e.reviewers.requested.filter((e) => !t.reviewers.includes(e)),
              requestedTeams:
                "remove-reviewers" === t.action
                  ? e.reviewers.requestedTeams.filter(
                      (r) => !t.teamReviewers.includes(e.reviewers.requestedTeamSlugs?.[r] ?? r),
                    )
                  : e.reviewers.requestedTeams,
            },
          }
        },
      },
    )
  },
  dmx7(e, t, r) {
    var n = r("qmMi"),
      i = r("bodQ"),
      s = r("jpoq"),
      a = r("GsLq"),
      o = r("OWtl"),
      l = r("SEJy")
    let u = (0, n.i1)(o.u, (e, { get: t }) => {
      if (null == e) return { canUpdate: !1, canComment: !1, hasWriteService: !1 }
      if (!(0, l.dA)(e.account)) {
        let { data: r, error: n } = t(s.pj["gh-pr-metadata"], { ...e, account: e.account }),
          a = !(0, i.cu)(n) && r?.status === "success"
        return { canUpdate: a && (r.viewerCanUpdate ?? r.isAuthor), canComment: a, hasWriteService: a }
      }
      let { data: r, error: n } = t(a.H, { ...e, account: e.account })
      return {
        hasWriteService: !(0, i.cu)(n),
        canUpdate: !(0, i.cu)(n) && r?.viewerCanUpdate === !0,
        canComment: !(0, i.cu)(n) && r?.viewerCanComment === !0,
      }
    })
    r.d(t, {}, { F: u })
  },
  aR1m(e, t, r) {
    var n = r("XXbU"),
      i = r.n(n),
      s = r("yT0O"),
      a = r.n(s),
      o = r("DBCl"),
      l = r("pwjC"),
      u = r("MiZI"),
      c = r("CiLO"),
      d = r("jEN2"),
      g = r("g3QY"),
      m = r("yWTM"),
      p = r("svjy"),
      h = r("DEUe"),
      f = r("i8Vs"),
      v = r("ejcW"),
      b = r("V3rO"),
      w = r("KH2l"),
      y = r("gYog"),
      R = r("s357")
    r.d(
      t,
      {},
      {
        Z: function (e, t, r) {
          let n = e.get(v.An, t)
          ;(0, u.M9)(e, r, n)
        },
        a: async function (
          e,
          { surfaceId: t, request: r, fix: n, fixComments: s, fixConflicts: u },
          { expandOnFocus: q = !1, useDedicatedTask: M = !1 } = {},
        ) {
          let x = n?.checks.filter((e) => "failing" === e.status),
            k = null != n || null != s || null != u
          if (x?.length === 0 || s?.comments.length === 0) return !1
          let { pullRequest: _ } = r,
            A = (0, f.gS)(r)
          if ("global" !== t) {
            if (k) {
              let r = (0, o.L$F)(t) ? t : (0, o.JXB)(t)
              ;(D({ type: "task", threadId: r }), (0, d.te)((0, o.L$F)(r) ? r : (0, b.JJ)(e, r)))
            }
            return !0
          }
          if (!(0, y.eu)(e, r)) return !1
          let C = e.get(y.hL, r)
          if (null == C && null != e.get(y.fF)) return !1
          if (null != C && void 0 === C.linkedTask) {
            let { visit: t } = C
            if (
              (await e.when(({ get: e }) => {
                let r = e(y.fF)
                return r?.visit !== t || void 0 !== r.linkedTask
              }),
              (C = e.get(y.hL, r)),
              C?.visit !== t || (k && !e.get(w.I7)) || !(0, y.eu)(e, r))
            )
              return !1
          }
          let j = (0, m.Eu)(e.get(v.An, r)),
            I = M ? null : e.get(y.aY, r),
            S = I ?? e.get(v.x_, r)
          D(null == S ? { type: "draft", draftId: j } : { type: "task", threadId: S.threadId })
          let P = j
          return (
            null != S && (P = (0, o.L$F)(S.threadId) ? S.threadId : (0, b.JJ)(e, S.threadId)),
            e.set(y.fF, {
              draftThreadLocationId: j,
              focusRequest: (C?.focusRequest ?? 0) + 1,
              expandOnFocus: q,
              request: r,
              linkedTask: I,
              visit: C?.visit ?? Symbol(),
            }),
            (0, d.te)(P),
            !0
          )
          function D(t) {
            if (null != u) {
              let n = {
                baseBranch: u.baseBranch,
                headBranch: u.headBranch,
                number: _.number,
                pullRequestAccount: u.useConnectedTools ? r.account : void 0,
                repo: `${_.owner}/${_.repository}`,
                url: A,
              }
              ;(0, c.X1)(e, t, {
                promptIfEmpty: "",
                updateDraft: (t) => {
                  t.pullRequestMergeConflict = { ...n, repairInstructions: (0, R.IK)(e, r, n, u.useConnectedTools) }
                },
              })
            }
            if (null != s) {
              let n = "draft" === t.type ? e.get(b.RH, t.draftId) : t.threadId,
                i = e.get(v.An, r),
                o = s.comments.map((t) => ({
                  ...t,
                  localPullRequestReviewKey: i,
                  localPullRequestUrl: A,
                  localPullRequestRepairInstructions: e
                    .get(p.g)
                    .formatMessage(
                      {
                        id: "codeReview.reviewChat.fixCommentsPrompt",
                        defaultMessage:
                          "Address the attached review comments for {url} ({headBranch} \u2192 {baseBranch}). Verify that the repository and checked-out branch match this pull request before editing. Make the smallest safe changes for actionable feedback, and explain anything that needs clarification or is already addressed.",
                        description:
                          "Instructions attached to selected pull request comments. The URL identifies the pull request and the branches identify its source and target.",
                      },
                      { url: A, headBranch: s.headBranch, baseBranch: s.baseBranch },
                    ),
                }))
              ;(0, l.xu)(e, n, (e) =>
                a()(e, o, (e) => `${e.localPullRequestReviewKey ?? ""}:${e.reviewThreadId ?? (0, g.y6)(e)}`),
              )
            }
            if (null == n || null == x) return
            let o = new Set(x.map((e) => e.link))
            ;(0, c.X1)(e, t, {
              promptIfEmpty: "",
              updateDraft: (e) => {
                e.pullRequestChecks = Object.values(
                  i()(
                    [
                      ...e.pullRequestChecks,
                      ...x.map((e) => ({
                        ...e,
                        pullRequestUrl: A,
                        pullRequestAccount: r.account,
                        pullRequestHeadRevision: n.headRevision ?? void 0,
                      })),
                    ],
                    (e) => {
                      let t = e.pullRequestUrl ?? (null != e.link && o.has(e.link) ? A : "")
                      return `${t}:${(0, h.Qk)(e)}`
                    },
                  ),
                )
              },
            })
          }
        },
      },
    )
  },
  Mhsw(e, t, r) {
    var n = r("DBCl"),
      i = r("rxoR"),
      s = r("koMX"),
      a = r("r8w8"),
      o = r("fiGE"),
      l = r("i8Vs"),
      u = r("nf3G"),
      c = r("RxZZ"),
      d = r("dvDp")
    r.d(
      t,
      {},
      {
        g: function (e, t, r) {
          if ((0, l.nv)(t) || (0, c.CN)(e.get, (0, i.V)().githubConnection)?.hostname === t) return !0
          let o = e.get(u.threadCwd$)
          if (null == o || r !== e.get(u.threadHostId$)) return !1
          let { data: d } = e.get(s.gitOriginsQuery$, {
              params: { dirs: [o], hostId: r },
              source: "pull_requests_page",
            }),
            g = (0, a.LL)(d?.origins, o)?.originUrl
          return null != g && (0, n.tN7)(g)?.host.toLowerCase() === t
        },
        i: function (e, t, r) {
          return "code-review-tab" === (0, d.$)(e) && (0, o.Ki)(t, r)
        },
      },
    )
  },
  Q4pM(e, t, r) {
    var n = r("SZCv"),
      i = r.n(n),
      s = r("qmMi"),
      a = r("tl5a"),
      o = r("pwjC"),
      l = r("CiLO"),
      u = r("jEN2"),
      c = r("g3QY"),
      d = r("QpPI"),
      g = r("Sd8U"),
      m = r("bnxy"),
      p = r("gVjh")
    let h = (0, s.vP)(g.PR, null),
      f = (0, s.un)(g.PR, ({ get: e }) => e(l.aN)?.pullRequestRepair?.target ?? null, { isEqual: i() })
    function v(e, t, r = e.value.routeConversationId, n) {
      let i = e.get(l.aN)
      null != i && (0, p.z9)(i) && (0, l.O_)(e, "")
      let s = e.get(f),
        a = e.get(l.aN)?.pullRequestRepair?.pullRequestNumber ?? null
      if (null != s && R(s, t) && (null == n || null == a || a === n))
        return (
          null == a &&
            null != n &&
            (0, l.j9)(e, (e) => {
              e.pullRequestRepair = { target: s, pullRequestNumber: n }
            }),
          !1
        )
      if (
        ((0, l.j9)(e, (e) => {
          ;((e.pullRequestRepair = { target: t, pullRequestNumber: n ?? null }), (e.pullRequestChecks = []))
        }),
        null != s)
      ) {
        ;(0, l.Kk)(e, (e) => {
          e.pullRequestMergeConflict = null
        })
        let t = e.get(h)
        if (null != t && null != r) {
          let n = new Set(t.commentKeys)
          ;(0, o.xu)(e, r, (e) => e.filter((e) => !n.has(b(e))))
        }
        e.set(h, null)
      }
      return null != s
    }
    function b(e) {
      return e.reviewThreadId ?? (0, c.y6)(e)
    }
    function w(e) {
      return e.filter(
        (e) => "review_comment" === e.type && !0 !== e.isResolved && null != e.line && null != e.path && null != e.side,
      )
    }
    function y(e, { comment: t, conversationId: r, target: n, workspaceRoots: i }) {
      let s = (0, d.Sj)({
        cwd: n.root,
        path: t.position.path,
        workspaceRoots: i ?? (null == r ? [] : (e.get(a.m8, r) ?? [])),
      })
      return t.localWorkspaceRoot === s ? t : { ...t, localWorkspaceRoot: s ?? n.root }
    }
    function R(e, t) {
      return e.hostId === t.hostId && (0, m.XH)(e.root) === (0, m.XH)(t.root)
    }
    r.d(
      t,
      {},
      {
        BQ: v,
        GW: R,
        JA: f,
        O6: w,
        sK: function (
          e,
          {
            baseBranch: t,
            comments: r,
            commitAndPush: n = !1,
            conversationId: i,
            focusComposer: s,
            headBranch: a,
            number: l,
            repo: c,
            target: d,
          },
        ) {
          let g = w(r)
          if (null == t || null == i || null == a || null == l || 0 === g.length) return !1
          let m = [
              (0, p.Pe)({ baseBranch: t, headBranch: a, number: l, repo: c, target: d }),
              ...(n ? ["Run relevant verification, then commit and push the fixes."] : []),
            ].join("\n"),
            f = g.map((e) => {
              var t
              return {
                ...{
                  content: [
                    {
                      content_type: "text",
                      text: [(t = e), ...(t.replies ?? [])]
                        .map((e) =>
                          null == e.authorLogin
                            ? e.body
                            : `@${e.authorLogin}:
${e.body}`,
                        )
                        .join("\n\n"),
                    },
                  ],
                  position: {
                    line: t.line,
                    path: t.path,
                    side: t.side,
                    start_line: t.startLine ?? void 0,
                    start_side: t.startSide ?? void 0,
                  },
                  reviewThreadId: t.reviewThreadId,
                  type: "comment",
                },
                localPullRequestRepairInstructions: m,
              }
            })
          v(e, d, i, l)
          let R = e.get(h),
            q = e.get(o.$B, i),
            M = null != R && R.commentKeys.some((e) => q.some((t) => b(t) === e))
          !(function (e, { attached: t, commentAttachments: r, conversationId: n, target: i }) {
            null != n &&
              0 !== r.length &&
              (0, o.xu)(e, n, (s) => {
                let a = r.map((t) => y(e, { comment: t, conversationId: n, target: i }))
                if (t) {
                  var o = s,
                    l = a
                  let e = o.map((e) => {
                      let t = l.find((t) => b(t) === b(e))?.localPullRequestRepairInstructions
                      return null == t ? e : { ...e, localPullRequestRepairInstructions: t }
                    }),
                    t = new Set(o.map(b)),
                    r = e.some((e, t) => e !== o[t])
                  for (let n of l) {
                    let i = b(n)
                    t.has(i) || (t.add(i), e.push(n), (r = !0))
                  }
                  return r ? e : o
                }
                let u = new Set(a.map(b)),
                  c = s.filter((e) => !u.has(b(e)))
                return c.length === s.length ? s : c
              })
          })(e, { attached: !0, commentAttachments: f, conversationId: i, target: d })
          let x = M ? (R?.commentKeys ?? []) : []
          return (
            e.set(h, {
              commentKeys: Array.from(
                new Set([...x, ...f.map((t) => b(y(e, { comment: t, conversationId: i, target: d })))]),
              ),
            }),
            s && (0, u.xJ)(),
            !0
          )
        },
      },
    )
  },
  DEUe(e, t, r) {
    var n = r("CiLO"),
      i = r("jEN2"),
      s = r("Q4pM"),
      a = r("gVjh")
    function o(e) {
      return e.link ?? `${e.workflow ?? ""}:${e.name}`
    }
    function l(e, { baseBranch: t, checks: r, headBranch: u, number: c, repo: d, target: g }) {
      if (null == t || null == u || null == c) return !1
      let m = (0, a.eP)({ baseBranch: t, headBranch: u, number: c, repo: d, target: g })
      return (
        !!(function (e, { attached: t, checks: r, pullRequestNumber: i, target: a }) {
          let l = r.filter((e) => "failing" === e.status)
          if (0 === l.length) return !1
          if (t) (0, s.BQ)(e, a, void 0, i)
          else {
            let t = e.get(s.JA)
            if (null == t || !(0, s.GW)(t, a)) return !1
          }
          return (
            (0, n.j9)(e, (e) => {
              if (!t) {
                let t = new Set(l.map(o))
                e.pullRequestChecks = e.pullRequestChecks.filter((e) => !t.has(o(e)))
                return
              }
              let r = new Set(e.pullRequestChecks.map(o))
              ;((e.pullRequestChecks = e.pullRequestChecks.map((e) => {
                let t = l.find((t) => o(t) === o(e))?.repairInstructions
                return null == t ? e : { ...e, repairInstructions: t }
              })),
                e.pullRequestChecks.push(...l.filter((e) => !r.has(o(e)))))
            }),
            !0
          )
        })(e, {
          attached: !0,
          checks: r.map((e) => ({ ...e, repairInstructions: m })),
          pullRequestNumber: c,
          target: g,
        }) && ((0, i.xJ)(), !0)
      )
    }
    function u(e, t, r) {
      var o, l
      if (null == t) return !1
      ;(0, s.BQ)(e, r, void 0, t.number)
      let u = (0, a.fA)({
        baseBranch: t.baseBranch,
        headBranch: t.headBranch,
        number: t.number,
        repo: t.repo,
        target: r,
      })
      return (
        (o = e),
        (l = { ...t, repairInstructions: u }),
        (0, n.Kk)(o, (e) => {
          e.pullRequestMergeConflict = l
        }),
        (0, i.xJ)(),
        !0
      )
    }
    r.d(
      t,
      {},
      {
        AD: function (e, { baseBranch: t, conversationId: r, headBranch: n, pullRequestStatus: i, target: a }) {
          if (null == t || null == n || null == i.number) return !1
          let o = i.checks.filter((e) => "failing" === e.status),
            c = "conflicts" === i.mergeBlocker,
            d = (0, s.O6)(i.activityItems),
            g = d.length > 0
          return (
            (!g || null != r) &&
            (!c || null != i.url) &&
            (g &&
              (0, s.sK)(e, {
                baseBranch: t,
                comments: d,
                commitAndPush: !0,
                conversationId: r,
                focusComposer: 0 === o.length && !c,
                headBranch: n,
                number: i.number,
                repo: i.repo,
                target: a,
              }),
            o.length > 0 &&
              l(e, { baseBranch: t, checks: o, headBranch: n, number: i.number, repo: i.repo, target: a }),
            c && null != i.url && u(e, { baseBranch: t, headBranch: n, number: i.number, repo: i.repo, url: i.url }, a),
            !0)
          )
        },
        Qk: o,
        XW: l,
        wj: u,
      },
    )
  },
  yLY7(e, t, r) {
    let n = (0, r("ESTr").a)({
      name: "chevron-up-md-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.475098, y: 4.946289, width: 9.049683, height: 4.911621 },
        visualBounds: { x: 3.475098, y: 4.946289, width: 9.049683, height: 4.911621 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.475098, y: 4.946289, width: 9.049683, height: 4.911621 },
        center: { x: 7.99994, y: 7.4021 },
        insets: { top: 4.946289, right: 3.475219, bottom: 6.14209, left: 3.475098 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.99994, y: 7.4021 }, foreground: { x: 7.99994, y: 7.4021 } },
      },
      capabilities: ["icon"],
      body: '<path d="M11.6289 9.70417C11.8339 9.9092 12.166 9.9092 12.3711 9.70417C12.5761 9.49915 12.5761 9.16701 12.3711 8.96199L8.60641 5.19734C8.27129 4.86261 7.72863 4.86261 7.39352 5.19734L3.62887 8.96199C3.42384 9.16701 3.42384 9.49915 3.62887 9.70417C3.83389 9.9092 4.16603 9.9092 4.37105 9.70417L7.99996 6.07527L11.6289 9.70417Z" fill="currentColor"/>',
    })
    r.d(t, {}, { V: n })
  },
}
//# sourceMappingURL=331405.23feeb730d.js.map
