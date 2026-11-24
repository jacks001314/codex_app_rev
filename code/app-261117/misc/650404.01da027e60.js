export const __rspack_esm_ids = [650404]
export const __webpack_modules__ = {
  DrOk(e, t) {
    t.A = {
      Dialog: "Dialog-IruUQy",
      dialog: "Dialog-IruUQy",
      Header: "Header-wqgByH",
      header: "Header-wqgByH",
      Title: "Title-SP7Ywt",
      title: "Title-SP7Ywt",
      Panel: "Panel-fIDgPA",
      panel: "Panel-fIDgPA",
      Section: "Section-WrbvPf",
      section: "Section-WrbvPf",
      Footer: "Footer-KJPpaf",
      footer: "Footer-KJPpaf",
      Send: "Send-LspTeV",
      send: "Send-LspTeV",
      Upload: "Upload-zphAMv",
      upload: "Upload-zphAMv",
      Rows: "Rows-AzUYAR",
      rows: "Rows-AzUYAR",
      EmailCompletionHint: "EmailCompletionHint-hOFaMQ",
      emailCompletionHint: "EmailCompletionHint-hOFaMQ",
      AddRow: "AddRow-Ob2dI0",
      addRow: "AddRow-Ob2dI0",
      Add: "Add-b8F5z_",
      add: "Add-b8F5z_",
      "invite-panel-in": "invite-panel-in-Ba_Knx",
      invitePanelIn: "invite-panel-in-Ba_Knx",
    }
  },
  IPpC(e, t, a) {
    a.d(t, { K: () => r, i: () => s })
    var i = a("zd8w")
    function n(e, t) {
      return new Promise((a, i) => {
        if (t.aborted) return void i(t.reason instanceof Error ? t.reason : new DOMException("Aborted", "AbortError"))
        let n = globalThis.setTimeout(() => {
            ;(t.removeEventListener("abort", r), a())
          }, e),
          r = () => {
            ;(globalThis.clearTimeout(n),
              i(t.reason instanceof Error ? t.reason : new DOMException("Aborted", "AbortError")))
          }
        t.addEventListener("abort", r, { once: !0 })
      })
    }
    async function r({ read: e, start: t }, a, i) {
      let s = AbortSignal.any([a, AbortSignal.timeout(3e5)])
      s.throwIfAborted()
      let l = await t(s),
        o = !1
      for (; "pending" === l.status;) {
        ;(await n(2e3, s),
          document.hidden &&
            (await (function (e) {
              return (
                e.throwIfAborted(),
                new Promise((t, a) => {
                  let i = () => {
                      document.hidden ||
                        (document.removeEventListener("visibilitychange", i), e.removeEventListener("abort", n), t())
                    },
                    n = () => {
                      ;(document.removeEventListener("visibilitychange", i), a(e.reason))
                    }
                  ;(document.addEventListener("visibilitychange", i), e.addEventListener("abort", n, { once: !0 }))
                })
              )
            })(s)),
          s.throwIfAborted())
        try {
          l = await e(s)
        } catch (e) {
          if ((s.throwIfAborted(), !i(e))) throw e
          continue
        }
        "available" !== l.status || o || ((o = !0), s.throwIfAborted(), (l = await t(s)))
      }
      return (s.throwIfAborted(), l)
    }
    function s(e, t, a) {
      let r = (0, i.useRef)(null),
        [s, l] = (0, i.useState)("idle")
      return (
        (0, i.useEffect)(
          () => () => {
            r.current && (r.current.abort(), (r.current = null), a(!1))
          },
          [a],
        ),
        {
          status: s,
          suggest: async function () {
            if (r.current) return
            let i = new AbortController()
            ;((r.current = i), l("loading"), a(!0))
            try {
              let a = await (async function (e, t) {
                let a = performance.now()
                try {
                  return await e(t)
                } finally {
                  let e = Math.ceil(a + 6e3 - performance.now())
                  ;(e > 0 && (await n(e, t)), t.throwIfAborted())
                }
              })(e, i.signal)
              i.signal.aborted || l(t(a) > 0 ? "ready" : "empty")
            } catch {
              i.signal.aborted || l("error")
            } finally {
              r.current === i && ((r.current = null), a(!1))
            }
          },
          cancel: function () {
            ;(r.current?.abort(), (r.current = null), l("idle"), a(!1))
          },
        }
      )
    }
  },
  LA5s(e, t, a) {
    var i = a("ABep"),
      n = a("zd8w"),
      r = a("oyxz"),
      s = a("E2yB")
    a.d(
      t,
      {},
      {
        M: function ({ value: e, domain: t, isValidEmail: a = (e) => s.WL.test(e.trim()), onAccept: l, children: o }) {
          let [_, d] = (0, n.useState)(!1),
            [u, c] = (0, n.useState)(!1),
            E =
              t && _ && !u && e.length > 0 && !a(e)
                ? (function (e, t) {
                    let a = e.indexOf("@"),
                      i = -1 === a ? "" : e.slice(a),
                      n = "@" + t
                    if (i.length >= n.length || !n.startsWith(i.toLowerCase())) return
                    let r = e + n.slice(i.length)
                    return s.WL.test(r) ? r : void 0
                  })(e, t)
                : void 0,
            T = null != E,
            I = (0, n.useRef)(null),
            [A, m] = (0, n.useState)(!1)
          return (
            (0, n.useLayoutEffect)(() => {
              let e = I.current
              if (!T || !e) return
              let t = () => m(e.scrollWidth > e.clientWidth)
              t()
              let a = new ResizeObserver(t)
              for (let t of (a.observe(e), e.children)) a.observe(t)
              return () => a.disconnect()
            }, [T]),
            (0, i.jsxs)("div", {
              className: "min-w-0",
              onFocus: () => d(!0),
              onBlur: () => {
                ;(d(!1), c(!1))
              },
              onCompositionStart: () => c(!0),
              onCompositionEnd: () => c(!1),
              onKeyDown: (e) => {
                !E ||
                  "Tab" !== e.key ||
                  e.defaultPrevented ||
                  e.shiftKey ||
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  e.nativeEvent.isComposing ||
                  l(E)
              },
              children: [
                o(
                  null == E
                    ? null
                    : (0, i.jsxs)("span", {
                        "aria-hidden": "true",
                        ref: I,
                        className: "inline-flex min-w-0 max-w-full items-center",
                        style: T && A ? { visibility: "hidden" } : void 0,
                        children: [
                          (0, i.jsx)("span", { className: "shrink-0 whitespace-nowrap", children: E.slice(e.length) }),
                          (0, i.jsx)("kbd", {
                            className: "ms-1 shrink-0 rounded border border-current px-1 font-sans text-xs leading-4",
                            children: (0, i.jsx)(r.A, {
                              id: "admin-invite.domainCompletion.key",
                              defaultMessage: "Tab",
                              description:
                                "Small keyboard key label after a suggested email domain in workspace invites. Use the local name of the Tab key.",
                            }),
                          }),
                        ],
                      }),
                ),
                null != E &&
                  (0, i.jsx)("span", {
                    className: T && A ? "mt-1 block text-xs [overflow-wrap:anywhere]" : "sr-only",
                    role: "status",
                    children: (0, i.jsx)(r.A, {
                      id: "admin-invite.domainCompletion.hint",
                      defaultMessage: "Press Tab to complete the email address with @{domain}.",
                      description:
                        "Screen reader hint while entering a workspace invitation. The domain is the part of the inviter's email after the at sign. Tab accepts the suggested address.",
                      values: { domain: t },
                    }),
                  }),
              ],
            })
          )
        },
      },
    )
  },
  M6da(e, t, a) {
    var i,
      n,
      r,
      s,
      l,
      o,
      _,
      d =
        (((i = {}).CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_UNSPECIFIED =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_UNSPECIFIED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_MODAL_OPEN_REQUESTED =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_MODAL_OPEN_REQUESTED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_BATCH_RESULT_OBSERVED =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_BATCH_RESULT_OBSERVED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_EMAIL_REMOVED = "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_EMAIL_REMOVED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_EMAILS_ADDED = "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_EMAILS_ADDED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_SEND_CLICKED = "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_SEND_CLICKED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_SKIP_CLICKED = "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_SKIP_CLICKED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_UPLOAD_CLICKED = "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_UPLOAD_CLICKED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_DOMAIN_MISMATCH =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_DOMAIN_MISMATCH"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_SHARED = "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_SHARED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_CREATED = "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_CREATED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_REPLACED = "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_REPLACED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_REVOKED = "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_REVOKED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_AUDIENCE_ANYONE =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_AUDIENCE_ANYONE"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_AUDIENCE_WORKSPACE_DOMAINS =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_AUDIENCE_WORKSPACE_DOMAINS"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_AUTO_APPROVAL_ENABLED =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_AUTO_APPROVAL_ENABLED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_AUTO_APPROVAL_DISABLED =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_AUTO_APPROVAL_DISABLED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_SHOWN = "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_SHOWN"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_COPY_CLICKED =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_COPY_CLICKED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_EMAIL_DOMAIN_COMPLETION_ACCEPTED =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_EMAIL_DOMAIN_COMPLETION_ACCEPTED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_OPENED = "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_OPENED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_JOIN_CLICKED =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_JOIN_CLICKED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_SEAT_REQUEST_CLICKED =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_SEAT_REQUEST_CLICKED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_JOIN_SUCCEEDED =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_JOIN_SUCCEEDED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_SEAT_REQUEST_PENDING =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_SEAT_REQUEST_PENDING"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_JOIN_SEAT_REQUIRED =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_JOIN_SEAT_REQUIRED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_JOIN_FAILED =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_JOIN_FAILED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_SEAT_REQUEST_FAILED =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_SEAT_REQUEST_FAILED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_SEAT_REQUEST_UNCONFIRMED =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_SEAT_REQUEST_UNCONFIRMED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_SEAT_REQUEST_JOINED =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_LINK_SEAT_REQUEST_JOINED"),
        (i.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_PURCHASE_AUTHORIZATION_SUBMITTED =
          "CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_PURCHASE_AUTHORIZATION_SUBMITTED"),
        (i.UNRECOGNIZED = "UNRECOGNIZED"),
        i),
      u =
        (((n = {}).CHATGPT_WORKSPACE_INVITE_ENTRY_POINT_UNSPECIFIED =
          "CHATGPT_WORKSPACE_INVITE_ENTRY_POINT_UNSPECIFIED"),
        (n.CHATGPT_WORKSPACE_INVITE_ENTRY_POINT_PROFILE_MENU = "CHATGPT_WORKSPACE_INVITE_ENTRY_POINT_PROFILE_MENU"),
        (n.CHATGPT_WORKSPACE_INVITE_ENTRY_POINT_SIDEBAR_FOOTER = "CHATGPT_WORKSPACE_INVITE_ENTRY_POINT_SIDEBAR_FOOTER"),
        (n.CHATGPT_WORKSPACE_INVITE_ENTRY_POINT_SIDEBAR_TINY_BAR =
          "CHATGPT_WORKSPACE_INVITE_ENTRY_POINT_SIDEBAR_TINY_BAR"),
        (n.CHATGPT_WORKSPACE_INVITE_ENTRY_POINT_WORKSPACE_MEMBERS =
          "CHATGPT_WORKSPACE_INVITE_ENTRY_POINT_WORKSPACE_MEMBERS"),
        (n.CHATGPT_WORKSPACE_INVITE_ENTRY_POINT_ADMIN_CONSOLE_MEMBERS =
          "CHATGPT_WORKSPACE_INVITE_ENTRY_POINT_ADMIN_CONSOLE_MEMBERS"),
        (n.CHATGPT_WORKSPACE_INVITE_ENTRY_POINT_OWNER_ONBOARDING =
          "CHATGPT_WORKSPACE_INVITE_ENTRY_POINT_OWNER_ONBOARDING"),
        (n.CHATGPT_WORKSPACE_INVITE_ENTRY_POINT_SHARED_LINK = "CHATGPT_WORKSPACE_INVITE_ENTRY_POINT_SHARED_LINK"),
        (n.UNRECOGNIZED = "UNRECOGNIZED"),
        n),
      c =
        (((r = {}).CHATGPT_WORKSPACE_INVITE_EMAIL_INPUT_SOURCE_UNSPECIFIED =
          "CHATGPT_WORKSPACE_INVITE_EMAIL_INPUT_SOURCE_UNSPECIFIED"),
        (r.CHATGPT_WORKSPACE_INVITE_EMAIL_INPUT_SOURCE_MANUAL = "CHATGPT_WORKSPACE_INVITE_EMAIL_INPUT_SOURCE_MANUAL"),
        (r.CHATGPT_WORKSPACE_INVITE_EMAIL_INPUT_SOURCE_BULK = "CHATGPT_WORKSPACE_INVITE_EMAIL_INPUT_SOURCE_BULK"),
        (r.UNRECOGNIZED = "UNRECOGNIZED"),
        r),
      E =
        (((s = {}).CHATGPT_WORKSPACE_INVITE_LINK_SURFACE_UNSPECIFIED =
          "CHATGPT_WORKSPACE_INVITE_LINK_SURFACE_UNSPECIFIED"),
        (s.CHATGPT_WORKSPACE_INVITE_LINK_SURFACE_ADMIN_CONSOLE = "CHATGPT_WORKSPACE_INVITE_LINK_SURFACE_ADMIN_CONSOLE"),
        (s.CHATGPT_WORKSPACE_INVITE_LINK_SURFACE_INVITE_MEMBERS =
          "CHATGPT_WORKSPACE_INVITE_LINK_SURFACE_INVITE_MEMBERS"),
        (s.CHATGPT_WORKSPACE_INVITE_LINK_SURFACE_ONBOARDING = "CHATGPT_WORKSPACE_INVITE_LINK_SURFACE_ONBOARDING"),
        (s.UNRECOGNIZED = "UNRECOGNIZED"),
        s),
      T =
        (((l = {}).CHATGPT_WORKSPACE_INVITE_LINK_SHARE_METHOD_UNSPECIFIED =
          "CHATGPT_WORKSPACE_INVITE_LINK_SHARE_METHOD_UNSPECIFIED"),
        (l.CHATGPT_WORKSPACE_INVITE_LINK_SHARE_METHOD_CLIPBOARD =
          "CHATGPT_WORKSPACE_INVITE_LINK_SHARE_METHOD_CLIPBOARD"),
        (l.CHATGPT_WORKSPACE_INVITE_LINK_SHARE_METHOD_NATIVE_SHARE =
          "CHATGPT_WORKSPACE_INVITE_LINK_SHARE_METHOD_NATIVE_SHARE"),
        (l.UNRECOGNIZED = "UNRECOGNIZED"),
        l),
      I =
        (((o = {}).CHATGPT_WORKSPACE_INVITE_FLOW_DROPOFF_TYPE_UNSPECIFIED =
          "CHATGPT_WORKSPACE_INVITE_FLOW_DROPOFF_TYPE_UNSPECIFIED"),
        (o.CHATGPT_WORKSPACE_INVITE_FLOW_DROPOFF_TYPE_CLOSE = "CHATGPT_WORKSPACE_INVITE_FLOW_DROPOFF_TYPE_CLOSE"),
        (o.CHATGPT_WORKSPACE_INVITE_FLOW_DROPOFF_TYPE_CANCEL = "CHATGPT_WORKSPACE_INVITE_FLOW_DROPOFF_TYPE_CANCEL"),
        (o.UNRECOGNIZED = "UNRECOGNIZED"),
        o),
      A =
        (((_ = {}).CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_UNSPECIFIED =
          "CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_UNSPECIFIED"),
        (_.CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_OWNER =
          "CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_OWNER"),
        (_.CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_ADMIN =
          "CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_ADMIN"),
        (_.CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_MEMBER =
          "CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_MEMBER"),
        (_.CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_ANALYTICS_VIEWER =
          "CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_ANALYTICS_VIEWER"),
        (_.UNRECOGNIZED = "UNRECOGNIZED"),
        _)
    a.d(
      t,
      {},
      {
        CZ: u,
        LY: { $type: "protobuf_analytics_events.v1.ChatgptWorkspaceInviteFlowDroppedOff" },
        Nx: E,
        TC: { $type: "protobuf_analytics_events.v1.ChatgptWorkspaceInviteAbandonedWithPaidSeat" },
        UG: T,
        dm: c,
        m7: I,
        md: d,
        p4: A,
        we: { $type: "protobuf_analytics_events.v1.ChatgptWorkspaceInviteAction" },
      },
    )
  },
  uwX5(e, t, a) {
    function i(e) {
      return e.isFetchedAfterMount && !e.isFetching && null == e.error ? e.data : void 0
    }
    a.d(
      t,
      {},
      {
        n: function (e, t, a) {
          let n = i(t)
          if (n?.workspace_id !== e || "boolean" != typeof n.allow_external_domain_invites) return
          if (n.allow_external_domain_invites) return { allowExternal: !0 }
          let r = i(a)
          return {
            allowExternal: !1,
            verifiedDomains: (r?.workspace_verified_domains ?? r?.domains)
              ?.filter((e) => "verified" === e.status)
              .map((e) => e.hostname),
          }
        },
      },
    )
  },
  khp7(e, t, a) {
    var i = a("ABep"),
      n = a("QosV"),
      r = a("aqd9")
    a.d(
      t,
      {},
      {
        W: function () {
          let e,
            t = (0, n.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)("span", {
                  ref: r.d,
                  "aria-hidden": "true",
                  className:
                    "loading-shimmer-mask pointer-events-none absolute start-3 top-1/2 h-2.5 w-1/2 -translate-y-1/2 rounded-full bg-text/10",
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
      },
    )
  },
  J3fE(e, t, a) {
    var i = a("QosV"),
      n = a("zd8w"),
      r = a("hZax"),
      s = a("UR81")
    function l(e) {
      let { account_user_role: t, plan_type: a } = e
      return (0, s.Hw)(a) || "free_workspace" === a || ("k12" === a && ("account-owner" === t || "account-admin" === t))
    }
    function o(e, t, a) {
      if (
        t?.structure?.toLowerCase() !== "workspace" ||
        t.is_deactivated ||
        t.is_fedramp_compliant_workspace ||
        !1 === t.can_access_with_session ||
        ("standard-user" !== t.account_user_role && "account-admin" !== t.account_user_role)
      )
        return !1
      let i = t.plan_type
      return (
        ((0, s.Hw)(i) || "free_workspace" === i) && (0, r.XM)(e, "1911551839", a).get("show_invite_link_sharing", !1)
      )
    }
    let _ = "1294048895"
    a.d(
      t,
      {},
      {
        Ck: function (
          e,
          {
            auth: t,
            sidebarParameter: a,
            isRenderingOnClient: i,
            isStatsigLoading: n,
            statsigClient: s,
            statsigWorkspaceId: _,
          },
        ) {
          var d, u, c
          let E
          return (
            i &&
            "chatgpt" === t.authMethod &&
            e?.id === t.accountId &&
            e.structure?.toLowerCase() === "workspace" &&
            !n &&
            _ === t.accountId &&
            (l(e) || (null == a && o(s, e, { disableExposureLog: !1 }))) &&
            ((d = s),
            (u = e),
            (c = a ?? "dropdown_row_enabled"),
            (E = (0, r.XM)(d, "1900043180")).get(c, !1) &&
              E.get("account-owner" === u.account_user_role ? "owner_enabled" : "member_enabled", !0))
          )
        },
        WV: function (e) {
          return "CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_PROFILE_MENU" === e
            ? "profile_menu"
            : "CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_SIDEBAR_FOOTER" === e
              ? "sidebar_footer"
              : void 0
        },
        nU: function (e, t) {
          let a,
            s,
            l = (0, i.c)(7),
            { getLayer: o } = (0, r.cn)()
          ;(l[0] !== t || l[1] !== o
            ? ((a = () => {
                t && o(_).get("enabled", !1)
              }),
              (l[0] = t),
              (l[1] = o),
              (l[2] = a))
            : (a = l[2]),
            l[3] !== t || l[4] !== o || l[5] !== e
              ? ((s = [t, o, e]), (l[3] = t), (l[4] = o), (l[5] = e), (l[6] = s))
              : (s = l[6]),
            (0, n.useEffect)(a, s))
        },
        ok: o,
        p9: function (e, t) {
          let a,
            n,
            l,
            o = (0, i.c)(10),
            { client: d, getLayer: u, isLoading: c } = (0, r.cn)()
          o[0] !== d || o[1] !== u || o[2] !== c || o[3] !== t || o[4] !== e
            ? ((a =
                !c && (0, s.Hw)(t) && d.getContext().user.customIDs?.workspace_id === e
                  ? u(_, { disableExposureLog: !0 })
                  : void 0),
              (n = a?.get("enabled", !1)),
              (o[0] = d),
              (o[1] = u),
              (o[2] = c),
              (o[3] = t),
              (o[4] = e),
              (o[5] = a),
              (o[6] = n))
            : ((a = o[5]), (n = o[6]))
          let E = !0 === n,
            T = a?.__evaluation,
            I =
              E || (!!T?.allocated_experiment_name && T?.is_user_in_experiment !== !1 && T?.is_experiment_active !== !1)
          return (
            o[7] !== I || o[8] !== E
              ? ((l = { enrolled: I, treatment: E }), (o[7] = I), (o[8] = E), (o[9] = l))
              : (l = o[9]),
            l
          )
        },
        vW: l,
      },
    )
  },
  X5ve(e, t, a) {
    a.d(t, { U: () => eg, j: () => el })
    var i = a("ABep"),
      n = a("QosV"),
      r = a("NwSQ"),
      s = a("E2yB"),
      l = a("LA5s"),
      o = a("XyTt"),
      _ = a("slpy")
    let d = (0, a("ESTr").a)({
      name: "document-badge-plus-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 3.75, y: 2.75, width: 17.798828, height: 20.277344 },
        visualBounds: { x: 3.75, y: 2.75, width: 17.798828, height: 20.277344 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.75, y: 2.75, width: 17.798828, height: 20.277344 },
        center: { x: 12.649414, y: 12.888672 },
        insets: { top: 2.75, right: 2.451172, bottom: 0.972656, left: 3.75 },
        anchors: {
          frame: { x: 12, y: 12 },
          ink: { x: 12.649414, y: 12.888672 },
          foreground: { x: 12.649414, y: 12.888672 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M17.7988 15.5273C18.213 15.5273 18.5488 15.8631 18.5488 16.2773V18.5273H20.7988C21.213 18.5273 21.5488 18.8631 21.5488 19.2773C21.5486 19.6913 21.2129 20.0273 20.7988 20.0273H18.5488V22.2773C18.5486 22.6913 18.2129 23.0273 17.7988 23.0273C17.3848 23.0273 17.0491 22.6913 17.0488 22.2773V20.0273H14.7988C14.3848 20.0273 14.0491 19.6913 14.0488 19.2773C14.0488 18.8631 14.3846 18.5273 14.7988 18.5273H17.0488V16.2773C17.0488 15.8631 17.3846 15.5273 17.7988 15.5273Z" fill="currentColor"/> <path d="M14.2578 2.75C15.2522 2.75012 16.206 3.14548 16.9092 3.84863L19.1514 6.09082C19.8545 6.79397 20.2499 7.74779 20.25 8.74219V12C20.25 12.4142 19.9142 12.75 19.5 12.75C19.0858 12.75 18.75 12.4142 18.75 12V10.25H16C14.4812 10.25 13.25 9.01878 13.25 7.5V4.25H7.5C6.25736 4.25 5.25 5.25736 5.25 6.5V17.5C5.25 18.7426 6.25736 19.75 7.5 19.75H10.5C10.9142 19.75 11.25 20.0858 11.25 20.5C11.25 20.9142 10.9142 21.25 10.5 21.25H7.5C5.42893 21.25 3.75 19.5711 3.75 17.5V6.5C3.75 4.42893 5.42893 2.75 7.5 2.75H14.2578ZM14.75 7.5C14.75 8.19036 15.3096 8.75 16 8.75H18.75V8.74219C18.7499 8.14561 18.5127 7.57322 18.0908 7.15137L15.8486 4.90918C15.5449 4.60544 15.1627 4.39936 14.75 4.30664V7.5Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var u = a("aHOQ"),
      c = a("T0Rc"),
      E = a("irkb"),
      T = a("qmMi"),
      I = a("DBCl"),
      A = a("zd8w"),
      m = a("Wf1j"),
      C = a("oyxz"),
      p = a("Qgfj"),
      P = a("Ywss"),
      N = a("SPnB"),
      f = a("UOa8"),
      O = a("tvcH"),
      S = a("Kwur"),
      g = a("aTcy"),
      h = a("MM0V"),
      R = a("Sm6l"),
      v = a("bqtn"),
      b = a("Ot7V"),
      y = a("HOLv"),
      x = a("bVeK"),
      w = a("Bbed"),
      L = a("RNul"),
      W = a("zLIa"),
      K = a("SGsN"),
      M = a("smwl"),
      D = a("DAA7"),
      H = a("OWtl"),
      V = a("hZax"),
      G = a("eShZ"),
      U = a("uwX5"),
      j = a("khp7"),
      k = a("J3fE"),
      Y = a("bia9")
    function F(e, t) {
      return ("prolite" === e && (t.includeProlite || t.preserveProlite)) ||
        ("usage_based" === e && t.includeUsageBased)
        ? e
        : "default"
    }
    function B({ rows: e, defaultInviteSeatType: t, availablePaidSeatCounts: a }) {
      if (null == a) return [...e]
      let i = "prolite" === t ? "prolite" : "default",
        n = [i, "default" === i ? "prolite" : "default"],
        r = { default: 0, prolite: 0 }
      return e.map((e) => {
        let t = "default" === e.seatType || "prolite" === e.seatType ? e.seatType : null,
          i = null != t && r[t] < a[t] ? t : n.find((e) => r[e] < a[e])
        return null == i ? e : ((r[i] += 1), e.seatType === i ? e : { ...e, seatType: i })
      })
    }
    var q = a("eH3k"),
      z = a("EOzk"),
      Q = a("KxAz"),
      Z = a("IPpC")
    function $(e) {
      let t,
        a,
        r,
        s,
        l,
        o,
        _,
        d,
        u = (0, n.c)(28),
        { onSuggest: c, onSuggestions: E, onPendingChange: T, suggestedCount: I, disabled: A } = e,
        p = (0, m.A)(),
        { status: P, suggest: N, cancel: f } = (0, Z.i)(c, E, T),
        O = "loading" === P,
        S = "ready" === P && I > 0
      u[0] !== p || u[1] !== O
        ? ((t = O
            ? p.formatMessage({ id: "workspaceInvite.suggestions.manual", defaultMessage: "Enter emails manually" })
            : void 0),
          (u[0] = p),
          (u[1] = O),
          (u[2] = t))
        : (t = u[2])
      let g = t
      u[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, i.jsx)(C.A, {
            id: "workspaceInvite.suggestions.historyDisclosure",
            defaultMessage: "We\u2019ll use your chat history and plugins to suggest people you should invite.",
          })),
          (u[3] = a))
        : (a = u[3])
      let h = a
      if ("error" === P) {
        let e
        ;(u[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(C.A, {
              id: "workspaceInvite.suggestions.error",
              defaultMessage: "Couldn't load suggestions. Try again or enter emails manually.",
            })),
            (u[4] = e))
          : (e = u[4]),
          (h = e))
      } else if ("empty" === P) {
        let e
        ;(u[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(C.A, {
              id: "workspaceInvite.suggestions.empty",
              defaultMessage: "No suggestions found. You can enter emails manually.",
            })),
            (u[5] = e))
          : (e = u[5]),
          (h = e))
      }
      let v = S || void 0
      return (
        u[6] !== f || u[7] !== g || u[8] !== A || u[9] !== O || u[10] !== P || u[11] !== N
          ? ((r =
              "empty" !== P &&
              (0, i.jsxs)(R.$, {
                type: "button",
                color: O ? "outlineActive" : "outlineSurface",
                radius: "full",
                size: "actionSm",
                className: "min-w-36",
                disabled: A && !O,
                "aria-label": g,
                title: g,
                onClick: () => (O ? f() : void N()),
                children: [
                  O
                    ? (0, i.jsx)(L.y, { as: "span", className: "size-4" })
                    : (0, i.jsx)(x.ZgQ, { "aria-hidden": "true" }),
                  O
                    ? (0, i.jsx)(C.A, {
                        id: "workspaceInvite.suggestions.loading",
                        defaultMessage: "Finding teammates\u2026",
                      })
                    : (0, i.jsx)(C.A, {
                        id: "workspaceInvite.suggestions.action",
                        defaultMessage: "Suggest teammates",
                      }),
                ],
              })),
            (u[6] = f),
            (u[7] = g),
            (u[8] = A),
            (u[9] = O),
            (u[10] = P),
            (u[11] = N),
            (u[12] = r))
          : (r = u[12]),
        u[13] !== h
          ? ((s = (0, i.jsx)("p", {
              role: "status",
              className: "max-w-sm text-sm text-balance text-secondary",
              children: h,
            })),
            (u[13] = h),
            (u[14] = s))
          : (s = u[14]),
        u[15] !== r || u[16] !== s
          ? ((l = (0, i.jsx)("div", {
              className: "min-h-0 overflow-hidden",
              children: (0, i.jsxs)("div", {
                className: "flex w-full flex-col items-center gap-2 rounded-2xl border border-default p-4 text-center",
                children: [r, s],
              }),
            })),
            (u[15] = r),
            (u[16] = s),
            (u[17] = l))
          : (l = u[17]),
        u[18] !== S || u[19] !== v || u[20] !== l
          ? ((o = (0, i.jsx)("div", { className: "cardSlot-w097Ph", "data-collapsed": v, inert: S, children: l })),
            (u[18] = S),
            (u[19] = v),
            (u[20] = l),
            (u[21] = o))
          : (o = u[21]),
        u[22] !== S || u[23] !== I
          ? ((_ =
              S &&
              (0, i.jsx)("span", {
                role: "status",
                className: "sr-only",
                children: (0, i.jsx)(C.A, {
                  id: "workspaceInvite.suggestions.readyCount",
                  defaultMessage: "{count, plural, one {# suggestion ready} other {# suggestions ready}}",
                  values: { count: I },
                }),
              })),
            (u[22] = S),
            (u[23] = I),
            (u[24] = _))
          : (_ = u[24]),
        u[25] !== o || u[26] !== _
          ? ((d = (0, i.jsxs)(i.Fragment, { children: [o, _] })), (u[25] = o), (u[26] = _), (u[27] = d))
          : (d = u[27]),
        d
      )
    }
    var J = a("zPtR"),
      X = a("MVHH"),
      ee = a("M6da"),
      et = a("yGJW")
    let ea = {
      email_removed: {
        action: ee.md.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_EMAIL_REMOVED,
        legacyStatsigEventName: "Account Pay: Collaborator Email Removed",
      },
      emails_added: {
        action: ee.md.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_EMAILS_ADDED,
        legacyStatsigEventName: "Account Pay: Collaborator Emails Added",
      },
      send_clicked: {
        action: ee.md.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_SEND_CLICKED,
        legacyStatsigEventName: "Account Pay: Add Collaborators Modal Clicked",
      },
      skip_clicked: {
        action: ee.md.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_SKIP_CLICKED,
        legacyStatsigEventName: "Account Pay: Add Collaborators Modal Clicked",
      },
      upload_clicked: {
        action: ee.md.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_UPLOAD_CLICKED,
        legacyStatsigEventName: "Account Pay: Add Collaborators Upload Clicked",
      },
    }
    function ei(e) {
      let t = null == e.entitlement.expires_at ? void 0 : Date.parse(e.entitlement.expires_at)
      return {
        billingPeriod: e.entitlement.billing_period ?? void 0,
        hasPaidSubscription: e.entitlement.has_active_subscription ?? !1,
        subscriptionPlan: e.entitlement.subscription_plan,
        subscriptionExpiresAtTs: null != t && Number.isFinite(t) ? (0, J.N3)(t) : void 0,
        wasPaidCustomer: e.account.has_previously_paid_subscription ?? !1,
      }
    }
    var en = a("DrOk")
    let er = (0, w._)(o.kP, { fallback: () => null }),
      es = {
        member: "standard-user",
        admin: "account-admin",
        owner: "account-owner",
        analytics_viewer: "analytics-viewer",
      }
    function el(e) {
      let t,
        a = (0, n.c)(2)
      return (a[0] !== e ? ((t = (0, i.jsx)(eo, { ...e }, e.workspaceId)), (a[0] = e), (a[1] = t)) : (t = a[1]), t)
    }
    function eo(e) {
      let t,
        a,
        r,
        s,
        l,
        o,
        _,
        d,
        u,
        E,
        m,
        C,
        p,
        P,
        O,
        g,
        h,
        R,
        v,
        b,
        y,
        x,
        w,
        W,
        K,
        D,
        V,
        G = (0, n.c)(90),
        j = (0, T.gh)(H.u)
      G[0] !== e.surface || G[1] !== e.workspace || G[2] !== j
        ? ((t = () =>
            (function (e, t, a) {
              let i,
                n = "CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_ADMIN_INVITE_MODAL" === a,
                r = t,
                s = t.account.account_id,
                l = !1,
                o = !1,
                _ = 0,
                d = !1,
                u = !1,
                c = e.get(N.PO),
                E = c.authenticatedUserId ?? c.userId,
                T = () => {
                  let t = e.get(N.PO)
                  return t.authenticatedAccountId === s && (t.authenticatedUserId ?? t.userId) === E
                }
              function I() {
                let t = i?.seat_capacity.find((e) => "default" === e.type)?.available,
                  a = i?.seat_capacity.find((e) => "prolite" === e.type)?.available,
                  n = r.account.account_user_role,
                  s = ["team", "self_serve_business_prolite", "self_serve_business_usage_based"].includes(
                    r.account.plan_type ?? "",
                  )
                l &&
                  !o &&
                  !(_ > 0) &&
                  !d &&
                  !u &&
                  T() &&
                  s &&
                  r.entitlement.has_active_subscription &&
                  r.entitlement.trial?.is_trialing !== !0 &&
                  (!((t ?? 0) <= 0) || !((a ?? 0) <= 0)) &&
                  ((o = !0),
                  (0, et.yy)(e, ee.TC, {
                    actorRole: (function (e) {
                      switch (e) {
                        case "account-owner":
                          return "CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_OWNER"
                        case "account-admin":
                          return "CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_ADMIN"
                        case "analytics-viewer":
                          return "CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_ANALYTICS_VIEWER"
                        default:
                          return "CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_MEMBER"
                      }
                    })(n),
                    availableDefaultSeatCount: null == t ? void 0 : (0, J.PZ)(t),
                    availableProliteSeatCount: null == a ? void 0 : (0, J.PZ)(a),
                  }))
              }
              return {
                interaction(t) {
                  n &&
                    T() &&
                    (0, et.yy)(e, ee.we, {
                      ...ea[t.action],
                      addedEmailCount: "emails_added" === t.action ? (0, J.At)(t.count) : void 0,
                      emailInputSource: "emails_added" === t.action ? t.source : void 0,
                      subscriptionSnapshot: ei(r),
                    })
                },
                domainCompletionAccepted() {
                  T() &&
                    (0, et.yy)(e, ee.we, {
                      action: ee.md.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_EMAIL_DOMAIN_COMPLETION_ACCEPTED,
                    })
                },
                domainMismatch() {
                  n &&
                    T() &&
                    (0, et.yy)(e, ee.we, {
                      action: ee.md.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_DOMAIN_MISMATCH,
                      legacyStatsigEventName: "chatgpt_business_workspace_invite_domain_mismatch",
                    })
                },
                updateContext(e, t) {
                  !l && T() && e.account.account_id === s && ((r = e), (i = t))
                },
                cancel() {
                  T() && (0, et.yy)(e, ee.LY, { dropoffType: "CHATGPT_WORKSPACE_INVITE_FLOW_DROPOFF_TYPE_CANCEL" })
                },
                exit() {
                  ;((l = !0), I())
                },
                start(t) {
                  let i
                  _ += 1
                  let s = crypto.randomUUID(),
                    l = t.filter((e) => "usage_based" !== e.seatType).length,
                    o = t.length - l
                  "account-owner" === r.account.account_user_role
                    ? (i = "CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTOR_ROLE_WORKSPACE_OWNER")
                    : "account-admin" === r.account.account_user_role &&
                      (i = "CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTOR_ROLE_WORKSPACE_ADMIN")
                  let c = {
                    flowId: s,
                    actionType: "CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_TYPE_SEND_INVITATIONS",
                    surface: a,
                    actorRole: i,
                    affectedTargetCount: (0, J.PZ)(t.length),
                    targetScope:
                      1 === t.length
                        ? "CHATGPT_WEB_BUSINESS_SEAT_FLOW_TARGET_SCOPE_INDIVIDUAL"
                        : "CHATGPT_WEB_BUSINESS_SEAT_FLOW_TARGET_SCOPE_BULK",
                    requestedDefaultSeatCount: (0, J.PZ)(t.filter((e) => "default" === e.seatType).length),
                    requestedProliteSeatCount: (0, J.PZ)(t.filter((e) => "prolite" === e.seatType).length),
                    requestedUsageBasedSeatCount: (0, J.PZ)(o),
                  }
                  ;(T() &&
                    (0, et.yy)(e, X.D7, {
                      ...c,
                      stepType: "CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_INITIATED",
                    }),
                    T() &&
                      (0, et.yy)(e, X.D7, {
                        ...c,
                        stepType: "CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_CAPACITY_EVALUATED",
                        capacityResult: "CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_NOT_REQUIRED",
                        paymentRequired: !1,
                      }))
                  let E = !1
                  return {
                    flowId: s,
                    finish(a, i, s = 0, A) {
                      E ||
                        ((E = !0),
                        (_ -= 1),
                        (d = d || a + s > 0),
                        (u = u || !i),
                        T() &&
                          ((0, et.yy)(e, X.D7, {
                            ...c,
                            stepType:
                              a + s > 0
                                ? "CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_SUCCEEDED"
                                : "CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_FAILED",
                            actionFailureType:
                              a + s > 0 ? void 0 : "CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_FAILURE_TYPE_MUTATION_FAILED",
                            paymentRequired: A,
                            successfulTargetCount: (0, J.PZ)(a),
                            failedTargetCount: (0, J.PZ)(Math.max(0, t.length - a - s)),
                          }),
                          (0, et.yy)(e, ee.we, {
                            action: ee.md.CHATGPT_WORKSPACE_INVITE_ACTION_TYPE_BATCH_RESULT_OBSERVED,
                            metricValue: (0, J.At)(t.length),
                            successfulInviteCount: (0, J.At)(a),
                            fixedPriceSeatInviteCount: (0, J.At)(l),
                            usageBasedSeatInviteCount: (0, J.At)(o),
                            subscriptionSnapshot: n ? ei(r) : void 0,
                            legacyStatsigEventName: n ? "chatgpt_invite_users_to_workspace" : void 0,
                          })),
                        I())
                    },
                  }
                },
              }
            })(j, e.workspace, e.surface)),
          (G[0] = e.surface),
          (G[1] = e.workspace),
          (G[2] = j),
          (G[3] = t))
        : (t = G[3])
      let [k] = (0, A.useState)(t),
        Y = (0, A.useRef)(!1)
      ;(G[4] !== k
        ? ((a = () => {
            Y.current = !0
            let e = (e) => {
              e.persisted || k.exit()
            }
            return (
              window.addEventListener("pagehide", e),
              () => {
                ;((Y.current = !1),
                  window.removeEventListener("pagehide", e),
                  queueMicrotask(() => {
                    Y.current || k.exit()
                  }))
              }
            )
          }),
          (r = [k]),
          (G[4] = k),
          (G[5] = a),
          (G[6] = r))
        : ((a = G[5]), (r = G[6])),
        (0, A.useEffect)(a, r))
      let F = e.workspaceId
      G[7] !== F ? ((s = { "ChatGPT-Account-ID": F, [I.zBc]: F }), (G[7] = F), (G[8] = s)) : (s = G[8])
      let B = s,
        { userId: q } = (0, f.As)()
      ;(G[9] !== F ? ((l = ["workspace-settings", F]), (G[9] = F), (G[10] = l)) : (l = G[10]),
        G[11] !== B || G[12] !== F
          ? ((o = (e) => {
              let { signal: t } = e
              return S.Request.safeGet("/accounts/{account_id}/settings", {
                additionalHeaders: B,
                signal: t,
                parameters: { path: { account_id: F } },
              })
            }),
            (G[11] = B),
            (G[12] = F),
            (G[13] = o))
          : (o = G[13]),
        G[14] !== l || G[15] !== o
          ? ((_ = { queryKey: l, staleTime: 0, queryFn: o }), (G[14] = l), (G[15] = o), (G[16] = _))
          : (_ = G[16]))
      let z = (0, c.I)(_),
        { data: Q, isLoading: Z } = z
      ;(G[17] !== q || G[18] !== F
        ? ((d = ["business-onboarding-invite", F, "identity", q]), (G[17] = q), (G[18] = F), (G[19] = d))
        : (d = G[19]),
        G[20] !== B || G[21] !== F
          ? ((u = (e) => {
              let { signal: t } = e
              return S.Request.safeGet("/accounts/{account_id}/identity", {
                additionalHeaders: B,
                signal: t,
                parameters: { path: { account_id: F } },
              })
            }),
            (G[20] = B),
            (G[21] = F),
            (G[22] = u))
          : (u = G[22]),
        G[23] !== d || G[24] !== u
          ? ((E = { queryKey: d, staleTime: 0, queryFn: u }), (G[23] = d), (G[24] = u), (G[25] = E))
          : (E = G[25]))
      let $ = (0, c.I)(E)
      ;(G[26] !== F ? ((m = ["business-onboarding-invite", F, "promo"]), (G[26] = F), (G[27] = m)) : (m = G[27]),
        G[28] !== B || G[29] !== F
          ? ((C = (e) => {
              let { signal: t } = e
              return S.Request.safeGet("/promo_campaign/check_coupon", {
                additionalHeaders: B,
                signal: t,
                parameters: { query: { coupon: "team-1-month-free", workspace_id: F } },
              })
            }),
            (G[28] = B),
            (G[29] = F),
            (G[30] = C))
          : (C = G[30]),
        G[31] !== m || G[32] !== C
          ? ((p = { queryKey: m, staleTime: 0, queryFn: C }), (G[31] = m), (G[32] = C), (G[33] = p))
          : (p = G[33]))
      let { data: en } = (0, c.I)(p)
      G[34] !== F ? ((P = (0, M.Ie)(F)), (G[34] = F), (G[35] = P)) : (P = G[35])
      let { data: er } = (0, c.I)(P)
      if (G[36] !== en) {
        let e
        ;((e = en?.redemption),
          (O =
            en?.coupon === "team-1-month-free" &&
            !!e?.redeemed &&
            !!e.redeemed_by_workspace &&
            null != e.expires_at &&
            Date.now() < new Date(e.expires_at).getTime()),
          (G[36] = en),
          (G[37] = O))
      } else O = G[37]
      let es = O,
        el = null == e.onSubmissionStarted || es
      ;(G[38] !== F ? ((g = ["business-onboarding-invite", F, "invites"]), (G[38] = F), (G[39] = g)) : (g = G[39]),
        G[40] !== B || G[41] !== F
          ? ((h = (e) => {
              let { signal: t } = e
              return S.Request.safeGet("/accounts/{account_id}/invites", {
                additionalHeaders: B,
                signal: t,
                parameters: { path: { account_id: F }, query: { offset: 0, limit: 25, query: "" } },
              })
            }),
            (G[40] = B),
            (G[41] = F),
            (G[42] = h))
          : (h = G[42]),
        G[43] !== el || G[44] !== g || G[45] !== h
          ? ((R = { enabled: el, queryKey: g, staleTime: 0, queryFn: h }),
            (G[43] = el),
            (G[44] = g),
            (G[45] = h),
            (G[46] = R))
          : (R = G[46]))
      let { data: eo } = (0, c.I)(R)
      ;(G[47] !== F ? ((v = ["business-onboarding-invite", F, "users"]), (G[47] = F), (G[48] = v)) : (v = G[48]),
        G[49] !== B || G[50] !== F
          ? ((b = async (e) => {
              let { signal: t } = e,
                a = await S.Request.safeGet("/accounts/{account_id}/users", {
                  additionalHeaders: B,
                  signal: t,
                  parameters: { path: { account_id: F }, query: { offset: 0, limit: 100, query: "" } },
                })
              if (null == a.total) throw Error("Expected a counted workspace users response")
              return a
            }),
            (G[49] = B),
            (G[50] = F),
            (G[51] = b))
          : (b = G[51]),
        G[52] !== es || G[53] !== v || G[54] !== b
          ? ((y = { queryKey: v, enabled: es, staleTime: 0, queryFn: b }),
            (G[52] = es),
            (G[53] = v),
            (G[54] = b),
            (G[55] = y))
          : (y = G[55]))
      let { data: ed } = (0, c.I)(y)
      ;(G[56] !== e.workspace || G[57] !== Z || G[58] !== er || G[59] !== k
        ? ((x = () => {
            Z || k.updateContext(e.workspace, er)
          }),
          (w = [k, e.workspace, er, Z]),
          (G[56] = e.workspace),
          (G[57] = Z),
          (G[58] = er),
          (G[59] = k),
          (G[60] = x),
          (G[61] = w))
        : ((x = G[60]), (w = G[61])),
        (0, A.useEffect)(x, w),
        G[62] !== e || G[63] !== Z || G[64] !== k
          ? ((W = () => {
              ;(Z || k.interaction({ action: "skip_clicked" }), k.cancel(), e.onCancel())
            }),
            (G[62] = e),
            (G[63] = Z),
            (G[64] = k),
            (G[65] = W))
          : (W = G[65]))
      let eu = W
      if (Z) {
        let t,
          a,
          n = e.layout
        return (
          G[66] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)("div", {
                className: "flex min-h-48 items-center justify-center",
                children: (0, i.jsx)(L.y, { className: "size-6 text-tertiary" }),
              })),
              (G[66] = t))
            : (t = G[66]),
          G[67] !== n || G[68] !== eu || G[69] !== e.header || G[70] !== e.profileDialog
            ? ((a = (0, i.jsx)(n, {
                header: e.header,
                profileDialog: e.profileDialog,
                content: t,
                busy: !1,
                canSubmit: !1,
                onSubmit: void 0,
                onCancel: eu,
              })),
              (G[67] = n),
              (G[68] = eu),
              (G[69] = e.header),
              (G[70] = e.profileDialog),
              (G[71] = a))
            : (a = G[71]),
          a
        )
      }
      let ec = $.data
      return (
        G[72] !== $ || G[73] !== z || G[74] !== F
          ? ((K = (0, U.n)(F, z, $)), (G[72] = $), (G[73] = z), (G[74] = F), (G[75] = K))
          : (K = G[75]),
        G[76] !== es || G[77] !== $.data || G[78] !== eo || G[79] !== Q || G[80] !== er || G[81] !== K || G[82] !== ed
          ? ((D = {
              settings: Q,
              identity: ec,
              completionPolicy: K,
              subscription: er,
              invites: eo,
              users: ed,
              hasTrial: es,
            }),
            (G[76] = es),
            (G[77] = $.data),
            (G[78] = eo),
            (G[79] = Q),
            (G[80] = er),
            (G[81] = K),
            (G[82] = ed),
            (G[83] = D))
          : (D = G[83]),
        G[84] !== eu || G[85] !== e || G[86] !== D || G[87] !== k || G[88] !== F
          ? ((V = (0, i.jsx)(e_, { ...e, onCancel: eu, telemetry: k, workspaceId: F, data: D })),
            (G[84] = eu),
            (G[85] = e),
            (G[86] = D),
            (G[87] = k),
            (G[88] = F),
            (G[89] = V))
          : (V = G[89]),
        V
      )
    }
    function e_(e) {
      let t,
        a,
        l,
        o,
        c,
        I,
        p,
        S,
        w,
        L,
        W,
        U,
        j,
        Z,
        J,
        X,
        ee,
        et,
        ea,
        ei,
        el,
        eo,
        e_,
        eg,
        eR,
        ev,
        eb,
        ey = (0, n.c)(124),
        {
          fixedRole: ex,
          ownerSetupInvite: ew,
          onSuggest: eL,
          workspace: eW,
          workspaceId: eK,
          emailAttribution: eM,
          maxInvites: eD,
          availablePaidSeatCounts: eH,
          billingLinkOpenTarget: eV,
          allowAdminConsoleBillingRedirect: eG,
          onCancel: eU,
          onSuccess: ej,
          onSubmissionStarted: ek,
          onSubmissionSettled: eY,
          emailFormVisible: eF,
          layout: eB,
          profileDialog: eq,
          header: ez,
          data: eQ,
          telemetry: eZ,
        } = e,
        e$ = void 0 === eF || eF,
        eJ = void 0 !== eq && eq,
        eX = (0, T.gh)(H.u),
        e0 = (0, m.A)(),
        e1 = (0, E.jE)(),
        { accountId: e2, userId: e5, email: e7 } = (0, f.As)(),
        e4 = (0, k.p9)(eK, eW.account.plan_type),
        e8 = e$ && e4.enrolled ? e5 : null
      ey[0] !== e2 || ey[1] !== e8
        ? ((t = { accountId: e2, userId: e8 }), (ey[0] = e2), (ey[1] = e8), (ey[2] = t))
        : (t = ey[2])
      let { data: e3 } = (0, T._U)(O.km, t),
        [e6] = (0, P.ok)()
      ey[3] !== e6 ? ((a = (0, r.Gm)(g.E_, e6)), (ey[3] = e6), (ey[4] = a)) : (a = ey[4])
      let e9 = a,
        te = (0, V.Fj)("3528236309"),
        tt = "account-owner" === eW.account.account_user_role,
        ta = tt || "account-admin" === eW.account.account_user_role,
        ti = "free_workspace" === eW.account.plan_type
      ey[5] !== e7 || ey[6] !== ti
        ? ((l = ti && null != e7 && s.WL.test(e7.trim()) ? e7.trim().split("@")[1]?.toLowerCase() : void 0),
          (ey[5] = e7),
          (ey[6] = ti),
          (ey[7] = l))
        : (l = ey[7])
      let tn = l,
        tr = null != ex || (!eJ && !ti && tt),
        ts = ex ?? (!eJ && ti && tt ? "owner" : "member"),
        tl = !0 === eW.account.is_usage_based_seat_enabled,
        to = tl && null == eH,
        t_ = !!eW.entitlement.has_active_subscription && !!eW.account.subscription_seat_pools_enabled,
        td = tt && (tl || t_),
        tu = eQ.settings?.default_seat_type
      ey[8] !== eH || ey[9] !== t_ || ey[10] !== tu || ey[11] !== tl
        ? ((o = (function ({
            defaultInviteSeatTypeOverride: e,
            workspaceDefaultSeatType: t,
            isUsageBasedSeatEnabled: a,
            isPremiumSeatEnabled: i = !1,
            availablePaidSeatCounts: n,
          }) {
            let r =
              a || i || null != n
                ? F(e ?? t, { includeUsageBased: a, includeProlite: i, preserveProlite: null != n })
                : "default"
            if (null == n) return r
            let s = "prolite" === r ? "prolite" : "default",
              l = "default" === s ? "prolite" : "default"
            return n[s] > 0 || n[l] <= 0 ? s : l
          })({
            workspaceDefaultSeatType: tu,
            isUsageBasedSeatEnabled: tl,
            isPremiumSeatEnabled: t_,
            availablePaidSeatCounts: eH,
          })),
          (ey[8] = eH),
          (ey[9] = t_),
          (ey[10] = tu),
          (ey[11] = tl),
          (ey[12] = o))
        : (o = ey[12])
      let tc = o
      ey[13] !== te || ey[14] !== tt
        ? ((c = tt
            ? ["member", ...(te.get("can_see_analytics_viewer_role", !1) ? ["analytics_viewer"] : []), "admin", "owner"]
            : ["member"]),
          (ey[13] = te),
          (ey[14] = tt),
          (ey[15] = c))
        : (c = ey[15])
      let tE = c,
        tT = null == ex || (tE.includes(ex) && (!ti || ex === (tt ? "owner" : "member")))
      ey[16] !== ts || ey[17] !== tc || ey[18] !== eD || ey[19] !== eJ
        ? ((I = () =>
            Array.from({ length: Math.min(eJ ? 3 : 1, eD ?? 1 / 0) }, () => ({
              id: crypto.randomUUID(),
              email: "",
              role: ts,
              seatType: tc,
            }))),
          (ey[16] = ts),
          (ey[17] = tc),
          (ey[18] = eD),
          (ey[19] = eJ),
          (ey[20] = I))
        : (I = ey[20])
      let [tI, tA] = (0, A.useState)(I),
        [tm, tC] = (0, A.useState)(!1),
        [tp, tP] = (0, A.useState)(""),
        [tN, tf] = (0, A.useState)(!1),
        [tO, tS] = (0, A.useState)(!1),
        [tg, th] = (0, A.useState)(null),
        [tR, tv] = (0, A.useState)(!1),
        tb = (0, A.useRef)(null),
        ty = (0, A.useRef)(!0),
        tx = (0, A.useRef)(!1)
      ;(ey[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = () => (
            (ty.current = !0),
            () => {
              ty.current = !1
            }
          )),
          (S = []),
          (ey[21] = p),
          (ey[22] = S))
        : ((p = ey[21]), (S = ey[22])),
        (0, A.useEffect)(p, S))
      let [tw, tL] = (0, A.useState)(!1),
        [tW, tK] = (0, A.useState)(!1),
        tM = tN || tO || tw,
        tD = tI.filter(ef),
        tH = (eQ.identity?.workspace_verified_domains ?? eQ.identity?.domains)?.filter(eN),
        tV = e3?.email ?? e7,
        tG = e3?.email_domain_type
      ey[23] !== eQ.completionPolicy || ey[24] !== tV || ey[25] !== tG
        ? ((w = (0, s.ob)(tV, tG, eQ.completionPolicy)),
          (ey[23] = eQ.completionPolicy),
          (ey[24] = tV),
          (ey[25] = tG),
          (ey[26] = w))
        : (w = ey[26])
      let tU = w
      ;(0, k.nU)(eK, e$ && e4.enrolled && null != tU)
      let tj = e4.treatment ? tU : void 0,
        tk =
          eQ.identity?.allow_external_domain_invites === !1 && null != tH && tH.length > 0
            ? tD
                .filter((e) => !tH.some((t) => e.email.trim().toLowerCase().endsWith(`@${t.hostname.toLowerCase()}`)))
                .map(eP)
            : []
      ey[27] !== eQ.hasTrial ||
      ey[28] !== eQ.invites?.items ||
      ey[29] !== eQ.invites?.items.flatMap ||
      ey[30] !== eQ.subscription ||
      ey[31] !== eQ.users?.items ||
      ey[32] !== eQ.users?.items.flatMap ||
      ey[33] !== tI
        ? ((W = eQ.invites?.items.flatMap(ep) ?? []),
          (L = eQ.users?.items.flatMap(eC) ?? []),
          (U =
            eQ.hasTrial &&
            (function (e, t, a, i) {
              if (null == t || t.seats_entitled > 10) return !1
              let n = new Set(a.map((e) => e.trim().toLowerCase())),
                r = new Set(e.map((e) => e.email.trim().toLowerCase()).filter((e) => e.length > 0 && !n.has(e)))
              return Math.max(0, t.seats_in_use) + i + r.size > 10
            })(tI, eQ.subscription, [...W, ...L], W.length)),
          (ey[27] = eQ.hasTrial),
          (ey[28] = eQ.invites?.items),
          (ey[29] = eQ.invites?.items.flatMap),
          (ey[30] = eQ.subscription),
          (ey[31] = eQ.users?.items),
          (ey[32] = eQ.users?.items.flatMap),
          (ey[33] = tI),
          (ey[34] = L),
          (ey[35] = W),
          (ey[36] = U))
        : ((L = ey[34]), (W = ey[35]), (U = ey[36]))
      let tY = U,
        tF = eG && ((tR && tt) || (tY && ta)) ? eK : null
      ey[37] !== e9 || ey[38] !== tF
        ? ((j = { legacyUrl: e9, accountId: tF }), (ey[37] = e9), (ey[38] = tF), (ey[39] = j))
        : (j = ey[39])
      let tB = (0, T._U)(D.MR, j),
        tq = tB ?? e9
      ey[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = { member: eh.member, admin: eh.admin, owner: eh.owner, analytics_viewer: eh.analyticsViewer }),
          (ey[40] = Z))
        : (Z = ey[40])
      let tz = Z,
        tQ = ["default", ...(t_ || tI.some(em) ? ["prolite"] : []), ...(to ? ["usage_based"] : [])],
        tZ = t_ ? eh.standard : eh.chatgpt
      ey[41] !== tZ
        ? ((J = { default: tZ, prolite: eh.premium, usage_based: eh.codex }), (ey[41] = tZ), (ey[42] = J))
        : (J = ey[42])
      let t$ = J
      ey[43] !== eH || ey[44] !== tc || ey[45] !== e0 || ey[46] !== eD || ey[47] !== eX
        ? ((X = function (e) {
            let t = (function (e, t) {
              if (null == t) return e
              let a = new Set()
              return e
                .filter((e) => {
                  let t = e.email.trim().toLowerCase()
                  return !a.has(t) && (a.add(t), !0)
                })
                .slice(0, t)
            })(e, eD)
            return (
              null != eD &&
                new Set(e.map(eA)).size > eD &&
                eX.get(K.Id).warning(e0.formatMessage(eh.inviteLimit, { maxInvites: eD })),
              tA(B({ rows: t, defaultInviteSeatType: tc, availablePaidSeatCounts: eH })),
              t
            )
          }),
          (ey[43] = eH),
          (ey[44] = tc),
          (ey[45] = e0),
          (ey[46] = eD),
          (ey[47] = eX),
          (ey[48] = X))
        : (X = ey[48])
      let tJ = X
      ey[49] !== tm || ey[50] !== ts || ey[51] !== tc || ey[52] !== eD || ey[53] !== eZ
        ? ((ee = function (e) {
            ;(tA((t) => {
              let a = t.filter((t) => t.id !== e)
              return tm || 0 !== a.length || 0 === eD
                ? a
                : [{ id: crypto.randomUUID(), email: "", role: ts, seatType: tc }]
            }),
              eZ.interaction({ action: "email_removed" }))
          }),
          (ey[49] = tm),
          (ey[50] = ts),
          (ey[51] = tc),
          (ey[52] = eD),
          (ey[53] = eZ),
          (ey[54] = ee))
        : (ee = ey[54])
      let tX = ee
      ey[55] !== ts || ey[56] !== tc || ey[57] !== eD || ey[58] !== tJ || ey[59] !== tI || ey[60] !== eZ
        ? ((et = function (e, t) {
            let a = e
                .split(/[\s,]+/)
                .map(eI)
                .filter(eT),
              i = (e) => (null == eD ? e : e.trim().toLowerCase()),
              n = new Set(tI.map((e) => i(e.email))),
              r = a
                .filter((e) => {
                  let t = i(e)
                  return !n.has(t) && (n.add(t), !0)
                })
                .map((e) => ({ id: crypto.randomUUID(), email: e, role: ts, seatType: tc }))
            ;(tJ([...tI, ...r]),
              tP(""),
              void 0 !== t &&
                t &&
                eZ.interaction({
                  action: "emails_added",
                  count: a.length,
                  source: "CHATGPT_WORKSPACE_INVITE_EMAIL_INPUT_SOURCE_MANUAL",
                }))
          }),
          (ey[55] = ts),
          (ey[56] = tc),
          (ey[57] = eD),
          (ey[58] = tJ),
          (ey[59] = tI),
          (ey[60] = eZ),
          (ey[61] = et))
        : (et = ey[61])
      let t0 = et
      ey[62] !== ts ||
      ey[63] !== tc ||
      ey[64] !== ex ||
      ey[65] !== e0 ||
      ey[66] !== tJ ||
      ey[67] !== tE ||
      ey[68] !== eX ||
      ey[69] !== eZ
        ? ((ea = async function (e) {
            if ("owner" !== ex && ty.current && !tx.current) {
              if (e.size > 0x1900000)
                return void eX
                  .get(K.Id)
                  .danger(e0.formatMessage(eh.fileTooLarge, { maxSize: "25MB" }), {
                    errorAnalytics: { toastId: "csv_upload_too_large" },
                  })
              if ("text/csv" !== e.type)
                return void eX
                  .get(K.Id)
                  .danger(e0.formatMessage(eh.fileType), { errorAnalytics: { toastId: "csv_upload" } })
              ;((tx.current = !0),
                tS(!0),
                th(null),
                await e
                  .text()
                  .then((e) => {
                    let t = (function (e, t, a, i) {
                      let n = [],
                        r = new Set()
                      for (let l of e.split(/\r?\n/)) {
                        let [e = "", o = "", _ = ""] = l.split(",").map((e) =>
                          e
                            .trim()
                            .replace(/^(["'])(.*)\1$/, "$2")
                            .trim(),
                        )
                        if (!s.WL.test(e) || r.has(e)) continue
                        r.add(e)
                        let d = o.toLowerCase().replace(/[- ]/g, "_"),
                          u = _.toLowerCase().replace(/[- ]/g, "_"),
                          c = i
                        ;("codex" === u || "usage_based" === u
                          ? (c = "usage_based")
                          : "premium" === u || "prolite" === u
                            ? (c = "prolite")
                            : ["chatgpt", "default", "standard"].includes(u) && (c = "default"),
                          n.push({ id: crypto.randomUUID(), email: e, role: t.find((e) => e === d) ?? a, seatType: c }))
                      }
                      return n
                    })(e, null == ex ? tE : [ex], ts, tc)
                    if (!ty.current) return
                    let a = tJ(t)
                    ;(tC(!0),
                      eZ.interaction({
                        action: "emails_added",
                        count: a.length,
                        source: "CHATGPT_WORKSPACE_INVITE_EMAIL_INPUT_SOURCE_BULK",
                      }))
                  })
                  .catch(() => {
                    ty.current && th(e0.formatMessage(eh.fileReadError))
                  })
                  .finally(() => {
                    ;((tx.current = !1), ty.current && tS(!1))
                  }))
            }
          }),
          (ey[62] = ts),
          (ey[63] = tc),
          (ey[64] = ex),
          (ey[65] = e0),
          (ey[66] = tJ),
          (ey[67] = tE),
          (ey[68] = eX),
          (ey[69] = eZ),
          (ey[70] = ea))
        : (ea = ey[70])
      let t1 = ea,
        t2 = async function () {
          if (
            !tT ||
            !ty.current ||
            eX.get(N.PO).authenticatedAccountId !== eK ||
            tx.current ||
            tN ||
            tO ||
            0 === tD.length ||
            tk.length > 0 ||
            tY
          )
            return
          ;((tx.current = !0), tf(!0), th(null), tv(!1))
          let e = tD
              .slice(0, eD ?? void 0)
              .map((e) => ({
                ...e,
                email: e.email.trim(),
                role: tr && null == ex ? e.role : ts,
                seatType:
                  td || null != eH
                    ? F(e.seatType, { includeUsageBased: to, includeProlite: t_, preserveProlite: null != eH })
                    : tc,
              })),
            t = crypto.randomUUID()
          if (null != ek) {
            let e = eX.get(N.PO).authenticatedUserId,
              a = () => {
                let t = eX.get(N.PO)
                return ty.current && t.authenticatedAccountId === eK && t.authenticatedUserId === e
              }
            if ((await ek(t, a), !a())) {
              ;((tx.current = !1), ty.current && tf(!1))
              return
            }
          }
          let a = eZ.start(e)
          eZ.interaction({ action: "send_clicked" })
          let i = new Map()
          for (let t of e) {
            let e = es[t.role],
              a = `${e}:${t.seatType}`,
              n = i.get(a)
            n ? n.emails.push(t.email) : i.set(a, { emails: [t.email], role: e, seatType: t.seatType })
          }
          let n = 0,
            r = 0,
            s = !1,
            l = !1,
            o = []
          await (async () => {
            for (let e of await Promise.allSettled(
              [...i.values()].flatMap((e) => {
                let i = [],
                  n = Math.max(5, Math.round(e.emails.length / 10))
                for (let t = 0; t < e.emails.length; t += n) i.push(e.emails.slice(t, t + n))
                return i.map((i) => {
                  let n = (0, q.k)(
                    eK,
                    {
                      email_addresses: i,
                      role: e.role,
                      seat_type: e.seatType,
                      flow_id: a.flowId,
                      submission_id: t,
                      resend_emails: !0,
                      ...eM,
                    },
                    ew,
                  )
                  return (
                    null != eY &&
                      n.then(
                        (t) => {
                          let { account_invites: a, errored_emails: i } = t
                          return eY(a ?? [], e.seatType, i?.map(eE))
                        },
                        () => eY([], e.seatType, i),
                      ),
                    n
                  )
                })
              }),
            )) {
              if ("rejected" === e.status) {
                ;((s = !0), e.reason instanceof G.FetchError && (0, q.n)(e.reason) && (l = !0))
                continue
              }
              for (let t of ((n += e.value.account_invites?.length ?? 0),
              (r += e.value.already_member_emails?.length ?? 0),
              e.value.errored_emails ?? []))
                o.push(`${t.email_address}: ${t.error}`)
            }
            if ((a.finish(n, !s, r, s && !l ? void 0 : l), ty.current)) {
              if (
                (n > 0 &&
                  (eX
                    .get(K.Id)
                    .success(
                      e0.formatMessage(
                        {
                          id: "admin-invite.inviteSuccessCount",
                          defaultMessage: "Invited {count, plural, one {# user} other {# users}} to {workspaceName}",
                        },
                        { count: n, workspaceName: eW.account.name ?? "" },
                      ),
                    ),
                  setTimeout(() => {
                    ;(e1.invalidateQueries({ queryKey: ["business-onboarding-invite", eK] }),
                      e1.invalidateQueries({ queryKey: (0, M.Ie)(eK).queryKey }))
                  }, 1e3)),
                r > 0 &&
                  eX
                    .get(K.Id)
                    .info(
                      e0.formatMessage(
                        {
                          id: "codex.business-onboarding.invite.toast.already_member",
                          defaultMessage:
                            "{count, plural, one {Already a member \u2014 no invitation sent} other {# people are already members \u2014 no invitations sent}}",
                        },
                        { count: r },
                      ),
                    ),
                o.length > 0 &&
                  eX
                    .get(K.Id)
                    .danger(e0.formatMessage(eh.failure, { emailsStr: o.join(", ") }), {
                      errorAnalytics: { toastId: "admin_invite" },
                    }),
                s)
              )
                return void (l ? tv(!0) : th(e0.formatMessage(eh.sendError)))
              ej()
            }
          })().finally(() => {
            ;((tx.current = !1), ty.current && tf(!1))
          })
        }
      ey[71] !== tm || ey[72] !== tM || ey[73] !== ex || ey[74] !== eJ || ey[75] !== tO || ey[76] !== eZ
        ? ((ei =
            "owner" === ex
              ? null
              : (0, i.jsx)(_.m, {
                  content: (0, i.jsx)(C.A, { ...eh.uploadTooltip }),
                  side: "top",
                  maxWidth: 280,
                  openDelay: 200,
                  children: (0, i.jsxs)(R.$, {
                    type: "button",
                    color: eJ ? "ghost" : "outlineSurface",
                    className: eJ ? en.A.Upload : void 0,
                    disabled: tM,
                    loading: tO,
                    onClick: () => {
                      ;(eZ.interaction({ action: "upload_clicked" }), tb.current?.click())
                    },
                    children: [(0, i.jsx)(y.I, { asset: d }), (0, i.jsx)(C.A, { ...(tm ? eh.reupload : eh.upload) })],
                  }),
                })),
          (ey[71] = tm),
          (ey[72] = tM),
          (ey[73] = ex),
          (ey[74] = eJ),
          (ey[75] = tO),
          (ey[76] = eZ),
          (ey[77] = ei))
        : (ei = ey[77])
      let t5 = ei,
        t7 = tW ? tD.length : void 0,
        t4 = eJ ? (t5 ?? void 0) : void 0,
        t8 = tT && !tM && tD.length > 0 && 0 === tk.length && !tY,
        t3 = () => void t2(),
        t6 =
          null != eL &&
          (0, i.jsx)($, {
            onSuggest: eL,
            suggestedCount: tI.filter(ec).length,
            disabled: tN || tO || tD.length > 0,
            onPendingChange: tL,
            onSuggestions: (e) => {
              let t = (0, z.I)(e, [e7, ...W, ...L], eD)
              return (
                t.length > 0
                  ? (tJ(t.map((e) => ({ id: crypto.randomUUID(), email: e, role: ts, seatType: tc, suggested: !0 }))),
                    tK(!0))
                  : tA(eu),
                t.length
              )
            },
          })
      ;(ey[78] !== tM || ey[79] !== ex || ey[80] !== t1
        ? ((el =
            "owner" !== ex &&
            (0, i.jsx)("input", {
              ref: tb,
              type: "file",
              accept: ".csv,text/csv",
              className: "hidden",
              disabled: tM,
              onChange: (e) => {
                let t = e.target.files?.[0]
                ;((e.target.value = ""), t && t1(t))
              },
            })),
          (ey[78] = tM),
          (ey[79] = ex),
          (ey[80] = t1),
          (ey[81] = el))
        : (el = ey[81]),
        ey[82] !== tg
          ? ((eo = tg && (0, i.jsx)(h.l, { type: "error", content: tg })), (ey[82] = tg), (ey[83] = eo))
          : (eo = ey[83]),
        ey[84] !== tB || ey[85] !== tq || ey[86] !== eV || ey[87] !== tt || ey[88] !== tR
          ? ((e_ =
              tR &&
              (0, i.jsx)(h.l, {
                type: "error",
                content: tt
                  ? (0, i.jsx)(C.A, {
                      id: "codex.businessOnboarding.invitePaymentRequired.owner",
                      defaultMessage:
                        "Invitations couldn't be sent because your workspace has an unpaid subscription. Update your payment details, then try sending the invitations again.",
                    })
                  : (0, i.jsx)(C.A, {
                      id: "codex.businessOnboarding.invitePaymentRequired.member",
                      defaultMessage:
                        "Invitations couldn't be sent because your workspace has an unpaid subscription. Ask a workspace owner to update the payment details, then try again.",
                    }),
                customCtas: tt
                  ? (0, i.jsx)(R.z, {
                      href: tq,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      onClick: (e) =>
                        (0, b.PQ)({
                          event: e,
                          href: tq,
                          disposition: "new-tab",
                          openTarget: null == tB ? eV : "external-browser",
                          initiator: "open_in_browser_bridge",
                        }),
                      children: (0, i.jsx)(C.A, {
                        id: "codex.businessOnboarding.invitePaymentRequired.updatePayment",
                        defaultMessage: "Update payment",
                      }),
                    })
                  : void 0,
              })),
            (ey[84] = tB),
            (ey[85] = tq),
            (ey[86] = eV),
            (ey[87] = tt),
            (ey[88] = tR),
            (ey[89] = e_))
          : (e_ = ey[89]))
      let t9 =
        tk.length > 0 &&
        (0, i.jsx)(h.l, {
          type: "error",
          content: (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(C.A, { ...eh.externalDescription }),
              (0, i.jsx)("p", { className: "break-words select-text", children: tk.join(", ") }),
              (0, i.jsx)(C.A, { ...eh.externalResolution }),
            ],
          }),
        })
      ;(ey[90] !== tq || ey[91] !== ta || ey[92] !== tY
        ? ((eg =
            tY &&
            (0, i.jsx)(h.l, {
              type: "warning",
              title: (0, i.jsx)(C.A, { ...eh.trialTitle }),
              content: (0, i.jsx)(C.A, { ...(ta ? eh.trialLimit : eh.trialAskAdmin) }),
              customCtas: ta
                ? (0, i.jsx)("a", {
                    href: tq,
                    className:
                      "inline-flex h-9 shrink-0 cursor-interaction items-center justify-center rounded-full bg-primary-solid px-4 text-sm font-semibold text-primary-solid hover:opacity-90",
                    onClick: (e) =>
                      (0, b.PQ)({
                        event: e,
                        href: tq,
                        disposition: "current-tab",
                        openTarget: "external-browser",
                        initiator: "open_in_browser_bridge",
                      }),
                    children: (0, i.jsx)(C.A, { ...eh.upgrade }),
                  })
                : void 0,
            })),
          (ey[90] = tq),
          (ey[91] = ta),
          (ey[92] = tY),
          (ey[93] = eg))
        : (eg = ey[93]),
        ey[94] !== t0 ||
        ey[95] !== tp ||
        ey[96] !== tm ||
        ey[97] !== tM ||
        ey[98] !== e0 ||
        ey[99] !== eJ ||
        ey[100] !== tX ||
        ey[101] !== tI ||
        ey[102] !== t5
          ? ((eR =
              tm &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  !eJ && (0, i.jsx)("div", { className: "flex justify-end", children: t5 }),
                  (0, i.jsxs)("div", {
                    className:
                      "flex h-48 min-h-48 flex-wrap content-start items-start overflow-auto rounded-lg border border-default bg-surface p-2 text-sm focus-within:border-ring",
                    children: [
                      tI.map((e) => (0, i.jsx)(eS, { email: e.email, disabled: tM, onRemove: () => tX(e.id) }, e.id)),
                      (0, i.jsx)("input", {
                        "aria-label": e0.formatMessage(eh.addEmails),
                        "aria-invalid": tI.some(ed) || void 0,
                        className:
                          "h-8 min-w-20 flex-1 border-0 bg-transparent px-2 text-sm text-secondary outline-none placeholder:text-tertiary focus:ring-0",
                        name: "add-member-emails",
                        placeholder: 0 === tI.length ? e0.formatMessage(eh.csvPlaceholder) : void 0,
                        value: tp,
                        disabled: tM,
                        onChange: (e) => tP(e.target.value),
                        onBlur: () => {
                          tp.trim() && t0(tp)
                        },
                        onKeyDown: (e) => {
                          if (!e.nativeEvent.isComposing) {
                            if (0 === tp.length && "Backspace" === e.key) {
                              let e = tI.at(-1)
                              null != e && tX(e.id)
                              return
                            }
                            tp.length > 0 && ["Enter", ",", " "].includes(e.key) && (e.preventDefault(), t0(tp, !0))
                          }
                        },
                      }),
                    ],
                  }),
                ],
              })),
            (ey[94] = t0),
            (ey[95] = tp),
            (ey[96] = tm),
            (ey[97] = tM),
            (ey[98] = e0),
            (ey[99] = eJ),
            (ey[100] = tX),
            (ey[101] = tI),
            (ey[102] = t5),
            (ey[103] = eR))
          : (eR = ey[103]))
      let ae =
        !tm &&
        (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(Q.P, {
              className: eJ ? en.A.Rows : "overflow-x-auto",
              pending: tw,
              rowCount: tI.length,
              children: (0, i.jsxs)("table", {
                className: "w-full table-fixed border-separate border-spacing-0 text-start text-base",
                children: [
                  (0, i.jsxs)("colgroup", {
                    children: [
                      (0, i.jsx)("col", {}),
                      tr && (0, i.jsx)("col", { className: "w-32" }),
                      td && (0, i.jsx)("col", { className: "w-36" }),
                      (0, i.jsx)("col", { className: "w-12" }),
                    ],
                  }),
                  (0, i.jsx)("thead", {
                    className: eJ ? "sr-only" : void 0,
                    children: (0, i.jsxs)("tr", {
                      children: [
                        (0, i.jsx)("th", {
                          className: "border-b-[0.5px] border-default py-2 pe-4 text-start font-semibold",
                          children: (0, i.jsx)(C.A, { ...Y.Q.email }),
                        }),
                        tr &&
                          (0, i.jsx)("th", {
                            className: "border-b-[0.5px] border-default py-2 ps-3 pe-4 text-start font-semibold",
                            children: (0, i.jsx)(C.A, { ...Y.Q.role }),
                          }),
                        td &&
                          (0, i.jsx)("th", {
                            className: "border-b-[0.5px] border-default py-2 ps-3 pe-4 text-start font-semibold",
                            children: (0, i.jsx)(C.A, { ...Y.Q.seatType }),
                          }),
                        (0, i.jsx)("th", {
                          className: "w-12 border-b-[0.5px] border-default",
                          "aria-label": e0.formatMessage(eh.remove),
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("tbody", {
                    "aria-busy": tw || void 0,
                    inert: tw || void 0,
                    children: tI.map((e, t) =>
                      (0, i.jsxs)(
                        "tr",
                        {
                          className: eJ ? void 0 : "h-14",
                          "data-suggested": e.suggested || void 0,
                          "data-has-seat": td || void 0,
                          children: [
                            (0, i.jsx)("td", {
                              className: eJ
                                ? void 0
                                : "border-b-[0.5px] border-default py-2 pe-4 align-middle [tr:last-child_&]:border-b-0",
                              children: (0, i.jsx)("div", {
                                className: "flex min-w-0 items-center gap-2",
                                children: (0, i.jsx)("div", {
                                  className: "min-w-0 flex-1",
                                  children: (0, i.jsx)(eO, {
                                    findingSuggestions: tw,
                                    email: e.email,
                                    duplicate: tI
                                      .slice(0, t)
                                      .some((t) => t.email.trim().toLowerCase() === e.email.trim().toLowerCase()),
                                    disabled: tM,
                                    inviteDomain: tn,
                                    completionDomain: tj,
                                    onCompletionAccepted: eZ.domainCompletionAccepted,
                                    onDomainMismatch: () => eZ.domainMismatch(),
                                    onChange: (t) =>
                                      tA((a) =>
                                        a.map((a) => (a.id === e.id ? { ...a, email: t, suggested: void 0 } : a)),
                                      ),
                                  }),
                                }),
                              }),
                            }),
                            tr &&
                              (0, i.jsx)("td", {
                                className:
                                  "border-b-[0.5px] border-default pe-4 align-middle [tr:last-child_&]:border-b-0",
                                children:
                                  null != ex
                                    ? (0, i.jsx)(C.A, { ...tz[ex] })
                                    : (0, i.jsx)(v.Ab, {
                                        surface: "chatgpt",
                                        triggerButton: (0, i.jsxs)(R.$, {
                                          className: "w-full justify-between",
                                          type: "button",
                                          color: "ghostActive",
                                          disabled: tM,
                                          size: "dialogGhost",
                                          children: [(0, i.jsx)(C.A, { ...tz[e.role] }), (0, i.jsx)(x.Aq_, {})],
                                        }),
                                        children: (0, i.jsx)(v.ms.RadioGroup, {
                                          value: e.role,
                                          onValueChange: (t) => {
                                            let a = tE.find((e) => e === t)
                                            a && tA((t) => t.map((t) => (t.id === e.id ? { ...t, role: a } : t)))
                                          },
                                          children: tE.map((e) =>
                                            (0, i.jsx)(
                                              v.ms.RadioItem,
                                              { value: e, variant: "chatgpt", children: (0, i.jsx)(C.A, { ...tz[e] }) },
                                              e,
                                            ),
                                          ),
                                        }),
                                      }),
                              }),
                            td &&
                              (0, i.jsx)("td", {
                                "data-field": "seat",
                                className: eJ
                                  ? void 0
                                  : "border-b-[0.5px] border-default pe-4 align-middle [tr:last-child_&]:border-b-0",
                                children: (0, i.jsx)(v.Ab, {
                                  surface: "chatgpt",
                                  triggerButton: (0, i.jsxs)(R.$, {
                                    className: "w-full justify-between",
                                    type: "button",
                                    color: "ghostActive",
                                    disabled: tM,
                                    size: "dialogGhost",
                                    children: [(0, i.jsx)(C.A, { ...t$[e.seatType] }), (0, i.jsx)(x.Aq_, {})],
                                  }),
                                  children: (0, i.jsx)(v.ms.RadioGroup, {
                                    value: e.seatType,
                                    onValueChange: (t) => {
                                      ;("default" === t || "usage_based" === t || "prolite" === t) &&
                                        tA((a) => a.map((a) => (a.id === e.id ? { ...a, seatType: t } : a)))
                                    },
                                    children: tQ.map((t) => {
                                      let a = null
                                      return (
                                        t_ && "usage_based" !== t
                                          ? (a = (0, i.jsx)(er, {
                                              workspaceId: eK,
                                              seatType: "prolite" === t ? "premium" : "standard",
                                            }))
                                          : "usage_based" === t
                                            ? (a = (0, i.jsx)(C.A, {
                                                id: "WorkspaceMembers.seatTypeCodexSubtitle",
                                                defaultMessage: "No fixed costs, pay as you go pricing",
                                              }))
                                            : "default" === t &&
                                              (a = (0, i.jsx)(C.A, {
                                                id: "WorkspaceMembers.seatTypeChatgptSubtitle",
                                                defaultMessage:
                                                  "ChatGPT, ChatGPT Work, and Codex, fixed price per seat",
                                              })),
                                        (0, i.jsx)(
                                          v.ms.RadioItem,
                                          {
                                            value: t,
                                            variant: "chatgpt",
                                            SubText: a,
                                            disabled:
                                              ("prolite" === t && !t_) ||
                                              (function ({ rows: e, currentSeatType: t, availablePaidSeatCounts: a }) {
                                                if (null == a) return []
                                                let i = e.reduce(
                                                  (e, t) => (
                                                    ("default" === t.seatType || "prolite" === t.seatType) &&
                                                      (e[t.seatType] += 1),
                                                    e
                                                  ),
                                                  { default: 0, prolite: 0 },
                                                )
                                                return ["default", "prolite"].filter((e) => i[e] - (e === t) >= a[e])
                                              })({
                                                rows: tI,
                                                currentSeatType: e.seatType,
                                                availablePaidSeatCounts: eH,
                                              }).includes(t),
                                            children: (0, i.jsx)(C.A, { ...t$[t] }),
                                          },
                                          t,
                                        )
                                      )
                                    }),
                                  }),
                                }),
                              }),
                            (0, i.jsx)("td", {
                              "data-field": "remove",
                              className: eJ
                                ? void 0
                                : "border-b-[0.5px] border-default text-end align-middle [tr:last-child_&]:border-b-0",
                              children: (0, i.jsx)(R.$, {
                                type: "button",
                                size: "iconCircle",
                                color: "ghost",
                                disabled: tM,
                                "aria-label": e0.formatMessage(eh.remove),
                                onClick: () => tX(e.id),
                                children: (0, i.jsx)(x.cSG, {}),
                              }),
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            (0, i.jsxs)("div", {
              className: eJ ? en.A.AddRow : "mb-4 flex justify-between",
              children: [
                null == eD || tI.length < eD
                  ? (0, i.jsxs)(R.$, {
                      type: "button",
                      className: eJ ? en.A.Add : void 0,
                      color: "outlineSurface",
                      disabled: tM,
                      onClick: () =>
                        tA((e) =>
                          B({
                            rows: [...e, { id: crypto.randomUUID(), email: "", role: ts, seatType: tc }],
                            defaultInviteSeatType: tc,
                            availablePaidSeatCounts: eH,
                          }),
                        ),
                      children: [(0, i.jsx)(y.I, { asset: u.M }), (0, i.jsx)(C.A, { ...eh.addMore })],
                    })
                  : (0, i.jsx)("span", {}),
                !eJ && t5,
              ],
            }),
          ],
        })
      return (
        ey[104] !== t6 ||
        ey[105] !== el ||
        ey[106] !== eo ||
        ey[107] !== e_ ||
        ey[108] !== t9 ||
        ey[109] !== eg ||
        ey[110] !== eR ||
        ey[111] !== ae
          ? ((ev = (0, i.jsxs)("div", {
              className: "flex min-w-0 flex-col gap-4",
              children: [t6, el, eo, e_, t9, eg, eR, ae],
            })),
            (ey[104] = t6),
            (ey[105] = el),
            (ey[106] = eo),
            (ey[107] = e_),
            (ey[108] = t9),
            (ey[109] = eg),
            (ey[110] = eR),
            (ey[111] = ae),
            (ey[112] = ev))
          : (ev = ey[112]),
        ey[113] !== eB ||
        ey[114] !== tN ||
        ey[115] !== ez ||
        ey[116] !== eU ||
        ey[117] !== eJ ||
        ey[118] !== t7 ||
        ey[119] !== t4 ||
        ey[120] !== t8 ||
        ey[121] !== t3 ||
        ey[122] !== ev
          ? ((eb = (0, i.jsx)(eB, {
              header: ez,
              recipientCount: t7,
              profileDialog: eJ,
              footerStart: t4,
              busy: tN,
              canSubmit: t8,
              onSubmit: t3,
              onCancel: eU,
              content: ev,
            })),
            (ey[113] = eB),
            (ey[114] = tN),
            (ey[115] = ez),
            (ey[116] = eU),
            (ey[117] = eJ),
            (ey[118] = t7),
            (ey[119] = t4),
            (ey[120] = t8),
            (ey[121] = t3),
            (ey[122] = ev),
            (ey[123] = eb))
          : (eb = ey[123]),
        eb
      )
    }
    function ed(e) {
      return !s.WL.test(e.email)
    }
    function eu(e) {
      return e.slice(0, 1)
    }
    function ec(e) {
      return e.suggested
    }
    function eE(e) {
      let { email_address: t } = e
      return t
    }
    function eT(e) {
      return e.length > 0
    }
    function eI(e) {
      return e.trim()
    }
    function eA(e) {
      return e.email.trim().toLowerCase()
    }
    function em(e) {
      return "prolite" === e.seatType
    }
    function eC(e) {
      return e.email ? [e.email] : []
    }
    function ep(e) {
      return e.email_address ? [e.email_address] : []
    }
    function eP(e) {
      return e.email
    }
    function eN(e) {
      return "verified" === e.status
    }
    function ef(e) {
      return e.email.trim().length > 0
    }
    function eO(e) {
      let t,
        a,
        r,
        o,
        _,
        d,
        u,
        c,
        E = (0, n.c)(35),
        {
          findingSuggestions: T,
          email: I,
          duplicate: p,
          disabled: P,
          inviteDomain: N,
          completionDomain: f,
          onCompletionAccepted: O,
          onDomainMismatch: S,
          onChange: g,
        } = e,
        h = (0, m.A)(),
        [R, v] = (0, A.useState)(!1)
      E[0] !== I ? ((t = I.trim().length > 0 && !s.WL.test(I.trim())), (E[0] = I), (E[1] = t)) : (t = E[1])
      let b = t
      E[2] !== I || E[3] !== b || E[4] !== N
        ? ((a = I.trim().length > 0 && !b && null != N && I.trim().split("@")[1]?.toLowerCase() !== N),
          (E[2] = I),
          (E[3] = b),
          (E[4] = N),
          (E[5] = a))
        : (a = E[5])
      let y = a
      return (
        E[6] !== R || E[7] !== p || E[8] !== I || E[9] !== b || E[10] !== y
          ? ((r = null),
            R && b
              ? (r = eh.invalidEmail)
              : R && y
                ? (r = eh.mismatchedDomain)
                : !b && !y && p && I.trim().length > 0 && (r = eh.duplicateEmail),
            (E[6] = R),
            (E[7] = p),
            (E[8] = I),
            (E[9] = b),
            (E[10] = y),
            (E[11] = r))
          : (r = E[11]),
        E[12] !== g || E[13] !== O
          ? ((o = (e) => {
              ;(g(e), O())
            }),
            (E[12] = g),
            (E[13] = O),
            (E[14] = o))
          : (o = E[14]),
        E[15] !== P ||
        E[16] !== I ||
        E[17] !== r ||
        E[18] !== T ||
        E[19] !== h ||
        E[20] !== y ||
        E[21] !== g ||
        E[22] !== S
          ? ((_ = (e) =>
              (0, i.jsxs)("div", {
                className: "relative",
                children: [
                  (0, i.jsx)(W.pd, {
                    variant: "outlined",
                    type: "email",
                    "aria-label": h.formatMessage(Y.Q.email),
                    "aria-invalid": null != r,
                    placeholder: T ? void 0 : h.formatMessage(eh.placeholder),
                    value: I,
                    disabled: P,
                    onChange: (e) => g(e.target.value),
                    onBlur: () => {
                      ;(v(!0), y && S())
                    },
                  }),
                  T && !I && (0, i.jsx)(j.W, {}),
                  e &&
                    (0, i.jsxs)("span", {
                      "aria-hidden": "true",
                      dir: "ltr",
                      className: `pointer-events-none absolute inset-x-3 inset-y-0 mx-px flex items-center overflow-hidden text-sm leading-5 whitespace-pre text-tertiary ${en.A.EmailCompletionHint}`,
                      children: [(0, i.jsx)("span", { className: "invisible shrink-0", children: I }), e],
                    }),
                ],
              })),
            (E[15] = P),
            (E[16] = I),
            (E[17] = r),
            (E[18] = T),
            (E[19] = h),
            (E[20] = y),
            (E[21] = g),
            (E[22] = S),
            (E[23] = _))
          : (_ = E[23]),
        E[24] !== f || E[25] !== I || E[26] !== o || E[27] !== _
          ? ((d = (0, i.jsx)(l.M, { value: I, domain: f, onAccept: o, children: _ })),
            (E[24] = f),
            (E[25] = I),
            (E[26] = o),
            (E[27] = _),
            (E[28] = d))
          : (d = E[28]),
        E[29] !== r || E[30] !== N
          ? ((u =
              r &&
              (0, i.jsx)("div", {
                className: "text-xs text-danger",
                children: (0, i.jsx)(C.A, { ...r, values: { domain: N ?? "" } }),
              })),
            (E[29] = r),
            (E[30] = N),
            (E[31] = u))
          : (u = E[31]),
        E[32] !== d || E[33] !== u
          ? ((c = (0, i.jsxs)("div", { className: "flex flex-col gap-1", children: [d, u] })),
            (E[32] = d),
            (E[33] = u),
            (E[34] = c))
          : (c = E[34]),
        c
      )
    }
    function eS(e) {
      let t,
        a,
        r,
        l,
        o,
        d,
        u,
        c = (0, n.c)(20),
        { email: E, disabled: T, onRemove: I } = e,
        A = (0, m.A)()
      c[0] !== E ? ((t = s.WL.test(E)), (c[0] = E), (c[1] = t)) : (t = c[1])
      let p = t
      ;(c[2] !== E || c[3] !== p
        ? ((a = p ? null : (0, i.jsx)(C.A, { ...eh.invalidCsvEmail, values: { email: E } })),
          (c[2] = E),
          (c[3] = p),
          (c[4] = a))
        : (a = c[4]),
        c[5] !== E || c[6] !== A
          ? ((r = A.formatMessage(eh.removeMember, { member: E })), (c[5] = E), (c[6] = A), (c[7] = r))
          : (r = c[7]))
      let P = `m-1 inline-flex cursor-interaction items-center gap-1 rounded-md border border-transparent px-1.5 py-1 text-sm select-none disabled:cursor-default ${p ? "bg-primary-soft text-default hover:border-default" : "bg-danger-surface text-danger"}`
      return (
        c[8] !== E ? ((l = (0, i.jsx)("span", { children: E })), (c[8] = E), (c[9] = l)) : (l = c[9]),
        c[10] === Symbol.for("react.memo_cache_sentinel") ? ((o = (0, i.jsx)(x.Gmf, {})), (c[10] = o)) : (o = c[10]),
        c[11] !== T || c[12] !== I || c[13] !== r || c[14] !== P || c[15] !== l
          ? ((d = (0, i.jsxs)("button", {
              type: "button",
              disabled: T,
              "aria-label": r,
              className: P,
              onClick: I,
              children: [l, o],
            })),
            (c[11] = T),
            (c[12] = I),
            (c[13] = r),
            (c[14] = P),
            (c[15] = l),
            (c[16] = d))
          : (d = c[16]),
        c[17] !== a || c[18] !== d
          ? ((u = (0, i.jsx)(_.m, { content: a, side: "top", children: d })), (c[17] = a), (c[18] = d), (c[19] = u))
          : (u = c[19]),
        u
      )
    }
    function eg(e) {
      let t,
        a = (0, n.c)(4),
        { busy: r, recipientCount: s } = e
      if (!r && null != s) {
        let e
        return (
          a[0] !== s
            ? ((e = (0, i.jsx)(C.A, {
                id: "workspaceInvite.suggestions.sendCount",
                defaultMessage: "Send {count, plural, one {# invite} other {# invites}}",
                values: { count: s },
              })),
              (a[0] = s),
              (a[1] = e))
            : (e = a[1]),
          e
        )
      }
      let l = r ? eh.sending : eh.send
      return (a[2] !== l ? ((t = (0, i.jsx)(C.A, { ...l })), (a[2] = l), (a[3] = t)) : (t = a[3]), t)
    }
    let eh = (0, p.YK)({
      uploadTooltip: {
        id: "admin-invite.importCSVTooltip",
        defaultMessage: "Upload a CSV file. Your file must include an email on each line.",
      },
      csvPlaceholder: { id: "emailsTextarea.placeholder", defaultMessage: "Type an email and press enter..." },
      invalidCsvEmail: {
        id: "emailsTextarea.tooltipInvalidEmail",
        defaultMessage: '"{email}" may not be a valid email',
      },
      removeMember: { id: "emailsTextarea.removeMember", defaultMessage: "Remove {member}" },
      mismatchedDomain: {
        id: "admin-invite.mismatchedDomainWarning",
        defaultMessage: "Enter an email address with the {domain} domain.",
      },
      trialAskAdmin: {
        id: "admin-invite.freeTrialInviteLimitWarningAskAdmin",
        defaultMessage:
          "You can only invite 10 users while on an active free trial. Ask your workspace admin to upgrade for more.",
      },
      upgrade: { id: "admin-invite.upgradeButton", defaultMessage: "Upgrade" },
      member: { id: "admin-invite.inviteRoleMember", defaultMessage: "Member" },
      admin: { id: "admin-invite.inviteRoleAdmin", defaultMessage: "Admin" },
      owner: { id: "admin-invite.inviteRoleOwner", defaultMessage: "Owner" },
      analyticsViewer: { id: "admin-invite.inviteRoleAnalyticsViewer", defaultMessage: "Analytics viewer" },
      standard: { id: "WorkspaceMembers.seatTypeStandard", defaultMessage: "Standard" },
      premium: { id: "WorkspaceMembers.seatTypePremium", defaultMessage: "Premium" },
      chatgpt: { id: "WorkspaceMembers.seatTypeChatgpt", defaultMessage: "ChatGPT" },
      codex: { id: "WorkspaceMembers.seatTypeCodex", defaultMessage: "Codex" },
      placeholder: { id: "admin-invite.emailInputPlaceholder", defaultMessage: "Email" },
      invalidEmail: { id: "admin-invite.invalidEmailWarning", defaultMessage: "Please enter a valid email address." },
      duplicateEmail: { id: "admin-invite.duplicateEmailWarning", defaultMessage: "This email is a duplicate." },
      addMore: { id: "admin-invite.addEmailButton", defaultMessage: "Add more" },
      upload: { id: "admin-invite.importCSVButton", defaultMessage: "Upload CSV" },
      reupload: { id: "admin-invite.reimportCSVButton", defaultMessage: "Re-upload CSV" },
      send: { id: "admin-invite.inviteMemberInviteSubmitButton", defaultMessage: "Send invites" },
      sending: { id: "admin-invite.inviteMemberInviteSubmitButtonLoading", defaultMessage: "Sending invites..." },
      addEmails: { id: "admin-invite.addEmailsFieldName.0", defaultMessage: "Emails" },
      remove: { id: "codex.businessOnboarding.removeInvite", defaultMessage: "Remove invitation" },
      inviteLimit: {
        id: "admin-invite.inviteLimitWarning",
        defaultMessage: "You can invite up to {maxInvites} people at a time. Extra emails were not added.",
      },
      fileTooLarge: {
        id: "admin-invite.fileTooLargeWarning",
        defaultMessage: "File is too large. Please upload a CSV file smaller than {maxSize}.",
      },
      fileType: { id: "admin-invite.fileIncorrectTypeWarning", defaultMessage: "Please upload a CSV file." },
      failure: { id: "admin-invite.inviteMessageFailure", defaultMessage: "Unable to invite {emailsStr}" },
      externalDescription: {
        id: "admin-invite.prohibitedExternalEmailDescription",
        defaultMessage: "The following emails are not a part of your organization's verified domains:",
      },
      externalResolution: {
        id: "admin-invite.prohibitedExternalEmailResolution",
        defaultMessage:
          'Either remove these emails, enable "Allow External Domain Invites" from your workspace settings, or verify these email domains.',
      },
      trialTitle: { id: "admin-invite.freeTrialInviteLimitWarningTitle", defaultMessage: "Trial invite limit reached" },
      trialLimit: {
        id: "admin-invite.freeTrialInviteLimitWarning",
        defaultMessage: "You can only invite 10 users while on an active free trial. Upgrade now to invite more.",
      },
      loading: { id: "codex.businessOnboarding.loadingInvites", defaultMessage: "Loading invitation settings\u2026" },
      loadError: {
        id: "codex.businessOnboarding.inviteSettingsError",
        defaultMessage: "Unable to load invitation settings",
      },
      retry: { id: "codex.businessOnboarding.retryInvites", defaultMessage: "Retry" },
      sendError: {
        id: "codex.businessOnboarding.inviteSendError",
        defaultMessage: "Some invitations could not be sent. Please try again.",
      },
      fileReadError: {
        id: "codex.businessOnboarding.inviteFileReadError",
        defaultMessage: "Unable to read this CSV file. Please try again.",
      },
    })
  },
  eH3k(e, t, a) {
    var i = a("DBCl"),
      n = a("Kwur")
    function r(e) {
      return (
        401 === e.status &&
        ("workspace_subscription_delinquent" === e.errorCode ||
          (null == e.errorCode && e.diagnosticError?.message === "Team has a delinquent subscription"))
      )
    }
    a.d(
      t,
      {},
      {
        k: function (e, t, a) {
          return n.Request.safePost("/accounts/{account_id}/invites", {
            parameters: { path: { account_id: e } },
            additionalHeaders: {
              "ChatGPT-Account-ID": e,
              [i.zBc]: e,
              ...(a ? { "X-OAI-Workspace-Invite-Entry-Surface": "owner_setup" } : {}),
            },
            requestBody: t,
            isExpectedError: r,
          })
        },
        n: r,
      },
    )
  },
  EOzk(e, t, a) {
    var i = a("E2yB")
    a.d(
      t,
      {},
      {
        I: function (e, t, a) {
          let n = new Set(t.map((e) => e?.trim().toLowerCase()))
          return [...new Set(e.map((e) => e.trim().toLowerCase()))]
            .filter((e) => i.WL.test(e) && !n.has(e))
            .slice(0, Math.min(5, a ?? 5))
        },
      },
    )
  },
  KxAz(e, t, a) {
    a.d(t, { P: () => s })
    var i = a("ABep"),
      n = a("QosV"),
      r = a("zd8w")
    function s(e) {
      let t,
        a,
        s,
        l = (0, n.c)(8),
        { children: o, className: _, pending: d, rowCount: u } = e,
        c = (0, r.useRef)(null),
        E = (0, r.useRef)(null)
      ;(l[0] !== d || l[1] !== u
        ? ((t = () => {
            let e = c.current
            if (!e) return
            if (d) {
              null == E.current && (E.current = { count: u, width: e.offsetWidth, height: e.offsetHeight })
              return
            }
            let t = E.current
            if (
              ((E.current = null),
              !t ||
                t.count === u ||
                t.width !== e.offsetWidth ||
                t.height === e.offsetHeight ||
                window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            )
              return
            let a = e.animate([{ height: `${t.height}px` }, { height: `${e.offsetHeight}px` }], {
              duration: 300,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            })
            return () => a.cancel()
          }),
          (a = [d, u]),
          (l[0] = d),
          (l[1] = u),
          (l[2] = t),
          (l[3] = a))
        : ((t = l[2]), (a = l[3])),
        (0, r.useLayoutEffect)(t, a))
      let T = `${_} rows-Z_Qz7z`,
        I = d || void 0
      return (
        l[4] !== o || l[5] !== T || l[6] !== I
          ? ((s = (0, i.jsx)("div", { ref: c, className: T, "aria-busy": I, children: o })),
            (l[4] = o),
            (l[5] = T),
            (l[6] = I),
            (l[7] = s))
          : (s = l[7]),
        s
      )
    }
  },
  aHOQ(e, t, a) {
    let i = (0, a("ESTr").a)({
      name: "plus-lg-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 3.25, y: 3.25, width: 17.5, height: 17.5 },
        visualBounds: { x: 3.25, y: 3.25, width: 17.5, height: 17.5 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.25, y: 3.25, width: 17.5, height: 17.5 },
        center: { x: 12, y: 12 },
        insets: { top: 3.25, right: 3.25, bottom: 3.25, left: 3.25 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M12 3.25C12.4142 3.25 12.75 3.58579 12.75 4V11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H12.75V20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20V12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H11.25V4C11.25 3.58579 11.5858 3.25 12 3.25Z" fill="currentColor"/>',
    })
    a.d(t, {}, { M: i })
  },
}
//# sourceMappingURL=650404.01da027e60.js.map
