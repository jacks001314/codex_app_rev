export const __rspack_esm_ids = [767254]
export const __webpack_modules__ = {
  Btxs(e, t, a) {
    var n = a("zTeN"),
      i = a("PFjh"),
      s = a("SPnB"),
      o = a("lVIb"),
      r = a("cU41"),
      c = a("USwR"),
      l = a("e1xH"),
      d = a("DHW4"),
      p = a("fVTg"),
      g = a("G3Hy"),
      u = a("MvVt"),
      h = a("fJPN"),
      m = a("HPVN"),
      f = a("Wbls"),
      v = a("pyoT"),
      y = a("JcZO"),
      b = a("OWtl"),
      w = a("HFSu"),
      x = a("yrMs"),
      S = a("MCKR"),
      C = a("PVyj")
    let P = (0, n.aP)(b.u, ({ scope: e }) => ({
      mutationFn: async (t) => {
        let a = e.get(v.spaceAccountId$),
          n = e.get(s.chatGptAuthenticatedUserId$)
        if (!e.get(l.pagesEnabled$) || null == a) throw Error("pages_disabled")
        let c = { accountId: a, userId: n },
          g = () =>
            e.get(v.spaceAccountId$) === a && e.get(s.chatGptAuthenticatedUserId$) === n && e.get(l.pagesEnabled$),
          m =
            "space" === t.kind
              ? (e.query.getData(v.spacesQuery$)?.items.find((e) => e.id === t.id) ??
                e.query.getData(v.spaceQuery$, t.id) ??
                e.query.getData(v.spaceCollectionQuery$, t.id)?.space)
              : void 0,
          b = _(e, a, n),
          P = "page" === t.kind ? b.find((e) => e.page_id === t.id) : void 0,
          A =
            "page" === t.kind
              ? (0, d.r)((0, i.dj)(e), {
                  action: "archive_page",
                  documentType: (0, p.v)(P),
                  completionMilestone: "ui_confirmed",
                })
              : void 0,
          M = new Set()
        "page" === t.kind ? M.add(t.id) : null != m && M.add(m.root_page_id)
        let j = "page" === t.kind ? e.get(S.Wz, "search") : void 0,
          I = {
            id: t.id,
            committed: !1,
            search: "page" === t.kind ? new AbortController() : void 0,
            spaceId: "space" === t.kind ? t.id : void 0,
            pageIds: M,
            listing: "space" === t.kind ? { kind: "spaces" } : void 0,
          }
        P?.parent != null && "page_id" in P.parent
          ? (I.listing = { kind: "children", id: P.parent.page_id })
          : null != P && null == P.drive_space_id && (I.listing = { kind: "pages" })
        let k = { ...I, pageIds: (0, C.p9)(b, [I]) }
        e.set(C.aP, c, (e) => [...e, k])
        let T = k.pageIds,
          D = !1,
          q = !1,
          E = !1,
          N = (0, v.watchSpaceAccount)(e, a, n),
          $ = null == j ? N.signal : AbortSignal.any([N.signal, j])
        try {
          if (
            ("space" === t.kind
              ? await w.CodexRequest.safeDelete("/spaces/{space_id}", { parameters: { path: { space_id: t.id } } })
              : (E = (await (0, x.N)(t.id, $)) === "archived"),
            (D = !0),
            E || A?.milestone("operation_committed"),
            ("page" === t.kind && $.aborted) || !g() || !e.get(C.aP, c).includes(k))
          )
            return
          let i = E ? new Set([t.id]) : (0, C.p9)(_(e, a, n), [k])
          if (
            ((T = i),
            await Promise.all([
              e.query.cancel(v.spacesQuery$),
              e.query.cancel(v.spacePagesQuery$),
              (0, o.JE)(e, c, i, { owner: j }),
              (0, r.Y9)(
                e.queryClient,
                c,
                new Set("page" === t.kind || m?.backing_type === "drive" ? [...i].map((e) => `page:${e}`) : []),
              ),
            ]),
            ("page" === t.kind && $.aborted) || !g() || !e.get(C.aP, c).includes(k))
          )
            return
          ;("space" === t.kind && (0, f.ex)(e, a, i),
            (0, h.qV)(e, c, (e) => (null == e.file && i.has(e.id) ? null : e)),
            (0, u.nL)(e, i),
            (0, y.Us)(e, i),
            "page" === t.kind
              ? ((0, v.setSpacePagePinned)(e, t.id, !1),
                E || (0, v.evictCachedSpacePages)(e, [...i], a, { pauseHomeSearch: !1 }))
              : ((0, v.evictCachedDriveSpacePages)(e, t.id, a, m),
                (0, v.setSpacePinned)(e, t.id, !1),
                e.query.setData(v.spacesQuery$, (e) =>
                  null == e ? e : { ...e, items: e.items.filter((e) => e.id !== t.id) },
                )))
          let s = {
            queryKey: ["space", "drive-page-search", a],
            predicate: ({ queryKey: e }) => e[4] === n && (e[3] === m?.id || e[3] === P?.drive_space_id),
          }
          ;(e.queryClient.cancelQueries(s).catch(() => {}),
            e.queryClient.setQueriesData(s, (e) =>
              null == e ? e : { ...e, items: e.items.filter((e) => !i.has(e.page_id)) },
            ))
          let l = {
            queryKey: ["space", "home-page-search", a, n],
            predicate: ({ queryKey: e }) => null == e[5] || e[5] === m?.id || e[5] === P?.drive_space_id,
          }
          ;(e.queryClient.cancelQueries(l).catch(() => {}),
            e.queryClient.setQueriesData(l, (e) =>
              null == e
                ? e
                : { ...e, pages: e.pages.map((e) => ({ ...e, items: e.items.filter((e) => !i.has(e.page_id)) })) },
            ),
            (q = !0))
          let d = [
            e.query.invalidate(v.spacesQuery$),
            e.queryClient.invalidateQueries({ queryKey: ["library-api", a, n, "browse"] }),
          ]
          return (
            ("page" === t.kind || null == m) && d.push((0, v.invalidateSpacePages)(e)),
            d.push(
              e.queryClient.invalidateQueries({
                queryKey: ["space", "page" === t.kind ? "archived-pages" : "archived-spaces", a, n],
              }),
            ),
            Promise.allSettled(d),
            { outcome: E ? "archived" : "completed" }
          )
        } catch (e) {
          if ((A?.finish($.aborted ? "unobserved" : "failure"), j?.aborted)) return
          throw e
        } finally {
          if ((A?.dispose(), N.stop(), D && !j?.aborted)) {
            let n = { ...k, committed: !0, listing: q ? k.listing : void 0, pageIds: E ? new Set([t.id]) : T }
            ;(e.set(C.aP, c, (e) => e.map((e) => (e === k ? n : e))),
              null != j &&
                null != n.search &&
                e.get(C.aP, c).includes(n) &&
                ((0, f.ex)(e, a, n.pageIds), (0, S.KR)(e, c, n.search, n.pageIds, j)))
          } else D || j?.aborted || e.set(C.aP, c, (e) => e.filter((e) => e !== k))
        }
      },
    }))
    function _(e, t, a) {
      let n = [
        ...((0, v.getCachedVisibleSpacePages)(e)?.items ?? []),
        ...(0, c.$f)(e, t, a).flatMap((e) => [...(null == e.parent ? [] : [e.parent]), ...e.items]),
        ...e.queryClient
          .getQueriesData({
            queryKey: ["space", "page", t],
            predicate: ({ queryKey: e }) => 4 === e.length || ("ancestry" === e[4] && e[5] === a),
          })
          .flatMap(([, e]) => (null == e ? [] : [e.metadata])),
        ...e.queryClient
          .getQueriesData({ queryKey: ["space", "home-page-search", t, a] })
          .flatMap(([, e]) => (null == e ? [] : e.pages.flatMap((e) => e.items))),
      ]
      for (let { queryKey: i } of e.queryClient.getQueryCache().findAll({ queryKey: ["space"] }))
        i[2] === t &&
          i[4] === a &&
          "string" == typeof i[3] &&
          (("collection" === i[1] || "page-children" === i[1]) &&
            n.push(
              ...(e.get(g.H, {
                accountId: t,
                userId: a,
                branchId: i[3],
                kind: "collection" === i[1] ? "space" : "children",
              })?.items ?? []),
            ),
          "drive-page-search" === i[1] && n.push(...(e.queryClient.getQueryData(i)?.items ?? [])))
      return [...n, ...Object.values(e.get(m.j)?.[t] ?? {}).filter((e) => "page_id" in e)]
    }
    a.d(t, {}, { z: P })
  },
  yrMs(e, t, a) {
    var n = a("DBCl"),
      i = a("HFSu"),
      s = a("eShZ")
    class o extends Error {
      constructor() {
        super("page_archive_unconfirmed")
      }
    }
    function r(e) {
      return e instanceof s.fk && ("network" === e.errorKind || [0, 408, 429, 500, 502, 503, 504].includes(e.status))
    }
    a.d(
      t,
      {},
      {
        A: o,
        N: async function (e, t) {
          let a = new AbortController(),
            c = AbortSignal.any([t, a.signal]),
            l = setTimeout(() => a.abort(new DOMException("Archive timed out", "TimeoutError")), 3e4)
          try {
            return (
              c.throwIfAborted(),
              await (0, n._qC)(
                i.CodexRequest.safePost("/pages/{page_id}/archive", {
                  parameters: { path: { page_id: e } },
                  signal: c,
                  retry: !1,
                }),
                c,
              ),
              t.throwIfAborted(),
              "completed"
            )
          } catch (e) {
            if (
              (t.throwIfAborted(),
              !(e instanceof Error && "TimeoutError" === e.name) && !r(e) && !(e instanceof s.fk && 404 === e.status))
            )
              throw e
          } finally {
            clearTimeout(l)
          }
          let d = new AbortController(),
            p = AbortSignal.any([t, d.signal]),
            g = setTimeout(() => d.abort(), 6e3)
          try {
            for (let t = 0; t < 3; t += 1) {
              let a
              try {
                for (let t = 0; t < 2; t += 1) {
                  p.throwIfAborted()
                  let t = await (0, n._qC)(
                    i.CodexRequest.safeGet("/pages/archived", {
                      parameters: { query: { cursor: a, limit: 50 } },
                      signal: p,
                      retry: !1,
                    }),
                    p,
                  )
                  if ((p.throwIfAborted(), t.items.some((t) => t.page_id === e))) return "archived"
                  if (((a = t.next_cursor ?? void 0), null == a)) break
                }
              } catch (e) {
                if (!r(e)) break
              }
              if (t < 2) {
                let e
                try {
                  await (0, n._qC)(
                    new Promise((t) => {
                      e = setTimeout(t, 500)
                    }),
                    p,
                  )
                } finally {
                  clearTimeout(e)
                }
              }
            }
          } catch {
          } finally {
            clearTimeout(g)
          }
          throw (t.throwIfAborted(), new o())
        },
      },
    )
  },
  AE4U(e, t, a) {
    var n = a("zTeN"),
      i = a("SPnB"),
      s = a("Ghh3"),
      o = a("NRR1"),
      r = a("e1xH"),
      c = a("OWtl"),
      l = a("rvFo")
    let d = (0, n.RD)(c.u, ({ get: e, scope: t }) => {
      let a = e(o.DO),
        n = e(i.chatGptAuthenticatedUserId$)
      return {
        queryKey: ["space", "policy", a, n],
        enabled: e(r.pagesEnabled$) && null != a,
        staleTime: 5 * l.D.ONE_MINUTE,
        retry: !1,
        queryFn: async ({ signal: e }) => {
          if (null == a) throw Error("space_account_unavailable")
          let i = (0, o.hI)(t, a, n)
          try {
            return await s.Request.safeGet("/spaces/policy", {
              signal: AbortSignal.any([e, i.signal]),
              expectedErrorStatuses: [404],
            })
          } finally {
            i.stop()
          }
        },
      }
    })
    a.d(t, {}, { R: d })
  },
  MaNR(e, t, a) {
    var n = a("ABep"),
      i = a("oyxz"),
      s = a("RZZB")
    function o({ documentType: e = "page", pageTitle: t, multiple: a = !1 }) {
      return {
        pendingTitle: (0, n.jsx)(i.A, {
          id: "codex.space.page.archivePendingSelection.byDocumentType",
          defaultMessage:
            "{multiple, select, true {Deleting multiple documents} other {{documentType, select, granola_presentation {{named, select, true {Deleting “{title}” slide} other {Deleting slide}}} granola_workbook {{named, select, true {Deleting “{title}” sheet} other {Deleting sheet}}} other {{named, select, true {Deleting “{title}” page} other {Deleting page}}}}}}",
          values: { documentType: e, multiple: a, named: !!t?.trim(), title: t ?? "" },
          description:
            "Progress notification while waiting for a Page and its nested pages to be deleted. documentType selects slide, sheet, or page for a single document; multiple uses a generic documents label for selections or nested documents.",
        }),
        successTitle: (0, n.jsx)(i.A, {
          id: "codex.space.page.archiveSuccessSelection.byDocumentType",
          defaultMessage:
            "{multiple, select, true {Documents deleted} other {{documentType, select, granola_presentation {{named, select, true {“{title}” slide deleted} other {Slide deleted}}} granola_workbook {{named, select, true {“{title}” sheet deleted} other {Sheet deleted}}} other {{named, select, true {“{title}” page deleted} other {Page deleted}}}}}}",
          values: { documentType: e, multiple: a, named: !!t?.trim(), title: t ?? "" },
          description:
            "Confirmation that the Page was deleted and moved to Trash. documentType selects slide, sheet, or page for the current document.",
        }),
      }
    }
    a.d(
      t,
      {},
      {
        u: function (e, t = {}) {
          let a = (0, s.W)(e, o(t), "page-archive-toast")
          return { close: a.close, complete: (e = t.multiple) => a.complete(o({ ...t, multiple: e })) }
        },
      },
    )
  },
  CqWC(e, t, a) {
    var n = a("SPnB"),
      i = a("rvFo"),
      s = a("rpnz"),
      o = a("e1xH"),
      r = a("Um9I"),
      c = a("jAir"),
      l = a("yDUA"),
      d = a("pyoT")
    function p(e, t, a, i, c = 1 / 0) {
      let l
      if (
        null == a ||
        e.get(d.spaceAccountId$) !== a ||
        e.get(n.chatGptAuthenticatedUserId$) !== i ||
        !e.get(o.pagesEnabled$)
      )
        return
      let g = e.get(d.spacePageId$, t)
      if ((0, s.sD)(g)) {
        let a = e.get(d.spacePageCreation$, t)
        l = a?.status === "created" ? void 0 : a?.metadata
      } else l = u(e, g, c)
      if (l?.page_id === g && l.access.can_read && null == l.deleted_at && !e.get(r.mS, l).loading) return l
    }
    async function g(e, t, a, l, p) {
      if (null == a || !e.get(o.pagesEnabled$)) return
      let g = (0, d.watchSpaceAccount)(e, a, l)
      try {
        let h
        g.signal.throwIfAborted()
        let m = e.get(d.spacePageId$, t)
        if ((0, s.sD)(m)) {
          let a = e.get(d.spacePageCreation$, t)
          h = a?.status === "created" ? void 0 : a?.metadata
        } else {
          h = u(e, m, i.D.THIRTY_SECONDS)
          let t = p?.parentMetadata == null ? void 0 : e.query.getData(d.spacePageQuery$, m)?.metadata,
            a =
              p?.parentMetadata === "refresh" ||
              (null != h &&
                t?.display_metadata_included === !1 &&
                ((0, c.gN)(t, h) || t.access.can_write !== h.access.can_write))
          if (null == h || a || (p?.parentMetadata === "required" && !1 === h.display_metadata_included)) {
            let t = e.query.snapshot(d.spacePageAncestryQuery$, m)
            ;(a && (await t.invalidate({ exact: !0, refetchType: "none" })), (h = (await t.fetch()).metadata))
          }
        }
        if ((g.signal.throwIfAborted(), !h?.access.can_read || null != h.deleted_at)) return
        let f = h
        return (
          await e.when(
            ({ get: e }) =>
              e(d.spaceAccountId$) !== a ||
              e(n.chatGptAuthenticatedUserId$) !== l ||
              !e(o.pagesEnabled$) ||
              !e(r.mS, f).loading,
          ),
          g.signal.throwIfAborted(),
          e.get(o.pagesEnabled$) ? h : void 0
        )
      } catch {
        return
      } finally {
        g.stop()
      }
    }
    function u(e, t, a) {
      let { queryKey: n } = e.query.getOptions(d.spacePageAncestryQuery$, t),
        i = e.queryClient.getQueryCache().find({ queryKey: n })
      if (!(i?.state.status !== "success" || i.isStaleByTime(a)))
        return e.query.getData(d.spacePageAncestryQuery$, t)?.metadata
    }
    a.d(
      t,
      {},
      {
        AQ: g,
        WZ: async function (e, t, a, n) {
          let i = e.get(d.spacePageId$, t)
          if (
            (0, s.sD)(i) ||
            e.queryClient.getQueryState(e.query.getOptions(d.spacePageAncestryQuery$, i).queryKey)?.status === "error"
          )
            return
          await g(e, t, a, n)
          let o = p(e, t, a, n)
          o?.access.can_share === !0 &&
            "request_changes" !== e.get(r.mS, o).mode &&
            (0, l.o)(e, { type: "page", id: o.page_id })
        },
        sh: p,
      },
    )
  },
  cGL0(e, t, a) {
    a.d(t, { Y: () => x })
    var n = a("PFjh"),
      i = a("E8Sp"),
      s = a("SGsN"),
      o = a("svjy"),
      r = a("nlNF"),
      c = a("rpnz"),
      l = a("e1xH"),
      d = a("pyoT"),
      p = a("O666"),
      g = a("OoIX"),
      u = a("D550"),
      h = a("SEOK"),
      m = a("kkOV"),
      f = a("zTeN"),
      v = a("SPnB"),
      y = a("X6Vn"),
      b = a("OWtl"),
      w = a("RavV")
    async function x(e, t, x) {
      let S,
        C,
        P,
        _,
        A,
        M,
        j,
        I = e.get(d.spaceAccountId$)
      if (null == I || e.get(c.ut) || !e.get(l.H6, t) || !(0, g.pF)(e, x)) return
      let k =
          "granola_workbook" === t || "granola_presentation" === t
            ? (0, u.a)((0, n.dj)(e), performance.now(), "granola_workbook" === t ? "sheet" : "slide")
            : void 0,
        T = (0, d.watchSpaceAccount)(e, I),
        D = e.watch(({ get: e }) => {
          e(l.H6, t)
        }),
        q = e.get(r.x2)
      e.set(c.ut, !0)
      let E =
        "granola_presentation" === t &&
        e.get(p.H$, { layer: "2232827372", parameter: "show_new_slide_quick_start_modal" })
          ? ((C = (0, f.vP)(b.u, () => null)),
            (P = e.get(r.x2)),
            (_ = e.get(d.spaceAccountId$)),
            (A = e.get(v.chatGptAuthenticatedUserId$)),
            (M = !0),
            (j = () => {
              M && (0, y.Oo)(e, w.A)
            }),
            (0, y.qf)(
              e,
              w.A,
              { pageId: C },
              {
                onDispose: () => {
                  ;((M = !1), S?.())
                },
              },
            ),
            (S = e.watch(({ get: e }) => {
              let t = e(r.x2),
                a = e(C)
              ;(e(d.spaceAccountId$) !== _ ||
                e(v.chatGptAuthenticatedUserId$) !== A ||
                (t !== P &&
                  (null == a ||
                    (t?.pathname !== `/space/${a}` && t?.pathname !== `/space/${e(d.spacePageId$, a)}`)))) &&
                j()
            })),
            { setPageId: (t) => e.set(C, t), close: j })
          : void 0
      try {
        let n,
          { startNativePageCreation: s } = await Promise.all([
            a.e(593475),
            a.e(205803),
            a.e(339467),
            a.e(632285),
            a.e(498983),
            a.e(388023),
            a.e(68876),
            a.e(357621),
            a.e(723519),
            a.e(676388),
            a.e(695347),
            a.e(88880),
            a.e(800497),
            a.e(127288),
          ]).then(a.bind(a, "LWSA"))
        if ((T.signal.throwIfAborted(), null != E && e.get(r.x2) !== q)) {
          ;(k?.cancel("navigation_away"), E.close())
          return
        }
        let o = s(e, I, t, x, void 0, void 0, void 0, k)
        ;(E?.setPageId(o.pageId),
          null != x && (n = e.get(d.spacePageContext$, x).space?.root_page_id),
          (0, i.oo)(e, `/space/${o.pageId}`, {
            state: {
              ...(null != q ? (0, h.$)(q, I, o.pageId) : void 0),
              spaceSidebarAccountId: I,
              spaceSidebarRootPageId: n,
              spaceSidebarPersonal: null == x,
            },
          }),
          await o.completion.catch(() => E?.close()))
      } catch {
        ;(E?.close(),
          T.signal.aborted ? k?.cancel("account_changed") : k?.fail(),
          T.signal.aborted ||
            e
              .get(s.Id)
              .danger(e.get(o.g).formatMessage(m.v[t].failed), {
                errorAnalytics: { toastId: "nativePage.createFailed" },
              }))
      } finally {
        ;(D(), T.stop(), e.set(c.ut, !1))
      }
    }
  },
  Di4D(e, t, a) {
    a.d(t, { K: () => m, d: () => v })
    var n = a("ABep"),
      i = a("QosV"),
      s = a("dfOM"),
      o = a("P56J"),
      r = a("KYeb"),
      c = a("xpvY"),
      l = a("oyxz"),
      d = a("Wf1j"),
      p = a("Sm6l"),
      g = a("JNtf"),
      u = a("HOLv"),
      h = a("bVeK")
    function m(e) {
      let t,
        a,
        o,
        d,
        g,
        h,
        m,
        y,
        b,
        w = (0, i.c)(24),
        { busy: x, onClose: S, onSpace: C, onUpload: P } = e,
        _ = void 0 !== x && x
      ;(w[0] !== _ ? ((t = (0, n.jsx)(v, { busy: _ })), (w[0] = _), (w[1] = t)) : (t = w[1]),
        w[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsxs)("span", {
              className:
                "flex w-full flex-col items-center gap-2 px-4 pt-8 pb-6 text-center text-sm font-normal whitespace-normal",
              children: [
                (0, n.jsx)(u.I, { asset: r.r }),
                (0, n.jsx)(l.A, {
                  id: "pages.presentation.quickStart.scratch",
                  defaultMessage: "Start from scratch",
                  description: "Action that closes Quick start to edit the new blank presentation",
                }),
              ],
            })),
            (w[2] = a))
          : (a = w[2]),
        w[3] !== _ || w[4] !== S
          ? ((o = (0, n.jsx)(p.$, {
              className: "w-full min-w-0 justify-center",
              color: "secondary",
              size: "inline",
              radius: "large",
              autoFocus: !0,
              disabled: _,
              disabledAppearance: "unchanged",
              onClick: S,
              children: a,
            })),
            (w[3] = _),
            (w[4] = S),
            (w[5] = o))
          : (o = w[5]))
      let A = _ || null == C,
        M = _ ? "unchanged" : void 0
      ;(w[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = (0, n.jsxs)("span", {
            className:
              "flex w-full flex-col items-center gap-2 px-4 pt-8 pb-6 text-center text-sm font-normal whitespace-normal",
            children: [
              (0, n.jsx)(u.I, { asset: c.W }),
              (0, n.jsx)(l.A, {
                id: "pages.presentation.quickStart.spaceFiles",
                defaultMessage: "Create from a file",
                description:
                  "Action to create a presentation using files from a Space; Space means a collection of Pages and files",
              }),
            ],
          })),
          (w[6] = d))
        : (d = w[6]),
        w[7] !== C || w[8] !== A || w[9] !== M
          ? ((g = (0, n.jsx)(p.$, {
              className: "w-full min-w-0 justify-center",
              color: "secondary",
              size: "inline",
              radius: "large",
              disabled: A,
              disabledAppearance: M,
              onClick: C,
              children: d,
            })),
            (w[7] = C),
            (w[8] = A),
            (w[9] = M),
            (w[10] = g))
          : (g = w[10]))
      let j = _ || null == P,
        I = _ ? "unchanged" : void 0
      return (
        w[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, n.jsxs)("span", {
              className:
                "flex w-full flex-col items-center gap-2 px-4 pt-8 pb-6 text-center text-sm font-normal whitespace-normal",
              children: [
                (0, n.jsx)(u.I, { asset: s.o }),
                (0, n.jsx)(l.A, {
                  id: "pages.presentation.quickStart.import",
                  defaultMessage: "Upload",
                  description:
                    "Action to select existing files and attach them as sources in the presentation composer",
                }),
              ],
            })),
            (w[11] = h))
          : (h = w[11]),
        w[12] !== P || w[13] !== I || w[14] !== j
          ? ((m = (0, n.jsx)(p.$, {
              className: "w-full min-w-0 justify-center",
              color: "secondary",
              size: "inline",
              radius: "large",
              disabled: j,
              disabledAppearance: I,
              onClick: P,
              children: h,
            })),
            (w[12] = P),
            (w[13] = I),
            (w[14] = j),
            (w[15] = m))
          : (m = w[15]),
        w[16] !== m || w[17] !== o || w[18] !== g
          ? ((y = (0, n.jsxs)("div", {
              "data-sticky-section-content": !0,
              className:
                "grid grid-cols-3 gap-4 p-4 [@media(max-width:30rem)]:grid-cols-1 [@media(max-width:48rem)]:grid-cols-2",
              children: [o, g, m],
            })),
            (w[16] = m),
            (w[17] = o),
            (w[18] = g),
            (w[19] = y))
          : (y = w[19]),
        w[20] !== _ || w[21] !== y || w[22] !== t
          ? ((b = (0, n.jsxs)("section", { ref: f, className: "shrink-0", "aria-busy": _, children: [t, y] })),
            (w[20] = _),
            (w[21] = y),
            (w[22] = t),
            (w[23] = b))
          : (b = w[23]),
        b
      )
    }
    function f(e) {
      if (e?.parentElement != null)
        return (function (e) {
          let t = Array.from(e.querySelectorAll("[data-sticky-section-content]")).flatMap((e) => {
              let t = e.previousElementSibling
              return null == t ? [] : [{ header: t, content: e }]
            }),
            a = () => {
              for (let { content: e, top: a } of t.map(({ header: e, content: t }) => {
                let a = t.getBoundingClientRect(),
                  n = a.height / t.offsetHeight
                return { content: t, top: n > 0 ? Math.max(0, (e.getBoundingClientRect().bottom - a.top) / n) : 0 }
              }))
                e.style.clipPath = a > 0 ? `inset(${a}px 0 0)` : ""
            }
          ;(a(), e.addEventListener("scroll", a, { passive: !0 }))
          let n = "u" < typeof ResizeObserver ? void 0 : new ResizeObserver(a)
          for (let { header: a, content: i } of (n?.observe(e), t)) (n?.observe(a), n?.observe(i))
          return () => {
            for (let { content: i } of (e.removeEventListener("scroll", a), n?.disconnect(), t)) i.style.clipPath = ""
          }
        })(e.parentElement)
    }
    function v(e) {
      let t,
        a,
        s,
        r = (0, i.c)(9),
        { busy: c, onBack: m } = e,
        f = void 0 !== c && c,
        v = (0, d.A)()
      return (
        r[0] !== f || r[1] !== v || r[2] !== m
          ? ((t =
              null != m &&
              (0, n.jsx)(p.$, {
                color: "ghost",
                size: "iconCircle",
                radius: "full",
                disabled: f,
                disabledAppearance: "unchanged",
                "aria-label": v.formatMessage({
                  id: "pages.presentation.quickStart.back",
                  defaultMessage: "Back",
                  description: "Return from Space file search to the presentation Quick start choices",
                }),
                onClick: m,
                children: (0, n.jsx)(u.I, { asset: o.Y }),
              })),
            (r[0] = f),
            (r[1] = v),
            (r[2] = m),
            (r[3] = t))
          : (t = r[3]),
        r[4] !== m
          ? ((a = (0, n.jsx)(g.L3, {
              className: "m-0 flex min-w-0 flex-1 items-center gap-2 body-sm font-medium",
              children:
                null != m
                  ? (0, n.jsx)(l.A, {
                      id: "libraryPicker.title.space",
                      defaultMessage: "Add from Space",
                      description:
                        "Short title for the dialog where a ChatGPT user selects one or more Space files to add to the current chat or project. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(h.AdV, {}),
                        (0, n.jsx)(l.A, {
                          id: "pages.presentation.quickStart.title",
                          defaultMessage: "New presentation",
                          description: "Title of the dialog with ways to begin a new presentation",
                        }),
                      ],
                    }),
            })),
            (r[4] = m),
            (r[5] = a))
          : (a = r[5]),
        r[6] !== t || r[7] !== a
          ? ((s = (0, n.jsxs)("div", {
              className: "sticky top-0 z-20 flex h-14 shrink-0 items-center gap-2 ps-3 pe-14",
              children: [t, a],
            })),
            (r[6] = t),
            (r[7] = a),
            (r[8] = s))
          : (s = r[8]),
        s
      )
    }
  },
  RavV(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      s = a("zTeN"),
      o = a("Wf1j"),
      r = a("Sm6l"),
      c = a("JNtf"),
      l = a("mUDD"),
      d = a("bVeK"),
      p = a("Bbed"),
      g = a("Di4D")
    let u = (0, p._)(
      async () =>
        (
          await Promise.all([
            a.e(593475),
            a.e(205803),
            a.e(339190),
            a.e(479440),
            a.e(339467),
            a.e(632285),
            a.e(498983),
            a.e(388023),
            a.e(68876),
            a.e(357621),
            a.e(723519),
            a.e(676388),
            a.e(695347),
            a.e(88880),
            a.e(800497),
            a.e(202315),
          ]).then(a.bind(a, "ORYh"))
        ).PresentationQuickStartContent,
      {
        fallback: ({ onClose: e }) => (0, n.jsx)(g.K, { onClose: e }),
        errorFallback: ({ onClose: e }) => (0, n.jsx)(g.K, { onClose: e }),
      },
    )
    a.d(
      t,
      {},
      {
        A: function (e) {
          let t,
            a,
            p,
            h,
            m,
            f,
            v,
            y = (0, i.c)(16),
            { pageId: b, onClose: w } = e,
            x = (0, o.A)(),
            S = (0, s.Ul)(b)
          return (
            y[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = { "aria-describedby": void 0 }), (y[0] = t))
              : (t = y[0]),
            y[1] !== w
              ? ((a = (e) => {
                  e || w()
                }),
                (y[1] = w),
                (y[2] = a))
              : (a = y[2]),
            y[3] !== x
              ? ((p = x.formatMessage({
                  id: "codex.dialog.closeButton",
                  defaultMessage: "Close dialog",
                  description: "Accessible label for the button that closes a dialog",
                })),
                (y[3] = x),
                (y[4] = p))
              : (p = y[4]),
            y[5] === Symbol.for("react.memo_cache_sentinel") ? ((h = (0, n.jsx)(d.pgK, {})), (y[5] = h)) : (h = y[5]),
            y[6] !== w || y[7] !== p
              ? ((m = (0, n.jsx)(r.$, {
                  className: "absolute end-3 top-3 z-30",
                  color: "ghost",
                  size: "iconCircle",
                  radius: "full",
                  "aria-label": p,
                  onClick: w,
                  children: h,
                })),
                (y[6] = w),
                (y[7] = p),
                (y[8] = m))
              : (m = y[8]),
            y[9] !== w || y[10] !== S
              ? ((f = (0, n.jsx)(l.R4, {
                  className: "overflow-y-auto select-none",
                  size: "full",
                  variant: "chatgpt",
                  children: null == S ? (0, n.jsx)(g.K, { onClose: w }) : (0, n.jsx)(u, { pageId: S, onClose: w }),
                })),
                (y[9] = w),
                (y[10] = S),
                (y[11] = f))
              : (f = y[11]),
            y[12] !== a || y[13] !== m || y[14] !== f
              ? ((v = (0, n.jsxs)(c.lG, {
                  open: !0,
                  size: "wideTall",
                  widthHint: 800,
                  variant: "translucent",
                  backdrop: "modal",
                  showDialogClose: !1,
                  contentProps: t,
                  onOpenChange: a,
                  children: [m, f],
                })),
                (y[12] = a),
                (y[13] = m),
                (y[14] = f),
                (y[15] = v))
              : (v = y[15]),
            v
          )
        },
      },
    )
  },
  eLR8(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      s = a("zTeN"),
      o = a("zd8w"),
      r = a("Wf1j"),
      c = a("oyxz"),
      l = a("HZfM"),
      d = a("E8Sp"),
      p = a("Sm6l"),
      g = a("JNtf"),
      u = a("mUDD"),
      h = a("SGsN"),
      m = a("nlNF"),
      f = a("Btxs"),
      v = a("yrMs"),
      y = a("AE4U"),
      b = a("MaNR"),
      w = a("Um9I"),
      x = a("r9ga"),
      S = a("hZSj"),
      C = a("pyoT"),
      P = a("atZq"),
      _ = a("OWtl")
    a.d(
      t,
      {},
      {
        F: function (e) {
          let t,
            a,
            A,
            M,
            j,
            I,
            k,
            T,
            D,
            q,
            E,
            N,
            $,
            R,
            O,
            z,
            U = (0, i.c)(48),
            { documentType: B, hasChildren: Q, onClose: H, pageId: L, pageTitle: V } = e,
            K = void 0 === B ? "page" : B,
            G = (0, s.gh)(_.u),
            F = (0, r.A)(),
            W = (0, l.Zp)(),
            X = (0, l.zy)(),
            Y = (0, s.Ul)(C.spaceAccountId$),
            { data: Z } = (0, s.Ul)(y.R),
            J = Z?.archive_retention_days
          U[0] !== G ? ((t = () => G.get(C.spaceAccountId$)), (U[0] = G), (U[1] = t)) : (t = U[1])
          let [ee] = (0, o.useState)(t),
            et = (0, o.useRef)(!1)
          return (
            U[2] !== ee || U[3] !== Y || U[4] !== H
              ? ((a = () => {
                  Y !== ee && H()
                }),
                (A = [ee, Y, H]),
                (U[2] = ee),
                (U[3] = Y),
                (U[4] = H),
                (U[5] = a),
                (U[6] = A))
              : ((a = U[5]), (A = U[6])),
            (0, o.useEffect)(a, A),
            U[7] !== H
              ? ((M = (e) => {
                  e || H()
                }),
                (U[7] = H),
                (U[8] = M))
              : (M = U[8]),
            U[9] !== ee ||
            U[10] !== K ||
            U[11] !== Q ||
            U[12] !== F ||
            U[13] !== X ||
            U[14] !== W ||
            U[15] !== H ||
            U[16] !== L ||
            U[17] !== V ||
            U[18] !== G
              ? ((j = (e) => {
                  if ((e.preventDefault(), et.current)) return
                  if (null == ee || G.get(C.spaceAccountId$) !== ee || "request_changes" === G.get(w.jy, L))
                    return void H()
                  et.current = !0
                  let t = (function (e, t) {
                      let { ancestorPages: a, space: n } = e.get(C.spacePageContext$, t),
                        i = a.at(-1)?.page_id ?? n?.root_page_id
                      return null != i && i !== t ? `/space/${i}` : "/space"
                    })(G, L),
                    a = (0, x.Kk)(G, G.get(d.gM).pathname ?? ""),
                    n =
                      a === L ||
                      (null != a && G.get(C.spacePageContext$, a).ancestorPages.some((e) => e.page_id === L)),
                    i = S.g && n,
                    s = (0, C.watchSpaceAccount)(G, ee),
                    o = G.get(m.C0),
                    r = !1,
                    c = G.get(m.x2),
                    p =
                      (Q ??
                        G.query.getData(C.spacePageQuery$, L)?.metadata.has_children ??
                        G.get(C.spacePageMetadata$, L)?.has_children) === !0,
                    g = (0, b.u)(G, { documentType: K, pageTitle: V, multiple: p }),
                    u = !1
                  s.signal.addEventListener("abort", g.close, { once: !0 })
                  let y = G.watch((e) => {
                    let t = e.get(m.x2)
                    t !== c && ((c = t), (r = r || e.get(m.C0) !== o || null == t || (0, l.AO)(t) !== (0, l.AO)(X)))
                  })
                  ;(G.get(f.z)
                    .mutateAsync({ kind: "page", id: L })
                    .then((e) => {
                      let o = e?.outcome
                      ;((u = null != o && !s.signal.aborted) && g.complete("completed" === o && p),
                        ("completed" !== o && ("archived" !== o || a !== L)) ||
                          !n ||
                          i ||
                          G.get(P.kJ) ||
                          s.signal.aborted ||
                          r ||
                          W(t, { replace: !0, state: { ...X.state, scrollPageToTop: !1 } }),
                        !i ||
                          ("completed" !== o && ("archived" !== o || a !== L)) ||
                          s.signal.aborted ||
                          r ||
                          window.close())
                    })
                    .catch((e) => {
                      if (!s.signal.aborted && !r) {
                        let t
                        ;((t =
                          e instanceof v.A
                            ? F.formatMessage({
                                id: "codex.space.page.archiveUnconfirmed",
                                defaultMessage: "Deletion could not be confirmed. Check Trash before trying again",
                                description:
                                  "Notification after a Page deletion timed out and authorized checks could not confirm whether it was archived",
                              })
                            : F.formatMessage(
                                {
                                  id: "codex.space.page.archiveError.byDocumentType",
                                  defaultMessage:
                                    "{documentType, select, granola_presentation {Could not delete slide} granola_workbook {Could not delete sheet} other {Could not delete page}}",
                                  description:
                                    "Notification shown when deleting a shared Page owned by the signed-in person fails. documentType selects slide, sheet, or page for the current document.",
                                },
                                { documentType: K },
                              )),
                          G.get(h.Id).danger(t, { errorAnalytics: { toastId: "codex.space.page.archiveError" } }))
                      }
                    })
                    .finally(() => {
                      ;(u || g.close(), s.signal.removeEventListener("abort", g.close), s.stop(), y())
                    }),
                    H())
                }),
                (U[9] = ee),
                (U[10] = K),
                (U[11] = Q),
                (U[12] = F),
                (U[13] = X),
                (U[14] = W),
                (U[15] = H),
                (U[16] = L),
                (U[17] = V),
                (U[18] = G),
                (U[19] = j))
              : (j = U[19]),
            U[20] !== K || U[21] !== V
              ? ((I = (0, n.jsx)(g.L3, {
                  className: "contents",
                  children: V?.trim()
                    ? (0, n.jsx)(c.A, {
                        id: "codex.space.page.archive.title",
                        defaultMessage: "Delete “{title}”?",
                        description: "Title of the confirmation dialog for deleting a shared Page",
                        values: { title: V },
                      })
                    : (0, n.jsx)(c.A, {
                        id: "codex.space.page.archive.title.untitled",
                        defaultMessage:
                          "Delete {documentType, select, granola_document {Untitled doc} granola_whiteboard {Untitled canvas} granola_workbook {Untitled sheet} granola_presentation {Untitled slide} other {Untitled page}}?",
                        description:
                          "Title of the confirmation dialog for deleting an untitled document. documentType selects the untitled name for a Doc, canvas, sheet, presentation, or ordinary Page.",
                        values: { documentType: K },
                      }),
                })),
                (U[20] = K),
                (U[21] = V),
                (U[22] = I))
              : (I = U[22]),
            U[23] !== J || U[24] !== K
              ? ((k =
                  null != J &&
                  (0, n.jsx)(c.A, {
                    id: "codex.space.page.archive.descriptionWithRetention.byDocumentType",
                    defaultMessage:
                      "{documentType, select, granola_presentation {This slide and its subpages will move to Trash. You can restore them within {days, plural, one {# day} other {# days}}.} granola_workbook {This sheet and its subpages will move to Trash. You can restore them within {days, plural, one {# day} other {# days}}.} other {This page and its subpages will move to Trash. You can restore them within {days, plural, one {# day} other {# days}}.}}",
                    description:
                      "Explanation before deleting a shared Page when automatic deletion is enabled. Days is the number of days the newly deleted Page and its nested pages are retained before permanent deletion. documentType selects slide, sheet, or page for the current document.",
                    values: { documentType: K, days: J },
                  })),
                (U[23] = J),
                (U[24] = K),
                (U[25] = k))
              : (k = U[25]),
            U[26] !== J || U[27] !== K
              ? ((T =
                  null == J &&
                  (0, n.jsx)(c.A, {
                    id: "codex.space.page.archive.description.byDocumentType",
                    values: { documentType: K },
                    defaultMessage:
                      "{documentType, select, granola_presentation {This slide and its subpages will move to Trash. You can restore them from Trash.} granola_workbook {This sheet and its subpages will move to Trash. You can restore them from Trash.} other {This page and its subpages will move to Trash. You can restore them from Trash.}}",
                    description:
                      "Explanation shown before deleting a shared Page. documentType selects slide, sheet, or page for the current document.",
                  })),
                (U[26] = J),
                (U[27] = K),
                (U[28] = T))
              : (T = U[28]),
            U[29] !== k || U[30] !== T
              ? ((D = (0, n.jsxs)(g.rr, { className: "contents", children: [k, T] })),
                (U[29] = k),
                (U[30] = T),
                (U[31] = D))
              : (D = U[31]),
            U[32] !== D || U[33] !== I
              ? ((q = (0, n.jsx)(u.OO, {
                  children: (0, n.jsx)(u.c7, {
                    titleClassName: "line-clamp-3 break-words pe-8",
                    title: I,
                    subtitle: D,
                  }),
                })),
                (U[32] = D),
                (U[33] = I),
                (U[34] = q))
              : (q = U[34]),
            U[35] === Symbol.for("react.memo_cache_sentinel")
              ? ((E = (0, n.jsx)(c.A, {
                  id: "codex.space.page.archive.cancel",
                  defaultMessage: "Cancel",
                  description: "Button label to cancel deleting a shared Page",
                })),
                (U[35] = E))
              : (E = U[35]),
            U[36] !== H
              ? ((N = (0, n.jsx)(p.$, { color: "secondary", type: "button", onClick: H, children: E })),
                (U[36] = H),
                (U[37] = N))
              : (N = U[37]),
            U[38] === Symbol.for("react.memo_cache_sentinel")
              ? (($ = (0, n.jsx)(p.$, {
                  color: "danger",
                  type: "submit",
                  children: (0, n.jsx)(c.A, {
                    id: "codex.space.page.archive.confirm",
                    defaultMessage: "Delete",
                    description: "Button label to confirm deleting a shared Page",
                  }),
                })),
                (U[38] = $))
              : ($ = U[38]),
            U[39] !== N
              ? ((R = (0, n.jsx)(u.OO, { children: (0, n.jsxs)(u.Es, { children: [N, $] }) })),
                (U[39] = N),
                (U[40] = R))
              : (R = U[40]),
            U[41] !== q || U[42] !== R || U[43] !== j
              ? ((O = (0, n.jsxs)(u.R4, { as: "form", onSubmit: j, children: [q, R] })),
                (U[41] = q),
                (U[42] = R),
                (U[43] = j),
                (U[44] = O))
              : (O = U[44]),
            U[45] !== O || U[46] !== M
              ? ((z = (0, n.jsx)(g.lG, {
                  open: !0,
                  dialogCloseClassName: "rtl:start-auto rtl:end-4",
                  size: "compact",
                  onOpenChange: M,
                  children: O,
                })),
                (U[45] = O),
                (U[46] = M),
                (U[47] = z))
              : (z = U[47]),
            z
          )
        },
      },
    )
  },
  sO5n(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      s = a("DBCl"),
      o = a("yxN2"),
      r = a("zvi0"),
      c = a("I0PY"),
      l = a("hZax")
    a.d(
      t,
      {},
      {
        i: function (e) {
          let t,
            a,
            d,
            p,
            g = (0, i.c)(11)
          g[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = { hostId: s.iwv, oauthReferrer: "google_drive_export" }), (g[0] = t))
            : (t = g[0])
          let {
              clearConnectingApp: u,
              connectingApp: h,
              handleAppConnectOAuthStarted: m,
              handleConnectApp: f,
            } = (0, o.t)(t),
            v = (0, l.Zj)("303843376"),
            y = (0, l.Zj)("2546594521"),
            b = (void 0 === e || e) && v && !y
          g[1] !== f || g[2] !== b
            ? ((a = { hostId: s.iwv, handleConnectApp: f, enabled: b }), (g[1] = f), (g[2] = b), (g[3] = a))
            : (a = g[3])
          let { exportToGoogleDrive: w } = (0, c.N)(a)
          g[4] !== u || g[5] !== h || g[6] !== m
            ? ((d = null == h ? null : (0, n.jsx)(r.Dl, { app: h, hostId: s.iwv, onClose: u, onOAuthStarted: m })),
              (g[4] = u),
              (g[5] = h),
              (g[6] = m),
              (g[7] = d))
            : (d = g[7])
          let x = d
          return (
            g[8] !== x || g[9] !== w
              ? ((p = { exportToGoogleDrive: w, connectDialog: x }), (g[8] = x), (g[9] = w), (g[10] = p))
              : (p = g[10]),
            p
          )
        },
      },
    )
  },
  Jnhm(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      s = a("on57"),
      o = a("zd8w"),
      r = a("oyxz"),
      c = a("Sm6l"),
      l = a("JNtf"),
      d = a("mUDD")
    function p(e) {
      return !e
    }
    a.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            a,
            g,
            u,
            h,
            m,
            f,
            v,
            y,
            b = (0, i.c)(29),
            { animateHeight: w, children: x, diagnostics: S, size: C, onOpenChange: P } = e,
            [_, A] = (0, o.useState)(!1),
            M = (0, o.useId)(),
            j = null != S && _,
            I = j ? "wideTall" : C,
            k = j ? ("wideTall" === C ? 1200 : 1040) : void 0
          b[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = { "aria-describedby": void 0 }), (b[0] = t))
            : (t = b[0])
          let T = j && "lg:grid-cols-2 lg:overflow-hidden"
          b[1] !== T ? ((a = (0, s.A)("grid h-full min-h-0 overflow-y-auto", T)), (b[1] = T), (b[2] = a)) : (a = b[2])
          let D = j && "min-h-140 lg:min-h-0 lg:overflow-y-auto"
          return (
            b[3] !== D ? ((g = (0, s.A)("min-h-0 min-w-0", D)), (b[3] = D), (b[4] = g)) : (g = b[4]),
            b[5] !== S || b[6] !== M || b[7] !== j
              ? ((u =
                  null != S
                    ? (0, n.jsx)(c.$, {
                        "aria-controls": M,
                        "aria-expanded": j,
                        color: "ghostSecondary",
                        size: "compact",
                        type: "button",
                        onClick: () => A(p),
                        children: (0, n.jsx)(r.A, {
                          id: "restricted.pages.moveDebug.toggle",
                          defaultMessage: "Move diagnostics",
                          description:
                            "Button that expands or collapses the internal read-only Page move diagnostic panel",
                        }),
                      })
                    : null),
                (b[5] = S),
                (b[6] = M),
                (b[7] = j),
                (b[8] = u))
              : (u = b[8]),
            b[9] !== x || b[10] !== u ? ((h = x(u)), (b[9] = x), (b[10] = u), (b[11] = h)) : (h = b[11]),
            b[12] !== g || b[13] !== h
              ? ((m = (0, n.jsx)("div", { className: g, children: h })), (b[12] = g), (b[13] = h), (b[14] = m))
              : (m = b[14]),
            b[15] !== S || b[16] !== M || b[17] !== j
              ? ((f =
                  j &&
                  (0, n.jsx)("aside", {
                    id: M,
                    className:
                      "min-h-140 min-w-0 border-t border-default lg:min-h-0 lg:overflow-auto lg:border-s lg:border-t-0",
                    children: (0, n.jsx)(d.R4, { children: (0, n.jsx)(d.OO, { children: S }) }),
                  })),
                (b[15] = S),
                (b[16] = M),
                (b[17] = j),
                (b[18] = f))
              : (f = b[18]),
            b[19] !== m || b[20] !== f || b[21] !== a
              ? ((v = (0, n.jsxs)("div", { className: a, children: [m, f] })),
                (b[19] = m),
                (b[20] = f),
                (b[21] = a),
                (b[22] = v))
              : (v = b[22]),
            b[23] !== w || b[24] !== P || b[25] !== I || b[26] !== v || b[27] !== k
              ? ((y = (0, n.jsx)(l.lG, {
                  animateHeight: w,
                  open: !0,
                  size: I,
                  widthHint: k,
                  contentProps: t,
                  onOpenChange: P,
                  children: v,
                })),
                (b[23] = w),
                (b[24] = P),
                (b[25] = I),
                (b[26] = v),
                (b[27] = k),
                (b[28] = y))
              : (y = b[28]),
            y
          )
        },
      },
    )
  },
  Dxtb(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      s = a("oyxz"),
      o = a("Sm6l"),
      r = a("JNtf"),
      c = a("mUDD"),
      l = a("Xjj2"),
      d = a("Jnhm"),
      p = a("LNgO")
    a.d(
      t,
      {},
      {
        v: function (e) {
          let t,
            a,
            g,
            u = (0, i.c)(10),
            { failed: h, pageCount: m, documentType: f, onClose: v } = e,
            y = void 0 !== h && h
          return (
            u[0] !== v ? ((t = (e) => !e && v()), (u[0] = v), (u[1] = t)) : (t = u[1]),
            u[2] !== f || u[3] !== y || u[4] !== v || u[5] !== m
              ? ((a = () =>
                  (0, n.jsxs)(c.R4, {
                    children: [
                      (0, n.jsxs)(c.OO, {
                        children: [
                          (0, n.jsx)(c.c7, {
                            title: (0, n.jsx)(r.L3, { children: (0, n.jsx)(p.R, { pageCount: m, documentType: f }) }),
                          }),
                          (0, n.jsx)("p", {
                            className: "text-secondary select-none",
                            role: y ? "alert" : "status",
                            children: y
                              ? (0, n.jsx)(s.A, { ...l.ji.codeLoadError })
                              : (0, n.jsx)(s.A, {
                                  id: "codex.space.page.crossSpaceMove.codeLoading",
                                  defaultMessage: "Loading move options…",
                                  description: "Status shown while the code for the Page move dialog is loading",
                                }),
                          }),
                        ],
                      }),
                      (0, n.jsx)(c.OO, {
                        children: (0, n.jsx)(c.Es, {
                          children: (0, n.jsx)(o.$, {
                            color: "ghost",
                            type: "button",
                            onClick: v,
                            children: (0, n.jsx)(s.A, {
                              id: "codex.space.page.crossSpaceMove.cancel",
                              defaultMessage: "Cancel",
                              description:
                                "Button that closes the Page move destination picker without moving anything",
                            }),
                          }),
                        }),
                      }),
                    ],
                  })),
                (u[2] = f),
                (u[3] = y),
                (u[4] = v),
                (u[5] = m),
                (u[6] = a))
              : (a = u[6]),
            u[7] !== t || u[8] !== a
              ? ((g = (0, n.jsx)(d.H, { size: "default", onOpenChange: t, children: a })),
                (u[7] = t),
                (u[8] = a),
                (u[9] = g))
              : (g = u[9]),
            g
          )
        },
      },
    )
  },
  LNgO(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      s = a("oyxz")
    a.d(
      t,
      {},
      {
        R: function (e) {
          let t,
            a = (0, i.c)(5),
            { documentType: o, pageCount: r } = e,
            c = void 0 === r ? 1 : r,
            l = null == o || "page" === o
          if (c > 1) {
            let e
            return (
              a[0] !== l || a[1] !== c
                ? ((e = l
                    ? (0, n.jsx)(s.A, {
                        id: "codex.space.page.crossSpaceMove.multipleTitle",
                        defaultMessage: "Move {count} pages",
                        description:
                          "Title of the single destination picker for moving multiple selected Pages. The count is the number of independently moved root Pages, excluding selected descendants.",
                        values: { count: c },
                      })
                    : (0, n.jsx)(s.A, {
                        id: "codex.space.page.crossSpaceMove.multipleItemsTitle",
                        defaultMessage: "Move {count} items",
                        description: "Title when a selection to move includes a non-Page item.",
                        values: { count: c },
                      })),
                  (a[0] = l),
                  (a[1] = c),
                  (a[2] = e))
                : (e = a[2]),
              e
            )
          }
          return (
            a[3] !== l
              ? ((t = l
                  ? (0, n.jsx)(s.A, {
                      id: "codex.space.page.crossSpaceMove.title",
                      defaultMessage: "Move page",
                      description: "Title of the destination picker for moving a Page into another owned Space or Page",
                    })
                  : (0, n.jsx)(s.A, {
                      id: "codex.space.page.crossSpaceMove.itemTitle",
                      defaultMessage: "Move item",
                      description: "Title or action for moving one non-Page item.",
                    })),
                (a[3] = l),
                (a[4] = t))
              : (t = a[4]),
            t
          )
        },
      },
    )
  },
  qLyg(e, t, a) {
    var n = a("ABep"),
      i = a("QosV"),
      s = a("zTeN"),
      o = a("zd8w"),
      r = a("SPnB"),
      c = a("Bbed"),
      l = a("X6Vn"),
      d = a("NRR1"),
      p = a("e1xH"),
      g = a("OWtl"),
      u = a("Dxtb"),
      h = a("sX33"),
      m = a("LqIC")
    let f = (0, c._)(async () => (await a.e(725).then(a.bind(a, "H8CC"))).PageMoveControllerHost, {
      fallback: (0, n.jsx)(b, {}),
      errorFallback: (0, n.jsx)(b, { failed: !0 }),
    })
    function v() {
      let e,
        t,
        n = (0, i.c)(3),
        c = (0, s.gh)(g.u)
      return (
        n[0] !== c
          ? ((e = () => {
              let e,
                t = c.watch((t) => {
                  let { get: n } = t
                  if (!n(p.pagesEnabled$)) {
                    ;((e = void 0), (0, l.Oo)(c, f))
                    return
                  }
                  let i = n(d.DO),
                    s = n(r.chatGptAuthenticatedUserId$),
                    o = n(h.Ez),
                    g = n(h.MN),
                    u = n(m.G6).some((e) => e.actor.accountId === i && e.actor.userId === s && "prepared" !== e.state)
                  if (null != o && !g) {
                    c.set(h.Ez, null)
                    let e = o.fromShareDialog ? o.preparedMove : null
                    null != e &&
                      a
                        .e(378048)
                        .then(a.bind(a, "IUpc"))
                        .then((t) => {
                          let { abandonPreparedPageMove: a, getTrackedPageMoveReference: n } = t
                          c.get(d.DO) === o.actor.accountId &&
                            c.get(r.chatGptAuthenticatedUserId$) === o.actor.userId &&
                            a(c, n(e), "cancelled")
                        })
                        .catch(y)
                  }
                  let v = n(h.jb)
                  g || u
                    ? ((0, l.oY)(c, f) && e === v) || ((e = v), (0, l.qf)(c, f, {}, { blocksOtherModals: v }))
                    : ((e = void 0), (0, l.Oo)(c, f))
                })
              return () => {
                ;(t(), (0, l.Oo)(c, f))
              }
            }),
            (t = [c]),
            (n[0] = c),
            (n[1] = e),
            (n[2] = t))
          : ((e = n[1]), (t = n[2])),
        (0, o.useEffect)(e, t),
        null
      )
    }
    function y() {}
    function b(e) {
      let t,
        a,
        o,
        r = (0, i.c)(10),
        { failed: c } = e,
        l = void 0 !== c && c,
        d = (0, s.gh)(g.u),
        p = (0, s.Ul)(h.Ez),
        m = (0, s.Ul)(h.MN),
        f = (0, s.Ul)(h.jb)
      if (!m || null == p || (!l && !f)) return null
      r[0] !== p ? ((t = (0, h.e8)(p)), (r[0] = p), (r[1] = t)) : (t = r[1])
      let v = p.bulk?.sources.length
      return (
        r[2] !== p || r[3] !== d ? ((a = () => (0, h.QT)(d, p)), (r[2] = p), (r[3] = d), (r[4] = a)) : (a = r[4]),
        r[5] !== l || r[6] !== t || r[7] !== v || r[8] !== a
          ? ((o = (0, n.jsx)(u.v, { failed: l, documentType: t, pageCount: v, onClose: a })),
            (r[5] = l),
            (r[6] = t),
            (r[7] = v),
            (r[8] = a),
            (r[9] = o))
          : (o = r[9]),
        o
      )
    }
    ;((v.prefetch = (e) => {
      e.get(p.Xk) &&
        Promise.all([
          f.prefetch(),
          a
            .e(513470)
            .then(a.bind(a, "MyxJ"))
            .then(({ PageMoveDestinationDialog: e }) => e.prefetch()),
          a
            .e(707603)
            .then(a.bind(a, "zLgM"))
            .then(({ PageMoveConfirmationDialog: e }) => e.prefetch()),
        ]).catch(() => {})
    }),
      a.d(t, {}, { O: v }))
  },
  Xjj2(e, t, a) {
    var n = a("Qgfj"),
      i = a("YYL2")
    let s = (0, n.zR)({
        id: "codex.space.page.actions.moving",
        defaultMessage: "Moving…",
        description: "Action label while a selected Page is already moving",
      }),
      o = (0, n.YK)({
        codeLoadError: {
          id: "codex.space.page.crossSpaceMove.codeLoadError",
          defaultMessage: "Couldn’t open Move. Reload the app and try again",
          description:
            "Error shown when the code for the Page move dialog cannot load. Reloading the app allows the code to be requested again.",
        },
        loadError: {
          id: "codex.space.page.crossSpaceMove.loadError",
          defaultMessage: "Couldn’t load destinations",
          description: "Error shown when Page move destinations fail to load",
        },
        retry: {
          id: "codex.space.page.crossSpaceMove.retry",
          defaultMessage: "Try again",
          description: "Button that retries loading Page move destinations",
        },
        prepareError: {
          id: "codex.space.page.crossSpaceMove.prepareError",
          defaultMessage: "Couldn’t move this page to that destination",
          description: "Error shown when the server cannot prepare a Page move to the selected destination",
        },
        recentDropUnavailable: {
          id: "codex.space.page.crossSpaceMove.recentDropUnavailable",
          defaultMessage: "Check that you can edit both the Page and its destination, then try moving it again",
          description: "Shown when edit access cannot be verified for a drag from a loading Recent Page.",
        },
        spaceRootDropUnavailable: {
          id: "codex.space.page.crossSpaceMove.spaceRootDropUnavailable",
          defaultMessage: "The main Page stays in its Space. Choose a different Page to move",
          description: "Shown when a drag from Recents turns out to be the Space's main Page.",
        },
        sourceOwnerRequired: {
          id: "codex.space.page.crossSpaceMove.sourceOwnerRequired",
          defaultMessage: "Only the source Space owner can move this page.",
          description: "Shown when a drop requires ownership of the Space the Page is leaving",
        },
        sourceAccessUnavailable: {
          id: "codex.space.page.crossSpaceMove.sourceAccessUnavailable",
          defaultMessage: "Couldn’t check your access to the source Space. Try dragging again.",
          description: "Shown when the source Space ownership lookup fails during a drop",
        },
        personalDriveOwnerRequired: {
          id: "codex.space.page.crossSpaceMove.personalDriveOwnerRequired",
          defaultMessage: "Only the owner of this private drive can move this page into a Space",
          description: "Shown when someone tries to move a page from another person's private drive into a Space",
        },
        trashed: {
          id: "codex.space.page.crossSpaceMove.blockedDescendant.trashed",
          defaultMessage: "This Page contains items in Trash and can’t be moved to another Space",
          description:
            "Error in the Page move destination dialog or failure toast after moving a Page to another Space is blocked by a child item in Trash. Page and Space are product names. This does not promise that the item can be restored.",
        },
        initializing: {
          id: "codex.space.page.crossSpaceMove.blockedDescendant.initializing",
          defaultMessage: "A child Page hasn’t finished being created. Try moving this Page once it’s ready",
          description:
            "Error in the Page move destination dialog or failure toast when a child Page is still being created and prevents moving its parent to another Space. The user can try the move again manually once creation finishes. Page and Space are product names.",
        },
        unavailable: {
          id: "codex.space.page.crossSpaceMove.blockedDescendant.unavailable",
          defaultMessage: "One or more child Pages are unavailable, so this Page can’t be moved to another Space",
          description:
            "Error in the Page move destination dialog or failure toast when unavailable child Pages prevent moving their parent to another Space and no more specific explanation is known. Page and Space are product names. Child identities and recovery instructions are intentionally omitted.",
        },
        failed: {
          id: "codex.space.page.crossSpaceMove.failed",
          defaultMessage: "Couldn’t move this page",
          description: "Error toast shown after a cross-Space Page move definitively fails",
        },
        editConflict: {
          id: "codex.space.page.crossSpaceMove.editConflict",
          defaultMessage: "This page changed before the move finished. Try moving it again",
          description:
            "Move failure caused by a conflicting edit or placement revision. The move did not complete and the user can try again.",
        },
        cancelled: {
          id: "codex.space.page.crossSpaceMove.cancelled",
          defaultMessage: "The move was canceled",
          description: "Toast shown when a move was canceled and the user can prepare a new one",
        },
        retryCancelled: {
          id: "codex.space.page.crossSpaceMove.retryCancelled",
          defaultMessage: "Try again",
          description: "Prepare a new move to the same destination after the previous move was canceled",
        },
        backgroundError: {
          id: "codex.space.page.crossSpaceMove.backgroundError",
          defaultMessage: "Couldn’t finish moving this page",
          description: "Error toast shown when a cross-Space Page move cannot be recovered automatically",
        },
        retryConfirmation: {
          id: "codex.space.page.crossSpaceMove.retryConfirmation",
          defaultMessage: "Retry",
          description: "Action in a failed cross-Space Page move toast that retries confirmation recovery",
        },
        recoveryRequired: {
          id: "codex.space.page.crossSpaceMove.recoveryRequired",
          defaultMessage: "Couldn’t finish moving this page",
          description: "Error toast shown when a cross-Space Page move requires the user to retry recovery",
        },
        retryRecovery: {
          id: "codex.space.page.crossSpaceMove.retryRecovery",
          defaultMessage: "Retry",
          description: "Action in a failed cross-Space Page move toast that retries recovery",
        },
      })
    a.d(
      t,
      {},
      {
        N3: s,
        ji: o,
        oj: function (e) {
          if (e instanceof i.y9) {
            if ("edit_conflict" === e.code) return o.editConflict
            if ("move_blocked_by_descendant" === e.code) return o[e.reason ?? "unavailable"]
            if ("rejected" === e.code && e.diagnostics?.backendCode === "personal_drive_move_owner_required")
              return o.personalDriveOwnerRequired
          }
        },
      },
    )
  },
  h3C3(e, t, a) {
    var n = a("ABep"),
      i = a("oyxz"),
      s = a("SGsN"),
      o = a("mNPx"),
      r = a("pyoT"),
      c = a("Xjj2")
    a.d(
      t,
      {},
      {
        L: function (e, t, a) {
          let r = {
            owner_required: c.ji.sourceOwnerRequired,
            lookup_failed: c.ji.sourceAccessUnavailable,
            unverified_drop: c.ji.recentDropUnavailable,
            space_root: c.ji.spaceRootDropUnavailable,
          }[t]
          e.get(s.Id).danger((0, n.jsx)(i.A, { ...r }), {
            errorAnalytics: {
              toastId: "codex.space.page.crossSpaceMove.sourceAccess",
              userFacingError: null == a ? void 0 : (0, o.jq)("pages.move.prepare", a),
            },
          })
        },
        v: function (e, t, a, l) {
          let d = (0, c.oj)(t) ?? (a ? c.ji.cancelled : c.ji.failed)
          e.get(s.Id).danger((0, n.jsx)(i.A, { ...d }), {
            description: null == l ? void 0 : e.get(r.loadedSpacePageMetadata$, l)?.title,
            duration: 10,
            primaryAction: a && { label: (0, n.jsx)(i.A, { ...c.ji.retryCancelled }), onClick: a },
            errorAnalytics: {
              toastId: "codex.space.page.crossSpaceMove.failed",
              userFacingError: null == t ? void 0 : (0, o.jq)("pages.move.prepare", t),
            },
          })
        },
      },
    )
  },
  n8kT(e, t, a) {
    var n = a("SPnB"),
      i = a("NRR1"),
      s = a("EqWS"),
      o = a("Rxyo"),
      r = a("sX33"),
      c = a("h3C3"),
      l = a("Qx3T")
    a.d(
      t,
      {},
      {
        h: function (e, t, d, p) {
          if (p?.fromShareDialog && !e.get(o.y)) return
          let g = e.get(i.DO),
            u = e.get(n.chatGptAuthenticatedUserId$)
          if (null != e.get(r.Ez) || null == g || null == u) return
          let h = []
          for (let a of "pageId" in t ? [t] : t) {
            let t = (0, r.QP)(e, a.pageId, d)
            if (
              null == t ||
              t.sourceSpaceId !== a.sourceSpaceId ||
              (null != d &&
                (p?.requiresConfirmation ? r.HS : r.qq)(e, t.pageId, d.destinationParentPageId, d.beforePageId)
                  ?.destinationSpaceId !== d.destinationSpaceId)
            )
              return
            h.some((e) => e.pageId === t.pageId) || h.push(t)
          }
          let m = h.filter((e) => !h.some((t) => t.cachedDescendantPageIds.includes(e.pageId))),
            f = m[0]
          if (null == f) return
          let v = {
            ...f,
            requestId: crypto.randomUUID(),
            actor: { accountId: g, userId: u },
            bulk: m.length > 1 ? { sources: m, remainingSources: m.slice(1) } : void 0,
            ownerId: p?.ownerId,
            initialDestination: d,
            requiresConfirmation: p?.requiresConfirmation,
            fromShareDialog: p?.fromShareDialog,
            displayPage: null == d || p?.requiresConfirmation ? void 0 : (0, s.zl)(e).get(f.pageId),
            onStarted: p?.onStarted,
            isPreparing: !1,
            isMovingWithinSpace: !1,
            sameSpaceMove: null,
            preparedMove: null,
            preparationError: null,
          }
          ;(e.set(r.Ez, v),
            null != d &&
              (p?.requiresConfirmation ||
                e.set(l.B, {
                  accountId: g,
                  userId: u,
                  moveId: v.requestId,
                  pageIds: [v.pageId, ...v.cachedDescendantPageIds],
                  phase: "started",
                }),
              a
                .e(752989)
                .then(a.bind(a, "Suaa"))
                .then(({ preparePageMoveDialog: t }) => t(e, v, d))
                .catch((t) => {
                  ;(0, r.G4)(e, v) && ((0, r.QT)(e, v), (0, c.v)(e, t))
                })))
        },
      },
    )
  },
  yDUA(e, t, a) {
    var n = a("HNZf"),
      i = a("e1xH"),
      s = a("rH0R")
    a.d(
      t,
      {},
      {
        o: function (e, t) {
          e.get(i.pagesEnabled$) &&
            (("page" === t.type ? s.PageSharingDialog : s.vC).prefetch(), (0, n.prefetchLibrarySharing)(e, t))
        },
      },
    )
  },
  Emb5(e, t, a) {
    a.r(t)
    var n = a("QosV"),
      i = a("zTeN"),
      s = a("G4E3"),
      o = a("zd8w"),
      r = a("Qgfj"),
      c = a("E8Sp"),
      l = a("cyb2"),
      d = a("RaBo"),
      p = a("T8X0"),
      g = a("MX6A"),
      u = a("bVeK"),
      h = a("RNul"),
      m = a("SGsN"),
      f = a("HFg1"),
      v = a("svjy"),
      y = a("nlNF"),
      b = a("gcWI"),
      w = a("n8vi"),
      x = a("rpnz"),
      S = a("pKVr"),
      C = a("Wj4L"),
      P = a("e1xH"),
      _ = a("SEOK"),
      A = a("cGL0"),
      M = a("NobM"),
      j = a("Xjj2"),
      I = a("sX33"),
      k = a("Lt0C"),
      T = a("n8kT"),
      D = a("EqWS"),
      q = a("yDUA"),
      E = a("H7Ld"),
      N = a("ABl9"),
      $ = a("OoIX"),
      R = a("Um9I"),
      O = a("oPCO"),
      z = a("pyoT")
    let U = (0, r.YK)({
        createSite: {
          id: "codex.space.sitePage.create",
          defaultMessage: "Create Site",
          description: "Prefill Site creation in this Space's existing Page composer",
        },
        addSite: {
          id: "codex.space.sitePage.attach.title",
          defaultMessage: "Add existing Site",
          description: "Title of the dialog for adding a Site the user owns as a child Page in a Space",
        },
        newBoard: {
          id: "pages.board.create.nested",
          defaultMessage: "New canvas",
          description: "Create a canvas inside this Page or Space",
        },
        newSpreadsheet: {
          id: "pages.workbook.create.nested",
          defaultMessage: "New sheet",
          description: "Create a sheet, an editable spreadsheet document, inside this Space",
        },
        newPresentation: {
          id: "pages.presentation.create.nested",
          defaultMessage: "New slides",
          description: "Create a presentation inside this Space",
        },
        movePage: {
          id: "codex.space.page.actions.movePage",
          defaultMessage: "Move",
          description: "Menu action that opens a destination picker for moving a Page and its sub-pages",
        },
      }),
      B = {
        granola_whiteboard: { id: "create-board", message: U.newBoard, ...(0, M.XB)({ 16: u.AdO, 20: u.jX_ }) },
        granola_workbook: { id: "create-spreadsheet", message: U.newSpreadsheet, ...(0, M.XB)(f.Q.spreadsheet) },
        granola_presentation: { id: "create-presentation", message: U.newPresentation, ...(0, M.XB)(f.Q.presentation) },
      }
    function Q({ scope: e, canCreatePage: t, page: a, pageId: n, title: i }) {
      return t &&
        null == e.get($.m2, n) &&
        "request_changes" !== e.get(R.jy, a ?? n) &&
        "available" === e.get(d.ND) &&
        e.get(P.bd)
        ? [
            {
              id: "create-site",
              message: U.createSite,
              ...(0, M.XB)({ 16: u.q_r, 20: u.pKn }),
              enabled: !(0, x.sD)(n),
              selectAfterClose: !0,
              onSelect: () => {
                let t = e.get(z.spaceAccountId$)
                if (
                  null == t ||
                  !e.get(P.bd) ||
                  "available" !== e.get(d.ND) ||
                  "request_changes" === e.get(R.jy, a ?? n)
                )
                  return
                let o = e
                  .get(c.gM)
                  .prepareNavigation(`/space/${n}`, {
                    state: {
                      prefillPrompt: (0, E.KH)({
                        pluginDisplayName: "Sites",
                        pluginId: N.$n,
                        defaultPrompt: e
                          .get(v.g)
                          .formatMessage(
                            {
                              id: "appgenConversation.createForSpacePrompt",
                              defaultMessage: "Create a website as a new child Page in {pageMention} that …",
                              description:
                                "Editable, unsent request to create and attach a new Site in a Space. {pageMention} is the selected Space's serialized interactive Page link, including its title and canonical Page URI. Preserve the placeholder as a whole.",
                            },
                            { pageMention: (0, g.xR)(i.replace(/[\r\n]+/gu, " "), (0, s.$j)({ kind: "page", id: n })) },
                          ),
                      }),
                      focusComposerNonce: Date.now(),
                      spaceSidebarAccountId: t,
                      spaceSidebarRootPageId: n,
                    },
                  })
                null != o &&
                  ((0, b.jP)(e, { accountId: t, pageId: n, documentType: null == a ? void 0 : (0, C.th)(a) }),
                  (0, p.Rm)(e, "work"),
                  (0, l.Q_)(e, { action: l.lX.CODEX_APPGEN_INTERACTION_ACTION_CREATE_SITE_CLICKED }),
                  o())
              },
            },
          ]
        : []
    }
    function H(e) {
      return e
        ? {
            icon: (0, o.createElement)(h.y, { as: "span", className: "size-(--icon-leading-size)" }),
            nativeIcon: u.Ezj,
            message: j.N3,
            enabled: !1,
            busy: !0,
          }
        : { ...(0, M.XB)({ 16: u.Imh, 20: u.Btk }), message: U.movePage, enabled: !0, busy: !1 }
    }
    function L(e, t, a = e.get(I.Zs, t)) {
      return a || null != (0, D.Iq)(e, t)
        ? [
            {
              id: "move-page",
              ...H(a),
              renderWithPresentation: (e) => (0, o.createElement)(V, { pageId: t, render: e }),
              selectAfterClose: !0,
              onSelect: () => {
                let a = (0, D.Iq)(e, t)
                null != a && (0, T.h)(e, a)
              },
            },
          ]
        : []
    }
    function V(e) {
      let t,
        a = (0, n.c)(3),
        { pageId: s, render: o } = e,
        r = (0, i._U)(I.Zs, s)
      return (a[0] !== r || a[1] !== o ? ((t = o(H(r))), (a[0] = r), (a[1] = o), (a[2] = t)) : (t = a[2]), t)
    }
    function K({ scope: e, canCreatePage: t, isSubpage: a = !1, pageId: n }) {
      let i = e.get(z.spaceAccountId$)
      return null != i && t && "request_changes" !== e.get(R.jy, n)
        ? [
            (0, k.k)(e, n, {
              id: "new-page",
              message: a ? M.Nh.addSubpage : M.Nh.newPage,
              ...(0, M.XB)({ 16: u.mgx, 20: u.Juk }),
              enabled: !(0, x.sD)(n),
              selectAfterClose: !0,
              onSelect: () => {
                let t = performance.now()
                if (e.get(z.spaceAccountId$) !== i || "request_changes" === e.get(R.jy, n) || !(0, $.pF)(e, n)) return
                let a = (0, w.startSpacePageCreation)(e, {
                    deferUntilEdited: !0,
                    typingStartedAtMs: t,
                    parentPageId: n,
                  }),
                  s = e.get(y.x2)
                ;((0, c.oo)(e, `/space/${a.pageId}`, {
                  state: {
                    pageListOrigin: null == s ? void 0 : (0, _.$)(s, i, a.pageId).pageListOrigin,
                    focusPageTitle: !0,
                    spaceSidebarAccountId: s?.state?.spaceSidebarAccountId,
                    spaceSidebarRootPageId: s?.state?.spaceSidebarRootPageId,
                    spaceSidebarPersonal: s?.state?.spaceSidebarPersonal,
                  },
                }),
                  a.completion.catch((t) => {
                    ;(t instanceof DOMException && "AbortError" === t.name) ||
                      (e.get(z.spaceAccountId$) === i &&
                        e
                          .get(m.Id)
                          .danger(
                            e
                              .get(v.g)
                              .formatMessage({
                                id: "codex.space.page.createError",
                                defaultMessage: "Could not create page",
                                description: "Toast displayed when creating a shared Page fails",
                              }),
                            { errorAnalytics: { toastId: "codex.space.page.createError" } },
                          ))
                  }))
              },
            }),
          ]
        : []
    }
    function G({ scope: e, page: t, pageId: a, canCreatePage: n, onAddSite: i }) {
      return t?.drive_space_id == null ||
        null != t.deleted_at ||
        (0, C.qt)(t) ||
        !n ||
        null != e.get($.m2, a) ||
        !e.get(P.bd) ||
        "request_changes" === e.get(R.jy, t)
        ? []
        : [
            {
              id: "add-existing-site",
              message: U.addSite,
              ...(0, M.XB)({ 16: u.TVU, 20: u.MhR }),
              selectAfterClose: !0,
              enabled: !(0, x.sD)(a),
              onSelect: i,
            },
          ]
    }
    a.d(
      t,
      {},
      {
        getAttachSiteMenuItems: G,
        getPageMoveMenuItems: L,
        getSpaceNewPageMenuItems: K,
        getSpacePageActionMenuItems: function ({
          scope: e,
          driveSpaceId: t,
          canCreatePage: a,
          page: n,
          isPinned: i,
          kind: s,
          nativeIcons: o = !0,
          onArchive: r,
          onAddSite: c,
          onNewChat: l,
          onRename: d,
          onShare: p,
          onTogglePinned: g,
          pageId: h,
          showOpenInNewWindow: m = !0,
          title: f,
          exportToGoogleDrive: v,
        }) {
          let y = t ?? n?.drive_space_id,
            b = a && (null != n ? null == n.site_project_id && (0, O.U)(n) : null == e.get($.m2, h)),
            w = "request_changes" !== e.get(R.jy, n ?? h)
          if (null != p && w && n?.access.can_share === !0) {
            let a = t ?? n.drive_space_id
            "page" === s ? (0, q.o)(e, { type: "page", id: h }) : null != a && (0, q.o)(e, { type: "space", id: a })
          }
          let _ =
            b && !(0, C.qt)(n) && w
              ? e
                  .get(P.q)
                  .filter((e) => "space" === s || "granola_whiteboard" === e)
                  .map((t) =>
                    (0, k.k)(e, h, {
                      ...B[t],
                      enabled: !(0, x.sD)(h) && !e.get(x.ut),
                      selectAfterClose: !0,
                      onSelect: () => {
                        "request_changes" === e.get(R.jy, n ?? h) || ((0, $.pF)(e, h) && (0, A.Y)(e, t, h))
                      },
                    }),
                  )
              : []
          return ("space" === s &&
            _.unshift(...Q({ scope: e, canCreatePage: b && n?.drive_space_id != null, page: n, pageId: h, title: f })),
          null != c && _.unshift(...G({ scope: e, page: n, pageId: h, canCreatePage: b, onAddSite: c })),
          "page" === s)
            ? [
                ...K({ scope: e, pageId: h, isSubpage: !0, canCreatePage: b && i && !(0, C.qt)(n) && w }),
                ...(0, M.Zf)({
                  scope: e,
                  page: n,
                  exportToGoogleDrive: v,
                  creationItems: _,
                  pageId: h,
                  title: n?.title === void 0 ? f : (n.title ?? ""),
                  isPinned: i,
                  nativeIcons: o,
                  organizationItems: w ? L(e, h) : [],
                  canRename: (0, M.QT)(e, n),
                  reportTarget: n?.access.can_read === !0 && null == n.deleted_at ? { kind: "page", id: h } : void 0,
                  canCopyMarkdown: null == n || ("page" === (0, C.th)(n) && n.access.can_read),
                  canExportDocument: null != n && "page" === (0, C.th)(n) && n.access.can_read,
                  onArchive: w ? r : void 0,
                  onShare: w ? p : void 0,
                  onTogglePinned: g,
                }),
              ]
            : (0, M._q)({
                scope: e,
                canRename: (0, M.QT)(e, n),
                title: f,
                onRename: d,
                driveSpaceId: t ?? n?.drive_space_id,
                reportTarget:
                  n?.access.can_read === !0 && null == n.deleted_at && null != y ? { kind: "space", id: y } : void 0,
                actions: [(0, M.Bv)({ kind: s, isPinned: i, onTogglePinned: g })],
                creationItems: [
                  ...K({ scope: e, canCreatePage: b && w, pageId: h }),
                  {
                    id: "new-chat-with-page",
                    ...(0, M.XB)({ 16: u.EWb, 20: u.n60 }, M.lf.newChat),
                    message: M.Nh.newChat,
                    onSelect: l,
                  },
                  ..._,
                ],
                onArchive: w && (null == t || e.get(S.t5, t)?.canDelete === !0) ? r : void 0,
                onShare: w ? p : void 0,
                pageId: h,
                showOpenInNewWindow: m,
              })
        },
        getSpaceSiteCreationItems: Q,
      },
    )
  },
  dfOM(e, t, a) {
    let n = (0, a("iJY0").a)({
      name: "arrow-forward-open-base-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.668579, y: 2.668457, width: 14.663086, height: 14.663086 },
        visualBounds: { x: 2.668579, y: 2.668457, width: 14.663086, height: 14.663086 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.668579, y: 2.668457, width: 14.663086, height: 14.663086 },
        center: { x: 10.000122, y: 10 },
        insets: { top: 2.668457, right: 2.668335, bottom: 2.668457, left: 2.668579 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10.000122, y: 10 }, foreground: { x: 10.000122, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M13.6666 2.66846C15.6906 2.66859 17.3317 4.30945 17.3317 6.3335V13.6665C17.3317 15.6905 15.6906 17.3314 13.6666 17.3315H10.8336C10.4663 17.3315 10.1686 17.0338 10.1686 16.6665C10.1686 16.2992 10.4663 16.0015 10.8336 16.0015H13.6666C14.9561 16.0013 16.0016 14.956 16.0016 13.6665V6.3335C16.0016 5.04399 14.9561 3.99867 13.6666 3.99854H10.8336C10.4665 3.99854 10.1688 3.70062 10.1686 3.3335C10.1686 2.96623 10.4663 2.66846 10.8336 2.66846H13.6666Z" fill="currentColor"/> <path d="M7.6969 5.98779C7.95662 5.72841 8.37773 5.7282 8.63733 5.98779L11.8248 9.17627C12.2796 9.63119 12.2796 10.3688 11.8248 10.8237L8.63733 14.0122C8.37777 14.2716 7.95658 14.2714 7.6969 14.0122C7.4372 13.7525 7.4372 13.3305 7.6969 13.0708L10.1041 10.6646H3.33362C2.96635 10.6646 2.66858 10.3668 2.66858 9.99951C2.66876 9.6324 2.96646 9.33447 3.33362 9.33447H10.1022L7.6969 6.92822C7.4372 6.66852 7.4372 6.24749 7.6969 5.98779Z" fill="currentColor"/>',
    })
    a.d(t, {}, { o: n })
  },
  xpvY(e, t, a) {
    let n = (0, a("iJY0").a)({
      name: "generate-edit-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.432373, y: 0.792969, width: 14.970139, height: 18.417969 },
        visualBounds: { x: 2.432373, y: 0.792969, width: 14.970139, height: 18.417969 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.432373, y: 0.792969, width: 14.970139, height: 18.417969 },
        center: { x: 9.917443, y: 10.001953 },
        insets: { top: 0.792969, right: 2.597488, bottom: 0.789062, left: 2.432373 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.917443, y: 10.001953 },
          foreground: { x: 9.917443, y: 10.001953 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M3.16695 8.90745C3.53422 8.90745 3.83199 9.20522 3.83199 9.57248V13.7043C3.83218 14.6992 4.63883 15.5061 5.63375 15.5061H15.2353L13.9961 14.2668C13.7364 14.0071 13.7364 13.5851 13.9961 13.3254C14.2558 13.0657 14.6778 13.0657 14.9375 13.3254L17.1347 15.5237C17.4916 15.881 17.4919 16.4614 17.1347 16.8186L14.9375 19.0168C14.6779 19.2764 14.2558 19.2761 13.9961 19.0168C13.7364 18.7571 13.7364 18.3351 13.9961 18.0754L15.2353 16.8362H5.63375C3.90429 16.8362 2.5021 15.4337 2.50191 13.7043V9.57248C2.50191 9.20522 2.79968 8.90745 3.16695 8.90745Z" fill="currentColor"/> <path d="M10.8339 11.0461C11.2009 11.0463 11.4988 11.3442 11.499 11.7112C11.499 12.0783 11.201 12.376 10.8339 12.3762H7.08395C6.71668 12.3762 6.41891 12.0784 6.41891 11.7112C6.41912 11.3441 6.7168 11.0461 7.08395 11.0461H10.8339Z" fill="currentColor"/> <path d="M4.89742 0.987524C5.15698 0.727977 5.5791 0.728257 5.83883 0.987524C6.09852 1.24722 6.09852 1.66923 5.83883 1.92893L4.59957 3.16819H14.2011C15.9306 3.16819 17.3328 4.57063 17.333 6.30002V10.4319C17.333 10.7991 17.0352 11.0969 16.6679 11.0969C16.3007 11.0969 16.0029 10.7991 16.0029 10.4319V6.30002C16.0027 5.30517 15.196 4.49827 14.2011 4.49827H4.59957L5.83883 5.73752C6.09852 5.99722 6.09852 6.41923 5.83883 6.67893C5.57913 6.93863 5.15712 6.93863 4.89742 6.67893L2.70016 4.48069C2.34325 4.12332 2.34297 3.54295 2.70016 3.18577L4.89742 0.987524Z" fill="currentColor"/> <path d="M12.917 7.6301C13.2841 7.6303 13.582 7.92799 13.582 8.29514C13.5818 8.66213 13.2839 8.95998 12.917 8.96018H7.08395C6.71679 8.96018 6.41909 8.66225 6.41891 8.29514C6.41891 7.92787 6.71668 7.6301 7.08395 7.6301H12.917Z" fill="currentColor"/>',
    })
    a.d(t, {}, { W: n })
  },
}
//# sourceMappingURL=767254.bd528d5588.js.map
