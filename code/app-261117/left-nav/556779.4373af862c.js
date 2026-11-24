export const __rspack_esm_ids = [556779]
export const __webpack_modules__ = {
  Hh7n(e, t, a) {
    var l = a("X6Vn"),
      r = a("pdPj"),
      s = a("iHfE")
    a.d(
      t,
      {},
      {
        Su: async function (e, t, { onClose: i } = {}) {
          let n = e.get(s.ts)
          if (null == n || !e.get(r.l)) return
          let { ReferenceImageManageDialog: o } = await Promise.all([a.e(584510), a.e(855407)]).then(a.bind(a, "LUIA"))
          e.get(r.l) &&
            e.get(s.ts) === n &&
            (0, l.qf)(e, o, { onClose: i, referenceImage: t, referenceImagesAccountId: n })
        },
        h9: async function (e, { onSaved: t } = {}) {
          let i = e.get(s.ts)
          if (null == i || !e.get(r.l)) return
          let { ReferenceImageFormDialog: n } = await Promise.all([a.e(584510), a.e(280297)]).then(a.bind(a, "jj8f"))
          e.get(r.l) && e.get(s.ts) === i && (0, l.qf)(e, n, { referenceImagesAccountId: i, onSaved: t })
        },
        rk: async function (e, t) {
          let i = e.get(s.ts)
          if (null == i || !e.get(r.l)) return
          let { ReferenceImageSuggestionDialog: n } = await Promise.all([a.e(584510), a.e(545108)]).then(
            a.bind(a, "RrZF"),
          )
          e.get(r.l) && e.get(s.ts) === i && (0, l.qf)(e, n, { ...t, referenceImagesAccountId: i })
        },
      },
    )
  },
  wEIr(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      s = a("HLC5"),
      i = a("oyxz"),
      n = a("HOLv"),
      o = a("FrrB")
    function c(e) {
      return (0, l.jsx)("span", { className: "block", children: e })
    }
    a.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            a,
            d,
            u,
            h,
            g = (0, r.c)(9),
            { query: f, titleMarker: m } = e
          return (
            g[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, l.jsx)("span", {
                  className:
                    "flex size-12 shrink-0 items-center justify-center rounded-xl bg-background-secondary-soft",
                  children: (0, l.jsx)(n.I, { asset: s.H }),
                })),
                (g[0] = t))
              : (t = g[0]),
            g[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, l.jsx)(i.A, { id: "search.empty.title", defaultMessage: "No results found" })), (g[1] = a))
              : (a = g[1]),
            g[2] !== m ? ((d = (0, l.jsxs)("h2", { children: [m, a] })), (g[2] = m), (g[3] = d)) : (d = g[3]),
            g[4] !== f
              ? ((u = (0, l.jsx)(i.A, {
                  id: "spaceSearch.empty.descriptionWithQuery",
                  defaultMessage: "No matches for \u201C{query}\u201D. <guidance>Try a different search.</guidance>",
                  values: { query: f, guidance: c },
                })),
                (g[4] = f),
                (g[5] = u))
              : (u = g[5]),
            g[6] !== d || g[7] !== u
              ? ((h = (0, l.jsx)(o.A, {
                  className: "max-w-80 self-center wrap-anywhere select-none",
                  layout: "page",
                  spacing: "default",
                  illustration: t,
                  title: d,
                  description: u,
                })),
                (g[6] = d),
                (g[7] = u),
                (g[8] = h))
              : (h = g[8]),
            h
          )
        },
      },
    )
  },
  TVpO(e, t, a) {
    var l = a("zPtR"),
      r = a("dSuP"),
      s = a("T8X0"),
      i = a("yGJW"),
      n = a("eShZ")
    let o = "CHATGPT_FILE_LIBRARY_ORIGIN_RECENTLY_DELETED_SCREEN"
    a.d(
      t,
      {},
      {
        g: function (e, t) {
          ;(0, i.yy)(e, r.Lq, {
            artifactIds: t.map(({ node: e }) => e.id),
            directoryIds: [],
            itemCount: (0, l.PZ)(t.length),
            libraryOrigin: o,
          })
        },
        h: function (e, t, a, l) {
          ;(0, i.yy)(e, r.pG, {
            interactionType: a,
            sessionId: t,
            libraryVariant: "CHATGPT_FILE_LIBRARY_VARIANT_DEFAULT",
            productExperience: e.get(s.pc),
            libraryOrigin: o,
            operation: "CHATGPT_FILE_LIBRARY_OPERATION_PERMANENT_DELETE",
            scope: "CHATGPT_FILE_LIBRARY_SCOPE_ALL",
            error: (function (e) {
              if (!(e instanceof n.FetchError)) return
              let t = e.responseStatus,
                a = "network" === e.errorKind || null == t
              return {
                type: a
                  ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_NETWORK_ERROR"
                  : 408 === t || 504 === t
                    ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_TIMEOUT"
                    : 401 === t || 403 === t
                      ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_AUTH_ERROR"
                      : 429 === t
                        ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_RATE_LIMITED"
                        : t >= 500
                          ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_SERVER_ERROR"
                          : t >= 400
                            ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_BAD_REQUEST"
                            : "CHATGPT_FILE_LIBRARY_ERROR_TYPE_INVALID_RESPONSE",
                code: null != e.errorCode && /^[a-z0-9_-]{1,64}$/i.test(e.errorCode) ? e.errorCode : void 0,
                httpStatus: !a && Number.isInteger(t) && t >= 100 && t <= 599 ? t : void 0,
              }
            })(l),
          })
        },
      },
    )
  },
  VpUQ(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      s = a("qmMi"),
      i = a("oyxz"),
      n = a("MM0V"),
      o = a("JNtf"),
      c = a("mUDD"),
      d = a("Bbed"),
      u = a("X6Vn"),
      h = a("e1xH"),
      g = a("cGrE"),
      f = a("jU86"),
      m = a("TVpO")
    let p = (0, d._)(async () => (await a.e(327702).then(a.bind(a, "iKaf"))).EmptyLibraryTrashDialog, {
        errorFallback: function (e) {
          let t,
            a,
            s,
            n,
            d = (0, r.c)(6),
            { onClose: u } = e
          return (
            d[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = { "aria-describedby": void 0 }), (d[0] = t))
              : (t = d[0]),
            d[1] !== u
              ? ((a = (e) => {
                  e || u()
                }),
                (d[1] = u),
                (d[2] = a))
              : (a = d[2]),
            d[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, l.jsx)(c.R4, {
                  children: (0, l.jsx)(c.OO, {
                    children: (0, l.jsx)(c.c7, {
                      title: (0, l.jsx)(o.L3, {
                        children: (0, l.jsx)(i.A, {
                          id: "library.emptyTrash.loadError.title",
                          defaultMessage: "Couldn\u2019t open Empty file trash",
                        }),
                      }),
                      subtitle: (0, l.jsx)(i.A, {
                        id: "library.emptyTrash.loadError.reload",
                        defaultMessage: "Reload the app and try again",
                      }),
                    }),
                  }),
                })),
                (d[3] = s))
              : (s = d[3]),
            d[4] !== a
              ? ((n = (0, l.jsx)(o.lG, { open: !0, contentProps: t, onOpenChange: a, children: s })),
                (d[4] = a),
                (d[5] = n))
              : (n = d[5]),
            n
          )
        },
      }),
      y = (0, s.un)(f.Qy, ({ get: e, scope: t }) => {
        if (
          ("/space" !== t.value.basePath && "/space/files" !== t.value.basePath) ||
          !t.value.deleted ||
          null != t.value.directoryId ||
          "favorites" === t.value.tab ||
          "recent" === t.value.tab ||
          "" !== t.value.search.trim() ||
          t.value.categories.length > 0 ||
          t.value.sources.length > 0
        )
          return !1
        let { isPending: a, isFetching: l, isError: r, hasNextPage: s } = e(f.i3)
        return !a && !l && !r && !s && !e(f.nt) && "available" === e(f.IM) && e(f.PP)?.length === 0
      })
    function v(e) {
      let t,
        a,
        n,
        o,
        c = (0, r.c)(13),
        { content: d } = e,
        v = (0, s.gh)(f.Qy),
        _ = (0, s.Ul)(f.YV),
        b = (0, s.Ul)(f.nt),
        I = (0, s.Ul)(h.Op),
        A = (0, s.Ul)(I ? f.RK : null)
      if ((0, s.Ul)(y) && !A) return null
      c[0] !== v || c[1] !== I
        ? ((t =
            I || "/space" === v.value.basePath
              ? (0, l.jsx)(i.A, { id: "library.emptyTrash.shortAction", defaultMessage: "Empty trash" })
              : (0, l.jsx)(i.A, { id: "library.emptyTrash.action", defaultMessage: "Empty file trash" })),
          (c[0] = v),
          (c[1] = I),
          (c[2] = t))
        : (t = c[2])
      let j = t
      if (A) {
        let e
        ;(c[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(i.A, { id: "library.emptyTrash.pending", defaultMessage: "Emptying trash\u2026" })),
            (c[3] = e))
          : (e = c[3]),
          (j = e))
      }
      let E = _ || b || !!A
      return (
        c[4] !== v
          ? ((a = () => {
              let e = v.get(g.Vu).sessionId
              ;((0, m.h)(v, e, "CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_INITIATED"),
                (0, u.qf)(v, p, { accountId: v.value.accountId, userId: v.value.userId, sessionId: e }))
            }),
            (c[4] = v),
            (c[5] = a))
          : (a = c[5]),
        c[6] !== j || c[7] !== E || c[8] !== a
          ? ((n = { label: j, disabled: E, onClick: a }), (c[6] = j), (c[7] = E), (c[8] = a), (c[9] = n))
          : (n = c[9]),
        c[10] !== d || c[11] !== n
          ? ((o = (0, l.jsx)(x, { content: d, emptyTrashAction: n })), (c[10] = d), (c[11] = n), (c[12] = o))
          : (o = c[12]),
        o
      )
    }
    function x(e) {
      let t,
        a,
        o = (0, r.c)(8),
        { content: c, emptyTrashAction: d } = e,
        u = (0, s.Ul)(h.Op)
      o[0] !== c || o[1] !== u
        ? ((t =
            c ??
            (u
              ? (0, l.jsx)(i.A, {
                  id: "libraryNext.trash.unifiedDescription",
                  defaultMessage: "Restore items you've recently deleted. Items are permanently deleted after 30 days.",
                })
              : (0, l.jsx)(i.A, {
                  id: "libraryNext.trash.description",
                  defaultMessage: "Restore files you've recently deleted. Files are deleted forever after 30 days.",
                }))),
          (o[0] = c),
          (o[1] = u),
          (o[2] = t))
        : (t = o[2])
      let g = d?.label,
        f = d?.disabled,
        m = d?.onClick
      return (
        o[3] !== t || o[4] !== g || o[5] !== f || o[6] !== m
          ? ((a = (0, l.jsx)("div", {
              className: "mb-3 select-none",
              children: (0, l.jsx)(n.l, {
                variant: "insetNotice",
                primaryCtaColor: "outlineSurface",
                content: t,
                primaryCtaText: g,
                isPrimaryCtaDisabled: f,
                onPrimaryCtaClick: m,
              }),
            })),
            (o[3] = t),
            (o[4] = g),
            (o[5] = f),
            (o[6] = m),
            (o[7] = a))
          : (a = o[7]),
        a
      )
    }
    a.d(
      t,
      {},
      {
        e: function (e) {
          let t,
            a = (0, r.c)(5),
            { content: s, showEmptyFileTrash: i, emptyTrashAction: n } = e
          if (null == n && (void 0 === i || i)) {
            let e
            return (a[0] !== s ? ((e = (0, l.jsx)(v, { content: s })), (a[0] = s), (a[1] = e)) : (e = a[1]), e)
          }
          return (
            a[2] !== s || a[3] !== n
              ? ((t = (0, l.jsx)(x, { content: s, emptyTrashAction: n })), (a[2] = s), (a[3] = n), (a[4] = t))
              : (t = a[4]),
            t
          )
        },
      },
    )
  },
  Vcg4(e, t, a) {
    var l = a("QosV"),
      r = a("dSuP"),
      s = a("D015"),
      i = a("D7Ms"),
      n = a("NxBK"),
      o = a("qmMi"),
      c = a("zd8w"),
      d = a("yGJW"),
      u = a("cGrE"),
      h = a("TCFx"),
      g = a("jU86"),
      f = a("RjIR"),
      m = a("vq5I"),
      p = a("F1Es")
    let y = (0, o.un)(g.Qy, (e) => (0, i.EN)(g.i3.getOptions(e).queryKey)),
      v = (0, o.A4)(
        g.Qy,
        (e) => null,
        (e, { scope: t, set: a }) => {
          let l,
            r = t.value.deleted ? "CHATGPT_FILE_LIBRARY_ORIGIN_RECENTLY_DELETED_SCREEN" : u._0,
            i = t.queryClient.getQueryCache(),
            o = (0, m.Pw)(t.value.deleted ? null : t.value.directoryId),
            c = (e, t = !1) => {
              if ("idle" === e.state.fetchStatus) return
              let s =
                e.state.fetchMeta?.fetchMore?.direction === "forward"
                  ? "CHATGPT_FILE_LIBRARY_LOAD_TYPE_APPEND"
                  : "CHATGPT_FILE_LIBRARY_LOAD_TYPE_REFRESH"
              ;(t || l?.loadType !== s) &&
                ((l = { loadType: s, operationId: crypto.randomUUID(), startedAt: performance.now() }),
                a({
                  loadType: s,
                  operationId: l.operationId,
                  libraryOrigin: r,
                  provider: o,
                  trigger: (0, p.e)(e, t ? "start" : "active"),
                }))
            },
            d = i.subscribe((d) => {
              if (d.query.queryHash !== e) return
              if ("removed" === d.type) {
                l = void 0
                return
              }
              if ("updated" !== d.type) return
              let u = i.get(e)
              if (null != u && u === d.query) {
                if ("fetch" === d.action.type || "continue" === d.action.type)
                  return void c(u, "fetch" === d.action.type)
                if (null != l)
                  if ("success" === d.action.type) {
                    if (!0 === d.action.manual) return
                    let { loadType: e, operationId: i, startedAt: n } = l
                    l = void 0
                    let c = t.query.getData(g.i3)
                    a({
                      loadType: e,
                      operationId: i,
                      latencyMs: (0, s.N3)(Math.max(0, performance.now() - n), "round"),
                      libraryOrigin: r,
                      provider: o,
                      success: !0,
                      itemCount: (0, s.PZ)((0, h.yF)(c?.pages ?? []).length),
                    })
                  } else if ("error" === d.action.type) {
                    let { loadType: e, operationId: t, startedAt: i } = l
                    ;((l = void 0),
                      d.action.error instanceof n.cc ||
                        a({
                          loadType: e,
                          operationId: t,
                          latencyMs: (0, s.N3)(Math.max(0, performance.now() - i), "round"),
                          libraryOrigin: r,
                          provider: o,
                          success: !1,
                          errorType: "request_failed",
                          error: (0, m.QJ)(d.action.error),
                        }))
                  } else "setState" === d.action.type && "idle" === u.state.fetchStatus && (l = void 0)
              }
            }),
            f = i.get(e)
          return (null != f && c(f), d)
        },
      )
    a.d(
      t,
      {},
      {
        i: function (e) {
          let t,
            a,
            i,
            n,
            h,
            p,
            x,
            _ = (0, l.c)(21),
            { initialEntryPoint: b } = e,
            I = (0, o.gh)(g.vn),
            A = (0, o.gh)(g.Qy),
            [j] = (0, c.useState)(b),
            E = (0, o.Ul)(y),
            T = A.value.deleted ? "CHATGPT_FILE_LIBRARY_ORIGIN_RECENTLY_DELETED_SCREEN" : u._0,
            C = (0, c.useRef)(T),
            R = (0, c.useRef)(void 0)
          _[0] !== A || _[1] !== j || _[2] !== T || _[3] !== I
            ? ((t = () => {
                let e = I.get(u.Vu),
                  t = C.current
                return (
                  (C.current = T),
                  (t === T &&
                    "favorites" === A.value.tab &&
                    null == A.value.directoryId &&
                    !A.value.deleted &&
                    A.get(f._)) ||
                    (0, d.yy)(I, r.N6, {
                      ...e,
                      action: "CHATGPT_FILE_LIBRARY_ACTION_SHOWN",
                      libraryOrigin: T,
                      entryPoint: j,
                      layout:
                        "grid" === A.get(g.YH)
                          ? "CHATGPT_FILE_LIBRARY_LAYOUT_GRID"
                          : "CHATGPT_FILE_LIBRARY_LAYOUT_LIST",
                    }),
                  e
                )
              }),
              (_[0] = A),
              (_[1] = j),
              (_[2] = T),
              (_[3] = I),
              (_[4] = t))
            : (t = _[4])
          let L = (0, c.useEffectEvent)(t)
          return (
            _[5] !== T || _[6] !== L || _[7] !== I
              ? ((a = () => {
                  let e = L()
                  return () => {
                    ;(0, d.yy)(I, r.N6, { ...e, action: "CHATGPT_FILE_LIBRARY_ACTION_DISMISSED", libraryOrigin: T })
                  }
                }),
                (_[5] = T),
                (_[6] = L),
                (_[7] = I),
                (_[8] = a))
              : (a = _[8]),
            _[9] !== T || _[10] !== I ? ((i = [I, T]), (_[9] = T), (_[10] = I), (_[11] = i)) : (i = _[11]),
            (0, c.useEffect)(a, i),
            _[12] !== A || _[13] !== E || _[14] !== I
              ? ((n = () => {
                  if ("favorites" === A.value.tab && null == A.value.directoryId && !A.value.deleted) return
                  let e = A.watch((e) => {
                    let t = e.get(v, E)
                    null != t && (0, d.yy)(I, r.Xz, { ...I.get(u.Vu), ...t })
                  })
                  return () => {
                    ;(e(), (0, o.st)(A, v, E))
                  }
                }),
                (h = [E, A, I]),
                (_[12] = A),
                (_[13] = E),
                (_[14] = I),
                (_[15] = n),
                (_[16] = h))
              : ((n = _[15]), (h = _[16])),
            (0, c.useEffect)(n, h),
            _[17] !== A || _[18] !== I
              ? ((p = () =>
                  A.watch((e) => {
                    let t,
                      { search: a, tab: l, directoryId: i, deleted: n, categories: o, sources: c } = e.value
                    if (
                      a ||
                      ("favorites" === l && null == i && !n) ||
                      ("library:collection:shared-with-me" === i && !n && 0 === o.length && 0 === c.length)
                    ) {
                      R.current = void 0
                      return
                    }
                    let h = e.get(g.i3, { enabled: !1 })
                    if (null == h.data || h.isPending || h.isFetching || h.isError) return
                    let f = e.get(g.q3)
                    if (null == f || (0 === f.length && h.hasNextPage)) return
                    let p = o.length > 0 || c.length > 0 || "images" === l || ("folders" === l && null == i)
                    0 === f.length &&
                      (t = p
                        ? "CHATGPT_FILE_LIBRARY_EMPTY_REASON_FILTER"
                        : null != i
                          ? "CHATGPT_FILE_LIBRARY_EMPTY_REASON_EMPTY_FOLDER"
                          : "CHATGPT_FILE_LIBRARY_EMPTY_REASON_NO_LIBRARY_FILES")
                    let v = JSON.stringify([e.get(y), h.dataUpdatedAt, f.length, p, t])
                    R.current !== v &&
                      ((R.current = v),
                      (0, d.yy)(I, r.oq, {
                        ...I.get(u.Vu),
                        visibleItemCount: (0, s.PZ)(f.length),
                        emptyReason: t,
                        provider: (0, m.Pw)(i),
                      }))
                  })),
                (x = [A, I]),
                (_[17] = A),
                (_[18] = I),
                (_[19] = p),
                (_[20] = x))
              : ((p = _[19]), (x = _[20])),
            (0, c.useEffect)(p, x),
            null
          )
        },
      },
    )
  },
  iMhR(e, t, a) {
    var l = a("qmMi"),
      r = a("e1xH"),
      s = a("khOd"),
      i = a("OMIV"),
      n = a("jU86"),
      o = a("ahQQ")
    let c = {
        ...(0, n.ER)("/space/files", "?tab=images", "/space/files"),
        entrySurface: "spaces",
        includePages: !1,
        includeSites: !1,
        imageSourceTabs: !0,
        sources: ["generated"],
        defaultViewMode: "list",
      },
      d = { ...c, includePinnedSites: !1 },
      u = (0, l.un)(
        o.vn,
        ({ get: e, scope: t }) =>
          !t.value.embedded && e(s.GB) && !e(r.TV) && e(i.JW, "2092319279") && e(i.JW, "2006373213"),
      ),
      h = (0, l.vP)(o.vn, null)
    a.d(t, {}, { BG: d, Br: c, rV: u, wA: h })
  },
  X5eB(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      s = a("NxBK"),
      i = a("qmMi"),
      n = a("zd8w"),
      o = a("PFjh"),
      c = a("SPnB"),
      d = a("tl2n"),
      u = a("e1xH"),
      h = a("XPum"),
      g = a("khOd"),
      f = a("OMIV"),
      m = a("jU86"),
      p = a("ahQQ"),
      y = a("iMhR")
    let v = (0, i.vP)(p.vn, () => new Set()),
      x = (0, i.SZ)(
        p.Qy,
        () => null,
        ({ get: e, set: t, scope: a }) => {
          let l,
            r = a.getOwnValue(p.Qy),
            s = e(h.i)
          if (
            (t(null),
            "/space" !== r.basePath ||
              "suggested" !== r.tab ||
              null != r.directoryId ||
              !r.includePages ||
              r.search ||
              r.categories.length > 0 ||
              r.sources.length > 0 ||
              r.deleted ||
              (s && (a.value.embedded || e(u.TV) || !e(g.GB))) ||
              !e(f.JW, "2092319279") ||
              !e(d.$7) ||
              a.value.accountId !== e(c.chatGptAuthenticatedAccountId$) ||
              null == a.value.userId ||
              a.value.userId !== e(c.chatGptAuthenticatedUserId$))
          )
            return
          let i = s
            ? []
            : [
                { ...r, tab: "all" },
                { ...r, tab: "favorites", includePages: !1 },
              ]
          s ? e(y.rV) && i.push(y.BG) : i.push(y.Br)
          let n = () => {
            ;(clearTimeout(l), t(null), "visible" === document.visibilityState && (l = setTimeout(() => t(i), 1e3)))
          }
          return (
            n(),
            document.addEventListener("visibilitychange", n),
            () => {
              ;(clearTimeout(l), document.removeEventListener("visibilitychange", n))
            }
          )
        },
      )
    function _(e) {
      return (0, l.jsx)(i.Ui, { scope: p.Qy, value: e, children: (0, l.jsx)(b, { destination: e }) }, e.tab)
    }
    function b(e) {
      let t,
        a,
        l = (0, r.c)(4),
        { destination: o } = e,
        d = (0, i.gh)(p.Qy)
      return (
        l[0] !== o || l[1] !== d
          ? ((t = () => {
              var e, t
              return (
                (e = d),
                (t = o),
                e.watch((a) => {
                  let l = a.query.getOptions(m.i3),
                    r = l.queryFn
                  if (
                    !1 === l.enabled ||
                    "function" != typeof r ||
                    e.value.accountId !== a.get(c.chatGptAuthenticatedAccountId$) ||
                    e.value.userId !== a.get(c.chatGptAuthenticatedUserId$)
                  )
                    return
                  let i = "images" === t.tab,
                    n = t === y.BG
                  i && e.set(y.wA, t)
                  let o = e.queryClient.getQueryCache().build(e.queryClient, l)
                  if (null != o.state.data || "idle" !== o.state.fetchStatus || e.get(v).has(o.queryHash)) return
                  e.set(v, (e) => new Set([...e, o.queryHash]))
                  let d = () =>
                    e.value.accountId === e.get(c.chatGptAuthenticatedAccountId$) &&
                    e.value.userId === e.get(c.chatGptAuthenticatedUserId$)
                  e.queryClient.prefetchInfiniteQuery({
                    ...l,
                    pages: 1,
                    queryFn: async (t) => {
                      try {
                        if (!d() || (n && !o.isActive() && !e.get(y.rV))) throw new s.cc()
                        let a = await r(
                          i && !o.isActive()
                            ? {
                                ...t,
                                meta: {
                                  ...t.meta,
                                  generatedImagesListingPhase: n ? "home_prefetch" : "other_destination",
                                },
                              }
                            : t,
                        )
                        if (!d()) throw new s.cc()
                        return a
                      } catch (e) {
                        throw (
                          !n || t.signal.aborted || o.isActive() || null != o.state.data || o.cancel({ revert: !0 }),
                          e
                        )
                      }
                    },
                    retry: (e, t) => {
                      if (!o.isActive() || !d() || t instanceof s.cc) return !1
                      let a = l.retry ?? 3
                      return "function" == typeof a ? a(e, t) : !0 === a || ("number" == typeof a && e < a)
                    },
                  })
                })
              )
            }),
            (a = [d, o]),
            (l[0] = o),
            (l[1] = d),
            (l[2] = t),
            (l[3] = a))
          : ((t = l[2]), (a = l[3])),
        (0, n.useEffect)(t, a),
        null
      )
    }
    a.d(
      t,
      {},
      {
        $: function () {
          let e,
            t,
            a,
            s,
            c = (0, r.c)(8),
            d = (0, i.gh)(p.Qy),
            g = (0, i.Ul)(x),
            m = (0, n.useRef)(null)
          return (c[0] !== g || c[1] !== d
            ? ((e = () => {
                null != g &&
                  m.current !== d &&
                  d.get(h.i) &&
                  ((m.current = d),
                  d
                    .get(o.T$)
                    .count("codex_pages", "generated_images_home_eligible", {
                      home_surface: d.get(u.TV) ? "v2" : "legacy",
                      arm: d.get(f.JW, "2006373213") ? "treatment" : "control",
                      thumbnail_prefetch: d.get(f.JW, "2457328746") ? "on" : "off",
                    }))
              }),
              (t = [d, g]),
              (c[0] = g),
              (c[1] = d),
              (c[2] = e),
              (c[3] = t))
            : ((e = c[2]), (t = c[3])),
          (0, n.useEffect)(e, t),
          null == g)
            ? null
            : (c[4] !== g ? ((a = g.map(_)), (c[4] = g), (c[5] = a)) : (a = c[5]),
              c[6] !== a ? ((s = (0, l.jsx)(l.Fragment, { children: a })), (c[6] = a), (c[7] = s)) : (s = c[7]),
              s)
        },
      },
    )
  },
  K9Zg(e, t, a) {
    var l = a("QosV"),
      r = a("zPtR"),
      s = a("dSuP"),
      i = a("MVHH"),
      n = a("D7Ms"),
      o = a("NxBK"),
      c = a("qmMi"),
      d = a("zd8w"),
      u = a("SPnB"),
      h = a("T8X0"),
      g = a("yGJW"),
      f = a("eShZ"),
      m = a("cGrE"),
      p = a("TCFx"),
      y = a("jU86"),
      v = a("F1Es"),
      x = a("RjIR")
    let _ = "CHATGPT_FILE_LIBRARY_CATEGORY_FAVORITES",
      b = "CHATGPT_FILE_LIBRARY_ORIGIN_LIBRARY_SCREEN",
      I = {
        uploaded: "CHATGPT_FILE_LIBRARY_SOURCE_FILTER_UPLOADED",
        generated: "CHATGPT_FILE_LIBRARY_SOURCE_FILTER_GENERATED",
      },
      A = {
        meetings: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_MEETINGS",
        pages: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_PAGES",
        images: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_IMAGES",
        documents: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_DOCUMENTS",
        spreadsheets: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_SPREADSHEETS",
        presentations: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_PRESENTATIONS",
        pdfs: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_PDFS",
      }
    function j(e, t) {
      return e + (t.favoriteItemCount ?? t.items.length)
    }
    a.d(
      t,
      {},
      {
        m: function (e) {
          let t,
            a,
            E,
            T = (0, l.c)(5),
            { initialEntryPoint: C } = e,
            R = (0, c.gh)(y.Qy),
            [L] = (0, d.useState)(C)
          T[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = {}), (T[0] = t)) : (t = T[0])
          let S = (0, d.useRef)(t)
          return (
            T[1] !== L || T[2] !== R
              ? ((a = () => {
                  let e,
                    t = !0,
                    a = S.current,
                    l = () =>
                      t &&
                      "favorites" === R.value.tab &&
                      null == R.value.directoryId &&
                      !R.value.deleted &&
                      R.get(x._) &&
                      R.get(u.chatGptAuthenticatedAccountId$) === R.value.accountId &&
                      R.get(u.chatGptAuthenticatedUserId$) === R.value.userId,
                    c = () => ({
                      sessionId: R.get(m.Vu).sessionId,
                      libraryVariant: "CHATGPT_FILE_LIBRARY_VARIANT_DEFAULT",
                      productExperience: "work" === R.get(h.uI) ? "work" : "chat",
                    }),
                    d = () => {
                      a.operation = { operationId: crypto.randomUUID(), startedAtMs: performance.now() }
                    },
                    E = (e) => {
                      ;(0, g.yy)(R, s.N6, { ...c(), libraryOrigin: b, ...e })
                    },
                    T = R.queryClient.getQueryCache().subscribe((t) => {
                      if (
                        ("updated" === t.type || "removed" === t.type) &&
                        l() &&
                        t.query.queryHash === (0, n.EN)(R.query.getOptions(y.i3).queryKey)
                      ) {
                        if ("removed" === t.type) {
                          e = void 0
                          return
                        }
                        if ("fetch" === t.action.type)
                          ((e = {
                            operationId: crypto.randomUUID(),
                            startedAtMs: performance.now(),
                            loadType:
                              t.query.state.fetchMeta?.fetchMore?.direction === "forward"
                                ? "CHATGPT_FILE_LIBRARY_LOAD_TYPE_APPEND"
                                : "CHATGPT_FILE_LIBRARY_LOAD_TYPE_REFRESH",
                          }),
                            (null == a.operation || a.operation.operationId === a.lastResultsOperationId) && d(),
                            (0, g.yy)(R, s.Xz, {
                              ...c(),
                              category: _,
                              libraryOrigin: b,
                              operationId: e.operationId,
                              loadType: e.loadType,
                              trigger: (0, v.e)(t.query, "start"),
                            }))
                        else if (
                          null == e ||
                          ("error" !== t.action.type && ("success" !== t.action.type || t.action.manual))
                        )
                          "setState" === t.action.type && "idle" === t.query.state.fetchStatus && (e = void 0)
                        else {
                          let a = e
                          if (((e = void 0), "error" === t.action.type && t.action.error instanceof o.cc)) return
                          let l = "success" === t.action.type
                          ;(0, g.yy)(R, s.Xz, {
                            ...c(),
                            category: _,
                            libraryOrigin: b,
                            success: l,
                            operationId: a.operationId,
                            loadType: a.loadType,
                            latencyMs: (0, r.N3)(performance.now() - a.startedAtMs, "round"),
                            itemCount: l ? (0, r.PZ)(R.query.getData(y.i3)?.pages.reduce(j, 0) ?? 0) : void 0,
                            errorType: l ? void 0 : "request_failed",
                            error:
                              "error" === t.action.type
                                ? (function (e) {
                                    if (!(e instanceof f.FetchError)) return
                                    let t = e.responseStatus,
                                      a = "network" === e.errorKind || null == t,
                                      l =
                                        null != e.errorCode && /^[a-z0-9_-]{1,64}$/i.test(e.errorCode)
                                          ? e.errorCode
                                          : void 0,
                                      r = l?.toLowerCase()
                                    return {
                                      type: a
                                        ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_NETWORK_ERROR"
                                        : 507 === t || r?.includes("storage_limit") || r?.includes("quota")
                                          ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_STORAGE_LIMIT"
                                          : 404 === t ||
                                              r?.includes("missing_library_file") ||
                                              r?.includes("library_file_not_found") ||
                                              "file_not_found" === r ||
                                              "file_expired" === r
                                            ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_MISSING_LIBRARY_FILE"
                                            : 408 === t || 504 === t
                                              ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_TIMEOUT"
                                              : 401 === t || 403 === t
                                                ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_AUTH_ERROR"
                                                : 429 === t
                                                  ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_RATE_LIMITED"
                                                  : t >= 500
                                                    ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_SERVER_ERROR"
                                                    : t >= 400
                                                      ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_BAD_REQUEST"
                                                      : "CHATGPT_FILE_LIBRARY_ERROR_TYPE_INVALID_RESPONSE",
                                      code: l,
                                      httpStatus: !a && Number.isInteger(t) && t >= 100 && t <= 599 ? t : void 0,
                                    }
                                  })(t.action.error instanceof Error ? t.action.error : void 0)
                                : void 0,
                          })
                        }
                      }
                    }),
                    C = R.watch((e) => {
                      let t = a.location,
                        n = a.viewMode,
                        o = e.get(y.YH)
                      ;((a.location = e.value), (a.viewMode = o))
                      let h = e.get(x._),
                        f = e.get(u.chatGptAuthenticatedAccountId$),
                        m = e.get(u.chatGptAuthenticatedUserId$)
                      if (!h || f !== e.value.accountId || m !== e.value.userId || !l()) {
                        ;((a.active = !1), (a.hadLoadError = !1))
                        return
                      }
                      let v = "grid" === o ? "CHATGPT_FILE_LIBRARY_LAYOUT_GRID" : "CHATGPT_FILE_LIBRARY_LAYOUT_LIST",
                        b = "grid" === o ? "library_grid" : "library_list",
                        j = JSON.stringify(t?.sources) !== JSON.stringify(e.value.sources),
                        T = JSON.stringify(t?.categories) !== JSON.stringify(e.value.categories)
                      if (a.active) {
                        if (n !== o || j || T || t?.search.toLocaleLowerCase() !== e.value.search.toLocaleLowerCase()) {
                          d()
                          let a = "CHATGPT_FILE_LIBRARY_ACTION_VIEW_CHANGED"
                          if (
                            (n !== o &&
                              E({
                                action: a,
                                layout: v,
                                changedProperty: "CHATGPT_FILE_LIBRARY_CHANGED_PROPERTY_LAYOUT",
                              }),
                            t?.sources[0] !== e.value.sources[0])
                          ) {
                            let t = e.value.sources[0]
                            E({
                              action: a,
                              changedProperty: "CHATGPT_FILE_LIBRARY_CHANGED_PROPERTY_SOURCE_FILTER",
                              sourceFilter: null == t ? "CHATGPT_FILE_LIBRARY_SOURCE_FILTER_NONE" : I[t],
                            })
                          }
                          if (t?.categories[0] !== e.value.categories[0]) {
                            let t = e.value.categories[0]
                            E({
                              action: a,
                              changedProperty: "CHATGPT_FILE_LIBRARY_CHANGED_PROPERTY_FILE_TYPE_FILTER",
                              fileTypeFilter: null == t ? "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_NONE" : A[t],
                            })
                          }
                        }
                      } else
                        (d(),
                          E({
                            action:
                              null == t
                                ? "CHATGPT_FILE_LIBRARY_ACTION_SHOWN"
                                : "CHATGPT_FILE_LIBRARY_ACTION_VIEW_CHANGED",
                            changedProperty: null == t ? void 0 : "CHATGPT_FILE_LIBRARY_CHANGED_PROPERTY_CATEGORY",
                            category: _,
                            layout: v,
                            entryPoint: null == t ? L : void 0,
                            operationId: a.operation?.operationId,
                          }),
                          (0, g.yy)(e, i.aF, {
                            eventType: "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_BOOKMARKS_TAB_VIEWED",
                            surface: b,
                            viewMode: o,
                          }))
                      a.active = !0
                      let C = e.get(y.sp).favoritesServerFiltering,
                        R = e.get(y.i3, { enabled: !1 })
                      ;(R.isError &&
                        !a.hadLoadError &&
                        (0, g.yy)(e, i.aF, {
                          eventType: "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_BOOKMARKS_LOAD_ERROR",
                          surface: b,
                          result: "error",
                          viewMode: o,
                        }),
                        (a.hadLoadError = R.isError))
                      let S = a.operation,
                        M = e.get(y.en)
                      if (
                        null == S ||
                        S.operationId === a.lastResultsOperationId ||
                        null == R.data ||
                        R.isPending ||
                        R.isFetching ||
                        R.isError ||
                        (!C &&
                          (e.value.search || e.value.categories.length > 0 || e.value.sources.length > 0) &&
                          R.hasNextPage)
                      )
                        return
                      let P = R.data.pages
                      queueMicrotask(() => {
                        let t
                        if (
                          !l() ||
                          a.operation !== S ||
                          a.lastResultsOperationId === S.operationId ||
                          e.get(y.i3, { enabled: !1 }).isFetching
                        )
                          return
                        let i = (0, p.me)(P).filter((e) => !M.has((0, p.sm)(e))).length
                        ;(0 === i && (C || !e.value.search) && R.hasNextPage) ||
                          ((a.lastResultsOperationId = S.operationId),
                          0 !== i ||
                            e.value.search ||
                            (t =
                              e.value.categories.length > 0 || e.value.sources.length > 0
                                ? "CHATGPT_FILE_LIBRARY_EMPTY_REASON_FILTER"
                                : "CHATGPT_FILE_LIBRARY_EMPTY_REASON_NO_LIBRARY_FILES"),
                          (0, g.yy)(e, s.oq, {
                            ...c(),
                            category: _,
                            operationId: S.operationId,
                            latencyMs: (0, r.N3)(performance.now() - S.startedAtMs, "round"),
                            visibleItemCount: (0, r.PZ)(i),
                            emptyReason: t,
                          }))
                      })
                    })
                  return () => {
                    ;((t = !1), C(), T())
                  }
                }),
                (E = [L, R]),
                (T[1] = L),
                (T[2] = R),
                (T[3] = a),
                (T[4] = E))
              : ((a = T[3]), (E = T[4])),
            (0, d.useLayoutEffect)(a, E),
            null
          )
        },
      },
    )
  },
  EAun(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      s = a("qmMi"),
      i = a("oyxz"),
      n = a("Sm6l"),
      o = a("jU86")
    function c(e) {
      let t,
        a,
        c,
        d,
        u,
        h = (0, r.c)(13),
        { error: g, paint: f } = e,
        m = (0, s.gh)(o.Qy),
        { data: p } = (0, s.Ul)(o.rQ)
      return (
        h[0] !== g
          ? ((t =
              "not-found" === g
                ? (0, l.jsx)(i.A, {
                    id: "library.folder.notFoundOrNoAccess",
                    defaultMessage: "This folder doesn\u2019t exist or you don\u2019t have access",
                  })
                : (0, l.jsx)(i.A, {
                    id: "artifacts.folder_surface.sharepoint.permission_denied.description",
                    defaultMessage: "You don\u2019t have permission to view this site or folder.",
                  })),
            (h[0] = g),
            (h[1] = t))
          : (t = h[1]),
        h[2] !== p?.items || h[3] !== p?.items.at || h[4] !== m
          ? ((a = () => {
              let e = p?.items.at(-2)
              ;(0, o.zl)(m, (0, o.SE)({ ...m.value, directoryId: e?.is_root ? null : (e?.id ?? null) }))
            }),
            (h[2] = p?.items),
            (h[3] = p?.items.at),
            (h[4] = m),
            (h[5] = a))
          : (a = h[5]),
        h[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, l.jsx)(i.A, {
              id: "artifacts.folder_surface.sharepoint.permission_denied.button.back",
              defaultMessage: "Go back",
            })),
            (h[6] = c))
          : (c = h[6]),
        h[7] !== a ? ((d = (0, l.jsx)(n.$, { onClick: a, children: c })), (h[7] = a), (h[8] = d)) : (d = h[8]),
        h[9] !== f || h[10] !== t || h[11] !== d
          ? ((u = (0, l.jsxs)("div", {
              className: "flex flex-col items-center gap-4 py-12",
              role: "alert",
              children: [f, t, d],
            })),
            (h[9] = f),
            (h[10] = t),
            (h[11] = d),
            (h[12] = u))
          : (u = h[12]),
        u
      )
    }
    a.d(
      t,
      {},
      {
        _: function (e) {
          let t,
            a,
            s,
            o,
            d = (0, r.c)(12),
            { favorites: u, onRetry: h, folderError: g, paint: f } = e
          if (null != g) {
            let e
            return (
              d[0] !== g || d[1] !== f
                ? ((e = (0, l.jsx)(c, { error: g, paint: f })), (d[0] = g), (d[1] = f), (d[2] = e))
                : (e = d[2]),
              e
            )
          }
          return (
            d[3] !== u
              ? ((t = u
                  ? (0, l.jsx)(i.A, { id: "library.favorites.loadFailed", defaultMessage: "Failed to load favorites" })
                  : (0, l.jsx)(i.A, { id: "libraryNext.results.failed", defaultMessage: "Failed to load files." })),
                (d[3] = u),
                (d[4] = t))
              : (t = d[4]),
            d[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, l.jsx)(i.A, { id: "libraryNext.results.retry", defaultMessage: "Try again" })), (d[5] = a))
              : (a = d[5]),
            d[6] !== h ? ((s = (0, l.jsx)(n.$, { onClick: h, children: a })), (d[6] = h), (d[7] = s)) : (s = d[7]),
            d[8] !== f || d[9] !== t || d[10] !== s
              ? ((o = (0, l.jsxs)("div", {
                  className: "flex flex-col items-center gap-4 py-12",
                  role: "alert",
                  children: [f, t, s],
                })),
                (d[8] = f),
                (d[9] = t),
                (d[10] = s),
                (d[11] = o))
              : (o = d[11]),
            o
          )
        },
      },
    )
  },
  fhVa(e, t, a) {
    a.a(e, async function (e, l) {
      try {
        var r = a("ABep"),
          s = a("QosV"),
          i = a("on57"),
          n = a("qmMi"),
          o = a("zd8w"),
          c = a("Ywss"),
          d = a("jNL7"),
          u = a("Bbed"),
          h = a("e1xH"),
          g = a("atiu"),
          f = a("CLFW"),
          m = a("Goes"),
          p = a("sg90"),
          y = a("pdPj"),
          v = a("V080"),
          x = a("VpUQ"),
          _ = a("cGrE"),
          b = a("Vcg4"),
          I = a("jU86"),
          A = a("X5eB"),
          j = a("K9Zg"),
          E = a("XmDk"),
          T = a("kQiD"),
          C = a("aYWA"),
          R = a("BV4m"),
          L = a("dLIb"),
          S = a("wHLp"),
          M = a("M4Gn"),
          P = a("QoH2"),
          N = a("Wg4b"),
          w = a("NCaE"),
          F = a("LVlF"),
          U = a("ph9v"),
          Y = a("jx6J"),
          O = e([E])
        E = (O.then ? (await O)() : O)[0]
        let k = (0, u._)(async () => (await a.e(353533).then(a.bind(a, "XVyS"))).PendingPageArchives),
          V = (0, u._)(async () => (await a.e(856236).then(a.bind(a, "USMx"))).PendingSpaceArchives),
          z = (0, u._)(async () => (await a.e(398281).then(a.bind(a, "QScO"))).SpaceTrashItems, {
            fallback: (0, r.jsx)(f.D, {}),
          })
        function B(e) {
          return (0, r.jsx)(G, { onOpenItem: e })
        }
        function G(e) {
          let t,
            a,
            l,
            i,
            d,
            u,
            h,
            g,
            f = (0, s.c)(25),
            { onOpenItem: m } = e,
            p = (0, c.zy)(),
            y = (0, c.Zp)()
          f[0] !== p.search ? ((t = (0, S.G)(p.search)), (f[0] = p.search), (f[1] = t)) : (t = f[1])
          let v = t
          ;(f[2] !== p.hash || f[3] !== p.pathname || f[4] !== p.search || f[5] !== p.state || f[6] !== y
            ? ((a = () => {
                let e = new URLSearchParams(p.search)
                e.has("entry_point") &&
                  ((0, I.ER)(p.pathname, p.search).storageCleanup && e.set("storage_cleanup", "true"),
                  e.delete("entry_point"),
                  y({ pathname: p.pathname, search: e.toString(), hash: p.hash }, { replace: !0, state: p.state }))
              }),
              (f[2] = p.hash),
              (f[3] = p.pathname),
              (f[4] = p.search),
              (f[5] = p.state),
              (f[6] = y),
              (f[7] = a))
            : (a = f[7]),
            f[8] !== p || f[9] !== y ? ((l = [p, y]), (f[8] = p), (f[9] = y), (f[10] = l)) : (l = f[10]),
            (0, o.useEffect)(a, l))
          let x = p.state
          return (
            f[12] === Symbol.for("react.memo_cache_sentinel") ? ((i = {}), (f[12] = i)) : (i = f[12]),
            f[13] !== p.pathname || f[14] !== p.search || f[15] !== x
              ? ((d = (0, I.ER)(p.pathname, p.search, "/library", x)),
                (f[13] = p.pathname),
                (f[14] = p.search),
                (f[15] = x),
                (f[16] = d))
              : (d = f[16]),
            f[17] !== d ? ((u = { ...d, entrySurface: "library" }), (f[17] = d), (f[18] = u)) : (u = f[18]),
            f[19] !== v || f[20] !== m
              ? ((h = (0, r.jsx)(H, { entryPoint: v, onOpenItem: m })), (f[19] = v), (f[20] = m), (f[21] = h))
              : (h = f[21]),
            f[22] !== u || f[23] !== h
              ? ((g = (0, r.jsx)(n.Ui, {
                  scope: I.vn,
                  value: i,
                  children: (0, r.jsx)(n.Ui, { scope: I.Qy, value: u, children: h }),
                })),
                (f[22] = u),
                (f[23] = h),
                (f[24] = g))
              : (g = f[24]),
            g
          )
        }
        function H(e) {
          let t,
            a,
            l,
            i,
            d,
            u,
            E,
            S,
            w,
            O,
            B,
            G,
            H,
            Q,
            q,
            W,
            Z,
            $,
            K,
            J,
            X,
            ee,
            et,
            ea,
            el = (0, s.c)(113),
            {
              scrollContainerRef: er,
              entryPoint: es,
              isVisible: ei,
              onOpenItem: en,
              title: eo,
              controls: ec,
              navigation: ed,
              results: eu,
              onSelectionToolbarMount: eh,
            } = e,
            eg = void 0 === ei || ei,
            ef = (0, n.gh)(I.Qy),
            em = (0, n.Ul)(y.l),
            ep = (0, n.Ul)(I.eY),
            ey = (0, n.Ul)(P.N3),
            ev = (0, n.Ul)(ef.value.deleted ? h.GU : null),
            ex = (0, n.Ul)(ef.value.deleted ? h.Op : null),
            e_ = (0, n.Ul)(ex ? I.RK : null),
            eb = (0, c.zy)(),
            eI = (0, n.Ul)(I.g_)
          el[0] !== eb || el[1] !== eI
            ? ((t = null == eI ? eb : new URL(eI, "https://chatgpt.com")), (el[0] = eb), (el[1] = eI), (el[2] = t))
            : (t = el[2])
          let eA = t,
            ej = new URLSearchParams(eA.search).get("trash_kind"),
            eE = "files"
          "pages" === ej ? (eE = "pages") : "spaces" === ej && "enabled" === ev && (eE = "spaces")
          let eT = ef.value.deleted && "enabled" === ev && !ex,
            eC = !eT || "files" === eE,
            eR = (0, n.Ul)(ef.value.deleted && "loading" !== ev ? p.Q : null),
            eL = (0, o.useRef)(null),
            eS = er ?? eL
          if (
            (el[3] !== ef
              ? ((a = () => (0, I.Rd)(ef)), (l = [ef]), (el[3] = ef), (el[4] = a), (el[5] = l))
              : ((a = el[4]), (l = el[5])),
            (0, o.useEffect)(a, l),
            el[6] !== eg || el[7] !== ef
              ? ((i = () => {
                  if (eg) return (0, I.iK)(ef)
                }),
                (d = [ef, eg]),
                (el[6] = eg),
                (el[7] = ef),
                (el[8] = i),
                (el[9] = d))
              : ((i = el[8]), (d = el[9])),
            (0, o.useEffect)(i, d),
            "loading" === ev && (ex || "files" !== eE))
          ) {
            let e
            return (
              el[10] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)(f.D, {})), (el[10] = e))
                : (e = el[10]),
              e
            )
          }
          el[11] !== ef ? ((u = (e) => (0, _.np)(ef, { category: e })), (el[11] = ef), (el[12] = u)) : (u = el[12])
          let eM = u
          if (eT) {
            let e, t
            ;(el[13] !== eA.hash ||
            el[14] !== eA.pathname ||
            el[15] !== eA.search ||
            el[16] !== eb.state ||
            el[17] !== ef
              ? ((e = (e) => {
                  let t = new URLSearchParams(eA.search)
                  ;("files" === e ? t.delete("trash_kind") : t.set("trash_kind", e),
                    (0, I.zl)(ef, `${eA.pathname}?${t.toString()}${eA.hash}`, { replace: !0, state: eb.state }))
                }),
                (el[13] = eA.hash),
                (el[14] = eA.pathname),
                (el[15] = eA.search),
                (el[16] = eb.state),
                (el[17] = ef),
                (el[18] = e))
              : (e = el[18]),
              el[19] !== e || el[20] !== eE
                ? ((t = (0, r.jsx)(m.N, { kind: eE, onSelect: e })), (el[19] = e), (el[20] = eE), (el[21] = t))
                : (t = el[21]),
              (E = t))
          } else if (!ef.value.deleted && !ef.value.search && null == ef.value.directoryId) {
            let e, t
            ;(el[22] !== ef ? ((e = (e) => (0, I.zl)(ef, e)), (el[22] = ef), (el[23] = e)) : (e = el[23]),
              el[24] !== eM || el[25] !== ef.value || el[26] !== e
                ? ((t = (0, r.jsx)(M.I2, {
                    basePath: ef.value.basePath,
                    browseLocation: ef.value,
                    selectedKey: ef.value.tab,
                    onFileTabSelect: eM,
                    onNavigate: e,
                  })),
                  (el[24] = eM),
                  (el[25] = ef.value),
                  (el[26] = e),
                  (el[27] = t))
                : (t = el[27]),
              (E = t))
          }
          el[29] !== e_ || el[30] !== en || el[31] !== eu || el[32] !== ex
            ? ((S = ex
                ? (0, r.jsx)(C.Y, { onOpenItem: en, emptyingTrash: !!e_ })
                : (eu ?? (0, r.jsx)(C.Y, { onOpenItem: en }))),
              (el[29] = e_),
              (el[30] = en),
              (el[31] = eu),
              (el[32] = ex),
              (el[33] = S))
            : (S = el[33])
          let eP = S
          ;(el[34] !== eg ? ((w = eg ? (0, r.jsx)(A.$, {}) : null), (el[34] = eg), (el[35] = w)) : (w = el[35]),
            el[36] !== ef.value.accountId || el[37] !== ef.value.userId
              ? ((O = JSON.stringify([ef.value.accountId, ef.value.userId])),
                (el[36] = ef.value.accountId),
                (el[37] = ef.value.userId),
                (el[38] = O))
              : (O = el[38]),
            el[39] !== es || el[40] !== O
              ? ((B = (0, r.jsx)(j.m, { initialEntryPoint: es }, O)), (el[39] = es), (el[40] = O), (el[41] = B))
              : (B = el[41]),
            el[42] !== es || el[43] !== ef.value.accountId || el[44] !== ef.value.userId || el[45] !== eC
              ? ((G = eC
                  ? (0, r.jsx)(
                      b.i,
                      { initialEntryPoint: es },
                      `analytics:${JSON.stringify([ef.value.accountId, ef.value.userId])}`,
                    )
                  : null),
                (el[42] = es),
                (el[43] = ef.value.accountId),
                (el[44] = ef.value.userId),
                (el[45] = eC),
                (el[46] = G))
              : (G = el[46]),
            el[47] === Symbol.for("react.memo_cache_sentinel")
              ? ((H = (0, r.jsx)(R.c, {})), (el[47] = H))
              : (H = el[47]))
          let eN = !ef.value.deleted
          ;(el[48] !== eo
            ? ((Q = void 0 === eo ? (0, r.jsx)(M.e9, {}) : eo), (el[48] = eo), (el[49] = Q))
            : (Q = el[49]),
            el[50] !== ef.value.accountId || el[51] !== ef.value.userId
              ? ((q = JSON.stringify([ef.value.accountId, ef.value.userId])),
                (el[50] = ef.value.accountId),
                (el[51] = ef.value.userId),
                (el[52] = q))
              : (q = el[52]),
            el[53] !== eg || el[54] !== q
              ? ((W = (0, r.jsx)(U.M, { isVisible: eg }, q)), (el[53] = eg), (el[54] = q), (el[55] = W))
              : (W = el[55]),
            el[56] !== ec ||
            el[57] !== eT ||
            el[58] !== ef.value.accountId ||
            el[59] !== ef.value.deleted ||
            el[60] !== eC ||
            el[61] !== eR ||
            el[62] !== eE
              ? ((Z =
                  void 0 === ec
                    ? !eR &&
                      (0, r.jsx)(M.pH, {
                        showFilters: eC,
                        showBrowseControls: !eT || "spaces" !== eE,
                        actions: ef.value.deleted
                          ? void 0
                          : (0, r.jsx)(v.Rr, { handleOnboarding: !0 }, ef.value.accountId),
                      })
                    : ec),
                (el[56] = ec),
                (el[57] = eT),
                (el[58] = ef.value.accountId),
                (el[59] = ef.value.deleted),
                (el[60] = eC),
                (el[61] = eR),
                (el[62] = eE),
                (el[63] = Z))
              : (Z = el[63]))
          let ew = void 0 === ed ? E : ed
          return (
            el[64] !== eg || el[65] !== eT || el[66] !== eE || el[67] !== ex
              ? (($ = eg && (ex || (eT && "spaces" === eE)) ? (0, r.jsx)(V, {}) : null),
                (el[64] = eg),
                (el[65] = eT),
                (el[66] = eE),
                (el[67] = ex),
                (el[68] = $))
              : ($ = el[68]),
            el[69] !== eg || el[70] !== eT || el[71] !== eE || el[72] !== ex
              ? ((K = eg && (ex || (eT && "pages" === eE)) ? (0, r.jsx)(k, {}) : null),
                (el[69] = eg),
                (el[70] = eT),
                (el[71] = eE),
                (el[72] = ex),
                (el[73] = K))
              : (K = el[73]),
            el[74] !== e_ ||
            el[75] !== ep ||
            el[76] !== eP ||
            el[77] !== em ||
            el[78] !== ef.value.deleted ||
            el[79] !== ef.value.search ||
            el[80] !== eS ||
            el[81] !== eC ||
            el[82] !== eR
              ? ((J = eC
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        ef.value.deleted && (!eR || e_) ? (0, r.jsx)(x.e, {}) : null,
                        em && ep && !ef.value.search && (0, r.jsx)(T.Y, {}),
                        !1,
                        (0, r.jsx)(D, {
                          children: (0, r.jsx)(N.G, {
                            scrollContainerRef: eS,
                            children: eR && !e_ ? (0, r.jsx)(g.n, { view: "trash" }) : eP,
                          }),
                        }),
                      ],
                    })
                  : null),
                (el[74] = e_),
                (el[75] = ep),
                (el[76] = eP),
                (el[77] = em),
                (el[78] = ef.value.deleted),
                (el[79] = ef.value.search),
                (el[80] = eS),
                (el[81] = eC),
                (el[82] = eR),
                (el[83] = J))
              : (J = el[83]),
            el[84] !== eT || el[85] !== eh || el[86] !== eS || el[87] !== eC || el[88] !== eE
              ? ((X =
                  eT && !eC
                    ? (0, r.jsx)(z, {
                        kind: "spaces" === eE ? "space" : "page",
                        scrollContainerRef: eS,
                        onSelectionToolbarMount: eh,
                      })
                    : null),
                (el[84] = eT),
                (el[85] = eh),
                (el[86] = eS),
                (el[87] = eC),
                (el[88] = eE),
                (el[89] = X))
              : (X = el[89]),
            el[90] !== eS ||
            el[91] !== eN ||
            el[92] !== Q ||
            el[93] !== W ||
            el[94] !== Z ||
            el[95] !== ew ||
            el[96] !== $ ||
            el[97] !== K ||
            el[98] !== J ||
            el[99] !== X
              ? ((ee = (0, r.jsx)(Y.v, {
                  children: (0, r.jsxs)(L.WI, {
                    scrollContainerRef: eS,
                    contentInset: eN,
                    title: Q,
                    banner: W,
                    controls: Z,
                    navigation: ew,
                    children: [$, K, J, X],
                  }),
                })),
                (el[90] = eS),
                (el[91] = eN),
                (el[92] = Q),
                (el[93] = W),
                (el[94] = Z),
                (el[95] = ew),
                (el[96] = $),
                (el[97] = K),
                (el[98] = J),
                (el[99] = X),
                (el[100] = ee))
              : (ee = el[100]),
            el[101] !== e_ || el[102] !== eh || el[103] !== ey || el[104] !== eS || el[105] !== eC
              ? ((et =
                  eC && !e_ && (null == ey || ey.entry?.node.saved_entity != null)
                    ? (0, r.jsx)(F.l, { scrollContainerRef: eS, onMount: eh })
                    : null),
                (el[101] = e_),
                (el[102] = eh),
                (el[103] = ey),
                (el[104] = eS),
                (el[105] = eC),
                (el[106] = et))
              : (et = el[106]),
            el[107] !== B || el[108] !== G || el[109] !== ee || el[110] !== et || el[111] !== w
              ? ((ea = (0, r.jsxs)("div", {
                  className: "h-full min-h-0 contain-layout",
                  children: [w, B, G, H, ee, et],
                })),
                (el[107] = B),
                (el[108] = G),
                (el[109] = ee),
                (el[110] = et),
                (el[111] = w),
                (el[112] = ea))
              : (ea = el[112]),
            ea
          )
        }
        function D(e) {
          let t,
            a,
            l = (0, s.c)(5),
            { children: o } = e,
            c = (0, n.Ul)(w.oe).size > 0 && "pb-24"
          return (
            l[0] !== c ? ((t = (0, i.A)("flex min-h-0 flex-1 flex-col", c)), (l[0] = c), (l[1] = t)) : (t = l[1]),
            l[2] !== o || l[3] !== t
              ? ((a = (0, r.jsx)("div", { className: t, children: o })), (l[2] = o), (l[3] = t), (l[4] = a))
              : (a = l[4]),
            a
          )
        }
        ;(a.d(
          t,
          {},
          {
            LibraryPage: function () {
              let e,
                t = (0, s.c)(1)
              return (
                t[0] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(d.G.MainContentLayout, { layout: "custom-titlebar" }),
                        (0, r.jsx)(E.$, { children: B }),
                      ],
                    })),
                    (t[0] = e))
                  : (e = t[0]),
                e
              )
            },
            b: H,
          },
        ),
          l())
      } catch (e) {
        l(e)
      }
    })
  },
  kQiD(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      s = a("ozCc"),
      i = a("qmMi"),
      n = a("zd8w"),
      o = a("Wf1j"),
      c = a("oyxz"),
      d = a("Hh7n"),
      u = a("iHfE"),
      h = a("t5e6"),
      g = a("Sm6l"),
      f = a("HOLv"),
      m = a("Fj96"),
      p = a("OWtl"),
      y = a("WFY2")
    function v(e) {
      y.v.warning("Failed to open reference image dialog", { safe: {}, sensitive: { error: e } })
    }
    a.d(
      t,
      {},
      {
        Y: function () {
          let e,
            t,
            a,
            y,
            x,
            _,
            b,
            I,
            A,
            j,
            E,
            T = (0, r.c)(25),
            C = (0, i.gh)(p.u),
            R = (0, n.useId)(),
            L = (0, o.A)(),
            { data: S } = (0, i.Ul)(u.$4)
          T[0] !== C
            ? ((e = (e) => {
                ;(null == e ? (0, d.h9)(C) : (0, d.Su)(C, e)).catch(v)
              }),
              (T[0] = C),
              (T[1] = e))
            : (e = T[1])
          let M = e
          return (
            T[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, l.jsx)(c.A, { ...m.T.libraryHeading })), (T[2] = t))
              : (t = T[2]),
            T[3] !== R
              ? ((a = (0, l.jsx)("h2", { id: R, className: "text-sm font-semibold text-primary", children: t })),
                (T[3] = R),
                (T[4] = a))
              : (a = T[4]),
            T[5] !== L ? ((y = L.formatMessage(m.T.addReference)), (T[5] = L), (T[6] = y)) : (y = T[6]),
            T[7] !== M ? ((x = () => M()), (T[7] = M), (T[8] = x)) : (x = T[8]),
            T[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((_ = (0, l.jsx)(f.I, { asset: s.f })), (b = (0, l.jsx)(c.A, { ...m.T.add })), (T[9] = _), (T[10] = b))
              : ((_ = T[9]), (b = T[10])),
            T[11] !== y || T[12] !== x
              ? ((I = (0, l.jsx)("li", {
                  className: "shrink-0",
                  children: (0, l.jsxs)(g.$, {
                    "aria-label": y,
                    color: "outlineGhost",
                    radius: "full",
                    size: "dialogAction",
                    onClick: x,
                    children: [_, b],
                  }),
                })),
                (T[11] = y),
                (T[12] = x),
                (T[13] = I))
              : (I = T[13]),
            T[14] !== L || T[15] !== M || T[16] !== S
              ? ((A = S?.map((e) => {
                  let t = "self" === e.entity_type ? L.formatMessage(m.T.entitySelf) : e.entity_name
                  return (0, l.jsx)(
                    "li",
                    {
                      className: "shrink-0",
                      children: (0, l.jsxs)(g.$, {
                        className: "ps-1.25",
                        "aria-label": L.formatMessage(m.T.libraryManage, { name: t }),
                        color: "outline",
                        radius: "full",
                        size: "dialogAction",
                        onClick: () => M(e),
                        children: [
                          (0, l.jsx)(h.A, {
                            alt: "",
                            assetPointer: e.thumbnail_asset_pointer ?? e.asset_pointer,
                            fallbackUrl: e.thumbnail_url ?? e.content_url,
                            name: t,
                          }),
                          (0, l.jsx)("span", { className: "max-w-40 truncate", children: t }),
                        ],
                      }),
                    },
                    e.id,
                  )
                })),
                (T[14] = L),
                (T[15] = M),
                (T[16] = S),
                (T[17] = A))
              : (A = T[17]),
            T[18] !== I || T[19] !== A
              ? ((j = (0, l.jsxs)("ul", {
                  className: "no-scrollbar mt-3 flex min-w-0 items-center gap-2 overflow-x-auto pb-1",
                  children: [I, A],
                })),
                (T[18] = I),
                (T[19] = A),
                (T[20] = j))
              : (j = T[20]),
            T[21] !== R || T[22] !== a || T[23] !== j
              ? ((E = (0, l.jsxs)("section", { "aria-labelledby": R, className: "py-4", children: [a, j] })),
                (T[21] = R),
                (T[22] = a),
                (T[23] = j),
                (T[24] = E))
              : (E = T[24]),
            E
          )
        },
      },
    )
  },
  aYWA(e, t, a) {
    a.d(t, { Z: () => eA, Y: () => es })
    var l = a("ABep"),
      r = a("QosV"),
      s = a("HozZ"),
      i = a("UrER"),
      n = a("HD8A"),
      o = a("rxet"),
      c = a("on57"),
      d = a("qmMi"),
      u = a("zd8w"),
      h = a("Wf1j"),
      g = a("oyxz"),
      f = a("Sm6l"),
      m = a("HOLv"),
      p = a("bVeK"),
      y = a("wZQ4"),
      v = a("FrrB"),
      x = a("wEIr"),
      _ = a("zkPp"),
      b = a("X3K1"),
      I = a("KIKs"),
      A = a("WuYL"),
      j = a("e1xH"),
      E = a("atiu"),
      T = a("hZax"),
      C = a("OMIV"),
      R = a("V080"),
      L = a("tl2n"),
      S = a("CpsU"),
      M = a.n(S),
      P = a("SPnB"),
      N = a("rvFo"),
      w = a("TCFx"),
      F = a("jU86"),
      U = a("ahQQ")
    let Y = (0, d.vU)(U.oD, (e, { get: t, scope: a }) => {
        let l = t(F.c7),
          { accountId: r, userId: s } = a.value
        return {
          queryKey: ["library-api", r, s, "folder-previews", e],
          queryFn: ({ signal: t }) =>
            l.safePost("/files/library/folder-previews", {
              requestBody: { directory_ids: e },
              expectedErrorStatuses: [403, 404],
              signal: t,
            }),
          staleTime: N.D.THIRTY_SECONDS,
          retry: !1,
        }
      }),
      O = (0, d.i1)(
        U.Qy,
        (e, { get: t, scope: a }) => {
          let { accountId: l, userId: r } = a.value
          if (!r || !l || t(P.chatGptAuthenticatedUserId$) !== r || t(P.chatGptAuthenticatedAccountId$) !== l) return e
          let s = new Set(e.flatMap((e) => ("node" in e && (0, w.m_)(e) ? [e.node.id] : [])))
          if (0 === s.size) return e
          let i = []
          for (let e of t(F.i3).data?.pages ?? []) {
            let t = e.items.flatMap(({ node: e }) => (s.delete(e.id) ? [e.id] : []))
            if ((i.push(...M()(t, 100)), 0 === s.size)) break
          }
          i.push(...M()([...s], 100))
          let n = new Map()
          for (let e of i) {
            let a = t(Y, e)
            for (let t of e) {
              let e = a.data?.[t]
              ;(void 0 !== e || a.isPending) && n.set(t, e ?? null)
            }
          }
          return 0 === n.size
            ? e
            : e.map((e) => {
                let t = "node" in e ? n.get(e.node.id) : void 0
                return void 0 === t ? e : { ...e, folderPreviewItems: t }
              })
        },
        { key: (e) => e, autoDispose: !0 },
      )
    var B = a("yqtf"),
      G = a("DZee"),
      H = a("RjIR"),
      D = a("T7QO"),
      k = a("uSjY"),
      V = a("LcBG"),
      z = a("e3Ux"),
      Q = a("VDXL"),
      q = a("oGMr"),
      W = a("FBu8"),
      Z = a("EAun"),
      $ = a("lbUx"),
      K = a("mdUy"),
      J = a("NCaE")
    function X(e) {
      let t,
        a,
        s = (0, r.c)(6),
        i = (0, d.Ul)(P.chatGptAuthenticatedAccountId$),
        n = (0, d.Ul)(P.chatGptAuthenticatedUserId$)
      return (
        s[0] !== i || s[1] !== n ? ((t = JSON.stringify([n, i])), (s[0] = i), (s[1] = n), (s[2] = t)) : (t = s[2]),
        s[3] !== e || s[4] !== t ? ((a = (0, l.jsx)(ee, { ...e }, t)), (s[3] = e), (s[4] = t), (s[5] = a)) : (a = s[5]),
        a
      )
    }
    function ee(e) {
      let t,
        a,
        s,
        i,
        n = (0, r.c)(14),
        { entries: o, groupEdits: c, groupIterations: u, renderedItems: h, renderItem: g, spaceGridLayout: f } = e,
        m = void 0 === u || u,
        p = (0, d.Ul)(J.CO)
      if (n[0] !== o || n[1] !== c || n[2] !== m || n[3] !== g || n[4] !== h || n[5] !== p || n[6] !== f) {
        let e = c && !p ? (0, K.vK)(o) : new Map()
        if (m && !p) {
          let t = new Map()
          for (let a of o) {
            if (
              !("node" in a) ||
              e.has((0, w.e4)(a)) ||
              "owned" !== a.node.access_kind ||
              !a.node.origination_thread_id
            )
              continue
            let l = a.node,
              r = l.image_iteration_group_id
            if (!r) continue
            let s = JSON.stringify([l.origination_thread_id, r]),
              i = t.get(s) ?? []
            ;(i.push(a), t.set(s, i))
          }
          for (let a of t.values()) {
            if (a.length < 2) continue
            let t = { items: (0, K.HV)(a) }
            for (let l of a) e.set((0, w.e4)(l), t)
          }
        }
        let l = new Set()
        ;((t = V.cZ),
          (a = f),
          (s = h.flatMap((t) => {
            let a = e.get(t.id)
            if (!a) return [t]
            if (l.has(a)) return []
            l.add(a)
            let r = a.items[0]
            return [{ id: (0, w.e4)(r), content: g(r, a) }]
          })),
          (n[0] = o),
          (n[1] = c),
          (n[2] = m),
          (n[3] = g),
          (n[4] = h),
          (n[5] = p),
          (n[6] = f),
          (n[7] = t),
          (n[8] = a),
          (n[9] = s))
      } else ((t = n[7]), (a = n[8]), (s = n[9]))
      return (
        n[10] !== t || n[11] !== a || n[12] !== s
          ? ((i = (0, l.jsx)(t, { layout: a, items: s })), (n[10] = t), (n[11] = a), (n[12] = s), (n[13] = i))
          : (i = n[13]),
        i
      )
    }
    var et = a("sz7l"),
      ea = a("vmOG"),
      el = a("F1Es"),
      er = a("efhA")
    function es(e) {
      let t,
        a,
        s,
        i,
        n,
        o,
        c,
        u,
        m,
        p,
        x,
        I,
        A,
        j,
        E,
        T,
        R,
        S,
        M,
        P,
        N,
        U,
        Y,
        G = (0, r.c)(160),
        {
          rowLayout: D,
          showLeadingDivider: V,
          onOpenItem: z,
          spaceGridLayout: Q,
          renderContentItem: K,
          items: J,
          supplementalItems: X,
          contentPending: ee,
          populatedContentMarker: et,
          renderResultPaint: ea,
          notice: er,
          additionalPagination: es,
          pagination: ed,
          renderSource: eu,
          emptyState: eh,
          emptyingTrash: eg,
          reserveDisclosureSpace: ef,
          groupByActivityDate: em,
        } = e,
        ep = void 0 === D ? "columns" : D,
        ey = void 0 !== V && V
      G[0] !== X ? ((t = void 0 === X ? [] : X), (G[0] = X), (G[1] = t)) : (t = G[1])
      let ev = t,
        ex = void 0 !== ee && ee,
        e_ = void 0 !== eg && eg,
        eb = void 0 !== ef && ef,
        eI = void 0 !== em && em,
        ej = (0, d.gh)(F.Qy),
        eE = (0, h.A)(),
        eT = (0, d.Ul)(F.YH),
        eC = (0, d.Ul)(null == J ? F.PP : void 0),
        eR = (0, d.Ul)(F.nt),
        eL = (0, d.Ul)(B.U),
        eS = (0, d.Ul)(F.u$),
        eM = J ?? eC,
        eP = ev
      if (eS.length > 0) {
        let e, t
        if (
          (G[2] !== eM || G[3] !== eS
            ? ((e = eM?.filter((e) => !eS.includes((0, w.e4)(e)))), (G[2] = eM), (G[3] = eS), (G[4] = e))
            : (e = G[4]),
          (eM = e),
          G[5] !== eS || G[6] !== eP)
        ) {
          let e
          ;(G[8] !== eS ? ((e = (e) => !eS.includes(e.id)), (G[8] = eS), (G[9] = e)) : (e = G[9]),
            (t = eP.filter(e)),
            (G[5] = eS),
            (G[6] = eP),
            (G[7] = t))
        } else t = G[7]
        eP = t
      }
      let eN = eP.length > 0,
        ew = (0, d.Ul)(H._),
        eF = (0, d.Ul)(F.JZ),
        eU = "favorites" === ej.value.tab && null == ej.value.directoryId && !ej.value.deleted,
        eY = (0, d.Ul)(!!eU && !ew && null != ea && C.RS),
        {
          isPending: eO,
          isFetchedAfterMount: eB,
          isFetching: eG,
          error: eH,
          refetch: eD,
          hasNextPage: ek,
          isFetchingNextPage: eV,
          isFetchNextPageError: ez,
          fetchNextPage: eQ,
          data: eq,
        } = (0, d.Ul)(F.i3),
        { deferFolderThumbnails: eW } = (0, d.Ul)(F.sp)
      ;(G[10] !== eM ? ((a = eM ?? []), (G[10] = eM), (G[11] = a)) : (a = G[11]),
        (eM = (0, d._U)("grid" === eT && eW && null != eM ? O : null, a) ?? eM))
      let eZ = ed?.hasNextPage ?? ek,
        e$ = ed?.fetchNextPage ?? eQ,
        eK = ed?.isFetching ?? eG,
        eJ = (0, d.Ul)(F.IM),
        eX =
          "error" === (0, d.Ul)(L.dk) &&
          null == ej.value.directoryId &&
          null == ej.value.pageCollection &&
          "all" === ej.value.tab
      G[12] !== eH || G[13] !== ej.value.directoryId
        ? ((s = null == ej.value.directoryId ? null : (0, q.m)(eH, (0, w.oh)(ej.value.directoryId))),
          (G[12] = eH),
          (G[13] = ej.value.directoryId),
          (G[14] = s))
        : (s = G[14])
      let e0 = s
      if (eU && !ew) {
        let e, t, a
        return (
          G[15] !== eY || G[16] !== ea
            ? ((e = !eY && ea?.("favorites_unavailable")), (G[15] = eY), (G[16] = ea), (G[17] = e))
            : (e = G[17]),
          G[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, l.jsx)(g.A, {
                id: "library.favorites.unavailable",
                defaultMessage: "Favorites are not available for this account",
              })),
              (G[18] = t))
            : (t = G[18]),
          G[19] !== e
            ? ((a = (0, l.jsx)(v.A, { layout: "browse", title: (0, l.jsxs)(l.Fragment, { children: [e, t] }) })),
              (G[19] = e),
              (G[20] = a))
            : (a = G[20]),
          a
        )
      }
      if ("unavailable" === eJ) {
        let e, t, a
        return (
          G[21] !== ea ? ((e = ea?.("error")), (G[21] = ea), (G[22] = e)) : (e = G[22]),
          G[23] !== ej
            ? ((t = () => {
                ;(0, F.PV)(ej)
              }),
              (G[23] = ej),
              (G[24] = t))
            : (t = G[24]),
          G[25] !== eU || G[26] !== e || G[27] !== t
            ? ((a = (0, l.jsx)(Z._, { paint: e, favorites: eU, folderError: null, onRetry: t })),
              (G[25] = eU),
              (G[26] = e),
              (G[27] = t),
              (G[28] = a))
            : (a = G[28]),
          a
        )
      }
      if (e_ && !eM?.length) return null
      G[29] !== eq || G[30] !== e_ || G[31] !== eB || G[32] !== eG || G[33] !== eV
        ? ((i = !e_ && eG && (!eB || eV || null == eq || eq.pages.some(eo))),
          (G[29] = eq),
          (G[30] = e_),
          (G[31] = eB),
          (G[32] = eG),
          (G[33] = eV),
          (G[34] = i))
        : (i = G[34])
      let e1 = i
      G[35] !== eJ ||
      G[36] !== ex ||
      G[37] !== eq ||
      G[38] !== eh ||
      G[39] !== eM?.length ||
      G[40] !== eN ||
      G[41] !== eB ||
      G[42] !== eG ||
      G[43] !== eO ||
      G[44] !== eL?.isPending ||
      G[45] !== eF
        ? ((n =
            eL?.isPending ||
            "loading" === eJ ||
            (eF && eG && !eB) ||
            (!eM?.length && !eN && (ex || eO || (eG && (void 0 !== eh || !!eq?.pages.every(en)))))),
          (G[35] = eJ),
          (G[36] = ex),
          (G[37] = eq),
          (G[38] = eh),
          (G[39] = eM?.length),
          (G[40] = eN),
          (G[41] = eB),
          (G[42] = eG),
          (G[43] = eO),
          (G[44] = eL?.isPending),
          (G[45] = eF),
          (G[46] = n))
        : (n = G[46])
      let e2 = n
      if (!e2 && ((null == eq && !eM?.length && !eN) || null != e0)) {
        let e, t, a, r
        return (
          G[47] !== ea ? ((e = ea?.("error")), (G[47] = ea), (G[48] = e)) : (e = G[48]),
          G[49] !== eX || G[50] !== eD || G[51] !== ej
            ? ((t = () => {
                eX
                  ? (0, F.PV)(ej)
                  : (0, el.S)(ej.queryClient, ej.query.getOptions(F.i3).queryKey, () => {
                      eD()
                    })
              }),
              (G[49] = eX),
              (G[50] = eD),
              (G[51] = ej),
              (G[52] = t))
            : (t = G[52]),
          G[53] !== eU || G[54] !== e0 || G[55] !== e || G[56] !== t
            ? ((a = (0, l.jsx)(Z._, { paint: e, favorites: eU, onRetry: t, folderError: e0 })),
              (G[53] = eU),
              (G[54] = e0),
              (G[55] = e),
              (G[56] = t),
              (G[57] = a))
            : (a = G[57]),
          G[58] !== es || G[59] !== a
            ? ((r = (0, l.jsxs)(l.Fragment, { children: [a, es] })), (G[58] = es), (G[59] = a), (G[60] = r))
            : (r = G[60]),
          r
        )
      }
      let e3 = !!ej.value.search && !eG && !eZ && (0, w.I9)(eq?.pages),
        e4 = null
      if (e3 && eq?.pages.at(-1)?.partialResults !== !0) {
        let e
        ;(G[61] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(g.A, {
              id: "libraryNext.results.searchIncomplete",
              defaultMessage: "Some search results could not be loaded",
            })),
            (G[61] = e))
          : (e = G[61]),
          (e4 = e))
      } else if (null != eH) {
        let e
        ;(G[62] !== eU
          ? ((e = eU
              ? (0, l.jsx)(g.A, { id: "library.favorites.loadFailed", defaultMessage: "Failed to load favorites" })
              : (0, l.jsx)(g.A, { id: "libraryNext.results.pageFailed", defaultMessage: "Failed to load files." })),
            (G[62] = eU),
            (G[63] = e))
          : (e = G[63]),
          (e4 = e))
      }
      G[64] !== eq?.pages || G[65] !== eq?.pages.at
        ? ((o = eq?.pages.at(-1)), (G[64] = eq?.pages), (G[65] = eq?.pages.at), (G[66] = o))
        : (o = G[66])
      let e5 = o,
        e9 =
          ej.value.includePages &&
          "suggested" === ej.value.tab &&
          !ej.value.search &&
          0 === ej.value.categories.length &&
          eZ &&
          (e5?.results ?? e5?.items)?.length === 0,
        e7 = "available" === eJ && !eM?.length && !eN && eZ && null == eH && !eX && !e9,
        e8 = eq?.pages.length
      ;(G[67] !== e$
        ? ((c = () => {
            e$({ cancelRefetch: !1 })
          }),
          (G[67] = e$),
          (G[68] = c))
        : (c = G[68]),
        G[69] !== eZ || G[70] !== eK || G[71] !== e8 || G[72] !== c
          ? ((u = (0, l.jsx)(
              y.D,
              { loadingPlaceholder: null, hasNextPage: eZ, isFetchingNextPage: eK, onLoadNextPage: c },
              e8,
            )),
            (G[69] = eZ),
            (G[70] = eK),
            (G[71] = e8),
            (G[72] = c),
            (G[73] = u))
          : (u = G[73]))
      let e6 = u
      G[74] !== eM?.length || G[75] !== eN || G[76] !== ea
        ? ((m = eM?.length || eN ? null : ea?.("error")), (G[74] = eM?.length), (G[75] = eN), (G[76] = ea), (G[77] = m))
        : (m = G[77])
      let te = m
      ;(G[78] !== te || G[79] !== eX || G[80] !== ej
        ? ((p = eX
            ? (0, l.jsx)(Z._, {
                paint: te,
                favorites: !1,
                folderError: null,
                onRetry: () => {
                  ;(0, F.PV)(ej)
                },
              })
            : null),
          (G[78] = te),
          (G[79] = eX),
          (G[80] = ej),
          (G[81] = p))
        : (p = G[81]),
        G[82] !== er || G[83] !== p
          ? ((x = (0, l.jsxs)(l.Fragment, { children: [p, er] })), (G[82] = er), (G[83] = p), (G[84] = x))
          : (x = G[84]))
      let tt = x,
        ta = e2 || e7,
        tl = null != eM || eN,
        tr = null != ej.value.pageCollection || ("folders" === ej.value.tab && !ej.value.search)
      G[85] !== eE
        ? ((I = eE.formatMessage({ id: "library.list.label", defaultMessage: "Library files" })),
          (G[85] = eE),
          (G[86] = I))
        : (I = G[86])
      let ts = null != eu
      ;(G[87] !== eb || G[88] !== ep || G[89] !== ts
        ? ((A = (0, l.jsx)(eA, { layout: ep, isLoading: !0, showSource: ts, reserveDisclosureSpace: eb })),
          (G[87] = eb),
          (G[88] = ep),
          (G[89] = ts),
          (G[90] = A))
        : (A = G[90]),
        G[91] !== eI
          ? ((j = eI
              ? (0, l.jsx)("div", {
                  "aria-hidden": !0,
                  className: "mx-3 shrink-0 border-b border-subtle pt-5 pb-2",
                  children: (0, l.jsx)("div", {
                    className: "flex h-5 items-center",
                    children: (0, l.jsx)(b.X, { className: "w-16", size: "sm", variant: "chatgpt-project" }),
                  }),
                })
              : null),
            (G[91] = eI),
            (G[92] = j))
          : (j = G[92]))
      let ti = null != eu
      ;(G[93] !== eb || G[94] !== ep || G[95] !== ti
        ? ((E = (0, l.jsx)(W.VT, { layout: ep, showSource: ti, reserveDisclosureSpace: eb })),
          (G[93] = eb),
          (G[94] = ep),
          (G[95] = ti),
          (G[96] = E))
        : (E = G[96]),
        G[97] !== I || G[98] !== A || G[99] !== j || G[100] !== E
          ? ((T = (0, l.jsxs)(_.eb, {
              className: "-mx-[var(--padding-row-cell-x,var(--padding-row-x))] flex min-h-0 flex-1 flex-col",
              role: "grid",
              tabIndex: -1,
              "aria-label": I,
              "aria-multiselectable": !0,
              onKeyDown: k.T,
              children: [A, j, E],
            })),
            (G[97] = I),
            (G[98] = A),
            (G[99] = j),
            (G[100] = E),
            (G[101] = T))
          : (T = G[101]),
        G[102] !== e4 || G[103] !== te
          ? ((R = null != e4 && null != te ? (0, l.jsxs)(l.Fragment, { children: [te, e4] }) : e4),
            (G[102] = e4),
            (G[103] = te),
            (G[104] = R))
          : (R = G[104]),
        G[105] !== eH || G[106] !== e$ || G[107] !== ez || G[108] !== eD || G[109] !== ej
          ? ((S = () => {
              ;(0, el.S)(ej.queryClient, ej.query.getOptions(F.i3).queryKey, () => {
                ;(0, w.hk)(eH, ej.get(F.sp))
                  ? ej.queryClient.resetQueries({ queryKey: ej.query.getOptions(F.i3).queryKey, exact: !0 })
                  : ez && !(0, w.sW)(eH)
                    ? e$({ cancelRefetch: !1 })
                    : eD()
              })
            }),
            (G[105] = eH),
            (G[106] = e$),
            (G[107] = ez),
            (G[108] = eD),
            (G[109] = ej),
            (G[110] = S))
          : (S = G[110]),
        G[111] !== e$ ||
        G[112] !== eZ ||
        G[113] !== eV ||
        G[114] !== e1 ||
        G[115] !== e9 ||
        G[116] !== e6 ||
        G[117] !== eu ||
        G[118] !== eb ||
        G[119] !== ep ||
        G[120] !== eT
          ? ((M = e9
              ? (0, l.jsx)(f.$, {
                  color: "ghost",
                  disabled: eV,
                  loading: eV,
                  onClick: () => {
                    e$({ cancelRefetch: !1 })
                  },
                  children: (0, l.jsx)(g.A, { id: "libraryNext.results.loadMore", defaultMessage: "Load more" }),
                })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    e6,
                    "list" === eT && (eZ || e1)
                      ? (0, l.jsx)(_.eb, {
                          className: "-mx-[var(--padding-row-cell-x,var(--padding-row-x))]",
                          "aria-hidden": !e1,
                          children: (0, l.jsx)(W.VT, {
                            layout: ep,
                            rowCount: 3,
                            showSource: null != eu,
                            reserveDisclosureSpace: eb,
                          }),
                        })
                      : null,
                  ],
                })),
            (G[111] = e$),
            (G[112] = eZ),
            (G[113] = eV),
            (G[114] = e1),
            (G[115] = e9),
            (G[116] = e6),
            (G[117] = eu),
            (G[118] = eb),
            (G[119] = ep),
            (G[120] = eT),
            (G[121] = M))
          : (M = G[121]))
      let tn = (!!eM?.length || eN) && et,
        to = eq?.pages[0]?.serverHome === !0,
        tc = "grid" === eT && (eZ || e1) && null == e4,
        td =
          eX ||
          eR ||
          (ej.value.search && (null != eH || eO || eG || eZ || eq?.pages.some(ei) || e3)) ||
          (void 0 !== eh && (eH || er))
            ? null
            : eh
      ;(G[122] !== eM ||
      G[123] !== eI ||
      G[124] !== eZ ||
      G[125] !== z ||
      G[126] !== K ||
      G[127] !== ea ||
      G[128] !== eu ||
      G[129] !== eb ||
      G[130] !== ep ||
      G[131] !== ey ||
      G[132] !== Q ||
      G[133] !== eP ||
      G[134] !== to ||
      G[135] !== tc ||
      G[136] !== td
        ? ((P = (0, l.jsx)(ec, {
            renderResultPaint: ea,
            spaceGridLayout: Q,
            serverHome: to,
            hasNextPage: eZ,
            rowLayout: ep,
            showLeadingDivider: ey,
            entries: eM,
            supplementalItems: eP,
            groupByActivityDate: eI,
            onOpenItem: z,
            renderContentItem: K,
            renderSource: eu,
            gridLoading: tc,
            emptyState: td,
            reserveDisclosureSpace: eb,
          })),
          (G[122] = eM),
          (G[123] = eI),
          (G[124] = eZ),
          (G[125] = z),
          (G[126] = K),
          (G[127] = ea),
          (G[128] = eu),
          (G[129] = eb),
          (G[130] = ep),
          (G[131] = ey),
          (G[132] = Q),
          (G[133] = eP),
          (G[134] = to),
          (G[135] = tc),
          (G[136] = td),
          (G[137] = P))
        : (P = G[137]),
        G[138] !== es ||
        G[139] !== tt ||
        G[140] !== Q ||
        G[141] !== ta ||
        G[142] !== tl ||
        G[143] !== tr ||
        G[144] !== T ||
        G[145] !== R ||
        G[146] !== S ||
        G[147] !== M ||
        G[148] !== tn ||
        G[149] !== P ||
        G[150] !== eT
          ? ((N = (0, l.jsxs)($.b, {
              spaceGridLayout: Q,
              loading: ta,
              hasData: tl,
              viewMode: eT,
              squareLoading: tr,
              listLoading: T,
              error: R,
              onRetry: S,
              notice: tt,
              additionalPagination: es,
              pagination: M,
              children: [tn, P],
            })),
            (G[138] = es),
            (G[139] = tt),
            (G[140] = Q),
            (G[141] = ta),
            (G[142] = tl),
            (G[143] = tr),
            (G[144] = T),
            (G[145] = R),
            (G[146] = S),
            (G[147] = M),
            (G[148] = tn),
            (G[149] = P),
            (G[150] = eT),
            (G[151] = N))
          : (N = G[151]))
      let tu = N
      return (
        G[152] !== es || G[153] !== e6 || G[154] !== tt || G[155] !== e7
          ? ((U = e7 ? (0, l.jsxs)(l.Fragment, { children: [tt, e6, es] }) : null),
            (G[152] = es),
            (G[153] = e6),
            (G[154] = tt),
            (G[155] = e7),
            (G[156] = U))
          : (U = G[156]),
        G[157] !== tu || G[158] !== U
          ? ((Y = (0, l.jsxs)(l.Fragment, { children: [U, tu] })), (G[157] = tu), (G[158] = U), (G[159] = Y))
          : (Y = G[159]),
        Y
      )
    }
    function ei(e) {
      return e.searchPending
    }
    function en(e) {
      return 0 === e.items.length && !e.results?.length
    }
    function eo(e) {
      return e.searchPending
    }
    function ec(e) {
      let t,
        a,
        s,
        i,
        n,
        o,
        u,
        h,
        f,
        m = (0, r.c)(60),
        {
          renderResultPaint: p,
          hasNextPage: y,
          serverHome: v,
          rowLayout: x,
          showLeadingDivider: _,
          entries: b,
          spaceGridLayout: I,
          supplementalItems: A,
          groupByActivityDate: j,
          onOpenItem: E,
          renderContentItem: T,
          renderSource: C,
          emptyState: R,
          reserveDisclosureSpace: L,
          gridLoading: S,
        } = e,
        M = (0, d.gh)(F.Qy),
        P = (0, d.Ul)(F.YH)
      if (null == b && 0 === A.length) return null
      m[0] !== b ? ((t = b ?? []), (m[0] = b), (m[1] = t)) : (t = m[1])
      let N = t
      if (0 === N.length && 0 === A.length && !S) {
        let e, t
        if (y) return null
        if (void 0 !== R) {
          let e
          return (m[2] !== R ? ((e = (0, l.jsx)(l.Fragment, { children: R })), (m[2] = R), (m[3] = e)) : (e = m[3]), e)
        }
        if (
          null != M.value.directoryId &&
          !M.value.search &&
          0 === M.value.categories.length &&
          0 === M.value.sources.length &&
          !M.value.directoryId.startsWith("external-") &&
          !M.value.directoryId.startsWith("library:")
        ) {
          let e
          return (
            m[4] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, l.jsx)(em, {})), (m[4] = e)) : (e = m[4]),
            e
          )
        }
        return (
          m[5] !== p ? ((e = p?.("empty")), (m[5] = p), (m[6] = e)) : (e = m[6]),
          m[7] !== e ? ((t = (0, l.jsx)(ef, { titleMarker: e })), (m[7] = e), (m[8] = t)) : (t = m[8]),
          t
        )
      }
      if (!(
        !v &&
        "grid" === P &&
        !M.value.search &&
        !M.value.deleted &&
        ("all" === M.value.tab || null != M.value.directoryId) &&
        N.some(eg) &&
        N.some(eh)
      )) {
        let e,
          t,
          a,
          r,
          s = "grid" === P && "pt-4"
        return (
          m[9] !== s ? ((e = (0, c.A)(s)), (m[9] = s), (m[10] = e)) : (e = m[10]),
          m[11] !== p || m[12] !== N.length || m[13] !== A
            ? ((t = (N.length > 0 || A.length > 0) && p?.("populated")),
              (m[11] = p),
              (m[12] = N.length),
              (m[13] = A),
              (m[14] = t))
            : (t = m[14]),
          m[15] !== S ||
          m[16] !== j ||
          m[17] !== E ||
          m[18] !== T ||
          m[19] !== C ||
          m[20] !== L ||
          m[21] !== N ||
          m[22] !== x ||
          m[23] !== _ ||
          m[24] !== I ||
          m[25] !== A
            ? ((a = (0, l.jsx)(ep, {
                rowLayout: x,
                showLeadingDivider: _,
                spaceGridLayout: I,
                entries: N,
                supplementalItems: A,
                groupByActivityDate: j,
                onOpenItem: E,
                renderContentItem: T,
                renderSource: C,
                reserveDisclosureSpace: L,
                gridLoading: S,
              })),
              (m[15] = S),
              (m[16] = j),
              (m[17] = E),
              (m[18] = T),
              (m[19] = C),
              (m[20] = L),
              (m[21] = N),
              (m[22] = x),
              (m[23] = _),
              (m[24] = I),
              (m[25] = A),
              (m[26] = a))
            : (a = m[26]),
          m[27] !== e || m[28] !== t || m[29] !== a
            ? ((r = (0, l.jsxs)("div", { className: e, children: [t, a] })),
              (m[27] = e),
              (m[28] = t),
              (m[29] = a),
              (m[30] = r))
            : (r = m[30]),
          r
        )
      }
      return (
        m[31] !== p ? ((a = p?.("populated")), (m[31] = p), (m[32] = a)) : (a = m[32]),
        m[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, l.jsx)("h2", {
              className: "text-lg font-medium",
              children: (0, l.jsx)(g.A, { id: "libraryNext.results.folders", defaultMessage: "Folders" }),
            })),
            (m[33] = s))
          : (s = m[33]),
        m[34] !== N ? ((i = N.filter(eu)), (m[34] = N), (m[35] = i)) : (i = m[35]),
        m[36] !== E || m[37] !== C || m[38] !== L || m[39] !== x || m[40] !== I || m[41] !== i
          ? ((n = (0, l.jsxs)("section", {
              className: "flex flex-col gap-4",
              children: [
                s,
                (0, l.jsx)(ep, {
                  rowLayout: x,
                  spaceGridLayout: I,
                  entries: i,
                  kind: "directory",
                  onOpenItem: E,
                  renderSource: C,
                  reserveDisclosureSpace: L,
                }),
              ],
            })),
            (m[36] = E),
            (m[37] = C),
            (m[38] = L),
            (m[39] = x),
            (m[40] = I),
            (m[41] = i),
            (m[42] = n))
          : (n = m[42]),
        m[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, l.jsx)("h2", {
              className: "text-lg font-medium",
              children: (0, l.jsx)(g.A, { id: "libraryNext.results.items", defaultMessage: "Items" }),
            })),
            (m[43] = o))
          : (o = m[43]),
        m[44] !== N ? ((u = N.filter(ed)), (m[44] = N), (m[45] = u)) : (u = m[45]),
        m[46] !== S ||
        m[47] !== E ||
        m[48] !== T ||
        m[49] !== C ||
        m[50] !== L ||
        m[51] !== x ||
        m[52] !== I ||
        m[53] !== A ||
        m[54] !== u
          ? ((h = (0, l.jsxs)("section", {
              className: "flex flex-col gap-4",
              children: [
                o,
                (0, l.jsx)(ep, {
                  rowLayout: x,
                  spaceGridLayout: I,
                  entries: u,
                  supplementalItems: A,
                  kind: "file",
                  gridLoading: S,
                  renderSource: C,
                  renderContentItem: T,
                  onOpenItem: E,
                  reserveDisclosureSpace: L,
                }),
              ],
            })),
            (m[46] = S),
            (m[47] = E),
            (m[48] = T),
            (m[49] = C),
            (m[50] = L),
            (m[51] = x),
            (m[52] = I),
            (m[53] = A),
            (m[54] = u),
            (m[55] = h))
          : (h = m[55]),
        m[56] !== a || m[57] !== n || m[58] !== h
          ? ((f = (0, l.jsxs)("div", { className: "flex flex-col gap-8 pt-4", children: [a, n, h] })),
            (m[56] = a),
            (m[57] = n),
            (m[58] = h),
            (m[59] = f))
          : (f = m[59]),
        f
      )
    }
    function ed(e) {
      return !("node" in e) || "directory" !== e.node.kind
    }
    function eu(e) {
      return "node" in e && "directory" === e.node.kind
    }
    function eh(e) {
      return !("node" in e) || "directory" !== e.node.kind
    }
    function eg(e) {
      return "node" in e && "directory" === e.node.kind
    }
    function ef(e) {
      let t,
        a,
        s,
        i,
        h,
        f,
        y,
        _,
        b,
        I = (0, r.c)(63),
        { titleMarker: A } = e,
        T = (0, d.gh)(F.Qy),
        C = (0, d.Ul)(j.Op),
        L = (0, d.Ul)(B.U)
      if (
        (I[0] !== T
          ? ((t = () => (0, et.mz)(T)), (a = [T]), (I[0] = T), (I[1] = t), (I[2] = a))
          : ((t = I[1]), (a = I[2])),
        (0, u.useEffect)(t, a),
        T.value.basePath.startsWith("/space") && T.value.search.trim())
      ) {
        let e
        return (
          I[3] !== T.value.search || I[4] !== A
            ? ((e = (0, l.jsx)(x.H, { titleMarker: A, query: T.value.search })),
              (I[3] = T.value.search),
              (I[4] = A),
              (I[5] = e))
            : (e = I[5]),
          e
        )
      }
      if (T.value.includePages && "suggested" === T.value.tab) {
        let e, t
        return (
          I[6] !== T.value.categories || I[7] !== T.value.search || I[8] !== T.value.sources
            ? ((e =
                T.value.search || T.value.categories.length || T.value.sources.length
                  ? (0, l.jsx)(g.A, { id: "space.home.suggestedNoResults", defaultMessage: "No results" })
                  : (0, l.jsx)(g.A, { id: "space.home.noSuggestions", defaultMessage: "Nothing to suggest yet" })),
              (I[6] = T.value.categories),
              (I[7] = T.value.search),
              (I[8] = T.value.sources),
              (I[9] = e))
            : (e = I[9]),
          I[10] !== e || I[11] !== A
            ? ((t = (0, l.jsx)(v.A, { layout: "browse", title: (0, l.jsxs)(l.Fragment, { children: [A, e] }) })),
              (I[10] = e),
              (I[11] = A),
              (I[12] = t))
            : (t = I[12]),
          t
        )
      }
      if ("favorites" === T.value.tab && null == T.value.directoryId && !T.value.deleted) {
        let e, t
        return (
          I[13] !== T.value.categories || I[14] !== T.value.search || I[15] !== T.value.sources
            ? ((e =
                T.value.search || T.value.categories.length > 0 || T.value.sources.length > 0
                  ? (0, l.jsx)(g.A, { id: "library.favorites.noResults", defaultMessage: "No favorites found" })
                  : (0, l.jsx)(g.A, { id: "library.favorites.empty", defaultMessage: "No favorites yet" })),
              (I[13] = T.value.categories),
              (I[14] = T.value.search),
              (I[15] = T.value.sources),
              (I[16] = e))
            : (e = I[16]),
          I[17] !== e || I[18] !== A
            ? ((t = (0, l.jsx)(v.A, { layout: "browse", title: (0, l.jsxs)(l.Fragment, { children: [A, e] }) })),
              (I[17] = e),
              (I[18] = A),
              (I[19] = t))
            : (t = I[19]),
          t
        )
      }
      if (
        T.value.search ||
        T.value.categories.length > 0 ||
        null != L ||
        (T.value.sources.length > 0 && !T.value.imageSourceTabs)
      ) {
        let e, t, a
        return (
          I[20] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, l.jsx)(p.zcw, {})), (I[20] = e)) : (e = I[20]),
          I[21] !== T.value.includePages
            ? ((t = T.value.includePages
                ? (0, l.jsx)(g.A, { id: "space.home.noItemsFound", defaultMessage: "No items found" })
                : (0, l.jsx)(g.A, { id: "libraryNext.results.noFilesFound", defaultMessage: "No files found" })),
              (I[21] = T.value.includePages),
              (I[22] = t))
            : (t = I[22]),
          I[23] !== t || I[24] !== A
            ? ((a = (0, l.jsx)(v.A, {
                layout: "browse",
                illustration: e,
                title: (0, l.jsxs)(l.Fragment, { children: [A, t] }),
              })),
              (I[23] = t),
              (I[24] = A),
              (I[25] = a))
            : (a = I[25]),
          a
        )
      }
      if (T.value.deleted) {
        let e,
          t = C ? "trash" : "trash-files"
        return (I[26] !== t ? ((e = (0, l.jsx)(E.n, { view: t })), (I[26] = t), (I[27] = e)) : (e = I[27]), e)
      }
      if ("recent" === T.value.tab) {
        let e
        return (
          I[28] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(v.A, {
                layout: "page",
                title: (0, l.jsx)(g.A, {
                  id: "libraryNext.results.noRecentFiles",
                  defaultMessage: "No recently opened files",
                }),
              })),
              (I[28] = e))
            : (e = I[28]),
          e
        )
      }
      if ("library:collection:shared-with-me" === T.value.directoryId) {
        let e, t, a, r, s
        return (
          I[29] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, l.jsx)(p.Seu, {})), (I[29] = e)) : (e = I[29]),
          I[30] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, l.jsx)(g.A, { id: "libraryNext.results.sharedEmptyTitle", defaultMessage: "Folder is empty" })),
              (I[30] = t))
            : (t = I[30]),
          I[31] !== A ? ((a = (0, l.jsxs)("h2", { children: [A, t] })), (I[31] = A), (I[32] = a)) : (a = I[32]),
          I[33] !== T.value.includePages
            ? ((r = (0, l.jsx)("p", {
                children: T.value.includePages
                  ? (0, l.jsx)(g.A, {
                      id: "space.home.sharedEmptyDescription",
                      defaultMessage: "Files and Pages shared with you will live here",
                    })
                  : (0, l.jsx)(g.A, {
                      id: "libraryNext.results.sharedEmptyDescription",
                      defaultMessage: "Files shared with you will live here",
                    }),
              })),
              (I[33] = T.value.includePages),
              (I[34] = r))
            : (r = I[34]),
          I[35] !== a || I[36] !== r
            ? ((s = (0, l.jsx)(v.A, {
                layout: "browse",
                className: "select-none",
                illustration: e,
                title: a,
                description: r,
              })),
              (I[35] = a),
              (I[36] = r),
              (I[37] = s))
            : (s = I[37]),
          s
        )
      }
      if (null != T.value.directoryId) {
        let e
        return (
          I[38] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(v.A, {
                layout: "browse",
                title: (0, l.jsx)(g.A, {
                  id: "libraryNext.results.emptyFolder",
                  defaultMessage: "This folder is empty.",
                }),
              })),
              (I[38] = e))
            : (e = I[38]),
          e
        )
      }
      I[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, l.jsx)(m.I, { asset: o.x })), (I[39] = s))
        : (s = I[39])
      let S = s,
        M = T.value.imageSourceTabs && "uploaded" === T.value.sources[0]
      if ("images" === T.value.tab) {
        let e
        ;(I[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)("span", {
              className: "flex size-12 shrink-0 items-center justify-center rounded-xl bg-background-secondary-soft",
              children: (0, l.jsx)(m.I, { asset: n.v }),
            })),
            (I[40] = e))
          : (e = I[40]),
          (S = e))
      } else if ("folders" === T.value.tab) {
        let e
        ;(I[41] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, l.jsx)(p.nex, {})), (I[41] = e)) : (e = I[41]),
          (S = e))
      }
      let P = "images" === T.value.tab && "max-w-80 self-center"
      I[42] !== P ? ((i = (0, c.A)("select-none", P)), (I[42] = P), (I[43] = i)) : (i = I[43])
      let N = "images" === T.value.tab ? "page" : "browse",
        w = "images" === T.value.tab ? "default" : "compact"
      return (
        I[44] !== T.value.tab || I[45] !== M
          ? ((h = M
              ? (0, l.jsx)(g.A, { id: "library.images.uploads.emptyTitle", defaultMessage: "No uploads yet" })
              : (0, l.jsx)(g.A, {
                  id: "libraryNext.results.emptyTabTitle",
                  defaultMessage:
                    "{tab, select, images {No images yet} folders {Create your first folder} other {Create something new}}",
                  values: { tab: T.value.tab },
                })),
            (I[44] = T.value.tab),
            (I[45] = M),
            (I[46] = h))
          : (h = I[46]),
        I[47] !== h || I[48] !== A
          ? ((f = (0, l.jsxs)("h2", { children: [A, h] })), (I[47] = h), (I[48] = A), (I[49] = f))
          : (f = I[49]),
        I[50] !== T.value.tab || I[51] !== M
          ? ((y = (0, l.jsx)("p", {
              children: M
                ? (0, l.jsx)(g.A, {
                    id: "library.images.uploads.emptyDescription",
                    defaultMessage: "Images you upload will appear here",
                  })
                : (0, l.jsx)(g.A, {
                    id: "libraryNext.results.emptyTabDescription",
                    defaultMessage:
                      "{tab, select, images {Create an image with ChatGPT.} folders {Create folders to organize items in your library} other {Things you make with ChatGPT, like images and documents, will appear here}}",
                    values: { tab: T.value.tab },
                  }),
            })),
            (I[50] = T.value.tab),
            (I[51] = M),
            (I[52] = y))
          : (y = I[52]),
        I[53] !== M ? ((_ = M ? (0, l.jsx)(R.JA, {}) : (0, l.jsx)(R.be, {})), (I[53] = M), (I[54] = _)) : (_ = I[54]),
        I[55] !== S || I[56] !== y || I[57] !== _ || I[58] !== i || I[59] !== N || I[60] !== w || I[61] !== f
          ? ((b = (0, l.jsx)(v.A, {
              className: i,
              layout: N,
              spacing: w,
              illustration: S,
              title: f,
              description: y,
              actions: _,
            })),
            (I[55] = S),
            (I[56] = y),
            (I[57] = _),
            (I[58] = i),
            (I[59] = N),
            (I[60] = w),
            (I[61] = f),
            (I[62] = b))
          : (b = I[62]),
        b
      )
    }
    function em() {
      let e,
        t,
        a,
        s = (0, r.c)(5),
        i = (0, d.Ul)(F.YH)
      return (
        s[0] !== i
          ? ((e =
              "list" === i
                ? (0, l.jsx)("div", {
                    className: "-mx-[var(--padding-row-cell-x,var(--padding-row-x))]",
                    children: (0, l.jsx)(eA, {}),
                  })
                : null),
            (s[0] = i),
            (s[1] = e))
          : (e = s[1]),
        s[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(v.A, {
              layout: "browse",
              illustration: (0, l.jsx)(p._Ui, {}),
              actions: (0, l.jsx)(R.JA, {}),
              title: (0, l.jsx)(l.Fragment, {
                children: (0, l.jsx)(g.A, { id: "libraryNext.results.noFilesYet", defaultMessage: "No files yet" }),
              }),
              description: (0, l.jsx)(l.Fragment, {
                children: (0, l.jsx)(g.A, {
                  id: "libraryNext.results.uploadDescription",
                  defaultMessage: "Upload a file to start building your library",
                }),
              }),
            })),
            (s[2] = t))
          : (t = s[2]),
        s[3] !== e
          ? ((a = (0, l.jsxs)("div", { className: "flex min-h-0 flex-1 flex-col", children: [e, t] })),
            (s[3] = e),
            (s[4] = a))
          : (a = s[4]),
        a
      )
    }
    function ep(e) {
      let t,
        a,
        s,
        i,
        n,
        o,
        f,
        m,
        p,
        y,
        v,
        x,
        b,
        j,
        E = (0, r.c)(90),
        {
          rowLayout: R,
          entries: L,
          spaceGridLayout: S,
          supplementalItems: M,
          groupByActivityDate: P,
          kind: N,
          onOpenItem: U,
          renderContentItem: Y,
          renderSource: O,
          viewMode: B,
          showLeadingDivider: H,
          selectionEnabled: Q,
          reserveDisclosureSpace: q,
          gridLoading: W,
        } = e,
        Z = void 0 === R ? "columns" : R
      E[0] !== M ? ((t = void 0 === M ? [] : M), (E[0] = M), (E[1] = t)) : (t = E[1])
      let $ = t,
        K = void 0 !== P && P,
        J = void 0 !== H && H,
        ee = void 0 === Q || Q,
        et = void 0 !== W && W,
        el = (0, d.gh)(F.Qy),
        es = (0, h.A)(),
        ei = (0, d.Ul)(F.YH),
        en = (0, d._U)(C.JW, "3544043810"),
        eo = B ?? ei,
        ec = "grid" === eo && en && !el.value.deleted && !el.value.search,
        ed = !0 === (0, d.Ul)(ec && L.some(eI) ? A.z : null),
        eu = (0, d.Ul)(F.oW),
        eh = (0, d.Ul)(F.rk),
        eg = "list" === eo && null != el.value.pageCollection
      E[2] !== U ||
      E[3] !== eg ||
      E[4] !== Y ||
      E[5] !== O ||
      E[6] !== q ||
      E[7] !== Z ||
      E[8] !== ee ||
      E[9] !== S ||
      E[10] !== eo
        ? ((a = (e, t) => {
            if ("node" in e)
              return (0, l.jsx)(ea.Vz, {
                layout: Z,
                structuredGridEnabled: null != S,
                imageMasonry: "image-masonry" === S && "image" === e.node.library_file_category,
                entry: e,
                stack: t,
                onOpenItem: U,
                viewMode: eo,
                source: O?.(e),
                selectionEnabled: ee,
                reserveDisclosureSpace: q,
              })
            let a = Y?.(e, eo, O?.(e))
            return eg && ("page" in e || "libraryPage" in e)
              ? (0, l.jsx)(l.Fragment, { children: a })
              : (0, l.jsx)("div", { "data-library-item": !0, children: a })
          }),
          (E[2] = U),
          (E[3] = eg),
          (E[4] = Y),
          (E[5] = O),
          (E[6] = q),
          (E[7] = Z),
          (E[8] = ee),
          (E[9] = S),
          (E[10] = eo),
          (E[11] = a))
        : (a = E[11])
      let ef = a
      E[12] !== K ? ((s = { enabled: K }), (E[12] = K), (E[13] = s)) : (s = E[13])
      let em = (0, I.wv)(eb, s),
        ep = (0, T.Zj)(K && "1244723012")
      if (
        E[14] !== eu ||
        E[15] !== eh ||
        E[16] !== L ||
        E[17] !== et ||
        E[18] !== K ||
        E[19] !== ed ||
        E[20] !== es ||
        E[21] !== N ||
        E[22] !== eg ||
        E[23] !== ef ||
        E[24] !== O ||
        E[25] !== q ||
        E[26] !== Z ||
        E[27] !== el.value.categories ||
        E[28] !== el.value.directoryId ||
        E[29] !== el.value.includePages ||
        E[30] !== el.value.pageCollection ||
        E[31] !== el.value.search ||
        E[32] !== el.value.tab ||
        E[33] !== ee ||
        E[34] !== J ||
        E[35] !== S ||
        E[36] !== ec ||
        E[37] !== $ ||
        E[38] !== ep ||
        E[39] !== em ||
        E[40] !== eo
      ) {
        b = Symbol.for("react.early_return_sentinel")
        e: {
          var ej
          let e, t, a, r, s, d, h
          E[51] !== eh || E[52] !== ef
            ? ((e = (e) => ({ id: (0, w.e4)(e), sortMetadata: (0, G.Bl)(e, eh), render: () => ef(e) })),
              (E[51] = eh),
              (E[52] = ef),
              (E[53] = e))
            : (e = E[53])
          let I = L.map(e)
          if (
            (E[54] !== eg || E[55] !== eo
              ? ((t = (e) => ({
                  id: e.id,
                  sortMetadata: e.sortMetadata,
                  render: (t) => {
                    let a = e.render(eo, t)
                    return eg ? (0, l.jsx)("div", { "data-library-item": !0, children: a }) : a
                  },
                })),
                (E[54] = eg),
                (E[55] = eo),
                (E[56] = t))
              : (t = E[56]),
            I.push(...$.map(t)),
            null != eu && $.length > 0)
          ) {
            let e
            ;(E[57] !== eu || E[58] !== eh
              ? ((e = (e, t) => (0, G.Gf)(e.sortMetadata, t.sortMetadata, eu, eh)),
                (E[57] = eu),
                (E[58] = eh),
                (E[59] = e))
              : (e = E[59]),
              I.sort(e))
          }
          let A = I.map(e_)
          if ("grid" === eo) {
            if (et) {
              let e
              ;(E[60] !== N ||
              E[61] !== el.value.pageCollection ||
              E[62] !== el.value.search ||
              E[63] !== el.value.tab ||
              E[64] !== S
                ? ((e = (e, t) => ({
                    id: `loading-${t}`,
                    content: (0, l.jsx)(V.c5, {
                      layout: S,
                      square:
                        null != el.value.pageCollection ||
                        "directory" === N ||
                        ("folders" === el.value.tab && !el.value.search),
                      index: t,
                    }),
                  })),
                  (E[60] = N),
                  (E[61] = el.value.pageCollection),
                  (E[62] = el.value.search),
                  (E[63] = el.value.tab),
                  (E[64] = S),
                  (E[65] = e))
                : (e = E[65]),
                A.push(...Array.from({ length: 3 }, e)))
            }
            if (null != S) {
              let e
              E[66] !== el.value.categories
                ? ((e = el.value.categories.includes("images")), (E[66] = el.value.categories), (E[67] = e))
                : (e = E[67])
              let t = e
              if (ec && (t || ed)) {
                b = (0, l.jsx)(X, {
                  spaceGridLayout: S,
                  groupIterations: t,
                  groupEdits: ed,
                  entries: L,
                  renderedItems: A,
                  renderItem: ef,
                })
                break e
              }
              b = (0, l.jsx)(V.cZ, { layout: S, items: A })
              break e
            }
            if (!el.value.search && 0 === $.length && L.every(ex)) {
              b = (0, l.jsx)("div", {
                className: "@container",
                children: (0, l.jsx)("div", {
                  className:
                    "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 @max-sm:grid-cols-1",
                  children: A.map(ev),
                }),
              })
              break e
            }
            b = ec
              ? (0, l.jsx)(X, { groupEdits: ed, entries: L, renderedItems: A, renderItem: ef })
              : (0, l.jsx)(V.bg, { items: A })
            break e
          }
          let j = K
            ? ((ej = I.map(ey)),
              (d = new Date((s = new Date(em)).getFullYear(), s.getMonth(), 1).getTime()),
              (h = s.setDate(s.getDate() - 1)),
              ej.map((e) => {
                let t
                if (
                  (t =
                    null != e && Number.isFinite(e)
                      ? e >= em
                        ? "today"
                        : e >= h
                          ? "yesterday"
                          : e >= d
                            ? "month"
                            : "older"
                      : "unknown") !== r
                )
                  return ((r = t), t)
              }))
            : []
          if (el.value.includePages)
            if ("library:collection:shared-with-me" === el.value.directoryId) {
              let e
              ;(E[70] !== es
                ? ((e = es.formatMessage({ id: "space.home.sharedList", defaultMessage: "Shared with you" })),
                  (E[70] = es),
                  (E[71] = e))
                : (e = E[71]),
                (a = e))
            } else if ("recent" === el.value.tab) {
              let e
              ;(E[72] !== es
                ? ((e = es.formatMessage({
                    id: "space.provider.recents.list",
                    defaultMessage: "Recently opened files",
                  })),
                  (E[72] = es),
                  (E[73] = e))
                : (e = E[73]),
                (a = e))
            } else if ("suggested" === el.value.tab) {
              let e
              ;(E[74] !== es
                ? ((e = es.formatMessage({ id: "space.home.suggestedList", defaultMessage: "Suggested content" })),
                  (E[74] = es),
                  (E[75] = e))
                : (e = E[75]),
                (a = e))
            } else {
              let e
              ;(E[76] !== es
                ? ((e = es.formatMessage({ id: "space.home.itemsList", defaultMessage: "Your items" })),
                  (E[76] = es),
                  (E[77] = e))
                : (e = E[77]),
                (a = e))
            }
          else {
            let e
            ;(E[68] !== es
              ? ((e = es.formatMessage({ id: "library.list.label", defaultMessage: "Library files" })),
                (E[68] = es),
                (E[69] = e))
              : (e = E[69]),
              (a = e))
          }
          i = eg ? "div" : _.eb
          let T = eg && er.A.list
          ;(E[78] !== T
            ? ((n = (0, c.A)("-mx-[var(--padding-row-cell-x,var(--padding-row-x))]", T)), (E[78] = T), (E[79] = n))
            : (n = E[79]),
            (o = "grid"),
            (f = -1),
            (m = a),
            (p = ee),
            (y = k.T),
            (v =
              "stacked" === Z
                ? J && A.length > 0 && null == j[0] && (0, l.jsx)(D.zs, {})
                : (0, l.jsx)(eA, { layout: Z, kind: N, showSource: null != O, reserveDisclosureSpace: q })),
            (x = A.map((e, t) =>
              (0, l.jsxs)(
                u.Fragment,
                {
                  children: [
                    null != j[t] &&
                      (0, l.jsx)("div", {
                        role: "row",
                        "data-library-date-heading": "",
                        children: (0, l.jsx)("div", {
                          role: "gridcell",
                          className: (0, c.A)("mx-3 border-b border-subtle pb-2", 0 === t ? "pt-5" : "pt-10"),
                          children: (0, l.jsx)("h2", {
                            className: (0, c.A)(
                              "text-sm font-medium select-none",
                              ep ? "text-tertiary" : "text-secondary",
                            ),
                            children: (0, l.jsx)(g.A, {
                              id: "space.home.recent.dateSection",
                              defaultMessage:
                                "{period, select, today {Today} yesterday {Yesterday} month {This month} older {Older} other {Date unavailable}}",
                              values: { period: j[t] },
                            }),
                          }),
                        }),
                      }),
                    (0, l.jsx)(z.hm, {
                      value: { defer: "stacked" === Z && ee && t >= 24, pageList: eg },
                      children: eg ? e.content : (0, l.jsx)(_.Pn, { role: "presentation", children: e.content }),
                    }),
                  ],
                },
                e.id,
              ),
            )))
        }
        ;((E[14] = eu),
          (E[15] = eh),
          (E[16] = L),
          (E[17] = et),
          (E[18] = K),
          (E[19] = ed),
          (E[20] = es),
          (E[21] = N),
          (E[22] = eg),
          (E[23] = ef),
          (E[24] = O),
          (E[25] = q),
          (E[26] = Z),
          (E[27] = el.value.categories),
          (E[28] = el.value.directoryId),
          (E[29] = el.value.includePages),
          (E[30] = el.value.pageCollection),
          (E[31] = el.value.search),
          (E[32] = el.value.tab),
          (E[33] = ee),
          (E[34] = J),
          (E[35] = S),
          (E[36] = ec),
          (E[37] = $),
          (E[38] = ep),
          (E[39] = em),
          (E[40] = eo),
          (E[41] = i),
          (E[42] = n),
          (E[43] = o),
          (E[44] = f),
          (E[45] = m),
          (E[46] = p),
          (E[47] = y),
          (E[48] = v),
          (E[49] = x),
          (E[50] = b))
      } else
        ((i = E[41]),
          (n = E[42]),
          (o = E[43]),
          (f = E[44]),
          (m = E[45]),
          (p = E[46]),
          (y = E[47]),
          (v = E[48]),
          (x = E[49]),
          (b = E[50]))
      return b !== Symbol.for("react.early_return_sentinel")
        ? b
        : (E[80] !== i ||
          E[81] !== n ||
          E[82] !== o ||
          E[83] !== f ||
          E[84] !== m ||
          E[85] !== p ||
          E[86] !== y ||
          E[87] !== v ||
          E[88] !== x
            ? ((j = (0, l.jsxs)(i, {
                className: n,
                role: o,
                tabIndex: f,
                "aria-label": m,
                "aria-multiselectable": p,
                onKeyDown: y,
                children: [v, x],
              })),
              (E[80] = i),
              (E[81] = n),
              (E[82] = o),
              (E[83] = f),
              (E[84] = m),
              (E[85] = p),
              (E[86] = y),
              (E[87] = v),
              (E[88] = x),
              (E[89] = j))
            : (j = E[89]),
          j)
    }
    function ey(e) {
      return e.sortMetadata.date
    }
    function ev(e) {
      return (0, l.jsx)(u.Fragment, { children: e.content }, e.id)
    }
    function ex(e) {
      return "node" in e && "directory" === e.node.kind
    }
    function e_(e, t) {
      let { id: a, render: l } = e
      return { id: a, content: l(t + 1) }
    }
    function eb(e) {
      return new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime()
    }
    function eI(e) {
      return "node" in e && (0, K.cw)(e.node)
    }
    function eA(e) {
      let t,
        a,
        s,
        i,
        n,
        o,
        u,
        h,
        f,
        m,
        p,
        y,
        v = (0, r.c)(39),
        {
          layout: x,
          kind: _,
          isLoading: b,
          showSource: I,
          selectionEnabled: A,
          selection: j,
          sizeSortEnabled: E,
          reserveDisclosureSpace: T,
        } = e,
        C = void 0 !== b && b,
        R = void 0 !== I && I,
        L = void 0 === A || A,
        S = void 0 === E || E,
        M = void 0 !== T && T,
        P = (0, d.Ul)(F.rk),
        N = (0, d.Ul)(F.AB)
      v[0] !== P || v[1] !== C || v[2] !== N || v[3] !== S
        ? ((t = N
            ? (0, l.jsx)(ej, {
                sortEnabled: S,
                column: "size",
                className: (0, c.A)(
                  "hidden w-16 shrink-0 @lg/library-row:block",
                  "deleted" === P && "@3xl/library-row:w-40",
                ),
                isLoading: C,
                children: (0, l.jsx)(g.A, { id: "libraryNext.results.size", defaultMessage: "Size" }),
              })
            : null),
          (v[0] = P),
          (v[1] = C),
          (v[2] = N),
          (v[3] = S),
          (v[4] = t))
        : (t = v[4])
      let w = t
      ;(v[5] !== P || v[6] !== C || v[7] !== _ || v[8] !== j || v[9] !== L
        ? ((a = L && !C && "saved" !== P ? (j ?? (0, l.jsx)(ea.j8, { kind: _ })) : void 0),
          (v[5] = P),
          (v[6] = C),
          (v[7] = _),
          (v[8] = j),
          (v[9] = L),
          (v[10] = a))
        : (a = v[10]),
        v[11] !== M ? ((s = M ? (0, l.jsx)(D.aH, { depth: 0 }) : null), (v[11] = M), (v[12] = s)) : (s = v[12]),
        v[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, l.jsx)(g.A, { id: "libraryNext.results.name", defaultMessage: "Name" })), (v[13] = i))
          : (i = v[13]),
        v[14] !== s
          ? ((n = (0, l.jsxs)("span", { className: "flex items-center", children: [s, i] })), (v[14] = s), (v[15] = n))
          : (n = v[15]),
        v[16] !== C || v[17] !== n
          ? ((o = (0, l.jsx)(ej, { column: "name", className: "min-w-0 flex-1", isLoading: C, children: n })),
            (v[16] = C),
            (v[17] = n),
            (v[18] = o))
          : (o = v[18]),
        v[19] !== P || v[20] !== R
          ? ((u = R
              ? (0, l.jsx)("span", {
                  role: "columnheader",
                  "data-library-column": "source",
                  tabIndex: 0,
                  className: (0, c.A)("hidden shrink-0 @3xl/library-row:block", "deleted" === P ? "w-40" : "w-60"),
                  children:
                    "deleted" === P
                      ? (0, l.jsx)(g.A, { id: "libraryNext.results.space", defaultMessage: "Space" })
                      : (0, l.jsx)(g.A, { id: "libraryNext.results.source", defaultMessage: "Source" }),
                })
              : null),
            (v[19] = P),
            (v[20] = R),
            (v[21] = u))
          : (u = v[21]),
        v[22] !== P
          ? ((h =
              "shared" === P
                ? (0, l.jsx)("span", {
                    role: "columnheader",
                    "data-library-column": "shared",
                    tabIndex: 0,
                    className: "hidden w-60 shrink-0 @3xl/library-row:block",
                    children: (0, l.jsx)(g.A, { id: "libraryNext.results.sharedBy", defaultMessage: "Shared by" }),
                  })
                : null),
            (v[22] = P),
            (v[23] = h))
          : (h = v[23]))
      let U = "deleted" === P ? w : null
      ;(v[24] !== P
        ? ((f =
            "activity" === P
              ? (0, l.jsx)(g.A, { id: "libraryNext.results.date", defaultMessage: "Last activity" })
              : (0, l.jsx)(g.A, {
                  id: "libraryNext.results.dateHeadingWithSaved",
                  defaultMessage:
                    "{kind, select, suggested {Last activity} shared {Shared} deleted {Deleted} saved {Saved} other {Modified}}",
                  values: { kind: P },
                })),
          (v[24] = P),
          (v[25] = f))
        : (f = v[25]),
        v[26] !== C || v[27] !== f
          ? ((m = (0, l.jsx)(ej, {
              column: "date",
              className: "hidden w-28 shrink-0 @lg/library-row:block",
              isLoading: C,
              children: f,
            })),
            (v[26] = C),
            (v[27] = f),
            (v[28] = m))
          : (m = v[28]))
      let Y = "deleted" !== P ? w : null
      return (
        v[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, l.jsx)("span", { "aria-hidden": "true", className: (0, Q.H)(!1) })), (v[29] = p))
          : (p = v[29]),
        v[30] !== x ||
        v[31] !== o ||
        v[32] !== u ||
        v[33] !== h ||
        v[34] !== U ||
        v[35] !== m ||
        v[36] !== Y ||
        v[37] !== a
          ? ((y = (0, l.jsxs)(D.Xg, { layout: x, selection: a, children: [o, u, h, U, m, Y, p] })),
            (v[30] = x),
            (v[31] = o),
            (v[32] = u),
            (v[33] = h),
            (v[34] = U),
            (v[35] = m),
            (v[36] = Y),
            (v[37] = a),
            (v[38] = y))
          : (y = v[38]),
        y
      )
    }
    function ej(e) {
      let t,
        a,
        n,
        o,
        u,
        h = (0, r.c)(19),
        { sortEnabled: g, column: f, className: p, isLoading: y, children: v } = e,
        x = (0, d.gh)(F.Qy),
        _ = (0, d.Ul)(F.oW),
        b = (0, d.Ul)(F.QQ),
        I = y || !b || !(void 0 === g || g),
        A = !I && _?.key === f,
        j = _?.direction === "asc" ? "ascending" : "descending",
        E = _?.direction === "asc" ? i.n : s.I
      h[0] !== p ? ((t = (0, c.A)("h-full", p)), (h[0] = p), (h[1] = t)) : (t = h[1])
      let T = A ? j : "none"
      return (
        h[2] !== f || h[3] !== x || h[4] !== _
          ? ((a = () => x.set(F.C6, (0, G.Tg)(_, f))), (h[2] = f), (h[3] = x), (h[4] = _), (h[5] = a))
          : (a = h[5]),
        h[6] !== A || h[7] !== E
          ? ((n = A ? (0, l.jsx)(m.I, { className: "shrink-0", asset: E, focusable: "false" }) : null),
            (h[6] = A),
            (h[7] = E),
            (h[8] = n))
          : (n = h[8]),
        h[9] !== v || h[10] !== I || h[11] !== a || h[12] !== n
          ? ((o = (0, l.jsxs)("button", {
              type: "button",
              disabled: I,
              className:
                "flex size-full cursor-interaction items-center gap-1 text-start outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default",
              onClick: a,
              children: [v, n],
            })),
            (h[9] = v),
            (h[10] = I),
            (h[11] = a),
            (h[12] = n),
            (h[13] = o))
          : (o = h[13]),
        h[14] !== f || h[15] !== t || h[16] !== T || h[17] !== o
          ? ((u = (0, l.jsx)("div", {
              role: "columnheader",
              "data-library-column": f,
              className: t,
              "aria-sort": T,
              children: o,
            })),
            (h[14] = f),
            (h[15] = t),
            (h[16] = T),
            (h[17] = o),
            (h[18] = u))
          : (u = h[18]),
        u
      )
    }
  },
  BV4m(e, t, a) {
    var l = a("QosV"),
      r = a("qmMi"),
      s = a("zd8w"),
      i = a("Ywss"),
      n = a("jU86"),
      o = a("EAw5")
    a.d(
      t,
      {},
      {
        c: function () {
          let e,
            t,
            a = (0, l.c)(5),
            c = (0, r.gh)(n.Qy),
            { key: d } = (0, i.zy)(),
            u = (0, i.wQ)()
          return (
            a[0] !== d || a[1] !== u || a[2] !== c
              ? ((e = () => (0, o.z)(c, d, u)),
                (t = [c, d, u]),
                (a[0] = d),
                (a[1] = u),
                (a[2] = c),
                (a[3] = e),
                (a[4] = t))
              : ((e = a[3]), (t = a[4])),
            (0, s.useEffect)(e, t),
            null
          )
        },
      },
    )
  },
  PcRp(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      s = a("on57"),
      i = a("zd8w"),
      n = a("Wf1j"),
      o = a("Sm6l"),
      c = a("bqtn"),
      d = a("bVeK")
    function u(e, t) {
      return e + t
    }
    function h(e) {
      return e.getBoundingClientRect().width
    }
    function g(e) {
      return e.name
    }
    a.d(
      t,
      {},
      {
        Q: function (e) {
          let t,
            a,
            f,
            m,
            p,
            y,
            v,
            x,
            _,
            b,
            I,
            A,
            j,
            E,
            T = (0, r.c)(35),
            { items: C, disabled: R, onSelect: L } = e,
            S = void 0 !== R && R,
            M = (0, i.useRef)(null),
            P = (0, i.useRef)(null),
            [N, w] = (0, i.useState)(0),
            F = (0, n.A)()
          T[0] !== C ? ((t = JSON.stringify(C.map(g))), (T[0] = C), (T[1] = t)) : (t = T[1])
          let U = t
          ;(T[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = () => {
                let e = M.current,
                  t = P.current
                if (!e || !t) return
                let a = () => {
                    let a = Array.from(t.children, h),
                      l = a.pop() ?? 0,
                      r = e.getBoundingClientRect().width
                    if (a.reduce(u, 0) <= r) return void w(Math.max(0, a.length - 1))
                    let s = (a[0] ?? 0) + l,
                      i = 0
                    for (let e = a.length - 1; e > 0 && !((s += a[e]) > r); e--) i++
                    w(i)
                  },
                  l = new ResizeObserver(a)
                for (let a of [e, t]) l.observe(a)
                return (a(), () => l.disconnect())
              }),
              (T[2] = a))
            : (a = T[2]),
            T[3] !== U ? ((f = [U]), (T[3] = U), (T[4] = f)) : (f = T[4]),
            (0, i.useLayoutEffect)(a, f))
          let Y = Math.min(N, Math.max(0, C.length - 1))
          if (T[5] !== Y || T[6] !== S || T[7] !== F || T[8] !== C || T[9] !== L) {
            let e,
              t = 0 === Y ? C.slice(0, -1) : C.slice(1, -Y),
              a = 0 === Y ? C.slice(-1) : [C[0], ...C.slice(-Y)]
            ;(T[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(d.uM3, { className: "mx-2 text-tertiary" })), (T[15] = e))
              : (e = T[15]),
              (m = e),
              (v = M),
              (x = "relative grid w-full min-w-0 grid-cols-1 select-none"),
              (p = "col-start-1 row-start-1 -my-1 flex min-w-0 items-center overflow-hidden py-1"),
              (y = a.map((e, r) =>
                (0, l.jsxs)(
                  "span",
                  {
                    className: (0, s.A)("flex min-w-0 items-center", r === a.length - 1 ? "shrink" : "shrink-0"),
                    children: [
                      r > 0 ? m : null,
                      r === +(0 !== Y) && t.length > 0
                        ? (0, l.jsxs)(l.Fragment, {
                            children: [
                              (0, l.jsx)(c.Ab, {
                                align: "start",
                                triggerButton: (0, l.jsx)(o.$, {
                                  className: "shrink-0",
                                  color: "ghostTertiary",
                                  disabled: S,
                                  size: "inline",
                                  "aria-label": F.formatMessage({
                                    id: "libraryNext.breadcrumbs.parents",
                                    defaultMessage: "Open parent folders",
                                  }),
                                  children: (0, l.jsx)(d.l0Y, {}),
                                }),
                                children: t.map((e) =>
                                  (0, l.jsx)(
                                    c.ms.Item,
                                    { disabled: S, onSelect: () => L(e.id), children: e.name },
                                    e.id ?? "root",
                                  ),
                                ),
                              }),
                              m,
                            ],
                          })
                        : null,
                      e === C.at(-1) && null != e.id
                        ? (0, l.jsx)("span", {
                            className: "-my-1 min-w-0 truncate py-1",
                            "aria-current": "page",
                            title: e.name,
                            children: e.name,
                          })
                        : (0, l.jsx)(o.$, {
                            color: "ghostTertiary",
                            disabled: S,
                            size: "inline",
                            onClick: () => L(e.id),
                            children: e.name,
                          }),
                    ],
                  },
                  e.id ?? "root",
                ),
              )),
              (T[5] = Y),
              (T[6] = S),
              (T[7] = F),
              (T[8] = C),
              (T[9] = L),
              (T[10] = m),
              (T[11] = p),
              (T[12] = y),
              (T[13] = v),
              (T[14] = x))
          } else ((m = T[10]), (p = T[11]), (y = T[12]), (v = T[13]), (x = T[14]))
          if (
            (T[16] !== p || T[17] !== y
              ? ((_ = (0, l.jsx)("span", { className: p, children: y })), (T[16] = p), (T[17] = y), (T[18] = _))
              : (_ = T[18]),
            T[19] !== C || T[20] !== m)
          ) {
            let e
            ;(T[22] !== m
              ? ((e = (e, t) =>
                  (0, l.jsxs)(
                    "span",
                    {
                      className: "flex shrink-0 items-center",
                      children: [t > 0 ? m : null, (0, l.jsx)("span", { children: e.name })],
                    },
                    e.id ?? "root",
                  )),
                (T[22] = m),
                (T[23] = e))
              : (e = T[23]),
              (b = C.map(e)),
              (T[19] = C),
              (T[20] = m),
              (T[21] = b))
          } else b = T[21]
          return (
            T[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((I = (0, l.jsx)(d.l0Y, {})), (T[24] = I))
              : (I = T[24]),
            T[25] !== m
              ? ((A = (0, l.jsxs)("span", { className: "absolute flex shrink-0 items-center", children: [m, I] })),
                (T[25] = m),
                (T[26] = A))
              : (A = T[26]),
            T[27] !== b || T[28] !== A
              ? ((j = (0, l.jsx)("span", {
                  "aria-hidden": "true",
                  className: "pointer-events-none invisible col-start-1 row-start-1 min-w-0 overflow-hidden",
                  children: (0, l.jsxs)("span", { ref: P, className: "flex w-max items-center", children: [b, A] }),
                })),
                (T[27] = b),
                (T[28] = A),
                (T[29] = j))
              : (j = T[29]),
            T[30] !== j || T[31] !== v || T[32] !== x || T[33] !== _
              ? ((E = (0, l.jsxs)("span", { ref: v, className: x, children: [_, j] })),
                (T[30] = j),
                (T[31] = v),
                (T[32] = x),
                (T[33] = _),
                (T[34] = E))
              : (E = T[34]),
            E
          )
        },
      },
    )
  },
  JNrZ(e, t, a) {
    a.d(t, { l: () => S, d: () => C })
    var l = a("ABep"),
      r = a("QosV"),
      s = a("slpy"),
      i = a("ZII9"),
      n = a("n87C"),
      o = a("YMuE")
    let c = (0, a("ESTr").a)({
      name: "pencil-sparkle-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.347168, y: 2.347656, width: 16.071491, height: 16.071289 },
        visualBounds: { x: 2.347168, y: 2.347656, width: 16.071491, height: 16.071289 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.347168, y: 2.347656, width: 16.071491, height: 16.071289 },
        center: { x: 10.382914, y: 10.383301 },
        insets: { top: 2.347656, right: 1.581341, bottom: 1.581055, left: 2.347168 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.382914, y: 10.383301 },
          foreground: { x: 10.382914, y: 10.383301 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M12.2935 3.9707C13.7192 2.54824 15.9879 2.57709 17.3481 3.96191C18.751 5.31689 18.7968 7.5952 17.3569 9.03516L10.3569 16.0352L10.356 16.0342C9.64388 16.7801 8.73412 17.2852 7.78369 17.5059L7.78271 17.5068L3.91553 18.3945L3.91455 18.3926C3.74781 18.4322 3.40972 18.466 3.14014 18.1973C2.9367 17.9943 2.9054 17.752 2.91943 17.5732L2.94385 17.4199H2.94189L3.83154 13.5625C4.05579 12.5655 4.56679 11.695 5.26904 10.9941L12.2935 3.9707ZM6.20947 11.9355C5.66898 12.4748 5.29228 13.1261 5.12842 13.8574L5.12744 13.8613L4.42334 16.9131L7.48486 16.21C8.19069 16.0458 8.87308 15.6671 9.40381 15.1074L15.062 9.44824L11.8784 6.26562L6.20947 11.9355ZM16.4097 4.90332C15.5721 4.03993 14.1433 4.00382 13.2329 4.91211L12.8198 5.3252L16.0024 8.50781L16.4165 8.09473C17.3331 7.17807 17.2904 5.75485 16.4253 4.91895L16.4097 4.90332Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M4.5835 2.34766C4.73568 2.34776 4.86712 2.45525 4.89697 2.60449C4.9842 3.04053 5.15446 3.41309 5.4165 3.69531C5.67572 3.97447 6.04076 4.18326 6.55225 4.26855C6.70628 4.29423 6.81982 4.42783 6.81982 4.58398C6.81972 4.74005 6.70621 4.87278 6.55225 4.89844C6.04087 4.98369 5.67572 5.19263 5.4165 5.47168C5.15441 5.75394 4.9842 6.12736 4.89697 6.56348C4.86701 6.71257 4.73558 6.82021 4.5835 6.82031C4.43135 6.82031 4.30003 6.7126 4.27002 6.56348C4.1828 6.12736 4.01258 5.75394 3.75049 5.47168C3.49124 5.1925 3.12535 4.9837 2.61377 4.89844C2.46001 4.87262 2.34727 4.73992 2.34717 4.58398C2.34717 4.42793 2.45989 4.29435 2.61377 4.26855C3.12537 4.18329 3.49124 3.97451 3.75049 3.69531C4.01244 3.4131 4.18282 3.04045 4.27002 2.60449C4.29988 2.45518 4.43122 2.34766 4.5835 2.34766Z" fill="currentColor"/>',
    })
    var d = a("gkHQ"),
      u = a("qmMi"),
      h = a("Wf1j"),
      g = a("oyxz"),
      f = a("Qgfj"),
      m = a("g2p6"),
      p = a("Sm6l"),
      y = a("bqtn"),
      v = a("HOLv"),
      x = a("bVeK"),
      _ = a("pIbZ"),
      b = a("UxN3"),
      I = a("cGrE"),
      A = a("jU86"),
      j = a("drPn"),
      E = a("Q9li")
    let T = (0, u.un)(
      A.Qy,
      ({ get: e, scope: t }) => !0 === t.value.includePages && e(m.s6).data?.meetingsEnabled === !0,
    )
    function C(e) {
      let t,
        a,
        d,
        m,
        p,
        v,
        C,
        S,
        M,
        P,
        N = (0, r.c)(39),
        { showCategoryFilters: w } = e,
        F = void 0 === w || w,
        U = (0, u.gh)(A.Qy),
        Y = (0, h.A)(),
        O = (0, u.Ul)(T)
      if (N[0] !== Y || N[1] !== O || N[2] !== U || N[3] !== F) {
        C = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            r,
            i,
            n,
            o,
            c = ["images", "documents", "spreadsheets", "presentations", "pdfs"]
          if ((U.value.includePages && (O && c.unshift("meetings"), c.unshift("pages")), !(0, A.BG)(U.value))) {
            C = null
            break e
          }
          let u = (F ? U.value.categories.length : 0) + U.value.sources.length
          ;(N[12] !== U
            ? ((e = (e) => {
                let t = U.value.sources.includes(e) ? U.value.sources.filter((t) => t !== e) : [...U.value.sources, e]
                ;((0, I.np)(U, { sources: t }), (0, A.zl)(U, (0, A.SE)({ ...U.value, sources: t })))
              }),
              (N[12] = U),
              (N[13] = e))
            : (e = N[13]),
            (S = e),
            (t = y.Ab),
            N[14] !== U
              ? ((a = (e) => {
                  e && (0, I.Jt)(U)
                }),
                (N[14] = U),
                (N[15] = a))
              : (a = N[15]),
            (d = "end"),
            (m = "menu"),
            N[16] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, l.jsx)(g.A, { id: "libraryNext.filters.tooltip", defaultMessage: "Filters" })), (N[16] = r))
              : (r = N[16]))
          let h = u > 0
          ;(N[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = { 16: x.uG0, 20: x.FuZ }), (N[17] = i))
            : (i = N[17]),
            N[18] !== u || N[19] !== Y
              ? ((n = Y.formatMessage(
                  {
                    id: "libraryNext.filters.openWithCount",
                    defaultMessage:
                      "{activeFilterCount, plural, =0 {Open filters} one {Open filters, # active filter} other {Open filters, # active filters}}",
                  },
                  { activeFilterCount: u },
                )),
                (N[18] = u),
                (N[19] = Y),
                (N[20] = n))
              : (n = N[20]),
            N[21] !== u
              ? ((o =
                  u > 0
                    ? (0, l.jsx)("span", {
                        "aria-hidden": !0,
                        className: "count-ISCbrn",
                        children: (0, l.jsx)(f.Gr, { value: u }),
                      })
                    : null),
                (N[21] = u),
                (N[22] = o))
              : (o = N[22]),
            N[23] !== h || N[24] !== n || N[25] !== o
              ? ((p = (0, l.jsx)(s.m, {
                  content: r,
                  children: (0, l.jsx)(_.p, {
                    color: "secondary",
                    variant: "ghost",
                    uniform: !0,
                    selected: h,
                    icon: i,
                    "aria-label": n,
                    children: o,
                  }),
                })),
                (N[23] = h),
                (N[24] = n),
                (N[25] = o),
                (N[26] = p))
              : (p = N[26]),
            (v =
              F && (0, A.Fy)(U.value)
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(y.ms.SectionLabel, {
                        children: (0, l.jsx)("span", {
                          className: "text-secondary",
                          children: (0, l.jsx)(g.A, {
                            id: "libraryNext.filters.fileType",
                            defaultMessage: "File type",
                          }),
                        }),
                      }),
                      c.map((e) =>
                        (0, l.jsx)(
                          y.ms.CheckboxItem,
                          {
                            onSelect: L,
                            checked: U.value.categories.includes(e),
                            onCheckedChange: () => {
                              let t
                              ;((t = U.value.categories.includes(e)
                                ? U.value.categories.filter((t) => t !== e)
                                : [...U.value.categories, e]),
                                (0, I.np)(U, { fileTypes: t }),
                                (0, A.zl)(U, (0, A.SE)({ ...U.value, categories: t })))
                            },
                            leftIcon: (0, l.jsx)(b.b5, { icon: j.A[e] }),
                            children: (0, l.jsx)("span", {
                              className: "flex-1",
                              children: (0, l.jsx)(g.A, { ...E.s[e] }),
                            }),
                          },
                          e,
                        ),
                      ),
                    ],
                  })
                : null))
        }
        ;((N[0] = Y),
          (N[1] = O),
          (N[2] = U),
          (N[3] = F),
          (N[4] = t),
          (N[5] = a),
          (N[6] = d),
          (N[7] = m),
          (N[8] = p),
          (N[9] = v),
          (N[10] = C),
          (N[11] = S))
      } else ((t = N[4]), (a = N[5]), (d = N[6]), (m = N[7]), (p = N[8]), (v = N[9]), (C = N[10]), (S = N[11]))
      return C !== Symbol.for("react.early_return_sentinel")
        ? C
        : (N[27] !== U.value || N[28] !== F || N[29] !== S
            ? ((M = (0, A.cZ)(U.value)
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      F && (0, A.Fy)(U.value) ? (0, l.jsx)(y.ms.Separator, {}) : null,
                      (0, l.jsx)(y.ms.SectionLabel, {
                        children: (0, l.jsx)("span", {
                          className: "text-secondary",
                          children: (0, l.jsx)(g.A, { id: "libraryNext.filters.source", defaultMessage: "Source" }),
                        }),
                      }),
                      ["uploaded", "generated"].map((e) =>
                        (0, l.jsx)(
                          y.ms.CheckboxItem,
                          {
                            onSelect: R,
                            checked: U.value.sources.includes(e),
                            onCheckedChange: () => S(e),
                            leftIcon: (0, l.jsx)(b.b5, {
                              icon: { assets: "uploaded" === e ? { 16: i.U, 20: n.D } : { 16: o.n, 20: c } },
                            }),
                            children: (0, l.jsx)("span", {
                              className: "flex-1",
                              children: (0, l.jsx)(g.A, { ...E.s[e] }),
                            }),
                          },
                          e,
                        ),
                      ),
                    ],
                  })
                : null),
              (N[27] = U.value),
              (N[28] = F),
              (N[29] = S),
              (N[30] = M))
            : (M = N[30]),
          N[31] !== t || N[32] !== a || N[33] !== d || N[34] !== m || N[35] !== p || N[36] !== v || N[37] !== M
            ? ((P = (0, l.jsxs)(t, { onOpenChange: a, align: d, contentWidth: m, triggerButton: p, children: [v, M] })),
              (N[31] = t),
              (N[32] = a),
              (N[33] = d),
              (N[34] = m),
              (N[35] = p),
              (N[36] = v),
              (N[37] = M),
              (N[38] = P))
            : (P = N[38]),
          P)
    }
    function R(e) {
      return e.preventDefault()
    }
    function L(e) {
      return e.preventDefault()
    }
    function S(e) {
      let t,
        a,
        s,
        i,
        n,
        o = (0, r.c)(19),
        { showCategoryFilters: c } = e,
        f = void 0 === c || c,
        m = (0, u.gh)(A.Qy),
        y = (0, h.A)()
      if (!(0, A.BG)(m.value)) return null
      o[0] !== m
        ? ((t = (e) => {
            let t = m.value.sources.filter((t) => t !== e)
            ;((0, I.np)(m, { sources: t }), (0, A.zl)(m, (0, A.SE)({ ...m.value, sources: t })))
          }),
          (o[0] = m),
          (o[1] = t))
        : (t = o[1])
      let x = t
      o[2] !== m
        ? ((a = (e) => {
            let t = m.value.categories.filter((t) => t !== e)
            ;((0, I.np)(m, { fileTypes: t }), (0, A.zl)(m, (0, A.SE)({ ...m.value, categories: t })))
          }),
          (o[2] = m),
          (o[3] = a))
        : (a = o[3])
      let _ = a
      if (o[4] !== y || o[5] !== x || o[6] !== m.value.sources) {
        let e
        ;(o[8] !== y || o[9] !== x
          ? ((e = (e) =>
              (0, l.jsxs)(
                p.$,
                {
                  color: "outline",
                  size: "actionSm",
                  onClick: () => x(e),
                  "aria-label": y.formatMessage(
                    {
                      id: "libraryNext.filters.clearSource",
                      defaultMessage:
                        "{source, select, uploaded {Clear Uploaded filter} other {Clear Generated filter}}",
                    },
                    { source: e },
                  ),
                  children: [(0, l.jsx)(g.A, { ...E.s[e] }), (0, l.jsx)(v.I, { asset: d.Q, "data-no-autosize": !0 })],
                },
                e,
              )),
            (o[8] = y),
            (o[9] = x),
            (o[10] = e))
          : (e = o[10]),
          (s = m.value.sources.map(e)),
          (o[4] = y),
          (o[5] = x),
          (o[6] = m.value.sources),
          (o[7] = s))
      } else s = o[7]
      return (
        o[11] !== y || o[12] !== _ || o[13] !== m.value.categories || o[14] !== f
          ? ((i =
              f &&
              m.value.categories.map((e) =>
                (0, l.jsxs)(
                  p.$,
                  {
                    color: "outline",
                    size: "actionSm",
                    onClick: () => _(e),
                    "aria-label": y.formatMessage(
                      {
                        id: "libraryNext.filters.clearCategoryWithMeetings",
                        defaultMessage:
                          "{category, select, pages {Clear Pages filter} meetings {Clear Meetings filter} images {Clear Images filter} documents {Clear Documents filter} spreadsheets {Clear Spreadsheets filter} presentations {Clear Presentations filter} other {Clear PDFs filter}}",
                      },
                      { category: e },
                    ),
                    children: [(0, l.jsx)(g.A, { ...E.s[e] }), (0, l.jsx)(v.I, { asset: d.Q, "data-no-autosize": !0 })],
                  },
                  e,
                ),
              )),
            (o[11] = y),
            (o[12] = _),
            (o[13] = m.value.categories),
            (o[14] = f),
            (o[15] = i))
          : (i = o[15]),
        o[16] !== s || o[17] !== i
          ? ((n = (0, l.jsxs)(l.Fragment, { children: [s, i] })), (o[16] = s), (o[17] = i), (o[18] = n))
          : (n = o[18]),
        n
      )
    }
  },
  M4Gn(e, t, a) {
    a.d(t, { pH: () => D, I2: () => B, e9: () => O })
    var l = a("ABep"),
      r = a("QosV"),
      s = a("D7Ms"),
      i = a("T0Rc"),
      n = a("qmMi"),
      o = a("zd8w"),
      c = a("oyxz"),
      d = a("Wf1j"),
      u = a("Qgfj"),
      h = a("Ywss"),
      g = a("MeAu"),
      f = a("BrP7"),
      m = a("UxLW"),
      p = a("WzqN"),
      y = a("Ui6L"),
      v = a("pzCo"),
      x = a("GEsy"),
      _ = a("cGrE"),
      b = a("TCFx"),
      I = a("jU86"),
      A = a("RjIR"),
      j = a("EAw5"),
      E = a("PcRp"),
      T = a("dLIb"),
      C = a("JNrZ"),
      R = a("i5ac"),
      L = a.n(R),
      S = a("bqtn"),
      M = a("bVeK"),
      P = a("pIbZ"),
      N = a("UxN3"),
      w = a("xicY"),
      F = a("XdIt")
    function U() {
      let e,
        t,
        a,
        s = (0, r.c)(5),
        i = (0, d.A)()
      s[0] !== i
        ? ((e = i.formatMessage({ id: "libraryNext.settings.label", defaultMessage: "Settings" })),
          (s[0] = i),
          (s[1] = e))
        : (e = s[1])
      let n = e
      return (
        s[2] === Symbol.for("react.memo_cache_sentinel") ? ((t = { 16: M.YWV, 20: M.RhA }), (s[2] = t)) : (t = s[2]),
        s[3] !== n
          ? ((a = (0, l.jsx)(S.Ab, {
              align: "end",
              contentWidth: "menu",
              triggerButton: (0, l.jsx)(P.p, {
                color: "secondary",
                variant: "ghost",
                uniform: !0,
                icon: t,
                "aria-label": n,
              }),
              children: (0, l.jsx)(Y, { label: n }),
            })),
            (s[3] = n),
            (s[4] = a))
          : (a = s[4]),
        a
      )
    }
    function Y(e) {
      let t,
        a,
        s,
        i,
        o,
        d,
        u,
        g,
        f = (0, r.c)(14),
        { label: m } = e,
        y = (0, n.gh)(I.Qy),
        v = (0, n.Ul)(I.en),
        x = (0, n.Ul)(p.y),
        { data: A } = (0, n.Ul)(I.o_),
        j = (0, n.Ul)(I.xG),
        E = (0, n.Ul)(I.d8),
        T = (0, n.Ul)(w.Ai),
        C =
          null == A
            ? void 0
            : L()(A, b.sm).flatMap((e) => {
                let t = (0, b.sm)(e),
                  a = j?.filter((e) => e.provider === t)
                return "native" !== t && "native_shared" !== t && T.has(t)
                  ? (a?.map((t) => ({ entry: e, account: t })) ?? [])
                  : [{ entry: e, account: void 0 }]
              })
      ;((0, h.Zp)(),
        f[0] !== m
          ? ((t = (0, l.jsx)(S.ms.SectionLabel, {
              children: (0, l.jsx)("span", { className: "text-secondary", children: m }),
            })),
            (f[0] = m),
            (f[1] = t))
          : (t = f[1]))
      let R = C?.map((e) => {
        let { entry: t, account: a } = e,
          r = (0, b.sm)(t)
        if (x.has(r)) return null
        let s = (0, l.jsx)(c.A, {
          id: "libraryNext.settings.providerName",
          defaultMessage: "{provider}",
          values: { provider: t.node.name },
        })
        return (
          null != a &&
            C.filter((e) => (0, b.sm)(e.entry) === r).length > 1 &&
            (s =
              null != a.accountLabel
                ? (0, l.jsx)(c.A, {
                    id: "libraryNext.settings.providerAccount",
                    defaultMessage: "{provider} \xb7 {account}",
                    values: { provider: t.node.name, account: a.accountLabel },
                  })
                : (0, l.jsx)(c.A, {
                    id: "libraryNext.settings.providerUnnamedAccount",
                    defaultMessage: "{provider} \xb7 Account {number}",
                    values: { provider: t.node.name, number: a.accountNumber },
                  })),
          (0, l.jsx)(
            S.ms.CheckboxItem,
            {
              indicator: "switch",
              leftIcon: (0, l.jsx)(F.u, { provider: r, standalone: "row" }),
              checked: null == a ? !v.has(r) : E.has(a.id),
              onCheckedChange: (e) => {
                a?.accountKey != null ? (0, I.hK)(y, a.id, !0 === e) : (0, I.$4)(y, r, !0 === e)
              },
              children: s,
            },
            a?.id ?? t.node.id,
          )
        )
      })
      return (
        f[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, l.jsx)(S.ms.Separator, {})), (f[2] = a))
          : (a = f[2]),
        f[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, l.jsx)(S.ms.SectionLabel, {
              children: (0, l.jsx)("span", {
                className: "text-secondary",
                children: (0, l.jsx)(c.A, { id: "libraryNext.settings.manage", defaultMessage: "Manage" }),
              }),
            })),
            (f[3] = s))
          : (s = f[3]),
        f[4] !== y
          ? ((i = () => {
              ;(y.value.deleted || (0, _.np)(y, { section: "recently_deleted" }),
                (0, I.zl)(
                  y,
                  (0, I.SE)({
                    ...y.value,
                    directoryId: null,
                    search: "",
                    categories: [],
                    sources: [],
                    deleted: !0,
                    tab: "all",
                  }),
                ))
            }),
            (f[4] = y),
            (f[5] = i))
          : (i = f[5]),
        f[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, l.jsx)(N.b5, { icon: { 16: M.cSG, 20: M.zwW } })),
            (d = (0, l.jsx)(c.A, { id: "libraryNext.settings.trash", defaultMessage: "Trash" })),
            (f[6] = o),
            (f[7] = d))
          : ((o = f[6]), (d = f[7])),
        f[8] !== i
          ? ((u = (0, l.jsx)(S.ms.Item, { onSelect: i, leftIcon: o, children: d })), (f[8] = i), (f[9] = u))
          : (u = f[9]),
        f[10] !== t || f[11] !== R || f[12] !== u
          ? ((g = (0, l.jsxs)(l.Fragment, { children: [t, R, a, s, null, u] })),
            (f[10] = t),
            (f[11] = R),
            (f[12] = u),
            (f[13] = g))
          : (g = f[13]),
        g
      )
    }
    function O(e) {
      let t,
        a = (0, r.c)(5),
        { rootName: s } = e,
        i = (0, n.gh)(I.Qy)
      if (null != i.value.directoryId || i.value.deleted) {
        let e,
          t = `${i.value.accountId}:${i.value.userId ?? ""}:${!!i.value.deleted}`
        return (
          a[0] !== s || a[1] !== t
            ? ((e = (0, l.jsx)(H, { rootName: s }, t)), (a[0] = s), (a[1] = t), (a[2] = e))
            : (e = a[2]),
          e
        )
      }
      if (i.value.search) {
        let e
        return (
          a[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(c.A, { id: "libraryNext.title.search", defaultMessage: "Search", tagName: "span" })),
              (a[3] = e))
            : (e = a[3]),
          e
        )
      }
      return (
        a[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(c.A, { id: "libraryNext.title.library", defaultMessage: "Library", tagName: "span" })),
            (a[4] = t))
          : (t = a[4]),
        t
      )
    }
    function B(e) {
      let t,
        a,
        s,
        i,
        o,
        u,
        g,
        m = (0, r.c)(36),
        {
          selectedKey: p,
          additionalTabs: y,
          onFileTabSelect: v,
          basePath: x,
          browseLocation: _,
          onNavigate: b,
          fileTabs: j,
          tabLabels: E,
          preserveSearch: T,
        } = e
      m[0] !== y ? ((t = void 0 === y ? [] : y), (m[0] = y), (m[1] = t)) : (t = m[1])
      let C = t,
        R = void 0 === x ? "/library" : x
      m[2] !== j
        ? ((a = void 0 === j ? ["suggested", "favorites", "folders", "images", "all"] : j), (m[2] = j), (m[3] = a))
        : (a = m[3])
      let L = a,
        S = void 0 !== T && T,
        M = (0, n.gh)(I.oD),
        P = (0, h.zy)(),
        N = (0, h.Zp)(),
        w = (0, d.A)(),
        F = (0, n.Ul)(A._)
      m[4] !== R || m[5] !== _ || m[6] !== P
        ? ((s = _ ?? (0, I.ER)(P.pathname, P.search, R)), (m[4] = R), (m[5] = _), (m[6] = P), (m[7] = s))
        : (s = m[7])
      let U = s
      if (m[8] !== C || m[9] !== U || m[10] !== F || m[11] !== L || m[12] !== S || m[13] !== E) {
        let e, t
        ;(m[15] !== F ? ((e = (e) => "favorites" !== e || F), (m[15] = F), (m[16] = e)) : (e = m[16]),
          m[17] !== U || m[18] !== S || m[19] !== E
            ? ((t = (e) => ({
                key: e,
                name: E?.[e] ?? (0, l.jsx)(c.A, { ...k[e] }),
                href: (0, I.SE)({
                  ...U,
                  tab: e,
                  directoryId: null,
                  search: S ? U.search : "",
                  categories: [],
                  sources: [],
                }),
              })),
              (m[17] = U),
              (m[18] = S),
              (m[19] = E),
              (m[20] = t))
            : (t = m[20]),
          (i = [...L.filter(e).map(t), ...C]),
          (m[8] = C),
          (m[9] = U),
          (m[10] = F),
          (m[11] = L),
          (m[12] = S),
          (m[13] = E),
          (m[14] = i))
      } else i = m[14]
      let Y = i
      return (
        m[21] !== w
          ? ((o = w.formatMessage({ id: "libraryNext.tabs.label", defaultMessage: "Library sections" })),
            (m[21] = w),
            (m[22] = o))
          : (o = m[22]),
        m[23] !== L || m[24] !== N || m[25] !== v || m[26] !== b || m[27] !== M || m[28] !== p || m[29] !== Y
          ? ((u = (e) => {
              if (e === p) return
              let t = Y.find((t) => t.key === e)
              if (null != t) {
                let a = L.find((t) => t === e)
                ;(null != a && (v?.(a), (0, I.me)(M, { lastTab: a })), null != b ? b(t.href) : N(t.href))
              }
            }),
            (m[23] = L),
            (m[24] = N),
            (m[25] = v),
            (m[26] = b),
            (m[27] = M),
            (m[28] = p),
            (m[29] = Y),
            (m[30] = u))
          : (u = m[30]),
        m[31] !== p || m[32] !== u || m[33] !== o || m[34] !== Y
          ? ((g = (0, l.jsx)(f.t, {
              variant: "browse",
              scrollable: !0,
              tabs: Y,
              selectedKey: p,
              ariaLabel: o,
              onSelect: u,
            })),
            (m[31] = p),
            (m[32] = u),
            (m[33] = o),
            (m[34] = Y),
            (m[35] = g))
          : (g = m[35]),
        g
      )
    }
    let G = (0, n.i1)(
      I.oD,
      (e, { get: t }) =>
        e?.map((e) => {
          let a = t(I.WC, e.id)
          return a?.previousName === e.name ? { ...e, name: a.name } : e
        }),
      { autoDispose: !0 },
    )
    function H(e) {
      let t,
        a,
        c,
        u,
        g,
        f,
        v,
        x,
        _,
        A = (0, r.c)(48),
        { rootName: T } = e,
        C = (0, n.gh)(I.Qy),
        R = (0, h.zy)(),
        L = (0, n.Ul)(I.g_),
        S = (0, n.Ul)(I.JZ),
        M = "available" === (0, n.Ul)(I.IM),
        P = (0, n.Ul)(p.y),
        N = (0, n.Ul)(I.R4),
        w = (0, n.Ul)(I.L$)
      A[0] !== N ? ((t = { ...N, placeholderData: s.rX, staleTime: N.staleTime }), (A[0] = N), (A[1] = t)) : (t = A[1])
      let {
        data: F,
        dataUpdatedAt: U,
        isPlaceholderData: Y,
        isFetching: O,
        isError: B,
        isSuccess: H,
        isFetchedAfterMount: D,
      } = (0, i.I)(t, C.queryClient)
      A[2] !== M ||
      A[3] !== F ||
      A[4] !== D ||
      A[5] !== O ||
      A[6] !== Y ||
      A[7] !== H ||
      A[8] !== S ||
      A[9] !== C.value.directoryId
        ? ((a = M && S && H && D && !O && !Y ? (0, b.F6)(C.value.directoryId, F.items) : null),
          (A[2] = M),
          (A[3] = F),
          (A[4] = D),
          (A[5] = O),
          (A[6] = Y),
          (A[7] = H),
          (A[8] = S),
          (A[9] = C.value.directoryId),
          (A[10] = a))
        : (a = A[10])
      let k = a
      A[11] !== R || A[12] !== L
        ? ((c = null == L ? R : (0, h.Rr)(L)), (A[11] = R), (A[12] = L), (A[13] = c))
        : (c = A[13])
      let V = c
      if (
        A[14] !== V.hash ||
        A[15] !== V.search ||
        A[16] !== k ||
        A[17] !== P ||
        A[18] !== C.value.basePath ||
        A[19] !== C.value.directoryId
      ) {
        let e = new URLSearchParams(V.search)
        ;("external-sharepoint:root" === C.value.directoryId && P.has("sharepoint") && e.delete("search"),
          (u =
            null == k
              ? null
              : `${C.value.basePath}/d/${encodeURIComponent(k)}${e.size > 0 ? `?${e.toString()}` : ""}${V.hash ?? ""}`),
          (A[14] = V.hash),
          (A[15] = V.search),
          (A[16] = k),
          (A[17] = P),
          (A[18] = C.value.basePath),
          (A[19] = C.value.directoryId),
          (A[20] = u))
      } else u = A[20]
      let z = u
      ;(A[21] !== z || A[22] !== C
        ? ((g = () => {
            null != z && (0, I.zl)(C, z, { replace: !0 })
          }),
          (f = [z, C]),
          (A[21] = z),
          (A[22] = C),
          (A[23] = g),
          (A[24] = f))
        : ((g = A[23]), (f = A[24])),
        (0, o.useEffect)(g, f))
      let Q = "/space" === C.value.basePath ? C.value.directoryId : null,
        q = (0, m.AG)(Q),
        W = M
          ? F?.items.filter(
              (e) =>
                (!e.is_root || (null != q && (0, b.oh)(e.id) === q)) &&
                !("google_drive" === q && (0, b.$n)(C.value.directoryId) && e.id === C.value.directoryId),
            )
          : void 0
      ;(M &&
        !B &&
        w?.directoryId === C.value.directoryId &&
        (null == F || Y || (O && U < w.navigationStartedAt)) &&
        (W = w.items),
        A[25] !== W || A[26] !== R.state || A[27] !== C
          ? ((v = (e) => {
              ;(C.value.deleted ||
                null == C.value.directoryId ||
                e === C.value.directoryId ||
                (0, j.i)(C, "CHATGPT_FILE_LIBRARY_FOLDER_NAVIGATION_ACTION_BACK", C.value.directoryId),
                (0, I.gb)(C, e, W?.slice(0, W.findIndex((t) => t.id === e) + 1)))
              let t = C.value.folderReturnLocations,
                a = t?.accountId === C.value.accountId && t.userId === C.value.userId ? t.locations : [],
                l = a.findIndex((t) => t.directoryId === e),
                r =
                  l >= 0
                    ? a.slice(0, l)
                    : a.filter(
                        (t) =>
                          null == t.directoryId ||
                          W?.slice(
                            0,
                            Math.max(
                              0,
                              W.findIndex((t) => t.id === e),
                            ),
                          ).some((e) => e.id === t.directoryId),
                      )
              ;(0, I.zl)(
                C,
                a[l]?.href ??
                  (0, I.SE)({ ...C.value, directoryId: e, deleted: !1, search: null == e ? "" : C.value.search }),
                {
                  state: {
                    ...R.state,
                    libraryFolderReturnLocations: null != t && a.length > 0 ? { ...t, locations: r } : void 0,
                  },
                },
              )
            }),
            (A[25] = W),
            (A[26] = R.state),
            (A[27] = C),
            (A[28] = v))
          : (v = A[28]))
      let Z = v,
        $ = (0, d.A)(),
        K = (0, y.Y)($, q),
        J = (0, n._U)(G, W)
      if (null != Q && null != K) {
        let e
        ;(A[29] !== J || A[30] !== Q || A[31] !== K
          ? ((e = J?.length ? J : [{ id: `${Q.split(":", 1)[0]}:root`, name: K }]),
            (A[29] = J),
            (A[30] = Q),
            (A[31] = K),
            (A[32] = e))
          : (e = A[32]),
          (x = e))
      } else {
        let e, t, a, l
        ;(A[33] !== $ || A[34] !== T
          ? ((e = T ?? $.formatMessage({ id: "libraryNext.title.library", defaultMessage: "Library" })),
            (A[33] = $),
            (A[34] = T),
            (A[35] = e))
          : (e = A[35]),
          A[36] !== e ? ((t = { id: null, name: e }), (A[36] = e), (A[37] = t)) : (t = A[37]),
          A[38] !== J || A[39] !== $ || A[40] !== C.value.deleted
            ? ((a = C.value.deleted
                ? [{ id: "trash", name: $.formatMessage({ id: "libraryNext.title.trash", defaultMessage: "Trash" }) }]
                : (J ?? [])),
              (A[38] = J),
              (A[39] = $),
              (A[40] = C.value.deleted),
              (A[41] = a))
            : (a = A[41]),
          A[42] !== a || A[43] !== t ? ((l = [t, ...a]), (A[42] = a), (A[43] = t), (A[44] = l)) : (l = A[44]),
          (x = l))
      }
      return (
        A[45] !== Z || A[46] !== x
          ? ((_ = (0, l.jsx)(E.Q, { items: x, onSelect: Z })), (A[45] = Z), (A[46] = x), (A[47] = _))
          : (_ = A[47]),
        _
      )
    }
    function D(e) {
      let t,
        a,
        s,
        i,
        c,
        u,
        f,
        m,
        p,
        y,
        A,
        j,
        E,
        R,
        L,
        S,
        M,
        P,
        N,
        w,
        F,
        Y = (0, r.c)(76),
        { actions: O, showBrowseControls: B, showFilters: G, filters: H, searchLabel: D, searchPlaceholder: k } = e,
        V = void 0 === B || B,
        z = void 0 === G || G,
        Q = (0, n.gh)(I.Qy),
        q = (0, d.A)(),
        W = (0, n.Ul)(I.eY),
        Z = (0, n.Ul)(I.YH),
        $ = (0, n.Ul)(I.JZ)
      ;(Y[0] !== Q
        ? ((t = () => (0, I.hV)(Q)), (a = [Q]), (Y[0] = Q), (Y[1] = t), (Y[2] = a))
        : ((t = Y[1]), (a = Y[2])),
        (0, o.useEffect)(t, a))
      let K = (0, h.zy)(),
        J = (0, n.Ul)(I.g_)
      Y[3] !== K || Y[4] !== J ? ((s = null == J ? K : (0, h.Rr)(J)), (Y[3] = K), (Y[4] = J), (Y[5] = s)) : (s = Y[5])
      let X = s
      Y[6] !== X.search
        ? ((i = new URLSearchParams(X.search).get("search") ?? ""), (Y[6] = X.search), (Y[7] = i))
        : (i = Y[7])
      let ee = i
      Y[8] !== ee || Y[9] !== Q
        ? ((c = () => ({ searchScope: Q, committedSearch: ee, draftSearch: ee })), (Y[8] = ee), (Y[9] = Q), (Y[10] = c))
        : (c = Y[10])
      let [et, ea] = (0, o.useState)(c),
        el = et
      ;(et.searchScope !== Q || et.committedSearch !== ee) &&
        ea((el = { searchScope: Q, committedSearch: ee, draftSearch: ee }))
      let er = "spaces" === Q.value.entrySurface && "" !== ee && "" !== el.draftSearch.trim() && el.draftSearch !== ee
      ;(Y[11] !== er || Y[12] !== Q
        ? ((u = () => {
            if (er) return (0, v.S)(Q)
          }),
          (f = [Q, er]),
          (Y[11] = er),
          (Y[12] = Q),
          (Y[13] = u),
          (Y[14] = f))
        : ((u = Y[13]), (f = Y[14])),
        (0, o.useLayoutEffect)(u, f))
      let es = (0, x.o)(el, 200),
        ei = ee
      if (
        ("" === el.draftSearch.trim() ? (ei = "") : es === el && (ei = es.draftSearch),
        Y[15] !== ee || Y[16] !== K.state || Y[17] !== Q || Y[18] !== ei
          ? ((m = () => {
              ei !== ee && (0, I.zl)(Q, (0, I.SE)({ ...Q.value, search: ei }), { replace: !0, state: K.state })
            }),
            (Y[15] = ee),
            (Y[16] = K.state),
            (Y[17] = Q),
            (Y[18] = ei),
            (Y[19] = m))
          : (m = Y[19]),
        Y[20] !== ee || Y[21] !== K.state || Y[22] !== Q || Y[23] !== ei
          ? ((p = [ee, K.state, Q, ei]), (Y[20] = ee), (Y[21] = K.state), (Y[22] = Q), (Y[23] = ei), (Y[24] = p))
          : (p = Y[24]),
        (0, o.useEffect)(m, p),
        Q.value.deleted)
      ) {
        let e
        ;(Y[25] !== q
          ? ((e = q.formatMessage({ id: "libraryNext.search.trashLabel", defaultMessage: "Search trash" })),
            (Y[25] = q),
            (Y[26] = e))
          : (e = Y[26]),
          (y = e))
      } else if (null != Q.value.directoryId && !$) {
        let e
        ;(Y[27] !== q
          ? ((e = q.formatMessage({ id: "libraryNext.search.folderLabel", defaultMessage: "Search folder" })),
            (Y[27] = q),
            (Y[28] = e))
          : (e = Y[28]),
          (y = e))
      }
      Y[29] !== Q.value.basePath || Y[30] !== Q.value.deleted || Y[31] !== Q.value.search
        ? ((A = !Q.value.deleted || "/space" !== Q.value.basePath || "" !== Q.value.search.trim()),
          (Y[29] = Q.value.basePath),
          (Y[30] = Q.value.deleted),
          (Y[31] = Q.value.search),
          (Y[32] = A))
        : (A = Y[32])
      let en = D ?? y,
        eo = V && !W
      return (
        Y[33] !== Q ? ((j = (e) => (0, I.ul)(Q, e)), (Y[33] = Q), (Y[34] = j)) : (j = Y[34]),
        Y[35] !== j || Y[36] !== Z
          ? ((E = { value: Z, onChange: j }), (Y[35] = j), (Y[36] = Z), (Y[37] = E))
          : (E = Y[37]),
        Y[38] !== Q
          ? ((R = () => {
              let e = Q.get(I.sp)
              !Q.get(I.JZ) && (0, b._w)(e) && Q.get(I.mS, null).openSession()
            }),
            (Y[38] = Q),
            (Y[39] = R))
          : (R = Y[39]),
        Y[40] !== ee || Y[41] !== el.draftSearch || Y[42] !== Q
          ? ((L = (e) => {
              ;(el.draftSearch === ee && e !== ee && (0, I.VP)(Q),
                ea({ searchScope: Q, committedSearch: ee, draftSearch: e }))
              let t = Q.get(I.sp)
              !Q.get(I.JZ) && (0, b._w)(t) && Q.get(I.mS, null).setSearch(e)
            }),
            (Y[40] = ee),
            (Y[41] = el.draftSearch),
            (Y[42] = Q),
            (Y[43] = L))
          : (L = Y[43]),
        Y[44] !== Q ? ((S = (e) => (0, _.np)(Q, { layout: e })), (Y[44] = Q), (Y[45] = S)) : (S = Y[45]),
        Y[46] !== H || Y[47] !== W || Y[48] !== Q.value.deleted || Y[49] !== V || Y[50] !== z
          ? ((M = V
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    z && void 0 === H ? (0, l.jsx)(C.d, {}) : null,
                    Q.value.deleted && !W && (z || null != H) ? (0, l.jsx)(g.Ow, {}) : null,
                  ],
                })
              : null),
            (Y[46] = H),
            (Y[47] = W),
            (Y[48] = Q.value.deleted),
            (Y[49] = V),
            (Y[50] = z),
            (Y[51] = M))
          : (M = Y[51]),
        Y[52] !== H || Y[53] !== M
          ? ((P = (0, l.jsxs)(l.Fragment, { children: [H, M] })), (Y[52] = H), (Y[53] = M), (Y[54] = P))
          : (P = Y[54]),
        Y[55] !== V || Y[56] !== z
          ? ((N = V && z ? (0, l.jsx)(C.l, {}) : null), (Y[55] = V), (Y[56] = z), (Y[57] = N))
          : (N = Y[57]),
        Y[58] !== Q.value.basePath || Y[59] !== V || Y[60] !== z
          ? ((w =
              V && z && "/space" !== Q.value.basePath && "/space/files" !== Q.value.basePath
                ? (0, l.jsx)(U, {})
                : null),
            (Y[58] = Q.value.basePath),
            (Y[59] = V),
            (Y[60] = z),
            (Y[61] = w))
          : (w = Y[61]),
        Y[62] !== O ||
        Y[63] !== el.draftSearch ||
        Y[64] !== k ||
        Y[65] !== A ||
        Y[66] !== en ||
        Y[67] !== eo ||
        Y[68] !== E ||
        Y[69] !== R ||
        Y[70] !== L ||
        Y[71] !== S ||
        Y[72] !== P ||
        Y[73] !== N ||
        Y[74] !== w
          ? ((F = (0, l.jsx)(T.Pu, {
              fixedSearchWidth: !0,
              showSearch: A,
              searchLabel: en,
              searchPlaceholder: k,
              showViewToggle: eo,
              viewModeControl: E,
              searchQuery: el.draftSearch,
              onSearchFocus: R,
              onSearchQueryChange: L,
              onViewModeChange: S,
              actions: O,
              filters: P,
              filterTags: N,
              settings: w,
            })),
            (Y[62] = O),
            (Y[63] = el.draftSearch),
            (Y[64] = k),
            (Y[65] = A),
            (Y[66] = en),
            (Y[67] = eo),
            (Y[68] = E),
            (Y[69] = R),
            (Y[70] = L),
            (Y[71] = S),
            (Y[72] = P),
            (Y[73] = N),
            (Y[74] = w),
            (Y[75] = F))
          : (F = Y[75]),
        F
      )
    }
    let k = (0, u.YK)({
      favorites: { id: "library.tabs.favorites", defaultMessage: "Favorites" },
      suggested: { id: "libraryNext.tabs.suggested", defaultMessage: "Suggested" },
      folders: { id: "libraryNext.tabs.folders", defaultMessage: "Folders" },
      all: { id: "libraryNext.tabs.all", defaultMessage: "All" },
      images: { id: "libraryNext.filters.images", defaultMessage: "Images" },
    })
  },
  ph9v(e, t, a) {
    a.d(t, { M: () => O })
    var l = a("ABep"),
      r = a("QosV"),
      s = a("dSuP"),
      i = a("slpy"),
      n = a("qmMi"),
      o = a("zd8w"),
      c = a("Wf1j"),
      d = a("oyxz"),
      u = a("Ywss"),
      h = a("E8Sp"),
      g = a("UOa8"),
      f = a("MM0V"),
      m = a("Sm6l"),
      p = a("bVeK"),
      y = a("AKNp"),
      v = a("laUo"),
      x = a("GEHh"),
      _ = a("O8Pw"),
      b = a("yGJW"),
      I = a("OWtl"),
      A = a("OMIV"),
      j = a("Nwp9"),
      E = a("By8r"),
      T = a("lKJY"),
      C = a("SPnB"),
      R = a("O666")
    let L = "1723404263",
      S = (0, n.vP)(I.u, () => !1, { getServerSnapshot: () => !1 }),
      M = (0, n.vP)(I.u, () => void 0),
      P = (0, n.T1)(I.u, (e) => new WeakMap()),
      N = (0, n.un)(I.u, ({ get: e }) => {
        let t,
          a = e(R.$Q, L),
          l = e(A.M9),
          r = null != l && !e(A.RS),
          s = r ? a?.__value.variant : void 0,
          i = "near_capacity_meter" === s || "persistent_meter" === s ? s : "control"
        if (null != l && r) {
          let { user: r } = l.getContext(),
            s = a?.__evaluation,
            n = JSON.stringify([
              e(C.chatGptAuthenticatedAccountId$),
              e(C.chatGptAuthenticatedUserId$),
              r.userID,
              r.custom?.account_id,
              Object.entries(r.customIDs ?? {}).sort(([e], [t]) => e.localeCompare(t)),
              i,
              a?.ruleID,
              a?.groupName,
              s?.allocated_experiment_name,
              s?.parameter_rule_ids?.variant,
              s?.is_experiment_active,
              s?.is_user_in_experiment,
              s?.explicit_parameters.includes("variant"),
            ]),
            o = e(P, "session"),
            c = o.get(l)
          ;(c?.key !== n && ((c = { key: n, identity: Symbol() }), o.set(l, c)), (t = c.identity))
        }
        return { variant: i, identity: t }
      })
    ;(0, n.un)(I.u, ({ get: e }) => {
      let t = e(N)
      return null != t.identity && e(M) === t.identity ? t.variant : "control"
    })
    let w = (0, a("Qgfj").YK)({
      full: { id: "library.storageMeter.full", defaultMessage: "Storage is full" },
      almostFull: { id: "library.storageMeter.almostFull", defaultMessage: "Storage is almost full" },
      healthy: { id: "library.storageMeter.healthy", defaultMessage: "Storage" },
    })
    function F(e) {
      let t,
        a,
        s,
        n,
        o,
        u,
        h,
        g,
        y,
        v,
        x,
        _,
        b,
        I,
        A = (0, r.c)(35),
        { usage: j, state: E, onDismiss: T, onManage: C, onUpgrade: R } = e,
        L = (0, c.A)(),
        S = (j.used_bytes / j.allowed_bytes) * 100
      A[0] !== L
        ? ((t = L.formatMessage({ id: "library.storageMeter.dismiss", defaultMessage: "Dismiss storage warning" })),
          (A[0] = L),
          (A[1] = t))
        : (t = A[1])
      let M = t,
        P = w[E]
      ;(A[2] !== P
        ? ((a = (0, l.jsx)("div", {
            className: "text-sm font-medium text-default",
            children: (0, l.jsx)(d.A, { ...P }),
          })),
          (A[2] = P),
          (A[3] = a))
        : (a = A[3]),
        A[4] !== L || A[5] !== S
          ? ((s = L.formatNumber(S / 100, { style: "percent", maximumFractionDigits: 1 })),
            (A[4] = L),
            (A[5] = S),
            (A[6] = s))
          : (s = A[6]),
        A[7] !== s
          ? ((n = (0, l.jsx)("div", {
              className: "text-xs text-secondary",
              children: (0, l.jsx)(d.A, {
                id: "library.storageMeter.usedPercentage",
                defaultMessage: "{usedPercent} of available space used",
                values: { usedPercent: s },
              }),
            })),
            (A[7] = s),
            (A[8] = n))
          : (n = A[8]),
        A[9] !== a || A[10] !== n
          ? ((o = (0, l.jsxs)("div", { className: "min-w-0 grow basis-64", children: [a, n] })),
            (A[9] = a),
            (A[10] = n),
            (A[11] = o))
          : (o = A[11]),
        A[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, l.jsx)(d.A, { id: "library.storageBanner.manage", defaultMessage: "Manage" })), (A[12] = u))
          : (u = A[12]),
        A[13] !== C
          ? ((h = (0, l.jsx)(m.$, { color: "outlineSurface", size: "dialog", onClick: C, children: u })),
            (A[13] = C),
            (A[14] = h))
          : (h = A[14]),
        A[15] !== R
          ? ((g = R
              ? (0, l.jsxs)(m.$, {
                  color: "upgrade",
                  size: "dialog",
                  onClick: R,
                  children: [
                    (0, l.jsx)(p.ZgQ, {}),
                    (0, l.jsx)(d.A, { id: "library.storageBanner.upgrade", defaultMessage: "Upgrade" }),
                  ],
                })
              : null),
            (A[15] = R),
            (A[16] = g))
          : (g = A[16]),
        A[17] !== M || A[18] !== T
          ? ((y = T
              ? (0, l.jsx)(i.m, {
                  content: M,
                  children: (0, l.jsx)(m.$, {
                    color: "ghostActive",
                    size: "iconCircle",
                    onClick: T,
                    "aria-label": M,
                    children: (0, l.jsx)(p.pgK, {}),
                  }),
                })
              : null),
            (A[17] = M),
            (A[18] = T),
            (A[19] = y))
          : (y = A[19]),
        A[20] !== y || A[21] !== h || A[22] !== g
          ? ((v = (0, l.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [h, g, y] })),
            (A[20] = y),
            (A[21] = h),
            (A[22] = g),
            (A[23] = v))
          : (v = A[23]),
        A[24] !== v || A[25] !== o
          ? ((x = (0, l.jsxs)("div", { className: "flex flex-wrap items-center gap-3", children: [o, v] })),
            (A[24] = v),
            (A[25] = o),
            (A[26] = x))
          : (x = A[26]))
      let N = Math.min(100, Math.max(0, S))
      return (
        A[27] !== L
          ? ((_ = L.formatMessage({ id: "library.storageMeter.progressLabel", defaultMessage: "Storage used" })),
            (A[27] = L),
            (A[28] = _))
          : (_ = A[28]),
        A[29] !== N || A[30] !== _
          ? ((b = (0, l.jsx)("progress", {
              className:
                "h-1.5 w-full overflow-hidden rounded-full [&::-moz-progress-bar]:bg-neutral-solid [&::-ms-fill]:bg-neutral-solid [&::-webkit-progress-bar]:bg-text/10 [&::-webkit-progress-value]:bg-neutral-solid",
              max: 100,
              value: N,
              "aria-label": _,
            })),
            (A[29] = N),
            (A[30] = _),
            (A[31] = b))
          : (b = A[31]),
        A[32] !== x || A[33] !== b
          ? ((I = (0, l.jsx)(f.l, {
              variant: "settings",
              layout: "vertical",
              content: (0, l.jsxs)("div", { className: "flex flex-col gap-3 select-none", children: [x, b] }),
            })),
            (A[32] = x),
            (A[33] = b),
            (A[34] = I))
          : (I = A[34]),
        I
      )
    }
    let U = (0, j.m3)("library-storage-full-banner-dismissed-at", null),
      Y = (0, j.m3)("library-storage-almost-full-banner-dismissed-at", null)
    function O(e) {
      let t,
        a = (0, r.c)(4),
        { isVisible: s } = e,
        i = void 0 === s || s,
        o = (0, n._U)(A.JW, "2767344663"),
        c = (0, n._U)(A.JW, "4231797315")
      return (
        a[0] !== i || a[1] !== o || a[2] !== c
          ? ((t = o && c ? (0, l.jsx)(B, { isVisible: i }) : null), (a[0] = i), (a[1] = o), (a[2] = c), (a[3] = t))
          : (t = a[3]),
        t
      )
    }
    function B(e) {
      let t,
        a,
        i,
        c,
        d,
        f,
        m,
        p,
        _,
        j,
        C,
        R,
        P,
        w,
        O,
        B,
        H,
        D,
        k,
        V = (0, r.c)(80),
        { isVisible: z } = e,
        Q = (0, n.gh)(I.u),
        { pathname: q } = (0, n.Ul)(h.gM),
        W = (0, u.Zp)(),
        Z = (0, x.j)(),
        $ = (0, g.As)(),
        K = (0, n.Ul)(A.M9),
        J = (0, n.Ul)(A.RS),
        X = (0, n.Ul)(S),
        ee = (0, n.Ul)(N),
        et = ee.variant,
        { data: ea } = (0, n.Ul)(T.a),
        el = (0, n.Ul)(U),
        er = (0, n.Ul)(Y),
        [es, ei] = (0, o.useState)(Date.now),
        en = (0, o.useRef)(null)
      V[0] !== ea
        ? ((t = null),
          null != ea &&
            (ea.is_over_limit || ea.remaining_bytes <= 0
              ? (t = "full")
              : ea.allowed_bytes > 0 && ea.remaining_bytes / ea.allowed_bytes <= 0.1 && (t = "almostFull")),
          (V[0] = ea),
          (V[1] = t))
        : (t = V[1])
      let eo = "full" === t ? el : er,
        ec = null != eo && es < eo + 6048e5 ? null : t
      V[2] !== $ || V[3] !== X || V[4] !== ea
        ? ((a =
            X &&
            null != ea &&
            !$.isLoading &&
            "chatgpt" === $.authMethod &&
            null != $.userId &&
            null != $.accountId &&
            Number.isFinite(ea.allowed_bytes) &&
            ea.allowed_bytes > 0 &&
            Number.isFinite(ea.used_bytes) &&
            ea.used_bytes >= 0 &&
            Number.isFinite(ea.remaining_bytes) &&
            ("free" === ea.plan_type ||
              "free_workspace" === ea.plan_type ||
              "go" === ea.plan_type ||
              "plus" === ea.plan_type)),
          (V[2] = $),
          (V[3] = X),
          (V[4] = ea),
          (V[5] = a))
        : (a = V[5])
      let ed = a
      V[6] !== ed || V[7] !== K || V[8] !== ea || V[9] !== ec
        ? ((i =
            null != ea &&
            (null != ec || ed) &&
            ("free" === ea.limit_tier
              ? "free" === ea.plan_type || "free_workspace" === ea.plan_type
              : "go" === ea.limit_tier || "plus" === ea.limit_tier || "prolite" === ea.limit_tier) &&
            null != K &&
            (0, y.ku)(K, "library_storage_limit_banner")),
          (V[6] = ed),
          (V[7] = K),
          (V[8] = ea),
          (V[9] = ec),
          (V[10] = i))
        : (i = V[10])
      let eu = i,
        eh = ed && eu,
        eg = eh && "persistent_meter" === et,
        ef = eh && "near_capacity_meter" === et
      if (
        (V[11] !== z || V[12] !== eh || V[13] !== Q || V[14] !== J
          ? ((c = () => {
              eh &&
                z &&
                !J &&
                (function (e) {
                  let t = e.get(A.M9),
                    { identity: a } = e.get(N)
                  null != t &&
                    null != a &&
                    (t.getLayer(L, { disableExposureLog: !1 }).get("variant", "control"), e.set(M, a))
                })(Q)
            }),
            (V[11] = z),
            (V[12] = eh),
            (V[13] = Q),
            (V[14] = J),
            (V[15] = c))
          : (c = V[15]),
        V[16] !== $.accountId ||
        V[17] !== $.userId ||
        V[18] !== z ||
        V[19] !== ee ||
        V[20] !== eh ||
        V[21] !== Q ||
        V[22] !== J
          ? ((d = [Q, ee, $.accountId, $.userId, z, eh, J]),
            (V[16] = $.accountId),
            (V[17] = $.userId),
            (V[18] = z),
            (V[19] = ee),
            (V[20] = eh),
            (V[21] = Q),
            (V[22] = J),
            (V[23] = d))
          : (d = V[23]),
        (0, o.useEffect)(c, d),
        V[24] !== eo
          ? ((f = () => {
              if (null == eo) return
              let e = setTimeout(() => ei(Date.now()), Math.max(0, eo + 6048e5 - Date.now()))
              return () => clearTimeout(e)
            }),
            (m = [eo]),
            (V[24] = eo),
            (V[25] = f),
            (V[26] = m))
          : ((f = V[25]), (m = V[26])),
        (0, o.useEffect)(f, m),
        V[27] !== el || V[28] !== Q || V[29] !== t || V[30] !== ea
          ? ((p = () => {
              null != ea && "full" !== t && null != el && Q.set(U, null)
            }),
            (V[27] = el),
            (V[28] = Q),
            (V[29] = t),
            (V[30] = ea),
            (V[31] = p))
          : (p = V[31]),
        V[32] !== el || V[33] !== Q || V[34] !== t || V[35] !== ea
          ? ((_ = [Q, ea, t, el]), (V[32] = el), (V[33] = Q), (V[34] = t), (V[35] = ea), (V[36] = _))
          : (_ = V[36]),
        (0, o.useEffect)(p, _),
        V[37] !== Q || V[38] !== ea || V[39] !== ec
          ? ((C = () => {
              null == ec
                ? (en.current = null)
                : null != ea &&
                  en.current !== ec &&
                  ((en.current = ec),
                  (0, b.yy)(Q, s.ix, { ...(0, E.e)(ea), surface: "library", source: "library_banner" }))
            }),
            (j = [Q, ea, ec]),
            (V[37] = Q),
            (V[38] = ea),
            (V[39] = ec),
            (V[40] = j),
            (V[41] = C))
          : ((j = V[40]), (C = V[41])),
        (0, o.useEffect)(C, j),
        null == ea || (null == ec && !eg))
      )
        return null
      ;(V[42] !== ea ? ((R = (0, E.e)(ea)), (V[42] = ea), (V[43] = R)) : (R = V[43]),
        V[44] !== R
          ? ((P = { ...R, surface: "library", source: "library_banner" }), (V[44] = R), (V[45] = P))
          : (P = V[45]))
      let em = P
      V[46] !== Q || V[47] !== t
        ? ((w = () => {
            let e = Date.now()
            ;(Q.set("full" === t ? U : Y, e), ei(e))
          }),
          (V[46] = Q),
          (V[47] = t),
          (V[48] = w))
        : (w = V[48])
      let ep = w
      V[49] !== em || V[50] !== W || V[51] !== Q || V[52] !== ec
        ? ((O = () => {
            ;(null != ec && (0, b.yy)(Q, s.jt, { ...em, cta: "CHATGPT_FILE_LIBRARY_STORAGE_CTA_MANAGE_STORAGE" }),
              (0, b.yy)(Q, s.Rf, em),
              W("/settings/storage"))
          }),
          (V[49] = em),
          (V[50] = W),
          (V[51] = Q),
          (V[52] = ec),
          (V[53] = O))
        : (O = V[53])
      let ey = O
      V[54] !== eu || V[55] !== em || V[56] !== Z || V[57] !== Q || V[58] !== ea || V[59] !== ec
        ? ((B = eu
            ? () => {
                ;(null != ec &&
                  (0, b.yy)(Q, s.jt, {
                    ...em,
                    cta: "CHATGPT_FILE_LIBRARY_STORAGE_CTA_UPGRADE",
                    openModalLocation: "library_storage_limit_banner",
                  }),
                  Z({
                    currentPlan: (0, v.m6)(ea.plan_type)?.pricePlan ?? null,
                    source: "library_storage_banner",
                    chatGptContext: { openModalLocation: "library_storage_limit_banner" },
                  }))
              }
            : void 0),
          (V[54] = eu),
          (V[55] = em),
          (V[56] = Z),
          (V[57] = Q),
          (V[58] = ea),
          (V[59] = ec),
          (V[60] = B))
        : (B = V[60])
      let ev = B
      return (
        V[61] !== ep ||
        V[62] !== ey ||
        V[63] !== ev ||
        V[64] !== ef ||
        V[65] !== eg ||
        V[66] !== t ||
        V[67] !== ea ||
        V[68] !== ec
          ? ((H =
              eg || (ef && null != ec)
                ? (0, l.jsx)("div", {
                    className: "px-12 pt-panel",
                    children: (0, l.jsx)(F, {
                      usage: ea,
                      state: t ?? "healthy",
                      onDismiss: eg ? void 0 : ep,
                      onManage: ey,
                      onUpgrade: ev,
                    }),
                  })
                : null),
            (V[61] = ep),
            (V[62] = ey),
            (V[63] = ev),
            (V[64] = ef),
            (V[65] = eg),
            (V[66] = t),
            (V[67] = ea),
            (V[68] = ec),
            (V[69] = H))
          : (H = V[69]),
        V[70] !== ep || V[71] !== ey || V[72] !== ev || V[73] !== q || V[74] !== ef || V[75] !== ec
          ? ((D =
              null == ec || ef
                ? null
                : (0, l.jsx)(G, {
                    basePath: q?.startsWith("/library") ? "/library" : "/space",
                    state: ec,
                    onDismiss: ep,
                    onManage: ey,
                    onUpgrade: ev,
                  })),
            (V[70] = ep),
            (V[71] = ey),
            (V[72] = ev),
            (V[73] = q),
            (V[74] = ef),
            (V[75] = ec),
            (V[76] = D))
          : (D = V[76]),
        V[77] !== H || V[78] !== D
          ? ((k = (0, l.jsxs)(l.Fragment, { children: [H, D] })), (V[77] = H), (V[78] = D), (V[79] = k))
          : (k = V[79]),
        k
      )
    }
    function G(e) {
      let t,
        a,
        s,
        n,
        o,
        u,
        h,
        g,
        y,
        v = (0, r.c)(24),
        { basePath: x, state: b, onDismiss: I, onManage: A, onUpgrade: j } = e,
        E = (0, _.mz)(x ?? "/space"),
        T = (0, c.A)()
      v[0] !== T || v[1] !== E
        ? ((t = E
            ? T.formatMessage({
                id: "library.storageBanner.dismiss.storage.space",
                defaultMessage: "Dismiss storage warning",
              })
            : T.formatMessage({
                id: "library.storageBanner.dismiss.storage.library",
                defaultMessage: "Dismiss Storage warning",
              })),
          (v[0] = T),
          (v[1] = E),
          (v[2] = t))
        : (t = v[2])
      let C = t
      if ("full" === b && j) {
        let e
        ;(v[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(d.A, {
              id: "library.storageBanner.full.upgrade.storage",
              defaultMessage:
                "<emphasis>Your storage is full.</emphasis> New files can't be added until you free up space or upgrade for more storage.",
              values: { emphasis: V },
            })),
            (v[3] = e))
          : (e = v[3]),
          (a = e))
      } else if ("full" === b) {
        let e
        ;(v[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(d.A, {
              id: "library.storageBanner.full.manage.storage",
              defaultMessage: "<emphasis>Your storage is full.</emphasis> Free up space to keep adding files.",
              values: { emphasis: k },
            })),
            (v[4] = e))
          : (e = v[4]),
          (a = e))
      } else if (j) {
        let e
        ;(v[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(d.A, {
              id: "library.storageBanner.almostFull.upgrade.storage",
              defaultMessage:
                "<emphasis>Your storage is almost full.</emphasis> Manage your storage space or upgrade for more.",
              values: { emphasis: D },
            })),
            (v[5] = e))
          : (e = v[5]),
          (a = e))
      } else {
        let e
        ;(v[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(d.A, {
              id: "library.storageBanner.almostFull.manage.storage",
              defaultMessage: "<emphasis>Your storage is almost full.</emphasis> Manage your storage space.",
              values: { emphasis: H },
            })),
            (v[6] = e))
          : (e = v[6]),
          (a = e))
      }
      return (
        v[7] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, l.jsx)(p.zOs, {})), (v[7] = s)) : (s = v[7]),
        v[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, l.jsx)(d.A, { id: "library.storageBanner.manage", defaultMessage: "Manage" })), (v[8] = n))
          : (n = v[8]),
        v[9] !== j
          ? ((o = j ? (0, l.jsx)(d.A, { id: "library.storageBanner.upgrade", defaultMessage: "Upgrade" }) : void 0),
            (v[9] = j),
            (v[10] = o))
          : (o = v[10]),
        v[11] === Symbol.for("react.memo_cache_sentinel") ? ((u = (0, l.jsx)(p.pgK, {})), (v[11] = u)) : (u = v[11]),
        v[12] !== C || v[13] !== I
          ? ((h = (0, l.jsx)(m.$, {
              color: "ghostActive",
              size: "iconCircle",
              onClick: I,
              "aria-label": C,
              children: u,
            })),
            (v[12] = C),
            (v[13] = I),
            (v[14] = h))
          : (h = v[14]),
        v[15] !== C || v[16] !== h
          ? ((g = (0, l.jsx)(i.m, { content: C, children: h })), (v[15] = C), (v[16] = h), (v[17] = g))
          : (g = v[17]),
        v[18] !== a || v[19] !== A || v[20] !== j || v[21] !== o || v[22] !== g
          ? ((y = (0, l.jsx)(f.l, {
              variant: "pageNotice",
              icon: s,
              content: a,
              primaryCtaText: n,
              primaryCtaColor: "outlineSurface",
              onPrimaryCtaClick: A,
              secondaryCtaText: o,
              secondaryCtaColor: "upgrade",
              onSecondaryCtaClick: j,
              trailingAction: g,
            })),
            (v[18] = a),
            (v[19] = A),
            (v[20] = j),
            (v[21] = o),
            (v[22] = g),
            (v[23] = y))
          : (y = v[23]),
        y
      )
    }
    function H(e) {
      return (0, l.jsx)("strong", { className: "font-medium", children: e })
    }
    function D(e) {
      return (0, l.jsx)("strong", { className: "font-medium", children: e })
    }
    function k(e) {
      return (0, l.jsx)("strong", { className: "font-medium", children: e })
    }
    function V(e) {
      return (0, l.jsx)("strong", { className: "font-medium", children: e })
    }
  },
  atiu(e, t, a) {
    a.d(t, { n: () => y })
    var l = a("ABep"),
      r = a("QosV"),
      s = a("ESTr")
    let i = (0, s.a)({
        name: "books-light-24",
        canvas: {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          frame: { x: 0, y: 0, width: 24, height: 24 },
          inkBounds: { x: 2.600098, y: 2.857422, width: 19.511719, height: 17.892578 },
          visualBounds: { x: 2.600098, y: 2.857422, width: 19.511719, height: 17.892578 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 2.600098, y: 2.857422, width: 19.511719, height: 17.892578 },
          center: { x: 12.355957, y: 11.803711 },
          insets: { top: 2.857422, right: 1.888183, bottom: 3.25, left: 2.600098 },
          anchors: {
            frame: { x: 12, y: 12 },
            ink: { x: 12.355957, y: 11.803711 },
            foreground: { x: 12.355957, y: 11.803711 },
          },
        },
        capabilities: ["icon"],
        body: '<path d="M16.9653 2.89657C18.3521 2.65205 19.6746 3.57829 19.9194 4.96493L22.0728 17.1768C22.3172 18.5637 21.3913 19.8864 20.0044 20.1309L18.3306 20.4259C16.9439 20.6703 15.6213 19.745 15.3765 18.3585L14.6997 14.5196V18.2003C14.6996 19.6085 13.5582 20.7501 12.1499 20.7501H10.4497C9.74684 20.75 9.11109 20.465 8.6499 20.005C8.18868 20.465 7.55305 20.7501 6.8501 20.7501H5.1499C3.74173 20.75 2.6002 19.6085 2.6001 18.2003V5.7999C2.60033 4.39183 3.74181 3.2502 5.1499 3.25009H6.8501C7.55269 3.25009 8.18874 3.53459 8.6499 3.99423C9.11103 3.53458 9.74721 3.25021 10.4497 3.25009H12.1499C12.8248 3.25009 13.437 3.51437 13.8931 3.94247C14.2552 3.56325 14.7355 3.29055 15.2915 3.19247L16.9653 2.89657ZM5.1499 4.75009C4.57024 4.7502 4.10033 5.22026 4.1001 5.7999V18.2003C4.1002 18.78 4.57016 19.25 5.1499 19.2501H6.8501C7.42993 19.2501 7.8998 18.7801 7.8999 18.2003V5.7999C7.89967 5.22019 7.42985 4.75009 6.8501 4.75009H5.1499ZM10.4497 4.75009C9.87015 4.75033 9.40013 5.22034 9.3999 5.7999V18.2003C9.40001 18.7799 9.87008 19.2499 10.4497 19.2501H12.1499C12.7297 19.2501 13.1996 18.7801 13.1997 18.2003V5.95712C13.1886 5.84744 13.1811 5.73873 13.1841 5.63095C13.103 5.13176 12.672 4.75009 12.1499 4.75009H10.4497ZM18.4419 5.22568C18.3411 4.65476 17.7971 4.27343 17.2261 4.37411L15.5513 4.66904C15.0763 4.75306 14.7339 5.14472 14.6899 5.60263C14.6949 5.66779 14.6997 5.73345 14.6997 5.7999V5.88583L16.853 18.0977C16.9538 18.6686 17.4989 19.0499 18.0698 18.9493L19.7437 18.6534C20.3147 18.5527 20.6958 18.0086 20.5952 17.4376L18.4419 5.22568Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      }),
      n = (0, s.a)({
        name: "folder-light-24",
        canvas: {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          frame: { x: 0, y: 0, width: 24, height: 24 },
          inkBounds: { x: 2.25, y: 3.25, width: 19.5, height: 17.5 },
          visualBounds: { x: 2.25, y: 3.25, width: 19.5, height: 17.5 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 2.25, y: 3.25, width: 19.5, height: 17.5 },
          center: { x: 12, y: 12 },
          insets: { top: 3.25, right: 2.25, bottom: 3.25, left: 2.25 },
          anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
        },
        capabilities: ["icon"],
        body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.39453 3.25C8.93742 3.25002 9.46821 3.41077 9.91992 3.71191L11.9121 5.04004C12.1174 5.17691 12.3587 5.24998 12.6055 5.25H18.4004C20.2502 5.25021 21.7498 6.74976 21.75 8.59961V17.2002C21.7499 19.1607 20.1607 20.7499 18.2002 20.75H5.7998C3.83935 20.7499 2.25011 19.1607 2.25 17.2002V6.7998C2.25011 4.83935 3.83935 3.25011 5.7998 3.25H8.39453ZM20.25 11.75H3.75V17.2002C3.75011 18.3322 4.66778 19.2499 5.7998 19.25H18.2002C19.3322 19.2499 20.2499 18.3322 20.25 17.2002V11.75ZM3.75 10.25H20.25V8.59961C20.2498 7.57819 19.4218 6.75021 18.4004 6.75H12.6055C12.0626 6.74998 11.5318 6.58923 11.0801 6.28809L9.08789 4.95996C8.88258 4.82309 8.64128 4.75002 8.39453 4.75H5.7998C4.66778 4.75011 3.75011 5.66778 3.75 6.7998V10.25Z" fill="currentColor"/>',
      })
    var o = a("HD8A"),
      c = a("ed1s")
    let d = (0, s.a)({
      name: "trash-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 2.75, y: 2, width: 18.5, height: 19.78125 },
        visualBounds: { x: 2.75, y: 2, width: 18.5, height: 19.78125 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.75, y: 2, width: 18.5, height: 19.78125 },
        center: { x: 12, y: 11.890625 },
        insets: { top: 2, right: 2.75, bottom: 2.21875, left: 2.75 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 11.890625 }, foreground: { x: 12, y: 11.890625 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10 10.25C10.4142 10.25 10.75 10.5858 10.75 11V16.0195C10.7498 16.4336 10.4141 16.7695 10 16.7695C9.58592 16.7695 9.25022 16.4336 9.25 16.0195V11C9.25 10.5858 9.58579 10.25 10 10.25Z" fill="currentColor"/> <path d="M14 10.25C14.4142 10.25 14.75 10.5858 14.75 11V16.0195C14.7498 16.4336 14.4141 16.7695 14 16.7695C13.5859 16.7695 13.2502 16.4336 13.25 16.0195V11C13.25 10.5858 13.5858 10.25 14 10.25Z" fill="currentColor"/> <path d="M12 2C14.4545 2 16.4738 3.86169 16.7236 6.25H20.5C20.9142 6.25 21.25 6.58579 21.25 7C21.25 7.41421 20.9142 7.75 20.5 7.75H19.7207L19.0742 18.2607C18.9524 20.2385 17.3126 21.7802 15.3311 21.7803H8.70312C6.72627 21.7801 5.08866 20.2452 4.96094 18.2725L4.28125 7.75H3.5C3.08579 7.75 2.75 7.41421 2.75 7C2.75 6.58579 3.08579 6.25 3.5 6.25H7.27637C7.52623 3.86169 9.54553 2 12 2ZM6.45801 18.1758C6.53476 19.3593 7.51716 20.2801 8.70312 20.2803H15.3311C16.52 20.2802 17.5041 19.3547 17.5771 18.168L18.2178 7.75H5.7832L6.45801 18.1758ZM12 3.5C10.3751 3.5 9.02858 4.69244 8.78809 6.25H15.2119C14.9714 4.69244 13.6249 3.5 12 3.5Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var u = a("oyxz"),
      h = a("Qgfj"),
      g = a("HOLv"),
      f = a("FrrB"),
      m = a("V080"),
      p = a("Hu8z")
    function y(e) {
      let t,
        a,
        s,
        h,
        y,
        x,
        _,
        b = (0, r.c)(20),
        { view: I, description: A, titleMarker: j } = e
      b[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            all: { icon: i, title: v.allTitle, description: v.allDescription },
            pages: { icon: c.b, title: v.pagesTitle, description: v.pagesDescription },
            images: { icon: o.v, title: v.imagesTitle, description: v.imagesDescription },
            folder: { icon: n, title: v.folderTitle, description: v.folderDescription },
            trash: { icon: d, title: v.trashTitle, description: v.trashDescription },
            "trash-files": { icon: d, title: v.trashFilesTitle, description: v.trashFilesDescription },
            "trash-pages": { icon: d, title: v.trashPagesTitle, description: v.trashPagesDescription },
          }),
          (b[0] = t))
        : (t = b[0])
      let E = t[I]
      switch (I) {
        case "all": {
          let e
          ;(b[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(p.SlateSpaceCreateMenu, {})), (b[1] = e))
            : (e = b[1]),
            (a = e))
          break
        }
        case "pages":
        case "images": {
          let e
          ;(b[2] !== I ? ((e = (0, l.jsx)(p.SlateSpaceCreateMenu, { action: I })), (b[2] = I), (b[3] = e)) : (e = b[3]),
            (a = e))
          break
        }
        case "folder": {
          let e
          ;(b[4] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, l.jsx)(m.JA, {})), (b[4] = e)) : (e = b[4]),
            (a = e))
        }
      }
      return (
        b[5] !== E.icon ? ((s = (0, l.jsx)(g.I, { asset: E.icon })), (b[5] = E.icon), (b[6] = s)) : (s = b[6]),
        b[7] !== E.title ? ((h = (0, l.jsx)(u.A, { ...E.title })), (b[7] = E.title), (b[8] = h)) : (h = b[8]),
        b[9] !== h || b[10] !== j
          ? ((y = (0, l.jsxs)("h2", { children: [j, h] })), (b[9] = h), (b[10] = j), (b[11] = y))
          : (y = b[11]),
        b[12] !== E.description || b[13] !== A
          ? ((x = void 0 === A ? (0, l.jsx)(u.A, { ...E.description }) : A),
            (b[12] = E.description),
            (b[13] = A),
            (b[14] = x))
          : (x = b[14]),
        b[15] !== a || b[16] !== s || b[17] !== y || b[18] !== x
          ? ((_ = (0, l.jsx)(f.A, {
              className: "select-none",
              layout: "page",
              spacing: "default",
              illustrationSize: "tile",
              illustration: s,
              title: y,
              description: x,
              actions: a,
            })),
            (b[15] = a),
            (b[16] = s),
            (b[17] = y),
            (b[18] = x),
            (b[19] = _))
          : (_ = b[19]),
        _
      )
    }
    let v = (0, h.YK)({
      allTitle: { id: "space.empty.all.title", defaultMessage: "Nothing here yet" },
      allDescription: {
        id: "space.empty.all.description",
        defaultMessage: "Build a page, presentation, website, and more with ChatGPT",
      },
      pagesTitle: { id: "space.empty.pages.title", defaultMessage: "No pages yet" },
      pagesDescription: {
        id: "space.empty.pages.description",
        defaultMessage: "Write, plan, and bring your ideas together with ChatGPT",
      },
      imagesTitle: { id: "space.empty.images.title", defaultMessage: "No images yet" },
      imagesDescription: { id: "space.empty.images.description", defaultMessage: "Create an image with ChatGPT" },
      folderTitle: { id: "space.empty.folder.title", defaultMessage: "This folder is empty" },
      folderDescription: { id: "space.empty.folder.description", defaultMessage: "Upload files to get started" },
      trashTitle: { id: "space.empty.trash.title", defaultMessage: "Trash is empty" },
      trashDescription: {
        id: "space.empty.trash.description",
        defaultMessage: "Items moved to Trash will be deleted forever after 30 days",
      },
      trashFilesTitle: { id: "space.empty.trashFiles.title", defaultMessage: "No files in Trash" },
      trashFilesDescription: {
        id: "space.empty.trashFiles.description",
        defaultMessage: "Files moved to Trash will be deleted forever after 30 days",
      },
      trashPagesTitle: { id: "space.empty.trashPages.title", defaultMessage: "No pages in Trash" },
      trashPagesDescription: {
        id: "space.empty.trashPages.description",
        defaultMessage: "Pages moved to Trash will be deleted forever after 30 days",
      },
    })
  },
  pzCo(e, t, a) {
    let l,
      r = new Map(),
      s = new WeakMap(),
      i = !1
    function n() {
      for (let [e, t] of r) if (!s.has(t)) return e
    }
    function o() {
      if (null != l || "hidden" === document.visibilityState || null == n()) return
      let e = requestAnimationFrame(() => {
        if (l !== e || ((l = void 0), "hidden" === document.visibilityState)) return
        let t = n()
        ;(null != t && (r.delete(t), t()), o(), d())
      })
      l = e
    }
    function c() {
      if ("hidden" === document.visibilityState) {
        null != l && (cancelAnimationFrame(l), (l = void 0))
        return
      }
      o()
    }
    function d() {
      !(r.size > 0) &&
        (null != l && (cancelAnimationFrame(l), (l = void 0)),
        i && (document.removeEventListener("visibilitychange", c), (i = !1)))
    }
    a.d(
      t,
      {},
      {
        $: function (e, t) {
          return (
            r.set(t, e.node),
            i || (document.addEventListener("visibilitychange", c), (i = !0)),
            o(),
            () => {
              ;(r.delete(t), d())
            }
          )
        },
        S: function (e) {
          let t = e.node
          return (
            s.set(t, (s.get(t) ?? 0) + 1),
            null != l && null == n() && (cancelAnimationFrame(l), (l = void 0)),
            () => {
              let e = s.get(t) ?? 0
              e > 1 ? s.set(t, e - 1) : (s.delete(t), o())
            }
          )
        },
      },
    )
  },
  CLFW(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      s = a("qmMi"),
      i = a("jU86"),
      n = a("LcBG"),
      o = a("FBu8"),
      c = a("aYWA")
    a.d(
      t,
      {},
      {
        D: function () {
          let e,
            t = (0, r.c)(3),
            a = (0, s.gh)(i.Qy),
            d = (0, s.Ul)(i.YH),
            u = "/space" === a.value.basePath
          return (
            t[0] !== u || t[1] !== d
              ? ((e =
                  "grid" === d
                    ? (0, l.jsx)(n.oH, { square: !0 })
                    : (0, l.jsxs)("div", {
                        className: "-mx-[var(--padding-row-cell-x,var(--padding-row-x))] flex min-h-0 flex-1 flex-col",
                        children: [
                          (0, l.jsx)(c.Z, { isLoading: !0, showSource: u }),
                          (0, l.jsx)(o.VT, { showSource: u }),
                        ],
                      })),
                (t[0] = u),
                (t[1] = d),
                (t[2] = e))
              : (e = t[2]),
            e
          )
        },
      },
    )
  },
  Goes(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      s = a("Qgfj"),
      i = a("Wf1j"),
      n = a("oyxz"),
      o = a("BrP7")
    let c = (0, s.YK)({
      files: { id: "codex.space.trash.files", defaultMessage: "Files" },
      pages: { id: "codex.space.trash.pages", defaultMessage: "Pages" },
      spaces: { id: "codex.space.trash.spaces", defaultMessage: "Spaces" },
    })
    function d(e) {
      return { key: e, name: (0, l.jsx)(n.A, { ...c[e] }) }
    }
    a.d(
      t,
      {},
      {
        N: function (e) {
          let t,
            a,
            s,
            n,
            c = (0, r.c)(8),
            { kind: u, onSelect: h } = e,
            g = (0, i.A)()
          return (
            c[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = ["files", "pages", "spaces"]), (c[0] = t))
              : (t = c[0]),
            c[1] === Symbol.for("react.memo_cache_sentinel") ? ((a = t.map(d)), (c[1] = a)) : (a = c[1]),
            c[2] !== g
              ? ((s = g.formatMessage({ id: "codex.space.trash.sections", defaultMessage: "Trash sections" })),
                (c[2] = g),
                (c[3] = s))
              : (s = c[3]),
            c[4] !== u || c[5] !== h || c[6] !== s
              ? ((n = (0, l.jsx)(o.t, {
                  variant: "browse",
                  scrollable: !0,
                  tabs: a,
                  selectedKey: u,
                  ariaLabel: s,
                  onSelect: h,
                })),
                (c[4] = u),
                (c[5] = h),
                (c[6] = s),
                (c[7] = n))
              : (n = c[7]),
            n
          )
        },
      },
    )
  },
  sg90(e, t, a) {
    var l = a("qmMi"),
      r = a("jU86"),
      s = a("Dk5X"),
      i = a("e1xH")
    let n = (0, l.un)(r.Qy, ({ get: e, scope: t }) => {
      if (
        !t.value.deleted ||
        e(r.nt) ||
        t.value.search.trim() ||
        t.value.categories.length ||
        t.value.sources.length ||
        "loading" === e(i.GU)
      )
        return !1
      if (e(i.Op)) {
        let t = e(r.i3)
        return !t.isPending && !t.isFetching && !t.isError && !t.hasNextPage && e(r.PP)?.length === 0
      }
      {
        if (!e(r.YV)) return !1
        if ("enabled" !== e(i.GU)) return !0
        let t = e(s.v)
        if (
          t.isPending ||
          t.isFetching ||
          t.isError ||
          t.hasNextPage ||
          !t.data?.pages.every((e) => 0 === e.items.length)
        )
          return !1
      }
      let a = e(s.A)
      return (
        !a.isPending && !a.isFetching && !a.isError && !a.hasNextPage && a.data.pages.every((e) => 0 === e.items.length)
      )
    })
    a.d(t, {}, { Q: n })
  },
  HozZ(e, t, a) {
    let l = (0, a("ESTr").a)({
      name: "arrow-down-md-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 4.141846, y: 3.475098, width: 7.716309, height: 8.945801 },
        visualBounds: { x: 4.141846, y: 3.475098, width: 7.716309, height: 8.945801 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 4.141846, y: 3.475098, width: 7.716309, height: 8.945801 },
        center: { x: 8.000001, y: 7.947999 },
        insets: { top: 3.475098, right: 4.141845, bottom: 3.579101, left: 4.141846 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.000001, y: 7.947999 }, foreground: { x: 8.000001, y: 7.947999 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.00047 3.4751C8.29033 3.4752 8.52586 3.7106 8.52586 4.00049V10.731L10.9624 8.29541C11.1673 8.09067 11.4996 8.09082 11.7046 8.29541C11.9094 8.50039 11.9094 8.83261 11.7046 9.0376L8.54734 12.1938C8.24468 12.4964 7.75427 12.4965 7.45164 12.1938L4.29539 9.0376C4.09077 8.83257 4.09056 8.50031 4.29539 8.29541C4.50029 8.09051 4.83252 8.09076 5.03758 8.29541L7.47508 10.7329V4.00049C7.47508 3.71054 7.71052 3.4751 8.00047 3.4751Z" fill="currentColor"/>',
    })
    a.d(t, {}, { I: l })
  },
  YMuE(e, t, a) {
    let l = (0, a("ESTr").a)({
      name: "pencil-sparkle-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.838867, y: 1.839844, width: 12.938469, height: 12.939453 },
        visualBounds: { x: 1.838867, y: 1.839844, width: 12.938469, height: 12.939453 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.838867, y: 1.839844, width: 12.938469, height: 12.939453 },
        center: { x: 8.308101, y: 8.30957 },
        insets: { top: 1.839844, right: 1.222664, bottom: 1.220703, left: 1.838867 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.308101, y: 8.30957 }, foreground: { x: 8.308101, y: 8.30957 } },
      },
      capabilities: ["icon"],
      body: '<path d="M9.99805 3.12891C11.1397 2.09939 12.8713 2.15445 13.9229 3.22461C15.0428 4.30582 15.0791 6.12407 13.9297 7.27344L8.33887 12.8633C7.76885 13.4643 7.0385 13.8717 6.27539 14.0488H6.27344L3.18066 14.7598L3.17969 14.7578C3.04728 14.7893 2.77955 14.8161 2.56641 14.6035C2.35234 14.3899 2.37933 14.1208 2.41113 13.9883L3.12109 10.9023C3.30016 10.1059 3.70942 9.41049 4.27051 8.85059L9.88867 3.23242L9.99805 3.12891ZM5.0127 9.59375C4.57962 10.0259 4.27691 10.5485 4.14551 11.1348L4.14453 11.1377L3.57812 13.5898L6.03906 13.0254C6.60496 12.8938 7.1526 12.5902 7.57812 12.1416L7.58691 12.1318L12.1084 7.60938L9.55176 5.05176L5.0127 9.59375ZM13.1816 3.96777C12.5088 3.27474 11.3617 3.24635 10.6309 3.97559L10.6299 3.97461L10.2949 4.30957L12.8516 6.86621L13.1875 6.53125C13.9237 5.79502 13.8897 4.65189 13.1943 3.98047L13.1816 3.96777Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M3.66699 1.83984C3.79131 1.84001 3.89846 1.92787 3.92285 2.0498C3.99414 2.40621 4.13347 2.71072 4.34766 2.94141C4.55957 3.16962 4.85819 3.34046 5.27637 3.41016C5.4022 3.4312 5.49414 3.54038 5.49414 3.66797C5.49397 3.7954 5.40206 3.90376 5.27637 3.9248C4.85824 3.99449 4.55956 4.16538 4.34766 4.39355C4.13349 4.62419 3.99417 4.92883 3.92285 5.28516C3.89846 5.40709 3.79131 5.49495 3.66699 5.49512C3.54253 5.49512 3.43457 5.40721 3.41016 5.28516C3.33884 4.92886 3.1995 4.62418 2.98535 4.39355C2.77345 4.16546 2.47468 3.99448 2.05664 3.9248C1.93109 3.90365 1.83903 3.7953 1.83887 3.66797C1.83887 3.54047 1.93095 3.43131 2.05664 3.41016C2.47478 3.34047 2.77344 3.16958 2.98535 2.94141C3.19956 2.71072 3.33885 2.40622 3.41016 2.0498C3.43457 1.92775 3.54253 1.83984 3.66699 1.83984Z" fill="currentColor"/>',
    })
    a.d(t, {}, { n: l })
  },
}
//# sourceMappingURL=556779.4373af862c.js.map
