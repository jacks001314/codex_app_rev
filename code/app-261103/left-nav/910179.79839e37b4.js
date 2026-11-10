export const __rspack_esm_ids = [910179]
export const __webpack_modules__ = {
  piij(e, t, a) {
    e.exports = a.p + "assets/space-recovery.105d9c61fe.png"
  },
  qfMa(e, t, a) {
    a.d(t, { E: () => i })
    var r = a("ABep"),
      s = a("on57")
    function i({ className: e, icon: t, label: a, labelProps: l, labelVisible: n = !0 }) {
      return (0, r.jsxs)("span", {
        className: (0, s.A)("popcorn-annotation-button-content", e),
        children: [
          null == t ? null : (0, r.jsx)("span", { className: "popcorn-annotation-button-icon", children: t }),
          null == a
            ? null
            : (0, r.jsx)("span", {
                ...l,
                className: (0, s.A)("popcorn-annotation-button-label", l?.className),
                "data-label-visible": n,
                children: (0, r.jsx)("span", {
                  className: "popcorn-annotation-button-label-overflow",
                  children: (0, r.jsx)("span", {
                    className: (0, s.A)(
                      "popcorn-annotation-button-label-text",
                      null != t && "popcorn-annotation-button-label-with-icon",
                    ),
                    children: a,
                  }),
                }),
              }),
        ],
      })
    }
  },
  Hh7n(e, t, a) {
    var r = a("X6Vn"),
      s = a("pdPj"),
      i = a("iHfE")
    a.d(
      t,
      {},
      {
        Su: async function (e, t, { onClose: l } = {}) {
          let n = e.get(i.ts)
          if (null == n || !e.get(s.l)) return
          let { ReferenceImageManageDialog: o } = await Promise.all([a.e(584510), a.e(670979)]).then(a.bind(a, "LUIA"))
          e.get(s.l) &&
            e.get(i.ts) === n &&
            (0, r.qf)(e, o, { onClose: l, referenceImage: t, referenceImagesAccountId: n })
        },
        h9: async function (e, { onSaved: t } = {}) {
          let l = e.get(i.ts)
          if (null == l || !e.get(s.l)) return
          let { ReferenceImageFormDialog: n } = await Promise.all([a.e(584510), a.e(64977)]).then(a.bind(a, "zYIX"))
          e.get(s.l) && e.get(i.ts) === l && (0, r.qf)(e, n, { referenceImagesAccountId: l, onSaved: t })
        },
        rk: async function (e, t) {
          let l = e.get(i.ts)
          if (null == l || !e.get(s.l)) return
          let { ReferenceImageSuggestionDialog: n } = await Promise.all([a.e(584510), a.e(367992)]).then(
            a.bind(a, "RrZF"),
          )
          e.get(s.l) && e.get(i.ts) === l && (0, r.qf)(e, n, { ...t, referenceImagesAccountId: l })
        },
      },
    )
  },
  wEIr(e, t, a) {
    var r = a("ABep"),
      s = a("QosV"),
      i = a("unTT"),
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
            u = (0, s.c)(4),
            { query: h } = e
          return (
            u[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, r.jsx)("span", {
                  className:
                    "flex size-12 shrink-0 items-center justify-center rounded-xl bg-background-secondary-soft",
                  children: (0, r.jsx)(n.I, { asset: i.H }),
                })),
                (a = (0, r.jsx)("h2", {
                  children: (0, r.jsx)(l.A, {
                    id: "search.empty.title",
                    defaultMessage: "No results found",
                    description: "Heading when a search in a content collection has no matching items",
                  }),
                })),
                (u[0] = t),
                (u[1] = a))
              : ((t = u[0]), (a = u[1])),
            u[2] !== h
              ? ((d = (0, r.jsx)(o.A, {
                  className: "max-w-80 self-center wrap-anywhere select-none",
                  layout: "page",
                  spacing: "default",
                  illustration: t,
                  title: a,
                  description: (0, r.jsx)(l.A, {
                    id: "spaceSearch.empty.descriptionWithQuery",
                    defaultMessage: "No matches for “{query}”. <guidance>Try a different search.</guidance>",
                    description:
                      "Guidance when a Space or Sites search has no matching items. query is the text the user searched for. The guidance tag places the suggestion on a separate line below the no-matches sentence.",
                    values: { query: h, guidance: c },
                  }),
                })),
                (u[2] = h),
                (u[3] = d))
              : (d = u[3]),
            d
          )
        },
      },
    )
  },
  TVpO(e, t, a) {
    var r = a("ozm1"),
      s = a("dSuP"),
      i = a("T8X0"),
      l = a("yGJW"),
      n = a("eShZ")
    let o = "CHATGPT_FILE_LIBRARY_ORIGIN_RECENTLY_DELETED_SCREEN"
    a.d(
      t,
      {},
      {
        g: function (e, t) {
          ;(0, l.yy)(e, s.Lq, {
            artifactIds: t.map(({ node: e }) => e.id),
            directoryIds: [],
            itemCount: (0, r.PZ)(t.length),
            libraryOrigin: o,
          })
        },
        h: function (e, t, a, r) {
          ;(0, l.yy)(e, s.pG, {
            interactionType: a,
            sessionId: t,
            libraryVariant: "CHATGPT_FILE_LIBRARY_VARIANT_DEFAULT",
            productExperience: e.get(i.pc),
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
      s = a("QosV"),
      i = a("zTeN"),
      l = a("oyxz"),
      n = a("zKCW"),
      o = a("JNtf"),
      c = a("mUDD"),
      d = a("Bbed"),
      u = a("X6Vn"),
      h = a("e1xH"),
      g = a("cGrE"),
      p = a("Fmx8"),
      f = a("TVpO")
    let m = (0, d._)(async () => (await a.e(327702).then(a.bind(a, "iKaf"))).EmptyLibraryTrashDialog, {
        errorFallback: function (e) {
          let t,
            a,
            i,
            n,
            d = (0, s.c)(6),
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
              ? ((i = (0, r.jsx)(c.R4, {
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
                (d[3] = i))
              : (i = d[3]),
            d[4] !== a
              ? ((n = (0, r.jsx)(o.lG, { open: !0, contentProps: t, onOpenChange: a, children: i })),
                (d[4] = a),
                (d[5] = n))
              : (n = d[5]),
            n
          )
        },
      }),
      y = (0, i.un)(p.Qy, ({ get: e, scope: t }) => {
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
        let { isPending: a, isFetching: r, isError: s, hasNextPage: i } = e(p.i3)
        return !a && !r && !s && !i && !e(p.nt) && "available" === e(p.IM) && e(p.PP)?.length === 0
      })
    function b(e) {
      let t,
        a,
        n,
        o,
        c = (0, s.c)(13),
        { content: d } = e,
        b = (0, i.gh)(p.Qy),
        x = (0, i.Ul)(p.YV),
        _ = (0, i.Ul)(p.nt),
        I = (0, i.Ul)(h.Op),
        T = (0, i.Ul)(I ? p.RK : null)
      if ((0, i.Ul)(y) && !T) return null
      c[0] !== b || c[1] !== I
        ? ((t =
            I || "/space" === b.value.basePath
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
          (c[1] = I),
          (c[2] = t))
        : (t = c[2])
      let A = t
      if (T) {
        let e
        ;(c[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(l.A, {
              id: "library.emptyTrash.pending",
              defaultMessage: "Emptying trash…",
              description: "Trash banner status while permanent deletion is in progress",
            })),
            (c[3] = e))
          : (e = c[3]),
          (A = e))
      }
      let L = x || _ || !!T
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
        c[6] !== A || c[7] !== L || c[8] !== a
          ? ((n = { label: A, disabled: L, onClick: a }), (c[6] = A), (c[7] = L), (c[8] = a), (c[9] = n))
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
        o = (0, s.c)(8),
        { content: c, emptyTrashAction: d } = e,
        u = (0, i.Ul)(h.Op)
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
            a = (0, s.c)(5),
            { content: i, showEmptyFileTrash: l, emptyTrashAction: n } = e
          if (null == n && (void 0 === l || l)) {
            let e
            return (a[0] !== i ? ((e = (0, r.jsx)(b, { content: i })), (a[0] = i), (a[1] = e)) : (e = a[1]), e)
          }
          return (
            a[2] !== i || a[3] !== n
              ? ((t = (0, r.jsx)(v, { content: i, emptyTrashAction: n })), (a[2] = i), (a[3] = n), (a[4] = t))
              : (t = a[4]),
            t
          )
        },
      },
    )
  },
  Vcg4(e, t, a) {
    var r = a("QosV"),
      s = a("dSuP"),
      i = a("D015"),
      l = a("D7Ms"),
      n = a("NxBK"),
      o = a("zTeN"),
      c = a("zd8w"),
      d = a("yGJW"),
      u = a("cGrE"),
      h = a("TCFx"),
      g = a("Fmx8"),
      p = a("RjIR"),
      f = a("vq5I"),
      m = a("F1Es")
    let y = (0, o.un)(g.Qy, (e) => (0, l.EN)(g.i3.getOptions(e).queryKey)),
      b = (0, o.A4)(
        g.Qy,
        (e) => null,
        (e, { scope: t, set: a }) => {
          let r,
            s = t.value.deleted ? "CHATGPT_FILE_LIBRARY_ORIGIN_RECENTLY_DELETED_SCREEN" : u._0,
            l = t.queryClient.getQueryCache(),
            o = (0, f.Pw)(t.value.deleted ? null : t.value.directoryId),
            c = (e, t = !1) => {
              if ("idle" === e.state.fetchStatus) return
              let i =
                e.state.fetchMeta?.fetchMore?.direction === "forward"
                  ? "CHATGPT_FILE_LIBRARY_LOAD_TYPE_APPEND"
                  : "CHATGPT_FILE_LIBRARY_LOAD_TYPE_REFRESH"
              ;(t || r?.loadType !== i) &&
                ((r = { loadType: i, operationId: crypto.randomUUID(), startedAt: performance.now() }),
                a({
                  loadType: i,
                  operationId: r.operationId,
                  libraryOrigin: s,
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
                      latencyMs: (0, i.N3)(Math.max(0, performance.now() - n), "round"),
                      libraryOrigin: s,
                      provider: o,
                      success: !0,
                      itemCount: (0, i.PZ)((0, h.yF)(c?.pages ?? []).length),
                    })
                  } else if ("error" === d.action.type) {
                    let { loadType: e, operationId: t, startedAt: l } = r
                    ;((r = void 0),
                      d.action.error instanceof n.cc ||
                        a({
                          loadType: e,
                          operationId: t,
                          latencyMs: (0, i.N3)(Math.max(0, performance.now() - l), "round"),
                          libraryOrigin: s,
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
            { initialEntryPoint: _ } = e,
            I = (0, o.gh)(g.vn),
            T = (0, o.gh)(g.Qy),
            [A] = (0, c.useState)(_),
            L = (0, o.Ul)(y),
            E = T.value.deleted ? "CHATGPT_FILE_LIBRARY_ORIGIN_RECENTLY_DELETED_SCREEN" : u._0,
            C = (0, c.useRef)(E),
            j = (0, c.useRef)(void 0)
          x[0] !== T || x[1] !== A || x[2] !== E || x[3] !== I
            ? ((t = () => {
                let e = I.get(u.Vu),
                  t = C.current
                return (
                  (C.current = E),
                  (t === E &&
                    "favorites" === T.value.tab &&
                    null == T.value.directoryId &&
                    !T.value.deleted &&
                    T.get(p._)) ||
                    (0, d.yy)(I, s.N6, {
                      ...e,
                      action: "CHATGPT_FILE_LIBRARY_ACTION_SHOWN",
                      libraryOrigin: E,
                      entryPoint: A,
                      layout:
                        "grid" === T.get(g.YH)
                          ? "CHATGPT_FILE_LIBRARY_LAYOUT_GRID"
                          : "CHATGPT_FILE_LIBRARY_LAYOUT_LIST",
                    }),
                  e
                )
              }),
              (x[0] = T),
              (x[1] = A),
              (x[2] = E),
              (x[3] = I),
              (x[4] = t))
            : (t = x[4])
          let R = (0, c.useEffectEvent)(t)
          return (
            x[5] !== E || x[6] !== R || x[7] !== I
              ? ((a = () => {
                  let e = R()
                  return () => {
                    ;(0, d.yy)(I, s.N6, { ...e, action: "CHATGPT_FILE_LIBRARY_ACTION_DISMISSED", libraryOrigin: E })
                  }
                }),
                (x[5] = E),
                (x[6] = R),
                (x[7] = I),
                (x[8] = a))
              : (a = x[8]),
            x[9] !== E || x[10] !== I ? ((l = [I, E]), (x[9] = E), (x[10] = I), (x[11] = l)) : (l = x[11]),
            (0, c.useEffect)(a, l),
            x[12] !== T || x[13] !== L || x[14] !== I
              ? ((n = () => {
                  if ("favorites" === T.value.tab && null == T.value.directoryId && !T.value.deleted) return
                  let e = T.watch((e) => {
                    let t = e.get(b, L)
                    null != t && (0, d.yy)(I, s.Xz, { ...I.get(u.Vu), ...t })
                  })
                  return () => {
                    ;(e(), (0, o.st)(T, b, L))
                  }
                }),
                (h = [L, T, I]),
                (x[12] = T),
                (x[13] = L),
                (x[14] = I),
                (x[15] = n),
                (x[16] = h))
              : ((n = x[15]), (h = x[16])),
            (0, c.useEffect)(n, h),
            x[17] !== T || x[18] !== I
              ? ((m = () =>
                  T.watch((e) => {
                    let t,
                      { search: a, tab: r, directoryId: l, deleted: n, categories: o, sources: c } = e.value
                    if (
                      a ||
                      ("favorites" === r && null == l && !n) ||
                      ("library:collection:shared-with-me" === l && !n && 0 === o.length && 0 === c.length)
                    ) {
                      j.current = void 0
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
                    j.current !== b &&
                      ((j.current = b),
                      (0, d.yy)(I, s.oq, {
                        ...I.get(u.Vu),
                        visibleItemCount: (0, i.PZ)(p.length),
                        emptyReason: t,
                        provider: (0, f.Pw)(l),
                      }))
                  })),
                (v = [T, I]),
                (x[17] = T),
                (x[18] = I),
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
      s = a("Fmx8"),
      i = a("ahQQ")
    let l = {
        ...(0, s.ER)("/space/files", "?tab=images", "/space/files"),
        entrySurface: "spaces",
        includePages: !1,
        includeSites: !1,
        imageSourceTabs: !0,
        sources: ["generated"],
        defaultViewMode: "list",
      },
      n = (0, r.vP)(i.vn, !1)
    a.d(t, {}, { B: l, d: n })
  },
  X5eB(e, t, a) {
    var r = a("ABep"),
      s = a("QosV"),
      i = a("NxBK"),
      l = a("zTeN"),
      n = a("zd8w"),
      o = a("SPnB"),
      c = a("tl2n"),
      d = a("OMIV"),
      u = a("Fmx8"),
      h = a("ahQQ"),
      g = a("iMhR")
    let p = (0, l.vP)(h.vn, () => new Set()),
      f = (0, l.SZ)(
        h.Qy,
        () => !1,
        ({ get: e, set: t, scope: a }) => {
          let r,
            s = a.value
          if (
            (t(!1),
            "/space" !== s.basePath ||
              "suggested" !== s.tab ||
              null != s.directoryId ||
              !s.includePages ||
              s.search ||
              s.categories.length > 0 ||
              s.sources.length > 0 ||
              s.deleted ||
              !e(d.JW, "2092319279") ||
              !e(c.$7) ||
              s.accountId !== e(o.chatGptAuthenticatedAccountId$) ||
              null == s.userId ||
              s.userId !== e(o.chatGptAuthenticatedUserId$))
          )
            return
          let i = () => {
            ;(clearTimeout(r), t(!1), "visible" === document.visibilityState && (r = setTimeout(() => t(!0), 1e3)))
          }
          return (
            i(),
            document.addEventListener("visibilitychange", i),
            () => {
              ;(clearTimeout(r), document.removeEventListener("visibilitychange", i))
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
        a = (0, s.c)(3),
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
                let s = e.queryClient.getQueryCache().build(e.queryClient, a)
                if (null != s.state.data || "idle" !== s.state.fetchStatus || e.get(p).has(s.queryHash)) return
                e.set(p, (e) => new Set([...e, s.queryHash]))
                let l = () =>
                  e.value.accountId === e.get(o.chatGptAuthenticatedAccountId$) &&
                  e.value.userId === e.get(o.chatGptAuthenticatedUserId$)
                e.queryClient.prefetchInfiniteQuery({
                  ...a,
                  pages: 1,
                  queryFn: async (e) => {
                    if (!l()) throw new i.cc()
                    let t = await r(e)
                    if (!l()) throw new i.cc()
                    return t
                  },
                  retry: (e, t) => {
                    if (!s.isActive() || !l() || t instanceof i.cc) return !1
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
            a = (0, s.c)(4),
            i = (0, l.gh)(h.Qy)
          if (!(0, l.Ul)(f)) return null
          a[0] !== i ? ((e = i.getOwnValue(h.Qy)), (a[0] = i), (a[1] = e)) : (e = a[1])
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
      s = a("ozm1"),
      i = a("dSuP"),
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
      y = a("Fmx8"),
      b = a("F1Es"),
      v = a("RjIR")
    let x = "CHATGPT_FILE_LIBRARY_CATEGORY_FAVORITES",
      _ = "CHATGPT_FILE_LIBRARY_ORIGIN_LIBRARY_SCREEN",
      I = {
        uploaded: "CHATGPT_FILE_LIBRARY_SOURCE_FILTER_UPLOADED",
        generated: "CHATGPT_FILE_LIBRARY_SOURCE_FILTER_GENERATED",
      },
      T = {
        meetings: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_MEETINGS",
        pages: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_PAGES",
        images: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_IMAGES",
        documents: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_DOCUMENTS",
        spreadsheets: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_SPREADSHEETS",
        presentations: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_PRESENTATIONS",
        pdfs: "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_PDFS",
      }
    function A(e, t) {
      return e + (t.favoriteItemCount ?? t.items.length)
    }
    a.d(
      t,
      {},
      {
        m: function (e) {
          let t,
            a,
            L,
            E = (0, r.c)(5),
            { initialEntryPoint: C } = e,
            j = (0, c.gh)(y.Qy),
            [R] = (0, d.useState)(C)
          E[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = {}), (E[0] = t)) : (t = E[0])
          let w = (0, d.useRef)(t)
          return (
            E[1] !== R || E[2] !== j
              ? ((a = () => {
                  let e,
                    t = !0,
                    a = w.current,
                    r = () =>
                      t &&
                      "favorites" === j.value.tab &&
                      null == j.value.directoryId &&
                      !j.value.deleted &&
                      j.get(v._) &&
                      j.get(u.chatGptAuthenticatedAccountId$) === j.value.accountId &&
                      j.get(u.chatGptAuthenticatedUserId$) === j.value.userId,
                    c = () => ({
                      sessionId: j.get(f.Vu).sessionId,
                      libraryVariant: "CHATGPT_FILE_LIBRARY_VARIANT_DEFAULT",
                      productExperience: "work" === j.get(h.uI) ? "work" : "chat",
                    }),
                    d = () => {
                      a.operation = { operationId: crypto.randomUUID(), startedAtMs: performance.now() }
                    },
                    L = (e) => {
                      ;(0, g.yy)(j, i.N6, { ...c(), libraryOrigin: _, ...e })
                    },
                    E = j.queryClient.getQueryCache().subscribe((t) => {
                      if (
                        ("updated" === t.type || "removed" === t.type) &&
                        r() &&
                        t.query.queryHash === (0, n.EN)(j.query.getOptions(y.i3).queryKey)
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
                            (0, g.yy)(j, i.Xz, {
                              ...c(),
                              category: x,
                              libraryOrigin: _,
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
                          ;(0, g.yy)(j, i.Xz, {
                            ...c(),
                            category: x,
                            libraryOrigin: _,
                            success: r,
                            operationId: a.operationId,
                            loadType: a.loadType,
                            latencyMs: (0, s.N3)(performance.now() - a.startedAtMs, "round"),
                            itemCount: r ? (0, s.PZ)(j.query.getData(y.i3)?.pages.reduce(A, 0) ?? 0) : void 0,
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
                                      s = r?.toLowerCase()
                                    return {
                                      type: a
                                        ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_NETWORK_ERROR"
                                        : 507 === t || s?.includes("storage_limit") || s?.includes("quota")
                                          ? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_STORAGE_LIMIT"
                                          : 404 === t ||
                                              s?.includes("missing_library_file") ||
                                              s?.includes("library_file_not_found") ||
                                              "file_not_found" === s ||
                                              "file_expired" === s
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
                    C = j.watch((e) => {
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
                        _ = "grid" === o ? "library_grid" : "library_list",
                        A = JSON.stringify(t?.sources) !== JSON.stringify(e.value.sources),
                        E = JSON.stringify(t?.categories) !== JSON.stringify(e.value.categories)
                      if (a.active) {
                        if (n !== o || A || E || t?.search.toLocaleLowerCase() !== e.value.search.toLocaleLowerCase()) {
                          d()
                          let a = "CHATGPT_FILE_LIBRARY_ACTION_VIEW_CHANGED"
                          if (
                            (n !== o &&
                              L({
                                action: a,
                                layout: b,
                                changedProperty: "CHATGPT_FILE_LIBRARY_CHANGED_PROPERTY_LAYOUT",
                              }),
                            t?.sources[0] !== e.value.sources[0])
                          ) {
                            let t = e.value.sources[0]
                            L({
                              action: a,
                              changedProperty: "CHATGPT_FILE_LIBRARY_CHANGED_PROPERTY_SOURCE_FILTER",
                              sourceFilter: null == t ? "CHATGPT_FILE_LIBRARY_SOURCE_FILTER_NONE" : I[t],
                            })
                          }
                          if (t?.categories[0] !== e.value.categories[0]) {
                            let t = e.value.categories[0]
                            L({
                              action: a,
                              changedProperty: "CHATGPT_FILE_LIBRARY_CHANGED_PROPERTY_FILE_TYPE_FILTER",
                              fileTypeFilter: null == t ? "CHATGPT_FILE_LIBRARY_FILE_TYPE_FILTER_NONE" : T[t],
                            })
                          }
                        }
                      } else
                        (d(),
                          L({
                            action:
                              null == t
                                ? "CHATGPT_FILE_LIBRARY_ACTION_SHOWN"
                                : "CHATGPT_FILE_LIBRARY_ACTION_VIEW_CHANGED",
                            changedProperty: null == t ? void 0 : "CHATGPT_FILE_LIBRARY_CHANGED_PROPERTY_CATEGORY",
                            category: x,
                            layout: b,
                            entryPoint: null == t ? R : void 0,
                            operationId: a.operation?.operationId,
                          }),
                          (0, g.yy)(e, l.aF, {
                            eventType: "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_BOOKMARKS_TAB_VIEWED",
                            surface: _,
                            viewMode: o,
                          }))
                      a.active = !0
                      let C = e.get(y.i3, { enabled: !1 })
                      ;(C.isError &&
                        !a.hadLoadError &&
                        (0, g.yy)(e, l.aF, {
                          eventType: "CHATGPT_WEB_SAVED_ENTITIES_INTERACTION_EVENT_TYPE_BOOKMARKS_LOAD_ERROR",
                          surface: _,
                          result: "error",
                          viewMode: o,
                        }),
                        (a.hadLoadError = C.isError))
                      let j = a.operation,
                        w = e.get(y.en)
                      if (
                        null == j ||
                        j.operationId === a.lastResultsOperationId ||
                        null == C.data ||
                        C.isPending ||
                        C.isFetching ||
                        C.isError ||
                        ((e.value.search || e.value.categories.length > 0 || e.value.sources.length > 0) &&
                          C.hasNextPage)
                      )
                        return
                      let S = C.data.pages
                      queueMicrotask(() => {
                        let t
                        if (
                          !r() ||
                          a.operation !== j ||
                          a.lastResultsOperationId === j.operationId ||
                          e.get(y.i3, { enabled: !1 }).isFetching
                        )
                          return
                        let l = (0, m.me)(S).filter((e) => !w.has((0, m.sm)(e))).length
                        ;(0 !== l || e.value.search || !C.hasNextPage) &&
                          ((a.lastResultsOperationId = j.operationId),
                          0 !== l ||
                            e.value.search ||
                            (t =
                              e.value.categories.length > 0 || e.value.sources.length > 0
                                ? "CHATGPT_FILE_LIBRARY_EMPTY_REASON_FILTER"
                                : "CHATGPT_FILE_LIBRARY_EMPTY_REASON_NO_LIBRARY_FILES"),
                          (0, g.yy)(e, i.oq, {
                            ...c(),
                            category: x,
                            operationId: j.operationId,
                            latencyMs: (0, s.N3)(performance.now() - j.startedAtMs, "round"),
                            visibleItemCount: (0, s.PZ)(l),
                            emptyReason: t,
                          }))
                      })
                    })
                  return () => {
                    ;((t = !1), C(), E())
                  }
                }),
                (L = [R, j]),
                (E[1] = R),
                (E[2] = j),
                (E[3] = a),
                (E[4] = L))
              : ((a = E[3]), (L = E[4])),
            (0, d.useLayoutEffect)(a, L),
            null
          )
        },
      },
    )
  },
  EAun(e, t, a) {
    var r = a("ABep"),
      s = a("QosV"),
      i = a("zTeN"),
      l = a("oyxz"),
      n = a("ygO2"),
      o = a("Fmx8")
    function c(e) {
      let t,
        a,
        c,
        d,
        u,
        h = (0, s.c)(11),
        { error: g } = e,
        p = (0, i.gh)(o.Qy),
        { data: f } = (0, i.Ul)(o.rQ)
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
        h[2] !== f?.items || h[3] !== p
          ? ((a = () => {
              let e = f?.items.at(-2)
              ;(0, o.zl)(p, (0, o.SE)({ ...p.value, directoryId: e?.is_root ? null : (e?.id ?? null) }))
            }),
            (h[2] = f?.items),
            (h[3] = p),
            (h[4] = a))
          : (a = h[4]),
        h[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, r.jsx)(l.A, {
              id: "artifacts.folder_surface.sharepoint.permission_denied.button.back",
              defaultMessage: "Go back",
              description:
                "Button in a connected provider permission error that returns to a parent folder or Library root",
            })),
            (h[5] = c))
          : (c = h[5]),
        h[6] !== a ? ((d = (0, r.jsx)(n.$, { onClick: a, children: c })), (h[6] = a), (h[7] = d)) : (d = h[7]),
        h[8] !== t || h[9] !== d
          ? ((u = (0, r.jsxs)("div", {
              className: "flex flex-col items-center gap-4 py-12",
              role: "alert",
              children: [t, d],
            })),
            (h[8] = t),
            (h[9] = d),
            (h[10] = u))
          : (u = h[10]),
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
            i,
            o,
            d = (0, s.c)(10),
            { favorites: u, onRetry: h, folderError: g } = e
          if (null != g) {
            let e
            return (d[0] !== g ? ((e = (0, r.jsx)(c, { error: g })), (d[0] = g), (d[1] = e)) : (e = d[1]), e)
          }
          return (
            d[2] !== u
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
                (d[2] = u),
                (d[3] = t))
              : (t = d[3]),
            d[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, r.jsx)(l.A, {
                  id: "libraryNext.results.retry",
                  defaultMessage: "Try again",
                  description: "Retry fetching Library results",
                })),
                (d[4] = a))
              : (a = d[4]),
            d[5] !== h ? ((i = (0, r.jsx)(n.$, { onClick: h, children: a })), (d[5] = h), (d[6] = i)) : (i = d[6]),
            d[7] !== t || d[8] !== i
              ? ((o = (0, r.jsxs)("div", {
                  className: "flex flex-col items-center gap-4 py-12",
                  role: "alert",
                  children: [t, i],
                })),
                (d[7] = t),
                (d[8] = i),
                (d[9] = o))
              : (o = d[9]),
            o
          )
        },
      },
    )
  },
  fhVa(e, t, a) {
    a.a(e, async function (e, r) {
      try {
        var s = a("ABep"),
          i = a("QosV"),
          l = a("on57"),
          n = a("zTeN"),
          o = a("zd8w"),
          c = a("HZfM"),
          d = a("bJfu"),
          u = a("Bbed"),
          h = a("e1xH"),
          g = a("FWLJ"),
          p = a("T3CH"),
          f = a("CLFW"),
          m = a("Goes"),
          y = a("sg90"),
          b = a("pdPj"),
          v = a("V080"),
          x = a("VpUQ"),
          _ = a("cGrE"),
          I = a("Vcg4"),
          T = a("Fmx8"),
          A = a("X5eB"),
          L = a("K9Zg"),
          E = a("XmDk"),
          C = a("kQiD"),
          j = a("tpma"),
          R = a("BV4m"),
          w = a("dLIb"),
          S = a("wHLp"),
          N = a("M4Gn"),
          P = a("QoH2"),
          M = a("Wg4b"),
          F = a("NCaE"),
          O = a("LVlF"),
          G = a("zbzy"),
          B = a("jx6J"),
          Y = e([E])
        E = (Y.then ? (await Y)() : Y)[0]
        let V = (0, u._)(async () => (await a.e(398281).then(a.bind(a, "QScO"))).SpaceTrashItems, {
          fallback: (0, s.jsx)(f.D, {}),
        })
        function H(e) {
          return (0, s.jsx)(U, { onOpenItem: e })
        }
        function U(e) {
          let t,
            a,
            r,
            l,
            d,
            u,
            h,
            g,
            p = (0, i.c)(25),
            { onOpenItem: f } = e,
            m = (0, c.zy)(),
            y = (0, c.Zp)()
          p[0] !== m.search ? ((t = (0, S.G)(m.search)), (p[0] = m.search), (p[1] = t)) : (t = p[1])
          let b = t
          ;(p[2] !== m.hash || p[3] !== m.pathname || p[4] !== m.search || p[5] !== m.state || p[6] !== y
            ? ((a = () => {
                let e = new URLSearchParams(m.search)
                e.has("entry_point") &&
                  ((0, T.ER)(m.pathname, m.search).storageCleanup && e.set("storage_cleanup", "true"),
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
              ? ((d = (0, T.ER)(m.pathname, m.search, "/library", v)),
                (p[13] = m.pathname),
                (p[14] = m.search),
                (p[15] = v),
                (p[16] = d))
              : (d = p[16]),
            p[17] !== d ? ((u = { ...d, entrySurface: "library" }), (p[17] = d), (p[18] = u)) : (u = p[18]),
            p[19] !== b || p[20] !== f
              ? ((h = (0, s.jsx)(k, { entryPoint: b, onOpenItem: f })), (p[19] = b), (p[20] = f), (p[21] = h))
              : (h = p[21]),
            p[22] !== u || p[23] !== h
              ? ((g = (0, s.jsx)(n.Ui, {
                  scope: T.vn,
                  value: l,
                  children: (0, s.jsx)(n.Ui, { scope: T.Qy, value: u, children: h }),
                })),
                (p[22] = u),
                (p[23] = h),
                (p[24] = g))
              : (g = p[24]),
            g
          )
        }
        function k(e) {
          let t,
            a,
            r,
            l,
            d,
            u,
            p,
            E,
            S,
            F,
            Y,
            H,
            U,
            k,
            z,
            Q,
            Z,
            q,
            W,
            K,
            $,
            J,
            X,
            ee = (0, i.c)(103),
            {
              scrollContainerRef: et,
              entryPoint: ea,
              isVisible: er,
              onOpenItem: es,
              title: ei,
              controls: el,
              navigation: en,
              results: eo,
              onSelectionToolbarMount: ec,
              stickyNavigation: ed,
            } = e,
            eu = void 0 === er || er,
            eh = (0, n.gh)(T.Qy),
            eg = (0, n.Ul)(b.l),
            ep = (0, n.Ul)(T.eY),
            ef = (0, n.Ul)(P.N3),
            em = (0, n.Ul)(eh.value.deleted ? h.GU : null),
            ey = (0, n.Ul)(eh.value.deleted ? h.Op : null),
            eb = (0, n.Ul)(ey ? T.RK : null),
            ev = (0, c.zy)(),
            ex = (0, n.Ul)(T.g_)
          ee[0] !== ev || ee[1] !== ex
            ? ((t = null == ex ? ev : new URL(ex, "https://chatgpt.com")),
              (a = new URLSearchParams(t.search).get("trash_kind")),
              (ee[0] = ev),
              (ee[1] = ex),
              (ee[2] = t),
              (ee[3] = a))
            : ((t = ee[2]), (a = ee[3]))
          let e_ = a,
            eI = "files"
          "pages" === e_ ? (eI = "pages") : "spaces" === e_ && "enabled" === em && (eI = "spaces")
          let eT = eh.value.deleted && "enabled" === em && !ey,
            eA = !eT || "files" === eI,
            eL = (0, n.Ul)(eh.value.deleted && "loading" !== em ? y.Q : null),
            eE = (0, o.useRef)(null),
            eC = et ?? eE
          if (
            (ee[4] !== eh
              ? ((r = () => (0, T.Rd)(eh)), (l = [eh]), (ee[4] = eh), (ee[5] = r), (ee[6] = l))
              : ((r = ee[5]), (l = ee[6])),
            (0, o.useEffect)(r, l),
            ee[7] !== eu || ee[8] !== eh
              ? ((d = () => {
                  if (eu) return (0, T.iK)(eh)
                }),
                (u = [eh, eu]),
                (ee[7] = eu),
                (ee[8] = eh),
                (ee[9] = d),
                (ee[10] = u))
              : ((d = ee[9]), (u = ee[10])),
            (0, o.useEffect)(d, u),
            "loading" === em && (ey || "files" !== eI))
          ) {
            let e
            return (
              ee[11] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, s.jsx)(f.D, {})), (ee[11] = e))
                : (e = ee[11]),
              e
            )
          }
          ee[12] !== eh ? ((p = (e) => (0, _.np)(eh, { category: e })), (ee[12] = eh), (ee[13] = p)) : (p = ee[13])
          let ej = p
          if (eT) {
            let e, a
            ;(ee[14] !== t.hash || ee[15] !== t.pathname || ee[16] !== t.search || ee[17] !== ev.state || ee[18] !== eh
              ? ((e = (e) => {
                  let a = new URLSearchParams(t.search)
                  ;("files" === e ? a.delete("trash_kind") : a.set("trash_kind", e),
                    (0, T.zl)(eh, `${t.pathname}?${a.toString()}${t.hash}`, { replace: !0, state: ev.state }))
                }),
                (ee[14] = t.hash),
                (ee[15] = t.pathname),
                (ee[16] = t.search),
                (ee[17] = ev.state),
                (ee[18] = eh),
                (ee[19] = e))
              : (e = ee[19]),
              ee[20] !== e || ee[21] !== eI
                ? ((a = (0, s.jsx)(m.N, { kind: eI, onSelect: e })), (ee[20] = e), (ee[21] = eI), (ee[22] = a))
                : (a = ee[22]),
              (E = a))
          } else if (!eh.value.deleted && !eh.value.search && null == eh.value.directoryId) {
            let e, t
            ;(ee[23] !== eh ? ((e = (e) => (0, T.zl)(eh, e)), (ee[23] = eh), (ee[24] = e)) : (e = ee[24]),
              ee[25] !== ej || ee[26] !== eh.value || ee[27] !== e
                ? ((t = (0, s.jsx)(N.I2, {
                    basePath: eh.value.basePath,
                    browseLocation: eh.value,
                    selectedKey: eh.value.tab,
                    onFileTabSelect: ej,
                    onNavigate: e,
                  })),
                  (ee[25] = ej),
                  (ee[26] = eh.value),
                  (ee[27] = e),
                  (ee[28] = t))
                : (t = ee[28]),
              (E = t))
          }
          ee[30] !== eb || ee[31] !== es || ee[32] !== eo || ee[33] !== ey
            ? ((S = ey
                ? (0, s.jsx)(j.Y, { onOpenItem: es, emptyState: eb ? null : void 0 })
                : (eo ?? (0, s.jsx)(j.Y, { onOpenItem: es }))),
              (ee[30] = eb),
              (ee[31] = es),
              (ee[32] = eo),
              (ee[33] = ey),
              (ee[34] = S))
            : (S = ee[34])
          let eR = S
          ;(ee[35] !== eu ? ((F = eu ? (0, s.jsx)(A.$, {}) : null), (ee[35] = eu), (ee[36] = F)) : (F = ee[36]),
            ee[37] !== eh.value.accountId || ee[38] !== eh.value.userId
              ? ((Y = JSON.stringify([eh.value.accountId, eh.value.userId])),
                (ee[37] = eh.value.accountId),
                (ee[38] = eh.value.userId),
                (ee[39] = Y))
              : (Y = ee[39]),
            ee[40] !== ea || ee[41] !== Y
              ? ((H = (0, s.jsx)(L.m, { initialEntryPoint: ea }, Y)), (ee[40] = ea), (ee[41] = Y), (ee[42] = H))
              : (H = ee[42]),
            ee[43] !== ea || ee[44] !== eh.value.accountId || ee[45] !== eh.value.userId || ee[46] !== eA
              ? ((U = eA
                  ? (0, s.jsx)(
                      I.i,
                      { initialEntryPoint: ea },
                      `analytics:${JSON.stringify([eh.value.accountId, eh.value.userId])}`,
                    )
                  : null),
                (ee[43] = ea),
                (ee[44] = eh.value.accountId),
                (ee[45] = eh.value.userId),
                (ee[46] = eA),
                (ee[47] = U))
              : (U = ee[47]),
            ee[48] === Symbol.for("react.memo_cache_sentinel")
              ? ((k = (0, s.jsx)(R.c, {})), (ee[48] = k))
              : (k = ee[48]))
          let ew = !eh.value.deleted
          ;(ee[49] !== ei
            ? ((z = void 0 === ei ? (0, s.jsx)(N.e9, {}) : ei), (ee[49] = ei), (ee[50] = z))
            : (z = ee[50]),
            ee[51] !== eh.value.accountId || ee[52] !== eh.value.userId
              ? ((Q = JSON.stringify([eh.value.accountId, eh.value.userId])),
                (ee[51] = eh.value.accountId),
                (ee[52] = eh.value.userId),
                (ee[53] = Q))
              : (Q = ee[53]),
            ee[54] !== eu || ee[55] !== Q
              ? ((Z = (0, s.jsx)(G.M, { isVisible: eu }, Q)), (ee[54] = eu), (ee[55] = Q), (ee[56] = Z))
              : (Z = ee[56]),
            ee[57] !== el ||
            ee[58] !== eT ||
            ee[59] !== eh.value.accountId ||
            ee[60] !== eh.value.deleted ||
            ee[61] !== eA ||
            ee[62] !== eL ||
            ee[63] !== eI
              ? ((q =
                  void 0 === el
                    ? !eL &&
                      (0, s.jsx)(N.pH, {
                        showFilters: eA,
                        showBrowseControls: !eT || "spaces" !== eI,
                        actions: eh.value.deleted
                          ? void 0
                          : (0, s.jsx)(v.Rr, { handleOnboarding: !0 }, eh.value.accountId),
                      })
                    : el),
                (ee[57] = el),
                (ee[58] = eT),
                (ee[59] = eh.value.accountId),
                (ee[60] = eh.value.deleted),
                (ee[61] = eA),
                (ee[62] = eL),
                (ee[63] = eI),
                (ee[64] = q))
              : (q = ee[64]))
          let eS = void 0 === en ? E : en
          return (
            ee[65] !== eb ||
            ee[66] !== ep ||
            ee[67] !== eR ||
            ee[68] !== eg ||
            ee[69] !== eh.value.deleted ||
            ee[70] !== eh.value.search ||
            ee[71] !== eC ||
            ee[72] !== eA ||
            ee[73] !== eL
              ? ((W = eA
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        eh.value.deleted && (!eL || eb) ? (0, s.jsx)(x.e, {}) : null,
                        eg && ep && !eh.value.search && (0, s.jsx)(C.Y, {}),
                        !1,
                        (0, s.jsx)(D, {
                          scrollContainerRef: eC,
                          children: (0, s.jsx)(M.G, {
                            scrollContainerRef: eC,
                            children: eL && !eb ? (0, s.jsx)(g.n, { view: "trash" }) : eR,
                          }),
                        }),
                      ],
                    })
                  : null),
                (ee[65] = eb),
                (ee[66] = ep),
                (ee[67] = eR),
                (ee[68] = eg),
                (ee[69] = eh.value.deleted),
                (ee[70] = eh.value.search),
                (ee[71] = eC),
                (ee[72] = eA),
                (ee[73] = eL),
                (ee[74] = W))
              : (W = ee[74]),
            ee[75] !== eT || ee[76] !== ec || ee[77] !== eC || ee[78] !== eA || ee[79] !== eI
              ? ((K =
                  eT && !eA
                    ? (0, s.jsx)(V, {
                        kind: "spaces" === eI ? "space" : "page",
                        scrollContainerRef: eC,
                        onSelectionToolbarMount: ec,
                      })
                    : null),
                (ee[75] = eT),
                (ee[76] = ec),
                (ee[77] = eC),
                (ee[78] = eA),
                (ee[79] = eI),
                (ee[80] = K))
              : (K = ee[80]),
            ee[81] !== eC ||
            ee[82] !== ed ||
            ee[83] !== ew ||
            ee[84] !== z ||
            ee[85] !== Z ||
            ee[86] !== q ||
            ee[87] !== eS ||
            ee[88] !== W ||
            ee[89] !== K
              ? (($ = (0, s.jsx)(B.v, {
                  children: (0, s.jsxs)(w.WI, {
                    stickyNavigation: ed,
                    scrollContainerRef: eC,
                    contentInset: ew,
                    title: z,
                    banner: Z,
                    controls: q,
                    navigation: eS,
                    children: [W, K],
                  }),
                })),
                (ee[81] = eC),
                (ee[82] = ed),
                (ee[83] = ew),
                (ee[84] = z),
                (ee[85] = Z),
                (ee[86] = q),
                (ee[87] = eS),
                (ee[88] = W),
                (ee[89] = K),
                (ee[90] = $))
              : ($ = ee[90]),
            ee[91] !== eb || ee[92] !== ec || ee[93] !== ef || ee[94] !== eC || ee[95] !== eA
              ? ((J =
                  eA && !eb && (null == ef || ef.entry?.node.saved_entity != null)
                    ? (0, s.jsx)(O.l, { scrollContainerRef: eC, onMount: ec })
                    : null),
                (ee[91] = eb),
                (ee[92] = ec),
                (ee[93] = ef),
                (ee[94] = eC),
                (ee[95] = eA),
                (ee[96] = J))
              : (J = ee[96]),
            ee[97] !== H || ee[98] !== U || ee[99] !== $ || ee[100] !== J || ee[101] !== F
              ? ((X = (0, s.jsxs)("div", { className: "h-full min-h-0 contain-layout", children: [F, H, U, k, $, J] })),
                (ee[97] = H),
                (ee[98] = U),
                (ee[99] = $),
                (ee[100] = J),
                (ee[101] = F),
                (ee[102] = X))
              : (X = ee[102]),
            X
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
            g = (0, i.c)(24),
            { children: f, scrollContainerRef: m } = e,
            y = (0, n.gh)(T.Qy),
            b = (0, n.Ul)(p.xv),
            v = (0, n._U)(b ? p.BV : null, null),
            x = (0, n.Ul)(F.oe).size > 0,
            _ = (0, n.Ul)(p.IW)
          ;(g[0] !== _ || g[1] !== m
            ? ((t = () => {
                let e = m.current
                null != _ && null != e && (e.scrollTop = 0)
              }),
              (a = [_, m]),
              (g[0] = _),
              (g[1] = m),
              (g[2] = t),
              (g[3] = a))
            : ((t = g[2]), (a = g[3])),
            (0, o.useEffect)(t, a))
          let I = b && "-mx-(--library-browse-gutter) -my-4 rounded-xl px-(--library-browse-gutter) pt-4",
            A = b && !x && "pb-4",
            L = x && "pb-24",
            E = v && "outline-2 -outline-offset-2 outline-text-info"
          return (
            g[4] !== I || g[5] !== A || g[6] !== L || g[7] !== E
              ? ((r = (0, l.A)("flex min-h-0 flex-1 flex-col", I, A, L, E)),
                (g[4] = I),
                (g[5] = A),
                (g[6] = L),
                (g[7] = E),
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
              ? ((h = (0, s.jsx)("div", {
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
                t = (0, i.c)(1)
              return (
                t[0] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(d.G.MainContentLayout, { layout: "custom-titlebar" }),
                        (0, s.jsx)(E.$, { children: H }),
                      ],
                    })),
                    (t[0] = e))
                  : (e = t[0]),
                e
              )
            },
            b: k,
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
      s = a("QosV"),
      i = a("ECyk"),
      l = a("zTeN"),
      n = a("zd8w"),
      o = a("Wf1j"),
      c = a("oyxz"),
      d = a("Hh7n"),
      u = a("iHfE"),
      h = a("t5e6"),
      g = a("ygO2"),
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
            _,
            I,
            T,
            A,
            L,
            E = (0, s.c)(25),
            C = (0, l.gh)(m.u),
            j = (0, n.useId)(),
            R = (0, o.A)(),
            { data: w } = (0, l.Ul)(u.$4)
          E[0] !== C
            ? ((e = (e) => {
                ;(null == e ? (0, d.h9)(C) : (0, d.Su)(C, e)).catch(b)
              }),
              (E[0] = C),
              (E[1] = e))
            : (e = E[1])
          let S = e
          return (
            E[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, r.jsx)(c.A, { ...f.T.libraryHeading })), (E[2] = t))
              : (t = E[2]),
            E[3] !== j
              ? ((a = (0, r.jsx)("h2", { id: j, className: "text-sm font-semibold text-primary", children: t })),
                (E[3] = j),
                (E[4] = a))
              : (a = E[4]),
            E[5] !== R || E[6] !== S || E[7] !== w
              ? ((y = w?.map((e) => {
                  let t = "self" === e.entity_type ? R.formatMessage(f.T.entitySelf) : e.entity_name
                  return (0, r.jsx)(
                    "li",
                    {
                      className: "shrink-0",
                      children: (0, r.jsxs)(g.$, {
                        className: "ps-1.25",
                        "aria-label": R.formatMessage(f.T.libraryManage, { name: t }),
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
                (E[5] = R),
                (E[6] = S),
                (E[7] = w),
                (E[8] = y))
              : (y = E[8]),
            E[9] !== R ? ((v = R.formatMessage(f.T.addReference)), (E[9] = R), (E[10] = v)) : (v = E[10]),
            E[11] !== S ? ((x = () => S()), (E[11] = S), (E[12] = x)) : (x = E[12]),
            E[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((_ = (0, r.jsx)(p.I, { asset: i.f })), (I = (0, r.jsx)(c.A, { ...f.T.add })), (E[13] = _), (E[14] = I))
              : ((_ = E[13]), (I = E[14])),
            E[15] !== v || E[16] !== x
              ? ((T = (0, r.jsx)("li", {
                  className: "shrink-0",
                  children: (0, r.jsxs)(g.$, {
                    "aria-label": v,
                    color: "outlineGhost",
                    radius: "full",
                    size: "dialogAction",
                    onClick: x,
                    children: [_, I],
                  }),
                })),
                (E[15] = v),
                (E[16] = x),
                (E[17] = T))
              : (T = E[17]),
            E[18] !== y || E[19] !== T
              ? ((A = (0, r.jsxs)("ul", {
                  className: "no-scrollbar mt-3 flex min-w-0 items-center gap-2 overflow-x-auto pb-1",
                  children: [y, T],
                })),
                (E[18] = y),
                (E[19] = T),
                (E[20] = A))
              : (A = E[20]),
            E[21] !== j || E[22] !== a || E[23] !== A
              ? ((L = (0, r.jsxs)("section", { "aria-labelledby": j, className: "py-4", children: [a, A] })),
                (E[21] = j),
                (E[22] = a),
                (E[23] = A),
                (E[24] = L))
              : (L = E[24]),
            L
          )
        },
      },
    )
  },
  tpma(e, t, a) {
    a.d(t, { Z: () => eh, Y: () => W })
    var r = a("ABep"),
      s = a("QosV"),
      i = a("bVKo"),
      l = a("nSrF"),
      n = a("ZaI7"),
      o = a("aHOw"),
      c = a("on57"),
      d = a("zTeN"),
      u = a("zd8w"),
      h = a("Wf1j"),
      g = a("oyxz"),
      p = a("ygO2"),
      f = a("HOLv"),
      m = a("GO7r"),
      y = a("wZQ4"),
      b = a("FrrB"),
      v = a("wEIr"),
      x = a("zkPp"),
      _ = a("X3K1"),
      I = a("KIKs"),
      T = a("e1xH"),
      A = a("FWLJ"),
      L = a("OMIV"),
      E = a("V080"),
      C = a("tl2n"),
      j = a("TCFx"),
      R = a("Fmx8"),
      w = a("yqtf"),
      S = a("DZee"),
      N = a("RjIR"),
      P = a("T7QO"),
      M = a("uSjY"),
      F = a("LcBG"),
      O = a("PArc"),
      G = a("oGMr"),
      B = a("FBu8"),
      Y = a("EAun"),
      H = a("lbUx"),
      U = a("SPnB"),
      k = a("NCaE")
    function D(e) {
      let t,
        a,
        i = (0, s.c)(6),
        l = (0, d.Ul)(U.chatGptAuthenticatedAccountId$),
        n = (0, d.Ul)(U.chatGptAuthenticatedUserId$)
      return (
        i[0] !== l || i[1] !== n ? ((t = JSON.stringify([n, l])), (i[0] = l), (i[1] = n), (i[2] = t)) : (t = i[2]),
        i[3] !== e || i[4] !== t ? ((a = (0, r.jsx)(V, { ...e }, t)), (i[3] = e), (i[4] = t), (i[5] = a)) : (a = i[5]),
        a
      )
    }
    function V(e) {
      let t,
        a,
        i,
        l = (0, s.c)(9),
        { entries: n, renderedItems: o, renderItem: c } = e,
        u = (0, d.Ul)(k.CO)
      if (l[0] !== n || l[1] !== c || l[2] !== o || l[3] !== u) {
        let e = new Map()
        for (let t of n) {
          if (!("node" in t) || "owned" !== t.node.access_kind || !t.node.origination_thread_id) continue
          let a = t.node,
            r = a.image_iteration_group_id
          if (!r) continue
          let s = JSON.stringify([a.origination_thread_id, r]),
            i = e.get(s) ?? []
          ;(i.push(t), e.set(s, i))
        }
        let r = new Map()
        if (!u)
          for (let t of e.values()) {
            if (t.length < 2) continue
            let e = { items: t.toSorted(z) }
            for (let a of t) r.set((0, j.e4)(a), e)
          }
        let s = new Set()
        ;((t = F.bg),
          (a = o.flatMap((e) => {
            let t = r.get(e.id)
            if (!t) return [e]
            if (s.has(t)) return []
            s.add(t)
            let a = t.items[0]
            return [{ id: (0, j.e4)(a), content: c(a, t) }]
          })),
          (l[0] = n),
          (l[1] = c),
          (l[2] = o),
          (l[3] = u),
          (l[4] = t),
          (l[5] = a))
      } else ((t = l[4]), (a = l[5]))
      return (
        l[6] !== t || l[7] !== a ? ((i = (0, r.jsx)(t, { items: a })), (l[6] = t), (l[7] = a), (l[8] = i)) : (i = l[8]),
        i
      )
    }
    function z(e, t) {
      return (Date.parse(t.node.record_creation_time ?? "") || 0) - (Date.parse(e.node.record_creation_time ?? "") || 0)
    }
    var Q = a("sz7l"),
      Z = a("vmOG"),
      q = a("F1Es")
    function W(e) {
      let t,
        a,
        i,
        l,
        n,
        o,
        c,
        u,
        f,
        m,
        v,
        I,
        T,
        A,
        L,
        E,
        S,
        P,
        F = (0, s.c)(130),
        {
          rowLayout: O,
          onOpenItem: U,
          structuredGridEnabled: k,
          renderContentItem: D,
          items: V,
          supplementalItems: z,
          contentPending: Q,
          notice: Z,
          additionalPagination: W,
          pagination: ee,
          renderSource: et,
          emptyState: ea,
          reserveDisclosureSpace: er,
          groupByActivityDate: es,
        } = e,
        ei = void 0 === O ? "columns" : O
      F[0] !== z ? ((t = void 0 === z ? [] : z), (F[0] = z), (F[1] = t)) : (t = F[1])
      let el = t,
        en = void 0 !== Q && Q,
        eo = void 0 !== er && er,
        ec = void 0 !== es && es,
        ed = (0, d.gh)(R.Qy),
        eu = (0, h.A)(),
        eg = (0, d.Ul)(R.YH),
        ep = (0, d.Ul)(null == V ? R.PP : void 0),
        ef = (0, d.Ul)(R.nt),
        em = (0, d.Ul)(w.U),
        ey = (0, d.Ul)(R.u$),
        eb = V ?? ep,
        ev = el
      if (ey.length > 0) {
        let e, t
        if (
          (F[2] !== eb || F[3] !== ey
            ? ((e = eb?.filter((e) => !ey.includes((0, j.e4)(e)))), (F[2] = eb), (F[3] = ey), (F[4] = e))
            : (e = F[4]),
          (eb = e),
          F[5] !== ey || F[6] !== ev)
        ) {
          let e
          ;(F[8] !== ey ? ((e = (e) => !ey.includes(e.id)), (F[8] = ey), (F[9] = e)) : (e = F[9]),
            (t = ev.filter(e)),
            (F[5] = ey),
            (F[6] = ev),
            (F[7] = t))
        } else t = F[7]
        ev = t
      }
      let ex = ev.length > 0,
        e_ = (0, d.Ul)(N._),
        eI = (0, d.Ul)(R.JZ),
        eT = "favorites" === ed.value.tab && null == ed.value.directoryId && !ed.value.deleted,
        {
          isPending: eA,
          isFetchedAfterMount: eL,
          isFetching: eE,
          error: eC,
          refetch: ej,
          hasNextPage: eR,
          isFetchingNextPage: ew,
          isFetchNextPageError: eS,
          fetchNextPage: eN,
          data: eP,
        } = (0, d.Ul)(R.i3),
        eM = ee?.hasNextPage ?? eR,
        eF = ee?.fetchNextPage ?? eN,
        eO = ee?.isFetching ?? eE,
        eG = (0, d.Ul)(R.IM),
        eB =
          "error" === (0, d.Ul)(C.dk) &&
          null == ed.value.directoryId &&
          null == ed.value.pageCollection &&
          "all" === ed.value.tab
      F[10] !== eC || F[11] !== ed.value.directoryId
        ? ((a = null == ed.value.directoryId ? null : (0, G.m)(eC, (0, j.oh)(ed.value.directoryId))),
          (F[10] = eC),
          (F[11] = ed.value.directoryId),
          (F[12] = a))
        : (a = F[12])
      let eY = a
      if (eT && !e_) {
        let e
        return (
          F[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(b.A, {
                layout: "browse",
                title: (0, r.jsx)(g.A, {
                  id: "library.favorites.unavailable",
                  defaultMessage: "Favorites are not available for this account",
                  description:
                    "Message when the Favorites link is opened in an account where the Library experience is not enabled",
                }),
              })),
              (F[13] = e))
            : (e = F[13]),
          e
        )
      }
      if ("unavailable" === eG) {
        let e, t
        return (
          F[14] !== ed
            ? ((e = () => {
                ;(0, R.PV)(ed)
              }),
              (F[14] = ed),
              (F[15] = e))
            : (e = F[15]),
          F[16] !== eT || F[17] !== e
            ? ((t = (0, r.jsx)(Y._, { favorites: eT, folderError: null, onRetry: e })),
              (F[16] = eT),
              (F[17] = e),
              (F[18] = t))
            : (t = F[18]),
          t
        )
      }
      F[19] !== eP || F[20] !== eL || F[21] !== eE || F[22] !== ew
        ? ((i = eE && (!eL || ew || null == eP || eP.pages.some(J))),
          (F[19] = eP),
          (F[20] = eL),
          (F[21] = eE),
          (F[22] = ew),
          (F[23] = i))
        : (i = F[23])
      let eH = i
      F[24] !== eG ||
      F[25] !== en ||
      F[26] !== eP?.pages ||
      F[27] !== ea ||
      F[28] !== eb?.length ||
      F[29] !== ex ||
      F[30] !== eL ||
      F[31] !== eE ||
      F[32] !== eA ||
      F[33] !== em?.isPending ||
      F[34] !== eI
        ? ((l =
            em?.isPending ||
            "loading" === eG ||
            (eI && eE && !eL) ||
            (!eb?.length && !ex && (en || eA || (eE && (void 0 !== ea || !!eP?.pages.every($)))))),
          (F[24] = eG),
          (F[25] = en),
          (F[26] = eP?.pages),
          (F[27] = ea),
          (F[28] = eb?.length),
          (F[29] = ex),
          (F[30] = eL),
          (F[31] = eE),
          (F[32] = eA),
          (F[33] = em?.isPending),
          (F[34] = eI),
          (F[35] = l))
        : (l = F[35])
      let eU = l
      if (!eU && ((null == eP && !eb?.length && !ex) || null != eY)) {
        let e, t, a
        return (
          F[36] !== eB || F[37] !== ej || F[38] !== ed
            ? ((e = () => {
                eB
                  ? (0, R.PV)(ed)
                  : (0, q.S)(ed.queryClient, ed.query.getOptions(R.i3).queryKey, () => {
                      ej()
                    })
              }),
              (F[36] = eB),
              (F[37] = ej),
              (F[38] = ed),
              (F[39] = e))
            : (e = F[39]),
          F[40] !== eT || F[41] !== eY || F[42] !== e
            ? ((t = (0, r.jsx)(Y._, { favorites: eT, onRetry: e, folderError: eY })),
              (F[40] = eT),
              (F[41] = eY),
              (F[42] = e),
              (F[43] = t))
            : (t = F[43]),
          F[44] !== W || F[45] !== t
            ? ((a = (0, r.jsxs)(r.Fragment, { children: [t, W] })), (F[44] = W), (F[45] = t), (F[46] = a))
            : (a = F[46]),
          a
        )
      }
      let ek = !!ed.value.search && !eE && !eM && (0, j.I9)(eP?.pages),
        eD = null
      if (ek && eP?.pages.at(-1)?.partialResults !== !0) {
        let e
        ;(F[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(g.A, {
              id: "libraryNext.results.searchIncomplete",
              defaultMessage: "Some search results could not be loaded",
              description:
                "Status when a search source could not return all of its results; the adjacent retry button retries the search",
            })),
            (F[47] = e))
          : (e = F[47]),
          (eD = e))
      } else if (null != eC) {
        let e
        ;(F[48] !== eT
          ? ((e = eT
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
            (F[48] = eT),
            (F[49] = e))
          : (e = F[49]),
          (eD = e))
      }
      let eV =
          "available" === eG &&
          "library:collection:shared-with-me" === ed.value.directoryId &&
          !!ed.value.search &&
          !eb?.length &&
          !ex &&
          eM &&
          null == eC,
        ez = eP?.pages.length
      ;(F[50] !== eF
        ? ((n = () => {
            eF({ cancelRefetch: !1 })
          }),
          (F[50] = eF),
          (F[51] = n))
        : (n = F[51]),
        F[52] !== eM || F[53] !== eO || F[54] !== ez || F[55] !== n
          ? ((o = (0, r.jsx)(
              y.D,
              { loadingPlaceholder: null, hasNextPage: eM, isFetchingNextPage: eO, onLoadNextPage: n },
              ez,
            )),
            (F[52] = eM),
            (F[53] = eO),
            (F[54] = ez),
            (F[55] = n),
            (F[56] = o))
          : (o = F[56]))
      let eQ = o,
        eZ = eU || eV,
        eq = null != eb || ex,
        eW = null != ed.value.pageCollection || ("folders" === ed.value.tab && !ed.value.search)
      F[57] !== eu
        ? ((c = eu.formatMessage({
            id: "library.list.label",
            defaultMessage: "Library files",
            description: "Accessible label for the Library file list with sortable columns",
          })),
          (F[57] = eu),
          (F[58] = c))
        : (c = F[58])
      let eK = null != et
      ;(F[59] !== eo || F[60] !== ei || F[61] !== eK
        ? ((u = (0, r.jsx)(eh, { layout: ei, isLoading: !0, showSource: eK, reserveDisclosureSpace: eo })),
          (F[59] = eo),
          (F[60] = ei),
          (F[61] = eK),
          (F[62] = u))
        : (u = F[62]),
        F[63] !== ec
          ? ((f = ec
              ? (0, r.jsx)("div", {
                  "aria-hidden": !0,
                  className: "mx-3 shrink-0 border-b border-subtle pt-5 pb-2",
                  children: (0, r.jsx)("div", {
                    className: "flex h-5 items-center",
                    children: (0, r.jsx)(_.X, { className: "w-16", size: "sm", variant: "chatgpt-project" }),
                  }),
                })
              : null),
            (F[63] = ec),
            (F[64] = f))
          : (f = F[64]))
      let e$ = null != et
      ;(F[65] !== eo || F[66] !== ei || F[67] !== e$
        ? ((m = (0, r.jsx)(B.V, { layout: ei, showSource: e$, reserveDisclosureSpace: eo })),
          (F[65] = eo),
          (F[66] = ei),
          (F[67] = e$),
          (F[68] = m))
        : (m = F[68]),
        F[69] !== c || F[70] !== u || F[71] !== f || F[72] !== m
          ? ((v = (0, r.jsxs)(x.eb, {
              className: "-mx-[var(--padding-row-cell-x,var(--padding-row-x))] flex min-h-0 flex-1 flex-col",
              role: "grid",
              tabIndex: -1,
              "aria-label": c,
              "aria-multiselectable": !0,
              onKeyDown: M.T,
              children: [u, f, m],
            })),
            (F[69] = c),
            (F[70] = u),
            (F[71] = f),
            (F[72] = m),
            (F[73] = v))
          : (v = F[73]),
        F[74] !== eC || F[75] !== eF || F[76] !== eS || F[77] !== ej || F[78] !== ed
          ? ((I = () => {
              ;(0, q.S)(ed.queryClient, ed.query.getOptions(R.i3).queryKey, () => {
                ;(0, j.hk)(eC, ed.get(R.sp))
                  ? ed.queryClient.resetQueries({ queryKey: ed.query.getOptions(R.i3).queryKey, exact: !0 })
                  : eS && !(0, j.sW)(eC)
                    ? eF({ cancelRefetch: !1 })
                    : ej()
              })
            }),
            (F[74] = eC),
            (F[75] = eF),
            (F[76] = eS),
            (F[77] = ej),
            (F[78] = ed),
            (F[79] = I))
          : (I = F[79]),
        F[80] !== eB || F[81] !== ed
          ? ((T = eB
              ? (0, r.jsx)(Y._, {
                  favorites: !1,
                  folderError: null,
                  onRetry: () => {
                    ;(0, R.PV)(ed)
                  },
                })
              : null),
            (F[80] = eB),
            (F[81] = ed),
            (F[82] = T))
          : (T = F[82]),
        F[83] !== Z || F[84] !== T
          ? ((A = (0, r.jsxs)(r.Fragment, { children: [T, Z] })), (F[83] = Z), (F[84] = T), (F[85] = A))
          : (A = F[85]),
        F[86] !== eP?.pages ||
        F[87] !== eF ||
        F[88] !== eM ||
        F[89] !== ew ||
        F[90] !== eH ||
        F[91] !== eQ ||
        F[92] !== et ||
        F[93] !== eo ||
        F[94] !== ei ||
        F[95] !== ed.value.categories ||
        F[96] !== ed.value.includePages ||
        F[97] !== ed.value.search ||
        F[98] !== ed.value.tab ||
        F[99] !== eg
          ? ((L =
              ed.value.includePages &&
              "suggested" === ed.value.tab &&
              !ed.value.search &&
              0 === ed.value.categories.length &&
              eM &&
              (eP?.pages.at(-1)?.results ?? eP?.pages.at(-1)?.items)?.length === 0
                ? (0, r.jsx)(p.$, {
                    color: "ghost",
                    disabled: ew,
                    loading: ew,
                    onClick: () => {
                      eF({ cancelRefetch: !1 })
                    },
                    children: (0, r.jsx)(g.A, {
                      id: "libraryNext.results.loadMore",
                      defaultMessage: "Load more",
                      description: "Button to fetch more Suggested items after a batch containing only excluded files",
                    }),
                  })
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      eQ,
                      "list" === eg && (eM || eH)
                        ? (0, r.jsx)(x.eb, {
                            className: "-mx-[var(--padding-row-cell-x,var(--padding-row-x))]",
                            "aria-hidden": !eH,
                            children: (0, r.jsx)(B.V, {
                              layout: ei,
                              rowCount: 3,
                              showSource: null != et,
                              reserveDisclosureSpace: eo,
                            }),
                          })
                        : null,
                    ],
                  })),
            (F[86] = eP?.pages),
            (F[87] = eF),
            (F[88] = eM),
            (F[89] = ew),
            (F[90] = eH),
            (F[91] = eQ),
            (F[92] = et),
            (F[93] = eo),
            (F[94] = ei),
            (F[95] = ed.value.categories),
            (F[96] = ed.value.includePages),
            (F[97] = ed.value.search),
            (F[98] = ed.value.tab),
            (F[99] = eg),
            (F[100] = L))
          : (L = F[100]))
      let eJ = "grid" === eg && eH && null == eD,
        eX =
          eB ||
          ef ||
          (ed.value.search && (null != eC || eA || eE || eM || eP?.pages.some(K) || ek)) ||
          (void 0 !== ea && (eC || Z))
            ? null
            : ea
      ;(F[101] !== eb ||
      F[102] !== ec ||
      F[103] !== eM ||
      F[104] !== U ||
      F[105] !== D ||
      F[106] !== et ||
      F[107] !== eo ||
      F[108] !== ei ||
      F[109] !== k ||
      F[110] !== ev ||
      F[111] !== eJ ||
      F[112] !== eX
        ? ((E = (0, r.jsx)(X, {
            structuredGridEnabled: k,
            hasNextPage: eM,
            rowLayout: ei,
            entries: eb,
            supplementalItems: ev,
            groupByActivityDate: ec,
            onOpenItem: U,
            renderContentItem: D,
            renderSource: et,
            gridLoading: eJ,
            emptyState: eX,
            reserveDisclosureSpace: eo,
          })),
          (F[101] = eb),
          (F[102] = ec),
          (F[103] = eM),
          (F[104] = U),
          (F[105] = D),
          (F[106] = et),
          (F[107] = eo),
          (F[108] = ei),
          (F[109] = k),
          (F[110] = ev),
          (F[111] = eJ),
          (F[112] = eX),
          (F[113] = E))
        : (E = F[113]),
        F[114] !== W ||
        F[115] !== eD ||
        F[116] !== k ||
        F[117] !== eZ ||
        F[118] !== eq ||
        F[119] !== eW ||
        F[120] !== v ||
        F[121] !== I ||
        F[122] !== A ||
        F[123] !== L ||
        F[124] !== E ||
        F[125] !== eg
          ? ((S = (0, r.jsx)(H.b, {
              structuredGridEnabled: k,
              loading: eZ,
              hasData: eq,
              viewMode: eg,
              squareLoading: eW,
              listLoading: v,
              error: eD,
              onRetry: I,
              notice: A,
              additionalPagination: W,
              pagination: L,
              children: E,
            })),
            (F[114] = W),
            (F[115] = eD),
            (F[116] = k),
            (F[117] = eZ),
            (F[118] = eq),
            (F[119] = eW),
            (F[120] = v),
            (F[121] = I),
            (F[122] = A),
            (F[123] = L),
            (F[124] = E),
            (F[125] = eg),
            (F[126] = S))
          : (S = F[126]))
      let e0 = S,
        e1 = eV ? eQ : null
      return (
        F[127] !== e0 || F[128] !== e1
          ? ((P = (0, r.jsxs)(r.Fragment, { children: [e1, e0] })), (F[127] = e0), (F[128] = e1), (F[129] = P))
          : (P = F[129]),
        P
      )
    }
    function K(e) {
      return e.searchPending
    }
    function $(e) {
      return 0 === e.items.length && !e.results?.length
    }
    function J(e) {
      return e.searchPending
    }
    function X(e) {
      let t,
        a,
        i,
        l,
        n,
        o,
        u,
        h,
        p = (0, s.c)(48),
        {
          hasNextPage: f,
          rowLayout: m,
          entries: y,
          structuredGridEnabled: b,
          supplementalItems: v,
          groupByActivityDate: x,
          onOpenItem: _,
          renderContentItem: I,
          renderSource: T,
          emptyState: A,
          reserveDisclosureSpace: L,
          gridLoading: E,
        } = e,
        C = (0, d.gh)(R.Qy),
        j = (0, d.Ul)(R.YH)
      if (null == y && 0 === v.length) return null
      p[0] !== y ? ((t = y ?? []), (p[0] = y), (p[1] = t)) : (t = p[1])
      let w = t
      if (0 === w.length && 0 === v.length && !E) {
        let e
        if (f) return null
        if (void 0 !== A) {
          let e
          return (p[2] !== A ? ((e = (0, r.jsx)(r.Fragment, { children: A })), (p[2] = A), (p[3] = e)) : (e = p[3]), e)
        }
        if (
          null != C.value.directoryId &&
          !C.value.search &&
          0 === C.value.categories.length &&
          0 === C.value.sources.length &&
          !C.value.directoryId.startsWith("external-") &&
          !C.value.directoryId.startsWith("library:")
        ) {
          let e
          return (
            p[4] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, r.jsx)(ei, {})), (p[4] = e)) : (e = p[4]),
            e
          )
        }
        return (
          p[5] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, r.jsx)(es, {})), (p[5] = e)) : (e = p[5]),
          e
        )
      }
      if (!(
        "grid" === j &&
        !C.value.search &&
        !C.value.deleted &&
        ("all" === C.value.tab || null != C.value.directoryId) &&
        w.some(er) &&
        w.some(ea)
      )) {
        let e,
          t,
          a,
          s = "grid" === j && "pt-4"
        return (
          p[6] !== s ? ((e = (0, c.A)(s)), (p[6] = s), (p[7] = e)) : (e = p[7]),
          p[8] !== E ||
          p[9] !== x ||
          p[10] !== _ ||
          p[11] !== I ||
          p[12] !== T ||
          p[13] !== L ||
          p[14] !== w ||
          p[15] !== m ||
          p[16] !== b ||
          p[17] !== v
            ? ((t = (0, r.jsx)(el, {
                rowLayout: m,
                structuredGridEnabled: b,
                entries: w,
                supplementalItems: v,
                groupByActivityDate: x,
                onOpenItem: _,
                renderContentItem: I,
                renderSource: T,
                reserveDisclosureSpace: L,
                gridLoading: E,
              })),
              (p[8] = E),
              (p[9] = x),
              (p[10] = _),
              (p[11] = I),
              (p[12] = T),
              (p[13] = L),
              (p[14] = w),
              (p[15] = m),
              (p[16] = b),
              (p[17] = v),
              (p[18] = t))
            : (t = p[18]),
          p[19] !== e || p[20] !== t
            ? ((a = (0, r.jsx)("div", { className: e, children: t })), (p[19] = e), (p[20] = t), (p[21] = a))
            : (a = p[21]),
          a
        )
      }
      return (
        p[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsx)("h2", {
              className: "text-lg font-medium",
              children: (0, r.jsx)(g.A, {
                id: "libraryNext.results.folders",
                defaultMessage: "Folders",
                description: "Heading for folders in the Library All tab",
              }),
            })),
            (p[22] = a))
          : (a = p[22]),
        p[23] !== w ? ((i = w.filter(et)), (p[23] = w), (p[24] = i)) : (i = p[24]),
        p[25] !== _ || p[26] !== T || p[27] !== L || p[28] !== m || p[29] !== b || p[30] !== i
          ? ((l = (0, r.jsxs)("section", {
              className: "flex flex-col gap-4",
              children: [
                a,
                (0, r.jsx)(el, {
                  rowLayout: m,
                  structuredGridEnabled: b,
                  entries: i,
                  kind: "directory",
                  onOpenItem: _,
                  renderSource: T,
                  reserveDisclosureSpace: L,
                }),
              ],
            })),
            (p[25] = _),
            (p[26] = T),
            (p[27] = L),
            (p[28] = m),
            (p[29] = b),
            (p[30] = i),
            (p[31] = l))
          : (l = p[31]),
        p[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, r.jsx)("h2", {
              className: "text-lg font-medium",
              children: (0, r.jsx)(g.A, {
                id: "libraryNext.results.items",
                defaultMessage: "Items",
                description: "Heading for files in the Library All tab",
              }),
            })),
            (p[32] = n))
          : (n = p[32]),
        p[33] !== w ? ((o = w.filter(ee)), (p[33] = w), (p[34] = o)) : (o = p[34]),
        p[35] !== E ||
        p[36] !== _ ||
        p[37] !== I ||
        p[38] !== T ||
        p[39] !== L ||
        p[40] !== m ||
        p[41] !== b ||
        p[42] !== v ||
        p[43] !== o
          ? ((u = (0, r.jsxs)("section", {
              className: "flex flex-col gap-4",
              children: [
                n,
                (0, r.jsx)(el, {
                  rowLayout: m,
                  structuredGridEnabled: b,
                  entries: o,
                  supplementalItems: v,
                  kind: "file",
                  gridLoading: E,
                  renderSource: T,
                  renderContentItem: I,
                  onOpenItem: _,
                  reserveDisclosureSpace: L,
                }),
              ],
            })),
            (p[35] = E),
            (p[36] = _),
            (p[37] = I),
            (p[38] = T),
            (p[39] = L),
            (p[40] = m),
            (p[41] = b),
            (p[42] = v),
            (p[43] = o),
            (p[44] = u))
          : (u = p[44]),
        p[45] !== l || p[46] !== u
          ? ((h = (0, r.jsxs)("div", { className: "flex flex-col gap-8 pt-4", children: [l, u] })),
            (p[45] = l),
            (p[46] = u),
            (p[47] = h))
          : (h = p[47]),
        h
      )
    }
    function ee(e) {
      return !("node" in e) || "directory" !== e.node.kind
    }
    function et(e) {
      return "node" in e && "directory" === e.node.kind
    }
    function ea(e) {
      return !("node" in e) || "directory" !== e.node.kind
    }
    function er(e) {
      return "node" in e && "directory" === e.node.kind
    }
    function es() {
      let e,
        t,
        a,
        i,
        l,
        h,
        p,
        y,
        x = (0, s.c)(43),
        _ = (0, d.gh)(R.Qy),
        I = (0, d.Ul)(T.Op),
        L = (0, d.Ul)(w.U)
      if (
        (x[0] !== _
          ? ((e = () => (0, Q.mz)(_)), (t = [_]), (x[0] = _), (x[1] = e), (x[2] = t))
          : ((e = x[1]), (t = x[2])),
        (0, u.useEffect)(e, t),
        _.value.basePath.startsWith("/space") && _.value.search.trim())
      ) {
        let e
        return (
          x[3] !== _.value.search
            ? ((e = (0, r.jsx)(v.H, { query: _.value.search })), (x[3] = _.value.search), (x[4] = e))
            : (e = x[4]),
          e
        )
      }
      if (_.value.includePages && "suggested" === _.value.tab) {
        let e
        return (
          x[5] !== _.value.categories || x[6] !== _.value.search || x[7] !== _.value.sources
            ? ((e = (0, r.jsx)(b.A, {
                layout: "browse",
                title:
                  _.value.search || _.value.categories.length || _.value.sources.length
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
              (x[5] = _.value.categories),
              (x[6] = _.value.search),
              (x[7] = _.value.sources),
              (x[8] = e))
            : (e = x[8]),
          e
        )
      }
      if ("favorites" === _.value.tab && null == _.value.directoryId && !_.value.deleted) {
        let e
        return (
          x[9] !== _.value.categories || x[10] !== _.value.search || x[11] !== _.value.sources
            ? ((e = (0, r.jsx)(b.A, {
                layout: "browse",
                title:
                  _.value.search || _.value.categories.length > 0 || _.value.sources.length > 0
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
              (x[9] = _.value.categories),
              (x[10] = _.value.search),
              (x[11] = _.value.sources),
              (x[12] = e))
            : (e = x[12]),
          e
        )
      }
      if (
        _.value.search ||
        _.value.categories.length > 0 ||
        null != L ||
        (_.value.sources.length > 0 && !_.value.imageSourceTabs)
      ) {
        let e, t
        return (
          x[13] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, r.jsx)(m.zcw, {})), (x[13] = e)) : (e = x[13]),
          x[14] !== _.value.includePages
            ? ((t = (0, r.jsx)(b.A, {
                layout: "browse",
                illustration: e,
                title: _.value.includePages
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
              (x[14] = _.value.includePages),
              (x[15] = t))
            : (t = x[15]),
          t
        )
      }
      if (_.value.deleted) {
        let e,
          t = I ? "trash" : "trash-files"
        return (x[16] !== t ? ((e = (0, r.jsx)(A.n, { view: t })), (x[16] = t), (x[17] = e)) : (e = x[17]), e)
      }
      if ("recent" === _.value.tab) {
        let e
        return (
          x[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(b.A, {
                layout: "page",
                title: (0, r.jsx)(g.A, {
                  id: "libraryNext.results.noRecentFiles",
                  defaultMessage: "No recently opened files",
                  description:
                    "Empty state for a connected storage provider when the current user has no recently opened files",
                }),
              })),
              (x[18] = e))
            : (e = x[18]),
          e
        )
      }
      if ("library:collection:shared-with-me" === _.value.directoryId) {
        let e, t, a
        return (
          x[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(m.Seu, {})),
              (t = (0, r.jsx)("h2", {
                children: (0, r.jsx)(g.A, {
                  id: "libraryNext.results.sharedEmptyTitle",
                  defaultMessage: "Folder is empty",
                  description: "Empty state title in Library's Shared with me folder.",
                }),
              })),
              (x[19] = e),
              (x[20] = t))
            : ((e = x[19]), (t = x[20])),
          x[21] !== _.value.includePages
            ? ((a = (0, r.jsx)(b.A, {
                layout: "browse",
                className: "select-none",
                illustration: e,
                title: t,
                description: (0, r.jsx)("p", {
                  children: _.value.includePages
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
                }),
              })),
              (x[21] = _.value.includePages),
              (x[22] = a))
            : (a = x[22]),
          a
        )
      }
      if (null != _.value.directoryId) {
        let e
        return (
          x[23] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(b.A, {
                layout: "browse",
                title: (0, r.jsx)(g.A, {
                  id: "libraryNext.results.emptyFolder",
                  defaultMessage: "This folder is empty.",
                  description: "Empty Library folder with no upload action available.",
                }),
              })),
              (x[23] = e))
            : (e = x[23]),
          e
        )
      }
      x[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, r.jsx)(f.I, { asset: o.x })), (x[24] = a))
        : (a = x[24])
      let C = a,
        j = _.value.imageSourceTabs && "uploaded" === _.value.sources[0]
      if ("images" === _.value.tab) {
        let e
        ;(x[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("span", {
              className: "flex size-12 shrink-0 items-center justify-center rounded-xl bg-background-secondary-soft",
              children: (0, r.jsx)(f.I, { asset: n.v }),
            })),
            (x[25] = e))
          : (e = x[25]),
          (C = e))
      } else if ("folders" === _.value.tab) {
        let e
        ;(x[26] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, r.jsx)(m.nex, {})), (x[26] = e)) : (e = x[26]),
          (C = e))
      }
      let S = "images" === _.value.tab && "max-w-80 self-center"
      x[27] !== S ? ((i = (0, c.A)("select-none", S)), (x[27] = S), (x[28] = i)) : (i = x[28])
      let N = "images" === _.value.tab ? "page" : "browse",
        P = "images" === _.value.tab ? "default" : "compact"
      return (
        x[29] !== _.value.tab || x[30] !== j
          ? ((l = (0, r.jsx)("h2", {
              children: j
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
                    values: { tab: _.value.tab },
                  }),
            })),
            (h = (0, r.jsx)("p", {
              children: j
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
                    values: { tab: _.value.tab },
                  }),
            })),
            (x[29] = _.value.tab),
            (x[30] = j),
            (x[31] = l),
            (x[32] = h))
          : ((l = x[31]), (h = x[32])),
        x[33] !== j ? ((p = j ? (0, r.jsx)(E.JA, {}) : (0, r.jsx)(E.be, {})), (x[33] = j), (x[34] = p)) : (p = x[34]),
        x[35] !== C || x[36] !== i || x[37] !== N || x[38] !== P || x[39] !== l || x[40] !== h || x[41] !== p
          ? ((y = (0, r.jsx)(b.A, {
              className: i,
              layout: N,
              spacing: P,
              illustration: C,
              title: l,
              description: h,
              actions: p,
            })),
            (x[35] = C),
            (x[36] = i),
            (x[37] = N),
            (x[38] = P),
            (x[39] = l),
            (x[40] = h),
            (x[41] = p),
            (x[42] = y))
          : (y = x[42]),
        y
      )
    }
    function ei() {
      let e,
        t,
        a,
        i = (0, s.c)(5),
        l = (0, d.Ul)(R.YH)
      return (
        i[0] !== l
          ? ((e =
              "list" === l
                ? (0, r.jsx)("div", {
                    className: "-mx-[var(--padding-row-cell-x,var(--padding-row-x))]",
                    children: (0, r.jsx)(eh, {}),
                  })
                : null),
            (i[0] = l),
            (i[1] = e))
          : (e = i[1]),
        i[2] === Symbol.for("react.memo_cache_sentinel")
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
            (i[2] = t))
          : (t = i[2]),
        i[3] !== e
          ? ((a = (0, r.jsxs)("div", { className: "flex min-h-0 flex-1 flex-col", children: [e, t] })),
            (i[3] = e),
            (i[4] = a))
          : (a = i[4]),
        a
      )
    }
    function el(e) {
      var t
      let a,
        i,
        l,
        n,
        o,
        p,
        f,
        m,
        y,
        b,
        v,
        _ = (0, s.c)(46),
        {
          rowLayout: T,
          entries: A,
          structuredGridEnabled: E,
          supplementalItems: C,
          groupByActivityDate: w,
          kind: N,
          onOpenItem: P,
          renderContentItem: G,
          renderSource: B,
          viewMode: Y,
          showHeader: H,
          selectionEnabled: U,
          reserveDisclosureSpace: k,
          gridLoading: V,
        } = e,
        z = void 0 === T ? "columns" : T,
        Q = void 0 === C ? [] : C,
        q = void 0 !== w && w,
        W = void 0 === H || H,
        K = void 0 === U || U,
        $ = (0, d.gh)(R.Qy),
        J = (0, h.A)(),
        X = (0, d.Ul)(R.YH),
        ee = (0, d._U)(L.JW, "3544043810"),
        et = Y ?? X,
        ea = (0, d.Ul)(R.oW),
        er = (0, d.Ul)(R.rk)
      _[0] !== P || _[1] !== G || _[2] !== B || _[3] !== k || _[4] !== z || _[5] !== K || _[6] !== E || _[7] !== et
        ? ((a = (e, t) =>
            "node" in e
              ? (0, r.jsx)(Z.Vz, {
                  layout: z,
                  structuredGridEnabled: E,
                  entry: e,
                  stack: t,
                  onOpenItem: P,
                  viewMode: et,
                  source: B?.(e),
                  selectionEnabled: K,
                  reserveDisclosureSpace: k,
                })
              : (0, r.jsx)("div", { "data-library-item": !0, children: G?.(e, et, B?.(e)) })),
          (_[0] = P),
          (_[1] = G),
          (_[2] = B),
          (_[3] = k),
          (_[4] = z),
          (_[5] = K),
          (_[6] = E),
          (_[7] = et),
          (_[8] = a))
        : (a = _[8])
      let es = a
      _[9] !== q ? ((i = { enabled: q }), (_[9] = q), (_[10] = i)) : (i = _[10])
      let ei = (0, I.wv)(eu, i)
      _[11] !== er || _[12] !== es
        ? ((l = (e) => ({ id: (0, j.e4)(e), sortMetadata: (0, S.Bl)(e, er), render: () => es(e) })),
          (_[11] = er),
          (_[12] = es),
          (_[13] = l))
        : (l = _[13])
      let el = A.map(l)
      if (
        (_[14] !== et
          ? ((n = (e) => ({ id: e.id, sortMetadata: e.sortMetadata, render: (t) => e.render(et, t) })),
            (_[14] = et),
            (_[15] = n))
          : (n = _[15]),
        el.push(...Q.map(n)),
        null != ea && Q.length > 0)
      ) {
        let e
        ;(_[16] !== ea || _[17] !== er
          ? ((e = (e, t) => (0, S.Gf)(e.sortMetadata, t.sortMetadata, ea, er)), (_[16] = ea), (_[17] = er), (_[18] = e))
          : (e = _[18]),
          el.sort(e))
      }
      let eg = el.map(ed)
      if ("grid" === et) {
        if (void 0 !== V && V) {
          let e
          ;(_[19] !== N || _[20] !== $ || _[21] !== E
            ? ((e = (e, t) => ({
                id: `loading-${t}`,
                content: (0, r.jsx)(F.c5, {
                  structuredGridEnabled: E,
                  square:
                    null != $.value.pageCollection ||
                    "directory" === N ||
                    ("folders" === $.value.tab && !$.value.search),
                  index: t,
                }),
              })),
              (_[19] = N),
              (_[20] = $),
              (_[21] = E),
              (_[22] = e))
            : (e = _[22]),
            eg.push(...Array.from({ length: 3 }, e)))
        }
        return E
          ? (0, r.jsx)(O.n, { items: eg })
          : !$.value.search && 0 === Q.length && A.every(ec)
            ? (0, r.jsx)("div", {
                className: "@container",
                children: (0, r.jsx)("div", {
                  className:
                    "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 @max-sm:grid-cols-1",
                  children: eg.map(eo),
                }),
              })
            : !ee || $.value.deleted || $.value.search
              ? (0, r.jsx)(F.bg, { items: eg })
              : (0, r.jsx)(D, { entries: A, renderedItems: eg, renderItem: es })
      }
      let ep = q
        ? ((t = el.map(en)),
          (b = new Date((y = new Date(ei)).getFullYear(), y.getMonth(), 1).getTime()),
          (v = y.setDate(y.getDate() - 1)),
          t.map((e) => {
            let t
            if (
              (t =
                null != e && Number.isFinite(e)
                  ? e >= ei
                    ? "today"
                    : e >= v
                      ? "yesterday"
                      : e >= b
                        ? "month"
                        : "older"
                  : "unknown") !== m
            )
              return ((m = t), t)
          }))
        : []
      if ($.value.includePages)
        if ("library:collection:shared-with-me" === $.value.directoryId) {
          let e
          ;(_[25] !== J
            ? ((e = J.formatMessage({
                id: "space.home.sharedList",
                defaultMessage: "Shared with you",
                description: "Accessible label for the files and Pages shared with you on Space home",
              })),
              (_[25] = J),
              (_[26] = e))
            : (e = _[26]),
            (o = e))
        } else if ("recent" === $.value.tab) {
          let e
          ;(_[27] !== J
            ? ((e = J.formatMessage({
                id: "space.provider.recents.list",
                defaultMessage: "Recently opened files",
                description: "Accessible label for an external file provider's recently opened files in Space",
              })),
              (_[27] = J),
              (_[28] = e))
            : (e = _[28]),
            (o = e))
        } else if ("suggested" === $.value.tab) {
          let e
          ;(_[29] !== J
            ? ((e = J.formatMessage({
                id: "space.home.suggestedList",
                defaultMessage: "Suggested content",
                description: "Accessible label for mixed Library files and recent Pages with sortable columns",
              })),
              (_[29] = J),
              (_[30] = e))
            : (e = _[30]),
            (o = e))
        } else {
          let e
          ;(_[31] !== J
            ? ((e = J.formatMessage({
                id: "space.home.itemsList",
                defaultMessage: "Your items",
                description: "Accessible label for the files and Pages in Your items on Space home",
              })),
              (_[31] = J),
              (_[32] = e))
            : (e = _[32]),
            (o = e))
        }
      else {
        let e
        ;(_[23] !== J
          ? ((e = J.formatMessage({
              id: "library.list.label",
              defaultMessage: "Library files",
              description: "Accessible label for the Library file list with sortable columns",
            })),
            (_[23] = J),
            (_[24] = e))
          : (e = _[24]),
          (o = e))
      }
      let ef = x.eb,
        em = o,
        ey = M.T
      _[33] !== N || _[34] !== B || _[35] !== k || _[36] !== z || _[37] !== W
        ? ((p = W ? (0, r.jsx)(eh, { layout: z, kind: N, showSource: null != B, reserveDisclosureSpace: k }) : null),
          (_[33] = N),
          (_[34] = B),
          (_[35] = k),
          (_[36] = z),
          (_[37] = W),
          (_[38] = p))
        : (p = _[38])
      let eb = eg.map((e, t) =>
        (0, r.jsxs)(
          u.Fragment,
          {
            children: [
              null != ep[t] &&
                (0, r.jsx)("div", {
                  role: "row",
                  "data-library-date-heading": "",
                  children: (0, r.jsx)("div", {
                    role: "gridcell",
                    className: (0, c.A)("mx-3 border-b border-subtle pb-2", 0 === t ? "pt-5" : "pt-10"),
                    children: (0, r.jsx)("h2", {
                      className: "text-sm font-medium text-secondary select-none",
                      children: (0, r.jsx)(g.A, {
                        id: "space.home.recent.dateSection",
                        defaultMessage:
                          "{period, select, today {Today} yesterday {Yesterday} month {This month} older {Older} other {Date unavailable}}",
                        description:
                          "Heading above consecutive items in Space Recent, grouped by last activity in the viewer's local calendar. Older means before this month. Items without an activity date use Date unavailable.",
                        values: { period: ep[t] },
                      }),
                    }),
                  }),
                }),
              (0, r.jsx)(x.Pn, { role: "presentation", children: e.content }),
            ],
          },
          e.id,
        ),
      )
      return (
        _[39] !== ef || _[40] !== o || _[41] !== K || _[42] !== ey || _[43] !== p || _[44] !== eb
          ? ((f = (0, r.jsxs)(ef, {
              className: "-mx-[var(--padding-row-cell-x,var(--padding-row-x))]",
              role: "grid",
              tabIndex: -1,
              "aria-label": em,
              "aria-multiselectable": K,
              onKeyDown: ey,
              children: [p, eb],
            })),
            (_[39] = ef),
            (_[40] = o),
            (_[41] = K),
            (_[42] = ey),
            (_[43] = p),
            (_[44] = eb),
            (_[45] = f))
          : (f = _[45]),
        f
      )
    }
    function en(e) {
      return e.sortMetadata.date
    }
    function eo(e) {
      return (0, r.jsx)(u.Fragment, { children: e.content }, e.id)
    }
    function ec(e) {
      return "node" in e && "directory" === e.node.kind
    }
    function ed(e, t) {
      let { id: a, render: r } = e
      return { id: a, content: r(t + 1) }
    }
    function eu(e) {
      return new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime()
    }
    function eh(e) {
      let t,
        a,
        i,
        l,
        n,
        o,
        u,
        h,
        p,
        f,
        m,
        y,
        b = (0, s.c)(39),
        {
          layout: v,
          kind: x,
          isLoading: _,
          showSource: I,
          selectionEnabled: T,
          selection: A,
          sizeSortEnabled: L,
          reserveDisclosureSpace: E,
        } = e,
        C = void 0 !== _ && _,
        j = void 0 !== I && I,
        w = void 0 === T || T,
        S = void 0 === L || L,
        N = void 0 !== E && E,
        M = (0, d.Ul)(R.rk),
        F = (0, d.Ul)(R.AB)
      b[0] !== M || b[1] !== C || b[2] !== F || b[3] !== S
        ? ((t = F
            ? (0, r.jsx)(eg, {
                sortEnabled: S,
                column: "size",
                className: (0, c.A)(
                  "hidden w-22 shrink-0 @lg/library-row:block",
                  "deleted" === M && "@3xl/library-row:w-40",
                ),
                isLoading: C,
                children: (0, r.jsx)(g.A, {
                  id: "libraryNext.results.size",
                  defaultMessage: "Size",
                  description: "Library folder list file size column heading",
                }),
              })
            : null),
          (b[0] = M),
          (b[1] = C),
          (b[2] = F),
          (b[3] = S),
          (b[4] = t))
        : (t = b[4])
      let O = t
      ;(b[5] !== M || b[6] !== C || b[7] !== x || b[8] !== A || b[9] !== w
        ? ((a = w && !C && "saved" !== M ? (A ?? (0, r.jsx)(Z.j8, { kind: x })) : void 0),
          (b[5] = M),
          (b[6] = C),
          (b[7] = x),
          (b[8] = A),
          (b[9] = w),
          (b[10] = a))
        : (a = b[10]),
        b[11] !== N ? ((i = N ? (0, r.jsx)(P.aH, { depth: 0 }) : null), (b[11] = N), (b[12] = i)) : (i = b[12]),
        b[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, r.jsx)(g.A, {
              id: "libraryNext.results.name",
              defaultMessage: "Name",
              description: "Library list name column heading",
            })),
            (b[13] = l))
          : (l = b[13]),
        b[14] !== i
          ? ((n = (0, r.jsxs)("span", { className: "flex items-center", children: [i, l] })), (b[14] = i), (b[15] = n))
          : (n = b[15]),
        b[16] !== C || b[17] !== n
          ? ((o = (0, r.jsx)(eg, { column: "name", className: "min-w-0 flex-1", isLoading: C, children: n })),
            (b[16] = C),
            (b[17] = n),
            (b[18] = o))
          : (o = b[18]),
        b[19] !== M || b[20] !== j
          ? ((u = j
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
            (b[20] = j),
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
      let G = "deleted" === M ? O : null
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
        b[26] !== C || b[27] !== p
          ? ((f = (0, r.jsx)(eg, {
              column: "date",
              className: "hidden w-40 shrink-0 @lg/library-row:block",
              isLoading: C,
              children: p,
            })),
            (b[26] = C),
            (b[27] = p),
            (b[28] = f))
          : (f = b[28]))
      let B = "deleted" !== M ? O : null
      return (
        b[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, r.jsx)("span", { "aria-hidden": "true", className: "w-9 shrink-0 @lg/library-row:w-16" })),
            (b[29] = m))
          : (m = b[29]),
        b[30] !== v ||
        b[31] !== o ||
        b[32] !== u ||
        b[33] !== h ||
        b[34] !== G ||
        b[35] !== f ||
        b[36] !== B ||
        b[37] !== a
          ? ((y = (0, r.jsxs)(P.Xg, { layout: v, selection: a, children: [o, u, h, G, f, B, m] })),
            (b[30] = v),
            (b[31] = o),
            (b[32] = u),
            (b[33] = h),
            (b[34] = G),
            (b[35] = f),
            (b[36] = B),
            (b[37] = a),
            (b[38] = y))
          : (y = b[38]),
        y
      )
    }
    function eg(e) {
      let t,
        a,
        n,
        o,
        u,
        h = (0, s.c)(19),
        { sortEnabled: g, column: p, className: m, isLoading: y, children: b } = e,
        v = (0, d.gh)(R.Qy),
        x = (0, d.Ul)(R.oW),
        _ = (0, d.Ul)(R.QQ),
        I = y || !_ || !(void 0 === g || g),
        T = !I && x?.key === p,
        A = x?.direction === "asc" ? "ascending" : "descending",
        L = x?.direction === "asc" ? l.n : i.I
      h[0] !== m ? ((t = (0, c.A)("h-full", m)), (h[0] = m), (h[1] = t)) : (t = h[1])
      let E = T ? A : "none"
      return (
        h[2] !== p || h[3] !== v || h[4] !== x
          ? ((a = () => v.set(R.C6, (0, S.Tg)(x, p))), (h[2] = p), (h[3] = v), (h[4] = x), (h[5] = a))
          : (a = h[5]),
        h[6] !== T || h[7] !== L
          ? ((n = T ? (0, r.jsx)(f.I, { className: "shrink-0", asset: L, focusable: "false" }) : null),
            (h[6] = T),
            (h[7] = L),
            (h[8] = n))
          : (n = h[8]),
        h[9] !== b || h[10] !== I || h[11] !== a || h[12] !== n
          ? ((o = (0, r.jsxs)("button", {
              type: "button",
              disabled: I,
              className:
                "flex size-full cursor-interaction items-center gap-1 text-start outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default",
              onClick: a,
              children: [b, n],
            })),
            (h[9] = b),
            (h[10] = I),
            (h[11] = a),
            (h[12] = n),
            (h[13] = o))
          : (o = h[13]),
        h[14] !== p || h[15] !== t || h[16] !== E || h[17] !== o
          ? ((u = (0, r.jsx)("div", {
              role: "columnheader",
              "data-library-column": p,
              className: t,
              "aria-sort": E,
              children: o,
            })),
            (h[14] = p),
            (h[15] = t),
            (h[16] = E),
            (h[17] = o),
            (h[18] = u))
          : (u = h[18]),
        u
      )
    }
  },
  BV4m(e, t, a) {
    var r = a("QosV"),
      s = a("zTeN"),
      i = a("zd8w"),
      l = a("HZfM"),
      n = a("Fmx8"),
      o = a("EAw5")
    a.d(
      t,
      {},
      {
        c: function () {
          let e,
            t,
            a = (0, r.c)(5),
            c = (0, s.gh)(n.Qy),
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
            (0, i.useEffect)(e, t),
            null
          )
        },
      },
    )
  },
  PcRp(e, t, a) {
    var r = a("ABep"),
      s = a("QosV"),
      i = a("on57"),
      l = a("zd8w"),
      n = a("Wf1j"),
      o = a("ygO2"),
      c = a("bqtn"),
      d = a("GO7r")
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
            _,
            I,
            T,
            A,
            L,
            E = (0, s.c)(35),
            { items: C, disabled: j, onSelect: R } = e,
            w = void 0 !== j && j,
            S = (0, l.useRef)(null),
            N = (0, l.useRef)(null),
            [P, M] = (0, l.useState)(0),
            F = (0, n.A)()
          E[0] !== C ? ((t = JSON.stringify(C.map(g))), (E[0] = C), (E[1] = t)) : (t = E[1])
          let O = t
          ;(E[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = () => {
                let e = S.current,
                  t = N.current
                if (!e || !t) return
                let a = () => {
                    let a = Array.from(t.children, h),
                      r = a.pop() ?? 0,
                      s = e.getBoundingClientRect().width
                    if (a.reduce(u, 0) <= s) return void M(Math.max(0, a.length - 1))
                    let i = (a[0] ?? 0) + r,
                      l = 0
                    for (let e = a.length - 1; e > 0 && !((i += a[e]) > s); e--) l++
                    M(l)
                  },
                  r = new ResizeObserver(a)
                for (let a of [e, t]) r.observe(a)
                return (a(), () => r.disconnect())
              }),
              (E[2] = a))
            : (a = E[2]),
            E[3] !== O ? ((p = [O]), (E[3] = O), (E[4] = p)) : (p = E[4]),
            (0, l.useLayoutEffect)(a, p))
          let G = Math.min(P, Math.max(0, C.length - 1))
          if (E[5] !== G || E[6] !== w || E[7] !== F || E[8] !== C || E[9] !== R) {
            let e,
              t = 0 === G ? C.slice(0, -1) : C.slice(1, -G),
              a = 0 === G ? C.slice(-1) : [C[0], ...C.slice(-G)]
            ;(E[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(d.uM3, { className: "mx-2 text-tertiary" })), (E[15] = e))
              : (e = E[15]),
              (f = e),
              (b = S),
              (v = "relative grid w-full min-w-0 grid-cols-1 select-none"),
              (m = "col-start-1 row-start-1 -my-1 flex min-w-0 items-center overflow-hidden py-1"),
              (y = a.map((e, s) =>
                (0, r.jsxs)(
                  "span",
                  {
                    className: (0, i.A)("flex min-w-0 items-center", s === a.length - 1 ? "shrink" : "shrink-0"),
                    children: [
                      s > 0 ? f : null,
                      s === +(0 !== G) && t.length > 0
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(c.Ab, {
                                align: "start",
                                triggerButton: (0, r.jsx)(o.$, {
                                  className: "shrink-0",
                                  color: "ghostTertiary",
                                  disabled: w,
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
                                    { disabled: w, onSelect: () => R(e.id), children: e.name },
                                    e.id ?? "root",
                                  ),
                                ),
                              }),
                              f,
                            ],
                          })
                        : null,
                      e === C.at(-1) && null != e.id
                        ? (0, r.jsx)("span", {
                            className: "-my-1 min-w-0 truncate py-1",
                            "aria-current": "page",
                            title: e.name,
                            children: e.name,
                          })
                        : (0, r.jsx)(o.$, {
                            color: "ghostTertiary",
                            disabled: w,
                            size: "inline",
                            onClick: () => R(e.id),
                            children: e.name,
                          }),
                    ],
                  },
                  e.id ?? "root",
                ),
              )),
              (E[5] = G),
              (E[6] = w),
              (E[7] = F),
              (E[8] = C),
              (E[9] = R),
              (E[10] = f),
              (E[11] = m),
              (E[12] = y),
              (E[13] = b),
              (E[14] = v))
          } else ((f = E[10]), (m = E[11]), (y = E[12]), (b = E[13]), (v = E[14]))
          if (
            (E[16] !== m || E[17] !== y
              ? ((x = (0, r.jsx)("span", { className: m, children: y })), (E[16] = m), (E[17] = y), (E[18] = x))
              : (x = E[18]),
            E[19] !== C || E[20] !== f)
          ) {
            let e
            ;(E[22] !== f
              ? ((e = (e, t) =>
                  (0, r.jsxs)(
                    "span",
                    {
                      className: "flex shrink-0 items-center",
                      children: [t > 0 ? f : null, (0, r.jsx)("span", { children: e.name })],
                    },
                    e.id ?? "root",
                  )),
                (E[22] = f),
                (E[23] = e))
              : (e = E[23]),
              (_ = C.map(e)),
              (E[19] = C),
              (E[20] = f),
              (E[21] = _))
          } else _ = E[21]
          return (
            E[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((I = (0, r.jsx)(d.l0Y, {})), (E[24] = I))
              : (I = E[24]),
            E[25] !== f
              ? ((T = (0, r.jsxs)("span", { className: "absolute flex shrink-0 items-center", children: [f, I] })),
                (E[25] = f),
                (E[26] = T))
              : (T = E[26]),
            E[27] !== _ || E[28] !== T
              ? ((A = (0, r.jsx)("span", {
                  "aria-hidden": "true",
                  className: "pointer-events-none invisible col-start-1 row-start-1 min-w-0 overflow-hidden",
                  children: (0, r.jsxs)("span", { ref: N, className: "flex w-max items-center", children: [_, T] }),
                })),
                (E[27] = _),
                (E[28] = T),
                (E[29] = A))
              : (A = E[29]),
            E[30] !== A || E[31] !== b || E[32] !== v || E[33] !== x
              ? ((L = (0, r.jsxs)("span", { ref: b, className: v, children: [x, A] })),
                (E[30] = A),
                (E[31] = b),
                (E[32] = v),
                (E[33] = x),
                (E[34] = L))
              : (L = E[34]),
            L
          )
        },
      },
    )
  },
  Soo0(e, t, a) {
    a.d(t, { l: () => G, d: () => M })
    var r = a("ABep"),
      s = a("QosV"),
      i = a("slpy"),
      l = a("Iz1g"),
      n = a("UiZv"),
      o = a("TI91"),
      c = a("kc3L"),
      d = a("SKlu")
    let u = (0, a("nkTT").a)({
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
      body: '<path d="M12.2935 3.9707C13.7192 2.54824 15.9879 2.57709 17.3481 3.96191C18.751 5.31689 18.7968 7.5952 17.3569 9.03516L10.3569 16.0352L10.356 16.0342C9.64388 16.7801 8.73412 17.2852 7.78369 17.5059L7.78271 17.5068L3.91553 18.3945L3.91455 18.3926C3.74781 18.4322 3.40972 18.466 3.14014 18.1973C2.9367 17.9943 2.9054 17.752 2.91943 17.5732L2.94385 17.4199H2.94189L3.83154 13.5625C4.05579 12.5655 4.56679 11.695 5.26904 10.9941L12.2935 3.9707ZM6.20947 11.9355C5.66898 12.4748 5.29228 13.1261 5.12842 13.8574L5.12744 13.8613L4.42334 16.9131L7.48486 16.21C8.19069 16.0458 8.87308 15.6671 9.40381 15.1074L15.062 9.44824L11.8784 6.26562L6.20947 11.9355ZM16.4097 4.90332C15.5721 4.03993 14.1433 4.00382 13.2329 4.91211L12.8198 5.3252L16.0024 8.50781L16.4165 8.09473C17.3331 7.17807 17.2904 5.75485 16.4253 4.91895L16.4097 4.90332Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M4.5835 2.34766C4.73568 2.34776 4.86712 2.45525 4.89697 2.60449C4.9842 3.04053 5.15446 3.41309 5.4165 3.69531C5.67572 3.97447 6.04076 4.18326 6.55225 4.26855C6.70628 4.29423 6.81982 4.42783 6.81982 4.58398C6.81972 4.74005 6.70621 4.87278 6.55225 4.89844C6.04087 4.98369 5.67572 5.19263 5.4165 5.47168C5.15441 5.75394 4.9842 6.12736 4.89697 6.56348C4.86701 6.71257 4.73558 6.82021 4.5835 6.82031C4.43135 6.82031 4.30003 6.7126 4.27002 6.56348C4.1828 6.12736 4.01258 5.75394 3.75049 5.47168C3.49124 5.1925 3.12535 4.9837 2.61377 4.89844C2.46001 4.87262 2.34727 4.73992 2.34717 4.58398C2.34717 4.42793 2.45989 4.29435 2.61377 4.26855C3.12537 4.18329 3.49124 3.97451 3.75049 3.69531C4.01244 3.4131 4.18282 3.04045 4.27002 2.60449C4.29988 2.45518 4.43122 2.34766 4.5835 2.34766Z" fill="currentColor"/>',
    })
    var h = a("T9dF"),
      g = a("UwnX"),
      p = a("TfEe"),
      f = a("xvpl"),
      m = a("aqnU"),
      y = a("zTeN"),
      b = a("Wf1j"),
      v = a("oyxz"),
      x = a("Qgfj"),
      _ = a("Yw0d"),
      I = a("t1nS"),
      T = a("g2p6"),
      A = a("ygO2"),
      L = a("bqtn"),
      E = a("HOLv"),
      C = a("GO7r"),
      j = a("pIbZ"),
      R = a("UxN3"),
      w = a("HFg1"),
      S = a("cGrE"),
      N = a("Fmx8")
    let P = (0, y.un)(
      N.Qy,
      ({ get: e, scope: t }) => !0 === t.value.includePages && e(T.s6).data?.meetingsEnabled === !0,
    )
    function M(e) {
      let t,
        a,
        m,
        T,
        A,
        E,
        M,
        G,
        Y,
        H,
        U = (0, s.c)(39),
        { showCategoryFilters: k } = e,
        D = void 0 === k || k,
        V = (0, y.gh)(N.Qy),
        z = (0, b.A)(),
        Q = (0, y.Ul)(P)
      if (U[0] !== z || U[1] !== Q || U[2] !== V || U[3] !== D) {
        M = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            s,
            l,
            n,
            d,
            u = ["images", "documents", "spreadsheets", "presentations", "pdfs"]
          if ((V.value.includePages && (Q && u.unshift("meetings"), u.unshift("pages")), !(0, N.BG)(V.value))) {
            M = null
            break e
          }
          let y = {
              pages: { assets: { 16: p.s, 20: f.b } },
              meetings: { 16: _.A, 20: I.A },
              images: { 16: C.UJ6, 20: C.pYT },
              documents: { assets: { 16: h.D, 20: g.g } },
              spreadsheets: w.Q.spreadsheet,
              presentations: w.Q.presentation,
              pdfs: { assets: { 16: o.l, 20: c.e } },
            },
            b = (D ? V.value.categories.length : 0) + V.value.sources.length
          ;(U[12] !== V
            ? ((e = (e) => {
                let t = V.value.sources.includes(e) ? V.value.sources.filter((t) => t !== e) : [...V.value.sources, e]
                ;((0, S.np)(V, { sources: t }), (0, N.zl)(V, (0, N.SE)({ ...V.value, sources: t })))
              }),
              (U[12] = V),
              (U[13] = e))
            : (e = U[13]),
            (G = e),
            (t = L.Ab),
            U[14] !== V
              ? ((a = (e) => {
                  e && (0, S.Jt)(V)
                }),
                (U[14] = V),
                (U[15] = a))
              : (a = U[15]),
            (m = "end"),
            (T = "menu"),
            U[16] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, r.jsx)(v.A, {
                  id: "libraryNext.filters.tooltip",
                  defaultMessage: "Filters",
                  description: "Tooltip on the Library button that opens source and file-type filters.",
                })),
                (U[16] = s))
              : (s = U[16]))
          let P = b > 0
          ;(U[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = { 16: C.uG0, 20: C.FuZ }), (U[17] = l))
            : (l = U[17]),
            U[18] !== b || U[19] !== z
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
                (U[18] = b),
                (U[19] = z),
                (U[20] = n))
              : (n = U[20]),
            U[21] !== b
              ? ((d =
                  b > 0
                    ? (0, r.jsx)("span", {
                        "aria-hidden": !0,
                        className: "count-ISCbrn",
                        children: (0, r.jsx)(x.Gr, { value: b }),
                      })
                    : null),
                (U[21] = b),
                (U[22] = d))
              : (d = U[22]),
            U[23] !== P || U[24] !== n || U[25] !== d
              ? ((A = (0, r.jsx)(i.m, {
                  content: s,
                  children: (0, r.jsx)(j.p, {
                    color: "secondary",
                    variant: "ghost",
                    uniform: !0,
                    selected: P,
                    icon: l,
                    "aria-label": n,
                    children: d,
                  }),
                })),
                (U[23] = P),
                (U[24] = n),
                (U[25] = d),
                (U[26] = A))
              : (A = U[26]),
            (E =
              D && (0, N.Fy)(V.value)
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(L.ms.SectionLabel, {
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
                          L.ms.CheckboxItem,
                          {
                            onSelect: O,
                            checked: V.value.categories.includes(e),
                            onCheckedChange: () => {
                              let t
                              return (
                                (t = V.value.categories.includes(e)
                                  ? V.value.categories.filter((t) => t !== e)
                                  : [...V.value.categories, e]),
                                void ((0, S.np)(V, { fileTypes: t }),
                                (0, N.zl)(V, (0, N.SE)({ ...V.value, categories: t })))
                              )
                            },
                            leftIcon: (0, r.jsx)(R.b5, { icon: y[e] }),
                            children: (0, r.jsx)("span", {
                              className: "flex-1",
                              children: (0, r.jsx)(v.A, { ...B[e] }),
                            }),
                          },
                          e,
                        ),
                      ),
                    ],
                  })
                : null))
        }
        ;((U[0] = z),
          (U[1] = Q),
          (U[2] = V),
          (U[3] = D),
          (U[4] = t),
          (U[5] = a),
          (U[6] = m),
          (U[7] = T),
          (U[8] = A),
          (U[9] = E),
          (U[10] = M),
          (U[11] = G))
      } else ((t = U[4]), (a = U[5]), (m = U[6]), (T = U[7]), (A = U[8]), (E = U[9]), (M = U[10]), (G = U[11]))
      return M !== Symbol.for("react.early_return_sentinel")
        ? M
        : (U[27] !== V.value || U[28] !== D || U[29] !== G
            ? ((Y = (0, N.cZ)(V.value)
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      D && (0, N.Fy)(V.value) ? (0, r.jsx)(L.ms.Separator, {}) : null,
                      (0, r.jsx)(L.ms.SectionLabel, {
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
                          L.ms.CheckboxItem,
                          {
                            onSelect: F,
                            checked: V.value.sources.includes(e),
                            onCheckedChange: () => G(e),
                            leftIcon: (0, r.jsx)(R.b5, {
                              icon: { assets: "uploaded" === e ? { 16: l.U, 20: n.D } : { 16: d.n, 20: u } },
                            }),
                            children: (0, r.jsx)("span", {
                              className: "flex-1",
                              children: (0, r.jsx)(v.A, { ...B[e] }),
                            }),
                          },
                          e,
                        ),
                      ),
                    ],
                  })
                : null),
              (U[27] = V.value),
              (U[28] = D),
              (U[29] = G),
              (U[30] = Y))
            : (Y = U[30]),
          U[31] !== t || U[32] !== a || U[33] !== m || U[34] !== T || U[35] !== A || U[36] !== E || U[37] !== Y
            ? ((H = (0, r.jsxs)(t, { onOpenChange: a, align: m, contentWidth: T, triggerButton: A, children: [E, Y] })),
              (U[31] = t),
              (U[32] = a),
              (U[33] = m),
              (U[34] = T),
              (U[35] = A),
              (U[36] = E),
              (U[37] = Y),
              (U[38] = H))
            : (H = U[38]),
          H)
    }
    function F(e) {
      return e.preventDefault()
    }
    function O(e) {
      return e.preventDefault()
    }
    function G(e) {
      let t,
        a,
        i,
        l,
        n,
        o = (0, s.c)(19),
        { showCategoryFilters: c } = e,
        d = void 0 === c || c,
        u = (0, y.gh)(N.Qy),
        h = (0, b.A)()
      if (!(0, N.BG)(u.value)) return null
      o[0] !== u
        ? ((t = (e) => {
            let t = u.value.sources.filter((t) => t !== e)
            ;((0, S.np)(u, { sources: t }), (0, N.zl)(u, (0, N.SE)({ ...u.value, sources: t })))
          }),
          (o[0] = u),
          (o[1] = t))
        : (t = o[1])
      let g = t
      o[2] !== u
        ? ((a = (e) => {
            let t = u.value.categories.filter((t) => t !== e)
            ;((0, S.np)(u, { fileTypes: t }), (0, N.zl)(u, (0, N.SE)({ ...u.value, categories: t })))
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
                A.$,
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
                  children: [(0, r.jsx)(v.A, { ...B[e] }), (0, r.jsx)(E.I, { asset: m.Q, "data-no-autosize": !0 })],
                },
                e,
              )),
            (o[8] = h),
            (o[9] = g),
            (o[10] = e))
          : (e = o[10]),
          (i = u.value.sources.map(e)),
          (o[4] = h),
          (o[5] = g),
          (o[6] = u.value.sources),
          (o[7] = i))
      } else i = o[7]
      return (
        o[11] !== h || o[12] !== p || o[13] !== u.value.categories || o[14] !== d
          ? ((l =
              d &&
              u.value.categories.map((e) =>
                (0, r.jsxs)(
                  A.$,
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
                    children: [(0, r.jsx)(v.A, { ...B[e] }), (0, r.jsx)(E.I, { asset: m.Q, "data-no-autosize": !0 })],
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
        o[16] !== i || o[17] !== l
          ? ((n = (0, r.jsxs)(r.Fragment, { children: [i, l] })), (o[16] = i), (o[17] = l), (o[18] = n))
          : (n = o[18]),
        n
      )
    }
    let B = (0, x.YK)({
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
    a.d(t, { pH: () => H, I2: () => G, e9: () => O })
    var r = a("ABep"),
      s = a("QosV"),
      i = a("D7Ms"),
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
      x = a("Fmx8"),
      _ = a("RjIR"),
      I = a("EAw5"),
      T = a("PcRp"),
      A = a("dLIb"),
      L = a("Soo0"),
      E = a("i5ac"),
      C = a.n(E),
      j = a("bqtn"),
      R = a("GO7r"),
      w = a("pIbZ"),
      S = a("UxN3"),
      N = a("xicY"),
      P = a("XdIt")
    function M() {
      let e,
        t,
        a,
        i = (0, s.c)(5),
        l = (0, d.A)()
      i[0] !== l
        ? ((e = l.formatMessage({
            id: "libraryNext.settings.label",
            defaultMessage: "Settings",
            description: "Accessible label for the Library settings menu",
          })),
          (i[0] = l),
          (i[1] = e))
        : (e = i[1])
      let n = e
      return (
        i[2] === Symbol.for("react.memo_cache_sentinel") ? ((t = { 16: R.YWV, 20: R.RhA }), (i[2] = t)) : (t = i[2]),
        i[3] !== n
          ? ((a = (0, r.jsx)(j.Ab, {
              align: "end",
              contentWidth: "menu",
              triggerButton: (0, r.jsx)(w.p, {
                color: "secondary",
                variant: "ghost",
                uniform: !0,
                icon: t,
                "aria-label": n,
              }),
              children: (0, r.jsx)(F, { label: n }),
            })),
            (i[3] = n),
            (i[4] = a))
          : (a = i[4]),
        a
      )
    }
    function F(e) {
      let t,
        a,
        i,
        l,
        o,
        d,
        u,
        g,
        p = (0, s.c)(14),
        { label: f } = e,
        y = (0, n.gh)(x.Qy),
        _ = (0, n.Ul)(x.en),
        I = (0, n.Ul)(m.y),
        { data: T } = (0, n.Ul)(x.o_),
        A = (0, n.Ul)(x.xG),
        L = (0, n.Ul)(x.d8),
        E = (0, n.Ul)(N.Ai),
        w =
          null == T
            ? void 0
            : C()(T, v.sm).flatMap((e) => {
                let t = (0, v.sm)(e),
                  a = A?.filter((e) => e.provider === t)
                return "native" !== t && "native_shared" !== t && E.has(t)
                  ? (a?.map((t) => ({ entry: e, account: t })) ?? [])
                  : [{ entry: e, account: void 0 }]
              })
      ;((0, h.Zp)(),
        p[0] !== f
          ? ((t = (0, r.jsx)(j.ms.SectionLabel, {
              children: (0, r.jsx)("span", { className: "text-secondary", children: f }),
            })),
            (p[0] = f),
            (p[1] = t))
          : (t = p[1]))
      let M = w?.map((e) => {
        let { entry: t, account: a } = e,
          s = (0, v.sm)(t)
        if (I.has(s)) return null
        let i = (0, r.jsx)(c.A, {
          id: "libraryNext.settings.providerName",
          defaultMessage: "{provider}",
          description:
            "Visibility toggle for a connected Library provider, shown as its unchanged brand name, such as Google Drive or Box.",
          values: { provider: t.node.name },
        })
        return (
          null != a &&
            w.filter((e) => (0, v.sm)(e.entry) === s).length > 1 &&
            (i =
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
            j.ms.CheckboxItem,
            {
              indicator: "switch",
              leftIcon: (0, r.jsx)(P.u, { provider: s, standalone: "row" }),
              checked: null == a ? !_.has(s) : L.has(a.id),
              onCheckedChange: (e) => {
                a?.accountKey != null ? (0, x.hK)(y, a.id, !0 === e) : (0, x.$4)(y, s, !0 === e)
              },
              children: i,
            },
            a?.id ?? t.node.id,
          )
        )
      })
      return (
        p[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsx)(j.ms.Separator, {})), (p[2] = a))
          : (a = p[2]),
        p[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, r.jsx)(j.ms.SectionLabel, {
              children: (0, r.jsx)("span", {
                className: "text-secondary",
                children: (0, r.jsx)(c.A, {
                  id: "libraryNext.settings.manage",
                  defaultMessage: "Manage",
                  description: "Library management menu section",
                }),
              }),
            })),
            (p[3] = i))
          : (i = p[3]),
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
          ? ((o = (0, r.jsx)(S.b5, { icon: { 16: R.cSG, 20: R.zwW } })),
            (d = (0, r.jsx)(c.A, {
              id: "libraryNext.settings.trash",
              defaultMessage: "Trash",
              description: "Library settings menu action that opens deleted files",
            })),
            (p[6] = o),
            (p[7] = d))
          : ((o = p[6]), (d = p[7])),
        p[8] !== l
          ? ((u = (0, r.jsx)(j.ms.Item, { onSelect: l, leftIcon: o, children: d })), (p[8] = l), (p[9] = u))
          : (u = p[9]),
        p[10] !== t || p[11] !== M || p[12] !== u
          ? ((g = (0, r.jsxs)(r.Fragment, { children: [t, M, a, i, null, u] })),
            (p[10] = t),
            (p[11] = M),
            (p[12] = u),
            (p[13] = g))
          : (g = p[13]),
        g
      )
    }
    function O(e) {
      let t,
        a = (0, s.c)(5),
        { rootName: i } = e,
        l = (0, n.gh)(x.Qy)
      if (null != l.value.directoryId || l.value.deleted) {
        let e,
          t = `${l.value.accountId}:${l.value.userId ?? ""}:${!!l.value.deleted}`
        return (
          a[0] !== i || a[1] !== t
            ? ((e = (0, r.jsx)(Y, { rootName: i }, t)), (a[0] = i), (a[1] = t), (a[2] = e))
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
    function G(e) {
      let t,
        a,
        i,
        l,
        o,
        u = (0, s.c)(14),
        {
          selectedKey: g,
          additionalTabs: f,
          onFileTabSelect: m,
          basePath: y,
          browseLocation: b,
          onNavigate: v,
          fileTabs: I,
          tabLabels: T,
          preserveSearch: A,
        } = e
      u[0] !== f ? ((t = void 0 === f ? [] : f), (u[0] = f), (u[1] = t)) : (t = u[1])
      let L = t,
        E = void 0 === y ? "/library" : y,
        C = void 0 === I ? ["suggested", "favorites", "folders", "images", "all"] : I,
        j = void 0 !== A && A,
        R = (0, n.gh)(x.oD),
        w = (0, h.zy)(),
        S = (0, h.Zp)(),
        N = (0, d.A)(),
        P = (0, n.Ul)(_._)
      u[2] !== E || u[3] !== b || u[4] !== w
        ? ((a = b ?? (0, x.ER)(w.pathname, w.search, E)), (u[2] = E), (u[3] = b), (u[4] = w), (u[5] = a))
        : (a = u[5])
      let M = a
      ;(u[6] !== P ? ((i = (e) => "favorites" !== e || P), (u[6] = P), (u[7] = i)) : (i = u[7]),
        u[8] !== M || u[9] !== j || u[10] !== T
          ? ((l = (e) => ({
              key: e,
              name: T?.[e] ?? (0, r.jsx)(c.A, { ...U[e] }),
              href: (0, x.SE)({
                ...M,
                tab: e,
                directoryId: null,
                search: j ? M.search : "",
                categories: [],
                sources: [],
              }),
            })),
            (u[8] = M),
            (u[9] = j),
            (u[10] = T),
            (u[11] = l))
          : (l = u[11]))
      let F = [...C.filter(i).map(l), ...L]
      return (
        u[12] !== N
          ? ((o = N.formatMessage({
              id: "libraryNext.tabs.label",
              defaultMessage: "Library sections",
              description: "Accessible label for Library navigation tabs",
            })),
            (u[12] = N),
            (u[13] = o))
          : (o = u[13]),
        (0, r.jsx)(p.t, {
          variant: "browse",
          scrollable: !0,
          tabs: F,
          selectedKey: g,
          ariaLabel: o,
          onSelect: (e) => {
            if (e === g) return
            let t = F.find((t) => t.key === e)
            if (null != t) {
              let a = C.find((t) => t === e)
              ;(null != a && (m?.(a), (0, x.me)(R, { lastTab: a })), null != v ? v(t.href) : S(t.href))
            }
          },
        })
      )
    }
    let B = (0, n.i1)(
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
        _,
        A = (0, s.c)(45),
        { rootName: L } = e,
        E = (0, n.gh)(x.Qy),
        C = (0, h.zy)(),
        j = (0, n.Ul)(x.g_),
        R = (0, n.Ul)(x.JZ),
        w = "available" === (0, n.Ul)(x.IM),
        S = (0, n.Ul)(m.y),
        N = (0, n.Ul)(x.R4),
        P = (0, n.Ul)(x.L$)
      A[0] !== N ? ((t = { ...N, placeholderData: i.rX, staleTime: N.staleTime }), (A[0] = N), (A[1] = t)) : (t = A[1])
      let {
        data: M,
        dataUpdatedAt: F,
        isPlaceholderData: O,
        isFetching: G,
        isError: Y,
        isSuccess: H,
        isFetchedAfterMount: U,
      } = (0, l.I)(t, E.queryClient)
      A[2] !== w ||
      A[3] !== M ||
      A[4] !== U ||
      A[5] !== G ||
      A[6] !== O ||
      A[7] !== H ||
      A[8] !== R ||
      A[9] !== E.value.directoryId
        ? ((a = w && R && H && U && !G && !O ? (0, v.F6)(E.value.directoryId, M.items) : null),
          (A[2] = w),
          (A[3] = M),
          (A[4] = U),
          (A[5] = G),
          (A[6] = O),
          (A[7] = H),
          (A[8] = R),
          (A[9] = E.value.directoryId),
          (A[10] = a))
        : (a = A[10])
      let k = a
      if (
        A[11] !== k ||
        A[12] !== S ||
        A[13] !== C ||
        A[14] !== E.value.basePath ||
        A[15] !== E.value.directoryId ||
        A[16] !== j
      ) {
        let e = null == j ? C : (0, h.Rr)(j),
          t = new URLSearchParams(e.search)
        ;("external-sharepoint:root" === E.value.directoryId && S.has("sharepoint") && t.delete("search"),
          (c =
            null == k
              ? null
              : `${E.value.basePath}/d/${encodeURIComponent(k)}${t.size > 0 ? `?${t.toString()}` : ""}${e.hash ?? ""}`),
          (A[11] = k),
          (A[12] = S),
          (A[13] = C),
          (A[14] = E.value.basePath),
          (A[15] = E.value.directoryId),
          (A[16] = j),
          (A[17] = c))
      } else c = A[17]
      let D = c
      ;(A[18] !== D || A[19] !== E
        ? ((u = () => {
            null != D && (0, x.zl)(E, D, { replace: !0 })
          }),
          (g = [D, E]),
          (A[18] = D),
          (A[19] = E),
          (A[20] = u),
          (A[21] = g))
        : ((u = A[20]), (g = A[21])),
        (0, o.useEffect)(u, g))
      let V = "/space" === E.value.basePath ? E.value.directoryId : null,
        z = (0, f.AG)(V),
        Q = w
          ? M?.items.filter(
              (e) =>
                (!e.is_root || (null != z && (0, v.oh)(e.id) === z)) &&
                !("google_drive" === z && (0, v.$n)(E.value.directoryId) && e.id === E.value.directoryId),
            )
          : void 0
      ;(w &&
        !Y &&
        P?.directoryId === E.value.directoryId &&
        (null == M || O || (G && F < P.navigationStartedAt)) &&
        (Q = P.items),
        A[22] !== Q || A[23] !== C.state || A[24] !== E
          ? ((p = (e) => {
              ;(E.value.deleted ||
                null == E.value.directoryId ||
                e === E.value.directoryId ||
                (0, I.i)(E, "CHATGPT_FILE_LIBRARY_FOLDER_NAVIGATION_ACTION_BACK", E.value.directoryId),
                (0, x.gb)(E, e, Q?.slice(0, Q.findIndex((t) => t.id === e) + 1)))
              let t = E.value.folderReturnLocations,
                a = t?.accountId === E.value.accountId && t.userId === E.value.userId ? t.locations : [],
                r = a.findIndex((t) => t.directoryId === e),
                s =
                  r >= 0
                    ? a.slice(0, r)
                    : a.filter(
                        (t) =>
                          null == t.directoryId ||
                          Q?.slice(
                            0,
                            Math.max(
                              0,
                              Q.findIndex((t) => t.id === e),
                            ),
                          ).some((e) => e.id === t.directoryId),
                      )
              ;(0, x.zl)(
                E,
                a[r]?.href ??
                  (0, x.SE)({ ...E.value, directoryId: e, deleted: !1, search: null == e ? "" : E.value.search }),
                {
                  state: {
                    ...C.state,
                    libraryFolderReturnLocations: null != t && a.length > 0 ? { ...t, locations: s } : void 0,
                  },
                },
              )
            }),
            (A[22] = Q),
            (A[23] = C.state),
            (A[24] = E),
            (A[25] = p))
          : (p = A[25]))
      let Z = p,
        q = (0, d.A)(),
        W = (0, y.Y)(q, z),
        K = (0, n._U)(B, Q)
      if (null != V && null != W) {
        let e
        ;(A[26] !== K || A[27] !== V || A[28] !== W
          ? ((e = K?.length ? K : [{ id: `${V.split(":", 1)[0]}:root`, name: W }]),
            (A[26] = K),
            (A[27] = V),
            (A[28] = W),
            (A[29] = e))
          : (e = A[29]),
          (b = e))
      } else {
        let e, t, a, r
        ;(A[30] !== q || A[31] !== L
          ? ((e =
              L ??
              q.formatMessage({
                id: "libraryNext.title.library",
                defaultMessage: "Library",
                description: "Title of the Library page",
              })),
            (A[30] = q),
            (A[31] = L),
            (A[32] = e))
          : (e = A[32]),
          A[33] !== e ? ((t = { id: null, name: e }), (A[33] = e), (A[34] = t)) : (t = A[34]),
          A[35] !== K || A[36] !== q || A[37] !== E.value.deleted
            ? ((a = E.value.deleted
                ? [
                    {
                      id: "trash",
                      name: q.formatMessage({
                        id: "libraryNext.title.trash",
                        defaultMessage: "Trash",
                        description: "Library trash heading",
                      }),
                    },
                  ]
                : (K ?? [])),
              (A[35] = K),
              (A[36] = q),
              (A[37] = E.value.deleted),
              (A[38] = a))
            : (a = A[38]),
          A[39] !== t || A[40] !== a ? ((r = [t, ...a]), (A[39] = t), (A[40] = a), (A[41] = r)) : (r = A[41]),
          (b = r))
      }
      return (
        A[42] !== Z || A[43] !== b
          ? ((_ = (0, r.jsx)(T.Q, { items: b, onSelect: Z })), (A[42] = Z), (A[43] = b), (A[44] = _))
          : (_ = A[44]),
        _
      )
    }
    function H(e) {
      let t,
        a,
        i,
        l,
        c,
        u,
        p,
        f,
        m,
        y,
        _,
        I,
        T,
        E,
        C,
        j = (0, s.c)(56),
        { actions: R, showBrowseControls: w, showFilters: S, filters: N, searchLabel: P, searchPlaceholder: F } = e,
        O = void 0 === w || w,
        G = void 0 === S || S,
        B = (0, n.gh)(x.Qy),
        Y = (0, d.A)(),
        H = (0, n.Ul)(x.eY),
        U = (0, n.Ul)(x.YH),
        k = (0, n.Ul)(x.JZ)
      ;(j[0] !== B
        ? ((t = () => (0, x.hV)(B)), (a = [B]), (j[0] = B), (j[1] = t), (j[2] = a))
        : ((t = j[1]), (a = j[2])),
        (0, o.useEffect)(t, a))
      let D = (0, h.zy)(),
        V = (0, n.Ul)(x.g_)
      if (B.value.deleted) {
        let e
        ;(j[3] !== Y
          ? ((e = Y.formatMessage({
              id: "libraryNext.search.trashLabel",
              defaultMessage: "Search trash",
              description: "Accessible label and placeholder for searching only deleted items in Library Trash",
            })),
            (j[3] = Y),
            (j[4] = e))
          : (e = j[4]),
          (i = e))
      } else if (null != B.value.directoryId && !k) {
        let e
        ;(j[5] !== Y
          ? ((e = Y.formatMessage({
              id: "libraryNext.search.folderLabel",
              defaultMessage: "Search folder",
              description: "Accessible label and placeholder for searching only within the current Library folder",
            })),
            (j[5] = Y),
            (j[6] = e))
          : (e = j[6]),
          (i = e))
      }
      j[7] !== B.value.basePath || j[8] !== B.value.deleted || j[9] !== B.value.search
        ? ((l = !B.value.deleted || "/space" !== B.value.basePath || "" !== B.value.search.trim()),
          (j[7] = B.value.basePath),
          (j[8] = B.value.deleted),
          (j[9] = B.value.search),
          (j[10] = l))
        : (l = j[10])
      let z = P ?? i,
        Q = O && !H
      return (
        j[11] !== B ? ((c = (e) => (0, x.ul)(B, e)), (j[11] = B), (j[12] = c)) : (c = j[12]),
        j[13] !== c || j[14] !== U
          ? ((u = { value: U, onChange: c }), (j[13] = c), (j[14] = U), (j[15] = u))
          : (u = j[15]),
        j[16] !== D.search || j[17] !== V
          ? ((p =
              (null == V ? new URLSearchParams(D.search) : new URL(V, "https://chatgpt.com").searchParams).get(
                "search",
              ) ?? ""),
            (j[16] = D.search),
            (j[17] = V),
            (j[18] = p))
          : (p = j[18]),
        j[19] !== B
          ? ((f = () => {
              let e = B.get(x.sp)
              !B.get(x.JZ) && (0, v._w)(e) && B.get(x.mS, null).openSession()
            }),
            (j[19] = B),
            (j[20] = f))
          : (f = j[20]),
        j[21] !== D.state || j[22] !== B
          ? ((m = (e) => {
              ;(0, x.VP)(B)
              let t = B.get(x.sp)
              ;(!B.get(x.JZ) && (0, v._w)(t) && B.get(x.mS, null).setSearch(e),
                (0, x.zl)(B, (0, x.SE)({ ...B.value, search: e }), { replace: !0, state: D.state }))
            }),
            (j[21] = D.state),
            (j[22] = B),
            (j[23] = m))
          : (m = j[23]),
        j[24] !== B ? ((y = (e) => (0, b.np)(B, { layout: e })), (j[24] = B), (j[25] = y)) : (y = j[25]),
        j[26] !== N || j[27] !== H || j[28] !== B.value.deleted || j[29] !== O || j[30] !== G
          ? ((_ = O
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    G && void 0 === N ? (0, r.jsx)(L.d, {}) : null,
                    B.value.deleted && !H && (G || null != N) ? (0, r.jsx)(g.Ow, {}) : null,
                  ],
                })
              : null),
            (j[26] = N),
            (j[27] = H),
            (j[28] = B.value.deleted),
            (j[29] = O),
            (j[30] = G),
            (j[31] = _))
          : (_ = j[31]),
        j[32] !== N || j[33] !== _
          ? ((I = (0, r.jsxs)(r.Fragment, { children: [N, _] })), (j[32] = N), (j[33] = _), (j[34] = I))
          : (I = j[34]),
        j[35] !== O || j[36] !== G
          ? ((T = O && G ? (0, r.jsx)(L.l, {}) : null), (j[35] = O), (j[36] = G), (j[37] = T))
          : (T = j[37]),
        j[38] !== B.value.basePath || j[39] !== O || j[40] !== G
          ? ((E =
              O && G && "/space" !== B.value.basePath && "/space/files" !== B.value.basePath
                ? (0, r.jsx)(M, {})
                : null),
            (j[38] = B.value.basePath),
            (j[39] = O),
            (j[40] = G),
            (j[41] = E))
          : (E = j[41]),
        j[42] !== R ||
        j[43] !== F ||
        j[44] !== p ||
        j[45] !== f ||
        j[46] !== m ||
        j[47] !== y ||
        j[48] !== I ||
        j[49] !== T ||
        j[50] !== E ||
        j[51] !== l ||
        j[52] !== z ||
        j[53] !== Q ||
        j[54] !== u
          ? ((C = (0, r.jsx)(A.Pu, {
              fixedSearchWidth: !0,
              showSearch: l,
              searchLabel: z,
              searchPlaceholder: F,
              showViewToggle: Q,
              viewModeControl: u,
              searchQuery: p,
              onSearchFocus: f,
              onSearchQueryChange: m,
              onViewModeChange: y,
              actions: R,
              filters: I,
              filterTags: T,
              settings: E,
            })),
            (j[42] = R),
            (j[43] = F),
            (j[44] = p),
            (j[45] = f),
            (j[46] = m),
            (j[47] = y),
            (j[48] = I),
            (j[49] = T),
            (j[50] = E),
            (j[51] = l),
            (j[52] = z),
            (j[53] = Q),
            (j[54] = u),
            (j[55] = C))
          : (C = j[55]),
        C
      )
    }
    let U = (0, u.YK)({
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
    a.d(t, { M: () => U })
    var r = a("ABep"),
      s = a("QosV"),
      i = a("dSuP"),
      l = a("slpy"),
      n = a("zTeN"),
      o = a("zd8w"),
      c = a("Wf1j"),
      d = a("oyxz"),
      u = a("HZfM"),
      h = a("E8Sp"),
      g = a("EOo5"),
      p = a("zKCW"),
      f = a("ygO2"),
      m = a("GO7r"),
      y = a("AKNp"),
      b = a("laUo"),
      v = a("ae6t"),
      x = a("O8Pw"),
      _ = a("yGJW"),
      I = a("OWtl"),
      T = a("OMIV"),
      A = a("Nwp9"),
      L = a("By8r"),
      E = a("ZZMM"),
      C = a("SPnB"),
      j = a("O666")
    let R = "1723404263",
      w = (0, n.vP)(I.u, () => !1, { getServerSnapshot: () => !1 }),
      S = (0, n.vP)(I.u, () => void 0),
      N = (0, n.T1)(I.u, (e) => new WeakMap()),
      P = (0, n.un)(I.u, ({ get: e }) => {
        let t,
          a = e(j.$Q, R),
          r = e(T.M9),
          s = null != r && !e(T.RS),
          i = s ? a?.__value.variant : void 0,
          l = "near_capacity_meter" === i || "persistent_meter" === i ? i : "control"
        if (null != r && s) {
          let { user: s } = r.getContext(),
            i = a?.__evaluation,
            n = JSON.stringify([
              e(C.chatGptAuthenticatedAccountId$),
              e(C.chatGptAuthenticatedUserId$),
              s.userID,
              s.custom?.account_id,
              Object.entries(s.customIDs ?? {}).sort(([e], [t]) => e.localeCompare(t)),
              l,
              a?.ruleID,
              a?.groupName,
              i?.allocated_experiment_name,
              i?.parameter_rule_ids?.variant,
              i?.is_experiment_active,
              i?.is_user_in_experiment,
              i?.explicit_parameters.includes("variant"),
            ]),
            o = e(N, "session"),
            c = o.get(r)
          ;(c?.key !== n && ((c = { key: n, identity: Symbol() }), o.set(r, c)), (t = c.identity))
        }
        return { variant: l, identity: t }
      })
    ;(0, n.un)(I.u, ({ get: e }) => {
      let t = e(P)
      return null != t.identity && e(S) === t.identity ? t.variant : "control"
    })
    var M = a("Qgfj"),
      F = a("CqQF")
    let O = (0, M.YK)({
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
    function G(e) {
      let t,
        a,
        i,
        l,
        n,
        o,
        u,
        h,
        g,
        y,
        b,
        v,
        x,
        _,
        I = (0, s.c)(35),
        { usage: T, state: A, onDismiss: L, onManage: E, onUpgrade: C } = e,
        j = (0, c.A)(),
        R = (T.used_bytes / T.allowed_bytes) * 100
      I[0] !== j
        ? ((t = j.formatMessage({
            id: "library.storageMeter.dismiss",
            defaultMessage: "Dismiss storage warning",
            description: "Accessible label for hiding the Library cloud storage meter warning for seven days",
          })),
          (I[0] = j),
          (I[1] = t))
        : (t = I[1])
      let w = t,
        S = O[A]
      ;(I[2] !== S
        ? ((a = (0, r.jsx)("div", {
            className: "text-sm font-medium text-default",
            children: (0, r.jsx)(d.A, { ...S }),
          })),
          (I[2] = S),
          (I[3] = a))
        : (a = I[3]),
        I[4] !== j || I[5] !== R
          ? ((i = j.formatNumber(R / 100, { style: "percent", maximumFractionDigits: 1 })),
            (I[4] = j),
            (I[5] = R),
            (I[6] = i))
          : (i = I[6]),
        I[7] !== i
          ? ((l = (0, r.jsx)("div", {
              className: "text-xs text-secondary",
              children: (0, r.jsx)(d.A, {
                id: "library.storageMeter.usedPercentage",
                defaultMessage: "{usedPercent} of available space used",
                description:
                  "Subtitle of the Library cloud storage meter. usedPercent is a localized percentage such as 98.5%, and may exceed 100% when storage is over its limit",
                values: { usedPercent: i },
              }),
            })),
            (I[7] = i),
            (I[8] = l))
          : (l = I[8]),
        I[9] !== a || I[10] !== l
          ? ((n = (0, r.jsxs)("div", { className: "min-w-0 grow basis-64", children: [a, l] })),
            (I[9] = a),
            (I[10] = l),
            (I[11] = n))
          : (n = I[11]),
        I[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, r.jsx)(d.A, {
              id: "library.storageBanner.manage",
              defaultMessage: "Manage",
              description: "Opens Storage settings to manage saved Library files",
            })),
            (I[12] = o))
          : (o = I[12]),
        I[13] !== E
          ? ((u = (0, r.jsx)(f.$, { color: "outlineSurface", size: "dialog", onClick: E, children: o })),
            (I[13] = E),
            (I[14] = u))
          : (u = I[14]),
        I[15] !== C
          ? ((h = C
              ? (0, r.jsxs)(f.$, {
                  color: "upgrade",
                  size: "dialog",
                  onClick: C,
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
            (I[15] = C),
            (I[16] = h))
          : (h = I[16]),
        I[17] !== w || I[18] !== L
          ? ((g = L
              ? (0, r.jsx)(F.m, {
                  cloneCustomTrigger: !0,
                  tooltipContent: w,
                  children: (0, r.jsx)(f.$, {
                    color: "ghostActive",
                    size: "iconCircle",
                    onClick: L,
                    "aria-label": w,
                    children: (0, r.jsx)(m.pgK, {}),
                  }),
                })
              : null),
            (I[17] = w),
            (I[18] = L),
            (I[19] = g))
          : (g = I[19]),
        I[20] !== g || I[21] !== u || I[22] !== h
          ? ((y = (0, r.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [u, h, g] })),
            (I[20] = g),
            (I[21] = u),
            (I[22] = h),
            (I[23] = y))
          : (y = I[23]),
        I[24] !== y || I[25] !== n
          ? ((b = (0, r.jsxs)("div", { className: "flex flex-wrap items-center gap-3", children: [n, y] })),
            (I[24] = y),
            (I[25] = n),
            (I[26] = b))
          : (b = I[26]))
      let N = Math.min(100, Math.max(0, R))
      return (
        I[27] !== j
          ? ((v = j.formatMessage({
              id: "library.storageMeter.progressLabel",
              defaultMessage: "Storage used",
              description: "Accessible label for the progress bar showing the portion of Library cloud storage used",
            })),
            (I[27] = j),
            (I[28] = v))
          : (v = I[28]),
        I[29] !== N || I[30] !== v
          ? ((x = (0, r.jsx)("progress", {
              className:
                "h-1.5 w-full overflow-hidden rounded-full [&::-moz-progress-bar]:bg-primary-solid [&::-ms-fill]:bg-primary-solid [&::-webkit-progress-bar]:bg-text/10 [&::-webkit-progress-value]:bg-primary-solid",
              max: 100,
              value: N,
              "aria-label": v,
            })),
            (I[29] = N),
            (I[30] = v),
            (I[31] = x))
          : (x = I[31]),
        I[32] !== b || I[33] !== x
          ? ((_ = (0, r.jsx)(p.l, {
              variant: "settings",
              layout: "vertical",
              content: (0, r.jsxs)("div", { className: "flex flex-col gap-3 select-none", children: [b, x] }),
            })),
            (I[32] = b),
            (I[33] = x),
            (I[34] = _))
          : (_ = I[34]),
        _
      )
    }
    var B = a("KGdK")
    let Y = (0, A.m3)("library-storage-full-banner-dismissed-at", null),
      H = (0, A.m3)("library-storage-almost-full-banner-dismissed-at", null)
    function U(e) {
      let t,
        a = (0, s.c)(4),
        { isVisible: i } = e,
        l = void 0 === i || i,
        o = (0, n._U)(T.JW, "2767344663"),
        c = (0, n._U)(T.JW, "4231797315")
      return (
        a[0] !== l || a[1] !== o || a[2] !== c
          ? ((t = o && c ? (0, r.jsx)(k, { isVisible: l }) : null), (a[0] = l), (a[1] = o), (a[2] = c), (a[3] = t))
          : (t = a[3]),
        t
      )
    }
    function k(e) {
      let t,
        a,
        l,
        c,
        d,
        p,
        f,
        m,
        x,
        A,
        C,
        j,
        N,
        M,
        F,
        O,
        U,
        k,
        V,
        z = (0, s.c)(80),
        { isVisible: Q } = e,
        Z = (0, n.gh)(I.u),
        { pathname: q } = (0, n.Ul)(h.gM),
        W = (0, u.Zp)(),
        K = (0, v.j)(),
        $ = (0, g.As)(),
        J = (0, n.Ul)(T.M9),
        X = (0, n.Ul)(T.RS),
        ee = (0, n.Ul)(w),
        et = (0, n.Ul)(P),
        ea = et.variant,
        { data: er } = (0, n.Ul)(E.a),
        es = (0, n.Ul)(Y),
        ei = (0, n.Ul)(H),
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
      let ec = "full" === t ? es : ei,
        ed = null != ec && el < ec + 6048e5 ? null : t
      if (z[2] !== $ || z[3] !== ee || z[4] !== er)
        ((a =
          ee &&
          null != er &&
          !$.isLoading &&
          "chatgpt" === $.authMethod &&
          null != $.userId &&
          null != $.accountId &&
          Number.isFinite(er.allowed_bytes) &&
          er.allowed_bytes > 0 &&
          Number.isFinite(er.used_bytes) &&
          er.used_bytes >= 0 &&
          Number.isFinite(er.remaining_bytes) &&
          ("free" === er.plan_type ||
            "free_workspace" === er.plan_type ||
            "go" === er.plan_type ||
            "plus" === er.plan_type)),
          (z[2] = $),
          (z[3] = ee),
          (z[4] = er),
          (z[5] = a))
      else a = z[5]
      let eu = a
      z[6] !== eu || z[7] !== J || z[8] !== er || z[9] !== ed
        ? ((l =
            null != er &&
            (null != ed || eu) &&
            (0, B.M)(er) &&
            null != J &&
            (0, y.ku)(J, "library_storage_limit_banner")),
          (z[6] = eu),
          (z[7] = J),
          (z[8] = er),
          (z[9] = ed),
          (z[10] = l))
        : (l = z[10])
      let eh = l,
        eg = eu && eh,
        ep = eg && "persistent_meter" === ea,
        ef = eg && "near_capacity_meter" === ea
      if (
        (z[11] !== Q || z[12] !== eg || z[13] !== Z || z[14] !== X
          ? ((c = () => {
              eg &&
                Q &&
                !X &&
                (function (e) {
                  let t = e.get(T.M9),
                    { identity: a } = e.get(P)
                  null != t &&
                    null != a &&
                    (t.getLayer(R, { disableExposureLog: !1 }).get("variant", "control"), e.set(S, a))
                })(Z)
            }),
            (z[11] = Q),
            (z[12] = eg),
            (z[13] = Z),
            (z[14] = X),
            (z[15] = c))
          : (c = z[15]),
        z[16] !== $.accountId ||
        z[17] !== $.userId ||
        z[18] !== Q ||
        z[19] !== et ||
        z[20] !== eg ||
        z[21] !== Z ||
        z[22] !== X
          ? ((d = [Z, et, $.accountId, $.userId, Q, eg, X]),
            (z[16] = $.accountId),
            (z[17] = $.userId),
            (z[18] = Q),
            (z[19] = et),
            (z[20] = eg),
            (z[21] = Z),
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
        z[27] !== es || z[28] !== Z || z[29] !== t || z[30] !== er
          ? ((m = () => {
              null != er && "full" !== t && null != es && Z.set(Y, null)
            }),
            (z[27] = es),
            (z[28] = Z),
            (z[29] = t),
            (z[30] = er),
            (z[31] = m))
          : (m = z[31]),
        z[32] !== es || z[33] !== Z || z[34] !== t || z[35] !== er
          ? ((x = [Z, er, t, es]), (z[32] = es), (z[33] = Z), (z[34] = t), (z[35] = er), (z[36] = x))
          : (x = z[36]),
        (0, o.useEffect)(m, x),
        z[37] !== Z || z[38] !== er || z[39] !== ed
          ? ((C = () => {
              null == ed
                ? (eo.current = null)
                : null != er &&
                  eo.current !== ed &&
                  ((eo.current = ed),
                  (0, _.yy)(Z, i.ix, { ...(0, L.e)(er), surface: "library", source: "library_banner" }))
            }),
            (A = [Z, er, ed]),
            (z[37] = Z),
            (z[38] = er),
            (z[39] = ed),
            (z[40] = A),
            (z[41] = C))
          : ((A = z[40]), (C = z[41])),
        (0, o.useEffect)(C, A),
        null == er || (null == ed && !ep))
      )
        return null
      ;(z[42] !== er ? ((j = (0, L.e)(er)), (z[42] = er), (z[43] = j)) : (j = z[43]),
        z[44] !== j
          ? ((N = { ...j, surface: "library", source: "library_banner" }), (z[44] = j), (z[45] = N))
          : (N = z[45]))
      let em = N
      z[46] !== Z || z[47] !== t
        ? ((M = () => {
            let e = Date.now()
            ;(Z.set("full" === t ? Y : H, e), en(e))
          }),
          (z[46] = Z),
          (z[47] = t),
          (z[48] = M))
        : (M = z[48])
      let ey = M
      z[49] !== em || z[50] !== W || z[51] !== Z || z[52] !== ed
        ? ((F = () => {
            ;(null != ed && (0, _.yy)(Z, i.jt, { ...em, cta: "CHATGPT_FILE_LIBRARY_STORAGE_CTA_MANAGE_STORAGE" }),
              (0, _.yy)(Z, i.Rf, em),
              W("/settings/storage"))
          }),
          (z[49] = em),
          (z[50] = W),
          (z[51] = Z),
          (z[52] = ed),
          (z[53] = F))
        : (F = z[53])
      let eb = F
      z[54] !== eh || z[55] !== em || z[56] !== K || z[57] !== Z || z[58] !== er || z[59] !== ed
        ? ((O = eh
            ? () => {
                ;(null != ed &&
                  (0, _.yy)(Z, i.jt, {
                    ...em,
                    cta: "CHATGPT_FILE_LIBRARY_STORAGE_CTA_UPGRADE",
                    openModalLocation: "library_storage_limit_banner",
                  }),
                  K({
                    currentPlan: (0, b.m6)(er.plan_type)?.pricePlan ?? null,
                    source: "library_storage_banner",
                    chatGptContext: { openModalLocation: "library_storage_limit_banner" },
                  }))
              }
            : void 0),
          (z[54] = eh),
          (z[55] = em),
          (z[56] = K),
          (z[57] = Z),
          (z[58] = er),
          (z[59] = ed),
          (z[60] = O))
        : (O = z[60])
      let ev = O
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
                    children: (0, r.jsx)(G, {
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
          ? ((k =
              null == ed || ef
                ? null
                : (0, r.jsx)(D, {
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
            (z[76] = k))
          : (k = z[76]),
        z[77] !== U || z[78] !== k
          ? ((V = (0, r.jsxs)(r.Fragment, { children: [U, k] })), (z[77] = U), (z[78] = k), (z[79] = V))
          : (V = z[79]),
        V
      )
    }
    function D(e) {
      let t,
        a,
        i,
        n,
        o,
        u,
        h,
        g,
        y,
        b = (0, s.c)(24),
        { basePath: v, state: _, onDismiss: I, onManage: T, onUpgrade: A } = e,
        L = (0, x.mz)(v ?? "/space"),
        E = (0, c.A)()
      b[0] !== E || b[1] !== L
        ? ((t = L
            ? E.formatMessage({
                id: "library.storageBanner.dismiss.storage.space",
                defaultMessage: "Dismiss storage warning",
                description: "Accessible label for hiding the storage warning for seven days on a Space surface.",
              })
            : E.formatMessage({
                id: "library.storageBanner.dismiss.storage.library",
                defaultMessage: "Dismiss Storage warning",
                description: "Accessible label for hiding the storage warning for seven days on a Library surface.",
              })),
          (b[0] = E),
          (b[1] = L),
          (b[2] = t))
        : (t = b[2])
      let C = t
      if ("full" === _ && A) {
        let e
        ;(b[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(d.A, {
              id: "library.storageBanner.full.upgrade.storage",
              defaultMessage:
                "<emphasis>Your storage is full.</emphasis> New files can't be added until you free up space or upgrade for more storage.",
              description:
                "Cloud file storage warning shared by Library and Space surfaces. Upgrade refers to changing the ChatGPT plan, not device storage. Emphasis marks the opening sentence.",
              values: { emphasis: Z },
            })),
            (b[3] = e))
          : (e = b[3]),
          (a = e))
      } else if ("full" === _) {
        let e
        ;(b[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(d.A, {
              id: "library.storageBanner.full.manage.storage",
              defaultMessage: "<emphasis>Your storage is full.</emphasis> Free up space to keep adding files.",
              description:
                "Cloud file storage warning shared by Library and Space surfaces when no larger plan is available. Emphasis marks the opening sentence.",
              values: { emphasis: Q },
            })),
            (b[4] = e))
          : (e = b[4]),
          (a = e))
      } else if (A) {
        let e
        ;(b[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(d.A, {
              id: "library.storageBanner.almostFull.upgrade.storage",
              defaultMessage:
                "<emphasis>Your storage is almost full.</emphasis> Manage your storage space or upgrade for more.",
              description:
                "Cloud file storage warning shared by Library and Space surfaces when ten percent or less is available. Upgrade refers to changing the ChatGPT plan. Emphasis marks the opening sentence.",
              values: { emphasis: z },
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
              values: { emphasis: V },
            })),
            (b[6] = e))
          : (e = b[6]),
          (a = e))
      }
      return (
        b[7] === Symbol.for("react.memo_cache_sentinel") ? ((i = (0, r.jsx)(m.zOs, {})), (b[7] = i)) : (i = b[7]),
        b[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, r.jsx)(d.A, {
              id: "library.storageBanner.manage",
              defaultMessage: "Manage",
              description: "Opens Storage settings to manage saved Library files",
            })),
            (b[8] = n))
          : (n = b[8]),
        b[9] !== A
          ? ((o = A
              ? (0, r.jsx)(d.A, {
                  id: "library.storageBanner.upgrade",
                  defaultMessage: "Upgrade",
                  description: "Change the ChatGPT subscription plan for more Library cloud storage",
                })
              : void 0),
            (b[9] = A),
            (b[10] = o))
          : (o = b[10]),
        b[11] === Symbol.for("react.memo_cache_sentinel") ? ((u = (0, r.jsx)(m.pgK, {})), (b[11] = u)) : (u = b[11]),
        b[12] !== C || b[13] !== I
          ? ((h = (0, r.jsx)(f.$, {
              color: "ghostActive",
              size: "iconCircle",
              onClick: I,
              "aria-label": C,
              children: u,
            })),
            (b[12] = C),
            (b[13] = I),
            (b[14] = h))
          : (h = b[14]),
        b[15] !== C || b[16] !== h
          ? ((g = (0, r.jsx)(l.m, { content: C, children: h })), (b[15] = C), (b[16] = h), (b[17] = g))
          : (g = b[17]),
        b[18] !== a || b[19] !== T || b[20] !== A || b[21] !== o || b[22] !== g
          ? ((y = (0, r.jsx)(p.l, {
              variant: "pageNotice",
              icon: i,
              content: a,
              primaryCtaText: n,
              primaryCtaColor: "outlineSurface",
              onPrimaryCtaClick: T,
              secondaryCtaText: o,
              secondaryCtaColor: "upgrade",
              onSecondaryCtaClick: A,
              trailingAction: g,
            })),
            (b[18] = a),
            (b[19] = T),
            (b[20] = A),
            (b[21] = o),
            (b[22] = g),
            (b[23] = y))
          : (y = b[23]),
        y
      )
    }
    function V(e) {
      return (0, r.jsx)("strong", { className: "font-medium", children: e })
    }
    function z(e) {
      return (0, r.jsx)("strong", { className: "font-medium", children: e })
    }
    function Q(e) {
      return (0, r.jsx)("strong", { className: "font-medium", children: e })
    }
    function Z(e) {
      return (0, r.jsx)("strong", { className: "font-medium", children: e })
    }
  },
  KGdK(e, t, a) {
    var r = a("AKNp"),
      s = a("OMIV")
    function i(e) {
      return "free" === e.limit_tier
        ? "free" === e.plan_type || "free_workspace" === e.plan_type
        : "go" === e.limit_tier || "plus" === e.limit_tier || "prolite" === e.limit_tier
    }
    a.d(
      t,
      {},
      {
        M: i,
        X: function (e, t, a) {
          let l = e.get(s.M9)
          return (
            i(t) &&
            null != l &&
            (0, r.ku)(l, "banner" === a ? "library_storage_limit_banner" : `Library storage limit ${a}`)
          )
        },
      },
    )
  },
  FWLJ(e, t, a) {
    a.d(t, { n: () => y })
    var r = a("ABep"),
      s = a("QosV"),
      i = a("nkTT")
    let l = (0, i.a)({
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
      n = (0, i.a)({
        name: "folder-light-24",
        canvas: {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          frame: { x: 0, y: 0, width: 24, height: 24 },
          inkBounds: { x: 2.5, y: 3.25, width: 19, height: 17.5 },
          visualBounds: { x: 2.5, y: 3.25, width: 19, height: 17.5 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 2.5, y: 3.25, width: 19, height: 17.5 },
          center: { x: 12, y: 12 },
          insets: { top: 3.25, right: 2.5, bottom: 3.25, left: 2.5 },
          anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
        },
        capabilities: ["icon"],
        body: '<path d="M8.33984 3.25C9.08998 3.25008 9.82106 3.4875 10.4277 3.92871L11.7051 4.85742C12.0554 5.11218 12.477 5.24992 12.9102 5.25H17.9502C19.9107 5.25011 21.4999 6.83935 21.5 8.7998V17.2002C21.4999 19.1607 19.9107 20.7499 17.9502 20.75H6.0498C4.08935 20.7499 2.50011 19.1607 2.5 17.2002V6.7998C2.50011 4.83935 4.08935 3.25011 6.0498 3.25H8.33984ZM4 11.75V17.2002C4.00011 18.3322 4.91778 19.2499 6.0498 19.25H17.9502C19.0822 19.2499 19.9999 18.3322 20 17.2002V11.75H4ZM6.0498 4.75C4.91778 4.75011 4.00011 5.66778 4 6.7998V10.25H20V8.7998C19.9999 7.66778 19.0822 6.75011 17.9502 6.75H12.9102C12.16 6.74992 11.4289 6.5125 10.8223 6.07129L9.54492 5.14258C9.19463 4.88782 8.77297 4.75008 8.33984 4.75H6.0498Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      })
    var o = a("ZaI7"),
      c = a("mb6V")
    let d = (0, i.a)({
      name: "trash-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 2.75, y: 2, width: 18.5, height: 19.780273 },
        visualBounds: { x: 2.75, y: 2, width: 18.5, height: 19.780273 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.75, y: 2, width: 18.5, height: 19.780273 },
        center: { x: 12, y: 11.890137 },
        insets: { top: 2, right: 2.75, bottom: 2.219727, left: 2.75 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 11.890137 }, foreground: { x: 12, y: 11.890137 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10 10.25C10.4142 10.25 10.75 10.5858 10.75 11V16.0195C10.7498 16.4336 10.4141 16.7695 10 16.7695C9.58592 16.7695 9.25022 16.4336 9.25 16.0195V11C9.25 10.5858 9.58579 10.25 10 10.25Z" fill="currentColor"/> <path d="M14 10.25C14.4142 10.25 14.75 10.5858 14.75 11V16.0195C14.7498 16.4336 14.4141 16.7695 14 16.7695C13.5859 16.7695 13.2502 16.4336 13.25 16.0195V11C13.25 10.5858 13.5858 10.25 14 10.25Z" fill="currentColor"/> <path d="M12 2C14.4545 2 16.4738 3.86169 16.7236 6.25H20.5C20.9142 6.25 21.25 6.58579 21.25 7C21.25 7.41421 20.9142 7.75 20.5 7.75H19.7207L19.0742 18.2607C18.9524 20.2385 17.3126 21.7802 15.3311 21.7803H8.70312C6.72627 21.7801 5.08866 20.2452 4.96094 18.2725L4.28125 7.75H3.5C3.08579 7.75 2.75 7.41421 2.75 7C2.75 6.58579 3.08579 6.25 3.5 6.25H7.27637C7.52623 3.86169 9.54553 2 12 2ZM6.45801 18.1758C6.53476 19.3593 7.51716 20.2801 8.70312 20.2803H15.3311C16.52 20.2802 17.5041 19.3547 17.5771 18.168L18.2178 7.75H5.7832L6.45801 18.1758ZM12 3.5C10.3751 3.5 9.02858 4.69244 8.78809 6.25H15.2119C14.9714 4.69244 13.6249 3.5 12 3.5Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var u = a("oyxz"),
      h = a("Qgfj"),
      g = a("HOLv"),
      p = a("FrrB"),
      f = a("V080"),
      m = a("zzCT")
    function y(e) {
      let t,
        a,
        i,
        h,
        y,
        v,
        x = (0, s.c)(17),
        { view: _, description: I } = e
      x[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            all: { icon: l, title: b.allTitle, description: b.allDescription },
            pages: { icon: c.b, title: b.pagesTitle, description: b.pagesDescription },
            images: { icon: o.v, title: b.imagesTitle, description: b.imagesDescription },
            folder: { icon: n, title: b.folderTitle, description: b.folderDescription },
            trash: { icon: d, title: b.trashTitle, description: b.trashDescription },
            "trash-files": { icon: d, title: b.trashFilesTitle, description: b.trashFilesDescription },
            "trash-pages": { icon: d, title: b.trashPagesTitle, description: b.trashPagesDescription },
          }),
          (x[0] = t))
        : (t = x[0])
      let T = t[_]
      switch (_) {
        case "all": {
          let e
          ;(x[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(m.SlateSpaceCreateMenu, {})), (x[1] = e))
            : (e = x[1]),
            (a = e))
          break
        }
        case "pages":
        case "images": {
          let e
          ;(x[2] !== _ ? ((e = (0, r.jsx)(m.SlateSpaceCreateMenu, { action: _ })), (x[2] = _), (x[3] = e)) : (e = x[3]),
            (a = e))
          break
        }
        case "folder": {
          let e
          ;(x[4] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, r.jsx)(f.JA, {})), (x[4] = e)) : (e = x[4]),
            (a = e))
        }
      }
      return (
        x[5] !== T.icon ? ((i = (0, r.jsx)(g.I, { asset: T.icon })), (x[5] = T.icon), (x[6] = i)) : (i = x[6]),
        x[7] !== T.title
          ? ((h = (0, r.jsx)("h2", { children: (0, r.jsx)(u.A, { ...T.title }) })), (x[7] = T.title), (x[8] = h))
          : (h = x[8]),
        x[9] !== T.description || x[10] !== I
          ? ((y = void 0 === I ? (0, r.jsx)(u.A, { ...T.description }) : I),
            (x[9] = T.description),
            (x[10] = I),
            (x[11] = y))
          : (y = x[11]),
        x[12] !== a || x[13] !== i || x[14] !== h || x[15] !== y
          ? ((v = (0, r.jsx)(p.A, {
              className: "select-none",
              layout: "page",
              spacing: "default",
              illustrationSize: "tile",
              illustration: i,
              title: h,
              description: y,
              actions: a,
            })),
            (x[12] = a),
            (x[13] = i),
            (x[14] = h),
            (x[15] = y),
            (x[16] = v))
          : (v = x[16]),
        v
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
      s = a("QosV"),
      i = a("zTeN"),
      l = a("Fmx8"),
      n = a("LcBG"),
      o = a("FBu8"),
      c = a("tpma")
    a.d(
      t,
      {},
      {
        D: function () {
          let e,
            t = (0, s.c)(3),
            a = (0, i.gh)(l.Qy),
            d = (0, i.Ul)(l.YH),
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
      s = a("QosV"),
      i = a("Qgfj"),
      l = a("Wf1j"),
      n = a("oyxz"),
      o = a("BrP7")
    let c = (0, i.YK)({
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
            i,
            n,
            c = (0, s.c)(8),
            { kind: u, onSelect: h } = e,
            g = (0, l.A)()
          return (
            c[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = ["files", "pages", "spaces"]), (c[0] = t))
              : (t = c[0]),
            c[1] === Symbol.for("react.memo_cache_sentinel") ? ((a = t.map(d)), (c[1] = a)) : (a = c[1]),
            c[2] !== g
              ? ((i = g.formatMessage({
                  id: "codex.space.trash.sections",
                  defaultMessage: "Trash sections",
                  description: "Accessible label for Files, Pages and Spaces navigation in Library Trash",
                })),
                (c[2] = g),
                (c[3] = i))
              : (i = c[3]),
            c[4] !== u || c[5] !== h || c[6] !== i
              ? ((n = (0, r.jsx)(o.t, {
                  variant: "browse",
                  scrollable: !0,
                  tabs: a,
                  selectedKey: u,
                  ariaLabel: i,
                  onSelect: h,
                })),
                (c[4] = u),
                (c[5] = h),
                (c[6] = i),
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
      s = a("Fmx8"),
      i = a("Dk5X"),
      l = a("e1xH")
    let n = (0, r.un)(s.Qy, ({ get: e, scope: t }) => {
      if (
        !t.value.deleted ||
        e(s.nt) ||
        t.value.search.trim() ||
        t.value.categories.length ||
        t.value.sources.length ||
        "loading" === e(l.GU)
      )
        return !1
      if (e(l.Op)) {
        let t = e(s.i3)
        return !t.isPending && !t.isFetching && !t.isError && !t.hasNextPage && e(s.PP)?.length === 0
      }
      {
        if (!e(s.YV)) return !1
        if ("enabled" !== e(l.GU)) return !0
        let t = e(i.v)
        if (
          t.isPending ||
          t.isFetching ||
          t.isError ||
          t.hasNextPage ||
          !t.data?.pages.every((e) => 0 === e.items.length)
        )
          return !1
      }
      let a = e(i.A)
      return (
        !a.isPending && !a.isFetching && !a.isError && !a.hasNextPage && a.data.pages.every((e) => 0 === e.items.length)
      )
    })
    a.d(t, {}, { Q: n })
  },
  bVKo(e, t, a) {
    let r = (0, a("nkTT").a)({
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
  SKlu(e, t, a) {
    let r = (0, a("nkTT").a)({
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
      body: '<path d="M9.99805 3.12891C11.1397 2.09939 12.8713 2.15445 13.9229 3.22461C15.0428 4.30582 15.0791 6.12407 13.9297 7.27344L8.33887 12.8633C7.76885 13.4643 7.0385 13.8717 6.27539 14.0488H6.27344L3.18066 14.7598L3.17969 14.7578C3.04728 14.7893 2.77955 14.8161 2.56641 14.6035C2.35234 14.3899 2.37933 14.1208 2.41113 13.9883L3.12109 10.9023C3.30016 10.1059 3.70942 9.41049 4.27051 8.85059L9.88867 3.23242L9.99805 3.12891ZM5.0127 9.59375C4.57962 10.0259 4.27691 10.5485 4.14551 11.1348L4.14453 11.1377L3.57812 13.5898L6.03906 13.0254C6.60496 12.8938 7.1526 12.5902 7.57812 12.1416L7.58691 12.1318L12.1084 7.60938L9.55176 5.05176L5.0127 9.59375ZM13.1816 3.96777C12.5088 3.27474 11.3617 3.24635 10.6309 3.97559L10.6299 3.97461L10.2949 4.30957L12.8516 6.86621L13.1875 6.53125C13.9237 5.79502 13.8897 4.65189 13.1943 3.98047L13.1816 3.96777Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M3.66699 1.83984C3.79131 1.84001 3.89846 1.92787 3.92285 2.0498C3.99414 2.40621 4.13347 2.71072 4.34766 2.94141C4.55957 3.16962 4.85819 3.34046 5.27637 3.41016C5.4022 3.4312 5.49414 3.54038 5.49414 3.66797C5.49397 3.7954 5.40206 3.90376 5.27637 3.9248C4.85824 3.99449 4.55956 4.16538 4.34766 4.39355C4.13349 4.62419 3.99417 4.92883 3.92285 5.28516C3.89846 5.40709 3.79131 5.49495 3.66699 5.49512C3.54253 5.49512 3.43457 5.40721 3.41016 5.28516C3.33884 4.92886 3.1995 4.62418 2.98535 4.39355C2.77345 4.16546 2.47468 3.99448 2.05664 3.9248C1.93109 3.90365 1.83903 3.7953 1.83887 3.66797C1.83887 3.54047 1.93095 3.43131 2.05664 3.41016C2.47478 3.34047 2.77344 3.16958 2.98535 2.94141C3.19956 2.71072 3.33885 2.40622 3.41016 2.0498C3.43457 1.92775 3.54253 1.83984 3.66699 1.83984Z" fill="currentColor"/>',
    })
    a.d(t, {}, { n: r })
  },
  ZaI7(e, t, a) {
    let r = (0, a("nkTT").a)({
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
      body: '<path d="M15.0625 6.65039C16.7469 6.65039 18.1122 8.01582 18.1123 9.7002C18.112 11.3844 16.7468 12.75 15.0625 12.75C13.3783 12.7498 12.013 11.3843 12.0127 9.7002C12.0128 8.01592 13.3782 6.65056 15.0625 6.65039ZM15.0625 8.15039C14.2067 8.15056 13.5128 8.84435 13.5127 9.7002C13.513 10.5559 14.2068 11.2498 15.0625 11.25C15.9184 11.25 16.612 10.556 16.6123 9.7002C16.6122 8.84424 15.9185 8.15039 15.0625 8.15039Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M18.2002 3.25C20.1607 3.25011 21.7499 4.83935 21.75 6.7998V17.2002C21.7499 19.1607 20.1607 20.7499 18.2002 20.75H5.7998C3.83935 20.7499 2.25011 19.1607 2.25 17.2002V6.7998C2.25011 4.83935 3.83935 3.25011 5.7998 3.25H18.2002ZM5.7998 4.75C4.66778 4.75011 3.75011 5.66778 3.75 6.7998V14.1553L5.11328 12.792C6.3825 11.523 8.44082 11.5229 9.70996 12.792L16.168 19.25H18.2002C19.3322 19.2499 20.2499 18.3322 20.25 17.2002V6.7998C20.2499 5.66778 19.3322 4.75011 18.2002 4.75H5.7998ZM8.64941 13.8525C7.96606 13.1692 6.85726 13.1693 6.17383 13.8525L3.81445 16.2119L3.75 16.1475V17.2002C3.75011 18.3322 4.66778 19.2499 5.7998 19.25H14.0459L8.64941 13.8525Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    a.d(t, {}, { v: r })
  },
}
//# sourceMappingURL=910179.79839e37b4.js.map
