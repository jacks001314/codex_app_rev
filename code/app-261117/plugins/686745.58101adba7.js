export const __rspack_esm_ids = [686745]
export const __webpack_modules__ = {
  SIrB(e, t, a) {
    let l = {
      document: ["document", "google-docs"],
      presentation: ["presentation", "google-slides"],
      spreadsheet: ["spreadsheet", "google-sheets"],
      site: ["site"],
    }
    function s(e) {
      return l[e]
    }
    a.d(
      t,
      {},
      {
        AH: function (e) {
          switch (e) {
            case "documents":
            case "documents-router":
            case "documents-router@openai-curated-remote":
            case "documents@openai-primary-runtime":
            case "connector_openai_documents":
            case "google-docs":
              return "document"
            case "presentations":
            case "presentations-router":
            case "presentations-router@openai-curated-remote":
            case "presentations@openai-primary-runtime":
            case "connector_openai_presentations":
            case "google-slides":
              return "presentation"
            case "spreadsheets":
            case "spreadsheets-router":
            case "spreadsheets-router@openai-curated-remote":
            case "spreadsheets@openai-primary-runtime":
            case "connector_openai_spreadsheets":
            case "google-sheets":
              return "spreadsheet"
            default:
              return null
          }
        },
        C$: function (e, t) {
          return e.filter((e) => t.includes(e.type))
        },
        IP: function (e, t) {
          let a = s(t),
            l = new Set()
          return e
            .filter(({ template: e, enabled: t }) => !(!t || !a.includes(e.type) || l.has(e.id)) && (l.add(e.id), !0))
            .toSorted((e, t) =>
              e.personal !== t.personal
                ? e.personal
                  ? -1
                  : 1
                : (e.personal && (t.template.createdAt ?? -1 / 0) - (e.template.createdAt ?? -1 / 0)) || 0,
            )
            .map(({ template: e }) => e)
        },
        K$: function e(t) {
          return "string" == typeof t ? "document" === t || "google-docs" === t : t.length > 0 && t.every(e)
        },
        Zk: function (e) {
          return Object.entries(l).find((t) => t[1].some((t) => t === e))?.[0] ?? null
        },
        qt: s,
      },
    )
  },
  K4Yp(e, t, a) {
    var l = a("ASxG")
    let s = l.k5n(["granola_workbook", "granola_presentation"]),
      n = l.Ikc({
        accountId: l.YjP().min(1),
        userId: l.YjP().min(1),
        hostId: l.YjP().min(1),
        threadId: l.YjP().min(1),
      }),
      i = n.extend({ artifactRef: l.YjP().min(1) }),
      o = l.Ikc({
        source: i,
        attemptId: l.uRe(),
        title: l.YjP().min(1),
        documentType: s,
        destination: l.euz("personal_file_drive").optional(),
        initialUpdate: l.YjP().min(1).optional(),
        imageFileIds: l.g1P(l.YjP().min(1), l.YjP().min(1)).optional(),
        snapshotSha256: l
          .YjP()
          .regex(/^[a-f0-9]{64}$/)
          .optional(),
        pageId: l.YjP().min(1).optional(),
        sourceReleased: l.zMY().optional(),
      }),
      r = l.Ikc({ source: i })
    l.YOg(l.KCZ([o, r]))
    let d = l.Ikc({
      source: n.extend({ path: l.YjP().min(1) }),
      pageId: l.YjP().min(1),
      title: l.YjP().min(1),
      documentType: s,
    })
    a.d(
      t,
      {},
      {
        LG: d,
        Nh: function (e, t) {
          return (
            e.accountId === t.accountId &&
            e.userId === t.userId &&
            e.hostId === t.hostId &&
            e.threadId === t.threadId &&
            e.artifactRef === t.artifactRef
          )
        },
        Qi: n,
        i9: s,
      },
    )
  },
  N55g(e, t, a) {
    var l = a("ABep"),
      s = a("QosV"),
      n = a("zd8w"),
      i = a("oyxz"),
      o = a("Fl60")
    a.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            a,
            r = (0, s.c)(5),
            { stage: d, errorClass: c } = e,
            u = (0, n.useContext)(o.b),
            p = u ? "true" : void 0,
            g = u ? (d ?? "") : void 0,
            m = u ? c : void 0
          return (
            r[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, l.jsx)(i.A, {
                  id: "dil.modelWrittenV2.responseFailure",
                  defaultMessage: "This response couldn\u2019t load",
                })),
                (r[0] = t))
              : (t = r[0]),
            r[1] !== p || r[2] !== g || r[3] !== m
              ? ((a = (0, l.jsx)("div", {
                  role: "status",
                  "data-dil-render-failed": "",
                  "data-internal-render-dil-render-failure": p,
                  "data-internal-render-dil-v2-failure-stage": g,
                  "data-internal-render-dil-v2-error-class": m,
                  children: t,
                })),
                (r[1] = p),
                (r[2] = g),
                (r[3] = m),
                (r[4] = a))
              : (a = r[4]),
            a
          )
        },
      },
    )
  },
  K5PF(e, t, a) {
    var l = a("SRbQ"),
      s = a("qmMi"),
      n = a("K4Yp"),
      i = a("G4E3"),
      o = a("SPnB"),
      r = a("svjy"),
      d = a("GaA7"),
      c = a("OWtl"),
      u = a("tv8P"),
      p = a("Ky0Z")
    async function g(e, t) {
      let a = d.appServices?.artifactSessions
      if (null == a) return null
      let s = (0, u.watchSpaceAccount)(e, t.accountId, t.userId)
      try {
        let n = { stack: [], error: void 0, hasError: !1 }
        try {
          s.signal.throwIfAborted()
          let o = (0, l.mS)(n, await a.readHandoff({ artifactRef: t.artifactRef, threadId: t.threadId }), !1)
          s.signal.throwIfAborted()
          let d = o.handoff
          if (d?.target == null) return null
          let c = (0, i.I0)(d.target.uri)
          if (c?.kind !== "page" || new URL(d.target.uri).searchParams.get("account_id") !== t.accountId)
            throw Error("artifact_handoff_account_changed")
          return {
            source: t,
            attemptId: d.attemptId,
            pageId: c.id,
            title:
              o.title ||
              e
                .get(r.g)
                .formatMessage({
                  id: "artifactHandoff.untitledDocument",
                  defaultMessage: "Untitled document",
                  description: "Fallback name for a shared local document without a title",
                }),
            documentType: "presentation" === o.kind ? "granola_presentation" : "granola_workbook",
            targetArtifactRef: d.target.artifactRef,
          }
        } catch (e) {
          ;((n.error = e), (n.hasError = !0))
        } finally {
          ;(0, l.hk)(n)
        }
      } finally {
        s.stop()
      }
    }
    let m = (0, s.vU)(c.u, (e, { get: t, scope: a }) => ({
        queryKey: [
          "artifact-shared-page",
          e,
          t(p.h, null == e ? null : n.Qi.parse(e))?.find((t) => null != e && (0, n.Nh)(t.source, e)),
        ],
        enabled:
          null != e &&
          d.appServices?.artifactSessions != null &&
          e.accountId === t(u.spaceAccountId$) &&
          e.userId === t(o.chatGptAuthenticatedUserId$),
        staleTime: 0,
        retry: !1,
        queryFn: () => (null == e ? Promise.resolve(null) : g(a, e)),
      })),
      f = (0, s.vU)(c.u, (e, { get: t, scope: a }) => {
        let s = t(u.spaceAccountId$),
          n = t(o.chatGptAuthenticatedUserId$),
          i = null == s || null == n ? null : { accountId: s, userId: n, hostId: e.hostId, threadId: e.conversationId }
        return {
          queryKey: ["artifact-shared-pages", e, s, n, t(p.h, i)],
          enabled: null != i && d.appServices?.artifactSessions != null && d.appServices?.artifactPageHandoffs != null,
          staleTime: 0,
          queryFn: async () => {
            let e = { stack: [], error: void 0, hasError: !1 }
            try {
              if (null == i || d.appServices?.artifactPageHandoffs == null) return []
              let t = (0, l.mS)(e, await d.appServices.artifactPageHandoffs.list(i), !1)
              return (await Promise.all(t.map((e) => g(a, e.source).catch(() => null)))).filter((e) => null != e)
            } catch (t) {
              ;((e.error = t), (e.hasError = !0))
            } finally {
              ;(0, l.hk)(e)
            }
          },
        }
      })
    a.d(t, { BK: () => f, V: () => g, Zj: () => m, h2: () => p.h })
  },
  Ky0Z(e, t, a) {
    var l = a("qmMi"),
      s = a("SPnB"),
      n = a("GaA7"),
      i = a("OWtl")
    let o = (0, l.A4)(
      i.u,
      (e) => null,
      (e, { set: t }) => {
        if (null == e) return void t([])
        let a = n.appServices?.artifactPageHandoffs
        if (null == a) return void t([])
        let l = !0,
          s = a.subscribe(e, (e) => {
            l && t(e)
          })
        return (
          Promise.resolve(s).catch(() => {
            l && t(null)
          }),
          () => {
            ;((l = !1), s[Symbol.dispose]())
          }
        )
      },
      { autoDispose: !0 },
    )
    a.d(
      t,
      {},
      {
        h: o,
        v: function (e, t, a) {
          let l = e.get(s.chatGptAuthenticatedAccountId$),
            i = e.get(s.chatGptAuthenticatedUserId$)
          if (null == l || null == i || n.appServices?.artifactPageHandoffs == null) return !1
          let r = e.get(o, { accountId: l, userId: i, hostId: t, threadId: a })
          return null == r || r.length > 0
        },
      },
    )
  },
  qvFq(e, t, a) {
    var l = a("DBCl"),
      s = a("G4E3"),
      n = a("r9ga"),
      i = a("uqg3"),
      o = a("tv8P")
    a.d(
      t,
      {},
      {
        $: function (e, t) {
          let a = new URL(`/space/${encodeURIComponent(t)}`, new URL(l.WaA).origin)
          return (a.searchParams.set("account_id", e), a.href)
        },
        openPageArtifactTarget: function (e, t, a, l) {
          let r = (0, s.I0)(t)
          if (r?.kind !== "page") return !1
          let d = new URL(t).searchParams.get("account_id")
          return (
            null != d &&
            d === e.get(o.spaceAccountId$) &&
            ((e.value.persistentWorkspace?.key !== "/space" &&
              (0, n.Kk)(e, e.value.pathname) === e.get(o.spacePageId$, r.id)) ||
              (0, i.openSpacePageSidePanelTab)(e, r.id, {
                openSource: l?.openSource,
                title: a,
                target: l?.target,
                revealAndFocus:
                  l?.revealAndFocus === "if-created"
                    ? null == (0, i.getOpenSpacePageTab)(e, d, r.id)
                    : l?.revealAndFocus,
              }).opened)
          )
        },
      },
    )
  },
  WT8y(e, t, a) {
    var l = a("rGp2")
    a.d(
      t,
      {},
      {
        Q: function (e, t) {
          let a = new URL(`/plugins/${encodeURIComponent(e)}`, "https://chatgpt.com")
          return (
            a.searchParams.set("no_universal_links", "1"),
            1 === t && (a.hash = `settings/Plugins/${encodeURIComponent(e)}?product-sku=CODEX`),
            a.toString()
          )
        },
        x: function ({ appId: e, installUrl: t, remotePluginId: a }) {
          let s = new URL(
            null == a ? "/plugins" : `/plugins/${encodeURIComponent(a)}`,
            t?.trim() || "https://chatgpt.com",
          )
          return (
            s.searchParams.set("no_universal_links", "1"),
            (s.hash =
              null == a
                ? `settings/Connectors?${new URLSearchParams({ connector: e, "product-sku": (0, l.MR)(), referrer: "codex" })}`
                : `settings/Plugins/${encodeURIComponent(a)}?product-sku=CODEX`),
            s.toString()
          )
        },
      },
    )
  },
  mYWF(e, t, a) {
    var l = a("DBCl"),
      s = a("rGp2"),
      n = a("hOO0"),
      i = a("ReGc"),
      o = a("WT8y")
    async function r(e, { appId: t, appName: a }) {
      let o = await e.query.getOrFetch(i.a)
      return new URL(
        (0, s.Cj)({ id: (0, n.$)(t), name: a, installUrl: new URL(o.chatGptDesktopAuthOrigin ?? l.WaA).origin }),
      )
    }
    a.d(t, { Hd: () => r, Y2: () => o.x, x1: () => o.Q })
  },
  bb3f(e, t, a) {
    a.d(t, { S: () => V })
    var l = a("ABep"),
      s = a("QosV"),
      n = a("bTvG"),
      i = a("slpy"),
      o = a("on57"),
      r = a("qmMi"),
      d = a("zd8w"),
      c = a("Qgfj"),
      u = a("Wf1j"),
      p = a("oyxz"),
      g = a("FvYa"),
      m = a("Sm6l"),
      f = a("RNul"),
      h = a("F0xz"),
      b = a("g7Qx"),
      x = a("Rvwy"),
      k = (e) =>
        (0, l.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, l.jsx)("path", {
            d: "M13.3333 4.16663L6.66663 15.8333",
            stroke: "currentColor",
            strokeWidth: 1.33,
            strokeLinecap: "round",
          }),
        }),
      y = a("Jqpj"),
      j = a("yGJW"),
      v = a("OWtl"),
      A = a("FpCZ"),
      P = a("ABMA"),
      S = a("HipH"),
      C = a("RVZl"),
      M = a("qTvt"),
      I = a("i1uX"),
      D = a("T0Rc"),
      w = a("xSOA"),
      T = a("Ywss"),
      _ = a("rGp2"),
      F = a("hOO0"),
      N = a("uc7r"),
      R = a("UOa8"),
      U = a("YitN"),
      E = a("bqtn"),
      O = a("UxN3"),
      B = a("GCsp"),
      L = a("MX3C"),
      Y = a("tlx5"),
      W = a("mYWF"),
      $ = a("rvFo"),
      G = a("soaw")
    function q(e) {
      let t,
        a,
        i,
        o,
        d,
        c,
        u,
        g,
        h,
        b,
        x,
        k,
        y,
        A,
        P,
        S,
        q,
        H,
        V = (0, s.c)(76),
        {
          app: z,
          children: K,
          canReconnect: Q,
          disabled: Z,
          hideAppConnectionDropdown: J,
          requiresReauth: X,
          remotePluginId: ee,
          onInstallApp: et,
          onDisconnectApp: ea,
          onOpenPluginSettingsUrl: el,
        } = e,
        es = (0, r.gh)(v.u),
        en = (0, G.a)(),
        { accountId: ei, authMethod: eo, isLoading: er, userId: ed } = (0, R.As)(),
        ec = "chatgpt" === eo || "chatgptAuthTokens" === eo
      V[0] !== z.id ? ((t = (0, _.rJ)(z.id)), (V[0] = z.id), (V[1] = t)) : (t = V[1])
      let eu = !!ei && !!ed && z.isAccessible && (J || null != ea || null != el)
      V[2] !== t || V[3] !== eu
        ? ((a = { ...t, enabled: eu, retry: !1, staleTime: $.D.FIVE_MINUTES }), (V[2] = t), (V[3] = eu), (V[4] = a))
        : (a = V[4])
      let { data: ep, isError: eg, isFetching: em, refetch: ef } = (0, D.I)(a),
        eh = (er || ec) && (null == ep || eg)
      V[5] !== z.id || V[6] !== ep || V[7] !== eh
        ? ((i = !eh && (0, F.aW)(z.id, ep)), (V[5] = z.id), (V[6] = ep), (V[7] = eh), (V[8] = i))
        : (i = V[8])
      let eb = i
      V[9] !== ei || V[10] !== ed
        ? ((o = (0, N.dZ)({ accountId: ei, userId: ed })), (V[9] = ei), (V[10] = ed), (V[11] = o))
        : (o = V[11])
      let ex = o,
        ek = null != ea && z.isAccessible && !eb && !!ei && !!ed
      V[12] !== ex || V[13] !== ek
        ? ((d = { ...ex, staleTime: ex.staleTime, enabled: ek }), (V[12] = ex), (V[13] = ek), (V[14] = d))
        : (d = V[14])
      let { data: ey, isError: ej, isFetching: ev, refetch: eA } = (0, D.I)(d)
      V[15] !== z.id || V[16] !== ey
        ? ((c = null != ey && (0, L.Tm)(ey, z.id).length > 1), (V[15] = z.id), (V[16] = ey), (V[17] = c))
        : (c = V[17])
      let eP = c,
        eS = er || eh || em || (!eb && (eP || (ec && (null == ey || ej || ev))))
      V[18] === Symbol.for("react.memo_cache_sentinel") ? ((u = { enabled: !1 }), (V[18] = u)) : (u = V[18])
      let { isError: eC, isFetching: eM, refetch: eI } = (0, U.rT)(u),
        eD = (!ei || !ed) && eC
      V[19] !== z.id || V[20] !== z.installUrl || V[21] !== ee
        ? ((g = (0, W.Y2)({ appId: z.id, installUrl: z.installUrl, remotePluginId: ee })),
          (V[19] = z.id),
          (V[20] = z.installUrl),
          (V[21] = ee),
          (V[22] = g))
        : (g = V[22])
      let ew = g
      V[23] !== z || V[24] !== eS || V[25] !== en || V[26] !== ex || V[27] !== ea || V[28] !== es || V[29] !== ec
        ? ((h = {
            mutationFn: async () => {
              if (!eS) {
                if (((0, j.yy)(es, n.nt, { name: "CHATGPT_APP_CLICK_TARGET_DISCONNECT", connectorId: z.id }), ec))
                  try {
                    let e = await es.queryClient.fetchQuery({ ...ex, staleTime: 0 })
                    if ((0, L.Tm)(e, z.id).length > 1) return
                  } catch {
                    return
                  }
                en() && (await ea?.(z))
              }
            },
          }),
          (V[23] = z),
          (V[24] = eS),
          (V[25] = en),
          (V[26] = ex),
          (V[27] = ea),
          (V[28] = es),
          (V[29] = ec),
          (V[30] = h))
        : (h = V[30])
      let { isPending: eT, mutate: e_ } = (0, w.n)(h)
      if (J && (eh || eb)) return null
      if (null != K) return K
      if (eT) {
        let e
        ;(V[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(p.A, { id: "skills.appsPage.apps.disconnecting", defaultMessage: "Disconnecting\u2026" })),
            (V[31] = e))
          : (e = V[31]),
          (b = e))
      } else if (X) {
        let e
        ;(V[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(p.A, { id: "plugins.detail.app.reauthRequired", defaultMessage: "Reconnect required" })),
            (V[32] = e))
          : (e = V[32]),
          (b = e))
      } else {
        let e
        ;(V[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)("span", { className: "size-1.5 shrink-0 rounded-full bg-chart-green" }),
                (0, l.jsx)(p.A, { id: "skills.appsPage.apps.connected", defaultMessage: "Connected" }),
              ],
            })),
            (V[33] = e))
          : (e = V[33]),
          (b = e))
      }
      let eF = Z || eT,
        eN = Z && !eT,
        eR = eT || void 0
      return (
        V[34] !== eT
          ? ((x = eT && (0, l.jsx)(f.y, { className: "icon-xxs" })), (V[34] = eT), (V[35] = x))
          : (x = V[35]),
        V[36] !== b
          ? ((k = (0, l.jsx)("span", { className: "flex items-center gap-1.5", children: b })),
            (V[36] = b),
            (V[37] = k))
          : (k = V[37]),
        V[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, l.jsx)(O.bF, {
              className: "shrink-0 text-codex-description",
              "aria-hidden": !1,
              asset16: M.K,
              legacyIcon: B.A,
              legacyClassName: "icon-2xs",
            })),
            (V[38] = y))
          : (y = V[38]),
        V[39] !== eN || V[40] !== eR || V[41] !== x || V[42] !== k
          ? ((A = (0, l.jsxs)(m.$, {
              className: "gap-1.5 text-sm",
              color: "outline",
              size: "toolbar",
              disabled: eN,
              "aria-busy": eR,
              children: [x, k, y],
            })),
            (V[39] = eN),
            (V[40] = eR),
            (V[41] = x),
            (V[42] = k),
            (V[43] = A))
          : (A = V[43]),
        V[44] !== ei ||
        V[45] !== eD ||
        V[46] !== eM ||
        V[47] !== eg ||
        V[48] !== em ||
        V[49] !== ej ||
        V[50] !== ev ||
        V[51] !== eb ||
        V[52] !== ea ||
        V[53] !== eI ||
        V[54] !== ef ||
        V[55] !== eA ||
        V[56] !== ed ||
        V[57] !== ec
          ? ((P =
              ec && (eD || eg || (!eb && null != ea && ej))
                ? (0, l.jsx)(E.ms.Item, {
                    leftIconAsset: C.S,
                    disabled: eM || em || ev,
                    onSelect: (e) => {
                      ;(e.preventDefault(), ei && ed ? Promise.all([ef(), eb || null == ea ? void 0 : eA()]) : eI())
                    },
                    children: (0, l.jsx)(p.A, {
                      id: "skills.appsPage.apps.retryConnectionOptions",
                      defaultMessage: "Retry loading connection options",
                    }),
                  })
                : null),
            (V[44] = ei),
            (V[45] = eD),
            (V[46] = eM),
            (V[47] = eg),
            (V[48] = em),
            (V[49] = ej),
            (V[50] = ev),
            (V[51] = eb),
            (V[52] = ea),
            (V[53] = eI),
            (V[54] = ef),
            (V[55] = eA),
            (V[56] = ed),
            (V[57] = ec),
            (V[58] = P))
          : (P = V[58]),
        V[59] !== z || V[60] !== Q || V[61] !== et
          ? ((S = Q
              ? (0, l.jsx)(E.ms.Item, {
                  leftIconAsset: C.S,
                  onSelect: () => {
                    et(z)
                  },
                  children: (0, l.jsx)(p.A, { id: "skills.appsPage.apps.reconnect", defaultMessage: "Reconnect" }),
                })
              : null),
            (V[59] = z),
            (V[60] = Q),
            (V[61] = et),
            (V[62] = S))
          : (S = V[62]),
        V[63] !== e_ || V[64] !== eS || V[65] !== eb || V[66] !== ea || V[67] !== el || V[68] !== ew
          ? ((q =
              null == ea
                ? null
                : (0, l.jsx)(E.ms.Item, {
                    leftIconAsset: I.Q,
                    disabled: eS,
                    tone: "danger",
                    asChild: eb,
                    href: eb ? ew : void 0,
                    onSelect: eb ? void 0 : () => e_(),
                    children: eb
                      ? (0, l.jsx)(T.N_, {
                          to: ew,
                          onClick: (e) => (0, Y.y)(e, () => el?.(ew)),
                          children: (0, l.jsx)(p.A, {
                            id: "skills.appsPage.apps.disconnect",
                            defaultMessage: "Disconnect",
                          }),
                        })
                      : (0, l.jsx)(p.A, { id: "skills.appsPage.apps.disconnect", defaultMessage: "Disconnect" }),
                  })),
            (V[63] = e_),
            (V[64] = eS),
            (V[65] = eb),
            (V[66] = ea),
            (V[67] = el),
            (V[68] = ew),
            (V[69] = q))
          : (q = V[69]),
        V[70] !== eF || V[71] !== A || V[72] !== P || V[73] !== S || V[74] !== q
          ? ((H = (0, l.jsxs)(E.Ab, {
              align: "end",
              contentWidth: "xs",
              disabled: eF,
              triggerButton: A,
              children: [P, S, q],
            })),
            (V[70] = eF),
            (V[71] = A),
            (V[72] = P),
            (V[73] = S),
            (V[74] = q),
            (V[75] = H))
          : (H = V[75]),
        H
      )
    }
    let H = (0, c.YK)({
      noDescription: { id: "skills.appsPage.apps.noDescription", defaultMessage: "No description" },
      disableToggleTooltip: { id: "skills.appsPage.apps.disableToggle", defaultMessage: "Disable app" },
      enableToggleTooltip: { id: "skills.appsPage.apps.enableToggleTooltip", defaultMessage: "Enable app" },
      unattributedDisablement: {
        id: "skills.appsPage.apps.unattributedDisablement",
        defaultMessage: "This app is disabled",
      },
      loadingProjectSettings: {
        id: "skills.appsPage.apps.loadingProjectSettings",
        defaultMessage: "Loading project settings\u2026",
      },
      enableToggleAria: { id: "skills.appsPage.apps.enableToggle", defaultMessage: "Enable app" },
      connectingApp: { id: "skills.appsPage.apps.connecting", defaultMessage: "Continue connecting app" },
      connectApp: { id: "skills.appsPage.apps.connect", defaultMessage: "Connect" },
      enabledStatus: { id: "skills.appsPage.apps.enabledStatus", defaultMessage: "App enabled" },
      disabledStatus: { id: "skills.appsPage.apps.disabledStatus", defaultMessage: "App disabled" },
    })
    function V(e) {
      let t,
        a,
        c,
        C,
        M,
        I,
        D,
        w,
        T = (0, s.c)(101),
        {
          app: _,
          appRestriction: F,
          cardIcon: N,
          cardIconContainer: R,
          cardIconContainerVariant: U,
          cardIconPlacement: E,
          cardDescriptionPlacement: O,
          badges: B,
          blockedStatusLabel: L,
          connectButtonImpressionSurface: Y,
          connectionAction: W,
          disabledTooltip: $,
          className: G,
          canReconnect: V,
          hideAppConnectionDropdown: X,
          installBlockedReason: ee,
          installedStateAction: et,
          installActionDisabled: ea,
          installActionType: el,
          installActionLabel: es,
          isConfigPending: en,
          isConnectionUnavailable: ei,
          requiresReauth: eo,
          manageAction: er,
          remotePluginId: ed,
          presentation: ec,
          isConnectingApp: eu,
          showInstallAction: ep,
          updatingAppId: eg,
          onInstallApp: em,
          onOpenAppTools: ef,
          onDisconnectApp: eh,
          onOpenPluginSettingsUrl: eb,
          onSetAppEnabled: ex,
        } = e,
        ek = void 0 === F ? null : F,
        ey = void 0 === R || R,
        ej = void 0 === V || V,
        ev = void 0 === et ? "check" : et,
        eA = void 0 === el ? "connect" : el,
        eP = void 0 !== en && en,
        eS = void 0 !== ei && ei,
        eC = void 0 !== eo && eo,
        eM = void 0 === er ? "button" : er,
        eI = void 0 === ep || ep,
        eD = (0, r.gh)(v.u),
        ew = (0, d.useRef)(null),
        eT = (0, u.A)()
      T[0] !== _ || T[1] !== N
        ? ((t =
            N ??
            (0, l.jsx)(g.R, {
              alt: _.name,
              appInfo: _,
              className: "icon-md",
              fallback: (0, l.jsx)(x.A, { className: "icon-sm text-secondary" }),
            })),
          (T[0] = _),
          (T[1] = N),
          (T[2] = t))
        : (t = T[2])
      let e_ = t
      T[3] !== es || T[4] !== eT
        ? ((a = es ?? eT.formatMessage(H.connectApp)), (T[3] = es), (T[4] = eT), (T[5] = a))
        : (a = T[5])
      let eF = a,
        eN = _.isEnabled && null == ek,
        eR = _.appMetadata?.firstPartyRequiresInstall === !1,
        eU = ek?.isUserEditable === !1,
        eE = "disabled-by-admin" === (void 0 === ee ? null : ee) && !_.isAccessible,
        eO = eg === _.id,
        eB = eO || eU || eP,
        eL = eE || eS || (void 0 !== ea && ea) || eU || eP || eO || (null != ek && null == ex),
        eY = eu || eO || eP || eS,
        eW = !eR && void 0 !== X && X && "menu" === eM && eN
      T[6] !== _ ||
      T[7] !== ej ||
      T[8] !== eY ||
      T[9] !== eh ||
      T[10] !== em ||
      T[11] !== eb ||
      T[12] !== ed ||
      T[13] !== eC ||
      T[14] !== eW
        ? ((c = {
            app: _,
            canReconnect: ej,
            disabled: eY,
            hideAppConnectionDropdown: eW,
            requiresReauth: eC,
            remotePluginId: ed,
            onInstallApp: em,
            onDisconnectApp: eh,
            onOpenPluginSettingsUrl: eb,
          }),
          (T[6] = _),
          (T[7] = ej),
          (T[8] = eY),
          (T[9] = eh),
          (T[10] = em),
          (T[11] = eb),
          (T[12] = ed),
          (T[13] = eC),
          (T[14] = eW),
          (T[15] = c))
        : (c = T[15])
      let e$ = c,
        eG = null
      if (eS) {
        let e
        ;(T[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(p.A, { id: "plugins.detail.app.unavailable", defaultMessage: "This app is unavailable" })),
            (T[16] = e))
          : (e = T[16]),
          (eG = e))
      } else if (eP) {
        let e
        ;(T[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(p.A, { ...H.loadingProjectSettings })), (T[17] = e))
          : (e = T[17]),
          (eG = e))
      } else if (ek?.isUserEditable === !1) {
        let e
        ;(T[18] !== ek
          ? ((e = (0, l.jsx)(S.ns, { restriction: ek, surface: "card" })), (T[18] = ek), (T[19] = e))
          : (e = T[19]),
          (eG = e))
      } else if (null == ek && _.isAccessible && !_.isEnabled) {
        let e
        ;(T[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(p.A, { ...H.unattributedDisablement })), (T[20] = e))
          : (e = T[20]),
          (eG = e))
      }
      T[21] !== _ ||
      T[22] !== eG ||
      T[23] !== ek ||
      T[24] !== L ||
      T[25] !== eF ||
      T[26] !== Y ||
      T[27] !== W ||
      T[28] !== e$ ||
      T[29] !== eA ||
      T[30] !== ev ||
      T[31] !== eT ||
      T[32] !== eP ||
      T[33] !== eU ||
      T[34] !== eu ||
      T[35] !== eN ||
      T[36] !== eR ||
      T[37] !== eL ||
      T[38] !== eE ||
      T[39] !== eB ||
      T[40] !== eO ||
      T[41] !== eM ||
      T[42] !== em ||
      T[43] !== ex ||
      T[44] !== ed ||
      T[45] !== eD ||
      T[46] !== eI
        ? ((C =
            (_.isAccessible && !eN ? void 0 : W) ??
            (eE && null != L
              ? (0, l.jsx)("span", {
                  className: "flex h-7 w-7 shrink-0 items-center justify-center text-secondary",
                  children: L,
                })
              : _.isAccessible && "toggle" === ev
                ? (0, l.jsx)("div", {
                    className: "flex items-center gap-2",
                    children:
                      "menu" !== eM || eR
                        ? (0, l.jsx)("div", {
                            role: "presentation",
                            onClick: Q,
                            onKeyDown: K,
                            children: (0, l.jsx)(S._O, {
                              "data-state": eN ? "checked" : "unchecked",
                              isControlDisabled: eB,
                              isExplanationFocusable: null != eG,
                              content:
                                eG ??
                                (eN
                                  ? (0, l.jsx)(p.A, { ...H.disableToggleTooltip })
                                  : (0, l.jsx)(p.A, { ...H.enableToggleTooltip })),
                              children: (0, l.jsx)(h.l, {
                                checked: eN,
                                disabled: eB,
                                onChange: (e) => {
                                  ex?.({ appId: _.id, enabled: e })
                                },
                                ariaLabel: eT.formatMessage(H.enableToggleAria),
                              }),
                            }),
                          })
                        : (0, l.jsx)("div", {
                            role: "presentation",
                            onClick: J,
                            onKeyDown: Z,
                            children: eN
                              ? (0, l.jsx)(q, { ...e$ })
                              : (0, l.jsx)(S._O, {
                                  disabled: !eB,
                                  isControlDisabled: eB,
                                  isExplanationFocusable: null != eG,
                                  content: eG,
                                  children: (0, l.jsx)(m.$, {
                                    "aria-label": eF,
                                    className: "shrink-0",
                                    color: "outline",
                                    size: "toolbar",
                                    disabled: eU || eP,
                                    loading: eO,
                                    onClick: () => {
                                      ex?.({ appId: _.id, enabled: !0 })
                                    },
                                    children: eF,
                                  }),
                                }),
                          }),
                  })
                : eI && (!eR || _.isAccessible)
                  ? (0, l.jsx)(q, {
                      ...e$,
                      children: _.isAccessible
                        ? (0, l.jsx)(P.y, {
                            ariaLabel: eT.formatMessage(eN ? H.enabledStatus : H.disabledStatus),
                            icon: eN
                              ? (0, l.jsx)(b.A, { className: "icon-sm" })
                              : (0, l.jsx)(k, { className: "icon-sm" }),
                          })
                        : (0, l.jsx)(S._O, {
                            disabled: !eE && !eu && (null == eG || !eL),
                            isControlDisabled: eL,
                            isExplanationFocusable: null != eG,
                            content: eE
                              ? (0, l.jsx)(p.A, {
                                  id: "plugins.install.disabledByAdmin",
                                  defaultMessage: "Disabled by admin",
                                })
                              : eu
                                ? (0, l.jsx)(p.A, { ...H.connectingApp })
                                : (eG ?? eF),
                            children: (0, l.jsx)(m.$, {
                              ref: (e) => {
                                if (null == e || null == ed || null == Y || eL || eu) return
                                let t = `${ed}:${_.id}`
                                ew.current !== t &&
                                  ((ew.current = t),
                                  (0, j.yy)(eD, n.Wn, { pluginId: ed, connectorId: _.id, surface: Y }))
                              },
                              className: "shrink-0",
                              color: "outline",
                              size: "toolbar",
                              disabled: eL,
                              "aria-label": eu ? eT.formatMessage(H.connectingApp) : eF,
                              onClick: (e) => {
                                if ((e.stopPropagation(), !eL)) {
                                  if (
                                    ("connect" === eA &&
                                      (0, j.yy)(eD, n.nt, {
                                        name: "CHATGPT_APP_CLICK_TARGET_CONNECT",
                                        connectorId: _.id,
                                      }),
                                    null == ek)
                                  )
                                    return void em(_)
                                  ex?.({ appId: _.id, enabled: !0 }).then(() => em(_), z)
                                }
                              },
                              children: eu ? (0, l.jsx)(f.y, { className: "icon-xxs" }) : eF,
                            }),
                          }),
                    })
                  : null)),
          (T[21] = _),
          (T[22] = eG),
          (T[23] = ek),
          (T[24] = L),
          (T[25] = eF),
          (T[26] = Y),
          (T[27] = W),
          (T[28] = e$),
          (T[29] = eA),
          (T[30] = ev),
          (T[31] = eT),
          (T[32] = eP),
          (T[33] = eU),
          (T[34] = eu),
          (T[35] = eN),
          (T[36] = eR),
          (T[37] = eL),
          (T[38] = eE),
          (T[39] = eB),
          (T[40] = eO),
          (T[41] = eM),
          (T[42] = em),
          (T[43] = ex),
          (T[44] = ed),
          (T[45] = eD),
          (T[46] = eI),
          (T[47] = C))
        : (C = T[47])
      let eq = C
      if ("settings" === ec) {
        let e, t, a, s, n
        ;(T[48] !== _.description
          ? ((e = _.description ?? (0, l.jsx)(p.A, { ...H.noDescription })), (T[48] = _.description), (T[49] = e))
          : (e = T[49]),
          T[50] !== e
            ? ((t = (0, l.jsx)("div", { className: "line-clamp-1", children: e })), (T[50] = e), (T[51] = t))
            : (t = T[51]))
        let o = null != $ || null == ef
        return (
          T[52] !== _ || T[53] !== ef ? ((a = () => ef?.(_)), (T[52] = _), (T[53] = ef), (T[54] = a)) : (a = T[54]),
          T[55] !== eq ||
          T[56] !== _.id ||
          T[57] !== _.logoUrl ||
          T[58] !== _.logoUrlDark ||
          T[59] !== _.name ||
          T[60] !== t ||
          T[61] !== o ||
          T[62] !== a
            ? ((s = (0, l.jsx)(A.R, {
                label: _.name,
                description: t,
                logoUrl: _.logoUrl,
                logoDarkUrl: _.logoUrlDark,
                knownAppId: _.id,
                actions: eq,
                disabled: o,
                onClick: a,
              })),
              (T[55] = eq),
              (T[56] = _.id),
              (T[57] = _.logoUrl),
              (T[58] = _.logoUrlDark),
              (T[59] = _.name),
              (T[60] = t),
              (T[61] = o),
              (T[62] = a),
              (T[63] = s))
            : (s = T[63]),
          T[64] !== $ || T[65] !== s
            ? ((n = (0, l.jsx)(i.m, { content: $, children: s })), (T[64] = $), (T[65] = s), (T[66] = n))
            : (n = T[66]),
          n
        )
      }
      if (null != $) {
        let e, t
        return (
          T[67] !== _.description
            ? ((e = _.description ?? (0, l.jsx)(p.A, { ...H.noDescription })), (T[67] = _.description), (T[68] = e))
            : (e = T[68]),
          T[69] !== _.name ||
          T[70] !== L ||
          T[71] !== O ||
          T[72] !== ey ||
          T[73] !== U ||
          T[74] !== E ||
          T[75] !== G ||
          T[76] !== $ ||
          T[77] !== e_ ||
          T[78] !== ec ||
          T[79] !== e
            ? ((t = (0, l.jsx)(y.D, {
                className: G,
                contentClassName: "opacity-60",
                disabled: !0,
                icon: e_,
                iconContainer: ey,
                iconContainerVariant: U,
                iconPlacement: E,
                title: _.name,
                description: e,
                descriptionClassName: "line-clamp-1",
                descriptionPlacement: O,
                presentation: ec,
                actions: L,
                actionsPlacement: "center",
                tooltip: $,
              })),
              (T[69] = _.name),
              (T[70] = L),
              (T[71] = O),
              (T[72] = ey),
              (T[73] = U),
              (T[74] = E),
              (T[75] = G),
              (T[76] = $),
              (T[77] = e_),
              (T[78] = ec),
              (T[79] = e),
              (T[80] = t))
            : (t = T[80]),
          t
        )
      }
      return (
        T[81] !== G ? ((M = (0, o.A)("group justify-center border-none", G)), (T[81] = G), (T[82] = M)) : (M = T[82]),
        T[83] !== _.description
          ? ((I = _.description ?? (0, l.jsx)(p.A, { ...H.noDescription })), (T[83] = _.description), (T[84] = I))
          : (I = T[84]),
        T[85] !== _ || T[86] !== ef
          ? ((D =
              null == ef
                ? void 0
                : () => {
                    ef(_)
                  }),
            (T[85] = _),
            (T[86] = ef),
            (T[87] = D))
          : (D = T[87]),
        T[88] !== eq ||
        T[89] !== _.name ||
        T[90] !== B ||
        T[91] !== O ||
        T[92] !== ey ||
        T[93] !== U ||
        T[94] !== E ||
        T[95] !== e_ ||
        T[96] !== ec ||
        T[97] !== M ||
        T[98] !== I ||
        T[99] !== D
          ? ((w = (0, l.jsx)(y.D, {
              className: M,
              actionsPlacement: "center",
              iconContainer: ey,
              iconContainerVariant: U,
              iconPlacement: E,
              icon: e_,
              title: _.name,
              badges: B,
              description: I,
              descriptionClassName: "line-clamp-1",
              descriptionPlacement: O,
              presentation: ec,
              onClick: D,
              actions: eq,
            })),
            (T[88] = eq),
            (T[89] = _.name),
            (T[90] = B),
            (T[91] = O),
            (T[92] = ey),
            (T[93] = U),
            (T[94] = E),
            (T[95] = e_),
            (T[96] = ec),
            (T[97] = M),
            (T[98] = I),
            (T[99] = D),
            (T[100] = w))
          : (w = T[100]),
        w
      )
    }
    function z() {}
    function K(e) {
      e.stopPropagation()
    }
    function Q(e) {
      e.stopPropagation()
    }
    function Z(e) {
      e.stopPropagation()
    }
    function J(e) {
      e.stopPropagation()
    }
  },
  HipH(e, t, a) {
    a.d(t, { ns: () => g, _O: () => p, QW: () => m })
    var l = a("ABep"),
      s = a("QosV"),
      n = a("slpy")
    let i = (0, a("ESTr").a)({
      name: "person-badge-lock-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.037598, y: 1.346436, width: 12.633667, height: 13.767578 },
        visualBounds: { x: 2.037598, y: 1.346436, width: 12.633667, height: 13.767578 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.037598, y: 1.346436, width: 12.633667, height: 13.767578 },
        center: { x: 8.354432, y: 8.230225 },
        insets: { top: 1.346436, right: 1.328735, bottom: 0.885986, left: 2.037598 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.354432, y: 8.230225 }, foreground: { x: 8.354432, y: 8.230225 } },
      },
      capabilities: ["icon"],
      body: '<path d="M11.6664 8.21167C12.7978 8.2117 13.7152 9.12905 13.7152 10.2605V10.488C14.2752 10.7126 14.6712 11.2599 14.6713 11.9001V13.5916C14.671 14.4317 13.99 15.114 13.1498 15.114H10.183C9.34287 15.1139 8.66176 14.4316 8.6615 13.5916V11.9001C8.66161 11.2599 9.05756 10.7126 9.61755 10.488V10.2605C9.61755 9.12903 10.5349 8.21167 11.6664 8.21167ZM10.183 11.2888C9.84538 11.289 9.5718 11.5625 9.57166 11.9001V13.5916C9.57192 13.9291 9.84545 14.2037 10.183 14.2039H13.1498C13.4874 14.2038 13.7608 13.9291 13.7611 13.5916V11.9001C13.761 11.5625 13.4875 11.2888 13.1498 11.2888H10.183ZM11.6664 9.12183C11.0375 9.12183 10.5277 9.63161 10.5277 10.2605V10.3787H12.8051V10.2605C12.8051 9.63163 12.2952 9.12186 11.6664 9.12183Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M7.65955 8.83276C7.92998 8.83299 8.1488 9.05252 8.1488 9.323C8.14867 9.59337 7.9299 9.81301 7.65955 9.81323C5.22325 9.81323 3.22288 11.6828 3.01599 14.0652C2.99234 14.3344 2.75495 14.5336 2.48572 14.5105C2.21623 14.4871 2.01622 14.2497 2.03943 13.9802C2.28992 11.0958 4.71044 8.83276 7.65955 8.83276Z" fill="currentColor"/> <path d="M7.65955 1.34644C9.39678 1.34679 10.8051 2.7556 10.8051 4.49292C10.805 6.23016 9.39673 7.63808 7.65955 7.63843C5.92207 7.63843 4.51315 6.23038 4.51306 4.49292C4.51306 2.75538 5.92201 1.34644 7.65955 1.34644ZM7.65955 2.3269C6.46325 2.3269 5.49353 3.29662 5.49353 4.49292C5.49362 5.68914 6.4633 6.65894 7.65955 6.65894C8.85549 6.65858 9.82547 5.68892 9.82556 4.49292C9.82556 3.29684 8.85554 2.32726 7.65955 2.3269Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var o = a("zd8w"),
      r = a("oyxz"),
      d = a("Wf1j"),
      c = a("Qgfj"),
      u = a("HOLv")
    function p(e) {
      let t,
        a,
        i,
        r,
        d,
        c = (0, s.c)(16)
      c[0] !== e
        ? (({ children: t, isControlDisabled: a, isExplanationFocusable: i, ...r } = e),
          (c[0] = e),
          (c[1] = t),
          (c[2] = a),
          (c[3] = i),
          (c[4] = r))
        : ((t = c[1]), (a = c[2]), (i = c[3]), (r = c[4]))
      let u = t
      if (a && null != r.content && !0 !== r.disabled)
        if (i) {
          let e,
            a,
            s =
              t.props.ariaLabel ??
              t.props["aria-label"] ??
              ("string" == typeof t.props.children ? t.props.children : void 0)
          c[7] !== t ? ((e = (0, o.cloneElement)(t, { "aria-hidden": !0 })), (c[7] = t), (c[8] = e)) : (e = c[8])
          let n = e
          ;(c[9] !== t.props.checked || c[10] !== n || c[11] !== s
            ? ((a =
                "boolean" == typeof t.props.checked
                  ? (0, l.jsx)("div", {
                      "aria-checked": t.props.checked,
                      "aria-disabled": "true",
                      "aria-label": s,
                      role: "switch",
                      tabIndex: 0,
                      children: n,
                    })
                  : (0, l.jsx)("div", {
                      "aria-disabled": "true",
                      "aria-label": s,
                      role: "button",
                      tabIndex: 0,
                      children: n,
                    })),
              (c[9] = t.props.checked),
              (c[10] = n),
              (c[11] = s),
              (c[12] = a))
            : (a = c[12]),
            (u = a))
        } else {
          let e
          ;(c[5] !== t ? ((e = (0, l.jsx)("div", { children: t })), (c[5] = t), (c[6] = e)) : (e = c[6]), (u = e))
        }
      return (
        c[13] !== r || c[14] !== u
          ? ((d = (0, l.jsx)(n.m, { ...r, children: u })), (c[13] = r), (c[14] = u), (c[15] = d))
          : (d = c[15]),
        d
      )
    }
    function g(e) {
      let t,
        a = (0, s.c)(7),
        { restriction: n, surface: i } = e,
        o = n.origin?.name
      if (o?.type === "project") {
        let e
        if ("dialog" === i) {
          let e
          return (
            a[0] !== n.keyPath
              ? ((e = (0, l.jsx)(r.A, {
                  id: "skills.appsPage.appDisablement.projectSettingsDialog",
                  defaultMessage: "Set {keyPath} to true in this project\u2019s config.toml to enable this app",
                  values: { keyPath: n.keyPath },
                })),
                (a[0] = n.keyPath),
                (a[1] = e))
              : (e = a[1]),
            e
          )
        }
        return (
          a[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(r.A, {
                id: "skills.appsPage.appDisablement.projectSettingsCard",
                defaultMessage:
                  "Disabled by project settings. Update this project\u2019s config.toml to enable this app",
              })),
              (a[2] = e))
            : (e = a[2]),
          e
        )
      }
      if (o?.type === "legacyManagedConfigTomlFromMdm") {
        let e
        return (
          a[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(r.A, {
                id: "skills.appsPage.appDisablement.legacyDeviceManagement",
                defaultMessage: "Disabled by device management",
              })),
              (a[3] = e))
            : (e = a[3]),
          e
        )
      }
      if (o?.type === "legacyManagedConfigTomlFromFile") {
        let e
        return (
          a[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(r.A, {
                id: "skills.appsPage.appDisablement.administratorPolicy",
                defaultMessage: "Disabled by your administrator",
              })),
              (a[4] = e))
            : (e = a[4]),
          e
        )
      }
      if (o?.type === "sessionFlags") {
        let e
        return (
          a[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(r.A, {
                id: "skills.appsPage.appDisablement.sessionSettings",
                defaultMessage: "Disabled by session configuration",
              })),
              (a[5] = e))
            : (e = a[5]),
          e
        )
      }
      return (
        a[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(r.A, {
              id: "skills.appsPage.appDisablement.otherConfiguration",
              defaultMessage: "Disabled by configuration",
            })),
            (a[6] = t))
          : (t = a[6]),
        t
      )
    }
    function m(e) {
      let t,
        a,
        o,
        c,
        p,
        g = (0, s.c)(22),
        { appId: m, isAppDisabledWithoutRestriction: h, tool: b } = e,
        x = (0, d.A)()
      if ("disabled_by_admin" === b.disabledReason) {
        let e
        return (
          g[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsxs)("div", {
                className: "mt-1 flex items-center gap-1 text-xs text-secondary",
                children: [
                  (0, l.jsx)(u.I, { className: "shrink-0", "aria-hidden": !1, asset: i }),
                  (0, l.jsx)(r.A, { ...f.disabledByAdminTool }),
                ],
              })),
              (g[0] = e))
            : (e = g[0]),
          e
        )
      }
      let k = b.configRestriction
      if (null == k || h) {
        let e
        return (
          g[1] !== h || g[2] !== b.isEnabled
            ? ((e =
                !1 === b.isEnabled || h
                  ? (0, l.jsx)("div", {
                      className: "mt-1 text-xs text-secondary",
                      children: (0, l.jsx)(r.A, { ...f.unavailableTool }),
                    })
                  : null),
              (g[1] = h),
              (g[2] = b.isEnabled),
              (g[3] = e))
            : (e = g[3]),
          e
        )
      }
      let y = k.origin?.name
      g[4] !== x || g[5] !== y?.type
        ? ((t = x.formatMessage(f.configuredDisablementToolSource, { source: y?.type ?? "unknown" })),
          (g[4] = x),
          (g[5] = y?.type),
          (g[6] = t))
        : (t = g[6])
      let j = t,
        v = k.keyPath
      ;(null != m && (v = "app" === k.kind ? `apps.${m}.enabled` : `apps.${m}.tools.${b.name}.enabled`),
        g[7] !== k.keyPath || g[8] !== k.kind
          ? ((a = { keyPath: k.keyPath, kind: k.kind }), (g[7] = k.keyPath), (g[8] = k.kind), (g[9] = a))
          : (a = g[9]))
      let A = a
      if (k.isUserEditable && null != y) {
        let e
        ;(g[10] !== v || g[11] !== A
          ? ((e = (0, l.jsx)(r.A, { ...f.configuredDisablementToolRecoveryUserConfig, values: { ...A, keyPath: v } })),
            (g[10] = v),
            (g[11] = A),
            (g[12] = e))
          : (e = g[12]),
          (o = e))
      } else if (y?.type === "project") {
        let e
        ;(g[13] !== A
          ? ((e = (0, l.jsx)(r.A, { ...f.configuredDisablementToolRecoveryProjectConfig, values: A })),
            (g[13] = A),
            (g[14] = e))
          : (e = g[14]),
          (o = e))
      } else {
        let e
        return (
          g[15] !== j
            ? ((e = (0, l.jsx)("div", { className: "mt-1 text-xs text-secondary", children: j })),
              (g[15] = j),
              (g[16] = e))
            : (e = g[16]),
          e
        )
      }
      return (
        g[17] !== j
          ? ((c = (0, l.jsx)(n.m.TriggerDecorator, {
              className: "mt-1 block w-fit text-start text-xs text-secondary",
              unstyled: !0,
              children: j,
            })),
            (g[17] = j),
            (g[18] = c))
          : (c = g[18]),
        g[19] !== o || g[20] !== c
          ? ((p = (0, l.jsx)(n.m, { openDelay: 0, content: o, children: c })), (g[19] = o), (g[20] = c), (g[21] = p))
          : (p = g[21]),
        p
      )
    }
    let f = (0, c.YK)({
      disabledByAdminTool: {
        id: "skills.appsPage.toolsDialog.disabledByAdminTool",
        defaultMessage: "Disabled by admin",
      },
      configuredDisablementToolSource: {
        id: "skills.appsPage.toolsDialog.configuredDisablementToolSource",
        defaultMessage: `{source, select,
      project {Disabled by project settings}
      user {Disabled by your settings}
      enterpriseManaged {Disabled by your organization}
      mdm {Disabled by device management}
      system {Disabled by system configuration}
      sessionFlags {Disabled by session configuration}
      legacyManagedConfigTomlFromFile {Disabled by your administrator}
      legacyManagedConfigTomlFromMdm {Disabled by device management}
      other {Disabled by configuration}
    }`,
      },
      configuredDisablementToolRecoveryUserConfig: {
        id: "skills.appsPage.toolsDialog.configuredDisablementToolRecoveryUserConfig",
        defaultMessage:
          "Set {keyPath} to true in your user config.toml to enable this {kind, select, app {app} other {tool}}",
      },
      configuredDisablementToolRecoveryProjectConfig: {
        id: "skills.appsPage.toolsDialog.configuredDisablementToolRecoveryProjectConfig",
        defaultMessage:
          "Set {keyPath} to true in this project\u2019s config.toml to enable this {kind, select, app {app} other {tool}}",
      },
      unavailableTool: { id: "skills.appsPage.toolsDialog.unavailableTool", defaultMessage: "Unavailable" },
    })
  },
  mIfQ(e, t, a) {
    var l = a("ABep"),
      s = a("QosV"),
      n = a("on57"),
      i = a("zd8w"),
      o = a("oyxz")
    a.d(
      t,
      {},
      {
        Q: function (e) {
          let t,
            a,
            n,
            o = (0, s.c)(12),
            { children: r, items: d, batchSize: c, pinnedItem: u, renderExpandRow: p, visibleItemLimit: g } = e,
            [m, f] = (0, i.useState)(0),
            h = g + m * (c ?? d.length)
          if (o[0] !== r || o[1] !== d || o[2] !== u || o[3] !== p || o[4] !== m || o[5] !== h || o[6] !== g) {
            let e = d.slice(0, h),
              l = d.slice(h),
              s = null != u && l.includes(u),
              n = s ? l.filter((e) => e !== u) : l,
              i = m > 0 && 0 === n.length
            ;((t = r(s ? [...e, u] : e)),
              (a =
                d.length > g && (i || n.length > 0)
                  ? p({ hiddenItems: n, isExpanded: i, onToggle: () => f((e) => (i ? 0 : e + 1)) })
                  : null),
              (o[0] = r),
              (o[1] = d),
              (o[2] = u),
              (o[3] = p),
              (o[4] = m),
              (o[5] = h),
              (o[6] = g),
              (o[7] = t),
              (o[8] = a))
          } else ((t = o[7]), (a = o[8]))
          return (
            o[9] !== t || o[10] !== a
              ? ((n = (0, l.jsxs)(l.Fragment, { children: [t, a] })), (o[9] = t), (o[10] = a), (o[11] = n))
              : (n = o[11]),
            n
          )
        },
        s: function (e) {
          let t,
            a,
            i,
            r = (0, s.c)(10),
            { children: d, className: c, isExpanded: u, onClick: p } = e
          return (
            r[0] !== c
              ? ((t = (0, n.A)(
                  "flex min-h-[var(--height-token-row)] w-full cursor-interaction items-center rounded-[var(--radius-token-row)] px-[var(--padding-row-x)] py-[var(--padding-row-y)] text-start text-sm leading-relaxed font-normal text-codex-description outline-hidden hover:text-default focus-visible:text-default",
                  c,
                )),
                (r[0] = c),
                (r[1] = t))
              : (t = r[1]),
            r[2] !== d || r[3] !== u
              ? ((a = u ? (0, l.jsx)(o.A, { id: "skills.appsPage.section.showLess", defaultMessage: "Show less" }) : d),
                (r[2] = d),
                (r[3] = u),
                (r[4] = a))
              : (a = r[4]),
            r[5] !== u || r[6] !== p || r[7] !== t || r[8] !== a
              ? ((i = (0, l.jsx)("button", {
                  className: t,
                  type: "button",
                  "aria-expanded": u,
                  onClick: p,
                  children: a,
                })),
                (r[5] = u),
                (r[6] = p),
                (r[7] = t),
                (r[8] = a),
                (r[9] = i))
              : (i = r[9]),
            i
          )
        },
      },
    )
  },
  rJVD(e, t, a) {
    a.d(t, { A: () => G })
    var l = a("ABep"),
      s = a("QosV"),
      n = a("iRMi"),
      i = a("slpy"),
      o = a("HaM6"),
      r = a("qmMi"),
      d = a("Qgfj"),
      c = a("Wf1j"),
      u = a("oyxz"),
      p = a("YWcr"),
      g = a("TjgH"),
      m = a("Sm6l"),
      f = a("bqtn"),
      h = a("HOLv"),
      b = a("f38C"),
      x = a("SGsN"),
      k = a("F0xz"),
      y = a("B09n"),
      j = a("wwME"),
      v = a("Q8aV"),
      A = a("poBj"),
      P = a("yGJW"),
      S = a("gBBC"),
      C = a("OWtl"),
      M = a("tSEg"),
      I = a("ndjw"),
      D = a("kfGJ"),
      w = a("MQKw"),
      T = a("axh8"),
      _ = a("n4fT"),
      F = a("hobO"),
      N = a("hbRe"),
      R = a("Umiv"),
      U = a("aepO"),
      E = a("vOoA"),
      O = a("xSOA"),
      B = a("zd8w"),
      L = a("Dgwo"),
      Y = a("WFY2"),
      W = a("t4SC")
    let $ = (0, d.YK)({
      disableSkill: { id: "skills.card.disableSkill", defaultMessage: "Disable skill" },
      enableSkill: { id: "skills.card.enableSkill", defaultMessage: "Enable skill" },
      enabledStatus: { id: "skills.card.enabledStatus", defaultMessage: "Skill enabled" },
      disabledStatus: { id: "skills.card.disabledStatus", defaultMessage: "Skill disabled" },
      enableButton: { id: "skills.card.enableButton", defaultMessage: "Enable" },
      uninstallSkill: { id: "skills.card.uninstallSkill", defaultMessage: "Uninstall skill" },
    })
    function G(e) {
      let t,
        a,
        d,
        T,
        R,
        U,
        E,
        G,
        z,
        K,
        Q,
        Z,
        J,
        X,
        ee = (0, s.c)(95),
        {
          cardRef: et,
          actionLabel: ea,
          cardIcon: el,
          cardIconContainer: es,
          cardIconContainerVariant: en,
          cardDescriptionPlacement: ei,
          cardTitle: eo,
          hostId: er,
          hideCardActions: ed,
          canPreview: ec,
          isHighlighted: eu,
          presentation: ep,
          skill: eg,
          displayName: em,
          installedStateAction: ef,
          modalIconShape: eh,
          showModalUninstall: eb,
          toggleOnly: ex,
          scopeBadges: ek,
          onSkillsUpdated: ey,
        } = e,
        ej = void 0 === es || es,
        ev = void 0 !== ed && ed,
        eA = void 0 === ec || ec,
        eP = void 0 !== eu && eu,
        eS = void 0 === ef ? "check" : ef,
        eC = void 0 === eb || eb,
        eM = void 0 !== ex && ex,
        eI = (0, r.gh)(C.u),
        eD = (0, r.gh)(M.GD),
        { platform: ew } = (0, j.V)(),
        eT = (0, c.A)(),
        e_ = (0, v.p8)(),
        eF = "local" !== (0, D.Qz)(er).kind,
        eN = em ?? eg.name
      ee[0] !== eN || ee[1] !== er || ee[2] !== ey || ee[3] !== eg
        ? ((t = { hostId: er, skill: eg, displayLabel: eN, onSkillsUpdated: ey }),
          (ee[0] = eN),
          (ee[1] = er),
          (ee[2] = ey),
          (ee[3] = eg),
          (ee[4] = t))
        : (t = ee[4])
      let {
        enabled: eR,
        isUpdating: eU,
        isRemoving: eE,
        setEnabled: eO,
        uninstall: eB,
      } = (function (e) {
        let t,
          a,
          n,
          i,
          o,
          d,
          p,
          g,
          m,
          f,
          h,
          b = (0, s.c)(41),
          { hostId: k, skill: y, displayLabel: j, onSkillsUpdated: v } = e,
          A = (0, r.gh)(C.u),
          P = (0, c.A)(),
          [S, M] = (0, B.useState)(null)
        ;(b[0] !== v || b[1] !== A
          ? ((t = (e) => {
              ;(v?.(e?.success === !0), A.queryClient.invalidateQueries({ queryKey: W.w5 }))
            }),
            (b[0] = v),
            (b[1] = A),
            (b[2] = t))
          : (t = b[2]),
          b[3] !== j || b[4] !== P || b[5] !== A
            ? ((a = (e) => {
                let { success: t } = e
                t
                  ? A.get(x.Id).success(
                      (0, l.jsx)(u.A, {
                        id: "skills.card.removeSuccess",
                        defaultMessage: "{skillName} skill uninstalled",
                        values: { skillName: (0, l.jsx)("span", { className: "font-medium", children: j }) },
                      }),
                    )
                  : A.get(x.Id).danger(
                      P.formatMessage({ id: "skills.card.removeFailed", defaultMessage: "Failed to uninstall skill" }),
                      { errorAnalytics: { toastId: "skills.card.removeFailed" } },
                    )
              }),
              (b[3] = j),
              (b[4] = P),
              (b[5] = A),
              (b[6] = a))
            : (a = b[6]),
          b[7] !== P || b[8] !== A
            ? ((n = () => {
                A.get(x.Id).danger(
                  P.formatMessage({ id: "skills.card.removeFailed", defaultMessage: "Failed to uninstall skill" }),
                  { errorAnalytics: { toastId: "skills.card.removeFailed" } },
                )
              }),
              (b[7] = P),
              (b[8] = A),
              (b[9] = n))
            : (n = b[9]),
          b[10] !== t || b[11] !== a || b[12] !== n
            ? ((i = { mutationFn: W._R, networkMode: "always", onSettled: t, onSuccess: a, onError: n }),
              (b[10] = t),
              (b[11] = a),
              (b[12] = n),
              (b[13] = i))
            : (i = b[13]))
        let I = (0, O.n)(i)
        ;(b[14] !== k || b[15] !== A || b[16] !== y
          ? ((o = (e) => {
              let { enabled: t } = e
              return (0, L.V)(A, k).sendRequest(
                "skills/config/write",
                y.name.includes(":") ? { name: y.name, enabled: t } : { path: y.path, enabled: t },
              )
            }),
            (b[14] = k),
            (b[15] = A),
            (b[16] = y),
            (b[17] = o))
          : (o = b[17]),
          b[18] !== j || b[19] !== v || b[20] !== A
            ? ((d = (e, t) => {
                let { enabled: a, restoreKeyboardFocus: s } = t
                v?.(!0, s)
                let n = a
                  ? (0, l.jsx)(u.A, {
                      id: "skills.card.enableSuccess",
                      defaultMessage: "{skillName} skill enabled",
                      values: { skillName: (0, l.jsx)("span", { className: "font-medium", children: j }) },
                    })
                  : (0, l.jsx)(u.A, {
                      id: "skills.card.disableSuccess",
                      defaultMessage: "{skillName} skill disabled",
                      values: { skillName: (0, l.jsx)("span", { className: "font-medium", children: j }) },
                    })
                A.get(x.Id).success(n)
              }),
              (b[18] = j),
              (b[19] = v),
              (b[20] = A),
              (b[21] = d))
            : (d = b[21]),
          b[22] !== P || b[23] !== A
            ? ((p = (e) => {
                ;(M(null),
                  Y.v.error("Failed to update skill enabled state", { safe: {}, sensitive: { error: e } }),
                  A.get(x.Id).danger(
                    P.formatMessage({ id: "skills.card.toggleEnabledError", defaultMessage: "Failed to update skill" }),
                    { errorAnalytics: { toastId: "skills.card.toggleEnabledError" } },
                  ))
              }),
              (b[22] = P),
              (b[23] = A),
              (b[24] = p))
            : (p = b[24]),
          b[25] !== o || b[26] !== d || b[27] !== p
            ? ((g = { mutationFn: o, onSuccess: d, onError: p }), (b[25] = o), (b[26] = d), (b[27] = p), (b[28] = g))
            : (g = b[28]))
        let D = (0, O.n)(g),
          w = null != S && (D.isPending || y.enabled !== S) ? S : y.enabled,
          T = I.isPending && I.variables?.skillPath === y.path
        return (
          b[29] !== D
            ? ((m = (e, t) => {
                ;(M(e), D.mutate({ enabled: e, restoreKeyboardFocus: t }))
              }),
              (b[29] = D),
              (b[30] = m))
            : (m = b[30]),
          b[31] !== k || b[32] !== I || b[33] !== y
            ? ((f = () => {
                I.mutate({ hostId: k, skillPath: y.path })
              }),
              (b[31] = k),
              (b[32] = I),
              (b[33] = y),
              (b[34] = f))
            : (f = b[34]),
          b[35] !== w || b[36] !== m || b[37] !== f || b[38] !== T || b[39] !== D.isPending
            ? ((h = { enabled: w, isUpdating: D.isPending, isRemoving: T, setEnabled: m, uninstall: f }),
              (b[35] = w),
              (b[36] = m),
              (b[37] = f),
              (b[38] = T),
              (b[39] = D.isPending),
              (b[40] = h))
            : (h = b[40]),
          h
        )
      })(t)
      ee[5] !== eg ? ((a = (0, w.a)(eg)), (ee[5] = eg), (ee[6] = a)) : (a = ee[6])
      let eL = a
      ;(ee[7] !== eR
        ? ((d = eR
            ? null
            : (0, l.jsx)(g.E, {
                variant: "outline",
                children: (0, l.jsx)(u.A, { id: "skills.card.disabledBadge", defaultMessage: "Disabled" }),
              })),
          (ee[7] = eR),
          (ee[8] = d))
        : (d = ee[8]),
        ee[9] !== eN || ee[10] !== d
          ? ((T = (0, l.jsx)(F.Rv, { kind: "Skill", title: eN, badge: d })), (ee[9] = eN), (ee[10] = d), (ee[11] = T))
          : (T = ee[11]))
      let eY = T
      ee[12] !== el || ee[13] !== eg
        ? ((R = void 0 === el ? (0, l.jsx)(V, { skill: eg, size: eg.interface?.iconLarge ? "large" : "small" }) : el),
          (ee[12] = el),
          (ee[13] = eg),
          (ee[14] = R))
        : (R = ee[14])
      let eW = R,
        e$ = !eF && "admin" !== eg.scope,
        eG = !eR
      ee[15] !== er || ee[16] !== eD || ee[17] !== eg.path
        ? ((U = () => {
            ;(0, y.openWorkspaceFile)({ scope: eD, path: eg.path, cwd: null, hostId: er, openInSidePanel: !0 })
          }),
          (ee[15] = er),
          (ee[16] = eD),
          (ee[17] = eg.path),
          (ee[18] = U))
        : (U = ee[18])
      let eq = U
      ee[19] !== eI || ee[20] !== eg || ee[21] !== e_
        ? ((E = () => {
            ;((0, P.yy)(eI, n.CodexSkillTryClicked, {}),
              e_({
                activeProject: (0, S.QO)(eI.get(I.Gt)),
                prefillPrompt: (0, N.Od)(eg),
                prefillPromptOnlyIfEmpty: !0,
                skillMentionForExistingDraft: (0, p.qP)(eg),
                startInSidebar: !0,
              }))
          }),
          (ee[19] = eI),
          (ee[20] = eg),
          (ee[21] = e_),
          (ee[22] = E))
        : (E = ee[22])
      let eH = E,
        eV = eR ? $.disableSkill : $.enableSkill
      ee[23] !== eR ||
      ee[24] !== eq ||
      ee[25] !== ev ||
      ee[26] !== er ||
      ee[27] !== eT ||
      ee[28] !== eF ||
      ee[29] !== eU ||
      ee[30] !== eV ||
      ee[31] !== ew ||
      ee[32] !== eD ||
      ee[33] !== eO ||
      ee[34] !== eg.path
        ? ((G = (e) => {
            let { closePreview: t } = e
            return (0, l.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                !ev &&
                  (0, l.jsx)(i.m, {
                    content: (0, l.jsx)(u.A, { ...eV }),
                    children: (0, l.jsx)("div", {
                      className: "flex items-center",
                      children: (0, l.jsx)(k.l, {
                        className: "h-token-button-composer",
                        checked: eR,
                        disabled: eU,
                        ariaLabel: eT.formatMessage(eV),
                        onChange: eO,
                      }),
                    }),
                  }),
                (0, l.jsxs)(f.Ab, {
                  align: "end",
                  contentWidth: "icon",
                  triggerButton: (0, l.jsx)(b.p, {
                    pill: !0,
                    label: eT.formatMessage({ id: "skills.card.moreActions", defaultMessage: "More actions" }),
                  }),
                  children: [
                    (0, l.jsx)(f.ms.Item, {
                      disabled: eF,
                      onSelect: () => {
                        ;(eq(), t())
                      },
                      children: (0, l.jsx)(u.A, { id: "skills.card.open", defaultMessage: "Open" }),
                    }),
                    (0, l.jsxs)(f.ms.Item, {
                      disabled: eF,
                      onSelect: () => {
                        ;(0, y.openWorkspaceFile)({
                          scope: eD,
                          path: eg.path,
                          cwd: null,
                          hostId: er,
                          target: "fileManager",
                        })
                      },
                      children: [
                        "macOS" === ew &&
                          (0, l.jsx)(u.A, { id: "skills.card.revealInFinder", defaultMessage: "Reveal in Finder" }),
                        "windows" === ew &&
                          (0, l.jsx)(u.A, {
                            id: "skills.card.revealInFileExplorer",
                            defaultMessage: "Reveal in File Explorer",
                          }),
                        "linux" === ew &&
                          (0, l.jsx)(u.A, {
                            id: "skills.card.revealInFileManager",
                            defaultMessage: "Reveal in File Manager",
                          }),
                      ],
                    }),
                    (0, l.jsx)(H, { hostId: er, path: eg.path }),
                  ],
                }),
              ],
            })
          }),
          (ee[23] = eR),
          (ee[24] = eq),
          (ee[25] = ev),
          (ee[26] = er),
          (ee[27] = eT),
          (ee[28] = eF),
          (ee[29] = eU),
          (ee[30] = eV),
          (ee[31] = ew),
          (ee[32] = eD),
          (ee[33] = eO),
          (ee[34] = eg.path),
          (ee[35] = G))
        : (G = ee[35])
      let ez = G,
        eK = eR ? $.disableSkill : $.enableSkill
      ee[36] !== eR || ee[37] !== eO
        ? ((z = eR
            ? (e, t) => {
                ;(e.stopPropagation(), eO(!1, t))
              }
            : void 0),
          (ee[36] = eR),
          (ee[37] = eO),
          (ee[38] = z))
        : (z = ee[38])
      let eQ = z
      ee[39] !== eG || ee[40] !== eO
        ? ((K = eG ? () => eO(!0) : void 0), (ee[39] = eG), (ee[40] = eO), (ee[41] = K))
        : (K = ee[41])
      let eZ = K,
        eJ = e$ ? eB : void 0
      ee[42] !== ea ||
      ee[43] !== eA ||
      ee[44] !== eR ||
      ee[45] !== eQ ||
      ee[46] !== eZ ||
      ee[47] !== eq ||
      ee[48] !== eJ ||
      ee[49] !== ev ||
      ee[50] !== eS ||
      ee[51] !== eT ||
      ee[52] !== eF ||
      ee[53] !== eE ||
      ee[54] !== eU ||
      ee[55] !== ep ||
      ee[56] !== eO ||
      ee[57] !== eK ||
      ee[58] !== eM
        ? ((Q = ev
            ? void 0
            : "toggle" === eS
              ? (e) => {
                  let { ignoreNextPreview: t, openPreview: a } = e
                  return (0, l.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      ea ? (0, l.jsx)("div", { className: "text-sm text-secondary", children: ea }) : null,
                      eM || !eA
                        ? null
                        : (0, l.jsx)("div", {
                            className:
                              "invisible opacity-0 transition-opacity group-hover:visible group-hover:opacity-100",
                            children: (0, l.jsxs)(f.Ab, {
                              align: "end",
                              contentWidth: "icon",
                              triggerButton: (0, l.jsx)(b.p, {
                                pill: !0,
                                label: eT.formatMessage({
                                  id: "skills.card.moreActions",
                                  defaultMessage: "More actions",
                                }),
                              }),
                              children: [
                                (0, l.jsx)(f.ms.Item, {
                                  disabled: eF,
                                  onSelect: () => {
                                    ;(t(), eq())
                                  },
                                  children: (0, l.jsx)(u.A, { id: "skills.card.open", defaultMessage: "Open" }),
                                }),
                                (0, l.jsx)(f.ms.Item, {
                                  onSelect: a,
                                  children: (0, l.jsx)(u.A, { id: "skills.card.details", defaultMessage: "Details" }),
                                }),
                              ],
                            }),
                          }),
                      (0, l.jsx)(i.m, {
                        content: (0, l.jsx)(u.A, { ...eK }),
                        children: (0, l.jsx)(k.l, {
                          checked: eR,
                          disabled: eU,
                          size: eM && "settings" !== ep ? "sm" : "default",
                          ariaLabel: eT.formatMessage(eK),
                          onClick: q,
                          onChange: eO,
                        }),
                      }),
                    ],
                  })
                }
              : "menu" === eS
                ? (0, l.jsx)(A.I, {
                    disableMenuLabel: (0, l.jsx)(u.A, { id: "skills.card.disableMenuItem", defaultMessage: "Disable" }),
                    enableButtonLabel: (0, l.jsx)(u.A, { ...$.enableButton }),
                    enabledStatusAriaLabel: eT.formatMessage($.enabledStatus),
                    isEnabled: eR,
                    isUninstalling: eE,
                    isUpdating: eU,
                    menuLabel: eT.formatMessage({ id: "skills.card.actionsMenu", defaultMessage: "Skill actions" }),
                    onDisable: eQ,
                    onEnable: eZ,
                    onUninstall: eJ,
                    uninstallMenuLabel: (0, l.jsx)(u.A, {
                      id: "skills.card.uninstallMenuItem",
                      defaultMessage: "Uninstall",
                    }),
                  })
                : (0, l.jsx)(A.I, {
                    enabledStatusAriaLabel: eT.formatMessage($.enabledStatus),
                    isEnabled: eR,
                    isUninstalling: eE,
                    isUpdating: eU,
                  })),
          (ee[42] = ea),
          (ee[43] = eA),
          (ee[44] = eR),
          (ee[45] = eQ),
          (ee[46] = eZ),
          (ee[47] = eq),
          (ee[48] = eJ),
          (ee[49] = ev),
          (ee[50] = eS),
          (ee[51] = eT),
          (ee[52] = eF),
          (ee[53] = eE),
          (ee[54] = eU),
          (ee[55] = ep),
          (ee[56] = eO),
          (ee[57] = eK),
          (ee[58] = eM),
          (ee[59] = Q))
        : (Q = ee[59])
      let eX = Q,
        e1 = eo ?? eN,
        e0 = "settings" === ep ? eg.description : eL
      return (
        ee[60] !== eN || ee[61] !== er || ee[62] !== ep || ee[63] !== eg.path
          ? ((Z = (e) => {
              let { isOpen: t } = e
              return (0, l.jsx)(F.FG, {
                hostId: er,
                isOpen: t,
                skillPath: eg.path,
                titleText: eN,
                presentation: "settings" === ep ? "contents" : "preview",
              })
            }),
            (ee[60] = eN),
            (ee[61] = er),
            (ee[62] = ep),
            (ee[63] = eg.path),
            (ee[64] = Z))
          : (Z = ee[64]),
        ee[65] !== e$ ||
        ee[66] !== eR ||
        ee[67] !== eH ||
        ee[68] !== eE ||
        ee[69] !== eU ||
        ee[70] !== eC ||
        ee[71] !== eB
          ? ((J = (e) => {
              let { closePreview: t } = e
              return (0, l.jsxs)(l.Fragment, {
                children: [
                  e$ && eC
                    ? (0, l.jsx)(m.$, {
                        className: "me-auto",
                        radius: "full",
                        color: "danger",
                        size: "toolbar",
                        disabled: eE,
                        onClick: () => {
                          ;(eB(), t())
                        },
                        children: (0, l.jsx)(u.A, { id: "skills.card.uninstall", defaultMessage: "Uninstall" }),
                      })
                    : null,
                  (0, l.jsxs)(m.$, {
                    radius: "full",
                    color: "primary",
                    size: "toolbar",
                    disabled: !eR || eU,
                    onClick: eH,
                    children: [
                      (0, l.jsx)(h.I, { "aria-hidden": !1, asset: o.Z }),
                      (0, l.jsx)(u.A, { id: "skills.card.try", defaultMessage: "Try now" }),
                    ],
                  }),
                ],
              })
            }),
            (ee[65] = e$),
            (ee[66] = eR),
            (ee[67] = eH),
            (ee[68] = eE),
            (ee[69] = eU),
            (ee[70] = eC),
            (ee[71] = eB),
            (ee[72] = J))
          : (J = ee[72]),
        ee[73] !== eX ||
        ee[74] !== eA ||
        ee[75] !== ei ||
        ee[76] !== ej ||
        ee[77] !== en ||
        ee[78] !== et ||
        ee[79] !== eL ||
        ee[80] !== eN ||
        ee[81] !== eG ||
        ee[82] !== eP ||
        ee[83] !== ez ||
        ee[84] !== eh ||
        ee[85] !== ep ||
        ee[86] !== ek ||
        ee[87] !== eg.name ||
        ee[88] !== eW ||
        ee[89] !== e1 ||
        ee[90] !== e0 ||
        ee[91] !== Z ||
        ee[92] !== J ||
        ee[93] !== eY
          ? ((X = (0, l.jsx)(_.C, {
              cardRef: et,
              canPreview: eA,
              cardIcon: eW,
              cardIconContainer: ej,
              cardIconContainerVariant: en,
              cardTitle: e1,
              cardDescription: eL,
              cardDescriptionPlacement: ei,
              cardBadges: ek,
              cardActions: eX,
              isHighlighted: eP,
              isContentDimmed: eG,
              presentation: ep,
              modalIconShape: eh,
              modalTitle: eY,
              modalTitleText: eN,
              modalName: eg.name,
              modalHeaderActions: ez,
              modalDescription: e0,
              modalBody: Z,
              modalFooter: J,
            })),
            (ee[73] = eX),
            (ee[74] = eA),
            (ee[75] = ei),
            (ee[76] = ej),
            (ee[77] = en),
            (ee[78] = et),
            (ee[79] = eL),
            (ee[80] = eN),
            (ee[81] = eG),
            (ee[82] = eP),
            (ee[83] = ez),
            (ee[84] = eh),
            (ee[85] = ep),
            (ee[86] = ek),
            (ee[87] = eg.name),
            (ee[88] = eW),
            (ee[89] = e1),
            (ee[90] = e0),
            (ee[91] = Z),
            (ee[92] = J),
            (ee[93] = eY),
            (ee[94] = X))
          : (X = ee[94]),
        X
      )
    }
    function q(e) {
      e.stopPropagation()
    }
    function H(e) {
      let t,
        a,
        n,
        i,
        o = (0, s.c)(10),
        { hostId: d, path: c } = e,
        p = (0, r.gh)(C.u)
      o[0] !== d || o[1] !== c ? ((t = { hostId: d, path: c }), (o[0] = d), (o[1] = c), (o[2] = t)) : (t = o[2])
      let { contents: g, error: m } = (0, R.q)(t),
        h = void 0 === g || null != m
      return (
        o[3] !== g || o[4] !== p
          ? ((a = () => {
              void 0 !== g &&
                (0, U.lW)(g).then((e) => {
                  e &&
                    p
                      .get(x.Id)
                      .success(
                        (0, l.jsx)(u.A, { id: "skills.card.copiedSkillMarkdown", defaultMessage: "Copied SKILL.md" }),
                      )
                })
            }),
            (o[3] = g),
            (o[4] = p),
            (o[5] = a))
          : (a = o[5]),
        o[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, l.jsx)(u.A, { id: "skills.card.copySkillMarkdown", defaultMessage: "Copy Markdown" })),
            (o[6] = n))
          : (n = o[6]),
        o[7] !== h || o[8] !== a
          ? ((i = (0, l.jsx)(f.ms.Item, { disabled: h, onSelect: a, children: n })), (o[7] = h), (o[8] = a), (o[9] = i))
          : (i = o[9]),
        i
      )
    }
    function V(e) {
      let t,
        a,
        n,
        i,
        o = (0, s.c)(12),
        { skill: r, size: d } = e,
        c = void 0 === d ? "small" : d,
        u = !!r.interface?.iconLarge
      if (("small" === c ? (t = 24) : u || (t = 20), o[0] !== t || o[1] !== u || o[2] !== c || o[3] !== r)) {
        let e,
          l = (0, T.h)(r, { size: c, fallbackSize: t, fallbackClassName: "text-secondary" })
        o[6] !== u || o[7] !== c
          ? ((e = (0, E.a)({ size: c, hasLargeIcon: u, largeFallbackClassName: "h-5 w-5" })),
            (o[6] = u),
            (o[7] = c),
            (o[8] = e))
          : (e = o[8])
        let s = `${e} text-secondary`
        ;((a = l),
          (n = (0, T.d8)(l, s, "text-secondary")),
          (o[0] = t),
          (o[1] = u),
          (o[2] = c),
          (o[3] = r),
          (o[4] = a),
          (o[5] = n))
      } else ((a = o[4]), (n = o[5]))
      return (
        o[9] !== a || o[10] !== n ? ((i = (0, l.jsx)(a, { ...n })), (o[9] = a), (o[10] = n), (o[11] = i)) : (i = o[11]),
        i
      )
    }
  },
  n4fT(e, t, a) {
    var l = a("ABep"),
      s = a("QosV"),
      n = a("on57"),
      i = a("zd8w"),
      o = a("bVeK"),
      r = a("Jqpj"),
      d = a("AWNZ"),
      c = a("TZ2Y"),
      u = a("hobO"),
      p = a("bIvi")
    a.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            a,
            g,
            m,
            f,
            h,
            b,
            x,
            k,
            y,
            j,
            v,
            A = (0, s.c)(64),
            {
              cardRef: P,
              cardIcon: S,
              cardIconContainer: C,
              cardIconContainerVariant: M,
              cardTitle: I,
              cardDescription: D,
              cardDescriptionPlacement: w,
              cardBadges: T,
              cardActions: _,
              canPreview: F,
              isHighlighted: N,
              isContentDimmed: R,
              presentation: U,
              modalIconShape: E,
              modalTitle: O,
              modalTitleText: B,
              modalName: L,
              modalHeaderActions: Y,
              modalDescription: W,
              modalBody: $,
              modalFooter: G,
            } = e,
            q = void 0 === F || F,
            [H, V] = (0, i.useState)(!1),
            z = (0, i.useRef)(!1)
          A[0] !== q
            ? ((t = () => {
                if (q) {
                  if (z.current) {
                    z.current = !1
                    return
                  }
                  V(!0)
                }
              }),
              (A[0] = q),
              (A[1] = t))
            : (t = A[1])
          let K = (0, p.K)(t)
          A[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = () => {
                z.current = !0
              }),
              (A[2] = a))
            : (a = A[2])
          let Q = (0, p.K)(a)
          A[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = () => {
                V(!1)
              }),
              (A[3] = g))
            : (g = A[3])
          let Z = g,
            J = S ?? null,
            X = q && H
          ;(A[4] !== Y
            ? ((m = "function" == typeof Y ? Y({ closePreview: Z }) : Y), (A[4] = Y), (A[5] = m))
            : (m = A[5]),
            A[6] !== G
              ? ((f = "function" == typeof G ? G({ closePreview: Z }) : G), (A[6] = G), (A[7] = f))
              : (f = A[7]),
            A[8] !== q || A[9] !== H || A[10] !== $
              ? ((h = "function" == typeof $ ? $({ isOpen: q && H }) : $),
                (A[8] = q),
                (A[9] = H),
                (A[10] = $),
                (A[11] = h))
              : (h = A[11]),
            A[12] !== W || A[13] !== O || A[14] !== J || A[15] !== X || A[16] !== m || A[17] !== f || A[18] !== h
              ? ((b = {
                  icon: J,
                  title: O,
                  description: W,
                  isOpen: X,
                  onOpenChange: V,
                  headerActions: m,
                  footer: f,
                  children: h,
                }),
                (A[12] = W),
                (A[13] = O),
                (A[14] = J),
                (A[15] = X),
                (A[16] = m),
                (A[17] = f),
                (A[18] = h),
                (A[19] = b))
              : (b = A[19]))
          let ee = b
          return (
            A[20] !== q || A[21] !== _ || A[22] !== D || A[23] !== I || A[24] !== Q || A[25] !== K || A[26] !== U
              ? ((x =
                  "settings" !== U || q
                    ? null
                    : (0, l.jsx)(d.ic, {
                        label: I,
                        description: D,
                        control: "function" == typeof _ ? _({ ignoreNextPreview: Q, openPreview: K }) : _,
                      })),
                (A[20] = q),
                (A[21] = _),
                (A[22] = D),
                (A[23] = I),
                (A[24] = Q),
                (A[25] = K),
                (A[26] = U),
                (A[27] = x))
              : (x = A[27]),
            A[28] !== q || A[29] !== _ || A[30] !== D || A[31] !== I || A[32] !== Q || A[33] !== K || A[34] !== U
              ? ((k =
                  "settings" === U && q
                    ? (0, l.jsx)(d.kG, {
                        edgeRounding: "surface",
                        label: I,
                        description: D,
                        trailing: (0, l.jsx)(o.uM3, {}),
                        actionsPlacement: "before-trailing",
                        actions: "function" == typeof _ ? _({ ignoreNextPreview: Q, openPreview: K }) : _,
                        onClick: K,
                      })
                    : null),
                (A[28] = q),
                (A[29] = _),
                (A[30] = D),
                (A[31] = I),
                (A[32] = Q),
                (A[33] = K),
                (A[34] = U),
                (A[35] = k))
              : (k = A[35]),
            A[36] !== q ||
            A[37] !== _ ||
            A[38] !== T ||
            A[39] !== D ||
            A[40] !== w ||
            A[41] !== S ||
            A[42] !== C ||
            A[43] !== M ||
            A[44] !== P ||
            A[45] !== I ||
            A[46] !== Q ||
            A[47] !== R ||
            A[48] !== N ||
            A[49] !== K ||
            A[50] !== U
              ? ((y =
                  "settings" !== U
                    ? (0, l.jsx)(r.D, {
                        ref: P,
                        className: (0, n.A)(
                          "justify-center text-base select-none",
                          "card" === U ? "p-4" : "border-none",
                          null != _ && "group",
                        ),
                        contentClassName: (0, n.A)(R && "opacity-60"),
                        icon: S,
                        iconContainer: C,
                        iconContainerVariant: M,
                        title: I,
                        description: D,
                        descriptionClassName: "line-clamp-1 text-codex-description",
                        descriptionPlacement: w,
                        badges: T,
                        isHighlighted: N,
                        presentation: U,
                        actions: "function" == typeof _ ? _({ ignoreNextPreview: Q, openPreview: K }) : _,
                        actionsPlacement: "center",
                        onClick: q ? K : void 0,
                      })
                    : null),
                (A[36] = q),
                (A[37] = _),
                (A[38] = T),
                (A[39] = D),
                (A[40] = w),
                (A[41] = S),
                (A[42] = C),
                (A[43] = M),
                (A[44] = P),
                (A[45] = I),
                (A[46] = Q),
                (A[47] = R),
                (A[48] = N),
                (A[49] = K),
                (A[50] = U),
                (A[51] = y))
              : (y = A[51]),
            A[52] !== E || A[53] !== L || A[54] !== ee || A[55] !== O || A[56] !== B || A[57] !== U
              ? ((j =
                  "settings" === U
                    ? (0, l.jsx)(c.P, { ...ee, name: L, title: B ?? O })
                    : (0, l.jsx)(u.d5, { ...ee, iconShape: E, titleText: B })),
                (A[52] = E),
                (A[53] = L),
                (A[54] = ee),
                (A[55] = O),
                (A[56] = B),
                (A[57] = U),
                (A[58] = j))
              : (j = A[58]),
            A[59] !== x || A[60] !== k || A[61] !== y || A[62] !== j
              ? ((v = (0, l.jsxs)(l.Fragment, { children: [x, k, y, j] })),
                (A[59] = x),
                (A[60] = k),
                (A[61] = y),
                (A[62] = j),
                (A[63] = v))
              : (v = A[63]),
            v
          )
        },
      },
    )
  },
  vOoA(e, t, a) {
    a.d(
      t,
      {},
      {
        a: function ({
          size: e,
          hasLargeIcon: t,
          smallClassName: a = "icon-md",
          largeFallbackClassName: l = "h-5 w-5",
        }) {
          return "large" === e ? (t ? "h-full w-full" : l) : a
        },
      },
    )
  },
}
//# sourceMappingURL=686745.58101adba7.js.map
