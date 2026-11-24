export const __rspack_esm_ids = [35702]
export const __webpack_modules__ = {
  KvJy(e, t, n) {
    var a = n("Fsq8"),
      i = n("qmMi"),
      r = n("DBCl"),
      l = n("Kwur"),
      o = n("OWtl"),
      s = n("rvFo"),
      u = n("SQbA")
    let d = ["appgen", "share-access"]
    async function c(e, t, n) {
      let a = await l.Request.safeGet("/websites/{project_id}/share_access", {
        parameters: { path: { project_id: e } },
        signal: t,
        expectedIdentity: n,
      })
      if (null == a) return null
      let { allowed_editors: i = [], users: r, ...o } = a
      return {
        ...o,
        users: [
          ...r.filter((e) => "owner" === e.role || !i.some((t) => t.account_user_id === e.account_user_id)),
          ...i.map((e) => ({ ...e, role: "editor", editable: !0 })),
        ],
      }
    }
    let p = (0, i.vU)(o.u, (e) => ({
      queryKey: [...d, e],
      queryFn: ({ signal: t }) => c(e, t),
      retry: !1,
      staleTime: s.D.ONE_MINUTE,
    }))
    async function f(e, t, n) {
      let a = [...d, e],
        i = new AbortController(),
        l = i.signal,
        o = setTimeout(() => i.abort(), 1e4)
      ;(await t.cancelQueries({ queryKey: a, exact: !0 }),
        await t.invalidateQueries({ queryKey: a, exact: !0, refetchType: "none" }))
      let s = t.fetchQuery({ queryKey: a, queryFn: ({ signal: t }) => c(e, t, n), retry: !1 }),
        u = t.getQueryCache().find({ queryKey: a, exact: !0 })?.promise
      try {
        let e = await (0, r._qC)(s, l)
        if (null == e) throw Error("Site access policy is unavailable")
        return e
      } catch (e) {
        throw (
          l.aborted &&
            t.getQueryCache().find({ queryKey: a, exact: !0 })?.promise === u &&
            (await t.cancelQueries({ queryKey: a, exact: !0 })),
          await t.invalidateQueries({ queryKey: a, exact: !0, refetchType: "none" }),
          e
        )
      } finally {
        clearTimeout(o)
      }
    }
    n.d(
      t,
      {},
      {
        DH: d,
        Jo: f,
        T6: function (e) {
          return (0, a.I)({
            scope: { id: `sites-share-access:${e}` },
            mutationKey: [...d, e, "update"],
            mutationFn: async ({ action: t, user: n, group: a }, { client: i }) => {
              let o,
                s = [...d, e],
                c = i.getQueryState(s),
                p = c?.isInvalidated || c?.status === "error" ? await f(e, i) : i.getQueryData(s),
                g = "access_mode" in t ? t.access_mode : p?.access_mode
              if (null == p || null == g || "admins_only" === g) throw Error("Site sharing is unavailable")
              try {
                if ("editor_changes" in t)
                  return (
                    await l.Request.safePost("/websites/{project_id}/share_access", {
                      parameters: { path: { project_id: e } },
                      requestBody: t,
                      retry: "never",
                    }),
                    (0, u.y_)(i, [e], "none"),
                    await f(e, i)
                  )
                if (
                  ((o = await l.Request.safePatch("/websites/{project_id}/share_access", {
                    parameters: { path: { project_id: e } },
                    requestBody: t,
                    retry: "never",
                  })),
                  void 0 === o || (null != o && !["pending", "accepted"].includes(o.status)))
                )
                  throw Error("Site sharing outcome is unavailable")
              } catch (t) {
                throw (await f(e, i).catch(() => void 0), t)
              }
              if ("editor_email" in t || (null != p.personal_editor_access && "email" in t && null == t.role))
                return ((0, u.y_)(i, [e], "none"), f(e, i))
              let h = i.getQueryCache().find({ queryKey: s, exact: !0 }),
                m = h?.promise,
                b = new AbortController(),
                v = setTimeout(() => b.abort(), 1e4)
              if (
                (h?.state.fetchStatus !== "idle" && null != m && (await (0, r._qC)(m, b.signal).catch(() => void 0)),
                clearTimeout(v),
                b.signal.aborted &&
                  null != h &&
                  i.getQueryCache().find({ queryKey: s, exact: !0 }) === h &&
                  h.promise === m &&
                  "idle" !== h.state.fetchStatus &&
                  h.cancel({ revert: !0 }),
                i.getQueryState(s)?.status !== "success")
              )
                return
              let I = b.signal.aborted || i.getQueryState(s)?.isInvalidated,
                y = i.setQueryData(s, (e) => {
                  if (null == e) return e
                  let i = { ...e }
                  if (
                    ("access_mode" in t &&
                      (i.access_mode =
                        "workspace_all" === t.access_mode && o?.status === "pending" ? "custom" : t.access_mode),
                    !("access_mode" in t))
                  ) {
                    let r = t.role
                    ;(null != o && (r = "role-site-editor" === o.role_id ? "editor" : "viewer"),
                      null != n &&
                        (i.users = [
                          ...e.users.filter(
                            (e) =>
                              "owner" === e.role ||
                              ((null == n.account_user_id || e.account_user_id !== n.account_user_id) &&
                                (null != n.account_user_id ||
                                  null != e.account_user_id ||
                                  null == n.email ||
                                  e.email !== n.email)),
                          ),
                          ...(null == r ? [] : [{ ...n, role: r, pending: o?.status === "pending" }]),
                        ]),
                      null != a &&
                        (i.groups = [
                          ...e.groups.filter((e) => e.id !== a.id),
                          ...(null == r ? [] : [{ ...a, pending: o?.status === "pending" }]),
                        ]))
                  }
                  return i
                })
              return (
                I && i.invalidateQueries({ queryKey: s, exact: !0, refetchType: "none" }),
                (0, u.y_)(i, [e], "none"),
                y ?? void 0
              )
            },
          })
        },
        ox: p,
      },
    )
  },
  PxnS(e, t, n) {
    var a = n("EA6X"),
      i = n("lSdY"),
      r = n("qmMi"),
      l = n("aiHW"),
      o = n("yGJW"),
      s = n("OWtl"),
      u = n("xsLm"),
      d = n("HgLj"),
      c = n("XW2n")
    let p = (0, r.vP)(s.u, () => new WeakMap()),
      f = (0, r.i1)(s.u, ({ widgetType: e, turnMessageId: t, sourceMessageId: n }, { get: a }) => {
        let r = a(c.vj)
        if (r?.productExperience !== i.b.CHATGPT_PRODUCT_EXPERIENCE_DOTS) return
        let l = n ?? t,
          o = null != t && r.messageIds.has(t) ? t : void 0
        if (null != l && (r.messageIds.has(l) || null != o))
          return { widgetType: e, messageId: l, assistantMessageId: o }
      })
    function g(e, t, n, i) {
      ;(0, o.yy)(e, a.wk, {
        ...t,
        actionType: n,
        widgetActionTarget: i,
        surfaceLocation: a.Rc.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
        isGenui: "model_written_dil" === t.widgetType || void 0,
      })
    }
    n.d(
      t,
      {},
      {
        Sl: f,
        bh: function (e, t, n, a) {
          return (0, d.P)(a, (n) => {
            if (!t || !n) return
            let a = e.get(p)
            if (a.get(n) !== t.messageId)
              return (0, u.q)(
                n,
                () => {
                  for (let e = (0, l.lh)(n); e; e = (0, l.lh)(e))
                    if (e.hasAttribute("data-shared-answer-widget-shell")) return !0
                  return (
                    a.set(n, t.messageId),
                    g(e, t, "CHATGPT_ENGAGEMENT_ACTION_TYPE_VIEWPORT_IMPRESSION", "widget_container"),
                    !0
                  )
                },
                { threshold: 0.01 },
              )
          })(n)
        },
        oT: function (e, t, n) {
          t && g(e, t, "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED", n)
        },
      },
    )
  },
  mr0q(e, t, n) {
    class a extends Event {
      method
      static eventName = "codexinputmethod"
      constructor(e) {
        ;(super(a.eventName, { bubbles: !0 }), (this.method = e))
      }
    }
    n.d(t, {}, { E: ["Tab", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"], K: a })
  },
  uB7x(e, t, n) {
    var a = n("CsaD"),
      i = n("ASxG")
    let r = i
        .YjP()
        .min(1)
        .max(80)
        .refine((e) => !/\p{Surrogate}/u.test(e), "Annotation IDs must be well-formed Unicode"),
      l = i.rej({
        id: r,
        label: a.qc,
        selector: i.YjP().min(1).max(1024),
        tagName: i.YjP().regex(/^[a-z][a-z0-9-]{0,79}$/),
        visible: i.zMY().optional(),
        rect: i.rej({ x: i.aig(), y: i.aig(), width: i.aig().nonnegative(), height: i.aig().nonnegative() }),
      }),
      o = i.rej({
        registrationId: r,
        annotationControls: a.Rf.refine(
          (e) => JSON.stringify(e).length <= 16384,
          "Annotation controls exceed the maximum size",
        ),
        targets: i.YOg(l).min(1).max(128),
      }),
      s = i.rej({
        carousel: i.aig().int().nonnegative().max(31),
        label: i.YjP().max(256).optional(),
        variant: i.YjP().min(1).max(256),
      }),
      u = i
        .gMt("type", [
          o.extend({ type: i.euz("register") }),
          o.extend({ type: i.euz("update") }),
          i.rej({ type: i.euz("select"), registrationId: r, targetId: r }),
          i.rej({ type: i.euz("dispose"), registrationId: r }),
          i.rej({ type: i.euz("escape") }),
          i.rej({ type: i.euz("variants"), selectedVariants: i.YOg(s).max(32) }),
        ])
        .superRefine((e, t) => {
          if ("register" !== e.type && "update" !== e.type) return
          let n = new Set()
          for (let [a, i] of e.targets.entries())
            (n.has(i.id) &&
              t.addIssue({
                code: "custom",
                message: "Annotation target IDs must be unique",
                path: ["targets", a, "id"],
              }),
              n.add(i.id))
        })
    n.d(t, {}, { A: u, g: "__codex_visualization_annotations__" })
  },
  pndd(e, t, n) {
    var a = n("Nh13")
    n.d(
      t,
      {},
      {
        w: function ({ accountId: e, userId: t, source: n, file: i, fragment: r, desiredAccessMode: l }) {
          return null == e || null == t
            ? null
            : {
                accountId: e,
                userId: t,
                sourceHostId: "codex" === n.kind ? n.hostId : "chatgpt",
                sourceThreadId: n.threadId,
                file: i,
                revision: `fragment-v1-${(0, a.D)(r)}`,
                desiredAccessMode: l,
              }
        },
      },
    )
  },
  Lec7(e, t, n) {
    var a = n("E8Sp"),
      i = n("jAnS")
    n.d(
      t,
      {},
      {
        H: function (e, t) {
          "chatgpt" === t.backend
            ? (0, a.oo)(e, (0, i.mv)(t.threadId ?? t.clientThreadId))
            : null != t.threadId && (0, a.Bq)(e, t.threadId, t.hostId)
        },
      },
    )
  },
  rD20(e, t, n) {
    var a = n("DBCl"),
      i = n("ASxG"),
      r = n("KaH3")
    let l = i.Ikc({
        id: i.YjP(),
        project_id: i.YjP(),
        status: i.euz("succeeded"),
        type: i.euz("publish"),
        url: i.YjP(),
      }),
      o = i
        .Ikc({
          result: i.Pq9().optional(),
          structuredContent: i.Pq9().optional(),
          structured_content: i.Pq9().optional(),
        })
        .catch({}),
      s = "(?:get_deployment_status|save_version_and_deploy_private|deploy_private_site_version|deploy_site_version)",
      u = RegExp(`^sites[._]${s}$`),
      d = RegExp(`/(?:sites_)?${s}$`)
    n.d(
      t,
      {},
      {
        r: function (e) {
          if (
            "codex_apps" !== e.invocation.server ||
            !e.completed ||
            e.result?.type !== "success" ||
            0 === (0, r.yT)([e]).length
          )
            return null
          let t = e.invocationResourceUri ?? e.mcpAppResourceUri
          if (!(null == t ? u.test(e.invocation.tool) : d.test(t))) return null
          let n = e.result.structuredContent,
            i = o.parse(n),
            s = o.parse(i.result),
            c = l.safeParse(
              i.structuredContent ??
                i.structured_content ??
                s.structuredContent ??
                s.structured_content ??
                i.result ??
                n,
            )
          if (!c.success || !c.data.id.trim() || !c.data.project_id.trim()) return null
          try {
            let e = new URL(c.data.url)
            if ("https:" !== e.protocol || e.username || e.password || (0, a.hfz)(e.href)) return null
            return { projectId: c.data.project_id, url: e.href }
          } catch {
            return null
          }
        },
      },
    )
  },
  QpmX(e, t, n) {
    var a = n("bH3R"),
      i = n("qmMi"),
      r = n("DBCl"),
      l = n("ASxG"),
      o = n("ChYf"),
      s = n("Dgwo"),
      u = n("l00C"),
      d = n("tl5a"),
      c = n("vdpW"),
      p = n("pA0U"),
      f = n("KvJy"),
      g = n("SPnB"),
      h = n("aFoA"),
      m = n("OOaz"),
      b = n("KnMC"),
      v = n("yGJW"),
      I = n("OWtl"),
      y = n("gZd7"),
      x = n("V3rO"),
      w = n("d6Ff"),
      _ = n("mZsk"),
      A = n("OMIV"),
      E = n("kpIY"),
      S = n("Qox8"),
      k = n("UglZ"),
      C = n("rD20")
    let z = "codex:visualization-share-admissions-v1",
      j = l.g1P(l.YjP(), l.KCZ([k.z2, k.tE])),
      M = (0, i.bD)(I.u, (e) => "idle", void 0, { autoDispose: !1 }),
      O = (0, i.bD)(I.u, (e) => null, void 0, { autoDispose: 6e4 }),
      N = (0, i.T1)(I.u, () => new Map()),
      R = (0, i.A4)(
        I.u,
        (e) => null,
        (e, { get: t }) => {
          if (
            "chatgpt" === e.backend ||
            null == e.threadId ||
            !t(A.JW, "4070967303") ||
            t(g.chatGptAuthenticatedAccountId$) !== e.accountId ||
            t(g.o8) !== e.userId
          )
            return
          let n = t(u.u$, e.hostId)
          if (null == n) return
          let a = n.rpc.ensureConversationHistoryLoaded((0, r.JXB)(e.threadId), [], { force: !0 })
          return (a.catch(() => {}), () => a[Symbol.dispose]())
        },
        { key: (e) => JSON.stringify([D(e), e.attemptId, e.threadId]), autoDispose: !0 },
      ),
      P = (0, i.SZ)(
        I.u,
        () => "loading",
        ({ set: e }) => {
          let t = !0
          return (
            n
              .e(818386)
              .then(n.bind(n, "HXTG"))
              .then(
                (n) => {
                  t && e(n)
                },
                () => {
                  t && e("failed")
                },
              ),
            () => {
              t = !1
            }
          )
        },
      )
    function T(e) {
      return `${z}:${D(e)}`
    }
    function D(e) {
      return JSON.stringify([e.accountId, e.userId, e.sourceHostId, e.sourceThreadId, e.file, e.revision])
    }
    function L(e, t) {
      return e.get(g.chatGptAuthenticatedAccountId$) === t.accountId && e.get(g.o8) === t.userId
    }
    function U(e, t) {
      if (!L(e, t)) return !1
      let n = D(t),
        a = k.Us.safeParse((0, E.TB)(k.dj)).data
      return null != a && null == a[n] && Object.keys(a).length >= 100
        ? (e.set(M, n, "capacity"), !1)
        : ((0, E.EG)(k.dj, { entries: { [n]: { value: t } } }), !0)
    }
    function V(e, t) {
      if (!L(e, t)) return null
      let n = k.Us.safeParse((0, E.TB)(k.dj)).data,
        a = D(t),
        i = e.get(O, a),
        r = n?.[a],
        l = null != i && i.attemptId !== r?.attemptId ? i : r
      if (null == l) return null
      let o =
        l.threadId ??
        ("chatgpt" === l.backend
          ? e.get(h.CL, l.clientThreadId)
          : (e.get(x.Tl, l.clientThreadId) ?? H(e.get(y.H, l.clientThreadId))))
      return null == o ? l : { ...l, threadId: o }
    }
    function F(e, t) {
      let n
      if (!e.get(A.JW, "4070967303")) return Promise.resolve()
      let a = V(e, t)
      if (null == a) return Promise.resolve()
      if (
        null != a.publication &&
        (null == a.desiredAccessMode ||
          "confirmed" === a.publication.accessStatus ||
          "failed" === a.publication.accessStatus)
      )
        return $(e, a).catch(() => {})
      let i = e.get(N, void 0),
        l = D(t),
        o = i.get(l)
      if (null != o) return o
      let s = e
        .when(({ get: e }) => {
          if (!e(A.JW, "4070967303")) return !0
          let a = e(G, t)
          return ["ready", "sharing", "sharing-failed", "failed", "account-changed"].includes(a.phase)
            ? ((n = a), !0)
            : (null != a.job && "chatgpt" !== a.job.backend && null != a.job.threadId && e(R, a.job), !1)
        })
        .then(async () => {
          if (n?.phase === "ready" || n?.phase === "sharing") {
            let a = V(e, t)
            if (a?.attemptId !== n.job.attemptId) return
            let i = { ...a, publication: a.publication ?? { url: n.url, projectId: n.projectId } }
            U(e, i) &&
              ("sharing" === n.phase &&
                (await (async function (e, t) {
                  if (!e.get(A.JW, "4070967303") || null == t.publication || !L(e, t)) return
                  let { projectId: n } = t.publication,
                    a = "failed"
                  try {
                    if (
                      (await e.when(({ get: e }) => {
                        if (
                          !e(A.JW, "4070967303") ||
                          e(g.chatGptAuthenticatedAccountId$) !== t.accountId ||
                          e(g.o8) !== t.userId
                        )
                          return !0
                        if ("chatgpt" === t.backend) {
                          let n = e(P)
                          return "string" != typeof n && e(n.cloudShareTaskFinished$, t)
                        }
                        if (null == t.threadId) return !1
                        let n = { hostId: t.hostId, threadId: (0, r.JXB)(t.threadId) }
                        ;(e(c.Ct, n), e(R, t))
                        let a = e(d.zp, n)
                        if (a?.type === "active") return a.activeFlags.length > 0
                        let i = e(c._2, n),
                          l = e(c.OM, i)
                        return !0 === e(c.uI, n) && ("completed" === l || "failed" === l || "interrupted" === l)
                      }),
                      await e.query.invalidate(f.ox, n, { refetchType: "none" }),
                      !e.get(A.JW, "4070967303") || !L(e, t))
                    )
                      return
                    let i = await e.query.fetch(f.ox, n)
                    i?.access_mode === "workspace_all" && (a = "confirmed")
                  } catch {}
                  if (!e.get(A.JW, "4070967303")) return
                  let i = V(e, t)
                  i?.attemptId === t.attemptId &&
                    null != i.publication &&
                    U(e, { ...i, publication: { ...i.publication, accessStatus: a } })
                })(e, i)),
              await $(e, i))
          }
        })
        .catch(() => {})
        .finally(() => i.delete(l))
      return (
        i.set(l, s),
        "preparing" === a.phase &&
          null == a.threadId &&
          (async function (e, t) {
            await navigator.locks?.request(T(t), () =>
              navigator.locks.request(z, () => {
                if (!e.get(A.JW, "4070967303")) return
                let n = V(e, t),
                  a = j.parse(JSON.parse(localStorage.getItem(z) ?? "{}"))[D(t)]
                n?.attemptId === t.attemptId &&
                  "preparing" === n.phase &&
                  null == n.threadId &&
                  null == n.publication &&
                  a?.attemptId === t.attemptId &&
                  "preparing" === a.phase &&
                  U(e, { ...n, phase: "failed" })
              }),
            )
          })(e, a).catch(() => {}),
        s
      )
    }
    async function $(e, t) {
      if (!S.H) return
      let i = V(e, t)
      if (
        i?.attemptId !== t.attemptId ||
        "pending" !== i.completionFeedback ||
        null == i.publication ||
        ("workspace_all" === i.desiredAccessMode && "confirmed" !== i.publication.accessStatus) ||
        !e.get(A.JW, "4070967303") ||
        (await e.when(
          ({ get: e }) =>
            !e(A.JW, "4070967303") ||
            e(g.chatGptAuthenticatedAccountId$) !== t.accountId ||
            e(g.o8) !== t.userId ||
            !e(o.G, { name: "browser.in-app" }).isLoading,
        ),
        !e.get(A.JW, "4070967303") || !L(e, t))
      )
        return
      e.get(o.G, { name: "browser.in-app" }).isCapable && (await _.ZZ.whenReached("first_content_visible"))
      let { showShareCompletion: r } = await n.e(656480).then(n.bind(n, "iBam"))
      await navigator.locks?.request(z, () => {
        let n = V(e, t)
        if (
          n?.attemptId !== t.attemptId ||
          "pending" !== n.completionFeedback ||
          null == n.publication ||
          ("workspace_all" === n.desiredAccessMode && "confirmed" !== n.publication.accessStatus) ||
          !e.get(A.JW, "4070967303")
        )
          return
        let i = j.parse(JSON.parse(localStorage.getItem(z) ?? "{}")),
          l = D(t),
          o = i[l]
        if (o?.attemptId === t.attemptId) {
          if ("shown" === o.completionFeedback) return void U(e, { ...n, completionFeedback: "shown" })
          if (
            ((i[l] = { ...o, completionFeedback: "shown" }),
            localStorage.setItem(z, JSON.stringify(i)),
            U(e, { ...n, completionFeedback: "shown" }))
          ) {
            try {
              ;(0, v.yy)(e, a.CodexInlineVisualizationShareSucceeded, {})
            } catch {}
            r(e, n.publication.url)
          }
        }
      })
    }
    let B = (0, i.A4)(
        I.u,
        (e) => !1,
        (e, { get: t, set: n, scope: a }) => {
          ;(n(null != t(G, e).job), F(a, e))
        },
      ),
      W = (0, i.i1)(I.u, (e, { get: t }) =>
        t(A.JW, "4070967303") ? (t(B, e), t(G, e)) : { phase: "confirm", job: null },
      ),
      G = (0, i.i1)(I.u, (e, { get: t, scope: n }) => {
        if (!t(A.JW, "4070967303")) return { phase: "confirm", job: null }
        if (t(g.chatGptAuthenticatedAccountId$) !== e.accountId || t(g.o8) !== e.userId)
          return { phase: "account-changed", job: null }
        let a = D(e),
          i = t(k.Hy)?.[a],
          l = t(O, a),
          o = null != l && l.attemptId !== i?.attemptId ? l : i
        if (null == o) {
          let e = t(M, a)
          return { phase: "idle" === e ? "confirm" : e, job: null }
        }
        if (null != o.publication) {
          let e = "ready"
          return (
            "workspace_all" === o.desiredAccessMode &&
              "confirmed" !== o.publication.accessStatus &&
              (e = "failed" === o.publication.accessStatus ? "sharing-failed" : "sharing"),
            { phase: e, job: o, ...o.publication }
          )
        }
        if ("chatgpt" === o.backend) {
          let e = t(P),
            n =
              "string" == typeof e
                ? { phase: "failed" === e ? "unavailable" : "unconfirmed", job: o }
                : t(e.cloudShareStatus$, o)
          return "unconfirmed" === n.phase && "preparing" === o.phase && "preparing" === t(M, a)
            ? { phase: "preparing", job: n.job }
            : n
        }
        let s = o.threadId ?? t(x.Tl, o.clientThreadId) ?? H(t(y.H, o.clientThreadId))
        if (null == s) {
          let e = "unconfirmed"
          return (
            "failed" === o.phase
              ? (e = "failed")
              : "preparing" === o.phase && "preparing" === t(M, a) && (e = "preparing"),
            { phase: e, job: o }
          )
        }
        let u = { ...o, threadId: s },
          f = { hostId: u.hostId, threadId: (0, r.JXB)(s) }
        t(c.Ct, f)
        let h = t(c._2, f),
          m = t(c.M, f)
        for (let e of m?.slice().reverse() ?? []) {
          ;(t(c.hm, e), t(c.OM, e))
          let a = (0, c.od)(n, e)
          if (null != a)
            for (let n of (0, p.W)(a.items).reverse()) {
              if ("mcpToolCall" !== n.type) continue
              let i = t(c.mz, { ...e, itemId: n.id })
              if (i?.type !== "mcpToolCall") continue
              let r = (0, C.r)((0, b.H5)(a, i))
              if (null != r)
                return {
                  phase: "workspace_all" === u.desiredAccessMode ? "sharing" : "ready",
                  job: u,
                  url: r.url,
                  projectId: r.projectId,
                }
            }
        }
        let v = t(d.zp, f)
        if (v?.type === "active" && v.activeFlags.length > 0) return { phase: "needs-input", job: u }
        let I = t(c.fl, f)
        if ("error" === I || "unavailable" === I || "missing" === I) return { phase: "unavailable", job: u }
        let w = t(c.OM, h)
        return h?.entityKey === u.previousTurnKey
          ? { phase: "unconfirmed", job: u }
          : "ready" !== I || !0 !== t(c.uI, f)
            ? { phase: "inProgress" === w ? "publishing" : "unconfirmed", job: u }
            : "failed" === w || "interrupted" === w
              ? { phase: "failed", job: u }
              : "completed" === w
                ? { phase: "needs-input", job: u }
                : "failed" === u.phase && null == h
                  ? { phase: "failed", job: u }
                  : { phase: "inProgress" === w ? "publishing" : "unconfirmed", job: u }
      })
    function H(e) {
      let t = (0, w.Pc)(e)
      return null == t ? e : "local" === t.kind ? t.threadId : null
    }
    n.d(
      t,
      {},
      {
        CU: function (e) {
          return e.watch(({ get: t }) => {
            for (let n of t(k.PJ)) F(e, n)
          })
        },
        HT: async function (e, t, n, a = "codex") {
          if (!e.get(A.JW, "4070967303")) return null
          let i = D(t)
          if (null == navigator.locks) return (e.set(M, i, "unsupported"), null)
          try {
            return await navigator.locks.request(z, () => {
              if (!e.get(A.JW, "4070967303") || !L(e, t)) return null
              let l = V(e, t)
              if (null != l && (!n || "failed" !== e.get(W, t).phase)) return null
              let o = j.parse(JSON.parse(localStorage.getItem(z) ?? "{}")),
                s = o[i]
              if (null != s && s.attemptId !== l?.attemptId) {
                let n =
                  "chatgpt" === s.backend
                    ? { ...t, ...s, phase: s.phase ?? "unconfirmed" }
                    : { ...t, ...s, hostId: s.hostId ?? "local", phase: s.phase ?? "unconfirmed" }
                return (e.set(O, i, n), null)
              }
              let u = k.Us.safeParse((0, E.TB)(k.dj)).data
              if (null == s && new Set([...Object.keys(o), ...Object.keys(u ?? {})]).size >= 100) {
                let t = Object.entries(u ?? {}).find(
                  ([, e]) =>
                    null != e.publication &&
                    (null == e.desiredAccessMode || "confirmed" === e.publication.accessStatus),
                )
                if (null == t) return (e.set(M, i, "capacity"), null)
                ;(delete o[t[0]], (0, E.EG)(k.dj, { entries: { [t[0]]: null } }))
              }
              let d = {
                  ...t,
                  attemptId: crypto.randomUUID(),
                  threadId: l?.threadId,
                  phase: "preparing",
                  completionFeedback: "pending",
                },
                p = l?.threadId == null ? a : (l.backend ?? "codex"),
                f =
                  "chatgpt" === p
                    ? {
                        ...d,
                        backend: p,
                        sideChat: l?.backend === "chatgpt" && null != l.threadId ? l.sideChat : void 0,
                        clientThreadId: l?.backend === "chatgpt" && null != l.threadId ? l.clientThreadId : (0, m.co)(),
                      }
                    : {
                        ...d,
                        hostId: l?.threadId != null && "chatgpt" !== l.backend ? l.hostId : t.sourceHostId,
                        sideChat: l?.backend !== "chatgpt" && l?.threadId != null ? l.sideChat : void 0,
                        clientThreadId:
                          null != l && "chatgpt" !== l.backend && null != l.threadId ? l.clientThreadId : (0, r.xa2)(),
                        previousTurnKey:
                          l?.threadId == null || "chatgpt" === l.backend
                            ? void 0
                            : e.get(c._2, { hostId: l.hostId, threadId: (0, r.JXB)(l.threadId) })?.entityKey,
                      }
              return ((o[i] = "chatgpt" === f.backend ? k.tE.parse(f) : k.z2.parse(f)),
              localStorage.setItem(z, JSON.stringify(o)),
              U(e, f))
                ? (e.set(O, i, null), e.set(M, i, "preparing"), f)
                : null
            })
          } catch {
            return (L(e, t) && e.set(M, i, "unsupported"), null)
          }
        },
        ND: M,
        SR: U,
        WS: async function (e, t) {
          return navigator.locks.request(z, () => {
            if (!e.get(A.JW, "4070967303")) return !1
            let n = V(e, t),
              a = j.parse(JSON.parse(localStorage.getItem(z) ?? "{}")),
              i = D(t),
              r = a[i]
            return (
              n?.attemptId === t.attemptId &&
              r?.attemptId === t.attemptId &&
              ((a[i] = { ...r, phase: "unconfirmed" }),
              localStorage.setItem(z, JSON.stringify(a)),
              U(e, { ...n, phase: "unconfirmed" }))
            )
          })
        },
        Yz: function (e, t, n) {
          let a = V(e, t)
          if (a?.attemptId === t.attemptId) {
            if ("failed" === n.status) U(e, { ...a, phase: "failed" })
            else if ("created" === n.status) {
              if ("submitted" === a.phase && "outcome-unknown" === n.firstTurn.status) return
              let t = "failed"
              ;("accepted" === n.firstTurn.status
                ? (t = "submitted")
                : "outcome-unknown" === n.firstTurn.status && (t = "unconfirmed"),
                U(e, { ...a, threadId: n.conversationId, phase: t }))
            }
          }
        },
        ay: L,
        jl: async function (e, t) {
          if ((await e.get(N, void 0).get(D(t)), !e.get(A.JW, "4070967303"))) return
          let n = V(e, t)
          n?.publication != null &&
            "workspace_all" === n.desiredAccessMode &&
            U(e, { ...n, publication: { ...n.publication, accessStatus: "pending" } }) &&
            (await F(e, t))
        },
        lP: V,
        rT: T,
        t0: F,
        tZ: D,
        y3: async function (e, t) {
          if (!e.get(A.JW, "4070967303")) return
          let a = V(e, t)
          if (null != a) {
            if (null != a.publication) return void (await F(e, t))
            if ((F(e, t), null != a.threadId)) {
              if ("chatgpt" === a.backend) {
                let { chatGptConversationQueryById$: i } = await Promise.resolve().then(n.bind(n, "CKur"))
                if (!e.get(A.JW, "4070967303") || !L(e, t)) return
                await e.query.getOrFetch(i, a.threadId)
                return
              }
              await (0, s.V)(e, a.hostId).ensureConversationHistoryLoaded((0, r.JXB)(a.threadId))
            }
          }
        },
        yz: W,
      },
    )
  },
  FFQV(e, t, n) {
    n.d(t, { VisualizationDirectiveRenderer: () => tH, VisualizationSandbox: () => tL })
    var a = n("ABep"),
      i = n("QosV"),
      r = n("on57"),
      l = n("qmMi"),
      o = n("zKw6"),
      s = n.n(o),
      u = n("F6B1"),
      d = n("zd8w"),
      c = n("Wf1j"),
      p = n("c3f5"),
      f = n("OWtl"),
      g = n("Nh13"),
      h = n("SRbQ"),
      m = n("mBJV"),
      b = n("iRMi"),
      v = n("bH3R"),
      I = n("dKNT"),
      y = n("a3wQ"),
      x = n("dOfB"),
      w = n("DBCl"),
      _ = n("IhIa"),
      A = n("Wefw"),
      E = n("QhQG"),
      S = n("Dgwo"),
      k = n("tl5a"),
      C = n("vdpW"),
      z = n("i8Zd"),
      j = n("RaBo"),
      M = n("SPnB"),
      O = n("vNSg"),
      N = n("oyxz"),
      R = n("aqd9")
    let P = [
      (0, a.jsx)(
        N.A,
        { id: "chatgpt.appBlock.loading.sketchingInterface", defaultMessage: "Sketching the interface" },
        "sketchingInterface",
      ),
      (0, a.jsx)(
        N.A,
        { id: "chatgpt.appBlock.loading.shapingLayout", defaultMessage: "Shaping the layout" },
        "shapingLayout",
      ),
      (0, a.jsx)(
        N.A,
        { id: "chatgpt.appBlock.loading.arrangingPieces", defaultMessage: "Arranging the pieces" },
        "arrangingPieces",
      ),
      (0, a.jsx)(
        N.A,
        { id: "chatgpt.appBlock.loading.polishingVisuals", defaultMessage: "Polishing the visuals" },
        "polishingVisuals",
      ),
      (0, a.jsx)(
        N.A,
        { id: "chatgpt.appBlock.loading.tuningInputs", defaultMessage: "Tuning the inputs" },
        "tuningInputs",
      ),
      (0, a.jsx)(
        N.A,
        { id: "chatgpt.appBlock.loading.addingInteractivity", defaultMessage: "Adding interactivity" },
        "addingInteractivity",
      ),
      (0, a.jsx)(
        N.A,
        { id: "chatgpt.appBlock.loading.wiringControls", defaultMessage: "Wiring the controls" },
        "wiringControls",
      ),
      (0, a.jsx)(
        N.A,
        { id: "chatgpt.appBlock.loading.composingInteractions", defaultMessage: "Composing the interactions" },
        "composingInteractions",
      ),
      (0, a.jsx)(
        N.A,
        { id: "chatgpt.appBlock.loading.calibratingPreview", defaultMessage: "Calibrating the preview" },
        "calibratingPreview",
      ),
      (0, a.jsx)(
        N.A,
        { id: "chatgpt.appBlock.loading.refiningDetails", defaultMessage: "Refining the details" },
        "refiningDetails",
      ),
    ]
    function T(e) {
      let t,
        n,
        l,
        o,
        s,
        u,
        c,
        p = (0, i.c)(19),
        { isActive: f, isStreaming: g, title: h } = e,
        m = void 0 === f || f,
        [b, v] = (0, d.useState)(0)
      if (
        (p[0] !== m || p[1] !== g || p[2] !== b
          ? ((t = () => {
              if (!m || !g || b === P.length) return
              let e = window.setTimeout(() => {
                v(D)
              }, 2800)
              return () => window.clearTimeout(e)
            }),
            (n = [m, g, b]),
            (p[0] = m),
            (p[1] = g),
            (p[2] = b),
            (p[3] = t),
            (p[4] = n))
          : ((t = p[3]), (n = p[4])),
        (0, d.useEffect)(t, n),
        b > 0)
      )
        l = P[b - 1]
      else if (h) {
        let e
        ;(p[5] !== h
          ? ((e = (0, a.jsx)(N.A, {
              id: "chatgpt.appBlock.loading.generatingApp",
              defaultMessage: "Generating {title}",
              values: { title: h },
            })),
            (p[5] = h),
            (p[6] = e))
          : (e = p[6]),
          (l = e))
      } else {
        let e
        ;(p[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(N.A, {
              id: "chatgpt.appBlock.loading.creatingInterface",
              defaultMessage: "Creating the interface",
            })),
            (p[7] = e))
          : (e = p[7]),
          (l = e))
      }
      let I = g ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      p[8] !== I
        ? ((o = (0, r.A)(
            "grid transition-[grid-template-rows,opacity] duration-basic ease-out motion-reduce:transition-none",
            I,
          )),
          (p[8] = I),
          (p[9] = o))
        : (o = p[9])
      let y = !g,
        x = g && "loading-shimmer-pure-text"
      return (
        p[10] !== x
          ? ((s = (0, r.A)("text-size-chat text-secondary select-none", x)), (p[10] = x), (p[11] = s))
          : (s = p[11]),
        p[12] !== l || p[13] !== s
          ? ((u = (0, a.jsx)("div", {
              className: "min-h-0 overflow-hidden",
              children: (0, a.jsx)("div", {
                className: "pb-3",
                children: (0, a.jsx)("span", { ref: R.d, className: s, children: l }),
              }),
            })),
            (p[12] = l),
            (p[13] = s),
            (p[14] = u))
          : (u = p[14]),
        p[15] !== o || p[16] !== y || p[17] !== u
          ? ((c = (0, a.jsx)("div", {
              className: o,
              "aria-atomic": "true",
              "aria-hidden": y,
              "aria-live": "polite",
              role: "status",
              children: u,
            })),
            (p[15] = o),
            (p[16] = y),
            (p[17] = u),
            (p[18] = c))
          : (c = p[18]),
        c
      )
    }
    function D(e) {
      return e + 1
    }
    var L = n("TUMj"),
      U = n("Fl60"),
      V = n("PxnS"),
      F = n("dsow"),
      $ = n("seW7"),
      B = n("f4ql"),
      W = n("Ld2s"),
      G = n("Ot7V"),
      H = n("HOLv"),
      q = n("SGsN"),
      J = n("hEYZ"),
      Y = n("c94E"),
      X = n("iIHp"),
      Z = n("v7ut"),
      K = n("sF0J"),
      Q = n("LGZt"),
      ee = n("AVkf"),
      et = n("qMca"),
      en = n("TYK1"),
      ea = n("kjQz"),
      ei = n("yGJW"),
      er = n("GaA7"),
      el = n("OMIV"),
      eo = n("ripK"),
      es = n("mr0q"),
      eu = n("WFY2"),
      ed = n("bIvi"),
      ec = n("D6SK"),
      ep = n("uB7x"),
      ef = n("CsaD")
    function eg(e, t) {
      return (t ?? []).filter(
        (t) =>
          void 0 !== t.value &&
          e.controls.some(
            (e) =>
              e.callback === t.callback &&
              e.currentValue === t.previousValue &&
              ef.Rf.safeParse({ controls: [{ ...e, currentValue: t.value }] }).success,
          ),
      )
    }
    var eh = n("SZCv"),
      em = n.n(eh)
    function eb() {
      return { registrations: [], selectedVariants: [], selection: null, drafts: [], body: "", isOpen: !1 }
    }
    function ev(e, t) {
      if ("reset" === t.type) return eb()
      if ("reset-drafts" === t.type)
        return {
          ...e,
          drafts: [...eI(e.registrations)].flatMap(([e, t]) => {
            let n = t.annotationControls.controls.flatMap((e) =>
              null != e.currentValue && e.currentValue !== (0, ef.aJ)(e)
                ? [{ callback: e.callback, previousValue: e.currentValue, value: e.currentValue }]
                : [],
            )
            return 0 === n.length
              ? []
              : [{ registrationId: t.registrationId, targetId: e, annotationControlChanges: n }]
          }),
        }
      if ("body" === t.type) return e.body === t.body ? e : { ...e, body: t.body }
      if ("change" === t.type) {
        let { change: n } = t,
          a = eI(e.registrations).get(n.targetId)
        if (a?.registrationId !== n.registrationId) return e
        let i = n.annotationControlChanges.filter((e) =>
            a.annotationControls.controls.some((t) => t.callback === e.callback && t.currentValue === e.previousValue),
          ),
          r = e.drafts.filter((e) => e.registrationId !== n.registrationId || e.targetId !== n.targetId)
        return (i.length > 0 && r.push({ ...n, annotationControlChanges: i }), { ...e, drafts: r })
      }
      if ("close" === t.type) return e.isOpen ? { ...e, isOpen: !1 } : e
      if ("open" === t.type) return null == e.selection || e.isOpen ? e : { ...e, isOpen: !0 }
      let n = t.message
      if ("variants" === n.type)
        return em()(e.selectedVariants, n.selectedVariants) ? e : { ...e, selectedVariants: n.selectedVariants }
      if ("escape" === n.type) return e.isOpen ? { ...e, isOpen: !1 } : e
      if ("select" === n.type) {
        if (e.isOpen && e.selection?.registrationId === n.registrationId && e.selection.targetId === n.targetId)
          return e
        let t = eI(e.registrations).get(n.targetId)
        return t?.registrationId !== n.registrationId
          ? e
          : { ...e, selection: { registrationId: n.registrationId, targetId: n.targetId }, isOpen: !0 }
      }
      if ("dispose" === n.type) {
        let t = e.registrations.filter((e) => e.registrationId !== n.registrationId)
        if (t.length === e.registrations.length) return e
        let a = e.drafts.filter((e) => e.registrationId !== n.registrationId)
        if (e.selection?.registrationId !== n.registrationId) return { ...e, registrations: t, drafts: a }
        let i = eI(t).entries().next().value
        return {
          ...e,
          registrations: t,
          drafts: a,
          selection: null == i ? null : { registrationId: i[1].registrationId, targetId: i[0] },
          isOpen: e.isOpen && null != i,
        }
      }
      let a = e.registrations.findIndex((e) => e.registrationId === n.registrationId)
      if (
        ("register" === n.type && -1 !== a) ||
        ("update" === n.type && -1 === a) ||
        (-1 === a && e.registrations.length >= 64)
      )
        return e
      let i = e.registrations[a],
        r =
          null == i
            ? e.drafts
            : e.drafts.flatMap((e) => {
                if (e.registrationId !== n.registrationId) return [e]
                let t = i.targets.find((t) => t.id === e.targetId),
                  a = n.targets.find((t) => t.id === e.targetId)
                if (null == t || null == a) return []
                let r = e.annotationControlChanges.filter((e) => {
                  let t = i.annotationControls.controls.find((t) => t.callback === e.callback),
                    a = n.annotationControls.controls.find((t) => t.callback === e.callback)
                  return null != a && em()(t, a)
                })
                return 0 === r.length ? [] : [{ ...e, annotationControlChanges: r }]
              }),
        l = [...e.registrations]
      if ((-1 === a ? l.push(n) : (l[a] = n), l.reduce((e, t) => e + t.targets.length, 0) > 1024)) return e
      let o = eI(l),
        s = null == e.selection ? void 0 : o.get(e.selection.targetId)
      return {
        ...e,
        registrations: l,
        drafts: r.filter((e) => o.get(e.targetId)?.registrationId === e.registrationId),
        selection:
          null != e.selection && null != s
            ? { registrationId: s.registrationId, targetId: e.selection.targetId }
            : { registrationId: o.get(n.targets[0].id)?.registrationId ?? n.registrationId, targetId: n.targets[0].id },
      }
    }
    function eI(e) {
      return new Map(e.flatMap((e) => e.targets.map((t) => [t.id, e])))
    }
    let ey = (0, d.lazy)(() =>
      Promise.all([n.e(633339), n.e(923720), n.e(481944)])
        .then(n.bind(n, "rNHH"))
        .then((e) => ({ default: e.VisualizationAnnotationEditor })),
    )
    function ex(e) {
      let t,
        n,
        r,
        o,
        s,
        u,
        p,
        g,
        h,
        m,
        b,
        v,
        I = (0, i.c)(31),
        {
          ref: y,
          document: x,
          isActive: w,
          isPreviewOpen: _,
          isVisible: A,
          sandboxApi: E,
          widgetStateIdentity: S,
          onSubmit: k,
        } = e,
        C = (0, l.gh)(f.u),
        z = (0, c.A)(),
        [j, M] = (0, d.useReducer)(ev, void 0, eb),
        [O, N] = (0, d.useState)(!1)
      I[0] !== x ? ((t = Object.values(x)), (I[0] = x), (I[1] = t)) : (t = I[1])
      let R = t,
        [P, T] = (0, d.useState)(R)
      R.some((e, t) => e !== P[t]) && (T(R), M({ type: "reset" }))
      let D = (0, d.useRef)(null),
        L = w && !_,
        [U, V] = (0, d.useState)(L)
      ;(U !== L && (V(L), !L && j.isOpen && M({ type: "close" })),
        I[2] !== L || I[3] !== x || I[4] !== P || I[5] !== j.isOpen
          ? ((n = () => ({
              handleMessage: (e) => {
                let t = ep.A.safeParse(e)
                if (
                  !t.success ||
                  (!x.allowAnnotations && "variants" !== t.data.type) ||
                  ((!L || !j.isOpen) && "select" === t.data.type)
                )
                  return Promise.reject(Error("Inline visualizations cannot call tools"))
                D.current?.documentValues !== P && (D.current = { documentValues: P, counts: new Map(), total: 0 })
                let n = D.current,
                  a = t.data
                if ("register" === a.type || "update" === a.type) {
                  let e = n.counts.get(a.registrationId),
                    t = n.total - (e ?? 0) + a.targets.length
                  if (
                    ("register" === a.type && (null != e || n.counts.size >= 64)) ||
                    ("update" === a.type && null == e) ||
                    t > 1024
                  )
                    return Promise.reject(Error("Inline visualizations cannot call tools"))
                  ;(n.counts.set(a.registrationId, a.targets.length), (n.total = t))
                } else
                  "dispose" === a.type &&
                    ((n.total = n.total - (n.counts.get(a.registrationId) ?? 0)), n.counts.delete(a.registrationId))
                return (
                  M({ type: "message", message: a }),
                  Promise.resolve(
                    "register" === a.type || "update" === a.type ? { annotationControls: a.annotationControls } : {},
                  )
                )
              },
            })),
            (I[2] = L),
            (I[3] = x),
            (I[4] = P),
            (I[5] = j.isOpen),
            (I[6] = n))
          : (n = I[6]),
        (0, d.useImperativeHandle)(y, n))
      let F = eI(j.registrations),
        $ = j.registrations.flatMap((e) =>
          e.targets
            .filter((t) => F.get(t.id) === e)
            .map((t) => {
              let n = j.drafts.find((n) => n.registrationId === e.registrationId && n.targetId === t.id)
              return {
                registrationId: e.registrationId,
                targetId: t.id,
                visible: !1 !== t.visible,
                state: (function ({
                  registrationId: e,
                  target: t,
                  annotationControls: n,
                  annotationControlChanges: a,
                }) {
                  return {
                    id: `${encodeURIComponent(e)}:${encodeURIComponent(t.id)}`,
                    annotationControls: n,
                    annotationControlChanges: n.controls.map(
                      (e) =>
                        a?.find((t) => t.callback === e.callback) ?? {
                          callback: e.callback,
                          previousValue: e.currentValue,
                          value: (0, ef.aJ)(e),
                        },
                    ),
                    targetLabel: t.label,
                  }
                })({
                  registrationId: e.registrationId,
                  target: t,
                  annotationControls: e.annotationControls,
                  annotationControlChanges: n?.annotationControlChanges,
                }),
              }
            }),
        ),
        B =
          $.find(
            (e) => e.visible && e.registrationId === j.selection?.registrationId && e.targetId === j.selection.targetId,
          ) ?? $.find(eC)
      ;(I[7] !== w ||
      I[8] !== _ ||
      I[9] !== E ||
      I[10] !== j.drafts ||
      I[11] !== j.isOpen ||
      I[12] !== j.registrations ||
      I[13] !== j.selection
        ? ((r = () => {
            var e, t
            let n
            if (null == E) return
            let a =
              0 === j.registrations.length
                ? null
                : {
                    active: j.isOpen && w && !_,
                    selection: j.selection,
                    changes:
                      ((e = j.registrations),
                      (t = j.drafts),
                      (n = eI(e)),
                      t.flatMap((e) => {
                        let t = n.get(e.targetId)
                        if (t?.registrationId !== e.registrationId) return []
                        let a = eg(t.annotationControls, e.annotationControlChanges)
                        return 0 === a.length ? [] : [{ ...e, annotationControlChanges: a }]
                      })),
                  }
            E.setAdditionalGlobals({ additionalGlobals: { visualizationAnnotation: a } }).catch(ek)
          }),
          (o = [E, j.isOpen, j.selection, j.drafts, j.registrations, w, _]),
          (I[7] = w),
          (I[8] = _),
          (I[9] = E),
          (I[10] = j.drafts),
          (I[11] = j.isOpen),
          (I[12] = j.registrations),
          (I[13] = j.selection),
          (I[14] = r),
          (I[15] = o))
        : ((r = I[14]), (o = I[15])),
        (0, d.useEffect)(r, o))
      let W = (function ({ intl: e, body: t, designChanges: n, selectedVariants: a = [] }) {
          let i = n.flatMap((e) => {
            let t = eg(e.annotationControls, e.annotationControlChanges),
              n = (0, ef.Mm)({ ...e, annotationControlChanges: t }).map((e) => ({
                label: e.label,
                reference: e.reference ?? null,
                value: e.value,
              }))
            return 0 === n.length ? [] : [{ target: e.targetLabel, changes: n }]
          })
          return {
            prompt:
              t.trim() ||
              e.formatMessage({
                id: "codex.visualization.annotationApplyChanges",
                defaultMessage: "Apply the changes",
              }),
            context:
              0 === i.length && 0 === a.length
                ? void 0
                : { edits: i, ...(0 === a.length ? {} : { selectedVariants: a }) },
            title: e.formatMessage({
              id: "codex.visualization.annotationChangesContext",
              defaultMessage: "Visualization changes",
            }),
          }
        })({ intl: z, body: j.body, designChanges: $.map(eS), selectedVariants: j.selectedVariants }),
        G = Array.isArray(W.context?.edits) && W.context.edits.length > 0,
        H = (0, d.useEffectEvent)(() => {
          w && null != S && (0, ec.xs)(S, W.context)
        })
      return (I[16] !== H
        ? ((s = () => {
            H()
          }),
          (I[16] = H),
          (I[17] = s))
        : (s = I[17]),
      I[18] !== w || I[19] !== j.drafts || I[20] !== j.registrations || I[21] !== j.selectedVariants || I[22] !== S
        ? ((u = [w, S, j.drafts, j.registrations, j.selectedVariants]),
          (I[18] = w),
          (I[19] = j.drafts),
          (I[20] = j.registrations),
          (I[21] = j.selectedVariants),
          (I[22] = S),
          (I[23] = u))
        : (u = I[23]),
      (0, d.useEffect)(s, u),
      A && 0 !== $.length && (j.isOpen || $.some(eE) || G || 0 !== j.body.trim().length))
        ? (I[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = (e) => M({ type: "body", body: e })),
              (g = () => M({ type: "open" })),
              (h = () => M({ type: "close" })),
              (I[24] = p),
              (I[25] = g),
              (I[26] = h))
            : ((p = I[24]), (g = I[25]), (h = I[26])),
          I[27] !== $
            ? ((m = (e) => {
                let t = $.find((t) => t.state.id === e)
                null != t &&
                  M({
                    type: "message",
                    message: { type: "select", registrationId: t.registrationId, targetId: t.targetId },
                  })
              }),
              (b = (e, t) => {
                let n = $.find((t) => t.state.id === e)
                null != n &&
                  M({
                    type: "change",
                    change: {
                      registrationId: n.registrationId,
                      targetId: n.targetId,
                      annotationControlChanges: t.annotationControlChanges ?? [],
                    },
                  })
              }),
              (I[27] = $),
              (I[28] = m),
              (I[29] = b))
            : ((m = I[28]), (b = I[29])),
          I[30] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = () => M({ type: "reset-drafts" })), (I[30] = v))
            : (v = I[30]),
          (0, a.jsx)("div", {
            className: "pointer-events-none absolute inset-[var(--visualize-paint-gutter)] z-50",
            children: (0, a.jsx)(d.Suspense, {
              fallback: null,
              children: (0, a.jsx)(ey, {
                states: $.map(eA),
                visibleIds: new Set($.filter(e_).map(ew)),
                selectedId: B?.state.id ?? null,
                isOpen: j.isOpen,
                body: j.body,
                hasChanges: G,
                submitting: O,
                onBodyChange: p,
                onOpen: g,
                onClose: h,
                onSelect: m,
                onChange: b,
                onReset: v,
                onSubmit: () => {
                  O ||
                    (N(!0),
                    k(W).then(
                      (e) => {
                        ;(N(!1), e && M({ type: "close" }))
                      },
                      () => {
                        ;(N(!1),
                          C.get(q.Id).danger(
                            z.formatMessage({
                              id: "codex.visualization.annotationSubmitFailure",
                              defaultMessage: "Unable to submit visualization changes",
                            }),
                            { errorAnalytics: { toastId: "codex.visualization.annotationSubmitFailure" } },
                          ))
                      },
                    ))
                },
              }),
            }),
          }))
        : null
    }
    function ew(e) {
      return e.state.id
    }
    function e_(e) {
      return e.visible
    }
    function eA(e) {
      return e.state
    }
    function eE(e) {
      return e.visible
    }
    function eS(e) {
      let { state: t } = e
      return t
    }
    function ek() {}
    function eC(e) {
      return e.visible
    }
    let ez = /^[A-Za-z][A-Za-z0-9_]{0,63}$/,
      ej = Function.prototype.toString.call(Object),
      eM = "__appBlockBindEntry",
      eO = (e) =>
        null != e && "object" == typeof e && !Array.isArray(e) && Object.getPrototypeOf(e) === Object.prototype
    function eN(e, t = 0, n = { value: 256 }) {
      if (((n.value -= 1), n.value < 0)) return !1
      if (null == e) return void 0 !== e
      if ("boolean" == typeof e) return !0
      if ("number" == typeof e) return Number.isFinite(e)
      if ("string" == typeof e) return e.length <= 4096
      if (t >= 8 || "object" != typeof e) return !1
      if (Array.isArray(e)) return e.every((e) => eN(e, t + 1, n))
      let a = Object.getPrototypeOf(e)
      return (
        (null == a ||
          (!!Object.prototype.hasOwnProperty.call(a, "constructor") &&
            "function" == typeof a.constructor &&
            Function.prototype.toString.call(a.constructor) === ej)) &&
        Object.entries(e).every(([e, a]) => e.length <= 4096 && eN(a, t + 1, n))
      )
    }
    function eR(e, t = 16384) {
      try {
        return JSON.stringify(e).length <= t
      } catch {
        return !1
      }
    }
    function eP(e) {
      if (!eO(e)) return { values: {}, callbacks: new Map() }
      let t = {},
        n = new Map()
      for (let [a, i] of Object.entries(e).slice(0, 32)) {
        let e
        if (ez.test(a) && eO(i)) {
          if ("callback" === i[eM] && "function" == typeof i.value) {
            n.set(a, i.value)
            continue
          }
          if ("value" === i[eM] && "string" == typeof i.value) {
            try {
              e = JSON.parse(i.value)
            } catch {
              continue
            }
            eN(e) && eR(e) && (t[a] = structuredClone(e))
          }
        }
      }
      return eR({ bindings: t, callbacks: [...n.keys()] }, 16384)
        ? { values: t, callbacks: n }
        : { values: {}, callbacks: new Map() }
    }
    var eT = n("ASxG")
    let eD = eT.YjP().min(1).max(160),
      eL = eT.rej({
        kind: eT.k5n(["block", "text", "tab", "table", "row", "cell", "content"]),
        id: eD,
        label: eT.YjP().min(1).max(240),
        blockId: eD.optional(),
        sources: eT.YOg(eT.YjP().min(1).max(120)).max(8).optional(),
      }),
      eU = eT.rej({ x: eT.aig().min(-1e6).max(1e6), y: eT.aig().min(-1e6).max(1e6) }),
      eV = eU.extend({ width: eT.aig().positive().max(1e6), height: eT.aig().positive().max(1e6) }),
      eF = eT.gMt("type", [
        eT.rej({
          type: eT.euz("dashboard-select"),
          target: eL,
          tracking: eT.euz(!0).optional(),
          additional: eT.euz(!0).optional(),
          rect: eV,
          point: eU.optional(),
        }),
        eT.rej({ type: eT.euz("dashboard-escape") }),
      ]),
      e$ = eT.Ikc({
        selector: eT.YjP().min(1).max(1024),
        tagName: eT.YjP().regex(/^[a-z][a-z0-9-]{0,63}$/),
        label: eT.YjP().max(160).optional(),
      })
    var eB = n("DQmi")
    let eW = "Follow-up message was not confirmed",
      eG = {
        createAlreadyPendingError: () => e4("A follow-up message is already awaiting confirmation"),
        createCanceledError: () => e4(eW),
      },
      eH = eT.Ikc({ message: eT.YjP().optional(), name: eT.YjP().optional(), stack: eT.YjP().optional() }).catch({}),
      eq = eT.Ikc({
        reason: eT.k5n([
          "clean-exit",
          "abnormal-exit",
          "killed",
          "crashed",
          "oom",
          "launch-failed",
          "integrity-failure",
          "memory-eviction",
          "still-running",
        ]),
        exitCode: eT.aig().int().optional(),
      }),
      eJ = eT.Ikc({ height: eB.dn, width: eT.aig().nonnegative() }),
      eY = eT.Ikc({
        isHovering: eT.zMY(),
        pointerType: eT.euz("touch").optional(),
        target: e$.optional(),
        eventTime: eT.aig().nonnegative().max(Number.MAX_SAFE_INTEGER),
      }),
      eX = eT.Ikc({ method: eT.k5n(["keyboard-navigation", "keyboard", "pointer"]) }),
      eZ = eT.Ikc({ widgetControl: eT.euz(!0).optional(), isInteractive: eT.zMY() }),
      eK = eT.Ikc({
        clientX: eT.aig(),
        clientY: eT.aig(),
        deltaX: eT.aig(),
        deltaY: eT.aig(),
        deltaMode: eT.KCZ([eT.euz(0), eT.euz(1), eT.euz(2)]),
        ctrlKey: eT.zMY(),
        metaKey: eT.zMY(),
        altKey: eT.zMY(),
        shiftKey: eT.zMY(),
      }),
      eQ = eT.Ikc({ key: eT.k5n(["ArrowLeft", "ArrowRight", "Escape"]) }),
      e0 = eT.Ikc({
        type: eT.euz("error"),
        errorSource: eT.euz("runtime"),
        error: eT.Ikc({ name: eT.YjP().nullish(), message: eT.YjP().min(1) }),
      }),
      e1 = eT.Ikc({ type: eT.euz("run_complete"), wasFatalError: eT.zMY().optional() }),
      e2 = eT.Ikc({ blob: eT.Nlp(Blob), capability: eT.YjP(), name: eT.YjP().trim().min(1).max(255) }),
      e5 = eT.Ikc({
        type: eT.euz("count"),
        label: eT.k5n([
          "html.preview_started",
          "html.preview_ready",
          "html.preview_startup_error",
          "html.preview_runtime_error",
          "html.preview_cdnjs_blocked",
          "html.preview_script_blocked",
        ]),
      })
    function e3() {
      return Promise.reject(Error("Inline visualizations cannot call tools"))
    }
    function e4(e) {
      return Object.assign(Error(e), { code: -32e3 })
    }
    ;(eT.rej({ available: eT.zMY() }), eT.rej({ names: eT.YOg(eT.YjP().min(1).max(64)).max(256) }))
    var e6 = n("wWR3"),
      e7 = n.n(e6),
      e8 = n("slpy"),
      e9 = n("ZOYk"),
      te = n("Gtga"),
      tt = n("KvJy"),
      tn = n("Sm6l"),
      ta = n("bqtn"),
      ti = n("bVeK"),
      tr = n("RNul"),
      tl = n("UxN3"),
      to = n("QF62"),
      ts = n("pndd"),
      tu = n("nlNF"),
      td = n("Lec7"),
      tc = n("QpmX")
    let tp = (0, l.i1)(f.u, (e, { get: t }) => (null == e ? null : t(tc.yz, e)))
    function tf(e) {
      var t, n
      let r,
        o,
        s,
        u,
        p,
        g,
        h,
        m,
        x,
        w,
        _,
        A,
        E,
        S,
        k,
        C,
        z,
        j,
        O,
        R,
        P = (0, i.c)(76),
        {
          isExpanded: T,
          openMenu: D,
          isTouchMode: L,
          isVisible: U,
          issueAction: V,
          showActions: F,
          onCopyAsImage: $,
          onExpand: B,
          onMenuOpenChange: W,
          onPublishToSites: H,
          share: q,
        } = e,
        J = void 0 !== T && T,
        Y = (0, l.gh)(f.u),
        X = (0, c.A)(),
        Z = (0, l._U)(el.JW, "4070967303") && null != q,
        K = (0, l.Ul)(M.chatGptAuthenticatedAccountId$),
        Q = (0, l.Ul)(M.o8),
        ee = (0, l.Ul)(M.kf),
        et = "loaded" === ee.status && "workspace" === ee.structure
      P[0] !== K || P[1] !== Z || P[2] !== et || P[3] !== q || P[4] !== Q
        ? ((r = Z
            ? (0, ts.w)({ ...q, accountId: K, userId: Q, desiredAccessMode: et ? "workspace_all" : void 0 })
            : null),
          (P[0] = K),
          (P[1] = Z),
          (P[2] = et),
          (P[3] = q),
          (P[4] = Q),
          (P[5] = r))
        : (r = P[5])
      let en = r,
        ea = (0, l._U)(tp, en)
      P[6] !== ea
        ? ((o = null != ea && ["preparing", "publishing", "unconfirmed", "sharing"].includes(ea.phase)),
          (P[6] = ea),
          (P[7] = o))
        : (o = P[7])
      let er = o,
        eo = null != ea && "url" in ea,
        es = null != ea && "confirm" !== ea.phase && "ready" !== ea.phase && !er && "account-changed" !== ea.phase,
        [eu, ed] = (0, d.useState)(!1)
      P[8] !== X
        ? ((s = X.formatMessage({ id: "codex.visualization.expand", defaultMessage: "Expand visualization" })),
          (P[8] = X),
          (P[9] = s))
        : (s = P[9])
      let ec = s
      P[10] !== X
        ? ((u = X.formatMessage({
            id: "codex.visualization.actionsAriaLabel",
            defaultMessage: "Visualization actions",
          })),
          (P[10] = X),
          (P[11] = u))
        : (u = P[11])
      let ep = u,
        ef = null != en && null != ea && "confirm" !== ea.phase && "account-changed" !== ea.phase
      P[12] !== X
        ? ((p = X.formatMessage({
            id: "codex.visualization.actionsPublished",
            defaultMessage: "View shared visualization",
          })),
          (P[12] = X),
          (P[13] = p))
        : (p = P[13])
      let eg = p
      P[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (0, a.jsx)("span", {
            className:
              "transition-opacity duration-relaxed ease-basic motion-reduce:transition-none starting:opacity-0",
            children: (0, a.jsx)(tl.b5, { icon: { 16: ti.$XR, 20: ti.gXS } }),
          })),
          (P[14] = g))
        : (g = P[14])
      let eh = g
      if (er) {
        let e, t
        ;(P[15] !== X
          ? ((e = X.formatMessage({
              id: "codex.visualization.actionsPublishing",
              defaultMessage: "Publishing site\u2026",
            })),
            (P[15] = X),
            (P[16] = e))
          : (e = P[16]),
          (eg = e),
          P[17] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, a.jsx)(tr.y, {})), (P[17] = t)) : (t = P[17]),
          (eh = t))
      } else if (es) {
        let e, t
        ;(P[18] !== X
          ? ((e = X.formatMessage({
              id: "codex.visualization.actionsSharingNeedsAttention",
              defaultMessage: "Publishing needs attention",
            })),
            (P[18] = X),
            (P[19] = e))
          : (e = P[19]),
          (eg = e),
          P[20] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, a.jsx)(ti.Ko7, {})), (P[20] = t)) : (t = P[20]),
          (eh = t))
      }
      if (!(void 0 === F || F)) {
        let e
        return (
          P[21] !== V
            ? ((e = (0, a.jsx)(to.$, { persistentAction: V, onPointerDown: th })), (P[21] = V), (P[22] = e))
            : (e = P[22]),
          e
        )
      }
      let em = U || eu || "actions" === D || (void 0 !== L && L)
      ;(P[23] !== eo ||
      P[24] !== ef ||
      P[25] !== en ||
      P[26] !== er ||
      P[27] !== W ||
      P[28] !== H ||
      P[29] !== D ||
      P[30] !== Y ||
      P[31] !== eh ||
      P[32] !== eg ||
      P[33] !== ea
        ? ((h = ef
            ? (0, a.jsxs)(ta.Ab, {
                align: "end",
                contentWidth: "xs",
                open: "share" === D,
                onOpenChange: (e) => W(e ? "share" : null),
                triggerButton: (0, a.jsx)(e8.m, {
                  content: eg,
                  openDelay: 250,
                  children: (0, a.jsx)(tn.$, {
                    "aria-label": eg,
                    color: "blockAction",
                    radius: "full",
                    size: "inputIcon",
                    children: eh,
                  }),
                }),
                children: [
                  eo &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        "ready" === ea.phase && (0, a.jsx)(tb, { projectId: ea.projectId }),
                        "sharing" === ea.phase &&
                          (0, a.jsx)(ta.ms.SectionLabel, {
                            children: (0, a.jsx)(N.A, {
                              id: "codex.visualization.sharingWorkspace",
                              defaultMessage: "Sharing with workspace\u2026",
                            }),
                          }),
                        "sharing-failed" === ea.phase &&
                          (0, a.jsx)(ta.ms.Item, {
                            onSelect: () => void (0, tc.jl)(Y, en),
                            children: (0, a.jsx)(N.A, {
                              id: "codex.visualization.recheckSharing",
                              defaultMessage: "Check workspace sharing",
                            }),
                          }),
                        (0, a.jsx)(ta.ms.Item, {
                          leftIconAsset: I.O,
                          onClick: (e) => {
                            ;(0, tc.ay)(Y, en) &&
                              (W(null),
                              (0, G.PQ)({
                                event: e,
                                href: ea.url,
                                initiator: "mcp_app_resource",
                                openAsWebsite: !0,
                                presentationIntent: "split",
                              }))
                          },
                          children: (0, a.jsx)(N.A, {
                            id: "codex.visualization.openSite",
                            defaultMessage: "Open site",
                          }),
                        }),
                        (0, a.jsx)(ta.ms.Item, {
                          leftIconAsset: e9.T,
                          onSelect: () => {
                            ;(0, tc.ay)(Y, en) &&
                              (0, te.l)(Y, ea.projectId, {
                                source: b.CodexSitesSharingSource.CODEX_SITES_SHARING_SOURCE_CONVERSATION_RESOURCE,
                                shouldOpen: () => (0, tc.ay)(Y, en),
                              })
                          },
                          children: (0, a.jsx)(N.A, {
                            id: "codex.visualization.share.manage",
                            defaultMessage: "Sharing settings",
                          }),
                        }),
                      ],
                    }),
                  !eo && ea.job?.threadId != null && (0, a.jsx)(tm, { job: ea.job, isPublishing: er }),
                  !eo &&
                    ea.job?.threadId == null &&
                    (0, a.jsx)(ta.ms.Item, {
                      disabled: er || null == H,
                      leftIcon: er ? (0, a.jsx)(tr.y, {}) : (0, a.jsx)(ti.Ko7, {}),
                      onSelect: () => {
                        ;(0, tc.ay)(Y, en) && !er && H?.()
                      },
                      children: er
                        ? (0, a.jsx)(N.A, {
                            id: "codex.visualization.share.publishing",
                            defaultMessage: "Publishing site\u2026",
                          })
                        : (0, a.jsx)(N.A, {
                            id: "codex.visualization.retryPublishing",
                            defaultMessage: "Retry publishing",
                          }),
                    }),
                ],
              })
            : null),
          (P[23] = eo),
          (P[24] = ef),
          (P[25] = en),
          (P[26] = er),
          (P[27] = W),
          (P[28] = H),
          (P[29] = D),
          (P[30] = Y),
          (P[31] = eh),
          (P[32] = eg),
          (P[33] = ea),
          (P[34] = h))
        : (h = P[34]),
        P[35] !== V || P[36] !== h
          ? ((t = V),
            (n = h),
            (m = null == t ? n : null == n ? t : (0, a.jsxs)(a.Fragment, { children: [t, n] })),
            (P[35] = V),
            (P[36] = h),
            (P[37] = m))
          : (m = P[37]),
        P[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = () => ed(!0)), (w = () => ed(!1)), (P[38] = x), (P[39] = w))
          : ((x = P[38]), (w = P[39])))
      let eb = "actions" === D
      return (
        P[40] !== W ? ((_ = (e) => W(e ? "actions" : null)), (P[40] = W), (P[41] = _)) : (_ = P[41]),
        P[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, a.jsx)(tl.b5, { icon: { 16: ti.l0Y, 20: ti.e4G } })), (P[42] = A))
          : (A = P[42]),
        P[43] !== ep
          ? ((E = (0, a.jsx)(tn.$, {
              "aria-label": ep,
              color: "blockAction",
              radius: "full",
              size: "inputIcon",
              children: A,
            })),
            (P[43] = ep),
            (P[44] = E))
          : (E = P[44]),
        P[45] !== ee.status ||
        P[46] !== Z ||
        P[47] !== en ||
        P[48] !== et ||
        P[49] !== H ||
        P[50] !== Y ||
        P[51] !== q ||
        P[52] !== ea
          ? ((S =
              Z && null != H && (null == ea || "confirm" === ea.phase)
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(ta.ms.Item, {
                        disabled: null != q && (null == en || "loaded" !== ee.status),
                        leftIconAsset: I.O,
                        onSelect: () => {
                          try {
                            ;(0, ei.yy)(Y, v.CodexInlineVisualizationShareClicked, {})
                          } catch {}
                          H()
                        },
                        children: et
                          ? (0, a.jsx)(N.A, {
                              id: "codex.visualization.shareWithWorkspace",
                              defaultMessage: "Share with workspace",
                            })
                          : (0, a.jsx)(N.A, {
                              id: "codex.visualization.publishAsSite",
                              defaultMessage: "Publish as site",
                            }),
                      }),
                      (0, a.jsx)(ta.ms.Separator, {}),
                    ],
                  })
                : null),
            (P[45] = ee.status),
            (P[46] = Z),
            (P[47] = en),
            (P[48] = et),
            (P[49] = H),
            (P[50] = Y),
            (P[51] = q),
            (P[52] = ea),
            (P[53] = S))
          : (S = P[53]),
        P[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, a.jsx)(N.A, { id: "codex.visualization.copyAsImage", defaultMessage: "Copy as image" })),
            (P[54] = k))
          : (k = P[54]),
        P[55] !== $
          ? ((C = (0, a.jsx)(ta.ms.Item, { leftIconAsset: y.r, onSelect: $, children: k })), (P[55] = $), (P[56] = C))
          : (C = P[56]),
        P[57] !== Z || P[58] !== H
          ? ((z =
              !Z &&
              null != H &&
              (0, a.jsx)(ta.ms.Item, {
                leftIconAsset: I.O,
                onSelect: H,
                children: (0, a.jsx)(N.A, {
                  id: "codex.visualization.publishToSites",
                  defaultMessage: "Publish to Sites\u2026",
                }),
              })),
            (P[57] = Z),
            (P[58] = H),
            (P[59] = z))
          : (z = P[59]),
        P[60] !== eb || P[61] !== _ || P[62] !== E || P[63] !== S || P[64] !== C || P[65] !== z
          ? ((j = (0, a.jsxs)(ta.Ab, {
              align: "end",
              contentWidth: "xs",
              open: eb,
              onOpenChange: _,
              triggerButton: E,
              children: [S, C, z],
            })),
            (P[60] = eb),
            (P[61] = _),
            (P[62] = E),
            (P[63] = S),
            (P[64] = C),
            (P[65] = z),
            (P[66] = j))
          : (j = P[66]),
        P[67] !== ec || P[68] !== J || P[69] !== B
          ? ((O =
              null == B
                ? null
                : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(e8.m, {
                      content: ec,
                      openDelay: 250,
                      children: (0, a.jsx)(tn.$, {
                        "aria-label": ec,
                        "aria-expanded": J,
                        "aria-haspopup": "dialog",
                        color: "blockAction",
                        radius: "full",
                        size: "inputIcon",
                        onClick: B,
                        children: (0, a.jsx)(tl.b5, { icon: { 16: ti.Zdv, 20: ti.Zji } }),
                      }),
                    }),
                  })),
            (P[67] = ec),
            (P[68] = J),
            (P[69] = B),
            (P[70] = O))
          : (O = P[70]),
        P[71] !== em || P[72] !== m || P[73] !== j || P[74] !== O
          ? ((R = (0, a.jsxs)(to.$, {
              "data-visible": em,
              persistentAction: m,
              onPointerEnter: x,
              onPointerLeave: w,
              onPointerDown: tg,
              children: [j, O],
            })),
            (P[71] = em),
            (P[72] = m),
            (P[73] = j),
            (P[74] = O),
            (P[75] = R))
          : (R = P[75]),
        R
      )
    }
    function tg(e) {
      return e.stopPropagation()
    }
    function th(e) {
      return e.stopPropagation()
    }
    function tm(e) {
      let t,
        r,
        o,
        s,
        u = (0, i.c)(11),
        { job: d, isPublishing: c } = e,
        p = (0, l.gh)(f.u)
      return (
        u[0] !== c ? ((t = c ? (0, a.jsx)(tr.y, {}) : (0, a.jsx)(ti.Ko7, {})), (u[0] = c), (u[1] = t)) : (t = u[1]),
        u[2] !== d || u[3] !== p
          ? ((r = () =>
              void (async function (e, t) {
                if (!(0, tc.ay)(e, t)) return
                let a = e.get(tu.x2)
                try {
                  let { openVisualizationPublishingChat: i } = await n.e(810994).then(n.bind(n, "Ht41"))
                  if (e.get(tu.x2) !== a) return
                  await i(e, t)
                  return
                } catch {}
                if (e.get(tu.x2) !== a) return
                let i = (0, tc.lP)(e, t)
                i?.attemptId === t.attemptId && (0, td.H)(e, i)
              })(p, d)),
            (u[2] = d),
            (u[3] = p),
            (u[4] = r))
          : (r = u[4]),
        u[5] !== c
          ? ((o = c
              ? (0, a.jsx)(N.A, { id: "codex.visualization.share.publishing", defaultMessage: "Publishing site\u2026" })
              : (0, a.jsx)(N.A, {
                  id: "codex.visualization.openPublishingChat",
                  defaultMessage: "Open publishing chat",
                })),
            (u[5] = c),
            (u[6] = o))
          : (o = u[6]),
        u[7] !== t || u[8] !== r || u[9] !== o
          ? ((s = (0, a.jsx)(ta.ms.Item, { leftIcon: t, onSelect: r, children: o })),
            (u[7] = t),
            (u[8] = r),
            (u[9] = o),
            (u[10] = s))
          : (s = u[10]),
        s
      )
    }
    function tb(e) {
      let t,
        n,
        r = (0, i.c)(6),
        { projectId: o } = e,
        { data: s } = (0, l._U)(tt.ox, o)
      r[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, a.jsx)(N.A, { id: "codex.visualization.published", defaultMessage: "Published" })), (r[0] = t))
        : (t = r[0])
      let u = t
      switch (s?.access_mode) {
        case "workspace_all": {
          let e
          ;(r[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(N.A, {
                id: "codex.visualization.sharedWithWorkspace",
                defaultMessage: "Shared with workspace",
              })),
              (r[1] = e))
            : (e = r[1]),
            (u = e))
          break
        }
        case "public": {
          let e
          ;(r[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(N.A, { id: "codex.visualization.sharedPublicly", defaultMessage: "Shared publicly" })),
              (r[2] = e))
            : (e = r[2]),
            (u = e))
          break
        }
        case "custom":
        case "admins_only": {
          let e
          ;(r[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(N.A, {
                id: "codex.visualization.restrictedAccess",
                defaultMessage: "Restricted access",
              })),
              (r[3] = e))
            : (e = r[3]),
            (u = e))
        }
      }
      return (
        r[4] !== u ? ((n = (0, a.jsx)(ta.ms.SectionLabel, { children: u })), (r[4] = u), (r[5] = n)) : (n = r[5]),
        n
      )
    }
    var tv = n("idAu"),
      tI = n("JNtf"),
      ty = n("mUDD")
    function tx(e) {
      let t,
        n,
        r,
        l,
        o,
        s,
        u,
        d,
        c,
        p,
        f,
        g,
        h,
        m = (0, i.c)(26),
        { browserDestination: b, onCancel: v, onConfirm: I, url: y } = e
      return null == y
        ? null
        : (m[0] !== v
            ? ((t = (e) => {
                e || v()
              }),
              (m[0] = v),
              (m[1] = t))
            : (t = m[1]),
          m[2] !== I
            ? ((n = (e) => {
                ;(e.preventDefault(), I())
              }),
              (m[2] = I),
              (m[3] = n))
            : (n = m[3]),
          m[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, a.jsx)(tI.L3, {
                children: (0, a.jsx)(N.A, {
                  id: "codex.visualization.externalLinkConfirmation.title",
                  defaultMessage: "Open external link?",
                }),
              })),
              (m[4] = r))
            : (r = m[4]),
          m[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, a.jsx)(ty.OO, {
                children: (0, a.jsx)(ty.c7, {
                  title: r,
                  subtitle: (0, a.jsx)(tI.rr, {
                    children: (0, a.jsx)(N.A, {
                      id: "codex.visualization.externalLinkConfirmation.description",
                      defaultMessage:
                        "This visualization wants to open a link that could share information with an external website. Only continue if you trust the destination",
                    }),
                  }),
                }),
              })),
              (m[5] = l))
            : (l = m[5]),
          m[6] !== b ? ((o = b && (0, a.jsx)("div", { children: b })), (m[6] = b), (m[7] = o)) : (o = m[7]),
          m[8] !== y ? ((s = (0, a.jsx)("div", { children: y })), (m[8] = y), (m[9] = s)) : (s = m[9]),
          m[10] !== o || m[11] !== s
            ? ((u = (0, a.jsx)(ty.OO, {
                children: (0, a.jsxs)("div", {
                  className:
                    "max-h-32 overflow-auto rounded-lg border border-default bg-primary-soft-alpha px-3 py-2 font-mono text-sm break-all text-default",
                  children: [o, s],
                }),
              })),
              (m[10] = o),
              (m[11] = s),
              (m[12] = u))
            : (u = m[12]),
          m[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = (0, a.jsx)(N.A, {
                id: "codex.visualization.externalLinkConfirmation.cancel",
                defaultMessage: "Cancel",
              })),
              (m[13] = d))
            : (d = m[13]),
          m[14] !== v
            ? ((c = (0, a.jsx)(tn.$, { color: "secondary", type: "button", onClick: v, children: d })),
              (m[14] = v),
              (m[15] = c))
            : (c = m[15]),
          m[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = (0, a.jsx)(tn.$, {
                type: "submit",
                children: (0, a.jsx)(N.A, {
                  id: "codex.visualization.externalLinkConfirmation.confirm",
                  defaultMessage: "Open link",
                }),
              })),
              (m[16] = p))
            : (p = m[16]),
          m[17] !== c
            ? ((f = (0, a.jsx)(ty.OO, { children: (0, a.jsxs)(ty.Es, { children: [c, p] }) })),
              (m[17] = c),
              (m[18] = f))
            : (f = m[18]),
          m[19] !== f || m[20] !== n || m[21] !== u
            ? ((g = (0, a.jsxs)(ty.R4, { as: "form", onSubmit: n, children: [l, u, f] })),
              (m[19] = f),
              (m[20] = n),
              (m[21] = u),
              (m[22] = g))
            : (g = m[22]),
          m[23] !== t || m[24] !== g
            ? ((h = (0, a.jsx)(tI.lG, { open: !0, onOpenChange: t, children: g })),
              (m[23] = t),
              (m[24] = g),
              (m[25] = h))
            : (h = m[25]),
          h)
    }
    var tw = n("ByX5"),
      t_ = n("jvxw"),
      tA = n("qZc9")
    let tE = /^(?:[^@:\r\n]*@|(?:https?:\/\/|file:\/\/|blob:|about:(?:blank|srcdoc))\S*:\d+(?=\r?\n|$))/,
      tS = new Set([
        "Error",
        "AggregateError",
        "EvalError",
        "RangeError",
        "ReferenceError",
        "RuntimeError",
        "SyntaxError",
        "TypeError",
        "URIError",
        "AbortError",
        "NetworkError",
        "SecurityError",
        "TimeoutError",
      ]),
      tk = [
        [
          "TypeError",
          /^(?:Cannot read properties of (?:null|undefined)\b|Cannot read property .+ of (?:null|undefined)$|(?:undefined|null) is not an object \(evaluating )/,
          "Cannot read property of null or undefined",
        ],
        ["TypeError", / is not a function$/, "Value is not a function"],
        ["TypeError", /^(?:Failed to fetch|Load failed)$/, "Network request failed"],
        ["ReferenceError", /(?: is not defined$|^Can't find variable: )/, "Variable is not defined"],
        ["SyntaxError", /^(?:Unexpected end of JSON input|JSON\.parse:|JSON Parse error:)/, "Invalid JSON"],
        ["RangeError", /^Maximum call stack size exceeded$/, "Maximum call stack size exceeded"],
        ["Error", /^Visualization script could not be loaded$/, "Visualization script could not be loaded"],
      ],
      tC = [
        [/^(?:<anonymous>|module|about:(?:blank|srcdoc))$|^(?:blob|data):/, "inline"],
        [/^https?:\/\/[^\s]+$/, "external"],
        [/^(?:codex-sandbox|app|chrome-extension):/, "sandbox"],
        [/^(?:file:\/\/|\/|[A-Za-z]:\\)|\.m?js(?:[?#].*)?$/, "script"],
        [/^(?:native|\[native code\])$/, "native"],
      ],
      tz = "Visualization script could not be loaded: ",
      tj = new Map([
        ["cdnjs.cloudflare.com", "cdnjs"],
        ["cdn.jsdelivr.net", "jsDelivr"],
        ["esm.sh", "esm.sh"],
        ["unpkg.com", "unpkg"],
      ])
    var tM = n("aICB"),
      tO = n("vaO0"),
      tN = n("o6lh"),
      tR = n("Ywss")
    let tP = [{ path: ":locale?/codex/open-app" }]
    var tT = n("ciEf")
    let tD = (0, l.i1)(f.u, (e, { get: t }) => (t(z.fn), (0, tN.r8)(e)))
    function tL({
      actionsRef: e,
      allowInteractions: t = !0,
      annotationsEnabled: i = !0,
      codePreviewLanguage: o,
      codePreviewStartMode: s,
      createRenderObserver: p,
      visualizationSource: z,
      file: N,
      fillContainer: R = !1,
      pageContentInset: P = !1,
      pageHeaderDensity: D,
      fragment: ef,
      fragmentData: eg,
      heightCacheKey: eh,
      getVisualizeTurnTriggerType: eb,
      hostId: ev,
      isActive: eI = !0,
      inert: ey = !1,
      isWide: ew = !1,
      dataDocument: e_,
      dataExternalResourcesAllowed: eA = !1,
      locale: eE,
      loadingHeight: eS,
      loadingFallback: ek,
      onClick: eC,
      onWheel: ej,
      onDashboardGuestReady: eM,
      onDashboardLayoutAvailabilityChange: eT,
      onDashboardAnnotation: eD,
      onHoverTargetChange: eL,
      onHeightMeasured: eU,
      onStatusChange: eV,
      onOpenLink: e$,
      onOpenResource: e4,
      onDashboardSourceInspection: e6,
      onDashboardSourcesGuestAction: e8,
      onDashboardTabLabels: e9,
      readError: te,
      onSendFollowUpMessage: tt,
      onSendUntrustedFollowUpMessage: tn,
      onStreamComplete: ta,
      onStreamFailure: ti,
      presentation: tr = "visualization",
      preview: tl,
      appBlockBind: to,
      onAppBlockBindInteraction: ts,
      appBlockTitle: tu,
      sandboxDocument: td,
      sandboxDocumentState: tc,
      streamingHtml: tp,
      sandboxId: tg,
      sandboxScopeId: th,
      scheme: tm,
      showErrorAlert: tb = !0,
      showInlineActions: tI = !0,
      sizing: ty,
      threadId: tN,
      turnId: tV,
      title: tF,
      variant: t$,
      widgetStateIdentity: tB,
      sharedWidgetState: tW,
      shareSource: tG,
    }) {
      let tH,
        tq = (0, l.gh)(f.u),
        tJ = null != ty && tm === u.cS,
        tY =
          "live" === t$
            ? b.CodexVisualizationType.CODEX_VISUALIZATION_TYPE_LIVE
            : b.CodexVisualizationType.CODEX_VISUALIZATION_TYPE_INLINE,
        tX = (0, l._U)(tw.M3, eh),
        tZ = (0, l._U)(tw.C8, tg),
        tK = (0, c.A)(),
        tQ = null == tN ? null : (0, w.JXB)(tN),
        { actions: t0 } = (0, B.KB)(tQ),
        t1 = (0, d.useRef)(null),
        t2 = (0, d.useRef)(null),
        t5 = (0, d.useRef)(null),
        t3 = (0, d.useRef)(null),
        t4 = (0, d.useRef)(null),
        t6 = (0, d.useRef)(null),
        t7 = (0, d.useRef)(null),
        t8 = (0, d.useRef)(!1),
        t9 = (0, d.useRef)(!1),
        ne = (0, d.useRef)(
          v.CodexInlineVisualizationFailureReason.CODEX_INLINE_VISUALIZATION_FAILURE_REASON_UNSPECIFIED,
        ),
        nt = (0, d.useRef)(null),
        nn = (0, d.useRef)(null),
        na = (0, d.useRef)(null),
        [ni, nr] = (0, d.useState)(!1),
        [nl, no] = (0, d.useState)(!1),
        ns = (0, d.useRef)(null),
        [nu, nd] = (0, d.useState)(0),
        nc = td?.hasPaintGutter === !1 ? 0 : eB.NI,
        np = { "--visualize-paint-gutter": `${nc / 2}px` },
        nf = null != tp && !tp.isFinal,
        [ng] = (0, d.useState)(() => p?.()),
        nh = (0, d.useRef)(null),
        nm = t && !nf && "inline" === t$ && (null != tl || ew || "app-block" === tr) && !0,
        nb = (0, l._U)(el.JW, "3067284829"),
        nv = t && i && nb && "inline" === t$ && "visualization" === tr,
        nI = "app-block" === tr && null != to,
        ny = (0, d.useContext)(U.b),
        nx = null != ny && "app-block" === tr,
        nw,
        n_ = (0, L.Rn)()?.messageId,
        nA = null != ny,
        nE = th ?? tN ?? tg,
        nS = (0, eB.UI)({
          environment: ny?.sandboxEnvironment,
          locale: eE,
          scheme: tm,
          scopeId: ny ? `${ny.requestId}:${nE}` : nE,
        }),
        nk = {
          allowAnnotations: nv,
          allowInteractions: t,
          fragment: ef,
          hasAppBlockBindings: nI,
          locale: eE,
          sourceUrl: nS,
          sandboxDocument: td,
          presentation: tr,
          variant: t$,
        },
        [nC, nz] = (0, d.useState)(nk)
      ;(nC.allowAnnotations !== nv ||
        nC.allowInteractions !== t ||
        nC.fragment !== ef ||
        nC.hasAppBlockBindings !== nI ||
        nC.sourceUrl !== nS ||
        nC.sandboxDocument !== td ||
        nC.presentation !== tr ||
        nC.variant !== t$) &&
        (nz(nk), nC.fragment !== ef && (nr(!1), no(!1)))
      let nj = tm === u.cS ? nC : null,
        [nM, nO] = (0, d.useState)(null),
        [nN, nR] = (0, d.useState)(null),
        [nP, nT] = (0, d.useState)(!1),
        nD = ni ? `${tO.ex}${(0, g.D)(`${tg}:retry`)}` : tg,
        nL = nP || nM?.key !== nD || nM.reloadCount !== nu || nM.content !== nj ? null : nM,
        nU = nL?.element ?? null,
        nV = nL?.prepared ?? null,
        nF = nL?.partition ?? null,
        n$ = nL?.sandboxId ?? nD,
        nB = null != nj && null != tZ ? (0, eB.UI)({ locale: eE, scheme: tm, scopeId: tZ.scopeId }) : nS,
        nW = (0, d.useRef)(null),
        [{ height: nG, isInitialHeight: nH, measuredWidth: nq }, nJ] = (0, d.useState)({
          height: null,
          isInitialHeight: !0,
          measuredWidth: null,
        }),
        [nY, nX] = (0, d.useState)(null),
        nZ = tX?.fragmentData.deref()?.contents === ef ? tX.height : null,
        nK = ty?.height ?? Math.min(nG ?? nZ ?? ty?.loadingHeight ?? eS ?? eB.uT, td?.inlineMaxHeight ?? 1e4),
        [nQ, n0] = (0, d.useState)(null),
        [n1, n2] = (0, d.useState)(!1),
        n5 = tl?.open ?? n1,
        [n3, n4] = (0, d.useState)(!1),
        [n6, n7] = (0, d.useState)(eI)
      n6 !== eI && (n7(eI), !eI && n3 && n4(!1), !eI && n1 && n2(!1))
      let [n8, n9] = (0, d.useState)(null),
        [ae, at] = (0, d.useState)(!1),
        [an, aa] = (0, d.useState)(null),
        ai = nm && n5 ? "fullscreen" : "inline",
        ar = n5 ? (nY ?? nK) : (ty?.height ?? nG),
        { cancel: al, confirmation: ao, confirm: as, request: au } = (0, X.i)(eG),
        [ad, ac] = (0, d.useState)(null),
        [ap, af] = (0, d.useState)(() =>
          null == ef ? (te ?? Error("Inline visualization file exceeds the 5 MB limit")) : null,
        ),
        [ag, ah] = (0, d.useState)(null),
        am = ag?.fragment === ef ? ag.failure : null,
        ab = ap ?? am,
        av = ad?.fragment === ef ? ad.url : null,
        aI = an === ef,
        ay = "app-block" === tr && "inline" === t$ && eI && nf && !aI,
        ax = null != ef && !nP,
        aw = null != nN && null != nG,
        a_ = ax && (!nf || "app-block" !== tr || "inline" !== t$) && !aw && !aI,
        aA = "app-block" === tr && eI && aw && !aI,
        aE = (0, l._U)(V.Sl, { widgetType: "app_block", turnMessageId: n_ }),
        aS = aA ? aE : void 0,
        ak = (0, l.Ul)(j.ND),
        aC = !t || [tt, tn].includes(null),
        az = (0, l._U)(el.JW, "4070967303") && ("visualization" === tr || ("app-block" === tr && null != tG)),
        aj = az
          ? !nf && !aC && (null != tG || (null != tN && void 0 === tt && void 0 === tn)) && "available" === ak
          : t && null != tN && void 0 === tt && void 0 === tn && "available" === ak,
        aM = tG ?? (null == tN ? void 0 : { kind: "codex", threadId: tN, hostId: ev ?? "local", turnId: tV }),
        aO = tp?.isFinal ? tp.html : ef,
        aN = !nf && !aC && (null != tt || null != tn || null != tN),
        aR = (0, l._U)(tD, {
          backgroundColorToken: td?.backgroundColorToken ?? "--color-surface",
          includeReviewColors: null != eD,
          includeViewerPanelColors: null != e8,
          pageHeaderDensity: n5 ? void 0 : D,
          variant: t$,
        }),
        aP = P && !n5 ? "var(--dashboard-content-inline-inset, 44px)" : void 0,
        aT = null != aP && aw,
        aD = (0, d.useRef)(null),
        aL = (0, d.useEffectEvent)(() => ({ bind: to, onInteraction: ts })),
        aU = (0, d.useEffectEvent)(() => tp),
        aV = (0, d.useEffectEvent)((e) => ta?.(e)),
        aF = (0, d.useEffectEvent)(() => void 0),
        a$ = (0, d.useEffectEvent)(() => ti?.()),
        aB = (0, d.useEffectEvent)(() => nm),
        aW = (0, d.useEffectEvent)((e) => ({
          ...aR,
          ...(null != aP && {
            "--page-content-inline-inset":
              getComputedStyle(e.parentElement ?? e)
                .getPropertyValue("--dashboard-content-inline-inset")
                .trim() || "44px",
          }),
          ...(null != eD && { "--codex-dashboard-review-cursor": x.Gz }),
          ...np,
        })),
        aG = (0, d.useEffectEvent)((e) => {
          null != nq && nq > 0 && nq === e && !n5 && null != nG && ty?.onHeightMeasured(nG, nq)
        }),
        aH = (0, d.useEffectEvent)((e, t, n) => {
          if (t !== ef || null == eg) return
          if (n5) {
            if (null != t7.current) {
              let t = t7.current
              if (((t7.current = null), e === t)) return
            }
            if ((nX(e), null != nG)) return
          }
          let a = Math.min(e, td?.inlineMaxHeight ?? 1e4)
          ;(nJ((e) =>
            e.height === a && e.measuredWidth === n
              ? e
              : { height: a, isInitialHeight: null == e.height, measuredWidth: n },
          ),
            tq.set(tw.M3, eh, { fragmentData: new WeakRef(eg), height: a, width: n }),
            n5 || eU?.(a, n),
            null != ty &&
              null != n &&
              n > 0 &&
              !n5 &&
              null != nU &&
              n === (0, tw.aX)(nU, aW(nU)) &&
              ty.onHeightMeasured(a, n))
        }),
        aq = (0, d.useEffectEvent)((e, t) =>
          eI
            ? ((0, eo.W)(e, t),
              tq
                .get(q.Id)
                .success(
                  tK.formatMessage(
                    { id: "codex.visualization.download.success", defaultMessage: "Saved {filename} to Downloads" },
                    { filename: t },
                  ),
                ),
              Promise.resolve())
            : e3(),
        ),
        aJ = (0, d.useEffectEvent)((e) => eT?.(e)),
        aY = (0, d.useEffectEvent)(() => {
          e8?.({ action: "reset" })
        }),
        aX = (0, d.useRef)(eI)
      ;(0, d.useLayoutEffect)(
        () => (
          (aX.current = eI),
          eI || aJ(!1),
          () => {
            aX.current = !1
          }
        ),
        [eI],
      )
      let aZ = async (e, t, n, a = "visualization_follow_up") => {
          let i
          if (!aX.current || n?.aborted) return !1
          if (aC || (void 0 === tt && void 0 === tn && null == tQ)) return e3()
          let { context: r, prompt: l, title: o } = (0, K.tu)(e),
            s = null != tt || null == tQ || tQ.startsWith("chatgpt:") ? null : tq.get(k.JN, tQ),
            u =
              (null != tn || null != s) &&
              ("annotation-controls" === t ||
                (await er.appServices?.mcpAppSandbox?.consumeUserGesture((0, ee.fI)(n$, nU)).catch(() => !1)) === !0)
          if (n?.aborted || !aX.current) return !1
          let d = l
          if (!u)
            try {
              d = await au({ context: r, prompt: l, title: o })
            } catch (e) {
              if (e instanceof Error && e.message === eW) return !1
              throw e
            }
          if (n?.aborted || !aX.current) return !1
          if (null != tn)
            return (
              await tn({
                context: r,
                prompt: d,
                title: o,
                turnTrigger: a,
                untrustedAppMessage: { source: "visualization", sourceId: n$, text: d, structuredContent: r },
              }),
              !0
            )
          if (null != tt) return (await tt({ context: r, prompt: d, title: o }), !0)
          if (null == tQ) return e3()
          let c = tq.get(k.JN, tQ)
          if (null == c) throw Error("The thread is unavailable")
          let p = tq.get(et.D0, tQ),
            f = async () => {
              let e
              if (n?.aborted || !aX.current) return null
              let i = {
                  turnTrigger: a,
                  addedFiles: [],
                  fileAttachments: [],
                  ideContext: null,
                  imageAttachments: [],
                  prompt: d,
                  untrustedAppMessage:
                    null == s || "annotation-controls" === t
                      ? void 0
                      : { source: "visualization", sourceId: n$, text: d, structuredContent: u ? r : void 0 },
                  mcpAppModelContextAttachments:
                    null != s && "annotation-controls" === t && null != r
                      ? [
                          {
                            id: null == tB ? n$ : (0, ec.fq)(tB),
                            kind: "context",
                            sourceName: o ?? l,
                            text: null,
                            structuredContent: r,
                            imageAttachments: [],
                            untrusted: !0,
                          },
                        ]
                      : void 0,
                  workspaceRoots: [c],
                },
                f = (e) =>
                  t0.send({ context: e, cwd: c, text: e.prompt }, { queueModeOverride: p ? "send-now" : "queue" })
              try {
                e = await f(i)
              } catch (r) {
                if ("annotation-controls" === t && r instanceof W.e) return null
                if (null == s || !(0, _.Yb)(r)) throw r
                if (n?.aborted || !aX.current) return null
                let a = (0, F.Hh)(i)
                if (u)
                  try {
                    d = await au({ prompt: a.prompt, title: o })
                  } catch (e) {
                    if (e instanceof Error && e.message === eW) return null
                    throw e
                  }
                if (n?.aborted || !aX.current) return null
                e = await f((0, F.TW)(i, { ...a, prompt: d }))
              }
              return null != s && "sandbox" === t && null == e ? e3() : e
            }
          if (p) {
            let e = (0, k.q8)(tq, tQ)
            i = (await (0, $.E2)({ scope: tq, managerHostId: e, hostId: ev ?? e, targetConversationId: tQ }, f)) != null
          } else i = (await f()) != null
          return i
        },
        aK = (0, d.useEffectEvent)(async (e, t) => {
          await aZ(e, "sandbox", t)
        }),
        aQ = (0, d.useEffectEvent)((e) => {
          let n = t1.current
          t && n?.contains(n.ownerDocument.activeElement) && n.dispatchEvent(new es.K(e))
        }),
        a0 = (0, d.useEffectEvent)((e) => {
          !t ||
            (eC?.(e),
            eI &&
              (aA && e.widgetControl && !ey && (0, V.oT)(tq, aE, "widget_control"),
              (0, ei.yy)(tq, b.CodexInlineVisualizationClicked, { threadId: tN, turnId: tV, visualizationType: tY })))
        }),
        a1 = null != ej,
        a2 = (0, d.useEffectEvent)((e) => {
          eI && !ey && ej?.(e)
        }),
        a5 = (0, d.useEffectEvent)((e, t, n) => {
          eL?.(e, t, n)
        }),
        a3 = (0, d.useEffectEvent)(({ isHovering: e, pointerType: n, target: a, eventTime: i }, r) => {
          if (!eI) return
          ;(at(e), n4("touch" === n))
          let l = t && !ey && e && "touch" !== n ? (a ?? null) : null
          a5(l, Math.min(i, performance.timeOrigin + performance.now()), null == l ? void 0 : r)
        }),
        a4 = () => {
          if (!aN || null == ab || t5.current === ab) return
          let e =
            t3.current?.failure === ab
              ? t3.current.prompt
              : tK.formatMessage(
                  {
                    id: "codex.visualization.error.fixPrompt",
                    defaultMessage: "Fix the inline visualization in {file}. It failed with {error}",
                  },
                  { error: `${ab.name}: ${ab.message}`, file: N },
                )
          ;((t5.current = ab),
            au({ prompt: e })
              .then(async (e) => {
                t3.current = { failure: ab, prompt: e }
                let t = null != tn || tq.get(et.D0, tQ)
                if (!t && null != tQ) {
                  let e = { stack: [], error: void 0, hasError: !1 }
                  try {
                    let n = (0, k.q8)(tq, tQ),
                      a = (0, h.mS)(e, await (0, S.V)(tq, n).getFollowUpContext(tQ), !1)
                    t = await (0, en.F)(tq, n, tQ, a)
                  } catch (t) {
                    ;((e.error = t), (e.hasError = !0))
                  } finally {
                    ;(0, h.hk)(e)
                  }
                }
                if (t) {
                  if (!(await aZ({ prompt: e }, "annotation-controls", void 0, "visualization_repair")))
                    throw eG.createCanceledError()
                  return
                }
                null != tt
                  ? await tt({ prompt: e })
                  : null != tN &&
                    (await (0, E.d)({
                      scope: tq,
                      turnTrigger: "visualization_repair",
                      hostId: ev,
                      model: void 0,
                      prompt: e,
                      thinking: void 0,
                      threadId: tN,
                    }))
              })
              .then(() => {
                ;(t3.current?.failure === ab && (t3.current = null),
                  af((e) => (e === ab ? null : e)),
                  ah((e) => (e?.failure === ab ? null : e)))
              })
              .catch((e) => {
                ;(t5.current === ab && (t5.current = null),
                  (e instanceof Error && e.message === eW) ||
                    eu.v.warning("visualization_repair.submit_failed", {
                      safe: { errorName: e instanceof Error ? e.name : "UnknownError" },
                      sensitive: { errorMessage: e instanceof Error ? e.message : String(e) },
                    }))
              }))
        },
        a6 = (0, d.useEffectEvent)(() => {
          let e = null == nj ? null : tq.get(tw.C8, tg),
            t = null == nj || null != e || ni ? null : tM.X.claim(nj.locale),
            n = e?.sandboxId ?? t?.sandboxId ?? tg
          null != nj && null == e && tq.set(tw.C8, tg, { sandboxId: n, scopeId: t?.sandboxId ?? th ?? tN ?? tg })
          let a = nl ? `${tO.ex}${(0, g.D)(`${n}:retry`)}` : n
          return {
            prepared: t,
            partition: (0, w.t$5)(a),
            sandboxId: "live" === t$ && null == t ? `${tO.ex}${(0, g.D)(crypto.randomUUID())}` : a,
          }
        })
      ;((0, d.useLayoutEffect)(() => {
        let e = t1.current
        if (!ax || null == e) return
        "inline" === t$ && ((nn.current = performance.timeOrigin + performance.now()), (na.current = null))
        let t = !1,
          n = null,
          a = () => {
            if (t) return
            let { prepared: a, partition: i, sandboxId: l } = a6(),
              o = a?.element ?? (0, Q.A)(tm === u.cS ? "webview" : "iframe", l, i),
              s = "bg-surface"
            ;(td?.transparentBackground
              ? (s = "bg-transparent")
              : "live" === t$ && (s = "bg-surface-elevated-secondary"),
              (o.className = (0, r.A)("invisible w-full overflow-hidden border-0", s)),
              (o.style.height = "code-preview" === tr ? "100%" : `${eB.uT + nc}px`),
              e.appendChild(o),
              (na.current = performance.timeOrigin + performance.now()),
              nO((n = { element: o, prepared: a, partition: i, sandboxId: l, key: nD, reloadCount: nu, content: nj })))
          }
        return (
          tm === u.cS ? queueMicrotask(a) : a(),
          () => {
            ;((t = !0), (nn.current = null), (na.current = null))
            let e = n
            null != e &&
              (null != e.prepared
                ? e.prepared.dispose()
                : (e.element.remove(), e.element instanceof HTMLIFrameElement || e.element.destroy?.()),
              nO((t) => (t === e ? null : t)))
          }
        )
      }, [nv, nI, nj, nc, tr, nu, td?.transparentBackground, nD, tm, ax, t$]),
        (0, d.useLayoutEffect)(() => {
          let e = t1.current
          if (!n5 || null != av || null != ao || null == n8 || !n8.isConnected || null == e) return
          let t = "function" == typeof e.showPopover && "function" == typeof e.hidePopover,
            n = () => {
              let t = n8.getBoundingClientRect(),
                n = e.currentCSSZoom || 1
              ;((e.style.position = "fixed"), (e.style.inset = "auto"))
              let a = e.offsetParent?.getBoundingClientRect()
              ;((e.style.top = `${(t.top - (a?.top ?? 0)) / n}px`),
                (e.style.left = `${(t.left - (a?.left ?? 0)) / n}px`),
                (e.style.width = `${t.width / n}px`),
                (e.style.height = `${t.height / n}px`))
            }
          ;(n(), t && (e.setAttribute("popover", "manual"), e.showPopover(), n()))
          let a = "u" < typeof ResizeObserver ? null : new ResizeObserver(n)
          ;(a?.observe(n8), window.addEventListener("resize", n), window.addEventListener("scroll", n, !0))
          let i = (t) => {
              let n = t.target,
                a = n8.closest('[role="dialog"]')
              !(n instanceof Node) ||
                null == a ||
                a.contains(n) ||
                e.contains(n) ||
                a.querySelector("button:not([disabled])")?.focus()
            },
            r = (t) => {
              if ("Tab" !== t.key) return
              let n = n8.closest('[role="dialog"]'),
                a = n?.querySelectorAll("button:not([disabled])"),
                i = t.shiftKey ? a?.item(0) : a?.item((a?.length ?? 0) - 1)
              t.target === i && (t.preventDefault(), e.querySelector("webview, iframe")?.focus())
            }
          return (
            document.addEventListener("focusin", i, !0),
            document.addEventListener("keydown", r, !0),
            () => {
              ;(a?.disconnect(),
                window.removeEventListener("resize", n),
                window.removeEventListener("scroll", n, !0),
                document.removeEventListener("focusin", i, !0),
                document.removeEventListener("keydown", r, !0),
                t && e.matches(":popover-open") && e.hidePopover(),
                t && e.removeAttribute("popover"),
                e.style.removeProperty("position"),
                e.style.removeProperty("inset"),
                e.style.removeProperty("top"),
                e.style.removeProperty("left"),
                e.style.removeProperty("width"),
                e.style.removeProperty("height"))
            }
          )
        }, [n5, av, ao, n8]),
        (0, d.useLayoutEffect)(() => {
          null != nU &&
            (nU.style.setProperty("width", tJ ? "round(100%, calc(1px / var(--codex-window-zoom)))" : ""),
            R || "code-preview" === tr || (ty?.fillContainer && !n5)
              ? (nU.style.height = "100%")
              : null != ar &&
                (nU.style.height = tJ ? `round(${ar + nc}px, calc(1px / var(--codex-window-zoom)))` : `${ar + nc}px`),
            (nU.title = tF))
        }, [R, nc, tr, ty?.fillContainer, n5, nU, tJ, tF, ar]),
        (0, d.useLayoutEffect)(() => {
          null != nU &&
            (nU.classList.toggle("invisible", !aw),
            (nU.inert = !aw || !eI || ey),
            nU.inert && a5(null),
            aw && !ey ? nU.removeAttribute("aria-hidden") : nU.setAttribute("aria-hidden", "true"))
        }, [eI, aw, ey, nU]))
      let a7 = (0, d.useEffectEvent)(() => eb?.())
      ;((0, d.useEffect)(() => {
        if (!aw) return
        let e = nt.current
        ;(e?.mark("fully_loaded"), e?.end())
      }, [aw]),
        (0, d.useEffect)(() => {
          if (!eI || null == ap || an !== ef || t8.current) return
          let e = ne.current
          ;(null == ef &&
            (null != te
              ? (e = v.CodexInlineVisualizationFailureReason.CODEX_INLINE_VISUALIZATION_FAILURE_REASON_FILE_READ_FAILED)
              : (e = v.CodexInlineVisualizationFailureReason.CODEX_INLINE_VISUALIZATION_FAILURE_REASON_FILE_TOO_LARGE)),
            (t8.current = !0),
            (0, ei.yy)(tq, v.CodexInlineVisualizationFailed, {
              threadId: tN,
              turnId: tV,
              visualizationType: tY,
              failureReason: e,
            }))
        }, [an, ef, eg, eI, te, ap, tq, tN, tV, tY]),
        (0, d.useEffect)(() => {
          if (!eI || !aw || t9.current) return
          t9.current = !0
          let e = a7()
          ;(0, ei.yy)(tq, b.CodexInlineVisualizationViewed, {
            threadId: tN,
            turnId: tV,
            triggerType:
              "explicit" === e
                ? b.CodexInlineVisualizationTriggerType.CODEX_INLINE_VISUALIZATION_TRIGGER_TYPE_EXPLICIT
                : "soft" === e
                  ? b.CodexInlineVisualizationTriggerType.CODEX_INLINE_VISUALIZATION_TRIGGER_TYPE_SOFT
                  : "none" === e
                    ? b.CodexInlineVisualizationTriggerType.CODEX_INLINE_VISUALIZATION_TRIGGER_TYPE_PASSIVE
                    : void 0,
            visualizationType: tY,
          })
        }, [eI, aw, tq, tN, tV, tY]))
      let a8 = (e) => {
          ;((t7.current = e && null != nY && nY !== nG ? nG : null), null != tl ? tl.onOpenChange(e) : n2(e))
        },
        a9 = (0, d.useEffectEvent)((e) =>
          eI && nm && ("fullscreen" === e.mode || "inline" === e.mode)
            ? (a8("fullscreen" === e.mode), { mode: e.mode })
            : { mode: ai },
        ),
        ie = (e) => {
          var t
          e$?.(e) !== !0 && ((t = e), (0, G.Rh)({ href: t, initiator: "inline_visualization", source: "manual" }))
        },
        it = (0, d.useEffectEvent)((e) => {
          eI && n5 && ("Escape" === e ? a8(!1) : "ArrowLeft" === e ? tl?.onPrevious?.() : tl?.onNext?.())
        }),
        ia = (0, d.useEffectEvent)((e, t, n) => {
          if (eI && null != ef) {
            if (t) return void ie(e)
            ac((t) => (t?.fragment === ef ? t : { fragment: ef, url: e, browserDestination: n }))
          }
        }),
        ii = (0, d.useEffectEvent)((e) => eI && null != ef && e4?.(e) === !0)
      ;(0, d.useLayoutEffect)(() => {
        eI || (al(), ac(null), n0(null), at(!1))
      }, [al, eI])
      let ir = tW?.transportId ?? tW?.widgetId ?? (null == tB ? void 0 : (0, ec.fq)(tB)),
        il = (0, d.useEffectEvent)(() => tB),
        io = (0, d.useEffectEvent)(() => tW),
        is = (0, d.useEffectEvent)((e) => {
          try {
            "1" === navigator.doNotTrack ||
              (0, O.l)() ||
              "allowed" !== tq.get(ei.YV).getAnalyticsAdmission() ||
              (0, ei.yy)(tq, v.CodexInlineVisualizationRuntimeDiagnostic, {
                visualizationSource: z ?? `sandbox/${tr}`,
                ...(function (e) {
                  let { name: t, message: n } = e,
                    a =
                      "VisualizationScriptLoadError" === t && n
                        ? (function (e) {
                            if (!e.startsWith(tz)) return "Visualization script could not be loaded"
                            let t = e.slice(tz.length)
                            if (t.length > 2048) return "Visualization script could not be loaded"
                            if (t.startsWith("/")) return "Relative visualization script could not be loaded"
                            try {
                              let e = new URL(t)
                              if (
                                "https:" === e.protocol &&
                                "persistent.oaistatic.com" === e.hostname &&
                                e.pathname.startsWith("/plugins/visualize/")
                              ) {
                                if (e.pathname.startsWith("/plugins/visualize/charts/"))
                                  return "First-party chart script could not be loaded"
                                if (e.pathname.startsWith("/plugins/visualize/widgets/"))
                                  return "First-party widget script could not be loaded"
                                return "First-party visualization script could not be loaded"
                              }
                              let n = tj.get(e.hostname)
                              if ("https:" === e.protocol && null != n)
                                return `${n} visualization script could not be loaded`
                              if ("data:" === e.protocol || "blob:" === e.protocol)
                                return "Inline visualization script could not be loaded"
                              return "Other visualization script could not be loaded"
                            } catch {
                              return "Relative visualization script could not be loaded"
                            }
                          })(n)
                        : void 0,
                    i = n && n.length <= 2048 ? tk.find(([e, a]) => e === t && a.test(n)) : void 0,
                    r = a ?? i?.[2] ?? (t && t.length <= 16 && tS.has(t) ? t : "Visualization error"),
                    l = (function ({ name: e, message: t, stack: n }) {
                      if (
                        !n ||
                        n.length > 524288 ||
                        (e?.length ?? 0) + (t?.length ?? 0) > 524288 ||
                        "Unknown environment error" === e
                      )
                        return []
                      let a = Error.prototype.toString.call({ name: e, message: t }),
                        i =
                          n.startsWith(`${a}
`) ||
                          n.startsWith(`${a}\r
`)
                      if (!i && !tE.test(n)) return []
                      let r = i ? n.slice(a.length) : n,
                        l = []
                      for (let [e] of r.matchAll(/[^\r\n]+/g)) {
                        let t = e.trim()
                        ;(i ? t.startsWith("at ") : tE.test(t)) &&
                          l.push(
                            (function (e, t) {
                              let n = e.replace(/^[^@:\r\n]*@/, "")
                              if (t) {
                                let t = e.slice(3).replace(/^async /, ""),
                                  a = t.indexOf(" (")
                                n = a >= 0 && t.endsWith(")") ? t.slice(a + 2, -1) : t
                              }
                              let a =
                                  /^(.+):(\d+):(\d+)$/.exec(n) ??
                                  (/[?#]/.test(n) || /^\w+:\/\/[^/]+$/.test(n) ? null : /^(.+):(\d+)$/.exec(n)),
                                i = a?.[1] ?? n,
                                r = tC.find(([e]) => e.test(i))?.[1] ?? "unknown",
                                l = a?.slice(2) ?? []
                              if (
                                "unknown" === r ||
                                0 === l.length ||
                                l.some((e) => e.length > 5 || Number(e) >= 16384)
                              )
                                return `at ${r}`
                              let o = l.map((e) => {
                                let t = 8 * Math.floor(Number(e) / 8)
                                return `${t}-${t + 7}`
                              })
                              return `at ${r}:${o.join(":")}`
                            })(t, i),
                          )
                      }
                      return l
                    })(e)
                  return {
                    errorTitle: r,
                    ...(l.length > 0 && { errorStack: l.join("\n") }),
                    groupingKey: `v1:${(0, g.D)([r, ...l.slice(0, 3)].join("\n"))}`,
                  }
                })(e),
              })
          } catch {}
        }),
        iu = (0, d.useEffectEvent)(() => ({ threadId: tN, turnId: tV })),
        id = (0, d.useEffectEvent)((e, t, n) => {
          ef === t && nU === n && ("connected" === e ? eM?.() : eV?.(e))
        }),
        ic = (0, d.useEffectEvent)(() => ({
          allowInteractions: t,
          isActive: eI,
          isSandboxReady: aw,
          inert: ey,
          fragment: ef,
          sandboxElement: nU,
          sandboxContainer: t1.current,
          sandboxDocumentState: tc,
          onDashboardLayoutAvailabilityChange: eT,
          onDashboardSourceInspection: e6,
          onDashboardSourcesGuestAction: e8,
          onDashboardTabLabels: e9,
          dashboardBindings: e_?.parsed.state === "ready" ? e_.parsed.bindings : void 0,
          onDashboardSourceDemand: t2.current ?? void 0,
          onDashboardAnnotation: eD,
        })),
        ip = (0, d.useEffectEvent)(() => tc)
      ;((0, d.useEffect)(() => {
        let e, n
        if (null == ef || null == nU || !t1.current?.contains(nU) || nU.getAttribute("partition") !== nF) return
        let a = (0, u.at)(nB)
        if (null == a) return
        let i = "inline" === t$ ? (nn.current ?? performance.timeOrigin + performance.now()) : void 0,
          r = na.current ?? i
        ;((nn.current = null), (na.current = null))
        let l =
          "inline" === t$
            ? ea.y.start(
                "webview_load",
                { telemetryOwner: "desktop_client", definitionVersion: 1, surface: "inline_visualization" },
                { key: n$, startedAtMs: i, traceAttributes: { "webview.surface": "inline_visualization" } },
              )
            : null
        ;(l?.mark("surface_inline_visualization"), l?.mark("rendered", { atMs: r }), (nt.current = l))
        let d = new AbortController(),
          c = ni ? ns.current : null
        ns.current = null
        let p = null,
          f = null,
          h = null,
          b = 0,
          I = null,
          y = !1,
          x = !1,
          _ = !1,
          A = !1,
          E = !1,
          S = !0,
          k = !(td?.requiresReadySignal ?? (0, tO.CI)(ef)),
          C = !1,
          z = null,
          j = crypto.randomUUID(),
          M = il(),
          O = io(),
          N = O?.widgetId ?? M?.path ?? crypto.randomUUID(),
          R = null == M && null == O ? "none" : "host",
          P = (e) => {
            d.signal.aborted ||
              null == p ||
              tU(p.setAdditionalGlobals({ additionalGlobals: { visualizationHoverReset: e } }))
          }
        nJ((e) => (null == e.height ? e : { height: null, isInitialHeight: !0, measuredWidth: null }))
        let T = (e) => {
            if (null == c) return
            let t = (0, ee.fI)(n$, nU)
            ;(eu.v.info("visualization_sandbox.guest_exit_recovery", {
              safe: { outcome: e, sameInit: null != c.initId && null != t.initId ? c.initId === t.initId : null },
              sensitive: { ...t, originalSandboxId: c.sandboxId, originalInitId: c.initId },
            }),
              (c = null))
          },
          D = () => {
            !d.signal.aborted &&
              A &&
              _ &&
              (S && ((S = !1), id("connected", ef, nU)), y || E || ((E = !0), T("ready"), id("ready", ef, nU)))
          },
          L = (t, n) => {
            if (!k) {
              z = { height: t, width: n }
              return
            }
            d.signal.aborted || (aH(t, ef, n), e?.onContentMeasured(), (_ = !0), D())
          },
          U = (t, a, i = t.name, r) => {
            !d.signal.aborted &&
              !y &&
              ((y = !0),
              T("failed"),
              clearTimeout(n),
              l?.fail("load_failed"),
              (ne.current = a),
              aa(ef),
              af(t),
              ah(null),
              id("failed", ef, nU),
              e?.onFailure(
                r ??
                  (a ===
                  v.CodexInlineVisualizationFailureReason
                    .CODEX_INLINE_VISUALIZATION_FAILURE_REASON_SANDBOX_RUNTIME_ERROR
                    ? "runtime"
                    : "sandbox_eval"),
                i,
              ),
              null == aU() || (C && k) || a$())
          },
          V = () => {
            k ||
              y ||
              null != n ||
              (n = setTimeout(() => {
                U(
                  I ?? Error("Inline visualization failed to start"),
                  v.CodexInlineVisualizationFailureReason.CODEX_INLINE_VISUALIZATION_FAILURE_REASON_SANDBOX_TIMEOUT,
                )
              }, 3e4))
          },
          F = (e) => {
            if (!nU.isConnected || d.signal.aborted) return
            let t = eq.safeParse("details" in e ? e.details : void 0).data,
              n = null != nV || null != p,
              a = "show_reload"
            n ||
              y ||
              ("render-process-gone" === e.type && t?.reason === "clean-exit"
                ? (a = "await_init")
                : ni || (a = "retry"))
            let i = (0, ee.fI)(n$, nU)
            if (
              (eu.v.warning("visualization_sandbox.guest_exit", {
                safe: {
                  eventType: e.type,
                  reason: t?.reason,
                  bridgeConnected: n,
                  widgetReady: E,
                  prewarmed: null != nV,
                  isRetry: ni,
                  action: a,
                },
                sensitive: { ...i, ...iu(), exitCode: t?.exitCode },
              }),
              "await_init" === a)
            ) {
              c = c ?? i
              return
            }
            if (((S = !1), aJ(null), aY(), "retry" === a)) {
              ;((ns.current = c ?? i), l?.fail("load_failed"), d.abort(), nr(!0))
              return
            }
            let r = Error("The visualization renderer stopped")
            ;((r.name = "VisualizationRendererStopped"),
              y
                ? af(r)
                : U(
                    r,
                    v.CodexInlineVisualizationFailureReason
                      .CODEX_INLINE_VISUALIZATION_FAILURE_REASON_SANDBOX_RUNTIME_ERROR,
                  ),
              nR(null),
              a5(null),
              d.abort())
          }
        nU instanceof HTMLIFrameElement ||
          (nU.addEventListener("render-process-gone", F, { signal: d.signal }),
          nU.addEventListener("destroyed", F, { signal: d.signal }))
        let $ = (e) => {
            if (d.signal.aborted || y) return
            let t = eH.parse(e),
              { message: n, name: a, stack: i } = t,
              r = (0, g.D)(JSON.stringify([a, n, i])),
              l = performance.now()
            if (h?.fingerprint === r && l - h.at < 1e3) return
            ;((h = { fingerprint: r, at: l }),
              b < 32 &&
                ((b += 1),
                eu.v.warning("visualization_sandbox.runtime_failed", {
                  safe: { sandboxId: n$ },
                  sensitive: { errorName: a, errorMessage: n, errorStack: i },
                }),
                is(t)))
            let o = Error(n ?? "Inline visualization failed")
            if (((o.name = a ?? "InlineVisualizationError"), "visualization" === tr)) {
              ;((I = o), ah({ fragment: ef, failure: o }))
              return
            }
            U(
              o,
              v.CodexInlineVisualizationFailureReason.CODEX_INLINE_VISUALIZATION_FAILURE_REASON_SANDBOX_RUNTIME_ERROR,
            )
          },
          B = (function ({ frame: e, renderedFragment: t, getContext: n, isUnavailable: a, consumeNativeGesture: i }) {
            return (t, i) => {
              if (t !== ep.g) return
              if (a()) return e3()
              let r = n(),
                l = r.onDashboardAnnotation
              if (null == l) return
              let o = eF.safeParse(i)
              if (o.success) {
                if (
                  !(
                    r.allowInteractions &&
                    r.isActive &&
                    !r.inert &&
                    e.isConnected &&
                    e === r.sandboxElement &&
                    r.sandboxContainer?.contains(e) === !0
                  ) ||
                  !r.isSandboxReady ||
                  document.hidden ||
                  r.sandboxDocumentState?.dashboardAnnotateMode !== !0
                )
                  return e3()
                if ("dashboard-escape" === o.data.type) l(null)
                else {
                  let t = (function (e, t) {
                    let n = t.parentElement
                    if (null == n) return null
                    let a = () => {
                        var n, a, i
                        let r, l, o, s, u, d, c, p, f
                        return (
                          (n = t),
                          (a = e.rect),
                          (i = e.point),
                          (r = n.getBoundingClientRect()),
                          (l = n.clientWidth > 0 ? r.width / n.clientWidth : 1),
                          (o = n.clientHeight > 0 ? r.height / n.clientHeight : 1),
                          (s = r.left + a.x * l),
                          (u = r.top + a.y * o),
                          (d = Math.max(0, r.left, s)),
                          (p = new DOMRect(
                            d,
                            (c = Math.max(0, r.top, u)),
                            Math.max(0, Math.min(window.innerWidth, r.right, s + a.width * l) - d),
                            Math.max(0, Math.min(window.innerHeight, r.bottom, u + a.height * o) - c),
                          )),
                          (f =
                            null == i
                              ? { x: p.right, y: p.top }
                              : {
                                  x: Math.max(d, Math.min(p.right, r.left + i.x * l)),
                                  y: Math.max(c, Math.min(p.bottom, r.top + i.y * o)),
                                }),
                          { rect: p, point: f }
                        )
                      },
                      i = { contextElement: n, getBoundingClientRect: () => a().rect, getEditorPoint: () => a().point },
                      { width: r, height: l } = i.getBoundingClientRect()
                    return r > 0 && l > 0
                      ? {
                          target: e.target,
                          anchor: i,
                          ...(e.tracking && { tracking: !0 }),
                          ...(e.additional && !e.tracking && { additional: !0 }),
                        }
                      : null
                  })(o.data, e)
                  if (null == t) return e3()
                  l(t)
                }
                return Promise.resolve({})
              }
            }
          })({
            frame: nU,
            renderedFragment: ef,
            getContext: ic,
            isUnavailable: () => null != nw || d.signal.aborted,
            consumeNativeGesture:
              tm === u.cS ? () => er.appServices?.mcpAppSandbox?.consumeUserGesture((0, ee.fI)(n$, nU)) : null,
          }),
          W = {
            hostApiHandlers: {
              notifyAppBlockMessage:
                nI || nw
                  ? (e) => {
                      let t = f?.handleMessage(e)
                      nw &&
                        (t
                          ? nw.record(n_, "interaction", { method: "AppBlock.bind", payload: e })
                          : (nw.hostRequest(n_, "AppBlock.notifyAppBlockMessage", [e]),
                            nw.markUnsupported("AppBlock request did not match a binding callback")))
                    }
                  : void 0,
              callMcp: (...e) => (nw?.hostRequest(n_, "WebSandbox.callMcp", e), e3()),
              callTool: (a, i) => {
                if (a === tO.Uf)
                  return (
                    (k = !0),
                    clearTimeout(n),
                    e?.onDocumentReady?.(),
                    e?.onReady("running_code"),
                    null != z && L(z.height, z.width),
                    Promise.resolve({})
                  )
                if (nw && (a === ep.g || a === tO.Pi)) return (nw.hostRequest(n_, "WebSandbox.callTool", [a, i]), e3())
                let r = B(a, i)
                if (null != r) return r
                if (a === ep.g) return d.signal.aborted ? e3() : (nW.current?.handleMessage(i) ?? e3())
                if (a === tO.Pi) {
                  let e = e2.safeParse(i)
                  if (!t || !e.success || e.data.capability !== j) return e3()
                  if (tm === u.cS) {
                    let t = er.appServices?.mcpAppSandbox
                    return null == t
                      ? e3()
                      : t
                          .consumeUserGesture((0, ee.fI)(n$, nU))
                          .then((t) => (!t || d.signal.aborted ? e3() : aq(e.data.blob, e.data.name)))
                  }
                  return aq(e.data.blob, e.data.name)
                }
                if (
                  (nw && (a === tO.dF || a === tO.n_) && nw.record(n_, "interaction", { method: a, args: i }),
                  a === tO.dF)
                ) {
                  let { method: e } = eX.parse(i)
                  return (aQ(e), Promise.resolve({}))
                }
                if (a === tO.n_) return (a0(eZ.parse(i)), n0(null), Promise.resolve({}))
                if (a === tO._G) {
                  let e = eK.safeParse(i)
                  return a1 && e.success ? (a2(e.data), Promise.resolve({})) : e3()
                }
                if (a === tO.Tg) {
                  let e = eQ.safeParse(i)
                  return (e.success && it(e.data.key), Promise.resolve({}))
                }
                if (a === tO.j3) {
                  let e = eY.safeParse(i)
                  return d.signal.aborted || !e.success ? e3() : (a3(e.data, P), Promise.resolve({}))
                }
                if (a === tO.kr) {
                  let e = eJ.safeParse(i)
                  return e.success ? ((x = !0), L(e.data.height, e.data.width), Promise.resolve({})) : e3()
                }
                return a !== tO.$t
                  ? (nw &&
                      (nw.hostRequest(n_, "WebSandbox.callTool", [a, i]),
                      nw.markUnsupported("Unknown AppBlock host request")),
                    e3())
                  : ($(i), Promise.resolve({}))
              },
              notifyBackgroundColor: () => {},
              notifyEnvironmentError: $,
              notifyIntrinsicHeight: (e) => {
                if (x) return
                let t = eB.dn.safeParse(e)
                t.success && L(t.data, null)
              },
              notifyIntrinsicWidth: () => {},
              notifyNavigation: () => {},
              notifySecurityPolicyViolation: (e) => {
                nw &&
                  (nw.record(n_, "state", { kind: "sandbox_csp_violation", payload: e }),
                  nw.markUnsupported("Blocked sandbox request has no completion evidence"))
              },
              openExternal: (e) => {
                nw
                  ? nw.hostRequest(n_, "WebSandbox.openExternal", [e])
                  : t &&
                    (function ({
                      payload: e,
                      sandboxId: t,
                      sandboxElement: n,
                      scheme: a,
                      signal: i,
                      openResource: r,
                      openExternal: l,
                    }) {
                      let o = (function (e) {
                        let t = ee.eL.safeParse(e)
                        if (!t.success) return null
                        let { href: n } = t.data,
                          a = new URL(n),
                          i = a.search.slice(1).split("&"),
                          r = i.filter(
                            (e) => new URLSearchParams(e).keys().next().value?.toLowerCase() !== "utm_source",
                          )
                        return (
                          r.length !== i.length && ((a.search = r.join("&")), (n = a.href)),
                          {
                            href: n,
                            url: a,
                            openAppAction: (function (e) {
                              if ("https://chatgpt.com" !== e.origin || null == (0, tR.ue)(tP, e.pathname)) return null
                              let t = (0, w.H_$)(e.searchParams)
                              return null == t ? null : new URL(t)
                            })(a),
                          }
                        )
                      })(e)
                      if (null == o) return
                      let s =
                        a === u.cS
                          ? er.appServices?.mcpAppSandbox?.consumeUserGesture((0, ee.fI)(t, n))
                          : Promise.resolve(!0)
                      null != s &&
                        s
                          .catch(() => !1)
                          .then((e) =>
                            !e || i.aborted || r(o.href)
                              ? null
                              : (async function ({ href: e, url: t, openAppAction: n }, a) {
                                  let i = n ?? ("codex:" === t.protocol ? t : null)
                                  if (null == i) return (0, tT.p)(e).catch(() => !1)
                                  let r =
                                    (!i.searchParams.has("threadAccess") && (0, w.kh9)(i)) ||
                                    (await er.appServices?.visualizations
                                      ?.isNavigationOnlyLink(n?.href ?? e)
                                      .catch(() => !1)) === !0
                                  return r && null != n ? (0, tT.p)(e, a).catch(() => !1) : r
                                })(o, i),
                          )
                          .then((e) => {
                            null == e ||
                              i.aborted ||
                              l(o.href, e, o.openAppAction?.searchParams.get("browserUrl") ?? null)
                          })
                    })({
                      payload: e,
                      sandboxId: n$,
                      sandboxElement: nU,
                      scheme: tm,
                      signal: d.signal,
                      openResource: ii,
                      openExternal: ia,
                    })
              },
              requestDisplayMode: (e) =>
                nw ? (nw.hostRequest(n_, "WebSandbox.requestDisplayMode", [e]), { mode: "inline" }) : a9(e),
              sendFollowUpMessage: (e) =>
                nw ? (nw.hostRequest(n_, "WebSandbox.sendFollowUpMessage", [e]), e3()) : aK(e, d.signal),
              sendInstrument: (e) => {
                let t = e5.safeParse(e)
                t.success &&
                  "code-preview" === tr &&
                  (0, ei.yy)(tq, m.Zuf, {
                    category: t.data.label,
                    previewHost: "apps",
                    previewLanguage: o,
                    startMode: s ?? "visible",
                  })
              },
              updateWidgetState: (e, n) => {
                if (nw) return (nw.hostRequest(n_, "WebSandbox.updateWidgetState", [e, n]), { ok: !1, retryable: !1 })
                let a = io(),
                  i = null == O ? N : a?.widgetId
                if (!t || d.signal.aborted || e !== i) return { ok: !1, retryable: !1 }
                if (null != O) {
                  if (null == a || (a.transportId ?? a.widgetId) !== ir) return { ok: !1, retryable: !1 }
                  if (
                    !0 === a.modelContentOnly &&
                    ("object" != typeof n || null == n || !Object.hasOwn(n, "modelContent"))
                  )
                    return { ok: !1, code: "invalid_state", retryable: !1 }
                  let e = (0, ec.Lj)(n)
                  if (!e.ok) return { ok: !1, code: e.reason, retryable: !1 }
                  let t = !0 === a.modelContentOnly ? { modelContent: e.state.modelContent } : e.state
                  return a.update(t) ? void 0 : { ok: !1, code: "storage_unavailable", retryable: !1 }
                }
                if (null == M) return { ok: !1, retryable: !1 }
                let r = (0, ec.h0)(M, n)
                if (!r.ok) return { ok: !1, code: r.reason, retryable: !1 }
              },
            },
            onSkybridgeCacheState: (e) => {
              l?.mark(`skybridge_cache_${e}`, { traceAttributes: { "webview.skybridge_cache_state": e } })
            },
            origin: a,
            sandboxId: n$,
            signal: d.signal,
            sourceUrl: nB,
            webview: nU,
          },
          G = aU()
        return (
          (e = ng?.onRunStart({ content: G?.html ?? ef, isStreaming: null != G, signal: d.signal })),
          (null == nV ? (0, ee.DC)(W) : nV.activate(W))
            .then(async (n) => {
              let a
              if (d.signal.aborted) return
              ;(l?.mark("sandbox_ready"),
                (p = n),
                tm === u.cS && tq.set(tw._q, !0),
                nI &&
                  (aD.current = f =
                    (function ({ getState: e, sandboxApi: t, signal: n }) {
                      let a,
                        i = crypto.randomUUID(),
                        r = s(),
                        l = r,
                        o = Promise.resolve()
                      function s() {
                        let { bind: t } = e(),
                          { values: n, callbacks: a } = eP(t)
                        return {
                          protocol: "app-block-messenger",
                          version: 1,
                          bridgeId: i,
                          bindings: n,
                          callbacks: [...a.keys()],
                        }
                      }
                      function u(e = !1) {
                        o = o
                          .then(async () => {
                            if (n.aborted) return
                            let a = s()
                            ;(!e && em()(a, l)) ||
                              (await t.setAdditionalGlobals({ additionalGlobals: { __appBlockMessenger: a } }), (l = a))
                          })
                          .catch((e) => {
                            n.aborted ||
                              eu.v.warning("app_block.binding_update_failed", { safe: {}, sensitive: { error: e } })
                          })
                      }
                      return (
                        n.addEventListener("abort", () => clearTimeout(a), { once: !0 }),
                        {
                          initialBridge: r,
                          sandboxApi: t,
                          sync: u,
                          handleMessage: function (t) {
                            if (n.aborted) return !1
                            let r =
                                eO(t) &&
                                "app-block-messenger" === t.protocol &&
                                1 === t.version &&
                                t.bridgeId === i &&
                                "binding:call" === t.type &&
                                "string" == typeof t.name &&
                                ez.test(t.name) &&
                                Array.isArray(t.args) &&
                                eN(t.args) &&
                                eR(t.args)
                                  ? {
                                      protocol: "app-block-messenger",
                                      version: 1,
                                      bridgeId: i,
                                      type: "binding:call",
                                      name: t.name,
                                      args: structuredClone(t.args),
                                    }
                                  : null,
                              { bind: l, onInteraction: o } = e()
                            if (null == r) return !1
                            let s = eP(l).callbacks.get(r.name)
                            if (null == s) return !1
                            let d = () => {
                              n.aborted || (clearTimeout(a), (a = setTimeout(() => u(!0), 0)))
                            }
                            try {
                              ;(null != o && o(), Promise.resolve(s(...r.args)).then(d, d))
                            } catch {
                              d()
                            }
                            return !0
                          },
                        }
                      )
                    })({ getState: aL, sandboxApi: n, signal: d.signal })))
              let i = td?.updateHtml
              null != i &&
                (nh.current = (function ({
                  sandboxApi: e,
                  updateHtml: t,
                  signal: n,
                  hasFailed: a,
                  renderRun: i,
                  onComplete: r,
                  onError: l,
                }) {
                  let o = Promise.resolve(),
                    s = !1,
                    u = null,
                    d = (d) => {
                      o = o.then(async () => {
                        if (!(n.aborted || a()) && !s && u === d) {
                          if (document.hidden) {
                            ;((u = null), c.cancel())
                            return
                          }
                          try {
                            await t(e, d)
                          } catch (e) {
                            if (n.aborted) return
                            ;((s = !0), c.cancel(), l(e instanceof Error ? e : Error("Sandbox stream update failed")))
                            return
                          }
                          !(n.aborted || a()) && (i?.onContentUpdated(d), d.isFinal && ((s = !0), r(d.html)))
                        }
                      })
                    },
                    c = e7()(d, 100)
                  return (
                    n.addEventListener("abort", () => c.cancel(), { once: !0 }),
                    {
                      api: e,
                      pause() {
                        ;((u = null), c.cancel())
                      },
                      update(e) {
                        a() ||
                          s ||
                          u?.isFinal === !0 ||
                          (!e.isFinal && u?.html === e.html) ||
                          ((u = e), e.isFinal ? (c.cancel(), d(e)) : c(e))
                      },
                    }
                  )
                })({
                  sandboxApi: n,
                  updateHtml: i,
                  signal: d.signal,
                  hasFailed: () => y,
                  renderRun: e,
                  onComplete: (e) => {
                    ;((C = !0), V(), aV(e))
                  },
                  onError: (e) => {
                    U(
                      e,
                      v.CodexInlineVisualizationFailureReason
                        .CODEX_INLINE_VISUALIZATION_FAILURE_REASON_SANDBOX_RUNTIME_ERROR,
                      e.name,
                      "stream_update",
                    )
                  },
                }))
              let r = aW(nU),
                o = aF(),
                s = o?.state === "ready" ? o.bindings : void 0,
                c = (0, tw.aX)(nU, r),
                g = null == O ? void 0 : io(),
                h = null
              for await (let i of (null != O ? (h = g?.state ?? null) : null != M && (h = (0, ec.Ik)(tq, M)),
              (0, eB.bN)({
                appBlockMessenger: f?.initialBridge,
                allowAnnotations: nv,
                allowInteractions: t,
                disableExternalNavigation: nA,
                document: td,
                documentState: ip(),
                dataBindings: null != o ? (s ?? {}) : void 0,
                canExpand: aB(),
                downloadCapability: t ? j : void 0,
                fragment: o?.fragment ?? ef,
                locale: eE,
                lockDocumentOverflow: "live" === t$,
                forwardWheel: a1,
                maxHeight: 1e4,
                maxWidth: c,
                sandboxApi: n,
                signal: d.signal,
                styles: "code-preview" === tr ? "" : void 0,
                styleVariables: r,
                widgetId: g?.widgetId ?? N,
                widgetState: h,
                widgetStatePersistence: R,
              }))) {
                if (nx) {
                  let e = e0.safeParse(i)
                  if (e.success) {
                    let { name: t, message: n } = e.data.error
                    a = (t && !n.startsWith("Uncaught ") && !n.startsWith(`${t}:`) ? `${t}: ${n}` : n).slice(0, 512)
                  }
                }
                let t = e1.safeParse(i)
                ;(t.success &&
                  (t.data.wasFatalError
                    ? U(
                        I ?? Error("Inline visualization failed while running", { cause: a }),
                        v.CodexInlineVisualizationFailureReason
                          .CODEX_INLINE_VISUALIZATION_FAILURE_REASON_SANDBOX_RUNTIME_ERROR,
                        "fatal_runtime_error",
                      )
                    : (k && e?.onReady("run_complete"), e?.onComplete())),
                  !A &&
                    ee._e.safeParse(i).success &&
                    ((A = !0), null == G && V(), nR(n), D(), k && e?.onReady("running_code")))
              }
              d.signal.aborted ||
                A ||
                U(
                  I ?? Error("Inline visualization failed before rendering"),
                  v.CodexInlineVisualizationFailureReason
                    .CODEX_INLINE_VISUALIZATION_FAILURE_REASON_SANDBOX_INITIALIZATION_FAILED,
                )
            })
            .catch((e) => {
              if (!d.signal.aborted) {
                let t = e instanceof Error && "TimeoutError" === e.name
                if ((t && l?.fail("timeout"), !ni && (t || (null != nV && null == p)))) {
                  ;(t || l?.fail("load_failed"), (ns.current = c), d.abort(), no(!0), nr(!0))
                  return
                }
                ;(eu.v.warning("visualization_sandbox.init_failed", {
                  safe: { errorName: e instanceof Error ? e.name : "UnknownError" },
                  sensitive: { errorMessage: e instanceof Error ? e.message : String(e) },
                }),
                  U(
                    (null == p && ip()?.dashboardEditMode,
                    e instanceof Error ? e : Error("Inline visualization failed to start")),
                    t
                      ? v.CodexInlineVisualizationFailureReason
                          .CODEX_INLINE_VISUALIZATION_FAILURE_REASON_SANDBOX_TIMEOUT
                      : v.CodexInlineVisualizationFailureReason
                          .CODEX_INLINE_VISUALIZATION_FAILURE_REASON_SANDBOX_INITIALIZATION_FAILED,
                  ))
              }
            }),
          () => {
            ;(d.abort(),
              aJ(null),
              aY(),
              a5(null),
              clearTimeout(n),
              aD.current === f && (aD.current = null),
              nh.current?.api === p && (nh.current = null),
              l?.abort("navigation_away"),
              nt.current === l && (nt.current = null),
              nR((e) => (e === p ? null : e)),
              null != nV
                ? nV.dispose()
                : (null != p && tU(p.requestMcpAppsResourceTeardown({ timeoutMs: 500 })), nU.removeAttribute("src")))
          }
        )
      }, [nv, t, o, s, nw, n_, ef, a1, ni, nA, nI, nx, eE, nV, tr, ng, td, nU, n$, nF, tm, tq, nB, t$, ir]),
        (0, d.useEffect)(() => {
          let e = aD.current
          e?.sandboxApi === nN && e.sync()
        }, [to, nN]))
      let ig = tW?.widgetId
      ;(0, d.useEffect)(() => {
        null == nN || null == tc || tU(nN.setAdditionalGlobals({ additionalGlobals: { sandboxDocumentState: tc } }))
      }, [e_?.dashboardPageId, ey, eI, aw, nN, tc])
      let ih = tW?.state
      ;((0, d.useEffect)(() => {
        null != nN &&
          null != ig &&
          tU(
            nN.setWidgetData({
              toolInput: null,
              toolOutput: null,
              toolResponseMetadata: null,
              widgetId: ig,
              widgetState: ih ?? null,
            }),
          )
      }, [nN, ig, ih]),
        (0, d.useEffect)(() => {
          let e = nh.current
          if (e?.api !== nN || null == tp) return
          let t = () => {
            !eI || document.hidden ? e.pause() : e.update(tp)
          }
          return (
            t(),
            document.addEventListener("visibilitychange", t),
            () => document.removeEventListener("visibilitychange", t)
          )
        }, [eI, nN, tp]),
        (0, d.useEffect)(() => {
          if (!eI || null == nN || null == nU || (n5 && (null == n8 || !n8.isConnected))) return
          let e = (0, tw.Po)({
            sandboxElement: nU,
            contentBounds: aT ? t4.current : null,
            getStyleVariables: () => aW(nU),
            onSize: (e, t, n) => {
              ;(tU(
                (0, eB.I9)({
                  canExpand: nm,
                  contentWidth: e,
                  displayMode: ai,
                  locale: eE,
                  maxHeight: 1e4,
                  sandboxApi: nN,
                  styleVariables: t,
                  theme: (0, eB.Mk)(),
                }),
              ),
                n && aG(e))
            },
          })
          return (td?.updateDisplayMode != null && tU(td.updateDisplayMode(nN, ai)), e)
        }, [nm, ai, eI, n5, eE, n8, nc, aT, aP, nN, td, nU, aR, t$]))
      let im = () => (0, tw.jX)(n$, nU, n5 ? t6.current : t4.current),
        ib = (0, ed.K)(async () => {
          let e = er.appServices?.visualizations?.captureImage,
            t = im()
          if (!eI || !aw || null == e || null == t) throw Error("Visualization image is unavailable")
          return e(t)
        }),
        iv = (0, ed.K)(() => {
          let e = null == tN ? null : (0, w.JXB)(tN),
            t =
              null == e || null == ev || null == tV
                ? void 0
                : tq.get(C.M, { hostId: ev, threadId: e })?.find((e) => tq.get(C.RN, e) === tV),
            n = null == t ? null : (0, C.od)(tq, t)
          ;(0, A.l)(tq, {
            action: b.CodexVisualContentAction.CODEX_VISUAL_CONTENT_ACTION_COPY_AS_IMAGE,
            inputMessageId: null == n ? void 0 : (0, Y.yR)(n),
            messageId: null == n ? void 0 : (0, Y.Sv)(n),
            surface: b.CodexVisualContentSurface.CODEX_VISUAL_CONTENT_SURFACE_INLINE_VISUALIZATION,
            threadId: tN,
            turnId: tV,
          })
          let a = er.appServices?.visualizations?.copyImage,
            i = im()
          null != a &&
            null != i &&
            a(i).then(
              () => {
                tq.get(q.Id).success(
                  tK.formatMessage({
                    id: "codex.visualization.copyImageSuccess",
                    defaultMessage: "Visualization copied as image",
                  }),
                )
              },
              () => {
                tq.get(q.Id).danger(
                  tK.formatMessage({
                    id: "codex.visualization.copyImageFailure",
                    defaultMessage: "Unable to copy visualization as image",
                  }),
                  { errorAnalytics: { toastId: "codex.visualization.copyImageFailure" } },
                )
              },
            )
        }),
        iI = eI && aw && "code-preview" !== tr && "inline" === t$,
        iy = iI && er.appServices?.visualizations?.copyImage != null,
        ix = iI && er.appServices?.visualizations?.captureImage != null,
        iw = eI && aw && nm,
        i_ = (0, ed.K)(() => a8(!0))
      ;(0, d.useImperativeHandle)(
        e,
        () =>
          iy || ix || iw
            ? { captureImage: ix ? ib : void 0, copyAsImage: iy ? iv : void 0, expand: iw ? i_ : void 0 }
            : null,
        [ix, iy, iw, ib, iv, i_],
      )
      let iA = () => {
          ;(async () => {
            if (!az) {
              if (null == ef || null == tN) return
              let { publishVisualizationToSites: e } = await n.e(46619).then(n.bind(n, "P98G"))
              return e({ scope: tq, file: N, fragment: ef, hostId: ev, intl: tK, threadId: tN })
            }
            if (null == aO || null == aM) return
            let e = tq.get(M.kf),
              t = tq.get(M.chatGptAuthenticatedAccountId$),
              a = tq.get(M.o8)
            if ("loaded" !== e.status || null == t || null == a) return
            let { shareVisualizationToSites: i } = await Promise.all([n.e(992177), n.e(170844)]).then(n.bind(n, "UPPB"))
            if (tq.get(el.JW, "4070967303") && tq.get(M.chatGptAuthenticatedAccountId$) === t && tq.get(M.o8) === a)
              return i({
                scope: tq,
                file: N,
                fragment: aO,
                intl: tK,
                source: aM,
                desiredAccessMode: "workspace" === e.structure ? "workspace_all" : void 0,
              })
          })().catch((e) => {
            ;(eu.v.warning("visualization_sites_handoff.failed", {
              safe: { errorName: e instanceof Error ? e.name : "UnknownError" },
            }),
              tq
                .get(q.Id)
                .danger(
                  az
                    ? tK.formatMessage({
                        id: "codex.visualization.shareFailure",
                        defaultMessage: "Unable to share visualization",
                      })
                    : tK.formatMessage({
                        id: "codex.visualization.publishToSitesFailure",
                        defaultMessage: "Unable to send visualization to Sites",
                      }),
                  { errorAnalytics: { toastId: "codex.visualization.publishToSitesFailure" } },
                ))
          })
        },
        iE = nK + nc
      ;(R || "code-preview" === tr ? (iE = "100%") : ty?.fillContainer && (iE = `calc(100% + ${nc}px)`),
        (0, d.useEffect)(() => {
          "app-block" === tr &&
            nw?.record(n_, "state", {
              kind: "app_block",
              appBlockId: tg,
              previewId: tg,
              code: ef,
              isReady: aw,
              hasFailed: aI,
              isStreaming: nf,
            })
        }, [nw, n_, ef, tg, aw, aI, nf, tr]),
        nx && (tH = aI ? "failed" : aw ? "ready" : "pending"))
      let iS = () => {
          ;(aa(null), af(null), ah(null), (t8.current = !1), (ns.current = null), nr(!1), nd((e) => e + 1))
        },
        ik =
          tb && "visualization" === tr && null != ab
            ? (0, a.jsx)(
                tv.i,
                {
                  failure: ab,
                  portalContainer: n5 ? t1.current : void 0,
                  allowReload: null != ef,
                  severity: null == ap ? "warning" : "error",
                  onReload: null == ef ? void 0 : iS,
                  onFix: aN ? a4 : void 0,
                },
                "issue",
              )
            : null
      return (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(Z.McpAppFollowUpConfirmationDialog, {
            confirmation:
              eI && null != ao
                ? { context: ao.context, onCancel: al, onConfirm: as, prompt: ao.prompt, title: ao.title }
                : null,
          }),
          (0, a.jsx)(tx, {
            url: eI ? av : null,
            browserDestination: ad?.browserDestination,
            onCancel: () => ac(null),
            onConfirm: () => {
              null != av && (ac(null), ie(av))
            },
          }),
          "app-block" === tr && "inline" === t$
            ? (0, a.jsx)(T, { isActive: eI, isStreaming: nf && !aI, title: tu })
            : null,
          (0, a.jsxs)("div", {
            ref: aS ? (e) => (0, V.bh)(tq, aS, e) : void 0,
            "data-app-block-preview": nx ? "true" : void 0,
            "data-internal-render-app-block-state": tH,
            "data-internal-render-app-block-error":
              "failed" === tH && ap
                ? ("string" == typeof ap.cause ? ap.cause : `${ap.name}: ${ap.message}`).slice(0, 512)
                : void 0,
            "data-app-block-ready-timeout":
              ny &&
              "app-block" === tr &&
              aI &&
              ne.current ===
                v.CodexInlineVisualizationFailureReason.CODEX_INLINE_VISUALIZATION_FAILURE_REASON_SANDBOX_TIMEOUT
                ? "true"
                : void 0,
            className: (0, r.A)(
              R || "code-preview" === tr
                ? "relative h-full w-full"
                : "relative !-m-[var(--visualize-paint-gutter)] w-[calc(100%+var(--visualize-paint-gutter)*2)]",
              !1,
              !R &&
                "code-preview" !== tr &&
                "inline" === t$ &&
                nH &&
                ty?.height == null &&
                "motion-safe:transition-[height] motion-safe:duration-relaxed motion-safe:ease-out",
            ),
            style: { ...np, height: iE },
            children: [
              (0, a.jsxs)("div", {
                ref: t1,
                className: (0, r.A)(
                  "relative isolate flow-root h-full w-full overflow-hidden",
                  !1,
                  ay && "loading-shimmer-mask",
                  n5 && "pointer-events-auto m-0 border-0 p-0",
                ),
                style: void 0,
                "aria-busy": ay,
                role: "group",
                onPointerDown: n5 ? (e) => e.stopPropagation() : void 0,
                onKeyDown: (e) => {
                  n5 &&
                    !e.defaultPrevented &&
                    !e.altKey &&
                    !e.ctrlKey &&
                    !e.metaKey &&
                    !e.shiftKey &&
                    !e.nativeEvent.isComposing &&
                    (0, J.yw)(e.target) &&
                    ("ArrowLeft" === e.key || "ArrowRight" === e.key) &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    "ArrowLeft" === e.key ? tl?.onPrevious?.() : tl?.onNext?.())
                },
                children: [
                  a_ && (0, a.jsx)(t_.ql, { fallback: ek, variant: t$ }),
                  tb && "visualization" === tr && null != ap
                    ? (0, a.jsx)("div", {
                        className: "flex h-full items-center justify-center text-sm text-secondary",
                        role: "status",
                        children: tK.formatMessage({
                          id: "codex.visualization.unavailable",
                          defaultMessage: "Visualization unavailable",
                        }),
                      })
                    : null,
                  ay
                    ? (0, a.jsx)("div", { className: "absolute inset-0 z-10 cursor-wait", "aria-hidden": "true" })
                    : null,
                  null != ik && (n5 || "live" === t$)
                    ? (0, a.jsx)("div", {
                        className:
                          "absolute end-2 top-2 z-40 mt-[var(--visualize-banner-inset,0px)] rounded-full bg-surface p-0.5",
                        onPointerDown: (e) => e.stopPropagation(),
                        children: ik,
                      })
                    : null,
                  tb && "visualization" !== tr && null != ap
                    ? (0, a.jsx)("div", {
                        className:
                          "pointer-events-none absolute inset-x-2 top-2 z-40 mt-[var(--visualize-banner-inset,0px)] flex justify-center",
                        children: (0, a.jsx)(tv.H, {
                          failure: ap,
                          variant: t$,
                          onDismiss: () => af(null),
                          onReload: iS,
                          onFix: aN ? a4 : void 0,
                        }),
                      })
                    : null,
                ],
              }),
              null,
              ((aw && ("visualization" === tr || ("app-block" === tr && az))) || null != ik) && "inline" === t$
                ? (0, a.jsx)("div", {
                    ref: t4,
                    className: "pointer-events-none absolute inset-[var(--visualize-paint-gutter)] z-50",
                    style: { insetInline: aP },
                    hidden: !eI || n5,
                    "data-visualization-content-bounds": !0,
                    children:
                      tI || null != ik
                        ? (0, a.jsx)(tf, {
                            issueAction: ik,
                            showActions: tI && aw && !aI,
                            isExpanded: n5,
                            openMenu: nQ,
                            isTouchMode: n3,
                            isVisible: ae,
                            onCopyAsImage: iv,
                            onExpand: nm ? () => a8(!0) : void 0,
                            onMenuOpenChange: n0,
                            onPublishToSites: aj ? iA : void 0,
                            share:
                              az && aj && null != aM && null != aO ? { source: aM, file: N, fragment: aO } : void 0,
                          })
                        : null,
                  })
                : null,
              (0, a.jsx)(ex, {
                ref: nW,
                document: {
                  allowAnnotations: nv,
                  fragment: ef,
                  sandboxId: n$,
                  canExpand: nm,
                  locale: eE,
                  presentation: tr,
                  sandboxElement: nU,
                  sourceUrl: nB,
                  variant: t$,
                },
                isActive: eI,
                isPreviewOpen: n5,
                isVisible: eI && aw && "inline" === ai,
                sandboxApi: nN,
                widgetStateIdentity: tB,
                onSubmit: (e) => aZ(e, "annotation-controls"),
              }),
            ],
          }),
          n5 && null != ef
            ? (0, a.jsx)(tA.$, {
                src: "",
                alt: tF,
                modal: !1,
                open: !0,
                preview: tl,
                previewContent: (0, a.jsx)("div", {
                  ref: n9,
                  className: "relative flow-root w-full overflow-hidden",
                  style: { ...np, height: (nY ?? nK) + nc },
                  children: (0, a.jsx)("div", {
                    ref: t6,
                    className: "pointer-events-none absolute inset-[var(--visualize-paint-gutter)]",
                    "data-visualization-content-bounds": !0,
                  }),
                }),
                onCloseAutoFocus: (e) => {
                  null != tl
                    ? tl.onCloseAutoFocus(e)
                    : (e.preventDefault(), t4.current?.querySelector('button[aria-haspopup="dialog"]')?.focus())
                },
                onOpenAutoFocus: (e) => {
                  null == tl && (e.preventDefault(), nU?.focus())
                },
                toolbarActions: [
                  {
                    ariaLabel: tK.formatMessage({
                      id: "codex.visualization.copyAsImage",
                      defaultMessage: "Copy as image",
                    }),
                    icon: (0, a.jsx)(H.I, { "aria-hidden": !1, asset: y.r }),
                    onClick: iv,
                  },
                  ...(aj
                    ? [
                        {
                          ariaLabel: az
                            ? tK.formatMessage({
                                id: "codex.visualization.shareVisualization",
                                defaultMessage: "Share visualization\u2026",
                              })
                            : tK.formatMessage({
                                id: "codex.visualization.publishToSites",
                                defaultMessage: "Publish to Sites\u2026",
                              }),
                          icon: (0, a.jsx)(H.I, { "aria-hidden": !1, asset: I.O }),
                          onClick: () => {
                            if (az)
                              try {
                                ;(0, ei.yy)(tq, v.CodexInlineVisualizationShareClicked, {})
                              } catch {}
                            iA()
                          },
                        },
                      ]
                    : []),
                ],
                onOpenChange: a8,
              })
            : null,
        ],
      })
    }
    function tU(e) {
      e.catch(() => {})
    }
    var tV = n("b3Zw")
    function tF(e) {
      let t,
        n = (0, i.c)(5),
        { frameKey: r, rendererProps: o } = e,
        s = (0, l.gh)(f.u),
        u = (0, d.useId)()
      return (
        n[0] !== r || n[1] !== u || n[2] !== o || n[3] !== s
          ? ((t = (0, a.jsx)("div", {
              className: "h-full w-full",
              ref: (e) => {
                if (null == e) return
                let t = s.get(tV.v, r)
                return (t.attach(u, e, o), () => t.detach(u))
              },
            })),
            (n[0] = r),
            (n[1] = u),
            (n[2] = o),
            (n[3] = s),
            (n[4] = t))
          : (t = n[4]),
        t
      )
    }
    var t$ = n("HjmE"),
      tB = n("MBpz"),
      tW = n("FbH7")
    let tG = { Sandbox: tL, liveData: void 0 }
    function tH(e) {
      let t,
        n = (0, i.c)(4)
      if (null != e.sharedFrame && "u" > typeof Element && "function" == typeof Element.prototype.moveBefore) {
        let t
        return (
          n[0] !== e
            ? ((t = (0, a.jsx)(tF, { frameKey: e.sharedFrame.key, rendererProps: e })), (n[0] = e), (n[1] = t))
            : (t = n[1]),
          t
        )
      }
      return (
        n[2] !== e
          ? ((t = (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(a.Fragment, { children: (0, a.jsx)(tq, { ...e, scheme: u.cS }) }), null],
            })),
            (n[2] = e),
            (n[3] = t))
          : (t = n[3]),
        t
      )
    }
    function tq(e) {
      let t,
        n,
        r,
        l,
        o,
        s = (0, i.c)(16)
      if (
        (s[0] !== e
          ? (({ embeddedActionsRef: t, embeddedHtml: n, showEmbeddedInlineActions: l, ...r } = e),
            (s[0] = e),
            (s[1] = t),
            (s[2] = n),
            (s[3] = r),
            (s[4] = l))
          : ((t = s[1]), (n = s[2]), (r = s[3]), (l = s[4])),
        null != n)
      ) {
        let e, i
        s[5] !== t || s[6] !== n || s[7] !== r || s[8] !== l
          ? ((e = (e) =>
              (0, a.jsx)(tJ, { ...r, ...e, contents: n, embeddedActionsRef: t, showEmbeddedInlineActions: l })),
            (s[5] = t),
            (s[6] = n),
            (s[7] = r),
            (s[8] = l),
            (s[9] = e))
          : (e = s[9])
        let o = e
        return (s[12] !== o ? ((i = o()), (s[12] = o), (s[13] = i)) : (i = s[13]), i)
      }
      return (s[14] !== r ? ((o = (0, a.jsx)(tB.C, { ...r, runtime: tG })), (s[14] = r), (s[15] = o)) : (o = s[15]), o)
    }
    function tJ(e) {
      let t,
        n,
        o,
        u,
        h,
        m,
        b,
        v,
        I,
        y,
        x,
        w,
        _ = (0, i.c)(89),
        {
          allowInteractions: A,
          attributes: E,
          contents: S,
          codePreviewLanguage: k,
          codePreviewStartMode: C,
          createRenderObserver: z,
          visualizationSource: j,
          embeddedActionsRef: M,
          embeddedAnnotationsEnabled: O,
          embeddedPageContentInset: N,
          embeddedPageHeaderDensity: R,
          embeddedMaxLength: P,
          embeddedFiles: T,
          embeddedSizing: D,
          embeddedFrameKey: L,
          embeddedFillContainer: U,
          embeddedLoadingFallback: V,
          sharedWidgetState: F,
          shareSource: $,
          embeddedPreview: B,
          hostId: W,
          isActive: G,
          embeddedInert: H,
          onEmbeddedClick: q,
          onEmbeddedWheel: J,
          onEmbeddedDashboardGuestReady: Y,
          onEmbeddedDashboardLayoutAvailabilityChange: X,
          onEmbeddedDashboardAnnotation: Z,
          onEmbeddedHoverTargetChange: K,
          onEmbeddedStatusChange: Q,
          onOpenEmbeddedLink: ee,
          onOpenEmbeddedResource: et,
          onEmbeddedDashboardSourceInspection: en,
          onEmbeddedDashboardSourcesGuestAction: ea,
          onEmbeddedDashboardTabLabels: ei,
          onSendFollowUpMessage: er,
          onSendUntrustedFollowUpMessage: el,
          onStreamComplete: eo,
          onStreamFailure: es,
          presentation: eu,
          appBlockBind: ed,
          onAppBlockBindInteraction: ec,
          appBlockTitle: ep,
          sandboxDocument: ef,
          sandboxDocumentState: eg,
          streamingHtml: eh,
          scheme: em,
          showEmbeddedErrorAlert: eb,
          showEmbeddedInlineActions: ev,
          threadId: eI,
          title: ey,
          turnId: ex,
          variant: ew,
        } = e,
        e_ = void 0 === P ? t$.M : P,
        eA = void 0 === G || G,
        eE = void 0 === ew ? "inline" : ew
      ;(0, l.gh)(f.u)
      let eS = (0, c.A)(),
        ek = (0, d.useId)()
      _[0] !== S ? ((t = { contents: S }), (_[0] = S), (_[1] = t)) : (t = _[1])
      let eC = t
      _[2] !== E || _[3] !== eE
        ? ((n = "inline" === eE && "wide" === (0, p.B)(E, "mode")), (_[2] = E), (_[3] = eE), (_[4] = n))
        : (n = _[4])
      let ez = n
      if (_[5] !== E || _[6] !== S || _[7] !== e_ || _[8] !== eh) {
        u = Symbol.for("react.early_return_sentinel")
        e: {
          let e = (0, p.B)(E, "path") ?? (0, p.B)(E, "file")
          if (null == e || S.length > e_ || (eh?.html.length ?? 0) > e_) {
            u = null
            break e
          }
          o = s().basename(e.replaceAll("\\", "/"))
        }
        ;((_[5] = E), (_[6] = S), (_[7] = e_), (_[8] = eh), (_[9] = o), (_[10] = u))
      } else ((o = _[9]), (u = _[10]))
      if (u !== Symbol.for("react.early_return_sentinel")) return u
      let ej = o
      _[11] !== L || _[12] !== ej || _[13] !== W || _[14] !== ek || _[15] !== eI
        ? ((m = JSON.stringify(L ?? [W, eI, ej, ek])),
          (b = tO.ex),
          (v = (0, g.D)(m)),
          (_[11] = L),
          (_[12] = ej),
          (_[13] = W),
          (_[14] = ek),
          (_[15] = eI),
          (_[16] = m),
          (_[17] = b),
          (_[18] = v))
        : ((m = _[16]), (b = _[17]), (v = _[18]))
      let eM = `${b}${v}`,
        eO = "app-block" === eu && "mb-0",
        eN = ez && tW.A.VisualizationWideBlock,
        eR = (U || "code-preview" === eu || D?.fillContainer || D?.height != null) && "h-full"
      _[19] !== eO || _[20] !== eN || _[21] !== eR
        ? ((I = (0, r.A)(tW.A.VisualizationBlock, eO, eN, eR)), (_[19] = eO), (_[20] = eN), (_[21] = eR), (_[22] = I))
        : (I = _[22])
      let eP = ez ? "true" : void 0,
        eT = ez ? "visualization" : void 0,
        eD = null == L ? (eI ?? eM) : eM
      return (
        _[23] !== eS || _[24] !== ey
          ? ((y =
              ey ??
              eS.formatMessage({ id: "codex.visualization.frame.title", defaultMessage: "Interactive visualization" })),
            (_[23] = eS),
            (_[24] = ey),
            (_[25] = y))
          : (y = _[25]),
        _[26] !== A ||
        _[27] !== ed ||
        _[28] !== ep ||
        _[29] !== m ||
        _[30] !== k ||
        _[31] !== C ||
        _[32] !== S ||
        _[33] !== z ||
        _[34] !== h ||
        _[35] !== M ||
        _[36] !== O ||
        _[37] !== U ||
        _[38] !== H ||
        _[39] !== V ||
        _[40] !== N ||
        _[41] !== R ||
        _[42] !== B ||
        _[43] !== D ||
        _[44] !== ej ||
        _[45] !== eC ||
        _[46] !== W ||
        _[47] !== eS.locale ||
        _[48] !== eA ||
        _[49] !== ez ||
        _[50] !== ec ||
        _[51] !== q ||
        _[52] !== Z ||
        _[53] !== Y ||
        _[54] !== X ||
        _[55] !== en ||
        _[56] !== ea ||
        _[57] !== ei ||
        _[58] !== K ||
        _[59] !== Q ||
        _[60] !== J ||
        _[61] !== ee ||
        _[62] !== et ||
        _[63] !== er ||
        _[64] !== el ||
        _[65] !== eo ||
        _[66] !== es ||
        _[67] !== eu ||
        _[68] !== ef ||
        _[69] !== eg ||
        _[70] !== eM ||
        _[71] !== em ||
        _[72] !== $ ||
        _[73] !== F ||
        _[74] !== eb ||
        _[75] !== ev ||
        _[76] !== eh ||
        _[77] !== eD ||
        _[78] !== y ||
        _[79] !== eI ||
        _[80] !== ex ||
        _[81] !== eE ||
        _[82] !== j
          ? ((x = (0, a.jsx)(tL, {
              actionsRef: M,
              allowInteractions: A,
              annotationsEnabled: O,
              codePreviewLanguage: k,
              codePreviewStartMode: C,
              createRenderObserver: z,
              visualizationSource: j,
              file: ej,
              fillContainer: U,
              loadingFallback: V,
              fragment: S,
              fragmentData: eC,
              heightCacheKey: m,
              hostId: W,
              isActive: eA,
              inert: H,
              isWide: ez,
              dataDocument: h,
              locale: eS.locale,
              onClick: q,
              onWheel: J,
              onDashboardGuestReady: Y,
              onDashboardLayoutAvailabilityChange: X,
              onDashboardAnnotation: Z,
              onHoverTargetChange: K,
              onStatusChange: Q,
              onOpenLink: ee,
              onOpenResource: et,
              onDashboardSourceInspection: en,
              onDashboardSourcesGuestAction: ea,
              onDashboardTabLabels: ei,
              onSendFollowUpMessage: er,
              onSendUntrustedFollowUpMessage: el,
              onStreamComplete: eo,
              onStreamFailure: es,
              presentation: eu,
              preview: B,
              appBlockBind: ed,
              onAppBlockBindInteraction: ec,
              appBlockTitle: ep,
              sandboxDocument: ef,
              sandboxDocumentState: eg,
              streamingHtml: eh,
              readError: null,
              sandboxId: eM,
              sandboxScopeId: eD,
              scheme: em,
              showErrorAlert: eb,
              showInlineActions: ev,
              sizing: D,
              pageContentInset: N,
              pageHeaderDensity: R,
              sharedWidgetState: F,
              shareSource: $,
              threadId: eI,
              title: y,
              turnId: ex,
              variant: eE,
            })),
            (_[26] = A),
            (_[27] = ed),
            (_[28] = ep),
            (_[29] = m),
            (_[30] = k),
            (_[31] = C),
            (_[32] = S),
            (_[33] = z),
            (_[34] = h),
            (_[35] = M),
            (_[36] = O),
            (_[37] = U),
            (_[38] = H),
            (_[39] = V),
            (_[40] = N),
            (_[41] = R),
            (_[42] = B),
            (_[43] = D),
            (_[44] = ej),
            (_[45] = eC),
            (_[46] = W),
            (_[47] = eS.locale),
            (_[48] = eA),
            (_[49] = ez),
            (_[50] = ec),
            (_[51] = q),
            (_[52] = Z),
            (_[53] = Y),
            (_[54] = X),
            (_[55] = en),
            (_[56] = ea),
            (_[57] = ei),
            (_[58] = K),
            (_[59] = Q),
            (_[60] = J),
            (_[61] = ee),
            (_[62] = et),
            (_[63] = er),
            (_[64] = el),
            (_[65] = eo),
            (_[66] = es),
            (_[67] = eu),
            (_[68] = ef),
            (_[69] = eg),
            (_[70] = eM),
            (_[71] = em),
            (_[72] = $),
            (_[73] = F),
            (_[74] = eb),
            (_[75] = ev),
            (_[76] = eh),
            (_[77] = eD),
            (_[78] = y),
            (_[79] = eI),
            (_[80] = ex),
            (_[81] = eE),
            (_[82] = j),
            (_[83] = x))
          : (x = _[83]),
        _[84] !== I || _[85] !== eP || _[86] !== eT || _[87] !== x
          ? ((w = (0, a.jsx)("div", {
              className: I,
              "data-wide-markdown-block": eP,
              "data-wide-markdown-block-kind": eT,
              children: x,
            })),
            (_[84] = I),
            (_[85] = eP),
            (_[86] = eT),
            (_[87] = x),
            (_[88] = w))
          : (w = _[88]),
        w
      )
    }
  },
  idAu(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      r = n("slpy"),
      l = n("zd8w"),
      o = n("Wf1j"),
      s = n("oyxz"),
      u = n("Sm6l"),
      d = n("bVeK"),
      c = n("nzx4"),
      p = n("Wdu7"),
      f = n("SziE")
    function g(e) {
      return e.preventDefault()
    }
    function h(e) {
      let t,
        n,
        l,
        d,
        c,
        g = (0, i.c)(33),
        {
          failure: h,
          onDismiss: m,
          onFix: b,
          onReload: v,
          allowReload: I,
          severity: y,
          showDetails: x,
          variant: w,
        } = e,
        _ = void 0 !== I && I,
        A = void 0 === y ? "error" : y,
        E = void 0 !== x && x,
        S = (0, o.A)(),
        k = "live" === (void 0 === w ? "inline" : w),
        C = _ || null == h || "VisualizationRendererStopped" === h.name ? v : void 0
      g[0] !== S
        ? ((t = S.formatMessage({ id: "codex.alert.closeAriaLabel", defaultMessage: "Close" })), (g[0] = S), (g[1] = t))
        : (t = g[1])
      let z = t
      if ("warning" === A) {
        let e
        ;(g[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(s.A, {
              id: "codex.visualization.runtimeWarning",
              defaultMessage: "Part of this visualization may not be working",
            })),
            (g[4] = e))
          : (e = g[4]),
          (n = e))
      } else {
        let e
        ;(g[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(s.A, {
              id: "codex.visualization.error",
              defaultMessage: "An error occurred inside the visualization",
            })),
            (g[5] = e))
          : (e = g[5]),
          (n = e))
      }
      g[6] !== _ || g[7] !== k || g[8] !== b || g[9] !== C
        ? ((l =
            null == b && null == C
              ? null
              : (0, a.jsxs)("div", {
                  className: "flex flex-wrap gap-2",
                  children: [
                    null != C
                      ? (0, a.jsx)(u.$, {
                          color: k ? "danger" : "secondary",
                          size: k ? "compact" : "composerSm",
                          onClick: C,
                          children: (0, a.jsx)(s.A, {
                            id: "codex.visualization.error.reload",
                            defaultMessage: "Reload",
                          }),
                        })
                      : null,
                    null != b && (null == C || _)
                      ? (0, a.jsx)(u.$, {
                          color: k ? "danger" : "secondary",
                          size: k ? "compact" : "composerSm",
                          onClick: b,
                          children: (0, a.jsx)(s.A, {
                            id: "codex.visualization.error.fix",
                            defaultMessage: "Ask ChatGPT to fix it",
                          }),
                        })
                      : null,
                  ],
                })),
          (g[6] = _),
          (g[7] = k),
          (g[8] = b),
          (g[9] = C),
          (g[10] = l))
        : (l = g[10])
      let j = l
      if (k) {
        let e, t, i, l
        return (
          g[11] !== h || g[12] !== E
            ? ((e =
                E && null != h
                  ? (0, a.jsx)("span", {
                      className: "text-xs break-words text-secondary",
                      children: `${h.name}: ${h.message}`.slice(0, 512),
                    })
                  : null),
              (g[11] = h),
              (g[12] = E),
              (g[13] = e))
            : (e = g[13]),
          g[14] !== j || g[15] !== n || g[16] !== e
            ? ((t = (0, a.jsxs)("div", {
                className: "flex min-w-0 flex-1 flex-col items-start gap-2 text-sm break-words",
                children: [n, e, j],
              })),
              (g[14] = j),
              (g[15] = n),
              (g[16] = e),
              (g[17] = t))
            : (t = g[17]),
          g[18] !== z || g[19] !== m
            ? ((i =
                null != m
                  ? (0, a.jsx)(r.m, {
                      content: z,
                      children: (0, a.jsx)(u.$, {
                        "aria-label": z,
                        color: "ghostSecondary",
                        size: "iconMd",
                        onClick: m,
                        children: (0, a.jsx)(f.A, { className: "icon-2xs" }),
                      }),
                    })
                  : null),
              (g[18] = z),
              (g[19] = m),
              (g[20] = i))
            : (i = g[20]),
          g[21] !== t || g[22] !== i
            ? ((l = (0, a.jsxs)("div", {
                className: "pointer-events-auto flex w-full min-w-0 items-start justify-between gap-2",
                role: "alert",
                children: [t, i],
              })),
              (g[21] = t),
              (g[22] = i),
              (g[23] = l))
            : (l = g[23]),
          l
        )
      }
      let M = "warning" === A ? "warning" : "danger"
      return (
        g[24] !== h || g[25] !== E
          ? ((d =
              E && null != h
                ? (0, a.jsx)("div", {
                    className: "mt-1 text-xs break-words text-secondary",
                    children: `${h.name}: ${h.message}`.slice(0, 512),
                  })
                : null),
            (g[24] = h),
            (g[25] = E),
            (g[26] = d))
          : (d = g[26]),
        g[27] !== j || g[28] !== n || g[29] !== m || g[30] !== M || g[31] !== d
          ? ((c = (0, a.jsx)("div", {
              className: "rounded-xl bg-surface",
              children: (0, a.jsxs)(p.F, { actions: j, level: M, onRemove: m, children: [n, d] }),
            })),
            (g[27] = j),
            (g[28] = n),
            (g[29] = m),
            (g[30] = M),
            (g[31] = d),
            (g[32] = c))
          : (c = g[32]),
        c
      )
    }
    n.d(
      t,
      {},
      {
        H: h,
        i: function (e) {
          let t,
            n,
            s,
            p,
            f,
            m,
            b,
            v,
            I,
            y,
            x,
            w,
            _ = (0, i.c)(27)
          _[0] !== e
            ? (({ failure: n, portalContainer: s, ...t } = e), (_[0] = e), (_[1] = t), (_[2] = n), (_[3] = s))
            : ((t = _[1]), (n = _[2]), (s = _[3]))
          let A = (0, o.A)(),
            [E, S] = (0, l.useState)(!1)
          _[4] !== A
            ? ((p = A.formatMessage({
                id: "codex.visualization.viewError",
                defaultMessage: "View visualization error",
              })),
              (_[4] = A),
              (_[5] = p))
            : (p = _[5])
          let k = p
          ;(_[6] === Symbol.for("react.memo_cache_sentinel") ? ((f = (0, a.jsx)(d.Ko7, {})), (_[6] = f)) : (f = _[6]),
            _[7] !== k
              ? ((m = (0, a.jsx)(c.Wv, {
                  asChild: !0,
                  children: (0, a.jsx)(u.$, {
                    "aria-label": k,
                    color: "blockAction",
                    radius: "full",
                    size: "inputIcon",
                    children: f,
                  }),
                })),
                (_[7] = k),
                (_[8] = m))
              : (m = _[8]),
            _[9] !== k || _[10] !== m
              ? ((b = (0, a.jsx)(r.m, { content: k, openDelay: 250, children: m })),
                (_[9] = k),
                (_[10] = m),
                (_[11] = b))
              : (b = _[11]))
          let C = null == s ? void 0 : g
          return (
            _[12] === Symbol.for("react.memo_cache_sentinel") ? ((v = () => S(!1)), (_[12] = v)) : (v = _[12]),
            _[13] !== t
              ? ((I =
                  null == t.onFix
                    ? void 0
                    : () => {
                        ;(S(!1), t.onFix?.())
                      }),
                (_[13] = t),
                (_[14] = I))
              : (I = _[14]),
            _[15] !== t || _[16] !== n || _[17] !== I
              ? ((y = (0, a.jsx)(h, { ...t, failure: n, showDetails: !0, onDismiss: v, onFix: I })),
                (_[15] = t),
                (_[16] = n),
                (_[17] = I),
                (_[18] = y))
              : (y = _[18]),
            _[19] !== s || _[20] !== C || _[21] !== y
              ? ((x = (0, a.jsx)(c.hl, {
                  align: "end",
                  disablePadding: !0,
                  size: "content",
                  portalContainer: s,
                  onOpenAutoFocus: C,
                  children: y,
                })),
                (_[19] = s),
                (_[20] = C),
                (_[21] = y),
                (_[22] = x))
              : (x = _[22]),
            _[23] !== E || _[24] !== b || _[25] !== x
              ? ((w = (0, a.jsxs)(c.AM, { open: E, onOpenChange: S, children: [b, x] })),
                (_[23] = E),
                (_[24] = b),
                (_[25] = x),
                (_[26] = w))
              : (w = _[26]),
            w
          )
        },
      },
    )
  },
  qZc9(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      r = n("on57"),
      l = n("Wf1j"),
      o = n("JwGC"),
      s = n("FbH7")
    n.d(
      t,
      {},
      {
        $: function (e) {
          let t,
            n,
            u,
            d,
            c,
            p,
            f,
            g,
            h,
            m,
            b,
            v,
            I = (0, i.c)(30)
          I[0] !== e
            ? (({ preview: t, previewContent: n, ...u } = e), (I[0] = e), (I[1] = t), (I[2] = n), (I[3] = u))
            : ((t = I[1]), (n = I[2]), (u = I[3]))
          let y = (0, l.A)()
          ;(I[4] !== y
            ? ((d = y.formatMessage({
                id: "codex.visualization.closePreview",
                defaultMessage: "Close visualization preview",
              })),
              (I[4] = y),
              (I[5] = d))
            : (d = I[5]),
            I[6] !== y
              ? ((c = y.formatMessage({ id: "codex.visualization.preview", defaultMessage: "Visualization preview" })),
                (I[6] = y),
                (I[7] = c))
              : (c = I[7]),
            I[8] !== y
              ? ((p = y.formatMessage({
                  id: "codex.visualization.previousPreview",
                  defaultMessage: "Previous visualization",
                })),
                (I[8] = y),
                (I[9] = p))
              : (p = I[9]),
            I[10] !== y
              ? ((f = y.formatMessage({ id: "codex.visualization.nextPreview", defaultMessage: "Next visualization" })),
                (I[10] = y),
                (I[11] = f))
              : (f = I[11]),
            I[12] !== t ? ((g = null == t ? void 0 : () => t.onPrevious?.()), (I[12] = t), (I[13] = g)) : (g = I[13]),
            I[14] !== t ? ((h = null == t ? void 0 : () => t.onNext?.()), (I[14] = t), (I[15] = h)) : (h = I[15]))
          let x = t?.onPrevious == null,
            w = t?.onNext == null
          return (
            I[16] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = (0, r.A)(
                  s.A.MarkdownRoot,
                  "m-auto w-full max-w-4/5 overflow-x-auto rounded-2xl border border-default bg-surface p-8 shadow-2xl",
                )),
                (I[16] = m))
              : (m = I[16]),
            I[17] !== n
              ? ((b = (0, a.jsx)("div", { className: m, children: n })), (I[17] = n), (I[18] = b))
              : (b = I[18]),
            I[19] !== u ||
            I[20] !== d ||
            I[21] !== b ||
            I[22] !== c ||
            I[23] !== p ||
            I[24] !== f ||
            I[25] !== g ||
            I[26] !== h ||
            I[27] !== x ||
            I[28] !== w
              ? ((v = (0, a.jsx)(o.C, {
                  disableOpenAnimation: !0,
                  showDownload: !1,
                  showZoomControls: !1,
                  closeAriaLabel: d,
                  dialogAriaLabel: c,
                  previousAriaLabel: p,
                  nextAriaLabel: f,
                  onPreviousImage: g,
                  onNextImage: h,
                  previousDisabled: x,
                  nextDisabled: w,
                  previewContent: b,
                  ...u,
                })),
                (I[19] = u),
                (I[20] = d),
                (I[21] = b),
                (I[22] = c),
                (I[23] = p),
                (I[24] = f),
                (I[25] = g),
                (I[26] = h),
                (I[27] = x),
                (I[28] = w),
                (I[29] = v))
              : (v = I[29]),
            v
          )
        },
      },
    )
  },
  aICB(e, t, n) {
    let a, i, r, l, o, s, u
    var d = n("Ipjf"),
      c = n("F6B1"),
      p = n("AVkf"),
      f = n("Nh13"),
      g = n("eac5"),
      h = n("vaO0"),
      m = n("DQmi")
    let b =
      ((a = null),
      (i = null),
      (r = null),
      (l = null),
      (o = () => {
        ;((a = null), (r = null), l?.(), (l = null), i?.dispose())
      }),
      (s = (e) => {
        r === e && ((r = null), u())
      }),
      (u = (e = !1) => {
        let t = a
        if (null == t || null != i || null != r || null != l) return
        let n = () => {
          if (a !== t || ((l = null), !t.container.isConnected)) return
          let e = new v(t.locale, (e) => {
            ;(s(e), i === e && ((i = null), a !== t || t.didRetryPreparation || ((t.didRetryPreparation = !0), u(!0))))
          })
          ;((i = e),
            e
              .prepare(t.container)
              .catch(() => {
                e.dispose()
              })
              .finally(() => s(e)))
        }
        if (e || null == window.requestIdleCallback || null == window.cancelIdleCallback) {
          let t = globalThis.setTimeout(n, 1e3 * !!e)
          l = () => globalThis.clearTimeout(t)
        } else {
          let e = window.requestIdleCallback(n, { timeout: 2e3 })
          l = () => window.cancelIdleCallback(e)
        }
      }),
      {
        start(e, t) {
          o()
          let n = { container: e, locale: t, didRetryPreparation: !1 }
          return (
            (a = n),
            u(),
            () => {
              a === n && o()
            }
          )
        },
        claim(e) {
          let t = i
          return null == t
            ? (u(), null)
            : t.locale !== e
              ? (t.dispose(), null)
              : ((i = null), t.isReady ? u() : (r = t), t)
        },
      })
    class v {
      locale
      onDispose
      element = document.createElement("webview")
      sandboxId = `${h.ex}${(0, f.D)(crypto.randomUUID())}`
      sourceUrl
      controller = new AbortController()
      api = null
      initialization = null
      handlers = null
      consumerSignal = null
      cacheState
      activated = !1
      disposed = !1
      constructor(e, t) {
        ;((this.locale = e),
          (this.onDispose = t),
          (this.sourceUrl = (0, m.UI)({ locale: e, scopeId: this.sandboxId, scheme: c.cS })),
          this.element.setAttribute("partition", (0, c.t$)(this.sandboxId)),
          this.element.addEventListener("render-process-gone", this.handleGuestExit),
          this.element.addEventListener("destroyed", this.handleGuestExit))
      }
      get isReady() {
        return null != this.api && !this.controller.signal.aborted
      }
      async prepare(e) {
        let t = (0, c.at)(this.sourceUrl)
        if (null == t) throw Error("Invalid visualization sandbox origin")
        ;((this.initialization = (0, p.DC)({
          hostApiHandlers: {
            callMcp: (e, t) => this.activeHandlers().callMcp(e, t),
            callTool: (e, t) => this.activeHandlers().callTool(e, t),
            notifyAppBlockMessage: (e) => this.handlers?.notifyAppBlockMessage?.(e),
            notifyBackgroundColor: (e) => this.handlers?.notifyBackgroundColor(e),
            notifyEnvironmentError: (e) => {
              null == this.handlers ? this.dispose() : this.handlers.notifyEnvironmentError(e)
            },
            notifyIntrinsicHeight: (e) => this.handlers?.notifyIntrinsicHeight(e),
            notifyIntrinsicWidth: (e) => this.handlers?.notifyIntrinsicWidth(e),
            notifyNavigation: (e) => this.handlers?.notifyNavigation(e),
            notifySecurityPolicyViolation: (e) => this.handlers?.notifySecurityPolicyViolation(e),
            openExternal: (e) => this.activeHandlers().openExternal(e),
            requestDisplayMode: (e) => this.activeHandlers().requestDisplayMode(e),
            sendFollowUpMessage: (e) => this.activeHandlers().sendFollowUpMessage(e),
            sendInstrument: (e) => this.handlers?.sendInstrument(e),
            updateWidgetState: (e, t) => this.handlers?.updateWidgetState(e, t),
          },
          onSkybridgeCacheState: (e) => {
            this.cacheState = e
          },
          origin: t,
          sandboxId: this.sandboxId,
          signal: this.controller.signal,
          sourceUrl: this.sourceUrl,
          webview: this.element,
        })),
          e.appendChild(this.element))
        let n = await this.initialization
        this.controller.signal.aborted || (this.api = n)
      }
      async activate({ hostApiHandlers: e, signal: t, onSkybridgeCacheState: n }) {
        if (null != this.consumerSignal || this.controller.signal.aborted || null == this.initialization)
          throw Error("Prepared visualization sandbox is unavailable")
        ;(t.aborted && (this.dispose(), t.throwIfAborted()),
          (this.consumerSignal = t),
          t.addEventListener("abort", this.dispose, { once: !0 }))
        try {
          let t =
            this.api ?? (await (0, g.M)((0, d._)(this.initialization, this.controller.signal), null, Date.now() + 1e4))
          if ((this.controller.signal.throwIfAborted(), null == t)) {
            let e = Error("Prepared visualization sandbox timed out")
            throw ((e.name = "TimeoutError"), e)
          }
          return ((this.activated = !0), (this.handlers = e), null != this.cacheState && n?.(this.cacheState), t)
        } catch (e) {
          throw (this.dispose(), e)
        }
      }
      dispose = () => {
        this.disposed ||
          ((this.disposed = !0),
          (this.handlers = null),
          this.activated &&
            null != this.api &&
            this.api.requestMcpAppsResourceTeardown({ timeoutMs: 500 }).catch(() => {}),
          (this.api = null),
          this.consumerSignal?.removeEventListener("abort", this.dispose),
          (this.consumerSignal = null),
          this.controller.abort(),
          this.element.removeEventListener("render-process-gone", this.handleGuestExit),
          this.element.removeEventListener("destroyed", this.handleGuestExit),
          this.element.remove(),
          this.element.destroy?.(),
          this.onDispose(this))
      }
      handleGuestExit = () => {
        this.activated || this.dispose()
      }
      activeHandlers() {
        if (null == this.handlers) throw Error("Visualization sandbox is not active")
        return this.handlers
      }
    }
    n.d(t, {}, { X: b })
  },
  DQmi(e, t, n) {
    var a = n("F6B1"),
      i = n("ASxG"),
      r = n("Nh13"),
      l = n("vaO0")
    n("o6lh")
    let o = i
      .aig()
      .nonnegative()
      .transform((e) => Math.min(Math.ceil(e), 1e4))
    function s({ environment: e, locale: t, scopeId: n, scheme: i }) {
      return (0, a.Qd)({
        environment:
          e ??
          ("chatgpt-staging.com" === window.location.hostname ||
          window.location.hostname.endsWith(".chatgpt-staging.com")
            ? "staging"
            : "production"),
        locale: t,
        scheme: i,
        subdomain: `codex-inline-visualization-${(0, r.D)(n)}`,
      })
    }
    async function* u({
      allowAnnotations: e = !1,
      appBlockMessenger: t,
      allowInteractions: a,
      canExpand: i,
      disableExternalNavigation: r = !1,
      downloadCapability: o,
      document: s,
      documentState: d,
      fragment: h,
      dataBindings: m,
      locale: b,
      lockDocumentOverflow: v,
      forwardWheel: I = !1,
      maxHeight: y,
      maxWidth: x,
      sandboxApi: w,
      signal: _,
      styles: A,
      styleVariables: E,
      widgetId: S = crypto.randomUUID(),
      widgetState: k = null,
      widgetStatePersistence: C = "none",
    }) {
      let z = p(),
        j = s?.csp ?? l.qD,
        M = {
          allowAnnotations: e,
          dashboard: "boolean" == typeof d?.dashboardEditMode,
          downloadCapability: o,
          dataBindings: m,
          initialGlobals: {
            statePersistence: C,
            stateModelContext: "none" === C ? "none" : "untrusted",
            visualizationStyleVariables: E,
            visualizationTheme: z,
          },
          lockDocumentOverflow: v,
          forwardWheel: I,
          styles: A,
        },
        O =
          null == s
            ? (await Promise.all([n.e(389665), n.e(413895)]).then(n.bind(n, "QZdn"))).getVisualizationSandboxHtml(h, M)
            : await s.buildHtml(h, M, b, d)
      if (!_.aborted)
        for await (let e of w.runWidgetCode({
          appBlockMessenger: t,
          csp: j,
          disableExternalNavigation: r,
          displayMode: "inline",
          expectReadySignal: s?.screenshotVegaPreview != null,
          features: l.TS,
          hostHandlesFollowUpMessageAuthorization: !0,
          html: O,
          isFirstParty: !1,
          isSidebarOpen: !1,
          isTombstone: !1,
          maxHeight: y,
          maxWidth: x,
          measureWidth: !1,
          mcpApps: {
            hostCapabilities: a ? { openLinks: {}, message: {}, sandbox: { csp: j } } : { sandbox: { csp: j } },
            hostContext: c(x, b, z, y, i, "inline"),
            hostInfo: { name: "chatgpt" },
          },
          safeArea: f(),
          screenshotVegaPreview: s?.screenshotVegaPreview,
          theme: z,
          toolInput: null,
          toolOutput: null,
          toolResponseMetadata: null,
          userAgent: g(),
          viewParams: null,
          widgetId: S,
          widgetState: k,
        })) {
          if (_.aborted) return
          yield e
        }
    }
    async function d({
      canExpand: e,
      contentWidth: t,
      displayMode: n,
      locale: a,
      maxHeight: i,
      sandboxApi: r,
      styleVariables: l,
      theme: o,
    }) {
      await Promise.all([
        r.setTheme({ theme: o }),
        r.setAdditionalGlobals({
          additionalGlobals: {
            displayMode: n,
            maxHeight: i,
            maxWidth: t,
            visualizationStyleVariables: l,
            visualizationTheme: o,
          },
        }),
        r.notifyMcpAppsHostContext({ hostContext: c(t, a, o, i, e, n) }),
      ])
    }
    function c(e, t, n, a, i, r) {
      return {
        availableDisplayModes: i ? ["inline", "fullscreen"] : ["inline"],
        containerDimensions: { maxHeight: a, maxWidth: e },
        deviceCapabilities: g().capabilities,
        displayMode: r,
        locale: t,
        platform: "desktop",
        safeAreaInsets: f().insets,
        theme: n,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        userAgent: "chatgpt",
      }
    }
    function p() {
      return "dark" === document.documentElement.dataset.theme ? "dark" : "light"
    }
    function f() {
      return { insets: { bottom: 0, left: 0, right: 0, top: 0 } }
    }
    function g() {
      let e
      return {
        capabilities: {
          hover:
            window.matchMedia?.("(any-hover: hover)")?.matches || window.matchMedia?.("(hover: hover)")?.matches || !1,
          touch:
            window.matchMedia?.("(any-pointer: coarse)")?.matches ||
            window.matchMedia?.("(pointer: coarse)")?.matches ||
            !1,
        },
        device: {
          os: (e = window.navigator.platform.toLowerCase()).includes("mac")
            ? "macos"
            : e.includes("win")
              ? "windows"
              : "unknown",
          platform: "native",
          type: "desktop",
        },
      }
    }
    n.d(t, { I9: () => d, Mk: () => p, NI: () => 10, UI: () => s, bN: () => u, dn: () => o, uT: () => 240 })
  },
  o6lh(e, t, n) {
    let a = { "--visualize-paint-gutter": "5px" },
      i = { dark: "#83c3ff", light: "#339cff" },
      r = `var(--vscode-charts-blue, light-dark(${i.light}, ${i.dark}))`,
      l = ["#f59a56", "#74d58b", "#f08fc0", "#aa91ef", "#5acbc2"],
      o = [
        "var(--color-text-info)",
        ...["#f3883b", "#5dc977", "#eb77b1", "#9b79ec", "#3ab9b1"].map((e, t) => `light-dark(${e}, ${l[t]})`),
      ],
      s = {
        dark: ["#f08fc0", "#6aa3ff", "#74d58b", "#f59a55", "#f5d45f", "#59cbc2", "#aa91ef", "#63c7e5"],
        light: ["#e879b0", "#4f8df7", "#62c87a", "#f08a42", "#f2c94c", "#43b8b0", "#9a7be8", "#4fbad9"],
      },
      u = "light-dark(rgb(255 255 255), rgb(24 24 24))"
    function d(e, t, n, a, i) {
      let r = e.getPropertyValue(n).trim()
      if (0 === r.length) return i
      t.style[a] = `var(${n})`
      let l = getComputedStyle(t)[a].trim()
      return l.length > 0 && l !== `var(${n})` && !l.includes("var(") ? l : r.includes("var(") ? i : r
    }
    function c(e) {
      let t = (e) => (e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4),
        n = t(Number.parseInt(e.slice(1, 3), 16) / 255),
        a = t(Number.parseInt(e.slice(3, 5), 16) / 255),
        i = t(Number.parseInt(e.slice(5, 7), 16) / 255),
        r = Math.cbrt(0.4122214708 * n + 0.5363325363 * a + 0.0514459929 * i),
        l = Math.cbrt(0.2119034982 * n + 0.6806995451 * a + 0.1073969566 * i),
        o = Math.cbrt(0.0883024619 * n + 0.2817188376 * a + 0.6299787005 * i),
        s = 1.9779984951 * r - 2.428592205 * l + 0.4505937099 * o,
        u = 0.0259040371 * r + 0.7827717662 * l - 0.808675766 * o
      return {
        chroma: Math.hypot(s, u),
        hue: ((180 * Math.atan2(u, s)) / Math.PI + 360) % 360,
        lightness: 0.2104542553 * r + 0.793617785 * l - 0.0040720468 * o,
      }
    }
    function p({ chroma: e, hue: t, lightness: n }) {
      let a = (t * Math.PI) / 180,
        i = e * Math.cos(a),
        r = e * Math.sin(a),
        l = (n + 0.3963377774 * i + 0.2158037573 * r) ** 3,
        o = (n - 0.1055613458 * i - 0.0638541728 * r) ** 3,
        s = (n - 0.0894841775 * i - 1.291485548 * r) ** 3,
        u = (e) => (e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055)
      return [
        u(4.0767416621 * l - 3.3077115913 * o + 0.2309699292 * s),
        u(-1.2684380046 * l + 2.6097574011 * o - 0.3413193965 * s),
        u(-0.0041960863 * l - 0.7034186147 * o + 1.707614701 * s),
      ]
    }
    function f(e, t) {
      return Math.min(Math.abs(e - t), 360 - Math.abs(e - t))
    }
    function g(e, t, n) {
      return Math.max(t, Math.min(n, e))
    }
    n.d(
      t,
      {},
      {
        Kj: o,
        SH: u,
        r8: function ({
          backgroundColorToken: e = "--color-surface",
          includeReviewColors: t = !1,
          includeViewerPanelColors: n = !1,
          pageHeaderDensity: r,
          variant: l = "inline",
        } = {}) {
          let o = getComputedStyle(document.documentElement),
            h = "dark" === document.documentElement.dataset.theme ? "dark" : "light",
            m = document.createElement("div")
          ;((m.style.display = "none"), m.setAttribute("aria-hidden", "true"), document.body.appendChild(m))
          try {
            let b,
              v,
              I,
              y,
              x,
              w,
              _,
              A,
              E,
              S,
              k,
              C,
              z,
              j,
              M,
              O,
              N,
              R,
              P,
              T,
              D,
              L,
              U,
              V,
              F,
              $,
              B,
              W,
              G,
              H,
              q,
              J,
              Y,
              X,
              Z,
              K,
              Q,
              ee,
              et,
              en,
              ea,
              ei,
              er,
              el,
              eo,
              es,
              eu,
              ed,
              ec,
              ep,
              ef,
              eg = d(o, m, "--text-base", "fontSize", "14px"),
              eh = d(o, m, "--codex-chat-font-size", "fontSize", eg),
              em = d(o, m, "--text-sm", "fontSize", "14px"),
              eb = d(o, m, "--text-sm--line-height", "lineHeight", "20px"),
              ev =
                ((b = "--color-surface-elevated-secondary"),
                (v = "light-dark(rgb(255 255 255), rgb(45 45 45))"),
                d(o, m, b, "backgroundColor", v)),
              eI = ((I = "--color-text"), (y = "light-dark(rgb(26 28 31), rgb(255 255 255))"), d(o, m, I, "color", y)),
              ey =
                ((x = "--codex-theme-accent-text"),
                (w = "light-dark(rgb(51 156 255), rgb(131 195 255))"),
                d(o, m, x, "color", w)),
              ex = (function (e, t) {
                let n = (function (e) {
                    let t = e.trim().match(/^#([\da-f]{6})(?:[\da-f]{2})?$/i)?.[1]
                    if (null != t) return `#${t.toLowerCase()}`
                    let n = e.trim().match(/^rgba?\((.*)\)$/i)?.[1],
                      a = e.trim().match(/^color\(\s*srgb\s+(.*)\)$/i)?.[1],
                      i = (n ?? a)
                        ?.split("/")[0]
                        ?.trim()
                        .split(/[,\s]+/)
                        .filter(Boolean)
                        .slice(0, 3)
                        .map(Number)
                    if (i?.length !== 3 || i.some(Number.isNaN)) return null
                    let r = null == a ? 1 : 255
                    return `#${i
                      .map((e) =>
                        Math.round(g(e * r, 0, 255))
                          .toString(16)
                          .padStart(2, "0"),
                      )
                      .join("")}`
                  })(e),
                  a = c(n ?? i[t]),
                  r = 0.96 + 0.12 * g((a.chroma - 0.06) / 0.16, 0, 1),
                  l = s[t].map(c).map((e) => ({ ...e, chroma: e.chroma * r })),
                  o = l.reduce((e, t) => (f(t.hue, a.hue) < f(e.hue, a.hue) ? t : e))
                function u(r) {
                  let s = l[r]
                  return a.chroma >= 0.04 && s === o && f(s.hue, a.hue) < f(a.hue, 25)
                    ? null == n
                      ? i[t]
                      : e
                    : (function (e) {
                        let t = { ...e }
                        for (; !p(t).every((e) => e >= -1e-4 && e <= 1.0001) && t.chroma > 0.005;) t.chroma *= 0.96
                        return `#${p(t)
                          .map((e) =>
                            Math.round(255 * g(e, 0, 1))
                              .toString(16)
                              .padStart(2, "0"),
                          )
                          .join("")}`
                      })(s)
                }
                return {
                  "--viz-series-1": u(1),
                  "--viz-series-2": u(3),
                  "--viz-series-3": u(2),
                  "--viz-series-4": u(0),
                  "--viz-series-5": u(6),
                  "--viz-series-6": u(5),
                }
              })(ey, h),
              ew = d(o, m, "--radius-lg", "borderRadius", "10px")
            return {
              ...(null != r && {
                "--page-header-clearance":
                  ((ef = "compact" === r ? "--viewer-header-height-compact" : "--viewer-header-height"),
                  d(o, m, ef, "paddingInlineStart", "0px")),
              }),
              ...(n && {
                "--color-background-viewer-control":
                  ((_ = "--color-background-viewer-control"), (A = ev), d(o, m, _, "backgroundColor", A)),
                "--color-surface-elevated":
                  ((E = "--color-surface-elevated"), (S = ev), d(o, m, E, "backgroundColor", S)),
                "--color-text-secondary": ((k = "--color-text-secondary"), (C = eI), d(o, m, k, "color", C)),
              }),
              ...(t && {
                "--color-background-info-solid":
                  ((z = "--color-background-info-solid"), (j = "#339cff"), d(o, m, z, "backgroundColor", j)),
                "--color-text-info": ((M = "--color-text-info"), (O = "#339cff"), d(o, m, M, "color", O)),
              }),
              "--accent":
                ((N = "--codex-theme-accent-background-subtle"),
                (R = "light-dark(rgb(229 242 255), rgb(13 39 63))"),
                d(o, m, N, "backgroundColor", R)),
              "--accent-foreground": ey,
              "--background": "live" === l ? ev : ((P = e), (T = u), d(o, m, P, "backgroundColor", T)),
              "--border":
                ((D = "--color-border"),
                (L = "light-dark(rgb(26 28 31 / 8%), rgb(255 255 255 / 8.2%))"),
                d(o, m, D, "color", L)),
              "--border-strong":
                ((U = "--color-border-strong"),
                (V = "light-dark(rgb(26 28 31 / 12%), rgb(255 255 255 / 12%))"),
                d(o, m, U, "color", V)),
              "--card": `color-mix(in oklab, ${eI} 5%, transparent)`,
              "--card-foreground": eI,
              "--corner-shape": o.getPropertyValue("--codex-corner-shape").trim() || "round",
              "--control-spacing": d(o, m, "--spacing-button-toolbar-inline", "paddingInlineStart", "12px"),
              "--cursor-interaction":
                getComputedStyle(document.body).getPropertyValue("--cursor-interaction").trim() || "default",
              "--destructive":
                ((F = "--color-text-warning"),
                ($ = "light-dark(rgb(226 85 7), rgb(255 133 73))"),
                d(o, m, F, "color", $)),
              "--font-mono": d(
                o,
                m,
                "--font-mono",
                "fontFamily",
                'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
              ),
              "--font-sans": d(o, m, "--font-sans", "fontFamily", '-apple-system, system-ui, "Segoe UI", sans-serif'),
              "--font-size-base": "live" === l ? em : eh,
              "--font-weight-normal": "live" === l ? "400" : d(o, m, "--font-ui-weight", "fontWeight", "400"),
              ...("live" === l && {
                "--font-line-height-base": eb,
                "--font-size-small": `max(11px, ${d(o, m, "--text-xs", "fontSize", "12px")})`,
                "--icon-size": "18px",
              }),
              "--foreground": eI,
              "--input":
                ((B = "--color-border-primary-outline"),
                (W = "light-dark(rgb(26 28 31 / 11.8%), color-mix(in oklab, rgb(0 0 0) 10%, transparent))"),
                d(o, m, B, "color", W)),
              "--muted": `color-mix(in srgb, ${eI} 10%, transparent)`,
              "--muted-foreground":
                ((G = "--color-codex-description"),
                (H = "light-dark(rgb(26 28 31 / 49.4%), rgb(255 255 255 / 49.8%))"),
                d(o, m, G, "color", H)),
              "--popover": ev,
              "--popover-foreground": ((q = "--color-text"), (J = eI), d(o, m, q, "color", J)),
              "--primary": ey,
              "--primary-foreground":
                ((Y = "--color-text-inverse"),
                (X = "light-dark(rgb(255 255 255), rgb(13 13 13))"),
                d(o, m, Y, "color", X)),
              "--radius": ew,
              "--radius-2xl": d(o, m, "--radius-2xl", "borderRadius", "16px"),
              "--radius-lg": ew,
              "--radius-md": d(o, m, "--radius-md", "borderRadius", "8px"),
              "--radius-sm": d(o, m, "--radius-sm", "borderRadius", "6px"),
              "--ring":
                ((Z = "--color-ring"),
                (K = "light-dark(rgb(51 156 255), rgb(131 195 255 / 76%))"),
                d(o, m, Z, "color", K)),
              "--secondary":
                ((Q = "--color-background-primary-soft-alpha"),
                (ee = "light-dark(rgb(243 243 243), rgb(48 48 48))"),
                d(o, m, Q, "backgroundColor", ee)),
              "--secondary-foreground": eI,
              "--blue":
                ((et = "--color-chart-blue"),
                (en = "light-dark(rgb(51 156 255), rgb(51 156 255))"),
                d(o, m, et, "color", en)),
              "--orange":
                ((ea = "--color-chart-orange"),
                (ei = "light-dark(rgb(226 85 7), rgb(251 106 34))"),
                d(o, m, ea, "color", ei)),
              "--green":
                ((er = "--color-chart-green"),
                (el = "light-dark(rgb(0 162 64), rgb(64 201 119))"),
                d(o, m, er, "color", el)),
              "--red":
                ((eo = "--color-chart-red"),
                (es = "light-dark(rgb(224 46 42), rgb(255 103 100))"),
                d(o, m, eo, "color", es)),
              "--purple":
                ((eu = "--color-chart-purple"),
                (ed = "light-dark(rgb(146 79 247), rgb(173 123 249))"),
                d(o, m, eu, "color", ed)),
              "--yellow":
                ((ec = "--color-chart-yellow"),
                (ep = "light-dark(rgb(255 195 0), rgb(255 210 64))"),
                d(o, m, ec, "color", ep)),
              ...a,
              ...ex,
            }
          } finally {
            m.remove()
          }
        },
        sh: r,
      },
    )
  },
  Fsq8(e, t, n) {
    n.d(
      t,
      {},
      {
        I: function (e) {
          return e
        },
      },
    )
  },
}
//# sourceMappingURL=35702.351118868f.js.map
