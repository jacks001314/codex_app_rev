export const __rspack_esm_ids = [40030]
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
    r.d(t, { C: () => _ })
    var n = r("zTeN"),
      i = r("ZU27"),
      s = r("Ot7V"),
      o = r("SGsN"),
      a = r("svjy"),
      l = r("i8Vs"),
      u = r("OWtl"),
      c = r("WwnD"),
      d = r("p45d"),
      g = r("rxoR"),
      h = r("SPnB"),
      m = r("nlNF"),
      p = r("fiGE"),
      f = r("Oj9r"),
      b = r("RxZZ"),
      v = r("pasN"),
      w = r("KH2l"),
      q = r("dvDp"),
      y = r("Jo4i"),
      R = r("Mhsw")
    function M(e, t, r, n, i = "task_link", s = "task_link" === i) {
      if (null == r || null == n || !e(w.Tm)) return { type: "unsupported" }
      if (s && (0, b.vq)(e)) {
        let i = "codex" === e(v.l),
          s = (0, q.$)(e)
        if (
          !i ||
          "code-review-tab" !== s ||
          ("client-local-thread" === t.routeKind && null == t.persistentWorkspace) ||
          e(f.Rj) ||
          !(0, R.K)(r, n)
        )
          return { type: "external", url: r, provider: n.provider }
      }
      let o = (0, p.mE)(r)?.preserveDestination === !0,
        a = (0, y.g)(e, "local", n, "task_pr" === i && !s)
      if ("loading" === a.status) return { type: "pending" }
      if ("unavailable" === a.status) {
        let e = r
        return (
          "task_pr" !== i || o || (e = "gitlab" === n.provider ? (0, l.Aq)(n.pullRequest) : (0, l.QC)(n.pullRequest)),
          "account" === a.reason
            ? { type: "unavailable", fallbackUrl: "gitlab.com" === n.pullRequest.hostname ? e : void 0 }
            : { type: "external", url: e, provider: n.provider }
        )
      }
      let { pullRequest: u, provider: c } = n,
        d = (0, l.QC)(u)
      return (
        "gitlab" === a.provider && (d = (0, l.gS)({ account: a.account, pullRequest: u })),
        { type: "open", provider: c, url: d, destinationUrl: o ? r : d }
      )
    }
    var x = r("fJxb"),
      k = r("SAl8"),
      A = r("eY8z")
    let C = (0, n.vP)(u.u, 0)
    function _(
      e,
      {
        pullRequestUrl: t,
        normalizedTarget: r,
        originHostId: n = "local",
        replaceTabId: u,
        source: p = "task_pr",
        respectLinkPreference: f = "task_link" === p,
      },
    ) {
      e.set(C, e.get(C) + 1)
      let v = void 0 === r && null != t ? (0, x.QL)(t) : (r ?? null),
        w = M(e.get, e.value, t, v, p, f)
      if ("pending" === w.type) {
        let r = e.get(C)
        return (
          !(async function (e, t, r, n, i, s = "task_link", o = "task_link" === s) {
            let a,
              l = (0, g.V)(),
              u = e.get(m.x2)?.key,
              c = e.get(h.chatGptAuthenticatedAccountId$),
              d = e.get(h.o8),
              p = (e) => (
                null == a &&
                  (0, b.vq)(e) &&
                  (a = {
                    provider: (0, b.CN)(e, l.gitHostingProvider),
                    linkTarget: (0, q.$)(e),
                    connectorId: (0, b.CN)(e, l.gitlabConnectorId),
                  }),
                n(e) ||
                  e(m.x2)?.key !== u ||
                  e(h.chatGptAuthenticatedAccountId$) !== c ||
                  e(h.o8) !== d ||
                  (null != a &&
                    ((0, b.CN)(e, l.gitHostingProvider) !== a.provider ||
                      (0, b.CN)(e, l.gitlabConnectorId) !== a.connectorId ||
                      (0, q.$)(e) !== a.linkTarget))
              ),
              f = p(e.get)
            try {
              if (
                (await e.when(({ get: n }) => (f = p(n)) || "pending" !== M(n, e.value, t, r, s, o).type),
                f || p(e.get))
              )
                return
              i(M(e.get, e.value, t, r, s, o))
              return
            } catch {
              if (f || p(e.get)) return
            }
            i({ type: "unavailable" })
          })(
            e,
            t,
            v,
            (e) => e(C) !== r,
            (t) => {
              y(t) ||
                "external" === t.type ||
                e
                  .get(o.Id)
                  .danger(
                    e
                      .get(a.g)
                      .formatMessage({
                        id: "thread.sidePanel.pullRequestTab.gitLabOpenFailed",
                        defaultMessage:
                          "Could not open this merge request. Check the selected GitLab connection and try again",
                        description: "Error after waiting for a GitLab connection to open an attached merge request",
                      }),
                    { errorAnalytics: { toastId: "thread.sidePanel.pullRequestTab.gitLabOpenFailed" } },
                  )
            },
            p,
            f,
          ),
          !0
        )
      }
      return y(
        "unavailable" === w.type && null != w.fallbackUrl
          ? { type: "external", url: w.fallbackUrl, provider: "gitlab" }
          : w,
      )
      function y(t) {
        if ("unsupported" === t.type || "unavailable" === t.type || "pending" === t.type) return !1
        if ("external" === t.type) {
          let r = (0, s.E0)({ href: t.url, initiator: "pull_request_link", hostId: n, originHostId: n }),
            i = (0, l.g0)(t.url)?.provider
          return (
            r && null != i && (0, k.X)(e, { type: "navigation", source: p, destination: i, provider: t.provider }),
            r
          )
        }
        let { url: r, destinationUrl: o } = t,
          a = `code-review:${r}`,
          g = e.get(i.It.tabById$, a)
        return (
          null != g && "url" in g.props && g.props.url === o && null == u
            ? (0, c.Mn)(e, g)
            : ((0, A.openCodeReviewTab)(e, { url: o, replaceTabId: u, tabId: a }),
              (0, k.X)(e, { type: "navigation", source: p, destination: "code_review", provider: t.provider })),
          "task_link" === p && "github" === t.provider && (0, d.E3)(e, a),
          !0
        )
      }
    }
  },
  EWTL(e, t, r) {
    var n = r("i5ac"),
      i = r.n(n),
      s = r("g3QY")
    function o(e) {
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
        GM: o,
        K: function (e) {
          return e.reviewThreadId ?? e.url ?? (0, s.y6)(e)
        },
        jX: function (e, t, r) {
          if ((0, s.y6)({ ...t, content: e.content }) !== (0, s.y6)(e)) return 0
          let n = o(e),
            i = (e) => null != r && e?.toLowerCase() === r.toLowerCase()
          if (null != e.replyToReviewThreadId)
            return t.reviewThreadId !== e.replyToReviewThreadId
              ? 0
              : null != t.replies
                ? t.replies.filter((e) => i(e.authorLogin) && e.body.trim() === n).length
                : (0, s.Rx)(t)
                    .slice(1)
                    .filter((e) => i(e.authorLogin) && e.text === n).length
          let a = (0, s.Rx)(t)[0]
          return a?.text === n && i(a.authorLogin ?? t.authorLogin) ? 1 : 0
        },
        qm: function ({ currentComments: e, nextComments: t }) {
          let r = new Set(e.map(s.y6)),
            n = t.filter((t) =>
              e.some((e) =>
                (function ({ currentComment: e, nextComment: t }) {
                  return (
                    null != e.replyToReviewThreadId &&
                    e.replyToReviewThreadId === t.replyToReviewThreadId &&
                    0 === o(e).length &&
                    o(t).length > 0 &&
                    e.position.path === t.position.path &&
                    e.position.side === t.position.side &&
                    e.position.line === t.position.line
                  )
                })({ currentComment: e, nextComment: t }),
              ),
            ),
            a = t.filter((e) => o(e).length > 0 && !r.has((0, s.y6)(e)))
          return i()([...n, ...a], s.y6)
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
      o = r("on57"),
      a = r("Sm6l")
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
            h,
            m,
            p,
            f,
            b,
            v,
            w,
            q = (0, i.c)(35)
          q[0] !== e
            ? (({
                children: t,
                collapseAt: c,
                icon: r,
                iconOnly: d,
                showIcon: g,
                loading: l,
                size: h,
                tooltipContent: m,
                ...u
              } = e),
              (q[0] = e),
              (q[1] = t),
              (q[2] = r),
              (q[3] = l),
              (q[4] = u),
              (q[5] = c),
              (q[6] = d),
              (q[7] = g),
              (q[8] = h),
              (q[9] = m))
            : ((t = q[1]),
              (r = q[2]),
              (l = q[3]),
              (u = q[4]),
              (c = q[5]),
              (d = q[6]),
              (g = q[7]),
              (h = q[8]),
              (m = q[9]))
          let y = void 0 === c ? "xs" : c,
            R = void 0 !== d && d,
            M = void 0 !== g && g,
            x = void 0 === h ? "default" : h,
            k = void 0 === m ? t : m,
            A = void 0 === m ? "target-overflows" : "default",
            C = l || void 0,
            _ = R ? "ghost" : u.color,
            j = R && "default" === x ? "compact" : x,
            S = R || u.uniform
          q[10] !== y || q[11] !== r || q[12] !== R || q[13] !== l || q[14] !== M
            ? ((p =
                !l &&
                null != r &&
                (0, n.jsx)("span", {
                  className: (0, o.A)(
                    R || M ? "inline-flex" : "hidden",
                    !R && !M && ("sm" === y ? "@max-sm/pr-actions:inline-flex" : "@max-xs/pr-actions:inline-flex"),
                  ),
                  children: r,
                })),
              (q[10] = y),
              (q[11] = r),
              (q[12] = R),
              (q[13] = l),
              (q[14] = M),
              (q[15] = p))
            : (p = q[15])
          let I = R && "sr-only",
            P = !R && null != r && ("sm" === y ? "@max-sm/pr-actions:sr-only" : "@max-xs/pr-actions:sr-only")
          return (
            q[16] !== I || q[17] !== P ? ((f = (0, o.A)(I, P)), (q[16] = I), (q[17] = P), (q[18] = f)) : (f = q[18]),
            q[19] !== t || q[20] !== f
              ? ((b = (0, n.jsx)("span", { "data-tooltip-enablement-target": !0, className: f, children: t })),
                (q[19] = t),
                (q[20] = f),
                (q[21] = b))
              : (b = q[21]),
            q[22] !== l ||
            q[23] !== u ||
            q[24] !== S ||
            q[25] !== p ||
            q[26] !== b ||
            q[27] !== C ||
            q[28] !== _ ||
            q[29] !== j
              ? ((v = (0, n.jsxs)(a.$, {
                  ...u,
                  "aria-busy": C,
                  color: _,
                  loading: l,
                  size: j,
                  uniform: S,
                  children: [p, b],
                })),
                (q[22] = l),
                (q[23] = u),
                (q[24] = S),
                (q[25] = p),
                (q[26] = b),
                (q[27] = C),
                (q[28] = _),
                (q[29] = j),
                (q[30] = v))
              : (v = q[30]),
            q[31] !== v || q[32] !== k || q[33] !== A
              ? ((w = (0, n.jsx)(s.m, { content: k, enabledWhen: A, children: v })),
                (q[31] = v),
                (q[32] = k),
                (q[33] = A),
                (q[34] = w))
              : (w = q[34]),
            w
          )
        },
      },
    )
  },
  maOS(e, t, r) {
    r.d(t, { B: () => Q })
    var n = r("ABep"),
      i = r("QosV"),
      s = r("zTeN"),
      o = r("DBCl"),
      a = r("zd8w"),
      l = r("Wf1j"),
      u = r("oyxz"),
      c = r("ChYf"),
      d = r("rVF8"),
      g = r("LrzQ"),
      h = r("EFj1"),
      m = r("Sm6l"),
      p = r("bqtn"),
      f = r("SGsN"),
      b = r("OWtl"),
      v = r("RxZZ"),
      w = r("B72h"),
      q = r("N6Z5"),
      y = r("SEJy"),
      R = r("dmx7"),
      M = r("Qgfj")
    let x = (0, M.YK)({
        checks_pending: {
          id: "codeReview.mergeReason.checks_pending",
          defaultMessage: "{count, plural, =0 {Checks pending} one {# check pending} other {# checks pending}}",
          description: "Merge blocker; count is the number of outstanding requirements, or zero when unknown",
        },
        checks_failed: {
          id: "codeReview.mergeReason.checks_failed",
          defaultMessage: "{count, plural, =0 {Checks failed} one {# check failed} other {# checks failed}}",
          description: "Merge blocker; count is the number of outstanding requirements, or zero when unknown",
        },
        check_set_incomplete: {
          id: "codeReview.mergeReason.checkSetIncomplete.counted",
          defaultMessage:
            "{count, plural, =0 {Waiting for the list of required checks} one {Waiting for the list of required checks} other {Waiting for the list of required checks (# requirements)}}",
          description:
            "Delta has not identified the required checks; count is the number of requirements, or zero when unknown",
        },
        checks_must_pass: {
          id: "codeReview.mergeReason.checks_must_pass.counted",
          defaultMessage:
            "{count, plural, =0 {Required checks must pass} one {Required checks must pass} other {Required checks must pass (# requirements)}}",
          description: "Merge blocker; count is the number of outstanding requirements, or zero when unknown",
        },
        approvals_missing: {
          id: "codeReview.mergeReason.approvals_missing.counted",
          defaultMessage:
            "{count, plural, =0 {Approval required} one {Approval required} other {# approvals required}}",
          description: "Merge blocker; count is the number of outstanding requirements, or zero when unknown",
        },
        owner_approval: {
          id: "codeReview.mergeReason.owner_approval.counted",
          defaultMessage:
            "{count, plural, =0 {Code owner approval required} one {Code owner approval required} other {# code owner approvals required}}",
          description: "Merge blocker; count is the number of outstanding requirements, or zero when unknown",
        },
        compliance_approval: {
          id: "codeReview.mergeReason.compliance_approval.counted",
          defaultMessage:
            "{count, plural, =0 {Compliance approval required} one {Compliance approval required} other {# compliance approvals required}}",
          description: "Merge blocker; count is the number of outstanding requirements, or zero when unknown",
        },
        conflict: {
          id: "codeReview.mergeReason.conflict.counted",
          defaultMessage:
            "{count, plural, =0 {Resolve merge conflicts} one {Resolve merge conflicts} other {Resolve merge conflicts (# requirements)}}",
          description: "Merge blocker; count is the number of outstanding requirements, or zero when unknown",
        },
        changes_requested: {
          id: "codeReview.mergeReason.changes_requested.counted",
          defaultMessage:
            "{count, plural, =0 {A reviewer requested changes} one {A reviewer requested changes} other {A reviewer requested changes (# requirements)}}",
          description: "Merge blocker; count is the number of outstanding requirements, or zero when unknown",
        },
        threads_unresolved: {
          id: "codeReview.mergeReason.threads_unresolved.counted",
          defaultMessage:
            "{count, plural, =0 {Resolve open review threads} one {Resolve open review threads} other {Resolve open review threads (# requirements)}}",
          description: "Merge blocker; count is the number of outstanding requirements, or zero when unknown",
        },
        permission_denied: {
          id: "codeReview.mergeReason.permission_denied.counted",
          defaultMessage:
            "{count, plural, =0 {You don’t have permission to merge} one {You don’t have permission to merge} other {You don’t have permission to merge (# requirements)}}",
          description: "Merge blocker; count is the number of outstanding requirements, or zero when unknown",
        },
        behind: {
          id: "codeReview.mergeReason.behind.counted",
          defaultMessage:
            "{count, plural, =0 {Update the branch before merging} one {Update the branch before merging} other {Update the branch before merging (# requirements)}}",
          description: "Merge blocker; count is the number of outstanding requirements, or zero when unknown",
        },
        blocked_review_changes_requested: {
          id: "codeReview.mergeReason.blockedWithReview.counted",
          defaultMessage:
            "{count, plural, =0 {Repository rules block this merge. A reviewer requested changes.} one {Repository rules block this merge. A reviewer requested changes.} other {Repository rules block this merge. A reviewer requested changes. (# requirements)}}",
          description:
            "GitHub reported a blocked merge and a changes-requested review; count is the number of requirements, or zero when unknown",
        },
        blocked: {
          id: "codeReview.mergeReason.blocked.counted",
          defaultMessage:
            "{count, plural, =0 {Repository rules block this merge} one {Repository rules block this merge} other {Repository rules block this merge (# requirements)}}",
          description: "Merge blocker; count is the number of outstanding requirements, or zero when unknown",
        },
        unstable: {
          id: "codeReview.mergeReason.unstable.counted",
          defaultMessage:
            "{count, plural, =0 {GitHub reports non-passing checks} one {GitHub reports non-passing checks} other {GitHub reports non-passing checks (# requirements)}}",
          description: "Merge blocker; count is the number of outstanding requirements, or zero when unknown",
        },
        analysis_pending: {
          id: "codeReview.mergeReason.analysis_pending.counted",
          defaultMessage:
            "{count, plural, =0 {Merge analysis is pending} one {Merge analysis is pending} other {Merge analysis is pending (# requirements)}}",
          description: "Merge blocker; count is the number of outstanding requirements, or zero when unknown",
        },
      }),
      k = new Map(Object.entries(x))
    var A = r("JNtf"),
      C = r("mUDD"),
      _ = r("bVeK"),
      j = r("EShr"),
      S = r("RNul"),
      I = r("wrup"),
      P = r("j9wQ"),
      D = r("OSYv"),
      T = r("slpy")
    let E = (0, r("iJY0").a)({
      name: "xmark-circle-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 13.050781 },
        visualBounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 13.050781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 13.050781 },
        center: { x: 8, y: 8 },
        insets: { top: 1.474609, right: 1.47461, bottom: 1.47461, left: 1.474609 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 }, foreground: { x: 8, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M9.63184 5.625C9.83687 5.42002 10.17 5.41999 10.375 5.625C10.5798 5.83003 10.5799 6.1632 10.375 6.36816L8.74219 7.99902L10.375 9.63184C10.5798 9.83688 10.5799 10.1701 10.375 10.375C10.1701 10.5799 9.83785 10.5797 9.63281 10.375L8 8.74219L6.36719 10.375C6.16214 10.5797 5.82991 10.5789 5.625 10.374C5.42038 10.1691 5.41943 9.83679 5.62402 9.63184L7.25586 7.99902L5.625 6.36816C5.42004 6.16315 5.42004 5.83001 5.625 5.625C5.83001 5.41999 6.16314 5.42002 6.36816 5.625L7.99902 7.25586L9.63184 5.625Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.47461C11.6037 1.47461 14.5254 4.39634 14.5254 8C14.5254 11.6037 11.6037 14.5254 8 14.5254C4.39634 14.5254 1.47461 11.6037 1.47461 8C1.47461 4.39634 4.39634 1.47461 8 1.47461ZM8 2.52539C4.97624 2.52539 2.52539 4.97624 2.52539 8C2.52539 11.0238 4.97624 13.4746 8 13.4746C11.0238 13.4746 13.4746 11.0238 13.4746 8C13.4746 4.97624 11.0238 2.52539 8 2.52539Z" fill="currentColor"/>',
    })
    var L = r("HOLv"),
      B = r("T3tn")
    function F(e) {
      let t,
        r,
        s,
        o,
        a,
        c,
        d,
        g,
        h,
        m,
        f,
        b,
        v,
        w = (0, i.c)(58),
        {
          primary: q,
          autoMergeDisabled: y,
          isAutoMergeDisabling: R,
          isAutoMergeEnabled: M,
          isAutoMergeEnabling: x,
          isAutoMergePending: k,
          isCheckingMergeability: A,
          isMergePending: C,
          mergeDisabled: j,
          mergeDisabledMessage: I,
          onAutoMergeChange: D,
          onMerge: F,
        } = e,
        G = (0, l.A)()
      if (C || x || R) {
        let e, t, r, i, s
        if (C) {
          let t
          ;(w[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(u.A, {
                id: "pullRequestsPage.detail.actions.merging",
                defaultMessage: "Merging…",
                description: "Status shown while a pull request is being merged",
              })),
              (w[0] = t))
            : (t = w[0]),
            (e = t))
        } else if (x) {
          let t
          ;(w[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(u.A, {
                id: "pullRequestsPage.detail.actions.enablingAutoMerge",
                defaultMessage: "Enabling auto-merge…",
                description: "Status shown while pull request auto-merge is being enabled",
              })),
              (w[1] = t))
            : (t = w[1]),
            (e = t))
        } else {
          let t
          ;(w[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(u.A, {
                id: "pullRequestsPage.detail.actions.disablingAutoMerge",
                defaultMessage: "Disabling auto-merge…",
                description: "Status shown while pull request auto-merge is being disabled",
              })),
              (w[2] = t))
            : (t = w[2]),
            (e = t))
        }
        let o = q && !R ? "primary" : "default"
        return (
          w[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(S.y, { className: "icon-sm" })),
              (r = (0, n.jsx)(S.y, { className: "icon-sm" })),
              (w[3] = t),
              (w[4] = r))
            : ((t = w[3]), (r = w[4])),
          w[5] !== e
            ? ((i = (0, n.jsx)(B.M, { icon: t, leadingIcon: r, children: e })), (w[5] = e), (w[6] = i))
            : (i = w[6]),
          w[7] !== o || w[8] !== i
            ? ((s = (0, n.jsx)(P.DW, { "aria-live": "polite", variant: o, disabled: !0, role: "status", children: i })),
              (w[7] = o),
              (w[8] = i),
              (w[9] = s))
            : (s = w[9]),
          s
        )
      }
      if (M) {
        let e, t, r, i
        w[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(u.A, {
              id: "pullRequestsPage.detail.actions.disableAutoMerge",
              defaultMessage: "Disable auto-merge",
              description: "Button label for disabling pull request auto-merge",
            })),
            (w[10] = e))
          : (e = w[10])
        let s = e
        return (
          w[11] !== D ? ((t = () => D(!1)), (w[11] = D), (w[12] = t)) : (t = w[12]),
          w[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, n.jsx)(B.M, { icon: (0, n.jsx)(L.I, { asset: E }), children: s })), (w[13] = r))
            : (r = w[13]),
          w[14] !== y || w[15] !== t
            ? ((i = (0, n.jsx)(T.m, {
                side: "bottom",
                content: s,
                enabledWhen: "target-overflows",
                children: (0, n.jsx)(P.DW, { disabled: y, onClick: t, children: r }),
              })),
              (w[14] = y),
              (w[15] = t),
              (w[16] = i))
            : (i = w[16]),
          i
        )
      }
      let U = (j && y) || void 0
      w[17] !== G || w[18] !== A
        ? ((t = A
            ? G.formatMessage({
                id: "codeReview.merge.checkingMergeability",
                defaultMessage: "Checking mergeability…",
                description: "Accessible name for the Merge menu while GitHub calculates mergeability",
              })
            : void 0),
          (w[17] = G),
          (w[18] = A),
          (w[19] = t))
        : (t = w[19])
      let N = q ? "primary" : "default",
        O = k || (j && y)
      ;(w[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, n.jsx)(_.SGL, {})), (s = (0, n.jsx)(_.SGL, {})), (w[20] = r), (w[21] = s))
        : ((r = w[20]), (s = w[21])),
        w[22] !== A
          ? ((o = A
              ? (0, n.jsx)(u.A, {
                  id: "codeReview.merge.checkingShort",
                  defaultMessage: "Checking…",
                  description: "Merge menu label while GitHub calculates mergeability",
                })
              : (0, n.jsx)(u.A, {
                  id: "pullRequestsPage.detail.actions.merge.trigger",
                  defaultMessage: "Merge",
                  description: "Button label that opens pull request merge actions",
                })),
            (w[22] = A),
            (w[23] = o))
          : (o = w[23]),
        w[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(_.HIf, { className: "opacity-70" })), (w[24] = a))
          : (a = w[24]),
        w[25] !== o
          ? ((c = (0, n.jsxs)(B.M, { leadingIcon: r, icon: s, children: [o, a] })), (w[25] = o), (w[26] = c))
          : (c = w[26]),
        w[27] !== U || w[28] !== t || w[29] !== N || w[30] !== O || w[31] !== c
          ? ((d = (0, n.jsx)(P.DW, { "aria-hidden": U, "aria-label": t, variant: N, disabled: O, children: c })),
            (w[27] = U),
            (w[28] = t),
            (w[29] = N),
            (w[30] = O),
            (w[31] = c),
            (w[32] = d))
          : (d = w[32]))
      let z = d
      if (j && y) {
        let e, t, r
        return null == I
          ? z
          : (w[33] !== G || w[34] !== I
              ? ((e = G.formatMessage(
                  {
                    id: "pullRequestsPage.detail.actions.merge.disabled.label",
                    defaultMessage: "Merge unavailable: {reason}",
                    description:
                      "Accessible label for a disabled merge button that includes the reason it is unavailable",
                  },
                  { reason: I },
                )),
                (w[33] = G),
                (w[34] = I),
                (w[35] = e))
              : (e = w[35]),
            w[36] !== z || w[37] !== e
              ? ((t = (0, n.jsx)("span", {
                  "aria-label": e,
                  "aria-disabled": "true",
                  className: "inline-flex",
                  role: "button",
                  tabIndex: 0,
                  children: z,
                })),
                (w[36] = z),
                (w[37] = e),
                (w[38] = t))
              : (t = w[38]),
            w[39] !== I || w[40] !== t
              ? ((r = (0, n.jsx)(T.m, { content: I, children: t })), (w[39] = I), (w[40] = t), (w[41] = r))
              : (r = w[41]),
            r)
      }
      let H = j || k || C,
        W = j && null != I,
        Q = j ? I : void 0
      return (
        w[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, n.jsx)(u.A, {
              id: "pullRequestsPage.detail.actions.merge.menuItem",
              defaultMessage: "Merge",
              description: "Menu item that merges the selected pull request",
            })),
            (w[42] = g))
          : (g = w[42]),
        w[43] !== F || w[44] !== H || w[45] !== W || w[46] !== Q
          ? ((h = (0, n.jsx)(p.ms.Item, {
              disabled: H,
              focusableWhenDisabled: W,
              tooltipText: Q,
              onSelect: F,
              children: g,
            })),
            (w[43] = F),
            (w[44] = H),
            (w[45] = W),
            (w[46] = Q),
            (w[47] = h))
          : (h = w[47]),
        w[48] !== D ? ((m = () => D(!0)), (w[48] = D), (w[49] = m)) : (m = w[49]),
        w[50] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, n.jsx)(u.A, {
              id: "pullRequestsPage.detail.actions.autoMerge.menuItem",
              defaultMessage: "Enable auto-merge",
              description: "Menu item that enables auto-merge for a pull request",
            })),
            (w[50] = f))
          : (f = w[50]),
        w[51] !== y || w[52] !== m
          ? ((b = (0, n.jsx)(p.ms.Item, { disabled: y, onSelect: m, children: f })),
            (w[51] = y),
            (w[52] = m),
            (w[53] = b))
          : (b = w[53]),
        w[54] !== z || w[55] !== h || w[56] !== b
          ? ((v = (0, n.jsxs)(p.Ab, { align: "end", triggerButton: z, children: [h, b] })),
            (w[54] = z),
            (w[55] = h),
            (w[56] = b),
            (w[57] = v))
          : (v = w[57]),
        v
      )
    }
    function G(e) {
      let t,
        r,
        s,
        o,
        a,
        c,
        d,
        g,
        h,
        f,
        b,
        v,
        w,
        q,
        y,
        R,
        M,
        x,
        k,
        T,
        E,
        L,
        G,
        N,
        O,
        z,
        H,
        W = (0, i.c)(145),
        {
          primary: Q,
          allowedMergeMethods: K,
          autoMergeDisabled: Z,
          autoMergeEnabled: $,
          error: V,
          isAutoMergeDisabling: J,
          isAutoMergeEnabling: Y,
          isAutoMergePending: X,
          isDraft: ee,
          isMarkReadyPending: et,
          isCheckingMergeability: er,
          isMergePending: en,
          isPending: ei,
          mergeDisabled: es,
          mergeDisabledMessage: eo,
          mergeMethod: ea,
          mergeOpen: el,
          menu: eu,
          isGitLab: ec,
          onAutoMergeChange: ed,
          onMarkReady: eg,
          onMerge: eh,
          onMergeMethodChange: em,
          onMergeOpenChange: ep,
        } = e,
        ef = void 0 !== eu && eu,
        eb = (0, l.A)(),
        ev = void 0 !== ec && ec ? "gitlab" : "github",
        ew = null == K || K.length > 1
      if (
        W[0] !== K ||
        W[1] !== Z ||
        W[2] !== $ ||
        W[3] !== V ||
        W[4] !== ew ||
        W[5] !== eb ||
        W[6] !== J ||
        W[7] !== Y ||
        W[8] !== X ||
        W[9] !== er ||
        W[10] !== ee ||
        W[11] !== et ||
        W[12] !== en ||
        W[13] !== ei ||
        W[14] !== ef ||
        W[15] !== es ||
        W[16] !== eo ||
        W[17] !== ea ||
        W[18] !== el ||
        W[19] !== ed ||
        W[20] !== eg ||
        W[21] !== eh ||
        W[22] !== em ||
        W[23] !== ep ||
        W[24] !== Q ||
        W[25] !== ev
      ) {
        h = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            i,
            l,
            m,
            M,
            x,
            k,
            D,
            T = (function (e) {
              switch (e) {
                case "gitlab":
                  return (0, n.jsx)(u.A, {
                    id: "pullRequestDetail.merge.withoutSquash",
                    defaultMessage: "Do not squash",
                    description:
                      "GitLab merge option that preserves separate commits instead of squashing them; the project still controls its merge strategy",
                  })
                case "github":
                  return (0, n.jsx)(u.A, {
                    id: "pullRequestDetail.merge.commit",
                    defaultMessage: "Merge commit",
                    description:
                      "GitHub merge-commit option that preserves the pull request's commits and creates a merge commit",
                  })
              }
            })(ev)
          ;(W[42] !== ev
            ? ((e = (function (e) {
                switch (e) {
                  case "gitlab":
                    return (0, n.jsx)(u.A, {
                      id: "pullRequestDetail.merge.confirmWithoutSquash",
                      defaultMessage: "Merge without squashing",
                      description:
                        "Confirm a GitLab merge without squashing commits; the project still controls its merge strategy",
                    })
                  case "github":
                    return (0, n.jsx)(u.A, {
                      id: "pullRequestDetail.merge.confirmMergeCommit",
                      defaultMessage: "Create merge commit",
                      description:
                        "Button to confirm merging a pull request while preserving its individual commits and creating a merge commit",
                    })
                }
              })(ev)),
              (W[42] = ev),
              (W[43] = e))
            : (e = W[43]),
            (s = e),
            W[44] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, n.jsx)(u.A, {
                  id: "pullRequestDetail.actions.markReady",
                  defaultMessage: "Mark ready",
                  description: "Primary toolbar action that marks the author's draft pull request ready for review",
                })),
                (W[44] = i))
              : (i = W[44]))
          let E = i
          if (ef && ee) {
            let e, t, r, i, s, o
            ;(W[45] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(_.ALZ, {})), (W[45] = e))
              : (e = W[45]),
              W[46] !== et
                ? ((t = et ? (0, n.jsx)(S.y, { className: "icon-sm" }) : void 0), (W[46] = et), (W[47] = t))
                : (t = W[47]),
              W[48] !== eg
                ? ((r = (e) => {
                    ;(e.preventDefault(), eg())
                  }),
                  (W[48] = eg),
                  (W[49] = r))
                : (r = W[49]),
              W[50] !== ei || W[51] !== t || W[52] !== r
                ? ((i = (0, n.jsx)(p.ms.Item, { disabled: ei, leftIcon: e, rightIcon: t, onSelect: r, children: E })),
                  (W[50] = ei),
                  (W[51] = t),
                  (W[52] = r),
                  (W[53] = i))
                : (i = W[53]),
              W[54] !== V
                ? ((s = null == V ? null : (0, n.jsx)(p.ms.Message, { role: "alert", tone: "error", children: V })),
                  (W[54] = V),
                  (W[55] = s))
                : (s = W[55]),
              W[56] !== i || W[57] !== s
                ? ((o = (0, n.jsxs)(n.Fragment, { children: [i, s] })), (W[56] = i), (W[57] = s), (W[58] = o))
                : (o = W[58]),
              (h = o))
            break e
          }
          ;(W[59] !== ep ? ((l = () => ep(!0)), (W[59] = ep), (W[60] = l)) : (l = W[60]),
            W[61] !== Z ||
            W[62] !== $ ||
            W[63] !== J ||
            W[64] !== Y ||
            W[65] !== X ||
            W[66] !== en ||
            W[67] !== es ||
            W[68] !== eo ||
            W[69] !== ed ||
            W[70] !== l
              ? ((m = {
                  autoMergeDisabled: Z,
                  isAutoMergeDisabling: J,
                  isAutoMergeEnabled: $,
                  isAutoMergeEnabling: Y,
                  isAutoMergePending: X,
                  isMergePending: en,
                  mergeDisabled: es,
                  mergeDisabledMessage: eo,
                  onAutoMergeChange: ed,
                  onMerge: l,
                }),
                (W[61] = Z),
                (W[62] = $),
                (W[63] = J),
                (W[64] = Y),
                (W[65] = X),
                (W[66] = en),
                (W[67] = es),
                (W[68] = eo),
                (W[69] = ed),
                (W[70] = l),
                (W[71] = m))
              : (m = W[71]))
          let L = m
          W[72] !== er || W[73] !== ef || W[74] !== L || W[75] !== Q
            ? ((M = ef
                ? (0, n.jsx)(I.M, { ...L, isDraft: !1, menuItem: !0 })
                : (0, n.jsx)(F, { ...L, primary: Q, isCheckingMergeability: er })),
              (W[72] = er),
              (W[73] = ef),
              (W[74] = L),
              (W[75] = Q),
              (W[76] = M))
            : (M = W[76])
          let G = M
          ;(W[77] !== V || W[78] !== el
            ? ((d =
                null == V || el
                  ? null
                  : (0, n.jsx)("span", {
                      className: "max-w-48 truncate text-xs text-danger",
                      role: "alert",
                      children: V,
                    })),
              (W[77] = V),
              (W[78] = el),
              (W[79] = d))
            : (d = W[79]),
            W[80] !== ee || W[81] !== et || W[82] !== ei || W[83] !== G || W[84] !== eg
              ? ((g = ee
                  ? (0, n.jsx)(P.DW, {
                      variant: "primary",
                      disabled: ei,
                      loading: et,
                      onClick: eg,
                      children: (0, n.jsx)(B.M, { icon: (0, n.jsx)(_.ALZ, {}), children: E }),
                    })
                  : G),
                (W[80] = ee),
                (W[81] = et),
                (W[82] = ei),
                (W[83] = G),
                (W[84] = eg),
                (W[85] = g))
              : (g = W[85]),
            (r = A.lG),
            (o = el),
            (a = !1),
            W[86] !== ei || W[87] !== ep
              ? ((c = (e) => {
                  ei || ep(e)
                }),
                (W[86] = ei),
                (W[87] = ep),
                (W[88] = c))
              : (c = W[88]),
            (t = C.R4),
            (f = "form"),
            (b = ei),
            W[89] !== ei || W[90] !== eh
              ? ((v = (e) => {
                  ;(e.preventDefault(), ei || eh())
                }),
                (W[89] = ei),
                (W[90] = eh),
                (W[91] = v))
              : (v = W[91]),
            W[92] !== ev ? ((x = U(ev)), (W[92] = ev), (W[93] = x)) : (x = W[93]),
            W[94] !== x
              ? ((w = (0, n.jsx)(A.L3, { className: "sr-only", children: x })), (W[94] = x), (W[95] = w))
              : (w = W[95]),
            W[96] !== ew
              ? ((q = (0, n.jsx)(A.rr, {
                  className: "sr-only",
                  children: ew
                    ? (0, n.jsx)(u.A, {
                        id: "pullRequestDetail.merge.description",
                        defaultMessage: "Choose a merge method and confirm.",
                        description:
                          "Accessible description for pull request merge confirmation when multiple merge methods are available",
                      })
                    : (0, n.jsx)(u.A, {
                        id: "pullRequestDetail.merge.description.singleMethod",
                        defaultMessage: "Confirm the selected merge method.",
                        description:
                          "Accessible description for pull request merge confirmation when the repository permits only one merge method",
                      }),
                })),
                (W[96] = ew),
                (W[97] = q))
              : (q = W[97]),
            W[98] !== ev ? ((k = U(ev)), (W[98] = ev), (W[99] = k)) : (k = W[99]),
            W[100] !== ev
              ? ((D = (function (e) {
                  switch (e) {
                    case "gitlab":
                      return (0, n.jsx)(u.A, {
                        id: "pullRequestDetail.merge.projectDefaultSubtitle",
                        defaultMessage: "GitLab will merge only if the displayed head commit still matches",
                        description: "Safety explanation in the GitLab merge request confirmation",
                      })
                    case "github":
                      return (0, n.jsx)(u.A, {
                        id: "pullRequestDetail.merge.subtitle",
                        defaultMessage: "GitHub will merge only if the displayed head commit still matches.",
                        description: "Safety explanation in the pull request merge confirmation",
                      })
                  }
                })(ev)),
                (W[100] = ev),
                (W[101] = D))
              : (D = W[101]),
            W[102] !== k || W[103] !== D
              ? ((y = (0, n.jsx)(C.OO, { children: (0, n.jsx)(C.c7, { title: k, subtitle: D }) })),
                (W[102] = k),
                (W[103] = D),
                (W[104] = y))
              : (y = W[104]),
            (R = ew
              ? (0, n.jsx)(C.OO, {
                  children: (0, n.jsx)(j.T, {
                    ariaLabel: eb.formatMessage({
                      id: "pullRequestDetail.merge.method",
                      defaultMessage: "Merge method",
                      description:
                        "Accessible label for choosing how GitHub combines a pull request's commits when merging",
                    }),
                    options: [
                      {
                        id: "squash",
                        label: (0, n.jsx)(u.A, {
                          id: "pullRequestDetail.merge.squash",
                          defaultMessage: "Squash",
                          description:
                            "GitHub squash-merge option that combines the pull request's commits into one commit",
                        }),
                      },
                      { id: "merge", label: T },
                    ].filter((e) => {
                      let { id: t } = e
                      return null == K || K.includes(t)
                    }),
                    selectedId: ea,
                    onSelect: em,
                  }),
                })
              : null))
        }
        ;((W[0] = K),
          (W[1] = Z),
          (W[2] = $),
          (W[3] = V),
          (W[4] = ew),
          (W[5] = eb),
          (W[6] = J),
          (W[7] = Y),
          (W[8] = X),
          (W[9] = er),
          (W[10] = ee),
          (W[11] = et),
          (W[12] = en),
          (W[13] = ei),
          (W[14] = ef),
          (W[15] = es),
          (W[16] = eo),
          (W[17] = ea),
          (W[18] = el),
          (W[19] = ed),
          (W[20] = eg),
          (W[21] = eh),
          (W[22] = em),
          (W[23] = ep),
          (W[24] = Q),
          (W[25] = ev),
          (W[26] = t),
          (W[27] = r),
          (W[28] = s),
          (W[29] = o),
          (W[30] = a),
          (W[31] = c),
          (W[32] = d),
          (W[33] = g),
          (W[34] = h),
          (W[35] = f),
          (W[36] = b),
          (W[37] = v),
          (W[38] = w),
          (W[39] = q),
          (W[40] = y),
          (W[41] = R))
      } else
        ((t = W[26]),
          (r = W[27]),
          (s = W[28]),
          (o = W[29]),
          (a = W[30]),
          (c = W[31]),
          (d = W[32]),
          (g = W[33]),
          (h = W[34]),
          (f = W[35]),
          (b = W[36]),
          (v = W[37]),
          (w = W[38]),
          (q = W[39]),
          (y = W[40]),
          (R = W[41]))
      return h !== Symbol.for("react.early_return_sentinel")
        ? h
        : (W[105] !== V
            ? ((M =
                null == V
                  ? null
                  : (0, n.jsx)(C.OO, {
                      children: (0, n.jsx)("div", { className: "text-sm text-danger", role: "alert", children: V }),
                    })),
              (W[105] = V),
              (W[106] = M))
            : (M = W[106]),
          W[107] === Symbol.for("react.memo_cache_sentinel")
            ? ((x = (0, n.jsx)(_.Gmf, {})), (W[107] = x))
            : (x = W[107]),
          W[108] !== ep
            ? ((k = () => {
                ep(!1)
              }),
              (W[108] = ep),
              (W[109] = k))
            : (k = W[109]),
          W[110] === Symbol.for("react.memo_cache_sentinel")
            ? ((T = (0, n.jsx)(u.A, {
                id: "pullRequestDetail.merge.cancel",
                defaultMessage: "Cancel",
                description: "Button to cancel merging a pull request",
              })),
              (W[110] = T))
            : (T = W[110]),
          W[111] !== ei || W[112] !== k
            ? ((E = (0, n.jsx)(D.b, {
                color: "secondary",
                icon: x,
                iconOnly: !0,
                disabled: ei,
                onClick: k,
                children: T,
              })),
              (W[111] = ei),
              (W[112] = k),
              (W[113] = E))
            : (E = W[113]),
          W[114] !== s || W[115] !== ea
            ? ((L =
                "squash" === ea
                  ? (0, n.jsx)(u.A, {
                      id: "pullRequestDetail.merge.confirmSquash",
                      defaultMessage: "Squash and merge",
                      description:
                        "Button to confirm combining a pull request's commits into one commit and merging it",
                    })
                  : s),
              (W[114] = s),
              (W[115] = ea),
              (W[116] = L))
            : (L = W[116]),
          W[117] !== ei || W[118] !== es || W[119] !== L
            ? ((G = (0, n.jsx)(m.$, { color: "primary", disabled: es, loading: ei, type: "submit", children: L })),
              (W[117] = ei),
              (W[118] = es),
              (W[119] = L),
              (W[120] = G))
            : (G = W[120]),
          W[121] !== E || W[122] !== G
            ? ((N = (0, n.jsx)(C.OO, { children: (0, n.jsxs)(C.Es, { children: [E, G] }) })),
              (W[121] = E),
              (W[122] = G),
              (W[123] = N))
            : (N = W[123]),
          W[124] !== t ||
          W[125] !== M ||
          W[126] !== N ||
          W[127] !== f ||
          W[128] !== b ||
          W[129] !== v ||
          W[130] !== w ||
          W[131] !== q ||
          W[132] !== y ||
          W[133] !== R
            ? ((O = (0, n.jsxs)(t, { as: f, "aria-busy": b, onSubmit: v, children: [w, q, y, R, M, N] })),
              (W[124] = t),
              (W[125] = M),
              (W[126] = N),
              (W[127] = f),
              (W[128] = b),
              (W[129] = v),
              (W[130] = w),
              (W[131] = q),
              (W[132] = y),
              (W[133] = R),
              (W[134] = O))
            : (O = W[134]),
          W[135] !== r || W[136] !== o || W[137] !== a || W[138] !== c || W[139] !== O
            ? ((z = (0, n.jsx)(r, { open: o, showDialogClose: a, onOpenChange: c, children: O })),
              (W[135] = r),
              (W[136] = o),
              (W[137] = a),
              (W[138] = c),
              (W[139] = O),
              (W[140] = z))
            : (z = W[140]),
          W[141] !== d || W[142] !== g || W[143] !== z
            ? ((H = (0, n.jsxs)(n.Fragment, { children: [d, g, z] })),
              (W[141] = d),
              (W[142] = g),
              (W[143] = z),
              (W[144] = H))
            : (H = W[144]),
          H)
    }
    function U(e) {
      switch (e) {
        case "gitlab":
          return (0, n.jsx)(u.A, {
            id: "codeReview.gitlab.mergeTitle",
            defaultMessage: "Merge this merge request",
            description: "Title of the confirmation dialog for merging a GitLab merge request",
          })
        case "github":
          return (0, n.jsx)(u.A, {
            id: "pullRequestDetail.merge.title",
            defaultMessage: "Merge pull request",
            description: "Title for the pull request merge confirmation",
          })
      }
    }
    var N = r("CASd"),
      O = r("ZaUy"),
      z = r("wKuj")
    let H = (0, M.YK)({
      draft: {
        id: "pullRequestSidePanel.status.draft",
        defaultMessage: "Draft",
        description: "Draft pull request status option",
      },
      open: {
        id: "pullRequestDetail.header.openState",
        defaultMessage: "Open",
        description: "Status of a pull request that is open and not a draft",
      },
      closed: {
        id: "pullRequestSidePanel.status.close",
        defaultMessage: "Closed",
        description: "Closed pull request status option",
      },
    })
    function W(e) {
      let t,
        r,
        s,
        o,
        a,
        u = (0, i.c)(23),
        {
          provider: c,
          disabled: d,
          menu: g,
          handoff: h,
          pendingStatus: m,
          isInMergeQueue: f,
          status: b,
          onStatusChange: v,
        } = e,
        w = void 0 !== d && d,
        q = void 0 === m ? null : m,
        y = (0, l.A)(),
        R = h ?? H
      ;(u[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = ["draft", "open", "closed"]), (u[0] = t)) : (t = u[0]),
        u[1] !== w || u[2] !== y || u[3] !== R || u[4] !== v || u[5] !== q || u[6] !== b
          ? ((r = t.map((e) => {
              let t = R[e]
              if (null == t) return null
              let r = q === e,
                i = b === e
              return (0, n.jsx)(
                p.ms.Item,
                {
                  "aria-busy": r || void 0,
                  disabled: w || i || ("closed" === b && "draft" === e),
                  focusableWhenDisabled: r,
                  rightIcon: r
                    ? (0, n.jsx)(S.y, { className: "icon-xs" })
                    : i && (0, n.jsx)(L.I, { "aria-hidden": !1, asset: O.G }),
                  onSelect: () => v(e),
                  children: y.formatMessage(t),
                },
                e,
              )
            })),
            (u[1] = w),
            (u[2] = y),
            (u[3] = R),
            (u[4] = v),
            (u[5] = q),
            (u[6] = b),
            (u[7] = r))
          : (r = u[7]))
      let M = r
      if (void 0 !== g && g) {
        let e
        return (u[8] !== M ? ((e = (0, n.jsx)(n.Fragment, { children: M })), (u[8] = M), (u[9] = e)) : (e = u[9]), e)
      }
      u[10] !== y || u[11] !== c
        ? ((s = (function (e, t) {
            switch (t) {
              case "gitlab":
                return e.formatMessage({
                  id: "codeReview.gitlab.states.statusChangeLabel",
                  defaultMessage: "Change merge request status",
                  description: "Accessible description for the GitLab merge request status dropdown",
                })
              case "github":
                return e.formatMessage({
                  id: "pullRequestSidePanel.status.change",
                  defaultMessage: "Change pull request status",
                  description: "Accessible label for the pull request status dropdown",
                })
            }
          })(y, c)),
          (u[10] = y),
          (u[11] = c),
          (u[12] = s))
        : (s = u[12])
      let x = null != q
      return (
        u[13] !== w || u[14] !== f || u[15] !== b || u[16] !== s || u[17] !== x
          ? ((o = (0, n.jsx)(z.i, {
              interactive: !0,
              "aria-description": s,
              disabled: w,
              loading: x,
              isInMergeQueue: f,
              status: b,
            })),
            (u[13] = w),
            (u[14] = f),
            (u[15] = b),
            (u[16] = s),
            (u[17] = x),
            (u[18] = o))
          : (o = u[18]),
        u[19] !== w || u[20] !== M || u[21] !== o
          ? ((a = (0, n.jsx)(p.Ab, { contentWidth: "xs", disabled: w, triggerButton: o, children: M })),
            (u[19] = w),
            (u[20] = M),
            (u[21] = o),
            (u[22] = a))
          : (a = u[22]),
        a
      )
    }
    function Q(e) {
      let t,
        r,
        o,
        a = (0, i.c)(15),
        { account: l, detail: u, placement: c, menu: g, surface: h, unavailable: m } = e,
        p = void 0 !== g && g,
        f = void 0 === h ? "pull_request_page" : h,
        b = void 0 === m ? null : m
      a[0] !== l || a[1] !== u.pullRequest
        ? ((t = { account: l, pullRequest: u.pullRequest }), (a[0] = l), (a[1] = u.pullRequest), (a[2] = t))
        : (t = a[2])
      let v = !0 === (0, s._U)(R.F, t).canUpdate
      if ("locked" === u.state) return b
      let w = null
      if ("gitlab" !== u.provider && !1 === u.isAuthor) {
        let e
        ;(a[3] !== u
          ? ((e = (function (e) {
              if ("closed" === e.state) return e.viewerCanReopen ? { open: d.b.reopen } : {}
              if ("open" !== e.state) return {}
              let t = {}
              return (
                e.hasWritePermission && (e.isDraft ? (t.open = d.b.ready) : (t.draft = d.b.draft)),
                e.viewerCanClose && (t.closed = d.b.close),
                t
              )
            })(u)),
            (a[3] = u),
            (a[4] = e))
          : (e = a[4]),
          (w = e),
          (r =
            "status" === c
              ? Object.keys(w).length > 0
              : "open" === u.state && !u.isDraft && (!0 === u.hasWritePermission || !0 === u.canManageAutoMerge)))
      } else
        r =
          "status" === c
            ? v && ((0, y.dA)(l) || !0 === u.isAuthor)
            : "open" === u.state && ((0, y.dA)(l) ? !u.isDraft || v : !0 === u.isAuthor)
      if (!r) {
        let e
        if (null != b || "header" === c) return b
        let t = "gitlab" === u.provider ? void 0 : u.isInMergeQueue,
          r = "open" === u.state && u.isDraft ? "draft" : u.state
        return (
          a[5] !== t || a[6] !== r
            ? ((e = (0, n.jsx)(z.i, { isInMergeQueue: t, status: r })), (a[5] = t), (a[6] = r), (a[7] = e))
            : (e = a[7]),
          e
        )
      }
      return (
        a[8] !== l || a[9] !== u || a[10] !== w || a[11] !== p || a[12] !== c || a[13] !== f
          ? ((o = (0, n.jsx)(K, { account: l, detail: u, placement: c, menu: p, handoff: w, surface: f })),
            (a[8] = l),
            (a[9] = u),
            (a[10] = w),
            (a[11] = p),
            (a[12] = c),
            (a[13] = f),
            (a[14] = o))
          : (o = a[14]),
        o
      )
    }
    function K(e) {
      let t,
        d,
        R,
        M,
        A,
        C,
        _,
        j,
        S,
        I,
        P,
        D,
        T,
        E,
        L,
        B,
        F,
        U,
        O = (0, i.c)(118),
        { account: z, detail: H, placement: Q, menu: K, handoff: Z, surface: $ } = e,
        V = (0, s.gh)(b.u),
        J = (0, l.A)()
      O[0] !== z || O[1] !== H.pullRequest
        ? ((t = { account: z, pullRequest: H.pullRequest }), (O[0] = z), (O[1] = H.pullRequest), (O[2] = t))
        : (t = O[2])
      let Y = t
      O[3] !== H || O[4] !== Y ? ((d = { request: Y, detail: H }), (O[3] = H), (O[4] = Y), (O[5] = d)) : (d = O[5])
      let X = (0, s._U)(w.o, d),
        ee = X.data,
        et = (0, s._U)(q.Kc, Y),
        er = (0, s._U)(q.RR, Y),
        en = (0, s._U)(q.Cn, Y),
        [ei, es] = (0, a.useState)(!1),
        [eo, ea] = (0, a.useState)(H.headRevision),
        [el, eu] = (0, a.useState)(null),
        [ec, ed] = (0, a.useState)(!1),
        eg = (0, v.iK)(o.Ugj.pullRequestMergeMethod),
        [eh, em] = (0, a.useState)(null)
      O[6] !== z ||
      O[7] !== ee?.allowedMergeMethods?.length ||
      O[8] !== ee?.canMerge ||
      O[9] !== ee?.ciStatus ||
      O[10] !== ee?.mergeBlocker ||
      O[11] !== H.headRevision ||
      O[12] !== H.state ||
      O[13] !== et
        ? ((R =
            "open" !== H.state ||
            ee?.mergeBlocker != null ||
            ((0, y.dA)(z) && (ee?.ciStatus === "failing" || ee?.ciStatus === "pending")) ||
            ee?.allowedMergeMethods?.length === 0 ||
            !ee?.canMerge ||
            null == H.headRevision ||
            et),
          (O[6] = z),
          (O[7] = ee?.allowedMergeMethods?.length),
          (O[8] = ee?.canMerge),
          (O[9] = ee?.ciStatus),
          (O[10] = ee?.mergeBlocker),
          (O[11] = H.headRevision),
          (O[12] = H.state),
          (O[13] = et),
          (O[14] = R))
        : (R = O[14])
      let ep = R,
        ef = er.isPending && er.variables?.action === "toggle-auto-merge" ? er.variables.enabled : null,
        eb = er.isPending ? er.variables?.action : null,
        ev = null
      "mark-draft" === eb
        ? (ev = "draft")
        : "close" === eb
          ? (ev = "closed")
          : ("mark-ready" === eb || "reopen" === eb || "reopen-ready" === eb) && (ev = "open")
      let ew = ef ?? ee?.isAutoMergeEnabled === !0,
        eq =
          "open" !== H.state ||
          (!ew && (H.isDraft || null == H.headRevision || ee?.allowedMergeMethods?.length === 0)) ||
          (ew ? !ee?.canCancelAutoMerge : !ee?.canScheduleAutoMerge) ||
          et,
        ey = ec ? "squash" : (el ?? eg ?? "merge")
      O[15] !== ee || O[16] !== ey || O[17] !== ec
        ? ((M =
            ec || ee?.allowedMergeMethods == null || ee?.allowedMergeMethods.includes(ey)
              ? ey
              : (ee?.allowedMergeMethods[0] ?? ey)),
          (O[15] = ee),
          (O[16] = ey),
          (O[17] = ec),
          (O[18] = M))
        : (M = O[18])
      let eR = M,
        eM = "closed" === H.state ? "closed" : H.isDraft ? "draft" : "open"
      O[19] !== H.headRevision
        ? ((A = () => {
            ;(em(null), ea(H.headRevision), es(!0))
          }),
          (O[19] = H.headRevision),
          (O[20] = A))
        : (A = O[20])
      let ex =
        "header" === Q && !K && (!0 === H.isAuthor || null != Z) && "open" === H.state && !H.isDraft && !ew && !ep
      ;(O[21] !== ex ? ((C = { enabled: ex }), (O[21] = ex), (O[22] = C)) : (C = O[22]),
        (0, h.K)("git.mergePullRequest", A, C),
        O[23] !== Q || O[24] !== V
          ? ((_ = function (e) {
              ;(em(e),
                "status" === Q &&
                  V.get(f.Id).danger(e, { errorAnalytics: { toastId: "pullRequestDetailActions.showError" } }))
            }),
            (O[23] = Q),
            (O[24] = V),
            (O[25] = _))
          : (_ = O[25]))
      let ek = _
      O[26] !== J || O[27] !== eg || O[28] !== V || O[29] !== ec
        ? ((j = function () {
            ec &&
              "squash" !== eg &&
              (0, v.gc)(V, o.Ugj.pullRequestMergeMethod, "squash").catch(() => {
                V.get(f.Id).danger(
                  J.formatMessage({
                    id: "pullRequestDetail.actions.squashPreferenceError",
                    defaultMessage: "Couldn’t save squash as your default merge method",
                    description:
                      "Toast shown when saving squash as the preferred pull request merge method fails after a successful pull request action",
                  }),
                  { errorAnalytics: { toastId: "pullRequestDetail.actions.squashPreferenceError" } },
                )
              })
          }),
          (O[26] = J),
          (O[27] = eg),
          (O[28] = V),
          (O[29] = ec),
          (O[30] = j))
        : (j = O[30])
      let eA = j
      O[31] !== z ||
      O[32] !== H ||
      O[33] !== Z ||
      O[34] !== Y ||
      O[35] !== V ||
      O[36] !== ek ||
      O[37] !== eM ||
      O[38] !== $
        ? ((S = function (e) {
            let t = (0, N.U$)(eM, e, H.isDraft && null == Z)
            ;(em(null),
              (0, g.H)(V, {
                account: z,
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
                item: H,
                surface: $,
              }),
              V.get(q.RR, Y)
                .mutateAsync({ ...Y, action: t })
                .catch((e) => {
                  ek(e.message)
                }))
          }),
          (O[31] = z),
          (O[32] = H),
          (O[33] = Z),
          (O[34] = Y),
          (O[35] = V),
          (O[36] = ek),
          (O[37] = eM),
          (O[38] = $),
          (O[39] = S))
        : (S = O[39])
      let eC = S
      O[40] !== J || O[41] !== eR || O[42] !== ek
        ? ((I = function (e, t) {
            if (t && "merge" === eR && /merge commits are not allowed on this repository/i.test(e.message)) {
              ;(ed(!0),
                ek(
                  J.formatMessage({
                    id: "pullRequestDetail.actions.repoRestrictionError",
                    defaultMessage: "Merge commits are disabled in this repository; try again with squash",
                    description:
                      "Error shown when a repository disallows merge commits and the next pull request action will use squash",
                  }),
                ))
              return
            }
            ek(e.message)
          }),
          (O[40] = J),
          (O[41] = eR),
          (O[42] = ek),
          (O[43] = I))
        : (I = O[43])
      let e_ = I
      O[44] !== z ||
      O[45] !== ee?.headRevision ||
      O[46] !== H ||
      O[47] !== Y ||
      O[48] !== eR ||
      O[49] !== eA ||
      O[50] !== V ||
      O[51] !== e_ ||
      O[52] !== $
        ? ((P = function (e) {
            ;(em(null),
              (0, g.H)(V, { account: z, action: e ? "enable_auto_merge" : "disable_auto_merge", item: H, surface: $ }),
              V.get(q.RR, Y)
                .mutateAsync(
                  (0, y.dA)(z)
                    ? {
                        ...Y,
                        account: z,
                        action: "toggle-auto-merge",
                        enabled: e,
                        mergeMethod: eR,
                        expectedHeadRevision: H.headRevision ?? ee?.headRevision ?? void 0,
                      }
                    : { ...Y, account: z, action: "toggle-auto-merge", enabled: e, mergeMethod: eR },
                )
                .then(() => {
                  ;(e && eA(), ed(!1))
                })
                .catch((t) => {
                  e_(t, e)
                }))
          }),
          (O[44] = z),
          (O[45] = ee?.headRevision),
          (O[46] = H),
          (O[47] = Y),
          (O[48] = eR),
          (O[49] = eA),
          (O[50] = V),
          (O[51] = e_),
          (O[52] = $),
          (O[53] = P))
        : (P = O[53])
      let ej = P
      O[54] !== z ||
      O[55] !== H ||
      O[56] !== Z ||
      O[57] !== Y ||
      O[58] !== ep ||
      O[59] !== eR ||
      O[60] !== eA ||
      O[61] !== Q ||
      O[62] !== eo ||
      O[63] !== V ||
      O[64] !== e_ ||
      O[65] !== $
        ? ((D = function () {
            if (ep) return
            let e = "header" === Q && ("gitlab" === H.provider || null != Z) ? eo : H.headRevision
            null != e &&
              (em(null),
              (0, g.H)(V, { account: z, action: "merge", item: H, surface: $ }),
              V.get(q.Cn, Y)
                .mutateAsync({
                  expectedHeadRevision: e,
                  mergeMethod: eR,
                  onAccepted: () => {
                    V.get(c.G, { name: "toys.confetti" }).isCapable &&
                      (async function () {
                        let { fireConfettiCannon: e } = await r.e(86237).then(r.bind(r, "MqfT"))
                        e()
                      })()
                  },
                })
                .then(() => {
                  ;(eA(), ed(!1), es(!1))
                })
                .catch((e) => {
                  e_(e, !0)
                }))
          }),
          (O[54] = z),
          (O[55] = H),
          (O[56] = Z),
          (O[57] = Y),
          (O[58] = ep),
          (O[59] = eR),
          (O[60] = eA),
          (O[61] = Q),
          (O[62] = eo),
          (O[63] = V),
          (O[64] = e_),
          (O[65] = $),
          (O[66] = D))
        : (D = O[66])
      let eS = D
      if ("status" === Q) {
        let e,
          t = (0, y.dA)(z) ? "gitlab" : "github",
          r = "gitlab" === H.provider ? void 0 : H.isInMergeQueue
        return (
          O[67] !== Z ||
          O[68] !== et ||
          O[69] !== K ||
          O[70] !== ev ||
          O[71] !== eM ||
          O[72] !== t ||
          O[73] !== r ||
          O[74] !== eC
            ? ((e = (0, n.jsx)(W, {
                menu: K,
                provider: t,
                disabled: et,
                handoff: Z,
                pendingStatus: ev,
                isInMergeQueue: r,
                status: eM,
                onStatusChange: eC,
              })),
              (O[67] = Z),
              (O[68] = et),
              (O[69] = K),
              (O[70] = ev),
              (O[71] = eM),
              (O[72] = t),
              (O[73] = r),
              (O[74] = eC),
              (O[75] = e))
            : (e = O[75]),
          e
        )
      }
      if (null != X.error) {
        let e, t
        O[76] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(u.A, {
              id: "pullRequestDetail.actions.reload",
              defaultMessage: "Reload merge actions",
              description: "Retry loading the permissions and merge status for this pull request",
            })),
            (O[76] = e))
          : (e = O[76])
        let r = e
        if (K) {
          let e
          return (
            O[77] !== X
              ? ((e = (0, n.jsx)(p.ms.Item, {
                  onSelect: (e) => {
                    ;(e.preventDefault(), X.refetch?.())
                  },
                  children: r,
                })),
                (O[77] = X),
                (O[78] = e))
              : (e = O[78]),
            e
          )
        }
        return (
          O[79] !== X
            ? ((t = (0, n.jsx)(m.$, { color: "secondary", onClick: () => void X.refetch?.(), children: r })),
              (O[79] = X),
              (O[80] = t))
            : (t = O[80]),
          t
        )
      }
      let eI = null == Z,
        eP = ee?.allowedMergeMethods,
        eD = !1 === ef,
        eT = !0 === ef,
        eE = er.isPending,
        eL = H.isDraft,
        eB = "mark-ready" === eb,
        eF = en.isPending,
        eG = "gitlab" !== H.provider && ee?.mergeBlocker === "unknown"
      ;(O[81] !== z ? ((T = (0, y.dA)(z) ? "gitlab" : "github"), (O[81] = z), (O[82] = T)) : (T = O[82]),
        O[83] !== ee || O[84] !== H || O[85] !== J || O[86] !== et || O[87] !== T
          ? ((E = (function (e, t, r, n, i) {
              if (r)
                switch (i) {
                  case "gitlab":
                    return n.formatMessage({
                      id: "codeReview.gitlab.mergePending",
                      defaultMessage: "Another merge request update is in progress",
                      description:
                        "Tooltip explaining why merging is disabled while another update to this merge request is running",
                    })
                  case "github":
                    return n.formatMessage({
                      id: "pullRequestDetail.actions.merge.disabled.pending",
                      defaultMessage: "Another pull request update is in progress",
                      description:
                        "Tooltip explaining why the merge button is disabled while another pull request update is running",
                    })
                }
              if ("closed" === e.state)
                switch (i) {
                  case "gitlab":
                    return n.formatMessage({
                      id: "codeReview.gitlab.mergeClosed",
                      defaultMessage: "Reopen this merge request before merging",
                      description: "Tooltip explaining why a closed GitLab merge request cannot be merged",
                    })
                  case "github":
                    return n.formatMessage({
                      id: "pullRequestDetail.actions.merge.disabled.closed",
                      defaultMessage: "Reopen this pull request before merging",
                      description: "Tooltip explaining why a closed pull request cannot be merged",
                    })
                }
              if (e.isDraft)
                switch (i) {
                  case "gitlab":
                    return n.formatMessage({
                      id: "codeReview.gitlab.mergeDraft",
                      defaultMessage: "Mark this merge request ready for review before merging",
                      description: "Tooltip explaining why a draft GitLab merge request cannot be merged",
                    })
                  case "github":
                    return n.formatMessage({
                      id: "pullRequestDetail.actions.merge.disabled.draft",
                      defaultMessage: "Mark this pull request ready for review before merging",
                      description: "Tooltip explaining why a draft pull request cannot be merged",
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
                    i.push(e.formatMessage(x[r], { count: s }))
                  }
                  for (let { code: t, subject: r, count: s } of n) {
                    if ("checks_failed" === t || "checks_pending" === t) continue
                    let n = k.get(t)
                    if (n) {
                      i.push(e.formatMessage(n, { count: s ?? 0 }))
                      continue
                    }
                    let o = t.replaceAll("_", " "),
                      a = r && !/^checks?\//.test(r) ? r : null
                    a && null != s && s > 1
                      ? i.push(
                          e.formatMessage(
                            {
                              id: "codeReview.mergeReason.unknownSubjectAndCount",
                              defaultMessage: "{reason} ({subject}) ({count, number} requirements)",
                              description:
                                "Unknown merge blocker code, rule name, and number of outstanding requirements",
                            },
                            { reason: o, subject: a, count: s },
                          ),
                        )
                      : a
                        ? i.push(
                            e.formatMessage(
                              {
                                id: "codeReview.mergeReason.subject",
                                defaultMessage: "{reason} ({subject})",
                                description: "Unknown merge blocker code and rule name",
                              },
                              { reason: o, subject: a },
                            ),
                          )
                        : null != s && s > 1
                          ? i.push(
                              e.formatMessage(
                                {
                                  id: "codeReview.mergeReason.count",
                                  defaultMessage: "{reason} ({count, number} requirements)",
                                  description: "Unknown merge blocker code and number of outstanding requirements",
                                },
                                { reason: o, count: s },
                              ),
                            )
                          : i.push(o)
                  }
                  return e.formatList([...new Set(i)], { type: "conjunction" })
                })(n, t.mergeBlockReasons, "conflicts" === t.mergeBlocker)
              if (t?.mergeBlocker === "conflicts")
                return n.formatMessage({
                  id: "pullRequestDetail.actions.merge.disabled.conflicts",
                  defaultMessage: "Resolve merge conflicts before merging",
                  description: "Tooltip explaining why a pull request with conflicts cannot be merged",
                })
              if (t?.mergeBlocker === "unknown")
                return n.formatMessage({
                  id: "codeReview.merge.checkingEligibility",
                  defaultMessage: "Still checking whether this can be merged",
                  description: "Tooltip shown while the provider determines whether the pull request can be merged",
                })
              if ("gitlab" === i && t?.ciStatus === "failing")
                return n.formatMessage({
                  id: "pullRequestDetail.actions.merge.disabled.failingChecks",
                  defaultMessage: "Fix failing checks before merging",
                  description: "Tooltip explaining why a pull request with failing checks cannot be merged",
                })
              if ("gitlab" === i && t?.ciStatus === "pending")
                return n.formatMessage({
                  id: "pullRequestDetail.actions.merge.disabled.pendingChecks",
                  defaultMessage: "Wait for checks to finish before merging",
                  description: "Tooltip explaining why a pull request with pending checks cannot be merged",
                })
              if (t?.canMerge) return null
              switch (i) {
                case "gitlab":
                  return n.formatMessage({
                    id: "codeReview.gitlab.mergeBlocked",
                    defaultMessage: "This merge request can’t be merged yet",
                    description: "Fallback tooltip when a GitLab merge request cannot currently be merged",
                  })
                case "github":
                  return n.formatMessage({
                    id: "pullRequestDetail.actions.merge.disabled.blocked",
                    defaultMessage: "This pull request can’t be merged yet",
                    description: "Fallback tooltip explaining why a pull request cannot be merged",
                  })
              }
            })(H, ee, et, J, T)),
            (O[83] = ee),
            (O[84] = H),
            (O[85] = J),
            (O[86] = et),
            (O[87] = T),
            (O[88] = E))
          : (E = O[88]))
      let eU = "gitlab" === H.provider
      return (
        O[89] !== eC ? ((L = () => eC("open")), (O[89] = eC), (O[90] = L)) : (L = O[90]),
        O[91] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (e) => {
              ;(eu(e), ed(!1))
            }),
            (O[91] = B))
          : (B = O[91]),
        O[92] !== H.headRevision
          ? ((F = (e) => {
              ;(e && (em(null), ea(H.headRevision)), es(e))
            }),
            (O[92] = H.headRevision),
            (O[93] = F))
          : (F = O[93]),
        O[94] !== eq ||
        O[95] !== ew ||
        O[96] !== H.isDraft ||
        O[97] !== eh ||
        O[98] !== et ||
        O[99] !== K ||
        O[100] !== ep ||
        O[101] !== eR ||
        O[102] !== en.isPending ||
        O[103] !== ei ||
        O[104] !== eS ||
        O[105] !== eI ||
        O[106] !== eP ||
        O[107] !== eD ||
        O[108] !== eT ||
        O[109] !== eB ||
        O[110] !== eG ||
        O[111] !== E ||
        O[112] !== eU ||
        O[113] !== L ||
        O[114] !== F ||
        O[115] !== ej ||
        O[116] !== er.isPending
          ? ((U = (0, n.jsx)(G, {
              menu: K,
              primary: eI,
              allowedMergeMethods: eP,
              autoMergeDisabled: eq,
              autoMergeEnabled: ew,
              error: eh,
              isAutoMergeDisabling: eD,
              isAutoMergeEnabling: eT,
              isAutoMergePending: eE,
              isDraft: eL,
              isMarkReadyPending: eB,
              isMergePending: eF,
              isPending: et,
              isCheckingMergeability: eG,
              mergeDisabled: ep,
              mergeDisabledMessage: E,
              mergeMethod: eR,
              mergeOpen: ei,
              isGitLab: eU,
              onAutoMergeChange: ej,
              onMarkReady: L,
              onMerge: eS,
              onMergeMethodChange: B,
              onMergeOpenChange: F,
            })),
            (O[94] = eq),
            (O[95] = ew),
            (O[96] = H.isDraft),
            (O[97] = eh),
            (O[98] = et),
            (O[99] = K),
            (O[100] = ep),
            (O[101] = eR),
            (O[102] = en.isPending),
            (O[103] = ei),
            (O[104] = eS),
            (O[105] = eI),
            (O[106] = eP),
            (O[107] = eD),
            (O[108] = eT),
            (O[109] = eB),
            (O[110] = eG),
            (O[111] = E),
            (O[112] = eU),
            (O[113] = L),
            (O[114] = F),
            (O[115] = ej),
            (O[116] = er.isPending),
            (O[117] = U))
          : (U = O[117]),
        U
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
    r.d(t, { i: () => m })
    var n = r("ABep"),
      i = r("QosV"),
      s = r("psCT"),
      o = r("kolz"),
      a = r("on57"),
      l = r("oyxz"),
      u = r("Sm6l"),
      c = r("HOLv"),
      d = r("bVeK"),
      g = r("RNul"),
      h = "Badge-A9Kb9J"
    function m(e) {
      let t,
        r,
        l,
        m,
        f,
        b,
        v,
        w,
        q,
        y,
        R,
        M = (0, i.c)(31)
      M[0] !== e
        ? (({ disabled: r, interactive: f, isInMergeQueue: l, loading: b, status: m, ...t } = e),
          (M[0] = e),
          (M[1] = t),
          (M[2] = r),
          (M[3] = l),
          (M[4] = m),
          (M[5] = f),
          (M[6] = b))
        : ((t = M[1]), (r = M[2]), (l = M[3]), (m = M[4]), (f = M[5]), (b = M[6]))
      let x = void 0 !== f && f,
        k = void 0 !== b && b,
        A = "open" === m && l ? "queued" : m
      if (
        (M[7] === Symbol.for("react.memo_cache_sentinel") ? ((v = (0, n.jsx)(d.QC9, {})), (M[7] = v)) : (v = M[7]),
        M[8] !== A || M[9] !== x || M[10] !== k)
      ) {
        let e, t, r, i, l, u
        ;(M[13] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(d.ono, {})), (M[13] = e)) : (e = M[13]),
          M[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(c.I, { "aria-hidden": !1, asset: o.Q })), (M[14] = t))
            : (t = M[14]),
          M[15] === Symbol.for("react.memo_cache_sentinel") ? ((r = (0, n.jsx)(d.SGL, {})), (M[15] = r)) : (r = M[15]),
          M[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, n.jsx)(c.I, { asset: s.Y })), (M[16] = i))
            : (i = M[16]))
        let { tone: h, icon: m } = {
          queued: { tone: "text-yellow", icon: v },
          open: { tone: "text-green", icon: e },
          draft: { tone: "text-secondary", icon: t },
          merged: { tone: "text-purple", icon: r },
          closed: { tone: "text-red", icon: i },
        }[A]
        ;(M[17] !== A
          ? ((l = (0, n.jsx)("span", { children: (0, n.jsx)(p, { status: A }) })), (M[17] = A), (M[18] = l))
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
            children: [(0, n.jsx)("span", { className: "flex self-center", children: m }), l, u],
          })),
          (q = (0, a.A)("inline-flex", h)),
          (M[8] = A),
          (M[9] = x),
          (M[10] = k),
          (M[11] = w),
          (M[12] = q))
      } else ((w = M[11]), (q = M[12]))
      return (
        M[22] !== t || M[23] !== w || M[24] !== r || M[25] !== x || M[26] !== k
          ? ((y = x
              ? (0, n.jsx)(u.$, {
                  ...t,
                  className: (0, a.A)(h, t.className),
                  "aria-busy": k || void 0,
                  color: "tinted",
                  disabled: r || k,
                  radius: "full",
                  size: "cardAction",
                  children: w,
                })
              : (0, n.jsx)("span", {
                  className: (0, a.A)(
                    h,
                    "inline-flex items-center rounded-full border border-transparent bg-current/10 text-sm leading-5 font-medium whitespace-nowrap",
                  ),
                  children: w,
                })),
            (M[22] = t),
            (M[23] = w),
            (M[24] = r),
            (M[25] = x),
            (M[26] = k),
            (M[27] = y))
          : (y = M[27]),
        M[28] !== q || M[29] !== y
          ? ((R = (0, n.jsx)("span", { className: q, children: y })), (M[28] = q), (M[29] = y), (M[30] = R))
          : (R = M[30]),
        R
      )
    }
    function p(e) {
      let t = (0, i.c)(5),
        { status: r } = e
      switch (r) {
        case "queued": {
          let e
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(l.A, {
                  id: "codeReview.status.queued",
                  defaultMessage: "Queued",
                  description: "Status badge for a pull request waiting in the GitHub merge queue",
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        }
        case "closed": {
          let e
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(l.A, {
                  id: "pullRequestSidePanel.state.closed",
                  defaultMessage: "Closed",
                  description: "Closed pull request state shown in the side panel header",
                })),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        }
        case "draft": {
          let e
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(l.A, {
                  id: "pullRequestSidePanel.state.draft",
                  defaultMessage: "Draft",
                  description: "Draft pull request state shown in the side panel header",
                })),
                (t[2] = e))
              : (e = t[2]),
            e
          )
        }
        case "merged": {
          let e
          return (
            t[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(l.A, {
                  id: "pullRequestSidePanel.state.merged",
                  defaultMessage: "Merged",
                  description: "Merged pull request state shown in the side panel header",
                })),
                (t[3] = e))
              : (e = t[3]),
            e
          )
        }
        case "open": {
          let e
          return (
            t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(l.A, {
                  id: "pullRequestDetail.header.openState",
                  defaultMessage: "Open",
                  description: "Status of a pull request that is open and not a draft",
                })),
                (t[4] = e))
              : (e = t[4]),
            e
          )
        }
      }
    }
  },
  T3tn(e, t, r) {
    r.d(t, { M: () => o })
    var n = r("ABep"),
      i = r("QosV"),
      s = r("Qgfj")
    function o(e) {
      let t,
        r,
        o,
        a,
        l,
        u = (0, i.c)(14),
        { children: c, count: d, icon: g, leadingIcon: h } = e,
        m = void 0 === d ? 0 : d,
        p = m > 0 ? "content" : "icon"
      return (
        u[0] !== h || u[1] !== p
          ? ((t = (0, n.jsx)("span", { "data-viewer-compact-label": p, "aria-hidden": !0, children: h })),
            (u[0] = h),
            (u[1] = p),
            (u[2] = t))
          : (t = u[2]),
        u[3] !== c
          ? ((r = (0, n.jsx)("span", {
              className: "text-zuQYfB",
              "data-tooltip-overflow-target": !0,
              "data-tooltip-enablement-target": !0,
              children: c,
            })),
            (u[3] = c),
            (u[4] = r))
          : (r = u[4]),
        u[5] !== m ? ((o = m > 0 && (0, n.jsx)(s.Gr, { value: m })), (u[5] = m), (u[6] = o)) : (o = u[6]),
        u[7] !== g || u[8] !== o
          ? ((a = (0, n.jsxs)("span", { className: "compactIcon-pnhJfD", "aria-hidden": !0, children: [g, o] })),
            (u[7] = g),
            (u[8] = o),
            (u[9] = a))
          : (a = u[9]),
        u[10] !== t || u[11] !== r || u[12] !== a
          ? ((l = (0, n.jsxs)("span", { className: "label-Dy1QlV", children: [t, r, a] })),
            (u[10] = t),
            (u[11] = r),
            (u[12] = a),
            (u[13] = l))
          : (l = u[13]),
        l
      )
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
  Zal4(e, t, r) {
    r.d(t, { b: () => a, T: () => l })
    var n = r("zTeN"),
      i = r("HFSu"),
      s = r("OWtl"),
      o = r("rvFo")
    let a = (0, n.vU)(s.u, ({ request: e, headRevision: t }, { scope: r }) => ({
      queryKey: ["gitlab-pull-request-diff", e, t],
      enabled: null != t,
      queryFn: async ({ signal: r }) => {
        if (null == t) throw Error("Pull request head revision is unavailable")
        r.throwIfAborted()
        let n = await (async function (e) {
          let { account: t } = e
          switch (t.provider) {
            case "github-cli":
              throw Error("readPullRequestRawDiff is not implemented for github-cli")
            case "github-connector":
              throw Error("readPullRequestRawDiff is not implemented for github-connector")
            case "gitlab-connector":
              if (null == e.headRevision) throw Error("GitLab requires a head revision to read a pinned diff")
              return i.CodexRequest.safePost("/wham/gitlab/operations/read-diff", {
                requestBody: { account: t, pullRequest: e.pullRequest, headRevision: e.headRevision },
                retry: !1,
              })
          }
        })({ ...e, headRevision: t, source: "pull_requests_page" })
        if ((r.throwIfAborted(), "string" == typeof n)) throw Error("GitLab diff is missing pinned revisions")
        return n
      },
      refetchOnMount: !0,
      refetchOnWindowFocus: !1,
      staleTime: o.D.ONE_MINUTE,
    }))
    function l(e, t) {
      return (
        null != t &&
        e?.headRevision === t.headRevision &&
        e.baseRevision === t.startRevision &&
        e.mergeBaseRevision === t.baseRevision
      )
    }
  },
  A3uD(e, t, r) {
    r.d(t, { v: () => s, d: () => o })
    var n = r("HFSu"),
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
    async function o(e, t, r, i) {
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
        w: async function (e, t, r, s, { deferRefreshWhilePending: o = !1 } = {}) {
          let a = e.queryClient,
            l = ["gitlab-pull-request-write", t]
          try {
            ;(await a
              .getMutationCache()
              .build(a, {
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
            ;(o && 0 !== a.isMutating({ mutationKey: l })) ||
              (await Promise.allSettled([
                a.invalidateQueries({ queryKey: ["gitlab-pull-request-mergeability", t] }),
                a.invalidateQueries({ queryKey: ["gitlab-pull-request-stack", t], exact: !0 }),
                a.invalidateQueries({ queryKey: ["gitlab-pull-request-discussion", t], exact: !0 }),
                a.invalidateQueries({ queryKey: ["pull-request-search", t.account] }),
              ]))
          }
        },
      },
    )
  },
  B72h(e, t, r) {
    r.d(t, { o: () => c })
    var n = r("zTeN"),
      i = r("jpoq"),
      s = r("GsLq"),
      o = r("OWtl"),
      a = r("HFSu")
    let l = (0, n.vU)(o.u, ({ headRevision: e, ...t }, { scope: r }) => ({
      queryKey: ["gitlab-pull-request-mergeability", t, e],
      queryFn: async ({ signal: r }) => {
        let n = await (function (e) {
          switch (e.account.provider) {
            case "github-cli":
              throw Error("readPullRequestMergeability is not implemented for github-cli")
            case "github-connector":
              throw Error("readPullRequestMergeability is not implemented for github-connector")
            case "gitlab-connector":
              return a.CodexRequest.safePost("/wham/gitlab/operations/read-mergeability", {
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
    let c = (0, n.i1)(o.u, ({ request: e, detail: t }, { get: r }) => {
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
        o = r(s.H, { ...e, account: e.account })
      return {
        isFetching: n.isFetching,
        data: null == n.error ? (n.data ?? null) : null,
        error: n.error,
        refetch: async () => {
          let e = await o.refetch()
          ;(null == e.data || e.data.headRevision === t.headRevision) && (await n.refetch())
        },
      }
    })
  },
  N6Z5(e, t, r) {
    r.d(t, {
      DJ: () => I,
      nF: () => _,
      wW: () => j,
      Kc: () => B,
      QP: () => F,
      Cn: () => E,
      Su: () => S,
      ni: () => G,
      yM: () => L,
      Xm: () => D,
      RR: () => T,
      FK: () => P,
    })
    var n = r("zTeN"),
      i = r("OWtl"),
      s = r("Oj9r"),
      o = r("IbBW"),
      a = r("EWTL"),
      l = r("HFSu")
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
      h = r("i4Vs"),
      m = r("SGsN"),
      p = r("svjy"),
      f = r("g3QY")
    function b(e, t) {
      return e.flatMap((e) =>
        e.nodeId !== t.nodeId ? [e] : "delete" === t.action ? [] : [{ ...e, body: t.body, rawBody: t.body }],
      )
    }
    var v = r("kVSf"),
      w = r("eddR"),
      q = r("Z1fA")
    function y(e, t, r, n) {
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
    var R = r("xxyD"),
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
    var A = r("A3uD"),
      C = r("SEJy")
    let _ = (0, n.c4)(i.u, (e, { scope: t }) => {
        var r, n
        return (0, C.dA)(e.account)
          ? ((r = { ...e, account: e.account }),
            {
              retry: !1,
              mutationFn: ({ body: e, onSuccess: n, replyToReviewThreadId: i }, { client: s }) => {
                var o
                return (
                  (o = async () => {
                    let o = ["gitlab-pull-request-discussion", r],
                      a = s.getQueryData(o),
                      l = a?.currentUser?.login ?? null,
                      g = y(a, e, l, i)
                    try {
                      await (0, d.w)(t, r, () =>
                        null == i
                          ? u(t, { ...r, body: e, source: "pull_requests_page" })
                          : c(t, { ...r, body: e, discussionId: i, source: "pull_requests_page" }),
                      )
                    } catch (t) {
                      if (a?.status !== "success" || y(s.getQueryData(o), e, l, i) <= g) throw t
                    }
                    n?.()
                  }),
                  s
                    .getMutationCache()
                    .build(s, {
                      mutationFn: o,
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
                let a =
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
                ;(await (0, o.z)(t, "gh-pr-comment", a), r?.())
              },
            })
      }),
      j = (0, n.c4)(i.u, (e, { scope: t }) =>
        (0, C.dA)(e.request.account)
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
                                          : [{ ...e, replies: b(e.replies, r) }],
                                  ),
                                  commentAttachments: e.commentAttachments.flatMap((e) => {
                                    if (t?.type === "review_comment" && e.reviewThreadId === t.reviewThreadId) return []
                                    if (!e.replies?.some((e) => e.nodeId === r.nodeId)) return [e]
                                    let n = b(e.replies, r),
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
                  return (0, o.z)(e, "gh-pr-comment-update", { ...r, ...t }, n)
                },
              }
            })(t, { ...e, request: { ...e.request, account: e.request.account } }),
      ),
      S = (0, n.c4)(i.u, ({ request: e }, { scope: t }) => {
        var r, n
        return (0, C.dA)(e.account)
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
                return (await n.cancelQueries({ exact: !0, queryKey: i }), (0, q.E)(n, i, t, "resolve" === e))
              },
              onError: (e, t, r) => r?.(),
            })
          : ((n = { ...e, account: e.account }),
            {
              mutationFn: async ({ action: e, reviewThreadId: r }) => {
                if (
                  (await (0, o.z)(t, "gh-pr-review-thread-update", { ...n, action: e, reviewThreadId: r }),
                  "resolve" === e)
                )
                  try {
                    ;(0, h.Z)(t, n, r)
                  } catch {
                    t.get(m.Id).danger(
                      t
                        .get(p.g)
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
      I = (0, n.c4)(s.GD, (e, { scope: t }) =>
        (0, C.dA)(e.request.account)
          ? (function (e, { request: t, submissionKey: r }) {
              return {
                retry: !1,
                mutationFn: ({ comment: n }) =>
                  (0, d.w)(e, t, () => {
                    let i = (0, a.GM)(n)
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
                      inlineComment: { ...(0, a.BI)(n), ...r.diffSnapshot, headRevision: r.revision },
                    })
                  }),
              }
            })(t, { ...e, request: { ...e.request, account: e.request.account } })
          : (function (e, { request: t, submissionKey: r }) {
              return {
                retry: !1,
                mutationFn: async ({ comment: n, onSuccess: i, review: s, pendingReviewId: l }) => {
                  let u,
                    c = (0, a.GM)(n)
                  if ("pending" === s && null != n.replyToReviewThreadId && null == l)
                    throw Error("Pending review changed or was submitted; refresh before continuing")
                  let { replyToReviewThreadId: d } = n
                  ;((u =
                    null == d
                      ? {
                          ...t,
                          body: c,
                          expectedHeadRevision: r.revision,
                          inlineComment: (0, a.BI)(n),
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
                    await (0, o.z)(e, "gh-pr-comment", u),
                    i?.())
                },
              }
            })(t, { ...e, request: { ...e.request, account: e.request.account } }),
      ),
      P = (0, n.c4)(i.u, (e, { scope: t }) => {
        var r, n
        return (0, C.dA)(e.account)
          ? ((r = { ...e, account: e.account }),
            {
              retry: !1,
              mutationFn: ({ title: e }) =>
                (0, d.w)(t, r, () => x(t, { ...r, title: e, source: "pull_requests_page" })),
            })
          : ((n = { ...e, account: e.account }),
            {
              networkMode: "always",
              mutationFn: ({ title: e }) => (0, o.z)(t, "gh-pr-update", { action: "update-title", title: e, ...n }),
            })
      }),
      D = (0, n.c4)(i.u, (e, { scope: t }) => {
        var r, n
        return (0, C.dA)(e.account)
          ? ((r = { ...e, account: e.account }),
            {
              retry: !1,
              mutationFn: ({ body: e }) => (0, d.w)(t, r, () => k(t, { ...r, body: e, source: "pull_requests_page" })),
            })
          : ((n = { ...e, account: e.account }),
            {
              networkMode: "always",
              mutationFn: ({ body: e }) => (0, o.z)(t, "gh-pr-update", { action: "update-body", body: e, ...n }),
            })
      }),
      T = (0, n.c4)(i.u, (e, { scope: t }) => {
        var r, n
        return {
          ...((0, C.dA)(e.account)
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
                          return (0, A.d)(t, r, e, i)
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
                      a = () => {
                        t.query.setData(g.pj["gh-pr-reviews"], n, (t) => (t?.status === "success" ? (0, w.Z)(t, e) : t))
                      }
                    return r
                      .getMutationCache()
                      .build(r, {
                        mutationFn: () => (0, o.z)(t, "gh-pr-update", { ...s, ...n }, a),
                        networkMode: "always",
                        retry: !1,
                        scope: {
                          id: JSON.stringify(["github-reviewer-assignment", (0, v.getPullRequestQueryIdentity)(n)]),
                        },
                      })
                      .execute(void 0)
                  }
                  return (0, o.z)(t, "gh-pr-update", { ...e, ...n })
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
      E = (0, n.c4)(i.u, (e, { scope: t }) => {
        var r, n
        return (0, C.dA)(e.account)
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
                ;(await (0, o.z)(t, "gh-pr-merge", { ...n, expectedHeadRevision: e, mergeMethod: r }), i())
              },
            })
      }),
      L = (0, n.c4)(i.u, (e, { scope: t }) => {
        var r, n
        return (0, C.dA)(e.account)
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
                    throw new R.B(t.error ?? "Unable to submit the review", !0 === t.textAccepted)
                  return t
                }),
            })
          : ((n = { ...e, account: e.account }),
            {
              mutationFn: ({ body: e, event: r, expectedHeadRevision: i, pendingReviewId: s }) =>
                (0, o.z)(t, "gh-pr-submit-review", {
                  ...n,
                  body: e,
                  event: r,
                  expectedHeadRevision: i,
                  pendingReviewId: s,
                }),
            })
      }),
      B = (0, n.i1)(
        i.u,
        (e, { get: t }) => t(P, e).isPending || t(D, e).isPending || t(T, e).isPending || t(E, e).isPending,
      ),
      F = (0, n.c4)(i.u, (e, { scope: t }) => ({
        mutationFn: (r) =>
          (0, o.z)(t, "gh-pr-comment-update", { ...e, action: "delete", commentType: "review", nodeId: r }),
      })),
      G = (0, n.i1)(
        i.u,
        (e, { get: t }) =>
          null != e && (t(L, e).isPending || (!(0, C.dA)(e.account) && t(F, { ...e, account: e.account }).isPending)),
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
    function s(e, { account: t, action: r, item: o, surface: a }) {
      ;(0, i.X)(e, {
        type: "pull_request_action",
        provider: (0, n.u)(t),
        action: r,
        surface: a,
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
        })(o),
        isAuthor: o.isAuthor ?? void 0,
      })
    }
  },
  UAo1(e, t, r) {
    r.d(t, { ON: () => g.O, DC: () => h, in: () => m, Aj: () => p })
    var n = r("zTeN"),
      i = r("bodQ"),
      s = r("jpoq"),
      o = r("GsLq"),
      a = r("OWtl"),
      l = r("kVSf")
    let u = (0, n.i1)(a.u, (e, { get: t }) => {
      let r,
        n = t(s.pj["gh-pr-summary"], e.request),
        o = t(s.pj["gh-pr-metadata"], e.request),
        a = n.data,
        u = n.dataUpdatedAt > 0 && n.data?.status === "success" ? n.data : null,
        c = o.data?.status === "success" ? o.data : null,
        d = (0, l.getPullRequestQueryIdentity)(e.request).pullRequest
      if ((0, i.cu)(n.error) || (0, i.cu)(o.error)) r = void 0
      else if (a?.status === "not-found" || o.data?.status === "not-found") r = { status: "not-found" }
      else if (a?.status === "success" && null != a.headRevision) {
        let e = c?.headRevision === a.headRevision,
          t = c?.isAuthor || (e && o.dataUpdatedAt > 0 && null == o.error) ? c : null
        r = {
          ...a,
          canMerge: null == n.error && u?.canMerge === !0,
          mergeBlocker: null == u ? "unknown" : u.mergeBlocker,
          mergeBlockReasons: null == n.error ? u?.mergeBlockReasons : void 0,
          boardItem: null,
          canonical: !0,
          headRevision: a.headRevision,
          changedFiles: e ? c.changedFiles : null,
          additions: e ? c.additions : null,
          deletions: e ? c.deletions : null,
          authorAvatarUrl: c?.authorAvatarUrl ?? null,
          authorLogin: c?.authorLogin ?? null,
          createdAt: c?.createdAt ?? null,
          isAuthor: c?.isAuthor ?? null,
          viewerCanClose: t?.viewerCanClose,
          viewerCanReopen: t?.viewerCanReopen,
          hasWritePermission: t?.hasWritePermission,
          canManageReviewers: c?.canManageReviewers,
          canManageAutoMerge: t?.canManageAutoMerge,
          allowedMergeMethods: c?.allowedMergeMethods,
          isAutoMergeEnabled: c?.isAutoMergeEnabled,
          number: d.number,
          pullRequest: d,
          repo: `${"github.com" === d.hostname.toLowerCase() ? "" : `${d.hostname}/`}${d.owner}/${d.repository}`,
          partial: { checks: !a.checksComplete },
        }
      }
      return {
        data: r,
        dataUpdatedAt: n.dataUpdatedAt,
        error: n.error ?? o.error,
        isFetching: n.isFetching || o.isFetching,
        refetch: async () => {
          await Promise.all([n.refetch(), o.refetch()])
        },
      }
    })
    var c = r("Zal4"),
      d = r("xEzD"),
      g = r("wi4b")
    let h = (0, n.i1)(a.u, (e, { get: t }) => {
        if ("gitlab-connector" !== e.provider) return t(s.kW, e.request)
        let r = t(o.H, e.request)
        return {
          data: null == r.data || (0, i.cu)(r.error) ? void 0 : { status: "success", body: r.data.body },
          error: r.error,
          isPending: r.isPending,
          isFetching: r.isFetching,
          refetch: r.refetch,
        }
      }),
      m = (0, n.i1)(a.u, (e, t) =>
        (0, d.d)(e.request.account)
          ? (function (e, { get: t }) {
              let r = t(o.H, e.request),
                n = (0, i.cu)(r.error) ? void 0 : r.data
              return {
                data:
                  null == n
                    ? void 0
                    : {
                        provider: "gitlab",
                        pullRequest: e.request.pullRequest,
                        number: e.request.pullRequest.number,
                        title: n.title,
                        isAuthor: n.isAuthor ?? null,
                        canManageReviewers: n.viewerCanUpdate,
                        body: n.body,
                        authorLogin: n.author?.login ?? null,
                        authorAvatarUrl: n.author?.avatarUrl ?? null,
                        createdAt: n.createdAt ?? null,
                        headBranch: n.headBranch,
                        baseBranch: n.baseBranch,
                        headRevision: n.headRevision,
                        state: n.state,
                        isDraft: n.isDraft,
                        changedFiles: null,
                        additions: n.additions ?? null,
                        deletions: n.deletions ?? null,
                      },
                dataUpdatedAt: r.dataUpdatedAt,
                error: r.error,
                isError: r.isError,
                isPending: r.isPending,
                isLoading: r.isLoading,
                isFetching: r.isFetching,
                isSuccess: r.isSuccess,
                refetch: async () => {
                  await r.refetch()
                },
              }
            })({ ...e, request: { ...e.request, account: e.request.account } }, t)
          : (function ({ request: e, source: t }, { get: r }) {
              let n = r(u, { request: e, provider: "github", source: t }),
                i = n.data?.status === "success" && !0 === n.data.canonical ? n.data : void 0,
                s = n.error
              return (
                null == s && n.data?.status === "not-found" && (s = Error("Pull request not found")),
                {
                  data: i,
                  dataUpdatedAt: n.dataUpdatedAt,
                  error: s,
                  isError: null != s,
                  isPending: null == s && null == i,
                  isLoading: null == s && null == i,
                  isFetching: n.isFetching,
                  isSuccess: null == s && null != i,
                  refetch: n.refetch,
                }
              )
            })({ ...e, request: { ...e.request, account: e.request.account } }, t),
      ),
      p = (0, n.i1)(a.u, (e, { get: t }) =>
        (0, d.d)(e.request.account)
          ? t(c.b, { ...e, request: { ...e.request, account: e.request.account } })
          : t(
              s.w9,
              { ...e.request, account: e.request.account, headRevision: e.headRevision ?? void 0 },
              { enabled: null != e.headRevision },
            ),
      )
  },
  eddR(e, t, r) {
    var n = r("zTeN"),
      i = r("DBCl"),
      s = r("OWtl")
    let o = (0, n.bD)(s.u, (e) => [])
    function a(e, t) {
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
          o = s?.key ?? { type: "principal", principal: n },
          a = (0, i.jDE)(o),
          l = r.get(a)
        r.set(a, {
          key: o,
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
        Q: o,
        Z: function (e, t) {
          if ("native_principal" === t.reviewerSelector) {
            let { entries: r, localEntries: n } = e.reviewers
            return {
              ...e,
              reviewers: { ...e.reviewers, ...(null == r ? { localEntries: a(n ?? [], t) } : { entries: a(r, t) }) },
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
    var n = r("zTeN"),
      i = r("bodQ"),
      s = r("jpoq"),
      o = r("GsLq"),
      a = r("OWtl"),
      l = r("SEJy")
    let u = (0, n.i1)(a.u, (e, { get: t }) => {
      if (null == e) return { canUpdate: !1, canComment: !1, hasWriteService: !1 }
      if (!(0, l.dA)(e.account)) {
        let { data: r, error: n } = t(s.pj["gh-pr-metadata"], { ...e, account: e.account }),
          o = !(0, i.cu)(n) && r?.status === "success"
        return { canUpdate: o && (r.viewerCanUpdate ?? r.isAuthor), canComment: o, hasWriteService: o }
      }
      let { data: r, error: n } = t(o.H, { ...e, account: e.account })
      return {
        hasWriteService: !(0, i.cu)(n),
        canUpdate: !(0, i.cu)(n) && r?.viewerCanUpdate === !0,
        canComment: !(0, i.cu)(n) && r?.viewerCanComment === !0,
      }
    })
    r.d(t, {}, { F: u })
  },
  Mhsw(e, t, r) {
    var n = r("DBCl"),
      i = r("koMX"),
      s = r("r8w8"),
      o = r("i8Vs"),
      a = r("nf3G"),
      l = r("fiGE")
    r.d(
      t,
      { K: () => l.Ki },
      {
        g: function (e, t, r) {
          if ((0, o.nv)(t)) return !0
          let l = e.get(a.threadCwd$)
          if (null == l || r !== e.get(a.threadHostId$)) return !1
          let { data: u } = e.get(i.gitOriginsQuery$, {
              params: { dirs: [l], hostId: r },
              source: "pull_requests_page",
            }),
            c = (0, s.L)(u?.origins, l)?.originUrl
          return null != c && (0, n.tN7)(c)?.host.toLowerCase() === t
        },
      },
    )
  },
  akIE(e, t, r) {
    var n = r("ABep"),
      i = r("Kaj7"),
      s = r("Qgfj"),
      o = r("HOLv"),
      a = r("bVeK"),
      l = r("cnjf"),
      u = r("fiy3")
    let c = (0, s.YK)({
      github: {
        id: "pullRequestDetail.openInGitHub",
        defaultMessage: "Open in GitHub",
        description: "Action that opens the pull request in GitHub",
      },
      gitlab: {
        id: "pullRequestDetail.openInGitLab",
        defaultMessage: "Open in GitLab",
        description: "Action that opens the merge request in GitLab",
      },
      browser: {
        id: "pullRequestDetail.openInBrowser",
        defaultMessage: "Open in browser",
        description: "Action that opens the review URL in the browser",
      },
    })
    r.d(
      t,
      {},
      {
        $: function (e) {
          let t = (0, u.g0)(e),
            r = t?.provider,
            s =
              null == t
                ? void 0
                : new URL(new URL(t.url).pathname + ("gitlab" === r ? "/diffs" : "/files"), new URL(e).origin).href
          return "github" === r
            ? { openLabel: c.github, filesUrl: s, icon: (0, n.jsx)(o.I, { asset: i.F }), navigationProvider: r }
            : "gitlab" === r
              ? {
                  openLabel: c.gitlab,
                  filesUrl: s,
                  icon: (0, n.jsx)(l.A, { "aria-hidden": !0, className: "icon-sm grayscale" }),
                  navigationProvider: r,
                }
              : { openLabel: c.browser, icon: (0, n.jsx)(a.GRR, {}) }
        },
      },
    )
  },
  StSx(e, t, r) {
    let n = (0, r("iJY0").a)({
      name: "chevron-up-md-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.475098, y: 4.946289, width: 9.049805, height: 4.911621 },
        visualBounds: { x: 3.475098, y: 4.946289, width: 9.049805, height: 4.911621 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.475098, y: 4.946289, width: 9.049805, height: 4.911621 },
        center: { x: 8, y: 7.4021 },
        insets: { top: 4.946289, right: 3.475097, bottom: 6.14209, left: 3.475098 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 7.4021 }, foreground: { x: 8, y: 7.4021 } },
      },
      capabilities: ["icon"],
      body: '<path d="M11.6289 9.70417C11.8339 9.9092 12.166 9.9092 12.3711 9.70417C12.5761 9.49915 12.5761 9.16701 12.3711 8.96199L8.60641 5.19734C8.27129 4.86261 7.72863 4.86261 7.39352 5.19734L3.62887 8.96199C3.42384 9.16701 3.42384 9.49915 3.62887 9.70417C3.83389 9.9092 4.16603 9.9092 4.37105 9.70417L7.99996 6.07527L11.6289 9.70417Z" fill="currentColor"/>',
    })
    r.d(t, {}, { V: n })
  },
  Kaj7(e, t, r) {
    let n = (0, r("iJY0").a)({
      name: "github-regular-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.333496, y: 1.300415, width: 13.333496, height: 13.004395 },
        visualBounds: { x: 1.333496, y: 1.300415, width: 13.333496, height: 13.004395 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.333496, y: 1.300415, width: 13.333496, height: 13.004395 },
        center: { x: 8.000244, y: 7.802613 },
        insets: { top: 1.300415, right: 1.333008, bottom: 1.69519, left: 1.333496 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.000244, y: 7.802613 }, foreground: { x: 8.000244, y: 7.802613 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.99992 1.30042C11.6833 1.30042 14.6666 4.28375 14.6666 7.96708C14.6662 9.36392 14.2278 10.7255 13.4131 11.8601C12.5984 12.9947 11.4484 13.8453 10.1249 14.2921C9.79158 14.3587 9.66658 14.1504 9.66658 13.9754C9.66658 13.7504 9.67492 13.0337 9.67492 12.1421C9.67492 11.5171 9.46659 11.1171 9.22492 10.9087C10.7083 10.7421 12.2666 10.1754 12.2666 7.61708C12.2666 6.88375 12.0083 6.29208 11.5833 5.82541C11.6499 5.65875 11.8833 4.97541 11.5166 4.05875C11.5166 4.05875 10.9583 3.87541 9.68325 4.74208C9.14992 4.59208 8.58325 4.51708 8.01659 4.51708C7.44992 4.51708 6.88325 4.59208 6.34992 4.74208C5.07492 3.88375 4.51659 4.05875 4.51659 4.05875C4.14992 4.97541 4.38325 5.65875 4.44992 5.82541C4.02492 6.29208 3.76659 6.89208 3.76659 7.61708C3.76659 10.1671 5.31659 10.7421 6.79992 10.9087C6.60825 11.0754 6.43325 11.3671 6.37492 11.8004C5.99159 11.9754 5.03325 12.2587 4.43325 11.2504C4.30825 11.0504 3.93325 10.5587 3.40825 10.5671C2.84992 10.5754 3.18325 10.8837 3.41659 11.0087C3.69992 11.1671 4.02492 11.7587 4.09992 11.9504C4.23325 12.3254 4.66659 13.0421 6.34159 12.7337C6.34159 13.2921 6.34992 13.8171 6.34992 13.9754C6.34992 14.1504 6.22492 14.3504 5.89159 14.2921C4.56378 13.8501 3.40886 13.0013 2.59066 11.8659C1.77246 10.7306 1.33252 9.36651 1.33325 7.96708C1.33325 4.28375 4.31659 1.30042 7.99992 1.30042Z" fill="currentColor"/>',
    })
    r.d(t, {}, { F: n })
  },
}
//# sourceMappingURL=40030.7a8dff1b2d.js.map
