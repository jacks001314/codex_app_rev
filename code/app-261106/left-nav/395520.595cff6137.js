export const __rspack_esm_ids = [395520]
export const __webpack_modules__ = {
  piij(e, t, a) {
    e.exports = a.p + "assets/space-recovery.105d9c61fe.png"
  },
  YEZL(e, t, a) {
    var r = a("ABep"),
      i = a("s8wJ"),
      s = a("D3IP"),
      l = a("hrl5"),
      n = a("aicH"),
      o = a("cG4h"),
      c = a("Gx3J"),
      d = a("bVeK"),
      u = a("UxN3")
    let h = {
      add: (0, r.jsx)(u.b5, { icon: { assets: { 16: l.D, 20: n.w } } }),
      text: (0, r.jsx)(u.b5, { icon: { 16: d.K95, 20: d.T8H } }),
      image: (0, r.jsx)(u.b5, { icon: { 16: d.UJ6, 20: d.pYT } }),
      insert: (0, r.jsx)(u.b5, { icon: { assets: { 16: o.L, 20: c.O } } }),
      format: (0, r.jsx)(u.b5, { icon: { assets: { 16: i.C, 20: s.L } } }),
    }
    a.d(t, {}, { Y: h })
  },
  Hh7n(e, t, a) {
    var r = a("X6Vn"),
      i = a("pdPj"),
      s = a("iHfE")
    a.d(
      t,
      {},
      {
        Su: async function (e, t, { onClose: l } = {}) {
          let n = e.get(s.ts)
          if (null == n || !e.get(i.l)) return
          let { ReferenceImageManageDialog: o } = await Promise.all([a.e(584510), a.e(321930)]).then(a.bind(a, "LUIA"))
          e.get(i.l) &&
            e.get(s.ts) === n &&
            (0, r.qf)(e, o, { onClose: l, referenceImage: t, referenceImagesAccountId: n })
        },
        h9: async function (e, { onSaved: t } = {}) {
          let l = e.get(s.ts)
          if (null == l || !e.get(i.l)) return
          let { ReferenceImageFormDialog: n } = await Promise.all([a.e(584510), a.e(342490)]).then(a.bind(a, "xy5l"))
          e.get(i.l) && e.get(s.ts) === l && (0, r.qf)(e, n, { referenceImagesAccountId: l, onSaved: t })
        },
        rk: async function (e, t) {
          let l = e.get(s.ts)
          if (null == l || !e.get(i.l)) return
          let { ReferenceImageSuggestionDialog: n } = await Promise.all([a.e(584510), a.e(75569)]).then(
            a.bind(a, "RrZF"),
          )
          e.get(i.l) && e.get(s.ts) === l && (0, r.qf)(e, n, { ...t, referenceImagesAccountId: l })
        },
      },
    )
  },
  v6uO(e, t, a) {
    a.d(t, { a: () => u })
    var r = a("ABep"),
      i = a("QosV"),
      s = a("XSsU"),
      l = a("cJS3"),
      n = a("on57"),
      o = a("zd8w"),
      c = a("ZWS5"),
      d = a("UxN3")
    function u(e) {
      let t,
        a,
        u,
        h,
        g = (0, i.c)(8),
        { active: p, size: f } = e
      g[0] !== p ? ((t = { active: p, entering: !1 }), (g[0] = p), (g[1] = t)) : (t = g[1])
      let [m, y] = (0, o.useState)(t)
      m.active !== p && y({ active: p, entering: p })
      let b = m.entering && "entering-Dys815"
      return (
        g[2] !== b ? ((a = (0, n.A)("pointer-events-none shrink-0", b)), (g[2] = b), (g[3] = a)) : (a = g[3]),
        g[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = { assets: { 16: (0, c.TE)(s.j), 20: (0, c.TE)(l.A) } }), (g[4] = u))
          : (u = g[4]),
        g[5] !== f || g[6] !== a
          ? ((h = (0, r.jsx)(d.b5, { className: a, icon: u, size: f })), (g[5] = f), (g[6] = a), (g[7] = h))
          : (h = g[7]),
        h
      )
    }
  },
  wEIr(e, t, a) {
    var r = a("ABep"),
      i = a("QosV"),
      s = a("XwhD"),
      l = a("oyxz"),
      n = a("HOLv"),
      o = a("FrrB")
    function c(e) {
      return (0, r.jsx)("span", { className: "block", children: e })
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
            g = (0, i.c)(9),
            { query: p, titleMarker: f } = e
          return (
            g[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, r.jsx)("span", {
                  className:
                    "flex size-12 shrink-0 items-center justify-center rounded-xl bg-background-secondary-soft",
                  children: (0, r.jsx)(n.I, { asset: s.H }),
                })),
                (g[0] = t))
              : (t = g[0]),
            g[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, r.jsx)(l.A, {
                  id: "search.empty.title",
                  defaultMessage: "No results found",
                  description: "Heading when a search in a content collection has no matching items",
                })),
                (g[1] = a))
              : (a = g[1]),
            g[2] !== f ? ((d = (0, r.jsxs)("h2", { children: [f, a] })), (g[2] = f), (g[3] = d)) : (d = g[3]),
            g[4] !== p
              ? ((u = (0, r.jsx)(l.A, {
                  id: "spaceSearch.empty.descriptionWithQuery",
                  defaultMessage: "No matches for “{query}”. <guidance>Try a different search.</guidance>",
                  description:
                    "Guidance when a Space or Sites search has no matching items. query is the text the user searched for. The guidance tag places the suggestion on a separate line below the no-matches sentence.",
                  values: { query: p, guidance: c },
                })),
                (g[4] = p),
                (g[5] = u))
              : (u = g[5]),
            g[6] !== d || g[7] !== u
              ? ((h = (0, r.jsx)(o.A, {
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
    var r = a("ozm1"),
      i = a("dSuP"),
      s = a("T8X0"),
      l = a("yGJW"),
      n = a("eShZ")
    let o = "CHATGPT_FILE_LIBRARY_ORIGIN_RECENTLY_DELETED_SCREEN"
    a.d(
      t,
      {},
      {
        g: function (e, t) {
          ;(0, l.yy)(e, i.Lq, {
            artifactIds: t.map(({ node: e }) => e.id),
            directoryIds: [],
            itemCount: (0, r.PZ)(t.length),
            libraryOrigin: o,
          })
        },
        h: function (e, t, a, r) {
          ;(0, l.yy)(e, i.pG, {
            interactionType: a,
            sessionId: t,
            libraryVariant: "CHATGPT_FILE_LIBRARY_VARIANT_DEFAULT",
            productExperience: e.get(s.pc),
            libraryOrigin: o,
            operation: "CHATGPT_FILE_LIBRARY_OPERATION_PERMANENT_DELETE",
            scope: "CHATGPT_FILE_LIBRARY_SCOPE_ALL",
            error: (function (e) {
              if (!(e instanceof n.fk)) return
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
            })(r),
          })
        },
      },
    )
  },
  VpUQ(e, t, a) {
    var r = a("ABep"),
      i = a("QosV"),
      s = a("zTeN"),
      l = a("oyxz"),
      n = a("zKCW"),
      o = a("JNtf"),
      c = a("mUDD"),
      d = a("Bbed"),
      u = a("X6Vn"),
      h = a("e1xH"),
      g = a("cGrE"),
      p = a("jU86"),
      f = a("TVpO")
    let m = (0, d._)(async () => (await a.e(327702).then(a.bind(a, "iKaf"))).EmptyLibraryTrashDialog, {
        errorFallback: function (e) {
          let t,
            a,
            s,
            n,
            d = (0, i.c)(6),
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
              ? ((s = (0, r.jsx)(c.R4, {
                  children: (0, r.jsx)(c.OO, {
                    children: (0, r.jsx)(c.c7, {
                      title: (0, r.jsx)(o.L3, {
                        children: (0, r.jsx)(l.A, {
                          id: "library.emptyTrash.loadError.title",
                          defaultMessage: "Couldn’t open Empty file trash",
                          description:
                            "Error dialog title when the Empty file trash confirmation fails to load after retrying",
                        }),
                      }),
                      subtitle: (0, r.jsx)(l.A, {
                        id: "library.emptyTrash.loadError.reload",
                        defaultMessage: "Reload the app and try again",
                        description:
                          "Recovery instructions when loading the Empty file trash confirmation failed twice; reloading allows another attempt",
                      }),
                    }),
                  }),
                })),
                (d[3] = s))
              : (s = d[3]),
            d[4] !== a
              ? ((n = (0, r.jsx)(o.lG, { open: !0, contentProps: t, onOpenChange: a, children: s })),
                (d[4] = a),
                (d[5] = n))
              : (n = d[5]),
            n
          )
        },
      }),
      y = (0, s.un)(p.Qy, ({ get: e, scope: t }) => {
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
        let { isPending: a, isFetching: r, isError: i, hasNextPage: s } = e(p.i3)
        return !a && !r && !i && !s && !e(p.nt) && "available" === e(p.IM) && e(p.PP)?.length === 0
      })
    function b(e) {
      let t,
        a,
        n,
        o,
        c = (0, i.c)(13),
        { content: d } = e,
        b = (0, s.gh)(p.Qy),
        x = (0, s.Ul)(p.YV),
        C = (0, s.Ul)(p.nt),
        _ = (0, s.Ul)(h.Op),
        L = (0, s.Ul)(_ ? p.RK : null)
      if ((0, s.Ul)(y) && !L) return null
      c[0] !== b || c[1] !== _
        ? ((t =
            _ || "/space" === b.value.basePath
              ? (0, r.jsx)(l.A, {
                  id: "library.emptyTrash.shortAction",
                  defaultMessage: "Empty trash",
                  description:
                    "Trash banner action that opens a confirmation before permanently deleting items of the selected type",
                })
              : (0, r.jsx)(l.A, {
                  id: "library.emptyTrash.action",
                  defaultMessage: "Empty file trash",
                  description:
                    "Library Trash banner action that opens a confirmation before permanently deleting every trashed file, including files outside the current filters",
                })),
          (c[0] = b),
          (c[1] = _),
          (c[2] = t))
        : (t = c[2])
      let I = t
      if (L) {
        let e
        ;(c[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(l.A, {
              id: "library.emptyTrash.pending",
              defaultMessage: "Emptying trash…",
              description: "Trash banner status while permanent deletion is in progress",
            })),
            (c[3] = e))
          : (e = c[3]),
          (I = e))
      }
      let A = x || C || !!L
      return (
        c[4] !== b
          ? ((a = () => {
              let e = b.get(g.Vu).sessionId
              ;((0, f.h)(b, e, "CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_INITIATED"),
                (0, u.qf)(b, m, { accountId: b.value.accountId, userId: b.value.userId, sessionId: e }))
            }),
            (c[4] = b),
            (c[5] = a))
          : (a = c[5]),
        c[6] !== I || c[7] !== A || c[8] !== a
          ? ((n = { label: I, disabled: A, onClick: a }), (c[6] = I), (c[7] = A), (c[8] = a), (c[9] = n))
          : (n = c[9]),
        c[10] !== d || c[11] !== n
          ? ((o = (0, r.jsx)(v, { content: d, emptyTrashAction: n })), (c[10] = d), (c[11] = n), (c[12] = o))
          : (o = c[12]),
        o
      )
    }
    function v(e) {
      let t,
        a,
        o = (0, i.c)(8),
        { content: c, emptyTrashAction: d } = e,
        u = (0, s.Ul)(h.Op)
      o[0] !== c || o[1] !== u
        ? ((t =
            c ??
            (u
              ? (0, r.jsx)(l.A, {
                  id: "libraryNext.trash.unifiedDescription",
                  defaultMessage: "Restore items you've recently deleted. Items are permanently deleted after 30 days.",
                  description:
                    "Trash banner explaining that deleted pages and files can be restored before permanent deletion after 30 days",
                })
              : (0, r.jsx)(l.A, {
                  id: "libraryNext.trash.description",
                  defaultMessage: "Restore files you've recently deleted. Files are deleted forever after 30 days.",
                  description:
                    "Informational banner above Library Trash. Explains that recently deleted files can be restored and are deleted forever after 30 days.",
                }))),
          (o[0] = c),
          (o[1] = u),
          (o[2] = t))
        : (t = o[2])
      let g = d?.label,
        p = d?.disabled,
        f = d?.onClick
      return (
        o[3] !== t || o[4] !== g || o[5] !== p || o[6] !== f
          ? ((a = (0, r.jsx)("div", {
              className: "mb-3 select-none",
              children: (0, r.jsx)(n.l, {
                variant: "insetNotice",
                primaryCtaColor: "outlineSurface",
                content: t,
                primaryCtaText: g,
                isPrimaryCtaDisabled: p,
                onPrimaryCtaClick: f,
              }),
            })),
            (o[3] = t),
            (o[4] = g),
            (o[5] = p),
            (o[6] = f),
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
            a = (0, i.c)(5),
            { content: s, showEmptyFileTrash: l, emptyTrashAction: n } = e
          if (null == n && (void 0 === l || l)) {
            let e
            return (a[0] !== s ? ((e = (0, r.jsx)(b, { content: s })), (a[0] = s), (a[1] = e)) : (e = a[1]), e)
          }
          return (
            a[2] !== s || a[3] !== n
              ? ((t = (0, r.jsx)(v, { content: s, emptyTrashAction: n })), (a[2] = s), (a[3] = n), (a[4] = t))
              : (t = a[4]),
            t
          )
        },
      },
    )
  },
  Vcg4(e, t, a) {
    var r = a("QosV"),
      i = a("dSuP"),
      s = a("D015"),
      l = a("D7Ms"),
      n = a("NxBK"),
      o = a("zTeN"),
      c = a("zd8w"),
      d = a("yGJW"),
      u = a("cGrE"),
      h = a("TCFx"),
      g = a("jU86"),
      p = a("RjIR"),
      f = a("vq5I"),
      m = a("F1Es")
    let y = (0, o.un)(g.Qy, (e) => (0, l.EN)(g.i3.getOptions(e).queryKey)),
      b = (0, o.A4)(
        g.Qy,
        (e) => null,
        (e, { scope: t, set: a }) => {
          let r,
            i = t.value.deleted ? "CHATGPT_FILE_LIBRARY_ORIGIN_RECENTLY_DELETED_SCREEN" : u._0,
            l = t.queryClient.getQueryCache(),
            o = (0, f.Pw)(t.value.deleted ? null : t.value.directoryId),
            c = (e, t = !1) => {
              if ("idle" === e.state.fetchStatus) return
              let s =
                e.state.fetchMeta?.fetchMore?.direction === "forward"
                  ? "CHATGPT_FILE_LIBRARY_LOAD_TYPE_APPEND"
                  : "CHATGPT_FILE_LIBRARY_LOAD_TYPE_REFRESH"
              ;(t || r?.loadType !== s) &&
                ((r = { loadType: s, operationId: crypto.randomUUID(), startedAt: performance.now() }),
                a({
                  loadType: s,
                  operationId: r.operationId,
                  libraryOrigin: i,
                  provider: o,
                  trigger: (0, m.e)(e, t ? "start" : "active"),
                }))
            },
            d = l.subscribe((d) => {
              if (d.query.queryHash !== e) return
              if ("removed" === d.type) {
                r = void 0
                return
              }
              if ("updated" !== d.type) return
              let u = l.get(e)
              if (null != u && u === d.query) {
                if ("fetch" === d.action.type || "continue" === d.action.type)
                  return void c(u, "fetch" === d.action.type)
                if (null != r)
                  if ("success" === d.action.type) {
                    if (!0 === d.action.manual) return
                    let { loadType: e, operationId: l, startedAt: n } = r
                    r = void 0
                    let c = t.query.getData(g.i3)
                    a({
                      loadType: e,
                      operationId: l,
                      latencyMs: (0, s.N3)(Math.max(0, performance.now() - n), "round"),
                      libraryOrigin: i,
                      provider: o,
                      success: !0,
                      itemCount: (0, s.PZ)((0, h.yF)(c?.pages ?? []).length),
                    })
                  } else if ("error" === d.action.type) {
                    let { loadType: e, operationId: t, startedAt: l } = r
                    ;((r = void 0),
                      d.action.error instanceof n.cc ||
                        a({
                          loadType: e,
                          operationId: t,
                          latencyMs: (0, s.N3)(Math.max(0, performance.now() - l), "round"),
                          libraryOrigin: i,
                          provider: o,
                          success: !1,
                          errorType: "request_failed",
                          error: (0, f.QJ)(d.action.error),
                        }))
                  } else "setState" === d.action.type && "idle" === u.state.fetchStatus && (r = void 0)
              }
            }),
            p = l.get(e)
          return (null != p && c(p), d)
        },
      )
    a.d(
      t,
      {},
      {
        i: function (e) {
          let t,
            a,
            l,
            n,
            h,
            m,
            v,
            x = (0, r.c)(21),
            { initialEntryPoint: C } = e,
            _ = (0, o.gh)(g.vn),
            L = (0, o.gh)(g.Qy),
            [I] = (0, c.useState)(C),
            A = (0, o.Ul)(y),
            T = L.value.deleted ? "CHATGPT_FILE_LIBRARY_ORIGIN_RECENTLY_DELETED_SCREEN" : u._0,
            E = (0, c.useRef)(T),
            w = (0, c.useRef)(void 0)
          x[0] !== L || x[1] !== I || x[2] !== T || x[3] !== _
            ? ((t = () => {
                let e = _.get(u.Vu),
                  t = E.current
                return (
                  (E.current = T),
                  (t === T &&
                    "favorites" === L.value.tab &&
                    null == L.value.directoryId &&
                    !L.value.deleted &&
                    L.get(p._)) ||
                    (0, d.yy)(_, i.N6, {
                      ...e,
                      action: "CHATGPT_FILE_LIBRARY_ACTION_SHOWN",
                      libraryOrigin: T,
                      entryPoint: I,
                      layout:
                        "grid" === L.get(g.YH)
                          ? "CHATGPT_FILE_LIBRARY_LAYOUT_GRID"
                          : "CHATGPT_FILE_LIBRARY_LAYOUT_LIST",
                    }),
                  e
                )
              }),
              (x[0] = L),
              (x[1] = I),
              (x[2] = T),
              (x[3] = _),
              (x[4] = t))
            : (t = x[4])
          let j = (0, c.useEffectEvent)(t)
          return (
            x[5] !== T || x[6] !== j || x[7] !== _
              ? ((a = () => {
                  let e = j()
                  return () => {
                    ;(0, d.yy)(_, i.N6, { ...e, action: "CHATGPT_FILE_LIBRARY_ACTION_DISMISSED", libraryOrigin: T })
                  }
                }),
                (x[5] = T),
                (x[6] = j),
                (x[7] = _),
                (x[8] = a))
              : (a = x[8]),
            x[9] !== T || x[10] !== _ ? ((l = [_, T]), (x[9] = T), (x[10] = _), (x[11] = l)) : (l = x[11]),
            (0, c.useEffect)(a, l),
            x[12] !== L || x[13] !== A || x[14] !== _
              ? ((n = () => {
                  if ("favorites" === L.value.tab && null == L.value.directoryId && !L.value.deleted) return
                  let e = L.watch((e) => {
                    let t = e.get(b, A)
                    null != t && (0, d.yy)(_, i.Xz, { ..._.get(u.Vu), ...t })
                  })
                  return () => {
                    ;(e(), (0, o.st)(L, b, A))
                  }
                }),
                (h = [A, L, _]),
                (x[12] = L),
                (x[13] = A),
                (x[14] = _),
                (x[15] = n),
                (x[16] = h))
              : ((n = x[15]), (h = x[16])),
            (0, c.useEffect)(n, h),
            x[17] !== L || x[18] !== _
              ? ((m = () =>
                  L.watch((e) => {
                    let t,
                      { search: a, tab: r, directoryId: l, deleted: n, categories: o, sources: c } = e.value
                    if (
                      a ||
                      ("favorites" === r && null == l && !n) ||
                      ("library:collection:shared-with-me" === l && !n && 0 === o.length && 0 === c.length)
                    ) {
                      w.current = void 0
                      return
                    }
                    let h = e.get(g.i3, { enabled: !1 })
                    if (null == h.data || h.isPending || h.isFetching || h.isError) return
                    let p = e.get(g.q3)
                    if (null == p || (0 === p.length && h.hasNextPage)) return
                    let m = o.length > 0 || c.length > 0 || "images" === r || ("folders" === r && null == l)
                    0 === p.length &&
                      (t = m
                        ? "CHATGPT_FILE_LIBRARY_EMPTY_REASON_FILTER"
                        : null != l
                          ? "CHATGPT_FILE_LIBRARY_EMPTY_REASON_EMPTY_FOLDER"
                          : "CHATGPT_FILE_LIBRARY_EMPTY_REASON_NO_LIBRARY_FILES")
                    let b = JSON.stringify([e.get(y), h.dataUpdatedAt, p.length, m, t])
                    w.current !== b &&
                      ((w.current = b),
                      (0, d.yy)(_, i.oq, {
                        ..._.get(u.Vu),
                        visibleItemCount: (0, s.PZ)(p.length),
                        emptyReason: t,
                        provider: (0, f.Pw)(l),
                      }))
                  })),
                (v = [L, _]),
                (x[17] = L),
                (x[18] = _),
                (x[19] = m),
                (x[20] = v))
              : ((m = x[19]), (v = x[20])),
            (0, c.useEffect)(m, v),
            null
          )
        },
      },
    )
  },
  iMhR(e, t, a) {
    var r = a("zTeN"),
      i = a("jU86"),
      s = a("ahQQ")
    let l = {
        ...(0, i.ER)("/space/files", "?tab=images", "/space/files"),
        entrySurface: "spaces",
        includePages: !1,
        includeSites: !1,
        imageSourceTabs: !0,
        sources: ["generated"],
        defaultViewMode: "list",
      },
      n = (0, r.vP)(s.vn, !1)
    a.d(t, {}, { B: l, d: n })
  },
  X5eB(e, t, a) {
    var r = a("ABep"),
      i = a("QosV"),
      s = a("NxBK"),
      l = a("zTeN"),
      n = a("zd8w"),
      o = a("SPnB"),
      c = a("tl2n"),
      d = a("OMIV"),
      u = a("jU86"),
      h = a("ahQQ"),
      g = a("iMhR")
    let p = (0, l.vP)(h.vn, () => new Set()),
      f = (0, l.SZ)(
        h.Qy,
        () => !1,
        ({ get: e, set: t, scope: a }) => {
          let r,
            i = a.value
          if (
            (t(!1),
            "/space" !== i.basePath ||
              "suggested" !== i.tab ||
              null != i.directoryId ||
              !i.includePages ||
              i.search ||
              i.categories.length > 0 ||
              i.sources.length > 0 ||
              i.deleted ||
              !e(d.JW, "2092319279") ||
              !e(c.$7) ||
              i.accountId !== e(o.chatGptAuthenticatedAccountId$) ||
              null == i.userId ||
              i.userId !== e(o.chatGptAuthenticatedUserId$))
          )
            return
          let s = () => {
            ;(clearTimeout(r), t(!1), "visible" === document.visibilityState && (r = setTimeout(() => t(!0), 1e3)))
          }
          return (
            s(),
            document.addEventListener("visibilitychange", s),
            () => {
              ;(clearTimeout(r), document.removeEventListener("visibilitychange", s))
            }
          )
        },
      )
    function m(e) {
      return (0, r.jsx)(l.Ui, { scope: h.Qy, value: e, children: (0, r.jsx)(y, {}) }, e.tab)
    }
    function y() {
      let e,
        t,
        a = (0, i.c)(3),
        r = (0, l.gh)(h.Qy)
      return (
        a[0] !== r
          ? ((e = () => {
              var e
              return (e = r).watch((t) => {
                let a = t.query.getOptions(u.i3),
                  r = a.queryFn
                if (
                  !1 === a.enabled ||
                  "function" != typeof r ||
                  e.value.accountId !== t.get(o.chatGptAuthenticatedAccountId$) ||
                  e.value.userId !== t.get(o.chatGptAuthenticatedUserId$)
                )
                  return
                "images" === e.value.tab && e.set(g.d, !0)
                let i = e.queryClient.getQueryCache().build(e.queryClient, a)
                if (null != i.state.data || "idle" !== i.state.fetchStatus || e.get(p).has(i.queryHash)) return
                e.set(p, (e) => new Set([...e, i.queryHash]))
                let l = () =>
                  e.value.accountId === e.get(o.chatGptAuthenticatedAccountId$) &&
                  e.value.userId === e.get(o.chatGptAuthenticatedUserId$)
                e.queryClient.prefetchInfiniteQuery({
                  ...a,
                  pages: 1,
                  queryFn: async (e) => {
                    if (!l()) throw new s.cc()
                    let t = await r(e)
                    if (!l()) throw new s.cc()
                    return t
                  },
                  retry: (e, t) => {
                    if (!i.isActive() || !l() || t instanceof s.cc) return !1
                    let r = a.retry ?? 3
                    return "function" == typeof r ? r(e, t) : !0 === r || ("number" == typeof r && e < r)
                  },
                })
              })
            }),
            (t = [r]),
            (a[0] = r),
            (a[1] = e),
            (a[2] = t))
          : ((e = a[1]), (t = a[2])),
        (0, n.useEffect)(e, t),
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
            a = (0, i.c)(4),
            s = (0, l.gh)(h.Qy)
          if (!(0, l.Ul)(f)) return null
          a[0] !== s ? ((e = s.getOwnValue(h.Qy)), (a[0] = s), (a[1] = e)) : (e = a[1])
          let n = e
          if (a[2] !== n) {
            let e = [{ ...n, tab: "all" }, { ...n, tab: "favorites", includePages: !1 }, g.B]
            ;((t = (0, r.jsx)(r.Fragment, { children: e.map(m) })), (a[2] = n), (a[3] = t))
          } else t = a[3]
          return t
        },
      },
    )
  },
  K9Zg(e, t, a) {
    var r = a("QosV"),
      i = a("ozm1"),
      s = a("dSuP"),
      l = a("MVHH"),
      n = a("D7Ms"),
      o = a("NxBK"),
      c = a("zTeN"),
      d = a("zd8w"),
      u = a("SPnB"),
      h = a("T8X0"),
      g = a("yGJW"),
      p = a("eShZ"),
      f = a("cGrE"),
      m = a("TCFx"),
      y = a("jU86"),
      b = a("F1Es"),
      v = a("RjIR")
    let x = "CHATGPT_FILE_LIBRARY_CATEGORY_FAVORITES",
      C = "CHATGPT_FILE_LIBRARY_ORIGIN_LIBRARY_SCREEN",
      _ = {
        uploaded: "CHATGPT_FILE_LIBRARY_SOURCE_FILTER_UPLOADED",
        generated: "CHATGPT_FILE_LIBRARY_SOURCE_FILTER_GENERATED",
      },
      L = {
        meetings: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_MEETINGS",
        pages: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_PAGES",
        images: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_IMAGES",
        documents: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_DOCUMENTS",
        spreadsheets: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_SPREADSHEETS",
        presentations: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_PRESENTATIONS",
        pdfs: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_PDFS",
      }
    function I(e, t) {
      return e + (t.favoriteItemCount ?? t.items.length)
    }
    a.d(
      t,
      {},
      {
        m: function (e) {
          let t,
            a,
            A,
            T = (0, r.c)(5),
            { initialEntryPoint: E } = e,
            w = (0, c.gh)(y.Qy),
            [j] = (0, d.useState)(E)
          T[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = {}), (T[0] = t)) : (t = T[0])
          let R = (0, d.useRef)(t)
          return (
            T[1] !== j || T[2] !== w
              ? ((a = () => {
                  let e,
                    t = !0,
                    a = R.current,
                    r = () =>
                      t &&
                      "favorites" === w.value.tab &&
                      null == w.value.directoryId &&
                      !w.value.deleted &&
                      w.get(v._) &&
                      w.get(u.chatGptAuthenticatedAccountId$) === w.value.accountId &&
                      w.get(u.chatGptAuthenticatedUserId$) === w.value.userId,
                    c = () => ({
                      sessionId: w.get(f.Vu).sessionId,
                      libraryVariant: "CHATGPT_FILE_LIBRARY_VARIANT_DEFAULT",
                      productExperience: "work" === w.get(h.uI) ? "work" : "chat",
                    }),
                    d = () => {
                      a.operation = { operationId: crypto.randomUUID(), startedAtMs: performance.now() }
                    },
                    A = (e) => {
                      ;(0, g.yy)(w, s.N6, { ...c(), libraryOrigin: C, ...e })
                    },
                    T = w.queryClient.getQueryCache().subscribe((t) => {
                      if (
                        ("updated" === t.type || "removed" === t.type) &&
                        r() &&
                        t.query.queryHash === (0, n.EN)(w.query.getOptions(y.i3).queryKey)
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
                            (0, g.yy)(w, s.Xz, {
                              ...c(),
                              category: x,
                              libraryOrigin: C,
                              operationId: e.operationId,
                              loadType: e.loadType,
                              trigger: (0, b.e)(t.query, "start"),
                            }))
                        else if (
                          null == e ||
                          ("error" !== t.action.type && ("success" !== t.action.type || t.action.manual))
                        )
                          "setState" === t.action.type && "idle" === t.query.state.fetchStatus && (e = void 0)
                        else {
                          let a = e
                          if (((e = void 0), "error" === t.action.type && t.action.error instanceof o.cc)) return
                          let r = "success" === t.action.type
                          ;(0, g.yy)(w, s.Xz, {
                            ...c(),
                            category: x,
                            libraryOrigin: C,
                            success: r,
                            operationId: a.operationId,
                            loadType: a.loadType,
                            latencyMs: (0, i.N3)(performance.now() - a.startedAtMs, "round"),
                            itemCount: r ? (0, i.PZ)(w.query.getData(y.i3)?.pages.reduce(I, 0) ?? 0) : void 0,
                            errorType: r ? void 0 : "request_failed",
                            error:
                              "error" === t.action.type
                                ? (function (e) {
                                    if (!(e instanceof p.fk)) return
                                    let t = e.responseStatus,
                                      a = "network" === e.errorKind || null == t,
                                      r =
                                        null != e.errorCode && /^[a-z0-9_-]{1,64}$/i.test(e.errorCode)
                                          ? e.errorCode
                                          : void 0,
                                      i = r?.toLowerCase()
                                    return {
                                      type: a
                                        ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_NETWORK_ERROR"
                                        : 507 === t || i?.includes("storage_limit") || i?.includes("quota")
                                          ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_STORAGE_LIMIT"
                                          : 404 === t ||
                                              i?.includes("missing_library_file") ||
                                              i?.includes("library_file_not_found") ||
                                              "file_not_found" === i ||
                                              "file_expired" === i
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
                                      code: r,
                                      httpStatus: !a && Number.isInteger(t) && t >= 100 && t <= 599 ? t : void 0,
                                    }
                                  })(t.action.error instanceof Error ? t.action.error : void 0)
                                : void 0,
                          })
                        }
                      }
                    }),
                    E = w.watch((e) => {
                      let t = a.location,
                        n = a.viewMode,
                        o = e.get(y.YH)
                      ;((a.location = e.value), (a.viewMode = o))
                      let h = e.get(v._),
                        p = e.get(u.chatGptAuthenticatedAccountId$),
                        f = e.get(u.chatGptAuthenticatedUserId$)
                      if (!h || p !== e.value.accountId || f !== e.value.userId || !r()) {
                        ;((a.active = !1), (a.hadLoadError = !1))
                        return
                      }
                      let b = "grid" === o ? "CHATGPT_FILE_LIBRARY_LAYOUT_GRID" : "CHATGPT_FILE_LIBRARY_LAYOUT_LIST",
                        C = "grid" === o ? "library_grid" : "library_list",
                        I = JSON.stringify(t?.sources) !== JSON.stringify(e.value.sources),
                        T = JSON.stringify(t?.categories) !== JSON.stringify(e.value.categories)
                      if (a.active) {
                        if (n !== o || I || T || t?.search.toLocaleLowerCase() !== e.value.search.toLocaleLowerCase()) {
                          d()
                          let a = "CHATGPT_FILE_LIBRARY_ACTION_VIEW_CHANGED"
                          if (
                            (n !== o &&
                              A({
                                action: a,
                                layout: b,
                                changedProperty: "CHATGPT_FILE_LIBRARY_CHANGED_PROPERTY_LAYOUT",
                              }),
                            t?.sources[0] !== e.value.sources[0])
                          ) {
                            let t = e.value.sources[0]
                            A({
                              action: a,
                              changedProperty: "CHATGPT_FILE_LIBRARY_CHANGED_PROPERTY_SOURCE_FILTER",
                              sourceFilter: null == t ? "CHATGPT_FILE_LIBRARY_SOURCE_FILTER_NONE" : _[t],
                            })
                          }
                          if (t?.categories[0] !== e.value.categories[0]) {
                            let t = e.value.categories[0]
                            A({
                              action: a,
                              changedProperty: "CHATGPT_FILE_LIBRARY_CHANGED_PROPERTY_FILE_TYPE_FILTER",
                              fileTypeFilter: null == t ? "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_NONE" : L[t],
                            })
                          }
                        }
                      } else
                        (d(),
                          A({
                            action:
                              null == t
                                ? "CHATGPT_FILE_LIBRARY_ACTION_SHOWN"
                                : "CHATGPT_FILE_LIBRARY_ACTION_VIEW_CHANGED",
                            changedProperty: null == t ? void 0 : "CHATGPT_FILE_LIBRARY_CHANGED_PROPERTY_CATEGORY",
                            category: x,
                            layout: b,
                            entryPoint: null == t ? j : void 0,
                            operationId: a.operation?.operationId,
                          }),
                          (0, g.yy)(e, l.aF, {
                            eventType: "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_BOOKMARKS_TAB_VIEWED",
                            surface: C,
                            viewMode: o,
                          }))
                      a.active = !0
                      let E = e.get(y.i3, { enabled: !1 })
                      ;(E.isError &&
                        !a.hadLoadError &&
                        (0, g.yy)(e, l.aF, {
                          eventType: "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_BOOKMARKS_LOAD_ERROR",
                          surface: C,
                          result: "error",
                          viewMode: o,
                        }),
                        (a.hadLoadError = E.isError))
                      let w = a.operation,
                        R = e.get(y.en)
                      if (
                        null == w ||
                        w.operationId === a.lastResultsOperationId ||
                        null == E.data ||
                        E.isPending ||
                        E.isFetching ||
                        E.isError ||
                        ((e.value.search || e.value.categories.length > 0 || e.value.sources.length > 0) &&
                          E.hasNextPage)
                      )
                        return
                      let S = E.data.pages
                      queueMicrotask(() => {
                        let t
                        if (
                          !r() ||
                          a.operation !== w ||
                          a.lastResultsOperationId === w.operationId ||
                          e.get(y.i3, { enabled: !1 }).isFetching
                        )
                          return
                        let l = (0, m.me)(S).filter((e) => !R.has((0, m.sm)(e))).length
                        ;(0 !== l || e.value.search || !E.hasNextPage) &&
                          ((a.lastResultsOperationId = w.operationId),
                          0 !== l ||
                            e.value.search ||
                            (t =
                              e.value.categories.length > 0 || e.value.sources.length > 0
                                ? "CHATGPT_FILE_LIBRARY_EMPTY_REASON_FILTER"
                                : "CHATGPT_FILE_LIBRARY_EMPTY_REASON_NO_LIBRARY_FILES"),
                          (0, g.yy)(e, s.oq, {
                            ...c(),
                            category: x,
                            operationId: w.operationId,
                            latencyMs: (0, i.N3)(performance.now() - w.startedAtMs, "round"),
                            visibleItemCount: (0, i.PZ)(l),
                            emptyReason: t,
                          }))
                      })
                    })
                  return () => {
                    ;((t = !1), E(), T())
                  }
                }),
                (A = [j, w]),
                (T[1] = j),
                (T[2] = w),
                (T[3] = a),
                (T[4] = A))
              : ((a = T[3]), (A = T[4])),
            (0, d.useLayoutEffect)(a, A),
            null
          )
        },
      },
    )
  },
  EAun(e, t, a) {
    var r = a("ABep"),
      i = a("QosV"),
      s = a("zTeN"),
      l = a("oyxz"),
      n = a("Sm6l"),
      o = a("jU86")
    function c(e) {
      let t,
        a,
        c,
        d,
        u,
        h = (0, i.c)(13),
        { error: g, paint: p } = e,
        f = (0, s.gh)(o.Qy),
        { data: m } = (0, s.Ul)(o.rQ)
      return (
        h[0] !== g
          ? ((t =
              "not-found" === g
                ? (0, r.jsx)(l.A, {
                    id: "library.folder.notFoundOrNoAccess",
                    defaultMessage: "This folder doesn’t exist or you don’t have access",
                    description:
                      "Library error when a connected provider returns not found for a folder, which can mean the folder is missing or the account lacks access",
                  })
                : (0, r.jsx)(l.A, {
                    id: "artifacts.folder_surface.sharepoint.permission_denied.description",
                    defaultMessage: "You don’t have permission to view this site or folder.",
                    description:
                      "Centered Library error shown when the connected provider account cannot access a site, library, or folder",
                  })),
            (h[0] = g),
            (h[1] = t))
          : (t = h[1]),
        h[2] !== m?.items || h[3] !== m?.items.at || h[4] !== f
          ? ((a = () => {
              let e = m?.items.at(-2)
              ;(0, o.zl)(f, (0, o.SE)({ ...f.value, directoryId: e?.is_root ? null : (e?.id ?? null) }))
            }),
            (h[2] = m?.items),
            (h[3] = m?.items.at),
            (h[4] = f),
            (h[5] = a))
          : (a = h[5]),
        h[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, r.jsx)(l.A, {
              id: "artifacts.folder_surface.sharepoint.permission_denied.button.back",
              defaultMessage: "Go back",
              description:
                "Button in a connected provider permission error that returns to a parent folder or Library root",
            })),
            (h[6] = c))
          : (c = h[6]),
        h[7] !== a ? ((d = (0, r.jsx)(n.$, { onClick: a, children: c })), (h[7] = a), (h[8] = d)) : (d = h[8]),
        h[9] !== p || h[10] !== t || h[11] !== d
          ? ((u = (0, r.jsxs)("div", {
              className: "flex flex-col items-center gap-4 py-12",
              role: "alert",
              children: [p, t, d],
            })),
            (h[9] = p),
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
            d = (0, i.c)(12),
            { favorites: u, onRetry: h, folderError: g, paint: p } = e
          if (null != g) {
            let e
            return (
              d[0] !== g || d[1] !== p
                ? ((e = (0, r.jsx)(c, { error: g, paint: p })), (d[0] = g), (d[1] = p), (d[2] = e))
                : (e = d[2]),
              e
            )
          }
          return (
            d[3] !== u
              ? ((t = u
                  ? (0, r.jsx)(l.A, {
                      id: "library.favorites.loadFailed",
                      defaultMessage: "Failed to load favorites",
                      description: "Error when Library Favorites could not load; the next button retries the request",
                    })
                  : (0, r.jsx)(l.A, {
                      id: "libraryNext.results.failed",
                      defaultMessage: "Failed to load files.",
                      description: "Library browse error when the first page could not be fetched",
                    })),
                (d[3] = u),
                (d[4] = t))
              : (t = d[4]),
            d[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, r.jsx)(l.A, {
                  id: "libraryNext.results.retry",
                  defaultMessage: "Try again",
                  description: "Retry fetching Library results",
                })),
                (d[5] = a))
              : (a = d[5]),
            d[6] !== h ? ((s = (0, r.jsx)(n.$, { onClick: h, children: a })), (d[6] = h), (d[7] = s)) : (s = d[7]),
            d[8] !== p || d[9] !== t || d[10] !== s
              ? ((o = (0, r.jsxs)("div", {
                  className: "flex flex-col items-center gap-4 py-12",
                  role: "alert",
                  children: [p, t, s],
                })),
                (d[8] = p),
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
    a.a(e, async function (e, r) {
      try {
        var i = a("ABep"),
          s = a("QosV"),
          l = a("on57"),
          n = a("zTeN"),
          o = a("zd8w"),
          c = a("HZfM"),
          d = a("bJfu"),
          u = a("Bbed"),
          h = a("e1xH"),
          g = a("ofBY"),
          p = a("T3CH"),
          f = a("CLFW"),
          m = a("Goes"),
          y = a("sg90"),
          b = a("pdPj"),
          v = a("V080"),
          x = a("VpUQ"),
          C = a("cGrE"),
          _ = a("Vcg4"),
          L = a("jU86"),
          I = a("X5eB"),
          A = a("K9Zg"),
          T = a("XmDk"),
          E = a("kQiD"),
          w = a("aYWA"),
          j = a("BV4m"),
          R = a("dLIb"),
          S = a("wHLp"),
          M = a("M4Gn"),
          N = a("QoH2"),
          P = a("Wg4b"),
          F = a("NCaE"),
          H = a("LVlF"),
          B = a("zbzy"),
          k = a("jx6J"),
          Y = e([T])
        T = (Y.then ? (await Y)() : Y)[0]
        let V = (0, u._)(async () => (await a.e(398281).then(a.bind(a, "QScO"))).SpaceTrashItems, {
          fallback: (0, i.jsx)(f.D, {}),
        })
        function G(e) {
          return (0, i.jsx)(O, { onOpenItem: e })
        }
        function O(e) {
          let t,
            a,
            r,
            l,
            d,
            u,
            h,
            g,
            p = (0, s.c)(25),
            { onOpenItem: f } = e,
            m = (0, c.zy)(),
            y = (0, c.Zp)()
          p[0] !== m.search ? ((t = (0, S.G)(m.search)), (p[0] = m.search), (p[1] = t)) : (t = p[1])
          let b = t
          ;(p[2] !== m.hash || p[3] !== m.pathname || p[4] !== m.search || p[5] !== m.state || p[6] !== y
            ? ((a = () => {
                let e = new URLSearchParams(m.search)
                e.has("entry_point") &&
                  ((0, L.ER)(m.pathname, m.search).storageCleanup && e.set("storage_cleanup", "true"),
                  e.delete("entry_point"),
                  y({ pathname: m.pathname, search: e.toString(), hash: m.hash }, { replace: !0, state: m.state }))
              }),
              (p[2] = m.hash),
              (p[3] = m.pathname),
              (p[4] = m.search),
              (p[5] = m.state),
              (p[6] = y),
              (p[7] = a))
            : (a = p[7]),
            p[8] !== m || p[9] !== y ? ((r = [m, y]), (p[8] = m), (p[9] = y), (p[10] = r)) : (r = p[10]),
            (0, o.useEffect)(a, r))
          let v = m.state
          return (
            p[12] === Symbol.for("react.memo_cache_sentinel") ? ((l = {}), (p[12] = l)) : (l = p[12]),
            p[13] !== m.pathname || p[14] !== m.search || p[15] !== v
              ? ((d = (0, L.ER)(m.pathname, m.search, "/library", v)),
                (p[13] = m.pathname),
                (p[14] = m.search),
                (p[15] = v),
                (p[16] = d))
              : (d = p[16]),
            p[17] !== d ? ((u = { ...d, entrySurface: "library" }), (p[17] = d), (p[18] = u)) : (u = p[18]),
            p[19] !== b || p[20] !== f
              ? ((h = (0, i.jsx)(U, { entryPoint: b, onOpenItem: f })), (p[19] = b), (p[20] = f), (p[21] = h))
              : (h = p[21]),
            p[22] !== u || p[23] !== h
              ? ((g = (0, i.jsx)(n.Ui, {
                  scope: L.vn,
                  value: l,
                  children: (0, i.jsx)(n.Ui, { scope: L.Qy, value: u, children: h }),
                })),
                (p[22] = u),
                (p[23] = h),
                (p[24] = g))
              : (g = p[24]),
            g
          )
        }
        function U(e) {
          let t,
            a,
            r,
            l,
            d,
            u,
            p,
            T,
            S,
            F,
            Y,
            G,
            O,
            U,
            z,
            Z,
            Q,
            q,
            K,
            W,
            J,
            $,
            X = (0, s.c)(102),
            {
              scrollContainerRef: ee,
              entryPoint: et,
              isVisible: ea,
              onOpenItem: er,
              title: ei,
              controls: es,
              navigation: el,
              results: en,
              onSelectionToolbarMount: eo,
              stickyNavigation: ec,
            } = e,
            ed = void 0 === ea || ea,
            eu = (0, n.gh)(L.Qy),
            eh = (0, n.Ul)(b.l),
            eg = (0, n.Ul)(L.eY),
            ep = (0, n.Ul)(N.N3),
            ef = (0, n.Ul)(eu.value.deleted ? h.GU : null),
            em = (0, n.Ul)(eu.value.deleted ? h.Op : null),
            ey = (0, n.Ul)(em ? L.RK : null),
            eb = (0, c.zy)(),
            ev = (0, n.Ul)(L.g_)
          X[0] !== eb || X[1] !== ev
            ? ((t = null == ev ? eb : new URL(ev, "https://chatgpt.com")), (X[0] = eb), (X[1] = ev), (X[2] = t))
            : (t = X[2])
          let ex = t,
            eC = new URLSearchParams(ex.search).get("trash_kind"),
            e_ = "files"
          "pages" === eC ? (e_ = "pages") : "spaces" === eC && "enabled" === ef && (e_ = "spaces")
          let eL = eu.value.deleted && "enabled" === ef && !em,
            eI = !eL || "files" === e_,
            eA = (0, n.Ul)(eu.value.deleted && "loading" !== ef ? y.Q : null),
            eT = (0, o.useRef)(null),
            eE = ee ?? eT
          if (
            (X[3] !== eu
              ? ((a = () => (0, L.Rd)(eu)), (r = [eu]), (X[3] = eu), (X[4] = a), (X[5] = r))
              : ((a = X[4]), (r = X[5])),
            (0, o.useEffect)(a, r),
            X[6] !== ed || X[7] !== eu
              ? ((l = () => {
                  if (ed) return (0, L.iK)(eu)
                }),
                (d = [eu, ed]),
                (X[6] = ed),
                (X[7] = eu),
                (X[8] = l),
                (X[9] = d))
              : ((l = X[8]), (d = X[9])),
            (0, o.useEffect)(l, d),
            "loading" === ef && (em || "files" !== e_))
          ) {
            let e
            return (
              X[10] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(f.D, {})), (X[10] = e))
                : (e = X[10]),
              e
            )
          }
          X[11] !== eu ? ((u = (e) => (0, C.np)(eu, { category: e })), (X[11] = eu), (X[12] = u)) : (u = X[12])
          let ew = u
          if (eL) {
            let e, t
            ;(X[13] !== ex.hash || X[14] !== ex.pathname || X[15] !== ex.search || X[16] !== eb.state || X[17] !== eu
              ? ((e = (e) => {
                  let t = new URLSearchParams(ex.search)
                  ;("files" === e ? t.delete("trash_kind") : t.set("trash_kind", e),
                    (0, L.zl)(eu, `${ex.pathname}?${t.toString()}${ex.hash}`, { replace: !0, state: eb.state }))
                }),
                (X[13] = ex.hash),
                (X[14] = ex.pathname),
                (X[15] = ex.search),
                (X[16] = eb.state),
                (X[17] = eu),
                (X[18] = e))
              : (e = X[18]),
              X[19] !== e || X[20] !== e_
                ? ((t = (0, i.jsx)(m.N, { kind: e_, onSelect: e })), (X[19] = e), (X[20] = e_), (X[21] = t))
                : (t = X[21]),
              (p = t))
          } else if (!eu.value.deleted && !eu.value.search && null == eu.value.directoryId) {
            let e, t
            ;(X[22] !== eu ? ((e = (e) => (0, L.zl)(eu, e)), (X[22] = eu), (X[23] = e)) : (e = X[23]),
              X[24] !== ew || X[25] !== eu.value || X[26] !== e
                ? ((t = (0, i.jsx)(M.I2, {
                    basePath: eu.value.basePath,
                    browseLocation: eu.value,
                    selectedKey: eu.value.tab,
                    onFileTabSelect: ew,
                    onNavigate: e,
                  })),
                  (X[24] = ew),
                  (X[25] = eu.value),
                  (X[26] = e),
                  (X[27] = t))
                : (t = X[27]),
              (p = t))
          }
          X[29] !== ey || X[30] !== er || X[31] !== en || X[32] !== em
            ? ((T = em
                ? (0, i.jsx)(w.Y, { onOpenItem: er, emptyState: ey ? null : void 0 })
                : (en ?? (0, i.jsx)(w.Y, { onOpenItem: er }))),
              (X[29] = ey),
              (X[30] = er),
              (X[31] = en),
              (X[32] = em),
              (X[33] = T))
            : (T = X[33])
          let ej = T
          ;(X[34] !== ed ? ((S = ed ? (0, i.jsx)(I.$, {}) : null), (X[34] = ed), (X[35] = S)) : (S = X[35]),
            X[36] !== eu.value.accountId || X[37] !== eu.value.userId
              ? ((F = JSON.stringify([eu.value.accountId, eu.value.userId])),
                (X[36] = eu.value.accountId),
                (X[37] = eu.value.userId),
                (X[38] = F))
              : (F = X[38]),
            X[39] !== et || X[40] !== F
              ? ((Y = (0, i.jsx)(A.m, { initialEntryPoint: et }, F)), (X[39] = et), (X[40] = F), (X[41] = Y))
              : (Y = X[41]),
            X[42] !== et || X[43] !== eu.value.accountId || X[44] !== eu.value.userId || X[45] !== eI
              ? ((G = eI
                  ? (0, i.jsx)(
                      _.i,
                      { initialEntryPoint: et },
                      `analytics:${JSON.stringify([eu.value.accountId, eu.value.userId])}`,
                    )
                  : null),
                (X[42] = et),
                (X[43] = eu.value.accountId),
                (X[44] = eu.value.userId),
                (X[45] = eI),
                (X[46] = G))
              : (G = X[46]),
            X[47] === Symbol.for("react.memo_cache_sentinel") ? ((O = (0, i.jsx)(j.c, {})), (X[47] = O)) : (O = X[47]))
          let eR = !eu.value.deleted
          ;(X[48] !== ei ? ((U = void 0 === ei ? (0, i.jsx)(M.e9, {}) : ei), (X[48] = ei), (X[49] = U)) : (U = X[49]),
            X[50] !== eu.value.accountId || X[51] !== eu.value.userId
              ? ((z = JSON.stringify([eu.value.accountId, eu.value.userId])),
                (X[50] = eu.value.accountId),
                (X[51] = eu.value.userId),
                (X[52] = z))
              : (z = X[52]),
            X[53] !== ed || X[54] !== z
              ? ((Z = (0, i.jsx)(B.M, { isVisible: ed }, z)), (X[53] = ed), (X[54] = z), (X[55] = Z))
              : (Z = X[55]),
            X[56] !== es ||
            X[57] !== eL ||
            X[58] !== eu.value.accountId ||
            X[59] !== eu.value.deleted ||
            X[60] !== eI ||
            X[61] !== eA ||
            X[62] !== e_
              ? ((Q =
                  void 0 === es
                    ? !eA &&
                      (0, i.jsx)(M.pH, {
                        showFilters: eI,
                        showBrowseControls: !eL || "spaces" !== e_,
                        actions: eu.value.deleted
                          ? void 0
                          : (0, i.jsx)(v.Rr, { handleOnboarding: !0 }, eu.value.accountId),
                      })
                    : es),
                (X[56] = es),
                (X[57] = eL),
                (X[58] = eu.value.accountId),
                (X[59] = eu.value.deleted),
                (X[60] = eI),
                (X[61] = eA),
                (X[62] = e_),
                (X[63] = Q))
              : (Q = X[63]))
          let eS = void 0 === el ? p : el
          return (
            X[64] !== ey ||
            X[65] !== eg ||
            X[66] !== ej ||
            X[67] !== eh ||
            X[68] !== eu.value.deleted ||
            X[69] !== eu.value.search ||
            X[70] !== eE ||
            X[71] !== eI ||
            X[72] !== eA
              ? ((q = eI
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        eu.value.deleted && (!eA || ey) ? (0, i.jsx)(x.e, {}) : null,
                        eh && eg && !eu.value.search && (0, i.jsx)(E.Y, {}),
                        !1,
                        (0, i.jsx)(D, {
                          scrollContainerRef: eE,
                          children: (0, i.jsx)(P.G, {
                            scrollContainerRef: eE,
                            children: eA && !ey ? (0, i.jsx)(g.n, { view: "trash" }) : ej,
                          }),
                        }),
                      ],
                    })
                  : null),
                (X[64] = ey),
                (X[65] = eg),
                (X[66] = ej),
                (X[67] = eh),
                (X[68] = eu.value.deleted),
                (X[69] = eu.value.search),
                (X[70] = eE),
                (X[71] = eI),
                (X[72] = eA),
                (X[73] = q))
              : (q = X[73]),
            X[74] !== eL || X[75] !== eo || X[76] !== eE || X[77] !== eI || X[78] !== e_
              ? ((K =
                  eL && !eI
                    ? (0, i.jsx)(V, {
                        kind: "spaces" === e_ ? "space" : "page",
                        scrollContainerRef: eE,
                        onSelectionToolbarMount: eo,
                      })
                    : null),
                (X[74] = eL),
                (X[75] = eo),
                (X[76] = eE),
                (X[77] = eI),
                (X[78] = e_),
                (X[79] = K))
              : (K = X[79]),
            X[80] !== eE ||
            X[81] !== ec ||
            X[82] !== eR ||
            X[83] !== U ||
            X[84] !== Z ||
            X[85] !== Q ||
            X[86] !== eS ||
            X[87] !== q ||
            X[88] !== K
              ? ((W = (0, i.jsx)(k.v, {
                  children: (0, i.jsxs)(R.WI, {
                    stickyNavigation: ec,
                    scrollContainerRef: eE,
                    contentInset: eR,
                    title: U,
                    banner: Z,
                    controls: Q,
                    navigation: eS,
                    children: [q, K],
                  }),
                })),
                (X[80] = eE),
                (X[81] = ec),
                (X[82] = eR),
                (X[83] = U),
                (X[84] = Z),
                (X[85] = Q),
                (X[86] = eS),
                (X[87] = q),
                (X[88] = K),
                (X[89] = W))
              : (W = X[89]),
            X[90] !== ey || X[91] !== eo || X[92] !== ep || X[93] !== eE || X[94] !== eI
              ? ((J =
                  eI && !ey && (null == ep || ep.entry?.node.saved_entity != null)
                    ? (0, i.jsx)(H.l, { scrollContainerRef: eE, onMount: eo })
                    : null),
                (X[90] = ey),
                (X[91] = eo),
                (X[92] = ep),
                (X[93] = eE),
                (X[94] = eI),
                (X[95] = J))
              : (J = X[95]),
            X[96] !== Y || X[97] !== G || X[98] !== W || X[99] !== J || X[100] !== S
              ? (($ = (0, i.jsxs)("div", { className: "h-full min-h-0 contain-layout", children: [S, Y, G, O, W, J] })),
                (X[96] = Y),
                (X[97] = G),
                (X[98] = W),
                (X[99] = J),
                (X[100] = S),
                (X[101] = $))
              : ($ = X[101]),
            $
          )
        }
        function D(e) {
          let t,
            a,
            r,
            c,
            d,
            u,
            h,
            g = (0, s.c)(24),
            { children: f, scrollContainerRef: m } = e,
            y = (0, n.gh)(L.Qy),
            b = (0, n.Ul)(p.xv),
            v = (0, n._U)(b ? p.BV : null, null),
            x = (0, n.Ul)(F.oe).size > 0,
            C = (0, n.Ul)(p.IW)
          ;(g[0] !== C || g[1] !== m
            ? ((t = () => {
                let e = m.current
                null != C && null != e && (e.scrollTop = 0)
              }),
              (a = [C, m]),
              (g[0] = C),
              (g[1] = m),
              (g[2] = t),
              (g[3] = a))
            : ((t = g[2]), (a = g[3])),
            (0, o.useEffect)(t, a))
          let _ = b && "-mx-(--library-browse-gutter) -my-4 rounded-xl px-(--library-browse-gutter) pt-4",
            I = b && !x && "pb-4",
            A = x && "pb-24",
            T = v && "outline-2 -outline-offset-2 outline-ring"
          return (
            g[4] !== _ || g[5] !== I || g[6] !== A || g[7] !== T
              ? ((r = (0, l.A)("flex min-h-0 flex-1 flex-col", _, I, A, T)),
                (g[4] = _),
                (g[5] = I),
                (g[6] = A),
                (g[7] = T),
                (g[8] = r))
              : (r = g[8]),
            g[9] !== b || g[10] !== y
              ? ((c = b ? (e) => p.tY.root(y, e) : void 0), (g[9] = b), (g[10] = y), (g[11] = c))
              : (c = g[11]),
            g[12] !== b || g[13] !== y
              ? ((d = b ? (e) => p.tY.leave(y, e, null) : void 0), (g[12] = b), (g[13] = y), (g[14] = d))
              : (d = g[14]),
            g[15] !== b || g[16] !== y
              ? ((u = b ? (e) => p.tY.root(y, e) : void 0), (g[15] = b), (g[16] = y), (g[17] = u))
              : (u = g[17]),
            g[18] !== f || g[19] !== u || g[20] !== r || g[21] !== c || g[22] !== d
              ? ((h = (0, i.jsx)("div", {
                  className: r,
                  onDragOverCapture: c,
                  onDragLeave: d,
                  onDropCapture: u,
                  children: f,
                })),
                (g[18] = f),
                (g[19] = u),
                (g[20] = r),
                (g[21] = c),
                (g[22] = d),
                (g[23] = h))
              : (h = g[23]),
            h
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
                  ? ((e = (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(d.G.MainContentLayout, { layout: "custom-titlebar" }),
                        (0, i.jsx)(T.$, { children: G }),
                      ],
                    })),
                    (t[0] = e))
                  : (e = t[0]),
                e
              )
            },
            b: U,
          },
        ),
          r())
      } catch (e) {
        r(e)
      }
    })
  },
  kQiD(e, t, a) {
    var r = a("ABep"),
      i = a("QosV"),
      s = a("O8pf"),
      l = a("zTeN"),
      n = a("zd8w"),
      o = a("Wf1j"),
      c = a("oyxz"),
      d = a("Hh7n"),
      u = a("iHfE"),
      h = a("t5e6"),
      g = a("Sm6l"),
      p = a("HOLv"),
      f = a("Fj96"),
      m = a("OWtl"),
      y = a("WFY2")
    function b(e) {
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
            v,
            x,
            C,
            _,
            L,
            I,
            A,
            T = (0, i.c)(25),
            E = (0, l.gh)(m.u),
            w = (0, n.useId)(),
            j = (0, o.A)(),
            { data: R } = (0, l.Ul)(u.$4)
          T[0] !== E
            ? ((e = (e) => {
                ;(null == e ? (0, d.h9)(E) : (0, d.Su)(E, e)).catch(b)
              }),
              (T[0] = E),
              (T[1] = e))
            : (e = T[1])
          let S = e
          return (
            T[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, r.jsx)(c.A, { ...f.T.libraryHeading })), (T[2] = t))
              : (t = T[2]),
            T[3] !== w
              ? ((a = (0, r.jsx)("h2", { id: w, className: "text-sm font-semibold text-primary", children: t })),
                (T[3] = w),
                (T[4] = a))
              : (a = T[4]),
            T[5] !== j ? ((y = j.formatMessage(f.T.addReference)), (T[5] = j), (T[6] = y)) : (y = T[6]),
            T[7] !== S ? ((v = () => S()), (T[7] = S), (T[8] = v)) : (v = T[8]),
            T[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = (0, r.jsx)(p.I, { asset: s.f })), (C = (0, r.jsx)(c.A, { ...f.T.add })), (T[9] = x), (T[10] = C))
              : ((x = T[9]), (C = T[10])),
            T[11] !== y || T[12] !== v
              ? ((_ = (0, r.jsx)("li", {
                  className: "shrink-0",
                  children: (0, r.jsxs)(g.$, {
                    "aria-label": y,
                    color: "outlineGhost",
                    radius: "full",
                    size: "dialogAction",
                    onClick: v,
                    children: [x, C],
                  }),
                })),
                (T[11] = y),
                (T[12] = v),
                (T[13] = _))
              : (_ = T[13]),
            T[14] !== j || T[15] !== S || T[16] !== R
              ? ((L = R?.map((e) => {
                  let t = "self" === e.entity_type ? j.formatMessage(f.T.entitySelf) : e.entity_name
                  return (0, r.jsx)(
                    "li",
                    {
                      className: "shrink-0",
                      children: (0, r.jsxs)(g.$, {
                        className: "ps-1.25",
                        "aria-label": j.formatMessage(f.T.libraryManage, { name: t }),
                        color: "outline",
                        radius: "full",
                        size: "dialogAction",
                        onClick: () => S(e),
                        children: [
                          (0, r.jsx)(h.A, {
                            alt: "",
                            assetPointer: e.thumbnail_asset_pointer ?? e.asset_pointer,
                            fallbackUrl: e.thumbnail_url ?? e.content_url,
                            name: t,
                          }),
                          (0, r.jsx)("span", { className: "max-w-40 truncate", children: t }),
                        ],
                      }),
                    },
                    e.id,
                  )
                })),
                (T[14] = j),
                (T[15] = S),
                (T[16] = R),
                (T[17] = L))
              : (L = T[17]),
            T[18] !== _ || T[19] !== L
              ? ((I = (0, r.jsxs)("ul", {
                  className: "no-scrollbar mt-3 flex min-w-0 items-center gap-2 overflow-x-auto pb-1",
                  children: [_, L],
                })),
                (T[18] = _),
                (T[19] = L),
                (T[20] = I))
              : (I = T[20]),
            T[21] !== w || T[22] !== a || T[23] !== I
              ? ((A = (0, r.jsxs)("section", { "aria-labelledby": w, className: "py-4", children: [a, I] })),
                (T[21] = w),
                (T[22] = a),
                (T[23] = I),
                (T[24] = A))
              : (A = T[24]),
            A
          )
        },
      },
    )
  },
  aYWA(e, t, a) {
    a.d(t, { Z: () => ev, Y: () => ea })
    var r = a("ABep"),
      i = a("QosV"),
      s = a("N0l9"),
      l = a("ohVt"),
      n = a("oyMi"),
      o = a("ePLg"),
      c = a("on57"),
      d = a("zTeN"),
      u = a("zd8w"),
      h = a("Wf1j"),
      g = a("oyxz"),
      p = a("Sm6l"),
      f = a("HOLv"),
      m = a("bVeK"),
      y = a("wZQ4"),
      b = a("FrrB"),
      v = a("wEIr"),
      x = a("zkPp"),
      C = a("X3K1"),
      _ = a("KIKs"),
      L = a("e1xH"),
      I = a("ofBY"),
      A = a("hZax"),
      T = a("OMIV"),
      E = a("V080"),
      w = a("tl2n"),
      j = a("CpsU"),
      R = a.n(j),
      S = a("SPnB"),
      M = a("rvFo"),
      N = a("TCFx"),
      P = a("jU86"),
      F = a("ahQQ")
    let H = (0, d.vU)(F.oD, (e, { get: t, scope: a }) => {
        let r = t(P.c7),
          { accountId: i, userId: s } = a.value
        return {
          queryKey: ["library-api", i, s, "folder-previews", e],
          queryFn: ({ signal: t }) =>
            r.safePost("/files/library/folder-previews", {
              requestBody: { directory_ids: e },
              expectedErrorStatuses: [403, 404],
              signal: t,
            }),
          staleTime: M.D.THIRTY_SECONDS,
          retry: !1,
        }
      }),
      B = (0, d.i1)(
        F.Qy,
        (e, { get: t, scope: a }) => {
          let { accountId: r, userId: i } = a.value
          if (!i || !r || t(S.chatGptAuthenticatedUserId$) !== i || t(S.chatGptAuthenticatedAccountId$) !== r) return e
          let s = new Set(e.flatMap((e) => ("node" in e && (0, N.m_)(e) ? [e.node.id] : [])))
          if (0 === s.size) return e
          let l = []
          for (let e of t(P.i3).data?.pages ?? []) {
            let t = e.items.flatMap(({ node: e }) => (s.delete(e.id) ? [e.id] : []))
            if ((l.push(...R()(t, 100)), 0 === s.size)) break
          }
          l.push(...R()([...s], 100))
          let n = new Map(l.flatMap((e) => Object.entries(t(H, e).data ?? {})))
          return 0 === n.size
            ? e
            : e.map((e) => {
                let t = "node" in e ? n.get(e.node.id) : void 0
                return void 0 === t ? e : { ...e, folderPreviewItems: t }
              })
        },
        { key: (e) => e, autoDispose: !0 },
      )
    var k = a("yqtf"),
      Y = a("DZee"),
      G = a("RjIR"),
      O = a("T7QO"),
      U = a("uSjY"),
      D = a("LcBG"),
      V = a("PArc"),
      z = a("oGMr"),
      Z = a("FBu8"),
      Q = a("EAun"),
      q = a("lbUx"),
      K = a("NCaE")
    function W(e) {
      let t,
        a,
        s = (0, i.c)(6),
        l = (0, d.Ul)(S.chatGptAuthenticatedAccountId$),
        n = (0, d.Ul)(S.chatGptAuthenticatedUserId$)
      return (
        s[0] !== l || s[1] !== n ? ((t = JSON.stringify([n, l])), (s[0] = l), (s[1] = n), (s[2] = t)) : (t = s[2]),
        s[3] !== e || s[4] !== t ? ((a = (0, r.jsx)(J, { ...e }, t)), (s[3] = e), (s[4] = t), (s[5] = a)) : (a = s[5]),
        a
      )
    }
    function J(e) {
      let t,
        a,
        s,
        l = (0, i.c)(10),
        { entries: n, renderedItems: o, renderItem: c, structuredGridEnabled: u } = e,
        h = void 0 !== u && u,
        g = (0, d.Ul)(K.CO)
      if (l[0] !== n || l[1] !== c || l[2] !== o || l[3] !== g || l[4] !== h) {
        let e = new Map()
        for (let t of n) {
          if (!("node" in t) || "owned" !== t.node.access_kind || !t.node.origination_thread_id) continue
          let a = t.node,
            r = a.image_iteration_group_id
          if (!r) continue
          let i = JSON.stringify([a.origination_thread_id, r]),
            s = e.get(i) ?? []
          ;(s.push(t), e.set(i, s))
        }
        let r = new Map()
        if (!g)
          for (let t of e.values()) {
            if (t.length < 2) continue
            let e = { items: t.toSorted($) }
            for (let a of t) r.set((0, N.e4)(a), e)
          }
        let i = new Set()
        ;((t = h ? V.n : D.bg),
          (a = o.flatMap((e) => {
            let t = r.get(e.id)
            if (!t) return [e]
            if (i.has(t)) return []
            i.add(t)
            let a = t.items[0]
            return [{ id: (0, N.e4)(a), content: c(a, t) }]
          })),
          (l[0] = n),
          (l[1] = c),
          (l[2] = o),
          (l[3] = g),
          (l[4] = h),
          (l[5] = t),
          (l[6] = a))
      } else ((t = l[5]), (a = l[6]))
      return (
        l[7] !== t || l[8] !== a ? ((s = (0, r.jsx)(t, { items: a })), (l[7] = t), (l[8] = a), (l[9] = s)) : (s = l[9]),
        s
      )
    }
    function $(e, t) {
      return (Date.parse(t.node.record_creation_time ?? "") || 0) - (Date.parse(e.node.record_creation_time ?? "") || 0)
    }
    var X = a("sz7l"),
      ee = a("vmOG"),
      et = a("F1Es")
    function ea(e) {
      let t,
        a,
        s,
        l,
        n,
        o,
        c,
        u,
        f,
        m,
        v,
        _,
        L,
        I,
        A,
        T,
        E,
        j,
        R,
        S,
        M,
        F = (0, i.c)(148),
        {
          rowLayout: H,
          onOpenItem: Y,
          structuredGridEnabled: O,
          renderContentItem: D,
          items: V,
          supplementalItems: K,
          contentPending: W,
          populatedContentMarker: J,
          renderResultPaint: $,
          notice: X,
          additionalPagination: ee,
          pagination: ea,
          renderSource: en,
          emptyState: eo,
          reserveDisclosureSpace: ec,
          groupByActivityDate: ed,
        } = e,
        eu = void 0 === H ? "columns" : H
      F[0] !== K ? ((t = void 0 === K ? [] : K), (F[0] = K), (F[1] = t)) : (t = F[1])
      let eh = t,
        eg = void 0 !== W && W,
        ep = void 0 !== ec && ec,
        ef = void 0 !== ed && ed,
        em = (0, d.gh)(P.Qy),
        ey = (0, h.A)(),
        eb = (0, d.Ul)(P.YH),
        ex = (0, d.Ul)(null == V ? P.PP : void 0),
        eC = (0, d.Ul)(P.nt),
        e_ = (0, d.Ul)(k.U),
        eL = (0, d.Ul)(P.u$),
        eI = V ?? ex,
        eA = eh
      if (eL.length > 0) {
        let e, t
        if (
          (F[2] !== eI || F[3] !== eL
            ? ((e = eI?.filter((e) => !eL.includes((0, N.e4)(e)))), (F[2] = eI), (F[3] = eL), (F[4] = e))
            : (e = F[4]),
          (eI = e),
          F[5] !== eL || F[6] !== eA)
        ) {
          let e
          ;(F[8] !== eL ? ((e = (e) => !eL.includes(e.id)), (F[8] = eL), (F[9] = e)) : (e = F[9]),
            (t = eA.filter(e)),
            (F[5] = eL),
            (F[6] = eA),
            (F[7] = t))
        } else t = F[7]
        eA = t
      }
      let eT = eA.length > 0,
        eE = (0, d.Ul)(G._),
        ew = (0, d.Ul)(P.JZ),
        ej = "favorites" === em.value.tab && null == em.value.directoryId && !em.value.deleted,
        {
          isPending: eR,
          isFetchedAfterMount: eS,
          isFetching: eM,
          error: eN,
          refetch: eP,
          hasNextPage: eF,
          isFetchingNextPage: eH,
          isFetchNextPageError: eB,
          fetchNextPage: ek,
          data: eY,
        } = (0, d.Ul)(P.i3),
        { deferFolderThumbnails: eG } = (0, d.Ul)(P.sp)
      ;(F[10] !== eI ? ((a = eI ?? []), (F[10] = eI), (F[11] = a)) : (a = F[11]),
        (eI = (0, d._U)("grid" === eb && eG && null != eI ? B : null, a) ?? eI))
      let eO = ea?.hasNextPage ?? eF,
        eU = ea?.fetchNextPage ?? ek,
        eD = ea?.isFetching ?? eM,
        eV = (0, d.Ul)(P.IM),
        ez =
          "error" === (0, d.Ul)(w.dk) &&
          null == em.value.directoryId &&
          null == em.value.pageCollection &&
          "all" === em.value.tab
      F[12] !== eN || F[13] !== em.value.directoryId
        ? ((s = null == em.value.directoryId ? null : (0, z.m)(eN, (0, N.oh)(em.value.directoryId))),
          (F[12] = eN),
          (F[13] = em.value.directoryId),
          (F[14] = s))
        : (s = F[14])
      let eZ = s
      if (ej && !eE) {
        let e
        return (
          F[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(b.A, {
                layout: "browse",
                title: (0, r.jsx)(g.A, {
                  id: "library.favorites.unavailable",
                  defaultMessage: "Favorites are not available for this account",
                  description:
                    "Message when the Favorites link is opened in an account where the Library experience is not enabled",
                }),
              })),
              (F[15] = e))
            : (e = F[15]),
          e
        )
      }
      if ("unavailable" === eV) {
        let e, t, a
        return (
          F[16] !== $ ? ((e = $?.("error")), (F[16] = $), (F[17] = e)) : (e = F[17]),
          F[18] !== em
            ? ((t = () => {
                ;(0, P.PV)(em)
              }),
              (F[18] = em),
              (F[19] = t))
            : (t = F[19]),
          F[20] !== ej || F[21] !== t || F[22] !== e
            ? ((a = (0, r.jsx)(Q._, { paint: e, favorites: ej, folderError: null, onRetry: t })),
              (F[20] = ej),
              (F[21] = t),
              (F[22] = e),
              (F[23] = a))
            : (a = F[23]),
          a
        )
      }
      F[24] !== eY || F[25] !== eS || F[26] !== eM || F[27] !== eH
        ? ((l = eM && (!eS || eH || null == eY || eY.pages.some(es))),
          (F[24] = eY),
          (F[25] = eS),
          (F[26] = eM),
          (F[27] = eH),
          (F[28] = l))
        : (l = F[28])
      let eQ = l
      F[29] !== eV ||
      F[30] !== eg ||
      F[31] !== eY ||
      F[32] !== eo ||
      F[33] !== eI?.length ||
      F[34] !== eT ||
      F[35] !== eS ||
      F[36] !== eM ||
      F[37] !== eR ||
      F[38] !== e_?.isPending ||
      F[39] !== ew
        ? ((n =
            e_?.isPending ||
            "loading" === eV ||
            (ew && eM && !eS) ||
            (!eI?.length && !eT && (eg || eR || (eM && (void 0 !== eo || !!eY?.pages.every(ei)))))),
          (F[29] = eV),
          (F[30] = eg),
          (F[31] = eY),
          (F[32] = eo),
          (F[33] = eI?.length),
          (F[34] = eT),
          (F[35] = eS),
          (F[36] = eM),
          (F[37] = eR),
          (F[38] = e_?.isPending),
          (F[39] = ew),
          (F[40] = n))
        : (n = F[40])
      let eq = n
      if (!eq && ((null == eY && !eI?.length && !eT) || null != eZ)) {
        let e, t, a, i
        return (
          F[41] !== $ ? ((e = $?.("error")), (F[41] = $), (F[42] = e)) : (e = F[42]),
          F[43] !== ez || F[44] !== eP || F[45] !== em
            ? ((t = () => {
                ez
                  ? (0, P.PV)(em)
                  : (0, et.S)(em.queryClient, em.query.getOptions(P.i3).queryKey, () => {
                      eP()
                    })
              }),
              (F[43] = ez),
              (F[44] = eP),
              (F[45] = em),
              (F[46] = t))
            : (t = F[46]),
          F[47] !== ej || F[48] !== eZ || F[49] !== e || F[50] !== t
            ? ((a = (0, r.jsx)(Q._, { paint: e, favorites: ej, onRetry: t, folderError: eZ })),
              (F[47] = ej),
              (F[48] = eZ),
              (F[49] = e),
              (F[50] = t),
              (F[51] = a))
            : (a = F[51]),
          F[52] !== ee || F[53] !== a
            ? ((i = (0, r.jsxs)(r.Fragment, { children: [a, ee] })), (F[52] = ee), (F[53] = a), (F[54] = i))
            : (i = F[54]),
          i
        )
      }
      let eK = !!em.value.search && !eM && !eO && (0, N.I9)(eY?.pages),
        eW = null
      if (eK && eY?.pages.at(-1)?.partialResults !== !0) {
        let e
        ;(F[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(g.A, {
              id: "libraryNext.results.searchIncomplete",
              defaultMessage: "Some search results could not be loaded",
              description:
                "Status when a search source could not return all of its results; the adjacent retry button retries the search",
            })),
            (F[55] = e))
          : (e = F[55]),
          (eW = e))
      } else if (null != eN) {
        let e
        ;(F[56] !== ej
          ? ((e = ej
              ? (0, r.jsx)(g.A, {
                  id: "library.favorites.loadFailed",
                  defaultMessage: "Failed to load favorites",
                  description: "Error when Library Favorites could not load; the next button retries the request",
                })
              : (0, r.jsx)(g.A, {
                  id: "libraryNext.results.pageFailed",
                  defaultMessage: "Failed to load files.",
                  description: "Library pagination failed while existing items remain visible",
                })),
            (F[56] = ej),
            (F[57] = e))
          : (e = F[57]),
          (eW = e))
      }
      let eJ =
          "available" === eV &&
          "library:collection:shared-with-me" === em.value.directoryId &&
          !!em.value.search &&
          !eI?.length &&
          !eT &&
          eO &&
          null == eN,
        e$ = eY?.pages.length
      ;(F[58] !== eU
        ? ((o = () => {
            eU({ cancelRefetch: !1 })
          }),
          (F[58] = eU),
          (F[59] = o))
        : (o = F[59]),
        F[60] !== eO || F[61] !== eD || F[62] !== e$ || F[63] !== o
          ? ((c = (0, r.jsx)(
              y.D,
              { loadingPlaceholder: null, hasNextPage: eO, isFetchingNextPage: eD, onLoadNextPage: o },
              e$,
            )),
            (F[60] = eO),
            (F[61] = eD),
            (F[62] = e$),
            (F[63] = o),
            (F[64] = c))
          : (c = F[64]))
      let eX = c
      F[65] !== eI?.length || F[66] !== eT || F[67] !== $
        ? ((u = eI?.length || eT ? null : $?.("error")), (F[65] = eI?.length), (F[66] = eT), (F[67] = $), (F[68] = u))
        : (u = F[68])
      let e1 = u,
        e0 = eq || eJ,
        e2 = null != eI || eT,
        e3 = null != em.value.pageCollection || ("folders" === em.value.tab && !em.value.search)
      F[69] !== ey
        ? ((f = ey.formatMessage({
            id: "library.list.label",
            defaultMessage: "Library files",
            description: "Accessible label for the Library file list with sortable columns",
          })),
          (F[69] = ey),
          (F[70] = f))
        : (f = F[70])
      let e4 = null != en
      ;(F[71] !== ep || F[72] !== eu || F[73] !== e4
        ? ((m = (0, r.jsx)(ev, { layout: eu, isLoading: !0, showSource: e4, reserveDisclosureSpace: ep })),
          (F[71] = ep),
          (F[72] = eu),
          (F[73] = e4),
          (F[74] = m))
        : (m = F[74]),
        F[75] !== ef
          ? ((v = ef
              ? (0, r.jsx)("div", {
                  "aria-hidden": !0,
                  className: "mx-3 shrink-0 border-b border-subtle pt-5 pb-2",
                  children: (0, r.jsx)("div", {
                    className: "flex h-5 items-center",
                    children: (0, r.jsx)(C.X, { className: "w-16", size: "sm", variant: "chatgpt-project" }),
                  }),
                })
              : null),
            (F[75] = ef),
            (F[76] = v))
          : (v = F[76]))
      let e5 = null != en
      ;(F[77] !== ep || F[78] !== eu || F[79] !== e5
        ? ((_ = (0, r.jsx)(Z.V, { layout: eu, showSource: e5, reserveDisclosureSpace: ep })),
          (F[77] = ep),
          (F[78] = eu),
          (F[79] = e5),
          (F[80] = _))
        : (_ = F[80]),
        F[81] !== f || F[82] !== m || F[83] !== v || F[84] !== _
          ? ((L = (0, r.jsxs)(x.eb, {
              className: "-mx-[var(--padding-row-cell-x,var(--padding-row-x))] flex min-h-0 flex-1 flex-col",
              role: "grid",
              tabIndex: -1,
              "aria-label": f,
              "aria-multiselectable": !0,
              onKeyDown: U.T,
              children: [m, v, _],
            })),
            (F[81] = f),
            (F[82] = m),
            (F[83] = v),
            (F[84] = _),
            (F[85] = L))
          : (L = F[85]),
        F[86] !== eW || F[87] !== e1
          ? ((I = null != eW && null != e1 ? (0, r.jsxs)(r.Fragment, { children: [e1, eW] }) : eW),
            (F[86] = eW),
            (F[87] = e1),
            (F[88] = I))
          : (I = F[88]),
        F[89] !== eN || F[90] !== eU || F[91] !== eB || F[92] !== eP || F[93] !== em
          ? ((A = () => {
              ;(0, et.S)(em.queryClient, em.query.getOptions(P.i3).queryKey, () => {
                ;(0, N.hk)(eN, em.get(P.sp))
                  ? em.queryClient.resetQueries({ queryKey: em.query.getOptions(P.i3).queryKey, exact: !0 })
                  : eB && !(0, N.sW)(eN)
                    ? eU({ cancelRefetch: !1 })
                    : eP()
              })
            }),
            (F[89] = eN),
            (F[90] = eU),
            (F[91] = eB),
            (F[92] = eP),
            (F[93] = em),
            (F[94] = A))
          : (A = F[94]),
        F[95] !== e1 || F[96] !== ez || F[97] !== em
          ? ((T = ez
              ? (0, r.jsx)(Q._, {
                  paint: e1,
                  favorites: !1,
                  folderError: null,
                  onRetry: () => {
                    ;(0, P.PV)(em)
                  },
                })
              : null),
            (F[95] = e1),
            (F[96] = ez),
            (F[97] = em),
            (F[98] = T))
          : (T = F[98]),
        F[99] !== X || F[100] !== T
          ? ((E = (0, r.jsxs)(r.Fragment, { children: [T, X] })), (F[99] = X), (F[100] = T), (F[101] = E))
          : (E = F[101]),
        F[102] !== eY ||
        F[103] !== eU ||
        F[104] !== eO ||
        F[105] !== eH ||
        F[106] !== eQ ||
        F[107] !== eX ||
        F[108] !== en ||
        F[109] !== ep ||
        F[110] !== eu ||
        F[111] !== em.value.categories ||
        F[112] !== em.value.includePages ||
        F[113] !== em.value.search ||
        F[114] !== em.value.tab ||
        F[115] !== eb
          ? ((j =
              em.value.includePages &&
              "suggested" === em.value.tab &&
              !em.value.search &&
              0 === em.value.categories.length &&
              eO &&
              (eY?.pages.at(-1)?.results ?? eY?.pages.at(-1)?.items)?.length === 0
                ? (0, r.jsx)(p.$, {
                    color: "ghost",
                    disabled: eH,
                    loading: eH,
                    onClick: () => {
                      eU({ cancelRefetch: !1 })
                    },
                    children: (0, r.jsx)(g.A, {
                      id: "libraryNext.results.loadMore",
                      defaultMessage: "Load more",
                      description: "Button to fetch more Suggested items after a batch containing only excluded files",
                    }),
                  })
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      eX,
                      "list" === eb && (eO || eQ)
                        ? (0, r.jsx)(x.eb, {
                            className: "-mx-[var(--padding-row-cell-x,var(--padding-row-x))]",
                            "aria-hidden": !eQ,
                            children: (0, r.jsx)(Z.V, {
                              layout: eu,
                              rowCount: 3,
                              showSource: null != en,
                              reserveDisclosureSpace: ep,
                            }),
                          })
                        : null,
                    ],
                  })),
            (F[102] = eY),
            (F[103] = eU),
            (F[104] = eO),
            (F[105] = eH),
            (F[106] = eQ),
            (F[107] = eX),
            (F[108] = en),
            (F[109] = ep),
            (F[110] = eu),
            (F[111] = em.value.categories),
            (F[112] = em.value.includePages),
            (F[113] = em.value.search),
            (F[114] = em.value.tab),
            (F[115] = eb),
            (F[116] = j))
          : (j = F[116]))
      let e9 = (!!eI?.length || eT) && J,
        e6 = "grid" === eb && eQ && null == eW,
        e8 =
          ez ||
          eC ||
          (em.value.search && (null != eN || eR || eM || eO || eY?.pages.some(er) || eK)) ||
          (void 0 !== eo && (eN || X))
            ? null
            : eo
      ;(F[117] !== eI ||
      F[118] !== ef ||
      F[119] !== eO ||
      F[120] !== Y ||
      F[121] !== D ||
      F[122] !== $ ||
      F[123] !== en ||
      F[124] !== ep ||
      F[125] !== eu ||
      F[126] !== O ||
      F[127] !== eA ||
      F[128] !== e6 ||
      F[129] !== e8
        ? ((R = (0, r.jsx)(el, {
            renderResultPaint: $,
            structuredGridEnabled: O,
            hasNextPage: eO,
            rowLayout: eu,
            entries: eI,
            supplementalItems: eA,
            groupByActivityDate: ef,
            onOpenItem: Y,
            renderContentItem: D,
            renderSource: en,
            gridLoading: e6,
            emptyState: e8,
            reserveDisclosureSpace: ep,
          })),
          (F[117] = eI),
          (F[118] = ef),
          (F[119] = eO),
          (F[120] = Y),
          (F[121] = D),
          (F[122] = $),
          (F[123] = en),
          (F[124] = ep),
          (F[125] = eu),
          (F[126] = O),
          (F[127] = eA),
          (F[128] = e6),
          (F[129] = e8),
          (F[130] = R))
        : (R = F[130]),
        F[131] !== ee ||
        F[132] !== O ||
        F[133] !== e0 ||
        F[134] !== e2 ||
        F[135] !== e3 ||
        F[136] !== L ||
        F[137] !== I ||
        F[138] !== A ||
        F[139] !== E ||
        F[140] !== j ||
        F[141] !== e9 ||
        F[142] !== R ||
        F[143] !== eb
          ? ((S = (0, r.jsxs)(q.b, {
              structuredGridEnabled: O,
              loading: e0,
              hasData: e2,
              viewMode: eb,
              squareLoading: e3,
              listLoading: L,
              error: I,
              onRetry: A,
              notice: E,
              additionalPagination: ee,
              pagination: j,
              children: [e9, R],
            })),
            (F[131] = ee),
            (F[132] = O),
            (F[133] = e0),
            (F[134] = e2),
            (F[135] = e3),
            (F[136] = L),
            (F[137] = I),
            (F[138] = A),
            (F[139] = E),
            (F[140] = j),
            (F[141] = e9),
            (F[142] = R),
            (F[143] = eb),
            (F[144] = S))
          : (S = F[144]))
      let e7 = S,
        te = eJ ? eX : null
      return (
        F[145] !== e7 || F[146] !== te
          ? ((M = (0, r.jsxs)(r.Fragment, { children: [te, e7] })), (F[145] = e7), (F[146] = te), (F[147] = M))
          : (M = F[147]),
        M
      )
    }
    function er(e) {
      return e.searchPending
    }
    function ei(e) {
      return 0 === e.items.length && !e.results?.length
    }
    function es(e) {
      return e.searchPending
    }
    function el(e) {
      let t,
        a,
        s,
        l,
        n,
        o,
        u,
        h,
        p,
        f = (0, i.c)(59),
        {
          renderResultPaint: m,
          hasNextPage: y,
          rowLayout: b,
          entries: v,
          structuredGridEnabled: x,
          supplementalItems: C,
          groupByActivityDate: _,
          onOpenItem: L,
          renderContentItem: I,
          renderSource: A,
          emptyState: T,
          reserveDisclosureSpace: E,
          gridLoading: w,
        } = e,
        j = (0, d.gh)(P.Qy),
        R = (0, d.Ul)(P.YH)
      if (null == v && 0 === C.length) return null
      f[0] !== v ? ((t = v ?? []), (f[0] = v), (f[1] = t)) : (t = f[1])
      let S = t
      if (0 === S.length && 0 === C.length && !w) {
        let e, t
        if (y) return null
        if (void 0 !== T) {
          let e
          return (f[2] !== T ? ((e = (0, r.jsx)(r.Fragment, { children: T })), (f[2] = T), (f[3] = e)) : (e = f[3]), e)
        }
        if (
          null != j.value.directoryId &&
          !j.value.search &&
          0 === j.value.categories.length &&
          0 === j.value.sources.length &&
          !j.value.directoryId.startsWith("external-") &&
          !j.value.directoryId.startsWith("library:")
        ) {
          let e
          return (
            f[4] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, r.jsx)(eh, {})), (f[4] = e)) : (e = f[4]),
            e
          )
        }
        return (
          f[5] !== m ? ((e = m?.("empty")), (f[5] = m), (f[6] = e)) : (e = f[6]),
          f[7] !== e ? ((t = (0, r.jsx)(eu, { titleMarker: e })), (f[7] = e), (f[8] = t)) : (t = f[8]),
          t
        )
      }
      if (!(
        "grid" === R &&
        !j.value.search &&
        !j.value.deleted &&
        ("all" === j.value.tab || null != j.value.directoryId) &&
        S.some(ed) &&
        S.some(ec)
      )) {
        let e,
          t,
          a,
          i,
          s = "grid" === R && "pt-4"
        return (
          f[9] !== s ? ((e = (0, c.A)(s)), (f[9] = s), (f[10] = e)) : (e = f[10]),
          f[11] !== m || f[12] !== S.length || f[13] !== C
            ? ((t = (S.length > 0 || C.length > 0) && m?.("populated")),
              (f[11] = m),
              (f[12] = S.length),
              (f[13] = C),
              (f[14] = t))
            : (t = f[14]),
          f[15] !== w ||
          f[16] !== _ ||
          f[17] !== L ||
          f[18] !== I ||
          f[19] !== A ||
          f[20] !== E ||
          f[21] !== S ||
          f[22] !== b ||
          f[23] !== x ||
          f[24] !== C
            ? ((a = (0, r.jsx)(eg, {
                rowLayout: b,
                structuredGridEnabled: x,
                entries: S,
                supplementalItems: C,
                groupByActivityDate: _,
                onOpenItem: L,
                renderContentItem: I,
                renderSource: A,
                reserveDisclosureSpace: E,
                gridLoading: w,
              })),
              (f[15] = w),
              (f[16] = _),
              (f[17] = L),
              (f[18] = I),
              (f[19] = A),
              (f[20] = E),
              (f[21] = S),
              (f[22] = b),
              (f[23] = x),
              (f[24] = C),
              (f[25] = a))
            : (a = f[25]),
          f[26] !== e || f[27] !== t || f[28] !== a
            ? ((i = (0, r.jsxs)("div", { className: e, children: [t, a] })),
              (f[26] = e),
              (f[27] = t),
              (f[28] = a),
              (f[29] = i))
            : (i = f[29]),
          i
        )
      }
      return (
        f[30] !== m ? ((a = m?.("populated")), (f[30] = m), (f[31] = a)) : (a = f[31]),
        f[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, r.jsx)("h2", {
              className: "text-lg font-medium",
              children: (0, r.jsx)(g.A, {
                id: "libraryNext.results.folders",
                defaultMessage: "Folders",
                description: "Heading for folders in the Library All tab",
              }),
            })),
            (f[32] = s))
          : (s = f[32]),
        f[33] !== S ? ((l = S.filter(eo)), (f[33] = S), (f[34] = l)) : (l = f[34]),
        f[35] !== L || f[36] !== A || f[37] !== E || f[38] !== b || f[39] !== x || f[40] !== l
          ? ((n = (0, r.jsxs)("section", {
              className: "flex flex-col gap-4",
              children: [
                s,
                (0, r.jsx)(eg, {
                  rowLayout: b,
                  structuredGridEnabled: x,
                  entries: l,
                  kind: "directory",
                  onOpenItem: L,
                  renderSource: A,
                  reserveDisclosureSpace: E,
                }),
              ],
            })),
            (f[35] = L),
            (f[36] = A),
            (f[37] = E),
            (f[38] = b),
            (f[39] = x),
            (f[40] = l),
            (f[41] = n))
          : (n = f[41]),
        f[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, r.jsx)("h2", {
              className: "text-lg font-medium",
              children: (0, r.jsx)(g.A, {
                id: "libraryNext.results.items",
                defaultMessage: "Items",
                description: "Heading for files in the Library All tab",
              }),
            })),
            (f[42] = o))
          : (o = f[42]),
        f[43] !== S ? ((u = S.filter(en)), (f[43] = S), (f[44] = u)) : (u = f[44]),
        f[45] !== w ||
        f[46] !== L ||
        f[47] !== I ||
        f[48] !== A ||
        f[49] !== E ||
        f[50] !== b ||
        f[51] !== x ||
        f[52] !== C ||
        f[53] !== u
          ? ((h = (0, r.jsxs)("section", {
              className: "flex flex-col gap-4",
              children: [
                o,
                (0, r.jsx)(eg, {
                  rowLayout: b,
                  structuredGridEnabled: x,
                  entries: u,
                  supplementalItems: C,
                  kind: "file",
                  gridLoading: w,
                  renderSource: A,
                  renderContentItem: I,
                  onOpenItem: L,
                  reserveDisclosureSpace: E,
                }),
              ],
            })),
            (f[45] = w),
            (f[46] = L),
            (f[47] = I),
            (f[48] = A),
            (f[49] = E),
            (f[50] = b),
            (f[51] = x),
            (f[52] = C),
            (f[53] = u),
            (f[54] = h))
          : (h = f[54]),
        f[55] !== a || f[56] !== n || f[57] !== h
          ? ((p = (0, r.jsxs)("div", { className: "flex flex-col gap-8 pt-4", children: [a, n, h] })),
            (f[55] = a),
            (f[56] = n),
            (f[57] = h),
            (f[58] = p))
          : (p = f[58]),
        p
      )
    }
    function en(e) {
      return !("node" in e) || "directory" !== e.node.kind
    }
    function eo(e) {
      return "node" in e && "directory" === e.node.kind
    }
    function ec(e) {
      return !("node" in e) || "directory" !== e.node.kind
    }
    function ed(e) {
      return "node" in e && "directory" === e.node.kind
    }
    function eu(e) {
      let t,
        a,
        s,
        l,
        h,
        p,
        y,
        x,
        C,
        _ = (0, i.c)(54),
        { titleMarker: A } = e,
        T = (0, d.gh)(P.Qy),
        w = (0, d.Ul)(L.Op),
        j = (0, d.Ul)(k.U)
      if (
        (_[0] !== T
          ? ((t = () => (0, X.mz)(T)), (a = [T]), (_[0] = T), (_[1] = t), (_[2] = a))
          : ((t = _[1]), (a = _[2])),
        (0, u.useEffect)(t, a),
        T.value.basePath.startsWith("/space") && T.value.search.trim())
      ) {
        let e
        return (
          _[3] !== T.value.search || _[4] !== A
            ? ((e = (0, r.jsx)(v.H, { titleMarker: A, query: T.value.search })),
              (_[3] = T.value.search),
              (_[4] = A),
              (_[5] = e))
            : (e = _[5]),
          e
        )
      }
      if (T.value.includePages && "suggested" === T.value.tab) {
        let e
        return (
          _[6] !== T.value.categories || _[7] !== T.value.search || _[8] !== T.value.sources
            ? ((e = (0, r.jsx)(b.A, {
                layout: "browse",
                title:
                  T.value.search || T.value.categories.length || T.value.sources.length
                    ? (0, r.jsx)(g.A, {
                        id: "space.home.suggestedNoResults",
                        defaultMessage: "No results",
                        description: "Empty search results in the Suggested tab on Space home",
                      })
                    : (0, r.jsx)(g.A, {
                        id: "space.home.noSuggestions",
                        defaultMessage: "Nothing to suggest yet",
                        description: "Empty state in the Suggested tab on Space home",
                      }),
              })),
              (_[6] = T.value.categories),
              (_[7] = T.value.search),
              (_[8] = T.value.sources),
              (_[9] = e))
            : (e = _[9]),
          e
        )
      }
      if ("favorites" === T.value.tab && null == T.value.directoryId && !T.value.deleted) {
        let e
        return (
          _[10] !== T.value.categories || _[11] !== T.value.search || _[12] !== T.value.sources
            ? ((e = (0, r.jsx)(b.A, {
                layout: "browse",
                title:
                  T.value.search || T.value.categories.length > 0 || T.value.sources.length > 0
                    ? (0, r.jsx)(g.A, {
                        id: "library.favorites.noResults",
                        defaultMessage: "No favorites found",
                        description: "Empty Library Favorites search or filter result",
                      })
                    : (0, r.jsx)(g.A, {
                        id: "library.favorites.empty",
                        defaultMessage: "No favorites yet",
                        description: "Empty Library Favorites tab before the user saves any items",
                      }),
              })),
              (_[10] = T.value.categories),
              (_[11] = T.value.search),
              (_[12] = T.value.sources),
              (_[13] = e))
            : (e = _[13]),
          e
        )
      }
      if (
        T.value.search ||
        T.value.categories.length > 0 ||
        null != j ||
        (T.value.sources.length > 0 && !T.value.imageSourceTabs)
      ) {
        let e, t
        return (
          _[14] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, r.jsx)(m.zcw, {})), (_[14] = e)) : (e = _[14]),
          _[15] !== T.value.includePages
            ? ((t = (0, r.jsx)(b.A, {
                layout: "browse",
                illustration: e,
                title: T.value.includePages
                  ? (0, r.jsx)(g.A, {
                      id: "space.home.noItemsFound",
                      defaultMessage: "No items found",
                      description: "Empty Space home result when search or filters match no files or Pages",
                    })
                  : (0, r.jsx)(g.A, {
                      id: "libraryNext.results.noFilesFound",
                      defaultMessage: "No files found",
                      description:
                        "Library empty result message when search or filters match no files, or when Trash is empty.",
                    }),
              })),
              (_[15] = T.value.includePages),
              (_[16] = t))
            : (t = _[16]),
          t
        )
      }
      if (T.value.deleted) {
        let e,
          t = w ? "trash" : "trash-files"
        return (_[17] !== t ? ((e = (0, r.jsx)(I.n, { view: t })), (_[17] = t), (_[18] = e)) : (e = _[18]), e)
      }
      if ("recent" === T.value.tab) {
        let e
        return (
          _[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(b.A, {
                layout: "page",
                title: (0, r.jsx)(g.A, {
                  id: "libraryNext.results.noRecentFiles",
                  defaultMessage: "No recently opened files",
                  description:
                    "Empty state for a connected storage provider when the current user has no recently opened files",
                }),
              })),
              (_[19] = e))
            : (e = _[19]),
          e
        )
      }
      if ("library:collection:shared-with-me" === T.value.directoryId) {
        let e, t, a, i, s
        return (
          _[20] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, r.jsx)(m.Seu, {})), (_[20] = e)) : (e = _[20]),
          _[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, r.jsx)(g.A, {
                id: "libraryNext.results.sharedEmptyTitle",
                defaultMessage: "Folder is empty",
                description: "Empty state title in Library's Shared with me folder.",
              })),
              (_[21] = t))
            : (t = _[21]),
          _[22] !== A ? ((a = (0, r.jsxs)("h2", { children: [A, t] })), (_[22] = A), (_[23] = a)) : (a = _[23]),
          _[24] !== T.value.includePages
            ? ((i = (0, r.jsx)("p", {
                children: T.value.includePages
                  ? (0, r.jsx)(g.A, {
                      id: "space.home.sharedEmptyDescription",
                      defaultMessage: "Files and Pages shared with you will live here",
                      description: "Supporting copy in the empty Shared with you tab on Space home.",
                    })
                  : (0, r.jsx)(g.A, {
                      id: "libraryNext.results.sharedEmptyDescription",
                      defaultMessage: "Files shared with you will live here",
                      description: "Supporting copy in the empty Shared with me Library folder.",
                    }),
              })),
              (_[24] = T.value.includePages),
              (_[25] = i))
            : (i = _[25]),
          _[26] !== a || _[27] !== i
            ? ((s = (0, r.jsx)(b.A, {
                layout: "browse",
                className: "select-none",
                illustration: e,
                title: a,
                description: i,
              })),
              (_[26] = a),
              (_[27] = i),
              (_[28] = s))
            : (s = _[28]),
          s
        )
      }
      if (null != T.value.directoryId) {
        let e
        return (
          _[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(b.A, {
                layout: "browse",
                title: (0, r.jsx)(g.A, {
                  id: "libraryNext.results.emptyFolder",
                  defaultMessage: "This folder is empty.",
                  description: "Empty Library folder with no upload action available.",
                }),
              })),
              (_[29] = e))
            : (e = _[29]),
          e
        )
      }
      _[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, r.jsx)(f.I, { asset: o.x })), (_[30] = s))
        : (s = _[30])
      let R = s,
        S = T.value.imageSourceTabs && "uploaded" === T.value.sources[0]
      if ("images" === T.value.tab) {
        let e
        ;(_[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("span", {
              className: "flex size-12 shrink-0 items-center justify-center rounded-xl bg-background-secondary-soft",
              children: (0, r.jsx)(f.I, { asset: n.v }),
            })),
            (_[31] = e))
          : (e = _[31]),
          (R = e))
      } else if ("folders" === T.value.tab) {
        let e
        ;(_[32] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, r.jsx)(m.nex, {})), (_[32] = e)) : (e = _[32]),
          (R = e))
      }
      let M = "images" === T.value.tab && "max-w-80 self-center"
      _[33] !== M ? ((l = (0, c.A)("select-none", M)), (_[33] = M), (_[34] = l)) : (l = _[34])
      let N = "images" === T.value.tab ? "page" : "browse",
        F = "images" === T.value.tab ? "default" : "compact"
      return (
        _[35] !== T.value.tab || _[36] !== S
          ? ((h = S
              ? (0, r.jsx)(g.A, {
                  id: "library.images.uploads.emptyTitle",
                  defaultMessage: "No uploads yet",
                  description: "Title of the empty Uploads tab on the Images page",
                })
              : (0, r.jsx)(g.A, {
                  id: "libraryNext.results.emptyTabTitle",
                  defaultMessage:
                    "{tab, select, images {No images yet} folders {Create your first folder} other {Create something new}}",
                  description:
                    "Title of an empty Library tab. tab distinguishes Images, Folders, and the general Suggested/All views.",
                  values: { tab: T.value.tab },
                })),
            (_[35] = T.value.tab),
            (_[36] = S),
            (_[37] = h))
          : (h = _[37]),
        _[38] !== h || _[39] !== A
          ? ((p = (0, r.jsxs)("h2", { children: [A, h] })), (_[38] = h), (_[39] = A), (_[40] = p))
          : (p = _[40]),
        _[41] !== T.value.tab || _[42] !== S
          ? ((y = (0, r.jsx)("p", {
              children: S
                ? (0, r.jsx)(g.A, {
                    id: "library.images.uploads.emptyDescription",
                    defaultMessage: "Images you upload will appear here",
                    description: "Supporting text for the empty Uploads tab on the Images page",
                  })
                : (0, r.jsx)(g.A, {
                    id: "libraryNext.results.emptyTabDescription",
                    defaultMessage:
                      "{tab, select, images {Create an image with ChatGPT.} folders {Create folders to organize items in your library} other {Things you make with ChatGPT, like images and documents, will appear here}}",
                    description:
                      "Supporting text for an empty Library tab. tab identifies Images, Folders, or the general Suggested/All views.",
                    values: { tab: T.value.tab },
                  }),
            })),
            (_[41] = T.value.tab),
            (_[42] = S),
            (_[43] = y))
          : (y = _[43]),
        _[44] !== S ? ((x = S ? (0, r.jsx)(E.JA, {}) : (0, r.jsx)(E.be, {})), (_[44] = S), (_[45] = x)) : (x = _[45]),
        _[46] !== R || _[47] !== y || _[48] !== x || _[49] !== l || _[50] !== N || _[51] !== F || _[52] !== p
          ? ((C = (0, r.jsx)(b.A, {
              className: l,
              layout: N,
              spacing: F,
              illustration: R,
              title: p,
              description: y,
              actions: x,
            })),
            (_[46] = R),
            (_[47] = y),
            (_[48] = x),
            (_[49] = l),
            (_[50] = N),
            (_[51] = F),
            (_[52] = p),
            (_[53] = C))
          : (C = _[53]),
        C
      )
    }
    function eh() {
      let e,
        t,
        a,
        s = (0, i.c)(5),
        l = (0, d.Ul)(P.YH)
      return (
        s[0] !== l
          ? ((e =
              "list" === l
                ? (0, r.jsx)("div", {
                    className: "-mx-[var(--padding-row-cell-x,var(--padding-row-x))]",
                    children: (0, r.jsx)(ev, {}),
                  })
                : null),
            (s[0] = l),
            (s[1] = e))
          : (e = s[1]),
        s[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(b.A, {
              layout: "browse",
              illustration: (0, r.jsx)(m._Ui, {}),
              actions: (0, r.jsx)(E.JA, {}),
              title: (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)(g.A, {
                  id: "libraryNext.results.noFilesYet",
                  defaultMessage: "No files yet",
                  description: "Title for an empty Library folder where uploading is available.",
                }),
              }),
              description: (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)(g.A, {
                  id: "libraryNext.results.uploadDescription",
                  defaultMessage: "Upload a file to start building your library",
                  description: "Description of the upload button in an empty Library folder.",
                }),
              }),
            })),
            (s[2] = t))
          : (t = s[2]),
        s[3] !== e
          ? ((a = (0, r.jsxs)("div", { className: "flex min-h-0 flex-1 flex-col", children: [e, t] })),
            (s[3] = e),
            (s[4] = a))
          : (a = s[4]),
        a
      )
    }
    function eg(e) {
      let t,
        a,
        s,
        l,
        n,
        o,
        p,
        f,
        m,
        y,
        b,
        v,
        C,
        L,
        I = (0, i.c)(81),
        {
          rowLayout: E,
          entries: w,
          structuredGridEnabled: j,
          supplementalItems: R,
          groupByActivityDate: S,
          kind: M,
          onOpenItem: F,
          renderContentItem: H,
          renderSource: B,
          viewMode: k,
          showHeader: G,
          selectionEnabled: O,
          reserveDisclosureSpace: z,
          gridLoading: Z,
        } = e,
        Q = void 0 === E ? "columns" : E
      I[0] !== R ? ((t = void 0 === R ? [] : R), (I[0] = R), (I[1] = t)) : (t = I[1])
      let q = t,
        K = void 0 !== S && S,
        J = void 0 === G || G,
        $ = void 0 === O || O,
        X = void 0 !== Z && Z,
        et = (0, d.gh)(P.Qy),
        ea = (0, h.A)(),
        er = (0, d.Ul)(P.YH),
        ei = (0, d._U)(T.JW, "3544043810"),
        es = k ?? er,
        el = (0, d.Ul)(P.oW),
        en = (0, d.Ul)(P.rk)
      I[2] !== F || I[3] !== H || I[4] !== B || I[5] !== z || I[6] !== Q || I[7] !== $ || I[8] !== j || I[9] !== es
        ? ((a = (e, t) =>
            "node" in e
              ? (0, r.jsx)(ee.Vz, {
                  layout: Q,
                  structuredGridEnabled: j,
                  entry: e,
                  stack: t,
                  onOpenItem: F,
                  viewMode: es,
                  source: B?.(e),
                  selectionEnabled: $,
                  reserveDisclosureSpace: z,
                })
              : (0, r.jsx)("div", { "data-library-item": !0, children: H?.(e, es, B?.(e)) })),
          (I[2] = F),
          (I[3] = H),
          (I[4] = B),
          (I[5] = z),
          (I[6] = Q),
          (I[7] = $),
          (I[8] = j),
          (I[9] = es),
          (I[10] = a))
        : (a = I[10])
      let eo = a
      I[11] !== K ? ((s = { enabled: K }), (I[11] = K), (I[12] = s)) : (s = I[12])
      let ec = (0, _.wv)(eb, s),
        ed = (0, A.Zj)(K && "1244723012")
      if (
        I[13] !== el ||
        I[14] !== en ||
        I[15] !== w ||
        I[16] !== X ||
        I[17] !== K ||
        I[18] !== ei ||
        I[19] !== ea ||
        I[20] !== M ||
        I[21] !== eo ||
        I[22] !== B ||
        I[23] !== z ||
        I[24] !== Q ||
        I[25] !== et ||
        I[26] !== $ ||
        I[27] !== J ||
        I[28] !== j ||
        I[29] !== q ||
        I[30] !== ed ||
        I[31] !== ec ||
        I[32] !== es
      ) {
        C = Symbol.for("react.early_return_sentinel")
        e: {
          var eu
          let e, t, a, i, s, d, h
          I[43] !== en || I[44] !== eo
            ? ((e = (e) => ({ id: (0, N.e4)(e), sortMetadata: (0, Y.Bl)(e, en), render: () => eo(e) })),
              (I[43] = en),
              (I[44] = eo),
              (I[45] = e))
            : (e = I[45])
          let _ = w.map(e)
          if (
            (I[46] !== es
              ? ((t = (e) => ({ id: e.id, sortMetadata: e.sortMetadata, render: (t) => e.render(es, t) })),
                (I[46] = es),
                (I[47] = t))
              : (t = I[47]),
            _.push(...q.map(t)),
            null != el && q.length > 0)
          ) {
            let e
            ;(I[48] !== el || I[49] !== en
              ? ((e = (e, t) => (0, Y.Gf)(e.sortMetadata, t.sortMetadata, el, en)),
                (I[48] = el),
                (I[49] = en),
                (I[50] = e))
              : (e = I[50]),
              _.sort(e))
          }
          let L = _.map(ey)
          if ("grid" === es) {
            if (X) {
              let e
              ;(I[51] !== M || I[52] !== et || I[53] !== j
                ? ((e = (e, t) => ({
                    id: `loading-${t}`,
                    content: (0, r.jsx)(D.c5, {
                      structuredGridEnabled: j,
                      square:
                        null != et.value.pageCollection ||
                        "directory" === M ||
                        ("folders" === et.value.tab && !et.value.search),
                      index: t,
                    }),
                  })),
                  (I[51] = M),
                  (I[52] = et),
                  (I[53] = j),
                  (I[54] = e))
                : (e = I[54]),
                L.push(...Array.from({ length: 3 }, e)))
            }
            if (j) {
              if (ei && !et.value.deleted && !et.value.search && et.value.categories.includes("images")) {
                C = (0, r.jsx)(W, { structuredGridEnabled: !0, entries: w, renderedItems: L, renderItem: eo })
                break e
              }
              C = (0, r.jsx)(V.n, { items: L })
              break e
            }
            if (!et.value.search && 0 === q.length && w.every(em)) {
              C = (0, r.jsx)("div", {
                className: "@container",
                children: (0, r.jsx)("div", {
                  className:
                    "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 @max-sm:grid-cols-1",
                  children: L.map(ef),
                }),
              })
              break e
            }
            C =
              !ei || et.value.deleted || et.value.search
                ? (0, r.jsx)(D.bg, { items: L })
                : (0, r.jsx)(W, { entries: w, renderedItems: L, renderItem: eo })
            break e
          }
          let A = K
            ? ((eu = _.map(ep)),
              (d = new Date((s = new Date(ec)).getFullYear(), s.getMonth(), 1).getTime()),
              (h = s.setDate(s.getDate() - 1)),
              eu.map((e) => {
                let t
                if (
                  (t =
                    null != e && Number.isFinite(e)
                      ? e >= ec
                        ? "today"
                        : e >= h
                          ? "yesterday"
                          : e >= d
                            ? "month"
                            : "older"
                      : "unknown") !== i
                )
                  return ((i = t), t)
              }))
            : []
          if (et.value.includePages)
            if ("library:collection:shared-with-me" === et.value.directoryId) {
              let e
              ;(I[57] !== ea
                ? ((e = ea.formatMessage({
                    id: "space.home.sharedList",
                    defaultMessage: "Shared with you",
                    description: "Accessible label for the files and Pages shared with you on Space home",
                  })),
                  (I[57] = ea),
                  (I[58] = e))
                : (e = I[58]),
                (a = e))
            } else if ("recent" === et.value.tab) {
              let e
              ;(I[59] !== ea
                ? ((e = ea.formatMessage({
                    id: "space.provider.recents.list",
                    defaultMessage: "Recently opened files",
                    description: "Accessible label for an external file provider's recently opened files in Space",
                  })),
                  (I[59] = ea),
                  (I[60] = e))
                : (e = I[60]),
                (a = e))
            } else if ("suggested" === et.value.tab) {
              let e
              ;(I[61] !== ea
                ? ((e = ea.formatMessage({
                    id: "space.home.suggestedList",
                    defaultMessage: "Suggested content",
                    description: "Accessible label for mixed Library files and recent Pages with sortable columns",
                  })),
                  (I[61] = ea),
                  (I[62] = e))
                : (e = I[62]),
                (a = e))
            } else {
              let e
              ;(I[63] !== ea
                ? ((e = ea.formatMessage({
                    id: "space.home.itemsList",
                    defaultMessage: "Your items",
                    description: "Accessible label for the files and Pages in Your items on Space home",
                  })),
                  (I[63] = ea),
                  (I[64] = e))
                : (e = I[64]),
                (a = e))
            }
          else {
            let e
            ;(I[55] !== ea
              ? ((e = ea.formatMessage({
                  id: "library.list.label",
                  defaultMessage: "Library files",
                  description: "Accessible label for the Library file list with sortable columns",
                })),
                (I[55] = ea),
                (I[56] = e))
              : (e = I[56]),
              (a = e))
          }
          ;((l = x.eb),
            (n = "-mx-[var(--padding-row-cell-x,var(--padding-row-x))]"),
            (o = "grid"),
            (p = -1),
            (f = a),
            (m = $),
            (y = U.T),
            I[65] !== M || I[66] !== B || I[67] !== z || I[68] !== Q || I[69] !== J
              ? ((b = J
                  ? (0, r.jsx)(ev, { layout: Q, kind: M, showSource: null != B, reserveDisclosureSpace: z })
                  : null),
                (I[65] = M),
                (I[66] = B),
                (I[67] = z),
                (I[68] = Q),
                (I[69] = J),
                (I[70] = b))
              : (b = I[70]),
            (v = L.map((e, t) =>
              (0, r.jsxs)(
                u.Fragment,
                {
                  children: [
                    null != A[t] &&
                      (0, r.jsx)("div", {
                        role: "row",
                        "data-library-date-heading": "",
                        children: (0, r.jsx)("div", {
                          role: "gridcell",
                          className: (0, c.A)("mx-3 border-b border-subtle pb-2", 0 === t ? "pt-5" : "pt-10"),
                          children: (0, r.jsx)("h2", {
                            className: (0, c.A)(
                              "text-sm font-medium select-none",
                              ed ? "text-tertiary" : "text-secondary",
                            ),
                            children: (0, r.jsx)(g.A, {
                              id: "space.home.recent.dateSection",
                              defaultMessage:
                                "{period, select, today {Today} yesterday {Yesterday} month {This month} older {Older} other {Date unavailable}}",
                              description:
                                "Heading above consecutive items in Space Recent, grouped by last activity in the viewer's local calendar. Older means before this month. Items without an activity date use Date unavailable.",
                              values: { period: A[t] },
                            }),
                          }),
                        }),
                      }),
                    (0, r.jsx)(x.Pn, { role: "presentation", children: e.content }),
                  ],
                },
                e.id,
              ),
            )))
        }
        ;((I[13] = el),
          (I[14] = en),
          (I[15] = w),
          (I[16] = X),
          (I[17] = K),
          (I[18] = ei),
          (I[19] = ea),
          (I[20] = M),
          (I[21] = eo),
          (I[22] = B),
          (I[23] = z),
          (I[24] = Q),
          (I[25] = et),
          (I[26] = $),
          (I[27] = J),
          (I[28] = j),
          (I[29] = q),
          (I[30] = ed),
          (I[31] = ec),
          (I[32] = es),
          (I[33] = l),
          (I[34] = n),
          (I[35] = o),
          (I[36] = p),
          (I[37] = f),
          (I[38] = m),
          (I[39] = y),
          (I[40] = b),
          (I[41] = v),
          (I[42] = C))
      } else
        ((l = I[33]),
          (n = I[34]),
          (o = I[35]),
          (p = I[36]),
          (f = I[37]),
          (m = I[38]),
          (y = I[39]),
          (b = I[40]),
          (v = I[41]),
          (C = I[42]))
      return C !== Symbol.for("react.early_return_sentinel")
        ? C
        : (I[71] !== l ||
          I[72] !== n ||
          I[73] !== o ||
          I[74] !== p ||
          I[75] !== f ||
          I[76] !== m ||
          I[77] !== y ||
          I[78] !== b ||
          I[79] !== v
            ? ((L = (0, r.jsxs)(l, {
                className: n,
                role: o,
                tabIndex: p,
                "aria-label": f,
                "aria-multiselectable": m,
                onKeyDown: y,
                children: [b, v],
              })),
              (I[71] = l),
              (I[72] = n),
              (I[73] = o),
              (I[74] = p),
              (I[75] = f),
              (I[76] = m),
              (I[77] = y),
              (I[78] = b),
              (I[79] = v),
              (I[80] = L))
            : (L = I[80]),
          L)
    }
    function ep(e) {
      return e.sortMetadata.date
    }
    function ef(e) {
      return (0, r.jsx)(u.Fragment, { children: e.content }, e.id)
    }
    function em(e) {
      return "node" in e && "directory" === e.node.kind
    }
    function ey(e, t) {
      let { id: a, render: r } = e
      return { id: a, content: r(t + 1) }
    }
    function eb(e) {
      return new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime()
    }
    function ev(e) {
      let t,
        a,
        s,
        l,
        n,
        o,
        u,
        h,
        p,
        f,
        m,
        y,
        b = (0, i.c)(39),
        {
          layout: v,
          kind: x,
          isLoading: C,
          showSource: _,
          selectionEnabled: L,
          selection: I,
          sizeSortEnabled: A,
          reserveDisclosureSpace: T,
        } = e,
        E = void 0 !== C && C,
        w = void 0 !== _ && _,
        j = void 0 === L || L,
        R = void 0 === A || A,
        S = void 0 !== T && T,
        M = (0, d.Ul)(P.rk),
        N = (0, d.Ul)(P.AB)
      b[0] !== M || b[1] !== E || b[2] !== N || b[3] !== R
        ? ((t = N
            ? (0, r.jsx)(ex, {
                sortEnabled: R,
                column: "size",
                className: (0, c.A)(
                  "hidden w-16 shrink-0 @lg/library-row:block",
                  "deleted" === M && "@3xl/library-row:w-40",
                ),
                isLoading: E,
                children: (0, r.jsx)(g.A, {
                  id: "libraryNext.results.size",
                  defaultMessage: "Size",
                  description: "Library folder list file size column heading",
                }),
              })
            : null),
          (b[0] = M),
          (b[1] = E),
          (b[2] = N),
          (b[3] = R),
          (b[4] = t))
        : (t = b[4])
      let F = t
      ;(b[5] !== M || b[6] !== E || b[7] !== x || b[8] !== I || b[9] !== j
        ? ((a = j && !E && "saved" !== M ? (I ?? (0, r.jsx)(ee.j8, { kind: x })) : void 0),
          (b[5] = M),
          (b[6] = E),
          (b[7] = x),
          (b[8] = I),
          (b[9] = j),
          (b[10] = a))
        : (a = b[10]),
        b[11] !== S ? ((s = S ? (0, r.jsx)(O.aH, { depth: 0 }) : null), (b[11] = S), (b[12] = s)) : (s = b[12]),
        b[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, r.jsx)(g.A, {
              id: "libraryNext.results.name",
              defaultMessage: "Name",
              description: "Library list name column heading",
            })),
            (b[13] = l))
          : (l = b[13]),
        b[14] !== s
          ? ((n = (0, r.jsxs)("span", { className: "flex items-center", children: [s, l] })), (b[14] = s), (b[15] = n))
          : (n = b[15]),
        b[16] !== E || b[17] !== n
          ? ((o = (0, r.jsx)(ex, { column: "name", className: "min-w-0 flex-1", isLoading: E, children: n })),
            (b[16] = E),
            (b[17] = n),
            (b[18] = o))
          : (o = b[18]),
        b[19] !== M || b[20] !== w
          ? ((u = w
              ? (0, r.jsx)("span", {
                  role: "columnheader",
                  "data-library-column": "source",
                  tabIndex: 0,
                  className: (0, c.A)("hidden shrink-0 @3xl/library-row:block", "deleted" === M ? "w-40" : "w-60"),
                  children:
                    "deleted" === M
                      ? (0, r.jsx)(g.A, {
                          id: "libraryNext.results.space",
                          defaultMessage: "Space",
                          description:
                            "Trash list column showing the Space an item belongs to. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                        })
                      : (0, r.jsx)(g.A, {
                          id: "libraryNext.results.source",
                          defaultMessage: "Source",
                          description: "Column showing the Space an item belongs to",
                        }),
                })
              : null),
            (b[19] = M),
            (b[20] = w),
            (b[21] = u))
          : (u = b[21]),
        b[22] !== M
          ? ((h =
              "shared" === M
                ? (0, r.jsx)("span", {
                    role: "columnheader",
                    "data-library-column": "shared",
                    tabIndex: 0,
                    className: "hidden w-60 shrink-0 @3xl/library-row:block",
                    children: (0, r.jsx)(g.A, {
                      id: "libraryNext.results.sharedBy",
                      defaultMessage: "Shared by",
                      description:
                        "Column heading in Library's Shared with me list, above the avatar and name of the person who shared each file or folder",
                    }),
                  })
                : null),
            (b[22] = M),
            (b[23] = h))
          : (h = b[23]))
      let H = "deleted" === M ? F : null
      ;(b[24] !== M
        ? ((p =
            "activity" === M
              ? (0, r.jsx)(g.A, {
                  id: "libraryNext.results.date",
                  defaultMessage: "Last activity",
                  description:
                    "Suggested list date column; dates can reflect personal activity or modification, depending on the result.",
                })
              : (0, r.jsx)(g.A, {
                  id: "libraryNext.results.dateHeadingWithSaved",
                  defaultMessage:
                    "{kind, select, suggested {Last activity} shared {Shared} deleted {Deleted} saved {Saved} other {Modified}}",
                  description:
                    "Library list date column heading. kind identifies Suggested activity, sharing date, Trash deletion date, Favorites save date, or last modification.",
                  values: { kind: M },
                })),
          (b[24] = M),
          (b[25] = p))
        : (p = b[25]),
        b[26] !== E || b[27] !== p
          ? ((f = (0, r.jsx)(ex, {
              column: "date",
              className: "hidden w-28 shrink-0 @lg/library-row:block",
              isLoading: E,
              children: p,
            })),
            (b[26] = E),
            (b[27] = p),
            (b[28] = f))
          : (f = b[28]))
      let B = "deleted" !== M ? F : null
      return (
        b[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, r.jsx)("span", { "aria-hidden": "true", className: "w-9 shrink-0 @lg/library-row:w-16" })),
            (b[29] = m))
          : (m = b[29]),
        b[30] !== v ||
        b[31] !== o ||
        b[32] !== u ||
        b[33] !== h ||
        b[34] !== H ||
        b[35] !== f ||
        b[36] !== B ||
        b[37] !== a
          ? ((y = (0, r.jsxs)(O.Xg, { layout: v, selection: a, children: [o, u, h, H, f, B, m] })),
            (b[30] = v),
            (b[31] = o),
            (b[32] = u),
            (b[33] = h),
            (b[34] = H),
            (b[35] = f),
            (b[36] = B),
            (b[37] = a),
            (b[38] = y))
          : (y = b[38]),
        y
      )
    }
    function ex(e) {
      let t,
        a,
        n,
        o,
        u,
        h = (0, i.c)(19),
        { sortEnabled: g, column: p, className: m, isLoading: y, children: b } = e,
        v = (0, d.gh)(P.Qy),
        x = (0, d.Ul)(P.oW),
        C = (0, d.Ul)(P.QQ),
        _ = y || !C || !(void 0 === g || g),
        L = !_ && x?.key === p,
        I = x?.direction === "asc" ? "ascending" : "descending",
        A = x?.direction === "asc" ? l.n : s.I
      h[0] !== m ? ((t = (0, c.A)("h-full", m)), (h[0] = m), (h[1] = t)) : (t = h[1])
      let T = L ? I : "none"
      return (
        h[2] !== p || h[3] !== v || h[4] !== x
          ? ((a = () => v.set(P.C6, (0, Y.Tg)(x, p))), (h[2] = p), (h[3] = v), (h[4] = x), (h[5] = a))
          : (a = h[5]),
        h[6] !== L || h[7] !== A
          ? ((n = L ? (0, r.jsx)(f.I, { className: "shrink-0", asset: A, focusable: "false" }) : null),
            (h[6] = L),
            (h[7] = A),
            (h[8] = n))
          : (n = h[8]),
        h[9] !== b || h[10] !== _ || h[11] !== a || h[12] !== n
          ? ((o = (0, r.jsxs)("button", {
              type: "button",
              disabled: _,
              className:
                "flex size-full cursor-interaction items-center gap-1 text-start outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default",
              onClick: a,
              children: [b, n],
            })),
            (h[9] = b),
            (h[10] = _),
            (h[11] = a),
            (h[12] = n),
            (h[13] = o))
          : (o = h[13]),
        h[14] !== p || h[15] !== t || h[16] !== T || h[17] !== o
          ? ((u = (0, r.jsx)("div", {
              role: "columnheader",
              "data-library-column": p,
              className: t,
              "aria-sort": T,
              children: o,
            })),
            (h[14] = p),
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
    var r = a("QosV"),
      i = a("zTeN"),
      s = a("zd8w"),
      l = a("HZfM"),
      n = a("jU86"),
      o = a("EAw5")
    a.d(
      t,
      {},
      {
        c: function () {
          let e,
            t,
            a = (0, r.c)(5),
            c = (0, i.gh)(n.Qy),
            { key: d } = (0, l.zy)(),
            u = (0, l.wQ)()
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
    var r = a("ABep"),
      i = a("QosV"),
      s = a("on57"),
      l = a("zd8w"),
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
            p,
            f,
            m,
            y,
            b,
            v,
            x,
            C,
            _,
            L,
            I,
            A,
            T = (0, i.c)(35),
            { items: E, disabled: w, onSelect: j } = e,
            R = void 0 !== w && w,
            S = (0, l.useRef)(null),
            M = (0, l.useRef)(null),
            [N, P] = (0, l.useState)(0),
            F = (0, n.A)()
          T[0] !== E ? ((t = JSON.stringify(E.map(g))), (T[0] = E), (T[1] = t)) : (t = T[1])
          let H = t
          ;(T[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = () => {
                let e = S.current,
                  t = M.current
                if (!e || !t) return
                let a = () => {
                    let a = Array.from(t.children, h),
                      r = a.pop() ?? 0,
                      i = e.getBoundingClientRect().width
                    if (a.reduce(u, 0) <= i) return void P(Math.max(0, a.length - 1))
                    let s = (a[0] ?? 0) + r,
                      l = 0
                    for (let e = a.length - 1; e > 0 && !((s += a[e]) > i); e--) l++
                    P(l)
                  },
                  r = new ResizeObserver(a)
                for (let a of [e, t]) r.observe(a)
                return (a(), () => r.disconnect())
              }),
              (T[2] = a))
            : (a = T[2]),
            T[3] !== H ? ((p = [H]), (T[3] = H), (T[4] = p)) : (p = T[4]),
            (0, l.useLayoutEffect)(a, p))
          let B = Math.min(N, Math.max(0, E.length - 1))
          if (T[5] !== B || T[6] !== R || T[7] !== F || T[8] !== E || T[9] !== j) {
            let e,
              t = 0 === B ? E.slice(0, -1) : E.slice(1, -B),
              a = 0 === B ? E.slice(-1) : [E[0], ...E.slice(-B)]
            ;(T[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(d.uM3, { className: "mx-2 text-tertiary" })), (T[15] = e))
              : (e = T[15]),
              (f = e),
              (b = S),
              (v = "relative grid w-full min-w-0 grid-cols-1 select-none"),
              (m = "col-start-1 row-start-1 -my-1 flex min-w-0 items-center overflow-hidden py-1"),
              (y = a.map((e, i) =>
                (0, r.jsxs)(
                  "span",
                  {
                    className: (0, s.A)("flex min-w-0 items-center", i === a.length - 1 ? "shrink" : "shrink-0"),
                    children: [
                      i > 0 ? f : null,
                      i === +(0 !== B) && t.length > 0
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(c.Ab, {
                                align: "start",
                                triggerButton: (0, r.jsx)(o.$, {
                                  className: "shrink-0",
                                  color: "ghostTertiary",
                                  disabled: R,
                                  size: "inline",
                                  "aria-label": F.formatMessage({
                                    id: "libraryNext.breadcrumbs.parents",
                                    defaultMessage: "Open parent folders",
                                    description: "Open the menu of collapsed parent folders in a Library breadcrumb",
                                  }),
                                  children: (0, r.jsx)(d.l0Y, {}),
                                }),
                                children: t.map((e) =>
                                  (0, r.jsx)(
                                    c.ms.Item,
                                    { disabled: R, onSelect: () => j(e.id), children: e.name },
                                    e.id ?? "root",
                                  ),
                                ),
                              }),
                              f,
                            ],
                          })
                        : null,
                      e === E.at(-1) && null != e.id
                        ? (0, r.jsx)("span", {
                            className: "-my-1 min-w-0 truncate py-1",
                            "aria-current": "page",
                            title: e.name,
                            children: e.name,
                          })
                        : (0, r.jsx)(o.$, {
                            color: "ghostTertiary",
                            disabled: R,
                            size: "inline",
                            onClick: () => j(e.id),
                            children: e.name,
                          }),
                    ],
                  },
                  e.id ?? "root",
                ),
              )),
              (T[5] = B),
              (T[6] = R),
              (T[7] = F),
              (T[8] = E),
              (T[9] = j),
              (T[10] = f),
              (T[11] = m),
              (T[12] = y),
              (T[13] = b),
              (T[14] = v))
          } else ((f = T[10]), (m = T[11]), (y = T[12]), (b = T[13]), (v = T[14]))
          if (
            (T[16] !== m || T[17] !== y
              ? ((x = (0, r.jsx)("span", { className: m, children: y })), (T[16] = m), (T[17] = y), (T[18] = x))
              : (x = T[18]),
            T[19] !== E || T[20] !== f)
          ) {
            let e
            ;(T[22] !== f
              ? ((e = (e, t) =>
                  (0, r.jsxs)(
                    "span",
                    {
                      className: "flex shrink-0 items-center",
                      children: [t > 0 ? f : null, (0, r.jsx)("span", { children: e.name })],
                    },
                    e.id ?? "root",
                  )),
                (T[22] = f),
                (T[23] = e))
              : (e = T[23]),
              (C = E.map(e)),
              (T[19] = E),
              (T[20] = f),
              (T[21] = C))
          } else C = T[21]
          return (
            T[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((_ = (0, r.jsx)(d.l0Y, {})), (T[24] = _))
              : (_ = T[24]),
            T[25] !== f
              ? ((L = (0, r.jsxs)("span", { className: "absolute flex shrink-0 items-center", children: [f, _] })),
                (T[25] = f),
                (T[26] = L))
              : (L = T[26]),
            T[27] !== C || T[28] !== L
              ? ((I = (0, r.jsx)("span", {
                  "aria-hidden": "true",
                  className: "pointer-events-none invisible col-start-1 row-start-1 min-w-0 overflow-hidden",
                  children: (0, r.jsxs)("span", { ref: M, className: "flex w-max items-center", children: [C, L] }),
                })),
                (T[27] = C),
                (T[28] = L),
                (T[29] = I))
              : (I = T[29]),
            T[30] !== I || T[31] !== b || T[32] !== v || T[33] !== x
              ? ((A = (0, r.jsxs)("span", { ref: b, className: v, children: [x, I] })),
                (T[30] = I),
                (T[31] = b),
                (T[32] = v),
                (T[33] = x),
                (T[34] = A))
              : (A = T[34]),
            A
          )
        },
      },
    )
  },
  NvSv(e, t, a) {
    a.d(t, { l: () => B, d: () => P })
    var r = a("ABep"),
      i = a("QosV"),
      s = a("slpy"),
      l = a("GIK5"),
      n = a("Va51"),
      o = a("JzcK"),
      c = a("jvXq"),
      d = a("D6JX")
    let u = (0, a("iJY0").a)({
      name: "pencil-sparkle-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.347168, y: 2.347656, width: 16.071487, height: 16.071289 },
        visualBounds: { x: 2.347168, y: 2.347656, width: 16.071487, height: 16.071289 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.347168, y: 2.347656, width: 16.071487, height: 16.071289 },
        center: { x: 10.382912, y: 10.383301 },
        insets: { top: 2.347656, right: 1.581345, bottom: 1.581055, left: 2.347168 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.382912, y: 10.383301 },
          foreground: { x: 10.382912, y: 10.383301 },
        },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2935 3.9707C13.7192 2.54824 15.9879 2.57709 17.3481 3.96191C18.751 5.31689 18.7968 7.5952 17.3569 9.03516L10.3569 16.0352L10.356 16.0342C9.64388 16.7801 8.73412 17.2852 7.78369 17.5059L7.78271 17.5068L3.91553 18.3945L3.91455 18.3926C3.74781 18.4322 3.40972 18.466 3.14014 18.1973C2.9367 17.9943 2.9054 17.752 2.91943 17.5732L2.94385 17.4199H2.94189L3.83154 13.5625C4.05579 12.5655 4.56679 11.695 5.26904 10.9941L12.2935 3.9707ZM6.20947 11.9355C5.66898 12.4748 5.29228 13.1261 5.12842 13.8574L5.12744 13.8613L4.42334 16.9131L7.48486 16.21C8.19069 16.0458 8.87308 15.6671 9.40381 15.1074L15.062 9.44824L11.8784 6.26562L6.20947 11.9355ZM16.4097 4.90332C15.5721 4.03993 14.1433 4.00382 13.2329 4.91211L12.8198 5.3252L16.0024 8.50781L16.4165 8.09473C17.3331 7.17807 17.2904 5.75485 16.4253 4.91895L16.4097 4.90332Z" fill="currentColor"/> <path d="M4.5835 2.34766C4.73568 2.34776 4.86712 2.45525 4.89697 2.60449C4.9842 3.04053 5.15446 3.41309 5.4165 3.69531C5.67572 3.97447 6.04076 4.18326 6.55225 4.26855C6.70628 4.29423 6.81982 4.42783 6.81982 4.58398C6.81972 4.74005 6.70621 4.87278 6.55225 4.89844C6.04087 4.98369 5.67572 5.19263 5.4165 5.47168C5.15441 5.75394 4.9842 6.12736 4.89697 6.56348C4.86701 6.71257 4.73558 6.82021 4.5835 6.82031C4.43135 6.82031 4.30003 6.7126 4.27002 6.56348C4.1828 6.12736 4.01258 5.75394 3.75049 5.47168C3.49124 5.1925 3.12535 4.9837 2.61377 4.89844C2.46001 4.87262 2.34727 4.73992 2.34717 4.58398C2.34717 4.42793 2.45989 4.29435 2.61377 4.26855C3.12537 4.18329 3.49124 3.97451 3.75049 3.69531C4.01244 3.4131 4.18282 3.04045 4.27002 2.60449C4.29988 2.45518 4.43122 2.34766 4.5835 2.34766Z" fill="currentColor"/>',
    })
    var h = a("IGm3"),
      g = a("PePi"),
      p = a("dECj"),
      f = a("NZBq"),
      m = a("c70r"),
      y = a("zTeN"),
      b = a("Wf1j"),
      v = a("oyxz"),
      x = a("Qgfj"),
      C = a("ucTc"),
      _ = a("O8QP"),
      L = a("g2p6"),
      I = a("Sm6l"),
      A = a("bqtn"),
      T = a("HOLv"),
      E = a("bVeK"),
      w = a("pIbZ"),
      j = a("UxN3"),
      R = a("HFg1"),
      S = a("cGrE"),
      M = a("jU86")
    let N = (0, y.un)(
      M.Qy,
      ({ get: e, scope: t }) => !0 === t.value.includePages && e(L.s6).data?.meetingsEnabled === !0,
    )
    function P(e) {
      let t,
        a,
        m,
        L,
        I,
        T,
        P,
        B,
        Y,
        G,
        O = (0, i.c)(39),
        { showCategoryFilters: U } = e,
        D = void 0 === U || U,
        V = (0, y.gh)(M.Qy),
        z = (0, b.A)(),
        Z = (0, y.Ul)(N)
      if (O[0] !== z || O[1] !== Z || O[2] !== V || O[3] !== D) {
        P = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            i,
            l,
            n,
            d,
            u = ["images", "documents", "spreadsheets", "presentations", "pdfs"]
          if ((V.value.includePages && (Z && u.unshift("meetings"), u.unshift("pages")), !(0, M.BG)(V.value))) {
            P = null
            break e
          }
          let y = {
              pages: { assets: { 16: p.s, 20: f.b } },
              meetings: { 16: C.A, 20: _.A },
              images: { 16: E.UJ6, 20: E.pYT },
              documents: { assets: { 16: h.D, 20: g.g } },
              spreadsheets: R.Q.spreadsheet,
              presentations: R.Q.presentation,
              pdfs: { assets: { 16: o.l, 20: c.e } },
            },
            b = (D ? V.value.categories.length : 0) + V.value.sources.length
          ;(O[12] !== V
            ? ((e = (e) => {
                let t = V.value.sources.includes(e) ? V.value.sources.filter((t) => t !== e) : [...V.value.sources, e]
                ;((0, S.np)(V, { sources: t }), (0, M.zl)(V, (0, M.SE)({ ...V.value, sources: t })))
              }),
              (O[12] = V),
              (O[13] = e))
            : (e = O[13]),
            (B = e),
            (t = A.Ab),
            O[14] !== V
              ? ((a = (e) => {
                  e && (0, S.Jt)(V)
                }),
                (O[14] = V),
                (O[15] = a))
              : (a = O[15]),
            (m = "end"),
            (L = "menu"),
            O[16] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, r.jsx)(v.A, {
                  id: "libraryNext.filters.tooltip",
                  defaultMessage: "Filters",
                  description: "Tooltip on the Library button that opens source and file-type filters.",
                })),
                (O[16] = i))
              : (i = O[16]))
          let N = b > 0
          ;(O[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = { 16: E.uG0, 20: E.FuZ }), (O[17] = l))
            : (l = O[17]),
            O[18] !== b || O[19] !== z
              ? ((n = z.formatMessage(
                  {
                    id: "libraryNext.filters.openWithCount",
                    defaultMessage:
                      "{activeFilterCount, plural, =0 {Open filters} one {Open filters, # active filter} other {Open filters, # active filters}}",
                    description:
                      "Accessible label for the Library filter menu, including the number of active source and file-type filters.",
                  },
                  { activeFilterCount: b },
                )),
                (O[18] = b),
                (O[19] = z),
                (O[20] = n))
              : (n = O[20]),
            O[21] !== b
              ? ((d =
                  b > 0
                    ? (0, r.jsx)("span", {
                        "aria-hidden": !0,
                        className: "count-ISCbrn",
                        children: (0, r.jsx)(x.Gr, { value: b }),
                      })
                    : null),
                (O[21] = b),
                (O[22] = d))
              : (d = O[22]),
            O[23] !== N || O[24] !== n || O[25] !== d
              ? ((I = (0, r.jsx)(s.m, {
                  content: i,
                  children: (0, r.jsx)(w.p, {
                    color: "secondary",
                    variant: "ghost",
                    uniform: !0,
                    selected: N,
                    icon: l,
                    "aria-label": n,
                    children: d,
                  }),
                })),
                (O[23] = N),
                (O[24] = n),
                (O[25] = d),
                (O[26] = I))
              : (I = O[26]),
            (T =
              D && (0, M.Fy)(V.value)
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(A.ms.SectionLabel, {
                        children: (0, r.jsx)("span", {
                          className: "text-secondary",
                          children: (0, r.jsx)(v.A, {
                            id: "libraryNext.filters.fileType",
                            defaultMessage: "File type",
                            description: "Heading for Library file type filters",
                          }),
                        }),
                      }),
                      u.map((e) =>
                        (0, r.jsx)(
                          A.ms.CheckboxItem,
                          {
                            onSelect: H,
                            checked: V.value.categories.includes(e),
                            onCheckedChange: () => {
                              let t
                              return (
                                (t = V.value.categories.includes(e)
                                  ? V.value.categories.filter((t) => t !== e)
                                  : [...V.value.categories, e]),
                                void ((0, S.np)(V, { fileTypes: t }),
                                (0, M.zl)(V, (0, M.SE)({ ...V.value, categories: t })))
                              )
                            },
                            leftIcon: (0, r.jsx)(j.b5, { icon: y[e] }),
                            children: (0, r.jsx)("span", {
                              className: "flex-1",
                              children: (0, r.jsx)(v.A, { ...k[e] }),
                            }),
                          },
                          e,
                        ),
                      ),
                    ],
                  })
                : null))
        }
        ;((O[0] = z),
          (O[1] = Z),
          (O[2] = V),
          (O[3] = D),
          (O[4] = t),
          (O[5] = a),
          (O[6] = m),
          (O[7] = L),
          (O[8] = I),
          (O[9] = T),
          (O[10] = P),
          (O[11] = B))
      } else ((t = O[4]), (a = O[5]), (m = O[6]), (L = O[7]), (I = O[8]), (T = O[9]), (P = O[10]), (B = O[11]))
      return P !== Symbol.for("react.early_return_sentinel")
        ? P
        : (O[27] !== V.value || O[28] !== D || O[29] !== B
            ? ((Y = (0, M.cZ)(V.value)
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      D && (0, M.Fy)(V.value) ? (0, r.jsx)(A.ms.Separator, {}) : null,
                      (0, r.jsx)(A.ms.SectionLabel, {
                        children: (0, r.jsx)("span", {
                          className: "text-secondary",
                          children: (0, r.jsx)(v.A, {
                            id: "libraryNext.filters.source",
                            defaultMessage: "Source",
                            description: "Heading for Library source filters",
                          }),
                        }),
                      }),
                      ["uploaded", "generated"].map((e) =>
                        (0, r.jsx)(
                          A.ms.CheckboxItem,
                          {
                            onSelect: F,
                            checked: V.value.sources.includes(e),
                            onCheckedChange: () => B(e),
                            leftIcon: (0, r.jsx)(j.b5, {
                              icon: { assets: "uploaded" === e ? { 16: l.U, 20: n.D } : { 16: d.n, 20: u } },
                            }),
                            children: (0, r.jsx)("span", {
                              className: "flex-1",
                              children: (0, r.jsx)(v.A, { ...k[e] }),
                            }),
                          },
                          e,
                        ),
                      ),
                    ],
                  })
                : null),
              (O[27] = V.value),
              (O[28] = D),
              (O[29] = B),
              (O[30] = Y))
            : (Y = O[30]),
          O[31] !== t || O[32] !== a || O[33] !== m || O[34] !== L || O[35] !== I || O[36] !== T || O[37] !== Y
            ? ((G = (0, r.jsxs)(t, { onOpenChange: a, align: m, contentWidth: L, triggerButton: I, children: [T, Y] })),
              (O[31] = t),
              (O[32] = a),
              (O[33] = m),
              (O[34] = L),
              (O[35] = I),
              (O[36] = T),
              (O[37] = Y),
              (O[38] = G))
            : (G = O[38]),
          G)
    }
    function F(e) {
      return e.preventDefault()
    }
    function H(e) {
      return e.preventDefault()
    }
    function B(e) {
      let t,
        a,
        s,
        l,
        n,
        o = (0, i.c)(19),
        { showCategoryFilters: c } = e,
        d = void 0 === c || c,
        u = (0, y.gh)(M.Qy),
        h = (0, b.A)()
      if (!(0, M.BG)(u.value)) return null
      o[0] !== u
        ? ((t = (e) => {
            let t = u.value.sources.filter((t) => t !== e)
            ;((0, S.np)(u, { sources: t }), (0, M.zl)(u, (0, M.SE)({ ...u.value, sources: t })))
          }),
          (o[0] = u),
          (o[1] = t))
        : (t = o[1])
      let g = t
      o[2] !== u
        ? ((a = (e) => {
            let t = u.value.categories.filter((t) => t !== e)
            ;((0, S.np)(u, { fileTypes: t }), (0, M.zl)(u, (0, M.SE)({ ...u.value, categories: t })))
          }),
          (o[2] = u),
          (o[3] = a))
        : (a = o[3])
      let p = a
      if (o[4] !== h || o[5] !== g || o[6] !== u.value.sources) {
        let e
        ;(o[8] !== h || o[9] !== g
          ? ((e = (e) =>
              (0, r.jsxs)(
                I.$,
                {
                  color: "outline",
                  size: "actionSm",
                  onClick: () => g(e),
                  "aria-label": h.formatMessage(
                    {
                      id: "libraryNext.filters.clearSource",
                      defaultMessage:
                        "{source, select, uploaded {Clear Uploaded filter} other {Clear Generated filter}}",
                      description:
                        "Accessible action on a selected Library source chip. source is uploaded or generated; activating removes only that source filter.",
                    },
                    { source: e },
                  ),
                  children: [(0, r.jsx)(v.A, { ...k[e] }), (0, r.jsx)(T.I, { asset: m.Q, "data-no-autosize": !0 })],
                },
                e,
              )),
            (o[8] = h),
            (o[9] = g),
            (o[10] = e))
          : (e = o[10]),
          (s = u.value.sources.map(e)),
          (o[4] = h),
          (o[5] = g),
          (o[6] = u.value.sources),
          (o[7] = s))
      } else s = o[7]
      return (
        o[11] !== h || o[12] !== p || o[13] !== u.value.categories || o[14] !== d
          ? ((l =
              d &&
              u.value.categories.map((e) =>
                (0, r.jsxs)(
                  I.$,
                  {
                    color: "outline",
                    size: "actionSm",
                    onClick: () => p(e),
                    "aria-label": h.formatMessage(
                      {
                        id: "libraryNext.filters.clearCategoryWithMeetings",
                        defaultMessage:
                          "{category, select, pages {Clear Pages filter} meetings {Clear Meetings filter} images {Clear Images filter} documents {Clear Documents filter} spreadsheets {Clear Spreadsheets filter} presentations {Clear Presentations filter} other {Clear PDFs filter}}",
                        description:
                          "Accessible action on a selected Library file-type chip. category identifies the selected file type; activating removes that filter.",
                      },
                      { category: e },
                    ),
                    children: [(0, r.jsx)(v.A, { ...k[e] }), (0, r.jsx)(T.I, { asset: m.Q, "data-no-autosize": !0 })],
                  },
                  e,
                ),
              )),
            (o[11] = h),
            (o[12] = p),
            (o[13] = u.value.categories),
            (o[14] = d),
            (o[15] = l))
          : (l = o[15]),
        o[16] !== s || o[17] !== l
          ? ((n = (0, r.jsxs)(r.Fragment, { children: [s, l] })), (o[16] = s), (o[17] = l), (o[18] = n))
          : (n = o[18]),
        n
      )
    }
    let k = (0, x.YK)({
      meetings: {
        id: "libraryNext.filters.meetings",
        defaultMessage: "Meetings",
        description: "Library file-type filter for meeting note Pages, shown in the menu and selected filter chip",
      },
      pages: {
        id: "libraryNext.filters.pages",
        defaultMessage: "Pages",
        description: "Library filter for native ChatGPT Pages, shown in the file-type menu and selected filter chips",
      },
      uploaded: {
        id: "libraryNext.filters.uploaded",
        defaultMessage: "Uploaded",
        description: "Library filter for files uploaded by the user",
      },
      generated: {
        id: "libraryNext.filters.generated",
        defaultMessage: "Generated",
        description: "Library filter for files generated by ChatGPT",
      },
      images: {
        id: "libraryNext.filters.images",
        defaultMessage: "Images",
        description: "Library image category, shown as a tab, filter menu option, or selected filter chip",
      },
      documents: {
        id: "libraryNext.filters.documents",
        defaultMessage: "Documents",
        description:
          "Library document category in the filter menu, selected filter chips, and Shared with me file-type tabs",
      },
      spreadsheets: {
        id: "libraryNext.filters.spreadsheets",
        defaultMessage: "Spreadsheets",
        description: "Library spreadsheet category in the filter menu and selected filter chips",
      },
      presentations: {
        id: "libraryNext.filters.presentations",
        defaultMessage: "Presentations",
        description: "Library presentation category in the filter menu and selected filter chips",
      },
      pdfs: {
        id: "libraryNext.filters.pdfs",
        defaultMessage: "PDFs",
        description: "Library PDF category in the filter menu and selected filter chips",
      },
    })
  },
  M4Gn(e, t, a) {
    a.d(t, { pH: () => G, I2: () => B, e9: () => H })
    var r = a("ABep"),
      i = a("QosV"),
      s = a("D7Ms"),
      l = a("T0Rc"),
      n = a("zTeN"),
      o = a("zd8w"),
      c = a("oyxz"),
      d = a("Wf1j"),
      u = a("Qgfj"),
      h = a("HZfM"),
      g = a("MeAu"),
      p = a("BrP7"),
      f = a("UxLW"),
      m = a("WzqN"),
      y = a("Ui6L"),
      b = a("cGrE"),
      v = a("TCFx"),
      x = a("jU86"),
      C = a("RjIR"),
      _ = a("EAw5"),
      L = a("PcRp"),
      I = a("dLIb"),
      A = a("NvSv"),
      T = a("i5ac"),
      E = a.n(T),
      w = a("bqtn"),
      j = a("bVeK"),
      R = a("pIbZ"),
      S = a("UxN3"),
      M = a("xicY"),
      N = a("XdIt")
    function P() {
      let e,
        t,
        a,
        s = (0, i.c)(5),
        l = (0, d.A)()
      s[0] !== l
        ? ((e = l.formatMessage({
            id: "libraryNext.settings.label",
            defaultMessage: "Settings",
            description: "Accessible label for the Library settings menu",
          })),
          (s[0] = l),
          (s[1] = e))
        : (e = s[1])
      let n = e
      return (
        s[2] === Symbol.for("react.memo_cache_sentinel") ? ((t = { 16: j.YWV, 20: j.RhA }), (s[2] = t)) : (t = s[2]),
        s[3] !== n
          ? ((a = (0, r.jsx)(w.Ab, {
              align: "end",
              contentWidth: "menu",
              triggerButton: (0, r.jsx)(R.p, {
                color: "secondary",
                variant: "ghost",
                uniform: !0,
                icon: t,
                "aria-label": n,
              }),
              children: (0, r.jsx)(F, { label: n }),
            })),
            (s[3] = n),
            (s[4] = a))
          : (a = s[4]),
        a
      )
    }
    function F(e) {
      let t,
        a,
        s,
        l,
        o,
        d,
        u,
        g,
        p = (0, i.c)(14),
        { label: f } = e,
        y = (0, n.gh)(x.Qy),
        C = (0, n.Ul)(x.en),
        _ = (0, n.Ul)(m.y),
        { data: L } = (0, n.Ul)(x.o_),
        I = (0, n.Ul)(x.xG),
        A = (0, n.Ul)(x.d8),
        T = (0, n.Ul)(M.Ai),
        R =
          null == L
            ? void 0
            : E()(L, v.sm).flatMap((e) => {
                let t = (0, v.sm)(e),
                  a = I?.filter((e) => e.provider === t)
                return "native" !== t && "native_shared" !== t && T.has(t)
                  ? (a?.map((t) => ({ entry: e, account: t })) ?? [])
                  : [{ entry: e, account: void 0 }]
              })
      ;((0, h.Zp)(),
        p[0] !== f
          ? ((t = (0, r.jsx)(w.ms.SectionLabel, {
              children: (0, r.jsx)("span", { className: "text-secondary", children: f }),
            })),
            (p[0] = f),
            (p[1] = t))
          : (t = p[1]))
      let P = R?.map((e) => {
        let { entry: t, account: a } = e,
          i = (0, v.sm)(t)
        if (_.has(i)) return null
        let s = (0, r.jsx)(c.A, {
          id: "libraryNext.settings.providerName",
          defaultMessage: "{provider}",
          description:
            "Visibility toggle for a connected Library provider, shown as its unchanged brand name, such as Google Drive or Box.",
          values: { provider: t.node.name },
        })
        return (
          null != a &&
            R.filter((e) => (0, v.sm)(e.entry) === i).length > 1 &&
            (s =
              null != a.accountLabel
                ? (0, r.jsx)(c.A, {
                    id: "libraryNext.settings.providerAccount",
                    defaultMessage: "{provider} · {account}",
                    description:
                      "Visibility toggle for one connected storage account in Library settings. {provider} is an unchanged brand name such as Box; {account} is the user's nickname or email.",
                    values: { provider: t.node.name, account: a.accountLabel },
                  })
                : (0, r.jsx)(c.A, {
                    id: "libraryNext.settings.providerUnnamedAccount",
                    defaultMessage: "{provider} · Account {number}",
                    description:
                      "Visibility toggle in Library settings for a connected storage account without a nickname or email. {provider} is an unchanged brand name such as Box; {number} is its position among that provider's accounts.",
                    values: { provider: t.node.name, number: a.accountNumber },
                  })),
          (0, r.jsx)(
            w.ms.CheckboxItem,
            {
              indicator: "switch",
              leftIcon: (0, r.jsx)(N.u, { provider: i, standalone: "row" }),
              checked: null == a ? !C.has(i) : A.has(a.id),
              onCheckedChange: (e) => {
                a?.accountKey != null ? (0, x.hK)(y, a.id, !0 === e) : (0, x.$4)(y, i, !0 === e)
              },
              children: s,
            },
            a?.id ?? t.node.id,
          )
        )
      })
      return (
        p[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsx)(w.ms.Separator, {})), (p[2] = a))
          : (a = p[2]),
        p[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, r.jsx)(w.ms.SectionLabel, {
              children: (0, r.jsx)("span", {
                className: "text-secondary",
                children: (0, r.jsx)(c.A, {
                  id: "libraryNext.settings.manage",
                  defaultMessage: "Manage",
                  description: "Library management menu section",
                }),
              }),
            })),
            (p[3] = s))
          : (s = p[3]),
        p[4] !== y
          ? ((l = () => {
              ;(y.value.deleted || (0, b.np)(y, { section: "recently_deleted" }),
                (0, x.zl)(
                  y,
                  (0, x.SE)({
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
            (p[4] = y),
            (p[5] = l))
          : (l = p[5]),
        p[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, r.jsx)(S.b5, { icon: { 16: j.cSG, 20: j.zwW } })),
            (d = (0, r.jsx)(c.A, {
              id: "libraryNext.settings.trash",
              defaultMessage: "Trash",
              description: "Library settings menu action that opens deleted files",
            })),
            (p[6] = o),
            (p[7] = d))
          : ((o = p[6]), (d = p[7])),
        p[8] !== l
          ? ((u = (0, r.jsx)(w.ms.Item, { onSelect: l, leftIcon: o, children: d })), (p[8] = l), (p[9] = u))
          : (u = p[9]),
        p[10] !== t || p[11] !== P || p[12] !== u
          ? ((g = (0, r.jsxs)(r.Fragment, { children: [t, P, a, s, null, u] })),
            (p[10] = t),
            (p[11] = P),
            (p[12] = u),
            (p[13] = g))
          : (g = p[13]),
        g
      )
    }
    function H(e) {
      let t,
        a = (0, i.c)(5),
        { rootName: s } = e,
        l = (0, n.gh)(x.Qy)
      if (null != l.value.directoryId || l.value.deleted) {
        let e,
          t = `${l.value.accountId}:${l.value.userId ?? ""}:${!!l.value.deleted}`
        return (
          a[0] !== s || a[1] !== t
            ? ((e = (0, r.jsx)(Y, { rootName: s }, t)), (a[0] = s), (a[1] = t), (a[2] = e))
            : (e = a[2]),
          e
        )
      }
      if (l.value.search) {
        let e
        return (
          a[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(c.A, {
                id: "libraryNext.title.search",
                defaultMessage: "Search",
                description: "Library heading while showing search results",
                tagName: "span",
              })),
              (a[3] = e))
            : (e = a[3]),
          e
        )
      }
      return (
        a[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(c.A, {
              id: "libraryNext.title.library",
              defaultMessage: "Library",
              description: "Title of the Library page",
              tagName: "span",
            })),
            (a[4] = t))
          : (t = a[4]),
        t
      )
    }
    function B(e) {
      let t,
        a,
        s,
        l,
        o,
        u,
        g,
        f = (0, i.c)(36),
        {
          selectedKey: m,
          additionalTabs: y,
          onFileTabSelect: b,
          basePath: v,
          browseLocation: _,
          onNavigate: L,
          fileTabs: I,
          tabLabels: A,
          preserveSearch: T,
        } = e
      f[0] !== y ? ((t = void 0 === y ? [] : y), (f[0] = y), (f[1] = t)) : (t = f[1])
      let E = t,
        w = void 0 === v ? "/library" : v
      f[2] !== I
        ? ((a = void 0 === I ? ["suggested", "favorites", "folders", "images", "all"] : I), (f[2] = I), (f[3] = a))
        : (a = f[3])
      let j = a,
        R = void 0 !== T && T,
        S = (0, n.gh)(x.oD),
        M = (0, h.zy)(),
        N = (0, h.Zp)(),
        P = (0, d.A)(),
        F = (0, n.Ul)(C._)
      f[4] !== w || f[5] !== _ || f[6] !== M
        ? ((s = _ ?? (0, x.ER)(M.pathname, M.search, w)), (f[4] = w), (f[5] = _), (f[6] = M), (f[7] = s))
        : (s = f[7])
      let H = s
      if (f[8] !== E || f[9] !== H || f[10] !== F || f[11] !== j || f[12] !== R || f[13] !== A) {
        let e, t
        ;(f[15] !== F ? ((e = (e) => "favorites" !== e || F), (f[15] = F), (f[16] = e)) : (e = f[16]),
          f[17] !== H || f[18] !== R || f[19] !== A
            ? ((t = (e) => ({
                key: e,
                name: A?.[e] ?? (0, r.jsx)(c.A, { ...O[e] }),
                href: (0, x.SE)({
                  ...H,
                  tab: e,
                  directoryId: null,
                  search: R ? H.search : "",
                  categories: [],
                  sources: [],
                }),
              })),
              (f[17] = H),
              (f[18] = R),
              (f[19] = A),
              (f[20] = t))
            : (t = f[20]),
          (l = [...j.filter(e).map(t), ...E]),
          (f[8] = E),
          (f[9] = H),
          (f[10] = F),
          (f[11] = j),
          (f[12] = R),
          (f[13] = A),
          (f[14] = l))
      } else l = f[14]
      let B = l
      return (
        f[21] !== P
          ? ((o = P.formatMessage({
              id: "libraryNext.tabs.label",
              defaultMessage: "Library sections",
              description: "Accessible label for Library navigation tabs",
            })),
            (f[21] = P),
            (f[22] = o))
          : (o = f[22]),
        f[23] !== j || f[24] !== N || f[25] !== b || f[26] !== L || f[27] !== S || f[28] !== m || f[29] !== B
          ? ((u = (e) => {
              if (e === m) return
              let t = B.find((t) => t.key === e)
              if (null != t) {
                let a = j.find((t) => t === e)
                ;(null != a && (b?.(a), (0, x.me)(S, { lastTab: a })), null != L ? L(t.href) : N(t.href))
              }
            }),
            (f[23] = j),
            (f[24] = N),
            (f[25] = b),
            (f[26] = L),
            (f[27] = S),
            (f[28] = m),
            (f[29] = B),
            (f[30] = u))
          : (u = f[30]),
        f[31] !== m || f[32] !== u || f[33] !== o || f[34] !== B
          ? ((g = (0, r.jsx)(p.t, {
              variant: "browse",
              scrollable: !0,
              tabs: B,
              selectedKey: m,
              ariaLabel: o,
              onSelect: u,
            })),
            (f[31] = m),
            (f[32] = u),
            (f[33] = o),
            (f[34] = B),
            (f[35] = g))
          : (g = f[35]),
        g
      )
    }
    let k = (0, n.i1)(
      x.oD,
      (e, { get: t }) =>
        e?.map((e) => {
          let a = t(x.WC, e.id)
          return a?.previousName === e.name ? { ...e, name: a.name } : e
        }),
      { autoDispose: !0 },
    )
    function Y(e) {
      let t,
        a,
        c,
        u,
        g,
        p,
        b,
        C,
        I,
        A = (0, i.c)(48),
        { rootName: T } = e,
        E = (0, n.gh)(x.Qy),
        w = (0, h.zy)(),
        j = (0, n.Ul)(x.g_),
        R = (0, n.Ul)(x.JZ),
        S = "available" === (0, n.Ul)(x.IM),
        M = (0, n.Ul)(m.y),
        N = (0, n.Ul)(x.R4),
        P = (0, n.Ul)(x.L$)
      A[0] !== N ? ((t = { ...N, placeholderData: s.rX, staleTime: N.staleTime }), (A[0] = N), (A[1] = t)) : (t = A[1])
      let {
        data: F,
        dataUpdatedAt: H,
        isPlaceholderData: B,
        isFetching: Y,
        isError: G,
        isSuccess: O,
        isFetchedAfterMount: U,
      } = (0, l.I)(t, E.queryClient)
      A[2] !== S ||
      A[3] !== F ||
      A[4] !== U ||
      A[5] !== Y ||
      A[6] !== B ||
      A[7] !== O ||
      A[8] !== R ||
      A[9] !== E.value.directoryId
        ? ((a = S && R && O && U && !Y && !B ? (0, v.F6)(E.value.directoryId, F.items) : null),
          (A[2] = S),
          (A[3] = F),
          (A[4] = U),
          (A[5] = Y),
          (A[6] = B),
          (A[7] = O),
          (A[8] = R),
          (A[9] = E.value.directoryId),
          (A[10] = a))
        : (a = A[10])
      let D = a
      A[11] !== w || A[12] !== j
        ? ((c = null == j ? w : (0, h.Rr)(j)), (A[11] = w), (A[12] = j), (A[13] = c))
        : (c = A[13])
      let V = c
      if (
        A[14] !== V.hash ||
        A[15] !== V.search ||
        A[16] !== D ||
        A[17] !== M ||
        A[18] !== E.value.basePath ||
        A[19] !== E.value.directoryId
      ) {
        let e = new URLSearchParams(V.search)
        ;("external-sharepoint:root" === E.value.directoryId && M.has("sharepoint") && e.delete("search"),
          (u =
            null == D
              ? null
              : `${E.value.basePath}/d/${encodeURIComponent(D)}${e.size > 0 ? `?${e.toString()}` : ""}${V.hash ?? ""}`),
          (A[14] = V.hash),
          (A[15] = V.search),
          (A[16] = D),
          (A[17] = M),
          (A[18] = E.value.basePath),
          (A[19] = E.value.directoryId),
          (A[20] = u))
      } else u = A[20]
      let z = u
      ;(A[21] !== z || A[22] !== E
        ? ((g = () => {
            null != z && (0, x.zl)(E, z, { replace: !0 })
          }),
          (p = [z, E]),
          (A[21] = z),
          (A[22] = E),
          (A[23] = g),
          (A[24] = p))
        : ((g = A[23]), (p = A[24])),
        (0, o.useEffect)(g, p))
      let Z = "/space" === E.value.basePath ? E.value.directoryId : null,
        Q = (0, f.AG)(Z),
        q = S
          ? F?.items.filter(
              (e) =>
                (!e.is_root || (null != Q && (0, v.oh)(e.id) === Q)) &&
                !("google_drive" === Q && (0, v.$n)(E.value.directoryId) && e.id === E.value.directoryId),
            )
          : void 0
      ;(S &&
        !G &&
        P?.directoryId === E.value.directoryId &&
        (null == F || B || (Y && H < P.navigationStartedAt)) &&
        (q = P.items),
        A[25] !== q || A[26] !== w.state || A[27] !== E
          ? ((b = (e) => {
              ;(E.value.deleted ||
                null == E.value.directoryId ||
                e === E.value.directoryId ||
                (0, _.i)(E, "CHATGPT_FILE_LIBRARY_FOLDER_NAVIGATION_ACTION_BACK", E.value.directoryId),
                (0, x.gb)(E, e, q?.slice(0, q.findIndex((t) => t.id === e) + 1)))
              let t = E.value.folderReturnLocations,
                a = t?.accountId === E.value.accountId && t.userId === E.value.userId ? t.locations : [],
                r = a.findIndex((t) => t.directoryId === e),
                i =
                  r >= 0
                    ? a.slice(0, r)
                    : a.filter(
                        (t) =>
                          null == t.directoryId ||
                          q
                            ?.slice(
                              0,
                              Math.max(
                                0,
                                q.findIndex((t) => t.id === e),
                              ),
                            )
                            .some((e) => e.id === t.directoryId),
                      )
              ;(0, x.zl)(
                E,
                a[r]?.href ??
                  (0, x.SE)({ ...E.value, directoryId: e, deleted: !1, search: null == e ? "" : E.value.search }),
                {
                  state: {
                    ...w.state,
                    libraryFolderReturnLocations: null != t && a.length > 0 ? { ...t, locations: i } : void 0,
                  },
                },
              )
            }),
            (A[25] = q),
            (A[26] = w.state),
            (A[27] = E),
            (A[28] = b))
          : (b = A[28]))
      let K = b,
        W = (0, d.A)(),
        J = (0, y.Y)(W, Q),
        $ = (0, n._U)(k, q)
      if (null != Z && null != J) {
        let e
        ;(A[29] !== $ || A[30] !== Z || A[31] !== J
          ? ((e = $?.length ? $ : [{ id: `${Z.split(":", 1)[0]}:root`, name: J }]),
            (A[29] = $),
            (A[30] = Z),
            (A[31] = J),
            (A[32] = e))
          : (e = A[32]),
          (C = e))
      } else {
        let e, t, a, r
        ;(A[33] !== W || A[34] !== T
          ? ((e =
              T ??
              W.formatMessage({
                id: "libraryNext.title.library",
                defaultMessage: "Library",
                description: "Title of the Library page",
              })),
            (A[33] = W),
            (A[34] = T),
            (A[35] = e))
          : (e = A[35]),
          A[36] !== e ? ((t = { id: null, name: e }), (A[36] = e), (A[37] = t)) : (t = A[37]),
          A[38] !== $ || A[39] !== W || A[40] !== E.value.deleted
            ? ((a = E.value.deleted
                ? [
                    {
                      id: "trash",
                      name: W.formatMessage({
                        id: "libraryNext.title.trash",
                        defaultMessage: "Trash",
                        description: "Library trash heading",
                      }),
                    },
                  ]
                : ($ ?? [])),
              (A[38] = $),
              (A[39] = W),
              (A[40] = E.value.deleted),
              (A[41] = a))
            : (a = A[41]),
          A[42] !== a || A[43] !== t ? ((r = [t, ...a]), (A[42] = a), (A[43] = t), (A[44] = r)) : (r = A[44]),
          (C = r))
      }
      return (
        A[45] !== K || A[46] !== C
          ? ((I = (0, r.jsx)(L.Q, { items: C, onSelect: K })), (A[45] = K), (A[46] = C), (A[47] = I))
          : (I = A[47]),
        I
      )
    }
    function G(e) {
      let t,
        a,
        s,
        l,
        c,
        u,
        p,
        f,
        m,
        y,
        C,
        _,
        L,
        T,
        E,
        w = (0, i.c)(56),
        { actions: j, showBrowseControls: R, showFilters: S, filters: M, searchLabel: N, searchPlaceholder: F } = e,
        H = void 0 === R || R,
        B = void 0 === S || S,
        k = (0, n.gh)(x.Qy),
        Y = (0, d.A)(),
        G = (0, n.Ul)(x.eY),
        O = (0, n.Ul)(x.YH),
        U = (0, n.Ul)(x.JZ)
      ;(w[0] !== k
        ? ((t = () => (0, x.hV)(k)), (a = [k]), (w[0] = k), (w[1] = t), (w[2] = a))
        : ((t = w[1]), (a = w[2])),
        (0, o.useEffect)(t, a))
      let D = (0, h.zy)(),
        V = (0, n.Ul)(x.g_)
      if (k.value.deleted) {
        let e
        ;(w[3] !== Y
          ? ((e = Y.formatMessage({
              id: "libraryNext.search.trashLabel",
              defaultMessage: "Search trash",
              description: "Accessible label and placeholder for searching only deleted items in Library Trash",
            })),
            (w[3] = Y),
            (w[4] = e))
          : (e = w[4]),
          (s = e))
      } else if (null != k.value.directoryId && !U) {
        let e
        ;(w[5] !== Y
          ? ((e = Y.formatMessage({
              id: "libraryNext.search.folderLabel",
              defaultMessage: "Search folder",
              description: "Accessible label and placeholder for searching only within the current Library folder",
            })),
            (w[5] = Y),
            (w[6] = e))
          : (e = w[6]),
          (s = e))
      }
      w[7] !== k.value.basePath || w[8] !== k.value.deleted || w[9] !== k.value.search
        ? ((l = !k.value.deleted || "/space" !== k.value.basePath || "" !== k.value.search.trim()),
          (w[7] = k.value.basePath),
          (w[8] = k.value.deleted),
          (w[9] = k.value.search),
          (w[10] = l))
        : (l = w[10])
      let z = N ?? s,
        Z = H && !G
      return (
        w[11] !== k ? ((c = (e) => (0, x.ul)(k, e)), (w[11] = k), (w[12] = c)) : (c = w[12]),
        w[13] !== c || w[14] !== O
          ? ((u = { value: O, onChange: c }), (w[13] = c), (w[14] = O), (w[15] = u))
          : (u = w[15]),
        w[16] !== D.search || w[17] !== V
          ? ((p =
              (null == V ? new URLSearchParams(D.search) : new URL(V, "https://chatgpt.com").searchParams).get(
                "search",
              ) ?? ""),
            (w[16] = D.search),
            (w[17] = V),
            (w[18] = p))
          : (p = w[18]),
        w[19] !== k
          ? ((f = () => {
              let e = k.get(x.sp)
              !k.get(x.JZ) && (0, v._w)(e) && k.get(x.mS, null).openSession()
            }),
            (w[19] = k),
            (w[20] = f))
          : (f = w[20]),
        w[21] !== D.state || w[22] !== k
          ? ((m = (e) => {
              ;(0, x.VP)(k)
              let t = k.get(x.sp)
              ;(!k.get(x.JZ) && (0, v._w)(t) && k.get(x.mS, null).setSearch(e),
                (0, x.zl)(k, (0, x.SE)({ ...k.value, search: e }), { replace: !0, state: D.state }))
            }),
            (w[21] = D.state),
            (w[22] = k),
            (w[23] = m))
          : (m = w[23]),
        w[24] !== k ? ((y = (e) => (0, b.np)(k, { layout: e })), (w[24] = k), (w[25] = y)) : (y = w[25]),
        w[26] !== M || w[27] !== G || w[28] !== k.value.deleted || w[29] !== H || w[30] !== B
          ? ((C = H
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    B && void 0 === M ? (0, r.jsx)(A.d, {}) : null,
                    k.value.deleted && !G && (B || null != M) ? (0, r.jsx)(g.Ow, {}) : null,
                  ],
                })
              : null),
            (w[26] = M),
            (w[27] = G),
            (w[28] = k.value.deleted),
            (w[29] = H),
            (w[30] = B),
            (w[31] = C))
          : (C = w[31]),
        w[32] !== M || w[33] !== C
          ? ((_ = (0, r.jsxs)(r.Fragment, { children: [M, C] })), (w[32] = M), (w[33] = C), (w[34] = _))
          : (_ = w[34]),
        w[35] !== H || w[36] !== B
          ? ((L = H && B ? (0, r.jsx)(A.l, {}) : null), (w[35] = H), (w[36] = B), (w[37] = L))
          : (L = w[37]),
        w[38] !== k.value.basePath || w[39] !== H || w[40] !== B
          ? ((T =
              H && B && "/space" !== k.value.basePath && "/space/files" !== k.value.basePath
                ? (0, r.jsx)(P, {})
                : null),
            (w[38] = k.value.basePath),
            (w[39] = H),
            (w[40] = B),
            (w[41] = T))
          : (T = w[41]),
        w[42] !== j ||
        w[43] !== F ||
        w[44] !== p ||
        w[45] !== f ||
        w[46] !== m ||
        w[47] !== y ||
        w[48] !== _ ||
        w[49] !== L ||
        w[50] !== T ||
        w[51] !== l ||
        w[52] !== z ||
        w[53] !== Z ||
        w[54] !== u
          ? ((E = (0, r.jsx)(I.Pu, {
              fixedSearchWidth: !0,
              showSearch: l,
              searchLabel: z,
              searchPlaceholder: F,
              showViewToggle: Z,
              viewModeControl: u,
              searchQuery: p,
              onSearchFocus: f,
              onSearchQueryChange: m,
              onViewModeChange: y,
              actions: j,
              filters: _,
              filterTags: L,
              settings: T,
            })),
            (w[42] = j),
            (w[43] = F),
            (w[44] = p),
            (w[45] = f),
            (w[46] = m),
            (w[47] = y),
            (w[48] = _),
            (w[49] = L),
            (w[50] = T),
            (w[51] = l),
            (w[52] = z),
            (w[53] = Z),
            (w[54] = u),
            (w[55] = E))
          : (E = w[55]),
        E
      )
    }
    let O = (0, u.YK)({
      favorites: {
        id: "library.tabs.favorites",
        defaultMessage: "Favorites",
        description: "Library tab for items the user saved as favorites",
      },
      suggested: {
        id: "libraryNext.tabs.suggested",
        defaultMessage: "Suggested",
        description: "Library tab for backend-ranked suggested items",
      },
      folders: {
        id: "libraryNext.tabs.folders",
        defaultMessage: "Folders",
        description: "Library tab for browsing folders",
      },
      all: { id: "libraryNext.tabs.all", defaultMessage: "All", description: "Library tab for all folders and items" },
      images: {
        id: "libraryNext.filters.images",
        defaultMessage: "Images",
        description: "Library image category, shown as a tab, filter menu option, or selected filter chip",
      },
    })
  },
  zbzy(e, t, a) {
    a.d(t, { M: () => Y })
    var r = a("ABep"),
      i = a("QosV"),
      s = a("dSuP"),
      l = a("slpy"),
      n = a("zTeN"),
      o = a("zd8w"),
      c = a("Wf1j"),
      d = a("oyxz"),
      u = a("HZfM"),
      h = a("E8Sp"),
      g = a("EOo5"),
      p = a("zKCW"),
      f = a("Sm6l"),
      m = a("bVeK"),
      y = a("AKNp"),
      b = a("laUo"),
      v = a("ae6t"),
      x = a("O8Pw"),
      C = a("yGJW"),
      _ = a("OWtl"),
      L = a("OMIV"),
      I = a("Nwp9"),
      A = a("By8r"),
      T = a("ZZMM"),
      E = a("SPnB"),
      w = a("O666")
    let j = "1723404263",
      R = (0, n.vP)(_.u, () => !1, { getServerSnapshot: () => !1 }),
      S = (0, n.vP)(_.u, () => void 0),
      M = (0, n.T1)(_.u, (e) => new WeakMap()),
      N = (0, n.un)(_.u, ({ get: e }) => {
        let t,
          a = e(w.$Q, j),
          r = e(L.M9),
          i = null != r && !e(L.RS),
          s = i ? a?.__value.variant : void 0,
          l = "near_capacity_meter" === s || "persistent_meter" === s ? s : "control"
        if (null != r && i) {
          let { user: i } = r.getContext(),
            s = a?.__evaluation,
            n = JSON.stringify([
              e(E.chatGptAuthenticatedAccountId$),
              e(E.chatGptAuthenticatedUserId$),
              i.userID,
              i.custom?.account_id,
              Object.entries(i.customIDs ?? {}).sort(([e], [t]) => e.localeCompare(t)),
              l,
              a?.ruleID,
              a?.groupName,
              s?.allocated_experiment_name,
              s?.parameter_rule_ids?.variant,
              s?.is_experiment_active,
              s?.is_user_in_experiment,
              s?.explicit_parameters.includes("variant"),
            ]),
            o = e(M, "session"),
            c = o.get(r)
          ;(c?.key !== n && ((c = { key: n, identity: Symbol() }), o.set(r, c)), (t = c.identity))
        }
        return { variant: l, identity: t }
      })
    ;(0, n.un)(_.u, ({ get: e }) => {
      let t = e(N)
      return null != t.identity && e(S) === t.identity ? t.variant : "control"
    })
    let P = (0, a("Qgfj").YK)({
      full: {
        id: "library.storageMeter.full",
        defaultMessage: "Storage is full",
        description: "Title of the Library cloud storage meter when no capacity remains for saved files",
      },
      almostFull: {
        id: "library.storageMeter.almostFull",
        defaultMessage: "Storage is almost full",
        description:
          "Title of the Library cloud storage meter when ten percent or less capacity remains for saved files",
      },
      healthy: {
        id: "library.storageMeter.healthy",
        defaultMessage: "Storage",
        description: "Title of the persistent Library cloud storage usage meter when capacity is available",
      },
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
        b,
        v,
        x,
        C,
        _,
        L = (0, i.c)(35),
        { usage: I, state: A, onDismiss: T, onManage: E, onUpgrade: w } = e,
        j = (0, c.A)(),
        R = (I.used_bytes / I.allowed_bytes) * 100
      L[0] !== j
        ? ((t = j.formatMessage({
            id: "library.storageMeter.dismiss",
            defaultMessage: "Dismiss storage warning",
            description: "Accessible label for hiding the Library cloud storage meter warning for seven days",
          })),
          (L[0] = j),
          (L[1] = t))
        : (t = L[1])
      let S = t,
        M = P[A]
      ;(L[2] !== M
        ? ((a = (0, r.jsx)("div", {
            className: "text-sm font-medium text-default",
            children: (0, r.jsx)(d.A, { ...M }),
          })),
          (L[2] = M),
          (L[3] = a))
        : (a = L[3]),
        L[4] !== j || L[5] !== R
          ? ((s = j.formatNumber(R / 100, { style: "percent", maximumFractionDigits: 1 })),
            (L[4] = j),
            (L[5] = R),
            (L[6] = s))
          : (s = L[6]),
        L[7] !== s
          ? ((n = (0, r.jsx)("div", {
              className: "text-xs text-secondary",
              children: (0, r.jsx)(d.A, {
                id: "library.storageMeter.usedPercentage",
                defaultMessage: "{usedPercent} of available space used",
                description:
                  "Subtitle of the Library cloud storage meter. usedPercent is a localized percentage such as 98.5%, and may exceed 100% when storage is over its limit",
                values: { usedPercent: s },
              }),
            })),
            (L[7] = s),
            (L[8] = n))
          : (n = L[8]),
        L[9] !== a || L[10] !== n
          ? ((o = (0, r.jsxs)("div", { className: "min-w-0 grow basis-64", children: [a, n] })),
            (L[9] = a),
            (L[10] = n),
            (L[11] = o))
          : (o = L[11]),
        L[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, r.jsx)(d.A, {
              id: "library.storageBanner.manage",
              defaultMessage: "Manage",
              description: "Opens Storage settings to manage saved Library files",
            })),
            (L[12] = u))
          : (u = L[12]),
        L[13] !== E
          ? ((h = (0, r.jsx)(f.$, { color: "outlineSurface", size: "dialog", onClick: E, children: u })),
            (L[13] = E),
            (L[14] = h))
          : (h = L[14]),
        L[15] !== w
          ? ((g = w
              ? (0, r.jsxs)(f.$, {
                  color: "upgrade",
                  size: "dialog",
                  onClick: w,
                  children: [
                    (0, r.jsx)(m.ZgQ, {}),
                    (0, r.jsx)(d.A, {
                      id: "library.storageBanner.upgrade",
                      defaultMessage: "Upgrade",
                      description: "Change the ChatGPT subscription plan for more Library cloud storage",
                    }),
                  ],
                })
              : null),
            (L[15] = w),
            (L[16] = g))
          : (g = L[16]),
        L[17] !== S || L[18] !== T
          ? ((y = T
              ? (0, r.jsx)(l.m, {
                  content: S,
                  children: (0, r.jsx)(f.$, {
                    color: "ghostActive",
                    size: "iconCircle",
                    onClick: T,
                    "aria-label": S,
                    children: (0, r.jsx)(m.pgK, {}),
                  }),
                })
              : null),
            (L[17] = S),
            (L[18] = T),
            (L[19] = y))
          : (y = L[19]),
        L[20] !== y || L[21] !== h || L[22] !== g
          ? ((b = (0, r.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [h, g, y] })),
            (L[20] = y),
            (L[21] = h),
            (L[22] = g),
            (L[23] = b))
          : (b = L[23]),
        L[24] !== b || L[25] !== o
          ? ((v = (0, r.jsxs)("div", { className: "flex flex-wrap items-center gap-3", children: [o, b] })),
            (L[24] = b),
            (L[25] = o),
            (L[26] = v))
          : (v = L[26]))
      let N = Math.min(100, Math.max(0, R))
      return (
        L[27] !== j
          ? ((x = j.formatMessage({
              id: "library.storageMeter.progressLabel",
              defaultMessage: "Storage used",
              description: "Accessible label for the progress bar showing the portion of Library cloud storage used",
            })),
            (L[27] = j),
            (L[28] = x))
          : (x = L[28]),
        L[29] !== N || L[30] !== x
          ? ((C = (0, r.jsx)("progress", {
              className:
                "h-1.5 w-full overflow-hidden rounded-full [&::-moz-progress-bar]:bg-neutral-solid [&::-ms-fill]:bg-neutral-solid [&::-webkit-progress-bar]:bg-text/10 [&::-webkit-progress-value]:bg-neutral-solid",
              max: 100,
              value: N,
              "aria-label": x,
            })),
            (L[29] = N),
            (L[30] = x),
            (L[31] = C))
          : (C = L[31]),
        L[32] !== v || L[33] !== C
          ? ((_ = (0, r.jsx)(p.l, {
              variant: "settings",
              layout: "vertical",
              content: (0, r.jsxs)("div", { className: "flex flex-col gap-3 select-none", children: [v, C] }),
            })),
            (L[32] = v),
            (L[33] = C),
            (L[34] = _))
          : (_ = L[34]),
        _
      )
    }
    var H = a("KGdK")
    let B = (0, I.m3)("library-storage-full-banner-dismissed-at", null),
      k = (0, I.m3)("library-storage-almost-full-banner-dismissed-at", null)
    function Y(e) {
      let t,
        a = (0, i.c)(4),
        { isVisible: s } = e,
        l = void 0 === s || s,
        o = (0, n._U)(L.JW, "2767344663"),
        c = (0, n._U)(L.JW, "4231797315")
      return (
        a[0] !== l || a[1] !== o || a[2] !== c
          ? ((t = o && c ? (0, r.jsx)(G, { isVisible: l }) : null), (a[0] = l), (a[1] = o), (a[2] = c), (a[3] = t))
          : (t = a[3]),
        t
      )
    }
    function G(e) {
      let t,
        a,
        l,
        c,
        d,
        p,
        f,
        m,
        x,
        I,
        E,
        w,
        M,
        P,
        Y,
        G,
        U,
        D,
        V,
        z = (0, i.c)(80),
        { isVisible: Z } = e,
        Q = (0, n.gh)(_.u),
        { pathname: q } = (0, n.Ul)(h.gM),
        K = (0, u.Zp)(),
        W = (0, v.j)(),
        J = (0, g.As)(),
        $ = (0, n.Ul)(L.M9),
        X = (0, n.Ul)(L.RS),
        ee = (0, n.Ul)(R),
        et = (0, n.Ul)(N),
        ea = et.variant,
        { data: er } = (0, n.Ul)(T.a),
        ei = (0, n.Ul)(B),
        es = (0, n.Ul)(k),
        [el, en] = (0, o.useState)(Date.now),
        eo = (0, o.useRef)(null)
      z[0] !== er
        ? ((t = null),
          null != er &&
            (er.is_over_limit || er.remaining_bytes <= 0
              ? (t = "full")
              : er.allowed_bytes > 0 && er.remaining_bytes / er.allowed_bytes <= 0.1 && (t = "almostFull")),
          (z[0] = er),
          (z[1] = t))
        : (t = z[1])
      let ec = "full" === t ? ei : es,
        ed = null != ec && el < ec + 6048e5 ? null : t
      if (z[2] !== J || z[3] !== ee || z[4] !== er)
        ((a =
          ee &&
          null != er &&
          !J.isLoading &&
          "chatgpt" === J.authMethod &&
          null != J.userId &&
          null != J.accountId &&
          Number.isFinite(er.allowed_bytes) &&
          er.allowed_bytes > 0 &&
          Number.isFinite(er.used_bytes) &&
          er.used_bytes >= 0 &&
          Number.isFinite(er.remaining_bytes) &&
          ("free" === er.plan_type ||
            "free_workspace" === er.plan_type ||
            "go" === er.plan_type ||
            "plus" === er.plan_type)),
          (z[2] = J),
          (z[3] = ee),
          (z[4] = er),
          (z[5] = a))
      else a = z[5]
      let eu = a
      z[6] !== eu || z[7] !== $ || z[8] !== er || z[9] !== ed
        ? ((l =
            null != er &&
            (null != ed || eu) &&
            (0, H.M)(er) &&
            null != $ &&
            (0, y.ku)($, "library_storage_limit_banner")),
          (z[6] = eu),
          (z[7] = $),
          (z[8] = er),
          (z[9] = ed),
          (z[10] = l))
        : (l = z[10])
      let eh = l,
        eg = eu && eh,
        ep = eg && "persistent_meter" === ea,
        ef = eg && "near_capacity_meter" === ea
      if (
        (z[11] !== Z || z[12] !== eg || z[13] !== Q || z[14] !== X
          ? ((c = () => {
              eg &&
                Z &&
                !X &&
                (function (e) {
                  let t = e.get(L.M9),
                    { identity: a } = e.get(N)
                  null != t &&
                    null != a &&
                    (t.getLayer(j, { disableExposureLog: !1 }).get("variant", "control"), e.set(S, a))
                })(Q)
            }),
            (z[11] = Z),
            (z[12] = eg),
            (z[13] = Q),
            (z[14] = X),
            (z[15] = c))
          : (c = z[15]),
        z[16] !== J.accountId ||
        z[17] !== J.userId ||
        z[18] !== Z ||
        z[19] !== et ||
        z[20] !== eg ||
        z[21] !== Q ||
        z[22] !== X
          ? ((d = [Q, et, J.accountId, J.userId, Z, eg, X]),
            (z[16] = J.accountId),
            (z[17] = J.userId),
            (z[18] = Z),
            (z[19] = et),
            (z[20] = eg),
            (z[21] = Q),
            (z[22] = X),
            (z[23] = d))
          : (d = z[23]),
        (0, o.useEffect)(c, d),
        z[24] !== ec
          ? ((p = () => {
              if (null == ec) return
              let e = setTimeout(() => en(Date.now()), Math.max(0, ec + 6048e5 - Date.now()))
              return () => clearTimeout(e)
            }),
            (f = [ec]),
            (z[24] = ec),
            (z[25] = p),
            (z[26] = f))
          : ((p = z[25]), (f = z[26])),
        (0, o.useEffect)(p, f),
        z[27] !== ei || z[28] !== Q || z[29] !== t || z[30] !== er
          ? ((m = () => {
              null != er && "full" !== t && null != ei && Q.set(B, null)
            }),
            (z[27] = ei),
            (z[28] = Q),
            (z[29] = t),
            (z[30] = er),
            (z[31] = m))
          : (m = z[31]),
        z[32] !== ei || z[33] !== Q || z[34] !== t || z[35] !== er
          ? ((x = [Q, er, t, ei]), (z[32] = ei), (z[33] = Q), (z[34] = t), (z[35] = er), (z[36] = x))
          : (x = z[36]),
        (0, o.useEffect)(m, x),
        z[37] !== Q || z[38] !== er || z[39] !== ed
          ? ((E = () => {
              null == ed
                ? (eo.current = null)
                : null != er &&
                  eo.current !== ed &&
                  ((eo.current = ed),
                  (0, C.yy)(Q, s.ix, { ...(0, A.e)(er), surface: "library", source: "library_banner" }))
            }),
            (I = [Q, er, ed]),
            (z[37] = Q),
            (z[38] = er),
            (z[39] = ed),
            (z[40] = I),
            (z[41] = E))
          : ((I = z[40]), (E = z[41])),
        (0, o.useEffect)(E, I),
        null == er || (null == ed && !ep))
      )
        return null
      ;(z[42] !== er ? ((w = (0, A.e)(er)), (z[42] = er), (z[43] = w)) : (w = z[43]),
        z[44] !== w
          ? ((M = { ...w, surface: "library", source: "library_banner" }), (z[44] = w), (z[45] = M))
          : (M = z[45]))
      let em = M
      z[46] !== Q || z[47] !== t
        ? ((P = () => {
            let e = Date.now()
            ;(Q.set("full" === t ? B : k, e), en(e))
          }),
          (z[46] = Q),
          (z[47] = t),
          (z[48] = P))
        : (P = z[48])
      let ey = P
      z[49] !== em || z[50] !== K || z[51] !== Q || z[52] !== ed
        ? ((Y = () => {
            ;(null != ed && (0, C.yy)(Q, s.jt, { ...em, cta: "CHATGPT_FILE_LIBRARY_STORAGE_CTA_MANAGE_STORAGE" }),
              (0, C.yy)(Q, s.Rf, em),
              K("/settings/storage"))
          }),
          (z[49] = em),
          (z[50] = K),
          (z[51] = Q),
          (z[52] = ed),
          (z[53] = Y))
        : (Y = z[53])
      let eb = Y
      z[54] !== eh || z[55] !== em || z[56] !== W || z[57] !== Q || z[58] !== er || z[59] !== ed
        ? ((G = eh
            ? () => {
                ;(null != ed &&
                  (0, C.yy)(Q, s.jt, {
                    ...em,
                    cta: "CHATGPT_FILE_LIBRARY_STORAGE_CTA_UPGRADE",
                    openModalLocation: "library_storage_limit_banner",
                  }),
                  W({
                    currentPlan: (0, b.m6)(er.plan_type)?.pricePlan ?? null,
                    source: "library_storage_banner",
                    chatGptContext: { openModalLocation: "library_storage_limit_banner" },
                  }))
              }
            : void 0),
          (z[54] = eh),
          (z[55] = em),
          (z[56] = W),
          (z[57] = Q),
          (z[58] = er),
          (z[59] = ed),
          (z[60] = G))
        : (G = z[60])
      let ev = G
      return (
        z[61] !== ey ||
        z[62] !== eb ||
        z[63] !== ev ||
        z[64] !== ef ||
        z[65] !== ep ||
        z[66] !== t ||
        z[67] !== er ||
        z[68] !== ed
          ? ((U =
              ep || (ef && null != ed)
                ? (0, r.jsx)("div", {
                    className: "px-12 pt-panel",
                    children: (0, r.jsx)(F, {
                      usage: er,
                      state: t ?? "healthy",
                      onDismiss: ep ? void 0 : ey,
                      onManage: eb,
                      onUpgrade: ev,
                    }),
                  })
                : null),
            (z[61] = ey),
            (z[62] = eb),
            (z[63] = ev),
            (z[64] = ef),
            (z[65] = ep),
            (z[66] = t),
            (z[67] = er),
            (z[68] = ed),
            (z[69] = U))
          : (U = z[69]),
        z[70] !== ey || z[71] !== eb || z[72] !== ev || z[73] !== q || z[74] !== ef || z[75] !== ed
          ? ((D =
              null == ed || ef
                ? null
                : (0, r.jsx)(O, {
                    basePath: q?.startsWith("/library") ? "/library" : "/space",
                    state: ed,
                    onDismiss: ey,
                    onManage: eb,
                    onUpgrade: ev,
                  })),
            (z[70] = ey),
            (z[71] = eb),
            (z[72] = ev),
            (z[73] = q),
            (z[74] = ef),
            (z[75] = ed),
            (z[76] = D))
          : (D = z[76]),
        z[77] !== U || z[78] !== D
          ? ((V = (0, r.jsxs)(r.Fragment, { children: [U, D] })), (z[77] = U), (z[78] = D), (z[79] = V))
          : (V = z[79]),
        V
      )
    }
    function O(e) {
      let t,
        a,
        s,
        n,
        o,
        u,
        h,
        g,
        y,
        b = (0, i.c)(24),
        { basePath: v, state: C, onDismiss: _, onManage: L, onUpgrade: I } = e,
        A = (0, x.mz)(v ?? "/space"),
        T = (0, c.A)()
      b[0] !== T || b[1] !== A
        ? ((t = A
            ? T.formatMessage({
                id: "library.storageBanner.dismiss.storage.space",
                defaultMessage: "Dismiss storage warning",
                description: "Accessible label for hiding the storage warning for seven days on a Space surface.",
              })
            : T.formatMessage({
                id: "library.storageBanner.dismiss.storage.library",
                defaultMessage: "Dismiss Storage warning",
                description: "Accessible label for hiding the storage warning for seven days on a Library surface.",
              })),
          (b[0] = T),
          (b[1] = A),
          (b[2] = t))
        : (t = b[2])
      let E = t
      if ("full" === C && I) {
        let e
        ;(b[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(d.A, {
              id: "library.storageBanner.full.upgrade.storage",
              defaultMessage:
                "<emphasis>Your storage is full.</emphasis> New files can't be added until you free up space or upgrade for more storage.",
              description:
                "Cloud file storage warning shared by Library and Space surfaces. Upgrade refers to changing the ChatGPT plan, not device storage. Emphasis marks the opening sentence.",
              values: { emphasis: z },
            })),
            (b[3] = e))
          : (e = b[3]),
          (a = e))
      } else if ("full" === C) {
        let e
        ;(b[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(d.A, {
              id: "library.storageBanner.full.manage.storage",
              defaultMessage: "<emphasis>Your storage is full.</emphasis> Free up space to keep adding files.",
              description:
                "Cloud file storage warning shared by Library and Space surfaces when no larger plan is available. Emphasis marks the opening sentence.",
              values: { emphasis: V },
            })),
            (b[4] = e))
          : (e = b[4]),
          (a = e))
      } else if (I) {
        let e
        ;(b[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(d.A, {
              id: "library.storageBanner.almostFull.upgrade.storage",
              defaultMessage:
                "<emphasis>Your storage is almost full.</emphasis> Manage your storage space or upgrade for more.",
              description:
                "Cloud file storage warning shared by Library and Space surfaces when ten percent or less is available. Upgrade refers to changing the ChatGPT plan. Emphasis marks the opening sentence.",
              values: { emphasis: D },
            })),
            (b[5] = e))
          : (e = b[5]),
          (a = e))
      } else {
        let e
        ;(b[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(d.A, {
              id: "library.storageBanner.almostFull.manage.storage",
              defaultMessage: "<emphasis>Your storage is almost full.</emphasis> Manage your storage space.",
              description:
                "Cloud file storage warning shared by Library and Space surfaces when ten percent or less is available and no larger plan is available. Emphasis marks the opening sentence.",
              values: { emphasis: U },
            })),
            (b[6] = e))
          : (e = b[6]),
          (a = e))
      }
      return (
        b[7] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, r.jsx)(m.zOs, {})), (b[7] = s)) : (s = b[7]),
        b[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, r.jsx)(d.A, {
              id: "library.storageBanner.manage",
              defaultMessage: "Manage",
              description: "Opens Storage settings to manage saved Library files",
            })),
            (b[8] = n))
          : (n = b[8]),
        b[9] !== I
          ? ((o = I
              ? (0, r.jsx)(d.A, {
                  id: "library.storageBanner.upgrade",
                  defaultMessage: "Upgrade",
                  description: "Change the ChatGPT subscription plan for more Library cloud storage",
                })
              : void 0),
            (b[9] = I),
            (b[10] = o))
          : (o = b[10]),
        b[11] === Symbol.for("react.memo_cache_sentinel") ? ((u = (0, r.jsx)(m.pgK, {})), (b[11] = u)) : (u = b[11]),
        b[12] !== E || b[13] !== _
          ? ((h = (0, r.jsx)(f.$, {
              color: "ghostActive",
              size: "iconCircle",
              onClick: _,
              "aria-label": E,
              children: u,
            })),
            (b[12] = E),
            (b[13] = _),
            (b[14] = h))
          : (h = b[14]),
        b[15] !== E || b[16] !== h
          ? ((g = (0, r.jsx)(l.m, { content: E, children: h })), (b[15] = E), (b[16] = h), (b[17] = g))
          : (g = b[17]),
        b[18] !== a || b[19] !== L || b[20] !== I || b[21] !== o || b[22] !== g
          ? ((y = (0, r.jsx)(p.l, {
              variant: "pageNotice",
              icon: s,
              content: a,
              primaryCtaText: n,
              primaryCtaColor: "outlineSurface",
              onPrimaryCtaClick: L,
              secondaryCtaText: o,
              secondaryCtaColor: "upgrade",
              onSecondaryCtaClick: I,
              trailingAction: g,
            })),
            (b[18] = a),
            (b[19] = L),
            (b[20] = I),
            (b[21] = o),
            (b[22] = g),
            (b[23] = y))
          : (y = b[23]),
        y
      )
    }
    function U(e) {
      return (0, r.jsx)("strong", { className: "font-medium", children: e })
    }
    function D(e) {
      return (0, r.jsx)("strong", { className: "font-medium", children: e })
    }
    function V(e) {
      return (0, r.jsx)("strong", { className: "font-medium", children: e })
    }
    function z(e) {
      return (0, r.jsx)("strong", { className: "font-medium", children: e })
    }
  },
  KGdK(e, t, a) {
    var r = a("AKNp"),
      i = a("OMIV")
    function s(e) {
      return "free" === e.limit_tier
        ? "free" === e.plan_type || "free_workspace" === e.plan_type
        : "go" === e.limit_tier || "plus" === e.limit_tier || "prolite" === e.limit_tier
    }
    a.d(
      t,
      {},
      {
        M: s,
        X: function (e, t, a) {
          let l = e.get(i.M9)
          return (
            s(t) &&
            null != l &&
            (0, r.ku)(l, "banner" === a ? "library_storage_limit_banner" : `Library storage limit ${a}`)
          )
        },
      },
    )
  },
  ofBY(e, t, a) {
    a.d(t, { n: () => y })
    var r = a("ABep"),
      i = a("QosV"),
      s = a("iJY0")
    let l = (0, s.a)({
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
    var o = a("oyMi"),
      c = a("gWPn")
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
      body: '<path d="M10 10.25C10.4142 10.25 10.75 10.5858 10.75 11V16.0195C10.7498 16.4336 10.4141 16.7695 10 16.7695C9.58592 16.7695 9.25022 16.4336 9.25 16.0195V11C9.25 10.5858 9.58579 10.25 10 10.25Z" fill="currentColor"/> <path d="M14 10.25C14.4142 10.25 14.75 10.5858 14.75 11V16.0195C14.7498 16.4336 14.4141 16.7695 14 16.7695C13.5859 16.7695 13.2502 16.4336 13.25 16.0195V11C13.25 10.5858 13.5858 10.25 14 10.25Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C14.4545 2 16.4738 3.86169 16.7236 6.25H20.5C20.9142 6.25 21.25 6.58579 21.25 7C21.25 7.41421 20.9142 7.75 20.5 7.75H19.7207L19.0742 18.2607C18.9524 20.2385 17.3126 21.7802 15.3311 21.7803H8.70312C6.72627 21.7801 5.08866 20.2452 4.96094 18.2725L4.28125 7.75H3.5C3.08579 7.75 2.75 7.41421 2.75 7C2.75 6.58579 3.08579 6.25 3.5 6.25H7.27637C7.52623 3.86169 9.54553 2 12 2ZM6.45801 18.1758C6.53476 19.3593 7.51716 20.2801 8.70312 20.2803H15.3311C16.52 20.2802 17.5041 19.3547 17.5771 18.168L18.2178 7.75H5.7832L6.45801 18.1758ZM12 3.5C10.3751 3.5 9.02858 4.69244 8.78809 6.25H15.2119C14.9714 4.69244 13.6249 3.5 12 3.5Z" fill="currentColor"/>',
    })
    var u = a("oyxz"),
      h = a("Qgfj"),
      g = a("HOLv"),
      p = a("FrrB"),
      f = a("V080"),
      m = a("CLXx")
    function y(e) {
      let t,
        a,
        s,
        h,
        y,
        v,
        x,
        C = (0, i.c)(20),
        { view: _, description: L, titleMarker: I } = e
      C[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            all: { icon: l, title: b.allTitle, description: b.allDescription },
            pages: { icon: c.b, title: b.pagesTitle, description: b.pagesDescription },
            images: { icon: o.v, title: b.imagesTitle, description: b.imagesDescription },
            folder: { icon: n, title: b.folderTitle, description: b.folderDescription },
            trash: { icon: d, title: b.trashTitle, description: b.trashDescription },
            "trash-files": { icon: d, title: b.trashFilesTitle, description: b.trashFilesDescription },
            "trash-pages": { icon: d, title: b.trashPagesTitle, description: b.trashPagesDescription },
          }),
          (C[0] = t))
        : (t = C[0])
      let A = t[_]
      switch (_) {
        case "all": {
          let e
          ;(C[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(m.SlateSpaceCreateMenu, {})), (C[1] = e))
            : (e = C[1]),
            (a = e))
          break
        }
        case "pages":
        case "images": {
          let e
          ;(C[2] !== _ ? ((e = (0, r.jsx)(m.SlateSpaceCreateMenu, { action: _ })), (C[2] = _), (C[3] = e)) : (e = C[3]),
            (a = e))
          break
        }
        case "folder": {
          let e
          ;(C[4] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, r.jsx)(f.JA, {})), (C[4] = e)) : (e = C[4]),
            (a = e))
        }
      }
      return (
        C[5] !== A.icon ? ((s = (0, r.jsx)(g.I, { asset: A.icon })), (C[5] = A.icon), (C[6] = s)) : (s = C[6]),
        C[7] !== A.title ? ((h = (0, r.jsx)(u.A, { ...A.title })), (C[7] = A.title), (C[8] = h)) : (h = C[8]),
        C[9] !== h || C[10] !== I
          ? ((y = (0, r.jsxs)("h2", { children: [I, h] })), (C[9] = h), (C[10] = I), (C[11] = y))
          : (y = C[11]),
        C[12] !== A.description || C[13] !== L
          ? ((v = void 0 === L ? (0, r.jsx)(u.A, { ...A.description }) : L),
            (C[12] = A.description),
            (C[13] = L),
            (C[14] = v))
          : (v = C[14]),
        C[15] !== a || C[16] !== s || C[17] !== y || C[18] !== v
          ? ((x = (0, r.jsx)(p.A, {
              className: "select-none",
              layout: "page",
              spacing: "default",
              illustrationSize: "tile",
              illustration: s,
              title: y,
              description: v,
              actions: a,
            })),
            (C[15] = a),
            (C[16] = s),
            (C[17] = y),
            (C[18] = v),
            (C[19] = x))
          : (x = C[19]),
        x
      )
    }
    let b = (0, h.YK)({
      allTitle: {
        id: "space.empty.all.title",
        defaultMessage: "Nothing here yet",
        description: "Empty state heading for the All collection in Space",
      },
      allDescription: {
        id: "space.empty.all.description",
        defaultMessage: "Build a page, presentation, website, and more with ChatGPT",
        description: "First-use guidance for the All collection in Space",
      },
      pagesTitle: {
        id: "space.empty.pages.title",
        defaultMessage: "No pages yet",
        description: "Empty state heading for the Pages collection in Space",
      },
      pagesDescription: {
        id: "space.empty.pages.description",
        defaultMessage: "Write, plan, and bring your ideas together with ChatGPT",
        description: "First-use guidance for the Pages collection in Space",
      },
      imagesTitle: {
        id: "space.empty.images.title",
        defaultMessage: "No images yet",
        description: "Empty state heading for the Images collection in Space",
      },
      imagesDescription: {
        id: "space.empty.images.description",
        defaultMessage: "Create an image with ChatGPT",
        description: "First-use guidance for the Images collection in Space",
      },
      folderTitle: {
        id: "space.empty.folder.title",
        defaultMessage: "This folder is empty",
        description: "Empty state heading for an empty folder in Space",
      },
      folderDescription: {
        id: "space.empty.folder.description",
        defaultMessage: "Upload files to get started",
        description: "Guidance for adding content to an empty folder in Space",
      },
      trashTitle: {
        id: "space.empty.trash.title",
        defaultMessage: "Trash is empty",
        description: "Empty state heading for Trash in Space",
      },
      trashDescription: {
        id: "space.empty.trash.description",
        defaultMessage: "Items moved to Trash will be deleted forever after 30 days",
        description: "Retention policy for deleted files and Pages in Space Trash",
      },
      trashFilesTitle: {
        id: "space.empty.trashFiles.title",
        defaultMessage: "No files in Trash",
        description:
          "Empty state heading for the Files filter in Trash when other types may still contain deleted items",
      },
      trashFilesDescription: {
        id: "space.empty.trashFiles.description",
        defaultMessage: "Files moved to Trash will be deleted forever after 30 days",
        description: "Retention guidance below the empty Files filter in Trash",
      },
      trashPagesTitle: {
        id: "space.empty.trashPages.title",
        defaultMessage: "No pages in Trash",
        description:
          "Empty state heading for the Pages filter in Trash when other types may still contain deleted items",
      },
      trashPagesDescription: {
        id: "space.empty.trashPages.description",
        defaultMessage: "Pages moved to Trash will be deleted forever after 30 days",
        description: "Retention guidance below the empty Pages filter in Trash",
      },
    })
  },
  CLFW(e, t, a) {
    var r = a("ABep"),
      i = a("QosV"),
      s = a("zTeN"),
      l = a("jU86"),
      n = a("LcBG"),
      o = a("FBu8"),
      c = a("aYWA")
    a.d(
      t,
      {},
      {
        D: function () {
          let e,
            t = (0, i.c)(3),
            a = (0, s.gh)(l.Qy),
            d = (0, s.Ul)(l.YH),
            u = "/space" === a.value.basePath
          return (
            t[0] !== u || t[1] !== d
              ? ((e =
                  "grid" === d
                    ? (0, r.jsx)(n.oH, { square: !0 })
                    : (0, r.jsxs)("div", {
                        className: "-mx-[var(--padding-row-cell-x,var(--padding-row-x))] flex min-h-0 flex-1 flex-col",
                        children: [
                          (0, r.jsx)(c.Z, { isLoading: !0, showSource: u }),
                          (0, r.jsx)(o.V, { showSource: u }),
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
    var r = a("ABep"),
      i = a("QosV"),
      s = a("Qgfj"),
      l = a("Wf1j"),
      n = a("oyxz"),
      o = a("BrP7")
    let c = (0, s.YK)({
      files: {
        id: "codex.space.trash.files",
        defaultMessage: "Files",
        description: "Library Trash section containing deleted Library files",
      },
      pages: {
        id: "codex.space.trash.pages",
        defaultMessage: "Pages",
        description: "Library Trash section containing deleted Pages",
      },
      spaces: {
        id: "codex.space.trash.spaces",
        defaultMessage: "Spaces",
        description:
          "Library Trash section containing deleted Spaces. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
      },
    })
    function d(e) {
      return { key: e, name: (0, r.jsx)(n.A, { ...c[e] }) }
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
            c = (0, i.c)(8),
            { kind: u, onSelect: h } = e,
            g = (0, l.A)()
          return (
            c[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = ["files", "pages", "spaces"]), (c[0] = t))
              : (t = c[0]),
            c[1] === Symbol.for("react.memo_cache_sentinel") ? ((a = t.map(d)), (c[1] = a)) : (a = c[1]),
            c[2] !== g
              ? ((s = g.formatMessage({
                  id: "codex.space.trash.sections",
                  defaultMessage: "Trash sections",
                  description: "Accessible label for Files, Pages and Spaces navigation in Library Trash",
                })),
                (c[2] = g),
                (c[3] = s))
              : (s = c[3]),
            c[4] !== u || c[5] !== h || c[6] !== s
              ? ((n = (0, r.jsx)(o.t, {
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
    var r = a("zTeN"),
      i = a("jU86"),
      s = a("Dk5X"),
      l = a("e1xH")
    let n = (0, r.un)(i.Qy, ({ get: e, scope: t }) => {
      if (
        !t.value.deleted ||
        e(i.nt) ||
        t.value.search.trim() ||
        t.value.categories.length ||
        t.value.sources.length ||
        "loading" === e(l.GU)
      )
        return !1
      if (e(l.Op)) {
        let t = e(i.i3)
        return !t.isPending && !t.isFetching && !t.isError && !t.hasNextPage && e(i.PP)?.length === 0
      }
      {
        if (!e(i.YV)) return !1
        if ("enabled" !== e(l.GU)) return !0
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
  AOG7(e, t, a) {
    var r = a("QosV"),
      i = a("T0Rc"),
      s = a("EOo5"),
      l = a("rvFo"),
      n = a("HFSu"),
      o = a("GEsy"),
      c = a("eShZ")
    async function d(e, t, a, { includeProfilePhotos: r = !1, includeTotal: i, limit: s = 10 } = {}) {
      return (
        await n.CodexRequest.safeGet("/accounts/{account_id}/users", {
          parameters: {
            path: { account_id: e },
            query: { limit: s, offset: 0, query: t, include_profile_photos: r, include_total: i },
          },
          signal: a,
        })
      ).items
    }
    a.d(
      t,
      {},
      {
        AB: d,
        C4: async function (e, t, a) {
          let r = t.trim().toLowerCase(),
            i = await d(e, r, a)
          return i.find((e) => e.email?.trim().toLowerCase() === r)?.account_user_id
        },
        Nc: function (e, t) {
          let a,
            c,
            d,
            u,
            h,
            g,
            p = (0, r.c)(18)
          p[0] !== t ? ((a = void 0 === t ? {} : t), (p[0] = t), (p[1] = a)) : (a = p[1])
          let { includeMemberCounts: f } = a,
            m = void 0 !== f && f,
            { accountId: y, authMethod: b } = (0, s.As)()
          p[2] !== e ? ((c = e.trim()), (p[2] = e), (p[3] = c)) : (c = p[3])
          let v = c,
            x = (0, o.o)(v, 150)
          ;(p[4] !== m ? ((d = m ? ["member-counts"] : []), (p[4] = m), (p[5] = d)) : (d = p[5]),
            p[6] !== y || p[7] !== v || p[8] !== d
              ? ((u = ["workspace-groups", y, v, ...d]), (p[6] = y), (p[7] = v), (p[8] = d), (p[9] = u))
              : (u = p[9]))
          let C = ("chatgpt" === b || "chatgptAuthTokens" === b) && null != y && v.length > 0 && v === x
          return (
            p[10] !== y || p[11] !== m || p[12] !== v
              ? ((h = async (e) => {
                  let { signal: t } = e
                  if (null == y) throw Error("account id is required")
                  return (
                    await n.CodexRequest.safeGet("/accounts/{account_id}/groups", {
                      parameters: {
                        path: { account_id: y },
                        query: { limit: 10, offset: 0, query: v, include_member_counts: m, include_total: !1 },
                      },
                      signal: AbortSignal.any([t, AbortSignal.timeout(15e3)]),
                    })
                  ).items
                }),
                (p[10] = y),
                (p[11] = m),
                (p[12] = v),
                (p[13] = h))
              : (h = p[13]),
            p[14] !== u || p[15] !== C || p[16] !== h
              ? ((g = {
                  queryKey: u,
                  enabled: C,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: h,
                  staleTime: l.D.ONE_MINUTE,
                }),
                (p[14] = u),
                (p[15] = C),
                (p[16] = h),
                (p[17] = g))
              : (g = p[17]),
            (0, i.I)(g)
          )
        },
        Nv: function (e, t) {
          let a,
            n,
            c,
            u,
            h,
            g,
            p = (0, r.c)(18)
          p[0] !== t ? ((a = void 0 === t ? {} : t), (p[0] = t), (p[1] = a)) : (a = p[1])
          let { includeProfilePhotos: f } = a,
            m = void 0 !== f && f,
            { accountId: y, authMethod: b } = (0, s.As)()
          p[2] !== e ? ((n = e.trim()), (p[2] = e), (p[3] = n)) : (n = p[3])
          let v = n,
            x = (0, o.o)(v, 150)
          ;(p[4] !== m ? ((c = m ? ["profile-photos"] : []), (p[4] = m), (p[5] = c)) : (c = p[5]),
            p[6] !== y || p[7] !== v || p[8] !== c
              ? ((u = ["workspace-users", y, v, ...c]), (p[6] = y), (p[7] = v), (p[8] = c), (p[9] = u))
              : (u = p[9]))
          let C = ("chatgpt" === b || "chatgptAuthTokens" === b) && null != y && v.length > 0 && v === x
          return (
            p[10] !== y || p[11] !== m || p[12] !== v
              ? ((h = (e) => {
                  let { signal: t } = e
                  if (null == y) throw Error("account id is required")
                  return d(y, v, AbortSignal.any([t, AbortSignal.timeout(15e3)]), { includeProfilePhotos: m })
                }),
                (p[10] = y),
                (p[11] = m),
                (p[12] = v),
                (p[13] = h))
              : (h = p[13]),
            p[14] !== u || p[15] !== C || p[16] !== h
              ? ((g = {
                  queryKey: u,
                  enabled: C,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: h,
                  staleTime: l.D.ONE_MINUTE,
                }),
                (p[14] = u),
                (p[15] = C),
                (p[16] = h),
                (p[17] = g))
              : (g = p[17]),
            (0, i.I)(g)
          )
        },
        We: async function (e, t, a) {
          try {
            return (
              await n.CodexRequest.safeGet("/spaces/people", {
                parameters: { query: { account_id: e, query: t, limit: 10, offset: 0 } },
                signal: a,
              })
            ).items
          } catch (e) {
            if (!(e instanceof c.fk && 404 === e.status)) throw e
          }
          return d(e, t, a)
        },
      },
    )
  },
  N0l9(e, t, a) {
    let r = (0, a("iJY0").a)({
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
    a.d(t, {}, { I: r })
  },
  s8wJ(e, t, a) {
    let r = (0, a("iJY0").a)({
      name: "brush-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.14209, y: 0.808594, width: 13.9646, height: 13.964111 },
        visualBounds: { x: 1.14209, y: 0.808594, width: 13.9646, height: 13.964111 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.14209, y: 0.808594, width: 13.9646, height: 13.964111 },
        center: { x: 8.12439, y: 7.79065 },
        insets: { top: 0.808594, right: 0.89331, bottom: 1.227295, left: 1.14209 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.12439, y: 7.79065 }, foreground: { x: 8.12439, y: 7.79065 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.65147 1.15743C8.11688 0.692438 8.87178 0.692195 9.33702 1.15743L10.3976 2.21797C10.5142 2.33468 10.5692 2.49994 10.546 2.66329L10.4093 3.61934L11.3663 3.4836L11.4884 3.48067C11.6091 3.49185 11.7241 3.54452 11.8116 3.63204L14.7579 6.57832C15.2232 7.04358 15.2229 7.79847 14.7579 8.26387L11.6983 11.3225C11.6967 11.3241 11.6961 11.3267 11.6944 11.3283C11.6929 11.3299 11.6902 11.3307 11.6886 11.3322L10.3204 12.7014C9.59468 13.4271 8.41725 13.4271 7.69151 12.7014L6.90928 11.9182L5.07139 14.01C4.21583 14.9836 2.71543 15.0319 1.79893 14.1154C0.882947 13.199 0.931313 11.6995 1.9044 10.8439L3.9962 9.00508L3.21397 8.22286C2.48826 7.49713 2.48823 6.32067 3.21397 5.59493L7.65147 1.15743ZM3.95616 6.33809C3.64064 6.65378 3.64054 7.16504 3.95616 7.48067L5.13487 8.65938C5.23715 8.76179 5.29264 8.90242 5.28819 9.04707C5.28352 9.19193 5.21823 9.32923 5.10948 9.425L2.59776 11.632C2.07975 12.0873 2.05447 12.8856 2.5421 13.3732C3.0296 13.8606 3.82708 13.8352 4.28233 13.3176L6.49034 10.8049L6.56944 10.7316C6.65482 10.6677 6.75899 10.6307 6.86729 10.6272C7.01218 10.6226 7.15345 10.678 7.25596 10.7805L8.43467 11.9592C8.75032 12.2746 9.26162 12.2746 9.57725 11.9592L10.5792 10.9563L4.95811 5.33516L3.95616 6.33809ZM8.59385 1.89961C8.53864 1.84467 8.44893 1.84476 8.39366 1.89961L5.70128 4.592L11.3224 10.2131L14.0157 7.52168C14.0707 7.46632 14.0709 7.37571 14.0157 7.32051L11.255 4.55977L9.86436 4.75899C9.70092 4.78223 9.53581 4.72728 9.41905 4.61055C9.30231 4.49381 9.24741 4.32868 9.27061 4.16524L9.46885 2.77364L8.59385 1.89961Z" fill="currentColor"/>',
    })
    a.d(t, {}, { C: r })
  },
  D3IP(e, t, a) {
    let r = (0, a("iJY0").a)({
      name: "brush-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.418457, y: 1.001953, width: 17.473633, height: 17.473389 },
        visualBounds: { x: 1.418457, y: 1.001953, width: 17.473633, height: 17.473389 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.418457, y: 1.001953, width: 17.473633, height: 17.473389 },
        center: { x: 10.155274, y: 9.738648 },
        insets: { top: 1.001953, right: 1.10791, bottom: 1.524658, left: 1.418457 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.155274, y: 9.738648 },
          foreground: { x: 10.155274, y: 9.738648 },
        },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.55799 1.44038C10.143 0.855808 11.0911 0.855815 11.6762 1.44038L13.0023 2.76655C13.1503 2.91455 13.2204 3.12383 13.1908 3.331L13.0209 4.5146L14.2055 4.34663L14.2836 4.33979C14.4643 4.33536 14.6405 4.40482 14.7699 4.53413L18.4535 8.21674C19.0384 8.80176 19.0382 9.75075 18.4535 10.3359L12.9056 15.8837C11.9951 16.7942 10.5184 16.7942 9.6078 15.8837L8.63612 14.9111L6.3451 17.5195C5.27228 18.7399 3.39165 18.8003 2.24256 17.6513C1.09349 16.5022 1.15398 14.6216 2.3744 13.5488L4.98182 11.2568L4.01014 10.2861C3.0996 9.37554 3.09963 7.89883 4.01014 6.98823L9.55799 1.44038ZM4.95057 7.92866C4.55946 8.31985 4.55942 8.9545 4.95057 9.34565L6.4242 10.8183C6.55391 10.9481 6.62432 11.1261 6.61854 11.3095C6.61262 11.4931 6.53085 11.6667 6.39295 11.788L3.25233 14.5478C2.60897 15.1136 2.57715 16.105 3.18299 16.7109C3.78884 17.3166 4.78036 17.2849 5.34608 16.6416L8.10584 13.5009L8.20545 13.4082C8.3138 13.3268 8.44578 13.2799 8.58338 13.2753C8.767 13.2695 8.94564 13.3398 9.07557 13.4697L10.5482 14.9433C10.9394 15.3344 11.574 15.3344 11.9652 14.9433L13.2113 13.6953L6.19666 6.68159L4.95057 7.92866ZM10.7357 2.38081C10.6701 2.31564 10.5641 2.31564 10.4984 2.38081L7.13807 5.74116L14.1517 12.7548L17.5121 9.39546C17.5778 9.32974 17.5777 9.22388 17.5121 9.15815L14.0648 5.70991L12.3314 5.95796C12.1243 5.98747 11.9149 5.91738 11.767 5.76948C11.6191 5.62149 11.5499 5.41215 11.5795 5.20503L11.8256 3.47065L10.7357 2.38081Z" fill="currentColor"/>',
    })
    a.d(t, {}, { L: r })
  },
  XSsU(e, t, a) {
    let r = (0, a("iJY0").a)({
      name: "cursor-frame-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.141357, y: 2.141602, width: 12.987915, height: 13.012695 },
        visualBounds: { x: 2.141357, y: 2.141602, width: 12.987915, height: 13.012695 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.141357, y: 2.141602, width: 12.987915, height: 13.012695 },
        center: { x: 8.635315, y: 8.64795 },
        insets: { top: 2.141602, right: 0.870728, bottom: 0.845703, left: 2.141357 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.635315, y: 8.64795 }, foreground: { x: 8.635315, y: 8.64795 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.86597 9.31152C7.57239 8.40984 8.43816 7.5611 9.33374 7.87305L14.3601 9.62402C15.3387 9.96511 15.3983 11.3261 14.4539 11.752L12.6257 12.5752C12.6057 12.5842 12.5889 12.6005 12.5789 12.6201L11.6287 14.5205C11.1702 15.4375 9.83031 15.3378 9.51245 14.3633L7.86597 9.31152ZM8.98804 8.86426C8.91281 8.83833 8.84077 8.90962 8.86499 8.98535L10.5105 14.0381C10.5195 14.0655 10.5317 14.0785 10.5417 14.0859C10.5542 14.0952 10.573 14.1028 10.5955 14.1045C10.6178 14.1061 10.6375 14.101 10.6511 14.0938C10.6621 14.0878 10.6764 14.0764 10.6892 14.0508L11.6394 12.1504C11.7576 11.9145 11.9535 11.7255 12.1941 11.6172L14.0232 10.7949C14.0496 10.7828 14.061 10.7685 14.0671 10.7578C14.0747 10.7444 14.0808 10.7247 14.0798 10.7021C14.0787 10.6797 14.071 10.661 14.0623 10.6484C14.0551 10.6383 14.0429 10.6249 14.0154 10.6152L8.98804 8.86426Z" fill="currentColor"/> <path d="M2.66675 9.47461C2.9567 9.47461 3.19214 9.71005 3.19214 10V11.4668C3.19221 12.2076 3.79223 12.8083 4.53296 12.8086H5.99976C6.2896 12.8086 6.52497 13.0432 6.52515 13.333C6.52515 13.623 6.28971 13.8584 5.99976 13.8584H4.53296C3.21233 13.8582 2.14143 12.7875 2.14136 11.4668V10C2.14136 9.71005 2.3768 9.47461 2.66675 9.47461Z" fill="currentColor"/> <path d="M11.4666 2.1416C12.7872 2.14167 13.8579 3.21258 13.8582 4.5332V6C13.8582 6.28995 13.6227 6.52539 13.3328 6.52539C13.0431 6.52508 12.8083 6.28976 12.8083 6V4.5332C12.8081 3.79247 12.2073 3.19245 11.4666 3.19238H9.99976C9.70992 3.19225 9.47437 2.95686 9.47437 2.66699C9.47437 2.37712 9.70992 2.14173 9.99976 2.1416H11.4666Z" fill="currentColor"/> <path d="M5.99976 3.19238H4.53296C3.79234 3.19263 3.19238 3.79258 3.19214 4.5332V6H2.14136V4.5332C2.1416 3.21268 3.21244 2.14185 4.53296 2.1416H5.99976V3.19238Z" fill="currentColor"/>',
    })
    a.d(t, {}, { j: r })
  },
  cJS3(e, t, a) {
    let r = (0, a("iJY0").a)({
      name: "cursor-frame-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.668213, y: 2.667969, width: 16.25177, height: 16.284668 },
        visualBounds: { x: 2.668213, y: 2.667969, width: 16.25177, height: 16.284668 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.668213, y: 2.667969, width: 16.25177, height: 16.284668 },
        center: { x: 10.794098, y: 10.810303 },
        insets: { top: 2.667969, right: 1.080017, bottom: 1.047363, left: 2.668213 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.794098, y: 10.810303 },
          foreground: { x: 10.794098, y: 10.810303 },
        },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.82349 11.6426C9.45399 10.5086 10.5429 9.44197 11.6692 9.83398L17.9524 12.0225C19.1836 12.4514 19.2586 14.1642 18.0696 14.6992L15.7844 15.7275C15.7611 15.7381 15.7412 15.7565 15.7297 15.7793L14.5422 18.1553C13.9654 19.3083 12.2806 19.183 11.8811 17.957L9.82349 11.6426ZM11.2317 11.0898C11.1442 11.0597 11.0595 11.1424 11.0881 11.2305L13.1458 17.5449C13.1564 17.5776 13.1708 17.5922 13.1819 17.6006C13.196 17.6111 13.218 17.62 13.2444 17.6221C13.2706 17.624 13.2934 17.6185 13.3088 17.6104C13.3211 17.6038 13.3374 17.5913 13.3528 17.5605L14.5403 15.1846C14.6888 14.8877 14.9359 14.651 15.2385 14.5146L17.5237 13.4863C17.5554 13.4721 17.5685 13.4562 17.5754 13.4443C17.5843 13.4291 17.5913 13.4059 17.5901 13.3789C17.5889 13.3519 17.5797 13.3298 17.5696 13.3154C17.5616 13.3043 17.5476 13.2897 17.5149 13.2783L11.2317 11.0898Z" fill="currentColor"/> <path d="M3.33325 11.835C3.70052 11.835 3.99829 12.1327 3.99829 12.5V14.333C3.99829 15.2543 4.74501 16.0018 5.66626 16.002H7.50024C7.86736 16.0021 8.16528 16.2998 8.16528 16.667C8.16511 17.034 7.86726 17.3319 7.50024 17.332H5.66626C4.01048 17.3319 2.66821 15.9888 2.66821 14.333V12.5C2.66821 12.1327 2.96598 11.835 3.33325 11.835Z" fill="currentColor"/> <path d="M14.3333 2.66797C15.989 2.6681 17.3321 4.01031 17.3323 5.66602V7.5C17.3321 7.86693 17.0341 8.16473 16.6672 8.16504C16.3001 8.16504 16.0024 7.86712 16.0022 7.5V5.66602C16.002 4.74485 15.2544 3.99818 14.3333 3.99805H12.5002C12.133 3.99805 11.8352 3.70028 11.8352 3.33301C11.8352 2.96574 12.133 2.66797 12.5002 2.66797H14.3333Z" fill="currentColor"/> <path d="M7.50024 3.99805H5.66626C4.74512 3.99822 3.99847 4.74488 3.99829 5.66602V7.5H2.66821V5.66602C2.66839 4.01034 4.01058 2.66814 5.66626 2.66797H7.50024V3.99805Z" fill="currentColor"/>',
    })
    a.d(t, {}, { A: r })
  },
  D6JX(e, t, a) {
    let r = (0, a("iJY0").a)({
      name: "pencil-sparkle-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.838867, y: 1.839844, width: 12.938461, height: 12.939453 },
        visualBounds: { x: 1.838867, y: 1.839844, width: 12.938461, height: 12.939453 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.838867, y: 1.839844, width: 12.938461, height: 12.939453 },
        center: { x: 8.308098, y: 8.30957 },
        insets: { top: 1.839844, right: 1.222672, bottom: 1.220703, left: 1.838867 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.308098, y: 8.30957 }, foreground: { x: 8.308098, y: 8.30957 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99805 3.12891C11.1397 2.09939 12.8713 2.15445 13.9229 3.22461C15.0428 4.30582 15.0791 6.12407 13.9297 7.27344L8.33887 12.8633C7.76885 13.4643 7.0385 13.8717 6.27539 14.0488H6.27344L3.18066 14.7598L3.17969 14.7578C3.04728 14.7893 2.77955 14.8161 2.56641 14.6035C2.35234 14.3899 2.37933 14.1208 2.41113 13.9883L3.12109 10.9023C3.30016 10.1059 3.70942 9.41049 4.27051 8.85059L9.88867 3.23242L9.99805 3.12891ZM5.0127 9.59375C4.57962 10.0259 4.27691 10.5485 4.14551 11.1348L4.14453 11.1377L3.57812 13.5898L6.03906 13.0254C6.60496 12.8938 7.1526 12.5902 7.57812 12.1416L7.58691 12.1318L12.1084 7.60938L9.55176 5.05176L5.0127 9.59375ZM13.1816 3.96777C12.5088 3.27474 11.3617 3.24635 10.6309 3.97559L10.6299 3.97461L10.2949 4.30957L12.8516 6.86621L13.1875 6.53125C13.9237 5.79502 13.8897 4.65189 13.1943 3.98047L13.1816 3.96777Z" fill="currentColor"/> <path d="M3.66699 1.83984C3.79131 1.84001 3.89846 1.92787 3.92285 2.0498C3.99414 2.40621 4.13347 2.71072 4.34766 2.94141C4.55957 3.16962 4.85819 3.34046 5.27637 3.41016C5.4022 3.4312 5.49414 3.54038 5.49414 3.66797C5.49397 3.7954 5.40206 3.90376 5.27637 3.9248C4.85824 3.99449 4.55956 4.16538 4.34766 4.39355C4.13349 4.62419 3.99417 4.92883 3.92285 5.28516C3.89846 5.40709 3.79131 5.49495 3.66699 5.49512C3.54253 5.49512 3.43457 5.40721 3.41016 5.28516C3.33884 4.92886 3.1995 4.62418 2.98535 4.39355C2.77345 4.16546 2.47468 3.99448 2.05664 3.9248C1.93109 3.90365 1.83903 3.7953 1.83887 3.66797C1.83887 3.54047 1.93095 3.43131 2.05664 3.41016C2.47478 3.34047 2.77344 3.16958 2.98535 2.94141C3.19956 2.71072 3.33885 2.40622 3.41016 2.0498C3.43457 1.92775 3.54253 1.83984 3.66699 1.83984Z" fill="currentColor"/>',
    })
    a.d(t, {}, { n: r })
  },
  oyMi(e, t, a) {
    let r = (0, a("iJY0").a)({
      name: "photo-light-24",
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
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0625 6.65039C16.7469 6.65039 18.1122 8.01582 18.1123 9.7002C18.112 11.3844 16.7468 12.75 15.0625 12.75C13.3783 12.7499 12.013 11.3844 12.0127 9.7002C12.0128 8.01588 13.3782 6.6505 15.0625 6.65039ZM15.0625 8.15039C14.2066 8.1505 13.5128 8.84431 13.5127 9.7002C13.513 10.5559 14.2067 11.2499 15.0625 11.25C15.9184 11.25 16.612 10.556 16.6123 9.7002C16.6122 8.84424 15.9185 8.15039 15.0625 8.15039Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2002 3.25C20.1607 3.25011 21.7499 4.83935 21.75 6.7998V17.2002C21.7499 19.1607 20.1607 20.7499 18.2002 20.75H5.7998C3.83935 20.7499 2.25011 19.1607 2.25 17.2002V6.7998C2.25011 4.83935 3.83935 3.25011 5.7998 3.25H18.2002ZM3.75 14.1553L5.11328 12.792C5.74788 12.1574 6.57975 11.8401 7.41162 11.8401C8.24349 11.8401 9.07536 12.1574 9.70996 12.792L16.168 19.25H18.2002C19.3322 19.2499 20.2499 18.3322 20.25 17.2002V6.7998C20.2499 5.66778 19.3322 4.75011 18.2002 4.75H5.7998C4.66778 4.75011 3.75011 5.66778 3.75 6.7998V14.1553ZM7.41162 13.34C6.96358 13.34 6.51554 13.5108 6.17383 13.8525L3.81445 16.2119L3.75 16.1475V17.2002C3.75011 18.3322 4.66778 19.2499 5.7998 19.25H14.0459L8.64941 13.8525C8.30771 13.5108 7.85967 13.34 7.41162 13.34Z" fill="currentColor"/>',
    })
    a.d(t, {}, { v: r })
  },
  hrl5(e, t, a) {
    let r = (0, a("iJY0").a)({
      name: "plus-square-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.807983, y: 1.807861, width: 12.383789, height: 12.383789 },
        visualBounds: { x: 1.807983, y: 1.807861, width: 12.383789, height: 12.383789 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.807983, y: 1.807861, width: 12.383789, height: 12.383789 },
        center: { x: 7.999878, y: 7.999756 },
        insets: { top: 1.807861, right: 1.808228, bottom: 1.80835, left: 1.807983 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999878, y: 7.999756 }, foreground: { x: 7.999878, y: 7.999756 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.00037 4.64087C8.29007 4.64107 8.52562 4.87654 8.52576 5.16626V7.47485H10.8334C11.1232 7.47503 11.3578 7.7104 11.3578 8.00024C11.3577 8.28997 11.1231 8.52546 10.8334 8.52563H8.52576V10.8333C8.52558 11.1229 8.29004 11.3575 8.00037 11.3577C7.71053 11.3577 7.47515 11.1231 7.47498 10.8333V8.52563H5.16638C4.87668 8.52544 4.64112 8.28996 4.64099 8.00024C4.64099 7.71042 4.8766 7.47505 5.16638 7.47485H7.47498V5.16626C7.47511 4.87642 7.7105 4.64087 8.00037 4.64087Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.683 1.80786C13.0683 1.80786 14.1918 2.93134 14.1918 4.31665V11.6829C14.1918 13.0682 13.0683 14.1917 11.683 14.1917H4.31677C2.93146 14.1917 1.80798 13.0682 1.80798 11.6829V4.31665C1.80798 2.93134 2.93146 1.80786 4.31677 1.80786H11.683ZM4.31677 2.85864C3.51136 2.85864 2.85876 3.51124 2.85876 4.31665V11.6829C2.85876 12.4883 3.51136 13.1418 4.31677 13.1418H11.683C12.4884 13.1418 13.142 12.4883 13.142 11.6829V4.31665C13.142 3.51124 12.4884 2.85864 11.683 2.85864H4.31677Z" fill="currentColor"/>',
    })
    a.d(t, {}, { D: r })
  },
  aicH(e, t, a) {
    let r = (0, a("iJY0").a)({
      name: "plus-square-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.501587, y: 2.501709, width: 14.99707, height: 14.99707 },
        visualBounds: { x: 2.501587, y: 2.501709, width: 14.99707, height: 14.99707 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.501587, y: 2.501709, width: 14.99707, height: 14.99707 },
        center: { x: 10.000122, y: 10.000244 },
        insets: { top: 2.501709, right: 2.501343, bottom: 2.501221, left: 2.501587 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.000122, y: 10.000244 },
          foreground: { x: 10.000122, y: 10.000244 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M9.99963 5.9187C10.3669 5.9187 10.6647 6.21647 10.6647 6.58374V9.33472H13.4166C13.7836 9.33491 14.0815 9.63272 14.0817 9.99976C14.0817 10.3669 13.7837 10.6646 13.4166 10.6648H10.6647V13.4167C10.6645 13.7839 10.3668 14.0818 9.99963 14.0818C9.63261 14.0816 9.33473 13.7838 9.33459 13.4167V10.6648H6.58362C6.21635 10.6648 5.91858 10.367 5.91858 9.99976C5.91871 9.6326 6.21643 9.33472 6.58362 9.33472H9.33459V6.58374C9.33459 6.21659 9.63253 5.9189 9.99963 5.9187Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.442 2.50171C16.13 2.50192 17.4986 3.87036 17.4987 5.55835V14.4421C17.4984 16.13 16.1299 17.4986 14.442 17.4988H5.55823C3.87024 17.4987 2.5018 16.1301 2.50159 14.4421V5.55835C2.50162 3.87025 3.87013 2.50174 5.55823 2.50171H14.442ZM5.55823 3.83179C4.60467 3.83182 3.8317 4.60479 3.83167 5.55835V14.4421C3.83188 15.3955 4.60478 16.1687 5.55823 16.1687H14.442C15.3953 16.1685 16.1684 15.3954 16.1686 14.4421V5.55835C16.1685 4.6049 15.3954 3.832 14.442 3.83179H5.55823Z" fill="currentColor"/>',
    })
    a.d(t, {}, { w: r })
  },
  cG4h(e, t, a) {
    let r = (0, a("iJY0").a)({
      name: "toolbox-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.141357, y: 1.476563, width: 11.716805, height: 13.048828 },
        visualBounds: { x: 2.141357, y: 1.476563, width: 11.716805, height: 13.048828 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.141357, y: 1.476563, width: 11.716805, height: 13.048828 },
        center: { x: 7.99976, y: 8.000977 },
        insets: { top: 1.476563, right: 2.141838, bottom: 1.474609, left: 2.141357 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.99976, y: 8.000977 }, foreground: { x: 7.99976, y: 8.000977 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.99976 9.14219C9.28971 9.14219 9.52515 9.37763 9.52515 9.66758C9.52515 9.95753 9.28971 10.193 8.99976 10.193H6.99976C6.70992 10.1928 6.47437 9.95745 6.47437 9.66758C6.47437 9.37771 6.70992 9.14232 6.99976 9.14219H8.99976Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.8562 2.29258C5.14934 1.41175 6.29252 1.18921 6.89429 1.8961L7.88452 3.06016C7.91121 3.09133 7.9509 3.10967 7.99194 3.10996L9.09741 3.1168L9.14917 3.00547C9.25488 2.77291 9.34388 2.57446 9.42847 2.4166C9.51528 2.25466 9.61403 2.10324 9.74976 1.97129C10.0747 1.65573 10.5107 1.47987 10.9636 1.48301C11.1531 1.48436 11.3288 1.52663 11.5037 1.5836C11.674 1.63912 11.8756 1.72008 12.113 1.81504C12.3725 1.91885 12.5918 2.00644 12.7664 2.09043C12.9448 2.17631 13.1128 2.27504 13.2576 2.41758C13.6015 2.75642 13.788 3.22413 13.7712 3.70664C13.7641 3.90958 13.7099 4.09786 13.6394 4.28281C13.5704 4.46359 13.4712 4.6779 13.3542 4.93125L12.4656 6.85508C12.6201 6.88098 12.771 6.92341 12.9167 6.99766C13.2412 7.16305 13.5053 7.42711 13.6707 7.75156C13.7798 7.96602 13.8216 8.19115 13.8406 8.42344C13.859 8.64977 13.8582 8.92739 13.8582 9.25449V11.0143C13.8582 11.5281 13.8584 11.9463 13.8308 12.2838C13.8027 12.6271 13.743 12.9346 13.5974 13.2203C13.3681 13.6701 13.0023 14.036 12.5525 14.2652C12.2667 14.4108 11.9594 14.4705 11.616 14.4986C11.2784 14.5262 10.8605 14.526 10.3464 14.526H5.65308C5.1392 14.526 4.72205 14.5262 4.38452 14.4986C4.04099 14.4706 3.73385 14.4108 3.448 14.2652C2.99811 14.036 2.63141 13.6702 2.4021 13.2203C2.25657 12.9346 2.19681 12.6271 2.1687 12.2838C2.14113 11.9463 2.14136 11.5281 2.14136 11.0143V9.25449C2.14136 8.92739 2.14145 8.64977 2.15991 8.42344C2.17891 8.19112 2.22065 7.96605 2.32983 7.75156C2.49518 7.42705 2.75925 7.16305 3.08374 6.99766C3.1366 6.97073 3.18983 6.94673 3.2439 6.92735L2.62671 6.47227C1.87958 5.92129 2.02142 4.76561 2.87964 4.41172L4.29272 3.82871C4.33055 3.81305 4.35975 3.78157 4.3728 3.74278L4.8562 2.29258ZM4.58667 7.85996C4.24213 7.85996 4.01528 7.86043 3.84155 7.87461C3.67394 7.88831 3.6023 7.91181 3.5603 7.93321C3.43341 7.99792 3.33006 8.1012 3.26538 8.22813C3.24403 8.27018 3.22044 8.34226 3.20679 8.50938C3.19264 8.68304 3.19214 8.91028 3.19214 9.25449V11.0143C3.19214 11.5454 3.1923 11.913 3.21558 12.1979C3.23836 12.4763 3.27997 12.6305 3.33765 12.7438C3.46629 12.996 3.67224 13.2011 3.92456 13.3297C4.03784 13.3874 4.19187 13.43 4.47046 13.4527C4.75528 13.476 5.12211 13.4762 5.65308 13.4762H10.3464C10.8778 13.4762 11.2451 13.476 11.53 13.4527C11.8087 13.43 11.9626 13.3874 12.0759 13.3297C12.3281 13.2012 12.5332 12.9959 12.6619 12.7438C12.7196 12.6305 12.7621 12.4764 12.7849 12.1979C12.8082 11.913 12.8083 11.5454 12.8083 11.0143V9.25449C12.8083 8.9103 12.8078 8.68304 12.7937 8.50938C12.7801 8.3424 12.7564 8.2702 12.7351 8.22813C12.6705 8.10128 12.567 7.99794 12.4402 7.93321C12.3982 7.91181 12.3264 7.88831 12.1589 7.87461C11.9852 7.86042 11.7583 7.85996 11.4138 7.85996H4.58667ZM6.09448 2.57676C6.02299 2.49278 5.88724 2.51907 5.85229 2.62363L5.3689 4.07383C5.25952 4.40218 5.01303 4.6674 4.69312 4.79942L3.27905 5.38242C3.17741 5.4247 3.16106 5.56213 3.24976 5.62754L4.48022 6.53477C4.58499 6.61213 4.67566 6.70477 4.74878 6.80918H8.75366L8.71069 6.67344C8.60606 6.34345 8.65054 5.984 8.83179 5.68906L9.63257 4.38633C9.6901 4.2924 9.62264 4.17139 9.51245 4.17051L7.98413 4.15977C7.63808 4.15729 7.31017 4.00417 7.08569 3.74082L6.09448 2.57676ZM10.9558 2.53379C10.7788 2.5327 10.6082 2.60086 10.4812 2.72422C10.4546 2.7501 10.4163 2.79703 10.3542 2.9127C10.3015 3.01119 10.2424 3.13678 10.1619 3.31309C10.6715 3.64667 10.886 4.35359 10.5271 4.93711L9.72632 6.23887C9.70486 6.2739 9.69925 6.31689 9.71167 6.35606L9.85522 6.80918H11.3308L12.4011 4.4918C12.5242 4.22508 12.6047 4.04753 12.658 3.90781C12.7093 3.77306 12.72 3.7089 12.7214 3.67051C12.7281 3.48171 12.6558 3.29825 12.5212 3.16563C12.4939 3.13871 12.4421 3.09971 12.3113 3.03672C12.1765 2.97185 11.9963 2.89883 11.7234 2.78965C11.4732 2.68959 11.3086 2.62404 11.1785 2.58164C11.0531 2.54079 10.9929 2.53406 10.9558 2.53379Z" fill="currentColor"/>',
    })
    a.d(t, {}, { L: r })
  },
  Gx3J(e, t, a) {
    let r = (0, a("iJY0").a)({
      name: "toolbox-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.668213, y: 1.835938, width: 14.66309, height: 16.330078 },
        visualBounds: { x: 2.668213, y: 1.835938, width: 14.66309, height: 16.330078 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.668213, y: 1.835938, width: 14.66309, height: 16.330078 },
        center: { x: 9.999758, y: 10.000977 },
        insets: { top: 1.835938, right: 2.668697, bottom: 1.833984, left: 2.668213 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.999758, y: 10.000977 },
          foreground: { x: 9.999758, y: 10.000977 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M11.2502 11.42C11.6174 11.4201 11.9153 11.7178 11.9153 12.085C11.915 12.452 11.6172 12.7499 11.2502 12.75H8.75025C8.38314 12.75 8.08547 12.452 8.08521 12.085C8.08521 11.7177 8.38298 11.42 8.75025 11.42H11.2502Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.06079 2.86136C6.42939 1.75411 7.86661 1.47501 8.62329 2.36331L9.86255 3.81839C9.89425 3.85562 9.94061 3.87759 9.9895 3.87796L11.3665 3.88772L11.429 3.75101C11.561 3.46052 11.6727 3.2132 11.7786 3.01565C11.8873 2.81279 12.0103 2.62194 12.1809 2.45608C12.5888 2.06001 13.1368 1.83972 13.7053 1.84378C13.9435 1.84552 14.1641 1.89838 14.3831 1.96976C14.5962 2.03925 14.8483 2.14024 15.1448 2.25882C15.4692 2.38858 15.7446 2.49835 15.9631 2.60354C16.1864 2.71107 16.3975 2.83557 16.5793 3.01468C17.0109 3.44003 17.2441 4.02729 17.2229 4.63284C17.2139 4.88792 17.1462 5.12291 17.0579 5.35452C16.9715 5.58099 16.8477 5.84909 16.7014 6.16604L15.595 8.56253C15.7846 8.59536 15.9701 8.64781 16.1497 8.73929C16.5569 8.94686 16.8884 9.2783 17.0959 9.68558C17.2332 9.95513 17.285 10.2374 17.3088 10.5283C17.332 10.8118 17.3313 11.1593 17.3313 11.5684V13.7676C17.3313 14.41 17.3316 14.9321 17.2971 15.3545C17.262 15.7847 17.188 16.1704 17.0051 16.5293C16.7177 17.0935 16.2588 17.5524 15.6946 17.8399C15.3357 18.0227 14.95 18.0967 14.5198 18.1319C14.0973 18.1664 13.5752 18.166 12.9329 18.166H7.06665C6.42423 18.166 5.90219 18.1664 5.47974 18.1319C5.04961 18.0967 4.66381 18.0227 4.30493 17.8399C3.74093 17.5524 3.28279 17.0933 2.99536 16.5293C2.81248 16.1704 2.73754 15.7847 2.70239 15.3545C2.66789 14.9321 2.66822 14.41 2.66822 13.7676V11.5684C2.66822 11.1593 2.66751 10.8118 2.69068 10.5283C2.71448 10.2373 2.76721 9.95522 2.90454 9.68558C3.11211 9.27821 3.44346 8.94685 3.85083 8.73929C3.91271 8.70777 3.97519 8.68053 4.03833 8.65726L3.27759 8.09671C2.33829 7.4039 2.51688 5.95081 3.59595 5.50589L5.36255 4.77737C5.40758 4.75873 5.4418 4.72104 5.45728 4.67483L6.06079 2.86136ZM5.73364 9.83304C5.30263 9.83304 5.01877 9.83388 4.802 9.85159C4.59344 9.86865 4.50542 9.89787 4.45435 9.92386C4.29723 10.0039 4.16917 10.132 4.08911 10.2891C4.06313 10.3402 4.03391 10.4282 4.01685 10.6367C3.99914 10.8535 3.99829 11.1374 3.99829 11.5684V13.7676C3.99829 14.4318 3.99855 14.8904 4.02759 15.2461C4.05602 15.5941 4.1085 15.7856 4.17993 15.9258C4.33989 16.2396 4.5956 16.4944 4.90943 16.6543C5.0496 16.7257 5.24033 16.7782 5.58814 16.8067C5.94386 16.8357 6.40229 16.836 7.06665 16.836H12.9329C13.5971 16.836 14.0557 16.8357 14.4114 16.8067C14.7593 16.7782 14.9509 16.7258 15.0911 16.6543C15.4047 16.4944 15.6597 16.2394 15.8196 15.9258C15.891 15.7856 15.9435 15.5941 15.9719 15.2461C16.001 14.8904 16.0012 14.4318 16.0012 13.7676V11.5684C16.0012 11.1374 16.0014 10.8535 15.9836 10.6367C15.9666 10.428 15.9364 10.3401 15.9104 10.2891C15.8304 10.1321 15.7031 10.0039 15.5461 9.92386C15.4951 9.89784 15.4065 9.86867 15.1975 9.85159C14.9808 9.83389 14.6977 9.83304 14.2668 9.83304H5.73364ZM7.6106 3.22561C7.52563 3.12619 7.36508 3.1573 7.32349 3.28128L6.71997 5.09476C6.58248 5.50787 6.27189 5.84086 5.86939 6.00686L4.10279 6.73538C3.9816 6.78535 3.96125 6.94853 4.06665 7.0264L5.60474 8.16018C5.73555 8.25665 5.84806 8.37292 5.9397 8.50296H10.9309L10.8801 8.3428C10.7487 7.92794 10.8036 7.47622 11.0315 7.1055L12.0334 5.47757C12.1017 5.36593 12.0218 5.22267 11.8909 5.22171L9.97974 5.20804C9.54446 5.20486 9.13206 5.01212 8.84986 4.68069L7.6106 3.22561ZM13.6956 3.17386C13.4764 3.17233 13.2649 3.25751 13.1077 3.41018C13.0754 3.44164 13.0288 3.49935 12.9514 3.64358C12.8861 3.76541 12.8126 3.92029 12.7131 4.13772C13.3497 4.55853 13.6161 5.44339 13.1663 6.17483L12.1653 7.80179C12.1397 7.84342 12.133 7.89484 12.1477 7.94143L12.3264 8.50296H14.1575L15.4934 5.6094C15.6474 5.27569 15.7492 5.05524 15.8157 4.88089C15.8801 4.71181 15.8922 4.63253 15.8938 4.58597C15.902 4.35246 15.8121 4.12598 15.6458 3.96194C15.6126 3.92927 15.549 3.88029 15.386 3.80179C15.2179 3.72088 14.9927 3.63062 14.6516 3.49417C14.3389 3.36909 14.1332 3.2873 13.9709 3.2344C13.8146 3.18346 13.7406 3.1742 13.6956 3.17386Z" fill="currentColor"/>',
    })
    a.d(t, {}, { O: r })
  },
}
//# sourceMappingURL=395520.595cff6137.js.map
