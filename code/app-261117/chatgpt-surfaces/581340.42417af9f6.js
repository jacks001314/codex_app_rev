export const __rspack_esm_ids = [581340]
export const __webpack_modules__ = {
  NoAK(e, s, t) {
    t.d(s, { NativeInstructorWorkspace: () => G, NativeOfferingSpaces: () => X })
    var r = t("ABep"),
      a = t("QosV"),
      n = t("qmMi"),
      o = t("SPnB"),
      c = t("NRR1"),
      l = t("e1xH"),
      i = t("vnV1"),
      d = t("BkKO"),
      u = t("zd8w"),
      m = t("oyxz"),
      f = t("Wf1j"),
      h = t("CWeU"),
      g = t("Kwur"),
      x = t("Sm6l"),
      p = t("eShZ"),
      j = t("OWtl")
    function y(e) {
      return {
        expectedIdentity: e,
        additionalHeaders: { "ChatGPT-Account-ID": e.accountId, "X-OpenAI-Use-Sheep": "1" },
        cache: "no-store",
      }
    }
    let b = "/classroom/workspaces/{workspace_id}/instructor/offerings/{offering_id}/content-sets",
      _ = (0, n.N3)(j.u, ({ identity: e, generation: s, offeringId: r }) => ({
        queryKey: ["classroom-instructor-sets", e.accountId, e.userId, s, r],
        enabled: null != r,
        initialPageParam: null,
        getNextPageParam: (e) => e.next_cursor ?? void 0,
        queryFn: async ({ pageParam: s, signal: a }) => {
          if (null == r) throw Error("Expected an Offering for the class content query")
          let { Request: n } = await Promise.resolve().then(t.bind(t, "Kwur"))
          return n.safeRequest("get", b, {
            parameters: {
              path: { workspace_id: e.accountId, offering_id: r },
              query: { account_id: e.accountId, cursor: s ?? void 0 },
            },
            ...y(e),
            signal: a,
          })
        },
        staleTime: 0,
        gcTime: 0,
        retry: !1,
      }))
    var v = t("Ywss"),
      w = t("bVeK"),
      S = t("Qgfj")
    let N = (0, S.YK)({
        instructor: { id: "classroom.connected.instructor", defaultMessage: "Instructor" },
        audienceLabel: {
          id: "classroom.connected.audienceLabel",
          defaultMessage:
            "{audience, select, students {Students} instructors {Instructors} everyone {Everyone} other {Course members}}",
        },
        savedHere: {
          id: "classroom.connected.savedHere",
          defaultMessage:
            "Changes are saved in the selected workspace. Choose an audience for each Space in this offering.",
        },
        loading: { id: "classroom.connected.loading", defaultMessage: "Loading courses\u2026" },
        unavailable: {
          id: "classroom.connected.unavailable",
          defaultMessage:
            "Courses couldn\u2019t be loaded. Retry, or check that Classroom is set up for this workspace.",
        },
        denied: {
          id: "classroom.connected.denied",
          defaultMessage: "Choose an eligible education workspace where you have permission to create courses",
        },
        more: { id: "classroom.connected.more", defaultMessage: "Load more" },
        saveError: {
          id: "classroom.connected.saveError",
          defaultMessage: "Couldn\u2019t confirm this change. Retry to check the same request.",
        },
        stale: {
          id: "classroom.connected.stale",
          defaultMessage: "This changed since you opened it. Reload and review the latest version.",
        },
        setup: {
          id: "classroom.connected.setup",
          defaultMessage:
            "Your course is saved. Its first offering still needs to be created. Check your workspace\u2019s term dates and enrollment policy, then retry.",
        },
        first: { id: "classroom.connected.first", defaultMessage: "Create first offering" },
        courseCreate: {
          id: "classroom.connected.courseCreate",
          defaultMessage: "Your first offering uses the dates and policy configured for this workspace",
        },
        ownerPending: {
          id: "classroom.connected.ownerPending",
          defaultMessage: "Offering created. Owner access is awaiting confirmation.",
        },
        setsUnavailable: {
          id: "classroom.connected.setsUnavailable",
          defaultMessage: "Content sets aren\u2019t available for this offering yet",
        },
        setsDenied: {
          id: "classroom.connected.setsDenied",
          defaultMessage: "Only a current instructor or confirmed owner can manage this offering\u2019s content",
        },
        setsLoading: { id: "classroom.connected.setsLoading", defaultMessage: "Loading content sets\u2026" },
        set: { id: "classroom.connected.set", defaultMessage: "Content set" },
        setNumber: { id: "classroom.connected.setOrdinal", defaultMessage: "Content set {number, number}" },
        createSet: { id: "classroom.connected.createSet", defaultMessage: "Create a content set" },
        noSets: {
          id: "classroom.connected.noSets",
          defaultMessage: "Create a content set to attach Spaces to this offering",
        },
        unavailableSpace: {
          id: "classroom.connected.unavailableSpace",
          defaultMessage: "Unavailable Space {number, number}",
        },
        removeSpace: {
          id: "classroom.connected.removeSpaceForAudience",
          defaultMessage:
            "{audience, select, students {Remove {space} for students} instructors {Remove {space} for instructors} everyone {Remove {space} for everyone} other {Remove {space} for this audience}}",
        },
        attached: { id: "classroom.connected.attached", defaultMessage: "Space attached" },
        retry: { id: "classroom.connected.retry", defaultMessage: "Retry" },
        working: { id: "classroom.connected.working", defaultMessage: "Saving\u2026" },
      }),
      A = (0, S.YK)({
        classes: { id: "classroom.instructor.classes", defaultMessage: "Courses" },
        homeIntro: { id: "classroom.instructor.homeIntro", defaultMessage: "Manage your courses and their offerings." },
        firstTitle: { id: "classroom.instructor.firstTitle", defaultMessage: "Create your first course" },
        firstDetail: {
          id: "classroom.instructor.firstDetail",
          defaultMessage: "Start with a course, then add Spaces to an offering.",
        },
        createClass: { id: "classroom.instructor.createClass", defaultMessage: "Create a course" },
        className: { id: "classroom.instructor.className", defaultMessage: "Course name" },
        create: { id: "classroom.instructor.create", defaultMessage: "Create course" },
        cancel: { id: "classroom.instructor.cancel", defaultMessage: "Cancel" },
        offering: { id: "classroom.instructor.offering", defaultMessage: "Offering" },
        newOffering: { id: "classroom.instructor.newOffering", defaultMessage: "Add an offering" },
        offeringName: { id: "classroom.instructor.offeringName", defaultMessage: "Offering name" },
        saveOffering: { id: "classroom.instructor.saveOffering", defaultMessage: "Create offering" },
        spaces: { id: "classroom.instructor.spaces", defaultMessage: "Spaces" },
        noSpaces: { id: "classroom.instructor.noSpaces", defaultMessage: "No Spaces attached" },
        chooseSpace: { id: "classroom.instructor.chooseSpace", defaultMessage: "Choose a Space" },
        spacesLoading: { id: "classroom.instructor.spacesLoading", defaultMessage: "Loading Spaces\u2026" },
        spacesError: { id: "classroom.instructor.spacesError", defaultMessage: "Couldn\u2019t load Spaces." },
        noAvailable: {
          id: "classroom.instructor.noAvailable",
          defaultMessage: "No Spaces are available in this workspace.",
        },
        audience: { id: "classroom.instructor.audience", defaultMessage: "Audience" },
        attachButton: { id: "classroom.instructor.attachButton", defaultMessage: "Attach Space" },
        remove: { id: "classroom.instructor.remove", defaultMessage: "Remove" },
        duplicate: {
          id: "classroom.instructor.duplicate",
          defaultMessage: "This Space is already attached for that audience.",
        },
        missing: { id: "classroom.instructor.missing", defaultMessage: "This course item isn\u2019t available" },
        offeringCount: {
          id: "classroom.instructor.offeringCount",
          defaultMessage: "{count, plural, one {# offering} other {# offerings}}",
        },
        currentName: { id: "classroom.instructor.currentName", defaultMessage: "Classroom navigation" },
        removedSpace: { id: "classroom.instructor.removedSpace", defaultMessage: "Space removed." },
      }),
      k = "w-full min-h-11 rounded-xl border border-default bg-surface px-3 py-2 text-default"
    function M(e) {
      let s,
        t,
        n,
        o,
        c,
        l,
        i,
        d,
        u,
        h,
        g,
        x = (0, a.c)(23),
        { children: p, name: j, backTo: y } = e,
        b = (0, f.A)()
      return (
        x[0] !== b ? ((s = b.formatMessage(A.currentName)), (x[0] = b), (x[1] = s)) : (s = x[1]),
        x[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(v.N_, {
              className: "inline-flex min-h-11 items-center rounded-sm underline-offset-4 hover:underline",
              to: "/classes",
              children: (0, r.jsx)(m.A, { ...A.classes }),
            })),
            (x[2] = t))
          : (t = x[2]),
        x[3] !== y || x[4] !== j
          ? ((n =
              null != j &&
              null != y &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("span", { "aria-hidden": "true", className: "before:content-['/']" }),
                  (0, r.jsx)(v.N_, {
                    to: y,
                    className:
                      "inline-flex min-h-11 min-w-0 items-center rounded-sm underline-offset-4 hover:underline",
                    children: (0, r.jsx)("bdi", { className: "wrap-anywhere", children: j }),
                  }),
                ],
              })),
            (x[3] = y),
            (x[4] = j),
            (x[5] = n))
          : (n = x[5]),
        x[6] !== s || x[7] !== n
          ? ((o = (0, r.jsxs)("nav", {
              "aria-label": s,
              className: "flex min-h-16 flex-wrap items-center gap-x-3",
              children: [t, n],
            })),
            (x[6] = s),
            (x[7] = n),
            (x[8] = o))
          : (o = x[8]),
        x[9] !== b ? ((c = b.formatMessage(N.savedHere)), (x[9] = b), (x[10] = c)) : (c = x[10]),
        x[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, r.jsx)(m.A, { ...N.instructor })), (x[11] = l))
          : (l = x[11]),
        x[12] !== c
          ? ((i = (0, r.jsx)("span", {
              className: "my-2 rounded-full border border-subtle bg-surface-secondary px-3 py-1 text-sm font-medium",
              title: c,
              children: l,
            })),
            (x[12] = c),
            (x[13] = i))
          : (i = x[13]),
        x[14] !== o || x[15] !== i
          ? ((d = (0, r.jsxs)("header", {
              className:
                "flex shrink-0 flex-wrap items-center justify-between gap-x-3 border-b border-subtle px-5 sm:px-8",
              children: [o, i],
            })),
            (x[14] = o),
            (x[15] = i),
            (x[16] = d))
          : (d = x[16]),
        x[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, r.jsx)("aside", {
              className: "mt-3 border-t border-subtle pt-4 text-sm",
              children: (0, r.jsx)("p", {
                className: "mt-1 max-w-prose",
                children: (0, r.jsx)(m.A, { ...N.savedHere }),
              }),
            })),
            (x[17] = u))
          : (u = x[17]),
        x[18] !== p
          ? ((h = (0, r.jsx)("main", {
              className: "min-h-0 flex-1 overflow-y-auto",
              children: (0, r.jsxs)("div", {
                className: "mx-auto flex w-full max-w-5xl flex-col gap-7 px-5 py-8 sm:px-10 sm:py-12",
                children: [p, u],
              }),
            })),
            (x[18] = p),
            (x[19] = h))
          : (h = x[19]),
        x[20] !== h || x[21] !== d
          ? ((g = (0, r.jsxs)("div", {
              className: "classroom-instructor flex h-full min-h-0 flex-col bg-surface text-default",
              children: [d, h],
            })),
            (x[20] = h),
            (x[21] = d),
            (x[22] = g))
          : (g = x[22]),
        g
      )
    }
    function I(e) {
      let s,
        t,
        n = (0, a.c)(3),
        { children: o } = e,
        c = (0, u.useRef)(null)
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = function (e) {
            null != e && e !== c.current && ((c.current = e), e.focus({ preventScroll: !0 }))
          }),
          (n[0] = s))
        : (s = n[0])
      let l = s
      return (
        n[1] !== o
          ? ((t = (0, r.jsx)("h1", {
              ref: l,
              tabIndex: -1,
              className: "w-fit max-w-full rounded-sm text-3xl font-semibold tracking-tight wrap-anywhere",
              children: o,
            })),
            (n[1] = o),
            (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function C() {
      let e,
        s = (0, a.c)(1)
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("span", {
              className: "flex size-11 shrink-0 items-center justify-center rounded-xl bg-surface-tertiary",
              children: (0, r.jsx)(w.L$D, { "aria-hidden": "true" }),
            })),
            (s[0] = e))
          : (e = s[0]),
        e
      )
    }
    function P(e) {
      let s,
        t,
        n = (0, a.c)(6),
        { to: o, children: c, primary: l } = e,
        i = void 0 !== l && l ? "primary" : "outlineSurface"
      return (
        n[0] !== c
          ? ((s = (0, r.jsx)("span", { className: "min-w-0 wrap-anywhere whitespace-normal", children: c })),
            (n[0] = c),
            (n[1] = s))
          : (s = n[1]),
        n[2] !== i || n[3] !== s || n[4] !== o
          ? ((t = (0, r.jsx)(x.z, {
              to: o,
              size: "pageAction",
              color: i,
              className: "h-auto min-h-11 max-w-full min-w-0 py-2 text-center whitespace-normal browser:h-auto",
              children: s,
            })),
            (n[2] = i),
            (n[3] = s),
            (n[4] = o),
            (n[5] = t))
          : (t = n[5]),
        t
      )
    }
    let q = ["students", "instructors", "everyone"]
    function F(e) {
      let s,
        t,
        o,
        c,
        l,
        i,
        d,
        f,
        j,
        v,
        w,
        S,
        M,
        I = (0, a.c)(56),
        { identity: C, offeringId: P, Source: q } = e
      I[0] !== C.accountId || I[1] !== P
        ? ((s = { workspace_id: C.accountId, offering_id: P }), (I[0] = C.accountId), (I[1] = P), (I[2] = s))
        : (s = I[2])
      let F = s
      I[3] !== C.accountId ? ((t = { account_id: C.accountId }), (I[3] = C.accountId), (I[4] = t)) : (t = I[4])
      let U = t,
        O = (0, n.Ul)(h.EE)
      I[5] !== C || I[6] !== P || I[7] !== O
        ? ((o = { identity: C, offeringId: P, generation: O }), (I[5] = C), (I[6] = P), (I[7] = O), (I[8] = o))
        : (o = I[8])
      let L = (0, n._U)(_, o),
        B = L.data?.pages.flatMap(R) ?? [],
        D = L.data?.pages[0]?.workspace_generation,
        T = (0, u.useRef)(null),
        [K, z] = (0, u.useState)(null),
        H = B.find((e) => e.id === K) ?? B[0],
        [Y, W] = (0, u.useState)(!1),
        Z = (0, u.useRef)(!1),
        [Q, V] = (0, u.useState)(null),
        [G, X] = (0, u.useState)(null),
        J = (0, u.useRef)(null)
      I[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = function (e) {
            return (
              J.current?.signature !== e && (J.current = { signature: e, key: crypto.randomUUID() }),
              J.current.key
            )
          }),
          (I[9] = c))
        : (c = I[9])
      let ee = c
      I[10] !== L
        ? ((l = async function (e) {
            Z.current ||
              ((Z.current = !0),
              W(!0),
              X(null),
              V(null),
              await Promise.resolve()
                .then(e)
                .catch(async (e) => {
                  ;(X(e), e instanceof p.FetchError && 409 === e.status && (await L.refetch()))
                })
                .finally(() => {
                  ;((Z.current = !1), W(!1))
                }))
          }),
          (I[10] = L),
          (I[11] = l))
        : (l = I[11])
      let es = l,
        et = N.saveError
      if (
        (G instanceof p.FetchError && 409 === G.status && (et = N.stale),
        G instanceof p.FetchError && 403 === G.status && (et = N.setsDenied),
        Y ? (i = N.working) : "attached" === Q ? (i = N.attached) : "removedSpace" === Q && (i = A.removedSpace),
        L.isPending)
      ) {
        let e
        ;(I[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("p", { role: "status", children: (0, r.jsx)(m.A, { ...N.setsLoading }) })), (I[12] = e))
          : (e = I[12]),
          (d = e))
      } else if (L.isError || null == D || L.data?.pages.some((e) => e.workspace_generation !== D)) {
        let e,
          s,
          t,
          a,
          n,
          o = L.error instanceof p.FetchError && 403 === L.error.status ? N.setsDenied : N.setsUnavailable
        ;(I[13] !== o
          ? ((e = (0, r.jsx)("p", { children: (0, r.jsx)(m.A, { ...o }) })), (I[13] = o), (I[14] = e))
          : (e = I[14]),
          I[15] !== L ? ((s = () => void L.refetch()), (I[15] = L), (I[16] = s)) : (s = I[16]),
          I[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, r.jsx)(m.A, { ...N.retry })), (I[17] = t))
            : (t = I[17]),
          I[18] !== s
            ? ((a = (0, r.jsx)(x.$, {
                type: "button",
                className: "mt-2 min-h-11",
                color: "outlineSurface",
                onClick: s,
                children: t,
              })),
              (I[18] = s),
              (I[19] = a))
            : (a = I[19]),
          I[20] !== a || I[21] !== e
            ? ((n = (0, r.jsxs)("div", { role: "alert", children: [e, a] })), (I[20] = a), (I[21] = e), (I[22] = n))
            : (n = I[22]),
          (d = n))
      } else if (null == H) {
        let e, s, t, a
        ;(I[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("p", { children: (0, r.jsx)(m.A, { ...N.noSets }) })), (I[23] = e))
          : (e = I[23]),
          I[24] !== es || I[25] !== U || I[26] !== D || I[27] !== C || I[28] !== L || I[29] !== F
            ? ((s = () =>
                void es(async () => {
                  ;(z(
                    (
                      await g.Request.safeRequest("post", b, {
                        parameters: { path: F, query: U },
                        requestBody: { expected_revision: 0, workspace_generation: D, operation_id: ee("create") },
                        ...y(C),
                      })
                    ).content_set.content_set_id,
                  ),
                    await L.refetch(),
                    T.current?.focus())
                })),
              (I[24] = es),
              (I[25] = U),
              (I[26] = D),
              (I[27] = C),
              (I[28] = L),
              (I[29] = F),
              (I[30] = s))
            : (s = I[30]),
          I[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, r.jsx)(m.A, { ...N.createSet })), (I[31] = t))
            : (t = I[31]),
          I[32] !== s || I[33] !== Y
            ? ((a = (0, r.jsxs)(r.Fragment, {
                children: [
                  e,
                  (0, r.jsx)("div", {
                    children: (0, r.jsx)(x.$, {
                      type: "button",
                      color: "outlineSurface",
                      className: "min-h-11",
                      disabled: Y,
                      onClick: s,
                      children: t,
                    }),
                  }),
                ],
              })),
              (I[32] = s),
              (I[33] = Y),
              (I[34] = a))
            : (a = I[34]),
          (d = a))
      } else {
        let e,
          s,
          t =
            B.length > 1 &&
            (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)("label", {
                  htmlFor: "connected-set",
                  className: "mb-2 block",
                  children: (0, r.jsx)(m.A, { ...N.set }),
                }),
                (0, r.jsx)("select", {
                  id: "connected-set",
                  value: H.id,
                  className: k,
                  onChange: (e) => {
                    ;(z(e.target.value), V(null), X(null))
                  },
                  children: B.map($),
                }),
              ],
            }),
          a = (e) =>
            (0, r.jsx)(
              E,
              {
                directory: e,
                working: Y,
                entries: H.spaces,
                attach: async (e, s, t) => {
                  ;(await g.Request.safeRequest(
                    "post",
                    "/classroom/workspaces/{workspace_id}/instructor/offerings/{offering_id}/content-sets/{set_id}/spaces",
                    {
                      parameters: { path: { ...F, set_id: H.id }, query: U },
                      requestBody: {
                        space_id: e,
                        root_page_id: s,
                        audience: t,
                        expected_revision: H.revision,
                        workspace_generation: D,
                        operation_id: ee(`attach:${H.id}:${H.revision}:${e}:${t}`),
                      },
                      ...y(C),
                    },
                  ),
                    await L.refetch(),
                    V("attached"),
                    T.current?.focus())
                },
                remove: async (e, s) => {
                  ;(await g.Request.safeRequest(
                    "post",
                    "/classroom/workspaces/{workspace_id}/instructor/offerings/{offering_id}/content-sets/{set_id}/spaces/{entry_id}/remove",
                    {
                      parameters: { query: U, path: { ...F, set_id: H.id, entry_id: e } },
                      requestBody: {
                        root_page_id: s,
                        expected_revision: H.revision,
                        workspace_generation: D,
                        operation_id: ee(`remove:${e}:${H.revision}`),
                      },
                      ...y(C),
                    },
                  ),
                    await L.refetch(),
                    V("removedSpace"),
                    T.current?.focus())
                },
                act: es,
              },
              `${H.id}:${H.revision}`,
            )
        ;(I[35] !== q || I[36] !== a
          ? ((e = (0, r.jsx)(q, { children: a })), (I[35] = q), (I[36] = a), (I[37] = e))
          : (e = I[37]),
          I[38] !== t || I[39] !== e
            ? ((s = (0, r.jsxs)(r.Fragment, { children: [t, e] })), (I[38] = t), (I[39] = e), (I[40] = s))
            : (s = I[40]),
          (d = s))
      }
      return (
        I[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, r.jsx)("h2", {
              ref: T,
              tabIndex: -1,
              id: "connected-spaces",
              className: "text-xl font-semibold",
              children: (0, r.jsx)(m.A, { ...A.spaces }),
            })),
            (I[41] = f))
          : (f = I[41]),
        I[42] !== L
          ? ((j =
              L.hasNextPage &&
              (0, r.jsx)("div", {
                children: (0, r.jsx)(x.$, {
                  type: "button",
                  className: "min-h-11",
                  color: "outlineSurface",
                  disabled: L.isFetchingNextPage,
                  onClick: () => void L.fetchNextPage(),
                  children: (0, r.jsx)(m.A, { ...N.more }),
                }),
              })),
            (I[42] = L),
            (I[43] = j))
          : (j = I[43]),
        I[44] !== G || I[45] !== et
          ? ((v = null != G && (0, r.jsx)("p", { role: "alert", children: (0, r.jsx)(m.A, { ...et }) })),
            (I[44] = G),
            (I[45] = et),
            (I[46] = v))
          : (v = I[46]),
        I[47] !== i ? ((w = null != i && (0, r.jsx)(m.A, { ...i })), (I[47] = i), (I[48] = w)) : (w = I[48]),
        I[49] !== w
          ? ((S = (0, r.jsx)("p", { role: "status", className: "empty:hidden", children: w })),
            (I[49] = w),
            (I[50] = S))
          : (S = I[50]),
        I[51] !== d || I[52] !== S || I[53] !== j || I[54] !== v
          ? ((M = (0, r.jsxs)("section", {
              "aria-labelledby": "connected-spaces",
              className: "flex flex-col gap-4",
              children: [f, d, j, v, S],
            })),
            (I[51] = d),
            (I[52] = S),
            (I[53] = j),
            (I[54] = v),
            (I[55] = M))
          : (M = I[55]),
        M
      )
    }
    function $(e, s) {
      return (0, r.jsx)(
        "option",
        { value: e.id, children: (0, r.jsx)(m.A, { ...N.setNumber, values: { number: s + 1 } }) },
        e.id,
      )
    }
    function R(e) {
      return e.sets
    }
    function E(e) {
      let s,
        t,
        n,
        o = (0, a.c)(57),
        { directory: c, working: l, entries: i, attach: d, remove: h, act: g } = e,
        p = (0, f.A)(),
        [j, y] = (0, u.useState)(""),
        [b, _] = (0, u.useState)("students")
      if (o[0] !== c.spaces || o[1] !== j) {
        let e
        ;(o[3] !== j ? ((e = (e) => e.id === j), (o[3] = j), (o[4] = e)) : (e = o[4]),
          (s = c.spaces.find(e)),
          (o[0] = c.spaces),
          (o[1] = j),
          (o[2] = s))
      } else s = o[2]
      let v = s
      if (o[5] !== b || o[6] !== i || o[7] !== v?.rootPageId) {
        let e
        ;(o[9] !== b || o[10] !== v?.rootPageId
          ? ((e = (e) => e.root_page_id === v?.rootPageId && e.audience === b),
            (o[9] = b),
            (o[10] = v?.rootPageId),
            (o[11] = e))
          : (e = o[11]),
          (t = i.some(e)),
          (o[5] = b),
          (o[6] = i),
          (o[7] = v?.rootPageId),
          (o[8] = t))
      } else t = o[8]
      let w = t
      if (
        o[12] !== g ||
        o[13] !== d ||
        o[14] !== b ||
        o[15] !== c.retry ||
        o[16] !== c.spaces ||
        o[17] !== c.status ||
        o[18] !== w ||
        o[19] !== i ||
        o[20] !== p ||
        o[21] !== h ||
        o[22] !== v ||
        o[23] !== j ||
        o[24] !== l
      ) {
        let e,
          s = c.spaces.filter(O)
        if ("loading" === c.status) {
          let s
          ;(o[26] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, r.jsx)("p", { role: "status", children: (0, r.jsx)(m.A, { ...A.spacesLoading }) })),
              (o[26] = s))
            : (s = o[26]),
            (e = s))
        } else if ("error" === c.status) {
          let s, t, a
          ;(o[27] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, r.jsx)(m.A, { ...A.spacesError })), (o[27] = s))
            : (s = o[27]),
            o[28] !== c.retry
              ? ((t =
                  null != c.retry &&
                  (0, r.jsx)(x.$, {
                    type: "button",
                    className: "min-h-11",
                    color: "outlineSurface",
                    onClick: c.retry,
                    children: (0, r.jsx)(m.A, { ...N.retry }),
                  })),
                (o[28] = c.retry),
                (o[29] = t))
              : (t = o[29]),
            o[30] !== t
              ? ((a = (0, r.jsxs)("div", { role: "alert", children: [s, t] })), (o[30] = t), (o[31] = a))
              : (a = o[31]),
            (e = a))
        } else if (0 === s.length) {
          let s
          ;(o[32] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, r.jsx)("p", { children: (0, r.jsx)(m.A, { ...A.noAvailable }) })), (o[32] = s))
            : (s = o[32]),
            (e = s))
        } else {
          let t, a, n, c, i, u, f, h, S, M, I
          ;(o[33] !== g || o[34] !== d || o[35] !== b || o[36] !== w || o[37] !== v || o[38] !== l
            ? ((t = (e) => {
                if ((e.preventDefault(), v?.id == null || l || w)) return
                let s = v.id
                g(() => d(s, v.rootPageId, b))
              }),
              (o[33] = g),
              (o[34] = d),
              (o[35] = b),
              (o[36] = w),
              (o[37] = v),
              (o[38] = l),
              (o[39] = t))
            : (t = o[39]),
            o[40] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, r.jsx)("label", {
                  htmlFor: "connected-space",
                  children: (0, r.jsx)(m.A, { ...A.chooseSpace }),
                })),
                (o[40] = a))
              : (a = o[40]),
            o[41] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (e) => y(e.target.value)), (o[41] = n))
              : (n = o[41]),
            o[42] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = (0, r.jsx)("option", { value: "", children: (0, r.jsx)(m.A, { ...A.chooseSpace }) })),
                (o[42] = c))
              : (c = o[42]),
            o[43] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, r.jsx)("label", {
                  htmlFor: "connected-audience",
                  children: (0, r.jsx)(m.A, { ...A.audience }),
                })),
                (o[43] = i))
              : (i = o[43]),
            o[44] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (e) => {
                  let s = q.find((s) => s === e.target.value)
                  null != s && _(s)
                }),
                (o[44] = u))
              : (u = o[44]),
            o[45] !== p
              ? ((f = q.map((e) =>
                  (0, r.jsx)("option", { value: e, children: p.formatMessage(N.audienceLabel, { audience: e }) }, e),
                )),
                (o[45] = p),
                (o[46] = f))
              : (f = o[46]),
            o[47] !== b || o[48] !== f || o[49] !== l
              ? ((h = (0, r.jsx)("select", {
                  id: "connected-audience",
                  className: k,
                  disabled: l,
                  value: b,
                  onChange: u,
                  children: f,
                })),
                (o[47] = b),
                (o[48] = f),
                (o[49] = l),
                (o[50] = h))
              : (h = o[50]),
            o[51] !== w
              ? ((S = w && (0, r.jsx)("p", { role: "status", children: (0, r.jsx)(m.A, { ...A.duplicate }) })),
                (o[51] = w),
                (o[52] = S))
              : (S = o[52]))
          let C = null == v || w,
            P = l || void 0
          ;(o[53] === Symbol.for("react.memo_cache_sentinel")
            ? ((M = (0, r.jsx)(m.A, { ...A.attachButton })), (o[53] = M))
            : (M = o[53]),
            o[54] !== C || o[55] !== P
              ? ((I = (0, r.jsx)("div", {
                  children: (0, r.jsx)(x.$, {
                    type: "submit",
                    className: "min-h-11",
                    color: "primary",
                    disabled: C,
                    "aria-disabled": P,
                    children: M,
                  }),
                })),
                (o[54] = C),
                (o[55] = P),
                (o[56] = I))
              : (I = o[56]),
            (e = (0, r.jsxs)("form", {
              "aria-busy": l,
              className: "flex max-w-xl flex-col gap-3",
              onSubmit: t,
              children: [
                a,
                (0, r.jsxs)("select", {
                  id: "connected-space",
                  className: k,
                  required: !0,
                  disabled: l,
                  value: j,
                  onChange: n,
                  children: [c, s.map(U)],
                }),
                i,
                h,
                S,
                I,
              ],
            })))
        }
        ;((n = (0, r.jsxs)(r.Fragment, {
          children: [
            "loading" !== c.status &&
              (0 === i.length
                ? "ready" === c.status && (0, r.jsx)("p", { children: (0, r.jsx)(m.A, { ...A.noSpaces }) })
                : (0, r.jsx)("ul", {
                    className: "grid gap-2",
                    children: i.map((e, t) => {
                      let a =
                        s.find((s) => s.rootPageId === e.root_page_id)?.title ??
                        p.formatMessage(N.unavailableSpace, { number: t + 1 })
                      return (0, r.jsxs)(
                        "li",
                        {
                          className: "flex flex-wrap items-center gap-3 rounded-2xl border border-subtle px-4 py-2",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "min-w-0 flex-1",
                              children: [
                                (0, r.jsx)("bdi", { className: "block font-medium wrap-anywhere", children: a }),
                                (0, r.jsx)(m.A, { ...N.audienceLabel, values: { audience: e.audience } }),
                              ],
                            }),
                            (0, r.jsx)(x.$, {
                              type: "button",
                              color: "outlineSurface",
                              className: "min-h-11",
                              disabled: l,
                              "aria-label": p.formatMessage(N.removeSpace, { space: a, audience: e.audience }),
                              onClick: () => void g(() => h(e.id, e.root_page_id)),
                              children: (0, r.jsx)(m.A, { ...A.remove }),
                            }),
                          ],
                        },
                        e.id,
                      )
                    }),
                  })),
            e,
          ],
        })),
          (o[12] = g),
          (o[13] = d),
          (o[14] = b),
          (o[15] = c.retry),
          (o[16] = c.spaces),
          (o[17] = c.status),
          (o[18] = w),
          (o[19] = i),
          (o[20] = p),
          (o[21] = h),
          (o[22] = v),
          (o[23] = j),
          (o[24] = l),
          (o[25] = n))
      } else n = o[25]
      return n
    }
    function U(e) {
      return (0, r.jsx)("option", { value: e.id, dir: "auto", children: e.title }, e.id)
    }
    function O(e) {
      return null != e.id
    }
    var L = t("i5ac"),
      B = t.n(L)
    let D = (0, n.N3)(j.u, ({ identity: e, generation: s }) => ({
      queryKey: ["classroom-instructor-catalog", e.accountId, e.userId, s],
      initialPageParam: null,
      getNextPageParam: (e) => e.next_cursor ?? void 0,
      queryFn: async ({ pageParam: s, signal: r }) => {
        let { Request: a } = await Promise.resolve().then(t.bind(t, "Kwur"))
        return a.safeRequest("get", "/classroom/workspaces/{workspace_id}/instructor/catalog", {
          parameters: { path: { workspace_id: e.accountId }, query: { account_id: e.accountId, cursor: s ?? void 0 } },
          ...y(e),
          signal: r,
        })
      },
      staleTime: 0,
      gcTime: 0,
      retry: !1,
    }))
    function T(e, { courseId: s, offeringId: t }) {
      let r = B()(
          e.flatMap((e) => e.courses),
          (e) => e.id,
        ),
        a = e.flatMap((e) => e.offerings),
        n = r.find((e) => e.id === s),
        o = n ? a.filter((e) => e.course_id === n.id) : [],
        c = t ? o.find((e) => e.id === t) : (o.find((e) => e.first) ?? (e.at(-1)?.next_cursor ? void 0 : o[0]))
      return { courses: r, offerings: a, course: n, selected: o, offering: c }
    }
    let K = (0, n.vU)(j.u, ({ identity: e, generation: s, courseId: t, offeringId: r }, { get: a, scope: n }) => {
      let o = { identity: e, generation: s },
        c = a(D, o),
        l = { courseId: t, offeringId: r },
        i = (e) => (null != t && null == T(e, l).offering ? e.at(-1)?.next_cursor : null)
      return {
        queryKey: ["classroom-instructor-catalog-route", e.accountId, e.userId, s, t, r],
        enabled: !c.isError && null != i(c.data?.pages ?? []),
        queryFn: async ({ signal: e }) => {
          let s = n.get(D, o),
            t = new Set(),
            r = i(s.data?.pages ?? [])
          for (; null != r;) {
            if ((e.throwIfAborted(), t.has(r))) throw Error("Instructor catalog returned a repeated cursor")
            ;(t.add(r),
              (s = await s.fetchNextPage({ cancelRefetch: !1, throwOnError: !0 })),
              (r = i(s.data?.pages ?? [])))
          }
          return !0
        },
        retry: !1,
        gcTime: 0,
      }
    })
    function z(e) {
      let s,
        t,
        n,
        o,
        c,
        l,
        i = (0, a.c)(11),
        { courses: d } = e
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, r.jsx)(I, { children: (0, r.jsx)(m.A, { ...A.classes }) })), (i[0] = s))
          : (s = i[0]),
        i[1] !== d.length
          ? ((t =
              d.length > 0 &&
              (0, r.jsx)(P, { to: "/classes/new", primary: !0, children: (0, r.jsx)(m.A, { ...A.createClass }) })),
            (i[1] = d.length),
            (i[2] = t))
          : (t = i[2]),
        i[3] !== t
          ? ((n = (0, r.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-4",
              children: [s, t],
            })),
            (i[3] = t),
            (i[4] = n))
          : (n = i[4]),
        i[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, r.jsx)("p", { className: "max-w-prose", children: (0, r.jsx)(m.A, { ...A.homeIntro }) })),
            (i[5] = o))
          : (o = i[5]),
        i[6] !== d
          ? ((c =
              0 === d.length
                ? (0, r.jsxs)("section", {
                    className:
                      "flex flex-col items-start gap-4 rounded-2xl border border-subtle bg-surface-secondary p-6 sm:p-9",
                    children: [
                      (0, r.jsx)(C, {}),
                      (0, r.jsx)("h2", {
                        className: "text-xl font-semibold",
                        children: (0, r.jsx)(m.A, { ...A.firstTitle }),
                      }),
                      (0, r.jsx)("p", { className: "max-w-prose", children: (0, r.jsx)(m.A, { ...A.firstDetail }) }),
                      (0, r.jsx)(P, {
                        to: "/classes/new",
                        primary: !0,
                        children: (0, r.jsx)(m.A, { ...A.createClass }),
                      }),
                    ],
                  })
                : (0, r.jsx)("ul", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: d.map(H) })),
            (i[6] = d),
            (i[7] = c))
          : (c = i[7]),
        i[8] !== n || i[9] !== c
          ? ((l = (0, r.jsxs)(r.Fragment, { children: [n, o, c] })), (i[8] = n), (i[9] = c), (i[10] = l))
          : (l = i[10]),
        l
      )
    }
    function H(e) {
      return (0, r.jsx)(
        "li",
        {
          children: (0, r.jsxs)(v.N_, {
            to: `/classes/${e.id}`,
            className:
              "flex min-w-0 flex-col items-start gap-2 rounded-2xl border border-subtle bg-surface-secondary p-5 text-start text-default hover:bg-surface-tertiary h-full min-h-44",
            children: [
              (0, r.jsx)(C, {}),
              (0, r.jsx)("span", {
                className: "mt-4 text-lg font-semibold wrap-anywhere",
                children: (0, r.jsx)("bdi", { children: e.title }),
              }),
              (0, r.jsx)("span", {
                className: "mt-auto flex flex-wrap gap-x-3 text-sm",
                children: (0, r.jsx)(m.A, { ...A.offeringCount, values: { count: e.offeringCount } }),
              }),
            ],
          }),
        },
        e.id,
      )
    }
    function Y(e) {
      return e instanceof p.FetchError ? e.status : void 0
    }
    function W(e) {
      let s,
        t,
        n = (0, a.c)(3),
        { onClick: o } = e
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, r.jsx)(m.A, { ...N.retry })), (n[0] = s))
          : (s = n[0]),
        n[1] !== o
          ? ((t = (0, r.jsx)(x.$, {
              type: "button",
              color: "outlineSurface",
              className: "min-h-11",
              onClick: o,
              children: s,
            })),
            (n[1] = o),
            (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function Z(e) {
      let s,
        t,
        o,
        c,
        l,
        i = (0, a.c)(50),
        { accountId: d, userId: u, Source: f } = e
      i[0] !== d || i[1] !== u ? ((s = { accountId: d, userId: u }), (i[0] = d), (i[1] = u), (i[2] = s)) : (s = i[2])
      let g = s,
        { pathname: p } = (0, v.zy)(),
        j = (0, v.Zp)(),
        y = (0, n.Ul)(h.EE)
      i[3] !== g || i[4] !== y ? ((t = { identity: g, generation: y }), (i[3] = g), (i[4] = y), (i[5] = t)) : (t = i[5])
      let b = t,
        _ = (0, n._U)(D, b),
        w = _.data?.pages ?? [],
        S = null == (0, v.B6)("/classes/instructor", p) ? (0, v.B6)("/classes/:courseId/*", p) : null,
        q = (0, v.B6)("/classes/:courseId/offerings/:offeringId/*", p),
        $ = { courseId: "/classes/new" === p ? void 0 : S?.params.courseId, offeringId: q?.params.offeringId },
        { courses: R, offerings: E, course: U, selected: O, offering: L } = T(w, $),
        { error: B, isError: H, refetch: Z } = (0, n._U)(K, { ...b, ...$ }),
        G = null != $.courseId && _.hasNextPage && null == L,
        X = null == U ? "/classes/instructor" : `/classes/${U.id}`,
        J = null == L ? X : `${X}/offerings/${L.id}`,
        ee = w[0]?.workspace_generation
      i[6] !== _
        ? ((o =
            _.hasNextPage &&
            (0, r.jsx)(x.$, {
              type: "button",
              color: "outlineSurface",
              className: "min-h-11",
              disabled: _.isFetchingNextPage,
              onClick: () => void _.fetchNextPage(),
              children: (0, r.jsx)(m.A, { ...N.more }),
            })),
          (i[6] = _),
          (i[7] = o))
        : (o = i[7])
      let es = o
      if (_.isPending || (!_.isError && !H && G)) {
        let e, s
        ;(i[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(I, { children: (0, r.jsx)(m.A, { ...A.classes }) })), (i[8] = e))
          : (e = i[8]),
          i[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, r.jsxs)(r.Fragment, {
                children: [e, (0, r.jsx)("p", { role: "status", children: (0, r.jsx)(m.A, { ...N.loading }) })],
              })),
              (i[9] = s))
            : (s = i[9]),
          (c = s))
      } else if (_.isError || H || null == ee || w.some((e) => e.workspace_generation !== ee)) {
        let e, s, t, a
        i[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(I, { children: (0, r.jsx)(m.A, { ...A.classes }) })), (i[10] = e))
          : (e = i[10])
        let n = 403 === Y(B ?? _.error) ? N.denied : N.unavailable
        ;(i[11] !== n
          ? ((s = (0, r.jsx)("p", { role: "alert", children: (0, r.jsx)(m.A, { ...n }) })), (i[11] = n), (i[12] = s))
          : (s = i[12]),
          i[13] !== _ || i[14] !== Z || i[15] !== H
            ? ((t = (0, r.jsx)("div", { children: (0, r.jsx)(W, { onClick: () => void (H ? Z() : _.refetch()) }) })),
              (i[13] = _),
              (i[14] = Z),
              (i[15] = H),
              (i[16] = t))
            : (t = i[16]),
          i[17] !== s || i[18] !== t
            ? ((a = (0, r.jsxs)(r.Fragment, { children: [e, s, t] })), (i[17] = s), (i[18] = t), (i[19] = a))
            : (a = i[19]),
          (c = a))
      } else if ("/classes/new" === p) {
        let e
        ;(i[20] !== _ ? ((e = () => _.refetch()), (i[20] = _), (i[21] = e)) : (e = i[21]),
          (c = (0, r.jsx)(V, { identity: g, generation: ee, refresh: e })))
      } else if (null == S) {
        let e,
          s =
            R.length > 0 || !_.hasNextPage
              ? (0, r.jsx)(z, {
                  courses: R.map((e) => ({
                    id: e.id,
                    title: e.title,
                    offeringCount: E.filter((s) => s.course_id === e.id).length,
                  })),
                })
              : (0, r.jsx)(I, { children: (0, r.jsx)(m.A, { ...A.classes }) })
        ;(i[22] !== es || i[23] !== s
          ? ((e = (0, r.jsxs)(r.Fragment, { children: [s, es] })), (i[22] = es), (i[23] = s), (i[24] = e))
          : (e = i[24]),
          (c = e))
      } else if (null == U || (null != q && null == L)) {
        let e, s, t, a
        ;(i[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(I, { children: (0, r.jsx)(m.A, { ...A.classes }) })), (i[25] = e))
          : (e = i[25]),
          i[26] !== es
            ? ((s = es || (0, r.jsx)("p", { role: "status", children: (0, r.jsx)(m.A, { ...A.missing }) })),
              (i[26] = es),
              (i[27] = s))
            : (s = i[27]),
          i[28] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, r.jsx)(P, { to: "/classes/instructor", children: (0, r.jsx)(m.A, { ...A.classes }) })),
              (i[28] = t))
            : (t = i[28]),
          i[29] !== s
            ? ((a = (0, r.jsxs)(r.Fragment, { children: [e, s, t] })), (i[29] = s), (i[30] = a))
            : (a = i[30]),
          (c = a))
      } else if (q?.params["*"] === "new-offering") {
        let e
        ;(i[31] !== _ ? ((e = () => _.refetch()), (i[31] = _), (i[32] = e)) : (e = i[32]),
          (c = (0, r.jsx)(V, { identity: g, generation: ee, course: U, refresh: e })))
      } else if (null == L)
        c = (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(I, { children: (0, r.jsx)("bdi", { children: U.title }) }),
            _.hasNextPage
              ? es
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("p", { role: "status", children: (0, r.jsx)(m.A, { ...N.setup }) }),
                    (0, r.jsx)(V, { identity: g, generation: ee, course: U, first: !0, refresh: () => _.refetch() }),
                  ],
                }),
          ],
        })
      else {
        let e, s, t, a, n, o
        ;(i[33] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, r.jsx)(C, {})), (i[33] = e)) : (e = i[33]),
          i[34] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, r.jsx)("label", {
                htmlFor: "offering-switch",
                className: "mb-1 block text-sm font-medium",
                children: (0, r.jsx)(m.A, { ...A.offering }),
              })),
              (i[34] = s))
            : (s = i[34]),
          i[35] !== X || i[36] !== j
            ? ((t = (e) => void j(`${X}/offerings/${e.target.value}`)), (i[35] = X), (i[36] = j), (i[37] = t))
            : (t = i[37]))
        let l = `${J}/new-offering`
        ;(i[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsx)(m.A, { ...A.newOffering })), (i[38] = a))
          : (a = i[38]),
          i[39] !== l ? ((n = (0, r.jsx)(P, { to: l, children: a })), (i[39] = l), (i[40] = n)) : (n = i[40]),
          i[41] !== f || i[42] !== g || i[43] !== L
            ? ((o = (0, r.jsx)(F, { identity: g, offeringId: L.id, Source: f }, L.id)),
              (i[41] = f),
              (i[42] = g),
              (i[43] = L),
              (i[44] = o))
            : (o = i[44]),
          (c = (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)("div", {
                className: "flex items-start gap-4",
                children: [e, (0, r.jsx)(I, { children: (0, r.jsx)("bdi", { children: U.title }) })],
              }),
              (0, r.jsxs)("div", {
                className: "flex flex-wrap items-end gap-3 border-b border-subtle pb-6",
                children: [
                  (0, r.jsxs)("div", {
                    children: [
                      s,
                      (0, r.jsx)("select", {
                        id: "offering-switch",
                        className: k,
                        value: L.id,
                        onChange: t,
                        children: O.map(Q),
                      }),
                    ],
                  }),
                  n,
                  es,
                ],
              }),
              "pending_native_owner" === L.governance &&
                (0, r.jsx)("p", { role: "status", children: (0, r.jsx)(m.A, { ...N.ownerPending }) }),
              o,
            ],
          })))
      }
      let et = U?.title
      return (
        i[45] !== c || i[46] !== X || i[47] !== p || i[48] !== et
          ? ((l = (0, r.jsx)(M, { name: et, backTo: X, children: c }, p)),
            (i[45] = c),
            (i[46] = X),
            (i[47] = p),
            (i[48] = et),
            (i[49] = l))
          : (l = i[49]),
        l
      )
    }
    function Q(e) {
      return (0, r.jsx)("option", { value: e.id, dir: "auto", children: e.title }, e.id)
    }
    function V(e) {
      let s,
        t,
        n,
        o,
        c,
        l,
        i,
        d,
        f,
        h,
        p,
        j,
        b,
        _ = (0, a.c)(47),
        { identity: w, generation: S, course: M, first: C, refresh: q } = e,
        F = void 0 !== C && C,
        $ = (0, v.Zp)(),
        [R, E] = (0, u.useState)(""),
        U = (0, u.useRef)(null),
        [O, L] = (0, u.useState)(!1),
        B = (0, u.useRef)(!1),
        [D, T] = (0, u.useState)(null)
      _[0] !== M || _[1] !== F || _[2] !== S || _[3] !== w || _[4] !== $ || _[5] !== q || _[6] !== R
        ? ((s = async function (e) {
            let s = F && null != M ? M.title : R.trim()
            if (!s || B.current) return
            ;((B.current = !0),
              L(!0),
              T(null),
              U.current?.title !== s && (U.current = { title: s, key: crypto.randomUUID() }))
            let t = { title: s, workspace_generation: S, operation_id: U.current.key }
            try {
              let s = await (async function (e, s, t, r) {
                  let a =
                      s ??
                      (await g.Request.safeRequest("post", "/classroom/workspaces/{workspace_id}/instructor/courses", {
                        parameters: { path: { workspace_id: e.accountId }, query: { account_id: e.accountId } },
                        requestBody: r,
                        ...y(e),
                      })),
                    n = `/classes/${a.id}`
                  try {
                    let o = await g.Request.safeRequest("post", "/classroom/workspaces/{workspace_id}/offerings", {
                      parameters: { query: { account_id: e.accountId }, path: { workspace_id: e.accountId } },
                      requestBody: { ...r, course_receipt: a.creation_receipt, first: t || null == s },
                      ...y(e),
                    })
                    n += `/offerings/${o.id}`
                  } catch (e) {
                    if (null != s) throw e
                  }
                  return n
                })(w, M, F, t),
                r = e.isConnected ? $(s) : void 0
              await Promise.all([q(), r])
            } catch (s) {
              e.isConnected && T(s)
            }
            ;((B.current = !1), e.isConnected && L(!1))
          }),
          (_[0] = M),
          (_[1] = F),
          (_[2] = S),
          (_[3] = w),
          (_[4] = $),
          (_[5] = q),
          (_[6] = R),
          (_[7] = s))
        : (s = _[7])
      let K = s,
        z = null == M ? A.create : A.saveOffering
      ;(F && (z = N.first), O && (z = N.working))
      let H = N.saveError
      return (
        409 === Y(D) && (H = N.stale),
        403 === Y(D) && (H = N.denied),
        _[8] !== M || _[9] !== F
          ? ((t =
              !F && (0, r.jsx)(I, { children: (0, r.jsx)(m.A, { ...(null == M ? A.createClass : A.newOffering) }) })),
            (_[8] = M),
            (_[9] = F),
            (_[10] = t))
          : (t = _[10]),
        _[11] !== F
          ? ((n = !F && (0, r.jsx)("p", { children: (0, r.jsx)(m.A, { ...N.courseCreate }) })),
            (_[11] = F),
            (_[12] = n))
          : (n = _[12]),
        _[13] !== K
          ? ((o = (e) => {
              ;(e.preventDefault(), K(e.currentTarget))
            }),
            (_[13] = K),
            (_[14] = o))
          : (o = _[14]),
        _[15] !== M || _[16] !== F || _[17] !== R
          ? ((c =
              !F &&
              (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("label", {
                    className: "mb-2 block font-medium",
                    htmlFor: "instructor-name",
                    children: (0, r.jsx)(m.A, { ...(null == M ? A.className : A.offeringName) }),
                  }),
                  (0, r.jsx)("input", {
                    id: "instructor-name",
                    name: "name",
                    required: !0,
                    maxLength: 128,
                    dir: "auto",
                    className: k,
                    value: R,
                    onChange: (e) => E(e.target.value),
                  }),
                ],
              })),
            (_[15] = M),
            (_[16] = F),
            (_[17] = R),
            (_[18] = c))
          : (c = _[18]),
        _[19] !== D || _[20] !== H
          ? ((l = null != D && (0, r.jsx)("p", { role: "alert", children: (0, r.jsx)(m.A, { ...H }) })),
            (_[19] = D),
            (_[20] = H),
            (_[21] = l))
          : (l = _[21]),
        _[22] !== F || _[23] !== O || _[24] !== R
          ? ((i = O || (!F && !R.trim())), (_[22] = F), (_[23] = O), (_[24] = R), (_[25] = i))
          : (i = _[25]),
        _[26] !== z ? ((d = (0, r.jsx)(m.A, { ...z })), (_[26] = z), (_[27] = d)) : (d = _[27]),
        _[28] !== i || _[29] !== d
          ? ((f = (0, r.jsx)(x.$, {
              type: "submit",
              size: "pageAction",
              color: "primary",
              className: "min-h-11",
              disabled: i,
              children: d,
            })),
            (_[28] = i),
            (_[29] = d),
            (_[30] = f))
          : (f = _[30]),
        _[31] !== M || _[32] !== F
          ? ((h =
              !F &&
              (0, r.jsx)(P, {
                to: null == M ? "/classes/instructor" : `/classes/${M.id}`,
                children: (0, r.jsx)(m.A, { ...A.cancel }),
              })),
            (_[31] = M),
            (_[32] = F),
            (_[33] = h))
          : (h = _[33]),
        _[34] !== f || _[35] !== h
          ? ((p = (0, r.jsxs)("div", { className: "flex flex-wrap gap-3", children: [f, h] })),
            (_[34] = f),
            (_[35] = h),
            (_[36] = p))
          : (p = _[36]),
        _[37] !== O || _[38] !== p || _[39] !== o || _[40] !== c || _[41] !== l
          ? ((j = (0, r.jsxs)("form", {
              className: "flex max-w-xl flex-col gap-4",
              "aria-busy": O,
              onSubmit: o,
              children: [c, l, p],
            })),
            (_[37] = O),
            (_[38] = p),
            (_[39] = o),
            (_[40] = c),
            (_[41] = l),
            (_[42] = j))
          : (j = _[42]),
        _[43] !== j || _[44] !== t || _[45] !== n
          ? ((b = (0, r.jsxs)(r.Fragment, { children: [t, n, j] })), (_[43] = j), (_[44] = t), (_[45] = n), (_[46] = b))
          : (b = _[46]),
        b
      )
    }
    function G(e) {
      let s,
        t = (0, a.c)(3),
        { accountId: n, userId: o } = e
      return (
        t[0] !== n || t[1] !== o
          ? ((s = (0, r.jsx)(Z, { accountId: n, userId: o, Source: J })), (t[0] = n), (t[1] = o), (t[2] = s))
          : (s = t[2]),
        s
      )
    }
    function X(e) {
      let s,
        t = (0, a.c)(3),
        { identity: n, offeringId: o } = e
      return (
        t[0] !== n || t[1] !== o
          ? ((s = (0, r.jsx)(F, { identity: n, offeringId: o, Source: J })), (t[0] = n), (t[1] = o), (t[2] = s))
          : (s = t[2]),
        s
      )
    }
    function J(e) {
      let s,
        t,
        u,
        m,
        f,
        h = (0, a.c)(31),
        { children: g } = e,
        x = (0, n.Ul)(o.chatGptAuthenticatedAccountId$),
        p = (0, n.Ul)(c.DO),
        j = (0, n.Ul)(l.pagesEnabled$),
        y = null != x && x === p && j,
        b = (0, n.Ul)(!!y && i.Sc),
        _ = y && !0 !== b
      h[0] !== _ ? ((s = { enabled: _ }), (h[0] = _), (h[1] = s)) : (s = h[1])
      let { isLoading: v, isError: w, refetch: S } = (0, n.Ul)(i.Zp, s),
        N = y && !0 === b
      h[2] !== N ? ((t = { enabled: N }), (h[2] = N), (h[3] = t)) : (t = h[3])
      let { data: A, isLoading: k, isError: M, refetch: I } = (0, n.Ul)(d.spacesQuery$, t)
      if (y && !0 !== b && w) {
        let e, s
        if (h[4] !== g || h[5] !== S) {
          let s
          ;(h[7] !== S ? ((s = () => void S()), (h[7] = S), (h[8] = s)) : (s = h[8]),
            (e = g({ status: "error", spaces: [], retry: s })),
            (h[4] = g),
            (h[5] = S),
            (h[6] = e))
        } else e = h[6]
        return (h[9] !== e ? ((s = (0, r.jsx)(r.Fragment, { children: e })), (h[9] = e), (h[10] = s)) : (s = h[10]), s)
      }
      if (!N) {
        let e,
          s,
          t = y && v ? "loading" : "ready"
        return (
          h[11] !== g || h[12] !== t
            ? ((e = g({ status: t, spaces: [] })), (h[11] = g), (h[12] = t), (h[13] = e))
            : (e = h[13]),
          h[14] !== e ? ((s = (0, r.jsx)(r.Fragment, { children: e })), (h[14] = e), (h[15] = s)) : (s = h[15]),
          s
        )
      }
      if (M) {
        let e, s
        if (h[16] !== g || h[17] !== I) {
          let s
          ;(h[19] !== I ? ((s = () => void I()), (h[19] = I), (h[20] = s)) : (s = h[20]),
            (e = g({ status: "error", spaces: [], retry: s })),
            (h[16] = g),
            (h[17] = I),
            (h[18] = e))
        } else e = h[18]
        return (
          h[21] !== e ? ((s = (0, r.jsx)(r.Fragment, { children: e })), (h[21] = e), (h[22] = s)) : (s = h[22]),
          s
        )
      }
      let C = k ? "loading" : "ready"
      return (
        h[23] !== A?.items ? ((u = A?.items ?? []), (h[23] = A?.items), (h[24] = u)) : (u = h[24]),
        h[25] !== g || h[26] !== C || h[27] !== u
          ? ((m = g({ status: C, spaces: u.filter(es).map(ee) })), (h[25] = g), (h[26] = C), (h[27] = u), (h[28] = m))
          : (m = h[28]),
        h[29] !== m ? ((f = (0, r.jsx)(r.Fragment, { children: m })), (h[29] = m), (h[30] = f)) : (f = h[30]),
        f
      )
    }
    function ee(e) {
      return { id: e.id, rootPageId: e.root_page_id, title: e.name.trim() || e.id }
    }
    function es(e) {
      return null == e.deleted_at
    }
  },
}
//# sourceMappingURL=581340.42417af9f6.js.map
