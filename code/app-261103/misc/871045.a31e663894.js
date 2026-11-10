export const __rspack_esm_ids = [871045]
export const __webpack_modules__ = {
  Zwnn(e, t, n) {
    var a = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, a.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            d: "M16.4183 9.99967C16.4181 6.45518 13.5448 3.58188 10.0003 3.58171C7.96895 3.58171 6.15935 4.52712 4.98273 6.00163H7.50031L7.6341 6.0153C7.93707 6.07735 8.16535 6.34535 8.16535 6.66667C8.16535 6.98799 7.93707 7.25598 7.6341 7.31803L7.50031 7.33171H3.75031C3.73055 7.33171 3.71104 7.32656 3.69172 7.32487C3.68913 7.32464 3.68649 7.32513 3.68391 7.32487C3.64304 7.32082 3.60409 7.31254 3.56574 7.30143C3.56188 7.30031 3.55788 7.2997 3.55402 7.2985C3.51366 7.286 3.47546 7.27023 3.43879 7.25065L3.43586 7.24967C3.43444 7.24891 3.43337 7.24752 3.43195 7.24675C3.35757 7.20587 3.29219 7.15262 3.23859 7.08757C3.23505 7.08329 3.23128 7.07923 3.22785 7.07487C3.20549 7.04631 3.1858 7.01609 3.16828 6.98405C3.16491 6.97791 3.16169 6.97173 3.15852 6.9655C3.14408 6.93698 3.13265 6.90732 3.12238 6.87663C3.11744 6.86205 3.11264 6.84757 3.10871 6.83268C3.10316 6.81117 3.09843 6.78955 3.09504 6.76725C3.09108 6.74233 3.08833 6.71738 3.08723 6.69206C3.08691 6.68361 3.08527 6.67519 3.08527 6.66667V2.91667C3.08527 2.5494 3.38304 2.25163 3.75031 2.25163C4.11743 2.2518 4.41535 2.54951 4.41535 2.91667V4.62956C5.82462 3.16447 7.80565 2.25163 10.0003 2.25163C14.2793 2.2518 17.7482 5.72065 17.7484 9.99967C17.7484 14.2789 14.2794 17.7485 10.0003 17.7487C6.02899 17.7487 2.75629 14.7612 2.305 10.9108L2.96516 10.8337L3.62531 10.7555C3.99895 13.9437 6.7115 16.4186 10.0003 16.4186C13.5449 16.4184 16.4183 13.5443 16.4183 9.99967ZM2.88801 10.1725C3.25252 10.13 3.58237 10.3911 3.62531 10.7555L2.305 10.9108C2.26225 10.546 2.52323 10.2153 2.88801 10.1725Z",
          }),
        })))
  },
  IDNd(e, t, n) {
    let a = (0, n("zd8w").createContext)(!0)
    n.d(t, {}, { G: a })
  },
  pLw9(e, t, n) {
    var a = n("zTeN"),
      o = n("OWtl")
    let i = (0, a.bD)(o.u, (e) => null)
    n.d(
      t,
      {},
      {
        R: i,
        t: function (e, t, n) {
          let a = n.localArtifactAnnotationMetadata?.target,
            o = n.localArtifactAnnotationContext?.annotationId
          null != t &&
            a?.type === "site-element-selection" &&
            null != o &&
            e.get(i, { conversationId: t, projectId: a.projectId })?.focus(o.slice(`site:${a.projectId}:`.length))
        },
      },
    )
  },
  GFsD(e, t, n) {
    function a(e) {
      let t = e.tagName.trim().toLowerCase()
      return /^[a-z][\w-]*$/.test(t) ? (/^h[1-6]$/.test(t) ? "heading" : t) : "element"
    }
    n.d(
      t,
      {},
      {
        I: function (e) {
          let t = e.text.replace(/[\r\n\u2028\u2029]/g, " ").trim()
          return t ? t.slice(0, 160) : a(e)
        },
        a: a,
      },
    )
  },
  b3Qd(e, t, n) {
    let a = ".chatgpt-team.site",
      o = ".chatgpt.site",
      i = [a, o, ".appgardenapps.dev"]
    function r(e) {
      return e.endsWith(a) ? `${e.slice(0, -a.length)}${o}` : e
    }
    function s(e) {
      return e.replace(/\/+$/u, "") || "/"
    }
    n.d(
      t,
      {},
      {
        Go: function (e) {
          if (null == e) return null
          let t = new URL(e)
          return `${t.host}${"/" === t.pathname ? "" : t.pathname}${t.search}${t.hash}`
        },
        Q6: function (e, t) {
          if (null == e) return null
          try {
            let n = new URL(e).hostname,
              a = t.trim().toLowerCase()
            if (0 === a.length || !n.startsWith(`${a}.`) || !i.some((e) => n.endsWith(e))) return null
            return n.slice(a.length)
          } catch {
            return null
          }
        },
        VB: function (e) {
          let t = null == e ? null : URL.parse(e)
          return null == t ? null : ((t.hostname = r(t.hostname)), (t.pathname = s(t.pathname)), t.href)
        },
        oB: function (e, t) {
          try {
            let n = new URL(e),
              a = new URL(t)
            if (n.protocol !== a.protocol || n.port !== a.port || r(n.hostname) !== r(a.hostname)) return !1
            let o = s(a.pathname),
              i = s(n.pathname)
            return "/" === o || i === o || i.startsWith(`${o}/`)
          } catch {
            return !1
          }
        },
      },
    )
  },
  ex8A(e, t, n) {
    var a = n("iRMi"),
      o = n("X6Vn"),
      i = n("yGJW")
    n.d(
      t,
      {},
      {
        l: function (e, t, r) {
          Promise.all([n.e(340985), n.e(541191), n.e(7104), n.e(584510), n.e(332459), n.e(156575), n.e(459455)])
            .then(n.bind(n, "LpkA"))
            .then(({ AppgenShareDialog: n }) => {
              if (r.shouldOpen?.() !== !1) {
                try {
                  ;(0, i.yy)(e, a.CodexSitesSharingEvent, {
                    action: a.CodexSitesSharingAction.CODEX_SITES_SHARING_ACTION_OPENED,
                    projectId: t,
                    source: r.source,
                  })
                } catch {}
                ;(r.onBeforeOpen?.(), (0, o.qf)(e, n, { projectId: t, ...r }))
              }
            })
        },
      },
    )
  },
  ZIh4(e, t, n) {
    var a = n("zTeN"),
      o = n("ChYf"),
      i = n("ZU27")
    n("gbrq")
    var r = n("eFn4"),
      s = n("rxj0"),
      l = n("TSib"),
      d = n("yWTM"),
      c = n("nlNF"),
      u = n("OWtl"),
      p = n("Sd8U"),
      h = n("Oj9r")
    n("OMIV")
    var m = n("UejO")
    let f = (0, a.un)(u.u, ({ get: e }) => e(o.G, { name: "chatgpt.quick-chat" }).isCapable && !e(r.k5)),
      g = (0, a.bD)(h.GD, (e) => null),
      v = (0, a.T1)(
        h.GD,
        (e, { scope: t }) =>
          (n) => (
            t.set(g, e, () => n),
            () => {
              t.get(g, e) === n && t.set(g, e, null)
            }
          ),
      ),
      x = (0, a.T1)(p.PR, (e, { scope: t, derived: n }) =>
        n((n, { scope: { value: a } }) =>
          "chatgpt" === a.kind && (0, d.Li)(a.draftThreadLocationId) && !e && !a.widgetOverlay
            ? (e) => (0, l.O_)(t, e)
            : void 0,
        ),
      ),
      b = (0, a.un)(h.GD, ({ get: e, scope: t }) => {
        e(i.It.activeTab$)
        let n = e(m.f8),
          a = e(c.x2)?.state
        return (
          "home" === t.value.routeKind &&
            a?.sitePreviewDraft != null &&
            t.value.draftThreadLocationId === (0, d.Dl)(a.sitePreviewDraft) &&
            n?.showComposer === !0 &&
            n?.projectId === a.sitePreviewDraft.projectId &&
            (0, m.$Y)(n, t.value, null, t.value.clientThreadId) &&
            e(s.chatGptConsumerLockdownAccountState$),
          !1
        )
      })
    n.d(
      t,
      {},
      {
        Be: function (e) {
          return "site-preview" === e.tabType.kind
        },
        IK: b,
        Nu: v,
        T1: x,
        Wb: f,
        k5: g,
      },
    )
  },
  UejO(e, t, n) {
    var a = n("zTeN"),
      o = n("Ghh3"),
      i = n("OWtl"),
      r = n("nr53")
    let s = (0, a.vP)(i.u, null)
    n.d(
      t,
      {},
      {
        $Y: function (e, t, n, a) {
          return e?.clientThreadId != null
            ? e.clientThreadId === a &&
                ("home" === t.routeKind || "chatgpt-thread" === t.routeKind || "local-thread" === t.routeKind)
            : null != e &&
                ("chatgpt-thread" === t.routeKind || "local-thread" === t.routeKind) &&
                ("chatgpt-thread" === t.routeKind
                  ? null == e.hostId && t.conversationId === (n ?? e.conversationId)
                  : t.hostId === e.hostId && t.conversationId === e.conversationId)
        },
        f8: s,
        tY: function (e, t) {
          !0 !== t.showComposer ||
            (e.set(s, t),
            null == t.url &&
              Promise.all([
                e.query.fetch(r.Nx, t.projectId),
                o.Request.safePost("/hosting/sites/{project_id}/preview", {
                  parameters: { path: { project_id: t.projectId } },
                }),
              ]).then(
                ([n]) => {
                  e.get(s) === t &&
                    e.set(
                      s,
                      null == n.live_url || (e.get(r.Lr) && !1 === n.supports_chatgpt_preview)
                        ? null
                        : { ...t, url: n.live_url },
                    )
                },
                () => {
                  e.get(s) === t && e.set(s, null)
                },
              ))
        },
      },
    )
  },
  Sa4O(e, t, n) {
    n.d(t, { SitePreview: () => eZ })
    var a = n("ABep"),
      o = n("QosV"),
      i = n("iRMi"),
      r = n("slpy"),
      s = n("DHOD"),
      l = n("GxtJ"),
      d = n("RhB8"),
      c = n("zTeN"),
      u = n("zd8w"),
      p = n("Wf1j"),
      h = n("Qgfj"),
      m = n("oyxz"),
      f = n("HZfM"),
      g = n("IDNd"),
      v = n("bqtn"),
      x = n("Ot7V"),
      b = n("GO7r"),
      w = n("evwP"),
      I = n("UxN3"),
      y = n("zOE4"),
      A = n("yGJW"),
      j = n("f4Vb"),
      C = n("nsuH"),
      S = n("Oj9r"),
      T = n("hZax"),
      _ = n("rMNs"),
      N = n("pZQ9"),
      E = n("mjZ0"),
      M = n("v7qY"),
      O = n("l5Vd"),
      D = n("ABuI"),
      R = n("nKJ6"),
      k = n("Z0ob"),
      B = n("rPIX"),
      P = n("v6uO"),
      L = n("WpXe"),
      G = n("pwjC"),
      U = n("grIB"),
      W = n("ygO2"),
      $ = n("JNtf"),
      F = n("mUDD"),
      z = n("HOLv"),
      V = n("lHc5"),
      q = n("OWtl"),
      H = n("Sd8U"),
      K = n("V3rO"),
      X = n("OMIV"),
      Y = n("aa4G"),
      Q = n("cyb2"),
      J = n("ZIh4"),
      Z = n("DBCl"),
      ee = n("uOFa"),
      et = n("wO6P"),
      en = n("JPlo"),
      ea = n("Ow2S"),
      eo = n("TSib"),
      ei = n("Yscs"),
      er = n("ASxG")
    let es = "sites-preview-annotations",
      el = /^(?:appgprj_[a-f0-9]{32}~)?appgdep_[a-f0-9]{32}$/,
      ed = er.string().min(1).max(128),
      ec = er.number().min(-1e7).max(1e7),
      eu = er.number().nonnegative().max(1e7),
      ep = er.object({
        blob: er.custom((e) => e instanceof Blob && "image/png" === e.type && e.size > 0 && e.size <= 4194304),
        width: er.number().int().positive().max(1600),
        height: er.number().int().positive().max(1600),
      }),
      eh = er.object({
        id: ed,
        revision: er.number().int().positive().max(Number.MAX_SAFE_INTEGER),
        text: er.string().trim().min(1).max(4e3),
        target: er.object({
          url: er.url().max(8192),
          selector: er.string().min(1).max(4e3),
          tagName: er.string().min(1).max(128),
          text: er.string().max(2e3),
          bounds: er.object({ x: ec, y: ec, width: eu, height: eu }),
          point: er.object({ x: ec, y: ec }).optional(),
          viewport: er.object({ width: eu, height: eu, scrollX: ec, scrollY: ec }),
        }),
        capture: ep.optional(),
      }),
      em = er.object({
        channel: er.literal(es),
        version: er.literal(1),
        sessionId: ed,
        event: er.discriminatedUnion("type", [
          er.object({
            type: er.literal("state"),
            mode: er.enum(["interact", "annotate"]),
            annotations: er.custom((e) => Array.isArray(e) && e.length <= 100).pipe(er.array(eh)),
          }),
          er.object({ type: er.literal("request-mode"), mode: er.enum(["interact", "annotate"]) }),
          er.object({ type: er.literal("navigation-state"), canGoBack: er.boolean(), canGoForward: er.boolean() }),
          er.object({ type: er.literal("deployment-id"), deploymentId: er.string().regex(el).nullable() }),
        ]),
      })
    function ef(e, t, n, a) {
      if (!e.isTrusted || e.source !== t || !n.includes(e.origin)) return null
      let o = em.safeParse(e.data)
      if (!o.success || o.data.sessionId !== a) return null
      if ("state" !== o.data.event.type) return o.data.event
      let { annotations: i } = o.data.event
      if (new Set(i.map((e) => e.id)).size !== i.length || i.some((t) => new URL(t.target.url).origin !== e.origin))
        return null
      let r = 0x1400000
      for (let e of i) {
        let t = e.capture?.blob.size ?? 0
        t > r ? (e.capture = void 0) : (r -= t)
      }
      return o.data.event
    }
    function eg(e) {
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
        let n = new URL(t)
        return (
          (n.hostname = t.hostname.replace(/\.chatgpt-team\.site$/, ".chatgpt.site")),
          [...new Set([t.origin, n.origin])]
        )
      } catch {
        return []
      }
    }
    var ev = n("GFsD"),
      ex = n("yoOF"),
      eb = n("pLw9")
    class ew {
      scopeKey
      composerRevisionById = new Map()
      consumedRevisionById = new Map()
      observedRevisionById = new Map()
      presentDocumentIds = new Set()
      snapshotFrame = null
      constructor(e = "") {
        this.scopeKey = e
      }
      resetDocument(e) {
        ;(null == e || e !== this.snapshotFrame) &&
          (this.presentDocumentIds.clear(), null != e && (this.snapshotFrame = e))
      }
      observeSnapshot(e) {
        let t = new Set(e.map((e) => e.id))
        for (let t of e) {
          let e = this.consumedRevisionById.get(t.id)
          null != e && t.revision > e && this.consumedRevisionById.delete(t.id)
        }
        let n = e.filter((e) => !this.observedRevisionById.has(e.id) && !this.isConsumed(e.id, e.revision)).length,
          a = e.filter((e) => {
            let t = this.observedRevisionById.get(e.id)
            return null != t && e.revision > t && !this.isConsumed(e.id, e.revision)
          }).length,
          o = [...this.presentDocumentIds].filter((e) => !t.has(e)),
          i = o.filter((e) => !this.isConsumed(e, this.observedRevisionById.get(e) ?? 0)).length
        for (let t of (this.detachFromComposer(o, "remote"), e))
          this.observedRevisionById.set(t.id, Math.max(t.revision, this.observedRevisionById.get(t.id) ?? 0))
        for (let e of (this.presentDocumentIds.clear(), t)) this.presentDocumentIds.add(e)
        let r = []
        return (
          n > 0 && r.push({ annotationCount: n, changeType: "added" }),
          a > 0 && r.push({ annotationCount: a, changeType: "edited" }),
          i > 0 && r.push({ annotationCount: i, changeType: "removed" }),
          r
        )
      }
      admitToComposer(e) {
        this.isConsumed(e.id, e.revision) || this.composerRevisionById.set(e.id, e.revision)
      }
      discardCurrentBatch() {
        this.detachFromComposer(
          new Set([...this.presentDocumentIds, ...this.composerRevisionById.keys()]),
          "batch-discard",
        )
      }
      detachFromComposer(e, t) {
        let n = 0
        for (let a of e) {
          let e = Math.max(this.composerRevisionById.get(a) ?? 0, this.observedRevisionById.get(a) ?? 0)
          ;(e > 0 && this.consumedRevisionById.set(a, Math.max(e, this.consumedRevisionById.get(a) ?? 0)),
            this.composerRevisionById.delete(a) && "user" === t && (n += 1))
        }
        return n > 0 ? { annotationCount: n, changeType: "removed" } : null
      }
      getComposerAnnotationIds() {
        return new Set(this.composerRevisionById.keys())
      }
      isConsumed(e, t) {
        return (this.consumedRevisionById.get(e) ?? 0) >= t
      }
    }
    function eI(e = "") {
      return new ew(e)
    }
    function ey(e) {
      try {
        return e.contentDocument?.querySelector("iframe") ?? null
      } catch {
        return null
      }
    }
    let eA = (0, c.A4)(
        S.GD,
        (e) => !1,
        ({ conversationId: e, browserConversationId: t, previewProjectId: n }, { get: a, set: o }) => {
          if (null != n) return void o(null != a(U.B, `site:${n}`) && null != a(J.k5, n))
          if (null == e || null == t || null == a(U.B, e)) return
          let i = () => o((0, k.pL)(t) ?? !1),
            r = (0, k.s3)(t, i)
          return (i(), r)
        },
      ),
      ej = (0, c.i1)(
        q.u,
        (e, { get: t }) =>
          null == e.conversationId
            ? []
            : t(G.$B, e.conversationId).filter((t) => {
                let n = t.localArtifactAnnotationMetadata?.target
                return n?.type === "site-element-selection" && n.projectId === e.projectId
              }),
        { isEqual: (e, t) => e.length === t.length && e.every((e, n) => e === t[n]) },
      )
    function eC(e) {
      let t,
        n,
        i = (0, o.c)(10),
        r = (0, c.gh)(S.GD).value,
        s = "home" === r.routeKind && (0, O.Uw)(r.pathname, r.search),
        l = (0, c._U)(s ? X.JW : null, "1498265771"),
        d = (0, c.Ul)(!l || J.Wb),
        u = (0, c.Ul)(!!s && J.IK),
        p = (0, c.Ul)(s ? B.Mg : null),
        h = p?.surfaceOwner === "site-preview" && p.previewId === e.resource.projectId
      i[0] !== r ? ((t = (0, S.n1)(r)), (i[0] = r), (i[1] = t)) : (t = i[1])
      let m = t
      if (s) {
        if (p?.surfaceOwner === "site-preview" && p.previewId === e.resource.projectId) m = p.conversationId
        else if (u) m = null
        else if (null != r.draftThreadLocationId) {
          let t
          ;(i[2] !== e.resource.projectId || i[3] !== r.draftThreadLocationId
            ? ((t = (0, H.at)(r.draftThreadLocationId, e.resource.projectId)),
              (i[2] = e.resource.projectId),
              (i[3] = r.draftThreadLocationId),
              (i[4] = t))
            : (t = i[4]),
            (m = t))
        }
      }
      let f = (e.canAnnotate ?? !0) && d && (!l || u)
      return (
        i[5] !== m || i[6] !== h || i[7] !== e || i[8] !== f
          ? ((n = (0, a.jsx)(eS, { ...e, canAnnotate: f, conversationId: m, floatingComposer: h })),
            (i[5] = m),
            (i[6] = h),
            (i[7] = e),
            (i[8] = f),
            (i[9] = n))
          : (n = i[9]),
        n
      )
    }
    function eS(e) {
      let t,
        n,
        i,
        r,
        s,
        l,
        d,
        h,
        f,
        g,
        v,
        x,
        b,
        w,
        I,
        y,
        A,
        j,
        C,
        T,
        _,
        E,
        O,
        k,
        B,
        P,
        L = (0, o.c)(108),
        {
          resource: z,
          wrapper: q,
          conversationId: X,
          floatingComposer: J,
          canAnnotate: er,
          compact: el,
          controlsRef: ed,
          onRefresh: ec,
          refreshDisabled: eu,
        } = e,
        eh = void 0 !== J && J,
        em = void 0 === er || er,
        ew = void 0 !== el && el,
        eC = (0, c.gh)(S.GD),
        eS = (0, p.A)(),
        [eM, eO] = (0, u.useState)(null),
        [eD, eR] = (0, u.useState)(!1),
        [ek, eB] = (0, u.useState)(!1),
        [eP, eL] = (0, u.useState)(!1)
      L[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { canGoBack: !1, canGoForward: !1 }), (L[0] = t))
        : (t = L[0])
      let [eG, eU] = (0, u.useState)(t),
        [eW, e$] = (0, u.useState)(null),
        eF = q?.parentElement,
        ez = (0, u.useRef)(null)
      L[1] !== X || L[2] !== z.projectId
        ? ((n = JSON.stringify([X, z.projectId])), (L[1] = X), (L[2] = z.projectId), (L[3] = n))
        : (n = L[3])
      let eV = n,
        eq = (0, u.useRef)(null)
      L[4] !== X || L[5] !== z.projectId
        ? ((i = { conversationId: X, projectId: z.projectId }), (L[4] = X), (L[5] = z.projectId), (L[6] = i))
        : (i = L[6])
      let eH = (0, c._U)(ej, i)
      L[7] !== eC ? ((r = (0, R.getThreadBrowserConversationId)(eC)), (L[7] = eC), (L[8] = r)) : (r = L[8])
      let eK = eh ? z.projectId : void 0
      L[9] !== X || L[10] !== r || L[11] !== eK
        ? ((s = { conversationId: X, browserConversationId: r, previewProjectId: eK }),
          (L[9] = X),
          (L[10] = r),
          (L[11] = eK),
          (L[12] = s))
        : (s = L[12])
      let eX = (0, c._U)(eA, s)
      L[13] !== X || L[14] !== z.projectId || L[15] !== eC
        ? ((l = (e) => {
            let t = eC.get(ej, { conversationId: X, projectId: z.projectId }).length
            ;(ez.current?.cancel(),
              null != X &&
                ((0, G.xu)(eC, X, (e) =>
                  e.filter((e) => {
                    let t = e.localArtifactAnnotationMetadata?.target
                    return t?.type !== "site-element-selection" || t.projectId !== z.projectId
                  }),
                ),
                e &&
                  t > 0 &&
                  (0, Q.Mu)(eC, {
                    annotationCount: t,
                    conversationId: X,
                    interactionType: "CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_BATCH_DISCARDED",
                    projectId: z.projectId,
                  })))
          }),
          (L[13] = X),
          (L[14] = z.projectId),
          (L[15] = eC),
          (L[16] = l))
        : (l = L[16])
      let eY = l
      L[17] !== eY ? ((d = () => eY(!0)), (L[17] = eY), (L[18] = d)) : (d = L[18])
      let eQ = d
      L[19] !== X || L[20] !== z.projectId || L[21] !== eC || L[22] !== eP
        ? ((h = (e) =>
            !eP && (!(eC.get(ej, { conversationId: X, projectId: z.projectId }).length > 0) || (e$(() => e), !1))),
          (L[19] = X),
          (L[20] = z.projectId),
          (L[21] = eC),
          (L[22] = eP),
          (L[23] = h))
        : (h = L[23])
      let eJ = h
      ;(L[24] !== eH.length || L[25] !== eC || L[26] !== eP
        ? ((f = (e) => {
            let { currentLocation: t, nextLocation: n } = e
            if ("home" === eC.value.routeKind && t.pathname !== n.pathname) {
              let e = (0, S.VJ)({ pathname: n.pathname, routeTemplate: n.pathname, search: n.search })
              if (eC.get(K.iB, (0, K.getThreadScopeRouteId)(e)) === eC.value.clientThreadId) return !1
            }
            return (eH.length > 0 || eP) && (t.pathname !== n.pathname || t.search !== n.search)
          }),
          (L[24] = eH.length),
          (L[25] = eC),
          (L[26] = eP),
          (L[27] = f))
        : (f = L[27]),
        L[28] !== eQ || L[29] !== eP
          ? ((g = () => {
              if (eP) throw Error("Cannot discard Site annotations while submitting")
              eQ()
            }),
            (L[28] = eQ),
            (L[29] = eP),
            (L[30] = g))
          : (g = L[30]))
      let eZ = (0, Y.e)(f, 10, g)
      L[31] !== eZ
        ? ((v = () => {
            ;("blocked" === eZ.state && eZ.reset(), e$(null))
          }),
          (L[31] = eZ),
          (L[32] = v))
        : (v = L[32])
      let e0 = v
      L[33] !== eY ? ((x = () => eY(!1)), (L[33] = eY), (L[34] = x)) : (x = L[34])
      let e1 = (0, u.useEffectEvent)(x),
        e2 = eH.length > 0
      L[35] !== X || L[36] !== z.projectId || L[37] !== eC
        ? ((b = (e) => {
            let { annotationCount: t, changeType: n } = e
            if (null == X) return
            let a = "CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_REMOVED"
            ;("added" === n
              ? (a = "CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_ADDED")
              : "edited" === n && (a = "CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_EDITED"),
              (0, Q.Mu)(eC, { annotationCount: t, conversationId: X, interactionType: a, projectId: z.projectId }))
          }),
          (L[35] = X),
          (L[36] = z.projectId),
          (L[37] = eC),
          (L[38] = b))
        : (b = L[38])
      let e3 = (0, u.useEffectEvent)(b)
      ;(L[39] !== e1 || L[40] !== e2
        ? ((w = () => {
            if (!e2) return
            let e = () => e1()
            return (
              window.addEventListener("beforeunload", e_),
              window.addEventListener("pagehide", e),
              () => {
                ;(window.removeEventListener("beforeunload", e_), window.removeEventListener("pagehide", e))
              }
            )
          }),
          (L[39] = e1),
          (L[40] = e2),
          (L[41] = w))
        : (w = L[41]),
        L[42] !== e2 ? ((I = [e2]), (L[42] = e2), (L[43] = I)) : (I = L[43]),
        (0, u.useEffect)(w, I),
        L[44] !== eJ ? ((y = () => ({ confirmAction: eJ })), (L[44] = eJ), (L[45] = y)) : (y = L[45]),
        (0, u.useImperativeHandle)(ed, y),
        L[46] !== eJ
          ? ((A = (e) => {
              let t = () => {
                ;(ez.current?.setMode(!1), ez.current?.navigate(e))
              }
              eJ(t) && t()
            }),
            (L[46] = eJ),
            (L[47] = A))
          : (A = L[47]))
      let e5 = A
      ;(L[48] !== eV || L[49] !== em || L[50] !== X || L[51] !== e3 || L[52] !== z || L[53] !== eC || L[54] !== q
        ? ((j = () => {
            if (!q) return
            let e = eq.current?.scopeKey === eV ? eq.current : eI(eV)
            eq.current = e
            let t = (function ({
              scope: e,
              composerScope: t,
              wrapper: n,
              conversationId: a,
              resource: o,
              canAnnotate: i = !0,
              hasPendingAnnotations: r = () => !1,
              annotationLifecycle: s = eI(),
              onAnnotationChange: l = () => {},
              onNavigationChange: d,
              onModeChange: c,
              onReadyChange: u,
              onSendingChange: p = () => {},
            }) {
              let h,
                m,
                f = !1,
                g = !1,
                v = (e) => {},
                x = (e, t) => {
                  let n = [...e],
                    a = s.detachFromComposer(n, t)
                  if ("submit" === t) for (let e of n) v(e)
                  a && l(a)
                },
                b = () => {},
                w = (t) => {
                  g ||
                    (t && (!i || null == a)) ||
                    (t && !f && (0, ex.O)(e, { surface: "site" }), (f = t), c(t), m ? m() : y())
                },
                I = () => {},
                y = () => {
                  let A, j
                  ;(h?.(),
                    u?.(!1),
                    d?.({ canGoBack: !1, canGoForward: !1 }),
                    (b = () => {}),
                    c(f),
                    (m = void 0),
                    (I = () => {}))
                  let C = ey(n),
                    S = C?.contentWindow
                  if (!C || !S) return
                  s.resetDocument(C)
                  let T = C.src,
                    _ = eg(T)
                  if (0 === _.length) return
                  let N = crypto.randomUUID(),
                    E = { canGoBack: !1, canGoForward: !1 },
                    M = !1,
                    O = !0,
                    D = 1e3,
                    R = (e) => {
                      if (O)
                        for (let t of A ? [A] : _)
                          S.postMessage({ channel: es, version: 1, sessionId: N, command: e }, t)
                    }
                  ;((v = (e) => R({ type: "remove", annotationId: e })),
                    (b = (e) => {
                      !O ||
                        !A ||
                        g ||
                        f ||
                        r() ||
                        (ey(n) !== C || C.src !== T
                          ? y()
                          : ("back" === e ? E.canGoBack : E.canGoForward) &&
                            (R({ type: "back" === e ? "navigate-back" : "navigate-forward" }), S.focus()))
                    }))
                  let k = (e) => !(g || M || ("interact" === e && r())) && (w("annotate" === e), !0),
                    B = (e) => {
                      "Escape" === e.key &&
                        !e.defaultPrevented &&
                        !e.isComposing &&
                        f &&
                        k("interact") &&
                        (e.preventDefault(), e.stopPropagation())
                    },
                    P = (e) => {
                      if (!O || ey(n) !== C || C.src !== T) return
                      let t = ef(e, S, A ? [A] : _, N)
                      if (t) {
                        if (!A) {
                          if ("state" !== t.type || t.mode !== (f ? "annotate" : "interact")) return
                          ;((A = e.origin), u?.(!0))
                        }
                        if ("navigation-state" === t.type) {
                          ;((E = { canGoBack: t.canGoBack, canGoForward: t.canGoForward }), d?.(E))
                          return
                        }
                        if ("request-mode" === t.type) return void k(t.mode)
                        if ("state" === t.type) {
                          if (t.mode === (f ? "annotate" : "interact") && (clearTimeout(j), M)) {
                            ;((M = !1), R({ type: "cancel" }), f && L())
                            return
                          }
                          if (!g && f && "annotate" === t.mode) {
                            for (let e of s.observeSnapshot(t.annotations)) l(e)
                            U?.reconcile(t.annotations)
                          }
                        }
                      }
                    },
                    L = () => {
                      if ((clearTimeout(j), O)) {
                        if (ey(n) !== C || C.src !== T) return void y()
                        ;(R({ type: "set-mode", mode: f ? "annotate" : "interact" }),
                          (j = setTimeout(L, D)),
                          (D = Math.min(2 * D, 5e3)))
                      }
                    },
                    U =
                      i && null != a
                        ? (function ({
                            scope: e,
                            composerScope: t,
                            conversationId: n,
                            resource: a,
                            cancelPreview: o,
                            getComposerAnnotationIds: i,
                            isAnnotationConsumed: r,
                            removePreviewAnnotation: s,
                            onAnnotationAdmitted: l,
                            onAnnotationsDetached: d,
                            onSendingChange: c,
                          }) {
                            let u,
                              p = !0,
                              h = () => (t?.value.kind === "local" ? t.get(eo.mX) : e.get(ea.Mb, n)),
                              m = new Map(),
                              f = [],
                              g = null,
                              v = !1,
                              x = `site:${a.projectId}:`,
                              b = (e) => `${x}${e}`,
                              w = (e) => {
                                for (let t of e) m.delete(t.id)
                              },
                              I = (e, t) => {
                                let n = !0 === u && !e
                                if ((e !== u && ((u = e) && ((f = []), (g = null)), c(u)), e)) return
                                let a = new Map(t.map((e) => [e.localArtifactAnnotationContext?.annotationId, e])),
                                  r = [...i()].filter((e) => !a.has(b(e)))
                                d(r, n ? "submit" : "user")
                                let l = []
                                for (let [e, t] of m) {
                                  let n = a.get(b(e))
                                  n ? (t.comment = n) : l.push(f.find((t) => t.id === e) ?? t.annotation)
                                }
                                if (l.length > 0)
                                  if ((w(l), 0 === m.size)) o()
                                  else for (let e of l) s(e.id)
                                if (!n) {
                                  let e = new Set(l.map((e) => e.id))
                                  for (let t of r) e.has(t) || s(t)
                                }
                              },
                              y =
                                t?.value.kind === "local"
                                  ? t.watch((e) => I(e.get(eo.mX), e.get(G.$B, n)))
                                  : e.watch((e) => I(e.get(ea.Mb, n), e.get(G.$B, n)))
                            return {
                              reconcile: (t) => {
                                !h() &&
                                  ((g = f = t),
                                  v ||
                                    (async () => {
                                      v = !0
                                      try {
                                        for (; p && g && !h();) {
                                          let t = g
                                          g = null
                                          let o = new Map(),
                                            i = Math.max(0, ...e.get(G.$B, n).map((e) => e.position.line))
                                          for (let e of t) {
                                            if (g || !p) break
                                            if (r(e.id, e.revision)) continue
                                            let t = m.get(e.id)
                                            if (t && t.annotation.revision >= e.revision) {
                                              o.set(e.id, t)
                                              continue
                                            }
                                            let n = (function (e, t, n, a) {
                                              let o = new URL(e.target.url)
                                              return (
                                                (o.search = ""),
                                                (o.hash = ""),
                                                (o.username = ""),
                                                (o.password = ""),
                                                (0, Z.QCM)({
                                                  annotationId: n,
                                                  artifactKind: "site",
                                                  body: e.text,
                                                  label: (0, ev.I)(e.target),
                                                  line: a,
                                                  path: o.origin + o.pathname,
                                                  title: (t.title ?? o.hostname).replace(/[\r\n\u2028\u2029]/g, " "),
                                                  metadata: {
                                                    target: {
                                                      ...e.target,
                                                      url: o.toString(),
                                                      type: "site-element-selection",
                                                      projectId: t.projectId,
                                                    },
                                                  },
                                                })
                                              )
                                            })(e, a, b(e.id), t?.comment.position.line ?? ++i)
                                            ;(e.capture &&
                                              (n.localBrowserScreenshot = await (async function (e, t) {
                                                try {
                                                  return (
                                                    await (async function (e) {
                                                      if (!ep.safeParse(e).success)
                                                        throw Error("Invalid Site annotation capture")
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
                                                    })(e),
                                                    {
                                                      commentId: t,
                                                      dataUrl: await (0, ei.G)(e.blob),
                                                      width: e.width,
                                                      height: e.height,
                                                    }
                                                  )
                                                } catch {
                                                  return
                                                }
                                              })(e.capture, b(e.id))),
                                              r(e.id, e.revision) || o.set(e.id, { annotation: e, comment: n }))
                                          }
                                          if (!p || h() || g || t !== f) continue
                                          let s = new Set([...m.keys(), ...o.keys()].map(b))
                                          for (let [e, t] of (m.clear(), o)) r(e, t.annotation.revision) || m.set(e, t)
                                          for (let { annotation: t } of ((0, G.xu)(e, n, (e) => [
                                            ...e.filter(
                                              (e) => !s.has(e.localArtifactAnnotationContext?.annotationId ?? ""),
                                            ),
                                            ...[...m.values()].map(({ comment: e }) => e),
                                          ]),
                                          m.values()))
                                            l(t)
                                        }
                                      } finally {
                                        v = !1
                                      }
                                    })())
                              },
                              discardAll: () => {
                                ;(w([...m.values()].map(({ annotation: e }) => e)), w(f), (f = []), (g = null))
                              },
                              cancel: () => {
                                ;(o(),
                                  (0, G.xu)(e, n, (e) =>
                                    e.filter((e) => !e.localArtifactAnnotationContext?.annotationId?.startsWith(x)),
                                  ))
                              },
                              dispose: () => {
                                ;((p = !1), (g = null), y())
                              },
                            }
                          })({
                            scope: e,
                            composerScope: t,
                            conversationId: a,
                            resource: o,
                            cancelPreview: () => {
                              ;(s.discardCurrentBatch(),
                                U?.discardAll(),
                                (f = !1),
                                c(!1),
                                clearTimeout(j),
                                A ? R({ type: "cancel" }) : ((M = !0), L()))
                            },
                            getComposerAnnotationIds: () => s.getComposerAnnotationIds(),
                            isAnnotationConsumed: (e, t) => s.isConsumed(e, t),
                            removePreviewAnnotation: v,
                            onAnnotationAdmitted: (e) => s.admitToComposer(e),
                            onAnnotationsDetached: x,
                            onSendingChange: (e) => {
                              let t = g && !e
                              ;((g = e), (e || (t && r())) && (c((f = !e)), m?.()), p(e))
                            },
                          })
                        : null
                  ;((I = () => {
                    U?.cancel()
                  }),
                    (m = () => {
                      ;((D = 1e3), L())
                    }),
                    window.addEventListener("message", P),
                    window.addEventListener("keydown", B))
                  let W = () => {
                    ;(s.resetDocument(), y())
                  }
                  ;(C.addEventListener("load", W),
                    i &&
                      null != a &&
                      e.set(
                        eb.R,
                        { conversationId: a, projectId: o.projectId },
                        {
                          focus: (e) => {
                            !g && A && ((f = !0), c(!0), L(), R({ type: "focus", annotationId: e }))
                          },
                        },
                      ),
                    (h = () => {
                      ;(i && null != a && e.set(eb.R, { conversationId: a, projectId: o.projectId }, null),
                        R({ type: "set-mode", mode: "interact" }),
                        (O = !1),
                        clearTimeout(j),
                        U?.dispose(),
                        window.removeEventListener("message", P),
                        window.removeEventListener("keydown", B),
                        C.removeEventListener("load", W))
                    }),
                    L())
                }
              return (
                n.addEventListener("load", y),
                y(),
                {
                  setMode: w,
                  navigate: (e) => b(e),
                  cancel: () => {
                    g || I()
                  },
                  detachSubmittedAnnotations: (e) => {
                    ;(x(e, "submit"), w(!1))
                  },
                  dispose: () => {
                    ;(u?.(!1), n.removeEventListener("load", y), h?.())
                  },
                }
              )
            })({
              scope: eC,
              composerScope: (0, H.Oq)(eC),
              wrapper: q,
              conversationId: X,
              resource: z,
              canAnnotate: em,
              annotationLifecycle: e,
              hasPendingAnnotations: () => eC.get(ej, { conversationId: X, projectId: z.projectId }).length > 0,
              onAnnotationChange: e3,
              onNavigationChange: eU,
              onModeChange: eR,
              onReadyChange: eB,
              onSendingChange: eL,
            })
            return (
              (ez.current = t),
              () => {
                ;(t.dispose(), (ez.current = null))
              }
            )
          }),
          (L[48] = eV),
          (L[49] = em),
          (L[50] = X),
          (L[51] = e3),
          (L[52] = z),
          (L[53] = eC),
          (L[54] = q),
          (L[55] = j))
        : (j = L[55]),
        L[56] !== eV || L[57] !== em || L[58] !== X || L[59] !== z || L[60] !== eC || L[61] !== q
          ? ((C = [eV, q, eC, X, z, em]),
            (L[56] = eV),
            (L[57] = em),
            (L[58] = X),
            (L[59] = z),
            (L[60] = eC),
            (L[61] = q),
            (L[62] = C))
          : (C = L[62]),
        (0, u.useEffect)(j, C))
      let e4 = ek && !eP && eG.canGoBack,
        e6 = ek && !eP && eG.canGoForward
      L[63] !== e5
        ? ((T = () => e5("back")), (_ = () => e5("forward")), (L[63] = e5), (L[64] = T), (L[65] = _))
        : ((T = L[64]), (_ = L[65]))
      let e7 = eu || eP
      return (
        L[66] !== ew || L[67] !== ec || L[68] !== e4 || L[69] !== e6 || L[70] !== T || L[71] !== _ || L[72] !== e7
          ? ((E = (0, a.jsx)(eE, {
              compact: ew,
              canGoBack: e4,
              canGoForward: e6,
              onBack: T,
              onForward: _,
              onRefresh: ec,
              refreshDisabled: e7,
            })),
            (L[66] = ew),
            (L[67] = ec),
            (L[68] = e4),
            (L[69] = e6),
            (L[70] = T),
            (L[71] = _),
            (L[72] = e7),
            (L[73] = E))
          : (E = L[73]),
        L[74] !== eD ||
        L[75] !== em ||
        L[76] !== ew ||
        L[77] !== X ||
        L[78] !== ek ||
        L[79] !== z.projectId ||
        L[80] !== eC ||
        L[81] !== eP
          ? ((O =
              em && null != X
                ? (0, a.jsx)(eN, {
                    annotating: eD,
                    compact: ew,
                    disabled: !ek || eP,
                    onToggle: () => {
                      let e = !eD
                      ;(ez.current?.setMode(e),
                        (0, Q.Mu)(eC, {
                          conversationId: X,
                          interactionType: e
                            ? "CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_MODE_ENABLE_CLICKED"
                            : "CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_MODE_DISABLE_CLICKED",
                          projectId: z.projectId,
                        }))
                    },
                  })
                : null),
            (L[74] = eD),
            (L[75] = em),
            (L[76] = ew),
            (L[77] = X),
            (L[78] = ek),
            (L[79] = z.projectId),
            (L[80] = eC),
            (L[81] = eP),
            (L[82] = O))
          : (O = L[82]),
        L[83] !== eD ||
        L[84] !== em ||
        L[85] !== eX ||
        L[86] !== eH ||
        L[87] !== X ||
        L[88] !== eQ ||
        L[89] !== eh ||
        L[90] !== eS ||
        L[91] !== eF ||
        L[92] !== z.projectId ||
        L[93] !== eC ||
        L[94] !== eP ||
        L[95] !== eM
          ? ((k =
              em && null != X && eF && !eP && (eD || eH.length > 0)
                ? (0, M.createPortal)(
                    (0, a.jsx)(N.ZR, {
                      variant: "annotation",
                      enterFromBottom: eD && 0 === eH.length,
                      attention: eD && 0 === eH.length,
                      label: eS.formatMessage({
                        id: "sites.preview.annotations.toolbar",
                        defaultMessage: "Site annotations",
                        description: "Accessible label for the floating Site annotation toolbar",
                      }),
                      dragHandleLabel: eS.formatMessage({
                        id: "sites.preview.annotations.moveToolbar",
                        defaultMessage: "Move toolbar",
                        description: "Accessible label for the Site annotation toolbar drag handle",
                      }),
                      position: eM,
                      onPositionChange: eO,
                      children: (e) =>
                        (0, a.jsx)(D.U7, {
                          previewDisabled: e,
                          annotationCount: eH.length,
                          embedded: !0,
                          isAnnotating: eD,
                          previewContent: (0, a.jsx)(V.x, {
                            commentAttachments: eH,
                            onEditAnnotation: (e) => (0, eb.t)(eC, X, e),
                            onRemoveAnnotation: (e) => {
                              ;(0, G.xu)(eC, X, (t) =>
                                t.filter(
                                  (t) =>
                                    t.localArtifactAnnotationContext?.annotationId !==
                                    e.localArtifactAnnotationContext?.annotationId,
                                ),
                              )
                            },
                            cwd: null,
                            hostId: "hostId" in eC.value ? (eC.value.hostId ?? "local") : "local",
                          }),
                          phase: "idle",
                          isSubmitting: eP,
                          sendDisabled: !eX,
                          onCancel: eQ,
                          onSend: () => {
                            if (!eX || eP) return
                            let e = eC.get(ej, { conversationId: X, projectId: z.projectId })
                            if (0 === e.length) return
                            let t = ez.current,
                              n = `site:${z.projectId}:`,
                              a = e.flatMap((e) => {
                                let t = e.localArtifactAnnotationContext?.annotationId
                                return t?.startsWith(n) ? [t.slice(n.length)] : []
                              })
                            ;(eL(!0),
                              (0, Q.Mu)(eC, {
                                annotationCount: e.length,
                                conversationId: X,
                                interactionType: "CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_BATCH_SUBMIT_CLICKED",
                                projectId: z.projectId,
                              }),
                              (async function (e, t, n, a, o = t) {
                                let i = n[0]
                                if (!i) return
                                let r = (0, en.hv)(n),
                                  s = (0, et.B)(e, "site", "site", t, r.submissionSource),
                                  l = e.get(U.B, o)?.submit
                                try {
                                  await l?.({
                                    type: "artifact-annotation-direct-submit",
                                    body: n.map(ee.rw).join("\n\n"),
                                    comment: i,
                                    comments: n,
                                    diagnostics: r,
                                    isCurrent: () => e.get(U.B, o)?.submit === l,
                                    onSubmitError: s,
                                    onAccepted: (o, i) => {
                                      ;((r.accepted = !0), s(i ? "queued" : "accepted"), a())
                                      let l = new Set(n)
                                      for (let n of new Set([t, o]))
                                        null != n && (0, G.xu)(e, n, (e) => e.filter((e) => !l.has(e)))
                                    },
                                  })
                                } finally {
                                  r.accepted || s(r.refusalReason ?? "unknown")
                                }
                              })(eC, X, e, () => t?.detachSubmittedAnnotations(a), eh ? `site:${z.projectId}` : X)
                                .catch(eT)
                                .finally(() => eL(!1)))
                          },
                        }),
                    }),
                    eF,
                  )
                : null),
            (L[83] = eD),
            (L[84] = em),
            (L[85] = eX),
            (L[86] = eH),
            (L[87] = X),
            (L[88] = eQ),
            (L[89] = eh),
            (L[90] = eS),
            (L[91] = eF),
            (L[92] = z.projectId),
            (L[93] = eC),
            (L[94] = eP),
            (L[95] = eM),
            (L[96] = k))
          : (k = L[96]),
        L[97] !== eZ || L[98] !== eQ || L[99] !== e0 || L[100] !== eW || L[101] !== eP
          ? ((B =
              null != eW || "blocked" === eZ.state
                ? (0, a.jsx)($.lG, {
                    open: !0,
                    size: "compact",
                    onOpenChange: (e) => {
                      e || e0()
                    },
                    children: (0, a.jsxs)(F.R4, {
                      as: "form",
                      onSubmit: (e) => {
                        ;(e.preventDefault(),
                          eP || ("blocked" === eZ.state ? (e$(null), eZ.proceed()) : (eQ(), e$(null), eW?.())))
                      },
                      children: [
                        (0, a.jsx)(F.OO, {
                          children: (0, a.jsx)(F.c7, {
                            title: (0, a.jsx)($.L3, {
                              children: (0, a.jsx)(m.A, {
                                id: "sites.preview.discardAnnotations.title",
                                defaultMessage: "Discard annotations?",
                                description:
                                  "Confirmation title before closing, refreshing, or navigating a Site preview with pending comments",
                              }),
                            }),
                            subtitle: (0, a.jsx)($.rr, {
                              children: (0, a.jsx)(m.A, {
                                id: "sites.preview.discardAnnotations.description",
                                defaultMessage: "Your annotations haven’t been sent yet.",
                                description:
                                  "Reminds the user that their annotations have not been sent yet before they choose whether to discard them.",
                              }),
                            }),
                          }),
                        }),
                        (0, a.jsx)(F.OO, {
                          children: (0, a.jsxs)(F.Es, {
                            children: [
                              (0, a.jsx)(W.$, {
                                color: "outline",
                                onClick: e0,
                                children: (0, a.jsx)(m.A, {
                                  id: "sites.preview.discardAnnotations.cancel",
                                  defaultMessage: "Keep editing",
                                  description: "Cancels the requested preview action and preserves pending annotations",
                                }),
                              }),
                              (0, a.jsx)(W.$, {
                                type: "submit",
                                color: "dangerSolid",
                                disabled: eP,
                                children: (0, a.jsx)(m.A, {
                                  id: "sites.preview.discardAnnotations.confirm",
                                  defaultMessage: "Discard",
                                  description:
                                    "Discards this Site's pending annotations and continues the requested close, refresh, or navigation",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  })
                : null),
            (L[97] = eZ),
            (L[98] = eQ),
            (L[99] = e0),
            (L[100] = eW),
            (L[101] = eP),
            (L[102] = B))
          : (B = L[102]),
        L[103] !== E || L[104] !== O || L[105] !== k || L[106] !== B
          ? ((P = (0, a.jsxs)(a.Fragment, { children: [E, O, k, B] })),
            (L[103] = E),
            (L[104] = O),
            (L[105] = k),
            (L[106] = B),
            (L[107] = P))
          : (P = L[107]),
        P
      )
    }
    function eT() {}
    function e_(e) {
      e.preventDefault()
    }
    function eN(e) {
      let t,
        n,
        i,
        s,
        l,
        h,
        m = (0, o.c)(23),
        { annotating: f, compact: v, disabled: x, onToggle: b } = e,
        w = void 0 !== v && v,
        I = (0, c.gh)(q.u),
        y = (0, u.useContext)(g.G),
        A = (0, p.A)(),
        j = (0, c._U)(L.Xv, "artifact")
      m[0] !== j || m[1] !== A
        ? ((t =
            null == j
              ? A.formatMessage({
                  id: "sites.preview.annotations.requestEdits",
                  defaultMessage: "Request edits",
                  description:
                    "Button label and collapsed button tooltip in the Site preview toolbar. Toggles selection mode so users can select website content and leave comments requesting edits.",
                })
              : A.formatMessage(j)),
          (m[0] = j),
          (m[1] = A),
          (m[2] = t))
        : (t = m[2])
      let C = t,
        S = w ? C : null
      m[3] !== x || m[4] !== y || m[5] !== I
        ? ((n = (e) => {
            if (null != e && y && !x) return (0, L.Ou)(I, "artifact", e)
          }),
          (m[3] = x),
          (m[4] = y),
          (m[5] = I),
          (m[6] = n))
        : (n = m[6])
      let T = w ? void 0 : C
      return (
        m[7] !== f ? ((i = (0, a.jsx)(P.a, { active: f })), (m[7] = f), (m[8] = i)) : (i = m[8]),
        m[9] !== f || m[10] !== x || m[11] !== C || m[12] !== b || m[13] !== n || m[14] !== T || m[15] !== i
          ? ((s = (0, a.jsx)(d.b_, {
              ref: n,
              "aria-label": C,
              label: T,
              pressed: f,
              size: "default",
              variant: "annotation",
              disabled: x,
              onClick: b,
              children: i,
            })),
            (m[9] = f),
            (m[10] = x),
            (m[11] = C),
            (m[12] = b),
            (m[13] = n),
            (m[14] = T),
            (m[15] = i),
            (m[16] = s))
          : (s = m[16]),
        m[17] !== S || m[18] !== s
          ? ((l = (0, a.jsx)(r.m, { content: S, openDelay: 250, children: s })), (m[17] = S), (m[18] = s), (m[19] = l))
          : (l = m[19]),
        m[20] !== C || m[21] !== l
          ? ((h = (0, a.jsx)(N.J5, { label: C, children: l })), (m[20] = C), (m[21] = l), (m[22] = h))
          : (h = m[22]),
        h
      )
    }
    function eE(e) {
      let t,
        n,
        i,
        r,
        s,
        l,
        d,
        c,
        u,
        h = (0, o.c)(29),
        {
          compact: f,
          canGoBack: g,
          canGoForward: x,
          onBack: w,
          onForward: I,
          onRefresh: y,
          refreshDisabled: A,
          showNavigation: j,
        } = e,
        C = void 0 !== f && f,
        S = void 0 === j || j,
        T = (0, p.A)()
      h[0] !== T
        ? ((t = T.formatMessage({
            id: "sites.preview.back",
            defaultMessage: "Go back",
            description: "Navigate back within the Site preview",
          })),
          (h[0] = T),
          (h[1] = t))
        : (t = h[1])
      let _ = t
      h[2] !== T
        ? ((n = T.formatMessage({
            id: "sites.preview.forward",
            defaultMessage: "Go forward",
            description: "Navigate forward within the Site preview",
          })),
          (h[2] = T),
          (h[3] = n))
        : (n = h[3])
      let M = n
      h[4] !== T
        ? ((i = T.formatMessage({
            id: "sites.preview.refresh",
            defaultMessage: "Refresh preview",
            description: "Button to reload the generated Site preview or retry after an error",
          })),
          (h[4] = T),
          (h[5] = i))
        : (i = h[5])
      let O = i
      h[6] !== T
        ? ((r = T.formatMessage({
            id: "sites.preview.history",
            defaultMessage: "Navigation history",
            description:
              "Accessible label for a menu containing back and forward navigation options in a narrow Site preview header",
          })),
          (h[6] = T),
          (h[7] = r))
        : (r = h[7])
      let D = r
      return (
        h[8] !== T
          ? ((s = T.formatMessage({
              id: "sites.preview.navigationControls",
              defaultMessage: "Preview navigation",
              description: "Accessible label for Site preview back, forward, and refresh controls",
            })),
            (h[8] = T),
            (h[9] = s))
          : (s = h[9]),
        h[10] !== _ ||
        h[11] !== g ||
        h[12] !== x ||
        h[13] !== C ||
        h[14] !== M ||
        h[15] !== D ||
        h[16] !== w ||
        h[17] !== I ||
        h[18] !== S
          ? ((l =
              S &&
              (C
                ? (0, a.jsxs)(v.Ab, {
                    align: "start",
                    contentWidth: "menu",
                    triggerButton: (0, a.jsx)(N.DW, { "aria-label": D, uniform: !0, children: (0, a.jsx)(b.QC9, {}) }),
                    children: [
                      (0, a.jsx)(v.ms.Item, {
                        disabled: !g,
                        leftIcon: (0, a.jsx)(b.tOb, {}),
                        onSelect: w,
                        children: (0, a.jsx)(m.A, {
                          id: "sites.preview.history.back",
                          defaultMessage: "Back",
                          description: "Menu item that navigates backward within the Site preview history",
                        }),
                      }),
                      (0, a.jsx)(v.ms.Item, {
                        disabled: !x,
                        leftIcon: (0, a.jsx)(b.Imh, {}),
                        onSelect: I,
                        children: (0, a.jsx)(m.A, {
                          id: "sites.preview.history.forward",
                          defaultMessage: "Forward",
                          description: "Menu item that navigates forward within the Site preview history",
                        }),
                      }),
                    ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(N.DW, {
                        "aria-label": _,
                        uniform: !0,
                        disabled: !g,
                        onClick: w,
                        children: (0, a.jsx)(b.tOb, {}),
                      }),
                      (0, a.jsx)(N.DW, {
                        "aria-label": M,
                        uniform: !0,
                        disabled: !x,
                        onClick: I,
                        children: (0, a.jsx)(b.Imh, {}),
                      }),
                      (0, a.jsx)(N.ff, {}),
                    ],
                  }))),
            (h[10] = _),
            (h[11] = g),
            (h[12] = x),
            (h[13] = C),
            (h[14] = M),
            (h[15] = D),
            (h[16] = w),
            (h[17] = I),
            (h[18] = S),
            (h[19] = l))
          : (l = h[19]),
        h[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)(z.I, { asset: E.S })), (h[20] = d))
          : (d = h[20]),
        h[21] !== y || h[22] !== O || h[23] !== A
          ? ((c = (0, a.jsx)(N.DW, { "aria-label": O, uniform: !0, disabled: A, onClick: y, children: d })),
            (h[21] = y),
            (h[22] = O),
            (h[23] = A),
            (h[24] = c))
          : (c = h[24]),
        h[25] !== c || h[26] !== s || h[27] !== l
          ? ((u = (0, a.jsxs)(N.J5, { variant: "window", label: s, children: [l, c] })),
            (h[25] = c),
            (h[26] = s),
            (h[27] = l),
            (h[28] = u))
          : (u = h[28]),
        u
      )
    }
    var eM = n("BF4Y"),
      eO = n("KaH3"),
      eD = n("SQbA"),
      eR = n("b3Qd"),
      ek = n("ex8A"),
      eB = n("nr53"),
      eP = n("SZCv"),
      eL = n.n(eP),
      eG = n("AuIy"),
      eU = n("vdpW"),
      eW = n("pA0U"),
      e$ = n("MrGp"),
      eF = n("lIsV"),
      ez = n("AqC0"),
      eV = n("nf3G"),
      eq = n("mv4d"),
      eH = n("Lnny")
    let eK = (0, c.T1)(
      S.GD,
      (e, { scope: t, derived: n }) =>
        n(
          (n, { scope: { get: a } }) =>
            ((n) => {
              if ("local-thread" === t.value.routeKind || "client-local-thread" === t.value.routeKind) {
                let a = n(K.dY)
                if (null == a) return null
                let o = n(eU.M, { hostId: n(eV.threadHostId$), threadId: a })
                for (let a of o?.slice().reverse() ?? []) {
                  n(eU.hm, a)
                  let o = (0, eU.od)(t, a)
                  if (null != o)
                    for (let t of (0, eW.W)(o.items).reverse()) {
                      if ("mcpToolCall" !== t.type) continue
                      let i = n(eU.mz, { ...a, itemId: t.id })
                      if (i?.type !== "mcpToolCall") continue
                      let r = (0, eO.yT)([(0, ez.H5)(o, i)])[0]
                      if (r?.projectId === e) {
                        let e = eX(r, n)
                        if (null != e) return e
                      }
                    }
                }
                return null
              }
              if ("chatgpt-thread" !== t.value.routeKind) return null
              let a = t.value.conversationId,
                o = null != n(e$.N4, a),
                i = n(e$.Od, a)
              n(e$.F1, a)
              let r = t.get(e$.Jv, a)
              if (null == i || null == r) return null
              for (let t of (0, eG.UI)({ current_node: i, mapping: r }).reverse()) {
                let a = eY(t, e)
                if (null == a) continue
                let i = eX(a, o ? void 0 : n)
                if (null != i) return i
              }
              return null
            })(a),
          { isEqual: eL() },
        ),
      { autoDispose: 6e4 },
    )
    function eX(e, t) {
      let n = t && e.deployment ? t(eH.z5, e) : e.publishedRevision
      if (null == n) return null
      let a = n === e.deployment?.id ? el.test(n) : n.startsWith("appgdep_")
      return { id: n, expectedDeploymentId: a ? n : void 0 }
    }
    function eY(e, t) {
      if ("tool" !== e.author.role) return null
      let n = (0, eF.X_)(e)?.item,
        a = n?.type === "mcp-tool-call" ? n : (0, eq.T)(e)
      if (null == a) return null
      let o = (0, eO.yT)([a])[0]
      return o?.projectId === t ? o : null
    }
    var eQ = n("nOnM"),
      eJ = n("kZPb")
    function eZ(e) {
      let t,
        n,
        i,
        r,
        s,
        l,
        d = (0, o.c)(32),
        { resource: p, onClose: h, controlsRef: m, onNavigateToSite: f, isVisible: v, showComposer: x } = e,
        b = void 0 === v || v,
        w = void 0 !== x && x,
        I = (0, c.gh)(S.GD),
        y = (0, u.useContext)(g.G),
        A = (0, c.Ul)(eB.Lr),
        j = (0, c._U)(A ? null : eK, p.projectId)
      d[0] !== j || d[1] !== p ? ((t = j ?? eX(p)), (d[0] = j), (d[1] = p), (d[2] = t)) : (t = d[2])
      let C = t,
        T = C?.id
      d[3] !== T || d[4] !== p.projectId || d[5] !== I
        ? ((n = () => {
            let e = (function (e, t) {
              let n = new Set()
              if ("chatgpt-thread" === e.value.routeKind)
                for (let a of Object.values(e.get(e$.Jv, e.value.conversationId) ?? {})) {
                  if (null == a.message) continue
                  let e = eY(a.message, t),
                    o = e?.publishedRevision ?? e?.deployment?.id
                  null != o && n.add(o)
                }
              else if ("local-thread" === e.value.routeKind || "client-local-thread" === e.value.routeKind) {
                let a = e.get(K.dY)
                if (null == a) return n
                for (let o of e.get(eU.M, { hostId: e.get(eV.threadHostId$), threadId: a }) ?? []) {
                  let a = (0, eU.od)(e, o)
                  if (null != a)
                    for (let e of (0, eW.W)(a.items)) {
                      if ("mcpToolCall" !== e.type) continue
                      let o = (0, eO.yT)([(0, ez.H5)(a, e)])[0]
                      if (o?.projectId === t) {
                        let e = o.publishedRevision ?? o.deployment?.id
                        null != e && n.add(e)
                      }
                    }
                }
              }
              return n
            })(I, p.projectId)
            return (null != T && e.add(T), { revision: T, known: e, expectedDeploymentId: void 0 })
          }),
          (d[3] = T),
          (d[4] = p.projectId),
          (d[5] = I),
          (d[6] = n))
        : (n = d[6])
      let [_, N] = (0, u.useState)(n)
      if (_.revision !== T) {
        let e, t
        d[7] !== _.known || d[8] !== T
          ? ((e = null != T && !_.known.has(T)), (d[7] = _.known), (d[8] = T), (d[9] = e))
          : (e = d[9])
        let n = e
        ;(d[10] !== n || d[11] !== _.known || d[12] !== T
          ? ((t = n ? new Set([..._.known, T]) : _.known), (d[10] = n), (d[11] = _.known), (d[12] = T), (d[13] = t))
          : (t = d[13]),
          N({ revision: T, known: t, expectedDeploymentId: n ? C?.expectedDeploymentId : void 0 }))
      }
      let E = T ?? p.projectId
      ;(d[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (e) => N((t) => (t.expectedDeploymentId === e ? { ...t, expectedDeploymentId: void 0 } : t))),
          (d[14] = i))
        : (i = d[14]),
        d[15] !== m ||
        d[16] !== b ||
        d[17] !== h ||
        d[18] !== f ||
        d[19] !== _.expectedDeploymentId ||
        d[20] !== p ||
        d[21] !== E
          ? ((r = (0, a.jsx)(
              e0,
              {
                resource: p,
                isVisible: b,
                expectedDeploymentId: _.expectedDeploymentId,
                onRefreshComplete: i,
                controlsRef: m,
                onClose: h,
                onNavigateToSite: f,
              },
              E,
            )),
            (d[15] = m),
            (d[16] = b),
            (d[17] = h),
            (d[18] = f),
            (d[19] = _.expectedDeploymentId),
            (d[20] = p),
            (d[21] = E),
            (d[22] = r))
          : (r = d[22]))
      let M = r,
        O = y && b
      return (
        d[23] !== M || d[24] !== b || d[25] !== y || d[26] !== p.projectId || d[27] !== w
          ? ((s = w
              ? (0, a.jsx)("div", {
                  className: "h-full min-h-0",
                  style: { viewTransitionName: y && b ? "site-preview-" + p.projectId : void 0 },
                  children: M,
                })
              : M),
            (d[23] = M),
            (d[24] = b),
            (d[25] = y),
            (d[26] = p.projectId),
            (d[27] = w),
            (d[28] = s))
          : (s = d[28]),
        d[29] !== O || d[30] !== s
          ? ((l = (0, a.jsx)(g.G, { value: O, children: s })), (d[29] = O), (d[30] = s), (d[31] = l))
          : (l = d[31]),
        l
      )
    }
    function e0(e) {
      let t,
        n,
        i,
        r,
        s,
        l,
        d,
        c,
        h,
        m,
        g,
        v,
        x,
        b,
        w = (0, o.c)(48),
        {
          resource: I,
          isVisible: y,
          expectedDeploymentId: A,
          onRefreshComplete: j,
          onClose: C,
          controlsRef: S,
          onNavigateToSite: T,
        } = e,
        _ = (0, p.A)()
      w[0] !== I
        ? ((t = (0, eQ.oJ)(I) ?? `/sites/${encodeURIComponent(I.projectId)}/preview`), (w[0] = I), (w[1] = t))
        : (t = w[1])
      let N = (0, f.$P)(t),
        [E, M] = (0, u.useState)(0),
        O = (0, u.useRef)(null),
        D = S ?? O
      w[2] !== D.current
        ? ((n = (e) => {
            D.current?.confirmAction(e) !== !1 && e()
          }),
          (w[2] = D.current),
          (w[3] = n))
        : (n = w[3])
      let R = n,
        [k, B] = (0, u.useState)(null),
        [P, L] = (0, u.useState)(!1),
        [G, U] = (0, u.useState)("loading")
      w[4] === Symbol.for("react.memo_cache_sentinel") ? ((i = () => U("error")), (w[4] = i)) : (i = w[4])
      let W = i
      w[5] !== D.current || w[6] !== k?.contentWindow
        ? ((r = () => {
            let e = k?.contentWindow
            if (!e) return !1
            let t = () => {
              e.location.reload()
            }
            return D.current?.confirmAction(t) !== !1 && (t(), !0)
          }),
          (w[5] = D.current),
          (w[6] = k?.contentWindow),
          (w[7] = r))
        : (r = w[7])
      let $ = (0, u.useEffectEvent)(r)
      w[8] !== j ? ((s = (e) => j(e)), (w[8] = j), (w[9] = s)) : (s = w[9])
      let F = (0, u.useEffectEvent)(s)
      ;(w[10] !== F || w[11] !== A || w[12] !== y || w[13] !== $ || w[14] !== k
        ? ((l = () => {
            if (k && y && A)
              return (function ({ wrapper: e, deploymentId: t, refresh: n, onComplete: a }) {
                let o,
                  i,
                  r = !0,
                  s = null,
                  l = !1,
                  d = !1,
                  c = () => {
                    ;((r = !1),
                      clearTimeout(i),
                      clearTimeout(f),
                      e.removeEventListener("load", h),
                      window.removeEventListener("message", m),
                      document.removeEventListener("visibilitychange", p))
                  },
                  u = () => {
                    ;(c(), a())
                  },
                  p = () => {
                    if ((clearTimeout(i), (o = void 0), !r || d || document.hidden)) return
                    s = e.contentDocument?.querySelector("iframe") ?? null
                    let t = s?.contentWindow
                    if (s && t)
                      for (let e of ((o = crypto.randomUUID()), eg(s.src)))
                        t.postMessage(
                          { channel: es, version: 1, sessionId: o, command: { type: "get-deployment-id" } },
                          e,
                        )
                    i = setTimeout(p, 3e3)
                  },
                  h = () => {
                    ;((d = !1), p())
                  },
                  m = (e) => {
                    if (!r || d || document.hidden || !s?.contentWindow || !o) return
                    let a = ef(e, s.contentWindow, eg(s.src), o)
                    if (a?.type === "deployment-id") {
                      if (((o = void 0), a.deploymentId !== t)) {
                        l = !1
                        return
                      }
                      if (l) return void u()
                      ;((l = !0), (d = !0), clearTimeout(i), n() || u())
                    }
                  },
                  f = setTimeout(u, 18e4)
                return (
                  e.addEventListener("load", h),
                  window.addEventListener("message", m),
                  document.addEventListener("visibilitychange", p),
                  p(),
                  c
                )
              })({ wrapper: k, deploymentId: A, refresh: () => $(), onComplete: () => F(A) })
          }),
          (w[10] = F),
          (w[11] = A),
          (w[12] = y),
          (w[13] = $),
          (w[14] = k),
          (w[15] = l))
        : (l = w[15]),
        w[16] !== A || w[17] !== y || w[18] !== k
          ? ((d = [k, y, A]), (w[16] = A), (w[17] = y), (w[18] = k), (w[19] = d))
          : (d = w[19]),
        (0, u.useEffect)(l, d),
        w[20] !== _ || w[21] !== I.title
          ? ((c =
              I.title ??
              _.formatMessage({
                id: "sites.preview.title",
                defaultMessage: "Site preview",
                description: "Accessible title of the generated Site preview iframe",
              })),
            (w[20] = _),
            (w[21] = I.title),
            (w[22] = c))
          : (c = w[22]))
      let z = c,
        V = P ? "consent" : G
      return (
        w[23] !== C || w[24] !== R ? ((h = () => R(C)), (w[23] = C), (w[24] = R), (w[25] = h)) : (h = w[25]),
        w[26] !== C || w[27] !== T || w[28] !== R
          ? ((m =
              null == T
                ? void 0
                : (e) =>
                    R(() => {
                      ;(C(), T(e))
                    })),
            (w[26] = C),
            (w[27] = T),
            (w[28] = R),
            (w[29] = m))
          : (m = w[29]),
        w[30] !== A || w[31] !== j || w[32] !== R
          ? ((g = () =>
              R(() => {
                ;(A && j(A), U("loading"), M(e1))
              })),
            (w[30] = A),
            (w[31] = j),
            (w[32] = R),
            (w[33] = g))
          : (g = w[33]),
        w[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (e) => {
              U(e.currentTarget.contentDocument?.querySelector("iframe") == null ? "error" : "ready")
            }),
            (w[34] = v))
          : (v = w[34]),
        w[35] !== N || w[36] !== z
          ? ((x = (0, a.jsx)(eJ.X, {
              ref: B,
              onConsentChange: L,
              allow: "clipboard-write",
              className: "min-h-0 w-full flex-1 border-0",
              title: z,
              src: N,
              referrerPolicy: "no-referrer",
              onError: W,
              onSessionError: W,
              onLoad: v,
            })),
            (w[35] = N),
            (w[36] = z),
            (w[37] = x))
          : (x = w[37]),
        w[38] !== D ||
        w[39] !== E ||
        w[40] !== I ||
        w[41] !== h ||
        w[42] !== m ||
        w[43] !== g ||
        w[44] !== x ||
        w[45] !== V ||
        w[46] !== k
          ? ((b = (0, a.jsx)(
              e2,
              {
                controlsRef: D,
                wrapper: k,
                resource: I,
                status: V,
                onClose: h,
                onNavigateToSite: m,
                onRefresh: g,
                children: x,
              },
              E,
            )),
            (w[38] = D),
            (w[39] = E),
            (w[40] = I),
            (w[41] = h),
            (w[42] = m),
            (w[43] = g),
            (w[44] = x),
            (w[45] = V),
            (w[46] = k),
            (w[47] = b))
          : (b = w[47]),
        b
      )
    }
    function e1(e) {
      return e + 1
    }
    function e2(e) {
      let t,
        n,
        h,
        g,
        E,
        M,
        D,
        R,
        k,
        B,
        P,
        L,
        G,
        U,
        W,
        $,
        F,
        z,
        V,
        q,
        H,
        K,
        X,
        Y,
        J,
        Z,
        ee,
        et,
        en,
        ea,
        eo,
        ei,
        er,
        es,
        el,
        ed,
        ec,
        eu,
        ep,
        eh,
        em,
        ef,
        eg,
        ev,
        ex = (0, o.c)(155),
        {
          annotationControl: eb,
          controlsRef: ew,
          wrapper: eI,
          children: ey,
          resource: eA,
          status: ej,
          onRefresh: eS,
          onClose: eT,
          onNavigateToSite: e_,
        } = e,
        eN = void 0 === eI ? null : eI,
        eB = (0, c.gh)(S.GD),
        eP = (0, p.A)()
      ex[0] !== eA.projectId ? ((t = (0, O.hI)(eA.projectId)), (ex[0] = eA.projectId), (ex[1] = t)) : (t = ex[1])
      let eL = (0, f.$P)(t)
      ex[2] !== eA.projectId ? ((n = (0, O.SJ)(eA.projectId)), (ex[2] = eA.projectId), (ex[3] = n)) : (n = ex[3])
      let eG = (0, f.$P)(n),
        [eU, eW] = (0, u.useState)(!1)
      ex[4] !== eU
        ? ((h = (e) => {
            let t = (0, j.q)(e).width <= 720
            t !== eU && eW(t)
          }),
          (ex[4] = eU),
          (ex[5] = h))
        : (h = ex[5])
      let e$ = (0, C.wY)(h),
        [eF, ez] = (0, C.uc)(),
        [eV, eq] = (0, C.uc)(),
        eH = Math.max(ez ?? 0, eq ?? 0),
        { data: eK } = (0, c._U)(eD.appgenProjectQuery$, eA.projectId)
      ex[6] !== eK ? ((g = (0, eM.UM)(eK)), (ex[6] = eK), (ex[7] = g)) : (g = ex[7])
      let eX = g
      ex[8] !== eK ? ((E = (0, eM.Ul)(eK)), (ex[8] = eK), (ex[9] = E)) : (E = ex[9])
      let eY = E,
        eQ = eX || eK?.current_user_role === "editor",
        eJ = (0, T.Zj)("262557526"),
        eZ = (0, T.Zj)("792923027")
      if (
        ex[10] !== eJ ||
        ex[11] !== eL ||
        ex[12] !== eb ||
        ex[13] !== eQ ||
        ex[14] !== eX ||
        ex[15] !== eY ||
        ex[16] !== eU ||
        ex[17] !== ew ||
        ex[18] !== eP ||
        ex[19] !== eF ||
        ex[20] !== e_ ||
        ex[21] !== eS ||
        ex[22] !== e$ ||
        ex[23] !== eK?.current_live_url ||
        ex[24] !== eK?.title ||
        ex[25] !== eA ||
        ex[26] !== eB ||
        ex[27] !== eG ||
        ex[28] !== eH ||
        ex[29] !== ej ||
        ex[30] !== eZ ||
        ex[31] !== eN
      ) {
        X = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            t,
            n,
            o,
            r,
            c,
            u,
            p = (0, eO.JM)(eA, eK?.current_live_url).url
          if (null == p) {
            X = null
            break e
          }
          let h = eA.title ?? new URL(p).hostname
          ex[53] !== eP
            ? ((e = eP.formatMessage({
                id: "sites.preview.visit",
                defaultMessage: "Open site in browser",
                description:
                  "Tooltip and accessible label for the title bar button that opens the published Site in a new browser tab",
              })),
              (ex[53] = eP),
              (ex[54] = e))
            : (e = ex[54])
          let f = e
          ;(ex[55] !== eP
            ? ((t = eP.formatMessage({
                id: "sites.preview.moreActions",
                defaultMessage: "More site actions",
                description:
                  "Accessible label for the Site preview menu containing sharing, settings, and analytics actions",
              })),
              (ex[55] = eP),
              (ex[56] = t))
            : (t = ex[56]),
            (k = t),
            ex[57] !== eP
              ? ((n = eP.formatMessage({
                  id: "sites.preview.close",
                  defaultMessage: "Close site preview",
                  description:
                    "Accessible label for the close button in the Site preview header. Closes the preview panel, not the website itself.",
                })),
                (ex[57] = eP),
                (ex[58] = n))
              : (n = ex[58]),
            (M = n),
            ex[59] !== eP
              ? ((o = eP.formatMessage({
                  id: "sites.preview.share.label",
                  defaultMessage: "Share",
                  description:
                    "Short label for the Share button in the Site preview header and its narrow-view menu item. Opens sharing controls for the current website.",
                })),
                (ex[59] = eP),
                (ex[60] = o))
              : (o = ex[60]),
            (B = o),
            ex[61] !== eK?.title || ex[62] !== eA.projectId || ex[63] !== eA.title || ex[64] !== eB
              ? ((r = () => {
                  ;((0, A.yy)(eB, i.CodexInAppBrowserToolbarAction, {
                    action:
                      i.CodexInAppBrowserToolbarActionType.CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_SITES_SHARE_CLICKED,
                  }),
                    (0, ek.l)(eB, eA.projectId, {
                      initialProjectTitle: eA.title ?? eK?.title,
                      source: i.CodexSitesSharingSource.CODEX_SITES_SHARING_SOURCE_IN_APP_BROWSER,
                    }))
                }),
                (ex[61] = eK?.title),
                (ex[62] = eA.projectId),
                (ex[63] = eA.title),
                (ex[64] = eB),
                (ex[65] = r))
              : (r = ex[65]),
            (D = r),
            ex[66] !== eJ ||
            ex[67] !== eL ||
            ex[68] !== eX ||
            ex[69] !== eY ||
            ex[70] !== eU ||
            ex[71] !== D ||
            ex[72] !== k ||
            ex[73] !== e_ ||
            ex[74] !== eA.projectId ||
            ex[75] !== eB ||
            ex[76] !== eG ||
            ex[77] !== B
              ? ((c =
                  eX || (eU && eY)
                    ? (0, a.jsxs)(v.Ab, {
                        align: "end",
                        contentWidth: "menu",
                        triggerButton: (0, a.jsx)(d.b_, {
                          "aria-label": k,
                          size: "default",
                          children: (0, a.jsx)(b.e4G, {}),
                        }),
                        children: [
                          eU && eY
                            ? (0, a.jsx)(v.ms.Item, { leftIcon: (0, a.jsx)(b._Ui, {}), onSelect: D, children: B })
                            : null,
                          eX && eJ
                            ? (0, a.jsx)(v.ms.Item, {
                                asChild: !0,
                                leftIconAsset: s.b,
                                onSelect: () => {
                                  ;((0, Q.Q_)(eB, {
                                    action: Q.lX.CODEX_APPGEN_INTERACTION_ACTION_ANALYTICS_OPENED,
                                    projectId: eA.projectId,
                                    source:
                                      null == e_
                                        ? Q.Mz.CODEX_APPGEN_INTERACTION_SOURCE_RESPONSE_CARD
                                        : Q.Mz.CODEX_APPGEN_INTERACTION_SOURCE_SITES,
                                  }),
                                    e_?.((0, O.hI)(eA.projectId)))
                                },
                                children: (0, a.jsx)("a", {
                                  href: null == e_ ? eL : void 0,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: (0, a.jsx)(m.A, {
                                    id: "appgenPage.analytics.label",
                                    defaultMessage: "Analytics",
                                    description: "Menu item for opening site analytics",
                                  }),
                                }),
                              })
                            : null,
                          eX
                            ? (0, a.jsx)(v.ms.Item, {
                                asChild: !0,
                                leftIconAsset: l.T,
                                onSelect: () => {
                                  ;((0, A.yy)(eB, i.CodexInAppBrowserToolbarAction, {
                                    action:
                                      i.CodexInAppBrowserToolbarActionType
                                        .CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_SITES_SETTINGS_CLICKED,
                                  }),
                                    e_?.((0, O.SJ)(eA.projectId)))
                                },
                                children: (0, a.jsx)("a", {
                                  href: null == e_ ? eG : void 0,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: (0, a.jsx)(m.A, {
                                    id: "appgenPage.settings.label",
                                    defaultMessage: "Settings",
                                    description: "Menu item for opening site settings",
                                  }),
                                }),
                              })
                            : null,
                        ],
                      })
                    : null),
                (ex[66] = eJ),
                (ex[67] = eL),
                (ex[68] = eX),
                (ex[69] = eY),
                (ex[70] = eU),
                (ex[71] = D),
                (ex[72] = k),
                (ex[73] = e_),
                (ex[74] = eA.projectId),
                (ex[75] = eB),
                (ex[76] = eG),
                (ex[77] = B),
                (ex[78] = c))
              : (c = ex[78]),
            (R = c),
            (H = e$),
            (K = "@container/site-preview flex h-full min-h-0 flex-col bg-surface"),
            (z =
              "grid min-h-toolbar shrink-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-toolbar py-2 draggable @max-[560px]/site-preview:gap-1 @max-[560px]/site-preview:px-2"),
            ex[79] !== eH
              ? ((V = eH ? { gridTemplateColumns: `${eH}px minmax(0, 1fr) ${eH}px` } : void 0),
                (ex[79] = eH),
                (ex[80] = V))
              : (V = ex[80]),
            ex[81] !== eb ||
            ex[82] !== eQ ||
            ex[83] !== eU ||
            ex[84] !== ew ||
            ex[85] !== eS ||
            ex[86] !== eA ||
            ex[87] !== ej ||
            ex[88] !== eZ ||
            ex[89] !== eN
              ? ((u =
                  !eZ || eQ
                    ? (eb?.(eU) ??
                      (0, a.jsx)(eC, {
                        controlsRef: ew,
                        compact: eU,
                        resource: eA,
                        wrapper: eN,
                        canAnnotate: eQ,
                        onRefresh: eS,
                        refreshDisabled: "loading" === ej,
                      }))
                    : (0, a.jsx)(eE, {
                        compact: eU,
                        showNavigation: !1,
                        canGoBack: !1,
                        canGoForward: !1,
                        onRefresh: eS,
                        refreshDisabled: "loading" === ej,
                      })),
                (ex[81] = eb),
                (ex[82] = eQ),
                (ex[83] = eU),
                (ex[84] = ew),
                (ex[85] = eS),
                (ex[86] = eA),
                (ex[87] = ej),
                (ex[88] = eZ),
                (ex[89] = eN),
                (ex[90] = u))
              : (u = ex[90]),
            ex[91] !== eF || ex[92] !== u
              ? ((q = (0, a.jsx)("div", { ref: eF, className: "flex w-max items-center gap-1.5", children: u })),
                (ex[91] = eF),
                (ex[92] = u),
                (ex[93] = q))
              : (q = ex[93]),
            ($ = "flex max-w-full min-w-0 flex-col items-center justify-self-center text-center"),
            (F = (0, a.jsx)("span", { className: "w-full truncate text-sm font-medium", children: h })),
            (Z = f),
            (P = p),
            (L = "_blank"),
            (G = "noopener noreferrer"),
            (U =
              "group/site-url inline-flex max-w-full min-w-0 items-center gap-1 rounded-sm text-xs text-secondary no-drag"),
            (W = (e) => {
              ;((0, A.yy)(eB, i.CodexInAppBrowserOpenedInExternalBrowser, {}),
                (0, A.yy)(eB, i.CodexInAppBrowserToolbarAction, {
                  action:
                    i.CodexInAppBrowserToolbarActionType
                      .CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_OPENED_IN_EXTERNAL_BROWSER,
                }),
                (0, x.PQ)({ event: e, href: p, initiator: "mcp_app_resource", openTarget: "external-browser" }))
            }),
            (Y =
              "min-w-0 truncate pb-0.5 leading-5 underline-offset-2 group-hover/site-url:underline group-focus-visible/site-url:underline"),
            (J = (0, eR.Go)(p)))
        }
        ;((ex[10] = eJ),
          (ex[11] = eL),
          (ex[12] = eb),
          (ex[13] = eQ),
          (ex[14] = eX),
          (ex[15] = eY),
          (ex[16] = eU),
          (ex[17] = ew),
          (ex[18] = eP),
          (ex[19] = eF),
          (ex[20] = e_),
          (ex[21] = eS),
          (ex[22] = e$),
          (ex[23] = eK?.current_live_url),
          (ex[24] = eK?.title),
          (ex[25] = eA),
          (ex[26] = eB),
          (ex[27] = eG),
          (ex[28] = eH),
          (ex[29] = ej),
          (ex[30] = eZ),
          (ex[31] = eN),
          (ex[32] = M),
          (ex[33] = D),
          (ex[34] = R),
          (ex[35] = k),
          (ex[36] = B),
          (ex[37] = P),
          (ex[38] = L),
          (ex[39] = G),
          (ex[40] = U),
          (ex[41] = W),
          (ex[42] = $),
          (ex[43] = F),
          (ex[44] = z),
          (ex[45] = V),
          (ex[46] = q),
          (ex[47] = H),
          (ex[48] = K),
          (ex[49] = X),
          (ex[50] = Y),
          (ex[51] = J),
          (ex[52] = Z))
      } else
        ((M = ex[32]),
          (D = ex[33]),
          (R = ex[34]),
          (k = ex[35]),
          (B = ex[36]),
          (P = ex[37]),
          (L = ex[38]),
          (G = ex[39]),
          (U = ex[40]),
          (W = ex[41]),
          ($ = ex[42]),
          (F = ex[43]),
          (z = ex[44]),
          (V = ex[45]),
          (q = ex[46]),
          (H = ex[47]),
          (K = ex[48]),
          (X = ex[49]),
          (Y = ex[50]),
          (J = ex[51]),
          (Z = ex[52]))
      return X !== Symbol.for("react.early_return_sentinel")
        ? X
        : (ex[94] !== Y || ex[95] !== J
            ? ((ee = (0, a.jsx)("span", { className: Y, children: J })), (ex[94] = Y), (ex[95] = J), (ex[96] = ee))
            : (ee = ex[96]),
          ex[97] === Symbol.for("react.memo_cache_sentinel")
            ? ((et = (0, a.jsx)(b.NSk, { className: "size-3.5" })), (ex[97] = et))
            : (et = ex[97]),
          ex[98] !== P ||
          ex[99] !== L ||
          ex[100] !== G ||
          ex[101] !== U ||
          ex[102] !== W ||
          ex[103] !== ee ||
          ex[104] !== Z
            ? ((en = (0, a.jsxs)("a", {
                "aria-label": Z,
                href: P,
                target: L,
                rel: G,
                className: U,
                onClick: W,
                children: [ee, et],
              })),
              (ex[98] = P),
              (ex[99] = L),
              (ex[100] = G),
              (ex[101] = U),
              (ex[102] = W),
              (ex[103] = ee),
              (ex[104] = Z),
              (ex[105] = en))
            : (en = ex[105]),
          ex[106] !== $ || ex[107] !== F || ex[108] !== en
            ? ((ea = (0, a.jsxs)("div", { className: $, children: [F, en] })),
              (ex[106] = $),
              (ex[107] = F),
              (ex[108] = en),
              (ex[109] = ea))
            : (ea = ex[109]),
          ex[110] !== eY || ex[111] !== eU || ex[112] !== D || ex[113] !== B
            ? ((eo =
                eY && !eU
                  ? (0, a.jsx)(N.J5, {
                      label: B,
                      children: (0, a.jsxs)(N.DW, {
                        "aria-label": B,
                        onClick: D,
                        children: [
                          (0, a.jsx)(I.b5, { icon: { 16: b.T7p, 20: b._Ui } }),
                          (0, a.jsx)("span", { children: B }),
                        ],
                      }),
                    })
                  : null),
              (ex[110] = eY),
              (ex[111] = eU),
              (ex[112] = D),
              (ex[113] = B),
              (ex[114] = eo))
            : (eo = ex[114]),
          ex[115] !== R || ex[116] !== k
            ? ((ei = R && (0, a.jsx)(N.J5, { label: k, children: R })), (ex[115] = R), (ex[116] = k), (ex[117] = ei))
            : (ei = ex[117]),
          ex[118] !== eP
            ? ((er = eP.formatMessage({
                id: "sites.preview.windowControls",
                defaultMessage: "Preview controls",
                description: "Accessible label for the group of buttons that expand or close the Site preview panel.",
              })),
              (ex[118] = eP),
              (ex[119] = er))
            : (er = ex[119]),
          ex[120] === Symbol.for("react.memo_cache_sentinel")
            ? ((es = (0, a.jsx)(_.o, { surface: "viewer" })), (ex[120] = es))
            : (es = ex[120]),
          ex[121] === Symbol.for("react.memo_cache_sentinel")
            ? ((el = (0, a.jsx)(b.pgK, {})), (ex[121] = el))
            : (el = ex[121]),
          ex[122] !== M || ex[123] !== eT
            ? ((ed = (0, a.jsx)(N.DW, { "aria-label": M, uniform: !0, onClick: eT, children: el })),
              (ex[122] = M),
              (ex[123] = eT),
              (ex[124] = ed))
            : (ed = ex[124]),
          ex[125] !== M || ex[126] !== ed
            ? ((ec = (0, a.jsx)(r.m, { content: M, openDelay: 250, children: ed })),
              (ex[125] = M),
              (ex[126] = ed),
              (ex[127] = ec))
            : (ec = ex[127]),
          ex[128] !== er || ex[129] !== ec
            ? ((eu = (0, a.jsxs)(N.J5, { variant: "window", label: er, children: [es, ec] })),
              (ex[128] = er),
              (ex[129] = ec),
              (ex[130] = eu))
            : (eu = ex[130]),
          ex[131] !== eV || ex[132] !== eo || ex[133] !== ei || ex[134] !== eu
            ? ((ep = (0, a.jsxs)("div", {
                ref: eV,
                className: "flex w-max items-center gap-1.5 justify-self-end",
                children: [eo, ei, eu],
              })),
              (ex[131] = eV),
              (ex[132] = eo),
              (ex[133] = ei),
              (ex[134] = eu),
              (ex[135] = ep))
            : (ep = ex[135]),
          ex[136] !== z || ex[137] !== V || ex[138] !== q || ex[139] !== ea || ex[140] !== ep
            ? ((eh = (0, a.jsxs)("header", { className: z, style: V, children: [q, ea, ep] })),
              (ex[136] = z),
              (ex[137] = V),
              (ex[138] = q),
              (ex[139] = ea),
              (ex[140] = ep),
              (ex[141] = eh))
            : (eh = ex[141]),
          ex[142] !== ej
            ? ((em =
                "loading" === ej
                  ? (0, a.jsxs)("div", {
                      className: "absolute inset-0 z-10 bg-surface",
                      role: "status",
                      children: [
                        (0, a.jsx)(y.LoadingPage, { debugName: "SitePreview", fillParent: !0 }),
                        (0, a.jsx)("span", {
                          className: "sr-only",
                          children: (0, a.jsx)(m.A, {
                            id: "sites.preview.loading",
                            defaultMessage: "Loading preview…",
                            description:
                              "Status announced to assistive technology while the hosted website opens or reloads in the Site preview. No placeholders.",
                          }),
                        }),
                      ],
                    })
                  : null),
              (ex[142] = ej),
              (ex[143] = em))
            : (em = ex[143]),
          ex[144] !== ej
            ? ((ef =
                "error" === ej
                  ? (0, a.jsx)("div", {
                      className: "absolute inset-0 z-10 bg-surface",
                      role: "alert",
                      children: (0, a.jsx)(w.W, {
                        className: "h-full",
                        children: (0, a.jsx)("p", {
                          className: "max-w-md text-balance",
                          children: (0, a.jsx)(m.A, {
                            id: "sites.preview.error",
                            defaultMessage:
                              "Couldn’t load the site preview. Refresh to try again, or open the site in a new tab.",
                            description: "Error shown when the Site preview cannot be loaded",
                          }),
                        }),
                      }),
                    })
                  : null),
              (ex[144] = ej),
              (ex[145] = ef))
            : (ef = ex[145]),
          ex[146] !== ey || ex[147] !== em || ex[148] !== ef
            ? ((eg = (0, a.jsxs)("div", {
                className: "relative flex min-h-0 flex-1 flex-col",
                children: [em, ef, ey],
              })),
              (ex[146] = ey),
              (ex[147] = em),
              (ex[148] = ef),
              (ex[149] = eg))
            : (eg = ex[149]),
          ex[150] !== H || ex[151] !== K || ex[152] !== eh || ex[153] !== eg
            ? ((ev = (0, a.jsxs)("div", { ref: H, className: K, children: [eh, eg] })),
              (ex[150] = H),
              (ex[151] = K),
              (ex[152] = eh),
              (ex[153] = eg),
              (ex[154] = ev))
            : (ev = ex[154]),
          ev)
    }
    ;(0, h.zR)({
      id: "sites.preview.errorWithActions",
      defaultMessage:
        "Couldn’t load the site preview. <refresh>Refresh</refresh> to try again, or <openSite>open the site</openSite> in a new tab.",
      description:
        "Error when a Site preview fails to load. The refresh tag will be a link that retries the preview, and the openSite tag will be a link that opens the published website in a new browser tab. Keep both tags and translate their text.",
    })
  },
  kZPb(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      i = n("zTeN")
    n("zd8w")
    var r = n("oyxz")
    n("Ghh3")
    var s = n("Bbed"),
      l = n("OWtl")
    ;(n("OMIV"),
      n("GDNt"),
      n("GVLO"),
      n("nOnM"),
      (0, s._)(
        async () => (await Promise.all([n.e(415829), n.e(53143)]).then(n.bind(n, "eOmy"))).SiteConnectorConsent,
        {
          errorFallback: (0, a.jsx)(r.A, {
            id: "sites.connectorConsent.loadFailed",
            defaultMessage: "Couldn't load connector permissions. Refresh the page to try again.",
            description: "Error shown when the preview connector consent UI cannot be loaded.",
          }),
        },
      ),
      n.d(
        t,
        {},
        {
          X: function (e) {
            let t,
              n,
              a,
              r,
              s,
              d,
              c,
              u,
              p = (0, o.c)(37)
            throw (
              p[0] !== e
                ? (({
                    ref: d,
                    src: c,
                    title: u,
                    onLoad: a,
                    onSessionError: r,
                    onConsentChange: n,
                    className: t,
                    ...s
                  } = e),
                  (p[0] = e),
                  (p[1] = t),
                  (p[2] = n),
                  (p[3] = a),
                  (p[4] = r),
                  (p[5] = s),
                  (p[6] = d),
                  (p[7] = c),
                  (p[8] = u))
                : ((t = p[1]), (n = p[2]), (a = p[3]), (r = p[4]), (s = p[5]), (d = p[6]), (c = p[7]), (u = p[8])),
              (0, i.gh)(l.u),
              Error("SiteSessionPreviewFrame is browser-only")
            )
          },
        },
      ))
  },
  Lb95(e, t, n) {
    var a = n("SZCv"),
      o = n.n(a),
      i = n("zTeN"),
      r = n("DBCl"),
      s = n("ASxG"),
      l = n("SPnB"),
      d = n("BCjz"),
      c = n("Ghh3"),
      u = n("OWtl"),
      p = n("SQbA")
    let h = s.object({
        type: s.literal("sites-deployment-progress"),
        payload: s.object({
          project_id: s.string(),
          version_id: s.string(),
          deployment_id: s.string(),
          stage: s.enum(["publishing", "finalizing", "ready", "failed"]),
        }),
      }),
      m = (0, i.A4)(
        u.u,
        ({ deployment: e }) => g(e),
        ({ projectId: e, deployment: t }, { get: n, scope: a, set: o }) => {
          let i,
            s = n(l.chatGptAuthenticatedAccountId$),
            u = n(l.chatGptAuthenticatedUserId$),
            m = g(t)
          if ((o(m), null == s || null == u)) return
          let f = { accountId: s, userId: u, projectId: e, deploymentId: t.id },
            b = (n) =>
              !(null != m.updatedAt && Date.parse(n.updatedAt) < Date.parse(m.updatedAt)) &&
              n.projectId === e &&
              n.deploymentId === t.id &&
              n.versionId === t.versionId,
            w = a.query.getData(p.sitesDeploymentSnapshotQuery$, f)
          null != w && b(w) && o((m = v(m, w)))
          let I = !x(m.status),
            y = !0,
            A = !1,
            j = !1,
            C = !1,
            S = [],
            T = () => y && a.get(l.chatGptAuthenticatedAccountId$) === s && a.get(l.chatGptAuthenticatedUserId$) === u,
            _ = () => {
              for (let e of S.splice(0)) e()
            },
            N = (t) => {
              let n = "succeeded" === t.status && "succeeded" !== m.status
              ;(o((m = t)),
                n && (0, p.invalidateAppgenProjectQueries)(a.queryClient, [e]),
                x(m.status) && (_(), C && (clearTimeout(i), D())))
            },
            E = () => document.hasFocus() && !document.hidden,
            M = () => {
              if ((clearTimeout(i), T())) {
                if (A) {
                  j = !0
                  return
                }
                ;((A = !0),
                  a.query
                    .fetch(p.sitesDeploymentSnapshotQuery$, f)
                    .then(
                      (e) => {
                        T() && b(e) && ((C = x(e.status)), N(v(m, e)))
                      },
                      () => {
                        T() && !x(m.status) && N({ ...m, lookupUnavailable: !0 })
                      },
                    )
                    .finally(() => {
                      ;((A = !1), T() && !C && (j ? ((j = !1), M()) : I && E() && (i = setTimeout(M, 15e3))))
                    }))
              }
            },
            O = () => {
              E() ? M() : clearTimeout(i)
            },
            D = () => {
              ;(document.removeEventListener("visibilitychange", O),
                window.removeEventListener("focus", O),
                window.removeEventListener("blur", O))
            },
            R = () => {
              ;((y = !1), clearTimeout(i), _(), D(), a.query.cancel(p.sitesDeploymentSnapshotQuery$, f))
            }
          if (!I) return (M(), R)
          let k = (0, d.uy)(
            "sites-deployment-progress",
            () =>
              c.Request.safeGet("/celsius/ws/user", {
                additionalHeaders: { [r.zBc]: s },
                expectedIdentity: { accountId: s, userId: u },
              }).then((e) => e.websocket_url),
            JSON.stringify([s, u]),
          )
          return (
            S.push(
              k.onMessage((n) => {
                let a = h.safeParse(n)
                if (!T() || !a.success || x(m.status)) return
                let o = a.data.payload
                if (
                  o.project_id !== e ||
                  o.deployment_id !== t.id ||
                  o.version_id !== t.versionId ||
                  ("finalizing" === m.stage && "publishing" === o.stage)
                )
                  return
                let i = "publishing"
                ;("ready" === o.stage ? (i = "succeeded") : "failed" === o.stage && (i = "failed"),
                  N({ ...m, stage: o.stage, confirmed: !0, status: i, lookupUnavailable: !1 }),
                  x(m.status) && M())
              }),
              k.onSubscribed(M),
              k.onPotentialMissedMessages(M),
              k.retainSubscription(),
            ),
            document.addEventListener("visibilitychange", O),
            window.addEventListener("focus", O),
            window.addEventListener("blur", O),
            M(),
            R
          )
        },
        {
          key: ({ projectId: e, deployment: t }) => JSON.stringify([e, t.id, t.versionId]),
          autoDispose: 6e4,
          isEqual: o(),
        },
      )
    function f(e) {
      return "succeeded" === e ? "ready" : "failed" === e ? "failed" : "publishing"
    }
    function g(e) {
      return {
        status: e.status,
        stage: f(e.status),
        confirmed: !1,
        lookupUnavailable: !1,
        url: null,
        hasMcp: null,
        updatedAt: e.updatedAt,
      }
    }
    function v(e, t) {
      let n = x(t.status)
      if (x(e.status) && !n) return e
      let a = !n && ("finalizing" === t.publicationStage || "finalizing" === e.stage)
      return {
        status: a ? "publishing" : t.status,
        stage: a ? "finalizing" : f(t.status),
        lookupUnavailable: !1,
        confirmed: !0,
        url: t.url,
        hasMcp: t.hasMcp,
        updatedAt: t.updatedAt,
      }
    }
    function x(e) {
      return "succeeded" === e || "failed" === e
    }
    n.d(t, {}, { T: m, o: f })
  },
  Lnny(e, t, n) {
    var a = n("SZCv"),
      o = n.n(a),
      i = n("zTeN"),
      r = n("MrGp"),
      s = n("OWtl"),
      l = n("KaH3"),
      d = n("Lb95")
    let c = (0, i.i1)(
        s.u,
        (e, { get: t }) => {
          if (e?.deployment == null) return null
          let n = e.deployment,
            a = t(d.T, { projectId: e.projectId, deployment: n })
          return ("succeeded" === n.status || "failed" === n.status) &&
            ((null != n.updatedAt && (null == a.updatedAt || Date.parse(n.updatedAt) > Date.parse(a.updatedAt))) ||
              ("succeeded" !== a.status && "failed" !== a.status))
            ? {
                status: n.status,
                stage: (0, d.o)(n.status),
                lookupUnavailable: !1,
                confirmed: !0,
                url: e.url,
                hasMcp: e.hasMcp ?? null,
                updatedAt: n.updatedAt,
              }
            : a
        },
        { isEqual: o(), autoDispose: !0 },
      ),
      u = (0, i.i1)(
        s.u,
        ({ conversationId: e, resources: t }, { get: n }) =>
          t.flatMap((t) => {
            if ("appgen-app" !== t.type || null == t.deployment) return [t]
            let a = null == n(r.N4, e) ? n(c, t) : null
            return [h(t, a)]
          }),
        { isEqual: o(), autoDispose: !0 },
      ),
      p = (0, i.i1)(s.u, (e, { get: t }) => h(e, t(c, e)).publishedRevision ?? null, { autoDispose: !0 })
    function h(e, t) {
      if (null == e.deployment || (t?.status !== "succeeded" && t?.status !== "failed")) return e
      let n = e.publishedRevision
      return (
        "succeeded" === t.status ? (n = e.deployment.id) : n === e.deployment.id && (n = void 0),
        {
          ...(0, l.JM)(e, "succeeded" === t.status ? t.url : null),
          deployment: { ...e.deployment, status: t.status, updatedAt: t.updatedAt ?? e.deployment.updatedAt },
          publishedRevision: n,
          ...("succeeded" === t.status ? { hasMcp: t.hasMcp ?? e.hasMcp } : {}),
        }
      )
    }
    n.d(
      t,
      {},
      {
        Wq: function (e, t) {
          let n = e.deployment?.status,
            a = null == n ? null : (t?.stage ?? (0, d.o)(n))
          return { resource: h(e, t), stage: a }
        },
        fj: c,
        tb: u,
        z5: p,
      },
    )
  },
  wO6P(e, t, n) {
    var a = n("LjYy"),
      o = n("PFjh"),
      i = n("SPnB"),
      r = n("YTYy")
    n.d(
      t,
      {},
      {
        B: function (e, t, n, s, l = "annotation") {
          let d = (0, r.GY)(e, s),
            c = e.get(i.e0),
            u = {
              annotation_surface: t,
              submission_source: l,
              artifact_type: (function (e) {
                switch (e) {
                  case "slides":
                    return "presentation"
                  case "workbook":
                    return "spreadsheet"
                  case "document":
                  case "notebook":
                  case "pdf":
                  case "presentation":
                  case "site":
                  case "spreadsheet":
                  case "unknown":
                    return e
                }
              })(n),
              product_experience: d ?? "unknown",
              plan_type: Object.values(a.x).find((e) => e === c) ?? "unknown",
            },
            p = performance.now(),
            h = !1
          return (
            e.get(o.T$).count("codex_artifacts", "annotation_send_started", u),
            (t) => {
              if (h) return
              h = !0
              let n = "accepted" === t || "queued" === t || "unconfirmed" === t ? t : "failed",
                a = Math.max(0, performance.now() - p),
                i = { ...u, outcome: n }
              ;("failed" === n && (i.failure_reason = t),
                e.get(o.T$).hist("codex_artifacts", "annotation_send_duration_ms", i, a))
            }
          )
        },
      },
    )
  },
  ABuI(e, t, n) {
    n.d(t, { U7: () => F, Le: () => z, wT: () => q, _E: () => $, xo: () => K })
    var a = n("ABep"),
      o = n("QosV"),
      i = n("y26l"),
      r = n("irkb"),
      s = n("xSOA")
    n("RTEV")
    var l = n("zTeN"),
      d = n("zd8w"),
      c = n("Wf1j"),
      u = n("oyxz"),
      p = n("wD9O"),
      h = n("YTYy"),
      m = n("dlaM"),
      f = n("Ed5q"),
      g = n("w7Qu"),
      v = n("Z0ob"),
      x = n("ZzsR"),
      b = n("GO7r"),
      w = n("UxN3"),
      I = n("Zwnn"),
      y = n("w0X6"),
      A = n("lHc5"),
      j = n("epmH"),
      C = n("Oj9r"),
      S = n("flNH"),
      T = n("CFTv"),
      _ = n("ygO2"),
      N = n("JNtf"),
      E = n("mUDD")
    function M(e) {
      let t,
        n,
        i,
        r,
        s,
        l,
        d,
        c,
        p,
        h,
        m = (0, o.c)(19),
        { open: f, onDiscard: g, onKeepAnnotations: v } = e
      return (
        m[0] !== v
          ? ((t = (e) => {
              e || v()
            }),
            (m[0] = v),
            (m[1] = t))
          : (t = m[1]),
        m[2] !== g
          ? ((n = (e) => {
              ;(e.preventDefault(), g())
            }),
            (m[2] = g),
            (m[3] = n))
          : (n = m[3]),
        m[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(N.L3, {
              children: (0, a.jsx)(u.A, {
                id: "artifactAnnotations.exit.title",
                defaultMessage: "Discard annotations?",
                description: "Confirmation title before discarding pending artifact annotations",
              }),
            })),
            (m[4] = i))
          : (i = m[4]),
        m[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(E.OO, {
              children: (0, a.jsx)(E.c7, {
                title: i,
                subtitle: (0, a.jsx)(N.rr, {
                  children: (0, a.jsx)(u.A, {
                    id: "artifactAnnotations.exit.description",
                    defaultMessage: "You have annotations that haven't been sent.",
                    description: "Explanation that the annotations being discarded have not been sent",
                  }),
                }),
              }),
            })),
            (m[5] = r))
          : (r = m[5]),
        m[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(u.A, {
              id: "artifactAnnotations.exit.stay",
              defaultMessage: "Keep annotations",
              description: "Keep pending annotations and return to annotation mode",
            })),
            (m[6] = s))
          : (s = m[6]),
        m[7] !== v
          ? ((l = (0, a.jsx)(_.$, { autoFocus: !0, color: "secondary", type: "button", onClick: v, children: s })),
            (m[7] = v),
            (m[8] = l))
          : (l = m[8]),
        m[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)(_.$, {
              color: "danger",
              type: "submit",
              children: (0, a.jsx)(u.A, {
                id: "artifactAnnotations.exit.leave",
                defaultMessage: "Discard",
                description: "Discard pending annotations and leave annotation mode",
              }),
            })),
            (m[9] = d))
          : (d = m[9]),
        m[10] !== l
          ? ((c = (0, a.jsx)(E.OO, { children: (0, a.jsxs)(E.Es, { children: [l, d] }) })), (m[10] = l), (m[11] = c))
          : (c = m[11]),
        m[12] !== n || m[13] !== c
          ? ((p = (0, a.jsxs)(E.R4, { as: "form", onSubmit: n, children: [r, c] })),
            (m[12] = n),
            (m[13] = c),
            (m[14] = p))
          : (p = m[14]),
        m[15] !== f || m[16] !== t || m[17] !== p
          ? ((h = (0, a.jsx)(N.lG, { open: f, showDialogClose: !1, size: "compact", onOpenChange: t, children: p })),
            (m[15] = f),
            (m[16] = t),
            (m[17] = p),
            (m[18] = h))
          : (h = m[18]),
        h
      )
    }
    var O = n("nxI8"),
      D = n("binO"),
      R = n("vdpW"),
      k = n("MrGp"),
      B = n("uNU6"),
      P = n("HOLv"),
      L = n("SGsN"),
      G = n("OWtl")
    let U = (0, l.i1)(G.u, ({ hostId: e, execution: t }, { get: n }) => {
      if ("chatgpt" === t.type) {
        let { conversationId: e, streamRequestId: a } = t.completion
        return null != a && n(k.LT, e) === a && (0, k.QN)(n(k.F1, e))
      }
      let a = t.turn
      if (a?.threadId == null || null == a.turnId) return !1
      let o = { hostId: e, threadId: a.threadId },
        i = n(R.M, o)?.at(-1)
      return null != i && n(R.RN, i) === a.turnId && "inProgress" === n(R.OM, i)
    })
    function W(e) {
      let t,
        n,
        i,
        r,
        d,
        u,
        p,
        h = (0, o.c)(19),
        m = (0, l.gh)(C.GD),
        f = (0, c.A)(),
        g = (0, l._U)(U, e)
      ;(h[0] !== f || h[1] !== m || h[2] !== e
        ? ((t = async () => {
            if (!m.get(U, e)) return
            let { hostId: t, execution: n } = e
            if ("chatgpt" === n.type) {
              let { conversationId: e, streamRequestId: t } = n.completion
              if (null == t) return
              await (0, B.Cz)(
                m,
                e,
                f.formatMessage({
                  id: "artifactReviewBar.stopFailed",
                  defaultMessage: "Could not stop this turn",
                  description: "Error shown when stopping the conversation turn for an artifact review fails",
                }),
                { expectedStreamRequestId: t },
              )
              return
            }
            let a = n.turn
            a?.threadId != null &&
              null != a.turnId &&
              (await (0, D.F)(m, {
                conversationId: a.threadId,
                hostId: t,
                initiatedBy: "user",
                expectedTurnId: a.turnId ?? void 0,
              }))
          }),
          (h[0] = f),
          (h[1] = m),
          (h[2] = e),
          (h[3] = t))
        : (t = h[3]),
        h[4] !== f || h[5] !== m
          ? ((n = () => {
              m.get(L.Id).danger(
                f.formatMessage({
                  id: "artifactReviewBar.stopFailed",
                  defaultMessage: "Could not stop this turn",
                  description: "Error shown when stopping the conversation turn for an artifact review fails",
                }),
                { errorAnalytics: { toastId: "artifactReviewBar.stopFailed" } },
              )
            }),
            (h[4] = f),
            (h[5] = m),
            (h[6] = n))
          : (n = h[6]),
        h[7] !== t || h[8] !== n
          ? ((i = { mutationFn: t, onError: n }), (h[7] = t), (h[8] = n), (h[9] = i))
          : (i = h[9]))
      let { mutate: v, isPending: x } = (0, s.n)(i)
      return g
        ? (h[10] !== f
            ? ((r = f.formatMessage({
                id: "artifactReviewBar.stop",
                defaultMessage: "Stop",
                description: "Stop the conversation turn processing these artifact annotations",
              })),
              (h[10] = f),
              (h[11] = r))
            : (r = h[11]),
          h[12] !== v ? ((d = () => v()), (h[12] = v), (h[13] = d)) : (d = h[13]),
          h[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = (0, a.jsx)(P.I, { className: "shrink-0", asset: O.m })), (h[14] = u))
            : (u = h[14]),
          h[15] !== x || h[16] !== r || h[17] !== d
            ? ((p = (0, a.jsx)(_.$, {
                "aria-label": r,
                color: "tinted",
                size: "composerSm",
                disabled: x,
                onClick: d,
                children: u,
              })),
              (h[15] = x),
              (h[16] = r),
              (h[17] = d),
              (h[18] = p))
            : (p = h[18]),
          p)
        : null
    }
    function $(e) {
      let t,
        n = (0, o.c)(2),
        { children: i } = e
      return (
        n[0] !== i
          ? ((t = (0, a.jsx)("div", { className: "contents", "data-artifact-annotation-shortcuts": !0, children: i })),
            (n[0] = i),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function F(e) {
      let t,
        n,
        r,
        s,
        l,
        h,
        m,
        f,
        g,
        v,
        x,
        A,
        j,
        C,
        S,
        T,
        _,
        N,
        E,
        O,
        D,
        R,
        k,
        B = (0, o.c)(67),
        {
          annotationCount: P,
          isSubmitting: L,
          isAnnotating: G,
          embedded: U,
          sendDisabled: $,
          phase: F,
          previewContent: z,
          previewOpen: V,
          previewDisabled: q,
          stopTarget: H,
          completedChangeCount: K,
          onCancel: X,
          onDismissLatestChanges: Y,
          onNavigate: Q,
          onSeeLatestChanges: J,
          onSend: Z,
        } = e,
        ee = void 0 !== L && L,
        et = void 0 !== G && G,
        en = void 0 !== U && U,
        ea = void 0 !== $ && $,
        eo = (0, c.A)(),
        ei = (0, p.dz)(),
        [er, es] = (0, d.useState)(!1)
      return (
        B[0] !== H ? ((t = null == H ? void 0 : (0, a.jsx)(W, { ...H })), (B[0] = H), (B[1] = t)) : (t = B[1]),
        B[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = { previous: (0, a.jsx)(b.HIf, { className: "rotate-180" }), next: (0, a.jsx)(b.HIf, {}) }),
            (B[2] = n))
          : (n = B[2]),
        B[3] !== K || B[4] !== eo
          ? ((r =
              null == K
                ? void 0
                : {
                    changeCount: (0, a.jsx)(u.A, {
                      id: "artifactAnnotationBatch.completedChangeCount",
                      defaultMessage: "{count, plural, one {# change} other {# changes}}",
                      description: "Number of model changes in the completed artifact annotation batch awaiting review",
                      values: { count: K },
                    }),
                    undo: (0, a.jsx)(u.A, {
                      id: "artifactAnnotationBatch.undoChanges",
                      defaultMessage: "Undo",
                      description: "Action to undo the completed batch of model changes to an artifact",
                    }),
                    acceptAll: (0, a.jsx)(u.A, {
                      id: "artifactAnnotationBatch.acceptAllChanges",
                      defaultMessage: "Accept all",
                      description: "Action to accept all model changes in the completed artifact annotation batch",
                    }),
                    dismiss: eo.formatMessage({
                      id: "artifactAnnotationBatch.dismissCompletedReview",
                      defaultMessage: "Close change review",
                      description: "Accessible label for closing the completed artifact annotation review toolbar",
                    }),
                  }),
            (B[3] = K),
            (B[4] = eo),
            (B[5] = r))
          : (r = B[5]),
        B[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(w.bF, { "aria-hidden": !1, legacyIcon: y.A, icon16: b.Gmf, legacyClassName: "size-3.5" })),
            (l = (0, a.jsx)(u.A, {
              id: "artifactAnnotationBatch.selectContent",
              defaultMessage: "Select content and ask for changes",
              description: "Instruction shown in the artifact annotation toolbar before any requests have been saved",
            })),
            (B[6] = s),
            (B[7] = l))
          : ((s = B[6]), (l = B[7])),
        B[8] !== P
          ? ((h = (0, a.jsx)(u.A, {
              id: "artifactAnnotationBatch.annotationCount",
              defaultMessage: "{count, plural, one {# annotation} other {# annotations}}",
              description: "Number of distinct artifact annotations saved in the current unsent batch",
              values: { count: P },
            })),
            (B[8] = P),
            (B[9] = h))
          : (h = B[9]),
        B[10] !== Q
          ? ((m =
              null == Q
                ? (0, a.jsx)(u.A, {
                    id: "artifactAnnotationBatch.cancel",
                    defaultMessage: "Cancel",
                    description: "Action to discard the current batch of saved artifact annotations",
                  })
                : (0, a.jsx)(u.A, {
                    id: "artifactReviewBar.cancel",
                    defaultMessage: "Cancel",
                    description: "Cancel the queued artifact requests without sending them to ChatGPT",
                  })),
            (B[10] = Q),
            (B[11] = m))
          : (m = B[11]),
        B[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsx)(u.A, {
              id: "artifactAnnotationBatch.send",
              defaultMessage: "Send",
              description: "Action to submit all saved artifact annotations together in the existing conversation",
            })),
            (g = (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(w.bF, { "aria-hidden": !1, legacyIcon: I.A, icon16: b.aEL, legacyClassName: "size-3.5" }),
                (0, a.jsx)(u.A, {
                  id: "artifactAnnotationBatch.seeLatestChanges",
                  defaultMessage: "See latest changes",
                  description:
                    "Artifact preview action shown when the file has changed after submitting a batch of annotations",
                }),
              ],
            })),
            (B[12] = f),
            (B[13] = g))
          : ((f = B[12]), (g = B[13])),
        B[14] !== eo
          ? ((v = eo.formatMessage({
              id: "artifactAnnotationBatch.dismissLatestChanges",
              defaultMessage: "Dismiss latest changes",
              description: "Accessible label for dismissing the completed artifact annotation batch action",
            })),
            (B[14] = eo),
            (B[15] = v))
          : (v = B[15]),
        B[16] !== eo
          ? ((x = eo.formatMessage({
              id: "artifactAnnotationBatch.annotationPreview",
              defaultMessage: "Annotation preview",
              description:
                "Accessible label for the focus-managed preview of pending artifact annotations shown before sending a batch",
            })),
            (B[16] = eo),
            (B[17] = x))
          : (x = B[17]),
        B[18] !== eo
          ? ((A = eo.formatMessage({
              id: "artifactReviewBar.label",
              defaultMessage: "Artifact review",
              description: "Review and send artifact annotations",
            })),
            (B[18] = eo),
            (B[19] = A))
          : (A = B[19]),
        B[20] !== eo
          ? ((j = eo.formatMessage({
              id: "artifactReviewBar.previous",
              defaultMessage: "Previous request",
              description: "Navigate to the previous queued annotation on the artifact",
            })),
            (B[20] = eo),
            (B[21] = j))
          : (j = B[21]),
        B[22] !== eo
          ? ((C = eo.formatMessage({
              id: "artifactReviewBar.next",
              defaultMessage: "Next request",
              description: "Navigate to the next queued annotation on the artifact",
            })),
            (B[22] = eo),
            (B[23] = C))
          : (C = B[23]),
        B[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, a.jsx)("span", {
              className: "working-irgfun loading-shimmer-pure-text",
              children: (0, a.jsx)(u.A, {
                id: "artifactAnnotationBatch.working",
                defaultMessage: "Working",
                description: "Artifact annotation batch status while Codex is processing the saved annotations",
              }),
            })),
            (B[24] = S))
          : (S = B[24]),
        B[25] !== h || B[26] !== m || B[27] !== v || B[28] !== x || B[29] !== A || B[30] !== j || B[31] !== C
          ? ((T = {
              selectContent: l,
              annotationCount: h,
              cancel: m,
              send: f,
              seeLatestChanges: g,
              dismissLatestChanges: v,
              annotationPreview: x,
              review: A,
              previous: j,
              next: C,
              working: S,
            }),
            (B[25] = h),
            (B[26] = m),
            (B[27] = v),
            (B[28] = x),
            (B[29] = A),
            (B[30] = j),
            (B[31] = C),
            (B[32] = T))
          : (T = B[32]),
        B[33] !== P || B[34] !== X
          ? ((_ = () => {
              P > 0 ? es(!0) : X()
            }),
            (B[33] = P),
            (B[34] = X),
            (B[35] = _))
          : (_ = B[35]),
        B[36] !== Z ? ((N = () => Z()), (B[36] = Z), (B[37] = N)) : (N = B[37]),
        B[38] !== P ||
        B[39] !== en ||
        B[40] !== et ||
        B[41] !== ee ||
        B[42] !== Y ||
        B[43] !== Q ||
        B[44] !== J ||
        B[45] !== F ||
        B[46] !== z ||
        B[47] !== q ||
        B[48] !== V ||
        B[49] !== ea ||
        B[50] !== T ||
        B[51] !== _ ||
        B[52] !== N ||
        B[53] !== t ||
        B[54] !== r ||
        B[55] !== ei
          ? ((E = (0, a.jsx)(i.D, {
              annotationCount: P,
              isSubmitting: ee,
              isAnnotating: et,
              embedded: en,
              sendDisabled: ea,
              phase: F,
              previewContent: z,
              previewOpen: V,
              previewDisabled: q,
              windowZoom: ei,
              stopControl: t,
              navigationIcons: n,
              completedReview: r,
              dismissIcon: s,
              labels: T,
              onNavigate: Q,
              onCancel: _,
              onSend: N,
              onSeeLatestChanges: J,
              onDismissLatestChanges: Y,
            })),
            (B[38] = P),
            (B[39] = en),
            (B[40] = et),
            (B[41] = ee),
            (B[42] = Y),
            (B[43] = Q),
            (B[44] = J),
            (B[45] = F),
            (B[46] = z),
            (B[47] = q),
            (B[48] = V),
            (B[49] = ea),
            (B[50] = T),
            (B[51] = _),
            (B[52] = N),
            (B[53] = t),
            (B[54] = r),
            (B[55] = ei),
            (B[56] = E))
          : (E = B[56]),
        B[57] === Symbol.for("react.memo_cache_sentinel") ? ((O = () => es(!1)), (B[57] = O)) : (O = B[57]),
        B[58] !== ee || B[59] !== X
          ? ((D = () => {
              ee || !1 === X({ discardChanges: !0 }) || es(!1)
            }),
            (B[58] = ee),
            (B[59] = X),
            (B[60] = D))
          : (D = B[60]),
        B[61] !== er || B[62] !== D
          ? ((R = (0, a.jsx)(M, { open: er, onKeepAnnotations: O, onDiscard: D })),
            (B[61] = er),
            (B[62] = D),
            (B[63] = R))
          : (R = B[63]),
        B[64] !== E || B[65] !== R
          ? ((k = (0, a.jsxs)(a.Fragment, { children: [E, R] })), (B[64] = E), (B[65] = R), (B[66] = k))
          : (k = B[66]),
        k
      )
    }
    function z(e) {
      let t,
        n = (0, o.c)(2)
      return (n[0] !== e ? ((t = (0, a.jsx)(q, { ...e, children: V })), (n[0] = e), (n[1] = t)) : (t = n[1]), t)
    }
    function V(e) {
      return (0, a.jsx)(K, { ...e })
    }
    function q(e) {
      let t,
        n,
        i,
        u,
        p,
        x,
        b,
        w,
        I,
        y,
        S,
        _,
        N = (0, o.c)(96),
        {
          children: E,
          annotationCount: M,
          isAnnotating: O,
          isAnnotationInteractionActive: D,
          conversationId: R,
          hostId: k,
          onBatchAction: B,
          onAnnotationsSubmitted: P,
          onDismissAnnotations: L,
          onRefresh: G,
          path: U,
          refreshQueryCacheKey: W,
          onNavigate: $,
        } = e,
        F = void 0 !== O && O,
        z = void 0 !== D && D,
        V = (0, l.gh)(C.GD),
        q = (0, c.A)(),
        K = (0, r.jE)()
      N[0] !== R || N[1] !== k || N[2] !== U
        ? ((t = { conversationId: R, hostId: k, path: U }), (N[0] = R), (N[1] = k), (N[2] = U), (N[3] = t))
        : (t = N[3])
      let X = t,
        Y = (0, l._U)(f.ME, X),
        Q = (0, l._U)(f.Wv, X),
        J = Q?.isSubmitting === !0
      N[4] !== R ? ((n = (e) => (0, v.s3)(R, e)), (N[4] = R), (N[5] = n)) : (n = N[5])
      let Z = n
      N[6] !== R ? ((i = () => (0, v.pL)(R, "direct-comment")), (N[6] = R), (N[7] = i)) : (i = N[7])
      let ee = i,
        et = (0, d.useSyncExternalStore)(Z, ee, H),
        en = null == Q ? "idle" : "working",
        { isResponseInProgress: ea, hasPendingTurnStart: eo, recoveryTurnInterrupted: ei } = (0, l._U)(m.z, X)
      N[8] !== k || N[9] !== U
        ? ((u = (0, j.NF)({ hostId: k, path: U })), (N[8] = k), (N[9] = U), (N[10] = u))
        : (u = N[10])
      let er = (0, l._U)(j.gI, u)
      ;(N[11] !== X || N[12] !== V
        ? ((p = () => V.get(f.Wv, X)?.sessionId), (N[11] = X), (N[12] = V), (N[13] = p))
        : (p = N[13]),
        N[14] !== k || N[15] !== G || N[16] !== U || N[17] !== K || N[18] !== W
          ? ((x = async () => {
              if (null != G) return G()
              await (0, j.aU)({ cacheKey: W, openFiles: [{ hostId: k, path: U }], queryClient: K, throwOnError: !0 })
            }),
            (N[14] = k),
            (N[15] = G),
            (N[16] = U),
            (N[17] = K),
            (N[18] = W),
            (N[19] = x))
          : (x = N[19]),
        N[20] !== k || N[21] !== U || N[22] !== V
          ? ((b = () => {
              ;(0, j.Jg)(V, { hostId: k, path: U })
            }),
            (N[20] = k),
            (N[21] = U),
            (N[22] = V),
            (N[23] = b))
          : (b = N[23]),
        N[24] !== X || N[25] !== V
          ? ((w = (e, t, n) => {
              ;(0, f.SH)(V, X, n, !1 !== e)
            }),
            (N[24] = X),
            (N[25] = V),
            (N[26] = w))
          : (w = N[26]),
        N[27] !== w || N[28] !== p || N[29] !== x || N[30] !== b
          ? ((I = { onMutate: p, mutationFn: x, onError: b, onSuccess: w }),
            (N[27] = w),
            (N[28] = p),
            (N[29] = x),
            (N[30] = b),
            (N[31] = I))
          : (I = N[31]))
      let es = (0, s.n)(I)
      N[32] !== X ||
      N[33] !== Y.length ||
      N[34] !== eo ||
      N[35] !== er ||
      N[36] !== ea ||
      N[37] !== J ||
      N[38] !== en ||
      N[39] !== ei ||
      N[40] !== V ||
      N[41] !== Q?.execution?.type
        ? ((y = () => {
            let e = Y.length > 0 && ei
            "working" !== en ||
              (Q?.execution?.type === "chatgpt" && !e) ||
              J ||
              (!e && (0 !== Y.length || er)) ||
              !1 !== ea ||
              eo ||
              (0, f.wN)(V, X)
          }),
          (N[32] = X),
          (N[33] = Y.length),
          (N[34] = eo),
          (N[35] = er),
          (N[36] = ea),
          (N[37] = J),
          (N[38] = en),
          (N[39] = ei),
          (N[40] = V),
          (N[41] = Q?.execution?.type),
          (N[42] = y))
        : (y = N[42])
      let el = Q?.execution?.type
      ;(N[43] !== X ||
      N[44] !== Y.length ||
      N[45] !== eo ||
      N[46] !== er ||
      N[47] !== ea ||
      N[48] !== J ||
      N[49] !== en ||
      N[50] !== ei ||
      N[51] !== V ||
      N[52] !== el
        ? ((S = [Y.length, X, er, ea, J, eo, en, ei, el, V]),
          (N[43] = X),
          (N[44] = Y.length),
          (N[45] = eo),
          (N[46] = er),
          (N[47] = ea),
          (N[48] = J),
          (N[49] = en),
          (N[50] = ei),
          (N[51] = V),
          (N[52] = el),
          (N[53] = S))
        : (S = N[53]),
        (0, d.useEffect)(y, S))
      let ed = en
      "working" !== en ||
        J ||
        eo ||
        (er && (!1 === ea || (Q?.execution?.type === "chatgpt" && null == ea))
          ? (ed = "latest")
          : Q?.execution?.type === "chatgpt" && !0 !== ea && (ed = "idle"))
      let ec = !1 === et
      if (
        N[54] !== M ||
        N[55] !== X ||
        N[56] !== E ||
        N[57] !== Y ||
        N[58] !== k ||
        N[59] !== q ||
        N[60] !== F ||
        N[61] !== z ||
        N[62] !== J ||
        N[63] !== P ||
        N[64] !== B ||
        N[65] !== L ||
        N[66] !== $ ||
        N[67] !== U ||
        N[68] !== es ||
        N[69] !== V ||
        N[70] !== Q ||
        N[71] !== ec ||
        N[72] !== ed
      ) {
        let e, t, n, o, i
        ;(N[74] !== Y || N[75] !== k
          ? ((e =
              Y.length > 0
                ? (0, a.jsx)(A.x, { commentAttachments: Y, cwd: null, hostId: k, showArtifactName: !1 })
                : void 0),
            (N[74] = Y),
            (N[75] = k),
            (N[76] = e))
          : (e = N[76]),
          N[77] !== Y.length || N[78] !== B || N[79] !== L || N[80] !== U || N[81] !== V
            ? ((t = (e) => {
                if (!1 === L(e)) return !1
                B?.("cancel")
                let t = (0, g.u6)(U)
                null != t &&
                  Y.length > 0 &&
                  (0, h.mf)(
                    V,
                    { ...t, threadId: (0, C.wg)(V.value) },
                    { annotationCount: Y.length, outcome: "canceled" },
                  )
              }),
              (N[77] = Y.length),
              (N[78] = B),
              (N[79] = L),
              (N[80] = U),
              (N[81] = V),
              (N[82] = t))
            : (t = N[82]),
          N[83] !== X || N[84] !== k || N[85] !== U || N[86] !== V
            ? ((n = () => {
                ;((0, j.d0)(V, { hostId: k, path: U }), (0, f.wN)(V, X))
              }),
              (N[83] = X),
              (N[84] = k),
              (N[85] = U),
              (N[86] = V),
              (N[87] = n))
            : (n = N[87]),
          N[88] !== es ? ((o = () => es.mutate()), (N[88] = es), (N[89] = o)) : (o = N[89]),
          N[90] !== X || N[91] !== q || N[92] !== P || N[93] !== B || N[94] !== V
            ? ((i = (e) => (0, T.c)(V, q, X, B, e ?? P)),
              (N[90] = X),
              (N[91] = q),
              (N[92] = P),
              (N[93] = B),
              (N[94] = V),
              (N[95] = i))
            : (i = N[95]),
          (_ = E({
            annotationCount: M,
            isAnnotationInteractionActive: z,
            isAnnotating: F,
            isSubmitting: J,
            sendDisabled: ec,
            stopTarget: Q?.execution == null ? void 0 : { execution: Q.execution, hostId: k },
            onNavigate: $,
            phase: ed,
            previewContent: e,
            onCancel: t,
            onDismissLatestChanges: n,
            onSeeLatestChanges: o,
            onSend: i,
          })),
          (N[54] = M),
          (N[55] = X),
          (N[56] = E),
          (N[57] = Y),
          (N[58] = k),
          (N[59] = q),
          (N[60] = F),
          (N[61] = z),
          (N[62] = J),
          (N[63] = P),
          (N[64] = B),
          (N[65] = L),
          (N[66] = $),
          (N[67] = U),
          (N[68] = es),
          (N[69] = V),
          (N[70] = Q),
          (N[71] = ec),
          (N[72] = ed),
          (N[73] = _))
      } else _ = N[73]
      return _
    }
    function H() {}
    function K(e) {
      let t,
        n,
        i,
        r,
        s,
        l,
        u,
        p,
        h = (0, o.c)(24)
      h[0] !== e
        ? (({ isAnnotationInteractionActive: n, ...t } = e), (h[0] = e), (h[1] = t), (h[2] = n))
        : ((t = h[1]), (n = h[2]))
      let m = void 0 !== n && n,
        f = (0, c.A)(),
        [g, v] = (0, d.useState)(null),
        { annotationCount: b, isAnnotating: w, isSubmitting: I, onNavigate: y, phase: A } = t,
        [j, C] = (0, d.useState)(null),
        T = b > 0 && "idle" === A && !I && !t.sendDisabled
      ;(h[3] !== t
        ? ((i = (e) => {
            e.defaultPrevented || e.isComposing || (e.preventDefault(), e.stopPropagation(), t.onSend())
          }),
          (h[3] = t),
          (h[4] = i))
        : (i = h[4]),
        h[5] !== j || h[6] !== T || h[7] !== i
          ? ((r = {
              commandId: "artifact.sendAnnotations",
              keyboardEventTarget: j,
              enabled: T,
              ignoreWithin:
                "form, [data-popcorn-annotation-editor-placement], input, textarea, select, [contenteditable]:not([contenteditable='false']), [role='textbox'], [role='combobox'], [role='menu']",
              onKeyDown: i,
            }),
            (h[5] = j),
            (h[6] = T),
            (h[7] = i),
            (h[8] = r))
          : (r = h[8]),
        (0, x.$)(r))
      let _ = null != y && "idle" === A && !I && (w || b > 0)
      h[9] !== _ || h[10] !== t
        ? ((s = (e) => (0, a.jsx)(F, { ...t, embedded: _, previewDisabled: void 0 !== e && e })),
          (h[9] = _),
          (h[10] = t),
          (h[11] = s))
        : (s = h[11])
      let N = s
      h[12] !== b ||
      h[13] !== N ||
      h[14] !== f ||
      h[15] !== w ||
      h[16] !== m ||
      h[17] !== _ ||
      h[18] !== y ||
      h[19] !== g
        ? ((l =
            null != y
              ? (0, a.jsx)(S.Z, {
                  draggable: _,
                  variant: "annotation",
                  enterFromBottom: w && 0 === b,
                  attention: w && 0 === b && !m,
                  label: f.formatMessage({
                    id: "artifactReviewBar.label",
                    defaultMessage: "Artifact review",
                    description: "Review and send artifact annotations",
                  }),
                  dragHandleLabel: f.formatMessage({
                    id: "artifactReviewBar.moveToolbar",
                    defaultMessage: "Move toolbar",
                    description: "Accessible label for the drag handle of the artifact annotation toolbar",
                  }),
                  dragHandleDescription: f.formatMessage({
                    id: "artifactReviewBar.moveToolbarDescription",
                    defaultMessage: "Drag or use arrow keys to move. Press Home to reset.",
                    description: "Keyboard and pointer instructions for moving the artifact annotation toolbar",
                  }),
                  position: g,
                  onPositionChange: v,
                  children: N,
                })
              : N()),
          (h[12] = b),
          (h[13] = N),
          (h[14] = f),
          (h[15] = w),
          (h[16] = m),
          (h[17] = _),
          (h[18] = y),
          (h[19] = g),
          (h[20] = l))
        : (l = h[20])
      let E = l
      return (
        h[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (e) => {
              C(e?.closest("[data-artifact-annotation-shortcuts]") ?? null)
            }),
            (h[21] = u))
          : (u = h[21]),
        h[22] !== E
          ? ((p = (0, a.jsx)("div", { ref: u, className: "contents", children: E })), (h[22] = E), (h[23] = p))
          : (p = h[23]),
        p
      )
    }
  },
  dlaM(e, t, n) {
    var a = n("zTeN"),
      o = n("DBCl"),
      i = n("tl5a"),
      r = n("bFv1"),
      s = n("MYVk"),
      l = n("bzoy"),
      d = n("MrGp"),
      c = n("mdWu"),
      u = n("OWtl"),
      p = n("Ed5q"),
      h = n("z55W")
    let m = (0, a.i1)(
        u.u,
        (e, { get: t }) => {
          let n = t(p.Wv, e),
            a = n?.execution
          if (a?.type === "chatgpt") {
            let { conversationId: i, streamRequestId: r } = a.completion,
              s = t(d.rG, i)
            if (
              n?.annotationId != null &&
              (0, l.zO)(t(d.r4, i)) &&
              (s?.streamRequestId !== r || s?.status === "completed")
            ) {
              let a = t(h.r, {
                hostId: e.hostId,
                threadId: (0, o.JXB)(i),
                annotationId: n.annotationId,
                streamRequestId: r,
              })
              return {
                isResponseInProgress: "finished" !== a && "missing" !== a,
                hasPendingTurnStart: !1,
                recoveryTurnInterrupted: !1,
              }
            }
            if (null != r && s?.streamRequestId === r)
              return {
                isResponseInProgress: !1,
                hasPendingTurnStart: !1,
                recoveryTurnInterrupted: "interrupted" === s.status,
              }
            let c = t(d.LT, i),
              u = t(d.F1, i)
            return {
              isResponseInProgress: !!(null != r && c === r && (0, d.QN)(u)) || null,
              hasPendingTurnStart: !1,
              recoveryTurnInterrupted: !1,
            }
          }
          if (null == n || null == a)
            return { isResponseInProgress: !1, hasPendingTurnStart: !1, recoveryTurnInterrupted: !1 }
          let u = a.turn ?? a.queuedBehindTurn,
            m = u?.threadId ?? (0, o.JXB)(e.conversationId),
            f = t(i.uF, m)
          if (null == a.turn && null != a.queuedBehindTurn) {
            let a = t(s.Ax, { hostId: e.hostId, threadId: m })
            null == a
              ? (f = null)
              : a.some((e) => e.context.artifactAnnotationBatch?.sessionId === n.sessionId) && (f = !0)
          }
          return {
            isResponseInProgress: f,
            hasPendingTurnStart: null != t(c.db, m),
            recoveryTurnInterrupted: u?.turnId != null && t(r.P, m).has(u.turnId),
          }
        },
        {
          isEqual: (e, t) =>
            e.isResponseInProgress === t.isResponseInProgress &&
            e.hasPendingTurnStart === t.hasPendingTurnStart &&
            e.recoveryTurnInterrupted === t.recoveryTurnInterrupted,
        },
      ),
      f = (0, a.i1)(u.u, (e, { get: t }) => {
        let n = t(p.Wv, e)
        if (null == n) return !1
        let a = t(m, e)
        return n.isSubmitting || a.hasPendingTurnStart || !0 === a.isResponseInProgress
      })
    n.d(t, {}, { e: f, z: m })
  },
  CFTv(e, t, n) {
    var a = n("Z0ob"),
      o = n("SGsN"),
      i = n("TL6G"),
      r = n("wO6P"),
      s = n("Ed5q"),
      l = n("w7Qu")
    n.d(
      t,
      {},
      {
        c: function (e, t, n, d, c) {
          d?.("send")
          let u = e.get(s.ME, n),
            p = u[0]
          if (null == p || !1 === (0, a.pL)(n.conversationId, "direct-comment") || e.get(s.Wv, n)?.isSubmitting) return
          let h = { ...n, sessionId: globalThis.crypto.randomUUID() }
          ;(0, s.bC)(e, h, {
            onAccepted: c,
            finishSend: (0, r.B)(e, "file", (0, l.u6)(n.path)?.artifactType ?? "unknown", n.conversationId),
          })
          try {
            i.O1.dispatchHostMessage({
              type: "artifact-direct-comment",
              artifactBatch: { hostId: n.hostId, path: n.path },
              body: "",
              comment: p,
              comments: u,
              conversationId: n.conversationId,
              sessionId: h.sessionId,
            })
          } catch {
            ;((0, s.ou)(e, h, "internal"),
              e
                .get(o.Id)
                .danger(
                  t.formatMessage({
                    id: "artifactAnnotationBatch.sendFailed",
                    defaultMessage: "Could not send requests. Try again.",
                    description:
                      "Error shown when an artifact request batch could not be sent; saved requests are retained for retry",
                  }),
                  { errorAnalytics: { toastId: "artifactAnnotationBatch.sendFailed" } },
                ))
          }
        },
      },
    )
  },
  z55W(e, t, n) {
    var a = n("zTeN"),
      o = n("AuIy"),
      i = n("jXcw"),
      r = n("tl5a"),
      s = n("bFv1"),
      l = n("MYVk"),
      d = n("vdpW"),
      c = n("bzoy"),
      u = n("MrGp"),
      p = n("nmDX"),
      h = n("OWtl")
    let m = (0, a.i1)(h.u, ({ annotationId: e, streamRequestId: t, ...n }, { get: a }) => {
      let h = a(l.Ax, n)
      if (
        h?.some((t) => t.context.commentAttachments?.some((t) => t.localArtifactAnnotationContext?.annotationId === e))
      )
        return "queued"
      if (a(u.fl, n.threadId)) {
        let i = a(u.Jv, n.threadId)
        if (null == i) return null
        if (null != t && a(u.LT, n.threadId) !== t && !(0, c.zO)(a(u.r4, n.threadId))) return "finished"
        let r = (t) => (0, p.$c)(t).some((t) => t.annotationId === e)
        return (0, o.Ph)({ current_node: a(u.Od, n.threadId), mapping: i }).some(
          (e) => "user" === e.author.role && r((0, o.s)(e)),
        )
          ? (0, u.QN)(a(u.F1, n.threadId))
            ? "running"
            : "finished"
          : Object.values(i).some(({ message: e }) => e?.author.role === "user" && r((0, o.s)(e)))
            ? "finished"
            : null == h
              ? null
              : "missing"
      }
      a(d.Ct, n)
      let m = a(d.M, n)
      for (let t of m?.toReversed() ?? []) {
        let o = a(d.Ko, t)
        if (
          null != o &&
          ((0, p.$c)((0, i.Q)({ input: o.params.input }).rawText, {
            commentAttachments: o.params.commentAttachments,
          }).some((t) => t.annotationId === e) ||
            (a(d.hm, t) ?? []).some((n) => {
              let o = a(d.mz, { ...t, itemId: n })
              return (
                (o?.type === "userMessage" || (o?.type === "steeringUserMessage" && "accepted" === o.status)) &&
                (0, p.$c)((0, i.Q)({ input: "userMessage" === o.type ? o.content : o.input }).rawText, {
                  commentAttachments:
                    "steeringUserMessage" === o.type ? o.restoreMessage.context.commentAttachments : void 0,
                }).some((t) => t.annotationId === e)
              )
            }))
        )
          return (null == o.pendingUserMessageAdmission && "inProgress" !== o.status) ||
            (null != o.turnId && a(s.P, n.threadId).has(o.turnId))
            ? "finished"
            : "running"
      }
      let f = a(r.uF, n.threadId)
      return null == m || null == h || null == f ? null : f ? "running" : "missing"
    })
    n.d(t, {}, { r: m })
  },
  Z0ob(e, t, n) {
    let a = "codex-browser-sidebar-tweaks-submit-request"
    function o(e, t) {
      let n
      return (
        window.dispatchEvent(
          new CustomEvent(a, {
            detail: {
              conversationId: e,
              submissionKind: t,
              onSubmitAvailability: (e) => {
                n = null == n ? e : n && e
              },
            },
          }),
        ),
        n
      )
    }
    function i(e, t) {
      let n = (n) => {
        n.detail.conversationId === e && n.detail.availabilityChanged && t()
      }
      return (
        window.addEventListener(a, n),
        () => {
          window.removeEventListener(a, n)
        }
      )
    }
    function r(e) {
      window.dispatchEvent(new CustomEvent(a, { detail: { availabilityChanged: !0, conversationId: e } }))
    }
    n.d(
      t,
      {},
      {
        _K: function (e, t, n) {
          if (t.aborted) return Promise.resolve(!1)
          let a = o(e)
          return null != a
            ? Promise.resolve(a)
            : new Promise((a) => {
                let r = (e) => {
                    ;(d(), clearTimeout(c), t.removeEventListener("abort", l), a(e))
                  },
                  s = () => {
                    let t = o(e)
                    null != t && r(t)
                  },
                  l = () => r(!1),
                  d = i(e, s),
                  c = setTimeout(() => r(!1), n)
                ;(t.addEventListener("abort", l, { once: !0 }), s())
              })
        },
        cI: function (e, t, n = !1, o) {
          let i = (a) => {
            if (a.detail.conversationId !== e || a.detail.availabilityChanged) return
            if (null != a.detail.onSubmitAvailability) {
              let e = "direct-comment" === a.detail.submissionKind ? o : n
              null != e && a.detail.onSubmitAvailability(!e)
              return
            }
            if (n) return
            let i = t()
            null != i && a.detail.onSubmitStarted?.(i)
          }
          return (
            window.addEventListener(a, i),
            r(e),
            () => {
              ;(window.removeEventListener(a, i), r(e))
            }
          )
        },
        dJ: function (e) {
          let t
          return (
            window.dispatchEvent(
              new CustomEvent(a, {
                detail: {
                  conversationId: e,
                  onSubmitStarted: (e) => {
                    t = e
                  },
                },
              }),
            ),
            t
          )
        },
        pL: o,
        s3: i,
      },
    )
  },
  ZzsR(e, t, n) {
    var a = n("QosV"),
      o = n("zTeN"),
      i = n("hGgS"),
      r = n("n5iL")
    n.d(
      t,
      {},
      {
        $: function (e) {
          let t,
            n = (0, a.c)(8),
            {
              commandId: s,
              enabled: l,
              onKeyDown: d,
              onKeyUp: c,
              capture: u,
              ignoreWithin: p,
              keyboardEventTarget: h,
            } = e,
            m = (0, o._U)(r.M5, s),
            f = m ?? "",
            g = (void 0 === l || l) && null != m
          ;(n[0] !== u || n[1] !== p || n[2] !== h || n[3] !== d || n[4] !== c || n[5] !== f || n[6] !== g
            ? ((t = {
                accelerator: f,
                enabled: g,
                onKeyDown: d,
                onKeyUp: c,
                capture: u,
                ignoreWithin: p,
                keyboardEventTarget: h,
              }),
              (n[0] = u),
              (n[1] = p),
              (n[2] = h),
              (n[3] = d),
              (n[4] = c),
              (n[5] = f),
              (n[6] = g),
              (n[7] = t))
            : (t = n[7]),
            (0, i.EE)(t))
        },
      },
    )
  },
  yoOF(e, t, n) {
    var a = n("iRMi"),
      o = n("yGJW"),
      i = n("OMIV")
    let r = {
        browser_local: a.CodexAnnotationModeSurface.CODEX_ANNOTATION_MODE_SURFACE_BROWSER_LOCAL,
        browser_remote: a.CodexAnnotationModeSurface.CODEX_ANNOTATION_MODE_SURFACE_BROWSER_REMOTE,
        file_artifact: a.CodexAnnotationModeSurface.CODEX_ANNOTATION_MODE_SURFACE_FILE_ARTIFACT,
        artifact_session: a.CodexAnnotationModeSurface.CODEX_ANNOTATION_MODE_SURFACE_ARTIFACT_SESSION,
        native_page: a.CodexAnnotationModeSurface.CODEX_ANNOTATION_MODE_SURFACE_NATIVE_PAGE,
        site: a.CodexAnnotationModeSurface.CODEX_ANNOTATION_MODE_SURFACE_SITE,
        image: a.CodexAnnotationModeSurface.CODEX_ANNOTATION_MODE_SURFACE_IMAGE,
      },
      s = {
        button: a.CodexAnnotationModeEntrySource.CODEX_ANNOTATION_MODE_ENTRY_SOURCE_BUTTON,
        keyboard_shortcut: a.CodexAnnotationModeEntrySource.CODEX_ANNOTATION_MODE_ENTRY_SOURCE_KEYBOARD_SHORTCUT,
        context_menu: a.CodexAnnotationModeEntrySource.CODEX_ANNOTATION_MODE_ENTRY_SOURCE_CONTEXT_MENU,
      }
    n.d(
      t,
      {},
      {
        O: function (e, { surface: t, entrySource: n, isDetached: l }) {
          let d = e.get(i.M9),
            c = d?.getContext().user,
            u = c?.userID,
            p = c?.customIDs?.account_id
          ;(0, o.yy)(
            e,
            a.CodexAnnotationModeEntered,
            { surface: r[t], entrySource: null == n ? void 0 : s[n], isDetached: l },
            void 0,
            void 0,
            {
              expectedUserId: u,
              expectedAccountId: p,
              shouldSend: () => {
                let t = d?.getContext().user
                return e.get(i.M9) === d && t?.userID === u && t?.customIDs?.account_id === p
              },
            },
          )
        },
      },
    )
  },
  v6uO(e, t, n) {
    n.d(t, { a: () => u })
    var a = n("ABep"),
      o = n("QosV"),
      i = n("o7XU"),
      r = n("Da9n"),
      s = n("on57"),
      l = n("zd8w"),
      d = n("ZWS5"),
      c = n("UxN3")
    function u(e) {
      let t,
        n,
        u,
        p,
        h = (0, o.c)(8),
        { active: m, size: f } = e
      h[0] !== m ? ((t = { active: m, entering: !1 }), (h[0] = m), (h[1] = t)) : (t = h[1])
      let [g, v] = (0, l.useState)(t)
      g.active !== m && v({ active: m, entering: m })
      let x = g.entering && "entering-Dys815"
      return (
        h[2] !== x ? ((n = (0, s.A)("pointer-events-none shrink-0", x)), (h[2] = x), (h[3] = n)) : (n = h[3]),
        h[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = { assets: { 16: (0, d.TE)(i.j), 20: (0, d.TE)(r.A) } }), (h[4] = u))
          : (u = h[4]),
        h[5] !== f || h[6] !== n
          ? ((p = (0, a.jsx)(c.b5, { className: n, icon: u, size: f })), (h[5] = f), (h[6] = n), (h[7] = p))
          : (p = h[7]),
        p
      )
    }
  },
  tgP9(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      i = n("Wf1j"),
      r = n("ygO2"),
      s = n("GO7r")
    n.d(
      t,
      {},
      {
        B: function (e) {
          let t,
            n,
            l,
            d = (0, o.c)(11),
            { annotationNumber: c, onEdit: u, onRemove: p } = e,
            h = (0, i.A)()
          return null == u && null == p
            ? null
            : (d[0] !== c || d[1] !== h || d[2] !== u
                ? ((t =
                    null == u
                      ? null
                      : (0, a.jsx)(r.$, {
                          "aria-label": h.formatMessage(
                            {
                              id: "annotationPreviewActions.edit",
                              defaultMessage: "Edit annotation {annotationNumber}",
                              description:
                                "Accessible label for the pencil button that edits an individual annotation from the composer's attachment preview",
                            },
                            { annotationNumber: c },
                          ),
                          color: "ghost",
                          size: "compact",
                          uniform: !0,
                          onClick: u,
                          children: (0, a.jsx)(s.Npl, {}),
                        })),
                  (d[0] = c),
                  (d[1] = h),
                  (d[2] = u),
                  (d[3] = t))
                : (t = d[3]),
              d[4] !== c || d[5] !== h || d[6] !== p
                ? ((n =
                    null == p
                      ? null
                      : (0, a.jsx)(r.$, {
                          "aria-label": h.formatMessage(
                            {
                              id: "annotationPreviewActions.remove",
                              defaultMessage: "Delete annotation {annotationNumber}",
                              description:
                                "Accessible label for the trash button that deletes an individual annotation from the composer's attachment preview",
                            },
                            { annotationNumber: c },
                          ),
                          color: "ghost",
                          size: "compact",
                          uniform: !0,
                          onClick: p,
                          children: (0, a.jsx)(s.cSG, {}),
                        })),
                  (d[4] = c),
                  (d[5] = h),
                  (d[6] = p),
                  (d[7] = n))
                : (n = d[7]),
              d[8] !== t || d[9] !== n
                ? ((l = (0, a.jsxs)("div", { className: "relative flex shrink-0 items-center", children: [t, n] })),
                  (d[8] = t),
                  (d[9] = n),
                  (d[10] = l))
                : (l = d[10]),
              l)
        },
      },
    )
  },
  grIB(e, t, n) {
    var a = n("zTeN"),
      o = n("Oj9r")
    let i = (0, a.bD)(o.GD, (e) => null)
    n.d(
      t,
      {},
      {
        B: i,
        k: function (e, t, n, a) {
          let o = { submit: n, threadId: a }
          return (
            e.set(i, t, o),
            () => {
              e.get(i, t) === o && e.set(i, t, null)
            }
          )
        },
      },
    )
  },
  DcH0(e, t, n) {
    n.d(t, { _: () => s })
    var a = n("ABep"),
      o = n("QosV"),
      i = n("on57"),
      r = n("aqd9")
    function s(e) {
      let t,
        n,
        s,
        l,
        d,
        c,
        u = (0, o.c)(14)
      u[0] !== e
        ? (({ animate: s, variant: l, className: t, ...n } = e),
          (u[0] = e),
          (u[1] = t),
          (u[2] = n),
          (u[3] = s),
          (u[4] = l))
        : ((t = u[1]), (n = u[2]), (s = u[3]), (l = u[4]))
      let p = void 0 === s || s,
        h = void 0 === l ? "default" : l,
        m = "solid" === h && "bg-surface-secondary",
        f = "prominent" === h && "bg-text/10",
        g = "prominent" === h && p && "motion-safe:animate-pulse"
      u[5] !== t || u[6] !== m || u[7] !== f || u[8] !== g
        ? ((d = (0, i.A)("Placeholder-GJXpwo", m, f, g, t)), (u[5] = t), (u[6] = m), (u[7] = f), (u[8] = g), (u[9] = d))
        : (d = u[9])
      let v = ("default" === h && !!p) || void 0
      return (
        u[10] !== n || u[11] !== d || u[12] !== v
          ? ((c = (0, a.jsx)("div", { ref: r.d, "data-loading-indicator": "", className: d, "data-animate": v, ...n })),
            (u[10] = n),
            (u[11] = d),
            (u[12] = v),
            (u[13] = c))
          : (c = u[13]),
        c
      )
    }
  },
  hEYZ(e, t, n) {
    var a = n("zTeN"),
      o = n("OWtl")
    let i = null,
      r = 0,
      s = new Set(),
      l = (0, a.SZ)(o.u, c, ({ set: e }) => (e(c()), d(() => e(c()))))
    function d(e) {
      return (
        s.add(e),
        () => {
          s.delete(e)
        }
      )
    }
    function c() {
      return r > 0
    }
    function u() {
      for (let e of s) e()
    }
    n.d(
      t,
      {},
      {
        Xf: function (e) {
          i?.(e)
        },
        Yv: c,
        o2: l,
        ou: function (e) {
          return (
            (i = e),
            () => {
              i === e && (i = null)
            }
          )
        },
        vb: d,
        yw: function (e) {
          if (!(e instanceof HTMLElement)) return !0
          let t = e.closest("[contenteditable]")
          return (
            !e.isContentEditable &&
            (null == t || "false" === t.getAttribute("contenteditable")) &&
            null ==
              e.closest(
                'input, textarea, select, [role="slider"], [role="spinbutton"], [role="combobox"], [role="listbox"], [role="grid"], [role="tree"], [role="tablist"], [role="menu"]',
              )
          )
        },
        zq: function () {
          let e = !0
          return (
            (r += 1),
            u(),
            () => {
              e && ((e = !1), (r = Math.max(0, r - 1)), u())
            }
          )
        },
      },
    )
  },
  lHc5(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      i = n("on57"),
      r = n("DBCl"),
      s = n("soyF"),
      l = n("HfjH"),
      d = n("zd8w"),
      c = n("Wf1j"),
      u = n("oyxz"),
      p = n("GFsD"),
      h = n("tgP9"),
      m = n("g3QY"),
      f = n("OGl1"),
      g = n("cWXs"),
      v = n("nR4O"),
      x = n("S1CS"),
      b = n("bnxy"),
      w = n("kavB"),
      I = n("vByM"),
      y = n("nmDX")
    function A(e, t) {
      return (0, a.jsxs)(
        "li",
        {
          className: "flex min-w-0 items-center gap-1.5",
          children: [
            null == e.elementType
              ? null
              : (0, a.jsx)("span", {
                  className:
                    "inline-flex shrink-0 items-center rounded-sm border border-default bg-text/5 px-1.5 py-px font-mono text-[11px] leading-[14px] font-medium text-secondary",
                  children: e.elementType,
                }),
            (0, a.jsx)("span", {
              className: "min-w-0 truncate",
              title: e.immediateText ?? e.label ?? void 0,
              children:
                "region" === e.kind
                  ? (0, a.jsx)(u.A, {
                      id: "codex.localConversation.browserComment.selectedArea",
                      defaultMessage: "Area {number}",
                      description: "Label for a selected page area in a sent browser annotation",
                      values: { number: e.areaNumber },
                    })
                  : (e.immediateText ??
                    e.label ??
                    (0, a.jsx)(u.A, {
                      id: "codex.localConversation.browserComment.selectedElement",
                      defaultMessage: "Selected page element",
                      description:
                        "Metadata label shown in a sent user comment attachment when the selected browser element has no readable label",
                    })),
            }),
          ],
        },
        `${e.kind}:${e.elementType}:${e.label}:${e.areaNumber}:${t}`,
      )
    }
    function j(e) {
      return (0, l.W6)(e)?.dataUrl ?? null
    }
    function C(e) {
      return null == e.localWorkspaceRoot ? [] : [(0, b.XH)(e.localWorkspaceRoot)]
    }
    function S(e) {
      let t,
        n,
        i,
        r,
        s = (0, o.c)(13),
        { cwd: l, hostId: c, label: u, reference: p, tooltipText: h } = e
      return (
        s[0] !== p.path
          ? ((t = (0, d.createElement)((0, f.I3)(p.path), { className: "icon-xs shrink-0" })),
            (s[0] = p.path),
            (s[1] = t))
          : (t = s[1]),
        s[2] !== u
          ? ((n = (0, a.jsx)("span", { className: "min-w-0 truncate", children: u })), (s[2] = u), (s[3] = n))
          : (n = s[3]),
        s[4] !== t || s[5] !== n
          ? ((i = (0, a.jsxs)("span", {
              className: "inline-flex max-w-full min-w-0 items-center gap-1 overflow-hidden font-medium text-info",
              children: [t, n],
            })),
            (s[4] = t),
            (s[5] = n),
            (s[6] = i))
          : (i = s[6]),
        s[7] !== l || s[8] !== c || s[9] !== p || s[10] !== i || s[11] !== h
          ? ((r = (0, a.jsx)(x.Bh, {
              className: "inline-flex max-w-full min-w-0 overflow-hidden text-xs leading-4",
              reference: p,
              tooltipText: h,
              cwd: l,
              hostId: c,
              openInSidePanel: !0,
              children: i,
            })),
            (s[7] = l),
            (s[8] = c),
            (s[9] = p),
            (s[10] = i),
            (s[11] = h),
            (s[12] = r))
          : (r = s[12]),
        r
      )
    }
    function T(e) {
      let t,
        n = (0, o.c)(3),
        { alt: i, src: r } = e
      return (
        n[0] !== i || n[1] !== r
          ? ((t = (0, a.jsx)("img", {
              alt: i,
              className: "h-12 w-12 shrink-0 rounded border border-default object-cover",
              src: r,
            })),
            (n[0] = i),
            (n[1] = r),
            (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function _(e) {
      let t,
        n,
        i,
        r = (0, o.c)(10),
        { comment: s, cwd: l, hostId: d } = e
      if (s.designTweak && null != s.designTweakChanges) {
        let e
        return (
          r[0] !== s.body || r[1] !== s.designTweakChanges
            ? ((e = (0, a.jsx)("div", {
                className: "text-sm leading-5 break-words whitespace-pre-wrap text-default",
                children: (0, a.jsx)(N, { body: s.body, designTweakChanges: s.designTweakChanges }),
              })),
              (r[0] = s.body),
              (r[1] = s.designTweakChanges),
              (r[2] = e))
            : (e = r[2]),
          e
        )
      }
      return (
        r[3] === Symbol.for("react.memo_cache_sentinel") ? ((t = { kind: "small" }), (r[3] = t)) : (t = r[3]),
        r[4] !== s.body ? ((n = (0, v.q)(s.body)), (r[4] = s.body), (r[5] = n)) : (n = r[5]),
        r[6] !== l || r[7] !== d || r[8] !== n
          ? ((i = (0, a.jsx)(g.Markdown, { allowBasicHtml: !0, cwd: l, hostId: d, textStyle: t, children: n })),
            (r[6] = l),
            (r[7] = d),
            (r[8] = n),
            (r[9] = i))
          : (i = r[9]),
        i
      )
    }
    function N(e) {
      let t,
        n = (0, o.c)(4),
        { body: i, designTweakChanges: r } = e,
        s = (0, c.A)()
      if (n[0] !== i || n[1] !== r || n[2] !== s) {
        let e = new Map(r.map(k)),
          o = [
            ...(0 === i.length ? [] : i.split("\n")),
            ...Array.from(e.keys()).filter(
              (e) =>
                !`
${i}
`.includes(`
${e}
`),
            ),
          ]
        ;((t = (0, a.jsx)("span", {
          className: "flex flex-col gap-0.5 whitespace-pre-wrap",
          children: o.map((t, n) => {
            let o = e.get(t)
            if (null == o) return (0, a.jsx)("span", { children: t }, n)
            let i = `${o.property}: `
            if (null == o.previousValue)
              return (0, a.jsx)(
                "span",
                {
                  className: "inline-flex flex-wrap items-center gap-x-1 break-words",
                  children:
                    "boolean" != typeof o.nextValue
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)("span", { className: "text-secondary", children: i }),
                            (0, a.jsx)("span", { children: o.nextValue }),
                          ],
                        })
                      : (0, a.jsx)(u.A, {
                          id: "codex.localConversation.designTweak.toggleValue",
                          defaultMessage:
                            "<label>{property}: </label><value>{nextValue, select, true {On} other {Off}}</value>",
                          description:
                            "Selected state of a website toggle control. Property is the website-provided control label and optional code reference; nextValue is true when enabled and false when disabled. Label and value tags style those fields.",
                          values: { property: o.property, nextValue: o.nextValue, label: R, value: D },
                        }),
                },
                n,
              )
            let r =
              "boolean" != typeof o.nextValue
                ? `${o.property}: ${o.previousValue} → ${o.nextValue}`
                : s.formatMessage(
                    {
                      id: "codex.localConversation.designTweak.toggleSummary",
                      defaultMessage:
                        "{property}: {previousValue, select, true {On} other {Off}} → {nextValue, select, true {On} other {Off}}",
                      description:
                        "Accessible summary of a website toggle control change. Property is the website-provided control label and optional code reference; previousValue and nextValue are true when enabled and false when disabled.",
                    },
                    { property: o.property, previousValue: o.previousValue, nextValue: o.nextValue },
                  )
            return (0, a.jsx)(
              "span",
              {
                "aria-label": r,
                className: "inline-flex flex-wrap items-center gap-x-1 break-words",
                children:
                  "boolean" != typeof o.nextValue
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("span", { className: "text-secondary", children: i }),
                          (0, a.jsx)("span", { children: o.previousValue }),
                          (0, a.jsx)("span", {
                            "aria-hidden": "true",
                            className: "text-codex-description",
                            children: " → ",
                          }),
                          (0, a.jsx)("span", { children: o.nextValue }),
                        ],
                      })
                    : (0, a.jsx)(u.A, {
                        id: "codex.localConversation.designTweak.toggleChange",
                        defaultMessage:
                          "<label>{property}: </label><value>{previousValue, select, true {On} other {Off}}</value><arrow> → </arrow><value>{nextValue, select, true {On} other {Off}}</value>",
                        description:
                          "Website toggle control edit showing its previous and new state. Property is the website-provided control label and optional code reference; previousValue and nextValue are true when enabled and false when disabled. Label and value tags style those fields; arrow separates the previous and new states.",
                        values: {
                          property: o.property,
                          previousValue: o.previousValue,
                          nextValue: o.nextValue,
                          label: O,
                          value: M,
                          arrow: E,
                        },
                      }),
              },
              n,
            )
          }),
        })),
          (n[0] = i),
          (n[1] = r),
          (n[2] = s),
          (n[3] = t))
      } else t = n[3]
      return t
    }
    function E(e) {
      return (0, a.jsx)("span", { "aria-hidden": "true", className: "text-codex-description", children: e })
    }
    function M(e) {
      return (0, a.jsx)("span", { children: e })
    }
    function O(e) {
      return (0, a.jsx)("span", { className: "text-secondary", children: e })
    }
    function D(e) {
      return (0, a.jsx)("span", { children: e })
    }
    function R(e) {
      return (0, a.jsx)("span", { className: "text-secondary", children: e })
    }
    function k(e) {
      return [(0, I.J)(e), e]
    }
    function B(e) {
      let t,
        n = (0, o.c)(3),
        { alt: i, src: r } = e
      return (
        n[0] !== i || n[1] !== r
          ? ((t = (0, a.jsx)("img", {
              alt: i,
              className: "h-5 w-7 shrink-0 rounded-sm border border-default object-cover",
              src: r,
            })),
            (n[0] = i),
            (n[1] = r),
            (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function P(e, t) {
      return null == t ? e : (0, b.Fd)((0, m.ph)(e, t))
    }
    n.d(
      t,
      {},
      {
        x: function (e) {
          let t,
            n,
            l,
            d,
            m,
            f,
            g,
            v = (0, o.c)(38),
            I = (0, c.A)(),
            { cwd: N, hostId: E, showArtifactName: M, onEditAnnotation: O, onRemoveAnnotation: D } = e,
            R = void 0 === M || M
          v[0] !== e.commentAttachments || v[1] !== e.comments
            ? ((n = new Set(
                (t = null == e.commentAttachments ? e.comments : e.commentAttachments.map(y.h_)).flatMap(C),
              )),
              (v[0] = e.commentAttachments),
              (v[1] = e.comments),
              (v[2] = t),
              (v[3] = n))
            : ((t = v[2]), (n = v[3]))
          let k = n.size > 1
          v[4] !== e.commentAttachments || v[5] !== e.screenshotThumbnailSrcs
            ? ((l = null == e.commentAttachments ? e.screenshotThumbnailSrcs : e.commentAttachments.map(j)),
              (v[4] = e.commentAttachments),
              (v[5] = e.screenshotThumbnailSrcs),
              (v[6] = l))
            : (l = v[6])
          let L = l
          v[7] !== I
            ? ((d = I.formatMessage({
                id: "codex.localConversation.comment.screenshotAttached",
                defaultMessage: "Screenshot attached",
                description:
                  "Accessible label for a thumbnail shown when a user comment attachment includes a screenshot",
              })),
              (v[7] = I),
              (v[8] = d))
            : (d = v[8])
          let G = d
          v[9] !== I
            ? ((m = I.formatMessage({
                id: "codex.localConversation.annotation.selectedContent",
                defaultMessage: "Selected annotation content",
                description:
                  "Accessible label for an image preview of selected document or PDF content in an annotation tooltip",
              })),
              (v[9] = I),
              (v[10] = m))
            : (m = v[10])
          let U = m
          if (
            v[11] !== t ||
            v[12] !== N ||
            v[13] !== E ||
            v[14] !== I ||
            v[15] !== O ||
            v[16] !== D ||
            v[17] !== e ||
            v[18] !== G ||
            v[19] !== L ||
            v[20] !== U ||
            v[21] !== R ||
            v[22] !== k
          ) {
            let n
            ;(v[24] !== N ||
            v[25] !== E ||
            v[26] !== I ||
            v[27] !== O ||
            v[28] !== D ||
            v[29] !== e ||
            v[30] !== G ||
            v[31] !== L ||
            v[32] !== U ||
            v[33] !== R ||
            v[34] !== k
              ? ((n = (t, n) => {
                  let o = (0, w.ku)(t),
                    l = e.commentAttachments?.[n],
                    d = null != l && null != D && (e.canRemoveAnnotation?.(l) ?? !0),
                    c = null != l && (null != O || d),
                    m = t.artifactAnnotationTarget,
                    f = m?.type === "site-element-selection" ? (0, p.a)(m) : null,
                    g = null == t.localWorkspaceRoot ? N : (0, r.DIv)(t.localWorkspaceRoot),
                    v = l?.localPullRequestCommentGuidance?.trim() || null,
                    y = null == l ? t.artifactAnnotationLocationLabel : null,
                    j = y ?? (0, w.tT)(t, I),
                    C = null,
                    M = null,
                    W = t.artifactAnnotationFilePath ?? t.pdfAnnotationFilePath,
                    $ = "artifact_comment" === t.origin || "artifact_annotation" === t.origin || "pdf" === t.origin
                  "details" === o.type &&
                    (R || !$) &&
                    (null != (C = o.pathLabel) && "diff" === t.origin
                      ? ((C = P(t.path, g)),
                        k && null != t.localWorkspaceRoot && (C = (0, b.xE)((0, b.Q0)(t.localWorkspaceRoot), C)),
                        (M = (function (e, t) {
                          let n = P(e.path, t),
                            a = e.lineRange
                          if (null == a) return (0, s.n)(n)
                          let o = a.match("left" === e.side ? /L(\d+)/ : /R(\d+)/),
                            i = o?.[1] ?? (/^\d+(?:-\d+)?$/.test(a) ? a : null)
                          return null == i ? (0, s.n)(n) : (0, s.n)(`${n}:${i}`)
                        })(t, g)))
                      : null != C && $ && null != W && (M = (0, s.n)(W)))
                  let F = $ ? (W ?? C ?? void 0) : (C ?? void 0),
                    z = L?.[n],
                    V =
                      "pdf" === t.origin && null != z && null == t.pdfAnnotationContentPreview
                        ? { type: "image", src: z }
                        : null,
                    q = null == z || "pdf" === t.origin ? null : (0, a.jsx)(B, { alt: G, src: z }),
                    H = t.artifactAnnotationContentPreview ?? t.pdfAnnotationContentPreview ?? V,
                    K = H?.type === "image" ? H : null,
                    X = null != K,
                    Y = null != t.browserSelections && t.browserSelections.length > 1 ? t.browserSelections : null
                  return (0, a.jsxs)(
                    "div",
                    {
                      className: (0, i.A)(
                        "min-w-0 px-2.5 py-2",
                        X || c ? "flex items-start gap-2" : "flex flex-col gap-1.5",
                      ),
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex min-w-0 flex-1 flex-col gap-1.5",
                          children: [
                            null != f
                              ? (0, a.jsxs)("div", {
                                  className:
                                    "flex min-w-0 items-center gap-1.5 text-xs leading-4 text-codex-description",
                                  children: [
                                    q,
                                    (0, a.jsx)("span", {
                                      className:
                                        "inline-flex shrink-0 items-center rounded-sm border border-default bg-text/5 px-1.5 py-px font-mono text-[11px] leading-[14px] font-medium text-secondary",
                                      children: f,
                                    }),
                                    j && j.toLowerCase() !== f.toLowerCase()
                                      ? (0, a.jsx)("span", { className: "min-w-0 truncate", children: j })
                                      : null,
                                  ],
                                })
                              : null != Y
                                ? (0, a.jsxs)("div", {
                                    className: "flex min-w-0 flex-col gap-1.5 text-xs leading-4 text-codex-description",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                          q,
                                          (0, a.jsx)(u.A, {
                                            id: "codex.localConversation.browserComment.selectedItems",
                                            defaultMessage:
                                              "{count, plural, one {# selected item} other {# selected items}}",
                                            description:
                                              "Number of page elements and areas included in one browser annotation",
                                            values: { count: Y.length },
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("ol", {
                                        className: "flex min-w-0 flex-col gap-1",
                                        children: Y.map(A),
                                      }),
                                    ],
                                  })
                                : "selected-browser-text" === o.type
                                  ? (0, a.jsxs)("div", {
                                      className: "flex items-center gap-1 text-xs leading-4 text-codex-description",
                                      children: [
                                        q,
                                        (0, a.jsx)(u.A, {
                                          id: "codex.localConversation.browserComment.selectedText",
                                          defaultMessage: "Selected text",
                                          description:
                                            "Metadata label shown in a sent user comment attachment created from selected browser text",
                                        }),
                                      ],
                                    })
                                  : "selected-browser-element" === o.type
                                    ? (0, a.jsxs)("div", {
                                        className: "flex items-center gap-1 text-xs leading-4 text-codex-description",
                                        children: [
                                          q,
                                          (0, a.jsx)(u.A, {
                                            id: "codex.localConversation.browserComment.selectedElement",
                                            defaultMessage: "Selected page element",
                                            description:
                                              "Metadata label shown in a sent user comment attachment when the selected browser element has no readable label",
                                          }),
                                        ],
                                      })
                                    : "selected-browser-region" === o.type
                                      ? (0, a.jsxs)("div", {
                                          className: "flex items-center gap-1 text-xs leading-4 text-codex-description",
                                          children: [
                                            q,
                                            (0, a.jsx)(u.A, {
                                              id: "codex.localConversation.browserComment.selectedRegionAttached",
                                              defaultMessage: "Selected region attached",
                                              description:
                                                "Metadata label shown in a sent user comment attachment when a screenshot of a selected browser region was attached",
                                            }),
                                          ],
                                        })
                                      : "details" === o.type
                                        ? (0, a.jsxs)("div", {
                                            className: (0, i.A)(
                                              "text-xs leading-4 text-codex-description",
                                              X
                                                ? "flex min-w-0 items-center gap-1"
                                                : "flex flex-wrap items-center gap-x-2 gap-y-1",
                                            ),
                                            children: [
                                              q,
                                              null != o.browserElementPreview
                                                ? (0, a.jsxs)("span", {
                                                    className:
                                                      "flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1 break-words",
                                                    children: [
                                                      (0, a.jsx)("span", {
                                                        className:
                                                          "inline-flex shrink-0 items-center rounded-sm border border-default bg-text/5 px-1.5 py-px font-mono text-[11px] leading-[14px] font-medium text-secondary",
                                                        children: o.browserElementPreview.elementType,
                                                      }),
                                                      null != o.browserElementPreview.immediateText
                                                        ? (0, a.jsx)("span", {
                                                            className: "min-w-0 break-words text-codex-description",
                                                            children: o.browserElementPreview.immediateText,
                                                          })
                                                        : null,
                                                    ],
                                                  })
                                                : C
                                                  ? null == M
                                                    ? (0, a.jsx)("span", { className: "break-all", children: C })
                                                    : $
                                                      ? (0, a.jsx)(S, {
                                                          cwd: g,
                                                          hostId: E,
                                                          label: C,
                                                          reference: M,
                                                          tooltipText: F,
                                                        })
                                                      : (0, a.jsx)(x.Bh, {
                                                          className: "text-xs leading-4 break-all",
                                                          reference: M,
                                                          label: C,
                                                          tooltipText: F,
                                                          cwd: g,
                                                          hostId: E,
                                                          openInSidePanel: !0,
                                                        })
                                                  : null,
                                              null != o.side
                                                ? (0, a.jsx)("span", {
                                                    className: "font-medium text-default",
                                                    children:
                                                      "left" === o.side
                                                        ? (0, a.jsx)(u.A, {
                                                            id: "codex.localConversation.diffCommentLeftSide",
                                                            defaultMessage: "L",
                                                            description:
                                                              "Short label for the left side of a diff on a sent local user comment",
                                                          })
                                                        : (0, a.jsx)(u.A, {
                                                            id: "codex.localConversation.diffCommentRightSide",
                                                            defaultMessage: "R",
                                                            description:
                                                              "Short label for the right side of a diff on a sent local user comment",
                                                          }),
                                                  })
                                                : null,
                                              null != o.lineRange
                                                ? (0, a.jsx)("span", { children: o.lineRange })
                                                : null,
                                              $ && C && null != j
                                                ? (0, a.jsx)("span", { "aria-hidden": "true", children: " · " })
                                                : null,
                                              null != j
                                                ? (0, a.jsx)("span", {
                                                    className: (0, i.A)(
                                                      null == y &&
                                                        null != t.artifactAnnotationRangeLabel &&
                                                        "min-w-0 font-medium break-all text-default",
                                                    ),
                                                    children: j,
                                                  })
                                                : null,
                                            ],
                                          })
                                        : null,
                            H?.type === "text"
                              ? (0, a.jsx)("div", {
                                  className: "min-w-0 truncate text-xs leading-4 text-codex-description",
                                  title: H.text,
                                  children: H.text,
                                })
                              : null,
                            (0, a.jsx)(_, { comment: t, cwd: g, hostId: E }),
                            null == v
                              ? null
                              : (0, a.jsxs)("div", {
                                  className: "flex flex-col gap-0.5 border-s border-default ps-2",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: "text-xs leading-4 text-codex-description",
                                      children: (0, a.jsx)(u.A, {
                                        id: "codex.localConversation.comment.userGuidance",
                                        defaultMessage: "Your guidance",
                                        description:
                                          "Label for the user's optional guidance shown under a pull request comment attached to the composer",
                                      }),
                                    }),
                                    (0, a.jsx)("span", {
                                      className: "text-sm leading-5 break-words whitespace-pre-wrap text-default",
                                      children: v,
                                    }),
                                  ],
                                }),
                          ],
                        }),
                        c || null != K
                          ? (0, a.jsxs)("div", {
                              className: "flex shrink-0 flex-col items-end gap-1.5",
                              children: [
                                null == l
                                  ? null
                                  : (0, a.jsx)(h.B, {
                                      annotationNumber: n + 1,
                                      onEdit: null == O ? void 0 : () => O(l),
                                      onRemove: d && null != D ? () => D(l) : void 0,
                                    }),
                                null == K ? null : (0, a.jsx)(T, { alt: K.alt?.trim() || U, src: K.src }),
                              ],
                            })
                          : null,
                      ],
                    },
                    `${t.path}-${t.lineRange ?? "unknown"}-${n}`,
                  )
                }),
                (v[24] = N),
                (v[25] = E),
                (v[26] = I),
                (v[27] = O),
                (v[28] = D),
                (v[29] = e),
                (v[30] = G),
                (v[31] = L),
                (v[32] = U),
                (v[33] = R),
                (v[34] = k),
                (v[35] = n))
              : (n = v[35]),
              (f = t.map(n)),
              (v[11] = t),
              (v[12] = N),
              (v[13] = E),
              (v[14] = I),
              (v[15] = O),
              (v[16] = D),
              (v[17] = e),
              (v[18] = G),
              (v[19] = L),
              (v[20] = U),
              (v[21] = R),
              (v[22] = k),
              (v[23] = f))
          } else f = v[23]
          return (
            v[36] !== f
              ? ((g = (0, a.jsx)("div", { className: "flex flex-col divide-y divide-border", children: f })),
                (v[36] = f),
                (v[37] = g))
              : (g = v[37]),
            g
          )
        },
      },
    )
  },
  vByM(e, t, n) {
    n.d(
      t,
      {},
      {
        J: function (e) {
          return null == e.previousValue
            ? `${e.property}: ${e.nextValue}`
            : `${e.property}: ${e.previousValue} -> ${e.nextValue}`
        },
      },
    )
  },
  aa4G(e, t, n) {
    var a = n("QosV"),
      o = n("zd8w"),
      i = n("HZfM"),
      r = n("bIvi")
    let s = { state: "unblocked", location: void 0, proceed: void 0, reset: void 0 },
      l = new WeakMap()
    class d {
      shouldBlock
      priority
      beforeNavigation
      snapshot = s
      listeners = new Set()
      getSnapshot = () => this.snapshot
      constructor(e, t, n) {
        ;((this.shouldBlock = e), (this.priority = t), (this.beforeNavigation = n))
      }
    }
    class c {
      #e
      #t = "codex-navigation"
      #n = new Set()
      #a = new Set()
      #o
      #i
      #r
      #s
      constructor(e) {
        this.#e = e
      }
      register(e) {
        return (
          this.#n.add(e),
          null == this.#s &&
            (this.#e.getBlocker(
              this.#t,
              (e) => ((this.#i = e), (this.#r = void 0), this.#a.clear(), (this.#o = this.#l()), null != this.#o),
            ),
            (this.#s = this.#e.subscribe(() => this.#d()))),
          () => {
            ;(this.#n.delete(e),
              this.#a.delete(e),
              this.#o === e && (this.#e.state.blockers.get(this.#t)?.reset?.(), (this.#o = void 0)),
              (e.snapshot = s),
              0 === this.#n.size &&
                (this.#s?.(), (this.#s = void 0), this.#e.deleteBlocker(this.#t), (this.#i = void 0)))
          }
        )
      }
      #l() {
        let e = this.#i
        if (null != e)
          return [...this.#n].sort((e, t) => t.priority - e.priority).find((t) => !this.#a.has(t) && t.shouldBlock(e))
      }
      #c = () => {
        let e = this.#e.state.blockers.get(this.#t),
          t = this.#i
        if (e?.state !== "blocked" || null == this.#o || null == t || this.#r === t) return
        this.#a.add(this.#o)
        let n = this.#l()
        null != n ? ((this.#o = n), this.#d()) : ((this.#r = t), this.#d(), this.#u(t, e))
      }
      async #u(e, t) {
        try {
          ;(await Promise.all([...this.#a].map((e) => Promise.resolve(e.beforeNavigation()))),
            this.#i === e && this.#e.state.blockers.get(this.#t)?.state === "blocked" && t.proceed())
        } catch {
          this.#i === e && this.#e.state.blockers.get(this.#t)?.state === "blocked" && t.reset()
        }
      }
      #d() {
        let e = this.#e.state.blockers.get(this.#t) ?? s
        "unblocked" === e.state && ((this.#o = void 0), (this.#i = void 0), (this.#r = void 0), this.#a.clear())
        let t = this.#i
        for (let n of this.#n) {
          let a = n === this.#o ? e : s
          if (a !== s || n.snapshot !== s)
            for (let e of ((n.snapshot =
              "blocked" === a.state
                ? {
                    ...a,
                    isCommitting: this.#r === t,
                    proceed: () => {
                      this.#i === t && this.#o === n && this.#c()
                    },
                    reset: () => {
                      this.#i === t && this.#o === n && this.#r !== t && a.reset()
                    },
                  }
                : a),
            n.listeners))
              e()
        }
      }
    }
    function u() {
      return s
    }
    function p(e, t) {
      let n = t.replace(/\/$/, "")
      return "" !== n && e.toLowerCase().startsWith(n.toLowerCase()) && (e.length === n.length || "/" === e[n.length])
        ? e.slice(n.length) || "/"
        : e
    }
    n.d(
      t,
      {},
      {
        e: function (e, t, n) {
          let s,
            h,
            m,
            f,
            g = (0, a.c)(12),
            v = void 0 === t ? 0 : t,
            x = (0, o.useContext)(i.hf)
          if (null == x) throw Error("Navigation blockers require a data router")
          let { router: b, basename: w } = x
          g[0] !== w || g[1] !== e
            ? ((s = (t) =>
                e({
                  ...t,
                  currentLocation: { ...t.currentLocation, pathname: p(t.currentLocation.pathname, w) },
                  nextLocation: { ...t.nextLocation, pathname: p(t.nextLocation.pathname, w) },
                })),
              (g[0] = w),
              (g[1] = e),
              (g[2] = s))
            : (s = g[2])
          let I = (0, r.K)(s)
          g[3] !== n ? ((h = () => n?.()), (g[3] = n), (g[4] = h)) : (h = g[4])
          let y = (0, r.K)(h)
          g[5] !== y || g[6] !== I || g[7] !== v
            ? ((m = new d(I, v, y)), (g[5] = y), (g[6] = I), (g[7] = v), (g[8] = m))
            : (m = g[8])
          let A = m
          g[9] !== A || g[10] !== b
            ? ((f = (e) => {
                let t = l.get(b)
                ;(null == t && ((t = new c(b)), l.set(b, t)), A.listeners.add(e))
                let n = t.register(A)
                return () => {
                  ;(A.listeners.delete(e), n())
                }
              }),
              (g[9] = A),
              (g[10] = b),
              (g[11] = f))
            : (f = g[11])
          let j = f
          return (0, o.useSyncExternalStore)(j, A.getSnapshot, u)
        },
      },
    )
  },
}
//# sourceMappingURL=871045.a31e663894.js.map
