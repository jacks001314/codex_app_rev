export const __rspack_esm_ids = [687681]
export const __webpack_modules__ = {
  FROa(e, t, r) {
    var a = r("ABep"),
      n = r("QosV"),
      l = r("on57"),
      s = r("zd8w"),
      i = r("wD9O"),
      o = r("JNtf")
    r.d(
      t,
      {},
      {
        A: "min(720px, calc(100vh - 2rem))",
        Y: function (e) {
          let t,
            r,
            c,
            d,
            u,
            p,
            m = (0, n.c)(19),
            { children: h, loading: f, onOpenChange: x } = e,
            [g, b] = (0, s.useState)(null),
            _ = (0, i.dz)()
          ;(m[0] !== g || m[1] !== _
            ? ((t = null == g ? void 0 : { height: `min(${g}px, calc((100dvh - 2rem) / ${_}))` }),
              (m[0] = g),
              (m[1] = _),
              (m[2] = t))
            : (t = m[2]),
            m[3] !== t ? ((r = { "aria-describedby": void 0, style: t }), (m[3] = t), (m[4] = r)) : (r = m[4]),
            m[5] !== g || m[6] !== f
              ? ((c = (e) => {
                  !f && null == g && null != e && e.offsetHeight > 0 && b(e.offsetHeight)
                }),
                (m[5] = g),
                (m[6] = f),
                (m[7] = c))
              : (c = m[7]))
          let y = (f || null != g) && "h-full",
            I = null != g && "overflow-y-auto"
          return (
            m[8] !== y || m[9] !== I ? ((d = (0, l.A)(y, I)), (m[8] = y), (m[9] = I), (m[10] = d)) : (d = m[10]),
            m[11] !== h || m[12] !== c || m[13] !== d
              ? ((u = (0, a.jsx)("div", { ref: c, className: d, children: h })),
                (m[11] = h),
                (m[12] = c),
                (m[13] = d),
                (m[14] = u))
              : (u = m[14]),
            m[15] !== x || m[16] !== r || m[17] !== u
              ? ((p = (0, a.jsx)(o.lG, {
                  open: !0,
                  onOpenChange: x,
                  autoFocusCloseButton: !0,
                  size: "setup",
                  contentProps: r,
                  children: u,
                })),
                (m[15] = x),
                (m[16] = r),
                (m[17] = u),
                (m[18] = p))
              : (p = m[18]),
            p
          )
        },
      },
    )
  },
  TC6X(e, t, r) {
    var a = r("ABep"),
      n = r("QosV"),
      l = r("oyxz"),
      s = r("Sm6l"),
      i = r("JNtf"),
      o = r("mUDD"),
      c = r("FROa"),
      d = r("lmaZ")
    function u(e) {
      let t,
        r,
        c,
        u,
        p,
        m,
        h,
        f,
        x,
        g,
        b,
        _,
        y = (0, n.c)(27),
        { isPending: I, embedded: A, isFetching: C, onOpenChange: j, onRetry: v } = e,
        N = void 0 !== A && A,
        S = N ? "h2" : i.L3,
        E = N ? "p" : i.rr
      if (I) {
        let e
        return (y[0] !== N ? ((e = (0, a.jsx)(d.$, { embedded: N })), (y[0] = N), (y[1] = e)) : (e = y[1]), e)
      }
      return (
        y[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(l.A, {
              id: "beacons.connectApp.loadError.title",
              defaultMessage: "Couldn\u2019t load connector",
            })),
            (y[2] = t))
          : (t = y[2]),
        y[3] !== S ? ((r = (0, a.jsx)(S, { children: t })), (y[3] = S), (y[4] = r)) : (r = y[4]),
        y[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(l.A, {
              id: "beacons.connectApp.loadError.description",
              defaultMessage: "Try again, or cancel and return to the previous page",
            })),
            (y[5] = c))
          : (c = y[5]),
        y[6] !== E ? ((u = (0, a.jsx)(E, { children: c })), (y[6] = E), (y[7] = u)) : (u = y[7]),
        y[8] !== r || y[9] !== u
          ? ((p = (0, a.jsx)(o.c7, { title: r, subtitle: u })), (y[8] = r), (y[9] = u), (y[10] = p))
          : (p = y[10]),
        y[11] !== j ? ((m = () => j(!1)), (y[11] = j), (y[12] = m)) : (m = y[12]),
        y[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)(l.A, { id: "beacons.connectApp.loadError.button.cancel", defaultMessage: "Cancel" })),
            (y[13] = h))
          : (h = y[13]),
        y[14] !== C || y[15] !== m
          ? ((f = (0, a.jsx)(s.$, { color: "secondary", disabled: C, onClick: m, type: "button", children: h })),
            (y[14] = C),
            (y[15] = m),
            (y[16] = f))
          : (f = y[16]),
        y[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, a.jsx)(l.A, { id: "beacons.connectApp.loadError.button.retry", defaultMessage: "Retry" })),
            (y[17] = x))
          : (x = y[17]),
        y[18] !== C || y[19] !== v
          ? ((g = (0, a.jsx)(s.$, { color: "primary", loading: C, onClick: v, type: "button", children: x })),
            (y[18] = C),
            (y[19] = v),
            (y[20] = g))
          : (g = y[20]),
        y[21] !== g || y[22] !== f
          ? ((b = (0, a.jsxs)(o.Es, { children: [f, g] })), (y[21] = g), (y[22] = f), (y[23] = b))
          : (b = y[23]),
        y[24] !== b || y[25] !== p
          ? ((_ = (0, a.jsxs)(o.R4, { className: "select-none", children: [p, b] })),
            (y[24] = b),
            (y[25] = p),
            (y[26] = _))
          : (_ = y[26]),
        _
      )
    }
    r.d(
      t,
      {},
      {
        m: u,
        p: function (e) {
          let t,
            r,
            l = (0, n.c)(6)
          return (
            l[0] !== e ? ((t = (0, a.jsx)(u, { ...e })), (l[0] = e), (l[1] = t)) : (t = l[1]),
            l[2] !== e.isPending || l[3] !== e.onOpenChange || l[4] !== t
              ? ((r = (0, a.jsx)(c.Y, { loading: e.isPending, onOpenChange: e.onOpenChange, children: t })),
                (l[2] = e.isPending),
                (l[3] = e.onOpenChange),
                (l[4] = t),
                (l[5] = r))
              : (r = l[5]),
            r
          )
        },
      },
    )
  },
  Sx5O(e, t, r) {
    var a = r("ABep"),
      n = r("QosV"),
      l = r("ecE5"),
      s = r("TC6X")
    function i(e) {
      let t,
        r = (0, n.c)(2)
      return (r[0] !== e ? ((t = (0, a.jsx)(l.Z, { ...e, app: null })), (r[0] = e), (r[1] = t)) : (t = r[1]), t)
    }
    r.d(t, { B: () => i, p: () => s.p })
  },
  drqx(e, t, r) {
    r.d(t, { CreateLibraryFolderDialog: () => I })
    var a = r("ABep"),
      n = r("QosV"),
      l = r("qmMi"),
      s = r("zd8w"),
      i = r("Wf1j"),
      o = r("oyxz"),
      c = r("ASxG"),
      d = r("AOHi"),
      u = r("Sm6l"),
      p = r("JNtf"),
      m = r("mUDD"),
      h = r("zLIa"),
      f = r("SGsN"),
      x = r("eShZ"),
      g = r("cGrE"),
      b = r("jU86")
    let _ = c.Ikc({
      directoryId: c.YjP().nullable(),
      tab: c.k5n(["all", "folders", "suggested", "favorites"]),
      search: c.euz(""),
      source: c.chJ(),
      categories: c.PVZ([]),
      deleted: c.euz(!1).optional(),
    })
    var y = r("TtRA")
    function I(e) {
      let t,
        r,
        s,
        i = (0, n.c)(8)
      return (
        i[0] !== e.accountId || i[1] !== e.userId
          ? ((t = { accountId: e.accountId, userId: e.userId }), (i[0] = e.accountId), (i[1] = e.userId), (i[2] = t))
          : (t = i[2]),
        i[3] !== e ? ((r = (0, a.jsx)(A, { ...e })), (i[3] = e), (i[4] = r)) : (r = i[4]),
        i[5] !== t || i[6] !== r
          ? ((s = (0, a.jsx)(l.Ui, { scope: b.oD, value: t, children: r })), (i[5] = t), (i[6] = r), (i[7] = s))
          : (s = i[7]),
        s
      )
    }
    function A(e) {
      let t,
        r,
        I,
        A,
        C,
        j,
        v,
        N,
        S,
        E,
        T,
        M,
        w,
        R,
        O,
        P,
        L,
        U,
        F,
        H,
        k,
        D,
        G,
        B,
        z,
        V = (0, n.c)(81),
        {
          directoryId: Y,
          siblingNames: Q,
          getAnalyticsContext: W,
          onCreated: $,
          createFolder: Z,
          children: q,
          open: J,
          onOpenChange: K,
          onCloseAutoFocus: X,
        } = e,
        ee = (0, l.gh)(b.oD),
        et = (0, i.A)(),
        [er, ea] = (0, s.useState)(""),
        en = (0, s.useId)(),
        [el, es] = (0, s.useState)(null)
      V[0] !== er ? ((t = er.trim().toLowerCase()), (V[0] = er), (V[1] = t)) : (t = V[1])
      let ei = t
      V[2] !== el || V[3] !== ei || V[4] !== Q
        ? ((r = el === ei || Q?.some((e) => e.toLowerCase() === ei)), (V[2] = el), (V[3] = ei), (V[4] = Q), (V[5] = r))
        : (r = V[5])
      let eo = r
      V[6] !== eo || V[7] !== et || V[8] !== er
        ? ((I =
            (0, y.R)(et, er) ??
            (eo
              ? et.formatMessage({
                  id: "libraryNext.createFolder.duplicateName",
                  defaultMessage: "An item with this name already exists.",
                })
              : void 0)),
          (V[6] = eo),
          (V[7] = et),
          (V[8] = er),
          (V[9] = I))
        : (I = V[9])
      let ec = I,
        [ed, eu] = (0, s.useState)(!1),
        ep = (0, s.useRef)(null),
        em = (0, s.useRef)(!1)
      V[10] !== ee
        ? ((A = () => {
            null == ep.current ||
              em.current ||
              ((0, g.Qp)(ee, ep.current.context, {
                parentFolderId: ep.current.parentFolderId,
                action: "CHATGPT_FILE_LIBRARY_CREATE_FOLDER_ACTION_CANCELED",
              }),
              (em.current = !0))
          }),
          (V[10] = ee),
          (V[11] = A))
        : (A = V[11])
      let eh = A,
        [ef, ex] = (0, s.useState)(!1)
      V[12] !== K
        ? ((C = () => {
            ;(ex(!1), K?.(!1), ea(""), es(null), (ep.current = null), (em.current = !1))
          }),
          (V[12] = K),
          (V[13] = C))
        : (C = V[13])
      let eg = C
      V[14] !== eg ||
      V[15] !== Z ||
      V[16] !== Y ||
      V[17] !== et ||
      V[18] !== er ||
      V[19] !== ec ||
      V[20] !== ei ||
      V[21] !== $ ||
      V[22] !== ed ||
      V[23] !== ee
        ? ((j = async () => {
            if (ed || !er.trim() || null != ec) return
            eu(!0)
            let e = null == ep.current ? null : { ...ep.current, parentFolderId: Y ?? void 0 }
            null != e &&
              (0, g.Qp)(ee, e.context, {
                parentFolderId: e.parentFolderId,
                action: "CHATGPT_FILE_LIBRARY_CREATE_FOLDER_ACTION_CONFIRMED",
              })
            let t = !1
            try {
              let r = await (null != Z
                ? Z(er.trim())
                : ee
                    .get(b.c7)
                    .safePost("/files/library/directories", {
                      requestBody: { name: er.trim(), parent_directory_id: Y },
                      expectedErrorStatuses: [409],
                    }))
              if (((t = !0), (em.current = !0), null != e)) {
                let t = c.YjP().min(1).safeParse(r?.id).data
                ;(0, g.Qp)(ee, e.context, {
                  parentFolderId: e.parentFolderId,
                  action:
                    null == t
                      ? "CHATGPT_FILE_LIBRARY_CREATE_FOLDER_ACTION_FAILED"
                      : "CHATGPT_FILE_LIBRARY_CREATE_FOLDER_ACTION_CREATED",
                  folderId: t,
                })
              }
              ;(eu(!1),
                eg(),
                null == Z &&
                  r?.id &&
                  (await (async function (e, t, r) {
                    let a = {
                        queryKey: ["library-api", e.value.accountId],
                        predicate: ({ queryKey: t }) => (t[2] ?? null) === (e.value.userId ?? null),
                      },
                      n = {
                        ...a,
                        predicate: (e) => {
                          if (!a.predicate?.(e) || "browse" !== e.queryKey[3]) return !1
                          let n = _.safeParse(e.queryKey[4]).data
                          return (
                            null != n &&
                            (n.directoryId === t || n.directoryId === r.parent_directory_id) &&
                            (null != n.directoryId || "all" === n.tab || "folders" === n.tab)
                          )
                        },
                      }
                    ;(await e.queryClient.cancelQueries(n),
                      await e.queryClient.invalidateQueries({ ...a, refetchType: "none" }))
                    let l = {
                      node: {
                        ...r,
                        kind: "directory",
                        item_count: 0,
                        folder_count: 0,
                        updated_at: new Date().toISOString(),
                      },
                    }
                    ;(e.queryClient.setQueriesData(n, (e) =>
                      null == e || e.pages.some((e) => e.items.some(({ node: e }) => e.id === r.id))
                        ? e
                        : {
                            ...e,
                            pages: e.pages.map((e, t) =>
                              0 === t
                                ? {
                                    ...e,
                                    items: [l, ...e.items],
                                    results: null == e.results ? void 0 : [l, ...e.results],
                                  }
                                : e,
                            ),
                          },
                    ),
                      e.queryClient.refetchQueries({
                        ...n,
                        type: "active",
                        predicate: (e) => n.predicate?.(e) === !0 && null == e.state.data,
                      }))
                  })(ee, Y, r)),
                await $?.(r))
              return
            } catch (a) {
              if (t) return
              null != e &&
                (0, g.Qp)(ee, e.context, {
                  parentFolderId: e.parentFolderId,
                  action: "CHATGPT_FILE_LIBRARY_CREATE_FOLDER_ACTION_FAILED",
                  error: a,
                })
              let r = a instanceof x.FetchError && 409 === a.status ? (0, d.pZ)(a) : null
              if (r === y.h) {
                ;(es(ei), eu(!1))
                return
              }
              ee.get(f.Id).danger(
                r ??
                  et.formatMessage({
                    id: "libraryNext.createFolder.failed",
                    defaultMessage: "Failed to create folder",
                  }),
                { hasCloseButton: !1, errorAnalytics: { toastId: "libraryNext.createFolder.failed" } },
              )
            }
            eu(!1)
          }),
          (V[14] = eg),
          (V[15] = Z),
          (V[16] = Y),
          (V[17] = et),
          (V[18] = er),
          (V[19] = ec),
          (V[20] = ei),
          (V[21] = $),
          (V[22] = ed),
          (V[23] = ee),
          (V[24] = j))
        : (j = V[24])
      let eb = j,
        e_ = J ?? ef
      ;(V[25] !== X
        ? ((v = { "aria-describedby": void 0, onCloseAutoFocus: X }), (V[25] = X), (V[26] = v))
        : (v = V[26]),
        V[27] !== eh || V[28] !== eg || V[29] !== K || V[30] !== ed
          ? ((N = (e) => {
              ed || (e ? (ex(!0), K?.(!0)) : (eh(), eg()))
            }),
            (V[27] = eh),
            (V[28] = eg),
            (V[29] = K),
            (V[30] = ed),
            (V[31] = N))
          : (N = V[31]),
        V[32] !== eb
          ? ((S = (e) => {
              ;(e.preventDefault(), eb())
            }),
            (V[32] = eb),
            (V[33] = S))
          : (S = V[33]),
        V[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, a.jsx)(m.OO, {
              children: (0, a.jsx)(m.c7, {
                title: (0, a.jsx)(p.L3, {
                  children: (0, a.jsx)(o.A, { id: "libraryNext.createFolder.title", defaultMessage: "New folder" }),
                }),
              }),
            })),
            (V[34] = E))
          : (E = V[34]),
        V[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, a.jsx)(o.A, { id: "libraryNext.createFolder.name", defaultMessage: "Folder name" })), (V[35] = T))
          : (T = V[35]),
        V[36] !== Y || V[37] !== W || V[38] !== ee
          ? ((M = (e) => {
              if (null == e || null != ep.current) return
              let t = W?.()
              null != t &&
                ((ep.current = { context: t, parentFolderId: Y ?? void 0 }),
                (0, g.Qp)(ee, t, {
                  parentFolderId: ep.current.parentFolderId,
                  action: "CHATGPT_FILE_LIBRARY_CREATE_FOLDER_ACTION_SHOWN",
                }))
            }),
            (V[36] = Y),
            (V[37] = W),
            (V[38] = ee),
            (V[39] = M))
          : (M = V[39]))
      let ey = null != ec,
        eI = null == ec ? void 0 : en
      return (
        V[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (e) => ea(e.target.value)), (V[40] = w))
          : (w = V[40]),
        V[41] !== er || V[42] !== M || V[43] !== ey || V[44] !== eI
          ? ((R = (0, a.jsxs)("label", {
              className: "flex flex-col gap-2",
              children: [
                T,
                (0, a.jsx)(h.pd, {
                  ref: M,
                  name: "name",
                  autoComplete: "off",
                  "aria-invalid": ey,
                  "aria-describedby": eI,
                  autoFocus: !0,
                  value: er,
                  onChange: w,
                  required: !0,
                }),
              ],
            })),
            (V[41] = er),
            (V[42] = M),
            (V[43] = ey),
            (V[44] = eI),
            (V[45] = R))
          : (R = V[45]),
        V[46] !== en || V[47] !== ec
          ? ((O =
              null == ec ? null : (0, a.jsx)("p", { id: en, role: "alert", className: "text-danger", children: ec })),
            (V[46] = en),
            (V[47] = ec),
            (V[48] = O))
          : (O = V[48]),
        V[49] !== R || V[50] !== O
          ? ((P = (0, a.jsxs)(m.OO, { children: [R, O] })), (V[49] = R), (V[50] = O), (V[51] = P))
          : (P = V[51]),
        V[52] !== eh || V[53] !== eg
          ? ((L = () => {
              ;(eh(), eg())
            }),
            (V[52] = eh),
            (V[53] = eg),
            (V[54] = L))
          : (L = V[54]),
        V[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = (0, a.jsx)(o.A, { id: "libraryNext.create.cancel", defaultMessage: "Cancel" })), (V[55] = U))
          : (U = V[55]),
        V[56] !== ed || V[57] !== L
          ? ((F = (0, a.jsx)(u.$, { color: "secondary", disabled: ed, onClick: L, children: U })),
            (V[56] = ed),
            (V[57] = L),
            (V[58] = F))
          : (F = V[58]),
        V[59] !== er || V[60] !== ec
          ? ((H = !er.trim() || null != ec), (V[59] = er), (V[60] = ec), (V[61] = H))
          : (H = V[61]),
        V[62] !== ed
          ? ((k = (0, a.jsx)(o.A, {
              id: "libraryNext.create.submitStatus",
              defaultMessage: "{pending, select, true {Creating\u2026} other {Create}}",
              values: { pending: ed },
            })),
            (V[62] = ed),
            (V[63] = k))
          : (k = V[63]),
        V[64] !== ed || V[65] !== H || V[66] !== k
          ? ((D = (0, a.jsx)(u.$, { type: "submit", color: "primary", loading: ed, disabled: H, children: k })),
            (V[64] = ed),
            (V[65] = H),
            (V[66] = k),
            (V[67] = D))
          : (D = V[67]),
        V[68] !== F || V[69] !== D
          ? ((G = (0, a.jsx)(m.OO, { children: (0, a.jsxs)(m.Es, { children: [F, D] }) })),
            (V[68] = F),
            (V[69] = D),
            (V[70] = G))
          : (G = V[70]),
        V[71] !== S || V[72] !== P || V[73] !== G
          ? ((B = (0, a.jsxs)(m.R4, { as: "form", onSubmit: S, children: [E, P, G] })),
            (V[71] = S),
            (V[72] = P),
            (V[73] = G),
            (V[74] = B))
          : (B = V[74]),
        V[75] !== q || V[76] !== B || V[77] !== e_ || V[78] !== v || V[79] !== N
          ? ((z = (0, a.jsx)(p.lG, {
              open: e_,
              triggerContent: q,
              triggerAsChild: !0,
              showDialogClose: !1,
              contentProps: v,
              onOpenChange: N,
              children: B,
            })),
            (V[75] = q),
            (V[76] = B),
            (V[77] = e_),
            (V[78] = v),
            (V[79] = N),
            (V[80] = z))
          : (z = V[80]),
        z
      )
    }
  },
  V080(e, t, r) {
    r.d(t, { Rr: () => eo, be: () => eu, JA: () => ep })
    var a = r("ABep"),
      n = r("QosV"),
      l = r("dSuP"),
      s = r("ZII9"),
      i = r("n87C"),
      o = r("BchX"),
      c = r("qmMi"),
      d = r("DBCl"),
      u = r("zd8w"),
      p = r("Wf1j"),
      m = r("oyxz"),
      h = r("XpTL"),
      f = r("E8Sp"),
      x = r("BQbE"),
      g = r("SPnB"),
      b = r("YJm0"),
      _ = r("CKur"),
      y = r("Sm6l"),
      I = r("bqtn"),
      A = r("HOLv"),
      C = r("bVeK"),
      j = r("Bbed"),
      v = r("UxN3"),
      N = r("HFg1"),
      S = r("Q8aV"),
      E = r("PzII"),
      T = r("yGJW"),
      M = r("OMIV"),
      w = r("cGrE"),
      R = r("tl2n"),
      O = r("TCFx"),
      P = r("jU86"),
      L = r("an5b"),
      U = r("MuZX"),
      F = r("QoH2"),
      H = r("gnPZ"),
      k = r("vGxR"),
      D = r("IZUf"),
      G = r("hwkA"),
      B = r("Sx5O"),
      z = r("yxN2"),
      V = r("JNtf"),
      Y = r("mUDD"),
      Q = r("JAoj"),
      W = r("UfjI"),
      $ = r("Ui6L")
    let Z = "CONNECTOR_SETTING"
    function q(e) {
      let t,
        r,
        l,
        s,
        i = (0, n.c)(7),
        { onSelect: o } = e,
        d = (0, c.Ul)(L.in)
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(v.b5, { icon: { 16: C.MeF, 20: C.fMu } })), (i[0] = t))
          : (t = i[0]),
        i[1] !== d ? ((r = (0, a.jsx)(Q.f, { providers: d })), (i[1] = d), (i[2] = r)) : (r = i[2]),
        i[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(m.A, { id: "libraryNext.create.connectPlugin", defaultMessage: "Connect a plugin" })),
            (i[3] = l))
          : (l = i[3]),
        i[4] !== o || i[5] !== r
          ? ((s = (0, a.jsx)(I.ms.Item, { onSelect: o, leftIcon: t, rightText: r, children: l })),
            (i[4] = o),
            (i[5] = r),
            (i[6] = s))
          : (s = i[6]),
        s
      )
    }
    function J(e) {
      let t,
        r,
        l,
        s = (0, n.c)(13),
        { connected: i, error: o, loading: c, providerName: d, onConnect: u, onRetry: h } = e,
        f = (0, p.A)()
      if (o) {
        let e, t
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(m.A, { id: "libraryNext.connectPlugin.retry", defaultMessage: "Retry" })), (s[0] = e))
            : (e = s[0]),
          s[1] !== h
            ? ((t = (0, a.jsx)(G.$, { color: "secondary", size: "sm", onClick: h, children: e })),
              (s[1] = h),
              (s[2] = t))
            : (t = s[2]),
          t
        )
      }
      if (i) {
        let e, t
        return (
          s[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(C.ALZ, { "aria-hidden": !0 })), (s[3] = e))
            : (e = s[3]),
          s[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsxs)("span", {
                "aria-live": "polite",
                className: "flex size-8 shrink-0 items-center justify-center rounded-full bg-text text-inverse",
                children: [
                  e,
                  (0, a.jsx)("span", {
                    className: "sr-only",
                    children: (0, a.jsx)(m.A, {
                      id: "libraryNext.connectPlugin.connected",
                      defaultMessage: "Connected",
                    }),
                  }),
                ],
              })),
              (s[4] = t))
            : (t = s[4]),
          t
        )
      }
      return (
        s[5] !== f || s[6] !== d
          ? ((t = f.formatMessage(
              { id: "libraryNext.connectPlugin.connectProvider", defaultMessage: "Connect {provider}" },
              { provider: d },
            )),
            (s[5] = f),
            (s[6] = d),
            (s[7] = t))
          : (t = s[7]),
        s[8] === Symbol.for("react.memo_cache_sentinel") ? ((r = (0, a.jsx)(C.xFs, {})), (s[8] = r)) : (r = s[8]),
        s[9] !== c || s[10] !== u || s[11] !== t
          ? ((l = (0, a.jsx)(G.$, {
              "aria-label": t,
              color: "secondary",
              size: "sm",
              uniform: !0,
              loading: c,
              disabled: c,
              className: "size-8 shrink-0 rounded-full !p-0",
              onClick: u,
              children: r,
            })),
            (s[9] = c),
            (s[10] = u),
            (s[11] = t),
            (s[12] = l))
          : (l = s[12]),
        l
      )
    }
    function K(e) {
      let t,
        r,
        l,
        s,
        i,
        o,
        d,
        u,
        h,
        f,
        x,
        g,
        b,
        _,
        y,
        I,
        A = (0, n.c)(55),
        {
          connectorId: C,
          connectors: j,
          pickerOpen: v,
          providersLoading: N,
          providersError: S,
          returnTo: E,
          onRetryProviders: T,
          onConnectorChange: M,
          onPickerOpenChange: w,
        } = e,
        R = (0, c.gh)(P.Qy),
        O = (0, p.A)(),
        { handleAppConnectOAuthStarted: U } = (0, z.t)()
      A[0] !== E || A[1] !== R ? ((t = E ?? (0, P.SE)(R.value)), (A[0] = E), (A[1] = R), (A[2] = t)) : (t = A[2])
      let F = t
      A[3] !== F ? ((r = F), (A[3] = F), (A[4] = r)) : (r = A[4])
      let H = r
      ;(A[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (0, a.jsx)(V.L3, {
            className: "text-2xl leading-8 font-semibold",
            children: (0, a.jsx)(m.A, { id: "libraryNext.connectPlugin.title", defaultMessage: "Connect your files" }),
          })),
          (A[5] = l))
        : (l = A[5]),
        A[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsxs)("div", {
              className: "flex flex-col items-center gap-2 text-center",
              children: [
                l,
                (0, a.jsx)(V.rr, {
                  className: "max-w-[296px] text-base leading-6 text-secondary",
                  children: (0, a.jsx)(m.A, {
                    id: "libraryNext.connectPlugin.description",
                    defaultMessage: "Search your files, ask questions, and use tools without leaving ChatGPT",
                  }),
                }),
              ],
            })),
            (A[6] = s))
          : (s = A[6]),
        A[7] !== j.length || A[8] !== N
          ? ((i =
              0 === j.length
                ? (0, a.jsx)("p", {
                    role: "status",
                    className: "py-12 text-center text-secondary",
                    children: N
                      ? (0, a.jsx)(m.A, {
                          id: "libraryNext.connectPlugin.providersLoading",
                          defaultMessage: "Loading file apps\u2026",
                        })
                      : (0, a.jsx)(m.A, {
                          id: "libraryNext.connectPlugin.providersUnavailable",
                          defaultMessage: "No file apps are available to connect right now",
                        }),
                  })
                : null),
            (A[7] = j.length),
            (A[8] = N),
            (A[9] = i))
          : (i = A[9]),
        A[10] !== O
          ? ((o = O.formatMessage({ id: "libraryNext.connectPlugin.providers", defaultMessage: "Connect your files" })),
            (A[10] = O),
            (A[11] = o))
          : (o = A[11]))
      let k = 0 === j.length
      if (A[12] !== j || A[13] !== O || A[14] !== M || A[15] !== T || A[16] !== S || A[17] !== N) {
        let e
        ;(A[19] !== O || A[20] !== M || A[21] !== T || A[22] !== S || A[23] !== N
          ? ((e = (e) => {
              let { connectorId: t, provider: r, state: n } = e,
                l = (0, $.Y)(O, r) ?? r
              return (0, a.jsxs)(
                "li",
                {
                  className: "flex items-center gap-3 py-3",
                  children: [
                    (0, a.jsx)("span", {
                      className:
                        "flex size-[45px] shrink-0 items-center justify-center rounded-full border border-default bg-surface dark:bg-surface-tertiary",
                      children: (0, a.jsx)(W._, { provider: r, size: "picker" }),
                    }),
                    (0, a.jsx)("span", { className: "min-w-0 flex-1 text-base text-default", children: l }),
                    (0, a.jsx)(J, {
                      connected: "connected" === n,
                      error: S || "error" === n,
                      loading: N || "loading" === n,
                      providerName: l,
                      onConnect: () => {
                        M(t)
                      },
                      onRetry: T,
                    }),
                  ],
                },
                r,
              )
            }),
            (A[19] = O),
            (A[20] = M),
            (A[21] = T),
            (A[22] = S),
            (A[23] = N),
            (A[24] = e))
          : (e = A[24]),
          (d = j.map(e)),
          (A[12] = j),
          (A[13] = O),
          (A[14] = M),
          (A[15] = T),
          (A[16] = S),
          (A[17] = N),
          (A[18] = d))
      } else d = A[18]
      return (
        A[25] !== o || A[26] !== k || A[27] !== d
          ? ((u = (0, a.jsx)("ul", { "aria-label": o, className: "mt-3 select-none", hidden: k, children: d })),
            (A[25] = o),
            (A[26] = k),
            (A[27] = d),
            (A[28] = u))
          : (u = A[28]),
        A[29] !== i || A[30] !== u
          ? ((h = (0, a.jsxs)("div", { className: "min-h-0 flex-1 overflow-y-auto px-6 pt-9", children: [s, i, u] })),
            (A[29] = i),
            (A[30] = u),
            (A[31] = h))
          : (h = A[31]),
        A[32] !== w ? ((f = () => w(!1)), (A[32] = w), (A[33] = f)) : (f = A[33]),
        A[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, a.jsx)(m.A, { id: "libraryNext.connectPlugin.done", defaultMessage: "Done" })), (A[34] = x))
          : (x = A[34]),
        A[35] !== f
          ? ((g = (0, a.jsx)("div", {
              className: "shrink-0 px-6 pt-10 pb-6",
              children: (0, a.jsx)(G.$, {
                color: "primary",
                size: "xl",
                className: "h-12 w-full justify-center rounded-full text-base font-semibold",
                onClick: f,
                children: x,
              }),
            })),
            (A[35] = f),
            (A[36] = g))
          : (g = A[36]),
        A[37] !== h || A[38] !== g
          ? ((b = (0, a.jsxs)(Y.R4, { size: "full", variant: "chatgpt", children: [h, g] })),
            (A[37] = h),
            (A[38] = g),
            (A[39] = b))
          : (b = A[39]),
        A[40] !== w || A[41] !== v || A[42] !== b
          ? ((_ = (0, a.jsx)(V.lG, {
              contentClassName:
                "h-[640px] max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] w-[min(464px,calc(100vw/var(--codex-window-zoom)-2rem))] max-md:inset-x-0 max-md:top-auto max-md:bottom-0 max-md:w-[calc(100vw/var(--codex-window-zoom))] max-md:max-w-none max-md:translate-x-0 max-md:translate-y-0",
              open: v,
              showDialogClose: !1,
              variant: "chatgpt",
              onOpenChange: w,
              children: b,
            })),
            (A[40] = w),
            (A[41] = v),
            (A[42] = b),
            (A[43] = _))
          : (_ = A[43]),
        A[44] !== C || A[45] !== U || A[46] !== M || A[47] !== w || A[48] !== H || A[49] !== F || A[50] !== R
          ? ((y =
              null == C
                ? null
                : (0, a.jsx)(B.B, {
                    connectorId: C,
                    appConnectOptions: { connectorId: C, productSku: Z, oauthReferrer: "library", redirectAfter: H },
                    onOAuthStarted: (e) => {
                      U({
                        ...e,
                        appConnectOptions: {
                          connectorId: C,
                          productSku: Z,
                          oauthReferrer: "library",
                          redirectAfter: H,
                        },
                        returnTo: F,
                      })
                    },
                    onOpenChange: (e) => {
                      e ||
                        (M(null),
                        w(!0),
                        R.get(L.pA)
                          .refetch()
                          .then(() => R.get(L.ZJ).refetch()))
                    },
                  })),
            (A[44] = C),
            (A[45] = U),
            (A[46] = M),
            (A[47] = w),
            (A[48] = H),
            (A[49] = F),
            (A[50] = R),
            (A[51] = y))
          : (y = A[51]),
        A[52] !== _ || A[53] !== y
          ? ((I = (0, a.jsxs)(a.Fragment, { children: [_, y] })), (A[52] = _), (A[53] = y), (A[54] = I))
          : (I = A[54]),
        I
      )
    }
    var X = r("drqx"),
      ee = r("uNsz")
    function et(e) {
      let t,
        r,
        l = (0, n.c)(4),
        { disabled: s, onClick: i } = e
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(m.A, { id: "libraryNext.create.uploadMenu", defaultMessage: "Upload files" })), (l[0] = t))
          : (t = l[0]),
        l[1] !== s || l[2] !== i
          ? ((r = (0, a.jsx)(y.$, { color: "primary", size: "toolbar", disabled: s, onClick: i, children: t })),
            (l[1] = s),
            (l[2] = i),
            (l[3] = r))
          : (r = l[3]),
        r
      )
    }
    let er = (0, j._)(async () => (await r.e(290918).then(r.bind(r, "Ee5J"))).LibraryPrismImportDialog),
      ea = (0, c.un)(P.oD, ({ get: e }) => e(_.BA).data?.some((e) => "picture_v2" === e.system_hint) ?? !1),
      en = (0, c.un)(
        P.Qy,
        ({ get: e, scope: t }) =>
          e(k.VH) && e(b.t, t.value.accountId).data?.features?.includes("writing_blocks_document_mode") === !0,
      ),
      el = (0, c.un)(
        P.Qy,
        ({ get: e, scope: t }) => !(0, ee.Tf)(t.value.directoryId, t.value.basePath) || !e(k.uw) || null != e(k.hv),
      ),
      es = (0, c.un)(
        P.Qy,
        ({ get: e, scope: t }) =>
          e(R.$7) &&
          e(k.uw) &&
          !e(k.eS) &&
          !t.value.deleted &&
          !t.value.search &&
          ("images" === t.value.tab || 0 === t.value.categories.length) &&
          0 === t.value.sources.length &&
          (null == t.value.directoryId ||
            (!t.value.directoryId.startsWith("library:") &&
              (!t.value.directoryId.startsWith("external-") ||
                (0, O.kf)(
                  t.value.directoryId,
                  e(P.i3).data?.pages.flatMap(({ items: e }) => e),
                )))),
      ),
      ei = (0, c.un)(P.Qy, ({ get: e, scope: t }) => {
        let { directoryId: r } = t.value
        if (r?.startsWith("external-")) return
        if (null == r && "suggested" === t.value.tab) return e(D.Y).data?.map((e) => e.name)
        let a = r ?? e(P.PI).data,
          { data: n, isPlaceholderData: l } = e(P.i3)
        if (!l && null != a)
          return n?.pages.flatMap(({ items: e }) =>
            e
              .filter(
                (e) =>
                  e.node.parent_directory_id === a &&
                  "native" === (0, O.sm)(e) &&
                  !(0, O.kS)(e) &&
                  ("directory" === e.node.kind || (0, d.PKK)(e.node.id)),
              )
              .map(({ node: e }) => e.name),
          )
      })
    function eo(e) {
      let t,
        r,
        d,
        b,
        _,
        j,
        R,
        O,
        D,
        G,
        B,
        z,
        V,
        Y,
        Q,
        W,
        $,
        Z,
        J,
        ee,
        et,
        eo,
        eu,
        ep,
        ex = (0, n.c)(83),
        {
          label: eg,
          variant: eb,
          compactOnMobile: e_,
          handleOnboarding: ey,
          showNote: eI,
          pageCreationItem: eA,
          spreadsheetAction: eC,
          presentationAction: ej,
          disabled: ev,
          showHeading: eN,
          triggerButton: eS,
          triggerButtonRef: eE,
          additionalCreationItems: eT,
          containerCreationItems: eM,
          templateCreationItem: ew,
          templatesFirst: eR,
          triggerRef: eO,
        } = e,
        eP = void 0 !== ey && ey,
        eL = void 0 !== eR && eR,
        eU = (0, c.gh)(P.Qy),
        eF = (0, p.A)(),
        eH = "space" === (void 0 === eb ? "library" : eb),
        ek = (void 0 !== e_ && e_) || eH,
        eD = (0, u.useRef)(null),
        eG = (0, u.useRef)(null),
        eB = eO ?? eG,
        ez = (0, u.useRef)(null),
        [eV, eY] = (0, u.useState)(!1),
        eQ = (0, c.Ul)(eV ? ei : null),
        [eW, e$] = (0, u.useState)(!1),
        [eZ, eq] = (0, u.useState)(null),
        eJ = (0, c.Ul)(f.gM)
      ex[0] !== eP || ex[1] !== eJ
        ? ((t = eP && "intro" === new URLSearchParams(eJ.search).get("library_onboarding")),
          (ex[0] = eP),
          (ex[1] = eJ),
          (ex[2] = t))
        : (t = ex[2])
      let eK = t
      ;(ex[3] !== eK || ex[4] !== eU
        ? ((r = () => {
            eK && (0, U.$W)(eU, eU.get(U.NE), "shown")
          }),
          (d = [eK, eU]),
          (ex[3] = eK),
          (ex[4] = eU),
          (ex[5] = r),
          (ex[6] = d))
        : ((r = ex[5]), (d = ex[6])),
        (0, u.useEffect)(r, d),
        ex[7] !== eU ? ((b = () => em(eU)), (ex[7] = eU), (ex[8] = b)) : (b = ex[8]))
      let [eX, e0] = (0, u.useState)(b),
        e1 = (0, c.Ul)(k.wh),
        e2 = (0, c.Ul)(E.j),
        [e6, e3] = (0, u.useState)(null),
        e4 = null != e2 && null == eU.value.directoryId && eU.value.accountId === e2.accountId,
        e5 = (0, c.Ul)(!!e4 && E.Q),
        e8 = (0, c.Ul)(es),
        e7 = (0, c.Ul)(el),
        e9 = null == eU.value.directoryId || "library:collection:shared-with-me" === eU.value.directoryId,
        te = (0, c.Ul)(ea) && e9,
        tt = (0, c.Ul)(!!(void 0 === eI || eI) && !eH && en),
        tr = (0, c.Ul)(L.iV),
        ta = (0, c.Ul)(g.qz),
        tn = (0, c.Ul)(M.RS)
      ;(ex[9] !== tr ? ((_ = tr.map(ed)), (ex[9] = tr), (ex[10] = _)) : (_ = ex[10]),
        ex[11] !== _ ? ((j = { appIds: _ }), (ex[11] = _), (ex[12] = j)) : (j = ex[12]))
      let { data: tl, isError: ts, refetch: ti } = (0, x.KA)(j)
      if (ex[13] !== tl || ex[14] !== tr) {
        let e
        ;((R = tr.filter(ec)),
          ex[17] !== tl
            ? ((e = (e) => {
                let { connectorId: t } = e
                return tl?.some((e) => e.id === t) === !0
              }),
              (ex[17] = tl),
              (ex[18] = e))
            : (e = ex[18]),
          (O = R.filter(e)),
          (ex[13] = tl),
          (ex[14] = tr),
          (ex[15] = R),
          (ex[16] = O))
      } else ((R = ex[15]), (O = ex[16]))
      let to = O
      ex[19] !== eU
        ? ((D = () => {
            eU.get(el) && (e0(em(eU)), eY(!0))
          }),
          (ex[19] = eU),
          (ex[20] = D))
        : (D = ex[20])
      let tc = D,
        td = (e) =>
          (0, a.jsx)(
            I.ms.Item,
            {
              disabled: e.disabled,
              leftIcon: e.leftIcon,
              onFocus: e.onIntent,
              onPointerEnter: e.onIntent,
              onPointerDown: e.onIntent,
              onSelect: () => {
                ez.current = e.onSelect
              },
              children: e.label,
            },
            e.key,
          )
      ex[21] !== eH
        ? ((G = eH ? (0, a.jsx)(v.b5, { icon: N.Q.presentation }) : (0, a.jsx)(C.jXf, {})),
          (B = eH
            ? (0, a.jsx)(m.A, { id: "space.create.presentation", defaultMessage: "Slides" })
            : (0, a.jsx)(m.A, { id: "libraryNext.create.presentation", defaultMessage: "Presentation" })),
          (ex[21] = eH),
          (ex[22] = G),
          (ex[23] = B))
        : ((G = ex[22]), (B = ex[23]))
      let tu = (0, a.jsx)(I.ms.Item, {
          disabled: ej?.disabled,
          rightText: ej?.rightText,
          onSelect: () => {
            ez.current = () =>
              null != ej
                ? ej.onSelect()
                : (0, S.startNewConversation)(eU, {
                    codexAppMode: "chat",
                    prefillPrompt: (0, h.D)(eF, "presentation"),
                    libraryFileCreation: !0,
                    startInSidebar: !0,
                  })
          },
          leftIcon: G,
          children: B,
        }),
        tp = te
          ? (0, a.jsx)(I.ms.Item, {
              onSelect: () => {
                ez.current = () => eh(eU)
              },
              leftIcon: eH ? (0, a.jsx)(v.b5, { icon: { 16: C.UJ6, 20: C.pYT } }) : (0, a.jsx)(C.pYT, {}),
              children: (0, a.jsx)(m.A, { id: "libraryNext.create.image", defaultMessage: "Image" }),
            })
          : null
      ;(ex[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = (0, a.jsx)(ef, { inputRef: eD })), (ex[24] = z))
        : (z = ex[24]),
        ex[25] !== e6?.identity || ex[26] !== e6?.scope || ex[27] !== e4 || ex[28] !== e2 || ex[29] !== eU
          ? ((V = e4 && e6?.identity === e2 && e6?.scope === eU ? (0, a.jsx)(er, { onClose: () => e3(null) }) : null),
            (ex[25] = e6?.identity),
            (ex[26] = e6?.scope),
            (ex[27] = e4),
            (ex[28] = e2),
            (ex[29] = eU),
            (ex[30] = V))
          : (V = ex[30]),
        ex[31] !== eU ? ((Y = () => eU.get(w.Vu)), (ex[31] = eU), (ex[32] = Y)) : (Y = ex[32]))
      let tm = eQ ?? void 0
      ;(ex[33] !== eX ? ((Q = (e) => eX.open(e?.id)), (ex[33] = eX), (ex[34] = Q)) : (Q = ex[34]),
        ex[35] !== eB || ex[36] !== eE
          ? ((W = (e) => {
              ;(e.preventDefault(), (eE ?? eB).current?.focus())
            }),
            (ex[35] = eB),
            (ex[36] = eE),
            (ex[37] = W))
          : (W = ex[37]),
        ex[38] !== eV ||
        ex[39] !== eU.value.accountId ||
        ex[40] !== eU.value.directoryId ||
        ex[41] !== eU.value.userId ||
        ex[42] !== Y ||
        ex[43] !== tm ||
        ex[44] !== Q ||
        ex[45] !== W
          ? (($ = (0, a.jsx)(X.CreateLibraryFolderDialog, {
              accountId: eU.value.accountId,
              getAnalyticsContext: Y,
              userId: eU.value.userId,
              directoryId: eU.value.directoryId,
              siblingNames: tm,
              open: eV,
              onOpenChange: eY,
              onCreated: Q,
              onCloseAutoFocus: W,
            })),
            (ex[38] = eV),
            (ex[39] = eU.value.accountId),
            (ex[40] = eU.value.directoryId),
            (ex[41] = eU.value.userId),
            (ex[42] = Y),
            (ex[43] = tm),
            (ex[44] = Q),
            (ex[45] = W),
            (ex[46] = $))
          : ($ = ex[46]),
        ex[47] !== ek || ex[48] !== ev || ex[49] !== eH || ex[50] !== eg || ex[51] !== eB || ex[52] !== eS
          ? ((Z =
              eS ??
              (0, a.jsxs)(y.$, {
                ref: eB,
                color: "primary",
                size: eH ? "pageAction" : "toolbar",
                radius: "full",
                disabled: ev,
                uniformAtMobile: ek,
                children: [
                  ek ? (0, a.jsx)(C.ONy, { className: "hidden browser:max-md:block" }) : null,
                  (0, a.jsx)("span", {
                    className: ek ? "browser:max-md:sr-only" : void 0,
                    children: eg ?? (0, a.jsx)(m.A, { id: "libraryNext.create.new", defaultMessage: "New" }),
                  }),
                  (0, a.jsx)(C.Aq_, { className: ek ? "browser:max-md:hidden" : void 0 }),
                ],
              })),
            (ex[47] = ek),
            (ex[48] = ev),
            (ex[49] = eH),
            (ex[50] = eg),
            (ex[51] = eB),
            (ex[52] = eS),
            (ex[53] = Z))
          : (Z = ex[53]))
      let th =
          ((ep = Z),
          (0, a.jsxs)(I.Ab, {
            disabled: ev,
            onOpenChange: (e) => {
              if (!e) return
              let t = eU.get(w.Vu)
              ;(0, T.yy)(eU, l.fS, {
                sessionId: t.sessionId,
                libraryVariant: t.libraryVariant,
                menuKind: "CHATGPT_FILE_LIBRARY_MENU_KIND_PAGE_MORE",
                availableActionSet: [
                  ...(e1 ? ["CHATGPT_FILE_LIBRARY_MENU_ACTION_UPLOAD_FILES"] : []),
                  ...(e8 && e7 ? ["CHATGPT_FILE_LIBRARY_MENU_ACTION_NEW_FOLDER"] : []),
                  ...(tt ? ["CHATGPT_FILE_LIBRARY_MENU_ACTION_NEW_NOTE"] : []),
                  ...(te ? ["CHATGPT_FILE_LIBRARY_MENU_ACTION_NEW_IMAGE"] : []),
                  ...(null != eA ? ["CHATGPT_FILE_LIBRARY_MENU_ACTION_NEW_PAGE"] : []),
                  ...(e9 && null == eA ? ["CHATGPT_FILE_LIBRARY_MENU_ACTION_NEW_DOCUMENT"] : []),
                  ...(e9
                    ? [
                        ...(eC?.disabled ? [] : ["CHATGPT_FILE_LIBRARY_MENU_ACTION_NEW_SPREADSHEET"]),
                        ...(ej?.disabled ? [] : ["CHATGPT_FILE_LIBRARY_MENU_ACTION_NEW_PRESENTATION"]),
                      ]
                    : []),
                  ...(e9 && to.length > 0 ? ["CHATGPT_FILE_LIBRARY_MENU_ACTION_CONNECT_PLUGIN"] : []),
                ],
              })
            },
            align: "end",
            onCloseAutoFocus: (e) => {
              let t = ez.current
              ;(null != t && ((ez.current = null), e.preventDefault(), t()), eV && e.preventDefault())
            },
            contentClassName: "text-start",
            contentWidth: "menu",
            triggerButton: ep,
            children: [
              void 0 === eN || eN
                ? (0, a.jsx)(I.ms.SectionLabel, {
                    children: (0, a.jsx)(m.A, { id: "libraryNext.create.heading", defaultMessage: "Create new" }),
                  })
                : null,
              e9 && eL && null != ew
                ? (0, a.jsxs)(a.Fragment, { children: [ew, (0, a.jsx)(I.ms.Separator, {})] })
                : null,
              tt
                ? (0, a.jsx)(I.ms.Item, {
                    onSelect: () => {
                      ez.current = () =>
                        (function (e) {
                          if (!e.get(en)) return
                          let t = e.get(w.Vu)
                          ;((0, w.r7)(e, t, { action: "CHATGPT_FILE_LIBRARY_NOTE_EDITOR_ACTION_TAPPED" }),
                            (0, F._Y)(
                              e,
                              e.get(F.vL, { accountId: e.value.accountId, userId: e.value.userId }) ?? {
                                entry: null,
                                noteId: `library-note:${crypto.randomUUID()}`,
                                directoryId: e.value.directoryId,
                                analyticsContext: t,
                              },
                            ))
                        })(eU)
                    },
                    leftIcon: (0, a.jsx)(A.I, { asset: o.g }),
                    children: (0, a.jsx)(m.A, { id: "libraryNext.create.note", defaultMessage: "Note" }),
                  })
                : null,
              e9 && !eH ? tp : null,
              null != eA ? td(eA) : null,
              e9
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      null == eA
                        ? (0, a.jsx)(I.ms.Item, {
                            onSelect: () => {
                              ez.current = () =>
                                (0, S.startNewConversation)(eU, {
                                  codexAppMode: "chat",
                                  prefillPrompt: (0, h.D)(eF, "document"),
                                  libraryFileCreation: !0,
                                  startInSidebar: !0,
                                })
                            },
                            leftIcon: (0, a.jsx)(A.I, { asset: o.g }),
                            children: (0, a.jsx)(m.A, {
                              id: "libraryNext.create.document",
                              defaultMessage: "Document",
                            }),
                          })
                        : null,
                      eH ? tu : null,
                      (0, a.jsx)(I.ms.Item, {
                        disabled: eC?.disabled,
                        rightText: eC?.rightText,
                        onSelect: () => {
                          ez.current = () =>
                            null != eC
                              ? eC.onSelect()
                              : (0, S.startNewConversation)(eU, {
                                  codexAppMode: "chat",
                                  prefillPrompt: (0, h.D)(eF, "spreadsheet"),
                                  libraryFileCreation: !0,
                                  startInSidebar: !0,
                                })
                        },
                        leftIcon: eH ? (0, a.jsx)(v.b5, { icon: N.Q.spreadsheet }) : (0, a.jsx)(C.NSE, {}),
                        children: eH
                          ? (0, a.jsx)(m.A, { id: "space.create.spreadsheet", defaultMessage: "Sheet" })
                          : (0, a.jsx)(m.A, { id: "libraryNext.create.spreadsheet", defaultMessage: "Spreadsheet" }),
                      }),
                      eH ? null : tu,
                      eT?.map(td),
                      eH ? tp : null,
                      eH ? (0, a.jsx)(I.ms.Separator, {}) : null,
                    ],
                  })
                : null,
              e7
                ? (0, a.jsx)(I.ms.Item, {
                    disabled: !e8,
                    onSelect: tc,
                    leftIcon: eH ? (0, a.jsx)(v.b5, { icon: { 16: C.efV, 20: C.nex } }) : (0, a.jsx)(C.nex, {}),
                    children: (0, a.jsx)(m.A, { id: "libraryNext.create.folder", defaultMessage: "Folder" }),
                  })
                : null,
              e9 ? eM : null,
              e7 || e9 ? (0, a.jsx)(I.ms.Separator, {}) : null,
              e9 && !eL ? ew : null,
              (0, a.jsx)(I.ms.Item, {
                disabled: !e1,
                onSelect: () => {
                  ;((0, H.tw)(eU, { action: "CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_TAPPED" }),
                    eD.current?.click(),
                    (0, H.tw)(eU, { action: "CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_SHOWN" }))
                },
                leftIcon: eH ? (0, a.jsx)(v.b5, { icon: { assets: { 16: s.U, 20: i.D } } }) : (0, a.jsx)(C.F5b, {}),
                children: (0, a.jsx)(m.A, { id: "libraryNext.create.uploadMenu", defaultMessage: "Upload files" }),
              }),
              e5
                ? (0, a.jsx)(I.ms.Item, {
                    disabled: !e1,
                    onSelect: () => {
                      ez.current = () => e3({ scope: eU, identity: e2 })
                    },
                    leftIcon: eH ? (0, a.jsx)(v.b5, { icon: { 16: C.MxM, 20: C.vHO } }) : (0, a.jsx)(C.vHO, {}),
                    children: (0, a.jsx)(m.A, { id: "library.prismImport.menu", defaultMessage: "Import from Prism" }),
                  })
                : null,
              e9 && to.length > 0 ? (0, a.jsx)(q, { onSelect: () => e$(!0) }) : null,
            ],
          })),
        tf = null == tl ? R : to,
        tx = null == eZ && (eW || eK),
        tg = 0 === tr.length ? "loading" === ta || tn : null == tl && !ts
      ex[54] !== ts || ex[55] !== ti || ex[56] !== eU
        ? ((J = () => {
            ts && ti()
            let e = eU.get(L.pA),
              t = eU.get(L.ZJ)
            e.isError ? e.refetch().then(() => t.refetch()) : t.isError && t.refetch()
          }),
          (ex[54] = ts),
          (ex[55] = ti),
          (ex[56] = eU),
          (ex[57] = J))
        : (J = ex[57])
      let tb = eK ? `${eJ.pathname}${eJ.search}` : void 0
      return (
        ex[58] !== eK || ex[59] !== eU || ex[60] !== eq
          ? ((ee = (e) => {
              ;(eK && null != e && (0, U.$W)(eU, eU.get(U.NE), "selected", e), eq(e))
            }),
            (ex[58] = eK),
            (ex[59] = eU),
            (ex[60] = eq),
            (ex[61] = ee))
          : (ee = ex[61]),
        ex[62] !== eK || ex[63] !== eJ || ex[64] !== eU || ex[65] !== e$
          ? ((et = (e) => {
              if ((e$(e), !e && eK)) {
                ;((0, U.$W)(eU, eU.get(U.NE), "dismissed"), eU.set(U.NE, null))
                let e = new URLSearchParams(eJ.search)
                ;(e.delete("library_onboarding"),
                  e.delete("entry_point"),
                  (0, f.oo)(eU, { pathname: eJ.pathname, search: e.toString() ? `?${e}` : "" }, { replace: !0 }))
              }
            }),
            (ex[62] = eK),
            (ex[63] = eJ),
            (ex[64] = eU),
            (ex[65] = e$),
            (ex[66] = et))
          : (et = ex[66]),
        ex[67] !== eZ ||
        ex[68] !== ts ||
        ex[69] !== tf ||
        ex[70] !== tx ||
        ex[71] !== tg ||
        ex[72] !== J ||
        ex[73] !== tb ||
        ex[74] !== ee ||
        ex[75] !== et
          ? ((eo = (0, a.jsx)(K, {
              connectorId: eZ,
              connectors: tf,
              pickerOpen: tx,
              providersLoading: tg,
              providersError: ts,
              onRetryProviders: J,
              returnTo: tb,
              onConnectorChange: ee,
              onPickerOpenChange: et,
            })),
            (ex[67] = eZ),
            (ex[68] = ts),
            (ex[69] = tf),
            (ex[70] = tx),
            (ex[71] = tg),
            (ex[72] = J),
            (ex[73] = tb),
            (ex[74] = ee),
            (ex[75] = et),
            (ex[76] = eo))
          : (eo = ex[76]),
        ex[77] !== z || ex[78] !== V || ex[79] !== $ || ex[80] !== th || ex[81] !== eo
          ? ((eu = (0, a.jsxs)(a.Fragment, { children: [z, V, $, th, eo] })),
            (ex[77] = z),
            (ex[78] = V),
            (ex[79] = $),
            (ex[80] = th),
            (ex[81] = eo),
            (ex[82] = eu))
          : (eu = ex[82]),
        eu
      )
    }
    function ec(e) {
      let { state: t } = e
      return "unavailable" !== t
    }
    function ed(e) {
      let { connectorId: t } = e
      return t
    }
    function eu() {
      let e,
        t,
        r = (0, n.c)(27),
        l = (0, c.gh)(P.Qy),
        [s, i] = (0, u.useState)(!1),
        o = (0, c.Ul)(s ? ei : null)
      r[0] !== l ? ((e = () => em(l)), (r[0] = l), (r[1] = e)) : (e = r[1])
      let [d, p] = (0, u.useState)(e),
        h = (0, c.Ul)(es),
        f = (0, c.Ul)(el),
        x = (0, c.Ul)(ea)
      if ("images" === l.value.tab) {
        let e,
          t,
          n,
          s = !x
        return (
          r[2] !== l ? ((e = () => eh(l)), (r[2] = l), (r[3] = e)) : (e = r[3]),
          r[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(m.A, { id: "libraryNext.create.imageAction", defaultMessage: "Create image" })),
              (r[4] = t))
            : (t = r[4]),
          r[5] !== s || r[6] !== e
            ? ((n = (0, a.jsx)(y.$, { color: "primary", size: "toolbar", disabled: s, onClick: e, children: t })),
              (r[5] = s),
              (r[6] = e),
              (r[7] = n))
            : (n = r[7]),
          n
        )
      }
      if ("folders" === l.value.tab) {
        let e, t, n, s, c, u
        if (!f) return null
        r[8] !== l ? ((e = () => l.get(w.Vu)), (r[8] = l), (r[9] = e)) : (e = r[9])
        let x = o ?? void 0
        ;(r[10] !== l
          ? ((t = (e) => {
              ;(i(e), e && p(em(l)))
            }),
            (r[10] = l),
            (r[11] = t))
          : (t = r[11]),
          r[12] !== d ? ((n = (e) => d.open(e?.id)), (r[12] = d), (r[13] = n)) : (n = r[13]))
        let g = !h
        return (
          r[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsx)(m.A, { id: "libraryNext.create.folderAction", defaultMessage: "Create folder" })),
              (r[14] = s))
            : (s = r[14]),
          r[15] !== g
            ? ((c = (0, a.jsx)(y.$, { color: "primary", size: "toolbar", disabled: g, children: s })),
              (r[15] = g),
              (r[16] = c))
            : (c = r[16]),
          r[17] !== l.value.accountId ||
          r[18] !== l.value.directoryId ||
          r[19] !== l.value.userId ||
          r[20] !== e ||
          r[21] !== x ||
          r[22] !== t ||
          r[23] !== n ||
          r[24] !== c
            ? ((u = (0, a.jsx)(X.CreateLibraryFolderDialog, {
                accountId: l.value.accountId,
                getAnalyticsContext: e,
                userId: l.value.userId,
                directoryId: l.value.directoryId,
                siblingNames: x,
                onOpenChange: t,
                onCreated: n,
                children: c,
              })),
              (r[17] = l.value.accountId),
              (r[18] = l.value.directoryId),
              (r[19] = l.value.userId),
              (r[20] = e),
              (r[21] = x),
              (r[22] = t),
              (r[23] = n),
              (r[24] = c),
              (r[25] = u))
            : (u = r[25]),
          u
        )
      }
      return (
        r[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(eo, {
              label: (0, a.jsx)(m.A, { id: "libraryNext.create.start", defaultMessage: "Start creating" }),
            })),
            (r[26] = t))
          : (t = r[26]),
        t
      )
    }
    function ep() {
      let e,
        t,
        r,
        l = (0, n.c)(6),
        s = (0, c.gh)(P.Qy),
        i = (0, u.useRef)(null),
        o = (0, c.Ul)(k.wh)
      l[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = (0, a.jsx)(ef, { inputRef: i })), (l[0] = e))
        : (e = l[0])
      let d = !o
      return (
        l[1] !== s
          ? ((t = () => {
              ;((0, H.tw)(s, { action: "CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_TAPPED" }),
                i.current?.click(),
                (0, H.tw)(s, { action: "CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_SHOWN" }))
            }),
            (l[1] = s),
            (l[2] = t))
          : (t = l[2]),
        l[3] !== d || l[4] !== t
          ? ((r = (0, a.jsxs)(a.Fragment, { children: [e, (0, a.jsx)(et, { disabled: d, onClick: t })] })),
            (l[3] = d),
            (l[4] = t),
            (l[5] = r))
          : (r = l[5]),
        r
      )
    }
    function em(e) {
      let t = e.get(f.gM),
        r = e.get(P.g_) ?? (0, P.SE)(e.value)
      return {
        open(a) {
          a &&
            e.get(f.gM) === t &&
            (0, P.zl)(
              e,
              (0, P.SE)({
                basePath: e.value.basePath,
                directoryId: a,
                tab: "all",
                search: "",
                categories: [],
                sources: [],
              }),
              { expectedUrl: r },
            )
        },
      }
    }
    function eh(e) {
      ;(0, S.startNewConversation)(e, {
        codexAppMode: "chat",
        prefillChatGptSystemHints: ["picture_v2"],
        startInSidebar: !0,
      })
    }
    function ef(e) {
      let t,
        r,
        l,
        s,
        i = (0, n.c)(12),
        { inputRef: o } = e,
        d = (0, c.gh)(P.Qy),
        u = (0, p.A)(),
        m = (0, c.Ul)(k.wh)
      i[0] !== o || i[1] !== d
        ? ((t = (e) => {
            if (((o.current = e), null == e)) return
            let t = () => (0, H.tw)(d, { action: "CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_CANCELED" })
            return (
              e.addEventListener("cancel", t),
              () => {
                ;(e.removeEventListener("cancel", t), (o.current = null))
              }
            )
          }),
          (i[0] = o),
          (i[1] = d),
          (i[2] = t))
        : (t = i[2])
      let h = !m
      return (
        i[3] !== u
          ? ((r = u.formatMessage({ id: "libraryNext.create.upload", defaultMessage: "Upload files" })),
            (i[3] = u),
            (i[4] = r))
          : (r = i[4]),
        i[5] !== d
          ? ((l = (e) => {
              let t = Array.from(e.target.files ?? [])
              ;((e.target.value = ""), (0, H.ez)(d, t))
            }),
            (i[5] = d),
            (i[6] = l))
          : (l = i[6]),
        i[7] !== t || i[8] !== h || i[9] !== r || i[10] !== l
          ? ((s = (0, a.jsx)("input", {
              ref: t,
              className: "hidden",
              type: "file",
              disabled: h,
              multiple: !0,
              "aria-label": r,
              onChange: l,
            })),
            (i[7] = t),
            (i[8] = h),
            (i[9] = r),
            (i[10] = l),
            (i[11] = s))
          : (s = i[11]),
        s
      )
    }
  },
  drPn(e, t, r) {
    var a = r("Zlp4"),
      n = r("gwwO"),
      l = r("DTiH"),
      s = r("BchX"),
      i = r("pOSz"),
      o = r("S8cT"),
      c = r("ToS8"),
      d = r("h2FP"),
      u = r("bVeK"),
      p = r("HFg1")
    let m = {
      pages: { assets: { 16: i.s, 20: o.b } },
      meetings: { 16: c.A, 20: d.A },
      images: { 16: u.UJ6, 20: u.pYT },
      documents: { assets: { 16: l.D, 20: s.g } },
      spreadsheets: p.Q.spreadsheet,
      presentations: p.Q.presentation,
      pdfs: { assets: { 16: a.l, 20: n.e } },
    }
    r.d(t, {}, { A: m })
  },
  Q9li(e, t, r) {
    let a = (0, r("Qgfj").YK)({
      meetings: { id: "libraryNext.filters.meetings", defaultMessage: "Meetings" },
      pages: { id: "libraryNext.filters.pages", defaultMessage: "Pages" },
      uploaded: { id: "libraryNext.filters.uploaded", defaultMessage: "Uploaded" },
      generated: { id: "libraryNext.filters.generated", defaultMessage: "Generated" },
      images: { id: "libraryNext.filters.images", defaultMessage: "Images" },
      documents: { id: "libraryNext.filters.documents", defaultMessage: "Documents" },
      spreadsheets: { id: "libraryNext.filters.spreadsheets", defaultMessage: "Spreadsheets" },
      presentations: { id: "libraryNext.filters.presentations", defaultMessage: "Presentations" },
      pdfs: { id: "libraryNext.filters.pdfs", defaultMessage: "PDFs" },
    })
    r.d(t, {}, { s: a })
  },
  an5b(e, t, r) {
    var a = r("qmMi"),
      n = r("pDRe"),
      l = r("uc7r"),
      s = r("SPnB"),
      i = r("OWtl"),
      o = r("OMIV"),
      c = r("LjYy"),
      d = r("ncAw")
    let u = (0, a.un)(i.u, ({ get: e }) => {
        let t = e(s.m0)
        if ("allowed" !== t.status || !("plan" in t) || t.plan === c.x.FREE || t.plan === c.x.FREE_WORKSPACE) return []
        let r = []
        return (
          t.plan !== c.x.GO &&
            e(o.JW, "3001618585") &&
            !e(o.JW, "chatgpt-library-google-drive-entrypoints-killswitch") &&
            r.push("google_drive"),
          e(o.JW, "3224986812") && r.push("box"),
          e(o.JW, "2060455659") && r.push("dropbox"),
          (e(o.JW, "523386142") || e(o.JW, "3583034603")) && r.push("sharepoint"),
          r
        )
      }),
      p = (0, a.RD)(i.u, ({ get: e }) =>
        (0, n.ps)({
          productSku: "CONNECTOR_SETTING",
          userId: e(s.chatGptAuthenticatedUserId$),
          accountId: e(s.chatGptAuthenticatedAccountId$),
          appIds: e(u).map(d.zk),
          enabled: e(u).length > 0,
        }),
      ),
      m = (0, a.RD)(i.u, ({ get: e }) => ({
        ...(0, l.dZ)({
          accountId: e(s.chatGptAuthenticatedAccountId$),
          productSku: "CONNECTOR_SETTING",
          userId: e(s.chatGptAuthenticatedUserId$),
        }),
        enabled:
          null != e(s.chatGptAuthenticatedAccountId$) && null != e(s.chatGptAuthenticatedUserId$) && e(u).length > 0,
        refetchOnWindowFocus: "always",
      })),
      h = (0, a.un)(i.u, ({ get: e }) => {
        let t = e(u),
          r = e(p),
          a = e(m)
        return t.map((e) => {
          let t = (0, d.zk)(e),
            n = a.data?.filter((e) => e.connector_id === t)
          return {
            provider: e,
            connectorId: t,
            state: (function ({ availability: e, links: t, availabilityError: r, linksError: a }) {
              if (void 0 === e) return r ? "error" : "loading"
              if (!e?.available || "DISABLED_BY_ADMIN" === e.status) return "unavailable"
              if (void 0 === t) return a ? "error" : "loading"
              let n = t.filter((e) => "DISABLED_BY_ADMIN" !== e.connector_status && null == e.unavailable_reason)
              return n.some((e) => "ACTIVE" === e.auth_status)
                ? "connected"
                : e.installed || e.can_install
                  ? n.some((e) => "REAUTH_REQUIRED" === e.auth_status)
                    ? "reconnectable"
                    : 0 === t.length
                      ? "connectable"
                      : "unavailable"
                  : "unavailable"
            })({
              availability: void 0 === r.data ? void 0 : (r.data.find((e) => e.id === t) ?? null),
              links: n,
              availabilityError: r.isError,
              linksError: a.isError,
            }),
          }
        })
      })
    r.d(t, {}, { ZJ: p, iV: h, in: u, pA: m })
  },
  MuZX(e, t, r) {
    var a = r("yyMR"),
      n = r("ASxG"),
      l = r("SPnB"),
      s = r("T8X0"),
      i = r("yGJW"),
      o = r("Nwp9")
    let c = n.Ikc({
        accountId: n.YjP(),
        journeyId: n.YjP(),
        productExperience: n.k5n(["chat", "work"]),
        pickerShown: n.zMY().optional(),
      }),
      d = (0, o.m3)("library-provider-onboarding-journey", null, {
        coerceStoredValue: (e) => c.safeParse(e).data ?? null,
      })
    r.d(
      t,
      {},
      {
        $W: function (e, t, r, n) {
          if (null == t || e.get(l.chatGptAuthenticatedAccountId$) !== t.accountId) return
          if ("shown" === r) {
            if (t.pickerShown) return
            e.set(d, { ...t, pickerShown: !0 })
          }
          let s = "entrypoint" === r ? "entrypoint" : "picker"
          ;(null != n && (s = "provider"),
            (0, i.yy)(e, a.fQ, {
              flowCorrelationId: t.journeyId,
              referrer: `library_onboarding/home_beacon/provider_picker/${s}`,
              origin: "CHATGPT_CONNECTOR_AUTH_ORIGIN_PLUGINS",
              productExperience: t.productExperience,
              stage: {
                entrypoint: "CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED",
                shown: "CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED",
                dismissed: "CHATGPT_CONNECTOR_AUTH_STAGE_CANCELLED",
                selected: "CHATGPT_CONNECTOR_AUTH_STAGE_START_REQUESTED",
              }[r],
              surface: "picker" === s ? "CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET" : void 0,
              connectorId: n,
            }))
        },
        NE: d,
        d$: function (e, t) {
          return {
            accountId: t,
            journeyId: crypto.randomUUID(),
            productExperience: "work" === e.get(s.uI) ? "work" : "chat",
          }
        },
      },
    )
  },
  JAoj(e, t, r) {
    var a = r("ABep"),
      n = r("QosV"),
      l = r("on57"),
      s = r("UfjI")
    function i(e, t) {
      return (0, a.jsx)(
        "span",
        {
          className: (0, l.A)(
            "relative flex shrink-0 items-center justify-center",
            0 === t && "z-[3] size-[27.212px]",
            1 === t && "z-[2] size-5.5",
            2 === t && "z-[1] size-[27.212px]",
          ),
          children: (0, a.jsx)("span", {
            className: (0, l.A)(
              "flex size-5.5 items-center justify-center overflow-hidden rounded-lg border-[0.5px] border-subtle bg-surface",
              0 === t && "-rotate-16 rtl:rotate-16",
              2 === t && "rotate-16 rtl:-rotate-16",
            ),
            children: (0, a.jsx)(s._, { provider: e, size: "menuStack" }),
          }),
        },
        e,
      )
    }
    r.d(
      t,
      {},
      {
        f: function (e) {
          let t,
            r,
            l = (0, n.c)(4),
            { providers: s } = e
          return (
            l[0] !== s ? ((t = s.slice(0, 3).map(i)), (l[0] = s), (l[1] = t)) : (t = l[1]),
            l[2] !== t
              ? ((r = (0, a.jsx)("span", {
                  "aria-hidden": "true",
                  className: "isolate flex h-5 shrink-0 items-center -space-x-2.5 rtl:space-x-reverse",
                  children: t,
                })),
                (l[2] = t),
                (l[3] = r))
              : (r = l[3]),
            r
          )
        },
      },
    )
  },
  UfjI(e, t, r) {
    var a = r("ABep"),
      n = r("QosV"),
      l = r("ao0L"),
      s = r("esjC"),
      i = r("GH3B"),
      o = r("wZdk"),
      c = r("rfXw"),
      d = r("qmMi"),
      u = r("Wf1j"),
      p = r("oyxz"),
      m = r("Sm6l"),
      h = r("bqtn"),
      f = r("HOLv"),
      x = r("bVeK"),
      g = r("UxN3"),
      b = r("GOYw"),
      _ = r("jBRm"),
      y = r("HhHp"),
      I = r("O8Pw"),
      A = r("UxLW"),
      C = r("WzqN"),
      j = r("Ui6L"),
      v = r("HB7Y")
    function N(e) {
      return { id: e, provider: e }
    }
    function S(e) {
      let t,
        r = (0, n.c)(27),
        { provider: d, size: u } = e,
        p = void 0 === u ? "default" : u
      r[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            badge: "icon-xxs",
            cardBadge: "size-4",
            secondary: "icon-2xs",
            leading: "icon-leading",
            default: "icon-base",
            menuStack: "size-3.5",
            picker: "size-6",
          }),
          (r[0] = t))
        : (t = r[0])
      let m = t[p]
      switch (d) {
        case "box": {
          let e
          return (
            r[1] !== m
              ? ((e = (0, a.jsx)(b.A, { "aria-hidden": !0, className: m })), (r[1] = m), (r[2] = e))
              : (e = r[2]),
            e
          )
        }
        case "dropbox": {
          let e
          return (
            r[3] !== m
              ? ((e = (0, a.jsx)(_.A, { "aria-hidden": !0, className: m })), (r[3] = m), (r[4] = e))
              : (e = r[4]),
            e
          )
        }
        case "google_drive": {
          let e
          return (
            r[5] !== m
              ? ((e = (0, a.jsx)(y.A, { "aria-hidden": !0, className: m })), (r[5] = m), (r[6] = e))
              : (e = r[6]),
            e
          )
        }
        case "sharepoint":
          switch (p) {
            case "leading": {
              let e
              return (
                r[7] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(g.b5, { icon: { 16: x.HBt, 20: x.k3d } })), (r[7] = e))
                  : (e = r[7]),
                e
              )
            }
            case "badge": {
              let e
              return (
                r[8] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(x.t2R, {})), (r[8] = e))
                  : (e = r[8]),
                e
              )
            }
            case "cardBadge": {
              let e
              return (
                r[9] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(x.HBt, {})), (r[9] = e))
                  : (e = r[9]),
                e
              )
            }
            case "secondary": {
              let e
              return (
                r[10] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(g.bF, {
                      "aria-hidden": !0,
                      icon16: x.HBt,
                      legacyIcon: c.default,
                      legacyClassName: "icon-2xs fill-none",
                    })),
                    (r[10] = e))
                  : (e = r[10]),
                e
              )
            }
            case "menuStack": {
              let e
              return (
                r[11] !== m ? ((e = (0, a.jsx)(x.HBt, { className: m })), (r[11] = m), (r[12] = e)) : (e = r[12]),
                e
              )
            }
            case "picker": {
              let e
              return (
                r[13] !== m ? ((e = (0, a.jsx)(x.k3d, { className: m })), (r[13] = m), (r[14] = e)) : (e = r[14]),
                e
              )
            }
            case "default": {
              let e
              return (
                r[15] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(x.k3d, {})), (r[15] = e))
                  : (e = r[15]),
                e
              )
            }
          }
        case "onedrive": {
          let e, t
          if ("leading" === p) {
            let e
            return (
              r[16] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(g.b5, { icon: { assets: { 16: s.o, 20: i.l } } })), (r[16] = e))
                : (e = r[16]),
              e
            )
          }
          r[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = { badge: l.o, cardBadge: s.o, secondary: s.o, default: i.l, menuStack: s.o, picker: o.Z }),
              (r[17] = e))
            : (e = r[17])
          let n = e[p]
          return (r[18] !== n ? ((t = (0, a.jsx)(f.I, { asset: n })), (r[18] = n), (r[19] = t)) : (t = r[19]), t)
        }
        case "imanage":
          switch (p) {
            case "leading": {
              let e
              return (
                r[20] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(g.b5, { icon: { 16: x.Wq_, 20: x.rFX } })), (r[20] = e))
                  : (e = r[20]),
                e
              )
            }
            case "badge": {
              let e
              return (
                r[21] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(x.IRw, {})), (r[21] = e))
                  : (e = r[21]),
                e
              )
            }
            case "cardBadge":
            case "secondary":
            case "menuStack": {
              let e
              return (
                r[22] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(x.Wq_, {})), (r[22] = e))
                  : (e = r[22]),
                e
              )
            }
            case "picker": {
              let e
              return (
                r[23] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(x.Xvv, {})), (r[23] = e))
                  : (e = r[23]),
                e
              )
            }
            case "default": {
              let e
              return (
                r[24] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(x.rFX, {})), (r[24] = e))
                  : (e = r[24]),
                e
              )
            }
          }
        case "native":
        case "unknown": {
          let e
          return (
            r[25] !== m
              ? ((e = (0, a.jsx)(v.A, { "aria-hidden": !0, className: m })), (r[25] = m), (r[26] = e))
              : (e = r[26]),
            e
          )
        }
      }
    }
    function E(e) {
      let t,
        r,
        l = (0, n.c)(15),
        { option: s, accountNumber: i } = e,
        o = (0, u.A)()
      if (null == s.externalAccountKey || "native" === s.provider) {
        let e, t
        return (
          l[0] !== o || l[1] !== s.provider
            ? ((e = (0, j.Y)(o, s.provider)), (l[0] = o), (l[1] = s.provider), (l[2] = e))
            : (e = l[2]),
          l[3] !== e ? ((t = (0, a.jsx)(a.Fragment, { children: e })), (l[3] = e), (l[4] = t)) : (t = l[4]),
          t
        )
      }
      if (null == s.accountLabel) {
        let e, t
        return (
          l[5] !== s.provider ? ((e = (0, A.IN)(s.provider)), (l[5] = s.provider), (l[6] = e)) : (e = l[6]),
          l[7] !== i || l[8] !== e
            ? ((t = (0, a.jsx)(p.A, {
                id: "libraryPicker.sources.unnamedAccount",
                defaultMessage: "{provider} \xb7 Account {number}",
                values: { provider: e, number: i },
              })),
              (l[7] = i),
              (l[8] = e),
              (l[9] = t))
            : (t = l[9]),
          t
        )
      }
      return (
        l[10] !== s.provider ? ((t = (0, A.IN)(s.provider)), (l[10] = s.provider), (l[11] = t)) : (t = l[11]),
        l[12] !== s.accountLabel || l[13] !== t
          ? ((r = (0, a.jsx)(p.A, {
              id: "libraryPicker.sources.namedAccount",
              defaultMessage: "{provider} \xb7 {account}",
              values: { provider: t, account: s.accountLabel },
            })),
            (l[12] = s.accountLabel),
            (l[13] = t),
            (l[14] = r))
          : (r = l[14]),
        r
      )
    }
    r.d(
      t,
      {},
      {
        T: function (e) {
          let t,
            r,
            l,
            s,
            i,
            o,
            c,
            f,
            g,
            b,
            _,
            y,
            A,
            j,
            v = (0, n.c)(49),
            {
              availableProviders: T,
              availableProviderOptions: M,
              disabled: w,
              selectedProviders: R,
              selectedProviderOptionIds: O,
              onCheckedChange: P,
              onOptionCheckedChange: L,
              onOpen: U,
            } = e,
            F = (0, I.Tq)(),
            H = (0, u.A)(),
            k = (0, d.Ul)(C.y)
          if (
            (v[0] !== M || v[1] !== T ? ((t = M ?? T.map(N)), (v[0] = M), (v[1] = T), (v[2] = t)) : (t = v[2]),
            v[3] !== T ||
              v[4] !== w ||
              v[5] !== k ||
              v[6] !== H ||
              v[7] !== F ||
              v[8] !== P ||
              v[9] !== U ||
              v[10] !== L ||
              v[11] !== O ||
              v[12] !== R ||
              v[13] !== t)
          ) {
            let e, n, d
            v[25] !== k ? ((e = (e) => !k.has(e.provider)), (v[25] = k), (v[26] = e)) : (e = v[26])
            let u = t.filter(e),
              I = (O ?? R).filter((e) => u.some((t) => t.id === e))
            ;((r = h.Ab),
              (c = "end"),
              (f = "wide"),
              (g = "menu"),
              (b = w),
              (_ = "large"),
              (y = "chatgpt"),
              (l = (e) => {
                e &&
                  !w &&
                  U?.(
                    T.filter(
                      (e) => !k.has(e) && u.some((t) => t.provider === e && (!I.includes(t.id) || I.length > 1)),
                    ),
                  )
              }),
              v[27] !== H || v[28] !== F
                ? ((n = F
                    ? H.formatMessage({
                        id: "libraryPicker.sources.ariaLabel.space",
                        defaultMessage: "Filter Space sources",
                      })
                    : H.formatMessage({
                        id: "libraryPicker.sources.ariaLabel",
                        defaultMessage: "Filter Library sources",
                      })),
                  (v[27] = H),
                  (v[28] = F),
                  (v[29] = n))
                : (n = v[29]),
              v[30] === Symbol.for("react.memo_cache_sentinel")
                ? ((d = (0, a.jsx)(x.IR, {})), (v[30] = d))
                : (d = v[30]),
              v[31] !== w || v[32] !== n
                ? ((s = (0, a.jsx)(m.$, {
                    "aria-label": n,
                    color: "ghost",
                    disabled: w,
                    radius: "full",
                    size: "inputIcon",
                    type: "button",
                    children: d,
                  })),
                  (v[31] = w),
                  (v[32] = n),
                  (v[33] = s))
                : (s = v[33]),
              v[34] === Symbol.for("react.memo_cache_sentinel")
                ? ((i = (0, a.jsx)(h.ms.SectionLabel, {
                    children: (0, a.jsx)(p.A, { id: "libraryPicker.sources.label", defaultMessage: "Sources" }),
                  })),
                  (v[34] = i))
                : (i = v[34]),
              (o = u.map((e) => {
                let { provider: t } = e,
                  r = I.includes(e.id)
                return (0, a.jsx)(
                  h.ms.CheckboxItem,
                  {
                    checked: r,
                    disabled: w || (r && 1 === I.length),
                    indicator: "switch",
                    leftIcon: (0, a.jsx)(S, { provider: t }),
                    onCheckedChange: (r) => (null == L ? P(t, !0 === r) : L(e, !0 === r)),
                    children: (0, a.jsx)(E, {
                      option: e,
                      accountNumber: u.filter((e) => e.provider === t).indexOf(e) + 1,
                    }),
                  },
                  e.id,
                )
              })),
              (v[3] = T),
              (v[4] = w),
              (v[5] = k),
              (v[6] = H),
              (v[7] = F),
              (v[8] = P),
              (v[9] = U),
              (v[10] = L),
              (v[11] = O),
              (v[12] = R),
              (v[13] = t),
              (v[14] = r),
              (v[15] = l),
              (v[16] = s),
              (v[17] = i),
              (v[18] = o),
              (v[19] = c),
              (v[20] = f),
              (v[21] = g),
              (v[22] = b),
              (v[23] = _),
              (v[24] = y))
          } else
            ((r = v[14]),
              (l = v[15]),
              (s = v[16]),
              (i = v[17]),
              (o = v[18]),
              (c = v[19]),
              (f = v[20]),
              (g = v[21]),
              (b = v[22]),
              (_ = v[23]),
              (y = v[24]))
          return (
            v[35] !== i || v[36] !== o
              ? ((A = (0, a.jsxs)("div", { children: [i, o] })), (v[35] = i), (v[36] = o), (v[37] = A))
              : (A = v[37]),
            v[38] !== r ||
            v[39] !== l ||
            v[40] !== s ||
            v[41] !== A ||
            v[42] !== c ||
            v[43] !== f ||
            v[44] !== g ||
            v[45] !== b ||
            v[46] !== _ ||
            v[47] !== y
              ? ((j = (0, a.jsx)(r, {
                  align: c,
                  contentMaxWidth: f,
                  contentWidth: g,
                  disabled: b,
                  size: _,
                  surface: y,
                  onOpenChange: l,
                  triggerButton: s,
                  children: A,
                })),
                (v[38] = r),
                (v[39] = l),
                (v[40] = s),
                (v[41] = A),
                (v[42] = c),
                (v[43] = f),
                (v[44] = g),
                (v[45] = b),
                (v[46] = _),
                (v[47] = y),
                (v[48] = j))
              : (j = v[48]),
            j
          )
        },
        _: S,
      },
    )
  },
  Hu8z(e, t, r) {
    r.d(t, { SlateSpaceCreateMenu: () => ea })
    var a = r("ABep"),
      n = r("QosV"),
      l = r("SRBo"),
      s = r("QBk8"),
      i = r("hwkA"),
      o = r("slpy"),
      c = r("ESTr")
    let d = (0, c.a)({
        name: "page-text-badge-plus-light-16",
        canvas: {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 2.474609, y: 1.807861, width: 11.916016, height: 13.568359 },
          visualBounds: { x: 2.474609, y: 1.807861, width: 11.916016, height: 13.568359 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 2.474609, y: 1.807861, width: 11.916016, height: 13.568359 },
          center: { x: 8.432617, y: 8.592041 },
          insets: { top: 1.807861, right: 1.609375, bottom: 0.62378, left: 2.474609 },
          anchors: {
            frame: { x: 8, y: 8 },
            ink: { x: 8.432617, y: 8.592041 },
            foreground: { x: 8.432617, y: 8.592041 },
          },
        },
        capabilities: ["icon"],
        body: '<path d="M11.8652 10.3254C12.1551 10.3254 12.3905 10.561 12.3906 10.8508V12.3254H13.8652C14.1551 12.3254 14.3905 12.561 14.3906 12.8508C14.3906 13.1408 14.1552 13.3762 13.8652 13.3762H12.3906V14.8508C12.3906 15.1408 12.1552 15.3762 11.8652 15.3762C11.5753 15.3762 11.3398 15.1408 11.3398 14.8508V13.3762H9.86523C9.57528 13.3762 9.33984 13.1408 9.33984 12.8508C9.34001 12.561 9.57539 12.3254 9.86523 12.3254H11.3398V10.8508C11.34 10.561 11.5754 10.3254 11.8652 10.3254Z" fill="currentColor"/> <path d="M11.1338 1.80786C12.4543 1.80811 13.5251 2.87894 13.5254 4.19946V8.02075C13.5252 8.31058 13.2899 8.54517 13 8.54517C12.7101 8.54517 12.4748 8.31058 12.4746 8.02075V4.19946C12.4744 3.45884 11.8744 2.85889 11.1338 2.85864H4.86621C4.12559 2.85889 3.52564 3.45884 3.52539 4.19946V11.8C3.52546 12.5408 4.12548 13.1416 4.86621 13.1418H7.00098C7.2908 13.1419 7.52619 13.3765 7.52637 13.6663C7.52637 13.9562 7.29091 14.1916 7.00098 14.1917H4.86621C3.54558 14.1914 2.47468 13.1207 2.47461 11.8V4.19946C2.47485 2.87894 3.54569 1.80811 4.86621 1.80786H11.1338Z" fill="currentColor"/> <path d="M8.66699 8.80786C8.95679 8.80804 9.19141 9.04341 9.19141 9.33325C9.1914 9.62309 8.95679 9.85847 8.66699 9.85864H6C5.71006 9.85864 5.47462 9.62319 5.47461 9.33325C5.47461 9.0433 5.71005 8.80786 6 8.80786H8.66699Z" fill="currentColor"/> <path d="M10 6.14087C10.2898 6.14087 10.5252 6.37646 10.5254 6.66626C10.5254 6.95621 10.2899 7.19165 10 7.19165H6C5.71005 7.19165 5.47461 6.95621 5.47461 6.66626C5.47478 6.37646 5.71016 6.14087 6 6.14087H10Z" fill="currentColor"/>',
      }),
      u = (0, c.a)({
        name: "page-text-badge-plus-light-20",
        canvas: {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          frame: { x: 0, y: 0, width: 20, height: 20 },
          inkBounds: { x: 3.084961, y: 2.251709, width: 14.913086, height: 16.977539 },
          visualBounds: { x: 3.084961, y: 2.251709, width: 14.913086, height: 16.977539 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 3.084961, y: 2.251709, width: 14.913086, height: 16.977539 },
          center: { x: 10.541504, y: 10.740479 },
          insets: { top: 2.251709, right: 2.001953, bottom: 0.770752, left: 3.084961 },
          anchors: {
            frame: { x: 10, y: 10 },
            ink: { x: 10.541504, y: 10.740479 },
            foreground: { x: 10.541504, y: 10.740479 },
          },
        },
        capabilities: ["icon"],
        body: '<path d="M14.833 12.8992C15.2003 12.8992 15.498 13.1969 15.498 13.5642V15.3992H17.333C17.7003 15.3992 17.998 15.6969 17.998 16.0642C17.998 16.4314 17.7003 16.7292 17.333 16.7292H15.498V18.5642C15.498 18.9314 15.2003 19.2292 14.833 19.2292C14.4658 19.2292 14.168 18.9314 14.168 18.5642V16.7292H12.333C11.9658 16.7292 11.668 16.4314 11.668 16.0642C11.668 15.6969 11.9657 15.3992 12.333 15.3992H14.168V13.5642C14.168 13.1969 14.4657 12.8992 14.833 12.8992Z" fill="currentColor"/> <path d="M13.917 2.25171C15.5727 2.25188 16.9149 3.59408 16.915 5.24976V10.0261C16.9149 10.3932 16.6172 10.6912 16.25 10.6912C15.8828 10.6912 15.5851 10.3932 15.585 10.0261V5.24976C15.5848 4.32862 14.8381 3.58196 13.917 3.58179H6.08301C5.16187 3.58196 4.41522 4.32862 4.41504 5.24976V14.7498C4.41504 15.671 5.16176 16.4185 6.08301 16.4187H8.75098C9.11825 16.4187 9.41602 16.7165 9.41602 17.0837C9.41584 17.4509 9.11814 17.7488 8.75098 17.7488H6.08301C4.42722 17.7486 3.08496 16.4056 3.08496 14.7498V5.24976C3.08514 3.59408 4.42733 2.25188 6.08301 2.25171H13.917Z" fill="currentColor"/> <path d="M10.833 11.0017C11.2003 11.0017 11.498 11.2995 11.498 11.6667C11.498 12.034 11.2003 12.3318 10.833 12.3318H7.5C7.13273 12.3318 6.83496 12.034 6.83496 11.6667C6.83497 11.2995 7.13274 11.0017 7.5 11.0017H10.833Z" fill="currentColor"/> <path d="M12.5 7.6687C12.8673 7.6687 13.165 7.96647 13.165 8.33374C13.1649 8.70086 12.8672 8.99878 12.5 8.99878H7.5C7.13284 8.99878 6.83513 8.70086 6.83496 8.33374C6.83496 7.96647 7.13273 7.6687 7.5 7.6687H12.5Z" fill="currentColor"/>',
      })
    var p = r("cfIb"),
      m = r("hLIK"),
      h = r("lrnk"),
      f = r("ITLH"),
      x = r("R3Ai"),
      g = r("gWFW"),
      b = r("qmMi"),
      _ = r("zd8w"),
      y = r("Wf1j"),
      I = r("oyxz"),
      A = r("Ywss"),
      C = r("XpTL"),
      j = r("E8Sp"),
      v = r("cyb2"),
      N = r("RaBo"),
      S = r("SPnB"),
      E = r("CKur"),
      T = r("Sm6l"),
      M = r("bqtn"),
      w = r("bVeK"),
      R = r("Bbed"),
      O = r("UxN3"),
      P = r("SGsN"),
      L = r("Q8aV"),
      U = r("V080"),
      F = r("jU86"),
      H = r("vGxR")
    r("H7Ld")
    var k = r("yGJW"),
      D = r("OWtl"),
      G = r("BiIz"),
      B = r("b5fQ"),
      z = r("hZax"),
      V = r("OMIV"),
      Y = r("n8vi"),
      Q = r("OoIX"),
      W = r("vWM6"),
      $ = r("rpnz"),
      Z = r("e1xH"),
      q = r("F0H9"),
      J = r("cGnj"),
      K = r("cGL0"),
      X = r("tv8P")
    r("NnV7")
    var ee = r("SEOK"),
      et = r("xicS")
    let er = (0, R._)(
      async () => (await Promise.all([r.e(468076), r.e(693715)]).then(r.bind(r, "yXWI"))).NewTeamSpaceDialog,
    )
    function ea(e) {
      let t,
        r,
        l,
        s = (0, n.c)(26),
        { action: c, alwaysShowMenu: d, parentFolderId: u, renderAction: p, onSidebarShortcutClick: m } = e,
        h = void 0 === c ? "menu" : c,
        f = void 0 !== d && d,
        x = (0, b.Ul)(null != u ? H.hv : null),
        g = null != u && (x?.directoryId !== u || !0 === x.isRoot)
      if ("sidebar-header" === h || "sidebar" === h) {
        let e
        return (
          s[0] !== h || s[1] !== f
            ? ((e = (0, a.jsx)(q.HZ, {
                children: (e) =>
                  (0, a.jsx)(en, { inHeader: "sidebar-header" === h, alwaysShowMenu: f, onImportNotion: e }),
              })),
              (s[0] = h),
              (s[1] = f),
              (s[2] = e))
            : (e = s[2]),
          e
        )
      }
      if ("menu" === h) {
        let e, t
        return (
          s[3] !== g || s[4] !== u
            ? ((e = (e) => (0, a.jsx)(ed, { ...e, folder: null != u, hidden: g })), (s[3] = g), (s[4] = u), (s[5] = e))
            : (e = s[5]),
          s[6] !== u || s[7] !== e
            ? ((t = (0, a.jsx)(el, { parentFolderId: u, renderAction: e })), (s[6] = u), (s[7] = e), (s[8] = t))
            : (t = s[8]),
          t
        )
      }
      s[9] !== h || s[10] !== m || s[11] !== p
        ? ((t =
            p ??
            ((e) =>
              (function ({ action: e, onSidebarShortcutClick: t, onIntent: r, ...n }) {
                let l = {
                  sheets: (0, a.jsx)(I.A, { id: "space.create.primary.sheet", defaultMessage: "New sheet" }),
                  slides: (0, a.jsx)(I.A, { id: "space.create.primary.presentation", defaultMessage: "New slides" }),
                  sites: (0, a.jsx)(I.A, { id: "space.create.primary.site", defaultMessage: "Create Site" }),
                  images: (0, a.jsx)(I.A, { id: "space.create.primary.image", defaultMessage: "Create image" }),
                  pages: (0, a.jsx)(I.A, { id: "space.create.primary.page", defaultMessage: "New page" }),
                }[e]
                return null != t
                  ? (0, a.jsx)(o.m, {
                      content: l,
                      children: (0, a.jsxs)(i.$, {
                        color: "secondary",
                        variant: "transparent",
                        size: "3xs",
                        uniform: !0,
                        onFocus: r,
                        onPointerEnter: r,
                        onPointerDown: r,
                        ...n,
                        onClick: () => {
                          ;(t(), n.onClick())
                        },
                        children: [(0, a.jsx)(w.xFs, {}), (0, a.jsx)("span", { className: "sr-only", children: l })],
                      }),
                    })
                  : (0, a.jsxs)(T.$, {
                      color: "primary",
                      size: "pageAction",
                      uniformAtMobile: !0,
                      onFocus: r,
                      onPointerEnter: r,
                      onPointerDown: r,
                      ...n,
                      children: [
                        (0, a.jsx)(w.ONy, { className: "hidden browser:max-md:block" }),
                        (0, a.jsx)("span", { className: "browser:max-md:sr-only", children: l }),
                      ],
                    })
              })({ ...e, action: h, onSidebarShortcutClick: m }))),
          (s[9] = h),
          (s[10] = m),
          (s[11] = p),
          (s[12] = t))
        : (t = s[12])
      let _ = t
      if ("images" === h) {
        let e
        return (s[13] !== _ ? ((e = (0, a.jsx)(ei, { renderAction: _ })), (s[13] = _), (s[14] = e)) : (e = s[14]), e)
      }
      if ("sites" === h) {
        let e
        return (s[15] !== _ ? ((e = (0, a.jsx)(ec, { renderAction: _ })), (s[15] = _), (s[16] = e)) : (e = s[16]), e)
      }
      if ("slides" === h || "sheets" === h) {
        let e,
          t = "slides" === h ? "granola_presentation" : "granola_workbook"
        return (
          s[17] !== _ || s[18] !== t
            ? ((e = (0, a.jsx)(es, { documentType: t, renderAction: _ })), (s[17] = _), (s[18] = t), (s[19] = e))
            : (e = s[19]),
          e
        )
      }
      return (
        s[20] !== g || s[21] !== _
          ? ((r = (e) => (g ? (0, a.jsx)(a.Fragment, {}) : _(e))), (s[20] = g), (s[21] = _), (s[22] = r))
          : (r = s[22]),
        s[23] !== u || s[24] !== r
          ? ((l = (0, a.jsx)(el, { parentFolderId: u, renderAction: r })), (s[23] = u), (s[24] = r), (s[25] = l))
          : (l = s[25]),
        l
      )
    }
    function en(e) {
      let t,
        r,
        l = (0, n.c)(23),
        { inHeader: s, alwaysShowMenu: c, onImportNotion: h } = e,
        f = (0, _.useRef)(null),
        x = (0, b.Ul)(S.chatGptAuthenticatedAccountId$),
        g = (0, b.Ul)(S.chatGptAuthenticatedUserId$),
        A = (0, y.A)(),
        C = (0, b.Ul)(Z.CY)
      l[0] !== s || l[1] !== A
        ? ((t = A.formatMessage(
            s
              ? {
                  id: "space.sidebar.create",
                  defaultMessage: "Create",
                  description:
                    "Short label for the Space sidebar button that opens a menu of content creation options, including Pages and Slides",
                }
              : {
                  id: "space.sidebar.createMenu",
                  defaultMessage: "Create new",
                  description: "Open all content creation choices from the Space sidebar",
                },
          )),
          (l[0] = s),
          (l[1] = A),
          (l[2] = t))
        : (t = l[2])
      let j = t
      if ((s || c) && null == x) return null
      if (null != x && (s || c || C || null != h)) {
        let e, t, r, n, i, c, d
        l[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = { assets: { 16: p.J, 20: m.M } }), (l[3] = e))
          : (e = l[3])
        let u = e
        l[4] !== s || l[5] !== j
          ? ((t = s
              ? (0, a.jsx)(o.m, {
                  content: j,
                  children: (0, a.jsx)(G.sH, {
                    ref: f,
                    "aria-label": j,
                    uniform: !0,
                    children: (0, a.jsx)(O.b5, { icon: u }),
                  }),
                })
              : (0, a.jsx)(B.jl, {
                  ref: f,
                  iconAssetSource: u,
                  label: (0, a.jsx)(I.A, { id: "space.sidebar.create", defaultMessage: "Create" }),
                })),
            (l[4] = s),
            (l[5] = j),
            (l[6] = t))
          : (t = l[6])
        let _ = t
        return (
          l[7] !== x || l[8] !== g
            ? ((r = { accountId: x, userId: g }), (l[7] = x), (l[8] = g), (l[9] = r))
            : (r = l[9]),
          l[10] === Symbol.for("react.memo_cache_sentinel") ? ((n = {}), (l[10] = n)) : (n = l[10]),
          l[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, F.ER)("/space", "", "/space")), (l[11] = i))
            : (i = l[11]),
          l[12] !== s || l[13] !== _ || l[14] !== h
            ? ((c = (0, a.jsx)(b.Ui, {
                scope: F.vn,
                value: n,
                children: (0, a.jsx)(b.Ui, {
                  scope: F.Qy,
                  value: i,
                  children: (0, a.jsx)(el, {
                    renderAction: (e) =>
                      (0, a.jsx)(ed, {
                        ...e,
                        showHeading: !s,
                        triggerButtonRef: f,
                        triggerButton: _,
                        onImportNotion: h,
                      }),
                  }),
                }),
              })),
              (l[12] = s),
              (l[13] = _),
              (l[14] = h),
              (l[15] = c))
            : (c = l[15]),
          l[16] !== r || l[17] !== c
            ? ((d = (0, a.jsx)(b.Ui, { scope: F.oD, value: r, children: c })), (l[16] = r), (l[17] = c), (l[18] = d))
            : (d = l[18]),
          d
        )
      }
      return (
        l[19] !== x || l[20] !== j || l[21] !== g
          ? ((r = (0, a.jsx)(el, {
              renderAction: (e) => {
                let { onIntent: t, ...r } = e
                return (0, a.jsx)(B.jl, {
                  className: "group",
                  excludeFromNavigation: !0,
                  onFocus: t,
                  onPointerEnter: t,
                  onPointerDown: t,
                  iconAssetSource: { assets: { 16: d, 20: u } },
                  label: (0, a.jsx)(I.A, { id: "space.sidebar.newPage", defaultMessage: "New page" }),
                  ...r,
                  interactiveTrailing:
                    null != x
                      ? (0, a.jsx)(b.Ui, {
                          scope: F.oD,
                          value: { accountId: x, userId: g },
                          children: (0, a.jsx)(b.Ui, {
                            scope: F.vn,
                            value: {},
                            children: (0, a.jsx)(b.Ui, {
                              scope: F.Qy,
                              value: (0, F.ER)("/space", "", "/space"),
                              children: (0, a.jsx)(ed, {
                                ...r,
                                onIntent: t,
                                showHeading: !0,
                                triggerButtonRef: f,
                                triggerButton: (0, a.jsx)(i.$, {
                                  ref: f,
                                  className:
                                    "pointer-events-none opacity-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100 data-[state=open]:pointer-events-auto data-[state=open]:opacity-100 any-pointer-coarse:pointer-events-auto any-pointer-coarse:opacity-100",
                                  color: "secondary",
                                  variant: "transparent",
                                  size: "3xs",
                                  uniform: !0,
                                  "aria-label": j,
                                  children: (0, a.jsx)(w.l0Y, {}),
                                }),
                              }),
                            }),
                          }),
                        })
                      : null,
                })
              },
            })),
            (l[19] = x),
            (l[20] = j),
            (l[21] = g),
            (l[22] = r))
          : (r = l[22]),
        r
      )
    }
    function el(e) {
      let t,
        r,
        a = (0, n.c)(11),
        { parentFolderId: l, renderAction: s } = e,
        i = (0, b.gh)(D.u),
        o = (0, y.A)(),
        c = (0, A.Zp)(),
        d = (0, A.zy)(),
        u = (0, b.Ul)($.ut),
        p = (0, b._U)(Q.m2, void 0)
      a[0] !== o || a[1] !== d || a[2] !== c || a[3] !== l || a[4] !== i
        ? ((t = () => {
            let e = performance.now()
            if (!(0, Q.pF)(i)) return
            let t = i.get(X.spaceAccountId$),
              r = (0, Y.startSpacePageCreation)(i, { deferUntilEdited: !0, parentFolderId: l, typingStartedAtMs: e })
            ;(c(`/space/${r.pageId}`, { state: { ...(0, ee.$)(d, t, r.pageId), focusPageTitle: !0 } }),
              r.completion.catch((e) => {
                ;(e instanceof DOMException && "AbortError" === e.name) ||
                  (i.get(X.spaceAccountId$) === t &&
                    i.get(j.gM).pathname === `/space/${r.pageId}` &&
                    i
                      .get(P.Id)
                      .danger(
                        o.formatMessage({
                          id: "codex.space.page.createError",
                          defaultMessage: "Could not create page",
                        }),
                        { errorAnalytics: { toastId: "codex.space.page.createError" } },
                      ))
              }))
          }),
          (a[0] = o),
          (a[1] = d),
          (a[2] = c),
          (a[3] = l),
          (a[4] = i),
          (a[5] = t))
        : (t = a[5])
      let m = t,
        h = u || null != p,
        f = h ? void 0 : W.o
      return (
        a[6] !== m || a[7] !== h || a[8] !== s || a[9] !== f
          ? ((r = s({ disabled: h, onIntent: f, onClick: m })),
            (a[6] = m),
            (a[7] = h),
            (a[8] = s),
            (a[9] = f),
            (a[10] = r))
          : (r = a[10]),
        r
      )
    }
    function es(e) {
      let t,
        r,
        a = (0, n.c)(7),
        { documentType: l, renderAction: s } = e,
        i = (0, b.gh)(D.u),
        o = (0, b.Ul)($.ut),
        c = (0, b._U)(Q.m2, void 0),
        d = (0, b._U)(Z.H6, l),
        u = o || null != c || !d
      return (
        a[0] !== l || a[1] !== i ? ((t = () => void (0, K.Y)(i, l)), (a[0] = l), (a[1] = i), (a[2] = t)) : (t = a[2]),
        a[3] !== s || a[4] !== u || a[5] !== t
          ? ((r = s({ disabled: u, onClick: t })), (a[3] = s), (a[4] = u), (a[5] = t), (a[6] = r))
          : (r = a[6]),
        r
      )
    }
    function ei(e) {
      let t,
        r,
        a = (0, n.c)(6),
        { renderAction: l } = e,
        s = (0, b.gh)(D.u),
        i = !(0, b.Ul)(E.BA).data?.some(eo)
      return (
        a[0] !== s
          ? ((t = () =>
              (0, L.startNewConversation)(s, {
                codexAppMode: "chat",
                prefillChatGptSystemHints: ["picture_v2"],
                startInSidebar: !0,
                selectChat: !0,
              })),
            (a[0] = s),
            (a[1] = t))
          : (t = a[1]),
        a[2] !== l || a[3] !== i || a[4] !== t
          ? ((r = l({ disabled: i, onClick: t })), (a[2] = l), (a[3] = i), (a[4] = t), (a[5] = r))
          : (r = a[5]),
        r
      )
    }
    function eo(e) {
      return "picture_v2" === e.system_hint
    }
    function ec(e) {
      let t,
        r,
        a = (0, n.c)(7),
        { renderAction: l } = e,
        s = (0, b.gh)(D.u),
        i = (0, y.A)(),
        o = "available" !== (0, b.Ul)(N.ND)
      return (
        a[0] !== i || a[1] !== s
          ? ((t = () => {
              ;((0, v.Q_)(s, {
                action: v.lX.CODEX_APPGEN_INTERACTION_ACTION_CREATE_SITE_CLICKED,
                source: v.Mz.CODEX_APPGEN_INTERACTION_SOURCE_SITES,
              }),
                ep(s, (0, C.D)(i, "site")))
            }),
            (a[0] = i),
            (a[1] = s),
            (a[2] = t))
          : (t = a[2]),
        a[3] !== l || a[4] !== o || a[5] !== t
          ? ((r = l({ disabled: o, onClick: t })), (a[3] = l), (a[4] = o), (a[5] = t), (a[6] = r))
          : (r = a[6]),
        r
      )
    }
    function ed(e) {
      let t,
        r,
        i,
        o,
        c,
        d,
        u,
        p,
        m,
        j,
        S,
        E,
        T,
        R,
        P,
        L,
        H,
        D,
        G,
        B,
        Y,
        Q,
        W,
        q = (0, n.c)(80),
        {
          folder: ee,
          hidden: ea,
          disabled: en,
          onIntent: el,
          onClick: es,
          showHeading: ei,
          triggerButton: eo,
          triggerButtonRef: ec,
          onImportNotion: ed,
        } = e,
        em = void 0 !== ee && ee,
        eh = void 0 !== ea && ea,
        ef = (0, b.gh)(F.vn),
        ex = (0, A.zy)(),
        eg = (0, y.A)(),
        eb = (0, b.Ul)(Z.CY),
        e_ = (0, b.Ul)($.ut),
        ey = (0, b._U)(Z.H6, "granola_whiteboard"),
        eI = (0, b._U)(Z.H6, "granola_workbook"),
        eA = (0, b._U)(Z.H6, "granola_presentation"),
        eC = (0, b.Ul)(N.ND),
        ej = (0, b.Ul)(!1),
        ev = (0, z.Zj)("3531012613"),
        eN = (0, z.Zj)("183803860"),
        eS = ev || eN
      q[0] !== ef
        ? ((t = () => {
            ef.get(V.JW, "3531012613") &&
              (0, l.wr)()
                .then((e) => e(ef))
                .catch(eu)
          }),
          (q[0] = ef),
          (q[1] = t))
        : (t = q[1])
      let eE = t,
        [eT, eM] = (0, _.useState)(null),
        [ew, eR] = (0, _.useState)(!1),
        eO = (0, _.useRef)(null),
        eP = (0, b.Ul)(X.spaceAccountId$)
      q[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, a.jsx)(I.A, { id: "space.create.comingSoon", defaultMessage: "Coming soon" })), (q[2] = r))
        : (r = q[2])
      let eL = r
      q[3] !== eb || q[4] !== em
        ? ((i = eb && !em ? (0, a.jsx)(I.A, { id: "space.create.label", defaultMessage: "Create" }) : void 0),
          (q[3] = eb),
          (q[4] = em),
          (q[5] = i))
        : (i = q[5])
      let eU = em ? void 0 : e_,
        eF = em || (void 0 !== ei && ei),
        eH = null == eP
      ;(q[6] === Symbol.for("react.memo_cache_sentinel") ? ((o = () => eR(!0)), (q[6] = o)) : (o = q[6]),
        q[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(O.b5, { icon: { 16: w.i2, 20: w.hmv } })),
            (d = (0, a.jsx)(I.A, { id: "space.create.teamSpace", defaultMessage: "Space" })),
            (q[7] = c),
            (q[8] = d))
          : ((c = q[7]), (d = q[8])),
        q[9] !== eH
          ? ((u = (0, a.jsx)(M.ms.Item, { disabled: eH, onSelect: o, leftIcon: c, children: d })),
            (q[9] = eH),
            (q[10] = u))
          : (u = q[10]),
        q[11] !== ed
          ? ((p =
              null != ed
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(M.ms.Separator, {}),
                      (0, a.jsx)(M.ms.Item, {
                        onSelect: ed,
                        leftIcon: (0, a.jsx)(O.b5, { icon: { 16: w.MxM, 20: w.vHO } }),
                        children: (0, a.jsx)(I.A, { ...J.V.action }),
                      }),
                    ],
                  })
                : null),
            (q[11] = ed),
            (q[12] = p))
          : (p = q[12]),
        q[13] !== u || q[14] !== p
          ? ((m = (0, a.jsxs)(a.Fragment, { children: [u, p] })), (q[13] = u), (q[14] = p), (q[15] = m))
          : (m = q[15]),
        q[16] !== es || q[17] !== eh || q[18] !== el || q[19] !== en
          ? ((j = eh
              ? void 0
              : {
                  key: "page",
                  disabled: en,
                  onIntent: el,
                  onSelect: es,
                  leftIcon: (0, a.jsx)(O.b5, { icon: { 16: w.oQS, 20: w.hXV } }),
                  label: (0, a.jsx)(I.A, { id: "space.list.newPage", defaultMessage: "Page" }),
                }),
            (q[16] = es),
            (q[17] = eh),
            (q[18] = el),
            (q[19] = en),
            (q[20] = j))
          : (j = q[20]))
      let ek = !eI || en,
        eD = eI ? void 0 : eL
      ;(q[21] !== ef ? ((S = () => void (0, K.Y)(ef, "granola_workbook")), (q[21] = ef), (q[22] = S)) : (S = q[22]),
        q[23] !== ek || q[24] !== eD || q[25] !== S
          ? ((E = { disabled: ek, rightText: eD, onSelect: S }), (q[23] = ek), (q[24] = eD), (q[25] = S), (q[26] = E))
          : (E = q[26]))
      let eG = !eA || en,
        eB = eA ? void 0 : eL
      return (
        q[27] !== ef ? ((T = () => void (0, K.Y)(ef, "granola_presentation")), (q[27] = ef), (q[28] = T)) : (T = q[28]),
        q[29] !== eG || q[30] !== eB || q[31] !== T
          ? ((R = { disabled: eG, rightText: eB, onSelect: T }), (q[29] = eG), (q[30] = eB), (q[31] = T), (q[32] = R))
          : (R = q[32]),
        q[33] !== ev || q[34] !== ex || q[35] !== eE || q[36] !== ef || q[37] !== eS
          ? ((P = eS
              ? (0, a.jsx)(M.ms.Item, {
                  onPointerEnter: eE,
                  onFocus: eE,
                  onSelect: () => {
                    let e = performance.now()
                    ;((0, k.yy)(ef, s.CodexSpacesTemplateGallery, {
                      action: s.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_OPEN_REQUESTED,
                    }),
                      eM({
                        openedAt: e,
                        initialGroupId: (function (e, t) {
                          let r = new URL(e, "https://chatgpt.com")
                          if ("/space" !== r.pathname && !r.pathname.startsWith("/space/")) return
                          let a = r.searchParams,
                            n = a.getAll("category"),
                            l = a.get("view"),
                            s = 1 === n.length ? n[0] : null
                          switch (
                            ("/space/sites" === r.pathname ||
                            r.pathname.startsWith("/space/sites/") ||
                            "sites" === a.get("artifact")
                              ? (s = "sites")
                              : null != l && ["slides", "images", "sites"].includes(l)
                                ? (s = l)
                                : "images" === a.get("tab") && (s = "images"),
                            s)
                          ) {
                            case "pages":
                              return "page"
                            case "slides":
                            case "presentations":
                              return "presentation"
                            case "spreadsheets":
                              return "spreadsheet"
                            case "images":
                              return t ? "images" : void 0
                            case "sites":
                              return t ? "site" : void 0
                            default:
                              return
                          }
                        })(ef.get(F.g_) ?? ex.pathname + ex.search, ev),
                      }))
                  },
                  leftIcon: (0, a.jsx)(O.b5, { icon: { assets: { 16: h.x, 20: f.A } } }),
                  children: (0, a.jsx)(I.A, { id: "space.create.templates", defaultMessage: "Start from template" }),
                })
              : null),
            (q[33] = ev),
            (q[34] = ex),
            (q[35] = eE),
            (q[36] = ef),
            (q[37] = eS),
            (q[38] = P))
          : (P = q[38]),
        q[39] !== ey || q[40] !== e_ || q[41] !== en || q[42] !== ef
          ? ((L = ey
              ? [
                  {
                    key: "canvas",
                    disabled: e_ || en,
                    onSelect: () => void (0, K.Y)(ef, "granola_whiteboard"),
                    leftIcon: (0, a.jsx)(O.b5, { icon: { assets: { 16: x.O, 20: g.V } } }),
                    label: (0, a.jsx)(I.A, { id: "space.create.canvas", defaultMessage: "Canvas" }),
                  },
                ]
              : []),
            (q[39] = ey),
            (q[40] = e_),
            (q[41] = en),
            (q[42] = ef),
            (q[43] = L))
          : (L = q[43]),
        q[44] !== ej || q[45] !== eg || q[46] !== ef
          ? ((H = []), (q[44] = ej), (q[45] = eg), (q[46] = ef), (q[47] = H))
          : (H = q[47]),
        q[48] !== eg || q[49] !== ef || q[50] !== eC
          ? ((D =
              "available" === eC
                ? [
                    {
                      key: "site",
                      onSelect: () => {
                        ;((0, v.Q_)(ef, {
                          action: v.lX.CODEX_APPGEN_INTERACTION_ACTION_CREATE_SITE_CLICKED,
                          source: v.Mz.CODEX_APPGEN_INTERACTION_SOURCE_SITES,
                        }),
                          ep(ef, (0, C.D)(eg, "site")))
                      },
                      leftIcon: (0, a.jsx)(O.b5, { icon: { 16: w.q_r, 20: w.pKn } }),
                      label: (0, a.jsx)(I.A, { id: "space.create.site", defaultMessage: "Site" }),
                    },
                  ]
                : []),
            (q[48] = eg),
            (q[49] = ef),
            (q[50] = eC),
            (q[51] = D))
          : (D = q[51]),
        q[52] !== L || q[53] !== H || q[54] !== D
          ? ((G = [...L, ...H, ...D]), (q[52] = L), (q[53] = H), (q[54] = D), (q[55] = G))
          : (G = q[55]),
        q[56] !== ev ||
        q[57] !== em ||
        q[58] !== m ||
        q[59] !== j ||
        q[60] !== E ||
        q[61] !== R ||
        q[62] !== P ||
        q[63] !== G ||
        q[64] !== i ||
        q[65] !== eU ||
        q[66] !== eF ||
        q[67] !== eo ||
        q[68] !== ec
          ? ((B = (0, a.jsx)(U.Rr, {
              variant: "space",
              label: i,
              compactOnMobile: em,
              disabled: eU,
              showHeading: eF,
              triggerButton: eo,
              triggerButtonRef: ec,
              triggerRef: eO,
              containerCreationItems: m,
              pageCreationItem: j,
              spreadsheetAction: E,
              presentationAction: R,
              templatesFirst: ev,
              templateCreationItem: P,
              additionalCreationItems: G,
            })),
            (q[56] = ev),
            (q[57] = em),
            (q[58] = m),
            (q[59] = j),
            (q[60] = E),
            (q[61] = R),
            (q[62] = P),
            (q[63] = G),
            (q[64] = i),
            (q[65] = eU),
            (q[66] = eF),
            (q[67] = eo),
            (q[68] = ec),
            (q[69] = B))
          : (B = q[69]),
        q[70] !== ew || q[71] !== ec
          ? ((Y =
              ew &&
              (0, a.jsx)(er, {
                onClose: () => eR(!1),
                onCloseAutoFocus: (e) => {
                  ;(e.preventDefault(), (ec ?? eO).current?.focus({ preventScroll: !0 }))
                },
              })),
            (q[70] = ew),
            (q[71] = ec),
            (q[72] = Y))
          : (Y = q[72]),
        q[73] !== eT || q[74] !== eS
          ? ((Q =
              eS && null != eT
                ? (0, a.jsx)(et.SpaceTemplateGalleryDialog, {
                    openedAt: eT.openedAt,
                    initialGroupId: eT.initialGroupId,
                    onClose: () => eM(null),
                  })
                : null),
            (q[73] = eT),
            (q[74] = eS),
            (q[75] = Q))
          : (Q = q[75]),
        q[76] !== B || q[77] !== Y || q[78] !== Q
          ? ((W = (0, a.jsxs)(a.Fragment, { children: [B, Y, Q] })), (q[76] = B), (q[77] = Y), (q[78] = Q), (q[79] = W))
          : (W = q[79]),
        W
      )
    }
    function eu() {}
    function ep(e, t) {
      ;(0, L.startNewConversation)(e, {
        codexAppMode: "work",
        prefillPrompt: t,
        libraryFileCreation: !0,
        startInSidebar: !0,
        selectChat: !0,
      })
    }
  },
}
//# sourceMappingURL=687681.b8ed323cbc.js.map
