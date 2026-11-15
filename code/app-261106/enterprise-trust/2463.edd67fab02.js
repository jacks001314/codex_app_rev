export const __rspack_esm_ids = [2463]
export const __webpack_modules__ = {
  QvRd(e, t, n) {
    var i = n("ABep"),
      a = n("oyxz"),
      s = n("Qgfj")
    let r = {
      runtimeUpdateFailed: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.runtimeUpdateFailed.title",
          defaultMessage: "Draft saved",
          description:
            "Banner title confirming that environment settings were saved even though applying them to the build environment did not succeed",
        },
        body: {
          id: "environmentSetup.banner.runtimeUpdateFailed.body",
          defaultMessage: "The build environment update needs attention. Reload the draft before retrying",
          description:
            "Recovery guidance after a successful draft save when applying the settings was rejected or its result is unknown",
        },
      }),
      settingsConflict: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.settingsConflict.title",
          defaultMessage: "Review your settings",
          description: "Banner title for a publishing conflict that may indicate changed settings or a draft in use",
        },
        body: {
          id: "environmentSetup.banner.settingsConflict.body",
          defaultMessage: "These settings changed or are in use. Review them before trying again.",
          description:
            "Publishing conflict guidance when the response does not distinguish changed settings from a lock",
        },
      }),
      reviewSettings: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.reviewSettings.title",
          defaultMessage: "Review your settings",
          description:
            "Banner title for invalid fields that must be corrected before environment settings can be saved",
        },
        body: {
          id: "environmentSetup.banner.reviewSettings.body",
          defaultMessage: "Fix the highlighted fields before saving.",
          description:
            "Banner explanation for invalid fields that must be corrected before environment settings can be saved",
        },
      }),
      saveFailed: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.saveFailed.title",
          defaultMessage: "Couldn’t save changes",
          description: "Banner title for confirmed failure to save some environment changes",
        },
        body: {
          id: "environmentSetup.banner.saveFailed.body",
          defaultMessage: "Some changes couldn’t be saved. Review the details and try again.",
          description: "Banner explanation for confirmed failure to save some environment changes",
        },
      }),
      networkPolicyLimit: (0, s.YK)({
        title: {
          id: "threadEnvironment.networkPolicyLimit.title",
          defaultMessage: "This environment limits network access",
          description: "Title when a live network edit exceeds the source environment’s allowed access",
        },
        body: {
          id: "threadEnvironment.networkPolicyLimit.body",
          defaultMessage:
            "Turn off all public internet access or remove domains this environment doesn’t allow. For broader access, configure an environment in Settings → Codex Cloud and start a new thread with it.",
          description:
            "Recovery guidance when a thread requests broader network access than its source environment allows",
        },
      }),
      saveUnconfirmed: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.saveUnconfirmed.title",
          defaultMessage: "Couldn’t confirm changes were saved",
          description:
            "Banner title for an unconfirmed save outcome; existing details explain whether retry may create another value",
        },
        body: {
          id: "environmentSetup.banner.saveUnconfirmed.body",
          defaultMessage: "Your edits are still here. Review the save details before trying again.",
          description:
            "Banner explanation for an unconfirmed save outcome; existing details explain whether retry may create another value",
        },
      }),
      saveAuthentication: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.saveAuthentication.title",
          defaultMessage: "Check your sign-in",
          description: "Banner title for a save blocked by expired or changed account authentication",
        },
        body: {
          id: "environmentSetup.banner.saveAuthentication.body",
          defaultMessage: "Use the account and workspace where you started setup, then try saving again.",
          description: "Banner explanation for a save blocked by expired or changed account authentication",
        },
      }),
      saveDenied: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.saveDenied.title",
          defaultMessage: "Access denied",
          description: "Banner title for a save blocked by missing permission",
        },
        body: {
          id: "environmentSetup.banner.saveDenied.body",
          defaultMessage: "You don’t have permission to save these changes. Check your account and environment access.",
          description: "Banner explanation for a save blocked by missing permission",
        },
      }),
      publishFailed: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.publishFailed.title",
          defaultMessage: "Couldn’t publish environment",
          description:
            "Banner title for a confirmed publishing failure before snapshot creation; settings remain saved and retry is supported",
        },
        body: {
          id: "environmentSetup.banner.publishFailed.body",
          defaultMessage: "Your settings are saved. Try publishing again.",
          description:
            "Banner explanation for a confirmed publishing failure before snapshot creation; settings remain saved and retry is supported",
        },
      }),
      publishIncomplete: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.publishIncomplete.title",
          defaultMessage: "Couldn’t finish publishing",
          description:
            "Banner title for a publishing failure after the setup snapshot was saved; retry reuses that snapshot",
        },
        body: {
          id: "environmentSetup.banner.publishIncomplete.body",
          defaultMessage: "Your setup was saved. Try again to finish publishing.",
          description:
            "Banner explanation for a publishing failure after the setup snapshot was saved; retry reuses that snapshot",
        },
      }),
      statusUnknown: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.statusUnknown.title",
          defaultMessage: "Couldn’t confirm publishing status",
          description:
            "Banner title for an interrupted or failed status check; publication itself may still be running",
        },
        body: {
          id: "environmentSetup.banner.statusUnknown.body",
          defaultMessage: "Publishing may still be running. Check its status to continue.",
          description:
            "Banner explanation for an interrupted or failed status check; publication itself may still be running",
        },
      }),
      reconnectFailed: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.reconnectFailed.title",
          defaultMessage: "Couldn’t connect this chat",
          description: "Banner title for successful publication followed by failure to reconnect the setup chat",
        },
        body: {
          id: "environmentSetup.banner.reconnectFailed.body",
          defaultMessage: "Your environment was published, but this chat couldn’t connect. Try again to reconnect.",
          description: "Banner explanation for successful publication followed by failure to reconnect the setup chat",
        },
      }),
      unsavedChangesConflict: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.environmentChanged.title",
          defaultMessage: "Environment changed",
          description: "Banner title for environment settings changed elsewhere and need review before saving",
        },
        body: {
          id: "environmentSetup.banner.unsavedChangesConflict.body",
          defaultMessage:
            "Your unsaved edits conflict with newer settings. Discard them to load the latest saved version",
          description: "Explains how to resolve an environment editor conflict by discarding only local unsaved edits",
        },
      }),
      environmentChanged: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.environmentChanged.title",
          defaultMessage: "Environment changed",
          description: "Banner title for environment settings changed elsewhere and need review before saving",
        },
        body: {
          id: "environmentSetup.banner.environmentChanged.body",
          defaultMessage: "Load the latest settings and review your changes before saving.",
          description: "Banner explanation for environment settings changed elsewhere and need review before saving",
        },
      }),
      draftLocked: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.draftLocked.title",
          defaultMessage: "Draft unavailable",
          description: "Banner title for a locked draft whose publishing outcome is not yet known",
        },
        body: {
          id: "environmentSetup.banner.draftLocked.body",
          defaultMessage:
            "This draft is locked, and publishing may still be running. Check its status before trying again.",
          description: "Banner explanation for a locked draft whose publishing outcome is not yet known",
        },
      }),
      authentication: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.authentication.title",
          defaultMessage: "Check your sign-in",
          description:
            "Banner title for a publishing status check interrupted by missing or changed account authentication",
        },
        body: {
          id: "environmentSetup.banner.authentication.body",
          defaultMessage: "Use the account and workspace where you started setup, then check publishing status.",
          description:
            "Banner explanation for a publishing status check interrupted by missing or changed account authentication",
        },
      }),
      planNotSupported: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.planNotSupported.title",
          defaultMessage: "Codex Cloud is unavailable on this plan",
          description: "Banner title when the selected ChatGPT plan cannot publish a cloud environment",
        },
        body: {
          id: "environmentSetup.banner.planNotSupported.body",
          defaultMessage: "Switch to an eligible ChatGPT plan to publish this environment",
          description: "Recovery guidance for a publishing request rejected by the Cloud plan policy",
        },
      }),
      accessDenied: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.accessDenied.title",
          defaultMessage: "Access denied",
          description: "Banner title for a publishing status check rejected because of missing access",
        },
        body: {
          id: "environmentSetup.banner.accessDenied.body",
          defaultMessage: "We couldn’t access the publishing status. Check your account and workspace.",
          description: "Banner explanation for a publishing status check rejected because of missing access",
        },
      }),
      vpn: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.vpn.title",
          defaultMessage: "VPN connection needs attention",
          description:
            "Banner title for a VPN connection problem; additional body details identify the cause and recovery step",
        },
        body: {
          id: "environmentSetup.banner.vpn.body",
          defaultMessage: "Review the VPN connection in Internet access before trying again.",
          description:
            "Banner explanation for a VPN connection problem; additional body details identify the cause and recovery step",
        },
      }),
      investigation: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.investigation.title",
          defaultMessage: "Publishing needs investigation",
          description:
            "Banner title for a failed publishing operation with no confirmed reusable setup; the user must report the issue",
        },
        body: {
          id: "environmentSetup.banner.investigation.body",
          defaultMessage: "We couldn’t confirm your setup was saved. Report this issue before starting again.",
          description:
            "Banner explanation for a failed publishing operation with no confirmed reusable setup; the user must report the issue",
        },
      }),
      openTaskFailed: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.openTaskFailed.title",
          defaultMessage: "Couldn’t open a chat",
          description: "Banner title for successful publication followed by failure to open a new chat",
        },
        body: {
          id: "environmentSetup.banner.openTaskFailed.body",
          defaultMessage: "Your environment is published. Try opening a new chat again.",
          description: "Banner explanation for successful publication followed by failure to open a new chat",
        },
      }),
      setupChanged: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.setupChanged.title",
          defaultMessage: "Environment changed",
          description: "Banner title for the user switched environment configurations during publication",
        },
        body: {
          id: "environmentSetup.banner.setupChanged.body",
          defaultMessage: "Return to the original setup to check publishing status.",
          description: "Banner explanation for the user switched environment configurations during publication",
        },
      }),
      returnToSetup: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.returnToSetup.title",
          defaultMessage: "Couldn’t confirm publishing status",
          description:
            "Banner title for publication history is unavailable on this client; the user must return to the original setup client",
        },
        body: {
          id: "environmentSetup.banner.returnToSetup.body",
          defaultMessage: "Reopen this chat where you started setup to confirm publication.",
          description:
            "Banner explanation for publication history is unavailable on this client; the user must return to the original setup client",
        },
      }),
      settingsUnavailable: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.settingsUnavailable.title",
          defaultMessage: "Couldn’t load your settings",
          description: "Banner title for the required settings refresh failed before a publishing retry",
        },
        body: {
          id: "environmentSetup.banner.settingsUnavailable.body",
          defaultMessage: "Try publishing again to reload your saved settings.",
          description: "Banner explanation for the required settings refresh failed before a publishing retry",
        },
      }),
      connectionNeedsAttention: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.connectionNeedsAttention.title",
          defaultMessage: "Review your settings",
          description:
            "Banner title for an invalid saved outbound identity connection that needs review in Internet access",
        },
        body: {
          id: "environmentSetup.banner.connectionNeedsAttention.body",
          defaultMessage: "Review connections in Internet access before publishing.",
          description:
            "Banner explanation for an invalid saved outbound identity connection that needs review in Internet access",
        },
      }),
      lockedNeedsInvestigation: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.lockedNeedsInvestigation.title",
          defaultMessage: "Draft unavailable",
          description: "Banner title for an earlier publishing attempt left a lock that retry cannot clear",
        },
        body: {
          id: "environmentSetup.banner.lockedNeedsInvestigation.body",
          defaultMessage: "An earlier publishing attempt left this draft locked. Report the issue before trying again.",
          description: "Banner explanation for an earlier publishing attempt left a lock that retry cannot clear",
        },
      }),
      publishUnconfirmed: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.publishUnconfirmed.title",
          defaultMessage: "Couldn’t confirm publishing status",
          description:
            "Banner title for publication completion is unknown and the existing retry first checks saved settings",
        },
        body: {
          id: "environmentSetup.banner.publishUnconfirmed.body",
          defaultMessage: "Try publishing again to check your saved settings.",
          description:
            "Banner explanation for publication completion is unknown and the existing retry first checks saved settings",
        },
      }),
      genericPublishFailed: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.genericPublishFailed.title",
          defaultMessage: "Couldn’t publish environment",
          description: "Banner title for a publishing error without a more specific known cause",
        },
        body: {
          id: "environmentSetup.banner.genericPublishFailed.body",
          defaultMessage: "Try publishing again. If it still fails, report the issue.",
          description: "Banner explanation for a publishing error without a more specific known cause",
        },
      }),
    }
    n.d(
      t,
      {},
      {
        E: function (e) {
          return { title: (0, i.jsx)(a.A, { ...r[e].title }), content: (0, i.jsx)(a.A, { ...r[e].body }) }
        },
      },
    )
  },
  wgP0(e, t, n) {
    var i = n("ABep"),
      a = n("QosV"),
      s = n("zTeN"),
      r = n("zd8w"),
      o = n("oyxz"),
      l = n("SPnB"),
      d = n("Sm6l"),
      c = n("OWtl"),
      u = n("nply"),
      p = n("HhRW"),
      h = n("tFcq"),
      m = n("USmf"),
      f = n("BbjC"),
      g = n("pKvz"),
      v = n("f8Uq")
    function b(e) {
      let { valuesSaved: t } = e
      return t
    }
    function y(e) {
      return e + 1
    }
    n.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            n,
            x,
            w,
            S,
            _,
            j,
            k = (0, a.c)(18),
            { conversationId: T } = e,
            M = (0, s.gh)(c.u),
            A = (0, s._U)(v.Ks, T),
            [C, P] = (0, r.useState)("ready")
          k[0] !== T || k[1] !== M
            ? ((t = async () => {
                let e = M.get(p.fm, T),
                  t = M.get(p.De, T),
                  n = M.get(p.Jo, T),
                  i = M.get(m.hV, T),
                  a = () => M.get(v.b2, T).isPending || M.get(u.km, T).isPending
                if (!(null == e || null != e.approval || a())) {
                  P("pending")
                  try {
                    let { data: r } = await M.get(v.wc, T).refetch({ throwOnError: !0 }),
                      o = M.get(p.fm, T)
                    if (
                      null == o ||
                      !(0, h.mk)(o, e) ||
                      o.accountId !== M.get(l.chatGptAuthenticatedAccountId$) ||
                      o.userId !== M.get(l.chatGptAuthenticatedUserId$) ||
                      null != o.approval ||
                      o.draftConflict !== e.draftConflict ||
                      a() ||
                      r?.id !== o.configId ||
                      (null != o.draftId && r.draft?.id !== o.draftId) ||
                      M.get(p.De, T) !== t ||
                      M.get(p.Jo, T) !== n ||
                      M.get(m.hV, T) !== i
                    )
                      return void P("ready")
                    ;((0, s.Y)(M, () => {
                      ;(M.set(p.Jo, T, null),
                        M.set(m.hV, T, null),
                        M.set(p.De, T, M.get(f.Ps, T)),
                        "revision" === o.draftConflict && (0, p.e2)(M, T, { ...o, draftConflict: void 0 }),
                        (0, v.gN)(M, T),
                        M.set(h.yu, T, y))
                    }),
                      P("ready"))
                  } catch {
                    P("error")
                  }
                }
              }),
              (k[0] = T),
              (k[1] = M),
              (k[2] = t))
            : (t = k[2])
          let I = t
          ;(k[3] !== A
            ? ((n =
                A instanceof g.nu &&
                A.issues.some(b) &&
                (0, i.jsx)("p", {
                  className: "text-sm",
                  children: (0, i.jsx)(o.A, {
                    id: "environmentSetup.discard.valuesAlreadySaved",
                    defaultMessage:
                      "Some secret or variable values were already saved. Discarding unsaved changes won’t undo those saves",
                    description:
                      "Explains that discarding local edits after a partial save does not delete values already written to the server",
                  }),
                })),
              (k[3] = A),
              (k[4] = n))
            : (n = k[4]),
            k[5] !== C
              ? ((x =
                  "error" === C &&
                  (0, i.jsx)("p", {
                    role: "alert",
                    className: "text-sm",
                    children: (0, i.jsx)(o.A, {
                      id: "environmentSetup.discard.loadFailed",
                      defaultMessage: "Couldn’t load the latest settings. Your unsaved changes are still here",
                      description:
                        "Shown when refreshing fails before discarding local environment edits; no edits have been discarded",
                    }),
                  })),
                (k[5] = C),
                (k[6] = x))
              : (x = k[6]))
          let N = "pending" === C,
            U = "pending" === C
          return (
            k[7] !== I ? ((w = () => void I()), (k[7] = I), (k[8] = w)) : (w = k[8]),
            k[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((S = (0, i.jsx)(o.A, {
                  id: "environmentSetup.discard.unsavedChanges",
                  defaultMessage: "Discard unsaved changes",
                  description:
                    "Discard local environment editor inputs and load the latest saved settings without writing to the server",
                })),
                (k[9] = S))
              : (S = k[9]),
            k[10] !== N || k[11] !== U || k[12] !== w
              ? ((_ = (0, i.jsx)(d.$, {
                  color: "secondary",
                  size: "dialog",
                  disabled: N,
                  loading: U,
                  onClick: w,
                  children: S,
                })),
                (k[10] = N),
                (k[11] = U),
                (k[12] = w),
                (k[13] = _))
              : (_ = k[13]),
            k[14] !== n || k[15] !== x || k[16] !== _
              ? ((j = (0, i.jsxs)("div", { className: "flex flex-col items-start gap-2", children: [n, x, _] })),
                (k[14] = n),
                (k[15] = x),
                (k[16] = _),
                (k[17] = j))
              : (j = k[17]),
            j
          )
        },
      },
    )
  },
  bMv2(e, t, n) {
    var i = n("zTeN"),
      a = n("SPnB"),
      s = n("OWtl"),
      r = n("V3rO")
    let o = (0, i.vP)(s.u, new Map()),
      l = (0, i.i1)(s.u, (e, { get: t }) => {
        if (null == e) return null
        let n = t(o).get(e)
        return null != n &&
          n.accountId === t(a.chatGptAuthenticatedAccountId$) &&
          n.userId === t(a.chatGptAuthenticatedUserId$) &&
          null != t(r.Pt, e)
          ? n
          : null
      })
    n.d(t, {}, { m: l, r: o })
  },
  gW5Q(e, t, n) {
    var i = n("ABep"),
      a = n("QosV"),
      s = n("oyxz"),
      r = n("zKCW"),
      o = n("bVeK")
    n.d(
      t,
      {},
      {
        E: function (e) {
          let t,
            n,
            r = (0, a.c)(3),
            { publicationFailed: l } = e,
            d = void 0 !== l && l
          return (
            r[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, i.jsx)(o.Gmf, { className: "text-danger" })), (r[0] = t))
              : (t = r[0]),
            r[1] !== d
              ? ((n = (0, i.jsxs)(i.Fragment, {
                  children: [
                    t,
                    d
                      ? (0, i.jsx)(s.A, {
                          id: "environmentSetup.footer.publicationFailed",
                          defaultMessage: "Couldn’t publish",
                          description: "Compact footer status for a confirmed failed environment publication",
                        })
                      : (0, i.jsx)(s.A, {
                          id: "environmentSetup.footer.needsAttention",
                          defaultMessage: "Needs attention",
                          description:
                            "Compact footer status when environment settings or publishing status need attention; details appear in the banner above",
                        }),
                  ],
                })),
                (r[1] = d),
                (r[2] = n))
              : (n = r[2]),
            n
          )
        },
        W: function (e) {
          let t,
            n,
            s,
            o,
            l,
            d = (0, a.c)(13),
            { children: c, status: u, error: p, errorActions: h } = e
          return (
            d[0] !== p || d[1] !== h
              ? ((t =
                  null != p &&
                  (0, i.jsx)(r.l, {
                    variant: "callout",
                    type: "error",
                    layout: "vertical",
                    role: "alert",
                    title: p.title,
                    content: p.content,
                    customCtas: h,
                  })),
                (d[0] = p),
                (d[1] = h),
                (d[2] = t))
              : (t = d[2]),
            d[3] !== u
              ? ((n = (0, i.jsx)("div", {
                  className: "flex min-w-0 flex-auto items-center gap-2 text-secondary",
                  children: u,
                })),
                (d[3] = u),
                (d[4] = n))
              : (n = d[4]),
            d[5] !== c
              ? ((s = (0, i.jsx)("div", { className: "ms-auto flex shrink-0 items-center gap-2", children: c })),
                (d[5] = c),
                (d[6] = s))
              : (s = d[6]),
            d[7] !== n || d[8] !== s
              ? ((o = (0, i.jsxs)("div", { className: "flex min-w-0 flex-wrap items-center gap-2", children: [n, s] })),
                (d[7] = n),
                (d[8] = s),
                (d[9] = o))
              : (o = d[9]),
            d[10] !== t || d[11] !== o
              ? ((l = (0, i.jsxs)("div", {
                  className: "flex min-w-0 flex-col gap-3 text-sm select-none",
                  children: [t, o],
                })),
                (d[10] = t),
                (d[11] = o),
                (d[12] = l))
              : (l = d[12]),
            l
          )
        },
      },
    )
  },
  ocr9(e, t, n) {
    n.d(t, { d: () => em })
    var i = n("ABep"),
      a = n("QosV"),
      s = n("zTeN"),
      r = n("Eh2x"),
      o = n("mtDM"),
      l = n("oyxz"),
      d = n("vdpW"),
      c = n("Sm6l"),
      u = n("eA5w"),
      p = n("NxjN"),
      h = n("ULpA"),
      m = n("nply"),
      f = n("wuQx"),
      g = n("QvRd"),
      v = n("M5B1"),
      b = n("GjOp"),
      y = n("zKCW"),
      x = n("wgP0"),
      w = n("zd8w"),
      S = n("OWtl"),
      _ = n("HhRW"),
      j = n("USmf"),
      k = n("B9et")
    function T(e) {
      let t,
        n,
        r,
        o,
        d,
        c,
        u = (0, a.c)(17),
        { conversationId: p } = e,
        h = (0, s.gh)(S.u),
        [m, f] = (0, w.useState)("available"),
        g = (0, s._U)(k.WT, p),
        v = (0, s._U)(k.SZ, p)
      return g?.phase !== "ready" || null == v
        ? null
        : (u[0] !== m
            ? ((t =
                "confirming" === m
                  ? (0, i.jsx)(l.A, {
                      id: "environmentSetup.conflict.restoreDescription",
                      defaultMessage:
                        "This replaces any unsaved edits currently in the editor, including secret and variable inputs. Review the restored changes before saving. Nothing is saved or sent to the agent by this action.",
                      description:
                        "Explains what restoring preserved inputs replaces; saving remains a separate user action",
                    })
                  : (0, i.jsx)(l.A, {
                      id: "environmentSetup.conflict.savedInputs",
                      defaultMessage:
                        "Your previous unsaved edits are still available in this window. You can restore them to the editor and review them before saving.",
                      description:
                        "Same-chat recovery retains local edits separately from the new draft and agent turn",
                    })),
              (n =
                "confirming" === m
                  ? (0, i.jsx)(l.A, {
                      id: "environmentSetup.conflict.restoreConfirm",
                      defaultMessage: "Restore edits",
                      description: "Replace the current editor inputs with preserved environment edits for review",
                    })
                  : (0, i.jsx)(l.A, {
                      id: "environmentSetup.conflict.restoreInputs",
                      defaultMessage: "Restore unsaved edits",
                      description:
                        "Restore preserved inputs, asking for confirmation if this would replace newer local edits",
                    })),
              (u[0] = m),
              (u[1] = t),
              (u[2] = n))
            : ((t = u[1]), (n = u[2])),
          u[3] !== p || u[4] !== v || u[5] !== g || u[6] !== h || u[7] !== m
            ? ((r = () => {
                let e = h.get(_.fm, p)
                if (h.get(k.WT, p) === g && e?.draftId === g.target.draftId) {
                  if ("confirming" !== m && (null != h.get(_.Jo, p) || null != h.get(j.hV, p)))
                    return void f("confirming")
                  ;(h.set(_.Jo, p, v.changes),
                    h.set(j.hV, p, null == v.inputs ? null : { ...v.inputs, requestId: void 0, secretsDraft: void 0 }),
                    (0, _.e2)(h, p, { ...e, recovery: { ...g, editsRestored: !0 } }))
                }
              }),
              (u[3] = p),
              (u[4] = v),
              (u[5] = g),
              (u[6] = h),
              (u[7] = m),
              (u[8] = r))
            : (r = u[8]),
          u[9] !== m
            ? ((o =
                "confirming" === m
                  ? (0, i.jsx)(l.A, {
                      id: "environmentSetup.conflict.restoreCancel",
                      defaultMessage: "Cancel",
                      description: "Cancel restoring unsaved environment edits",
                    })
                  : void 0),
              (u[9] = m),
              (u[10] = o))
            : (o = u[10]),
          u[11] === Symbol.for("react.memo_cache_sentinel") ? ((d = () => f("available")), (u[11] = d)) : (d = u[11]),
          u[12] !== t || u[13] !== n || u[14] !== r || u[15] !== o
            ? ((c = (0, i.jsx)(y.l, {
                variant: "callout",
                content: t,
                primaryCtaText: n,
                onPrimaryCtaClick: r,
                secondaryCtaText: o,
                onSecondaryCtaClick: d,
              })),
              (u[12] = t),
              (u[13] = n),
              (u[14] = r),
              (u[15] = o),
              (u[16] = c))
            : (c = u[16]),
          c)
    }
    var M = n("s4rT")
    function A(e) {
      let t,
        n,
        r,
        o,
        d,
        u,
        p = (0, a.c)(37),
        { conversationId: m } = e,
        f = (0, s._U)(h.pe, m),
        v = (0, s._U)(h.xp, m),
        w = (0, s._U)(b.Pn, m),
        S = (0, s._U)(k.WT, m),
        _ = (0, s._U)(k.SZ, m),
        { mutate: j, isPending: A } = (0, s._U)(M.s, m)
      if (null == w) {
        let e,
          t = S?.sourceDraftId
        return (
          p[0] !== m || p[1] !== t
            ? ((e = (0, i.jsx)(T, { conversationId: m }, t)), (p[0] = m), (p[1] = t), (p[2] = e))
            : (e = p[2]),
          e
        )
      }
      let C = S?.phase === "start-unconfirmed" || (S?.phase === "starting" && !A),
        P = S?.phase === "unsupported",
        I = null == f ? !v : f.isActive,
        N = null
      if ("base" === w) {
        let e, n
        if (
          (p[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(l.A, {
                id: "environmentSetup.conflict.base",
                defaultMessage:
                  "A newer version has been published. Load the latest base in this chat and ask the agent to reapply your changes. Your unsaved editor inputs will be preserved separately.",
                description: "Explains the user-confirmed same-chat recovery flow after another draft publishes",
              })),
              (p[3] = e))
            : (e = p[3]),
          (t = e),
          p[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, i.jsx)(l.A, {
                id: "environmentSetup.conflict.loadLatest",
                defaultMessage: "Load latest base",
                description: "Create a replacement draft and ask the agent to reapply changes in the same chat",
              })),
              (p[4] = n))
            : (n = p[4]),
          (N = n),
          null != _)
        ) {
          let e
          ;(p[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(l.A, {
                id: "environmentSetup.conflict.restoreBeforeRecovery",
                defaultMessage:
                  "A newer version has been published. Restore your previous unsaved edits below before loading the latest base again.",
                description:
                  "Keep earlier unsaved changes accessible until the user restores them before another recovery",
              })),
              (p[5] = e))
            : (e = p[5]),
            (t = e))
        } else if (C) {
          let e, n
          ;(p[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(l.A, {
                id: "environmentSetup.conflict.turnUnconfirmed",
                defaultMessage:
                  "The draft may already have switched, but we couldn’t confirm whether the reapply message was accepted. Check recovery to look for the accepted message. Your edits and replacement draft are preserved.",
                description: "A missing turn response does not mean the draft switch or message failed",
              })),
              (p[6] = e))
            : (e = p[6]),
            (t = e),
            p[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, i.jsx)(l.A, {
                  id: "environmentSetup.conflict.checkRecovery",
                  defaultMessage: "Check recovery",
                  description: "Read recent turns to check whether the recovery message was accepted",
                })),
                (p[7] = n))
              : (n = p[7]),
            (N = n))
        } else if (P) {
          let e
          ;(p[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(l.A, {
                id: "environmentSetup.conflict.recoveryUnavailable",
                defaultMessage:
                  "Recovery in this chat is not available yet. Your draft and edits are still here. Ask the agent to attach the proposed scripts and helper files before opening a new setup chat from environment settings. Keep your unsaved editor inputs until they have been included in the handoff.",
                description:
                  "Safe fallback when the backend does not support same-chat draft recovery; preserve proposed files and editor inputs before the user starts another setup chat",
              })),
              (p[8] = e))
            : (e = p[8]),
            (t = e))
        } else if (S?.phase === "created") {
          let e, n
          ;(p[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(l.A, {
                id: "environmentSetup.conflict.turnRejected",
                defaultMessage:
                  "The new draft is ready, but the reapply message did not start. Retry recovery to use the same draft.",
                description: "Retry after a rejected turn reuses the created draft and environment",
              })),
              (p[9] = e))
            : (e = p[9]),
            (t = e),
            p[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, i.jsx)(l.A, {
                  id: "environmentSetup.conflict.retryRecovery",
                  defaultMessage: "Retry recovery",
                  description: "Retry the reapply turn using the existing replacement draft without creating another",
                })),
                (p[10] = n))
              : (n = p[10]),
            (N = n))
        } else if (S?.phase !== "unconfirmed" && (S?.phase !== "creating" || A)) {
          if (I) {
            let e
            ;(p[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(l.A, {
                  id: "environmentSetup.conflict.waitForChat",
                  defaultMessage: "Wait for this chat to finish loading or running before recovery",
                  description: "Draft replacement requires a loaded and idle conversation",
                })),
                (p[12] = e))
              : (e = p[12]),
              (t = e))
          }
        } else {
          let e
          ;(p[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(l.A, {
                id: "environmentSetup.conflict.createUnconfirmed",
                defaultMessage:
                  "We couldn’t confirm whether the new draft was created. Another attempt may create an additional draft and environment.",
                description:
                  "Draft creation is non-idempotent and requires an explicit user retry after an unconfirmed response",
              })),
              (p[11] = e))
            : (e = p[11]),
            (t = e))
        }
      } else {
        let e
        ;(p[13] !== w
          ? ((e =
              "revision" === w
                ? (0, g.E)("unsavedChangesConflict").content
                : (0, i.jsx)(l.A, {
                    id: "environmentSetup.conflict.locked",
                    defaultMessage:
                      "This draft is locked, and publishing may still be in progress. Check the publishing chat before trying again. Your edits are still here.",
                    description:
                      "A locked draft is distinct from a stale revision; reading it does not prove that publication failed or unlock it",
                  })),
            (p[13] = w),
            (p[14] = e))
          : (e = p[14]),
          (t = e))
      }
      if ("revision" === w) {
        let e
        ;(p[15] !== m ? ((e = (0, i.jsx)(x.Z, { conversationId: m })), (p[15] = m), (p[16] = e)) : (e = p[16]), (n = e))
      } else if ("base" === w) {
        let e,
          t,
          a = A || null != _ || (!C && (P || I))
        ;(p[17] !== C || p[18] !== j
          ? ((e = () => j(C ? "check" : "recover")), (p[17] = C), (p[18] = j), (p[19] = e))
          : (e = p[19]),
          p[20] !== N || p[21] !== A || p[22] !== a || p[23] !== e
            ? ((t = (0, i.jsx)(c.$, { color: "primary", loading: A, disabled: a, onClick: e, children: N })),
              (p[20] = N),
              (p[21] = A),
              (p[22] = a),
              (p[23] = e),
              (p[24] = t))
            : (t = p[24]),
          (n = t))
      }
      let U = "locked" === w ? "draftLocked" : "environmentChanged"
      ;(p[25] !== U ? ((r = (0, g.E)(U)), (p[25] = U), (p[26] = r)) : (r = p[26]),
        p[27] !== n || p[28] !== t || p[29] !== r.title
          ? ((o = (0, i.jsx)(y.l, {
              variant: "callout",
              type: "warning",
              layout: "vertical",
              title: r.title,
              content: t,
              customCtas: n,
            })),
            (p[27] = n),
            (p[28] = t),
            (p[29] = r.title),
            (p[30] = o))
          : (o = p[30]))
      let E = S?.sourceDraftId
      return (
        p[31] !== m || p[32] !== E
          ? ((d = (0, i.jsx)(T, { conversationId: m }, E)), (p[31] = m), (p[32] = E), (p[33] = d))
          : (d = p[33]),
        p[34] !== o || p[35] !== d
          ? ((u = (0, i.jsxs)(i.Fragment, { children: [o, d] })), (p[34] = o), (p[35] = d), (p[36] = u))
          : (u = p[36]),
        u
      )
    }
    function C(e) {
      if (e.canRetryPublication) return (0, g.E)("publishFailed")
      if (e.blocked) return (0, g.E)("draftLocked")
      if (e.debugInfo?.state === "SUCCEEDED") return (0, g.E)("reconnectFailed")
      switch (e.interruptionReason) {
        case "authentication":
        case "authentication_changed":
        case "account_changed":
          return (0, g.E)("authentication")
        case "access_denied":
          return (0, g.E)("accessDenied")
        case "plan_not_supported":
          return (0, g.E)("planNotSupported")
        case "configuration_changed":
          return (0, g.E)("setupChanged")
        case "wait_limit":
        case "not_found":
        case "invalid_response":
        case "unavailable":
          return (0, g.E)("statusUnknown")
      }
    }
    function P(e) {
      let t,
        n,
        s = (0, a.c)(4),
        { error: r } = e
      return (
        s[0] !== r ? ((t = C(r)), (s[0] = r), (s[1] = t)) : (t = s[1]),
        s[2] !== t.content
          ? ((n = (0, i.jsx)(i.Fragment, { children: t.content })), (s[2] = t.content), (s[3] = n))
          : (n = s[3]),
        n
      )
    }
    var I = n("Qgfj")
    function N(e) {
      let t = e?.failure,
        n = t?.vpn_failure_stage,
        a = t?.vpn_failure_class,
        s = null != n && null != a ? U.get(`${n}:${a}`) : void 0
      return null != s
        ? { ...(0, g.E)("vpn"), content: (0, i.jsx)(l.A, { ...s }) }
        : t?.code === "APPROVAL_FAILED_AFTER_SNAPSHOT"
          ? (0, g.E)("publishIncomplete")
          : (0, g.E)("investigation")
    }
    let U = new Map(
      Object.entries(
        (0, I.YK)({
          "setup:unknown": {
            id: "environmentSetup.vpnFailure.setupUnknown",
            defaultMessage: "Publishing failed during proxy setup. The command exited without a known cause",
            description:
              "The replacement VPN proxy failed before starting the Tailscale daemon; the private command output did not identify a safe cause",
          },
          "daemon_start:socket_timeout": {
            id: "environmentSetup.vpnFailure.daemonSocketTimeout",
            defaultMessage: "Publishing failed during daemon startup. The Tailscale socket timed out",
            description:
              "The replacement VPN proxy's Tailscale daemon did not open its socket before the startup deadline",
          },
          "daemon_start:daemon_exited": {
            id: "environmentSetup.vpnFailure.daemonExitedEarly",
            defaultMessage: "Publishing failed during daemon startup. Tailscale exited",
            description: "The replacement VPN proxy's Tailscale daemon exited before its socket was ready",
          },
          "daemon_start:tun_permission": {
            id: "environmentSetup.vpnFailure.daemonTunPermission",
            defaultMessage: "Publishing failed during daemon startup. The TUN device lacks permission",
            description: "The replacement VPN proxy's Tailscale daemon was denied permission to use its TUN device",
          },
          "daemon_start:tun_unavailable": {
            id: "environmentSetup.vpnFailure.daemonTunUnavailable",
            defaultMessage: "Publishing failed during daemon startup. The TUN device is unavailable",
            description: "The replacement VPN proxy's Tailscale daemon could not find its TUN device",
          },
          "daemon_start:route_permission": {
            id: "environmentSetup.vpnFailure.daemonRoutePermission",
            defaultMessage: "Publishing failed during daemon startup. Route setup lacks permission",
            description:
              "The replacement VPN proxy's Tailscale daemon was denied permission to configure network routes",
          },
          "tailscale_up:tun_permission": {
            id: "environmentSetup.vpnFailure.enrollmentTunPermission",
            defaultMessage: "Publishing failed during Tailscale enrollment. The TUN device lacks permission",
            description: "The replacement VPN proxy was denied permission to use its TUN device while enrolling",
          },
          "tailscale_up:tun_unavailable": {
            id: "environmentSetup.vpnFailure.enrollmentTunUnavailable",
            defaultMessage: "Publishing failed during Tailscale enrollment. The TUN device is unavailable",
            description: "The replacement VPN proxy could not find its TUN device while enrolling",
          },
          "tailscale_up:route_permission": {
            id: "environmentSetup.vpnFailure.enrollmentRoutePermission",
            defaultMessage: "Publishing failed during Tailscale enrollment. Route setup lacks permission",
            description: "The replacement VPN proxy was denied permission to configure network routes while enrolling",
          },
          "tailscale_up:daemon_exited": {
            id: "environmentSetup.vpnFailure.enrollmentDaemonExited",
            defaultMessage: "Publishing failed during Tailscale enrollment. The daemon exited",
            description: "The replacement VPN proxy's Tailscale daemon stopped during enrollment",
          },
          "tailscale_up:daemon_unavailable": {
            id: "environmentSetup.vpnFailure.enrollmentDaemonUnavailable",
            defaultMessage: "Publishing failed during Tailscale enrollment. The daemon is unreachable",
            description: "The replacement VPN proxy's Tailscale client could not reach its local daemon",
          },
          "tailscale_up:auth_key_file_unavailable": {
            id: "environmentSetup.vpnFailure.enrollmentKeyFile",
            defaultMessage: "Publishing failed during Tailscale enrollment. The auth key file is unavailable",
            description: "The replacement VPN proxy's Tailscale client could not read its staged auth key file",
          },
          "tailscale_up:auth_rejected": {
            id: "environmentSetup.vpnFailure.enrollmentAuthRejected",
            defaultMessage:
              "Your VPN access key was rejected. Review the VPN connection in Internet access and replace its key before retrying",
            description: "The replacement VPN proxy's Tailscale client rejected the saved VPN authorization key",
          },
          "tailscale_up:approval_required": {
            id: "environmentSetup.vpnFailure.enrollmentApprovalRequired",
            defaultMessage:
              "Your VPN needs approval. Ask a Tailscale administrator for a pre-approved auth key, then update the VPN connection in Internet access",
            description:
              "The replacement VPN proxy's Tailscale device requires administrator approval; an administrator can provide an auth key that pre-approves new devices",
          },
          "tailscale_up:dns_failure": {
            id: "environmentSetup.vpnFailure.enrollmentDns",
            defaultMessage: "Publishing failed during Tailscale enrollment. DNS lookup failed",
            description: "The replacement VPN proxy's Tailscale client could not resolve a required host",
          },
          "tailscale_up:network_unreachable": {
            id: "environmentSetup.vpnFailure.enrollmentNetwork",
            defaultMessage: "Publishing failed during Tailscale enrollment. The network is unreachable",
            description:
              "The replacement VPN proxy's Tailscale client reported an unreachable network or missing route",
          },
          "tailscale_up:timeout": {
            id: "environmentSetup.vpnFailure.enrollmentTimeout",
            defaultMessage: "Publishing failed during Tailscale enrollment. The connection timed out",
            description: "The replacement VPN proxy's Tailscale enrollment exceeded its network deadline",
          },
          "tailscale_up:unsupported_option": {
            id: "environmentSetup.vpnFailure.enrollmentOption",
            defaultMessage: "Publishing failed during Tailscale enrollment. The client rejected a command option",
            description:
              "The replacement VPN proxy's installed Tailscale client did not recognize an enrollment option",
          },
          "tailscale_up:permission_denied": {
            id: "environmentSetup.vpnFailure.enrollmentPermission",
            defaultMessage: "Publishing failed during Tailscale enrollment. Permission was denied",
            description:
              "The replacement VPN proxy's Tailscale client was denied a required operation during enrollment",
          },
          "tailscale_up:backend_error": {
            id: "environmentSetup.vpnFailure.enrollmentBackend",
            defaultMessage: "Publishing failed during Tailscale enrollment. Tailscale reported a backend error",
            description: "The replacement VPN proxy's Tailscale client reported an unspecified backend error",
          },
          "tailscale_up:unknown": {
            id: "environmentSetup.vpnFailure.enrollmentUnknown",
            defaultMessage: "Publishing failed during Tailscale enrollment. The command exited without a known cause",
            description:
              "The replacement VPN proxy's Tailscale command failed without enough safe evidence to classify its cause",
          },
        }),
      ),
    )
    function E(e) {
      let t,
        n,
        s,
        r = (0, a.c)(9),
        { children: o, message: l, icon: d, role: c } = e,
        u = void 0 === c ? "status" : c
      return (
        r[0] !== d || r[1] !== l || r[2] !== u
          ? ((t =
              null == l
                ? null
                : (0, i.jsxs)("div", {
                    className: "flex min-w-0 items-start gap-2",
                    children: [d, (0, i.jsx)("div", { className: "min-w-0 flex-1 break-words", role: u, children: l })],
                  })),
            (r[0] = d),
            (r[1] = l),
            (r[2] = u),
            (r[3] = t))
          : (t = r[3]),
        r[4] !== o
          ? ((n = (0, i.jsx)("div", {
              className: "flex min-w-0 flex-wrap items-center justify-end gap-2",
              children: o,
            })),
            (r[4] = o),
            (r[5] = n))
          : (n = r[5]),
        r[6] !== t || r[7] !== n
          ? ((s = (0, i.jsxs)("div", {
              className: "flex min-w-0 flex-col gap-2 text-sm select-none",
              children: [t, n],
            })),
            (r[6] = t),
            (r[7] = n),
            (r[8] = s))
          : (s = r[8]),
        s
      )
    }
    function R(e) {
      let t,
        n,
        s,
        r = (0, a.c)(7),
        { children: o, secondaryActions: l } = e
      return (
        r[0] !== l
          ? ((t = (0, i.jsx)("div", { className: "flex min-w-0 flex-auto flex-wrap items-center gap-2", children: l })),
            (r[0] = l),
            (r[1] = t))
          : (t = r[1]),
        r[2] !== o
          ? ((n = (0, i.jsx)("div", {
              className: "ms-auto flex max-w-full shrink-0 flex-wrap items-center justify-end gap-2",
              children: o,
            })),
            (r[2] = o),
            (r[3] = n))
          : (n = r[3]),
        r[4] !== t || r[5] !== n
          ? ((s = (0, i.jsxs)(i.Fragment, { children: [t, n] })), (r[4] = t), (r[5] = n), (r[6] = s))
          : (s = r[6]),
        s
      )
    }
    function F(e) {
      let t,
        n,
        s = (0, a.c)(5),
        { children: r, operation: o } = e
      return (
        s[0] !== o ? ((t = N(o)), (s[0] = o), (s[1] = t)) : (t = s[1]),
        s[2] !== r || s[3] !== t.content
          ? ((n = (0, i.jsx)(E, { message: t.content, role: "alert", children: r })),
            (s[2] = r),
            (s[3] = t.content),
            (s[4] = n))
          : (n = s[4]),
        n
      )
    }
    var B = n("gW5Q"),
      D = n("slpy"),
      V = n("xUAl"),
      K = n("HOLv"),
      Y = n("bVeK"),
      z = n("RNul")
    let W = (0, I.YK)({
      publish: {
        id: "restricted.environmentSetup.result.promote",
        defaultMessage: "Publish",
        description: "Button that publishes an environment draft so it can run tasks",
      },
      republish: {
        id: "restricted.environmentSetup.result.republish",
        defaultMessage: "Republish",
        description:
          "Publishes another environment snapshot after further agent activity, which may have changed files or installed packages",
      },
      retry: {
        id: "restricted.environmentSetup.result.retryPromotion",
        defaultMessage: "Retry publishing",
        description: "Retries publishing the reviewed environment setup, reusing its saved snapshot when available",
      },
      check: {
        id: "restricted.environmentSetup.result.checkPublishingStatus",
        defaultMessage: "Check status",
        description: "Resume following a saved environment publishing operation without starting a new publication",
      },
      checkAgain: {
        id: "environmentSetup.checkPublishingAgain",
        defaultMessage: "Check again",
        description:
          "Retries finding the same publishing attempt; this does not restart publication or guarantee recovery",
      },
      reconnect: {
        id: "environmentSetup.reconnectChat",
        defaultMessage: "Try again",
        description: "Retries reconnecting the setup chat after confirmed publication, without taking another snapshot",
      },
      publishing: {
        id: "restricted.environmentSetup.result.promoting",
        defaultMessage: "Publishing",
        description:
          "Short disabled button label while the environment is publishing; elapsed time appears separately in the status",
      },
      connecting: {
        id: "environmentSetup.reconnectingChat",
        defaultMessage: "Connecting…",
        description:
          "Short disabled button label while the app automatically reconnects the setup chat after publication",
      },
    })
    function O(e) {
      let t,
        n,
        r,
        o,
        d,
        c = (0, a.c)(26),
        { conversationId: u, children: p, elapsedOnly: h, compact: g } = e,
        v = void 0 !== h && h,
        b = void 0 !== g && g,
        y = (0, s._U)(_.fm, u),
        x = (0, s._U)(f.Sn, u),
        S = y?.approval,
        j = (0, s._U)(m.pl, u),
        k = null != S && x?.idempotencyKey === S.idempotencyKey ? x.state : "checking",
        [T, M] = (0, w.useState)(Date.now)
      c[0] !== S || c[1] !== j
        ? ((t = S?.startedAt == null ? (j ?? 0 / 0) : Date.parse(S.startedAt)), (c[0] = S), (c[1] = j), (c[2] = t))
        : (t = c[2])
      let A = t,
        C = "SUCCEEDED" === k
      ;(c[3] !== v || c[4] !== C || c[5] !== A
        ? ((n = () => {
            if ((!v && C) || !Number.isFinite(A)) return
            let e = setInterval(
              () =>
                M((e) => {
                  let t = Date.now()
                  return v || Math.floor((t - A) / 6e4) !== Math.floor((e - A) / 6e4) ? t : e
                }),
              1e3,
            )
            return () => clearInterval(e)
          }),
          (r = [v, C, A]),
          (c[3] = v),
          (c[4] = C),
          (c[5] = A),
          (c[6] = n),
          (c[7] = r))
        : ((n = c[6]), (r = c[7])),
        (0, w.useEffect)(n, r))
      let P = Math.max(0, Math.floor((T - A) / 6e4))
      if (v) {
        let e, t, n, a, s
        c[8] !== T || c[9] !== A
          ? ((e = Number.isFinite(A) ? Math.max(0, Math.floor((T - A) / 1e3)) : 0), (c[8] = T), (c[9] = A), (c[10] = e))
          : (e = c[10])
        let r = e
        ;(c[11] !== r
          ? ((t = Math.floor(r / 60)
              .toString()
              .padStart(2, "0")),
            (c[11] = r),
            (c[12] = t))
          : (t = c[12]),
          c[13] !== r ? ((n = (r % 60).toString().padStart(2, "0")), (c[13] = r), (c[14] = n)) : (n = c[14]))
        let o = `${t}:${n}`
        return (
          c[15] !== b || c[16] !== o
            ? ((a = b
                ? o
                : (0, i.jsx)(l.A, {
                    id: "environmentSetup.publishingElapsedTime",
                    defaultMessage: "{elapsed} elapsed",
                    description:
                      "Elapsed minutes and seconds since environment publishing started, including reconnection; not an estimate of remaining time",
                    values: { elapsed: o },
                  })),
              (c[15] = b),
              (c[16] = o),
              (c[17] = a))
            : (a = c[17]),
          c[18] !== a
            ? ((s = (0, i.jsx)("span", {
                className: "whitespace-nowrap text-secondary tabular-nums",
                role: "timer",
                children: a,
              })),
              (c[18] = a),
              (c[19] = s))
            : (s = c[19]),
          s
        )
      }
      return (
        c[20] !== P ? ((o = Number.isFinite(P) ? P : null), (c[20] = P), (c[21] = o)) : (o = c[21]),
        c[22] !== p || c[23] !== k || c[24] !== o
          ? ((d = (0, i.jsx)(L, { state: k, minutes: o, children: p })),
            (c[22] = p),
            (c[23] = k),
            (c[24] = o),
            (c[25] = d))
          : (d = c[25]),
        d
      )
    }
    function L(e) {
      let t,
        n = (0, a.c)(7),
        { state: s, children: r, minutes: o } = e,
        d = void 0 === o ? null : o,
        c = null
      if ("retrying" === s) {
        let e
        ;(n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(l.A, {
              id: "environmentSetup.retryingStatusCheck",
              defaultMessage: "Can’t read publishing status · Checking again automatically",
              description:
                "The app is automatically retrying a temporary status-read failure, not starting a new publish",
            })),
            (n[0] = e))
          : (e = n[0]),
          (c = e))
      }
      if ("checking" === s || "PENDING" === s || "RUNNING" === s) {
        let e
        ;(n[1] !== d
          ? ((e =
              null != d && d >= 1
                ? (0, i.jsx)(l.A, {
                    id: "environmentSetup.publishingElapsedLabel",
                    defaultMessage: "Publishing · {minutes, plural, one {#m elapsed} other {#m elapsed}}",
                    description:
                      "Publishing status with time since this attempt began on the client, not an estimate of worker progress",
                    values: { minutes: d },
                  })
                : (0, i.jsx)(l.A, {
                    id: "environmentSetup.publicationDurationHint",
                    defaultMessage: "Publishing · This can take a while",
                    description:
                      "Sets expectations beside the elapsed publishing timer without estimating when publishing will finish",
                  })),
            (n[1] = d),
            (n[2] = e))
          : (e = n[2]),
          (c = e))
      }
      if ("SUCCEEDED" === s) {
        let e
        ;(n[3] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)($, {})), (n[3] = e)) : (e = n[3]),
          (c = e))
      }
      return (
        n[4] !== r || n[5] !== c
          ? ((t = (0, i.jsx)(E, { message: c, children: r })), (n[4] = r), (n[5] = c), (n[6] = t))
          : (t = n[6]),
        t
      )
    }
    function $() {
      let e,
        t = (0, a.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(l.A, {
              id: "environmentSetup.connectingDetails",
              defaultMessage: "Published · Connecting this chat automatically. No action needed",
              description:
                "The app reconnects the setup chat automatically after publishing; this is not an instruction for the user",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function q(e) {
      let t,
        n,
        s,
        r = (0, a.c)(20),
        { conversationId: o, state: d, editAction: c, disabled: u, onAction: p } = e
      if ("saving" === d || "publishing" === d) {
        let e,
          t,
          n,
          a,
          s = "saving" === d
        return (
          r[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)("p", {
                children: (0, i.jsx)(l.A, {
                  id: "environmentSetup.pill.publishingHint",
                  defaultMessage: "Publishing can take several minutes",
                  description:
                    "Hover card above the publishing status pill, explaining that publishing a cloud environment can take several minutes",
                }),
              })),
              (r[0] = e))
            : (e = r[0]),
          r[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(K.I, { className: "motion-safe:animate-spin", asset: V.g })), (r[1] = t))
            : (t = r[1]),
          r[2] !== o || r[3] !== d
            ? ((n = (0, i.jsx)(D.m.TriggerDecorator, {
                unstyled: !0,
                className: "min-w-0 rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                children: (0, i.jsx)("div", {
                  children: (0, i.jsx)(G, {
                    icon: t,
                    status:
                      "saving" === d
                        ? (0, i.jsx)("span", {
                            role: "status",
                            children: (0, i.jsx)(l.A, {
                              id: "environmentSetup.pill.saving",
                              defaultMessage: "Saving",
                              description:
                                "Status in the composer pill while environment changes are saved before publication",
                            }),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsx)("span", { role: "status", children: (0, i.jsx)(l.A, { ...W.publishing }) }),
                              (0, i.jsx)(O, { conversationId: o, elapsedOnly: !0, compact: !0 }),
                            ],
                          }),
                  }),
                }),
              })),
              (r[2] = o),
              (r[3] = d),
              (r[4] = n))
            : (n = r[4]),
          r[5] !== s || r[6] !== n
            ? ((a = (0, i.jsx)(D.m, {
                align: "center",
                disabled: s,
                side: "top",
                sideOffset: 4,
                content: e,
                children: n,
              })),
              (r[5] = s),
              (r[6] = n),
              (r[7] = a))
            : (a = r[7]),
          a
        )
      }
      let h = c
      if ("error" === d) {
        let e
        ;(r[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)("span", {
              role: "status",
              children: (0, i.jsx)(l.A, {
                id: "environmentSetup.pill.couldNotPublish",
                defaultMessage: "Couldn’t publish",
                description:
                  "The save and publish flow did not finish; Review opens the panel with error details and recovery actions",
              }),
            })),
            (r[8] = e))
          : (e = r[8]),
          (h = e))
      } else if ("review" === d && null == c) {
        let e
        ;(r[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(l.A, {
              id: "environmentSetup.pill.needsReview",
              defaultMessage: "Needs review",
              description: "Environment configuration needs review before it can be saved and published",
            })),
            (r[9] = e))
          : (e = r[9]),
          (h = e))
      }
      return (
        r[10] !== d
          ? ((t = "error" === d ? (0, i.jsx)(Y.Gmf, { className: "text-danger" }) : void 0), (r[10] = d), (r[11] = t))
          : (t = r[11]),
        r[12] !== d
          ? ((n =
              "ready" === d
                ? (0, i.jsx)(l.A, {
                    id: "environmentSetup.pill.saveAndPublish",
                    defaultMessage: "Save and publish",
                    description: "Save the current environment configuration, then publish it for running tasks",
                  })
                : (0, i.jsx)(l.A, {
                    id: "environmentSetup.pill.review",
                    defaultMessage: "Review",
                    description: "Open the environment panel to review settings or publishing errors",
                  })),
            (r[12] = d),
            (r[13] = n))
          : (n = r[13]),
        r[14] !== u || r[15] !== p || r[16] !== h || r[17] !== t || r[18] !== n
          ? ((s = (0, i.jsx)(G, { status: h, icon: t, action: n, disabled: u, onAction: p })),
            (r[14] = u),
            (r[15] = p),
            (r[16] = h),
            (r[17] = t),
            (r[18] = n),
            (r[19] = s))
          : (s = r[19]),
        s
      )
    }
    function G(e) {
      let t,
        n,
        s,
        r = (0, a.c)(13),
        { status: o, icon: d, action: c, onAction: u, disabled: p, loading: h } = e
      return (
        r[0] !== c || r[1] !== o
          ? ((t =
              null != o &&
              null != c &&
              (0, i.jsx)("span", {
                "aria-hidden": !0,
                className: "text-secondary",
                children: (0, i.jsx)(l.A, {
                  id: "codex.ui.bulletSeparator",
                  defaultMessage: "·",
                  description: "Middle dot separator used between inline items",
                }),
              })),
            (r[0] = c),
            (r[1] = o),
            (r[2] = t))
          : (t = r[2]),
        r[3] !== c || r[4] !== p || r[5] !== h || r[6] !== u
          ? ((n =
              null != c &&
              (0, i.jsxs)("button", {
                className:
                  "flex min-w-0 cursor-interaction items-center gap-1 rounded-sm text-size-chat text-secondary not-disabled:hover:text-default focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-default disabled:opacity-40",
                disabled: p || h,
                type: "button",
                onClick: u,
                children: [h && (0, i.jsx)(z.y, { className: "icon-xxs" }), c, (0, i.jsx)(Y.INk, {})],
              })),
            (r[3] = c),
            (r[4] = p),
            (r[5] = h),
            (r[6] = u),
            (r[7] = n))
          : (n = r[7]),
        r[8] !== d || r[9] !== o || r[10] !== t || r[11] !== n
          ? ((s = (0, i.jsxs)("div", {
              className:
                "flex max-w-full min-w-0 flex-wrap items-center justify-center gap-2 text-size-chat select-none",
              children: [d, o, t, n],
            })),
            (r[8] = d),
            (r[9] = o),
            (r[10] = t),
            (r[11] = n),
            (r[12] = s))
          : (s = r[12]),
        s
      )
    }
    var H = n("DBCl"),
      Q = n("E8Sp"),
      Z = n("SPnB"),
      J = n("j9xU"),
      X = n("Wbxh"),
      ee = n("Q8aV"),
      et = n("ndjw"),
      en = n("nluz"),
      ei = n("tz0P"),
      ea = n("eFn4"),
      es = n("VyEV")
    function er(e) {
      let t,
        n,
        s,
        r,
        o = (0, a.c)(37),
        {
          children: d,
          error: u,
          isOpening: p,
          onStartNewTask: h,
          size: m,
          footerActions: f,
          footerError: g,
          inPill: v,
        } = e,
        b = void 0 === m ? "compact" : m
      if (void 0 !== v && v) {
        let e, t, n, a, s
        return (
          o[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(Y.ALZ, { className: "text-success" })), (o[0] = e))
            : (e = o[0]),
          o[1] !== u?.title
            ? ((t =
                u?.title ??
                (0, i.jsx)(l.A, {
                  id: "environmentSetup.pill.published",
                  defaultMessage: "Environment published",
                  description: "The environment was published and the setup chat reconnected successfully",
                })),
              (o[1] = u?.title),
              (o[2] = t))
            : (t = o[2]),
          o[3] !== t ? ((n = (0, i.jsx)("span", { role: "status", children: t })), (o[3] = t), (o[4] = n)) : (n = o[4]),
          o[5] !== h
            ? ((a =
                null == h
                  ? void 0
                  : (0, i.jsx)(l.A, {
                      id: "environmentSetup.pill.startTask",
                      defaultMessage: "Start a chat",
                      description:
                        "Open a new chat with this published environment selected, without submitting a prompt",
                    })),
              (o[5] = h),
              (o[6] = a))
            : (a = o[6]),
          o[7] !== p || o[8] !== h || o[9] !== n || o[10] !== a
            ? ((s = (0, i.jsx)(G, { icon: e, status: n, action: a, onAction: h, loading: p })),
              (o[7] = p),
              (o[8] = h),
              (o[9] = n),
              (o[10] = a),
              (o[11] = s))
            : (s = o[11]),
          s
        )
      }
      if (null != f) {
        let e,
          t,
          n,
          a,
          s,
          r = u ?? g
        return (
          o[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(Y.ALZ, { className: "text-success" })), (o[12] = e))
            : (e = o[12]),
          o[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)("span", {
                role: "status",
                children: (0, i.jsx)(l.A, {
                  id: "environmentSetup.footer.published",
                  defaultMessage: "Published",
                  description: "Compact status confirming that environment publication and reconnection completed",
                }),
              })),
              (o[13] = t))
            : (t = o[13]),
          o[14] !== p || o[15] !== h
            ? ((n =
                null != h &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("span", {
                      "aria-hidden": !0,
                      children: (0, i.jsx)(l.A, {
                        id: "codex.ui.bulletSeparator",
                        defaultMessage: "·",
                        description: "Middle dot separator used between inline items",
                      }),
                    }),
                    (0, i.jsxs)(c.$, {
                      color: "ghostMuted",
                      loading: p,
                      size: "inline",
                      onClick: h,
                      children: [
                        (0, i.jsx)(l.A, {
                          id: "environmentSetup.footer.try",
                          defaultMessage: "Try",
                          description:
                            "Open a new chat with the published environment selected, without submitting a prompt",
                        }),
                        (0, i.jsx)(Y.INk, {}),
                      ],
                    }),
                  ],
                })),
              (o[14] = p),
              (o[15] = h),
              (o[16] = n))
            : (n = o[16]),
          o[17] !== n
            ? ((a = (0, i.jsxs)(i.Fragment, { children: [e, t, n] })), (o[17] = n), (o[18] = a))
            : (a = o[18]),
          o[19] !== d || o[20] !== f || o[21] !== r || o[22] !== a
            ? ((s = (0, i.jsx)(B.W, { error: r, errorActions: d, status: a, children: f })),
              (o[19] = d),
              (o[20] = f),
              (o[21] = r),
              (o[22] = a),
              (o[23] = s))
            : (s = o[23]),
          s
        )
      }
      o[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)(Y.TlE, { className: "text-success" })), (o[24] = t))
        : (t = o[24])
      let y = null == u ? "status" : "alert"
      return (
        o[25] !== u?.content
          ? ((n =
              u?.content ??
              (0, i.jsx)(l.A, {
                id: "restricted.environmentSetup.result.published",
                defaultMessage: "Environment published",
                description: "Confirms that publishing this Cloud environment completed successfully",
              })),
            (o[25] = u?.content),
            (o[26] = n))
          : (n = o[26]),
        o[27] !== u || o[28] !== p || o[29] !== h || o[30] !== b
          ? ((s =
              null == h
                ? null
                : (0, i.jsx)(c.$, {
                    color: "primary",
                    loading: p,
                    size: b,
                    onClick: h,
                    children:
                      null != u
                        ? (0, i.jsx)(l.A, {
                            id: "environmentSetup.result.retryNewTask",
                            defaultMessage: "Try again",
                            description:
                              "Retries opening a new chat with the published environment after the previous attempt failed",
                          })
                        : (0, i.jsx)(l.A, {
                            id: "restricted.environmentSetup.result.startNewTask",
                            defaultMessage: "Start a new chat",
                            description:
                              "Opens the new-chat composer with the published Cloud environment selected, without submitting a prompt",
                          }),
                  })),
            (o[27] = u),
            (o[28] = p),
            (o[29] = h),
            (o[30] = b),
            (o[31] = s))
          : (s = o[31]),
        o[32] !== d || o[33] !== y || o[34] !== n || o[35] !== s
          ? ((r = (0, i.jsxs)(E, { icon: t, role: y, message: n, children: [d, s] })),
            (o[32] = d),
            (o[33] = y),
            (o[34] = n),
            (o[35] = s),
            (o[36] = r))
          : (r = o[36]),
        r
      )
    }
    var eo = n("I0Zh")
    function el(e) {
      let t,
        n,
        r,
        o,
        d,
        u,
        p,
        m,
        f,
        g,
        v,
        b,
        y = (0, a.c)(46)
      y[0] !== e ? (({ conversationId: t, ...n } = e), (y[0] = e), (y[1] = t), (y[2] = n)) : ((t = y[1]), (n = y[2]))
      let x = (0, s.gh)(S.u),
        { mutate: w, isPending: _ } = (0, s._U)(M.s, t),
        j = (0, s._U)(k.WT, t),
        A = (0, s._U)(k.SZ, t),
        C = (0, s._U)(h.pe, t),
        P = (0, s._U)(h.xp, t),
        { data: I } = (0, s._U)(eo.w, t),
        N = (0, s.Ul)(ea.L5),
        U = j?.phase === "start-unconfirmed" || (j?.phase === "starting" && !_),
        E = j?.phase === "unconfirmed" || (j?.phase === "creating" && !_),
        R = j?.phase === "unsupported",
        F = null == C ? !P : C.isActive
      y[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, i.jsx)(l.A, {
            id: "environmentSetup.publicationHandoff.retry",
            defaultMessage: "Retry connection",
            description:
              "Button in the published environment footer to retry attaching the next editable draft to this chat after automatic handoff failed. Reuses the new draft if it was already created.",
          })),
          (y[3] = r))
        : (r = y[3])
      let B = r
      if (U) {
        let e, t
        ;(y[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(l.A, {
              id: "environmentSetup.continueEditing.check",
              defaultMessage: "Check status",
              description:
                "Button in the published environment footer to check whether this chat switched to the new draft after an uncertain response.",
            })),
            (y[4] = e))
          : (e = y[4]),
          (B = e),
          y[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(l.A, {
                id: "environmentSetup.continueEditing.turnUnconfirmed",
                defaultMessage: "The chat may already have switched drafts. Check status to confirm before editing.",
                description:
                  "Error explanation in the published environment footer after the response to switching this chat to a new draft was lost. Check status reads the existing attempt without creating another draft.",
              })),
              (y[5] = t))
            : (t = y[5]),
          (o = t))
      } else if (E) {
        let e, t
        ;(y[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(l.A, {
              id: "environmentSetup.continueEditing.createAnother",
              defaultMessage: "Create another draft",
              description:
                "Explicit retry button shown with a warning that a previous draft creation may have succeeded and this attempt may create another draft and environment.",
            })),
            (y[6] = e))
          : (e = y[6]),
          (B = e),
          y[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(l.A, {
                id: "environmentSetup.continueEditing.createUnconfirmed",
                defaultMessage:
                  "We couldn’t confirm whether the new draft was created. Another attempt may create an additional draft and environment.",
                description:
                  "Warning in the published environment footer after an uncertain draft creation. The user must explicitly choose Create another draft to attempt creation again.",
              })),
              (y[7] = t))
            : (t = y[7]),
          (o = t))
      } else if (R) {
        let e
        ;(y[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(l.A, {
              id: "environmentSetup.continueEditing.unsupported",
              defaultMessage: "Editing again in this chat is not available yet",
              description:
                "Error in the published environment footer when the connected backend cannot switch this chat to another editing draft.",
            })),
            (y[8] = e))
          : (e = y[8]),
          (o = e))
      } else if (j?.phase === "created") {
        let e
        ;(y[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(l.A, {
              id: "environmentSetup.continueEditing.turnRejected",
              defaultMessage:
                "The new draft is ready, but the chat couldn’t switch to it. Try again to use the same draft.",
              description:
                "Error in the published environment footer after the new draft was created but switching this chat to it was rejected. Retrying reuses that draft.",
            })),
            (y[9] = e))
          : (e = y[9]),
          (o = e))
      }
      let D = j?.sourceDraftId
      y[10] !== t || y[11] !== D
        ? ((d = (0, i.jsx)(T, { conversationId: t }, D)), (y[10] = t), (y[11] = D), (y[12] = d))
        : (d = y[12])
      let V = null == o ? n.error : void 0
      return (
        y[13] !== o || y[14] !== n.footerError
          ? ((u =
              null == o
                ? n.footerError
                : {
                    title: (0, i.jsx)(l.A, {
                      id: "environmentSetup.continueEditing.errorTitle",
                      defaultMessage: "Couldn’t resume editing",
                      description:
                        "Error heading above recovery guidance when the automatic handoff to the next editable environment draft has not completed after publication.",
                    }),
                    content: o,
                  }),
            (y[13] = o),
            (y[14] = n.footerError),
            (y[15] = u))
          : (u = y[15]),
        y[16] !== U || y[17] !== F || y[18] !== I || y[19] !== _ || y[20] !== N || y[21] !== A || y[22] !== R
          ? ((p = _ || null != A || R || (!U && F) || !(0, es.x)(I, N)),
            (y[16] = U),
            (y[17] = F),
            (y[18] = I),
            (y[19] = _),
            (y[20] = N),
            (y[21] = A),
            (y[22] = R),
            (y[23] = p))
          : (p = y[23]),
        y[24] !== U || y[25] !== t || y[26] !== w || y[27] !== x
          ? ((m = () => {
              x.get(M.s, t).isPending || w(U ? "check" : "recover")
            }),
            (y[24] = U),
            (y[25] = t),
            (y[26] = w),
            (y[27] = x),
            (y[28] = m))
          : (m = y[28]),
        y[29] !== _ || y[30] !== B
          ? ((f = _
              ? (0, i.jsx)(l.A, {
                  id: "environmentSetup.publicationHandoff.pending",
                  defaultMessage: "Connecting…",
                  description:
                    "Disabled button in the published environment footer while the next editable draft is being attached to this chat automatically.",
                })
              : B),
            (y[29] = _),
            (y[30] = B),
            (y[31] = f))
          : (f = y[31]),
        y[32] !== _ || y[33] !== n.size || y[34] !== p || y[35] !== m || y[36] !== f
          ? ((g = (0, i.jsx)(c.$, {
              color: "primary",
              size: n.size,
              loading: _,
              disabled: p,
              onClick: m,
              children: f,
            })),
            (y[32] = _),
            (y[33] = n.size),
            (y[34] = p),
            (y[35] = m),
            (y[36] = f),
            (y[37] = g))
          : (g = y[37]),
        y[38] !== n || y[39] !== V || y[40] !== u || y[41] !== g
          ? ((v = (0, i.jsx)(er, { ...n, error: V, footerError: u, footerActions: g })),
            (y[38] = n),
            (y[39] = V),
            (y[40] = u),
            (y[41] = g),
            (y[42] = v))
          : (v = y[42]),
        y[43] !== v || y[44] !== d
          ? ((b = (0, i.jsxs)(i.Fragment, { children: [d, v] })), (y[43] = v), (y[44] = d), (y[45] = b))
          : (b = y[45]),
        b
      )
    }
    var ed = n("f8Uq")
    function ec(e) {
      let t,
        n,
        r,
        o = (0, a.c)(22),
        { configuration: l, conversationId: d, children: c, size: u, footerActions: p, footerError: h, inPill: m } = e,
        f = (0, s.gh)(S.u),
        v = (0, s.Ul)(J.Hn),
        [b, y] = (0, w.useState)(!1),
        [x, j] = (0, w.useState)(!1)
      o[0] !== l.accountId ||
      o[1] !== l.configId ||
      o[2] !== l.draftId ||
      o[3] !== l.promotedTurnId ||
      o[4] !== l.promotedVersionId ||
      o[5] !== l.userId ||
      o[6] !== d ||
      o[7] !== f
        ? ((t = function () {
            ;(y(!0), j(!1))
            let e = f.get(Q.gM).pathname,
              t = function () {
                let t = f.get(_.n6, d),
                  n = f.get(_.fm, d),
                  i = f.query.getData(ed.wc, d)
                return (
                  void 0 !== t &&
                  t === l.promotedTurnId &&
                  !f.get(Z.PO).authLoading &&
                  f.get(Z.chatGptAuthenticatedAccountId$) === l.accountId &&
                  f.get(Z.chatGptAuthenticatedUserId$) === l.userId &&
                  n?.configId === l.configId &&
                  n.draftId === l.draftId &&
                  n.promotedVersionId === l.promotedVersionId &&
                  n.promotedTurnId === l.promotedTurnId &&
                  null == n.approval &&
                  i?.id === l.configId &&
                  i.version_id === l.promotedVersionId &&
                  (null == i.draft || (null != l.draftId && i.draft.id === l.draftId)) &&
                  null == f.get(_.U1, d) &&
                  f.get(Q.gM).pathname === e &&
                  f.get(J.Hn)
                )
              }
            ;(0, ei.Cv)(l.accountId, l.userId, [l.configId])
              .then(async (e) => {
                if (!t()) return
                let n = e.ok ? e.configs[0] : void 0
                null != n && (0, ei.gd)(n) && n.latestReadyVersionId === l.promotedVersionId
                  ? (await (0, X.kt)(f, H.Q2Y.SELECTED_PROJECT, null, { throwOnFailure: !0 }),
                    t() &&
                      ((0, et.eP)(f, null),
                      (0, en.F_)(f, n, f.get(et.Gt)),
                      (0, ee.startNewConversation)(f, {
                        codexAppMode: "codex",
                        prefillComposerMode: "local",
                        prefillCloudThreadPrototype: !0,
                      })))
                  : j(!0)
              })
              .catch(() => j(!0))
              .finally(() => y(!1))
          }),
          (o[0] = l.accountId),
          (o[1] = l.configId),
          (o[2] = l.draftId),
          (o[3] = l.promotedTurnId),
          (o[4] = l.promotedVersionId),
          (o[5] = l.userId),
          (o[6] = d),
          (o[7] = f),
          (o[8] = t))
        : (t = o[8])
      let k = t,
        T = null != l.draftId && null != p ? el : er,
        M = v ? k : void 0
      return (
        o[9] !== x ? ((n = x ? (0, g.E)("openTaskFailed") : void 0), (o[9] = x), (o[10] = n)) : (n = o[10]),
        o[11] !== T ||
        o[12] !== c ||
        o[13] !== d ||
        o[14] !== p ||
        o[15] !== h ||
        o[16] !== m ||
        o[17] !== b ||
        o[18] !== u ||
        o[19] !== M ||
        o[20] !== n
          ? ((r = (0, i.jsx)(T, {
              conversationId: d,
              size: u,
              footerActions: p,
              footerError: h,
              inPill: m,
              isOpening: b,
              onStartNewTask: M,
              error: n,
              children: c,
            })),
            (o[11] = T),
            (o[12] = c),
            (o[13] = d),
            (o[14] = p),
            (o[15] = h),
            (o[16] = m),
            (o[17] = b),
            (o[18] = u),
            (o[19] = M),
            (o[20] = n),
            (o[21] = r))
          : (r = o[21]),
        r
      )
    }
    var eu = n("BbjC"),
      ep = n("GhRT"),
      eh = n("UTe7")
    function em(e) {
      let t,
        n,
        d,
        u,
        y,
        x,
        w,
        S,
        j,
        k,
        T,
        M,
        I,
        U,
        D = (0, a.c)(176),
        {
          conversationId: V,
          children: K,
          editingActions: Y,
          editingSummary: z,
          editingError: L,
          inFooter: G,
          hideWhenReviewNeeded: H,
          hasPendingVpn: Q,
          size: Z,
          pill: J,
        } = e,
        X = void 0 !== G && G,
        ee = void 0 !== H && H,
        et = void 0 !== Q && Q,
        en = void 0 === Z ? "compact" : Z,
        ei = (0, s._U)(b.Pn, V),
        ea = (0, s._U)(_.ZF, V),
        es = (0, s._U)(_.fm, V),
        { data: er } = (0, s._U)(ed.wc, V),
        { error: eo, isPending: el, mutate: em } = (0, s._U)(m.km, V),
        eb = (0, s._U)(f.Sn, V),
        ey = (0, s._U)(eu.dH, V) || et,
        ex = (0, s._U)(ep.GM, V),
        ew = (0, s._U)(eh.Ii, V),
        eS = (0, s._U)(ep.tj, V),
        e_ = (0, s._U)(_.n6, V),
        ej = void 0 !== e_,
        ek = (0, s._U)(_.U1, V),
        eT = null != ek,
        eM = (0, s._U)(h.xp, V),
        { isPending: eA } = (0, s._U)(ed.b2, V),
        eC = (0, s._U)(ed.Ks, V),
        eP = (0, s._U)(eu.lD, V),
        eI = (0, s._U)(h.fK, V)
      if ((null != J && eI) || null == er || null == es || null == ea) {
        let e
        return (
          D[0] !== J
            ? ((e = J?.editAction == null ? null : (0, i.jsx)(i.Fragment, { children: J.editAction })),
              (D[0] = J),
              (D[1] = e))
            : (e = D[1]),
          e
        )
      }
      if (null != J && (eA || el)) {
        let e,
          t = eA ? "saving" : "publishing"
        return (
          D[2] !== V || D[3] !== t
            ? ((e = (0, i.jsx)(q, { conversationId: V, state: t })), (D[2] = V), (D[3] = t), (D[4] = e))
            : (e = D[4]),
          e
        )
      }
      if (null != J && eS.length > 0) {
        let e
        return (
          D[5] !== J.editAction
            ? ((e = null == J.editAction ? null : (0, i.jsx)(i.Fragment, { children: J.editAction })),
              (D[5] = J.editAction),
              (D[6] = e))
            : (e = D[6]),
          e
        )
      }
      ;(D[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)(l.A, { ...W.publish })), (D[7] = t))
        : (t = D[7]),
        D[8] !== en
          ? ((n = (0, i.jsx)(c.$, { color: "primary", disabled: !0, size: en, children: t })), (D[8] = en), (D[9] = n))
          : (n = D[9]))
      let eN = n
      if (null != ei) {
        let e, t, n
        if (null != J) {
          let e
          return (
            D[10] !== V || D[11] !== J.onReview
              ? ((e = (0, i.jsx)(q, { conversationId: V, state: "review", onAction: J.onReview })),
                (D[10] = V),
                (D[11] = J.onReview),
                (D[12] = e))
              : (e = D[12]),
            e
          )
        }
        let a = `${es.accountId}:${es.userId}:${es.draftId}`
        return (
          D[13] !== V || D[14] !== a
            ? ((e = (0, i.jsx)(A, { conversationId: V }, a)), (D[13] = V), (D[14] = a), (D[15] = e))
            : (e = D[15]),
          D[16] !== K || D[17] !== Y || D[18] !== L || D[19] !== z || D[20] !== X || D[21] !== eN
            ? ((t = X
                ? (0, i.jsxs)(B.W, { status: z, error: L, errorActions: K, children: [Y, eN] })
                : (0, i.jsxs)("div", {
                    className: "flex min-w-0 flex-wrap items-center justify-end gap-2",
                    children: [z, K, Y],
                  })),
              (D[16] = K),
              (D[17] = Y),
              (D[18] = L),
              (D[19] = z),
              (D[20] = X),
              (D[21] = eN),
              (D[22] = t))
            : (t = D[22]),
          D[23] !== e || D[24] !== t
            ? ((n = (0, i.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2 text-sm select-none",
                children: [e, t],
              })),
              (D[23] = e),
              (D[24] = t),
              (D[25] = n))
            : (n = D[25]),
          n
        )
      }
      let eU = null != es.draftId && eo instanceof b.T6 ? null : eo,
        eE = er.draft,
        eR = es.publicationStateUnknown && null == es.approval && null == eE
      D[26] !== eR ? ((d = eR ? (0, g.E)("returnToSetup").content : null), (D[26] = eR), (D[27] = d)) : (d = D[27])
      let eF = d,
        eB = eU instanceof f.ES ? eU : void 0,
        eD = eB?.canRetryPublication === !0,
        eV = eB?.canRetryRestore === !0,
        eK = null != es.approval && !eD,
        eY = eB?.operation?.state === "FAILED"
      D[28] !== er || D[29] !== eE
        ? ((u = o.Z.optional().safeParse((eE ?? er).outbound_identity_requirements)),
          (D[28] = er),
          (D[29] = eE),
          (D[30] = u))
        : (u = D[30])
      let ez = !u.success,
        eW = eU instanceof m.A6 && ("changed" !== eU.retryIssue || null == eE) ? eU : void 0,
        eO =
          eU instanceof m.A6 &&
          409 === eU.result.status &&
          "draft cannot be edited in its current state" === eU.result.message
      if (
        (null != es.draftId && null != es.promotedVersionId) ||
        (!el &&
          null == es.approval &&
          ej &&
          es.promotedTurnId === e_ &&
          !eT &&
          !et &&
          null == eU &&
          null == eE &&
          es.promotedVersionId === er.version_id)
      ) {
        let e, t
        D[31] !== Y || D[32] !== X || D[33] !== eN
          ? ((e = X ? (0, i.jsxs)(i.Fragment, { children: [Y, eN] }) : void 0),
            (D[31] = Y),
            (D[32] = X),
            (D[33] = eN),
            (D[34] = e))
          : (e = D[34])
        let n = null != J
        return (
          D[35] !== K || D[36] !== es || D[37] !== V || D[38] !== L || D[39] !== en || D[40] !== n || D[41] !== e
            ? ((t = (0, i.jsx)(ec, {
                size: en,
                configuration: es,
                conversationId: V,
                footerActions: e,
                footerError: L,
                inPill: n,
                children: K,
              })),
              (D[35] = K),
              (D[36] = es),
              (D[37] = V),
              (D[38] = L),
              (D[39] = en),
              (D[40] = n),
              (D[41] = e),
              (D[42] = t))
            : (t = D[42]),
          t
        )
      }
      if (null != J) {
        let e,
          t = null != eU || null != eC || eK || eR || eP.length > 0,
          n = t ? "review" : "ready"
        if (((null != eU || null != eC) && (n = "error"), !t && !ew)) {
          let e
          return (
            D[43] !== J.editAction
              ? ((e = null == J.editAction ? null : (0, i.jsx)(i.Fragment, { children: J.editAction })),
                (D[43] = J.editAction),
                (D[44] = e))
              : (e = D[44]),
            e
          )
        }
        let a = t ? J.onReview : J.onSaveAndPublish
        return (
          D[45] !== V || D[46] !== J.editAction || D[47] !== n || D[48] !== a
            ? ((e = (0, i.jsx)(q, { conversationId: V, state: n, editAction: J.editAction, onAction: a })),
              (D[45] = V),
              (D[46] = J.editAction),
              (D[47] = n),
              (D[48] = a),
              (D[49] = e))
            : (e = D[49]),
          e
        )
      }
      if (eY && !eD && !X) {
        let e
        return (
          D[50] !== K || D[51] !== Y || D[52] !== z || D[53] !== eB.operation
            ? ((e = (0, i.jsxs)(F, { operation: eB.operation, children: [z, K, Y] })),
              (D[50] = K),
              (D[51] = Y),
              (D[52] = z),
              (D[53] = eB.operation),
              (D[54] = e))
            : (e = D[54]),
          e
        )
      }
      D[55] !== eK ||
      D[56] !== er ||
      D[57] !== es.draftId ||
      D[58] !== eU ||
      D[59] !== et ||
      D[60] !== ee ||
      D[61] !== ez ||
      D[62] !== eM ||
      D[63] !== el ||
      D[64] !== ey ||
      D[65] !== eV ||
      D[66] !== eE?.base_version_id ||
      D[67] !== ek
        ? ((y =
            ((ee && (ey || ez)) ||
              (null != es.draftId &&
                eM &&
                "ready" === er.status &&
                eE?.base_version_id === er.version_id &&
                !(0, v.ib)(er) &&
                !et &&
                (null == ek || Object.keys(ek).every(eg)) &&
                null == eU)) &&
            !el &&
            !eK &&
            !eV),
          (D[55] = eK),
          (D[56] = er),
          (D[57] = es.draftId),
          (D[58] = eU),
          (D[59] = et),
          (D[60] = ee),
          (D[61] = ez),
          (D[62] = eM),
          (D[63] = el),
          (D[64] = ey),
          (D[65] = eV),
          (D[66] = eE?.base_version_id),
          (D[67] = ek),
          (D[68] = y))
        : (y = D[68])
      let eL = y
      D[69] !== eR ? ((x = eR ? (0, g.E)("returnToSetup") : null), (D[69] = eR), (D[70] = x)) : (x = D[70])
      let e$ = x
      if (X && (eV || (eY && !eD))) {
        let e
        ;(D[71] !== eB.operation ? ((e = N(eB.operation)), (D[71] = eB.operation), (D[72] = e)) : (e = D[72]), (e$ = e))
      } else if (null != eB) {
        let e
        ;(D[73] !== eB ? ((e = C(eB)), (D[73] = eB), (D[74] = e)) : (e = D[74]), (e$ = e))
      } else if (ez) {
        let e
        ;(D[75] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, g.E)("connectionNeedsAttention")), (D[75] = e))
          : (e = D[75]),
          (e$ = e))
      } else if (eU instanceof m.A6 && "refresh" === eU.retryIssue) {
        let e
        ;(D[76] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, g.E)("settingsUnavailable")), (D[76] = e))
          : (e = D[76]),
          (e$ = e))
      } else if (eU instanceof m.A6 && "missing" === eU.retryIssue) {
        let e
        ;(D[77] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, g.E)("investigation")), (D[77] = e))
          : (e = D[77]),
          (e$ = e))
      } else if (eU instanceof m.A6 && "changed" === eU.retryIssue) {
        let e
        ;(D[78] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, g.E)("environmentChanged")), (D[78] = e))
          : (e = D[78]),
          (e$ = e))
      } else if (eU instanceof Error && "conflict" === eU.message) {
        let e
        ;(D[79] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, g.E)("settingsConflict")), (D[79] = e))
          : (e = D[79]),
          (e$ = e))
      } else if (eO) {
        let e
        ;(D[80] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, g.E)("lockedNeedsInvestigation")), (D[80] = e))
          : (e = D[80]),
          (e$ = e))
      } else if (eU instanceof m.A6) {
        let e, t
        ;(D[81] !== eU.result.message || D[82] !== eU.result.status
          ? ((e = (0, r.eN)(eU.result.status, eU.result.message) ? "planNotSupported" : "publishUnconfirmed"),
            (D[81] = eU.result.message),
            (D[82] = eU.result.status),
            (D[83] = e))
          : (e = D[83]),
          D[84] !== e ? ((t = (0, g.E)(e)), (D[84] = e), (D[85] = t)) : (t = D[85]),
          (e$ = t))
      } else if (null != eU) {
        let e
        ;(D[86] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, g.E)("genericPublishFailed")), (D[86] = e))
          : (e = D[86]),
          (e$ = e))
      }
      let eq = "publish"
      ;(el
        ? (eq =
            eb?.idempotencyKey === es.approval?.idempotencyKey && eb?.state === "SUCCEEDED"
              ? "connecting"
              : "publishing")
        : eB?.debugInfo?.state === "SUCCEEDED"
          ? (eq = "reconnect")
          : eV
            ? (eq = "retry")
            : eK && eB?.interruptionReason === "not_found"
              ? (eq = "checkAgain")
              : eK && !eY
                ? (eq = "check")
                : null == eU || (null == eW && eU instanceof m.A6)
                  ? eK || null != eU || null == es.promotedVersionId || (eq = "republish")
                  : (eq = "retry"),
        D[87] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, i.jsx)(l.A, {
              id: "restricted.environmentSetup.result.publishTooltip",
              defaultMessage: "Publish the saved configuration and environment snapshot so it can run tasks",
              description:
                "Tooltip explaining that publishing makes the saved cloud environment configuration and snapshot available for running tasks",
            })),
            (D[87] = w))
          : (w = D[87]))
      let eG = w
      if (el) {
        let e
        ;(D[88] !== es.approval?.idempotencyKey || D[89] !== eb?.idempotencyKey || D[90] !== eb?.state
          ? ((e =
              eb?.idempotencyKey === es.approval?.idempotencyKey && eb?.state === "SUCCEEDED"
                ? (0, i.jsx)($, {})
                : (0, i.jsx)(l.A, {
                    id: "restricted.environmentSetup.result.publishingTooltip",
                    defaultMessage: "Your environment is being published",
                    description:
                      "Tooltip explaining why the environment publishing action is unavailable while publication is in progress",
                  })),
            (D[88] = es.approval?.idempotencyKey),
            (D[89] = eb?.idempotencyKey),
            (D[90] = eb?.state),
            (D[91] = e))
          : (e = D[91]),
          (eG = e))
      } else if (eA) {
        let e
        ;(D[92] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(l.A, {
              id: "restricted.environmentSetup.result.savingTooltip",
              defaultMessage: "Wait for your configuration draft to finish saving",
              description:
                "Tooltip explaining why environment publication or its status check is unavailable while saving",
            })),
            (D[92] = e))
          : (e = D[92]),
          (eG = e))
      } else if (null != eB) {
        let e
        ;(D[93] !== eB ? ((e = (0, i.jsx)(P, { error: eB })), (D[93] = eB), (D[94] = e)) : (e = D[94]), (eG = e))
      } else if (eK) {
        let e
        ;(D[95] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(l.A, {
              id: "restricted.environmentSetup.result.checkStatusTooltip",
              defaultMessage:
                "The app stopped waiting for a publishing update. Publishing may still be running. Check its status without starting another publish",
              description: "Tooltip for Check status, which follows the current cloud environment publishing attempt",
            })),
            (D[95] = e))
          : (e = D[95]),
          (eG = e))
      } else if (null != eF) eG = eF
      else if (ez) {
        let e
        ;(D[96] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(l.A, {
              id: "restricted.environmentSetup.result.invalidOidcConnections",
              defaultMessage: "A connection needs attention · Review connections in Internet access before publishing",
              description:
                "Explains where to fix or detach invalid saved outbound identity attachments before publishing an environment",
            })),
            (D[96] = e))
          : (e = D[96]),
          (eG = e))
      } else if (ex) {
        let e
        ;(D[97] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(l.A, {
              id: "environmentSetup.review.beforePublishing",
              defaultMessage: "Open Needs attention above the composer to finish reviewing your configuration",
              description: "Guidance in the full environment editor when stepped onboarding review remains incomplete",
            })),
            (D[97] = e))
          : (e = D[97]),
          (eG = e))
      } else if (ey) {
        let e
        ;(D[98] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(l.A, {
              id: "restricted.environmentSetup.result.saveBeforePublishingTooltip",
              defaultMessage: "Save your configuration, then publish",
              description:
                "Tooltip explaining that configuration changes must be saved before publishing the cloud environment",
            })),
            (D[98] = e))
          : (e = D[98]),
          (eG = e))
      } else if (!ej || "ready" !== ea.phase) {
        let e
        ;(D[99] !== V || D[100] !== eI
          ? ((e = (0, i.jsx)(ev, { conversationId: V, isExecutionActive: eI })),
            (D[99] = V),
            (D[100] = eI),
            (D[101] = e))
          : (e = D[101]),
          (eG = e))
      }
      let eH = W[X && "republish" === eq ? "publish" : eq]
      D[102] !== eH ? ((S = (0, i.jsx)(l.A, { ...eH })), (D[102] = eH), (D[103] = S)) : (S = D[103])
      let eQ = S
      if (X && "retry" === eq) {
        let e
        ;(D[104] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(l.A, {
              id: "environmentSetup.footer.retry",
              defaultMessage: "Retry",
              description: "Retry the failed environment publication using its existing recovery action",
            })),
            (D[104] = e))
          : (e = D[104]),
          (eQ = e))
      } else if (X && "publishing" === eq) {
        let e
        ;(D[105] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(l.A, {
              id: "environmentSetup.footer.publishing",
              defaultMessage: "Publishing…",
              description: "Disabled primary action while environment publication is in progress",
            })),
            (D[105] = e))
          : (e = D[105]),
          (eQ = e))
      }
      D[106] !== eK ||
      D[107] !== er ||
      D[108] !== es ||
      D[109] !== ea ||
      D[110] !== ej ||
      D[111] !== et ||
      D[112] !== eT ||
      D[113] !== eL ||
      D[114] !== X ||
      D[115] !== ez ||
      D[116] !== el ||
      D[117] !== eA ||
      D[118] !== ey ||
      D[119] !== eB ||
      D[120] !== eY ||
      D[121] !== em ||
      D[122] !== eR ||
      D[123] !== eQ ||
      D[124] !== eG ||
      D[125] !== eW ||
      D[126] !== eD ||
      D[127] !== eV ||
      D[128] !== en
        ? ((j =
            eL && !X
              ? null
              : (0, i.jsx)(p.F, {
                  sizingLabels: X ? void 0 : Object.entries(W).map(ef),
                  size: en,
                  color: X || !ey || eK ? "primary" : "secondary",
                  disabled:
                    (X && (eL || (eY && !eD))) ||
                    eA ||
                    eR ||
                    (eV ? et || eT || !ej : !eK && (ez || !ej || ey || "ready" !== ea.phase)),
                  loading: el,
                  tooltipContent: eG,
                  onClick: () =>
                    em({
                      configuration: eD && !eV ? { ...es, approval: void 0 } : es,
                      config: er,
                      retry: eW,
                      failedOperationId: eV ? eB.operation?.id : void 0,
                    }),
                  children: (0, i.jsx)("span", { className: "min-w-0 break-words", children: eQ }),
                })),
          (D[106] = eK),
          (D[107] = er),
          (D[108] = es),
          (D[109] = ea),
          (D[110] = ej),
          (D[111] = et),
          (D[112] = eT),
          (D[113] = eL),
          (D[114] = X),
          (D[115] = ez),
          (D[116] = el),
          (D[117] = eA),
          (D[118] = ey),
          (D[119] = eB),
          (D[120] = eY),
          (D[121] = em),
          (D[122] = eR),
          (D[123] = eQ),
          (D[124] = eG),
          (D[125] = eW),
          (D[126] = eD),
          (D[127] = eV),
          (D[128] = en),
          (D[129] = j))
        : (j = D[129])
      let eZ = j
      if (X) {
        let e,
          t,
          n,
          a = z
        if (el) {
          let e
          ;(D[130] !== V
            ? ((e = (0, i.jsx)(O, { conversationId: V, elapsedOnly: !0 })), (D[130] = V), (D[131] = e))
            : (e = D[131]),
            (a = e))
        } else if (null != e$ || null != L) {
          let e
          ;(D[132] !== eY
            ? ((e = (0, i.jsx)(B.E, { publicationFailed: eY })), (D[132] = eY), (D[133] = e))
            : (e = D[133]),
            (a = e))
        }
        let s = `${es.accountId}:${es.userId}:${es.draftId}`
        D[134] !== V || D[135] !== s
          ? ((e = (0, i.jsx)(A, { conversationId: V }, s)), (D[134] = V), (D[135] = s), (D[136] = e))
          : (e = D[136])
        let r = L ?? (el ? null : e$)
        return (
          D[137] !== K || D[138] !== Y || D[139] !== eZ || D[140] !== a || D[141] !== r
            ? ((t = (0, i.jsxs)(B.W, { status: a, error: r, errorActions: K, children: [Y, eZ] })),
              (D[137] = K),
              (D[138] = Y),
              (D[139] = eZ),
              (D[140] = a),
              (D[141] = r),
              (D[142] = t))
            : (t = D[142]),
          D[143] !== e || D[144] !== t
            ? ((n = (0, i.jsxs)("div", { className: "flex min-w-0 flex-col gap-3", children: [e, t] })),
              (D[143] = e),
              (D[144] = t),
              (D[145] = n))
            : (n = D[145]),
          n
        )
      }
      if (eV) {
        let e, t, n
        return (
          D[146] !== K || D[147] !== z
            ? ((e = (0, i.jsxs)(i.Fragment, { children: [z, K] })), (D[146] = K), (D[147] = z), (D[148] = e))
            : (e = D[148]),
          D[149] !== Y || D[150] !== eZ || D[151] !== e
            ? ((t = (0, i.jsxs)(R, { secondaryActions: e, children: [Y, eZ] })),
              (D[149] = Y),
              (D[150] = eZ),
              (D[151] = e),
              (D[152] = t))
            : (t = D[152]),
          D[153] !== eB.operation || D[154] !== t
            ? ((n = (0, i.jsx)(F, { operation: eB.operation, children: t })),
              (D[153] = eB.operation),
              (D[154] = t),
              (D[155] = n))
            : (n = D[155]),
          n
        )
      }
      if (null == e$ && null == K && null == Y && null == z && null == eZ) {
        let e
        return (
          D[156] !== V ? ((e = (0, i.jsx)(A, { conversationId: V })), (D[156] = V), (D[157] = e)) : (e = D[157]),
          e
        )
      }
      ;(D[158] !== K || D[159] !== z
        ? ((k = (0, i.jsxs)(i.Fragment, { children: [z, K] })), (D[158] = K), (D[159] = z), (D[160] = k))
        : (k = D[160]),
        D[161] !== Y || D[162] !== eZ || D[163] !== k
          ? ((T = (0, i.jsxs)(R, { secondaryActions: k, children: [Y, eZ] })),
            (D[161] = Y),
            (D[162] = eZ),
            (D[163] = k),
            (D[164] = T))
          : (T = D[164]))
      let eJ = T,
        eX = `${es.accountId}:${es.userId}:${es.draftId}`
      return (
        D[165] !== V || D[166] !== eX
          ? ((M = (0, i.jsx)(A, { conversationId: V }, eX)), (D[165] = V), (D[166] = eX), (D[167] = M))
          : (M = D[167]),
        D[168] !== eJ || D[169] !== V || D[170] !== el || D[171] !== e$?.content
          ? ((I = el
              ? (0, i.jsx)(O, { conversationId: V, children: eJ })
              : (0, i.jsx)(E, { message: e$?.content, role: "alert", children: eJ })),
            (D[168] = eJ),
            (D[169] = V),
            (D[170] = el),
            (D[171] = e$?.content),
            (D[172] = I))
          : (I = D[172]),
        D[173] !== M || D[174] !== I
          ? ((U = (0, i.jsxs)("div", {
              className: "flex min-w-0 flex-col gap-2 text-sm select-none",
              children: [M, I],
            })),
            (D[173] = M),
            (D[174] = I),
            (D[175] = U))
          : (U = D[175]),
        U
      )
    }
    function ef(e) {
      let [t, n] = e
      return (0, i.jsx)(l.A, { ...n }, t)
    }
    function eg(e) {
      return "name" === e || "description" === e || "access" === e
    }
    function ev(e) {
      let t,
        n,
        r,
        o = (0, a.c)(8),
        { conversationId: c, isExecutionActive: p } = e
      ;(o[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, u.Y)()), (o[0] = t)) : (t = o[0]),
        o[1] !== c ? ((n = { hostId: t, threadId: c }), (o[1] = c), (o[2] = n)) : (n = o[2]))
      let m = (0, s._U)(d.as, n),
        f = (0, s._U)(h.pe, c)
      if (p) {
        let e
        return (
          o[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(l.A, {
                id: "restricted.environmentSetup.result.publishTooltip.running",
                defaultMessage: "Wait for setup to finish",
                description: "Short tooltip on the disabled Cloud setup Publish button while Codex is still responding",
              })),
              (o[3] = e))
            : (e = o[3]),
          e
        )
      }
      if (m) {
        let e
        return (
          o[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(l.A, {
                id: "restricted.environmentSetup.result.publishTooltip.loading",
                defaultMessage: "Checking setup status…",
                description:
                  "Short tooltip on the disabled Cloud setup Publish button while the app loads the setup conversation",
              })),
              (o[4] = e))
            : (e = o[4]),
          e
        )
      }
      if (f?.status === "interrupted") {
        let e
        return (
          o[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(l.A, {
                id: "restricted.environmentSetup.result.publishTooltip.interrupted",
                defaultMessage: "Setup interrupted. Ask Codex to finish",
                description:
                  "Short tooltip on the disabled Cloud setup Publish button after a response was stopped. The user can ask Codex to continue setup in the chat.",
              })),
              (o[5] = e))
            : (e = o[5]),
          e
        )
      }
      if (f?.status === "failed") {
        let e
        return (
          o[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(l.A, {
                id: "restricted.environmentSetup.result.publishTooltip.failed",
                defaultMessage: "Ask Codex to finish setup",
                description:
                  "Short tooltip on the disabled Cloud setup Publish button after a response failed. The user can ask Codex to continue setup in the chat.",
              })),
              (o[6] = e))
            : (e = o[6]),
          e
        )
      }
      return (
        o[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(l.A, {
              id: "restricted.environmentSetup.result.finishSetupBeforePublishing",
              defaultMessage: "Setup isn’t finished yet",
              description:
                "Explains why publishing remains unavailable when configuration is saved but the setup task has not completed",
            })),
            (o[7] = r))
          : (r = o[7]),
        r
      )
    }
  },
  UTe7(e, t, n) {
    var i = n("zTeN"),
      a = n("OWtl"),
      s = n("ULpA"),
      r = n("nply"),
      o = n("B9et"),
      l = n("HhRW"),
      d = n("tFcq"),
      c = n("BbjC"),
      u = n("GhRT"),
      p = n("f8Uq")
    let h = (0, i.i1)(a.u, (e, { get: t }) => {
      let n = t(l.ZF, e),
        { data: i, isFetchedAfterMount: a, isSuccess: d } = t(p.wc, e)
      return (
        null != n &&
        null != t(l.fm, e) &&
        null != i &&
        a &&
        d &&
        !t(s.fK, e) &&
        void 0 !== t(l.n6, e) &&
        0 === t(u.tj, e).length &&
        0 === t(c.lD, e).length &&
        !t(o.U3, e) &&
        !t(p.b2, e).isPending &&
        !t(r.km, e).isPending &&
        ("ready" === n.phase || t(c.dH, e))
      )
    })
    async function m(e, t, n) {
      let i = e.get(l.fm, t),
        a = e.get(p.wc, t).data,
        s = e.get(c.Ps, t),
        d = e.get(l.U1, t),
        h = e.get(c.h5, t),
        { isPending: m, mutateAsync: f } = e.get(p.b2, t),
        g = e.get(r.km, t).isPending
      if (
        null == i ||
        null == a ||
        null == s ||
        (null == d && null == n && !h) ||
        (null == d && null == n && e.get(u.GM, t)) ||
        m ||
        g ||
        e.get(o.U3, t) ||
        (null != i.draftId && null != i.approval) ||
        e.get(c.lD, t).some((e) => "secrets" !== e)
      )
        return !1
      try {
        return (await f({ configuration: i, config: a, changes: d ?? {}, saveVpn: n }), !0)
      } catch {
        return !1
      }
    }
    n.d(
      t,
      {},
      {
        Ii: h,
        Ny: async function (e, t, n) {
          let i = e.get(l.fm, t),
            a = e.get(l.n6, t),
            s = e.query.getData(p.wc, t)
          if (null == i || null == s || (0, u.Ps)(s, i).length > 0 || !e.get(h, t)) return
          let o = e.get(l.U1, t)?.repositories,
            f = (s.draft ?? s).repositories.map(({ repository_id: e }) => e),
            g = null != o && (o.length !== f.length || o.some((e) => !f.includes(e)))
          if (((e.get(c.dH, t) || null != n) && !(await m(e, t, n))) || g) return
          let v = e.get(l.fm, t),
            b = e.query.getData(p.wc, t)
          !(null == v || null == b || (0, u.Ps)(b, v).length > 0 || !e.get(h, t) || e.get(c.dH, t)) &&
            (0, d.mk)(v, i) &&
            e.get(l.n6, t) === a &&
            (await e
              .get(r.km, t)
              .mutateAsync({ configuration: v, config: b })
              .catch(() => {}))
        },
        zB: m,
      },
    )
  },
}
//# sourceMappingURL=2463.edd67fab02.js.map
