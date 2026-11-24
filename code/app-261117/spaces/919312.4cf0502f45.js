export const __rspack_esm_ids = [919312]
export const __webpack_modules__ = {
  HbVK(e, t, a) {
    class n extends Error {}
    class l extends Error {}
    class o extends Error {}
    class i extends o {}
    async function r({ key: e, operationId: t }) {
      null != t &&
        (await navigator.locks
          .request(e, () => {
            localStorage.getItem(e) === t && localStorage.removeItem(e)
          })
          .catch(() => void 0))
    }
    a.d(
      t,
      {},
      {
        Tm: n,
        Ug: function (e, t) {
          if (null == e || "credential_reference_v1" !== t) return null
          let a = JSON.stringify([
            "browser-auth-route",
            e.userId,
            e.accountId,
            e.conversationId,
            e.challengeId,
            e.origin,
          ])
          return { ...e, key: a }
        },
        gi: class {
          #e = !1
          #t
          async submit(e, t, a, s, d) {
            if (null == e || this.#e || !t()) return
            if ((this.#t?.key !== e.key && (this.#t = void 0), null == this.#t)) {
              if (null == a) return
              this.#t = { ...a, key: e.key }
            }
            let c = this.#t
            ;((this.#e = !0), d("busy"))
            let u = c.observe?.(null == a && "credentialId" in c)
            try {
              if ("store" in c) {
                let a = await (async function (e, t, a) {
                  return navigator.locks.request(e.key, async () => {
                    let n
                    if (!a()) return null
                    let l = localStorage.getItem(e.key),
                      o = "store" === l || "fill" === l ? null : l,
                      r = t.approvalOperationId ?? o ?? crypto.randomUUID(),
                      s = () => ((t.operationId = r), localStorage.setItem(e.key, r), t.store(e, r))
                    try {
                      n = await s()
                    } catch (e) {
                      if (!(e instanceof i) || null == o || null != t.approvalOperationId || !a()) throw e
                      ;((r = crypto.randomUUID()), (n = await s()))
                    }
                    if (!n.credential_id?.trim()) throw Error("Sign-in credential unavailable")
                    return { credentialId: n.credential_id, operationId: r, expiresAt: n.expires_at }
                  })
                })(e, c, t)
                if (null == a) {
                  ;((this.#t = void 0), d("ready"), u?.("cancelled"))
                  return
                }
                c = this.#t = { key: e.key, observe: c.observe, ...a }
              }
              if (t()) {
                let e = c.savedSelectionExpiresAt ?? c.expiresAt
                if (null != e && Date.now() >= 1e3 * e) {
                  if (null != c.savedSelectionExpiresAt) throw new l()
                  throw new n()
                }
                let t = await s({
                  credentialId: c.credentialId,
                  operationId: c.operationId,
                  ...(null != c.savedSelectionExpiresAt && { savedSelectionExpiresAt: c.savedSelectionExpiresAt }),
                })
                ;(await r(c), u?.(!1 === t ? "cancelled" : "acknowledged"))
              } else ((this.#t = void 0), await r(c), u?.("cancelled"))
              d("ready")
            } catch (e) {
              ;(u?.("store" in c ? "store_failed" : "acknowledgement_failed"),
                e instanceof n || e instanceof l || e instanceof o
                  ? ((this.#t = void 0),
                    await r(c),
                    e instanceof l ? d("selection_expired") : e instanceof n ? d("expired") : d("rejected"))
                  : d("retry"))
            } finally {
              this.#e = !1
            }
          }
        },
        me: o,
        vT: i,
        xi: l,
      },
    )
  },
  pfTp(e, t, a) {
    var n = a("ASxG")
    let l = "sites-preview-annotations",
      o = /^(?:appgprj_[a-f0-9]{32}~)?appgdep_[a-f0-9]{32}$/,
      i = n.YjP().min(1).max(128),
      r = n.aig().int().positive().max(Number.MAX_SAFE_INTEGER),
      s = n.aig().min(-1e7).max(1e7),
      d = n.aig().nonnegative().max(1e7),
      c = n.Ikc({
        blob: n.IeY((e) => e instanceof Blob && "image/png" === e.type && e.size > 0 && e.size <= 4194304),
        width: n.aig().int().positive().max(1600),
        height: n.aig().int().positive().max(1600),
      }),
      u = n.Ikc({
        id: i,
        revision: r,
        text: n.YjP().trim().min(1).max(4e3),
        target: n.Ikc({
          url: n.OZ5().max(8192),
          selector: n.YjP().min(1).max(4e3),
          tagName: n.YjP().min(1).max(128),
          text: n.YjP().max(2e3),
          bounds: n.Ikc({ x: s, y: s, width: d, height: d }),
          regionOffset: n.Ikc({ x: s, y: s }).optional(),
          point: n.Ikc({ x: s, y: s }).optional(),
          viewport: n.Ikc({ width: d, height: d, scrollX: s, scrollY: s }),
        }),
        capture: c.optional(),
      }),
      p = n.Ikc({
        channel: n.euz(l),
        version: n.euz(1),
        sessionId: i,
        event: n.gMt("type", [
          n.Ikc({
            type: n.euz("state"),
            mode: n.k5n(["interact", "annotate"]),
            annotations: n.IeY((e) => Array.isArray(e) && e.length <= 100).pipe(n.YOg(u)),
          }),
          n.Ikc({ type: n.euz("capture-ready"), annotationId: i, revision: r, capture: c }),
          n.Ikc({ type: n.euz("request-mode"), mode: n.k5n(["interact", "annotate"]) }),
          n.Ikc({ type: n.euz("navigation-state"), canGoBack: n.zMY(), canGoForward: n.zMY() }),
          n.Ikc({ type: n.euz("deployment-id"), deploymentId: n.YjP().regex(o).nullable() }),
        ]),
      })
    function m(e = []) {
      let t = e.reduce((e, t) => e + t, 0)
      return (e) => !(t + e > 0x1400000) && ((t += e), !0)
    }
    a.d(
      t,
      {},
      {
        Cu: 4194304,
        JU: m,
        e2: function (e) {
          try {
            let t = new URL(e)
            if (
              "https:" !== t.protocol ||
              t.username ||
              t.password ||
              t.port ||
              !/^[a-z0-9-]+(?:\.[a-z0-9-]+)*\.(?:chatgpt\.site|chatgpt-team\.site|appgardenapps\.dev|appgardenapps\.com)$/.test(
                t.hostname,
              )
            )
              return []
            let a = new URL(t)
            return (
              (a.hostname = t.hostname.replace(/\.chatgpt-team\.site$/, ".chatgpt.site")),
              [...new Set([t.origin, a.origin])]
            )
          } catch {
            return []
          }
        },
        gc: l,
        jL: function (e, t, a, n) {
          if (!e.isTrusted || e.source !== t || !a.includes(e.origin)) return null
          let l = p.safeParse(e.data)
          if (!l.success || l.data.sessionId !== n) return null
          if ("state" !== l.data.event.type) return l.data.event
          let { annotations: o } = l.data.event
          if (new Set(o.map((e) => e.id)).size !== o.length || o.some((t) => new URL(t.target.url).origin !== e.origin))
            return null
          let i = m()
          for (let e of o) e.capture && !i(e.capture.blob.size) && (e.capture = void 0)
          return l.data.event
        },
        n5: async function (e) {
          if (!c.safeParse(e).success) throw Error("Invalid Site annotation capture")
          let t = new DataView(await e.blob.slice(0, 24).arrayBuffer())
          if (
            24 !== t.byteLength ||
            0x89504e47 !== t.getUint32(0) ||
            0xd0a1a0a !== t.getUint32(4) ||
            13 !== t.getUint32(8) ||
            0x49484452 !== t.getUint32(12) ||
            t.getUint32(16) !== e.width ||
            t.getUint32(20) !== e.height
          )
            throw Error("Invalid Site annotation PNG header")
        },
        xe: o,
      },
    )
  },
  dKO6(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("qmMi"),
      i = a("zd8w"),
      r = a("oyxz"),
      s = a("HdXD"),
      d = a("V1qQ"),
      c = a("sG8D"),
      u = a("p4qq"),
      p = a("SGsN"),
      m = a("wwME"),
      g = a("GaA7"),
      h = a("OWtl"),
      f = a("hZax"),
      x = a("bIvi")
    ;(r.A,
      r.A,
      r.A,
      r.A,
      a.d(
        t,
        {},
        {
          R: function (e) {
            let t,
              a,
              v,
              y,
              b = (0, l.c)(23),
              { documentId: w, errorReport: _, compatibility: I, hasPendingChanges: k, browserAction: S } = e,
              j = (0, o.gh)(h.u),
              C = (0, i.useContext)(d.L),
              A = (0, i.useId)(),
              [M, T] = (0, i.useState)(null),
              P = (0, o.Ul)(c.kl),
              E = (0, o.Ul)(c.td),
              N = (0, o.Ul)(c.uf),
              U = (0, f.Zj)("2958834185"),
              { platform: O } = (0, m.V)(),
              D = (0, u.t)(),
              R
            b[0] !== S ? ((t = (e) => {}), (b[0] = S), (b[1] = t)) : (t = b[1])
            let L = (0, x.K)(t),
              z = "checking" === P || "downloading" === P || "installing" === P,
              q =
                null != g.appServices.appUpdates &&
                !N &&
                !U &&
                (E || ("linux" === O && ("ready" === P || z))) &&
                (!k || z)
            b[2] !== q || b[3] !== k || b[4] !== D || b[5] !== P || b[6] !== z
              ? ((a = () => {
                  !q || k || z || ("ready" === P ? D() : "idle" === P && g.appServices.appUpdates?.checkForUpdates())
                }),
                (b[2] = q),
                (b[3] = k),
                (b[4] = D),
                (b[5] = P),
                (b[6] = z),
                (b[7] = a))
              : (a = b[7])
            let B = (0, x.K)(a)
            return (
              b[8] !== R ||
              b[9] !== q ||
              b[10] !== I ||
              b[11] !== M ||
              b[12] !== w ||
              b[13] !== _ ||
              b[14] !== C ||
              b[15] !== P ||
              b[16] !== B ||
              b[17] !== L ||
              b[18] !== j ||
              b[19] !== A ||
              b[20] !== z
                ? ((v = () => {
                    let e
                    if ("read-only" === I && M === w) return
                    let t = !0,
                      a = (0, n.jsx)(r.A, { id: "pages.native.schemaUpdateAction", defaultMessage: "Update" })
                    switch (P) {
                      case "checking":
                        a = (0, n.jsx)(r.A, {
                          id: "pages.native.schemaCheckingForUpdates",
                          defaultMessage: "Checking for updates",
                        })
                        break
                      case "downloading":
                        a = (0, n.jsx)(r.A, {
                          id: "pages.native.schemaDownloadingUpdate",
                          defaultMessage: "Downloading update",
                        })
                        break
                      case "installing":
                        a = (0, n.jsx)(r.A, {
                          id: "pages.native.schemaInstallingUpdate",
                          defaultMessage: "Installing update",
                        })
                    }
                    let l =
                      R?.body ??
                      (0, n.jsx)(r.A, {
                        id: "pages.native.schemaUpdateAppNotice",
                        defaultMessage: "The application is out of date. Update the app to continue editing.",
                      })
                    null != R
                      ? (e = { label: R.label, onClick: () => L(() => t) })
                      : q &&
                        (e = {
                          label: a,
                          loading: z,
                          onClick: () => {
                            t && B()
                          },
                        })
                    let o = j
                      .get(p.Id)
                      .warning(
                        (0, n.jsxs)(n.Fragment, {
                          children: [(0, n.jsx)(s.gO, { tracker: C, kind: "unsupported", recoveryUi: "notice" }), _, l],
                        }),
                        {
                          duration: 0,
                          hasCloseButton: "read-only" === I,
                          id: `native-schema-compatibility:${A}:${w}`,
                          onRemove: () => {
                            t && T(w)
                          },
                          primaryAction: e,
                        },
                      )
                    return () => {
                      ;((t = !1), o.close())
                    }
                  }),
                  (y = [R, q, I, M, _, C, P, B, L, w, j, A, z]),
                  (b[8] = R),
                  (b[9] = q),
                  (b[10] = I),
                  (b[11] = M),
                  (b[12] = w),
                  (b[13] = _),
                  (b[14] = C),
                  (b[15] = P),
                  (b[16] = B),
                  (b[17] = L),
                  (b[18] = j),
                  (b[19] = A),
                  (b[20] = z),
                  (b[21] = v),
                  (b[22] = y))
                : ((v = b[21]), (y = b[22])),
              (0, i.useEffect)(v, y),
              null
            )
          },
        },
      ))
  },
  OtkP(e, t, a) {
    var n = a("qmMi"),
      l = a("DBCl"),
      o = a("tl5a"),
      i = a("vdpW"),
      r = a("OWtl"),
      s = a("kfGJ"),
      d = a("Nwp9"),
      c = a("qKlE")
    let u = (0, d.m3)("heartbeat-thread-permissions-by-id", {})
    function p(e) {
      return e?.approvalPolicy == null || null == e.approvalsReviewer || null == e.sandboxPolicy
        ? null
        : {
            ...("activePermissionProfile" in e && void 0 !== e.activePermissionProfile
              ? { activePermissionProfile: e.activePermissionProfile }
              : "permissions" in e && null != e.permissions
                ? { activePermissionProfile: { id: e.permissions, extends: null } }
                : {}),
            ...("runtimeWorkspaceRoots" in e && null != e.runtimeWorkspaceRoots
              ? { runtimeWorkspaceRoots: e.runtimeWorkspaceRoots }
              : {}),
            approvalPolicy: e.approvalPolicy,
            approvalsReviewer: e.approvalsReviewer,
            sandboxPolicy: e.sandboxPolicy,
          }
    }
    let m = (0, n.i1)(r.u, (e, { get: t }) => {
        var a
        let n
        if (null == e) return null
        let l = t(i._2, { hostId: t(o.qX, e), threadId: e })
        return (
          (a = t(i.Ko, l)),
          null != (n = p(t(o.h2, e)))
            ? n
            : a?.turnId == null || "inferred" === a.permissionParamsSource || null == a.params.collaborationMode
              ? null
              : p(a.params)
        )
      }),
      g = (0, n.i1)(r.u, (e, { get: t }) => {
        if (null == e) return null
        let a = t(o.qX, e)
        if (a === s.fI) return null
        let n = new Map(
          (t(c.Pu).data?.items ?? []).flatMap((t) =>
            "heartbeat" === t.kind && t.targetThreadId === e && t.remoteHost?.id === a
              ? [[(0, l.JM_)(e, t.remoteHost), t.remoteHost]]
              : [],
          ),
        )
        return 1 === n.size ? Array.from(n.values())[0] : null
      }),
      h = (0, n.i1)(r.u, (e, { get: t }) => {
        if (null == e) return null
        if (t(o.qX, e) === s.fI) return e
        let a = t(g, e)
        return null == a ? null : (0, l.JM_)(e, a)
      }),
      f = (0, n.i1)(r.u, (e, { get: t }) => {
        let a = t(m, e)
        if (null != a) return a
        let n = t(h, e)
        return null == n ? null : (t(u)?.[n] ?? null)
      }),
      x = (0, n.i1)(r.u, (e, { get: t }) => {
        let a = t(m, e)
        return null == a ? null : JSON.stringify(a)
      })
    a.d(
      t,
      {},
      {
        $C: f,
        Al: h,
        Di: m,
        Tz: g,
        ZD: u,
        fP: x,
        vf: function (e, t, a) {
          return null == a || JSON.stringify(e[t]) === JSON.stringify(a) ? e : { ...e, [t]: a }
        },
      },
    )
  },
  LrZ7(e, t, a) {
    var n = a("Dgwo"),
      l = a("l00C"),
      o = a("tl5a"),
      i = a("shRG"),
      r = a("YULJ"),
      s = a("kfGJ"),
      d = a("NVPY"),
      c = a("OtkP")
    a.d(
      t,
      {},
      {
        R: async function (e, t, a, u) {
          let p = t === s.fI ? null : e.get(l.u$, t)
          if (
            t !== s.fI &&
            (null == p || 0 === (await (0, d.GM)(t, [a])).length || e.get(l.u$, t) !== p || e.get(o.qX, a) !== t)
          )
            return { status: "not-ready", reason: "canceled" }
          let m = e.get(r.a, t)
          return (p?.rpc ?? (0, n.V)(e, t)).resumeConversation(
            {
              conversationId: a,
              model: null,
              reasoningEffort: null,
              workspaceRoots: u,
              collaborationMode: e.get(o.aG, a),
              useAppServerPermissionDefault: m,
              ...(m ? {} : { permissions: e.get(c.$C, a) ?? void 0 }),
            },
            { readResumeInputs: (0, i.jQ)(e, t) },
          )
        },
      },
    )
  },
  mgfw(e, t, a) {
    var n = a("l8z4"),
      l = a("yGJW")
    let o = {
      scheduled_page: "CHATGPT_TASKS_OPEN_SOURCE_SCHEDULED_PAGE",
      notification: "CHATGPT_TASKS_OPEN_SOURCE_NOTIFICATION",
      conversation: "CHATGPT_TASKS_OPEN_SOURCE_CONVERSATION",
      conversation_sidebar: "CHATGPT_TASKS_OPEN_SOURCE_CONVERSATION_SIDEBAR",
      editor: "CHATGPT_TASKS_OPEN_SOURCE_EDITOR",
      space_schedules_panel: "CHATGPT_TASKS_OPEN_SOURCE_SPACE_SCHEDULES_PANEL",
    }
    a.d(
      t,
      {},
      {
        bK: function (e, t) {
          ;(0, l.yy)(e, n.AS, {
            type: "CHATGPT_TASKS_EVENT_TYPE_PAGE_VIEWED",
            openSource: null == t ? void 0 : o[t],
            openDestination: "CHATGPT_TASKS_OPEN_DESTINATION_SCHEDULED_PAGE",
          })
        },
        sZ: function (e, { taskId: t, conversationId: a, destination: i, source: r, interactionEntryPoint: s }) {
          ;(0, l.yy)(e, n.AS, {
            type: "CHATGPT_TASKS_EVENT_TYPE_TASK_OPENED",
            taskId: t,
            conversationId: a,
            interactionEntryPoint: s,
            openSource: null == r ? void 0 : o[r],
            openDestination: {
              conversation: "CHATGPT_TASKS_OPEN_DESTINATION_CONVERSATION",
              editor: "CHATGPT_TASKS_OPEN_DESTINATION_EDITOR",
              space_schedule_details: "CHATGPT_TASKS_OPEN_DESTINATION_SPACE_SCHEDULE_DETAILS",
            }[i],
          })
        },
        zT: o,
      },
    )
  },
  jfZL(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("Wf1j"),
      i = a("oyxz"),
      r = a("dMTK"),
      s = a("KIKs")
    function d(e, t, a) {
      let n = t.getTime() - e.getTime()
      return n < 0 || n >= 864e5
        ? null
        : n < 36e5
          ? a.formatRelativeTime(-Math.max(1, Math.round(n / 6e4)), "minute")
          : a.formatRelativeTime(-Math.max(1, Math.round(n / 36e5)), "hour")
    }
    a.d(
      t,
      {},
      {
        M: function (e) {
          let t,
            a,
            c,
            u,
            p,
            m = (0, l.c)(15),
            { automation: g, footer: h, lastRunFailed: f, showLastRun: x } = e,
            v = void 0 !== h && h,
            y = void 0 !== f && f,
            b = void 0 === x || x,
            w = (0, o.A)(),
            _ = (0, s.wv)()
          if (m[0] !== g.last_run_time || m[1] !== w || m[2] !== y || m[3] !== _ || m[4] !== b) {
            let e = null == g.last_run_time ? null : new Date(g.last_run_time)
            if (((a = "none"), (c = ""), (t = ""), b && null != e && Number.isFinite(e.getTime()))) {
              let n = d(e, _, w)
              if (null != n) ((a = y ? "failedRecent" : "recent"), (c = n))
              else {
                let n = (0, r.f$)(_, e)
                0 === n || 1 === n
                  ? ((a = "at"),
                    (t = w.formatRelativeTime(-n, "day", { numeric: "auto" })),
                    (c = w.formatTime(e, { hour: "numeric", minute: "2-digit" })))
                  : ((a = "on"),
                    (c =
                      n <= 7
                        ? w.formatDate(e, { weekday: "long" })
                        : w.formatDate(e, { month: "short", day: "numeric", year: "numeric" })))
              }
            }
            ;((m[0] = g.last_run_time),
              (m[1] = w),
              (m[2] = y),
              (m[3] = _),
              (m[4] = b),
              (m[5] = t),
              (m[6] = a),
              (m[7] = c))
          } else ((t = m[5]), (a = m[6]), (c = m[7]))
          if ("none" === a) return null
          m[8] !== t || m[9] !== a || m[10] !== c
            ? ((u = (0, n.jsx)(i.A, {
                id: "automations.scheduled.detailRunTiming",
                defaultMessage:
                  "{lastKind, select, recent {Last ran {lastTime}} failedRecent {{lastTime}} at {Last ran {lastDay} at {lastTime}} on {Last ran on {lastTime}} other {}}{separator}{nextKind, select, running {Running now} next {Next run {nextTime}} other {}}",
                values: { lastKind: a, lastDay: t, lastTime: c, nextKind: "none", nextTime: "", separator: "" },
              })),
              (m[8] = t),
              (m[9] = a),
              (m[10] = c),
              (m[11] = u))
            : (u = m[11])
          let I = u
          return (
            m[12] !== v || m[13] !== I
              ? ((p = v
                  ? (0, n.jsx)("div", {
                      className:
                        "border-t border-default pt-4 text-sm leading-5 whitespace-pre-line text-tertiary select-none",
                      children: I,
                    })
                  : I),
                (m[12] = v),
                (m[13] = I),
                (m[14] = p))
              : (p = m[14]),
            p
          )
        },
        k: function (e) {
          let t,
            a,
            c,
            u,
            p = (0, l.c)(12),
            { value: m } = e,
            g = (0, o.A)(),
            h = (0, s.wv)()
          if (p[0] !== g || p[1] !== h || p[2] !== m) {
            c = Symbol.for("react.early_return_sentinel")
            e: {
              let e = new Date(m)
              if (!Number.isFinite(e.getTime())) {
                c = null
                break e
              }
              ;((t = d(e, h, g)), (a = (0, r.a7)(g, e, h)))
            }
            ;((p[0] = g), (p[1] = h), (p[2] = m), (p[3] = t), (p[4] = a), (p[5] = c))
          } else ((t = p[3]), (a = p[4]), (c = p[5]))
          if (c !== Symbol.for("react.early_return_sentinel")) return c
          let f = a,
            x = null != t ? "yes" : "no",
            v = t ?? "",
            y = f.includeAt ? "yes" : "no"
          return (
            p[6] !== f.date || p[7] !== f.time || p[8] !== x || p[9] !== v || p[10] !== y
              ? ((u = (0, n.jsx)(i.A, {
                  id: "automations.scheduled.detailUpdateTimestampWithLabel",
                  defaultMessage:
                    "{showLastUpdateLabel, select, yes {Last update \xb7 } other {}}{recent, select, yes {{relativeTime}} other {{date}{includeAt, select, yes { at } other { }}{time}}}",
                  values: {
                    showLastUpdateLabel: "no",
                    recent: x,
                    relativeTime: v,
                    date: f.date,
                    time: f.time,
                    includeAt: y,
                  },
                })),
                (p[6] = f.date),
                (p[7] = f.time),
                (p[8] = x),
                (p[9] = v),
                (p[10] = y),
                (p[11] = u))
              : (u = p[11]),
            u
          )
        },
      },
    )
  },
  kpoE(e, t, a) {
    var n = a("ASxG")
    a("fVOX")
    var l = a("WFY2"),
      o = a("eShZ")
    let i = n.Ikc({
      stage: n.k5n([
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
      error_category: n.k5n(["http", "network", "timeout", "client", "invalid_response", "popup_blocked"]),
      http_status: n
        .aig()
        .int()
        .min(400)
        .max(599)
        .optional()
        .catch(void 0),
      operation_id: n
        .uRe()
        .optional()
        .catch(void 0),
    })
    a.d(
      t,
      {},
      {
        z: function (e, t, a, n) {
          if (a instanceof Error && "AbortError" === a.name) return
          let r = "client"
          "invalid_response" === a || "popup_blocked" === a
            ? (r = a)
            : a instanceof Error && "TimeoutError" === a.name
              ? (r = "timeout")
              : a instanceof o.FetchError && (r = "network" === a.errorKind ? "network" : "http")
          let s = i.safeParse({
            stage: t,
            error_category: r,
            http_status: "http" === r && a instanceof o.FetchError ? a.status : void 0,
            operation_id: n,
          }).data
          if (null != s)
            try {
              l.v.error("Browser auth failed", { safe: s })
            } catch {}
        },
      },
    )
  },
  Y8Nq(e, t, a) {
    var n = a("qmMi"),
      l = a("SPnB"),
      o = a("g2p6"),
      i = a("jScN"),
      r = a("GaA7"),
      s = a("OWtl"),
      d = a("kpoE"),
      c = a("ShnJ")
    let u = (0, n.vU)(s.u, (e, { scope: t }) => ({
      queryKey: ["browser-auth-operation", e],
      enabled: null != e,
      queryFn: async () => {
        if (null == e) return null
        try {
          let t = await h().read(e)
          return null == t ? null : f(t)
        } catch (a) {
          throw (p(t, e) && (0, d.z)(t, "recovery_read", a), a)
        }
      },
      staleTime: 1 / 0,
      gcTime: 0,
      retry: !1,
    }))
    function p(e, t) {
      return e.get(l.chatGptAuthenticatedUserId$) === t.userId && e.get(o.Sk) === t.accountId
    }
    async function m(e, t, a) {
      let n = e.query.getData(u, t),
        l = {
          ...a,
          fill_status:
            "unknown" === a.fill_status && n?.operation_id === a.operation_id ? n.fill_status : a.fill_status,
          save_status:
            "unknown" === a.save_status && n?.operation_id === a.operation_id ? n.save_status : a.save_status,
        }
      return (e.query.setData(u, t, l), await g(e, t, l), l)
    }
    async function g(e, t, a) {
      try {
        await h().settle(t, {
          operationId: a.operation_id,
          fillStatus: a.fill_status,
          saveStatus: a.save_status,
          statusAvailable: !1 !== a.statusAvailable,
          selectionId: a.selectionId,
        })
      } catch (n) {
        p(e, t) && (0, d.z)(e, "recovery_write", n, a.operation_id)
      }
    }
    function h() {
      let e = r.appServices?.browserAuthOperations
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
    a.d(
      t,
      {},
      {
        AM: u,
        O2: p,
        Ve: m,
        lV: async function (e, t, a, n, l) {
          let o = (0, c.qv)(a.choice),
            r = (0, i.m7)({
              attributes: { "browser_auth.phase": "submit", "browser_auth.submission_mode": o },
              name: "codex.browser_auth.submit",
            })
          try {
            let o = await (async () => {
              let o,
                { recheckSave: i, ...s } = a,
                { choice: x } = s
              if (x?.remember && 1) {
                let a = !0,
                  n = await (
                    null != i
                      ? i()
                      : e.queryClient.fetchQuery({
                          queryKey: (0, c.mK)(t.userId, t.accountId, t.conversationId, t.challengeId),
                          queryFn: () => {
                            let e = a ? "explicit_recheck" : "other_refetch"
                            return ((a = !1), (0, c.RS)(t.conversationId, t.challengeId, e, r?.trace))
                          },
                          staleTime: 0,
                          gcTime: 3e5,
                        })
                  ).catch(() => void 0)
                a = !1
                let l = x.saveFields,
                  o = n?.manual_save_fixed_account_fields,
                  s = n?.manual_save_fields,
                  d =
                    n?.available === !0 &&
                    n.save_enabled &&
                    !0 === n.manual_save_supported &&
                    null != l &&
                    (x.saveFixedAccount
                      ? null != o && null == s && null == l.username && o.password === l.password
                      : null == o && null != s && (s.username ?? void 0) === l.username && s.password === l.password)
                x = {
                  ...x,
                  remember: d,
                  trackFillStatus:
                    !0 === x.trackFillStatus && n?.available === !0 && !0 === n.manual_fill_recovery_supported,
                  saveFields: d ? l : void 0,
                }
              }
              if (!n()) return
              let v = {
                operationId: x?.passwordManagerOperationId ?? x?.operationId ?? crypto.randomUUID(),
                fillStatus: "unknown",
                saveStatus: x?.remember ? "unknown" : "not_requested",
                statusAvailable:
                  x?.remember === !0 ||
                  x?.passwordManagerAccess != null ||
                  x?.savedCredentialSelectionId != null ||
                  x?.trackFillStatus === !0,
                selectionId: x?.savedCredentialSelectionId,
              }
              ;(0, c.q3)(e.queryClient, t.userId, t.accountId, t.conversationId, t.challengeId)
              let y = await h()
                  .claim(t, v)
                  .catch(async (a) => {
                    throw (
                      n() && (0, d.z)(e, "recovery_claim", a, v.operationId),
                      await g(e, t, {
                        ...f(v),
                        fill_status: "unavailable",
                        save_status: "not_requested",
                        statusAvailable: !1,
                      }),
                      a
                    )
                  }),
                b = f(y.operation)
              if (!y.created) return (e.query.setData(u, t, b), n() ? b : void 0)
              if (!n())
                return void (await g(e, t, {
                  ...b,
                  fill_status: "cancelled",
                  save_status: "not_requested",
                  statusAvailable: !1,
                }))
              l()
              try {
                o = await (0, c.Nq)({
                  ...s,
                  choice: x,
                  conversationId: t.conversationId,
                  challengeId: t.challengeId,
                  operationId: v.operationId,
                  trace: r?.trace,
                })
              } catch (a) {
                ;(x?.passwordManagerAccess != null && p(e, t) && (0, d.z)(e, "fill", a, v.operationId),
                  (o = (0, c.WC)(a, x)
                    ? { ...b, fill_status: "unavailable", save_status: "not_requested", statusAvailable: !1 }
                    : b))
              }
              return m(e, t, o)
            })()
            return (
              null != o &&
                r?.setAttributes?.({
                  "browser_auth.fill_status": o.fill_status ?? "unknown",
                  "browser_auth.save_status": o.save_status ?? "unknown",
                  "browser_auth.status_available": !1 !== o.statusAvailable,
                }),
              r?.finish(void 0, null == o ? { outcome: "aborted", reason: "cancelled" } : (0, c.JU)(o.fill_status)),
              o
            )
          } catch (e) {
            throw (r?.finish(void 0, { outcome: "failure", reason: "request_failed" }), e)
          }
        },
        n8: function (e, t, a, n, l) {
          return null == e || null == t || null == n
            ? null
            : { userId: e, accountId: t, hostId: a, conversationId: n, challengeId: l }
        },
      },
    )
  },
  ShnJ(e, t, a) {
    var n = a("DBCl"),
      l = a("ASxG"),
      o = a("d7QT"),
      i = a("Kwur"),
      r = a("jScN"),
      s = a("eShZ")
    function d(e, t, a, n) {
      return ["browser-auth-credential-availability", e, t, a, n]
    }
    let c = l.Ikc({
        credential_id: l.YjP(),
        origin: l.YjP(),
        account_label: l.YjP(),
        created_at: l.aig(),
        selection_id: l.YjP(),
        expires_at: l.aig(),
      }),
      u = l.Ikc({
        available: l.zMY(),
        save_enabled: l.zMY(),
        reuse_enabled: l.zMY(),
        manual_save_supported: l.zMY().optional(),
        manual_fill_recovery_supported: l.zMY().optional(),
        manual_save_fields: l.Ikc({ username: l.YjP().nullish(), password: l.YjP() }).nullish(),
        manual_save_fixed_account_fields: l.Ikc({ password: l.YjP() }).nullish(),
        items: l.YOg(c),
        next_cursor: l.YjP().nullish(),
      }),
      p = l.k5n(["not_requested", "saved", "failed", "unknown"]),
      m = l.Ikc({ operation_id: l.YjP(), fill_status: l.KCZ([i.k$.shape.status, l.euz("unknown")]), save_status: p }),
      g = l.gMt("interaction", [
        l.Ikc({
          provider: l.euz("openai_passwords"),
          interaction: l.euz("inline"),
          save_enabled: l.zMY(),
          manual_save_fields: l.Ikc({ username: l.YjP().nullish(), password: l.YjP() }).nullable(),
          manual_save_fixed_account_fields: l.Ikc({ password: l.YjP() }).nullable().default(null),
          items: l.YOg(c),
          next_cursor: l.YjP().nullable(),
        }),
        l.Ikc({
          provider: l.euz("onepassword"),
          interaction: l.euz("external"),
          state: l.k5n(["disconnected", "connecting", "connected", "failed", "reconnect_required"]),
          enrollment_url: l.YjP().nullable(),
        }),
      ]),
      h = l.Ikc({
        browser_available: l.zMY().nullish(),
        default_password_manager: l.k5n(["openai_passwords", "onepassword"]).nullish().catch(null),
        access_request: l
          .Ikc({
            provider: l.YjP(),
            operation_id: l.YjP(),
            access_handle: l.YjP(),
            state: l.k5n(["waiting", "approved", "denied", "failed", "expired"]),
            expires_at: l.aig(),
            approval_url: l.YjP().nullish(),
          })
          .nullish(),
        manual_fill_recovery_supported: l.zMY(),
        operation_id: l.YjP().nullable(),
        operation: m.nullable(),
        password_managers: l
          .YOg(l.Ikc({ provider: l.YjP() }).loose())
          .transform((e) => e.filter((e) => g.options.some((t) => t.shape.provider.safeParse(e.provider).success)))
          .pipe(l.YOg(g)),
      })
    function f(e) {
      return e?.passwordManagerAccess != null
        ? "password_manager"
        : e?.savedCredentialSelectionId != null
          ? "saved"
          : "manual"
    }
    async function x(e, t, a, n) {
      let l = (0, r.m7)({
        attributes: { "browser_auth.phase": e, ...(null == t ? {} : { "browser_auth.trigger": t }) },
        name: "codex.browser_auth.candidates",
        trace: a,
      })
      try {
        let e = await n()
        return (l?.finish(void 0, { outcome: "success", reason: "completed" }), e)
      } catch (e) {
        throw (v(l, e), e)
      }
    }
    function v(e, t) {
      let a = "request_failed"
      ;(t instanceof o.G
        ? (a = "invalid_response")
        : t instanceof Error && "TimeoutError" === t.name
          ? (a = "timeout")
          : t instanceof Error && "AbortError" === t.name && (a = "cancelled"),
        e?.finish(void 0, { outcome: "cancelled" === a ? "aborted" : "failure", reason: a }))
    }
    function y(e) {
      return "submitted" === e
        ? { outcome: "success", reason: e }
        : "declined" === e || "cancelled" === e
          ? { outcome: "aborted", reason: e }
          : "unavailable" === e || "submission_failed" === e || "unknown" === e
            ? { outcome: "failure", reason: e }
            : { outcome: "expected", reason: e }
    }
    a.d(
      t,
      {},
      {
        GI: async function (e, t, a) {
          return x("candidates", void 0, void 0, async () =>
            u.parse(
              await i.Request.safePost("/flora/browser/credential-candidates", {
                additionalHeaders: { "X-OpenAI-Cloud-Vault-Credential-Fields-Version": "2" },
                requestBody: { conversation_id: e, challenge_id: t, cursor: a },
              }),
            ),
          )
        },
        JU: y,
        Nq: async function ({
          conversationId: e,
          challengeId: t,
          operationId: a,
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
                  operation_id: a,
                  password_manager_access: c.passwordManagerAccess,
                }
              : c?.savedCredentialSelectionId != null
                ? {
                    conversation_id: e,
                    challenge_id: t,
                    operation_id: a,
                    saved_credential_selection_id: c.savedCredentialSelectionId,
                  }
                : {
                    conversation_id: e,
                    challenge_id: t,
                    operation_id: c?.remember || c?.trackFillStatus ? a : void 0,
                    fields: o,
                    selected_option: d,
                    remember: c?.remember || void 0,
                    save_fields: c?.remember ? c.saveFields : void 0,
                  }
          let h = f(c),
            x = (0, r.m7)({
              attributes: {
                "browser_auth.phase": "form_fill",
                "browser_auth.submission_mode": h,
                "http.request.method": "POST",
              },
              name: "codex.browser_auth.form_fill",
              trace: u,
            })
          try {
            g = i.k$.extend({ save_status: p.nullish(), operation_id: l.YjP().nullish() }).parse(
              await i.Request.safePost(n.d33, {
                additionalHeaders: (function (e) {
                  if (null != e)
                    return {
                      traceparent: e.trace.traceparent,
                      ...(null == e.trace.tracestate ? {} : { tracestate: e.trace.tracestate }),
                    }
                })(x),
                signal: AbortSignal.timeout(c?.passwordManagerAccess != null ? 13e4 : 3e4),
                requestBody: m,
              }),
            )
          } catch (e) {
            throw (
              e instanceof s.FetchError &&
                null != e.responseStatus &&
                x?.setAttributes?.({ "http.response.status_code": e.responseStatus }),
              v(x, e),
              e
            )
          }
          if (null != g.operation_id && g.operation_id !== a)
            throw (
              x?.finish(void 0, { outcome: "failure", reason: "invalid_response" }),
              Error("Browser sign-in operation did not match")
            )
          let b = {
            operation_id: a,
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
            x?.setAttributes?.({
              "browser_auth.fill_status": b.fill_status,
              "browser_auth.save_status": b.save_status,
            }),
            x?.finish(void 0, y(b.fill_status)),
            b
          )
        },
        RS: async function (e, t, a, n) {
          return x("availability", a, n, async () =>
            u.parse(
              await i.Request.safeGet("/flora/browser/credential-availability", {
                signal: AbortSignal.timeout(3e3),
                additionalHeaders: {
                  "X-OpenAI-Cloud-Vault-Check-Trigger": a,
                  "X-OpenAI-Cloud-Vault-Credential-Fields-Version": "2",
                },
                parameters: { query: { conversation_id: e, challenge_id: t } },
              }),
            ),
          )
        },
        WC: function (e, t) {
          return (
            e instanceof s.FetchError &&
            ([401, 403, 404, 422].includes(e.responseStatus ?? 0) ||
              (400 === e.responseStatus && t?.savedCredentialSelectionId == null) ||
              (t?.passwordManagerAccess != null && [409, 410].includes(e.responseStatus ?? 0)))
          )
        },
        XC: async function (e, t, a, n) {
          let l = m.parse(
            await i.Request.safePost("/flora/browser/credential-operations/{operation_id}/reconcile", {
              parameters: { path: { operation_id: t } },
              requestBody: { conversation_id: e, challenge_id: a, selection_id: n },
            }),
          )
          if (l.operation_id !== t) throw Error("Browser sign-in operation did not match")
          return l
        },
        cP: async function (e, t, a) {
          let n = AbortSignal.timeout(3e4),
            l = (0, r.m7)({ attributes: { "browser_auth.phase": "prepare" }, name: "codex.browser_auth.prepare" })
          try {
            let o = h.parse(
              await i.Request.safePost("/flora/browser/auth/prepare", {
                signal: null == a ? n : AbortSignal.any([a, n]),
                requestBody: { conversation_id: e, challenge_id: t },
              }),
            )
            return (l?.finish(void 0, { outcome: "success", reason: "completed" }), o)
          } catch (e) {
            throw (v(l, e), e)
          }
        },
        mK: d,
        q3: function (e, t, a, n, l) {
          for (let o of [!1, !0])
            e.removeQueries({
              queryKey: [o ? "messaging-credential-preparation" : "browser-auth-preparation", t, a, n, l],
              exact: !0,
            })
          e.removeQueries({ queryKey: d(t, a, n, l), exact: !0 })
        },
        qv: f,
        xM: function (e, t, a) {
          if (null != e.accountUsername || null != a)
            return null != e.accountUsername &&
              null != a &&
              null == t &&
              1 === e.fields.length &&
              e.fields[0]?.id === a.password
              ? { password: a.password }
              : void 0
          if (null == t || t.username === t.password) return
          let n = e.fields.filter(({ id: e }) => e === t.password)
          return null == t.username
            ? 1 === e.fields.length && 1 === n.length
              ? { password: t.password }
              : void 0
            : 1 === e.fields.filter(({ id: e }) => e === t.username).length && 1 === n.length
              ? { username: t.username, password: t.password }
              : void 0
        },
      },
    )
  },
  ZbJz(e, t, a) {
    var n = a("HbVK"),
      l = a("pLGj"),
      o = a("Kwur"),
      i = a("eShZ")
    a.d(
      t,
      {},
      {
        t: async function (e, t, a, r) {
          let s = URL.parse(e.origin)
          if (s?.protocol !== "https:" || s.origin !== e.origin) throw new n.me()
          try {
            return await o.Request.safePost("/browser/auth/store-credentials", {
              retry: "never",
              expectedIdentity: { userId: e.userId, accountId: e.accountId },
              assertRequestCurrent: () => {
                if (!r()) throw new DOMException("Sign-in request changed", "AbortError")
              },
              additionalHeaders: { "x-openai-use-sheep": "1" },
              requestBody: {
                origin: e.origin,
                operation_id: a,
                ...("passwordManagerAccess" in t
                  ? { password_manager_access: t.passwordManagerAccess, remember: !1 }
                  : {
                      fields: (function ({ fields: e, definitions: t }) {
                        let a = Object.keys(e),
                          o = (0, l.dzw)(
                            t.filter(({ id: t }) => Object.hasOwn(e, t)),
                            !0,
                          ),
                          i = 1 === a.length ? a[0] : o?.password.id,
                          r = null == i ? void 0 : e[i],
                          s = o?.username == null ? void 0 : e[o.username.id]
                        if (null == r || a.length !== (null == s ? 1 : 2)) throw new n.me()
                        return { password: r, ...(null == s ? {} : { username: s }) }
                      })(t),
                      remember: t.remember,
                    }),
              },
            })
          } catch (e) {
            if (e instanceof i.FetchError && "network" !== e.errorKind) {
              let t = e.responseStatus
              if (410 === t) throw new n.Tm()
              if (409 === t) throw new n.vT()
              if (null != t && t >= 400 && t < 500 && ![408, 425, 429].includes(t)) throw new n.me()
            }
            throw e
          }
        },
      },
    )
  },
  bdLz(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("Sm6l"),
      i = a("bVeK")
    a.d(
      t,
      {},
      {
        m: function (e) {
          let t,
            a,
            r,
            s,
            d,
            c,
            u,
            p = (0, l.c)(15)
          p[0] !== e
            ? (({ children: t, loading: a, size: s, type: d, ...r } = e),
              (p[0] = e),
              (p[1] = t),
              (p[2] = a),
              (p[3] = r),
              (p[4] = s),
              (p[5] = d))
            : ((t = p[1]), (a = p[2]), (r = p[3]), (s = p[4]), (d = p[5]))
          let m = void 0 === s ? "composerSm" : s,
            g = void 0 === d ? "submit" : d
          return (
            p[6] !== t || p[7] !== a
              ? ((c = a ? null : (t ?? (0, n.jsx)(i.npO, {}))), (p[6] = t), (p[7] = a), (p[8] = c))
              : (c = p[8]),
            p[9] !== a || p[10] !== r || p[11] !== m || p[12] !== c || p[13] !== g
              ? ((u = (0, n.jsx)(o.$, {
                  ...r,
                  loading: a,
                  radius: "full",
                  size: m,
                  type: g,
                  uniform: !0,
                  children: c,
                })),
                (p[9] = a),
                (p[10] = r),
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
  oKNs(e, t, a) {
    a.d(t, { P: () => p, l: () => u })
    var n = a("ASxG"),
      l = a("Bl6U"),
      o = a("MrGp"),
      i = a("V3rO"),
      r = a("DBCl"),
      s = a("OOaz"),
      d = a("C9uP")
    let c = n.KCZ([
        d.D,
        n.Ikc({ kind: n.euz("local-draft"), clientThreadId: n.YjP().refine(r.L$F), hostId: n.YjP() }),
        n.Ikc({ kind: n.euz("chatgpt-draft"), conversationId: n.YjP().transform(s.TF) }),
      ]),
      u = n.Ikc({
        accountId: n.YjP().nullable(),
        chat: c,
        page: n.Ikc({ accountId: n.YjP(), pageId: n.YjP() }).nullable(),
      })
    function p(e, t) {
      if ("local-draft" === t.kind) {
        let a = e(i.Tl, t.clientThreadId)
        return null == a ? t : { kind: "local", conversationId: a, hostId: e(l.qX, a) ?? t.hostId }
      }
      if ("chatgpt-draft" === t.kind) {
        let a = e(o.jS, t.conversationId)
        return null == a ? t : { kind: "chatgpt", conversationId: a, title: "" }
      }
      return t
    }
  },
  oaG4(e, t, a) {
    a.r(t)
    var n = a("ABep"),
      l = a("DBCl"),
      o = a("tl5a"),
      i = a("myH1"),
      r = a("QcW8"),
      s = a("ZU27"),
      d = a("EpL9"),
      c = a("SPnB"),
      u = a("OtLV"),
      p = a("B0Wx"),
      m = a("OOaz"),
      g = a("rPIX"),
      h = a("fwnP"),
      f = a("bVeK"),
      x = a("Bbed"),
      v = a("svjy"),
      y = a("sjCL"),
      b = a("YNMW"),
      w = a("VbOM"),
      _ = a("oKNs")
    let I = (0, x._)(
        async () =>
          (
            await Promise.all([
              a.e(222773),
              a.e(648165),
              a.e(207991),
              a.e(446194),
              a.e(854102),
              a.e(906567),
              a.e(198667),
              a.e(729502),
              a.e(984404),
              a.e(579325),
              a.e(712262),
              a.e(978338),
              a.e(904485),
              a.e(777710),
              a.e(923712),
              a.e(322496),
              a.e(53010),
              a.e(644312),
              a.e(141674),
              a.e(652500),
              a.e(164460),
              a.e(877652),
              a.e(214739),
              a.e(678690),
              a.e(947437),
              a.e(901175),
              a.e(377960),
              a.e(843292),
              a.e(752862),
              a.e(49871),
              a.e(150547),
              a.e(255843),
              a.e(314719),
              a.e(153694),
              a.e(679632),
              a.e(810979),
              a.e(921241),
              a.e(583579),
              a.e(433661),
              a.e(529755),
              a.e(631141),
              a.e(293398),
              a.e(960583),
              a.e(778901),
              a.e(301030),
              a.e(77282),
              a.e(203414),
              a.e(716574),
              a.e(92253),
              a.e(273709),
              a.e(866709),
              a.e(486890),
              a.e(820714),
              a.e(587936),
              a.e(172184),
              a.e(417402),
              a.e(612928),
              a.e(887074),
              a.e(452048),
              a.e(684598),
              a.e(198911),
              a.e(299268),
              a.e(536061),
              a.e(79584),
              a.e(646093),
              a.e(847740),
              a.e(434505),
              a.e(877217),
              a.e(944124),
              a.e(202588),
              a.e(428069),
              a.e(839700),
              a.e(835890),
              a.e(183204),
              a.e(394554),
              a.e(895612),
              a.e(992177),
              a.e(513017),
              a.e(154721),
              a.e(636373),
              a.e(82894),
              a.e(980572),
              a.e(76344),
              a.e(640683),
              a.e(212545),
              a.e(90304),
              a.e(507080),
              a.e(289491),
              a.e(973904),
              a.e(390843),
              a.e(827769),
              a.e(897450),
              a.e(963703),
              a.e(963028),
              a.e(812107),
              a.e(642253),
              a.e(581568),
              a.e(264443),
              a.e(505785),
              a.e(806265),
              a.e(330283),
              a.e(777478),
              a.e(977544),
              a.e(288383),
              a.e(802912),
              a.e(534377),
              a.e(707980),
              a.e(308581),
              a.e(959530),
              a.e(772548),
              a.e(172601),
              a.e(215774),
              a.e(443657),
              a.e(855699),
              a.e(336604),
              a.e(540250),
              a.e(305126),
              a.e(331405),
              a.e(947156),
              a.e(632620),
              a.e(285062),
              a.e(898586),
              a.e(728869),
              a.e(523871),
              a.e(228260),
              a.e(233836),
              a.e(151898),
              a.e(637153),
              a.e(174249),
              a.e(278282),
              a.e(585970),
              a.e(734464),
              a.e(145109),
              a.e(422281),
              a.e(796677),
              a.e(184275),
              a.e(852725),
              a.e(687151),
              a.e(221160),
              a.e(966320),
              a.e(184432),
              a.e(618072),
              a.e(790065),
            ]).then(a.bind(a, "ROzU"))
          ).WorkspaceChatInstance,
      ),
      k = (0, x._)(async () => (await a.e(652391).then(a.bind(a, "UaNf"))).WorkspaceChatThumbnail),
      S = (0, d.v)(w.c.kind, I, {
        ...w.c,
        open: j,
        getContextMenuItems: (e, { onNewChat: t }) => [{ id: "new-chat", message: u.D.newChat, onSelect: t }],
        durableRoute: {
          ...w.c.durableRoute,
          serialize: (e, { params: t }) => ({
            kind: "content-chat",
            payloadVersion: 1,
            params: { ...t, chat: (0, _.P)(e.get, t.chat) },
          }),
          restore: ({
            scope: e,
            descriptor: t,
            target: a,
            revealAndFocus: n,
            isDisconnected: l,
            insertPosition: o,
          }) => {
            let i = _.l.safeParse(t.params)
            return (
              1 === t.payloadVersion &&
              !l() &&
              "right" === a &&
              i.success &&
              i.data.accountId === e.get(c.chatGptAuthenticatedAccountId$) &&
              null != C(e, i.data, { tabId: t.tabId, insertPosition: o, revealAndFocus: n })
            )
          },
        },
        isVisible: (e) => e.get(r.dX),
        hasUnreadChat: (e, { params: t }) => {
          let a = (0, _.P)(e, t.chat)
          return "local" === a.kind
            ? (0, i._W)(e, a.conversationId, a.hostId)
            : "local-draft" !== a.kind && e(h.oZ, a.conversationId)
        },
        getTitle: (e, { params: t }) => A(e, t),
        getIcon: () => (0, n.jsx)(f.OHc, {}),
        retainWhileInactive: () => !0,
        showComposerInFullWidth: () => !1,
        dropDestinations: ["left", "right"],
        renderThumbnail: (e, t) => (0, n.jsx)(k, { title: t.title }),
        sync: (e, { params: t }, a) =>
          e.watch((n) => {
            let l = (0, _.P)(n.get, t.chat)
            s.It.updateTab(e, a.tabId, {
              title: A(n, { ...t, chat: l }),
              durableRoute: { kind: "content-chat", payloadVersion: 1, params: { ...t, chat: l } },
            })
          }),
      })
    function j(e, t = {}) {
      let a = e.get(g.Px),
        n = a?.kind === "codex" ? a : a?.page,
        o =
          (t.work ?? (null != n && e.get(y.Oh, n)))
            ? { kind: "chatgpt-draft", conversationId: (0, m.co)() }
            : {
                kind: "local-draft",
                clientThreadId: (0, l.xa2)(),
                hostId: e.value.persistentWorkspace?.session.hostId ?? "local",
              }
      return C(
        e,
        {
          accountId: e.get(c.chatGptAuthenticatedAccountId$),
          chat: o,
          page: null == n ? null : { accountId: n.accountId, pageId: n.pageId },
        },
        t,
      )
    }
    function C(
      e,
      t,
      {
        tabId: a = `workspace-chat:${crypto.randomUUID()}`,
        replaceTabId: n,
        insertPosition: l,
        revealAndFocus: o = !0,
      } = {},
    ) {
      return e.get(r.dX)
        ? (s.It.openTab(e, S, {
            id: a,
            props: {
              params: t,
              onNewChat: () => {
                j(e)
              },
              onDeleteConversation: () => {
                s.It.closeTab(e, a, { recordCloseUndo: !1 })
              },
            },
            replaceTabId: n,
            insertPosition: l,
            revealAndFocus: o,
            allowDuringThreadCreation: !0,
            requiresWorkspaceReady: !1,
            workspaceKey: e.value.persistentWorkspace?.key,
          }),
          null == e.get(s.It.tabById$, a))
          ? null
          : (o && (e.set(r.ab, !1), (0, b.tH)(e)), a)
        : null
    }
    function A(e, t) {
      let a,
        n = (0, _.P)(e.get, t.chat)
      return (
        "local" === n.kind
          ? (a = e.get(o.HX, { hostId: n.hostId, threadId: n.conversationId }))
          : "local-draft" !== n.kind && (a = e.get(p.T7, n.conversationId)),
        a?.trim() ||
          ("chatgpt" === n.kind ? n.title.trim() : "") ||
          e.get(v.g).formatMessage({ id: "threadWorkspace.tab.chat", defaultMessage: "Chat" })
      )
    }
    a.d(
      t,
      {},
      {
        getWorkspaceChatLauncherAction: function (e, t) {
          return {
            tabType: S,
            id: "workspace-chat",
            icon: (0, n.jsx)(f.TmP, {}),
            title: t.formatMessage({ id: "threadWorkspace.newTab.chat", defaultMessage: "Chat" }),
            onSelect: (t) => {
              j(e, { replaceTabId: t })
            },
          }
        },
        openNewWorkspaceChat: j,
        openWorkspaceChatInstance: C,
      },
    )
  },
  zjpG(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("on57"),
      i = a("oyxz")
    a.d(
      t,
      {},
      {
        a: function (e) {
          let t,
            a,
            r,
            s = (0, l.c)(5),
            { className: d } = e
          return (
            s[0] !== d ? ((t = (0, o.A)("last:hidden", d)), (s[0] = d), (s[1] = t)) : (t = s[1]),
            s[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, n.jsx)(i.A, { id: "codex.ui.bulletSeparator", defaultMessage: "\xb7" })), (s[2] = a))
              : (a = s[2]),
            s[3] !== t
              ? ((r = (0, n.jsx)("span", { "aria-hidden": !0, className: t, children: a })), (s[3] = t), (s[4] = r))
              : (r = s[4]),
            r
          )
        },
      },
    )
  },
  GKsW(e, t, a) {
    var n = a("SRbQ"),
      l = a("ABep"),
      o = a("QosV"),
      i = a("qmMi"),
      r = a("zd8w"),
      s = a("GaA7"),
      d = a("OWtl"),
      c = a("tSEg"),
      u = a("n5oN")
    let p = (0, i.vP)(d.u, () => [])
    function m(e) {
      let t,
        a,
        n,
        l,
        c,
        u,
        m = (0, o.c)(13),
        { title: x, nativeTitle: v } = e,
        y = void 0 === v ? x : v,
        b = (0, i.gh)(d.u),
        [w] = (0, r.useState)(g)
      return (
        m[0] !== y || m[1] !== w || m[2] !== b || m[3] !== x
          ? ((t = () => {
              if (s.appServices?.windowTitle == null) return
              let e = { owner: w, title: null == x ? void 0 : (y ?? null) }
              ;(b.set(p, (t) => (t.some((e) => e.owner === w) ? t.map((t) => (t.owner === w ? e : t)) : [...t, e])),
                f(b))
            }),
            (a = [b, w, x, y]),
            (m[0] = y),
            (m[1] = w),
            (m[2] = b),
            (m[3] = x),
            (m[4] = t),
            (m[5] = a))
          : ((t = m[4]), (a = m[5])),
        (0, r.useEffect)(t, a),
        m[6] !== w || m[7] !== b
          ? ((n = () => () => {
              s.appServices?.windowTitle != null && (b.set(p, (e) => e.filter((e) => e.owner !== w)), f(b))
            }),
            (l = [b, w]),
            (m[6] = w),
            (m[7] = b),
            (m[8] = n),
            (m[9] = l))
          : ((n = m[8]), (l = m[9])),
        (0, r.useEffect)(n, l),
        m[10] !== x
          ? ((c = () => {
              if (null == x) return
              let e = document.title
              h(x)
              let t = document.title
              return () => {
                document.title === t && h(e)
              }
            }),
            (u = [x]),
            (m[10] = x),
            (m[11] = c),
            (m[12] = u))
          : ((c = m[11]), (u = m[12])),
        (0, r.useEffect)(c, u),
        null
      )
    }
    function g() {
      return Symbol()
    }
    function h(e) {
      let t = document.head.querySelector("title")?.firstChild
      t instanceof Text && null == t.nextSibling ? (t.data = e) : (document.title = e)
    }
    function f(e) {
      let t = { stack: [], error: void 0, hasError: !1 }
      try {
        let a = e.get(p).findLast((e) => void 0 !== e.title)
        ;(0, n.mS)(t, s.appServices.windowTitle?.setTitle(a?.title ?? null), !1)
      } catch (e) {
        ;((t.error = e), (t.hasError = !0))
      } finally {
        ;(0, n.hk)(t)
      }
    }
    a.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            a = (0, o.c)(2),
            { title: n } = e,
            r = (0, i.gh)(c.GD),
            s = (0, i._U)(u.m, `${r.value.pathname}${r.value.search ?? ""}`),
            d = n ?? s
          return (a[0] !== d ? ((t = (0, l.jsx)(m, { title: d })), (a[0] = d), (a[1] = t)) : (t = a[1]), t)
        },
        Q: m,
      },
    )
  },
  O6fx(e, t, a) {
    var n = a("Wyro"),
      l = a.n(n)
    a.d(
      t,
      {},
      {
        y: function (e, t) {
          return null != t
            ? t
            : null == e
              ? []
              : Object.entries(e).map(([e, t]) => ({ name: e, value: t, displayName: l()(e.trim()) }))
        },
      },
    )
  },
  wSXO(e, t, a) {
    var n = a("qmMi"),
      l = a("svjy"),
      o = a("q3j5"),
      i = a("imTH"),
      r = a("jiwy"),
      s = a("OWtl"),
      d = a("amW0")
    let c = (0, n.un)(s.u, ({ get: e }) =>
        e(r.VK)
          ? e(i.Tr)?.flatMap((t) => {
              let a = p(t, e(l.g))
              return null == a ? [] : [a]
            })
          : [],
      ),
      u = (0, n.un)(s.u, ({ get: e }) => e(c)?.find((e) => e.isPrimary))
    function p(e, t) {
      let a = e.active_root_thread_id
      if (null == a || "active" !== e.status) return
      let n = (0, o.x)(e.display_name)
      return {
        orbitId: e.id,
        isPrimary: !0 === e.is_primary,
        isPersonal: "shared" !== e.scope && null == e.service_account_account_user_id,
        threadId: a,
        isDefault: n,
        name: n ? t.formatMessage(d.z) : e.display_name,
      }
    }
    a.d(t, {}, { DE: u, jl: p, tl: c })
  },
  opxc(e, t, a) {
    a.d(t, { C: () => _ })
    var n = a("SZCv"),
      l = a.n(n),
      o = a("SPnB"),
      i = a("v9CB"),
      r = a("Yp9l"),
      s = a("qreq"),
      d = a("uQmz"),
      c = a("CguJ"),
      u = a("x74N"),
      p = a("ASxG"),
      m = a("YAwS")
    let g = p.Ikc({
        uploadId: p.YjP(),
        contentSha256: p.YjP(),
        name: p.YjP(),
        mime: p.YjP(),
        size: p.aig(),
        fileId: p.YjP().nullable(),
        expiresAt: p.YjP().nullable(),
        ready: p.zMY(),
        ownerId: p.YjP(),
        createdAt: p.aig(),
      }),
      h = p.Ikc({
        roomId: p.YjP(),
        requestId: p.YjP(),
        text: p.YjP(),
        attachmentIds: p.YOg(p.YjP()).optional(),
        replyToMessageId: p.YjP().optional(),
        messageMetadata: p.g1P(p.YjP(), p.L5J()).optional(),
        pageContext: p.Ikc({ page_id: p.YjP().nullable() }).optional(),
      }),
      f = p.Ikc({
        request: h,
        createdAt: p.YjP(),
        comments: p.YOg(p.Ikc({ id: p.YjP(), digest: p.YjP() })),
        submitted: p.zMY(),
        queued: p.zMY(),
        uploadIds: p.YOg(p.YjP()),
        ownerId: p.YjP(),
        sourceId: p.YjP().optional(),
        sourceSha256: p.YjP().optional(),
      }),
      x = p.Ikc({ uploads: p.YOg(g), sends: p.YOg(f) }),
      v = p.g1P(p.YjP(), p.Ikc({ roomId: p.YjP(), bytes: p.aig() })),
      y = p
        .Ikc({ version: p.euz(2), files: v, rooms: p.g1P(p.YjP(), p.Ikc({ count: p.aig(), bytes: p.aig() })) })
        .default(() => ({ version: 2, files: {}, rooms: {} }))
    class b extends Error {}
    class w extends Error {}
    function _({ scope: e, media: t, signal: a, roomId: n, accountId: l, userId: g, intl: h }) {
      let f = (function (e, t, a, n) {
          let l = `orbit-annotation-uploads-v1:${JSON.stringify([e, t])}`,
            o = `${l}:room:${a}`,
            i = `${l}:quota`,
            r = (e) => `${l}:file:${e}`,
            s = (e) => (null == e ? { uploads: [], sends: [] } : x.parse(e))
          function d(e, t, n) {
            if (Object.keys(e).length >= 128 || Object.values(e).reduce((e, t) => e + t.bytes, n) > 0xa000000)
              throw new w("Annotation upload storage is full")
            e[t] = { roomId: a, bytes: n }
          }
          let c = (e) =>
              (0, m.accessBrowserHostRecordDurably)(r(e), (e) => ({
                result: p
                  .IeY((e) => ArrayBuffer.isView(e))
                  .transform((e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
                  .parse(e),
              })),
            u = async () => {
              let e = [
                ...new Set(
                  Object.values(
                    (await (0, m.accessBrowserHostRecordDurably)(i, (e) => ({ result: y.parse(e) }))).files,
                  ).map((e) => `${l}:room:${e.roomId}`),
                ),
              ]
              await (0, m.Cf)([i, ...e], (t) => {
                let a = y.parse(t.get(i)),
                  n = new Map(),
                  l = []
                for (let o of e) {
                  let e = s(t.get(o)),
                    i = new Set(e.sends.flatMap((e) => e.uploadIds)),
                    d = e.uploads.filter(
                      (e) =>
                        !!(e.createdAt > Date.now() - 864e5 || i.has(e.uploadId)) ||
                        (delete a.files[e.uploadId], l.push(r(e.uploadId)), !1),
                    )
                  d.length !== e.uploads.length && n.set(o, { ...e, uploads: d })
                }
                return (n.set(i, a), { updates: n, deletes: l, result: void 0 })
              })
            }
          return {
            read: async () => {
              let e = await (0, m.accessBrowserHostRecordDurably)(o, (e) => ({ result: s(e) }))
              return (n?.(e.sends), e)
            },
            update: async (e, t) => {
              let l,
                c = () =>
                  (0, m.Cf)([o, i], (n) => {
                    var l
                    let c = s(n.get(o)),
                      u = new Set(c.sends.map((e) => e.request.requestId)),
                      p = e(c),
                      m = y.parse(n.get(i))
                    if (
                      (p.sends.length > 0
                        ? (m.rooms[a] = {
                            count: (l = p.sends).length,
                            bytes: new TextEncoder().encode(JSON.stringify(l)).byteLength,
                          })
                        : delete m.rooms[a],
                      p.sends.some((e) => !u.has(e.request.requestId)) &&
                        (Object.values(m.rooms).reduce((e, t) => e + t.count, 0) > 64 ||
                          Object.values(m.rooms).reduce((e, t) => e + t.bytes, 0) > 8388608 ||
                          new TextEncoder().encode(JSON.stringify(p)).byteLength > 8388608))
                    )
                      throw new b("Annotation upload journal is full")
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
                        (d(m.files, t.id, t.bytes.byteLength), g.set(r(t.id), t.bytes)),
                      g.set(o, p),
                      g.set(i, m),
                      { updates: g, deletes: f.map(r), result: p }
                    )
                  })
              try {
                l = await c()
              } catch (e) {
                if (!(e instanceof w)) throw e
                ;(await u(), (l = await c()))
              }
              return (n?.(l.sends), l)
            },
            source: c,
            async add(e, t, a) {
              let n = crypto.randomUUID(),
                l = new Uint8Array(await e.arrayBuffer()),
                c = () =>
                  (0, m.Cf)([o, i], (c) => {
                    let u = s(c.get(o)),
                      p = y.parse(c.get(i))
                    d(p.files, n, l.byteLength)
                    let m = {
                      uploadId: n,
                      contentSha256: t,
                      name: e.name,
                      mime: e.type,
                      size: e.size,
                      fileId: null,
                      expiresAt: null,
                      ready: !1,
                      ownerId: a,
                      createdAt: Date.now(),
                    }
                    return {
                      updates: new Map([
                        [o, { ...u, uploads: [...u.uploads, m] }],
                        [i, p],
                        [r(n), l],
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
        })(l, g, n, (t) => (0, c.Q)(e, l, g, n, t)),
        v = crypto.randomUUID(),
        k = new Map(),
        S = new Map(),
        j = new Set(),
        C = new Set(),
        A = new Map(),
        M = new Map()
      function T() {
        if (
          (a.throwIfAborted(),
          e.get(o.chatGptAuthenticatedAccountId$) !== l || e.get(o.chatGptAuthenticatedUserId$) !== g)
        )
          throw (0, s.t)(e)
      }
      function P(e) {
        return e
          ? new i.oy(
              h.formatMessage({
                id: "orbit.browserAnnotations.uploadPending",
                defaultMessage: "Couldn't finish uploading these annotations. Your message is saved; try sending again",
              }),
              void 0,
              { retryWithSameRequest: e, deliveryUnknown: !1 },
            )
          : new i.oy(
              h.formatMessage({
                id: "orbit.browserAnnotations.prepareUnavailable",
                defaultMessage: "Couldn't prepare these annotations. Your comments are still available; try again",
              }),
            )
      }
      async function E(e) {
        T()
        let l = k.get(e)
        return (
          null == l &&
            ((l = (async () => {
              let l = await (async function (e) {
                let t = (await f.read()).uploads.find((t) => t.uploadId === e)
                if (null == t) throw new DOMException("Annotation upload is no longer retained", "AbortError")
                return t
              })(e)
              if (null != l.fileId) return l
              let o = await t.reserveUpload(
                n,
                {
                  upload_id: e,
                  name: l.name,
                  mime_type: l.mime || "application/octet-stream",
                  content_sha256: l.contentSha256,
                },
                a,
              )
              ;(j.add(e), T())
              let i = (
                await f.update((t) => ({
                  ...t,
                  uploads: t.uploads.map((t) =>
                    t.uploadId === e ? { ...t, fileId: o.id, expiresAt: o.expires_at, ready: "ready" === o.status } : t,
                  ),
                }))
              ).uploads.find((t) => t.uploadId === e)
              if (null == i) throw new DOMException("Annotation upload is no longer retained", "AbortError")
              return i
            })()),
            k.set(e, l),
            l.finally(() => k.delete(e)).catch(() => {})),
          l
        )
      }
      async function N(e) {
        T()
        let l = S.get(e)
        return (
          null == l &&
            ((l = (async () => {
              let l = await E(e)
              if (!j.has(e) || C.has(e) || (!l.ready && null != l.expiresAt && Date.parse(l.expiresAt) <= Date.now())) {
                let o = await t.getUpload(n, e, a).catch((e) => {
                  if (l.ready || !(e instanceof i.Kr) || 404 !== e.status || e.deliveryUnknown) throw e
                })
                if (
                  ((null == o || "expired" === o.status) &&
                    (o = await t.reserveUpload(
                      n,
                      {
                        upload_id: e,
                        name: l.name,
                        mime_type: l.mime || "application/octet-stream",
                        content_sha256: l.contentSha256,
                      },
                      a,
                    )),
                  o.id !== l.fileId || "expired" === o.status)
                )
                  throw P(!0)
                ;((l =
                  (
                    await f.update((t) => ({
                      ...t,
                      uploads: t.uploads.map((t) =>
                        t.uploadId === e ? { ...t, ready: "ready" === o.status, expiresAt: o.expires_at } : t,
                      ),
                    }))
                  ).uploads.find((t) => t.uploadId === e) ?? l),
                  j.add(e))
              }
              if (l.ready) return void C.delete(e)
              C.add(e)
              let o = new AbortController()
              A.set(e, o)
              let r = AbortSignal.any([a, o.signal]),
                s = await f.file(l)
              if ((await t.completeUpload(n, e, s, { signal: r, onProgress: () => {} })).fileId !== l.fileId)
                throw P(!0)
              ;(T(),
                await f.update((t) => ({
                  ...t,
                  uploads: t.uploads.map((t) => (t.uploadId === e ? { ...t, ready: !0 } : t)),
                })),
                C.delete(e))
            })()),
            S.set(e, l),
            l
              .finally(() => {
                ;(S.delete(e), A.delete(e))
              })
              .catch(() => {})),
          l
        )
      }
      function U(e) {
        for (let t of e) {
          A.get(t)?.abort()
          let e = M.get(t)
          ;(null != e && (URL.revokeObjectURL(e), M.delete(t)), C.delete(t), j.delete(t))
        }
      }
      return (
        a.addEventListener(
          "abort",
          () => {
            for (let e of M.values()) URL.revokeObjectURL(e)
            M.clear()
          },
          { once: !0 },
        ),
        {
          prepare: async function (e, t) {
            T()
            let n = crypto.randomUUID()
            return (0, u.k)({
              comments: e,
              ordinaryAttachmentIds: t,
              intl: h,
              signal: a,
              reserve: async (e) => {
                let t
                ;(T(), a.throwIfAborted())
                let l = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", await e.arrayBuffer())), (e) =>
                  e.toString(16).padStart(2, "0"),
                ).join("")
                try {
                  t = await f.add(e, l, n)
                } catch {
                  throw P(!1)
                }
                let o = await E(t.uploadId)
                ;(a.throwIfAborted(), N(t.uploadId).catch(() => {}))
                let i = (0, r.tm)({
                  type: "file",
                  file_id: o.fileId,
                  name: e.name,
                  mime_type: e.type,
                  status: o.ready ? "ready" : "uploading",
                  isLoading: !o.ready,
                  size_bytes: e.size,
                })
                if (null == i) throw P(!1)
                return i
              },
            })
          },
          async retainRequest(e, t) {
            if ((T(), e.roomId !== n)) throw P(!1)
            let a = (0, d.Yi)(e.messageMetadata)
            if (0 === a.length) return
            let l = new Set([...a.map(({ data: e }) => e.context_file_id), ...(0, d.Yd)(e.messageMetadata)]),
              o = null == t.source ? void 0 : { id: crypto.randomUUID(), bytes: t.source.bytes },
              r = []
            try {
              await f.update((a) => {
                r = []
                let n = a.sends.find((t) => t.request.requestId === e.requestId)
                if (null != n) {
                  if (!I(n.request, e)) throw P(!1)
                  return {
                    ...a,
                    sends: a.sends.map((e) =>
                      e === n
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
                let i = a.uploads.filter((e) => null != e.fileId && l.has(e.fileId)),
                  s = i[0]?.ownerId
                if (
                  i.length !== l.size ||
                  null == s ||
                  i.some((e) => e.ownerId !== s || a.sends.some((t) => t.uploadIds.includes(e.uploadId)))
                )
                  throw P(!1)
                let d = {
                    request: structuredClone(e),
                    createdAt: t.createdAt,
                    comments: t.comments.map((e) => ({ ...e })),
                    uploadIds: i.map((e) => e.uploadId),
                    submitted: !1,
                    queued: !0,
                    ownerId: v,
                    sourceId: o?.id,
                    sourceSha256: t.source?.sha256,
                  },
                  c = a.sends.filter((e) => null != o && e.ownerId === v && !e.queued && !e.submitted),
                  u = [...a.sends.filter((e) => !c.includes(e)), d]
                return (
                  (r = c.flatMap((e) => e.uploadIds)),
                  { ...a, sends: u, uploads: a.uploads.filter((e) => !r.includes(e.uploadId)) }
                )
              }, o)
            } catch (e) {
              if (e instanceof b)
                throw new i.oy(
                  h.formatMessage({
                    id: "orbit.browserAnnotations.pendingSendLimit",
                    defaultMessage: "Finish retrying pending annotation messages before sending another",
                  }),
                  429,
                )
              throw P(!1)
            }
            U(r)
          },
          async waitForRequest(e) {
            if ((T(), 0 !== (0, d.Yi)(e.messageMetadata).length))
              try {
                let t = (await f.read()).sends.find((t) => t.request.requestId === e.requestId)
                if (null == t || e.roomId !== n || !I(t.request, e)) throw P(!0)
                ;(await Promise.all(t.uploadIds.map(N)), T())
              } catch {
                throw P(!0)
              }
          },
          async markSubmitted(e) {
            if ((T(), 0 !== (0, d.Yi)(e.messageMetadata).length))
              try {
                await f.update((t) => {
                  if (!t.sends.some((t) => I(t.request, e))) throw P(!0)
                  return { ...t, sends: t.sends.map((t) => (I(t.request, e) ? { ...t, submitted: !0 } : t)) }
                })
              } catch {
                throw P(!0)
              }
          },
          async rejectRequest(e) {
            if (0 !== (0, d.Yi)(e.messageMetadata).length) {
              if (e.roomId !== n) throw P(!0)
              try {
                await f.update((t) => ({
                  ...t,
                  sends: t.sends.map((t) => (I(t.request, e) ? { ...t, submitted: !1, queued: !1 } : t)),
                }))
              } catch {
                throw P(!0)
              }
            }
          },
          async completeRequest(e) {
            if ((T(), 0 === (0, d.Yi)(e.messageMetadata).length)) return
            if (e.roomId !== n) throw P(!0)
            let t = []
            ;(await f.update((a) => {
              let n = a.sends.find((t) => I(t.request, e)),
                l = a.sends.filter((e) => e !== n)
              return (
                (t = n?.uploadIds ?? []),
                { ...a, sends: l, uploads: a.uploads.filter((e) => !t.includes(e.uploadId)) }
              )
            }),
              U(t))
          },
          async restore(e = !1) {
            T()
            let t = await f.read()
            if ((T(), !e)) return t.sends
            let a = await Promise.all(
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
                        let t = (0, r.tm)({
                          type: "file",
                          file_id: e.fileId,
                          name: e.name,
                          mime_type: e.mime,
                          status: e.ready ? "ready" : "uploading",
                        })
                        if (null == t) return null
                        let a = M.get(e.uploadId)
                        if (null == a)
                          try {
                            let t = await f.file(e)
                            ;(T(), (a = URL.createObjectURL(t)), M.set(e.uploadId, a))
                          } catch {}
                        return (T(), { ...t, imageDataUrl: a ?? "", isLoading: !e.ready })
                      }),
                  )
                ).filter((e) => null != e),
              })),
            )
            return (T(), a)
          },
        }
      )
    }
    function I(e, t) {
      return l()(
        [e.roomId, e.requestId, e.text, e.attachmentIds, e.replyToMessageId, e.pageContext, e.messageMetadata],
        [t.roomId, t.requestId, t.text, t.attachmentIds, t.replyToMessageId, t.pageContext, t.messageMetadata],
      )
    }
  },
  LZ1k(e, t, a) {
    var n = a("pfTp"),
      l = a("kavB"),
      o = a("nmDX")
    a.d(
      t,
      {},
      {
        X: function (e) {
          let t = e.file_path,
            a = null != t && 0 === (0, n.e2)(t).length ? t : void 0
          return {
            origin: "artifact_annotation",
            path: `artifact:${e.file_name}`,
            side: null,
            lineRange: null,
            body: e.comment,
            artifactRef: e.artifact_ref ?? void 0,
            artifactAnnotationFilePath: a,
            artifactAnnotationLocationLabel: e.target_label,
            artifactAnnotationContentPreview:
              null == e.selected_text ? void 0 : { type: "text", text: e.selected_text },
          }
        },
        i: function (e, t, a) {
          let n = e.localArtifactAnnotationContext,
            i = e.localPdfContext ?? n
          if (null == i) throw Error("File annotation is missing its context")
          let r = null == i.path ? void 0 : i.sourceFileId,
            s = (0, o.h_)(e),
            d = s.pdfAnnotationContentPreview ?? s.artifactAnnotationContentPreview,
            c = s.artifactAnnotationTarget,
            u = null != c && "slideLabel" in c ? c.slideLabel : (0, l.tT)(s, a)
          return {
            comment: s.body,
            screenshot_file_id: t ?? null,
            file_id: r ?? null,
            file_path: null != r || null == i.path ? null : (i.sourcePath ?? i.path),
            artifact_ref: null == r ? (n?.artifactRef ?? null) : null,
            file_name: i.title,
            target_label: u ?? ("label" in i ? i.label : i.title),
            selected_text: d?.type === "text" ? d.text : null,
          }
        },
      },
    )
  },
  uzqr(e, t, a) {
    a.d(
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
  x74N(e, t, a) {
    var n = a("Bl5Q"),
      l = a("uOFa"),
      o = a("HfjH"),
      i = a("yJfM"),
      r = a("v9CB"),
      s = a("a4qT"),
      d = a("LulU"),
      c = a("J5Kp"),
      u = a("LZ1k"),
      p = a("uQmz")
    a.d(
      t,
      {},
      {
        k: async function ({
          comments: e,
          reserve: t,
          ordinaryAttachmentIds: a,
          intl: m,
          signal: g = new AbortController().signal,
        }) {
          let h = e.filter(l.X8),
            f = e.filter(p.nW),
            x = [...h, ...f]
          if (0 === x.length) return
          if (x.some((e) => (e.localBrowserAttachedImages?.length ?? 0) > 0))
            throw new r.oy(
              m.formatMessage({
                id: "orbit.browserAnnotations.extraImagesUnsupported",
                defaultMessage:
                  "Additional images aren't supported in browser annotations. Remove the extra images and try again",
              }),
            )
          let v = (0, i.Zp)({
              prompt: "",
              addedFiles: [],
              fileAttachments: [],
              imageAttachments: [],
              ideContext: null,
              commentAttachments: x.map((e) => {
                if (e.localPdfContext?.sourcePath != null)
                  return { ...e, localPdfContext: { ...e.localPdfContext, path: e.localPdfContext.sourcePath } }
                let t = e.localArtifactAnnotationContext
                return t?.path != null && null != t.sourcePath
                  ? { ...e, localArtifactAnnotationContext: { ...t, path: t.sourcePath } }
                  : e
              }),
            }),
            y = x.flatMap((e, t) => (0, o.Bn)([e], !0).map((e) => ({ input: e, index: t }))),
            b = y.flatMap(({ input: e, index: t }) =>
              "image" === e.type && "url" in e
                ? [{ input: e, index: t, file: (0, d.bX)(e.url, "annotation.png").file }]
                : [],
            ),
            w = f.flatMap((e) => {
              let t = e.localPdfContext ?? e.localArtifactAnnotationContext,
                a = t?.path == null ? void 0 : t.sourceFileId
              return null == a ? [] : [a]
            })
          if (new Set([...a, ...w]).size + b.length > 9)
            throw new r.oy(
              m.formatMessage({
                id: "orbit.browserAnnotations.tooManyAttachments",
                defaultMessage:
                  "This message has too many attachments. Remove an attachment or annotation and try again",
              }),
            )
          if (
            y.some(({ input: e }) => "text" !== e.type && "image" !== e.type) ||
            new TextEncoder().encode(v).byteLength > 262144
          )
            throw new r.oy(
              m.formatMessage({
                id: "orbit.browserAnnotations.tooLarge",
                defaultMessage:
                  "These annotations are too large to send together. Send fewer annotations or attachments",
              }),
            )
          let _ = await (0, n.Ay)(
              b,
              async ({ input: e, index: a, file: n }) => {
                g.throwIfAborted()
                let l = await (async function (e, t) {
                  if ("image/png" !== e.type) return e
                  try {
                    let a = await createImageBitmap(e)
                    try {
                      t.throwIfAborted()
                      let n = await (0, s.U)(a)
                      if (n?.type === "image/jpeg" && n.size < e.size)
                        return new File([n], "annotation.jpg", { type: "image/jpeg", lastModified: e.lastModified })
                    } finally {
                      a.close()
                    }
                  } catch {
                    t.throwIfAborted()
                  }
                  return e
                })(n, g)
                return (g.throwIfAborted(), { input: e, index: a, attachment: await t(l) })
              },
              { concurrency: 3 },
            ),
            I = new File(
              [
                JSON.stringify({
                  version: 1,
                  content: [
                    { type: "text", text: v },
                    ...y.flatMap(({ input: e, index: t }) => {
                      if ("text" === e.type)
                        return [
                          {
                            type: "text",
                            text: `Image for submitted Comment ${t + 1} (original page marker ${x[t].position.line}).
${e.text}`,
                          },
                        ]
                      let a = _.find((t) => t.input === e)
                      return null == a ? [] : [{ type: "image", file_id: a.attachment.fileId }]
                    }),
                  ],
                }),
              ],
              f.length > 0 ? "annotations.txt" : "browser-annotations.txt",
              { type: "text/plain" },
            )
          if (I.size > 262144)
            throw new r.oy(
              m.formatMessage({
                id: "orbit.browserAnnotations.contextTooLarge",
                defaultMessage: "This annotation context is too large to send. Send fewer annotations",
              }),
            )
          g.throwIfAborted()
          let k = (await t(I)).fileId,
            S = {}
          if (
            (h.length > 0 &&
              (S.browser_annotations = {
                version: 1,
                context_file_id: k,
                annotations: h.map((e, t) => (0, c.ad)(e, _.find((e) => e.index === t)?.attachment.fileId)),
              }),
            f.length > 0 &&
              (S.file_annotations = {
                version: 1,
                context_file_id: k,
                annotations: f.map((e, t) =>
                  (0, u.i)(e, _.find((e) => e.index === h.length + t)?.attachment.fileId, m),
                ),
              }),
            new TextEncoder().encode(JSON.stringify(S)).byteLength > 16384)
          )
            throw new r.oy(
              m.formatMessage({
                id: "orbit.browserAnnotations.summaryTooLarge",
                defaultMessage: "These annotation comments are too long to send together. Send fewer annotations",
              }),
            )
          return {
            messageMetadata: S,
            attachments: _.map(({ attachment: e, input: t, index: a }) => {
              let n = (0, o.W6)(x[a])
              return { ...e, imageDataUrl: t.url, width: n?.width ?? null, height: n?.height ?? null }
            }),
          }
        },
      },
    )
  },
  k3jg(e, t, a) {
    var n = a("cC4N"),
      l = a("l00C"),
      o = a("TrP8"),
      i = a("YWcr")
    a.d(
      t,
      {},
      {
        O: function (e, t, a = []) {
          let r = (function (e) {
              if (!e.includes("thread://")) return []
              let t = [],
                a = [...(0, n.Y)(e).children]
              for (let n of a)
                if ("link" === n.type) {
                  let a = (0, i.tP)(n.url),
                    l = n.position?.end.offset
                  a?.hostId === "local" &&
                    null != l &&
                    e.slice(l - n.url.length - 2, l) === `(${n.url})` &&
                    t.push({ start: l - n.url.length - 1, end: l - 1, reference: a })
                } else "children" in n && a.push(...n.children)
              return t.sort((e, t) => e.start - t.start)
            })(t),
            s = new Set(
              [...r.map(({ reference: e }) => e), ...a]
                .filter((e) => "local" === e.hostId && null == e.environmentId)
                .map((e) => e.threadId),
            )
          if (0 === s.size) return
          let d = (0, o.sb)(),
            c = e.get(l.M4, "local"),
            u = "request-only" === c.status ? c.requestClient : c.client
          if (null != d && null != u)
            return (async () => {
              let e = await d.getState().catch(() => null),
                n = e?.environmentId
              if (null == n) return { prompt: t, threadReferences: a }
              let l = new Set(
                  await Promise.all(
                    [...s].map(async (e) => {
                      let t = await u.rpc.readThread(e, { includeTurns: !1 }).catch(() => null)
                      return t?.thread.id === e ? e : null
                    }),
                  ),
                ),
                o = t
              for (let { start: e, end: t, reference: a } of r.toReversed())
                if (null == a.environmentId && l.has(a.threadId)) {
                  let l = (0, i.yO)(a.threadId, a.hostId, n)
                  o = o.slice(0, e) + l + o.slice(t)
                }
              return {
                prompt: o,
                threadReferences: a.map((e) =>
                  "local" === e.hostId && null == e.environmentId && l.has(e.threadId) ? { ...e, environmentId: n } : e,
                ),
              }
            })()
        },
      },
    )
  },
  XDdZ(e, t, a) {
    var n = a("DBCl"),
      l = a("h4h6"),
      o = a("Kwur"),
      i = a("WLtw")
    a.d(
      t,
      {},
      {
        o: function (e, t) {
          let a = (0, l.l)(e),
            r = null == a ? (0, i.LX)({ download_url: e }) : { downloadUrl: a, requestHeaders: (0, o.Zj)() }
          return { ...r, requestHeaders: null == r.requestHeaders ? void 0 : { ...r.requestHeaders, [n.zBc]: t } }
        },
      },
    )
  },
  nilw(e, t, a) {
    var n = a("qmMi"),
      l = a("DBCl"),
      o = a("SPnB"),
      i = a("Kwur"),
      r = a("OWtl"),
      s = a("WzCE")
    let d = (0, n.bD)(r.u, (e) => ({
      lastReadAt: null,
      confirmedLastReadAt: null,
      revision: 0,
      pendingReadAts: new Map(),
    }))
    function c(e, t) {
      return null == e ? (t ?? null) : null == t || (0, s.$)(e, t) >= 0 ? e : t
    }
    a.d(
      t,
      {},
      {
        An: async function (e, t, a, n, r) {
          n?.throwIfAborted()
          let u = e.get(o.chatGptAuthenticatedAccountId$),
            p = e.get(o.chatGptAuthenticatedUserId$)
          if (null == u || null == p) return
          let m = { accountId: u, userId: p, roomId: t },
            g = e.get(d, m)
          if (null != g.confirmedLastReadAt && (0, s.$)(g.confirmedLastReadAt, a) >= 0) return
          let h = g.revision + 1
          e.set(d, m, {
            ...g,
            lastReadAt: c(g.lastReadAt, a),
            revision: h,
            pendingReadAts: new Map(g.pendingReadAts).set(h, a),
          })
          try {
            ;(await i.Request.safePost("/messaging/rooms/{room_id}/read", {
              signal: n,
              additionalHeaders: { [l.zBc]: u },
              parameters: { path: { room_id: t } },
              requestBody: { last_read_at: a },
              expectedErrorStatuses: [400, 401, 403, 404, 429],
            }),
              e.set(d, m, (e) => ({
                ...e,
                lastReadAt: c(e.lastReadAt, a),
                confirmedLastReadAt: c(e.confirmedLastReadAt, a),
              })),
              r?.markRead(t, a))
          } finally {
            e.set(d, m, (e) => {
              let t = new Map(e.pendingReadAts)
              return (
                t.delete(h),
                { ...e, pendingReadAts: t, lastReadAt: [...t.values()].reduce(c, e.confirmedLastReadAt) }
              )
            })
          }
        },
        WL: d,
        df: c,
      },
    )
  },
  Kg41(e, t, a) {
    var n = a("G4E3"),
      l = a("v7qY"),
      o = a("Qgfj"),
      i = a("E8Sp"),
      r = a("QcW8"),
      s = a("LtEv"),
      d = a("MrGp"),
      c = a("n6WP"),
      u = a("rPIX"),
      p = a("jAnS"),
      m = a("jEN2"),
      g = a("MX6A"),
      h = a("SGsN"),
      f = a("Z2JT"),
      x = a("svjy"),
      v = a("H7Ld"),
      y = a("Sd8U"),
      b = a("tSEg"),
      w = a("dN0a"),
      _ = a("b8b3"),
      I = a("rpnz"),
      k = a("qPPq"),
      S = a("r9ga"),
      j = a("p66p"),
      C = a("tv8P"),
      A = a("NnV7")
    let M = (0, o.zR)({
        id: "codex.pages.automations.scheduleSuggestion.startFromScratchPrompt",
        defaultMessage: "Help me create a new schedule that keeps this page up to date.",
      }),
      T = (0, o.YK)({
        manageSchedules: {
          id: "codex.pages.automations.manageSchedulesPrompt",
          defaultMessage: "Manage the schedules for this page",
        },
        customizeFailed: {
          id: "codex.pages.automations.customizeFailed",
          defaultMessage: "Couldn\u2019t open a chat to schedule updates. Try again",
        },
      })
    async function P(e, t) {
      let a = e.get(C.spaceAccountId$)
      if (null == a) throw new k.cS("unavailable")
      let n = e.get(i.gM),
        l = (0, S.mI)(e, t.pageId)
      if (!(0, i.oo)(e, l)) throw new k.cS("unavailable")
      await (0, j.SO)(
        e,
        { ...t, accountId: a, keepPageOpen: !0, project: void 0 },
        ({ get: e }) => e(C.spaceAccountId$) !== a || (e(i.gM) !== n && e(i.gM).pathname !== l),
      )
    }
    a.d(
      t,
      {},
      {
        Co: async function (e, { pageId: t, prompt: a }) {
          let o = e.get(x.g)
          try {
            let i = e.get(C.spacePageId$, t),
              s = e.get(u.Px),
              d = s?.kind === "codex" ? s : s?.page,
              p = {
                pageId: i,
                prefillOnly: !0,
                prompt: (0, v.KH)({
                  pluginId: "pages@openai-curated-remote",
                  pluginDisplayName: "Pages",
                  defaultPrompt: a ?? o.formatMessage(T.manageSchedules),
                }),
              }
            if (d?.pageId === i) {
              ;(null != a && e.get(r.kF) && (e.set(f.H_, "expanded"), (0, w.gm)(e)),
                await (0, j.iY)(e, { ...p, keepPageOpen: !0, sourceId: d.sourceId }))
              let t = e.get(u.Px),
                n = e.get(u.Mg)
              null != a &&
                t?.kind === "chatgpt" &&
                t.page?.pageId === i &&
                t.page.accountId === d.accountId &&
                null != n &&
                e.set(c.C, n.conversationId, { owner: (0, c.f)(t), presentation: "expanded" })
              return
            }
            let h = e.value
            if (null != a && "chatgpt-thread" === h.routeKind && !e.get(b.Rj) && !(0, I.sD)(i)) {
              e.get(r.kF) &&
                (0, l.flushSync)(() => {
                  ;(e.set(f.H_, "expanded"), (0, w.gm)(e))
                })
              let t = e.get(C.loadedSpacePageMetadata$, i),
                a = t?.title?.trim() || o.formatMessage((0, A._Y)(t?.document_type)),
                s = (0, g.xR)(a, (0, n.$j)({ kind: "page", id: i })),
                d = (0, y.eL)((0, y.CN)(h)),
                c = (0, m.VT)(d, `${p.prompt} ${s}`)
              if ("unavailable" === c) throw new k.cS("unavailable")
              ;(0, m.te)(d)
              return
            }
            await P(e, p)
          } catch {
            e.get(h.Id).danger(o.formatMessage(T.customizeFailed), {
              errorAnalytics: { toastId: "codex.pages.automations.customizeFailed" },
            })
          }
        },
        Sd: async function (e, { pageId: t, prompt: a }) {
          let n = e.get(x.g)
          try {
            let n = e.get(C.spacePageId$, t),
              l = (0, v.KH)({ pluginId: "pages@openai-curated-remote", pluginDisplayName: "Pages", defaultPrompt: a }),
              o = e.value,
              i = "chatgpt-thread" !== o.routeKind || e.get(b.Rj) ? null : e.get(d.jS, o.conversationId)
            if (null != i && !(0, I.sD)(n)) {
              if (
                !(await (0, s.submitChatGptFollowUp)(e, {
                  conversationId: i,
                  isTemporaryChat: (0, p.CV)(o.search ?? ""),
                  prompt: l,
                  requireDispatchAcceptance: !0,
                  systemHints: ["connector:connector_openai_pages"],
                  oneTurnDeveloperInstructions: [
                    `The open Space document referenced by this scheduling request has page_id ${JSON.stringify(n)}.`,
                  ],
                }))
              )
                throw new k.cS("unavailable")
              e.get(r.kF) && (e.set(f.H_, "expanded"), (0, w.gm)(e))
              return
            }
            let c = e.get(u.Px),
              m = c?.kind === "codex" ? c : c?.page
            if (m?.pageId !== n) return void (await P(e, { pageId: n, prompt: l }))
            let g = e.get(_.sU, t)
            if (c?.disableSubmit !== !1 || g?.submit == null) throw new k.cS("unavailable")
            if ("codex" === g.kind) await g.submit({ promptRawOverride: l })
            else if (
              !(await g.submit(l, { submissionIntent: "prepared_action", preserveDraft: !0, fileUploadIds: [] }))
            )
              throw new k.cS("unavailable")
          } catch {
            e.get(h.Id).danger(n.formatMessage(T.customizeFailed), {
              errorAnalytics: { toastId: "codex.pages.automations.customizeFailed" },
            })
          }
        },
        Yq: M,
      },
    )
  },
  G9Ns(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("Wf1j"),
      i = a("taVj"),
      r = a("fGpH")
    a.d(
      t,
      {},
      {
        t: function (e) {
          let t,
            a,
            s = (0, l.c)(8),
            { attachment: d, item: c, onConfirm: u, onClose: p } = e,
            m = (0, o.A)()
          return (
            s[0] !== d || s[1] !== m || s[2] !== c
              ? ((t =
                  null == c
                    ? (d.display_name ??
                      m.formatMessage({
                        id: "codex.pages.automations.unavailableTaskName",
                        defaultMessage: "unavailable schedule",
                      }))
                    : (0, r.OK)(c)),
                (s[0] = d),
                (s[1] = m),
                (s[2] = c),
                (s[3] = t))
              : (t = s[3]),
            s[4] !== p || s[5] !== u || s[6] !== t
              ? ((a = (0, n.jsx)(i.o, { isPending: !1, name: t, open: !0, onCancel: p, onConfirm: u })),
                (s[4] = p),
                (s[5] = u),
                (s[6] = t),
                (s[7] = a))
              : (a = s[7]),
            a
          )
        },
      },
    )
  },
  TqzI(e, t, a) {
    var n = a("qmMi"),
      l = a("fGpH"),
      o = a("Ro2M"),
      i = a("OWtl"),
      r = a("IGL9")
    let s = (0, n.vU)(i.u, ({ accountId: e, automationId: t }) => ({ ...(0, o.XZ)(t, e), retryOnMount: !1 })),
      d = (0, n.i1)(i.u, (e, { get: t }) => {
        let a = "string" == typeof e ? e : e.pageId,
          n = t(r.DU, e),
          i = t(r.Wq),
          d = t(o.H),
          { isPending: c, variables: u } = t(o.x2)
        return {
          data: n.data?.flatMap((e) => {
            let n = e.automation_id,
              o = t(r.d2, { identity: i, pageId: a, automationId: n })
            if ("pending" === o) return []
            let { data: p, error: m } = t(s, { accountId: d, automationId: n }, { enabled: !1 }),
              g = null != p && null == m ? (0, l.Xr)(p.automation) : void 0
            return (
              c && u?.automationId === n && u.accountId === d && (g = u.isEnabled ? "active" : "paused"),
              [{ attachment: e, unlinkFailed: "unlinkFailed" === o, status: g }]
            )
          }),
          error: n.error,
          isFetching: n.isFetching,
          refetch: n.refetch,
          identity: i,
        }
      }),
      c = (0, n.i1)(i.u, ({ pageId: e, automationId: t }, { get: a }) => {
        if (null == t) return null
        let n = a(r.DU, e).data?.find((e) => e.automation_id === t),
          l = a(r.d2, { identity: a(r.Wq), pageId: e, automationId: t })
        return null == n || "pending" === l ? null : { attachment: n, unlinkFailed: "unlinkFailed" === l }
      })
    a.d(t, {}, { $w: d, O_: s, t5: c })
  },
  lQ5c(e, t, a) {
    var n = a("Qgfj")
    let l = (0, n.zR)({ id: "codex.pages.automations.scheduledTasksTitle", defaultMessage: "Scheduled tasks" }),
      o = (0, n.zR)({
        id: "codex.pages.automations.scheduleSuggestion.description",
        defaultMessage: "ChatGPT can keep this page updated for you",
      }),
      i = (0, n.zR)({ id: "codex.pages.automations.runInProgress", defaultMessage: "Run in progress" }),
      r = (0, n.zR)({
        id: "codex.pages.automations.usageLimit",
        defaultMessage: "You\u2019ve reached your usage limit. You can schedule updates when usage is available again.",
      })
    a.d(t, {}, { LX: i, Nu: l, cJ: r, pu: o })
  },
  vvP4(e, t, a) {
    a.d(t, { I: () => eZ })
    var n = a("ABep"),
      l = a("QosV"),
      o = a("iodE"),
      i = a("qmMi"),
      r = a("zd8w"),
      s = a("Wf1j"),
      d = a("oyxz"),
      c = a("mgfw"),
      u = a("tSEg"),
      p = a("wJMo"),
      m = a("Kg41"),
      g = a("TqzI"),
      h = a("lQ5c"),
      f = a("vVh3"),
      x = a("Qgfj"),
      v = a("HOLv"),
      y = a("j9wQ"),
      b = a("Sm6l"),
      w = a("syEl"),
      _ = a("kYSX"),
      I = a("JVTP"),
      k = a("u4MG"),
      S = a("M0Ez"),
      j = a("MrGp"),
      C = a("rPIX"),
      A = a("ix9R"),
      M = a("TZiV"),
      T = a("a6kU"),
      P = a("NRR1"),
      E = a("tv8P"),
      N = a("YF6h"),
      U = a("Bl6U"),
      O = a("l8d7"),
      D = a("Dh1c"),
      R = a("eviP")
    let L = (0, i.i1)(u.GD, (e, { scope: t, get: a }) => {
      let n = a(P.DO),
        l = a(E.spacePageId$, e),
        o = a(C.Px),
        i = o?.kind === "codex" ? o : o?.page
      if (null == n || i?.pageId !== l || i.accountId !== n) return !1
      if (o?.kind === "codex")
        return (function (e, t) {
          let a,
            n = e.get(R.q),
            l = e.value.persistentWorkspace?.session
          if (null != n || null != l) {
            let o = null == n ? l : n.getSession(e),
              i = e.get(D.z)
            if (
              o?.accountId !== t.accountId ||
              o.clientThreadId !== e.value.clientThreadId ||
              i?.clientThreadId !== o.clientThreadId
            )
              return !1
            a = i.conversationId
          } else {
            let n = e.get(C.rp)
            if (n?.pageId !== t.pageId || n.accountId !== t.accountId || n.sourceId !== t.sourceId) return !1
            a = e.get(O.mb, {
              clientThreadId: n.clientThreadId,
              conversationId: n.conversationId,
              selectedLinkedTaskId: null,
              accountId: n.accountId,
            }).conversationId
          }
          return e.get(T.o, e.get(U.qX, a)).length > 0
        })(t, o)
      if (o?.kind !== "chatgpt") return !1
      let r = a(N.vo, { accountId: n, pageId: l, conversationOrigin: "tpp" === o.conversationOrigin ? "tpp" : null })
      if (null != r.conversationId) {
        let e = r.conversationId,
          t = o.conversationOrigin ?? a(j.uh, e),
          n = a(j.zn, e) ?? r.projectId,
          l = {
            conversationId: e,
            conversationOrigin: t,
            gizmoId: n,
            useMergedPicker: a(I.nH, { conversationId: e, conversationOrigin: t, gizmoId: n }),
            hasModelGizmoOverride: null != n,
            hasSavedModelGizmoOverride: null != n,
            hasGizmoOverride: (0, k.w7)(n),
            hasRequiredSystemHints: !1,
            requiredSystemHints: void 0,
            isTemporaryChat: !1,
            readOnly: !1,
          },
          i = a(M.hj, l),
          { composerSelectionContext: s } = a(I.kb, { context: l, systemHints: (0, S.J8)(i, void 0, !0) })
        return a(I.F7, { context: s, premiumChatServerId: a(A.k, { conversationId: e }) }).blocksSubmit
      }
      return "tpp" === o.conversationOrigin && !a(_.BM) && a(T.U)
    })
    function z(e) {
      let t,
        a,
        o,
        r,
        d,
        c,
        u,
        p = (0, l.c)(17)
      p[0] !== e
        ? (({ pageId: o, disabled: t, onClick: a, ...r } = e),
          (p[0] = e),
          (p[1] = t),
          (p[2] = a),
          (p[3] = o),
          (p[4] = r))
        : ((t = p[1]), (a = p[2]), (o = p[3]), (r = p[4]))
      let m = (0, s.A)(),
        g = (0, i._U)(t ? null : L, o)
      p[5] !== m || p[6] !== g
        ? ((d = g ? m.formatMessage(h.cJ) : void 0), (p[5] = m), (p[6] = g), (p[7] = d))
        : (d = p[7])
      let f = d,
        x = null == f
      return (
        p[8] !== t || p[9] !== a || p[10] !== r || p[11] !== g
          ? ((c = (e) =>
              (0, n.jsx)(b.$, { ...r, ...e, disabled: t, "aria-disabled": g || void 0, onClick: g ? void 0 : a })),
            (p[8] = t),
            (p[9] = a),
            (p[10] = r),
            (p[11] = g),
            (p[12] = c))
          : (c = p[12]),
        p[13] !== f || p[14] !== x || p[15] !== c
          ? ((u = (0, n.jsx)(w.J, { content: f, disabled: x, children: c })),
            (p[13] = f),
            (p[14] = x),
            (p[15] = c),
            (p[16] = u))
          : (u = p[16]),
        u
      )
    }
    function q(e) {
      let t,
        a,
        o,
        i,
        r = (0, l.c)(13),
        { pageId: c, canWrite: u, isEmpty: p, onSuggestNewSchedule: m, onClose: g } = e,
        x = (0, s.A)()
      return (
        r[0] !== x ? ((t = x.formatMessage(B.closePanel)), (r[0] = x), (r[1] = t)) : (t = r[1]),
        r[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(d.A, { ...h.Nu })), (r[2] = a))
          : (a = r[2]),
        r[3] !== u || r[4] !== x || r[5] !== p || r[6] !== m || r[7] !== c
          ? ((o = p
              ? null
              : (0, n.jsx)(z, {
                  pageId: c,
                  color: "ghost",
                  radius: "full",
                  size: "toolbar",
                  uniform: !0,
                  disabled: !u,
                  "aria-label": x.formatMessage(B.newTask),
                  onClick: m,
                  children: (0, n.jsx)(v.I, { asset: f.R }),
                })),
            (r[3] = u),
            (r[4] = x),
            (r[5] = p),
            (r[6] = m),
            (r[7] = c),
            (r[8] = o))
          : (o = r[8]),
        r[9] !== g || r[10] !== t || r[11] !== o
          ? ((i = (0, n.jsx)(y.xx, { closeLabel: t, title: a, actions: o, onClose: g })),
            (r[9] = g),
            (r[10] = t),
            (r[11] = o),
            (r[12] = i))
          : (i = r[12]),
        i
      )
    }
    let B = (0, x.YK)({
      newTask: { id: "codex.pages.automations.newTask", defaultMessage: "New task" },
      closePanel: { id: "codex.pages.automations.closePanel", defaultMessage: "Close schedules" },
    })
    var $ = a("K4Cx"),
      F = a("T1PX"),
      K = a("V8uZ")
    function G(e) {
      let t,
        a,
        o,
        i,
        r,
        s = (0, l.c)(10),
        { children: d, slideFrom: c } = e,
        u = (0, F.I)(null != c)
      return (
        s[0] !== u || s[1] !== c
          ? ((t = null != c && !u && { x: "left" === c ? -8 : 8, opacity: 0 }), (s[0] = u), (s[1] = c), (s[2] = t))
          : (t = s[2]),
        s[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = { x: 0, opacity: 1 }), (o = { duration: 0.3, ease: K.Wu }), (s[3] = a), (s[4] = o))
          : ((a = s[3]), (o = s[4])),
        s[5] !== d
          ? ((i = (0, n.jsx)("div", { className: "flex flex-col gap-6 px-4 py-6", children: d })),
            (s[5] = d),
            (s[6] = i))
          : (i = s[6]),
        s[7] !== t || s[8] !== i
          ? ((r = (0, n.jsx)($.P.div, {
              className: "vertical-scroll-fade-mask-top min-h-0 flex-1 overflow-auto",
              initial: t,
              animate: a,
              transition: o,
              children: i,
            })),
            (s[7] = t),
            (s[8] = i),
            (s[9] = r))
          : (r = s[9]),
        r
      )
    }
    var Y = a("ESTr")
    let W = (0, Y.a)({
        name: "arrow-left-lg-regular-16",
        canvas: {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 2.054199, y: 2.583984, width: 12.028809, height: 10.83252 },
          visualBounds: { x: 2.054199, y: 2.583984, width: 12.028809, height: 10.83252 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 2.054199, y: 2.583984, width: 12.028809, height: 10.83252 },
          center: { x: 8.068604, y: 8.000244 },
          insets: { top: 2.583984, right: 1.916992, bottom: 2.583496, left: 2.054199 },
          anchors: {
            frame: { x: 8, y: 8 },
            ink: { x: 8.068604, y: 8.000244 },
            foreground: { x: 8.068604, y: 8.000244 },
          },
        },
        capabilities: ["icon"],
        body: '<path d="M6.80286 2.80358C7.09576 2.51084 7.57056 2.51073 7.8634 2.80358C8.15571 3.09646 8.15596 3.5714 7.8634 3.86412L4.47668 7.24987H13.3331C13.7469 7.2503 14.083 7.58606 14.0831 7.99987C14.0831 8.41381 13.747 8.74943 13.3331 8.74987H4.47473L7.8634 12.1366C8.15581 12.4294 8.15585 12.9043 7.8634 13.1971C7.57063 13.4899 7.09578 13.4896 6.80286 13.1971L2.37121 8.76647L2.297 8.68346C1.97337 8.28633 1.97316 7.71329 2.297 7.31627L2.37121 7.23424L6.80286 2.80358Z" fill="currentColor"/>',
      }),
      V = (0, Y.a)({
        name: "pencil-regular-16",
        canvas: {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 1.581055, y: 1.579346, width: 12.837891, height: 12.840576 },
          visualBounds: { x: 1.581055, y: 1.579346, width: 12.837891, height: 12.840576 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.581055, y: 1.579346, width: 12.837891, height: 12.840576 },
          center: { x: 8.000001, y: 7.999634 },
          insets: { top: 1.579346, right: 1.581054, bottom: 1.580078, left: 1.581055 },
          anchors: {
            frame: { x: 8, y: 8 },
            ink: { x: 8.000001, y: 7.999634 },
            foreground: { x: 8.000001, y: 7.999634 },
          },
        },
        capabilities: ["icon"],
        body: '<path d="M9.14642 2.48864C10.3767 1.26164 12.3416 1.28838 13.5136 2.49645C14.7076 3.66735 14.7367 5.61696 13.5048 6.84899L7.90521 12.4496L7.90424 12.4486C7.30531 13.0745 6.54142 13.4984 5.74213 13.6839L5.74017 13.6849L2.64642 14.3949L2.64545 14.3929C2.47809 14.4322 2.11576 14.4709 1.82318 14.1791C1.52927 13.8856 1.56867 13.5212 1.60834 13.3539H1.60639L2.3183 10.2679C2.50775 9.42694 2.93895 8.69478 3.52728 8.10778L9.14642 2.48864ZM4.58783 9.1693C4.1822 9.57402 3.90248 10.0598 3.78119 10.6009L3.78021 10.6048L3.29486 12.7064L5.40228 12.223C5.92659 12.1013 6.43501 11.8192 6.83002 11.4027L6.83685 11.3959L6.84467 11.389L11.207 7.02574L8.96771 4.78649L4.58783 9.1693ZM12.4365 3.54137C11.8518 2.93881 10.8489 2.90982 10.206 3.55114L10.205 3.55016L10.0283 3.72594L12.2675 5.96422L12.4443 5.78844C13.0918 5.14078 13.0583 4.14253 12.454 3.55895L12.4365 3.54137Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      })
    var H = a("xAgU"),
      X = a("fGpH"),
      Q = a("Ro2M"),
      J = a("G9Ns"),
      Z = a("VybE"),
      ee = a("snnp")
    let et = (0, Y.a)({
      name: "play-regular-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 4.125, y: 2.486328, width: 13.260651, height: 15.095215 },
        visualBounds: { x: 4.125, y: 2.486328, width: 13.260651, height: 15.095215 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 4.125, y: 2.486328, width: 13.260651, height: 15.095215 },
        center: { x: 10.755326, y: 10.033936 },
        insets: { top: 2.486328, right: 2.614349, bottom: 2.418457, left: 4.125 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.755326, y: 10.033936 },
          foreground: { x: 10.755326, y: 10.033936 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M5.3252 2.71791C5.96459 2.40873 6.79141 2.3806 7.49316 2.80873L7.49414 2.80776L16.2881 8.16127L16.4209 8.24819C17.7491 9.18436 17.7059 11.2482 16.291 12.1115L16.2773 12.1193L7.49414 17.258L7.49512 17.2589C6.79323 17.6877 5.96489 17.659 5.3252 17.3497C4.71789 17.056 4.19357 16.4609 4.13086 15.6564L4.125 15.4933V4.57338C4.12494 3.68626 4.67762 3.03109 5.3252 2.71791ZM5.875 15.4933C5.87497 15.586 5.92408 15.6958 6.08691 15.7746C6.25749 15.8569 6.44893 15.8467 6.58301 15.7648L6.59668 15.757L15.3848 10.6124C15.7205 10.4014 15.7185 9.86398 15.3789 9.65737L15.3779 9.65639L6.58398 4.30287L6.58301 4.3019C6.44886 4.21991 6.25756 4.21059 6.08691 4.29311C5.92408 4.37186 5.87497 4.48067 5.875 4.57338V15.4933Z" fill="currentColor"/>',
    })
    var ea = a("M5j0"),
      en = a("ED7I"),
      el = a("Bbed"),
      eo = a("OWtl"),
      ei = a("IGL9"),
      er = a("SPnB"),
      es = a("c7WY"),
      ed = a("BsuA"),
      ec = a("u0nx"),
      eu = a("uqiN")
    let ep = (0, i.i1)(eo.u, ({ automationId: e, updatesConversationId: t }, { get: a }) => {
        if (null != t && (0, j.QN)(a(j.F1, t))) return "running"
        if (a(ec.F, e).isPending) return "starting"
        let n = a(Q.x2)
        return n.isPending && n.variables?.automationId === e ? "updating" : "idle"
      }),
      em = (0, i.i1)(
        eo.u,
        (e, { get: t }) => {
          if (null == e) return !1
          let { pageId: a, automationId: n, updatesConversationId: l } = e,
            o = t(ep, { automationId: n, updatesConversationId: l }),
            i = t(ed.o, { accountId: t(er.chatGptAuthenticatedAccountId$), automationId: n }),
            r = i?.destination?.type === "conversation" ? i.destination.id : null,
            s = t(ei.$T, a).tasks.find((e) => e.automationId === n)?.lastRun
          return "starting" === o || "running" === o || (0, j.QN)(t(j.F1, r)) || s?.status === "in_progress"
        },
        { autoDispose: !0 },
      )
    function eg(e) {
      return {
        automationId: e.automation.id,
        updatesConversationId: null == e.teamId ? (0, es.Jc)(e.automation) : null,
      }
    }
    function eh(e, t, a) {
      "idle" === e.get(ep, eg(t)) && (e.get(ec.F, t.automation.id).mutate({ item: t }), (0, eu.Ej)(e, a))
    }
    var ef = a("GDNt")
    function ex(e) {
      let { canManage: t, canDelete: a } = (0, X.RQ)(e),
        n = t && "completed" !== (0, X.Xr)(e)
      return { canEdit: n, canDelete: a, canRun: n && "local" !== e.executor && !(0, X.nT)(e) && (0, X.kn)(e) }
    }
    function ev(e) {
      return e instanceof ef.fk && (404 === e.status || 410 === e.status)
    }
    let ey = (0, el._)(
      async () =>
        (
          await Promise.all([
            a.e(980572),
            a.e(807357),
            a.e(210038),
            a.e(981868),
            a.e(320111),
            a.e(622950),
            a.e(57920),
            a.e(863864),
            a.e(467229),
          ]).then(a.bind(a, "ETAC"))
        ).ScheduledTaskEditDialog,
    )
    function eb(e) {
      let t,
        a,
        d,
        c,
        u,
        m,
        g,
        h,
        f,
        x,
        y = (0, l.c)(48),
        {
          attachment: b,
          pageId: w,
          item: _,
          placement: I,
          status: k,
          onStatusChangeRequested: S,
          onDeleteConfirmed: j,
        } = e,
        C = (0, i.gh)(eo.u),
        A = (0, s.A)(),
        M = (0, o.tF)(),
        [T, P] = (0, r.useState)(null)
      y[0] !== _.automation ? ((t = ex(_.automation)), (y[0] = _.automation), (y[1] = t)) : (t = y[1])
      let { canEdit: E, canDelete: N, canRun: U } = t
      y[2] !== _ ? ((a = eg(_)), (y[2] = _), (y[3] = a)) : (a = y[3])
      let O = (0, i._U)(ep, a),
        D = "running" === O || "starting" === O,
        R = "list" === I,
        L = R
          ? "CHATGPT_TASKS_INTERACTION_ENTRY_POINT_SPACE_SCHEDULE_LIST_MENU"
          : "CHATGPT_TASKS_INTERACTION_ENTRY_POINT_SPACE_SCHEDULE_DETAILS_MENU"
      y[4] !== L || y[5] !== _.automation.id || y[6] !== C
        ? ((d = (e) => {
            ;(0, p.N)(C, { type: e, taskId: _.automation.id, interactionEntryPoint: L })
          }),
          (y[4] = L),
          (y[5] = _.automation.id),
          (y[6] = C),
          (y[7] = d))
        : (d = y[7])
      let z = d
      return (
        y[8] !== R ? ((c = R ? () => P("edit") : void 0), (y[8] = R), (y[9] = c)) : (c = y[9]),
        y[10] === Symbol.for("react.memo_cache_sentinel") ? ((u = () => P("delete")), (y[10] = u)) : (u = y[10]),
        y[11] !== U ||
        y[12] !== R ||
        y[13] !== _ ||
        y[14] !== z ||
        y[15] !== w ||
        y[16] !== D ||
        y[17] !== O ||
        y[18] !== C
          ? ((m = (e) =>
              (0, n.jsx)(ea.n, {
                ...e,
                pauseAction: {
                  ...e.pauseAction,
                  disabled: D || e.pauseAction.disabled,
                  onSelect: () => {
                    ;(z("CHATGPT_TASKS_EVENT_TYPE_TASK_PAUSE_CLICKED"), e.pauseAction.onSelect())
                  },
                },
                resumeAction: {
                  ...e.resumeAction,
                  disabled: D || e.resumeAction.disabled,
                  onSelect: () => {
                    ;(z("CHATGPT_TASKS_EVENT_TYPE_TASK_RESUME_CLICKED"), e.resumeAction.onSelect())
                  },
                },
                statusFirst: !0,
                runNowAction: U
                  ? {
                      disabled: "idle" !== O || e.runNowAction?.disabled,
                      onSelect: () => {
                        ;(z("CHATGPT_TASKS_EVENT_TYPE_TASK_RUN_NOW_CLICKED"), eh(C, _, w))
                      },
                    }
                  : void 0,
                runNowIcon: (0, n.jsx)(v.I, { asset: ee.E }),
                deleteAction:
                  null == e.deleteAction ? void 0 : { ...e.deleteAction, disabled: D || e.deleteAction.disabled },
                menuTriggerSize: R ? "3xs" : "lg",
                onMenuOpenChange: (e) => {
                  e && z("CHATGPT_TASKS_EVENT_TYPE_TASK_OVERFLOW_MENU_OPENED")
                },
                menuProps: { alignOffset: R ? -8 : void 0, contentWidth: "icon", size: "compact", surface: "opaque" },
              })),
            (y[11] = U),
            (y[12] = R),
            (y[13] = _),
            (y[14] = z),
            (y[15] = w),
            (y[16] = D),
            (y[17] = O),
            (y[18] = C),
            (y[19] = m))
          : (m = y[19]),
        y[20] !== _ || y[21] !== S || y[22] !== k || y[23] !== c || y[24] !== m
          ? ((g = (0, n.jsx)(en.s, {
              item: _,
              status: k,
              statusMutation: Q.x2,
              onStatusChangeRequested: S,
              onEdit: c,
              onDeleteRequested: u,
              renderActions: m,
            })),
            (y[20] = _),
            (y[21] = S),
            (y[22] = k),
            (y[23] = c),
            (y[24] = m),
            (y[25] = g))
          : (g = y[25]),
        y[26] !== E || y[27] !== T || y[28] !== L || y[29] !== _ || y[30] !== w || y[31] !== M
          ? ((h =
              M &&
              "edit" === T &&
              E &&
              (0, n.jsx)(ew, { item: _, pageId: w, interactionEntryPoint: L, onClose: () => P(null) })),
            (y[26] = E),
            (y[27] = T),
            (y[28] = L),
            (y[29] = _),
            (y[30] = w),
            (y[31] = M),
            (y[32] = h))
          : (h = y[32]),
        y[33] !== b ||
        y[34] !== N ||
        y[35] !== T ||
        y[36] !== A ||
        y[37] !== _ ||
        y[38] !== z ||
        y[39] !== j ||
        y[40] !== w ||
        y[41] !== M ||
        y[42] !== C
          ? ((f =
              M &&
              "delete" === T &&
              N &&
              (0, n.jsx)(J.t, {
                attachment: b,
                item: _,
                onClose: () => P(null),
                onConfirm: () => {
                  ;(z("CHATGPT_TASKS_EVENT_TYPE_TASK_DELETE_CONFIRMED"),
                    P(null),
                    j?.(),
                    (0, Z.D)(C, A, w, _.automation.id, !1))
                },
              })),
            (y[33] = b),
            (y[34] = N),
            (y[35] = T),
            (y[36] = A),
            (y[37] = _),
            (y[38] = z),
            (y[39] = j),
            (y[40] = w),
            (y[41] = M),
            (y[42] = C),
            (y[43] = f))
          : (f = y[43]),
        y[44] !== g || y[45] !== h || y[46] !== f
          ? ((x = (0, n.jsxs)(n.Fragment, { children: [g, h, f] })), (y[44] = g), (y[45] = h), (y[46] = f), (y[47] = x))
          : (x = y[47]),
        x
      )
    }
    function ew(e) {
      let t,
        a,
        o,
        r,
        s = (0, l.c)(14),
        { item: d, pageId: c, interactionEntryPoint: u, onClose: m } = e,
        g = (0, i.gh)(eo.u)
      return (
        s[0] !== d ? ((t = { source: "cloud", item: d }), (s[0] = d), (s[1] = t)) : (t = s[1]),
        s[2] !== d.automation.id || s[3] !== g
          ? ((a = (e) => {
              ;(0, p.N)(g, {
                type: e
                  ? "CHATGPT_TASKS_EVENT_TYPE_TASK_RESUME_CLICKED"
                  : "CHATGPT_TASKS_EVENT_TYPE_TASK_PAUSE_CLICKED",
                taskId: d.automation.id,
                interactionEntryPoint: "CHATGPT_TASKS_INTERACTION_ENTRY_POINT_SPACE_SCHEDULE_EDITOR_STATUS_BUTTON",
              })
            }),
            (s[2] = d.automation.id),
            (s[3] = g),
            (s[4] = a))
          : (a = s[4]),
        s[5] !== m || s[6] !== c || s[7] !== g.query
          ? ((o = () => {
              ;(m(), g.query.invalidate(ei.DU, c))
            }),
            (s[5] = m),
            (s[6] = c),
            (s[7] = g.query),
            (s[8] = o))
          : (o = s[8]),
        s[9] !== u || s[10] !== t || s[11] !== a || s[12] !== o
          ? ((r = (0, n.jsx)(ey, {
              task: t,
              navigationSource: "space_schedules_panel",
              interactionEntryPoint: u,
              onStatusChangeRequested: a,
              onClose: o,
            })),
            (s[9] = u),
            (s[10] = t),
            (s[11] = a),
            (s[12] = o),
            (s[13] = r))
          : (r = s[13]),
        r
      )
    }
    function e_(e) {
      let t,
        a,
        o,
        r,
        s,
        c = (0, l.c)(16),
        { item: u, pageId: m } = e,
        g = (0, i.gh)(eo.u)
      c[0] !== u ? ((t = eg(u)), (c[0] = u), (c[1] = t)) : (t = c[1])
      let f = (0, i._U)(ep, t),
        x = "running" === f || "starting" === f,
        y = "idle" !== f
      return (
        c[2] !== u || c[3] !== m || c[4] !== g
          ? ((a = () => {
              ;((0, p.N)(g, {
                type: "CHATGPT_TASKS_EVENT_TYPE_TASK_RUN_NOW_CLICKED",
                taskId: u.automation.id,
                interactionEntryPoint: "CHATGPT_TASKS_INTERACTION_ENTRY_POINT_SPACE_SCHEDULE_DETAILS_RUN_BUTTON",
              }),
                eh(g, u, m))
            }),
            (c[2] = u),
            (c[3] = m),
            (c[4] = g),
            (c[5] = a))
          : (a = c[5]),
        c[6] !== x ? ((o = !x && (0, n.jsx)(v.I, { asset: et })), (c[6] = x), (c[7] = o)) : (o = c[7]),
        c[8] !== f
          ? ((r =
              "running" === f
                ? (0, n.jsx)(d.A, { ...h.LX })
                : (0, n.jsx)(d.A, { id: "settings.automations.runNow", defaultMessage: "Run now" })),
            (c[8] = f),
            (c[9] = r))
          : (r = c[9]),
        c[10] !== x || c[11] !== y || c[12] !== a || c[13] !== o || c[14] !== r
          ? ((s = (0, n.jsxs)(b.$, {
              className: "min-h-9 w-full justify-center",
              color: "outlineSurface",
              radius: "full",
              size: "toolbar",
              loading: x,
              disabled: y,
              onClick: a,
              children: [o, r],
            })),
            (c[10] = x),
            (c[11] = y),
            (c[12] = a),
            (c[13] = o),
            (c[14] = r),
            (c[15] = s))
          : (s = c[15]),
        s
      )
    }
    var eI = a("TZBk"),
      ek = a("jfZL"),
      eS = a("pPxA")
    function ej(e) {
      let t,
        a,
        o,
        i,
        r,
        c,
        u,
        p,
        m,
        g,
        h,
        f,
        x,
        v = (0, l.c)(31),
        { item: y, runButton: b } = e,
        w = (0, s.A)(),
        { automation: _ } = y
      v[0] !== _.prompt
        ? ((t = _.prompt
            .replace(/^\s*<page_automation_context>\r?\n[\s\S]*?\r?\n<\/page_automation_context>(?=\s|$)/, "")
            .trim()),
          (v[0] = _.prompt),
          (v[1] = t))
        : (t = v[1])
      let I = t
      v[2] !== _ ? ((a = (0, X.Xr)(_)), (v[2] = _), (v[3] = a)) : (a = v[3])
      let k = a
      return (
        v[4] !== y ? ((o = (0, X.OK)(y)), (v[4] = y), (v[5] = o)) : (o = v[5]),
        v[6] !== o
          ? ((i = (0, n.jsx)("h2", { className: "min-w-0 text-base font-medium wrap-break-word", children: o })),
            (v[6] = o),
            (v[7] = i))
          : (i = v[7]),
        v[8] !== k
          ? ((r =
              "active" !== k &&
              (0, n.jsx)("p", { className: "text-sm text-secondary", children: (0, n.jsx)(d.A, { ...eI.M[k] }) })),
            (v[8] = k),
            (v[9] = r))
          : (r = v[9]),
        v[10] !== _
          ? ((c =
              null != _.last_run_time &&
              (0, n.jsx)("p", {
                className: "text-xs leading-4 font-normal text-tertiary",
                children: (0, n.jsx)(ek.M, { automation: _ }),
              })),
            (v[10] = _),
            (v[11] = c))
          : (c = v[11]),
        v[12] !== i || v[13] !== r || v[14] !== c
          ? ((u = (0, n.jsxs)("div", { className: "flex flex-col", children: [i, r, c] })),
            (v[12] = i),
            (v[13] = r),
            (v[14] = c),
            (v[15] = u))
          : (u = v[15]),
        v[16] !== b || v[17] !== u
          ? ((p = (0, n.jsxs)("div", { className: "flex flex-col gap-4", children: [u, b] })),
            (v[16] = b),
            (v[17] = u),
            (v[18] = p))
          : (p = v[18]),
        v[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, n.jsx)("h3", {
              className: "text-xs leading-4 font-medium text-default select-none",
              children: (0, n.jsx)(d.A, { ...eC.schedule }),
            })),
            (v[19] = m))
          : (m = v[19]),
        v[20] !== w || v[21] !== y ? ((g = (0, X.AT)(y, w)), (v[20] = w), (v[21] = y), (v[22] = g)) : (g = v[22]),
        v[23] !== g
          ? ((h = (0, n.jsxs)("section", {
              className: "flex flex-col gap-2 text-sm leading-5",
              children: [m, (0, n.jsx)("p", { children: g })],
            })),
            (v[23] = g),
            (v[24] = h))
          : (h = v[24]),
        v[25] !== I
          ? ((f =
              "" !== I &&
              (0, n.jsxs)("section", {
                className: "flex flex-col gap-2 text-sm leading-5",
                children: [
                  (0, n.jsx)("h3", {
                    className: "text-xs leading-4 font-medium text-default select-none",
                    children: (0, n.jsx)(d.A, { ...eC.instructions }),
                  }),
                  (0, n.jsx)(eS.o, {
                    className: "wrap-break-word",
                    allowPlayableMedia: !1,
                    externalResourcePolicy: "restricted",
                    forceCodeBlockWordWrap: !0,
                    pluginMentionPresentation: "static",
                    repairOrderedLists: !1,
                    textStyle: { kind: "inherit" },
                    children: I,
                  }),
                ],
              })),
            (v[25] = I),
            (v[26] = f))
          : (f = v[26]),
        v[27] !== h || v[28] !== f || v[29] !== p
          ? ((x = (0, n.jsxs)(n.Fragment, { children: [p, h, f] })), (v[27] = h), (v[28] = f), (v[29] = p), (v[30] = x))
          : (x = v[30]),
        x
      )
    }
    let eC = (0, x.YK)({
      schedule: { id: "codex.pages.automations.detail.schedule", defaultMessage: "Schedule" },
      instructions: { id: "codex.pages.automations.detail.instructions", defaultMessage: "Instructions" },
    })
    var eA = a("bqtn"),
      eM = a("bVeK"),
      eT = a("f38C")
    function eP(e) {
      let t,
        a,
        o,
        i,
        r,
        c,
        u = (0, l.c)(13),
        { unlinkFailed: p, onRemove: m } = e,
        g = (0, s.A)()
      return (
        u[0] !== g ? ((t = g.formatMessage(eE.actions)), (u[0] = g), (u[1] = t)) : (t = u[1]),
        u[2] !== t ? ((a = (0, n.jsx)(eT.p, { label: t })), (u[2] = t), (u[3] = a)) : (a = u[3]),
        u[4] === Symbol.for("react.memo_cache_sentinel") ? ((o = (0, n.jsx)(eM.zwW, {})), (u[4] = o)) : (o = u[4]),
        u[5] !== p
          ? ((i = p ? (0, n.jsx)(d.A, { ...eE.retryUnlink }) : (0, n.jsx)(d.A, { ...eE.remove })),
            (u[5] = p),
            (u[6] = i))
          : (i = u[6]),
        u[7] !== m || u[8] !== i
          ? ((r = (0, n.jsx)(eA.ms.Item, { tone: "danger", leftIcon: o, onSelect: m, children: i })),
            (u[7] = m),
            (u[8] = i),
            (u[9] = r))
          : (r = u[9]),
        u[10] !== a || u[11] !== r
          ? ((c = (0, n.jsx)(eA.Ab, {
              align: "end",
              contentWidth: "icon",
              size: "action",
              surface: "opaque",
              triggerButton: a,
              children: r,
            })),
            (u[10] = a),
            (u[11] = r),
            (u[12] = c))
          : (c = u[12]),
        c
      )
    }
    let eE = (0, x.YK)({
      actions: { id: "settings.automations.actionsAria", defaultMessage: "Scheduled task actions" },
      retryUnlink: { id: "codex.pages.automations.retryUnlink", defaultMessage: "Retry removal from Page" },
      remove: { id: "codex.pages.automations.remove", defaultMessage: "Remove" },
    })
    function eN(e) {
      let t,
        a,
        c,
        p,
        m,
        h,
        f,
        x,
        v,
        y,
        b,
        w,
        _ = (0, l.c)(56),
        { attachment: I, pageId: k, unlinkFailed: S, onBack: j, onClose: C } = e,
        A = (0, i.gh)(u.GD),
        M = (0, s.A)(),
        T = (0, o.tF)(),
        [P, E] = (0, r.useState)(null),
        N = I.automation_id,
        U = (0, i.Ul)(Q.H)
      _[0] !== U || _[1] !== N
        ? ((t = { accountId: U, automationId: N }), (_[0] = U), (_[1] = N), (_[2] = t))
        : (t = _[2])
      let { data: O, error: D } = (0, i._U)(g.O_, t)
      _[3] !== D || _[4] !== O || _[5] !== S
        ? ((a = S || (null == O && ev(D))), (_[3] = D), (_[4] = O), (_[5] = S), (_[6] = a))
        : (a = _[6])
      let R = a,
        L = S ? void 0 : O
      _[7] !== L ? ((c = null == L ? null : ex(L.automation)), (_[7] = L), (_[8] = c)) : (c = _[8])
      let z = c
      _[9] !== N || _[10] !== M || _[11] !== j || _[12] !== k || _[13] !== A
        ? ((p = () => {
            ;(j(), (0, Z.D)(A, M, k, N, !0))
          }),
          (_[9] = N),
          (_[10] = M),
          (_[11] = j),
          (_[12] = k),
          (_[13] = A),
          (_[14] = p))
        : (p = _[14])
      let q = p
      _[15] !== q || _[16] !== S
        ? ((m = () => {
            S ? q() : E("remove")
          }),
          (_[15] = q),
          (_[16] = S),
          (_[17] = m))
        : (m = _[17])
      let B = m
      return (
        _[18] !== z?.canEdit
          ? ((h = z?.canEdit ? () => E("edit") : void 0), (_[18] = z?.canEdit), (_[19] = h))
          : (h = _[19]),
        _[20] !== I ||
        _[21] !== R ||
        _[22] !== j ||
        _[23] !== k ||
        _[24] !== z?.canDelete ||
        _[25] !== z?.canEdit ||
        _[26] !== B ||
        _[27] !== L ||
        _[28] !== S
          ? ((f =
              null == L
                ? R && (0, n.jsx)(eP, { unlinkFailed: S, onRemove: B })
                : (z?.canEdit || z?.canDelete) &&
                  (0, n.jsx)(eb, { attachment: I, item: L, pageId: k, placement: "details", onDeleteConfirmed: j })),
            (_[20] = I),
            (_[21] = R),
            (_[22] = j),
            (_[23] = k),
            (_[24] = z?.canDelete),
            (_[25] = z?.canEdit),
            (_[26] = B),
            (_[27] = L),
            (_[28] = S),
            (_[29] = f))
          : (f = _[29]),
        _[30] !== j || _[31] !== C || _[32] !== h || _[33] !== f
          ? ((x = (0, n.jsx)(eU, { onBack: j, onEdit: h, menu: f, onClose: C })),
            (_[30] = j),
            (_[31] = C),
            (_[32] = h),
            (_[33] = f),
            (_[34] = x))
          : (x = _[34]),
        _[35] !== I.display_name || _[36] !== O || _[37] !== k || _[38] !== z?.canRun || _[39] !== L
          ? ((v = (0, n.jsx)(G, {
              slideFrom: "right",
              children:
                null == L
                  ? (0, n.jsx)("h2", {
                      className: "min-w-0 text-base font-semibold wrap-break-word",
                      children:
                        (null == O ? I.display_name : (0, X.OK)(O)) || (0, n.jsx)(d.A, { ...eO.unavailableTask }),
                    })
                  : (0, n.jsx)(ej, { item: L, runButton: z?.canRun && (0, n.jsx)(e_, { item: L, pageId: k }) }),
            })),
            (_[35] = I.display_name),
            (_[36] = O),
            (_[37] = k),
            (_[38] = z?.canRun),
            (_[39] = L),
            (_[40] = v))
          : (v = _[40]),
        _[41] !== P || _[42] !== k || _[43] !== T || _[44] !== L
          ? ((y =
              T &&
              "edit" === P &&
              null != L &&
              (0, n.jsx)(ew, {
                item: L,
                pageId: k,
                interactionEntryPoint: "CHATGPT_TASKS_INTERACTION_ENTRY_POINT_SPACE_SCHEDULE_DETAILS_EDIT_BUTTON",
                onClose: () => E(null),
              })),
            (_[41] = P),
            (_[42] = k),
            (_[43] = T),
            (_[44] = L),
            (_[45] = y))
          : (y = _[45]),
        _[46] !== I || _[47] !== P || _[48] !== T || _[49] !== q
          ? ((b =
              T &&
              "remove" === P &&
              (0, n.jsx)(J.t, { attachment: I, item: null, onConfirm: q, onClose: () => E(null) })),
            (_[46] = I),
            (_[47] = P),
            (_[48] = T),
            (_[49] = q),
            (_[50] = b))
          : (b = _[50]),
        _[51] !== y || _[52] !== b || _[53] !== x || _[54] !== v
          ? ((w = (0, n.jsxs)(n.Fragment, { children: [x, v, y, b] })),
            (_[51] = y),
            (_[52] = b),
            (_[53] = x),
            (_[54] = v),
            (_[55] = w))
          : (w = _[55]),
        w
      )
    }
    function eU(e) {
      let t,
        a,
        o,
        i,
        r,
        d,
        c,
        u,
        p = (0, l.c)(20),
        { onBack: m, onEdit: g, menu: h, onClose: f } = e,
        x = (0, s.A)()
      return (
        p[0] !== x ? ((t = x.formatMessage(eO.back)), (p[0] = x), (p[1] = t)) : (t = p[1]),
        p[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(v.I, { asset: W, alignment: "composite", className: "rtl:rotate-180" })), (p[2] = a))
          : (a = p[2]),
        p[3] !== m || p[4] !== t
          ? ((o = (0, n.jsx)(b.$, {
              className: "me-auto",
              "aria-label": t,
              color: "ghost",
              radius: "full",
              size: "iconCircle",
              uniform: !0,
              onClick: m,
              children: a,
            })),
            (p[3] = m),
            (p[4] = t),
            (p[5] = o))
          : (o = p[5]),
        p[6] !== x || p[7] !== g
          ? ((i =
              null != g &&
              (0, n.jsx)(b.$, {
                "aria-label": x.formatMessage(eO.edit),
                color: "ghost",
                radius: "full",
                size: "iconCircle",
                uniform: !0,
                onClick: g,
                children: (0, n.jsx)(v.I, { asset: V }),
              })),
            (p[6] = x),
            (p[7] = g),
            (p[8] = i))
          : (i = p[8]),
        p[9] !== x ? ((r = x.formatMessage(eO.closePanel)), (p[9] = x), (p[10] = r)) : (r = p[10]),
        p[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)(v.I, { asset: H.m })), (p[11] = d))
          : (d = p[11]),
        p[12] !== f || p[13] !== r
          ? ((c = (0, n.jsx)(b.$, {
              "aria-label": r,
              color: "ghost",
              radius: "full",
              size: "iconCircle",
              uniform: !0,
              onClick: f,
              children: d,
            })),
            (p[12] = f),
            (p[13] = r),
            (p[14] = c))
          : (c = p[14]),
        p[15] !== h || p[16] !== o || p[17] !== i || p[18] !== c
          ? ((u = (0, n.jsxs)("div", {
              className: "flex h-11 shrink-0 items-center px-2 py-1",
              children: [o, i, h, c],
            })),
            (p[15] = h),
            (p[16] = o),
            (p[17] = i),
            (p[18] = c),
            (p[19] = u))
          : (u = p[19]),
        u
      )
    }
    let eO = (0, x.YK)({
      back: { id: "codex.pages.automations.detail.back", defaultMessage: "Back to schedules" },
      edit: { id: "codex.pages.automations.detail.edit", defaultMessage: "Edit" },
      closePanel: { id: "codex.pages.automations.closePanel", defaultMessage: "Close schedules" },
      unavailableTask: { id: "codex.pages.automations.unavailableTask", defaultMessage: "Unavailable schedule" },
    })
    var eD = a("dUfi"),
      eR = a("X3K1"),
      eL = a("RNul"),
      ez = a("Bd42"),
      eq = a("odKs"),
      eB = a("zjpG")
    function e$(e) {
      let t,
        a,
        o,
        i,
        r,
        c,
        u = (0, l.c)(19),
        { item: p, isRunning: m, status: g } = e,
        f = (0, s.A)(),
        { automation: x } = p
      if (u[0] !== x.schedule || u[1] !== x.schedule_components || u[2] !== x.timing_mode) {
        let e = (0, X.TB)(x.schedule),
          a = (0, eq.RD)(e)
        ;((t = null),
          "condition_watch" !== x.timing_mode &&
            "once" !== x.schedule_components.frequency &&
            a?.interval === 1 &&
            (t = "daily" === (0, eq.fo)(e).mode ? "daily" : a.frequency),
          (u[0] = x.schedule),
          (u[1] = x.schedule_components),
          (u[2] = x.timing_mode),
          (u[3] = t))
      } else t = u[3]
      return (
        u[4] !== g
          ? ((a =
              "active" !== g &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("span", { children: (0, n.jsx)(d.A, { ...eI.M[g] }) }),
                  (0, n.jsx)(eB.a, { className: "mx-1" }),
                ],
              })),
            (u[4] = g),
            (u[5] = a))
          : (a = u[5]),
        u[6] !== t || u[7] !== f || u[8] !== p
          ? ((o = null == t ? (0, X.AT)(p, f) : (0, n.jsx)(d.A, { ...eF.taskFrequency, values: { frequency: t } })),
            (u[6] = t),
            (u[7] = f),
            (u[8] = p),
            (u[9] = o))
          : (o = u[9]),
        u[10] !== o ? ((i = (0, n.jsx)("span", { children: o })), (u[10] = o), (u[11] = i)) : (i = u[11]),
        u[12] !== x || u[13] !== m
          ? ((r =
              (m || null != x.last_run_time) &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(eB.a, { className: "mx-1" }),
                  (0, n.jsx)("span", {
                    children: m ? (0, n.jsx)(d.A, { ...h.LX }) : (0, n.jsx)(ek.M, { automation: x }),
                  }),
                ],
              })),
            (u[12] = x),
            (u[13] = m),
            (u[14] = r))
          : (r = u[14]),
        u[15] !== a || u[16] !== i || u[17] !== r
          ? ((c = (0, n.jsxs)("p", { className: "text-xs leading-4 text-tertiary select-none", children: [a, i, r] })),
            (u[15] = a),
            (u[16] = i),
            (u[17] = r),
            (u[18] = c))
          : (c = u[18]),
        c
      )
    }
    let eF = (0, x.YK)({
      taskFrequency: {
        id: "codex.pages.automations.taskFrequency",
        defaultMessage:
          "{frequency, select, hourly {Hourly} daily {Daily} weekly {Weekly} monthly {Monthly} yearly {Yearly} other {Scheduled}}",
      },
    })
    function eK(e) {
      let t,
        a,
        o,
        r,
        s,
        c,
        u,
        p,
        m,
        h,
        f = (0, l.c)(53),
        { pageId: x, task: v, onOpenDetails: y, onStatusChangeRequested: b } = e,
        { attachment: w, unlinkFailed: _, status: I } = v,
        k = (0, i.Ul)(Q.H)
      f[0] !== k || f[1] !== w.automation_id
        ? ((t = { accountId: k, automationId: w.automation_id }), (f[0] = k), (f[1] = w.automation_id), (f[2] = t))
        : (t = f[2])
      let { data: S, error: j, isFetching: C, refetch: A } = (0, i._U)(g.O_, t)
      f[3] !== S || f[4] !== x || f[5] !== _
        ? ((a = null == S || _ ? null : { pageId: x, ...eg(S) }), (f[3] = S), (f[4] = x), (f[5] = _), (f[6] = a))
        : (a = f[6])
      let M = (0, i._U)(em, a)
      if (_ || (null == S && ev(j))) {
        let e, t, a
        return (
          f[7] !== w.display_name || f[8] !== S
            ? ((e = (null == S ? w.display_name : (0, X.OK)(S)) || (0, n.jsx)(d.A, { ...eG.unavailableTask })),
              (f[7] = w.display_name),
              (f[8] = S),
              (f[9] = e))
            : (e = f[9]),
          f[10] === Symbol.for("react.memo_cache_sentinel") ? ((t = { type: "idle" }), (f[10] = t)) : (t = f[10]),
          f[11] !== y || f[12] !== e
            ? ((a = (0, n.jsx)(ez.y, { variant: "sidebar", title: e, statusState: t, onClick: y })),
              (f[11] = y),
              (f[12] = e),
              (f[13] = a))
            : (a = f[13]),
          a
        )
      }
      if (null == S) {
        let e, t, a, l, o
        f[14] !== j
          ? ((e =
              null == j
                ? (0, n.jsxs)("span", {
                    role: "status",
                    children: [
                      (0, n.jsx)("span", { className: "sr-only", children: (0, n.jsx)(d.A, { ...eG.loadingTask }) }),
                      (0, n.jsx)(eR.X, {
                        className: "inline-block w-32 max-w-full align-middle",
                        as: "span",
                        size: "lg",
                      }),
                    ],
                  })
                : (0, n.jsx)(d.A, { ...eG.retryTask })),
            (t =
              null == j
                ? (0, n.jsx)("span", {
                    className: "text-xs leading-4",
                    children: (0, n.jsx)(eR.X, {
                      className: "inline-block w-24 max-w-full align-middle",
                      as: "span",
                      size: "sm",
                    }),
                  })
                : void 0),
            (f[14] = j),
            (f[15] = e),
            (f[16] = t))
          : ((e = f[15]), (t = f[16]))
        let i = null == j,
          r = null == j || C
        return (
          f[17] === Symbol.for("react.memo_cache_sentinel") ? ((a = { type: "idle" }), (f[17] = a)) : (a = f[17]),
          f[18] !== A ? ((l = () => void A()), (f[18] = A), (f[19] = l)) : (l = f[19]),
          f[20] !== e || f[21] !== t || f[22] !== i || f[23] !== r || f[24] !== l
            ? ((o = (0, n.jsx)(ez.y, {
                variant: "sidebar",
                title: e,
                secondaryLine: t,
                floatStatusIconsEnd: i,
                disabled: r,
                statusState: a,
                onClick: l,
              })),
              (f[20] = e),
              (f[21] = t),
              (f[22] = i),
              (f[23] = r),
              (f[24] = l),
              (f[25] = o))
            : (o = f[25]),
          o
        )
      }
      f[26] !== S.automation ? ((o = ex(S.automation)), (f[26] = S.automation), (f[27] = o)) : (o = f[27])
      let { canEdit: T, canDelete: P } = o,
        E = T || P
      f[28] !== S.automation || f[29] !== I
        ? ((r = I ?? (0, X.Xr)(S.automation)), (f[28] = S.automation), (f[29] = I), (f[30] = r))
        : (r = f[30])
      let N = r
      return (
        f[31] !== M
          ? ((s = M
              ? (0, n.jsx)(eL.y, { as: "span", className: "icon-sm text-secondary" })
              : (0, n.jsx)(eM.QC9, { className: "text-secondary" })),
            (f[31] = M),
            (f[32] = s))
          : (s = f[32]),
        f[33] !== S ? ((c = (0, X.OK)(S)), (f[33] = S), (f[34] = c)) : (c = f[34]),
        f[35] !== N || f[36] !== M || f[37] !== S
          ? ((u = (0, n.jsx)(e$, { item: S, isRunning: M, status: N })),
            (f[35] = N),
            (f[36] = M),
            (f[37] = S),
            (f[38] = u))
          : (u = f[38]),
        f[39] === Symbol.for("react.memo_cache_sentinel") ? ((p = { type: "idle" }), (f[39] = p)) : (p = f[39]),
        f[40] !== w || f[41] !== N || f[42] !== E || f[43] !== S || f[44] !== b || f[45] !== x
          ? ((m =
              E &&
              (0, n.jsx)("div", {
                className:
                  "shrink-0 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 has-[[data-state=open]]:opacity-100 [@media(hover:none)]:opacity-100",
                children: (0, n.jsx)(eb, {
                  attachment: w,
                  pageId: x,
                  item: S,
                  placement: "list",
                  status: N,
                  onStatusChangeRequested: b,
                }),
              })),
            (f[40] = w),
            (f[41] = N),
            (f[42] = E),
            (f[43] = S),
            (f[44] = b),
            (f[45] = x),
            (f[46] = m))
          : (m = f[46]),
        f[47] !== y || f[48] !== m || f[49] !== s || f[50] !== c || f[51] !== u
          ? ((h = (0, n.jsx)(ez.y, {
              variant: "sidebar",
              icon: s,
              alignIconToTitle: !0,
              title: c,
              titleSize: "sm",
              secondaryLine: u,
              statusState: p,
              titleSuffix: m,
              onClick: y,
            })),
            (f[47] = y),
            (f[48] = m),
            (f[49] = s),
            (f[50] = c),
            (f[51] = u),
            (f[52] = h))
          : (h = f[52]),
        h
      )
    }
    let eG = (0, x.YK)({
      unavailableTask: { id: "codex.pages.automations.unavailableTask", defaultMessage: "Unavailable schedule" },
      loadingTask: { id: "codex.pages.automations.loadingTask", defaultMessage: "Loading automation\u2026" },
      retryTask: {
        id: "codex.pages.automations.retryTask",
        defaultMessage: "Couldn\u2019t load automation. Try again",
      },
    })
    function eY(e) {
      let t,
        a,
        o,
        i,
        r,
        s,
        d = (0, l.c)(24),
        {
          label: c,
          collapsible: u,
          expanded: p,
          pageId: m,
          tasks: g,
          onSelect: h,
          onToggle: f,
          onStatusChangeRequested: x,
        } = e
      ;(d[0] !== u || d[1] !== p || d[2] !== c || d[3] !== f
        ? ((t = u
            ? (0, n.jsxs)("button", {
                type: "button",
                "data-collapsible": !0,
                "aria-expanded": p,
                onClick: f,
                children: [c, (0, n.jsx)(eM.J6i, { className: "chevron-zxBSnp" })],
              })
            : c),
          (d[0] = u),
          (d[1] = p),
          (d[2] = c),
          (d[3] = f),
          (d[4] = t))
        : (t = d[4]),
        d[5] !== t
          ? ((a = (0, n.jsx)("h2", { className: "heading-VFKySt", children: t })), (d[5] = t), (d[6] = a))
          : (a = d[6]))
      let v = !u || p
      if (d[7] !== h || d[8] !== x || d[9] !== m || d[10] !== g) {
        let e
        ;(d[12] !== h || d[13] !== x || d[14] !== m
          ? ((e = (e) =>
              (0, n.jsx)(
                eK,
                { pageId: m, task: e, onOpenDetails: () => h(e.attachment.automation_id), onStatusChangeRequested: x },
                e.attachment.automation_id,
              )),
            (d[12] = h),
            (d[13] = x),
            (d[14] = m),
            (d[15] = e))
          : (e = d[15]),
          (o = g.map(e)),
          (d[7] = h),
          (d[8] = x),
          (d[9] = m),
          (d[10] = g),
          (d[11] = o))
      } else o = d[11]
      return (
        d[16] !== o
          ? ((i = (0, n.jsx)("div", { className: "tasks-BHsR71", children: o })), (d[16] = o), (d[17] = i))
          : (i = d[17]),
        d[18] !== v || d[19] !== i
          ? ((r = (0, n.jsx)(eD.Q, { expanded: v, children: i })), (d[18] = v), (d[19] = i), (d[20] = r))
          : (r = d[20]),
        d[21] !== a || d[22] !== r
          ? ((s = (0, n.jsxs)("div", { className: "taskGroup-ZXGi8w", children: [a, r] })),
            (d[21] = a),
            (d[22] = r),
            (d[23] = s))
          : (s = d[23]),
        s
      )
    }
    let eW = "https://persistent.oaistatic.com/images/illustrated-icons/v4/96"
    function eV(e) {
      let t,
        a,
        o,
        c,
        u,
        p,
        m,
        f,
        x,
        v,
        y,
        w,
        _,
        I = (0, l.c)(41),
        { pageId: k, panelOpen: S, onSelect: j, onSuggestSchedule: C } = e,
        A = (0, s.A)()
      I[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { active: !0, paused: !1 }), (I[0] = t)) : (t = I[0])
      let [M, T] = (0, r.useState)(t)
      I[1] !== k || I[2] !== S
        ? ((a = S ? { pageId: k, panelOpen: !0 } : k), (I[1] = k), (I[2] = S), (I[3] = a))
        : (a = I[3])
      let { data: P, error: E, isFetching: N, refetch: U } = (0, i._U)(g.$w, a),
        O = P?.length === 0 && null == E,
        D = (0, i._U)(O && null != C ? L : null, k)
      if (O && !D) {
        let e
        return (
          I[4] !== C
            ? ((e =
                null == C
                  ? (0, n.jsx)("p", {
                      className: "text-sm text-tertiary select-none",
                      children: (0, n.jsx)(d.A, {
                        id: "codex.pages.automations.noScheduledTasks",
                        defaultMessage: "No scheduled tasks",
                      }),
                    })
                  : (0, n.jsx)(eQ, { onSelect: C })),
              (I[4] = C),
              (I[5] = e))
            : (e = I[5]),
          e
        )
      }
      I[6] !== P ? ((o = P?.filter(eH)), (I[6] = P), (I[7] = o)) : (o = I[7])
      let R = o
      I[8] !== P ? ((c = P?.filter(eX)), (I[8] = P), (I[9] = c)) : (c = I[9])
      let z = c,
        q = !!R?.length && !!z?.length
      I[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (e, t) => T((a) => ({ ...a, [e]: t }))), (I[10] = u))
        : (u = I[10])
      let B = u
      I[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (e) => B(e ? "active" : "paused", !0)), (I[11] = p))
        : (p = I[11])
      let $ = p
      return (
        I[12] !== A ? ((m = A.formatMessage(eJ.title)), (I[12] = A), (I[13] = m)) : (m = I[13]),
        I[14] !== P?.length
          ? ((f =
              !P?.length &&
              (0, n.jsx)("h2", {
                className: "text-sm text-secondary select-none",
                children: (0, n.jsx)(d.A, { ...eJ.title }),
              })),
            (I[14] = P?.length),
            (I[15] = f))
          : (f = I[15]),
        I[16] !== E || I[17] !== N || I[18] !== U
          ? ((x =
              null != E &&
              (0, n.jsxs)("div", {
                className: "flex flex-col gap-2 text-sm select-none",
                children: [
                  (0, n.jsx)("div", { role: "alert", children: (0, n.jsx)(d.A, { ...eJ.loadFailed }) }),
                  (0, n.jsx)(b.$, {
                    color: "ghostSecondary",
                    size: "compact",
                    disabled: N,
                    onClick: () => void U({ cancelRefetch: !1 }),
                    children: (0, n.jsx)(d.A, { ...eJ.retry }),
                  }),
                ],
              })),
            (I[16] = E),
            (I[17] = N),
            (I[18] = U),
            (I[19] = x))
          : (x = I[19]),
        I[20] !== P || I[21] !== E
          ? ((v =
              null == P &&
              null == E &&
              (0, n.jsx)("p", {
                role: "status",
                className: "text-sm text-secondary select-none",
                children: (0, n.jsx)(d.A, { ...eJ.loading }),
              })),
            (I[20] = P),
            (I[21] = E),
            (I[22] = v))
          : (v = I[22]),
        I[23] !== O
          ? ((y =
              O &&
              (0, n.jsx)("p", {
                className: "text-sm text-tertiary select-none",
                children: (0, n.jsx)(d.A, { ...h.cJ }),
              })),
            (I[23] = O),
            (I[24] = y))
          : (y = I[24]),
        I[25] !== R ||
        I[26] !== P ||
        I[27] !== q ||
        I[28] !== M ||
        I[29] !== A ||
        I[30] !== j ||
        I[31] !== k ||
        I[32] !== z
          ? ((w =
              null != P &&
              P.length > 0 &&
              (0, n.jsxs)("div", {
                className: "flex flex-col gap-8",
                children: [
                  R?.length
                    ? (0, n.jsx)(eY, {
                        label: A.formatMessage(eJ.active),
                        collapsible: q,
                        expanded: M.active,
                        pageId: k,
                        tasks: R,
                        onSelect: j,
                        onToggle: () => B("active", !M.active),
                        onStatusChangeRequested: $,
                      })
                    : null,
                  z?.length
                    ? (0, n.jsx)(eY, {
                        label: A.formatMessage(eJ.paused),
                        collapsible: q,
                        expanded: M.paused,
                        pageId: k,
                        tasks: z,
                        onSelect: j,
                        onToggle: () => B("paused", !M.paused),
                        onStatusChangeRequested: $,
                      })
                    : null,
                ],
              })),
            (I[25] = R),
            (I[26] = P),
            (I[27] = q),
            (I[28] = M),
            (I[29] = A),
            (I[30] = j),
            (I[31] = k),
            (I[32] = z),
            (I[33] = w))
          : (w = I[33]),
        I[34] !== v || I[35] !== y || I[36] !== w || I[37] !== m || I[38] !== f || I[39] !== x
          ? ((_ = (0, n.jsxs)("section", {
              className: "flex flex-col gap-3 border-default not-first:border-t not-first:pt-6",
              "aria-label": m,
              children: [f, x, v, y, w],
            })),
            (I[34] = v),
            (I[35] = y),
            (I[36] = w),
            (I[37] = m),
            (I[38] = f),
            (I[39] = x),
            (I[40] = _))
          : (_ = I[40]),
        _
      )
    }
    function eH(e) {
      return !eX(e)
    }
    function eX({ attachment: e, status: t }) {
      return (t ?? e.status) === "paused"
    }
    function eQ(e) {
      let t,
        a,
        o,
        i,
        r = (0, l.c)(6),
        { onSelect: c } = e,
        u = (0, s.A)()
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)("h3", {
              className: "font-semibold",
              children: (0, n.jsx)(d.A, {
                id: "codex.pages.automations.scheduleSuggestion.title",
                defaultMessage: "Suggestions",
              }),
            })),
            (r[0] = t))
          : (t = r[0]),
        r[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsxs)("div", {
              className: "flex flex-col gap-1 border-b border-subtle pb-3 text-xs leading-4",
              children: [t, (0, n.jsx)("p", { className: "text-tertiary", children: (0, n.jsx)(d.A, { ...h.pu }) })],
            })),
            (r[1] = a))
          : (a = r[1]),
        r[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = [
              {
                icon: (0, n.jsx)("img", {
                  alt: "",
                  className: "size-5",
                  referrerPolicy: "no-referrer",
                  src: `${eW}/home_repair_light_bulb.webp`,
                }),
                label: eJ.suggestSchedule,
                prompt: eJ.suggestSchedule,
              },
              {
                icon: (0, n.jsx)("img", {
                  alt: "",
                  className: "size-5",
                  referrerPolicy: "no-referrer",
                  src: `${eW}/productivity_calendar_page.webp`,
                }),
                label: eJ.refreshWeekdays,
                prompt: eJ.refreshWeekdays,
              },
              { icon: (0, n.jsx)(eM.wdY, {}), label: eJ.connectedApps, prompt: eJ.connectedApps },
              { icon: (0, n.jsx)(eM.sqn, {}), label: eJ.startFromScratch, prompt: m.Yq, prefillOnly: !0 },
            ]),
            (r[2] = o))
          : (o = r[2]),
        r[3] !== u || r[4] !== c
          ? ((i = (0, n.jsxs)("section", {
              className: "flex flex-col gap-3",
              children: [
                a,
                (0, n.jsx)("div", {
                  className: "-mx-1 flex flex-col gap-2",
                  children: o.map((e) => {
                    let { icon: t, label: a, prompt: l, prefillOnly: o } = e
                    return (0, n.jsxs)(
                      b.$,
                      {
                        className: "min-h-7 items-start px-1 py-1 text-start text-sm leading-5 tracking-[-0.15px]",
                        color: "blockAction",
                        size: "inline",
                        radius: "large",
                        onClick: () => c({ prompt: u.formatMessage(l), suggestionId: a.id, prefillOnly: o }),
                        children: [
                          (0, n.jsx)("span", {
                            "aria-hidden": !0,
                            className: "flex size-5 shrink-0 items-center justify-center",
                            children: t,
                          }),
                          (0, n.jsx)("span", { className: "whitespace-normal", children: (0, n.jsx)(d.A, { ...a }) }),
                        ],
                      },
                      a.id,
                    )
                  }),
                }),
              ],
            })),
            (r[3] = u),
            (r[4] = c),
            (r[5] = i))
          : (i = r[5]),
        i
      )
    }
    let eJ = (0, x.YK)({
      startFromScratch: {
        id: "codex.pages.automations.scheduleSuggestion.startFromScratch",
        defaultMessage: "Start from scratch",
      },
      title: { id: "codex.pages.automations.tasksTitle", defaultMessage: "Tasks" },
      active: { id: "codex.pages.automations.tasks.active", defaultMessage: "Active" },
      paused: { id: "codex.pages.automations.tasks.paused", defaultMessage: "Paused" },
      loadFailed: { id: "codex.pages.automations.panel.loadFailed", defaultMessage: "Couldn\u2019t load schedules" },
      retry: { id: "codex.pages.automations.retry", defaultMessage: "Try again" },
      loading: { id: "codex.pages.automations.loadingTasks", defaultMessage: "Loading tasks\u2026" },
      refreshWeekdays: {
        id: "codex.pages.automations.scheduleSuggestion.refreshWeekdays",
        defaultMessage: "Refresh this page every weekday",
      },
      connectedApps: {
        id: "codex.pages.automations.scheduleSuggestion.connectedApps",
        defaultMessage: "Add info from connected apps",
      },
      suggestSchedule: {
        id: "codex.pages.automations.scheduleSuggestion.suggestSchedule",
        defaultMessage: "Suggest a schedule for me",
      },
    })
    function eZ(e) {
      let t,
        a,
        s,
        d,
        p,
        m,
        h = (0, l.c)(25),
        { pageId: f, canWrite: x, open: v, onClose: y } = e,
        b = (0, i.gh)(u.GD),
        w = (0, o.tF)(),
        [_, I] = (0, r.useState)("initial"),
        k = "object" == typeof _ ? _.automationId : null
      h[0] !== f || h[1] !== k ? ((t = { pageId: f, automationId: k }), (h[0] = f), (h[1] = k), (h[2] = t)) : (t = h[2])
      let S = (0, i._U)(g.t5, t),
        j = S?.attachment.automation_id,
        C = (0, r.useRef)(null)
      return (
        h[3] !== v || h[4] !== w
          ? ((a = () => {
              v && w && C.current?.querySelector("button:not([disabled])")?.focus({ preventScroll: !0 })
            }),
            (h[3] = v),
            (h[4] = w),
            (h[5] = a))
          : (a = h[5]),
        h[6] !== v || h[7] !== w || h[8] !== j
          ? ((s = [v, w, j]), (h[6] = v), (h[7] = w), (h[8] = j), (h[9] = s))
          : (s = h[9]),
        (0, r.useLayoutEffect)(a, s),
        h[10] !== y
          ? ((d = (e) => {
              "Escape" !== e.key || e.defaultPrevented || (e.stopPropagation(), y())
            }),
            (h[10] = y),
            (h[11] = d))
          : (d = h[11]),
        h[12] !== x ||
        h[13] !== _ ||
        h[14] !== y ||
        h[15] !== v ||
        h[16] !== f ||
        h[17] !== w ||
        h[18] !== b ||
        h[19] !== j ||
        h[20] !== S
          ? ((p =
              null == S
                ? (0, n.jsx)(e1, {
                    pageId: f,
                    canWrite: x,
                    panelOpen: v && w,
                    returningFromDetails: "back" === _,
                    onSelect: (e) => {
                      ;((0, c.sZ)(b, {
                        taskId: e,
                        destination: "space_schedule_details",
                        source: "space_schedules_panel",
                      }),
                        I({ automationId: e }))
                    },
                    onClose: y,
                  })
                : (0, n.jsx)(
                    eN,
                    {
                      attachment: S.attachment,
                      pageId: f,
                      unlinkFailed: S.unlinkFailed,
                      onBack: () => I("back"),
                      onClose: y,
                    },
                    j,
                  )),
            (h[12] = x),
            (h[13] = _),
            (h[14] = y),
            (h[15] = v),
            (h[16] = f),
            (h[17] = w),
            (h[18] = b),
            (h[19] = j),
            (h[20] = S),
            (h[21] = p))
          : (p = h[21]),
        h[22] !== d || h[23] !== p
          ? ((m = (0, n.jsx)("div", {
              ref: C,
              role: "presentation",
              className: "flex min-h-0 flex-1 flex-col",
              onKeyDown: d,
              children: p,
            })),
            (h[22] = d),
            (h[23] = p),
            (h[24] = m))
          : (m = h[24]),
        m
      )
    }
    function e1(e) {
      let t,
        a,
        o,
        r,
        c,
        f,
        x,
        v,
        y = (0, l.c)(32),
        { pageId: b, canWrite: w, panelOpen: _, returningFromDetails: I, onSelect: k, onClose: S } = e,
        j = (0, i.gh)(u.GD),
        C = (0, s.A)(),
        { data: A, error: M } = (0, i._U)(g.$w, b),
        T = A?.length === 0 && null == M
      y[0] !== S || y[1] !== b || y[2] !== j
        ? ((t = (e, t) => {
            ;(S(), void 0 !== t && t) ? (0, m.Co)(j, { pageId: b, prompt: e }) : (0, m.Sd)(j, { pageId: b, prompt: e })
          }),
          (y[0] = S),
          (y[1] = b),
          (y[2] = j),
          (y[3] = t))
        : (t = y[3])
      let P = t
      ;(y[4] !== C || y[5] !== j || y[6] !== P
        ? ((a = () => {
            ;((0, p.N)(j, { type: "CHATGPT_TASKS_EVENT_TYPE_NEW_TASK_BUTTON_CLICKED" }), P(C.formatMessage(m.Yq), !0))
          }),
          (y[4] = C),
          (y[5] = j),
          (y[6] = P),
          (y[7] = a))
        : (a = y[7]),
        y[8] !== w || y[9] !== T || y[10] !== S || y[11] !== b || y[12] !== a
          ? ((o = (0, n.jsx)(q, { pageId: b, canWrite: w, isEmpty: T, onSuggestNewSchedule: a, onClose: S })),
            (y[8] = w),
            (y[9] = T),
            (y[10] = S),
            (y[11] = b),
            (y[12] = a),
            (y[13] = o))
          : (o = y[13]),
        y[14] !== A
          ? ((r =
              null != A &&
              A.length > 0 &&
              (0, n.jsx)("p", {
                className: "px-4 text-xs leading-4 text-secondary select-none",
                children: (0, n.jsx)(d.A, { ...h.pu }),
              })),
            (y[14] = A),
            (y[15] = r))
          : (r = y[15]))
      let E = I ? "left" : void 0
      return (
        y[16] !== w || y[17] !== j || y[18] !== P
          ? ((c = w
              ? (e) => {
                  let { prompt: t, suggestionId: a, prefillOnly: n } = e
                  ;((0, p.N)(j, { type: "CHATGPT_TASKS_EVENT_TYPE_SUGGESTED_TASK_SELECTED", suggestionId: a }), P(t, n))
                }
              : void 0),
            (y[16] = w),
            (y[17] = j),
            (y[18] = P),
            (y[19] = c))
          : (c = y[19]),
        y[20] !== k || y[21] !== b || y[22] !== _ || y[23] !== c
          ? ((f = (0, n.jsx)(eV, { pageId: b, panelOpen: _, onSelect: k, onSuggestSchedule: c })),
            (y[20] = k),
            (y[21] = b),
            (y[22] = _),
            (y[23] = c),
            (y[24] = f))
          : (f = y[24]),
        y[25] !== E || y[26] !== f
          ? ((x = (0, n.jsx)(G, { slideFrom: E, children: f })), (y[25] = E), (y[26] = f), (y[27] = x))
          : (x = y[27]),
        y[28] !== o || y[29] !== r || y[30] !== x
          ? ((v = (0, n.jsxs)(n.Fragment, { children: [o, r, x] })), (y[28] = o), (y[29] = r), (y[30] = x), (y[31] = v))
          : (v = y[31]),
        v
      )
    }
  },
  VybE(e, t, a) {
    var n = a("SPnB"),
      l = a("Ro2M"),
      o = a("Kwur"),
      i = a("SGsN"),
      r = a("tv8P"),
      s = a("GDNt"),
      d = a("IGL9")
    a.d(
      t,
      {},
      {
        D: async function (e, t, a, c, u) {
          let p = e.get(r.spaceAccountId$),
            m = e.get(n.chatGptAuthenticatedUserId$),
            g = { identity: e.get(d.Wq), pageId: a, automationId: c },
            h = e.get(d.d2, g)
          if (null == p || null == m || "pending" === h) return
          let f = e.query.snapshot(d.DU, a)
          e.set(d.d2, g, "pending")
          let x = u || "unlinkFailed" === h
          try {
            ;(x ||
              (await e
                .get(l.lu)
                .mutateAsync({ automationId: c })
                .catch((e) => {
                  if (!(e instanceof s.fk && 404 === e.status)) throw e
                }),
              (x = !0)),
              await o.Request.safeDelete("/pages/{page_id}/automation-attachments/{automation_id}", {
                expectedIdentity: { accountId: p, userId: m },
                parameters: { path: { page_id: a, automation_id: c } },
                expectedErrorStatuses: [403, 404, 409, 503],
              }).catch((e) => {
                if (!(e instanceof s.fk && 404 === e.status)) throw e
              }),
              await f.cancel(),
              f.setData((e) => e?.filter((e) => e.automation_id !== c)),
              f.invalidate(),
              e.set(d.d2, g, null))
          } catch {
            ;(e.set(d.d2, g, x ? "unlinkFailed" : null),
              x
                ? e
                    .get(i.Id)
                    .danger(
                      t.formatMessage({
                        id: "codex.pages.automations.unlinkFailed",
                        defaultMessage: "Task deleted, but couldn\u2019t remove it from this Page. Try again",
                      }),
                      { errorAnalytics: { toastId: "codex.pages.automations.unlinkFailed" } },
                    )
                : e
                    .get(i.Id)
                    .danger(
                      t.formatMessage({
                        id: "inbox.automations.cloud.deleteError",
                        defaultMessage: "Could not delete cloud scheduled task",
                      }),
                      { errorAnalytics: { toastId: "inbox.automations.cloud.deleteError" } },
                    ))
          }
        },
      },
    )
  },
  jQst(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("on57"),
      i = a("Sm6l")
    a.d(
      t,
      {},
      {
        B: function (e) {
          let t,
            a,
            r,
            s,
            d,
            c = (0, l.c)(11)
          c[0] !== e
            ? (({ floatingLayout: a, className: t, ...r } = e), (c[0] = e), (c[1] = t), (c[2] = a), (c[3] = r))
            : ((t = c[1]), (a = c[2]), (r = c[3]))
          let u =
            a &&
            "size-6 shrink-0 gap-1 rounded-[5px] border-0 border-transparent p-1 text-xs leading-4 text-secondary not-disabled:not-aria-disabled:hover:bg-secondary-ghost-hover data-[state=open]:bg-secondary-ghost-hover"
          return (
            c[4] !== t || c[5] !== u ? ((s = (0, o.A)(u, t)), (c[4] = t), (c[5] = u), (c[6] = s)) : (s = c[6]),
            c[7] !== a || c[8] !== r || c[9] !== s
              ? ((d = (0, n.jsx)(i.$, { ...r, unstyled: a, size: "composerSm", uniform: !0, className: s })),
                (c[7] = a),
                (c[8] = r),
                (c[9] = s),
                (c[10] = d))
              : (d = c[10]),
            d
          )
        },
      },
    )
  },
  Xkwl(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("on57"),
      i = a("qmMi"),
      r = a("X3K1"),
      s = a("wq58"),
      d = a("UOwN"),
      c = a("zJs4")
    function u(e) {
      let t,
        a,
        s,
        u,
        p = (0, l.c)(11),
        { accountUserId: m, name: g, size: h } = e,
        f = void 0 === h ? "sm" : h,
        x = (0, i._U)(c.Ww, m),
        v = "badge" === f ? "size-3" : "size-6"
      ;(p[0] !== v
        ? ((t = (0, o.A)("block shrink-0 overflow-hidden rounded-full", v)), (p[0] = v), (p[1] = t))
        : (t = p[1]),
        p[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(r.X, { as: "span", size: "fill" })), (p[2] = a))
          : (a = p[2]),
        p[3] !== t ? ((s = (0, n.jsx)("span", { className: t, children: a })), (p[3] = t), (p[4] = s)) : (s = p[4]))
      let y = s
      return (
        p[5] !== m || p[6] !== x || p[7] !== g || p[8] !== y || p[9] !== f
          ? ((u = x ? y : (0, n.jsx)(d.Y, { accountUserId: m, name: g, size: f, loadingFallback: y })),
            (p[5] = m),
            (p[6] = x),
            (p[7] = g),
            (p[8] = y),
            (p[9] = f),
            (p[10] = u))
          : (u = p[10]),
        u
      )
    }
    a.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            a,
            o,
            i = (0, l.c)(8),
            { accountUserId: r, name: d, children: c } = e
          return (
            i[0] !== c
              ? ((t = c ?? (0, n.jsx)(s.A, { "aria-hidden": !0, className: "size-6" })), (i[0] = c), (i[1] = t))
              : (t = i[1]),
            i[2] !== r || i[3] !== d
              ? ((a = (0, n.jsx)("span", {
                  className: "absolute -end-0.5 bottom-0 rounded-full bg-surface-elevated ring-2 ring-surface-elevated",
                  children: (0, n.jsx)(u, { accountUserId: r, name: d, size: "badge" }),
                })),
                (i[2] = r),
                (i[3] = d),
                (i[4] = a))
              : (a = i[4]),
            i[5] !== t || i[6] !== a
              ? ((o = (0, n.jsxs)("span", {
                  className: "relative block size-6 shrink-0 text-default",
                  children: [t, a],
                })),
                (i[5] = t),
                (i[6] = a),
                (i[7] = o))
              : (o = i[7]),
            o
          )
        },
        Z: u,
      },
    )
  },
  zJs4(e, t, a) {
    var n = a("qmMi"),
      l = a("SPnB"),
      o = a("imTH"),
      i = a("rTPf"),
      r = a("tv8P"),
      s = a("OWtl")
    let d = (0, n.i1)(s.u, (e, { get: t }) => t(o.e).find((t) => t.service_account_account_user_id === e), {
        autoDispose: !0,
      }),
      c = (0, n.i1)(s.u, (e, { get: t }) =>
        e.displayName === e.id ? (t(i.ik, e.id) ?? e.displayName) : e.displayName,
      ),
      u = (0, n.i1)(s.u, (e, { get: t }) => {
        let a = t(l.kf)
        return (
          "loading" === a.status ||
          ("loaded" === a.status &&
            "workspace" === a.structure &&
            null != t(r.spaceAccountId$) &&
            null != t(l.chatGptAuthenticatedUserId$) &&
            t(i.Ks, e).isPending)
        )
      }),
      p = (0, n.i1)(
        s.u,
        (e, { get: t }) => new Map(e.filter((e) => e.displayName === e.id).map((e) => [e.id, t(c, e)])),
      )
    a.d(t, {}, { Bm: c, Ww: u, tR: d, wh: p })
  },
  FW7f(e, t, a) {
    a.d(t, { o: () => s, W: () => d })
    var n = a("ABep"),
      l = a("on57"),
      o = a("m5Sp"),
      i = a("mZuD")
    let r = "page-comment-code-find-active"
    function s(e) {
      let t = e.ownerDocument.defaultView
      for (let a of t?.CSS?.highlights?.get(r) ?? [])
        if (null != t && a instanceof t.Range && e.contains(a.commonAncestorContainer)) return a
      return null
    }
    function d(e, t, a, s, d) {
      if (null == s) return a
      let c = "code" === e.type ? "div" : "span"
      return (0, n.jsx)(
        c,
        {
          className: (0, l.A)(
            "contents",
            d ? "activeMatch-zYQzrg" : "inactiveMatch-Qig57X",
            "code" === e.type && "block-J25qtF",
          ),
          "data-page-comment-code-block": "code" === e.type ? "" : void 0,
          ref: (t) => {
            if (null != t)
              return (function (e, t, a, n) {
                let l = e.ownerDocument.defaultView
                if (null == l) return
                let s = l.CSS?.highlights,
                  d = null,
                  c = [],
                  u = () => {
                    ;(d?.removeAttribute("data-page-find-block-match"), (d = null))
                    let e = s?.get(n)
                    for (let t of c) e?.delete(t)
                    ;(e?.size === 0 && s?.delete(n), (c = []))
                  },
                  p = () => {
                    u()
                    let p = "code" === t.type ? e.querySelector("[data-code-block-source] code") : e
                    if (null == p || p.textContent !== t.text) {
                      n === r &&
                        ((d = e.querySelector(
                          "code" === t.type && (0, i.I)(t.lang, !1)
                            ? '[data-markdown-copy="code-block"]'
                            : "[data-file-reference]",
                        )),
                        d?.setAttribute("data-page-find-block-match", ""))
                      return
                    }
                    if (null == s || null == l.Highlight) return
                    let m = s.get(n) ?? new l.Highlight()
                    for (let { start: e, end: t } of a) {
                      let a = (0, o.g9)(p, e),
                        n = (0, o.g9)(p, t)
                      if (null != a && null != n) {
                        let e = p.ownerDocument.createRange()
                        ;(e.setStart(a.node, a.offset), e.setEnd(n.node, n.offset), m.add(e), c.push(e))
                      }
                    }
                    s.set(n, m)
                  }
                p()
                let m = new l.MutationObserver(p)
                return (
                  m.observe(e, { childList: !0, characterData: !0, subtree: !0 }),
                  () => {
                    ;(m.disconnect(), u())
                  }
                )
              })(t, e, s, d ? r : "page-comment-code-find")
          },
          children: a,
        },
        t,
      )
    }
  },
  s8gN(e, t, a) {
    var n = a("mDXq"),
      l = a("f6KK"),
      o = a("HLFh"),
      i = a("ASxG"),
      r = a("MX6A"),
      s = a("TYyY"),
      d = a("HRo6"),
      c = a("l7CP")
    let u = "commentChatGptMention",
      p = "commentDotMention",
      m = "comment-recipient:",
      g = { kind: "chatgpt" },
      h = i.Ikc({
        kind: i.euz("dot"),
        name: i.YjP().min(1),
        orbit: i.Ikc({ orbitId: i.YjP().min(1), threadId: i.uRe() }),
      }),
      f = { kind: "none", target: null }
    function x(e) {
      return "chatgpt" === e ? u : p
    }
    class v extends n.ud {
      kind
      constructor(e) {
        ;(super(), (this.kind = e))
      }
      proseMirrorNodeName() {
        return x(this.kind)
      }
      unistNodeName() {
        return "link"
      }
      proseMirrorNodeSpec() {
        let e = "chatgpt" === this.kind ? "data-comment-chatgpt-mention" : "data-comment-dot-mention"
        return {
          inline: !0,
          inlineMention: !0,
          group: "inline",
          selectable: !1,
          attrs: {
            addedSpace: { default: !1, validate: "boolean" },
            addedParagraph: { default: !1, validate: "boolean" },
            dot: { default: null },
          },
          leafText: (e) => S(y(e)),
          toDOM: (t) => (0, d._)({ text: S(y(t)), tone: "accent", dataAttributes: { [e]: j(t) } }),
          parseDOM: [{ tag: `span[${e}]`, getAttrs: (t) => this.parseMention(t.getAttribute(e)) ?? !1 }],
        }
      }
      unistToProseMirrorTest(e) {
        return null != this.parseMention(e.url)
      }
      unistNodeToProseMirrorNodes({ node: e, schema: t }) {
        return t.nodes[this.proseMirrorNodeName()].create(this.parseMention(e.url))
      }
      proseMirrorNodeToUnistNodes(e) {
        return [{ type: "link", url: j(e), children: [{ type: "text", value: S(y(e)) }] }]
      }
      parseMention(e) {
        if (!e?.startsWith(m)) return null
        let t = URL.parse(e)
        if (t?.pathname !== this.kind) return null
        let a =
          "dot" === this.kind
            ? h.safeParse({
                kind: "dot",
                name: t.searchParams.get("name"),
                orbit: { orbitId: t.searchParams.get("orbit"), threadId: t.searchParams.get("thread") },
              })
            : null
        if (a?.success === !1) return null
        let n = "1" === t.searchParams.get("paragraph")
        return { addedSpace: n || "1" === t.searchParams.get("space"), addedParagraph: n, dot: a?.data ?? null }
      }
    }
    function y(e) {
      if (e.type.name === u) return g
      if (e.type.name === p) {
        var t
        let a = e.attrs.dot
        if (((t = a), h.safeParse(t).success)) return a
      }
      return null
    }
    function b(e, t, a) {
      let n = t.resolve(a).nodeAfter
      return {
        nodeType: t.type.schema.nodes[x(e.kind)],
        attrs: {
          addedSpace: !n?.isText || !/^\s/u.test(n.text ?? ""),
          addedParagraph: !1,
          dot: "dot" === e.kind ? e : null,
        },
      }
    }
    function w(e, t) {
      let { schema: a, tr: n } = e.state,
        o = a.nodes.paragraph,
        i = n.doc.firstChild?.type === o,
        { nodeType: r, attrs: s } = b(t, n.doc, +!!i)
      i ? n.insert(1, r.create(s)) : n.insert(0, o.create(null, r.create({ ...s, addedSpace: !0, addedParagraph: !0 })))
      let d = (0, c.W)(n, 2, !0)
      ;(i && e.state.selection.empty && 1 === e.state.selection.from && n.setSelection(l.U3.create(n.doc, d)),
        e.dispatch(_(n)),
        e.focus())
    }
    function _(e) {
      return e.setMeta(s.Gq, { type: "close", clearMentionSearch: !0 })
    }
    function I(e, t) {
      return "chatgpt" === t.kind ? "chatgpt" === e.kind : "dot" === e.kind && t.orbit.threadId === e.orbit.threadId
    }
    function k(e, t, a) {
      let { doc: n } = e,
        l = []
      for (let { from: o, to: i, replacement: r } of (n.descendants((e, o, i) => {
        let r = y(e)
        if (null == r) return
        let s = o + e.nodeSize
        if (!t(r, o))
          return void l.push({
            from: o,
            to: s,
            replacement: a?.(e, r) ?? n.type.schema.text("dot" === r.kind ? "@dot" : "@ChatGPT", e.marks),
          })
        let d = n.resolve(s),
          c = n.resolve(o).nodeBefore,
          u = d.nodeAfter,
          p =
            !0 === e.attrs.addedSpace &&
            u?.isText &&
            u.text?.startsWith(" ") &&
            (null == c || /\s$/u.test(c.text ?? "") || " " === u.text)
        !0 === e.attrs.addedParagraph && 1 === d.depth && n.childCount > 1 && i?.content.size === e.nodeSize + +!!p
          ? l.push({ from: d.before(), to: d.after() })
          : l.push({ from: o, to: s + +!!p })
      }),
      l.reverse()))
        null == r ? e.delete(o, i) : e.replaceWith(o, i, r)
    }
    function S(e) {
      return e?.kind === "dot" ? `@${e.name}` : "@ChatGPT"
    }
    function j(e) {
      let t = y(e)
      return !0 === e.attrs.addedParagraph ? C(t, "paragraph") : C(t, !0 === e.attrs.addedSpace ? "space" : void 0)
    }
    function C(e, t) {
      let a = new URL(m + (e?.kind ?? "chatgpt"))
      return (
        e?.kind === "dot" &&
          (a.searchParams.set("name", e.name),
          a.searchParams.set("orbit", e.orbit.orbitId),
          a.searchParams.set("thread", e.orbit.threadId)),
        null != t && a.searchParams.set(t, "1"),
        a.href
      )
    }
    a.d(
      t,
      {},
      {
        AW: function (e, t) {
          let { doc: a, tr: n } = e.state,
            { schema: l } = a.type,
            o = "dot" === t.kind ? t : null,
            i = S(t),
            r = null == o ? [i] : [i, "@dot"],
            s = l.nodes[x(t.kind)]
          ;(a.descendants((e, t) => {
            if (!e.isTextblock) return
            if (e.type.spec.code) return !1
            let a = e.textBetween(0, e.content.size, "", (e) => "\uFFFC".repeat(e.nodeSize)),
              i = 0
            for (; i < a.length;) {
              let d,
                c = a.indexOf("@", i)
              if (c < 0) break
              i = c + 1
              let u = a[c - 1]
              if (c > 0 && "" !== u.trim() && !"([{\uFFFC".includes(u)) continue
              let p = r.find(
                (e) =>
                  a.startsWith(e, c) &&
                  (function (e, t) {
                    let a = e.at("." === e[t] ? t + 1 : t)
                    return (
                      null == a ||
                      "" === a.trim() ||
                      ".,!?;:)]}\"'\u2026\u2014\u2013\u2019\u201D\xbb\u3002\uFF0C\u3001\uFF01\uFF1F\uFF1B\uFF1A\uFF09\uFF3D\uFF5D\u300D\u300F\u3011\u300B\u3009\u060C\u061B\u061F\u06D4\u0964\u0965\uFFFC".includes(
                        a,
                      )
                    )
                  })(a, c + e.length),
              )
              if (null == p) continue
              let m = c + p.length
              ;((i = m),
                e.rangeHasMark(c, m, l.marks.link) ||
                  e.rangeHasMark(c, m, l.marks.code) ||
                  (e.nodesBetween(c, m, (e) => {
                    d = d?.filter((t) => t.isInSet(e.marks)) ?? e.marks
                  }),
                  n.replaceWith(n.mapping.map(t + 1 + c), n.mapping.map(t + 1 + m), s.create({ dot: o }, null, d))))
            }
            return !1
          }),
          n.docChanged)
            ? (e.dispatch(_(n)), e.focus())
            : w(e, t)
        },
        Ff: w,
        HN: function (e) {
          let t = C(e, "space")
          return (0, r.xR)(S(e), t, null, !0) + " "
        },
        Hw: function (e) {
          let t,
            a = !1
          return (e?.descendants((e) => {
            if (a && null != t) return !1
            let n = y(e)
            return (n?.kind === "chatgpt" ? (a = !0) : n?.kind === "dot" && null == t && (t = n), !a || null == t)
          }),
          null != t)
            ? { kind: a ? "both" : "dot", target: t }
            : a
              ? { kind: "chatgpt", target: g }
              : f
        },
        Ii: class extends v {
          constructor() {
            super("chatgpt")
          }
        },
        W3: function (e, t) {
          let a = new o.dL(e)
          return (k(a, (e) => void 0 === t || (null != t && I(e, t))), a.doc)
        },
        cD: b,
        gm: class extends v {
          constructor() {
            super("dot")
          }
        },
        mn: function (e, t) {
          let a = e.doc.type.schema.nodes[x(t.kind)]
          return (
            e.doc.descendants((n, l) => {
              null != y(n) && e.setNodeMarkup(l, a, { ...n.attrs, dot: "dot" === t.kind ? t : null }, n.marks)
            }),
            _(e)
          )
        },
        vr: function (e, t, a) {
          let n = new o.dL(e),
            l = !1
          return (
            k(
              n,
              () => !1,
              (n, o) =>
                !l && I(o, t)
                  ? ((l = !0), e.type.schema.nodes.pageTaskMention.create({ path: a }, null, n.marks))
                  : null,
            ),
            n.doc
          )
        },
        x: function (e) {
          return (k(e, (e, t) => 1 === t), _(e))
        },
      },
    )
  },
  ybMm(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("on57"),
      i = a("iodE"),
      r = a("K4Cx"),
      s = a("qmMi"),
      d = a("f6KK"),
      c = a("zd8w"),
      u = a("OtMi"),
      p = a("hGwx"),
      m = a("rS3J"),
      g = a("td7D"),
      h = a("v5fl"),
      f = a("T1PX"),
      x = a("HRo6"),
      v = a("jiwy"),
      y = a("sjCL"),
      b = a("oixE"),
      w = a("lKu2"),
      _ = a("UOwN"),
      I = a("fEVS"),
      k = a("VD7U"),
      S = a("OWtl"),
      j = a("V8uZ"),
      C = a("bIvi"),
      A = a("s8gN"),
      M = a("HHfq"),
      T = a("WtpQ"),
      P = a("idBd"),
      E = a("Rkui"),
      N = a("Tw8q"),
      U = a("MR2J"),
      O = a("mvYr"),
      D = a("zFEE"),
      R = a("puTD")
    function L(e) {
      let t = e?.view
      return null != t && !t.isDestroyed && (0, A.Hw)(t.state.doc).target?.kind === "chatgpt"
    }
    function z() {
      return crypto.randomUUID()
    }
    a.d(
      t,
      {},
      {
        w: function (e) {
          let t,
            a,
            o,
            s,
            d,
            c,
            u,
            p,
            m,
            g = (0, l.c)(45),
            { animationControls: h, animateExpansion: x, unifiedComments: v, children: y } = e,
            b = void 0 === x || x,
            w = void 0 !== v && v,
            [_, I] = (0, i.xQ)(b && !w && null != h),
            k = (0, f.I)()
          if (!_ && !b) return null
          if (w) {
            let e,
              t,
              a,
              l,
              o,
              i = _ ? "open" : "closed",
              s = !_
            ;(g[0] !== b || g[1] !== k
              ? ((e = !!b && !k && { opacity: 0, y: -3 }), (g[0] = b), (g[1] = k), (g[2] = e))
              : (e = g[2]),
              g[3] === Symbol.for("react.memo_cache_sentinel") ? ((t = { opacity: 1, y: 0 }), (g[3] = t)) : (t = g[3]))
            let d = k || !b ? 0 : 0.16
            return (
              g[4] !== d ? ((a = { duration: d, ease: "easeOut" }), (g[4] = d), (g[5] = a)) : (a = g[5]),
              g[6] !== y || g[7] !== e || g[8] !== a
                ? ((l = (0, n.jsx)(r.P.div, {
                    "data-page-comment-reply-content": !0,
                    initial: e,
                    animate: t,
                    transition: a,
                    children: y,
                  })),
                  (g[6] = y),
                  (g[7] = e),
                  (g[8] = a),
                  (g[9] = l))
                : (l = g[9]),
              g[10] !== i || g[11] !== s || g[12] !== l
                ? ((o = (0, n.jsx)("div", { "data-page-comment-reply-expansion": i, hidden: s, children: l })),
                  (g[10] = i),
                  (g[11] = s),
                  (g[12] = l),
                  (g[13] = o))
                : (o = g[13]),
              o
            )
          }
          let S = _ ? "open" : "closed",
            C = !_,
            A = !_
          ;(g[14] !== b || g[15] !== k
            ? ((t = !!b && !k && { gridTemplateRows: "0fr", opacity: 0, overflow: "hidden" }),
              (g[14] = b),
              (g[15] = k),
              (g[16] = t))
            : (t = g[16]),
            g[17] !== h
              ? ((a = h ?? { gridTemplateRows: "1fr", opacity: 1, transitionEnd: { overflow: "visible" } }),
                (g[17] = h),
                (g[18] = a))
              : (a = g[18]))
          let M = _ ? "1fr" : "0fr",
            T = +!!_,
            P = _ ? "visible" : "hidden"
          return (
            g[19] !== P ? ((o = { overflow: P }), (g[19] = P), (g[20] = o)) : (o = g[20]),
            g[21] !== o || g[22] !== M || g[23] !== T
              ? ((s = { layout: { gridTemplateRows: M, opacity: T, overflow: "hidden", transitionEnd: o } }),
                (g[21] = o),
                (g[22] = M),
                (g[23] = T),
                (g[24] = s))
              : (s = g[24]),
            g[25] !== h
              ? ((d = null == h ? { gridTemplateRows: "0fr", opacity: 0, overflow: "hidden" } : void 0),
                (g[25] = h),
                (g[26] = d))
              : (d = g[26]),
            g[27] !== _ || g[28] !== I
              ? ((c = () => {
                  _ || I?.()
                }),
                (g[27] = _),
                (g[28] = I),
                (g[29] = c))
              : (c = g[29]),
            g[30] !== k ? ((u = k ? { duration: 0 } : j.X7), (g[30] = k), (g[31] = u)) : (u = g[31]),
            g[32] !== y
              ? ((p = (0, n.jsx)("div", {
                  className: "min-h-0 min-w-0",
                  children: (0, n.jsx)("div", { "data-page-comment-reply-content": !0, children: y }),
                })),
                (g[32] = y),
                (g[33] = p))
              : (p = g[33]),
            g[34] !== s ||
            g[35] !== d ||
            g[36] !== c ||
            g[37] !== u ||
            g[38] !== p ||
            g[39] !== S ||
            g[40] !== C ||
            g[41] !== A ||
            g[42] !== t ||
            g[43] !== a
              ? ((m = (0, n.jsx)(r.P.div, {
                  className: "grid",
                  "data-page-comment-reply-expansion": S,
                  inert: C,
                  "aria-hidden": A,
                  initial: t,
                  animate: a,
                  variants: s,
                  exit: d,
                  onAnimationComplete: c,
                  transition: u,
                  children: p,
                })),
                (g[34] = s),
                (g[35] = d),
                (g[36] = c),
                (g[37] = u),
                (g[38] = p),
                (g[39] = S),
                (g[40] = C),
                (g[41] = A),
                (g[42] = t),
                (g[43] = a),
                (g[44] = m))
              : (m = g[44]),
            m
          )
        },
        z: function (e) {
          let t,
            a,
            i,
            r,
            f,
            j,
            q,
            B,
            $,
            F,
            K,
            G,
            Y,
            W,
            V,
            H,
            X,
            Q,
            J,
            Z,
            ee,
            et,
            ea,
            en,
            el,
            eo,
            ei,
            er = (0, l.c)(149),
            {
              pageId: es,
              presence: ed,
              comments: ec,
              thread: eu,
              authorAccountUserId: ep,
              authorName: em,
              autoFocus: eg,
              isVisible: eh,
              unifiedComments: ef,
              initialSelection: ex,
              initialBody: ev,
              takeNativeDraft: ey,
              recipientControl: eb,
              body: ew,
              persistedBody: e_,
              onDictationBusyChange: eI,
              canMention: ek,
              canSubmit: eS,
              isReply: ej,
              editMessageId: eC,
              surfaceVariant: eA,
              onBodyChange: eM,
              onCancel: eT,
              onDismiss: eP,
              isLinkedDotReply: eE,
              onSubmit: eN,
              renderTaskComposer: eU,
            } = e,
            eO = void 0 === eh || eh,
            eD = void 0 !== ef && ef,
            eR = void 0 === ek || ek,
            eL = void 0 === eS || eS,
            ez = void 0 === eA ? "default" : eA,
            eq = (0, s.gh)(S.u),
            eB = (0, c.useId)(),
            e$ = (0, c.useRef)(null),
            [eF, eK] = (0, c.useState)(!1),
            [eG, eY] = (0, c.useState)()
          er[0] !== ep || er[1] !== ew
            ? ((t = (0, w.jX)(ew, ep)), (er[0] = ep), (er[1] = ew), (er[2] = t))
            : (t = er[2])
          let eW = (0, s._U)(w.OU, t),
            [eV, eH] = (0, c.useState)(!1)
          er[3] !== ep || er[4] !== eW
            ? ((a = { owner: ep, labels: eW }), (er[3] = ep), (er[4] = eW), (er[5] = a))
            : (a = er[5])
          let [eX, eQ] = (0, c.useState)(a)
          er[6] !== ep || er[7] !== eX || er[8] !== eV || er[9] !== eW
            ? ((i = (0, w.FL)(eX, { owner: ep, labels: eW }, eV)),
              (er[6] = ep),
              (er[7] = eX),
              (er[8] = eV),
              (er[9] = eW),
              (er[10] = i))
            : (i = er[10])
          let eJ = i
          eJ !== eX && eQ(eJ)
          let [eZ, e1] = (0, c.useState)(null),
            e0 = (0, c.useRef)(null)
          ;(er[11] !== eZ || er[12] !== ex || er[13] !== eJ || er[14] !== eF
            ? ((r = () => {
                if (null == eZ || eZ.view.isDestroyed) return
                let e = eZ.view,
                  t = e.props.nodeViews
                if (
                  (e.setProps({
                    nodeViews: {
                      ...t,
                      pageTaskMention: (e) => {
                        let t = "string" == typeof e.attrs.path ? (0, I.UR)(e.attrs.path) : null,
                          a = (0, I.R9)(t),
                          n = null == t ? void 0 : (0, w.Xz)(eJ, t)
                        return {
                          dom: (0, x._)({
                            text: null == n ? a : `@${n}`,
                            tone: "neutral",
                            dataAttributes: {
                              "page-task-mention-path": e.attrs.path,
                              ...(0, m.LL)({ href: e.attrs.path, label: a }),
                            },
                          }),
                        }
                      },
                    },
                  }),
                  e0.current !== eZ)
                ) {
                  e0.current = eZ
                  let t = eF ? 0 : ex
                  null != t && (0, T.nH)(e, t)
                }
                return () => {
                  e.isDestroyed || e.setProps({ nodeViews: t })
                }
              }),
              (f = [eZ, eJ, ex, eF]),
              (er[11] = eZ),
              (er[12] = ex),
              (er[13] = eJ),
              (er[14] = eF),
              (er[15] = r),
              (er[16] = f))
            : ((r = er[15]), (f = er[16])),
            (0, c.useLayoutEffect)(r, f),
            er[17] !== eZ || er[18] !== ey
              ? ((j = () => {
                  let e = null == eZ ? null : ey?.()
                  if (null == eZ || null == e) return
                  let { body: t, offset: a } = e
                  if (null == a)
                    return void eZ.restoreDraft(t, {
                      document: (0, g.hI)({ schema: eZ.view.state.schema, text: t }),
                      plainTextMode: !1,
                    })
                  let { doc: n, caret: l } = (0, T.IR)(t, a, (e) => eZ.parsePromptText(e))
                  eZ.view.dom.blur()
                  let { state: o } = eZ.view,
                    i = o.tr.replaceWith(0, o.doc.content.size, n.content)
                  ;(i.setSelection(null == l ? d.U3.atEnd(i.doc) : d.U3.near(i.doc.resolve(l.pos))),
                    eZ.view.dispatch(i.setMeta("addToHistory", !1)),
                    eZ.focus())
                }),
                (q = [eZ, ey]),
                (er[17] = eZ),
                (er[18] = ey),
                (er[19] = j),
                (er[20] = q))
              : ((j = er[19]), (q = er[20])),
            (0, c.useLayoutEffect)(j, q))
          let e2 = (0, c.useRef)(null),
            [e3, e4] = (0, c.useState)(),
            e5 = eD && null == eC && null != eU
          er[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((B = { disableExposureLog: !1 }), (er[21] = B))
            : (B = er[21])
          let e6 = (0, s._U)(!!eO && !!eL && null != eb && P.U_, B),
            e7 = (0, s.Ul)(e6 ? U.wb : null),
            e8 = e6 || e5,
            e9 = (0, s.Ul)(!!eO && !!e8 && v.VK),
            te = (0, s._U)(eO && e8 ? y.fV : null, null),
            [tt, ta] = (0, c.useState)(z),
            tn = (0, h.lD)(eZ, L, "document"),
            tl = eO && e8 && tn,
            to = tl && null != eu ? (0, O._)(eu.messages, ep)?.mention : void 0,
            ti = (0, s._U)(tl && te?.backend === "chatgpt" && to?.threadId == null ? k.Go : void 0, tt),
            tr = to?.threadId != null ? to : te,
            ts = to?.threadId ?? null,
            td = ti ?? void 0
          er[22] !== tr || er[23] !== ts || er[24] !== td
            ? (($ = { ...tr, threadId: ts, draftId: td }), (er[22] = tr), (er[23] = ts), (er[24] = td), (er[25] = $))
            : ($ = er[25])
          let tc = $,
            tu = (0, s._U)(!!tl && D.V, tc)
          er[26] !== ep || er[27] !== em
            ? ((F = (e, t) =>
                null == ep ? "" : (0, I.CA)({ id: u.A, owner: ep, ownerName: em, orbit: t }, u.A, e) + " "),
              (er[26] = ep),
              (er[27] = em),
              (er[28] = F))
            : (F = er[28])
          let tp = F
          er[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((K = () => {
                e2.current = null
              }),
              (er[29] = K))
            : (K = er[29])
          let tm = (0, C.K)(K)
          ;(er[30] !== e8 || er[31] !== tm || er[32] !== tu
            ? ((G = () => {
                ;(!e8 || tu) && tm()
              }),
              (Y = [e8, tm, tu]),
              (er[30] = e8),
              (er[31] = tm),
              (er[32] = tu),
              (er[33] = G),
              (er[34] = Y))
            : ((G = er[33]), (Y = er[34])),
            (0, c.useLayoutEffect)(G, Y),
            er[35] !== ew || er[36] !== tl || er[37] !== tm || er[38] !== eq || er[39] !== tc
              ? ((W = (e) => {
                  let t = e2.current
                  return (
                    t?.mentionId === e &&
                    ((tm(), t.body !== ew || (tl && eq.get(D.V, tc)))
                      ? (e4(void 0), !1)
                      : (e4((t) => (t?.mentionId === e ? { ...t, pending: !0 } : t)), !0))
                  )
                }),
                (er[35] = ew),
                (er[36] = tl),
                (er[37] = tm),
                (er[38] = eq),
                (er[39] = tc),
                (er[40] = W))
              : (W = er[40]))
          let tg = (0, C.K)(W)
          er[41] !== tm || er[42] !== eZ || er[43] !== eT || er[44] !== eP
            ? ((V = () => {
                if ((tm(), e4(void 0), null != eZ && !eZ.view.isDestroyed)) {
                  let e = (0, p.v)(eZ.view)
                  null == e || e.eq(eZ.view.state.selection) || eZ.view.dispatch(eZ.view.state.tr.setSelection(e))
                }
                ;(eP ?? eT)()
              }),
              (er[41] = tm),
              (er[42] = eZ),
              (er[43] = eT),
              (er[44] = eP),
              (er[45] = V))
            : (V = er[45])
          let th = V
          er[46] !== e3 ||
          er[47] !== ew ||
          er[48] !== e8 ||
          er[49] !== tm ||
          er[50] !== th ||
          er[51] !== eM ||
          er[52] !== e_ ||
          er[53] !== eU ||
          er[54] !== tg ||
          er[55] !== eG
            ? ((H = eU?.(
                e3?.body ?? ew,
                th,
                (e, t) => {
                  let a = void 0 === t ? e : t
                  ;(tm(), ta(crypto.randomUUID()), e4(void 0), eM(e, a), eK(!0))
                },
                eG,
                e3?.persistedBody ?? e_,
                e8 ? tg : void 0,
                null == e3
                  ? void 0
                  : {
                      attempt: e3.attempt,
                      onSettled: () => {
                        e4((e) =>
                          e?.mentionId === e3.mentionId && e.attempt === e3.attempt ? { ...e, pending: !1 } : e,
                        )
                      },
                    },
              )),
              (er[46] = e3),
              (er[47] = ew),
              (er[48] = e8),
              (er[49] = tm),
              (er[50] = th),
              (er[51] = eM),
              (er[52] = e_),
              (er[53] = eU),
              (er[54] = tg),
              (er[55] = eG),
              (er[56] = H))
            : (H = er[56])
          let tf = H
          if (null != tf && !e5) {
            let e,
              t,
              a,
              l,
              i = ej ? "page-comment-thread-row pb-2.5" : "gap-2",
              r = eD && ej && "in-data-[comment-layout=floating]:mt-3.5 in-data-[comment-layout=floating]:pb-0"
            return (
              er[57] !== i || er[58] !== r
                ? ((e = (0, o.A)("page-comment-typography flex min-w-0 items-start", i, r)),
                  (er[57] = i),
                  (er[58] = r),
                  (er[59] = e))
                : (e = er[59]),
              er[60] !== ep || er[61] !== em || er[62] !== ej
                ? ((t = ej
                    ? (0, n.jsx)("div", {
                        className: "shrink-0 pt-1.5",
                        children: (0, n.jsx)(_.Y, { accountUserId: ep, name: em }),
                      })
                    : null),
                  (er[60] = ep),
                  (er[61] = em),
                  (er[62] = ej),
                  (er[63] = t))
                : (t = er[63]),
              er[64] !== tf
                ? ((a = (0, n.jsx)("div", { className: "min-w-0 flex-1", children: tf })), (er[64] = tf), (er[65] = a))
                : (a = er[65]),
              er[66] !== e || er[67] !== t || er[68] !== a
                ? ((l = (0, n.jsxs)("div", { "data-page-comment-composer": !0, className: e, children: [t, a] })),
                  (er[66] = e),
                  (er[67] = t),
                  (er[68] = a),
                  (er[69] = l))
                : (l = er[69]),
              l
            )
          }
          er[70] !== ep || er[71] !== em
            ? ((X = (0, n.jsx)(_.Y, { accountUserId: ep, name: em })), (er[70] = ep), (er[71] = em), (er[72] = X))
            : (X = er[72])
          let tx = void 0 === eg || eg || eF,
            tv = eL && !e3?.pending
          ;(er[73] !== e9 ? ((Q = (e) => "dot" !== e.kind || e9), (er[73] = e9), (er[74] = Q)) : (Q = er[74]),
            er[75] !== tp ? ((J = (e) => tp({}, e.orbit)), (er[75] = tp), (er[76] = J)) : (J = er[76]))
          let ty = null == te ? void 0 : tp(te)
          er[77] !== e6 || er[78] !== e7 || er[79] !== eb
            ? ((Z = e6 && null != eb ? { ...eb, primaryDot: e7 } : void 0),
              (er[77] = e6),
              (er[78] = e7),
              (er[79] = eb),
              (er[80] = Z))
            : (Z = er[80])
          let tb = null != es && (eR || e6 || null != eU)
          ;(er[81] !== eR || er[82] !== es || er[83] !== eq
            ? ((ee = (e) => {
                ;(eH(!0),
                  eR && null != es && e.target instanceof HTMLElement && e.target.isContentEditable && (0, b.Y)(eq, es))
              }),
              (er[81] = eR),
              (er[82] = es),
              (er[83] = eq),
              (er[84] = ee))
            : (ee = er[84]),
            er[85] === Symbol.for("react.memo_cache_sentinel") ? ((et = () => eH(!1)), (er[85] = et)) : (et = er[85]),
            er[86] !== e3 || er[87] !== ew || er[88] !== tm || er[89] !== eM
              ? ((ea = (e, t) => {
                  ;(null == e3 || e3.pending || e === ew || (tm(), e4(void 0)), eM(e, t))
                }),
                (er[86] = e3),
                (er[87] = ew),
                (er[88] = tm),
                (er[89] = eM),
                (er[90] = ea))
              : (ea = er[90]),
            er[91] !== ep ||
            er[92] !== em ||
            er[93] !== e3?.attempt ||
            er[94] !== e3?.mentionId ||
            er[95] !== e3?.pending ||
            er[96] !== ew ||
            er[97] !== eZ ||
            er[98] !== eE ||
            er[99] !== eM ||
            er[100] !== eN ||
            er[101] !== e_ ||
            er[102] !== tt ||
            er[103] !== eq ||
            er[104] !== e5 ||
            er[105] !== tf ||
            er[106] !== tc
              ? ((en = (e, t, a) => {
                  if (null != e2.current || e3?.pending) return
                  let n =
                    null == a && e5 && null != tf
                      ? (0, I.FD)(ew).find((e) => e.owner === ep && null == e.threadId && "page" !== e.source)
                      : void 0
                  if (null == ep || (null == a && null == n)) return void eN(e)
                  if (a?.kind === "chatgpt" && eq.get(D.V, tc)) return
                  let l = n?.id ?? e3?.mentionId ?? (a?.kind === "chatgpt" ? tt : crypto.randomUUID()),
                    o = ew,
                    i = e_ ?? ew
                  if (null != a) {
                    let t = {
                        id: l,
                        owner: ep,
                        ownerName: em,
                        threadId: null,
                        orbit: "dot" === a.kind ? a.orbit : void 0,
                      },
                      n = (0, I.P)(t),
                      r = `[${(0, I.R9)(t)}](${n}) `
                    if (
                      ((o = r + e),
                      (i =
                        e5 && null != eZ
                          ? eZ.getPersistedText((0, A.vr)(eZ.dictation.document, a, n)).trim()
                          : r + (eZ?.getPersistedText((0, A.W3)(eZ.dictation.document, a)) ?? e)),
                      eE?.(t))
                    )
                      return void eN(i)
                  }
                  ;((e2.current = { mentionId: l, body: e5 ? ew : o }),
                    e5
                      ? e4({ mentionId: l, body: o, persistedBody: i, attempt: (e3?.attempt ?? 0) + 1, pending: !1 })
                      : eM(o, i))
                }),
                (er[91] = ep),
                (er[92] = em),
                (er[93] = e3?.attempt),
                (er[94] = e3?.mentionId),
                (er[95] = e3?.pending),
                (er[96] = ew),
                (er[97] = eZ),
                (er[98] = eE),
                (er[99] = eM),
                (er[100] = eN),
                (er[101] = e_),
                (er[102] = tt),
                (er[103] = eq),
                (er[104] = e5),
                (er[105] = tf),
                (er[106] = tc),
                (er[107] = en))
              : (en = er[107]),
            er[108] !== ep ||
            er[109] !== em ||
            er[110] !== eR ||
            er[111] !== e8 ||
            er[112] !== ec ||
            er[113] !== eO ||
            er[114] !== eM ||
            er[115] !== es ||
            er[116] !== ed ||
            er[117] !== eU ||
            er[118] !== eu
              ? ((el =
                  null == es
                    ? void 0
                    : (e) =>
                        (0, n.jsx)(N.z, {
                          anchorRef: e$,
                          isActive: eO,
                          children: (0, n.jsx)(E.N, {
                            ...e,
                            className: "w-full",
                            pageId: es,
                            presence: ed,
                            comments: ec,
                            thread: eu,
                            canMention: eR,
                            authorAccountUserId: ep,
                            authorName: em,
                            insertChatGptMention: e8,
                            onChatGPT:
                              null == eU
                                ? void 0
                                : (e, t, a) => {
                                    ;(eY(t), eM(e, a))
                                  },
                          }),
                        })),
                (er[108] = ep),
                (er[109] = em),
                (er[110] = eR),
                (er[111] = e8),
                (er[112] = ec),
                (er[113] = eO),
                (er[114] = eM),
                (er[115] = es),
                (er[116] = ed),
                (er[117] = eU),
                (er[118] = eu),
                (er[119] = el))
              : (el = er[119]),
            er[120] !== ew ||
            er[121] !== e8 ||
            er[122] !== th ||
            er[123] !== eC ||
            er[124] !== ev ||
            er[125] !== ej ||
            er[126] !== eO ||
            er[127] !== eI ||
            er[128] !== e_ ||
            er[129] !== eB ||
            er[130] !== ez ||
            er[131] !== X ||
            er[132] !== tx ||
            er[133] !== tv ||
            er[134] !== Q ||
            er[135] !== J ||
            er[136] !== ty ||
            er[137] !== Z ||
            er[138] !== tb ||
            er[139] !== ee ||
            er[140] !== ea ||
            er[141] !== en ||
            er[142] !== el ||
            er[143] !== eD ||
            er[144] !== tu
              ? ((eo = (0, n.jsx)(M.g, {
                  "data-page-comment-composer": !0,
                  authorAvatar: X,
                  autoFocus: tx,
                  unifiedComments: eD,
                  body: ew,
                  initialBody: ev,
                  persistedBody: e_,
                  canSubmit: tv,
                  inlineRecipientMentions: e8,
                  workLimitReached: tu,
                  isRecipientAvailable: Q,
                  savedDotBodyPrefix: J,
                  savedChatGptBodyPrefix: ty,
                  recipientControl: Z,
                  editMessageId: eC,
                  editorRef: e1,
                  enableSuggestions: tb,
                  inputContainerClassName: R.A.PageCommentMentions,
                  inputContainerRef: e$,
                  isReply: ej,
                  isVisible: eO,
                  onFocusCapture: ee,
                  onBlurCapture: et,
                  onBodyChange: ea,
                  onDictationBusyChange: eI,
                  onCancel: th,
                  onSubmit: en,
                  sessionId: eB,
                  surfaceVariant: ez,
                  renderAtMentionList: el,
                })),
                (er[120] = ew),
                (er[121] = e8),
                (er[122] = th),
                (er[123] = eC),
                (er[124] = ev),
                (er[125] = ej),
                (er[126] = eO),
                (er[127] = eI),
                (er[128] = e_),
                (er[129] = eB),
                (er[130] = ez),
                (er[131] = X),
                (er[132] = tx),
                (er[133] = tv),
                (er[134] = Q),
                (er[135] = J),
                (er[136] = ty),
                (er[137] = Z),
                (er[138] = tb),
                (er[139] = ee),
                (er[140] = ea),
                (er[141] = en),
                (er[142] = el),
                (er[143] = eD),
                (er[144] = tu),
                (er[145] = eo))
              : (eo = er[145]))
          let tw = eo,
            t_ = null != e3 && tf
          return (
            er[146] !== tw || er[147] !== t_
              ? ((ei = (0, n.jsxs)(n.Fragment, { children: [tw, t_] })), (er[146] = tw), (er[147] = t_), (er[148] = ei))
              : (ei = er[148]),
            ei
          )
        },
      },
    )
  },
  HHfq(e, t, a) {
    a.d(t, { g: () => T })
    var n = a("ABep"),
      l = a("QosV"),
      o = a("SOEF"),
      i = a("on57"),
      r = a("DBCl"),
      s = a("zd8w"),
      d = a("Wf1j"),
      c = a("CZMt"),
      u = a("osar"),
      p = a("v5fl"),
      m = a("aVzC"),
      g = a("HgLj"),
      h = a("s8gN"),
      f = a("mDXq")
    class x extends f.ud {
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
        let a = t.marks.literalPaste.create()
        return e.map((e) => e.mark(a.addToSet(e.marks)))
      }
    }
    var v = a("TecJ"),
      y = a("Qgfj"),
      b = a("oyxz"),
      w = a("Sezd"),
      _ = a("bqtn"),
      I = a("HOLv"),
      k = a("wq58"),
      S = a("zOWn")
    let j =
        "mx-0! px-1! py-1.25! text-control-label! leading-4.5! font-normal! not-hover:focus-visible:ring-2 not-hover:focus-visible:ring-ring",
      C = (0, y.YK)({
        chatGpt: { id: "pages.comments.chatGptRecipient", defaultMessage: "ChatGPT" },
        sendToRecipient: { id: "pages.comments.sendToRecipient", defaultMessage: "Send to {recipient}" },
      })
    function A(e) {
      let t,
        a,
        o,
        i,
        r,
        c,
        u = (0, l.c)(31),
        {
          checked: p,
          onCheckedChange: m,
          recipient: g,
          selectedRecipient: h,
          onRecipientChange: f,
          primaryDot: x,
          activeDotName: y,
          disabled: A,
          checkboxDisabled: M,
          onMenuClose: T,
          menuContainer: P,
        } = e,
        E = void 0 === g ? "chatgpt" : g,
        N = void 0 === h ? E : h,
        U = void 0 !== A && A,
        O = (0, d.A)(),
        D = (0, s.useId)()
      u[0] !== O ? ((t = O.formatMessage(C.chatGpt)), (u[0] = O), (u[1] = t)) : (t = u[1])
      let R = t
      u[2] !== O || u[3] !== x?.name
        ? ((a =
            x?.name ??
            O.formatMessage({ id: "pages.comments.ownDotRecipient", defaultMessage: "your {dot}" }, { dot: "dot" })),
          (u[2] = O),
          (u[3] = x?.name),
          (u[4] = a))
        : (a = u[4])
      let L = a,
        z = "dot" === E ? (y ?? L) : R
      u[5] !== O || u[6] !== z
        ? ((o = O.formatMessage(C.sendToRecipient, { recipient: z })), (u[5] = O), (u[6] = z), (u[7] = o))
        : (o = u[7])
      let q = o,
        B = U || (void 0 !== M && M)
      return (
        u[8] !== D || u[9] !== p || u[10] !== q || u[11] !== m || u[12] !== B
          ? ((i = (0, n.jsx)(w.S, {
              id: D,
              "aria-label": q,
              variant: "accent",
              className: "[--icon-secondary-size:14px]",
              checked: p,
              onCheckedChange: m,
              disabled: B,
            })),
            (u[8] = D),
            (u[9] = p),
            (u[10] = q),
            (u[11] = m),
            (u[12] = B),
            (u[13] = i))
          : (i = u[13]),
        u[14] !== R ||
        u[15] !== D ||
        u[16] !== U ||
        u[17] !== L ||
        u[18] !== O ||
        u[19] !== q ||
        u[20] !== P ||
        u[21] !== T ||
        u[22] !== f ||
        u[23] !== x ||
        u[24] !== E ||
        u[25] !== z ||
        u[26] !== N
          ? ((r =
              null != f && (null != x || "dot" === E)
                ? (0, n.jsx)("span", {
                    className: "whitespace-nowrap",
                    children: (0, n.jsx)(b.A, {
                      ...C.sendToRecipient,
                      values: {
                        recipient: (0, n.jsx)(
                          _.Ab,
                          {
                            portalContainer: P,
                            triggerButton: (0, n.jsxs)("button", {
                              type: "button",
                              disabled: U,
                              className:
                                "-ms-0.5 inline-flex items-center rounded-[4px] ps-0.5 align-baseline outline-none hover:bg-secondary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring data-[state=open]:bg-secondary-ghost-hover",
                              "aria-label": O.formatMessage({
                                id: "pages.comments.chooseRecipient",
                                defaultMessage: "Choose comment recipient",
                              }),
                              children: [z, (0, n.jsx)(I.I, { asset: v.D, className: "shrink-0" })],
                            }),
                            side: "bottom",
                            sideOffset: 1,
                            align: "start",
                            alignOffset: 1,
                            surface: "opaque",
                            contentClassName:
                              "min-w-[180px] rounded-[16px]! border border-subtle px-2 py-1.5 shadow-[0_4px_8px_0_rgb(0_0_0/0.05)]",
                            onCloseAutoFocus: (e) => {
                              null != T && (e.preventDefault(), T())
                            },
                            children: (0, n.jsxs)(_.ms.RadioGroup, {
                              "data-page-comments-controls": !0,
                              value: N ?? "",
                              onValueChange: (e) => {
                                ;("chatgpt" === e || ("dot" === e && null != x)) && f(e)
                              },
                              children: [
                                (0, n.jsx)(_.ms.RadioItem, {
                                  value: "chatgpt",
                                  variant: "chatgpt",
                                  className: j,
                                  icon: (0, n.jsx)(k.A, { className: "size-4" }),
                                  children: (0, n.jsx)("span", { className: "block truncate", children: R }),
                                }),
                                null != x &&
                                  (0, n.jsx)(_.ms.RadioItem, {
                                    value: "dot",
                                    variant: "chatgpt",
                                    className: j,
                                    icon: (0, n.jsx)(S.r, { conversationId: x.threadId, className: "size-4" }),
                                    children: (0, n.jsx)("span", { className: "block truncate", children: L }),
                                  }),
                              ],
                            }),
                          },
                          "recipient",
                        ),
                      },
                      children: (e) =>
                        s.Children.map(e, (e) =>
                          "string" == typeof e ? (0, n.jsx)("label", { htmlFor: D, children: e }) : e,
                        ),
                    }),
                  })
                : (0, n.jsx)("label", { htmlFor: D, children: q })),
            (u[14] = R),
            (u[15] = D),
            (u[16] = U),
            (u[17] = L),
            (u[18] = O),
            (u[19] = q),
            (u[20] = P),
            (u[21] = T),
            (u[22] = f),
            (u[23] = x),
            (u[24] = E),
            (u[25] = z),
            (u[26] = N),
            (u[27] = r))
          : (r = u[27]),
        u[28] !== r || u[29] !== i
          ? ((c = (0, n.jsxs)("div", {
              className: "flex items-center gap-1.5 text-control-label font-normal text-default",
              children: [i, r],
            })),
            (u[28] = r),
            (u[29] = i),
            (u[30] = c))
          : (c = u[30]),
        c
      )
    }
    var M = a("nIGd")
    function T(e) {
      let t,
        a,
        m,
        f,
        x,
        v,
        y,
        b,
        w,
        _,
        I,
        k,
        S,
        j,
        C,
        T,
        N,
        U,
        O,
        D,
        R,
        L,
        z,
        q,
        B,
        $,
        F,
        K,
        G,
        Y,
        W,
        V,
        H,
        X,
        Q,
        J,
        Z,
        ee,
        et,
        ea,
        en,
        el,
        eo,
        ei,
        er,
        es,
        ed,
        ec,
        eu,
        ep,
        em,
        eg,
        eh,
        ef,
        ex,
        ev,
        ey,
        eb,
        ew,
        e_,
        eI = (0, l.c)(156)
      eI[0] !== e
        ? (({
            authorAvatar: t,
            autoFocus: K,
            body: a,
            canSubmit: G,
            className: m,
            disabled: Y,
            editMessageId: f,
            editorRef: x,
            recipientControl: R,
            workLimitReached: W,
            enableSuggestions: v,
            initialBody: b,
            inputContainerClassName: _,
            inputContainerRef: I,
            inlineRecipientMentions: w,
            isReply: S,
            isRecipientAvailable: k,
            isVisible: V,
            getSavedBodyForLimit: y,
            onBlurCapture: j,
            onBodyChange: C,
            onCancel: T,
            onDictationBusyChange: N,
            onFocusCapture: U,
            onSubmit: O,
            persistedBody: D,
            renderAtMentionList: L,
            resolveWorkLimitReached: z,
            savedChatGptBodyPrefix: H,
            savedDotBodyPrefix: B,
            serializeUnassignedBody: $,
            sessionId: F,
            surfaceVariant: X,
            unifiedComments: Q,
            ...q
          } = e),
          (eI[0] = e),
          (eI[1] = t),
          (eI[2] = a),
          (eI[3] = m),
          (eI[4] = f),
          (eI[5] = x),
          (eI[6] = v),
          (eI[7] = y),
          (eI[8] = b),
          (eI[9] = w),
          (eI[10] = _),
          (eI[11] = I),
          (eI[12] = k),
          (eI[13] = S),
          (eI[14] = j),
          (eI[15] = C),
          (eI[16] = T),
          (eI[17] = N),
          (eI[18] = U),
          (eI[19] = O),
          (eI[20] = D),
          (eI[21] = R),
          (eI[22] = L),
          (eI[23] = z),
          (eI[24] = q),
          (eI[25] = B),
          (eI[26] = $),
          (eI[27] = F),
          (eI[28] = K),
          (eI[29] = G),
          (eI[30] = Y),
          (eI[31] = W),
          (eI[32] = V),
          (eI[33] = H),
          (eI[34] = X),
          (eI[35] = Q))
        : ((t = eI[1]),
          (a = eI[2]),
          (m = eI[3]),
          (f = eI[4]),
          (x = eI[5]),
          (v = eI[6]),
          (y = eI[7]),
          (b = eI[8]),
          (w = eI[9]),
          (_ = eI[10]),
          (I = eI[11]),
          (k = eI[12]),
          (S = eI[13]),
          (j = eI[14]),
          (C = eI[15]),
          (T = eI[16]),
          (N = eI[17]),
          (U = eI[18]),
          (O = eI[19]),
          (D = eI[20]),
          (R = eI[21]),
          (L = eI[22]),
          (z = eI[23]),
          (q = eI[24]),
          (B = eI[25]),
          ($ = eI[26]),
          (F = eI[27]),
          (K = eI[28]),
          (G = eI[29]),
          (Y = eI[30]),
          (W = eI[31]),
          (V = eI[32]),
          (H = eI[33]),
          (X = eI[34]),
          (Q = eI[35]))
      let ek = void 0 === K || K,
        eS = void 0 === G || G,
        ej = void 0 !== Y && Y,
        eC = void 0 !== W && W,
        eA = void 0 === V || V,
        eM = void 0 === H ? "" : H,
        eT = void 0 === X ? "default" : X,
        eP = void 0 !== Q && Q,
        eE = w ?? null != R,
        eN = (0, s.useContext)(u.k),
        eU = (0, d.A)(),
        eO = (0, s.useId)(),
        [eD, eR] = (0, s.useState)(null),
        [eL] = (0, s.useState)(a),
        [ez] = (0, s.useState)(E),
        [eq, eB] = (0, s.useState)(null)
      ;(eI[36] !== ek || eI[37] !== ej || eI[38] !== eq || eI[39] !== eA || eI[40] !== eP
        ? ((Z = () => {
            if (!eP || null == eq || !eA || !ek || ej) return
            let e = eq.view.dom.ownerDocument.defaultView
            if (null == e) return
            let t = e.requestAnimationFrame(() => {
              let t = e.document.activeElement?.closest('[role="dialog"], [role="menu"]')
              ;(null == t || "closed" === t.getAttribute("data-state") || t.contains(eq.view.dom)) && eq.focus()
            })
            return () => e.cancelAnimationFrame(t)
          }),
          (J = [eq, ek, ej, eA, eP]),
          (eI[36] = ek),
          (eI[37] = ej),
          (eI[38] = eq),
          (eI[39] = eA),
          (eI[40] = eP),
          (eI[41] = J),
          (eI[42] = Z))
        : ((J = eI[41]), (Z = eI[42])),
        (0, s.useLayoutEffect)(Z, J),
        eI[43] !== f || eI[44] !== eq || eI[45] !== eP
          ? ((ee = () => {
              ;(eP || null != f) && eq?.setEnterBehavior(null == f ? "enter" : "cmdAlways")
            }),
            (et = [eq, f, eP]),
            (eI[43] = f),
            (eI[44] = eq),
            (eI[45] = eP),
            (eI[46] = ee),
            (eI[47] = et))
          : ((ee = eI[46]), (et = eI[47])),
        (0, s.useLayoutEffect)(ee, et))
      let [e$, eF] = (0, s.useState)(null),
        eK = (0, p.lD)(eA && eE ? eq : null, P, "document"),
        eG = (0, h.Hw)(eK ?? void 0),
        eY = eG.target,
        eW = eC || z?.(a, "chatgpt" === eG.kind || "both" === eG.kind, "render") === !0,
        eV = R?.primaryDot
      eI[48] !== eV
        ? ((ea = (e) =>
            "chatgpt" === e
              ? { kind: "chatgpt" }
              : null == eV
                ? null
                : { kind: "dot", name: eV.name, orbit: { orbitId: eV.orbitId, threadId: eV.threadId } }),
          (eI[48] = eV),
          (eI[49] = ea))
        : (ea = eI[49])
      let eH = ea,
        eX = R?.recipient ?? "chatgpt",
        eQ = eH(eX),
        eJ = e$ ?? eQ,
        [eZ, e1] = (0, s.useState)(!1),
        e0 = R?.initialChecked && !eZ && "" === a && null == D && null != eQ ? (0, h.HN)(eQ) : void 0,
        e2 = D ?? e0 ?? a,
        e3 = eY?.kind ?? eJ?.kind ?? eX,
        e4 = eY ?? eJ,
        e5 = e4?.kind === "dot" && e4.orbit.orbitId !== eV?.orbitId ? null : e3,
        e6 = null != eY
      eI[50] !== a || eI[51] !== eq
        ? ((en = (e, t) => eq?.getText((0, h.W3)(e, t)) ?? a), (eI[50] = a), (eI[51] = eq), (eI[52] = en))
        : (en = eI[52])
      let e7 = en,
        e8 = null == eK ? a : e7(eK, eY)
      eI[53] !== a || eI[54] !== eK || eI[55] !== eq
        ? ((el = null == eK || "" !== (eq?.getText((0, h.W3)(eK, void 0)) ?? a).trim()),
          (eI[53] = a),
          (eI[54] = eK),
          (eI[55] = eq),
          (eI[56] = el))
        : (el = eI[56])
      let e9 = el
      eI[57] !== f || eI[58] !== y || eI[59] !== eM || eI[60] !== B || eI[61] !== $
        ? ((eo = (e, t) => {
            let a = y?.(e) ?? e,
              n = ""
            t?.kind === "dot" ? (n = B?.(t) ?? "") : t?.kind === "chatgpt" && (n = eM)
            let l = null == t && "" === n ? ($?.(a.trim()) ?? a) : a
            return (0, o.Uac)("" !== n || null != f ? n + l.trim() : l)
          }),
          (eI[57] = f),
          (eI[58] = y),
          (eI[59] = eM),
          (eI[60] = B),
          (eI[61] = $),
          (eI[62] = eo))
        : (eo = eI[62])
      let te = eo
      eI[63] !== eS ||
      eI[64] !== e7 ||
      eI[65] !== ej ||
      eI[66] !== eq ||
      eI[67] !== te ||
      eI[68] !== k ||
      eI[69] !== O ||
      eI[70] !== z ||
      eI[71] !== eE ||
      eI[72] !== eC
        ? ((ei = (e) => {
            let { body: t, submitSource: a } = e,
              n = eq?.dictation.document,
              l = (0, h.Hw)(eE ? n : void 0),
              o = l.target,
              i = null != n && "none" !== l.kind ? e7(n, o) : t
            !ej &&
              eS &&
              !eC &&
              z?.(t, "chatgpt" === l.kind || "both" === l.kind, "submit") !== !0 &&
              (null == o || k?.(o) !== !1) &&
              (null == n || "none" === l.kind || "" !== (eq?.getText((0, h.W3)(n, void 0)) ?? t).trim()) &&
              "" !== i.trim() &&
              te(i, o) &&
              O(i.trim(), a, o)
          }),
          (eI[63] = eS),
          (eI[64] = e7),
          (eI[65] = ej),
          (eI[66] = eq),
          (eI[67] = te),
          (eI[68] = k),
          (eI[69] = O),
          (eI[70] = z),
          (eI[71] = eE),
          (eI[72] = eC),
          (eI[73] = ei))
        : (ei = eI[73])
      let tt = ei,
        ta =
          "dot" === e3 && e6
            ? eU.formatMessage(
                {
                  id: "codex.space.page.comments.assignedPlaceholder",
                  defaultMessage: "Tell {recipient} what to change",
                },
                { recipient: e4?.kind === "dot" ? e4.name : "Dot" },
              )
            : eU.formatMessage({
                id: "codex.space.page.comments.createPlaceholder",
                defaultMessage: "Add others with @ or suggest an edit",
              }),
        tn = "floating" === q["data-comment-layout"] && null != R ? eR : void 0,
        tl = S ? "page-comment-thread-row pb-2.5" : "gap-2",
        to = eP && S && "in-data-[comment-layout=floating]:mt-3.5 in-data-[comment-layout=floating]:pb-0"
      ;(eI[74] !== m || eI[75] !== tl || eI[76] !== to
        ? ((er = (0, i.A)("page-comment-typography relative flex min-w-0 items-start", tl, to, m)),
          (eI[74] = m),
          (eI[75] = tl),
          (eI[76] = to),
          (eI[77] = er))
        : (er = eI[77]),
        eI[78] !== t || eI[79] !== S || eI[80] !== eP
          ? ((es =
              S && null != t
                ? (0, n.jsx)("div", {
                    className: (0, i.A)("shrink-0 pt-2", eP && "in-data-[comment-layout=floating]:pt-1.5"),
                    children: t,
                  })
                : null),
            (eI[78] = t),
            (eI[79] = S),
            (eI[80] = eP),
            (eI[81] = es))
          : (es = eI[81]))
      let ti = null != R && "[--composer-editor-placeholder-opacity:1]",
        tr =
          eP &&
          "in-data-[comment-layout=floating]:[--spacing-token-button-composer-sm:calc(var(--spacing)*6.5)] in-data-[comment-layout=floating]:[--annotation-comment-line-height:1.5] in-data-[comment-layout=floating]:[--annotation-comment-min-height:21px] in-data-[comment-layout=floating]:[--annotation-comment-editor-height:auto]"
      eI[82] !== _ || eI[83] !== ti || eI[84] !== tr
        ? ((ed = (0, i.A)(_, ti, tr, "min-w-0 flex-1")), (eI[82] = _), (eI[83] = ti), (eI[84] = tr), (eI[85] = ed))
        : (ed = eI[85])
      let ts = u.k
      eI[86] !== eN || eI[87] !== eP
        ? ((ec = eP ? { ...eN, appearance: "discussion" } : eN), (eI[86] = eN), (eI[87] = eP), (eI[88] = ec))
        : (ec = eI[88])
      let td = c.s,
        tc = null != R,
        tu =
          R &&
          (0, n.jsx)(A, {
            ...R,
            checked: e6,
            recipient: e3,
            selectedRecipient: e5,
            activeDotName: e4?.kind === "dot" ? e4.name : void 0,
            onCheckedChange: (e) => {
              if (null != eq && !eq.view.isDestroyed) {
                if (e)
                  if (null == eJ) return
                  else (0, h.AW)(eq.view, eJ)
                else (eF(eY), eq.view.dispatch((0, h.x)(eq.view.state.tr)), eq.focus())
                R.onPreferenceChange?.({ recipient: e3, checked: e })
              }
            },
            onRecipientChange:
              null == R.onPreferenceChange
                ? void 0
                : (e) => {
                    let t = eH(e)
                    e === e5 ||
                      null == t ||
                      null == eq ||
                      eq.view.isDestroyed ||
                      (eF(null),
                      R.onPreferenceChange?.({ recipient: e, checked: !0 }),
                      e6 ? eq.view.dispatch((0, h.mn)(eq.view.state.tr, t)) : (0, h.Ff)(eq.view, t))
                  },
            menuContainer: eD,
            disabled: ej,
            checkboxDisabled: !e6 && null == eJ,
            onMenuClose: () => eq?.focus(),
          }),
        tp = eP ? ez.unified : ez.legacy,
        tm = !eP && ek && !ej
      eI[89] !== x ? ((eu = (0, g.P)(x, eB)), (eI[89] = x), (eI[90] = eu)) : (eu = eI[90])
      let tg = !ej && eS && e9 && (null == eY || k?.(eY) !== !1) && te(e8, eY)
      ;(eI[91] !== eU || eI[92] !== eW
        ? ((ep = eW ? eU.formatMessage(M.H) : void 0), (eI[91] = eU), (eI[92] = eW), (eI[93] = ep))
        : (ep = eI[93]),
        eI[94] !== eU || eI[95] !== S
          ? ((em = S
              ? eU.formatMessage({ id: "codex.space.page.comments.submitReply", defaultMessage: "Reply" })
              : eU.formatMessage({ id: "codex.space.page.comments.submit", defaultMessage: "Comment" })),
            (eI[94] = eU),
            (eI[95] = S),
            (eI[96] = em))
          : (em = eI[96]),
        eI[97] !== f || eI[98] !== eU
          ? ((eg =
              null == f
                ? eU.formatMessage({ id: "codex.space.page.comments.body", defaultMessage: "Comment" })
                : eU.formatMessage({ id: "codex.space.page.comments.editBody", defaultMessage: "Comment text" })),
            (eI[97] = f),
            (eI[98] = eU),
            (eI[99] = eg))
          : (eg = eI[99]),
        eI[100] !== ta || eI[101] !== eU || eI[102] !== S
          ? ((eh = S
              ? eU.formatMessage({ id: "codex.space.page.comments.placeholder", defaultMessage: "Reply\u2026" })
              : ta),
            (eI[100] = ta),
            (eI[101] = eU),
            (eI[102] = S),
            (eI[103] = eh))
          : (eh = eI[103]))
      let th = F ?? eO
      eI[104] !== f
        ? ((ef = null == f ? { mode: "create" } : { mode: "edit", commentId: f }), (eI[104] = f), (eI[105] = ef))
        : (ef = eI[105])
      let tf = null == f ? "" : (b ?? eL)
      return (
        eI[106] !== e2 || eI[107] !== th || eI[108] !== ef || eI[109] !== tf
          ? ((ex = {
              sessionId: th,
              target: ef,
              body: tf,
              draftBody: e2,
              cwd: null,
              previewAlignment: "end",
              surfaceMode: "editor",
            }),
            (eI[106] = e2),
            (eI[107] = th),
            (eI[108] = ef),
            (eI[109] = tf),
            (eI[110] = ex))
          : (ex = eI[110]),
        eI[111] !== eZ || eI[112] !== C || eI[113] !== R?.initialChecked || eI[114] !== e1
          ? ((ev = (e, t) => {
              ;(R?.initialChecked && !eZ && e1(!0), C(e, t))
            }),
            (eI[111] = eZ),
            (eI[112] = C),
            (eI[113] = R?.initialChecked),
            (eI[114] = e1),
            (eI[115] = ev))
          : (ev = eI[115]),
        eI[116] !== td ||
        eI[117] !== e2 ||
        eI[118] !== v ||
        eI[119] !== eA ||
        eI[120] !== T ||
        eI[121] !== N ||
        eI[122] !== L ||
        eI[123] !== tt ||
        eI[124] !== eT ||
        eI[125] !== tc ||
        eI[126] !== tu ||
        eI[127] !== tp ||
        eI[128] !== tm ||
        eI[129] !== eu ||
        eI[130] !== tg ||
        eI[131] !== ep ||
        eI[132] !== em ||
        eI[133] !== eg ||
        eI[134] !== eh ||
        eI[135] !== ex ||
        eI[136] !== ev ||
        eI[137] !== eP
          ? ((ey = (0, n.jsx)(td, {
              embedded: !0,
              discussion: eP,
              hasRecipientControl: tc,
              footerStart: tu,
              isVisible: eA,
              surfaceVariant: eT,
              enableRichText: !0,
              enableSuggestions: v,
              markdownExtensions: tp,
              allowImageAttachments: !1,
              dictationProductSurface: "chatgpt",
              autoFocus: tm,
              editorRef: eu,
              canSubmit: tg,
              submitDisabledReason: ep,
              allowDirectSubmit: !0,
              defaultCreateSubmitMode: "direct",
              submitLabel: em,
              inputAriaLabel: eg,
              placeholder: eh,
              session: ex,
              value: e2,
              showAdjustEntry: !1,
              windowHeight: r.bUX + r.o6c,
              reservedTrayHeight: r.o6c,
              renderAtMentionList: L,
              onBodyChange: ev,
              onDictationBusyChange: N,
              onCancel: T,
              onEscape: T,
              onSubmit: tt,
              onDirectSubmit: tt,
            })),
            (eI[116] = td),
            (eI[117] = e2),
            (eI[118] = v),
            (eI[119] = eA),
            (eI[120] = T),
            (eI[121] = N),
            (eI[122] = L),
            (eI[123] = tt),
            (eI[124] = eT),
            (eI[125] = tc),
            (eI[126] = tu),
            (eI[127] = tp),
            (eI[128] = tm),
            (eI[129] = eu),
            (eI[130] = tg),
            (eI[131] = ep),
            (eI[132] = em),
            (eI[133] = eg),
            (eI[134] = eh),
            (eI[135] = ex),
            (eI[136] = ev),
            (eI[137] = eP),
            (eI[138] = ey))
          : (ey = eI[138]),
        eI[139] !== ts || eI[140] !== ec || eI[141] !== ey
          ? ((eb = (0, n.jsx)(ts, { value: ec, children: ey })),
            (eI[139] = ts),
            (eI[140] = ec),
            (eI[141] = ey),
            (eI[142] = eb))
          : (eb = eI[142]),
        eI[143] !== I || eI[144] !== ed || eI[145] !== eb
          ? ((ew = (0, n.jsx)("div", { ref: I, className: ed, children: eb })),
            (eI[143] = I),
            (eI[144] = ed),
            (eI[145] = eb),
            (eI[146] = ew))
          : (ew = eI[146]),
        eI[147] !== ej ||
        eI[148] !== j ||
        eI[149] !== U ||
        eI[150] !== q ||
        eI[151] !== tn ||
        eI[152] !== er ||
        eI[153] !== es ||
        eI[154] !== ew
          ? ((e_ = (0, n.jsxs)("div", {
              ...q,
              ref: tn,
              className: er,
              inert: ej,
              onFocusCapture: U,
              onBlurCapture: j,
              children: [es, ew],
            })),
            (eI[147] = ej),
            (eI[148] = j),
            (eI[149] = U),
            (eI[150] = q),
            (eI[151] = tn),
            (eI[152] = er),
            (eI[153] = es),
            (eI[154] = ew),
            (eI[155] = e_))
          : (e_ = eI[155]),
        e_
      )
    }
    function P(e) {
      let t = e?.view
      return null == t || t.isDestroyed || "none" === (0, h.Hw)(t.state.doc).kind ? null : t.state.doc
    }
    function E() {
      let e = [(0, m.L)(), new h.Ii(), new h.gm()]
      return { legacy: e, unified: [...e, new x()] }
    }
  },
  WtpQ(e, t, a) {
    var n = a("f6KK")
    function l(e) {
      let t = [],
        a = !0
      return (
        e.state.doc.descendants((n, l) => {
          n.isTextblock
            ? (a || t.push({ from: l, text: "\n", atomic: !1 }),
              (a = !1),
              0 === n.content.size && t.push({ from: l + 1, text: "", atomic: !1 }))
            : n.isText
              ? t.push({ from: l, text: n.text ?? "", atomic: !1 })
              : n.isInline && n.isLeaf && t.push({ from: l, text: e.nodeDOM(l)?.textContent ?? "\n", atomic: !0 })
        }),
        t
      )
    }
    a.d(
      t,
      {},
      {
        B6: function (e) {
          let t = e.state.selection.from,
            a = 0
          for (let n of l(e)) {
            if (t <= n.from) break
            a += n.atomic ? n.text.length : Math.min(t - n.from, n.text.length)
          }
          return a
        },
        IR: function (e, t, a) {
          let l = "\uE000" + crypto.randomUUID() + "\uE001",
            o = a(e.slice(0, t) + l + e.slice(t)),
            i = null
          o.descendants((e, t) => {
            let a = e.text?.indexOf(l) ?? -1
            return (a >= 0 && (i = t + a), null == i)
          })
          let r = a(e)
          if (null == i) return { doc: r, caret: null }
          let s = o.resolve(i),
            d = r.resolve(Math.min(s.start(), r.content.size)),
            c = s.parent.textBetween(s.parentOffset + l.length, s.parent.content.size, void 0, "\uFFFC"),
            u = d.parent.textBetween(0, d.parent.content.size, void 0, "\uFFFC"),
            p =
              d.start() +
              (u.endsWith(c) ? d.parent.content.size - c.length : Math.min(s.parentOffset, d.parent.content.size))
          return { doc: r, caret: n.U3.near(r.resolve(p)).$from }
        },
        nH: function (e, t) {
          let a = t,
            o = n.U3.atEnd(e.state.doc).from
          for (let t of l(e)) {
            if (a <= t.text.length) {
              o = t.from + (t.atomic ? Math.min(a, 1) : a)
              break
            }
            a -= t.text.length
          }
          e.dispatch(e.state.tr.setSelection(n.U3.near(e.state.doc.resolve(o))))
        },
      },
    )
  },
  FXi4(e, t, a) {
    var n = a("v7qY")
    a.d(
      t,
      {},
      {
        _: function (e, t) {
          let a = []
          for (let t = e.parentElement; null != t; t = t.parentElement)
            t.scrollHeight > t.clientHeight && a.push({ element: t, top: t.scrollTop })
          for (let { element: e, top: l } of ((0, n.flushSync)(t), a)) e.scrollTop = l
        },
      },
    )
  },
  Xtjz(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("on57"),
      i = a("xMUP"),
      r = a("SJ6u")
    a.d(
      t,
      {},
      {
        v: function (e) {
          let t,
            a,
            s = (0, l.c)(12),
            { activeFindMatch: d, query: c, text: u, ranges: p, offset: m } = e,
            g = void 0 !== d && d,
            h = void 0 === m ? 0 : m
          s[0] !== c || s[1] !== p || s[2] !== u
            ? ((t = null == c ? p : (0, i.nI)(u, c)), (s[0] = c), (s[1] = p), (s[2] = u), (s[3] = t))
            : (t = s[3])
          let f = t
          if (null == f || 0 === f.length) return u
          if (s[4] !== g || s[5] !== f || s[6] !== h || s[7] !== u) {
            let e
            a = []
            let t = 0
            for (let e of f) {
              let l = Math.max(0, e.start - h),
                i = Math.min(u.length, e.end - h)
              l >= i ||
                (a.push(
                  u.slice(t, l),
                  (0, n.jsx)(
                    "mark",
                    {
                      "data-page-find-match": g ? "" : void 0,
                      "data-active": g ? "" : void 0,
                      className: (0, o.A)(
                        "rounded-2xs text-default",
                        g ? r.A.match : "bg-token-editor-find-match-background",
                      ),
                      children: u.slice(l, i),
                    },
                    l,
                  ),
                ),
                (t = i))
            }
            ;(s[9] !== t || s[10] !== u ? ((e = u.slice(t)), (s[9] = t), (s[10] = u), (s[11] = e)) : (e = s[11]),
              a.push(e),
              (s[4] = g),
              (s[5] = f),
              (s[6] = h),
              (s[7] = u),
              (s[8] = a))
          } else a = s[8]
          return a
        },
      },
    )
  },
  Oe5x(e, t, a) {
    var n = a("SOEF"),
      l = a("EULo"),
      o = a("XNvh"),
      i = a("rS3J"),
      r = a("MX6A"),
      s = a("AdJ5"),
      d = a("RQgn"),
      c = a("XpUB"),
      u = a("fEVS")
    let p = [
        ...s.f,
        {
          extensions: [
            {
              name: "pageCommentMention",
              level: "inline",
              start: (e) => e.indexOf("["),
              tokenizer(e) {
                if (this.lexer.state.inLink || !(0, l.wB)(e)) return
                let t = (0, i.ex)(e, 0)
                if (t?.start !== 0) return
                let a = (0, l.gh)(t.path)
                if (null == (0, n.D1e)(a) && null == (0, u.UR)(a) && !(0, o.$U)(a)) return
                let r = e.slice(0, t.end)
                return { type: "text", raw: r, text: r }
              },
            },
          ],
        },
      ],
      m = new Set(["text", "paragraph", "heading", "blockquote", "strong", "em", "del", "list_item", "list", "table"]),
      g = new Set([...m, "link", "br", "checkbox", "code", "codespan", "def", "escape", "hr", "html", "image", "space"])
    function h(e) {
      let t = (0, c.o)(e, p, { repairOrderedLists: !1, renderMath: !1 })
      return {
        tokens: t,
        taskMentions: (function e(t) {
          return t.filter(x).flatMap((t) => {
            switch (t.type) {
              case "text":
                return null == t.tokens ? (0, u.FD)(t.text) : e(t.tokens)
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
    function f(e, t) {
      let a = 0
      return (
        (0, l.C4)(e)
          .map((n) => {
            let l = (0, d.C)(e.slice(a, n.start))
            return ((a = n.end), l + (t?.[e.slice(n.start, n.end)] ?? (0, r.Nb)(n.label)))
          })
          .join("") + (0, d.C)(e.slice(a))
      )
    }
    function x(e) {
      return g.has(e.type)
    }
    a.d(
      t,
      {},
      {
        Mw: function (e, t, a) {
          var n, l, o, i
          let r = ""
          return (
            (n = e),
            (l = (e, a) => {
              a?.type !== "checkbox" &&
                (null != a && t?.set(a, { start: r.length, end: r.length + e.length }), (r += e))
            }),
            (o = () => {
              r += " "
            }),
            (i = a),
            !(function e(t, a) {
              let n = (e, t) => l(e, t, a)
              for (let r of t) {
                if (!x(r)) {
                  n(r.raw)
                  continue
                }
                switch (r.type) {
                  case "html":
                    ;/^<br\s*\/?>$/i.test(r.raw.trim()) ? o("\n") : n(r.raw)
                    break
                  case "checkbox":
                    l(r.checked ? "[x] " : "[ ] ", r)
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
                    ;(n(r.text, r), o("\n\n"))
                    break
                  case "codespan":
                    n(r.text, r)
                    break
                  case "escape":
                    n(r.text)
                    break
                  case "image":
                    n((0, d.C)(r.text))
                    break
                  case "text":
                    null != r.tokens ? e(r.tokens, a) : n(f(r.text, i), r)
                    break
                  case "link":
                    e(r.tokens, r.href)
                    break
                  case "strong":
                  case "em":
                  case "del":
                    e(r.tokens, a)
                    break
                  case "paragraph":
                  case "heading":
                  case "blockquote":
                  case "list_item":
                    ;(e(r.tokens, a), o("list_item" === r.type ? "\n" : "\n\n"))
                    break
                  case "list":
                    e(r.items, a)
                    break
                  case "table":
                    for (let [t, n] of [r.header, ...r.rows].entries())
                      for (let [l, i] of (t > 0 && o("\n"), n.entries())) (l > 0 && o(" "), e(i.tokens, a))
                }
              }
            })(n),
            r
          )
        },
        Rb: function (e) {
          let t = [],
            a = (e, n, l) => {
              let o = 0
              for (let i of e) {
                let e,
                  r = n.indexOf(i.raw, o)
                if (
                  ("list" === i.type
                    ? (e = i.items)
                    : "table" === i.type
                      ? (e = [i.header, ...i.rows].flat().flatMap((e) => e.tokens))
                      : m.has(i.type) && "tokens" in i && (e = i.tokens),
                  r < 0)
                ) {
                  null != e && (o += a(e, n.slice(o), l + o))
                  continue
                }
                ;((o = r + i.raw.length),
                  "link" === i.type ? t.push({ from: l + r, to: l + o }) : null != e && a(e, i.raw, l + r))
              }
              return o
            }
          return (a(h(e).tokens, e, 0), t)
        },
        bl: h,
        rZ: f,
      },
    )
  },
  Rkui(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("qmMi"),
      i = a("zd8w"),
      r = a("Wf1j"),
      s = a("KIKs"),
      d = a("wq58"),
      c = a("wSXO"),
      u = a("e1xH"),
      p = a("GP5k"),
      m = a("tcwr"),
      g = a("zOWn"),
      h = a("tdE2"),
      f = a("tv8P"),
      x = a("fEVS"),
      v = a("Rxyo"),
      y = a("s8gN"),
      b = a("WtpQ")
    function w() {}
    function _(e) {
      return { id: e.accountUserId.split("__")[0], account_user_id: e.accountUserId, name: e.displayName, email: null }
    }
    function I(e) {
      return e.accountUserId
    }
    function k(e) {
      return e.id
    }
    function S(e) {
      return e ?? []
    }
    function j(e) {
      return e.getTime()
    }
    function C() {}
    a.d(
      t,
      {},
      {
        N: function (e) {
          let t,
            a,
            A,
            M,
            T,
            P,
            E,
            N,
            U,
            O,
            D,
            R,
            L,
            z,
            q,
            B,
            $,
            F,
            K,
            G,
            Y,
            W,
            V,
            H,
            X,
            Q,
            J = (0, l.c)(80)
          J[0] !== e
            ? (({
                pageId: D,
                presence: R,
                comments: P,
                thread: q,
                canMention: M,
                authorAccountUserId: a,
                authorName: A,
                contextualPicks: E,
                artifactParticipants: t,
                onAssignChatGPT: U,
                chatGptMentionId: T,
                hasChatGptAssignment: N,
                insertChatGptMention: z,
                onChatGPT: O,
                ...L
              } = e),
              (J[0] = e),
              (J[1] = t),
              (J[2] = a),
              (J[3] = A),
              (J[4] = M),
              (J[5] = T),
              (J[6] = P),
              (J[7] = E),
              (J[8] = N),
              (J[9] = U),
              (J[10] = O),
              (J[11] = D),
              (J[12] = R),
              (J[13] = L),
              (J[14] = z),
              (J[15] = q))
            : ((t = J[1]),
              (a = J[2]),
              (A = J[3]),
              (M = J[4]),
              (T = J[5]),
              (P = J[6]),
              (E = J[7]),
              (N = J[8]),
              (U = J[9]),
              (O = J[10]),
              (D = J[11]),
              (R = J[12]),
              (L = J[13]),
              (z = J[14]),
              (q = J[15]))
          let Z = void 0 !== z && z,
            ee = (0, r.A)(),
            et = (0, o.Ul)(u.pagesEnabled$) && M
          J[16] !== R ? ((B = (e) => R?.subscribe(e) ?? C), (J[16] = R), (J[17] = B)) : (B = J[17])
          let ea = B
          J[18] !== R ? (($ = () => R?.getSnapshot()), (J[18] = R), (J[19] = $)) : ($ = J[19])
          let en = $
          J[20] !== R ? ((F = () => R?.getServerSnapshot()), (J[20] = R), (J[21] = F)) : (F = J[21])
          let el = F,
            eo = (0, i.useSyncExternalStore)(ea, en, el),
            ei = (0, i.useSyncExternalStore)(
              et && null != P ? P.subscribe : h.aW,
              et && null != P ? P.getSnapshot : h.tb,
              P?.getServerSnapshot ?? h.tb,
            ),
            er = (0, o.Ul)(!!et && v.y),
            es = (0, o._U)(et ? f.spacePageId$ : void 0, D) ?? D
          J[22] !== er ? ((K = { enabled: er }), (J[22] = er), (J[23] = K)) : (K = J[23])
          let ed = (0, s.wv)(j, K)
          J[24] !== t ||
          J[25] !== ed ||
          J[26] !== eo ||
          J[27] !== E ||
          J[28] !== et ||
          J[29] !== er ||
          J[30] !== es ||
          J[31] !== L ||
          J[32] !== q ||
          J[33] !== ei
            ? ((G = et
                ? {
                    type: "page",
                    id: es,
                    query: L.query,
                    commenters: [...((0, h.Qk)(ei) ?? []), ...(E?.flatMap(S) ?? [])],
                    mentionContext: er
                      ? {
                          asOfMs: ed,
                          threadUserIds: (0, h.Qk)(null == q ? void 0 : [q])?.map(k),
                          liveUserIds: eo?.collaborators.map(I),
                          participants: [...(0, h.Fx)(ei), ...(t ?? [])],
                        }
                      : void 0,
                  }
                : null),
              (J[24] = t),
              (J[25] = ed),
              (J[26] = eo),
              (J[27] = E),
              (J[28] = et),
              (J[29] = er),
              (J[30] = es),
              (J[31] = L),
              (J[32] = q),
              (J[33] = ei),
              (J[34] = G))
            : (G = J[34])
          let ec = (0, o._U)(m.K, G),
            eu = Z || null != O
          J[35] !== eu ? ((Y = { enabled: eu }), (J[35] = eu), (J[36] = Y)) : (Y = J[36])
          let ep = (0, o.Ul)(c.tl, Y)
          J[37] !== a || J[38] !== A || J[39] !== T || J[40] !== N || J[41] !== Z || J[42] !== U || J[43] !== O
            ? ((W = (e, t) => {
                let { composerController: n, mentionState: l } = e,
                  o = null == t ? void 0 : { orbitId: t.orbitId, threadId: t.threadId }
                if (Z && null != l.range) {
                  let { state: e } = n.view,
                    { nodeType: a, attrs: o } = (0, y.cD)(
                      null == t
                        ? { kind: "chatgpt" }
                        : { kind: "dot", name: t.name, orbit: { orbitId: t.orbitId, threadId: t.threadId } },
                      e.doc,
                      l.range.to,
                    )
                  n.insertMentionNodeFromAtMention(a, o, l)
                  return
                }
                if (null == o && null != U) {
                  ;(n.clearSuggestion(l), U(), n.view.focus())
                  return
                }
                if (null == o && N?.(n.getPersistedText(), l.range?.from === 1)) {
                  ;(n.clearSuggestion(l), n.view.focus())
                  return
                }
                if (null == a || null == O || null == l.range) return
                n.insertMentionNodeFromAtMention(
                  n.view.state.schema.nodes.pageTaskMention,
                  {
                    path: (0, x.P)({
                      id: null == o && null != T ? T : crypto.randomUUID(),
                      owner: a,
                      ownerName: A,
                      source: null == o && null != T ? "comment" : void 0,
                      orbit: o,
                    }),
                  },
                  l,
                )
                let i = (0, b.B6)(n.view),
                  r = null == o || t?.isDefault !== !1 ? 0 : t.name.length - 3
                O(n.getText(), i + r, n.getPersistedText(), o)
              }),
              (J[37] = a),
              (J[38] = A),
              (J[39] = T),
              (J[40] = N),
              (J[41] = Z),
              (J[42] = U),
              (J[43] = O),
              (J[44] = W))
            : (W = J[44])
          let em = W
          if (
            J[45] !== a ||
            J[46] !== eu ||
            J[47] !== ep ||
            J[48] !== Z ||
            J[49] !== em ||
            J[50] !== ee ||
            J[51] !== U ||
            J[52] !== O
          ) {
            let e
            for (let t of ((V =
              Z || null != O || null != U
                ? [
                    {
                      key: "page-comment-chatgpt",
                      type: "mention",
                      label: ee.formatMessage({
                        id: "codex.page.commentTaskMention.suggestion",
                        defaultMessage: "ChatGPT",
                      }),
                      detail: null,
                      icon: d.A,
                      disabled: !Z && null == U && null == a,
                      insertMention: (e) => em(e),
                    },
                  ]
                : []),
            J[54] !== eu || J[55] !== ep
              ? ((e = eu ? (ep ?? []) : []), (J[54] = eu), (J[55] = ep), (J[56] = e))
              : (e = J[56]),
            e))
              V.push({
                key: `page-comment-orbit:${t.orbitId}`,
                type: "mention",
                label: t.name,
                detail: null,
                searchTerms: ["dot", "o", "orbit", t.name],
                iconElement: (0, n.jsx)(g.r, { className: "size-4", conversationId: t.threadId }),
                disabled: null == a,
                insertMention: (e) => em(e, t),
              })
            ;((J[45] = a),
              (J[46] = eu),
              (J[47] = ep),
              (J[48] = Z),
              (J[49] = em),
              (J[50] = ee),
              (J[51] = U),
              (J[52] = O),
              (J[53] = V))
          } else V = J[53]
          let eg = eo?.commentActor
          if (
            J[57] !== eo?.collaborators ||
            J[58] !== eo?.collaborators.map ||
            J[59] !== E ||
            J[60] !== ec.picks ||
            J[61] !== q
          ) {
            let e, t
            ;(J[63] !== E ? ((e = E ?? []), (J[63] = E), (J[64] = e)) : (e = J[64]),
              J[65] !== eo?.collaborators || J[66] !== eo?.collaborators.map
                ? ((t = eo?.collaborators.map(_)),
                  (J[65] = eo?.collaborators),
                  (J[66] = eo?.collaborators.map),
                  (J[67] = t))
                : (t = J[67]),
              (H = [...(0, h.fC)(q), ...e, t, ...ec.picks]),
              (J[57] = eo?.collaborators),
              (J[58] = eo?.collaborators.map),
              (J[59] = E),
              (J[60] = ec.picks),
              (J[61] = q),
              (J[62] = H))
          } else H = J[62]
          return (
            J[68] !== ec.isError || J[69] !== ec.isLoading
              ? ((X = { peopleError: ec.isError, peopleLoading: ec.isLoading }),
                (J[68] = ec.isError),
                (J[69] = ec.isLoading),
                (J[70] = X))
              : (X = J[70]),
            J[71] !== et ||
            J[72] !== es ||
            J[73] !== ec.mentionContext ||
            J[74] !== L ||
            J[75] !== H ||
            J[76] !== X ||
            J[77] !== eg ||
            J[78] !== V
              ? ((Q = (0, n.jsx)(p.I, {
                  ...L,
                  pageId: es,
                  currentViewer: eg,
                  contextualPicks: H,
                  mentionContext: ec.mentionContext,
                  peopleEnabled: et,
                  peopleStatus: X,
                  onMention: w,
                  leadingItems: V,
                  prioritizeLeadingItems: !0,
                  rankingContext: "page",
                })),
                (J[71] = et),
                (J[72] = es),
                (J[73] = ec.mentionContext),
                (J[74] = L),
                (J[75] = H),
                (J[76] = X),
                (J[77] = eg),
                (J[78] = V),
                (J[79] = Q))
              : (Q = J[79]),
            Q
          )
        },
      },
    )
  },
  Tw8q(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("qmMi"),
      i = a("zd8w"),
      r = a("OBId"),
      s = a("Rxyo")
    a.d(
      t,
      {},
      {
        z: function (e) {
          let t,
            a,
            d,
            c = (0, l.c)(14),
            { anchorRef: u, isActive: p, children: m } = e,
            g = (0, o.Ul)(!!p && s.y),
            h = (0, i.useId)()
          c[0] !== u || c[1] !== h
            ? ((t = (e) => {
                let t = u.current
                if (null != e && null != t)
                  return (t.setAttribute("aria-controls", h), () => t.removeAttribute("aria-controls"))
              }),
              (c[0] = u),
              (c[1] = h),
              (c[2] = t))
            : (t = c[2])
          let f = t,
            x = g ? 240 : void 0,
            v = g ? "bottom" : "top",
            y = g ? "z-[60]" : void 0
          return (
            c[3] !== m || c[4] !== f || c[5] !== h
              ? ((a = (0, n.jsx)("div", { id: h, ref: f, "data-page-comments-controls": !0, children: m })),
                (c[3] = m),
                (c[4] = f),
                (c[5] = h),
                (c[6] = a))
              : (a = c[6]),
            c[7] !== u || c[8] !== p || c[9] !== x || c[10] !== v || c[11] !== y || c[12] !== a
              ? ((d = (0, n.jsx)(r.$, {
                  anchorRef: u,
                  anchorMinHeight: x,
                  anchorMinWidth: 360,
                  flip: !0,
                  isActive: p,
                  placement: v,
                  zIndexClassName: y,
                  children: a,
                })),
                (c[7] = u),
                (c[8] = p),
                (c[9] = x),
                (c[10] = v),
                (c[11] = y),
                (c[12] = a),
                (c[13] = d))
              : (d = c[13]),
            d
          )
        },
      },
    )
  },
  i4vk(e, t, a) {
    let n = (0, a("Qgfj").YK)({
      confirmDeleteThread: {
        id: "codex.space.page.comments.confirmDeleteThread",
        defaultMessage: "Delete this thread?",
      },
      confirmDeleteMessage: {
        id: "codex.space.page.comments.confirmDeleteMessage",
        defaultMessage: "Delete this comment?",
      },
      copyLink: { id: "codex.space.page.comments.copyLink", defaultMessage: "Copy link" },
      resolve: { id: "codex.space.page.comments.resolveMenuAction", defaultMessage: "Resolve" },
      reopen: { id: "codex.space.page.comments.reopen", defaultMessage: "Reopen" },
      edit: { id: "codex.space.page.comments.edit", defaultMessage: "Edit comment" },
      deleteMessage: { id: "codex.space.page.comments.deleteMessage", defaultMessage: "Delete comment" },
      deleteThread: { id: "codex.space.page.comments.deleteThread", defaultMessage: "Delete thread" },
      deleteThreadDescription: {
        id: "codex.space.page.comments.deleteThreadDescription",
        defaultMessage: "This removes the thread and all its messages",
      },
      deleteMessageDescription: {
        id: "codex.space.page.comments.deleteMessageDescription",
        defaultMessage: "The comment text will be removed, but replies will remain",
      },
    })
    a.d(
      t,
      {},
      {
        DE: function (e, t) {
          return e.author.id === t && e.messages.every((e) => e.author.id === t)
            ? e.messages.find((e) => null == e.deletedAt)?.id
            : void 0
        },
        DP: n,
        dh: function (e, t) {
          let a = e.messages.find((e) => null == e.deletedAt)
          if (t && null != a) return { messageId: a.id, actionId: "open" === e.state ? "resolve" : "reopen" }
        },
        qR: function (e, t, a) {
          return a && t === e.author.id && null == e.deletedAt
        },
      },
    )
  },
  yhbb(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("on57")
    a.d(
      t,
      {},
      {
        K: function (e) {
          let t,
            a,
            i,
            r,
            s,
            d,
            c,
            u,
            p,
            m,
            g,
            h,
            f,
            x = (0, l.c)(27)
          x[0] !== e
            ? (({ avatar: t, header: r, children: a, hasConnector: i, hasPrevious: d, ...s } = e),
              (x[0] = e),
              (x[1] = t),
              (x[2] = a),
              (x[3] = i),
              (x[4] = r),
              (x[5] = s),
              (x[6] = d))
            : ((t = x[1]), (a = x[2]), (i = x[3]), (r = x[4]), (s = x[5]), (d = x[6]))
          let v = void 0 !== d && d,
            y = v && "in-data-[comment-layout=floating]:mt-3.5"
          ;(x[7] !== y
            ? ((c = (0, o.A)("page-comment-thread-row group/message relative flex items-start outline-none", y)),
              (x[7] = y),
              (x[8] = c))
            : (c = x[8]),
            x[9] !== v
              ? ((u =
                  v &&
                  (0, n.jsx)("span", {
                    "aria-hidden": !0,
                    className: "page-comment-thread-connector top-0 h-2.5 in-data-[comment-layout=floating]:hidden",
                  })),
                (x[9] = v),
                (x[10] = u))
              : (u = x[10]))
          let b = !i && "hidden group-data-page-comment-working/messages:block"
          return (
            x[11] !== b
              ? ((p = (0, o.A)(
                  "page-comment-thread-connector top-11.5 bottom-0 in-data-[comment-layout=floating]:top-7 in-data-[comment-layout=floating]:-bottom-2.5",
                  b,
                )),
                (x[11] = b),
                (x[12] = p))
              : (p = x[12]),
            x[13] !== p
              ? ((m = (0, n.jsx)("span", { "aria-hidden": !0, className: p })), (x[13] = p), (x[14] = m))
              : (m = x[14]),
            x[15] !== t || x[16] !== u || x[17] !== m
              ? ((g = (0, n.jsxs)("div", {
                  className: "relative shrink-0 self-stretch pt-4 in-data-[comment-layout=floating]:pt-0",
                  children: [u, t, m],
                })),
                (x[15] = t),
                (x[16] = u),
                (x[17] = m),
                (x[18] = g))
              : (g = x[18]),
            x[19] !== a || x[20] !== r
              ? ((h = (0, n.jsxs)("div", {
                  className: "flex min-w-0 flex-1 flex-col py-3 in-data-[comment-layout=floating]:py-0",
                  children: [r, a],
                })),
                (x[19] = a),
                (x[20] = r),
                (x[21] = h))
              : (h = x[21]),
            x[22] !== s || x[23] !== c || x[24] !== g || x[25] !== h
              ? ((f = (0, n.jsxs)("div", { ...s, className: c, children: [g, h] })),
                (x[22] = s),
                (x[23] = c),
                (x[24] = g),
                (x[25] = h),
                (x[26] = f))
              : (f = x[26]),
            f
          )
        },
      },
    )
  },
  ziw7(e, t, a) {
    a.d(t, { _: () => eT })
    var n = a("ABep"),
      l = a("QosV"),
      o = a("slpy"),
      i = a("on57"),
      r = a("qmMi"),
      s = a("zd8w"),
      d = a("Wf1j"),
      c = a("oyxz"),
      u = a("Qgfj"),
      p = a("Sm6l"),
      m = a("xs0e"),
      g = a("bVeK"),
      h = a("nzx4"),
      f = a("X3K1"),
      x = a("uQ1J"),
      v = a("zOWn"),
      y = a("Adh7"),
      b = a("uAks"),
      w = a("s9n8"),
      _ = a("jQst"),
      I = a("zJs4"),
      k = a("Xkwl"),
      S = a("SOEF"),
      j = a("xs0G"),
      C = a("XNvh"),
      A = a("EULo"),
      M = a("rS3J"),
      T = a("MX6A"),
      P = a("oQwr"),
      E = a("EXS8"),
      N = a("RQgn"),
      U = a("TxRk"),
      O = a("NyT3"),
      D = a("AAxy"),
      R = a("fEVS"),
      L = a("FW7f"),
      z = a("FXi4"),
      q = a("Xtjz"),
      B = a("Oe5x"),
      $ = a("xMUP"),
      F = a("puTD"),
      K = a("SJ6u")
    function G(e) {
      let t,
        a,
        o,
        d,
        u,
        m,
        g,
        h,
        f,
        x,
        y,
        w,
        _,
        I,
        k,
        C,
        T,
        G = (0, l.c)(62),
        {
          expanded: J,
          commentThreadId: Z,
          collapseMeasurement: ee,
          renderTaskMention: et,
          body: ea,
          resolved: en,
          floatingLayout: el,
          unifiedComments: eo,
          onExpand: ei,
          onCollapse: er,
          findMatch: es,
          viewer: ed,
          searchQuery: ec,
          children: eu,
        } = e,
        ep = void 0 !== eo && eo,
        em = void 0 === ed ? null : ed,
        { tokens: eg } = (0, B.bl)(ea)
      ;(G[0] !== ea || G[1] !== es
        ? ((t = null == es ? [] : (0, D.ft)([ea])), (G[0] = ea), (G[1] = es), (G[2] = t))
        : (t = G[2]),
        G[3] !== t || G[4] !== em
          ? ((a = { sources: t, viewer: em }), (G[3] = t), (G[4] = em), (G[5] = a))
          : (a = G[5]))
      let eh = (0, r._U)(D.f9, a),
        ef = es ?? (void 0 === ec ? "" : ec),
        ex = ef ? (0, $.Wo)(eg, ef, eh) : null,
        ev = (0, s.useId)(),
        ey = (0, s.useRef)(null)
      ;(G[6] !== ee ? ((o = ee?.cache.has(ee.message)), (G[6] = ee), (G[7] = o)) : (o = G[7]),
        G[8] !== ee
          ? ((d =
              null == ee
                ? void 0
                : (e) => {
                    let { cache: t, message: a } = ee
                    e ? t.add(a) : t.delete(a)
                  }),
            (G[8] = ee),
            (G[9] = d))
          : (d = G[9]),
        G[10] !== ea || G[11] !== o || G[12] !== d
          ? ((u = { text: ea, collapsedLineCount: 8, fallbackFontSizePx: 13, initialCollapsible: o, onMeasure: d }),
            (G[10] = ea),
            (G[11] = o),
            (G[12] = d),
            (G[13] = u))
          : (u = G[13]))
      let { collapseState: eb, setTextContentMeasurementRef: ew } = (0, P.ee)(u),
        e_ = "uncollapsible" !== eb,
        eI = !J && e_,
        ek = eI && !(void 0 !== el && el) && !ep
      G[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { collapsedLineCount: 3, fallbackFontSizePx: 13 }), (G[14] = m))
        : (m = G[14])
      let { setTextMeasurementRef: eS, textMeasurement: ej } = (0, P.le)(m)
      ;(G[15] !== eS || G[16] !== ek
        ? ((g = () => {
            let e = ey.current?.firstElementChild
            if (ek && e instanceof HTMLDivElement) return (eS(e), () => eS(null))
          }),
          (h = [eS, ek]),
          (G[15] = eS),
          (G[16] = ek),
          (G[17] = g),
          (G[18] = h))
        : ((g = G[17]), (h = G[18])),
        (0, s.useLayoutEffect)(g, h),
        G[19] !== ej || G[20] !== ek
          ? ((f = () => {
              let e = ey.current
              if (!ek) return void e?.style.removeProperty("max-height")
              if (null == e || null == ej) return
              let { element: t, collapsedHeightPx: a } = ej
              if (null == a) return
              let n = 0,
                l = () => {
                  e.style.maxHeight = `${Math.min(n, a)}px`
                },
                o = () => {
                  if (0 === t.offsetHeight) return
                  let e = t.getBoundingClientRect(),
                    o = e.height / t.offsetHeight,
                    i = e.top + a * o,
                    r = t.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_TEXT),
                    s = t.ownerDocument.createRange(),
                    d = Array.from(t.querySelectorAll("button, img, svg"), Q)
                  for (let e = r.nextNode(); null != e; e = r.nextNode())
                    for (let t of (e.textContent ?? "").matchAll(/\S[^\r\n]*/gu))
                      (s.setStart(e, t.index),
                        s.setEnd(e, t.index + t[0].trimEnd().length),
                        d.push(...s.getClientRects()))
                  for (let t of d) t.width > 0 && t.bottom <= i && (n = Math.max(n, (t.bottom - e.top) / o))
                  j.Gt.render(l)
                }
              return (
                j.Gt.read(o),
                () => {
                  ;((0, j.WG)(o), (0, j.WG)(l))
                }
              )
            }),
            (G[19] = ej),
            (G[20] = ek),
            (G[21] = f))
          : (f = G[21]),
        G[22] !== ea || G[23] !== ej || G[24] !== ek
          ? ((x = [ea, ek, ej]), (G[22] = ea), (G[23] = ej), (G[24] = ek), (G[25] = x))
          : (x = G[25]),
        (0, s.useLayoutEffect)(f, x))
      let eC = !ep && "gap-2 in-data-[comment-layout=floating]:gap-0",
        eA = en && "text-secondary"
      G[26] !== eC || G[27] !== eA
        ? ((y = (0, i.A)("flex flex-col text-base leading-normal", eC, eA)), (G[26] = eC), (G[27] = eA), (G[28] = y))
        : (y = G[28])
      let eM = eI ? "max-h-[3lh] overflow-hidden" : void 0,
        eT = J && null == er ? void 0 : ew,
        eP = eI ? "" : void 0
      return (
        G[29] !== eI || G[30] !== ei
          ? ((w = (e) => {
              e.target !== e.currentTarget &&
                eI &&
                ((0, z._)(e.currentTarget, () => ei?.()), e.target.scrollIntoView({ block: "nearest" }))
            }),
            (G[29] = eI),
            (G[30] = ei),
            (G[31] = w))
          : (w = G[31]),
        G[32] !== eu ||
        G[33] !== Z ||
        G[34] !== es ||
        G[35] !== et ||
        G[36] !== en ||
        G[37] !== ex ||
        G[38] !== eh ||
        G[39] !== eg ||
        G[40] !== ep ||
        G[41] !== em
          ? ((_ =
              eu ??
              (0, n.jsx)(E.T, {
                className: (0, i.A)(
                  F.A.PageCommentMentions,
                  "whitespace-pre-wrap",
                  !ep && "in-data-[comment-layout=floating]:whitespace-normal",
                ),
                textStyle: { kind: "inherit" },
                tokens: eg,
                decorateCode: (e, t, a) => (0, L.W)(e, t, a, ex?.get(e), null != es),
                renderText: (e, t, a, l) => {
                  let o = ex?.get(a),
                    i = (e, t) =>
                      null == o
                        ? e
                        : (0, n.jsx)(q.v, {
                            activeFindMatch: null != es,
                            ranges: o,
                            offset: void 0 === t ? 0 : t,
                            text: e,
                          })
                  if (!l) return (0, n.jsx)(s.Fragment, { children: i((0, N.C)(e)) }, t)
                  let r = [...(0, S.iKr)(e).map(X), ...(0, R.FD)(e).map(H), ...(0, A.C4)(e).filter(V).map(W)].sort(Y),
                    d = 0
                  return (0, n.jsxs)(
                    s.Fragment,
                    {
                      children: [
                        r.map((t, a) => {
                          let l,
                            c = (0, N.C)(e.slice(0 === a ? 0 : r[a - 1].to, t.from)),
                            u = i(c, d),
                            p = d + c.length
                          return (
                            (d = p + (0, B.rZ)(e.slice(t.from, t.to), eh).length),
                            (l =
                              "task" === t.kind
                                ? (et?.({ mention: t, commentThreadId: Z, resolved: en }) ??
                                  (0, n.jsx)(U.q3, {
                                    tone: "neutral",
                                    icon: null == t.orbit ? void 0 : (0, n.jsx)(v.r, { conversationId: void 0 }),
                                    children: (0, n.jsx)(b.a, { ...t, viewer: em }),
                                  }))
                                : "plugin" === t.kind
                                  ? (0, n.jsx)(U.q3, { dataAttributes: (0, M.LL)(t), children: i(t.label, p) })
                                  : (0, n.jsx)(O.f, {
                                      accountUserId: t.accountUserId,
                                      label: t.label,
                                      children: i(t.label, d - t.label.length),
                                    })),
                            null != es &&
                              o?.some((e) => {
                                let { start: a, end: n } = e
                                return (
                                  a < d &&
                                  n > p &&
                                  ("task" === t.kind || ("person" === t.kind && n <= d - t.label.length))
                                )
                              }) &&
                              (l = (0, n.jsx)("mark", {
                                className: `${K.A.match} rounded-2xs text-default`,
                                "data-page-find-match": !0,
                                "data-active": !0,
                                children: l,
                              })),
                            (0, n.jsxs)(s.Fragment, { children: [u, l] }, `${t.kind}:${t.from}`)
                          )
                        }),
                        i((0, N.C)(e.slice(r.at(-1)?.to ?? 0)), d),
                      ],
                    },
                    t,
                  )
                },
              })),
            (G[32] = eu),
            (G[33] = Z),
            (G[34] = es),
            (G[35] = et),
            (G[36] = en),
            (G[37] = ex),
            (G[38] = eh),
            (G[39] = eg),
            (G[40] = ep),
            (G[41] = em),
            (G[42] = _))
          : (_ = G[42]),
        G[43] !== eT || G[44] !== eP || G[45] !== w || G[46] !== _
          ? ((I = (0, n.jsx)("div", {
              ref: eT,
              className: "break-words outline-none",
              "data-page-comment-collapsed-body": eP,
              onFocusCapture: w,
              tabIndex: -1,
              children: _,
            })),
            (G[43] = eT),
            (G[44] = eP),
            (G[45] = w),
            (G[46] = _),
            (G[47] = I))
          : (I = G[47]),
        G[48] !== ev || G[49] !== eM || G[50] !== I
          ? ((k = (0, n.jsx)("div", { id: ev, ref: ey, className: eM, children: I })),
            (G[48] = ev),
            (G[49] = eM),
            (G[50] = I),
            (G[51] = k))
          : (k = G[51]),
        G[52] !== J || G[53] !== ev || G[54] !== er || G[55] !== ei || G[56] !== e_
          ? ((C =
              e_ && (!J || null != er)
                ? (0, n.jsx)("div", {
                    className: "text-secondary",
                    children: (0, n.jsxs)(p.$, {
                      className:
                        "min-h-6 text-sm in-data-[comment-layout=floating]:text-[13px] in-data-[comment-layout=floating]:leading-6 in-data-[comment-layout=floating]:hover:underline",
                      "aria-controls": ev,
                      "aria-expanded": J,
                      color: "ghostMuted",
                      size: "inline",
                      onClick: (e) => {
                        if (J) (0, z._)(e.currentTarget, () => er?.())
                        else {
                          ;(0, z._)(e.currentTarget, () => ei?.())
                          let t = ey.current?.firstElementChild
                          t instanceof HTMLElement && t.focus({ preventScroll: !0 })
                        }
                      },
                      children: [
                        null == er
                          ? (0, n.jsx)(c.A, { id: "codex.space.page.comments.more", defaultMessage: "Read more" })
                          : null,
                        null == er || J
                          ? null
                          : (0, n.jsx)(c.A, { id: "codex.space.page.comments.showMore", defaultMessage: "Show more" }),
                        null != er && J
                          ? (0, n.jsx)(c.A, { id: "codex.space.page.comments.showLess", defaultMessage: "Show less" })
                          : null,
                      ],
                    }),
                  })
                : null),
            (G[52] = J),
            (G[53] = ev),
            (G[54] = er),
            (G[55] = ei),
            (G[56] = e_),
            (G[57] = C))
          : (C = G[57]),
        G[58] !== y || G[59] !== k || G[60] !== C
          ? ((T = (0, n.jsxs)("div", { className: y, children: [k, C] })),
            (G[58] = y),
            (G[59] = k),
            (G[60] = C),
            (G[61] = T))
          : (T = G[61]),
        T
      )
    }
    function Y(e, t) {
      return e.from - t.from
    }
    function W(e) {
      return { kind: "plugin", from: e.start, to: e.end, label: (0, T.Nb)(e.label), href: (0, A.gh)(e.path) }
    }
    function V(e) {
      return (0, C.$U)(e.path)
    }
    function H(e) {
      return { ...e, kind: "task" }
    }
    function X(e) {
      return { ...e, kind: "person" }
    }
    function Q(e) {
      return e.getBoundingClientRect()
    }
    ;(a("DBCl"), a("jAnS"))
    var J = a("JNtf"),
      Z = a("mUDD"),
      ee = a("bqtn")
    a("qoC5")
    var et = a("M14h"),
      ea = a("OWtl"),
      en = a("akkX"),
      el = a("aepO")
    a("Bc5r")
    var eo = a("i4vk")
    function ei(e) {
      let t,
        a,
        i,
        u,
        m,
        h,
        f,
        x,
        v,
        y,
        b,
        w,
        I,
        k,
        S,
        j,
        C,
        A,
        M,
        T,
        P,
        E,
        N = (0, l.c)(62),
        {
          pageId: U,
          threadId: O,
          message: D,
          sidechat: R,
          editing: L,
          floatingLayout: z,
          onEdit: q,
          onDelete: B,
          onDeleteThread: $,
          onMenuOpenChange: F,
        } = e,
        K = void 0 !== z && z,
        G = (0, r.gh)(ea.u),
        Y = (0, d.A)()
      N[0] !== Y
        ? ((t = Y.formatMessage({ id: "codex.space.page.comments.actions", defaultMessage: "Comment actions" })),
          (N[0] = Y),
          (N[1] = t))
        : (t = N[1])
      let W = t,
        [V, H] = (0, s.useState)(null)
      if ("thread" === V) {
        let e
        ;(N[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, { ...eo.DP.confirmDeleteThread })), (N[2] = e))
          : (e = N[2]),
          (a = e))
      } else {
        let e
        ;(N[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, { ...eo.DP.confirmDeleteMessage })), (N[3] = e))
          : (e = N[3]),
          (a = e))
      }
      ;(N[4] !== L
        ? ((i = (e) => {
            L && e.preventDefault()
          }),
          (N[4] = L),
          (N[5] = i))
        : (i = N[5]),
        N[6] === Symbol.for("react.memo_cache_sentinel") ? ((u = (0, n.jsx)(g.l0Y, {})), (N[6] = u)) : (u = N[6]),
        N[7] !== W || N[8] !== K
          ? ((m = (0, n.jsx)(_.B, { floatingLayout: K, color: "ghost", "aria-label": W, children: u })),
            (N[7] = W),
            (N[8] = K),
            (N[9] = m))
          : (m = N[9]),
        N[10] !== W || N[11] !== m
          ? ((h = (0, n.jsx)(o.m, { side: "top", content: W, children: m })), (N[10] = W), (N[11] = m), (N[12] = h))
          : (h = N[12]),
        N[13] !== R ? ((f = null != R && (0, n.jsx)(er, { mention: R })), (N[13] = R), (N[14] = f)) : (f = N[14]),
        N[15] !== D || N[16] !== U || N[17] !== G || N[18] !== O
          ? ((x =
              null != U && null == D.deletedAt
                ? (0, n.jsx)(ee.ms.Item, {
                    onSelect: () => {
                      let e = (0, et.xy)(G, U, O, D.id)
                      null != e &&
                        (0, el.lW)(e).then((e) => {
                          e && (0, en.o)(G)
                        })
                    },
                    children: (0, n.jsx)(c.A, { ...eo.DP.copyLink }),
                  })
                : null),
            (N[15] = D),
            (N[16] = U),
            (N[17] = G),
            (N[18] = O),
            (N[19] = x))
          : (x = N[19]),
        N[20] !== L || N[21] !== D || N[22] !== q
          ? ((v =
              null != q && null == D.deletedAt
                ? (0, n.jsx)(ee.ms.Item, { disabled: L, onSelect: q, children: (0, n.jsx)(c.A, { ...eo.DP.edit }) })
                : null),
            (N[20] = L),
            (N[21] = D),
            (N[22] = q),
            (N[23] = v))
          : (v = N[23]),
        N[24] !== D || N[25] !== B
          ? ((y =
              null != B && null == D.deletedAt
                ? (0, n.jsx)(ee.ms.Item, {
                    onSelect: () => H("message"),
                    children: (0, n.jsx)(c.A, { ...eo.DP.deleteMessage }),
                  })
                : null),
            (N[24] = D),
            (N[25] = B),
            (N[26] = y))
          : (y = N[26]),
        N[27] !== $
          ? ((b =
              null != $
                ? (0, n.jsx)(ee.ms.Item, {
                    onSelect: () => H("thread"),
                    children: (0, n.jsx)(c.A, { ...eo.DP.deleteThread }),
                  })
                : null),
            (N[27] = $),
            (N[28] = b))
          : (b = N[28]),
        N[29] !== F ||
        N[30] !== y ||
        N[31] !== b ||
        N[32] !== i ||
        N[33] !== h ||
        N[34] !== f ||
        N[35] !== x ||
        N[36] !== v
          ? ((w = (0, n.jsxs)(ee.Ab, {
              align: "end",
              contentWidth: "menu",
              onOpenChange: F,
              onCloseAutoFocus: i,
              triggerButton: h,
              children: [f, x, v, y, b],
            })),
            (N[29] = F),
            (N[30] = y),
            (N[31] = b),
            (N[32] = i),
            (N[33] = h),
            (N[34] = f),
            (N[35] = x),
            (N[36] = v),
            (N[37] = w))
          : (w = N[37]))
      let X = null != V && ("thread" !== V || null != $)
      return (
        N[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (e) => {
              e || H(null)
            }),
            (N[38] = I))
          : (I = N[38]),
        N[39] !== V || N[40] !== B || N[41] !== $
          ? ((k = (e) => {
              ;(e.preventDefault(), ("thread" === V ? $?.() : B?.()) && H(null))
            }),
            (N[39] = V),
            (N[40] = B),
            (N[41] = $),
            (N[42] = k))
          : (k = N[42]),
        N[43] !== a ? ((S = (0, n.jsx)(J.L3, { children: a })), (N[43] = a), (N[44] = S)) : (S = N[44]),
        N[45] !== V
          ? ((j = (0, n.jsx)(J.rr, {
              children:
                "thread" === V
                  ? (0, n.jsx)(c.A, { ...eo.DP.deleteThreadDescription })
                  : (0, n.jsx)(c.A, { ...eo.DP.deleteMessageDescription }),
            })),
            (N[45] = V),
            (N[46] = j))
          : (j = N[46]),
        N[47] !== S || N[48] !== j
          ? ((C = (0, n.jsx)(Z.OO, { children: (0, n.jsx)(Z.c7, { title: S, subtitle: j }) })),
            (N[47] = S),
            (N[48] = j),
            (N[49] = C))
          : (C = N[49]),
        N[50] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, n.jsx)(p.$, {
              color: "secondary",
              onClick: () => H(null),
              children: (0, n.jsx)(c.A, { id: "codex.space.page.comments.cancelEdit", defaultMessage: "Cancel" }),
            })),
            (N[50] = A))
          : (A = N[50]),
        N[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, n.jsxs)(Z.Es, {
              children: [
                A,
                (0, n.jsx)(p.$, {
                  type: "submit",
                  color: "danger",
                  children: (0, n.jsx)(c.A, {
                    id: "codex.space.page.comments.confirmDelete",
                    defaultMessage: "Delete",
                  }),
                }),
              ],
            })),
            (N[51] = M))
          : (M = N[51]),
        N[52] !== k || N[53] !== C || N[54] !== O
          ? ((T = (0, n.jsxs)(Z.R4, { as: "form", "data-page-comment-thread-id": O, onSubmit: k, children: [C, M] })),
            (N[52] = k),
            (N[53] = C),
            (N[54] = O),
            (N[55] = T))
          : (T = N[55]),
        N[56] !== X || N[57] !== T
          ? ((P = (0, n.jsx)(J.lG, { open: X, onOpenChange: I, children: T })), (N[56] = X), (N[57] = T), (N[58] = P))
          : (P = N[58]),
        N[59] !== w || N[60] !== P
          ? ((E = (0, n.jsxs)(n.Fragment, { children: [w, P] })), (N[59] = w), (N[60] = P), (N[61] = E))
          : (E = N[61]),
        E
      )
    }
    function er(e) {
      ;(0, l.c)(8)
      let { mention: t } = e
      return (t.threadId, null)
    }
    var es = a("zLIa"),
      ed = a("j6bX"),
      ec = a("tdE2"),
      eu = a("ybMm")
    function ep(e) {
      let t,
        a,
        o,
        i = (0, l.c)(7)
      return (
        i[0] !== e
          ? ((t = e.unifiedComments ? (0, n.jsx)(eh, { ...e }) : (0, n.jsx)(em, { ...e })), (i[0] = e), (i[1] = t))
          : (t = i[1]),
        i[2] !== e.body
          ? ((a =
              !(0, S.Uac)(e.body.trim()) &&
              (0, n.jsx)("p", {
                role: "alert",
                className: "mt-1 text-sm text-danger",
                children: (0, n.jsx)(c.A, {
                  id: "codex.space.page.comments.editBodyTooLong",
                  defaultMessage: "Shorten your comment to {maximum, number} characters or fewer to save.",
                  values: { maximum: S.i7B },
                }),
              })),
            (i[2] = e.body),
            (i[3] = a))
          : (a = i[3]),
        i[4] !== t || i[5] !== a
          ? ((o = (0, n.jsxs)(n.Fragment, { children: [t, a] })), (i[4] = t), (i[5] = a), (i[6] = o))
          : (o = i[6]),
        o
      )
    }
    function em(e) {
      let t,
        a,
        o,
        i,
        r,
        u,
        m,
        g,
        h,
        f,
        x,
        v = (0, l.c)(42),
        {
          inactive: y,
          body: b,
          onBodyChange: w,
          pageId: _,
          presence: I,
          comments: k,
          thread: j,
          taskOwner: C,
          taskOwnerName: A,
          onCancel: M,
          onSave: T,
          renderTaskComposer: P,
        } = e,
        E = void 0 !== y && y,
        N = (0, d.A)(),
        [U, O] = (0, s.useState)(!1),
        [D, R] = (0, s.useState)()
      v[0] !== b || v[1] !== w || v[2] !== M || v[3] !== P || v[4] !== D
        ? ((t = P?.(
            b,
            M,
            (e, t) => {
              ;(w(e, t), O(!0))
            },
            D,
          )),
          (v[0] = b),
          (v[1] = w),
          (v[2] = M),
          (v[3] = P),
          (v[4] = D),
          (v[5] = t))
        : (t = v[5])
      let L = t
      if (null != L) return L
      v[6] !== b ? ((a = "" !== b.trim() && (0, S.Uac)(b.trim())), (v[6] = b), (v[7] = a)) : (a = v[7])
      let z = a
      ;(v[8] !== b || v[9] !== T || v[10] !== z
        ? ((o = (e) => {
            ;(e.preventDefault(), z && T(b))
          }),
          (v[8] = b),
          (v[9] = T),
          (v[10] = z),
          (v[11] = o))
        : (o = v[11]),
        v[12] !== M
          ? ((i = (e) => {
              !e.nativeEvent.isComposing &&
                ("Escape" === e.key
                  ? (e.preventDefault(), e.stopPropagation(), M())
                  : "Enter" === e.key &&
                    (e.metaKey || e.ctrlKey) &&
                    (e.preventDefault(), e.currentTarget.requestSubmit()))
            }),
            (v[12] = M),
            (v[13] = i))
          : (i = v[13]),
        v[14] !== b ||
        v[15] !== k ||
        v[16] !== E ||
        v[17] !== N ||
        v[18] !== w ||
        v[19] !== M ||
        v[20] !== _ ||
        v[21] !== I ||
        v[22] !== P ||
        v[23] !== U ||
        v[24] !== C ||
        v[25] !== A ||
        v[26] !== j
          ? ((r =
              null == _
                ? (0, n.jsx)(es.TM, {
                    rows: 3,
                    value: b,
                    onChange: (e) => w(e.target.value),
                    "aria-label": N.formatMessage({
                      id: "codex.space.page.comments.editBody",
                      defaultMessage: "Comment text",
                    }),
                  })
                : (0, n.jsx)(ed.m, {
                    className:
                      "block field-sizing-content max-h-48 min-h-20 w-full min-w-0 resize-none overflow-y-auto rounded-lg border border-default bg-surface px-3 py-2 text-sm leading-5 text-default outline-none placeholder:text-tertiary focus-within:border-ring",
                    disabled: E,
                    pageId: _,
                    presence: I,
                    comments: k,
                    contextualPicks: (0, ec.fC)(j),
                    thread: j,
                    taskOwner: C,
                    taskOwnerName: A,
                    autoFocus: !1,
                    allowOverLimitDraft: !0,
                    submitOnEnter: !1,
                    initialSelection: U ? 0 : void 0,
                    body: b,
                    onBodyChange: w,
                    onCancel: M,
                    onChatGPT:
                      null == P
                        ? void 0
                        : (e, t) => {
                            ;(R(t), w(e))
                          },
                    placeholder: "",
                    ariaLabel: N.formatMessage({
                      id: "codex.space.page.comments.editBody",
                      defaultMessage: "Comment text",
                    }),
                  })),
            (v[14] = b),
            (v[15] = k),
            (v[16] = E),
            (v[17] = N),
            (v[18] = w),
            (v[19] = M),
            (v[20] = _),
            (v[21] = I),
            (v[22] = P),
            (v[23] = U),
            (v[24] = C),
            (v[25] = A),
            (v[26] = j),
            (v[27] = r))
          : (r = v[27]),
        v[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)(c.A, { id: "codex.space.page.comments.cancelEdit", defaultMessage: "Cancel" })),
            (v[28] = u))
          : (u = v[28]),
        v[29] !== M
          ? ((m = (0, n.jsx)(p.$, { color: "secondary", size: "compact", onClick: M, children: u })),
            (v[29] = M),
            (v[30] = m))
          : (m = v[30]))
      let q = !z
      return (
        v[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, n.jsx)(c.A, { id: "codex.space.page.comments.saveEdit", defaultMessage: "Save" })), (v[31] = g))
          : (g = v[31]),
        v[32] !== q
          ? ((h = (0, n.jsx)(p.$, { type: "submit", size: "compact", disabled: q, children: g })),
            (v[32] = q),
            (v[33] = h))
          : (h = v[33]),
        v[34] !== h || v[35] !== m
          ? ((f = (0, n.jsxs)("div", { className: "flex justify-end gap-2", children: [m, h] })),
            (v[34] = h),
            (v[35] = m),
            (v[36] = f))
          : (f = v[36]),
        v[37] !== f || v[38] !== o || v[39] !== i || v[40] !== r
          ? ((x = (0, n.jsxs)("form", {
              ref: eg,
              className: "relative flex min-w-0 flex-col gap-2",
              onSubmit: o,
              onKeyDown: i,
              children: [r, f],
            })),
            (v[37] = f),
            (v[38] = o),
            (v[39] = i),
            (v[40] = r),
            (v[41] = x))
          : (x = v[41]),
        x
      )
    }
    function eg(e) {
      let t = e?.querySelector("textarea"),
        a = e?.closest("[data-page-comment-sidebar-scroll]")
      ;(t?.focus({ preventScroll: null != a }), null != t && null != a && (0, w.z)(a, t))
    }
    function eh(e) {
      let t,
        a = (0, l.c)(18),
        {
          inactive: o,
          messageId: i,
          initialBody: r,
          body: d,
          persistedBody: c,
          onBodyChange: u,
          pageId: p,
          presence: m,
          comments: g,
          thread: h,
          taskOwner: f,
          taskOwnerName: x,
          onCancel: v,
          onSave: y,
          renderTaskComposer: b,
        } = e,
        w = void 0 !== o && o,
        [_, I] = (0, s.useState)(w)
      w && !_ && I(!0)
      let k = !_,
        S = !w,
        j = !w,
        C = f ?? null,
        A = x ?? ""
      return (
        a[0] !== d ||
        a[1] !== g ||
        a[2] !== r ||
        a[3] !== i ||
        a[4] !== u ||
        a[5] !== v ||
        a[6] !== y ||
        a[7] !== p ||
        a[8] !== c ||
        a[9] !== m ||
        a[10] !== b ||
        a[11] !== k ||
        a[12] !== S ||
        a[13] !== j ||
        a[14] !== C ||
        a[15] !== A ||
        a[16] !== h
          ? ((t = (0, n.jsx)(eu.z, {
              autoFocus: k,
              isVisible: S,
              canSubmit: j,
              pageId: p,
              presence: m,
              comments: g,
              thread: h,
              authorAccountUserId: C,
              authorName: A,
              isReply: !1,
              editMessageId: i,
              initialBody: r,
              unifiedComments: !0,
              body: d,
              persistedBody: c,
              onBodyChange: u,
              onCancel: v,
              onSubmit: y,
              renderTaskComposer: b,
            })),
            (a[0] = d),
            (a[1] = g),
            (a[2] = r),
            (a[3] = i),
            (a[4] = u),
            (a[5] = v),
            (a[6] = y),
            (a[7] = p),
            (a[8] = c),
            (a[9] = m),
            (a[10] = b),
            (a[11] = k),
            (a[12] = S),
            (a[13] = j),
            (a[14] = C),
            (a[15] = A),
            (a[16] = h),
            (a[17] = t))
          : (t = a[17]),
        t
      )
    }
    var ef = a("yhbb"),
      ex = a("OMIV"),
      ev = a("VAbi")
    let ey = ["\u{1F44D}", "\u2764\uFE0F", "\u{1F389}", "\u{1F440}", "\u2705"],
      eb = [...ey, "\u2795"]
    function ew(e) {
      let t,
        a,
        o,
        i,
        c,
        u,
        m,
        h = (0, l.c)(27),
        { message: f, onSelect: x } = e,
        v = (0, r._U)(ex.JW, "618904801"),
        y = (0, d.A)(),
        [b, w] = (0, s.useState)(!1)
      ;(h[0] !== f.reactions ? ((t = f.reactions.filter(eI).map(e_)), (h[0] = f.reactions), (h[1] = t)) : (t = h[1]),
        h[2] !== y ? ((a = (e) => y.formatMessage(ek.reaction, { emoji: e })), (h[2] = y), (h[3] = a)) : (a = h[3]),
        h[4] !== t || h[5] !== a
          ? ((o = { selectedEmojis: t, getEmojiLabel: a }), (h[4] = t), (h[5] = a), (h[6] = o))
          : (o = h[6]))
      let _ = o
      h[7] !== x
        ? ((i = (e) => {
            "emoji" === e.kind && x(e.value)
          }),
          (h[7] = x),
          (h[8] = i))
        : (i = h[8])
      let I = i
      if (!v) {
        let e, t
        return (
          h[9] !== _ ? ((e = { emoji: { ..._, allowedEmojis: ey } }), (h[9] = _), (h[10] = e)) : (e = h[10]),
          h[11] !== I || h[12] !== e
            ? ((t = (0, n.jsx)(ev.T, { layout: "compact", capabilities: e, showSearch: !1, onSelect: I })),
              (h[11] = I),
              (h[12] = e),
              (h[13] = t))
            : (t = h[13]),
          t
        )
      }
      let k = b ? "grid" : "compact",
        S = b ? void 0 : eb
      ;(h[14] !== _ || h[15] !== S
        ? ((c = { emoji: { ..._, allowedEmojis: S } }), (h[14] = _), (h[15] = S), (h[16] = c))
        : (c = h[16]),
        h[17] !== b || h[18] !== y
          ? ((u =
              !b &&
              (0, n.jsx)(p.$, {
                "aria-label": y.formatMessage(ek.moreEmojis),
                "aria-expanded": b,
                color: "ghost",
                size: "iconCircleLg",
                onClick: () => w(!0),
                children: (0, n.jsx)(g.l0Y, {}),
              })),
            (h[17] = b),
            (h[18] = y),
            (h[19] = u))
          : (u = h[19]))
      let j = b ? 360 : 302
      return (
        h[20] !== b || h[21] !== I || h[22] !== k || h[23] !== c || h[24] !== u || h[25] !== j
          ? ((m = (0, n.jsx)(ev.T, {
              layout: k,
              compactSize: "small",
              capabilities: c,
              showSearch: b,
              trailing: u,
              width: j,
              onSelect: I,
            })),
            (h[20] = b),
            (h[21] = I),
            (h[22] = k),
            (h[23] = c),
            (h[24] = u),
            (h[25] = j),
            (h[26] = m))
          : (m = h[26]),
        m
      )
    }
    function e_(e) {
      return e.emoji
    }
    function eI(e) {
      return e.reactedByMe
    }
    let ek = (0, u.YK)({
      reaction: { id: "codex.space.page.comments.reaction", defaultMessage: "{emoji} reaction" },
      moreEmojis: { id: "codex.space.page.comments.moreEmojis", defaultMessage: "More emojis" },
    })
    var eS = a("SZCv"),
      ej = a.n(eS),
      eC = a("rTPf")
    let eA = (0, r.i1)(
      ea.u,
      (e, { get: t }) =>
        e.flatMap((e) => {
          let { id: a, displayName: n } = e,
            l = n === a ? t(eC.ik, a) : n
          return null == l && "agent" !== e.authorType ? [] : [{ ...e, displayName: l }]
        }),
      { isEqual: ej() },
    )
    function eM(e) {
      let t,
        a,
        o,
        i,
        s = (0, l.c)(23),
        { reaction: d, viewerId: p } = e
      s[0] !== d.reactors ? ((t = d.reactors.slice(0, 5)), (s[0] = d.reactors), (s[1] = t)) : (t = s[1])
      let m = (0, r._U)(eA, t)
      if (s[2] !== m || s[3] !== p) {
        let e
        ;(s[5] !== p
          ? ((e = (e, t) =>
              "agent" !== e.authorType
                ? e.displayName
                : "o" === e.agent_kind
                  ? (0, n.jsx)(
                      b._,
                      { ownerName: e.displayName ?? void 0, conversationId: p === e.id ? e.conversation_id : void 0 },
                      t,
                    )
                  : (0, n.jsx)(c.A, { id: "codex.space.page.comments.reactionChatGPT", defaultMessage: "ChatGPT" }, t)),
            (s[5] = p),
            (s[6] = e))
          : (e = s[6]),
          (a = m.map(e)),
          (s[2] = m),
          (s[3] = p),
          (s[4] = a))
      } else a = s[4]
      let g = a,
        h = d.count - g.length
      if (0 === g.length) {
        let e
        ;(s[7] !== d.count || s[8] !== d.emoji
          ? ((e = (0, n.jsx)(c.A, {
              id: "codex.space.page.comments.reactionCountWithEmoji",
              defaultMessage: "{emoji} {count, plural, one {# reaction} other {# reactions}}",
              values: { emoji: d.emoji, count: d.count },
            })),
            (s[7] = d.count),
            (s[8] = d.emoji),
            (s[9] = e))
          : (e = s[9]),
          (o = e))
      } else if (h > 0) {
        let e, t
        ;(s[10] !== g ? ((e = (0, n.jsx)(u.dT, { value: g, type: "unit" })), (s[10] = g), (s[11] = e)) : (e = s[11]),
          s[12] !== d.emoji || s[13] !== h || s[14] !== e
            ? ((t = (0, n.jsx)(c.A, {
                id: "codex.space.page.comments.reactionPeopleWithOthers",
                defaultMessage: "{emoji} {people} and {remaining, plural, one {# other} other {# others}}",
                values: { emoji: d.emoji, people: e, remaining: h },
              })),
              (s[12] = d.emoji),
              (s[13] = h),
              (s[14] = e),
              (s[15] = t))
            : (t = s[15]),
          (o = t))
      } else {
        let e, t
        ;(s[16] !== g ? ((e = (0, n.jsx)(u.dT, { value: g })), (s[16] = g), (s[17] = e)) : (e = s[17]),
          s[18] !== d.emoji || s[19] !== e
            ? ((t = (0, n.jsx)(c.A, {
                id: "codex.space.page.comments.reactionPeople",
                defaultMessage: "{emoji} {people}",
                values: { emoji: d.emoji, people: e },
              })),
              (s[18] = d.emoji),
              (s[19] = e),
              (s[20] = t))
            : (t = s[20]),
          (o = t))
      }
      return (s[21] !== o ? ((i = (0, n.jsx)("span", { children: o })), (s[21] = o), (s[22] = i)) : (i = s[22]), i)
    }
    function eT(e) {
      let t,
        a,
        u,
        S,
        j,
        C,
        A,
        M,
        T,
        P,
        E,
        N,
        U,
        O,
        D,
        R,
        L,
        z,
        B,
        $,
        F,
        K,
        Y,
        W,
        V,
        H,
        X,
        Q,
        J,
        Z,
        ee,
        et,
        ea,
        en = (0, l.c)(178),
        {
          targetRequestId: el,
          revealTarget: eo,
          pageId: er,
          presence: es,
          comments: ed,
          thread: ec,
          sidechat: eu,
          renderTaskMention: em,
          renderTaskComposer: eg,
          composeTask: eh,
          onCloseTaskComposer: ex,
          threadId: ev,
          message: ey,
          findMatch: eb,
          searchQuery: e_,
          viewerId: eI,
          taskViewer: ek,
          resolved: eS,
          writable: ej,
          hasConnector: eC,
          hasPrevious: eA,
          floatingLayout: eT,
          selected: eE,
          unifiedComments: eN,
          expanded: eU,
          onExpand: eO,
          onCollapse: eD,
          action: eR,
          reactionPickerOpen: eL,
          onReactionPickerChange: ez,
          onReaction: eq,
          onSelect: eB,
          onEdit: e$,
          editDraft: eF,
          onDelete: eK,
          onDeleteThread: eG,
          authorPresentation: eY,
          bodyContent: eW,
          collapsedBodies: eV,
        } = e,
        eH = void 0 === e_ ? "" : e_,
        eX = void 0 === ek ? eI : ek,
        eQ = void 0 !== eT && eT,
        eJ = void 0 !== eE && eE,
        eZ = void 0 !== eN && eN,
        e1 = (0, s.useRef)(null),
        e0 = (0, s.useRef)(!1),
        [e2, e3] = (0, s.useState)(!1),
        [e4, e5] = (0, s.useState)(!1),
        e6 = e2 || e4 || eL,
        e7 = (0, s.useRef)(null),
        [e8, e9] = (0, s.useState)(null)
      null != e8 && (null == e$ || null != ey.deletedAt) && e9(null)
      let te = null == eF ? e8 : eF.value,
        tt = eF?.onChange ?? e9,
        ta = null != te && null != e$ && null == ey.deletedAt,
        tn = (ta || (void 0 !== eh && eh)) && null != e$,
        tl = eF?.onEditorMount
      ;(en[0] !== tl || en[1] !== tn || en[2] !== ev
        ? ((t = () => {
            if (tn) return tl?.(ev)
          }),
          (a = [tl, tn, ev]),
          (en[0] = tl),
          (en[1] = tn),
          (en[2] = ev),
          (en[3] = t),
          (en[4] = a))
        : ((t = en[3]), (a = en[4])),
        (0, s.useLayoutEffect)(t, a),
        en[5] !== tt || en[6] !== ex
          ? ((u = () => {
              ;(tt(null), ex?.(), e1.current?.focus({ preventScroll: !0 }))
            }),
            (en[5] = tt),
            (en[6] = ex),
            (en[7] = u))
          : (u = en[7]))
      let to = u
      ;(en[8] !== eo || en[9] !== el
        ? ((S = () => {
            if (eo && null != el && e7.current !== el) {
              let e = requestAnimationFrame(() => {
                e7.current = el
                let e = e1.current,
                  t = e?.closest("[data-page-comment-sidebar-scroll]")
                ;(null != e && null != t ? (0, w.z)(t, e) : e?.scrollIntoView({ block: "nearest" }),
                  e?.focus({ preventScroll: !0 }))
              })
              return () => cancelAnimationFrame(e)
            }
          }),
          (j = [eo, el]),
          (en[8] = eo),
          (en[9] = el),
          (en[10] = S),
          (en[11] = j))
        : ((S = en[10]), (j = en[11])),
        (0, s.useLayoutEffect)(S, j))
      let ti = (0, d.A)(),
        tr = "agent" === ey.authorType,
        ts = tr && "o" === ey.agent_kind,
        td = (0, r._U)(null == eY && ts ? I.tR : void 0, ey.author.id)
      en[12] !== ti || en[13] !== td
        ? ((C = null == td ? void 0 : (0, x.k)(td, ti, "size-6")), (en[12] = ti), (en[13] = td), (en[14] = C))
        : (C = en[14])
      let tc = C,
        tu = (0, r._U)(null == eY ? I.Bm : void 0, ey.author) ?? ey.author.displayName,
        tp = tu !== ey.author.id,
        tm = (0, r._U)(null == eY ? I.Ww : void 0, ey.author.id),
        tg = null != ey.editedAt && ey.editedAt !== ey.createdAt && null == ey.deletedAt
      if (en[15] !== tg || en[16] !== ti || en[17] !== ey.createdAt || en[18] !== ey.editedAt) {
        let e = ti.formatDate(ey.createdAt, { dateStyle: "medium", timeStyle: "short" })
        ;((A = tg
          ? ti.formatMessage(
              {
                id: "codex.space.page.comments.createdAndEditedAt",
                defaultMessage: "Created {createdAt} \xb7 Edited {editedAt}",
              },
              { createdAt: e, editedAt: ti.formatDate(ey.editedAt, { dateStyle: "medium", timeStyle: "short" }) },
            )
          : e),
          (en[15] = tg),
          (en[16] = ti),
          (en[17] = ey.createdAt),
          (en[18] = ey.editedAt),
          (en[19] = A))
      } else A = en[19]
      let th = A
      en[20] !== ti ? ((M = ti.formatMessage(eP.addReaction)), (en[20] = ti), (en[21] = M)) : (M = en[21])
      let tf = M
      en[22] !== tu || en[23] !== ti || en[24] !== tp
        ? ((T = ti.formatMessage(
            {
              id: "codex.space.page.comments.agentInitiator",
              defaultMessage: "Initiated by {knownAuthor, select, true {{authorName}} other {a collaborator}}",
            },
            { knownAuthor: tp, authorName: tu },
          )),
          (en[22] = tu),
          (en[23] = ti),
          (en[24] = tp),
          (en[25] = T))
        : (T = en[25])
      let tx = T
      en[26] !== tu ||
      en[27] !== tt ||
      en[28] !== ed ||
      en[29] !== te?.body ||
      en[30] !== te?.persistedBody ||
      en[31] !== eF?.hidden ||
      en[32] !== tp ||
      en[33] !== ey.body ||
      en[34] !== ey.id ||
      en[35] !== e$ ||
      en[36] !== er ||
      en[37] !== es ||
      en[38] !== eg ||
      en[39] !== tn ||
      en[40] !== to ||
      en[41] !== ec ||
      en[42] !== eZ ||
      en[43] !== eI ||
      en[44] !== ej
        ? ((P = tn
            ? (0, n.jsx)("div", {
                hidden: eF?.hidden,
                className: eZ ? "mt-2" : void 0,
                children: (0, n.jsx)(ep, {
                  inactive: eF?.hidden,
                  messageId: ey.id,
                  initialBody: ey.body,
                  unifiedComments: eZ,
                  body: te?.body ?? ey.body,
                  persistedBody: te?.persistedBody,
                  onBodyChange: (e, t) => tt({ body: e, persistedBody: t }),
                  renderTaskComposer: eg,
                  pageId: er,
                  presence: es,
                  comments: ed,
                  thread: ec,
                  taskOwner: ej ? eI : void 0,
                  taskOwnerName: tp ? tu : void 0,
                  onCancel: to,
                  onSave: (e) => {
                    e$(e) && to()
                  },
                }),
              })
            : null),
          (en[26] = tu),
          (en[27] = tt),
          (en[28] = ed),
          (en[29] = te?.body),
          (en[30] = te?.persistedBody),
          (en[31] = eF?.hidden),
          (en[32] = tp),
          (en[33] = ey.body),
          (en[34] = ey.id),
          (en[35] = e$),
          (en[36] = er),
          (en[37] = es),
          (en[38] = eg),
          (en[39] = tn),
          (en[40] = to),
          (en[41] = ec),
          (en[42] = eZ),
          (en[43] = eI),
          (en[44] = ej),
          (en[45] = P))
        : (P = en[45])
      let tv = P
      ;(en[46] !== eV || en[47] !== ey
        ? ((E = null == eV ? void 0 : { cache: eV, message: ey }), (en[46] = eV), (en[47] = ey), (en[48] = E))
        : (E = en[48]),
        en[49] !== eW ||
        en[50] !== eU ||
        en[51] !== eb ||
        en[52] !== eQ ||
        en[53] !== ey.body ||
        en[54] !== eD ||
        en[55] !== eO ||
        en[56] !== em ||
        en[57] !== eS ||
        en[58] !== eH ||
        en[59] !== E ||
        en[60] !== eX ||
        en[61] !== ev ||
        en[62] !== eZ
          ? ((N = (0, n.jsx)(G, {
              floatingLayout: eQ,
              unifiedComments: eZ,
              viewer: eX,
              renderTaskMention: em,
              commentThreadId: ev,
              collapseMeasurement: E,
              expanded: eU,
              body: ey.body,
              findMatch: eb,
              searchQuery: eH,
              resolved: eS,
              onExpand: eO,
              onCollapse: eD,
              children: eW,
            })),
            (en[49] = eW),
            (en[50] = eU),
            (en[51] = eb),
            (en[52] = eQ),
            (en[53] = ey.body),
            (en[54] = eD),
            (en[55] = eO),
            (en[56] = em),
            (en[57] = eS),
            (en[58] = eH),
            (en[59] = E),
            (en[60] = eX),
            (en[61] = ev),
            (en[62] = eZ),
            (en[63] = N))
          : (N = en[63]))
      let ty = N,
        tb = ey.id,
        tw = eA ? void 0 : "",
        t_ = e2 || e4 || eL ? "" : void 0,
        tI = null != eb ? "" : void 0
      ;(en[64] !== e2
        ? ((U = (e) => {
            !e2 &&
              "touch" !== e.pointerType &&
              e.target instanceof Element &&
              e.currentTarget.contains(e.target) &&
              null == e.target.closest("button, time") &&
              e3(!0)
          }),
          (en[64] = e2),
          (en[65] = U))
        : (U = en[65]),
        en[66] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (e) => {
              ;(e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) || e3(!1)
            }),
            (en[66] = O))
          : (O = en[66]),
        en[67] !== tu ||
        en[68] !== eY?.avatar ||
        en[69] !== tx ||
        en[70] !== tr ||
        en[71] !== ts ||
        en[72] !== tp ||
        en[73] !== ey.author.id ||
        en[74] !== ey.conversation_id ||
        en[75] !== tc?.icon ||
        en[76] !== eI
          ? ((D =
              eY?.avatar ??
              tc?.icon ??
              (tr
                ? (0, n.jsx)(o.m, {
                    content: tx,
                    children: (0, n.jsx)(k.H, {
                      accountUserId: ey.author.id,
                      name: tp ? tu : "?",
                      children: ts
                        ? (0, n.jsx)(v.r, {
                            className: "size-6",
                            conversationId: eI === ey.author.id ? ey.conversation_id : void 0,
                          })
                        : void 0,
                    }),
                  })
                : (0, n.jsx)(y.c$, {
                    accountUserId: tp ? ey.author.id : null,
                    label: tu,
                    tabIndex: -1,
                    variant: "avatar",
                    children: (0, n.jsx)(k.Z, { accountUserId: ey.author.id, name: tp ? tu : "?" }),
                  }))),
            (en[67] = tu),
            (en[68] = eY?.avatar),
            (en[69] = tx),
            (en[70] = tr),
            (en[71] = ts),
            (en[72] = tp),
            (en[73] = ey.author.id),
            (en[74] = ey.conversation_id),
            (en[75] = tc?.icon),
            (en[76] = eI),
            (en[77] = D))
          : (D = en[77]),
        en[78] !== D
          ? ((R = (0, n.jsx)("span", { "data-page-comment-avatar": !0, className: "block", children: D })),
            (en[78] = D),
            (en[79] = R))
          : (R = en[79]))
      let tk = eQ && "relative min-h-5 leading-5"
      ;(en[80] !== tk
        ? ((L = (0, i.A)("flex min-w-0 items-center gap-1", tk)), (en[80] = tk), (en[81] = L))
        : (L = en[81]),
        en[82] !== eY
          ? ((z =
              null != eY ? (0, n.jsx)("span", { className: "min-w-4 truncate font-medium", children: eY.name }) : null),
            (en[82] = eY),
            (en[83] = z))
          : (z = en[83]),
        en[84] !== tm ||
        en[85] !== tu ||
        en[86] !== eY ||
        en[87] !== tx ||
        en[88] !== ti ||
        en[89] !== tr ||
        en[90] !== ts ||
        en[91] !== tp ||
        en[92] !== ey.author.id ||
        en[93] !== ey.conversation_id ||
        en[94] !== eB ||
        en[95] !== eS ||
        en[96] !== eH ||
        en[97] !== tc?.title ||
        en[98] !== eZ ||
        en[99] !== eI
          ? ((B =
              null == eY &&
              (tr
                ? (0, n.jsx)(o.m, {
                    content: tc?.title ?? tx,
                    children: (0, n.jsx)("button", {
                      "aria-label": ts
                        ? void 0
                        : ti.formatMessage(
                            {
                              id: "codex.space.page.comments.agentAuthorWithInitiator",
                              defaultMessage:
                                "ChatGPT, initiated by {knownAuthor, select, true {{authorName}} other {a collaborator}}",
                            },
                            { knownAuthor: tp, authorName: tu },
                          ),
                      className: (0, i.A)(
                        "flex min-w-4 max-w-fit flex-1 items-center rounded-sm text-start font-medium focus-visible:outline-2 focus-visible:outline-ring",
                        eS && "text-secondary",
                      ),
                      type: "button",
                      onClick: eB,
                      children: (0, n.jsx)("span", {
                        className: "truncate",
                        children: ts
                          ? (tc?.title ??
                            (0, n.jsx)(b._, {
                              conversationId: eI === ey.author.id ? ey.conversation_id : void 0,
                              ownerName: tp ? tu : void 0,
                            }))
                          : (0, n.jsx)(c.A, {
                              id: "codex.space.page.comments.chatgptAuthor",
                              defaultMessage: "ChatGPT",
                            }),
                      }),
                    }),
                  })
                : (0, n.jsx)("span", {
                    className: (0, i.A)(
                      "flex min-w-4 max-w-fit flex-1 items-center font-medium",
                      eS && "text-secondary",
                    ),
                    children:
                      tm && !tp && (eZ || eI !== ey.author.id)
                        ? (0, n.jsxs)("span", {
                            "aria-busy": "true",
                            className: "flex h-lh min-w-0 items-center",
                            children: [
                              (0, n.jsx)("span", {
                                className: "sr-only",
                                children: (0, n.jsx)(c.A, {
                                  id: "codex.space.page.comments.loadingAuthor",
                                  defaultMessage: "Loading author\u2026",
                                }),
                              }),
                              (0, n.jsx)(f.X, { as: "span", className: "w-24 max-w-full", size: "sm" }),
                            ],
                          })
                        : (0, n.jsx)(y.c$, {
                            accountUserId: tp ? ey.author.id : null,
                            label: tu,
                            children: (0, n.jsx)("span", {
                              className: "block truncate",
                              children: (0, n.jsx)(c.A, {
                                id: "codex.space.page.comments.author",
                                defaultMessage:
                                  "{viewer, select, true {You} other {{knownAuthor, select, true {{authorName}} other {Collaborator}}}}",
                                values: {
                                  viewer: !eZ && eI === ey.author.id,
                                  knownAuthor: tp,
                                  authorName: eH ? (0, n.jsx)(q.v, { query: eH, text: tu }) : tu,
                                },
                              }),
                            }),
                          }),
                  }))),
            (en[84] = tm),
            (en[85] = tu),
            (en[86] = eY),
            (en[87] = tx),
            (en[88] = ti),
            (en[89] = tr),
            (en[90] = ts),
            (en[91] = tp),
            (en[92] = ey.author.id),
            (en[93] = ey.conversation_id),
            (en[94] = eB),
            (en[95] = eS),
            (en[96] = eH),
            (en[97] = tc?.title),
            (en[98] = eZ),
            (en[99] = eI),
            (en[100] = B))
          : (B = en[100]),
        en[101] !== tg || en[102] !== ey.createdAt
          ? (($ = (0, n.jsx)("span", {
              "aria-hidden": "true",
              children: tg
                ? (0, n.jsx)(c.A, {
                    id: "codex.space.page.comments.editedTimestamp",
                    defaultMessage: "{timestamp} \xb7 Edited",
                    values: { timestamp: (0, n.jsx)(m.A, { dateString: ey.createdAt }) },
                  })
                : (0, n.jsx)(m.A, { dateString: ey.createdAt }),
            })),
            (en[101] = tg),
            (en[102] = ey.createdAt),
            (en[103] = $))
          : ($ = en[103]),
        en[104] !== th
          ? ((F = (0, n.jsx)("span", { className: "sr-only", children: th })), (en[104] = th), (en[105] = F))
          : (F = en[105]),
        en[106] !== ey.createdAt || en[107] !== $ || en[108] !== F
          ? ((K = (0, n.jsxs)("time", {
              dateTime: ey.createdAt,
              className:
                "-mx-1 min-w-0 cursor-interaction truncate px-1 text-start text-sm text-tertiary in-data-[comment-layout=floating]:shrink-0 in-data-[comment-layout=floating]:text-xs in-data-[comment-layout=floating]:text-secondary",
              children: [$, F],
            })),
            (en[106] = ey.createdAt),
            (en[107] = $),
            (en[108] = F),
            (en[109] = K))
          : (K = en[109]),
        en[110] !== K || en[111] !== th
          ? ((Y = (0, n.jsx)(o.m, { content: th, preventDismissOnFastClick: !0, children: K })),
            (en[110] = K),
            (en[111] = th),
            (en[112] = Y))
          : (Y = en[112]),
        en[113] !== z || en[114] !== B || en[115] !== Y
          ? ((W = (0, n.jsxs)("span", {
              className:
                "flex min-w-0 flex-1 items-center gap-1 text-base select-none in-data-[comment-layout=floating]:gap-1.25",
              children: [z, B, Y],
            })),
            (en[113] = z),
            (en[114] = B),
            (en[115] = Y),
            (en[116] = W))
          : (W = en[116]),
        en[117] !== e6 || en[118] !== eQ || en[119] !== eJ
          ? ((V = (0, i.A)(
              "flex shrink-0 items-center",
              eQ
                ? [
                    "absolute -top-0.5 -end-[3px] m-0 rounded-[5px] bg-surface-elevated focus-within:pointer-events-auto focus-within:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100 [@media(max-width:600px)]:pointer-events-auto [@media(max-width:600px)]:opacity-100",
                    e6 || eJ ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
                  ]
                : "-my-1 me-px electron:relative electron:-end-1",
            )),
            (en[117] = e6),
            (en[118] = eQ),
            (en[119] = eJ),
            (en[120] = V))
          : (V = en[120]),
        en[121] !== e6 || en[122] !== eQ
          ? ((H = (0, i.A)(
              "flex items-center",
              eQ
                ? "max-w-none overflow-visible"
                : [
                    "focus-within:max-w-full focus-within:overflow-visible pointer-coarse:max-w-full pointer-coarse:overflow-visible",
                    e6 ? "max-w-full overflow-visible" : "max-w-0 overflow-hidden",
                  ],
            )),
            (en[121] = e6),
            (en[122] = eQ),
            (en[123] = H))
          : (H = en[123]),
        en[124] !== tf ||
        en[125] !== eQ ||
        en[126] !== ey ||
        en[127] !== eq ||
        en[128] !== ez ||
        en[129] !== eL ||
        en[130] !== ej
          ? ((X =
              ej && null == ey.deletedAt
                ? (0, n.jsxs)(h.AM, {
                    open: eL,
                    onOpenChange: ez,
                    children: [
                      (0, n.jsx)(h.Wv, {
                        asChild: !0,
                        children: (0, n.jsx)(o.m, {
                          content: tf,
                          disabled: eL,
                          children: (0, n.jsx)(_.B, {
                            floatingLayout: eQ,
                            "aria-label": tf,
                            color: "ghostActive",
                            disabled: ey.reactions.length >= 10,
                            children: (0, n.jsx)(g.OSQ, {}),
                          }),
                        }),
                      }),
                      (0, n.jsx)(h.hl, {
                        className: "z-50 outline-hidden",
                        align: "end",
                        "aria-label": tf,
                        onCloseAutoFocus: (e) => {
                          let t = e0.current
                          ;((e0.current = !1),
                            t &&
                              ey.reactions.length >= 10 &&
                              (e.preventDefault(), e1.current?.focus({ preventScroll: !0 })))
                        },
                        unstyled: !0,
                        children: (0, n.jsx)(ew, {
                          message: ey,
                          onSelect: (e) => {
                            ;((e0.current = !0),
                              ez(!1),
                              eq({
                                active: !ey.reactions.find((t) => t.emoji === e)?.reactedByMe,
                                emoji: e,
                                messageId: ey.id,
                              }))
                          },
                        }),
                      }),
                    ],
                  })
                : null),
            (en[124] = tf),
            (en[125] = eQ),
            (en[126] = ey),
            (en[127] = eq),
            (en[128] = ez),
            (en[129] = eL),
            (en[130] = ej),
            (en[131] = X))
          : (X = en[131]),
        en[132] !== tt ||
        en[133] !== ta ||
        en[134] !== eQ ||
        en[135] !== ey ||
        en[136] !== eK ||
        en[137] !== eG ||
        en[138] !== e$ ||
        en[139] !== eB ||
        en[140] !== er ||
        en[141] !== eu ||
        en[142] !== ev
          ? ((Q =
              (null != er && null == ey.deletedAt) || null != e$ || null != eK || null != eG
                ? (0, n.jsx)(ei, {
                    floatingLayout: eQ,
                    pageId: er,
                    threadId: ev,
                    message: ey,
                    sidechat: eu,
                    editing: ta,
                    onEdit:
                      null == e$
                        ? void 0
                        : () => {
                            ;(eQ && eB?.(), tt({ body: ey.body, originalBody: ey.body }))
                          },
                    onDelete: eK,
                    onDeleteThread: eG,
                    onMenuOpenChange: e5,
                  })
                : null),
            (en[132] = tt),
            (en[133] = ta),
            (en[134] = eQ),
            (en[135] = ey),
            (en[136] = eK),
            (en[137] = eG),
            (en[138] = e$),
            (en[139] = eB),
            (en[140] = er),
            (en[141] = eu),
            (en[142] = ev),
            (en[143] = Q))
          : (Q = en[143]),
        en[144] !== eR || en[145] !== H || en[146] !== X || en[147] !== Q
          ? ((J = (0, n.jsxs)("div", { className: H, children: [eR, X, Q] })),
            (en[144] = eR),
            (en[145] = H),
            (en[146] = X),
            (en[147] = Q),
            (en[148] = J))
          : (J = en[148]),
        en[149] !== V || en[150] !== J
          ? ((Z = (0, n.jsx)("div", { className: V, children: J })), (en[149] = V), (en[150] = J), (en[151] = Z))
          : (Z = en[151]),
        en[152] !== L || en[153] !== W || en[154] !== Z
          ? ((ee = (0, n.jsxs)("div", { className: L, children: [W, Z] })),
            (en[152] = L),
            (en[153] = W),
            (en[154] = Z),
            (en[155] = ee))
          : (ee = en[155]))
      let tS = null == tv || eF?.hidden ? ty : null
      return (
        en[156] !== eQ ||
        en[157] !== ti ||
        en[158] !== ey.deletedAt ||
        en[159] !== ey.id ||
        en[160] !== ey.reactions ||
        en[161] !== eq ||
        en[162] !== eI ||
        en[163] !== ej
          ? ((et =
              null == ey.deletedAt && ey.reactions.length > 0
                ? (0, n.jsx)("div", {
                    className:
                      "flex flex-wrap items-center gap-1 text-xs text-secondary in-data-[comment-layout=floating]:mt-1",
                    children: ey.reactions.map((e) =>
                      (0, n.jsx)(
                        o.m,
                        {
                          content: (0, n.jsx)(eM, { reaction: e, viewerId: eI }),
                          children: (0, n.jsx)(p.$, {
                            "aria-label": ti.formatMessage(eP.reaction, { emoji: e.emoji }),
                            "aria-pressed": e.reactedByMe,
                            className: (0, i.A)(
                              eQ &&
                                "h-5.5 rounded-lg border-0 border-transparent bg-secondary-soft px-1.75 py-px text-xs leading-5 text-default",
                            ),
                            color: e.reactedByMe ? "secondary" : "ghostSecondary",
                            disabled: !ej,
                            size: "compact",
                            unstyled: eQ,
                            onClick: () => eq({ active: !e.reactedByMe, emoji: e.emoji, messageId: ey.id }),
                            children: eQ
                              ? (0, n.jsx)(c.A, {
                                  id: "codex.space.page.comments.reactionCount",
                                  defaultMessage: "{emoji} {count}",
                                  values: { emoji: e.emoji, count: e.count },
                                })
                              : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    e.emoji,
                                    (0, n.jsx)("span", { className: "text-xs tabular-nums", children: e.count }),
                                  ],
                                }),
                          }),
                        },
                        e.emoji,
                      ),
                    ),
                  })
                : null),
            (en[156] = eQ),
            (en[157] = ti),
            (en[158] = ey.deletedAt),
            (en[159] = ey.id),
            (en[160] = ey.reactions),
            (en[161] = eq),
            (en[162] = eI),
            (en[163] = ej),
            (en[164] = et))
          : (et = en[164]),
        en[165] !== tv ||
        en[166] !== eC ||
        en[167] !== eA ||
        en[168] !== ey.id ||
        en[169] !== tw ||
        en[170] !== t_ ||
        en[171] !== tI ||
        en[172] !== U ||
        en[173] !== R ||
        en[174] !== ee ||
        en[175] !== tS ||
        en[176] !== et
          ? ((ea = (0, n.jsxs)(ef.K, {
              ref: e1,
              "data-page-comment-message-id": tb,
              "data-page-comment-root-message": tw,
              "data-page-comment-actions-visible": t_,
              "data-page-comment-find-message": tI,
              tabIndex: -1,
              onPointerOver: U,
              onPointerOut: O,
              hasConnector: eC,
              hasPrevious: eA,
              avatar: R,
              header: ee,
              children: [tv, tS, et],
            })),
            (en[165] = tv),
            (en[166] = eC),
            (en[167] = eA),
            (en[168] = ey.id),
            (en[169] = tw),
            (en[170] = t_),
            (en[171] = tI),
            (en[172] = U),
            (en[173] = R),
            (en[174] = ee),
            (en[175] = tS),
            (en[176] = et),
            (en[177] = ea))
          : (ea = en[177]),
        ea
      )
    }
    let eP = (0, u.YK)({
      addReaction: { id: "codex.space.page.comments.addReaction", defaultMessage: "Add reaction" },
      reaction: { id: "codex.space.page.comments.reaction", defaultMessage: "{emoji} reaction" },
    })
  },
  HWbF(e, t, a) {
    a.d(
      t,
      {},
      {
        A2: function (e, t) {
          let a = e.closest("[data-page-comment-rail-motion]"),
            n = null == a ? "none" : getComputedStyle(a).transform
          return "none" !== n && n ? new DOMMatrixReadOnly(n).m41 * t : 0
        },
        _Y: { duration: 0.18, ease: [0.3, 0, 1, 1] },
        xl: { duration: 0.14, ease: [0.2, 0.8, 0.2, 1] },
      },
    )
  },
  MR2J(e, t, a) {
    var n = a("qmMi"),
      l = a("svjy"),
      o = a("wSXO"),
      i = a("jiwy"),
      r = a("nZBp"),
      s = a("NRR1"),
      d = a("OWtl")
    let c = (0, n.vP)(d.u, {}),
      u = (0, n.un)(d.u, ({ get: e }) => {
        let t = e(s.DO),
          a = e(s.jv)
        return null == t || null == a ? null : JSON.stringify([t, a])
      }),
      p = (0, n.un)(d.u, ({ get: e }) => {
        if (!e(i.VK)) return
        let t = e(r.T7),
          a = null == t ? void 0 : (0, o.jl)(t, e(l.g))
        return a?.isPrimary && a.isPersonal ? a : void 0
      })
    a.d(
      t,
      {},
      {
        $l: function (e, t) {
          let a = e.get(u),
            n = null == a ? void 0 : e.get(c)[a]
          return null != n ? n : { recipient: null != t && e.get(p)?.orbitId === t ? "dot" : "chatgpt", checked: !1 }
        },
        _B: function (e, t) {
          let a = e.get(u)
          null != a && e.set(c, (e) => ({ ...e, [a]: t }))
        },
        wb: p,
      },
    )
  },
  PYJe(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("oyxz"),
      i = a("Sm6l"),
      r = a("FXi4")
    a.d(
      t,
      {},
      {
        g: function (e) {
          let t,
            a,
            s,
            d,
            c = (0, l.c)(10),
            { count: u, firstReplyId: p, messagesId: m, onExpand: g } = e
          return (
            c[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)("span", {
                  "aria-hidden": !0,
                  className: "relative w-6 shrink-0 self-stretch",
                  children: (0, n.jsx)("span", {
                    className:
                      "page-comment-thread-connector inset-y-0 in-data-[comment-layout=floating]:-top-0.5 in-data-[comment-layout=floating]:-bottom-2",
                  }),
                })),
                (c[0] = t))
              : (t = c[0]),
            c[1] !== p || c[2] !== g
              ? ((a = (e) => {
                  let t = e.currentTarget.closest("[data-page-comment-card]")
                  ;((0, r._)(e.currentTarget, g),
                    t?.querySelector(`[data-page-comment-message-id="${CSS.escape(p)}"]`)?.focus({ preventScroll: !0 }))
                }),
                (c[1] = p),
                (c[2] = g),
                (c[3] = a))
              : (a = c[3]),
            c[4] !== u
              ? ((s = (0, n.jsx)(o.A, {
                  id: "codex.space.page.comments.showReplies",
                  defaultMessage: "Show {count, plural, one {# reply} other {# replies}}",
                  values: { count: u },
                })),
                (c[4] = u),
                (c[5] = s))
              : (s = c[5]),
            c[6] !== m || c[7] !== a || c[8] !== s
              ? ((d = (0, n.jsxs)("div", {
                  className:
                    "page-comment-thread-row flex min-h-8 items-center text-sm text-secondary in-data-[comment-layout=floating]:mt-3 in-data-[comment-layout=floating]:-mb-0.5",
                  children: [
                    t,
                    (0, n.jsx)(i.$, {
                      className: "min-h-6 in-data-[comment-layout=floating]:hover:underline",
                      "aria-controls": m,
                      "aria-expanded": !1,
                      color: "ghostMuted",
                      size: "inline",
                      onClick: a,
                      children: s,
                    }),
                  ],
                })),
                (c[6] = m),
                (c[7] = a),
                (c[8] = s),
                (c[9] = d))
              : (d = c[9]),
            d
          )
        },
      },
    )
  },
  PqeH(e, t, a) {
    a.d(
      t,
      {},
      {
        d: function (e, t, a) {
          if (e.length <= 2 || e.reduce((e, t) => e + t, 0) <= t) return { hiddenStart: 0, hiddenEnd: 0 }
          let n = 1,
            l = e.length - 1,
            o = e[0] + e[l] + a,
            i = !0
          for (; n < l;) {
            let a = i ? n : l - 1
            if (o + e[a] > t && o + e[(a = i ? l - 1 : n)] > t) break
            ;((o += e[a]), a === n ? ((n += 1), (i = !1)) : ((l -= 1), (i = !0)))
          }
          return { hiddenStart: n, hiddenEnd: l }
        },
      },
    )
  },
  a4Nf(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("oyxz"),
      i = a("Sm6l"),
      r = a("xs0e"),
      s = a("i4vk")
    a.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            a,
            d,
            c,
            u = (0, l.c)(10),
            { resolvedAt: p, onReopen: m } = e,
            g = null != p
          return (
            u[0] !== p
              ? ((t = null != p ? (0, n.jsx)(r.A, { dateString: p }, "resolved-time") : null), (u[0] = p), (u[1] = t))
              : (t = u[1]),
            u[2] !== g || u[3] !== t
              ? ((a = (0, n.jsx)("span", {
                  children: (0, n.jsx)(o.A, {
                    id: "codex.space.page.comments.resolvedStatus",
                    defaultMessage: "Resolved{hasDate, select, true { \xb7 {time}} other {}}",
                    values: { hasDate: g, time: t },
                  }),
                })),
                (u[2] = g),
                (u[3] = t),
                (u[4] = a))
              : (a = u[4]),
            u[5] !== m
              ? ((d =
                  null != m
                    ? (0, n.jsx)(i.$, {
                        color: "ghostSecondary",
                        size: "compact",
                        onClick: m,
                        children: (0, n.jsx)(o.A, { ...s.DP.reopen }),
                      })
                    : null),
                (u[5] = m),
                (u[6] = d))
              : (d = u[6]),
            u[7] !== a || u[8] !== d
              ? ((c = (0, n.jsxs)("div", {
                  className:
                    "flex flex-wrap items-center justify-between gap-2 ps-4 pe-3 pb-2 text-sm text-tertiary select-none in-data-[comment-layout=floating]:mt-3 in-data-[comment-layout=floating]:px-0 in-data-[comment-layout=floating]:pb-0",
                  children: [a, d],
                })),
                (u[7] = a),
                (u[8] = d),
                (u[9] = c))
              : (c = u[9]),
            c
          )
        },
      },
    )
  },
  eo4i(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("on57"),
      i = a("zd8w"),
      r = a("oyxz"),
      s = a("bVeK")
    function d(e) {
      let t,
        a,
        i,
        r,
        d,
        c,
        u,
        p,
        m = (0, l.c)(18)
      ;(m[0] !== e
        ? (({ expanded: t, onExpandedChange: i, label: a, ...r } = e),
          (m[0] = e),
          (m[1] = t),
          (m[2] = a),
          (m[3] = i),
          (m[4] = r))
        : ((t = m[1]), (a = m[2]), (i = m[3]), (r = m[4])),
        m[5] !== t || m[6] !== i ? ((d = () => i(!t)), (m[5] = t), (m[6] = i), (m[7] = d)) : (d = m[7]))
      let g = t && "rotate-90"
      return (
        m[8] !== g ? ((c = (0, o.A)(g)), (m[8] = g), (m[9] = c)) : (c = m[9]),
        m[10] !== c ? ((u = (0, n.jsx)(s.uM3, { className: c })), (m[10] = c), (m[11] = u)) : (u = m[11]),
        m[12] !== t || m[13] !== a || m[14] !== r || m[15] !== d || m[16] !== u
          ? ((p = (0, n.jsxs)("button", {
              ...r,
              type: "button",
              "aria-expanded": t,
              className:
                "flex w-full cursor-interaction items-center justify-between rounded-lg px-2 py-2 text-start text-sm font-medium text-secondary select-none hover:bg-secondary-ghost-hover",
              onClick: d,
              children: [a, u],
            })),
            (m[12] = t),
            (m[13] = a),
            (m[14] = r),
            (m[15] = d),
            (m[16] = u),
            (m[17] = p))
          : (p = m[17]),
        p
      )
    }
    a.d(
      t,
      {},
      {
        U: d,
        w: function (e) {
          let t,
            a,
            o,
            s,
            c = (0, l.c)(12),
            { children: u, expanded: p, onExpandedChange: m } = e,
            g = (0, i.useId)()
          ;(c[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(r.A, { id: "codex.space.page.comments.resolvedHeading", defaultMessage: "Resolved" })),
              (c[0] = t))
            : (t = c[0]),
            c[1] !== p || c[2] !== g || c[3] !== m
              ? ((a = (0, n.jsx)(d, { "aria-controls": g, expanded: p, onExpandedChange: m, label: t })),
                (c[1] = p),
                (c[2] = g),
                (c[3] = m),
                (c[4] = a))
              : (a = c[4]))
          let h = !p,
            f = p ? u : null
          return (
            c[5] !== g || c[6] !== h || c[7] !== f
              ? ((o = (0, n.jsx)("div", { id: g, className: "flex flex-col gap-1.5", hidden: h, children: f })),
                (c[5] = g),
                (c[6] = h),
                (c[7] = f),
                (c[8] = o))
              : (o = c[8]),
            c[9] !== a || c[10] !== o
              ? ((s = (0, n.jsxs)("section", {
                  "data-page-comment-card": !0,
                  className: "mt-3 flex flex-col gap-1.5 border-t border-default pt-2",
                  children: [a, o],
                })),
                (c[9] = a),
                (c[10] = o),
                (c[11] = s))
              : (s = c[11]),
            s
          )
        },
      },
    )
  },
  xMUP(e, t, a) {
    var n = a("kQNh"),
      l = a.n(n),
      o = a("Oe5x")
    let i = new WeakMap()
    function r(e, t) {
      let a = i.get(e)
      if (a?.body !== e.body) {
        let { tokens: t, taskMentions: n } = (0, o.bl)(e.body)
        ;((a = { body: e.body, text: (0, o.Mw)(t), taskTokens: n.length ? t : void 0 }), i.set(e, a))
      }
      return t && a.taskTokens ? (0, o.Mw)(a.taskTokens, void 0, t) : a.text
    }
    function s(e) {
      let t = e.trim()
      return "" === t ? null : RegExp(`(${l()(t).replace(/['\u2018\u2019]/g, "['\u2018\u2019]")})`, "i")
    }
    function d(e, t) {
      let a = s(t)
      return null == a
        ? []
        : Array.from(e.matchAll(RegExp(a.source, "gi")), (e) => ({ start: e.index, end: e.index + e[0].length }))
    }
    a.d(
      t,
      {},
      {
        UI: function (e, t, a) {
          let n = s(t)
          return null == n
            ? []
            : e.messages
                .filter((e) => {
                  let t =
                    e.author.displayName === e.author.id
                      ? (a?.get(e.author.id) ?? e.author.displayName)
                      : e.author.displayName
                  return (
                    null == e.deletedAt &&
                    ((t !== e.author.id && n.test(t)) ||
                      ("agent" === e.authorType && n.test("o" === e.agent_kind ? "dot" : "ChatGPT")) ||
                      n.test(r(e)))
                  )
                })
                .map((e) => e.id)
        },
        Wo: function (e, t, a) {
          let n = new Map()
          if ("string" == typeof t && "" === t.trim()) return n
          let l = new Map(),
            i = (0, o.Mw)(e, l, a),
            r = "string" == typeof t ? d(i, t) : [{ start: t.from, end: t.to }],
            s = 0
          for (let [e, { start: t, end: a }] of l) {
            for (; s < r.length && r[s].end <= t;) s += 1
            let l = []
            for (let e = s; e < r.length && r[e].start < a; e += 1)
              l.push({ start: Math.max(t, r[e].start) - t, end: Math.min(a, r[e].end) - t })
            l.length > 0 && n.set(e, l)
          }
          return n
        },
        Zf: r,
        nI: d,
      },
    )
  },
  dIFK(e, t, a) {
    a.d(t, { I8: () => x, Wv: () => f, $t: () => h })
    var n = a("ABep"),
      l = a("QosV")
    let o = (0, a("ESTr").a)({
      name: "magnifying-glass-md-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 3.080811, y: 3.080078, width: 13.394966, height: 13.421875 },
        visualBounds: { x: 3.080811, y: 3.080078, width: 13.394966, height: 13.421875 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.080811, y: 3.080078, width: 13.394966, height: 13.421875 },
        center: { x: 9.778294, y: 9.791016 },
        insets: { top: 3.080078, right: 3.524223, bottom: 3.498047, left: 3.080811 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.778294, y: 9.791016 },
          foreground: { x: 9.778294, y: 9.791016 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M8.74585 3.08008C11.8745 3.08008 14.4109 5.61642 14.4109 8.74512C14.4109 10.0762 13.9499 11.2987 13.1814 12.2656L16.281 15.3662C16.5407 15.6259 16.5407 16.0469 16.281 16.3066C16.0213 16.5662 15.6002 16.5663 15.3406 16.3066L12.2371 13.2041C11.2748 13.9586 10.0635 14.4102 8.74585 14.4102C5.61716 14.4102 3.08081 11.8738 3.08081 8.74512C3.08081 5.61642 5.61716 3.08008 8.74585 3.08008ZM8.74585 4.41016C6.3517 4.41016 4.41089 6.35096 4.41089 8.74512C4.41089 11.1393 6.3517 13.0801 8.74585 13.0801C11.14 13.0801 13.0808 11.1393 13.0808 8.74512C13.0808 6.35096 11.14 4.41016 8.74585 4.41016Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var i = a("zd8w"),
      r = a("Wf1j"),
      s = a("oyxz"),
      d = a("Sm6l"),
      c = a("HOLv"),
      u = a("bVeK"),
      p = a("okCa"),
      m = a("pU4O"),
      g = a("j9wQ")
    function h(e) {
      let t,
        a,
        u,
        m,
        h,
        f,
        x,
        v,
        y,
        b = (0, l.c)(35),
        { standalone: w, onHideComments: _, title: I, closeLabel: k, quote: S, search: j } = e,
        C = void 0 !== w && w,
        A = (0, r.A)(),
        M = (0, i.useId)(),
        T = (0, i.useRef)(null),
        P = (0, i.useRef)(null),
        [E, N] = (0, i.useState)(null != j && "" !== j.query),
        U = null != j && (E || "" !== j.query)
      b[0] !== j
        ? ((t = (e) => {
            ;(j?.onChange(e),
              T.current
                ?.closest("[data-page-comment-rail]")
                ?.querySelector("[data-page-comment-sidebar-scroll]")
                ?.scrollTo({ top: 0, behavior: "instant" }))
          }),
          (b[0] = j),
          (b[1] = t))
        : (t = b[1])
      let O = t
      b[2] !== O
        ? ((a = () => {
            ;(O(""), N(!1), P.current?.focus({ preventScroll: !0 }))
          }),
          (b[2] = O),
          (b[3] = a))
        : (a = b[3])
      let D = a
      return (
        b[4] !== I
          ? ((u = I ?? (0, n.jsx)(s.A, { id: "codex.space.page.comments.sidebarHeading", defaultMessage: "Comments" })),
            (b[4] = I),
            (b[5] = u))
          : (u = b[5]),
        b[6] !== k || b[7] !== A
          ? ((m =
              k ?? A.formatMessage({ id: "codex.space.page.comments.closeSidebar", defaultMessage: "Close comments" })),
            (b[6] = k),
            (b[7] = A),
            (b[8] = m))
          : (m = b[8]),
        b[9] !== D || b[10] !== A || b[11] !== j || b[12] !== M || b[13] !== U
          ? ((h =
              null != j &&
              (0, n.jsx)(d.$, {
                ref: P,
                "aria-label": A.formatMessage({
                  id: "codex.space.page.comments.toggleSearch",
                  defaultMessage: "Search comments",
                }),
                "aria-expanded": U,
                "aria-controls": U ? M : void 0,
                color: "ghost",
                radius: "full",
                size: "toolbar",
                uniform: !0,
                onClick: () => {
                  U ? D() : N(!0)
                },
                children: (0, n.jsx)(c.I, { asset: o }),
              })),
            (b[9] = D),
            (b[10] = A),
            (b[11] = j),
            (b[12] = M),
            (b[13] = U),
            (b[14] = h))
          : (h = b[14]),
        b[15] !== _ || b[16] !== u || b[17] !== m || b[18] !== h
          ? ((f = (0, n.jsx)(g.xx, { title: u, closeLabel: m, onClose: _, actions: h })),
            (b[15] = _),
            (b[16] = u),
            (b[17] = m),
            (b[18] = h),
            (b[19] = f))
          : (f = b[19]),
        b[20] !== O || b[21] !== D || b[22] !== A || b[23] !== j || b[24] !== E || b[25] !== M || b[26] !== U
          ? ((x =
              null != j &&
              U &&
              (0, n.jsx)("div", {
                className: "px-3 pb-3",
                role: "search",
                onKeyDown: (e) => {
                  "Escape" !== e.key ||
                    e.nativeEvent.isComposing ||
                    (e.preventDefault(),
                    e.stopPropagation(),
                    "" !== j.query ? (N(!0), O(""), T.current?.focus({ preventScroll: !0 })) : D())
                },
                children: (0, n.jsx)(p.s, {
                  id: M,
                  inputRef: T,
                  inputRole: "searchbox",
                  autoFocus: E,
                  variant: "sidebar-header",
                  label: A.formatMessage({
                    id: "codex.space.page.comments.searchLabel",
                    defaultMessage: "Search comments",
                  }),
                  placeholder: A.formatMessage({
                    id: "codex.space.page.comments.searchPlaceholder",
                    defaultMessage: "Search comments",
                  }),
                  searchQuery: j.query,
                  onSearchQueryChange: O,
                }),
              })),
            (b[20] = O),
            (b[21] = D),
            (b[22] = A),
            (b[23] = j),
            (b[24] = E),
            (b[25] = M),
            (b[26] = U),
            (b[27] = x))
          : (x = b[27]),
        b[28] !== S || b[29] !== C
          ? ((v =
              C &&
              S &&
              (0, n.jsx)("div", {
                className: "flex flex-col gap-2 p-3",
                children: (0, n.jsx)("blockquote", {
                  className: "border-s-2 border-border ps-3 break-words whitespace-pre-wrap text-secondary",
                  children: (0, n.jsx)("p", { className: "line-clamp-3", children: S }),
                }),
              })),
            (b[28] = S),
            (b[29] = C),
            (b[30] = v))
          : (v = b[30]),
        b[31] !== f || b[32] !== x || b[33] !== v
          ? ((y = (0, n.jsx)("div", {
              className: "sticky top-0 z-10",
              "data-page-comments-controls": !0,
              children: (0, n.jsxs)("div", { children: [f, x, v] }),
            })),
            (b[31] = f),
            (b[32] = x),
            (b[33] = v),
            (b[34] = y))
          : (y = b[34]),
        y
      )
    }
    function f(e) {
      let t,
        a,
        o,
        i,
        r,
        d = (0, l.c)(17),
        { searching: c, hasResolvedComments: p, action: g, emptyDescription: h } = e,
        f = void 0 !== c && c
      if (void 0 !== p && p && !f) {
        let e, t, a
        return (
          d[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(m.r, { className: "mx-auto mb-3 block size-7" })), (d[0] = e))
            : (e = d[0]),
          d[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)("h3", {
                className: "mb-1 text-[15px] leading-[1.45] font-medium text-default",
                children: (0, n.jsx)(s.A, {
                  id: "codex.space.page.comments.noActive",
                  defaultMessage: "No active comments",
                }),
              })),
              (d[1] = t))
            : (t = d[1]),
          d[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, n.jsxs)("div", {
                role: "status",
                className: "px-4 py-8 text-center text-secondary",
                children: [
                  e,
                  t,
                  (0, n.jsx)("p", {
                    className: "text-[13px] leading-[1.6]",
                    children: (0, n.jsx)(s.A, {
                      id: "codex.space.page.comments.noActiveDescription",
                      defaultMessage: "New comments will appear here.",
                    }),
                  }),
                ],
              })),
              (d[2] = a))
            : (a = d[2]),
          a
        )
      }
      ;(d[3] !== f ? ((t = f ? (0, n.jsx)(u.zcw, {}) : (0, n.jsx)(u.izo, {})), (d[3] = f), (d[4] = t)) : (t = d[4]),
        d[5] !== f
          ? ((a = (0, n.jsx)("p", {
              className: "text-base leading-4 font-medium",
              children: f
                ? (0, n.jsx)(s.A, {
                    id: "codex.space.page.comments.searchEmpty",
                    defaultMessage: "No matching comments",
                  })
                : (0, n.jsx)(s.A, { id: "codex.space.page.comments.empty", defaultMessage: "No comments yet" }),
            })),
            (d[5] = f),
            (d[6] = a))
          : (a = d[6]),
        d[7] !== h || d[8] !== f
          ? ((o =
              (f || null != h) &&
              (0, n.jsx)("p", {
                className: "text-base leading-5",
                children: f
                  ? (0, n.jsx)(s.A, {
                      id: "codex.space.page.comments.searchEmptyDescription",
                      defaultMessage: "Try a different word or name",
                    })
                  : h,
              })),
            (d[7] = h),
            (d[8] = f),
            (d[9] = o))
          : (o = d[9]),
        d[10] !== a || d[11] !== o
          ? ((i = (0, n.jsxs)("div", { className: "flex flex-col gap-2", children: [a, o] })),
            (d[10] = a),
            (d[11] = o),
            (d[12] = i))
          : (i = d[12]))
      let x = !f && g
      return (
        d[13] !== t || d[14] !== i || d[15] !== x
          ? ((r = (0, n.jsxs)("div", {
              className: "flex flex-col items-center gap-4 px-8 pt-40 text-center text-secondary select-none",
              children: [t, i, x],
            })),
            (d[13] = t),
            (d[14] = i),
            (d[15] = x),
            (d[16] = r))
          : (r = d[16]),
        r
      )
    }
    function x(e) {
      let t,
        a,
        o = (0, l.c)(4),
        { disabled: i, onClick: r } = e
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(s.A, { id: "codex.space.page.comments.addCommentAction", defaultMessage: "Add comment" })),
            (o[0] = t))
          : (t = o[0]),
        o[1] !== i || o[2] !== r
          ? ((a = (0, n.jsx)(d.$, {
              color: "outline",
              size: "dialog",
              "data-page-add-comment": !0,
              disabled: i,
              onMouseDown: v,
              onClick: r,
              children: t,
            })),
            (o[1] = i),
            (o[2] = r),
            (o[3] = a))
          : (a = o[3]),
        a
      )
    }
    function v(e) {
      return e.preventDefault()
    }
  },
  fKDu(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("on57")
    a.d(
      t,
      {},
      {
        G: function (e) {
          let t,
            a,
            i,
            r,
            s,
            d,
            c,
            u,
            p = (0, l.c)(17)
          p[0] !== e
            ? (({ children: t, borderless: i, unstyled: r, inPanel: s, selected: d, ...a } = e),
              (p[0] = e),
              (p[1] = t),
              (p[2] = a),
              (p[3] = i),
              (p[4] = r),
              (p[5] = s),
              (p[6] = d))
            : ((t = p[1]), (a = p[2]), (i = p[3]), (r = p[4]), (s = p[5]), (d = p[6]))
          let m = void 0 !== i && i,
            g = void 0 !== r && r,
            h = void 0 !== s && s,
            f = void 0 !== d && d,
            x = !g && "rounded-xl",
            v = !g && !h && "bg-surface-elevated",
            y =
              !g &&
              h &&
              (f
                ? "bg-background-secondary-soft"
                : "in-data-[page-comment-rail=docked]:hover:bg-background-secondary-soft/50"),
            b = !g && !m && "ring-1 ring-inset ring-border hover:ring-[1.5px]"
          p[7] !== x || p[8] !== v || p[9] !== y || p[10] !== b
            ? ((c = (0, o.A)(
                "page-comment-typography group @container/comment-card relative min-w-0 text-default in-data-[comment-layout=floating]:p-3",
                x,
                v,
                y,
                b,
              )),
              (p[7] = x),
              (p[8] = v),
              (p[9] = y),
              (p[10] = b),
              (p[11] = c))
            : (c = p[11])
          let w = f ? "" : void 0
          return (
            p[12] !== t || p[13] !== a || p[14] !== w || p[15] !== c
              ? ((u = (0, n.jsx)("div", {
                  ...a,
                  className: c,
                  "data-page-comment-card": !0,
                  "data-page-comment-selected": w,
                  children: t,
                })),
                (p[12] = t),
                (p[13] = a),
                (p[14] = w),
                (p[15] = c),
                (p[16] = u))
              : (u = p[16]),
            u
          )
        },
      },
    )
  },
  mvYr(e, t, a) {
    var n = a("Oe5x")
    function l(e, t, a = (t) => (0, n.bl)(e[t].body).taskMentions) {
      let o
      if (null != t && "" !== t) {
        for (let [n, l] of e.entries())
          if (null == l.deletedAt && "agent" !== l.authorType && l.author.id === t)
            for (let e of a(n))
              e.owner !== t ||
                null != e.orbit ||
                e.mainChat ||
                (null == o || (null == o.mention.threadId && null != e.threadId)
                  ? (o = { mention: e, statusMentionId: e.id })
                  : null != o.mention.threadId && (o.statusMentionId = e.id))
        return o
      }
    }
    a.d(
      t,
      {},
      {
        W: function (e, t) {
          let a = e.map((e) => (0, n.bl)(e.body).taskMentions),
            o = l(e, t, (e) => a[e]),
            i = new Map(),
            r = e.length
          for (let t = e.length - 1; t >= 0; t--) {
            let n = e[t],
              l = a[t].filter((e) => null == e.orbit && !e.mainChat)
            for (let e of l) {
              let t = i.get(e.owner)
              ;(null != t && null != o && e.id === o.mention.id && (o.hasReply = !0),
                null != t && (r = Math.min(r, t)),
                i.delete(e.owner))
            }
            "agent" !== n.authorType ||
              "o" === n.agent_kind ||
              l.some((e) => e.owner === n.author.id) ||
              i.has(n.author.id) ||
              i.set(n.author.id, t)
          }
          return { sideChat: o, firstReplyIndex: r }
        },
        _: l,
      },
    )
  },
  zFEE(e, t, a) {
    var n = a("qmMi"),
      l = a("DBCl"),
      o = a("Bl6U"),
      i = a("JVTP"),
      r = a("Ow2S"),
      s = a("u4MG"),
      d = a("OOaz"),
      c = a("MrGp"),
      u = a("a6kU"),
      p = a("OWtl")
    let m = (0, n.i1)(p.u, ({ conversationId: e, origin: t }, { get: a }) => {
        let n = t ?? a(c.uh, e),
          l = a(c.zn, e),
          { composerSelectionContext: o } = a(i.kb, {
            context: {
              conversationId: e,
              conversationOrigin: n,
              gizmoId: l,
              useMergedPicker: a(i.nH, { conversationId: e, conversationOrigin: n, gizmoId: l }),
              hasModelGizmoOverride: null != l,
              hasSavedModelGizmoOverride: null != l,
              hasGizmoOverride: null != l && !(0, s.w7)(l),
              hasRequiredSystemHints: !1,
              requiredSystemHints: void 0,
              isTemporaryChat: !1,
              readOnly: !1,
            },
            systemHints: a(r.yS, e),
          })
        return a(i.F7, { context: o, premiumChatServerId: void 0 }).workLimitReached
      }),
      g = (0, n.i1)(p.u, (e, { get: t }) => {
        if ("chatgpt" !== e.backend) {
          let a = null == e.threadId ? null : (0, l.JXB)(e.threadId)
          return !!t(u.o, t(o.qX, a))
        }
        let a = null == e.threadId ? e.draftId : (0, d.q3)(e.threadId)
        return null != a && t(m, { conversationId: a, origin: "tpp" })
      })
    a.d(t, {}, { F: m, V: g })
  },
  Bnhy(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("on57"),
      i = a("oyxz"),
      r = a("wq58"),
      s = a("yhbb")
    let d = new WeakMap()
    function c(e) {
      if (null == e) return
      let t = [e.closest("[data-page-comment-messages]"), e.closest("[data-page-comment-task-status]")]
      for (let e of t) null != e && (d.set(e, (d.get(e) ?? 0) + 1), e.setAttribute("data-page-comment-working", ""))
      return () => {
        for (let e of t)
          if (null != e) {
            let t = (d.get(e) ?? 1) - 1
            0 === t ? (d.delete(e), e.removeAttribute("data-page-comment-working")) : d.set(e, t)
          }
      }
    }
    a.d(
      t,
      {},
      {
        _: function (e) {
          let t,
            a,
            d,
            u,
            p = (0, l.c)(14),
            { avatar: m, layout: g } = e
          p[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)("span", {
                className:
                  "loading-shimmer-pure-text select-none [--loading-shimmer-base:var(--color-text-secondary)] [--loading-shimmer-highlight:var(--color-text-tertiary)] motion-reduce:animate-none",
                children: (0, n.jsx)(i.A, { id: "codex.page.taskMention.working", defaultMessage: "Working\u2026" }),
              })),
              (p[0] = t))
            : (t = p[0])
          let h = t
          if ("reply" === (void 0 === g ? "inline" : g)) {
            let e, t
            return (
              p[1] !== m
                ? ((e = m ?? (0, n.jsx)(r.A, { "aria-hidden": !0, className: "size-6 text-secondary" })),
                  (p[1] = m),
                  (p[2] = e))
                : (e = p[2]),
              p[3] !== e
                ? ((t = (0, n.jsx)(s.K, {
                    role: "status",
                    ref: c,
                    "data-page-comment-working-reply": !0,
                    avatar: e,
                    header: null,
                    hasConnector: !1,
                    hasPrevious: !0,
                    children: h,
                  })),
                  (p[3] = e),
                  (p[4] = t))
                : (t = p[4]),
              t
            )
          }
          let f = null != m ? c : void 0,
            x = null != m || void 0,
            v = null == m ? "gap-2" : "gap-2.5 in-data-[comment-layout=floating]:gap-2"
          return (
            p[5] !== v
              ? ((a = (0, o.A)("inline-flex items-center text-secondary", v)), (p[5] = v), (p[6] = a))
              : (a = p[6]),
            p[7] !== m
              ? ((d = m ?? (0, n.jsx)(r.A, { "aria-hidden": !0, className: "size-5 shrink-0" })),
                (p[7] = m),
                (p[8] = d))
              : (d = p[8]),
            p[9] !== f || p[10] !== x || p[11] !== a || p[12] !== d
              ? ((u = (0, n.jsxs)("span", {
                  role: "status",
                  ref: f,
                  "data-page-comment-working-reply": x,
                  className: a,
                  children: [d, h],
                })),
                (p[9] = f),
                (p[10] = x),
                (p[11] = a),
                (p[12] = d),
                (p[13] = u))
              : (u = p[13]),
            u
          )
        },
      },
    )
  },
  UM8J(e, t, a) {
    var n = a("SOEF"),
      l = a("SZCv"),
      o = a.n(l),
      i = a("DBCl"),
      r = a("YWcr"),
      s = a("fEVS")
    let d = []
    a.d(
      t,
      {},
      {
        K: function (e, t, a) {
          let l,
            d = e.field("document"),
            c = d.getSnapshot(),
            u = t.getSnapshot(),
            p = []
          return {
            getSnapshot: () => {
              let e = d.getSnapshot(),
                m = t.getSnapshot(),
                g = a.getViewerAccountUserId()
              if (e === c && m === u && g === l) return p
              ;((c = e), (u = m), (l = g))
              let h = new Map(),
                f = (e) => {
                  null != g &&
                    e.owner === g &&
                    null == e.orbit &&
                    "chatgpt" !== e.backend &&
                    (null == e.hostId || "local" === e.hostId) &&
                    null != e.threadId &&
                    h.get(e.threadId)?.source !== "mention" &&
                    h.set(e.threadId, { conversationId: (0, i.JXB)(e.threadId), title: "", source: "mention" })
                }
              for (let t of (e?.descendants((e) => {
                let t = (0, n.W2V)(e.attrs.lang)
                for (let a of (t?.threadId == null ||
                  h.has(t.threadId) ||
                  h.set(t.threadId, { conversationId: (0, i.JXB)(t.threadId), title: e.textContent, source: "link" }),
                [
                  e.attrs.path,
                  ...e.marks
                    .filter((e) => "link" === e.type.name)
                    .map((e) => ("string" == typeof e.attrs.href ? e.attrs.href : void 0)),
                ])) {
                  if ("string" != typeof a) continue
                  let t = (0, r.tP)(a)
                  if (t?.hostId != null && "local" !== t.hostId) continue
                  let n = t?.threadId ?? (0, i.cCV)(a)?.conversationId
                  null == n ||
                    h.has(n) ||
                    h.set(n, {
                      conversationId: n,
                      title: e.textContent || e.attrs.displayName || e.attrs.label || "",
                      source: "link",
                    })
                }
              }),
              m))
                for (let e of t.messages) null == e.deletedAt && (0, s.FD)(e.body).forEach(f)
              let x = [...h.values()]
              return (o()(p, x) || (p = x), p)
            },
            subscribe: (e) => {
              let n = [d.subscribe(e), t.subscribe(e), a.subscribe(e)]
              return () => n.forEach((e) => e())
            },
          }
        },
        o: { getSnapshot: () => d, subscribe: () => () => {} },
      },
    )
  },
  ZYZU(e, t, a) {
    var n = a("SZCv"),
      l = a.n(n),
      o = a("E8Sp"),
      i = a("Ow2S"),
      r = a("MrGp"),
      s = a("rPIX"),
      d = a("uqiN"),
      c = a("n8vi"),
      u = a("rpnz"),
      p = a("qPPq"),
      m = a("kUgk"),
      g = a("tv8P"),
      h = a("xXff"),
      f = a("vYWt")
    function x(e, t, a, n) {
      let { pageId: x, accountId: v } = t,
        y = e.get(g.spacePageId$, x),
        b = (0, u.sD)(y),
        w = e.get(g.spacePageEditorId$, x),
        _ = (0, m.getRetainedPageRealtimeSession)(e, w) ?? (0, m.getRetainedPageRealtimeSession)(e, y)
      if (
        null == t.mode ||
        null == _ ||
        !e.get(f.sY) ||
        e.get(d.qh) ||
        e.get(g.spaceAccountId$) !== v ||
        _.isAccessRevoked ||
        !_.getSnapshot().canWrite
      ) {
        if (b) throw new p.cS("unavailable")
        return (e.get(f.vF, x)?.phase === "complete" && e.set(f.zn, null), n(y))
      }
      let I = _.getDocumentProjection(),
        k = "create" === t.mode && "" === I.title.trim() && (0, h.d)(I) ? "create" : "edit",
        S = b ? e.get(s.Mg) : null,
        j = {
          pageId: x,
          accountId: v,
          conversationId: a,
          draftSession: S?.conversationId === a ? S : void 0,
          startedAt: Date.now(),
          mode: k,
          phase: "thinking",
        }
      e.set(f.zn, j)
      let C = _.getLiveRevision(),
        A = _.subscribe(() => {
          if ("thinking" !== j.phase || e.get(f.zn) !== j) return
          let { lastAgentEdit: t, viewerAccountUserId: a } = _.getSnapshot()
          if (null == t || t.revision <= C || null == t.accountUserId || t.accountUserId !== a || "o" === t.agentKind)
            return
          let n = _.getDocumentProjection()
          ;(n.title === I.title && n.markdown === I.markdown && l()(n.units, I.units)) ||
            ((j = { ...j, phase: "editing" }), e.set(f.zn, j))
        }),
        M = e.get(o.gM),
        T = (e) => {
          let t = e.get(o.gM)
          return (
            e.get(f.zn) === j &&
            e.get(f.sY) &&
            e.get(g.spaceAccountId$) === v &&
            (t === M || t.pathname === `/space/${e.get(g.spacePageId$, x)}` || t.pathname === `/space/${w}`)
          )
        },
        P = !1
      return (e
        .when((e) => {
          let t = (0, r.QN)(e.get(r.F1, a))
          return ((P = P || t), !T(e) || (P && !t) || null != e.get(i.Hy, a))
        })
        .then(() => {
          ;(A(), e.get(f.zn) === j && e.set(f.zn, T(e) && "editing" === j.phase ? { ...j, phase: "complete" } : null))
        }),
      b)
        ? (0, c.$)(e, x, AbortSignal.timeout(3e4))
            .then((t) => {
              if (!T(e) || (0, u.sD)(t)) throw new p.cS("changed")
              return n(t, k)
            })
            .catch((t) => {
              throw (e.get(f.zn) === j && e.set(f.zn, null), t)
            })
        : n(y, k)
    }
    a.d(t, { IZ: () => x, sY: () => f.sY, vF: () => f.vF })
  },
  Ob1U(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("qmMi"),
      i = a("zd8w"),
      r = a("Ywss"),
      s = a("E8Sp"),
      d = a("dJBt"),
      c = a("OWtl"),
      u = a("tv8P"),
      p = a("hEJC"),
      m = a("N8b3"),
      g = a("PzpM")
    let h = (0, o.i1)(c.u, ({ pageId: e, spaceId: t }, { get: a }) => {
      if (null == t) return a(u.spacePageCreation$, e)
      let n = a(m.Yn, t)
      if (n?.response != null)
        return {
          localPageId: n.localPageId,
          serverPageId: n.response.root_page_id,
          status: "created",
          unlistedMetadata: null,
          metrics: n.metrics,
        }
    })
    function f() {
      return !0
    }
    function x(e) {
      let t,
        a,
        r,
        u,
        p,
        m,
        f,
        x,
        y = (0, l.c)(26),
        { pageId: b, ready: w, spaceId: _, uiReady: I } = e,
        k = (0, o.gh)(c.u)
      y[0] !== b || y[1] !== _ ? ((t = { pageId: b, spaceId: _ }), (y[0] = b), (y[1] = _), (y[2] = t)) : (t = y[2])
      let S = (0, o._U)(h, t),
        j = S?.emptyDraft
      ;(y[3] !== j
        ? ((a = () => j?.retain()), (r = [j]), (y[3] = j), (y[4] = a), (y[5] = r))
        : ((a = y[4]), (r = y[5])),
        (0, i.useLayoutEffect)(a, r))
      let C = null == _ || S?.metrics?.documentType === "space" ? S?.metrics : void 0
      return (y[6] !== C || y[7] !== b || y[8] !== k || y[9] !== _
        ? ((u = () => {
            if (null == C) return
            let e = k.get(s.gM).pathname,
              t = C.observeEditor(null == _ ? "editor" : "content")
            return () => {
              ;(t(),
                queueMicrotask(() => {
                  let t = k.get(s.gM).pathname
                  if (null == e || null == t || t === e) return
                  let a = k.get(h, { pageId: b, spaceId: _ }),
                    n = k.get(g.z$).find((e) => e.localPageId === a?.localPageId)
                  v(t, a, n, _)
                    ? C.retainObservation(
                        k.watch((e) => {
                          let { get: t } = e,
                            a = t(s.gM).pathname,
                            n = t(h, { pageId: b, spaceId: _ }),
                            l = t(g.z$).find((e) => e.localPageId === n?.localPageId)
                          ;(null != a && v(a, n, l, _)) || C.observationLost()
                        }),
                      )
                    : C.observationLost()
                }))
            }
          }),
          (p = [C, b, _, k]),
          (y[6] = C),
          (y[7] = b),
          (y[8] = k),
          (y[9] = _),
          (y[10] = u),
          (y[11] = p))
        : ((u = y[10]), (p = y[11])),
      (0, i.useLayoutEffect)(u, p),
      null == S || null == C)
        ? null
        : (y[12] !== S || y[13] !== C || y[14] !== _ || y[15] !== I
            ? ((m =
                null != I &&
                ("space" !== C.documentType || null != _) &&
                (0, n.jsx)(
                  d.X,
                  {
                    requireVisibleAtPaint: !0,
                    onPaint: () => {
                      I() && C.uiReady()
                    },
                  },
                  `ui:${S.localPageId}`,
                )),
              (y[12] = S),
              (y[13] = C),
              (y[14] = _),
              (y[15] = I),
              (y[16] = m))
            : (m = y[16]),
          y[17] !== S || y[18] !== C || y[19] !== b || y[20] !== w || y[21] !== _
            ? ((f =
                w &&
                (null != _ || null != S.serverPageId) &&
                (0, n.jsx)(
                  d.X,
                  { requireVisibleAtPaint: !0, onPaint: () => C.paintOpportunity(null == _ ? void 0 : b) },
                  S.localPageId,
                )),
              (y[17] = S),
              (y[18] = C),
              (y[19] = b),
              (y[20] = w),
              (y[21] = _),
              (y[22] = f))
            : (f = y[22]),
          y[23] !== m || y[24] !== f
            ? ((x = (0, n.jsxs)(n.Fragment, { children: [m, f] })), (y[23] = m), (y[24] = f), (y[25] = x))
            : (x = y[25]),
          x)
    }
    function v(e, t, a, n) {
      let l = (0, p.uv)(e)
      if (null != l)
        return new Set([t?.localPageId, t?.serverPageId ?? t?.pendingServerPageId, a?.space?.rootPageId]).has(l)
      let o = (0, r.B6)("/spaces/:spaceId", e)?.params.spaceId,
        i = new Set([null == t ? void 0 : n, a?.space?.spaceId])
      return null != o && i.has(o)
    }
    a.d(
      t,
      {},
      {
        F: function (e) {
          let t,
            a = (0, l.c)(4),
            { pageId: o, ready: i, uiReady: r } = e
          return (
            a[0] !== o || a[1] !== i || a[2] !== r
              ? ((t = (0, n.jsx)(x, { pageId: o, ready: i, uiReady: r })),
                (a[0] = o),
                (a[1] = i),
                (a[2] = r),
                (a[3] = t))
              : (t = a[3]),
            t
          )
        },
        O: function (e) {
          let t,
            a = (0, l.c)(5),
            { pageId: o, ready: i, spaceId: r, uiReady: s } = e,
            d = (void 0 === s ? i : s) ? f : void 0
          return (
            a[0] !== o || a[1] !== i || a[2] !== r || a[3] !== d
              ? ((t = (0, n.jsx)(x, { pageId: o, ready: i, spaceId: r, uiReady: d })),
                (a[0] = o),
                (a[1] = i),
                (a[2] = r),
                (a[3] = d),
                (a[4] = t))
              : (t = a[4]),
            t
          )
        },
      },
    )
  },
  N8b3(e, t, a) {
    a.d(t, { Yn: () => j, TA: () => C, WT: () => A })
    var n = a("qmMi"),
      l = a("DBCl"),
      o = a("PFjh"),
      i = a("E8Sp"),
      r = a("SPnB"),
      s = a("SGsN"),
      d = a("svjy"),
      c = a("mNPx"),
      u = a("e1xH"),
      p = a("BkKO"),
      m = a("tv8P"),
      g = a("yGJW"),
      h = a("H2L8"),
      f = a("OWtl"),
      x = a("kK7d"),
      v = a("eShZ"),
      y = a("NRR1"),
      b = a("jGsJ"),
      w = a("OoIX"),
      _ = a("HNZf"),
      I = a("D550"),
      k = a("PzpM")
    let S = (0, n.bD)(f.u, (e) => void 0),
      j = (0, n.i1)(f.u, (e, { get: t }) => {
        let a = t(S, e)
        return a?.accountId === t(m.spaceAccountId$) && a?.userId === t(r.chatGptAuthenticatedUserId$) ? a : void 0
      }),
      C = (0, n.un)(f.u, ({ get: e }) =>
        e(k.z$).flatMap((t) => {
          let a = e(j, t.localPageId)
          return a?.response != null && "error" !== a.status
            ? []
            : [
                {
                  id: t.localPageId,
                  name: t.name,
                  title: t.name,
                  backingType: t.backingType,
                  serverSpaceId: t.space?.spaceId,
                  status: a?.status ?? "error",
                },
              ]
        }),
      )
    function A(e, { name: t, createSpace: n, invitations: f = [], appearance: C, resume: M }) {
      let T,
        P,
        E = e.get(m.spaceAccountId$),
        N = e.get(r.chatGptAuthenticatedUserId$),
        U = e.get(r.o8)
      if (null == E) throw Error("space_account_unavailable")
      if (null != M && (M.accountId !== E || M.userId !== N || null == M.space)) throw Error("space_setup_unavailable")
      let O = e.get(r.PO).accountUserId,
        D = M?.localPageId ?? `local-page-${crypto.randomUUID()}`
      null == M &&
        (0, k.Bz)(e, {
          accountId: E,
          userId: N,
          localPageId: D,
          name: t,
          backingType: "drive",
          rootInitialization: "server",
          appearance: C,
          invitations: f.map((e) => ({ ...e, status: "pending" })),
        })
      let R = (0, I.a)((0, o.dj)(e), performance.now(), "space", { surface: "electron", emit: (t) => (0, b.V)(e, t) }),
        L = M?.space,
        z = !1,
        q = new AbortController(),
        B = () => e.get(k.z$).find((e) => e.localPageId === D),
        $ = (a) => {
          let n = { localPageId: D, accountId: E, userId: N, name: t, status: a, response: T, metrics: R, retry: F }
          ;(e.set(S, D, n), null != T && e.set(S, T.id, n))
        },
        F = () => {
          if (null != P) return P
          if (z || q.signal.aborted || null == B())
            return Promise.reject(new DOMException("Space creation cancelled", "AbortError"))
          let o = (0, m.watchSpaceAccount)(e, E, N, O, U),
            f = AbortSignal.any([q.signal, o.signal]),
            b = e.watch(({ get: e }) => {
              e(k.z$).some((e) => e.localPageId === D) || q.abort()
            }),
            I = async () => {
              f.throwIfAborted()
              try {
                let a
                ;(null == L
                  ? ((a = await n(f)), R.creationRequestSucceeded())
                  : (a = await e
                      .get(m.createSpaceMutation$)
                      .mutateAsync({ requestBody: { name: t }, existingSpace: L, signal: f })),
                  f.throwIfAborted(),
                  (T = a),
                  (L = { spaceId: a.id, rootPageId: a.root_page_id }),
                  R.savedIdentity())
              } catch (a) {
                if (
                  (f.throwIfAborted(),
                  null != L &&
                    a instanceof v.FetchError &&
                    ((404 === a.status && "space_not_found" === a.errorCode) || 410 === a.status) &&
                    (await (async function (e, t) {
                      let a,
                        n = new Set()
                      for (;;) {
                        t.throwIfAborted()
                        let l = await x.CodexRequest.safeGet("/spaces/v2", {
                          parameters: { query: { status: "archived", limit: 50, cursor: a } },
                          signal: t,
                        })
                        if (
                          (t.throwIfAborted(),
                          l.items.some(
                            (t) => t.id === e.spaceId && t.root_page_id === e.rootPageId && null != t.deleted_at,
                          ))
                        )
                          return !0
                        if (null == (a = l.next_cursor ?? void 0) || n.has(a)) return !1
                        n.add(a)
                      }
                    })(L, f)))
                ) {
                  ;(f.throwIfAborted(),
                    b(),
                    R.cancel("creation_unavailable"),
                    (0, m.evictCachedDriveSpacePages)(e, L.spaceId, E),
                    (0, k.pu)(e, D),
                    e.set(S, D, void 0),
                    e.get(j, L.spaceId)?.localPageId === D && e.set(S, L.spaceId, void 0),
                    e
                      .get(s.Id)
                      .info(
                        e
                          .get(d.g)
                          .formatMessage({
                            id: "space.teamHome.setupUnavailable",
                            defaultMessage: "This space is no longer available",
                            description: "Shown when an unfinished Space can no longer be opened.",
                          }),
                      ))
                  return
                }
                L = (0, m.pendingSpaceInitialization)(a) ?? L
                let t = B()
                throw (
                  null != L
                    ? (R.savedIdentity(), null != t && (0, k.$q)(e, { ...t, space: L }))
                    : (a instanceof v.FetchError &&
                        a.status >= 400 &&
                        a.status < 500 &&
                        ![408, 499].includes(a.status)) ||
                      (z = !0),
                  R.fail((0, w.XY)(a)),
                  a
                )
              }
              let o = B(),
                i = null != o && !0 !== o.rootInitialized && "server" !== o.rootInitialization
              ;(null != o && (0, k.$q)(e, { ...o, space: L, rootInitialized: !i }),
                (0, m.cacheCreatedSpace)(e, E, T),
                e.query.setData(m.spaceQuery$, T.id, T),
                i || R.rootInitialized(T.root_page_id),
                await e.when(
                  ({ get: e }) =>
                    f.aborted ||
                    !e(k.z$).some((e) => e.localPageId === D) ||
                    e(m.spaceAccountId$) !== E ||
                    e(r.chatGptAuthenticatedUserId$) !== N ||
                    (void 0 !== O && e(y.jv) !== O) ||
                    e(y.$M) !== U ||
                    !e(u.pagesEnabled$) ||
                    e(p.LM)?.some((e) => e.id === T?.id) === !0,
                ),
                f.throwIfAborted(),
                $("creating"))
              let c = B()?.appearance,
                g = (0, l._R3)(c?.emoji),
                I = null == g ? null : { kind: "icon", value: g, color: (0, h.sj)(c?.theme) ?? "black" }
              if (i || null != I) {
                let { completeSpaceRootSetup: t } = await Promise.all([a.e(753405), a.e(193172), a.e(708398)]).then(
                  a.bind(a, "PluF"),
                )
                f.throwIfAborted()
                let n = await t(e, T, I, i, f)
                ;(f.throwIfAborted(),
                  (T = {
                    ...(e.query.getData(m.spaceQuery$, T.id) ?? T),
                    symbol: n,
                    can_edit_appearance: null == n && T.can_edit_appearance,
                  }),
                  e.query.setData(m.spaceQuery$, T.id, T),
                  (0, m.cacheCreatedSpace)(e, E, T))
                let l = B()
                ;(null != l && (0, k.$q)(e, { ...l, rootInitialized: !0 }), i && R.rootInitialized(T.root_page_id))
              }
              if (null == I && null != c && !0 === T.can_edit_appearance) {
                let t = await x.CodexRequest.safePatch("/spaces/v2/{space_id}/appearance", {
                  parameters: { path: { space_id: T.id } },
                  requestBody: c,
                  signal: f,
                })
                ;(f.throwIfAborted(),
                  (T = { ...(e.query.getData(m.spaceQuery$, T.id) ?? T), appearance: t }),
                  e.query.setData(m.spaceQuery$, T.id, T),
                  (0, m.cacheCreatedSpace)(e, E, T))
              }
              let C = B()
              null != C && (0, k.$q)(e, { ...C, appearance: void 0 })
              let A = B()?.invitations ?? [],
                M = A.filter((e) => "shared" !== e.status)
              if (M.length > 0) {
                let t = await (async function (e, t, a, n, o) {
                  if ((n.throwIfAborted(), 0 === a.length)) return []
                  let i = { type: "space", id: t },
                    s = a.map(({ recipient: e, label: t, secondaryLabel: a, roleId: n }) => ({
                      action: "invite",
                      target: i,
                      recipient: e,
                      roleId: n,
                      invitee: { id: (0, _.hk)(e), label: t, secondaryLabel: a },
                    })),
                    d = new Map(),
                    c = new Set(),
                    u = (e) => {
                      if (n.aborted || c.has(e)) return
                      c.add(e)
                      let t = s.indexOf(e)
                      o?.(t, d.get(e) ?? a[t].recipient)
                    },
                    p = []
                  if (
                    (await e.queryClient
                      .getMutationCache()
                      .build(e.queryClient, {
                        mutationKey: [
                          "space",
                          "save-library-sharing",
                          e.get(r.chatGptAuthenticatedUserId$),
                          e.get(m.spaceAccountId$),
                        ],
                        networkMode: "always",
                        mutationFn: async ({ changes: t }) => {
                          ;(n.throwIfAborted(),
                            await (0, _.X5)(
                              e,
                              t,
                              void 0,
                              void 0,
                              n,
                              (e, t) => d.set(e, t.recipient),
                              (e, t) => {
                                p.push(
                                  t.then(
                                    () => u(e),
                                    () => void 0,
                                  ),
                                )
                              },
                              (e, t) => {
                                ;(d.set(e, t.recipient), u(e))
                              },
                            ))
                        },
                      })
                      .execute({ changes: s }),
                    await (0, l._qC)(Promise.all(p), n),
                    n.throwIfAborted(),
                    c.size < s.length)
                  )
                    try {
                      let t = await (0, _.gv)(e, i, n, !0)
                      ;(n.throwIfAborted(),
                        (0, _.TO)(t) &&
                          s.forEach((e, n) => {
                            let l = d.get(e) ?? a[n].recipient
                            t.shares.some((e) => (0, _.je)(e, l) && e.role_id === a[n].roleId) && u(e)
                          }))
                    } catch {
                      n.throwIfAborted()
                    }
                  return a.map((e, t) => {
                    let a = d.get(s[t]) ?? e.recipient
                    return { ...e, recipient: a, status: c.has(s[t]) ? "shared" : "failed" }
                  })
                })(e, T.id, M, f, (t, a) => {
                  if (f.aborted) return
                  let n = B()
                  if (null != n) {
                    let l = A.indexOf(M[t])
                    ;(0, k.$q)(e, {
                      ...n,
                      invitations: n.invitations.map((e, t) =>
                        t === l ? { ...e, recipient: a, status: "shared" } : e,
                      ),
                    })
                  }
                })
                f.throwIfAborted()
                let a = B()
                if (
                  (null != a && (0, k.$q)(e, { ...a, invitations: [...A.filter((e) => "shared" === e.status), ...t] }),
                  t.some((e) => "failed" === e.status))
                )
                  throw Error("space_creation_invitations_incomplete")
              }
              ;(b(), (0, k.FT)(e, D), $("created"))
            }
          return (
            $("creating"),
            (P = Promise.resolve()
              .then(() =>
                null == navigator.locks
                  ? I()
                  : navigator.locks.request(`space-setup:${JSON.stringify([E, N, D])}`, { signal: f }, I),
              )
              .catch((t) => {
                if (f.aborted)
                  throw (
                    q.abort(),
                    e.set(S, D, void 0),
                    null != T && e.set(S, T.id, void 0),
                    R.cancel(o.signal.aborted ? "account_changed" : "explicit_cancel"),
                    t
                  )
                throw (
                  z ? e.set(S, D, void 0) : $("error"),
                  (0, w.XY)(t) || (0, c.ZD)(e.get(g.YV), "pages.space.create", t),
                  R.fail(),
                  (() => {
                    let { pathname: t, search: a } = e.get(i.gM)
                    e.get(m.spaceAccountId$) === E &&
                      e.get(r.chatGptAuthenticatedUserId$) === N &&
                      ("/spaces/new" !== t || new URLSearchParams(a).get("creation") !== D) &&
                      e
                        .get(s.Id)
                        .warning(
                          e
                            .get(d.g)
                            .formatMessage({
                              id: "codex.space.sidebar.spaceSetupNeedsAttention",
                              defaultMessage: "Space setup needs attention",
                              description:
                                "Toast displayed when a shared Space setup needs retry or recovery. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                            }),
                        )
                  })(),
                  t
                )
              })
              .finally(() => {
                ;(b(), o.stop(), (P = void 0))
              }))
          )
        }
      return (F().catch(() => {}), D)
    }
  },
  cJbq(e, t, a) {
    var n = a("WhP6"),
      l = a("d8ZM"),
      o = a("czKg"),
      i = a("rUQK"),
      r = a("GTmQ"),
      s = a("taWL"),
      d = a("AGyq"),
      c = a("H0zY"),
      u = a("Hpb6"),
      p = a("f6KK"),
      m = a("HLFh"),
      g = a("tO3J"),
      h = a("tezj"),
      f = a("WNpX"),
      x = a("Ph7x"),
      v = a("XvT2"),
      y = a("YS7P"),
      b = a("jOAm"),
      w = a("BdKm"),
      _ = a("MLlN")
    let I = [
      { id: "page.formatNumberedList", style: "orderedList" },
      { id: "page.formatBulletedList", style: "unorderedList" },
      { id: "page.formatChecklist", style: "checklist" },
    ]
    function k(e) {
      if (1 !== e.ranges.length) return null
      let { $from: t, $to: a } = e,
        n = t.blockRange(a, (e) => e.type.name === h.qx)
      if (null == n) return null
      let l = t.blockRange(a, (e) => "list" === e.type.name || "ordered_list" === e.type.name)
      if (null != l && l.depth > n.depth && (l.startIndex > 0 || l.endIndex < l.parent.childCount)) return l
      let o = t.blockRange(a, (e) => "blockquote" === e.type.name)
      return null != o && o.depth > n.depth
        ? o
        : t.nodeAfter?.type.name === "blockquote" && a.pos === t.pos + t.nodeAfter.nodeSize
          ? t.doc.resolve(t.pos + 1).blockRange(a.doc.resolve(a.pos - 1), (e) => "blockquote" === e.type.name)
          : t.blockRange(
              a,
              (e) => "list" !== e.type.name && "ordered_list" !== e.type.name && !e.type.isInGroup("list_item"),
            )
    }
    function S(e, t) {
      let a = e.steps.length
      if ((e.lift(t, t.depth - 1), 0 === t.startIndex || t.endIndex === t.parent.childCount)) return e
      let n = (0, x.Mc)(t.parent)
      if (null == n.props.key && null == n.listQuoteSplit) return e
      let l = e.mapping.slice(a).map(t.end, -1),
        o = e.doc.nodeAt(l)
      if (o?.type === t.parent.type) {
        let t = { ...n.props }
        ;(delete t.key, e.setNodeMarkup(l, null, { ...o.attrs, before: "", dilTemplate: (0, x.l4)("blockquote", t) }))
      }
      return e
    }
    function j(e, t) {
      let a,
        { state: d } = e,
        g = "nativeSelection" in t ? t : null,
        v = g?.nativeSelection,
        b = v instanceof p.U3 ? (0, l.E)(v.$from) : null,
        A =
          !e.isDestroyed &&
          g?.kind === "text" &&
          null != v &&
          v.$from.doc === d.doc &&
          null != b &&
          v.$to.depth >= b &&
          v.$from.before(b) === v.$to.before(b),
        M =
          !e.isDestroyed &&
          v instanceof p.U3 &&
          v.$from.doc === d.doc &&
          v.$from.sameParent(v.$to) &&
          (v.$from.parent.type === d.schema.nodes.paragraph || v.$from.parent.type === d.schema.nodes.heading) &&
          (0, f.X4)(v.$from),
        T = "nativeSelection" in t ? t.targets : t,
        P = A || M ? [] : (0, _.KR)(e, T, v ?? null)
      ;(A || M) &&
        d.doc.nodesBetween(v.from, v.to, (t, a) => {
          if (!t.isTextblock) return !0
          if (!v.empty && (v.from >= a + t.nodeSize - 1 || v.to <= a + 1)) return !1
          let n = (0, y.cY)(e, a)
          return (null != n && P.push({ node: t, from: a, element: n }), !1)
        })
      let E = [...P]
      if (0 === E.length && v?.empty && v.$from.parent.isTextblock) {
        let t = v.$from.before(),
          a = (0, y.cY)(e, t)
        null != a && E.push({ node: v.$from.parent, from: t, element: a })
      }
      let N = P[0],
        U =
          g?.kind === "blocks" ||
          T.length > 1 ||
          P.length > 1 ||
          (null != v && null != N && (v.from < N.from || v.to > N.from + N.node.nodeSize)),
        { blockquote: O, code_block: D } = d.schema.nodes,
        R = null == v || A ? null : k(v),
        L =
          R ??
          (null == v || A
            ? null
            : (function (e) {
                if (e.empty || !(e instanceof p.U3 || e instanceof p.i5)) return null
                let { $from: t, $to: a } = e instanceof p.i5 ? p.U3.between(e.$from, e.$to) : e,
                  { doc: n } = t,
                  l = t.blockRange(a, (e) => e === n || "blockquote" === e.type.name)
                if (null == l) return null
                let o = !1,
                  i = l.start
                for (let e = l.startIndex; e < l.endIndex; e += 1) {
                  let r = l.parent.child(e),
                    s = i + r.nodeSize
                  if ("ordered_list" === r.type.name) {
                    let e = p.U3.between(n.resolve(i + 1), n.resolve(s - 1))
                    if (t.pos > e.from || a.pos < e.to) return null
                    o = !0
                  } else if (!r.isTextblock) return null
                  i = s
                }
                return o ? l : null
              })(v)),
        z = (0, y.K0)(d) && C(d.doc, P, v, L),
        q = null != R && ("list" === R.parent.type.name || "ordered_list" === R.parent.type.name),
        B = L?.parent.type.name === "blockquote" || (q && R.$from.node(R.depth - 1).type === O),
        $ =
          q &&
          null != O &&
          (B ||
            R.$from.node(R.depth - 1).canReplaceWith(R.$from.index(R.depth - 1), R.$from.index(R.depth - 1) + 1, O)),
        F = null == L || null == O || B ? null : (0, m.oM)(L, O),
        K = null != L && B && (0, m.jP)(L) === L.depth - 1,
        G = !U && null != O && v?.$from.blockRange(v.$to)?.parent.type === O,
        Y = !U && v?.$from.parent.type === D
      a = B ? "quote" : null == v || U ? (0, _.yb)(d, P) : G ? "quote" : Y ? "code" : (0, o.On)(v)
      let W = (e) =>
          M && ("paragraph" === e || e.startsWith("heading") || "unorderedList" === e || "orderedList" === e),
        V = (t) => {
          let a = "code" === t ? E : P
          return (
            !e.isDestroyed &&
            e.state.doc === d.doc &&
            g?.kind !== "table" &&
            (!A ||
              "paragraph" === t ||
              "unorderedList" === t ||
              "orderedList" === t ||
              "checklist" === t ||
              "code" === t) &&
            (null == v || v.$from.doc === d.doc) &&
            ("checklist" !== t || null != d.schema.nodes.task_list_item) &&
            ("quote" !== t || (null != O && !z)) &&
            ("code" !== t || null != D) &&
            (null == v ||
              U ||
              "checklist" === t ||
              "quote" === t ||
              "code" === t ||
              W(t) ||
              i.DR.some((e) => e === t)) &&
            (("quote" === t && ($ || null != F || K)) ||
              ("paragraph" === t && B && (K || $)) ||
              (0 === a.length ? null != v && 0 === T.length : (0, _.Ar)(d, a, t)))
          )
        }
      return {
        activeStyle: a,
        canSelect: V,
        select(t, a = "set", l = "replace") {
          if (e.editable && !e.composing && V(t)) {
            if (null == v) {
              let n = 1 === T.length ? T[0] : null
              if (n?.node.type === d.schema.nodes.regular_list_item && ("orderedList" === t || "unorderedList" === t)) {
                let a = d.doc.resolve(n.from),
                  l = a.parent,
                  o = "orderedList" === t ? d.schema.nodes.ordered_list : d.schema.nodes.list
                if (l.content.content.every((e) => e.type === n.node.type) && o.validContent(l.content)) {
                  ;(l.type !== o && e.dispatch((0, r._B)(d.tr.setNodeMarkup(a.before(), o, l.attrs).scrollIntoView())),
                    e.focus())
                  return
                }
              }
              1 === P.length ? (0, _.rZ)(e, P[0], t) : (0, _.od)(e, P, t, a, null)
              return
            }
            if (
              (e.state.selection.eq(v) || e.dispatch(e.state.tr.setSelection(v)),
              null != L && ("quote" === t || (B && "paragraph" === t && "replace" === l)))
            ) {
              let n = (t) => {
                e.dispatch((null == R ? (0, r._B)(t) : t.setMeta(h.ue, !0)).scrollIntoView())
              }
              if (q) {
                if ($ && (!B || "paragraph" === t || "toggle" === a)) {
                  let t = (function (e, t, a, n) {
                    let l = t.parent,
                      o = e.tr,
                      i = (0, x.Mc)(l)
                    for (let [e, a] of [
                      [t.endIndex, t.end],
                      [t.startIndex, t.start],
                    ]) {
                      if (0 === e || e === l.childCount) continue
                      let t = { ...i.props }
                      delete t.key
                      let n = {
                          ...l.attrs,
                          before: "",
                          ...("ordered_list" === l.type.name
                            ? { startingNumber: (l.attrs.startingNumber ?? 1) + e }
                            : {}),
                          dilTemplate: (0, x.l4)("list", t),
                        },
                        r = [{ type: l.type, attrs: n }]
                      if (!(0, m.zy)(o.doc, a, 1, r)) return null
                      o.split(a, 1, r)
                    }
                    let r = o.doc.resolve(o.mapping.map(t.start, 1)),
                      s = r.before(t.depth),
                      d = new u.u$(o.doc.resolve(s), o.doc.resolve(s + r.node(t.depth).nodeSize), t.depth - 1)
                    if (n) return (0, m.jP)(d) !== d.depth - 1 ? null : S(o, d)
                    let c = {
                        ...(0, x.l4)("blockquote"),
                        listQuoteSplit: {
                          before: t.startIndex > 0 ? (0, x.Xb)(d.$from.nodeBefore) : null,
                          after: t.endIndex < l.childCount ? (0, x.Xb)(d.$to.nodeAfter) : null,
                        },
                      },
                      p = (0, m.oM)(d, a, { dilTemplate: c })
                    return null == p ? null : o.wrap(d, p)
                  })(e.state, R, O, B)
                  null != t && n(t)
                }
              } else if (B) {
                if (("paragraph" === t || "toggle" === a) && K) {
                  if (null == R) {
                    ;(n(e.state.tr.lift(L, L.depth - 1)), e.focus())
                    return
                  }
                  let t = S(e.state.tr, R),
                    a = (0, x.Mc)(R.parent).listQuoteSplit
                  if (null != a) {
                    let e = t.mapping.map(R.start, -1),
                      n = t.doc.nodeAt(e)
                    if (null != n) {
                      let l = e + n.nodeSize
                      ;(null != a.after &&
                        (0, x.Xb)(t.doc.resolve(l).nodeAfter) === a.after &&
                        (0, m.n9)(t.doc, l) &&
                        t.join(l),
                        null != a.before &&
                          (0, x.Xb)(t.doc.resolve(e).nodeBefore) === a.before &&
                          (0, m.n9)(t.doc, e) &&
                          t.join(e))
                    }
                  }
                  n(t)
                }
              } else null != F && n(e.state.tr.wrap(L, F))
              e.focus()
              return
            }
            if (
              U ||
              W(t) ||
              "code" === t ||
              (t.startsWith("heading") &&
                v.$from.parent.content.content.some((e) => e.type === d.schema.linebreakReplacement))
            ) {
              if (0 === P.length && v instanceof p.U3 && v.empty) {
                let t = v.$from.before(),
                  a = (0, y.cY)(e, t)
                null != a && P.push({ node: v.$from.parent, from: t, element: a })
              }
              ;(0, _.od)(e, "code" === t ? E : P, t, a)
            } else if ("quote" === t) G || (0, c.Im)(O)(e.state, e.dispatch)
            else {
              if (G && "replace" === l && ((0, c.yY)(e.state, e.dispatch), I.some((e) => e.style === t)))
                return void j(e, (0, w.B0)(e)).select(t, a, "preserve")
              if ("checklist" === t) "toggle" === a ? (0, n.Vu)(e) : (0, n.XY)(e)
              else {
                let a = i.DR.find((e) => e === t)
                null != a && (0, s.NQ)(e, a)
              }
            }
            e.focus()
          }
        },
      }
    }
    function C(e, t, a, n) {
      let l = new Set(t.filter(({ node: e }) => (0, b.Ih)(e)).map(({ from: e }) => e))
      if (
        (a?.empty && 1 === a.$from.depth && (0, b.Ih)(a.$from.parent) && l.add(a.$from.before()),
        0 === l.size && n?.depth !== 0)
      )
        return !1
      let { media: o, membership: i } = (0, v.Z)(e)
      return o.some(({ from: e, id: t }) => i.has(t) && (l.has(e) || (n?.depth === 0 && e >= n.start && e < n.end)))
    }
    function A(e, t) {
      e.isDestroyed || j(e, (0, w.B0)(e)).select(t, "toggle", "preserve")
    }
    a.d(
      t,
      {},
      {
        VN: A,
        cW: I,
        py: (e, t, a) => {
          if (!a?.editable) return !1
          let { $from: n, $to: l } = e.selection
          if ((0, y.K0)(e) && C(e.doc, [], void 0, n.blockRange(l))) return !0
          if (null == k(e.selection)) return !1
          let o = j(a, (0, w.B0)(a))
          return !!o.canSelect("quote") && (o.select("quote", "toggle"), !0)
        },
        rg: j,
        wI: function (e = (e) => (0, d.ad)({ commandId: e })) {
          return new p.k_({
            props: {
              handleKeyDown: (t, a) => {
                if (!t.editable || t.composing || a.isComposing) return !1
                for (let { id: n, style: l } of I) if (e(n).some((e) => (0, g.eg)(a, e))) return (A(t, l), !0)
                return !1
              },
            },
          })
        },
      },
    )
  },
  MLlN(e, t, a) {
    var n = a("o98b"),
      l = a("GTmQ"),
      o = a("f6KK"),
      i = a("HLFh"),
      r = a("fXhT"),
      s = a("WNpX"),
      d = a("Ph7x"),
      c = a("iUJ1"),
      u = a("wBb7"),
      p = a("tINb"),
      m = a("YS7P"),
      g = a("OIHP"),
      h = a("Uguk")
    let f = { heading1: 1, heading2: 2, heading3: 3, heading4: 4, heading5: 5, heading6: 6 }
    function x(e, t, a) {
      if (!t.every((t) => (0, u.Qx)(e, t))) return []
      let n = [],
        l = a?.empty === !1 ? a.ranges : null
      for (let a of t)
        !(function t(a, o) {
          let i = o + a.nodeSize
          if (null != l && !l.some(({ $from: e, $to: t }) => e.pos < i - 1 && t.pos > o + 1)) return
          let r = (0, h.s)(a) || "callout" === a.type.name,
            s = null == l || l.some(({ $from: e, $to: t }) => e.pos <= o + 1 && t.pos >= i - 1)
          if (a.isTextblock || (r && s && a.content.content.every((e) => e.isTextblock))) {
            let t = (0, m.cY)(e, o)
            null != t && n.push({ node: a, from: o, element: t })
          } else (r || "list" === a.type.name || "ordered_list" === a.type.name) && a.forEach((e, a) => t(e, o + 1 + a))
        })(a.node, a.from)
      return n
    }
    function v(e, t) {
      switch (t.node.type.name) {
        case "paragraph": {
          let a = e.doc.resolve(t.from),
            n = (0, h.O)(a)
          if (0 === a.index() && n?.node.type.isInGroup("list_item")) {
            if ("task_list_item" === n.node.type.name) return "checklist"
            return "ordered_list" === a.node(a.depth - 1).type.name ? "orderedList" : "unorderedList"
          }
          if (n?.node.type.name === "blockquote") return "quote"
          if ("callout" === a.parent.type.name) return "callout"
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
    function y(e, t, a) {
      if ("callout" === a && "callout" !== v(e, t) && ((0, c.o)(e.doc.resolve(t.from)) || (0, c.v)(t.node))) return !1
      let n = I(e.schema, a),
        l = e.schema.linebreakReplacement,
        o = null != l && !!n.contentMatch.matchType(l)
      return k(t).every(({ node: e }) => {
        let t = !0
        return (
          e.forEach((i) => {
            ;(n.contentMatch.matchType(i.type) ||
              (i.type === l && ("pre" === n.whitespace || null != f[a])) ||
              (t = !1),
              "pre" === e.type.whitespace &&
                "pre" !== n.whitespace &&
                !o &&
                i.isText &&
                /[\r\n]/.test(i.text ?? "") &&
                (t = !1))
          }),
          t
        )
      })
    }
    function b(e, t, a) {
      let n = [...t].sort((e, t) => e.from - t.from)
      return (
        n.length > 0 &&
        n.every((t, l) => {
          let o = n[l - 1]
          return (
            t.from >= 0 &&
            t.from < e.doc.content.size &&
            e.doc.nodeAt(t.from) === t.node &&
            (null == o || o.from + o.node.nodeSize <= t.from) &&
            null != v(e, t) &&
            y(e, t, a)
          )
        })
      )
    }
    function w(e, t, a, l = null) {
      let s = e.doc,
        d = s.type.schema,
        c = e.mapping.maps.length,
        u = s.resolve(t.from),
        p = (0, h.O)(u),
        m = p?.node.type.isInGroup("list_item") && (!t.node.isTextblock || 0 === u.index()) ? p : null,
        g = !t.node.isTextblock || null != m || p?.node.type.name === "blockquote" || "callout" === u.parent.type.name,
        x = k(t),
        v = x[0]
      if (null == v) return !1
      let y = o.U3.create(s, v.from + 1, v.from + 1 + v.node.content.size)
      e.setSelection(y)
      let b = null,
        j = (0, r.zo)(t.node.attrs.pageLayout)
      "orderedList" === a
        ? (b = d.nodes.ordered_list)
        : ("unorderedList" === a || "checklist" === a) && (b = d.nodes.list)
      let C = o.U3.between(s.resolve(t.from + 1), s.resolve(t.from + t.node.nodeSize - 1)).getBookmark()
      if (null != m && null != b) {
        let t = s.resolve(m.from),
          n = t.parent
        if (n.type !== b) {
          let a = t.index() + 1
          ;(a < n.childCount &&
            e.split(m.from + m.node.nodeSize, 1, [
              {
                type: n.type,
                attrs:
                  n.type === d.nodes.ordered_list
                    ? { ...n.attrs, startingNumber: n.attrs.startingNumber + a }
                    : n.attrs,
              },
            ]),
            t.index() > 0 && e.split(m.from))
        }
        let l = e.mapping.slice(c).map(m.from)
        ;(e.setNodeMarkup(
          l,
          "checklist" === a ? d.nodes.task_list_item : d.nodes.regular_list_item,
          "checklist" === a ? { ...m.node.attrs, checked: !1 } : m.node.attrs,
        ),
          n.type !== b && e.setNodeMarkup(e.doc.resolve(l).before(), b, n.attrs))
      } else {
        if (g) {
          let n = m ?? t,
            l = s.resolve(n.from + 1).blockRange(s.resolve(n.from + n.node.nodeSize - 1)),
            o = null == l ? null : (0, i.jP)(l)
          if (null == l || null == o) return !1
          e.lift(l, o)
          let r = s.resolve(n.from)
          if (r.parent.type === d.nodes.ordered_list && r.index() + 1 < r.parent.childCount) {
            let t = e.doc.resolve(e.mapping.slice(c).map(n.from + n.node.nodeSize + 1)),
              l = t.depth - 1
            e.setNodeMarkup(t.before(l), void 0, {
              ...t.node(l).attrs,
              startingNumber: null == f[a] ? r.parent.attrs.startingNumber + r.index() + 1 : 1,
            })
          }
        }
        for (let { node: t, from: n } of x) {
          let o = e.mapping.slice(c).map(n + 1),
            i = f[a]
          null != i && t.content.content.some((e) => e.type === d.linebreakReplacement)
            ? S(e, e.doc.resolve(o).before(), i, l?.map(e.doc, e.mapping.slice(c)) ?? null)
            : _(e, o, I(d, a), { ...t.attrs, pageLayout: j, level: i })
        }
        if (null != b || "quote" === a || "callout" === a) {
          e.setSelection(C.map(e.mapping.slice(c)).resolve(e.doc))
          let t = e.selection.$from.blockRange(e.selection.$to)
          if (null == t) return !1
          if (null != b) {
            if (!(0, n.d)(e, t, b, { pageLayout: j })) return !1
          } else {
            let n = (0, i.oM)(t, d.nodes["callout" === a ? "callout" : "blockquote"], { pageLayout: j })
            if (null == n) return !1
            e.wrap(t, n)
          }
          if ("checklist" === a)
            for (let { from: t } of x) {
              let a = e.doc.resolve(e.mapping.slice(c).map(t + 1)),
                n = a.depth - 1
              e.setNodeMarkup(a.before(n), d.nodes.task_list_item, a.node(n).attrs)
            }
        }
      }
      return (e.setSelection(o.U3.create(e.doc, y.map(e.doc, e.mapping.slice(c)).to)), !0)
    }
    function _(e, t, a, n) {
      let l = n
      ;(null != n.dilTemplate &&
        ("heading" === a.name || "paragraph" === a.name) &&
        (0, s.X4)(e.doc.resolve(t)) &&
        (l = { ...n, dilTemplate: (0, d.Mc)(a.create(n)) }),
        e.setBlockType(t, t, a, l))
    }
    function I(e, t) {
      return null != f[t] ? e.nodes.heading : e.nodes["code" === t ? "code_block" : "paragraph"]
    }
    function k(e) {
      if (e.node.isTextblock) return [{ node: e.node, from: e.from }]
      let t = []
      return (
        e.node.forEach((a, n) => {
          a.isTextblock && t.push({ node: a, from: e.from + 1 + n })
        }),
        t
      )
    }
    function S(e, t, a, n) {
      let l = e.doc.nodeAt(t)
      if (null == l || !l.isTextblock) return
      let o = []
      l.forEach((e, a) => {
        e.type === l.type.schema.linebreakReplacement && o.push(t + 1 + a)
      })
      let i = [t + 1, ...o.map((e) => e + 1)],
        r = [...o, t + 1 + l.content.size],
        s = i.filter((e, t) => {
          let a = r[t]
          return (
            null == n ||
            n.ranges.some(({ $from: t, $to: l }) =>
              n.empty ? t.pos >= e && t.pos <= a : (t.pos < a || (e === a && t.pos === e)) && l.pos > e,
            )
          )
        }),
        d = o.filter((e, t) => s.includes(i[t]) || s.includes(i[t + 1])),
        c = e.mapping.maps.length
      for (let t of d.reverse()) e.delete(t, t + 1).split(t)
      for (let t of s) {
        let n = e.mapping.slice(c).map(t)
        _(e, n, l.type.schema.nodes.heading, { ...l.attrs, level: a })
      }
    }
    a.d(
      t,
      {},
      {
        Ar: b,
        KR: x,
        cO: S,
        od: function (e, t, a, n = "set", r = e.state.selection) {
          if (!e.editable || !t.every((t) => (0, u.Qx)(e, t))) return
          let s = r?.empty === !1 ? x(e, t, r) : t
          if (!b(e.state, s, a)) return
          let { state: d } = e,
            c = d.tr,
            m =
              "toggle" === n &&
              s.every(
                (e) =>
                  v(d, e) === a &&
                  ("checklist" !== a || (e.node.attrs.checked ?? d.doc.resolve(e.from).parent.attrs.checked) === !1),
              )
                ? "paragraph"
                : a,
            h = new Set(s.flatMap(k).map(({ from: e }) => e)),
            y = "orderedList" === m || "unorderedList" === m || "checklist" === m,
            _ = "callout" === m ? (0, p.zk)(d) : [],
            I = s.flatMap((e) => {
              let t = d.doc.resolve(e.from),
                a = e.node.isTextblock && t.depth > 0,
                n = "callout" === e.node.type.name ? { node: e.node, from: e.from } : null
              null == n && "callout" === t.parent.type.name && (n = { node: t.parent, from: t.before() })
              let l = !_.some(({ from: t, to: a }) => t < e.from + e.node.nodeSize && a > e.from)
              if (null != n) {
                let { node: e, from: t } = n
                e.forEach((e, a) => {
                  ;(e.isTextblock && h.has(t + 1 + a)) || (l = !1)
                })
              }
              return k(e).flatMap(({ node: e, from: t }) => {
                let n = [t + 1]
                return (
                  null != f[m] &&
                    d.selection instanceof g.p &&
                    e.forEach((e, a) => {
                      e.type === d.schema.linebreakReplacement && n.push(t + a + 2)
                    }),
                  n.map((e) => ({ position: e, granular: a, canJoinCallout: l }))
                )
              })
            })
          if ("callout" !== m && r?.empty === !1) {
            let e = new Set()
            for (let t of s) {
              let a = d.doc.resolve(t.from)
              for (let t = a.depth; t > 0; t -= 1) {
                if ("callout" !== a.node(t).type.name) continue
                let n = a.start(t),
                  l = a.end(t),
                  i = o.U3.between(d.doc.resolve(n), d.doc.resolve(l))
                r.ranges.some(({ $from: e, $to: t }) => e.pos <= i.from && t.pos >= i.to) && e.add(n)
              }
            }
            for (let t of [...e].sort((e, t) => t - e)) {
              let e = c.doc.resolve(c.mapping.map(t)),
                a = e.blockRange(c.doc.resolve(e.end())),
                n = null == a ? null : (0, i.jP)(a)
              if (null == a || null == n) return
              c.lift(a, n)
            }
          }
          for (let e of [...s].sort((e, t) => e.from - t.from)) {
            let t = d.doc.resolve(e.from)
            if (
              (y && e.node.isTextblock && t.parent.type.isInGroup("list_item") && t.index() > 0 && h.has(t.start())) ||
              (v(d, e) === m &&
                !(
                  "toggle" === n &&
                  "checklist" === m &&
                  (e.node.attrs.checked ?? d.doc.resolve(e.from).parent.attrs.checked)
                ))
            )
              continue
            let a = k(e)[0]
            if (null == a) return
            let l = c.doc.resolve(c.mapping.map(a.from + 1)),
              i = l.depth
            for (; i > 0 && l.node(i) !== e.node;) i -= 1
            if (0 === i || !w(c, { ...e, from: l.before(i) }, m, r instanceof o.U3 ? r.map(c.doc, c.mapping) : null))
              return
          }
          if ("code" === m && h.size > 1) {
            let e = new Set([...h].map((e) => c.doc.resolve(c.mapping.map(e + 1)).before()))
            for (let t of [...e].sort((e, t) => t - e)) {
              let a = c.doc.resolve(t).nodeBefore
              null != a &&
                e.has(t - a.nodeSize) &&
                a.type === d.schema.nodes.code_block &&
                c.doc.nodeAt(t)?.type === a.type &&
                (0, i.n9)(c.doc, t) &&
                (c.join(t), c.insert(t - 1, d.schema.text("\n")))
            }
          }
          if (c.docChanged && (y || "callout" === m)) {
            let e = new Set()
            for (let { position: t, canJoinCallout: a } of I) {
              if ("callout" === m && !a) continue
              let n = c.doc.resolve(c.mapping.map(t))
              for (let t = n.depth - 1; t > 0; t -= 1) {
                if ("callout" === m && "callout" === n.node(t).type.name) {
                  e.add(n.before(t))
                  break
                }
                if ("callout" !== m && n.node(t).type.isInGroup("list_item")) {
                  e.add(n.before(t - 1))
                  break
                }
              }
            }
            for (let t of [...e].sort((e, t) => t - e)) {
              let a = c.doc.nodeAt(t),
                n = c.doc.resolve(t).nodeBefore,
                l = null == n ? null : t - n.nodeSize
              null != l &&
                null != a &&
                e.has(l) &&
                n?.attrs.pageLayout === a.attrs.pageLayout &&
                ("callout" !== m || (null != n && (0, p.FJ)(n).sameMarkup((0, p.FJ)(a)))) &&
                (0, i.n9)(c.doc, t) &&
                c.join(t)
            }
          }
          if (!c.docChanged) return void e.focus()
          if (d.selection instanceof g.p) {
            let e = I.map(({ position: e, granular: t }) => {
              let a = c.doc.resolve(c.mapping.map(e))
              if (t) return a.before()
              for (let e = a.depth; e > 0; e -= 1) {
                let t = a.node(e)
                if (
                  ("quote" === m && "blockquote" === t.type.name) ||
                  ("callout" === m && "callout" === t.type.name) ||
                  (("orderedList" === m || "unorderedList" === m || "checklist" === m) && t.type.isInGroup("list_item"))
                )
                  return a.before(e)
              }
              return a.before()
            })
            ;(r instanceof g.p &&
              d.doc.nodesBetween(r.from, r.to, (t, a) => {
                if (!t.isBlock) return !1
                let n = c.mapping.map(a)
                return (
                  !(
                    c.doc.nodeAt(n) === t &&
                    r.ranges.some(({ $from: e, $to: n }) => e.pos <= a && n.pos >= a + t.nodeSize)
                  ) || (e.push(n), !1)
                )
              }),
              c.setSelection(g.p.create(c.doc, e)))
          } else
            c.setSelection(
              d.selection.empty && null == r && null == f[m]
                ? o.LN.near(c.doc.resolve(c.mapping.map(I[0].position)))
                : d.selection.map(c.doc, c.mapping),
            )
          ;(null != e.state.storedMarks && c.ensureMarks(e.state.storedMarks),
            e.dispatch((0, l._B)(c.scrollIntoView())),
            e.focus())
        },
        rZ: function (e, t, a) {
          if (!e.editable || !(0, u.Qx)(e, t)) return
          let n = v(e.state, t)
          if (null == n || n === a || !y(e.state, t, a)) return
          let o = e.state.tr
          w(o, t, a) &&
            (null != e.state.storedMarks && o.ensureMarks(e.state.storedMarks),
            e.dispatch((0, l._B)(o.scrollIntoView())),
            e.focus())
        },
        yb: function (e, t) {
          let a = t[0]
          if (null == a) return null
          let n = v(e, a)
          return t.every((t) => v(e, t) === n) ? n : null
        },
      },
    )
  },
  Ek4q(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("Wf1j"),
      i = a("GKsW")
    a.d(
      t,
      {},
      {
        O: function (e) {
          let t,
            a,
            r,
            s,
            d = (0, l.c)(9),
            { title: c } = e,
            u = (0, o.A)()
          if (null == c) return null
          if (d[0] !== u || d[1] !== c) {
            let e = c.replace(/[\r\n]+/g, " ").trim()
            ;((t = i.Q),
              (a = e || null),
              (r = e
                ? u.formatMessage(
                    { id: "codex.space.page.documentTitle", defaultMessage: "{title} - ChatGPT" },
                    { title: e },
                  )
                : u.formatMessage({ id: "codex.space.page.emptyDocumentTitle", defaultMessage: "ChatGPT" })),
              (d[0] = u),
              (d[1] = c),
              (d[2] = t),
              (d[3] = a),
              (d[4] = r))
          } else ((t = d[2]), (a = d[3]), (r = d[4]))
          return (
            d[5] !== t || d[6] !== a || d[7] !== r
              ? ((s = (0, n.jsx)(t, { nativeTitle: a, title: r })), (d[5] = t), (d[6] = a), (d[7] = r), (d[8] = s))
              : (s = d[8]),
            s
          )
        },
      },
    )
  },
  iUJ1(e, t, a) {
    a.d(
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
  SPCP(e, t, a) {
    a.d(t, { h: () => ee })
    var n = a("ABep"),
      l = a("QosV"),
      o = a("qmMi"),
      i = a("eFn4"),
      r = a("DBCl"),
      s = a("zd8w"),
      d = a("oyxz"),
      c = a("SPnB"),
      u = a("rPIX"),
      p = a("Sm6l"),
      m = a("Bbed"),
      g = a("ttIa"),
      h = a("uqiN"),
      f = a("gcWI"),
      x = a("sdM0"),
      v = a("ZYZU"),
      y = a("rpnz"),
      b = a("OFpX"),
      w = a("l8d7"),
      _ = a("OWtl"),
      I = a("tSEg"),
      k = a("OMIV"),
      S = a("JtEZ"),
      j = a("Wf1j"),
      C = a("SZCv"),
      A = a.n(C),
      M = a("KW2R"),
      T = a("OOaz"),
      P = a("oUDT"),
      E = a("CKur"),
      N = a("MrGp"),
      U = a("J3Mi")
    let O = (0, o.i1)(
      _.u,
      (e, { get: t }) => {
        if (null == e) return { hasPendingInput: !1, pendingInputKey: null, isAvailable: !1, isActive: !1 }
        let a = t(E.chatGptConversationQueryById$, e)
        t(M.h)
        let n = t(N.Jv, e),
          l = t(N.F1, e),
          o = (0, N.QN)(l),
          i = null == n ? a.data : { current_node: t(N.Od, e), mapping: n, conversation_origin: t(N.uh, e) },
          r = (null == i ? [] : (0, P.hd)(i, { isStreaming: o })).flatMap(({ turn: e }) =>
            e.items.flatMap((e) =>
              ("chatgpt-reasoning-group" === e.type ? e.items : [e]).flatMap((e) =>
                "chatgpt-tool-approval" === e.type && e.request?.type !== "preview" ? [e.messageId] : [],
              ),
            ),
          ),
          s = t(U.T4, e),
          d = [...r, ...(null == s ? [] : [s.messageId])],
          c = d.length > 0
        return {
          hasPendingInput: c,
          pendingInputKey: c ? JSON.stringify(d) : null,
          isAvailable: null != i,
          isActive: o,
        }
      },
      { isEqual: A() },
    )
    var D = a("IGL9")
    let R = (0, o.i1)(
        _.u,
        (e, { get: t }) => {
          let a = t(D.$T, e)
          return {
            status: a.status,
            tasks: a.tasks.map((e) => {
              let a = e.lastRun?.status === "in_progress",
                n = t(O, null == e.conversationId ? null : (0, T.q3)(e.conversationId), {
                  enabled: e.lastRun?.status === "in_progress" || e.needsAttention || "unavailable" === e.status,
                }),
                l = e.needsAttention && !n.isAvailable,
                o = n.hasPendingInput || l,
                i = a || n.isActive
              return { ...e, ...n, requiresInput: o, isRunActive: i || o, isRunning: !o && i }
            }),
          }
        },
        { autoDispose: !0, isEqual: A() },
      ),
      L = (0, o.bD)(
        _.u,
        (e) => [],
        {
          isEqual: A(),
          onMount: (e, t) =>
            t.watch(({ get: a }) => {
              let n
              if (a(D.Wq) !== t.key.identity) return
              let l = a(R, t.key.pageId)
              if ("unavailable" === l.status) return
              let o = new Set()
              e((e) => {
                let t = l.tasks.map((t) => {
                  let a = e.find((e) => e.automationId === t.automationId),
                    n = !t.isAvailable,
                    l = a?.attentionSnapshotKey ?? null,
                    i =
                      null != t.conversationId && null != t.lastPublishedRunAt
                        ? JSON.stringify([t.conversationId, t.lastPublishedRunAt])
                        : null
                  return (
                    "error" !== t.status &&
                      "loading" !== t.status &&
                      (l =
                        t.needsAttention && null != t.conversationId
                          ? JSON.stringify([t.conversationId, t.lastRun?.id, t.lastRun?.updated_at])
                          : null),
                    null != t.conversationId &&
                      ((null != l && l !== a?.attentionSnapshotKey) ||
                        (null != a && null != i && i !== a.publishedRunKey)) &&
                      o.add((0, T.q3)(t.conversationId)),
                    {
                      automationId: t.automationId,
                      pendingInputKey: n ? (a?.pendingInputKey ?? null) : t.pendingInputKey,
                      attentionSnapshotKey: l,
                      publishedRunKey: i,
                    }
                  )
                })
                "ready" !== l.status && t.push(...e.filter((e) => !t.some((t) => t.automationId === e.automationId)))
                let a = t.find((t) => {
                  let a = e.find((e) => e.automationId === t.automationId)
                  return null != t.pendingInputKey && t.pendingInputKey !== a?.pendingInputKey
                })
                return ((n = a?.automationId), t)
              })
              let i = l.tasks.find((e) => e.automationId === n)
              for (let e of (i?.conversationId != null &&
                (0, h.gP)(t, t.key.pageId, {
                  kind: "chatgpt",
                  conversationId: (0, T.q3)(i.conversationId),
                  title: i.title,
                }),
              o))
                (0, M.refetchChatGptConversation)(t, e, "explicit_update")
            }),
        },
        { autoDispose: !0 },
      )
    var z = a("UM8J"),
      q = a("sJSq"),
      B = a("U7BX"),
      $ = a("p66p"),
      F = a("tv8P"),
      K = a("V3rO"),
      G = a("eviP"),
      Y = a("bIvi")
    function W(e) {
      let t,
        a,
        n,
        i,
        d,
        c,
        p,
        m,
        g,
        x,
        v,
        b,
        w,
        _,
        k = (0, l.c)(78),
        {
          accountId: S,
          disableSubmit: C,
          documentType: A,
          enabled: M,
          getAdditionalUserContext: T,
          pageId: P,
          namespace: E,
          sourceId: N,
          title: U,
          taskLinks: O,
          savedChat: R,
          preserveSavedChat: W,
        } = e,
        V = void 0 === O ? z.o : O,
        H = void 0 !== W && W,
        X = (0, o.gh)(I.GD),
        Q = (0, s.useSyncExternalStore)(V.subscribe, V.getSnapshot, z.o.getSnapshot),
        J = (0, j.A)(),
        Z = null != (0, o.Ul)(G.q),
        ee = (0, o.Ul)($.Mr)
      k[0] !== P ? ((t = (0, y.sD)(P)), (k[0] = P), (k[1] = t)) : (t = k[1])
      let et = t,
        ea = M && (!et || (Z && ee?.accountId === S && ee.pageId === P))
      k[2] !== P || k[3] !== U ? ((a = U?.trim() || P), (k[2] = P), (k[3] = U), (k[4] = a)) : (a = k[4])
      let en = a
      k[5] !== en ? ((n = () => en), (k[5] = en), (k[6] = n)) : (n = k[6])
      let el = (0, Y.K)(n)
      k[7] !== T ? ((i = (e) => T?.(e)), (k[7] = T), (k[8] = i)) : (i = k[8])
      let eo = (0, Y.K)(i),
        ei = (0, s.useRef)(null)
      ;(k[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = () => () => {
            ;(ei.current?.(), (ei.current = null))
          }),
          (k[9] = d))
        : (d = k[9]),
        k[10] !== S || k[11] !== ea || k[12] !== P || k[13] !== X || k[14] !== N
          ? ((c = [S, ea, P, X, N]), (k[10] = S), (k[11] = ea), (k[12] = P), (k[13] = X), (k[14] = N), (k[15] = c))
          : (c = k[15]),
        (0, s.useLayoutEffect)(d, c),
        k[16] !== A || k[17] !== J || k[18] !== E
          ? ("meeting_notes" === E
              ? (p = J.formatMessage({
                  id: "codex.page.chat.meetingPlaceholder",
                  defaultMessage: "Ask about this meeting\u2026",
                }))
              : null != A &&
                (p = J.formatMessage(
                  {
                    id: "codex.page.chat.nativePlaceholder",
                    defaultMessage:
                      "Work with this {documentType, select, granola_whiteboard {canvas} granola_workbook {sheet} granola_presentation {slide} other {doc}}\u2026",
                  },
                  { documentType: A },
                )),
            (k[16] = A),
            (k[17] = J),
            (k[18] = E),
            (k[19] = p))
          : (p = k[19]),
        k[20] !== S ||
        k[21] !== ea ||
        k[22] !== p ||
        k[23] !== C ||
        k[24] !== A ||
        k[25] !== el ||
        k[26] !== Q ||
        k[27] !== et ||
        k[28] !== E ||
        k[29] !== P ||
        k[30] !== eo ||
        k[31] !== X ||
        k[32] !== N
          ? ((m = () =>
              ea && null != S
                ? X.watch((e) => {
                    let { get: t } = e,
                      a = {
                        documentType: A,
                        pageId: P,
                        pageTitle: el(),
                        namespace: E,
                        spaceContext: t(F.spacePageContext$, P),
                        includeReferenceTitles: !1,
                      },
                      n = {
                        accountId: S,
                        composerPlaceholder: p,
                        disableSubmit: C || et,
                        documentType: A,
                        getAdditionalUserContext: eo,
                        kind: "codex",
                        linkedTasks: Q,
                        pageId: P,
                        pageContextDeveloperInstructions: (0, q.y)(a),
                        localPageContextDeveloperInstructions: (0, q.y)({
                          ...a,
                          artifactExecution: "local-artifact-session",
                        }),
                        capturePageAdditionalContext: (e) =>
                          (0, B.JE)({ ...a, pageTitle: el(), artifactExecution: e }, eo(!1)),
                        preferredPresentation: "compact",
                        sourceId: N,
                      }
                    ei.current = (0, $.QX)(X, n)
                  })
                : void X.set(u.Px, null)),
            (k[20] = S),
            (k[21] = ea),
            (k[22] = p),
            (k[23] = C),
            (k[24] = A),
            (k[25] = el),
            (k[26] = Q),
            (k[27] = et),
            (k[28] = E),
            (k[29] = P),
            (k[30] = eo),
            (k[31] = X),
            (k[32] = N),
            (k[33] = m))
          : (m = k[33]),
        k[34] !== S ||
        k[35] !== ea ||
        k[36] !== p ||
        k[37] !== C ||
        k[38] !== A ||
        k[39] !== el ||
        k[40] !== Z ||
        k[41] !== Q ||
        k[42] !== et ||
        k[43] !== E ||
        k[44] !== P ||
        k[45] !== eo ||
        k[46] !== X ||
        k[47] !== N
          ? ((g = [S, ea, p, C, A, eo, Z, P, E, Q, et, el, X, N]),
            (k[34] = S),
            (k[35] = ea),
            (k[36] = p),
            (k[37] = C),
            (k[38] = A),
            (k[39] = el),
            (k[40] = Z),
            (k[41] = Q),
            (k[42] = et),
            (k[43] = E),
            (k[44] = P),
            (k[45] = eo),
            (k[46] = X),
            (k[47] = N),
            (k[48] = g))
          : (g = k[48]),
        (0, s.useLayoutEffect)(m, g),
        k[49] !== S || k[50] !== ea || k[51] !== en || k[52] !== X || k[53] !== N
          ? ((x = () => {
              ea && null != S && (0, f.v)(X, N, en)
            }),
            (v = [S, ea, en, X, N]),
            (k[49] = S),
            (k[50] = ea),
            (k[51] = en),
            (k[52] = X),
            (k[53] = N),
            (k[54] = x),
            (k[55] = v))
          : ((x = k[54]), (v = k[55])),
        (0, s.useLayoutEffect)(x, v),
        k[56] !== H || k[57] !== R
          ? ((b = () => ({ savedChat: R, preserveSavedChat: H })), (k[56] = H), (k[57] = R), (k[58] = b))
          : (b = k[58]))
      let er = (0, s.useEffectEvent)(b)
      return (
        k[59] !== S ||
        k[60] !== ea ||
        k[61] !== A ||
        k[62] !== er ||
        k[63] !== el ||
        k[64] !== Z ||
        k[65] !== P ||
        k[66] !== X ||
        k[67] !== N
          ? ((w = () => {
              if (!ea || null == S) {
                Z || (0, u.FJ)(X)
                return
              }
              let e = {
                pageId: P,
                open: () => {
                  if (X.get(u.rp)?.sourceId !== N) {
                    let { savedChat: e, preserveSavedChat: t } = er()
                    ;(0, f.cG)(
                      X,
                      { accountId: S, documentType: A ?? "page", pageId: P, sourceId: N, title: el() },
                      { restoreConversation: void 0 === e, preserveSavedChat: t },
                    )
                    let a = X.get(u.rp)
                    if (null != e && null != a) {
                      let t = (0, r.JXB)(e.conversation_id)
                      ;((0, u.I5)(X, N, t, e.host_id),
                        (0, K.Bb)(X, { clientThreadId: a.clientThreadId, conversationId: t, hostId: e.host_id }))
                    }
                  }
                },
              }
              ;(X.set(h.BO, e), Z || e.open())
              let t = X.watch((e) => {
                let { get: t } = e
                ;(t(h.BP, { accountId: S, sourceId: N }), Z || t(L, { pageId: P, identity: t(D.Wq) }))
              })
              return () => {
                ;(t(), X.get(h.BO) === e && X.set(h.BO, null), X.get(u.rp)?.sourceId === N && (0, f.HO)(X, N))
              }
            }),
            (k[59] = S),
            (k[60] = ea),
            (k[61] = A),
            (k[62] = er),
            (k[63] = el),
            (k[64] = Z),
            (k[65] = P),
            (k[66] = X),
            (k[67] = N),
            (k[68] = w))
          : (w = k[68]),
        k[69] !== S ||
        k[70] !== ea ||
        k[71] !== A ||
        k[72] !== el ||
        k[73] !== Z ||
        k[74] !== P ||
        k[75] !== X ||
        k[76] !== N
          ? ((_ = [S, ea, A, el, Z, P, X, N]),
            (k[69] = S),
            (k[70] = ea),
            (k[71] = A),
            (k[72] = el),
            (k[73] = Z),
            (k[74] = P),
            (k[75] = X),
            (k[76] = N),
            (k[77] = _))
          : (_ = k[77]),
        (0, s.useLayoutEffect)(w, _),
        null
      )
    }
    var V = a("i9us")
    let H = (0, m._)(async () => (await a.e(444397).then(a.bind(a, "cq6E"))).PageWorkCompanionBridge),
      X = (0, o.i1)(_.u, (e, { get: t }) => (null == e ? null : t(w.wY, e)))
    function Q(e) {
      let t,
        a,
        i,
        m,
        _,
        j,
        C = (0, l.c)(38),
        { allowLocalBlankPage: A, ...M } = e,
        T = (0, o.gh)(I.GD),
        [P, E] = (0, s.useState)(),
        N = (0, o._U)(S.Dh, { accountId: M.accountId, pageId: M.pageId }),
        U = (0, o.Ul)(c.chatGptAuthenticatedUserId$),
        O =
          (0, o._U)(k.JW, "4051670049") &&
          (null == T.value.persistentWorkspace || "/space" === T.value.persistentWorkspace.key) &&
          null != U &&
          M.enabled &&
          null != M.accountId &&
          null == M.documentType &&
          !(0, y.sD)(M.pageId),
        D = (0, o._U)(O ? b.zJ : null, M.pageId),
        R = (0, o._U)(v.vF, M.pageId)
      C[0] !== M.accountId || C[1] !== M.pageId || C[2] !== M.sourceId || C[3] !== U
        ? ((t = { userId: U, accountId: M.accountId, pageId: M.pageId, sourceId: M.sourceId }),
          (C[0] = M.accountId),
          (C[1] = M.pageId),
          (C[2] = M.sourceId),
          (C[3] = U),
          (C[4] = t))
        : (t = C[4])
      let L = (0, o._U)(!!O && b.wN, t),
        z = L ? void 0 : D?.data?.chat,
        q = (0, o.Ul)(u.rp),
        B = q?.accountId === M.accountId && q?.pageId === M.pageId && q?.sourceId === M.sourceId
      C[5] !== B || C[6] !== M.accountId || C[7] !== z || C[8] !== O
        ? ((a =
            O && z?.kind === "codex" && "local" === z.host_id && !B && null != M.accountId
              ? { accountId: M.accountId, conversationId: (0, r.JXB)(z.conversation_id), preferSavedLocal: !0 }
              : null),
          (C[5] = B),
          (C[6] = M.accountId),
          (C[7] = z),
          (C[8] = O),
          (C[9] = a))
        : (a = C[9])
      let $ = a,
        F = (0, o._U)(X, $),
        K = F?.isEnabled && F.isSuccess && !F.isFetching ? F.data : void 0
      if (
        (C[10] !== M.accountId || C[11] !== M.pageId || C[12] !== z || C[13] !== T || C[14] !== K
          ? ((i = () => {
              z?.kind === "codex" &&
                "local" === z.host_id &&
                null != K &&
                "local" !== K &&
                null != M.accountId &&
                (0, x.x)(T, JSON.stringify([M.accountId, M.pageId]), (0, r.JXB)(z.conversation_id), "page", K)
            }),
            (m = [M.accountId, M.pageId, z, T, K]),
            (C[10] = M.accountId),
            (C[11] = M.pageId),
            (C[12] = z),
            (C[13] = T),
            (C[14] = K),
            (C[15] = i),
            (C[16] = m))
          : ((i = C[15]), (m = C[16])),
        (0, s.useEffect)(i, m),
        F?.isEnabled && F.isError)
      ) {
        let e
        return (
          C[17] !== $ ||
          C[18] !== F?.isError ||
          C[19] !== M.pageId ||
          C[20] !== M.sourceId ||
          C[21] !== M.title ||
          C[22] !== T ||
          C[23] !== E
            ? ((e = (0, n.jsx)(g.$, {
                isMinimized: !1,
                onMinimizedChange: Z,
                presentation: "compact",
                renderTranscript: J,
                showHeader: !1,
                title: "",
                renderComposer: () =>
                  (0, n.jsxs)("div", {
                    className: "flex items-center gap-2 p-3",
                    role: "alert",
                    children: [
                      (0, n.jsx)(d.A, {
                        id: "page.chat.loadFailed",
                        defaultMessage: "Could not load this Page\u2019s chat",
                      }),
                      (0, n.jsx)(p.$, {
                        color: "ghost",
                        size: "actionSm",
                        onClick: () => {
                          null != $ && T.query.invalidate(w.wY, $)
                        },
                        children: (0, n.jsx)(d.A, { id: "page.chat.retry", defaultMessage: "Retry" }),
                      }),
                      null != $ &&
                        F?.isError &&
                        (0, n.jsx)(p.$, {
                          color: "ghost",
                          size: "actionSm",
                          onClick: () => {
                            let e = { accountId: $.accountId, pageId: M.pageId, documentType: "page" }
                            ;((0, f.jP)(T, e),
                              (0, f.cG)(
                                T,
                                { ...e, sourceId: M.sourceId, title: M.title ?? M.pageId },
                                { restoreConversation: !1 },
                              ),
                              E(T.get(u.rp)?.clientThreadId),
                              (0, h.gP)(T, M.pageId, null))
                          },
                          children: (0, n.jsx)(d.A, { id: "page.chat.startFresh", defaultMessage: "New chat" }),
                        }),
                    ],
                  }),
              })),
              (C[17] = $),
              (C[18] = F?.isError),
              (C[19] = M.pageId),
              (C[20] = M.sourceId),
              (C[21] = M.title),
              (C[22] = T),
              (C[23] = E),
              (C[24] = e))
            : (e = C[24]),
          e
        )
      }
      if ((O && !L && D?.data == null) || (F?.isEnabled && (F.isPending || F.isFetching))) {
        let e
        return (
          C[25] !== M.pageId
            ? ((e = (0, n.jsx)(V.O, { pageId: M.pageId })), (C[25] = M.pageId), (C[26] = e))
            : (e = C[26]),
          e
        )
      }
      if (
        (R?.draftSession != null && "complete" !== R.phase) ||
        z?.kind === "chatgpt" ||
        (z?.kind !== "codex" && N && !(B && null != P && q?.clientThreadId === P))
      ) {
        let e,
          t = z?.kind === "chatgpt" ? z.conversation_origin : void 0
        return (
          C[27] !== A || C[28] !== M || C[29] !== t
            ? ((e = (0, n.jsx)(H, { ...M, allowLocalBlankPage: A, conversationOrigin: t })),
              (C[27] = A),
              (C[28] = M),
              (C[29] = t),
              (C[30] = e))
            : (e = C[30]),
          e
        )
      }
      C[31] !== z || C[32] !== K
        ? ((_ = z?.kind === "codex" ? { ...z, host_id: K ?? z.host_id } : null), (C[31] = z), (C[32] = K), (C[33] = _))
        : (_ = C[33])
      let G = _,
        Y = O ? G : void 0
      return (
        C[34] !== L || C[35] !== M || C[36] !== Y
          ? ((j = (0, n.jsx)(W, { ...M, savedChat: Y, preserveSavedChat: L })),
            (C[34] = L),
            (C[35] = M),
            (C[36] = Y),
            (C[37] = j))
          : (j = C[37]),
        j
      )
    }
    function J() {
      return null
    }
    function Z() {}
    function ee(e) {
      let t,
        a = (0, l.c)(3),
        r = (0, o.Ul)(i.ph)
      return (
        a[0] !== r || a[1] !== e
          ? ((t = r ? (0, n.jsx)(Q, { ...e }) : null), (a[0] = r), (a[1] = e), (a[2] = t))
          : (t = a[2]),
        t
      )
    }
  },
  Eg3N(e, t, a) {
    var n = a("qmMi"),
      l = a("QcW8"),
      o = a("zeCl"),
      i = a("tSEg"),
      r = a("eviP"),
      s = a("moBM"),
      d = a("pZMh")
    let c = (0, n.un)(i.GD, ({ get: e }) => (e(s.FG) && e(d.Br) ? e(d.g4) : null)),
      u = (0, n.un)(i.GD, ({ get: e }) => {
        let t = e(c)
        if (null != t && "right-panel" === e(l.Ws) && "content" === e(d.DD)) {
          let t = e(d.nS)
          if (t?.kind === o.E) return t.tabId
        }
        return t
      }),
      p = (0, n.i1)(i.GD, (e, { get: t }) => {
        let a = t(u)
        return null != t(r.q) && (null == a || a === e)
      })
    a.d(t, {}, { B: p, M: c })
  },
  giYK(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("qmMi"),
      i = a("zd8w"),
      r = a("YCKz"),
      s = a("ua1X"),
      d = a("dTlo"),
      c = a("TGoC"),
      u = a("dJBt"),
      p = a("ajm9"),
      m = a("uFKw"),
      g = a("Wj4L"),
      h = a("ia0X")
    function f(e) {
      let t,
        a,
        s,
        c,
        m,
        f,
        x,
        v,
        y = (0, l.c)(48),
        {
          pageId: b,
          documentType: w,
          isCurrent: _,
          onPaint: I,
          panelLoadMetrics: k,
          editorVisit: S,
          renderer: j,
          backgroundSuspensions: C,
          fullEditor: A,
          synchronized: M,
          previewSource: T,
          contentRevision: P,
          nativeOpen: E,
          uiReady: N,
          contentReady: U,
          browserOnly: O,
        } = e,
        D = void 0 === w ? "page" : w,
        R = void 0 !== O && O,
        L = (0, o.gh)(p.U0),
        z = (0, o._U)(r.hM, (0, i.useContext)(r.HE)) && (void 0 === U || U),
        q = (0, i.useRef)(null)
      y[0] !== L ? ((t = (0, p.FB)(L)), (y[0] = L), (y[1] = t)) : (t = y[1])
      let B = t,
        $ = (0, o.Ul)(null == k && null == L.value.tabId ? d.h : null),
        F = $?.debug.snapshot.pageId === b ? $ : null,
        K = B?.snapshot.pageId === b ? B : F?.debug,
        G = k ?? F?.metrics,
        Y = (0, o.Ul)(null == k && null == L.value.tabId ? h.N2 : null),
        W = k?.browserFirstContent ?? F?.browserFirstContent,
        V = !z
      y[2] !== W || y[3] !== V ? ((a = { owner: W, needed: V }), (y[2] = W), (y[3] = V), (y[4] = a)) : (a = y[4])
      let [H, X] = (0, i.useState)(a)
      if (((H.owner === W && (z || H.needed)) || X({ owner: W, needed: !z }), null == K && null == k && null == I))
        return null
      R || K?.renderStarted()
      let Q = `${F?.attributes.navigationId ?? k?.id ?? K?.snapshot.id}:${A}:${T}:${M ? "synchronized" : P}:${E?.editable}:${E?.readOnly}:${null != N}`
      ;(y[5] !== R ||
      y[6] !== K ||
      y[7] !== D ||
      y[8] !== z ||
      y[9] !== W ||
      y[10] !== A ||
      y[11] !== _ ||
      y[12] !== F ||
      y[13] !== E ||
      y[14] !== I ||
      y[15] !== k ||
      y[16] !== T ||
      y[17] !== M ||
      y[18] !== B ||
      y[19] !== N
        ? ((s = () => {
            ;(F?.observeDocumentType(D),
              k?.observeDocumentType(D),
              !R &&
                null != B &&
                K?.contentPaintSource(null) === "unknown" &&
                (K.documentReady(T ?? "session"), M && K.point("initial_sync", void 0, "reused")),
              R || K?.renderCommitted())
            let e =
                "page" !== D
                  ? (E?.contentSource ?? "realtime")
                  : (F?.contentPaintSource(T) ?? ("cache" === T ? "local_cache" : (T ?? "unknown"))),
              t = K?.contentPaintSource(T)
            q.current = (a) => {
              _?.() === !1 ||
                (I?.(),
                z && a && W?.contentVisible(),
                R ||
                  (N?.() && (k?.uiReady(), F?.uiReady()),
                  null != B &&
                    null != t &&
                    (B.rendered(t), E?.readOnly ? B.setEditableStatus("read_only") : E?.editable && B.editable()),
                  null != k
                    ? (A && k.finish("readable"),
                      k.finish("first_visible", void 0, "none", e),
                      M && k.finish("synchronized_visible", void 0, "none", e),
                      null != E && k.nativePaint(E))
                    : ("page" !== D && A && F?.paintOpportunity(),
                      F?.contentPaintOpportunity(M, e),
                      null != E && F?.nativePaint(E))))
            }
          }),
          (y[5] = R),
          (y[6] = K),
          (y[7] = D),
          (y[8] = z),
          (y[9] = W),
          (y[10] = A),
          (y[11] = _),
          (y[12] = F),
          (y[13] = E),
          (y[14] = I),
          (y[15] = k),
          (y[16] = T),
          (y[17] = M),
          (y[18] = B),
          (y[19] = N),
          (y[20] = s))
        : (s = y[20]),
        y[21] !== z ? ((c = () => q.current?.(z)), (y[21] = z), (y[22] = c)) : (c = y[22]),
        y[23] !== Q || y[24] !== s || y[25] !== c
          ? ((m = (0, n.jsx)(u.X, { requireVisibleAtPaint: !0, onCommit: s, onPaint: c }, Q)),
            (y[23] = Q),
            (y[24] = s),
            (y[25] = c),
            (y[26] = m))
          : (m = y[26]))
      let J = m
      return (
        y[27] !== C ||
        y[28] !== D ||
        y[29] !== G ||
        y[30] !== S ||
        y[31] !== z ||
        y[32] !== _ ||
        y[33] !== b ||
        y[34] !== k ||
        y[35] !== j ||
        y[36] !== Y ||
        y[37] !== L
          ? ((f =
              z &&
              null != G &&
              null != j &&
              (null != k || Y) &&
              (0, n.jsx)(
                u.X,
                {
                  paintIdentity: j.paintIdentity ?? j.token,
                  requireVisibleAtPaint: !0,
                  onPaint: () => {
                    if (_?.() !== !1 && j.isCurrent()) {
                      if (null == k) {
                        let e = (0, g.th)({ document_type: D })
                        if (null == b || "unsupported" === e || (0, h.qo)(L, b, e) !== G) return
                      }
                      G.editorPainted(j.token, D, C)
                    }
                  },
                },
                `${G.id}:${S}`,
              )),
            (y[27] = C),
            (y[28] = D),
            (y[29] = G),
            (y[30] = S),
            (y[31] = z),
            (y[32] = _),
            (y[33] = b),
            (y[34] = k),
            (y[35] = j),
            (y[36] = Y),
            (y[37] = L),
            (y[38] = f))
          : (f = y[38]),
        y[39] !== z || y[40] !== W || y[41] !== _ || y[42] !== H.needed
          ? ((x =
              H.needed &&
              z &&
              W?.isRecording() &&
              (0, n.jsx)(u.X, {
                requireVisibleAtPaint: !0,
                onPaint: () => {
                  _?.() !== !1 && W.contentVisible()
                },
              })),
            (y[39] = z),
            (y[40] = W),
            (y[41] = _),
            (y[42] = H.needed),
            (y[43] = x))
          : (x = y[43]),
        y[44] !== J || y[45] !== f || y[46] !== x
          ? ((v = (0, n.jsxs)(n.Fragment, { children: [J, f, x] })), (y[44] = J), (y[45] = f), (y[46] = x), (y[47] = v))
          : (v = y[47]),
        v
      )
    }
    function x(e) {
      let t,
        a,
        i,
        r,
        s = (0, l.c)(10)
      s[0] !== e ? (({ panelTabId: t, ...a } = e), (s[0] = e), (s[1] = t), (s[2] = a)) : ((t = s[1]), (a = s[2]))
      let d = (0, o.uO)(m.F, t),
        c = (0, o.Ul)(d.activation$),
        u = (0, o.Ul)(d.editorVisit$)
      s[3] !== c || s[4] !== d ? ((i = d.getLoad(c)), (s[3] = c), (s[4] = d), (s[5] = i)) : (i = s[5])
      let p = i
      return (
        s[6] !== u || s[7] !== p || s[8] !== a
          ? ((r =
              null == p && null == a.onPaint
                ? null
                : (0, n.jsx)(f, { ...a, pageId: null == p ? null : a.pageId, panelLoadMetrics: p, editorVisit: u })),
            (s[6] = u),
            (s[7] = p),
            (s[8] = a),
            (s[9] = r))
          : (r = s[9]),
        r
      )
    }
    a.d(
      t,
      {},
      {
        x: function (e) {
          let t,
            a,
            d,
            p,
            m = (0, l.c)(13),
            g = (0, o._U)(s.Ve, e.pageId),
            h = (0, o._U)(r.hM, (0, i.useContext)(r.HE))
          return (
            m[0] !== g || m[1] !== e || m[2] !== h
              ? ((t =
                  h &&
                  null != g &&
                  (null == g.panelTabId || e.panelTabId === g.panelTabId) &&
                  (e.documentType ?? "page") === "page" &&
                  !1 !== e.contentReady &&
                  (0, n.jsx)(
                    u.X,
                    {
                      paintIdentity: g,
                      requireVisibleAtPaint: !0,
                      onPaint: () => {
                        h &&
                          e.isCurrent?.() !== !1 &&
                          (g.milestone("visible"), e.uiReady?.() && (g.milestone("interactive"), g.finish("ready")))
                      },
                    },
                    String(null != e.uiReady),
                  )),
                (m[0] = g),
                (m[1] = e),
                (m[2] = h),
                (m[3] = t))
              : (t = m[3]),
            m[4] !== e.loadAncestry || m[5] !== e.pageId
              ? ((a = null != e.pageId && !1 !== e.loadAncestry && (0, n.jsx)(c.J, { pageId: e.pageId })),
                (m[4] = e.loadAncestry),
                (m[5] = e.pageId),
                (m[6] = a))
              : (a = m[6]),
            m[7] !== e
              ? ((d =
                  null == e.panelTabId ? (0, n.jsx)(f, { ...e }) : (0, n.jsx)(x, { ...e, panelTabId: e.panelTabId })),
                (m[7] = e),
                (m[8] = d))
              : (d = m[8]),
            m[9] !== t || m[10] !== a || m[11] !== d
              ? ((p = (0, n.jsxs)(n.Fragment, { children: [t, a, d] })),
                (m[9] = t),
                (m[10] = a),
                (m[11] = d),
                (m[12] = p))
              : (p = m[12]),
            p
          )
        },
      },
    )
  },
  zoJM(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("qmMi"),
      i = a("zd8w"),
      r = a("e1xH"),
      s = a("Um9I"),
      d = a("oPCO"),
      c = a("IyCk"),
      u = a("tv8P"),
      p = a("OWtl")
    let m = (0, o.i1)(p.u, (e, { get: t }) => {
      if (!t(r.pagesEnabled$) || t(r.ZR, e)) return null
      let a = t(s.G2, e)
      if (!a?.can_read || !a.presentation.collaboration) return null
      if (!a.can_share) return "presence"
      let { space: n, isDriveBacked: l } = t(u.spacePageContext$, e)
      if (n?.root_page_id === e || null == l) return "presence"
      if (l) {
        let a = t(u.loadedSpacePageMetadata$, e)
        if (!(0, d.U)(a)) return "presence"
        if (a?.parent != null) return "shares"
      }
      return void 0 !== n ? "shares" : "presence"
    })
    a.d(
      t,
      {},
      {
        s: function (e) {
          let t,
            a,
            r,
            s = (0, l.c)(9),
            { pageId: d, session: u, onChange: p } = e,
            g = (0, o._U)(m, d),
            h = null != g
          return (
            s[0] !== h || s[1] !== p
              ? ((t = () => {
                  if (h) return () => p([])
                }),
                (a = [h, p]),
                (s[0] = h),
                (s[1] = p),
                (s[2] = t),
                (s[3] = a))
              : ((t = s[2]), (a = s[3])),
            (0, i.useLayoutEffect)(t, a),
            s[4] !== g || s[5] !== p || s[6] !== d || s[7] !== u
              ? ((r =
                  null == g ? null : (0, n.jsx)(c.Z, { pageId: d, session: u, canShare: "shares" === g, onChange: p })),
                (s[4] = g),
                (s[5] = p),
                (s[6] = d),
                (s[7] = u),
                (s[8] = r))
              : (r = s[8]),
            r
          )
        },
      },
    )
  },
  p01S(e, t, a) {
    var n = a("QosV"),
      l = a("qmMi"),
      o = a("zd8w"),
      i = a("ZPSN"),
      r = a("tSEg"),
      s = a("nkrL")
    a.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            a,
            i,
            r = (0, n.c)(12),
            { children: d, documentReady: c, fallbackTitle: u, pageId: p, session: m } = e,
            g = (0, l._U)(s.GC, p)
          r[0] !== c || r[1] !== u || r[2] !== g || r[3] !== m.document || r[4] !== m.streamKind
            ? ((t = () => ("scratch" === m.streamKind ? g : c ? m.document.getText("title").toJSON() : (u ?? g))),
              (r[0] = c),
              (r[1] = u),
              (r[2] = g),
              (r[3] = m.document),
              (r[4] = m.streamKind),
              (r[5] = t))
            : (t = r[5])
          let h = t
          r[6] !== u || r[7] !== g ? ((a = () => u ?? g), (r[6] = u), (r[7] = g), (r[8] = a)) : (a = r[8])
          let f = (0, o.useSyncExternalStore)(m.subscribe, h, a)
          return (r[9] !== d || r[10] !== f ? ((i = d(f)), (r[9] = d), (r[10] = f), (r[11] = i)) : (i = r[11]), i)
        },
        y: function (e) {
          let t,
            a,
            s = (0, n.c)(6),
            { enabled: d, pageId: c, title: u } = e,
            p = (0, l.gh)(r.GD)
          return (
            s[0] !== d || s[1] !== c || s[2] !== p || s[3] !== u
              ? ((t = () => {
                  d && null != u && (0, i.Qp)(p, c, u.trim() || c)
                }),
                (a = [d, c, p, u]),
                (s[0] = d),
                (s[1] = c),
                (s[2] = p),
                (s[3] = u),
                (s[4] = t),
                (s[5] = a))
              : ((t = s[4]), (a = s[5])),
            (0, o.useEffect)(t, a),
            null
          )
        },
      },
    )
  },
  sJSq(e, t, a) {
    var n = a("ygJY"),
      l = a("G4E3"),
      o = a("MX6A"),
      i = a("hiu4")
    function r(e, t) {
      return (0, o.xR)(
        (t?.trim() || e).replace(/[\r\n]+/gu, " ").replaceAll("](", "] ("),
        (0, l.$j)({ kind: "page", id: e }),
      ).trim()
    }
    a.d(
      t,
      {},
      {
        y: function (e) {
          let { pageId: t, pageTitle: a, includeReferenceTitles: l = !0 } = e
          return (0, n.lf)(e, {
            page: r(t, l ? a : void 0),
            sources: (0, i.yJ)(e).map((e) => r(e.page_id, l ? e.title : void 0)),
          })
        },
      },
    )
  },
  cUfo(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("oyxz"),
      i = a("bqtn"),
      r = a("Ot7V"),
      s = a("bVeK"),
      d = a("tnQ4"),
      c = a("j9wQ")
    a.d(
      t,
      {},
      {
        i: function (e) {
          let t,
            a,
            u,
            p = (0, l.c)(11),
            { menu: m, items: g } = e
          p[0] !== m
            ? ((t = function (e, t) {
                ;(m.onSelect(e, t), t.defaultPrevented || !1 === e.closeOnSelect || m.onOpenChange?.(!1))
              }),
              (p[0] = m),
              (p[1] = t))
            : (t = p[1])
          let h = t
          if (p[2] !== g || p[3] !== m || p[4] !== h) {
            let e
            ;(p[6] !== m || p[7] !== h
              ? ((e = (e) => {
                  if ("separator" === e.type) return (0, n.jsx)(i.ms.Separator, {}, e.id)
                  if ("label" === e.type) return (0, n.jsx)(i.ms.Title, { children: m.renderItemContent(e) }, e.id)
                  if (null != e.submenu)
                    return (0, n.jsx)(
                      c.Gs,
                      { disabled: !1 === e.enabled, label: m.renderItemContent(e), children: m.renderSubmenu(e, h) },
                      e.id,
                    )
                  let t =
                    "checkbox" === e.type || "radio" === e.type
                      ? (0, n.jsx)(d.s, {
                          trailingContent: e.checked ? (0, n.jsx)(s.ALZ, {}) : null,
                          children: m.renderItemContent({ ...e, type: void 0 }),
                        })
                      : m.renderItemContent(e)
                  return (0, n.jsx)(
                    i.ms.Item,
                    {
                      tooltipText:
                        null == e.tooltipMessage
                          ? void 0
                          : (0, n.jsx)(o.A, { ...e.tooltipMessage, values: e.tooltipMessageValues }),
                      asChild: null != e.href,
                      disabled: !1 === e.enabled,
                      "aria-disabled": !1 === e.enabled || void 0,
                      tone: e.tone,
                      role: "checkbox" === e.type || "radio" === e.type ? `menuitem${e.type}` : "menuitem",
                      "aria-checked": "checkbox" === e.type || "radio" === e.type ? e.checked : void 0,
                      onSelect: (t) => {
                        !1 === e.closeOnSelect && t.preventDefault()
                      },
                      onClick: (t) => {
                        !1 === e.enabled
                          ? t.preventDefault()
                          : (e.onClick?.(t),
                            t.defaultPrevented ||
                              (h(e, t.nativeEvent),
                              null != e.href && (0, r.PQ)({ event: t, href: e.href, initiator: "side_panel_menu" })))
                      },
                      children: null == e.href ? t : (0, n.jsx)("a", { href: e.href, children: t }),
                    },
                    e.id,
                  )
                }),
                (p[6] = m),
                (p[7] = h),
                (p[8] = e))
              : (e = p[8]),
              (a = g.map(e)),
              (p[2] = g),
              (p[3] = m),
              (p[4] = h),
              (p[5] = a))
          } else a = p[5]
          return (
            p[9] !== a ? ((u = (0, n.jsx)(n.Fragment, { children: a })), (p[9] = a), (p[10] = u)) : (u = p[10]),
            u
          )
        },
      },
    )
  },
  gbIu(e, t, a) {
    a.d(t, { g: () => C, k: () => A })
    var n = a("ABep"),
      l = a("QosV"),
      o = a("wTzC"),
      i = a("slpy"),
      r = a("q3Tn"),
      s = a("ESTr")
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
    })
    var c = a("h6Iv"),
      u = a("uPXa")
    let p = (0, s.a)({
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
      m = (0, s.a)({
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
    var g = a("tUzc"),
      h = a("nv3f"),
      f = a("on57"),
      x = a("qmMi"),
      v = a("zd8w"),
      y = a("oyxz"),
      b = a("Qgfj"),
      w = a("bVeK"),
      _ = a("UxN3"),
      I = a("NraH"),
      k = a("OWtl")
    let S = (0, x.A4)(
        k.u,
        (e) => null,
        (e, { set: t }) => {
          let a,
            n = e.getEngineSaveStatus()
          t("saved" === n ? null : n)
          let l = e.subscribe(() => {
            let l = e.getEngineSaveStatus()
            l !== n &&
              (clearTimeout(a),
              t("saved" === l && null == n ? null : l),
              "saved" === l && null != n && (a = setTimeout(() => t(null), 1e3)),
              (n = l))
          })
          return () => {
            ;(l(), clearTimeout(a))
          }
        },
        { key: (e) => e, autoDispose: !0 },
      ),
      j = {
        offline: { assets: { 16: p, 20: m } },
        "offline-unavailable": { assets: { 16: g.A, 20: h.X } },
        saving: { assets: { 16: r.h, 20: d } },
        saved: { 16: w.ALZ, 20: w.jFs },
        reconnected: { assets: { 16: c.f, 20: u.k } },
        "editing-paused": { assets: { 16: p, 20: m } },
      }
    function C(e) {
      let t,
        a = (0, l.c)(5),
        { session: o, pageSession: i, visible: r } = e,
        s = void 0 === r || r,
        d = (0, x._U)(S, o)
      return (
        a[0] !== i || a[1] !== o || a[2] !== d || a[3] !== s
          ? ((t = (0, n.jsx)(A, { visible: s, status: d, session: o, pageSession: i })),
            (a[0] = i),
            (a[1] = o),
            (a[2] = d),
            (a[3] = s),
            (a[4] = t))
          : (t = a[4]),
        t
      )
    }
    function A(e) {
      let t,
        a,
        r,
        s,
        d,
        c,
        u,
        p,
        m,
        g,
        h = (0, l.c)(28),
        { status: x, session: b, pageSession: w, visible: k } = e,
        S = void 0 === k || k
      h[0] !== b || h[1] !== x ? ((t = { session: b, status: x }), (h[0] = b), (h[1] = x), (h[2] = t)) : (t = h[2])
      let [C, A] = (0, v.useState)(t)
      ;(b !== C.session || (x !== C.status && (null != x || "saved" !== C.status))) && A({ session: b, status: x })
      let T = null == x
      h[3] !== x ? ((a = null == x ? "" : (0, n.jsx)(y.A, { ...M[x] })), (h[3] = x), (h[4] = a)) : (a = h[4])
      let P = "reconnected" === x ? "text-success" : "text-default",
        E = T && "pointer-events-none opacity-0"
      return (
        h[5] !== P || h[6] !== E
          ? ((r = (0, f.A)(
              "inline-flex shrink-0 cursor-default items-center justify-center p-1.5 select-none no-drag",
              P,
              "transition-opacity duration-100 ease-linear motion-reduce:transition-none",
              E,
            )),
            (h[5] = P),
            (h[6] = E),
            (h[7] = r))
          : (r = h[7]),
        h[8] !== w || h[9] !== x || h[10] !== S
          ? ((s =
              null != w &&
              "offline-unavailable" === x &&
              (0, n.jsx)(I.O, {
                visible: S,
                errorUiPresentation: "status",
                operation: "pages.realtime.notice",
                session: w,
                errorUiType: o.CodexPagesErrorUiType.CODEX_PAGES_ERROR_UI_TYPE_LOCAL_SAVE_FAILED,
              })),
            (h[8] = w),
            (h[9] = x),
            (h[10] = S),
            (h[11] = s))
          : (s = h[11]),
        h[12] !== C.status
          ? ((d = null != C.status && (0, n.jsx)(y.A, { ...M[C.status] })), (h[12] = C.status), (h[13] = d))
          : (d = h[13]),
        h[14] !== d
          ? ((c = (0, n.jsx)("span", { className: "sr-only", children: d })), (h[14] = d), (h[15] = c))
          : (c = h[15]),
        h[16] === Symbol.for("react.memo_cache_sentinel") ? ((u = Object.entries(j)), (h[16] = u)) : (u = h[16]),
        h[17] !== x
          ? ((p = (0, n.jsx)("span", {
              className: "grid",
              "aria-hidden": !0,
              children: u.map((e) => {
                let [t, a] = e
                return (0, n.jsx)(
                  "span",
                  {
                    className: (0, f.A)(
                      "col-start-1 row-start-1",
                      "transition-opacity duration-100 ease-linear motion-reduce:transition-none",
                      t === x ? "opacity-100" : "opacity-0",
                    ),
                    children: (0, n.jsx)(_.b5, { icon: a }),
                  },
                  t,
                )
              }),
            })),
            (h[17] = x),
            (h[18] = p))
          : (p = h[18]),
        h[19] !== p || h[20] !== r || h[21] !== s || h[22] !== c
          ? ((m = (0, n.jsxs)("span", {
              className: r,
              "aria-live": "polite",
              "aria-atomic": "true",
              role: "status",
              children: [s, c, p],
            })),
            (h[19] = p),
            (h[20] = r),
            (h[21] = s),
            (h[22] = c),
            (h[23] = m))
          : (m = h[23]),
        h[24] !== T || h[25] !== m || h[26] !== a
          ? ((g = (0, n.jsx)(i.m, { content: a, disabled: T, children: m })),
            (h[24] = T),
            (h[25] = m),
            (h[26] = a),
            (h[27] = g))
          : (g = h[27]),
        g
      )
    }
    let M = (0, b.YK)({
      offline: {
        id: "pages.saveIndicator.offline",
        defaultMessage: "You are offline. Your changes will be saved to this device.",
      },
      "offline-unavailable": {
        id: "pages.saveIndicator.offlineUnavailable",
        defaultMessage:
          "You are offline. Changes cannot be saved to this device. Keep this page open until you reconnect.",
      },
      saving: { id: "pages.saveIndicator.saving", defaultMessage: "Saving your changes\u2026" },
      saved: { id: "pages.saveIndicator.saved", defaultMessage: "All changes saved." },
      reconnected: { id: "pages.saveIndicator.reconnected", defaultMessage: "Reconnected" },
      "editing-paused": {
        id: "pages.saveIndicator.editingPausedInMemory",
        defaultMessage: "Editing paused while reconnecting. Keep this page open until your changes sync.",
      },
    })
  },
  S7CL(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("Wf1j"),
      i = a("bVeK"),
      r = a("UxN3"),
      s = a("NobM"),
      d = a("j9wQ"),
      c = a("p01S"),
      u = a("K0Cv"),
      p = a("zz9z"),
      m = a("cUfo")
    let g = new Set([
      "share-page-or-space",
      "pin-space",
      "unpin-space",
      "rename-page",
      "rename-space",
      "copy-page-actions",
      "open-page-in-new-window",
      "space-delete-separator",
      "archive-space",
    ])
    function h(e) {
      return "separator" !== e.type
    }
    function f(e) {
      return "page-activity" === e.id
    }
    function x(e) {
      return "page-delete-separator" === e.id || "space-delete-separator" === e.id || "archive-page" === e.id
    }
    function v(e) {
      return "copy-page-actions" === e.id
        ? (e.submenu?.filter(y) ?? [])
        : "open-page-in-new-window" === e.id
          ? [{ id: "page-window-separator", type: "separator" }, e]
          : [e]
    }
    function y(e) {
      return "copy-page-link" === e.id
    }
    function b(e) {
      return g.has(e.id)
    }
    a.d(
      t,
      {},
      {
        a: function (e) {
          let t,
            a,
            o,
            i,
            r,
            s,
            d = (0, l.c)(13)
          return (
            d[0] !== e
              ? (({ documentReady: t, fallbackTitle: a, session: i, ...o } = e),
                (d[0] = e),
                (d[1] = t),
                (d[2] = a),
                (d[3] = o),
                (d[4] = i))
              : ((t = d[1]), (a = d[2]), (o = d[3]), (i = d[4])),
            d[5] !== o
              ? ((r = (e) => (0, n.jsx)(p.V, { ...o, hierarchyMenu: !0, title: e })), (d[5] = o), (d[6] = r))
              : (r = d[6]),
            d[7] !== t || d[8] !== a || d[9] !== o.pageId || d[10] !== i || d[11] !== r
              ? ((s = (0, n.jsx)(c.D, {
                  documentReady: t,
                  fallbackTitle: a,
                  pageId: o.pageId,
                  session: i,
                  children: r,
                })),
                (d[7] = t),
                (d[8] = a),
                (d[9] = o.pageId),
                (d[10] = i),
                (d[11] = r),
                (d[12] = s))
              : (s = d[12]),
            s
          )
        },
        b: function (e) {
          let t,
            a,
            c,
            g,
            y,
            w,
            _,
            I,
            k,
            S,
            j,
            C,
            A,
            M,
            T,
            P,
            E = (0, l.c)(60),
            {
              menu: N,
              ariaLabel: U,
              editorMenuItems: O,
              fileActions: D,
              navigation: R,
              files: L,
              triggerRef: z,
              triggerButton: q,
              presentation: B,
              separateNavigation: $,
              showDocumentControls: F,
            } = e,
            K = void 0 === F || F,
            G = (0, o.A)()
          if (E[0] !== U || E[1] !== O || E[2] !== D || E[3] !== G || E[4] !== N || E[5] !== R || E[6] !== K) {
            let e,
              l = (c = K ? N.items : N.items.filter(b).flatMap(v)).findIndex(x),
              o = l < 0 ? c.length : l,
              i = c.findIndex(f)
            a = null != R && i >= 0 ? i + 1 : o
            let r = (0, s.P8)(c, a)
            ;(E[16] !== U || E[17] !== G
              ? ((e = U ?? G.formatMessage({ id: "pageDocumentActionsMenu.label", defaultMessage: "Page actions" })),
                (E[16] = U),
                (E[17] = G),
                (E[18] = e))
              : (e = E[18]),
              (g = e),
              (_ = O),
              (I = (0, n.jsx)(m.i, { menu: N, items: c.slice(0, r) })),
              (k = D),
              (t = m.i),
              (y = N),
              (w = c.slice(r, a)),
              (E[0] = U),
              (E[1] = O),
              (E[2] = D),
              (E[3] = G),
              (E[4] = N),
              (E[5] = R),
              (E[6] = K),
              (E[7] = t),
              (E[8] = a),
              (E[9] = c),
              (E[10] = g),
              (E[11] = y),
              (E[12] = w),
              (E[13] = _),
              (E[14] = I),
              (E[15] = k))
          } else
            ((t = E[7]),
              (a = E[8]),
              (c = E[9]),
              (g = E[10]),
              (y = E[11]),
              (w = E[12]),
              (_ = E[13]),
              (I = E[14]),
              (k = E[15]))
          E[19] !== t || E[20] !== y || E[21] !== w
            ? ((S = (0, n.jsx)(t, { menu: y, items: w })), (E[19] = t), (E[20] = y), (E[21] = w), (E[22] = S))
            : (S = E[22])
          let Y = K && L
          E[23] !== _ || E[24] !== I || E[25] !== k || E[26] !== S || E[27] !== Y
            ? ((j = (0, n.jsxs)(n.Fragment, { children: [_, I, k, S, Y] })),
              (E[23] = _),
              (E[24] = I),
              (E[25] = k),
              (E[26] = S),
              (E[27] = Y),
              (E[28] = j))
            : (j = E[28])
          let W = j
          E[29] !== a || E[30] !== c || E[31] !== N
            ? ((A = (C = c.slice(a)).some(h) ? (0, n.jsx)(m.i, { menu: N, items: C }) : null),
              (E[29] = a),
              (E[30] = c),
              (E[31] = N),
              (E[32] = C),
              (E[33] = A))
            : ((C = E[32]), (A = E[33]))
          let V = A
          if (null != R) {
            let e,
              t,
              l = void 0 !== $ && $ && a > 0,
              o = C[0]?.type === "separator"
            return (
              E[34] !== W ||
              E[35] !== g ||
              E[36] !== N.onCloseAutoFocus ||
              E[37] !== N.onOpenChange ||
              E[38] !== N.open ||
              E[39] !== V ||
              E[40] !== l ||
              E[41] !== o ||
              E[42] !== z
                ? ((e = {
                    ariaLabel: g,
                    open: N.open,
                    onOpenChange: N.onOpenChange,
                    onCloseAutoFocus: N.onCloseAutoFocus,
                    triggerRef: z,
                    anchorExplorer: !0,
                    beforeNavigation: W,
                    separateBeforeNavigation: l,
                    actions: V,
                    actionsStartWithSeparator: o,
                  }),
                  (E[34] = W),
                  (E[35] = g),
                  (E[36] = N.onCloseAutoFocus),
                  (E[37] = N.onOpenChange),
                  (E[38] = N.open),
                  (E[39] = V),
                  (E[40] = l),
                  (E[41] = o),
                  (E[42] = z),
                  (E[43] = e))
                : (e = E[43]),
              E[44] !== R || E[45] !== e || E[46] !== q
                ? ((t = (0, n.jsx)(p.V, { ...R, triggerButton: q, menu: e })),
                  (E[44] = R),
                  (E[45] = e),
                  (E[46] = q),
                  (E[47] = t))
                : (t = E[47]),
              t
            )
          }
          return (
            E[48] === Symbol.for("react.memo_cache_sentinel")
              ? ((M = (0, n.jsx)(r.b5, { icon: { 16: i.l0Y, 20: i.e4G } })), (E[48] = M))
              : (M = E[48]),
            E[49] !== g || E[50] !== B || E[51] !== z
              ? ((T = (0, n.jsx)(u.u, {
                  presentation: B,
                  uniform: !0,
                  title: g,
                  "aria-label": g,
                  ref: z,
                  children: M,
                })),
                (E[49] = g),
                (E[50] = B),
                (E[51] = z),
                (E[52] = T))
              : (T = E[52]),
            E[53] !== W ||
            E[54] !== N.onCloseAutoFocus ||
            E[55] !== N.onOpenChange ||
            E[56] !== N.open ||
            E[57] !== V ||
            E[58] !== T
              ? ((P = (0, n.jsxs)(d.OZ, {
                  open: N.open,
                  onOpenChange: N.onOpenChange,
                  onCloseAutoFocus: N.onCloseAutoFocus,
                  align: "end",
                  contentRole: "menu",
                  contentWidth: "menu",
                  contentMaxHeight: "available",
                  scrollPeek: !0,
                  triggerButton: T,
                  children: [W, V],
                })),
                (E[53] = W),
                (E[54] = N.onCloseAutoFocus),
                (E[55] = N.onOpenChange),
                (E[56] = N.open),
                (E[57] = V),
                (E[58] = T),
                (E[59] = P))
              : (P = E[59]),
            P
          )
        },
      },
    )
  },
  PejT(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("slpy"),
      i = a("YmrR"),
      r = a("qmMi"),
      s = a("zd8w"),
      d = a("Wf1j"),
      c = a("HOLv"),
      u = a("SGsN"),
      p = a("OWtl"),
      m = a("bIvi")
    function g(e) {
      return [e.accountUserId, e.label]
    }
    a.d(
      t,
      {},
      {
        V: function (e) {
          let t,
            a,
            r,
            s,
            u = (0, l.c)(9),
            { canRead: p, canShare: m } = e,
            g = (0, d.A)()
          if (!1 !== p) return null
          u[0] !== m || u[1] !== g
            ? ((t = m
                ? g.formatMessage({
                    id: "codex.pages.mentions.access.shareHint",
                    defaultMessage: "Can\u2019t view this page. Mention them to be offered sharing after saving.",
                  })
                : g.formatMessage({
                    id: "codex.pages.mentions.access.noShareHint",
                    defaultMessage: "Can\u2019t view this page. Ask an owner to share it with them.",
                  })),
              (u[0] = m),
              (u[1] = g),
              (u[2] = t))
            : (t = u[2])
          let h = t
          return (
            u[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, n.jsx)(c.I, { asset: i.E, className: "text-secondary" })), (u[3] = a))
              : (a = u[3]),
            u[4] !== h
              ? ((r = (0, n.jsx)("span", { "aria-label": h, role: "img", children: a })), (u[4] = h), (u[5] = r))
              : (r = u[5]),
            u[6] !== h || u[7] !== r
              ? ((s = (0, n.jsx)(o.m, { content: h, children: r })), (u[6] = h), (u[7] = r), (u[8] = s))
              : (s = u[8]),
            s
          )
        },
        W: function (e) {
          let t,
            a,
            n = (0, l.c)(7),
            { mentions: o, onDismiss: i, onShare: c } = e,
            h = (0, r.gh)(p.u),
            f = (0, d.A)(),
            x = (0, m.K)(i),
            v = (0, m.K)(c)
          return (
            n[0] !== x || n[1] !== f || n[2] !== o || n[3] !== h || n[4] !== v
              ? ((t = () => {
                  let e = new Map(o.map(g)),
                    t = f.formatList([...e.values()]),
                    a = !0,
                    n = h
                      .get(u.Id)
                      .info(
                        f.formatMessage(
                          {
                            id: "codex.pages.mentions.access.shareOffer",
                            defaultMessage: "{names} can\u2019t view this page.",
                          },
                          { names: t },
                        ),
                        {
                          hasCloseButton: !0,
                          primaryAction: {
                            label: f.formatMessage({
                              id: "codex.pages.mentions.access.openSharing",
                              defaultMessage: "Share",
                            }),
                            onClick: () => {
                              a && (v(), x())
                            },
                          },
                          onRemove: () => {
                            a && x()
                          },
                        },
                      )
                  return () => {
                    ;((a = !1), n.close())
                  }
                }),
                (a = [x, f, o, h, v]),
                (n[0] = x),
                (n[1] = f),
                (n[2] = o),
                (n[3] = h),
                (n[4] = v),
                (n[5] = t),
                (n[6] = a))
              : ((t = n[5]), (a = n[6])),
            (0, s.useEffect)(t, a),
            null
          )
        },
      },
    )
  },
  uF6b(e, t, a) {
    var n = a("SOEF"),
      l = a("PFjh"),
      o = a("SGsN"),
      i = a("svjy"),
      r = a("e1xH"),
      s = a("DHW4"),
      d = a("tv8P"),
      c = a("WFY2"),
      u = a("kK7d"),
      p = a("huYn")
    function m(e, t, a = []) {
      let l = new Set([...e.flatMap(n.iKr), ...a].map(n.M3X))
      return t.filter((e) => l.has((0, n.M3X)(e)))
    }
    async function g(e, t, a) {
      let n = e.get(d.spaceAccountId$),
        p = a.filter((e) => null == e.pageId || e.pageId === t.pageId)
      if (null == n || 0 === p.length || !e.get(r.pagesEnabled$)) return []
      let m = (0, s.r)((0, l.dj)(e), {
          action: "mention",
          documentType: "page",
          completionMilestone: "mention_persisted",
        }),
        g = "save"
      try {
        if ((await t.flush(), (g = "access_check"), e.get(d.spaceAccountId$) !== n || !e.get(r.pagesEnabled$)))
          return (m.dispose(), [])
        let a = t.getLiveMentions(p)
        if (0 === a.length) return (m.finish("cancelled"), [])
        m.milestone("mention_persisted")
        let l = t.pageId,
          s = [...new Set(a.map((e) => e.accountUserId))],
          c = new Set(),
          h = !0
        for (let o = 0; o < s.length; o += 50) {
          let i = new Set(t.getLiveMentions(a).map((e) => e.accountUserId)),
            p = s.slice(o, o + 50).filter((e) => i.has(e))
          if (0 === p.length) continue
          let m = await u.CodexRequest.safePost("/pages/{page_id}/mentions/access", {
            parameters: { path: { page_id: l } },
            requestBody: { account_user_ids: p },
          })
          if (e.get(d.spaceAccountId$) !== n || !e.get(r.pagesEnabled$)) return []
          for (let e of ((h = h && m.can_share), m.items)) e.can_read || c.add(e.account_user_id)
        }
        let f = t.getLiveMentions(a).filter((e) => c.has(e.accountUserId))
        if (0 === f.length) return []
        if (!h)
          return (
            e
              .get(o.Id)
              .info(
                e
                  .get(i.g)
                  .formatMessage({
                    id: "codex.pages.mentions.cannotShare",
                    defaultMessage:
                      "Mention saved, but people without page access won\u2019t be notified. Ask an owner to share the page.",
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
    a.d(
      t,
      {},
      {
        LA: async function (e, t, l, o) {
          var i
          let r
          return g(
            e,
            ((i = () => e.get(d.spacePageId$, t.id)),
            {
              get pageId() {
                return i()
              },
              flush: async () => {
                await t.flush({ scope: t.hasPendingOptimisticAgentInstructionsUnwraps() ? "all" : "current" })
                let e = (0, n.e6j)(t.document)
                e.order.toArray().some((t) => (0, n.wb3)(e, t)?.metadata?.get("source_format") === "dil") &&
                  (r = (await Promise.resolve().then(a.bind(a, "rYAq"))).readPageDilModelDocument)
              },
              getLiveMentions: (e) =>
                (function (e, t, a, l) {
                  if (0 === t.length) return []
                  let o = (0, n.e6j)(e),
                    i = [],
                    r = []
                  for (let e of new Set(o.order.toArray())) {
                    let t = (0, n.wb3)(o, e)
                    if (null == t) continue
                    if (t.metadata?.get("source_format") !== "dil") {
                      i.push(t.text.toJSON())
                      continue
                    }
                    let a = (0, n.qpU)(t.metadata.toJSON())
                    a?.model_dil_v2.editableSource === 1 &&
                      null != l &&
                      r.push(
                        ...(function (e, t, a) {
                          let n
                          try {
                            n = a(e, t)
                          } catch {
                            return []
                          }
                          let l = []
                          for (let { region: e, document: t } of n.regions.values()) {
                            let a = [...t.content]
                            for (let t of a) {
                              if ("list" === t.type || "list_item" === t.type) {
                                a.push(...t.content)
                                continue
                              }
                              if ("code_block" !== t.type)
                                for (let a of t.content ?? []) {
                                  if ("text" !== a.type) continue
                                  let t = a.marks?.find((e) => e.plainLink)
                                  if (null == t) continue
                                  let n = e.templates[t.attrs.template]?.props.href,
                                    o = (0, p.C)(a.text, n)
                                  null != o && l.push(o)
                                }
                            }
                          }
                          return l
                        })(t.text.toJSON(), a, l),
                      )
                  }
                  return m([...i, ...(a?.flatMap((e) => e.messages.map((e) => e.body)) ?? [])], t, r)
                })(t.document, e, o?.getSnapshot(), r),
            }),
            l,
          )
        },
        c2: g,
        nH: m,
      },
    )
  },
  pU4O(e, t, a) {
    var n = a("ABep"),
      l = a("QosV")
    a.d(
      t,
      {},
      {
        d: function (e) {
          let t,
            a,
            o = (0, l.c)(3),
            { className: i } = e,
            r = void 0 === i ? "size-[18px]" : i
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)("path", {
                  d: "M14.0857 8.74999C14.0857 5.80355 11.6972 3.41503 8.75073 3.41503C5.80429 3.41503 3.41577 5.80355 3.41577 8.74999C3.41577 11.6964 5.80429 14.085 8.75073 14.085C11.6972 14.085 14.0857 11.6964 14.0857 8.74999ZM15.4158 8.74999C15.4158 10.3539 14.848 11.8245 13.9041 12.9746L13.9705 13.0303L16.9705 16.0303L17.0564 16.1338C17.2269 16.3919 17.1977 16.7434 16.9705 16.9707C16.7432 17.1975 16.3925 17.226 16.1345 17.0557L16.03 16.9707L13.03 13.9707L12.9753 13.9033C11.8253 14.8472 10.3547 15.415 8.75073 15.415C5.06975 15.415 2.08569 12.431 2.08569 8.74999C2.08569 5.06901 5.06975 2.08495 8.75073 2.08495C12.4317 2.08495 15.4158 5.06901 15.4158 8.74999Z",
                })),
                (o[0] = t))
              : (t = o[0]),
            o[1] !== r
              ? ((a = (0, n.jsx)("svg", {
                  "aria-hidden": !0,
                  className: r,
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  children: t,
                })),
                (o[1] = r),
                (o[2] = a))
              : (a = o[2]),
            a
          )
        },
        r: function (e) {
          let t,
            a,
            o,
            i = (0, l.c)(4),
            { className: r } = e,
            s = void 0 === r ? "size-[18px]" : r
          return (
            i[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)("path", {
                  d: "M12.498 6.90887C12.7094 6.60867 13.1245 6.53642 13.4248 6.74774C13.7249 6.95913 13.7971 7.37424 13.5859 7.6745L9.62695 13.2995C9.51084 13.4644 9.32628 13.5681 9.125 13.5807C8.94863 13.5918 8.77583 13.5319 8.64453 13.4167L8.59082 13.364L6.50781 11.072L6.42773 10.9645C6.26956 10.6986 6.31486 10.3488 6.55273 10.1325C6.79045 9.91663 7.14198 9.9053 7.3916 10.0876L7.49219 10.1774L9.0166 11.8542L12.498 6.90887Z",
                })),
                (a = (0, n.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M10.3333 2.08496C14.7046 2.08496 18.2483 5.62867 18.2483 10C18.2483 14.3713 14.7046 17.915 10.3333 17.915C5.96192 17.915 2.41821 14.3713 2.41821 10C2.41821 5.62867 5.96192 2.08496 10.3333 2.08496ZM10.3333 3.41504C6.69646 3.41504 3.74829 6.3632 3.74829 10C3.74829 13.6368 6.69646 16.585 10.3333 16.585C13.97 16.585 16.9182 13.6368 16.9182 10C16.9182 6.3632 13.97 3.41504 10.3333 3.41504Z",
                })),
                (i[0] = t),
                (i[1] = a))
              : ((t = i[0]), (a = i[1])),
            i[2] !== s
              ? ((o = (0, n.jsxs)("svg", {
                  "aria-hidden": !0,
                  className: s,
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  children: [t, a],
                })),
                (i[2] = s),
                (i[3] = o))
              : (o = i[3]),
            o
          )
        },
      },
    )
  },
  E3vE(e, t, a) {
    var n = a("SOEF"),
      l = a("fEVS")
    function o(e, t) {
      let a = "",
        o = 0,
        i = [
          ...(0, n.iKr)(e),
          ...(0, l.FD)(e).map((e) => ({ ...e, label: t?.(e) ?? (null == e.orbit ? "ChatGPT" : "dot") })),
        ]
          .sort((e, t) => e.from - t.from)
          .map((t) => {
            let n = (a += e.slice(o, t.from)).length
            return (
              (a += `@${t.label}`),
              (o = t.to),
              {
                ...t,
                markup: "orbit" in t && null != t.orbit ? `[@dot](${(0, l.P)(t)})` : e.slice(t.from, t.to),
                displayFrom: n,
                displayTo: a.length,
              }
            )
          })
      return { text: a + e.slice(o), mentions: i }
    }
    function i(e, t, a, n, l) {
      let { text: i, mentions: r } = o(e, l),
        s = (e, t) => {
          let a = "",
            n = e
          for (let l of r)
            l.displayFrom < e || l.displayTo > t || ((a += i.slice(n, l.displayFrom) + l.markup), (n = l.displayTo))
          return a + i.slice(n, t)
        }
      return s(0, t) + n + s(a, i.length)
    }
    a.d(
      t,
      {},
      {
        WK: function (e, t, a = null, n) {
          let l = o(e, n).text
          if (a?.text === l) {
            let { from: o, to: r } = a
            if (o === r && a.inputType.startsWith("delete")) {
              let e = l.length - t.length
              a.inputType.endsWith("Backward") ? (o -= e) : a.inputType.endsWith("Forward") && (r += e)
            }
            let s = t.length - (l.length - r)
            if (o >= 0 && s >= o && l.slice(0, o) === t.slice(0, o) && l.slice(r) === t.slice(s))
              return i(e, o, r, t.slice(o, s), n)
          }
          let r = 0
          for (; r < l.length && l[r] === t[r];) r += 1
          let s = 0
          for (; s < l.length && s < t.length && l[l.length - s - 1] === t[t.length - s - 1];) s += 1
          let d = Math.min(r, l.length - s, t.length - s)
          return ((s = Math.min(s, l.length - r, t.length - r)), i(e, d, l.length - s, t.slice(d, t.length - s), n))
        },
        sB: i,
        tP: o,
      },
    )
  },
  huYn(e, t, a) {
    var n = a("SOEF")
    a.d(
      t,
      {},
      {
        C: function (e, t) {
          if ("string" != typeof e || !e.startsWith("@") || "" === e.slice(1).trim()) return null
          let a = (0, n.D1e)(t)
          return null == a ? null : { ...a, label: e.slice(1) }
        },
        l: function (e, t = 0, a = e?.content.size ?? 0) {
          let l = new Map()
          return (
            e?.nodesBetween(t, a, (e) => {
              if ("personMention" !== e.type.name) return
              let t = (0, n.D1e)(e.attrs.path)
              if (null == t || "string" != typeof e.attrs.title) return
              let a = t.accountUserId,
                o = e.attrs.title.slice(1),
                i = l.get(a)
              null == i ? l.set(a, { id: a, name: o, count: 1 }) : (i.count++, o.length > i.name.length && (i.name = o))
            }),
            [...l.values()]
          )
        },
      },
    )
  },
  GP5k(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("SOEF"),
      i = a("SZCv"),
      r = a.n(i),
      s = a("LPKZ"),
      d = a.n(s),
      c = a("pkoC"),
      u = a.n(c),
      p = a("qmMi"),
      m = a("zd8w"),
      g = a("Wf1j"),
      h = a("Qgfj"),
      f = a("jguW"),
      x = a("SPnB"),
      v = a("R2HH"),
      y = a("TYyY"),
      b = a("zWHk"),
      w = a("r0y7"),
      _ = a("rpnz"),
      I = a("UOwN"),
      k = a("tv8P"),
      S = a("Z1L7"),
      j = a("bQW7"),
      C = a("S4d4"),
      A = a("CMOE"),
      M = a("HzoD"),
      T = a("Rxyo"),
      P = a("PejT"),
      E = a("huYn"),
      N = a("oixE"),
      U = a("Vhxy"),
      O = a("xa9F")
    function D(e) {
      return e.account_user_id
    }
    function R(e) {
      let { id: t } = e
      return t
    }
    function L(e) {
      let { id: t, count: a } = e
      return [t, a]
    }
    a.d(
      t,
      {},
      {
        I: function (e) {
          let t,
            a,
            i,
            s,
            c,
            z,
            q,
            B,
            $,
            F,
            K,
            G,
            Y,
            W,
            V,
            H,
            X,
            Q,
            J,
            Z,
            ee = (0, l.c)(70),
            et = (0, g.A)(),
            ea = (0, p.Ul)(x.chatGptAuthenticatedUserId$)
          ee[0] !== e.pageId || ee[1] !== e.peopleEnabled
            ? ((t = e.peopleEnabled && !(0, _.sD)(e.pageId)),
              (ee[0] = e.pageId),
              (ee[1] = e.peopleEnabled),
              (ee[2] = t))
            : (t = ee[2])
          let en = t,
            el = (0, p.Ul)(!!en && T.A),
            eo = en ? e.query : "",
            ei = e.pageId
          ;(ee[3] !== eo ? ((a = eo.trim()), (ee[3] = eo), (ee[4] = a)) : (a = ee[4]),
            ee[5] !== e.pageId || ee[6] !== a
              ? ((i = { pageId: ei, query: a }), (ee[5] = e.pageId), (ee[6] = a), (ee[7] = i))
              : (i = ee[7]),
            ee[8] !== en ? ((s = { enabled: en }), (ee[8] = en), (ee[9] = s)) : (s = ee[9]))
          let {
              data: er,
              visited: es,
              isFetching: ed,
              isPending: ec,
              isEnabled: eu,
              isError: ep,
              failureCount: em,
            } = (0, p._U)(O.Lc, i, s),
            eg = en ? e.editorView : void 0
          ee[10] !== eg?.state.doc ? ((z = () => eg?.state.doc), (ee[10] = eg?.state.doc), (ee[11] = z)) : (z = ee[11])
          let eh = z
          ee[12] !== eg
            ? ((q = (e) =>
                null == eg
                  ? d()
                  : (0, b.A$)(eg, (t) => {
                      t && e()
                    })),
              (ee[12] = eg),
              (ee[13] = q))
            : (q = ee[13])
          let ef = (0, f.useSyncExternalStoreWithSelector)(q, eh, eh, E.l, r()),
            ex = el ? e.mentionContext : void 0,
            ev = new Map(ef.map(L)),
            ey = (0, j.pW)(eo, [ef], ex, { currentUserId: ea, mentionCounts: ev, limit: 8 }).map(R),
            eb = (0, p._U)(O.Id, ey),
            ew = e.peopleStatus.peopleError || eb.error || (eu && (ep || em > 0)),
            e_ = !ew && (e.peopleStatus.peopleLoading || eb.pendingIds.length > 0 || (eu && (ec || ed))),
            eI = (0, p.Ul)(k.spaceAccountId$),
            [ek, eS] = (0, m.useState)(null),
            ej = null != eg && eu && "" !== eo.trim() && !ew,
            eC = ek?.pageId === e.pageId && ek.accountId === eI && ek.userId === ea
          ej && null != er
            ? (eC && ek.people === er) || eS({ accountId: eI, userId: ea, pageId: e.pageId, people: er })
            : null == ek || (ej && eC) || eS(null)
          let eA = (0, p._U)(N.L, en && el ? e.pageId : null)
          if (en) {
            let t = [...e.contextualPicks, eb.people, es]
            ej && eC && ec && t.push(ek.people)
            let a = {
              excludeDomainOnlyMatches: !0,
              currentUserId: ea,
              limit: 8,
              directoryMatches: er,
              recentPeople: eA.people,
              mentionCounts: ev,
              requireIdentified: el,
            }
            c = (0, j.pW)(eo, t, ex, a)
          }
          let eM = ew || ("" === eo.trim() && c?.length === 0 && !e_ && eA.isError),
            eT = !eM && (e_ || eA.isLoading),
            eP = e.currentViewer
          ee[14] !== eo ? ((B = eo.trim().toLowerCase()), (ee[14] = eo), (ee[15] = B)) : (B = ee[15])
          let eE = "me" === B,
            eN = er?.find((e) => e.account_user_id === eP?.accountUserId),
            eU = (0, p.Ul)(null != eP ? w.bm : null),
            eO = eN?.email ?? (null != eU && eU.accountUserId === eP?.accountUserId ? eU.email : null)
          ee[16] !== el || ee[17] !== eP
            ? (($ = el && null != eP ? (0, C.Z)(eP.accountUserId, eP.displayName) : eP?.displayName),
              (ee[16] = el),
              (ee[17] = eP),
              (ee[18] = $))
            : ($ = ee[18])
          let eD = $,
            eR = (0, A.f)({ name: eD, email: eO }, eo),
            eL = eE || eR >= 2 ? eP : null,
            ez = c
          if (null != eL && null != eD && null != ez) {
            let e, t
            ;(ee[19] !== eL.accountUserId
              ? ((e = (e) => e.account_user_id !== eL.accountUserId), (ee[19] = eL.accountUserId), (ee[20] = e))
              : (e = ee[20]),
              ee[21] !== eo || ee[22] !== eR || ee[23] !== eE
                ? ((t = (e) => !eE && eR < 4 && 4 === (0, A.f)(e, eo)),
                  (ee[21] = eo),
                  (ee[22] = eR),
                  (ee[23] = eE),
                  (ee[24] = t))
                : (t = ee[24]))
            let [a, n] = u()(ez.filter(e), t)
            ez = [
              ...a,
              { ...eN, id: eL.accountUserId.split("__")[0], account_user_id: eL.accountUserId, name: eD, email: eO },
              ...n,
            ].slice(0, 8)
          }
          let [eq, eB] = (0, m.useState)(null),
            e$ = (0, U.f)(eq, en && !eM ? JSON.stringify([eI, ea, e.pageId, eo]) : null, ez ?? [], es.length > 0 && ec)
          ;(e$ !== eq && eB(e$),
            ee[25] !== e$?.people || ee[26] !== ez
              ? ((F = e$?.people ?? ez ?? []), (ee[25] = e$?.people), (ee[26] = ez), (ee[27] = F))
              : (F = ee[27]))
          let eF = F,
            eK = e.pageId
          ;(ee[28] !== eF ? ((K = eF.map(D).sort()), (ee[28] = eF), (ee[29] = K)) : (K = ee[29]),
            ee[30] !== e.pageId || ee[31] !== K
              ? ((G = { pageId: eK, accountUserIds: K }), (ee[30] = e.pageId), (ee[31] = K), (ee[32] = G))
              : (G = ee[32]),
            ee[33] !== en ? ((Y = { enabled: en }), (ee[33] = en), (ee[34] = Y)) : (Y = ee[34]))
          let { data: eG, isError: eY } = (0, p._U)(O.i5, G, Y)
          if (ee[35] !== eb.pendingIds || ee[36] !== eF) {
            let e
            ;(ee[38] !== eF
              ? ((e = (e) => !eF.some((t) => t.account_user_id === e)), (ee[38] = eF), (ee[39] = e))
              : (e = ee[39]),
              (W = eb.pendingIds.some(e)),
              (ee[35] = eb.pendingIds),
              (ee[36] = eF),
              (ee[37] = W))
          } else W = ee[37]
          let eW = W,
            eV = eT && (eF.length < 8 || eW)
          ee[40] !== eG ||
          ee[41] !== eY ||
          ee[42] !== et ||
          ee[43] !== en ||
          ee[44] !== eM ||
          ee[45] !== eV ||
          ee[46] !== eo ||
          ee[47] !== e ||
          ee[48] !== eL?.accountUserId ||
          ee[49] !== eE ||
          ee[50] !== eF
            ? ((V = en
                ? [
                    {
                      id: "people",
                      queryMatchMode: "source-ranked",
                      title: (0, h.zR)({ id: "codex.pages.mentions.people", defaultMessage: "People" }),
                      isLoading: eV,
                      isError: eM,
                      emptyState:
                        eM || "" !== eo.trim()
                          ? null
                          : (0, h.zR)({
                              id: "codex.pages.mentions.searchHint",
                              defaultMessage: "Type a name to mention someone",
                            }),
                      items: eF.map((t) => {
                        let a = (0, S.$4)(t),
                          l = eY ? void 0 : eG?.items.find((e) => e.account_user_id === t.account_user_id)?.can_read
                        return {
                          key: `person:${t.account_user_id}`,
                          label:
                            eE && t.account_user_id === eL?.accountUserId
                              ? et.formatMessage(
                                  { id: "codex.pages.mentions.selfLabel", defaultMessage: "{name} (you)" },
                                  { name: a },
                                )
                              : a,
                          detail: t.email ?? null,
                          allowLabelAndDetailToShrink: !0,
                          searchTerms: null == t.email ? [] : [t.email],
                          trailingContent: (0, n.jsx)(P.V, { canRead: l, canShare: eG?.can_share ?? !1 }),
                          iconElement: (0, n.jsx)(I.Y, {
                            accountUserId: t.account_user_id,
                            avatarUrl: t.avatar_url,
                            name: a,
                            size: "inline",
                          }),
                          type: "mention",
                          insertMention: (n) => {
                            let { composerController: l, mentionState: i } = n
                            if (null == i.range) return
                            let r = {
                              accountUserId: t.account_user_id,
                              label: a,
                              mentionId: crypto.randomUUID(),
                              pageId: e.pageId,
                            }
                            ;(l.insertMentionNodeFromAtMention(
                              l.view.state.schema.nodes.personMention,
                              { path: (0, o.o$5)(r), title: `@${a}` },
                              i,
                            ),
                              e.onMention([r]))
                          },
                        }
                      }),
                    },
                  ]
                : []),
              (ee[40] = eG),
              (ee[41] = eY),
              (ee[42] = et),
              (ee[43] = en),
              (ee[44] = eM),
              (ee[45] = eV),
              (ee[46] = eo),
              (ee[47] = e),
              (ee[48] = eL?.accountUserId),
              (ee[49] = eE),
              (ee[50] = eF),
              (ee[51] = V))
            : (V = ee[51])
          let eH = V
          ee[52] !== et || ee[53] !== e.source
            ? ((H =
                null == e.source
                  ? [
                      {
                        id: "dates",
                        title: (0, h.zR)({ id: "codex.pages.mentions.dates", defaultMessage: "Dates" }),
                        emptyState: null,
                        isLoading: !1,
                        items: [
                          {
                            day: "today",
                            offset: 0,
                            label: et.formatMessage({ id: "codex.pages.mentions.today", defaultMessage: "Today" }),
                          },
                          {
                            day: "tomorrow",
                            offset: 1,
                            label: et.formatMessage({
                              id: "codex.pages.mentions.tomorrow",
                              defaultMessage: "Tomorrow",
                            }),
                          },
                          {
                            day: "yesterday",
                            offset: -1,
                            label: et.formatMessage({
                              id: "codex.pages.mentions.yesterday",
                              defaultMessage: "Yesterday",
                            }),
                          },
                        ].map((e) => {
                          let { day: t, offset: a, label: n } = e
                          return {
                            key: `date:${t}`,
                            label: n,
                            detail: null,
                            searchTerms: [t],
                            type: "mention",
                            insertMention: (e) => {
                              let { composerController: t, mentionState: n } = e,
                                { view: l } = t
                              if (!l.editable || null == n.range) return
                              let o = new Date(Date.now())
                              ;(o.setDate(o.getDate() + a),
                                l.dispatch(
                                  l.state.tr
                                    .insertText(et.formatDate(o, { dateStyle: "long" }), n.range.from, n.range.to)
                                    .setMeta(y.Gq, { type: "close" }),
                                ),
                                l.focus())
                            },
                          }
                        }),
                      },
                    ]
                  : []),
              (ee[52] = et),
              (ee[53] = e.source),
              (ee[54] = H))
            : (H = ee[54])
          let eX = H,
            eQ = e.footer
          if (en && (eV || eb.error)) {
            let t
            "page" === e.rankingContext && eV && !eM && "" !== eo.trim() && (X = "people")
            let a = eV && !eM
            ;(ee[55] !== eb.error || ee[56] !== a
              ? ((t = (0, n.jsx)(M.I, { peopleLoading: a, peopleError: eb.error })),
                (ee[55] = eb.error),
                (ee[56] = a),
                (ee[57] = t))
              : (t = ee[57]),
              (eQ = t))
          }
          let eJ = eP?.accountUserId
          return (
            ee[58] !== e.additionalSections
              ? ((Q = e.additionalSections ?? []), (ee[58] = e.additionalSections), (ee[59] = Q))
              : (Q = ee[59]),
            ee[60] !== eX || ee[61] !== eH || ee[62] !== Q
              ? ((J = [...eH, ...eX, ...Q]), (ee[60] = eX), (ee[61] = eH), (ee[62] = Q), (ee[63] = J))
              : (J = ee[63]),
            ee[64] !== eQ || ee[65] !== X || ee[66] !== e || ee[67] !== eJ || ee[68] !== J
              ? ((Z = (0, n.jsx)(v.Ox, { ...e, footer: eQ, footerSectionId: X, additionalSections: J }, eJ)),
                (ee[64] = eQ),
                (ee[65] = X),
                (ee[66] = e),
                (ee[67] = eJ),
                (ee[68] = J),
                (ee[69] = Z))
              : (Z = ee[69]),
            Z
          )
        },
      },
    )
  },
  NyT3(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("qmMi"),
      i = a("Wf1j"),
      r = a("X3K1"),
      s = a("hFgF"),
      d = a("TxRk"),
      c = a("UOwN"),
      u = a("Adh7"),
      p = a("vSFv"),
      m = a("rTPf"),
      g = a("wuZu")
    function h(e) {
      return e.stopPropagation()
    }
    function f(e) {
      let t,
        a,
        i,
        s,
        d,
        p,
        h = (0, l.c)(16),
        { accountUserId: f, label: x } = e
      h[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (h[0] = t)) : (t = h[0])
      let { data: v, isLoading: y } = (0, o._U)(m.Ks, f, t)
      h[1] !== x || h[2] !== v?.name
        ? ((a = v?.name?.trim() || x.replace(/^@/, "")), (h[1] = x), (h[2] = v?.name), (h[3] = a))
        : (a = h[3])
      let b = a
      return (
        h[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsx)("span", {
              className: "size-full overflow-hidden rounded-full",
              children: (0, n.jsx)(r.X, { size: "fill" }),
            })),
            (h[4] = i))
          : (i = h[4]),
        h[5] !== f || h[6] !== y || h[7] !== b
          ? ((s = (0, n.jsx)(c.Y, {
              accountUserId: f,
              fadeIn: !0,
              loading: y,
              loadingFallback: i,
              name: b,
              profileQueryEnabled: !1,
              size: "md",
            })),
            (h[5] = f),
            (h[6] = y),
            (h[7] = b),
            (h[8] = s))
          : (s = h[8]),
        h[9] !== y || h[10] !== v?.email
          ? ((d = y
              ? (0, n.jsx)("span", {
                  className: "flex h-lh items-center",
                  children: (0, n.jsx)(r.X, { className: "w-32", size: "sm" }),
                })
              : (0, n.jsx)(u.Lz, { email: v?.email })),
            (h[9] = y),
            (h[10] = v?.email),
            (h[11] = d))
          : (d = h[11]),
        h[12] !== b || h[13] !== s || h[14] !== d
          ? ((p = (0, n.jsx)("div", {
              className: "w-max max-w-full min-w-56 p-3",
              children: (0, n.jsx)(g.h, { avatar: s, label: b, secondaryLabel: d, trailingContent: null }),
            })),
            (h[12] = b),
            (h[13] = s),
            (h[14] = d),
            (h[15] = p))
          : (p = h[15]),
        p
      )
    }
    a.d(
      t,
      {},
      {
        T: function (e) {
          let t,
            a = (0, l.c)(5),
            { accountUserId: i, label: r, onViewProfile: s } = e,
            d = (0, o.Ul)(p.JG)
          return (
            a[0] !== i || a[1] !== r || a[2] !== s || a[3] !== d
              ? ((t = d
                  ? (0, n.jsx)(u.BF, { accountUserId: i, label: r, onViewProfile: s })
                  : (0, n.jsx)(f, { accountUserId: i, label: r })),
                (a[0] = i),
                (a[1] = r),
                (a[2] = s),
                (a[3] = d),
                (a[4] = t))
              : (t = a[4]),
            t
          )
        },
        f: function (e) {
          let t,
            a,
            r,
            c,
            m = (0, l.c)(12),
            { accountUserId: g, label: f, children: x } = e,
            v = (0, i.A)(),
            y = (0, o.Ul)(p.JG),
            b = x ?? f
          m[0] !== b
            ? ((t = (0, n.jsx)(d.q3, { className: "cursor-default", children: b })), (m[0] = b), (m[1] = t))
            : (t = m[1])
          let w = t
          return y
            ? (m[2] !== v || m[3] !== f
                ? ((a = v.formatMessage(
                    { id: "pages.personMention.openProfileCard", defaultMessage: "View profile for {name}" },
                    { name: f.replace(/^@/, "") },
                  )),
                  (m[2] = v),
                  (m[3] = f),
                  (m[4] = a))
                : (a = m[4]),
              m[5] !== w || m[6] !== a
                ? ((r = (0, n.jsx)(s.I, { "aria-label": a, children: w })), (m[5] = w), (m[6] = a), (m[7] = r))
                : (r = m[7]),
              m[8] !== g || m[9] !== f || m[10] !== r
                ? ((c = (0, n.jsx)(u.Ve, {
                    accountUserId: g,
                    label: f,
                    openOnClick: !0,
                    triggerIsFocusable: !0,
                    onClick: h,
                    children: r,
                  })),
                  (m[8] = g),
                  (m[9] = f),
                  (m[10] = r),
                  (m[11] = c))
                : (c = m[11]),
              c)
            : w
        },
      },
    )
  },
  oixE(e, t, a) {
    var n = a("qmMi"),
      l = a("SPnB"),
      o = a("heYt"),
      i = a("rpnz"),
      r = a("xrkS"),
      s = a("rTPf"),
      d = a("tv8P"),
      c = a("OWtl"),
      u = a("bQW7"),
      p = a("LiNd"),
      m = a("Rxyo")
    let g = (0, n.i1)(c.u, (e, { get: t, scope: a }) => {
      let n = [],
        c = { people: n, isLoading: !1, isError: !1 }
      if (null == e || !t(m.y) || !t(o.Sz)) return c
      let g = t(d.spaceAccountId$),
        h = t(l.chatGptAuthenticatedUserId$),
        f = t(d.spacePageId$, e)
      if (null == g || null == h || (0, i.sD)(f) || t(d.loadedSpacePageMetadata$, f)?.access.can_share !== !0) return c
      let x = { type: "page", id: f }
      if (!0 !== a.query.getOptions(r.G, x).enabled) return c
      let { data: v, isPending: y, isError: b, isFetching: w, fetchStatus: _ } = t(r.G, x)
      if ("paused" === _ || ((c.isError = b), b)) return c
      if (v?.suggestions_as_of == null) return ((c.isLoading = y || w), c)
      let I = Date.parse(v.suggestions_as_of)
      if (!Number.isFinite(I)) return c
      let k = (v.suggestions ?? []).flatMap((e) => {
          let t = e.id.split("__")[0],
            a = null == e.last_shared_at ? 0 / 0 : I - Date.parse(e.last_shared_at)
          return "user" === e.type &&
            e.id === `${t}__${g.toLowerCase()}` &&
            t !== h.split("__")[0] &&
            e.sources.some((e) => "history" === e || "recent" === e) &&
            Number.isFinite(a) &&
            a >= 0 &&
            a <= 2592e6
            ? [{ id: `user:${e.id}`, label: e.display_name, secondaryLabel: e.detail ?? void 0, suggestion: e }]
            : []
        }),
        S = 0
      for (let { suggestion: e } of (0, p.s)("", [k], {
        selectedIds: new Set(),
        suggestionsAsOf: v.suggestions_as_of,
        limit: k.length,
      })) {
        let { data: l, isPending: o, isError: i, failureCount: r, fetchStatus: d } = t(s.Ks, e.id)
        if (
          ((c.isError = c.isError || i || r > 0),
          !0 !== a.query.getOptions(s.Ks, e.id).enabled ||
            i ||
            0 !== r ||
            "paused" === d ||
            (o
              ? (S += 1)
              : l?.account_user_id === e.id && l.id === e.id.split("__")[0] && n.push(...((0, u.Jk)([l]) ?? []))),
          n.length + S >= 10)
        )
          break
      }
      return ((c.isLoading = S > 0), c)
    })
    a.d(
      t,
      {},
      {
        L: g,
        Y: function (e, t) {
          let a = e.get(d.spacePageId$, t)
          ;(0, i.sD)(a) ||
            e.get(d.loadedSpacePageMetadata$, a)?.access.can_share !== !0 ||
            (null == e.query.getData(r.G, { type: "page", id: a }) && e.when(({ get: e }) => !e(g, a).isLoading))
        },
      },
    )
  },
  Vhxy(e, t, a) {
    var n = a("SZCv"),
      l = a.n(n),
      o = a("i5ac"),
      i = a.n(o)
    a.d(
      t,
      {},
      {
        f: function (e, t, a, n) {
          let o = e?.key === t ? e : null
          if (null == t) return null
          let r = new Map(a.map((e) => [e.account_user_id, e])),
            s = i()([...(o?.people ?? []), ...a, ...(o?.deferred ? [o.deferred] : [])], (e) => e.account_user_id),
            d = n ? Math.max(7, o?.people.length ?? 0) : 8,
            c = { key: t, people: s.slice(0, d).map((e) => r.get(e.account_user_id) ?? e), deferred: n ? s[d] : void 0 }
          return l()(e, c) ? e : c
        },
      },
    )
  },
  xa9F(e, t, a) {
    var n = a("qmMi"),
      l = a("SPnB"),
      o = a("rpnz"),
      i = a("e1xH"),
      r = a("rTPf"),
      s = a("tv8P"),
      d = a("OWtl"),
      c = a("rvFo"),
      u = a("kK7d"),
      p = a("QUw8")
    let m = (0, n.i1)(d.u, (e, { get: t }) => {
        let a = [],
          n = [],
          l = !1
        for (let o of e) {
          let e = t(r.Ks, o)
          ;(e.data?.account_user_id === o && a.push(e.data),
            e.isEnabled && (e.isPending && n.push(o), (l = l || e.isError || e.failureCount > 0)))
        }
        return { people: a, pendingIds: n, error: l }
      }),
      g = (0, n.i1)(d.u, ({ pageId: e, query: t }, { get: a }) => {
        let n = a(s.spacePageId$, e),
          l = a(i.pagesEnabled$) && !(0, o.sD)(n),
          d = a(r.DC, t, { enabled: l }),
          c = !l || d.data || d.isError ? [] : a(p.matchingVisitedPeople$, t)
        return { ...d, visited: c }
      }),
      h = (0, n.vU)(d.u, ({ pageId: e, accountUserIds: t }, { get: a }) => {
        let n = a(s.spaceAccountId$),
          r = a(l.chatGptAuthenticatedUserId$),
          d = a(s.spacePageId$, e),
          p = [...new Set(t)].sort().slice(0, 50)
        return {
          enabled: a(i.pagesEnabled$) && null != n && !(0, o.sD)(d) && p.length > 0,
          queryKey: ["space", "mention-access", n, d, r, p],
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
    a.d(t, {}, { Id: m, Lc: g, i5: h })
  },
  lKu2(e, t, a) {
    var n = a("qmMi"),
      l = a("DBCl"),
      o = a("q3j5"),
      i = a("TYK1"),
      r = a("OWtl"),
      s = a("fEVS")
    let d = (0, n.i1)(r.u, (e, { get: t }) =>
      Object.fromEntries(
        e.map((e) => {
          let { data: a } = t(i.cloudAeonByThreadId$, (0, l.JXB)(e))
          return [e, null == a || (0, o.x)(a.display_name) ? void 0 : a.display_name]
        }),
      ),
    )
    a.d(
      t,
      {},
      {
        FL: function (e, t, a) {
          return e.owner === t.owner && a
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
  j6bX(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("SOEF"),
      i = a("QEJB"),
      r = a("on57"),
      s = a("qmMi"),
      d = a("zd8w"),
      c = a("oyxz"),
      u = a("SPnB"),
      p = a("OBId"),
      m = a("OOvA"),
      g = a("tnQ4"),
      h = a("UxN3"),
      f = a("KIKs"),
      x = a("wq58"),
      v = a("i7fz"),
      y = a("TxRk"),
      b = a("wSXO"),
      w = a("e1xH"),
      _ = a("lKu2"),
      I = a("UOwN"),
      k = a("tcwr"),
      S = a("zOWn"),
      j = a("tdE2"),
      C = a("tv8P"),
      A = a("OWtl"),
      M = a("Z1L7"),
      T = a("bQW7"),
      P = a("HzoD"),
      E = a("Rxyo"),
      N = a("HgLj"),
      U = a("Oe5x"),
      O = a("fEVS"),
      D = a("PejT"),
      R = a("E3vE"),
      L = a("oixE"),
      z = a("Vhxy"),
      q = a("xa9F")
    function B(e) {
      return { id: e.accountUserId.split("__")[0], account_user_id: e.accountUserId, name: e.displayName, email: null }
    }
    function $(e) {
      return e.accountUserId
    }
    function F(e) {
      return e.id
    }
    function K(e) {
      return e ?? []
    }
    function G() {}
    function Y(e) {
      return e.getTime()
    }
    function W(e, t) {
      return e.from - t.from
    }
    function V(e) {
      let { displayFrom: t, displayTo: a } = e
      return { from: t, to: a, appearance: "inline-mention" }
    }
    function H(e) {
      return null != e.accountUserId
    }
    function X(e) {
      return { ...e, appearance: "underlined-text" }
    }
    function Q(e) {
      let t,
        a,
        o,
        i,
        r,
        p,
        f,
        v,
        y,
        w,
        _,
        k,
        j,
        A,
        E,
        N,
        U,
        O,
        R = (0, l.c)(72),
        {
          improvedSuggestions: B,
          onChatGPT: $,
          allowDot: F,
          taskMentionsDisabled: K,
          canMention: G,
          listboxId: Y,
          onHighlight: W,
          onSelect: V,
          query: H,
          pageId: X,
          contextualPicks: Q,
          mentionContext: Z,
          peopleStatus: ee,
        } = e,
        et = (0, s.Ul)(u.chatGptAuthenticatedUserId$)
      R[0] !== F ? ((t = { enabled: F }), (R[0] = F), (R[1] = t)) : (t = R[1])
      let ea = (0, s.Ul)(b.tl, t)
      ;(R[2] !== H ? ((a = H.trim()), (R[2] = H), (R[3] = a)) : (a = R[3]),
        R[4] !== X || R[5] !== a ? ((o = { pageId: X, query: a }), (R[4] = X), (R[5] = a), (R[6] = o)) : (o = R[6]))
      let {
          data: en,
          visited: el,
          isFetching: eo,
          isPending: ei,
          isEnabled: er,
          isError: es,
          failureCount: ed,
        } = (0, s._U)(q.Lc, o),
        ec = (0, s._U)(L.L, G && B ? X : null),
        eu = G
          ? (0, T.pW)(H, [...Q, el], B ? Z : void 0, {
              excludeDomainOnlyMatches: !0,
              currentUserId: et,
              limit: 8,
              directoryMatches: en,
              recentPeople: ec.people,
              requireIdentified: B,
            })
          : [],
        ep = ee.peopleError || (er && (es || ed > 0)),
        em = (0, s.Ul)(C.spaceAccountId$),
        [eg, eh] = (0, d.useState)(null),
        ef = (0, z.f)(eg, G && !ep ? JSON.stringify([em, et, X, H]) : null, eu, el.length > 0 && ei)
      ef !== eg && eh(ef)
      let ex = ef?.people ?? eu,
        ev = !ep && (ee.peopleLoading || (er && (ei || eo)))
      R[7] !== ep || R[8] !== ev || R[9] !== ex.length || R[10] !== H || R[11] !== ec
        ? ((i = ep || ("" === H.trim() && 0 === ex.length && !ev && ec.isError)),
          (R[7] = ep),
          (R[8] = ev),
          (R[9] = ex.length),
          (R[10] = H),
          (R[11] = ec),
          (R[12] = i))
        : (i = R[12])
      let ey = i,
        eb = !ey && (ev || ec.isLoading)
      if (R[13] !== ex || R[14] !== ec) {
        let e
        ;(R[16] !== ec
          ? ((e = (e) => ec.people.some((t) => t.account_user_id === e.account_user_id)), (R[16] = ec), (R[17] = e))
          : (e = R[17]),
          (r = ex.some(e)),
          (R[13] = ex),
          (R[14] = ec),
          (R[15] = r))
      } else r = R[15]
      let ew = r
      ;(R[18] !== ex ? ((p = ex.map(J).sort()), (R[18] = ex), (R[19] = p)) : (p = R[19]),
        R[20] !== X || R[21] !== p
          ? ((f = { pageId: X, accountUserIds: p }), (R[20] = X), (R[21] = p), (R[22] = f))
          : (f = R[22]))
      let { data: e_, isError: eI } = (0, s._U)(q.i5, f)
      if (ey) v = null
      else if (eb) {
        let e
        ;(R[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, { id: "codex.pages.mentions.searching", defaultMessage: "Searching\u2026" })),
            (R[23] = e))
          : (e = R[23]),
          (v = e))
      } else if ("" === H.trim()) {
        let e
        ;(R[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, {
              id: "codex.pages.mentions.searchHint",
              defaultMessage: "Type a name to mention someone",
            })),
            (R[24] = e))
          : (e = R[24]),
          (v = e))
      } else {
        let e
        ;(R[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(c.A, { id: "codex.pages.mentions.noPeople", defaultMessage: "No matching people" })),
            (R[25] = e))
          : (e = R[25]),
          (v = e))
      }
      ;(R[26] !== eb
        ? ((y = eb ? (0, n.jsx)(P.I, { peopleLoading: !0 }) : void 0), (R[26] = eb), (R[27] = y))
        : (y = R[27]),
        R[28] !== W ? ((w = (e, t) => W(null == e ? null : t)), (R[28] = W), (R[29] = w)) : (w = R[29]),
        R[30] !== ea || R[31] !== $ || R[32] !== V || R[33] !== ex
          ? ((_ = (e) => {
              if ("page-comment-chatgpt" === e.key) return void $?.("ChatGPT")
              let t = ea?.find((t) => e.key === `page-comment-orbit:${t.orbitId}`)
              if (null != t) return void $?.(t.isDefault ? "dot" : t.name, t)
              let a = ex.find((t) => t.account_user_id === e.key)
              null != a && V(a)
            }),
            (R[30] = ea),
            (R[31] = $),
            (R[32] = V),
            (R[33] = ex),
            (R[34] = _))
          : (_ = R[34]),
        R[35] !== $ || R[36] !== H || R[37] !== K
          ? ((k =
              null != $ && "chatgpt".includes(H.trim().toLowerCase())
                ? [
                    {
                      id: "chatgpt",
                      items: [
                        {
                          key: "page-comment-chatgpt",
                          disabled: K,
                          content: (0, n.jsx)(g.s, {
                            leftIcon: (0, n.jsx)(h.b5, { icon: x.A, "aria-hidden": !0 }),
                            children: (0, n.jsx)(c.A, {
                              id: "codex.page.commentTaskMention.suggestion",
                              defaultMessage: "ChatGPT",
                            }),
                          }),
                        },
                      ],
                    },
                  ]
                : []),
            (R[35] = $),
            (R[36] = H),
            (R[37] = K),
            (R[38] = k))
          : (k = R[38]),
        R[39] !== F || R[40] !== ea || R[41] !== $ || R[42] !== H || R[43] !== K
          ? ((j =
              null != $ && F
                ? [
                    {
                      id: "orbit",
                      items: (ea ?? [])
                        .filter((e) =>
                          ["dot", "o", "orbit", e.name.toLowerCase()].some((e) =>
                            e.includes(H.trim().replace(/^\./u, "").toLowerCase()),
                          ),
                        )
                        .map((e) => ({
                          key: `page-comment-orbit:${e.orbitId}`,
                          disabled: K,
                          content: (0, n.jsx)(g.s, {
                            leftIcon: (0, n.jsx)(S.r, { className: "size-4", conversationId: e.threadId }),
                            children: e.name,
                          }),
                        })),
                    },
                  ]
                : []),
            (R[39] = F),
            (R[40] = ea),
            (R[41] = $),
            (R[42] = H),
            (R[43] = K),
            (R[44] = j))
          : (j = R[44]),
        R[45] !== ew
          ? ((A = ew ? (0, n.jsx)(c.A, { id: "codex.pages.mentions.people", defaultMessage: "People" }) : void 0),
            (R[45] = ew),
            (R[46] = A))
          : (A = R[46]))
      let ek = v
      if (R[47] !== e_ || R[48] !== eI || R[49] !== ex) {
        let e
        ;(R[51] !== e_ || R[52] !== eI
          ? ((e = (e) => ({
              key: e.account_user_id,
              content: (0, n.jsx)(g.s, {
                trailingContent: (0, n.jsx)(D.V, {
                  canRead: eI ? void 0 : e_?.items.find((t) => t.account_user_id === e.account_user_id)?.can_read,
                  canShare: e_?.can_share ?? !1,
                }),
                leftIcon: (0, n.jsx)(I.Y, {
                  accountUserId: e.account_user_id,
                  avatarUrl: e.avatar_url,
                  name: (0, M.$4)(e),
                  size: "inline",
                }),
                children: (0, M.$4)(e),
              }),
            })),
            (R[51] = e_),
            (R[52] = eI),
            (R[53] = e))
          : (e = R[53]),
          (E = ex.map(e)),
          (R[47] = e_),
          (R[48] = eI),
          (R[49] = ex),
          (R[50] = E))
      } else E = R[50]
      return (
        R[54] !== v || R[55] !== ey || R[56] !== eb || R[57] !== ew || R[58] !== A || R[59] !== E
          ? ((N = { id: "people", title: A, showTitle: ew, isError: ey, isLoading: eb, emptyState: ek, items: E }),
            (R[54] = v),
            (R[55] = ey),
            (R[56] = eb),
            (R[57] = ew),
            (R[58] = A),
            (R[59] = E),
            (R[60] = N))
          : (N = R[60]),
        R[61] !== k || R[62] !== j || R[63] !== N
          ? ((U = [...k, ...j, N]), (R[61] = k), (R[62] = j), (R[63] = N), (R[64] = U))
          : (U = R[64]),
        R[65] !== Y || R[66] !== H || R[67] !== _ || R[68] !== U || R[69] !== y || R[70] !== w
          ? ((O = (0, n.jsx)(m.d, {
              preserveHighlightOnItemsChange: "user",
              isActive: !0,
              closeOnNoResults: !1,
              footer: y,
              listboxId: Y,
              onHighlight: w,
              onSelect: _,
              query: H,
              selectOnTab: !0,
              sections: U,
            })),
            (R[65] = Y),
            (R[66] = H),
            (R[67] = _),
            (R[68] = U),
            (R[69] = y),
            (R[70] = w),
            (R[71] = O))
          : (O = R[71]),
        O
      )
    }
    function J(e) {
      return e.account_user_id
    }
    a.d(
      t,
      {},
      {
        m: function (e) {
          let t,
            a,
            c,
            u,
            m,
            g,
            h,
            x,
            b,
            I,
            S,
            T,
            P,
            D,
            z,
            q,
            J,
            Z,
            ee,
            et,
            ea,
            en,
            el,
            eo,
            ei,
            er,
            es,
            ed = (0, l.c)(115),
            {
              className: ec,
              disabled: eu,
              style: ep,
              inputRef: em,
              onKeyDown: eg,
              ariaLabel: eh,
              autoFocus: ef,
              initialSelection: ex,
              allowOverLimitDraft: ev,
              submitOnEnter: ey,
              body: eb,
              canMention: ew,
              onBodyChange: e_,
              onCancel: eI,
              onChatGPT: ek,
              onAssignChatGPT: eS,
              taskOwner: ej,
              taskOwnerName: eC,
              placeholder: eA,
              pageId: eM,
              presence: eT,
              comments: eP,
              contextualPicks: eE,
              thread: eN,
              artifactParticipants: eU,
            } = e,
            eO =
              void 0 === ec
                ? "block field-sizing-content max-h-48 min-h-7 w-full min-w-0 flex-1 resize-none overflow-y-auto border-0 bg-transparent px-0 py-1 text-base leading-normal text-default outline-none placeholder:text-tertiary"
                : ec,
            eD = void 0 !== eu && eu,
            eR = void 0 !== ev && ev,
            eL = void 0 === ey || ey,
            ez = void 0 === ew || ew,
            eq = (0, s.gh)(A.u),
            eB = (0, s.Ul)(w.pagesEnabled$)
          ed[0] !== eb || ed[1] !== ej
            ? ((t = (0, _.jX)(eb, ej)), (ed[0] = eb), (ed[1] = ej), (ed[2] = t))
            : (t = ed[2])
          let e$ = (0, s._U)(_.OU, t),
            [eF, eK] = (0, d.useState)(!1)
          ed[3] !== e$ || ed[4] !== ej
            ? ((a = { owner: ej, labels: e$ }), (ed[3] = e$), (ed[4] = ej), (ed[5] = a))
            : (a = ed[5])
          let [eG, eY] = (0, d.useState)(a)
          ed[6] !== eG || ed[7] !== eF || ed[8] !== e$ || ed[9] !== ej
            ? ((c = (0, _.FL)(eG, { owner: ej, labels: e$ }, eF)),
              (ed[6] = eG),
              (ed[7] = eF),
              (ed[8] = e$),
              (ed[9] = ej),
              (ed[10] = c))
            : (c = ed[10])
          let eW = c
          ;(eW !== eG && eY(eW),
            ed[11] !== eW ? ((u = (e) => (0, _.Xz)(eW, e)), (ed[11] = eW), (ed[12] = u)) : (u = ed[12]))
          let eV = u,
            eH = (0, R.tP)(eb, eV),
            eX = (0, d.useRef)(null),
            eQ = (0, d.useRef)(null),
            eJ = [
              ...(0, U.Rb)(eH.text)
                .filter((e) => {
                  let { from: t, to: a } = e
                  return !eH.mentions.some((e) => t < e.displayTo && a > e.displayFrom)
                })
                .map(X),
              ...eH.mentions.filter(H).map(V),
            ].sort(W),
            eZ = eH.text.slice(eJ.at(-1)?.to ?? 0) + "\n",
            e1 = (0, d.useRef)(ex ?? eH.text.length),
            e0 = (0, d.useRef)(null),
            e2 = (0, d.useId)()
          ed[13] === Symbol.for("react.memo_cache_sentinel") ? ((m = { start: 0, end: 0 }), (ed[13] = m)) : (m = ed[13])
          let [e3, e4] = (0, d.useState)(m),
            [e5, e6] = (0, d.useState)(!1),
            [e7, e8] = (0, d.useState)(null),
            [e9, te] = (0, d.useState)(null),
            tt =
              !eD && ((eB && ez) || null != ek || null != eS) && !e5 && e3.start === e3.end
                ? /(?:^|\s|[([{])@((?:[^\s@()[\]`]| ){0,80})$/u.exec(eH.text.slice(0, e3.start))
                : null,
            ta = tt?.[1],
            tn = null == ta ? null : e3.start - ta.length - 1,
            tl =
              null != ta &&
              e7 !== `${tn}:${ta}` &&
              !eH.mentions.some((e) => null != tn && tn >= e.displayFrom && tn < e.displayTo),
            to = tl && eB && ez,
            ti = (0, s.Ul)(!!to && E.A),
            tr = (0, s._U)(to ? C.spacePageId$ : void 0, eM) ?? eM
          ed[14] !== ti ? ((g = { enabled: ti }), (ed[14] = ti), (ed[15] = g)) : (g = ed[15])
          let ts = (0, f.wv)(Y, g),
            td = to && null != eP,
            tc = (0, d.useSyncExternalStore)(
              td ? eP.subscribe : j.aW,
              td ? eP.getSnapshot : j.tb,
              eP?.getServerSnapshot ?? j.tb,
            ),
            tu = to ? eT : void 0
          ed[16] !== tu ? ((h = (e) => tu?.subscribe(e) ?? G), (ed[16] = tu), (ed[17] = h)) : (h = ed[17])
          let tp = h
          ed[18] !== tu ? ((x = () => tu?.getSnapshot().collaborators), (ed[18] = tu), (ed[19] = x)) : (x = ed[19])
          let tm = x
          ed[20] !== tu
            ? ((b = () => tu?.getServerSnapshot().collaborators), (ed[20] = tu), (ed[21] = b))
            : (b = ed[21])
          let tg = (0, d.useSyncExternalStore)(tp, tm, b),
            th = (0, s._U)(
              k.K,
              to
                ? {
                    type: "page",
                    id: tr,
                    query: ta,
                    commenters: ti ? [...((0, j.Qk)(tc) ?? []), ...(eE?.flatMap(K) ?? [])] : (0, j.Qk)(tc),
                    mentionContext: ti
                      ? {
                          asOfMs: ts,
                          threadUserIds: (0, j.Qk)(null == eN ? void 0 : [eN])?.map(F),
                          liveUserIds: tg?.map($),
                          participants: [...(0, j.Fx)(tc), ...(eU ?? [])],
                        }
                      : void 0,
                  }
                : null,
            ),
            tf = () => e8(`${tn}:${ta}`)
          ;(ed[22] === Symbol.for("react.memo_cache_sentinel")
            ? ((I = () => {
                let e = eX.current
                if (null == e) return
                let t = (t) => {
                  e0.current = { text: e.value, from: e.selectionStart, to: e.selectionEnd, inputType: t.inputType }
                }
                return (e.addEventListener("beforeinput", t), () => e.removeEventListener("beforeinput", t))
              }),
              (S = []),
              (ed[22] = I),
              (ed[23] = S))
            : ((I = ed[22]), (S = ed[23])),
            (0, d.useEffect)(I, S),
            ed[24] !== eR ? ((T = (e) => eR || (0, o.Uac)(e)), (ed[24] = eR), (ed[25] = T)) : (T = ed[25]))
          let tx = T
          ed[26] !== tx || ed[27] !== eb || ed[28] !== eV || ed[29] !== e_ || ed[30] !== e4
            ? ((P = (e) => {
                let t = (0, R.WK)(eb, e.value, e0.current, eV)
                ;((e0.current = null), tx(t) && e_(t), e4({ start: e.selectionStart, end: e.selectionEnd }))
              }),
              (ed[26] = tx),
              (ed[27] = eb),
              (ed[28] = eV),
              (ed[29] = e_),
              (ed[30] = e4),
              (ed[31] = P))
            : (P = ed[31])
          let tv = P
          ed[32] !== tx ||
          ed[33] !== eb ||
          ed[34] !== tn ||
          ed[35] !== eV ||
          ed[36] !== tr ||
          ed[37] !== e_ ||
          ed[38] !== e3 ||
          ed[39] !== e4
            ? ((D = (e) => {
                if (null == tn) return
                let t = (0, M.$4)(e),
                  a = (0, R.sB)(
                    eb,
                    tn,
                    e3.start,
                    (0, o.uNe)({
                      accountUserId: e.account_user_id,
                      label: t,
                      mentionId: crypto.randomUUID(),
                      pageId: tr,
                    }) + " ",
                    eV,
                  )
                if (!tx(a)) return
                let n = tn + t.length + 2
                ;(e_(a),
                  e4({ start: n, end: n }),
                  e8(null),
                  requestAnimationFrame(() => {
                    ;(eX.current?.focus(), eX.current?.setSelectionRange(n, n))
                  }))
              }),
              (ed[32] = tx),
              (ed[33] = eb),
              (ed[34] = tn),
              (ed[35] = eV),
              (ed[36] = tr),
              (ed[37] = e_),
              (ed[38] = e3),
              (ed[39] = e4),
              (ed[40] = D))
            : (D = ed[40])
          let ty = D
          ed[41] !== eO
            ? ((z = (0, r.A)(eO, "relative flex! flex-col overflow-hidden!")), (ed[41] = eO), (ed[42] = z))
            : (z = ed[42])
          let tb = (0, N.P)(em, (e) => {
            ;((eX.current = e),
              null != e && null != e1.current && (e.setSelectionRange(e1.current, e1.current), (e1.current = void 0)))
          })
          ed[43] === Symbol.for("react.memo_cache_sentinel")
            ? ((q = (e) => {
                null != eQ.current &&
                  ((eQ.current.scrollTop = e.currentTarget.scrollTop),
                  (eQ.current.scrollLeft = e.currentTarget.scrollLeft))
              }),
              (ed[43] = q))
            : (q = ed[43])
          let tw = tl ? "list" : void 0,
            t_ = tl ? e2 : void 0,
            tI = tl && null != e9 ? `${e2}-option-${e9}` : void 0,
            tk = ef && !eD
          return (
            ed[44] !== eR || ed[45] !== eb || ed[46] !== eV || ed[47] !== tv
              ? ((J = (e) => {
                  if (eR) return
                  let t = e.currentTarget,
                    a = t.selectionStart,
                    n = t.selectionEnd,
                    l = e.clipboardData.getData("text/plain").replace(/\r\n?/gu, "\n"),
                    i = (0, R.sB)(eb, a, n, "", eV),
                    r = o.i7B - Array.from(i).length,
                    s = 0,
                    d = 0
                  for (let e of l) {
                    if (d >= r) break
                    ;((s += e.length), d++)
                  }
                  if (s !== l.length && (e.preventDefault(), s > 0)) {
                    let e = l.slice(0, s)
                    if (
                      ((e0.current = { text: t.value, from: a, to: n, inputType: "insertFromPaste" }),
                      t.ownerDocument.execCommand?.("insertText", !1, e))
                    )
                      return
                    ;(t.setRangeText(e, a, n, "end"), tv(t))
                  }
                }),
                (ed[44] = eR),
                (ed[45] = eb),
                (ed[46] = eV),
                (ed[47] = tv),
                (ed[48] = J))
              : (J = ed[48]),
            ed[49] !== tv ? ((Z = (e) => tv(e.currentTarget)), (ed[49] = tv), (ed[50] = Z)) : (Z = ed[50]),
            ed[51] !== eH.text || ed[52] !== tv
              ? ((ee = (e) => {
                  e.currentTarget.value === eH.text && tv(e.currentTarget)
                }),
                (ed[51] = eH.text),
                (ed[52] = tv),
                (ed[53] = ee))
              : (ee = ed[53]),
            ed[54] !== e4
              ? ((et = (e) => e4({ start: e.currentTarget.selectionStart, end: e.currentTarget.selectionEnd })),
                (ed[54] = e4),
                (ed[55] = et))
              : (et = ed[55]),
            ed[56] !== ez || ed[57] !== eB || ed[58] !== eM || ed[59] !== eq
              ? ((ea = () => {
                  ;(eK(!0), eB && ez && (0, L.Y)(eq, eM))
                }),
                (ed[56] = ez),
                (ed[57] = eB),
                (ed[58] = eM),
                (ed[59] = eq),
                (ed[60] = ea))
              : (ea = ed[60]),
            ed[61] === Symbol.for("react.memo_cache_sentinel") ? ((en = () => eK(!1)), (ed[61] = en)) : (en = ed[61]),
            ed[62] !== e6
              ? ((el = () => e6(!0)), (eo = () => e6(!1)), (ed[62] = e6), (ed[63] = el), (ed[64] = eo))
              : ((el = ed[63]), (eo = ed[64])),
            ed[65] !== tl || ed[66] !== tf || ed[67] !== eI || ed[68] !== eg || ed[69] !== eL
              ? ((ei = (e) => {
                  ;(0, v.X)(e.nativeEvent) ||
                    e.defaultPrevented ||
                    (eg?.(e),
                    e.defaultPrevented ||
                      ("Escape" === e.key && (tl || null != eI)
                        ? (e.preventDefault(), e.stopPropagation(), tl ? tf() : eI?.())
                        : "Enter" === e.key &&
                          !e.shiftKey &&
                          eL &&
                          (e.preventDefault(), e.currentTarget.form?.requestSubmit())))
                }),
                (ed[65] = tl),
                (ed[66] = tf),
                (ed[67] = eI),
                (ed[68] = eg),
                (ed[69] = eL),
                (ed[70] = ei))
              : (ei = ed[70]),
            ed[71] !== eh ||
            ed[72] !== eD ||
            ed[73] !== eH.text ||
            ed[74] !== eA ||
            ed[75] !== tb ||
            ed[76] !== tw ||
            ed[77] !== t_ ||
            ed[78] !== tI ||
            ed[79] !== tk ||
            ed[80] !== J ||
            ed[81] !== Z ||
            ed[82] !== ee ||
            ed[83] !== et ||
            ed[84] !== ea ||
            ed[85] !== el ||
            ed[86] !== eo ||
            ed[87] !== ei
              ? ((er = (0, n.jsx)("textarea", {
                  ref: tb,
                  className:
                    "relative block field-sizing-content min-h-0 w-full min-w-0 resize-none [scrollbar-gutter:stable] overflow-y-auto border-0 bg-transparent p-0 [text-indent:inherit] leading-[inherit] [overflow-wrap:break-word] whitespace-pre-wrap text-transparent caret-text outline-none [font:inherit] selection:text-default placeholder:text-tertiary",
                  onScroll: q,
                  disabled: eD,
                  "aria-label": eh,
                  "aria-autocomplete": tw,
                  "aria-controls": t_,
                  "aria-activedescendant": tI,
                  autoFocus: tk,
                  placeholder: eA,
                  onPaste: J,
                  rows: 1,
                  value: eH.text,
                  onChange: Z,
                  onInput: ee,
                  onSelect: et,
                  onFocus: ea,
                  onBlur: en,
                  onCompositionStart: el,
                  onCompositionEnd: eo,
                  onKeyDown: ei,
                })),
                (ed[71] = eh),
                (ed[72] = eD),
                (ed[73] = eH.text),
                (ed[74] = eA),
                (ed[75] = tb),
                (ed[76] = tw),
                (ed[77] = t_),
                (ed[78] = tI),
                (ed[79] = tk),
                (ed[80] = J),
                (ed[81] = Z),
                (ed[82] = ee),
                (ed[83] = et),
                (ed[84] = ea),
                (ed[85] = el),
                (ed[86] = eo),
                (ed[87] = ei),
                (ed[88] = er))
              : (er = ed[88]),
            ed[89] !== tx ||
            ed[90] !== tl ||
            ed[91] !== eb ||
            ed[92] !== ez ||
            ed[93] !== tg ||
            ed[94] !== eE ||
            ed[95] !== tf ||
            ed[96] !== eB ||
            ed[97] !== tn ||
            ed[98] !== eV ||
            ed[99] !== ti ||
            ed[100] !== e2 ||
            ed[101] !== tr ||
            ed[102] !== eW ||
            ed[103] !== eS ||
            ed[104] !== e_ ||
            ed[105] !== ek ||
            ed[106] !== th ||
            ed[107] !== ta ||
            ed[108] !== ty ||
            ed[109] !== e3 ||
            ed[110] !== te ||
            ed[111] !== e4 ||
            ed[112] !== ej ||
            ed[113] !== eC
              ? ((es = tl
                  ? (0, n.jsx)(p.$, {
                      isActive: !0,
                      children: (0, n.jsx)(i.qW, {
                        onDismiss: tf,
                        onEscapeKeyDown: (e) => {
                          ;(e.preventDefault(), e.stopPropagation(), e.isComposing || (tf(), eX.current?.focus()))
                        },
                        onInteractOutside: (e) => {
                          e.target === eX.current && e.preventDefault()
                        },
                        children: (0, n.jsx)(Q, {
                          improvedSuggestions: ti,
                          mentionContext: th.mentionContext,
                          contextualPicks: [...(eE ?? []), tg?.map(B), ...th.picks],
                          peopleStatus: { peopleError: th.isError, peopleLoading: th.isLoading },
                          onChatGPT:
                            null == ek && null == eS
                              ? void 0
                              : (e, t) => {
                                  if (null == tn) return
                                  if (null != eS && null == t) {
                                    ;(e_((0, R.sB)(eb, tn, e3.start, "", eV)),
                                      eS(),
                                      e4({ start: tn, end: tn }),
                                      tf(),
                                      requestAnimationFrame(() => {
                                        ;(eX.current?.focus(), eX.current?.setSelectionRange(tn, tn))
                                      }))
                                    return
                                  }
                                  if (null == ej) return
                                  let a = crypto.randomUUID()
                                  tf()
                                  let n = (0, R.sB)(
                                    eb,
                                    tn,
                                    e3.start,
                                    `[@${null == t ? "ChatGPT" : "dot"}](${(0, O.P)({ id: a, owner: ej, ownerName: eC, orbit: t })}) `,
                                    eV,
                                  )
                                  if (tx(n)) {
                                    null != t && eY({ ...eW, labels: { ...eW.labels, [t.threadId]: e } })
                                    let a = tn + e.length + 2
                                    ;(ek?.(n, a),
                                      e4({ start: a, end: a }),
                                      requestAnimationFrame(() => {
                                        ;(eX.current?.focus(), eX.current?.setSelectionRange(a, a))
                                      }))
                                  }
                                },
                          taskMentionsDisabled: null == eS && null == ej,
                          allowDot: null != ek,
                          canMention: eB && ez,
                          pageId: tr,
                          listboxId: e2,
                          query: ta,
                          onHighlight: te,
                          onSelect: ty,
                        }),
                      }),
                    })
                  : null),
                (ed[89] = tx),
                (ed[90] = tl),
                (ed[91] = eb),
                (ed[92] = ez),
                (ed[93] = tg),
                (ed[94] = eE),
                (ed[95] = tf),
                (ed[96] = eB),
                (ed[97] = tn),
                (ed[98] = eV),
                (ed[99] = ti),
                (ed[100] = e2),
                (ed[101] = tr),
                (ed[102] = eW),
                (ed[103] = eS),
                (ed[104] = e_),
                (ed[105] = ek),
                (ed[106] = th),
                (ed[107] = ta),
                (ed[108] = ty),
                (ed[109] = e3),
                (ed[110] = te),
                (ed[111] = e4),
                (ed[112] = ej),
                (ed[113] = eC),
                (ed[114] = es))
              : (es = ed[114]),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)("label", {
                  className: z,
                  style: ep,
                  children: [
                    (0, n.jsxs)("div", {
                      ref: eQ,
                      className:
                        "pointer-events-none absolute inset-0 [scrollbar-gutter:stable] overflow-hidden p-[inherit] [text-indent:inherit] leading-[inherit] [overflow-wrap:break-word] whitespace-pre-wrap text-default [font:inherit]",
                      "aria-hidden": "true",
                      children: [
                        eJ.map((e, t) => {
                          let { from: a, to: l, appearance: o } = e
                          return (0, n.jsxs)(
                            d.Fragment,
                            {
                              children: [
                                eH.text.slice(0 === t ? 0 : eJ[t - 1].to, a),
                                (0, n.jsx)(y.q3, {
                                  className: "[font-family:inherit]",
                                  appearance: o,
                                  fontWeight: "inherit",
                                  children: (0, n.jsx)("span", {
                                    className: "whitespace-pre-wrap",
                                    children: eH.text.slice(a, l),
                                  }),
                                }),
                              ],
                            },
                            a,
                          )
                        }),
                        eZ,
                      ],
                    }),
                    er,
                  ],
                }),
                es,
              ],
            })
          )
        },
      },
    )
  },
  tWTn(e, t, a) {
    a.d(t, { D: () => eh })
    var n = a("ABep"),
      l = a("QosV"),
      o = a("on57"),
      i = a("suct"),
      r = a("qmMi"),
      s = a("zd8w"),
      d = a("Wf1j"),
      c = a("oyxz"),
      u = a("Qgfj"),
      p = a("iodE"),
      m = a("K45w"),
      g = a("W5pg"),
      h = a("SOml"),
      f = a("K4Cx"),
      x = a("T1PX"),
      v = a("yC2B"),
      y = a("V8uZ"),
      b = a("OBKr"),
      w = a("QESW"),
      _ = a("DUYS")
    function I(e) {
      let t,
        a,
        i,
        r,
        c,
        u,
        I,
        k,
        S,
        j,
        C,
        A,
        M,
        T,
        P,
        E,
        N,
        U,
        O = (0, l.c)(66),
        {
          animation: D,
          children: R,
          defaultWidth: L,
          label: z,
          observePointerResize: q,
          onClose: B,
          storageKey: $,
          variant: F,
        } = e,
        K = void 0 === L ? 600 : L,
        G = void 0 === F ? "default" : F,
        Y = (0, d.A)(),
        W = (0, x.I)(),
        [V, H] = (0, p.xQ)()
      O[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { width: 0, height: 0 }), (O[0] = t)) : (t = O[0])
      let [X, Q] = (0, s.useState)(t),
        J = (0, m.d)(0),
        Z = D ?? J,
        ee = (0, m.d)(null),
        et = X.width < 640,
        ea = et ? "full" : "regular"
      O[1] !== K || O[2] !== X.height || O[3] !== X.width
        ? ((a = (0, _.Mv)({ defaultWidth: K, mainContentWidth: X.width, shellHeight: X.height })),
          (O[1] = K),
          (O[2] = X.height),
          (O[3] = X.width),
          (O[4] = a))
        : (a = O[4])
      let en = a
      O[5] !== en || O[6] !== X.width || O[7] !== $ || O[8] !== ea
        ? ((i = (e) =>
            Math.min(
              X.width,
              (0, _.Ju)(
                e ?? (0, _.t7)({ defaultWidth: en, mainContentWidth: X.width, storageKey: $, widthMode: ea }),
                X.width,
                ea,
              ),
            )),
          (O[5] = en),
          (O[6] = X.width),
          (O[7] = $),
          (O[8] = ea),
          (O[9] = i))
        : (i = O[9])
      let el = (0, g.G)(ee, i)
      O[10] !== V || O[11] !== Z || O[12] !== el
        ? ((r = { size: el, animation: Z, isVisible: V }), (O[10] = V), (O[11] = Z), (O[12] = el), (O[13] = r))
        : (r = O[13])
      let { animatedSize: eo } = (0, w.j)(r)
      ;(O[14] !== V || O[15] !== W || O[16] !== H || O[17] !== Z
        ? ((c = () => {
            let e = (0, h.i)(Z, +!!V, {
              ...(W ? { duration: 0 } : y.cv),
              onComplete: () => {
                V || H?.()
              },
            })
            return () => e.stop()
          }),
          (u = [V, W, H, Z]),
          (O[14] = V),
          (O[15] = W),
          (O[16] = H),
          (O[17] = Z),
          (O[18] = c),
          (O[19] = u))
        : ((c = O[18]), (u = O[19])),
        (0, s.useLayoutEffect)(c, u),
        O[20] !== D
          ? ((k = () => () => D?.jump(0)), (I = [D]), (O[20] = D), (O[21] = I), (O[22] = k))
          : ((I = O[21]), (k = O[22])),
        (0, s.useLayoutEffect)(k, I))
      let ei = Math.min(X.width, 320),
        er = X.width
      O[23] !== X.width || O[24] !== ea
        ? ((S = (0, _.Ju)(1, X.width, ea)), (O[23] = X.width), (O[24] = ea), (O[25] = S))
        : (S = O[25])
      let es = Math.min(er, S)
      O[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = (e) => {
            let t = e?.parentElement
            if (null == t) return
            let a = () => {
              let e = t.clientWidth,
                a = t.clientHeight
              Q((t) => (t.width === e && t.height === a ? t : { width: e, height: a }))
            }
            a()
            let n = new ResizeObserver(a)
            return (n.observe(t), () => n.disconnect())
          }),
          (O[26] = j))
        : (j = O[26])
      let ed = et ? "absolute inset-y-0 end-0 z-20" : "relative"
      O[27] !== ed ? ((C = (0, o.A)("h-full min-h-0 min-w-0 shrink-0", ed)), (O[27] = ed), (O[28] = C)) : (C = O[28])
      let ec = !V,
        eu = !V
      ;(O[29] !== eo ? ((A = { width: eo }), (O[29] = eo), (O[30] = A)) : (A = O[30]),
        O[31] !== V || O[32] !== Z
          ? ((M = () => V && Z.jump(1)), (T = () => V && Z.jump(1)), (O[31] = V), (O[32] = Z), (O[33] = M), (O[34] = T))
          : ((M = O[33]), (T = O[34])),
        O[35] !== B
          ? ((P = (e) => {
              "Escape" !== e.key || e.defaultPrevented || (e.stopPropagation(), B())
            }),
            (O[35] = B),
            (O[36] = P))
          : (P = O[36]))
      let ep = "rtl" === (0, v.b)(Y.locale) ? "right" : "left",
        em = "glass" !== G
      return (
        O[37] !== en ||
        O[38] !== Y ||
        O[39] !== es ||
        O[40] !== ei ||
        O[41] !== q ||
        O[42] !== V ||
        O[43] !== X.width ||
        O[44] !== $ ||
        O[45] !== G ||
        O[46] !== Z ||
        O[47] !== ea ||
        O[48] !== ee
          ? ((E =
              V && es > ei
                ? {
                    hitArea: "glass" === G ? "inside" : void 0,
                    indicatorVisibility: "glass" === G ? "always" : void 0,
                    ariaLabel: Y.formatMessage({ id: "splitView.resize", defaultMessage: "Resize panels" }),
                    defaultSize: en,
                    maximumSize: es,
                    observePointerResize: q,
                    minimumSize: ei,
                    setSize: (e) => {
                      ;(Z.jump(1), ee.set((0, _.R2)(e, X.width, ea)))
                    },
                    onResizeEnd: (e) => {
                      ;(0, _.AU)({ mainContentWidth: X.width, storageKey: $, width: e, widthMode: ea })
                    },
                  }
                : void 0),
            (O[37] = en),
            (O[38] = Y),
            (O[39] = es),
            (O[40] = ei),
            (O[41] = q),
            (O[42] = V),
            (O[43] = X.width),
            (O[44] = $),
            (O[45] = G),
            (O[46] = Z),
            (O[47] = ea),
            (O[48] = ee),
            (O[49] = E))
          : (E = O[49]),
        O[50] !== R || O[51] !== ep || O[52] !== em || O[53] !== E || O[54] !== el
          ? ((N = (0, n.jsx)(b.p, {
              width: el,
              edge: ep,
              showBorder: em,
              showBackground: !1,
              resizer: E,
              children: R,
            })),
            (O[50] = R),
            (O[51] = ep),
            (O[52] = em),
            (O[53] = E),
            (O[54] = el),
            (O[55] = N))
          : (N = O[55]),
        O[56] !== z ||
        O[57] !== C ||
        O[58] !== ec ||
        O[59] !== eu ||
        O[60] !== A ||
        O[61] !== M ||
        O[62] !== T ||
        O[63] !== P ||
        O[64] !== N
          ? ((U = (0, n.jsx)(f.P.aside, {
              ref: j,
              className: C,
              "aria-label": z,
              "aria-hidden": ec,
              inert: eu,
              style: A,
              onPointerDownCapture: M,
              onKeyDownCapture: T,
              onKeyDown: P,
              children: N,
            })),
            (O[56] = z),
            (O[57] = C),
            (O[58] = ec),
            (O[59] = eu),
            (O[60] = A),
            (O[61] = M),
            (O[62] = T),
            (O[63] = P),
            (O[64] = N),
            (O[65] = U))
          : (U = O[65]),
        U
      )
    }
    var k = a("rsCP"),
      S = a("v0Gf"),
      j = a("slpy"),
      C = a("SOEF"),
      A = a("cC4N"),
      M = a("ndwI"),
      T = a("dVri"),
      P = a("IgxH"),
      E = a("G4E3"),
      N = a("Yn57"),
      U = a("Sm6l"),
      O = a("LMw7"),
      D = a("tWaO"),
      R = a("bVeK"),
      L = a("X3K1"),
      z = a("KIKs"),
      q = a("wq58"),
      B = a("uG2s"),
      $ = a("RbH1"),
      F = a("UOwN"),
      K = a("Adh7"),
      G = a("tv8P"),
      Y = a("uAks"),
      W = a("wuZu")
    function V(e) {
      let t,
        a,
        o,
        i,
        u,
        p,
        m,
        g,
        h,
        f = (0, l.c)(42),
        { document: x, onRevealSection: v, pageId: y } = e,
        b = (0, d.A)(),
        w = (0, s.useId)(),
        _ = (0, z.wv)(),
        [I, k] = (0, s.useState)(20),
        { data: S, isError: L, isPending: V, refetch: Z } = (0, r._U)(G.pageAttributionQuery$, y)
      if (V) {
        let e
        return (
          f[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsxs)("div", {
                className: "flex flex-col gap-5",
                role: "status",
                children: [
                  (0, n.jsx)("span", {
                    className: "sr-only",
                    children: (0, n.jsx)(c.A, {
                      id: "codex.space.page.attribution.loading",
                      defaultMessage: "Loading edit details\u2026",
                    }),
                  }),
                  [0, 1, 2].map(J),
                ],
              })),
              (f[0] = e))
            : (e = f[0]),
          e
        )
      }
      if (L) {
        let e, t, a, l
        return (
          f[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("p", {
                className: "text-sm text-secondary",
                role: "status",
                children: (0, n.jsx)(c.A, {
                  id: "codex.space.page.attribution.error",
                  defaultMessage: "Edit details unavailable",
                }),
              })),
              (f[1] = e))
            : (e = f[1]),
          f[2] !== Z
            ? ((t = () => {
                Z()
              }),
              (f[2] = Z),
              (f[3] = t))
            : (t = f[3]),
          f[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, n.jsx)(c.A, { id: "codex.space.page.attribution.retry", defaultMessage: "Try again" })),
              (f[4] = a))
            : (a = f[4]),
          f[5] !== t
            ? ((l = (0, n.jsxs)("div", {
                className: "flex flex-col items-start gap-3",
                children: [e, (0, n.jsx)(U.$, { color: "secondary", size: "compact", onClick: t, children: a })],
              })),
              (f[5] = t),
              (f[6] = l))
            : (l = f[6]),
          l
        )
      }
      if (null == S || 0 === Object.keys(S.blockAttributions).length) {
        let e
        return (
          f[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(O.Q, {
                children: (0, n.jsx)(c.A, {
                  id: "codex.space.page.attribution.empty",
                  defaultMessage: "No edit details available",
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
        f[10] !== x ||
        f[11] !== w ||
        f[12] !== b ||
        f[13] !== _ ||
        f[14] !== v ||
        f[15] !== I
      ) {
        let e,
          l,
          r = (t = Object.entries(S.blockAttributions).filter(Q).sort(X)).slice(0, I)
        f[22] !== b || f[23] !== _
          ? ((e = (e) => {
              let [, t] = e,
                { unit: a, value: n } = (0, D.w)(t.changed_at, _)
              return b.formatRelativeTime(-n, a, { numeric: "always", style: "narrow" })
            }),
            (f[22] = b),
            (f[23] = _),
            (f[24] = e))
          : (e = f[24])
        let s = r.map(e),
          d = (0, B.N)(r.map(H), S.blockAttributions),
          m = null == x ? void 0 : (0, C.crB)(x),
          g = null == m ? void 0 : new Set((0, C.bgG)(m))
        u = "flex flex-col gap-4"
        let h = `${w}-go-to-section`
        ;(f[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, n.jsx)(c.A, { id: "codex.space.page.activity.goToSection", defaultMessage: "Go to section" })),
            (f[25] = l))
          : (l = f[25]),
          f[26] !== h
            ? ((p = (0, n.jsx)("span", { id: h, className: "sr-only", children: l })), (f[26] = h), (f[27] = p))
            : (p = f[27]),
          (a = "flex flex-col gap-5"),
          f[28] !== b
            ? ((o = b.formatMessage({
                id: "codex.space.page.activity.recentSections",
                defaultMessage: "Recently edited sections",
              })),
              (f[28] = b),
              (f[29] = o))
            : (o = f[29]),
          (i = d.map((e) => {
            let t,
              a,
              { attribution: l, blockId: o, index: i, endIndex: d } = e,
              u =
                S.actorDisplays.find((e) => e.account_user_id === l.actor.account_user_id)?.display_name?.trim() ||
                void 0,
              p = "agent" === l.actor.actor_type && "o" === l.actor.agent_kind,
              h = "user" === l.actor.actor_type && null != u ? l.actor.account_user_id : null
            return (
              (t =
                "agent" === l.actor.actor_type && null != u
                  ? b.formatMessage($.P.authorizedAgent, { name: u })
                  : "user" === l.actor.actor_type && null != u
                    ? u
                    : b.formatMessage($.P.actor, { type: l.actor.actor_type })),
              (a = p
                ? (0, n.jsx)("img", {
                    className: "block size-6 object-contain",
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                    src: N,
                  })
                : "agent" === l.actor.actor_type
                  ? (0, n.jsx)(q.A, { "aria-hidden": !0 })
                  : (0, n.jsx)(K.Ve, {
                      accountUserId: h,
                      label: t,
                      children: (0, n.jsx)(F.Y, { accountUserId: h, name: t, size: "sm" }),
                    })),
              (0, n.jsx)(
                "li",
                {
                  className: "flex flex-col",
                  children: (0, n.jsx)(W.h, {
                    size: "compact",
                    avatar: a,
                    label: (0, n.jsx)(K.Ve, {
                      accountUserId: h,
                      label: t,
                      children: (0, n.jsx)("span", {
                        className: "block wrap-break-word whitespace-normal",
                        title: p ? void 0 : t,
                        children: p ? (0, n.jsx)(Y._, { ownerName: u }) : t,
                      }),
                    }),
                    trailingContent: null,
                    children: (0, n.jsx)("ul", {
                      className: "flex flex-col",
                      children: r.slice(i, d + 1).map((e, t) => {
                        let [a, l] = e,
                          o = null != m && g?.has(a) ? (0, C.wb3)(m, a) : void 0,
                          r = (function (e, t) {
                            if (null == e)
                              return t.formatMessage({
                                id: "codex.space.page.activity.unavailableSection",
                                defaultMessage: "Section unavailable",
                              })
                            let a = e
                                .replace(/^(?:[ \t]*\r?\n)+/, "")
                                .split("\n", 2)
                                .join("\n"),
                              n = (0, A.Y)(a, { extensions: [(0, T.T)()], mdastExtensions: [(0, M.C)()] }).children[0]
                            if (
                              n?.type === "table" ||
                              n?.type === "code" ||
                              n?.type === "thematicBreak" ||
                              n?.type === "html"
                            )
                              return t.formatMessage(
                                {
                                  id: "codex.space.page.activity.structuredSectionExcerpt",
                                  defaultMessage:
                                    "{type, select, table {Table} code {Code block} thematicBreak {Divider} html {HTML block} other {Section}}",
                                },
                                { type: n.type },
                              )
                            let l = n?.type === "paragraph" && 1 === n.children.length ? n.children[0] : void 0
                            if (l?.type === "image") {
                              let e = (0, C.mjb)(l.url)
                              if (null != e)
                                return (
                                  l.title?.trim() ||
                                  l.alt?.trim() ||
                                  t.formatMessage(
                                    {
                                      id: "codex.space.page.activity.mediaSection",
                                      defaultMessage:
                                        "{kind, select, audio {Audio} video {Video} bookmark {Bookmark} file {File} other {Attachment}}",
                                    },
                                    { kind: e.kind },
                                  )
                                )
                            }
                            let o = (0, P.i)(a.slice(0, n?.position?.end.offset))
                            return (
                              o ||
                              (n?.type === "paragraph" &&
                              n.children.some((e) => "link" === e.type && (0, E.I0)(e.url)?.kind === "page")
                                ? t.formatMessage({
                                    id: "codex.space.page.activity.pageLinkSection",
                                    defaultMessage: "Page link",
                                  })
                                : n?.type === "paragraph" && n.children.some((e) => "image" === e.type)
                                  ? t.formatMessage({
                                      id: "codex.space.page.activity.imageSection",
                                      defaultMessage: "Image",
                                    })
                                  : null == n
                                    ? t.formatMessage({
                                        id: "codex.space.page.activity.emptySection",
                                        defaultMessage: "Empty section",
                                      })
                                    : t.formatMessage({
                                        id: "codex.space.page.activity.sectionWithoutText",
                                        defaultMessage: "Section without text",
                                      }))
                            )
                          })(o?.text.toJSON(), b),
                          d = null != o && null != v,
                          u = s[i + t],
                          p = u === s[i + t - 1],
                          h = (0, n.jsxs)("span", {
                            className: "flex w-full items-start gap-3 py-1.5",
                            children: [
                              (0, n.jsx)("span", {
                                id: `${w}-${a}`,
                                className:
                                  "line-clamp-2 min-w-0 flex-1 text-start text-sm wrap-break-word whitespace-normal text-secondary",
                                title: r,
                                children: r,
                              }),
                              (0, n.jsxs)("span", {
                                className: "flex shrink-0 items-center gap-1 text-xs text-secondary",
                                children: [
                                  (0, n.jsx)("time", {
                                    className: "shrink-0 tabular-nums",
                                    dateTime: l.changed_at,
                                    title: b.formatDate(l.changed_at, { dateStyle: "medium", timeStyle: "short" }),
                                    children: (0, n.jsx)("span", { className: p ? "opacity-0" : void 0, children: u }),
                                  }),
                                  d
                                    ? (0, n.jsx)(R.$XR, {
                                        className:
                                          "opacity-0 group-hover/activity-section:opacity-100 group-focus-visible/activity-section:opacity-100",
                                      })
                                    : null,
                                ],
                              }),
                            ],
                          })
                        return (0, n.jsx)(
                          "li",
                          {
                            children: d
                              ? (0, n.jsx)(j.m, {
                                  content: (0, n.jsx)(c.A, {
                                    id: "codex.space.page.activity.goToSection",
                                    defaultMessage: "Go to section",
                                  }),
                                  children: (0, n.jsx)(U.$, {
                                    className: "group/activity-section w-full",
                                    color: "ghostMuted",
                                    size: "inline",
                                    onClick: () => v(a),
                                    "aria-labelledby": `${w}-go-to-section ${w}-${a}`,
                                    children: h,
                                  }),
                                })
                              : (0, n.jsx)("div", { className: "flex flex-col gap-1", children: h }),
                          },
                          a,
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
          (f[10] = x),
          (f[11] = w),
          (f[12] = b),
          (f[13] = _),
          (f[14] = v),
          (f[15] = I),
          (f[16] = t),
          (f[17] = a),
          (f[18] = o),
          (f[19] = i),
          (f[20] = u),
          (f[21] = p))
      } else ((t = f[16]), (a = f[17]), (o = f[18]), (i = f[19]), (u = f[20]), (p = f[21]))
      return (
        f[30] !== a || f[31] !== o || f[32] !== i
          ? ((m = (0, n.jsx)("ul", { className: a, "aria-label": o, children: i })),
            (f[30] = a),
            (f[31] = o),
            (f[32] = i),
            (f[33] = m))
          : (m = f[33]),
        f[34] !== t.length || f[35] !== I
          ? ((g =
              t.length > I
                ? (0, n.jsx)(U.$, {
                    className: "shrink-0 justify-center",
                    color: "ghost",
                    size: "compact",
                    onClick: () => k(I + 20),
                    children: (0, n.jsx)(c.A, {
                      id: "codex.space.page.activity.moreEdits",
                      defaultMessage: "Show more",
                    }),
                  })
                : null),
            (f[34] = t.length),
            (f[35] = I),
            (f[36] = g))
          : (g = f[36]),
        f[37] !== u || f[38] !== p || f[39] !== m || f[40] !== g
          ? ((h = (0, n.jsxs)("div", { className: u, children: [p, m, g] })),
            (f[37] = u),
            (f[38] = p),
            (f[39] = m),
            (f[40] = g),
            (f[41] = h))
          : (h = f[41]),
        h
      )
    }
    function H(e) {
      let [t] = e
      return t
    }
    function X(e, t) {
      let [, a] = e,
        [, n] = t
      return n.changed_at.localeCompare(a.changed_at)
    }
    function Q(e) {
      let [, t] = e
      return Number.isFinite(Date.parse(t.changed_at))
    }
    function J(e) {
      return (0, n.jsx)(
        "div",
        {
          "aria-hidden": !0,
          className: "flex flex-col",
          children: (0, n.jsx)(W.h, {
            size: "compact",
            avatar: (0, n.jsx)("div", {
              className: "size-6 shrink-0 overflow-hidden rounded-full",
              children: (0, n.jsx)(L.X, { size: "fill" }),
            }),
            label: (0, n.jsx)(L.X, { className: "w-1/2", size: "sm" }),
            trailingContent: null,
            children: (0, n.jsxs)("div", {
              className: "flex items-start gap-3",
              children: [
                (0, n.jsx)(L.P, { className: "min-w-0 flex-1", lines: 2, seed: `page-edits-${e}` }),
                (0, n.jsx)(L.X, { className: "w-12 shrink-0", size: "sm" }),
              ],
            }),
          }),
        },
        e,
      )
    }
    var Z = a("e1xH"),
      ee = a("uris"),
      et = a("xs0e"),
      ea = a("kK7d")
    function en(e) {
      let t,
        a,
        o,
        i,
        u,
        m,
        g,
        h,
        f,
        x,
        v,
        y,
        b = (0, l.c)(46),
        { pageId: w, active: _, documentType: I } = e,
        k = void 0 === I ? "page" : I,
        S = (0, d.A)(),
        j = (0, p.tF)(),
        [C, A] = (0, s.useState)(20),
        M = (0, r.Ul)(G.spaceAccountId$),
        T = (void 0 === _ || _) && j && null != M
      ;(b[0] !== w
        ? ((t = (e) => {
            let { pageParam: t, signal: a } = e
            return ea.CodexRequest.safeGet("/pages/{page_id}/views", {
              parameters: { path: { page_id: w }, query: { cursor: t || void 0, limit: 20 } },
              signal: a,
            })
          }),
          (b[0] = w),
          (b[1] = t))
        : (t = b[1]),
        b[2] !== M || b[3] !== w
          ? ((a = ["space", "page-view-history", M, w]), (b[2] = M), (b[3] = w), (b[4] = a))
          : (a = b[4]),
        b[5] !== T || b[6] !== t || b[7] !== a
          ? ((o = {
              enabled: T,
              getNextPageParam: ed,
              initialPageParam: "",
              queryFn: t,
              queryKey: a,
              retry: !1,
              staleTime: 0,
            }),
            (b[5] = T),
            (b[6] = t),
            (b[7] = a),
            (b[8] = o))
          : (o = b[8]))
      let {
        data: P,
        fetchNextPage: E,
        hasNextPage: N,
        isError: O,
        isFetchingNextPage: D,
        isFetchNextPageError: R,
        isPending: L,
        refetch: z,
      } = (0, ee.q)(o)
      if (
        b[9] !== P?.pages ||
        b[10] !== P?.pages.flatMap ||
        b[11] !== k ||
        b[12] !== S ||
        b[13] !== O ||
        b[14] !== L ||
        b[15] !== z ||
        b[16] !== C
      ) {
        let e, t
        ;((f = P?.pages.flatMap(es)),
          b[23] !== P?.pages || b[24] !== P?.pages.flatMap
            ? ((e = new Map(P?.pages.flatMap(ei))), (b[23] = P?.pages), (b[24] = P?.pages.flatMap), (b[25] = e))
            : (e = b[25]))
        let a = e
        b[26] !== S
          ? ((t = S.formatMessage({
              id: "codex.space.page.viewHistory.unknownPerson",
              defaultMessage: "Unknown person",
            })),
            (b[26] = S),
            (b[27] = t))
          : (t = b[27])
        let l = t
        ;((m = "flex flex-col gap-4"),
          b[28] !== L
            ? ((g = L
                ? (0, n.jsxs)("div", {
                    role: "status",
                    children: [
                      (0, n.jsx)("span", {
                        className: "sr-only",
                        children: (0, n.jsx)(c.A, {
                          id: "codex.space.page.viewHistory.loading",
                          defaultMessage: "Loading\u2026",
                        }),
                      }),
                      (0, n.jsx)("div", {
                        "aria-hidden": !0,
                        className: "flex flex-col gap-2",
                        children: (0, n.jsx)("div", {
                          className: "flex flex-col",
                          children: ["w-2/3", "w-1/2", "w-3/4"].map(eo),
                        }),
                      }),
                    ],
                  })
                : null),
              (b[28] = L),
              (b[29] = g))
            : (g = b[29]),
          (h =
            O && null == f
              ? (0, n.jsxs)("div", {
                  className: "flex items-center justify-between gap-3",
                  children: [
                    (0, n.jsx)("span", {
                      className: "text-sm text-codex-description",
                      children: (0, n.jsx)(c.A, {
                        id: "codex.space.page.viewHistory.error",
                        defaultMessage: "Could not load view history",
                      }),
                    }),
                    (0, n.jsx)(U.$, {
                      color: "secondary",
                      size: "compact",
                      onClick: () => {
                        z()
                      },
                      children: (0, n.jsx)(c.A, {
                        id: "codex.space.page.viewHistory.retry",
                        defaultMessage: "Try again",
                      }),
                    }),
                  ],
                })
              : null),
          (i =
            f?.length === 0
              ? (0, n.jsx)("span", {
                  className: "text-sm text-codex-description",
                  children: (0, n.jsx)(c.A, {
                    id: "codex.space.page.viewHistory.empty",
                    defaultMessage: "No views yet",
                  }),
                })
              : null),
          (u =
            null != f && f.length > 0
              ? (0, n.jsx)("div", {
                  className: "flex flex-col",
                  role: "list",
                  "aria-label": S.formatMessage(
                    {
                      id: "codex.space.page.viewHistory.viewers.byDocumentType",
                      defaultMessage:
                        "{documentType, select, granola_presentation {Slide viewers} granola_workbook {Sheet viewers} other {Page viewers}}",
                    },
                    { documentType: k },
                  ),
                  children: f.slice(0, C).map((e) => {
                    let t = a.has(e.account_user_id) ? e.account_user_id : null,
                      o = a.get(e.account_user_id) ?? l
                    return (0, n.jsx)(
                      "div",
                      {
                        role: "listitem",
                        children: (0, n.jsx)(W.h, {
                          size: "compact",
                          avatar: (0, n.jsx)(K.Ve, {
                            accountUserId: t,
                            label: o,
                            children: (0, n.jsx)(F.Y, { accountUserId: t, name: o, size: "sm" }),
                          }),
                          label: (0, n.jsx)(K.Ve, {
                            accountUserId: t,
                            label: o,
                            children: (0, n.jsx)("span", { title: o, children: o }),
                          }),
                          trailingContent: (0, n.jsx)("time", {
                            className: "shrink-0 text-xs text-secondary tabular-nums",
                            dateTime: e.last_viewed_at,
                            title: S.formatDate(e.last_viewed_at, { dateStyle: "medium", timeStyle: "short" }),
                            children: (0, n.jsx)(et.A, { dateString: e.last_viewed_at, format: "relative" }),
                          }),
                        }),
                      },
                      e.account_user_id,
                    )
                  }),
                })
              : null),
          (b[9] = P?.pages),
          (b[10] = P?.pages.flatMap),
          (b[11] = k),
          (b[12] = S),
          (b[13] = O),
          (b[14] = L),
          (b[15] = z),
          (b[16] = C),
          (b[17] = i),
          (b[18] = u),
          (b[19] = m),
          (b[20] = g),
          (b[21] = h),
          (b[22] = f))
      } else ((i = b[17]), (u = b[18]), (m = b[19]), (g = b[20]), (h = b[21]), (f = b[22]))
      return (
        b[30] !== R
          ? ((x = R
              ? (0, n.jsx)("p", {
                  className: "text-sm text-secondary",
                  role: "status",
                  children: (0, n.jsx)(c.A, {
                    id: "codex.space.page.viewHistory.moreError",
                    defaultMessage: "Couldn\u2019t load more views. Try again below.",
                  }),
                })
              : null),
            (b[30] = R),
            (b[31] = x))
          : (x = b[31]),
        b[32] !== E || b[33] !== N || b[34] !== D || b[35] !== f || b[36] !== C
          ? ((v =
              (null != f && f.length > C) || N
                ? (0, n.jsx)(U.$, {
                    className: "shrink-0 justify-center",
                    color: "ghost",
                    loading: D,
                    size: "compact",
                    onClick: () => {
                      null != f && f.length > C
                        ? A(f.length)
                        : E().then((e) => {
                            e.isError || A(el)
                          })
                    },
                    children: (0, n.jsx)(c.A, {
                      id: "codex.space.page.viewHistory.showMoreViewers",
                      defaultMessage: "Show more viewers",
                    }),
                  })
                : null),
            (b[32] = E),
            (b[33] = N),
            (b[34] = D),
            (b[35] = f),
            (b[36] = C),
            (b[37] = v))
          : (v = b[37]),
        b[38] !== i || b[39] !== u || b[40] !== x || b[41] !== v || b[42] !== m || b[43] !== g || b[44] !== h
          ? ((y = (0, n.jsxs)("div", { className: m, children: [g, h, i, u, x, v] })),
            (b[38] = i),
            (b[39] = u),
            (b[40] = x),
            (b[41] = v),
            (b[42] = m),
            (b[43] = g),
            (b[44] = h),
            (b[45] = y))
          : (y = b[45]),
        y
      )
    }
    function el(e) {
      return e + 20
    }
    function eo(e) {
      return (0, n.jsx)(
        W.h,
        {
          size: "compact",
          avatar: (0, n.jsx)("span", {
            className: "size-6 shrink-0 overflow-hidden rounded-full",
            children: (0, n.jsx)(L.X, { as: "span", size: "fill" }),
          }),
          label: (0, n.jsx)(L.X, { className: e, size: "sm" }),
          trailingContent: (0, n.jsx)(L.X, { className: "w-12 shrink-0", size: "sm" }),
        },
        e,
      )
    }
    function ei(e) {
      return (e.actor_displays ?? []).map(er)
    }
    function er(e) {
      return [e.account_user_id, e.display_name]
    }
    function es(e) {
      return e.items
    }
    function ed(e) {
      return e.next_cursor ?? void 0
    }
    var ec = a("mkvQ"),
      eu = a("OWtl"),
      ep = a("dN0a"),
      em = a("j9wQ"),
      eg = a("GoVO")
    function eh(e) {
      let t,
        a,
        u,
        p,
        m,
        g,
        h,
        f = (0, l.c)(35),
        {
          animation: x,
          open: v,
          documentType: y,
          versions: b,
          recovery: w,
          canViewEdits: _,
          canViewHistory: j,
          document: C,
          headerOverlay: A,
          view: M,
          onViewChange: T,
          onClose: P,
          onRevealSection: E,
          pageId: N,
        } = e,
        U = void 0 === v || v,
        O = void 0 === y ? "page" : y,
        D = void 0 === _ || _,
        R = void 0 !== A && A,
        L = (0, r.gh)(eu.u),
        z = (0, d.A)(),
        q = (0, r.Ul)("page" === O && Z.OJ),
        B = (0, s.useId)(),
        $ = (0, s.useRef)(null),
        F = (0, s.useRef)(null),
        K = (0, r.Ul)(ep.LT)
      ;(f[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = ["views", "edits", "versions", "recovery"]), (f[0] = t))
        : (t = f[0]),
        f[1] !== D || f[2] !== j || f[3] !== w || f[4] !== q || f[5] !== b
          ? ((a = t.filter(
              (e) =>
                ("views" === e && j) ||
                ("edits" === e && D) ||
                ("versions" === e && null != b) ||
                ("recovery" === e && q && null != w),
            )),
            (f[1] = D),
            (f[2] = j),
            (f[3] = w),
            (f[4] = q),
            (f[5] = b),
            (f[6] = a))
          : (a = f[6]))
      let G = a,
        Y = G.includes(M) ? M : G[0]
      f[7] !== M ? ((u = [M]), (f[7] = M), (f[8] = u)) : (u = f[8])
      let [W, H] = (0, s.useState)(u)
      null == Y || W.includes(Y) || H([...W, Y])
      let X = null != T && G.length > 1
      return (f[9] !== G
        ? ((p = () => {
            if (null != F.current && !G.includes(F.current)) {
              F.current = null
              let e = $.current?.querySelector(
                '[role="tab"][aria-selected="true"], [data-page-activity-view]:not([hidden]) :is([role="tabpanel"], [role="region"])',
              )
              e?.focus()
            }
          }),
          (m = [G]),
          (f[9] = G),
          (f[10] = p),
          (f[11] = m))
        : ((p = f[10]), (m = f[11])),
      (0, s.useLayoutEffect)(p, m),
      null == Y)
        ? null
        : (f[12] !== x ||
          f[13] !== G ||
          f[14] !== K ||
          f[15] !== X ||
          f[16] !== C ||
          f[17] !== O ||
          f[18] !== R ||
          f[19] !== B ||
          f[20] !== z ||
          f[21] !== P ||
          f[22] !== E ||
          f[23] !== T ||
          f[24] !== U ||
          f[25] !== N ||
          f[26] !== w ||
          f[27] !== q ||
          f[28] !== L ||
          f[29] !== Y ||
          f[30] !== b ||
          f[31] !== W
            ? ((g =
                U &&
                (0, n.jsx)(I, {
                  animation: x,
                  defaultWidth: q ? 320 : void 0,
                  label: z.formatMessage(ef.title, { documentType: O }),
                  observePointerResize: "page" === O ? (e) => (0, ec.j)(L, e) : void 0,
                  onClose: P,
                  storageKey: "pages:activity-panel-width",
                  variant: "glass",
                  children: (0, n.jsx)("div", {
                    ref: $,
                    "data-page-activity-panel": !0,
                    className: (0, o.A)("h-full min-h-0", R && "pt-[var(--viewer-header-height)]"),
                    onFocusCapture: (e) => {
                      F.current =
                        G.find(
                          (t) =>
                            e.target.id === `${B}-${t}-tab` ||
                            null != e.target.closest(`[data-page-activity-view="${t}"]`),
                        ) ?? null
                    },
                    onBlurCapture: (e) => {
                      e.currentTarget.contains(e.relatedTarget) || (F.current = null)
                    },
                    children: (0, n.jsx)("div", {
                      className: "flex h-full min-h-0 p-2 pt-px",
                      children: (0, n.jsxs)(k.kW, {
                        className:
                          "@container/app-shell-detail-panel flex min-h-0 flex-1 flex-col overflow-hidden text-default",
                        variant: "island",
                        children: [
                          (0, n.jsx)(em.xx, {
                            title: (0, n.jsx)(c.A, { ...ef.title, values: { documentType: O } }),
                            closeLabel: z.formatMessage(
                              {
                                id: "codex.space.page.activity.close.byDocumentType",
                                defaultMessage:
                                  "{documentType, select, granola_presentation {Close slide activity} granola_workbook {Close sheet activity} other {Close page activity}}",
                              },
                              { documentType: O },
                            ),
                            onClose: P,
                          }),
                          X &&
                            (0, n.jsx)("div", {
                              className: "flex shrink-0 flex-col gap-2 px-toolbar pb-3",
                              children: (0, n.jsx)(eg.J, {
                                ariaLabel: z.formatMessage(ef.title, { documentType: O }),
                                fullWidth: "page" === O,
                                onSelect: T,
                                selectedKey: Y,
                                tabs: G.map((e) => ({
                                  key: e,
                                  name: (0, n.jsx)(c.A, { ...ef[e] }),
                                  panelId: `${B}-${e}`,
                                })),
                              }),
                            }),
                          G.map((e) =>
                            (0, n.jsx)(
                              "div",
                              {
                                className: Y === e ? "flex min-h-0 flex-1 flex-col" : "hidden",
                                hidden: Y !== e,
                                inert: Y !== e,
                                "data-page-activity-view": e,
                                children:
                                  "versions" === e || "recovery" === e
                                    ? (0, n.jsx)("div", {
                                        id: `${B}-${e}`,
                                        className: "flex min-h-0 flex-1 flex-col",
                                        role: X ? "tabpanel" : "region",
                                        "aria-labelledby": X ? `${B}-${e}-tab` : void 0,
                                        "aria-label": X ? void 0 : z.formatMessage(ef[e]),
                                        tabIndex: 0,
                                        children: W.includes(e) && ("recovery" === e ? w : b),
                                      })
                                    : (0, n.jsx)(S.Q, {
                                        className: "relative grid min-h-0 flex-1 overflow-hidden",
                                        fade: "mask",
                                        scrollClassName:
                                          "min-h-0 overflow-y-auto overscroll-contain px-toolbar py-3 focus-visible:outline-2 focus-visible:outline-ring",
                                        scrollProps: {
                                          id: `${B}-${e}`,
                                          role: X ? "tabpanel" : "region",
                                          "aria-labelledby": X ? `${B}-${e}-tab` : void 0,
                                          "aria-label": X ? void 0 : z.formatMessage(ef[e]),
                                          tabIndex: 0,
                                          style: { scrollPaddingBottom: K },
                                        },
                                        children: (0, n.jsx)("div", {
                                          style: { paddingBottom: K },
                                          children:
                                            W.includes(e) &&
                                            ("views" === e
                                              ? (0, n.jsx)(en, { documentType: O, active: "views" === Y, pageId: N })
                                              : (0, n.jsx)(V, { document: C, onRevealSection: E, pageId: N })),
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
              (f[12] = x),
              (f[13] = G),
              (f[14] = K),
              (f[15] = X),
              (f[16] = C),
              (f[17] = O),
              (f[18] = R),
              (f[19] = B),
              (f[20] = z),
              (f[21] = P),
              (f[22] = E),
              (f[23] = T),
              (f[24] = U),
              (f[25] = N),
              (f[26] = w),
              (f[27] = q),
              (f[28] = L),
              (f[29] = Y),
              (f[30] = b),
              (f[31] = W),
              (f[32] = g))
            : (g = f[32]),
          f[33] !== g ? ((h = (0, n.jsx)(i.N, { propagate: !0, children: g })), (f[33] = g), (f[34] = h)) : (h = f[34]),
          h)
    }
    let ef = (0, u.YK)({
      title: {
        id: "codex.space.page.activity.title.byDocumentType",
        defaultMessage:
          "{documentType, select, granola_presentation {Slide activity} granola_workbook {Sheet activity} other {Page activity}}",
      },
      views: { id: "codex.space.page.activity.views", defaultMessage: "Views" },
      edits: { id: "codex.space.page.activity.edits", defaultMessage: "Edits" },
      versions: { id: "codex.space.page.activity.versions", defaultMessage: "Versions" },
      recovery: { id: "codex.space.page.activity.recovery", defaultMessage: "Recovery" },
    })
  },
  TGoC(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("qmMi"),
      i = a("SPnB"),
      r = a("dJBt"),
      s = a("OWtl"),
      d = a("NRR1"),
      c = a("tv8P")
    function u(e) {
      let t,
        a,
        u,
        m,
        g = (0, l.c)(18),
        { directPermissionsPending: h, pageId: f } = e,
        x = (0, o.gh)(s.u),
        v = (0, o.Ul)(d.DO),
        y = (0, o.Ul)(i.chatGptAuthenticatedUserId$),
        { accountUserId: b } = (0, o.Ul)(i.PO)
      g[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (g[0] = t)) : (t = g[0])
      let { data: w, refetch: _ } = (0, o._U)(c.spacePageAncestryQuery$, f, t)
      return null != v &&
        (h ||
          (w?.metadata.access.can_read === !0 &&
            null == w.metadata.deleted_at &&
            !1 === w.metadata.display_metadata_included))
        ? (g[1] !== v || g[2] !== b || g[3] !== h || g[4] !== f || g[5] !== y
            ? ((a = JSON.stringify([v, y, b, f, h])),
              (g[1] = v),
              (g[2] = b),
              (g[3] = h),
              (g[4] = f),
              (g[5] = y),
              (g[6] = a))
            : (a = g[6]),
          g[7] !== v || g[8] !== b || g[9] !== h || g[10] !== f || g[11] !== _ || g[12] !== x || g[13] !== y
            ? ((u = () => {
                if (
                  x.get(d.DO) === v &&
                  x.get(i.chatGptAuthenticatedUserId$) === y &&
                  x.get(i.PO).accountUserId === b
                ) {
                  if (h) return void _({ cancelRefetch: !1 })
                  x.query.fetch(c.spacePageAncestryQuery$, f).catch(p)
                }
              }),
              (g[7] = v),
              (g[8] = b),
              (g[9] = h),
              (g[10] = f),
              (g[11] = _),
              (g[12] = x),
              (g[13] = y),
              (g[14] = u))
            : (u = g[14]),
          g[15] !== a || g[16] !== u
            ? ((m = (0, n.jsx)(r.X, { requireVisibleAtPaint: !0, onPaint: u }, a)),
              (g[15] = a),
              (g[16] = u),
              (g[17] = m))
            : (m = g[17]),
          m)
        : null
    }
    function p() {}
    a.d(
      t,
      {},
      {
        J: function (e) {
          let t,
            a,
            i,
            r,
            s = (0, l.c)(6),
            { pageId: d } = e
          s[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (s[0] = t)) : (t = s[0])
          let { missingAncestorPageId: p } = (0, o._U)(c.spacePageContext$, d, t)
          s[1] === Symbol.for("react.memo_cache_sentinel") ? ((a = { enabled: !1 }), (s[1] = a)) : (a = s[1])
          let { data: m } = (0, o._U)(c.spacePageAncestryQuery$, d, a)
          s[2] === Symbol.for("react.memo_cache_sentinel") ? ((i = { enabled: !1 }), (s[2] = i)) : (i = s[2])
          let { data: g } = (0, o._U)(c.spacePageQuery$, d, i),
            h =
              g?.capabilities_pending === !0 &&
              !0 !== g.metadata.capabilities_pending &&
              g.metadata.access.can_read &&
              !g.metadata.view_only &&
              null == g.metadata.deleted_at,
            f = h || m?.metadata.display_metadata_included === !1 ? d : (p ?? d)
          return (
            s[3] !== h || s[4] !== f
              ? ((r = (0, n.jsx)(u, { directPermissionsPending: h, pageId: f })), (s[3] = h), (s[4] = f), (s[5] = r))
              : (r = s[5]),
            r
          )
        },
      },
    )
  },
  uG2s(e, t, a) {
    a.d(
      t,
      {},
      {
        N: function (e, t, a) {
          let n,
            l = []
          for (let [o, i] of e.entries()) {
            let e = t[i],
              r = null == e ? 0 / 0 : Date.parse(e.changed_at)
            if (null == e || !Number.isFinite(r)) {
              n = void 0
              continue
            }
            let s = e.actor,
              d = n?.attribution.actor,
              c = s.account_user_id?.trim()
            if (
              null != n &&
              o !== a &&
              s.actor_type === d?.actor_type &&
              ("agent" !== s.actor_type || ("o" === s.agent_kind) == ("o" === d.agent_kind)) &&
              ("system" === s.actor_type || (c && c === d.account_user_id?.trim()))
            ) {
              ;((n.endIndex = o), r > Date.parse(n.attribution.changed_at) && (n.attribution = e))
              continue
            }
            let u = { attribution: e, blockId: i, blockChangedAt: e.changed_at, endIndex: o, index: o }
            ;(l.push(u), (n = u))
          }
          return l
        },
      },
    )
  },
  RbH1(e, t, a) {
    let n = (0, a("Qgfj").YK)({
      authorizedAgent: {
        id: "codex.space.page.blockAttribution.authorizedAgent",
        defaultMessage: "{name}\u2019s ChatGPT",
      },
      actor: {
        id: "codex.space.page.blockAttribution.actor",
        defaultMessage:
          "{type, select, agent {ChatGPT} system {System} user {A collaborator} other {Another contributor}}",
      },
    })
    a.d(t, {}, { P: n })
  },
  xeTY(e, t, a) {
    a.d(t, { x: () => Z })
    var n = a("ABep"),
      l = a("QosV"),
      o = a("qmMi"),
      i = a("zd8w"),
      r = a("Wf1j"),
      s = a("Qgfj"),
      d = a("oyxz"),
      c = a("Ywss"),
      u = a("n5iL"),
      p = a("EFj1"),
      m = a("rmk3"),
      g = a("bqtn"),
      h = a("bVeK"),
      f = a("Bbed"),
      x = a("UxN3"),
      v = a("em67"),
      y = a("rpnz"),
      b = a("pKVr"),
      w = a("cJbq")
    function _(e) {
      let t,
        a,
        o = (0, l.c)(6),
        { canWrite: i, editorView: r, isPageActive: s } = e
      return (
        o[0] !== i || o[1] !== r || o[2] !== s
          ? ((t = w.cW.map((e) => (0, n.jsx)(I, { canWrite: i, command: e, editorView: r, isPageActive: s }, e.id))),
            (o[0] = i),
            (o[1] = r),
            (o[2] = s),
            (o[3] = t))
          : (t = o[3]),
        o[4] !== t ? ((a = (0, n.jsx)(n.Fragment, { children: t })), (o[4] = t), (o[5] = a)) : (a = o[5]),
        a
      )
    }
    function I(e) {
      let t,
        a,
        n,
        o,
        i = (0, l.c)(12),
        { canWrite: r, command: s, editorView: d, isPageActive: c } = e
      return (
        i[0] !== s.style || i[1] !== d
          ? ((t = () => (0, w.VN)(d, s.style)), (i[0] = s.style), (i[1] = d), (i[2] = t))
          : (t = i[2]),
        i[3] !== d || i[4] !== c
          ? ((a = (e) => !d.isDestroyed && d.editable && !d.composing && c(e)), (i[3] = d), (i[4] = c), (i[5] = a))
          : (a = i[5]),
        i[6] !== d ? ((n = () => !!d.hasFocus() && void 0), (i[6] = d), (i[7] = n)) : (n = i[7]),
        i[8] !== r || i[9] !== a || i[10] !== n
          ? ((o = { enabled: r, isActive: a, keyboardHandler: n }), (i[8] = r), (i[9] = a), (i[10] = n), (i[11] = o))
          : (o = i[11]),
        (0, p.K)(s.id, t, o),
        null
      )
    }
    var k = a("Wj4L"),
      S = a("zTDg"),
      j = a("e1xH"),
      C = a("Um9I"),
      A = a("NobM"),
      M = a("eLR8"),
      T = a("sO5n"),
      P = a("M14h"),
      E = a("qLyg"),
      N = a("sX33"),
      U = a("LqIC"),
      O = a("gc8z"),
      D = a("qyu6")
    let R = (0, s.YK)({
      enable: { id: "codex.pages.skills.action.enable", defaultMessage: "Enable as skill" },
      readOnly: { id: "codex.pages.skills.action.readOnly", defaultMessage: "This Page is a skill" },
    })
    var L = a("SPnB"),
      z = a("SGsN"),
      q = a("svjy"),
      B = a("NRR1"),
      $ = a("EqWS"),
      F = a("kq7t"),
      K = a("tv8P"),
      G = a("OWtl"),
      Y = a("kK7d")
    let W = (0, o.c4)(G.u, (e, { get: t, scope: a }) => {
      let n = t(B.DO),
        l = t(L.chatGptAuthenticatedUserId$)
      return {
        mutationKey: ["space", "page-skill", n, l, e],
        mutationFn: async ({ metadata: e, enabled: t }) => {
          if (null == n || !e.access.can_write) return
          let o = a.get(K.spacePageContext$, e.page_id)
          if (t && (!1 !== o.isSpaceRoot || void 0 === o.space)) return
          let i = (0, B.hI)(a, n, l),
            r = async (t) => {
              ;(i.signal.throwIfAborted(),
                await Promise.all([
                  a.query.cancel(K.spacePagesQuery$, { exact: !0 }),
                  a.query.cancel(K.spacePageQuery$, e.page_id, { exact: !0 }),
                ]),
                i.signal.throwIfAborted(),
                (0, $.oC)(
                  a,
                  n,
                  (a) => (a.page_id === e.page_id && a.namespace !== t ? { ...a, namespace: t } : a),
                  void 0,
                ))
            }
          try {
            ;(i.signal.throwIfAborted(), await r(t ? "skill" : null))
            let n = await Y.CodexRequest.safePatch("/pages/{page_id}/metadata", {
              parameters: { path: { page_id: e.page_id } },
              requestBody: { skill: { enabled: t } },
              signal: i.signal,
            })
            ;(i.signal.throwIfAborted(), (0, F.applyPageRealtimeMetadata)(a, n.metadata), await r(n.metadata.namespace))
          } catch {
            i.signal.aborted ||
              (await r(e.namespace),
              a
                .get(z.Id)
                .danger(
                  a
                    .get(q.g)
                    .formatMessage({
                      id: "codex.pages.skills.updateFailed",
                      defaultMessage: "Couldn\u2019t update this Page\u2019s skill status",
                      description: "Error toast when enabling or disabling a Page as a reusable skill fails",
                    }),
                  { errorAnalytics: { toastId: "codex.pages.skills.updateFailed" } },
                ),
              await (0, K.fetchSpacePageMetadata)(a, e.page_id, { accountId: n, userId: l, signal: i.signal })
                .then(
                  ({ metadata: e }) => (
                    i.signal.throwIfAborted(),
                    (0, F.applyPageRealtimeMetadata)(a, e),
                    r(e.namespace)
                  ),
                )
                .catch(() => {}))
          } finally {
            i.stop()
          }
        },
      }
    })
    var V = a("D0Qt"),
      H = a("Emb5"),
      X = a("I0MT"),
      Q = a("OMIV")
    let J = (0, f._)(async () => (await a.e(427174).then(a.bind(a, "kDvk"))).SpaceArchiveConfirmationDialog)
    function Z(e) {
      let t,
        a,
        f,
        w,
        I,
        L,
        z,
        q,
        B,
        $,
        F,
        Y,
        Z,
        et,
        ea,
        en,
        el,
        eo,
        ei,
        er,
        es,
        ed,
        ec = (0, l.c)(125),
        {
          children: eu,
          editorView: ep,
          editorElement: em,
          getMarkdown: eg,
          metadata: eh,
          onAttributionChange: ef,
          onFloatingCommentsChange: ex,
          onOpenBack: ev,
          onOpenActivity: ey,
          isScratch: eb,
          isSpaceHome: ew,
          showUnavailableActions: e_,
          includeDownload: eI,
          onShare: ek,
          onRename: eS,
          creationItems: ej,
          title: eC,
          pageId: eA,
          showAttribution: eM,
          showFloatingComments: eT,
          shortcutScope: eP,
          renderMenu: eE,
          isVisible: eN,
        } = e,
        eU = void 0 !== eb && eb,
        eO = void 0 !== ew && ew,
        eD = void 0 !== e_ && e_,
        eR = void 0 === eI || eI,
        eL = void 0 !== eM && eM,
        ez = void 0 === eT || eT,
        eq = void 0 === eP ? "page" : eP,
        eB = void 0 === eN || eN,
        e$ = (0, o.gh)(G.u)
      ;((0, o.Ul)(D.$),
        ec[0] !== eh ? ((t = null != eh && "page" === (0, k.th)(eh)), (ec[0] = eh), (ec[1] = t)) : (t = ec[1]))
      let eF = t,
        { exportToGoogleDrive: eK, connectDialog: eG } = (0, T.i)(eB && eR && !eU && eF)
      ec[2] !== eA
        ? ((a = new URLSearchParams({ target: "page", page_id: eA })), (ec[2] = eA), (ec[3] = a))
        : (a = ec[3])
      let eY = `?${a}`
      ec[4] !== eY ? ((f = { pathname: "/codex/deeplink", search: eY }), (ec[4] = eY), (ec[5] = f)) : (f = ec[5])
      let eW = (0, c.$P)(f),
        eV = (0, i.useRef)(null),
        [eH, eX] = (0, i.useState)(!1),
        eQ = (0, o._U)(eH ? N.og : void 0, eA),
        eJ = (0, r.A)(),
        eZ = (0, o.Ul)(K.spaceAccountId$)
      ec[6] !== eA ? ((w = (0, y.sD)(eA)), (ec[6] = eA), (ec[7] = w)) : (w = ec[7])
      let e1 = w,
        e0 = (0, o._U)(K.spacePageContext$, eA),
        { isSpaceRoot: e2, space: e3 } = e0,
        e4 = (0, o._U)(Q.JW, "889208228"),
        e5 = (0, o._U)(e4 && eB && !eU && !e1 ? W : null, eA),
        e6 = (0, o._U)(Q.JW, "4043188516"),
        e7 = (0, o._U)(!e6 || !eB || eU || e1 || eO || eh?.access.can_write !== !0 ? null : X.ZQ, eA),
        e8 = (0, o._U)(null == e7 ? null : X.kS, eA)
      ec[8] !== eh || ec[9] !== e0 || ec[10] !== e5
        ? ((I =
            null == e5 || null == eh
              ? []
              : (function ({ metadata: e, context: t, saving: a, onSelect: n }) {
                  var l
                  let o, i
                  return !1 === t.isSpaceRoot &&
                    void 0 !== t.space &&
                    ((i = "skill" === (l = e).namespace),
                    l.access.can_read &&
                      ((l.layout ?? "document") === "document" || i) &&
                      (null == l.namespace || i) &&
                      (null == l.document_type || "page" === l.document_type) &&
                      null == l.site_project_id &&
                      (l.access.can_write || i) &&
                      !0)
                    ? ((o =
                        "skill" !== e.namespace
                          ? R.enable
                          : e.access.can_write
                            ? (0, s.zR)({ id: "codex.pages.skills.menu.disable", defaultMessage: "Disable as skill" })
                            : R.readOnly),
                      [
                        {
                          id: "page-skill",
                          ...(0, A.XB)({ 16: h.Mjt, 20: h.zr3 }),
                          enabled: e.access.can_write && !a,
                          message: o,
                          onSelect: n,
                        },
                      ])
                    : []
                })({
                  metadata: eh,
                  context: e0,
                  saving: e5.isPending,
                  onSelect: () => e5.mutate({ metadata: eh, enabled: "skill" !== eh.namespace }),
                })),
          (ec[8] = eh),
          (ec[9] = e0),
          (ec[10] = e5),
          (ec[11] = I))
        : (I = ec[11])
      let e9 = I,
        te = (0, o.Ul)(K.pinnedSpacePageIds$),
        tt = (0, o.Ul)(K.pinnedSpaceIds$),
        ta = (0, o.Ul)(j.Xk)
      ec[12] === Symbol.for("react.memo_cache_sentinel") ? ((L = { enabled: !1 }), (ec[12] = L)) : (L = ec[12])
      let tn = (0, o._U)(eH && ta ? K.spacePageQuery$ : void 0, eA, L),
        tl = (0, o._U)(eH && ta ? U.T1 : void 0, eA),
        to =
          ta &&
          eh?.access.can_read === !0 &&
          (tn?.data?.capabilities_pending === !0 ||
            !0 === eh.capabilities_pending ||
            ("completed" === tl && tn?.isFetching === !0)),
        ti = eB && !eU && !e1 && (!0 === e2 || ta) && e3?.backing_type === "drive"
      ec[13] !== ti ? ((z = { enabled: ti }), (ec[13] = ti), (ec[14] = z)) : (z = ec[14])
      let tr = (0, o._U)(b.t5, e3?.id ?? "", z),
        ts = eB && !0 === e2
      ec[15] !== ts ? ((q = { enabled: ts }), (ec[15] = ts), (ec[16] = q)) : (q = ec[16])
      let td = (0, o._U)(C.jy, eh ?? eA, q),
        [tc, tu] = (0, i.useState)(null),
        [tp, tm] = (0, i.useState)(null)
      ec[17] !== e1 || ec[18] !== eU || ec[19] !== e2 || ec[20] !== eh
        ? ((B = !eU && !e1 && (0, A.un)(eh) && !1 === e2),
          (ec[17] = e1),
          (ec[18] = eU),
          (ec[19] = e2),
          (ec[20] = eh),
          (ec[21] = B))
        : (B = ec[21])
      let tg = B
      ec[22] !== eA || ec[23] !== te
        ? (($ = te.includes(eA)), (ec[22] = eA), (ec[23] = te), (ec[24] = $))
        : ($ = ec[24])
      let th = $
      ec[25] !== th || ec[26] !== e2 || ec[27] !== tt || ec[28] !== e3
        ? ((F = (e2 && null != e3 && tt.includes(e3.id)) || th),
          (ec[25] = th),
          (ec[26] = e2),
          (ec[27] = tt),
          (ec[28] = e3),
          (ec[29] = F))
        : (F = ec[29])
      let tf = F,
        tx = (0, o._U)(u.X1, "copyPageLink"),
        tv = eh?.document_type ?? "page",
        ty = e2 ? e3?.id : void 0
      ec[30] !== eA || ec[31] !== ty || ec[32] !== e$
        ? ((Y = () => {
            ;(0, P.CF)(e$, eA, ty)
          }),
          (ec[30] = eA),
          (ec[31] = ty),
          (ec[32] = e$),
          (ec[33] = Y))
        : (Y = ec[33])
      let tb = Y
      ec[34] !== em?.current || ec[35] !== ep || ec[36] !== eB || ec[37] !== eq
        ? ((Z = (e) => {
            let t = ep?.dom ?? em?.current
            if (
              !eB ||
              e?.originBrowserTab != null ||
              null == t ||
              ep?.isDestroyed ||
              !t.checkVisibility() ||
              ("editor" === eq && (null != ep ? !ep.hasFocus() : !t.contains(t.ownerDocument.activeElement)))
            )
              return !1
            if (e?.originPanel != null)
              return (
                t
                  .closest("[data-app-shell-tab-panel-controller]")
                  ?.getAttribute("data-app-shell-tab-panel-controller") === e.originPanel
              )
            let a = t.ownerDocument.activeElement,
              n = a?.closest('[role="tabpanel"]'),
              l = t.closest('[role="tabpanel"]')
            return (
              n === l ||
              (null != l &&
                a
                  ?.closest('[role="tab"][aria-selected="true"]')
                  ?.closest("[data-tab-id]")
                  ?.getAttribute("data-tab-id") === l.getAttribute("data-tab-id"))
            )
          }),
          (ec[34] = em?.current),
          (ec[35] = ep),
          (ec[36] = eB),
          (ec[37] = eq),
          (ec[38] = Z))
        : (Z = ec[38])
      let tw = Z,
        t_ = !eU && !e1
      ;(ec[39] !== tw || ec[40] !== t_
        ? ((et = { enabled: t_, isActive: tw }), (ec[39] = tw), (ec[40] = t_), (ec[41] = et))
        : (et = ec[41]),
        (0, p.K)("copyPageLink", tb, et),
        ec[42] !== th || ec[43] !== tf || ec[44] !== e2 || ec[45] !== eA || ec[46] !== e$ || ec[47] !== e3
          ? (e2 && null != e3
              ? (ea = () => (0, K.setSpacePinned)(e$, e3.id, !tf))
              : (!1 === e2 || (null == e2 && null != e3 && e3.root_page_id !== eA)) &&
                (ea = () => (0, K.setSpacePagePinned)(e$, eA, !th)),
            (ec[42] = th),
            (ec[43] = tf),
            (ec[44] = e2),
            (ec[45] = eA),
            (ec[46] = e$),
            (ec[47] = e3),
            (ec[48] = ea))
          : (ea = ec[48]),
        ec[49] !== eZ ||
        ec[50] !== tg ||
        ec[51] !== eF ||
        ec[52] !== tx ||
        ec[53] !== ej ||
        ec[54] !== eW ||
        ec[55] !== tv ||
        ec[56] !== ep ||
        ec[57] !== eK ||
        ec[58] !== eg ||
        ec[59] !== eR ||
        ec[60] !== td ||
        ec[61] !== eJ ||
        ec[62] !== e1 ||
        ec[63] !== tf ||
        ec[64] !== eU ||
        ec[65] !== eO ||
        ec[66] !== e2 ||
        ec[67] !== eH ||
        ec[68] !== eh ||
        ec[69] !== to ||
        ec[70] !== eQ ||
        ec[71] !== ef ||
        ec[72] !== ex ||
        ec[73] !== ey ||
        ec[74] !== ev ||
        ec[75] !== eS ||
        ec[76] !== ea ||
        ec[77] !== eA ||
        ec[78] !== ta ||
        ec[79] !== eE ||
        ec[80] !== ty ||
        ec[81] !== e$ ||
        ec[82] !== eL ||
        ec[83] !== ez ||
        ec[84] !== eD ||
        ec[85] !== e9 ||
        ec[86] !== e3 ||
        ec[87] !== tr ||
        ec[88] !== e8 ||
        ec[89] !== e7 ||
        ec[90] !== eC
          ? ((en = (e, t, a, l, o, i) => {
              let r = void 0 === l ? eE : l,
                c = void 0 === i ? ey : i,
                u = () => {
                  let n
                  eh?.access.can_read === !0 &&
                    null == eh.deleted_at &&
                    (e2 ? null != e3 && (n = { kind: "space", id: e3.id }) : (n = { kind: "page", id: eA }))
                  let l = (0, A.Zf)({
                    scope: e$,
                    page: eh,
                    exportToGoogleDrive: eK,
                    templateAction:
                      null == e8 || null == e7
                        ? void 0
                        : {
                            marked: (e8.isPending ? e8.variables : void 0) ?? e7,
                            saving: e8.isPending,
                            onSelect: () => e8.mutate(!e7),
                          },
                    pageId: eA,
                    isScratch: eU,
                    showUnavailableActions: eD,
                    title: eC ?? eh?.title ?? eA,
                    canRename: void 0 === eS ? eh?.access.can_write === !0 : null != eS,
                    onRename: eS ?? void 0,
                    creationItems: [
                      ...(0, H.getAttachSiteMenuItems)({
                        scope: e$,
                        page: eh,
                        pageId: eA,
                        canCreatePage: !eU && eh?.access.can_write === !0,
                        onAddSite: a,
                      }),
                      ...(ej ?? []),
                      ...e9,
                    ],
                    isPinned: tf,
                    organizationItems: eU || e1 || eO || !0 === e2 ? [] : (0, H.getPageMoveMenuItems)(e$, eA, eQ, to),
                    reportTarget: n,
                    rootSpaceId: ty,
                    getMarkdown: eg ?? void 0,
                    canCopyMarkdown: null != eg,
                    includeDownload: eR,
                    canExportDocument: eF,
                    onShare:
                      null == t
                        ? void 0
                        : () => {
                            ;(eV.current?.isConnected && eV.current.focus({ preventScroll: !0 }), t())
                          },
                    onTogglePinned: ea,
                  })
                  if (eU || (e1 && !eD)) return l
                  if (
                    (l.push({ id: "page-editor-separator", type: "separator" }),
                    null != ex &&
                      l.push({
                        id: "page-floating-comments",
                        type: "checkbox",
                        checked: ez,
                        closeOnSelect: !0,
                        ...(0, A.XB)({ 16: h.TmP, 20: h.izo }),
                        message: (0, s.zR)({
                          id: "codex.space.page.comments.floating.toggle",
                          defaultMessage: "Show floating comments",
                        }),
                        onSelect: () => ex(!ez),
                      }),
                    null != ef &&
                      l.push({
                        id: "page-attribution",
                        type: "checkbox",
                        checked: eL,
                        closeOnSelect: !0,
                        ...(0, A.XB)({ 16: h.JSV, 20: h.AdZ }),
                        message: (0, s.zR)({
                          id: "codex.space.page.attribution.toggle",
                          defaultMessage: "Show attribution",
                        }),
                        onSelect: () => ef(!eL),
                      }),
                    l.push({
                      id: "page-activity",
                      ...(0, A.XB)({ 16: h.KM4, 20: h.tGx }),
                      enabled: !e1 && null != eZ && null != c,
                      message: (0, s.zR)({
                        id: "codex.space.page.actions.activity.byDocumentType",
                        defaultMessage:
                          "{documentType, select, granola_presentation {Slide activity} granola_workbook {Sheet activity} other {Page activity}}",
                      }),
                      messageValues: { documentType: tv },
                      onSelect: c,
                    }),
                    e &&
                      l.push({
                        id: "open-in-desktop",
                        ...(0, A.XB)({ 16: h.Som, 20: h.Pt }),
                        message: (0, s.zR)({
                          id: "codex.space.page.actions.openInDesktop",
                          defaultMessage: "Open in desktop",
                        }),
                        enabled: !e1,
                        href: e1 ? void 0 : eW,
                      }),
                    null != ev &&
                      l.push(
                        { id: "page-back-separator", type: "separator" },
                        {
                          id: "back-of-page",
                          message: A.Nh.backOfPage,
                          messageValues: { documentType: tv },
                          ...(0, A.XB)({ 16: h.oQS, 20: h.hXV }),
                          selectAfterClose: !0,
                          onSelect: ev,
                        },
                      ),
                    l.push(...(0, A.Sm)(e$, eA, tg ? () => tu(eA) : void 0, eD && !e2)),
                    e2 && null != e3)
                  ) {
                    let { canArchive: e } = (0, V.lv)(tr, (0, C.wI)(e3.interaction_mode, td))
                    if (e$.get(K.spaceAccountId$) !== eZ) return []
                    e &&
                      (l.push({ id: "space-delete-separator", type: "separator" }),
                      l.push({
                        id: "archive-space",
                        message: A.Nh.archiveSpace,
                        ...(0, A.XB)({ 16: h.cSG, 20: h.zwW }, A.lf.archive),
                        tone: "danger",
                        selectAfterClose: !0,
                        onSelect: () => tm(e3.id),
                      }))
                  }
                  return l
                }
              return (0, n.jsx)(m.t, {
                align: "end",
                trigger: "click",
                preserveBrowserContextMenu: !0,
                disableNative: null != r,
                renderDropdown: null == r ? void 0 : (e) => r(e, eV),
                onOpenChange: (e) => {
                  if ((eX(e), e)) {
                    if (!eU && !e1 && !eO && !0 !== e2 && ta) {
                      eh?.access.can_write && E.O.prefetch(e$)
                      let e = e$.query.getData(K.spacePageQuery$, eA)
                      ;(eh?.capabilities_pending || e?.capabilities_pending) && (0, O.V)(e$, eA)
                    }
                    o?.(!0)
                  }
                },
                onAfterClose: () => o?.(!1),
                getItems: u,
                open: eH,
                items: eH ? u() : void 0,
                renderItem: (e) =>
                  "page-attribution" === e.id
                    ? (0, n.jsx)(g.ms.CheckboxItem, {
                        checked: eL,
                        closeOnSelect: e.closeOnSelect,
                        leftIcon: (0, n.jsx)(x.b5, { icon: { 16: h.JSV, 20: h.AdZ } }),
                        onCheckedChange: ef,
                        children: (0, n.jsx)(d.A, { ...e.message }),
                      })
                    : "page-floating-comments" === e.id
                      ? (0, n.jsx)(g.ms.CheckboxItem, {
                          checked: ez,
                          closeOnSelect: e.closeOnSelect,
                          leftIcon: (0, n.jsx)(x.b5, { icon: { 16: h.TmP, 20: h.izo } }),
                          onCheckedChange: ex,
                          children: (0, n.jsx)(d.A, { ...e.message }),
                        })
                      : void 0,
                shortcuts: { "copy-page-link": tx },
                onCloseAutoFocus: (e) => {
                  ep?.hasFocus() && e.preventDefault()
                },
                children: (0, n.jsx)(S.p, {
                  ref: eV,
                  onClick: ee,
                  label: eJ.formatMessage(
                    {
                      id: "codex.space.page.actions.menu.byDocumentType",
                      defaultMessage:
                        "{documentType, select, granola_presentation {Slide actions} granola_workbook {Sheet actions} other {Page actions}}",
                    },
                    { documentType: tv },
                  ),
                  children: (0, n.jsx)(x.b5, { icon: { 16: h.l0Y, 20: h.e4G } }),
                }),
              })
            }),
            (ec[49] = eZ),
            (ec[50] = tg),
            (ec[51] = eF),
            (ec[52] = tx),
            (ec[53] = ej),
            (ec[54] = eW),
            (ec[55] = tv),
            (ec[56] = ep),
            (ec[57] = eK),
            (ec[58] = eg),
            (ec[59] = eR),
            (ec[60] = td),
            (ec[61] = eJ),
            (ec[62] = e1),
            (ec[63] = tf),
            (ec[64] = eU),
            (ec[65] = eO),
            (ec[66] = e2),
            (ec[67] = eH),
            (ec[68] = eh),
            (ec[69] = to),
            (ec[70] = eQ),
            (ec[71] = ef),
            (ec[72] = ex),
            (ec[73] = ey),
            (ec[74] = ev),
            (ec[75] = eS),
            (ec[76] = ea),
            (ec[77] = eA),
            (ec[78] = ta),
            (ec[79] = eE),
            (ec[80] = ty),
            (ec[81] = e$),
            (ec[82] = eL),
            (ec[83] = ez),
            (ec[84] = eD),
            (ec[85] = e9),
            (ec[86] = e3),
            (ec[87] = tr),
            (ec[88] = e8),
            (ec[89] = e7),
            (ec[90] = eC),
            (ec[91] = en))
          : (en = ec[91]))
      let tI = en
      return (
        ec[92] !== ep || ec[93] !== tw || ec[94] !== eh?.access.can_write
          ? ((el =
              null != ep && (0, n.jsx)(_, { canWrite: eh?.access.can_write === !0, editorView: ep, isPageActive: tw })),
            (ec[92] = ep),
            (ec[93] = tw),
            (ec[94] = eh?.access.can_write),
            (ec[95] = el))
          : (el = ec[95]),
        ec[96] !== tI || ec[97] !== eu || ec[98] !== ey || ec[99] !== ek
          ? ((eo = (e) => {
              let t = (t, a, l, o) => {
                let i = void 0 === o ? ey : o
                return (0, n.jsxs)(n.Fragment, {
                  children: [null, (0, n.jsx)(n.Fragment, { children: tI(!1, t, e, a, l, i) })],
                })
              }
              return (0, n.jsx)(n.Fragment, { children: null == eu ? t(ek) : eu(t) })
            }),
            (ec[96] = tI),
            (ec[97] = eu),
            (ec[98] = ey),
            (ec[99] = ek),
            (ec[100] = eo))
          : (eo = ec[100]),
        ec[101] !== eB || ec[102] !== eA || ec[103] !== eo
          ? ((ei = (0, n.jsx)(v.T, { pageId: eA, isVisible: eB, children: eo })),
            (ec[101] = eB),
            (ec[102] = eA),
            (ec[103] = eo),
            (ec[104] = ei))
          : (ei = ec[104]),
        ec[105] !== tc || ec[106] !== tg || ec[107] !== eB || ec[108] !== eh || ec[109] !== eA || ec[110] !== eC
          ? ((er =
              eB && tg && tc === eA
                ? (0, n.jsx)(M.F, {
                    pageId: eA,
                    pageTitle: eC ?? eh?.title,
                    hasChildren: eh?.has_children,
                    documentType: null == eh ? void 0 : (0, k.th)(eh),
                    onClose: () => tu(null),
                  })
                : null),
            (ec[105] = tc),
            (ec[106] = tg),
            (ec[107] = eB),
            (ec[108] = eh),
            (ec[109] = eA),
            (ec[110] = eC),
            (ec[111] = er))
          : (er = ec[111]),
        ec[112] !== tp || ec[113] !== e2 || ec[114] !== eB || ec[115] !== eh?.title || ec[116] !== e3 || ec[117] !== eC
          ? ((es =
              eB && e2 && null != e3 && tp === e3.id
                ? (0, n.jsx)(J, {
                    spaceId: e3.id,
                    spaceName: eC ?? eh?.title ?? e3.name,
                    rootPageId: e3.root_page_id,
                    onClose: () => tm(null),
                  })
                : null),
            (ec[112] = tp),
            (ec[113] = e2),
            (ec[114] = eB),
            (ec[115] = eh?.title),
            (ec[116] = e3),
            (ec[117] = eC),
            (ec[118] = es))
          : (es = ec[118]),
        ec[119] !== eG || ec[120] !== el || ec[121] !== ei || ec[122] !== er || ec[123] !== es
          ? ((ed = (0, n.jsxs)(n.Fragment, { children: [el, ei, eG, er, es] })),
            (ec[119] = eG),
            (ec[120] = el),
            (ec[121] = ei),
            (ec[122] = er),
            (ec[123] = es),
            (ec[124] = ed))
          : (ed = ec[124]),
        ed
      )
    }
    function ee(e) {
      return e.stopPropagation()
    }
  },
  sbEV(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("oyxz")
    a.d(
      t,
      {},
      {
        v: function (e) {
          let t,
            a = (0, l.c)(2),
            { documentType: i } = e,
            r = void 0 === i ? "page" : i
          return (
            a[0] !== r
              ? ((t = (0, n.jsx)(o.A, {
                  id: "pages.edit.limitExceeded.byDocumentType",
                  values: { documentType: r },
                  defaultMessage:
                    "{documentType, select, granola_presentation {That change would make this slide too large, so it was not saved} granola_workbook {That change would make this sheet too large, so it was not saved} other {That change would make this page too large, so it was not saved}}",
                })),
                (a[0] = r),
                (a[1] = t))
              : (t = a[1]),
            t
          )
        },
      },
    )
  },
  zOWn(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("qmMi"),
      i = a("DBCl"),
      r = a("oz6U"),
      s = a("jTFC")
    a.d(
      t,
      {},
      {
        r: function (e) {
          let t,
            a,
            d = (0, l.c)(6),
            { className: c, conversationId: u } = e
          d[0] !== u ? ((t = null == u ? null : (0, i.JXB)(u)), (d[0] = u), (d[1] = t)) : (t = d[1])
          let p = t,
            m = (0, o._U)(r.Hx, p),
            g = m?.avatar ?? null,
            h = p ?? "orbit-draft"
          return (
            d[2] !== c || d[3] !== g || d[4] !== h
              ? ((a = (0, n.jsx)(s.Xm, { className: c, avatar: g, identity: h, animated: !1 })),
                (d[2] = c),
                (d[3] = g),
                (d[4] = h),
                (d[5] = a))
              : (a = d[5]),
            a
          )
        },
      },
    )
  },
  ZhLA(e, t, a) {
    a.d(t, { p: () => I })
    var n = a("ABep"),
      l = a("QosV"),
      o = a("wTzC"),
      i = a("qmMi"),
      r = a("zd8w"),
      s = a("oyxz"),
      d = a("HdXD"),
      c = a("MM0V"),
      u = a("Sm6l"),
      p = a("uuN8"),
      m = a("lznL"),
      g = a("JNtf"),
      h = a("mUDD"),
      f = a("NraH"),
      x = a("hTEq"),
      v = a("OWtl")
    function y(e) {
      let t,
        a,
        o,
        i = (0, l.c)(11),
        { source: d, session: c, notice: p, fromSyncNotice: m, visible: g, onReverted: h } = e,
        f = void 0 !== m && m,
        x = void 0 === g || g,
        v = (0, r.useSyncExternalStore)(d.subscribe, d.getEngineControls, b),
        [y, _] = (0, r.useState)(!1)
      return null == v
        ? null
        : (i[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(u.$, {
                color: "danger",
                size: "recoveryAction",
                type: "button",
                onClick: () => _(!0),
                children: (0, n.jsx)(s.A, { id: "codex.space.page.revert.open", defaultMessage: "Revert" }),
              })),
              (i[0] = t))
            : (t = i[0]),
          i[1] !== y || i[2] !== v || i[3] !== f || i[4] !== p || i[5] !== h || i[6] !== c || i[7] !== x
            ? ((a =
                y &&
                (0, n.jsx)(w, {
                  controls: v,
                  fromSyncNotice: f,
                  session: c,
                  notice: p,
                  visible: x,
                  onClose: () => _(!1),
                  onReverted: h,
                })),
              (i[1] = y),
              (i[2] = v),
              (i[3] = f),
              (i[4] = p),
              (i[5] = h),
              (i[6] = c),
              (i[7] = x),
              (i[8] = a))
            : (a = i[8]),
          i[9] !== a ? ((o = (0, n.jsxs)(n.Fragment, { children: [t, a] })), (i[9] = a), (i[10] = o)) : (o = i[10]),
          o)
    }
    function b() {}
    function w(e) {
      let t,
        a,
        c,
        p,
        m,
        y,
        b,
        w,
        _,
        I,
        k,
        S,
        j,
        C,
        A = (0, l.c)(45),
        { controls: M, fromSyncNotice: T, session: P, notice: E, visible: N, onClose: U, onReverted: O } = e,
        D = (0, i.gh)(v.u),
        [R, L] = (0, r.useState)("idle"),
        z = "resetting" === R,
        [q, B] = (0, r.useState)()
      return (
        A[0] !== U || A[1] !== z
          ? ((t = (e) => {
              e || z || U()
            }),
            (A[0] = U),
            (A[1] = z),
            (A[2] = t))
          : (t = A[2]),
        A[3] !== E?.pagesErrorCode || A[4] !== E?.reason || A[5] !== P || A[6] !== N
          ? ((a =
              null == P
                ? N && (0, n.jsx)(d.gO, { kind: "unsaved_changes", recoveryUi: "dialog" })
                : (0, n.jsx)(f.It, {
                    session: P,
                    noticeReason: E?.reason,
                    pagesErrorCode: E?.pagesErrorCode,
                    visible: N,
                    operation: "pages.realtime.recovery",
                    kind: "unsaved_changes",
                    recoveryUi: "dialog",
                  })),
            (A[3] = E?.pagesErrorCode),
            (A[4] = E?.reason),
            (A[5] = P),
            (A[6] = N),
            (A[7] = a))
          : (a = A[7]),
        A[8] !== q || A[9] !== P || A[10] !== R || A[11] !== N
          ? ((c =
              "failed" === R &&
              (0, n.jsx)(f.O, {
                errorUiPresentation: "dialog",
                session: P,
                visible: null != P && N,
                operation: "pages.realtime.reset",
                errorUiType: o.CodexPagesErrorUiType.CODEX_PAGES_ERROR_UI_TYPE_RECOVERY,
                error: q,
              })),
            (A[8] = q),
            (A[9] = P),
            (A[10] = R),
            (A[11] = N),
            (A[12] = c))
          : (c = A[12]),
        A[13] !== M ||
        A[14] !== T ||
        A[15] !== U ||
        A[16] !== O ||
        A[17] !== z ||
        A[18] !== D ||
        A[19] !== P ||
        A[20] !== N
          ? ((p = (e) => {
              if ((e.preventDefault(), z)) return
              let t = P?.hasPendingEditorWrites ? "deferred_editor_write" : "other",
                a = (0, x.I)(T && N ? D : void 0, "revert", {
                  eligibility: null == P ? "unknown" : t,
                  realtime_backend: "engine",
                })
              ;(L("resetting"),
                M.discardLocalChanges().then(
                  () => {
                    ;(a("success"), O?.(), U())
                  },
                  (e) => {
                    ;(a("failure"), B(e), L("failed"))
                  },
                ))
            }),
            (A[13] = M),
            (A[14] = T),
            (A[15] = U),
            (A[16] = O),
            (A[17] = z),
            (A[18] = D),
            (A[19] = P),
            (A[20] = N),
            (A[21] = p))
          : (p = A[21]),
        A[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, n.jsx)(g.L3, {
              children: (0, n.jsx)(s.A, { id: "codex.space.page.revert.title", defaultMessage: "Revert changes?" }),
            })),
            (A[22] = m))
          : (m = A[22]),
        A[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, n.jsx)(h.OO, {
              children: (0, n.jsx)(h.c7, {
                title: m,
                subtitle: (0, n.jsx)(g.rr, {
                  children: (0, n.jsx)(s.A, {
                    id: "codex.space.page.revert.description",
                    defaultMessage:
                      "Copy anything you need before resetting. Local edits will be discarded and the last saved version will load when you're connected.",
                  }),
                }),
              }),
            })),
            (A[23] = y))
          : (y = A[23]),
        A[24] !== R
          ? ((b =
              "failed" === R &&
              (0, n.jsx)(h.OO, {
                children: (0, n.jsx)("p", {
                  className: "text-sm text-danger select-none",
                  role: "alert",
                  children: (0, n.jsx)(s.A, {
                    id: "codex.space.page.revert.failed",
                    defaultMessage: "Couldn't finish resetting this Page. Try again",
                  }),
                }),
              })),
            (A[24] = R),
            (A[25] = b))
          : (b = A[25]),
        A[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, n.jsx)(s.A, { id: "codex.space.page.revert.cancel", defaultMessage: "Cancel" })), (A[26] = w))
          : (w = A[26]),
        A[27] !== U || A[28] !== z
          ? ((_ = (0, n.jsx)(u.$, { color: "secondary", disabled: z, onClick: U, type: "button", children: w })),
            (A[27] = U),
            (A[28] = z),
            (A[29] = _))
          : (_ = A[29]),
        A[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, n.jsx)(s.A, { id: "codex.space.page.revert.submit", defaultMessage: "Revert changes" })),
            (A[30] = I))
          : (I = A[30]),
        A[31] !== z
          ? ((k = (0, n.jsx)(u.$, { color: "danger", disabled: z, loading: z, type: "submit", children: I })),
            (A[31] = z),
            (A[32] = k))
          : (k = A[32]),
        A[33] !== k || A[34] !== _
          ? ((S = (0, n.jsx)(h.OO, { children: (0, n.jsxs)(h.Es, { children: [_, k] }) })),
            (A[33] = k),
            (A[34] = _),
            (A[35] = S))
          : (S = A[35]),
        A[36] !== S || A[37] !== p || A[38] !== b
          ? ((j = (0, n.jsxs)(h.R4, { as: "form", onSubmit: p, children: [y, b, S] })),
            (A[36] = S),
            (A[37] = p),
            (A[38] = b),
            (A[39] = j))
          : (j = A[39]),
        A[40] !== t || A[41] !== j || A[42] !== a || A[43] !== c
          ? ((C = (0, n.jsxs)(g.lG, { open: !0, onOpenChange: t, children: [a, c, j] })),
            (A[40] = t),
            (A[41] = j),
            (A[42] = a),
            (A[43] = c),
            (A[44] = C))
          : (C = A[44]),
        C
      )
    }
    var _ = a("LqIC")
    function I(e) {
      let t,
        a,
        u,
        g,
        h,
        x,
        v,
        b,
        w,
        I,
        M = (0, l.c)(55),
        {
          source: T,
          notice: P,
          session: E,
          experience: N,
          inline: U,
          writeAccessDenied: O,
          onCopy: D,
          onReverted: R,
          errorUiType: L,
          errorOperation: z,
          advice: q,
          children: B,
          visible: $,
        } = e,
        F = void 0 === U || U,
        K = void 0 !== O && O,
        G = void 0 === L ? o.CodexPagesErrorUiType.CODEX_PAGES_ERROR_UI_TYPE_SYNC_WARNING : L,
        Y = void 0 === z ? "pages.realtime.notice" : z,
        W = void 0 === $ || $,
        V = (0, r.useSyncExternalStore)(
          T.subscribe,
          null == E ? A : E.getSnapshot,
          null == E ? A : E.getServerSnapshot,
        ),
        H = null == V || V.recoveryDrafts.length > 0 || V.pendingUpdates > 0 || !!E?.hasDeferredLocalEdits,
        X = (0, i._U)(
          !(
            !W ||
            !K ||
            V?.errorCode !== "page_write_forbidden" ||
            V.canWrite ||
            V.remoteAccessLost ||
            null != V.loadError ||
            V.hasRejectedEdits ||
            V.unsavedChangesDiscarded ||
            (0, m.XM)(V, E?.hasDeferredLocalEdits ?? !1)
          ) && _.T1,
          E?.id ?? "",
        )
      if (X) {
        let e, t
        M[0] !== X
          ? ((e = (0, n.jsx)("span", {
              role: "status",
              children:
                "completed" === X
                  ? (0, n.jsx)(s.A, {
                      id: "pages.document.checkingAccessAfterMove",
                      defaultMessage: "Checking edit access after the move\u2026",
                    })
                  : (0, n.jsx)(s.A, {
                      id: "pages.document.movingReadOnly",
                      defaultMessage: "This page is read-only while its move is in progress.",
                    }),
            })),
            (M[0] = X),
            (M[1] = e))
          : (e = M[1])
        let a = e
        return (
          M[2] !== F || M[3] !== a
            ? ((t = F ? (0, n.jsx)(c.l, { variant: "callout", type: "normal", content: a }) : a),
              (M[2] = F),
              (M[3] = a),
              (M[4] = t))
            : (t = M[4]),
          t
        )
      }
      ;(M[5] !== N || M[6] !== W || M[7] !== K
        ? ((t = W && !K && (0, n.jsx)(d.vw, { tracker: N, kind: "sync" })),
          (M[5] = N),
          (M[6] = W),
          (M[7] = K),
          (M[8] = t))
        : (t = M[8]),
        M[9] !== Y ||
        M[10] !== G ||
        M[11] !== N ||
        M[12] !== F ||
        M[13] !== P?.pagesErrorCode ||
        M[14] !== P?.reason ||
        M[15] !== E ||
        M[16] !== W ||
        M[17] !== K
          ? ((a =
              null == E
                ? W &&
                  (0, n.jsx)(d.gO, {
                    tracker: N,
                    kind: K ? "access" : "sync",
                    recoveryUi: "notice",
                    syncWarningBanner: F && !K && "pages.realtime.notice" === Y,
                  })
                : (0, n.jsx)(f.It, {
                    noticeReason: P?.reason,
                    visible: W,
                    tracker: N,
                    kind: K ? "access" : "sync",
                    recoveryUi: "notice",
                    errorUiPresentation: F ? "banner" : "connection_help",
                    syncWarningMessage: K ? void 0 : "revert_recent_edits",
                    recoveryBanner:
                      F &&
                      !K &&
                      "pages.realtime.notice" === Y &&
                      G === o.CodexPagesErrorUiType.CODEX_PAGES_ERROR_UI_TYPE_RECOVERY,
                    operation: Y,
                    session: E,
                    pagesErrorCode: P?.pagesErrorCode,
                    errorUiType: K ? o.CodexPagesErrorUiType.CODEX_PAGES_ERROR_UI_TYPE_WRITE_ACCESS_DENIED : G,
                  })),
            (M[9] = Y),
            (M[10] = G),
            (M[11] = N),
            (M[12] = F),
            (M[13] = P?.pagesErrorCode),
            (M[14] = P?.reason),
            (M[15] = E),
            (M[16] = W),
            (M[17] = K),
            (M[18] = a))
          : (a = M[18]),
        M[19] !== H || M[20] !== D || M[21] !== V?.canWrite || M[22] !== K
          ? ((u = (0, n.jsx)("span", {
              className: "flex flex-wrap gap-x-1",
              children: K
                ? (0, n.jsxs)("span", {
                    className: "flex flex-col gap-1",
                    children: [
                      V?.canWrite
                        ? (0, n.jsx)(s.A, {
                            id: "codex.space.page.revert.permissionChanged.restored",
                            defaultMessage:
                              "<strong>Your permissions have changed.</strong> Your permissions changed before these edits could be saved",
                            values: { strong: C },
                          })
                        : (0, n.jsx)(s.A, {
                            id: "codex.space.page.revert.permissionChanged",
                            defaultMessage:
                              "<strong>Your permissions have changed.</strong> You no longer have permission to edit this page",
                            values: { strong: j },
                          }),
                      H &&
                        null != D &&
                        (0, n.jsx)("span", {
                          children: (0, n.jsx)(s.A, {
                            id: "codex.space.page.revert.permissionChanged.copy",
                            defaultMessage: "Copy any edits you want to keep",
                          }),
                        }),
                    ],
                  })
                : (0, n.jsx)(s.A, {
                    id: "codex.space.page.revert.notice",
                    defaultMessage:
                      "<strong>Can't sync your changes.</strong> Please copy your recent edits, then revert to the last saved version",
                    values: { strong: S },
                  }),
            })),
            (M[19] = H),
            (M[20] = D),
            (M[21] = V?.canWrite),
            (M[22] = K),
            (M[23] = u))
          : (u = M[23]),
        M[24] !== q || M[25] !== t || M[26] !== a || M[27] !== u
          ? ((g = (0, n.jsxs)(n.Fragment, { children: [t, a, u, q] })),
            (M[24] = q),
            (M[25] = t),
            (M[26] = a),
            (M[27] = u),
            (M[28] = g))
          : (g = M[28]))
      let Q = g
      if (!F) {
        let e
        return (
          M[29] !== Q
            ? ((e = (0, n.jsx)("span", { role: "status", children: Q })), (M[29] = Q), (M[30] = e))
            : (e = M[30]),
          e
        )
      }
      let J = K ? "normal" : "warning"
      return (
        M[31] !== Q
          ? ((h = (0, n.jsx)("div", { role: "status", children: Q })), (M[31] = Q), (M[32] = h))
          : (h = M[32]),
        M[33] !== B || M[34] !== h
          ? ((x = (0, n.jsxs)("div", { className: "flex flex-col gap-2", children: [h, B] })),
            (M[33] = B),
            (M[34] = h),
            (M[35] = x))
          : (x = M[35]),
        M[36] !== H || M[37] !== D || M[38] !== K
          ? ((v =
              null != D && (!K || H) && (0, n.jsx)(p.i, { buttonText: !0, showIcon: !1, onCopy: D, renderButton: k })),
            (M[36] = H),
            (M[37] = D),
            (M[38] = K),
            (M[39] = v))
          : (v = M[39]),
        M[40] !== H || M[41] !== P || M[42] !== R || M[43] !== E || M[44] !== T || M[45] !== W || M[46] !== K
          ? ((b =
              (!K || H) &&
              (0, n.jsx)(y, { notice: P, fromSyncNotice: !0, source: T, session: E, visible: W, onReverted: R })),
            (M[40] = H),
            (M[41] = P),
            (M[42] = R),
            (M[43] = E),
            (M[44] = T),
            (M[45] = W),
            (M[46] = K),
            (M[47] = b))
          : (b = M[47]),
        M[48] !== v || M[49] !== b
          ? ((w = (0, n.jsxs)(n.Fragment, { children: [v, b] })), (M[48] = v), (M[49] = b), (M[50] = w))
          : (w = M[50]),
        M[51] !== J || M[52] !== x || M[53] !== w
          ? ((I = (0, n.jsx)(c.l, { variant: "callout", type: J, content: x, customCtas: w, wrapCtas: !0 })),
            (M[51] = J),
            (M[52] = x),
            (M[53] = w),
            (M[54] = I))
          : (I = M[54]),
        I
      )
    }
    function k(e) {
      return (0, n.jsx)(u.$, { ...e, color: "secondary", size: "recoveryAction" })
    }
    function S(e) {
      return (0, n.jsx)("strong", { children: e })
    }
    function j(e) {
      return (0, n.jsx)("strong", { children: e })
    }
    function C(e) {
      return (0, n.jsx)("strong", { children: e })
    }
    function A() {}
  },
  s9n8(e, t, a) {
    a.d(
      t,
      {},
      {
        z: function (e, t, a = 0, n, l = "instant") {
          let o = e.getBoundingClientRect()
          if (0 === e.offsetHeight || 0 === o.height) return
          let i = t.getBoundingClientRect()
          if (t instanceof Range) {
            let e = t.startContainer.parentElement?.closest("[data-code-block-source]")
            if (null != e && e.scrollWidth > e.clientWidth) {
              let t = e.getBoundingClientRect(),
                a = i.left - t.left,
                n = a < 0 ? a : Math.max(0, Math.min(i.right - t.right, a))
              e.scrollLeft += n / (e.currentCSSZoom || 1)
            }
          }
          let r = o.height / e.offsetHeight,
            s = getComputedStyle(e),
            d = Number.parseFloat(s.scrollPaddingTop) || 0,
            c = Number.parseFloat(s.scrollPaddingBottom) || 0,
            u = o.top + (e.clientTop + d + a) * r,
            p = o.top + (e.clientTop + e.clientHeight - c) * r
          i.height > p - u && null != n && (i = n.getBoundingClientRect())
          let m = i.top < u ? i.top - u : Math.max(0, Math.min(i.bottom - p, i.top - u))
          0 !== m && e.scrollTo({ top: e.scrollTop + m / r, behavior: l })
        },
      },
    )
  },
  AAxy(e, t, a) {
    var n = a("qmMi"),
      l = a("DBCl"),
      o = a("svjy"),
      i = a("q3j5"),
      r = a("TYK1"),
      s = a("rTPf"),
      d = a("OWtl"),
      c = a("fEVS")
    let u = (0, n.i1)(d.u, ({ ownerName: e, conversationId: t, mention: a = !1 }, { get: n }) => {
        let s = null == t ? null : n(r.cloudAeonByThreadId$, (0, l.JXB)(t)).data
        if (null != s && !(0, i.x)(s.display_name)) return (a ? "@" : "") + s.display_name
        let d = e?.trim().split(/\s+/u)[0]
        return n(o.g).formatMessage(
          {
            id: "codex.page.dot.ownerLabel.productName",
            defaultMessage:
              "{mention, select, true {@} other {}}{hasOwner, select, true {{name}\u2019s {dot}} other {{dot}}}",
            description:
              "Shared Page label for a dot, an always-on agent, using the responsible person's first name when known. dot is a common noun for the agent and must remain untranslated. Mention labels start with @. Never use the agent's private nickname.",
          },
          { mention: a, hasOwner: !!d, name: d, dot: "dot" },
        )
      }),
      p = (0, n.i1)(d.u, ({ owner: e, ownerName: t, viewer: a, orbit: n }, { get: l }) => {
        let i = l(s.ik, e) ?? t,
          r = i === e ? void 0 : i?.trim().split(/\s+/u)[0]
        if (null != n) return l(u, { ownerName: r, conversationId: e === a ? n.threadId : void 0, mention: !0 })
        let d = l(o.g)
        return e !== a && r
          ? d.formatMessage(
              {
                id: "codex.page.taskMention.ownerLabel",
                defaultMessage: "@{name}\u2019s ChatGPT",
                description: "ChatGPT task mention shown to someone other than its owner, using the owner's first name",
              },
              { name: r },
            )
          : d.formatMessage({
              id: "codex.page.taskMention.selfLabel",
              defaultMessage: "@ChatGPT",
              description:
                "ChatGPT task mention shown to its owner or when the owner\u2019s name is unavailable; keep the product name",
            })
      }),
      m = (0, n.i1)(
        d.u,
        ({ sources: e, viewer: t }, { get: a }) => {
          if (!e.length) return
          let n = {}
          for (let l of e) {
            let e = (0, c.FD)(l)[0]
            if (null != e) {
              let { owner: o, ownerName: i, orbit: r } = e
              n[l] = a(p, { owner: o, ownerName: i, orbit: r, viewer: t })
            }
          }
          return n
        },
        { autoDispose: !0 },
      )
    a.d(
      t,
      {},
      {
        GD: p,
        bx: u,
        f9: m,
        ft: function (e) {
          let t = new Set()
          for (let a of e) if (a.includes("](task")) for (let { from: e, to: n } of (0, c.FD)(a)) t.add(a.slice(e, n))
          return [...t].sort()
        },
      },
    )
  },
  uAks(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("qmMi"),
      i = a("AAxy")
    a.d(
      t,
      {},
      {
        _: function (e) {
          let t,
            a = (0, l.c)(2),
            r = (0, o._U)(i.bx, e)
          return (a[0] !== r ? ((t = (0, n.jsx)(n.Fragment, { children: r })), (a[0] = r), (a[1] = t)) : (t = a[1]), t)
        },
        a: function (e) {
          let t,
            a,
            r = (0, l.c)(7),
            { owner: s, ownerName: d, viewer: c, orbit: u } = e
          r[0] !== u || r[1] !== s || r[2] !== d || r[3] !== c
            ? ((t = { owner: s, ownerName: d, viewer: c, orbit: u }),
              (r[0] = u),
              (r[1] = s),
              (r[2] = d),
              (r[3] = c),
              (r[4] = t))
            : (t = r[4])
          let p = (0, o._U)(i.GD, t)
          return (r[5] !== p ? ((a = (0, n.jsx)(n.Fragment, { children: p })), (r[5] = p), (r[6] = a)) : (a = r[6]), a)
        },
      },
    )
  },
  xQB9(e, t, a) {
    a.d(t, { S: () => F })
    var n = a("DBCl"),
      l = a("SPnB"),
      o = a("eA5w"),
      i = a("TYK1"),
      r = a("SRbQ"),
      s = a("pkoC"),
      d = a.n(s),
      c = a("zkY4"),
      u = a("Bl5Q"),
      p = a("PkQL"),
      m = a("uOFa"),
      g = a("RAsy"),
      h = a("LnAF"),
      f = a("Isak"),
      x = a("DD2M"),
      v = a("fAj4"),
      y = a("vldH"),
      b = a("Kwur"),
      w = a("mt4D"),
      _ = a("xKli"),
      I = a("Ld2s"),
      k = a("svjy"),
      S = a("GaA7"),
      j = a("OMIV"),
      C = a("LulU"),
      A = a("yI91"),
      M = a("Nwp9"),
      T = a("Hrc4"),
      P = a("MtDh"),
      E = a("jiwy"),
      N = a("opxc"),
      U = a("uQmz"),
      O = a("uzqr"),
      D = a("k3jg"),
      R = a("MZvE"),
      L = a("qreq"),
      z = a("aqtt"),
      q = a("v9CB")
    let B = (0, M.m3)("cloud-orbit-composer-sends-v1", {})
    async function $(e, t, a) {
      let n = { stack: [], error: void 0, hasError: !1 }
      try {
        let l = (0, r.mS)(
          n,
          await S.appServices.workspaceFiles.read({ hostId: e, path: t, representation: "blob" }),
          !1,
        )
        if (!("blob" in l)) throw Error("Attachment contents were not returned as a blob")
        return new File([(0, A.K)(l.blob)], a, { type: (0, c.lookup)(a) || "application/octet-stream" })
      } catch (e) {
        ;((n.error = e), (n.hasError = !0))
      } finally {
        ;(0, r.hk)(n)
      }
    }
    async function F({
      scope: e,
      accountId: t,
      owner: a,
      threadId: r,
      prompt: s,
      pageId: c,
      requestId: S,
      personalDotId: A,
      backendDelivery: M,
      beforeSend: K,
    }) {
      let G = e.get(l.chatGptAuthenticatedUserId$)
      if (null == G) throw new DOMException("Page comment owner changed", "AbortError")
      let Y = () => {
        if (
          e.get(l.chatGptAuthenticatedAccountId$) !== t ||
          e.get(l.chatGptAuthenticatedUserId$) !== G ||
          e.get(l.Kw) !== a
        )
          throw new DOMException("Page comment owner changed", "AbortError")
      }
      if ((Y(), !e.get(E.VK))) throw Error("page_comment_orbit_unavailable")
      let W = (0, n.JXB)(r),
        V = await e.query.getOrFetch(i.cloudAeonByThreadId$, W)
      if ((Y(), !(0, i.h2)(V, W))) throw Error("page_comment_orbit_unavailable")
      let H = () => {
        if ((Y(), !e.get(E.VK))) throw Error("page_comment_orbit_unavailable")
        if (null != A) {
          let t = e.query.getData(i.cloudAeonByThreadId$, W)
          if (
            t?.id !== A ||
            "active" !== t.status ||
            t.active_root_thread_id !== r ||
            "shared" === t.scope ||
            null != t.service_account_account_user_id
          )
            throw Error("page_checkbox_dot_unavailable")
        }
        K()
      }
      if (null != M && e.get(j.JW, "3627948712") && e.get(j.JW, "1782536112")) {
        let e = !1
        try {
          ;(await M.session.flush({ scope: "current", waitFor: "remote" }),
            (e = M.session.hasSpaceInputDelivery(M.delivery)))
        } catch {}
        if (e) return void Y()
      }
      ;(H(),
        await (async function ({
          scope: e,
          conversationId: t,
          hostId: a,
          context: o,
          replyToMessageId: r,
          requestId: s,
          pageComment: c,
          entryPoint: S = "conversation",
          beforeSend: A,
          conversations: M,
          onOptimisticMessage: F,
        }) {
          let K,
            G,
            Y = e.get(l.chatGptAuthenticatedAccountId$),
            W = e.get(l.chatGptAuthenticatedUserId$),
            V = e.get(l.kf),
            H = "loaded" === V.status && "personal" === V.structure ? W : e.get(l.Kw)
          if ("loaded" !== V.status || null == Y || null == W || null == H) throw (0, L.t)(e)
          let X = () => {
              if (e.get(l.chatGptAuthenticatedAccountId$) !== Y || e.get(l.chatGptAuthenticatedUserId$) !== W)
                throw new DOMException("Messaging account changed", "AbortError")
            },
            Q = new AbortController(),
            J = (0, L.createNativeMessagingApi)({
              scope: e,
              accountId: Y,
              userId: W,
              accountUserId: H,
              conversationId: t,
              entryPoint: S,
              beforeSend: A,
              signal: Q.signal,
              waitForUploads: async (e) => {
                await K?.waitForRequest(e)
              },
              markSubmitted: async (e) => {
                await K?.markSubmitted(e)
              },
              rejectRequest: async (e) => {
                await K?.rejectRequest(e)
              },
              completeRequest: (e) => (G = K?.completeRequest(e)) ?? Promise.resolve(),
            }),
            Z = (t) => (
              null == K &&
                (K = (0, N.C)({
                  scope: e,
                  media: J.media,
                  signal: Q.signal,
                  roomId: t,
                  accountId: Y,
                  userId: W,
                  intl: e.get(k.g),
                })),
              K
            )
          try {
            let l = JSON.stringify([Y, W, t]),
              S = (0, f.A)(
                JSON.stringify({
                  ...o,
                  replyToMessageId: r,
                  requestId: s,
                  pageComment: c,
                  ideContext: void 0,
                  inAppBrowserContext: void 0,
                }),
                f.A.URL,
              ),
              A = e.get(B)[l]
            if (A?.draftId !== S) {
              let f = await (0, I.t)(e, o, async (l) => {
                if (((0, E.qo)(e), (0, _.Fc)(l).responseItems.length > 0)) throw new q.oy(n.mHE)
                let o = e.query.snapshot(i.cloudAeonByThreadId$, t),
                  f = await o.getOrFetch()
                if (null == f) throw (0, L.t)(e)
                let I = f.messaging_room_id
                if ("shared" === f.scope) (X(), (I = await e.query.getOrFetch(R.K, f.id)), X())
                else if (null == I) {
                  let e = await b.Request.safePost("/tbo/{tbo_id}/messaging-room", {
                    additionalHeaders: { [n.zBc]: Y },
                    parameters: { path: { tbo_id: f.id } },
                  })
                  ;((I = e.messaging_room_id), await o.cancel(), o.setData(e))
                }
                if (null == I) throw (0, L.t)(e)
                let k = e.get(j.JW, "451195040"),
                  [S, A] = d()(l.commentAttachments, (e) => (0, m.X8)(e) || (k && (0, U.j0)(e))),
                  M = 0 === S.length ? l : { ...l, commentAttachments: A },
                  { attachments: T, appshotContexts: P } = await (async function (e, t, a, l, o) {
                    let i = new AbortController().signal,
                      r = [...(e.uploadedFileAttachments ?? []), ...(e.pastedTextAttachments ?? [])].flatMap(
                        ({ upload: e }) => e ?? [],
                      )
                    if (r.some((e) => null != e.accountId && e.accountId !== a))
                      throw new DOMException("Attachment account changed", "AbortError")
                    let s = (e.pastedTextAttachments ?? []).flatMap((e) =>
                        null == e.file ? [] : [{ file: e.file, hostId: e.hostId ?? t }],
                      ),
                      d = [
                        ...(0, g.Y)(e.fileAttachments)
                          .filter((e) => !(0, n.skP)(e) && !s.some((t) => t.file.fsPath === e.fsPath))
                          .map((e) => async () => {
                            let a = await (0, w.Ge)(e)
                            return null == a
                              ? $(t, e.fsPath, e.label)
                              : new File([a.bytes], e.label, { type: a.mimeType ?? "application/octet-stream" })
                          }),
                        ...s.map((e) => () => $(e.hostId, e.file.fsPath, e.file.label)),
                        ...r.map((e) => async () => {
                          let t = await (0, y.fetchChatGptFileBlob)({
                            conversationId: null,
                            target: { type: "file-id", fileId: e.fileId },
                            signal: i,
                          })
                          return new File([t], e.fileName, { type: t.type })
                        }),
                      ],
                      c = (e.appshotContexts ?? []).filter((e) => null != e.imageDataUrl || null != e.imagePath),
                      m =
                        e.imageAttachments.length +
                        (e.mcpAppModelContextAttachments ?? []).reduce((e, t) => e + (0, p.U1)(t).length, 0),
                      f = (0, h.v)(e, !0).flatMap((t, a) => {
                        let n = c[a - m],
                          l = n?.imageName ?? e.imageAttachments[a]?.filename ?? "image.png"
                        return "image" === t.type && "url" in t
                          ? [{ appshot: n, read: async () => (0, C.bX)(t.url, l).file }]
                          : "localImage" === t.type
                            ? [{ appshot: n, read: () => $("local", t.path, l) }]
                            : []
                      }),
                      x = await (0, u.Ay)(
                        [...d.map((e) => ({ read: e, appshot: void 0 })), ...f],
                        async ({ read: e, appshot: t }) => {
                          let a = await e(),
                            n = await o.upload(l, a, { signal: i, onProgress: () => {} })
                          return {
                            attachment: (0, z.UZ)({
                              id: n.fileId,
                              roomId: l,
                              name: a.name,
                              mimeType: a.type,
                              sizeBytes: a.size,
                              previewUrl: "",
                              status: "complete",
                              fileId: n.fileId,
                            }),
                            appshot: t,
                          }
                        },
                        { concurrency: 3 },
                      )
                    return {
                      attachments: x.map(({ attachment: e }) => e),
                      appshotContexts: (e.appshotContexts ?? []).map((e) => {
                        let t = x.find((t) => t.appshot === e)
                        return null == t ? e : { ...e, imageName: t.attachment.fileId, imagePath: null }
                      }),
                    }
                  })(M, a, Y, I, J.media),
                  N =
                    S.length > 0
                      ? await Z(I).prepare(
                          S,
                          T.map((e) => e.fileId),
                        )
                      : void 0
                for (let t of P) (0, v.D)(e, t.bundleIdentifier, t.imageName, t.appIconDataUrl)
                let B = await (0, D.O)(e, M.prompt, M.threadReferences),
                  F = {
                    roomId: I,
                    text: (0, _.kv)({ ...M, ...B, appshotContexts: P }),
                    requestId: s ?? (0, x.A)(),
                    pageComment: c,
                    replyToMessageId: r,
                    attachmentIds: [...T.map((e) => e.fileId), ...(N?.attachments.map((e) => e.fileId) ?? [])],
                    messageMetadata: N?.messageMetadata,
                  }
                if (null != N) {
                  let e = {
                    createdAt: new Date().toISOString(),
                    comments: await Promise.all(
                      S.map(async (e, t) => ({ id: (0, U.qh)(e, t), digest: await (0, O.h)([e]) })),
                    ),
                  }
                  await Z(I).retainRequest(F, e)
                }
                return { request: F, attachments: [...T, ...(N?.attachments ?? [])] }
              })
              ;((A = { draftId: S, ...f }), e.set(B, (e) => ({ ...e, [l]: A })))
            }
            if (
              ((0, U.Yi)(A.request.messageMetadata).length > 0 && Z(A.request.roomId),
              X(),
              (0, P.VJ)(t) || "stopped" === e.get(P.NU, t))
            ) {
              let a = await (0, T.jP)(e, t)
              if ("unconfirmed" === a)
                throw new q.oy(
                  e
                    .get(k.g)
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
            let { request: N } = A,
              K = M?.get(N.roomId).messages.find((e) => e.id === N.replyToMessageId)
            ;(F?.(N.requestId),
              M?.addOptimistic(
                (0, z.$G)(
                  null == A.attachments ? { ...N, text: o.prompt } : N,
                  H,
                  A.attachments ?? [],
                  null == N.replyToMessageId
                    ? null
                    : { messageId: N.replyToMessageId, text: K?.text ?? "", author: K?.senderName ?? "" },
                ),
              ))
            try {
              let e = await J.client.send(A.request, { retry: !!A.deliveryUnknown })
              M?.delivered(N.roomId, N.requestId, e)
            } catch (t) {
              throw (
                M?.removeOptimistic(N.roomId, N.requestId),
                t instanceof q.Kr &&
                  t.deliveryUnknown &&
                  e.set(B, (e) =>
                    e[l]?.request.requestId !== A.request.requestId ? e : { ...e, [l]: { ...A, deliveryUnknown: !0 } },
                  ),
                t
              )
            }
            e.set(B, (e) => {
              if (e[l]?.request.requestId !== A.request.requestId) return e
              let t = { ...e }
              return (delete t[l], t)
            })
          } finally {
            ;(await G?.catch(() => {}), Q.abort())
          }
        })({
          scope: e,
          conversationId: W,
          hostId: (0, o.Y)(),
          context: { prompt: s, addedFiles: [], fileAttachments: [], imageAttachments: [], ideContext: null },
          requestId: S,
          pageComment: null == M ? void 0 : { page_id: c, thread_id: r },
          beforeSend: H,
        }),
        Y())
    }
  },
  VD7U(e, t, a) {
    var n = a("qmMi"),
      l = a("DBCl"),
      o = a("AuIy"),
      i = a("ASxG")
    a("SPnB")
    var r = a("OOaz"),
      s = a("MrGp"),
      d = a("OWtl"),
      c = a("kpIY"),
      u = a("Nwp9")
    let p = (0, n.bD)(d.u, (e) => (0, l.xa2)()),
      m = (0, n.bD)(d.u, (e) => !1),
      g = (0, n.bD)(d.u, (e) => !1),
      h = (0, n.bD)(d.u, (e) => (0, r.co)()),
      f = "page-dot-pending-comment-links",
      x = i.Ikc({ pageId: i.YjP(), threadId: i.YjP(), messageId: i.YjP() }),
      v = i.g1P(i.YjP(), x).catch({}),
      y = (0, u.m3)(f, v.parse({}), { coerceStoredValue: (e) => v.parse(e) }),
      b = (0, n.i1)(d.u, (e, { get: t }) => t(y)[e] ?? null),
      w = new Set()
    a.d(
      t,
      {},
      {
        Go: h,
        I9: function (e, t) {
          ;(0, c.EG)(f, { entries: { [e]: { delete: !0, expectedValue: t } } })
        },
        SJ: function (e, t, a) {
          let n = e.get(s.Jv, a.conversationId)
          if (null == n) return
          let l = (0, o.Ph)({ mapping: n, current_node: e.get(s.Od, a.conversationId) }).find(
            (e) => "user" === e.author.role,
          )?.id
          null != l &&
            (0, c.EG)(`page-comment-task-origins:${t}`, {
              entries: { [a.conversationId]: { value: { ...a, promptId: l }, createOnly: !0 } },
              maxEntries: 100,
            })
        },
        VS: function (e, t) {
          ;(0, c.EG)(f, { entries: { [e]: { value: t } } })
        },
        Z1: y,
        bF: b,
        fb: g,
        iZ: function (e, t) {
          let a = e.get(y)
          if (Object.hasOwn(a, t) || w.has(t) || Object.keys(a).length + w.size >= 256)
            throw Error("page_comment_link_recovery_pending")
          return (
            w.add(t),
            () => {
              w.delete(t)
            }
          )
        },
        ih: m,
        kq: function (e, t) {
          return JSON.stringify([e, t.owner, t.id, t.orbit?.threadId])
        },
        lk: p,
      },
    )
  },
  xXff(e, t, a) {
    var n = a("TwV4")
    a.d(
      t,
      {},
      {
        d: function (e) {
          return e.units.every(
            (e, t) =>
              ("markdown" === e.kind || (0 === t && "agent_instructions" === e.kind)) && "" === e.markdown.trim(),
          )
        },
        g: function (e) {
          return e.content.content.every((e, t) =>
            e.type.name === n.PY && 0 === t
              ? e.content.content.every((e) => "paragraph" === e.type.name && 0 === e.content.size)
              : "paragraph" === e.type.name && 0 === e.content.size,
          )
        },
      },
    )
  },
  eK1D(e, t, a) {
    var n = a("ABep"),
      l = a("QosV"),
      o = a("wTzC"),
      i = a("SOEF"),
      r = a("oyxz"),
      s = a("NraH")
    a.d(
      t,
      {},
      {
        A: function () {
          let e,
            t = (0, l.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(r.A, {
                  id: "codex.space.page.title.limit",
                  defaultMessage: "Titles can contain up to {limit} characters",
                  values: { limit: i.AmG },
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
        j: function (e) {
          let t,
            a,
            i = (0, l.c)(6),
            { limit: r, session: d, pageId: c } = e,
            u = c ?? d?.id
          return (
            i[0] !== r || i[1] !== d
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
                      limitDimension: "title" === r ? "title_scalars" : "markdown_bytes",
                    },
                  }
                }),
                (i[0] = r),
                (i[1] = d),
                (i[2] = t))
              : (t = i[2]),
            i[3] !== u || i[4] !== t
              ? ((a = (0, n.jsx)(s.O, {
                  operation: "pages.realtime.notice",
                  pageId: u,
                  errorUiType: o.CodexPagesErrorUiType.CODEX_PAGES_ERROR_UI_TYPE_SYNC_WARNING,
                  errorUiPresentation: "toast",
                  pagesErrorCode: "page_limit_exceeded",
                  getErrorContext: t,
                })),
                (i[3] = u),
                (i[4] = t),
                (i[5] = a))
              : (a = i[5]),
            a
          )
        },
      },
    )
  },
  Qu4l(e, t, a) {
    var n = a("hOYb")
    a.d(t, { H: () => n.H3 })
  },
  Z1L7(e, t, a) {
    function n(e) {
      return e.name ?? e.email ?? e.id
    }
    a.d(
      t,
      {},
      {
        $4: n,
        BM: function ({
          currentAccountUserId: e,
          existingAccountUserIds: t,
          selectedAccountUserIds: a,
          workspaceUsers: n,
        }) {
          let l = new Set(t),
            o = new Set(a)
          return n?.filter((t) => t.account_user_id !== e && !l.has(t.account_user_id) && !o.has(t.account_user_id))
        },
        xP: function (e) {
          return {
            chipLabel: e.email ?? void 0,
            colorKey: e.account_user_id,
            id: `user:${e.account_user_id}`,
            label: n(e),
            secondaryLabel: e.email ?? void 0,
          }
        },
      },
    )
  },
  n5oN(e, t, a) {
    var n = a("qmMi"),
      l = a("Ywss"),
      o = a("B0Wx"),
      i = a("m22M"),
      r = a("OWtl"),
      s = a("tSEg"),
      d = a("r6TF"),
      c = a("d6Ff")
    let u = (0, n.i1)(r.u, (e, { get: t }) => {
      if (null == e) return null
      let { pathname: a, search: n } = (0, l.Rr)(e)
      if (null == a) return null
      let r = (0, s.VJ)({ pathname: a, routeTemplate: a, search: n })
      switch (r.routeKind) {
        case "client-local-thread":
        case "local-thread": {
          let e = t(d.hQ, (0, c.z3)("client-local-thread" === r.routeKind ? r.clientThreadId : r.conversationId))
          if (e?.kind !== "local") return null
          return null == e.conversationId
            ? (e.pendingThreadStart?.title ?? e.pendingWorktree?.label ?? null)
            : (t(i.Qu, e.conversationId) ?? e.catalogTitle ?? e.summary?.title ?? null)
        }
        case "remote-thread":
        case "home":
        case "new-thread-panel":
        case "other":
          return null
        case "chatgpt-thread":
          return t(o.Mx, r.conversationId) ?? null
      }
    })
    a.d(t, {}, { m: u })
  },
  snnp(e, t, a) {
    let n = (0, a("ESTr").a)({
      name: "arrow-rotate-clockwise-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.641846, y: 1.641113, width: 12.716797, height: 12.716797 },
        visualBounds: { x: 1.641846, y: 1.641113, width: 12.716797, height: 12.716797 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.641846, y: 1.641113, width: 12.716797, height: 12.716797 },
        center: { x: 8.000244, y: 7.999512 },
        insets: { top: 1.641113, right: 1.641357, bottom: 1.64209, left: 1.641846 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.000244, y: 7.999512 }, foreground: { x: 8.000244, y: 7.999512 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.00024 1.64111C10.2192 1.64122 12.1707 2.77917 13.3079 4.50049V3.13916C13.3079 2.84921 13.5433 2.61377 13.8333 2.61377C14.1232 2.61379 14.3586 2.84922 14.3586 3.13916V6.05615C14.3585 6.34594 14.1231 6.58055 13.8333 6.58057H11.2405C10.9507 6.58047 10.7162 6.34589 10.7161 6.05615C10.7161 5.76626 10.9506 5.53086 11.2405 5.53076H12.6975C11.808 3.84247 10.039 2.69201 8.00024 2.69189C5.06864 2.69189 2.69183 5.06795 2.69165 7.99951C2.69165 10.9312 5.06853 13.3081 8.00024 13.3081C10.5257 13.308 12.6406 11.5439 13.177 9.18018C13.2412 8.89744 13.5222 8.71957 13.8049 8.78369C14.0877 8.84785 14.2646 9.12984 14.2004 9.4126C13.5578 12.244 11.0266 14.3578 8.00024 14.3579C4.48863 14.3579 1.64185 11.5111 1.64185 7.99951C1.64202 4.48805 4.48874 1.64111 8.00024 1.64111Z" fill="currentColor"/>',
    })
    a.d(t, {}, { E: n })
  },
  q3Tn(e, t, a) {
    let n = (0, a("ESTr").a)({
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
    a.d(t, {}, { h: n })
  },
  uPXa(e, t, a) {
    let n = (0, a("ESTr").a)({
      name: "cloud-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.001465, y: 2.667969, width: 17.99707, height: 12.99707 },
        visualBounds: { x: 1.001465, y: 2.667969, width: 17.99707, height: 12.99707 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.001465, y: 2.667969, width: 17.99707, height: 12.99707 },
        center: { x: 10, y: 9.166504 },
        insets: { top: 2.667969, right: 1.001465, bottom: 4.334961, left: 1.001465 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 9.166504 }, foreground: { x: 10, y: 9.166504 } },
      },
      capabilities: ["icon"],
      body: '<path d="M1.00146 10.833C1.00146 8.52389 2.6207 6.59406 4.78564 6.11523C5.64822 4.08974 7.65705 2.6681 9.99951 2.66797C12.9202 2.66797 15.3224 4.87836 15.6294 7.71777C17.5386 8.01995 18.9984 9.67212 18.9985 11.666C18.9985 13.8742 17.2077 15.665 14.9995 15.665H5.8335C3.16504 15.665 1.00146 13.5015 1.00146 10.833ZM2.33154 10.833C2.33154 12.7669 3.89958 14.335 5.8335 14.335H14.9995C16.4732 14.335 17.6685 13.1397 17.6685 11.666C17.6683 10.2488 16.5626 9.08908 15.1675 9.00293C14.7207 8.97537 14.3506 8.61516 14.3315 8.15137C14.2366 5.84171 12.3328 3.99805 9.99951 3.99805C8.14049 3.99818 6.55348 5.16887 5.93799 6.81543C5.82644 7.11391 5.5635 7.32722 5.25342 7.37891C3.59561 7.65482 2.33154 9.09703 2.33154 10.833Z" fill="currentColor"/>',
    })
    a.d(t, {}, { k: n })
  },
  nv3f(e, t, a) {
    let n = (0, a("ESTr").a)({
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
    a.d(t, {}, { X: n })
  },
}
//# sourceMappingURL=919312.4cf0502f45.js.map
