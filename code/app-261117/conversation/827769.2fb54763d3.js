export const __rspack_esm_ids = [827769]
export const __webpack_modules__ = {
  p6sx: function (e, t, r) {
    var n = r("mfKi"),
      a = r("SPnB"),
      s = r("yGJW"),
      o = r("Sx7O")
    let i = {
      viewed: n.CodexPluginsAppSurfaceAction.CODEX_PLUGINS_APP_SURFACE_ACTION_GLOBAL_ENTRYPOINT_VIEWED,
      selected: n.CodexPluginsAppSurfaceAction.CODEX_PLUGINS_APP_SURFACE_ACTION_WORKBENCH_SURFACE_SELECTED,
      handoff_requested: n.CodexPluginsAppSurfaceAction.CODEX_PLUGINS_APP_SURFACE_ACTION_WORKSTREAM_HANDOFF_REQUESTED,
    }
    r.d(
      t,
      {},
      {
        f: function (e, t, r, l, d) {
          let c = e.get(a.chatGptAuthenticatedAccountId$),
            u = e.get(a.chatGptAuthenticatedUserId$)
          e.get(a.cj) &&
            e.get(o.AQ) === t &&
            null != c &&
            null != u &&
            (0, s.yy)(
              e,
              n.CodexPluginsAppSurfaceInteraction,
              {
                pluginId: r,
                surfaceKind:
                  "viewed" === l
                    ? n.CodexPluginsAppSurfaceKind.CODEX_PLUGINS_APP_SURFACE_KIND_GLOBAL_HOME
                    : n.CodexPluginsAppSurfaceKind.CODEX_PLUGINS_APP_SURFACE_KIND_WORKBENCH,
                action: i[l],
                elementId: d,
              },
              void 0,
              void 0,
              { expectedUserId: u, expectedAccountId: c },
            )
        },
      },
    )
  },
  VVOG: function (e, t, r) {
    var n = r("qmMi"),
      a = r("DBCl"),
      s = r("ASxG"),
      o = r("rljs"),
      i = r("TKlY"),
      l = r("nlNF"),
      d = r("Wv1R"),
      c = r("e1xH"),
      u = r("B81s"),
      p = r("OWtl"),
      h = r("kpIY"),
      g = r("Nwp9"),
      m = r("ib9U"),
      f = r("NR6L"),
      I = r("Sx7O")
    let w = s.Ikc({
        name: s.YjP().trim().min(1).max(200),
        sourceRef: s.YjP().startsWith("refs/heads/").max(256),
        existingBranch: s.zMY().default(!0),
        instructions: s.YjP().max(16e3),
      }),
      k = s.Ikc({
        workstreamId: s.YjP().regex(/^[A-Za-z0-9_-]{1,256}$/),
        snapshotId: s.YjP().regex(/^[A-Za-z0-9_-]{1,256}$/),
        sourceRef: s.YjP().startsWith("refs/heads/").max(256),
        commitSha: s.YjP().regex(/^(?:[a-f0-9]{40}|[a-f0-9]{64})$/),
        name: s.YjP().min(1).max(200),
      }),
      _ = s.Ikc({
        projectId: s.YjP().regex(/^[A-Za-z0-9_-]{1,256}$/),
        expectedUserId: s.YjP().min(1).max(256),
        requestId: s.uRe(),
        prompt: s.YjP().trim().min(1).max(16e3),
        source: k.optional(),
      }),
      y = s.Ikc({
        id: s.YjP(),
        context: I.kT,
        userId: s.YjP(),
        workstreamId: s.YjP(),
        pageIdentity: s.YjP().optional(),
        draftWorkspaceResourceId: s.YjP().optional(),
        checkoutPath: s.YjP(),
        prompt: s.YjP(),
        pullRequestAction: s
          .gMt("kind", [
            s.Ikc({ kind: s.euz("publish") }),
            s.Ikc({ kind: s.euz("merge"), number: s.aig().int().positive().nullable() }),
          ])
          .optional(),
        managedShareSnapshotId: s.YjP().optional(),
        model: s.YjP().optional(),
        thinking: s.YjP().optional(),
        serviceTier: s.YjP().nullable().optional(),
        setup: w.optional(),
        source: k.optional(),
        branchReservationStarted: s.zMY().optional(),
        branchReserved: s.zMY().optional(),
        generatedTitle: s.YjP().nullable().optional(),
        initialPageSummaryOwner: s.YjP().optional(),
        initialPageSummary: s.YjP().max(2e3).nullable().optional(),
        initialPageSummaryHandled: s.zMY().optional(),
        linkedWorkstreamId: s.YjP().optional(),
        dispatching: s.zMY().optional(),
        queued: s
          .Ikc({
            clientThreadId: s.YjP().transform((e) => {
              if (!(0, a.L$F)(e)) throw Error("Invalid pending chat identity.")
              return e
            }),
            pendingWorktreeId: s.YjP(),
            branchName: s.YjP().nullable(),
            adoptedDraft: s.euz(!0).optional(),
          })
          .optional(),
        threadId: s.YjP().transform(a.JXB).optional(),
        sendStarted: s.zMY().optional(),
        sendError: s.YjP().optional(),
        finished: s.zMY().optional(),
        cancelled: s.zMY().optional(),
      }),
      v = s.YOg(y)
    function j(e) {
      return null != e.pageIdentity || null != e.draftWorkspaceResourceId || null != e.initialPageSummaryOwner
    }
    function S(e, t) {
      return (
        null != t &&
        (null == e.pageIdentity || e.pageIdentity === t) &&
        (null == e.initialPageSummaryOwner || e.initialPageSummaryOwner === t) &&
        (null == e.draftWorkspaceResourceId ||
          e.draftWorkspaceResourceId === (0, I.WU)(e.context, e.userId, e.workstreamId, t))
      )
    }
    let b = (0, g.m3)("presence-native-operations-v1", v.parse([]), { coerceStoredValue: (e) => v.parse(e) }),
      P = (0, n.bD)(p.u, (e) => null),
      x = (0, n.i1)(p.u, (e, { get: t }) => {
        let r = t(I.Bm, e).data?.project,
          n = t(I.vo),
          a = r?.workstream_pages_enabled === !0 && "disabled" !== t(c.GU),
          o = t(I.O_),
          i = t(b),
          l = (e) => null == r || (a && e !== r.default_workstream_id)
        return {
          pageIdentity: n,
          requiresMember: l,
          recoveryKey(t, r) {
            return null == n ? this.lookup(t, r).key : (0, I.WU)(e, t, r, n)
          },
          owns: (e) => (j(e) ? S(e, n) : !l(e.workstreamId)),
          lookup(t, a) {
            let d = (0, I.eJ)(e, t, a),
              c = o[d],
              u = null == n ? null : (0, I.WU)(e, t, a, n)
            if (a === r?.default_workstream_id) return { key: d, threadId: c?.threadId ?? null }
            let p = null == u ? null : o[u]
            if (p?.threadId != null) return { key: u, threadId: p.threadId }
            if (c?.threadId == null) return { key: l(a) ? u : d, threadId: null }
            let g = (0, h.TB)(`presence-workstream-page-presented-v1:${d}`),
              m = "string" == typeof g ? g : s.Ikc({ identity: s.YjP() }).safeParse(g).data?.identity,
              f = i.filter(
                (e) =>
                  !e.cancelled &&
                  j(e) &&
                  (e.threadId === c.threadId || e.queued?.clientThreadId === c.threadId) &&
                  (0, I.eJ)(e.context, e.userId, e.linkedWorkstreamId ?? e.workstreamId) === d,
              )
            if (!(l(a) || c?.pageIdentity != null || null != m || f.length > 0))
              return { key: d, threadId: c?.threadId ?? null }
            let w =
              (c?.pageIdentity != null || f.length > 0) &&
              (c?.pageIdentity == null || c.pageIdentity === n) &&
              (null == m || m === n) &&
              f.every((e) => S(e, n))
            return { key: u, threadId: null != u && w ? (c?.threadId ?? null) : null }
          },
        }
      }),
      M = (0, n.bD)(p.u, (e) => null),
      R = (0, n.bD)(p.u, (e) => null),
      T = (0, n.i1)(p.u, (e, { get: t }) => {
        let r = t(R, e),
          n = t(l.x2),
          a = I.kT.safeParse(n?.state?.presence).data,
          s = new URLSearchParams(n?.search)
        return null == r ||
          r.accountKey !== t(I.AQ) ||
          a?.accountKey !== r.accountKey ||
          (0, m.TN)(a) !== e ||
          a.projectId !== r.projectId ||
          "new" !== s.get("presenceStart") ||
          s.get("presenceDraft") !== r.requestId ||
          t(I.Bm, a).data?.user_id !== r.expectedUserId
          ? null
          : r
      }),
      E = (0, n.bD)(p.u, (e) => null),
      C = (0, n.i1)(
        p.u,
        (e, { get: t }) => {
          if (e.accountKey !== t(I.AQ)) return
          let r = (0, m.ep)(e),
            n = t(i.O, { hostId: e.hostId, pluginId: r })
          if (!1 === n) return !1
          if (null == n || "connected" !== t(o.y2, e.hostId) || null == t(f.u, e)) return
          let { data: a, isSuccess: s, isFetching: l } = t(u.lt, e.hostId)
          if (!s || null == a) return
          let c = t(d.L0, e.hostId).filter((t) => t.pluginId === r && t.hostId === e.hostId),
            p = c.length > 0 && !l
          for (let e of c) {
            let t = a.data.find((t) => t.name === e.server && t.pluginId === r)
            if (null == t || null != t.toolsError || (null != a.coverage && !a.coverage.includes(e.server))) {
              p = !1
              continue
            }
            if (
              Object.values(t.tools).some((e) => e?.name === "presence.workstreams.notes.get") &&
              Object.values(t.tools).some((e) => e?.name === "presence.workstreams.notes.bind") &&
              Object.values(t.tools).some((e) => e?.name === "presence.workstreams.notes.ensure")
            )
              return !0
          }
          return !p && void 0
        },
        { key: (e) => JSON.stringify([e.accountKey, (0, m.TN)(e)]) },
      ),
      A = (0, n.i1)(p.u, (e, { get: t }) => {
        let r = t(I.Bm, e).data?.project
        if (null != r && (!0 !== r.workstream_pages_enabled || 2 !== r.workstream_pages_version)) return !1
        let n = t(c.GU)
        return "disabled" !== n && (null == r || "loading" === n ? void 0 : t(C, e))
      }),
      q = (0, n.i1)(p.u, (e, { get: t }) => {
        if (e.locationKey !== t(l.x2)?.key) return !1
        let r = t(O, (0, m.TN)(e.context))
        if (
          t(I.AQ) !== e.context.accountKey ||
          r.projectId !== e.context.projectId ||
          r.projectLoading ||
          null != r.workstreamId ||
          null != r.page
        )
          return !1
        let n = t(m.Q_, e.context)
        if (!0 !== n) return n
        let a = t(I.Bm, e.context)
        return (
          null == a.error &&
          a.data?.user_id === e.userId &&
          a.data.project.id === r.projectId &&
          a.data.project.permissions.includes("sonata.project.snapshots.view")
        )
      }),
      U = (0, n.bD)(p.u, (e) => 0),
      O = (0, n.i1)(p.u, (e, { get: t }) => {
        let r = t(l.x2),
          n = I.kT.safeParse(r?.state?.presence).data,
          a = t(I.AQ)
        if (null == n || (0, m.TN)(n) !== e || n.accountKey !== a)
          return { projectId: null, workstreamId: null, submission: null, nativeStage: null }
        let o = new URLSearchParams(r?.search),
          i = s
            .k5n(["live-agent", "deployments", "settings", "qa", "simulations"])
            .safeParse(o.get("presencePage")).data,
          d = null == i ? o.get("presenceStart") : null,
          c = t(I.Bm, n).data,
          u = c?.user_id
        if (d?.startsWith("checkout:")) {
          let r = t(P, e)
          ;(r?.route !== d ||
            r.userId !== u ||
            r.pageIdentity !== t(I.vo) ||
            r.context.accountKey !== a ||
            r.context.projectId !== n.projectId) &&
            (d = null)
        }
        let p = t(b).findLast(
          (r) =>
            !r.finished &&
            "" !== r.prompt &&
            r.context.accountKey === a &&
            (0, m.TN)(r.context) === e &&
            r.context.projectId === n.projectId &&
            r.userId === u &&
            r.workstreamId === d &&
            t(x, n).owns(r),
        )
        return {
          ...(null != d &&
          r?.state?.presenceWorkstreamChatStart === d &&
          null != u &&
          t(A, n) &&
          (null != p || null == t(x, n).lookup(u, d).threadId)
            ? { workstreamChatStart: !0 }
            : {}),
          setupReturnRevision: t(U, n) || void 0,
          projectId: n.projectId,
          page: i,
          qa:
            "qa" === i
              ? {
                  roundId: o.get("qaRound") ?? void 0,
                  caseId: o.get("qaCase") ?? void 0,
                  create: "true" === o.get("qaCreate"),
                  tab: s.k5n(["test-cases", "findings"]).safeParse(o.get("qaTab")).data,
                }
              : void 0,
          workstreamId: d,
          submission:
            null == p
              ? null
              : { id: p.id, projectId: n.projectId, workstreamId: p.workstreamId, userId: p.userId, prompt: p.prompt },
          nativeStage: t(E, e),
        }
      }),
      W = (0, n.i1)(p.u, (e, { get: t }) => {
        let r = t(O, e)
        if (null == r.projectId || null == r.workstreamId) return null
        let n = I.kT.safeParse(t(l.x2)?.state?.presence).data
        if (null == n || (0, m.TN)(n) !== e) return null
        let a = t(I.Bm, n).data?.user_id
        return null == a ? null : t(x, n).lookup(a, r.workstreamId).threadId
      })
    r.d(
      t,
      {},
      {
        CY: w,
        JG: j,
        My: A,
        P$: function (e) {
          let t = e.filter((e) => e.finished),
            r = new Set(
              t
                .filter(
                  (e) =>
                    !e.cancelled &&
                    null != e.initialPageSummaryOwner &&
                    void 0 !== e.initialPageSummary &&
                    !e.initialPageSummaryHandled,
                )
                .slice(-32),
            )
          return t.filter((e, n) => n >= t.length - 32 || r.has(e))
        },
        QW: M,
        Rz: b,
        TT: C,
        Uw: P,
        _V: U,
        _g: x,
        _n: k,
        hy: E,
        iX: q,
        nz: W,
        p4: _,
        ul: O,
        uy: function (e, t, r, n) {
          let a = e.get(x, t),
            { key: s, threadId: o } = a.lookup(r, n)
          if (null != s && null != o && e.get(I.O_)[s]?.threadId == null) {
            let i = (0, I.eJ)(t, r, n)
            e.set(I.O_, (e) => ({ ...e, [i]: { threadId: o, pageIdentity: a.pageIdentity }, [s]: { threadId: o } }))
          }
          return o
        },
        w9: R,
        wU: T,
      },
    )
  },
  ieM0: function (e, t, r) {
    var n = r("qmMi"),
      a = r("DBCl"),
      s = r("ASxG"),
      o = r("svjy"),
      i = r("nlNF"),
      l = r("Wv1R"),
      d = r("OWtl"),
      c = r("VVOG"),
      u = r("ib9U"),
      p = r("Sx7O"),
      h = r("w6GR")
    let g = (0, n.bD)(d.u, (e) => null),
      m = p.hh.extend({ bootstrap_ready: s.zMY() })
    async function f(e, { context: t, userId: r }) {
      let n = m.parse(
        await (0, p.qz)(e, t, "presence.configuration.get", { project_id: t.projectId, expected_user_id: r }),
      )
      if (n.user_id !== r || n.project_id !== t.projectId)
        throw Error("Presence project or account changed. Reopen the project.")
      return n.bootstrap_ready ? n.checkout_path : null
    }
    function I(e, t) {
      return e.find(
        (e) =>
          "global" === e.entrypoint.type &&
          e.pluginId === (0, u.ep)(t) &&
          e.serverTools.some((e) => "presence.projects.checkout.connect" === e.name),
      )
    }
    r.d(
      t,
      {},
      {
        Q2: async function (e, { context: t, userId: r, workstreamId: n }, s, d, g, m, w) {
          let k = s.change ? null : s.savedPath,
            _ = e.get(c._g, t).pageIdentity,
            y = () => g() && e.get(c._g, t).pageIdentity === _
          if (!y()) return null
          let v = (0, h.dC)(e, t, r, n)
          if (null != v) return v
          let j = I(e.get(l.uC, t.hostId), t)
          if (null != j) {
            let o = { context: t, userId: r, workstreamId: n }
            if (((k = s.change ? null : await f(e, o)), !y())) return null
            if (null == k) {
              let r = `checkout:${crypto.randomUUID()}`
              return (
                e.set(c.Uw, (0, u.TN)(t), { ...o, pageIdentity: _, route: r, pullRequestIntentId: w }),
                m(
                  {
                    pathname: (0, a.CZl)(j.server, j.tool.name),
                    search: new URLSearchParams({ hostId: t.hostId, presenceStart: r }).toString(),
                  },
                  { state: { ...e.get(i.x2)?.state, sidebarArea: "presence", presence: t } },
                ),
                null
              )
            }
          }
          if (null == j && null != w && null == k) {
            let n = p.hh.parse(
              await (0, p.qz)(e, t, "presence.projects.checkout.get", { project_id: t.projectId, expected_user_id: r }),
            )
            if (!y()) return null
            if (n.user_id !== r || n.project_id !== t.projectId)
              throw Error("Presence project or account changed. Reopen the project.")
            k = n.checkout_path
          }
          if (null == k) {
            if (null == (k = await d()) || !y()) return null
            let n = p.hh.parse(
              await (0, p.qz)(e, t, "presence.projects.checkout.set", {
                project_id: t.projectId,
                expected_user_id: r,
                checkout_path: k,
              }),
            )
            if (!y()) return null
            if (n.user_id !== r || n.project_id !== t.projectId || null == n.checkout_path)
              throw Error(
                e
                  .get(o.g)
                  .formatMessage({
                    id: "presence.saveCheckoutFailed",
                    defaultMessage: "Presence could not save this project's working directory",
                    description:
                      "Error when a Presence checkout save returns a different project or user, or no directory",
                  }),
              )
            ;(e.query.setData(p.kH, t, n), (k = n.checkout_path))
          }
          return y() ? (0, h._8)(e, t, r, n, k) : null
        },
        Vm: function (e, { context: t, userId: r, workstreamId: n }, a) {
          let s = e.get(c._g, t),
            o = s.recoveryKey(r, n)
          if (null == o) return
          let i = e
            .get(c.Rz)
            .findLast(
              (e) => !e.finished && s.owns(e) && (0, p.eJ)(e.context, e.userId, e.workstreamId) === (0, p.eJ)(t, r, n),
            )
          e.set(g, o, {
            message: a instanceof Error ? a.message : String(a),
            canChangeCheckout: null != i && !i.dispatching && null == i.queued && null == i.threadId && !i.sendStarted,
          })
        },
        Xc: g,
        b4: async function (e, t, r, n) {
          let a = e.get(c.Uw, t),
            s = e.get(i.x2)?.key
          if ((await n, null == a || a.context.projectId !== r)) return null
          let { context: o, userId: l, workstreamId: d, route: u } = a,
            g = () =>
              e.get(c.Uw, t) === a &&
              e.get(i.x2)?.key === s &&
              e.get(c.ul, t).workstreamId === u &&
              e.get(c.ul, t).projectId === r &&
              e.get(p.AQ) === o.accountKey &&
              e.get(p.Bm, o).data?.user_id === l &&
              null == e.get(p.nW, o)
          if (!g()) return null
          let m = (0, h.dC)(e, o, l, d)
          if (null != m) return (e.set(c.Uw, t, null), { threadId: m, pullRequestIntentId: a.pullRequestIntentId })
          let I = await f(e, a)
          if (!g()) return null
          if (null == I) throw Error("Reconnect the checkout to open this workstream.")
          let w = await (0, h._8)(e, o, l, d, I)
          return g() ? (e.set(c.Uw, t, null), { threadId: w, pullRequestIntentId: a.pullRequestIntentId }) : null
        },
        c5: I,
      },
    )
  },
  Vihu: function (e, t, r) {
    var n = r("l0kR"),
      a = r("rbzn"),
      s = r("qmMi"),
      o = r("DBCl"),
      i = r("Qgfj"),
      l = r("ASxG"),
      d = r("Wbxh"),
      c = r("svjy"),
      u = r("cLdu"),
      p = r("SIT2"),
      h = r("OWtl"),
      g = r("ndjw"),
      m = r("FHI1"),
      f = r("earQ"),
      I = r("Nwp9"),
      w = r("ib9U"),
      k = r("Sx7O")
    let _ = l.g1P(l.YjP(), l.YjP().transform(o.Np8)),
      y = (0, I.m3)("presence-codex-projects-v1", _.parse({}), { coerceStoredValue: (e) => _.parse(e) }),
      v = (0, s.T1)(h.u, (e) => ({ pending: null, checkoutPath: null, unverifiedProjectId: null })),
      j = (0, i.YK)({
        userChanged: { id: "presence.codexProject.userChanged", defaultMessage: "Presence user changed" },
        setupInProgress: {
          id: "presence.codexProject.setupInProgress",
          defaultMessage: "Presence project setup is already using another working directory",
        },
        projectUnavailable: { id: "presence.codexProject.unavailable", defaultMessage: "Presence project unavailable" },
        creationCanceled: {
          id: "presence.codexProject.creationCanceled",
          defaultMessage: "Codex project creation was canceled",
        },
      })
    r.d(
      t,
      {},
      {
        n: async function (e, t, r, s) {
          let i = e.get(c.g),
            l = () => {
              if (((0, k.n7)(e, t), e.get(k.Bm, t).data?.user_id !== r)) throw Error(i.formatMessage(j.userChanged))
            }
          l()
          let h = JSON.stringify([
              ...((0, w.ep)(t) === n.WZ ? [] : [(0, w.ep)(t)]),
              t.accountKey,
              r,
              t.hostId,
              t.projectId,
            ]),
            I = e.get(v, h)
          if (null != I.pending) {
            if (I.checkoutPath !== s) throw Error(i.formatMessage(j.setupInProgress))
            return I.pending
          }
          return (
            (I.checkoutPath = s),
            (I.pending = (async () => {
              let r,
                n = e.get(y)[h]
              if (null != n)
                if ("local" === t.hostId) {
                  let { data: t } = await e.get(d.Mo, o.Q2Y.LOCAL_PROJECTS).refetch({ throwOnError: !0 })
                  l()
                  let r = (0, o.b9)(t?.value)[n]
                  if (null != r && (0, o.y7N)(r.rootPaths[0] ?? "", s)) return { type: "project", projectId: n }
                } else {
                  let r = await (0, d.hm)(e, o.Q2Y.REMOTE_PROJECTS)
                  l()
                  let a = r?.find((e) => e.id === n)
                  if (a?.hostId === t.hostId && (0, o.qPI)(a.remotePath) === (0, o.qPI)(s))
                    return { type: "remoteProject", projectId: n, hostId: t.hostId, path: a.remotePath }
                }
              let a = e.get(k.Bm, t).data?.project.name
              if (null == a) throw Error(i.formatMessage(j.projectUnavailable))
              let c = (0, p.y)()
              if ("local" === t.hostId) {
                let e = await c.createLocal({
                  appearance: null,
                  initializeDefaultWorkspaceGitRepository: !1,
                  name: a,
                  setActive: !1,
                  sources: [s],
                })
                if (null == e) throw Error(i.formatMessage(j.creationCanceled))
                r = { type: "project", projectId: (0, o.Np8)(e.projectId) }
              } else {
                let e = await c.createRemote({
                  appearance: null,
                  hostId: t.hostId,
                  label: a,
                  remotePath: s,
                  reuseExisting: !0,
                })
                if (null == e) throw Error(i.formatMessage(j.creationCanceled))
                r = { type: "remoteProject", projectId: (0, o.Np8)(e.id), hostId: e.hostId, path: e.remotePath }
              }
              return (e.set(y, (e) => ({ ...e, [h]: r.projectId })), (I.unverifiedProjectId = r.projectId), r)
            })()
              .then(async function (r) {
                if (I.unverifiedProjectId !== r.projectId) return r
                let { hostId: n } = t
                if (!(0, u.hE)(n)) {
                  let { data: t } = await e.get(g.FM, { hostId: n }).refetch({ throwOnError: !0 }),
                    r = { hostId: n, roots: t?.roots, accountId: null }
                  ;(await e.get(u.qF, r).refetch({ cancelRefetch: !1, throwOnError: !0 }),
                    await new Promise((e) => a.jG.schedule(e)))
                }
                return (l(), (I.unverifiedProjectId = null), (0, f.i)(e, (0, m.eZ)(r.projectId)), r)
              })
              .finally(() => {
                ;((I.pending = null), (I.checkoutPath = null))
              })),
            I.pending
          )
        },
      },
    )
  },
  TKz6: function (e, t, r) {
    var n = r("HFi9"),
      a = r.n(n),
      s = r("SZCv"),
      o = r.n(s),
      i = r("qmMi"),
      l = r("DBCl"),
      d = r("Qgfj"),
      c = r("E8Sp"),
      u = r("SGsN"),
      p = r("svjy"),
      h = r("nlNF"),
      g = r("Wv1R"),
      m = r("OWtl"),
      f = r("kfGJ"),
      I = r("VVOG"),
      w = r("ib9U"),
      k = r("B6Ln"),
      _ = r("Sx7O"),
      y = r("HV2X")
    let v = (0, i.un)(m.u, ({ get: e }) => a()(e(_.qU), (e) => e.threadId)),
      j = (0, i.i1)(m.u, ({ threadId: e, hostId: t }, { get: r }) => {
        let n = r(h.x2)
        if (null == e || n?.pathname !== (0, l._RT)(e) || (new URLSearchParams(n.search).get("hostId") ?? f.fI) !== t)
          return null
        let a = r(_.AQ),
          s = r(v)[e]?.find((e) => e.context.hostId === t && e.context.accountKey === a && r(w.Q_, e.context))
        if (null == s) return null
        let o = r(_.Bm, s.context)
        if (
          o.data?.user_id !== s.userId ||
          o.data.project.id !== s.context.projectId ||
          null != o.error ||
          !o.data.project.permissions.includes("sonata.project.snapshots.view")
        )
          return null
        let i = r(g.uC, t).find(
          (e) =>
            e.pluginId === (0, w.ep)(s.context) &&
            e.hostId === t &&
            "global" === e.entrypoint.type &&
            "presence.open" === e.tool.name,
        )
        return null == i
          ? null
          : {
              link: s,
              review:
                null == s.headerReviewStep
                  ? null
                  : { context: s.context, userId: s.userId, threadId: s.threadId, step: s.headerReviewStep },
              pathname: (0, l.CZl)(i.server, i.tool.name),
            }
      }),
      S = (0, i.bD)(m.u, (e) => !1)
    function b(e, t) {
      let r = e.get(j, t)
      if (null == r) return
      let { context: n } = r.link
      ;(e.set(I._V, n, (e) => e + 1),
        (0, y.rH)(e, { pathname: r.pathname, hostId: t.hostId }),
        (0, c.oo)(
          e,
          { pathname: r.pathname, search: new URLSearchParams({ hostId: t.hostId }).toString() },
          { state: { sidebarArea: "presence", presence: n } },
        ))
    }
    r.d(
      t,
      {},
      {
        H3: j,
        OX: function (e, t) {
          let r = e.get(j, t)
          if (null == r) return []
          let n = r.review,
            a = null == n ? null : e.get(k.hr, n)
          return null == n || null == a
            ? [
                {
                  id: "presence-back-to-setup",
                  message: (0, d.zR)({ id: "presence.setup.back", defaultMessage: "Back to Setup" }),
                  selectAfterClose: !0,
                  onSelect: () => b(e, t),
                },
              ]
            : [
                {
                  id: "presence-finish-setup-step",
                  message: a.isLastStep
                    ? (0, d.zR)({ id: "presence.setup.finishSetup", defaultMessage: "Finish setup" })
                    : (0, d.zR)({ id: "presence.setup.finishTask", defaultMessage: "Finish task" }),
                  enabled: !e.get(S, n),
                  selectAfterClose: !0,
                  onSelect: () => {
                    !(async function (e, t, r, n) {
                      let a = e.get(h.x2)?.key,
                        s = () => e.get(h.x2)?.key === a && o()(e.get(j, t)?.review, r)
                      if (!(!s() || e.get(S, r)) && e.get(k.hr, r)?.receipt === n) {
                        e.set(S, r, !0)
                        try {
                          await (0, k._S)(e, r, n)
                          let a = e.query.snapshot(k.MG, r)
                          ;(await a.cancel(), a.setData(null), s() && b(e, t))
                        } catch {
                          s() &&
                            (e
                              .get(u.Id)
                              .danger(
                                e
                                  .get(p.g)
                                  .formatMessage({
                                    id: "presence.setup.finishFailed",
                                    defaultMessage:
                                      "Couldn\u2019t confirm completion. Check the review in this chat and try again.",
                                  }),
                                { errorAnalytics: { toastId: "presence.setup.finishFailed" } },
                              ),
                            e.query.invalidate(k.MG, r))
                        } finally {
                          e.set(S, r, !1)
                        }
                      }
                    })(e, t, n, a.receipt)
                  },
                },
                {
                  id: "presence-back-without-finishing",
                  message: (0, d.zR)({
                    id: "presence.setup.backWithoutFinishing",
                    defaultMessage: "Back to Setup without finishing",
                  }),
                  selectAfterClose: !0,
                  onSelect: () => b(e, t),
                },
              ]
        },
        WK: b,
      },
    )
  },
  B6Ln: function (e, t, r) {
    var n = r("qmMi"),
      a = r("ASxG"),
      s = r("vdpW"),
      o = r("OWtl"),
      i = r("Sx7O")
    function l({ context: e, userId: t, threadId: r, step: n }) {
      return { project_id: e.projectId, expected_user_id: t, thread_id: r, step: n }
    }
    function d(e, t) {
      return (
        t.project_id === e.context.projectId &&
        t.user_id === e.userId &&
        t.thread_id === e.threadId &&
        t.step === e.step
      )
    }
    let c = a.Ikc({
        status: a.k5n(["in_progress", "complete"]),
        receipt: a.uRe().nullable(),
        advance_pending: a.euz(!0).optional(),
        is_last_step: a.zMY(),
      }),
      u = (0, n.i1)(o.u, ({ context: e, threadId: t }, { get: r }) => {
        let n = { hostId: e.hostId, threadId: t }
        if (r(s.as, n)) return null
        let a = r(s.Ko, r(s._2, n))
        return a?.status === "completed" ? a.turnId : null
      }),
      p = (0, n.vU)(o.u, (e, { scope: t, get: r }) => {
        let n = r(u, e)
        return {
          queryKey: ["presence-setup-step-review", e, n],
          placeholderData: (e) => e,
          queryFn: async () => {
            let r = await (0, i.qz)(t, e.context, "presence.onboarding.get_step_review", l(e)),
              n = c.safeParse(r).data
            return d(e, r) && null != n
              ? {
                  receipt: "in_progress" === n.status ? n.receipt : null,
                  isLastStep: n.is_last_step,
                  advancePending: "complete" === n.status && !0 === n.advance_pending,
                }
              : null
          },
          staleTime: 0,
          gcTime: 0,
          retry: !1,
        }
      }),
      h = (0, n.i1)(o.u, (e, { get: t }) => {
        let r = t(p, e).data
        return r?.receipt != null ? { receipt: r.receipt, isLastStep: r.isLastStep } : null
      })
    r.d(
      t,
      {},
      {
        MG: p,
        _S: async function (e, t, r) {
          let n = await (0, i.qz)(e, t.context, "presence.onboarding.confirm_step", { ...l(t), receipt: r })
          if ("complete" !== n.status || !d(t, n)) throw Error("Unexpected Presence setup confirmation")
        },
        hr: h,
      },
    )
  },
  HV2X: function (e, t, r) {
    var n = r("qmMi"),
      a = r("QcW8"),
      s = r("ZU27"),
      o = r("gbrq"),
      i = r("nlNF"),
      l = r("LApg"),
      d = r("NRR1"),
      c = r("zeCl"),
      u = r("tv8P"),
      p = r("OWtl"),
      h = r("pZMh"),
      g = r("kpIY"),
      m = r("Sx7O"),
      f = r("He5s")
    function I(e) {
      let t = e.get(a.dX) ? a.DD : h.Em
      return "chat" === e.get(t)
    }
    function w(e, t) {
      if (t?.kind !== c.E) return
      let r = c.T.safeParse(t.props)
      return r.success && r.data.accountId === e.get(d.DO) ? e.get(u.spacePageId$, r.data.pageId) : void 0
    }
    let k = (0, n.vP)(p.u, null),
      _ = (0, n.bD)(p.u, (e) => null)
    r.d(
      t,
      {},
      {
        GO: w,
        J3: I,
        VP: k,
        hb: function (e, t) {
          if (e.value.persistentWorkspace?.session.workspaceId !== t || !(0, i.Hj)(e) || !e.get(o.yN) || I(e)) return !1
          let r = f.e0.safeParse((0, g.TB)((0, f.If)(t))).data
          return (
            r?.pageId != null &&
            r.identity === e.get(m.vo) &&
            w(e, e.get(s.It.activeTab$)) === e.get(u.spacePageId$, r.pageId)
          )
        },
        pU: function (e) {
          let t = crypto.randomUUID()
          return (e.set(k, t), t)
        },
        rH: function (e, t) {
          let r = e.get(l.iG, t)
          e.set(_, t, { accountKey: e.get(r.session$).accountKey })
        },
        zn: _,
      },
    )
  },
  t46T: function (e, t, r) {
    var n = r("l0kR"),
      a = r("SZCv"),
      s = r.n(a),
      o = r("qmMi"),
      i = r("DBCl"),
      l = r("Qgfj"),
      d = r("SGsN"),
      c = r("svjy"),
      u = r("nlNF"),
      p = r("Wv1R"),
      h = r("UwXS"),
      g = r("OWtl"),
      m = r("tSEg"),
      f = r("gZd7"),
      I = r("kfGJ"),
      w = r("WwnD"),
      k = r("p6sx"),
      _ = r("VVOG"),
      y = r("ib9U"),
      v = r("TKz6"),
      j = r("B6Ln"),
      S = r("Sx7O")
    let b = (0, o.vU)(g.u, ({ context: e, userId: t }, { scope: r }) => ({
        queryKey: ["presence-repository-mode", e, t],
        queryFn: async () => {
          let n = await (0, S.qz)(r, e, "presence.workstreams.share.mode", {
            project_id: e.projectId,
            expected_user_id: t,
          })
          if (n.project_id !== e.projectId || n.user_id !== t || ("managed" !== n.mode && "external" !== n.mode))
            throw Error("Presence returned an invalid repository mode.")
          return n.mode
        },
        staleTime: 3e4,
        retry: !1,
      })),
      P = (0, o.i1)(
        g.u,
        ({ threadId: e, hostId: t }, { get: r }) => {
          var a
          let s = r(u.x2),
            o = S.kT.safeParse(s?.state?.presence).data
          if (
            s?.state?.sidebarArea !== "presence" ||
            null == o ||
            o.accountKey !== r(S.AQ) ||
            o.hostId !== t ||
            !r(y.Q_, o) ||
            null != r(S.nW, o)
          )
            return null
          let l = r(p.uC, t).find(
            (e) =>
              e.pluginId === (0, y.ep)(o) &&
              e.hostId === t &&
              "global" === e.entrypoint.type &&
              "presence.open" === e.tool.name,
          )
          if (null == l) return null
          let d = new URLSearchParams(s.search),
            c =
              s.pathname === (0, i.CZl)(l.server, l.tool.name) &&
              (d.get("hostId") ?? I.fI) === t &&
              "new" !== d.get("presenceStart") &&
              !["deployments", "settings", "qa", "simulations"].includes(d.get("presencePage") ?? "")
          if (!c && (null == e || s.pathname !== (0, i._RT)(e))) return null
          let h = r(S.Bm, o),
            g = r(S.wG, o),
            m = r(S.uW, o),
            w = h.data
          if (
            null == w ||
            w.project.id !== o.projectId ||
            "git_authoritative" !== w.project.authoring_mode ||
            !w.project.permissions.includes("sonata.project.snapshots.view") ||
            [h.error, g.error, m.error].some((e) => e instanceof S.Hd)
          )
            return null
          let k = w.user_id,
            v = g.data,
            j = m.data,
            P = [
              ...(v?.user_id === k && v.project_id === o.projectId ? v.workstreams : []),
              ...(j?.user_id === k && j.project_id === o.projectId ? [j.workstream] : []),
            ],
            x = r(_._g, o),
            M = P.find((t) => {
              if (
                t.project_id !== o.projectId ||
                "active" !== t.lifecycle ||
                (c && t.id !== (d.get("presenceStart") ?? w.project.default_workstream_id))
              )
                return !1
              if (null == e) return !0
              let n = x.lookup(k, t.id).threadId
              return null != n && (r(f.H, n) ?? n) === e
            })
          if (null == M) return null
          let R = w.project.permissions,
            T = (0, n.K0)(w.project, M, k),
            E =
              ((a = w.project.source_repo_url),
              null != M.pull_request_number ||
                (0, i.tN7)(M.source_repo_url ?? a ?? "")?.host === "github.com" ||
                (0 !== T.length && !0 !== M.is_shared && "external" === r(b, { context: o, userId: k }).data)),
            C = []
          return (
            E
              ? (C = T)
              : M.id !== w.project.default_workstream_id &&
                null != w.project.default_workstream_id &&
                M.created_by_user_id === k &&
                null != M.head_snapshot_id &&
                R.includes("sonata.project.snapshots.update") &&
                (!0 !== M.is_shared && C.push({ kind: "publish" }), C.push({ kind: "merge", number: null })),
            {
              context: o,
              userId: k,
              pullRequestActions: C,
              workstreamId: M.id,
              hasHead: null != M.head_snapshot_id,
              headSnapshotId: M.head_snapshot_id ?? null,
              definitivelyExternal: E,
              navigationKey: s.key,
              canStartSession:
                (R.includes("sonata.project.playground.access") ||
                  (R.includes("sonata.project.sessions.create") && R.includes("sonata.project.sessions.update"))) &&
                (R.includes("sonata.project.sessions.view") || R.includes("sonata.project.sessions.unredacted.view")),
              canOpenSimulations: R.includes("sonata.project.view") && R.includes("sonata.project.evals.view"),
            }
          )
        },
        { isEqual: s() },
      ),
      x = (0, o.i1)(g.u, (e, { get: t }) => {
        if (null != t(P, e)) return null
        let r = t(v.H3, e)?.review
        return (null != r && t(j.hr, r), null)
      })
    function M(e, t, r, n, a, o) {
      if (!s()(e.get(P, t), r) || !r.hasHead || !("simulations" === n ? r.canOpenSimulations : r.canStartSession))
        return
      if ((a(null), "simulations" !== n)) {
        let t = e
          .get(p.uC, r.context.hostId)
          .find(
            (e) =>
              e.pluginId === (0, y.ep)(r.context) &&
              e.hostId === r.context.hostId &&
              "thread" === e.entrypoint.type &&
              "presence.playground.open" === e.tool.name,
          )
        return null == t
          ? void a(
              o.formatMessage({
                id: "presence.playgroundPluginUpdateRequired",
                defaultMessage: "Update the Presence plugin to open the playground",
              }),
            )
          : ((0, w.sA)(e, { mode: "split", contentSide: "right" }),
              null ==
                (0, h.openMcpExtensionThreadSidePanelTab)(e, t, {
                  target: "right",
                  useHostThread: !0,
                  persist: !1,
                  toolArguments: {
                    project_id: r.context.projectId,
                    workstream_id: r.workstreamId,
                    expected_user_id: r.userId,
                    request_id: crypto.randomUUID(),
                    mode: n,
                  },
                }))
            ? void a(o.formatMessage(R.panelOpenFailed))
            : void (0, k.f)(
                e,
                r.context.accountKey,
                (0, y.ep)(r.context),
                "selected",
                "chat" === n ? "presence.playground-chat" : "presence.playground-phone",
              )
      }
      let i = e
        .get(p.uC, r.context.hostId)
        .find(
          (e) =>
            e.pluginId === (0, y.ep)(r.context) &&
            e.hostId === r.context.hostId &&
            "thread" === e.entrypoint.type &&
            "presence.simulations.open" === e.tool.name,
        )
      null == i
        ? a(
            o.formatMessage({
              id: "presence.simulationsPluginUpdateRequired",
              defaultMessage: "Update the Presence plugin to open simulations",
            }),
          )
        : ((0, w.sA)(e, { mode: "split", contentSide: "right" }),
            null ==
              (0, h.openMcpExtensionThreadSidePanelTab)(e, i, {
                target: "right",
                useHostThread: !0,
                persist: !1,
                toolArguments: {
                  project_id: r.context.projectId,
                  expected_user_id: r.userId,
                  workstream_id: r.workstreamId,
                },
              }))
          ? a(o.formatMessage(R.panelOpenFailed))
          : (0, k.f)(e, r.context.accountKey, (0, y.ep)(r.context), "selected", "presence.simulations")
    }
    let R = (0, l.YK)({
      shareChanged: {
        id: "presence.workstreamActions.shareChanged",
        defaultMessage: "The selected Workstream changed. Refresh before sharing",
      },
      shareUnavailable: {
        id: "presence.workstreamActions.shareUnavailable",
        defaultMessage: "Managed Workstream sharing is unavailable",
      },
      publish: { id: "presence.workstreamActions.shareWithTeam", defaultMessage: "Share with team" },
      merge: { id: "presence.workstreamActions.addToNextAgentVersion", defaultMessage: "Add to next agent version" },
      panelOpenFailed: {
        id: "presence.actionOpenFailed",
        defaultMessage: "Could not open the right panel. Try again.",
      },
      phone: { id: "presence.startPhoneSession", defaultMessage: "Start phone session" },
      chat: { id: "presence.startChatSession", defaultMessage: "Start chat session" },
      simulations: { id: "presence.openSimulations", defaultMessage: "Open simulations" },
      noSnapshot: { id: "presence.actionsNoSnapshot", defaultMessage: "Sync this workstream before testing" },
    })
    r.d(
      t,
      {},
      {
        Fz: function (e, t) {
          if (e.get(m.Rj)) return []
          let r = e.get(P, t)
          return null == r
            ? (0, v.OX)(e, t)
            : ["phone", "chat", "simulations"]
                .filter((e) => ("simulations" === e ? r.canOpenSimulations : r.canStartSession))
                .map((n) => ({
                  id: `presence-${n}`,
                  message: R[n],
                  enabled: r.hasHead,
                  tooltipMessage: r.hasHead ? void 0 : R.noSnapshot,
                  selectAfterClose: !0,
                  onSelect: () =>
                    M(
                      e,
                      t,
                      r,
                      n,
                      (t) => {
                        null != t &&
                          e.get(d.Id).danger(t, { errorAnalytics: { toastId: "presence.headerActionFailed" } })
                      },
                      e.get(c.g),
                    ),
                }))
        },
        fh: async function (e, t, r, n) {
          if (r.definitivelyExternal) return "external"
          let a = e.get(b, { context: r.context, userId: r.userId }),
            o = a.data ?? (await a.refetch({ cancelRefetch: !1, throwOnError: !0 })).data,
            i = e.get(P, t)
          if (
            null == i ||
            !s()(i.context, r.context) ||
            i.navigationKey !== r.navigationKey ||
            i.userId !== r.userId ||
            i.workstreamId !== r.workstreamId ||
            i.headSnapshotId !== r.headSnapshotId
          )
            throw Error(n.formatMessage(R.shareChanged))
          if ("external" === o) return "external"
          if ("managed" !== o || null == r.headSnapshotId) throw Error(n.formatMessage(R.shareUnavailable))
          return "managed"
        },
        lf: R,
        p8: P,
        v8: M,
        wA: x,
      },
    )
  },
  w6GR: function (e, t, r) {
    r.d(t, { Fp: () => Q, _8: () => $, dC: () => B, SN: () => V, ec: () => L, kd: () => Z })
    var n = r("l0kR"),
      a = r("SZCv"),
      s = r.n(a),
      o = r("qmMi"),
      i = r("DBCl"),
      l = r("Vrnh"),
      d = r("XNvh"),
      c = r("FQih"),
      u = r("Qgfj"),
      p = r("eYlV"),
      h = r("QhQG"),
      g = r("Dgwo"),
      m = r("tl5a"),
      f = r("HWdm"),
      I = r("MX6A"),
      w = r("svjy"),
      k = r("LApg"),
      _ = r("OWtl"),
      y = r("ndjw"),
      v = r("Xm8d"),
      j = r("S7oG"),
      S = r("kpIY"),
      b = r("NnGo"),
      P = r("iQgv"),
      x = r("QVfH"),
      M = r("Vhua"),
      R = r("gZd7"),
      T = r("V3rO")
    class E extends Error {}
    var C = r("VVOG"),
      A = r("ib9U"),
      q = r("Vihu"),
      U = r("Sx7O"),
      O = r("t46T"),
      W = r("N4D6"),
      N = r("E353"),
      D = r("wseX")
    let Y = "presence-cancelled-workstream-drafts-v1",
      z = (0, f.Z)(Y),
      G = U.fw.extend({ setup: C.CY }),
      K = (0, o.T1)(_.u, (e) => ({ pending: null }))
    function B(e, t, r, n) {
      return (J(e, t, r), (0, C.uy)(e, t, r, n))
    }
    async function $(e, t, r, n, a) {
      J(e, t, r)
      let s = e.get(C._g, t),
        o = s.lookup(r, n).key
      if (null == o) throw Error("Workstream access is still loading. Try again shortly.")
      let i = (0, C.uy)(e, t, r, n)
      if (null != i) return i
      let l = e.get(K, null == s.pageIdentity ? o : (0, U.WU)(t, r, n, s.pageIdentity))
      return (
        null != l.pending ||
          (l.pending = (async () => {
            let i = e.get(D.pn, { context: t, userId: r, workstreamId: n })?.resourceId,
              l = G.parse(
                await (0, U.qz)(e, t, "presence.workstreams.prepare_chat", {
                  project_id: t.projectId,
                  expected_user_id: r,
                  workstream_id: n,
                }),
              )
            if (
              (J(e, t, r),
              l.user_id !== r ||
                l.project_id !== t.projectId ||
                l.workstream.project_id !== t.projectId ||
                l.workstream.id !== n ||
                "active" !== l.workstream.lifecycle ||
                !l.setup.existingBranch ||
                l.workstream.source_ref !== l.setup.sourceRef)
            )
              throw Error(
                e
                  .get(w.g)
                  .formatMessage({
                    id: "presence.workstream.notAvailableForAuthoring",
                    defaultMessage: "This workstream is not available for authoring",
                  }),
              )
            let d = e.get(C._g, t)
            if (d.lookup(r, n).key !== o || d.pageIdentity !== s.pageIdentity)
              throw Error("The workstream's tab owner changed. Reopen the workstream and try again.")
            let c = (0, C.uy)(e, t, r, n)
            if (null != c) return c
            let u = e
              .get(C.Rz)
              .findLast(
                (e) =>
                  !e.finished &&
                  d.owns(e) &&
                  (0, U.eJ)(e.context, e.userId, n) === (0, U.eJ)(t, r, n) &&
                  (e.workstreamId === n ||
                    ("new" === e.workstreamId &&
                      null != e.threadId &&
                      e.queued?.branchName != null &&
                      `refs/heads/${e.queued.branchName}` === l.setup.sourceRef &&
                      (null == e.linkedWorkstreamId || e.linkedWorkstreamId === n))),
              )
            if (null == u) {
              u = {
                id: crypto.randomUUID(),
                context: t,
                userId: r,
                workstreamId: n,
                pageIdentity: s.pageIdentity,
                draftWorkspaceResourceId: i,
                checkoutPath: a,
                prompt: "",
                setup: l.setup,
              }
              let o = e.get(C.Rz),
                d = o.filter((e) => !e.finished)
              if (d.length >= 64)
                throw Error(
                  e
                    .get(w.g)
                    .formatMessage({
                      id: "presence.workstream.pendingLimit",
                      defaultMessage: "Finish the pending Presence chats before starting more",
                    }),
                )
              e.set(C.Rz, [...d, ...(0, C.P$)(o), u])
            } else if (null == u.setup) L(e, (u = { ...u, setup: l.setup }))
            else if (
              (u.queued?.branchName != null ? `refs/heads/${u.queued.branchName}` : u.setup.sourceRef) !==
              l.setup.sourceRef
            )
              throw Error(e.get(w.g).formatMessage(et.branchMismatch))
            let p = await Q(e, u, a)
            if ((J(e, t, r), p.sourceRef !== l.setup.sourceRef))
              throw Error(e.get(w.g).formatMessage(et.branchMismatch))
            return (
              ee(e, u, n, p.threadId),
              "" === u.prompt && e.set(C.Rz, (e) => e.map((e) => (e.id === u.id ? { ...e, finished: !0 } : e))),
              p.threadId
            )
          })().finally(() => {
            l.pending = null
          })),
        l.pending
      )
    }
    function L(e, t) {
      ;((0, U.n7)(e, t.context), e.set(C.Rz, (e) => e.map((e) => (e.id === t.id ? t : e))))
    }
    function F(e, t, r = !0) {
      let { context: n, userId: a, workstreamId: s, draftWorkspaceResourceId: o } = t
      if (!e.get(C._g, n).owns(t)) {
        if (r) throw Error("The workstream's tab owner changed. Reopen the workstream and try again.")
        return null
      }
      if (null == o || "new" === s) return null
      let i = e.get(D.pn, { context: n, workstreamId: s, userId: a })
      if (i?.resourceId === o) return e.get(k.iG, i)
      let l = e.get(C.My, n)
      if (!1 === l) {
        let t = e.get(D.sD, n)
        if (t?.userId === a && t.workstreams.some((e) => e.id === s)) return null
      }
      if (r) {
        if (null == l) throw Error("Workstream access is still loading. Try again shortly.")
        throw Error("The workstream's tab owner changed. Reopen the workstream and try again.")
      }
      return null
    }
    function V(e, t) {
      if (null == t || !(0, b.oI)() || "timeout" === (0, S.cz)()) return !1
      let r = e.get(t.session$),
        n = r.workspaceId
      if (null == n) return !1
      let a = e.get(z.drafts$)[n]
      if (null == a) return !1
      if (r.clientThreadId !== a) return (t.isSavedDraft(e, r) && z.setDraft(e, [n], void 0, a), !1)
      let s = e.get(t.savedDraftTabs$)[r.accountKey],
        l = j.g.safeParse(s)
      if (null != s && (!l.success || l.data.clientThreadId !== r.clientThreadId)) return !1
      let d = (0, i.xa2)()
      return (
        (0, o.Y)(e, () => {
          ;(t.reset(e, d),
            l.success && e.set(t.savedDraftTabs$, (e) => ({ ...e, [r.accountKey]: { ...l.data, clientThreadId: d } })),
            z.setDraft(e, [n], void 0, a))
        }),
        !0
      )
    }
    function H(e, t) {
      ;(0, U.n7)(e, t.context)
      let r = e.get(C.Rz).find((e) => e.id === t.id && !e.cancelled)
      if (null == r) return
      let { draftWorkspaceResourceId: n, queued: a } = r
      ;(null != n && a?.adoptedDraft && (z.setDraft(e, [n], a.clientThreadId), (0, S.C3)(Y)),
        L(e, { ...r, cancelled: !0, finished: !0 }),
        V(e, F(e, r, !1)))
    }
    async function Q(e, t, r = t.checkoutPath) {
      let n,
        a = t,
        { context: s, setup: o } = a
      if (((0, U.n7)(e, s), a.cancelled)) throw new E(e.get(w.g).formatMessage(et.cancelled))
      if (null == o) throw Error("Native setup has not been configured.")
      let l = (t, r) => {
        if (!(0, b.oI)()) return
        let s = F(t, a, !1)
        if (null == s) return
        let o = t.get(s.session$)
        if (o.clientThreadId !== r || !s.isSavedDraft(t, o)) return
        let i = t.get(s.savedDraftTabs$)[o.accountKey]
        if (i === n) return
        n = i
        let l = j.g.safeParse(i)
        l.success &&
          l.data.clientThreadId === r &&
          v.sm.setDraft(e, [r], { clientThreadId: r, checkpoint: l.data.checkpoint })
      }
      if (null == a.queued) {
        if (a.dispatching)
          throw Error("Native creation was interrupted. Check Codex's pending worktrees before starting another chat.")
        if (null == a.threadId && !a.sendStarted && a.checkoutPath !== r) {
          if (a.branchReservationStarted)
            throw Error(
              e
                .get(w.g)
                .formatMessage({
                  id: "presence.workstream.sourceCheckoutChanged",
                  defaultMessage:
                    "The workstream branch was reserved in the original checkout. Restore that folder to continue.",
                }),
            )
          L(e, (a = { ...a, checkoutPath: r }))
        }
        let t = await (0, q.n)(e, s, a.userId, a.checkoutPath),
          n = o.sourceRef.slice(11),
          d = !1
        if (o.existingBranch) {
          J(e, s, a.userId)
          let { worktrees: t } = await (0, P.V)("git").request({
            method: "list-worktrees",
            params: {
              cwd: (0, i.DIv)(a.checkoutPath),
              hostConfig: e.get(y.fm, s.hostId),
              operationSource: "worktree_pending_create",
            },
          })
          d = t.some(({ headRef: e }) => "branch" === e.type && e.string === n)
        }
        J(e, s, a.userId)
        let u = e.get(C.Rz).find((e) => e.id === a.id)
        if (null == u) throw Error(e.get(w.g).formatMessage(et.missingOperation))
        if (u.cancelled || null != u.queued || u.dispatching || u.checkoutPath !== a.checkoutPath) return Q(e, u)
        ;((a = u), e.set(C.hy, (0, A.TN)(s), "branch"))
        let h = a.source
        if (null != h) {
          if (o.existingBranch)
            throw Error(
              e
                .get(w.g)
                .formatMessage({
                  id: "presence.workstream.existingSourceChanged",
                  defaultMessage: "An existing workstream cannot change its starting point",
                }),
            )
          ;(await (0, N.P)(e, s, a.userId, h, a.checkoutPath), J(e, s, a.userId))
          let t = e.get(C.Rz).find((e) => e.id === a.id)
          if (null == t) throw Error(e.get(w.g).formatMessage(et.missingOperation))
          if (t.dispatching || null != t.queued || t.checkoutPath !== a.checkoutPath) return Q(e, t)
          if (!(a = t).branchReserved) {
            if (a.branchReservationStarted)
              throw Error(
                e
                  .get(w.g)
                  .formatMessage({
                    id: "presence.workstream.sourceReservationUncertain",
                    defaultMessage:
                      "Branch creation was interrupted. Check the reserved workstream branch before retrying.",
                  }),
              )
            L(e, (a = { ...a, branchReservationStarted: !0 }))
            let t = await (0, P.V)("git").request({
              method: "create-branch",
              params: {
                cwd: (0, i.DIv)(a.checkoutPath),
                hostConfig: e.get(y.fm, s.hostId),
                branch: n,
                startPoint: h.commitSha,
                mode: "worktree",
                failIfExists: !0,
                operationSource: "worktree_pending_create",
              },
            })
            if ((J(e, s, a.userId), "error" === t.status))
              throw (
                L(e, { ...a, branchReservationStarted: !1 }),
                Error(
                  e
                    .get(w.g)
                    .formatMessage(
                      {
                        id: "presence.workstream.sourceBranchFailed",
                        defaultMessage:
                          "Could not create the workstream from commit {commit}. Make sure this commit is available in the repository. Git reported: {reason}",
                      },
                      { commit: h.commitSha.slice(0, 8), reason: t.error },
                    ),
                )
              )
            L(e, (a = { ...a, branchReserved: !0 }))
          }
        }
        let g = F(e, a)
        if (d)
          throw Error(
            e
              .get(w.g)
              .formatMessage(
                {
                  id: "presence.workstream.branchCheckedOut",
                  defaultMessage:
                    "The workstream branch ({branch}) is already checked out in this clone. To resume an earlier chat, open the command menu and search for its title. To start a new chat, choose another clone or free the branch here and try again.",
                },
                { branch: n },
              ),
          )
        ;(V(e, g), L(e, (a = { ...a, dispatching: !0 })))
        let m = null == g ? null : e.get(g.session$),
          f =
            null != m && !m.hasSubmittedChat && (0, i.L$F)(m.clientThreadId) && g?.isSavedDraft(e, m)
              ? m.clientThreadId
              : void 0,
          I = !1,
          k = await (0, p.Nw)({
            scope: e,
            model: a.model,
            thinking: (0, c.eE)(a.thinking) ? a.thinking : void 0,
            prompt: a.prompt,
            title: o.name,
            startWithoutFirstTurn: !0,
            turnTrigger: "presence_workstream",
            additionalDeveloperInstructions: o.instructions,
            onBeforeWorktreeCreate: () => {
              J(e, s, a.userId)
              let t = F(e, a),
                r = null == t ? null : e.get(t.session$)
              if (
                g !== t ||
                r?.clientThreadId !== m?.clientThreadId ||
                r?.accountKey !== m?.accountKey ||
                r?.conversationId !== m?.conversationId ||
                r?.hasSubmittedChat !== m?.hasSubmittedChat ||
                (null != g && "timeout" === (0, S.cz)()) ||
                (null != m && !m.hasSubmittedChat && g?.isSavedDraft(e, m) !== (null != f)) ||
                (null != f && null != e.get(M.e7, f))
              )
                throw Error("The workstream's chat has changed. Reopen the workstream and try again.")
              ;(null != f && null != g && null != m && (l(e, f), g.markSubmitted(e, m)), (I = !0))
            },
            target: {
              ...t,
              environment: {
                type: "worktree",
                ...(null == f ? {} : { clientThreadId: f }),
                startingState:
                  o.existingBranch || null != a.source
                    ? { type: "branch", branchName: n, onMissing: "error" }
                    : { type: "new-branch", branchName: n },
              },
            },
          }).catch((t) => {
            if ((I || L(e, { ...a, dispatching: !1 }), t instanceof p.Vx))
              throw Error(
                e
                  .get(w.g)
                  .formatMessage(
                    {
                      id: "presence.workstream.branchUnavailable",
                      defaultMessage:
                        "The workstream's Git branch ({branch}) is not available locally or on its remote. Choose a folder containing it or ask its author to push the branch",
                    },
                    { branch: n },
                  ),
              )
            throw t
          })
        if ("worktree-queued" !== k.kind) throw Error("Expected a managed worktree.")
        L(e, (a = { ...a, queued: { ...k, ...(f === k.clientThreadId ? { adoptedDraft: !0 } : {}) }, dispatching: !1 }))
      }
      let d = a.queued
      if (d?.branchName == null) throw Error("The worktree has no Git branch.")
      if (null == a.threadId) {
        e.set(C.hy, (0, A.TN)(s), "worktree")
        let t = e.watch((t) => {
          ;(l(t, d.clientThreadId),
            t.get(M.e7, d.clientThreadId)?.phase === "worktree-ready" && e.set(C.hy, (0, A.TN)(s), "chat"))
        })
        try {
          let t = await (async function (e, t, r) {
            let n, a
            try {
              return await new Promise((s, o) => {
                ;((a = setTimeout(
                  () => o(Error("Worktree setup is still running. Try again to check its progress.")),
                  12e4,
                )),
                  (n = e.watch(({ get: n }) => {
                    let a = n(M.e7, t),
                      l = n(x.Qc, r),
                      d = n(T.Tl, t) ?? n(R.H, t)
                    a?.executionTarget === "source-workspace" || l?.state === "cancelled" || n(x.w9).includes(r)
                      ? o(
                          new E(
                            e
                              .get(w.g)
                              .formatMessage({
                                id: "worktreeSetup.cancelled",
                                defaultMessage: "Worktree setup was cancelled",
                                description:
                                  "Error returned when the user cancels worktree creation or chooses to work in the original checkout",
                              }),
                          ),
                        )
                      : null != d && null === a
                        ? s((0, i.JXB)(d))
                        : (a?.phase === "failed" || l?.state === "failed") &&
                          o(
                            Error(
                              a?.errorMessage ?? "Could not create the worktree chat. Check Codex's pending worktrees.",
                            ),
                          )
                  })))
              })
            } finally {
              ;(n?.(), clearTimeout(a))
            }
          })(e, d.clientThreadId, d.pendingWorktreeId)
          ;((a = { ...a, threadId: t }), L(e, a), J(e, s, a.userId))
        } catch (t) {
          throw (t instanceof E && H(e, a), t)
        } finally {
          t()
        }
      }
      if (((0, U.n7)(e, s), null == a.threadId)) throw Error("Native chat is not ready.")
      let u = a.sendStarted ? `refs/heads/${d.branchName}` : await X(e, a, { checkoutDetachedBranch: !0 }),
        h = F(e, a),
        g = null == h ? null : e.get(h.session$)
      return (
        null != h && g?.clientThreadId === d.clientThreadId && h.promote(e, g, a.threadId),
        { threadId: a.threadId, sourceRef: u }
      )
    }
    async function Z(e, t, r, a) {
      let o = t,
        { context: i, threadId: u } = o
      if (((0, U.n7)(e, i), o.cancelled)) throw new E(e.get(w.g).formatMessage(et.cancelled))
      if (null == u) throw Error("Native chat is not ready.")
      if (
        "new" === r ||
        ("new" !== o.workstreamId && o.workstreamId !== r) ||
        (null != o.linkedWorkstreamId && o.linkedWorkstreamId !== r)
      )
        throw Error("The approved submission belongs to another workstream.")
      if ("new" === o.workstreamId && null == o.linkedWorkstreamId) {
        let t = G.parse(
          await (0, U.qz)(e, i, "presence.workstreams.prepare_chat", {
            project_id: i.projectId,
            expected_user_id: o.userId,
            workstream_id: r,
          }),
        )
        if (
          (J(e, i, o.userId),
          o.queued?.branchName == null ||
            t.user_id !== o.userId ||
            t.project_id !== i.projectId ||
            t.workstream.project_id !== i.projectId ||
            t.workstream.id !== r ||
            "active" !== t.workstream.lifecycle ||
            t.workstream.id === e.get(U.Bm, i).data?.project.default_workstream_id ||
            t.workstream.source_ref !== `refs/heads/${o.queued.branchName}` ||
            t.setup.sourceRef !== t.workstream.source_ref ||
            !t.setup.existingBranch)
        )
          throw Error(e.get(w.g).formatMessage(et.branchMismatch))
        let n = e.get(C.Rz).find((e) => e.id === o.id)
        if (null == n) throw Error(e.get(w.g).formatMessage(et.missingOperation))
        if (null != n.linkedWorkstreamId && n.linkedWorkstreamId !== r)
          throw Error("The approved submission belongs to another workstream.")
        L(e, (o = { ...n, linkedWorkstreamId: r }))
      }
      if (!o.sendStarted) {
        await X(e, o)
        let t = e.get(C.Rz).find((e) => e.id === o.id)
        if (null == t) throw Error(e.get(w.g).formatMessage(et.missingOperation))
        if (t.cancelled) throw new E(e.get(w.g).formatMessage(et.cancelled))
        if (null != t.linkedWorkstreamId && t.linkedWorkstreamId !== r)
          throw Error("The approved submission belongs to another workstream.")
        o = t
      }
      if ((F(e, o), ee(e, o, r, u), !o.sendStarted)) {
        L(
          e,
          (o = {
            ...o,
            sendStarted: !0,
            sendError: "The first message could not be confirmed. Check the chat before sending it again.",
          }),
        )
        try {
          let t = o.pullRequestAction
          if (null != t) {
            let n = { context: i, userId: o.userId, workstreamId: r }
            await (0, W.Ni)(
              e,
              u,
              n,
              t,
              () => {
                let a = e.get(O.p8, { hostId: i.hostId })
                return (
                  null != a &&
                  s()(a.context, i) &&
                  a.userId === n.userId &&
                  a.workstreamId === r &&
                  a.pullRequestActions.some((e) => s()(e, t))
                )
              },
              a,
              o.managedShareSnapshotId,
            )
          } else
            await (0, h.d)({
              scope: e,
              hostId: i.hostId,
              threadId: u,
              prompt:
                (0, A.ep)(i) === n.WZ ? o.prompt : `${(0, I.xR)("@Presence", (0, d.vt)((0, A.ep)(i)))} ${o.prompt}`,
              model: o.model,
              serviceTier: o.serviceTier,
              thinking: (0, c.eE)(o.thinking) ? o.thinking : void 0,
              turnTrigger: "presence_workstream",
              additionalContext: (0, l.w1)({
                presenceWorkstream: a ?? { projectId: i.projectId, workstreamId: r, branchName: o.queued?.branchName },
              }),
            })
          o = { ...o, sendError: void 0 }
        } catch (e) {
          o = { ...o, sendError: e instanceof Error ? e.message : String(e) }
        }
        let t = e.get(C.Rz).find((e) => e.id === o.id) ?? o
        L(e, { ...t, sendError: o.sendError })
      }
      return { sendError: o.sendError ?? null }
    }
    function J(e, t, r) {
      if (((0, U.n7)(e, t), e.get(U.Bm, t).data?.user_id !== r))
        throw Error(
          e.get(w.g).formatMessage({ id: "presence.workstream.userChanged", defaultMessage: "Presence user changed" }),
        )
    }
    async function X(e, t, { checkoutDetachedBranch: r = !1 } = {}) {
      let { context: n, threadId: a, queued: s } = t,
        o = s?.branchName
      if (null == a || null == s || null == o) throw Error(e.get(w.g).formatMessage(et.branchMismatch))
      let l = () => {
        J(e, n, t.userId)
        let r = e.get(C.Rz).find((e) => e.id === t.id)
        if (r?.cancelled || e.get(x.w9).includes(s.pendingWorktreeId))
          throw (null == r || r.sendStarted || H(e, r), new E(e.get(w.g).formatMessage(et.cancelled)))
      }
      l()
      let { thread: d } = await (0, g.V)(e, n.hostId).readThread(a, { includeTurns: !1 })
      l()
      let c = e.get(y.fm, n.hostId),
        u = (0, P.V)("git"),
        [p, h, f] = await Promise.all([
          u.request({
            method: "stable-metadata",
            params: { cwd: (0, i.DIv)(t.checkoutPath), hostConfig: c, operationSource: "worktree_pending_create" },
          }),
          u.request({
            method: "stable-metadata",
            params: { cwd: (0, i.DIv)(d.cwd), hostConfig: c, operationSource: "worktree_pending_create" },
          }),
          u.request({
            method: "resolve-worktree-for-thread",
            params: {
              cwd: (0, i.DIv)(t.checkoutPath),
              threadCwd: (0, i.DIv)(d.cwd),
              conversationId: (0, i.JXB)(a),
              hostConfig: c,
              operationSource: "worktree_pending_create",
            },
          }),
        ])
      if ((l(), null != p && null != h && (0, i.y7N)(p.root, h.root))) {
        let r = e.get(C.Rz).find((e) => e.id === t.id)
        if (null != r && !r.sendStarted) throw (H(e, r), new E(e.get(w.g).formatMessage(et.cancelled)))
      }
      if (
        null == p ||
        null == h ||
        null == f.worktreeGitRoot ||
        (0, i.y7N)(p.root, h.root) ||
        !(0, i.y7N)(h.root, f.worktreeGitRoot)
      )
        throw Error(e.get(w.g).formatMessage(et.managedWorktreeRequired))
      let I = () =>
          u.request({
            method: "current-branch",
            params: { root: h.root, hostConfig: c, operationSource: "worktree_pending_create" },
          }),
        k = t.source?.commitSha,
        _ = await I()
      if ((l(), _.isDetached && r)) {
        let r = () =>
            u.request({
              method: "checkout-branch",
              params: {
                cwd: (0, i.DIv)(h.root),
                branch: o,
                stashUncommitted: !1,
                hostConfig: c,
                operationSource: "worktree_pending_create",
              },
            }),
          a = await r()
        if ((l(), "error" === a.status)) {
          var v, j
          let s,
            d,
            p,
            g,
            f =
              t.setup?.existingBranch && "new" !== t.workstreamId
                ? ((v = a.error),
                  (s =
                    /^fatal: cannot set up tracking information; starting point '(refs\/remotes\/.+)' is not a branch$/.exec(
                      v.trim(),
                    )),
                  (d = s?.[1]),
                  d?.endsWith(`/${o}`) ? d : null)
                : null
          if (null == f) throw Error(a.error)
          let w = `refs/heads/${o}`,
            [_, y] = await Promise.all([
              I(),
              e
                .get(m.nK, n.hostId)
                .sendRequest("command/exec", {
                  cwd: h.root,
                  command: ["git", "show-ref", "--head", "--", "HEAD", w, f],
                }),
            ])
          l()
          let S =
            _.isDetached && 0 === y.exitCode
              ? ((j = y.stdout),
                null !=
                  (g = (p = new Map(
                    j
                      .trim()
                      .split("\n")
                      .map((e) => {
                        let [t, r] = e.split(" ")
                        return [r, t]
                      }),
                  )).get("HEAD")) &&
                /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/.test(g) &&
                !p.has(w) &&
                p.get(f) === g
                  ? g
                  : null)
              : null
          if (null == S) throw Error(a.error)
          let b = await u.request({
            method: "create-branch",
            params: {
              cwd: (0, i.DIv)(h.root),
              branch: o,
              startPoint: S,
              failIfExists: !0,
              mode: "worktree",
              hostConfig: c,
              operationSource: "worktree_pending_create",
            },
          })
          if ((l(), "error" === b.status)) throw Error(b.error)
          k = S
          let P = await r()
          if ((l(), "error" === P.status)) throw Error(P.error)
        }
        ;((_ = await I()), l())
      }
      if (_.isDetached || _.branch !== o) throw Error(e.get(w.g).formatMessage(et.branchMismatch))
      if (null != k) {
        let r = await u.request({
          method: "git-context",
          params: { cwd: (0, i.DIv)(h.root), hostConfig: c, operationSource: "worktree_pending_create" },
        })
        if ((l(), r.headCommitSha !== k)) {
          if (null == t.source) throw Error(e.get(w.g).formatMessage(et.branchMismatch))
          throw Error(
            e
              .get(w.g)
              .formatMessage({
                id: "presence.workstream.sourceCommitMismatch",
                defaultMessage:
                  "The new workstream no longer matches the selected commit. Check its branch before sending",
              }),
          )
        }
      }
      return `refs/heads/${_.branch}`
    }
    function ee(e, t, r, n) {
      let { context: a, userId: s } = t,
        o = e.get(C._g, a),
        i = o.lookup(s, r)
      if (null == i.key || !o.owns(t))
        throw Error("The workstream's tab owner changed. Reopen the workstream and try again.")
      if (null != i.threadId && i.threadId !== n) throw Error("Open your existing chat for this workstream.")
      let l = i.key,
        d = l === (0, U.eJ)(a, s, r) && (0, C.JG)(t) ? o.pageIdentity : void 0,
        c = null != d && r !== e.get(U.Bm, a).data?.project.default_workstream_id ? (0, U.WU)(a, s, r, d) : null
      e.set(U.O_, (e) => ({
        ...e,
        [l]: { threadId: n, ...(null == d ? {} : { pageIdentity: d }) },
        ...(null == c ? {} : { [c]: { threadId: n } }),
      }))
    }
    let et = (0, u.YK)({
      cancelled: { id: "presence.workstream.cancelled", defaultMessage: "Worktree setup was cancelled" },
      managedWorktreeRequired: {
        id: "presence.workstream.managedWorktreeRequired",
        defaultMessage: "This chat is not in its managed worktree. Check the chat before continuing",
      },
      missingOperation: {
        id: "presence.workstream.missingOperation",
        defaultMessage: "Chat setup is no longer available",
      },
      branchMismatch: {
        id: "presence.workstream.branchMismatch",
        defaultMessage: "The chat's Git branch does not match this Presence workstream",
      },
    })
  },
  He5s: function (e, t, r) {
    var n = r("ASxG")
    let a = n.Ikc({ identity: n.YjP(), pageId: n.YjP().nullable() }),
      s = n.YjP().regex(/^[A-Za-z0-9_-]{1,256}$/),
      o = n
        .Ikc({
          version: n.euz(1),
          storage_mode: n.k5n(["durable_v1", "project_space_v1"]),
          creation_pending: n.zMY(),
          template_version: n.KCZ([n.euz(1), n.euz(2)]).nullable(),
          account_id: n.YjP().min(1),
          account_user_id: n.YjP().min(1),
          user_id: n.YjP().min(1),
          project_id: s,
          workstream_id: s,
          page_id: s.nullable(),
        })
        .refine((e) => null == e.page_id || !e.creation_pending)
    r.d(
      t,
      {},
      {
        If: function (e) {
          return `presence-workstream-page-presented-v2:${e}`
        },
        U$: o,
        e0: a,
      },
    )
  },
  N4D6: function (e, t, r) {
    var n = r("SRbQ"),
      a = r("Vrnh"),
      s = r("Qgfj"),
      o = r("Dgwo"),
      i = r("UaU4"),
      l = r("svjy"),
      d = r("Yn2j"),
      c = r("r0y7"),
      u = r("H7Ld"),
      p = r("ib9U")
    let h = (0, s.zR)({
      id: "presence.workstreamActions.actionUnavailable",
      defaultMessage: "This action is unavailable for these changes or your project role.",
    })
    function g(e) {
      return "publish" === e.kind ? "$share-workstream" : "$add-workstream-to-next-agent-version"
    }
    r.d(
      t,
      {},
      {
        Hr: g,
        Ni: async function (e, t, r, s, m, f, I) {
          let w = { stack: [], error: void 0, hasError: !1 }
          try {
            let { hostId: k } = r.context,
              _ = (0, o.V)(e, k),
              y = (0, n.mS)(w, await _.getFollowUpContext(t), !1),
              v = y?.cwd ?? (await _.readThread(t, { includeTurns: !1 })).thread.cwd,
              j = y?.threadAccess,
              S = await (0, c.tu)(e, k, "shared" === j),
              b = (0, n.mS)(w, await _.getTurnCoordinator(), !1)
            if (!m()) throw Error(e.get(l.g).formatMessage(h))
            let P = (0, u.KH)({ defaultPrompt: g(s), pluginDisplayName: "Presence", pluginId: (0, p.ep)(r.context) }),
              x = (0, i._)(e, k)
            await b.sendMessage(
              {
                conversationId: t,
                queueModeOverride: "queue",
                message: {
                  id: crypto.randomUUID(),
                  createdAt: Date.now(),
                  cwd: v,
                  text: P,
                  threadAccess: j,
                  multiUserMessageSender: S,
                  responsesapiClientMetadata: (0, d.V)(e, k),
                  context: {
                    prompt: P,
                    additionalContext: (0, a.w1)({
                      presenceWorkstream:
                        [
                          f,
                          null == I
                            ? void 0
                            : `Managed Share snapshot ID: ${I}. Share exactly this saved snapshot and fail if the saved head changed.`,
                        ]
                          .filter(Boolean)
                          .join("\n") || void 0,
                      presenceWorkstreamAction: {
                        projectId: r.context.projectId,
                        workstreamId: r.workstreamId,
                        expectedUserId: r.userId,
                        expectedPullRequestNumber: "merge" === s.kind ? (s.number ?? void 0) : void 0,
                      },
                    }),
                    addedFiles: [],
                    fileAttachments: [],
                    imageAttachments: [],
                    ideContext: null,
                    turnTrigger: "presence_workstream",
                  },
                },
              },
              async (e, t) => ({ ...(await x(e, t)), requiresIdle: !0 }),
            )
          } catch (e) {
            ;((w.error = e), (w.hasError = !0))
          } finally {
            ;(0, n.hk)(w)
          }
        },
        Sq: h,
      },
    )
  },
  huLo: function (e, t, r) {
    var n = r("QosV"),
      a = r("SZCv"),
      s = r.n(a),
      o = r("qmMi"),
      i = r("zd8w"),
      l = r("Ywss"),
      d = r("E8Sp"),
      c = r("SGsN"),
      u = r("nlNF"),
      p = r("Wv1R"),
      h = r("OWtl"),
      g = r("tSEg"),
      m = r("gZd7"),
      f = r("VVOG"),
      I = r("ieM0"),
      w = r("ib9U"),
      k = r("Sx7O"),
      _ = r("t46T"),
      y = r("N4D6")
    let v = (0, o.vP)(h.u, null)
    function j(e, t, r, n = null, a) {
      let s = crypto.randomUUID()
      return (e.set(v, { ...r, context: t, id: s, confirmedAction: n, managedShareSnapshotId: a }), s)
    }
    function S(e, t, r, n, a, o, i) {
      null != t.threadId
        ? P(e, t.threadId, r, n, a, i)
        : (async function (e, t, r, n, a, o, i) {
            let { context: l, userId: c, workstreamId: p } = r,
              h = j(e, l, { expectedUserId: c, workstreamId: p, action: n.kind }, n, i),
              g = () => e.get(v)?.id === h && s()(e.get(_.p8, t), r)
            try {
              let t = (0, f.uy)(e, l, c, p)
              if (null == t && !1 !== e.get(f.My, l)) {
                let t = e.get(u.x2)
                if (null == t) throw Error("The workstream is no longer open.")
                await o(
                  { pathname: t.pathname, search: t.search, hash: t.hash },
                  {
                    replace: !0,
                    state: {
                      ...t.state,
                      presenceWorkstreamChatStart: p,
                      presenceWorkstreamDetailTabs: !1,
                      presencePullRequestIntentId: h,
                    },
                  },
                )
                return
              }
              if (null == t) {
                let r = e.get(k.kH, l).data,
                  n = r?.user_id === c && r.project_id === l.projectId ? r.checkout_path : null
                t = await (0, I.Q2)(
                  e,
                  { context: l, userId: c, workstreamId: p },
                  { savedPath: n },
                  () => Promise.resolve(null),
                  g,
                  o,
                  h,
                )
              }
              if (!g() || (null == t && e.get(f.Uw, (0, w.TN)(l))?.pullRequestIntentId === h)) return
              if (null != t) {
                let r = e.get(m.H, t) ?? t
                if (
                  (0, d.Bq)(e, r, l.hostId, {
                    state: { sidebarArea: "presence", presence: l, presencePullRequestIntentId: h },
                  })
                )
                  return
              }
            } catch {
              if (!g()) return
            }
            ;(e.set(v, null), b(e, a))
          })(e, t, r, n, a, o, i)
    }
    function b(e, t) {
      e.get(c.Id).danger(
        t.formatMessage({
          id: "presence.workstreamActions.threadUnavailable",
          defaultMessage: "The request wasn\u2019t sent. Open the workstream\u2019s thread and try again.",
        }),
        { errorAnalytics: { toastId: "presence.workstreamActions.threadUnavailable" } },
      )
    }
    async function P(e, t, r, n, a, o) {
      let i = () => s()(e.get(_.p8, { hostId: r.context.hostId, threadId: t }), r)
      try {
        await (0, y.Ni)(e, t, r, n, i, void 0, o)
      } catch {
        if (!i()) return
        e.get(c.Id).danger(
          a.formatMessage({
            id: "presence.workstreamActions.sendUnconfirmed",
            defaultMessage:
              "Couldn\u2019t confirm the request was sent. Check the workstream thread before trying again.",
          }),
          { errorAnalytics: { toastId: "presence.workstreamActions.sendUnconfirmed" } },
        )
      }
    }
    r.d(
      t,
      {},
      {
        TP: function (e, t, r) {
          return e.watch((n) => {
            let a = n.get(v),
              o = n.get(u.x2)
            if (
              null == a ||
              o?.state?.presencePullRequestIntentId !== a.id ||
              !(0, u.Hj)(n) ||
              !n.get(p.sF) ||
              !n.get(w.Q_, { hostId: a.context.hostId, pluginId: (0, w.ep)(a.context) })
            )
              return
            let i = (0, g.Qm)(n.value) ?? void 0,
              l = { hostId: a.context.hostId, threadId: i },
              d = n.get(_.p8, l)
            if (
              null == d ||
              !s()(a.context, d.context) ||
              a.workstreamId !== d.workstreamId ||
              a.expectedUserId !== d.userId
            )
              return
            if ("submit" in r) {
              if (
                null == a.confirmedAction ||
                null != i ||
                o.state.presenceWorkstreamChatStart !== a.workstreamId ||
                (0, w.TN)(r.host) !== (0, w.TN)(a.context)
              )
                return
              let e = (0, w.TN)(a.context),
                t = n.get(f.ul, e),
                s = n.get(f._g, a.context).lookup(a.expectedUserId, a.workstreamId)
              if (!t.workstreamChatStart || null != t.submission || null != s.threadId) return
              let l = n.get(f.QW, e)
              if (
                !l?.enabled ||
                l.projectId !== a.context.projectId ||
                l.workstreamId !== a.workstreamId ||
                l.userId !== a.expectedUserId
              )
                return
            } else if (null != a.confirmedAction && null == i) return
            let h = d.pullRequestActions.find((e) => e.kind === a.action)
            if ((e.set(v, null), null != h && (null == a.confirmedAction || s()(a.confirmedAction, h))))
              if ("submit" in r)
                try {
                  r.submit((0, y.Hr)(h), void 0, void 0, null, h, a.managedShareSnapshotId)
                } catch {
                  b(e, t)
                }
              else
                null == a.confirmedAction ? r.review(l, d, h) : null != i && P(e, i, d, h, t, a.managedShareSnapshotId)
            else e.get(c.Id).info(t.formatMessage(y.Sq))
          })
        },
        br: function (e, t, r, a) {
          let o,
            d,
            c,
            u,
            p = (0, n.c)(12),
            [h, g] = (0, i.useState)(null),
            m = (0, i.useRef)(!1),
            f = (0, l.Zp)()
          return (
            p[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((o = (e, t) => {
                  ;((m.current = !1), g({ action: e, managedShareSnapshotId: t }))
                }),
                (d = () => g(null)),
                (p[0] = o),
                (p[1] = d))
              : ((o = p[0]), (d = p[1])),
            p[2] !== t || p[3] !== a || p[4] !== f || p[5] !== h || p[6] !== e || p[7] !== r
              ? ((c = () => {
                  !m.current &&
                    null != h &&
                    r.pullRequestActions.some((e) => s()(e, h.action)) &&
                    s()(e.get(_.p8, t), r) &&
                    ((m.current = !0), g(null), S(e, t, r, h.action, a, f, h.managedShareSnapshotId))
                }),
                (p[2] = t),
                (p[3] = a),
                (p[4] = f),
                (p[5] = h),
                (p[6] = e),
                (p[7] = r),
                (p[8] = c))
              : (c = p[8]),
            p[9] !== h || p[10] !== c
              ? ((u = { reviewing: h, request: o, dismiss: d, confirm: c }), (p[9] = h), (p[10] = c), (p[11] = u))
              : (u = p[11]),
            u
          )
        },
        oQ: S,
        xI: j,
      },
    )
  },
  E353: function (e, t, r) {
    var n = r("DBCl"),
      a = r("ASxG"),
      s = r("svjy"),
      o = r("VVOG"),
      i = r("Sx7O")
    let l = a.Ikc({ project_id: a.YjP(), user_id: a.YjP(), checkout_path: a.YjP().min(1), source: o._n })
    r.d(
      t,
      {},
      {
        P: async function (e, t, r, a, o) {
          let d = () => {
            if (((0, i.n7)(e, t), e.get(i.Bm, t).data?.user_id !== r))
              throw Error(
                e
                  .get(s.g)
                  .formatMessage({
                    id: "presence.workstream.sourceUserChanged",
                    defaultMessage: "Your Presence account changed. Choose the starting point again",
                    description: "Blocks resolving a workstream source after the active Presence account changes",
                  }),
              )
          }
          d()
          let c = l.parse(
            await (0, i.qz)(e, t, "presence.workstreams.prepare_source", {
              project_id: t.projectId,
              expected_user_id: r,
              workstream_id: a.workstreamId,
              snapshot_id: a.snapshotId,
            }),
          )
          if (
            (d(),
            c.project_id !== t.projectId ||
              c.user_id !== r ||
              c.source.workstreamId !== a.workstreamId ||
              c.source.snapshotId !== a.snapshotId ||
              c.source.sourceRef !== a.sourceRef ||
              c.source.commitSha !== a.commitSha ||
              (null != o && !(0, n.y7N)(c.checkout_path, o)))
          )
            throw Error(
              e
                .get(s.g)
                .formatMessage({
                  id: "presence.workstream.sourceChanged",
                  defaultMessage: "The selected workstream commit or checkout changed. Choose the starting point again",
                  description:
                    "Error when a new Presence workstream no longer matches its approved source snapshot, project, user, or local checkout",
                }),
            )
          return c.source
        },
      },
    )
  },
  wseX: function (e, t, r) {
    var n = r("qmMi"),
      a = r("DBCl"),
      s = r("ASxG"),
      o = r("Wv1R"),
      i = r("OWtl"),
      l = r("VVOG"),
      d = r("ib9U"),
      c = r("NR6L"),
      u = r("Sx7O")
    let p = s.Ikc({ sidebarArea: s.euz("presence"), presence: u.kT, presenceWorkstreamChatStart: s.YjP().optional() }),
      h = (0, n.i1)(i.u, (e, { get: t }) => {
        let r = t(c.u, e)
        if (null == r || e.accountKey !== t(u.AQ) || null != t(u.nW, e)) return null
        let { data: n, error: a } = t(u.Bm, e),
          { data: s, error: o } = t(u.wG, e)
        return null == a &&
          null == o &&
          null != n &&
          null != s &&
          (null == n.sidebarIdentityKey || n.sidebarIdentityKey === r) &&
          (null == s.sidebarIdentityKey || s.sidebarIdentityKey === r) &&
          n.project.id === e.projectId &&
          s.project_id === e.projectId &&
          s.user_id === n.user_id &&
          "git_authoritative" === n.project.authoring_mode &&
          n.project.permissions.includes("sonata.project.snapshots.view")
          ? {
              userId: n.user_id,
              workstreams: s.workstreams.filter(
                (t) => t.project_id === e.projectId && t.id !== n.project.default_workstream_id,
              ),
            }
          : null
      }),
      g = (0, n.i1)(i.u, (e, { get: t }) => (t(l.My, e) ? t(h, e) : null)),
      m = (0, n.i1)(i.u, ({ context: e, workstreamId: t, userId: r, pathname: n }, { get: s }) => {
        let i = s(g, e),
          l = s(u.vo)
        if (null == i || null == l || (null != r && r !== i.userId) || !i.workstreams.some((e) => e.id === t))
          return null
        let c = s(o.L0, e.hostId).find(
          (t) =>
            "global" === t.entrypoint.type &&
            t.hostId === e.hostId &&
            t.pluginId === (0, d.ep)(e) &&
            (null == n || n === (0, a.CZl)(t.server, t.tool.name)),
        )
        return null == c
          ? null
          : { pathname: (0, a.CZl)(c.server, c.tool.name), hostId: e.hostId, resourceId: (0, u.WU)(e, i.userId, t, l) }
      })
    r.d(
      t,
      {},
      {
        Tl: g,
        pn: m,
        sD: h,
        zJ: function (e, t, r) {
          let n = new URLSearchParams(t),
            a = n.get("presenceStart")
          if (!a || "new" === a || n.has("presencePage")) return null
          let s = p.safeParse(r).data
          if (s?.presenceWorkstreamChatStart !== a) return null
          let { presence: o } = s
          return o.hostId === e.hostId ? { context: o, pathname: e.pathname, workstreamId: a } : null
        },
      },
    )
  },
  LApg: function (e, t, r) {
    var n = r("qmMi"),
      a = r("DBCl"),
      s = r("Ywss"),
      o = r("SPnB"),
      i = r("OWtl"),
      l = r("vfwt")
    function d({ pathname: e, hostId: t, resourceId: r }) {
      return `mcp-workspace:${encodeURIComponent(JSON.stringify(null == r ? [e, t] : [e, t, r]))}`
    }
    let c = (0, n.i1)(i.u, ({ hostId: e, resourceId: t }, { get: r }) => ({
        accountId: r(o.chatGptAuthenticatedAccountId$),
        userId: r(o.chatGptAuthenticatedUserId$),
        hostId: e,
        workspaceId: t,
      })),
      u = (0, n.T1)(i.u, (e) => {
        let t = d(e)
        return (0, l.X)({
          key: t,
          threadStorageKey: t,
          draftStorageKey: `${t}:draft-tabs`,
          identity: (t) => t.get(c, e),
          isActive: (t) => t.value.pathname === e.pathname,
        })
      }),
      p = (0, n.i1)(i.u, (e, { get: t }) => t(t(u, e).session$)),
      h = (0, n.bD)(i.u, (e) => null)
    r.d(
      t,
      {},
      {
        Nh: d,
        QH: p,
        TN: h,
        b5: function (e, t) {
          return null == (0, s.B6)(a.RNG, e)
            ? null
            : { pathname: e, hostId: new URLSearchParams(t).get("hostId") ?? "local" }
        },
        iG: u,
        w0: c,
      },
    )
  },
}
//# sourceMappingURL=827769.2fb54763d3.js.map
