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
      d = n("ygO2"),
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
      o = n("GO7r")
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
    n.d(t, { d: () => eh })
    var i = n("ABep"),
      a = n("QosV"),
      s = n("zTeN"),
      r = n("mtDM"),
      o = n("oyxz"),
      l = n("vdpW"),
      d = n("ygO2"),
      c = n("eA5w"),
      u = n("NxjN"),
      p = n("ULpA"),
      h = n("nply"),
      m = n("wuQx"),
      f = n("QvRd"),
      g = n("M5B1"),
      v = n("GjOp"),
      b = n("zKCW"),
      y = n("wgP0"),
      x = n("zd8w"),
      w = n("OWtl"),
      S = n("HhRW"),
      _ = n("USmf"),
      j = n("B9et")
    function k(e) {
      let t,
        n,
        r,
        l,
        d,
        c,
        u = (0, a.c)(17),
        { conversationId: p } = e,
        h = (0, s.gh)(w.u),
        [m, f] = (0, x.useState)("available"),
        g = (0, s._U)(j.WT, p),
        v = (0, s._U)(j.SZ, p)
      return g?.phase !== "ready" || null == v
        ? null
        : (u[0] !== m
            ? ((t =
                "confirming" === m
                  ? (0, i.jsx)(o.A, {
                      id: "environmentSetup.conflict.restoreDescription",
                      defaultMessage:
                        "This replaces any unsaved edits currently in the editor, including secret and variable inputs. Review the restored changes before saving. Nothing is saved or sent to the agent by this action.",
                      description:
                        "Explains what restoring preserved inputs replaces; saving remains a separate user action",
                    })
                  : (0, i.jsx)(o.A, {
                      id: "environmentSetup.conflict.savedInputs",
                      defaultMessage:
                        "Your previous unsaved edits are still available in this window. You can restore them to the editor and review them before saving.",
                      description:
                        "Same-chat recovery retains local edits separately from the new draft and agent turn",
                    })),
              (n =
                "confirming" === m
                  ? (0, i.jsx)(o.A, {
                      id: "environmentSetup.conflict.restoreConfirm",
                      defaultMessage: "Restore edits",
                      description: "Replace the current editor inputs with preserved environment edits for review",
                    })
                  : (0, i.jsx)(o.A, {
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
                let e = h.get(S.fm, p)
                if (h.get(j.WT, p) === g && e?.draftId === g.target.draftId) {
                  if ("confirming" !== m && (null != h.get(S.Jo, p) || null != h.get(_.hV, p)))
                    return void f("confirming")
                  ;(h.set(S.Jo, p, v.changes),
                    h.set(_.hV, p, null == v.inputs ? null : { ...v.inputs, requestId: void 0, secretsDraft: void 0 }),
                    (0, S.e2)(h, p, { ...e, recovery: { ...g, editsRestored: !0 } }))
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
            ? ((l =
                "confirming" === m
                  ? (0, i.jsx)(o.A, {
                      id: "environmentSetup.conflict.restoreCancel",
                      defaultMessage: "Cancel",
                      description: "Cancel restoring unsaved environment edits",
                    })
                  : void 0),
              (u[9] = m),
              (u[10] = l))
            : (l = u[10]),
          u[11] === Symbol.for("react.memo_cache_sentinel") ? ((d = () => f("available")), (u[11] = d)) : (d = u[11]),
          u[12] !== t || u[13] !== n || u[14] !== r || u[15] !== l
            ? ((c = (0, i.jsx)(b.l, {
                variant: "callout",
                content: t,
                primaryCtaText: n,
                onPrimaryCtaClick: r,
                secondaryCtaText: l,
                onSecondaryCtaClick: d,
              })),
              (u[12] = t),
              (u[13] = n),
              (u[14] = r),
              (u[15] = l),
              (u[16] = c))
            : (c = u[16]),
          c)
    }
    var T = n("s4rT")
    function M(e) {
      let t,
        n,
        r,
        l,
        c,
        u,
        h = (0, a.c)(37),
        { conversationId: m } = e,
        g = (0, s._U)(p.pe, m),
        x = (0, s._U)(p.xp, m),
        w = (0, s._U)(v.Pn, m),
        S = (0, s._U)(j.WT, m),
        _ = (0, s._U)(j.SZ, m),
        { mutate: M, isPending: A } = (0, s._U)(T.s, m)
      if (null == w) {
        let e,
          t = S?.sourceDraftId
        return (
          h[0] !== m || h[1] !== t
            ? ((e = (0, i.jsx)(k, { conversationId: m }, t)), (h[0] = m), (h[1] = t), (h[2] = e))
            : (e = h[2]),
          e
        )
      }
      let C = S?.phase === "start-unconfirmed" || (S?.phase === "starting" && !A),
        P = S?.phase === "unsupported",
        I = null == g ? !x : g.isActive,
        N = null
      if ("base" === w) {
        let e, n
        if (
          (h[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(o.A, {
                id: "environmentSetup.conflict.base",
                defaultMessage:
                  "A newer version has been published. Load the latest base in this chat and ask the agent to reapply your changes. Your unsaved editor inputs will be preserved separately.",
                description: "Explains the user-confirmed same-chat recovery flow after another draft publishes",
              })),
              (h[3] = e))
            : (e = h[3]),
          (t = e),
          h[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, i.jsx)(o.A, {
                id: "environmentSetup.conflict.loadLatest",
                defaultMessage: "Load latest base",
                description: "Create a replacement draft and ask the agent to reapply changes in the same chat",
              })),
              (h[4] = n))
            : (n = h[4]),
          (N = n),
          null != _)
        ) {
          let e
          ;(h[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(o.A, {
                id: "environmentSetup.conflict.restoreBeforeRecovery",
                defaultMessage:
                  "A newer version has been published. Restore your previous unsaved edits below before loading the latest base again.",
                description:
                  "Keep earlier unsaved changes accessible until the user restores them before another recovery",
              })),
              (h[5] = e))
            : (e = h[5]),
            (t = e))
        } else if (C) {
          let e, n
          ;(h[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(o.A, {
                id: "environmentSetup.conflict.turnUnconfirmed",
                defaultMessage:
                  "The draft may already have switched, but we couldn’t confirm whether the reapply message was accepted. Check recovery to look for the accepted message. Your edits and replacement draft are preserved.",
                description: "A missing turn response does not mean the draft switch or message failed",
              })),
              (h[6] = e))
            : (e = h[6]),
            (t = e),
            h[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, i.jsx)(o.A, {
                  id: "environmentSetup.conflict.checkRecovery",
                  defaultMessage: "Check recovery",
                  description: "Read recent turns to check whether the recovery message was accepted",
                })),
                (h[7] = n))
              : (n = h[7]),
            (N = n))
        } else if (P) {
          let e
          ;(h[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(o.A, {
                id: "environmentSetup.conflict.recoveryUnavailable",
                defaultMessage:
                  "Recovery in this chat is not available yet. Your draft and edits are still here. Ask the agent to attach the proposed scripts and helper files before opening a new setup chat from environment settings. Keep your unsaved editor inputs until they have been included in the handoff.",
                description:
                  "Safe fallback when the backend does not support same-chat draft recovery; preserve proposed files and editor inputs before the user starts another setup chat",
              })),
              (h[8] = e))
            : (e = h[8]),
            (t = e))
        } else if (S?.phase === "created") {
          let e, n
          ;(h[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(o.A, {
                id: "environmentSetup.conflict.turnRejected",
                defaultMessage:
                  "The new draft is ready, but the reapply message did not start. Retry recovery to use the same draft.",
                description: "Retry after a rejected turn reuses the created draft and environment",
              })),
              (h[9] = e))
            : (e = h[9]),
            (t = e),
            h[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, i.jsx)(o.A, {
                  id: "environmentSetup.conflict.retryRecovery",
                  defaultMessage: "Retry recovery",
                  description: "Retry the reapply turn using the existing replacement draft without creating another",
                })),
                (h[10] = n))
              : (n = h[10]),
            (N = n))
        } else if (S?.phase !== "unconfirmed" && (S?.phase !== "creating" || A)) {
          if (I) {
            let e
            ;(h[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(o.A, {
                  id: "environmentSetup.conflict.waitForChat",
                  defaultMessage: "Wait for this chat to finish loading or running before recovery",
                  description: "Draft replacement requires a loaded and idle conversation",
                })),
                (h[12] = e))
              : (e = h[12]),
              (t = e))
          }
        } else {
          let e
          ;(h[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(o.A, {
                id: "environmentSetup.conflict.createUnconfirmed",
                defaultMessage:
                  "We couldn’t confirm whether the new draft was created. Another attempt may create an additional draft and environment.",
                description:
                  "Draft creation is non-idempotent and requires an explicit user retry after an unconfirmed response",
              })),
              (h[11] = e))
            : (e = h[11]),
            (t = e))
        }
      } else {
        let e
        ;(h[13] !== w
          ? ((e =
              "revision" === w
                ? (0, f.E)("unsavedChangesConflict").content
                : (0, i.jsx)(o.A, {
                    id: "environmentSetup.conflict.locked",
                    defaultMessage:
                      "This draft is locked, and publishing may still be in progress. Check the publishing chat before trying again. Your edits are still here.",
                    description:
                      "A locked draft is distinct from a stale revision; reading it does not prove that publication failed or unlock it",
                  })),
            (h[13] = w),
            (h[14] = e))
          : (e = h[14]),
          (t = e))
      }
      if ("revision" === w) {
        let e
        ;(h[15] !== m ? ((e = (0, i.jsx)(y.Z, { conversationId: m })), (h[15] = m), (h[16] = e)) : (e = h[16]), (n = e))
      } else if ("base" === w) {
        let e,
          t,
          a = A || null != _ || (!C && (P || I))
        ;(h[17] !== C || h[18] !== M
          ? ((e = () => M(C ? "check" : "recover")), (h[17] = C), (h[18] = M), (h[19] = e))
          : (e = h[19]),
          h[20] !== N || h[21] !== A || h[22] !== a || h[23] !== e
            ? ((t = (0, i.jsx)(d.$, { color: "primary", loading: A, disabled: a, onClick: e, children: N })),
              (h[20] = N),
              (h[21] = A),
              (h[22] = a),
              (h[23] = e),
              (h[24] = t))
            : (t = h[24]),
          (n = t))
      }
      let U = "locked" === w ? "draftLocked" : "environmentChanged"
      ;(h[25] !== U ? ((r = (0, f.E)(U)), (h[25] = U), (h[26] = r)) : (r = h[26]),
        h[27] !== n || h[28] !== t || h[29] !== r.title
          ? ((l = (0, i.jsx)(b.l, {
              variant: "callout",
              type: "warning",
              layout: "vertical",
              title: r.title,
              content: t,
              customCtas: n,
            })),
            (h[27] = n),
            (h[28] = t),
            (h[29] = r.title),
            (h[30] = l))
          : (l = h[30]))
      let E = S?.sourceDraftId
      return (
        h[31] !== m || h[32] !== E
          ? ((c = (0, i.jsx)(k, { conversationId: m }, E)), (h[31] = m), (h[32] = E), (h[33] = c))
          : (c = h[33]),
        h[34] !== l || h[35] !== c
          ? ((u = (0, i.jsxs)(i.Fragment, { children: [l, c] })), (h[34] = l), (h[35] = c), (h[36] = u))
          : (u = h[36]),
        u
      )
    }
    function A(e) {
      if (e.canRetryPublication) return (0, f.E)("publishFailed")
      if (e.blocked) return (0, f.E)("draftLocked")
      if (e.debugInfo?.state === "SUCCEEDED") return (0, f.E)("reconnectFailed")
      switch (e.interruptionReason) {
        case "authentication":
        case "authentication_changed":
        case "account_changed":
          return (0, f.E)("authentication")
        case "access_denied":
          return (0, f.E)("accessDenied")
        case "configuration_changed":
          return (0, f.E)("setupChanged")
        case "wait_limit":
        case "not_found":
        case "invalid_response":
        case "unavailable":
          return (0, f.E)("statusUnknown")
      }
    }
    function C(e) {
      let t,
        n,
        s = (0, a.c)(4),
        { error: r } = e
      return (
        s[0] !== r ? ((t = A(r)), (s[0] = r), (s[1] = t)) : (t = s[1]),
        s[2] !== t.content
          ? ((n = (0, i.jsx)(i.Fragment, { children: t.content })), (s[2] = t.content), (s[3] = n))
          : (n = s[3]),
        n
      )
    }
    var P = n("Qgfj")
    function I(e) {
      let t = e?.failure,
        n = t?.vpn_failure_stage,
        a = t?.vpn_failure_class,
        s = null != n && null != a ? N.get(`${n}:${a}`) : void 0
      return null != s
        ? { ...(0, f.E)("vpn"), content: (0, i.jsx)(o.A, { ...s }) }
        : t?.code === "APPROVAL_FAILED_AFTER_SNAPSHOT"
          ? (0, f.E)("publishIncomplete")
          : (0, f.E)("investigation")
    }
    let N = new Map(
      Object.entries(
        (0, P.YK)({
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
    function U(e) {
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
    function E(e) {
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
        s[0] !== o ? ((t = I(o)), (s[0] = o), (s[1] = t)) : (t = s[1]),
        s[2] !== r || s[3] !== t.content
          ? ((n = (0, i.jsx)(U, { message: t.content, role: "alert", children: r })),
            (s[2] = r),
            (s[3] = t.content),
            (s[4] = n))
          : (n = s[4]),
        n
      )
    }
    var R = n("gW5Q"),
      B = n("slpy"),
      D = n("z6oV"),
      V = n("HOLv"),
      K = n("GO7r"),
      Y = n("RNul")
    let z = (0, P.YK)({
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
        l,
        d,
        c = (0, a.c)(26),
        { conversationId: u, children: p, elapsedOnly: f, compact: g } = e,
        v = void 0 !== f && f,
        b = void 0 !== g && g,
        y = (0, s._U)(S.fm, u),
        w = (0, s._U)(m.Sn, u),
        _ = y?.approval,
        j = (0, s._U)(h.pl, u),
        k = null != _ && w?.idempotencyKey === _.idempotencyKey ? w.state : "checking",
        [T, M] = (0, x.useState)(Date.now)
      c[0] !== _ || c[1] !== j
        ? ((t = _?.startedAt == null ? (j ?? 0 / 0) : Date.parse(_.startedAt)), (c[0] = _), (c[1] = j), (c[2] = t))
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
        (0, x.useEffect)(n, r))
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
        let l = `${t}:${n}`
        return (
          c[15] !== b || c[16] !== l
            ? ((a = b
                ? l
                : (0, i.jsx)(o.A, {
                    id: "environmentSetup.publishingElapsedTime",
                    defaultMessage: "{elapsed} elapsed",
                    description:
                      "Elapsed minutes and seconds since environment publishing started, including reconnection; not an estimate of remaining time",
                    values: { elapsed: l },
                  })),
              (c[15] = b),
              (c[16] = l),
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
        c[20] !== P ? ((l = Number.isFinite(P) ? P : null), (c[20] = P), (c[21] = l)) : (l = c[21]),
        c[22] !== p || c[23] !== k || c[24] !== l
          ? ((d = (0, i.jsx)(W, { state: k, minutes: l, children: p })),
            (c[22] = p),
            (c[23] = k),
            (c[24] = l),
            (c[25] = d))
          : (d = c[25]),
        d
      )
    }
    function W(e) {
      let t,
        n = (0, a.c)(7),
        { state: s, children: r, minutes: l } = e,
        d = void 0 === l ? null : l,
        c = null
      if ("retrying" === s) {
        let e
        ;(n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(o.A, {
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
                ? (0, i.jsx)(o.A, {
                    id: "environmentSetup.publishingElapsedLabel",
                    defaultMessage: "Publishing · {minutes, plural, one {#m elapsed} other {#m elapsed}}",
                    description:
                      "Publishing status with time since this attempt began on the client, not an estimate of worker progress",
                    values: { minutes: d },
                  })
                : (0, i.jsx)(o.A, {
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
        ;(n[3] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(L, {})), (n[3] = e)) : (e = n[3]),
          (c = e))
      }
      return (
        n[4] !== r || n[5] !== c
          ? ((t = (0, i.jsx)(U, { message: c, children: r })), (n[4] = r), (n[5] = c), (n[6] = t))
          : (t = n[6]),
        t
      )
    }
    function L() {
      let e,
        t = (0, a.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(o.A, {
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
    function $(e) {
      let t,
        n,
        s,
        r = (0, a.c)(20),
        { conversationId: l, state: d, editAction: c, disabled: u, onAction: p } = e
      if ("saving" === d || "publishing" === d) {
        let e,
          t,
          n,
          a,
          s = "saving" === d
        return (
          r[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)("p", {
                children: (0, i.jsx)(o.A, {
                  id: "environmentSetup.pill.publishingHint",
                  defaultMessage: "Publishing can take several minutes",
                  description:
                    "Hover card above the publishing status pill, explaining that publishing a cloud environment can take several minutes",
                }),
              })),
              (r[0] = e))
            : (e = r[0]),
          r[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(V.I, { className: "motion-safe:animate-spin", asset: D.g })), (r[1] = t))
            : (t = r[1]),
          r[2] !== l || r[3] !== d
            ? ((n = (0, i.jsx)(B.m.TriggerDecorator, {
                unstyled: !0,
                className: "min-w-0 rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                children: (0, i.jsx)("div", {
                  children: (0, i.jsx)(q, {
                    icon: t,
                    status:
                      "saving" === d
                        ? (0, i.jsx)("span", {
                            role: "status",
                            children: (0, i.jsx)(o.A, {
                              id: "environmentSetup.pill.saving",
                              defaultMessage: "Saving",
                              description:
                                "Status in the composer pill while environment changes are saved before publication",
                            }),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsx)("span", { role: "status", children: (0, i.jsx)(o.A, { ...z.publishing }) }),
                              (0, i.jsx)(O, { conversationId: l, elapsedOnly: !0, compact: !0 }),
                            ],
                          }),
                  }),
                }),
              })),
              (r[2] = l),
              (r[3] = d),
              (r[4] = n))
            : (n = r[4]),
          r[5] !== s || r[6] !== n
            ? ((a = (0, i.jsx)(B.m, {
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
              children: (0, i.jsx)(o.A, {
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
          ? ((e = (0, i.jsx)(o.A, {
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
          ? ((t = "error" === d ? (0, i.jsx)(K.Gmf, { className: "text-danger" }) : void 0), (r[10] = d), (r[11] = t))
          : (t = r[11]),
        r[12] !== d
          ? ((n =
              "ready" === d
                ? (0, i.jsx)(o.A, {
                    id: "environmentSetup.pill.saveAndPublish",
                    defaultMessage: "Save and publish",
                    description: "Save the current environment configuration, then publish it for running tasks",
                  })
                : (0, i.jsx)(o.A, {
                    id: "environmentSetup.pill.review",
                    defaultMessage: "Review",
                    description: "Open the environment panel to review settings or publishing errors",
                  })),
            (r[12] = d),
            (r[13] = n))
          : (n = r[13]),
        r[14] !== u || r[15] !== p || r[16] !== h || r[17] !== t || r[18] !== n
          ? ((s = (0, i.jsx)(q, { status: h, icon: t, action: n, disabled: u, onAction: p })),
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
    function q(e) {
      let t,
        n,
        s,
        r = (0, a.c)(13),
        { status: l, icon: d, action: c, onAction: u, disabled: p, loading: h } = e
      return (
        r[0] !== c || r[1] !== l
          ? ((t =
              null != l &&
              null != c &&
              (0, i.jsx)("span", {
                "aria-hidden": !0,
                className: "text-secondary",
                children: (0, i.jsx)(o.A, {
                  id: "codex.ui.bulletSeparator",
                  defaultMessage: "·",
                  description: "Middle dot separator used between inline items",
                }),
              })),
            (r[0] = c),
            (r[1] = l),
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
                children: [h && (0, i.jsx)(Y.y, { className: "icon-xxs" }), c, (0, i.jsx)(K.INk, {})],
              })),
            (r[3] = c),
            (r[4] = p),
            (r[5] = h),
            (r[6] = u),
            (r[7] = n))
          : (n = r[7]),
        r[8] !== d || r[9] !== l || r[10] !== t || r[11] !== n
          ? ((s = (0, i.jsxs)("div", {
              className:
                "flex max-w-full min-w-0 flex-wrap items-center justify-center gap-2 text-size-chat select-none",
              children: [d, l, t, n],
            })),
            (r[8] = d),
            (r[9] = l),
            (r[10] = t),
            (r[11] = n),
            (r[12] = s))
          : (s = r[12]),
        s
      )
    }
    var G = n("DBCl"),
      H = n("E8Sp"),
      Q = n("SPnB"),
      Z = n("j9xU"),
      J = n("Wbxh"),
      X = n("Q8aV"),
      ee = n("ndjw"),
      et = n("nluz"),
      en = n("tz0P"),
      ei = n("eFn4"),
      ea = n("VyEV")
    function es(e) {
      let t,
        n,
        s,
        r,
        l = (0, a.c)(37),
        {
          children: c,
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
          l[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(K.ALZ, { className: "text-success" })), (l[0] = e))
            : (e = l[0]),
          l[1] !== u?.title
            ? ((t =
                u?.title ??
                (0, i.jsx)(o.A, {
                  id: "environmentSetup.pill.published",
                  defaultMessage: "Environment published",
                  description: "The environment was published and the setup chat reconnected successfully",
                })),
              (l[1] = u?.title),
              (l[2] = t))
            : (t = l[2]),
          l[3] !== t ? ((n = (0, i.jsx)("span", { role: "status", children: t })), (l[3] = t), (l[4] = n)) : (n = l[4]),
          l[5] !== h
            ? ((a =
                null == h
                  ? void 0
                  : (0, i.jsx)(o.A, {
                      id: "environmentSetup.pill.startTask",
                      defaultMessage: "Start a chat",
                      description:
                        "Open a new chat with this published environment selected, without submitting a prompt",
                    })),
              (l[5] = h),
              (l[6] = a))
            : (a = l[6]),
          l[7] !== p || l[8] !== h || l[9] !== n || l[10] !== a
            ? ((s = (0, i.jsx)(q, { icon: e, status: n, action: a, onAction: h, loading: p })),
              (l[7] = p),
              (l[8] = h),
              (l[9] = n),
              (l[10] = a),
              (l[11] = s))
            : (s = l[11]),
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
          l[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(K.ALZ, { className: "text-success" })), (l[12] = e))
            : (e = l[12]),
          l[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)("span", {
                role: "status",
                children: (0, i.jsx)(o.A, {
                  id: "environmentSetup.footer.published",
                  defaultMessage: "Published",
                  description: "Compact status confirming that environment publication and reconnection completed",
                }),
              })),
              (l[13] = t))
            : (t = l[13]),
          l[14] !== p || l[15] !== h
            ? ((n =
                null != h &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("span", {
                      "aria-hidden": !0,
                      children: (0, i.jsx)(o.A, {
                        id: "codex.ui.bulletSeparator",
                        defaultMessage: "·",
                        description: "Middle dot separator used between inline items",
                      }),
                    }),
                    (0, i.jsxs)(d.$, {
                      color: "ghostMuted",
                      loading: p,
                      size: "inline",
                      onClick: h,
                      children: [
                        (0, i.jsx)(o.A, {
                          id: "environmentSetup.footer.try",
                          defaultMessage: "Try",
                          description:
                            "Open a new chat with the published environment selected, without submitting a prompt",
                        }),
                        (0, i.jsx)(K.INk, {}),
                      ],
                    }),
                  ],
                })),
              (l[14] = p),
              (l[15] = h),
              (l[16] = n))
            : (n = l[16]),
          l[17] !== n
            ? ((a = (0, i.jsxs)(i.Fragment, { children: [e, t, n] })), (l[17] = n), (l[18] = a))
            : (a = l[18]),
          l[19] !== c || l[20] !== f || l[21] !== r || l[22] !== a
            ? ((s = (0, i.jsx)(R.W, { error: r, errorActions: c, status: a, children: f })),
              (l[19] = c),
              (l[20] = f),
              (l[21] = r),
              (l[22] = a),
              (l[23] = s))
            : (s = l[23]),
          s
        )
      }
      l[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)(K.TlE, { className: "text-success" })), (l[24] = t))
        : (t = l[24])
      let y = null == u ? "status" : "alert"
      return (
        l[25] !== u?.content
          ? ((n =
              u?.content ??
              (0, i.jsx)(o.A, {
                id: "restricted.environmentSetup.result.published",
                defaultMessage: "Environment published",
                description: "Confirms that publishing this Cloud environment completed successfully",
              })),
            (l[25] = u?.content),
            (l[26] = n))
          : (n = l[26]),
        l[27] !== u || l[28] !== p || l[29] !== h || l[30] !== b
          ? ((s =
              null == h
                ? null
                : (0, i.jsx)(d.$, {
                    color: "primary",
                    loading: p,
                    size: b,
                    onClick: h,
                    children:
                      null != u
                        ? (0, i.jsx)(o.A, {
                            id: "environmentSetup.result.retryNewTask",
                            defaultMessage: "Try again",
                            description:
                              "Retries opening a new chat with the published environment after the previous attempt failed",
                          })
                        : (0, i.jsx)(o.A, {
                            id: "restricted.environmentSetup.result.startNewTask",
                            defaultMessage: "Start a new chat",
                            description:
                              "Opens the new-chat composer with the published Cloud environment selected, without submitting a prompt",
                          }),
                  })),
            (l[27] = u),
            (l[28] = p),
            (l[29] = h),
            (l[30] = b),
            (l[31] = s))
          : (s = l[31]),
        l[32] !== c || l[33] !== y || l[34] !== n || l[35] !== s
          ? ((r = (0, i.jsxs)(U, { icon: t, role: y, message: n, children: [c, s] })),
            (l[32] = c),
            (l[33] = y),
            (l[34] = n),
            (l[35] = s),
            (l[36] = r))
          : (r = l[36]),
        r
      )
    }
    var er = n("I0Zh")
    function eo(e) {
      let t,
        n,
        r,
        l,
        c,
        u,
        h,
        m,
        f,
        g,
        v,
        b,
        y = (0, a.c)(46)
      y[0] !== e ? (({ conversationId: t, ...n } = e), (y[0] = e), (y[1] = t), (y[2] = n)) : ((t = y[1]), (n = y[2]))
      let x = (0, s.gh)(w.u),
        { mutate: S, isPending: _ } = (0, s._U)(T.s, t),
        M = (0, s._U)(j.WT, t),
        A = (0, s._U)(j.SZ, t),
        C = (0, s._U)(p.pe, t),
        P = (0, s._U)(p.xp, t),
        { data: I } = (0, s._U)(er.w, t),
        N = (0, s.Ul)(ei.L5),
        U = M?.phase === "start-unconfirmed" || (M?.phase === "starting" && !_),
        E = M?.phase === "unconfirmed" || (M?.phase === "creating" && !_),
        F = M?.phase === "unsupported",
        R = null == C ? !P : C.isActive
      y[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, i.jsx)(o.A, {
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
          ? ((e = (0, i.jsx)(o.A, {
              id: "environmentSetup.continueEditing.check",
              defaultMessage: "Check status",
              description:
                "Button in the published environment footer to check whether this chat switched to the new draft after an uncertain response.",
            })),
            (y[4] = e))
          : (e = y[4]),
          (B = e),
          y[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(o.A, {
                id: "environmentSetup.continueEditing.turnUnconfirmed",
                defaultMessage: "The chat may already have switched drafts. Check status to confirm before editing.",
                description:
                  "Error explanation in the published environment footer after the response to switching this chat to a new draft was lost. Check status reads the existing attempt without creating another draft.",
              })),
              (y[5] = t))
            : (t = y[5]),
          (l = t))
      } else if (E) {
        let e, t
        ;(y[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(o.A, {
              id: "environmentSetup.continueEditing.createAnother",
              defaultMessage: "Create another draft",
              description:
                "Explicit retry button shown with a warning that a previous draft creation may have succeeded and this attempt may create another draft and environment.",
            })),
            (y[6] = e))
          : (e = y[6]),
          (B = e),
          y[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(o.A, {
                id: "environmentSetup.continueEditing.createUnconfirmed",
                defaultMessage:
                  "We couldn’t confirm whether the new draft was created. Another attempt may create an additional draft and environment.",
                description:
                  "Warning in the published environment footer after an uncertain draft creation. The user must explicitly choose Create another draft to attempt creation again.",
              })),
              (y[7] = t))
            : (t = y[7]),
          (l = t))
      } else if (F) {
        let e
        ;(y[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(o.A, {
              id: "environmentSetup.continueEditing.unsupported",
              defaultMessage: "Editing again in this chat is not available yet",
              description:
                "Error in the published environment footer when the connected backend cannot switch this chat to another editing draft.",
            })),
            (y[8] = e))
          : (e = y[8]),
          (l = e))
      } else if (M?.phase === "created") {
        let e
        ;(y[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(o.A, {
              id: "environmentSetup.continueEditing.turnRejected",
              defaultMessage:
                "The new draft is ready, but the chat couldn’t switch to it. Try again to use the same draft.",
              description:
                "Error in the published environment footer after the new draft was created but switching this chat to it was rejected. Retrying reuses that draft.",
            })),
            (y[9] = e))
          : (e = y[9]),
          (l = e))
      }
      let D = M?.sourceDraftId
      y[10] !== t || y[11] !== D
        ? ((c = (0, i.jsx)(k, { conversationId: t }, D)), (y[10] = t), (y[11] = D), (y[12] = c))
        : (c = y[12])
      let V = null == l ? n.error : void 0
      return (
        y[13] !== l || y[14] !== n.footerError
          ? ((u =
              null == l
                ? n.footerError
                : {
                    title: (0, i.jsx)(o.A, {
                      id: "environmentSetup.continueEditing.errorTitle",
                      defaultMessage: "Couldn’t resume editing",
                      description:
                        "Error heading above recovery guidance when the automatic handoff to the next editable environment draft has not completed after publication.",
                    }),
                    content: l,
                  }),
            (y[13] = l),
            (y[14] = n.footerError),
            (y[15] = u))
          : (u = y[15]),
        y[16] !== U || y[17] !== R || y[18] !== I || y[19] !== _ || y[20] !== N || y[21] !== A || y[22] !== F
          ? ((h = _ || null != A || F || (!U && R) || !(0, ea.x)(I, N)),
            (y[16] = U),
            (y[17] = R),
            (y[18] = I),
            (y[19] = _),
            (y[20] = N),
            (y[21] = A),
            (y[22] = F),
            (y[23] = h))
          : (h = y[23]),
        y[24] !== U || y[25] !== t || y[26] !== S || y[27] !== x
          ? ((m = () => {
              x.get(T.s, t).isPending || S(U ? "check" : "recover")
            }),
            (y[24] = U),
            (y[25] = t),
            (y[26] = S),
            (y[27] = x),
            (y[28] = m))
          : (m = y[28]),
        y[29] !== _ || y[30] !== B
          ? ((f = _
              ? (0, i.jsx)(o.A, {
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
        y[32] !== _ || y[33] !== n.size || y[34] !== h || y[35] !== m || y[36] !== f
          ? ((g = (0, i.jsx)(d.$, {
              color: "primary",
              size: n.size,
              loading: _,
              disabled: h,
              onClick: m,
              children: f,
            })),
            (y[32] = _),
            (y[33] = n.size),
            (y[34] = h),
            (y[35] = m),
            (y[36] = f),
            (y[37] = g))
          : (g = y[37]),
        y[38] !== n || y[39] !== V || y[40] !== u || y[41] !== g
          ? ((v = (0, i.jsx)(es, { ...n, error: V, footerError: u, footerActions: g })),
            (y[38] = n),
            (y[39] = V),
            (y[40] = u),
            (y[41] = g),
            (y[42] = v))
          : (v = y[42]),
        y[43] !== v || y[44] !== c
          ? ((b = (0, i.jsxs)(i.Fragment, { children: [c, v] })), (y[43] = v), (y[44] = c), (y[45] = b))
          : (b = y[45]),
        b
      )
    }
    var el = n("f8Uq")
    function ed(e) {
      let t,
        n,
        r,
        o = (0, a.c)(22),
        { configuration: l, conversationId: d, children: c, size: u, footerActions: p, footerError: h, inPill: m } = e,
        g = (0, s.gh)(w.u),
        v = (0, s.Ul)(Z.Hn),
        [b, y] = (0, x.useState)(!1),
        [_, j] = (0, x.useState)(!1)
      o[0] !== l.accountId ||
      o[1] !== l.configId ||
      o[2] !== l.draftId ||
      o[3] !== l.promotedTurnId ||
      o[4] !== l.promotedVersionId ||
      o[5] !== l.userId ||
      o[6] !== d ||
      o[7] !== g
        ? ((t = function () {
            ;(y(!0), j(!1))
            let e = g.get(H.gM).pathname,
              t = function () {
                let t = g.get(S.n6, d),
                  n = g.get(S.fm, d),
                  i = g.query.getData(el.wc, d)
                return (
                  void 0 !== t &&
                  t === l.promotedTurnId &&
                  !g.get(Q.PO).authLoading &&
                  g.get(Q.chatGptAuthenticatedAccountId$) === l.accountId &&
                  g.get(Q.chatGptAuthenticatedUserId$) === l.userId &&
                  n?.configId === l.configId &&
                  n.draftId === l.draftId &&
                  n.promotedVersionId === l.promotedVersionId &&
                  n.promotedTurnId === l.promotedTurnId &&
                  null == n.approval &&
                  i?.id === l.configId &&
                  i.version_id === l.promotedVersionId &&
                  (null == i.draft || (null != l.draftId && i.draft.id === l.draftId)) &&
                  null == g.get(S.U1, d) &&
                  g.get(H.gM).pathname === e &&
                  g.get(Z.Hn)
                )
              }
            ;(0, en.Cv)(l.accountId, l.userId, [l.configId])
              .then(async (e) => {
                if (!t()) return
                let n = e.ok ? e.configs[0] : void 0
                null != n && (0, en.gd)(n) && n.latestReadyVersionId === l.promotedVersionId
                  ? (await (0, J.kt)(g, G.Q2Y.SELECTED_PROJECT, null, { throwOnFailure: !0 }),
                    t() &&
                      ((0, ee.eP)(g, null),
                      (0, et.F_)(g, n, g.get(ee.Gt)),
                      (0, X.startNewConversation)(g, {
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
          (o[7] = g),
          (o[8] = t))
        : (t = o[8])
      let k = t,
        T = null != l.draftId && null != p ? eo : es,
        M = v ? k : void 0
      return (
        o[9] !== _ ? ((n = _ ? (0, f.E)("openTaskFailed") : void 0), (o[9] = _), (o[10] = n)) : (n = o[10]),
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
    var ec = n("BbjC"),
      eu = n("GhRT"),
      ep = n("UTe7")
    function eh(e) {
      let t,
        n,
        l,
        c,
        b,
        y,
        x,
        w,
        _,
        j,
        k,
        T,
        P,
        N,
        B = (0, a.c)(172),
        {
          conversationId: D,
          children: V,
          editingActions: K,
          editingSummary: Y,
          editingError: W,
          inFooter: q,
          hideWhenReviewNeeded: G,
          hasPendingVpn: H,
          size: Q,
          pill: Z,
        } = e,
        J = void 0 !== q && q,
        X = void 0 !== G && G,
        ee = void 0 !== H && H,
        et = void 0 === Q ? "compact" : Q,
        en = (0, s._U)(v.Pn, D),
        ei = (0, s._U)(S.ZF, D),
        ea = (0, s._U)(S.fm, D),
        { data: es } = (0, s._U)(el.wc, D),
        { error: er, isPending: eo, mutate: eh } = (0, s._U)(h.km, D),
        ev = (0, s._U)(m.Sn, D),
        eb = (0, s._U)(ec.dH, D) || ee,
        ey = (0, s._U)(eu.GM, D),
        ex = (0, s._U)(ep.Ii, D),
        ew = (0, s._U)(eu.tj, D),
        eS = (0, s._U)(S.n6, D),
        e_ = void 0 !== eS,
        ej = (0, s._U)(S.U1, D),
        ek = null != ej,
        eT = (0, s._U)(p.xp, D),
        { isPending: eM } = (0, s._U)(el.b2, D),
        eA = (0, s._U)(el.Ks, D),
        eC = (0, s._U)(ec.lD, D),
        eP = (0, s._U)(p.fK, D)
      if ((null != Z && eP) || null == es || null == ea || null == ei) {
        let e
        return (
          B[0] !== Z
            ? ((e = Z?.editAction == null ? null : (0, i.jsx)(i.Fragment, { children: Z.editAction })),
              (B[0] = Z),
              (B[1] = e))
            : (e = B[1]),
          e
        )
      }
      if (null != Z && (eM || eo)) {
        let e,
          t = eM ? "saving" : "publishing"
        return (
          B[2] !== D || B[3] !== t
            ? ((e = (0, i.jsx)($, { conversationId: D, state: t })), (B[2] = D), (B[3] = t), (B[4] = e))
            : (e = B[4]),
          e
        )
      }
      if (null != Z && ew.length > 0) {
        let e
        return (
          B[5] !== Z.editAction
            ? ((e = null == Z.editAction ? null : (0, i.jsx)(i.Fragment, { children: Z.editAction })),
              (B[5] = Z.editAction),
              (B[6] = e))
            : (e = B[6]),
          e
        )
      }
      ;(B[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)(o.A, { ...z.publish })), (B[7] = t))
        : (t = B[7]),
        B[8] !== et
          ? ((n = (0, i.jsx)(d.$, { color: "primary", disabled: !0, size: et, children: t })), (B[8] = et), (B[9] = n))
          : (n = B[9]))
      let eI = n
      if (null != en) {
        let e, t, n
        if (null != Z) {
          let e
          return (
            B[10] !== D || B[11] !== Z.onReview
              ? ((e = (0, i.jsx)($, { conversationId: D, state: "review", onAction: Z.onReview })),
                (B[10] = D),
                (B[11] = Z.onReview),
                (B[12] = e))
              : (e = B[12]),
            e
          )
        }
        let a = `${ea.accountId}:${ea.userId}:${ea.draftId}`
        return (
          B[13] !== D || B[14] !== a
            ? ((e = (0, i.jsx)(M, { conversationId: D }, a)), (B[13] = D), (B[14] = a), (B[15] = e))
            : (e = B[15]),
          B[16] !== V || B[17] !== K || B[18] !== W || B[19] !== Y || B[20] !== J || B[21] !== eI
            ? ((t = J
                ? (0, i.jsxs)(R.W, { status: Y, error: W, errorActions: V, children: [K, eI] })
                : (0, i.jsxs)("div", {
                    className: "flex min-w-0 flex-wrap items-center justify-end gap-2",
                    children: [Y, V, K],
                  })),
              (B[16] = V),
              (B[17] = K),
              (B[18] = W),
              (B[19] = Y),
              (B[20] = J),
              (B[21] = eI),
              (B[22] = t))
            : (t = B[22]),
          B[23] !== e || B[24] !== t
            ? ((n = (0, i.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2 text-sm select-none",
                children: [e, t],
              })),
              (B[23] = e),
              (B[24] = t),
              (B[25] = n))
            : (n = B[25]),
          n
        )
      }
      let eN = null != ea.draftId && er instanceof v.T6 ? null : er,
        eU = es.draft,
        eE = ea.publicationStateUnknown && null == ea.approval && null == eU
      B[26] !== eE ? ((l = eE ? (0, f.E)("returnToSetup").content : null), (B[26] = eE), (B[27] = l)) : (l = B[27])
      let eF = l,
        eR = eN instanceof m.ES ? eN : void 0,
        eB = eR?.canRetryPublication === !0,
        eD = eR?.canRetryRestore === !0,
        eV = null != ea.approval && !eB,
        eK = eR?.operation?.state === "FAILED"
      B[28] !== es || B[29] !== eU
        ? ((c = r.Z.optional().safeParse((eU ?? es).outbound_identity_requirements)),
          (B[28] = es),
          (B[29] = eU),
          (B[30] = c))
        : (c = B[30])
      let eY = !c.success,
        ez = eN instanceof h.A6 && ("changed" !== eN.retryIssue || null == eU) ? eN : void 0,
        eO =
          eN instanceof h.A6 &&
          409 === eN.result.status &&
          "draft cannot be edited in its current state" === eN.result.message
      if (
        (null != ea.draftId && null != ea.promotedVersionId) ||
        (!eo &&
          null == ea.approval &&
          e_ &&
          ea.promotedTurnId === eS &&
          !ek &&
          !ee &&
          null == eN &&
          null == eU &&
          ea.promotedVersionId === es.version_id)
      ) {
        let e, t
        B[31] !== K || B[32] !== J || B[33] !== eI
          ? ((e = J ? (0, i.jsxs)(i.Fragment, { children: [K, eI] }) : void 0),
            (B[31] = K),
            (B[32] = J),
            (B[33] = eI),
            (B[34] = e))
          : (e = B[34])
        let n = null != Z
        return (
          B[35] !== V || B[36] !== ea || B[37] !== D || B[38] !== W || B[39] !== et || B[40] !== n || B[41] !== e
            ? ((t = (0, i.jsx)(ed, {
                size: et,
                configuration: ea,
                conversationId: D,
                footerActions: e,
                footerError: W,
                inPill: n,
                children: V,
              })),
              (B[35] = V),
              (B[36] = ea),
              (B[37] = D),
              (B[38] = W),
              (B[39] = et),
              (B[40] = n),
              (B[41] = e),
              (B[42] = t))
            : (t = B[42]),
          t
        )
      }
      if (null != Z) {
        let e,
          t = null != eN || null != eA || eV || eE || eC.length > 0,
          n = t ? "review" : "ready"
        if (((null != eN || null != eA) && (n = "error"), !t && !ex)) {
          let e
          return (
            B[43] !== Z.editAction
              ? ((e = null == Z.editAction ? null : (0, i.jsx)(i.Fragment, { children: Z.editAction })),
                (B[43] = Z.editAction),
                (B[44] = e))
              : (e = B[44]),
            e
          )
        }
        let a = t ? Z.onReview : Z.onSaveAndPublish
        return (
          B[45] !== D || B[46] !== Z.editAction || B[47] !== n || B[48] !== a
            ? ((e = (0, i.jsx)($, { conversationId: D, state: n, editAction: Z.editAction, onAction: a })),
              (B[45] = D),
              (B[46] = Z.editAction),
              (B[47] = n),
              (B[48] = a),
              (B[49] = e))
            : (e = B[49]),
          e
        )
      }
      if (eK && !eB && !J) {
        let e
        return (
          B[50] !== V || B[51] !== K || B[52] !== Y || B[53] !== eR.operation
            ? ((e = (0, i.jsxs)(F, { operation: eR.operation, children: [Y, V, K] })),
              (B[50] = V),
              (B[51] = K),
              (B[52] = Y),
              (B[53] = eR.operation),
              (B[54] = e))
            : (e = B[54]),
          e
        )
      }
      B[55] !== eV ||
      B[56] !== es ||
      B[57] !== ea.draftId ||
      B[58] !== eN ||
      B[59] !== ee ||
      B[60] !== X ||
      B[61] !== eY ||
      B[62] !== eT ||
      B[63] !== eo ||
      B[64] !== eb ||
      B[65] !== eD ||
      B[66] !== eU?.base_version_id ||
      B[67] !== ej
        ? ((b =
            ((X && (eb || eY)) ||
              (null != ea.draftId &&
                eT &&
                "ready" === es.status &&
                eU?.base_version_id === es.version_id &&
                !(0, g.ib)(es) &&
                !ee &&
                (null == ej || Object.keys(ej).every(ef)) &&
                null == eN)) &&
            !eo &&
            !eV &&
            !eD),
          (B[55] = eV),
          (B[56] = es),
          (B[57] = ea.draftId),
          (B[58] = eN),
          (B[59] = ee),
          (B[60] = X),
          (B[61] = eY),
          (B[62] = eT),
          (B[63] = eo),
          (B[64] = eb),
          (B[65] = eD),
          (B[66] = eU?.base_version_id),
          (B[67] = ej),
          (B[68] = b))
        : (b = B[68])
      let eW = b
      B[69] !== eE ? ((y = eE ? (0, f.E)("returnToSetup") : null), (B[69] = eE), (B[70] = y)) : (y = B[70])
      let eL = y
      if (J && (eD || (eK && !eB))) {
        let e
        ;(B[71] !== eR.operation ? ((e = I(eR.operation)), (B[71] = eR.operation), (B[72] = e)) : (e = B[72]), (eL = e))
      } else if (null != eR) {
        let e
        ;(B[73] !== eR ? ((e = A(eR)), (B[73] = eR), (B[74] = e)) : (e = B[74]), (eL = e))
      } else if (eY) {
        let e
        ;(B[75] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, f.E)("connectionNeedsAttention")), (B[75] = e))
          : (e = B[75]),
          (eL = e))
      } else if (eN instanceof h.A6 && "refresh" === eN.retryIssue) {
        let e
        ;(B[76] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, f.E)("settingsUnavailable")), (B[76] = e))
          : (e = B[76]),
          (eL = e))
      } else if (eN instanceof h.A6 && "missing" === eN.retryIssue) {
        let e
        ;(B[77] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, f.E)("investigation")), (B[77] = e))
          : (e = B[77]),
          (eL = e))
      } else if (eN instanceof h.A6 && "changed" === eN.retryIssue) {
        let e
        ;(B[78] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, f.E)("environmentChanged")), (B[78] = e))
          : (e = B[78]),
          (eL = e))
      } else if (eN instanceof Error && "conflict" === eN.message) {
        let e
        ;(B[79] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, f.E)("settingsConflict")), (B[79] = e))
          : (e = B[79]),
          (eL = e))
      } else if (eO) {
        let e
        ;(B[80] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, f.E)("lockedNeedsInvestigation")), (B[80] = e))
          : (e = B[80]),
          (eL = e))
      } else if (eN instanceof h.A6) {
        let e
        ;(B[81] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, f.E)("publishUnconfirmed")), (B[81] = e))
          : (e = B[81]),
          (eL = e))
      } else if (null != eN) {
        let e
        ;(B[82] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, f.E)("genericPublishFailed")), (B[82] = e))
          : (e = B[82]),
          (eL = e))
      }
      let e$ = "publish"
      ;(eo
        ? (e$ =
            ev?.idempotencyKey === ea.approval?.idempotencyKey && ev?.state === "SUCCEEDED"
              ? "connecting"
              : "publishing")
        : eR?.debugInfo?.state === "SUCCEEDED"
          ? (e$ = "reconnect")
          : eD
            ? (e$ = "retry")
            : eV && eR?.interruptionReason === "not_found"
              ? (e$ = "checkAgain")
              : eV && !eK
                ? (e$ = "check")
                : null == eN || (null == ez && eN instanceof h.A6)
                  ? eV || null != eN || null == ea.promotedVersionId || (e$ = "republish")
                  : (e$ = "retry"),
        B[83] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, i.jsx)(o.A, {
              id: "restricted.environmentSetup.result.publishTooltip",
              defaultMessage: "Publish the saved configuration and environment snapshot so it can run tasks",
              description:
                "Tooltip explaining that publishing makes the saved cloud environment configuration and snapshot available for running tasks",
            })),
            (B[83] = x))
          : (x = B[83]))
      let eq = x
      if (eo) {
        let e
        ;(B[84] !== ea.approval?.idempotencyKey || B[85] !== ev?.idempotencyKey || B[86] !== ev?.state
          ? ((e =
              ev?.idempotencyKey === ea.approval?.idempotencyKey && ev?.state === "SUCCEEDED"
                ? (0, i.jsx)(L, {})
                : (0, i.jsx)(o.A, {
                    id: "restricted.environmentSetup.result.publishingTooltip",
                    defaultMessage: "Your environment is being published",
                    description:
                      "Tooltip explaining why the environment publishing action is unavailable while publication is in progress",
                  })),
            (B[84] = ea.approval?.idempotencyKey),
            (B[85] = ev?.idempotencyKey),
            (B[86] = ev?.state),
            (B[87] = e))
          : (e = B[87]),
          (eq = e))
      } else if (eM) {
        let e
        ;(B[88] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(o.A, {
              id: "restricted.environmentSetup.result.savingTooltip",
              defaultMessage: "Wait for your configuration draft to finish saving",
              description:
                "Tooltip explaining why environment publication or its status check is unavailable while saving",
            })),
            (B[88] = e))
          : (e = B[88]),
          (eq = e))
      } else if (null != eR) {
        let e
        ;(B[89] !== eR ? ((e = (0, i.jsx)(C, { error: eR })), (B[89] = eR), (B[90] = e)) : (e = B[90]), (eq = e))
      } else if (eV) {
        let e
        ;(B[91] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(o.A, {
              id: "restricted.environmentSetup.result.checkStatusTooltip",
              defaultMessage:
                "The app stopped waiting for a publishing update. Publishing may still be running. Check its status without starting another publish",
              description: "Tooltip for Check status, which follows the current cloud environment publishing attempt",
            })),
            (B[91] = e))
          : (e = B[91]),
          (eq = e))
      } else if (null != eF) eq = eF
      else if (eY) {
        let e
        ;(B[92] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(o.A, {
              id: "restricted.environmentSetup.result.invalidOidcConnections",
              defaultMessage: "A connection needs attention · Review connections in Internet access before publishing",
              description:
                "Explains where to fix or detach invalid saved outbound identity attachments before publishing an environment",
            })),
            (B[92] = e))
          : (e = B[92]),
          (eq = e))
      } else if (ey) {
        let e
        ;(B[93] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(o.A, {
              id: "environmentSetup.review.beforePublishing",
              defaultMessage: "Open Needs attention above the composer to finish reviewing your configuration",
              description: "Guidance in the full environment editor when stepped onboarding review remains incomplete",
            })),
            (B[93] = e))
          : (e = B[93]),
          (eq = e))
      } else if (eb) {
        let e
        ;(B[94] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(o.A, {
              id: "restricted.environmentSetup.result.saveBeforePublishingTooltip",
              defaultMessage: "Save your configuration, then publish",
              description:
                "Tooltip explaining that configuration changes must be saved before publishing the cloud environment",
            })),
            (B[94] = e))
          : (e = B[94]),
          (eq = e))
      } else if (!e_ || "ready" !== ei.phase) {
        let e
        ;(B[95] !== D || B[96] !== eP
          ? ((e = (0, i.jsx)(eg, { conversationId: D, isExecutionActive: eP })), (B[95] = D), (B[96] = eP), (B[97] = e))
          : (e = B[97]),
          (eq = e))
      }
      let eG = z[J && "republish" === e$ ? "publish" : e$]
      B[98] !== eG ? ((w = (0, i.jsx)(o.A, { ...eG })), (B[98] = eG), (B[99] = w)) : (w = B[99])
      let eH = w
      if (J && "retry" === e$) {
        let e
        ;(B[100] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(o.A, {
              id: "environmentSetup.footer.retry",
              defaultMessage: "Retry",
              description: "Retry the failed environment publication using its existing recovery action",
            })),
            (B[100] = e))
          : (e = B[100]),
          (eH = e))
      } else if (J && "publishing" === e$) {
        let e
        ;(B[101] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(o.A, {
              id: "environmentSetup.footer.publishing",
              defaultMessage: "Publishing…",
              description: "Disabled primary action while environment publication is in progress",
            })),
            (B[101] = e))
          : (e = B[101]),
          (eH = e))
      }
      B[102] !== eV ||
      B[103] !== es ||
      B[104] !== ea ||
      B[105] !== ei ||
      B[106] !== e_ ||
      B[107] !== ee ||
      B[108] !== ek ||
      B[109] !== eW ||
      B[110] !== J ||
      B[111] !== eY ||
      B[112] !== eo ||
      B[113] !== eM ||
      B[114] !== eb ||
      B[115] !== eR ||
      B[116] !== eK ||
      B[117] !== eh ||
      B[118] !== eE ||
      B[119] !== eH ||
      B[120] !== eq ||
      B[121] !== ez ||
      B[122] !== eB ||
      B[123] !== eD ||
      B[124] !== et
        ? ((_ =
            eW && !J
              ? null
              : (0, i.jsx)(u.F, {
                  sizingLabels: J ? void 0 : Object.entries(z).map(em),
                  size: et,
                  color: J || !eb || eV ? "primary" : "secondary",
                  disabled:
                    (J && (eW || (eK && !eB))) ||
                    eM ||
                    eE ||
                    (eD ? ee || ek || !e_ : !eV && (eY || !e_ || eb || "ready" !== ei.phase)),
                  loading: eo,
                  tooltipContent: eq,
                  onClick: () =>
                    eh({
                      configuration: eB && !eD ? { ...ea, approval: void 0 } : ea,
                      config: es,
                      retry: ez,
                      failedOperationId: eD ? eR.operation?.id : void 0,
                    }),
                  children: (0, i.jsx)("span", { className: "min-w-0 break-words", children: eH }),
                })),
          (B[102] = eV),
          (B[103] = es),
          (B[104] = ea),
          (B[105] = ei),
          (B[106] = e_),
          (B[107] = ee),
          (B[108] = ek),
          (B[109] = eW),
          (B[110] = J),
          (B[111] = eY),
          (B[112] = eo),
          (B[113] = eM),
          (B[114] = eb),
          (B[115] = eR),
          (B[116] = eK),
          (B[117] = eh),
          (B[118] = eE),
          (B[119] = eH),
          (B[120] = eq),
          (B[121] = ez),
          (B[122] = eB),
          (B[123] = eD),
          (B[124] = et),
          (B[125] = _))
        : (_ = B[125])
      let eQ = _
      if (J) {
        let e,
          t,
          n,
          a = Y
        if (eo) {
          let e
          ;(B[126] !== D
            ? ((e = (0, i.jsx)(O, { conversationId: D, elapsedOnly: !0 })), (B[126] = D), (B[127] = e))
            : (e = B[127]),
            (a = e))
        } else if (null != eL || null != W) {
          let e
          ;(B[128] !== eK
            ? ((e = (0, i.jsx)(R.E, { publicationFailed: eK })), (B[128] = eK), (B[129] = e))
            : (e = B[129]),
            (a = e))
        }
        let s = `${ea.accountId}:${ea.userId}:${ea.draftId}`
        B[130] !== D || B[131] !== s
          ? ((e = (0, i.jsx)(M, { conversationId: D }, s)), (B[130] = D), (B[131] = s), (B[132] = e))
          : (e = B[132])
        let r = W ?? (eo ? null : eL)
        return (
          B[133] !== V || B[134] !== K || B[135] !== eQ || B[136] !== a || B[137] !== r
            ? ((t = (0, i.jsxs)(R.W, { status: a, error: r, errorActions: V, children: [K, eQ] })),
              (B[133] = V),
              (B[134] = K),
              (B[135] = eQ),
              (B[136] = a),
              (B[137] = r),
              (B[138] = t))
            : (t = B[138]),
          B[139] !== e || B[140] !== t
            ? ((n = (0, i.jsxs)("div", { className: "flex min-w-0 flex-col gap-3", children: [e, t] })),
              (B[139] = e),
              (B[140] = t),
              (B[141] = n))
            : (n = B[141]),
          n
        )
      }
      if (eD) {
        let e, t, n
        return (
          B[142] !== V || B[143] !== Y
            ? ((e = (0, i.jsxs)(i.Fragment, { children: [Y, V] })), (B[142] = V), (B[143] = Y), (B[144] = e))
            : (e = B[144]),
          B[145] !== K || B[146] !== eQ || B[147] !== e
            ? ((t = (0, i.jsxs)(E, { secondaryActions: e, children: [K, eQ] })),
              (B[145] = K),
              (B[146] = eQ),
              (B[147] = e),
              (B[148] = t))
            : (t = B[148]),
          B[149] !== eR.operation || B[150] !== t
            ? ((n = (0, i.jsx)(F, { operation: eR.operation, children: t })),
              (B[149] = eR.operation),
              (B[150] = t),
              (B[151] = n))
            : (n = B[151]),
          n
        )
      }
      if (null == eL && null == V && null == K && null == Y && null == eQ) {
        let e
        return (
          B[152] !== D ? ((e = (0, i.jsx)(M, { conversationId: D })), (B[152] = D), (B[153] = e)) : (e = B[153]),
          e
        )
      }
      ;(B[154] !== V || B[155] !== Y
        ? ((j = (0, i.jsxs)(i.Fragment, { children: [Y, V] })), (B[154] = V), (B[155] = Y), (B[156] = j))
        : (j = B[156]),
        B[157] !== K || B[158] !== eQ || B[159] !== j
          ? ((k = (0, i.jsxs)(E, { secondaryActions: j, children: [K, eQ] })),
            (B[157] = K),
            (B[158] = eQ),
            (B[159] = j),
            (B[160] = k))
          : (k = B[160]))
      let eZ = k,
        eJ = `${ea.accountId}:${ea.userId}:${ea.draftId}`
      return (
        B[161] !== D || B[162] !== eJ
          ? ((T = (0, i.jsx)(M, { conversationId: D }, eJ)), (B[161] = D), (B[162] = eJ), (B[163] = T))
          : (T = B[163]),
        B[164] !== eZ || B[165] !== D || B[166] !== eo || B[167] !== eL?.content
          ? ((P = eo
              ? (0, i.jsx)(O, { conversationId: D, children: eZ })
              : (0, i.jsx)(U, { message: eL?.content, role: "alert", children: eZ })),
            (B[164] = eZ),
            (B[165] = D),
            (B[166] = eo),
            (B[167] = eL?.content),
            (B[168] = P))
          : (P = B[168]),
        B[169] !== T || B[170] !== P
          ? ((N = (0, i.jsxs)("div", {
              className: "flex min-w-0 flex-col gap-2 text-sm select-none",
              children: [T, P],
            })),
            (B[169] = T),
            (B[170] = P),
            (B[171] = N))
          : (N = B[171]),
        N
      )
    }
    function em(e) {
      let [t, n] = e
      return (0, i.jsx)(o.A, { ...n }, t)
    }
    function ef(e) {
      return "name" === e || "description" === e || "access" === e
    }
    function eg(e) {
      let t,
        n,
        r,
        d = (0, a.c)(8),
        { conversationId: u, isExecutionActive: h } = e
      ;(d[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, c.Y)()), (d[0] = t)) : (t = d[0]),
        d[1] !== u ? ((n = { hostId: t, threadId: u }), (d[1] = u), (d[2] = n)) : (n = d[2]))
      let m = (0, s._U)(l.as, n),
        f = (0, s._U)(p.pe, u)
      if (h) {
        let e
        return (
          d[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(o.A, {
                id: "restricted.environmentSetup.result.publishTooltip.running",
                defaultMessage: "Wait for setup to finish",
                description: "Short tooltip on the disabled Cloud setup Publish button while Codex is still responding",
              })),
              (d[3] = e))
            : (e = d[3]),
          e
        )
      }
      if (m) {
        let e
        return (
          d[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(o.A, {
                id: "restricted.environmentSetup.result.publishTooltip.loading",
                defaultMessage: "Checking setup status…",
                description:
                  "Short tooltip on the disabled Cloud setup Publish button while the app loads the setup conversation",
              })),
              (d[4] = e))
            : (e = d[4]),
          e
        )
      }
      if (f?.status === "interrupted") {
        let e
        return (
          d[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(o.A, {
                id: "restricted.environmentSetup.result.publishTooltip.interrupted",
                defaultMessage: "Setup interrupted. Ask Codex to finish",
                description:
                  "Short tooltip on the disabled Cloud setup Publish button after a response was stopped. The user can ask Codex to continue setup in the chat.",
              })),
              (d[5] = e))
            : (e = d[5]),
          e
        )
      }
      if (f?.status === "failed") {
        let e
        return (
          d[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(o.A, {
                id: "restricted.environmentSetup.result.publishTooltip.failed",
                defaultMessage: "Ask Codex to finish setup",
                description:
                  "Short tooltip on the disabled Cloud setup Publish button after a response failed. The user can ask Codex to continue setup in the chat.",
              })),
              (d[6] = e))
            : (e = d[6]),
          e
        )
      }
      return (
        d[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(o.A, {
              id: "restricted.environmentSetup.result.finishSetupBeforePublishing",
              defaultMessage: "Setup isn’t finished yet",
              description:
                "Explains why publishing remains unavailable when configuration is saved but the setup task has not completed",
            })),
            (d[7] = r))
          : (r = d[7]),
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
//# sourceMappingURL=2463.22de500d36.js.map
